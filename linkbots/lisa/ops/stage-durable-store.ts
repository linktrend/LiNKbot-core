/**
 * Lisa stage durable-store probe adapter for workshop ops.
 * Opens OpenClaw shared state SQLite (additive lisa_stage_* tables).
 * Never uses JSON/Markdown as state. IDE Development remains external.
 */

import {
  claimMainApprovePackage,
  ensureLisaStageOpsSchema,
  probeLisaStageOpsStoreHealth,
  putMainApprovePackage,
  recordRepairAttempt,
  resolveOpenClawStateSqlitePath,
  upsertRepairBinding,
  type LisaStageOpsStoreHealth,
  type LisaStageOpsStoreOptions,
  type MainApproveClaimRow,
  type MainApprovePackageRow,
  type RepairAttemptRow,
  type RepairBindingRow,
} from "./lisa-stage-ops-store.ts";
import { STAGE_OPS_STAGE_ROOT } from "./stage-ops-command.ts";

export type StageDurableStoresProbeResult = {
  repairAttemptStoreAvailable: boolean;
  mainApproveStoreAvailable: boolean;
  health: LisaStageOpsStoreHealth;
  repairAttemptStorePrerequisite?: string;
  mainApproveStorePrerequisite?: string;
};

const STORE_PREREQUISITE =
  "OpenClaw shared state SQLite must expose additive lisa_stage_* tables (lazy-ensure). IDE Development remains the external GitOps SoT and is untouched.";

function resolveStoreOptions(params?: {
  stateDir?: string;
  databasePath?: string;
}): LisaStageOpsStoreOptions {
  const databasePath =
    params?.databasePath ??
    resolveOpenClawStateSqlitePath(params?.stateDir ?? STAGE_OPS_STAGE_ROOT);
  // Workshop façade requires databasePath; ignore OpenClaw `path` alias here.
  return { databasePath };
}

/**
 * Probe durable Repair + Main Approve stores.
 * Defaults to lisa-stage state root path; tests may pass an explicit databasePath.
 */
export function probeStageDurableStores(params?: {
  stateDir?: string;
  databasePath?: string;
}): StageDurableStoresProbeResult {
  const options = resolveStoreOptions(params);
  const health = probeLisaStageOpsStoreHealth(options);
  if (!health.ok) {
    return {
      repairAttemptStoreAvailable: false,
      mainApproveStoreAvailable: false,
      health,
      repairAttemptStorePrerequisite: health.error
        ? `${STORE_PREREQUISITE} (${health.error})`
        : STORE_PREREQUISITE,
      mainApproveStorePrerequisite: STORE_PREREQUISITE,
    };
  }
  return {
    repairAttemptStoreAvailable: true,
    mainApproveStoreAvailable: true,
    health,
  };
}

/** Runtime Main Approve store adapter — available only when SQLite health passes. */
export function resolveMainApproveStoreAvailability(params?: {
  stateDir?: string;
  databasePath?: string;
}): { available: boolean; prerequisite: string } {
  const probe = probeStageDurableStores(params);
  if (!probe.mainApproveStoreAvailable) {
    return {
      available: false,
      prerequisite: probe.mainApproveStorePrerequisite ?? STORE_PREREQUISITE,
    };
  }
  return { available: true, prerequisite: STORE_PREREQUISITE };
}

/** Ensure additive lisa_stage_* tables on the resolved OpenClaw state DB. */
export function ensureStageDurableStores(params?: {
  stateDir?: string;
  databasePath?: string;
}): void {
  ensureLisaStageOpsSchema(resolveStoreOptions(params));
}

export function persistStageRepairBinding(
  binding: {
    repository: string;
    branch: string;
    prNumber: number | null;
    headSha: string;
  },
  params?: { stateDir?: string; databasePath?: string },
  nowMs = Date.now(),
): RepairBindingRow {
  return upsertRepairBinding(resolveStoreOptions(params), binding, nowMs);
}

export function persistStageRepairAttempt(
  input: {
    bindingKey: string;
    attempt: number;
    dispatchedAtMs: number | null;
    outcome: RepairAttemptRow["outcome"];
    proofHeadSha?: string | null;
    expiresAtMs?: number | null;
    attemptId?: string;
  },
  params?: { stateDir?: string; databasePath?: string },
  nowMs = Date.now(),
): RepairAttemptRow {
  return recordRepairAttempt(resolveStoreOptions(params), input, nowMs);
}

export function persistStageMainApprovePackage(
  input: {
    packageId: string;
    mondayDate: string;
    claimExpiresAtMs: number;
    itemsJson: string;
  },
  params?: { stateDir?: string; databasePath?: string },
  nowMs = Date.now(),
): MainApprovePackageRow {
  return putMainApprovePackage(resolveStoreOptions(params), input, nowMs);
}

export function claimStageMainApprovePackage(
  input: {
    packageId: string;
    expiresAtMs: number;
    claimId?: string;
  },
  params?: { stateDir?: string; databasePath?: string },
  nowMs = Date.now(),
): MainApproveClaimRow | { ok: false; reason: "expired_package" | "claim_conflict" } {
  return claimMainApprovePackage(resolveStoreOptions(params), input, nowMs);
}
