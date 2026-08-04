/**
 * Monotonic pipeline-status compare-and-swap helpers for Lisa Ship/Pull waves.
 * Pure functions — no live filesystem access; never writes `~/.openclaw-lisa`.
 */

export type WaveLabel = "Ship 05" | "Pull 07" | "Ship 16" | "Pull 18";
export type WaveResult = "Clear" | "Issues";

export type PipelineStatusState = {
  cycleDate: string | null;
  lines: Record<string, string>;
  stagingDate: string | null;
  mainReadyDate: string | null;
  mainApproveClaim: string | null;
  mainApproveDecisionDate: string | null;
  rawOther: string[];
};

const WAVE_ORDER: WaveLabel[] = ["Ship 16", "Pull 18", "Ship 05", "Pull 07"];

const WAVE_LINE_RE =
  /^(Ship 05|Pull 07|Ship 16|Pull 18|Staging promote \(Tue\)|Staging promote \(Fri\)|Main ready \(Mon\)): (Clear|Issues)$/;

/** Derive the digest cycle date for a wave from its nominal Asia/Taipei schedule. */
export function expectedCycleDateForWave(
  wave: WaveLabel,
  scheduledOccurrenceIsoDate: string,
): string {
  // Ship 16 / Pull 18 belong to the *next* morning digest cycle.
  if (wave === "Ship 16" || wave === "Pull 18") {
    const d = parseIsoDate(scheduledOccurrenceIsoDate);
    d.setUTCDate(d.getUTCDate() + 1);
    return formatIsoDate(d);
  }
  return scheduledOccurrenceIsoDate;
}

export function parsePipelineStatus(text: string): PipelineStatusState {
  const state: PipelineStatusState = {
    cycleDate: null,
    lines: {},
    stagingDate: null,
    mainReadyDate: null,
    mainApproveClaim: null,
    mainApproveDecisionDate: null,
    rawOther: [],
  };
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trimEnd();
    if (!line.trim()) continue;
    const cycle = /^Cycle date:\s*(\d{4}-\d{2}-\d{2})\s*$/.exec(line);
    if (cycle) {
      state.cycleDate = cycle[1]!;
      continue;
    }
    const staging = /^Staging date:\s*(\d{4}-\d{2}-\d{2})\s*$/.exec(line);
    if (staging) {
      state.stagingDate = staging[1]!;
      continue;
    }
    const mainReady = /^Main ready date:\s*(\d{4}-\d{2}-\d{2})\s*$/.exec(line);
    if (mainReady) {
      state.mainReadyDate = mainReady[1]!;
      continue;
    }
    const claim = /^Main approve claim:\s*(.+)\s*$/.exec(line);
    if (claim) {
      state.mainApproveClaim = claim[1]!.trim();
      continue;
    }
    const decision = /^Main approve decision date:\s*(\d{4}-\d{2}-\d{2})\s*$/.exec(line);
    if (decision) {
      state.mainApproveDecisionDate = decision[1]!;
      continue;
    }
    const wave = WAVE_LINE_RE.exec(line.trim());
    if (wave) {
      state.lines[wave[1]!] = `${wave[1]}: ${wave[2]}`;
      continue;
    }
    state.rawOther.push(line);
  }
  return state;
}

export type CasOutcome =
  | { action: "updated"; nextText: string; wrote: string }
  | { action: "skipped_stale_cycle"; reason: string }
  | { action: "rejected_invalid_result"; reason: string };

/**
 * Apply a wave result under the monotonic cycle-date rule.
 * Never erases a newer cycle with an older expected date.
 */
export function applyWaveCas(params: {
  currentText: string;
  wave: WaveLabel;
  result: WaveResult;
  expectedCycleDate: string;
}): CasOutcome {
  if (params.result !== "Clear" && params.result !== "Issues") {
    return { action: "rejected_invalid_result", reason: "result must be Clear or Issues" };
  }
  const state = parsePipelineStatus(params.currentText);
  const expected = params.expectedCycleDate;
  if (state.cycleDate && compareIsoDate(expected, state.cycleDate) < 0) {
    return {
      action: "skipped_stale_cycle",
      reason: `expected ${expected} is older than stored ${state.cycleDate}`,
    };
  }
  if (!state.cycleDate || compareIsoDate(expected, state.cycleDate) > 0) {
    for (const w of WAVE_ORDER) {
      delete state.lines[w];
    }
    state.cycleDate = expected;
  }
  const wrote = `${params.wave}: ${params.result}`;
  state.lines[params.wave] = wrote;
  return { action: "updated", nextText: serializePipelineStatus(state), wrote };
}

/** Freshness gate for heartbeat/digest: include Ship/Pull only when cycle matches. */
export function selectFreshCheckpointLines(params: {
  text: string;
  reportCycleDate: string;
  stagingCheckpointDate?: string;
  mainCheckpointDate?: string;
}): string[] {
  const state = parsePipelineStatus(params.text);
  const out: string[] = [];
  if (state.cycleDate === params.reportCycleDate) {
    for (const w of WAVE_ORDER) {
      const line = state.lines[w];
      if (line) out.push(line);
    }
  }
  if (params.stagingCheckpointDate && state.stagingDate === params.stagingCheckpointDate) {
    for (const key of Object.keys(state.lines)) {
      if (key.startsWith("Staging promote")) out.push(state.lines[key]!);
    }
  }
  if (params.mainCheckpointDate && state.mainReadyDate === params.mainCheckpointDate) {
    const main = state.lines["Main ready (Mon)"];
    if (main) out.push(main);
  }
  return out;
}

export function serializePipelineStatus(state: PipelineStatusState): string {
  const parts: string[] = [];
  if (state.cycleDate) parts.push(`Cycle date: ${state.cycleDate}`);
  for (const w of WAVE_ORDER) {
    if (state.lines[w]) parts.push(state.lines[w]!);
  }
  if (state.stagingDate) parts.push(`Staging date: ${state.stagingDate}`);
  for (const key of Object.keys(state.lines).sort()) {
    if (key.startsWith("Staging promote")) parts.push(state.lines[key]!);
  }
  if (state.mainReadyDate) parts.push(`Main ready date: ${state.mainReadyDate}`);
  if (state.lines["Main ready (Mon)"]) parts.push(state.lines["Main ready (Mon)"]!);
  if (state.mainApproveClaim) parts.push(`Main approve claim: ${state.mainApproveClaim}`);
  if (state.mainApproveDecisionDate) {
    parts.push(`Main approve decision date: ${state.mainApproveDecisionDate}`);
  }
  for (const other of state.rawOther) parts.push(other);
  return `${parts.join("\n")}\n`;
}

function parseIsoDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y!, m! - 1, d!));
}

function formatIsoDate(d: Date): string {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function compareIsoDate(a: string, b: string): number {
  if (a === b) return 0;
  return a < b ? -1 : 1;
}
