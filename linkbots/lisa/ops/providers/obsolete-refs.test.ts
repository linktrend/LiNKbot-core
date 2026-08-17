import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { LISA_JOB_CATALOGUE } from "../jobs/lisa-job-catalogue.js";
import { routeTask } from "../jobs/time-management/intake.js";
import { planProviderRouting } from "../jobs/time-management/planner.js";
import { LISA_ALLOWED_OPERATIONS } from "./capabilities.js";
import {
  LISA_OCP01_PIN_IDENTITIES,
  LISA_WAVE_A_HOLD_RELEASE_REF,
  toLisaCatalogueContractRef,
} from "./pin-identities.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "../../../..");

describe("P-08 Wave A obsolete reference replacement", () => {
  it("replaces librarian catalogue refs with development pin identities or explicit HOLD", () => {
    const pins = JSON.parse(
      readFileSync(path.join(repoRoot, "docs/link-integrations/ocp-01/provider-pins.json"), "utf8"),
    ) as {
      providers: Record<string, { repository: string; commit: string; contractVersions: string[] }>;
    };
    expect(LISA_OCP01_PIN_IDENTITIES.brain.repository).toBe(pins.providers.brain.repository);
    expect(LISA_OCP01_PIN_IDENTITIES.brain.commit).toBe(pins.providers.brain.commit);
    expect(LISA_OCP01_PIN_IDENTITIES.brain.contractRef).toBe(
      pins.providers.brain.contractVersions[0],
    );

    const librarian = LISA_JOB_CATALOGUE.entries.find((entry) => entry.id === "librarian-cycle");
    expect(librarian?.providerDependencies).toEqual([
      {
        providerId: LISA_OCP01_PIN_IDENTITIES.brain.repository,
        releaseRef: LISA_OCP01_PIN_IDENTITIES.brain.commit,
        contractRef: toLisaCatalogueContractRef(LISA_OCP01_PIN_IDENTITIES.brain.contractRef),
        credentialBindingId: "ocp-01-brain-binding-hold",
      },
    ]);
    const catalogueJson = JSON.stringify(LISA_JOB_CATALOGUE);
    expect(catalogueJson).not.toContain("linkbrain-librarian");
    expect(catalogueJson).not.toContain("source-contract-wp04");
    expect(
      LISA_JOB_CATALOGUE.entries.some((entry) =>
        entry.providerDependencies.some(
          (dependency) => dependency.releaseRef === LISA_WAVE_A_HOLD_RELEASE_REF,
        ),
      ),
    ).toBe(true);
  });

  it("keeps time-management from claiming a live LiNKbrain write", () => {
    expect(routeTask({ owner: "Lisa", status: "Ready" })).toMatchObject({
      destination: "hold",
      hold: true,
      liveBrainWriteClaimed: false,
    });
    expect(planProviderRouting({ id: "T-1", owner: "Lisa", status: "Ready" })).toMatchObject({
      taskLedger: "HOLD",
      liveBrainWriteClaimed: false,
      externalActionPerformed: false,
    });
    const procedure = readFileSync(path.join(here, "../jobs/time-management/procedure.md"), "utf8");
    expect(procedure).toMatch(/Wave A policy HOLD/u);
    expect(procedure).toMatch(/Do not claim a live LiNKbrain write/u);
  });

  it("does not treat leftover v1 names as Lisa-allowed operations", () => {
    const allowed = Object.values(LISA_ALLOWED_OPERATIONS).flat();
    expect(allowed).not.toContain("skills_run_start");
    expect(allowed).not.toContain("skills_tool_invoke");
    expect(allowed).not.toContain("brain_capture_batch");
    const policyTests = [
      readFileSync(path.join(here, "capabilities.test.ts"), "utf8"),
      readFileSync(path.join(here, "skills.test.ts"), "utf8"),
    ].join("\n");
    expect(policyTests).toMatch(/skills_run_start/u);
    expect(policyTests).toMatch(/brain_capture_batch/u);
    expect(policyTests).toMatch(/legacy_operation/u);
  });

  it("marks the July 2026 two-provider plan as historical, not current Lisa contract", () => {
    const historicalPlan = readFileSync(
      path.join(
        repoRoot,
        "docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md",
      ),
      "utf8",
    );
    expect(historicalPlan).toMatch(/Historical \(Wave A Item 3\)/u);
    expect(historicalPlan).toMatch(/not\*\* the current Lisa five-provider/u);
    expect(historicalPlan).toMatch(
      /Status:\*\* Historical \/ superseded as Lisa five-provider authority/u,
    );
    expect(historicalPlan).not.toMatch(/\*\*Status:\*\* Proposed execution baseline/u);
  });
});
