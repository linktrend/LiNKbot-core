#!/usr/bin/env node

import { constants, copyFileSync, existsSync } from "node:fs";
import process from "node:process";
import { DatabaseSync } from "node:sqlite";

export const LISA_OPERATIONAL_DECLARATION_KEYS = Object.freeze([
  "lisa-battery-evaluation-hourly-v1",
  "lisa-time-management-monthly-work-v1",
  "lisa-executive-digest-evening-v1",
  "lisa-selfie-1745-v1",
  "lisa-flash-2045-v1",
  "lisa-selfie-2145-v1",
  "lisa-private-health-2245-v1",
  "lisa-flash-2245-v1",
  "lisa-private-health-drive-export-v1",
  "lisa-midnight-finalizer-v1",
  "lisa-executive-digest-morning-v1",
  "lisa-private-health-0815-v1",
  "lisa-flash-1045-v1",
  "lisa-flash-1245-v1",
  "lisa-private-health-1315-v1",
  "lisa-flash-1445-v1",
  "lisa-time-management-weekly-plan-v1",
  "lisa-private-health-reassessment-v1",
  "lisa-private-health-monthly-report-v1",
]);

export const RETIRED_LISA_JOB_NAMES = Object.freeze([
  "apply-patch-tripwire",
  "battery-selfie-1745",
  "battery-selfie-2145",
  "lisa-calendar-check",
  "lisa-heartbeat-45",
  "lisa-morning-digest",
  "lisa-ship-05",
  "lisa-pull-07",
  "lisa-ship-16",
  "lisa-pull-18",
  "lisa-repair-dispatcher",
]);

function placeholders(count) {
  return Array.from({ length: count }, () => "?").join(", ");
}

export function inspectLisaJobOwnership(databasePath) {
  const db = new DatabaseSync(databasePath, { readOnly: true });
  try {
    const rows = db
      .prepare(
        `SELECT declaration_key, agent_id, owner_agent_id, enabled
         FROM cron_jobs
         WHERE declaration_key IN (${placeholders(LISA_OPERATIONAL_DECLARATION_KEYS.length)})
         ORDER BY declaration_key`,
      )
      .all(...LISA_OPERATIONAL_DECLARATION_KEYS);
    const retired = db
      .prepare(
        `SELECT name
         FROM cron_jobs
         WHERE name IN (${placeholders(RETIRED_LISA_JOB_NAMES.length)})`,
      )
      .all(...RETIRED_LISA_JOB_NAMES);
    return { rows, retired };
  } finally {
    db.close();
  }
}

export function repairLisaJobOwnership(databasePath) {
  const before = inspectLisaJobOwnership(databasePath);
  if (before.rows.length !== LISA_OPERATIONAL_DECLARATION_KEYS.length) {
    throw new Error(
      `expected ${LISA_OPERATIONAL_DECLARATION_KEYS.length} Lisa jobs, found ${before.rows.length}`,
    );
  }
  if (before.rows.some((row) => row.agent_id !== "lisa-cron" || row.enabled !== 1)) {
    throw new Error("one or more approved Lisa jobs do not execute as lisa-cron");
  }

  const backupPath = `${databasePath}.pre-lisa-owner-repair`;
  if (existsSync(backupPath)) {
    throw new Error(`refusing to overwrite existing backup: ${backupPath}`);
  }
  copyFileSync(databasePath, backupPath, constants.COPYFILE_EXCL);

  const db = new DatabaseSync(databasePath);
  try {
    db.exec("BEGIN IMMEDIATE");
    const result = db
      .prepare(
        `UPDATE cron_jobs
         SET owner_agent_id = 'main', owner_session_key = 'agent:main:main'
         WHERE declaration_key IN (${placeholders(LISA_OPERATIONAL_DECLARATION_KEYS.length)})
           AND agent_id = 'lisa-cron'`,
      )
      .run(...LISA_OPERATIONAL_DECLARATION_KEYS);
    if (Number(result.changes) !== LISA_OPERATIONAL_DECLARATION_KEYS.length) {
      throw new Error(
        `expected to update ${LISA_OPERATIONAL_DECLARATION_KEYS.length} jobs, updated ${result.changes}`,
      );
    }
    db.prepare(
      `DELETE FROM cron_jobs WHERE name IN (${placeholders(RETIRED_LISA_JOB_NAMES.length)})`,
    ).run(...RETIRED_LISA_JOB_NAMES);
    db.exec("COMMIT");
  } catch (error) {
    try {
      db.exec("ROLLBACK");
    } catch {}
    throw error;
  } finally {
    db.close();
  }
  return { backupPath, after: inspectLisaJobOwnership(databasePath) };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const databasePath = process.argv[2];
  const apply = process.argv.includes("--apply");
  if (!databasePath) {
    throw new Error("usage: lisa-live-job-ownership.mjs <openclaw.sqlite> [--apply]");
  }
  const result = apply
    ? repairLisaJobOwnership(databasePath)
    : { dryRun: true, ...inspectLisaJobOwnership(databasePath) };
  process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
}
