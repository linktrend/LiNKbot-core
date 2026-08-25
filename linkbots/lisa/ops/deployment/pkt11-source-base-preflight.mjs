import { validateSourceAcceptanceReceipt } from "../lisa-vps-reconciliation.mjs";

const GIT_SHA = /^[a-f0-9]{40}$/u;
const SHA256 = /^[a-f0-9]{64}$/u;

function fail(code) {
  throw new Error(`pkt11_pre_vps_source_alignment_${code}`);
}

function assertGitSha(value, field) {
  if (typeof value !== "string" || !GIT_SHA.test(value)) {
    fail(`invalid_${field}`);
  }
}

function assertSha256(value, field) {
  if (typeof value !== "string" || !SHA256.test(value)) {
    fail(`invalid_${field}`);
  }
}

/**
 * Bind the source-only PKT-11 receipt to the exact promotion base and package
 * source receipt that the caller just inspected. This is preflight evidence
 * only: it performs no checkout, stage, VPS, provider, or live action.
 */
export function validatePkt11SourceBaseAlignment({
  sourceReceipt,
  stageWorkspacePackageSourceReceipt,
  expectedSourceBase,
}) {
  if (!sourceReceipt || typeof sourceReceipt !== "object") {
    fail("source_receipt_missing");
  }
  if (!stageWorkspacePackageSourceReceipt || typeof stageWorkspacePackageSourceReceipt !== "object") {
    fail("package_receipt_missing");
  }
  if (!expectedSourceBase || typeof expectedSourceBase !== "object") {
    fail("expected_source_base_missing");
  }

  validateSourceAcceptanceReceipt(sourceReceipt);

  if (
    expectedSourceBase.repository !== "openclaw/openclaw" ||
    expectedSourceBase.ref !== "origin/development"
  ) {
    fail("expected_source_base_contract");
  }
  assertGitSha(expectedSourceBase.commit, "expected_commit");
  assertGitSha(expectedSourceBase.tree, "expected_tree");
  if (sourceReceipt.sourceBase.repository !== expectedSourceBase.repository) {
    fail("repository_mismatch");
  }
  if (sourceReceipt.sourceBase.ref !== expectedSourceBase.ref) {
    fail("ref_mismatch");
  }
  if (sourceReceipt.sourceBase.commit !== expectedSourceBase.commit) {
    fail("commit_mismatch");
  }
  if (sourceReceipt.sourceBase.tree !== expectedSourceBase.tree) {
    fail("tree_mismatch");
  }

  const packageReceipt = stageWorkspacePackageSourceReceipt;
  if (packageReceipt.receiptType !== "lisa_stage_workspace_package_source_receipt_v1") {
    fail("package_receipt_type");
  }
  if (packageReceipt.status !== "verified-source") {
    fail("package_status");
  }
  if (typeof packageReceipt.packageId !== "string" || packageReceipt.packageId.length === 0) {
    fail("package_id");
  }
  assertSha256(packageReceipt.manifestSha256, "package_manifest_sha256");
  if (!Number.isSafeInteger(packageReceipt.fileCount) || packageReceipt.fileCount <= 0) {
    fail("package_file_count");
  }
  if (packageReceipt.mutableSeeds !== false || packageReceipt.liveMutationAllowed !== false) {
    fail("package_live_mutation");
  }

  const packageArtifact = sourceReceipt.artifacts?.stageWorkspacePackage;
  if (!packageArtifact || typeof packageArtifact !== "object") {
    fail("source_package_artifact_missing");
  }
  if (packageArtifact.sourceReceiptType !== packageReceipt.receiptType) {
    fail("package_receipt_type_mismatch");
  }
  if (packageArtifact.status !== packageReceipt.status) {
    fail("package_status_mismatch");
  }
  if (packageArtifact.packageId !== packageReceipt.packageId) {
    fail("package_id_mismatch");
  }
  if (packageArtifact.manifestSha256 !== packageReceipt.manifestSha256) {
    fail("package_manifest_mismatch");
  }
  if (packageArtifact.fileCount !== packageReceipt.fileCount) {
    fail("package_file_count_mismatch");
  }
  if (packageArtifact.mutableSeeds !== packageReceipt.mutableSeeds) {
    fail("package_mutable_seed_mismatch");
  }
  if (packageArtifact.liveMutationAllowed !== packageReceipt.liveMutationAllowed) {
    fail("package_live_mutation_mismatch");
  }

  return Object.freeze({
    status: "aligned",
    sourceBase: Object.freeze({
      repository: expectedSourceBase.repository,
      ref: expectedSourceBase.ref,
      commit: expectedSourceBase.commit,
      tree: expectedSourceBase.tree,
    }),
    package: Object.freeze({
      packageId: packageReceipt.packageId,
      manifestSha256: packageReceipt.manifestSha256,
      fileCount: packageReceipt.fileCount,
    }),
    liveActions: false,
  });
}
