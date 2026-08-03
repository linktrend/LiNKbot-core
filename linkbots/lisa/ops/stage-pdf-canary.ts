/**
 * Stage-only MiniMax PDF canary (OpenRouter-only).
 *
 * Default mode is package/dry-run: builds a synthetic local PDF, validates
 * routing hard stops, writes a machine-readable receipt, and documents rollback.
 * Execute mode builds a real OpenRouter PDF chat request and invokes an
 * injectable transport (mock in tests; sealed fetch under Principal gate). Never
 * prints secrets.
 *
 * Mock / injected transport success is `mock_verified` only — never `executed`
 * and never earns firstProductionProofEarned. Injected transports cannot
 * self-declare production proof. Only the sealed OpenRouter HTTP adapter
 * (createOpenRouterFetchTransport) using the stage credential path may set
 * proof_kind=openrouter_http_production. Execute requires real
 * operationalRollback wiring (configPath + stage-only runner); fail closed
 * otherwise — never silent temp fixture / no-op runner defaults.
 */

import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  applyStagePdfRollbackInMemory,
  buildStagePdfModelDisableFragment,
  LISA_OPENROUTER_ONLY_STAGE_ROUTING,
  validateOpenRouterOnlyStageRouting,
  type StagePdfConfigSlice,
  type StagePdfRestoreReceipt,
  type StagePdfRollbackPlan,
} from "./model-routing.openrouter-stage.ts";
import {
  applyStagePdfOperationalRollback,
  createStagePdfLisaStageRunner,
  type StagePdfOperationalRollbackResult,
  type StagePdfServiceRunner,
} from "./stage-pdf-operational-rollback.ts";

export const STAGE_PDF_CANARY_MODEL = "openrouter/minimax/minimax-m3" as const;
export const STAGE_PDF_CANARY_WIRE_MODEL = "minimax/minimax-m3" as const;
export const STAGE_PDF_CANARY_CREDENTIAL = "OPENROUTER_API_KEY" as const;
export const STAGE_PDF_CANARY_ENDPOINT = "https://openrouter.ai/api/v1/chat/completions" as const;

export type StagePdfCanaryMode = "package" | "dry-run" | "execute" | "rollback-plan";

export type StagePdfOpenRouterRequest = {
  endpoint: typeof STAGE_PDF_CANARY_ENDPOINT;
  modelRef: typeof STAGE_PDF_CANARY_MODEL;
  wireModel: typeof STAGE_PDF_CANARY_WIRE_MODEL;
  openRouterOnly: true;
  credentialName: typeof STAGE_PDF_CANARY_CREDENTIAL;
  /** Authorization header uses env credential; value never stored here. */
  pdf: {
    filename: string;
    sha256: string;
    bytes: number;
    attached: true;
    encoding: "data_url_base64";
    mimeType: "application/pdf";
  };
  body: {
    model: typeof STAGE_PDF_CANARY_WIRE_MODEL;
    stream: false;
    messages: Array<{
      role: "user";
      content: Array<
        | { type: "text"; text: string }
        | {
            type: "file";
            file: { filename: string; file_data: string };
          }
      >;
    }>;
  };
};

export type StagePdfTransportResult = {
  ok: boolean;
  statusCode?: number;
  /** Non-secret response excerpt for verification. */
  assistantText?: string;
  errorClass?: string;
  errorMessage?: string;
};

export type StagePdfProofKind = "none" | "mock_transport" | "openrouter_http_production";

/**
 * Injectable transport surface — send only. Callers must NOT attach a
 * production proofKind; executeStagePdfCanary ignores any spoofed claim and
 * derives mock_verified for all non-sealed transports.
 */
export type StagePdfCanaryTransport = {
  send: (
    request: StagePdfOpenRouterRequest,
    params: { apiKeyPresent: boolean },
  ) => Promise<StagePdfTransportResult>;
};

/** Module-private brand — not Symbol.for; injectors cannot mint production proof. */
const OPENROUTER_HTTP_PRODUCTION_BRAND = Symbol("lisa.stage.pdf.openrouter_http_production");

type SealedOpenRouterHttpProductionTransport = StagePdfCanaryTransport & {
  readonly [OPENROUTER_HTTP_PRODUCTION_BRAND]: true;
};

function isSealedOpenRouterHttpProduction(
  transport: StagePdfCanaryTransport,
): transport is SealedOpenRouterHttpProductionTransport {
  return (
    typeof transport === "object" &&
    transport !== null &&
    (transport as SealedOpenRouterHttpProductionTransport)[OPENROUTER_HTTP_PRODUCTION_BRAND] ===
      true
  );
}

export type StagePdfCanaryReceipt = {
  receiptType: "lisa_stage_minimax_pdf_canary_v1";
  mode: StagePdfCanaryMode;
  status:
    | "packaged"
    | "dry_run_ready"
    | "blocked_no_execute_gate"
    | "blocked_routing"
    | "blocked_no_transport"
    | "blocked_no_rollback_wiring"
    | "rollback_planned"
    | "mock_verified"
    | "executed"
    | "execute_failed_rolled_back";
  timestamp: string;
  modelRef: typeof STAGE_PDF_CANARY_MODEL;
  capabilityStatus: "approved_unverified";
  proof_kind: StagePdfProofKind;
  credentialPosture: {
    mode: "openrouter_only";
    credentialName: typeof STAGE_PDF_CANARY_CREDENTIAL;
    storage: "process_env_only";
    secretPrinted: false;
    directProviderKeysForbidden: true;
  };
  delivery: { mode: "none"; externalDelivery: false };
  syntheticPdf: {
    path: string;
    sha256: string;
    bytes: number;
    contentsClass: "synthetic_non_secret";
  };
  hardStops: {
    liveMutationAllowed: false;
    paidSpendEnablementAllowed: false;
    liveLisaTouched: false;
    alternatePaidDocumentRoutingAllowed: false;
  };
  routingErrors: string[];
  spend: false | { attempted: true; transportCalled: true; note: string };
  request?: {
    endpoint: typeof STAGE_PDF_CANARY_ENDPOINT;
    modelRef: typeof STAGE_PDF_CANARY_MODEL;
    wireModel: typeof STAGE_PDF_CANARY_WIRE_MODEL;
    openRouterOnly: true;
    pdfAttached: true;
    pdfSha256: string;
  };
  transport?: {
    called: boolean;
    ok: boolean;
    statusCode?: number;
    assistantTextPresent: boolean;
    errorClass?: string;
  };
  rollback: ReturnType<typeof buildStagePdfModelDisableFragment> & {
    probeHint: string;
  };
  rollbackApplied?: {
    strategy: StagePdfRollbackPlan["strategy"];
    applied: boolean;
    scope: "operational_file" | "in_memory_fixture";
    restoreReceipt: StagePdfRestoreReceipt;
    pdfToolDenied: boolean;
    pdfModelRemoved: boolean;
    operational?: StagePdfOperationalRollbackResult;
  };
  firstProductionProofEarned: boolean;
  paidSpendEnablementAllowed: false;
};

/** Minimal valid PDF bytes (non-secret synthetic document). */
export function buildSyntheticStagePdfBytes(): Buffer {
  const body =
    "%PDF-1.1\n" +
    "1 0 obj<< /Type /Catalog /Pages 2 0 R >>endobj\n" +
    "2 0 obj<< /Type /Pages /Kids [3 0 R] /Count 1 >>endobj\n" +
    "3 0 obj<< /Type /Page /Parent 2 0 R /MediaBox [0 0 200 200] /Contents 4 0 R /Resources<< /Font<< /F1 5 0 R >> >> >>endobj\n" +
    "4 0 obj<< /Length 55 >>stream\n" +
    "BT /F1 12 Tf 20 100 Td (OpenClaw stage PDF canary) Tj ET\n" +
    "endstream\nendobj\n" +
    "5 0 obj<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>endobj\n" +
    "xref\n0 6\n0000000000 65535 f \n" +
    "trailer<< /Size 6 /Root 1 0 R >>\nstartxref\n0\n%%EOF\n";
  return Buffer.from(body, "utf8");
}

export function writeSyntheticStagePdf(targetPath: string): {
  path: string;
  sha256: string;
  bytes: number;
} {
  mkdirSync(path.dirname(targetPath), { recursive: true });
  const bytes = buildSyntheticStagePdfBytes();
  writeFileSync(targetPath, bytes);
  return {
    path: targetPath,
    sha256: createHash("sha256").update(bytes).digest("hex"),
    bytes: bytes.length,
  };
}

export function hasOpenRouterCredentialProcessOnly(env: NodeJS.ProcessEnv = process.env): {
  present: boolean;
  credentialName: typeof STAGE_PDF_CANARY_CREDENTIAL;
} {
  const present = Boolean(env.OPENROUTER_API_KEY && env.OPENROUTER_API_KEY.length > 0);
  return { present, credentialName: STAGE_PDF_CANARY_CREDENTIAL };
}

export function buildStagePdfOpenRouterRequest(params: {
  pdfPath: string;
  pdfSha256: string;
  pdfBytes: number;
  pdfBuffer: Buffer;
}): StagePdfOpenRouterRequest {
  const filename = path.basename(params.pdfPath);
  const dataUrl = `data:application/pdf;base64,${params.pdfBuffer.toString("base64")}`;
  return {
    endpoint: STAGE_PDF_CANARY_ENDPOINT,
    modelRef: STAGE_PDF_CANARY_MODEL,
    wireModel: STAGE_PDF_CANARY_WIRE_MODEL,
    openRouterOnly: true,
    credentialName: STAGE_PDF_CANARY_CREDENTIAL,
    pdf: {
      filename,
      sha256: params.pdfSha256,
      bytes: params.pdfBytes,
      attached: true,
      encoding: "data_url_base64",
      mimeType: "application/pdf",
    },
    body: {
      model: STAGE_PDF_CANARY_WIRE_MODEL,
      stream: false,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Stage PDF canary: reply with exactly STAGE_PDF_CANARY_OK if you can see the attached PDF text mentioning OpenClaw.",
            },
            {
              type: "file",
              file: {
                filename,
                file_data: dataUrl,
              },
            },
          ],
        },
      ],
    },
  };
}

export function verifyStagePdfTransportResponse(result: StagePdfTransportResult): {
  ok: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  if (!result.ok) {
    errors.push(result.errorMessage ?? result.errorClass ?? "transport_not_ok");
  }
  if (result.statusCode !== undefined && (result.statusCode < 200 || result.statusCode >= 300)) {
    errors.push(`http_status_${result.statusCode}`);
  }
  const text = (result.assistantText ?? "").trim();
  if (!text) {
    errors.push("empty_assistant_text");
  }
  return { ok: errors.length === 0, errors };
}

/** Real OpenRouter fetch transport — Principal-gated spend path. Never logs the API key. */
export function createOpenRouterFetchTransport(
  fetchImpl: typeof fetch = fetch,
): StagePdfCanaryTransport {
  const transport: SealedOpenRouterHttpProductionTransport = {
    [OPENROUTER_HTTP_PRODUCTION_BRAND]: true,
    async send(request, params) {
      if (!params.apiKeyPresent) {
        return {
          ok: false,
          errorClass: "missing_credential",
          errorMessage: "OPENROUTER_API_KEY absent from process env",
        };
      }
      const apiKey = process.env.OPENROUTER_API_KEY;
      if (!apiKey) {
        return {
          ok: false,
          errorClass: "missing_credential",
          errorMessage: "OPENROUTER_API_KEY absent from process env",
        };
      }
      try {
        const res = await fetchImpl(request.endpoint, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://openclaw.ai",
            "X-Title": "OpenClaw lisa-stage PDF canary",
          },
          body: JSON.stringify(request.body),
        });
        const rawText = await res.text();
        let assistantText: string | undefined;
        try {
          const parsed = JSON.parse(rawText) as {
            choices?: Array<{ message?: { content?: string } }>;
            error?: { message?: string };
          };
          assistantText = parsed.choices?.[0]?.message?.content;
          if (!res.ok) {
            return {
              ok: false,
              statusCode: res.status,
              assistantText,
              errorClass: "http_error",
              errorMessage: parsed.error?.message ?? `http_${res.status}`,
            };
          }
        } catch {
          return {
            ok: false,
            statusCode: res.status,
            errorClass: "invalid_json",
            errorMessage: "response_not_json",
          };
        }
        return {
          ok: res.ok,
          statusCode: res.status,
          assistantText,
        };
      } catch (err) {
        return {
          ok: false,
          errorClass: "transport_exception",
          errorMessage: err instanceof Error ? err.name : "unknown_error",
        };
      }
    },
  };
  return transport;
}

function stagePdfConfigSliceForRollback(): StagePdfConfigSlice {
  const refs = LISA_OPENROUTER_ONLY_STAGE_ROUTING.agents.defaults;
  return {
    agents: {
      defaults: {
        model: {
          primary: refs.model.primary,
          fallbacks: [...refs.model.fallbacks],
        },
        imageModel: { primary: refs.imageModel.primary },
        pdfModel: { primary: refs.pdfModel.primary },
      },
    },
    tools: { deny: [] },
  };
}

function applyInMemoryFailureRollback(
  nowIso: string,
): NonNullable<StagePdfCanaryReceipt["rollbackApplied"]> {
  const { next, receipt, plan } = applyStagePdfRollbackInMemory(
    stagePdfConfigSliceForRollback(),
    nowIso,
  );
  return {
    strategy: plan.strategy,
    applied: true,
    scope: "in_memory_fixture",
    restoreReceipt: receipt,
    pdfToolDenied: (next.tools?.deny ?? []).includes("pdf"),
    pdfModelRemoved: next.agents?.defaults?.pdfModel === undefined,
  };
}

export type StagePdfOperationalRollbackWiring = {
  configPath: string;
  runner: StagePdfServiceRunner;
};

/**
 * Resolve Principal-gated live execute rollback wiring from env.
 * Fail closed when configPath or healthUrl is missing — never invent temp/no-op.
 */
export function resolveLiveExecuteOperationalRollback(
  env: NodeJS.ProcessEnv = process.env,
): { ok: true; wiring: StagePdfOperationalRollbackWiring } | { ok: false; error: string } {
  const configPath = (env.STAGE_PDF_CANARY_CONFIG_PATH ?? "").trim();
  const healthUrl = (env.STAGE_PDF_CANARY_HEALTH_URL ?? "").trim();
  if (!configPath) {
    return {
      ok: false,
      error: "STAGE_PDF_CANARY_CONFIG_PATH required for live execute operational rollback",
    };
  }
  if (!healthUrl) {
    return {
      ok: false,
      error: "STAGE_PDF_CANARY_HEALTH_URL required for live execute operational rollback",
    };
  }
  if (!existsSync(configPath)) {
    return { ok: false, error: `STAGE_PDF_CANARY_CONFIG_PATH missing on disk: ${configPath}` };
  }
  try {
    const runner = createStagePdfLisaStageRunner({ healthUrl });
    return { ok: true, wiring: { configPath, runner } };
  } catch (err) {
    return {
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

async function applyExecuteFailureRollback(params: {
  nowIso: string;
  operational: StagePdfOperationalRollbackWiring;
}): Promise<NonNullable<StagePdfCanaryReceipt["rollbackApplied"]>> {
  const operational = await applyStagePdfOperationalRollback({
    configPath: params.operational.configPath,
    runner: params.operational.runner,
    nowIso: params.nowIso,
  });

  if (!operational.ok) {
    // Truthful receipt: operational procedure ran but did not leave deny-pdf applied.
    const fallback = applyInMemoryFailureRollback(params.nowIso);
    return {
      strategy: operational.strategy,
      applied: false,
      scope: "operational_file",
      restoreReceipt: operational.restoreReceipt ?? fallback.restoreReceipt,
      pdfToolDenied: operational.pdfToolDenied,
      pdfModelRemoved: operational.pdfModelRemoved,
      operational,
    };
  }

  if (!operational.restoreReceipt) {
    const fallback = applyInMemoryFailureRollback(params.nowIso);
    return {
      ...fallback,
      applied: false,
      scope: "operational_file",
      operational,
    };
  }

  return {
    strategy: operational.strategy,
    applied: true,
    scope: "operational_file",
    restoreReceipt: operational.restoreReceipt,
    pdfToolDenied: operational.pdfToolDenied,
    pdfModelRemoved: operational.pdfModelRemoved,
    operational,
  };
}

function baseReceiptFields(params: {
  mode: StagePdfCanaryMode;
  pdf: { path: string; sha256: string; bytes: number };
  routingErrors: string[];
  nowIso: string;
  proofKind?: StagePdfProofKind;
}): Pick<
  StagePdfCanaryReceipt,
  | "receiptType"
  | "mode"
  | "timestamp"
  | "modelRef"
  | "capabilityStatus"
  | "proof_kind"
  | "credentialPosture"
  | "delivery"
  | "syntheticPdf"
  | "hardStops"
  | "routingErrors"
  | "rollback"
  | "paidSpendEnablementAllowed"
> {
  return {
    receiptType: "lisa_stage_minimax_pdf_canary_v1",
    mode: params.mode,
    timestamp: params.nowIso,
    modelRef: STAGE_PDF_CANARY_MODEL,
    capabilityStatus: "approved_unverified",
    proof_kind: params.proofKind ?? "none",
    credentialPosture: {
      mode: "openrouter_only",
      credentialName: STAGE_PDF_CANARY_CREDENTIAL,
      storage: "process_env_only",
      secretPrinted: false,
      directProviderKeysForbidden: true,
    },
    delivery: { mode: "none", externalDelivery: false },
    syntheticPdf: {
      path: params.pdf.path,
      sha256: params.pdf.sha256,
      bytes: params.pdf.bytes,
      contentsClass: "synthetic_non_secret",
    },
    hardStops: {
      liveMutationAllowed: false,
      paidSpendEnablementAllowed: false,
      liveLisaTouched: false,
      alternatePaidDocumentRoutingAllowed: false,
    },
    paidSpendEnablementAllowed: false,
    routingErrors: params.routingErrors,
    rollback: {
      ...buildStagePdfModelDisableFragment(),
      probeHint:
        "Repo plan: tools.deny pdf + remove agents.defaults.pdfModel (never empty primary). Execute failure applies operational file rollback to an injected/temp config + ai.openclaw.lisa-stage runner only.",
    },
  };
}

function writeReceipt(outputDir: string, receipt: StagePdfCanaryReceipt): StagePdfCanaryReceipt {
  mkdirSync(outputDir, { recursive: true });
  const receiptPath = path.join(outputDir, "pdf-canary-receipt.json");
  writeFileSync(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`, "utf8");
  return receipt;
}

/**
 * Package / dry-run / rollback-plan (sync). Execute without transport stays blocked.
 * For real or mock execute, use {@link executeStagePdfCanary}.
 */
export function planStagePdfCanary(params: {
  mode: StagePdfCanaryMode;
  outputDir: string;
  executeGateEnv?: NodeJS.ProcessEnv;
  nowIso?: string;
}): StagePdfCanaryReceipt {
  const routingErrors = validateOpenRouterOnlyStageRouting();
  const pdfPath = path.join(params.outputDir, "synthetic-stage-pdf-canary.pdf");
  const pdf = writeSyntheticStagePdf(pdfPath);
  const nowIso = params.nowIso ?? new Date().toISOString();
  const cred = hasOpenRouterCredentialProcessOnly(params.executeGateEnv ?? process.env);
  const executeGateOpen =
    params.mode === "execute" &&
    params.executeGateEnv?.STAGE_PDF_CANARY_EXECUTE === "1" &&
    cred.present &&
    routingErrors.length === 0 &&
    LISA_OPENROUTER_ONLY_STAGE_ROUTING.paidSpendEnablementAllowed === false;

  let status: StagePdfCanaryReceipt["status"] = "packaged";
  const spend: StagePdfCanaryReceipt["spend"] = false;

  if (routingErrors.length > 0) {
    status = "blocked_routing";
  } else if (params.mode === "rollback-plan") {
    status = "rollback_planned";
  } else if (params.mode === "dry-run") {
    status = "dry_run_ready";
  } else if (params.mode === "execute") {
    // Sync planner never invokes transport — cannot claim executed.
    status = executeGateOpen ? "blocked_no_transport" : "blocked_no_execute_gate";
  } else {
    status = "packaged";
  }

  return writeReceipt(params.outputDir, {
    ...baseReceiptFields({
      mode: params.mode,
      pdf,
      routingErrors,
      nowIso,
    }),
    status,
    spend,
    firstProductionProofEarned: false,
  });
}

/** Execute path: builds OpenRouter PDF request, calls transport, verifies, rolls back on failure. */
export async function executeStagePdfCanary(params: {
  outputDir: string;
  executeGateEnv?: NodeJS.ProcessEnv;
  nowIso?: string;
  transport?: StagePdfCanaryTransport;
  /** When true and gates pass with no transport, use createOpenRouterFetchTransport(). */
  allowLiveFetchTransport?: boolean;
  /**
   * Required for execute. Live CLI supplies configPath + lisa-stage-only runner
   * with health URL. Tests may inject temp fixture + fake runner. No silent
   * temp/no-op defaults.
   */
  operationalRollback?: StagePdfOperationalRollbackWiring;
}): Promise<StagePdfCanaryReceipt> {
  const routingErrors = validateOpenRouterOnlyStageRouting();
  const pdfPath = path.join(params.outputDir, "synthetic-stage-pdf-canary.pdf");
  const pdfMeta = writeSyntheticStagePdf(pdfPath);
  const pdfBuffer = readFileSync(pdfPath);
  const nowIso = params.nowIso ?? new Date().toISOString();
  const env = params.executeGateEnv ?? process.env;
  const cred = hasOpenRouterCredentialProcessOnly(env);
  const executeAllowed =
    env.STAGE_PDF_CANARY_EXECUTE === "1" &&
    cred.present &&
    routingErrors.length === 0 &&
    LISA_OPENROUTER_ONLY_STAGE_ROUTING.paidSpendEnablementAllowed === false;

  const transport =
    params.transport ??
    (params.allowLiveFetchTransport ? createOpenRouterFetchTransport() : undefined);
  const sealedProduction = transport ? isSealedOpenRouterHttpProduction(transport) : false;
  const proofKind: StagePdfProofKind = transport
    ? sealedProduction
      ? "openrouter_http_production"
      : "mock_transport"
    : "none";

  const base = baseReceiptFields({
    mode: "execute",
    pdf: pdfMeta,
    routingErrors,
    nowIso,
    proofKind,
  });

  if (routingErrors.length > 0) {
    return writeReceipt(params.outputDir, {
      ...base,
      status: "blocked_routing",
      spend: false,
      firstProductionProofEarned: false,
    });
  }

  if (!executeAllowed) {
    return writeReceipt(params.outputDir, {
      ...base,
      status: "blocked_no_execute_gate",
      spend: false,
      firstProductionProofEarned: false,
    });
  }

  const operational = params.operationalRollback;
  if (
    !operational ||
    typeof operational.configPath !== "string" ||
    !operational.configPath.trim() ||
    !operational.runner
  ) {
    return writeReceipt(params.outputDir, {
      ...base,
      status: "blocked_no_rollback_wiring",
      spend: false,
      firstProductionProofEarned: false,
    });
  }

  if (!transport) {
    return writeReceipt(params.outputDir, {
      ...base,
      status: "blocked_no_transport",
      spend: false,
      firstProductionProofEarned: false,
    });
  }

  const request = buildStagePdfOpenRouterRequest({
    pdfPath,
    pdfSha256: pdfMeta.sha256,
    pdfBytes: pdfMeta.bytes,
    pdfBuffer,
  });

  const requestSummary = {
    endpoint: request.endpoint,
    modelRef: request.modelRef,
    wireModel: request.wireModel,
    openRouterOnly: true as const,
    pdfAttached: true as const,
    pdfSha256: request.pdf.sha256,
  };

  const transportResult = await transport.send(request, { apiKeyPresent: cred.present });
  const verified = verifyStagePdfTransportResponse(transportResult);

  if (!verified.ok) {
    const rollbackApplied = await applyExecuteFailureRollback({
      nowIso,
      operational,
    });
    return writeReceipt(params.outputDir, {
      ...base,
      // Never stamp production proof_kind from injector claims on failure.
      proof_kind: sealedProduction ? "openrouter_http_production" : "mock_transport",
      status: "execute_failed_rolled_back",
      spend: {
        attempted: true,
        transportCalled: true,
        note: "Transport called; verification failed; operational tools_deny_pdf rollback attempted on wired config.",
      },
      request: requestSummary,
      transport: {
        called: true,
        ok: false,
        statusCode: transportResult.statusCode,
        assistantTextPresent: Boolean(transportResult.assistantText?.trim()),
        errorClass: transportResult.errorClass ?? "verification_failed",
      },
      rollbackApplied,
      firstProductionProofEarned: false,
    });
  }

  if (!sealedProduction) {
    return writeReceipt(params.outputDir, {
      ...base,
      proof_kind: "mock_transport",
      status: "mock_verified",
      spend: {
        attempted: true,
        transportCalled: true,
        note: "Mock/injected transport succeeded only. Not first production proof; paidSpendEnablementAllowed remains false.",
      },
      request: requestSummary,
      transport: {
        called: true,
        ok: true,
        statusCode: transportResult.statusCode,
        assistantTextPresent: true,
      },
      firstProductionProofEarned: false,
    });
  }

  return writeReceipt(params.outputDir, {
    ...base,
    proof_kind: "openrouter_http_production",
    status: "executed",
    spend: {
      attempted: true,
      transportCalled: true,
      note: "OpenRouter HTTP production transport succeeded with bounded PDF request. firstProductionProofEarned requires Principal acceptance of this receipt.",
    },
    request: requestSummary,
    transport: {
      called: true,
      ok: true,
      statusCode: transportResult.statusCode,
      assistantTextPresent: true,
    },
    firstProductionProofEarned: true,
  });
}

function printHelp(): void {
  console.log(`Usage:
  node --experimental-strip-types linkbots/lisa/ops/stage-pdf-canary.ts <package|dry-run|rollback-plan|execute> --out <dir>

Defaults: package/dry-run only. execute requires STAGE_PDF_CANARY_EXECUTE=1 and existing OPENROUTER_API_KEY in process env (never printed).
Live fetch also requires STAGE_PDF_CANARY_ALLOW_LIVE_FETCH=1 (Principal spend gate).
Live execute requires STAGE_PDF_CANARY_CONFIG_PATH + STAGE_PDF_CANARY_HEALTH_URL (operational rollback; lisa-stage only).
delivery=none; synthetic local PDF; OpenRouter-only; no live Lisa.
`);
}

async function mainAsync(argv: string[]): Promise<number> {
  const args = argv.slice(2);
  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    printHelp();
    return 0;
  }
  const mode = args[0] as StagePdfCanaryMode;
  if (!["package", "dry-run", "execute", "rollback-plan"].includes(mode)) {
    console.error(`Unknown mode: ${mode}`);
    printHelp();
    return 2;
  }
  const outIdx = args.indexOf("--out");
  const outDir = outIdx >= 0 ? args[outIdx + 1]! : path.join(process.cwd(), "tmp-stage-pdf-canary");

  if (mode === "execute") {
    if (process.env.STAGE_PDF_CANARY_EXECUTE !== "1") {
      const receipt = planStagePdfCanary({
        mode: "execute",
        outputDir: outDir,
        executeGateEnv: process.env,
      });
      console.log(JSON.stringify(receipt, null, 2));
      console.error("Refusing execute: set STAGE_PDF_CANARY_EXECUTE=1 only under Principal gate.");
      return 1;
    }
    const rollback = resolveLiveExecuteOperationalRollback(process.env);
    if (!rollback.ok) {
      const pdf = writeSyntheticStagePdf(path.join(outDir, "synthetic-stage-pdf-canary.pdf"));
      const receipt = writeReceipt(outDir, {
        ...baseReceiptFields({
          mode: "execute",
          pdf,
          routingErrors: validateOpenRouterOnlyStageRouting(),
          nowIso: new Date().toISOString(),
          proofKind: "none",
        }),
        status: "blocked_no_rollback_wiring",
        spend: false,
        firstProductionProofEarned: false,
      });
      console.log(JSON.stringify(receipt, null, 2));
      console.error(`Refusing execute: ${rollback.error}`);
      return 1;
    }
    const receipt = await executeStagePdfCanary({
      outputDir: outDir,
      executeGateEnv: process.env,
      allowLiveFetchTransport: process.env.STAGE_PDF_CANARY_ALLOW_LIVE_FETCH === "1",
      operationalRollback: rollback.wiring,
    });
    console.log(JSON.stringify(receipt, null, 2));
    if (
      receipt.status === "blocked_no_execute_gate" ||
      receipt.status === "blocked_no_transport" ||
      receipt.status === "blocked_no_rollback_wiring" ||
      receipt.status === "blocked_routing" ||
      receipt.status === "execute_failed_rolled_back"
    ) {
      return 1;
    }
    // mock_verified is a successful mock path (exit 0) but not production proof.
    return 0;
  }

  const receipt = planStagePdfCanary({
    mode,
    outputDir: outDir,
    executeGateEnv: process.env,
  });
  console.log(JSON.stringify(receipt, null, 2));
  return receipt.routingErrors.length ? 1 : 0;
}

export function readReceipt(filePath: string): StagePdfCanaryReceipt {
  if (!existsSync(filePath)) {
    throw new Error(`missing receipt: ${filePath}`);
  }
  return JSON.parse(readFileSync(filePath, "utf8")) as StagePdfCanaryReceipt;
}

const isDirectCli =
  process.argv[1] !== undefined &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (isDirectCli) {
  mainAsync(process.argv).then(
    (code) => {
      process.exitCode = code;
    },
    (err) => {
      console.error(err instanceof Error ? err.message : "execute_failed");
      process.exitCode = 1;
    },
  );
}
