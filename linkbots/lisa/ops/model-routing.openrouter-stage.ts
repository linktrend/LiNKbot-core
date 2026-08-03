/**
 * Lisa Mac Mini stage OpenRouter-only routing overlay (non-live).
 *
 * Semantic slots live in model-routing-contract.ts. This module maps those
 * slots onto OpenRouter refs that match lisa-stage runtime posture:
 * OpenRouter is the only provider credential; never request direct provider keys.
 *
 * PDF remains approved_unverified. Stage uses agents.defaults.pdfModel.
 */

import { LISA_APPROVED_MODEL_ROUTING, type ReasoningEffort } from "./model-routing-contract.ts";

export const OPENROUTER_ONLY_STAGE_CONTRACT_VERSION =
  "2026-08-03-openrouter-only-stage-routing" as const;

export type OpenRouterOnlyCredentialPosture = {
  mode: "openrouter_only";
  allowedCredentialNames: readonly ["OPENROUTER_API_KEY"];
  forbidDirectProviderKeys: true;
  forbiddenCredentialNamePrefixes: readonly [
    "OPENAI_",
    "ZAI_",
    "MINIMAX_",
    "MOONSHOT_",
    "NVIDIA_",
    "GOOGLE_",
  ];
};

/**
 * Stage OpenRouter model refs observed on lisa-stage (18791).
 * OpenRouter catalog uses lowercase minimax-m3; workshop semantic id remains MiniMax-M3.
 */
export const LISA_OPENROUTER_ONLY_STAGE_ROUTING = {
  version: OPENROUTER_ONLY_STAGE_CONTRACT_VERSION,
  liveMutationAllowed: false as const,
  paidSpendEnablementAllowed: false as const,
  provider: "openrouter" as const,
  sourceSemanticContractVersion: LISA_APPROVED_MODEL_ROUTING.version,
  credentialPosture: {
    mode: "openrouter_only",
    allowedCredentialNames: ["OPENROUTER_API_KEY"],
    forbidDirectProviderKeys: true,
    forbiddenCredentialNamePrefixes: [
      "OPENAI_",
      "ZAI_",
      "MINIMAX_",
      "MOONSHOT_",
      "NVIDIA_",
      "GOOGLE_",
    ],
  } as const satisfies OpenRouterOnlyCredentialPosture,
  agents: {
    defaults: {
      model: {
        primary: "openrouter/openai/gpt-5.6-luna",
        fallbacks: [
          "openrouter/z-ai/glm-5.2",
          "openrouter/moonshotai/kimi-k3",
          "openrouter/google/gemini-3.5-flash-lite",
        ],
      },
      imageModel: {
        primary: "openrouter/minimax/minimax-m3",
      },
      /** Stage runtime key — not documentModels. */
      pdfModel: {
        primary: "openrouter/minimax/minimax-m3",
      },
      thinkingDefault: "medium" as ReasoningEffort,
    },
  },
  evaluationOnly: {
    ref: "openrouter/nvidia/nemotron-3-super-120b-a12b",
    enabledInDefaults: false as const,
    forbidFreeTiers: true as const,
    inModelPolicyAllow: false as const,
  },
  pdfDocumentModelsCutover: {
    state: "enabled_candidate" as const,
    documentModelsEnabled: true as const,
    capabilityStatus: "approved_unverified" as const,
    candidateRef: "openrouter/minimax/minimax-m3",
    runtimeConfigKey: "agents.defaults.pdfModel" as const,
    firstProof: "controlled_stage_or_production_rollout" as const,
    requiresFirstProductionProofReceipt: true as const,
    alternatePaidDocumentRoutingAllowed: false as const,
    rollback: {
      onProviderOrModelValidationFailure: "disable_pdf_document_routing_only" as const,
      preserveTextImageDefaultFallbackService: true as const,
      alternatePaidDocumentRoutingAllowed: false as const,
      failureEventType: "pdf_document_routing_validation_failure" as const,
    },
  },
} as const;

export type LisaOpenRouterOnlyStageRouting = typeof LISA_OPENROUTER_ONLY_STAGE_ROUTING;

/** Map semantic workshop slots → OpenRouter-only stage refs. */
export function openRouterOnlyStageRefs(
  routing: LisaOpenRouterOnlyStageRouting = LISA_OPENROUTER_ONLY_STAGE_ROUTING,
): {
  primary: string;
  thinkingDefault: ReasoningEffort;
  fallbacks: readonly string[];
  imageModel: string;
  pdfModel: string;
  evaluationOnly: string;
} {
  return {
    primary: routing.agents.defaults.model.primary,
    thinkingDefault: routing.agents.defaults.thinkingDefault,
    fallbacks: routing.agents.defaults.model.fallbacks,
    imageModel: routing.agents.defaults.imageModel.primary,
    pdfModel: routing.agents.defaults.pdfModel.primary,
    evaluationOnly: routing.evaluationOnly.ref,
  };
}

export function validateOpenRouterOnlyStageRouting(
  routing: LisaOpenRouterOnlyStageRouting = LISA_OPENROUTER_ONLY_STAGE_ROUTING,
): string[] {
  const errors: string[] = [];
  if (routing.liveMutationAllowed !== false) {
    errors.push("liveMutationAllowed must be false");
  }
  if (routing.paidSpendEnablementAllowed !== false) {
    errors.push("paidSpendEnablementAllowed must be false");
  }
  if (routing.version !== OPENROUTER_ONLY_STAGE_CONTRACT_VERSION) {
    errors.push(`version must be ${OPENROUTER_ONLY_STAGE_CONTRACT_VERSION}`);
  }
  if (routing.provider !== "openrouter") {
    errors.push("provider must be openrouter");
  }
  const posture = routing.credentialPosture;
  if (posture.mode !== "openrouter_only") {
    errors.push("credentialPosture.mode must be openrouter_only");
  }
  if (posture.forbidDirectProviderKeys !== true) {
    errors.push("forbidDirectProviderKeys must be true");
  }
  if (
    posture.allowedCredentialNames.length !== 1 ||
    posture.allowedCredentialNames[0] !== "OPENROUTER_API_KEY"
  ) {
    errors.push("allowedCredentialNames must be exactly OPENROUTER_API_KEY");
  }
  const refs = openRouterOnlyStageRefs(routing);
  if (refs.primary !== "openrouter/openai/gpt-5.6-luna") {
    errors.push("primary must be openrouter/openai/gpt-5.6-luna");
  }
  if (refs.thinkingDefault !== "medium") {
    errors.push("thinkingDefault must be medium");
  }
  if (refs.fallbacks[0] !== "openrouter/z-ai/glm-5.2") {
    errors.push("first fallback must be openrouter/z-ai/glm-5.2");
  }
  if (refs.fallbacks[1] !== "openrouter/moonshotai/kimi-k3") {
    errors.push("next fallback must be openrouter/moonshotai/kimi-k3");
  }
  if (refs.fallbacks[2] !== "openrouter/google/gemini-3.5-flash-lite") {
    errors.push("utility must be openrouter/google/gemini-3.5-flash-lite");
  }
  if (refs.imageModel !== "openrouter/minimax/minimax-m3") {
    errors.push("imageModel must be openrouter/minimax/minimax-m3");
  }
  if (refs.pdfModel !== "openrouter/minimax/minimax-m3") {
    errors.push("pdfModel must be openrouter/minimax/minimax-m3");
  }
  if (routing.evaluationOnly.enabledInDefaults !== false) {
    errors.push("evaluationOnly must stay disabled in defaults");
  }
  if (routing.evaluationOnly.inModelPolicyAllow !== false) {
    errors.push("evaluationOnly must not be in modelPolicy.allow");
  }
  if (routing.evaluationOnly.ref.includes(":free")) {
    errors.push("evaluationOnly must not use free Nemotron ids");
  }
  if (!/nemotron/i.test(routing.evaluationOnly.ref)) {
    errors.push("evaluationOnly must reference Nemotron");
  }
  if (!routing.evaluationOnly.ref.startsWith("openrouter/")) {
    errors.push("evaluationOnly must be an openrouter/ ref");
  }
  for (const ref of [
    refs.primary,
    ...refs.fallbacks,
    refs.imageModel,
    refs.pdfModel,
    refs.evaluationOnly,
  ]) {
    if (!ref.startsWith("openrouter/")) {
      errors.push(`ref must be openrouter-prefixed: ${ref}`);
    }
  }
  const cutover = routing.pdfDocumentModelsCutover;
  if (cutover.capabilityStatus !== "approved_unverified") {
    errors.push("PDF capabilityStatus must be approved_unverified");
  }
  if (cutover.requiresFirstProductionProofReceipt !== true) {
    errors.push("requiresFirstProductionProofReceipt must be true");
  }
  if (cutover.alternatePaidDocumentRoutingAllowed !== false) {
    errors.push("alternatePaidDocumentRoutingAllowed must be false");
  }
  if (cutover.runtimeConfigKey !== "agents.defaults.pdfModel") {
    errors.push("stage PDF runtime key must be agents.defaults.pdfModel");
  }
  if (cutover.rollback.onProviderOrModelValidationFailure !== "disable_pdf_document_routing_only") {
    errors.push("rollback must disable PDF document routing only");
  }
  return errors;
}

/**
 * Non-secret PDF rollback fragment for stage pdfModel.
 * Does not write disk; coordinator applies via authorized probe.
 */
export function buildStagePdfModelDisableFragment(): {
  pdfModel: { primary: ""; fallbacks: []; _stageDisabled: true };
  failureEventType: "pdf_document_routing_validation_failure";
  preserve: { primary: true; imageModel: true; fallbacks: true };
  alternatePaidDocumentRoutingAllowed: false;
} {
  return {
    pdfModel: { primary: "", fallbacks: [], _stageDisabled: true },
    failureEventType: "pdf_document_routing_validation_failure",
    preserve: { primary: true, imageModel: true, fallbacks: true },
    alternatePaidDocumentRoutingAllowed: false,
  };
}
