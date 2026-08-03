/**
 * Durable Lisa stage-ops store (Repair / GitOps / Main Approve) on OpenClaw SQLite.
 *
 * Additive lazy-ensure tables — no schema_version bump. Fail-closed health probe
 * gates Repair supervisor install. IDE Development remains external/untouched.
 *
 * Pattern matches user-profiles: DDL via db.exec inside allowlisted ensure;
 * DML via getNodeSqliteKysely + executeSqliteQuerySync.
 */

import { randomUUID } from "node:crypto";
import { existsSync } from "node:fs";
import path from "node:path";
import type { DatabaseSync } from "node:sqlite";
import {
  executeSqliteQuerySync,
  executeSqliteQueryTakeFirstSync,
  getNodeSqliteKysely,
} from "../infra/kysely-sync.js";
import { LISA_STAGE_OPS_SCHEMA_SQL, LISA_STAGE_OPS_TABLES } from "./lisa-stage-ops-schema.js";
import { withOpenClawStateDatabaseReadOnly } from "./openclaw-state-db-readonly.js";
import { tableExists } from "./openclaw-state-db-schema-helpers.js";
import {
  closeOpenClawStateDatabaseForTest,
  openOpenClawStateDatabase,
  runOpenClawStateWriteTransaction,
  type OpenClawStateDatabaseOptions,
} from "./openclaw-state-db.js";
import { resolveOpenClawStateSqlitePath as resolveEnvOpenClawStateSqlitePath } from "./openclaw-state-db.paths.js";

export type LisaStageOpsStoreOptions = OpenClawStateDatabaseOptions & {
  /**
   * Absolute path to openclaw.sqlite (shared state DB).
   * Alias of `path` for workshop / stage-ops callers.
   */
  databasePath?: string;
  /** When true, CREATE TABLE IF NOT EXISTS during probe. Default false (read-only). */
  ensure?: boolean;
};

export type RepairBindingRow = {
  bindingKey: string;
  repository: string;
  branch: string;
  prNumber: number | null;
  headSha: string;
  createdAtMs: number;
  updatedAtMs: number;
};

export type RepairAttemptRow = {
  attemptId: string;
  bindingKey: string;
  attempt: number;
  dispatchedAtMs: number | null;
  outcome: "pending" | "succeeded" | "failed" | "stale_head" | "escalated" | "held";
  proofHeadSha: string | null;
  expiresAtMs: number | null;
  createdAtMs: number;
  updatedAtMs: number;
};

export type MainApprovePackageRow = {
  packageId: string;
  mondayDate: string;
  claimExpiresAtMs: number;
  itemsJson: string;
  createdAtMs: number;
  updatedAtMs: number;
};

export type MainApproveClaimRow = {
  claimId: string;
  packageId: string;
  claimedAtMs: number;
  expiresAtMs: number;
  status: "active" | "expired" | "consumed" | "released";
  createdAtMs: number;
  updatedAtMs: number;
};

export type LisaStageOpsStoreHealth = {
  ok: boolean;
  available: boolean;
  owner: "openclaw_sqlite_lisa_stage_ops";
  tablesPresent: readonly string[];
  missingTables: readonly string[];
  schemaEnsured: boolean;
  databasePath: string;
  error?: string;
};

type LisaStageOpsDatabase = {
  lisa_stage_repair_bindings: {
    binding_key: string;
    repository: string;
    branch: string;
    pr_number: number | null;
    head_sha: string;
    created_at_ms: number;
    updated_at_ms: number;
  };
  lisa_stage_repair_attempts: {
    attempt_id: string;
    binding_key: string;
    attempt: number;
    dispatched_at_ms: number | null;
    outcome: string;
    proof_head_sha: string | null;
    expires_at_ms: number | null;
    created_at_ms: number;
    updated_at_ms: number;
  };
  lisa_stage_main_approve_packages: {
    package_id: string;
    monday_date: string;
    claim_expires_at_ms: number;
    items_json: string;
    created_at_ms: number;
    updated_at_ms: number;
  };
  lisa_stage_main_approve_claims: {
    claim_id: string;
    package_id: string;
    claimed_at_ms: number;
    expires_at_ms: number;
    status: string;
    created_at_ms: number;
    updated_at_ms: number;
  };
  lisa_stage_ops_store_meta: {
    meta_key: string;
    meta_value: string;
    updated_at_ms: number;
  };
};

type RepairAttemptDbRow = LisaStageOpsDatabase["lisa_stage_repair_attempts"];

const META_SCHEMA_ENSURED = "schema_ensured_v1";
const ensuredDatabases = new WeakSet<DatabaseSync>();

function stageOpsDb(db: DatabaseSync) {
  return getNodeSqliteKysely<LisaStageOpsDatabase>(db);
}

function resolveStateOptions(options: LisaStageOpsStoreOptions): OpenClawStateDatabaseOptions {
  const resolvedPath = options.path ?? options.databasePath;
  return {
    ...(resolvedPath ? { path: resolvedPath } : {}),
    ...(options.env ? { env: options.env } : {}),
  };
}

function resolveDatabasePath(options: LisaStageOpsStoreOptions): string {
  const stateOptions = resolveStateOptions(options);
  if (stateOptions.path) {
    return stateOptions.path;
  }
  return resolveEnvOpenClawStateSqlitePath(stateOptions.env ?? process.env);
}

function toRepairAttemptRow(row: RepairAttemptDbRow): RepairAttemptRow {
  return {
    attemptId: row.attempt_id,
    bindingKey: row.binding_key,
    attempt: row.attempt,
    dispatchedAtMs: row.dispatched_at_ms,
    outcome: row.outcome as RepairAttemptRow["outcome"],
    proofHeadSha: row.proof_head_sha,
    expiresAtMs: row.expires_at_ms,
    createdAtMs: row.created_at_ms,
    updatedAtMs: row.updated_at_ms,
  };
}

function healthFromDb(
  db: DatabaseSync,
  databasePath: string,
  schemaEnsured: boolean,
): LisaStageOpsStoreHealth {
  const tablesPresent = LISA_STAGE_OPS_TABLES.filter((t) => tableExists(db, t));
  const missingTables = LISA_STAGE_OPS_TABLES.filter((t) => !tablesPresent.includes(t));
  const ok = missingTables.length === 0;
  return {
    ok,
    available: ok,
    owner: "openclaw_sqlite_lisa_stage_ops",
    tablesPresent,
    missingTables,
    schemaEnsured: schemaEnsured || ok,
    databasePath,
  };
}

/**
 * Resolve openclaw.sqlite under a state root directory (workshop / stage-ops).
 * Distinct from env-based `openclaw-state-db.paths` resolver.
 */
export function resolveOpenClawStateSqlitePath(stateDir: string): string {
  return path.join(stateDir, "state", "openclaw.sqlite");
}

export function ensureLisaStageOpsSchema(options: LisaStageOpsStoreOptions = {}): void {
  const stateOptions = resolveStateOptions(options);
  const database = openOpenClawStateDatabase(stateOptions);
  if (ensuredDatabases.has(database.db)) {
    return;
  }
  runOpenClawStateWriteTransaction(
    ({ db }) => {
      db.exec(LISA_STAGE_OPS_SCHEMA_SQL);
      const now = Date.now();
      executeSqliteQuerySync(
        db,
        stageOpsDb(db)
          .insertInto("lisa_stage_ops_store_meta")
          .values({
            meta_key: META_SCHEMA_ENSURED,
            meta_value: "1",
            updated_at_ms: now,
          })
          .onConflict((conflict) =>
            conflict.column("meta_key").doUpdateSet({
              meta_value: "1",
              updated_at_ms: now,
            }),
          ),
      );
    },
    stateOptions,
    { operationLabel: "lisa-stage-ops.schema.ensure" },
  );
  // Mark ensured only after the transaction commits; a rolled-back ensure must
  // retry the DDL on the next call instead of failing "no such table" forever.
  ensuredDatabases.add(database.db);
}

function prepareStoreForWrite(options: LisaStageOpsStoreOptions): void {
  if (options.ensure === true) {
    ensureLisaStageOpsSchema(options);
    return;
  }
  const health = probeLisaStageOpsStoreHealth({ ...options, ensure: false });
  if (!health.ok) {
    throw new Error(
      `blocked_no_store: lisa stage ops store unhealthy (${
        health.error ?? health.missingTables.join(",")
      })`,
    );
  }
}

/**
 * Fail closed when additive lisa_stage_* tables are missing.
 * Prefer coordinator/apply ensure before calling durable writers.
 */
export function requireHealthyLisaStageOpsStore(
  options: LisaStageOpsStoreOptions = {},
): LisaStageOpsStoreHealth {
  const health = probeLisaStageOpsStoreHealth({ ...options, ensure: false });
  if (!health.ok) {
    throw new Error(
      `blocked_no_store: lisa stage ops store unhealthy (${
        health.error ?? health.missingTables.join(",")
      })`,
    );
  }
  return health;
}

/**
 * Module-private brand for a healthy canonical store capability.
 * Not Symbol.for — callers cannot mint production auth by forging `{ available: true }`.
 */
const HEALTHY_LISA_STAGE_OPS_STORE = Symbol("openclaw.lisa_stage_ops.healthy");

/**
 * Sealed capability proving additive lisa_stage_* tables are healthy.
 * Only {@link openHealthyLisaStageOpsStore} may mint this; authorization paths
 * must require it structurally (runtime brand check + TypeScript opacity).
 */
export type HealthyLisaStageOpsStore = {
  readonly [HEALTHY_LISA_STAGE_OPS_STORE]: true;
  readonly databasePath: string;
};

/** Mint a sealed healthy-store capability after a fail-closed health probe. */
export function openHealthyLisaStageOpsStore(
  options: LisaStageOpsStoreOptions = {},
): HealthyLisaStageOpsStore {
  const health = requireHealthyLisaStageOpsStore(options);
  return {
    [HEALTHY_LISA_STAGE_OPS_STORE]: true,
    databasePath: health.databasePath,
  };
}

export function isHealthyLisaStageOpsStore(value: unknown): value is HealthyLisaStageOpsStore {
  return (
    typeof value === "object" &&
    value !== null &&
    (value as HealthyLisaStageOpsStore)[HEALTHY_LISA_STAGE_OPS_STORE] === true &&
    typeof (value as HealthyLisaStageOpsStore).databasePath === "string" &&
    (value as HealthyLisaStageOpsStore).databasePath.length > 0
  );
}

/** Options derived from a sealed capability (never trust caller-supplied availability flags). */
export function lisaStageOpsStoreOptionsFromCapability(
  store: HealthyLisaStageOpsStore,
): LisaStageOpsStoreOptions {
  return { databasePath: store.databasePath, path: store.databasePath };
}

export function probeLisaStageOpsStoreHealth(
  options: LisaStageOpsStoreOptions = {},
): LisaStageOpsStoreHealth {
  const databasePath = resolveDatabasePath(options);
  try {
    if (options.ensure === true) {
      ensureLisaStageOpsSchema(options);
      const { db } = openOpenClawStateDatabase(resolveStateOptions(options));
      return healthFromDb(db, databasePath, true);
    }
    // Read-only by default: never CREATE TABLE during a probe.
    if (!existsSync(databasePath)) {
      return {
        ok: false,
        available: false,
        owner: "openclaw_sqlite_lisa_stage_ops",
        tablesPresent: [],
        missingTables: [...LISA_STAGE_OPS_TABLES],
        schemaEnsured: false,
        databasePath,
        error: `ENOENT: no such file or directory, open '${databasePath}'`,
      };
    }
    return withOpenClawStateDatabaseReadOnly(
      ({ db }) => healthFromDb(db, databasePath, false),
      resolveStateOptions(options),
    );
  } catch (err) {
    return {
      ok: false,
      available: false,
      owner: "openclaw_sqlite_lisa_stage_ops",
      tablesPresent: [],
      missingTables: [...LISA_STAGE_OPS_TABLES],
      schemaEnsured: false,
      databasePath,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

export function upsertRepairBinding(
  options: LisaStageOpsStoreOptions,
  binding: {
    repository: string;
    branch: string;
    prNumber: number | null;
    headSha: string;
  },
  nowMs = Date.now(),
): RepairBindingRow {
  prepareStoreForWrite(options);
  const bindingKey = `${binding.repository}|${binding.branch}|${binding.prNumber ?? "-"}|${binding.headSha}`;
  const stateOptions = resolveStateOptions(options);
  return runOpenClawStateWriteTransaction(
    ({ db }) => {
      const existing = executeSqliteQueryTakeFirstSync(
        db,
        stageOpsDb(db)
          .selectFrom("lisa_stage_repair_bindings")
          .select("created_at_ms")
          .where("binding_key", "=", bindingKey),
      );
      const createdAtMs = existing?.created_at_ms ?? nowMs;
      executeSqliteQuerySync(
        db,
        stageOpsDb(db)
          .insertInto("lisa_stage_repair_bindings")
          .values({
            binding_key: bindingKey,
            repository: binding.repository,
            branch: binding.branch,
            pr_number: binding.prNumber,
            head_sha: binding.headSha,
            created_at_ms: createdAtMs,
            updated_at_ms: nowMs,
          })
          .onConflict((conflict) =>
            conflict.column("binding_key").doUpdateSet({
              repository: binding.repository,
              branch: binding.branch,
              pr_number: binding.prNumber,
              head_sha: binding.headSha,
              updated_at_ms: nowMs,
            }),
          ),
      );
      return {
        bindingKey,
        repository: binding.repository,
        branch: binding.branch,
        prNumber: binding.prNumber,
        headSha: binding.headSha,
        createdAtMs,
        updatedAtMs: nowMs,
      };
    },
    stateOptions,
    { operationLabel: "lisa-stage-ops.repair-binding.upsert" },
  );
}

export function recordRepairAttempt(
  options: LisaStageOpsStoreOptions,
  input: {
    bindingKey: string;
    attempt: number;
    dispatchedAtMs: number | null;
    outcome: RepairAttemptRow["outcome"];
    proofHeadSha?: string | null;
    expiresAtMs?: number | null;
    attemptId?: string;
  },
  nowMs = Date.now(),
): RepairAttemptRow {
  prepareStoreForWrite(options);
  const attemptId = input.attemptId ?? randomUUID();
  const stateOptions = resolveStateOptions(options);
  return runOpenClawStateWriteTransaction(
    ({ db }) => {
      const existing = executeSqliteQueryTakeFirstSync(
        db,
        stageOpsDb(db)
          .selectFrom("lisa_stage_repair_attempts")
          .select(["attempt_id", "created_at_ms"])
          .where("binding_key", "=", input.bindingKey)
          .where("attempt", "=", input.attempt),
      );
      const createdAtMs = existing?.created_at_ms ?? nowMs;
      const resolvedAttemptId = existing?.attempt_id ?? attemptId;
      executeSqliteQuerySync(
        db,
        stageOpsDb(db)
          .insertInto("lisa_stage_repair_attempts")
          .values({
            attempt_id: resolvedAttemptId,
            binding_key: input.bindingKey,
            attempt: input.attempt,
            dispatched_at_ms: input.dispatchedAtMs,
            outcome: input.outcome,
            proof_head_sha: input.proofHeadSha ?? null,
            expires_at_ms: input.expiresAtMs ?? null,
            created_at_ms: createdAtMs,
            updated_at_ms: nowMs,
          })
          .onConflict((conflict) =>
            conflict.columns(["binding_key", "attempt"]).doUpdateSet({
              dispatched_at_ms: input.dispatchedAtMs,
              outcome: input.outcome,
              proof_head_sha: input.proofHeadSha ?? null,
              expires_at_ms: input.expiresAtMs ?? null,
              updated_at_ms: nowMs,
            }),
          ),
      );
      const row = executeSqliteQueryTakeFirstSync(
        db,
        stageOpsDb(db)
          .selectFrom("lisa_stage_repair_attempts")
          .selectAll()
          .where("binding_key", "=", input.bindingKey)
          .where("attempt", "=", input.attempt),
      );
      if (!row) {
        throw new Error("lisa_stage_repair_attempts row missing after upsert");
      }
      return toRepairAttemptRow(row);
    },
    stateOptions,
    { operationLabel: "lisa-stage-ops.repair-attempt.record" },
  );
}

export function listRepairAttempts(
  options: LisaStageOpsStoreOptions,
  bindingKey: string,
): RepairAttemptRow[] {
  prepareStoreForWrite(options);
  const { db } = openOpenClawStateDatabase(resolveStateOptions(options));
  const rows = executeSqliteQuerySync(
    db,
    stageOpsDb(db)
      .selectFrom("lisa_stage_repair_attempts")
      .selectAll()
      .where("binding_key", "=", bindingKey)
      .orderBy("attempt", "asc"),
  ).rows;
  return rows.map(toRepairAttemptRow);
}

export function expireStaleRepairAttempts(
  options: LisaStageOpsStoreOptions,
  nowMs = Date.now(),
): number {
  prepareStoreForWrite(options);
  return runOpenClawStateWriteTransaction(
    ({ db }) => {
      const result = executeSqliteQuerySync(
        db,
        stageOpsDb(db)
          .updateTable("lisa_stage_repair_attempts")
          .set({ outcome: "held", updated_at_ms: nowMs })
          .where("expires_at_ms", "is not", null)
          .where("expires_at_ms", "<", nowMs)
          .where("outcome", "=", "pending"),
      );
      return Number(result.numAffectedRows ?? 0);
    },
    resolveStateOptions(options),
    { operationLabel: "lisa-stage-ops.repair-attempt.expire" },
  );
}

export function putMainApprovePackage(
  options: LisaStageOpsStoreOptions,
  input: {
    packageId: string;
    mondayDate: string;
    claimExpiresAtMs: number;
    itemsJson: string;
  },
  nowMs = Date.now(),
): MainApprovePackageRow {
  prepareStoreForWrite(options);
  return runOpenClawStateWriteTransaction(
    ({ db }) => {
      const existing = executeSqliteQueryTakeFirstSync(
        db,
        stageOpsDb(db)
          .selectFrom("lisa_stage_main_approve_packages")
          .select("created_at_ms")
          .where("package_id", "=", input.packageId),
      );
      const createdAtMs = existing?.created_at_ms ?? nowMs;
      executeSqliteQuerySync(
        db,
        stageOpsDb(db)
          .insertInto("lisa_stage_main_approve_packages")
          .values({
            package_id: input.packageId,
            monday_date: input.mondayDate,
            claim_expires_at_ms: input.claimExpiresAtMs,
            items_json: input.itemsJson,
            created_at_ms: createdAtMs,
            updated_at_ms: nowMs,
          })
          .onConflict((conflict) =>
            conflict.column("package_id").doUpdateSet({
              monday_date: input.mondayDate,
              claim_expires_at_ms: input.claimExpiresAtMs,
              items_json: input.itemsJson,
              updated_at_ms: nowMs,
            }),
          ),
      );
      return {
        packageId: input.packageId,
        mondayDate: input.mondayDate,
        claimExpiresAtMs: input.claimExpiresAtMs,
        itemsJson: input.itemsJson,
        createdAtMs,
        updatedAtMs: nowMs,
      };
    },
    resolveStateOptions(options),
    { operationLabel: "lisa-stage-ops.main-approve.put" },
  );
}

export function claimMainApprovePackage(
  options: LisaStageOpsStoreOptions,
  input: {
    packageId: string;
    expiresAtMs: number;
    claimId?: string;
  },
  nowMs = Date.now(),
): MainApproveClaimRow | { ok: false; reason: "expired_package" | "claim_conflict" } {
  prepareStoreForWrite(options);
  return runOpenClawStateWriteTransaction(
    ({ db }) => {
      const pkg = executeSqliteQueryTakeFirstSync(
        db,
        stageOpsDb(db)
          .selectFrom("lisa_stage_main_approve_packages")
          .select(["package_id", "claim_expires_at_ms"])
          .where("package_id", "=", input.packageId),
      );
      if (!pkg || pkg.claim_expires_at_ms < nowMs) {
        return { ok: false as const, reason: "expired_package" as const };
      }
      const existing = executeSqliteQueryTakeFirstSync(
        db,
        stageOpsDb(db)
          .selectFrom("lisa_stage_main_approve_claims")
          .select(["claim_id", "status", "expires_at_ms", "created_at_ms"])
          .where("package_id", "=", input.packageId),
      );
      if (existing && existing.status === "active" && existing.expires_at_ms >= nowMs) {
        return { ok: false as const, reason: "claim_conflict" as const };
      }
      const claimId = input.claimId ?? randomUUID();
      const createdAtMs = existing?.created_at_ms ?? nowMs;
      executeSqliteQuerySync(
        db,
        stageOpsDb(db)
          .insertInto("lisa_stage_main_approve_claims")
          .values({
            claim_id: claimId,
            package_id: input.packageId,
            claimed_at_ms: nowMs,
            expires_at_ms: input.expiresAtMs,
            status: "active",
            created_at_ms: createdAtMs,
            updated_at_ms: nowMs,
          })
          .onConflict((conflict) =>
            conflict.column("package_id").doUpdateSet({
              claim_id: claimId,
              claimed_at_ms: nowMs,
              expires_at_ms: input.expiresAtMs,
              status: "active",
              updated_at_ms: nowMs,
            }),
          ),
      );
      return {
        claimId,
        packageId: input.packageId,
        claimedAtMs: nowMs,
        expiresAtMs: input.expiresAtMs,
        status: "active" as const,
        createdAtMs,
        updatedAtMs: nowMs,
      };
    },
    resolveStateOptions(options),
    { operationLabel: "lisa-stage-ops.main-approve.claim" },
  );
}

export function expireMainApproveClaims(
  options: LisaStageOpsStoreOptions,
  nowMs = Date.now(),
): number {
  prepareStoreForWrite(options);
  return runOpenClawStateWriteTransaction(
    ({ db }) => {
      const result = executeSqliteQuerySync(
        db,
        stageOpsDb(db)
          .updateTable("lisa_stage_main_approve_claims")
          .set({ status: "expired", updated_at_ms: nowMs })
          .where("status", "=", "active")
          .where("expires_at_ms", "<", nowMs),
      );
      return Number(result.numAffectedRows ?? 0);
    },
    resolveStateOptions(options),
    { operationLabel: "lisa-stage-ops.main-approve.expire" },
  );
}

/** Close cached OpenClaw state handles (tests). */
export function closeLisaStageOpsStore(_db?: DatabaseSync): void {
  closeOpenClawStateDatabaseForTest();
}
