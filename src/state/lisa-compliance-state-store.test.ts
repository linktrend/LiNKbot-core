import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  ensureLisaComplianceStateSchema,
  finalizeLisaSelfieMissed,
  listLisaBatteryObservations,
  readLisaBatteryPrediction,
  readLisaBatteryRateModel,
  readLisaSelfieDay,
  recordLisaBatteryObservation,
  recordLisaBatteryPrediction,
  recordLisaSelfieDay,
} from "./lisa-compliance-state-store.js";
import {
  closeOpenClawAgentDatabasesForTest,
  openOpenClawAgentDatabase,
} from "./openclaw-agent-db.js";

const dirs: string[] = [];

afterEach(() => {
  closeOpenClawAgentDatabasesForTest();
  for (const dir of dirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

function options() {
  const dir = mkdtempSync(join(tmpdir(), "lisa-compliance-"));
  dirs.push(dir);
  return { agentId: "lisa", path: join(dir, "agent.sqlite") };
}

describe("Lisa compliance state", () => {
  it("lazy-ensures all strict tables without changing the agent schema version", () => {
    const o = options();
    ensureLisaComplianceStateSchema(o);
    const { db } = openOpenClawAgentDatabase(o);
    const names = db
      .prepare(
        "SELECT name FROM sqlite_master WHERE type = 'table' AND name LIKE 'lisa_%' ORDER BY name",
      )
      .all() as Array<{ name: string }>;
    expect(names.map((row) => row.name)).toEqual([
      "lisa_battery_observations",
      "lisa_battery_predictions",
      "lisa_battery_rate_models",
      "lisa_selfie_days",
    ]);
    expect(db.prepare("PRAGMA user_version").get()).toEqual({ user_version: 13 });
  });

  it("is idempotent by source event and finalizes a missing day only once", () => {
    const o = options();
    recordLisaSelfieDay(o, {
      localDate: "2026-08-13",
      status: "Completed",
      sourceEventId: "selfie-1",
      reportedAtMs: 100,
    });
    recordLisaSelfieDay(o, {
      localDate: "2026-08-14",
      status: "Reported Late",
      sourceEventId: "selfie-1",
      reportedAtMs: 100,
    });
    recordLisaSelfieDay(o, {
      localDate: "2026-08-13",
      status: "Completed",
      sourceEventId: "selfie-1",
      reportedAtMs: 100,
    });
    expect(readLisaSelfieDay(o, "2026-08-13")).toMatchObject({
      status: "Completed",
      source_event_id: "selfie-1",
    });

    finalizeLisaSelfieMissed(o, "2026-08-14");
    finalizeLisaSelfieMissed(o, "2026-08-14");
    recordLisaSelfieDay(o, { localDate: "2026-08-14", status: "Completed", sourceEventId: "late" });
    expect(readLisaSelfieDay(o, "2026-08-14")).toMatchObject({ status: "Missed" });
  });

  it("updates separate charging models and keeps interval provenance", () => {
    const o = options();
    recordLisaBatteryObservation(o, {
      sourceEventId: "desk-1",
      observedAtMs: 0,
      percentage: 50,
      plugged: true,
      context: "desk",
      usable: true,
      routineChanged: false,
    });
    recordLisaBatteryObservation(o, {
      sourceEventId: "desk-2",
      observedAtMs: 3_600_000,
      percentage: 60,
      plugged: true,
      context: "desk",
      usable: true,
      routineChanged: false,
    });
    recordLisaBatteryObservation(o, {
      sourceEventId: "bedside-1",
      observedAtMs: 7_200_000,
      percentage: 70,
      plugged: true,
      context: "bedside",
      usable: true,
      routineChanged: true,
    });

    expect(readLisaBatteryRateModel(o, "desk", "charging")).toMatchObject({
      percent_per_hour: 10,
      sample_count: 1,
      source_observation_id: "desk-2",
      evidence_start_at_ms: 0,
      evidence_end_at_ms: 3_600_000,
      previous_percent_per_hour: null,
    });
    expect(readLisaBatteryRateModel(o, "bedside", "charging")).toBeUndefined();
    expect(listLisaBatteryObservations(o)).toHaveLength(3);
    expect(listLisaBatteryObservations(o)[2]).toMatchObject({ routine_changed: 1 });
  });

  it("does not cross a routine change and keeps the latest interval evidence", () => {
    const o = options();
    recordLisaBatteryObservation(o, {
      sourceEventId: "desk-a",
      observedAtMs: 0,
      percentage: 40,
      plugged: true,
      context: "desk",
      usable: true,
    });
    recordLisaBatteryObservation(o, {
      sourceEventId: "desk-b",
      observedAtMs: 3_600_000,
      percentage: 50,
      plugged: true,
      context: "desk",
      usable: true,
      routineChanged: true,
    });
    expect(readLisaBatteryRateModel(o, "desk", "charging")).toBeUndefined();
    recordLisaBatteryObservation(o, {
      sourceEventId: "desk-c",
      observedAtMs: 7_200_000,
      percentage: 60,
      plugged: true,
      context: "desk",
      usable: true,
    });
    recordLisaBatteryObservation(o, {
      sourceEventId: "desk-d",
      observedAtMs: 10_800_000,
      percentage: 70,
      plugged: true,
      context: "desk",
      usable: true,
    });
    expect(readLisaBatteryRateModel(o, "desk", "charging")).toMatchObject({
      percent_per_hour: 10,
      previous_percent_per_hour: null,
      evidence_start_at_ms: 7_200_000,
      evidence_end_at_ms: 10_800_000,
    });
  });

  it("does not derive a rate from a late unplug after the 98% plateau", () => {
    const o = options();
    recordLisaBatteryObservation(o, {
      sourceEventId: "plateau-full",
      observedAtMs: 0,
      percentage: 98,
      plugged: true,
      context: "desk",
      usable: true,
    });
    recordLisaBatteryObservation(o, {
      sourceEventId: "plateau-unplug",
      observedAtMs: 7_200_000,
      percentage: 97,
      plugged: false,
      context: "desk",
      usable: true,
    });
    expect(readLisaBatteryRateModel(o, "desk", "discharging")).toBeUndefined();
  });

  it("rejects invalid percentages and plugged discharging state", () => {
    const o = options();
    expect(() =>
      recordLisaBatteryObservation(o, {
        sourceEventId: "bad-percent",
        observedAtMs: 1,
        percentage: 101,
        plugged: false,
        context: "discharging",
        usable: true,
      }),
    ).toThrow("invalid battery percentage");
    expect(() =>
      recordLisaBatteryObservation(o, {
        sourceEventId: "bad-state",
        observedAtMs: 1,
        percentage: 50,
        plugged: true,
        context: "discharging",
        usable: true,
      }),
    ).toThrow("plugged battery cannot use discharging context");
  });

  it("stores one prediction generation and updates its alert replacement", () => {
    const o = options();
    recordLisaBatteryPrediction(o, {
      observationGeneration: "battery-1",
      predicted35AtMs: 3_600_000,
      nextExpectedChargeAtMs: 7_200_000,
      confidence: "medium",
      freshness: "fresh",
      alertState: "due",
      idempotencyKey: "battery-1:35:3600000",
    });
    recordLisaBatteryPrediction(o, {
      observationGeneration: "battery-1",
      predicted35AtMs: 4_200_000,
      nextExpectedChargeAtMs: 7_200_000,
      confidence: "high",
      freshness: "fresh",
      alertState: "due",
      idempotencyKey: "battery-1:35:4200000",
    });
    expect(readLisaBatteryPrediction(o, "battery-1")).toMatchObject({
      predicted_35_at_ms: 4_200_000,
      confidence: "high",
      idempotency_key: "battery-1:35:4200000",
    });
  });
});
