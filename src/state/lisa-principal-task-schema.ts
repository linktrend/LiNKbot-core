/**
 * Additive Lisa Principal-task tables in Lisa's private per-agent database.
 *
 * These tables intentionally do not share the execution task registry. A
 * Principal task is the durable user-facing work item; execution attempts and
 * agent-run state remain owned by their existing stores.
 */
export const LISA_PRINCIPAL_TASK_SCHEMA_KIND = "additive_lazy_ensure" as const;

export const LISA_PRINCIPAL_TASK_TABLES = [
  "lisa_principal_tasks",
  "lisa_principal_task_evidence",
  "lisa_principal_task_references",
  "lisa_principal_task_intake_events",
  "lisa_principal_task_aliases",
  "lisa_principal_task_sequences",
] as const;

export const LISA_PRINCIPAL_TASK_SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS lisa_principal_tasks (
  internal_id TEXT NOT NULL PRIMARY KEY,
  display_ref TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  normalized_title TEXT NOT NULL,
  source TEXT NOT NULL CHECK(source IN ('explicit', 'inferred')),
  explicit INTEGER NOT NULL CHECK(explicit IN (0, 1)),
  confirmed INTEGER NOT NULL CHECK(confirmed IN (0, 1)),
  urgent INTEGER NOT NULL CHECK(urgent IN (0, 1)),
  status TEXT NOT NULL CHECK(status IN (
    'provisional', 'confirmed_ready', 'scheduled', 'in_progress',
    'blocked', 'awaiting_carlos', 'awaiting_other',
    'completed_pending_evidence', 'completed_verified'
  )),
  owner TEXT NOT NULL CHECK(owner IN ('Carlos', 'Lisa', 'subordinate-agent', 'conversation-work')),
  priority TEXT NOT NULL CHECK(priority IN (
    'prevent-harm-or-hard-deadline', 'unblock-dependent-work',
    'current-weekly-outcome', 'routine-maintenance', 'optional-improvement'
  )),
  difficulty TEXT NOT NULL CHECK(difficulty IN ('easy', 'medium', 'hard')),
  effort_periods REAL NOT NULL CHECK(effort_periods > 0),
  importance INTEGER NOT NULL CHECK(importance BETWEEN 1 AND 5),
  dependencies_json TEXT NOT NULL,
  capacity TEXT NOT NULL CHECK(capacity IN ('high', 'normal', 'reduced', 'unavailable', 'recovered')),
  due_date TEXT,
  parent_internal_id TEXT,
  related_key TEXT,
  confirmation_due TEXT NOT NULL CHECK(confirmation_due IN ('immediate', 'next-review')),
  estimates_json TEXT NOT NULL,
  created_at_ms INTEGER NOT NULL,
  updated_at_ms INTEGER NOT NULL
) STRICT;

CREATE TABLE IF NOT EXISTS lisa_principal_task_evidence (
  evidence_id TEXT NOT NULL PRIMARY KEY,
  task_internal_id TEXT NOT NULL,
  source TEXT NOT NULL CHECK(source IN ('Carlos', 'Lisa', 'subordinate-agent')),
  description TEXT NOT NULL,
  reference TEXT NOT NULL,
  created_at_ms INTEGER NOT NULL,
  UNIQUE(task_internal_id, source, reference)
) STRICT;

CREATE TABLE IF NOT EXISTS lisa_principal_task_references (
  task_internal_id TEXT NOT NULL,
  reference_type TEXT NOT NULL CHECK(reference_type IN (
    'google_task', 'other_task', 'brain_advisory', 'program',
    'email', 'message', 'handoff', 'channel_event'
  )),
  external_reference TEXT NOT NULL,
  immutable INTEGER NOT NULL CHECK(immutable IN (0, 1)),
  created_at_ms INTEGER NOT NULL,
  PRIMARY KEY(reference_type, external_reference)
) STRICT;

CREATE TABLE IF NOT EXISTS lisa_principal_task_intake_events (
  channel TEXT NOT NULL,
  event_id TEXT NOT NULL,
  task_internal_id TEXT NOT NULL,
  created_at_ms INTEGER NOT NULL,
  PRIMARY KEY(channel, event_id)
) STRICT;

CREATE TABLE IF NOT EXISTS lisa_principal_task_aliases (
  alias_internal_id TEXT NOT NULL PRIMARY KEY,
  canonical_internal_id TEXT NOT NULL,
  reason TEXT NOT NULL,
  resolved_at_ms INTEGER NOT NULL
) STRICT;

CREATE TABLE IF NOT EXISTS lisa_principal_task_sequences (
  sequence_name TEXT NOT NULL PRIMARY KEY,
  next_value INTEGER NOT NULL CHECK(next_value > 0)
) STRICT;`;
