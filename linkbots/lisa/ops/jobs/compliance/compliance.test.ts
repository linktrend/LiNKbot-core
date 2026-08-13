import { describe, expect, it } from "vitest";
import { estimateRate, heartbeatBatteryAlert } from "./battery.js";
import { classifySelfieReport, shouldSendConditionalSelfieReminder } from "./selfie.js";

describe("Lisa personal compliance", () => {
  it("applies selfie time boundaries and conditional reminder", () => { expect(classifySelfieReport(17, "e", "done")).toBe("invalid_before_18"); expect(classifySelfieReport(22, "e", "done")).toBe("Completed"); expect(classifySelfieReport(23, "e", "done")).toBe("Reported Late"); expect(shouldSendConditionalSelfieReminder("Completed")).toBe(false); });
  it("keeps plateau observations from corrupting the rate", () => { expect(estimateRate({ atMs: 0, percentage: 98, plugged: false, context: "desk", sourceEventId: "a" }, { atMs: 1_000, percentage: 97, plugged: false, context: "desk", sourceEventId: "b" })).toBe("insufficient_data"); });
  it("deduplicates heartbeat alert by observation generation", () => { const observation = { atMs: 0, percentage: 34, plugged: false, context: "discharging" as const, sourceEventId: "e" }; const alert = heartbeatBatteryAlert(observation, { context: "discharging", percentPerHour: -5, samples: 2 }, 3_600_000); expect(alert).toMatchObject({ due: true, idempotencyKey: "e:35" }); expect(heartbeatBatteryAlert(observation, { context: "discharging", percentPerHour: -5, samples: 2 }, 3_600_000, "e:35")).toEqual({ due: false }); });
});
