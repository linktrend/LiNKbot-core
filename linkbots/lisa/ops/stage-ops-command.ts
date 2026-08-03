/**
 * Stage-command rendering — always use LiNKplatform-staging openclaw.mjs
 * through the lisa-stage env wrapper. Never Projects/openclaw_prime.
 */

export const STAGE_OPS_STAGE_ROOT = "/Users/linktrend/Projects/LiNKplatform-staging/lisa" as const;

export const STAGE_OPS_ENGINE_PATH =
  "/Users/linktrend/Projects/LiNKplatform-staging/openclaw_prime/openclaw.mjs" as const;

export const STAGE_OPS_ENV_WRAPPER =
  "/Users/linktrend/Projects/LiNKplatform-staging/lisa/service-env/ai.openclaw.lisa-stage-env-wrapper.sh" as const;

export const STAGE_OPS_ENV_FILE =
  "/Users/linktrend/Projects/LiNKplatform-staging/lisa/service-env/ai.openclaw.lisa-stage.env" as const;

export const STAGE_OPS_PROFILE = "lisa-stage" as const;

export const FORBIDDEN_STAGE_ENGINE_PATH =
  "/Users/linktrend/Projects/openclaw_prime/openclaw.mjs" as const;

export type StageCommandRenderInput = {
  stageRoot?: string;
  enginePath?: string;
  envWrapper?: string;
  envFile?: string;
  profile?: string;
  /** Args after `openclaw.mjs --profile <profile>` */
  openclawArgs: string[];
};

export function renderStageOpenClawCommand(input: StageCommandRenderInput): string {
  const stageRoot = input.stageRoot ?? STAGE_OPS_STAGE_ROOT;
  const enginePath = input.enginePath ?? STAGE_OPS_ENGINE_PATH;
  const envWrapper = input.envWrapper ?? STAGE_OPS_ENV_WRAPPER;
  const envFile = input.envFile ?? STAGE_OPS_ENV_FILE;
  const profile = input.profile ?? STAGE_OPS_PROFILE;

  if (
    enginePath === FORBIDDEN_STAGE_ENGINE_PATH ||
    enginePath.includes("/Projects/openclaw_prime/")
  ) {
    throw new Error(
      "stage commands must use LiNKplatform-staging/openclaw_prime/openclaw.mjs, never Projects/openclaw_prime",
    );
  }
  if (!enginePath.includes("/LiNKplatform-staging/openclaw_prime/openclaw.mjs")) {
    throw new Error("stage enginePath must resolve under LiNKplatform-staging/openclaw_prime");
  }
  if (!envWrapper.includes("ai.openclaw.lisa-stage-env-wrapper.sh")) {
    throw new Error("stage commands must run through ai.openclaw.lisa-stage-env-wrapper.sh");
  }

  const args = input.openclawArgs.map(shellQuote).join(" ");
  return [
    `OPENCLAW_STATE_DIR=${shellQuote(stageRoot)}`,
    shellQuote(envWrapper),
    shellQuote(envFile),
    "node",
    shellQuote(enginePath),
    "--profile",
    shellQuote(profile),
    args,
  ].join(" ");
}

export function shellQuote(s: string): string {
  return `'${s.replace(/'/g, `'\\''`)}'`;
}

export function validateStageCommandRendering(command: string): string[] {
  const errors: string[] = [];
  if (command.includes(FORBIDDEN_STAGE_ENGINE_PATH)) {
    errors.push("must not reference Projects/openclaw_prime/openclaw.mjs");
  }
  if (!command.includes("LiNKplatform-staging/openclaw_prime/openclaw.mjs")) {
    errors.push("must use LiNKplatform-staging/openclaw_prime/openclaw.mjs");
  }
  if (!command.includes("ai.openclaw.lisa-stage-env-wrapper.sh")) {
    errors.push("must use ai.openclaw.lisa-stage-env-wrapper.sh");
  }
  if (!command.includes("ai.openclaw.lisa-stage.env")) {
    errors.push("must source ai.openclaw.lisa-stage.env via wrapper");
  }
  return errors;
}
