import type { SelfieStatus } from "./compliance-contracts.js";
export function classifySelfieReport(localHour: number, sourceEventId: string, text: string): SelfieStatus | "invalid_before_18" | "ambiguous" { if (!sourceEventId || /promise|will|later/iu.test(text)) return "ambiguous"; if (localHour < 18) return "invalid_before_18"; return localHour <= 22 ? "Completed" : "Reported Late"; }
export function shouldSendConditionalSelfieReminder(status: SelfieStatus | undefined): boolean { return status == null; }
