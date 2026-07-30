/**
 * Bounded offline recovery for missed Ship/Pull windows and unresolved GitHub failures.
 */

export type WaveWindow = {
  wave: "Ship 05" | "Pull 07" | "Ship 16" | "Pull 18";
  scheduledAt: string; // ISO Asia/Taipei wall time of nominal fire
  cycleDate: string;
};

export type OfflineReconcileInput = {
  nowIso: string;
  missedWindows: WaveWindow[];
  unresolvedFailureIds: string[];
  lastReconcileAt: string | null;
};

export type OfflineReconcilePlan = {
  /** At most one reconcile pass per online return. */
  runOnce: true;
  windowsToConsider: WaveWindow[];
  obsoleteSkipped: WaveWindow[];
  failureIdsToReconcile: string[];
  allowContinuousPolling: false;
  allowBlindReplay: false;
};

const WAVE_RANK: Record<WaveWindow["wave"], number> = {
  "Ship 16": 1,
  "Pull 18": 2,
  "Ship 05": 3,
  "Pull 07": 4,
};

/**
 * When Lisa returns online, reconcile missed windows once.
 * Keep only the latest incomplete cycle's unfinished waves; drop obsolete older cycles.
 */
export function planOfflineReconcile(input: OfflineReconcileInput): OfflineReconcilePlan {
  const byCycle = new Map<string, WaveWindow[]>();
  for (const w of input.missedWindows) {
    const list = byCycle.get(w.cycleDate) ?? [];
    list.push(w);
    byCycle.set(w.cycleDate, list);
  }
  const cycles = [...byCycle.keys()].sort();
  const latestCycle = cycles.at(-1) ?? null;
  const windowsToConsider = latestCycle
    ? (byCycle.get(latestCycle) ?? []).slice().sort((a, b) => WAVE_RANK[a.wave] - WAVE_RANK[b.wave])
    : [];
  const obsoleteSkipped = input.missedWindows.filter((w) => w.cycleDate !== latestCycle);

  // Failures: unique ids, bounded one-shot list (no loops).
  const failureIdsToReconcile = [...new Set(input.unresolvedFailureIds)].sort();

  return {
    runOnce: true,
    windowsToConsider,
    obsoleteSkipped,
    failureIdsToReconcile,
    allowContinuousPolling: false,
    allowBlindReplay: false,
  };
}

export function isOfflineReconcileBounded(plan: OfflineReconcilePlan): boolean {
  return (
    plan.runOnce === true &&
    plan.allowContinuousPolling === false &&
    plan.allowBlindReplay === false &&
    plan.obsoleteSkipped.every((w) => !plan.windowsToConsider.includes(w))
  );
}
