/**
 * Operational PDF rollback for lisa-stage execute mode.
 *
 * Atomically backs up a target OpenClaw config, applies tools.deny pdf + removes
 * agents.defaults.pdfModel, validates, restarts ONLY ai.openclaw.lisa-stage via
 * an injected runner, verifies health, and restores the backup if the rollback
 * application itself fails. Production CLI pins the canonical stage root +
 * exact health URL; tests inject a temporary stage-root policy that production
 * CLI cannot select.
 */

import {
  copyFileSync,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  renameSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import {
  applyStagePdfRollbackInMemory,
  healthCheckStagePdfRouting,
  validateStagePdfRollbackConfig,
  type StagePdfConfigSlice,
  type StagePdfRestoreReceipt,
  type StagePdfRollbackPlan,
} from "./model-routing.openrouter-stage.ts";
import { STAGE_OPS_STAGE_ROOT } from "./stage-ops-command.ts";

export const STAGE_PDF_ROLLBACK_SERVICE = "ai.openclaw.lisa-stage" as const;
export const FORBIDDEN_PDF_ROLLBACK_SERVICES = ["ai.openclaw.lisa"] as const;

/** Exact production health endpoint — no host/port drift, no Lisa 18790. */
export const STAGE_PDF_CANONICAL_HEALTH_URL = "http://127.0.0.1:18791/health" as const;

export type StagePdfLiveRollbackPolicy = {
  /** Absolute stage root (production or test-injected temp). */
  stageRoot: string;
  /** Config file relative to stageRoot (typically openclaw.json). */
  configRelativePath: string;
  /** Exact health URL string equality required. */
  healthUrl: typeof STAGE_PDF_CANONICAL_HEALTH_URL | string;
  serviceLabel: typeof STAGE_PDF_ROLLBACK_SERVICE;
};

/**
 * Production policy — used exclusively by the CLI composition root.
 * Tests must inject a temporary policy object; production CLI never reads a
 * test policy from env.
 */
export const PRODUCTION_STAGE_PDF_LIVE_ROLLBACK_POLICY: StagePdfLiveRollbackPolicy = {
  stageRoot: STAGE_OPS_STAGE_ROOT,
  configRelativePath: "openclaw.json",
  healthUrl: STAGE_PDF_CANONICAL_HEALTH_URL,
  serviceLabel: STAGE_PDF_ROLLBACK_SERVICE,
};

export type StagePdfServiceRunner = {
  restart: (service: typeof STAGE_PDF_ROLLBACK_SERVICE) => Promise<{ ok: boolean; error?: string }>;
  health: (service: typeof STAGE_PDF_ROLLBACK_SERVICE) => Promise<{ ok: boolean; error?: string }>;
};

export type StagePdfOperationalRollbackResult = {
  ok: boolean;
  strategy: StagePdfRollbackPlan["strategy"];
  configPath: string;
  backupPath: string | null;
  restoredFromBackup: boolean;
  /** After restore: whether lisa-stage was restarted on the restored config. */
  recoveryRestarted: boolean;
  /** After restore: whether health check passed on the restored config. */
  recoveryHealthOk: boolean;
  service: typeof STAGE_PDF_ROLLBACK_SERVICE;
  restarted: boolean;
  healthOk: boolean;
  pdfToolDenied: boolean;
  pdfModelRemoved: boolean;
  restoreReceipt: StagePdfRestoreReceipt | null;
  validationErrors: string[];
  error?: string;
};

function assertAllowedService(
  service: string,
): asserts service is typeof STAGE_PDF_ROLLBACK_SERVICE {
  if (service !== STAGE_PDF_ROLLBACK_SERVICE) {
    throw new Error(
      `refusing service restart: only ${STAGE_PDF_ROLLBACK_SERVICE} allowed (got ${service})`,
    );
  }
  for (const forbidden of FORBIDDEN_PDF_ROLLBACK_SERVICES) {
    if (service === forbidden) {
      throw new Error(`refusing live Lisa service mutation: ${forbidden}`);
    }
  }
}

/**
 * Validate exact health URL. Rejects Lisa 18790, non-loopback hosts, path drift,
 * and any string that is not exactly the policy URL.
 */
export function assertExactStagePdfHealthUrl(
  healthUrl: string,
  expected: string = STAGE_PDF_CANONICAL_HEALTH_URL,
): void {
  const trimmed = healthUrl.trim();
  if (trimmed !== expected) {
    throw new Error(`healthUrl must equal exactly ${expected} (got ${trimmed || "<empty>"})`);
  }
  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    throw new Error(`invalid healthUrl: ${trimmed}`);
  }
  if (parsed.protocol !== "http:") {
    throw new Error(`healthUrl must be http (got ${parsed.protocol})`);
  }
  if (parsed.hostname !== "127.0.0.1") {
    throw new Error(`healthUrl host must be 127.0.0.1 (got ${parsed.hostname})`);
  }
  if (parsed.port !== "18791") {
    throw new Error(`healthUrl port must be 18791 (got ${parsed.port || "default"})`);
  }
  if (parsed.pathname !== "/health") {
    throw new Error(`healthUrl path must be /health (got ${parsed.pathname})`);
  }
  if (trimmed.includes(":18790")) {
    throw new Error("refusing live Lisa health port 18790");
  }
}

/**
 * Resolve and pin config path under the policy stage root.
 * Hard-pins a regular file: rejects any symlink (even when the target stays
 * inside the stage root), alternate roots, and missing files.
 */
export function resolvePinnedStagePdfConfigPath(policy: StagePdfLiveRollbackPolicy): string {
  if (policy.serviceLabel !== STAGE_PDF_ROLLBACK_SERVICE) {
    throw new Error(`refusing arbitrary runner label: only ${STAGE_PDF_ROLLBACK_SERVICE} allowed`);
  }
  const stageRootAbs = path.resolve(policy.stageRoot);
  const candidate = path.resolve(stageRootAbs, policy.configRelativePath);
  if (!existsSync(stageRootAbs)) {
    throw new Error(`stage root missing: ${stageRootAbs}`);
  }
  if (!existsSync(candidate)) {
    throw new Error(`stage config missing: ${candidate}`);
  }
  // Hard-pin: openclaw.json must be a regular file. Any symlink is refused —
  // including targets that remain inside the stage root.
  if (lstatSync(candidate).isSymbolicLink()) {
    throw new Error(
      `refusing symlink config path: ${candidate} must be a regular file (hard-pin; no symlink)`,
    );
  }
  const realRoot = realpathSync(stageRootAbs);
  const realConfig = realpathSync(candidate);
  if (realConfig !== realRoot && !realConfig.startsWith(`${realRoot}${path.sep}`)) {
    throw new Error(`refusing config outside stage root: ${realConfig} not under ${realRoot}`);
  }
  // Also reject if the logical candidate escapes via .. segments before realpath.
  if (candidate !== realRoot && !candidate.startsWith(`${stageRootAbs}${path.sep}`)) {
    throw new Error(`refusing alternate config path outside stage root: ${candidate}`);
  }
  return realConfig;
}

function readJsonObject(configPath: string): Record<string, unknown> {
  const raw = JSON.parse(readFileSync(configPath, "utf8")) as unknown;
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw new Error(`config is not a JSON object: ${configPath}`);
  }
  return raw as Record<string, unknown>;
}

function asConfigSlice(cfg: Record<string, unknown>): StagePdfConfigSlice {
  return cfg as StagePdfConfigSlice;
}

function atomicWriteJson(configPath: string, value: unknown): void {
  mkdirSync(path.dirname(configPath), { recursive: true });
  const tmpPath = `${configPath}.tmp.${process.pid}.${Date.now()}`;
  writeFileSync(tmpPath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
  renameSync(tmpPath, configPath);
}

function backupConfig(configPath: string, nowIso: string): string {
  const stamp = nowIso.replace(/[:.]/g, "-");
  const backupPath = `${configPath}.pdf-rollback-bak.${stamp}`;
  copyFileSync(configPath, backupPath);
  return backupPath;
}

function restoreBackup(configPath: string, backupPath: string): void {
  copyFileSync(backupPath, configPath);
}

/**
 * After a failed mutate/restart/health path: restore backup, then restart and
 * health-check the restored config. Fail loudly if recovery restart/health fails.
 */
async function recoverRestoredConfig(params: {
  configPath: string;
  backupPath: string;
  runner: StagePdfServiceRunner;
  service: typeof STAGE_PDF_ROLLBACK_SERVICE;
}): Promise<{ recoveryRestarted: boolean; recoveryHealthOk: boolean; error?: string }> {
  restoreBackup(params.configPath, params.backupPath);
  const recoveryRestart = await params.runner.restart(params.service);
  if (!recoveryRestart.ok) {
    return {
      recoveryRestarted: false,
      recoveryHealthOk: false,
      error: `recovery restart failed after restore: ${
        recoveryRestart.error ?? "service restart failed"
      }`,
    };
  }
  const recoveryHealth = await params.runner.health(params.service);
  if (!recoveryHealth.ok) {
    return {
      recoveryRestarted: true,
      recoveryHealthOk: false,
      error: `recovery health failed after restore: ${
        recoveryHealth.error ?? "service health failed"
      }`,
    };
  }
  return { recoveryRestarted: true, recoveryHealthOk: true };
}

/**
 * Stage-only runner: restarts ONLY ai.openclaw.lisa-stage and health-checks
 * an exact pinned URL. Does not target live Lisa. Inject restartImpl in tests;
 * CLI packages the real launchctl kickstart for Principal-gated execute only.
 */
export function createStagePdfLisaStageRunner(params: {
  healthUrl: string;
  /** Required expected URL — defaults to canonical production health. */
  expectedHealthUrl?: string;
  restartImpl?: (
    service: typeof STAGE_PDF_ROLLBACK_SERVICE,
  ) => Promise<{ ok: boolean; error?: string }>;
  healthFetch?: typeof fetch;
}): StagePdfServiceRunner {
  const expected = params.expectedHealthUrl ?? STAGE_PDF_CANONICAL_HEALTH_URL;
  assertExactStagePdfHealthUrl(params.healthUrl, expected);
  const healthUrl = params.healthUrl.trim();

  return {
    async restart(service) {
      assertAllowedService(service);
      if (params.restartImpl) {
        return params.restartImpl(service);
      }
      // Packaged launchctl path — Principal-gated CLI only; tests inject restartImpl.
      const { spawnSync } = await import("node:child_process");
      const result = spawnSync(
        "launchctl",
        ["kickstart", "-k", `gui/${process.getuid?.() ?? 501}/${service}`],
        { encoding: "utf8" },
      );
      if (result.status !== 0) {
        return {
          ok: false,
          error:
            result.stderr?.trim() || result.stdout?.trim() || `launchctl_exit_${result.status}`,
        };
      }
      return { ok: true };
    },
    async health(service) {
      assertAllowedService(service);
      try {
        const res = await (params.healthFetch ?? fetch)(healthUrl);
        if (!res.ok) {
          return { ok: false, error: `health_http_${res.status}` };
        }
        return { ok: true };
      } catch (err) {
        return {
          ok: false,
          error: err instanceof Error ? err.message : "health_fetch_failed",
        };
      }
    },
  };
}

/**
 * Apply operational PDF rollback to a real config file path (tests: temp fixture).
 * Never hardcodes stage/live paths; caller supplies configPath + runner.
 */
export async function applyStagePdfOperationalRollback(params: {
  configPath: string;
  runner: StagePdfServiceRunner;
  nowIso?: string;
  service?: typeof STAGE_PDF_ROLLBACK_SERVICE;
}): Promise<StagePdfOperationalRollbackResult> {
  const service = params.service ?? STAGE_PDF_ROLLBACK_SERVICE;
  assertAllowedService(service);
  const nowIso = params.nowIso ?? new Date().toISOString();
  const configPath = path.resolve(params.configPath);

  const baseFail = (error: string, partial?: Partial<StagePdfOperationalRollbackResult>) =>
    ({
      ok: false,
      strategy: "tools_deny_pdf" as const,
      configPath,
      backupPath: null,
      restoredFromBackup: false,
      recoveryRestarted: false,
      recoveryHealthOk: false,
      service,
      restarted: false,
      healthOk: false,
      pdfToolDenied: false,
      pdfModelRemoved: false,
      restoreReceipt: null,
      validationErrors: [],
      error,
      ...partial,
    }) satisfies StagePdfOperationalRollbackResult;

  if (!existsSync(configPath)) {
    return baseFail(`ENOENT: config missing: ${configPath}`);
  }

  let backupPath: string | null = null;
  let wroteMutated = false;

  try {
    backupPath = backupConfig(configPath, nowIso);
    const prior = readJsonObject(configPath);
    const { next, receipt, plan, validationErrors } = applyStagePdfRollbackInMemory(
      asConfigSlice(prior),
      nowIso,
    );
    const postValidation = [
      ...validationErrors,
      ...validateStagePdfRollbackConfig(next),
      ...(() => {
        const health = healthCheckStagePdfRouting(next);
        return health.ok ? [] : health.errors;
      })(),
    ].filter(Boolean);

    if (postValidation.length > 0 || !(next.tools?.deny ?? []).includes("pdf")) {
      const recovery = await recoverRestoredConfig({
        configPath,
        backupPath,
        runner: params.runner,
        service,
      });
      return baseFail(
        recovery.error
          ? `rollback validation failed and recovery failed: ${postValidation.join("; ") || "pdf deny missing"}; ${recovery.error}`
          : `rollback validation failed: ${postValidation.join("; ") || "pdf deny missing"}`,
        {
          backupPath,
          restoredFromBackup: true,
          recoveryRestarted: recovery.recoveryRestarted,
          recoveryHealthOk: recovery.recoveryHealthOk,
          validationErrors: postValidation,
          restoreReceipt: receipt,
        },
      );
    }

    atomicWriteJson(configPath, next);
    wroteMutated = true;

    const written = asConfigSlice(readJsonObject(configPath));
    const writtenErrors = validateStagePdfRollbackConfig(written);
    const writtenHealth = healthCheckStagePdfRouting(written);
    if (
      writtenErrors.length > 0 ||
      !writtenHealth.pdfToolDenied ||
      written.agents?.defaults?.pdfModel
    ) {
      const recovery = await recoverRestoredConfig({
        configPath,
        backupPath,
        runner: params.runner,
        service,
      });
      return baseFail(
        recovery.error
          ? `post-write validation failed and recovery failed: ${recovery.error}`
          : "post-write validation failed; restored backup",
        {
          backupPath,
          restoredFromBackup: true,
          recoveryRestarted: recovery.recoveryRestarted,
          recoveryHealthOk: recovery.recoveryHealthOk,
          validationErrors: [
            ...writtenErrors,
            ...(!writtenHealth.pdfToolDenied ? ["pdf tool not denied after write"] : []),
            ...(written.agents?.defaults?.pdfModel ? ["pdfModel still present after write"] : []),
          ],
          restoreReceipt: receipt,
        },
      );
    }

    const restart = await params.runner.restart(service);
    if (!restart.ok) {
      const recovery = await recoverRestoredConfig({
        configPath,
        backupPath,
        runner: params.runner,
        service,
      });
      return baseFail(
        recovery.error
          ? `${restart.error ?? "service restart failed"}; ${recovery.error}`
          : (restart.error ?? "service restart failed"),
        {
          backupPath,
          restoredFromBackup: true,
          recoveryRestarted: recovery.recoveryRestarted,
          recoveryHealthOk: recovery.recoveryHealthOk,
          restarted: false,
          restoreReceipt: receipt,
          pdfToolDenied: false,
          pdfModelRemoved: false,
        },
      );
    }

    const health = await params.runner.health(service);
    if (!health.ok) {
      const recovery = await recoverRestoredConfig({
        configPath,
        backupPath,
        runner: params.runner,
        service,
      });
      return baseFail(
        recovery.error
          ? `${health.error ?? "service health failed after restart"}; ${recovery.error}`
          : (health.error ?? "service health failed after restart"),
        {
          backupPath,
          restoredFromBackup: true,
          recoveryRestarted: recovery.recoveryRestarted,
          recoveryHealthOk: recovery.recoveryHealthOk,
          restarted: true,
          healthOk: false,
          restoreReceipt: receipt,
          pdfToolDenied: false,
          pdfModelRemoved: false,
        },
      );
    }

    return {
      ok: true,
      strategy: plan.strategy,
      configPath,
      backupPath,
      restoredFromBackup: false,
      recoveryRestarted: false,
      recoveryHealthOk: false,
      service,
      restarted: true,
      healthOk: true,
      pdfToolDenied: true,
      pdfModelRemoved: written.agents?.defaults?.pdfModel === undefined,
      restoreReceipt: receipt,
      validationErrors: [],
    };
  } catch (err) {
    if (backupPath && (wroteMutated || existsSync(backupPath))) {
      try {
        const recovery = await recoverRestoredConfig({
          configPath,
          backupPath,
          runner: params.runner,
          service,
        });
        return baseFail(
          recovery.error
            ? `${err instanceof Error ? err.message : String(err)}; ${recovery.error}`
            : err instanceof Error
              ? err.message
              : String(err),
          {
            backupPath,
            restoredFromBackup: true,
            recoveryRestarted: recovery.recoveryRestarted,
            recoveryHealthOk: recovery.recoveryHealthOk,
          },
        );
      } catch (restoreErr) {
        return baseFail(
          `${err instanceof Error ? err.message : String(err)}; restore also failed: ${
            restoreErr instanceof Error ? restoreErr.message : String(restoreErr)
          }`,
          { backupPath, restoredFromBackup: false },
        );
      }
    }
    return baseFail(err instanceof Error ? err.message : String(err), { backupPath });
  }
}

/** Write a temp OpenClaw-shaped config fixture for mock/dry rollback proofs (never stage). */
export function writeStagePdfRollbackFixtureConfig(params: {
  targetPath: string;
  slice: StagePdfConfigSlice;
}): string {
  mkdirSync(path.dirname(params.targetPath), { recursive: true });
  atomicWriteJson(params.targetPath, params.slice);
  return params.targetPath;
}
