/**
 * Focused tests for Lisa Mac Mini OpenRouter-only stage routing overlay.
 * Run: node --experimental-strip-types --test linkbots/lisa/ops/model-routing.openrouter-stage.test.ts
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import {
  applyStagePdfRollbackInMemory,
  buildStagePdfModelDisableFragment,
  healthCheckStagePdfRouting,
  LISA_OPENROUTER_ONLY_STAGE_ROUTING,
  OPENROUTER_ONLY_STAGE_CONTRACT_VERSION,
  openRouterOnlyStageRefs,
  restoreStagePdfFromReceipt,
  validateOpenRouterOnlyStageRouting,
  validateStagePdfRollbackConfig,
  type StagePdfConfigSlice,
} from "./model-routing.openrouter-stage.ts";

function sampleStagePdfConfig(): StagePdfConfigSlice {
  return {
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
        imageModel: { primary: "openrouter/minimax/minimax-m3" },
        pdfModel: { primary: "openrouter/minimax/minimax-m3" },
      },
    },
    tools: { deny: ["browser"] },
  };
}

const here = path.dirname(fileURLToPath(import.meta.url));

describe("model-routing.openrouter-stage (non-live)", () => {
  it("validates OpenRouter-only slots, medium thinking, and hard stops", () => {
    const errors = validateOpenRouterOnlyStageRouting();
    assert.deepEqual(errors, []);
    assert.equal(LISA_OPENROUTER_ONLY_STAGE_ROUTING.liveMutationAllowed, false);
    assert.equal(LISA_OPENROUTER_ONLY_STAGE_ROUTING.paidSpendEnablementAllowed, false);
    assert.equal(
      LISA_OPENROUTER_ONLY_STAGE_ROUTING.version,
      OPENROUTER_ONLY_STAGE_CONTRACT_VERSION,
    );
    const refs = openRouterOnlyStageRefs();
    assert.equal(refs.primary, "openrouter/openai/gpt-5.6-luna");
    assert.equal(refs.thinkingDefault, "medium");
    assert.deepEqual(refs.fallbacks, [
      "openrouter/z-ai/glm-5.2",
      "openrouter/moonshotai/kimi-k3",
      "openrouter/google/gemini-3.5-flash-lite",
    ]);
    assert.equal(refs.imageModel, "openrouter/minimax/minimax-m3");
    assert.equal(refs.pdfModel, "openrouter/minimax/minimax-m3");
    assert.equal(refs.evaluationOnly, "openrouter/nvidia/nemotron-3-super-120b-a12b");
  });

  it("encodes openrouter_only credential posture without secret values", () => {
    const posture = LISA_OPENROUTER_ONLY_STAGE_ROUTING.credentialPosture;
    assert.equal(posture.mode, "openrouter_only");
    assert.deepEqual(posture.allowedCredentialNames, ["OPENROUTER_API_KEY"]);
    assert.equal(posture.forbidDirectProviderKeys, true);
    const raw = JSON.stringify(LISA_OPENROUTER_ONLY_STAGE_ROUTING);
    assert.doesNotMatch(raw, /sk-/);
    assert.doesNotMatch(raw, /Bearer /);
    assert.ok(!("apiKey" in (LISA_OPENROUTER_ONLY_STAGE_ROUTING as object)));
  });

  it("keeps PDF approved_unverified on pdfModel runtime key", () => {
    const cutover = LISA_OPENROUTER_ONLY_STAGE_ROUTING.pdfDocumentModelsCutover;
    assert.equal(cutover.capabilityStatus, "approved_unverified");
    assert.equal(cutover.runtimeConfigKey, "agents.defaults.pdfModel");
    assert.equal(cutover.requiresFirstProductionProofReceipt, true);
    assert.equal(cutover.alternatePaidDocumentRoutingAllowed, false);
    const disable = buildStagePdfModelDisableFragment();
    assert.equal(disable.strategy, "tools_deny_pdf");
    assert.deepEqual(disable.toolsDenyAdd, ["pdf"]);
    assert.equal(disable.removePdfModelKey, true);
    assert.equal(disable.neverWriteEmptyPrimary, true);
    assert.equal(disable.alternatePaidDocumentRoutingAllowed, false);
    assert.equal(disable.preserve.imageModel, true);
  });

  it("keeps JSON fragment aligned with TypeScript overlay", () => {
    const raw = JSON.parse(
      readFileSync(path.join(here, "model-routing.openrouter-stage.contract.json"), "utf8"),
    ) as {
      contractVersion: string;
      provider: string;
      liveMutationAllowed: boolean;
      paidSpendEnablementAllowed: boolean;
      credentialPosture: {
        mode: string;
        allowedCredentialNames: string[];
        forbidDirectProviderKeys: boolean;
      };
      agents: {
        defaults: {
          model: { primary: string; fallbacks: string[] };
          imageModel: { primary: string };
          pdfModel: { primary: string };
          thinkingDefault: string;
        };
      };
      evaluationOnly: {
        ref: string;
        enabledInDefaults: boolean;
        forbidFreeTiers: boolean;
        inModelPolicyAllow: boolean;
      };
      pdfDocumentModelsCutover: {
        capabilityStatus: string;
        candidateRef: string;
        runtimeConfigKey: string;
      };
    };
    const refs = openRouterOnlyStageRefs();
    assert.equal(raw.contractVersion, OPENROUTER_ONLY_STAGE_CONTRACT_VERSION);
    assert.equal(raw.provider, "openrouter");
    assert.equal(raw.liveMutationAllowed, false);
    assert.equal(raw.paidSpendEnablementAllowed, false);
    assert.equal(raw.credentialPosture.mode, "openrouter_only");
    assert.deepEqual(raw.credentialPosture.allowedCredentialNames, ["OPENROUTER_API_KEY"]);
    assert.equal(raw.credentialPosture.forbidDirectProviderKeys, true);
    assert.equal(raw.agents.defaults.model.primary, refs.primary);
    assert.deepEqual(raw.agents.defaults.model.fallbacks, [...refs.fallbacks]);
    assert.equal(raw.agents.defaults.imageModel.primary, refs.imageModel);
    assert.equal(raw.agents.defaults.pdfModel.primary, refs.pdfModel);
    assert.equal(raw.agents.defaults.thinkingDefault, refs.thinkingDefault);
    assert.equal(raw.evaluationOnly.ref, refs.evaluationOnly);
    assert.equal(raw.evaluationOnly.enabledInDefaults, false);
    assert.equal(raw.evaluationOnly.forbidFreeTiers, true);
    assert.equal(raw.evaluationOnly.inModelPolicyAllow, false);
    assert.equal(raw.pdfDocumentModelsCutover.capabilityStatus, "approved_unverified");
    assert.equal(raw.pdfDocumentModelsCutover.candidateRef, refs.pdfModel);
    assert.equal(raw.pdfDocumentModelsCutover.runtimeConfigKey, "agents.defaults.pdfModel");
  });

  it("rejects free-tier Nemotron and non-openrouter refs", () => {
    const evalOnly = LISA_OPENROUTER_ONLY_STAGE_ROUTING.evaluationOnly;
    assert.ok(!evalOnly.ref.includes(":free"));
    assert.ok(evalOnly.ref.startsWith("openrouter/"));
    assert.match(evalOnly.ref, /nemotron/i);
  });

  it("applyStagePdfRollbackInMemory denies pdf, removes pdfModel, preserves text/image/fallbacks", () => {
    const cfg = sampleStagePdfConfig();
    const { next, receipt, plan, validationErrors } = applyStagePdfRollbackInMemory(
      cfg,
      "2026-08-03T12:00:00.000Z",
    );
    assert.deepEqual(validationErrors, []);
    assert.equal(plan.strategy, "tools_deny_pdf");
    assert.equal(plan.removePdfModelKey, true);
    assert.equal(plan.neverWriteEmptyPrimary, true);
    assert.equal(next.agents?.defaults?.pdfModel, undefined);
    assert.ok(!("pdfModel" in (next.agents?.defaults ?? {})));
    assert.deepEqual(next.tools?.deny, ["browser", "pdf"]);
    assert.equal(next.agents?.defaults?.model?.primary, "openrouter/openai/gpt-5.6-luna");
    assert.deepEqual(next.agents?.defaults?.model?.fallbacks, [
      "openrouter/z-ai/glm-5.2",
      "openrouter/moonshotai/kimi-k3",
      "openrouter/google/gemini-3.5-flash-lite",
    ]);
    assert.equal(next.agents?.defaults?.imageModel?.primary, "openrouter/minimax/minimax-m3");
    assert.equal(receipt.receiptType, "lisa_stage_pdf_rollback_restore_v1");
    assert.equal(receipt.priorPdfModel?.primary, "openrouter/minimax/minimax-m3");
    assert.equal(receipt.priorPdfModel?.fallbacks, undefined);
    assert.deepEqual(receipt.priorToolsDeny, ["browser"]);
    assert.equal(JSON.stringify(next).includes('"primary":""'), false);
  });

  it("validateStagePdfRollbackConfig rejects empty pdfModel.primary", () => {
    const errors = validateStagePdfRollbackConfig({
      agents: {
        defaults: {
          model: { primary: "openrouter/openai/gpt-5.6-luna" },
          imageModel: { primary: "openrouter/minimax/minimax-m3" },
          pdfModel: { primary: "" },
        },
      },
    });
    assert.ok(errors.some((e) => /empty string is forbidden/i.test(e)));
  });

  it("restoreStagePdfFromReceipt restores prior pdfModel and prior deny list", () => {
    const cfg = sampleStagePdfConfig();
    const { next: rolled, receipt } = applyStagePdfRollbackInMemory(
      cfg,
      "2026-08-03T12:00:00.000Z",
    );
    assert.equal(rolled.agents?.defaults?.pdfModel, undefined);
    assert.deepEqual(rolled.tools?.deny, ["browser", "pdf"]);
    const { next: restored, validationErrors } = restoreStagePdfFromReceipt(rolled, receipt);
    assert.deepEqual(validationErrors, []);
    assert.deepEqual(restored.agents?.defaults?.pdfModel, {
      primary: "openrouter/minimax/minimax-m3",
    });
    assert.deepEqual(restored.tools?.deny, ["browser"]);
    assert.equal(restored.agents?.defaults?.model?.primary, "openrouter/openai/gpt-5.6-luna");
    assert.equal(restored.agents?.defaults?.imageModel?.primary, "openrouter/minimax/minimax-m3");
  });

  it("healthCheckStagePdfRouting ok after valid rollback; not ok for empty primary", () => {
    const cfg = sampleStagePdfConfig();
    const { next } = applyStagePdfRollbackInMemory(cfg);
    const healthy = healthCheckStagePdfRouting(next);
    assert.equal(healthy.ok, true);
    assert.equal(healthy.pdfToolDenied, true);
    assert.equal(healthy.pdfModelAbsentOrValid, true);
    assert.equal(healthy.textImagePreserved, true);
    assert.deepEqual(healthy.errors, []);

    const emptyPrimary = healthCheckStagePdfRouting({
      agents: {
        defaults: {
          model: { primary: "openrouter/openai/gpt-5.6-luna" },
          imageModel: { primary: "openrouter/minimax/minimax-m3" },
          pdfModel: { primary: "" },
        },
      },
      tools: { deny: ["pdf"] },
    });
    assert.equal(emptyPrimary.ok, false);
    assert.equal(emptyPrimary.pdfModelAbsentOrValid, false);
    assert.ok(emptyPrimary.errors.some((e) => /empty/i.test(e)));
  });
});
