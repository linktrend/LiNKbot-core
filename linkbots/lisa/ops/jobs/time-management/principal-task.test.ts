import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { closeOpenClawAgentDatabasesForTest } from "../../../../../src/state/openclaw-agent-db.js";
import { intakePrincipalTimeTask } from "./principal-task.js";

const dirs: string[] = [];

afterEach(() => {
  closeOpenClawAgentDatabasesForTest();
  for (const dir of dirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("Lisa time-management Principal-task adapter", () => {
  it("uses the stable T display ref in planner input while retaining internal identity", () => {
    const dir = mkdtempSync(join(tmpdir(), "lisa-time-principal-"));
    dirs.push(dir);
    const result = intakePrincipalTimeTask(
      { agentId: "lisa", path: join(dir, "agent.sqlite") },
      { title: "Review launch plan", explicit: true, nowMs: 100 },
    );
    expect(result.timeTask.id).toBe("T-000001");
    expect(result.timeTask.displayRef).toBe("T-000001");
    expect(result.timeTask.internalId).toBe(result.task.internalId);
    expect(result.timeTask.status).toBe("Ready");
  });
});
