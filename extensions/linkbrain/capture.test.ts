/**
 * Capture buffer durability: accepted events survive flush/outbox failure.
 */
import { describe, expect, it, vi } from "vitest";
import { createLinkbrainCapture } from "./src/capture.js";
import { parseLinkbrainConfig } from "./src/config.js";
import { createLinkbrainRuntime } from "./src/runtime.js";
import { openLinkbrainStores } from "./src/stores.js";
import { createMemoryKeyedStore } from "./src/test-support/memory-store.js";

function createTestStores(maxEntries = 200) {
  return openLinkbrainStores({
    maxEntries,
    openKeyedStore: (options) =>
      createMemoryKeyedStore({
        maxEntries: options.maxEntries,
        overflowPolicy: "reject-new",
      }),
  });
}

async function createCaptureHarness(flags: {
  batchMaxEvents?: number;
  batchMaxBytes?: number;
  outboxMaxEntries?: number;
  captureEnqueue?: boolean;
  failEnqueue?: boolean;
  shutdownBeforeEnqueue?: boolean;
}) {
  const stores = createTestStores(flags.outboxMaxEntries ?? 200);
  const config = parseLinkbrainConfig({
    captureEnqueue: flags.captureEnqueue ?? true,
    captureDrain: true,
    coordinationWrites: false,
    batchMaxEvents: flags.batchMaxEvents ?? 32,
    batchMaxBytes: flags.batchMaxBytes ?? 49_152,
    outboxMaxEntries: flags.outboxMaxEntries ?? 200,
  });
  const writes: Array<{ toolName: string; idempotencyKey: string }> = [];
  const runtime = createLinkbrainRuntime({
    config,
    stores,
    transport: {
      async write(params) {
        writes.push({ toolName: params.toolName, idempotencyKey: params.idempotencyKey });
        return { ok: true, result: { accepted: true } };
      },
    },
    now: (() => {
      let t = 50_000;
      return () => {
        t += 1;
        return t;
      };
    })(),
  });
  await runtime.open();

  if (flags.failEnqueue) {
    vi.spyOn(runtime, "enqueueWrite").mockRejectedValue(
      new Error("linkbrain: forced enqueue failure"),
    );
  }
  if (flags.shutdownBeforeEnqueue) {
    vi.spyOn(runtime, "enqueueWrite").mockImplementation(async () => {
      throw new Error("linkbrain: runtime is shutting down");
    });
  }

  const capture = createLinkbrainCapture({
    config,
    stores,
    runtime,
    operationTimeoutMs: 1_500,
  });
  return { stores, runtime, capture, writes, config };
}

describe("linkbrain capture buffer durability", () => {
  it("saves before flush; enqueue failure retains events and never claims flushed", async () => {
    const h = await createCaptureHarness({ batchMaxEvents: 2, failEnqueue: true });
    const first = await h.capture.enqueue({
      streamKey: "agent:lisa:durability",
      role: "user",
      text: "first",
      fingerprint: "fp-1",
    });
    expect(first).toEqual({ accepted: true, flushed: false });

    const second = await h.capture.enqueue({
      streamKey: "agent:lisa:durability",
      role: "user",
      text: "second-triggers-flush",
      fingerprint: "fp-2",
    });
    expect(second).toEqual({ accepted: true, flushed: false });

    const buffer = await h.capture.getBuffer("agent:lisa:durability");
    expect(buffer?.events.map((e) => e.text)).toEqual(["first", "second-triggers-flush"]);
    expect(buffer?.nextSequence).toBe(3);
    expect((await h.runtime.diagnostics()).outboxCount).toBe(0);
    expect(h.writes).toHaveLength(0);
  });

  it("outbox overflow rejects flush explicitly without losing accepted buffer events", async () => {
    const h = await createCaptureHarness({ batchMaxEvents: 1, outboxMaxEntries: 1 });
    // Fill outbox with a direct write so the next capture flush overflows.
    await h.runtime.enqueueWrite({
      kind: "capture_batch",
      toolName: "brain_capture_batch",
      idempotencyKey: "cap:prefill:1",
      body: {
        batchId: "batch_prefill",
        streamId: "stream_prefill",
        fromSequence: 1,
        toSequence: 1,
        contentHash: "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        events: [{ sequence: 1, role: "user", text: "prefill" }],
      },
    });
    expect((await h.runtime.diagnostics()).outboxCount).toBe(1);

    const result = await h.capture.enqueue({
      streamKey: "agent:lisa:overflow",
      role: "user",
      text: "must-survive-overflow",
      fingerprint: "fp-overflow",
    });
    expect(result).toEqual({ accepted: true, flushed: false });

    const buffer = await h.capture.getBuffer("agent:lisa:overflow");
    expect(buffer?.events).toHaveLength(1);
    expect(buffer?.events[0]?.text).toBe("must-survive-overflow");
    // Prefill only — capture flush did not claim a second outbox slot.
    expect((await h.runtime.diagnostics()).outboxCount).toBe(1);
  });

  it("shutdown during flush retains durable buffer and does not claim flushed", async () => {
    const h = await createCaptureHarness({ batchMaxEvents: 1, shutdownBeforeEnqueue: true });
    const result = await h.capture.enqueue({
      streamKey: "agent:lisa:shutdown",
      role: "user",
      text: "during-shutdown",
      fingerprint: "fp-shutdown",
    });
    expect(result).toEqual({ accepted: true, flushed: false });
    const buffer = await h.capture.getBuffer("agent:lisa:shutdown");
    expect(buffer?.events).toHaveLength(1);
    expect((await h.runtime.diagnostics()).outboxCount).toBe(0);
  });

  it("restart recovers retained buffer and drains successfully later", async () => {
    const stores = createTestStores();
    const config = parseLinkbrainConfig({
      captureEnqueue: true,
      captureDrain: true,
      batchMaxEvents: 1,
    });
    const firstRuntime = createLinkbrainRuntime({
      config,
      stores,
      transport: {
        async write() {
          throw new Error("linkbrain: forced enqueue failure");
        },
      },
    });
    await firstRuntime.open();
    vi.spyOn(firstRuntime, "enqueueWrite").mockRejectedValue(
      new Error("linkbrain: forced enqueue failure"),
    );
    const firstCapture = createLinkbrainCapture({
      config,
      stores,
      runtime: firstRuntime,
      operationTimeoutMs: 1_500,
    });
    const accepted = await firstCapture.enqueue({
      streamKey: "agent:lisa:restart",
      role: "user",
      text: "survive-restart",
      fingerprint: "fp-restart",
    });
    expect(accepted).toEqual({ accepted: true, flushed: false });
    await firstRuntime.shutdown();

    const writes: string[] = [];
    const secondRuntime = createLinkbrainRuntime({
      config,
      stores,
      transport: {
        async write(params) {
          writes.push(params.idempotencyKey);
          return { ok: true, result: { accepted: true } };
        },
      },
    });
    await secondRuntime.open();
    const secondCapture = createLinkbrainCapture({
      config,
      stores,
      runtime: secondRuntime,
      operationTimeoutMs: 1_500,
    });
    const recovered = await secondCapture.getBuffer("agent:lisa:restart");
    expect(recovered?.events).toHaveLength(1);
    expect(recovered?.events[0]?.text).toBe("survive-restart");

    const flushed = await secondCapture.flush("agent:lisa:restart", "manual");
    expect(flushed.batches).toBe(1);
    const drain = await secondRuntime.drainOnce();
    expect(drain.drained).toBe(1);
    expect(writes).toHaveLength(1);
    expect((await secondCapture.getBuffer("agent:lisa:restart"))?.events ?? []).toHaveLength(0);
  });

  it("retry after failed flush drains once with stable idempotency (no duplicate ack claim)", async () => {
    const h = await createCaptureHarness({ batchMaxEvents: 1 });
    const spy = vi.spyOn(h.runtime, "enqueueWrite");
    spy.mockRejectedValueOnce(new Error("linkbrain: forced enqueue failure"));

    const failed = await h.capture.enqueue({
      streamKey: "agent:lisa:retry",
      role: "user",
      text: "retry-me",
      fingerprint: "fp-retry",
    });
    expect(failed).toEqual({ accepted: true, flushed: false });
    expect((await h.runtime.diagnostics()).outboxCount).toBe(0);

    spy.mockRestore();
    const flushed = await h.capture.flush("agent:lisa:retry", "manual");
    expect(flushed.batches).toBe(1);
    expect((await h.runtime.diagnostics()).outboxCount).toBe(1);

    const drain1 = await h.runtime.drainOnce();
    expect(drain1.drained).toBe(1);
    const drain2 = await h.runtime.drainOnce();
    expect(drain2.drained).toBe(0);
    expect(h.writes).toHaveLength(1);
  });

  it("duplicate fingerprint is not re-accepted after durable save", async () => {
    const h = await createCaptureHarness({ batchMaxEvents: 8 });
    const first = await h.capture.enqueue({
      streamKey: "agent:lisa:dup",
      role: "user",
      text: "once",
      fingerprint: "fp-dup",
    });
    const dup = await h.capture.enqueue({
      streamKey: "agent:lisa:dup",
      role: "user",
      text: "once-again",
      fingerprint: "fp-dup",
    });
    expect(first).toEqual({ accepted: true, flushed: false });
    expect(dup).toEqual({ accepted: false, flushed: false });
    const buffer = await h.capture.getBuffer("agent:lisa:dup");
    expect(buffer?.events).toHaveLength(1);
    expect(buffer?.events[0]?.text).toBe("once");
  });

  it("successful later drain after batch_limit flush clears buffer exactly once", async () => {
    const h = await createCaptureHarness({ batchMaxEvents: 2 });
    await h.capture.enqueue({
      streamKey: "agent:lisa:ok",
      role: "user",
      text: "a",
      fingerprint: "fp-a",
    });
    const flushed = await h.capture.enqueue({
      streamKey: "agent:lisa:ok",
      role: "user",
      text: "b",
      fingerprint: "fp-b",
    });
    expect(flushed).toEqual({ accepted: true, flushed: true });
    expect((await h.capture.getBuffer("agent:lisa:ok"))?.events ?? []).toHaveLength(0);
    expect((await h.runtime.diagnostics()).outboxCount).toBe(1);
    const drain = await h.runtime.drainOnce();
    expect(drain.drained).toBe(1);
    expect(h.writes).toHaveLength(1);
  });

  it("Brain capture failure leaves Skills/native path undisturbed (no throw; buffer retained)", async () => {
    const h = await createCaptureHarness({ batchMaxEvents: 1, failEnqueue: true });
    await expect(
      h.capture.enqueue({
        streamKey: "agent:lisa:isolate",
        role: "user",
        text: "brain-only-failure",
        fingerprint: "fp-isolate",
      }),
    ).resolves.toEqual({ accepted: true, flushed: false });
    // Skills is not wired here; prove Brain isolation surface: no throw, durable retain, empty write set.
    expect(h.writes).toHaveLength(0);
    expect((await h.capture.getBuffer("agent:lisa:isolate"))?.events).toHaveLength(1);
  });
});
