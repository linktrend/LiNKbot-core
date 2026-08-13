import { describe, expect, it } from "vitest";
import { planDigestDelivery, renderExecutiveDigest, renderFlashReport } from "./reporting.js";

const item = { text: "Verified result", source: "verified" as const };
const base = { variant: "morning" as const, completed: [item], workCalendar: [{ ...item, kind: "routine_calendar" as const }], personalCalendar: [], carlosTasks: [], otherTasks: [], outstanding: [], agentExceptions: [], decisions: [], maintenance: "Memory Dreaming: completed" };
describe("Lisa reporting", () => {
  it("renders vertical digest while suppressing routine calendar", () => { const output = renderExecutiveDigest(base); expect(output).toContain("Completed since last digest"); expect(output).not.toContain("Verified result\n\nPersonal\n- Verified result"); });
  it("rejects private health and unverified completion", () => { expect(() => renderExecutiveDigest({ ...base, completed: [{ text: "private", source: "verified", kind: "private_health" }] })).toThrow(); expect(() => renderExecutiveDigest({ ...base, completed: [{ text: "claim", source: "unverified" }] })).toThrow(); });
  it("requires Other specify decisions and battery status", () => { expect(() => renderExecutiveDigest({ ...base, decisions: [{ id: "D-1", matter: "x", recommendation: "y", options: ["yes", "no"] }] })).toThrow(); expect(() => renderFlashReport({ deadline: "14:45", status: "On track", completed: [], inProgress: [], issues: [], decisions: [], batteryStatus: "" })).toThrow(); });
  it("uses receipt-required retry-once digest plan", () => { expect(planDigestDelivery("k", "07:00", "06:40")).toMatchObject({ channels: ["telegram", "email"], retryCount: 1, receiptRequired: true, browserChatCopy: true }); });
});
