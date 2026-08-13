import {
  isValidSelfieConfirmation,
  type SelfieClassification,
  type SelfieStatus,
} from "./compliance-contracts.js";

export type SelfieLocalTime = { hour: number; minute: number };

function assertLocalTime(time: SelfieLocalTime): void {
  if (
    !Number.isInteger(time.hour) ||
    time.hour < 0 ||
    time.hour > 23 ||
    !Number.isInteger(time.minute) ||
    time.minute < 0 ||
    time.minute > 59
  ) {
    throw new Error("invalid local time");
  }
}

/** Classify a natural-language report using Asia/Taipei local wall-clock time supplied by the caller. */
export function classifySelfieReport(
  time: SelfieLocalTime,
  sourceEventId: string,
  text: string,
): SelfieClassification;
export function classifySelfieReport(
  localHour: number,
  sourceEventId: string,
  text: string,
  localMinute?: number,
): SelfieClassification;
export function classifySelfieReport(
  timeOrHour: SelfieLocalTime | number,
  sourceEventId: string,
  text: string,
  localMinute = 0,
): SelfieClassification {
  const time =
    typeof timeOrHour === "number" ? { hour: timeOrHour, minute: localMinute } : timeOrHour;
  assertLocalTime(time);
  if (time.hour < 18) {
    return "invalid_before_18";
  }
  if (!sourceEventId || !isValidSelfieConfirmation(text)) {
    return "ambiguous";
  }
  if (time.hour === 22 && time.minute > 0) {
    return "Reported Late";
  }
  return time.hour < 23 ? "Completed" : "Reported Late";
}

export function shouldSendConditionalSelfieReminder(status: SelfieStatus | undefined): boolean {
  return status === undefined || status === "Missed";
}

export function selfieAcknowledgment(status: SelfieStatus): string {
  if (status === "Completed") {
    return "Selfie recorded as completed for today.";
  }
  if (status === "Reported Late") {
    return "Selfie recorded as reported late for today.";
  }
  return "Selfie day recorded as missed.";
}
