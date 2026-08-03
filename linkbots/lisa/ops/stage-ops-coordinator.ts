/**
 * Idempotent lisa-stage cron install/update/disable/rollback planner.
 *
 * Defaults to plan-only (no stage mutation). Apply emits exact coordinator
 * commands and requires explicit dual gate; this module never enables schedules
 * and never spends tokens.
 */

import { writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { LISA_OPENROUTER_ONLY_STAGE_ROUTING } from "./model-routing.openrouter-stage.ts";
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
  };
  routingGuard: {
    provider: "openrouter";
    primary: string;
    pdfModel: string;
    liveMutationAllowed: false;
    paidSpendEnablementAllowed: false;
  };
  commands: string[];
  validationErrors: string[];
};

export type StageOpsPlanInput = {
  action: StageOpsAction;
  includeRepair?: boolean;
  stageRoot?: string;
  enginePath?: string;
  profile?: string;
  /** Known stage job UUID map (name → job_id). Required for update/disable/rollback command emission. */
  existingJobIds?: Record<string, string>;
  emitCommands?: boolean;
};

const DEFAULT_STAGE_ROOT = "/Users/linktrend/Projects/LiNKplatform-staging/lisa";
const DEFAULT_ENGINE = "/Users/linktrend/Projects/openclaw_prime/openclaw.mjs";
const DEFAULT_PROFILE = "lisa-stage";

function selectJobs(includeRepair: boolean): StageSeedJob[] {
  const jobs = buildStageOpsJobs();
  if (!includeRepair) return jobs;
  return [...jobs, buildStageRepairSupervisionJob()];
}

function ocPrefix(params: { stageRoot: string; enginePath: string; profile: string }): string {
  return `OPENCLAW_STATE_DIR=${JSON.stringify(params.stageRoot)} node ${JSON.stringify(params.enginePath)} --profile ${params.profile}`;
}

function shellQuote(s: string): string {
  return `'${s.replace(/'/g, `'\\''`)}'`;
}

function toolsFlag(tools: readonly string[]): string {
  return `--tools ${shellQuote(tools.join(","))}`;
}

export function planStageOps(input: StageOpsPlanInput): StageOpsCoordinatorPlan {
  const includeRepair = input.includeRepair === true;
  const jobs = selectJobs(includeRepair);
  const repair = buildStageRepairSupervisionJob();
  const validationErrors = validateStageOpsCatalog({
    jobs: buildStageOpsJobs(),
    repair,
  });

  if (LISA_OPENROUTER_ONLY_STAGE_ROUTING.liveMutationAllowed !== false) {
    validationErrors.push("OpenRouter stage overlay must keep liveMutationAllowed=false");
  }
  if (LISA_OPENROUTER_ONLY_STAGE_ROUTING.paidSpendEnablementAllowed !== false) {
    validationErrors.push("OpenRouter stage overlay must keep paidSpendEnablementAllowed=false");
  }

  const payloadHashes: Record<string, string> = {};
  for (const job of jobs) payloadHashes[job.id] = hashStageJob(job);
  payloadHashes[repair.id] = hashStageJob(repair);

  const repairDecision = decideRepairSupervision();
  const stageRoot = input.stageRoot ?? DEFAULT_STAGE_ROOT;
  const enginePath = input.enginePath ?? DEFAULT_ENGINE;
  const profile = input.profile ?? DEFAULT_PROFILE;
  const prefix = ocPrefix({ stageRoot, enginePath, profile });
  const ids = input.existingJobIds ?? {};
  const emit = input.emitCommands === true;
  const commands: string[] = [];

  if (emit) {
    commands.push(
      `# Stage ops ${input.action} — delivery=none, enabled=false, OpenRouter-only hard stops`,
    );
    commands.push(
      `# mutateStage=false unless Principal separately authorizes applying these commands`,
    );
    commands.push(`export PATH="/opt/homebrew/opt/node@24/bin:$PATH"`);

    if (input.action === "disable" || input.action === "rollback") {
      for (const job of jobs) {
        const jobId = ids[job.id];
        if (!jobId) {
          commands.push(`# MISSING job id for ${job.id} — run cron list --json first`);
          continue;
        }
        commands.push(`${prefix} cron disable ${jobId}`);
      }
      if (input.action === "rollback") {
        commands.push(
          `# Rollback payloads to disabled delivery=none bounded procedures (not STAGE_CANARY stubs)`,
        );
        for (const job of jobs) {
          const jobId = ids[job.id];
          if (!jobId) continue;
          commands.push(
            `${prefix} cron edit ${jobId} --name ${shellQuote(job.id)} --cron ${shellQuote(job.schedule.expr)} --tz ${shellQuote(job.schedule.tz)} --no-deliver ${toolsFlag(job.payload.toolsAllow)} --message ${shellQuote(job.payload.message)} --timeout-seconds ${job.payload.timeoutSeconds}`,
          );
          commands.push(`${prefix} cron disable ${jobId}`);
        }
      }
      commands.push(`${prefix} cron list --json`);
    }

    if (input.action === "install" || input.action === "update") {
      for (const job of jobs) {
        const jobId = ids[job.id];
        if (jobId) {
          commands.push(
            `${prefix} cron edit ${jobId} --name ${shellQuote(job.id)} --cron ${shellQuote(job.schedule.expr)} --tz ${shellQuote(job.schedule.tz)} --no-deliver ${toolsFlag(job.payload.toolsAllow)} --message ${shellQuote(job.payload.message)} --timeout-seconds ${job.payload.timeoutSeconds}`,
          );
          commands.push(`${prefix} cron disable ${jobId}`);
        } else if (input.action === "install") {
          commands.push(
            `${prefix} cron add ${shellQuote(job.schedule.expr)} --tz ${shellQuote(job.schedule.tz)} --name ${shellQuote(job.id)} --agent ${job.agentId} --session isolated --no-deliver ${toolsFlag(job.payload.toolsAllow)} --timeout-seconds ${job.payload.timeoutSeconds} --message ${shellQuote(job.payload.message)}`,
          );
          commands.push(`# Then immediately: cron disable <new-job-id> for ${job.id}`);
        } else {
          commands.push(`# UPDATE skipped for ${job.id}: no existing job id provided`);
        }
      }
      commands.push(`${prefix} cron list --json`);
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
    },
    routingGuard: {
      provider: "openrouter",
      primary: LISA_OPENROUTER_ONLY_STAGE_ROUTING.agents.defaults.model.primary,
      pdfModel: LISA_OPENROUTER_ONLY_STAGE_ROUTING.agents.defaults.pdfModel.primary,
      liveMutationAllowed: false,
      paidSpendEnablementAllowed: false,
    },
    commands,
    validationErrors,
  };
}

/** Sync JSON seed document for humans / staging copy (never auto-written to stage). */
export function materializeStageSeedJson(includeRepair = false): unknown {
  const plan = planStageOps({ action: "install", includeRepair });
  const jobs = selectJobs(includeRepair);
  return {
    version: 2,
    note: "Generated from stage-ops-payloads / stage-ops-coordinator. delivery=none; enabled=false; real bounded procedures (not STAGE_CANARY stubs). Repair packaged separately unless includeRepair.",
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
          defaultDecision: decideRepairSupervision(),
        };
      })(),
      installFlag: "--include-repair",
    },
    notInstalledByDefault: includeRepair
      ? []
      : [
          {
            id: "lisa-repair-dispatcher",
            reason:
              "Install only via coordinator --include-repair; fail-closed blocked_no_store until durable stores exist.",
          },
        ],
  };
}

function printHelp(): void {
  console.log(`Usage:
  node --experimental-strip-types linkbots/lisa/ops/stage-ops-coordinator.ts <install|update|disable|rollback> [options]

Options:
  --include-repair     Include Repair/GitOps supervision job in the plan
  --emit-commands      Print exact coordinator shell commands (still mutateStage=false)
  --json               Print machine-readable plan JSON
  --write-seed <path>  Write materialized jobs.stage-seed.json (repo path only)

Hard stops: never enables schedules; delivery=none; OpenRouter-only; no stage mutation from this process.
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
      `repair: packaged decision=${plan.repairSupervision.decision.decision} installedInPlan=${plan.repairSupervision.installedInPlan}`,
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
