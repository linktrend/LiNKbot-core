/**
 * Stage workspace package installer — bounded stable procedures + renderer
 * dependencies + stage Google/task adapters.
 *
 * Default: verify SHA256 against manifest and write a receipt. NEVER mutates the
 * real LiNKplatform-staging lisa workspace. Optional --target only for hermetic
 * temp dirs / Principal-gated installs. --emit-commands prints a copy plan.
 *
 * The checked-in package contains no mutable/private runtime seeds. Any
 * Personality-files source must be listed by the canonical profile manifest.
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
export const STAGE_WORKSPACE_PACKAGE_SOURCE_RECEIPT_TYPE =
  "lisa_stage_workspace_package_source_receipt_v1" as const;

const here = path.dirname(fileURLToPath(import.meta.url));
export const DEFAULT_MANIFEST_PATH = path.join(here, "stage-workspace-package.manifest.json");
/** Repo source root: linkbots/lisa */
export const DEFAULT_SOURCE_ROOT = path.resolve(here, "..");
export const PROFILE_BUNDLE_MANIFEST_PATH = path.join(
  DEFAULT_SOURCE_ROOT,
  "PROFILE_BUNDLE_MANIFEST.json",
);

export const FORBIDDEN_STAGE_WORKSPACE = path.join(STAGE_OPS_STAGE_ROOT, "workspace");

/** Live Lisa hard-stop paths — never install here. */
export const FORBIDDEN_LIVE_LISA_PREFIXES = [
  path.resolve("/Users/linktrend/.openclaw-lisa"),
] as const;

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
  /** Legacy-compatible field; the current stable package requires this to remain empty. */
  initializeIfMissing?: StageWorkspacePackageManifestFile[];
};

export type StageWorkspaceFileVerification = {
  source: string;
  destination: string;
  expectedSha256: string;
  actualSha256: string | null;
  expectedBytes: number;
  actualBytes: number | null;
  ok: boolean;
  mode: "overwrite" | "initialize_if_missing";
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
  preservedPaths: string[];
  initializedPaths: string[];
  hardStops: {
    defaultMutateStageWorkspace: false;
    liveMutationAllowed: false;
  };
};

/**
 * Stable source evidence for an integration packet. Unlike the operational
 * receipt below, this contains no timestamp, absolute path, or target state.
 */
export type StageWorkspacePackageSourceReceipt = {
  receiptType: typeof STAGE_WORKSPACE_PACKAGE_SOURCE_RECEIPT_TYPE;
  status: "verified-source" | "blocked-hash-mismatch";
  packageId: string;
  manifestSha256: string;
  fileCount: number;
  mutableSeeds: false;
  liveMutationAllowed: false;
  defaultMutateStageWorkspace: false;
  sourceRoot: "linkbots/lisa";
};

function allManifestEntries(
  manifest: StageWorkspacePackageManifest,
): Array<StageWorkspacePackageManifestFile & { mode: "overwrite" | "initialize_if_missing" }> {
  const overwrite = manifest.files.map((f) => ({ ...f, mode: "overwrite" as const }));
  const init = (manifest.initializeIfMissing ?? []).map((f) => ({
    ...f,
    mode: "initialize_if_missing" as const,
  }));
  return [...overwrite, ...init];
}

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
  if (raw.initializeIfMissing !== undefined && !Array.isArray(raw.initializeIfMissing)) {
    throw new Error("manifest.initializeIfMissing must be an array when present");
  }
  if ((raw.initializeIfMissing ?? []).length !== 0) {
    throw new Error("stable stage workspace package must not include mutable runtime seeds");
  }
  const profileManifest = JSON.parse(readFileSync(PROFILE_BUNDLE_MANIFEST_PATH, "utf8")) as {
    requiredStableDefinition?: Array<{ path?: string }>;
    intentionalAssets?: Array<{ path?: string; deploymentRequired?: boolean }>;
  };
  const approvedProfileSources = new Set([
    ...(profileManifest.requiredStableDefinition ?? []).map((entry) => entry.path),
    ...(profileManifest.intentionalAssets ?? [])
      .filter((entry) => entry.deploymentRequired === true)
      .map((entry) => entry.path),
  ]);
  for (const entry of raw.files) {
    assertSafePackagePath(entry.source, "manifest source");
    assertSafePackagePath(entry.destination, "manifest destination");
    if (
      entry.source.startsWith("Personality files/") &&
      !approvedProfileSources.has(entry.source)
    ) {
      throw new Error(`stage package references excluded profile source: ${entry.source}`);
    }
  }
  for (const entry of raw.initializeIfMissing ?? []) {
    assertSafePackagePath(entry.source, "manifest source");
    assertSafePackagePath(entry.destination, "manifest destination");
  }
  return raw;
}

function assertSafePackagePath(value: string, field: string): void {
  if (
    typeof value !== "string" ||
    value.length === 0 ||
    path.isAbsolute(value) ||
    value.split(/[\\/]+/u).some((part) => part === "..")
  ) {
    throw new Error(`${field} must be a relative non-traversing path`);
  }
}

/** Stable manifest bytes used for disposable-package evidence. */
export function canonicalStageWorkspacePackageManifestBytes(
  manifest: StageWorkspacePackageManifest = loadStageWorkspacePackageManifest(),
): string {
  return JSON.stringify({
    manifestType: manifest.manifestType,
    packageId: manifest.packageId,
    description: manifest.description,
    sourceRoot: manifest.sourceRoot,
    liveMutationAllowed: manifest.liveMutationAllowed,
    defaultMutateStageWorkspace: manifest.defaultMutateStageWorkspace,
    files: allManifestEntries(manifest).map((entry) => ({
      source: entry.source,
      destination: entry.destination,
      sha256: entry.sha256,
      bytes: entry.bytes,
      mode: entry.mode,
    })),
  });
}

export function hashStageWorkspacePackageManifest(
  manifest: StageWorkspacePackageManifest = loadStageWorkspacePackageManifest(),
): string {
  return createHash("sha256")
    .update(canonicalStageWorkspacePackageManifestBytes(manifest))
    .digest("hex");
}

/** Build deterministic source evidence suitable for a committed packet receipt. */
export function buildStageWorkspacePackageSourceReceipt(
  params: {
    manifest?: StageWorkspacePackageManifest;
    manifestPath?: string;
    sourceRoot?: string;
  } = {},
): StageWorkspacePackageSourceReceipt {
  const manifest =
    params.manifest ??
    loadStageWorkspacePackageManifest(params.manifestPath ?? DEFAULT_MANIFEST_PATH);
  const verification = verifyStageWorkspacePackage({
    manifest,
    sourceRoot: params.sourceRoot,
  });
  return {
    receiptType: STAGE_WORKSPACE_PACKAGE_SOURCE_RECEIPT_TYPE,
    status: verification.ok ? "verified-source" : "blocked-hash-mismatch",
    packageId: manifest.packageId,
    manifestSha256: hashStageWorkspacePackageManifest(manifest),
    fileCount: manifest.files.length,
    mutableSeeds: false,
    liveMutationAllowed: false,
    defaultMutateStageWorkspace: false,
    sourceRoot: "linkbots/lisa",
  };
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
  for (const entry of allManifestEntries(manifest)) {
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
        mode: entry.mode,
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
      mode: entry.mode,
      error: ok ? undefined : "hash_or_size_mismatch",
    });
  }
  return { ok: files.every((f) => f.ok), files, manifest };
}

function resolveReal(p: string): string {
  const resolved = path.resolve(p);
  let ancestor = resolved;
  const suffix: string[] = [];

  // `realpathSync` only protects existing paths. For a target such as
  // `/tmp/link-to-live/new/workspace`, resolve its nearest existing ancestor
  // first, then reattach the missing tail so a symlink cannot hide live Lisa.
  while (!existsSync(ancestor)) {
    const parent = path.dirname(ancestor);
    if (parent === ancestor) {
      throw new Error(`cannot resolve existing ancestor for target: ${p}`);
    }
    suffix.unshift(path.basename(ancestor));
    ancestor = parent;
  }
  return path.resolve(realpathSync(ancestor), ...suffix);
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

/** True when target is under live Lisa profile paths. */
export function isForbiddenLiveLisaTarget(targetDir: string): boolean {
  const target = resolveReal(targetDir);
  return FORBIDDEN_LIVE_LISA_PREFIXES.some(
    (prefix) => target === prefix || target.startsWith(`${prefix}${path.sep}`),
  );
}

function isBlockedTargetAction(action: "verify" | "install" | "emit-commands"): boolean {
  return action === "install" || action === "emit-commands";
}

function buildCopyCommands(
  manifest: StageWorkspacePackageManifest,
  sourceRoot: string,
  targetDir: string,
): string[] {
  const cmds: string[] = [];
  for (const f of manifest.files) {
    const src = path.join(sourceRoot, f.source);
    const dest = path.join(targetDir, f.destination);
    cmds.push(
      `mkdir -p ${shellQuote(path.dirname(dest))} && cp ${shellQuote(src)} ${shellQuote(dest)}`,
    );
  }
  for (const f of manifest.initializeIfMissing ?? []) {
    const src = path.join(sourceRoot, f.source);
    const dest = path.join(targetDir, f.destination);
    cmds.push(
      `mkdir -p ${shellQuote(path.dirname(dest))} && if [ ! -e ${shellQuote(dest)} ]; then cp ${shellQuote(src)} ${shellQuote(dest)}; fi`,
    );
  }
  return cmds;
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

  const targetDir = params.targetDir ? resolveReal(params.targetDir) : null;
  const targetIsLiveLisa = targetDir !== null && isForbiddenLiveLisaTarget(targetDir);
  const targetIsForbiddenStage =
    targetDir !== null &&
    isForbiddenStageWorkspaceTarget(targetDir) &&
    !params.allowForbiddenStageTarget;
  // A live Lisa target must be rejected before command construction as well as
  // before installation. Emitting a command that names a live target is unsafe.
  const targetBlocked =
    targetDir !== null &&
    isBlockedTargetAction(action) &&
    (targetIsLiveLisa || targetIsForbiddenStage);
  const copyCommands = targetBlocked
    ? []
    : targetDir !== null
      ? buildCopyCommands(manifest, sourceRoot, targetDir)
      : buildCopyCommands(manifest, sourceRoot, "<TARGET_WORKSPACE>");

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
      preservedPaths: [],
      initializedPaths: [],
    };
    writeReceipt(params.outputDir, receipt);
    return receipt;
  }

  if (targetBlocked) {
    const receipt: StageWorkspacePackageReceipt = {
      ...base,
      status: "blocked_forbidden_target",
      mutateWorkspace: false,
      targetDir,
      stageWorkspaceMutated: false,
      installedPaths: [],
      preservedPaths: [],
      initializedPaths: [],
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
      preservedPaths: [],
      initializedPaths: [],
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
      preservedPaths: [],
      initializedPaths: [],
    };
    writeReceipt(params.outputDir, receipt);
    return receipt;
  }

  const installedPaths: string[] = [];
  const preservedPaths: string[] = [];
  const initializedPaths: string[] = [];

  for (const entry of manifest.files) {
    const src = path.join(sourceRoot, entry.source);
    const dest = path.join(targetDir, entry.destination);
    mkdirSync(path.dirname(dest), { recursive: true });
    copyFileSync(src, dest);
    installedPaths.push(dest);
  }

  for (const entry of manifest.initializeIfMissing ?? []) {
    const src = path.join(sourceRoot, entry.source);
    const dest = path.join(targetDir, entry.destination);
    mkdirSync(path.dirname(dest), { recursive: true });
    if (existsSync(dest)) {
      preservedPaths.push(dest);
      continue;
    }
    copyFileSync(src, dest);
    initializedPaths.push(dest);
    installedPaths.push(dest);
  }

  const receipt: StageWorkspacePackageReceipt = {
    ...base,
    status: "installed",
    mutateWorkspace: true,
    targetDir,
    stageWorkspaceMutated: isForbiddenStageWorkspaceTarget(targetDir),
    installedPaths,
    preservedPaths,
    initializedPaths,
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
Mutable seeds initialize only when missing (preserve on reinstall).
Never installs under ~/.openclaw-lisa.
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
