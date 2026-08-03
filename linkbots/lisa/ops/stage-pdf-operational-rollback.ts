/**
 * Operational PDF rollback for lisa-stage execute mode.
 *
 * Atomically backs up a target OpenClaw config, applies tools.deny pdf + removes
 * agents.defaults.pdfModel, validates, restarts ONLY ai.openclaw.lisa-stage via
 * an injected runner, verifies health, and restores the backup if the rollback
 * application itself fails. Default/dry/mock callers must pass temp fixtures —
 * never live Lisa (18790) or stage paths unless Principal-authorized.
 */

import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
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

export const STAGE_PDF_ROLLBACK_SERVICE = "ai.openclaw.lisa-stage" as const;
export const FORBIDDEN_PDF_ROLLBACK_SERVICES = ["ai.openclaw.lisa"] as const;

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
      restoreBackup(configPath, backupPath);
      return baseFail(
        `rollback validation failed: ${postValidation.join("; ") || "pdf deny missing"}`,
        {
          backupPath,
          restoredFromBackup: true,
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
      restoreBackup(configPath, backupPath);
      return baseFail("post-write validation failed; restored backup", {
        backupPath,
        restoredFromBackup: true,
        validationErrors: [
          ...writtenErrors,
          ...(!writtenHealth.pdfToolDenied ? ["pdf tool not denied after write"] : []),
          ...(written.agents?.defaults?.pdfModel ? ["pdfModel still present after write"] : []),
        ],
        restoreReceipt: receipt,
      });
    }

    const restart = await params.runner.restart(service);
    if (!restart.ok) {
      restoreBackup(configPath, backupPath);
      return baseFail(restart.error ?? "service restart failed", {
        backupPath,
        restoredFromBackup: true,
        restarted: false,
        restoreReceipt: receipt,
        pdfToolDenied: true,
        pdfModelRemoved: true,
      });
    }

    const health = await params.runner.health(service);
    if (!health.ok) {
      restoreBackup(configPath, backupPath);
      return baseFail(health.error ?? "service health failed after restart", {
        backupPath,
        restoredFromBackup: true,
        restarted: true,
        healthOk: false,
        restoreReceipt: receipt,
        pdfToolDenied: true,
        pdfModelRemoved: true,
      });
    }

    return {
      ok: true,
      strategy: plan.strategy,
      configPath,
      backupPath,
      restoredFromBackup: false,
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
        restoreBackup(configPath, backupPath);
        return baseFail(err instanceof Error ? err.message : String(err), {
          backupPath,
          restoredFromBackup: true,
        });
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
