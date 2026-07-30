/**
 * Deterministic Lisa message templates with freshness/omission rules.
 */

export type TemplateKind =
  | "telegram-heartbeat"
  | "telegram-daily-digest"
  | "email-daily-digest"
  | "pipeline-one-liner";

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
  /** Digest-only itemized sections (Telegram). */
  digestDetail?: {
    calendarEvents: string[];
    tasks: string[];
    emails: string[];
    unanswered: string[];
    codingDetail?: string;
  };
};

const PLACEHOLDER_RE = /\{\{[a-zA-Z0-9_.]+\}\}/;

export function assertNoUnresolvedPlaceholders(rendered: string): void {
  if (PLACEHOLDER_RE.test(rendered)) {
    throw new Error(`unresolved placeholders: ${rendered.match(PLACEHOLDER_RE)?.[0]}`);
  }
}

export function renderPipelineOneLiner(wave: string, result: "Clear" | "Issues"): string {
  const line = `${wave}: ${result}`;
  if (
    !/^(Ship 05|Pull 07|Ship 16|Pull 18|Staging promote \(Tue\)|Staging promote \(Fri\)|Main ready \(Mon\)): (Clear|Issues)$/.test(
      line,
    )
  ) {
    throw new Error(`invalid pipeline one-liner: ${line}`);
  }
  return line;
}

export function omitStalePipelineLines(lines: string[], allow: Set<string>): string[] {
  return lines.filter((line) => {
    const key = line.split(":")[0]?.trim();
    return key ? allow.has(key) : false;
  });
}

function batteryBlock(b: NonNullable<TemplateContext["battery"]>): string {
  const alerts =
    b.checks === "Yes" && b.alerts.length > 0
      ? `\n${b.alerts.map((a) => `- Alert — ${a}`).join("\n")}`
      : "";
  return `## C. Battery Monitoring

1. Expected current charge left: ~${b.expectedCharge}
2. Expected time to 30%: ${b.timeTo30}
3. Expected time to 98%: ${b.timeTo98}
4. Updated Charge Rate: ${b.chargeRate}
5. Routine Changes: ${b.routineChanges}
6. Please report current percentage and plugged status if you can.
7. Checks: ${b.checks}${alerts}`;
}

function workSummary(ctx: TemplateContext): string {
  return `i. Summary:
Calendar events: ${ctx.workSummary.calendar}.
Tasks: ${ctx.workSummary.tasks}.
Email: ${ctx.workSummary.email}.
Unanswered Messages: ${ctx.workSummary.unanswered}.`;
}

function pipelineSection(lines: string[]): string | null {
  if (lines.length === 0) return null;
  return `## D. Pipeline

${lines.join("\n")}`;
}

/** Telegram heartbeat — condensed Work/Coding; full Battery; no email body. */
export function renderTelegramHeartbeat(ctx: TemplateContext): string {
  if (!ctx.battery) throw new Error("heartbeat requires battery block");
  const parts = [
    `Heartbeat — ${ctx.weekdayDate}${ctx.time ? `, ${ctx.time}` : ""}`,
    "",
    "## A. Work",
    "",
    workSummary(ctx),
    "",
    `## B. Coding Work & Evals: ${ctx.codingEvals}`,
    "",
    batteryBlock(ctx.battery),
  ];
  const pipe = pipelineSection(ctx.pipelineLines);
  if (pipe) {
    parts.push("", pipe);
  }
  if (ctx.mainApproveAsk) {
    parts.push("", "## E. Main Approve", "", ctx.mainApproveAsk);
  }
  const out = parts.join("\n");
  assertNoUnresolvedPlaceholders(out);
  return out;
}

/** Telegram morning digest — itemized Work + Battery + Pipeline. */
export function renderTelegramDailyDigest(ctx: TemplateContext): string {
  if (!ctx.battery) throw new Error("telegram digest requires battery block");
  if (!ctx.digestDetail) throw new Error("telegram digest requires digestDetail");
  const d = ctx.digestDetail;
  const list = (items: string[]) =>
    items.length === 0 ? "None." : items.map((item, i) => `${i + 1}. ${item}`).join("\n");
  const parts = [
    `Morning Digest — ${ctx.weekdayDate}`,
    "",
    "## A. Work",
    "",
    workSummary(ctx),
    "",
    "ii. Calendar Events:",
    "",
    list(d.calendarEvents),
    "",
    "iii. Tasks:",
    "",
    list(d.tasks),
    "",
    "iv. Email Messages:",
    "",
    list(d.emails),
    "",
    "v. Unanswered Messages:",
    "",
    list(d.unanswered),
    "",
    ctx.codingEvals === "No"
      ? "## B. Coding Work & Evals: No"
      : `## B. Coding Work & Evals: Yes\n\n${d.codingDetail ?? "None."}`,
    "",
    batteryBlock(ctx.battery),
  ];
  const pipe = pipelineSection(ctx.pipelineLines);
  if (pipe) parts.push("", pipe);
  if (ctx.mainApproveAsk) parts.push("", "## E. Main Approve", "", ctx.mainApproveAsk);
  const out = parts.join("\n");
  assertNoUnresolvedPlaceholders(out);
  return out;
}

/** Email digest — Work + Coding + Pipeline + Approve; never Battery. */
export function renderEmailDailyDigest(ctx: TemplateContext): string {
  if (!ctx.digestDetail) throw new Error("email digest requires digestDetail");
  const d = ctx.digestDetail;
  const list = (items: string[]) =>
    items.length === 0 ? "None." : items.map((item, i) => `${i + 1}. ${item}`).join("\n");
  const parts = [
    `Morning Digest — ${ctx.weekdayDate}`,
    "",
    "## A. Work",
    "",
    workSummary(ctx),
    "",
    "ii. Calendar Events:",
    "",
    list(d.calendarEvents),
    "",
    "iii. Tasks:",
    "",
    list(d.tasks),
    "",
    "iv. Email Messages:",
    "",
    list(d.emails),
    "",
    "v. Unanswered Messages:",
    "",
    list(d.unanswered),
    "",
    ctx.codingEvals === "No"
      ? "## B. Coding Work & Evals: No"
      : `## B. Coding Work & Evals: Yes\n\n${d.codingDetail ?? "None."}`,
  ];
  const pipe = pipelineSection(ctx.pipelineLines);
  if (pipe) parts.push("", pipe);
  if (ctx.mainApproveAsk) parts.push("", "## E. Main Approve", "", ctx.mainApproveAsk);
  const out = parts.join("\n");
  if (/Battery Monitoring|plugged status|Expected current charge/i.test(out)) {
    throw new Error("email digest must omit Battery Monitoring");
  }
  assertNoUnresolvedPlaceholders(out);
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
