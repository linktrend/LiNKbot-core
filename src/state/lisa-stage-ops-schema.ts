/**
 * Additive Lisa stage-ops tables for the shared OpenClaw state DB.
 *
 * Purely additive: CREATE TABLE IF NOT EXISTS only. Do not bump
 * OPENCLAW_STATE_SCHEMA_VERSION. Lazy-ensure on first feature use
 * (same ownership pattern as user-profiles).
 *
 * Canonical owner: src/state/lisa-stage-ops-store.ts.
 * Workshop re-exports: linkbots/lisa/ops/lisa-stage-ops-*.ts.
 * IDE Development remains external.
 */

export const LISA_STAGE_OPS_SCHEMA_OWNER = "lisa-stage-ops" as const;
export const LISA_STAGE_OPS_SCHEMA_KIND = "additive_lazy_ensure" as const;

export const LISA_STAGE_OPS_SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS lisa_stage_repair_bindings (
  binding_key TEXT NOT NULL PRIMARY KEY,
  repository TEXT NOT NULL,
  branch TEXT NOT NULL,
  pr_number INTEGER,
  head_sha TEXT NOT NULL,
  created_at_ms INTEGER NOT NULL,
  updated_at_ms INTEGER NOT NULL
) STRICT;

CREATE TABLE IF NOT EXISTS lisa_stage_repair_attempts (
  attempt_id TEXT NOT NULL PRIMARY KEY,
  binding_key TEXT NOT NULL,
  attempt INTEGER NOT NULL,
  dispatched_at_ms INTEGER,
  outcome TEXT NOT NULL,
  proof_head_sha TEXT,
  expires_at_ms INTEGER,
  created_at_ms INTEGER NOT NULL,
  updated_at_ms INTEGER NOT NULL,
  UNIQUE (binding_key, attempt)
) STRICT;

CREATE INDEX IF NOT EXISTS idx_lisa_stage_repair_attempts_binding
  ON lisa_stage_repair_attempts(binding_key);

CREATE INDEX IF NOT EXISTS idx_lisa_stage_repair_attempts_expires
  ON lisa_stage_repair_attempts(expires_at_ms);

CREATE TABLE IF NOT EXISTS lisa_stage_main_approve_packages (
  package_id TEXT NOT NULL PRIMARY KEY,
  monday_date TEXT NOT NULL,
  claim_expires_at_ms INTEGER NOT NULL,
  items_json TEXT NOT NULL,
  created_at_ms INTEGER NOT NULL,
  updated_at_ms INTEGER NOT NULL
) STRICT;

CREATE INDEX IF NOT EXISTS idx_lisa_stage_main_approve_packages_expires
  ON lisa_stage_main_approve_packages(claim_expires_at_ms);

CREATE TABLE IF NOT EXISTS lisa_stage_main_approve_claims (
  claim_id TEXT NOT NULL PRIMARY KEY,
  package_id TEXT NOT NULL,
  claimed_at_ms INTEGER NOT NULL,
  expires_at_ms INTEGER NOT NULL,
  status TEXT NOT NULL,
  created_at_ms INTEGER NOT NULL,
  updated_at_ms INTEGER NOT NULL,
  UNIQUE (package_id)
) STRICT;

CREATE INDEX IF NOT EXISTS idx_lisa_stage_main_approve_claims_expires
  ON lisa_stage_main_approve_claims(expires_at_ms);

CREATE TABLE IF NOT EXISTS lisa_stage_ops_store_meta (
  meta_key TEXT NOT NULL PRIMARY KEY,
  meta_value TEXT NOT NULL,
  updated_at_ms INTEGER NOT NULL
) STRICT;
`;

export const LISA_STAGE_OPS_TABLES = [
  "lisa_stage_repair_bindings",
  "lisa_stage_repair_attempts",
  "lisa_stage_main_approve_packages",
  "lisa_stage_main_approve_claims",
  "lisa_stage_ops_store_meta",
] as const;
