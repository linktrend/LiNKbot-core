/**
 * Bounded local capture buffer: durable pending events → outbox batches.
 * Flush on size limits and compaction/reset/end boundaries.
 */
import { randomUUID } from "node:crypto";
import type { LinkbrainConfig } from "./config.js";
import type { BrainCaptureEvent } from "./envelopes.js";
import { contentHash, opaqueId } from "./opaque.js";
import { sanitizeCaptureText } from "./sanitize.js";
import type { LinkbrainStores } from "./stores.js";
import { LINKBRAIN_CAPTURE_TOOL } from "./tools.js";
import type { LinkbrainRuntime } from "./runtime.js";

export type CaptureBufferRecord = {
  version: 1;
  streamId: string;
  actorId?: string;
  events: BrainCaptureEvent[];
  nextSequence: number;
  updatedAtMs: number;
  /** Dedupe fingerprints already accepted into this buffer. */
  seenFingerprints: string[];
};

export type CaptureEnqueueInput = {
  streamKey: string;
  actorKey?: string;
  role: BrainCaptureEvent["role"];
  text: string;
  /** Optional stable fingerprint to drop duplicate callbacks. */
  fingerprint?: string;
};

export type CaptureFlushReason =
  | "batch_limit"
  | "before_compaction"
  | "before_reset"
  | "session_end"
  | "gateway_stop"
  | "manual";

export type LinkbrainCapture = {
  enqueue(input: CaptureEnqueueInput): Promise<{ accepted: boolean; flushed: boolean }>;
  flush(streamKey: string, reason: CaptureFlushReason): Promise<{ batches: number }>;
  flushAll(reason: CaptureFlushReason): Promise<{ batches: number }>;
  getBuffer(streamKey: string): Promise<CaptureBufferRecord | undefined>;
};

function bufferKey(streamId: string): string {
  return `stream:${streamId}`;
}

function estimateBytes(events: BrainCaptureEvent[]): number {
  return Buffer.byteLength(JSON.stringify(events), "utf8");
}

function withTimeout<T>(
  work: (signal: AbortSignal) => Promise<T>,
  timeoutMs: number,
  label: string,
): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => {
    controller.abort(new Error(`linkbrain: ${label} exceeded ${timeoutMs}ms`));
  }, timeoutMs);
  return work(controller.signal).finally(() => {
    clearTimeout(timer);
  });
}

export type CreateLinkbrainCaptureParams = {
  config: LinkbrainConfig;
  stores: LinkbrainStores;
  runtime: LinkbrainRuntime;
  now?: () => number;
  /** Per-operation bound independent of host hook timeouts. */
  operationTimeoutMs?: number;
};

export function createLinkbrainCapture(params: CreateLinkbrainCaptureParams): LinkbrainCapture {
  const now = params.now ?? (() => Date.now());
  const operationTimeoutMs = params.operationTimeoutMs ?? 2_000;

  const load = async (streamId: string): Promise<CaptureBufferRecord> => {
    const existing = await params.stores.captureBuffer.lookup(bufferKey(streamId));
    if (existing && typeof existing === "object" && (existing as CaptureBufferRecord).version === 1) {
      return existing as CaptureBufferRecord;
    }
    return {
      version: 1,
      streamId,
      events: [],
      nextSequence: 1,
      updatedAtMs: now(),
      seenFingerprints: [],
    };
  };

  const save = async (record: CaptureBufferRecord): Promise<void> => {
    await params.stores.captureBuffer.register(bufferKey(record.streamId), {
      ...record,
      updatedAtMs: now(),
    });
  };

  const clear = async (streamId: string): Promise<void> => {
    await params.stores.captureBuffer.delete(bufferKey(streamId));
  };

  const flushRecord = async (
    record: CaptureBufferRecord,
    reason: CaptureFlushReason,
  ): Promise<boolean> => {
    if (record.events.length === 0) {
      return false;
    }
    if (!params.config.captureEnqueue) {
      // Keep durable buffer; do not assemble remote-bound batches.
      return false;
    }

    return await withTimeout(
      async (signal) => {
        if (signal.aborted) {
          return false;
        }
        const events = record.events.map((event) => ({
          sequence: event.sequence,
          role: event.role,
          text: sanitizeCaptureText(event.text),
        }));
        const fromSequence = events[0]!.sequence;
        const toSequence = events[events.length - 1]!.sequence;
        const batchId = opaqueId("batch", `${record.streamId}:${fromSequence}:${toSequence}:${reason}`);
        const body = {
          batchId,
          streamId: record.streamId,
          ...(record.actorId ? { actorId: record.actorId } : {}),
          fromSequence,
          toSequence,
          contentHash: contentHash(events),
          events,
        };
        const idempotencyKey = `cap:${record.streamId}:${fromSequence}:${toSequence}`;
        await params.runtime.enqueueWrite({
          kind: "capture_batch",
          toolName: LINKBRAIN_CAPTURE_TOOL,
          idempotencyKey,
          body,
        });
        if (signal.aborted) {
          // Enqueue already durable in outbox; still clear buffer to avoid double-batch.
        }
        await clear(record.streamId);
        return true;
      },
      operationTimeoutMs,
      `capture-flush:${reason}`,
    );
  };

  return {
    async enqueue(input) {
      if (!params.config.captureEnqueue) {
        return { accepted: false, flushed: false };
      }
      const streamId = opaqueId("stream", input.streamKey);
      const actorId = input.actorKey ? opaqueId("actor", input.actorKey) : undefined;
      const fingerprint = input.fingerprint
        ? opaqueId("message", input.fingerprint)
        : undefined;

      return await withTimeout(
        async () => {
          const record = await load(streamId);
          if (fingerprint && record.seenFingerprints.includes(fingerprint)) {
            return { accepted: false, flushed: false };
          }
          const event: BrainCaptureEvent = {
            sequence: record.nextSequence,
            role: input.role,
            text: sanitizeCaptureText(input.text),
          };
          const nextEvents = [...record.events, event];
          const nextFingerprints = fingerprint
            ? [...record.seenFingerprints, fingerprint].slice(-256)
            : record.seenFingerprints;
          const next: CaptureBufferRecord = {
            version: 1,
            streamId,
            ...(actorId ? { actorId } : record.actorId ? { actorId: record.actorId } : {}),
            events: nextEvents,
            nextSequence: record.nextSequence + 1,
            updatedAtMs: now(),
            seenFingerprints: nextFingerprints,
          };

          const overEvents = nextEvents.length >= params.config.batchMaxEvents;
          const overBytes = estimateBytes(nextEvents) >= params.config.batchMaxBytes;
          if (overEvents || overBytes) {
            const flushed = await flushRecord(next, "batch_limit");
            return { accepted: true, flushed };
          }
          await save(next);
          return { accepted: true, flushed: false };
        },
        operationTimeoutMs,
        "capture-enqueue",
      );
    },

    async flush(streamKey, reason) {
      const streamId = opaqueId("stream", streamKey);
      const record = await load(streamId);
      const flushed = await flushRecord(record, reason);
      return { batches: flushed ? 1 : 0 };
    },

    async flushAll(reason) {
      const entries = await params.stores.captureBuffer.entries();
      let batches = 0;
      for (const entry of entries) {
        const record = entry.value as CaptureBufferRecord;
        if (!record || record.version !== 1) {
          continue;
        }
        if (await flushRecord(record, reason)) {
          batches += 1;
        }
      }
      return { batches };
    },

    async getBuffer(streamKey) {
      return await load(opaqueId("stream", streamKey));
    },
  };
}

/** Build a unique-but-stable test fingerprint helper. */
export function captureFingerprint(parts: Array<string | undefined>): string {
  return parts.filter((part): part is string => typeof part === "string" && part.length > 0).join("|")
    || randomUUID();
}
