/**
 * Lisa GitOps Repair Dispatcher — exact binding, pending hold, proof gates.
 * Live ACP dispatch is opt-in and fail-closed (see authorizeRepairLiveDispatch).
 * Persistence helpers write OpenClaw SQLite; nextRepairDecision stays pure.
 */

import {
  recordRepairAttempt,
  requireHealthyLisaStageOpsStore,
  upsertRepairBinding,
  type LisaStageOpsStoreOptions,
  type RepairAttemptRow,
  type RepairBindingRow,
} from "./lisa-stage-ops-store.ts";
import {
  authorizeLiveLisaAction,
  LISA_OPS_LIVE_ACTION_DEFAULTS,
  type LisaOpsLiveActionConfig,
} from "./ship-pull-contract.ts";

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

/** Exact repair target — all four fields are required for matching. */
export type RepairBinding = {
  repository: string;
  branch: string;
  prNumber: number | null;
  headSha: string;
};

export type RepairAttemptRecord = {
  binding: RepairBinding;
  attempt: number;
  /** Only set when ACP was actually dispatched. */
  dispatchedAt: string | null;
  outcome: "pending" | "succeeded" | "failed" | "stale_head" | "escalated" | "held";
  proofHeadSha: string | null;
};

export type RepairProof = {
  repository: string;
  branch: string;
  prNumber: number | null;
  headSha: string;
  attempt: number;
  gatesPassed: boolean;
};

export type RepairDecision =
  | { decision: "dispatch"; attempt: number; binding: RepairBinding }
  | { decision: "hold"; reason: "pending_attempt"; attempt: number; binding: RepairBinding }
  | { decision: "escalate"; reason: FailureClass | "max_attempts"; notifyCarlos: true }
  | { decision: "resolve"; binding: RepairBinding; attempt: number }
  | {
      decision: "reject_proof";
      reason: "stale_head" | "unmatched_binding" | "unrecorded_attempt" | "gates_failed";
    }
  | {
      decision: "blocked_non_live";
      reason: "live_targeting_disabled" | "credentials_language_not_approved";
    };

export type RepairLiveDispatch =
  | { ok: true; decision: Extract<RepairDecision, { decision: "dispatch" }> }
  | {
      ok: false;
      reason: "live_targeting_disabled" | "credentials_language_not_approved" | "not_dispatch";
      decision: RepairDecision;
    };

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

export function bindingKey(b: RepairBinding): string {
  return `${b.repository}|${b.branch}|${b.prNumber ?? "-"}|${b.headSha}`;
}

export function sameBinding(a: RepairBinding, b: RepairBinding): boolean {
  return bindingKey(a) === bindingKey(b);
}

export function classifyFailure(input: { labels?: string[]; summary?: string }): FailureClass {
  const hay = `${(input.labels ?? []).join(" ")} ${input.summary ?? ""}`.toLowerCase();
  if (/credential|secret|auth|token|keychain/.test(hay)) return "credentials";
  if (/security|cve|xss|rce|injection/.test(hay)) return "security";
  if (/force.?push|hard reset|delete branch|drop database/.test(hay)) {
    return "destructive_action";
  }
  if (/conflict|merge conflict/.test(hay)) return "ambiguous_conflict";
  if (/product decision|design choice|which approach/.test(hay)) return "product_decision";
  if (/approval|awaiting approve|needs principal/.test(hay)) return "approval";
  if (/billing|quota|rate limit|usage limit/.test(hay)) return "billing_usage_limit";
  if (/authority|permission denied|unavailable/.test(hay)) return "unavailable_authority";
  return "ordinary_repairable";
}

/** Attempts that were genuinely dispatched for this exact binding. */
export function dispatchedAttemptsForBinding(
  prior: RepairAttemptRecord[],
  binding: RepairBinding,
): RepairAttemptRecord[] {
  return prior.filter(
    (a) => sameBinding(a.binding, binding) && a.dispatchedAt !== null && a.outcome !== "held",
  );
}

export function nextRepairDecision(params: {
  failureClass: FailureClass;
  binding: RepairBinding;
  priorAttempts: RepairAttemptRecord[];
  currentHeadSha: string;
  latestProof?: RepairProof | null;
}): RepairDecision {
  if (IMMEDIATE_ESCALATE.has(params.failureClass)) {
    return { decision: "escalate", reason: params.failureClass, notifyCarlos: true };
  }

  // Current failure must match binding head.
  if (params.binding.headSha !== params.currentHeadSha) {
    return { decision: "reject_proof", reason: "stale_head" };
  }

  if (params.latestProof) {
    return evaluateProof({
      proof: params.latestProof,
      binding: params.binding,
      currentHeadSha: params.currentHeadSha,
      priorAttempts: params.priorAttempts,
    });
  }

  const forBinding = params.priorAttempts.filter((a) => sameBinding(a.binding, params.binding));
  const pending = forBinding.find((a) => a.outcome === "pending" && a.dispatchedAt !== null);
  if (pending) {
    return {
      decision: "hold",
      reason: "pending_attempt",
      attempt: pending.attempt,
      binding: params.binding,
    };
  }

  const dispatched = dispatchedAttemptsForBinding(params.priorAttempts, params.binding);
  const nextAttempt = dispatched.length + 1;
  if (nextAttempt > MAX_REPAIR_ATTEMPTS) {
    return { decision: "escalate", reason: "max_attempts", notifyCarlos: true };
  }

  return {
    decision: "dispatch",
    attempt: nextAttempt,
    binding: { ...params.binding, headSha: params.currentHeadSha },
  };
}

export function evaluateProof(params: {
  proof: RepairProof;
  binding: RepairBinding;
  currentHeadSha: string;
  priorAttempts: RepairAttemptRecord[];
}): RepairDecision {
  const proofBinding: RepairBinding = {
    repository: params.proof.repository,
    branch: params.proof.branch,
    prNumber: params.proof.prNumber,
    headSha: params.proof.headSha,
  };
  if (!sameBinding(proofBinding, params.binding)) {
    return { decision: "reject_proof", reason: "unmatched_binding" };
  }
  if (params.proof.headSha !== params.currentHeadSha) {
    return { decision: "reject_proof", reason: "stale_head" };
  }
  const recorded = params.priorAttempts.find(
    (a) =>
      sameBinding(a.binding, params.binding) &&
      a.attempt === params.proof.attempt &&
      a.dispatchedAt !== null,
  );
  if (!recorded) {
    return { decision: "reject_proof", reason: "unrecorded_attempt" };
  }
  if (!params.proof.gatesPassed) {
    return { decision: "reject_proof", reason: "gates_failed" };
  }
  return {
    decision: "resolve",
    binding: params.binding,
    attempt: params.proof.attempt,
  };
}

/**
 * Runtime live ACP dispatch gate — defaults block targeting live Lisa.
 * Pure planners (`nextRepairDecision`) remain available for tests; callers that
 * would spawn ACP against live Lisa must use this authorizer.
 */
export function authorizeRepairLiveDispatch(
  params: Parameters<typeof nextRepairDecision>[0],
  live: LisaOpsLiveActionConfig = LISA_OPS_LIVE_ACTION_DEFAULTS,
): RepairLiveDispatch {
  const liveGate = authorizeLiveLisaAction(live);
  if (!liveGate.ok) {
    return {
      ok: false,
      reason: liveGate.reason,
      decision: { decision: "blocked_non_live", reason: liveGate.reason },
    };
  }
  const decision = nextRepairDecision(params);
  if (decision.decision !== "dispatch") {
    return { ok: false, reason: "not_dispatch", decision };
  }
  return { ok: true, decision };
}

/** Record a genuine dispatch (idempotent on binding+attempt). */
export function recordDispatch(
  existing: RepairAttemptRecord[],
  binding: RepairBinding,
  attempt: number,
  dispatchedAt: string,
): RepairAttemptRecord[] {
  const key = `${bindingKey(binding)}|${attempt}`;
  if (
    existing.some((e) => `${bindingKey(e.binding)}|${e.attempt}` === key && e.dispatchedAt !== null)
  ) {
    return existing;
  }
  return [
    ...existing,
    {
      binding,
      attempt,
      dispatchedAt,
      outcome: "pending",
      proofHeadSha: null,
    },
  ];
}

/**
 * Persist an exact repair binding into OpenClaw SQLite (idempotent upsert).
 * Does not affect pure nextRepairDecision planning.
 */
export function persistRepairBinding(
  binding: RepairBinding,
  options: LisaStageOpsStoreOptions,
  nowMs = Date.now(),
): RepairBindingRow {
  requireHealthyLisaStageOpsStore(options);
  return upsertRepairBinding(options, binding, nowMs);
}

/**
 * Persist a repair attempt into OpenClaw SQLite (idempotent on bindingKey+attempt).
 * Does not affect pure nextRepairDecision planning.
 */
export function persistRepairAttempt(
  input: {
    binding: RepairBinding;
    attempt: number;
    dispatchedAt: string | null;
    outcome: RepairAttemptRecord["outcome"];
    proofHeadSha?: string | null;
    expiresAtMs?: number | null;
    attemptId?: string;
  },
  options: LisaStageOpsStoreOptions,
  nowMs = Date.now(),
): RepairAttemptRow {
  requireHealthyLisaStageOpsStore(options);
  const dispatchedAtMs = input.dispatchedAt === null ? null : Date.parse(input.dispatchedAt);
  return recordRepairAttempt(
    options,
    {
      bindingKey: bindingKey(input.binding),
      attempt: input.attempt,
      dispatchedAtMs:
        dispatchedAtMs !== null && Number.isFinite(dispatchedAtMs) ? dispatchedAtMs : null,
      outcome: input.outcome,
      proofHeadSha: input.proofHeadSha,
      expiresAtMs: input.expiresAtMs,
      attemptId: input.attemptId,
    },
    nowMs,
  );
}
