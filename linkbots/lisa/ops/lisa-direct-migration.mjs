#!/usr/bin/env node

import { createHash } from "node:crypto";
import {
  chmodSync,
  copyFileSync,
  createReadStream,
  existsSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  readlinkSync,
  readdirSync,
  realpathSync,
  renameSync,
  symlinkSync,
  utimesSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { backup, DatabaseSync } from "node:sqlite";

const PROFILE_ID = "lisa";
const PROFILE_DIR = ".openclaw-lisa";
const FORBIDDEN_PROFILE_NAMES = new Set([".openclaw-lisa-stage", ".openclaw-lisa-vps-candidate"]);
const SQLITE_FILE = /\.(?:sqlite|sqlite3|db)$/i;
const SQLITE_SIDECAR = /\.(?:sqlite|sqlite3|db)-(?:wal|shm)$/i;
const MAX_REFERENCE_SCAN_BYTES = 4 * 1024 * 1024;

function fail(message) {
  throw new Error(message);
}

function parseArgs(argv) {
  const [command, ...rest] = argv;
  const args = {};
  for (let index = 0; index < rest.length; index += 1) {
    const token = rest[index];
    if (!token.startsWith("--")) {
      fail(`unexpected argument: ${token}`);
    }
    const key = token.slice(2);
    if (key === "allow-existing-target" || key === "apply") {
      args[key] = true;
      continue;
    }
    const value = rest[index + 1];
    if (!value || value.startsWith("--")) {
      fail(`missing value for --${key}`);
    }
    index += 1;
    if (key === "allow-external-symlink-prefix") {
      args[key] = [...(args[key] ?? []), value];
    } else {
      args[key] = value;
    }
  }
  return { command, args };
}

function requireArg(args, name) {
  const value = args[name];
  if (!value) {
    fail(`missing --${name}`);
  }
  return value;
}

function absolute(value) {
  return path.resolve(value);
}

function isWithin(root, candidate) {
  const relative = path.relative(root, candidate);
  return relative === "" || (!relative.startsWith("..") && !path.isAbsolute(relative));
}

function assertSafeProfileRoot(value, label) {
  const resolved = realpathSync(value);
  if (path.basename(resolved) !== PROFILE_DIR) {
    fail(`${label} must be the exact ${PROFILE_DIR} root`);
  }
  for (const forbidden of FORBIDDEN_PROFILE_NAMES) {
    if (resolved.split(path.sep).includes(forbidden)) {
      fail(`${label} points into a forbidden Lisa profile`);
    }
  }
  return resolved;
}

function assertBackupRoot(value, sourceRoot) {
  const resolved = absolute(value);
  if (isWithin(sourceRoot, resolved) || isWithin(resolved, sourceRoot)) {
    fail("backup root must be outside the Lisa profile root");
  }
  for (const forbidden of FORBIDDEN_PROFILE_NAMES) {
    if (resolved.split(path.sep).includes(forbidden)) {
      fail("backup root must be outside candidate and stage profile roots");
    }
  }
  mkdirSync(resolved, { recursive: true, mode: 0o700 });
  const canonical = realpathSync(resolved);
  if (isWithin(sourceRoot, canonical) || isWithin(canonical, sourceRoot)) {
    fail("backup root resolves inside the Lisa profile root");
  }
  chmodSync(resolved, 0o700);
  return canonical;
}

function assertSafeSymlinkTarget(target, sourceRoot, allowedPrefixes) {
  const resolvedTarget = path.isAbsolute(target)
    ? path.resolve(target)
    : path.resolve(sourceRoot, target);
  const canonicalTarget = existsSync(resolvedTarget)
    ? realpathSync(resolvedTarget)
    : resolvedTarget;
  for (const forbidden of FORBIDDEN_PROFILE_NAMES) {
    if (canonicalTarget.split(path.sep).includes(forbidden)) {
      fail(`symlink points into forbidden profile: ${forbidden}`);
    }
  }
  if (
    isWithin(sourceRoot, canonicalTarget) ||
    allowedPrefixes.some((prefix) => isWithin(path.resolve(prefix), canonicalTarget))
  ) {
    return { resolvedTarget: canonicalTarget, external: !isWithin(sourceRoot, canonicalTarget) };
  }
  fail(`unsafe symlink escapes Lisa root: ${target}`);
}

function categoryFor(relativePath) {
  const normalized = relativePath.split(path.sep).join("/");
  const basename = path.basename(normalized);
  if (normalized === "openclaw.json" || normalized.startsWith("service-env/")) {
    return "config";
  }
  if (normalized === "cron" || normalized.startsWith("cron/") || normalized.includes("/cron/")) {
    return "cron";
  }
  if (
    normalized.startsWith("workspace/memory/") ||
    basename === "MEMORY.md" ||
    basename === "DREAMS.md"
  ) {
    return "memory";
  }
  if (normalized.startsWith("workspace/studio/") || normalized.includes("/knowledge/")) {
    return "knowledge";
  }
  if (normalized.includes("/sessions") || normalized.startsWith("sessions/")) {
    return "sessions";
  }
  if (SQLITE_FILE.test(normalized) || SQLITE_SIDECAR.test(normalized)) {
    return "sqlite";
  }
  if (
    normalized.startsWith("workspace/") &&
    ["AGENTS.md", "SOUL.md", "IDENTITY.md", "USER.md", "TOOLS.md", "HEARTBEAT.md"].includes(
      basename,
    )
  ) {
    return "personality";
  }
  if (normalized.startsWith("workspace/")) {
    return "workspace";
  }
  return "profile";
}

async function hashFile(filePath) {
  const hash = createHash("sha256");
  await new Promise((resolve, reject) => {
    const stream = createReadStream(filePath);
    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("error", reject);
    stream.on("end", resolve);
  });
  return hash.digest("hex");
}

function hashLink(target) {
  return createHash("sha256").update(`symlink:${target}`).digest("hex");
}

function loadCronMetadata(filePath) {
  const parsed = JSON.parse(readFileSync(filePath, "utf8"));
  const jobs = Array.isArray(parsed) ? parsed : parsed?.jobs;
  if (!Array.isArray(jobs)) {
    fail("cron metadata must contain a jobs array");
  }
  const ids = jobs.map((job) => {
    if (!job || typeof job.id !== "string" || job.id.length === 0) {
      fail("cron metadata contains a job without an ID");
    }
    return job.id;
  });
  if (new Set(ids).size !== ids.length) {
    fail("cron metadata contains duplicate job IDs");
  }
  return {
    count: ids.length,
    enabledCount: jobs.filter((job) => job.enabled === true).length,
    ids: [...ids].sort(),
    agentIds: [
      ...new Set(jobs.map((job) => job.agentId).filter((id) => typeof id === "string")),
    ].sort(),
  };
}

function detectPathReferences(filePath, root, relativePath) {
  const stat = lstatSync(filePath);
  if (!stat.isFile() || stat.size > MAX_REFERENCE_SCAN_BYTES) {
    return undefined;
  }
  const bytes = readFileSync(filePath);
  if (bytes.includes(0)) {
    return undefined;
  }
  const text = bytes.toString("utf8");
  const workspaceRoot = path.join(root, "workspace");
  const candidateCount = (text.match(/\.openclaw-lisa-vps-candidate/g) ?? []).length;
  const stageCount = (text.match(/\.openclaw-lisa-stage/g) ?? []).length;
  const rootCount = text.split(root).length - 1;
  const workspaceCount = text.split(workspaceRoot).length - 1;
  if (candidateCount === 0 && stageCount === 0 && rootCount === 0 && workspaceCount === 0) {
    return undefined;
  }
  return {
    relativePath,
    sourceRootReferences: rootCount,
    workspaceReferences: workspaceCount,
    candidateReferences: candidateCount,
    stageReferences: stageCount,
  };
}

async function backupSqlite(source, destination) {
  const database = new DatabaseSync(source, { readOnly: true });
  try {
    await backup(database, destination);
  } finally {
    database.close();
  }
}

function applyMetadata(source, destination) {
  const stat = lstatSync(source);
  if (!stat.isSymbolicLink()) {
    chmodSync(destination, stat.mode & 0o7777);
    utimesSync(destination, stat.atime, stat.mtime);
  }
}

async function snapshotNode(source, destination, root, entries, options) {
  const stat = lstatSync(source);
  const relativePath = path.relative(root, source);
  const category = categoryFor(relativePath);
  if (stat.isDirectory()) {
    mkdirSync(destination, { recursive: true, mode: stat.mode & 0o7777 });
    entries.push({
      relativePath,
      kind: "directory",
      category,
      size: stat.size,
      mode: stat.mode & 0o7777,
      uid: stat.uid,
      gid: stat.gid,
      mtimeMs: stat.mtimeMs,
      sha256: null,
      copied: true,
    });
    for (const child of readdirSync(source)) {
      await snapshotNode(
        path.join(source, child),
        path.join(destination, child),
        root,
        entries,
        options,
      );
    }
    applyMetadata(source, destination);
    return;
  }

  if (stat.isSymbolicLink()) {
    const target = readlinkSync(source);
    const targetInfo = assertSafeSymlinkTarget(target, root, options.allowedExternalPrefixes);
    mkdirSync(path.dirname(destination), { recursive: true, mode: 0o700 });
    symlinkSync(target, destination);
    entries.push({
      relativePath,
      kind: "symlink",
      category,
      size: Buffer.byteLength(target),
      mode: stat.mode & 0o7777,
      uid: stat.uid,
      gid: stat.gid,
      mtimeMs: stat.mtimeMs,
      sha256: hashLink(target),
      target,
      resolvedTarget: targetInfo.resolvedTarget,
      external: targetInfo.external,
      copied: true,
    });
    return;
  }

  if (!stat.isFile()) {
    fail(`unsupported filesystem entry: ${relativePath}`);
  }
  const sidecar = SQLITE_SIDECAR.test(relativePath);
  const sqliteFile = SQLITE_FILE.test(relativePath);
  const database = sqliteFile && stat.size > 0;
  const sqliteLockArtifact = sqliteFile && stat.size === 0;
  const references = detectPathReferences(source, root, relativePath);
  const sourceSha256 = await hashFile(source);
  const entry = {
    relativePath,
    kind: "file",
    category,
    size: stat.size,
    mode: stat.mode & 0o7777,
    uid: stat.uid,
    gid: stat.gid,
    mtimeMs: stat.mtimeMs,
    sha256: sourceSha256,
    sourceSha256,
    copied: !sidecar,
    onlineBackup: database,
    sqliteLockArtifact,
    sqliteSidecar: sidecar,
    ...(references ? { references } : {}),
  };
  entries.push(entry);
  if (sidecar) {
    return;
  }
  mkdirSync(path.dirname(destination), { recursive: true, mode: 0o700 });
  if (database) {
    await backupSqlite(source, destination);
  } else {
    copyFileSync(source, destination);
  }
  entry.sha256 = await hashFile(destination);
  applyMetadata(source, destination);
}

async function snapshot(args) {
  const sourceRoot = assertSafeProfileRoot(requireArg(args, "source"), "source");
  const backupRoot = assertBackupRoot(requireArg(args, "backup-root"), sourceRoot);
  const payloadRoot = path.join(backupRoot, "payload");
  mkdirSync(payloadRoot, { recursive: true, mode: 0o700 });
  chmodSync(payloadRoot, 0o700);
  const entries = [];
  await snapshotNode(sourceRoot, payloadRoot, sourceRoot, entries, {
    allowedExternalPrefixes: args["allow-external-symlink-prefix"] ?? [],
  });
  const cron = args["cron-json"] ? loadCronMetadata(args["cron-json"]) : undefined;
  const manifest = {
    schemaVersion: 1,
    profileId: PROFILE_ID,
    profileRootName: PROFILE_DIR,
    sourceRoot,
    createdAt: new Date().toISOString(),
    payloadDirectory: "payload",
    entries,
    ...(cron ? { cron } : {}),
    summary: {
      entryCount: entries.length,
      fileCount: entries.filter((entry) => entry.kind === "file").length,
      directoryCount: entries.filter((entry) => entry.kind === "directory").length,
      symlinkCount: entries.filter((entry) => entry.kind === "symlink").length,
      sqliteCount: entries.filter((entry) => entry.onlineBackup).length,
      sqliteLockCount: entries.filter((entry) => entry.sqliteLockArtifact).length,
      protectedCategories: Object.fromEntries(
        [...new Set(entries.map((entry) => entry.category))]
          .sort()
          .map((category) => [
            category,
            entries.filter((entry) => entry.category === category).length,
          ]),
      ),
    },
  };
  writeFileSync(path.join(backupRoot, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, {
    mode: 0o600,
  });
  return {
    backupRoot,
    manifest: "manifest.json",
    entryCount: entries.length,
    sqliteCount: manifest.summary.sqliteCount,
    cron: cron ? { count: cron.count, ids: cron.ids } : null,
  };
}

function readManifest(backupRoot, manifestName = "manifest.json") {
  const resolvedBackupRoot = absolute(backupRoot);
  const manifestPath = path.join(resolvedBackupRoot, manifestName);
  if (!isWithin(resolvedBackupRoot, manifestPath)) {
    fail("manifest path escapes backup root");
  }
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
  if (manifest.schemaVersion !== 1 || manifest.profileId !== PROFILE_ID) {
    fail("unsupported or non-Lisa manifest");
  }
  return { manifest, manifestPath, backupRoot: resolvedBackupRoot };
}

async function verifyBackup(args) {
  const { manifest, backupRoot } = readManifest(requireArg(args, "backup-root"), args.manifest);
  const payloadRoot = path.join(backupRoot, manifest.payloadDirectory);
  let verified = 0;
  for (const entry of manifest.entries) {
    if (!entry.copied || entry.kind === "directory") {
      continue;
    }
    const filePath = path.join(payloadRoot, entry.relativePath);
    if (!isWithin(payloadRoot, filePath) || !existsSync(filePath)) {
      fail(`backup entry missing: ${entry.relativePath}`);
    }
    if (entry.kind === "symlink") {
      if (readlinkSync(filePath) !== entry.target) {
        fail(`symlink changed: ${entry.relativePath}`);
      }
    } else if ((await hashFile(filePath)) !== entry.sha256) {
      fail(`backup hash mismatch: ${entry.relativePath}`);
    }
    if (entry.onlineBackup) {
      const database = new DatabaseSync(filePath, { readOnly: true });
      try {
        const result = database.prepare("PRAGMA quick_check").get();
        if (result?.quick_check !== "ok") {
          fail(`SQLite quick_check failed: ${entry.relativePath}`);
        }
      } finally {
        database.close();
      }
    }
    verified += 1;
  }
  return { backupRoot, verified, sqliteChecked: manifest.summary.sqliteCount };
}

function relocationPlan(args) {
  const { manifest, backupRoot } = readManifest(requireArg(args, "backup-root"), args.manifest);
  const fromRoot = absolute(requireArg(args, "from-root"));
  const toRoot = absolute(requireArg(args, "to-root"));
  const insideLinks = [];
  const externalLinks = [];
  const referencedFiles = [];
  for (const entry of manifest.entries) {
    if (entry.kind === "symlink") {
      if (isWithin(fromRoot, entry.resolvedTarget)) {
        insideLinks.push({
          relativePath: entry.relativePath,
          from: entry.resolvedTarget,
          to: path.join(toRoot, path.relative(fromRoot, entry.resolvedTarget)),
        });
      } else if (entry.external) {
        externalLinks.push({ relativePath: entry.relativePath, target: entry.target });
      }
    }
    if (entry.references) {
      referencedFiles.push(entry.references);
    }
  }
  const plan = {
    schemaVersion: 1,
    profileId: PROFILE_ID,
    backupRoot,
    fromRoot,
    toRoot,
    rootReplacement: { from: fromRoot, to: toRoot },
    internalSymlinkRelocations: insideLinks,
    externalSymlinksRequireHostMapping: externalLinks,
    pathReferenceFiles: referencedFiles,
    mutableSurfaces: ["openclaw.json", "service-env/", "gateway-service-wrapper.sh"],
    immutableSurfaces: ["workspace/", "agents/", "state/", "cron/"],
    requiresExplicitHostReview: externalLinks.length > 0 || referencedFiles.length > 0,
  };
  if (args.output) {
    writeFileSync(absolute(args.output), `${JSON.stringify(plan, null, 2)}\n`, { mode: 0o600 });
  }
  return {
    output: args.output ? absolute(args.output) : null,
    internalSymlinkRelocations: insideLinks.length,
    externalSymlinksRequireHostMapping: externalLinks.length,
    pathReferenceFiles: referencedFiles.length,
    requiresExplicitHostReview: plan.requiresExplicitHostReview,
  };
}

function copyBackupNode(source, destination) {
  const stat = lstatSync(source);
  if (stat.isDirectory()) {
    mkdirSync(destination, { recursive: true, mode: stat.mode & 0o7777 });
    for (const child of readdirSync(source)) {
      copyBackupNode(path.join(source, child), path.join(destination, child));
    }
    applyMetadata(source, destination);
  } else if (stat.isSymbolicLink()) {
    symlinkSync(readlinkSync(source), destination);
  } else if (stat.isFile()) {
    mkdirSync(path.dirname(destination), { recursive: true, mode: 0o700 });
    copyFileSync(source, destination);
    applyMetadata(source, destination);
  } else {
    fail(`unsupported backup entry: ${source}`);
  }
}

async function restore(args) {
  const { manifest, backupRoot } = readManifest(requireArg(args, "backup-root"), args.manifest);
  const targetRoot = absolute(requireArg(args, "target-root"));
  if (path.basename(targetRoot) !== PROFILE_DIR) {
    fail("target root must preserve the Lisa profile name");
  }
  for (const forbidden of FORBIDDEN_PROFILE_NAMES) {
    if (targetRoot.split(path.sep).includes(forbidden)) {
      fail("target root points into a forbidden Lisa profile");
    }
  }
  if (existsSync(targetRoot) && !args["allow-existing-target"]) {
    fail("target exists; use --allow-existing-target only during an approved rollback window");
  }
  if (args.apply !== true) {
    return { targetRoot, applied: false, entryCount: manifest.summary.entryCount };
  }
  const payloadRoot = path.join(backupRoot, manifest.payloadDirectory);
  if (existsSync(targetRoot)) {
    const movedAside = `${targetRoot}.pre-restore-${Date.now()}`;
    renameSync(targetRoot, movedAside);
  }
  copyBackupNode(payloadRoot, targetRoot);
  return { targetRoot, applied: true, entryCount: manifest.summary.entryCount };
}

function compareCron(args) {
  const before = loadCronMetadata(requireArg(args, "before"));
  const after = loadCronMetadata(requireArg(args, "after"));
  const same =
    before.count === after.count &&
    before.enabledCount === after.enabledCount &&
    before.ids.join("\n") === after.ids.join("\n") &&
    before.agentIds.join("\n") === after.agentIds.join("\n");
  if (!same) {
    fail("cron count, enabled-state, ID, or agent assignment mismatch");
  }
  return {
    same,
    count: before.count,
    enabledCount: before.enabledCount,
    ids: before.ids,
    agentIds: before.agentIds,
  };
}

async function main() {
  const { command, args } = parseArgs(process.argv.slice(2));
  if (command === "snapshot") {
    return snapshot(args);
  }
  if (command === "verify") {
    return verifyBackup(args);
  }
  if (command === "relocate") {
    return relocationPlan(args);
  }
  if (command === "restore") {
    return restore(args);
  }
  if (command === "compare-cron") {
    return compareCron(args);
  }
  fail(`unknown command: ${command ?? "(missing)"}`);
}

main()
  .then((result) => {
    process.stdout.write(`${JSON.stringify(result)}\n`);
  })
  .catch((error) => {
    process.stderr.write(
      `lisa-direct-migration: ${error instanceof Error ? error.message : String(error)}\n`,
    );
    process.exitCode = 2;
  });
