/** Additive Lisa compliance tables in Lisa's private per-agent database. */
export const LISA_COMPLIANCE_SCHEMA_KIND = "additive_lazy_ensure" as const;

export const LISA_COMPLIANCE_TABLES = [
  "lisa_selfie_days",
  "lisa_battery_observations",
  "lisa_battery_rate_models",
  "lisa_battery_predictions",
] as const;

export const LISA_COMPLIANCE_SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS lisa_selfie_days (
  local_date TEXT NOT NULL PRIMARY KEY,
  status TEXT NOT NULL CHECK(status IN ('Completed', 'Reported Late', 'Missed')),
  reported_at_ms INTEGER,
  source_event_id TEXT UNIQUE,
  acknowledgment_state TEXT NOT NULL
) STRICT;

CREATE TABLE IF NOT EXISTS lisa_battery_observations (
  source_event_id TEXT NOT NULL PRIMARY KEY,
  observed_at_ms INTEGER NOT NULL,
  percentage INTEGER NOT NULL CHECK(percentage BETWEEN 0 AND 100),
  plugged INTEGER NOT NULL CHECK(plugged IN (0, 1)),
  context TEXT NOT NULL CHECK(context IN ('desk', 'bedside', 'discharging')),
  routine_changed INTEGER NOT NULL CHECK(routine_changed IN (0, 1)),
  usable INTEGER NOT NULL CHECK(usable IN (0, 1))
) STRICT;

CREATE TABLE IF NOT EXISTS lisa_battery_rate_models (
  context TEXT NOT NULL CHECK(context IN ('desk', 'bedside', 'discharging')),
  direction TEXT NOT NULL CHECK(direction IN ('charging', 'discharging')),
  percent_per_hour REAL NOT NULL,
  previous_percent_per_hour REAL,
  sample_count INTEGER NOT NULL,
  confidence_band TEXT NOT NULL CHECK(confidence_band IN ('low', 'medium', 'high')),
  updated_at_ms INTEGER NOT NULL,
  evidence_start_at_ms INTEGER NOT NULL,
  evidence_end_at_ms INTEGER NOT NULL,
  source_observation_id TEXT NOT NULL,
  PRIMARY KEY(context, direction)
) STRICT;

CREATE TABLE IF NOT EXISTS lisa_battery_predictions (
  observation_generation TEXT NOT NULL PRIMARY KEY,
  predicted_35_at_ms INTEGER,
  next_expected_charge_at_ms INTEGER NOT NULL,
  confidence TEXT NOT NULL CHECK(confidence IN ('low', 'medium', 'high')),
  freshness TEXT NOT NULL CHECK(freshness IN ('fresh', 'stale', 'unknown')),
  alert_state TEXT NOT NULL CHECK(alert_state IN ('none', 'due', 'insufficient_data')),
  idempotency_key TEXT UNIQUE
) STRICT;`;
