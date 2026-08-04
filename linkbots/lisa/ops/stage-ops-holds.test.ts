/**
 * Stage ops HOLD-closure tests — payloads, coordinator, repair supervision, PDF canary.
 * Run:
 *   node --import ./linkbots/lisa/ops/register-gateway-protocol-ts-resolve.mjs \
 *     --experimental-strip-types --test linkbots/lisa/ops/stage-ops-*.test.ts
 */
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import {
  MAIN_APPROVE_RUNTIME_STORE,
  MAIN_APPROVE_UNHEALTHY_STORE,
} from "./main-approve-binding.ts";
import {
  materializeStageSeedJson,
  planStageOps,
  resolveStageCronJobIdsFromExplicitMap,
  resolveStageCronJobIdsFromReceipt,
} from "./stage-ops-coordinator.ts";
import {
  buildStageOpsJobs,
  buildStageRepairSupervisionJob,
  decideRepairSupervision,
  hashStageJob,
  validateStageOpsCatalog,
} from "./stage-ops-payloads.ts";
import { buildSyntheticStagePdfBytes, planStagePdfCanary } from "./stage-pdf-canary.ts";

const here = path.dirname(fileURLToPath(import.meta.url));

describe("Stage ops bounded payloads (not STAGE_CANARY stubs)", () => {
  it("builds exactly six disabled delivery=none procedure jobs with stable hashes", () => {
    const jobs = buildStageOpsJobs();
    const repair = buildStageRepairSupervisionJob();
    const errors = validateStageOpsCatalog({ jobs, repair });
    assert.deepEqual(errors, []);
    assert.equal(jobs.length, 6);
    assert.ok(jobs.every((j) => j.enabled === false));
    assert.ok(jobs.every((j) => j.delivery.mode === "none"));
    assert.ok(jobs.every((j) => j.payload.message.includes("STAGE BOUNDED PROCEDURE")));
    assert.ok(jobs.every((j) => !/^STAGE CANARY ONLY\b/m.test(j.payload.message)));
    for (const id of ["lisa-ship-05", "lisa-pull-07", "lisa-ship-16", "lisa-pull-18"]) {
      const job = jobs.find((j) => j.id === id)!;
      assert.ok(job.payload.toolsAllow.includes("sessions_wait"));
      assert.ok(!job.payload.toolsAllow.includes("sessions_yield"));
    }
    const hb = jobs.find((j) => j.id === "lisa-heartbeat-45")!;
    assert.equal(hb.schedule.expr, "45 0,2,4,6,10,12,14,16,18,20,22 * * *");
    assert.equal(hb.payload.messageFile, "HEARTBEAT.md");
    assert.match(hb.payload.message, /STAGE_SKIPPED_google/);
    assert.match(hb.payload.message, /STAGE_SKIPPED_task/);
    assert.match(hb.payload.message, /Never invent Clear/);
    const digest = jobs.find((j) => j.id === "lisa-morning-digest")!;
    assert.equal(digest.payload.messageFile, "agents/morning-digest.md");
    assert.match(digest.payload.message, /STAGE_SKIPPED_google/);
    assert.match(digest.payload.message, /STAGE_SKIPPED_task/);
    assert.match(hashStageJob(hb), /^[a-f0-9]{64}$/);
  });

  it("keeps materialized seed JSON aligned with builders", () => {
    const seed = materializeStageSeedJson(false) as {
      version: number;
      jobs: Array<{
        id: string;
        enabled: boolean;
        delivery: { mode: string };
        payloadHash: string;
      }>;
      payloadHashes: Record<string, string>;
      notInstalledByDefault: Array<{ id: string }>;
    };
    assert.equal(seed.version, 2);
    assert.equal(seed.jobs.length, 6);
    assert.ok(seed.jobs.every((j) => j.enabled === false && j.delivery.mode === "none"));
    assert.equal(seed.notInstalledByDefault[0]?.id, "lisa-repair-dispatcher");
    for (const job of seed.jobs) {
      assert.equal(seed.payloadHashes[job.id], job.payloadHash);
    }
    const onDisk = JSON.parse(readFileSync(path.join(here, "jobs.stage-seed.json"), "utf8")) as {
      version: number;
      jobs: Array<{ id: string; payloadHash: string }>;
      payloadHashes: Record<string, string>;
    };
    assert.equal(onDisk.version, 2);
    assert.equal(onDisk.jobs.length, 6);
    for (const job of onDisk.jobs) {
      assert.equal(onDisk.payloadHashes[job.id], job.payloadHash);
      assert.equal(seed.payloadHashes[job.id], job.payloadHash);
    }
  });
});

describe("Stage Repair/GitOps supervision package", () => {
  it("packages repair job with blocked_no_store fail-closed when stores absent", () => {
    const decision = decideRepairSupervision();
    assert.equal(decision.decision, "blocked_no_store");
    assert.equal(decision.reason, "blocked_no_store");
    assert.equal(decision.mayDispatchAcp, false);
    if (decision.decision === "blocked_no_store") {
      assert.ok(decision.missing.includes("repair_attempt_store"));
      assert.ok(decision.missing.includes("main_approve_store"));
    }
    assert.equal(MAIN_APPROVE_UNHEALTHY_STORE.available, false);
    assert.equal(MAIN_APPROVE_RUNTIME_STORE.available, false);
    const repair = buildStageRepairSupervisionJob();
    assert.equal(repair.enabled, false);
    assert.equal(repair.delivery.mode, "none");
    assert.match(repair.payload.message, /blocked_no_store/);
    assert.ok(!repair.payload.toolsAllow.includes("sessions_yield"));
  });

  it("allows readonly supervise only when both durable stores are present", () => {
    const decision = decideRepairSupervision({
      repairAttemptStoreAvailable: true,
      mainApproveStoreAvailable: true,
    });
    assert.equal(decision.decision, "supervise_readonly");
    assert.equal(decision.mayDispatchAcp, false);
  });
});

describe("Stage ops coordinator install/update/disable/rollback", () => {
  const existingJobIds = {
    "lisa-heartbeat-45": "1684ea5f-47ea-464a-8f58-b5990b1ac160",
    "lisa-morning-digest": "3f46ba9b-1ec4-44a3-b402-e7458a4c0e38",
    "lisa-ship-05": "a7046889-4190-4df7-8b37-2243347dcd1f",
    "lisa-pull-07": "ac062761-66a3-4f0a-8811-dec198ba12c7",
    "lisa-ship-16": "e1ff7019-e805-4770-9329-d6656f85d021",
    "lisa-pull-18": "f24bbd94-c9be-4dba-9602-cfa266fffb9c",
  };

  function openclawCmds(commands: string[]): string[] {
    return commands.filter(
      (c) => !c.startsWith("#") && !c.startsWith("export ") && c.includes("openclaw.mjs"),
    );
  }

  it("plans idempotent actions without mutating stage or enabling schedules", () => {
    for (const action of ["install", "update", "disable", "rollback"] as const) {
      const plan = planStageOps({ action, emitCommands: true, existingJobIds });
      assert.equal(plan.mutateStage, false);
      assert.equal(plan.enableSchedules, false);
      assert.equal(plan.deliveryMode, "none");
      assert.equal(plan.openRouterOnly, true);
      assert.equal(plan.liveMutationAllowed, false);
      assert.equal(plan.paidSpendEnablementAllowed, false);
      assert.equal(plan.jobCount, 6);
      assert.deepEqual(
        plan.validationErrors.filter((e) => !/repair install blocked/i.test(e)),
        [],
      );
      if (action === "disable") {
        assert.ok(plan.commands.some((c) => c.includes("'cron'") && c.includes("'disable'")));
      } else {
        assert.ok(plan.commands.some((c) => c.includes("--no-deliver")));
      }
      assert.ok(plan.jobs.every((j) => j.replacesStageCanaryStub && j.enabled === false));
      assert.ok(
        plan.commands.some((c) => c.includes("LiNKplatform-staging/openclaw_prime/openclaw.mjs")),
      );
      assert.ok(plan.commands.some((c) => c.includes("ai.openclaw.lisa-stage-env-wrapper.sh")));
      assert.ok(
        !plan.commands.some((c) =>
          c.includes("/Users/linktrend/Projects/openclaw_prime/openclaw.mjs"),
        ),
      );
      assert.ok(plan.typedCronPlan.edits.every((e) => e.preserveExistingUuid === true));
      assert.ok(plan.typedCronPlan.edits.every((e) => e.patch.enabled === false));
      assert.ok(plan.typedCronPlan.edits.every((e) => e.patch.delivery.mode === "none"));
      assert.ok(plan.typedCronPlan.creates.every((c) => !("dependencies" in c)));
      assert.deepEqual(plan.typedCronPlan.stageConstraints, {
        openRouterOnly: true,
        liveLisaForbidden: true,
        deliveryAnnounceForbidden: true,
      });
    }
  });

  it("update with 6/6 UUIDs edits in-place with --disable + --no-deliver and no follow-up disable", () => {
    const plan = planStageOps({ action: "update", emitCommands: true, existingJobIds });
    assert.equal(plan.typedCronPlan.edits.length, 6);
    assert.equal(plan.typedCronPlan.creates.length, 0);
    assert.equal(plan.typedCronPlan.disables.length, 0);
    const cmds = openclawCmds(plan.commands);
    const edits = cmds.filter((c) => c.includes("'cron'") && c.includes("'edit'"));
    assert.equal(edits.length, 6);
    for (const [jobId, uuid] of Object.entries(existingJobIds)) {
      const edit = edits.find((c) => c.includes(`'${uuid}'`))!;
      assert.ok(edit, `missing edit for ${jobId}`);
      assert.ok(edit.includes("'--disable'"), `edit ${jobId} missing --disable`);
      assert.ok(edit.includes("'--no-deliver'"), `edit ${jobId} missing --no-deliver`);
      assert.equal(edit.includes("'--disabled'"), false);
    }
    assert.equal(
      cmds.filter((c) => c.includes("'cron'") && c.includes("'disable'")).length,
      0,
      "update must not emit separate cron disable after edit",
    );
  });

  it("install creates use atomic --disabled + --no-deliver with no enable race", () => {
    const plan = planStageOps({ action: "install", emitCommands: true });
    assert.equal(plan.typedCronPlan.creates.length, 6);
    const cmds = openclawCmds(plan.commands);
    const adds = cmds.filter((c) => c.includes("'cron'") && c.includes("'add'"));
    assert.equal(adds.length, 6);
    for (const add of adds) {
      assert.ok(add.includes("'--disabled'"), "create must include --disabled");
      assert.ok(add.includes("'--no-deliver'"), "create must include --no-deliver");
    }
    assert.equal(
      cmds.filter((c) => c.includes("'cron'") && c.includes("'disable'")).length,
      0,
      "install must not race a post-create cron disable",
    );
    assert.ok(!plan.commands.some((c) => /Then immediately: cron disable/.test(c)));
  });

  it("disable-only emits cron disable <uuid> consistently", () => {
    const plan = planStageOps({ action: "disable", emitCommands: true, existingJobIds });
    const cmds = openclawCmds(plan.commands);
    const disables = cmds.filter((c) => c.includes("'cron'") && c.includes("'disable'"));
    assert.equal(disables.length, 6);
    for (const uuid of Object.values(existingJobIds)) {
      assert.ok(disables.some((c) => c.includes(`'${uuid}'`)));
    }
    assert.equal(cmds.filter((c) => c.includes("'edit'")).length, 0);
  });

  it("includes repair only when requested AND store health passes; default stays blocked_no_store", () => {
    // Isolate from any real LiNKplatform-staging state DB so this assertion is hermetic.
    const missingDb = path.join(
      mkdtempSync(path.join(tmpdir(), "stage-ops-no-store-")),
      "missing-openclaw.sqlite",
    );
    const without = planStageOps({
      action: "install",
      durableStoreDatabasePath: missingDb,
    });
    assert.equal(without.includeRepair, false);
    assert.equal(without.repairSupervision.installedInPlan, false);
    assert.equal(without.repairSupervision.decision.decision, "blocked_no_store");
    assert.equal(without.repairSupervision.installAllowed, false);
    // Without a healthy durable DB path, --include-repair must not install.
    const blocked = planStageOps({
      action: "install",
      includeRepair: true,
      durableStoreDatabasePath: missingDb,
    });
    assert.equal(blocked.includeRepair, false);
    assert.equal(blocked.jobCount, 6);
    assert.ok(blocked.validationErrors.some((e) => /repair install blocked/i.test(e)));
  });
});

describe("Stage ops coordinator cron ID sources", () => {
  const names = [
    "lisa-heartbeat-45",
    "lisa-morning-digest",
    "lisa-ship-05",
    "lisa-pull-07",
    "lisa-ship-16",
    "lisa-pull-18",
  ];
  const ids = [
    "11111111-1111-4111-8111-111111111111",
    "22222222-2222-4222-8222-222222222222",
    "33333333-3333-4333-8333-333333333333",
    "44444444-4444-4444-8444-444444444444",
    "55555555-5555-4555-8555-555555555555",
    "66666666-6666-4666-8666-666666666666",
  ];
  const map = Object.fromEntries(names.map((name, index) => [name, ids[index]!])) as Record<
    string,
    string
  >;

  it("resolves a current read-only cron list receipt and ignores unrelated jobs", () => {
    const resolution = resolveStageCronJobIdsFromReceipt({
      jobs: [
        ...names.map((name, index) => ({ id: ids[index], name })),
        { id: "77777777-7777-4777-8777-777777777777", name: "unrelated-job" },
      ],
    });
    assert.deepEqual(resolution.validationErrors, []);
    assert.deepEqual(resolution.existingJobIds, map);
  });

  it("rejects missing, duplicate, or malformed managed receipt jobs", () => {
    const missing = resolveStageCronJobIdsFromReceipt({
      jobs: names.slice(0, -1).map((name, index) => ({ id: ids[index], name })),
    });
    assert.ok(
      missing.validationErrors.some((error) =>
        /missing stage cron mapping for lisa-pull-18/.test(error),
      ),
    );

    const duplicateName = resolveStageCronJobIdsFromReceipt({
      jobs: [
        ...names.map((name, index) => ({ id: ids[index], name })),
        { id: "77777777-7777-4777-8777-777777777777", name: "lisa-heartbeat-45" },
      ],
    });
    assert.ok(
      duplicateName.validationErrors.some((error) =>
        /duplicate stage cron receipt name/.test(error),
      ),
    );

    const duplicateId = resolveStageCronJobIdsFromReceipt({
      jobs: names.map((name, index) => ({ id: index === 1 ? ids[0] : ids[index], name })),
    });
    assert.ok(
      duplicateId.validationErrors.some((error) => /duplicate stage cron UUID/.test(error)),
    );
  });

  it("accepts only an exact explicit map and rejects unexpected or missing mappings", () => {
    const valid = resolveStageCronJobIdsFromExplicitMap({ existingJobIds: map });
    assert.deepEqual(valid.validationErrors, []);
    assert.deepEqual(valid.existingJobIds, map);

    const unexpected = resolveStageCronJobIdsFromExplicitMap({
      existingJobIds: { ...map, "lisa-unexpected": "77777777-7777-4777-8777-777777777777" },
    });
    assert.ok(
      unexpected.validationErrors.some((error) => /unexpected stage cron mapping/.test(error)),
    );

    const missing = resolveStageCronJobIdsFromExplicitMap({
      existingJobIds: Object.fromEntries(Object.entries(map).slice(0, -1)),
    });
    assert.ok(
      missing.validationErrors.some((error) =>
        /missing stage cron mapping for lisa-pull-18/.test(error),
      ),
    );
  });
});

describe("Stage MiniMax PDF canary command", () => {
  it("packages synthetic PDF + receipt with delivery=none and no spend", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-canary-"));
    try {
      const bytes = buildSyntheticStagePdfBytes();
      assert.ok(bytes.toString("utf8").startsWith("%PDF"));
      const receipt = planStagePdfCanary({
        mode: "dry-run",
        outputDir: dir,
        executeGateEnv: {},
        nowIso: "2026-08-03T10:00:00.000Z",
      });
      assert.equal(receipt.receiptType, "lisa_stage_minimax_pdf_canary_v1");
      assert.equal(receipt.status, "dry_run_ready");
      assert.equal(receipt.delivery.mode, "none");
      assert.equal(receipt.delivery.externalDelivery, false);
      assert.equal(receipt.spend, false);
      assert.equal(receipt.firstProductionProofEarned, false);
      assert.equal(receipt.credentialPosture.secretPrinted, false);
      assert.equal(receipt.modelRef, "openrouter/minimax/minimax-m3");
      assert.equal(receipt.rollback.alternatePaidDocumentRoutingAllowed, false);
      const written = JSON.parse(readFileSync(path.join(dir, "pdf-canary-receipt.json"), "utf8"));
      assert.equal(written.status, "dry_run_ready");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("blocks execute without STAGE_PDF_CANARY_EXECUTE gate", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-canary-exec-"));
    try {
      const receipt = planStagePdfCanary({
        mode: "execute",
        outputDir: dir,
        executeGateEnv: { OPENROUTER_API_KEY: "redacted-test-value-not-printed" },
      });
      assert.equal(receipt.status, "blocked_no_execute_gate");
      assert.equal(receipt.spend, false);
      assert.equal(receipt.hardStops.liveLisaTouched, false);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("rollback-plan receipt uses tools_deny_pdf and neverWriteEmptyPrimary", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-canary-rollback-"));
    try {
      const receipt = planStagePdfCanary({
        mode: "rollback-plan",
        outputDir: dir,
        executeGateEnv: {},
        nowIso: "2026-08-03T12:30:00.000Z",
      });
      assert.equal(receipt.status, "rollback_planned");
      assert.equal(receipt.rollback.strategy, "tools_deny_pdf");
      assert.equal(receipt.rollback.neverWriteEmptyPrimary, true);
      assert.equal(receipt.rollback.removePdfModelKey, true);
      assert.deepEqual(receipt.rollback.toolsDenyAdd, ["pdf"]);
      assert.equal(receipt.rollback.runtimeConfigNotes.removedKey, "agents.defaults.pdfModel");
      const raw = JSON.stringify(receipt.rollback);
      assert.equal(raw.includes('"primary":""'), false);
      assert.equal(raw.includes('primary:""'), false);
      const written = JSON.parse(
        readFileSync(path.join(dir, "pdf-canary-receipt.json"), "utf8"),
      ) as typeof receipt;
      assert.equal(written.rollback.strategy, "tools_deny_pdf");
      assert.equal(written.rollback.neverWriteEmptyPrimary, true);
      assert.equal(JSON.stringify(written.rollback).includes('"primary":""'), false);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
