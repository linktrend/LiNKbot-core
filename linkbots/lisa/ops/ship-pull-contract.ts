/**
 * Ship / Pull branch-policy helpers (checkpoint-only Ship; frozen-tip Pull).
 */

export type BranchKind = "issue" | "cursor" | "dev" | "integration" | "other";

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
  | { action: "skip"; reason: string };

export type PullBranchAction =
  | { action: "update"; method: "merge_origin_development"; allowForcePush: false }
  | { action: "skip"; reason: string; explicitResult: string };

export type BranchWaveResult = {
  repo: string;
  branch: string;
  status: "updated" | "checkpointed" | "skipped" | "blocked";
  detail: string;
};

const INTEGRATION = new Set(["development", "staging", "main"]);

export function classifyBranch(branch: string): BranchKind {
  if (INTEGRATION.has(branch)) return "integration";
  if (branch.startsWith("issue/")) return "issue";
  if (branch.startsWith("cursor/")) return "cursor";
  if (branch.startsWith("dev/")) return "dev";
  return "other";
}

/** Ordinary Ship: commit + push only. Never open/update PRs or request Bugbot. */
export function planShipBranch(snap: BranchSnapshot): ShipBranchAction {
  const kind = classifyBranch(snap.branch);
  if (kind === "integration") {
    return { action: "skip", reason: "integration branch is not a Ship work branch" };
  }
  if (snap.dirty && snap.activelyOwned) {
    return { action: "skip", reason: "dirty actively owned worktree preserved" };
  }
  if (!snap.hasLocalChanges && !snap.hasUnpushedCommits) {
    return { action: "skip", reason: "nothing to checkpoint" };
  }
  return {
    action: "checkpoint",
    steps: ["commit_if_needed", "push"],
    allowPr: false,
    allowBugbot: false,
  };
}

/** Pull updates unfinished work; skips frozen/reviewed exact SHAs and protected dirty trees. */
export function planPullBranch(snap: BranchSnapshot): PullBranchAction {
  const kind = classifyBranch(snap.branch);
  if (kind === "integration") {
    return {
      action: "skip",
      reason: "integration branch is not a Pull work branch",
      explicitResult: `${snap.repo} ${snap.branch}: skipped (integration)`,
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

export function shipPromptForbidsPrAndBugbot(prompt: string): boolean {
  const lower = prompt.toLowerCase();
  const forbidsPr =
    /do not (create|open|update).*pr/.test(lower) ||
    /no pr/.test(lower) ||
    /checkpoint.?only/.test(lower) ||
    /commit and push only/.test(lower);
  const forbidsBugbot = /do not request bugbot/.test(lower) || /no bugbot/.test(lower);
  const doesNotInstructPr =
    !/open or update a pr/.test(lower) && !/open a pr targeting development/.test(lower);
  return forbidsPr && forbidsBugbot && doesNotInstructPr;
}

export function pullPromptSkipsFrozenTips(prompt: string): boolean {
  const lower = prompt.toLowerCase();
  return (
    (lower.includes("frozen") || lower.includes("reviewed")) &&
    lower.includes("skip") &&
    (lower.includes("never force-push") || lower.includes("do not force-push"))
  );
}

/** Stricter pull prompt checks used by tests. */
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
  return errors;
}

export function aggregateWaveLine(results: BranchWaveResult[]): "Clear" | "Issues" {
  if (results.some((r) => r.status === "blocked")) return "Issues";
  if (results.length === 0) return "Clear";
  return "Clear";
}

/**
 * Ship/Pull post-processing gate: final assistant payload + status CAS + email
 * may run only after a validated child ACP outcome.
 */
export type PostProcessGate = {
  childOutcomeValidated: boolean;
  statusCasDone: boolean;
  emailAttempted: boolean;
  finalAssistantPayload: string | null;
};

export function canFinishShipPullSuccessfully(gate: PostProcessGate): boolean {
  if (!gate.childOutcomeValidated) return false;
  if (!gate.statusCasDone) return false;
  if (!gate.emailAttempted) return false;
  const payload = gate.finalAssistantPayload?.trim() ?? "";
  return /^((Ship|Pull) \d{2}): (Clear|Issues)$/.test(payload);
}

/** Isolated cron must not call sessions_yield (terminates/kills the parent turn). */
export function shipPullForbidsSessionsYield(procedureText: string): boolean {
  const normalized = procedureText.toLowerCase().replace(/`/g, "");
  return (
    /never call sessions_yield/.test(normalized) ||
    /do not call sessions_yield/.test(normalized) ||
    /do not use sessions_yield/.test(normalized) ||
    /sessions_yield.*(forbidden|banned|prohibited|do not use|never)/.test(normalized)
  );
}
