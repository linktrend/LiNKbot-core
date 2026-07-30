/**
 * Offline recovery — pure planning helper (no durable one-pass enforcement).
 * Does not own runtime state. Durable one-return/one-pass requires an approved
 * existing state owner (IDE/OpenClaw) — see docs.
 */

export type WaveWindow = {
  wave: "Ship 05" | "Pull 07" | "Ship 16" | "Pull 18";
  scheduledAt: string;
  cycleDate: string;
};

export type OfflineReconcilePlanInput = {
  /** Informational only — not used for durable one-pass enforcement. */
  nowIso: string;
  missedWindows: WaveWindow[];
  unresolvedFailureIds: string[];
  /** Informational only — not persisted by this helper. */
  lastReconcileAt: string | null;
};

export type OfflineReconcilePlan = {
  kind: "planning_helper";
  durableOnePassEnforced: false;
  windowsToConsider: WaveWindow[];
  obsoleteSkipped: WaveWindow[];
  invalidSkipped: WaveWindow[];
  failureIdsToReconcile: string[];
  allowContinuousPolling: false;
  allowBlindReplay: false;
  notes: string[];
};

const WAVE_RANK: Record<WaveWindow["wave"], number> = {
  "Ship 16": 1,
  "Pull 18": 2,
  "Ship 05": 3,
  "Pull 07": 4,
};

const ISO_RE = /^\d{4}-\d{2}-\d{2}/;

function isValidWindow(w: WaveWindow, nowIso: string): boolean {
  if (!ISO_RE.test(w.cycleDate) || !ISO_RE.test(w.scheduledAt)) return false;
  // Future scheduled windows relative to now are invalid for missed-wave replay.
  if (w.scheduledAt > nowIso) return false;
  return true;
}

/**
 * Pure planner: latest incomplete cycle only; drop obsolete + invalid/future.
 * Callers must not treat this as a durable one-return latch.
 */
export function planOfflineReconcile(input: OfflineReconcilePlanInput): OfflineReconcilePlan {
  const notes: string[] = [
    "This is a planning helper only. nowIso/lastReconcileAt are not persisted.",
    "Durable one-return/one-pass requires an approved IDE/OpenClaw state owner.",
  ];
  const invalidSkipped = input.missedWindows.filter((w) => !isValidWindow(w, input.nowIso));
  const valid = input.missedWindows.filter((w) => isValidWindow(w, input.nowIso));
  const byCycle = new Map<string, WaveWindow[]>();
  for (const w of valid) {
    const list = byCycle.get(w.cycleDate) ?? [];
    list.push(w);
    byCycle.set(w.cycleDate, list);
  }
  const cycles = [...byCycle.keys()].sort();
  const latestCycle = cycles.at(-1) ?? null;
  const windowsToConsider = latestCycle
    ? (byCycle.get(latestCycle) ?? []).slice().sort((a, b) => WAVE_RANK[a.wave] - WAVE_RANK[b.wave])
    : [];
  const obsoleteSkipped = valid.filter((w) => w.cycleDate !== latestCycle);
  return {
    kind: "planning_helper",
    durableOnePassEnforced: false,
    windowsToConsider,
    obsoleteSkipped,
    invalidSkipped,
    failureIdsToReconcile: [...new Set(input.unresolvedFailureIds)].sort(),
    allowContinuousPolling: false,
    allowBlindReplay: false,
    notes,
  };
}

export function isOfflinePlanHonest(plan: OfflineReconcilePlan): boolean {
  return (
    plan.kind === "planning_helper" &&
    plan.durableOnePassEnforced === false &&
    plan.allowContinuousPolling === false &&
    plan.allowBlindReplay === false
  );
}
