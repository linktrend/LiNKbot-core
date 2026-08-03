/**
 * Lisa stage durable-store probe adapter for workshop ops.
 * Opens OpenClaw shared state SQLite (additive lisa_stage_* tables).
 * Never uses JSON/Markdown as state. IDE Development remains external.
 */

import {
  probeLisaStageOpsStoreHealth,
  resolveOpenClawStateSqlitePath,
  type LisaStageOpsStoreHealth,
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

/**
 * Probe durable Repair + Main Approve stores.
 * Defaults to lisa-stage state root path; tests may pass an explicit databasePath.
 */
export function probeStageDurableStores(params?: {
  stateDir?: string;
  databasePath?: string;
}): StageDurableStoresProbeResult {
  const databasePath =
    params?.databasePath ??
    resolveOpenClawStateSqlitePath(params?.stateDir ?? STAGE_OPS_STAGE_ROOT);
  const health = probeLisaStageOpsStoreHealth({ databasePath });
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
