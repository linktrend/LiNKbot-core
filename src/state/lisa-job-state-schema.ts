/** Additive Lisa state schema plus private persistence helpers shared by its store. */

import { createHash } from "node:crypto";
import type { DatabaseSync } from "node:sqlite";
import type { Compilable } from "kysely";
import {
  assertLisaJobId,
  assertLisaLocalDate,
  assertLisaJobRunState,
  type LisaCycleIdentity,
  type LisaDependencyReceipt,
  type LisaDeliveryAttempt,
  type LisaJobRunState,
} from "../../linkbots/lisa/ops/jobs/lisa-job-contracts.js";
import {
  executeSqliteQuerySync,
  executeSqliteQueryTakeFirstSync,
  getNodeSqliteKysely,
} from "../infra/kysely-sync.js";
import { withOpenClawAgentDatabaseReadOnly } from "./openclaw-agent-db-readonly.js";
import type { OpenClawAgentDatabaseOptions } from "./openclaw-agent-db.js";
import {
  openOpenClawAgentDatabase,
  runOpenClawAgentWriteTransaction,
} from "./openclaw-agent-db.js";
import { closeOpenClawAgentDatabaseByPath } from "./openclaw-agent-db.js";
import { resolveOpenClawAgentSqlitePath } from "./openclaw-agent-db.paths.js";

export type LisaJobStateDatabase = {
  lisa_job_runs: {
    job_id: string;
    cycle_id: string;
    local_date: string;
    state: string;
    attempt: number;
    scheduled_at_ms: number;
    deadline_at_ms: number;
    started_at_ms: number | null;
    completed_at_ms: number | null;
    safe_result_json: string | null;
    error_code: string | null;
    created_at_ms: number;
    updated_at_ms: number;
  };
  lisa_job_receipts: {
    receipt_id: string;
    job_id: string;
    local_date: string;
    cycle_id: string;
    producer_completed_at_ms: number;
    payload_hash: string;
    provider_id: string;
    provider_release_ref: string;
    provider_contract_ref: string;
    provider_received_at_ms: number;
    created_at_ms: number;
  };
  lisa_delivery_attempts: {
    attempt_id: string;
    channel: string;
    destination_binding_id: string;
    idempotency_key: string;
    attempt: number;
    rendered_hash: string;
    status: string;
    provider_receipt_id: string | null;
    started_at_ms: number;
    finished_at_ms: number | null;
    created_at_ms: number;
    updated_at_ms: number;
  };
  lisa_pending_work: {
    temporary_id: string;
    payload_json: string;
    privacy_class: string;
    delivery_state: string;
    permanent_id: string | null;
    created_at_ms: number;
    updated_at_ms: number;
  };
  lisa_job_state_meta: {
    meta_key: string;
    meta_value: string;
    updated_at_ms: number;
  };
};

export type LisaJobRunDbRow = LisaJobStateDatabase["lisa_job_runs"];
export type LisaReceiptDbRow = LisaJobStateDatabase["lisa_job_receipts"];
export type LisaDeliveryDbRow = LisaJobStateDatabase["lisa_delivery_attempts"];
export type LisaPendingWorkDbRow = LisaJobStateDatabase["lisa_pending_work"];
export type LisaJobRunRecord = LisaCycleIdentity & {
  readonly state: LisaJobRunState;
  readonly attempt: number;
  readonly scheduledAtMs: number;
  readonly deadlineAtMs: number;
  readonly startedAtMs: number | null;
  readonly completedAtMs: number | null;
  readonly safeResultJson: string | null;
  readonly errorCode: string | null;
  readonly createdAtMs: number;
  readonly updatedAtMs: number;
};
export type LisaPendingWorkRecord = {
  readonly temporaryId: string;
  readonly payload: Record<string, unknown>;
  readonly privacyClass: "work";
  readonly deliveryState: "pending" | "delivered" | "failed" | "blocked";
  readonly permanentId: string | null;
  readonly createdAtMs: number;
  readonly updatedAtMs: number;
};
export type LisaJobStateStoreHealth = {
  readonly ok: boolean;
  readonly available: boolean;
  readonly owner: "openclaw_agent_sqlite_lisa_jobs";
  readonly tablesPresent: readonly string[];
  readonly missingTables: readonly string[];
  readonly schemaEnsured: boolean;
  readonly databasePath: string;
  readonly agentId: string;
  readonly error?: string;
};
export type LisaJobStateSchemaOptions = OpenClawAgentDatabaseOptions & { ensure?: boolean };
export type LisaJobRunCreateInput = LisaCycleIdentity & {
  scheduledAtMs: number;
  deadlineAtMs: number;
  nowMs?: number;
};
export type LisaJobRunTransitionInput = LisaCycleIdentity & {
  expectedState: LisaJobRunState;
  nextState: LisaJobRunState;
  safeResultJson?: string | null;
  errorCode?: string | null;
  nowMs?: number;
};
const HEALTHY_LISA_JOB_STATE = Symbol("openclaw.lisa_job_state.healthy");
export type HealthyLisaJobStateStore = {
  readonly [HEALTHY_LISA_JOB_STATE]: true;
  readonly agentId: string;
  readonly databasePath: string;
};

const BAD_KEY =
  /(health|mounjaro|medication|supplement|symptom|weight|waist|food|protein|hydration|exercise|sleep|mood|stress|digestion|bowel|diagnosis|prescription|dosage|photo|document|token|secret|password|authorization|bearer|email|address|chat_id|drive_id|message_body|prompt|reasoning)/iu;
const BAD_VALUE =
  /(?:[\w.+-]+@[\w.-]+\.[A-Za-z]{2,}|bearer\s+|-----BEGIN|(?:token|secret|password)\s*[:=])/iu;

export function lisaJobStateKysely(db: DatabaseSync) {
  return getNodeSqliteKysely<LisaJobStateDatabase>(db);
}
export function lisaJobStateRows<T>(db: DatabaseSync, query: Compilable<T>): T[] {
  return executeSqliteQuerySync(db, query).rows as T[];
}
export function lisaJobStateOne<T>(db: DatabaseSync, query: Compilable<T>): T | undefined {
  return executeSqliteQueryTakeFirstSync(db, query) as T | undefined;
}
export function lisaJobStateDbOptions(
  options: OpenClawAgentDatabaseOptions,
): OpenClawAgentDatabaseOptions {
  return {
    agentId: options.agentId,
    ...(options.env ? { env: options.env } : {}),
    ...(options.path ? { path: options.path } : {}),
  };
}
export function lisaJobStateDbPath(options: OpenClawAgentDatabaseOptions): string {
  return resolveOpenClawAgentSqlitePath(lisaJobStateDbOptions(options));
}
export function lisaJobStateTableExists(db: DatabaseSync, name: string): boolean {
  return (
    (
      db
        .prepare("SELECT 1 AS ok FROM sqlite_master WHERE type = 'table' AND name = ?")
        .get(name) as { ok?: unknown } | undefined
    )?.ok === 1
  );
}
export function lisaJobStateHealth(
  db: DatabaseSync,
  path: string,
  agentId: string,
  schemaEnsured: boolean,
): LisaJobStateStoreHealth {
  const present = LISA_JOB_STATE_TABLES.filter((name) => lisaJobStateTableExists(db, name));
  const missing = LISA_JOB_STATE_TABLES.filter((name) => !present.includes(name));
  return {
    ok: missing.length === 0,
    available: missing.length === 0,
    owner: "openclaw_agent_sqlite_lisa_jobs",
    tablesPresent: present,
    missingTables: missing,
    schemaEnsured: schemaEnsured || missing.length === 0,
    databasePath: path,
    agentId,
  };
}
export function lisaJobStateCanonicalJson(value: unknown): string {
  if (value === null || typeof value === "string" || typeof value === "boolean") {
    return JSON.stringify(value);
  }
  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      throw new Error("JSON value must contain finite numbers");
    }
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return `[${value.map(lisaJobStateCanonicalJson).join(",")}]`;
  }
  if (typeof value === "object") {
    return `{${Object.keys(value as Record<string, unknown>)
      .toSorted()
      .map(
        (key) =>
          `${JSON.stringify(key)}:${lisaJobStateCanonicalJson((value as Record<string, unknown>)[key])}`,
      )
      .join(",")}}`;
  }
  throw new Error("unsupported JSON value");
}
export function assertLisaJobStateSafeJson(value: unknown, field: string, depth = 0): void {
  if (depth > 8) {
    throw new Error(`${field} is nested too deeply`);
  }
  if (value === null || typeof value === "boolean") {
    return;
  }
  if (typeof value === "string") {
    if (value.length > 4_000 || BAD_VALUE.test(value)) {
      throw new Error(`${field} contains restricted data`);
    }
    return;
  }
  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      throw new Error(`${field} contains a non-finite number`);
    }
    return;
  }
  if (Array.isArray(value)) {
    if (value.length > 100) {
      throw new Error(`${field} contains too many values`);
    }
    value.forEach((item) => assertLisaJobStateSafeJson(item, field, depth + 1));
    return;
  }
  if (typeof value !== "object") {
    throw new Error(`${field} contains an unsupported value`);
  }
  for (const [key, nested] of Object.entries(value)) {
    if (BAD_KEY.test(key)) {
      throw new Error(`${field}.${key} is outside the generic privacy boundary`);
    }
    assertLisaJobStateSafeJson(nested, `${field}.${key}`, depth + 1);
  }
}
export function lisaJobStateParseObject(json: string, field: string): Record<string, unknown> {
  let value: unknown;
  try {
    value = JSON.parse(json) as unknown;
  } catch {
    throw new Error(`${field} must contain valid JSON`);
  }
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${field} must contain a JSON object`);
  }
  return value as Record<string, unknown>;
}
export function lisaJobStateSafeResult(json: string | null | undefined): string | null {
  if (json == null) {
    return null;
  }
  const value = lisaJobStateParseObject(json, "safe result");
  assertLisaJobStateSafeJson(value, "safe result");
  return lisaJobStateCanonicalJson(value);
}
export function lisaJobStateWorkPayload(value: unknown): string {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("pending work payload must be a structured object");
  }
  assertLisaJobStateSafeJson(value, "pending work payload");
  return lisaJobStateCanonicalJson(value);
}
export function lisaJobStateRun(row: LisaJobRunDbRow): LisaJobRunRecord {
  assertLisaJobId(row.job_id);
  assertLisaLocalDate(row.local_date);
  assertLisaJobRunState(row.state);
  return {
    jobId: row.job_id,
    cycleId: row.cycle_id,
    localDate: row.local_date,
    state: row.state,
    attempt: row.attempt,
    scheduledAtMs: row.scheduled_at_ms,
    deadlineAtMs: row.deadline_at_ms,
    startedAtMs: row.started_at_ms,
    completedAtMs: row.completed_at_ms,
    safeResultJson: row.safe_result_json,
    errorCode: row.error_code,
    createdAtMs: row.created_at_ms,
    updatedAtMs: row.updated_at_ms,
  };
}
export function lisaJobStateReceipt(row: LisaReceiptDbRow): LisaDependencyReceipt {
  assertLisaJobId(row.job_id);
  assertLisaLocalDate(row.local_date);
  return {
    receiptId: row.receipt_id,
    jobId: row.job_id,
    cycleId: row.cycle_id,
    localDate: row.local_date,
    producerCompletedAtMs: row.producer_completed_at_ms,
    payloadHash: row.payload_hash,
    provider: {
      providerId: row.provider_id,
      releaseRef: row.provider_release_ref,
      contractRef: row.provider_contract_ref,
      receivedAtMs: row.provider_received_at_ms,
    },
  };
}
export function lisaJobStateDelivery(row: LisaDeliveryDbRow): LisaDeliveryAttempt {
  if (row.status !== "started" && row.status !== "succeeded" && row.status !== "failed") {
    throw new Error(`invalid stored delivery status: ${row.status}`);
  }
  return {
    attemptId: row.attempt_id,
    channel: row.channel,
    destinationBindingId: row.destination_binding_id,
    idempotencyKey: row.idempotency_key,
    attempt: row.attempt,
    renderedHash: row.rendered_hash,
    status: row.status,
    providerReceiptId: row.provider_receipt_id,
    startedAtMs: row.started_at_ms,
    finishedAtMs: row.finished_at_ms,
    createdAtMs: row.created_at_ms,
    updatedAtMs: row.updated_at_ms,
  };
}
export function lisaJobStatePending(row: LisaPendingWorkDbRow): LisaPendingWorkRecord {
  if (row.privacy_class !== "work") {
    throw new Error("generic pending reader encountered private_health data");
  }
  return {
    temporaryId: row.temporary_id,
    payload: lisaJobStateParseObject(row.payload_json, "pending work payload"),
    privacyClass: "work",
    deliveryState: row.delivery_state as LisaPendingWorkRecord["deliveryState"],
    permanentId: row.permanent_id,
    createdAtMs: row.created_at_ms,
    updatedAtMs: row.updated_at_ms,
  };
}
export function lisaJobStateHash(value: unknown): string {
  assertLisaJobStateSafeJson(value, "Lisa job payload");
  return createHash("sha256").update(lisaJobStateCanonicalJson(value)).digest("hex");
}

const lisaJobStateRedactKey =
  /(health|mounjaro|medication|supplement|symptom|weight|waist|food|protein|hydration|exercise|sleep|mood|stress|digestion|bowel|diagnosis|prescription|dosage|photo|document|token|secret|password|authorization|bearer|email|address|chat_id|drive_id|message_body|prompt|reasoning)/iu;
function lisaJobStateRedacted(value: unknown, key?: string, depth = 0): unknown {
  if (depth > 6) {
    return "[redacted-depth]";
  }
  if (key && lisaJobStateRedactKey.test(key)) {
    return "[redacted]";
  }
  if (typeof value === "string") {
    return value.length > 240 ? `${value.slice(0, 240)}…[truncated]` : value;
  }
  if (Array.isArray(value)) {
    return value.slice(0, 50).map((item) => lisaJobStateRedacted(item, undefined, depth + 1));
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([childKey, child]) => [
        childKey,
        lisaJobStateRedacted(child, childKey, depth + 1),
      ]),
    );
  }
  return value ?? null;
}
export function redactLisaJobResultForDiagnostics(value: unknown): string {
  return lisaJobStateCanonicalJson(lisaJobStateRedacted(value));
}
export function hashLisaJobPayload(value: unknown): string {
  assertLisaJobStateSafeJson(value, "Lisa job payload");
  return createHash("sha256").update(lisaJobStateCanonicalJson(value)).digest("hex");
}

export const LISA_JOB_STATE_SCHEMA_VERSION = 1 as const;
export const LISA_JOB_STATE_SCHEMA_OWNER = "lisa-job-state" as const;
export const LISA_JOB_STATE_SCHEMA_KIND = "additive_lazy_ensure" as const;

export const LISA_JOB_STATE_SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS lisa_job_runs (
  job_id TEXT NOT NULL,
  cycle_id TEXT NOT NULL,
  local_date TEXT NOT NULL,
  state TEXT NOT NULL CHECK (state IN ('pending', 'running', 'completed', 'failed', 'skipped_dependency', 'retrying')),
  attempt INTEGER NOT NULL CHECK (attempt >= 1),
  scheduled_at_ms INTEGER NOT NULL,
  deadline_at_ms INTEGER NOT NULL CHECK (deadline_at_ms >= scheduled_at_ms),
  started_at_ms INTEGER,
  completed_at_ms INTEGER,
  safe_result_json TEXT,
  error_code TEXT,
  created_at_ms INTEGER NOT NULL,
  updated_at_ms INTEGER NOT NULL,
  PRIMARY KEY (job_id, cycle_id)
) STRICT;

CREATE INDEX IF NOT EXISTS idx_lisa_job_runs_due
  ON lisa_job_runs(state, scheduled_at_ms, deadline_at_ms);

CREATE TABLE IF NOT EXISTS lisa_job_receipts (
  receipt_id TEXT NOT NULL PRIMARY KEY,
  job_id TEXT NOT NULL,
  local_date TEXT NOT NULL,
  cycle_id TEXT NOT NULL,
  producer_completed_at_ms INTEGER NOT NULL,
  payload_hash TEXT NOT NULL,
  provider_id TEXT NOT NULL,
  provider_release_ref TEXT NOT NULL,
  provider_contract_ref TEXT NOT NULL,
  provider_received_at_ms INTEGER NOT NULL,
  created_at_ms INTEGER NOT NULL,
  UNIQUE (job_id, local_date, cycle_id)
) STRICT;

CREATE INDEX IF NOT EXISTS idx_lisa_job_receipts_binding
  ON lisa_job_receipts(job_id, local_date, cycle_id);

CREATE TABLE IF NOT EXISTS lisa_delivery_attempts (
  attempt_id TEXT NOT NULL PRIMARY KEY,
  channel TEXT NOT NULL,
  destination_binding_id TEXT NOT NULL,
  idempotency_key TEXT NOT NULL,
  attempt INTEGER NOT NULL CHECK (attempt >= 1 AND attempt <= 2),
  rendered_hash TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('started', 'succeeded', 'failed')),
  provider_receipt_id TEXT,
  started_at_ms INTEGER NOT NULL,
  finished_at_ms INTEGER,
  created_at_ms INTEGER NOT NULL,
  updated_at_ms INTEGER NOT NULL,
  UNIQUE (idempotency_key, attempt)
) STRICT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_lisa_delivery_provider_receipt
  ON lisa_delivery_attempts(provider_receipt_id)
  WHERE provider_receipt_id IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_lisa_delivery_unresolved
  ON lisa_delivery_attempts(status, created_at_ms);

CREATE TABLE IF NOT EXISTS lisa_pending_work (
  temporary_id TEXT NOT NULL PRIMARY KEY CHECK (temporary_id GLOB 'P-[0-9][0-9][0-9][0-9]'),
  payload_json TEXT NOT NULL,
  privacy_class TEXT NOT NULL CHECK (privacy_class = 'work'),
  delivery_state TEXT NOT NULL CHECK (delivery_state IN ('pending', 'delivered', 'failed', 'blocked')),
  permanent_id TEXT,
  created_at_ms INTEGER NOT NULL,
  updated_at_ms INTEGER NOT NULL
) STRICT;

CREATE INDEX IF NOT EXISTS idx_lisa_pending_work_due
  ON lisa_pending_work(delivery_state, created_at_ms);

CREATE TABLE IF NOT EXISTS lisa_job_state_meta (
  meta_key TEXT NOT NULL PRIMARY KEY,
  meta_value TEXT NOT NULL,
  updated_at_ms INTEGER NOT NULL
) STRICT;
`;

export const LISA_JOB_STATE_TABLES = [
  "lisa_job_runs",
  "lisa_job_receipts",
  "lisa_delivery_attempts",
  "lisa_pending_work",
  "lisa_job_state_meta",
] as const;

export const LISA_JOB_STATE_SCHEMA_MARKER = "schema_version" as const;

const ensuredLisaJobStateDatabases = new WeakSet<DatabaseSync>();

export function ensureLisaJobStateSchema(options: LisaJobStateSchemaOptions): void {
  const resolved = lisaJobStateDbOptions(options);
  const database = openOpenClawAgentDatabase(resolved);
  if (ensuredLisaJobStateDatabases.has(database.db)) {
    return;
  }
  runOpenClawAgentWriteTransaction(
    ({ db }) => {
      db.exec(LISA_JOB_STATE_SCHEMA_SQL);
      executeSqliteQuerySync(
        db,
        lisaJobStateKysely(db)
          .insertInto("lisa_job_state_meta")
          .values({
            meta_key: LISA_JOB_STATE_SCHEMA_MARKER,
            meta_value: String(LISA_JOB_STATE_SCHEMA_VERSION),
            updated_at_ms: Date.now(),
          })
          .onConflict((conflict) =>
            conflict.column("meta_key").doUpdateSet({
              meta_value: String(LISA_JOB_STATE_SCHEMA_VERSION),
              updated_at_ms: Date.now(),
            }),
          ),
      );
    },
    resolved,
    { operationLabel: "lisa-job-state.schema.ensure" },
  );
  ensuredLisaJobStateDatabases.add(database.db);
}

export function probeLisaJobStateStoreHealth(
  options: LisaJobStateSchemaOptions,
): LisaJobStateStoreHealth {
  const path = lisaJobStateDbPath(options);
  try {
    if (options.ensure === true) {
      ensureLisaJobStateSchema(options);
      const database = openOpenClawAgentDatabase(lisaJobStateDbOptions(options));
      return lisaJobStateHealth(database.db, path, options.agentId, true);
    }
    const result = withOpenClawAgentDatabaseReadOnly(
      ({ db, path: readOnlyPath }) => lisaJobStateHealth(db, readOnlyPath, options.agentId, false),
      lisaJobStateDbOptions(options),
    );
    if (result.found) {
      return result.value;
    }
    return {
      ok: false,
      available: false,
      owner: "openclaw_agent_sqlite_lisa_jobs",
      tablesPresent: [],
      missingTables: [...LISA_JOB_STATE_TABLES],
      schemaEnsured: false,
      databasePath: path,
      agentId: options.agentId,
      error: result.reason,
    };
  } catch (error) {
    return {
      ok: false,
      available: false,
      owner: "openclaw_agent_sqlite_lisa_jobs",
      tablesPresent: [],
      missingTables: [...LISA_JOB_STATE_TABLES],
      schemaEnsured: false,
      databasePath: path,
      agentId: options.agentId,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

export function listLisaDueJobRuns(
  options: LisaJobStateSchemaOptions,
  nowMs: number,
): LisaJobRunRecord[] {
  const { db } = openOpenClawAgentDatabase(lisaJobStateDbOptions(options));
  return lisaJobStateRows<LisaJobRunDbRow>(
    db,
    lisaJobStateKysely(db)
      .selectFrom("lisa_job_runs")
      .selectAll()
      .where("scheduled_at_ms", "<=", nowMs)
      .where("state", "in", ["pending", "running", "retrying"])
      .orderBy("scheduled_at_ms", "asc"),
  ).map(lisaJobStateRun);
}
export function listLisaUnresolvedDeliveryAttempts(
  options: LisaJobStateSchemaOptions,
): LisaDeliveryAttempt[] {
  const { db } = openOpenClawAgentDatabase(lisaJobStateDbOptions(options));
  return lisaJobStateRows<LisaDeliveryDbRow>(
    db,
    lisaJobStateKysely(db)
      .selectFrom("lisa_delivery_attempts")
      .selectAll()
      .where("status", "in", ["started", "failed"])
      .orderBy("created_at_ms", "asc"),
  ).map(lisaJobStateDelivery);
}
export function listLisaPendingWork(options: LisaJobStateSchemaOptions): LisaPendingWorkRecord[] {
  const { db } = openOpenClawAgentDatabase(lisaJobStateDbOptions(options));
  return lisaJobStateRows<LisaPendingWorkDbRow>(
    db,
    lisaJobStateKysely(db)
      .selectFrom("lisa_pending_work")
      .selectAll()
      .where("privacy_class", "=", "work")
      .where("delivery_state", "in", ["pending", "failed", "blocked"])
      .where("permanent_id", "is", null)
      .orderBy("created_at_ms", "asc"),
  ).map(lisaJobStatePending);
}
export function listLisaNonHealthDuePendingRecords(
  options: LisaJobStateSchemaOptions,
  nowMs: number,
): {
  readonly runs: readonly LisaJobRunRecord[];
  readonly deliveries: readonly LisaDeliveryAttempt[];
  readonly pendingWork: readonly LisaPendingWorkRecord[];
} {
  return {
    runs: listLisaDueJobRuns(options, nowMs),
    deliveries: listLisaUnresolvedDeliveryAttempts(options),
    pendingWork: listLisaPendingWork(options),
  };
}
export function requireHealthyLisaJobStateStore(
  options: LisaJobStateSchemaOptions,
): LisaJobStateStoreHealth {
  const result = probeLisaJobStateStoreHealth({ ...options, ensure: false });
  if (!result.ok) {
    throw new Error(
      `blocked_no_store: Lisa job state store unhealthy (${result.error ?? result.missingTables.join(",")})`,
    );
  }
  return result;
}
export function openHealthyLisaJobStateStore(
  options: LisaJobStateSchemaOptions,
): HealthyLisaJobStateStore {
  const result = requireHealthyLisaJobStateStore(options);
  return {
    [HEALTHY_LISA_JOB_STATE]: true,
    agentId: result.agentId,
    databasePath: result.databasePath,
  };
}
export function isHealthyLisaJobStateStore(value: unknown): value is HealthyLisaJobStateStore {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const candidate = value as HealthyLisaJobStateStore;
  const marker: unknown = candidate[HEALTHY_LISA_JOB_STATE];
  return (
    marker === true &&
    typeof candidate.agentId === "string" &&
    typeof candidate.databasePath === "string"
  );
}
export function lisaJobStateStoreOptionsFromCapability(
  value: HealthyLisaJobStateStore,
): LisaJobStateSchemaOptions {
  return { agentId: value.agentId, path: value.databasePath };
}
export function closeLisaJobStateStoreForTest(options: LisaJobStateSchemaOptions): boolean {
  return closeOpenClawAgentDatabaseByPath(lisaJobStateDbPath(options));
}
