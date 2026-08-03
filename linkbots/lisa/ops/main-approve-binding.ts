/**
 * Main Approve package binding — Carlos sees plain English; internals bind SHAs.
 * Runtime path fails closed until OpenClaw shared-state SQLite health passes
 * **and** live Lisa targeting is explicitly opted in with separately approved
 * credentials language. Pure binding helpers remain available for tests.
 */

import {
  claimMainApprovePackage,
  isHealthyLisaStageOpsStore,
  putMainApprovePackage,
  requireHealthyLisaStageOpsStore,
  type HealthyLisaStageOpsStore,
  type LisaStageOpsStoreOptions,
  type MainApproveClaimRow,
  type MainApprovePackageRow,
} from "./lisa-stage-ops-store.ts";
import {
  authorizeLiveLisaAction,
  LISA_OPS_LIVE_ACTION_DEFAULTS,
  type LisaOpsLiveActionConfig,
} from "./ship-pull-contract.ts";
import { resolveMainApproveStoreAvailability } from "./stage-durable-store.ts";

export type MainApproveItem = {
  index: number;
  /** Plain-English description shown to Carlos (no SHAs). */
  plainDescription: string;
  repository: string;
  promotionPrNumber: number;
  stagingSha: string;
  priorMainSha: string;
  promotionHeadSha: string;
  gateResult: "Clear" | "Issues";
};

export type MainApprovePackage = {
  packageId: string;
  mondayDate: string;
  claimExpiresAt: string;
  items: MainApproveItem[];
};

export type MainApproveAskView = {
  lines: string[];
  /** Carlos-facing text only — never includes SHAs. */
  telegramBody: string;
};

export type ApprovalDispatch =
  | { ok: true; items: MainApproveItem[] }
  | {
      ok: false;
      reason:
        | "drift"
        | "reordered"
        | "expired_claim"
        | "partial_approval"
        | "gate_not_clear"
        | "blocked_no_store"
        | "live_targeting_disabled"
        | "credentials_language_not_approved";
      prerequisite?: string;
    };

export type MainApproveAskResult =
  | { ok: true; view: MainApproveAskView }
  | {
      ok: false;
      reason: "blocked_no_store" | "live_targeting_disabled" | "credentials_language_not_approved";
      prerequisite: string;
    };

export type MainApproveStoreAvailability = {
  available: boolean;
  prerequisite: string;
};

export const MAIN_APPROVE_STORE_PREREQUISITE =
  "OpenClaw shared state SQLite must expose additive lisa_stage_* tables (lazy-ensure via putMainApprovePackage/claimMainApprovePackage). Do not use JSON/Markdown sidecars as OpenClaw state.";

/**
 * Probe SQLite health for Main Approve (fail-closed, read-only by default).
 * Optional stateDir/databasePath override for tests.
 */
export function resolveMainApproveRuntimeStore(params?: {
  stateDir?: string;
  databasePath?: string;
}): MainApproveStoreAvailability {
  const resolved = resolveMainApproveStoreAvailability(params);
  return {
    available: resolved.available,
    prerequisite: resolved.available
      ? MAIN_APPROVE_STORE_PREREQUISITE
      : (resolved.prerequisite ?? MAIN_APPROVE_STORE_PREREQUISITE),
  };
}

/**
 * Packaging / default runtime adapter: fail-closed until an explicit probe
 * (resolveMainApproveRuntimeStore) or sealed SQLite path proves health.
 * Do not live-probe stage from module load / property access.
 *
 * @deprecated Availability booleans are not authorization capabilities.
 * Runtime auth must use {@link HealthyLisaStageOpsStore} from the composition root.
 */
export const MAIN_APPROVE_RUNTIME_STORE: MainApproveStoreAvailability = {
  available: false,
  prerequisite: MAIN_APPROVE_STORE_PREREQUISITE,
};

/** Explicit unhealthy adapter for fail-closed tests (not a sealed capability). */
export const MAIN_APPROVE_UNHEALTHY_STORE: MainApproveStoreAvailability = {
  available: false,
  prerequisite: MAIN_APPROVE_STORE_PREREQUISITE,
};

/**
 * @deprecated Do not use as an authorization adapter. Forgeable `{ available: true }`
 * is rejected by issueCarlosAsk / authorizeApprovalDispatch — mint via
 * openStageDurableStoreCapability / openHealthyLisaStageOpsStore instead.
 */
export type AuthoritativePackageStore = {
  available: true;
  prerequisite?: undefined;
};

/**
 * Seal a Main Approve package into OpenClaw SQLite (idempotent put).
 */
export function sealMainApprovePackage(
  pkg: MainApprovePackage,
  options: LisaStageOpsStoreOptions,
  nowMs = Date.now(),
): MainApprovePackageRow {
  requireHealthyLisaStageOpsStore(options);
  assertImmutableBindings(pkg);
  const claimExpiresAtMs = parseInstantToEpochMs(pkg.claimExpiresAt);
  if (claimExpiresAtMs === null) {
    throw new Error(`invalid claimExpiresAt: ${pkg.claimExpiresAt}`);
  }
  return putMainApprovePackage(
    options,
    {
      packageId: pkg.packageId,
      mondayDate: pkg.mondayDate,
      claimExpiresAtMs,
      itemsJson: JSON.stringify(pkg.items),
    },
    nowMs,
  );
}

/**
 * Claim a sealed Main Approve package (fail-closed on expiry / conflict).
 */
export function claimSealedMainApprovePackage(
  input: {
    packageId: string;
    expiresAtMs: number;
    claimId?: string;
  },
  options: LisaStageOpsStoreOptions,
  nowMs = Date.now(),
): MainApproveClaimRow | { ok: false; reason: "expired_package" | "claim_conflict" } {
  requireHealthyLisaStageOpsStore(options);
  return claimMainApprovePackage(options, input, nowMs);
}

/**
 * Pure Carlos ask view builder — no store gate.
 * Runtime callers must use `issueCarlosAsk` instead.
 */
export function buildCarlosAskViewPure(pkg: MainApprovePackage): MainApproveAskView {
  const lines = pkg.items.map(
    (item) => `${item.index}) ${item.repository} — ${item.plainDescription}`,
  );
  const telegramBody = [
    "Ready to Approve staging→main for these repositories?",
    ...lines,
    "Reply Approve / yes on Telegram (email is notify-only). Never identify commit SHAs.",
  ].join("\n");
  if (/\b[0-9a-f]{7,40}\b/i.test(telegramBody)) {
    throw new Error("Carlos-facing ask must not include SHAs");
  }
  return { lines, telegramBody };
}

/** @deprecated Use buildCarlosAskViewPure for tests; issueCarlosAsk for runtime. */
export function buildCarlosAskView(pkg: MainApprovePackage): MainApproveAskView {
  return buildCarlosAskViewPure(pkg);
}

/**
 * Runtime-facing: never create a Carlos ask without a sealed healthy store
 * capability (composition root) and explicit live opt-in (defaults fail closed).
 * Caller-supplied `{ available: true }` is rejected — brand required.
 */
export function issueCarlosAsk(
  pkg: MainApprovePackage,
  store?: HealthyLisaStageOpsStore | null,
  live: LisaOpsLiveActionConfig = LISA_OPS_LIVE_ACTION_DEFAULTS,
): MainApproveAskResult {
  const liveGate = authorizeLiveLisaAction(live);
  if (!liveGate.ok) {
    return {
      ok: false,
      reason: liveGate.reason,
      prerequisite:
        "Live Main Approve requires explicit liveLisaTargetingAllowed=true and separately approved credentials language in docs/contracts. Candidate defaults remain non-live.",
    };
  }
  if (!isHealthyLisaStageOpsStore(store)) {
    return {
      ok: false,
      reason: "blocked_no_store",
      prerequisite: MAIN_APPROVE_STORE_PREREQUISITE,
    };
  }
  requireHealthyLisaStageOpsStore({
    databasePath: store.databasePath,
    path: store.databasePath,
  });
  assertImmutableBindings(pkg);
  return { ok: true, view: buildCarlosAskViewPure(pkg) };
}

export function assertImmutableBindings(pkg: MainApprovePackage): void {
  const indexes = new Set<number>();
  for (const item of pkg.items) {
    if (indexes.has(item.index)) throw new Error(`duplicate index ${item.index}`);
    indexes.add(item.index);
    if (!item.repository || !item.stagingSha || !item.priorMainSha || !item.promotionHeadSha) {
      throw new Error(`incomplete binding at index ${item.index}`);
    }
    if (item.gateResult !== "Clear" && item.gateResult !== "Issues") {
      throw new Error(`invalid gate at index ${item.index}`);
    }
  }
}

/**
 * Parse an instant to epoch ms. Rejects empty/invalid/NaN times.
 * Accepts ISO-8601 with timezone offsets (Z or ±HH:MM).
 */
export function parseInstantToEpochMs(value: string): number | null {
  if (typeof value !== "string" || value.trim() === "") return null;
  const ms = Date.parse(value);
  if (!Number.isFinite(ms)) return null;
  return ms;
}

/**
 * Compare claim expiry by epoch ms (timezone-offset safe).
 * Invalid now or expires instants fail closed as expired_claim.
 */
export function isMainApproveClaimExpired(params: {
  nowIso: string;
  claimExpiresAt: string;
}): boolean {
  const nowMs = parseInstantToEpochMs(params.nowIso);
  const expiresMs = parseInstantToEpochMs(params.claimExpiresAt);
  if (nowMs === null || expiresMs === null) return true;
  return nowMs > expiresMs;
}

/**
 * Pure binding validation — no store gate.
 * Runtime callers must use `authorizeApprovalDispatch`.
 */
export function validateApprovalBindings(params: {
  sealed: MainApprovePackage;
  approvedIndexes: number[];
  nowIso: string;
  liveItems: MainApproveItem[];
}): ApprovalDispatch {
  if (
    parseInstantToEpochMs(params.nowIso) === null ||
    parseInstantToEpochMs(params.sealed.claimExpiresAt) === null ||
    isMainApproveClaimExpired({
      nowIso: params.nowIso,
      claimExpiresAt: params.sealed.claimExpiresAt,
    })
  ) {
    return { ok: false, reason: "expired_claim" };
  }
  if (params.liveItems.length !== params.sealed.items.length) {
    return { ok: false, reason: "drift" };
  }
  for (let i = 0; i < params.sealed.items.length; i++) {
    const a = params.sealed.items[i]!;
    const b = params.liveItems[i]!;
    if (a.index !== b.index) return { ok: false, reason: "reordered" };
    if (
      a.repository !== b.repository ||
      a.promotionPrNumber !== b.promotionPrNumber ||
      a.stagingSha !== b.stagingSha ||
      a.priorMainSha !== b.priorMainSha ||
      a.promotionHeadSha !== b.promotionHeadSha ||
      a.gateResult !== b.gateResult
    ) {
      return { ok: false, reason: "drift" };
    }
  }
  const expected = new Set(params.sealed.items.map((i) => i.index));
  const approved = new Set(params.approvedIndexes);
  if (approved.size !== expected.size || [...expected].some((i) => !approved.has(i))) {
    return { ok: false, reason: "partial_approval" };
  }
  if (params.sealed.items.some((i) => i.gateResult !== "Clear")) {
    return { ok: false, reason: "gate_not_clear" };
  }
  return { ok: true, items: params.sealed.items };
}

/**
 * Runtime-facing authorization: fails closed without a sealed healthy store
 * capability from the composition root, and without explicit live opt-in.
 * Caller-supplied `{ available: true }` is rejected — brand required.
 */
export function authorizeApprovalDispatch(
  params: {
    sealed: MainApprovePackage;
    approvedIndexes: number[];
    nowIso: string;
    liveItems: MainApproveItem[];
  },
  store?: HealthyLisaStageOpsStore | null,
  live: LisaOpsLiveActionConfig = LISA_OPS_LIVE_ACTION_DEFAULTS,
): ApprovalDispatch {
  const liveGate = authorizeLiveLisaAction(live);
  if (!liveGate.ok) {
    return {
      ok: false,
      reason: liveGate.reason,
      prerequisite:
        "Live Main Approve requires explicit liveLisaTargetingAllowed=true and separately approved credentials language in docs/contracts. Candidate defaults remain non-live.",
    };
  }
  if (!isHealthyLisaStageOpsStore(store)) {
    return {
      ok: false,
      reason: "blocked_no_store",
      prerequisite: MAIN_APPROVE_STORE_PREREQUISITE,
    };
  }
  requireHealthyLisaStageOpsStore({
    databasePath: store.databasePath,
    path: store.databasePath,
  });
  return validateApprovalBindings(params);
}

/**
 * @deprecated Runtime must use authorizeApprovalDispatch (fail-closed).
 * Kept as alias that still fails closed (no sealed store capability).
 */
export function validateApprovalDispatch(params: {
  sealed: MainApprovePackage;
  approvedIndexes: number[];
  nowIso: string;
  liveItems: MainApproveItem[];
}): ApprovalDispatch {
  return authorizeApprovalDispatch(params, null);
}
