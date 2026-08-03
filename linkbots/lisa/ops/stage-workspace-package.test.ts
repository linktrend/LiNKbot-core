/**
 * Stage workspace package — hash verify, receipt, refuse stage root, hermetic install.
 * Run: node --experimental-strip-types --test linkbots/lisa/ops/stage-workspace-package.test.ts
 */
import assert from "node:assert/strict";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";
import { STAGE_OPS_STAGE_ROOT } from "./stage-ops-command.ts";
import {
  DEFAULT_MANIFEST_PATH,
  FORBIDDEN_STAGE_WORKSPACE,
  isForbiddenStageWorkspaceTarget,
  loadStageWorkspacePackageManifest,
  planStageWorkspacePackage,
  verifyStageWorkspacePackage,
} from "./stage-workspace-package.ts";

describe("stage-workspace-package", () => {
  it("manifest loads with 10 files and matching source hashes", () => {
    const manifest = loadStageWorkspacePackageManifest(DEFAULT_MANIFEST_PATH);
    assert.equal(manifest.manifestType, "lisa_stage_workspace_package_v1");
    assert.equal(manifest.defaultMutateStageWorkspace, false);
    assert.equal(manifest.files.length, 10);
    const sources = new Set(manifest.files.map((f) => f.source));
    assert.ok(sources.has("Personality files/HEARTBEAT.md"));
    assert.ok(sources.has("Personality files/agents/morning-digest.md"));
    assert.ok(sources.has("Personality files/agents/ship-pull-clock.md"));
    assert.ok(sources.has("Personality files/agents/repair-dispatcher.md"));
    assert.ok(sources.has("Personality files/templates/telegram-heartbeat.md"));
    assert.ok(sources.has("Personality files/templates/telegram-daily-digest.md"));
    assert.ok(sources.has("Personality files/templates/email-daily-digest.md"));
    assert.ok(sources.has("Personality files/templates/pipeline-one-liner.md"));
    assert.ok(sources.has("ops/render-template.ts"));
    assert.ok(sources.has("ops/templates.ts"));
    const { ok, files } = verifyStageWorkspacePackage({ manifest });
    assert.equal(ok, true);
    assert.ok(files.every((f) => f.ok));
  });

  it("hash verify fails when bytes diverge from manifest", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-ws-hash-fail-"));
    try {
      const manifest = loadStageWorkspacePackageManifest();
      const bad = structuredClone(manifest);
      bad.files[0]!.sha256 = "0".repeat(64);
      const { ok, files } = verifyStageWorkspacePackage({
        manifest: bad,
      });
      assert.equal(ok, false);
      assert.ok(files.some((f) => f.error === "hash_or_size_mismatch"));

      const out = path.join(dir, "out");
      const receipt = planStageWorkspacePackage({
        action: "verify",
        outputDir: out,
        manifestPath: DEFAULT_MANIFEST_PATH,
        nowIso: "2026-08-03T13:00:00.000Z",
      });
      // Force mismatch via rewritten temp manifest
      const badPath = path.join(dir, "bad.manifest.json");
      writeFileSync(badPath, `${JSON.stringify(bad, null, 2)}\n`);
      const mismatch = planStageWorkspacePackage({
        action: "verify",
        outputDir: out,
        manifestPath: badPath,
      });
      assert.equal(mismatch.status, "hash_mismatch");
      assert.equal(mismatch.mutateWorkspace, false);
      assert.equal(mismatch.stageWorkspaceMutated, false);
      assert.equal(receipt.receiptType, "lisa_stage_workspace_package_receipt_v1");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("receipt schema on verify (no workspace mutation)", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-ws-verify-"));
    try {
      const receipt = planStageWorkspacePackage({
        action: "verify",
        outputDir: dir,
        nowIso: "2026-08-03T13:01:00.000Z",
      });
      assert.equal(receipt.status, "verified");
      assert.equal(receipt.receiptType, "lisa_stage_workspace_package_receipt_v1");
      assert.equal(receipt.mutateWorkspace, false);
      assert.equal(receipt.stageWorkspaceMutated, false);
      assert.equal(receipt.liveLisaTouched, false);
      assert.equal(receipt.hardStops.defaultMutateStageWorkspace, false);
      assert.equal(receipt.installedPaths.length, 0);
      assert.equal(receipt.files.length, 10);
      const written = JSON.parse(
        readFileSync(path.join(dir, "stage-workspace-package-receipt.json"), "utf8"),
      ) as typeof receipt;
      assert.equal(written.status, "verified");
      assert.equal(written.packageId, receipt.packageId);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("refuses mutating default stage root / workspace", () => {
    assert.equal(isForbiddenStageWorkspaceTarget(STAGE_OPS_STAGE_ROOT), true);
    assert.equal(isForbiddenStageWorkspaceTarget(FORBIDDEN_STAGE_WORKSPACE), true);
    assert.equal(
      isForbiddenStageWorkspaceTarget(path.join(FORBIDDEN_STAGE_WORKSPACE, "agents")),
      true,
    );

    const dir = mkdtempSync(path.join(tmpdir(), "stage-ws-refuse-"));
    try {
      const receipt = planStageWorkspacePackage({
        action: "install",
        targetDir: FORBIDDEN_STAGE_WORKSPACE,
        outputDir: dir,
        allowForbiddenStageTarget: false,
      });
      assert.equal(receipt.status, "blocked_forbidden_target");
      assert.equal(receipt.mutateWorkspace, false);
      assert.equal(receipt.stageWorkspaceMutated, false);
      assert.equal(receipt.installedPaths.length, 0);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("hermetic install to temp dir succeeds", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-ws-hermetic-"));
    const target = path.join(dir, "workspace");
    const out = path.join(dir, "out");
    mkdirSync(target, { recursive: true });
    try {
      const receipt = planStageWorkspacePackage({
        action: "install",
        targetDir: target,
        outputDir: out,
        nowIso: "2026-08-03T13:02:00.000Z",
      });
      assert.equal(receipt.status, "installed");
      assert.equal(receipt.mutateWorkspace, true);
      assert.equal(receipt.stageWorkspaceMutated, false);
      assert.equal(receipt.installedPaths.length, 10);
      assert.ok(existsSync(path.join(target, "HEARTBEAT.md")));
      assert.ok(existsSync(path.join(target, "agents", "morning-digest.md")));
      assert.ok(existsSync(path.join(target, "agents", "ship-pull-clock.md")));
      assert.ok(existsSync(path.join(target, "agents", "repair-dispatcher.md")));
      assert.ok(existsSync(path.join(target, "templates", "telegram-heartbeat.md")));
      assert.ok(existsSync(path.join(target, "templates", "telegram-daily-digest.md")));
      assert.ok(existsSync(path.join(target, "templates", "email-daily-digest.md")));
      assert.ok(existsSync(path.join(target, "templates", "pipeline-one-liner.md")));
      assert.ok(existsSync(path.join(target, "ops", "render-template.ts")));
      assert.ok(existsSync(path.join(target, "ops", "templates.ts")));
      assert.ok(receipt.copyCommands.length >= 10);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("emit-commands does not install", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-ws-cmds-"));
    const target = path.join(dir, "workspace");
    try {
      const receipt = planStageWorkspacePackage({
        action: "emit-commands",
        targetDir: target,
        outputDir: dir,
      });
      assert.equal(receipt.status, "commands_emitted");
      assert.equal(receipt.installedPaths.length, 0);
      assert.equal(existsSync(target), false);
      assert.ok(receipt.copyCommands.some((c) => c.includes("HEARTBEAT.md")));
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
