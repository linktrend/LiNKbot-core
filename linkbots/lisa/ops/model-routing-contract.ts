/**
 * Lisa approved model-routing contract (non-live).
 *
 * Workshop/config fragment only — never mutate ~/.openclaw-lisa or enable paid
 * Nemotron spend from this module. Identifiers verified against OpenClaw
 * provider catalogs plus vendor/OpenRouter docs (2026-08-01).
 *
 * MiniMax-M3 PDF: unproven. Catalog proves text+image only; media-understanding
 * PDF textExtraction defaults to MiniMax-M2.7. Cutover stays needs_human_gate.
 */

export type ReasoningEffort = "low" | "medium" | "high" | "max";

export type ModelRouteSlot =
  | "primary"
  | "defaultFallback"
  | "imagePdf"
  | "nextFallback"
  | "utility"
  | "evaluationOnly";

export type PdfCutoverState = "needs_human_gate" | "enabled";

/**
 * Machine-readable PDF documentModels cutover.
 * Disabled + needs_human_gate until MiniMax-M3 PDF is proven by local provider
 * config AND authoritative model capability evidence.
 */
export type PdfDocumentModelsCutover = {
  state: PdfCutoverState;
  /** When false, agents.defaults must not set documentModels.pdf from this fragment. */
  documentModelsEnabled: false | true;
  /** Observed MiniMax media-understanding PDF owner (not claimed for M3). */
  observedMediaPdfTextExtraction: string;
  /** Do not silently route documents to another paid model. */
  alternatePaidDocumentRoutingAllowed: false;
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

/**
 * Approved OCP-W10 / OCP-W20 routing — config/code only.
 * Paid Nemotron stays evaluation-only and disabled in defaults.
 * Staged canary remains non-live by default (liveMutationAllowed false).
 */
export const LISA_APPROVED_MODEL_ROUTING = {
  version: "2026-08-01-ocp-w20-cross-repo-integration",
  liveMutationAllowed: false,
  paidSpendEnablementAllowed: false,
  /**
   * PDF cutover is explicitly gated. MiniMax-M3 is imageModel-only until a
   * human approves after provider+capability proof. No silent document reroute.
   */
  pdfDocumentModelsCutover: {
    state: "needs_human_gate",
    documentModelsEnabled: false,
    observedMediaPdfTextExtraction: "MiniMax-M2.7",
    alternatePaidDocumentRoutingAllowed: false,
    evidence: [
      "extensions/minimax/provider-models.ts MiniMax-M3 input: text+image (no pdf)",
      "extensions/minimax/media-understanding-provider.ts documentModels.pdf textExtraction MiniMax-M2.7 image:false",
      "extensions/minimax/openclaw.plugin.json mediaUnderstandingProviderMetadata.documentModels.pdf MiniMax-M2.7",
    ],
  },
  entries: [
    {
      slot: "primary",
      ref: "openai/gpt-5.6-luna",
      label: "OpenAI gpt-5.6-luna",
      enabledInDefaults: true,
      reasoningEffort: "medium",
      notes: "Primary chat; reasoning effort medium.",
      verifiedSources: [
        "extensions/openai (repo GPT-5.6 Luna routes)",
        "OpenClaw AGENTS.md example model gpt-5.6-luna",
      ],
    },
    {
      slot: "defaultFallback",
      ref: "zai/glm-5.2",
      label: "GLM-5.2",
      enabledInDefaults: true,
      notes: "Z.AI direct provider id; OpenRouter alternate openrouter/z-ai/glm-5.2.",
      verifiedSources: [
        "extensions/zai/model-definitions.ts ZAI_CODING_DEFAULT_MODEL_ID",
        "https://docs.z.ai/guides/llm/glm-5.2",
      ],
    },
    {
      slot: "imagePdf",
      ref: "minimax/MiniMax-M3",
      label: "MiniMax-M3",
      enabledInDefaults: true,
      // Packet slot name remains imagePdf; this fragment only sets agents.defaults.imageModel.
      // MiniMax catalog proves text+image for M3. Media-understanding PDF textExtraction defaults
      // to MiniMax-M2.7 (image:false) — live PDF owner stays needs_human_gate.
      notes:
        "Image via agents.defaults.imageModel (catalog input text+image). PDF documentModels disabled (pdfDocumentModelsCutover.state=needs_human_gate); MiniMax media PDF defaults to M2.7 — do not claim M3 PDF or substitute another paid document model.",
      verifiedSources: [
        "extensions/minimax/provider-models.ts MINIMAX_DEFAULT_MODEL_ID",
        "extensions/minimax/provider-models.ts MINIMAX_TEXT_MODEL_CATALOG MiniMax-M3",
        "extensions/minimax/media-understanding-provider.ts documentModels.pdf MiniMax-M2.7",
      ],
    },
    {
      slot: "nextFallback",
      ref: "moonshot/kimi-k3",
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
      ref: "nvidia/nemotron-3-super-120b-a12b",
      label: "paid Nemotron Super (eval only)",
      enabledInDefaults: false,
      notes:
        "Evaluation-only. Do not enable paid spend. Forbidden: any :free Nemotron id in production chain.",
      verifiedSources: [
        "extensions/nvidia/provider-catalog.ts nvidia/nemotron-3-super-120b-a12b",
        "extensions/nvidia/openclaw.plugin.json",
      ],
    },
  ],
} as const satisfies {
  version: string;
  liveMutationAllowed: false;
  paidSpendEnablementAllowed: false;
  pdfDocumentModelsCutover: PdfDocumentModelsCutover & {
    state: "needs_human_gate";
    documentModelsEnabled: false;
    alternatePaidDocumentRoutingAllowed: false;
  };
  entries: readonly ModelRouteEntry[];
};

export type LisaApprovedModelRouting = typeof LISA_APPROVED_MODEL_ROUTING;

/** Ordered default chat fallback refs (excludes image slot and disabled eval). */
export function defaultChatFallbackRefs(
  routing: LisaApprovedModelRouting = LISA_APPROVED_MODEL_ROUTING,
): string[] {
  const bySlot = new Map(routing.entries.map((e) => [e.slot, e]));
  const ordered: ModelRouteSlot[] = ["defaultFallback", "nextFallback", "utility"];
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

export function primaryReasoningEffort(
  routing: LisaApprovedModelRouting = LISA_APPROVED_MODEL_ROUTING,
): ReasoningEffort {
  const primary = routing.entries.find((e) => e.slot === "primary");
  if (!primary?.reasoningEffort) {
    throw new Error("approved routing primary missing reasoningEffort");
  }
  return primary.reasoningEffort;
}

/** Non-live openclaw.json agents.defaults fragment — secrets omitted. No documentModels. */
export function buildNonLiveAgentsDefaultsFragment(
  routing: LisaApprovedModelRouting = LISA_APPROVED_MODEL_ROUTING,
): {
  model: { primary: string; fallbacks: string[] };
  imageModel: { primary: string };
  thinkingDefault: ReasoningEffort;
  evaluationOnly: { ref: string; enabledInDefaults: false };
  pdfDocumentModelsCutover: {
    state: "needs_human_gate";
    documentModelsEnabled: false;
  };
} {
  if (routing.pdfDocumentModelsCutover.documentModelsEnabled !== false) {
    throw new Error("non-live fragment forbids enabled PDF documentModels cutover");
  }
  if (routing.pdfDocumentModelsCutover.state !== "needs_human_gate") {
    throw new Error("non-live fragment requires pdfDocumentModelsCutover.state=needs_human_gate");
  }
  return {
    model: {
      primary: primaryModelRef(routing),
      fallbacks: defaultChatFallbackRefs(routing),
    },
    imageModel: {
      primary: imageModelRef(routing),
    },
    thinkingDefault: primaryReasoningEffort(routing),
    evaluationOnly: {
      ref: routing.entries.find((e) => e.slot === "evaluationOnly")!.ref,
      enabledInDefaults: false,
    },
    pdfDocumentModelsCutover: {
      state: "needs_human_gate",
      documentModelsEnabled: false,
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
  if (routing.paidSpendEnablementAllowed !== false) {
    errors.push("paidSpendEnablementAllowed must be false");
  }
  const cutover = routing.pdfDocumentModelsCutover;
  if (cutover.state !== "needs_human_gate") {
    errors.push("pdfDocumentModelsCutover.state must be needs_human_gate until M3 PDF is proven");
  }
  if (cutover.documentModelsEnabled !== false) {
    errors.push("pdfDocumentModelsCutover.documentModelsEnabled must be false");
  }
  if (cutover.alternatePaidDocumentRoutingAllowed !== false) {
    errors.push("alternatePaidDocumentRoutingAllowed must be false");
  }
  if (cutover.observedMediaPdfTextExtraction !== "MiniMax-M2.7") {
    errors.push("observedMediaPdfTextExtraction must remain MiniMax-M2.7 per provider config");
  }
  if (cutover.evidence.length === 0) {
    errors.push("pdfDocumentModelsCutover.evidence must be non-empty");
  }
  const slots = routing.entries.map((e) => e.slot);
  const required: ModelRouteSlot[] = [
    "primary",
    "defaultFallback",
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
  if (primary?.reasoningEffort !== "medium") {
    errors.push("primary reasoningEffort must be medium");
  }
  const fallback = routing.entries.find((e) => e.slot === "defaultFallback");
  if (fallback?.ref !== "zai/glm-5.2") {
    errors.push("defaultFallback must be zai/glm-5.2");
  }
  const image = routing.entries.find((e) => e.slot === "imagePdf");
  if (image?.ref !== "minimax/MiniMax-M3") {
    errors.push("imagePdf must be minimax/MiniMax-M3");
  }
  if (image?.notes && /MiniMax-M3 PDF|M3 PDF support|native.*PDF/i.test(image.notes) && !/not|disabled|gate|unproven|do not claim/i.test(image.notes)) {
    errors.push("imagePdf notes must not claim MiniMax-M3 PDF support");
  }
  const next = routing.entries.find((e) => e.slot === "nextFallback");
  if (next?.ref !== "moonshot/kimi-k3") {
    errors.push("nextFallback must be moonshot/kimi-k3");
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
  if (!evalOnly?.ref.includes("nemotron")) {
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
