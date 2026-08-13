import { describe, expect, it } from "vitest";
import { canPerformExternalAction, classifyIntake } from "./intake.js";
import { capacityPlan, chooseFlexiblePeriod, rankTasks } from "./planner.js";
import { assertTransition } from "./time-contracts.js";
describe("Lisa time management", () => {
  it("keeps inferred work provisional", () => { expect(classifyIntake("P-1", false).status).toBe("Provisional"); expect(() => assertTransition("Provisional", "Verified complete")).toThrow(); });
  it("does not turn research into authority", () => { expect(canPerformExternalAction(false)).toBe(false); });
  it("ranks hard deadlines before easy work and protects breaks", () => { expect(rankTasks([{ id: "easy", explicit: true, status: "Ready", priority: 5, capacity: "normal" }, { id: "deadline", explicit: true, status: "Ready", priority: 5, hardDeadline: true, capacity: "normal" }])[0]?.id).toBe("deadline"); });
  it("uses work at 14:45 unless work is current and capacity reduces safely", () => { expect(chooseFlexiblePeriod([{ id: "x", explicit: true, status: "Ready", priority: 1, capacity: "normal" }], true)).toBe("work"); expect(capacityPlan("reduced")).toBe("easy_work"); });
});
