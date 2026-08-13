export type LisaReportSource = "verified" | "unverified";
export type LisaDecision = { id: string; matter: string; recommendation: string; options: readonly string[] };
export type LisaReportItem = { text: string; source: LisaReportSource; kind?: "routine_calendar" | "private_health" | "battery" | "selfie" };
export type LisaDeliveryPlan = { channels: readonly ("telegram" | "email")[]; idempotencyKey: string; deadline: string; preparationDeadline: string; retryCount: 1; receiptRequired: true; browserChatCopy?: true };
export function assertDecision(decision: LisaDecision): void {
  if (!decision.id || !decision.matter || !decision.recommendation || decision.options.length < 2 || decision.options.at(-1) !== "Other — specify") throw new Error("invalid Lisa decision block");
  if (new Set(decision.options).size !== decision.options.length) throw new Error("decision choices must be mutually exclusive");
}
export function assertSafeReportItem(item: LisaReportItem): void {
  if (item.source !== "verified") throw new Error("unverified item cannot be completed");
  if (["private_health", "battery", "selfie"].includes(item.kind ?? "")) throw new Error("private item cannot enter work report");
}
