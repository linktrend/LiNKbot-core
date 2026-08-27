import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { describe, expect, it } from "vitest";
import {
  inspectLisaLiveMessageContracts,
  LISA_LIVE_MESSAGE_CONTRACTS,
} from "./lisa-live-message-contract.mjs";

function fixtureDatabase(): string {
  const databasePath = path.join(mkdtempSync(path.join(tmpdir(), "lisa-message-")), "state.sqlite");
  const db = new DatabaseSync(databasePath);
  db.exec(`CREATE TABLE cron_jobs (
    declaration_key TEXT PRIMARY KEY,
    schedule_expr TEXT,
    schedule_tz TEXT,
    delivery_mode TEXT,
    delivery_channel TEXT,
    payload_message TEXT,
    job_json TEXT
  )`);
  const insert = db.prepare("INSERT INTO cron_jobs VALUES (?, ?, ?, ?, ?, ?, ?)");
  for (const item of LISA_LIVE_MESSAGE_CONTRACTS) {
    insert.run(
      item.declarationKey,
      item.scheduleExpr,
      "Asia/Taipei",
      "announce",
      "telegram",
      item.message,
      JSON.stringify({
        schedule: { kind: "cron", expr: item.scheduleExpr, tz: "Asia/Taipei" },
        payload: { kind: "agentTurn", message: item.message },
        delivery: { mode: "announce", channel: "telegram" },
      }),
    );
  }
  db.close();
  return databasePath;
}

describe("Lisa live scheduled message contracts", () => {
  it("requires bold titles, preparation lead time, and approved checkpoint wording", () => {
    const results = inspectLisaLiveMessageContracts(fixtureDatabase());
    expect(results).toHaveLength(LISA_LIVE_MESSAGE_CONTRACTS.length);
    expect(results.every((result) => result.ok)).toBe(true);
  });

  it("rejects the obsolete 23:00 battery request", () => {
    const databasePath = fixtureDatabase();
    const db = new DatabaseSync(databasePath);
    db.prepare(
      "UPDATE cron_jobs SET payload_message = payload_message || ' Send another reading at 23:00.' WHERE declaration_key = ?",
    ).run("lisa-flash-2245-v1");
    db.close();
    expect(
      inspectLisaLiveMessageContracts(databasePath).find(
        (item) => item.declarationKey === "lisa-flash-2245-v1",
      ),
    ).toMatchObject({
      ok: false,
      issue: "drift",
    });
  });
});
