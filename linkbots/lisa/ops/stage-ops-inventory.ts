/**
 * Read-only lisa-stage inventory planner / CLI.
 *
 * Prints inspect commands that use the staging engine + profile + state dir
 * without invoking ai.openclaw.lisa-stage-env-wrapper.sh (PACI-writing).
 * Never calls gcloud. Never materializes PACI JWK/PEM files.
 * Prefer OPENCLAW_GATEWAY_TOKEN from process env or the stage env file if
 * present; do not fetch via GSM for inventory.
 */

import { existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  STAGE_OPS_ENGINE_PATH,
  STAGE_OPS_ENV_FILE,
  STAGE_OPS_ENV_WRAPPER,
  STAGE_OPS_INSPECT_GATEWAY_TOKEN_NOTE,
  STAGE_OPS_PACI_ASSERTIONS_MARKER,
  STAGE_OPS_PROFILE,
  STAGE_OPS_STAGE_ROOT,
  renderStageOpenClawInspectCommand,
  shellQuote,
  validateStageInspectCommandRendering,
} from "./stage-ops-command.ts";

export type StageOpsInventoryPlan = {
  mode: "read-only-inspect";
  mutateStage: false;
  enableSchedules: false;
  paciWritingForbidden: true;
  gcloudForbidden: true;
  stageRoot: string;
  enginePath: string;
  envFile: string;
  profile: typeof STAGE_OPS_PROFILE;
  envFilePresent: boolean;
  gatewayTokenGuidance: typeof STAGE_OPS_INSPECT_GATEWAY_TOKEN_NOTE;
  /** Explicit reminder: apply path still uses the PACI-writing wrapper. */
  applyPathReminder: string;
  commands: string[];
  validationErrors: string[];
};

export type StageOpsInventoryPlanInput = {
  stageRoot?: string;
  enginePath?: string;
  envFile?: string;
  profile?: string;
  /** When true, include shell commands (still mutateStage=false). */
  emitCommands?: boolean;
};

/**
 * Plan read-only inventory. Hermetic: does not mkdir, write secrets, or touch
 * secrets/paci-assertions under stageRoot (or anywhere).
 */
export function planStageOpsInventory(
  input: StageOpsInventoryPlanInput = {},
): StageOpsInventoryPlan {
  const stageRoot = input.stageRoot ?? STAGE_OPS_STAGE_ROOT;
  const enginePath = input.enginePath ?? STAGE_OPS_ENGINE_PATH;
  const envFile = input.envFile ?? STAGE_OPS_ENV_FILE;
  const profile = (input.profile ?? STAGE_OPS_PROFILE) as typeof STAGE_OPS_PROFILE;
  const emit = input.emitCommands !== false;

  const commands: string[] = [];
  const validationErrors: string[] = [];

  if (emit) {
    commands.push(`# Read-only lisa-stage inventory — NO ${path.basename(STAGE_OPS_ENV_WRAPPER)}`);
    commands.push(`# ${STAGE_OPS_INSPECT_GATEWAY_TOKEN_NOTE}`);
    commands.push(`# mutateStage=false; never materialize ${STAGE_OPS_PACI_ASSERTIONS_MARKER}`);
    commands.push(`export PATH="/opt/homebrew/opt/node@24/bin:$PATH"`);

    const healthProbe = path.join(stageRoot, "probes", "health.sh");
    commands.push(shellQuote(healthProbe));

    // Optional: document sourcing env file for gateway token IF present.
    // Do not invoke wrapper; do not call gcloud.
    commands.push(
      `# Optional token: if OPENCLAW_GATEWAY_TOKEN is unset and present in env file, ` +
        `source only that file (set -a; . ${shellQuote(envFile)}; set +a) — never gcloud/PACI`,
    );

    const cronList = renderStageOpenClawInspectCommand({
      stageRoot,
      enginePath,
      profile,
      openclawArgs: ["cron", "list", "--json"],
    });
    commands.push(cronList);
    validationErrors.push(...validateStageInspectCommandRendering(cronList));

    commands.push("# Repo plan + payload hashes (no stage mutation; no PACI write)");
    commands.push(
      "node --experimental-strip-types linkbots/lisa/ops/stage-ops-coordinator.ts install --json",
    );

    // Every emitted executable line must stay free of PACI-writing wrapper / gcloud / paci paths.
    for (const cmd of commands) {
      if (cmd.trimStart().startsWith("#")) {
        continue;
      }
      if (cmd.includes("ai.openclaw.lisa-stage-env-wrapper.sh")) {
        validationErrors.push("inventory must not invoke lisa-stage-env-wrapper.sh");
      }
      if (cmd.includes(STAGE_OPS_PACI_ASSERTIONS_MARKER)) {
        validationErrors.push("inventory must not reference paci-assertions paths");
      }
      if (/\bgcloud\b/.test(cmd)) {
        validationErrors.push("inventory must not call gcloud");
      }
    }
  }

  // Deduplicate validation errors while preserving order.
  const seen = new Set<string>();
  const uniqueErrors = validationErrors.filter((e) => {
    if (seen.has(e)) {
      return false;
    }
    seen.add(e);
    return true;
  });

  return {
    mode: "read-only-inspect",
    mutateStage: false,
    enableSchedules: false,
    paciWritingForbidden: true,
    gcloudForbidden: true,
    stageRoot,
    enginePath,
    envFile,
    profile,
    envFilePresent: existsSync(envFile),
    gatewayTokenGuidance: STAGE_OPS_INSPECT_GATEWAY_TOKEN_NOTE,
    applyPathReminder:
      "Runtime/mutation/apply still uses renderStageOpenClawCommand + ai.openclaw.lisa-stage-env-wrapper.sh (PACI-writing).",
    commands,
    validationErrors: uniqueErrors,
  };
}

function printHelp(): void {
  console.log(`Usage:
  node --experimental-strip-types linkbots/lisa/ops/stage-ops-inventory.ts [options]

Options:
  --json             Print machine-readable inventory plan JSON
  --no-emit-commands Omit shell command list (plan metadata only)
  --help             Show this help

Hard stops: read-only inspect only; never invokes lisa-stage-env-wrapper.sh;
never writes ${STAGE_OPS_PACI_ASSERTIONS_MARKER}; never calls gcloud.
${STAGE_OPS_INSPECT_GATEWAY_TOKEN_NOTE}
`);
}

function main(argv: string[]): number {
  const args = new Set(argv.slice(2));
  if (args.has("--help") || args.has("-h")) {
    printHelp();
    return 0;
  }
  const asJson = args.has("--json");
  const emitCommands = !args.has("--no-emit-commands");

  const plan = planStageOpsInventory({ emitCommands });

  if (asJson) {
    console.log(JSON.stringify(plan, null, 2));
  } else {
    console.log(
      `stage-ops-inventory: mode=${plan.mode} mutateStage=${plan.mutateStage} paciWritingForbidden=${plan.paciWritingForbidden}`,
    );
    console.log(`gatewayTokenGuidance: ${plan.gatewayTokenGuidance}`);
    console.log(`applyPathReminder: ${plan.applyPathReminder}`);
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
