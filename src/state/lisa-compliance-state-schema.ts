/** Additive Lisa compliance tables in Lisa's per-agent database. */
export const LISA_COMPLIANCE_TABLES = [
  "lisa_selfie_days",
  "lisa_battery_observations",
  "lisa_battery_rate_models",
  "lisa_battery_predictions",
] as const;

export const LISA_COMPLIANCE_SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS lisa_selfie_days (
  local_date TEXT NOT NULL PRIMARY KEY, status TEXT NOT NULL,
  reported_at_ms INTEGER, source_event_id TEXT UNIQUE, acknowledgment_state TEXT NOT NULL
) STRICT;
CREATE TABLE IF NOT EXISTS lisa_battery_observations (
  source_event_id TEXT NOT NULL PRIMARY KEY, observed_at_ms INTEGER NOT NULL,
  percentage INTEGER NOT NULL CHECK(percentage BETWEEN 0 AND 100),
  plugged INTEGER NOT NULL CHECK(plugged IN (0,1)), context TEXT NOT NULL,
  usable INTEGER NOT NULL CHECK(usable IN (0,1))
) STRICT;
CREATE TABLE IF NOT EXISTS lisa_battery_rate_models (
  context TEXT NOT NULL, direction TEXT NOT NULL, percent_per_hour REAL NOT NULL,
  sample_count INTEGER NOT NULL, confidence_band TEXT NOT NULL, updated_at_ms INTEGER NOT NULL,
  PRIMARY KEY(context, direction)
) STRICT;
CREATE TABLE IF NOT EXISTS lisa_battery_predictions (
  observation_generation TEXT NOT NULL PRIMARY KEY, predicted_35_at_ms INTEGER,
  next_expected_charge_at_ms INTEGER, confidence TEXT NOT NULL, freshness TEXT NOT NULL,
  alert_state TEXT NOT NULL, idempotency_key TEXT UNIQUE
) STRICT;`;
