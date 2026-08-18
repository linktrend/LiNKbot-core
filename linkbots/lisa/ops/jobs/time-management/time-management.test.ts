import { describe, expect, it } from "vitest";
import goldenScenarios from "./fixtures/golden-scenarios.json" with { type: "json" };
import {
  canPerformExternalAction,
  classifyIntake,
  confirmAtReview,
  decideAuthority,
  decideReadOnlyResearchDelegation,
  routeTask,
} from "./intake.js";
import {
  assertPhoneReadableDocument,
  closeWorkPeriod,
  groupSmallTasks,
  planMonthlyReport,
  planProviderRouting,
  planWorkBlocks,
  proposeStandingRule,
  rankTasks,
  renderApprovalBlock,
  renderMonthlyWorkReport,
  renderReview,
  renderWeeklyPlan,
  splitLargeTask,
} from "./planner.js";
import {
  InMemoryPendingTaskStore,
  assertCompletionEvidence,
  assertTransition,
  transitionTask,
  toExternalCapacity,
  type TimeTask,
} from "./time-contracts.js";

function task(overrides: Partial<TimeTask> = {}): TimeTask {
  return {
    id: "T-000001",
    title: "Synthetic task",
    source: "explicit",
    explicit: true,
    confirmed: true,
    urgent: false,
    status: "Ready",
    priority: "optional-improvement",
    owner: "Carlos",
    difficulty: { value: "easy", source: "Lisa estimate", overridable: true },
    effortPeriods: { value: 1, source: "Lisa estimate", overridable: true },
    importance: { value: 3, source: "Lisa estimate", overridable: true },
    dependencies: [],
    capacity: "normal",
    confirmationDue: "immediate",
    estimates: {
      importance: { value: 3, source: "Lisa estimate", overridable: true },
      difficulty: { value: "easy", source: "Lisa estimate", overridable: true },
      effortPeriods: { value: 1, source: "Lisa estimate", overridable: true },
      dependencies: { value: [], source: "Lisa estimate", overridable: true },
      owner: { value: "Carlos", source: "Lisa estimate", overridable: true },
    },
    ...overrides,
  };
}

describe("Lisa time-management contracts", () => {
  it("classifies explicit, inferred, and urgent intake correctly", () => {
    const explicit = classifyIntake({ id: "T-1", title: "Do it", explicit: true });
    const inferred = classifyIntake({ id: "P-1", title: "Maybe useful", explicit: false });
    const urgent = classifyIntake({
      id: "P-2",
      title: "Prevent outage",
      explicit: false,
      urgent: true,
    });
    expect(explicit.status).toBe("Ready");
    expect(inferred.status).toBe("Provisional");
    expect(inferred.confirmationDue).toBe("next-review");
    expect(inferred.estimates.owner.source).toBe("Lisa estimate");
    const tuesdayChange = classifyIntake({
      id: "P-2",
      title: goldenScenarios.tuesdayChange.description,
      explicit: false,
    });
    expect(tuesdayChange.status).toBe("Provisional");
    expect(urgent.status).toBe("Ready");
    expect(confirmAtReview(inferred)).toMatchObject({
      source: "inferred",
      explicit: false,
      confirmed: true,
      status: "Ready",
    });
  });

  it("delegates only matching read-only research and keeps external authority fail-closed", () => {
    expect(
      decideReadOnlyResearchDelegation({
        researchOnly: true,
        requestedDomain: "marketing",
        subordinateDomains: ["marketing"],
      }).allowed,
    ).toBe(true);
    expect(
      decideReadOnlyResearchDelegation({
        researchOnly: true,
        requestedDomain: "legal",
        subordinateDomains: ["marketing"],
      }).allowed,
    ).toBe(false);
    expect(
      decideReadOnlyResearchDelegation({
        researchOnly: true,
        requestedDomain: "",
        subordinateDomains: [""],
      }).allowed,
    ).toBe(false);
    expect(
      decideReadOnlyResearchDelegation({
        researchOnly: false,
        requestedDomain: "marketing",
        subordinateDomains: ["marketing"],
      }).allowed,
    ).toBe(false);
    for (const action of [
      "spend",
      "external-commitment",
      "final-external-message",
      "calendar-mutation",
      "consequential-change",
    ] as const) {
      expect(decideAuthority(action, []).allowed).toBe(false);
      expect(decideAuthority(action, [action]).allowed).toBe(true);
    }
    expect(canPerformExternalAction(false)).toBe(false);
  });

  it("validates status transitions and requires evidence for Lisa/agent completion", () => {
    expect(() => assertTransition("Provisional", "Verified complete")).toThrow();
    expect(() => assertTransition("Verified complete", "Ready")).toThrow();
    const agentTask = task({ status: "Awaiting verification" });
    expect(() =>
      transitionTask(agentTask, "Verified complete", [
        { source: "subordinate-agent", description: "Synthetic result", reference: "evidence-1" },
      ]),
    ).not.toThrow();
    expect(() =>
      transitionTask(agentTask, "Verified complete", [
        { source: "subordinate-agent", description: "", reference: "" },
      ]),
    ).toThrow(/requires evidence/);
    expect(() =>
      assertCompletionEvidence("Completed — Carlos reported", [
        { source: "Carlos", description: "I completed it" },
      ]),
    ).not.toThrow();
    expect(() =>
      assertCompletionEvidence("Completed — Carlos reported", [
        { source: "Carlos", description: "" },
      ]),
    ).toThrow(/Carlos/);
  });

  it("ranks the approved priority order before easy unrelated work", () => {
    const ranked = rankTasks([
      task({ id: "optional", priority: "optional-improvement" }),
      task({ id: "unblock", priority: "unblock-dependent-work" }),
      task({ id: "harm", priority: "prevent-harm-or-hard-deadline", urgent: true }),
      task({ id: "weekly", priority: "current-weekly-outcome" }),
      task({ id: "routine", priority: "routine-maintenance" }),
    ]);
    expect(ranked.map((item) => item.id)).toEqual([
      "harm",
      "unblock",
      "weekly",
      "routine",
      "optional",
    ]);
  });

  it("plans the Monday four-week horizon without moving calendar appointments", () => {
    const monday = goldenScenarios.mondayFourWeekPlan.date;
    const outside = task({ id: "outside", dueDate: "2026-09-15" });
    const hardWork3 = {
      id: "appointment",
      title: "Appointment",
      date: monday,
      startMinute: 13 * 60 + 15,
      endMinute: 14 * 60 + 45,
      hard: true,
      movable: false as const,
    };
    const plan = planWorkBlocks({
      date: monday,
      horizonStart: goldenScenarios.mondayFourWeekPlan.horizonStart,
      tasks: [
        task({
          id: "easy",
          difficulty: { value: "easy", source: "Lisa estimate", overridable: true },
        }),
        task({
          id: "hard",
          difficulty: { value: "hard", source: "Lisa estimate", overridable: true },
        }),
        outside,
      ],
      calendarEvents: [hardWork3],
      capacity: "normal",
    });
    expect(plan.timezone).toBe("Asia/Taipei");
    expect(plan.allocations.some((item) => item.periodId === "work-3")).toBe(false);
    expect(plan.unscheduled).toContainEqual({
      taskId: "outside",
      reason: "outside four-week horizon",
    });
    expect(plan.protectedPeriods.some((item) => item.reason === "break")).toBe(true);
    const multiPeriod = planWorkBlocks({
      date: monday,
      horizonStart: goldenScenarios.mondayFourWeekPlan.horizonStart,
      tasks: [
        task({
          id: "multi",
          effortPeriods: { value: 2, source: "Lisa estimate", overridable: true },
        }),
      ],
      capacity: "normal",
    });
    expect(multiPeriod.allocations.filter((item) => item.taskIds.includes("multi"))).toHaveLength(
      2,
    );
  });

  it("asks before reduced-capacity replanning, then selects easier work, and never turns high into overtime", () => {
    const reduced = planWorkBlocks({
      date: "2026-08-17",
      horizonStart: "2026-08-17",
      tasks: [task()],
      capacity: "reduced",
    });
    expect(reduced.decisionRequired).toBe("ask-time-off");
    const noTimeOff = planWorkBlocks({
      date: "2026-08-17",
      horizonStart: "2026-08-17",
      tasks: [task()],
      capacity: "reduced",
      timeOffDecision: "no",
    });
    expect(noTimeOff.allocations[0]?.reason).toContain("easier work");
    const high = planWorkBlocks({
      date: "2026-08-17",
      horizonStart: "2026-08-17",
      tasks: [task()],
      capacity: "high",
      personalWorkCurrent: true,
    });
    expect(toExternalCapacity("high")).toBe("normal");
    expect(high.flexiblePeriod).toBe("work");
    expect(
      planWorkBlocks({
        date: "2026-08-17",
        horizonStart: "2026-08-17",
        tasks: [],
        capacity: "high",
        personalWorkCurrent: true,
      }).flexiblePeriod,
    ).toBe("work");
    expect(
      planWorkBlocks({
        date: "2026-08-17",
        horizonStart: "2026-08-17",
        tasks: [],
        capacity: "normal",
        schoolDropoff: true,
      }).schoolDropoffMayUseFlexiblePeriod,
    ).toBe(true);
  });

  it("uses personal flexible time only when personal work is current and removes it when unavailable", () => {
    const personal = planWorkBlocks({
      date: "2026-08-17",
      horizonStart: "2026-08-17",
      tasks: [],
      capacity: "normal",
      personalWorkCurrent: true,
    });
    expect(personal.flexiblePeriod).toBe("personal");
    const unavailable = planWorkBlocks({
      date: "2026-08-17",
      horizonStart: "2026-08-17",
      tasks: [task({ id: "optional" })],
      capacity: "unavailable",
    });
    expect(unavailable.flexiblePeriod).toBe("personal");
    expect(unavailable.allocations.some((item) => item.periodId === "flexible")).toBe(false);
  });

  it("groups related small tasks, permits the unrelated exception only when necessary, and splits larger work", () => {
    const related = task({ id: "related-1", relatedKey: "research" });
    const relatedTwo = task({ id: "related-2", relatedKey: "research" });
    const unrelated = task({ id: "unrelated", relatedKey: undefined });
    expect(groupSmallTasks([related, relatedTwo, unrelated]).groups[0]?.reason).toBe(
      "related-small-tasks",
    );
    expect(
      groupSmallTasks([related, unrelated], {
        suitableAlternativeByTaskId: { "related-1": false, unrelated: false },
      }).groups[0]?.reason,
    ).toBe("unrelated-only-suitable-work-remaining");
    expect(
      splitLargeTask(task({ id: "parent" }), [
        { title: "Result one", connectedResult: "feeds result two", effortPeriods: 1 },
        { title: "Result two", connectedResult: "uses result one", effortPeriods: 1 },
      ])[1]?.parentId,
    ).toBe("parent");
  });

  it("closes a work period with a result and next action without consuming a break", () => {
    expect(
      closeWorkPeriod({
        periodId: "work-1",
        endedAtMinute: 10 * 60 + 15,
        result: "Synthetic result",
        nextAction: "Review result",
      }).breakConsumed,
    ).toBe(false);
    expect(() =>
      closeWorkPeriod({
        periodId: "work-1",
        endedAtMinute: 10 * 60 + 16,
        result: "Late",
        nextAction: "Next",
      }),
    ).toThrow(/break/);
  });

  it("keeps provider routing and standing rules as proposals only", () => {
    expect(routeTask({ owner: "Carlos", status: "Ready" })).toEqual({
      destination: "google-tasks",
      calendarProposal: false,
      hold: false,
      liveBrainWriteClaimed: false,
    });
    expect(planProviderRouting({ id: "T-1", owner: "Lisa", status: "Scheduled" })).toEqual({
      taskId: "T-1",
      taskLedger: "HOLD",
      calendar: "proposal-only",
      externalActionPerformed: false,
      liveBrainWriteClaimed: false,
    });
    expect(
      proposeStandingRule({
        id: "12",
        matter: "Group research",
        recommendation: "Group related items",
        reason: "Repeated approved choices",
      }).active,
    ).toBe(false);
  });

  it("maps provider-outage pending IDs once and never invents permanent IDs", () => {
    const store = new InMemoryPendingTaskStore();
    const pending = store.enqueue(task({ id: "local" }), "2026-08-17T08:15:00+08:00");
    const second = store.enqueue(task({ id: "local-2" }), "2026-08-17T08:16:00+08:00");
    expect(pending.pendingId).toBe("P-0001");
    expect(store.mapOnce(pending.pendingId, "T-000042").permanentId).toBe("T-000042");
    expect(store.mapOnce(pending.pendingId, "T-000042").permanentId).toBe("T-000042");
    expect(() => store.mapOnce(pending.pendingId, "T-000043")).toThrow(/already mapped/);
    expect(() => store.mapOnce(second.pendingId, "T-000042")).toThrow(/already mapped/);
  });

  it("renders vertical approval blocks and rejects tables or malformed choices", () => {
    const item = {
      itemId: "1A",
      matter: "Choose synthetic plan",
      recommendation: "Continue",
      reason: "It protects the weekly outcome",
      taskSummary: "Synthetic outcome",
      choices: [
        { letter: "A", text: "Continue" },
        { letter: "B", text: "Change plan" },
        { letter: "C", text: "Other — specify" },
      ] as const,
    };
    const weekly = renderWeeklyPlan([item]);
    expect(weekly).toContain("1A\nMatter:");
    expect(weekly).toContain("Other — specify");
    expect(() =>
      assertPhoneReadableDocument(
        "| a | b |\n|---|---|\n1A\nMatter: x\nRecommendation: y\nReason: z\nA. yes\nB. no\nOther — specify",
      ),
    ).toThrow(/tables/);
    expect(() =>
      renderApprovalBlock({ ...item, choices: [{ letter: "A", text: "Continue" }] }),
    ).toThrow(/choices/);
    expect(() =>
      renderApprovalBlock({
        ...item,
        choices: [
          { letter: "A", text: "Continue" },
          { letter: "A", text: "Other — specify" },
        ],
      }),
    ).toThrow(/choices/);
  });

  it("uses the last planned workday and exact monthly intervals", () => {
    const monthly = planMonthlyReport({
      previousReportDate: "2026-07-31",
      nextReportDate: "2026-08-31",
      year: 2026,
      month: 8,
      plannedWorkdays: ["2026-08-28"],
    });
    expect(monthly.lastPlannedWorkday).toBe("2026-08-28");
    expect(monthly.intervalSincePreviousReport).toBe(
      "2026-07-31 inclusive through 2026-08-30 inclusive",
    );
    expect(monthly.expectedIntervalUntilNextReport).toBe("2026-08-31 inclusive onward");
    const approval = {
      itemId: "2A",
      matter: "Synthetic monthly decision",
      recommendation: "Keep plan",
      reason: "Protects the interval",
      choices: [
        { letter: "A", text: "Keep plan" },
        { letter: "B", text: "Change plan" },
        { letter: "C", text: "Other — specify" },
      ] as const,
    };
    expect(
      renderMonthlyWorkReport({
        plan: monthly,
        completed: "None.",
        expected: "None.",
        approvalBlocks: [approval],
      }),
    ).toContain("Exact interval since the previous report");
    expect(
      renderReview({
        reviewPeriod: "Tuesday morning",
        approvalBlocks: [approval],
        result: "Synthetic result",
        nextAction: "Synthetic next action",
        flexibleDecision: "work",
      }),
    ).toContain("Break protected: yes");
  });
});
