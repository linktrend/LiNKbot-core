/**
 * Main Approve package binding — Carlos sees plain English; internals bind SHAs.
 * Runtime durable store for the package is NOT implemented here (no JSON sidecar).
 * Until IDE/OpenClaw provides an authoritative package store, packaging is blocked.
 */

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
        | "blocked_no_store";
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

export function buildCarlosAskView(pkg: MainApprovePackage): MainApproveAskView {
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
 * Validate approval against the sealed package.
 * Any drift / reorder / expiry / partial set invalidates and requires a new package.
 */
export function validateApprovalDispatch(params: {
  sealed: MainApprovePackage;
  /** Indexes Carlos approved (must be full set for ok). */
  approvedIndexes: number[];
  nowIso: string;
  /** Live re-read of bindings (same order/fields expected). */
  liveItems: MainApproveItem[];
}): ApprovalDispatch {
  if (!MAIN_APPROVE_RUNTIME_STORE.available) {
    // Pure validation still runs for tests; deployment remains blocked.
  }
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
