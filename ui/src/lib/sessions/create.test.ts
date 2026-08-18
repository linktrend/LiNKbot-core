import { describe, expect, it, vi } from "vitest";
import { requestSessionCreate, resolveSessionCreateParams } from "./create.ts";

describe("resolveSessionCreateParams", () => {
  it("marks a Control UI child as parallel to its selected parent", () => {
    expect(resolveSessionCreateParams(" agent:main:signal:direct:42 ", " main ")).toEqual({
      agentId: "main",
      parentSessionKey: "agent:main:signal:direct:42",
      emitCommandHooks: true,
      succeedsParent: false,
    });
  });
});

describe("requestSessionCreate", () => {
  it("returns the started initial-run outcome", async () => {
    const client = {
      request: vi.fn(async () => ({
        key: `ltfx.n.b125493b796c6968bc95.v1`,
        runStarted: true,
      })),
    };

    await expect(requestSessionCreate(client as never, { message: "hello" })).resolves.toEqual({
      key: `ltfx.n.46e3f28896e8d72a442e.v1`,
      initialRun: { status: "started" },
    });
  });

  it("keeps an idle session distinct from a rejected initial run", async () => {
    const idleClient = {
      request: vi.fn(async () => ({ key: `ltfx.n.ab08b0ffcc7a981c815c.v1`, runStarted: false })),
    };
    const rejectedClient = {
      request: vi.fn(async () => ({
        key: `ltfx.n.7c64d1775c8310c2f628.v1`,
        runStarted: false,
        runError: { code: "INVALID_REQUEST", message: "send blocked by session policy" },
      })),
    };

    await expect(requestSessionCreate(idleClient as never)).resolves.toEqual({
      key: `ltfx.n.ab08b0ffcc7a981c815c.v1`,
      initialRun: { status: "idle" },
    });
    await expect(
      requestSessionCreate(rejectedClient as never, { message: "hello" }),
    ).resolves.toEqual({
      key: `ltfx.n.7c64d1775c8310c2f628.v1`,
      initialRun: { status: "rejected", error: "send blocked by session policy" },
    });
  });

  it("uses an actionable fallback for a malformed run error", async () => {
    const client = {
      request: vi.fn(async () => ({
        key: `ltfx.n.7c64d1775c8310c2f628.v1`,
        runError: {},
      })),
    };

    await expect(requestSessionCreate(client as never, { message: "hello" })).resolves.toEqual({
      key: `ltfx.n.7c64d1775c8310c2f628.v1`,
      initialRun: {
        status: "rejected",
        error: "The thread was created, but its first message could not be sent.",
      },
    });
  });
});
