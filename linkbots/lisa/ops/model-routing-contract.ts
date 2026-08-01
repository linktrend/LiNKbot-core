/**
 * Lisa approved model-routing contract (non-live).
 *
 * Workshop/config fragment only — never mutate ~/.openclaw-lisa or enable paid
 * Nemotron spend from this module. Identifiers verified against OpenClaw
 * provider catalogs plus vendor/OpenRouter docs (2026-08-01).
 */

export type ReasoningEffort = "low" | "medium" | "high" | "max";

export type ModelRouteSlot =
  | "primary"
  | "defaultFallback"
  | "imagePdf"
  | "nextFallback"
  | "utility"
  | "evaluationOnly";

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
 * Approved OCP-W10-LISA-RELEASE routing — config/code only.
 * Paid Nemotron stays evaluation-only and disabled in defaults.
 */
export const LISA_APPROVED_MODEL_ROUTING = {
  version: "2026-08-01-ocp-w10-lisa-release",
  liveMutationAllowed: false,
  paidSpendEnablementAllowed: false,
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
      // to MiniMax-M2.7 (image:false) — live PDF owner stays a human cutover gate.
      notes:
        "Image via agents.defaults.imageModel (catalog input text+image). PDF documentModels not set by this fragment; MiniMax media PDF defaults to M2.7 — human gate before live PDF enablement.",
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

/** Non-live openclaw.json agents.defaults fragment — secrets omitted. */
export function buildNonLiveAgentsDefaultsFragment(
  routing: LisaApprovedModelRouting = LISA_APPROVED_MODEL_ROUTING,
): {
  model: { primary: string; fallbacks: string[] };
  imageModel: { primary: string };
  thinkingDefault: ReasoningEffort;
  evaluationOnly: { ref: string; enabledInDefaults: false };
} {
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
