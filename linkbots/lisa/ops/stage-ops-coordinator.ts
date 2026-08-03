/**
 * Idempotent lisa-stage cron install/update/disable/rollback planner.
 *
 * Defaults to plan-only (no stage mutation). Apply emits exact coordinator
 * commands via lisa-stage env wrapper + LiNKplatform-staging openclaw.mjs,
 * and typed gateway-valid create/edit payloads. Never enables schedules.
 */

import { writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { LISA_OPENROUTER_ONLY_STAGE_ROUTING } from "./model-routing.openrouter-stage.ts";
import { ensureStageDurableStores, probeStageDurableStores } from "./stage-durable-store.ts";
import {
  FORBIDDEN_STAGE_ENGINE_PATH,
  STAGE_OPS_ENGINE_PATH,
  STAGE_OPS_ENV_FILE,
  STAGE_OPS_ENV_WRAPPER,
  STAGE_OPS_PROFILE,
  STAGE_OPS_STAGE_ROOT,
  renderStageOpenClawCommand,
  validateStageCommandRendering,
} from "./stage-ops-command.ts";
import {
  buildStageCronInstallPlan,
  type StageCronInstallPlan,
} from "./stage-ops-cron-installer.ts";
import {
  buildStageOpsJobs,
  buildStageRepairSupervisionJob,
  decideRepairSupervision,
  hashStageJob,
  STAGE_HARD_STOPS,
  STAGE_OPS_DELIVERY_MODE,
  validateStageOpsCatalog,
  type StageSeedJob,
} from "./stage-ops-payloads.ts";

export type StageOpsAction = "install" | "update" | "disable" | "rollback";

export type StageOpsCoordinatorPlan = {
  action: StageOpsAction;
  mode: "plan" | "apply-commands";
  mutateStage: false;
  enableSchedules: false;
  deliveryMode: typeof STAGE_OPS_DELIVERY_MODE;
  openRouterOnly: true;
  liveMutationAllowed: false;
  paidSpendEnablementAllowed: false;
  hardStops: readonly string[];
  jobCount: number;
  includeRepair: boolean;
  jobs: Array<{
    id: string;
    name: string;
    enabled: false;
    scheduleExpr: string;
    deliveryMode: typeof STAGE_OPS_DELIVERY_MODE;
    messageFile: string;
    toolsAllow: readonly string[];
    payloadHash: string;
    replacesStageCanaryStub: true;
  }>;
  payloadHashes: Record<string, string>;
  repairSupervision: {
    packaged: true;
    installedInPlan: boolean;
    decision: ReturnType<typeof decideRepairSupervision>;
    payloadHash: string;
    installAllowed: boolean;
  };
  routingGuard: {
    provider: "openrouter";
    primary: string;
    pdfModel: string;
    liveMutationAllowed: false;
    paidSpendEnablementAllowed: false;
  };
  typedCronPlan: StageCronInstallPlan;
  commands: string[];
  validationErrors: string[];
};

export type StageOpsPlanInput = {
  action: StageOpsAction;
  includeRepair?: boolean;
  stageRoot?: string;
  enginePath?: string;
  profile?: string;
  /** Known stage job UUID map (name → job_id). Required for update/disable/rollback. */
  existingJobIds?: Record<string, string>;
  emitCommands?: boolean;
  /** Optional durable-store DB path for repair install gate (tests). */
  durableStoreDatabasePath?: string;
  /**
   * When true, lazily ensure lisa_stage_* on the resolved durable DB before probe.
   * Tests pass an explicit temp durableStoreDatabasePath. Never imply live Lisa.
   */
  ensureDurableStore?: boolean;
};

function selectJobs(includeRepair: boolean): StageSeedJob[] {
  const jobs = buildStageOpsJobs();
  if (!includeRepair) return jobs;
  return [...jobs, buildStageRepairSupervisionJob()];
}

export function planStageOps(input: StageOpsPlanInput): StageOpsCoordinatorPlan {
  const includeRepairRequested = input.includeRepair === true;
  const storeParams = input.durableStoreDatabasePath
    ? { databasePath: input.durableStoreDatabasePath }
    : { stateDir: input.stageRoot ?? STAGE_OPS_STAGE_ROOT };
  if (input.ensureDurableStore === true) {
    // Apply-path ensure only when explicitly requested (temp DB in tests / Principal stage gate).
    ensureStageDurableStores(storeParams);
  }
  const durableProbe = probeStageDurableStores(storeParams);
  const repairDecision = decideRepairSupervision({
    repairAttemptStoreAvailable: durableProbe.repairAttemptStoreAvailable,
    mainApproveStoreAvailable: durableProbe.mainApproveStoreAvailable,
    repairAttemptStorePrerequisite: durableProbe.repairAttemptStorePrerequisite,
    mainApproveStorePrerequisite: durableProbe.mainApproveStorePrerequisite,
  });
  // Fail-closed: only install repair when store health passes.
  const installAllowed = repairDecision.decision === "supervise_readonly";
  const includeRepair = includeRepairRequested && installAllowed;
  const jobs = selectJobs(includeRepair);
  const repair = buildStageRepairSupervisionJob();
  const validationErrors = validateStageOpsCatalog({
    jobs: buildStageOpsJobs(),
    repair,
  });

  if (includeRepairRequested && !installAllowed) {
    validationErrors.push(
      "repair install blocked: durable OpenClaw SQLite store health must pass (blocked_no_store)",
    );
  }

  if (LISA_OPENROUTER_ONLY_STAGE_ROUTING.liveMutationAllowed !== false) {
    validationErrors.push("OpenRouter stage overlay must keep liveMutationAllowed=false");
  }
  if (LISA_OPENROUTER_ONLY_STAGE_ROUTING.paidSpendEnablementAllowed !== false) {
    validationErrors.push("OpenRouter stage overlay must keep paidSpendEnablementAllowed=false");
  }

  const payloadHashes: Record<string, string> = {};
  for (const job of jobs) payloadHashes[job.id] = hashStageJob(job);
  payloadHashes[repair.id] = hashStageJob(repair);

  const stageRoot = input.stageRoot ?? STAGE_OPS_STAGE_ROOT;
  const enginePath = input.enginePath ?? STAGE_OPS_ENGINE_PATH;
  const profile = input.profile ?? STAGE_OPS_PROFILE;
  if (enginePath === FORBIDDEN_STAGE_ENGINE_PATH) {
    validationErrors.push("enginePath must not be Projects/openclaw_prime");
  }
  const ids = input.existingJobIds ?? {};
  const emit = input.emitCommands === true;
  const commands: string[] = [];

  const typedCronPlan = buildStageCronInstallPlan({
    action: input.action,
    includeRepair,
    existingJobIds: ids,
  });
  validationErrors.push(...typedCronPlan.validationErrors);

  if (emit) {
    commands.push(
      `# Stage ops ${input.action} — delivery=none, enabled=false, OpenRouter-only hard stops`,
    );
    commands.push(
      `# mutateStage=false unless Principal separately authorizes applying these commands`,
    );
    commands.push(`# engine=${STAGE_OPS_ENGINE_PATH}`);
    commands.push(`# wrapper=${STAGE_OPS_ENV_WRAPPER}`);
    commands.push(`export PATH="/opt/homebrew/opt/node@24/bin:$PATH"`);

    const oc = (args: string[]) =>
      renderStageOpenClawCommand({
        stageRoot,
        enginePath,
        envWrapper: STAGE_OPS_ENV_WRAPPER,
        envFile: STAGE_OPS_ENV_FILE,
        profile,
        openclawArgs: args,
      });

    if (input.action === "disable") {
      // disable-only: consistent `cron disable <uuid>` (not edit --disable).
      for (const job of jobs) {
        const jobId = ids[job.id];
        if (!jobId) {
          commands.push(`# MISSING job id for ${job.id} — run cron list --json first`);
          continue;
        }
        commands.push(oc(["cron", "disable", jobId]));
      }
      commands.push(oc(["cron", "list", "--json"]));
    }

    if (input.action === "rollback") {
      commands.push(
        `# Rollback payloads to disabled delivery=none bounded procedures (not STAGE_CANARY stubs)`,
      );
      for (const edit of typedCronPlan.edits) {
        // Single mutation: --disable + --no-deliver on the same cron edit.
        commands.push(
          oc([
            "cron",
            "edit",
            edit.id,
            "--name",
            edit.patch.name,
            "--cron",
            edit.patch.schedule.expr,
            "--tz",
            edit.patch.schedule.tz,
            "--disable",
            "--no-deliver",
            "--tools",
            edit.patch.payload.toolsAllow.join(","),
            "--message",
            edit.patch.payload.message,
            "--timeout-seconds",
            String(edit.patch.payload.timeoutSeconds),
          ]),
        );
      }
      for (const job of jobs) {
        if (!ids[job.id]) {
          commands.push(`# MISSING job id for ${job.id} — run cron list --json first`);
        }
      }
      commands.push(oc(["cron", "list", "--json"]));
    }

    if (input.action === "install" || input.action === "update") {
      for (const edit of typedCronPlan.edits) {
        // Single mutation: --disable + --no-deliver on the same cron edit (no follow-up disable).
        commands.push(
          oc([
            "cron",
            "edit",
            edit.id,
            "--name",
            edit.patch.name,
            "--cron",
            edit.patch.schedule.expr,
            "--tz",
            edit.patch.schedule.tz,
            "--disable",
            "--no-deliver",
            "--tools",
            edit.patch.payload.toolsAllow.join(","),
            "--message",
            edit.patch.payload.message,
            "--timeout-seconds",
            String(edit.patch.payload.timeoutSeconds),
          ]),
        );
      }
      for (const create of typedCronPlan.creates) {
        // Atomic create: --disabled + --no-deliver (no post-create disable race).
        commands.push(
          oc([
            "cron",
            "add",
            create.schedule.expr,
            "--tz",
            create.schedule.tz,
            "--name",
            create.name,
            "--agent",
            create.agentId,
            "--session",
            "isolated",
            "--disabled",
            "--no-deliver",
            "--tools",
            create.payload.toolsAllow.join(","),
            "--timeout-seconds",
            String(create.payload.timeoutSeconds),
            "--message",
            create.payload.message,
          ]),
        );
      }
      if (input.action === "update") {
        for (const job of jobs) {
          if (!ids[job.id] && !typedCronPlan.creates.some((c) => c.name === job.id)) {
            commands.push(`# UPDATE skipped for ${job.id}: no existing job id provided`);
          }
        }
      }
      commands.push(oc(["cron", "list", "--json"]));
    }

    for (const cmd of commands) {
      if (cmd.startsWith("#") || cmd.startsWith("export ")) continue;
      if (!cmd.includes("openclaw.mjs") && !cmd.includes("lisa-stage-env-wrapper")) continue;
      validationErrors.push(...validateStageCommandRendering(cmd));
    }
  }

  return {
    action: input.action,
    mode: emit ? "apply-commands" : "plan",
    mutateStage: false,
    enableSchedules: false,
    deliveryMode: STAGE_OPS_DELIVERY_MODE,
    openRouterOnly: true,
    liveMutationAllowed: false,
    paidSpendEnablementAllowed: false,
    hardStops: [...STAGE_HARD_STOPS],
    jobCount: jobs.length,
    includeRepair,
    jobs: jobs.map((job) => ({
      id: job.id,
      name: job.name,
      enabled: false as const,
      scheduleExpr: job.schedule.expr,
      deliveryMode: STAGE_OPS_DELIVERY_MODE,
      messageFile: job.payload.messageFile,
      toolsAllow: job.payload.toolsAllow,
      payloadHash: hashStageJob(job),
      replacesStageCanaryStub: true as const,
    })),
    payloadHashes,
    repairSupervision: {
      packaged: true,
      installedInPlan: includeRepair,
      decision: repairDecision,
      payloadHash: hashStageJob(repair),
      installAllowed,
    },
    routingGuard: {
      provider: "openrouter",
      primary: LISA_OPENROUTER_ONLY_STAGE_ROUTING.agents.defaults.model.primary,
      pdfModel: LISA_OPENROUTER_ONLY_STAGE_ROUTING.agents.defaults.pdfModel.primary,
      liveMutationAllowed: false,
      paidSpendEnablementAllowed: false,
    },
    typedCronPlan,
    commands,
    validationErrors,
  };
}

/** Sync JSON seed document for humans / staging copy (never auto-written to stage). */
export function materializeStageSeedJson(includeRepair = false): unknown {
  const plan = planStageOps({ action: "install", includeRepair });
  const jobs = selectJobs(plan.includeRepair);
  return {
    version: 2,
    note: "Generated from stage-ops-payloads / stage-ops-coordinator. delivery=none; enabled=false; real bounded procedures (not STAGE_CANARY stubs). Repair packaged separately unless includeRepair and store health passes.",
    hardStops: plan.hardStops,
    deliveryDefault: "none",
    payloadHashes: plan.payloadHashes,
    jobs: jobs.map((job) => ({
      id: job.id,
      name: job.name,
      enabled: false,
      agentId: job.agentId,
      sessionTarget: job.sessionTarget,
      schedule: job.schedule,
      delivery: job.delivery,
      payload: {
        kind: job.payload.kind,
        toolsAllow: [...job.payload.toolsAllow],
        messageFile: job.payload.messageFile,
        message: job.payload.message,
        timeoutSeconds: job.payload.timeoutSeconds,
      },
      payloadHash: hashStageJob(job),
      hardStops: [...job.hardStops],
    })),
    repairSupervision: {
      job: (() => {
        const repair = buildStageRepairSupervisionJob();
        return {
          id: repair.id,
          name: repair.name,
          enabled: false,
          agentId: repair.agentId,
          sessionTarget: repair.sessionTarget,
          schedule: repair.schedule,
          delivery: repair.delivery,
          payload: {
            kind: repair.payload.kind,
            toolsAllow: [...repair.payload.toolsAllow],
            messageFile: repair.payload.messageFile,
            message: repair.payload.message,
            timeoutSeconds: repair.payload.timeoutSeconds,
          },
          payloadHash: hashStageJob(repair),
          hardStops: [...repair.hardStops],
          defaultDecision: plan.repairSupervision.decision,
          installAllowed: plan.repairSupervision.installAllowed,
        };
      })(),
      installFlag: "--include-repair",
    },
    notInstalledByDefault: plan.includeRepair
      ? []
      : [
          {
            id: "lisa-repair-dispatcher",
            reason:
              "Install only via coordinator --include-repair after durable OpenClaw SQLite store health passes; fail-closed blocked_no_store otherwise.",
          },
        ],
  };
}

function printHelp(): void {
  console.log(`Usage:
  node --import ./linkbots/lisa/ops/register-gateway-protocol-ts-resolve.mjs --experimental-strip-types linkbots/lisa/ops/stage-ops-coordinator.ts <install|update|disable|rollback> [options]

Options:
  --include-repair     Include Repair/GitOps supervision job when store health passes
  --ensure-store       Lazily ensure lisa_stage_* on durableStoreDatabasePath/stage state (Principal gate)
  --emit-commands      Print exact coordinator shell commands (still mutateStage=false)
  --json               Print machine-readable plan JSON
  --write-seed <path>  Write materialized jobs.stage-seed.json (repo path only)

Hard stops: never enables schedules; delivery=none; creates use --disabled + --no-deliver;
edits use --disable + --no-deliver (single mutation); OpenRouter-only; stage commands use
LiNKplatform-staging/openclaw_prime via lisa-stage-env-wrapper; no stage mutation from this process.
`);
}

function main(argv: string[]): number {
  const args = argv.slice(2);
  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    printHelp();
    return 0;
  }
  const action = args[0] as StageOpsAction;
  if (!["install", "update", "disable", "rollback"].includes(action)) {
    console.error(`Unknown action: ${action}`);
    printHelp();
    return 2;
  }
  const includeRepair = args.includes("--include-repair");
  const emitCommands = args.includes("--emit-commands");
  const ensureDurableStore = args.includes("--ensure-store");
  const asJson = args.includes("--json");
  const writeSeedIdx = args.indexOf("--write-seed");
  const writeSeedPath = writeSeedIdx >= 0 ? args[writeSeedIdx + 1] : undefined;

  // Known stage UUIDs from 2026-08-03 read-only audit (re-verify before apply).
  const existingJobIds = {
    "lisa-heartbeat-45": "1684ea5f-47ea-464a-8f58-b5990b1ac160",
    "lisa-morning-digest": "3f46ba9b-1ec4-44a3-b402-e7458a4c0e38",
    "lisa-ship-05": "a7046889-4190-4df7-8b37-2243347dcd1f",
    "lisa-pull-07": "ac062761-66a3-4f0a-8811-dec198ba12c7",
    "lisa-ship-16": "e1ff7019-e805-4770-9329-d6656f85d021",
    "lisa-pull-18": "f24bbd94-c9be-4dba-9602-cfa266fffb9c",
  };

  const plan = planStageOps({
    action,
    includeRepair,
    emitCommands,
    ensureDurableStore,
    existingJobIds,
  });

  if (writeSeedPath) {
    writeFileSync(
      writeSeedPath,
      `${JSON.stringify(materializeStageSeedJson(includeRepair), null, 2)}\n`,
      "utf8",
    );
  }

  if (asJson) {
    console.log(JSON.stringify(plan, null, 2));
  } else {
    console.log(
      `stage-ops ${action}: jobs=${plan.jobCount} delivery=${plan.deliveryMode} enableSchedules=${plan.enableSchedules} mutateStage=${plan.mutateStage}`,
    );
    console.log(`payloadHashes: ${JSON.stringify(plan.payloadHashes)}`);
    console.log(
      `repair: packaged decision=${plan.repairSupervision.decision.decision} installAllowed=${plan.repairSupervision.installAllowed} installedInPlan=${plan.repairSupervision.installedInPlan}`,
    );
    if (plan.validationErrors.length) {
      console.error("validationErrors:", plan.validationErrors);
    }
    if (plan.commands.length) {
      console.log(plan.commands.join("\n"));
    }
  }
  return plan.validationErrors.length ? 1 : 0;
}

const isDirectCli =
  process.argv[1] !== undefined &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (isDirectCli) {
  process.exitCode = main(process.argv);
}
