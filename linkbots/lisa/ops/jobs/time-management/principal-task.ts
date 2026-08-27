import {
  intakeLisaPrincipalTask,
  type LisaPrincipalTaskCreateInput,
  type LisaPrincipalTaskRecord,
  type LisaPrincipalTaskStoreOptions,
} from "../../../../../src/state/lisa-principal-task-store.js";
import type { TimeTask } from "./time-contracts.js";

const STATUS_TO_TIME_STATUS = {
  provisional: "Provisional",
  confirmed_ready: "Ready",
  scheduled: "Scheduled",
  in_progress: "In progress",
  blocked: "Blocked",
  awaiting_carlos: "Awaiting Carlos's update",
  awaiting_other: "Awaiting others",
  completed_pending_evidence: "Awaiting verification",
  completed_verified: "Verified complete",
} as const satisfies Record<LisaPrincipalTaskRecord["status"], TimeTask["status"]>;

/** Adapt canonical private Principal-task truth to the existing time planner shape. */
export function principalTaskToTimeTask(task: LisaPrincipalTaskRecord): TimeTask {
  return {
    id: task.displayRef,
    internalId: task.internalId,
    displayRef: task.displayRef,
    title: task.title,
    source: task.source,
    explicit: task.explicit,
    confirmed: task.confirmed,
    urgent: task.urgent,
    status: STATUS_TO_TIME_STATUS[task.status],
    priority: task.priority,
    owner: task.owner,
    difficulty: task.difficulty,
    effortPeriods: task.effortPeriods,
    importance: task.importance,
    dependencies: task.dependencies,
    capacity: task.capacity,
    ...(task.dueDate ? { dueDate: task.dueDate } : {}),
    ...(task.parentInternalId ? { parentId: task.parentInternalId } : {}),
    ...(task.relatedKey ? { relatedKey: task.relatedKey } : {}),
    confirmationDue: task.confirmationDue,
    estimates: task.estimates,
  };
}

export function intakePrincipalTimeTask(
  options: LisaPrincipalTaskStoreOptions,
  input: LisaPrincipalTaskCreateInput,
): ReturnType<typeof intakeLisaPrincipalTask> & { timeTask: TimeTask } {
  const result = intakeLisaPrincipalTask(options, input);
  return { ...result, timeTask: principalTaskToTimeTask(result.task) };
}
