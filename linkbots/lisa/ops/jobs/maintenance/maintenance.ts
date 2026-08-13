import {
  MAINTENANCE_WINDOWS,
  nextMaintenanceStage,
  type MaintenanceStage,
  type MaintenanceState,
} from "./maintenance-contracts.js";

export type MaintenancePlan = Readonly<{
  stage?: MaintenanceStage;
  lisaAvailable: boolean;
  backgroundRetry: boolean;
}>;

export function planMaintenance(
  state: MaintenanceState,
  nowMinute: number,
  backgroundUploadFailed = false,
): MaintenancePlan {
  return {
    stage: nextMaintenanceStage(state, nowMinute),
    lisaAvailable: nowMinute >= MAINTENANCE_WINDOWS.backup.endMinute,
    backgroundRetry:
      backgroundUploadFailed &&
      nowMinute >= MAINTENANCE_WINDOWS.backup.endMinute &&
      nowMinute < MAINTENANCE_WINDOWS.backup.endMinute + 360,
  };
}

export type RetentionDecision = "retain_previous" | "replace_previous";

export function backupRetention(input: {
  currentUploadVerified: boolean;
  currentRestoreVerified: boolean;
  previousExists: boolean;
}): RetentionDecision {
  if (input.currentUploadVerified && input.currentRestoreVerified) {
    return "replace_previous";
  }
  return "retain_previous";
}

export type BackgroundUploadRetryPlan = Readonly<{
  attemptNumber: number;
  dueAtMinute: number;
  lisaAvailable: true;
}>;

export function planBackgroundUploadRetry(input: {
  nowMinute: number;
  uploadFailed: boolean;
  attemptsCompleted: number;
}): BackgroundUploadRetryPlan | undefined {
  const firstRetryMinute = MAINTENANCE_WINDOWS.backup.endMinute;
  const lastRetryMinute = firstRetryMinute + 6 * 60;
  if (
    !input.uploadFailed ||
    input.attemptsCompleted < 0 ||
    input.attemptsCompleted >= 6 ||
    input.nowMinute < firstRetryMinute ||
    input.nowMinute >= lastRetryMinute
  ) {
    return undefined;
  }
  return {
    attemptNumber: input.attemptsCompleted + 1,
    dueAtMinute: firstRetryMinute + input.attemptsCompleted * 60,
    lisaAvailable: true,
  };
}

export type MaintenanceDigestInput = Readonly<{
  dreaming?:
    | { status: "completed"; promotedCount: number }
    | { status: "failed_after_retry" }
    | { status: "skipped_dependency" };
  backup?:
    | { status: "completed_verified" }
    | { status: "upload_retrying" }
    | { status: "failed_after_retry" }
    | { status: "monthly_restore_passed" }
    | { status: "monthly_restore_failed" };
}>;

/** Return only approved, concise lines suitable for the next scheduled digest. */
export function composeMaintenanceDigest(input: MaintenanceDigestInput): readonly string[] {
  const lines: string[] = [];
  if (input.dreaming?.status === "completed") {
    lines.push(`Memory Dreaming: completed — ${input.dreaming.promotedCount} memories promoted`);
  } else if (input.dreaming?.status === "failed_after_retry") {
    lines.push("Memory Dreaming: failed after retry");
  } else if (input.dreaming?.status === "skipped_dependency") {
    lines.push("Memory Dreaming: skipped — Librarian dependency not satisfied");
  }
  switch (input.backup?.status) {
    case "completed_verified":
      lines.push("Lisa backup: completed and verified in Google Drive");
      break;
    case "upload_retrying":
      lines.push("Lisa backup: completed; Google Drive upload is retrying");
      break;
    case "failed_after_retry":
      lines.push("Lisa backup: failed after retry");
      break;
    case "monthly_restore_passed":
      lines.push("Lisa backup: monthly restore test passed");
      break;
    case "monthly_restore_failed":
      lines.push("Lisa backup: monthly restore test failed");
      break;
    default:
      break;
  }
  return Object.freeze(lines);
}

/** Dreaming failures are digest-only; this source surface never sends an immediate alert. */
export function composeImmediateDreamingFailureMessage(): undefined {
  return undefined;
}
