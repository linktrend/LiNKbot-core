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
  defaultChatFallbackRefs,
  imageModelRef,
  LISA_APPROVED_MODEL_ROUTING,
  primaryModelRef,
  primaryReasoningEffort,
  validateApprovedRouting,
} from "./model-routing-contract.ts";

const here = path.dirname(fileURLToPath(import.meta.url));

describe("model-routing-contract (non-live)", () => {
  it("keeps hard stops false and validates approved slots", () => {
    const errors = validateApprovedRouting(LISA_APPROVED_MODEL_ROUTING);
    assert.deepEqual(errors, []);
    assert.equal(LISA_APPROVED_MODEL_ROUTING.liveMutationAllowed, false);
    assert.equal(LISA_APPROVED_MODEL_ROUTING.paidSpendEnablementAllowed, false);
    assert.equal(primaryModelRef(), "openai/gpt-5.6-luna");
    assert.equal(primaryReasoningEffort(), "medium");
    assert.equal(imageModelRef(), "minimax/MiniMax-M3");
    assert.deepEqual(defaultChatFallbackRefs(), [
      "zai/glm-5.2",
      "moonshot/kimi-k3",
      "openrouter/google/gemini-3.5-flash-lite",
    ]);
  });

  it("keeps PDF documentModels cutover needs_human_gate and disabled", () => {
    const cutover = LISA_APPROVED_MODEL_ROUTING.pdfDocumentModelsCutover;
    assert.equal(cutover.state, "needs_human_gate");
    assert.equal(cutover.documentModelsEnabled, false);
    assert.equal(cutover.alternatePaidDocumentRoutingAllowed, false);
    assert.equal(cutover.observedMediaPdfTextExtraction, "MiniMax-M2.7");
    assert.ok(cutover.evidence.length >= 2);
    assert.ok(
      cutover.evidence.some((line) => /media-understanding-provider\.ts/.test(line)),
    );
    const imagePdf = LISA_APPROVED_MODEL_ROUTING.entries.find((e) => e.slot === "imagePdf");
    assert.ok(imagePdf);
    assert.match(imagePdf.notes ?? "", /needs_human_gate/i);
    assert.ok(!/Image\/PDF via MiniMax native vision catalog/i.test(imagePdf.notes ?? ""));
  });

  it("builds non-live agents.defaults fragment without documentModels or paid eval", () => {
    const fragment = buildNonLiveAgentsDefaultsFragment();
    assert.equal(fragment.model.primary, "openai/gpt-5.6-luna");
    assert.equal(fragment.thinkingDefault, "medium");
    assert.deepEqual(fragment.model.fallbacks, [
      "zai/glm-5.2",
      "moonshot/kimi-k3",
      "openrouter/google/gemini-3.5-flash-lite",
    ]);
    assert.equal(fragment.imageModel.primary, "minimax/MiniMax-M3");
    assert.equal(fragment.evaluationOnly.enabledInDefaults, false);
    assert.ok(!fragment.evaluationOnly.ref.includes(":free"));
    assert.match(fragment.evaluationOnly.ref, /nemotron/i);
    assert.equal(fragment.pdfDocumentModelsCutover.state, "needs_human_gate");
    assert.equal(fragment.pdfDocumentModelsCutover.documentModelsEnabled, false);
    assert.equal(
      "documentModels" in fragment || "documentModels" in (fragment as object),
      false,
    );
  });

  it("keeps contract JSON aligned with TypeScript contract", () => {
    const raw = JSON.parse(
      readFileSync(path.join(here, "model-routing.contract.json"), "utf8"),
    ) as {
      agents: {
        defaults: {
          model: { primary: string; fallbacks: string[] };
          imageModel: { primary: string };
          thinkingDefault: string;
          documentModels?: unknown;
        };
      };
      evaluationOnly: { enabledInDefaults: boolean; ref: string };
      liveMutationAllowed: boolean;
      paidSpendEnablementAllowed: boolean;
      pdfDocumentModelsCutover: {
        state: string;
        documentModelsEnabled: boolean;
        observedMediaPdfTextExtraction: string;
        alternatePaidDocumentRoutingAllowed: boolean;
      };
    };
    const fragment = buildNonLiveAgentsDefaultsFragment();
    assert.equal(raw.liveMutationAllowed, false);
    assert.equal(raw.paidSpendEnablementAllowed, false);
    assert.equal(raw.pdfDocumentModelsCutover.state, "needs_human_gate");
    assert.equal(raw.pdfDocumentModelsCutover.documentModelsEnabled, false);
    assert.equal(raw.pdfDocumentModelsCutover.alternatePaidDocumentRoutingAllowed, false);
    assert.equal(raw.pdfDocumentModelsCutover.observedMediaPdfTextExtraction, "MiniMax-M2.7");
    assert.equal(raw.agents.defaults.model.primary, fragment.model.primary);
    assert.deepEqual(raw.agents.defaults.model.fallbacks, fragment.model.fallbacks);
    assert.equal(raw.agents.defaults.imageModel.primary, fragment.imageModel.primary);
    assert.equal(raw.agents.defaults.thinkingDefault, fragment.thinkingDefault);
    assert.equal(raw.evaluationOnly.enabledInDefaults, false);
    assert.equal(raw.agents.defaults.documentModels, undefined);
  });

  it("rejects free-tier Nemotron and enabled eval in defaults", () => {
    const evalOnly = LISA_APPROVED_MODEL_ROUTING.entries.find((e) => e.slot === "evaluationOnly");
    assert.ok(evalOnly);
    assert.equal(evalOnly.enabledInDefaults, false);
    assert.ok(!evalOnly.ref.includes(":free"));
    assert.equal(evalOnly.ref, "nvidia/nemotron-3-super-120b-a12b");
  });
});
