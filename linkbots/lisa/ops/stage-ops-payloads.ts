/**
 * Mac Mini lisa-stage cron payload builders.
 *
 * Replaces STAGE_CANARY one-liner stubs with real bounded HEARTBEAT / digest /
 * Ship-Pull procedures (delivery=none). Repair/GitOps supervision is packaged
 * separately and fails closed with blocked_no_store when durable stores are absent.
 *
 * Package-only: does not mutate stage/runtime/credentials.
 */

import { createHash } from "node:crypto";
import { MAIN_APPROVE_RUNTIME_STORE } from "./main-approve-binding.ts";
import { SHIP_PULL_REQUIRED_TOOLS } from "./ship-pull-contract.ts";

export const STAGE_OPS_SEED_VERSION = 2 as const;
export const STAGE_OPS_DELIVERY_MODE = "none" as const;
export const STAGE_OPS_AGENT_ID = "lisa-cron" as const;
export const STAGE_OPS_SESSION_TARGET = "isolated" as const;
export const STAGE_OPS_TZ = "Asia/Taipei" as const;

export const STAGE_HARD_STOPS = [
  "delivery=none (no Telegram announce / no runner fallback delivery)",
  "OpenRouter-only credentials (OPENROUTER_API_KEY process-only; never mint direct provider keys)",
  "do not touch ~/.openclaw-lisa / live Lisa / VPS / IDE Development",
  "do not enable schedules from this message; schedules stay disabled until Principal gate",
  "do not mutate other cron jobs (no cron.add / cron.update / cron.remove)",
  "do not print secrets, tokens, or credential values",
] as const;

export type StageJobKind = "heartbeat" | "digest" | "ship" | "pull" | "repair_supervision";

export type StageSeedJob = {
  id: string;
  name: string;
  kind: StageJobKind;
  enabled: false;
  agentId: typeof STAGE_OPS_AGENT_ID;
  sessionTarget: typeof STAGE_OPS_SESSION_TARGET;
  schedule: { tz: typeof STAGE_OPS_TZ; expr: string };
  delivery: { mode: typeof STAGE_OPS_DELIVERY_MODE };
  payload: {
    kind: "agentTurn";
    messageFile: string;
    message: string;
    toolsAllow: readonly string[];
    timeoutSeconds: number;
  };
  hardStops: readonly string[];
};

export type StageDurableStoreProbe = {
  repairAttemptStoreAvailable: boolean;
  mainApproveStoreAvailable: boolean;
  repairAttemptStorePrerequisite?: string;
  mainApproveStorePrerequisite?: string;
};

export type StageRepairSupervisionDecision =
  | {
      decision: "blocked_no_store";
      reason: "blocked_no_store";
      missing: Array<"repair_attempt_store" | "main_approve_store">;
      prerequisite: string;
      mayDispatchAcp: false;
    }
  | {
      decision: "supervise_readonly";
      reason: "stores_present";
      mayDispatchAcp: false;
      note: "Stage defaults still forbid live ACP; evaluate bindings only.";
    };

const HEARTBEAT_DIGEST_TOOLS = ["read", "write", "edit", "exec"] as const;

const REPAIR_SUPERVISION_TOOLS = [
  "read",
  "write",
  "edit",
  "exec",
  "sessions_spawn",
  "sessions_wait",
] as const;

function hardStopBlock(): string {
  return ["Hard stops:", ...STAGE_HARD_STOPS.map((s) => `- ${s}`)].join("\n");
}

export function buildHeartbeatStageMessage(): string {
  return [
    "STAGE BOUNDED PROCEDURE — lisa-heartbeat-45",
    hardStopBlock(),
    "Read and execute HEARTBEAT.md for profile lisa-stage (workspace under the stage root).",
    "Use only the HARD TOOL CONTRACT in HEARTBEAT.md (native read / sessions_list / unpiped lisa-safe forms).",
    "If a check requires live Telegram announce, live Lisa paths, or unpaid spend beyond stage OpenRouter policy, skip that check and note STAGE_SKIPPED_<check>.",
    "Final reply must follow the Heartbeat output format in HEARTBEAT.md (or STAGE_PROCEDURE_BLOCKED <reason> on unrecovered hard denial).",
    "Never reply with STAGE_CANARY_OK alone.",
  ].join("\n");
}

export function buildDigestStageMessage(): string {
  return [
    "STAGE BOUNDED PROCEDURE — lisa-morning-digest",
    hardStopBlock(),
    "Read and execute agents/morning-digest.md for profile lisa-stage.",
    "delivery=none: do not rely on cron announce; do not email Carlos unless Principal explicitly authorizes a stage delivery exception (default: skip email and note STAGE_SKIPPED_email).",
    "Main Approve: if authoritative package store is unavailable, record blocked_no_store and continue digest sections without inventing Clear.",
    "Final reply must be the Morning Digest Output Format (or STAGE_PROCEDURE_BLOCKED <reason>).",
    "Never reply with STAGE_CANARY_OK alone.",
  ].join("\n");
}

export function buildShipPullStageMessage(
  wave: "Ship 05" | "Pull 07" | "Ship 16" | "Pull 18",
): string {
  const kind = wave.startsWith("Ship") ? "shipper" : "puller";
  return [
    `STAGE BOUNDED PROCEDURE — ${wave}`,
    hardStopBlock(),
    "Read and execute agents/ship-pull-clock.md for this wave.",
    `Wave: ${wave}. Spawn Cursor ACP ${kind} only when stage ACP is healthy and Principal spend/ACP gate allows; otherwise report WAVE: Issues with STAGE_SKIPPED_acp (do not invent Clear).`,
    "Wait contract: park with sessions_wait after spawn; never call sessions_yield.",
    "delivery=none: skip Telegram announce and skip email-send unless Principal authorizes stage delivery; still perform status CAS only against stage workspace pipeline-status (never live Lisa memory).",
    "Final assistant payload must be exactly `<Wave>: Clear|Issues` when the procedure completes, or STAGE_PROCEDURE_BLOCKED <reason>.",
    "Never reply with STAGE_CANARY_OK alone.",
  ].join("\n");
}

export function buildRepairSupervisionStageMessage(): string {
  return [
    "STAGE REPAIR/GITOPS SUPERVISION — lisa-repair-dispatcher",
    hardStopBlock(),
    "Durable-state gate (fail-closed):",
    "1) Probe Repair attempt store availability (authoritative OpenClaw/SQLite or IDE control-plane binding — never JSON/Markdown sidecars as state).",
    "2) Probe Main Approve authoritative store (IDE Development issue #23 / OpenClaw package store).",
    "3) If either store is unavailable: final reply exactly `blocked_no_store` and STOP. Do not spawn ACP. Do not invent Clear or repair success.",
    "4) If both stores are present: read agents/repair-dispatcher.md and evaluate bindings read-only. Stage defaults still forbid live ACP dispatch (authorizeRepairLiveDispatch remains fail-closed).",
    "Never reply with STAGE_CANARY_OK alone.",
  ].join("\n");
}

/** Fail-closed supervision decision used by tooling/tests and mirrored in cron message. */
export function decideRepairSupervision(
  probe: StageDurableStoreProbe = {
    repairAttemptStoreAvailable: false,
    mainApproveStoreAvailable: MAIN_APPROVE_RUNTIME_STORE.available,
    mainApproveStorePrerequisite: MAIN_APPROVE_RUNTIME_STORE.prerequisite,
  },
): StageRepairSupervisionDecision {
  const missing: Array<"repair_attempt_store" | "main_approve_store"> = [];
  if (!probe.repairAttemptStoreAvailable) missing.push("repair_attempt_store");
  if (!probe.mainApproveStoreAvailable) missing.push("main_approve_store");
  if (missing.length > 0) {
    const parts = [
      probe.repairAttemptStorePrerequisite,
      probe.mainApproveStorePrerequisite ?? MAIN_APPROVE_RUNTIME_STORE.prerequisite,
    ].filter(Boolean);
    return {
      decision: "blocked_no_store",
      reason: "blocked_no_store",
      missing,
      prerequisite: parts.join(" | "),
      mayDispatchAcp: false,
    };
  }
  return {
    decision: "supervise_readonly",
    reason: "stores_present",
    mayDispatchAcp: false,
    note: "Stage defaults still forbid live ACP; evaluate bindings only.",
  };
}

export function buildStageOpsJobs(): StageSeedJob[] {
  return [
    {
      id: "lisa-ship-05",
      name: "Ship 05",
      kind: "ship",
      enabled: false,
      agentId: STAGE_OPS_AGENT_ID,
      sessionTarget: STAGE_OPS_SESSION_TARGET,
      schedule: { tz: STAGE_OPS_TZ, expr: "0 5 * * *" },
      delivery: { mode: STAGE_OPS_DELIVERY_MODE },
      payload: {
        kind: "agentTurn",
        messageFile: "agents/ship-pull-clock.md",
        message: buildShipPullStageMessage("Ship 05"),
        toolsAllow: [...SHIP_PULL_REQUIRED_TOOLS],
        timeoutSeconds: 1200,
      },
      hardStops: [...STAGE_HARD_STOPS],
    },
    {
      id: "lisa-pull-07",
      name: "Pull 07",
      kind: "pull",
      enabled: false,
      agentId: STAGE_OPS_AGENT_ID,
      sessionTarget: STAGE_OPS_SESSION_TARGET,
      schedule: { tz: STAGE_OPS_TZ, expr: "0 7 * * *" },
      delivery: { mode: STAGE_OPS_DELIVERY_MODE },
      payload: {
        kind: "agentTurn",
        messageFile: "agents/ship-pull-clock.md",
        message: buildShipPullStageMessage("Pull 07"),
        toolsAllow: [...SHIP_PULL_REQUIRED_TOOLS],
        timeoutSeconds: 1200,
      },
      hardStops: [...STAGE_HARD_STOPS],
    },
    {
      id: "lisa-ship-16",
      name: "Ship 16",
      kind: "ship",
      enabled: false,
      agentId: STAGE_OPS_AGENT_ID,
      sessionTarget: STAGE_OPS_SESSION_TARGET,
      schedule: { tz: STAGE_OPS_TZ, expr: "0 16 * * *" },
      delivery: { mode: STAGE_OPS_DELIVERY_MODE },
      payload: {
        kind: "agentTurn",
        messageFile: "agents/ship-pull-clock.md",
        message: buildShipPullStageMessage("Ship 16"),
        toolsAllow: [...SHIP_PULL_REQUIRED_TOOLS],
        timeoutSeconds: 1200,
      },
      hardStops: [...STAGE_HARD_STOPS],
    },
    {
      id: "lisa-pull-18",
      name: "Pull 18",
      kind: "pull",
      enabled: false,
      agentId: STAGE_OPS_AGENT_ID,
      sessionTarget: STAGE_OPS_SESSION_TARGET,
      schedule: { tz: STAGE_OPS_TZ, expr: "0 18 * * *" },
      delivery: { mode: STAGE_OPS_DELIVERY_MODE },
      payload: {
        kind: "agentTurn",
        messageFile: "agents/ship-pull-clock.md",
        message: buildShipPullStageMessage("Pull 18"),
        toolsAllow: [...SHIP_PULL_REQUIRED_TOOLS],
        timeoutSeconds: 1200,
      },
      hardStops: [...STAGE_HARD_STOPS],
    },
    {
      id: "lisa-morning-digest",
      name: "Morning Digest",
      kind: "digest",
      enabled: false,
      agentId: STAGE_OPS_AGENT_ID,
      sessionTarget: STAGE_OPS_SESSION_TARGET,
      schedule: { tz: STAGE_OPS_TZ, expr: "30 8 * * *" },
      delivery: { mode: STAGE_OPS_DELIVERY_MODE },
      payload: {
        kind: "agentTurn",
        messageFile: "agents/morning-digest.md",
        message: buildDigestStageMessage(),
        toolsAllow: [...HEARTBEAT_DIGEST_TOOLS],
        timeoutSeconds: 1200,
      },
      hardStops: [...STAGE_HARD_STOPS],
    },
    {
      id: "lisa-heartbeat-45",
      name: "Heartbeat 45",
      kind: "heartbeat",
      enabled: false,
      agentId: STAGE_OPS_AGENT_ID,
      sessionTarget: STAGE_OPS_SESSION_TARGET,
      schedule: {
        tz: STAGE_OPS_TZ,
        expr: "45 0,2,4,6,10,12,14,16,18,20,22 * * *",
      },
      delivery: { mode: STAGE_OPS_DELIVERY_MODE },
      payload: {
        kind: "agentTurn",
        messageFile: "HEARTBEAT.md",
        message: buildHeartbeatStageMessage(),
        toolsAllow: [...HEARTBEAT_DIGEST_TOOLS],
        timeoutSeconds: 900,
      },
      hardStops: [...STAGE_HARD_STOPS],
    },
  ];
}

/** Packaged separately; install only via --include-repair. Defaults disabled + blocked_no_store. */
export function buildStageRepairSupervisionJob(): StageSeedJob {
  return {
    id: "lisa-repair-dispatcher",
    name: "Repair Dispatcher",
    kind: "repair_supervision",
    enabled: false,
    agentId: STAGE_OPS_AGENT_ID,
    sessionTarget: STAGE_OPS_SESSION_TARGET,
    schedule: { tz: STAGE_OPS_TZ, expr: "15 * * * *" },
    delivery: { mode: STAGE_OPS_DELIVERY_MODE },
    payload: {
      kind: "agentTurn",
      messageFile: "agents/repair-dispatcher.md",
      message: buildRepairSupervisionStageMessage(),
      toolsAllow: [...REPAIR_SUPERVISION_TOOLS],
      timeoutSeconds: 600,
    },
    hardStops: [...STAGE_HARD_STOPS],
  };
}

export type CanonicalPayloadHashInput = {
  id: string;
  scheduleExpr: string;
  scheduleTz: string;
  deliveryMode: string;
  message: string;
  messageFile: string;
  toolsAllow: readonly string[];
  enabled: boolean;
  agentId: string;
};

export function canonicalPayloadBytes(input: CanonicalPayloadHashInput): string {
  return JSON.stringify({
    id: input.id,
    schedule: { tz: input.scheduleTz, expr: input.scheduleExpr },
    delivery: { mode: input.deliveryMode },
    enabled: input.enabled,
    agentId: input.agentId,
    payload: {
      messageFile: input.messageFile,
      message: input.message,
      toolsAllow: [...input.toolsAllow],
    },
  });
}

export function hashStagePayload(input: CanonicalPayloadHashInput): string {
  return createHash("sha256").update(canonicalPayloadBytes(input)).digest("hex");
}

export function hashStageJob(job: StageSeedJob): string {
  return hashStagePayload({
    id: job.id,
    scheduleExpr: job.schedule.expr,
    scheduleTz: job.schedule.tz,
    deliveryMode: job.delivery.mode,
    message: job.payload.message,
    messageFile: job.payload.messageFile,
    toolsAllow: job.payload.toolsAllow,
    enabled: job.enabled,
    agentId: job.agentId,
  });
}

export function validateStageJob(job: StageSeedJob): string[] {
  const errors: string[] = [];
  if (job.enabled !== false) errors.push(`${job.id}: enabled must be false`);
  if (job.delivery.mode !== "none") errors.push(`${job.id}: delivery.mode must be none`);
  if (job.agentId !== STAGE_OPS_AGENT_ID) errors.push(`${job.id}: agentId must be lisa-cron`);
  if (job.schedule.tz !== STAGE_OPS_TZ) errors.push(`${job.id}: tz must be Asia/Taipei`);
  if (
    /^STAGE CANARY ONLY\b/m.test(job.payload.message) ||
    /Reply with exactly one line:\s*STAGE_CANARY_OK/i.test(job.payload.message)
  ) {
    errors.push(`${job.id}: must not use STAGE_CANARY one-liner stubs`);
  }
  if (
    !job.payload.message.includes("STAGE BOUNDED PROCEDURE") &&
    job.kind !== "repair_supervision"
  ) {
    errors.push(`${job.id}: message must declare STAGE BOUNDED PROCEDURE`);
  }
  if (job.kind === "repair_supervision") {
    if (!job.payload.message.includes("blocked_no_store")) {
      errors.push(`${job.id}: repair supervision must mention blocked_no_store`);
    }
    if (job.payload.toolsAllow.includes("sessions_yield")) {
      errors.push(`${job.id}: must not allow sessions_yield`);
    }
  }
  if (job.kind === "ship" || job.kind === "pull") {
    if (!job.payload.toolsAllow.includes("sessions_wait")) {
      errors.push(`${job.id}: Ship/Pull must include sessions_wait`);
    }
    if (job.payload.toolsAllow.includes("sessions_yield")) {
      errors.push(`${job.id}: Ship/Pull must exclude sessions_yield`);
    }
  }
  if (job.kind === "heartbeat" || job.kind === "digest") {
    if (job.payload.toolsAllow.includes("sessions_spawn")) {
      errors.push(`${job.id}: heartbeat/digest must omit sessions_spawn`);
    }
  }
  return errors;
}

export function validateStageOpsCatalog(params: {
  jobs: StageSeedJob[];
  repair?: StageSeedJob | null;
}): string[] {
  const errors: string[] = [];
  if (params.jobs.length !== 6)
    errors.push(`expected exactly 6 core jobs, got ${params.jobs.length}`);
  const ids = params.jobs.map((j) => j.id);
  for (const id of [
    "lisa-ship-05",
    "lisa-pull-07",
    "lisa-ship-16",
    "lisa-pull-18",
    "lisa-morning-digest",
    "lisa-heartbeat-45",
  ]) {
    if (!ids.includes(id)) errors.push(`missing core job ${id}`);
  }
  if (ids.includes("lisa-repair-dispatcher")) {
    errors.push("repair must not be in the six-job core set");
  }
  for (const job of params.jobs) errors.push(...validateStageJob(job));
  if (params.repair) {
    errors.push(...validateStageJob(params.repair));
    if (params.repair.id !== "lisa-repair-dispatcher") {
      errors.push("repair job id must be lisa-repair-dispatcher");
    }
  }
  const hb = params.jobs.find((j) => j.id === "lisa-heartbeat-45");
  if (hb && hb.schedule.expr !== "45 0,2,4,6,10,12,14,16,18,20,22 * * *") {
    errors.push("heartbeat expr must include 06:45 and exclude 08:45 wall-clock list");
  }
  return errors;
}

export function buildStageSeedDocument(params?: { includeRepair?: boolean }): {
  version: typeof STAGE_OPS_SEED_VERSION;
  note: string;
  hardStops: readonly string[];
  deliveryDefault: typeof STAGE_OPS_DELIVERY_MODE;
  jobs: StageSeedJob[];
  repairSupervision: StageSeedJob | null;
  payloadHashes: Record<string, string>;
  notInstalledByDefault: Array<{ id: string; reason: string }>;
} {
  const jobs = buildStageOpsJobs();
  const repair = buildStageRepairSupervisionJob();
  const includeRepair = params?.includeRepair === true;
  const catalog = includeRepair ? [...jobs, repair] : jobs;
  const payloadHashes: Record<string, string> = {};
  for (const job of catalog) payloadHashes[job.id] = hashStageJob(job);
  return {
    version: STAGE_OPS_SEED_VERSION,
    note: "Repo SOT stage cron seed for Mac Mini lisa-stage. Six core jobs are real bounded HEARTBEAT/digest/Ship/Pull procedures with delivery=none and enabled=false. Repair/GitOps supervision is packaged separately (fail-closed blocked_no_store until durable stores exist). Do not enable schedules or force-run without Principal gate. Tooling: stage-ops-coordinator.ts.",
    hardStops: [...STAGE_HARD_STOPS],
    deliveryDefault: STAGE_OPS_DELIVERY_MODE,
    jobs: includeRepair ? catalog : jobs,
    repairSupervision: repair,
    payloadHashes,
    notInstalledByDefault: includeRepair
      ? []
      : [
          {
            id: "lisa-repair-dispatcher",
            reason:
              "Packaged in repairSupervision; install only via coordinator --include-repair after durable store readiness. Defaults to blocked_no_store fail-closed.",
          },
        ],
  };
}
