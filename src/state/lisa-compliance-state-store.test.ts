import { afterEach, describe, expect, it } from "vitest";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { closeOpenClawAgentDatabasesForTest } from "./openclaw-agent-db.js";
import { recordLisaBatteryObservation, recordLisaSelfieDay, readLisaSelfieDay } from "./lisa-compliance-state-store.js";
const dirs: string[] = [];
afterEach(() => { closeOpenClawAgentDatabasesForTest(); for (const dir of dirs.splice(0)) rmSync(dir, { recursive: true, force: true }); });
function options() { const dir = mkdtempSync(join(tmpdir(), "lisa-compliance-")); dirs.push(dir); return { agentId: "lisa", path: join(dir, "agent.sqlite") }; }
describe("Lisa compliance state", () => { it("is idempotent by source event", () => { const o = options(); recordLisaSelfieDay(o, { localDate: "2026-08-13", status: "Completed", sourceEventId: "s-1" }); recordLisaSelfieDay(o, { localDate: "2026-08-13", status: "Completed", sourceEventId: "s-1" }); expect(readLisaSelfieDay(o, "2026-08-13")).toMatchObject({ status: "Completed", source_event_id: "s-1" }); }); it("rejects invalid battery percentages", () => { expect(() => recordLisaBatteryObservation(options(), { sourceEventId: "b", observedAtMs: 1, percentage: 101, plugged: false, context: "discharging", usable: true })).toThrow("invalid battery percentage"); }); });
