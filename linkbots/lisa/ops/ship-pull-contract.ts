/**
 * Ship / Pull branch policy — IDE-approved work-branch allowlist + wave semantics.
 * Actual live Lisa actions are opt-in and fail closed by default (see live-action gate).
 */

/**
 * Candidate-only defaults for every Lisa ops surface (Ship/Pull, Repair, digest,
 * heartbeat, cron install). No action may target live Lisa (`~/.openclaw-lisa`)
 * without explicit live targeting **and** separately approved credentials language
 * in docs/contracts. Repository helpers stay non-live.
 */
export const LISA_OPS_LIVE_ACTION_DEFAULTS = {
  liveLisaTargetingAllowed: false,
  credentialsLanguageSeparatelyApproved: false,
  cronMutationAllowed: false,
  profileSyncAllowed: false,
  shipPullLiveActionAllowed: false,
  repairDispatcherLiveActionAllowed: false,
  digestLiveActionAllowed: false,
  heartbeatLiveActionAllowed: false,
} as const;

export type LisaOpsLiveActionConfig = {
  liveLisaTargetingAllowed: boolean;
  credentialsLanguageSeparatelyApproved: boolean;
};

export type LisaOpsLiveActionDecision =
  | { ok: true }
  | {
      ok: false;
      reason: "live_targeting_disabled" | "credentials_language_not_approved";
    };

/** Fail-closed: both flags must be explicitly true before any live Lisa action. */
export function authorizeLiveLisaAction(
  config: LisaOpsLiveActionConfig = LISA_OPS_LIVE_ACTION_DEFAULTS,
): LisaOpsLiveActionDecision {
  if (config.liveLisaTargetingAllowed !== true) {
    return { ok: false, reason: "live_targeting_disabled" };
  }
  if (config.credentialsLanguageSeparatelyApproved !== true) {
    return { ok: false, reason: "credentials_language_not_approved" };
  }
  return { ok: true };
}

/** Ship/Pull live cron/ACP side effects — blocked under candidate defaults. */
export function authorizeShipPullLiveAction(
  config: LisaOpsLiveActionConfig = LISA_OPS_LIVE_ACTION_DEFAULTS,
): LisaOpsLiveActionDecision {
  return authorizeLiveLisaAction(config);
}

export type BranchKind = "issue" | "cursor" | "dev" | "integration" | "unsupported";

/** IDE studio branching default allowlist for Ship/Pull work. */
export const APPROVED_WORK_BRANCH_KINDS: ReadonlySet<BranchKind> = new Set([
  "issue",
  "cursor",
  "dev",
]);

export type BranchSnapshot = {
  repo: string;
  branch: string;
  tipSha: string;
  dirty: boolean;
  activelyOwned: boolean;
  frozenReviewedSha: string | null;
  hasLocalChanges: boolean;
  hasUnpushedCommits: boolean;
};

export type ShipBranchAction =
  | {
      action: "checkpoint";
      steps: ["commit_if_needed", "push"];
      allowPr: false;
      allowBugbot: false;
    }
  | { action: "skip"; reason: string; explicitResult: string };

export type PullBranchAction =
  | { action: "update"; method: "merge_origin_development"; allowForcePush: false }
  | { action: "skip"; reason: string; explicitResult: string };

export type BranchWaveResult = {
  repo: string;
  branch: string;
  status: "updated" | "checkpointed" | "skipped" | "blocked" | "no_work";
  detail: string;
};

/** Wave outcome — never Clear merely because everything was skipped. */
export type WaveOutcome =
  | { result: "Clear"; reason: "work_succeeded" }
  | { result: "Issues"; reason: "blocked_or_failed" }
  | { result: "Issues"; reason: "all_skipped_or_empty"; note: "no actionable work completed" };

const INTEGRATION = new Set(["development", "staging", "main"]);

export function classifyBranch(branch: string): BranchKind {
  if (INTEGRATION.has(branch)) {
    return "integration";
  }
  if (branch.startsWith("issue/")) {
    return "issue";
  }
  if (branch.startsWith("cursor/")) {
    return "cursor";
  }
  if (branch.startsWith("dev/")) {
    return "dev";
  }
  return "unsupported";
}

export function isApprovedWorkBranch(branch: string): boolean {
  return APPROVED_WORK_BRANCH_KINDS.has(classifyBranch(branch));
}

export function planShipBranch(snap: BranchSnapshot): ShipBranchAction {
  const kind = classifyBranch(snap.branch);
  if (kind === "integration") {
    return {
      action: "skip",
      reason: "integration branch is not a Ship work branch",
      explicitResult: `${snap.repo} ${snap.branch}: skipped (integration)`,
    };
  }
  if (kind === "unsupported" || !APPROVED_WORK_BRANCH_KINDS.has(kind)) {
    return {
      action: "skip",
      reason: "unsupported branch kind (not on IDE allowlist)",
      explicitResult: `${snap.repo} ${snap.branch}: skipped (unsupported kind)`,
    };
  }
  if (snap.dirty && snap.activelyOwned) {
    return {
      action: "skip",
      reason: "dirty actively owned worktree preserved",
      explicitResult: `${snap.repo} ${snap.branch}: skipped (dirty owned)`,
    };
  }
  if (!snap.hasLocalChanges && !snap.hasUnpushedCommits) {
    return {
      action: "skip",
      reason: "nothing to checkpoint",
      explicitResult: `${snap.repo} ${snap.branch}: skipped (no work)`,
    };
  }
  return {
    action: "checkpoint",
    steps: ["commit_if_needed", "push"],
    allowPr: false,
    allowBugbot: false,
  };
}

export function planPullBranch(snap: BranchSnapshot): PullBranchAction {
  const kind = classifyBranch(snap.branch);
  if (kind === "integration") {
    return {
      action: "skip",
      reason: "integration branch is not a Pull work branch",
      explicitResult: `${snap.repo} ${snap.branch}: skipped (integration)`,
    };
  }
  if (kind === "unsupported" || !APPROVED_WORK_BRANCH_KINDS.has(kind)) {
    return {
      action: "skip",
      reason: "unsupported branch kind (not on IDE allowlist)",
      explicitResult: `${snap.repo} ${snap.branch}: skipped (unsupported kind)`,
    };
  }
  if (snap.dirty) {
    return {
      action: "skip",
      reason: "dirty worktree preserved",
      explicitResult: `${snap.repo} ${snap.branch}: skipped (dirty)`,
    };
  }
  if (snap.activelyOwned) {
    return {
      action: "skip",
      reason: "actively owned worktree preserved",
      explicitResult: `${snap.repo} ${snap.branch}: skipped (actively owned)`,
    };
  }
  if (snap.frozenReviewedSha && snap.tipSha === snap.frozenReviewedSha) {
    return {
      action: "skip",
      reason: "frozen/reviewed tip SHA",
      explicitResult: `${snap.repo} ${snap.branch}: skipped (frozen tip ${snap.tipSha.slice(0, 12)})`,
    };
  }
  return { action: "update", method: "merge_origin_development", allowForcePush: false };
}

/**
 * Deterministic wave result:
 * - Clear only if at least one branch was checkpointed/updated and none blocked.
 * - Issues if any blocked, or if zero successful actions (all skipped / empty).
 */
export function resolveWaveOutcome(results: BranchWaveResult[]): WaveOutcome {
  if (results.some((r) => r.status === "blocked")) {
    return { result: "Issues", reason: "blocked_or_failed" };
  }
  const succeeded = results.filter((r) => r.status === "checkpointed" || r.status === "updated");
  if (succeeded.length > 0) {
    return { result: "Clear", reason: "work_succeeded" };
  }
  return {
    result: "Issues",
    reason: "all_skipped_or_empty",
    note: "no actionable work completed",
  };
}

export function validateShipPromptContract(prompt: string): string[] {
  const errors: string[] = [];
  const lower = prompt.toLowerCase();
  if (/open or update a pr|open a pr targeting/.test(lower)) {
    errors.push("must not instruct opening/updating PRs");
  }
  if (!/commit/.test(lower) || !/push/.test(lower)) {
    errors.push("must commit and push checkpoints");
  }
  if (!/do not request bugbot|no bugbot/.test(lower)) {
    errors.push("must forbid Bugbot requests");
  }
  if (!/do not (create|open|update).*pr|no pr|checkpoint/.test(lower)) {
    errors.push("must state checkpoint-only / no PR");
  }
  if (!/review ready/.test(lower)) {
    errors.push("must keep Review Ready separate from ordinary Ship");
  }
  if (!/issue\/|issue\/\*/.test(lower)) {
    errors.push("must mention IDE work-branch allowlist (issue/*)");
  }
  return errors;
}

export function validatePullPromptContract(prompt: string): string[] {
  const errors: string[] = [];
  const lower = prompt.toLowerCase();
  if (!/skip/.test(lower) || !/(frozen|reviewed)/.test(lower)) {
    errors.push("must skip frozen/reviewed tips");
  }
  if (!/never force-push|do not force-push/.test(lower)) {
    errors.push("must forbid force-push");
  }
  if (!/dirty/.test(lower)) {
    errors.push("must protect dirty worktrees");
  }
  if (!/actively owned|active owner/.test(lower)) {
    errors.push("must protect actively owned worktrees");
  }
  if (!/explicit/.test(lower)) {
    errors.push("must require explicit per-branch results");
  }
  return errors;
}

export function canFinishShipPullSuccessfully(gate: {
  childOutcomeValidated: boolean;
  statusCasDone: boolean;
  emailAttempted: boolean;
  finalAssistantPayload: string | null;
}): boolean {
  if (!gate.childOutcomeValidated) {
    return false;
  }
  if (!gate.statusCasDone) {
    return false;
  }
  if (!gate.emailAttempted) {
    return false;
  }
  const payload = gate.finalAssistantPayload?.trim() ?? "";
  return /^((Ship|Pull) \d{2}): (Clear|Issues)$/.test(payload);
}

/** Ship/Pull isolated cron tool allowlist after ACP sessions_wait landed. */
export const SHIP_PULL_REQUIRED_TOOLS: readonly string[] = [
  "sessions_spawn",
  "sessions_wait",
  "apply_patch",
  "read",
  "write",
  "edit",
  "exec",
] as const;

/**
 * The sole Ship/Pull implementation runtime. It is deliberately explicit rather
 * than inheriting `acp.defaultAgent`: an unavailable Codex ACP/Terra route is an
 * Issues outcome, never a Cursor/Grok or self-write fallback.
 */
export const SHIP_PULL_ACP_SPAWN_CONTRACT = {
  runtime: "acp",
  agentId: "codex",
  model: "openai/gpt-5.6-terra",
  thinking: "medium",
} as const;

export type ShipPullAcpSpawnContract = typeof SHIP_PULL_ACP_SPAWN_CONTRACT;

export function shipPullForbidsSessionsYield(procedureText: string): boolean {
  const normalized = procedureText.toLowerCase().replace(/`/g, "");
  return (
    /never call sessions_yield/.test(normalized) ||
    /do not call sessions_yield/.test(normalized) ||
    /do not use sessions_yield/.test(normalized) ||
    /sessions_yield.*(forbidden|banned|prohibited|do not use|never)/.test(normalized)
  );
}

/** Procedure must park on sessions_wait (registry persist + deadline), not poll/yield. */
export function shipPullRequiresSessionsWait(procedureText: string): boolean {
  const normalized = procedureText.toLowerCase().replace(/`/g, "");
  return (
    /sessions_wait/.test(normalized) &&
    (/registry persist|onsubagentregistrypersisted|no periodic poll|do not poll/.test(normalized) ||
      /park/.test(normalized))
  );
}

export function shipPullAllowlistIncludesSessionsWait(allowlist: readonly string[]): boolean {
  return allowlist.includes("sessions_wait") && !allowlist.includes("sessions_yield");
}

/** Procedure must use the exact Principal-approved Codex Terra Medium contract. */
export function shipPullRequiresCodexTerraSpawnContract(procedureText: string): boolean {
  const normalized = procedureText.toLowerCase().replace(/`/g, "");
  return (
    normalized.includes('runtime: "acp"') &&
    normalized.includes('agentid: "codex"') &&
    normalized.includes('model: "openai/gpt-5.6-terra"') &&
    normalized.includes('thinking: "medium"')
  );
}

/** Ship/Pull cannot silently re-route work to Cursor/Grok if Codex ACP is unavailable. */
export function shipPullForbidsCursorFallback(procedureText: string): boolean {
  const normalized = procedureText.toLowerCase().replace(/`/g, "");
  return (
    /no cursor\/grok fallback/.test(normalized) &&
    /do not spawn cursor/.test(normalized) &&
    /do not self-write/.test(normalized) &&
    !/agentid:\s*"cursor"/.test(normalized) &&
    !/model:\s*"grok-4\.5/.test(normalized)
  );
}

/**
 * HEARTBEAT and pipeline-status are operational dispatch authorities too: keep
 * their abbreviated contract equally fail-closed, while permitting Cursor only
 * when it is named as a forbidden fallback.
 */
export function shipPullDocumentsCodexOnlyAcpContract(documentText: string): boolean {
  const normalized = documentText.toLowerCase().replace(/`/g, "");
  const hasSpawnField = (name: string, value: string) =>
    new RegExp(`${name}\\s*(?::|=)\\s*["']?${value}`).test(normalized);
  return (
    /sessions_spawn/.test(normalized) &&
    hasSpawnField("runtime", "acp") &&
    hasSpawnField("agentid", "codex") &&
    hasSpawnField("model", "openai/gpt-5\\.6-terra") &&
    hasSpawnField("thinking", "medium") &&
    /stage_skipped_acp/.test(normalized) &&
    /wave:\s*issues/.test(normalized) &&
    /stop/.test(normalized) &&
    /cursor\/grok/.test(normalized) &&
    /cursor automation\/webhook/.test(normalized) &&
    /internal subagents/.test(normalized) &&
    /direct\/self edits/.test(normalized) &&
    /alternate automation/.test(normalized) &&
    /sessions_wait.*required/.test(normalized) &&
    /sessions_yield.*forbidden/.test(normalized) &&
    !/agentid\s*(?::|=)\s*["']?cursor/.test(normalized) &&
    !/model\s*(?::|=)\s*["']?grok-4\.5/.test(normalized)
  );
}

export function shipPullRespectsIdeAuthority(procedureText: string): boolean {
  const lower = procedureText.toLowerCase();
  if (/this file wins/.test(lower)) {
    return false;
  }
  // Flag positive override claims; allow "must not invent … that replaces IDE".
  if (/\blisa\b.{0,40}\boverrides?\b.{0,40}\bide development\b/.test(lower)) {
    return false;
  }
  if (/\bwhere this procedure differs\b/.test(lower) && /\bwins\b/.test(lower)) {
    return false;
  }
  return (
    /ide development/.test(lower) &&
    (/source of truth|sot|gitops contract|issue #23|issue 23/.test(lower) ||
      /faithfully implement|consumer/.test(lower))
  );
}
