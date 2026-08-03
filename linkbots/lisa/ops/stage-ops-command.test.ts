/**
 * Stage command rendering — LiNKplatform-staging engine + lisa-stage env wrapper.
 * Run: node --experimental-strip-types --test linkbots/lisa/ops/stage-ops-command.test.ts
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  FORBIDDEN_STAGE_ENGINE_PATH,
  STAGE_OPS_ENGINE_PATH,
  STAGE_OPS_ENV_FILE,
  STAGE_OPS_ENV_WRAPPER,
  renderStageOpenClawCommand,
  validateStageCommandRendering,
} from "./stage-ops-command.ts";

describe("renderStageOpenClawCommand", () => {
  it("uses wrapper + staging openclaw.mjs + env file", () => {
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
