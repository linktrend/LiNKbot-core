import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  EMAIL_FAILURE_PLAN,
  FLASH_DEADLINES,
  type LisaCalendarItem,
  type LisaEmailItem,
  type LisaReportItem,
} from "./reporting-contracts.js";
import {
  claimDeliveryCompleted,
  DEFAULT_DIGEST_PERIODS,
  planDigestDelivery,
  planFlashDelivery,
  renderExecutiveDigest,
  renderFlashReport,
  type ExecutiveDigestInput,
} from "./reporting.js";

const item = (
  text: string,
  source: LisaReportItem["source"] = "lisa",
  kind?: LisaReportItem["kind"],
): LisaReportItem => ({
  text,
  source,
  verification: "verified",
  ...(kind ? { kind } : {}),
});
const calendar = (
  text: string,
  calendarName: "work" | "personal",
  calendarSource: LisaCalendarItem["calendarSource"] = "lisa-managed",
): LisaCalendarItem => ({
  ...item(text, "calendar"),
  calendar: calendarName,
  calendarSource,
});
const email = (
  text: string,
  mailbox: LisaEmailItem["mailbox"] = "lisa",
  needsCarlosAttention = true,
): LisaEmailItem => ({
  ...item(text, "mailbox"),
  mailbox,
  mailboxAction: "received",
  needsCarlosAttention,
});
const baseDigest: ExecutiveDigestInput = {
  variant: "morning",
  completed: [item("Synthetic completion", "lisa", "meaningful_completion")],
  routineChecks: [item("Synthetic routine", "lisa", "routine_check")],
  workCalendar: [calendar("Planning review", "work")],
  personalCalendar: [calendar("Family time", "personal")],
  emails: [email("Approve synthetic budget")],
  carlosTasks: [item("Review launch plan", "google_tasks")],
  otherTasks: [item("Agent handoff", "agent_report")],
  outstanding: [item("Awaiting synthetic evidence", "conversation")],
  agentSummary: "All current — no exceptions.",
  agentExceptions: [],
  decisions: [],
  maintenance: "Memory Dreaming: completed — 3 memories promoted",
};

function golden(name: string): string {
  const fixture = JSON.parse(
    readFileSync(new URL(`./fixtures/${name}.json`, import.meta.url), "utf8"),
  ) as { expected: string };
  return fixture.expected;
}

describe("Lisa operational reporting", () => {
  it("renders the morning golden digest with work/personal, tasks, email, maintenance, and routine compression", () => {
    expect(renderExecutiveDigest(baseDigest)).toBe(golden("morning-digest"));
  });

  it("uses the same section order for the evening digest and omits resolved maintenance", () => {
    const output = renderExecutiveDigest({
      ...baseDigest,
      variant: "evening",
      maintenance: undefined,
    });
    expect(output).toBe(golden("evening-digest"));
    expect(output.indexOf("Decisions and attention")).toBeLessThan(
      output.indexOf("Completed since last digest"),
    );
    expect(output.indexOf("Completed since last digest")).toBeLessThan(
      output.indexOf("Calendar before next digest"),
    );
    expect(output.indexOf("Calendar before next digest")).toBeLessThan(
      output.indexOf("Tasks before next digest"),
    );
    expect(output.indexOf("Tasks before next digest")).toBeLessThan(output.indexOf("Outstanding"));
    expect(output.indexOf("Outstanding")).toBeLessThan(output.indexOf("Supervised agents"));
  });

  it("renders a concise all-clear digest without padded empty sections", () => {
    const output = renderExecutiveDigest({
      variant: "morning",
      completed: [],
      workCalendar: [],
      personalCalendar: [],
      carlosTasks: [],
      otherTasks: [],
      outstanding: [],
      agentExceptions: [],
      decisions: [],
    });
    expect(output).toBe(golden("all-clear-digest"));
    expect(output).not.toMatch(/\n\s*\n\s*\n/);
  });

  it("renders decision-needed output with a reason, mutually exclusive letters, and Other", () => {
    const output = renderExecutiveDigest({
      ...baseDigest,
      decisions: [
        {
          id: "D-001",
          matter: "Synthetic launch allocation",
          recommendation: "Keep the current allocation",
          reason: "It protects the hard deadline",
          options: ["Keep current", "Reallocate", "Other — specify"],
        },
      ],
    });
    expect(output).toBe(golden("decision-needed-digest"));
    expect(output).toContain(
      "D-001\nSynthetic launch allocation\nRecommendation: Keep the current allocation\nReason: It protects the hard deadline\nA. Keep current\nB. Reallocate\nC. Other — specify",
    );
  });

  it("rejects routine/private/inaccessible/unverified and mailbox-invalid inputs", () => {
    expect(
      renderExecutiveDigest({
        ...baseDigest,
        workCalendar: [calendar("Routine calendar event", "work", "routine")],
      }),
    ).not.toContain("Routine calendar event");
    expect(() =>
      renderExecutiveDigest({
        ...baseDigest,
        workCalendar: [calendar("Private event", "work", "private")],
      }),
    ).toThrow("private or inaccessible");
    expect(() =>
      renderExecutiveDigest({
        ...baseDigest,
        workCalendar: [calendar("Unavailable event", "work", "inaccessible")],
      }),
    ).toThrow("private or inaccessible");
    expect(() =>
      renderExecutiveDigest({
        ...baseDigest,
        completed: [{ ...item("Unverified claim"), verification: "unverified" }],
      }),
    ).toThrow("verified source");
    expect(() =>
      renderExecutiveDigest({
        ...baseDigest,
        completed: [item("Private detail", "lisa", "private_health")],
      }),
    ).toThrow("private item");
    expect(() =>
      renderExecutiveDigest({ ...baseDigest, emails: [email("External mailbox", "other")] }),
    ).toThrow("Lisa's mailbox");
    expect(
      renderExecutiveDigest({
        ...baseDigest,
        emails: [email("No decision needed", "lisa", false)],
      }),
    ).not.toContain("No decision needed");
  });

  it("expands only supervised-agent exceptions", () => {
    const output = renderExecutiveDigest({
      ...baseDigest,
      agentSummary: "Two supervised agents current",
      agentExceptions: [item("Missing evidence report", "agent_report")],
    });
    expect(output).toContain("Two supervised agents current\n- Missing evidence report");
  });

  it("keeps an unverified agent claim outstanding instead of completed", () => {
    const output = renderExecutiveDigest({
      ...baseDigest,
      completed: [],
      outstanding: [{ ...item("Agent says finished", "agent_report"), verification: "unverified" }],
      agentExceptions: [],
    });
    expect(output).toContain("**Outstanding**\n- Awaiting verification: Agent says finished");
    expect(output).not.toContain("**Completed since last digest**\n- Agent says finished");
  });

  it("renders every Flash Report field and the 14:45 flexible-period decision", () => {
    const output = renderFlashReport({
      deadline: "14:45",
      status: "Decision needed",
      completed: [item("Synthetic completion")],
      inProgress: [item("Synthetic work")],
      issues: [item("Synthetic blocker")],
      decisions: [],
      supervisedAgents: [item("Awaiting agent evidence", "agent_report")],
      nextExpectedResult: "Evidence bundle by 17:00",
      batteryStatus: "Last observed: 82% plugged; estimate fresh; next routine charge tonight.",
      flexiblePeriod: "personal",
    });
    expect(output).toBe(golden("flexible-period-1445"));
    expect(output).toContain("**Decisions needed**\nNone.");
    expect(output).toContain("15:30–17:00 becomes personal time");
  });

  it("always renders a one-line no-change Flash Report with the supplied battery summary", () => {
    const output = renderFlashReport({
      deadline: "20:45",
      status: "On track",
      completed: [],
      inProgress: [],
      issues: [],
      decisions: [],
      supervisedAgents: [],
      nextExpectedResult: "",
      batteryStatus: "Last observed: 90% unplugged; data fresh.",
    });
    expect(output).toBe(golden("no-change-flash"));
    expect(output).not.toContain("\n");
  });

  it("rejects malformed decisions, missing battery status, missing next result, and missing 14:45 choice", () => {
    const decision = {
      id: "D-002",
      matter: "Matter",
      recommendation: "Do X",
      reason: "Reason",
      options: ["X", "Y"],
    };
    expect(() => renderExecutiveDigest({ ...baseDigest, decisions: [decision] })).toThrow("Other");
    expect(() =>
      renderExecutiveDigest({
        ...baseDigest,
        decisions: [{ ...decision, options: ["X", "X", "Other — specify"] }],
      }),
    ).toThrow("mutually exclusive");
    expect(() =>
      renderFlashReport({
        deadline: "10:45",
        status: "On track",
        completed: [],
        inProgress: [],
        issues: [],
        decisions: [],
        supervisedAgents: [],
        nextExpectedResult: "Next",
        batteryStatus: "",
      }),
    ).toThrow("Battery Status");
    expect(() =>
      renderFlashReport({
        deadline: "10:45",
        status: "On track",
        completed: [item("Changed")],
        inProgress: [],
        issues: [],
        decisions: [],
        supervisedAgents: [],
        nextExpectedResult: "",
        batteryStatus: "Fresh",
      }),
    ).toThrow("next expected result");
    expect(() =>
      renderFlashReport({
        deadline: "14:45",
        status: "On track",
        completed: [item("Changed")],
        inProgress: [],
        issues: [],
        decisions: [],
        supervisedAgents: [],
        nextExpectedResult: "Next",
        batteryStatus: "Fresh",
      }),
    ).toThrow("flexible period");
  });

  it("plans digest and flash delivery separately and only claims completion from a receipt", () => {
    expect(planDigestDelivery("digest-2026-08-13-0700", "07:00", "06:40")).toEqual({
      channels: ["telegram", "email"],
      idempotencyKey: "digest-2026-08-13-0700",
      deadline: "07:00",
      preparationDeadline: "06:40",
      retryCount: 1,
      receiptRequired: true,
      browserChatCopy: true,
    });
    expect(planFlashDelivery("flash-2026-08-13-1445", "14:45", "14:25").channels).toEqual([
      "telegram",
    ]);
    for (const deadline of FLASH_DEADLINES) {
      expect(planFlashDelivery(`flash-${deadline}`, deadline, "before-deadline").deadline).toBe(
        deadline,
      );
    }
    expect(() => claimDeliveryCompleted(undefined)).toThrow("channel receipt");
    expect(
      claimDeliveryCompleted({
        channel: "telegram",
        idempotencyKey: "k",
        receiptId: "r",
        receivedAt: "2026-08-13T14:45:00+08:00",
      }),
    ).toBe("completed");
    expect(EMAIL_FAILURE_PLAN).toEqual({
      retryCount: 1,
      browserChatCopy: true,
      telegramFallback: "urgent_decisions_or_allocation_only",
      emailSuccessRequiresReceipt: true,
    });
  });

  it("uses the editable templates as the rendering source and preserves digest windows", () => {
    expect(
      readFileSync(new URL("./templates/executive-digest.md", import.meta.url), "utf8"),
    ).toContain(
      "**Calendar before next digest**\n**Work**\n{{work_calendar}}\n**Personal**\n{{personal_calendar}}",
    );
    expect(readFileSync(new URL("./templates/flash-report.md", import.meta.url), "utf8")).toContain(
      "**Decisions needed**\n{{decisions}}\n\n**Supervised agents**",
    );
    expect(renderExecutiveDigest(baseDigest)).toBe(golden("morning-digest"));
    expect(
      renderFlashReport({
        deadline: "20:45",
        status: "On track",
        completed: [item("Synthetic change")],
        inProgress: [],
        issues: [],
        decisions: [],
        supervisedAgents: [],
        nextExpectedResult: "Next result",
        batteryStatus: "Fresh",
      }),
    ).toContain("**Next expected result**\nNext result");
    expect(DEFAULT_DIGEST_PERIODS).toEqual({
      morning: { from: "previous 17:00", to: "07:00", nextDigest: "17:00" },
      evening: { from: "07:00", to: "17:00", nextDigest: "next 07:00" },
    });
  });

  it("rejects report injection and private-health detail", () => {
    expect(() =>
      renderFlashReport({
        deadline: "10:45",
        status: "On track",
        completed: [item("Bad {{placeholder}}")],
        inProgress: [],
        issues: [],
        decisions: [],
        supervisedAgents: [],
        nextExpectedResult: "Next",
        batteryStatus: "Fresh",
      }),
    ).toThrow("placeholder");
    expect(() =>
      renderFlashReport({
        deadline: "10:45",
        status: "On track",
        completed: [],
        inProgress: [],
        issues: [],
        decisions: [],
        supervisedAgents: [],
        nextExpectedResult: "Next",
        batteryStatus: "Mounjaro detail",
      }),
    ).toThrow("private-health");
  });
});
