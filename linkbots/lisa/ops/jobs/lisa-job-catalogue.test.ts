import { describe, expect, it } from "vitest";
import { buildLisaCatalogueCronPlan } from "../stage-ops-cron-installer.ts";
import { buildBatteryPrediction, evaluateHeartbeatBatteryAlert } from "./compliance/battery.ts";
import type { BatteryObservation, BatteryRate } from "./compliance/compliance-contracts.ts";
import { classifySelfieReport, shouldSendConditionalSelfieReminder } from "./compliance/selfie.ts";
import { mapCapacityForWork } from "./health/health-contracts.ts";
import {
  LISA_JOB_CATALOGUE,
  assertValidLisaJobCatalogue,
  catalogueSummary,
  checkLisaProviderBindings,
  hashLisaJobCatalogue,
  validateLisaJobCatalogue,
} from "./lisa-job-catalogue.ts";
import {
  LISA_JOB_DESIRED_STATE,
  assertValidLisaJobDesiredState,
  diffLisaJobDesiredState,
  validateLisaJobDesiredState,
} from "./lisa-job-desired-state.ts";
import {
  createMaintenanceState,
  completeMaintenanceStage,
  nextMaintenanceStage,
  startMaintenanceStage,
} from "./maintenance/maintenance-contracts.ts";
import { planMaintenance } from "./maintenance/maintenance.ts";
import { renderLisaJobTemplate } from "./render-lisa-job-template.ts";
import type { LisaReportItem } from "./reporting/reporting-contracts.ts";
import { renderExecutiveDigest, renderFlashReport } from "./reporting/reporting.ts";

const item = (text: string, kind?: LisaReportItem["kind"]): LisaReportItem => ({
  text,
  source: "lisa",
  verification: "verified",
  ...(kind ? { kind } : {}),
});

const baseDigest = {
  variant: "morning" as const,
  completed: [item("Synthetic maintenance result", "meaningful_completion")],
  workCalendar: [],
  personalCalendar: [],
  carlosTasks: [],
  otherTasks: [],
  outstanding: [],
  agentExceptions: [],
  decisions: [],
};

describe("Lisa ten-family catalogue", () => {
  it("defines only the ten families, with every entry disabled, delivery-free, bounded, and Taipei-local", () => {
    expect(validateLisaJobCatalogue()).toEqual([]);
    assertValidLisaJobCatalogue();
    expect(catalogueSummary()).toMatchObject({
      familyCount: 10,
      entryCount: LISA_JOB_CATALOGUE.entries.length,
      sourceStatus: "SOURCE_ONLY",
    });
    expect(new Set(LISA_JOB_CATALOGUE.entries.map((entry) => entry.family)).size).toBe(10);
    for (const entry of LISA_JOB_CATALOGUE.entries) {
      expect(entry.enabled).toBe(false);
      expect(entry.delivery).toEqual({ mode: "none" });
      expect(entry.schedule.timeZone).toBe("Asia/Taipei");
      expect(entry.hardStops.join(" ")).toMatch(/live Lisa|VPS|Google|Telegram|email|provider/i);
      expect(entry.deadlines.preparationDeadlineLocalTime).toBeDefined();
      expect(entry.deadlines.visibleDeliveryDeadlineLocalTime).toBeDefined();
      if (entry.deadlines.visibleDeliveryDeadlineLocalTime !== null) {
        expect(entry.deadlines.preparationDeadlineLocalTime).not.toBe(
          entry.deadlines.visibleDeliveryDeadlineLocalTime,
        );
      }
      expect(entry.timeoutSeconds).toBeGreaterThan(0);
      expect(entry.timeoutSeconds).toBeLessThanOrEqual(1_800);
      expect(entry.idempotencyKey).toMatch(/^[a-f0-9]{64}$/);
      expect(JSON.stringify(entry)).not.toMatch(/@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/u);
      expect(JSON.stringify(entry)).not.toMatch(
        /(?:chat[_ -]?id|drive[_ -]?id|bearer|token\s*[:=]|secret\s*[:=])/iu,
      );
    }
  });

  it("uses deterministic catalogue bytes and rejects duplicate embedded battery schedules", () => {
    expect(hashLisaJobCatalogue()).toBe(hashLisaJobCatalogue(LISA_JOB_CATALOGUE));
    const battery = LISA_JOB_CATALOGUE.entries.find(
      (entry) => entry.family === "battery_tracking",
    )!;
    const duplicate = {
      ...LISA_JOB_CATALOGUE,
      entries: [
        ...LISA_JOB_CATALOGUE.entries,
        {
          ...battery,
          id: "battery-standalone-1045",
          schedule: { kind: "cron" as const, localTimes: ["10:45"], cron: "45 10 * * *" },
        },
      ],
    };
    expect(validateLisaJobCatalogue(duplicate)).toContain(
      "battery-standalone-1045: duplicate standalone battery schedule at 10:45",
    );
  });

  it("rejects a catalogue that names a non-canonical family set or enables delivery", () => {
    const wrongFamilies = {
      ...LISA_JOB_CATALOGUE,
      families: [...LISA_JOB_CATALOGUE.families].toReversed(),
    };
    expect(validateLisaJobCatalogue(wrongFamilies)).toContain(
      "catalogue families must exactly match the ten canonical Lisa job ids",
    );
    const enabled = {
      ...LISA_JOB_CATALOGUE,
      entries: [
        { ...LISA_JOB_CATALOGUE.entries[0]!, delivery: { mode: "telegram" as const } },
        ...LISA_JOB_CATALOGUE.entries.slice(1),
      ],
    } as unknown as typeof LISA_JOB_CATALOGUE;
    expect(validateLisaJobCatalogue(enabled)).toContain(
      "librarian-cycle: delivery.mode must be none",
    );
  });

  it("keeps provider absence as an explicit HOLD with no silent fallback", () => {
    const decision = checkLisaProviderBindings(undefined);
    expect(decision.status).toBe("HOLD");
    expect(decision.reason).toMatch(/HOLD|release|credential|binding/i);
    expect(decision.missing.length).toBeGreaterThan(0);
    const mismatch = checkLisaProviderBindings({
      "operational-reporting": {
        releaseRef: "wrong-release",
        contractRef: "reporting-v1",
        credentialBindingId: "operational-reporting-binding",
      },
    });
    expect(mismatch.status).toBe("HOLD");
    expect(mismatch.reason).toMatch(/mismatch|missing/i);
  });

  it("builds a disabled source cron plan without turning embedded checkpoints into timers", () => {
    const plan = buildLisaCatalogueCronPlan();
    expect(plan.validationErrors).toEqual([]);
    expect(plan.sourceStatus).toBe("SOURCE_ONLY");
    expect(plan.enabled).toBe(false);
    expect(plan.deliveryMode).toBe("none");
    expect(plan.entries).toHaveLength(21);
    expect(plan.entries.find((entry) => entry.family === "battery_tracking")?.scheduleKind).toBe(
      "embedded",
    );
    expect(plan.entries.filter((entry) => entry.family === "battery_tracking")).toHaveLength(1);
    expect(plan.providerDecision.status).toBe("HOLD");
  });
});

describe("Lisa canonical operational desired state", () => {
  it("contains the 19 stable declarations plus separately registered Memory Dreaming", () => {
    expect(validateLisaJobDesiredState()).toEqual([]);
    assertValidLisaJobDesiredState();
    expect(LISA_JOB_DESIRED_STATE.declarations).toHaveLength(19);
    expect(
      new Set(LISA_JOB_DESIRED_STATE.declarations.map((item) => item.declarationKey)).size,
    ).toBe(19);
    expect(LISA_JOB_DESIRED_STATE.externalMaintenance).toMatchObject({
      id: "memory-dreaming",
      cronDeclaration: null,
      registration: "separate-openclaw-item",
    });
    expect(LISA_JOB_DESIRED_STATE.excludedCronFamilies).toEqual(["librarian", "backup"]);
    for (const item of LISA_JOB_DESIRED_STATE.declarations) {
      expect(item.owner).toBe("main");
      expect(item.executor).toBe("lisa-cron");
      expect(item.activation).toEqual({ enabled: false, deliveryMode: "none" });
      expect(item.idempotencyKey).toMatch(/^[a-f0-9]{64}$/u);
      expect(item.receiptRequirements.length).toBeGreaterThan(0);
    }
  });

  it("computes a bounded read-only diff and detects schedule or delivery drift", () => {
    const live = LISA_JOB_DESIRED_STATE.declarations.map((item) => ({
      declarationKey: item.declarationKey,
      instanceIdentity: item.instanceIdentity,
      scheduleExpression: item.schedule.expression,
      scheduleTimeZone: item.schedule.timeZone,
      owner: item.owner,
      executor: item.executor,
      deliveryMode: item.delivery.mode,
      deliveryChannel: item.delivery.channel,
      enabled: item.activation.enabled,
    }));
    expect(diffLisaJobDesiredState(live).ok).toBe(true);
    const drifted = live.map((item) =>
      item.declarationKey === "lisa-executive-digest-evening-v1"
        ? { ...item, scheduleExpression: "0 17 * * *" }
        : item,
    );
    expect(diffLisaJobDesiredState(drifted)).toMatchObject({
      ok: false,
      drifted: ["lisa-executive-digest-evening-v1"],
    });
  });
});

describe("WP-07 combined domain coverage", () => {
  it("runs the maintenance dependency chain and restores availability at 06:30", () => {
    let state = createMaintenanceState({ localDate: "2026-08-13", cycleId: "cycle-synthetic" });
    expect(nextMaintenanceStage(state, 210)).toBe("librarian");
    state = completeMaintenanceStage(
      startMaintenanceStage(state, "librarian", 210),
      "librarian",
      220,
    );
    expect(nextMaintenanceStage(state, 220)).toBe("dreaming");
    state = completeMaintenanceStage(
      startMaintenanceStage(state, "dreaming", 220),
      "dreaming",
      250,
    );
    expect(nextMaintenanceStage(state, 250)).toBe("backup");
    state = completeMaintenanceStage(startMaintenanceStage(state, "backup", 250), "backup", 300);
    expect(planMaintenance(state, 390).lisaAvailable).toBe(true);
  });

  it("puts maintenance in the 07:00 digest while keeping health, battery, and selfie out", () => {
    const output = renderExecutiveDigest({
      ...baseDigest,
      maintenance: "Memory Dreaming: completed — 3 memories promoted",
    });
    expect(output).toContain("Memory Dreaming: completed — 3 memories promoted");
    expect(output).not.toMatch(/health|battery|selfie|medication/i);
  });

  it("renders Flash Battery Status and the 14:45 flexible-period decision", () => {
    const output = renderFlashReport({
      deadline: "14:45",
      status: "Decision needed",
      completed: [item("Synthetic completion")],
      inProgress: [],
      issues: [],
      decisions: [],
      supervisedAgents: [],
      nextExpectedResult: "Synthetic evidence by 17:00",
      batteryStatus: "Last observed: 82% plugged; estimate fresh; next routine charge tonight.",
      flexiblePeriod: "personal",
    });
    expect(output).toContain("Battery Status");
    expect(output).toContain("15:30–17:00 becomes personal time");
  });

  it("covers selfie boundaries and conditional reminder behavior", () => {
    expect(classifySelfieReport(17, "synthetic-event", "taken selfie")).toBe("invalid_before_18");
    expect(classifySelfieReport(18, "synthetic-event", "selfie completed")).toBe("Completed");
    expect(classifySelfieReport(22, "synthetic-event", "selfie completed", 1)).toBe(
      "Reported Late",
    );
    expect(shouldSendConditionalSelfieReminder(undefined)).toBe(true);
    expect(shouldSendConditionalSelfieReminder("Completed")).toBe(false);
  });

  it("keeps hourly battery evaluation silent unless a fresh 35% alert is due", () => {
    const observation: BatteryObservation = {
      atMs: 1_700_000_000_000,
      percentage: 50,
      plugged: false,
      context: "discharging",
      sourceEventId: "synthetic-battery-1",
      routineChanged: false,
      usable: true,
    };
    const rate: BatteryRate = {
      context: "discharging",
      direction: "discharging",
      percentPerHour: -20,
      samples: 2,
      confidence: "medium",
      evidenceStartAtMs: observation.atMs - 3_600_000,
      evidenceEndAtMs: observation.atMs,
    };
    const prediction = buildBatteryPrediction({
      observation,
      rate,
      nowMs: observation.atMs,
      nextExpectedChargeAtMs: observation.atMs + 7_200_000,
    });
    expect(evaluateHeartbeatBatteryAlert(prediction, observation)).not.toBeNull();
    expect(evaluateHeartbeatBatteryAlert(prediction, observation, prediction)).toBeNull();
    expect(
      evaluateHeartbeatBatteryAlert(
        { ...prediction, alertState: "none", idempotencyKey: null },
        observation,
      ),
    ).toBeNull();
  });

  it("maps private capacity to the only safe work signal and protects personal bindings", () => {
    expect(mapCapacityForWork("high")).toBe("normal");
    expect(renderLisaJobTemplate("private-health-monthly-report", {})).toContain(
      "personal email only",
    );
    expect(
      LISA_JOB_CATALOGUE.entries.find((entry) => entry.id === "private-health-monthly-report")
        ?.destinationBindingId,
    ).toBe("carlos-personal-email-binding");
  });
});
