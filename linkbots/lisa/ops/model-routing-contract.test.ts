/**
 * Focused tests for Lisa non-live model-routing contract.
 * Run: node --experimental-strip-types --test linkbots/lisa/ops/model-routing-contract.test.ts
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import {
  buildNonLiveAgentsDefaultsFragment,
  buildPdfDocumentRoutingFailureEvent,
  defaultChatFallbackRefs,
  imageModelRef,
  LISA_APPROVED_MODEL_ROUTING,
  pdfDocumentModelRef,
  primaryModelRef,
  primaryReasoningEffort,
  rollbackPdfDocumentRoutingOnly,
  validateApprovedRouting,
} from "./model-routing-contract.ts";

const here = path.dirname(fileURLToPath(import.meta.url));

describe("model-routing-contract (non-live)", () => {
  it("validates the approved native-OAuth and OpenRouter slots", () => {
    const errors = validateApprovedRouting(LISA_APPROVED_MODEL_ROUTING);
    assert.deepEqual(errors, []);
    assert.equal(LISA_APPROVED_MODEL_ROUTING.liveMutationAllowed, false);
    assert.equal(LISA_APPROVED_MODEL_ROUTING.paidSpendEnablementAllowed, true);
    assert.equal(
      LISA_APPROVED_MODEL_ROUTING.version,
      "2026-08-05-native-oauth-development-routing",
    );
    assert.equal(primaryModelRef(), "openai/gpt-5.6-luna");
    assert.equal(primaryReasoningEffort(), "high");
    assert.equal(imageModelRef(), "openrouter/minimax/minimax-m3");
    assert.equal(pdfDocumentModelRef(), "openrouter/minimax/minimax-m3");
    assert.deepEqual(defaultChatFallbackRefs(), [
      "openrouter/openai/gpt-5.6-luna",
      "openrouter/z-ai/glm-5.2",
      "openrouter/moonshotai/kimi-k3",
      "openrouter/google/gemini-3.5-flash-lite",
    ]);
  });

  it("enables MiniMax-M3 PDF documentModels as approved_unverified candidate", () => {
    const cutover = LISA_APPROVED_MODEL_ROUTING.pdfDocumentModelsCutover;
    assert.equal(cutover.state, "enabled_candidate");
    assert.equal(cutover.documentModelsEnabled, true);
    assert.equal(cutover.capabilityStatus, "approved_unverified");
    assert.notEqual(cutover.capabilityStatus, "proven");
    assert.equal(cutover.candidateRef, "openrouter/minimax/minimax-m3");
    assert.equal(cutover.firstProof, "controlled_production_rollout");
    assert.equal(cutover.requiresFirstProductionProofReceipt, true);
    assert.equal(cutover.alternatePaidDocumentRoutingAllowed, false);
    assert.equal(cutover.observedMediaPdfTextExtraction, "MiniMax-M2.7");
    assert.equal(
      cutover.rollback.onProviderOrModelValidationFailure,
      "disable_pdf_document_routing_only",
    );
    assert.equal(cutover.rollback.preserveTextImageDefaultFallbackService, true);
    assert.equal(cutover.rollback.alternatePaidDocumentRoutingAllowed, false);
    assert.ok(cutover.evidence.length >= 2);
    assert.ok(cutover.evidence.some((line) => /approved_unverified/i.test(line)));
    const imagePdf = LISA_APPROVED_MODEL_ROUTING.entries.find((e) => e.slot === "imagePdf");
    assert.ok(imagePdf);
    assert.match(imagePdf.notes ?? "", /approved_unverified/i);
    assert.match(imagePdf.notes ?? "", /pdfModel/i);
    assert.ok(!/Image\/PDF via MiniMax native vision catalog/i.test(imagePdf.notes ?? ""));
    assert.ok(!/proven PDF|PDF support proven/i.test(imagePdf.notes ?? ""));
  });

  it("builds the agents.defaults fragment with a pdfModel candidate", () => {
    const fragment = buildNonLiveAgentsDefaultsFragment();
    assert.equal(fragment.model.primary, "openai/gpt-5.6-luna");
    assert.equal(fragment.thinkingDefault, "high");
    assert.deepEqual(fragment.model.fallbacks, [
      "openrouter/openai/gpt-5.6-luna",
      "openrouter/z-ai/glm-5.2",
      "openrouter/moonshotai/kimi-k3",
      "openrouter/google/gemini-3.5-flash-lite",
    ]);
    assert.equal(fragment.imageModel.primary, "openrouter/minimax/minimax-m3");
    assert.equal(fragment.pdfModel.primary, "openrouter/minimax/minimax-m3");
    assert.equal(fragment.evaluationOnly.enabledInDefaults, false);
    assert.ok(!fragment.evaluationOnly.ref.includes(":free"));
    assert.match(fragment.evaluationOnly.ref, /nemotron/i);
    assert.equal(fragment.pdfDocumentModelsCutover.state, "enabled_candidate");
    assert.equal(fragment.pdfDocumentModelsCutover.documentModelsEnabled, true);
    assert.equal(fragment.pdfDocumentModelsCutover.capabilityStatus, "approved_unverified");
    assert.equal(fragment.pdfDocumentModelsCutover.requiresFirstProductionProofReceipt, true);
    assert.equal(fragment.pdfDocumentModelsCutover.alternatePaidDocumentRoutingAllowed, false);
  });

  it("rolls back PDF document routing only without paid substitute", () => {
    const result = rollbackPdfDocumentRoutingOnly(
      LISA_APPROVED_MODEL_ROUTING,
      "provider_or_model_validation_failure",
    );
    assert.equal(result.pdfDocumentModelsCutover.state, "disabled_by_rollback");
    assert.equal(result.pdfDocumentModelsCutover.documentModelsEnabled, false);
    assert.equal(result.pdfDocumentModelsCutover.capabilityStatus, "approved_unverified");
    assert.equal(result.pdfDocumentModelsCutover.alternatePaidDocumentRoutingAllowed, false);
    assert.equal(result.preserved.model.primary, "openai/gpt-5.6-luna");
    assert.equal(result.preserved.imageModel.primary, "openrouter/minimax/minimax-m3");
    assert.deepEqual(result.preserved.model.fallbacks, [
      "openrouter/openai/gpt-5.6-luna",
      "openrouter/z-ai/glm-5.2",
      "openrouter/moonshotai/kimi-k3",
      "openrouter/google/gemini-3.5-flash-lite",
    ]);
    assert.equal(result.failureEvent.type, "pdf_document_routing_validation_failure");
    assert.equal(result.failureEvent.action, "disable_pdf_document_routing_only");
    assert.equal(result.failureEvent.alternatePaidDocumentRoutingAllowed, false);
    assert.equal(result.failureEvent.preserveService.primary, true);
    assert.equal(result.failureEvent.preserveService.imageModel, true);
    assert.equal(result.failureEvent.preserveService.defaultFallback, true);
    const event = buildPdfDocumentRoutingFailureEvent("unit_test");
    assert.equal(event.type, "pdf_document_routing_validation_failure");
    assert.ok(!("token" in event) && !("secret" in event) && !("password" in event));
  });

  it("keeps contract JSON aligned with TypeScript contract", () => {
    const raw = JSON.parse(
      readFileSync(path.join(here, "model-routing.contract.json"), "utf8"),
    ) as {
      contractVersion: string;
      agents: {
        defaults: {
          model: { primary: string; fallbacks: string[] };
          imageModel: { primary: string };
          pdfModel?: { primary: string };
          thinkingDefault: string;
        };
      };
      tools: {
        media: {
          image: {
            models: Array<{ provider: string; model: string }>;
          };
        };
      };
      evaluationOnly: { enabledInDefaults: boolean; ref: string };
      liveMutationAllowed: boolean;
      paidSpendEnablementAllowed: boolean;
      pdfDocumentModelsCutover: {
        state: string;
        documentModelsEnabled: boolean;
        capabilityStatus: string;
        candidateRef: string;
        requiresFirstProductionProofReceipt: boolean;
        observedMediaPdfTextExtraction: string;
        alternatePaidDocumentRoutingAllowed: boolean;
        rollback: {
          onProviderOrModelValidationFailure: string;
          alternatePaidDocumentRoutingAllowed: boolean;
        };
      };
    };
    const fragment = buildNonLiveAgentsDefaultsFragment();
    assert.equal(raw.liveMutationAllowed, false);
    assert.equal(raw.paidSpendEnablementAllowed, true);
    assert.equal(raw.contractVersion, "2026-08-05-native-oauth-development-routing");
    assert.equal(raw.pdfDocumentModelsCutover.state, "enabled_candidate");
    assert.equal(raw.pdfDocumentModelsCutover.documentModelsEnabled, true);
    assert.equal(raw.pdfDocumentModelsCutover.capabilityStatus, "approved_unverified");
    assert.equal(raw.pdfDocumentModelsCutover.candidateRef, "openrouter/minimax/minimax-m3");
    assert.equal(raw.pdfDocumentModelsCutover.requiresFirstProductionProofReceipt, true);
    assert.equal(raw.pdfDocumentModelsCutover.alternatePaidDocumentRoutingAllowed, false);
    assert.equal(raw.pdfDocumentModelsCutover.observedMediaPdfTextExtraction, "MiniMax-M2.7");
    assert.equal(
      raw.pdfDocumentModelsCutover.rollback.onProviderOrModelValidationFailure,
      "disable_pdf_document_routing_only",
    );
    assert.equal(raw.pdfDocumentModelsCutover.rollback.alternatePaidDocumentRoutingAllowed, false);
    assert.equal(raw.agents.defaults.model.primary, fragment.model.primary);
    assert.deepEqual(raw.agents.defaults.model.fallbacks, fragment.model.fallbacks);
    assert.equal(raw.agents.defaults.imageModel.primary, fragment.imageModel.primary);
    assert.equal(raw.agents.defaults.pdfModel?.primary, fragment.pdfModel.primary);
    assert.equal(raw.agents.defaults.thinkingDefault, fragment.thinkingDefault);
    assert.deepEqual(raw.tools.media.image.models, [
      { provider: "openrouter", model: "minimax/minimax-m3" },
    ]);
    assert.equal(raw.evaluationOnly.enabledInDefaults, false);
  });

  it("rejects free-tier Nemotron and enabled eval in defaults", () => {
    const evalOnly = LISA_APPROVED_MODEL_ROUTING.entries.find((e) => e.slot === "evaluationOnly");
    assert.ok(evalOnly);
    assert.equal(evalOnly.enabledInDefaults, false);
    assert.ok(!evalOnly.ref.includes(":free"));
    assert.equal(evalOnly.ref, "openrouter/nvidia/nemotron-3-super-120b-a12b");
  });
});
