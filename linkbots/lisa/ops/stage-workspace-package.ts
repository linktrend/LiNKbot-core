/**
 * Stage workspace package installer — four bounded procedures + six renderer deps.
 *
 * Default: verify SHA256 against manifest and write a receipt. NEVER mutates the
 * real LiNKplatform-staging lisa workspace. Optional --target only for hermetic
 * temp dirs / Principal-gated installs. --emit-commands prints a copy plan.
 */

import { createHash } from "node:crypto";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  realpathSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { STAGE_OPS_STAGE_ROOT } from "./stage-ops-command.ts";

export const STAGE_WORKSPACE_PACKAGE_RECEIPT_TYPE =
  "lisa_stage_workspace_package_receipt_v1" as const;

const here = path.dirname(fileURLToPath(import.meta.url));
export const DEFAULT_MANIFEST_PATH = path.join(here, "stage-workspace-package.manifest.json");
/** Repo source root: linkbots/lisa */
export const DEFAULT_SOURCE_ROOT = path.resolve(here, "..");

export const FORBIDDEN_STAGE_WORKSPACE = path.join(STAGE_OPS_STAGE_ROOT, "workspace");

export type StageWorkspacePackageManifestFile = {
  source: string;
  destination: string;
  sha256: string;
  bytes: number;
};

export type StageWorkspacePackageManifest = {
  manifestType: "lisa_stage_workspace_package_v1";
  packageId: string;
  description: string;
  sourceRoot: string;
  liveMutationAllowed: false;
  defaultMutateStageWorkspace: false;
  files: StageWorkspacePackageManifestFile[];
};

export type StageWorkspaceFileVerification = {
  source: string;
  destination: string;
  expectedSha256: string;
  actualSha256: string | null;
  expectedBytes: number;
  actualBytes: number | null;
  ok: boolean;
  error?: string;
};

export type StageWorkspacePackageReceipt = {
  receiptType: typeof STAGE_WORKSPACE_PACKAGE_RECEIPT_TYPE;
  packageId: string;
  timestamp: string;
  status:
    | "verified"
    | "installed"
    | "commands_emitted"
    | "blocked_forbidden_target"
    | "hash_mismatch";
  mutateWorkspace: boolean;
  targetDir: string | null;
  sourceRoot: string;
  liveLisaTouched: false;
  stageWorkspaceMutated: false | true;
  files: StageWorkspaceFileVerification[];
  copyCommands: string[];
  installedPaths: string[];
  hardStops: {
    defaultMutateStageWorkspace: false;
    liveMutationAllowed: false;
  };
};

export function loadStageWorkspacePackageManifest(
  manifestPath: string = DEFAULT_MANIFEST_PATH,
): StageWorkspacePackageManifest {
  const raw = JSON.parse(readFileSync(manifestPath, "utf8")) as StageWorkspacePackageManifest;
  if (raw.manifestType !== "lisa_stage_workspace_package_v1") {
    throw new Error(`unexpected manifestType: ${String(raw.manifestType)}`);
  }
  if (!Array.isArray(raw.files) || raw.files.length === 0) {
    throw new Error("manifest.files must be a non-empty array");
  }
  return raw;
}

export function sha256File(filePath: string): { sha256: string; bytes: number } {
  const buf = readFileSync(filePath);
  return {
    sha256: createHash("sha256").update(buf).digest("hex"),
    bytes: buf.length,
  };
}

export function verifyStageWorkspacePackage(params: {
  manifest?: StageWorkspacePackageManifest;
  manifestPath?: string;
  sourceRoot?: string;
}): {
  ok: boolean;
  files: StageWorkspaceFileVerification[];
  manifest: StageWorkspacePackageManifest;
} {
  const manifest =
    params.manifest ??
    loadStageWorkspacePackageManifest(params.manifestPath ?? DEFAULT_MANIFEST_PATH);
  const sourceRoot = params.sourceRoot ?? DEFAULT_SOURCE_ROOT;
  const files: StageWorkspaceFileVerification[] = [];
  for (const entry of manifest.files) {
    const abs = path.join(sourceRoot, entry.source);
    if (!existsSync(abs)) {
      files.push({
        source: entry.source,
        destination: entry.destination,
        expectedSha256: entry.sha256,
        actualSha256: null,
        expectedBytes: entry.bytes,
        actualBytes: null,
        ok: false,
        error: "missing_source",
      });
      continue;
    }
    const { sha256, bytes } = sha256File(abs);
    const ok = sha256 === entry.sha256 && bytes === entry.bytes;
    files.push({
      source: entry.source,
      destination: entry.destination,
      expectedSha256: entry.sha256,
      actualSha256: sha256,
      expectedBytes: entry.bytes,
      actualBytes: bytes,
      ok,
      error: ok ? undefined : "hash_or_size_mismatch",
    });
  }
  return { ok: files.every((f) => f.ok), files, manifest };
}

function resolveReal(p: string): string {
  try {
    return realpathSync(p);
  } catch {
    return path.resolve(p);
  }
}

/** True when target is (or is inside) the real stage workspace / stage root. */
export function isForbiddenStageWorkspaceTarget(targetDir: string): boolean {
  const target = resolveReal(targetDir);
  const stageRoot = resolveReal(STAGE_OPS_STAGE_ROOT);
  const stageWs = resolveReal(FORBIDDEN_STAGE_WORKSPACE);
  return (
    target === stageRoot ||
    target === stageWs ||
    target.startsWith(`${stageRoot}${path.sep}`) ||
    target.startsWith(`${stageWs}${path.sep}`)
  );
}

function buildCopyCommands(
  files: StageWorkspacePackageManifestFile[],
  sourceRoot: string,
  targetDir: string,
): string[] {
  return files.map((f) => {
    const src = path.join(sourceRoot, f.source);
    const dest = path.join(targetDir, f.destination);
    return `mkdir -p ${shellQuote(path.dirname(dest))} && cp ${shellQuote(src)} ${shellQuote(dest)}`;
  });
}

function shellQuote(s: string): string {
  return `'${s.replace(/'/g, `'\\''`)}'`;
}

export function planStageWorkspacePackage(params: {
  action?: "verify" | "install" | "emit-commands";
  targetDir?: string | null;
  outputDir: string;
  sourceRoot?: string;
  manifestPath?: string;
  nowIso?: string;
  /** Principal-only escape hatch; still refused against real stage unless true. */
  allowForbiddenStageTarget?: boolean;
}): StageWorkspacePackageReceipt {
  const action = params.action ?? "verify";
  const sourceRoot = params.sourceRoot ?? DEFAULT_SOURCE_ROOT;
  const nowIso = params.nowIso ?? new Date().toISOString();
  const { ok, files, manifest } = verifyStageWorkspacePackage({
    manifestPath: params.manifestPath,
    sourceRoot,
  });

  const targetDir = params.targetDir ? path.resolve(params.targetDir) : null;
  const copyCommands =
    targetDir !== null
      ? buildCopyCommands(manifest.files, sourceRoot, targetDir)
      : buildCopyCommands(manifest.files, sourceRoot, "<TARGET_WORKSPACE>");

  const base = {
    receiptType: STAGE_WORKSPACE_PACKAGE_RECEIPT_TYPE,
    packageId: manifest.packageId,
    timestamp: nowIso,
    sourceRoot,
    liveLisaTouched: false as const,
    files,
    copyCommands,
    hardStops: {
      defaultMutateStageWorkspace: false as const,
      liveMutationAllowed: false as const,
    },
  };

  mkdirSync(params.outputDir, { recursive: true });

  if (!ok) {
    const receipt: StageWorkspacePackageReceipt = {
      ...base,
      status: "hash_mismatch",
      mutateWorkspace: false,
      targetDir,
      stageWorkspaceMutated: false,
      installedPaths: [],
    };
    writeReceipt(params.outputDir, receipt);
    return receipt;
  }

  if (action === "emit-commands") {
    const receipt: StageWorkspacePackageReceipt = {
      ...base,
      status: "commands_emitted",
      mutateWorkspace: false,
      targetDir,
      stageWorkspaceMutated: false,
      installedPaths: [],
    };
    writeReceipt(params.outputDir, receipt);
    return receipt;
  }

  if (action === "verify" || !targetDir) {
    const receipt: StageWorkspacePackageReceipt = {
      ...base,
      status: "verified",
      mutateWorkspace: false,
      targetDir,
      stageWorkspaceMutated: false,
      installedPaths: [],
    };
    writeReceipt(params.outputDir, receipt);
    return receipt;
  }

  // install
  if (isForbiddenStageWorkspaceTarget(targetDir) && !params.allowForbiddenStageTarget) {
    const receipt: StageWorkspacePackageReceipt = {
      ...base,
      status: "blocked_forbidden_target",
      mutateWorkspace: false,
      targetDir,
      stageWorkspaceMutated: false,
      installedPaths: [],
    };
    writeReceipt(params.outputDir, receipt);
    return receipt;
  }

  const installedPaths: string[] = [];
  for (const entry of manifest.files) {
    const src = path.join(sourceRoot, entry.source);
    const dest = path.join(targetDir, entry.destination);
    mkdirSync(path.dirname(dest), { recursive: true });
    copyFileSync(src, dest);
    installedPaths.push(dest);
  }

  const receipt: StageWorkspacePackageReceipt = {
    ...base,
    status: "installed",
    mutateWorkspace: true,
    targetDir,
    stageWorkspaceMutated: isForbiddenStageWorkspaceTarget(targetDir),
    installedPaths,
  };
  writeReceipt(params.outputDir, receipt);
  return receipt;
}

function writeReceipt(outputDir: string, receipt: StageWorkspacePackageReceipt): void {
  writeFileSync(
    path.join(outputDir, "stage-workspace-package-receipt.json"),
    `${JSON.stringify(receipt, null, 2)}\n`,
    "utf8",
  );
}

function printHelp(): void {
  console.log(`Usage:
  node --experimental-strip-types linkbots/lisa/ops/stage-workspace-package.ts verify --out <dir>
  node --experimental-strip-types linkbots/lisa/ops/stage-workspace-package.ts emit-commands --out <dir> [--target <dir>]
  node --experimental-strip-types linkbots/lisa/ops/stage-workspace-package.ts install --out <dir> --target <hermetic-dir>

Default never writes to ${FORBIDDEN_STAGE_WORKSPACE}.
`);
}

function main(argv: string[]): number {
  const args = argv.slice(2);
  if (args.length === 0 || args.includes("--help") || args.includes("-h")) {
    printHelp();
    return 0;
  }
  const actionRaw = args[0];
  const action =
    actionRaw === "install"
      ? "install"
      : actionRaw === "emit-commands"
        ? "emit-commands"
        : "verify";
  const outIdx = args.indexOf("--out");
  const targetIdx = args.indexOf("--target");
  const outDir =
    outIdx >= 0 ? args[outIdx + 1]! : path.join(process.cwd(), "tmp-stage-workspace-package");
  const targetDir = targetIdx >= 0 ? args[targetIdx + 1]! : null;

  if (action === "install" && !targetDir) {
    console.error("install requires --target <dir>");
    return 2;
  }

  const receipt = planStageWorkspacePackage({
    action,
    targetDir,
    outputDir: outDir,
    allowForbiddenStageTarget: process.env.STAGE_WORKSPACE_PACKAGE_ALLOW_STAGE === "1",
  });

  if (args.includes("--emit-commands") || action === "emit-commands") {
    for (const cmd of receipt.copyCommands) {
      console.log(cmd);
    }
  }
  console.log(JSON.stringify(receipt, null, 2));

  if (receipt.status === "hash_mismatch" || receipt.status === "blocked_forbidden_target") {
    return 1;
  }
  return 0;
}

const isDirectCli =
  process.argv[1] !== undefined &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (isDirectCli) {
  process.exitCode = main(process.argv);
}
