export type SelfieStatus = "Completed" | "Reported Late" | "Missed";
export type SelfieClassification = SelfieStatus | "invalid_before_18" | "ambiguous";
export type BatteryContext = "desk" | "bedside" | "discharging";
export type BatteryDirection = "charging" | "discharging";
export type ConfidenceBand = "low" | "medium" | "high";
export type BatteryFreshness = "fresh" | "stale" | "unknown";

export type BatteryObservation = {
  atMs: number;
  percentage: number;
  plugged: boolean;
  context: BatteryContext;
  sourceEventId: string;
  usable?: boolean;
  routineChanged?: boolean;
};

export type BatteryRate = {
  context: BatteryContext;
  direction: BatteryDirection;
  percentPerHour: number;
  samples: number;
  confidence: ConfidenceBand;
  evidenceStartAtMs: number;
  evidenceEndAtMs: number;
};

export type BatteryPrediction = {
  observationGeneration: string;
  predicted35AtMs: number | null;
  nextExpectedChargeAtMs: number;
  confidence: ConfidenceBand;
  freshness: BatteryFreshness;
  alertState: "none" | "due" | "insufficient_data";
  idempotencyKey: string | null;
};

export type BatteryAlertIntent = {
  kind: "battery_35_alert";
  idempotencyKey: string;
  currentPercentage: number;
  predicted35AtMs: number;
  nextExpectedChargeAtMs: number;
  action: "connect_power";
};

const SELFIE_CONFIRMATION = /\b(done|taken|completed|complete|reported|yes|yep|finished)\b/iu;
const SELFIE_PROMISE = /\b(will|later|promise|going\s+to|plan\s+to|not\s+yet)\b/iu;

export function isValidSelfieConfirmation(text: string): boolean {
  return Boolean(text.trim()) && SELFIE_CONFIRMATION.test(text) && !SELFIE_PROMISE.test(text);
}

export function assertBatteryObservation(value: BatteryObservation): void {
  if (!Number.isInteger(value.atMs) || value.atMs < 0) {
    throw new Error("invalid battery observation timestamp");
  }
  if (!Number.isInteger(value.percentage) || value.percentage < 0 || value.percentage > 100) {
    throw new Error("invalid battery percentage");
  }
  if (!value.sourceEventId.trim() || value.sourceEventId.includes("\0")) {
    throw new Error("invalid battery source event");
  }
  if (!(["desk", "bedside", "discharging"] as const).includes(value.context)) {
    throw new Error("invalid battery context");
  }
  if (value.plugged && value.context === "discharging") {
    throw new Error("plugged battery cannot use discharging context");
  }
  if (value.usable !== undefined && typeof value.usable !== "boolean") {
    throw new Error("invalid battery usable state");
  }
  if (value.routineChanged !== undefined && typeof value.routineChanged !== "boolean") {
    throw new Error("invalid battery routine state");
  }
}

export function assertFiniteTimestamp(value: number, label: string): void {
  if (!Number.isFinite(value) || value < 0) {
    throw new Error(`invalid ${label}`);
  }
}
