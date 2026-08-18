// Sessions compact command tests cover non-zero exits on failure and param forwarding.

import { expectDefined } from "@openclaw/normalization-core";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { sessionsCompactCommand } from "./sessions-compact.js";

const callGatewayCli = vi.hoisted(() => vi.fn());

vi.mock("../cli/gateway-cli/call.js", () => ({ callGatewayCli }));

function createRuntime() {
  return {
    log: vi.fn(),
    error: vi.fn(),
    exit: vi.fn(),
    writeStdout: vi.fn(),
    writeJson: vi.fn(),
  };
}

function joinedArgs(mock: { mock: { calls: unknown[][] } }): string {
  return mock.mock.calls.map((call) => String(call[0])).join("\n");
}

beforeEach(() => {
  vi.clearAllMocks();
});

describe("sessionsCompactCommand", () => {
  it("prints the token delta and does not exit on a successful compaction", async () => {
    callGatewayCli.mockResolvedValue({
      ok: true,
      key: `ltfx.n.6d9217fe77c7f11d9cc9.v1`,
      compacted: true,
      result: { tokensBefore: 243868, tokensAfter: 34941 },
    });
    const runtime = createRuntime();

    await sessionsCompactCommand({ key: `ltfx.n.6d9217fe77c7f11d9cc9.v1` }, runtime);

    expect(runtime.exit).not.toHaveBeenCalled();
    expect(callGatewayCli.mock.calls[0]?.[1]).toMatchObject({ timeout: null });
    const logged = joinedArgs(runtime.log);
    expect(logged).toContain("243868");
    expect(logged).toContain("34941");
  });

  it("preserves an explicit client timeout override", async () => {
    callGatewayCli.mockResolvedValue({
      ok: true,
      key: `ltfx.n.6d9217fe77c7f11d9cc9.v1`,
      compacted: true,
    });
    const runtime = createRuntime();

    await sessionsCompactCommand({ key: `ltfx.n.6d9217fe77c7f11d9cc9.v1`, timeout: "120000" }, runtime);

    expect(callGatewayCli.mock.calls[0]?.[1]).toMatchObject({ timeout: "120000" });
  });

  it("reports an asynchronously started Codex compaction as pending, not a no-op", async () => {
    callGatewayCli.mockResolvedValue({
      ok: true,
      key: `ltfx.n.6d9217fe77c7f11d9cc9.v1`,
      compacted: false,
      result: {
        tokensBefore: 1200,
        details: { backend: "codex-app-server", signal: "thread/compact/start", pending: true },
      },
    });
    const runtime = createRuntime();

    await sessionsCompactCommand({ key: `ltfx.n.6d9217fe77c7f11d9cc9.v1` }, runtime);

    expect(runtime.exit).not.toHaveBeenCalled();
    const logged = joinedArgs(runtime.log);
    expect(logged).toContain("pending");
    expect(logged).not.toContain("No compaction needed");
  });

  it("reports a terminal Codex compaction as completed", async () => {
    callGatewayCli.mockResolvedValue({
      ok: true,
      key: `ltfx.n.6d9217fe77c7f11d9cc9.v1`,
      compacted: true,
      result: {
        tokensBefore: 1200,
        details: {
          backend: "codex-app-server",
          signal: "thread/compact/start",
          pending: false,
          completed: true,
        },
      },
    });
    const runtime = createRuntime();

    await sessionsCompactCommand({ key: `ltfx.n.6d9217fe77c7f11d9cc9.v1` }, runtime);

    expect(runtime.exit).not.toHaveBeenCalled();
    const logged = joinedArgs(runtime.log);
    expect(logged).toContain("Compacted session");
    expect(logged).not.toContain("pending");
  });

  it("exits non-zero when the gateway reports ok:false (no silent no-op)", async () => {
    callGatewayCli.mockResolvedValue({
      ok: false,
      key: `ltfx.n.6d9217fe77c7f11d9cc9.v1`,
      compacted: false,
      reason: "summarize interrupted",
    });
    const runtime = createRuntime();

    await sessionsCompactCommand({ key: `ltfx.n.6d9217fe77c7f11d9cc9.v1` }, runtime);

    expect(runtime.exit).toHaveBeenCalledWith(1);
    expect(joinedArgs(runtime.error)).toContain("summarize interrupted");
  });

  it("exits non-zero when the gateway response omits explicit success", async () => {
    callGatewayCli.mockResolvedValue({ key: `ltfx.n.6d9217fe77c7f11d9cc9.v1`, compacted: false });
    const runtime = createRuntime();

    await sessionsCompactCommand({ key: `ltfx.n.6d9217fe77c7f11d9cc9.v1` }, runtime);

    expect(runtime.exit).toHaveBeenCalledWith(1);
    expect(joinedArgs(runtime.error)).toContain("Compaction failed");
  });

  it("exits non-zero and surfaces the error when the RPC throws", async () => {
    callGatewayCli.mockRejectedValue(new Error("gateway unreachable"));
    const runtime = createRuntime();

    await sessionsCompactCommand({ key: `ltfx.n.6d9217fe77c7f11d9cc9.v1` }, runtime);

    expect(runtime.exit).toHaveBeenCalledWith(1);
    expect(joinedArgs(runtime.error)).toContain("gateway unreachable");
  });

  it("emits the payload and still exits non-zero in JSON mode when ok:false", async () => {
    const payload = {
      ok: false,
      key: `ltfx.n.6d9217fe77c7f11d9cc9.v1`,
      compacted: false,
      reason: "summarize interrupted",
    };
    callGatewayCli.mockResolvedValue(payload);
    const runtime = createRuntime();

    await sessionsCompactCommand({ key: `ltfx.n.6d9217fe77c7f11d9cc9.v1`, json: true }, runtime);

    expect(runtime.writeJson).toHaveBeenCalledTimes(1);
    expect(
      expectDefined(
        runtime.writeJson.mock.calls[0],
        "runtime.writeJson.mock.calls[0] test invariant",
      )[0],
    ).toEqual(payload);
    expect(runtime.exit).toHaveBeenCalledWith(1);
  });

  it("forwards agentId and maxLines to the RPC params", async () => {
    callGatewayCli.mockResolvedValue({
      ok: true,
      key: `ltfx.n.8410a9442e3fb5c8ccf3.v1`,
      compacted: true,
      kept: 200,
    });
    const runtime = createRuntime();

    await sessionsCompactCommand({ key: `ltfx.n.8410a9442e3fb5c8ccf3.v1`, agent: "work", maxLines: 200 }, runtime);

    expect(callGatewayCli).toHaveBeenCalledTimes(1);
    const [method, , params] = expectDefined(
      callGatewayCli.mock.calls[0],
      "callGatewayCli.mock.calls[0] test invariant",
    );
    expect(method).toBe("sessions.compact");
    expect(params).toEqual({ key: `ltfx.n.8410a9442e3fb5c8ccf3.v1`, agentId: "work", maxLines: 200 });
  });
});
