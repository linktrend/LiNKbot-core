import { describe, expect, it } from "vitest";
import {
  LISA_TEMPLATE_KINDS,
  renderLisaJobTemplate,
  renderLisaJobTemplateJson,
} from "./render-lisa-job-template.ts";

const context = {
  weekdayDate: "Synthetic Thursday",
  time: "07:00",
  workSummary: { calendar: "No", tasks: "No", email: "No", unanswered: "No" },
  codingEvals: "No",
  pipelineLines: [],
  battery: {
    expectedCharge: "Synthetic 80%",
    timeTo30: "Synthetic 2h",
    timeTo98: "Synthetic 4h",
    chargeRate: "Synthetic normal",
    routineChanges: "None.",
    checks: "No",
    alerts: [],
  },
};

describe("unified Lisa source renderer", () => {
  it("registers and renders structured existing and domain templates", () => {
    expect(LISA_TEMPLATE_KINDS).toContain("executive-digest");
    expect(LISA_TEMPLATE_KINDS).not.toContain("telegram-heartbeat");
    expect(LISA_TEMPLATE_KINDS).not.toContain("pipeline-one-liner");
    expect(
      renderLisaJobTemplate("executive-digest", {
        variant: "morning",
        completed: [],
        workCalendar: [],
        personalCalendar: [],
        carlosTasks: [],
        otherTasks: [],
        outstanding: [],
        agentExceptions: [],
        decisions: [],
      }),
    ).toContain("Completed since last digest\nNone.");
    expect(renderLisaJobTemplate("battery-checkpoint", {})).toContain("Battery checkpoint");
  });

  it("accepts the {kind,input} JSON envelope and rejects unknown kinds", () => {
    expect(
      renderLisaJobTemplateJson({
        kind: "battery-checkpoint",
        input: {},
      }),
    ).toContain("Battery checkpoint");
    expect(() => renderLisaJobTemplate("not-a-template", {})).toThrow(/unknown/i);
    expect(() => renderLisaJobTemplateJson({ input: {} })).toThrow(/structured renderer input/i);
  });

  it("renders source templates only when their structured placeholders are resolved", () => {
    expect(renderLisaJobTemplate("maintenance-status", { count: 3 })).toContain(
      "3 memories promoted",
    );
    expect(() => renderLisaJobTemplate("maintenance-status", {})).toThrow(/structured count/i);
    expect(() => renderLisaJobTemplate("maintenance-restore-verification", {})).toThrow(
      /restoreDirectory/i,
    );
  });

  it("rejects unresolved placeholders, tables, missing Other, and private health leakage", () => {
    expect(() =>
      renderLisaJobTemplate("executive-digest", {
        variant: "morning",
        completed: [],
        workCalendar: [],
        personalCalendar: [],
        carlosTasks: [],
        otherTasks: [],
        outstanding: [],
        agentExceptions: [],
        decisions: [
          {
            id: "D-001",
            matter: "Synthetic choice",
            recommendation: "Choose A",
            reason: "Synthetic reason",
            options: ["A", "B"],
          },
        ],
      }),
    ).toThrow(/Other — specify/);
    expect(() =>
      renderLisaJobTemplate("weekly-plan", {
        items: [
          {
            itemId: "1",
            matter: "Synthetic matter",
            recommendation: "Choose A",
            reason: "Synthetic reason",
            choices: [
              { letter: "A", text: "A" },
              { letter: "B", text: "B" },
            ],
            taskSummary: "Synthetic task",
          },
        ],
      }),
    ).toThrow(/Other — specify/);
    expect(() =>
      renderLisaJobTemplate("executive-digest", {
        variant: "morning",
        completed: [{ text: "weight detail", source: "lisa", verification: "verified" }],
        workCalendar: [],
        personalCalendar: [],
        carlosTasks: [],
        otherTasks: [],
        outstanding: [],
        agentExceptions: [],
        decisions: [],
      }),
    ).toThrow(/private-health/i);
  });

  it("keeps private templates separate while preventing private fields in work output", () => {
    expect(renderLisaJobTemplate("private-health-check-in", {})).toContain("private Lisa check-in");
    expect(() =>
      renderLisaJobTemplate("flash-report", {
        deadline: "20:45",
        status: "On track",
        completed: [],
        inProgress: [],
        issues: [],
        decisions: [],
        supervisedAgents: [],
        nextExpectedResult: "Mounjaro appointment detail",
        batteryStatus: "Synthetic battery status",
      }),
    ).toThrow(/private-health/i);
  });
});
