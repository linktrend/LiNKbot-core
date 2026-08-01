/**
 * Offline recovery — pure planning helper (no durable one-pass enforcement).
 * Does not own runtime state and never targets live Lisa by default.
 * Durable one-return/one-pass requires an approved existing state owner
 * (IDE/OpenClaw) plus separately approved live rollout — see docs.
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

const DATE_ONLY_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
/** Strict ISO-8601 with timezone offset or Z (no bare local). */
const INSTANT_RE = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d+)?(Z|[+-]\d{2}:\d{2})$/;

/** True calendar date (rejects 2026-02-29 non-leap, month/day overflow). */
export function isValidCalendarDate(date: string): boolean {
  const m = DATE_ONLY_RE.exec(date);
  if (!m) return false;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  if (mo < 1 || mo > 12 || d < 1 || d > 31) return false;
  const dt = new Date(Date.UTC(y, mo - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === mo - 1 && dt.getUTCDate() === d;
}

/** Parse to epoch ms; null if malformed offset/date/time. */
export function parseInstantMs(iso: string): number | null {
  const m = INSTANT_RE.exec(iso);
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  const hh = Number(m[4]);
  const mm = Number(m[5]);
  const ss = Number(m[6]);
  if (!isValidCalendarDate(`${m[1]}-${m[2]}-${m[3]}`)) return null;
  if (hh > 23 || mm > 59 || ss > 59) return null;
  const tz = m[7]!;
  let offsetMin = 0;
  if (tz !== "Z") {
    const sign = tz[0] === "-" ? -1 : 1;
    const oh = Number(tz.slice(1, 3));
    const om = Number(tz.slice(4, 6));
    if (oh > 14 || om > 59) return null;
    offsetMin = sign * (oh * 60 + om);
  }
  const utcMs = Date.UTC(y, mo - 1, d, hh, mm, ss) - offsetMin * 60_000;
  if (!Number.isFinite(utcMs)) return null;
  return utcMs;
}

export function isValidInstant(iso: string): boolean {
  return parseInstantMs(iso) !== null;
}

function isValidWindow(w: WaveWindow, nowMs: number): boolean {
  if (!isValidCalendarDate(w.cycleDate)) return false;
  const scheduledMs = parseInstantMs(w.scheduledAt);
  if (scheduledMs === null) return false;
  // Future scheduled windows relative to now are invalid for missed-wave replay.
  if (scheduledMs > nowMs) return false;
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
  const nowMs = parseInstantMs(input.nowIso);
  if (nowMs === null) {
    return {
      kind: "planning_helper",
      durableOnePassEnforced: false,
      windowsToConsider: [],
      obsoleteSkipped: [],
      invalidSkipped: [...input.missedWindows],
      failureIdsToReconcile: [...new Set(input.unresolvedFailureIds)].sort(),
      allowContinuousPolling: false,
      allowBlindReplay: false,
      notes: [...notes, "nowIso is not a valid instant — all windows treated as invalid."],
    };
  }
  const invalidSkipped = input.missedWindows.filter((w) => !isValidWindow(w, nowMs));
  const valid = input.missedWindows.filter((w) => isValidWindow(w, nowMs));
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
