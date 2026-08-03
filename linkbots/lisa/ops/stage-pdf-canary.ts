/**
 * Stage-only MiniMax PDF canary (OpenRouter-only).
 *
 * Default mode is package/dry-run: builds a synthetic local PDF, validates
 * routing hard stops, writes a machine-readable receipt, and documents rollback.
 * Never prints secrets. Execute mode is dual-gated and not used by audit/HOLD sessions.
 */

import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import {
  buildStagePdfModelDisableFragment,
  LISA_OPENROUTER_ONLY_STAGE_ROUTING,
  validateOpenRouterOnlyStageRouting,
} from "./model-routing.openrouter-stage.ts";

export const STAGE_PDF_CANARY_MODEL = "openrouter/minimax/minimax-m3" as const;
export const STAGE_PDF_CANARY_CREDENTIAL = "OPENROUTER_API_KEY" as const;

export type StagePdfCanaryMode = "package" | "dry-run" | "execute" | "rollback-plan";

export type StagePdfCanaryReceipt = {
  receiptType: "lisa_stage_minimax_pdf_canary_v1";
  mode: StagePdfCanaryMode;
  status:
    | "packaged"
    | "dry_run_ready"
    | "blocked_no_execute_gate"
    | "blocked_routing"
    | "rollback_planned"
    | "executed";
  timestamp: string;
  modelRef: typeof STAGE_PDF_CANARY_MODEL;
  capabilityStatus: "approved_unverified";
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
  spend: false | { attempted: true; note: string };
  rollback: ReturnType<typeof buildStagePdfModelDisableFragment> & {
    probeHint: string;
  };
  firstProductionProofEarned: false;
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

export function planStagePdfCanary(params: {
  mode: StagePdfCanaryMode;
  outputDir: string;
  executeGateEnv?: NodeJS.ProcessEnv;
  nowIso?: string;
}): StagePdfCanaryReceipt {
  const routingErrors = validateOpenRouterOnlyStageRouting();
  const pdfPath = path.join(params.outputDir, "synthetic-stage-pdf-canary.pdf");
  const pdf = writeSyntheticStagePdf(pdfPath);
  const cred = hasOpenRouterCredentialProcessOnly(params.executeGateEnv ?? process.env);
  const executeAllowed =
    params.mode === "execute" &&
    params.executeGateEnv?.STAGE_PDF_CANARY_EXECUTE === "1" &&
    cred.present &&
    routingErrors.length === 0 &&
    LISA_OPENROUTER_ONLY_STAGE_ROUTING.paidSpendEnablementAllowed === false;

  let status: StagePdfCanaryReceipt["status"] = "packaged";
  let spend: StagePdfCanaryReceipt["spend"] = false;

  if (routingErrors.length > 0) {
    status = "blocked_routing";
  } else if (params.mode === "rollback-plan") {
    status = "rollback_planned";
  } else if (params.mode === "dry-run") {
    status = "dry_run_ready";
  } else if (params.mode === "execute") {
    if (!executeAllowed) {
      status = "blocked_no_execute_gate";
    } else {
      // HOLD sessions must not reach here; keep contract explicit.
      status = "executed";
      spend = {
        attempted: true,
        note: "Execute path is Principal-gated; this package does not invoke the model from tests.",
      };
    }
  } else {
    status = "packaged";
  }

  const receipt: StagePdfCanaryReceipt = {
    receiptType: "lisa_stage_minimax_pdf_canary_v1",
    mode: params.mode,
    status,
    timestamp: params.nowIso ?? new Date().toISOString(),
    modelRef: STAGE_PDF_CANARY_MODEL,
    capabilityStatus: "approved_unverified",
    credentialPosture: {
      mode: "openrouter_only",
      credentialName: STAGE_PDF_CANARY_CREDENTIAL,
      storage: "process_env_only",
      secretPrinted: false,
      directProviderKeysForbidden: true,
    },
    delivery: { mode: "none", externalDelivery: false },
    syntheticPdf: {
      path: pdf.path,
      sha256: pdf.sha256,
      bytes: pdf.bytes,
      contentsClass: "synthetic_non_secret",
    },
    hardStops: {
      liveMutationAllowed: false,
      paidSpendEnablementAllowed: false,
      liveLisaTouched: false,
      alternatePaidDocumentRoutingAllowed: false,
    },
    routingErrors,
    spend,
    rollback: {
      ...buildStagePdfModelDisableFragment(),
      probeHint:
        "LiNKplatform-staging/lisa/probes/rollback-pdf.sh (Principal gate; clears pdfModel only)",
    },
    firstProductionProofEarned: false,
  };

  const receiptPath = path.join(params.outputDir, "pdf-canary-receipt.json");
  writeFileSync(receiptPath, `${JSON.stringify(receipt, null, 2)}\n`, "utf8");
  return receipt;
}

function printHelp(): void {
  console.log(`Usage:
  node --experimental-strip-types linkbots/lisa/ops/stage-pdf-canary.ts <package|dry-run|rollback-plan|execute> --out <dir>

Defaults: package/dry-run only. execute requires STAGE_PDF_CANARY_EXECUTE=1 and existing OPENROUTER_API_KEY in process env (never printed).
delivery=none; synthetic local PDF; OpenRouter-only; no live Lisa; first-production-proof not earned by package alone.
`);
}

function main(argv: string[]): number {
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
  if (mode === "execute") {
    console.error(
      "Refusing execute in default CLI path for HOLD sessions. Set STAGE_PDF_CANARY_EXECUTE=1 only under Principal gate.",
    );
    if (process.env.STAGE_PDF_CANARY_EXECUTE !== "1") {
      const outIdx = args.indexOf("--out");
      const outDir =
        outIdx >= 0 ? args[outIdx + 1]! : path.join(process.cwd(), "tmp-stage-pdf-canary");
      const receipt = planStagePdfCanary({
        mode: "execute",
        outputDir: outDir,
        executeGateEnv: process.env,
      });
      console.log(JSON.stringify(receipt, null, 2));
      return 1;
    }
  }
  const outIdx = args.indexOf("--out");
  const outDir = outIdx >= 0 ? args[outIdx + 1]! : path.join(process.cwd(), "tmp-stage-pdf-canary");
  const receipt = planStagePdfCanary({
    mode,
    outputDir: outDir,
    executeGateEnv: process.env,
  });
  console.log(JSON.stringify(receipt, null, 2));
  return receipt.routingErrors.length || receipt.status === "blocked_no_execute_gate" ? 1 : 0;
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
  process.exitCode = main(process.argv);
}
