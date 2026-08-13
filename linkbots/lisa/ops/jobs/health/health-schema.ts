/** Dedicated private schema. It is intentionally not part of OpenClaw state. */
export const LISA_PRIVATE_HEALTH_SCHEMA_VERSION = 1;

export const LISA_PRIVATE_HEALTH_SCHEMA_SQL = `
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS health_schema_meta (
  schema_version INTEGER PRIMARY KEY CHECK (schema_version = 1)
) STRICT;

CREATE TABLE IF NOT EXISTS observations (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL,
  observed_at_ms INTEGER NOT NULL,
  value_json TEXT NOT NULL,
  unit TEXT,
  source_code TEXT NOT NULL CHECK (source_code IN ('user_report', 'photograph_or_document', 'doctor_report', 'device_reading', 'lisa_calculation', 'inference')),
  confidence TEXT NOT NULL CHECK (confidence IN ('low', 'medium', 'high')),
  status TEXT NOT NULL CHECK (status IN ('reported', 'calculated', 'estimated', 'verified', 'not_reported')),
  attachment_ref TEXT,
  created_at_ms INTEGER NOT NULL
) STRICT;

CREATE TABLE IF NOT EXISTS corrections (
  id TEXT PRIMARY KEY,
  observation_id TEXT NOT NULL REFERENCES observations(id),
  replacement_value_json TEXT NOT NULL,
  reason TEXT NOT NULL,
  corrected_at_ms INTEGER NOT NULL,
  provenance_code TEXT NOT NULL CHECK (provenance_code IN ('user_report', 'photograph_or_document', 'doctor_report', 'device_reading', 'lisa_calculation', 'inference'))
) STRICT;

CREATE TABLE IF NOT EXISTS daily_checkpoints (
  id TEXT PRIMARY KEY,
  local_date TEXT NOT NULL,
  checkpoint TEXT NOT NULL CHECK (checkpoint IN ('morning', 'midday', 'evening')),
  fields_json TEXT NOT NULL,
  missing_fields_json TEXT NOT NULL,
  acknowledgment TEXT NOT NULL CHECK (acknowledgment IN ('pending', 'acknowledged')),
  created_at_ms INTEGER NOT NULL,
  UNIQUE (local_date, checkpoint)
) STRICT;

CREATE TABLE IF NOT EXISTS treatment_events (
  id TEXT PRIMARY KEY,
  event_type TEXT NOT NULL,
  effective_at_ms INTEGER NOT NULL,
  fields_json TEXT NOT NULL,
  source_code TEXT NOT NULL CHECK (source_code IN ('user_report', 'photograph_or_document', 'doctor_report', 'device_reading', 'lisa_calculation', 'inference')),
  created_at_ms INTEGER NOT NULL
) STRICT;

CREATE TABLE IF NOT EXISTS appointments (
  id TEXT PRIMARY KEY,
  scheduled_at_ms INTEGER NOT NULL,
  fields_json TEXT NOT NULL,
  source_code TEXT NOT NULL CHECK (source_code IN ('user_report', 'photograph_or_document', 'doctor_report', 'device_reading', 'lisa_calculation', 'inference')),
  follow_up_due_at_ms INTEGER,
  created_at_ms INTEGER NOT NULL
) STRICT;

CREATE TABLE IF NOT EXISTS monthly_measurements (
  id TEXT PRIMARY KEY,
  interval_start TEXT NOT NULL,
  interval_end TEXT NOT NULL,
  measurement_type TEXT NOT NULL,
  value_json TEXT NOT NULL,
  source_code TEXT NOT NULL CHECK (source_code IN ('user_report', 'photograph_or_document', 'doctor_report', 'device_reading', 'lisa_calculation', 'inference')),
  created_at_ms INTEGER NOT NULL
) STRICT;

CREATE TABLE IF NOT EXISTS monthly_reports (
  id TEXT PRIMARY KEY,
  interval_start TEXT NOT NULL,
  interval_end TEXT NOT NULL,
  generated_hash TEXT NOT NULL,
  delivery_state TEXT NOT NULL CHECK (delivery_state IN ('planned', 'delivered', 'failed', 'not_reported')),
  destination_binding_id TEXT NOT NULL,
  deadline_local TEXT NOT NULL,
  created_at_ms INTEGER NOT NULL
) STRICT;

CREATE TABLE IF NOT EXISTS capacity_assessments (
  id TEXT PRIMARY KEY,
  private_state TEXT NOT NULL CHECK (private_state IN ('high', 'normal', 'reduced', 'unavailable', 'recovered')),
  time_off_answer TEXT CHECK (time_off_answer IN ('yes', 'no', 'not_asked')),
  mapped_state TEXT NOT NULL CHECK (mapped_state IN ('normal', 'reduced', 'unavailable', 'recovered')),
  effective_at_ms INTEGER NOT NULL
) STRICT;

CREATE TABLE IF NOT EXISTS export_receipts (
  id TEXT PRIMARY KEY,
  encrypted_artifact_hash TEXT NOT NULL,
  slot TEXT NOT NULL CHECK (slot IN ('current', 'previous')),
  drive_binding_id TEXT NOT NULL,
  provider_receipt TEXT,
  verified_at_ms INTEGER
) STRICT;

CREATE INDEX IF NOT EXISTS idx_health_observations_category_time ON observations(category, observed_at_ms);
CREATE INDEX IF NOT EXISTS idx_health_corrections_observation_time ON corrections(observation_id, corrected_at_ms);
CREATE INDEX IF NOT EXISTS idx_health_capacity_time ON capacity_assessments(effective_at_ms);
CREATE INDEX IF NOT EXISTS idx_health_export_slots ON export_receipts(slot, verified_at_ms);

INSERT OR IGNORE INTO health_schema_meta(schema_version) VALUES (1);
`;
