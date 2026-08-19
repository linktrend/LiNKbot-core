/**
 * Lisa message templates — load canonical Markdown bodies and fill placeholders.
 *
 * Deployed (Lisa runtime cwd = ~/.openclaw-lisa/workspace) — only after explicit
 * live opt-in + separately approved credentials language:
 *   node --experimental-strip-types ops/render-template.ts <kind> <json-file|->
 * Repository source (tests / development; non-live default):
 *   node --experimental-strip-types linkbots/lisa/ops/render-template.ts ...
 */

import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export type TemplateKind = "telegram-daily-digest" | "email-daily-digest";

export type TemplateContext = {
  weekdayDate: string;
  time?: string;
  workSummary: {
    calendar: "Yes" | "No";
    tasks: "Yes" | "No";
    email: "Yes" | "No";
    unanswered: "Yes" | "No";
  };
  codingEvals: "Yes" | "No";
  battery?: {
    expectedCharge: string;
    timeTo30: string;
    timeTo98: string;
    chargeRate: string;
    routineChanges: string;
    checks: "Yes" | "No";
    alerts: string[];
  };
  /** Fresh pipeline one-liners only; stale omitted by caller. */
  pipelineLines: string[];
  mainApproveAsk?: string | null;
  digestDetail?: {
    calendarEvents: string[];
    tasks: string[];
    emails: string[];
    unanswered: string[];
    codingDetail?: string;
  };
};

const PLACEHOLDER_RE = /\{\{[a-zA-Z0-9_.]+\}\}/;
const here = path.dirname(fileURLToPath(import.meta.url));

/** Deployed: ops/../templates ; repo: ops/../Personality files/templates */
export function resolveTemplatesDir(opsDir: string = here): string {
  const deployed = path.resolve(opsDir, "../templates");
  const repo = path.resolve(opsDir, "../Personality files/templates");
  if (existsSync(deployed)) {
    return deployed;
  }
  if (existsSync(repo)) {
    return repo;
  }
  throw new Error(`templates dir not found (tried ${deployed} and ${repo})`);
}

export const TEMPLATES_DIR = resolveTemplatesDir();

const KIND_FILE: Record<TemplateKind, string> = {
  "telegram-daily-digest": "telegram-daily-digest.md",
  "email-daily-digest": "email-daily-digest.md",
};

export function assertNoUnresolvedPlaceholders(rendered: string): void {
  if (PLACEHOLDER_RE.test(rendered)) {
    throw new Error(`unresolved placeholders: ${rendered.match(PLACEHOLDER_RE)?.[0]}`);
  }
}

/** Extract the fenced ```text body from a canonical template file. */
export function loadCanonicalTemplateBody(
  kind: TemplateKind,
  templatesDir: string = resolveTemplatesDir(),
): string {
  const raw = readFileSync(path.join(templatesDir, KIND_FILE[kind]), "utf8");
  const match = raw.match(/```text\n([\s\S]*?)\n```/);
  if (!match?.[1]) {
    throw new Error(`canonical template missing \`\`\`text body: ${kind}`);
  }
  return match[1];
}

export function fillPlaceholders(body: string, vars: Record<string, string>): string {
  let out = body;
  for (const [key, value] of Object.entries(vars)) {
    out = out.split(`{{${key}}}`).join(value);
  }
  // Drop lines that are only empty optional section remnants after fill.
  out = out
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+\n/g, "\n")
    .trimEnd();
  // Remove trailing blank lines created by empty optional placeholders.
  if (out.endsWith("\n\n")) {
    out = out.replace(/\n+$/, "\n");
  }
  assertNoUnresolvedPlaceholders(out);
  return out.endsWith("\n") ? out : `${out}\n`;
}

export function omitStalePipelineLines(lines: string[], allow: Set<string>): string[] {
  return lines.filter((line) => {
    const key = line.split(":")[0]?.trim();
    return key ? allow.has(key) : false;
  });
}

function listOrNone(items: string[]): string {
  if (items.length === 0) {
    return "None.";
  }
  return items.map((item, i) => `${i + 1}. ${item}`).join("\n");
}

function batteryAlerts(alerts: string[], checks: "Yes" | "No"): string {
  if (checks !== "Yes" || alerts.length === 0) {
    return "";
  }
  return alerts.map((a) => `- Alert — ${a}`).join("\n");
}

function pipelineSection(lines: string[]): string {
  if (lines.length === 0) {
    return "";
  }
  return `## D. Pipeline\n\n${lines.join("\n")}`;
}

function mainApproveSection(ask: string | null | undefined): string {
  if (!ask?.trim()) {
    return "";
  }
  return `## E. Main Approve\n\n${ask.trim()}`;
}

function codingBlock(codingEvals: "Yes" | "No", codingDetail?: string): string {
  if (codingEvals === "No") {
    return "## B. Coding Work & Evals: No";
  }
  return `## B. Coding Work & Evals: Yes\n\n${codingDetail ?? "None."}`;
}

/** Telegram morning digest — itemized Work + Battery + Pipeline. */
export function renderTelegramDailyDigest(ctx: TemplateContext): string {
  if (!ctx.battery) {
    throw new Error("telegram digest requires battery block");
  }
  if (!ctx.digestDetail) {
    throw new Error("telegram digest requires digestDetail");
  }
  const d = ctx.digestDetail;
  const body = loadCanonicalTemplateBody("telegram-daily-digest");
  return (
    fillPlaceholders(body, {
      weekday_date: ctx.weekdayDate,
      calendar: ctx.workSummary.calendar,
      tasks: ctx.workSummary.tasks,
      email: ctx.workSummary.email,
      unanswered: ctx.workSummary.unanswered,
      calendar_events_list: listOrNone(d.calendarEvents),
      tasks_list: listOrNone(d.tasks),
      emails_list: listOrNone(d.emails),
      unanswered_list: listOrNone(d.unanswered),
      coding_block: codingBlock(ctx.codingEvals, d.codingDetail),
      expected_charge: ctx.battery.expectedCharge,
      time_to_30: ctx.battery.timeTo30,
      time_to_98: ctx.battery.timeTo98,
      charge_rate: ctx.battery.chargeRate,
      routine_changes: ctx.battery.routineChanges,
      checks: ctx.battery.checks,
      battery_alerts: batteryAlerts(ctx.battery.alerts, ctx.battery.checks),
      pipeline_section: pipelineSection(ctx.pipelineLines),
      main_approve_section: mainApproveSection(ctx.mainApproveAsk),
    })
      .replace(/\n{3,}/g, "\n\n")
      .trimEnd() + "\n"
  );
}

/** Email digest — Work + Coding + Pipeline + Approve; never Battery. */
export function renderEmailDailyDigest(ctx: TemplateContext): string {
  if (!ctx.digestDetail) {
    throw new Error("email digest requires digestDetail");
  }
  const d = ctx.digestDetail;
  const body = loadCanonicalTemplateBody("email-daily-digest");
  const out =
    fillPlaceholders(body, {
      weekday_date: ctx.weekdayDate,
      calendar: ctx.workSummary.calendar,
      tasks: ctx.workSummary.tasks,
      email: ctx.workSummary.email,
      unanswered: ctx.workSummary.unanswered,
      calendar_events_list: listOrNone(d.calendarEvents),
      tasks_list: listOrNone(d.tasks),
      emails_list: listOrNone(d.emails),
      unanswered_list: listOrNone(d.unanswered),
      coding_block: codingBlock(ctx.codingEvals, d.codingDetail),
      pipeline_section: pipelineSection(ctx.pipelineLines),
      main_approve_section: mainApproveSection(ctx.mainApproveAsk),
    })
      .replace(/\n{3,}/g, "\n\n")
      .trimEnd() + "\n";
  if (/Battery Monitoring|plugged status|Expected current charge/i.test(out)) {
    throw new Error("email digest must omit Battery Monitoring");
  }
  return out;
}

export function templatesDifferTelegramVsEmail(
  telegram: string,
  email: string,
): { telegramHasBattery: boolean; emailHasBattery: boolean; differ: boolean } {
  const telegramHasBattery = /## C\. Battery Monitoring/.test(telegram);
  const emailHasBattery = /## C\. Battery Monitoring/.test(email);
  return {
    telegramHasBattery,
    emailHasBattery,
    differ: telegramHasBattery && !emailHasBattery,
  };
}

/**
 * Deterministic fill method for Lisa procedures (deployed workspace):
 * 1. Choose kind.
 * 2. Build JSON context (same shape as TemplateContext).
 * 3. From workspace root:
 *    `node --experimental-strip-types ops/render-template.ts <kind> <json-path>`
 *    or pipe JSON on stdin with `-`.
 */
export function renderKind(kind: TemplateKind, ctx: TemplateContext): string {
  switch (kind) {
    case "telegram-daily-digest":
      return renderTelegramDailyDigest(ctx);
    case "email-daily-digest":
      return renderEmailDailyDigest(ctx);
    default: {
      const _exhaustive: never = kind;
      throw new Error(`unknown kind: ${_exhaustive}`);
    }
  }
}
