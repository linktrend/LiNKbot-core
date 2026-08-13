import type { TimeTask } from "./time-contracts.js";
export function classifyIntake(id: string, explicit: boolean, priority = 4): TimeTask { return { id, explicit, priority, status: explicit ? "Ready" : "Provisional", capacity: "normal" }; }
export function canPerformExternalAction(permission: boolean): boolean { return permission; }
