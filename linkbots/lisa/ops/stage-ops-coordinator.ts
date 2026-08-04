/**
 * Idempotent lisa-stage cron install/update/disable/rollback planner.
 *
 * Defaults to plan-only (no stage mutation). Apply emits exact coordinator
 * commands via lisa-stage env wrapper + LiNKplatform-staging openclaw.mjs,
 * and typed gateway-valid create/edit payloads. Never enables schedules.
 */

import { spawnSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
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

type JsonRecord = Record<string, unknown>;

export type StageCronJobIdResolution = {
  existingJobIds: Record<string, string>;
  validationErrors: string[];
};

export const STAGE_CRON_RECEIPT_TYPE = "lisa_stage_cron_list_v1" as const;
export const STAGE_CRON_RECEIPT_MAX_AGE_MS = 5 * 60 * 1000;
const STAGE_CRON_LIST_ARGS = ["cron", "list", "--all", "--json"] as const;

export type StageCronListReceipt = {
  receiptType: typeof STAGE_CRON_RECEIPT_TYPE;
  capturedAt: string;
  provenance: {
    capturedBy: "stage-ops-coordinator";
    readOnly: true;
    stageRoot: typeof STAGE_OPS_STAGE_ROOT;
    enginePath: typeof STAGE_OPS_ENGINE_PATH;
    profile: typeof STAGE_OPS_PROFILE;
    openclawArgs: typeof STAGE_CRON_LIST_ARGS;
  };
  cronList: unknown;
};

function isJsonRecord(value: unknown): value is JsonRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isUuid(value: unknown): value is string {
  return (
    typeof value === "string" &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value)
  );
}

function coreStageJobNames(): string[] {
  return buildStageOpsJobs().map((job) => job.id);
}

function acceptedStageJobNames(includeRepair: boolean): Set<string> {
  const names = coreStageJobNames();
  if (includeRepair) names.push(buildStageRepairSupervisionJob().id);
  return new Set(names);
}

function validateResolvedJobIds(params: {
  existingJobIds: Record<string, string>;
  requiredNames: readonly string[];
  acceptedNames: ReadonlySet<string>;
}): string[] {
  const errors: string[] = [];
  const ids = new Map<string, string>();
  for (const [name, id] of Object.entries(params.existingJobIds)) {
    if (!params.acceptedNames.has(name)) {
      errors.push(`unexpected stage cron mapping for ${name}`);
      continue;
    }
    if (!isUuid(id)) {
      errors.push(`stage cron mapping for ${name} must be a UUID`);
      continue;
    }
    const priorName = ids.get(id);
    if (priorName) {
      errors.push(`duplicate stage cron UUID ${id} for ${priorName} and ${name}`);
      continue;
    }
    ids.set(id, name);
  }
  for (const name of params.requiredNames) {
    if (!Object.hasOwn(params.existingJobIds, name)) {
      errors.push(`missing stage cron mapping for ${name}`);
    }
  }
  return errors;
}

export function buildStageCronListReceipt(
  cronList: unknown,
  capturedAt = new Date().toISOString(),
): StageCronListReceipt {
  return {
    receiptType: STAGE_CRON_RECEIPT_TYPE,
    capturedAt,
    provenance: {
      capturedBy: "stage-ops-coordinator",
      readOnly: true,
      stageRoot: STAGE_OPS_STAGE_ROOT,
      enginePath: STAGE_OPS_ENGINE_PATH,
      profile: STAGE_OPS_PROFILE,
      openclawArgs: STAGE_CRON_LIST_ARGS,
    },
    cronList,
  };
}

function validateStageCronReceiptEnvelope(
  value: unknown,
  nowMs: number,
  maxAgeMs: number,
): string[] {
  const errors: string[] = [];
  if (!isJsonRecord(value)) return ["cron receipt must be a JSON object"];
  if (value.receiptType !== STAGE_CRON_RECEIPT_TYPE) {
    errors.push(`cron receipt type must be ${STAGE_CRON_RECEIPT_TYPE}`);
  }
  const capturedMs = typeof value.capturedAt === "string" ? Date.parse(value.capturedAt) : NaN;
  if (!Number.isFinite(capturedMs) || new Date(capturedMs).toISOString() !== value.capturedAt) {
    errors.push("cron receipt capturedAt must be a valid ISO timestamp");
  } else {
    const ageMs = nowMs - capturedMs;
    if (ageMs < 0) errors.push("cron receipt capturedAt must not be in the future");
    if (ageMs > maxAgeMs) {
      errors.push(`cron receipt expired: age ${ageMs}ms exceeds ${maxAgeMs}ms`);
    }
  }
  const provenance = isJsonRecord(value.provenance) ? value.provenance : undefined;
  if (!provenance) return [...errors, "cron receipt provenance is required"];
  if (provenance.capturedBy !== "stage-ops-coordinator") {
    errors.push("cron receipt provenance.capturedBy must be stage-ops-coordinator");
  }
  if (provenance.readOnly !== true) {
    errors.push("cron receipt provenance.readOnly must be true");
  }
  if (provenance.stageRoot !== STAGE_OPS_STAGE_ROOT) {
    errors.push("cron receipt provenance.stageRoot must be the isolated stage root");
  }
  if (provenance.enginePath !== STAGE_OPS_ENGINE_PATH) {
    errors.push("cron receipt provenance.enginePath must be the isolated stage engine");
  }
  if (provenance.profile !== STAGE_OPS_PROFILE) {
    errors.push("cron receipt provenance.profile must be lisa-stage");
  }
  if (
    !Array.isArray(provenance.openclawArgs) ||
    provenance.openclawArgs.length !== STAGE_CRON_LIST_ARGS.length ||
    !STAGE_CRON_LIST_ARGS.every((arg, index) => provenance.openclawArgs?.[index] === arg)
  ) {
    errors.push("cron receipt provenance must prove cron list --all --json");
  }
  return errors;
}

/**
 * Resolve the six managed jobs only from a current coordinator-generated
 * read-only receipt. Unrelated jobs are ignored; malformed metadata, stale
 * captures, and duplicate/malformed managed jobs fail closed.
 */
export function resolveStageCronJobIdsFromReceipt(
  value: unknown,
  includeRepair = false,
  options: { nowMs?: number; maxAgeMs?: number } = {},
): StageCronJobIdResolution {
  const errors = validateStageCronReceiptEnvelope(
    value,
    options.nowMs ?? Date.now(),
    options.maxAgeMs ?? STAGE_CRON_RECEIPT_MAX_AGE_MS,
  );
  const existingJobIds: Record<string, string> = {};
  const acceptedNames = acceptedStageJobNames(includeRepair);
  const cronList = isJsonRecord(value) ? value.cronList : undefined;
  const jobs = isJsonRecord(cronList) && Array.isArray(cronList.jobs) ? cronList.jobs : undefined;
  if (!jobs) {
    return {
      existingJobIds,
      validationErrors: [...errors, "cron receipt cronList must contain a jobs array"],
    };
  }
  for (const job of jobs) {
    if (!isJsonRecord(job) || typeof job.name !== "string" || !acceptedNames.has(job.name)) {
      continue;
    }
    if (!isUuid(job.id)) {
      errors.push(`stage cron receipt job ${job.name} must contain a UUID id`);
      continue;
    }
    if (Object.hasOwn(existingJobIds, job.name)) {
      errors.push(`duplicate stage cron receipt name ${job.name}`);
      continue;
    }
    existingJobIds[job.name] = job.id;
  }
  return {
    existingJobIds,
    validationErrors: [
      ...errors,
      ...validateResolvedJobIds({
        existingJobIds,
        requiredNames: coreStageJobNames(),
        acceptedNames,
      }),
    ],
  };
}

/**
 * Resolve an explicit, audited JSON map: `{ "existingJobIds": { name: uuid } }`.
 * The six core stage jobs are mandatory. Repair is allowed only when requested.
 */
export function resolveStageCronJobIdsFromExplicitMap(
  value: unknown,
  includeRepair = false,
): StageCronJobIdResolution {
  const existingJobIds =
    isJsonRecord(value) && isJsonRecord(value.existingJobIds)
      ? Object.fromEntries(Object.entries(value.existingJobIds))
      : {};
  if (!isJsonRecord(value) || !isJsonRecord(value.existingJobIds)) {
    return {
      existingJobIds: {},
      validationErrors: ["explicit stage cron map must be { existingJobIds: { name: uuid } }"],
    };
  }
  const acceptedNames = acceptedStageJobNames(includeRepair);
  return {
    existingJobIds: existingJobIds as Record<string, string>,
    validationErrors: validateResolvedJobIds({
      existingJobIds: existingJobIds as Record<string, string>,
      requiredNames: coreStageJobNames(),
      acceptedNames,
    }),
  };
}

function readJsonFile(filePath: string): unknown {
  return JSON.parse(readFileSync(filePath, "utf8")) as unknown;
}

function captureStageCronListReceipt(filePath: string): StageCronListReceipt {
  const result = spawnSync(
    process.execPath,
    [STAGE_OPS_ENGINE_PATH, "--profile", STAGE_OPS_PROFILE, ...STAGE_CRON_LIST_ARGS],
    {
      encoding: "utf8",
      env: { ...process.env, OPENCLAW_STATE_DIR: STAGE_OPS_STAGE_ROOT },
      maxBuffer: 10 * 1024 * 1024,
    },
  );
  if (result.error || result.status !== 0) {
    throw new Error("read-only stage cron capture failed; no receipt written");
  }
  let cronList: unknown;
  try {
    cronList = JSON.parse(result.stdout) as unknown;
  } catch {
    throw new Error("read-only stage cron capture returned invalid JSON; no receipt written");
  }
  const receipt = buildStageCronListReceipt(cronList);
  const validation = resolveStageCronJobIdsFromReceipt(receipt);
  if (validation.validationErrors.length > 0) {
    throw new Error(
      `read-only stage cron capture rejected: ${validation.validationErrors.join("; ")}`,
    );
  }
  writeFileSync(filePath, `${JSON.stringify(receipt, null, 2)}\n`, "utf8");
  return receipt;
}

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
  node --import ./linkbots/lisa/ops/register-strip-types-js-resolve.mjs --experimental-strip-types linkbots/lisa/ops/stage-ops-coordinator.ts <install|update|disable|rollback> [options]

Options:
  --include-repair     Include Repair/GitOps supervision job when store health passes
  --ensure-store       Lazily ensure lisa_stage_* on durableStoreDatabasePath/stage state (Principal gate)
  --emit-commands      Print exact coordinator shell commands (still mutateStage=false)
  --json               Print machine-readable plan JSON
  --capture-cron-receipt <path>
                       Run the coordinator-owned read-only stage capture and write its wrapper receipt
  --cron-list-receipt <path>
                       Read a current coordinator-generated wrapper receipt (maximum age 5 minutes)
  --existing-job-ids <path>
                       Offline plan-only audited map; cannot be used with --emit-commands
  --write-seed <path>  Write materialized jobs.stage-seed.json (repo path only)

Hard stops: never enables schedules; delivery=none; creates use --disabled + --no-deliver;
edits use --disable + --no-deliver (single mutation); OpenRouter-only; stage commands use
LiNKplatform-staging/openclaw_prime via lisa-stage-env-wrapper; no stage mutation from this process.
Command emission requires a coordinator-captured receipt proving cron list --all --json and no older
than 5 minutes. Explicit maps are an offline plan-only input. No historical UUID defaults exist.
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
  const receiptIdx = args.indexOf("--cron-list-receipt");
  const receiptPath = receiptIdx >= 0 ? args[receiptIdx + 1] : undefined;
  const captureIdx = args.indexOf("--capture-cron-receipt");
  const capturePath = captureIdx >= 0 ? args[captureIdx + 1] : undefined;
  const mapIdx = args.indexOf("--existing-job-ids");
  const mapPath = mapIdx >= 0 ? args[mapIdx + 1] : undefined;

  const sourceCount = [capturePath, receiptPath, mapPath].filter(Boolean).length;
  if (sourceCount !== 1) {
    console.error(
      "Provide exactly one of --capture-cron-receipt <path>, --cron-list-receipt <path>, or --existing-job-ids <path>; no historical UUID defaults are available.",
    );
    return 2;
  }
  if (
    (captureIdx >= 0 && !capturePath) ||
    (receiptIdx >= 0 && !receiptPath) ||
    (mapIdx >= 0 && !mapPath)
  ) {
    console.error("The stage cron receipt/map option requires a JSON file path.");
    return 2;
  }
  if (mapPath && emitCommands) {
    console.error(
      "--existing-job-ids is offline plan-only; command emission requires a current coordinator-generated cron receipt.",
    );
    return 2;
  }

  let resolution: StageCronJobIdResolution;
  try {
    const source = capturePath
      ? captureStageCronListReceipt(capturePath)
      : readJsonFile(receiptPath ?? mapPath!);
    resolution =
      capturePath || receiptPath
        ? resolveStageCronJobIdsFromReceipt(source, includeRepair)
        : resolveStageCronJobIdsFromExplicitMap(source, includeRepair);
  } catch (error) {
    console.error(
      `Unable to read stage cron mapping source: ${error instanceof Error ? error.message : String(error)}`,
    );
    return 2;
  }
  if (resolution.validationErrors.length > 0) {
    console.error("Stage cron mapping rejected:", resolution.validationErrors);
    return 1;
  }

  const plan = planStageOps({
    action,
    includeRepair,
    emitCommands,
    ensureDurableStore,
    existingJobIds: resolution.existingJobIds,
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
