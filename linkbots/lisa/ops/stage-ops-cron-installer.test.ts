/**
 * Typed lisa-stage cron installer payloads — gateway-valid create/edit shapes.
 * Run:
 *   node --import tsx --import ./linkbots/lisa/ops/register-strip-types-js-resolve.mjs \
 *     --test linkbots/lisa/ops/stage-ops-cron-installer.test.ts
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { validateCronAddParams, formatValidationErrors } from "@openclaw/gateway-protocol";
import {
  buildStageConstraintsReceipt,
  buildStageCronInstallPlan,
  validateStageCronCreatePayload,
  validateStageCronEditPayload,
} from "./stage-ops-cron-installer.ts";
import { buildStageOpsJobs } from "./stage-ops-payloads.ts";

const EXISTING_JOB_IDS: Record<string, string> = {
  "lisa-heartbeat-45": "1684ea5f-47ea-464a-8f58-b5990b1ac160",
  "lisa-morning-digest": "3f46ba9b-1ec4-44a3-b402-e7458a4c0e38",
  "lisa-ship-05": "a7046889-4190-4df7-8b37-2243347dcd1f",
  "lisa-pull-07": "ac062761-66a3-4f0a-8811-dec198ba12c7",
  "lisa-ship-16": "e1ff7019-e805-4770-9329-d6656f85d021",
  "lisa-pull-18": "f24bbd94-c9be-4dba-9602-cfa266fffb9c",
};

describe("StageCronJobCreatePayload", () => {
  it("create payloads are enabled=false, delivery none, no dependencies, gateway-valid", () => {
    const plan = buildStageCronInstallPlan({ action: "install" });
    assert.equal(plan.creates.length, 6);
    assert.equal(plan.edits.length, 0);
    assert.deepEqual(plan.validationErrors, []);
    assert.deepEqual(plan.stageConstraints, {
      openRouterOnly: true,
      liveLisaForbidden: true,
      deliveryAnnounceForbidden: true,
    });
    assert.deepEqual(buildStageConstraintsReceipt(plan.stageConstraints), {
      stageConstraints: plan.stageConstraints,
    });

    for (const create of plan.creates) {
      assert.equal(create.enabled, false);
      assert.equal(create.delivery.mode, "none");
      assert.equal(create.payload.kind, "agentTurn");
      assert.ok(Array.isArray(create.payload.toolsAllow));
      assert.ok(create.payload.toolsAllow.length > 0);
      assert.ok(
        Number.isInteger(create.payload.timeoutSeconds) && create.payload.timeoutSeconds > 0,
      );
      assert.equal(create.agentId, "lisa-cron");
      assert.equal(create.sessionTarget, "isolated");
      assert.equal(create.wakeMode, "now");
      assert.equal("dependencies" in create, false);
      assert.equal(
        validateCronAddParams(create),
        true,
        formatValidationErrors(validateCronAddParams.errors),
      );
      assert.deepEqual(validateStageCronCreatePayload(create), []);
    }

    const jobs = buildStageOpsJobs();
    for (const job of jobs) {
      const create = plan.creates.find((c) => c.name === job.id)!;
      assert.deepEqual(create.payload.toolsAllow, [...job.payload.toolsAllow]);
      assert.equal(create.payload.timeoutSeconds, job.payload.timeoutSeconds);
    }
  });
});

describe("StageCronJobEditPayload", () => {
  it("edit preserves UUID and rollback stays enabled false", () => {
    const uuid = EXISTING_JOB_IDS["lisa-heartbeat-45"]!;
    const plan = buildStageCronInstallPlan({
      action: "install",
      existingJobIds: { "lisa-heartbeat-45": uuid },
    });
    // One known UUID -> edit; remaining five -> create.
    assert.equal(plan.edits.length, 1);
    assert.equal(plan.creates.length, 5);
    const edit = plan.edits[0]!;
    assert.equal(edit.id, uuid);
    assert.equal(edit.preserveExistingUuid, true);
    assert.equal(edit.patch.enabled, false);
    assert.equal(edit.rollback.enabled, false);
    assert.equal(edit.rollback.deliveryMode, "none");
    assert.equal(edit.patch.delivery.mode, "none");
    assert.equal(edit.patch.payload.kind, "agentTurn");
    assert.ok(edit.patch.payload.toolsAllow.length > 0);
    assert.ok(edit.patch.payload.timeoutSeconds > 0);
    assert.equal("dependencies" in edit.patch, false);
    assert.deepEqual(validateStageCronEditPayload(edit), []);
  });
});

describe("buildStageCronInstallPlan update", () => {
  it("emits edits for all 6 known UUIDs with preserveExistingUuid (no disable race list)", () => {
    const plan = buildStageCronInstallPlan({
      action: "update",
      existingJobIds: EXISTING_JOB_IDS,
    });
    assert.equal(plan.action, "update");
    assert.equal(plan.creates.length, 0);
    assert.equal(plan.edits.length, 6);
    assert.equal(plan.disables.length, 0);
    assert.deepEqual(plan.validationErrors, []);
    for (const [jobId, uuid] of Object.entries(EXISTING_JOB_IDS)) {
      const edit = plan.edits.find((e) => e.patch.name === jobId)!;
      assert.equal(edit.id, uuid);
      assert.equal(edit.preserveExistingUuid, true);
      assert.equal(edit.patch.enabled, false);
      assert.equal(edit.rollback.enabled, false);
      assert.equal("dependencies" in edit.patch, false);
    }
  });

  it("records missing UUID errors without inventing creates on update", () => {
    const plan = buildStageCronInstallPlan({
      action: "update",
      existingJobIds: {
        "lisa-heartbeat-45": EXISTING_JOB_IDS["lisa-heartbeat-45"]!,
      },
    });
    assert.equal(plan.creates.length, 0);
    assert.equal(plan.edits.length, 1);
    assert.ok(
      plan.validationErrors.some((e) => /update missing UUID for lisa-morning-digest/.test(e)),
    );
  });
});

describe("buildStageCronInstallPlan disable", () => {
  it("uses disables[] only for disable action", () => {
    const plan = buildStageCronInstallPlan({
      action: "disable",
      existingJobIds: EXISTING_JOB_IDS,
    });
    assert.equal(plan.edits.length, 0);
    assert.equal(plan.creates.length, 0);
    assert.equal(plan.disables.length, 6);
    assert.ok(plan.disables.every((d) => d.enabled === false));
    assert.deepEqual(plan.validationErrors, []);
  });
});
