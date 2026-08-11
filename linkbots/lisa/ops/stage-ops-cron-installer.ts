/**
 * Typed lisa-stage cron installer payloads — gateway-valid CronJobCreate / edit
 * shapes with inline bounded procedures, delivery=none, enabled=false defaults,
 * exact UUID preservation on edit, and safe rollback patches.
 *
 * Gateway create bodies only accept cron.add fields. Stage hard-stop metadata
 * lives on the plan/receipt as stageConstraints (never on cron.add payloads).
 */

import {
  formatValidationErrors,
  validateCronAddParams,
} from "../../../packages/gateway-protocol/dist/index.mjs";
import {
  STAGE_OPS_AGENT_ID,
  STAGE_OPS_DELIVERY_MODE,
  STAGE_OPS_SESSION_TARGET,
  STAGE_OPS_TZ,
  buildStageOpsJobs,
  buildStageRepairSupervisionJob,
  hashStageJob,
  type StageSeedJob,
} from "./stage-ops-payloads.ts";

/** Stage hard stops — plan/receipt only; never gateway cron.add fields. */
export type StageOpsConstraints = {
  openRouterOnly: true;
  liveLisaForbidden: true;
  deliveryAnnounceForbidden: true;
};

export const STAGE_OPS_CONSTRAINTS: StageOpsConstraints = {
  openRouterOnly: true,
  liveLisaForbidden: true,
  deliveryAnnounceForbidden: true,
};

/** Gateway-facing create payload (cron.add / CronJobCreate-compatible). */
export type StageCronJobCreatePayload = {
  name: string;
  agentId: typeof STAGE_OPS_AGENT_ID;
  sessionTarget: typeof STAGE_OPS_SESSION_TARGET;
  wakeMode: "now";
  enabled: false;
  schedule: {
    kind: "cron";
    expr: string;
    tz: typeof STAGE_OPS_TZ;
  };
  payload: {
    kind: "agentTurn";
    message: string;
    toolsAllow: string[];
    timeoutSeconds: number;
  };
  delivery: {
    mode: typeof STAGE_OPS_DELIVERY_MODE;
  };
};

/** Gateway-facing edit/patch payload preserving durable job UUID. */
export type StageCronJobEditPayload = {
  id: string;
  patch: {
    name: string;
    enabled: false;
    schedule: StageCronJobCreatePayload["schedule"];
    payload: StageCronJobCreatePayload["payload"];
    delivery: StageCronJobCreatePayload["delivery"];
  };
  preserveExistingUuid: true;
  rollback: {
    enabled: false;
    deliveryMode: typeof STAGE_OPS_DELIVERY_MODE;
  };
};

export type StageCronInstallPlan = {
  action: "install" | "update" | "disable" | "rollback";
  creates: StageCronJobCreatePayload[];
  edits: StageCronJobEditPayload[];
  disables: Array<{ id: string; enabled: false }>;
  payloadHashes: Record<string, string>;
  stageConstraints: StageOpsConstraints;
  validationErrors: string[];
};

/** Compact receipt fragment for stageConstraints (plan/receipt, not cron.add). */
export function buildStageConstraintsReceipt(
  constraints: StageOpsConstraints = STAGE_OPS_CONSTRAINTS,
): { stageConstraints: StageOpsConstraints } {
  return { stageConstraints: { ...constraints } };
}

function validateStageConstraints(constraints: StageOpsConstraints): string[] {
  const errors: string[] = [];
  if (constraints.openRouterOnly !== true) {
    errors.push("stageConstraints.openRouterOnly must be true");
  }
  if (constraints.liveLisaForbidden !== true) {
    errors.push("stageConstraints.liveLisaForbidden must be true");
  }
  if (constraints.deliveryAnnounceForbidden !== true) {
    errors.push("stageConstraints.deliveryAnnounceForbidden must be true");
  }
  return errors;
}

function toCreatePayload(job: StageSeedJob): StageCronJobCreatePayload {
  return {
    name: job.id,
    agentId: STAGE_OPS_AGENT_ID,
    sessionTarget: STAGE_OPS_SESSION_TARGET,
    wakeMode: "now",
    enabled: false,
    schedule: {
      kind: "cron",
      expr: job.schedule.expr,
      tz: STAGE_OPS_TZ,
    },
    payload: {
      kind: "agentTurn",
      message: job.payload.message,
      toolsAllow: [...job.payload.toolsAllow],
      timeoutSeconds: job.payload.timeoutSeconds,
    },
    delivery: { mode: STAGE_OPS_DELIVERY_MODE },
  };
}

function toEditPayload(job: StageSeedJob, jobId: string): StageCronJobEditPayload {
  const create = toCreatePayload(job);
  return {
    id: jobId,
    patch: {
      name: create.name,
      enabled: false,
      schedule: create.schedule,
      payload: create.payload,
      delivery: create.delivery,
    },
    preserveExistingUuid: true,
    rollback: {
      enabled: false,
      deliveryMode: STAGE_OPS_DELIVERY_MODE,
    },
  };
}

export function validateStageCronCreatePayload(payload: StageCronJobCreatePayload): string[] {
  const errors: string[] = [];
  if ("dependencies" in (payload as object)) {
    errors.push(`${payload.name}: create payload must not include dependencies`);
  }
  if (!validateCronAddParams(payload)) {
    errors.push(
      `${payload.name}: gateway cron.add invalid: ${formatValidationErrors(validateCronAddParams.errors)}`,
    );
  }
  if (payload.enabled !== false) {
    errors.push(`${payload.name}: enabled must be false`);
  }
  if (payload.delivery.mode !== "none") {
    errors.push(`${payload.name}: delivery.mode must be none`);
  }
  if (payload.sessionTarget !== "isolated") {
    errors.push(`${payload.name}: sessionTarget must be isolated`);
  }
  if (payload.wakeMode !== "now") {
    errors.push(`${payload.name}: wakeMode must be now`);
  }
  if (payload.agentId !== "lisa-cron") {
    errors.push(`${payload.name}: agentId must be lisa-cron`);
  }
  if (payload.schedule.kind !== "cron") {
    errors.push(`${payload.name}: schedule.kind must be cron`);
  }
  if (payload.schedule.tz !== "Asia/Taipei") {
    errors.push(`${payload.name}: tz must be Asia/Taipei`);
  }
  if (payload.payload.kind !== "agentTurn") {
    errors.push(`${payload.name}: payload.kind must be agentTurn`);
  }
  if (!payload.payload.message.trim()) {
    errors.push(`${payload.name}: message must be non-empty`);
  }
  if (!Array.isArray(payload.payload.toolsAllow) || payload.payload.toolsAllow.length === 0) {
    errors.push(`${payload.name}: toolsAllow must be a non-empty array`);
  }
  if (
    typeof payload.payload.timeoutSeconds !== "number" ||
    !Number.isInteger(payload.payload.timeoutSeconds) ||
    payload.payload.timeoutSeconds <= 0
  ) {
    errors.push(`${payload.name}: timeoutSeconds must be a positive integer`);
  }
  if (/^STAGE CANARY ONLY\b/m.test(payload.payload.message)) {
    errors.push(`${payload.name}: must not emit STAGE_CANARY stubs`);
  }
  return errors;
}

export function validateStageCronEditPayload(payload: StageCronJobEditPayload): string[] {
  const errors: string[] = [];
  if (!payload.id || !/^[0-9a-f-]{36}$/i.test(payload.id)) {
    errors.push(`edit id must be a UUID (got ${payload.id || "<empty>"})`);
  }
  if (payload.preserveExistingUuid !== true) {
    errors.push(`${payload.id}: must preserve existing UUID`);
  }
  if (payload.rollback.enabled !== false) {
    errors.push(`${payload.id}: rollback must keep enabled=false`);
  }
  if (payload.rollback.deliveryMode !== "none") {
    errors.push(`${payload.id}: rollback delivery must stay none`);
  }
  errors.push(
    ...validateStageCronCreatePayload({
      name: payload.patch.name,
      agentId: STAGE_OPS_AGENT_ID,
      sessionTarget: STAGE_OPS_SESSION_TARGET,
      wakeMode: "now",
      enabled: payload.patch.enabled,
      schedule: payload.patch.schedule,
      payload: payload.patch.payload,
      delivery: payload.patch.delivery,
    }),
  );
  return errors;
}

export function buildStageCronInstallPlan(params: {
  action: "install" | "update" | "disable" | "rollback";
  includeRepair?: boolean;
  existingJobIds?: Record<string, string>;
}): StageCronInstallPlan {
  const jobs = buildStageOpsJobs();
  const catalog =
    params.includeRepair === true ? [...jobs, buildStageRepairSupervisionJob()] : jobs;
  const ids = params.existingJobIds ?? {};
  const creates: StageCronJobCreatePayload[] = [];
  const edits: StageCronJobEditPayload[] = [];
  const disables: Array<{ id: string; enabled: false }> = [];
  const payloadHashes: Record<string, string> = {};
  const stageConstraints = { ...STAGE_OPS_CONSTRAINTS };
  const validationErrors: string[] = [...validateStageConstraints(stageConstraints)];

  for (const job of catalog) {
    payloadHashes[job.id] = hashStageJob(job);
    const existingId = ids[job.id];
    if (params.action === "disable") {
      if (existingId) {
        disables.push({ id: existingId, enabled: false });
      } else {
        validationErrors.push(`disable missing UUID for ${job.id}`);
      }
      continue;
    }
    if (params.action === "install") {
      if (existingId) {
        const edit = toEditPayload(job, existingId);
        edits.push(edit);
        validationErrors.push(...validateStageCronEditPayload(edit));
      } else {
        const create = toCreatePayload(job);
        creates.push(create);
        validationErrors.push(...validateStageCronCreatePayload(create));
      }
      continue;
    }
    // update / rollback rewrite onto existing UUIDs; enabled=false is on the edit
    // patch / CLI --disable (no separate disables[] race after edit).
    if (!existingId) {
      validationErrors.push(`${params.action} missing UUID for ${job.id}`);
      continue;
    }
    const edit = toEditPayload(job, existingId);
    edits.push(edit);
    validationErrors.push(...validateStageCronEditPayload(edit));
  }

  return {
    action: params.action,
    creates,
    edits,
    disables,
    payloadHashes,
    stageConstraints,
    validationErrors,
  };
}
