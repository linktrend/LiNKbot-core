import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import {
  buildSourceAcceptanceReceipt,
  validateSourceAcceptanceReceipt,
} from "../lisa-vps-reconciliation.mjs";
import { validatePkt11SourceBaseAlignment } from "./pkt11-source-base-preflight.mjs";

const EXPECTED_SOURCE_BASE = {
  repository: "openclaw/openclaw",
  ref: "origin/development",
  commit: "e29a24a84737fd2e0af5acff9a4ccedb0ca647c7",
  tree: "209423a74715df675b1dd03cdfed1cc9b86bcb4b",
};

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

test("rejects the committed PKT-11 receipt when its source base is stale", () => {
  const sourceReceipt = readJson("linkbots/lisa/ops/receipts/pkt-11-source-acceptance.receipt.json");
  const packageReceipt = readJson(
    "linkbots/lisa/ops/receipts/stage-workspace-package-source.receipt.json",
  );
  validateSourceAcceptanceReceipt(sourceReceipt);
  assert.throws(
    () =>
      validatePkt11SourceBaseAlignment({
        sourceReceipt,
        stageWorkspacePackageSourceReceipt: packageReceipt,
        expectedSourceBase: EXPECTED_SOURCE_BASE,
      }),
    /pkt11_pre_vps_source_alignment_commit_mismatch/,
  );
});

test("accepts a receipt rebuilt for the exact protected base and package receipt", () => {
  const packageReceipt = readJson(
    "linkbots/lisa/ops/receipts/stage-workspace-package-source.receipt.json",
  );
  const sourceReceipt = buildSourceAcceptanceReceipt({
    sourceBase: EXPECTED_SOURCE_BASE,
    stageWorkspacePackage: {
      status: packageReceipt.status,
      packageId: packageReceipt.packageId,
      manifestSha256: packageReceipt.manifestSha256,
      fileCount: packageReceipt.fileCount,
    },
  });
  const result = validatePkt11SourceBaseAlignment({
    sourceReceipt,
    stageWorkspacePackageSourceReceipt: packageReceipt,
    expectedSourceBase: EXPECTED_SOURCE_BASE,
  });
  assert.deepEqual(result, {
    status: "aligned",
    sourceBase: EXPECTED_SOURCE_BASE,
    package: {
      packageId: packageReceipt.packageId,
      manifestSha256: packageReceipt.manifestSha256,
      fileCount: packageReceipt.fileCount,
    },
    liveActions: false,
  });
});

test("rejects package receipt drift even when the source receipt digest is valid", () => {
  const packageReceipt = readJson(
    "linkbots/lisa/ops/receipts/stage-workspace-package-source.receipt.json",
  );
  const sourceReceipt = buildSourceAcceptanceReceipt({
    sourceBase: EXPECTED_SOURCE_BASE,
    stageWorkspacePackage: {
      status: packageReceipt.status,
      packageId: packageReceipt.packageId,
      manifestSha256: "0".repeat(64),
      fileCount: packageReceipt.fileCount,
    },
  });
  assert.throws(
    () =>
      validatePkt11SourceBaseAlignment({
        sourceReceipt,
        stageWorkspacePackageSourceReceipt: packageReceipt,
        expectedSourceBase: EXPECTED_SOURCE_BASE,
      }),
    /pkt11_pre_vps_source_alignment_package_manifest_mismatch/,
  );
});
