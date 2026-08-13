import { randomUUID } from "node:crypto";
import { chmodSync, mkdirSync, statSync } from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import {
  isHealthCheckpoint,
  isObservationSource,
  mapCapacityForWork,
  type CapacityAssessmentInput,
  type CheckpointInput,
  type CorrectionInput,
  type JsonValue,
  type ObservationInput,
  type PhotoDocumentExtraction,
} from "./health-contracts.js";
import { LISA_PRIVATE_HEALTH_SCHEMA_SQL } from "./health-schema.js";

const HEALTH_DATABASE_FILENAME = "lisa-private-health.sqlite";

type StoredObservation = ObservationInput & { id: string; createdAtMs: number };

export type PrivateHealthStore = {
  databasePath: string;
  db: DatabaseSync;
  recordObservation: (input: ObservationInput) => string;
  recordCorrection: (input: CorrectionInput) => string;
  recordCheckpoint: (input: CheckpointInput) => string;
  recordTreatmentEvent: (input: {
    id?: string;
    eventType: string;
    effectiveAtMs: number;
    fields: Record<string, JsonValue>;
    source: ObservationInput["source"];
    createdAtMs?: number;
  }) => string;
  recordAppointment: (input: {
    id?: string;
    scheduledAtMs: number;
    fields: Record<string, JsonValue>;
    source: ObservationInput["source"];
    followUpDueAtMs?: number;
    createdAtMs?: number;
  }) => string;
  recordMonthlyMeasurement: (input: {
    id?: string;
    intervalStart: string;
    intervalEnd: string;
    measurementType: string;
    value: JsonValue;
    source: ObservationInput["source"];
    createdAtMs?: number;
  }) => string;
  recordMonthlyReport: (input: {
    id?: string;
    intervalStart: string;
    intervalEnd: string;
    generatedHash: string;
    deliveryState: "planned" | "delivered" | "failed" | "not_reported";
    destinationBindingId: string;
    deadlineLocal: string;
    destinationKind?: "personal_email" | "work_email";
    createdAtMs?: number;
  }) => string;
  recordCapacityAssessment: (input: CapacityAssessmentInput) => string;
  recordExportReceipt: (input: {
    id?: string;
    encryptedArtifactHash: string;
    slot: "current" | "previous";
    driveBindingId: string;
    providerReceipt?: string;
    verifiedAtMs?: number;
  }) => string;
  recordPhotoDocumentExtraction: (input: PhotoDocumentExtraction) => string;
  listObservations: (category?: string) => StoredObservation[];
  serializeBackup: () => Uint8Array;
  close: () => void;
};

function fail(code: string): never {
  throw new Error(`private_health_${code}`);
}

function requireText(value: string | undefined, code: string): string {
  if (!value || value.trim().length === 0) {
    fail(code);
  }
  return value;
}

function requireAcknowledgment(
  value: CheckpointInput["acknowledgment"],
): "pending" | "acknowledged" {
  if (value !== undefined && value !== "pending" && value !== "acknowledged") {
    fail("invalid_checkpoint_acknowledgment");
  }
  return value ?? "pending";
}

function requireTime(value: number, code: string): number {
  if (!Number.isSafeInteger(value) || value < 0) {
    fail(code);
  }
  return value;
}

function requireJson(value: unknown, code: string): string {
  try {
    const serialized = JSON.stringify(value);
    if (serialized === undefined) {
      fail(code);
    }
    return serialized;
  } catch {
    fail(code);
  }
}

function beginTransaction(db: DatabaseSync, operation: () => void): void {
  db.exec("BEGIN IMMEDIATE;");
  try {
    operation();
    db.exec("COMMIT;");
  } catch (error) {
    try {
      db.exec("ROLLBACK;");
    } catch {
      // Preserve the original failure without exposing private values.
    }
    throw error;
  }
}

function idOrNew(id: string | undefined): string {
  return id?.trim() || randomUUID();
}

function ensurePrivateDirectory(agentStateDir: string): string {
  requireText(agentStateDir, "missing_state_directory");
  mkdirSync(agentStateDir, { recursive: true, mode: 0o700 });
  chmodSync(agentStateDir, 0o700);
  const mode = statSync(agentStateDir).mode & 0o777;
  if (mode !== 0o700) {
    fail("directory_not_private");
  }
  return path.join(agentStateDir, HEALTH_DATABASE_FILENAME);
}

/** Prepare only the dedicated path; no shared state or generic store is opened. */
export function preparePrivateHealthDirectory(agentStateDir: string): string {
  return ensurePrivateDirectory(agentStateDir);
}

export function openPrivateHealthStore(agentStateDir: string): PrivateHealthStore {
  const databasePath = ensurePrivateDirectory(agentStateDir);
  const db = new DatabaseSync(databasePath);
  try {
    db.exec("PRAGMA busy_timeout = 5000; PRAGMA foreign_keys = ON;");
    beginTransaction(db, () => db.exec(LISA_PRIVATE_HEALTH_SCHEMA_SQL));
    chmodSync(databasePath, 0o600);
    if ((statSync(databasePath).mode & 0o777) !== 0o600) {
      fail("database_not_private");
    }
  } catch (error) {
    db.close();
    throw error;
  }

  const recordObservation = (input: ObservationInput): string => {
    const id = idOrNew(input.id);
    const createdAtMs = input.createdAtMs ?? Date.now();
    requireText(input.category, "invalid_observation_category");
    requireTime(input.observedAtMs, "invalid_observation_time");
    requireTime(createdAtMs, "invalid_created_time");
    if (!isObservationSource(input.source)) {
      fail("invalid_observation_source");
    }
    const confidence = input.confidence ?? "medium";
    const status = input.status ?? "reported";
    if (!["low", "medium", "high"].includes(confidence)) {
      fail("invalid_observation_confidence");
    }
    if (!["reported", "calculated", "estimated", "verified", "not_reported"].includes(status)) {
      fail("invalid_observation_status");
    }
    beginTransaction(db, () => {
      db.prepare(
        `INSERT INTO observations
          (id, category, observed_at_ms, value_json, unit, source_code, confidence, status, attachment_ref, created_at_ms)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      ).run(
        id,
        input.category,
        input.observedAtMs,
        requireJson(input.value, "invalid_observation_value"),
        input.unit ?? null,
        input.source,
        confidence,
        status,
        input.attachmentRef ?? null,
        createdAtMs,
      );
    });
    return id;
  };

  const recordCorrection = (input: CorrectionInput): string => {
    const id = idOrNew(input.id);
    requireText(input.observationId, "invalid_correction_observation");
    requireText(input.reason, "invalid_correction_reason");
    const correctedAtMs = input.correctedAtMs ?? Date.now();
    requireTime(correctedAtMs, "invalid_correction_time");
    if (!isObservationSource(input.provenance)) {
      fail("invalid_correction_source");
    }
    beginTransaction(db, () => {
      const existing = db
        .prepare("SELECT id FROM observations WHERE id = ?")
        .get(input.observationId) as { id?: string } | undefined;
      if (!existing?.id) {
        fail("correction_observation_missing");
      }
      db.prepare(
        `INSERT INTO corrections
          (id, observation_id, replacement_value_json, reason, corrected_at_ms, provenance_code)
         VALUES (?, ?, ?, ?, ?, ?)`,
      ).run(
        id,
        input.observationId,
        requireJson(input.replacementValue, "invalid_replacement_value"),
        input.reason,
        correctedAtMs,
        input.provenance,
      );
    });
    return id;
  };

  const recordCheckpoint = (input: CheckpointInput): string => {
    const id = idOrNew(input.id);
    requireText(input.localDate, "invalid_checkpoint_date");
    if (!isHealthCheckpoint(input.checkpoint)) {
      fail("invalid_checkpoint");
    }
    const createdAtMs = input.createdAtMs ?? Date.now();
    requireTime(createdAtMs, "invalid_checkpoint_time");
    const acknowledgment = requireAcknowledgment(input.acknowledgment);
    if (!Array.isArray(input.missingFields) || input.missingFields.some((field) => !field.trim())) {
      fail("invalid_checkpoint_missing_fields");
    }
    beginTransaction(db, () => {
      db.prepare(
        `INSERT INTO daily_checkpoints
          (id, local_date, checkpoint, fields_json, missing_fields_json, acknowledgment, created_at_ms)
         VALUES (?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(local_date, checkpoint) DO UPDATE SET
           fields_json = excluded.fields_json,
           missing_fields_json = excluded.missing_fields_json,
           acknowledgment = excluded.acknowledgment,
           created_at_ms = excluded.created_at_ms`,
      ).run(
        id,
        input.localDate,
        input.checkpoint,
        requireJson(input.fields, "invalid_checkpoint_fields"),
        requireJson(input.missingFields, "invalid_checkpoint_missing_fields"),
        acknowledgment,
        createdAtMs,
      );
    });
    return id;
  };

  const recordTreatmentEvent = (input: {
    id?: string;
    eventType: string;
    effectiveAtMs: number;
    fields: Record<string, JsonValue>;
    source: ObservationInput["source"];
    createdAtMs?: number;
  }): string => {
    const id = idOrNew(input.id);
    requireText(input.eventType, "invalid_treatment_event");
    requireTime(input.effectiveAtMs, "invalid_treatment_time");
    if (!isObservationSource(input.source)) {
      fail("invalid_treatment_source");
    }
    requireTime(input.createdAtMs ?? Date.now(), "invalid_treatment_created_time");
    beginTransaction(db, () => {
      db.prepare(
        `INSERT INTO treatment_events
          (id, event_type, effective_at_ms, fields_json, source_code, created_at_ms)
         VALUES (?, ?, ?, ?, ?, ?)`,
      ).run(
        id,
        input.eventType,
        input.effectiveAtMs,
        requireJson(input.fields, "invalid_treatment_fields"),
        input.source,
        input.createdAtMs ?? Date.now(),
      );
    });
    return id;
  };

  const recordAppointment = (input: {
    id?: string;
    scheduledAtMs: number;
    fields: Record<string, JsonValue>;
    source: ObservationInput["source"];
    followUpDueAtMs?: number;
    createdAtMs?: number;
  }): string => {
    const id = idOrNew(input.id);
    requireTime(input.scheduledAtMs, "invalid_appointment_time");
    if (input.followUpDueAtMs !== undefined) {
      requireTime(input.followUpDueAtMs, "invalid_follow_up_time");
    }
    if (!isObservationSource(input.source)) {
      fail("invalid_appointment_source");
    }
    requireTime(input.createdAtMs ?? Date.now(), "invalid_appointment_created_time");
    beginTransaction(db, () => {
      db.prepare(
        `INSERT INTO appointments
          (id, scheduled_at_ms, fields_json, source_code, follow_up_due_at_ms, created_at_ms)
         VALUES (?, ?, ?, ?, ?, ?)`,
      ).run(
        id,
        input.scheduledAtMs,
        requireJson(input.fields, "invalid_appointment_fields"),
        input.source,
        input.followUpDueAtMs ?? null,
        input.createdAtMs ?? Date.now(),
      );
    });
    return id;
  };

  const recordMonthlyMeasurement = (input: {
    id?: string;
    intervalStart: string;
    intervalEnd: string;
    measurementType: string;
    value: JsonValue;
    source: ObservationInput["source"];
    createdAtMs?: number;
  }): string => {
    const id = idOrNew(input.id);
    requireText(input.intervalStart, "invalid_measurement_start");
    requireText(input.intervalEnd, "invalid_measurement_end");
    requireText(input.measurementType, "invalid_measurement_type");
    if (!isObservationSource(input.source)) {
      fail("invalid_measurement_source");
    }
    requireTime(input.createdAtMs ?? Date.now(), "invalid_measurement_created_time");
    beginTransaction(db, () => {
      db.prepare(
        `INSERT INTO monthly_measurements
          (id, interval_start, interval_end, measurement_type, value_json, source_code, created_at_ms)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
      ).run(
        id,
        input.intervalStart,
        input.intervalEnd,
        input.measurementType,
        requireJson(input.value, "invalid_measurement_value"),
        input.source,
        input.createdAtMs ?? Date.now(),
      );
    });
    return id;
  };

  const recordMonthlyReport = (input: {
    id?: string;
    intervalStart: string;
    intervalEnd: string;
    generatedHash: string;
    deliveryState: "planned" | "delivered" | "failed" | "not_reported";
    destinationBindingId: string;
    deadlineLocal: string;
    destinationKind?: "personal_email" | "work_email";
    createdAtMs?: number;
  }): string => {
    const id = idOrNew(input.id);
    requireText(input.generatedHash, "invalid_report_hash");
    requireText(input.destinationBindingId, "invalid_report_destination");
    if (input.destinationKind === "work_email") {
      fail("personal_report_destination_required");
    }
    requireText(input.intervalStart, "invalid_report_start");
    requireText(input.intervalEnd, "invalid_report_end");
    requireText(input.deadlineLocal, "invalid_report_deadline");
    requireTime(input.createdAtMs ?? Date.now(), "invalid_report_created_time");
    beginTransaction(db, () => {
      db.prepare(
        `INSERT INTO monthly_reports
          (id, interval_start, interval_end, generated_hash, delivery_state, destination_binding_id, deadline_local, created_at_ms)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      ).run(
        id,
        input.intervalStart,
        input.intervalEnd,
        input.generatedHash,
        input.deliveryState,
        input.destinationBindingId,
        input.deadlineLocal,
        input.createdAtMs ?? Date.now(),
      );
    });
    return id;
  };

  const recordCapacityAssessment = (input: CapacityAssessmentInput): string => {
    const id = idOrNew(input.id);
    requireTime(input.effectiveAtMs, "invalid_capacity_time");
    if (!["high", "normal", "reduced", "unavailable", "recovered"].includes(input.privateState)) {
      fail("invalid_capacity_state");
    }
    if (input.timeOffAnswer && !["yes", "no", "not_asked"].includes(input.timeOffAnswer)) {
      fail("invalid_capacity_time_off_answer");
    }
    beginTransaction(db, () => {
      db.prepare(
        `INSERT INTO capacity_assessments
          (id, private_state, time_off_answer, mapped_state, effective_at_ms)
         VALUES (?, ?, ?, ?, ?)`,
      ).run(
        id,
        input.privateState,
        input.timeOffAnswer ?? "not_asked",
        mapCapacityForWork(input.privateState),
        input.effectiveAtMs,
      );
    });
    return id;
  };

  const recordExportReceipt = (input: {
    id?: string;
    encryptedArtifactHash: string;
    slot: "current" | "previous";
    driveBindingId: string;
    providerReceipt?: string;
    verifiedAtMs?: number;
  }): string => {
    const id = idOrNew(input.id);
    requireText(input.encryptedArtifactHash, "invalid_export_hash");
    requireText(input.driveBindingId, "invalid_export_binding");
    if (input.slot !== "current" && input.slot !== "previous") {
      fail("invalid_export_slot");
    }
    if (input.providerReceipt !== undefined) {
      requireText(input.providerReceipt, "invalid_export_provider_receipt");
    }
    if (input.verifiedAtMs !== undefined) {
      requireTime(input.verifiedAtMs, "invalid_export_verification_time");
    }
    beginTransaction(db, () => {
      db.prepare(
        `INSERT INTO export_receipts
          (id, encrypted_artifact_hash, slot, drive_binding_id, provider_receipt, verified_at_ms)
         VALUES (?, ?, ?, ?, ?, ?)`,
      ).run(
        id,
        input.encryptedArtifactHash,
        input.slot,
        input.driveBindingId,
        input.providerReceipt ?? null,
        input.verifiedAtMs ?? null,
      );
    });
    return id;
  };

  const recordPhotoDocumentExtraction = (input: PhotoDocumentExtraction): string => {
    requireText(input.attachmentRef, "invalid_attachment_reference");
    if (input.source !== "photograph_or_document") {
      fail("invalid_attachment_source");
    }
    if (
      !Array.isArray(input.fields) ||
      input.fields.some(
        (field) =>
          !field.key.trim() ||
          (field.clarity !== "clear" && field.clarity !== "unclear") ||
          !["pending", "confirmed", "rejected"].includes(field.confirmation),
      )
    ) {
      fail("invalid_attachment_fields");
    }
    return recordObservation({
      category: "photo_document_extraction",
      observedAtMs: Date.now(),
      value: input,
      source: input.source,
      confidence: "medium",
      status: "reported",
      attachmentRef: input.attachmentRef,
    });
  };

  const listObservations = (category?: string): StoredObservation[] => {
    const rows = (
      category
        ? db
            .prepare("SELECT * FROM observations WHERE category = ? ORDER BY observed_at_ms")
            .all(category)
        : db.prepare("SELECT * FROM observations ORDER BY observed_at_ms").all()
    ) as Array<{
      id: string;
      category: string;
      observed_at_ms: number;
      value_json: string;
      unit: string | null;
      source_code: ObservationInput["source"];
      confidence: "low" | "medium" | "high";
      status: ObservationInput["status"];
      attachment_ref: string | null;
      created_at_ms: number;
    }>;
    return rows.map((row) => ({
      id: row.id,
      category: row.category,
      observedAtMs: row.observed_at_ms,
      value: JSON.parse(row.value_json) as JsonValue,
      ...(row.unit ? { unit: row.unit } : {}),
      source: row.source_code,
      confidence: row.confidence,
      status: row.status,
      ...(row.attachment_ref ? { attachmentRef: row.attachment_ref } : {}),
      createdAtMs: row.created_at_ms,
    }));
  };

  return {
    databasePath,
    db,
    recordObservation,
    recordCorrection,
    recordCheckpoint,
    recordTreatmentEvent,
    recordAppointment,
    recordMonthlyMeasurement,
    recordMonthlyReport,
    recordCapacityAssessment,
    recordExportReceipt,
    recordPhotoDocumentExtraction,
    listObservations,
    serializeBackup: () => db.serialize(),
    close: () => {
      if (db.isOpen) {
        db.close();
      }
    },
  };
}

export function privateHealthSchemaSql(): string {
  return LISA_PRIVATE_HEALTH_SCHEMA_SQL;
}
