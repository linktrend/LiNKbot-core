/**
 * Stage-command rendering for lisa-stage.
 *
 * Two paths:
 * - `renderStageOpenClawCommand` — runtime / mutation / apply. Requires the
 *   lisa-stage env wrapper (GSM inject + PACI JWK/PEM materialization under
 *   secrets/paci-assertions). Use only when Principal-gated apply needs full
 *   runtime prep.
 * - `renderStageOpenClawInspectCommand` — read-only inventory/inspect. Uses
 *   staging engine + profile + OPENCLAW_STATE_DIR only. Never invokes the
 *   PACI-writing env wrapper; never calls gcloud.
 */

export const STAGE_OPS_STAGE_ROOT = "/Users/linktrend/Projects/LiNKplatform-staging/lisa" as const;

export const STAGE_OPS_ENGINE_PATH =
  "/Users/linktrend/Projects/LiNKplatform-staging/openclaw_prime/openclaw.mjs" as const;

export const STAGE_OPS_ENV_WRAPPER =
  "/Users/linktrend/Projects/LiNKplatform-staging/lisa/service-env/ai.openclaw.lisa-stage-env-wrapper.sh" as const;

export const STAGE_OPS_ENV_FILE =
  "/Users/linktrend/Projects/LiNKplatform-staging/lisa/service-env/ai.openclaw.lisa-stage.env" as const;

export const STAGE_OPS_PROFILE = "lisa-stage" as const;

export const STAGE_OPS_PACI_ASSERTIONS_MARKER = "paci-assertions" as const;

export const FORBIDDEN_STAGE_ENGINE_PATH =
  "/Users/linktrend/Projects/openclaw_prime/openclaw.mjs" as const;

/** Inventory/inspect: prefer token already in process or env file; never GSM/gcloud. */
export const STAGE_OPS_INSPECT_GATEWAY_TOKEN_NOTE =
  "Prefer OPENCLAW_GATEWAY_TOKEN from process env or ai.openclaw.lisa-stage.env if present; never call gcloud or the PACI-writing env wrapper for inventory." as const;

export type StageCommandRenderInput = {
  stageRoot?: string;
  enginePath?: string;
  envWrapper?: string;
  envFile?: string;
  profile?: string;
  /** Args after `openclaw.mjs --profile <profile>` */
  openclawArgs: string[];
};

function assertStagingEnginePath(enginePath: string): void {
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
}

/**
 * Runtime / mutation / apply path.
 * Always runs through ai.openclaw.lisa-stage-env-wrapper.sh, which sources the
 * stage env file, may call gcloud for secrets, and ALWAYS materializes PACI
 * JWK/PEM files under secrets/paci-assertions. Do not use for read-only inventory.
 */
export function renderStageOpenClawCommand(input: StageCommandRenderInput): string {
  const stageRoot = input.stageRoot ?? STAGE_OPS_STAGE_ROOT;
  const enginePath = input.enginePath ?? STAGE_OPS_ENGINE_PATH;
  const envWrapper = input.envWrapper ?? STAGE_OPS_ENV_WRAPPER;
  const envFile = input.envFile ?? STAGE_OPS_ENV_FILE;
  const profile = input.profile ?? STAGE_OPS_PROFILE;

  assertStagingEnginePath(enginePath);
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

/**
 * Read-only inventory / inspect path.
 * Staging engine + profile + OPENCLAW_STATE_DIR only — no env wrapper, no gcloud,
 * no PACI assertion writes. Optional gateway token: use process env or values
 * already present in the stage env file; never fetch via GSM.
 */
export function renderStageOpenClawInspectCommand(input: StageCommandRenderInput): string {
  const stageRoot = input.stageRoot ?? STAGE_OPS_STAGE_ROOT;
  const enginePath = input.enginePath ?? STAGE_OPS_ENGINE_PATH;
  const profile = input.profile ?? STAGE_OPS_PROFILE;

  assertStagingEnginePath(enginePath);
  if (input.envWrapper?.includes("ai.openclaw.lisa-stage-env-wrapper.sh")) {
    throw new Error(
      "inspect commands must not use ai.openclaw.lisa-stage-env-wrapper.sh (PACI-writing)",
    );
  }

  const args = input.openclawArgs.map(shellQuote).join(" ");
  return [
    `OPENCLAW_STATE_DIR=${shellQuote(stageRoot)}`,
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

/** Validate runtime/apply command strings (wrapper required). */
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

/** Validate read-only inspect command strings (wrapper + PACI paths forbidden). */
export function validateStageInspectCommandRendering(command: string): string[] {
  const errors: string[] = [];
  if (command.includes(FORBIDDEN_STAGE_ENGINE_PATH)) {
    errors.push("must not reference Projects/openclaw_prime/openclaw.mjs");
  }
  if (!command.includes("LiNKplatform-staging/openclaw_prime/openclaw.mjs")) {
    errors.push("must use LiNKplatform-staging/openclaw_prime/openclaw.mjs");
  }
  if (command.includes("ai.openclaw.lisa-stage-env-wrapper.sh")) {
    errors.push("inspect must not use ai.openclaw.lisa-stage-env-wrapper.sh (PACI-writing)");
  }
  if (command.includes(STAGE_OPS_PACI_ASSERTIONS_MARKER)) {
    errors.push("inspect must not reference paci-assertions paths");
  }
  if (/\bgcloud\b/.test(command)) {
    errors.push("inspect must not call gcloud");
  }
  return errors;
}
