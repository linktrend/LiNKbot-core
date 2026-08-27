import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { describe, expect, it } from "vitest";
import {
  inspectLisaLiveDigestContract,
  LISA_LIVE_DIGEST_CONTRACTS,
} from "./lisa-live-digest-contract.mjs";

function fixtureDatabase(): string {
  const databasePath = path.join(mkdtempSync(path.join(tmpdir(), "lisa-digest-")), "state.sqlite");
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
  for (const contract of LISA_LIVE_DIGEST_CONTRACTS) {
    insert.run(
      contract.declarationKey,
      contract.scheduleExpr,
      "Asia/Taipei",
      "announce",
      "telegram",
      contract.message,
      JSON.stringify({
        schedule: { kind: "cron", expr: contract.scheduleExpr, tz: "Asia/Taipei" },
        payload: { kind: "agentTurn", message: contract.message },
        delivery: { mode: "announce", channel: "telegram" },
      }),
    );
  }
  db.close();
  return databasePath;
}

describe("Lisa live digest contract", () => {
  it("requires preparation before the delivery deadline and cron-owned Telegram delivery", () => {
    const databasePath = fixtureDatabase();
    expect(inspectLisaLiveDigestContract(databasePath)).toEqual([
      { declarationKey: "lisa-executive-digest-morning-v1", ok: true, issue: null },
      { declarationKey: "lisa-executive-digest-evening-v1", ok: true, issue: null },
    ]);
  });

  it("detects the deadline-time schedule that caused the late digest", () => {
    const databasePath = fixtureDatabase();
    const db = new DatabaseSync(databasePath);
    db.prepare("UPDATE cron_jobs SET schedule_expr = '0 17 * * *' WHERE declaration_key = ?").run(
      "lisa-executive-digest-evening-v1",
    );
    db.close();
    expect(inspectLisaLiveDigestContract(databasePath)[1]).toMatchObject({
      ok: false,
      issue: "drift",
    });
  });
});
