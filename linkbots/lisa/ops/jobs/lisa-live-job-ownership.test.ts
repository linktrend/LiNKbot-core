import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, describe, expect, it } from "vitest";
import {
  LISA_OPERATIONAL_DECLARATION_KEYS,
  RETIRED_LISA_JOB_NAMES,
  inspectLisaJobOwnership,
  repairLisaJobOwnership,
} from "./lisa-live-job-ownership.mjs";

const roots: string[] = [];

afterEach(() => {
  for (const root of roots.splice(0)) rmSync(root, { recursive: true, force: true });
});

function fixture(): string {
  const root = mkdtempSync(path.join(tmpdir(), "lisa-owner-repair-"));
  roots.push(root);
  const databasePath = path.join(root, "openclaw.sqlite");
  const db = new DatabaseSync(databasePath);
  db.exec(`CREATE TABLE cron_jobs (
    name TEXT, declaration_key TEXT, agent_id TEXT, owner_agent_id TEXT,
    owner_session_key TEXT, enabled INTEGER NOT NULL
  )`);
  const insert = db.prepare("INSERT INTO cron_jobs VALUES (?, ?, 'lisa-cron', NULL, NULL, 1)");
  for (const key of LISA_OPERATIONAL_DECLARATION_KEYS) insert.run(`Approved ${key}`, key);
  const retired = db.prepare("INSERT INTO cron_jobs VALUES (?, NULL, 'lisa-cron', NULL, NULL, 1)");
  for (const name of RETIRED_LISA_JOB_NAMES) retired.run(name);
  db.close();
  return databasePath;
}

describe("Lisa live job ownership repair", () => {
  it("makes main the owner while preserving lisa-cron execution", () => {
    const databasePath = fixture();
    const result = repairLisaJobOwnership(databasePath);
    expect(result.after.rows).toHaveLength(19);
    expect(result.after.rows.every((row) => row.agent_id === "lisa-cron")).toBe(true);
    expect(result.after.rows.every((row) => row.owner_agent_id === "main")).toBe(true);
    expect(inspectLisaJobOwnership(databasePath).retired).toEqual([]);
  });
});
