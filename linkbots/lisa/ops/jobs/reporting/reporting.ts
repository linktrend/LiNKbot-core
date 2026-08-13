import { assertDecision, assertSafeReportItem, type LisaDecision, type LisaDeliveryPlan, type LisaReportItem } from "./reporting-contracts.js";

export type ExecutiveDigestInput = { variant: "morning" | "evening"; completed: readonly LisaReportItem[]; workCalendar: readonly LisaReportItem[]; personalCalendar: readonly LisaReportItem[]; carlosTasks: readonly LisaReportItem[]; otherTasks: readonly LisaReportItem[]; outstanding: readonly LisaReportItem[]; agentExceptions: readonly LisaReportItem[]; decisions: readonly LisaDecision[]; maintenance?: string; };
const lines = (items: readonly LisaReportItem[]) => items.length ? items.map((item) => { assertSafeReportItem(item); return `- ${item.text}`; }).join("\n") : "None.";
export function renderExecutiveDigest(input: ExecutiveDigestInput): string {
  if (input.variant === "evening" && input.maintenance) throw new Error("evening maintenance requires unresolved attention routing");
  input.decisions.forEach(assertDecision);
  const decisions = input.decisions.length ? input.decisions.map((d) => `${d.id}\n${d.matter}\nRecommendation: ${d.recommendation}\n${d.options.map((o, i) => `${String.fromCharCode(65 + i)}. ${o}`).join("\n")}`).join("\n\n") : "None.";
  const out = `Decisions and attention\n${decisions}\n\nCompleted since last digest\n${lines(input.completed)}\n\nCalendar before next digest\nWork\n${lines(input.workCalendar.filter((x) => x.kind !== "routine_calendar"))}\nPersonal\n${lines(input.personalCalendar)}\n\nTasks before next digest\nCarlos's Google Tasks\n${lines(input.carlosTasks)}\nOther tasks\n${lines(input.otherTasks)}\n\nOutstanding\n${lines(input.outstanding)}\n\nSupervised agents\n${lines(input.agentExceptions)}`;
  return input.variant === "morning" && input.maintenance ? `${out}\n\nOvernight maintenance\n${input.maintenance}` : out;
}
export function renderFlashReport(input: { deadline: "10:45" | "12:45" | "14:45" | "20:45" | "22:45"; status: "On track" | "Issues" | "Decision needed"; completed: readonly LisaReportItem[]; inProgress: readonly LisaReportItem[]; issues: readonly LisaReportItem[]; decisions: readonly LisaDecision[]; batteryStatus: string; flexiblePeriod?: "work" | "personal" }): string {
  input.decisions.forEach(assertDecision); if (!input.batteryStatus) throw new Error("Battery Status required");
  const body = `${input.status}\nCompleted\n${lines(input.completed)}\nIn progress\n${lines(input.inProgress)}\nIssues\n${lines(input.issues)}\nBattery Status\n${input.batteryStatus}`;
  return input.deadline === "14:45" ? `${body}\n15:30–17:00: ${input.flexiblePeriod ?? "work"}` : body;
}
export function planDigestDelivery(key: string, deadline: string, preparationDeadline: string): LisaDeliveryPlan { return { channels: ["telegram", "email"], idempotencyKey: key, deadline, preparationDeadline, retryCount: 1, receiptRequired: true, browserChatCopy: true }; }
export function planFlashDelivery(key: string, deadline: string, preparationDeadline: string): LisaDeliveryPlan { return { channels: ["telegram"], idempotencyKey: key, deadline, preparationDeadline, retryCount: 1, receiptRequired: true }; }
