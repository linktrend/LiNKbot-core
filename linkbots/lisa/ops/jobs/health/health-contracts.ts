export const HEALTH_CHECKPOINTS = ["morning", "midday", "evening"] as const;
export type HealthCheckpoint = (typeof HEALTH_CHECKPOINTS)[number];

export const OBSERVATION_SOURCES = [
  "user_report",
  "photograph_or_document",
  "doctor_report",
  "device_reading",
  "lisa_calculation",
  "inference",
] as const;
export type ObservationSource = (typeof OBSERVATION_SOURCES)[number];

export const OBSERVATION_STATUSES = [
  "reported",
  "calculated",
  "estimated",
  "verified",
  "not_reported",
] as const;
export type ObservationStatus = (typeof OBSERVATION_STATUSES)[number];

export const CAPACITY_STATES = ["high", "normal", "reduced", "unavailable", "recovered"] as const;
export type PrivateCapacity = (typeof CAPACITY_STATES)[number];
export type CapacitySignal = Exclude<PrivateCapacity, "high">;

export type ScaleValue = 1 | 2 | 3 | 4 | 5;
export type MissingValue = "not_reported";

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export type ObservationInput = {
  id?: string;
  category: string;
  observedAtMs: number;
  value: JsonValue | MissingValue;
  unit?: string;
  source: ObservationSource;
  confidence?: "low" | "medium" | "high";
  status?: ObservationStatus;
  attachmentRef?: string;
  createdAtMs?: number;
};

export type CorrectionInput = {
  id?: string;
  observationId: string;
  replacementValue: JsonValue | MissingValue;
  reason: string;
  correctedAtMs?: number;
  provenance: ObservationSource;
};

export type CheckpointFields = {
  energy: ScaleValue | MissingValue;
  mood: ScaleValue | MissingValue;
  stress: ScaleValue | MissingValue;
  [field: string]: JsonValue | MissingValue;
};

export type CheckpointInput = {
  id?: string;
  localDate: string;
  checkpoint: HealthCheckpoint;
  fields: CheckpointFields;
  missingFields: string[];
  acknowledgment?: "pending" | "acknowledged";
  createdAtMs?: number;
};

export type CapacityAssessmentInput = {
  id?: string;
  privateState: PrivateCapacity;
  timeOffAnswer?: "yes" | "no" | "not_asked";
  effectiveAtMs: number;
};

export type PhotoDocumentField = {
  key: string;
  visibleValue?: JsonValue;
  clarity: "clear" | "unclear";
  confirmation: "pending" | "confirmed" | "rejected";
};

export type PhotoDocumentExtraction = {
  attachmentRef: string;
  source: "photograph_or_document";
  fields: PhotoDocumentField[];
};

export type ClinicalAction =
  | "diagnose"
  | "change_prescription_or_dose"
  | "approve_treatment"
  | "approve_unidentified_supplement"
  | "provide_false_reassurance";

export type ClinicianBoundaryResult = {
  status: "requires_clinician_decision";
  response: "neutral_tracking";
};

export type AppointmentQuestion = {
  id: string;
  prompt: string;
  choices?: readonly string[];
  delivery: "telegram_only";
  followUpAfterMs?: number;
};

export type MonthlyReportSection =
  | "Mounjaro"
  | "Medication and supplements"
  | "Weight and waist"
  | "Food, protein, and hydration"
  | "Exercise and gym"
  | "Sleep"
  | "Energy, mood, and stress"
  | "Digestion and bowel"
  | "Work capacity and time off"
  | "Positive changes, problems, and missing data"
  | "Decisions"
  | "Next priorities";

export const MONTHLY_REPORT_SECTIONS: readonly MonthlyReportSection[] = [
  "Mounjaro",
  "Medication and supplements",
  "Weight and waist",
  "Food, protein, and hydration",
  "Exercise and gym",
  "Sleep",
  "Energy, mood, and stress",
  "Digestion and bowel",
  "Work capacity and time off",
  "Positive changes, problems, and missing data",
  "Decisions",
  "Next priorities",
];

export type ExportBindingSet = {
  backupBindingId: string;
  reportBindingId: string;
  photoBindingId: string;
  documentBindingId: string;
  gsmSecretRef: string;
};

export type ReportDestinationKind = "personal_email" | "work_email";

export function mapCapacityForWork(value: PrivateCapacity): CapacitySignal {
  return value === "high" ? "normal" : value;
}

export function isPrivateCapacity(value: unknown): value is PrivateCapacity {
  return typeof value === "string" && CAPACITY_STATES.includes(value as PrivateCapacity);
}

export function isScaleValue(value: unknown): value is ScaleValue {
  return typeof value === "number" && Number.isInteger(value) && value >= 1 && value <= 5;
}

export function isHealthCheckpoint(value: unknown): value is HealthCheckpoint {
  return typeof value === "string" && HEALTH_CHECKPOINTS.includes(value as HealthCheckpoint);
}

export function isObservationSource(value: unknown): value is ObservationSource {
  return typeof value === "string" && OBSERVATION_SOURCES.includes(value as ObservationSource);
}

export function rejectClinicalAction(_action?: ClinicalAction): ClinicianBoundaryResult {
  return { status: "requires_clinician_decision", response: "neutral_tracking" };
}
