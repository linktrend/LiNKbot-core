/**
 * Workshop Lisa stage-ops store façade for `node --experimental-strip-types --test`.
 *
 * Schema DDL is owned by `src/state/lisa-stage-ops-schema.ts` (re-exported via
 * `./lisa-stage-ops-schema.ts`). OpenClaw runtime ownership is the Kysely-backed
 * `src/state/lisa-stage-ops-store.ts` (pnpm lint:kysely + Vitest).
 *
 * This façade keeps a DatabaseSync API so workshop node:test does not load the
 * full OpenClaw state-db / package graph. Do not invent a second schema.
 */

import { randomUUID } from "node:crypto";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { LISA_STAGE_OPS_SCHEMA_SQL, LISA_STAGE_OPS_TABLES } from "./lisa-stage-ops-schema.ts";

export type LisaStageOpsStoreOptions = {
  /** Absolute path to openclaw.sqlite (shared state DB). */
  databasePath: string;
  /** Optional injected DB (tests). When set, databasePath is ignored for open. */
  db?: DatabaseSync;
  /** When true, CREATE TABLE IF NOT EXISTS. Default false for read-only probes. */
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

const META_SCHEMA_ENSURED = "schema_ensured_v1";

function openDb(options: LisaStageOpsStoreOptions): DatabaseSync {
  if (options.db) return options.db;
  mkdirSync(path.dirname(options.databasePath), { recursive: true });
  return new DatabaseSync(options.databasePath);
}

function maybeEnsure(options: LisaStageOpsStoreOptions, db: DatabaseSync): void {
  if (options.ensure === true) {
    db.exec(LISA_STAGE_OPS_SCHEMA_SQL);
    const now = Date.now();
    db.prepare(
      `INSERT INTO lisa_stage_ops_store_meta (meta_key, meta_value, updated_at_ms)
       VALUES (?, '1', ?)
       ON CONFLICT(meta_key) DO UPDATE SET meta_value = excluded.meta_value, updated_at_ms = excluded.updated_at_ms`,
    ).run(META_SCHEMA_ENSURED, now);
  }
}

function tableNames(db: DatabaseSync): string[] {
  const rows = db
    .prepare(`SELECT name FROM sqlite_master WHERE type = 'table' ORDER BY name`)
    .all() as Array<{ name: string }>;
  return rows.map((r) => r.name);
}

export function ensureLisaStageOpsSchema(options: LisaStageOpsStoreOptions): void {
  const db = openDb(options);
  maybeEnsure({ ...options, ensure: true }, db);
}

export function probeLisaStageOpsStoreHealth(
  options: LisaStageOpsStoreOptions,
): LisaStageOpsStoreHealth {
  try {
    // Read-only by default: never CREATE TABLE during a probe unless ensure=true.
    const db = options.db
      ? options.db
      : new DatabaseSync(options.databasePath, { readOnly: options.ensure !== true });
    if (options.ensure === true) {
      maybeEnsure(options, db);
    }
    const present = tableNames(db);
    const missing = LISA_STAGE_OPS_TABLES.filter((t) => !present.includes(t));
    const ok = missing.length === 0;
    return {
      ok,
      available: ok,
      owner: "openclaw_sqlite_lisa_stage_ops",
      tablesPresent: LISA_STAGE_OPS_TABLES.filter((t) => present.includes(t)),
      missingTables: missing,
      schemaEnsured: options.ensure === true || missing.length === 0,
      databasePath: options.databasePath,
    };
  } catch (err) {
    return {
      ok: false,
      available: false,
      owner: "openclaw_sqlite_lisa_stage_ops",
      tablesPresent: [],
      missingTables: [...LISA_STAGE_OPS_TABLES],
      schemaEnsured: false,
      databasePath: options.databasePath,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

export function resolveOpenClawStateSqlitePath(stateDir: string): string {
  return path.join(stateDir, "state", "openclaw.sqlite");
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
  const db = openDb(options);
  ensureLisaStageOpsSchema({ ...options, db, ensure: true });
  const bindingKey = `${binding.repository}|${binding.branch}|${binding.prNumber ?? "-"}|${binding.headSha}`;
  db.prepare(
    `INSERT INTO lisa_stage_repair_bindings
      (binding_key, repository, branch, pr_number, head_sha, created_at_ms, updated_at_ms)
     VALUES (?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(binding_key) DO UPDATE SET
       repository = excluded.repository,
       branch = excluded.branch,
       pr_number = excluded.pr_number,
       head_sha = excluded.head_sha,
       updated_at_ms = excluded.updated_at_ms`,
  ).run(
    bindingKey,
    binding.repository,
    binding.branch,
    binding.prNumber,
    binding.headSha,
    nowMs,
    nowMs,
  );
  return {
    bindingKey,
    repository: binding.repository,
    branch: binding.branch,
    prNumber: binding.prNumber,
    headSha: binding.headSha,
    createdAtMs: nowMs,
    updatedAtMs: nowMs,
  };
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
  const db = openDb(options);
  ensureLisaStageOpsSchema({ ...options, db, ensure: true });
  const attemptId = input.attemptId ?? randomUUID();
  db.prepare(
    `INSERT INTO lisa_stage_repair_attempts
      (attempt_id, binding_key, attempt, dispatched_at_ms, outcome, proof_head_sha, expires_at_ms, created_at_ms, updated_at_ms)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(binding_key, attempt) DO UPDATE SET
       dispatched_at_ms = excluded.dispatched_at_ms,
       outcome = excluded.outcome,
       proof_head_sha = excluded.proof_head_sha,
       expires_at_ms = excluded.expires_at_ms,
       updated_at_ms = excluded.updated_at_ms`,
  ).run(
    attemptId,
    input.bindingKey,
    input.attempt,
    input.dispatchedAtMs,
    input.outcome,
    input.proofHeadSha ?? null,
    input.expiresAtMs ?? null,
    nowMs,
    nowMs,
  );
  const row = db
    .prepare(
      `SELECT attempt_id, binding_key, attempt, dispatched_at_ms, outcome, proof_head_sha, expires_at_ms, created_at_ms, updated_at_ms
       FROM lisa_stage_repair_attempts WHERE binding_key = ? AND attempt = ?`,
    )
    .get(input.bindingKey, input.attempt) as {
    attempt_id: string;
    binding_key: string;
    attempt: number;
    dispatched_at_ms: number | null;
    outcome: RepairAttemptRow["outcome"];
    proof_head_sha: string | null;
    expires_at_ms: number | null;
    created_at_ms: number;
    updated_at_ms: number;
  };
  return {
    attemptId: row.attempt_id,
    bindingKey: row.binding_key,
    attempt: row.attempt,
    dispatchedAtMs: row.dispatched_at_ms,
    outcome: row.outcome,
    proofHeadSha: row.proof_head_sha,
    expiresAtMs: row.expires_at_ms,
    createdAtMs: row.created_at_ms,
    updatedAtMs: row.updated_at_ms,
  };
}

export function listRepairAttempts(
  options: LisaStageOpsStoreOptions,
  bindingKey: string,
): RepairAttemptRow[] {
  const db = openDb(options);
  ensureLisaStageOpsSchema({ ...options, db, ensure: true });
  const rows = db
    .prepare(
      `SELECT attempt_id, binding_key, attempt, dispatched_at_ms, outcome, proof_head_sha, expires_at_ms, created_at_ms, updated_at_ms
       FROM lisa_stage_repair_attempts WHERE binding_key = ? ORDER BY attempt ASC`,
    )
    .all(bindingKey) as Array<{
    attempt_id: string;
    binding_key: string;
    attempt: number;
    dispatched_at_ms: number | null;
    outcome: RepairAttemptRow["outcome"];
    proof_head_sha: string | null;
    expires_at_ms: number | null;
    created_at_ms: number;
    updated_at_ms: number;
  }>;
  return rows.map((row) => ({
    attemptId: row.attempt_id,
    bindingKey: row.binding_key,
    attempt: row.attempt,
    dispatchedAtMs: row.dispatched_at_ms,
    outcome: row.outcome,
    proofHeadSha: row.proof_head_sha,
    expiresAtMs: row.expires_at_ms,
    createdAtMs: row.created_at_ms,
    updatedAtMs: row.updated_at_ms,
  }));
}

export function expireStaleRepairAttempts(
  options: LisaStageOpsStoreOptions,
  nowMs = Date.now(),
): number {
  const db = openDb(options);
  ensureLisaStageOpsSchema({ ...options, db, ensure: true });
  const result = db
    .prepare(
      `UPDATE lisa_stage_repair_attempts
       SET outcome = 'held', updated_at_ms = ?
       WHERE expires_at_ms IS NOT NULL AND expires_at_ms < ? AND outcome = 'pending'`,
    )
    .run(nowMs, nowMs);
  return Number(result.changes ?? 0);
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
  const db = openDb(options);
  ensureLisaStageOpsSchema({ ...options, db, ensure: true });
  db.prepare(
    `INSERT INTO lisa_stage_main_approve_packages
      (package_id, monday_date, claim_expires_at_ms, items_json, created_at_ms, updated_at_ms)
     VALUES (?, ?, ?, ?, ?, ?)
     ON CONFLICT(package_id) DO UPDATE SET
       monday_date = excluded.monday_date,
       claim_expires_at_ms = excluded.claim_expires_at_ms,
       items_json = excluded.items_json,
       updated_at_ms = excluded.updated_at_ms`,
  ).run(input.packageId, input.mondayDate, input.claimExpiresAtMs, input.itemsJson, nowMs, nowMs);
  return {
    packageId: input.packageId,
    mondayDate: input.mondayDate,
    claimExpiresAtMs: input.claimExpiresAtMs,
    itemsJson: input.itemsJson,
    createdAtMs: nowMs,
    updatedAtMs: nowMs,
  };
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
  const db = openDb(options);
  ensureLisaStageOpsSchema({ ...options, db, ensure: true });
  const pkg = db
    .prepare(
      `SELECT package_id, claim_expires_at_ms FROM lisa_stage_main_approve_packages WHERE package_id = ?`,
    )
    .get(input.packageId) as { package_id: string; claim_expires_at_ms: number } | undefined;
  if (!pkg || pkg.claim_expires_at_ms < nowMs) {
    return { ok: false, reason: "expired_package" };
  }
  const existing = db
    .prepare(
      `SELECT claim_id, status, expires_at_ms FROM lisa_stage_main_approve_claims WHERE package_id = ?`,
    )
    .get(input.packageId) as
    | { claim_id: string; status: string; expires_at_ms: number }
    | undefined;
  if (existing && existing.status === "active" && existing.expires_at_ms >= nowMs) {
    return { ok: false, reason: "claim_conflict" };
  }
  const claimId = input.claimId ?? randomUUID();
  db.prepare(
    `INSERT INTO lisa_stage_main_approve_claims
      (claim_id, package_id, claimed_at_ms, expires_at_ms, status, created_at_ms, updated_at_ms)
     VALUES (?, ?, ?, ?, 'active', ?, ?)
     ON CONFLICT(package_id) DO UPDATE SET
       claim_id = excluded.claim_id,
       claimed_at_ms = excluded.claimed_at_ms,
       expires_at_ms = excluded.expires_at_ms,
       status = 'active',
       updated_at_ms = excluded.updated_at_ms`,
  ).run(claimId, input.packageId, nowMs, input.expiresAtMs, nowMs, nowMs);
  return {
    claimId,
    packageId: input.packageId,
    claimedAtMs: nowMs,
    expiresAtMs: input.expiresAtMs,
    status: "active",
    createdAtMs: nowMs,
    updatedAtMs: nowMs,
  };
}

export function expireMainApproveClaims(
  options: LisaStageOpsStoreOptions,
  nowMs = Date.now(),
): number {
  const db = openDb(options);
  ensureLisaStageOpsSchema({ ...options, db, ensure: true });
  const result = db
    .prepare(
      `UPDATE lisa_stage_main_approve_claims
       SET status = 'expired', updated_at_ms = ?
       WHERE status = 'active' AND expires_at_ms < ?`,
    )
    .run(nowMs, nowMs);
  return Number(result.changes ?? 0);
}

/** Close an injected/on-disk DatabaseSync opened by this module (tests). */
export function closeLisaStageOpsStore(db: DatabaseSync): void {
  db.close();
}
