import type { ModelCatalogEntry, ModelCatalogSnapshot } from "./model-catalog.types.js";
import { loadPreparedModelCatalogForRouting } from "./prepared-model-catalog.js";

export const NONCODING_ROUTE_VERSION = "2026-08-24-transient-noncoding-routing-v1" as const;
export const NONCODING_CLASSIFIER_CONTEXT_LIMIT = 2_000 as const;

export type NonCodingRouteTag =
  | "conversation"
  | "planning"
  | "research"
  | "legal"
  | "document"
  | "utility"
  | "coding"
  | "ambiguous";

export type NonCodingReasoningEffort = "low" | "medium" | "high";

export type NonCodingRoutingPolicy = {
  primary: string;
  firstFallback: string;
  secondFallback: string;
  thirdFallback: string;
  documentCandidate: string;
  documentCandidateEnabled: false;
};

export const NONCODING_ROUTING_POLICY: NonCodingRoutingPolicy = {
  primary: "openai/gpt-5.6-luna",
  firstFallback: "openrouter/openai/gpt-5.6-luna",
  secondFallback: "moonshot/kimi-k2.6",
  thirdFallback: "google/gemini-3.1-flash-lite",
  documentCandidate: "openrouter/minimax/minimax-m3",
  documentCandidateEnabled: false,
};

export type NonCodingClassifierInput = {
  request: string;
  candidateTags: readonly NonCodingRouteTag[];
};

export type NonCodingRouteDecision = {
  version: typeof NONCODING_ROUTE_VERSION;
  tag: Exclude<NonCodingRouteTag, "ambiguous">;
  modelRef: string;
  reasoningEffort: NonCodingReasoningEffort;
  classifierInvoked: boolean;
  classifierError: boolean;
  /** Request overrides are deliberately one-response values, never session state. */
  persisted: false;
  fallbackRefs: readonly string[];
};

const CLASSIFIER_TAGS: readonly NonCodingRouteTag[] = [
  "conversation",
  "planning",
  "research",
  "legal",
  "document",
  "utility",
  "coding",
];

const TAG_PATTERNS: readonly [Exclude<NonCodingRouteTag, "ambiguous">, RegExp][] = [
  ["coding", /\b(code|coding|bug|debug|typescript|javascript|pull request|repository|git)\b/i],
  ["legal", /\b(legal|law|contract|regulation|compliance|jurisdiction|liability)\b/i],
  ["document", /\b(pdf|document|scan|attachment|spreadsheet|slides|image)\b/i],
  ["research", /\b(research|compare|sources?|cite|evidence|investigate|look up)\b/i],
  ["planning", /\b(plan|planning|roadmap|strategy|prioriti[sz]e|decision)\b/i],
  ["utility", /\b(summarize|summarise|classify|extract|format|rewrite|translate)\b/i],
];

function normalizeRequest(request: string): string {
  return request.trim().replace(/\s+/gu, " ");
}

function deterministicTag(request: string): Exclude<NonCodingRouteTag, "ambiguous"> | undefined {
  for (const [tag, pattern] of TAG_PATTERNS) {
    if (pattern.test(request)) {
      return tag;
    }
  }
  return request.length === 0 ? "conversation" : undefined;
}

function isClassifierTag(value: unknown): value is Exclude<NonCodingRouteTag, "ambiguous"> {
  return typeof value === "string" && CLASSIFIER_TAGS.includes(value as NonCodingRouteTag);
}

function catalogModelRef(requestedRef: string, catalog: ModelCatalogSnapshot | undefined): string {
  if (!catalog) {
    return requestedRef;
  }
  const normalized = requestedRef.toLowerCase();
  const entries = [
    ...catalog.entries,
    ...(catalog.routeVariants ?? []),
    ...(catalog.staticEntries ?? []),
  ];
  const match = entries.find(
    (entry) => `${entry.provider}/${entry.id}`.toLowerCase() === normalized,
  );
  return match ? `${match.provider}/${match.id}` : requestedRef;
}

function modelForTag(tag: Exclude<NonCodingRouteTag, "ambiguous">): {
  ref: string;
  reasoningEffort: NonCodingReasoningEffort;
} {
  switch (tag) {
    case "utility":
      return { ref: NONCODING_ROUTING_POLICY.thirdFallback, reasoningEffort: "low" };
    case "conversation":
    case "planning":
    case "research":
    case "legal":
    case "document":
    case "coding":
      return { ref: NONCODING_ROUTING_POLICY.primary, reasoningEffort: "high" };
  }
}

export async function resolveNonCodingRoute(params: {
  request: string;
  catalog?: ModelCatalogSnapshot;
  classify?: (input: NonCodingClassifierInput) => Promise<unknown>;
}): Promise<NonCodingRouteDecision> {
  const request = normalizeRequest(params.request);
  const deterministic = deterministicTag(request);
  let tag = deterministic;
  let classifierInvoked = false;
  let classifierError = false;
  if (!tag && params.classify) {
    classifierInvoked = true;
    try {
      const classified = await params.classify({
        request: request.slice(0, NONCODING_CLASSIFIER_CONTEXT_LIMIT),
        candidateTags: CLASSIFIER_TAGS,
      });
      tag = isClassifierTag(classified) ? classified : "conversation";
    } catch {
      classifierError = true;
      tag = "conversation";
    }
  }
  tag ??= "conversation";
  const selected = modelForTag(tag);
  return {
    version: NONCODING_ROUTE_VERSION,
    tag,
    modelRef: catalogModelRef(selected.ref, params.catalog),
    reasoningEffort: selected.reasoningEffort,
    classifierInvoked,
    classifierError,
    persisted: false,
    fallbackRefs: [
      catalogModelRef(NONCODING_ROUTING_POLICY.firstFallback, params.catalog),
      catalogModelRef(NONCODING_ROUTING_POLICY.secondFallback, params.catalog),
      catalogModelRef(NONCODING_ROUTING_POLICY.thirdFallback, params.catalog),
    ],
  };
}

/** Uses the lifecycle-owned, read-only catalog for a route decision. */
export async function resolveNonCodingRouteWithPreparedCatalog(params: {
  request: string;
  agentId?: string;
  agentDir?: string;
  workspaceDir?: string;
  classify?: (input: NonCodingClassifierInput) => Promise<unknown>;
}): Promise<NonCodingRouteDecision> {
  const catalog = await loadPreparedModelCatalogForRouting(params);
  return await resolveNonCodingRoute({ ...params, catalog });
}

export type TransientFallbackFailure = "provider" | "model" | "quality" | "infrastructure";

export type TransientFallbackDecision = {
  modelRef: string;
  action: "retry_same_model" | "fallback_one_hop" | "no_fallback";
  hops: 0 | 1;
};

/** Applies one-response fallback rules without mutating defaults or session state. */
export function resolveTransientFallback(params: {
  currentModelRef: string;
  fallbackRefs: readonly string[];
  failure: TransientFallbackFailure;
  qualityFailureLogged?: boolean;
}): TransientFallbackDecision {
  if (params.failure === "infrastructure") {
    return { modelRef: params.currentModelRef, action: "retry_same_model", hops: 0 };
  }
  if (params.failure === "quality" && params.qualityFailureLogged !== true) {
    return { modelRef: params.currentModelRef, action: "no_fallback", hops: 0 };
  }
  const next = params.fallbackRefs.find((ref) => ref !== params.currentModelRef);
  return next
    ? { modelRef: next, action: "fallback_one_hop", hops: 1 }
    : { modelRef: params.currentModelRef, action: "no_fallback", hops: 0 };
}

export function isModelCatalogEntryUsable(entry: ModelCatalogEntry): boolean {
  return entry.provider.trim().length > 0 && entry.id.trim().length > 0;
}
