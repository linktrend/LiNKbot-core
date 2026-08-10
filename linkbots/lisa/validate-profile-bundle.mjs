#!/usr/bin/env node

import { createHash } from "node:crypto";
import { lstatSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const bundleRoot = dirname(fileURLToPath(import.meta.url));
const manifestPath = join(bundleRoot, "PROFILE_BUNDLE_MANIFEST.json");
const definitionRoot = join(bundleRoot, "Personality files");

function fail(message) {
  throw new Error(`Lisa profile bundle validation failed: ${message}`);
}

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

function assertSafeRelativePath(path) {
  if (
    typeof path !== "string" ||
    path.length === 0 ||
    path.startsWith("/") ||
    path.split("/").includes("..") ||
    path.includes("\\")
  ) {
    fail(`unsafe bundle path: ${String(path)}`);
  }
}

function listFiles(root, current = root) {
  const result = [];
  for (const entry of readdirSync(current, { withFileTypes: true }).sort((a, b) =>
    a.name.localeCompare(b.name),
  )) {
    const absolute = join(current, entry.name);
    if (entry.isSymbolicLink()) {
      fail(`symbolic links are not allowed in the definition bundle: ${relative(root, absolute)}`);
    }
    if (entry.isDirectory()) {
      result.push(...listFiles(root, absolute));
      continue;
    }
    if (!entry.isFile()) {
      fail(`unsupported filesystem entry: ${relative(root, absolute)}`);
    }
    result.push(relative(root, absolute).split(sep).join("/"));
  }
  return result;
}

function verifyEntry(entry, kind) {
  if (!entry || typeof entry !== "object") {
    fail(`${kind} entry must be an object`);
  }
  assertSafeRelativePath(entry.path);
  if (!/^[a-f0-9]{64}$/.test(entry.sha256 ?? "")) {
    fail(`invalid SHA-256 for ${entry.path}`);
  }
  const absolute = resolve(bundleRoot, entry.path);
  if (!absolute.startsWith(`${bundleRoot}${sep}`)) {
    fail(`path escapes bundle root: ${entry.path}`);
  }
  const stat = lstatSync(absolute, { throwIfNoEntry: false });
  if (!stat?.isFile() || stat.isSymbolicLink()) {
    fail(`required regular file is missing: ${entry.path}`);
  }
  const content = readFileSync(absolute);
  const actual = sha256(content);
  if (actual !== entry.sha256) {
    fail(`SHA-256 mismatch for ${entry.path}: expected ${entry.sha256}, got ${actual}`);
  }
  return content;
}

const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
if (manifest.schemaVersion !== 2) {
  fail(`unsupported schemaVersion ${String(manifest.schemaVersion)}`);
}
if (manifest.agentId !== "lisa") {
  fail("agentId must be lisa");
}
if (manifest.checksumAlgorithm !== "sha256") {
  fail("checksumAlgorithm must be sha256");
}

const required = manifest.requiredStableDefinition;
const assets = manifest.intentionalAssets;
if (!Array.isArray(required) || required.length === 0) {
  fail("requiredStableDefinition must be a non-empty array");
}
if (!Array.isArray(assets)) {
  fail("intentionalAssets must be an array");
}

const allEntries = [...required, ...assets];
const seen = new Set();
const textSecretPatterns = [
  /-----BEGIN (?:[A-Z ]+ )?PRIVATE KEY-----/u,
  /\bsk-[A-Za-z0-9_-]{16,}\b/u,
  /\bgh[pousr]_[A-Za-z0-9]{20,}\b/u,
  /\bAIza[0-9A-Za-z_-]{20,}\b/u,
  /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/u,
  /(?:password|client_secret|api[_-]?key|access[_-]?token|refresh[_-]?token|private[_-]?key)\s*[:=]\s*[A-Za-z0-9/+_-]{12,}/iu,
];

for (const entry of allEntries) {
  if (seen.has(entry.path)) {
    fail(`duplicate manifest path: ${entry.path}`);
  }
  seen.add(entry.path);
  const content = verifyEntry(
    entry,
    required.includes(entry) ? "required stable definition" : "intentional asset",
  );
  if (required.includes(entry)) {
    if (typeof entry.role !== "string" || entry.role.length === 0) {
      fail(`required stable definition role is missing: ${entry.path}`);
    }
    const text = content.toString("utf8");
    for (const pattern of textSecretPatterns) {
      if (pattern.test(text)) {
        fail(`secret-shaped value found in ${entry.path}`);
      }
    }
  }
}

const requiredExclusions = new Set([
  "Personality files/openclaw.json",
  "**/.env*",
  "**/credentials/**",
  "**/auth-profiles.json",
  "**/device-pairings/**",
  "**/*.sqlite*",
  "**/logs/**",
]);
const declaredExclusions = new Set(
  (manifest.secretAndRuntimeExclusions ?? []).map((entry) => entry.pattern),
);
for (const pattern of requiredExclusions) {
  if (!declaredExclusions.has(pattern)) {
    fail(`required secret/runtime exclusion is missing: ${pattern}`);
  }
}

const requiredMutable = new Set([
  "Personality files/MEMORY.md",
  "Personality files/memory/**",
  "Personality files/studio/**",
  "Personality files/user/**",
  "**/sessions/**",
  "**/scratch/**",
  "**/usage/**",
  "**/cache/**",
]);
const declaredMutable = new Set((manifest.mutableRuntimeState ?? []).map((entry) => entry.pattern));
for (const pattern of requiredMutable) {
  if (!declaredMutable.has(pattern)) {
    fail(`required mutable-state exclusion is missing: ${pattern}`);
  }
}

for (const entry of required) {
  if (
    entry.path === "Personality files/MEMORY.md" ||
    entry.path.startsWith("Personality files/memory/") ||
    entry.path.startsWith("Personality files/studio/") ||
    entry.path.startsWith("Personality files/user/") ||
    entry.path === "Personality files/openclaw.json"
  ) {
    fail(`excluded runtime/private path declared stable: ${entry.path}`);
  }
}

const expectedDefinitionFiles = new Set(
  allEntries
    .map((entry) => entry.path)
    .filter((path) => path.startsWith("Personality files/"))
    .map((path) => path.slice("Personality files/".length)),
);
const actualDefinitionFiles = listFiles(definitionRoot);
for (const actual of actualDefinitionFiles) {
  if (!expectedDefinitionFiles.has(actual)) {
    fail(`unclassified file in Personality files: ${actual}`);
  }
}
for (const expected of expectedDefinitionFiles) {
  if (!actualDefinitionFiles.includes(expected)) {
    fail(`manifested Personality file is absent: ${expected}`);
  }
}

const png = assets.find((entry) => entry.mediaType === "image/png");
if (
  !png ||
  !readFileSync(resolve(bundleRoot, png.path))
    .subarray(0, 8)
    .equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))
) {
  fail("intentional PNG asset is missing or has invalid magic bytes");
}
const jpeg = assets.find((entry) => entry.mediaType === "image/jpeg");
if (
  !jpeg ||
  !readFileSync(resolve(bundleRoot, jpeg.path))
    .subarray(0, 3)
    .equals(Buffer.from([0xff, 0xd8, 0xff]))
) {
  fail("intentional JPEG asset is missing or has invalid magic bytes");
}

const exact = required.filter((entry) => entry.liveParity === "exact").length;
const normalized = required.filter(
  (entry) => entry.liveParity === "lf-normalized-equivalent",
).length;
if (
  manifest.alignment?.requiredStableFiles !== required.length ||
  manifest.alignment?.exactLiveMatches !== exact ||
  manifest.alignment?.normalizedLiveMatches !== normalized
) {
  fail("alignment summary does not match requiredStableDefinition");
}
if (
  (manifest.alignment?.requiredMissingFromLive ?? []).length !== 0 ||
  (manifest.alignment?.requiredHashMismatches ?? []).length !== 0
) {
  fail("manifest cannot claim an aligned source bundle while required live mismatches remain");
}

console.log(
  JSON.stringify({
    ok: true,
    agentId: manifest.agentId,
    schemaVersion: manifest.schemaVersion,
    requiredStableFiles: required.length,
    intentionalAssets: assets.length,
    exactLiveMatches: exact,
    normalizedLiveMatches: normalized,
    definitionInventoryFiles: actualDefinitionFiles.length,
  }),
);
