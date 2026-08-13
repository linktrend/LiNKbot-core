import type { TimeTask } from "./time-contracts.js";
export function rankTasks(tasks: readonly TimeTask[]): TimeTask[] { return [...tasks].sort((a, b) => Number(b.hardDeadline) - Number(a.hardDeadline) || a.priority - b.priority || a.id.localeCompare(b.id)); }
export function chooseFlexiblePeriod(tasks: readonly TimeTask[], personalWorkCurrent: boolean): "work" | "personal" { return personalWorkCurrent && tasks.length === 0 ? "personal" : "work"; }
export function capacityPlan(capacity: TimeTask["capacity"]): "protect_commitments" | "easy_work" | "normal_work" { return capacity === "unavailable" ? "protect_commitments" : capacity === "reduced" ? "easy_work" : "normal_work"; }
