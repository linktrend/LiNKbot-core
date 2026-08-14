import type { DatabaseSync } from "node:sqlite";
import {
  executeSqliteQuerySync,
  executeSqliteQueryTakeFirstSync,
  getNodeSqliteKysely,
  iterateSqliteQuerySync,
} from "../infra/kysely-sync.js";
import { LISA_COMPLIANCE_SCHEMA_SQL } from "./lisa-compliance-state-schema.js";
import {
  openOpenClawAgentDatabase,
  runOpenClawAgentWriteTransaction,
  type OpenClawAgentDatabaseOptions,
} from "./openclaw-agent-db.js";

type SelfieRow = {
  local_date: string;
  status: "Completed" | "Reported Late" | "Missed";
  reported_at_ms: number | null;
  source_event_id: string | null;
  acknowledgment_state: string;
};

type ObservationRow = {
  source_event_id: string;
  observed_at_ms: number;
  percentage: number;
  plugged: number;
  context: "desk" | "bedside" | "discharging";
  routine_changed: number;
  usable: number;
};

type RateModelRow = {
  context: "desk" | "bedside" | "discharging";
  direction: "charging" | "discharging";
  percent_per_hour: number;
  previous_percent_per_hour: number | null;
  sample_count: number;
  confidence_band: "low" | "medium" | "high";
  updated_at_ms: number;
  evidence_start_at_ms: number;
  evidence_end_at_ms: number;
  source_observation_id: string;
};

type PredictionRow = {
  observation_generation: string;
  predicted_35_at_ms: number | null;
  next_expected_charge_at_ms: number;
  confidence: string;
  freshness: string;
  alert_state: string;
  idempotency_key: string | null;
};

type ComplianceDatabase = {
  lisa_selfie_days: SelfieRow;
  lisa_battery_observations: ObservationRow;
  lisa_battery_rate_models: RateModelRow;
  lisa_battery_predictions: PredictionRow;
};

export type LisaComplianceStoreOptions = OpenClawAgentDatabaseOptions;

function assertNonEmpty(value: string, label: string): void {
  if (!value.trim() || value.includes("\0")) {
    throw new Error(`invalid ${label}`);
  }
}

function assertTimestamp(value: number, label: string): void {
  if (!Number.isInteger(value) || value < 0) {
    throw new Error(`invalid ${label}`);
  }
}

/** Additive lazy ensure; the normal per-agent schema version remains unchanged. */
export function ensureLisaComplianceStateSchema(options: LisaComplianceStoreOptions): void {
  runOpenClawAgentWriteTransaction(
    ({ db }) => {
      db.exec(LISA_COMPLIANCE_SCHEMA_SQL); // sqlite-allow-raw -- Static DDL for Lisa's additive schema ensure.
    },
    options,
    { operationLabel: "lisa-compliance.schema.ensure" },
  );
}

export function recordLisaSelfieDay(
  options: LisaComplianceStoreOptions,
  value: {
    localDate: string;
    status: "Completed" | "Reported Late" | "Missed";
    reportedAtMs?: number;
    sourceEventId?: string;
    acknowledgmentState?: string;
  },
): void {
  if (!/^\d{4}-\d{2}-\d{2}$/u.test(value.localDate)) {
    throw new Error("invalid local date");
  }
  if (value.reportedAtMs !== undefined) {
    assertTimestamp(value.reportedAtMs, "selfie report timestamp");
  }
  if (value.sourceEventId !== undefined) {
    assertNonEmpty(value.sourceEventId, "selfie source event");
  }
  ensureLisaComplianceStateSchema(options);
  runOpenClawAgentWriteTransaction(
    ({ db }) => {
      const query = getNodeSqliteKysely<ComplianceDatabase>(db);
      if (
        value.sourceEventId &&
        executeSqliteQueryTakeFirstSync(
          db,
          query
            .selectFrom("lisa_selfie_days")
            .select("source_event_id")
            .where("source_event_id", "=", value.sourceEventId),
        )
      ) {
        return;
      }
      executeSqliteQuerySync(
        db,
        query
          .insertInto("lisa_selfie_days")
          .values({
            local_date: value.localDate,
            status: value.status,
            reported_at_ms: value.reportedAtMs ?? null,
            source_event_id: value.sourceEventId ?? null,
            acknowledgment_state: value.acknowledgmentState ?? "unacknowledged",
          })
          .onConflict((conflict) => conflict.column("local_date").doNothing()),
      );
    },
    options,
    { operationLabel: "lisa-compliance.selfie.record" },
  );
}

/** Finalization is insert-only so midnight can never overwrite a valid report. */
export function finalizeLisaSelfieMissed(
  options: LisaComplianceStoreOptions,
  localDate: string,
): void {
  recordLisaSelfieDay(options, {
    localDate,
    status: "Missed",
    acknowledgmentState: "unacknowledged",
  });
}

export function readLisaSelfieDay(
  options: LisaComplianceStoreOptions,
  localDate: string,
): SelfieRow | undefined {
  ensureLisaComplianceStateSchema(options);
  const { db } = openOpenClawAgentDatabase(options);
  const query = getNodeSqliteKysely<ComplianceDatabase>(db);
  return executeSqliteQueryTakeFirstSync(
    db,
    query.selectFrom("lisa_selfie_days").selectAll().where("local_date", "=", localDate),
  );
}

function confidenceBand(samples: number): "low" | "medium" | "high" {
  return samples >= 4 ? "high" : samples >= 2 ? "medium" : "low";
}

function intervalRate(
  previous: ObservationRow,
  current: ObservationRow,
): {
  direction: "charging" | "discharging";
  percentPerHour: number;
  evidenceStartAtMs: number;
  evidenceEndAtMs: number;
} | null {
  const hours = (current.observed_at_ms - previous.observed_at_ms) / 3_600_000;
  const delta = current.percentage - previous.percentage;
  if (
    hours <= 0 ||
    previous.context !== current.context ||
    previous.routine_changed !== 0 ||
    current.routine_changed !== 0 ||
    previous.usable !== 1 ||
    current.usable !== 1 ||
    previous.percentage === 98 ||
    delta === 0
  ) {
    return null;
  }
  const direction = delta > 0 ? "charging" : "discharging";
  if (
    (direction === "charging" && current.plugged !== 1) ||
    (direction === "discharging" && current.plugged === 1)
  ) {
    return null;
  }
  return {
    direction,
    percentPerHour: delta / hours,
    evidenceStartAtMs: previous.observed_at_ms,
    evidenceEndAtMs: current.observed_at_ms,
  };
}

function updateRateModel(
  db: DatabaseSync,
  current: ObservationRow,
  interval: NonNullable<ReturnType<typeof intervalRate>>,
  nowMs: number,
): void {
  const query = getNodeSqliteKysely<ComplianceDatabase>(db);
  const previous = executeSqliteQueryTakeFirstSync(
    db,
    query
      .selectFrom("lisa_battery_rate_models")
      .selectAll()
      .where("context", "=", current.context)
      .where("direction", "=", interval.direction),
  );
  const samples = (previous?.sample_count ?? 0) + 1;
  const percentPerHour = previous
    ? (previous.percent_per_hour * previous.sample_count + interval.percentPerHour) / samples
    : interval.percentPerHour;
  executeSqliteQuerySync(
    db,
    query
      .insertInto("lisa_battery_rate_models")
      .values({
        context: current.context,
        direction: interval.direction,
        percent_per_hour: percentPerHour,
        previous_percent_per_hour: previous?.percent_per_hour ?? null,
        sample_count: samples,
        confidence_band: confidenceBand(samples),
        updated_at_ms: nowMs,
        evidence_start_at_ms: interval.evidenceStartAtMs,
        evidence_end_at_ms: interval.evidenceEndAtMs,
        source_observation_id: current.source_event_id,
      })
      .onConflict((conflict) =>
        conflict.columns(["context", "direction"]).doUpdateSet({
          percent_per_hour: percentPerHour,
          sample_count: samples,
          confidence_band: confidenceBand(samples),
          updated_at_ms: nowMs,
          previous_percent_per_hour: previous?.percent_per_hour ?? null,
          evidence_start_at_ms: interval.evidenceStartAtMs,
          evidence_end_at_ms: interval.evidenceEndAtMs,
          source_observation_id: current.source_event_id,
        }),
      ),
  );
}

export type LisaBatteryObservationInput = {
  sourceEventId: string;
  observedAtMs: number;
  percentage: number;
  plugged: boolean;
  context: "desk" | "bedside" | "discharging";
  usable: boolean;
  routineChanged?: boolean;
};

export function recordLisaBatteryObservation(
  options: LisaComplianceStoreOptions,
  value: LisaBatteryObservationInput,
): void {
  assertNonEmpty(value.sourceEventId, "battery source event");
  assertTimestamp(value.observedAtMs, "battery observation timestamp");
  if (!Number.isInteger(value.percentage) || value.percentage < 0 || value.percentage > 100) {
    throw new Error("invalid battery percentage");
  }
  if (value.plugged && value.context === "discharging") {
    throw new Error("plugged battery cannot use discharging context");
  }
  if (typeof value.usable !== "boolean") {
    throw new Error("invalid battery usable state");
  }
  if (value.routineChanged !== undefined && typeof value.routineChanged !== "boolean") {
    throw new Error("invalid battery routine state");
  }
  if (!(["desk", "bedside", "discharging"] as const).includes(value.context)) {
    throw new Error("invalid battery context");
  }
  ensureLisaComplianceStateSchema(options);
  runOpenClawAgentWriteTransaction(
    ({ db }) => {
      const query = getNodeSqliteKysely<ComplianceDatabase>(db);
      const existing = executeSqliteQueryTakeFirstSync(
        db,
        query
          .selectFrom("lisa_battery_observations")
          .selectAll()
          .where("source_event_id", "=", value.sourceEventId),
      );
      if (existing) {
        return;
      }
      const previous = executeSqliteQueryTakeFirstSync(
        db,
        query
          .selectFrom("lisa_battery_observations")
          .selectAll()
          .where("usable", "=", 1)
          .where("context", "=", value.context)
          .where("observed_at_ms", "<", value.observedAtMs)
          .orderBy("observed_at_ms", "desc")
          .orderBy("source_event_id", "desc")
          .limit(1),
      );
      const current: ObservationRow = {
        source_event_id: value.sourceEventId,
        observed_at_ms: value.observedAtMs,
        percentage: value.percentage,
        plugged: value.plugged ? 1 : 0,
        context: value.context,
        routine_changed: value.routineChanged ? 1 : 0,
        usable: value.usable ? 1 : 0,
      };
      executeSqliteQuerySync(db, query.insertInto("lisa_battery_observations").values(current));
      const interval = previous ? intervalRate(previous, current) : null;
      if (interval) {
        updateRateModel(db, current, interval, value.observedAtMs);
      }
    },
    options,
    { operationLabel: "lisa-compliance.battery.record" },
  );
}

export function listLisaBatteryObservations(options: LisaComplianceStoreOptions): ObservationRow[] {
  ensureLisaComplianceStateSchema(options);
  const { db } = openOpenClawAgentDatabase(options);
  const query = getNodeSqliteKysely<ComplianceDatabase>(db);
  return [
    ...iterateSqliteQuerySync(
      db,
      query.selectFrom("lisa_battery_observations").selectAll().orderBy("observed_at_ms"),
    ),
  ];
}

export function readLisaBatteryRateModel(
  options: LisaComplianceStoreOptions,
  context: "desk" | "bedside" | "discharging",
  direction: "charging" | "discharging",
): RateModelRow | undefined {
  ensureLisaComplianceStateSchema(options);
  const { db } = openOpenClawAgentDatabase(options);
  const query = getNodeSqliteKysely<ComplianceDatabase>(db);
  return executeSqliteQueryTakeFirstSync(
    db,
    query
      .selectFrom("lisa_battery_rate_models")
      .selectAll()
      .where("context", "=", context)
      .where("direction", "=", direction),
  );
}

export type LisaBatteryPredictionInput = {
  observationGeneration: string;
  predicted35AtMs: number | null;
  nextExpectedChargeAtMs: number;
  confidence: string;
  freshness: string;
  alertState: string;
  idempotencyKey: string | null;
};

export function recordLisaBatteryPrediction(
  options: LisaComplianceStoreOptions,
  value: LisaBatteryPredictionInput,
): void {
  assertNonEmpty(value.observationGeneration, "battery observation generation");
  assertTimestamp(value.nextExpectedChargeAtMs, "next expected charge timestamp");
  ensureLisaComplianceStateSchema(options);
  runOpenClawAgentWriteTransaction(
    ({ db }) => {
      const query = getNodeSqliteKysely<ComplianceDatabase>(db);
      executeSqliteQuerySync(
        db,
        query
          .insertInto("lisa_battery_predictions")
          .values({
            observation_generation: value.observationGeneration,
            predicted_35_at_ms: value.predicted35AtMs,
            next_expected_charge_at_ms: value.nextExpectedChargeAtMs,
            confidence: value.confidence,
            freshness: value.freshness,
            alert_state: value.alertState,
            idempotency_key: value.idempotencyKey,
          })
          .onConflict((conflict) =>
            conflict.column("observation_generation").doUpdateSet({
              predicted_35_at_ms: value.predicted35AtMs,
              next_expected_charge_at_ms: value.nextExpectedChargeAtMs,
              confidence: value.confidence,
              freshness: value.freshness,
              alert_state: value.alertState,
              idempotency_key: value.idempotencyKey,
            }),
          ),
      );
    },
    options,
    { operationLabel: "lisa-compliance.battery.prediction" },
  );
}

export function readLisaBatteryPrediction(
  options: LisaComplianceStoreOptions,
  observationGeneration: string,
): PredictionRow | undefined {
  ensureLisaComplianceStateSchema(options);
  const { db } = openOpenClawAgentDatabase(options);
  const query = getNodeSqliteKysely<ComplianceDatabase>(db);
  return executeSqliteQueryTakeFirstSync(
    db,
    query
      .selectFrom("lisa_battery_predictions")
      .selectAll()
      .where("observation_generation", "=", observationGeneration),
  );
}
