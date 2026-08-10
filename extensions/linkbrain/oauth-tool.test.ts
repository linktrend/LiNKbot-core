import { describe, expect, it, vi } from "vitest";
import { createLinkbrainReadTool, createLinkbrainWriteTool } from "./src/oauth-tool.js";

const machineToken = {
  bindingId: "linkbrain-test",
  issuerUrl: "https://issuer.example.test",
  clientId: "brain-client",
  clientAssertionKeyRef: {
    source: "env" as const,
    provider: "default",
    id: "TEST_ASSERTION_KEY",
  },
};

function toolApi(pluginConfig: Record<string, unknown>) {
  return {
    pluginConfig: { transportMode: "mcp", machineToken, ...pluginConfig },
    config: {},
    machineTokenFacade: {
      pluginId: "linkbrain",
      grantedBindingIds: new Set(["linkbrain-test"]),
      acquire: vi.fn(),
      invalidate: vi.fn(),
      health: vi.fn(),
      unregister: vi.fn(),
    },
    logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn(), debug: vi.fn() },
  } as never;
}

function captureParams(overrides: Record<string, unknown> = {}) {
  return {
    operation: "brain_capture_batch",
    arguments: {
      batch: {
        batchId: "batch-proof-1",
        sessionId: "session-proof-1",
        idempotencyKey: "capture-proof-1",
        capturedAt: "2026-08-10T12:00:01.000Z",
        events: [
          {
            eventId: "event-proof-1",
            sequence: 1,
            occurredAt: "2026-08-10T12:00:00.000Z",
            role: "actor",
            eventType: "status",
            content: "harmless proof",
            classification: "private",
          },
        ],
        ...overrides,
      },
    },
  };
}

describe("linkbrain native OAuth bridge", () => {
  it("rejects model-supplied actor identity before opening a transport", async () => {
    const tool = createLinkbrainReadTool({
      pluginConfig: { mcpRead: true, transportMode: "mcp" },
      config: {},
      logger: { info: vi.fn(), warn: vi.fn(), error: vi.fn(), debug: vi.fn() },
    } as never);
    const result = await tool.execute("test", {
      operation: "brain_search",
      arguments: { query: "test", actorId: "spoofed" },
    });
    expect(result.content[0]?.text).toBe("Actor identity is assigned by LiNKbrain.");
  });

  it("keeps capture and coordination gates independent and fail-closed", async () => {
    const invokeWrite = vi.fn(async () => ({ ok: true as const }));
    const capture = createLinkbrainWriteTool(
      toolApi({ captureEnqueue: true, captureDrain: false, coordinationWrites: true }),
      { invokeWrite },
    );
    expect((await capture.execute("capture", captureParams())).details).toEqual({
      ok: false,
      reason: "disabled",
    });

    const checkpoint = createLinkbrainWriteTool(
      toolApi({ captureEnqueue: true, captureDrain: true, coordinationWrites: false }),
      { invokeWrite },
    );
    expect(
      (
        await checkpoint.execute("checkpoint", {
          operation: "brain_checkpoint_write",
          arguments: {
            taskId: "task-proof-1",
            idempotencyKey: "checkpoint-proof-1",
            summary: "bounded proof",
          },
        })
      ).details,
    ).toEqual({ ok: false, reason: "disabled" });
    expect(invokeWrite).not.toHaveBeenCalled();
  });

  it("allows only capture and owned-task checkpoint operations", async () => {
    const invokeWrite = vi.fn(async () => ({ ok: true as const }));
    const tool = createLinkbrainWriteTool(
      toolApi({ captureEnqueue: true, captureDrain: true, coordinationWrites: true }),
      { invokeWrite },
    );
    for (const operation of ["brain_task_update", "brain_message_send", "brain_delete_all"]) {
      const result = await tool.execute("denied", { operation, arguments: {} });
      expect(result.details).toEqual({ ok: false, reason: "invalid_request" });
    }
    expect(invokeWrite).not.toHaveBeenCalled();
  });

  it("rejects unknown fields, wrong shapes, and nested actor spoof fields", async () => {
    const invokeWrite = vi.fn(async () => ({ ok: true as const }));
    const tool = createLinkbrainWriteTool(toolApi({ captureEnqueue: true, captureDrain: true }), {
      invokeWrite,
    });
    const wrongShape = await tool.execute("wrong", {
      operation: "brain_capture_batch",
      arguments: { batch: "not-an-object" },
    });
    expect(wrongShape.details).toEqual({ ok: false, reason: "invalid_request" });

    const unknown = await tool.execute("unknown", captureParams({ extra: "no" }));
    expect(unknown.details).toEqual({ ok: false, reason: "invalid_request" });

    const spoof = captureParams();
    (spoof.arguments.batch.events[0] as Record<string, unknown>).actorBindingId = "spoofed";
    const rejected = await tool.execute("spoof", spoof);
    expect(rejected.details).toEqual({ ok: false, reason: "invalid_request" });
    expect(invokeWrite).not.toHaveBeenCalled();
  });

  it("validates ordered events and bounds capture size", async () => {
    const invokeWrite = vi.fn(async () => ({ ok: true as const }));
    const tool = createLinkbrainWriteTool(
      toolApi({ captureEnqueue: true, captureDrain: true, batchMaxEvents: 2 }),
      { invokeWrite },
    );
    const duplicate = captureParams();
    duplicate.arguments.batch.events.push({
      ...duplicate.arguments.batch.events[0]!,
      eventId: "event-proof-2",
    });
    expect((await tool.execute("duplicate", duplicate)).details).toEqual({
      ok: false,
      reason: "invalid_request",
    });

    const oversized = captureParams();
    oversized.arguments.batch.events[0]!.content = "x".repeat(4_001);
    expect((await tool.execute("oversized", oversized)).details).toEqual({
      ok: false,
      reason: "invalid_request",
    });

    const invalidTime = captureParams({ capturedAt: "not-an-iso-time" });
    expect((await tool.execute("invalid-time", invalidTime)).details).toEqual({
      ok: false,
      reason: "invalid_request",
    });

    const staleCapture = captureParams({ capturedAt: "2026-08-10T11:59:59.000Z" });
    expect((await tool.execute("stale-capture", staleCapture)).details).toEqual({
      ok: false,
      reason: "invalid_request",
    });
    expect(invokeWrite).not.toHaveBeenCalled();
  });

  it("forwards capture idempotency once, redacts text, and suppresses Brain results", async () => {
    const invokeWrite = vi.fn(async () => ({
      ok: true as const,
      result: { privateReceipt: "must-not-be-visible" },
    }));
    const tool = createLinkbrainWriteTool(toolApi({ captureEnqueue: true, captureDrain: true }), {
      invokeWrite: invokeWrite as never,
    });
    const params = captureParams();
    params.arguments.batch.events[0]!.content = "sensitive=value";
    const result = await tool.execute("capture", params);
    expect(invokeWrite).toHaveBeenCalledOnce();
    expect(invokeWrite).toHaveBeenCalledWith(
      expect.objectContaining({
        toolName: "brain_capture_batch",
        idempotencyKey: "capture-proof-1",
        arguments: expect.objectContaining({
          batch: expect.objectContaining({ idempotencyKey: "capture-proof-1" }),
        }),
      }),
    );
    const forwarded = invokeWrite.mock.calls[0]?.[0] as {
      arguments: { batch: { events: Array<{ content?: string }> } };
    };
    expect(forwarded.arguments.batch.events[0]?.content).toBe("[REDACTED]");
    expect(result.content[0]?.text).toBe("LiNKbrain write accepted.");
    expect(result.details).toEqual({ ok: true, operation: "brain_capture_batch" });
    expect(JSON.stringify(result)).not.toContain("privateReceipt");
  });

  it("forwards only the strict checkpoint contract with its idempotency key", async () => {
    const invokeWrite = vi.fn(async () => ({ ok: true as const }));
    const tool = createLinkbrainWriteTool(toolApi({ coordinationWrites: true }), { invokeWrite });
    const result = await tool.execute("checkpoint", {
      operation: "brain_checkpoint_write",
      arguments: {
        taskId: "task-proof-1",
        idempotencyKey: "checkpoint-proof-1",
        summary: "harmless checkpoint",
        decisions: ["keep scope bounded"],
        nextActions: ["request review"],
      },
    });
    expect(result.details).toEqual({ ok: true, operation: "brain_checkpoint_write" });
    expect(invokeWrite).toHaveBeenCalledWith(
      expect.objectContaining({
        toolName: "brain_checkpoint_write",
        idempotencyKey: "checkpoint-proof-1",
        arguments: {
          taskId: "task-proof-1",
          idempotencyKey: "checkpoint-proof-1",
          summary: "harmless checkpoint",
          decisions: ["keep scope bounded"],
          nextActions: ["request review"],
        },
      }),
    );
  });

  it("requires a host machine-token facade before invoking transport", async () => {
    const invokeWrite = vi.fn(async () => ({ ok: true as const }));
    const api = toolApi({ captureEnqueue: true, captureDrain: true }) as {
      machineTokenFacade?: unknown;
    };
    delete api.machineTokenFacade;
    const result = await createLinkbrainWriteTool(api as never, { invokeWrite }).execute(
      "missing-auth",
      captureParams(),
    );
    expect(result.content[0]?.text).toBe("LiNKbrain write authentication is unavailable.");
    expect(result.details).toEqual({ ok: false, reason: "machine_token_unavailable" });

    const missingBinding = await createLinkbrainWriteTool(
      toolApi({ captureEnqueue: true, captureDrain: true, machineToken: undefined }),
      { invokeWrite },
    ).execute("missing-binding", captureParams());
    expect(missingBinding.details).toEqual({
      ok: false,
      reason: "machine_token_unavailable",
    });
    expect(invokeWrite).not.toHaveBeenCalled();
  });

  it("redacts thrown transport errors and never includes credential material", async () => {
    const tool = createLinkbrainWriteTool(toolApi({ captureEnqueue: true, captureDrain: true }), {
      invokeWrite: async () => {
        throw new Error("sensitive transport detail");
      },
    });
    const result = await tool.execute("failure", captureParams());
    expect(result.content[0]?.text).toBe("LiNKbrain write failed safely.");
    expect(result.details).toEqual({ ok: false, reason: "write_failed" });
    expect(JSON.stringify(result)).not.toContain("sensitive transport detail");
  });
});
