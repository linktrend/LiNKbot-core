import { readFileSync } from "node:fs";
import {
  assertCalendarItem,
  assertDecision,
  assertDeliveryReceipt,
  assertEmailItem,
  assertReportItem,
  assertRenderedReport,
  assertSafeReportItem,
  DIGEST_DEADLINES,
  FLASH_DEADLINES,
  type LisaCalendarItem,
  type LisaChannelReceipt,
  type LisaDecision,
  type LisaDeliveryPlan,
  type LisaEmailItem,
  type LisaReportItem,
} from "./reporting-contracts.js";

const TEMPLATE_PLACEHOLDER = /\{\{([a-z_]+)\}\}/g;

function loadTemplate(name: string, requiredKeys: readonly string[]): string {
  const template = readFileSync(
    new URL(`./templates/${name}.md`, import.meta.url),
    "utf8",
  ).trimEnd();
  if (!template || template.includes("|")) {
    throw new Error(`${name} template is empty or contains table syntax`);
  }
  const keys = [...template.matchAll(TEMPLATE_PLACEHOLDER)].map((match) => match[1]);
  if (
    keys.some((key) => !requiredKeys.includes(key)) ||
    requiredKeys.some((key) => !keys.includes(key))
  ) {
    throw new Error(`${name} template has an unsupported or missing placeholder`);
  }
  return template;
}

const EXECUTIVE_DIGEST_TEMPLATE = loadTemplate("executive-digest", [
  "decisions",
  "email_attention",
  "completed",
  "work_calendar",
  "personal_calendar",
  "carlos_tasks",
  "other_tasks",
  "outstanding",
  "supervised_agents",
  "overnight_maintenance",
]);
const FLASH_REPORT_TEMPLATE = loadTemplate("flash-report", [
  "status",
  "completed",
  "in_progress",
  "issues",
  "decisions",
  "supervised_agents",
  "next_expected_result",
  "battery_status",
  "flexible_period",
]);

export type DigestPeriod = { from: string; to: string; nextDigest: string };
export const DEFAULT_DIGEST_PERIODS = {
  morning: { from: "previous 17:00", to: "07:00", nextDigest: "17:00" },
  evening: { from: "07:00", to: "17:00", nextDigest: "next 07:00" },
} as const;

export type ExecutiveDigestInput = {
  variant: "morning" | "evening";
  period?: DigestPeriod;
  completed: readonly LisaReportItem[];
  routineChecks?: readonly LisaReportItem[];
  workCalendar: readonly LisaCalendarItem[];
  personalCalendar: readonly LisaCalendarItem[];
  emails?: readonly LisaEmailItem[];
  carlosTasks: readonly LisaReportItem[];
  otherTasks: readonly LisaReportItem[];
  outstanding: readonly LisaReportItem[];
  agentSummary?: string;
  agentExceptions: readonly LisaReportItem[];
  decisions: readonly LisaDecision[];
  maintenance?: string;
};

type FlashReportInput = {
  deadline: (typeof FLASH_DEADLINES)[number];
  status: "On track" | "Issues" | "Decision needed";
  completed: readonly LisaReportItem[];
  inProgress: readonly LisaReportItem[];
  issues: readonly LisaReportItem[];
  decisions: readonly LisaDecision[];
  supervisedAgents: readonly LisaReportItem[];
  nextExpectedResult: string;
  batteryStatus: string;
  flexiblePeriod?: "work" | "personal";
};

function lines(items: readonly LisaReportItem[], allowUnverified = false): string {
  return items.length
    ? items
        .map((item) => {
          assertReportItem(item, { allowUnverified });
          return `- ${item.verification === "unverified" ? "Awaiting verification: " : ""}${item.text}`;
        })
        .join("\n")
    : "None.";
}

function replaceTemplate(template: string, values: Record<string, string>): string {
  const output = template
    .replace(/\{\{([a-z_]+)\}\}/g, (placeholder, key: string) => values[key] ?? placeholder)
    .trimEnd();
  assertRenderedReport(output);
  return output;
}

function decisionLines(decisions: readonly LisaDecision[]): string {
  decisions.forEach(assertDecision);
  return decisions.length
    ? decisions
        .map((decision) =>
          [
            decision.id,
            decision.matter,
            `Recommendation: ${decision.recommendation}`,
            `Reason: ${decision.reason}`,
            ...decision.options.map(
              (option, index) => `${String.fromCharCode(65 + index)}. ${option}`,
            ),
          ].join("\n"),
        )
        .join("\n\n")
    : "None.";
}

function calendarLines(items: readonly LisaCalendarItem[]): string {
  const visible = items.filter(assertCalendarItem);
  return lines(visible);
}

function emailLines(items: readonly LisaEmailItem[]): string {
  const attention = items.filter(assertEmailItem);
  return attention.length ? lines(attention) : "None.";
}

export function resolveDigestPeriod(
  input: Pick<ExecutiveDigestInput, "variant" | "period">,
): DigestPeriod {
  const expected = DEFAULT_DIGEST_PERIODS[input.variant];
  if (
    input.period &&
    (input.period.from !== expected.from ||
      input.period.to !== expected.to ||
      input.period.nextDigest !== expected.nextDigest)
  ) {
    throw new Error("digest period does not match its deadline");
  }
  return input.period ?? expected;
}

function completionLines(input: ExecutiveDigestInput): string {
  const items = [...input.completed, ...(input.routineChecks ?? [])];
  const routine = items.filter((item) => item.kind === "routine_check");
  const meaningful = items.filter((item) => item.kind !== "routine_check");
  const result = meaningful.length ? lines(meaningful) : "None.";
  return routine.length ? `${result}\n- Routine checks: completed` : result;
}

function maintenanceSection(input: ExecutiveDigestInput): string {
  if (!input.maintenance) {
    return "";
  }
  if (input.variant === "evening") {
    throw new Error("evening maintenance requires unresolved attention routing");
  }
  assertSafeReportItem({
    text: input.maintenance,
    source: "lisa",
    verification: "verified",
  });
  return `**Overnight maintenance**\n${input.maintenance}`;
}

export function renderExecutiveDigest(input: ExecutiveDigestInput): string {
  resolveDigestPeriod(input);
  if (input.variant === "evening" && input.maintenance) {
    throw new Error("evening maintenance requires unresolved attention routing");
  }
  const agentExceptions = lines(input.agentExceptions, true);
  const supervisedAgents = input.agentExceptions.length
    ? `${input.agentSummary?.trim() || "Current supervised agents"}\n${agentExceptions}`
    : input.agentSummary?.trim() || "All current — no exceptions.";
  if (input.agentSummary) {
    assertRenderedReport(input.agentSummary);
  }
  const output = replaceTemplate(EXECUTIVE_DIGEST_TEMPLATE, {
    decisions: decisionLines(input.decisions),
    email_attention: `${input.decisions.length ? "\n" : ""}**Email needing Carlos attention**\n${emailLines(input.emails ?? [])}`,
    completed: completionLines(input),
    work_calendar: calendarLines(input.workCalendar),
    personal_calendar: calendarLines(input.personalCalendar),
    carlos_tasks: lines(input.carlosTasks),
    other_tasks: lines(input.otherTasks),
    outstanding: lines(input.outstanding, true),
    supervised_agents: supervisedAgents,
    overnight_maintenance: maintenanceSection(input),
  });
  return output;
}

function isNoChange(input: FlashReportInput): boolean {
  return (
    input.completed.length === 0 &&
    input.inProgress.length === 0 &&
    input.issues.length === 0 &&
    input.decisions.length === 0 &&
    input.supervisedAgents.length === 0 &&
    !input.nextExpectedResult.trim()
  );
}

function flexiblePeriodLine(input: FlashReportInput): string {
  if (input.deadline !== "14:45") {
    return "";
  }
  if (!input.flexiblePeriod) {
    throw new Error("14:45 report must decide the flexible period");
  }
  return input.flexiblePeriod === "work"
    ? "15:30–17:00 remains a work period"
    : "15:30–17:00 becomes personal time";
}

export function renderFlashReport(input: FlashReportInput): string {
  input.decisions.forEach(assertDecision);
  if (!input.batteryStatus.trim()) {
    throw new Error("Battery Status required");
  }
  assertRenderedReport(input.batteryStatus);
  const flexiblePeriod = flexiblePeriodLine(input);
  const noChange = isNoChange(input);
  if (!noChange && !input.nextExpectedResult.trim()) {
    throw new Error("next expected result required");
  }
  if (noChange) {
    const output = `No material changes since last report. **Battery Status:** ${input.batteryStatus}`;
    assertRenderedReport(output);
    return output;
  }
  const output = replaceTemplate(FLASH_REPORT_TEMPLATE, {
    status: input.status,
    completed: lines(input.completed),
    in_progress: lines(input.inProgress),
    issues: lines(input.issues),
    decisions: decisionLines(input.decisions),
    supervised_agents: lines(input.supervisedAgents, true),
    next_expected_result: input.nextExpectedResult,
    battery_status: input.batteryStatus,
    flexible_period: flexiblePeriod,
  });
  return output;
}

function planDelivery(
  channels: readonly ("telegram" | "email")[],
  key: string,
  deadline: string,
  preparationDeadline: string,
  browserChatCopy?: true,
): LisaDeliveryPlan {
  if (!key.trim() || !deadline.trim() || !preparationDeadline.trim()) {
    throw new Error("delivery plan requires an idempotency key and deadlines");
  }
  return {
    channels,
    idempotencyKey: key,
    deadline,
    preparationDeadline,
    retryCount: 1,
    receiptRequired: true,
    ...(browserChatCopy ? { browserChatCopy: true } : {}),
  };
}

export function planDigestDelivery(
  key: string,
  deadline: (typeof DIGEST_DEADLINES)[number],
  preparationDeadline: string,
): LisaDeliveryPlan {
  if (!DIGEST_DEADLINES.includes(deadline)) {
    throw new Error("invalid digest deadline");
  }
  return planDelivery(["telegram", "email"], key, deadline, preparationDeadline, true);
}

export function planFlashDelivery(
  key: string,
  deadline: (typeof FLASH_DEADLINES)[number],
  preparationDeadline: string,
): LisaDeliveryPlan {
  if (!FLASH_DEADLINES.includes(deadline)) {
    throw new Error("invalid Flash Report deadline");
  }
  return planDelivery(["telegram"], key, deadline, preparationDeadline);
}

export function claimDeliveryCompleted(receipt: LisaChannelReceipt | undefined): "completed" {
  assertDeliveryReceipt(receipt);
  return "completed";
}
