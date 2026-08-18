import { mkdtempSync, readFileSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, describe, expect, it } from "vitest";
import { openPrivateHealthStore, preparePrivateHealthDirectory } from "./health-store.js";

const directories: string[] = [];
const now = 1_800_000_000_000;

afterEach(() => {
  for (const directory of directories.splice(0)) {
    rmSync(directory, { recursive: true, force: true });
  }
});

function tempStateDirectory(): string {
  const directory = mkdtempSync(join(tmpdir(), "lisa-health-synthetic-"));
  directories.push(directory);
  return directory;
}

describe("private health store", () => {
  it("creates a dedicated private database with the complete v1 schema", () => {
    const stateDir = tempStateDirectory();
    const databasePath = preparePrivateHealthDirectory(stateDir);
    expect(databasePath).toBe(join(stateDir, "lisa-private-health.sqlite"));
    expect(statSync(stateDir).mode & 0o777).toBe(0o700);

    const store = openPrivateHealthStore(stateDir);
    expect(statSync(databasePath).mode & 0o777).toBe(0o600);
    const tables = (
      store.db
        .prepare("SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name")
        .all() as Array<{ name: string }>
    ).map((row) => row.name);
    expect(tables).toEqual([
      "appointments",
      "capacity_assessments",
      "corrections",
      "daily_checkpoints",
      "export_receipts",
      "health_schema_meta",
      "monthly_measurements",
      "monthly_reports",
      "observations",
      "treatment_events",
    ]);
    store.close();
  });

  it("records provenance and corrections without replacing the original observation", () => {
    const stateDir = tempStateDirectory();
    const store = openPrivateHealthStore(stateDir);
    const observationId = store.recordObservation({
      id: "synthetic-observation",
      category: "energy",
      observedAtMs: now,
      value: 3,
      unit: "scale",
      source: "user_report",
      confidence: "medium",
      status: "reported",
      createdAtMs: now,
    });
    store.recordCorrection({
      observationId,
      replacementValue: 4,
      reason: "synthetic correction reason",
      correctedAtMs: now + 1,
      provenance: "user_report",
    });
    expect(store.listObservations()).toEqual([
      expect.objectContaining({ id: observationId, value: 3, status: "reported" }),
    ]);
    expect(store.db.prepare("SELECT COUNT(*) AS count FROM corrections").get()).toEqual({
      count: 1,
    });
    store.close();
  });

  it("stores checkpoints, treatment, appointments, reports, capacity, extraction, and export receipts", () => {
    const stateDir = tempStateDirectory();
    const store = openPrivateHealthStore(stateDir);
    store.recordCheckpoint({
      localDate: "synthetic-date",
      checkpoint: "morning",
      fields: { energy: "not_reported", mood: 3, stress: 2 },
      missingFields: ["sleep"],
      createdAtMs: now,
    });
    store.recordTreatmentEvent({
      eventType: "synthetic-treatment-event",
      effectiveAtMs: now,
      fields: { detail: "not_reported" },
      source: "user_report",
      createdAtMs: now,
    });
    store.recordAppointment({
      scheduledAtMs: now,
      fields: { status: "not_reported" },
      source: "user_report",
      followUpDueAtMs: now + 1,
      createdAtMs: now,
    });
    store.recordMonthlyMeasurement({
      intervalStart: "synthetic-start",
      intervalEnd: "synthetic-end",
      measurementType: "waist",
      value: "not_reported",
      source: "user_report",
      createdAtMs: now,
    });
    store.recordMonthlyReport({
      intervalStart: "synthetic-start",
      intervalEnd: "synthetic-end",
      generatedHash: "synthetic-hash",
      deliveryState: "planned",
      destinationBindingId: "personal-binding",
      deadlineLocal: "synthetic-deadline",
      createdAtMs: now,
    });
    expect(() =>
      store.recordMonthlyReport({
        intervalStart: "synthetic-start",
        intervalEnd: "synthetic-end",
        generatedHash: "synthetic-hash",
        deliveryState: "planned",
        destinationBindingId: "opaque-work-binding",
        destinationKind: "work_email",
        deadlineLocal: "synthetic-deadline",
        createdAtMs: now,
      }),
    ).toThrow("private_health_personal_report_destination_required");
    store.recordCapacityAssessment({ privateState: "high", effectiveAtMs: now });
    store.recordPhotoDocumentExtraction({
      attachmentRef: "synthetic-attachment",
      source: "photograph_or_document",
      fields: [{ key: `ltfx.n.fb636e478c6d01209052.v1`, clarity: "unclear", confirmation: "pending" }],
    });
    store.recordExportReceipt({
      encryptedArtifactHash: "synthetic-artifact-hash",
      slot: "previous",
      driveBindingId: "opaque-backup-binding",
      providerReceipt: "synthetic-provider-receipt",
      verifiedAtMs: now,
    });
    const counts = store.db
      .prepare(
        `SELECT
          (SELECT COUNT(*) FROM daily_checkpoints) AS checkpoints,
          (SELECT COUNT(*) FROM treatment_events) AS treatments,
          (SELECT COUNT(*) FROM appointments) AS appointments,
          (SELECT COUNT(*) FROM monthly_measurements) AS measurements,
          (SELECT COUNT(*) FROM monthly_reports) AS reports,
          (SELECT COUNT(*) FROM capacity_assessments) AS capacity,
          (SELECT COUNT(*) FROM export_receipts) AS exports`,
      )
      .get();
    expect(counts).toEqual({
      checkpoints: 1,
      treatments: 1,
      appointments: 1,
      measurements: 1,
      reports: 1,
      capacity: 1,
      exports: 1,
    });
    expect(store.serializeBackup().byteLength).toBeGreaterThan(0);
    store.close();
  });

  it("fails closed for malformed source and missing correction targets without exposing values", () => {
    const stateDir = tempStateDirectory();
    const store = openPrivateHealthStore(stateDir);
    expect(() =>
      store.recordObservation({
        category: "synthetic",
        observedAtMs: now,
        value: "secret-value",
        source: "bad" as never,
      }),
    ).toThrow("private_health_invalid_observation_source");
    expect(() =>
      store.recordCorrection({
        observationId: "missing",
        replacementValue: "synthetic",
        reason: "synthetic",
        provenance: "user_report",
      }),
    ).toThrow("private_health_correction_observation_missing");
    const errorText = (() => {
      try {
        store.recordObservation({
          category: "synthetic",
          observedAtMs: now,
          value: "private-value",
          source: "bad" as never,
        });
      } catch (error) {
        return String(error);
      }
      return "";
    })();
    expect(errorText).not.toContain("private-value");
    store.close();
  });

  it("contains no email address or real-looking fixture data", () => {
    const source = readFileSync(
      new URL("./fixtures/synthetic-intake.json", import.meta.url),
      "utf8",
    );
    expect(source.includes("@")).toBe(false);
    expect(source).toContain("synthetic-only");
  });

  it("can reopen the same private database without a schema bump", () => {
    const stateDir = tempStateDirectory();
    const first = openPrivateHealthStore(stateDir);
    first.close();
    const second = openPrivateHealthStore(stateDir);
    expect(second.db.prepare("SELECT schema_version FROM health_schema_meta").get()).toEqual({
      schema_version: 1,
    });
    second.close();
    const readOnly = new DatabaseSync(join(stateDir, "lisa-private-health.sqlite"), {
      readOnly: true,
    });
    expect(readOnly.prepare("SELECT COUNT(*) AS count FROM observations").get()).toEqual({
      count: 0,
    });
    readOnly.close();
  });

  it("fails closed for invalid checkpoint acknowledgment and attachment fields", () => {
    const stateDir = tempStateDirectory();
    const store = openPrivateHealthStore(stateDir);
    expect(() =>
      store.recordCheckpoint({
        localDate: "synthetic-date",
        checkpoint: "morning",
        fields: { energy: "not_reported", mood: "not_reported", stress: "not_reported" },
        missingFields: ["sleep"],
        acknowledgment: "invalid" as never,
      }),
    ).toThrow("private_health_invalid_checkpoint_acknowledgment");
    expect(() =>
      store.recordPhotoDocumentExtraction({
        attachmentRef: "synthetic-attachment",
        source: "photograph_or_document",
        fields: [{ key: "", clarity: "unclear", confirmation: "pending" }],
      }),
    ).toThrow("private_health_invalid_attachment_fields");
    store.close();
  });
});
