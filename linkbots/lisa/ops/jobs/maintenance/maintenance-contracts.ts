export type MaintenanceStage = "librarian" | "dreaming" | "backup";
export type MaintenanceStatus = "pending" | "completed" | "failed" | "skipped_dependency";
export type LibrarianReceipt = { localDate: string; cycleId: string; payloadHash: string; providerRelease: string; completedAtMs: number };
export function validateDreamingReceipt(receipt: LibrarianReceipt | undefined, localDate: string, cycleId: string, providerRelease: string): void { if (!receipt || receipt.localDate !== localDate || receipt.cycleId !== cycleId || receipt.providerRelease !== providerRelease || !receipt.payloadHash) throw new Error("blocked_invalid_librarian_receipt"); }
export function nextMaintenanceStage(status: Record<MaintenanceStage, MaintenanceStatus>): MaintenanceStage | undefined { if (status.librarian !== "completed") return "librarian"; if (status.dreaming === "pending") return "dreaming"; if (status.backup === "pending") return "backup"; return undefined; }
