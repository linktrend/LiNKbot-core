#!/usr/bin/env node

import { createHash } from "node:crypto";
import { lstatSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

const bundleRoot = dirname(fileURLToPath(import.meta.url));
const manifestPath = join(bundleRoot, "PROFILE_BUNDLE_MANIFEST.json");
const definitionRoot = join(bundleRoot, "Personality files");
const comparisonReceiptRelativePath = "PROFILE_BUNDLE_LIVE_COMPARISON_RECEIPT.json";

function fail(message) {
  throw new Error(`Lisa profile bundle validation failed: ${message}`);
}

function sha256(buffer) {
  return createHash("sha256").update(buffer).digest("hex");
}

function isSha256(value) {
  return typeof value === "string" && /^[a-f0-9]{64}$/.test(value);
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
  for (const entry of readdirSync(current, { withFileTypes: true }).toSorted((a, b) =>
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
  if (!isSha256(entry.sha256)) {
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
if (
  manifest.comparisonReceipt?.path !== comparisonReceiptRelativePath ||
  !isSha256(manifest.comparisonReceipt?.sha256)
) {
  fail("comparisonReceipt must pin the immutable live-comparison receipt by path and SHA-256");
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
  if ("liveParity" in entry || "liveComparisonNormalization" in entry) {
    fail(`live parity must come from the immutable comparison receipt: ${entry.path}`);
  }
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

const comparisonReceiptPath = resolve(bundleRoot, comparisonReceiptRelativePath);
const comparisonReceiptStat = lstatSync(comparisonReceiptPath, { throwIfNoEntry: false });
if (!comparisonReceiptStat?.isFile() || comparisonReceiptStat.isSymbolicLink()) {
  fail("immutable live-comparison receipt is missing or is not a regular file");
}
const comparisonReceiptBytes = readFileSync(comparisonReceiptPath);
if (sha256(comparisonReceiptBytes) !== manifest.comparisonReceipt.sha256) {
  fail("immutable live-comparison receipt SHA-256 is stale or mismatched");
}
const comparisonReceipt = JSON.parse(comparisonReceiptBytes.toString("utf8"));
if (comparisonReceipt.receiptType !== "lisa_profile_bundle_live_comparison_receipt_v1") {
  fail("unsupported live-comparison receipt type");
}
if (
  comparisonReceipt.capturedAt !== manifest.sourceSnapshot?.checkedAt ||
  comparisonReceipt.sourceEnvironment?.codeRevision !== manifest.sourceSnapshot?.liveCodeRevision ||
  comparisonReceipt.sourceEnvironment?.workspace !== manifest.sourceSnapshot?.liveWorkspace
) {
  fail("live-comparison receipt source metadata is stale or differs from the manifest");
}
if (
  typeof comparisonReceipt.sourceEnvironment?.id !== "string" ||
  comparisonReceipt.sourceEnvironment.id.length === 0 ||
  comparisonReceipt.capturePolicy?.contentRecorded !== false ||
  comparisonReceipt.capturePolicy?.secretValuesRecorded !== false
) {
  fail("live-comparison receipt must identify its source and remain metadata-only");
}
if (
  comparisonReceipt.capturePolicy?.normalizations?.none !==
    "Compare the live raw SHA-256 directly with the repository SHA-256." ||
  comparisonReceipt.capturePolicy?.normalizations?.["strip-cr"] !==
    "Remove every carriage-return byte (0x0d) from live bytes, then compute SHA-256. Allowed only for text line-ending equivalence."
) {
  fail("live-comparison receipt normalization rules are missing or changed");
}

const receiptRequired = comparisonReceipt.requiredStableDefinition;
if (!Array.isArray(receiptRequired) || receiptRequired.length !== required.length) {
  fail("live-comparison receipt must contain every required stable definition path exactly once");
}
const receiptByPath = new Map();
for (const receiptEntry of receiptRequired) {
  assertSafeRelativePath(receiptEntry?.path);
  if (receiptByPath.has(receiptEntry.path)) {
    fail(`duplicate live-comparison receipt path: ${receiptEntry.path}`);
  }
  receiptByPath.set(receiptEntry.path, receiptEntry);
}

let exact = 0;
let normalized = 0;
for (const entry of required) {
  const receiptEntry = receiptByPath.get(entry.path);
  if (!receiptEntry) {
    fail(`required stable path missing from live-comparison receipt: ${entry.path}`);
  }
  if (
    receiptEntry.repoSha256 !== entry.sha256 ||
    !isSha256(receiptEntry.liveRawSha256) ||
    !Number.isSafeInteger(receiptEntry.liveRawBytes) ||
    receiptEntry.liveRawBytes < 0
  ) {
    fail(`invalid or stale live-comparison metadata for ${entry.path}`);
  }
  if (receiptEntry.normalization === "none") {
    if (receiptEntry.liveRawSha256 !== entry.sha256 || "liveNormalizedSha256" in receiptEntry) {
      fail(`raw live parity is not exact for ${entry.path}`);
    }
    exact += 1;
    continue;
  }
  if (receiptEntry.normalization === "strip-cr") {
    if (
      receiptEntry.liveRawSha256 === entry.sha256 ||
      receiptEntry.liveNormalizedSha256 !== entry.sha256
    ) {
      fail(`strip-cr live parity is invalid for ${entry.path}`);
    }
    normalized += 1;
    continue;
  }
  fail(`unsupported live-comparison normalization for ${entry.path}`);
}

const deployedAssets = assets.filter((entry) => entry.deploymentRequired === true);
const receiptAssets = comparisonReceipt.deployedAssets;
if (!Array.isArray(receiptAssets) || receiptAssets.length !== deployedAssets.length) {
  fail("live-comparison receipt must contain every deployment-required asset exactly once");
}
const receiptAssetByPath = new Map();
for (const receiptEntry of receiptAssets) {
  assertSafeRelativePath(receiptEntry?.path);
  if (receiptAssetByPath.has(receiptEntry.path)) {
    fail(`duplicate deployed-asset receipt path: ${receiptEntry.path}`);
  }
  receiptAssetByPath.set(receiptEntry.path, receiptEntry);
}
for (const entry of deployedAssets) {
  const receiptEntry = receiptAssetByPath.get(entry.path);
  if (
    !receiptEntry ||
    receiptEntry.repoSha256 !== entry.sha256 ||
    receiptEntry.liveRawSha256 !== entry.sha256 ||
    receiptEntry.normalization !== "none" ||
    !Number.isSafeInteger(receiptEntry.liveRawBytes) ||
    receiptEntry.liveRawBytes < 0
  ) {
    fail(`deployment asset is missing or stale in the live-comparison receipt: ${entry.path}`);
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

if (
  manifest.alignment?.requiredStableFiles !== required.length ||
  manifest.alignment?.exactLiveMatches !== exact ||
  manifest.alignment?.normalizedLiveMatches !== normalized ||
  manifest.alignment?.deploymentAssetsExact !== deployedAssets.length
) {
  fail("alignment summary does not match the immutable live-comparison receipt");
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
