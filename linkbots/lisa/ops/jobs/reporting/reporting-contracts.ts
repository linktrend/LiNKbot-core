export const DIGEST_DEADLINES = ["07:00", "17:00"] as const;
export const FLASH_DEADLINES = ["10:45", "12:45", "14:45", "20:45", "22:45"] as const;

export type LisaReportSource =
  | "user_report"
  | "calendar"
  | "google_tasks"
  | "mailbox"
  | "agent_report"
  | "conversation"
  | "lisa";
export type LisaVerification = "verified" | "unverified";
export type LisaReportItemKind =
  | "meaningful_completion"
  | "routine_check"
  | "routine_calendar"
  | "private_health"
  | "battery"
  | "selfie";

export type LisaReportItem = {
  text: string;
  source: LisaReportSource;
  verification: LisaVerification;
  kind?: LisaReportItemKind;
};

export type LisaDecision = {
  id: string;
  matter: string;
  recommendation: string;
  reason: string;
  options: readonly string[];
};

export type LisaCalendarItem = LisaReportItem & {
  calendar: "work" | "personal";
  calendarSource: "lisa-managed" | "routine" | "private" | "inaccessible";
};

export type LisaEmailItem = LisaReportItem & {
  mailbox: "lisa" | "other";
  mailboxAction: "received" | "needs_send";
  needsCarlosAttention: boolean;
};

export type LisaDeliveryChannel = "telegram" | "email";
export type LisaDeliveryPlan = {
  channels: readonly LisaDeliveryChannel[];
  idempotencyKey: string;
  deadline: string;
  preparationDeadline: string;
  retryCount: 1;
  receiptRequired: true;
  browserChatCopy?: true;
};

export type LisaChannelReceipt = {
  channel: LisaDeliveryChannel;
  idempotencyKey: string;
  receiptId: string;
  receivedAt: string;
};

export type LisaEmailFailurePlan = {
  retryCount: 1;
  browserChatCopy: true;
  telegramFallback: "urgent_decisions_or_allocation_only";
  emailSuccessRequiresReceipt: true;
};

export const EMAIL_FAILURE_PLAN: LisaEmailFailurePlan = {
  retryCount: 1,
  browserChatCopy: true,
  telegramFallback: "urgent_decisions_or_allocation_only",
  emailSuccessRequiresReceipt: true,
};

const PRIVATE_HEALTH_FIELDS = [
  "health",
  "medication",
  "mounjaro",
  "supplement",
  "symptom",
  "weight",
  "waist",
  "sleep",
  "mood",
  "stress",
] as const;

function assertText(value: string, label: string): void {
  if (!value.trim()) {
    throw new Error(`${label} must not be empty`);
  }
  if (value.includes("{{") || value.includes("}}") || value.includes("|")) {
    throw new Error(`${label} contains an unresolved placeholder or table syntax`);
  }
}

function assertNoPrivateHealthFields(value: unknown, label: string): void {
  if (!value || typeof value !== "object") {
    return;
  }
  for (const field of PRIVATE_HEALTH_FIELDS) {
    if (field in value) {
      throw new Error(`${label} contains private-health field: ${field}`);
    }
  }
}

export function assertDecision(decision: LisaDecision): void {
  assertNoPrivateHealthFields(decision, "decision");
  assertText(decision.id, "decision id");
  assertText(decision.matter, "decision matter");
  assertText(decision.recommendation, "decision recommendation");
  assertText(decision.reason, "decision reason");
  if (decision.options.length < 2 || decision.options.at(-1) !== "Other — specify") {
    throw new Error("decision choices must end with Other — specify");
  }
  for (const option of decision.options) {
    assertText(option, "decision choice");
  }
  if (new Set(decision.options).size !== decision.options.length) {
    throw new Error("decision choices must be mutually exclusive");
  }
}

export function assertSafeReportItem(item: LisaReportItem): void {
  assertReportItem(item);
  if (item.verification !== "verified") {
    throw new Error("report item must have a verified source label");
  }
}

export function assertReportItem(
  item: LisaReportItem,
  options: { allowUnverified?: boolean } = {},
): void {
  assertNoPrivateHealthFields(item, "report item");
  assertText(item.text, "report item text");
  if (!item.source || (!options.allowUnverified && item.verification !== "verified")) {
    throw new Error("report item must have a verified source label");
  }
  if (["private_health", "battery", "selfie"].includes(item.kind ?? "")) {
    throw new Error("private item cannot enter work report");
  }
}

export function assertCalendarItem(item: LisaCalendarItem): boolean {
  assertSafeReportItem(item);
  if (item.source !== "calendar") {
    throw new Error("calendar item must be calendar-sourced");
  }
  if (item.calendarSource === "private" || item.calendarSource === "inaccessible") {
    throw new Error("private or inaccessible calendar source is not reportable");
  }
  return item.calendarSource !== "routine";
}

export function assertEmailItem(item: LisaEmailItem): boolean {
  assertSafeReportItem(item);
  if (item.source !== "mailbox" || item.mailbox !== "lisa") {
    throw new Error("email item must come from Lisa's mailbox");
  }
  if (item.mailboxAction !== "received" && item.mailboxAction !== "needs_send") {
    throw new Error("email item must be received or need to be sent");
  }
  return item.needsCarlosAttention;
}

export function assertRenderedReport(output: string): void {
  assertText(output, "rendered report");
  if (output.includes("{{") || output.includes("}}") || output.includes("|")) {
    throw new Error("rendered report contains unresolved placeholders or table syntax");
  }
  if (/\n\s*\n\s*\n/.test(output)) {
    throw new Error("rendered report contains an empty padded section");
  }
  if (
    /\b(?:health|selfie|Mounjaro|medication|supplement|symptom|weight|waist|sleep|mood|stress)\b/i.test(
      output,
    )
  ) {
    throw new Error("rendered report contains private-health detail");
  }
  if (/delivery\s*:\s*(?:completed|success)|delivery\s+completed/i.test(output)) {
    throw new Error("render-only output cannot claim delivery success");
  }
}

export function assertDeliveryReceipt(
  receipt: LisaChannelReceipt | undefined,
): asserts receipt is LisaChannelReceipt {
  if (
    !receipt ||
    !receipt.channel ||
    !receipt.idempotencyKey ||
    !receipt.receiptId ||
    !receipt.receivedAt
  ) {
    throw new Error("delivery requires a channel receipt");
  }
}
