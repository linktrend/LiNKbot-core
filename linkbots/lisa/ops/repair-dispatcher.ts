/**
 * Lisa GitOps Repair Dispatcher contract (repository-side).
 */

export type FailureClass =
  | "ordinary_repairable"
  | "credentials"
  | "security"
  | "destructive_action"
  | "ambiguous_conflict"
  | "product_decision"
  | "approval"
  | "billing_usage_limit"
  | "unavailable_authority";

export type RepairBinding = {
  repository: string;
  branch: string;
  prNumber: number | null;
  headSha: string;
};

export type RepairAttemptRecord = {
  binding: RepairBinding;
  attempt: number;
  dispatchedAt: string;
  outcome: "pending" | "succeeded" | "failed" | "stale_head" | "escalated";
  proofHeadSha: string | null;
};

export type RepairDecision =
  | { decision: "dispatch"; attempt: number; binding: RepairBinding }
  | { decision: "escalate"; reason: FailureClass | "max_attempts"; notifyCarlos: true }
  | { decision: "resolve"; binding: RepairBinding }
  | { decision: "reject_stale_success"; reason: string };

export const MAX_REPAIR_ATTEMPTS = 3;

const IMMEDIATE_ESCALATE: ReadonlySet<FailureClass> = new Set([
  "credentials",
  "security",
  "destructive_action",
  "ambiguous_conflict",
  "product_decision",
  "approval",
  "billing_usage_limit",
  "unavailable_authority",
]);

export function classifyFailure(input: { labels?: string[]; summary?: string }): FailureClass {
  const hay = `${(input.labels ?? []).join(" ")} ${input.summary ?? ""}`.toLowerCase();
  if (/credential|secret|auth|token|keychain/.test(hay)) return "credentials";
  if (/security|cve|xss|rce|injection/.test(hay)) return "security";
  if (/force.?push|hard reset|delete branch|drop database/.test(hay)) return "destructive_action";
  if (/conflict|merge conflict/.test(hay)) return "ambiguous_conflict";
  if (/product decision|design choice|which approach/.test(hay)) return "product_decision";
  if (/approval|awaiting approve|needs principal/.test(hay)) return "approval";
  if (/billing|quota|rate limit|usage limit/.test(hay)) return "billing_usage_limit";
  if (/authority|permission denied|unavailable/.test(hay)) return "unavailable_authority";
  return "ordinary_repairable";
}

export function nextRepairDecision(params: {
  failureClass: FailureClass;
  binding: RepairBinding;
  priorAttempts: RepairAttemptRecord[];
  currentHeadSha: string;
  latestAttemptProof?: { headSha: string; gatesPassed: boolean } | null;
}): RepairDecision {
  if (IMMEDIATE_ESCALATE.has(params.failureClass)) {
    return { decision: "escalate", reason: params.failureClass, notifyCarlos: true };
  }

  const attemptsForHead = params.priorAttempts.filter(
    (a) =>
      a.binding.repository === params.binding.repository &&
      a.binding.branch === params.binding.branch &&
      a.binding.headSha === params.binding.headSha,
  );

  if (params.latestAttemptProof) {
    if (params.latestAttemptProof.headSha !== params.currentHeadSha) {
      return {
        decision: "reject_stale_success",
        reason: "repair proof head does not match current failure head",
      };
    }
    if (params.latestAttemptProof.gatesPassed) {
      return {
        decision: "resolve",
        binding: { ...params.binding, headSha: params.currentHeadSha },
      };
    }
  }

  const nextAttempt = attemptsForHead.length + 1;
  if (nextAttempt > MAX_REPAIR_ATTEMPTS) {
    return { decision: "escalate", reason: "max_attempts", notifyCarlos: true };
  }

  // Idempotent: identical pending attempt for same binding does not create a fourth.
  const pendingSame = attemptsForHead.find(
    (a) => a.outcome === "pending" && a.attempt === nextAttempt - 0,
  );
  if (pendingSame && pendingSame.attempt >= MAX_REPAIR_ATTEMPTS) {
    return { decision: "escalate", reason: "max_attempts", notifyCarlos: true };
  }

  return {
    decision: "dispatch",
    attempt: nextAttempt,
    binding: { ...params.binding, headSha: params.currentHeadSha },
  };
}

/** Idempotent attempt key — same binding + attempt number collapses. */
export function repairAttemptKey(binding: RepairBinding, attempt: number): string {
  return `${binding.repository}|${binding.branch}|${binding.prNumber ?? "-"}|${binding.headSha}|${attempt}`;
}

export function recordAttemptIdempotent(
  existing: RepairAttemptRecord[],
  next: RepairAttemptRecord,
): RepairAttemptRecord[] {
  const key = repairAttemptKey(next.binding, next.attempt);
  if (existing.some((e) => repairAttemptKey(e.binding, e.attempt) === key)) {
    return existing;
  }
  return [...existing, next];
}
