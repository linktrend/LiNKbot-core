#!/usr/bin/env node

import process from "node:process";
import { DatabaseSync } from "node:sqlite";

const TELEGRAM_ANNOUNCE_INSTRUCTION =
  "The cron announce route automatically delivers your final assistant response to Telegram. Do not search for or call a Telegram/message tool, and do not report Telegram unavailable because that separate tool is absent. Return only the final concise Telegram digest as your assistant response.";

export const LISA_LIVE_DIGEST_CONTRACTS = Object.freeze([
  Object.freeze({
    declarationKey: "lisa-executive-digest-morning-v1",
    scheduleExpr: "45 6 * * *",
    message: `Run Lisa's morning Executive Digest for delivery by 07:00 Asia/Taipei. Read ops/jobs/reporting/procedure.md and the canonical reporting template before acting. Use the Linux wrappers at /var/lib/openclaw/lisa/.openclaw-lisa/workspace/tools/bin/lisa-safe and lisa-carlos-tasks; never use Mac paths. Include only work: completed work since the last digest, today's work and personal calendar events excluding the Routine calendar, Google Tasks with the distinction between Carlos's Google Tasks and Lisa/agent work, decisions or unresolved matters requiring Carlos, overnight maintenance results, and verified status of supervised agents. Keep it concise, use the approved non-table template, render every title in **bold**, and give every decision multiple-choice options with Other — specify. For backup status, check systemctl show linktrend-lisa-backup.service for Result, ExecMainStatus, and InactiveExitTimestamp; a successful run inside the overnight window is the verified backup result. Use only the approved maintenance lines and never duplicate a maintenance HOLD under Outstanding. If no supervised agents are configured, say exactly "No supervised agents configured." and do not report unavailable broader scope. ${TELEGRAM_ANNOUNCE_INSTRUCTION} Separately send the same work digest to Carlos's approved work email using the approved email wrapper and include the email result in the final digest only when it failed. Exclude private health, selfie, mood, diet, medication, and detailed battery information. If a required provider or destination is genuinely unavailable, state HOLD rather than inventing data.`,
  }),
  Object.freeze({
    declarationKey: "lisa-executive-digest-evening-v1",
    scheduleExpr: "45 16 * * *",
    message: `Run Lisa's evening Executive Digest for delivery by 17:00 Asia/Taipei. Read ops/jobs/reporting/procedure.md and the canonical digest template. Report what was completed today, what remains outstanding, important evening work or personal events excluding Routine, pending calendar events or Google Tasks, decisions or attention required from Carlos, and verified supervised-agent status. Use the same mobile-friendly non-table format as the morning digest, render every title in **bold**, and give every decision or approval multiple-choice options including Other — specify. If no supervised agents are configured, say exactly "No supervised agents configured." and do not report unavailable broader scope. ${TELEGRAM_ANNOUNCE_INSTRUCTION} Separately send the same work digest to Carlos's approved work email using the approved email wrapper and include the email result in the final digest only when it failed. Exclude private health, selfie, mood, diet, medication, and detailed battery information.`,
  }),
]);

export function inspectLisaLiveDigestContract(databasePath) {
  const db = new DatabaseSync(databasePath, { readOnly: true });
  try {
    const select = db.prepare(
      `SELECT declaration_key, schedule_expr, schedule_tz, delivery_mode,
              delivery_channel, payload_message, job_json
       FROM cron_jobs WHERE declaration_key = ?`,
    );
    return LISA_LIVE_DIGEST_CONTRACTS.map((expected) => {
      const row = select.get(expected.declarationKey);
      if (!row) return { declarationKey: expected.declarationKey, ok: false, issue: "missing" };
      const job = JSON.parse(row.job_json);
      const ok =
        row.schedule_expr === expected.scheduleExpr &&
        row.schedule_tz === "Asia/Taipei" &&
        row.delivery_mode === "announce" &&
        row.delivery_channel === "telegram" &&
        row.payload_message === expected.message &&
        job.schedule?.expr === expected.scheduleExpr &&
        job.payload?.message === expected.message &&
        job.delivery?.mode === "announce" &&
        job.delivery?.channel === "telegram";
      return { declarationKey: expected.declarationKey, ok, issue: ok ? null : "drift" };
    });
  } finally {
    db.close();
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const databasePath = process.argv[2];
  if (!databasePath) {
    throw new Error("usage: lisa-live-digest-contract.mjs <openclaw.sqlite>");
  }
  const results = inspectLisaLiveDigestContract(databasePath);
  process.stdout.write(`${JSON.stringify(results, null, 2)}\n`);
  if (results.some((result) => !result.ok)) process.exitCode = 1;
}
