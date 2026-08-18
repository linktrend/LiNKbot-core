import { describe, expect, it } from "vitest";
import {
  mapCapacityForWork,
  MONTHLY_REPORT_SECTIONS,
  rejectClinicalAction,
} from "./health-contracts.js";
import {
  BOWEL_TRACKING_POLICY,
  buildGymCalendarPlan,
  calculateHydrationConsumedMl,
  calculateSleepDurationMinutes,
  canReplacePreviousExport,
  capacityReceipt,
  checkpointMessagePlan,
  clinicalBoundary,
  composeCheckpoint,
  confirmPhotoDocumentField,
  createWeightObservation,
  estimateProteinProgress,
  hydrationMl,
  planEncryptedExport,
  planMonthlyReport,
  projectCapacity,
  selectAppointmentFollowUpQuestions,
  sleepDurationMs,
  summarizeWeeklyProtein,
} from "./health.js";

const syntheticTime = 1_800_000_000_000;

describe("private health check-ins and calculations", () => {
  it("composes all checkpoints and retains missing fields as not_reported", () => {
    const morning = composeCheckpoint("morning", {
      localDate: "synthetic-date",
      energy: 3,
      mood: 4,
      stress: 2,
      values: { sleepAtMs: syntheticTime, wakeAtMs: syntheticTime + 1, food: undefined },
    });
    const midday = composeCheckpoint("midday", {
      localDate: "synthetic-date",
      energy: 2,
      mood: 3,
      stress: 3,
      values: { lunchOrFood: "synthetic-food", measurement: undefined },
    });
    const evening = composeCheckpoint("evening", {
      localDate: "synthetic-date",
      values: {},
    });
    expect(morning.fields.energy).toBe(3);
    expect(morning.fields.food).toBe("not_reported");
    expect(morning.fields.sleepDurationMinutes).toBe(0);
    expect(morning.missingFields).toContain("food");
    expect(midday.fields.measurement).toBe("not_reported");
    expect(midday.fields.hydrationConsumedMl).toBe("not_reported");
    expect(evening.fields.energy).toBe("not_reported");
    expect(evening.missingFields).toContain("endOfDayNotes");
    expect(checkpointMessagePlan("midday")).toEqual({
      checkpoint: "midday",
      messageAt: "12:45",
      measurementTargetAt: "13:15",
    });
  });

  it("validates scales and calculates reported sleep duration", () => {
    expect(calculateSleepDurationMinutes(syntheticTime, syntheticTime + 8 * 60 * 60 * 1_000)).toBe(
      480,
    );
    expect(sleepDurationMs(syntheticTime + 1, syntheticTime)).toBe("not_reported");
    expect(
      composeCheckpoint("morning", { localDate: "synthetic-date", energy: 6, mood: 0, stress: 2 })
        .fields,
    ).toMatchObject({
      energy: "not_reported",
      mood: "not_reported",
      stress: 2,
    });
  });

  it("calculates hydration from three 1,000 ml bottles and preserves invalid input as missing", () => {
    expect(hydrationMl(1, 250)).toBe(750);
    expect(calculateHydrationConsumedMl(3, 500)).toBe(2_500);
    expect(hydrationMl(4, 0)).toBe("not_reported");
    expect(hydrationMl(2, 1_001)).toBe("not_reported");
    expect(hydrationMl(2, 0.5)).toBe("not_reported");
  });

  it("labels protein as estimated and summarizes a weekly pattern", () => {
    expect(estimateProteinProgress([{ grams: 20, source: "product_estimate" }], 30)).toMatchObject({
      targetGrams: 125,
      estimatedGrams: 50,
      status: "estimated",
    });
    expect(summarizeWeeklyProtein([[{ grams: 10 }], [{ grams: 20 }]], 10)).toMatchObject({
      targetGrams: 125,
      daysReported: 2,
      averageEstimatedGrams: 25,
      status: "estimated",
    });
    expect(summarizeWeeklyProtein([]).averageEstimatedGrams).toBe("not_reported");
  });
});

describe("private health boundaries", () => {
  it("keeps capacity mapping safe and never exports high", () => {
    expect(mapCapacityForWork("high")).toBe("normal");
    expect(capacityReceipt("high")).toEqual({ mappedCapacity: "normal" });
    expect(projectCapacity("high")).toMatchObject({
      signal: "normal",
      allowsAdditionalWorkInsideExistingPeriods: true,
      preservesBreaksAndPersonalTime: true,
    });
    expect(projectCapacity("unavailable")).toMatchObject({
      signal: "unavailable",
      allowsAdditionalWorkInsideExistingPeriods: false,
      asksAboutTimeOff: true,
    });
    expect(projectCapacity("unavailable")).toMatchObject({ allowsFlexibleWork: false });
    expect(projectCapacity("high", "15:00")).toMatchObject({
      signal: "normal",
      allowsAdditionalWorkInsideExistingPeriods: false,
    });
    expect(Object.keys(capacityReceipt("high"))).toEqual(["mappedCapacity"]);
  });

  it("has an executable clinician boundary with no medical action result", () => {
    expect(rejectClinicalAction()).toEqual({
      status: "requires_clinician_decision",
      response: "neutral_tracking",
    });
    expect(clinicalBoundary("change_prescription_or_dose")).toEqual({
      status: "requires_clinician_decision",
      response: "neutral_tracking",
    });
  });

  it("does not guess unclear photo/document fields", () => {
    const extraction = {
      attachmentRef: "synthetic-attachment",
      source: "photograph_or_document" as const,
      fields: [
        {
          key: "unclear",
          visibleValue: 4,
          clarity: "unclear" as const,
          confirmation: "pending" as const,
        },
        {
          key: `ltfx.n.9599915bd8cd62b6b42e.v1`,
          visibleValue: "synthetic",
          clarity: "clear" as const,
          confirmation: "confirmed" as const,
        },
      ],
    };
    expect(confirmPhotoDocumentField(extraction, "unclear")).toEqual({
      status: "unclear_or_unconfirmed",
    });
    expect(confirmPhotoDocumentField(extraction, "confirmed")).toEqual({
      status: "confirmed",
      value: "synthetic",
    });
  });

  it("asks only unknown appointment fields through Telegram with optional one-hour follow-up", () => {
    const questions = selectAppointmentFollowUpQuestions({
      knownFields: new Set(["known"]),
      unknownFields: ["known", "unknown"],
      followUp: true,
    });
    expect(questions).toHaveLength(1);
    expect(questions[0]).toMatchObject({
      id: "appointment-unknown",
      delivery: "telegram_only",
      followUpAfterMs: 60 * 60 * 1_000,
    });
  });

  it("represents gym reminders as calendar-owned and does not duplicate Lisa reminders", () => {
    expect(buildGymCalendarPlan()).toEqual([
      expect.objectContaining({ day: "Tuesday", reminderOwner: "calendar", lisaReminder: false }),
      expect.objectContaining({ day: "Thursday", reminderOwner: "calendar", lisaReminder: false }),
      expect.objectContaining({
        day: "Saturday",
        optional: true,
        reminderOwner: "calendar",
        lisaReminder: false,
      }),
    ]);
    expect(buildGymCalendarPlan()[0]).toMatchObject({
      mealPreparationStart: "18:30",
      mealPreparationEnd: "19:30",
      mealAt: "19:30",
      familyTime: "shorter_on_gym_days",
    });
  });

  it("keeps doctor and home scale series distinct and records monthly waist", () => {
    expect(createWeightObservation("weight", "doctor", "synthetic-doctor-weight")).toMatchObject({
      category: "weight",
      scale: "doctor",
    });
    expect(createWeightObservation("weight", "home", "synthetic-home-weight")).toMatchObject({
      category: "weight",
      scale: "home",
    });
    expect(createWeightObservation("waist", "home", "synthetic-waist")).toMatchObject({
      category: "waist",
      scale: "home",
    });
    expect(BOWEL_TRACKING_POLICY).toEqual({
      targetAttempts: 2,
      reminderMode: "non_fixed",
      fixedReminder: false,
    });
  });
});

describe("private monthly report and export planning", () => {
  it("uses the personal-email binding and approved first-day deadline", () => {
    expect(
      planMonthlyReport({ month: "synthetic-month", personalEmailBindingId: "personal-binding" }),
    ).toEqual({
      destination: "personal_email",
      destinationBindingId: "personal-binding",
      deadlineLocal: "synthetic-month-01 08:00 Asia/Taipei",
      sections: MONTHLY_REPORT_SECTIONS,
    });
    expect(() =>
      planMonthlyReport({
        month: "synthetic-month",
        personalEmailBindingId: "opaque-binding",
        bindingKind: "work_email",
      }),
    ).toThrow("private_health_personal_destination_required");
  });

  it("requires encryption proof and retains the previous export until verification", () => {
    const bindings = {
      backupBindingId: "opaque-backup-binding",
      reportBindingId: "opaque-report-binding",
      photoBindingId: "opaque-photo-binding",
      documentBindingId: "opaque-document-binding",
      gsmSecretRef: "gsm-secret-reference",
    } as const;
    expect(planEncryptedExport(new Uint8Array([1, 2]), bindings)).toEqual({
      status: "blocked_encryption_receipt",
    });
    const planned = planEncryptedExport(new Uint8Array([1, 2]), bindings, "encryption-receipt");
    expect(planned).toMatchObject({
      status: "planned",
      currentSlot: "current",
      previousSlot: "previous",
      retainPreviousUntilCurrentVerified: true,
      verificationRequired: true,
    });
    expect(canReplacePreviousExport({})).toBe(false);
    expect(canReplacePreviousExport({ currentVerifiedAtMs: syntheticTime })).toBe(true);
  });
});
