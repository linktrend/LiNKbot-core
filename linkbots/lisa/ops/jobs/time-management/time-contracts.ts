export const TIME_ZONE = "Asia/Taipei" as const;

export const WORK_BLOCKS = [
  {
    id: "review-1",
    label: "Review 1",
    startMinute: 8 * 60 + 15,
    endMinute: 8 * 60 + 45,
    kind: "review",
  },
  {
    id: "work-1",
    label: "Work Period 1",
    startMinute: 8 * 60 + 45,
    endMinute: 10 * 60 + 15,
    kind: "work",
  },
  {
    id: "work-2",
    label: "Work Period 2",
    startMinute: 11 * 60,
    endMinute: 12 * 60 + 30,
    kind: "work",
  },
  {
    id: "work-3",
    label: "Work Period 3",
    startMinute: 13 * 60 + 15,
    endMinute: 14 * 60 + 45,
    kind: "work",
  },
  {
    id: "flexible",
    label: "Flexible period",
    startMinute: 15 * 60 + 30,
    endMinute: 17 * 60,
    kind: "flexible",
  },
  {
    id: "review-2",
    label: "Review 2",
    startMinute: 17 * 60,
    endMinute: 17 * 60 + 30,
    kind: "review",
  },
] as const;

export type WorkBlock = (typeof WORK_BLOCKS)[number];
export type CapacitySignal = "high" | "normal" | "reduced" | "unavailable" | "recovered";
export type ExternalCapacitySignal = "normal" | "reduced" | "unavailable" | "recovered";
export type TaskSource = "explicit" | "inferred";
export type TaskOwner = "Carlos" | "Lisa" | "subordinate-agent" | "conversation-work";
export type TaskDifficulty = "easy" | "medium" | "hard";
export type Estimate<T> = { value: T; source: "Lisa estimate"; overridable: true };

export const TASK_STATUSES = [
  "Provisional",
  "Ready",
  "Scheduled",
  "In progress",
  "Waiting",
  "Blocked",
  "Awaiting others",
  "Awaiting verification",
  "Awaiting Carlos's update",
  "Verified complete",
  "Completed — Carlos reported",
  "Cancelled",
  "Duplicate",
  "Created by mistake",
] as const;
export type TimeTaskStatus = (typeof TASK_STATUSES)[number];

export type PriorityClass =
  | "prevent-harm-or-hard-deadline"
  | "unblock-dependent-work"
  | "current-weekly-outcome"
  | "routine-maintenance"
  | "optional-improvement";

export type TimeTask = {
  id: string;
  /** Durable SQLite identity; `id` remains the mobile-readable display ref for legacy plans. */
  internalId?: string;
  displayRef?: string;
  title: string;
  source: TaskSource;
  explicit: boolean;
  confirmed: boolean;
  urgent: boolean;
  status: TimeTaskStatus;
  priority: PriorityClass;
  owner: TaskOwner;
  difficulty: Estimate<TaskDifficulty>;
  effortPeriods: Estimate<number>;
  importance: Estimate<number>;
  dependencies: readonly string[];
  capacity: CapacitySignal;
  dueDate?: string;
  parentId?: string;
  relatedKey?: string;
  confirmationDue: "immediate" | "next-review";
  estimates: {
    importance: Estimate<number>;
    difficulty: Estimate<TaskDifficulty>;
    effortPeriods: Estimate<number>;
    dependencies: Estimate<readonly string[]>;
    owner: Estimate<TaskOwner>;
  };
};

export type CalendarEvent = {
  id: string;
  title: string;
  date: string;
  startMinute: number;
  endMinute: number;
  hard: boolean;
  /** An accepted appointment is never mutated by the planner. */
  movable: false;
};

export type AuthorityAction =
  | "spend"
  | "external-commitment"
  | "final-external-message"
  | "calendar-mutation"
  | "consequential-change";

export type Permission = AuthorityAction | "read-only-research";

export type CompletionEvidence = {
  source: "Lisa" | "subordinate-agent";
  description: string;
  reference: string;
};

export type CarlosCompletionReport = {
  source: "Carlos";
  description: string;
};

export type TaskCompletionEvidence = CompletionEvidence | CarlosCompletionReport;

export type PendingTask = {
  pendingId: string;
  task: TimeTask;
  createdAt: string;
  permanentId?: string;
};

export interface LocalPendingStore {
  enqueue(task: TimeTask, createdAt: string): PendingTask;
  mapOnce(pendingId: string, permanentId: string): PendingTask;
  get(pendingId: string): PendingTask | undefined;
  list(): readonly PendingTask[];
}

export function toExternalCapacity(signal: CapacitySignal): ExternalCapacitySignal {
  return signal === "high" ? "normal" : signal;
}

export function assertIsoDate(date: string): void {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    throw new Error(`invalid ISO date: ${date}`);
  }
  const parsed = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== date) {
    throw new Error(`invalid ISO date: ${date}`);
  }
}

function isTerminal(status: TimeTaskStatus): boolean {
  return [
    "Verified complete",
    "Completed — Carlos reported",
    "Cancelled",
    "Duplicate",
    "Created by mistake",
  ].includes(status);
}

const VALID_TRANSITIONS: Readonly<Record<TimeTaskStatus, readonly TimeTaskStatus[]>> = {
  Provisional: ["Ready", "Cancelled", "Duplicate", "Created by mistake"],
  Ready: [
    "Scheduled",
    "In progress",
    "Waiting",
    "Blocked",
    "Cancelled",
    "Duplicate",
    "Created by mistake",
  ],
  Scheduled: ["In progress", "Waiting", "Blocked", "Cancelled"],
  "In progress": [
    "Waiting",
    "Blocked",
    "Awaiting others",
    "Awaiting verification",
    "Awaiting Carlos's update",
    "Verified complete",
    "Completed — Carlos reported",
    "Cancelled",
  ],
  Waiting: ["Ready", "In progress", "Blocked", "Awaiting others", "Cancelled"],
  Blocked: ["Ready", "In progress", "Awaiting others", "Cancelled"],
  "Awaiting others": ["Ready", "In progress", "Blocked", "Awaiting verification", "Cancelled"],
  "Awaiting verification": ["In progress", "Verified complete", "Blocked", "Cancelled"],
  "Awaiting Carlos's update": ["Ready", "In progress", "Cancelled"],
  "Verified complete": [],
  "Completed — Carlos reported": [],
  Cancelled: [],
  Duplicate: [],
  "Created by mistake": [],
};

export function assertTransition(from: TimeTaskStatus, to: TimeTaskStatus): void {
  if (isTerminal(from)) {
    throw new Error(`terminal task cannot transition: ${from}`);
  }
  if (!VALID_TRANSITIONS[from].includes(to)) {
    throw new Error(`invalid task transition: ${from} -> ${to}`);
  }
}

export function assertCompletionEvidence(
  status: TimeTaskStatus,
  evidence: readonly TaskCompletionEvidence[] | undefined,
): void {
  if (status === "Completed — Carlos reported") {
    if (!evidence?.some((entry) => entry.source === "Carlos" && entry.description.trim())) {
      throw new Error("Carlos completion requires Carlos's report");
    }
    return;
  }
  if (status === "Verified complete") {
    if (
      !evidence?.some(
        (entry) => entry.source !== "Carlos" && entry.description.trim() && entry.reference.trim(),
      )
    ) {
      throw new Error("Lisa or agent completion requires evidence");
    }
  }
}

export function transitionTask(
  task: TimeTask,
  to: TimeTaskStatus,
  evidence?: readonly TaskCompletionEvidence[],
): TimeTask {
  assertTransition(task.status, to);
  assertCompletionEvidence(to, evidence);
  if (!task.confirmed && to === "Verified complete") {
    throw new Error("inferred work must be confirmed before completion");
  }
  return { ...task, status: to };
}

export class InMemoryPendingTaskStore implements LocalPendingStore {
  #nextId = 1;
  readonly #items = new Map<string, PendingTask>();

  enqueue(task: TimeTask, createdAt: string): PendingTask {
    const pendingId = `P-${String(this.#nextId++).padStart(4, "0")}`;
    const item = { pendingId, task, createdAt };
    this.#items.set(pendingId, item);
    return item;
  }

  mapOnce(pendingId: string, permanentId: string): PendingTask {
    if (!/^P-\d{4,}$/.test(pendingId)) {
      throw new Error(`invalid pending ID: ${pendingId}`);
    }
    if (!/^T-\d{6,}$/.test(permanentId)) {
      throw new Error(`invalid permanent ID: ${permanentId}`);
    }
    const item = this.#items.get(pendingId);
    if (!item) {
      throw new Error(`unknown pending ID: ${pendingId}`);
    }
    if (item.permanentId && item.permanentId !== permanentId) {
      throw new Error(`pending ID already mapped: ${pendingId}`);
    }
    const alreadyUsed = [...this.#items.values()].some(
      (entry) => entry.pendingId !== pendingId && entry.permanentId === permanentId,
    );
    if (alreadyUsed) {
      throw new Error(`permanent ID already mapped: ${permanentId}`);
    }
    const mapped = { ...item, permanentId };
    this.#items.set(pendingId, mapped);
    return mapped;
  }

  get(pendingId: string): PendingTask | undefined {
    return this.#items.get(pendingId);
  }

  list(): readonly PendingTask[] {
    return [...this.#items.values()];
  }
}
