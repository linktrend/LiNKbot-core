export type SelfieStatus = "Completed" | "Reported Late" | "Missed";
export type BatteryObservation = { atMs: number; percentage: number; plugged: boolean; context: "desk" | "bedside" | "discharging"; sourceEventId: string };
export function assertBatteryObservation(value: BatteryObservation): void { if (!Number.isFinite(value.atMs) || !Number.isInteger(value.percentage) || value.percentage < 0 || value.percentage > 100 || !value.sourceEventId) throw new Error("invalid battery observation"); }
