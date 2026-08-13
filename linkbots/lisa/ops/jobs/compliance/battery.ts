import {
  assertBatteryObservation,
  type BatteryAlertIntent,
  type BatteryContext,
  type BatteryDirection,
  type BatteryFreshness,
  type BatteryObservation,
  type BatteryPrediction,
  type BatteryRate,
  type ConfidenceBand,
} from "./compliance-contracts.js";

export const BATTERY_ALERT_THRESHOLD = 35;
export const BATTERY_MAX_FRESHNESS_MS = 6 * 60 * 60 * 1_000;

function confidenceForSamples(samples: number): ConfidenceBand {
  return samples >= 4 ? "high" : samples >= 2 ? "medium" : "low";
}

function directionForDelta(delta: number): BatteryDirection | null {
  return delta > 0 ? "charging" : delta < 0 ? "discharging" : null;
}

/** Estimate one interval. A 98% plateau is censored timing, never a discharge/charge interval. */
export function estimateRate(
  previous: BatteryObservation,
  current: BatteryObservation,
): BatteryRate | "insufficient_data" {
  assertBatteryObservation(previous);
  assertBatteryObservation(current);
  const hours = (current.atMs - previous.atMs) / 3_600_000;
  if (
    hours <= 0 ||
    previous.context !== current.context ||
    previous.usable === false ||
    current.usable === false ||
    previous.routineChanged === true ||
    current.routineChanged === true ||
    previous.percentage === 98
  ) {
    return "insufficient_data";
  }
  const direction = directionForDelta(current.percentage - previous.percentage);
  if (!direction) {
    return "insufficient_data";
  }
  if (direction === "charging" && !current.plugged) {
    return "insufficient_data";
  }
  if (direction === "discharging" && current.plugged) {
    return "insufficient_data";
  }
  return {
    context: current.context,
    direction,
    percentPerHour: (current.percentage - previous.percentage) / hours,
    samples: 1,
    confidence: "low",
    evidenceStartAtMs: previous.atMs,
    evidenceEndAtMs: current.atMs,
  };
}

export function mergeRateModel(
  previous: BatteryRate | undefined,
  interval: BatteryRate,
): BatteryRate {
  if (!previous) {
    return interval;
  }
  const samples = previous.samples + interval.samples;
  return {
    ...interval,
    percentPerHour:
      (previous.percentPerHour * previous.samples + interval.percentPerHour * interval.samples) /
      samples,
    samples,
    confidence: confidenceForSamples(samples),
    evidenceStartAtMs: Math.min(previous.evidenceStartAtMs, interval.evidenceStartAtMs),
  };
}

export function predicted35Time(
  observation: BatteryObservation,
  rate: BatteryRate | "insufficient_data",
): number | null {
  if (observation.percentage <= BATTERY_ALERT_THRESHOLD) {
    return observation.atMs;
  }
  if (
    rate === "insufficient_data" ||
    rate.direction !== "discharging" ||
    rate.percentPerHour >= 0
  ) {
    return null;
  }
  return Math.round(
    observation.atMs +
      ((observation.percentage - BATTERY_ALERT_THRESHOLD) / -rate.percentPerHour) * 3_600_000,
  );
}

export function batteryFreshness(
  observedAtMs: number,
  nowMs: number,
  maxAgeMs = BATTERY_MAX_FRESHNESS_MS,
): BatteryFreshness {
  if (!Number.isFinite(observedAtMs) || !Number.isFinite(nowMs) || nowMs < observedAtMs) {
    return "unknown";
  }
  return nowMs - observedAtMs <= maxAgeMs ? "fresh" : "stale";
}

export function buildBatteryPrediction(params: {
  observation: BatteryObservation;
  rate: BatteryRate | "insufficient_data";
  nowMs: number;
  nextExpectedChargeAtMs: number;
  maxAgeMs?: number;
}): BatteryPrediction {
  assertBatteryObservation(params.observation);
  if (!Number.isFinite(params.nextExpectedChargeAtMs) || params.nextExpectedChargeAtMs < 0) {
    throw new Error("invalid next expected charge timestamp");
  }
  const freshness = batteryFreshness(params.observation.atMs, params.nowMs, params.maxAgeMs);
  const predictedAt = predicted35Time(params.observation, params.rate);
  const confidence = params.rate === "insufficient_data" ? "low" : params.rate.confidence;
  const due =
    freshness === "fresh" &&
    predictedAt !== null &&
    (params.observation.percentage <= BATTERY_ALERT_THRESHOLD ||
      predictedAt < params.nextExpectedChargeAtMs);
  const insufficient = freshness !== "fresh" || predictedAt === null;
  const key =
    due && predictedAt !== null ? `${params.observation.sourceEventId}:35:${predictedAt}` : null;
  return {
    observationGeneration: params.observation.sourceEventId,
    predicted35AtMs: predictedAt,
    nextExpectedChargeAtMs: params.nextExpectedChargeAtMs,
    confidence,
    freshness,
    alertState: due ? "due" : insufficient ? "insufficient_data" : "none",
    idempotencyKey: key,
  };
}

/** Pure heartbeat decision. It returns an intent only; delivery belongs to the caller. */
export function evaluateHeartbeatBatteryAlert(
  prediction: BatteryPrediction,
  observation: BatteryObservation,
  prior?: Pick<BatteryPrediction, "observationGeneration" | "predicted35AtMs" | "idempotencyKey">,
): BatteryAlertIntent | null {
  if (
    prediction.alertState !== "due" ||
    prediction.predicted35AtMs === null ||
    prediction.idempotencyKey === null ||
    prediction.freshness !== "fresh"
  ) {
    return null;
  }
  const sameCrossing =
    prior?.observationGeneration === prediction.observationGeneration &&
    prior.predicted35AtMs === prediction.predicted35AtMs;
  if (sameCrossing) {
    return null;
  }
  return {
    kind: "battery_35_alert",
    idempotencyKey: prediction.idempotencyKey,
    currentPercentage: observation.percentage,
    predicted35AtMs: prediction.predicted35AtMs,
    nextExpectedChargeAtMs: prediction.nextExpectedChargeAtMs,
    action: "connect_power",
  };
}

/** Compatibility-shaped helper used by source tests and future heartbeat wiring. */
export function heartbeatBatteryAlert(
  observation: BatteryObservation,
  rate: BatteryRate | "insufficient_data",
  nextChargeMs: number,
  alertedGeneration?: string,
  nowMs = observation.atMs,
): { due: boolean; idempotencyKey?: string } {
  const prediction = buildBatteryPrediction({
    observation,
    rate,
    nowMs,
    nextExpectedChargeAtMs: nextChargeMs,
  });
  if (prediction.idempotencyKey === null || prediction.idempotencyKey === alertedGeneration) {
    return { due: false };
  }
  return {
    due: prediction.alertState === "due",
    ...(prediction.idempotencyKey ? { idempotencyKey: prediction.idempotencyKey } : {}),
  };
}

export type BatteryStatusInput = {
  observation: BatteryObservation;
  rate: BatteryRate | "insufficient_data";
  prediction: BatteryPrediction;
  nextRoutineCharge: string;
};

export function renderBatteryStatus(input: BatteryStatusInput): string {
  const estimate =
    input.rate === "insufficient_data"
      ? "insufficient data"
      : `${input.rate.percentPerHour.toFixed(1)}%/hour ${input.rate.direction}`;
  const crossing =
    input.prediction.predicted35AtMs === null
      ? "not predicted"
      : new Date(input.prediction.predicted35AtMs).toISOString();
  return [
    `Battery: ${input.observation.percentage}% (${input.observation.plugged ? "plugged" : "unplugged"})`,
    `Estimate: ${estimate}`,
    `35%: ${crossing}`,
    `Confidence/data freshness: ${input.prediction.confidence}/${input.prediction.freshness}`,
    `Next routine charge: ${input.nextRoutineCharge}`,
  ].join("\n");
}

export function batteryContextForObservation(observation: BatteryObservation): BatteryContext {
  return observation.context;
}
