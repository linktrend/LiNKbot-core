import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { LISA_JOB_DESIRED_STATE } from "../jobs/lisa-job-desired-state.ts";

const here = path.dirname(fileURLToPath(import.meta.url));

describe("Lisa operations template registry", () => {
  it("keeps the profile manifest bound to the typed desired state", () => {
    const manifest = JSON.parse(
      readFileSync(path.join(here, "../lisa-profile-manifest.json"), "utf8"),
    ) as {
      jobDesiredState: { source: string; operationalDeclarationCount: number };
      declarations: string[];
    };
    expect(manifest.jobDesiredState.source).toBe(
      "linkbots/lisa/ops/jobs/lisa-job-desired-state.ts",
    );
    expect(manifest.jobDesiredState.operationalDeclarationCount).toBe(19);
    expect(manifest.declarations).toEqual(
      LISA_JOB_DESIRED_STATE.declarations.map((item) => item.declarationKey),
    );
  });

  it("does not treat this registry prose as a job declaration", () => {
    const readme = readFileSync(path.join(here, "README.md"), "utf8");
    expect(readme).toMatch(/typed\s+declaration/u);
    expect(readme).toMatch(/never creates a cron item/u);
  });
});
