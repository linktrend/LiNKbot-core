import {
  assertIsoDate,
  toExternalCapacity,
  WORK_BLOCKS,
  type CalendarEvent,
  type CapacitySignal,
  type PriorityClass,
  type TimeTask,
} from "./time-contracts.js";

const PRIORITY_ORDER: readonly PriorityClass[] = [
  "prevent-harm-or-hard-deadline",
  "unblock-dependent-work",
  "current-weekly-outcome",
  "routine-maintenance",
  "optional-improvement",
];
const REVIEW_PERIOD_IDS = new Set(["review-1", "review-2"]);

function dateNumber(date: string): number {
  assertIsoDate(date);
  return Date.parse(`${date}T00:00:00Z`);
}

function addDays(date: string, days: number): string {
  const value = new Date(dateNumber(date) + days * 24 * 60 * 60 * 1000);
  return value.toISOString().slice(0, 10);
}

function overlaps(
  leftStart: number,
  leftEnd: number,
  rightStart: number,
  rightEnd: number,
): boolean {
  return leftStart < rightEnd && rightStart < leftEnd;
}

export function rankTasks(tasks: readonly TimeTask[]): TimeTask[] {
  return [...tasks].sort((a, b) => {
    const priority = PRIORITY_ORDER.indexOf(a.priority) - PRIORITY_ORDER.indexOf(b.priority);
    if (priority !== 0) return priority;
    const urgency = Number(b.urgent) - Number(a.urgent);
    if (urgency !== 0) return urgency;
    const due =
      (a.dueDate ? dateNumber(a.dueDate) : Number.MAX_SAFE_INTEGER) -
      (b.dueDate ? dateNumber(b.dueDate) : Number.MAX_SAFE_INTEGER);
    if (due !== 0) return due;
    return a.id.localeCompare(b.id);
  });
}

export type TaskGroup = {
  id: string;
  taskIds: readonly string[];
  reason: "related-small-tasks" | "unrelated-only-suitable-work-remaining";
};

export function groupSmallTasks(
  tasks: readonly TimeTask[],
  options: { suitableAlternativeByTaskId?: Readonly<Record<string, boolean>> } = {},
): { groups: readonly TaskGroup[]; ungrouped: readonly TimeTask[] } {
  const small = tasks.filter((task) => task.effortPeriods.value <= 1);
  const remaining = tasks.filter((task) => !small.includes(task));
  const groups: TaskGroup[] = [];
  const grouped = new Set<string>();
  const byRelatedKey = new Map<string, TimeTask[]>();
  for (const task of small) {
    if (task.relatedKey) {
      const list = byRelatedKey.get(task.relatedKey) ?? [];
      list.push(task);
      byRelatedKey.set(task.relatedKey, list);
    }
  }
  for (const [key, related] of byRelatedKey) {
    if (related.length > 1) {
      const taskIds = related.map((task) => task.id);
      groups.push({ id: `group-${key}`, taskIds, reason: "related-small-tasks" });
      taskIds.forEach((id) => grouped.add(id));
    }
  }
  const unrelated = small.filter((task) => !grouped.has(task.id));
  const onlySuitableWork =
    unrelated.length > 1 &&
    unrelated.every((task) => options.suitableAlternativeByTaskId?.[task.id] === false);
  if (onlySuitableWork) {
    groups.push({
      id: "group-unrelated-suitable-only",
      taskIds: unrelated.map((task) => task.id),
      reason: "unrelated-only-suitable-work-remaining",
    });
    unrelated.forEach((task) => grouped.add(task.id));
  }
  return { groups, ungrouped: [...remaining, ...small.filter((task) => !grouped.has(task.id))] };
}

export type ChildResult = {
  id: string;
  parentId: string;
  title: string;
  connectedResult: string;
  effortPeriods: number;
};

export function splitLargeTask(
  parent: TimeTask,
  results: readonly { title: string; connectedResult: string; effortPeriods: number }[],
): ChildResult[] {
  if (
    results.length < 2 ||
    results.some(
      (result) =>
        result.effortPeriods <= 0 || !result.title.trim() || !result.connectedResult.trim(),
    )
  ) {
    throw new Error("larger work must split into at least two connected intermediate results");
  }
  return results.map((result, index) => ({
    id: `${parent.id}.${index + 1}`,
    parentId: parent.id,
    ...result,
  }));
}

export type WorkPeriodDecision = {
  date: string;
  periodId: string;
  taskIds: readonly string[];
  reason: string;
};

export type WorkPlanRequest = {
  date: string;
  horizonStart: string;
  tasks: readonly TimeTask[];
  calendarEvents?: readonly CalendarEvent[];
  capacity: CapacitySignal;
  timeOffDecision?: "yes" | "no";
  personalWorkCurrent?: boolean;
  schoolDropoff?: boolean;
};

export type WorkPlan = {
  timezone: "Asia/Taipei";
  externalCapacity: "normal" | "reduced" | "unavailable" | "recovered";
  flexiblePeriod: "work" | "personal";
  schoolDropoffMayUseFlexiblePeriod: boolean;
  decisionRequired?: "ask-time-off" | "protect-hard-commitments";
  allocations: readonly WorkPeriodDecision[];
  unscheduled: readonly { taskId: string; reason: string }[];
  protectedPeriods: readonly { startMinute: number; endMinute: number; reason: string }[];
};

function suitableForBlock(task: TimeTask, blockId: string): boolean {
  if (blockId === "work-1") return task.difficulty.value === "easy";
  if (blockId === "work-2") return task.difficulty.value !== "hard";
  if (blockId === "work-3") return true;
  return task.difficulty.value !== "hard";
}

export function chooseFlexiblePeriod(
  tasks: readonly TimeTask[],
  personalWorkCurrent: boolean,
): "work" | "personal" {
  const hasOpenCarlosWork = tasks.some(
    (task) => task.owner !== "Lisa" && task.owner !== "subordinate-agent",
  );
  return personalWorkCurrent && !hasOpenCarlosWork ? "personal" : "work";
}

export function capacityPlan(
  capacity: CapacitySignal,
): "protect_commitments" | "easy_work" | "normal_work" {
  return capacity === "unavailable"
    ? "protect_commitments"
    : capacity === "reduced"
      ? "easy_work"
      : "normal_work";
}

export function planWorkBlocks(request: WorkPlanRequest): WorkPlan {
  assertIsoDate(request.date);
  assertIsoDate(request.horizonStart);
  if (
    dateNumber(request.date) < dateNumber(request.horizonStart) ||
    dateNumber(request.date) > dateNumber(addDays(request.horizonStart, 27))
  ) {
    throw new Error("planning date is outside the four-week horizon");
  }
  const flexiblePeriod =
    request.capacity === "unavailable"
      ? "personal"
      : request.capacity === "high"
        ? "work"
        : chooseFlexiblePeriod(request.tasks, request.personalWorkCurrent ?? false);
  const schoolDropoffMayUseFlexiblePeriod =
    request.schoolDropoff === true && request.date <= "2027-02-01";
  const protectedPeriods = [
    { startMinute: 10 * 60 + 15, endMinute: 11 * 60, reason: "break" },
    { startMinute: 12 * 60 + 30, endMinute: 13 * 60 + 15, reason: "break" },
    { startMinute: 14 * 60 + 45, endMinute: 15 * 60 + 30, reason: "break" },
    ...WORK_BLOCKS.filter((block) => REVIEW_PERIOD_IDS.has(block.id)).map((block) => ({
      startMinute: block.startMinute,
      endMinute: block.endMinute,
      reason: "protected review",
    })),
  ];
  const unscheduled: { taskId: string; reason: string }[] = [];
  const horizonTasks = rankTasks(request.tasks).filter((task) => {
    if (!task.dueDate) return true;
    const inHorizon =
      dateNumber(task.dueDate) >= dateNumber(request.horizonStart) &&
      dateNumber(task.dueDate) <= dateNumber(addDays(request.horizonStart, 27));
    if (!inHorizon) unscheduled.push({ taskId: task.id, reason: "outside four-week horizon" });
    return inHorizon;
  });
  if (request.capacity === "reduced" && request.timeOffDecision === undefined) {
    return {
      timezone: "Asia/Taipei",
      externalCapacity: toExternalCapacity(request.capacity),
      flexiblePeriod,
      schoolDropoffMayUseFlexiblePeriod,
      decisionRequired: "ask-time-off",
      allocations: [],
      unscheduled: [
        ...unscheduled,
        ...horizonTasks.map((task) => ({
          taskId: task.id,
          reason: "reduced capacity requires time-off decision before replanning",
        })),
      ],
      protectedPeriods,
    };
  }
  const availableTasks = horizonTasks.filter((task) => {
    if (request.capacity === "reduced" && request.timeOffDecision === "yes") {
      unscheduled.push({ taskId: task.id, reason: "Carlos requested time off" });
      return false;
    }
    if (request.capacity === "unavailable" && (!task.urgent || task.owner !== "Carlos")) {
      unscheduled.push({
        taskId: task.id,
        reason: "unavailable capacity protects hard commitments only",
      });
      return false;
    }
    return true;
  });
  const unavailableNeedsDecision =
    request.capacity === "unavailable" && availableTasks.some((task) => task.urgent);
  const allocations: WorkPeriodDecision[] = [];
  const remainingPeriods = new Map(
    availableTasks.map((task) => [task.id, Math.max(1, Math.ceil(task.effortPeriods.value))]),
  );
  for (const block of WORK_BLOCKS.filter(
    (item) => item.kind === "work" || (item.kind === "flexible" && flexiblePeriod === "work"),
  )) {
    const eventBlocksThisPeriod = request.calendarEvents?.some(
      (event) =>
        event.date === request.date &&
        overlaps(block.startMinute, block.endMinute, event.startMinute, event.endMinute),
    );
    if (eventBlocksThisPeriod) continue;
    const candidates = availableTasks.filter(
      (task) =>
        (remainingPeriods.get(task.id) ?? 0) > 0 &&
        suitableForBlock(task, block.id) &&
        (request.capacity !== "reduced" || task.difficulty.value === "easy" || task.urgent),
    );
    if (candidates.length === 0) continue;
    const chosen = candidates[0];
    if (!chosen) continue;
    remainingPeriods.set(chosen.id, (remainingPeriods.get(chosen.id) ?? 1) - 1);
    allocations.push({
      date: request.date,
      periodId: block.id,
      taskIds: [chosen.id],
      reason:
        request.capacity === "reduced"
          ? "easier work at a slower pace"
          : "priority and difficulty matched to block",
    });
  }
  for (const task of availableTasks) {
    if ((remainingPeriods.get(task.id) ?? 0) > 0)
      unscheduled.push({ taskId: task.id, reason: "not enough suitable work periods remain" });
  }
  return {
    timezone: "Asia/Taipei",
    externalCapacity: toExternalCapacity(request.capacity),
    flexiblePeriod,
    schoolDropoffMayUseFlexiblePeriod,
    ...(unavailableNeedsDecision ? { decisionRequired: "protect-hard-commitments" as const } : {}),
    allocations,
    unscheduled,
    protectedPeriods,
  };
}

export function closeWorkPeriod(input: {
  periodId: string;
  endedAtMinute: number;
  result: string;
  nextAction: string;
}): {
  periodId: string;
  recordedAtMinute: number;
  result: string;
  nextAction: string;
  breakConsumed: false;
} {
  const block = WORK_BLOCKS.find((item) => item.id === input.periodId);
  if (!block || block.kind === "review") throw new Error(`not a work period: ${input.periodId}`);
  if (input.endedAtMinute < block.startMinute)
    throw new Error("work-period close cannot precede the work period");
  if (input.endedAtMinute > block.endMinute)
    throw new Error("work cannot spill into the following break");
  if (!input.result.trim() || !input.nextAction.trim())
    throw new Error("work-period close requires result and next action");
  return {
    periodId: input.periodId,
    recordedAtMinute: input.endedAtMinute,
    result: input.result.trim(),
    nextAction: input.nextAction.trim(),
    breakConsumed: false,
  };
}

export type StandingRuleProposal = {
  id: string;
  matter: string;
  recommendation: string;
  reason: string;
  active: false;
  requiresCarlosApproval: true;
};

export function proposeStandingRule(
  input: Pick<StandingRuleProposal, "id" | "matter" | "recommendation" | "reason">,
): StandingRuleProposal {
  return { ...input, active: false, requiresCarlosApproval: true };
}

export type RoutePlan = {
  taskId: string;
  taskLedger: "Google Tasks" | "HOLD";
  calendar: "proposal-only" | "not-applicable";
  externalActionPerformed: false;
  liveBrainWriteClaimed: false;
};

export function planProviderRouting(task: Pick<TimeTask, "id" | "owner" | "status">): RoutePlan {
  return {
    taskId: task.id,
    taskLedger: task.owner === "Carlos" ? "Google Tasks" : "HOLD",
    calendar:
      task.status === "Scheduled" || task.status === "In progress"
        ? "proposal-only"
        : "not-applicable",
    externalActionPerformed: false,
    liveBrainWriteClaimed: false,
  };
}

export type ApprovalBlock = {
  itemId: string;
  matter: string;
  recommendation: string;
  reason: string;
  choices: readonly { letter: string; text: string }[];
};

export function renderApprovalBlock(block: ApprovalBlock): string {
  if (!/^\d+[A-Za-z0-9-]*$/.test(block.itemId))
    throw new Error("approval item ID must be unique and readable");
  if (!block.matter.trim() || !block.recommendation.trim() || !block.reason.trim())
    throw new Error("approval block fields are required");
  if (
    block.choices.length < 2 ||
    block.choices.some((choice) => !/^[A-Z]$/.test(choice.letter) || !choice.text.trim()) ||
    new Set(block.choices.map((choice) => choice.letter)).size !== block.choices.length
  )
    throw new Error("approval choices must be mutually exclusive lettered choices");
  if (block.choices.at(-1)?.text !== "Other — specify")
    throw new Error("approval block must end with Other — specify");
  return [
    block.itemId,
    `Matter: ${block.matter}`,
    `Recommendation: ${block.recommendation}`,
    `Reason: ${block.reason}`,
    ...block.choices.map((choice) => `${choice.letter}. ${choice.text}`),
  ].join("\n");
}

export function assertPhoneReadableDocument(document: string): void {
  if (/^\s*\|.*\|\s*$/m.test(document) || /^\s*[-| ]{5,}\s*$/m.test(document))
    throw new Error("tables are not allowed in mobile reports");
  const ids = [...document.matchAll(/^(\d+[A-Za-z0-9-]*)$/gm)].map((match) => match[1]);
  if (new Set(ids).size !== ids.length) throw new Error("approval item IDs must be unique");
  const blocks = document
    .split(/\n(?=\d+[A-Za-z0-9-]*\nMatter:)/g)
    .filter((block) => /^\d+[A-Za-z0-9-]*\nMatter:/.test(block));
  for (const block of blocks) {
    if (
      !/^\d+[A-Za-z0-9-]*\nMatter: .+\nRecommendation: .+\nReason: .+\n(?:[A-Z]\. .+\n)*[A-Z]\. Other — specify$/m.test(
        block,
      )
    ) {
      throw new Error("malformed approval block");
    }
  }
}

export type WeeklyPlanItem = ApprovalBlock & { taskSummary: string };

export function renderWeeklyPlan(items: readonly WeeklyPlanItem[]): string {
  const output = [
    "Weekly plan",
    "Four-week horizon",
    ...items.flatMap((item) => [renderApprovalBlock(item), `Plan: ${item.taskSummary}`, ""]),
  ]
    .join("\n")
    .trimEnd();
  assertPhoneReadableDocument(output);
  return `${output}\n`;
}

export function renderReview(input: {
  reviewPeriod: string;
  approvalBlocks: readonly ApprovalBlock[];
  result: string;
  nextAction: string;
  flexibleDecision: "work" | "personal";
}): string {
  const output = [
    "Time-management review",
    `Review period: ${input.reviewPeriod}`,
    "Timezone: Asia/Taipei",
    "",
    "Decisions and attention",
    ...input.approvalBlocks.flatMap((block) => [renderApprovalBlock(block), ""]),
    `Result: ${input.result}`,
    `Next action: ${input.nextAction}`,
    "Break protected: yes",
    `Flexible period: ${input.flexibleDecision}`,
  ]
    .join("\n")
    .trimEnd();
  assertPhoneReadableDocument(output);
  return `${output}\n`;
}

export type MonthlyReportPlan = {
  lastPlannedWorkday: string;
  intervalSincePreviousReport: string;
  expectedIntervalUntilNextReport: string;
  deliveryTime: "16:45";
};

export function getLastPlannedWorkday(
  year: number,
  month: number,
  plannedWorkdays?: readonly string[],
): string {
  if (!Number.isInteger(year) || !Number.isInteger(month) || month < 1 || month > 12)
    throw new Error("invalid planned-workday month");
  const prefix = `${year}-${String(month).padStart(2, "0")}-`;
  const candidates = plannedWorkdays
    ? plannedWorkdays
        .filter((date) => date.startsWith(prefix))
        .map((date) => {
          assertIsoDate(date);
          return date;
        })
    : Array.from(
        { length: 31 },
        (_, index) => `${prefix}${String(index + 1).padStart(2, "0")}`,
      ).filter((date) => {
        try {
          assertIsoDate(date);
          return (
            new Date(dateNumber(date)).getUTCDay() !== 0 &&
            new Date(dateNumber(date)).getUTCDay() !== 6
          );
        } catch {
          return false;
        }
      });
  const last = [...candidates].sort().at(-1);
  if (!last) throw new Error("planned month has no workday");
  return last;
}

export function planMonthlyReport(input: {
  previousReportDate: string;
  nextReportDate: string;
  year: number;
  month: number;
  plannedWorkdays: readonly string[];
}): MonthlyReportPlan {
  assertIsoDate(input.previousReportDate);
  assertIsoDate(input.nextReportDate);
  if (dateNumber(input.nextReportDate) <= dateNumber(input.previousReportDate))
    throw new Error("monthly report interval must move forward");
  return {
    lastPlannedWorkday: getLastPlannedWorkday(input.year, input.month, input.plannedWorkdays),
    intervalSincePreviousReport: `${input.previousReportDate} inclusive through ${addDays(input.nextReportDate, -1)} inclusive`,
    expectedIntervalUntilNextReport: `${input.nextReportDate} inclusive onward`,
    deliveryTime: "16:45",
  };
}

export function renderMonthlyWorkReport(input: {
  plan: MonthlyReportPlan;
  completed: string;
  expected: string;
  approvalBlocks: readonly ApprovalBlock[];
}): string {
  const output = [
    "Monthly Work Report",
    "Report delivery: 16:45 on the last planned workday",
    "Timezone: Asia/Taipei",
    `Last planned workday: ${input.plan.lastPlannedWorkday}`,
    `Exact interval since the previous report: ${input.plan.intervalSincePreviousReport}`,
    `Expected interval until the next report: ${input.plan.expectedIntervalUntilNextReport}`,
    "",
    "Completed since the previous report",
    input.completed.trim() || "None.",
    "",
    "Expected until the next report",
    input.expected.trim() || "None.",
    "",
    "Decisions and attention",
    ...input.approvalBlocks.flatMap((block) => [renderApprovalBlock(block), ""]),
  ]
    .join("\n")
    .trimEnd();
  assertPhoneReadableDocument(output);
  return `${output}\n`;
}
