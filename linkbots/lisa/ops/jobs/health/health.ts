import { createHash } from "node:crypto";
import {
  isScaleValue,
  mapCapacityForWork,
  MONTHLY_REPORT_SECTIONS,
  rejectClinicalAction,
  type ReportDestinationKind,
  type AppointmentQuestion,
  type CapacitySignal,
  type CheckpointFields,
  type ClinicalAction,
  type ExportBindingSet,
  type HealthCheckpoint,
  type JsonValue,
  type MonthlyReportSection,
  type MissingValue,
  type PhotoDocumentExtraction,
  type PrivateCapacity,
  type ScaleValue,
} from "./health-contracts.js";

export const HYDRATION_BOTTLE_ML = 1_000;
export const DAILY_HYDRATION_BOTTLES = 3;
export const DAILY_PROTEIN_TARGET_G = 125;
export const DAILY_BOWEL_ATTEMPT_TARGET = 2;
export const BOWEL_TRACKING_POLICY = {
  targetAttempts: DAILY_BOWEL_ATTEMPT_TARGET,
  reminderMode: "non_fixed",
  fixedReminder: false,
} as const;
export const APPOINTMENT_FOLLOW_UP_DELAY_MS = 60 * 60 * 1_000;
export const CAPACITY_STATES = ["high", "normal", "reduced", "unavailable", "recovered"] as const;
export const CHECKPOINT_SCHEDULE = [
  { checkpoint: "morning", messageAt: "08:15", measurementTargetAt: "08:15" },
  { checkpoint: "midday", messageAt: "12:45", measurementTargetAt: "13:15" },
  { checkpoint: "evening", messageAt: "22:45", measurementTargetAt: "22:45" },
] as const;
export const INITIAL_INTAKE_FIELDS = [
  "treatment_history",
  "medication_and_supplements",
  "food_and_protein",
  "hydration",
  "exercise",
  "sleep",
  "energy_mood_stress",
  "symptoms_and_digestion",
  "weight_and_waist",
  "capacity",
] as const;
export const MONTHLY_REASSESSMENT_FIELDS = [
  "treatment_and_appointments",
  "medication_and_supplements",
  "weight_and_waist",
  "food_protein_hydration",
  "exercise_and_gym",
  "sleep",
  "energy_mood_stress",
  "digestion_and_bowel",
  "capacity_and_time_off",
  "decisions_and_next_priorities",
] as const;

const NOT_REPORTED: MissingValue = "not_reported";

function reportedOrMissing(value: unknown): JsonValue | MissingValue {
  return value === undefined || value === null || value === ""
    ? NOT_REPORTED
    : (value as JsonValue);
}

function validatedScale(value: unknown): ScaleValue | MissingValue {
  return isScaleValue(value) ? value : NOT_REPORTED;
}

function missingKeys(fields: Record<string, unknown>): string[] {
  return Object.entries(fields)
    .filter(([, value]) => value === undefined || value === null || value === "")
    .map(([key]) => key)
    .toSorted();
}

export type CheckInInput = {
  localDate: string;
  energy?: number;
  mood?: number;
  stress?: number;
  values?: Record<string, JsonValue | undefined>;
};

export function composeCheckpoint(
  checkpoint: HealthCheckpoint,
  input: CheckInInput,
): {
  checkpoint: HealthCheckpoint;
  localDate: string;
  fields: CheckpointFields;
  missingFields: string[];
} {
  const values = input.values ?? {};
  const requiredFields: Record<string, unknown> = {
    ...values,
    energy: input.energy,
    mood: input.mood,
    stress: input.stress,
  };
  if (checkpoint === "morning") {
    Object.assign(requiredFields, {
      sleepAtMs: values.sleepAtMs,
      wakeAtMs: values.wakeAtMs,
      food: values.food,
      morningPillsAndSupplements: values.morningPillsAndSupplements,
      symptoms: values.symptoms,
      capacity: values.capacity,
    });
  } else if (checkpoint === "midday") {
    Object.assign(requiredFields, {
      lunchOrFood: values.lunchOrFood,
      hydrationBottleNumber: values.hydrationBottleNumber,
      hydrationRemainingMl: values.hydrationRemainingMl,
      symptoms: values.symptoms,
      capacity: values.capacity,
      measurement: values.measurement,
    });
  } else {
    Object.assign(requiredFields, {
      food: values.food,
      nightPillsAndSupplements: values.nightPillsAndSupplements,
      hydrationBottleNumber: values.hydrationBottleNumber,
      hydrationRemainingMl: values.hydrationRemainingMl,
      symptoms: values.symptoms,
      endOfDayNotes: values.endOfDayNotes,
      capacity: values.capacity,
    });
  }
  const fields = Object.fromEntries(
    Object.entries(requiredFields).map(([key, value]) => [
      key,
      key === "energy" || key === "mood" || key === "stress"
        ? validatedScale(value)
        : reportedOrMissing(value),
    ]),
  ) as CheckpointFields;
  if (checkpoint === "morning") {
    fields.sleepDurationMinutes = calculateSleepDurationMinutes(
      typeof values.sleepAtMs === "number" ? values.sleepAtMs : Number.NaN,
      typeof values.wakeAtMs === "number" ? values.wakeAtMs : Number.NaN,
    );
  } else {
    fields.hydrationConsumedMl = hydrationMl(
      typeof values.hydrationBottleNumber === "number" ? values.hydrationBottleNumber : Number.NaN,
      typeof values.hydrationRemainingMl === "number" ? values.hydrationRemainingMl : Number.NaN,
    );
  }
  const missing = new Set(missingKeys(requiredFields));
  for (const key of ["energy", "mood", "stress"] as const) {
    if (!isScaleValue(requiredFields[key])) {
      missing.add(key);
    }
  }
  if (checkpoint === "morning" && fields.sleepDurationMinutes === NOT_REPORTED) {
    missing.add("sleepAtMs");
    missing.add("wakeAtMs");
  }
  if (checkpoint !== "morning" && fields.hydrationConsumedMl === NOT_REPORTED) {
    missing.add("hydrationBottleNumber");
    missing.add("hydrationRemainingMl");
  }
  return {
    checkpoint,
    localDate: input.localDate,
    fields,
    missingFields: [...missing].toSorted(),
  };
}

export function checkpointMessagePlan(checkpoint: HealthCheckpoint): {
  checkpoint: HealthCheckpoint;
  messageAt: string;
  measurementTargetAt: string;
} {
  const schedule = CHECKPOINT_SCHEDULE.find((item) => item.checkpoint === checkpoint);
  if (!schedule) {
    throw new Error("private_health_unknown_checkpoint");
  }
  return schedule;
}

export function sleepDurationMs(sleepAtMs: number, wakeAtMs: number): number | MissingValue {
  if (!Number.isSafeInteger(sleepAtMs) || !Number.isSafeInteger(wakeAtMs) || wakeAtMs < sleepAtMs) {
    return NOT_REPORTED;
  }
  return wakeAtMs - sleepAtMs;
}

export function calculateSleepDurationMinutes(
  sleepAtMs: number,
  wakeAtMs: number,
): number | MissingValue {
  const duration = sleepDurationMs(sleepAtMs, wakeAtMs);
  return duration === NOT_REPORTED ? NOT_REPORTED : Math.round(duration / 60_000);
}

export function hydrationMl(bottleNumber: number, remainingMl: number): number | MissingValue {
  if (
    !Number.isInteger(bottleNumber) ||
    bottleNumber < 1 ||
    bottleNumber > DAILY_HYDRATION_BOTTLES ||
    !Number.isInteger(remainingMl) ||
    remainingMl < 0 ||
    remainingMl > HYDRATION_BOTTLE_ML
  ) {
    return NOT_REPORTED;
  }
  return (bottleNumber - 1) * HYDRATION_BOTTLE_ML + (HYDRATION_BOTTLE_ML - remainingMl);
}

export const calculateHydrationConsumedMl = hydrationMl;

export type ProteinEntry = {
  grams: number;
  label?: string;
  source?: "user_report" | "product_estimate";
};

export function estimateProteinProgress(
  entries: readonly ProteinEntry[],
  shakeGrams?: number,
): {
  targetGrams: number;
  estimatedGrams: number;
  remainingGrams: number;
  status: "estimated";
  entries: readonly ProteinEntry[];
} {
  const safeEntries = entries.filter((entry) => Number.isFinite(entry.grams) && entry.grams >= 0);
  const estimatedGrams =
    safeEntries.reduce((total, entry) => total + entry.grams, 0) +
    (Number.isFinite(shakeGrams) && (shakeGrams ?? 0) >= 0 ? (shakeGrams ?? 0) : 0);
  return {
    targetGrams: DAILY_PROTEIN_TARGET_G,
    estimatedGrams,
    remainingGrams: Math.max(0, DAILY_PROTEIN_TARGET_G - estimatedGrams),
    status: "estimated",
    entries: safeEntries,
  };
}

export function summarizeWeeklyProtein(
  days: readonly ProteinEntry[][],
  dailyShakeGrams?: number,
): {
  targetGrams: number;
  daysReported: number;
  averageEstimatedGrams: number | MissingValue;
  status: "estimated";
} {
  if (days.length === 0) {
    return {
      targetGrams: DAILY_PROTEIN_TARGET_G,
      daysReported: 0,
      averageEstimatedGrams: NOT_REPORTED,
      status: "estimated",
    };
  }
  const totals = days.map(
    (entries) => estimateProteinProgress(entries, dailyShakeGrams).estimatedGrams,
  );
  return {
    targetGrams: DAILY_PROTEIN_TARGET_G,
    daysReported: days.length,
    averageEstimatedGrams: totals.reduce((sum, total) => sum + total, 0) / totals.length,
    status: "estimated",
  };
}

export type ScaleSeries = "doctor" | "home";

export function createWeightObservation(
  category: "weight" | "waist",
  scale: ScaleSeries,
  value: JsonValue,
): {
  category: string;
  scale: ScaleSeries;
  value: JsonValue;
  source: "user_report";
  status: "reported";
} {
  if (!(["weight", "waist"] as const).includes(category)) {
    throw new Error("private_health_invalid_measurement_category");
  }
  if (!("doctor" === scale || "home" === scale)) {
    throw new Error("private_health_invalid_measurement_scale");
  }
  return { category, scale, value, source: "user_report", status: "reported" };
}

export function buildGymCalendarPlan(): readonly {
  day: "Tuesday" | "Thursday" | "Saturday";
  start: string;
  end: string;
  mealPreparationStart: "18:30";
  mealPreparationEnd: "19:30";
  mealAt: "19:30";
  familyTime: "shorter_on_gym_days";
  exerciseFocus: readonly ["back_and_hip_strength", "pectoral_and_arm_tone", "core"];
  fatLossNote: "general_support_no_spot_reduction";
  optional: boolean;
  reminderOwner: "calendar";
  lisaReminder: false;
}[] {
  return [
    {
      day: "Tuesday",
      start: "17:30",
      end: "18:30",
      mealPreparationStart: "18:30",
      mealPreparationEnd: "19:30",
      mealAt: "19:30",
      familyTime: "shorter_on_gym_days",
      exerciseFocus: ["back_and_hip_strength", "pectoral_and_arm_tone", "core"],
      fatLossNote: "general_support_no_spot_reduction",
      optional: false,
      reminderOwner: "calendar",
      lisaReminder: false,
    },
    {
      day: "Thursday",
      start: "17:30",
      end: "18:30",
      mealPreparationStart: "18:30",
      mealPreparationEnd: "19:30",
      mealAt: "19:30",
      familyTime: "shorter_on_gym_days",
      exerciseFocus: ["back_and_hip_strength", "pectoral_and_arm_tone", "core"],
      fatLossNote: "general_support_no_spot_reduction",
      optional: false,
      reminderOwner: "calendar",
      lisaReminder: false,
    },
    {
      day: "Saturday",
      start: "17:30",
      end: "18:30",
      mealPreparationStart: "18:30",
      mealPreparationEnd: "19:30",
      mealAt: "19:30",
      familyTime: "shorter_on_gym_days",
      exerciseFocus: ["back_and_hip_strength", "pectoral_and_arm_tone", "core"],
      fatLossNote: "general_support_no_spot_reduction",
      optional: true,
      reminderOwner: "calendar",
      lisaReminder: false,
    },
  ];
}

export function confirmPhotoDocumentField(
  extraction: PhotoDocumentExtraction,
  key: string,
): { status: "confirmed"; value: JsonValue } | { status: "unclear_or_unconfirmed" } {
  const field = extraction.fields.find((candidate) => candidate.key === key);
  if (
    !field ||
    field.clarity !== "clear" ||
    field.confirmation !== "confirmed" ||
    field.visibleValue === undefined
  ) {
    return { status: "unclear_or_unconfirmed" };
  }
  return { status: "confirmed", value: field.visibleValue };
}

export function selectAppointmentFollowUpQuestions(input: {
  knownFields: ReadonlySet<string>;
  unknownFields: readonly string[];
  followUp?: boolean;
}): readonly AppointmentQuestion[] {
  const knownFields = new Set([...input.knownFields].map((field) => field.trim()));
  return [...new Set(input.unknownFields.map((field) => field.trim()))]
    .filter((field) => field.length > 0 && !knownFields.has(field))
    .map((field) => ({
      id: `appointment-${field}`,
      prompt: `Please confirm ${field}.`,
      choices: ["Yes", "No", "Not sure"] as const,
      delivery: "telegram_only" as const,
      ...(input.followUp ? { followUpAfterMs: APPOINTMENT_FOLLOW_UP_DELAY_MS } : {}),
    }));
}

export function clinicalBoundary(action: ClinicalAction) {
  return rejectClinicalAction(action);
}

export type CapacityProjection = {
  signal: CapacitySignal;
  allowsAdditionalWorkInsideExistingPeriods: boolean;
  allowsFlexibleWork: boolean;
  preservesBreaksAndPersonalTime: boolean;
  asksAboutTimeOff: boolean;
};

export function projectCapacity(
  value: PrivateCapacity,
  reportedAtLocalTime?: string,
): CapacityProjection {
  const signal = mapCapacityForWork(value);
  const lateHigh =
    value === "high" && reportedAtLocalTime !== undefined && reportedAtLocalTime > "14:45";
  return {
    signal,
    allowsAdditionalWorkInsideExistingPeriods: value === "high" && !lateHigh,
    allowsFlexibleWork: value !== "unavailable",
    preservesBreaksAndPersonalTime: true,
    asksAboutTimeOff: value === "reduced" || value === "unavailable",
  };
}

export function capacityReceipt(value: PrivateCapacity): { mappedCapacity: CapacitySignal } {
  return { mappedCapacity: mapCapacityForWork(value) };
}

export type MonthlyReportPlan = {
  destination: "personal_email";
  destinationBindingId: string;
  deadlineLocal: string;
  sections: readonly MonthlyReportSection[];
};

export function planMonthlyReport(input: {
  month: string;
  personalEmailBindingId: string;
  sections?: readonly MonthlyReportSection[];
  bindingKind?: ReportDestinationKind | "personal" | "work";
}): MonthlyReportPlan {
  if (
    !input.personalEmailBindingId ||
    input.bindingKind === "work" ||
    input.bindingKind === "work_email"
  ) {
    throw new Error("private_health_personal_destination_required");
  }
  const sections = input.sections ?? MONTHLY_REPORT_SECTIONS;
  if (
    sections.length !== MONTHLY_REPORT_SECTIONS.length ||
    sections.some((section, index) => section !== MONTHLY_REPORT_SECTIONS[index])
  ) {
    throw new Error("private_health_report_sections_invalid");
  }
  return {
    destination: "personal_email",
    destinationBindingId: input.personalEmailBindingId,
    deadlineLocal: `${input.month}-01 08:00 Asia/Taipei`,
    sections,
  };
}

export type EncryptedExportPlan = {
  status: "planned";
  encryptedArtifactHash: string;
  currentSlot: "current";
  previousSlot: "previous";
  retainPreviousUntilCurrentVerified: true;
  verificationRequired: true;
  bindings: ExportBindingSet;
};

export function planEncryptedExport(
  bytes: Uint8Array,
  bindings: ExportBindingSet,
  encryptionReceipt?: string,
): EncryptedExportPlan | { status: "blocked_encryption_receipt" } {
  if (
    !(bytes instanceof Uint8Array) ||
    !encryptionReceipt ||
    !bindings.backupBindingId ||
    !bindings.reportBindingId ||
    !bindings.photoBindingId ||
    !bindings.documentBindingId ||
    !bindings.gsmSecretRef
  ) {
    return { status: "blocked_encryption_receipt" };
  }
  return {
    status: "planned",
    encryptedArtifactHash: createHash("sha256").update(bytes).digest("hex"),
    currentSlot: "current",
    previousSlot: "previous",
    retainPreviousUntilCurrentVerified: true,
    verificationRequired: true,
    bindings,
  };
}

export function canReplacePreviousExport(input: { currentVerifiedAtMs?: number }): boolean {
  return Number.isSafeInteger(input.currentVerifiedAtMs) && (input.currentVerifiedAtMs ?? 0) >= 0;
}
