import { Type } from "typebox";
import { SUBAGENT_ENDED_REASON_KILLED } from "../subagent-lifecycle-events.js";
import { onSubagentRegistryPersisted } from "../subagent-registry-state.js";
import { getSubagentRunsByRunIds, observeSubagentRequesterWait } from "../subagent-registry.js";
import type { SubagentRunRecord } from "../subagent-registry.types.js";
import type { AnyAgentTool } from "./common.js";
import { jsonResult, ToolInputError } from "./common.js";

const MAX_WAIT_IDS = 1_000;
/** Match swarm wait ceiling so ACP/cron parents can park for long child runs. */
const WAIT_TIMEOUT_SECONDS_MAX = 600;

const SessionsWaitToolSchema = Type.Object({
  ids: Type.Array(Type.String({ minLength: 1 }), { minItems: 1, maxItems: MAX_WAIT_IDS }),
  timeoutSeconds: Type.Optional(Type.Number({ minimum: 0 })),
});

type WaitError = { runId: string; error: "not_found" | "not_owner" | "collector_only" };
type WaitTarget = { runId: string; entry: SubagentRunRecord };
type WaitStatus = "ok" | "error" | "timeout" | "cancelled" | "unknown";

export type SessionWaitCompletionResult = {
  runId: string;
  status: WaitStatus;
  result: string;
  sessionKey: string;
  label?: string;
  endedAt?: number;
  endedReason?: string;
  announceMissing?: true;
  firstObservation?: boolean;
  error?: string;
};

function ownsDescendantRun(
  entry: SubagentRunRecord,
  currentSessionKeys: ReadonlySet<string>,
): boolean {
  const authorized = new Set<string>();
  const add = (value: string | undefined) => {
    const trimmed = value?.trim();
    if (trimmed) {
      authorized.add(trimmed);
    }
  };
  add(entry.requesterSessionKey);
  add(entry.controllerSessionKey);
  add(entry.swarmRequesterSessionKey);
  for (const key of entry.swarmWaitOwnerSessionKeys ?? []) {
    add(key);
  }
  if (authorized.size === 0) {
    return false;
  }
  for (const key of currentSessionKeys) {
    if (authorized.has(key)) {
      return true;
    }
  }
  return false;
}

function resolveWaitStatus(entry: SubagentRunRecord): WaitStatus {
  if (
    entry.endedReason === SUBAGENT_ENDED_REASON_KILLED ||
    entry.suppressAnnounceReason === "killed"
  ) {
    return "cancelled";
  }
  const outcomeStatus = entry.outcome?.status ?? entry.execution?.outcome?.status;
  switch (outcomeStatus) {
    case "ok":
    case "error":
    case "timeout":
      return outcomeStatus;
    case "unknown":
      return "unknown";
    default:
      return "unknown";
  }
}

function resolveResultText(entry: SubagentRunRecord): string {
  const primary = entry.completion?.resultText;
  if (typeof primary === "string" && primary.trim()) {
    return primary.trim();
  }
  const fallback = entry.completion?.fallbackResultText;
  if (typeof fallback === "string" && fallback.trim()) {
    return fallback.trim();
  }
  return "";
}

function isAnnounceMissing(entry: SubagentRunRecord, resultText: string): boolean {
  if (entry.expectsCompletionMessage !== true) {
    return false;
  }
  if (resultText) {
    return false;
  }
  const deliveryStatus = entry.delivery?.status;
  return (
    deliveryStatus === "failed" ||
    deliveryStatus === "discarded" ||
    deliveryStatus === "not_required" ||
    deliveryStatus === undefined ||
    entry.suppressCompletionDelivery === true
  );
}

function completionResult(
  entry: SubagentRunRecord,
  requestedRunId: string,
): SessionWaitCompletionResult | undefined {
  if (typeof entry.endedAt !== "number") {
    return undefined;
  }
  const result = resolveResultText(entry);
  const status = resolveWaitStatus(entry);
  const outcomeError = entry.outcome?.error ?? entry.execution?.outcome?.error;
  return {
    runId: requestedRunId,
    status,
    result,
    sessionKey: entry.childSessionKey,
    ...(entry.label ? { label: entry.label } : {}),
    endedAt: entry.endedAt,
    ...(entry.endedReason ? { endedReason: entry.endedReason } : {}),
    ...(isAnnounceMissing(entry, result) ? { announceMissing: true as const } : {}),
    ...(typeof outcomeError === "string" && outcomeError.trim()
      ? { error: outcomeError.trim() }
      : {}),
  };
}

function resolveWaitTargets(ids: readonly string[], currentSessionKeys: ReadonlySet<string>) {
  const targets: WaitTarget[] = [];
  const errors: WaitError[] = [];
  const snapshot = getSubagentRunsByRunIds(ids);
  for (const runId of ids) {
    const entry = snapshot.entries.get(runId);
    if (!entry) {
      errors.push({ runId, error: "not_found" });
      continue;
    }
    if (entry.collect === true) {
      // Collectors remain on agents_wait; keep the public contracts separate.
      errors.push({ runId, error: "collector_only" });
      continue;
    }
    if (!ownsDescendantRun(entry, currentSessionKeys)) {
      errors.push({ runId, error: "not_owner" });
      continue;
    }
    targets.push({ runId, entry });
  }
  return { targets, errors };
}

function readResolvedWaitState(targets: readonly WaitTarget[], errors: readonly WaitError[]) {
  const completed: Array<{
    result: SessionWaitCompletionResult;
    completedAt: number;
    inputIndex: number;
  }> = [];
  const pending: string[] = [];
  for (const [inputIndex, { runId, entry }] of targets.entries()) {
    const result = completionResult(entry, runId);
    if (result) {
      completed.push({
        result,
        completedAt: entry.completion?.capturedAt ?? entry.endedAt ?? Number.MAX_SAFE_INTEGER,
        inputIndex,
      });
    } else {
      pending.push(runId);
    }
  }
  completed.sort(
    (left, right) => left.completedAt - right.completedAt || left.inputIndex - right.inputIndex,
  );
  return {
    completed: completed.map((entry) => entry.result),
    pending,
    ...(errors.length > 0 ? { errors } : {}),
  };
}

function readWaitState(ids: readonly string[], currentSessionKeys: ReadonlySet<string>) {
  const resolved = resolveWaitTargets(ids, currentSessionKeys);
  return readResolvedWaitState(resolved.targets, resolved.errors);
}

function attachObservationReceipts(params: {
  completed: SessionWaitCompletionResult[];
  observerSessionKeys: ReadonlySet<string>;
}): SessionWaitCompletionResult[] {
  const observerSessionKey = [...params.observerSessionKeys][0];
  if (!observerSessionKey) {
    return params.completed;
  }
  return params.completed.map((completion) => {
    const observation = observeSubagentRequesterWait({
      runId: completion.runId,
      observerSessionKey,
      status: completion.status,
    });
    return {
      ...completion,
      firstObservation: observation.firstObservation,
    };
  });
}

/**
 * Park until owned non-collector descendants reach a registry terminal row.
 * Wakes from `onSubagentRegistryPersisted` plus a single deadline timer — no periodic poll.
 */
export async function waitForSessionDescendants(params: {
  ids: readonly string[];
  currentSessionKeys: ReadonlySet<string>;
  timeoutMs: number;
  signal?: AbortSignal;
}): Promise<{
  completed: SessionWaitCompletionResult[];
  pending: string[];
  errors?: readonly WaitError[];
  timedOut?: true;
}> {
  const deadlineAtMs = Date.now() + Math.max(0, params.timeoutMs);

  const readObservedState = () => {
    const state = readWaitState(params.ids, params.currentSessionKeys);
    if (state.completed.length === 0) {
      return state;
    }
    return {
      ...state,
      completed: attachObservationReceipts({
        completed: state.completed,
        observerSessionKeys: params.currentSessionKeys,
      }),
    };
  };

  const immediate = readObservedState();
  if (immediate.completed.length > 0 || immediate.pending.length === 0) {
    return immediate;
  }
  if (params.signal?.aborted) {
    throw new ToolInputError("sessions_wait aborted.");
  }
  if (params.timeoutMs <= 0 || Date.now() >= deadlineAtMs) {
    return { ...immediate, timedOut: true };
  }

  return await new Promise((resolve, reject) => {
    let settled = false;
    const finish = (
      result: (ReturnType<typeof readObservedState> & { timedOut?: true }) | Error,
    ) => {
      if (settled) {
        return;
      }
      settled = true;
      unsubscribe();
      clearTimeout(deadlineTimer);
      params.signal?.removeEventListener("abort", onAbort);
      if (result instanceof Error) {
        reject(result);
      } else {
        resolve(result);
      }
    };
    const check = () => {
      try {
        const state = readObservedState();
        if (state.completed.length > 0 || state.pending.length === 0) {
          finish(state);
        }
      } catch (error) {
        finish(error instanceof Error ? error : new Error(String(error)));
      }
    };
    const onAbort = () => finish(new ToolInputError("sessions_wait aborted."));
    const onDeadline = () => {
      const state = readObservedState();
      if (state.completed.length > 0 || state.pending.length === 0) {
        finish(state);
        return;
      }
      finish({ ...state, timedOut: true });
    };
    const unsubscribe = onSubagentRegistryPersisted(check);
    const deadlineTimer = setTimeout(onDeadline, Math.max(0, deadlineAtMs - Date.now()));
    params.signal?.addEventListener("abort", onAbort, { once: true });
    if (params.signal?.aborted) {
      onAbort();
    } else {
      check();
    }
  });
}

export function createSessionsWaitTool(opts: {
  agentSessionKey?: string;
  runSessionKey?: string;
}): AnyAgentTool {
  return {
    label: "Wait for Sessions",
    name: "sessions_wait",
    displaySummary: "Wait for owned ACP/subagent children.",
    description:
      "Park until owned non-collector child runs reach a terminal registry outcome (success, error, timeout, or cancellation). Uses registry persist wake events — do not poll sessions_list/history or call sessions_yield. Collector children remain on agents_wait.",
    parameters: SessionsWaitToolSchema,
    execute: async (_toolCallId, args, signal) => {
      const params = args as { ids: string[]; timeoutSeconds?: number };
      if (params.ids.length > MAX_WAIT_IDS) {
        throw new ToolInputError(`sessions_wait supports at most ${MAX_WAIT_IDS} ids.`);
      }
      const ids = [...new Set(params.ids.map((id) => id.trim()).filter(Boolean))];
      const currentSessionKeys = new Set(
        [opts.runSessionKey, opts.agentSessionKey].filter((key): key is string =>
          Boolean(key?.trim()),
        ),
      );
      if (currentSessionKeys.size === 0) {
        throw new ToolInputError("sessions_wait requires an active session key.");
      }
      const requestedTimeout =
        typeof params.timeoutSeconds === "number" && Number.isFinite(params.timeoutSeconds)
          ? params.timeoutSeconds
          : 30;
      const timeoutSeconds = Math.min(Math.max(0, requestedTimeout), WAIT_TIMEOUT_SECONDS_MAX);
      const result = await waitForSessionDescendants({
        ids,
        currentSessionKeys,
        timeoutMs: timeoutSeconds * 1_000,
        signal,
      });
      return jsonResult(result);
    },
  };
}

const testing = {
  ownsDescendantRun,
  resolveWaitStatus,
  resolveWaitTargets,
  readWaitState,
  waitForSessionDescendants,
  WAIT_TIMEOUT_SECONDS_MAX,
};

if (process.env.VITEST || process.env.NODE_ENV === "test") {
  (globalThis as Record<PropertyKey, unknown>)[Symbol.for("openclaw.sessionsWaitToolTestApi")] = {
    testing,
  };
}
