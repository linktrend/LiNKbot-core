import { describe, expect, it } from "vitest";
import { backupRetention, planMaintenance } from "./maintenance.js";
import { validateDreamingReceipt } from "./maintenance-contracts.js";
describe("Lisa maintenance", () => {
  it("fails closed without same-cycle librarian receipt", () => { expect(() => validateDreamingReceipt(undefined, "2026-08-13", "c", "r")).toThrow("blocked_invalid_librarian_receipt"); });
  it("returns Lisa availability at 06:30 while backup retries", () => { expect(planMaintenance({ librarian: "completed", dreaming: "completed", backup: "failed" }, 390)).toMatchObject({ lisaAvailable: true, backgroundRetry: true }); });
  it("retains previous backup without both verifications", () => { expect(backupRetention(true, false)).toBe("retain_previous"); expect(backupRetention(true, true)).toBe("replace_previous"); });
});
