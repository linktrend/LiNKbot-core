import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import {
  cpSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  unlinkSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";

const sourceRoot = path.dirname(fileURLToPath(import.meta.url));
const manifestName = "PROFILE_BUNDLE_MANIFEST.json";
const receiptName = "PROFILE_BUNDLE_LIVE_COMPARISON_RECEIPT.json";
const validatorName = "validate-profile-bundle.mjs";

function createFixture() {
  const temp = mkdtempSync(path.join(tmpdir(), "lisa-profile-bundle-"));
  const bundle = path.join(temp, "bundle");
  mkdirSync(bundle, { recursive: true });
  cpSync(path.join(sourceRoot, "Personality files"), path.join(bundle, "Personality files"), {
    recursive: true,
  });
  for (const name of [manifestName, receiptName, validatorName]) {
    cpSync(path.join(sourceRoot, name), path.join(bundle, name));
  }
  return { temp, bundle };
}

function runValidator(bundle) {
  return spawnSync(process.execPath, [path.join(bundle, validatorName)], {
    encoding: "utf8",
  });
}

function readJson(bundle, name) {
  return JSON.parse(readFileSync(path.join(bundle, name), "utf8"));
}

function writeJson(bundle, name, value) {
  writeFileSync(path.join(bundle, name), `${JSON.stringify(value, null, 2)}\n`);
}

function repinReceipt(bundle, receipt, manifest) {
  writeJson(bundle, receiptName, receipt);
  manifest.comparisonReceipt.sha256 = createHash("sha256")
    .update(readFileSync(path.join(bundle, receiptName)))
    .digest("hex");
  writeJson(bundle, manifestName, manifest);
}

describe("Lisa profile bundle validator", () => {
  it("accepts the pinned offline source and comparison receipt", () => {
    const { temp, bundle } = createFixture();
    try {
      const result = runValidator(bundle);
      assert.equal(result.status, 0, result.stderr);
      const receipt = JSON.parse(result.stdout);
      assert.equal(receipt.ok, true);
      assert.equal(receipt.exactLiveMatches, 21);
      assert.equal(receipt.normalizedLiveMatches, 1);
    } finally {
      rmSync(temp, { recursive: true, force: true });
    }
  });

  it("rejects a missing or stale immutable comparison receipt", () => {
    const missing = createFixture();
    try {
      unlinkSync(path.join(missing.bundle, receiptName));
      const result = runValidator(missing.bundle);
      assert.notEqual(result.status, 0);
      assert.match(result.stderr, /comparison receipt is missing/i);
    } finally {
      rmSync(missing.temp, { recursive: true, force: true });
    }

    const stale = createFixture();
    try {
      const receipt = readJson(stale.bundle, receiptName);
      receipt.capturedAt = "2026-08-10T00:00:00.000Z";
      writeJson(stale.bundle, receiptName, receipt);
      const result = runValidator(stale.bundle);
      assert.notEqual(result.status, 0);
      assert.match(result.stderr, /receipt SHA-256 is stale or mismatched/i);
    } finally {
      rmSync(stale.temp, { recursive: true, force: true });
    }
  });

  it("rejects manifest-only liveParity assertions", () => {
    const { temp, bundle } = createFixture();
    try {
      const manifest = readJson(bundle, manifestName);
      manifest.requiredStableDefinition[0].liveParity = "exact";
      writeJson(bundle, manifestName, manifest);
      const result = runValidator(bundle);
      assert.notEqual(result.status, 0);
      assert.match(result.stderr, /live parity must come from the immutable comparison receipt/i);
    } finally {
      rmSync(temp, { recursive: true, force: true });
    }
  });

  it("rejects an invalid normalization even when the changed receipt is re-pinned", () => {
    const { temp, bundle } = createFixture();
    try {
      const manifest = readJson(bundle, manifestName);
      const receipt = readJson(bundle, receiptName);
      const lisaSafe = receipt.requiredStableDefinition.find(
        (entry) => entry.path === "Personality files/tools/lisa-safe.md",
      );
      assert.ok(lisaSafe);
      lisaSafe.normalization = "none";
      delete lisaSafe.liveNormalizedSha256;
      repinReceipt(bundle, receipt, manifest);
      const result = runValidator(bundle);
      assert.notEqual(result.status, 0);
      assert.match(result.stderr, /raw live parity is not exact/i);
    } finally {
      rmSync(temp, { recursive: true, force: true });
    }
  });
});
