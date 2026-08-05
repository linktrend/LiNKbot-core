/**
 * Lisa approved native-OAuth model-routing contract.
 *
 * This module is a source-controlled authority and emits no credentials or
 * provider calls. Live publication remains a separate, backed-up operation.
 *
 * MiniMax-M3 PDF: Principal-approved candidate at capabilityStatus
 * `approved_unverified`. First live proof is deferred to a separately
 * controlled production rollout; require a first-production-proof receipt
 * before any success claim. Do not claim proven PDF support.
 */

export type ReasoningEffort = "low" | "medium" | "high" | "max";

export type ModelRouteSlot =
  | "primary"
  | "firstFallback"
  | "secondFallback"
  | "imagePdf"
  | "nextFallback"
  | "utility"
  | "evaluationOnly";

/** Machine-readable PDF capability class — not `proven`. */
export type PdfCapabilityStatus = "approved_unverified";

/**
 * Candidate cutover is enabled in the workshop fragment; runtime failure
 * rolls back to disabled_by_rollback (PDF document routing only).
 */
export type PdfCutoverState = "enabled_candidate" | "disabled_by_rollback";

export type PdfDocumentRoutingFailureEvent = {
  type: "pdf_document_routing_validation_failure";
  reasonCode: string;
  candidateRef: string;
  capabilityStatus: PdfCapabilityStatus;
  action: "disable_pdf_document_routing_only";
  preserveService: {
    primary: true;
    imageModel: true;
    defaultFallback: true;
  };
  alternatePaidDocumentRoutingAllowed: false;
};

export type PdfDocumentModelsRollback = {
  onProviderOrModelValidationFailure: "disable_pdf_document_routing_only";
  preserveTextImageDefaultFallbackService: true;
  alternatePaidDocumentRoutingAllowed: false;
  /** Non-secret failure event type emitted on validation failure. */
  failureEventType: "pdf_document_routing_validation_failure";
};

/**
 * Machine-readable PDF documentModels cutover.
 * Principal-approved MiniMax-M3 candidate at approved_unverified — still
 * non-live; first production proof receipt required before success claims.
 */
export type PdfDocumentModelsCutover = {
  state: PdfCutoverState;
  /** When true, non-live fragment may set documentModels.pdf as candidate. */
  documentModelsEnabled: boolean;
  capabilityStatus: PdfCapabilityStatus;
  /** Approved PDF/document routing candidate ref. */
  candidateRef: string;
  /** Controlled production rollout owns first live proof — not this packet. */
  firstProof: "controlled_production_rollout";
  requiresFirstProductionProofReceipt: true;
  /** Observed MiniMax media-understanding PDF owner in provider plugin config. */
  observedMediaPdfTextExtraction: string;
  /** Do not silently route documents to another paid model. */
  alternatePaidDocumentRoutingAllowed: false;
  rollback: PdfDocumentModelsRollback;
  evidence: readonly string[];
};

export type ModelRouteEntry = {
  slot: ModelRouteSlot;
  /** OpenClaw model ref: provider/modelId (or openrouter/vendor/model). */
  ref: string;
  /** Human label from the approved Wave 10 packet. */
  label: string;
  /** When false, must not appear in live agents.defaults.model.fallbacks. */
  enabledInDefaults: boolean;
  reasoningEffort?: ReasoningEffort;
  notes?: string;
  /** Authoritative verification sources recorded at contract freeze. */
  verifiedSources: readonly string[];
};

const PDF_CANDIDATE_REF = "openrouter/minimax/minimax-m3";

export const LISA_DEVELOPMENT_COMPLEXITY_POLICY = {
  cursorMaxScore: 2,
  lunaMaxScore: 4,
  rules: {
    hardGate: {
      score: 3,
      matches: [
        "production or deployment",
        "authentication, authorization, permissions, credentials, or secrets",
        "security-sensitive behavior",
        "database migration or destructive/irreversible action",
      ],
    },
    complex: {
      score: 2,
      matches: [
        "cross-repository change",
        "architecture, concurrency, or public API change",
        "unfamiliar failure investigation",
        "external integration",
      ],
    },
    bounded: {
      score: 1,
      matches: [
        "more than three files",
        "new dependency",
        "unclear acceptance criteria",
        "expected validation longer than ten minutes",
      ],
    },
  },
  routes: {
    simple: {
      score: "0-2",
      planner: null,
      orchestrator: "openai/gpt-5.6-terra",
      executor: "cursor/grok-4.5[effort=high,fast=true]",
    },
    complex: {
      score: "3-4",
      planner: null,
      orchestrator: "openai/gpt-5.6-terra",
      executor: "openai/gpt-5.6-luna",
    },
    hard: {
      score: "5+ or any hard gate",
      planner: "openai/gpt-5.6-sol",
      orchestrator: "openai/gpt-5.6-terra",
      executor: "openai/gpt-5.6-luna",
    },
  },
  uncertaintyRoutesUp: true,
  cursorFailureEscalatesOnceToLuna: true,
  receiptRequired: true,
} as const;

export const LISA_NEMOTRON_SHADOW_POLICY = {
  ref: "openrouter/nvidia/nemotron-3-super-120b-a12b",
  sampleEveryEligible: 10,
  promptParity: "exact_user_prompt_only",
  userVisible: false,
  toolsAllowed: false,
  sideEffectsAllowed: false,
  secretsAllowed: false,
  codingAllowed: false,
  automatedQualityJudgment: false,
  failClosed: true,
} as const;

/**
 * Approved OCP-W10 / OCP-W20 / OCP-W30 routing — config/code only.
 * Paid Nemotron stays evaluation-only and disabled in defaults.
 * Staged canary remains non-live by default (liveMutationAllowed false).
 * PDF documentModels: MiniMax-M3 approved_unverified candidate (non-live).
 */
export const LISA_APPROVED_MODEL_ROUTING = {
  version: "2026-08-05-native-oauth-development-routing",
  liveMutationAllowed: false,
  paidSpendEnablementAllowed: true,
  /**
   * PDF cutover enabled as Principal-approved candidate only.
   * Capability remains approved_unverified until first-production-proof receipt.
   * Validation failure → disable PDF document routing only (see rollback).
   */
  pdfDocumentModelsCutover: {
    state: "enabled_candidate",
    documentModelsEnabled: true,
    capabilityStatus: "approved_unverified",
    candidateRef: PDF_CANDIDATE_REF,
    firstProof: "controlled_production_rollout",
    requiresFirstProductionProofReceipt: true,
    observedMediaPdfTextExtraction: "MiniMax-M2.7",
    alternatePaidDocumentRoutingAllowed: false,
    rollback: {
      onProviderOrModelValidationFailure: "disable_pdf_document_routing_only",
      preserveTextImageDefaultFallbackService: true,
      alternatePaidDocumentRoutingAllowed: false,
      failureEventType: "pdf_document_routing_validation_failure",
    },
    evidence: [
      "Principal-approved OCP-W30 MiniMax-M3 PDF/document candidate (capabilityStatus=approved_unverified)",
      "First live proof deferred to separately controlled production rollout; first-production-proof receipt required before success claim",
      "extensions/minimax/provider-models.ts MiniMax-M3 catalog input: text+image (PDF unproven at freeze)",
      "extensions/minimax/media-understanding-provider.ts documentModels.pdf textExtraction MiniMax-M2.7 image:false (observed plugin default)",
      "extensions/minimax/openclaw.plugin.json mediaUnderstandingProviderMetadata.documentModels.pdf MiniMax-M2.7",
    ],
  },
  entries: [
    {
      slot: "primary",
      ref: "openai/gpt-5.6-luna",
      label: "OpenAI gpt-5.6-luna",
      enabledInDefaults: true,
      reasoningEffort: "high",
      notes: "Native ChatGPT OAuth primary; reasoning effort high.",
      verifiedSources: [
        "extensions/openai (repo GPT-5.6 Luna routes)",
        "OpenClaw AGENTS.md example model gpt-5.6-luna",
      ],
    },
    {
      slot: "firstFallback",
      ref: "openrouter/openai/gpt-5.6-luna",
      label: "OpenRouter GPT-5.6 Luna",
      enabledInDefaults: true,
      reasoningEffort: "medium",
      notes: "First fallback through OpenRouter; reasoning effort medium.",
      verifiedSources: [
        "OpenClaw live OpenRouter catalogue",
        "OpenRouter model route openai/gpt-5.6-luna",
      ],
    },
    {
      slot: "secondFallback",
      ref: "openrouter/z-ai/glm-5.2",
      label: "OpenRouter GLM-5.2",
      enabledInDefaults: true,
      notes: "Second fallback through OpenRouter.",
      verifiedSources: [
        "OpenClaw live OpenRouter catalogue",
        "https://docs.z.ai/guides/llm/glm-5.2",
      ],
    },
    {
      slot: "imagePdf",
      ref: "openrouter/minimax/minimax-m3",
      label: "OpenRouter MiniMax-M3",
      enabledInDefaults: true,
      // Packet slot name remains imagePdf. Image uses agents.defaults.imageModel;
      // PDF uses agents.defaults.documentModels.pdf as approved_unverified candidate.
      notes:
        "Image via agents.defaults.imageModel (catalog input text+image). PDF via agents.defaults.documentModels.pdf candidate (pdfDocumentModelsCutover.state=enabled_candidate, capabilityStatus=approved_unverified) — Principal-approved but unverified; require first-production-proof receipt before any success claim; never silently substitute another paid document model.",
      verifiedSources: [
        "extensions/minimax/provider-models.ts MINIMAX_DEFAULT_MODEL_ID",
        "extensions/minimax/provider-models.ts MINIMAX_TEXT_MODEL_CATALOG MiniMax-M3",
        "extensions/minimax/media-understanding-provider.ts documentModels.pdf MiniMax-M2.7",
      ],
    },
    {
      slot: "nextFallback",
      ref: "openrouter/moonshotai/kimi-k3",
      label: "Kimi K3",
      enabledInDefaults: true,
      notes: "Moonshot direct id; OpenRouter alternate openrouter/moonshotai/kimi-k3.",
      verifiedSources: [
        "extensions/moonshot/provider-policy-api.ts KIMI_K3_MODEL_ID",
        "https://platform.kimi.ai/docs/guide/kimi-k3-quickstart",
        "https://openrouter.ai/moonshotai/kimi-k3",
      ],
    },
    {
      slot: "utility",
      ref: "openrouter/google/gemini-3.5-flash-lite",
      label: "Gemini 3.5 Flash-Lite",
      enabledInDefaults: true,
      notes:
        "Utility/subagent slot. OpenRouter id verified; OpenClaw google catalog lists gemini-3.5-flash (not flash-lite) at freeze — prefer OpenRouter route for utility.",
      verifiedSources: [
        "https://openrouter.ai/google/gemini-3.5-flash-lite",
        "https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/",
      ],
    },
    {
      slot: "evaluationOnly",
      ref: "openrouter/nvidia/nemotron-3-super-120b-a12b",
      label: "paid Nemotron Super (eval only)",
      enabledInDefaults: false,
      notes:
        "Paid sampled shadow evaluation only; never a primary or fallback and never user-visible.",
      verifiedSources: [
        "extensions/nvidia/provider-catalog.ts nvidia/nemotron-3-super-120b-a12b",
        "extensions/nvidia/openclaw.plugin.json",
      ],
    },
  ],
} as const satisfies {
  version: string;
  liveMutationAllowed: false;
  paidSpendEnablementAllowed: true;
  pdfDocumentModelsCutover: PdfDocumentModelsCutover & {
    state: "enabled_candidate";
    documentModelsEnabled: true;
    capabilityStatus: "approved_unverified";
    candidateRef: typeof PDF_CANDIDATE_REF;
    firstProof: "controlled_production_rollout";
    requiresFirstProductionProofReceipt: true;
    alternatePaidDocumentRoutingAllowed: false;
    rollback: PdfDocumentModelsRollback & {
      alternatePaidDocumentRoutingAllowed: false;
      preserveTextImageDefaultFallbackService: true;
    };
  };
  entries: readonly ModelRouteEntry[];
};

export type LisaApprovedModelRouting = typeof LISA_APPROVED_MODEL_ROUTING;

/** Ordered default chat fallback refs (excludes image slot and disabled eval). */
export function defaultChatFallbackRefs(
  routing: LisaApprovedModelRouting = LISA_APPROVED_MODEL_ROUTING,
): string[] {
  const bySlot = new Map(routing.entries.map((e) => [e.slot, e]));
  const ordered: ModelRouteSlot[] = ["firstFallback", "secondFallback", "nextFallback", "utility"];
  const refs: string[] = [];
  for (const slot of ordered) {
    const entry = bySlot.get(slot);
    if (entry?.enabledInDefaults) {
      refs.push(entry.ref);
    }
  }
  return refs;
}

export function primaryModelRef(
  routing: LisaApprovedModelRouting = LISA_APPROVED_MODEL_ROUTING,
): string {
  const primary = routing.entries.find((e) => e.slot === "primary");
  if (!primary) {
    throw new Error("approved routing missing primary slot");
  }
  return primary.ref;
}

export function imageModelRef(
  routing: LisaApprovedModelRouting = LISA_APPROVED_MODEL_ROUTING,
): string {
  const image = routing.entries.find((e) => e.slot === "imagePdf");
  if (!image) {
    throw new Error("approved routing missing imagePdf slot");
  }
  return image.ref;
}

/** Approved PDF/document candidate ref (documentModels.pdf). */
export function pdfDocumentModelRef(
  routing: LisaApprovedModelRouting = LISA_APPROVED_MODEL_ROUTING,
): string {
  return routing.pdfDocumentModelsCutover.candidateRef;
}

export function primaryReasoningEffort(
  routing: LisaApprovedModelRouting = LISA_APPROVED_MODEL_ROUTING,
): ReasoningEffort {
  const primary = routing.entries.find((e) => e.slot === "primary");
  if (!primary?.reasoningEffort) {
    throw new Error("approved routing primary missing reasoningEffort");
  }
  return primary.reasoningEffort;
}

/**
 * Non-secret failure event for provider/model validation failure.
 * Never includes credentials, tokens, or message bodies.
 */
export function buildPdfDocumentRoutingFailureEvent(
  reasonCode: string,
  routing: LisaApprovedModelRouting = LISA_APPROVED_MODEL_ROUTING,
): PdfDocumentRoutingFailureEvent {
  return {
    type: "pdf_document_routing_validation_failure",
    reasonCode,
    candidateRef: routing.pdfDocumentModelsCutover.candidateRef,
    capabilityStatus: "approved_unverified",
    action: "disable_pdf_document_routing_only",
    preserveService: {
      primary: true,
      imageModel: true,
      defaultFallback: true,
    },
    alternatePaidDocumentRoutingAllowed: false,
  };
}

/**
 * Deterministic rollback: disable only PDF document routing; preserve
 * text/image/default-fallback service. Never substitutes a paid provider.
 */
export function rollbackPdfDocumentRoutingOnly(
  routing: LisaApprovedModelRouting = LISA_APPROVED_MODEL_ROUTING,
  reasonCode = "provider_or_model_validation_failure",
): {
  failureEvent: PdfDocumentRoutingFailureEvent;
  pdfDocumentModelsCutover: {
    state: "disabled_by_rollback";
    documentModelsEnabled: false;
    capabilityStatus: "approved_unverified";
    candidateRef: string;
    alternatePaidDocumentRoutingAllowed: false;
  };
  preserved: {
    model: { primary: string; fallbacks: string[] };
    imageModel: { primary: string };
  };
} {
  return {
    failureEvent: buildPdfDocumentRoutingFailureEvent(reasonCode, routing),
    pdfDocumentModelsCutover: {
      state: "disabled_by_rollback",
      documentModelsEnabled: false,
      capabilityStatus: "approved_unverified",
      candidateRef: routing.pdfDocumentModelsCutover.candidateRef,
      alternatePaidDocumentRoutingAllowed: false,
    },
    preserved: {
      model: {
        primary: primaryModelRef(routing),
        fallbacks: defaultChatFallbackRefs(routing),
      },
      imageModel: {
        primary: imageModelRef(routing),
      },
    },
  };
}

/** Non-live openclaw.json agents.defaults fragment — secrets omitted. */
export function buildNonLiveAgentsDefaultsFragment(
  routing: LisaApprovedModelRouting = LISA_APPROVED_MODEL_ROUTING,
): {
  model: { primary: string; fallbacks: string[] };
  imageModel: { primary: string };
  documentModels: { pdf: { primary: string } };
  thinkingDefault: ReasoningEffort;
  evaluationOnly: { ref: string; enabledInDefaults: false };
  pdfDocumentModelsCutover: {
    state: "enabled_candidate";
    documentModelsEnabled: true;
    capabilityStatus: "approved_unverified";
    candidateRef: string;
    requiresFirstProductionProofReceipt: true;
    alternatePaidDocumentRoutingAllowed: false;
  };
} {
  if (routing.pdfDocumentModelsCutover.documentModelsEnabled !== true) {
    throw new Error("non-live fragment requires enabled PDF documentModels candidate cutover");
  }
  if (routing.pdfDocumentModelsCutover.state !== "enabled_candidate") {
    throw new Error("non-live fragment requires pdfDocumentModelsCutover.state=enabled_candidate");
  }
  if (routing.pdfDocumentModelsCutover.capabilityStatus !== "approved_unverified") {
    throw new Error("non-live fragment requires capabilityStatus=approved_unverified");
  }
  return {
    model: {
      primary: primaryModelRef(routing),
      fallbacks: defaultChatFallbackRefs(routing),
    },
    imageModel: {
      primary: imageModelRef(routing),
    },
    documentModels: {
      pdf: {
        primary: pdfDocumentModelRef(routing),
      },
    },
    thinkingDefault: primaryReasoningEffort(routing),
    evaluationOnly: {
      ref: routing.entries.find((e) => e.slot === "evaluationOnly")!.ref,
      enabledInDefaults: false,
    },
    pdfDocumentModelsCutover: {
      state: "enabled_candidate",
      documentModelsEnabled: true,
      capabilityStatus: "approved_unverified",
      candidateRef: routing.pdfDocumentModelsCutover.candidateRef,
      requiresFirstProductionProofReceipt: true,
      alternatePaidDocumentRoutingAllowed: false,
    },
  };
}

export function validateApprovedRouting(
  routing: LisaApprovedModelRouting = LISA_APPROVED_MODEL_ROUTING,
): string[] {
  const errors: string[] = [];
  if (routing.liveMutationAllowed !== false) {
    errors.push("liveMutationAllowed must be false");
  }
  if (routing.paidSpendEnablementAllowed !== true) {
    errors.push("paidSpendEnablementAllowed must be true for bounded Nemotron shadow evaluation");
  }
  if (routing.version !== "2026-08-05-native-oauth-development-routing") {
    errors.push("version must be 2026-08-05-native-oauth-development-routing");
  }
  const cutover = routing.pdfDocumentModelsCutover;
  if (cutover.state !== "enabled_candidate") {
    errors.push("pdfDocumentModelsCutover.state must be enabled_candidate for approved candidate");
  }
  if (cutover.documentModelsEnabled !== true) {
    errors.push("pdfDocumentModelsCutover.documentModelsEnabled must be true for candidate");
  }
  if (cutover.capabilityStatus !== "approved_unverified") {
    errors.push("pdfDocumentModelsCutover.capabilityStatus must be approved_unverified");
  }
  if (cutover.capabilityStatus === ("proven" as string)) {
    errors.push("pdfDocumentModelsCutover.capabilityStatus must not be proven");
  }
  if (cutover.candidateRef !== PDF_CANDIDATE_REF) {
    errors.push("pdfDocumentModelsCutover.candidateRef must be openrouter/minimax/minimax-m3");
  }
  if (cutover.firstProof !== "controlled_production_rollout") {
    errors.push("firstProof must be controlled_production_rollout");
  }
  if (cutover.requiresFirstProductionProofReceipt !== true) {
    errors.push("requiresFirstProductionProofReceipt must be true");
  }
  if (cutover.alternatePaidDocumentRoutingAllowed !== false) {
    errors.push("alternatePaidDocumentRoutingAllowed must be false");
  }
  if (cutover.observedMediaPdfTextExtraction !== "MiniMax-M2.7") {
    errors.push("observedMediaPdfTextExtraction must remain MiniMax-M2.7 per provider config");
  }
  if (cutover.rollback.onProviderOrModelValidationFailure !== "disable_pdf_document_routing_only") {
    errors.push("rollback must disable PDF document routing only");
  }
  if (cutover.rollback.preserveTextImageDefaultFallbackService !== true) {
    errors.push("rollback must preserve text/image/default-fallback service");
  }
  if (cutover.rollback.alternatePaidDocumentRoutingAllowed !== false) {
    errors.push("rollback.alternatePaidDocumentRoutingAllowed must be false");
  }
  if (cutover.rollback.failureEventType !== "pdf_document_routing_validation_failure") {
    errors.push("rollback.failureEventType must be pdf_document_routing_validation_failure");
  }
  if (cutover.evidence.length === 0) {
    errors.push("pdfDocumentModelsCutover.evidence must be non-empty");
  }
  const slots = routing.entries.map((e) => e.slot);
  const required: ModelRouteSlot[] = [
    "primary",
    "firstFallback",
    "secondFallback",
    "imagePdf",
    "nextFallback",
    "utility",
    "evaluationOnly",
  ];
  for (const slot of required) {
    if (!slots.includes(slot)) {
      errors.push(`missing slot ${slot}`);
    }
  }
  const primary = routing.entries.find((e) => e.slot === "primary");
  if (primary?.ref !== "openai/gpt-5.6-luna") {
    errors.push("primary must be openai/gpt-5.6-luna");
  }
  if (primary?.reasoningEffort !== "high") {
    errors.push("primary reasoningEffort must be high");
  }
  const firstFallback = routing.entries.find((e) => e.slot === "firstFallback");
  if (firstFallback?.ref !== "openrouter/openai/gpt-5.6-luna") {
    errors.push("firstFallback must be openrouter/openai/gpt-5.6-luna");
  }
  if (firstFallback?.reasoningEffort !== "medium") {
    errors.push("firstFallback reasoningEffort must be medium");
  }
  const secondFallback = routing.entries.find((e) => e.slot === "secondFallback");
  if (secondFallback?.ref !== "openrouter/z-ai/glm-5.2") {
    errors.push("secondFallback must be openrouter/z-ai/glm-5.2");
  }
  const image = routing.entries.find((e) => e.slot === "imagePdf");
  if (image?.ref !== "openrouter/minimax/minimax-m3") {
    errors.push("imagePdf must be openrouter/minimax/minimax-m3");
  }
  if (image?.notes) {
    if (!/approved_unverified/i.test(image.notes)) {
      errors.push("imagePdf notes must state capabilityStatus approved_unverified");
    }
    if (!/documentModels\.pdf/i.test(image.notes)) {
      errors.push("imagePdf notes must distinguish PDF documentModels.pdf route");
    }
    if (/proven|production proof (complete|done)|PDF support proven/i.test(image.notes)) {
      errors.push("imagePdf notes must not claim MiniMax-M3 PDF as proven");
    }
  }
  const next = routing.entries.find((e) => e.slot === "nextFallback");
  if (next?.ref !== "openrouter/moonshotai/kimi-k3") {
    errors.push("nextFallback must be openrouter/moonshotai/kimi-k3");
  }
  const utility = routing.entries.find((e) => e.slot === "utility");
  if (utility?.ref !== "openrouter/google/gemini-3.5-flash-lite") {
    errors.push("utility must be openrouter/google/gemini-3.5-flash-lite");
  }
  const evalOnly = routing.entries.find((e) => e.slot === "evaluationOnly");
  if (evalOnly?.enabledInDefaults !== false) {
    errors.push("evaluationOnly must have enabledInDefaults false");
  }
  if (evalOnly?.ref.includes(":free")) {
    errors.push("evaluationOnly must not use free Nemotron ids");
  }
  if (evalOnly?.ref !== LISA_NEMOTRON_SHADOW_POLICY.ref) {
    errors.push("evaluationOnly must reference paid Nemotron");
  }
  for (const entry of routing.entries) {
    if (!entry.ref.includes("/")) {
      errors.push(`${entry.slot} ref must be provider/model form`);
    }
    if (entry.verifiedSources.length === 0) {
      errors.push(`${entry.slot} missing verifiedSources`);
    }
  }
  return errors;
}
