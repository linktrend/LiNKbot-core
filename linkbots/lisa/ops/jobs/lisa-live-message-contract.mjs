#!/usr/bin/env node

import process from "node:process";
import { DatabaseSync } from "node:sqlite";

const contract = (declarationKey, scheduleExpr, message) =>
  Object.freeze({ declarationKey, scheduleExpr, message });

export const LISA_LIVE_MESSAGE_CONTRACTS = Object.freeze([
  contract(
    "lisa-private-health-0815-v1",
    "10 8 * * *",
    "Run the private health checkpoint for delivery by 08:15 Asia/Taipei. Read ops/jobs/health/procedure.md and the private-health check-in template. Start the Telegram message with **Private health check-in — 08:15 morning**. Ask only for morning information Lisa does not already know: sleep time and wake time (Lisa calculates total sleep), food or breakfast, whether morning pills and supplements were taken, symptoms, and separate 1–5 ratings for energy, mood, and stress, plus capacity as high, normal, reduced, unavailable, or recovered. Do not ask for hydration at this morning checkpoint. Record answers in Lisa's private health ledger before replying. Telegram only; no email. Never put health details in work reports, LiNKbrain, or subordinate-agent messages. Use concise multiple-choice answers where practical.",
  ),
  contract(
    "lisa-flash-1045-v1",
    "40 10 * * *",
    "Run the 10:45 Flash Report for delivery by 10:45 Asia/Taipei. Read ops/jobs/reporting/procedure.md and the flash-report template. Use the approved concise non-table format with every title in **bold**. Include only material work changes plus **Battery Status** requesting or recording battery percentage and plugged/unplugged status. If there is no material work change, use the one-line no-change form instead of empty sections. Exclude private health details and do not duplicate a calendar reminder.",
  ),
  contract(
    "lisa-flash-1245-v1",
    "40 12 * * *",
    "Run the 12:45 Flash Report for delivery by 12:45 Asia/Taipei. Read ops/jobs/reporting/procedure.md and the flash-report template. Use the approved concise non-table format with every title in **bold**. Include only material work changes plus **Battery Status**. If there is no material work change, use the one-line no-change form instead of empty sections. Keep private health questions separate from this work report.",
  ),
  contract(
    "lisa-private-health-1315-v1",
    "10 13 * * *",
    "Run the private health checkpoint for delivery by 13:15 Asia/Taipei. Read ops/jobs/health/procedure.md and the private-health check-in template. Start the Telegram message with **Private health check-in — 13:15 midday**. Ask only for information Lisa does not already know: lunch or other food, bottle number and millilitres remaining, measurement if available, symptoms, separate 1–5 ratings for energy, mood, and stress, capacity changes, and any relevant exercise update. Record answers in Lisa's private health ledger before replying. Telegram only; never mix this with the work Flash Report or share it with LiNKbrain or subordinate agents.",
  ),
  contract(
    "lisa-flash-1445-v1",
    "40 14 * * *",
    "Run the 14:45 Flash Report for delivery by 14:45 Asia/Taipei. Read ops/jobs/reporting/procedure.md and the flash-report template. Use the approved concise non-table format with every title in **bold**. Include only material work progress, pending items, decisions, and **Battery Status**. Decide whether 15:30–17:00 remains work or becomes personal based on actual outstanding work. If there is otherwise no material work change, keep the message compact. Exclude private health details.",
  ),
  contract(
    "lisa-selfie-1745-v1",
    "40 17 * * *",
    "Send the 17:45 Telegram reminder for delivery by 17:45 Asia/Taipei. Start with **Selfie and battery checkpoint**. State that the selfie may be taken only from 18:00 through 22:00. Ask for today's selfie status and the approved battery percentage plus plugged/unplugged status. Do not ask about or expose private health details, and do not duplicate a calendar reminder.",
  ),
  contract(
    "lisa-flash-2045-v1",
    "40 20 * * *",
    "Run the 20:45 Flash Report for delivery by 20:45 Asia/Taipei. Read ops/jobs/reporting/procedure.md and the flash-report template. Use the approved concise non-table format with every title in **bold**. Include only material work changes plus **Battery Status**. If there is no material work change, use the one-line no-change form; do not create empty sections or invent a next expected result. Check whether the 21:45 conditional selfie reminder will be needed, but do not send it early. Exclude private health details.",
  ),
  contract(
    "lisa-selfie-2145-v1",
    "40 21 * * *",
    "Check today's private compliance record for delivery by 21:45 Asia/Taipei. If Carlos has not reported a valid selfie taken between 18:00 and 22:00, send a Telegram reminder beginning **Selfie check**. If a valid report already exists, return NO_REPLY. A report after 22:00 is Recorded Late; no report by midnight is Missed.",
  ),
  contract(
    "lisa-flash-2245-v1",
    "40 22 * * *",
    "Run the 22:45 Flash Report for delivery by 22:45 Asia/Taipei. Read ops/jobs/reporting/procedure.md and the flash-report template. Use the approved concise non-table format with every title in **bold**. Include only material work changes plus the final daily **Battery Status** measurement point. If there is no material work change, use the one-line no-change form. The 22:45 measurement is the final scheduled battery report: do not request another reading at 23:00, 23:15, or 23:30. If the device is plugged in, estimate whether and when it will reach 98% from the current learned charging rate. Keep private health details separate.",
  ),
  contract(
    "lisa-private-health-2245-v1",
    "40 22 * * *",
    "Run the private health checkpoint for delivery by 22:45 Asia/Taipei. Read ops/jobs/health/procedure.md and the private-health check-in template. Start the Telegram message with **Private health check-in — 22:45 evening**. Ask only for information Lisa does not already know: food, whether night pills and supplements were taken, bottle number and millilitres remaining, exercise or movement, expected sleep time and sleep preparation, symptoms or end-of-day notes, separate 1–5 ratings for energy, mood, and stress, and capacity. Record answers in Lisa's private health ledger before replying. Telegram only. Never include these details in the work Flash Report or share them with LiNKbrain or subordinate agents.",
  ),
]);

export function inspectLisaLiveMessageContracts(databasePath) {
  const db = new DatabaseSync(databasePath, { readOnly: true });
  try {
    const select = db.prepare(
      `SELECT schedule_expr, schedule_tz, delivery_mode, delivery_channel,
              payload_message, job_json
       FROM cron_jobs WHERE declaration_key = ?`,
    );
    return LISA_LIVE_MESSAGE_CONTRACTS.map((expected) => {
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
  if (!databasePath) throw new Error("usage: lisa-live-message-contract.mjs <openclaw.sqlite>");
  const results = inspectLisaLiveMessageContracts(databasePath);
  process.stdout.write(`${JSON.stringify(results, null, 2)}\n`);
  if (results.some((result) => !result.ok)) process.exitCode = 1;
}
