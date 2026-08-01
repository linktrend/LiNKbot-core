/**
 * Main Approve package binding — Carlos sees plain English; internals bind SHAs.
 * Runtime path fails closed until an authoritative IDE/OpenClaw package store exists
 * **and** live Lisa targeting is explicitly opted in with separately approved
 * credentials language. Pure binding helpers remain available for tests.
 */

import {
  authorizeLiveLisaAction,
  LISA_OPS_LIVE_ACTION_DEFAULTS,
  type LisaOpsLiveActionConfig,
} from "./ship-pull-contract.ts";

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
      reason:
        | "blocked_no_store"
        | "live_targeting_disabled"
        | "credentials_language_not_approved";
      prerequisite: string;
    };

/** Packaging is blocked until an authoritative GitHub/OpenClaw package store exists. */
export const MAIN_APPROVE_RUNTIME_STORE: {
  available: false;
  prerequisite: string;
} = {
  available: false,
  prerequisite:
    "IDE Development issue #23 / OpenClaw must provide an authoritative Main Approve package store (GitHub issue/PR metadata or OpenClaw task binding). Do not use JSON/Markdown sidecars as OpenClaw state.",
};

/** Test / future adapter — production runtime uses MAIN_APPROVE_RUNTIME_STORE only. */
export type AuthoritativePackageStore = {
  available: true;
  prerequisite?: undefined;
};

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
 * Runtime-facing: never create a Carlos ask without an authoritative store
 * and explicit live opt-in (defaults fail closed / non-live).
 */
export function issueCarlosAsk(
  pkg: MainApprovePackage,
  store: { available: boolean; prerequisite?: string } = MAIN_APPROVE_RUNTIME_STORE,
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
  if (!store.available) {
    return {
      ok: false,
      reason: "blocked_no_store",
      prerequisite: store.prerequisite ?? MAIN_APPROVE_RUNTIME_STORE.prerequisite,
    };
  }
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
 * Pure binding validation — no store gate.
 * Runtime callers must use `authorizeApprovalDispatch`.
 */
export function validateApprovalBindings(params: {
  sealed: MainApprovePackage;
  approvedIndexes: number[];
  nowIso: string;
  liveItems: MainApproveItem[];
}): ApprovalDispatch {
  if (params.nowIso > params.sealed.claimExpiresAt) {
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
 * Runtime-facing authorization: fails closed without an authoritative store
 * and without explicit live opt-in + credentials language approval.
 * Supply explicit test adapters only in tests.
 */
export function authorizeApprovalDispatch(
  params: {
    sealed: MainApprovePackage;
    approvedIndexes: number[];
    nowIso: string;
    liveItems: MainApproveItem[];
  },
  store: { available: boolean; prerequisite?: string } = MAIN_APPROVE_RUNTIME_STORE,
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
  if (!store.available) {
    return {
      ok: false,
      reason: "blocked_no_store",
      prerequisite: store.prerequisite ?? MAIN_APPROVE_RUNTIME_STORE.prerequisite,
    };
  }
  return validateApprovalBindings(params);
}

/**
 * @deprecated Runtime must use authorizeApprovalDispatch (fail-closed).
 * Kept as alias that still fails closed on the production store.
 */
export function validateApprovalDispatch(params: {
  sealed: MainApprovePackage;
  approvedIndexes: number[];
  nowIso: string;
  liveItems: MainApproveItem[];
}): ApprovalDispatch {
  return authorizeApprovalDispatch(params, MAIN_APPROVE_RUNTIME_STORE);
}
