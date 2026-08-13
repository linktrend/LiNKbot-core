import { executeSqliteQuerySync, getNodeSqliteKysely } from "../infra/kysely-sync.js";
import { openOpenClawAgentDatabase, runOpenClawAgentWriteTransaction, type OpenClawAgentDatabaseOptions } from "./openclaw-agent-db.js";
import { LISA_COMPLIANCE_SCHEMA_SQL } from "./lisa-compliance-state-schema.js";

type ComplianceDb = { lisa_selfie_days: { local_date: string; status: string; reported_at_ms: number | null; source_event_id: string | null; acknowledgment_state: string }; lisa_battery_observations: { source_event_id: string; observed_at_ms: number; percentage: number; plugged: number; context: string; usable: number } };
export type LisaComplianceStoreOptions = OpenClawAgentDatabaseOptions;

/** Lazy additive ensure; the normal agent schema version remains unchanged. */
export function ensureLisaComplianceStateSchema(options: LisaComplianceStoreOptions): void {
  runOpenClawAgentWriteTransaction(({ db }) => { db.exec(LISA_COMPLIANCE_SCHEMA_SQL); }, options, { operationLabel: "lisa-compliance.schema.ensure" });
}

export function recordLisaSelfieDay(options: LisaComplianceStoreOptions, value: { localDate: string; status: "Completed" | "Reported Late" | "Missed"; reportedAtMs?: number; sourceEventId?: string; acknowledgmentState?: string }): void {
  ensureLisaComplianceStateSchema(options);
  runOpenClawAgentWriteTransaction(({ db }) => {
    const q = getNodeSqliteKysely<ComplianceDb>(db);
    executeSqliteQuerySync(db, q.insertInto("lisa_selfie_days").values({ local_date: value.localDate, status: value.status, reported_at_ms: value.reportedAtMs ?? null, source_event_id: value.sourceEventId ?? null, acknowledgment_state: value.acknowledgmentState ?? "unacknowledged" }).onConflict((c) => c.column("local_date").doNothing()));
  }, options, { operationLabel: "lisa-compliance.selfie.record" });
}

export function recordLisaBatteryObservation(options: LisaComplianceStoreOptions, value: { sourceEventId: string; observedAtMs: number; percentage: number; plugged: boolean; context: "desk" | "bedside" | "discharging"; usable: boolean }): void {
  if (!Number.isInteger(value.percentage) || value.percentage < 0 || value.percentage > 100) throw new Error("invalid battery percentage");
  ensureLisaComplianceStateSchema(options);
  runOpenClawAgentWriteTransaction(({ db }) => { const q = getNodeSqliteKysely<ComplianceDb>(db); executeSqliteQuerySync(db, q.insertInto("lisa_battery_observations").values({ source_event_id: value.sourceEventId, observed_at_ms: value.observedAtMs, percentage: value.percentage, plugged: value.plugged ? 1 : 0, context: value.context, usable: value.usable ? 1 : 0 }).onConflict((c) => c.column("source_event_id").doNothing())); }, options, { operationLabel: "lisa-compliance.battery.record" });
}

export function readLisaSelfieDay(options: LisaComplianceStoreOptions, localDate: string) { const { db } = openOpenClawAgentDatabase(options); return db.prepare("SELECT * FROM lisa_selfie_days WHERE local_date = ?").get(localDate); }
