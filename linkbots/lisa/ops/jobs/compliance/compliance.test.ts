import { describe, expect, it } from "vitest";
import {
  buildBatteryPrediction,
  estimateRate,
  evaluateHeartbeatBatteryAlert,
  heartbeatBatteryAlert,
  renderBatteryStatus,
} from "./battery.js";
import {
  classifySelfieReport,
  selfieAcknowledgment,
  shouldSendConditionalSelfieReminder,
} from "./selfie.js";

const dischargeObservation = {
  atMs: 0,
  percentage: 50,
  plugged: false,
  context: "discharging" as const,
  sourceEventId: "battery-1",
};

describe("Lisa personal compliance", () => {
  it("applies exact selfie boundaries and rejects promises", () => {
    expect(classifySelfieReport({ hour: 17, minute: 59 }, "s-1", "done")).toBe("invalid_before_18");
    expect(classifySelfieReport({ hour: 18, minute: 0 }, "s-2", "taken")).toBe("Completed");
    expect(classifySelfieReport({ hour: 21, minute: 59 }, "s-2b", "taken")).toBe("Completed");
    expect(classifySelfieReport({ hour: 22, minute: 0 }, "s-3", "completed")).toBe("Completed");
    expect(classifySelfieReport({ hour: 22, minute: 1 }, "s-4", "completed")).toBe("Reported Late");
    expect(classifySelfieReport({ hour: 23, minute: 59 }, "s-5", "will do it later")).toBe(
      "ambiguous",
    );
    expect(shouldSendConditionalSelfieReminder("Completed")).toBe(false);
    expect(shouldSendConditionalSelfieReminder(undefined)).toBe(true);
    expect(shouldSendConditionalSelfieReminder("Missed")).toBe(true);
    expect(selfieAcknowledgment("Completed")).toBe("Selfie recorded as completed for today.");
  });

  it("separates both charger contexts and discharging rates", () => {
    expect(
      estimateRate(
        { ...dischargeObservation, percentage: 50, context: "desk", plugged: true },
        {
          ...dischargeObservation,
          atMs: 3_600_000,
          percentage: 60,
          context: "desk",
          plugged: true,
          sourceEventId: "desk-2",
        },
      ),
    ).toMatchObject({ context: "desk", direction: "charging", percentPerHour: 10 });
    expect(
      estimateRate(
        { ...dischargeObservation, percentage: 60, context: "bedside", plugged: true },
        {
          ...dischargeObservation,
          atMs: 3_600_000,
          percentage: 70,
          context: "bedside",
          plugged: true,
          sourceEventId: "bedside-2",
        },
      ),
    ).toMatchObject({ context: "bedside", direction: "charging", percentPerHour: 10 });
    expect(
      estimateRate(dischargeObservation, {
        ...dischargeObservation,
        atMs: 3_600_000,
        percentage: 40,
        sourceEventId: "battery-2",
      }),
    ).toMatchObject({ context: "discharging", direction: "discharging", percentPerHour: -10 });
    expect(
      estimateRate(
        { ...dischargeObservation, context: "desk", plugged: true, percentage: 50 },
        {
          ...dischargeObservation,
          atMs: 3_600_000,
          context: "desk",
          plugged: true,
          percentage: 60,
          routineChanged: true,
          sourceEventId: "desk-routine-change",
        },
      ),
    ).toBe("insufficient_data");
  });

  it("does not use a late unplug report after a 98% plateau", () => {
    expect(
      estimateRate(
        { ...dischargeObservation, atMs: 0, percentage: 98, context: "desk", plugged: true },
        {
          ...dischargeObservation,
          atMs: 7_200_000,
          percentage: 97,
          context: "desk",
          plugged: false,
          sourceEventId: "plateau-2",
        },
      ),
    ).toBe("insufficient_data");
  });

  it("returns no alert for stale or insufficient data", () => {
    const stale = buildBatteryPrediction({
      observation: dischargeObservation,
      rate: "insufficient_data",
      nowMs: 7 * 60 * 60 * 1_000,
      nextExpectedChargeAtMs: 8 * 60 * 60 * 1_000,
    });
    expect(stale.alertState).toBe("insufficient_data");
    expect(evaluateHeartbeatBatteryAlert(stale, dischargeObservation)).toBeNull();
  });

  it("alerts once per unchanged crossing and replaces a materially changed prediction", () => {
    const rate = {
      context: "discharging" as const,
      direction: "discharging" as const,
      percentPerHour: -10,
      samples: 2,
      confidence: "medium" as const,
      evidenceStartAtMs: 0,
      evidenceEndAtMs: 3_600_000,
    };
    const prediction = buildBatteryPrediction({
      observation: dischargeObservation,
      rate,
      nowMs: 0,
      nextExpectedChargeAtMs: 10 * 60 * 60 * 1_000,
    });
    const intent = evaluateHeartbeatBatteryAlert(prediction, dischargeObservation);
    expect(intent).toMatchObject({
      kind: "battery_35_alert",
      idempotencyKey: "battery-1:35:5400000",
    });
    expect(evaluateHeartbeatBatteryAlert(prediction, dischargeObservation, prediction)).toBeNull();
    expect(
      evaluateHeartbeatBatteryAlert(
        { ...prediction, predicted35AtMs: prediction.predicted35AtMs! + 60_000 },
        dischargeObservation,
        prediction,
      ),
    ).not.toBeNull();
    expect(
      heartbeatBatteryAlert(
        dischargeObservation,
        rate,
        10 * 60 * 60 * 1_000,
        "battery-1:35:5400000",
      ),
    ).toEqual({ due: false });
  });

  it("alerts immediately on fresh evidence at or below 35%", () => {
    const observation = { ...dischargeObservation, percentage: 35, sourceEventId: "battery-35" };
    const prediction = buildBatteryPrediction({
      observation,
      rate: "insufficient_data",
      nowMs: observation.atMs,
      nextExpectedChargeAtMs: 3_600_000,
    });
    expect(evaluateHeartbeatBatteryAlert(prediction, observation)).toMatchObject({
      currentPercentage: 35,
      action: "connect_power",
    });
  });

  it("renders only concise compliance battery fields", () => {
    const prediction = buildBatteryPrediction({
      observation: dischargeObservation,
      rate: "insufficient_data",
      nowMs: 0,
      nextExpectedChargeAtMs: 3_600_000,
    });
    const output = renderBatteryStatus({
      observation: dischargeObservation,
      rate: "insufficient_data",
      prediction,
      nextRoutineCharge: "21:15 bedside charger",
    });
    expect(output).toContain("Battery: 50% (unplugged)");
    expect(output).toContain("Confidence/data freshness");
    expect(output).not.toMatch(/health|mounjaro|symptom|mood|stress|weight/iu);
  });
});
