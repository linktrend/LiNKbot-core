/**
 * Allowlisted Skills structured telemetry envelopes.
 *
 * Conversation/content/Brain/raw-tool fields are hard-rejected (never stripped
 * and forwarded). Skills never registers conversation-bearing hooks.
 */

export const LINKSKILLS_REDACTION_POLICY_VERSION = "skills.telemetry.v0";

/** Exact keys that must never appear on Skills telemetry (mirrors fake/prohibited.mjs). */
export const LINKSKILLS_PROHIBITED_EXACT_KEYS = Object.freeze([
  "conversation",
  "conversations",
  "message",
  "messages",
  "message_body",
  "message_bodies",
  "prompt",
  "prompts",
  "prompt_fragment",
  "prompt_fragments",
  "reasoning",
  "reasoning_trace",
  "reasoning_traces",
  "chain_of_thought",
  "chainOfThought",
  "transcript",
  "transcripts",
  "content",
  "brain_findings",
  "brain_finding",
  "brain_search_results",
  "brain_search",
  "brain_load",
  "brain_capture",
  "private_episode",
  "private_episodes",
  "handoff",
  "handoffs",
  "tool_args",
  "tool_arguments",
  "raw_tool_parameters",
  "raw_tool_args",
  "tool_result",
  "tool_results",
  "raw_tool_result",
  "raw_tool_results",
  "secrets",
  "secret",
  "authorization",
  "apiKey",
  "api_key",
  "accessToken",
  "access_token",
]);

export const LINKSKILLS_PROHIBITED_KEY_PREFIXES = Object.freeze([
  "brain_",
  "conversation_",
  "prompt_",
  "reasoning_",
  "message_",
]);

export type SkillsTelemetryKind = "structured_event";

export type SkillsTelemetryMetrics = {
  duration_ms?: number;
  tool_calls?: number;
  [key: string]: unknown;
};

export type SkillsTelemetryBody = {
  schema_version: string;
  event_id: string;
  event_type: string;
  occurred_at: string;
  sequence: number;
  idempotency_key: string;
  correlation_id?: string;
  actor_id: string;
  runtime_profile_id?: string;
  session_id?: string;
  run_id: string;
  skill_id: string;
  skill_release_hash: string;
  execution_profile_hash: string;
  outcome: string;
  sensitivity: string;
  metrics?: SkillsTelemetryMetrics;
  payload?: Record<string, unknown>;
};

export type SkillsInternalEnvelope = {
  version: 1;
  kind: SkillsTelemetryKind;
  toolName: string;
  idempotencyKey: string;
  redactionPolicyVersion: string;
  createdAtMs: number;
  /** Allowlisted structured telemetry only. */
  body: SkillsTelemetryBody;
};

export type OutboxRecord = {
  version: 1;
  domain: "skills";
  key: string;
  createdAtMs: number;
  toolName: string;
  idempotencyKey: string;
  kind: SkillsTelemetryKind;
  envelope: SkillsInternalEnvelope;
  attemptCount: number;
  nextAttemptAtMs: number;
  lastErrorCode?: string;
  lastErrorSafeMessage?: string;
};

export type DeadLetterRecord = {
  version: 1;
  domain: "skills";
  key: string;
  createdAtMs: number;
  movedAtMs: number;
  toolName: string;
  idempotencyKey: string;
  kind: SkillsTelemetryKind;
  attemptCount: number;
  terminalCode: string;
  safeMessage: string;
  /** Redacted metadata only — no payload body. */
  redactedMeta: {
    eventId?: string;
    eventType?: string;
    runId?: string;
    skillId?: string;
    skillReleaseHash?: string;
    executionProfileHash?: string;
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

export function isProhibitedSkillsKey(key: string): boolean {
  if (LINKSKILLS_PROHIBITED_EXACT_KEYS.includes(key)) {
    return true;
  }
  return LINKSKILLS_PROHIBITED_KEY_PREFIXES.some((prefix) => key.startsWith(prefix));
}

export function findProhibitedSkillsField(
  value: unknown,
  path = "",
): { path: string; key: string } | null {
  if (value == null || typeof value !== "object") {
    return null;
  }
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i += 1) {
      const hit = findProhibitedSkillsField(value[i], path ? `${path}[${i}]` : `[${i}]`);
      if (hit) {
        return hit;
      }
    }
    return null;
  }
  for (const [key, child] of Object.entries(value)) {
    const childPath = path ? `${path}.${key}` : key;
    if (isProhibitedSkillsKey(key)) {
      return { path: childPath, key };
    }
    const hit = findProhibitedSkillsField(child, childPath);
    if (hit) {
      return hit;
    }
  }
  return null;
}

function requireString(record: Record<string, unknown>, key: string): string {
  const value = record[key];
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`linkskills: telemetry requires non-empty string ${key}`);
  }
  return value;
}

/**
 * Builds a typed allowlisted telemetry envelope. Prohibited conversation/content
 * fields are rejected (not stripped).
 */
export function buildSkillsTelemetryEnvelope(params: {
  toolName: string;
  idempotencyKey: string;
  redactionPolicyVersion: string;
  createdAtMs: number;
  body: unknown;
}): SkillsInternalEnvelope {
  const prohibited = findProhibitedSkillsField(params.body);
  if (prohibited) {
    throw new Error(
      `linkskills: prohibited field rejected: ${prohibited.key} at ${prohibited.path}`,
    );
  }
  if (!isRecord(params.body)) {
    throw new Error("linkskills: telemetry body must be an object");
  }

  const sequence = params.body.sequence;
  if (typeof sequence !== "number" || !Number.isFinite(sequence)) {
    throw new Error("linkskills: telemetry requires numeric sequence");
  }

  const metricsRaw = params.body.metrics;
  let metrics: SkillsTelemetryMetrics | undefined;
  if (metricsRaw !== undefined) {
    if (!isRecord(metricsRaw)) {
      throw new Error("linkskills: telemetry metrics must be an object");
    }
    const metricsHit = findProhibitedSkillsField(metricsRaw, "metrics");
    if (metricsHit) {
      throw new Error(
        `linkskills: prohibited field rejected: ${metricsHit.key} at ${metricsHit.path}`,
      );
    }
    metrics = metricsRaw as SkillsTelemetryMetrics;
  }

  const payloadRaw = params.body.payload;
  let payload: Record<string, unknown> | undefined;
  if (payloadRaw !== undefined) {
    if (!isRecord(payloadRaw)) {
      throw new Error("linkskills: telemetry payload must be an object");
    }
    const payloadHit = findProhibitedSkillsField(payloadRaw, "payload");
    if (payloadHit) {
      throw new Error(
        `linkskills: prohibited field rejected: ${payloadHit.key} at ${payloadHit.path}`,
      );
    }
    payload = payloadRaw;
  }

  const body: SkillsTelemetryBody = {
    schema_version: requireString(params.body, "schema_version"),
    event_id: requireString(params.body, "event_id"),
    event_type: requireString(params.body, "event_type"),
    occurred_at: requireString(params.body, "occurred_at"),
    sequence,
    idempotency_key:
      typeof params.body.idempotency_key === "string" && params.body.idempotency_key.length > 0
        ? params.body.idempotency_key
        : params.idempotencyKey,
    ...(typeof params.body.correlation_id === "string"
      ? { correlation_id: params.body.correlation_id }
      : {}),
    actor_id: requireString(params.body, "actor_id"),
    ...(typeof params.body.runtime_profile_id === "string"
      ? { runtime_profile_id: params.body.runtime_profile_id }
      : {}),
    ...(typeof params.body.session_id === "string" ? { session_id: params.body.session_id } : {}),
    run_id: requireString(params.body, "run_id"),
    skill_id: requireString(params.body, "skill_id"),
    skill_release_hash: requireString(params.body, "skill_release_hash"),
    execution_profile_hash: requireString(params.body, "execution_profile_hash"),
    outcome: requireString(params.body, "outcome"),
    sensitivity: requireString(params.body, "sensitivity"),
    ...(metrics ? { metrics } : {}),
    ...(payload ? { payload } : {}),
  };

  return {
    version: 1,
    kind: "structured_event",
    toolName: params.toolName,
    idempotencyKey: params.idempotencyKey,
    redactionPolicyVersion: params.redactionPolicyVersion,
    createdAtMs: params.createdAtMs,
    body,
  };
}

export function deadLetterMetaFromEnvelope(
  envelope: SkillsInternalEnvelope,
): DeadLetterRecord["redactedMeta"] {
  return {
    eventId: envelope.body.event_id,
    eventType: envelope.body.event_type,
    runId: envelope.body.run_id,
    skillId: envelope.body.skill_id,
    skillReleaseHash: envelope.body.skill_release_hash,
    executionProfileHash: envelope.body.execution_profile_hash,
  };
}

/** Maps a structured telemetry envelope to Skills fake feedback_submit params. */
export function feedbackParamsFromEnvelope(
  envelope: SkillsInternalEnvelope,
): Record<string, unknown> {
  return {
    run_id: envelope.body.run_id,
    kind: "outcome",
    summary: `${envelope.body.event_type}:${envelope.body.outcome}`,
    skill_id: envelope.body.skill_id,
    skill_release_hash: envelope.body.skill_release_hash,
    execution_profile_hash: envelope.body.execution_profile_hash,
    event_id: envelope.body.event_id,
  };
}

/**
 * Builds drain/MCP/HTTP arguments for the exact frozen skills_* op.
 * Never includes conversation or prohibited fields (already rejected at envelope build).
 */
export function skillsTransportArgsFromEnvelope(
  envelope: SkillsInternalEnvelope,
  toolName: string,
): Record<string, unknown> {
  const body = envelope.body;
  if (toolName === "skills_feedback_submit") {
    return feedbackParamsFromEnvelope(envelope);
  }
  if (toolName === "skills_trace_candidate_submit") {
    return {
      run_id: body.run_id,
      skill_id: body.skill_id,
      skill_release_hash: body.skill_release_hash,
      execution_profile_hash: body.execution_profile_hash,
      event_id: body.event_id,
      candidate: body.payload ?? {},
    };
  }
  return {
    run_id: body.run_id,
    skill_id: body.skill_id,
    release_hash: body.skill_release_hash,
    execution_profile_hash: body.execution_profile_hash,
    ...(typeof body.session_id === "string" ? { session_id: body.session_id } : {}),
    status: body.outcome,
    event_id: body.event_id,
    event_type: body.event_type,
    ...(body.metrics ? { metrics: body.metrics } : {}),
    ...(body.payload ? { payload: body.payload } : {}),
  };
}
