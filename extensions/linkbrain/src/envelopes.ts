/**
 * Typed internal Brain envelopes + allowlist redaction.
 *
 * Conversation-bearing hooks are Phase 3. When those hooks are enabled they
 * require `plugins.entries.linkbrain.hooks.allowConversationAccess=true`.
 */

export const LINKBRAIN_REDACTION_POLICY_VERSION = "brain.redaction.v0";

/** Fields never retained in internal envelopes or remote writes. */
export const LINKBRAIN_PROHIBITED_FIELDS = Object.freeze([
  "reasoning",
  "chainOfThought",
  "chain_of_thought",
  "secrets",
  "secret",
  "authorization",
  "apiKey",
  "api_key",
  "accessToken",
  "access_token",
  "rawToolOutput",
  "unboundedToolOutput",
  "raw_tool_output",
  "skillId",
  "skillsReleaseHash",
  "skillsRunId",
  "skills_run_id",
  "telemetry",
  // Attachments / prompt bodies excluded even when nested under capture payloads.
  "attachment",
  "attachments",
  "media",
  "mediaUrl",
  "mediaUrls",
  "prompt",
  "promptBody",
  "systemPrompt",
  "developerPrompt",
]);

export type BrainCaptureEvent = {
  sequence: number;
  role: "user" | "assistant" | "tool_summary" | "system";
  text: string;
};

type BrainCaptureBatchBody = {
  batchId: string;
  streamId: string;
  actorId?: string;
  fromSequence: number;
  toSequence: number;
  contentHash: string;
  events: BrainCaptureEvent[];
};

type BrainCoordinationBody = {
  taskId?: string;
  summary?: string;
  [key: string]: unknown;
};

export type BrainWriteKind = "capture_batch" | "coordination";

export type BrainInternalEnvelope = {
  version: 1;
  kind: BrainWriteKind;
  toolName: string;
  idempotencyKey: string;
  redactionPolicyVersion: string;
  createdAtMs: number;
  /** Allowlisted payload only — never includes prohibited fields. */
  body: BrainCaptureBatchBody | BrainCoordinationBody;
};

export type OutboxRecord = {
  version: 1;
  domain: "brain";
  key: string;
  createdAtMs: number;
  toolName: string;
  idempotencyKey: string;
  kind: BrainWriteKind;
  envelope: BrainInternalEnvelope;
  attemptCount: number;
  nextAttemptAtMs: number;
  lastErrorCode?: string;
  lastErrorSafeMessage?: string;
};

export type DeadLetterRecord = {
  version: 1;
  domain: "brain";
  key: string;
  createdAtMs: number;
  movedAtMs: number;
  toolName: string;
  idempotencyKey: string;
  kind: BrainWriteKind;
  attemptCount: number;
  terminalCode: string;
  safeMessage: string;
  /** Redacted metadata only — no payload body. */
  redactedMeta: {
    batchId?: string;
    streamId?: string;
    taskId?: string;
  };
};

export type HealthRecord = {
  version: 1;
  status: "idle" | "ok" | "degraded" | "failed";
  updatedAtMs: number;
  lastSuccessAtMs?: number;
  lastFailureAtMs?: number;
  lastErrorCode?: string;
  lastDrainStatus?: string;
  outboxCount?: number;
  deadLetterCount?: number;
  oldestOutboxAgeMs?: number | null;
};

export type CursorRecord = {
  version: 1;
  drainGeneration?: string;
  lastDrainedKey?: string;
  updatedAtMs: number;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function stripProhibited(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(stripProhibited);
  }
  if (!isRecord(value)) {
    return value;
  }
  const next: Record<string, unknown> = {};
  for (const [key, child] of Object.entries(value)) {
    if (LINKBRAIN_PROHIBITED_FIELDS.includes(key)) {
      continue;
    }
    next[key] = stripProhibited(child);
  }
  return next;
}

function assertCaptureEvent(value: unknown): BrainCaptureEvent {
  if (!isRecord(value)) {
    throw new Error("linkbrain: capture event must be an object");
  }
  const role = value.role;
  if (role !== "user" && role !== "assistant" && role !== "tool_summary" && role !== "system") {
    throw new Error("linkbrain: capture event role is invalid");
  }
  if (typeof value.sequence !== "number" || !Number.isFinite(value.sequence)) {
    throw new Error("linkbrain: capture event sequence is required");
  }
  if (typeof value.text !== "string") {
    throw new Error("linkbrain: capture event text is required");
  }
  return {
    sequence: value.sequence,
    role,
    text: value.text,
  };
}

function assertCaptureBatch(value: unknown): BrainCaptureBatchBody {
  if (!isRecord(value)) {
    throw new Error("linkbrain: capture batch body must be an object");
  }
  if (typeof value.batchId !== "string" || typeof value.streamId !== "string") {
    throw new Error("linkbrain: capture batch requires batchId and streamId");
  }
  if (typeof value.fromSequence !== "number" || typeof value.toSequence !== "number") {
    throw new Error("linkbrain: capture batch requires fromSequence and toSequence");
  }
  if (typeof value.contentHash !== "string") {
    throw new Error("linkbrain: capture batch requires contentHash");
  }
  if (!Array.isArray(value.events)) {
    throw new Error("linkbrain: capture batch requires events[]");
  }
  return {
    batchId: value.batchId,
    streamId: value.streamId,
    ...(typeof value.actorId === "string" ? { actorId: value.actorId } : {}),
    fromSequence: value.fromSequence,
    toSequence: value.toSequence,
    contentHash: value.contentHash,
    events: value.events.map(assertCaptureEvent),
  };
}

/**
 * Builds a typed allowlisted envelope. Prohibited fields are dropped; unknown
 * capture shapes throw rather than being forwarded.
 */
export function redactBrainEnvelope(params: {
  kind: BrainWriteKind;
  toolName: string;
  idempotencyKey: string;
  redactionPolicyVersion: string;
  createdAtMs: number;
  body: unknown;
}): BrainInternalEnvelope {
  const cleaned = stripProhibited(params.body);
  const body =
    params.kind === "capture_batch"
      ? assertCaptureBatch(cleaned)
      : (cleaned as BrainCoordinationBody);

  return {
    version: 1,
    kind: params.kind,
    toolName: params.toolName,
    idempotencyKey: params.idempotencyKey,
    redactionPolicyVersion: params.redactionPolicyVersion,
    createdAtMs: params.createdAtMs,
    body,
  };
}

export function deadLetterMetaFromEnvelope(
  envelope: BrainInternalEnvelope,
): DeadLetterRecord["redactedMeta"] {
  if (envelope.kind === "capture_batch") {
    const body = envelope.body as BrainCaptureBatchBody;
    return { batchId: body.batchId, streamId: body.streamId };
  }
  const body = envelope.body as BrainCoordinationBody;
  return typeof body.taskId === "string" ? { taskId: body.taskId } : {};
}
