/**
 * Stage command rendering — inspect (no PACI wrapper) vs apply (wrapper required).
 * Run: node --experimental-strip-types --test linkbots/lisa/ops/stage-ops-command.test.ts
 */
import assert from "node:assert/strict";
import { mkdtempSync, existsSync, readdirSync, mkdirSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";
import {
  FORBIDDEN_STAGE_ENGINE_PATH,
  STAGE_OPS_ENGINE_PATH,
  STAGE_OPS_ENV_FILE,
  STAGE_OPS_ENV_WRAPPER,
  STAGE_OPS_PACI_ASSERTIONS_MARKER,
  renderStageOpenClawCommand,
  renderStageOpenClawInspectCommand,
  validateStageCommandRendering,
  validateStageInspectCommandRendering,
} from "./stage-ops-command.ts";
import { planStageOpsInventory } from "./stage-ops-inventory.ts";

describe("renderStageOpenClawCommand", () => {
  it("uses wrapper + staging openclaw.mjs + env file (runtime/apply)", () => {
    const cmd = renderStageOpenClawCommand({
      openclawArgs: ["cron", "list", "--json"],
    });
    assert.ok(cmd.includes(STAGE_OPS_ENV_WRAPPER));
    assert.ok(cmd.includes(STAGE_OPS_ENV_FILE));
    assert.ok(cmd.includes(STAGE_OPS_ENGINE_PATH));
    assert.ok(cmd.includes("LiNKplatform-staging/openclaw_prime/openclaw.mjs"));
    assert.ok(cmd.includes("ai.openclaw.lisa-stage-env-wrapper.sh"));
    assert.ok(cmd.includes("ai.openclaw.lisa-stage.env"));
    assert.ok(cmd.includes("--profile"));
    assert.ok(cmd.includes("lisa-stage"));
    assert.ok(!cmd.includes(FORBIDDEN_STAGE_ENGINE_PATH));
    assert.deepEqual(validateStageCommandRendering(cmd), []);
  });

  it("throws / forbids Projects/openclaw_prime engine", () => {
    assert.throws(
      () =>
        renderStageOpenClawCommand({
          enginePath: FORBIDDEN_STAGE_ENGINE_PATH,
          openclawArgs: ["cron", "list"],
        }),
      /never Projects\/openclaw_prime/,
    );
    assert.throws(
      () =>
        renderStageOpenClawCommand({
          enginePath: "/Users/linktrend/Projects/openclaw_prime/openclaw.mjs",
          openclawArgs: ["status"],
        }),
      /never Projects\/openclaw_prime/,
    );
  });
});

describe("renderStageOpenClawInspectCommand", () => {
  it("uses staging engine + profile + state dir without PACI wrapper", () => {
    const cmd = renderStageOpenClawInspectCommand({
      openclawArgs: ["cron", "list", "--json"],
    });
    assert.ok(cmd.includes(STAGE_OPS_ENGINE_PATH));
    assert.ok(cmd.includes("OPENCLAW_STATE_DIR="));
    assert.ok(cmd.includes("--profile"));
    assert.ok(cmd.includes("lisa-stage"));
    assert.ok(!cmd.includes("ai.openclaw.lisa-stage-env-wrapper.sh"));
    assert.ok(!cmd.includes(STAGE_OPS_ENV_WRAPPER));
    assert.ok(!cmd.includes(STAGE_OPS_PACI_ASSERTIONS_MARKER));
    assert.ok(!cmd.includes("secrets/paci-assertions"));
    assert.ok(!/\bgcloud\b/.test(cmd));
    assert.ok(!cmd.includes(FORBIDDEN_STAGE_ENGINE_PATH));
    assert.deepEqual(validateStageInspectCommandRendering(cmd), []);
  });

  it("rejects inspect input that tries to pass the PACI-writing wrapper", () => {
    assert.throws(
      () =>
        renderStageOpenClawInspectCommand({
          envWrapper: STAGE_OPS_ENV_WRAPPER,
          openclawArgs: ["cron", "list"],
        }),
      /must not use ai\.openclaw\.lisa-stage-env-wrapper/,
    );
  });

  it("throws / forbids Projects/openclaw_prime engine", () => {
    assert.throws(
      () =>
        renderStageOpenClawInspectCommand({
          enginePath: FORBIDDEN_STAGE_ENGINE_PATH,
          openclawArgs: ["cron", "list"],
        }),
      /never Projects\/openclaw_prime/,
    );
  });
});

describe("validateStageCommandRendering", () => {
  it("errors for forbidden engine path", () => {
    const errors = validateStageCommandRendering(
      `node '${FORBIDDEN_STAGE_ENGINE_PATH}' --profile lisa-stage cron list`,
    );
    assert.ok(errors.some((e) => /must not reference Projects\/openclaw_prime/i.test(e)));
    assert.ok(errors.some((e) => /must use LiNKplatform-staging\/openclaw_prime/i.test(e)));
  });

  it("errors when staging wrapper / env file missing", () => {
    const errors = validateStageCommandRendering(
      `node '${STAGE_OPS_ENGINE_PATH}' --profile lisa-stage cron list`,
    );
    assert.ok(errors.some((e) => /lisa-stage-env-wrapper/i.test(e)));
    assert.ok(errors.some((e) => /lisa-stage\.env/i.test(e)));
  });
});

describe("validateStageInspectCommandRendering", () => {
  it("errors when PACI wrapper or paci-assertions appear", () => {
    const withWrapper = validateStageInspectCommandRendering(
      `OPENCLAW_STATE_DIR='/x' '${STAGE_OPS_ENV_WRAPPER}' '${STAGE_OPS_ENV_FILE}' node '${STAGE_OPS_ENGINE_PATH}' --profile lisa-stage cron list`,
    );
    assert.ok(
      withWrapper.some((e) => /must not use ai\.openclaw\.lisa-stage-env-wrapper/i.test(e)),
    );

    const withPaci = validateStageInspectCommandRendering(
      `OPENCLAW_STATE_DIR='/x/secrets/paci-assertions' node '${STAGE_OPS_ENGINE_PATH}' --profile lisa-stage cron list`,
    );
    assert.ok(withPaci.some((e) => /paci-assertions/i.test(e)));
  });
});

describe("planStageOpsInventory", () => {
  it("emits inspect commands without wrapper or paci-assertions paths", () => {
    const plan = planStageOpsInventory({ emitCommands: true });
    assert.equal(plan.mode, "read-only-inspect");
    assert.equal(plan.mutateStage, false);
    assert.equal(plan.paciWritingForbidden, true);
    assert.equal(plan.gcloudForbidden, true);
    assert.deepEqual(plan.validationErrors, []);
    assert.ok(plan.commands.length > 0);
    const executable = plan.commands.filter((c) => !c.trimStart().startsWith("#"));
    const joinedExec = executable.join("\n");
    assert.ok(!joinedExec.includes("ai.openclaw.lisa-stage-env-wrapper.sh"));
    assert.ok(!joinedExec.includes(STAGE_OPS_PACI_ASSERTIONS_MARKER));
    assert.ok(!joinedExec.includes("secrets/paci-assertions"));
    assert.ok(!/\bgcloud\b/.test(joinedExec));
    assert.ok(joinedExec.includes("LiNKplatform-staging/openclaw_prime/openclaw.mjs"));
    assert.ok(joinedExec.includes("cron") && joinedExec.includes("list"));
    assert.ok(plan.applyPathReminder.includes("lisa-stage-env-wrapper"));
  });

  it("runtime/apply command still uses wrapper (contrast)", () => {
    const apply = renderStageOpenClawCommand({
      openclawArgs: ["cron", "edit", "job-id", "--no-deliver"],
    });
    assert.ok(apply.includes("ai.openclaw.lisa-stage-env-wrapper.sh"));
    const inspect = renderStageOpenClawInspectCommand({
      openclawArgs: ["cron", "list", "--json"],
    });
    assert.ok(!inspect.includes("ai.openclaw.lisa-stage-env-wrapper.sh"));
  });

  it("hermetic: planning against a temp dir does not create PACI key files", () => {
    const root = mkdtempSync(path.join(tmpdir(), "stage-ops-inventory-"));
    const envFile = path.join(root, "service-env", "ai.openclaw.lisa-stage.env");
    mkdirSync(path.dirname(envFile), { recursive: true });
    writeFileSync(envFile, "# hermetic test env — no secrets\n", "utf8");

    const before = existsSync(path.join(root, "secrets", "paci-assertions"));
    assert.equal(before, false);

    const plan = planStageOpsInventory({
      stageRoot: root,
      envFile,
      enginePath: STAGE_OPS_ENGINE_PATH,
      emitCommands: true,
    });
    assert.deepEqual(plan.validationErrors, []);
    const executable = plan.commands.filter((c) => !c.trimStart().startsWith("#"));
    assert.ok(executable.every((c) => !c.includes("paci-assertions")));
    assert.ok(executable.every((c) => !c.includes("lisa-stage-env-wrapper")));

    assert.equal(existsSync(path.join(root, "secrets")), false);
    assert.equal(existsSync(path.join(root, "secrets", "paci-assertions")), false);

    // No accidental writes under the temp stage root beyond what we created.
    const top = readdirSync(root);
    assert.deepEqual(top.toSorted(), ["service-env"]);
  });
});
