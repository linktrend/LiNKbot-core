import { beforeEach, describe, expect, it, vi } from "vitest";
import type { SubagentRunRecord } from "../subagent-registry.types.js";

const records = new Map<string, SubagentRunRecord>();
const registryEvents = vi.hoisted(() => ({ listeners: new Set<() => void>() }));
const observations = vi.hoisted(() => ({
  calls: [] as Array<{ runId: string; observerSessionKey: string; status: string }>,
  byRunId: new Map<
    string,
    { firstObservedAt: number; observerSessionKey: string; status: string }
  >(),
}));

vi.mock("../subagent-registry.js", () => ({
  getSubagentRunsByRunIds: (runIds: readonly string[]) => ({
    entries: new Map(
      runIds.flatMap((runId) => {
        const entry = records.get(runId);
        return entry ? [[runId, entry] as const] : [];
      }),
    ),
  }),
  observeSubagentRequesterWait: (params: {
    runId: string;
    observerSessionKey: string;
    status: string;
  }) => {
    observations.calls.push(params);
    const existing = observations.byRunId.get(params.runId);
    if (existing) {
      return { firstObservation: false, observedAt: existing.firstObservedAt };
    }
    const firstObservedAt = Date.now();
    observations.byRunId.set(params.runId, {
      firstObservedAt,
      observerSessionKey: params.observerSessionKey,
      status: params.status,
    });
    return { firstObservation: true, observedAt: firstObservedAt };
  },
}));

vi.mock("../subagent-registry-state.js", () => ({
  onSubagentRegistryPersisted: (listener: () => void) => {
    registryEvents.listeners.add(listener);
    return () => registryEvents.listeners.delete(listener);
  },
}));

import { createSessionsWaitTool, waitForSessionDescendants } from "./sessions-wait-tool.js";

function acpRun(
  runId: string,
  requesterSessionKey: string,
  overrides?: Partial<SubagentRunRecord>,
): SubagentRunRecord {
  return {
    runId,
    childSessionKey: `agent:worker:acp:${runId}`,
    controllerSessionKey: requesterSessionKey,
    requesterSessionKey,
    requesterDisplayKey: requesterSessionKey,
    task: runId,
    cleanup: "keep",
    createdAt: Date.now(),
    spawnMode: "run",
    expectsCompletionMessage: true,
    ...overrides,
  };
}

describe("sessions_wait", () => {
  beforeEach(() => {
    records.clear();
    registryEvents.listeners.clear();
    observations.calls.length = 0;
    observations.byRunId.clear();
  });

  it("settles a parked ACP wait from a registry write event without polling", async () => {
    const entry = acpRun("acp-ok", "agent:lisa:cron:job:run:1");
    records.set(entry.runId, entry);
    const completion = waitForSessionDescendants({
      ids: [entry.runId],
      currentSessionKeys: new Set(["agent:lisa:cron:job:run:1"]),
      timeoutMs: 5_000,
    });

    entry.endedAt = Date.now();
    entry.outcome = { status: "ok", endedAt: entry.endedAt };
    entry.completion = { required: true, resultText: "WAVE: Clear", capturedAt: entry.endedAt };
    for (const listener of registryEvents.listeners) {
      listener();
    }

    await expect(completion).resolves.toMatchObject({
      completed: [
        {
          runId: "acp-ok",
          status: "ok",
          result: "WAVE: Clear",
          firstObservation: true,
        },
      ],
      pending: [],
    });
    expect(registryEvents.listeners.size).toBe(0);
  });

  it("maps failure, timeout, cancellation, and missing announcement deterministically", async () => {
    const parent = "agent:main:cron:ship:run:abc";
    const failed = acpRun("fail", parent, {
      endedAt: 10,
      outcome: { status: "error", error: "child boom", endedAt: 10 },
      completion: { required: true, resultText: "", capturedAt: 10 },
      delivery: { status: "failed", lastError: "announce failed" },
    });
    const timedOut = acpRun("timeout", parent, {
      endedAt: 11,
      outcome: { status: "timeout", endedAt: 11 },
      completion: { required: true, capturedAt: 11 },
      delivery: { status: "failed" },
    });
    const cancelled = acpRun("cancel", parent, {
      endedAt: 12,
      endedReason: "subagent-killed",
      suppressAnnounceReason: "killed",
      outcome: { status: "error", error: "killed", endedAt: 12 },
      completion: { required: false, capturedAt: 12 },
    });
    const missingAnnounce = acpRun("missing", parent, {
      endedAt: 13,
      outcome: { status: "ok", endedAt: 13 },
      completion: { required: true, capturedAt: 13 },
      expectsCompletionMessage: true,
      delivery: { status: "failed" },
    });
    for (const entry of [failed, timedOut, cancelled, missingAnnounce]) {
      records.set(entry.runId, entry);
    }
    const tool = createSessionsWaitTool({
      agentSessionKey: parent,
      runSessionKey: parent,
    });

    const result = await tool.execute("call", {
      ids: ["fail", "timeout", "cancel", "missing"],
      timeoutSeconds: 0,
    });

    expect(result.details).toMatchObject({
      completed: [
        { runId: "fail", status: "error", error: "child boom", announceMissing: true },
        { runId: "timeout", status: "timeout", announceMissing: true },
        { runId: "cancel", status: "cancelled" },
        { runId: "missing", status: "ok", announceMissing: true, result: "" },
      ],
      pending: [],
    });
  });

  it("times out with pending ids when the deadline fires before a terminal registry row", async () => {
    const parent = "agent:main:cron:pull:run:1";
    records.set("pending", acpRun("pending", parent));
    const tool = createSessionsWaitTool({ agentSessionKey: parent });

    const result = await tool.execute("call", { ids: ["pending"], timeoutSeconds: 0 });
    expect(result.details).toMatchObject({
      completed: [],
      pending: ["pending"],
      timedOut: true,
    });
  });

  it("rejects collectors, foreign owners, and missing ids", async () => {
    const parent = "agent:main:main";
    records.set(
      "collector",
      acpRun("collector", parent, {
        collect: true,
        swarmRequesterSessionKey: parent,
        endedAt: 1,
        collectorCompletion: { status: "done" },
      }),
    );
    records.set("foreign", acpRun("foreign", "agent:other:main", { endedAt: 1 }));
    const tool = createSessionsWaitTool({ agentSessionKey: parent });

    const result = await tool.execute("call", {
      ids: ["collector", "foreign", "missing"],
      timeoutSeconds: 0,
    });
    expect(result.details).toMatchObject({
      completed: [],
      pending: [],
      errors: [
        { runId: "collector", error: "collector_only" },
        { runId: "foreign", error: "not_owner" },
        { runId: "missing", error: "not_found" },
      ],
    });
  });

  it("marks restart/re-entry observations exactly once", async () => {
    const parent = "agent:lisa:cron:ship:run:reentry";
    const entry = acpRun("once", parent, {
      endedAt: 100,
      outcome: { status: "ok", endedAt: 100 },
      completion: { required: true, resultText: "WAVE: Clear", capturedAt: 100 },
    });
    records.set(entry.runId, entry);
    const tool = createSessionsWaitTool({ agentSessionKey: parent });

    const first = await tool.execute("call", { ids: ["once"], timeoutSeconds: 1 });
    const second = await tool.execute("call", { ids: ["once"], timeoutSeconds: 1 });

    expect(first.details).toMatchObject({
      completed: [{ runId: "once", firstObservation: true, result: "WAVE: Clear" }],
    });
    expect(second.details).toMatchObject({
      completed: [{ runId: "once", firstObservation: false, result: "WAVE: Clear" }],
    });
    expect(observations.calls).toHaveLength(2);
  });

  it("runs isolated-cron post-processing exactly once after ACP completion", async () => {
    const cronSessionKey = "agent:lisa:cron:ship05:run:proof";
    const entry = acpRun("ship-child", cronSessionKey);
    records.set(entry.runId, entry);
    let postProcessCount = 0;
    const postProcess = (payload: {
      status: string;
      result: string;
      firstObservation?: boolean;
    }) => {
      if (payload.firstObservation !== true) {
        return;
      }
      postProcessCount += 1;
      // Simulated status CAS + email + final WAVE payload — once only.
      expect(payload.result).toBe("WAVE: Clear");
    };

    const waitPromise = waitForSessionDescendants({
      ids: [entry.runId],
      currentSessionKeys: new Set([cronSessionKey]),
      timeoutMs: 5_000,
    }).then((state) => {
      for (const completed of state.completed) {
        postProcess(completed);
      }
      return state;
    });

    // No sessions_yield: parent remains parked on the wait tool until the child ends.
    entry.endedAt = Date.now();
    entry.outcome = { status: "ok", endedAt: entry.endedAt };
    entry.completion = { required: true, resultText: "WAVE: Clear", capturedAt: entry.endedAt };
    for (const listener of registryEvents.listeners) {
      listener();
    }

    const first = await waitPromise;
    expect(first.timedOut).toBeUndefined();
    expect(postProcessCount).toBe(1);

    // Restart/re-entry: same terminal child, wait again, post-process gated by firstObservation.
    const replay = await waitForSessionDescendants({
      ids: [entry.runId],
      currentSessionKeys: new Set([cronSessionKey]),
      timeoutMs: 1_000,
    });
    for (const completed of replay.completed) {
      postProcess(completed);
    }
    expect(postProcessCount).toBe(1);
    expect(replay.completed[0]?.firstObservation).toBe(false);
  });

  it("does not recommend sessions_yield and forbids polling in the tool contract", () => {
    const tool = createSessionsWaitTool({ agentSessionKey: "agent:main:main" });
    expect(tool.name).toBe("sessions_wait");
    expect(tool.description.toLowerCase()).toContain("do not poll");
    expect(tool.description).toContain("sessions_yield");
    expect(tool.description).toContain("agents_wait");
  });
});
