/**
 * Stage workspace package — hash verify, receipt, refuse stage/live, hermetic
 * stable-profile install, and honest Google/task adapters.
 * Run: node --import tsx --import ./linkbots/lisa/ops/register-strip-types-js-resolve.mjs
 *   --test linkbots/lisa/ops/stage-workspace-package.test.ts
 */
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import {
  chmodSync,
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";
import { STAGE_OPS_STAGE_ROOT } from "./stage-ops-command.ts";
import {
  STAGE_EXTERNAL_HELPER_SKIP_CONTRACT,
  buildDigestStageMessage,
  buildHeartbeatStageMessage,
  renderStageExternalUnavailableOutput,
  validateStageExternalUnavailableOutput,
} from "./stage-ops-payloads.ts";
import {
  DEFAULT_MANIFEST_PATH,
  FORBIDDEN_STAGE_WORKSPACE,
  buildPkt11OfflineRollbackEvidence,
  buildPkt11PreVpsQualificationReceipt,
  buildStageWorkspacePackageSourceReceipt,
  hashStageWorkspacePackageManifest,
  isForbiddenLiveLisaTarget,
  isForbiddenStageWorkspaceTarget,
  loadStageWorkspacePackageManifest,
  planStageWorkspacePackage,
  runPkt11OfflineCanary,
  validatePkt11OfflineCanaryConfig,
  validatePkt11PreVpsQualificationReceipt,
  verifyStageWorkspacePackage,
} from "./stage-workspace-package.ts";

describe("stage-workspace-package", () => {
  it("manifest loads only complete hashed stable-definition and operational files", () => {
    const manifest = loadStageWorkspacePackageManifest(DEFAULT_MANIFEST_PATH);
    assert.equal(manifest.manifestType, "lisa_stage_workspace_package_v1");
    assert.equal(manifest.defaultMutateStageWorkspace, false);
    assert.equal(manifest.liveMutationAllowed, false);
    assert.equal(manifest.files.length, 45);
    assert.deepEqual(manifest.initializeIfMissing, []);
    const sources = new Set(manifest.files.map((f) => f.source));
    assert.ok(sources.has("Personality files/HEARTBEAT.md"));
    assert.ok(sources.has("Personality files/agents/morning-digest.md"));
    assert.ok(sources.has("Personality files/templates/telegram-daily-digest.md"));
    assert.ok(sources.has("Personality files/templates/email-daily-digest.md"));
    assert.ok(!sources.has("Personality files/agents/ship-pull-clock.md"));
    assert.ok(!sources.has("Personality files/agents/repair-dispatcher.md"));
    assert.ok(!sources.has("Personality files/agents/pipeline-status.md"));
    assert.ok(!sources.has("Personality files/templates/telegram-heartbeat.md"));
    assert.ok(!sources.has("Personality files/templates/pipeline-one-liner.md"));
    assert.ok(sources.has("ops/render-template.ts"));
    assert.ok(sources.has("ops/templates.ts"));
    assert.ok(sources.has("ops/jobs/lisa-job-catalogue.ts"));
    assert.ok(sources.has("ops/jobs/render-lisa-job-template.ts"));
    assert.ok(sources.has("ops/jobs/reporting/reporting.ts"));
    assert.ok(sources.has("ops/jobs/compliance/battery.ts"));
    assert.ok(sources.has("ops/jobs/time-management/planner.ts"));
    assert.ok(sources.has("ops/jobs/health/health.ts"));
    assert.ok(sources.has("ops/stage-workspace-seeds/tools/bin/lisa-safe"));
    assert.ok(sources.has("ops/stage-workspace-seeds/tools/bin/lisa-carlos-tasks"));
    assert.ok([...sources].every((source) => !source.includes("openclaw.json")));
    assert.ok([...sources].every((source) => !source.includes("/memory/")));
    assert.ok([...sources].every((source) => !source.endsWith("/MEMORY.md")));
    const { ok, files } = verifyStageWorkspacePackage({ manifest });
    assert.equal(ok, true);
    assert.equal(files.filter((f) => !f.ok).length, 0);
    assert.ok(files.every((f) => f.error === undefined));
    assert.equal(files.length, 45);
    assert.match(hashStageWorkspacePackageManifest(manifest), /^[a-f0-9]{64}$/);
  });

  it("emits deterministic source evidence without absolute paths or target state", () => {
    const first = buildStageWorkspacePackageSourceReceipt();
    const second = buildStageWorkspacePackageSourceReceipt();
    assert.equal(first.receiptType, "lisa_stage_workspace_package_source_receipt_v1");
    assert.equal(first.status, "verified-source");
    assert.equal(first.fileCount, 45);
    assert.equal(first.mutableSeeds, false);
    assert.equal(first.liveMutationAllowed, false);
    assert.equal(first.defaultMutateStageWorkspace, false);
    assert.equal(first.sourceRoot, "linkbots/lisa");
    assert.deepEqual(first, second);
    assert.doesNotMatch(JSON.stringify(first), /\/private\/tmp|\.openclaw-lisa|targetDir/);
  });

  it("qualifies a hermetic PKT-11 pre-VPS canary and assembles offline rollback evidence", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "pkt11-pre-vps-"));
    const targetDir = path.join(dir, "target");
    const outputDir = path.join(dir, "receipt");
    mkdirSync(targetDir, { recursive: true });
    try {
      const config = {
        targetDir,
        outputDir,
        action: "install" as const,
        networkAccess: "disabled" as const,
        delivery: "none" as const,
        oauthEnabled: false as const,
        schedulesEnabled: false as const,
        liveMutationAllowed: false as const,
      };
      validatePkt11OfflineCanaryConfig(config);
      const canary = runPkt11OfflineCanary(config);
      assert.equal(canary.status, "passed");
      assert.equal(canary.installedFileCount, 45);
      assert.equal(canary.liveLisaTouched, false);
      assert.equal(canary.stageWorkspaceMutated, false);

      rmSync(targetDir, { recursive: true, force: true });
      const rollback = buildPkt11OfflineRollbackEvidence({
        installedFileCount: canary.installedFileCount,
        removedFileCount: canary.installedFileCount,
      });
      const packageReceipt = buildStageWorkspacePackageSourceReceipt();
      const receipt = buildPkt11PreVpsQualificationReceipt({
        sourceBase: {
          repository: "openclaw/openclaw",
          ref: "origin/development",
          commit: "e29a24a84737fd2e0af5acff9a4ccedb0ca647c7",
          tree: "209423a74715df675b1dd03cdfed1cc9b86bcb4b",
        },
        stageWorkspacePackage: {
          packageId: packageReceipt.packageId,
          manifestSha256: packageReceipt.manifestSha256,
          fileCount: packageReceipt.fileCount,
          status: packageReceipt.status,
        },
        offlineCanary: canary,
        rollback,
      });
      validatePkt11PreVpsQualificationReceipt(receipt);
      assert.equal(receipt.status, "offline-qualified");
      assert.ok(Object.values(receipt.gates).every((gate) => gate.status === "HOLD"));
      assert.ok(Object.values(receipt.actions).every((action) => action === false));
      assert.equal(receipt.rollback.liveRestorePerformed, false);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("fails closed when the offline harness is given an enabled or live configuration", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "pkt11-pre-vps-config-"));
    const targetDir = path.join(dir, "target");
    mkdirSync(targetDir, { recursive: true });
    try {
      assert.throws(
        () =>
          validatePkt11OfflineCanaryConfig({
            targetDir,
            outputDir: path.join(dir, "out"),
            action: "install",
            networkAccess: "disabled",
            delivery: "none",
            oauthEnabled: false,
            schedulesEnabled: true,
            liveMutationAllowed: false,
          }),
        /pkt11_pre_vps_config_schedules/,
      );
      assert.throws(
        () =>
          validatePkt11OfflineCanaryConfig({
            targetDir: FORBIDDEN_STAGE_WORKSPACE,
            outputDir: path.join(dir, "out"),
            action: "install",
            networkAccess: "disabled",
            delivery: "none",
            oauthEnabled: false,
            schedulesEnabled: false,
            liveMutationAllowed: false,
          }),
        /pkt11_pre_vps_config_forbidden_target/,
      );
      assert.throws(
        () =>
          validatePkt11OfflineCanaryConfig({
            targetDir,
            outputDir: path.join(targetDir, "nested-output"),
            action: "install",
            networkAccess: "disabled",
            delivery: "none",
            oauthEnabled: false,
            schedulesEnabled: false,
            liveMutationAllowed: false,
          }),
        /pkt11_pre_vps_config_source_or_nested_paths/,
      );
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("validates the committed PKT-11 pre-VPS receipt without live evidence", () => {
    const receipt = JSON.parse(
      readFileSync("linkbots/lisa/ops/receipts/pkt-11-pre-vps-qualification.receipt.json", "utf8"),
    );
    validatePkt11PreVpsQualificationReceipt(receipt);
    assert.equal(receipt.sourceBase.commit, "e29a24a84737fd2e0af5acff9a4ccedb0ca647c7");
    assert.equal(receipt.sourceBase.tree, "209423a74715df675b1dd03cdfed1cc9b86bcb4b");
    assert.equal(receipt.offlineCanary.networkAccess, "disabled");
    assert.equal(receipt.rollback.rollbackVerified, true);
    assert.ok(Object.values(receipt.gates).every((gate) => gate.status === "HOLD"));
  });

  it("rejects pre-VPS receipt claims that cross a gate or alter its digest", () => {
    const receipt = JSON.parse(
      readFileSync("linkbots/lisa/ops/receipts/pkt-11-pre-vps-qualification.receipt.json", "utf8"),
    );
    const gateClaim = structuredClone(receipt);
    gateClaim.gates.vpsDeployment.status = "PASS";
    assert.throws(
      () => validatePkt11PreVpsQualificationReceipt(gateClaim),
      /pkt11_pre_vps_receipt_gate:vpsDeployment/,
    );
    const actionClaim = structuredClone(receipt);
    actionClaim.actions.vpsTouched = true;
    assert.throws(
      () => validatePkt11PreVpsQualificationReceipt(actionClaim),
      /pkt11_pre_vps_receipt_action:vpsTouched/,
    );
    const digestTamper = structuredClone(receipt);
    digestTamper.receiptDigestSha256 = "0".repeat(64);
    assert.throws(
      () => validatePkt11PreVpsQualificationReceipt(digestTamper),
      /pkt11_pre_vps_receipt_digest/,
    );
  });

  it("rejects mutable/private profile seeds even in a caller-supplied manifest", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-ws-private-seed-"));
    try {
      const bad = structuredClone(loadStageWorkspacePackageManifest());
      bad.initializeIfMissing = [
        {
          source: "Personality files/MEMORY.md",
          destination: "MEMORY.md",
          sha256: "0".repeat(64),
          bytes: 1,
        },
      ];
      const badPath = path.join(dir, "bad.manifest.json");
      writeFileSync(badPath, `${JSON.stringify(bad, null, 2)}\n`);
      assert.throws(
        () => loadStageWorkspacePackageManifest(badPath),
        /must not include mutable runtime seeds/,
      );
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("rejects traversal destinations before a disposable copy plan is built", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-ws-path-guard-"));
    try {
      const bad = structuredClone(loadStageWorkspacePackageManifest());
      bad.files[0]!.destination = "../outside-stage-package";
      const badPath = path.join(dir, "bad-path.manifest.json");
      writeFileSync(badPath, `${JSON.stringify(bad, null, 2)}\n`);
      assert.throws(
        () => loadStageWorkspacePackageManifest(badPath),
        /relative non-traversing path/,
      );
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
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
      assert.equal(receipt.files.length, 45);
      const written = JSON.parse(
        readFileSync(path.join(dir, "stage-workspace-package-receipt.json"), "utf8"),
      ) as typeof receipt;
      assert.equal(written.status, "verified");
      assert.equal(written.packageId, receipt.packageId);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("refuses mutating default stage root / workspace and live Lisa", () => {
    assert.equal(isForbiddenStageWorkspaceTarget(STAGE_OPS_STAGE_ROOT), true);
    assert.equal(isForbiddenStageWorkspaceTarget(FORBIDDEN_STAGE_WORKSPACE), true);
    assert.equal(
      isForbiddenStageWorkspaceTarget(path.join(FORBIDDEN_STAGE_WORKSPACE, "agents")),
      true,
    );
    assert.equal(isForbiddenLiveLisaTarget("/Users/linktrend/.openclaw-lisa"), true);
    assert.equal(isForbiddenLiveLisaTarget("/Users/linktrend/.openclaw-lisa/workspace"), true);

    const dir = mkdtempSync(path.join(tmpdir(), "stage-ws-refuse-"));
    try {
      const stageBlocked = planStageWorkspacePackage({
        action: "install",
        targetDir: FORBIDDEN_STAGE_WORKSPACE,
        outputDir: dir,
        allowForbiddenStageTarget: false,
      });
      assert.equal(stageBlocked.status, "blocked_forbidden_target");
      assert.equal(stageBlocked.mutateWorkspace, false);
      assert.equal(stageBlocked.installedPaths.length, 0);

      const liveBlocked = planStageWorkspacePackage({
        action: "install",
        targetDir: "/Users/linktrend/.openclaw-lisa/workspace",
        outputDir: dir,
        allowForbiddenStageTarget: true,
      });
      assert.equal(liveBlocked.status, "blocked_forbidden_target");
      assert.equal(liveBlocked.liveLisaTouched, false);
      assert.equal(liveBlocked.installedPaths.length, 0);

      const liveCommandsBlocked = planStageWorkspacePackage({
        action: "emit-commands",
        targetDir: "/Users/linktrend/.openclaw-lisa/workspace",
        outputDir: dir,
      });
      assert.equal(liveCommandsBlocked.status, "blocked_forbidden_target");
      assert.deepEqual(liveCommandsBlocked.copyCommands, []);

      const liveAlias = path.join(dir, "alias-to-live-lisa");
      symlinkSync("/Users/linktrend", liveAlias);
      const hiddenLiveTarget = path.join(
        liveAlias,
        ".openclaw-lisa",
        "workspace",
        "missing",
        "nested",
      );
      assert.equal(isForbiddenLiveLisaTarget(hiddenLiveTarget), true);
      const symlinkBlocked = planStageWorkspacePackage({
        action: "install",
        targetDir: hiddenLiveTarget,
        outputDir: dir,
        allowForbiddenStageTarget: true,
      });
      assert.equal(symlinkBlocked.status, "blocked_forbidden_target");
      assert.deepEqual(symlinkBlocked.copyCommands, []);
      assert.equal(symlinkBlocked.installedPaths.length, 0);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("hermetic install includes stable procedures and adapters but no mutable state", () => {
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
      assert.equal(receipt.liveLisaTouched, false);
      assert.deepEqual(receipt.initializedPaths, []);
      assert.ok(existsSync(path.join(target, "HEARTBEAT.md")));
      assert.ok(existsSync(path.join(target, "agents", "morning-digest.md")));
      assert.equal(existsSync(path.join(target, "agents", "ship-pull-clock.md")), false);
      assert.equal(existsSync(path.join(target, "agents", "repair-dispatcher.md")), false);
      assert.equal(existsSync(path.join(target, "agents", "pipeline-status.md")), false);
      assert.equal(existsSync(path.join(target, "templates", "telegram-heartbeat.md")), false);
      assert.ok(existsSync(path.join(target, "templates", "telegram-daily-digest.md")));
      assert.ok(existsSync(path.join(target, "templates", "email-daily-digest.md")));
      assert.equal(existsSync(path.join(target, "templates", "pipeline-one-liner.md")), false);
      assert.ok(existsSync(path.join(target, "ops", "render-template.ts")));
      assert.ok(existsSync(path.join(target, "ops", "templates.ts")));
      assert.ok(existsSync(path.join(target, "tools", "bin", "lisa-safe")));
      assert.ok(existsSync(path.join(target, "tools", "bin", "lisa-carlos-tasks")));
      assert.equal(existsSync(path.join(target, "memory")), false);
      assert.equal(receipt.copyCommands.length, 45);
      assert.ok(existsSync(path.join(target, "ops", "jobs", "lisa-job-catalogue.ts")));
      assert.ok(existsSync(path.join(target, "ops", "jobs", "render-lisa-job-template.ts")));
      assert.ok(
        existsSync(
          path.join(target, "ops", "jobs", "reporting", "templates", "executive-digest.md"),
        ),
      );
      assert.ok(
        existsSync(path.join(target, "ops", "jobs", "health", "templates", "monthly-report.md")),
      );

      const tsxLoader = createRequire(import.meta.url).resolve("tsx");
      const stdinRendered = spawnSync(
        process.execPath,
        [
          "--import",
          tsxLoader,
          path.join(target, "ops", "jobs", "render-lisa-job-template.ts"),
          "-",
        ],
        {
          cwd: target,
          input: JSON.stringify({
            kind: "battery-checkpoint",
            input: {},
          }),
          encoding: "utf8",
        },
      );
      assert.equal(stdinRendered.status, 0, stdinRendered.stderr);
      assert.match(stdinRendered.stdout, /Battery checkpoint/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("reinstall remains deterministic and does not manage runtime-owned mutable state", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-ws-preserve-"));
    const target = path.join(dir, "workspace");
    const out1 = path.join(dir, "out1");
    const out2 = path.join(dir, "out2");
    mkdirSync(target, { recursive: true });
    try {
      planStageWorkspacePackage({
        action: "install",
        targetDir: target,
        outputDir: out1,
      });
      const runtimeDir = path.join(target, "memory");
      const runtimePath = path.join(runtimeDir, "runtime-owned.txt");
      mkdirSync(runtimeDir, { recursive: true });
      writeFileSync(runtimePath, "runtime owns this state\n");

      const second = planStageWorkspacePackage({
        action: "install",
        targetDir: target,
        outputDir: out2,
      });
      assert.equal(second.status, "installed");
      assert.deepEqual(second.preservedPaths, []);
      assert.deepEqual(second.initializedPaths, []);
      assert.equal(readFileSync(runtimePath, "utf8"), "runtime owns this state\n");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("stage adapters emit honest STAGE_SKIPPED tokens and never succeed", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-ws-adapters-"));
    const target = path.join(dir, "workspace");
    mkdirSync(target, { recursive: true });
    try {
      planStageWorkspacePackage({
        action: "install",
        targetDir: target,
        outputDir: path.join(dir, "out"),
      });
      const safe = path.join(target, "tools", "bin", "lisa-safe");
      const tasks = path.join(target, "tools", "bin", "lisa-carlos-tasks");
      chmodSync(safe, 0o755);
      chmodSync(tasks, 0o755);
      const safeRun = spawnSync(safe, ["gmail-triage", "--max", "5"], { encoding: "utf8" });
      assert.equal(safeRun.status, 75);
      assert.match(safeRun.stdout, /STAGE_SKIPPED_google/);
      assert.doesNotMatch(safeRun.stdout, /Clear|passed|success/i);
      const tasksRun = spawnSync(tasks, ["tasklists", "list"], { encoding: "utf8" });
      assert.equal(tasksRun.status, 75);
      assert.match(tasksRun.stdout, /STAGE_SKIPPED_task/);
      assert.doesNotMatch(tasksRun.stdout, /Yes\.|No\.|Clear/i);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("payload contract documents STAGE_SKIPPED_google/task without false Clear", () => {
    const hb = buildHeartbeatStageMessage();
    const digest = buildDigestStageMessage();
    for (const msg of [hb, digest]) {
      assert.match(msg, /STAGE_SKIPPED_google/);
      assert.match(msg, /STAGE_SKIPPED_task/);
      assert.match(msg, /Never invent Clear/);
      assert.match(msg, /delivery=none/);
      for (const line of STAGE_EXTERNAL_HELPER_SKIP_CONTRACT) {
        assert.ok(msg.includes(line));
      }
    }
  });

  it("renders and validates truthful stage-only unavailable external output", () => {
    const output = renderStageExternalUnavailableOutput();
    assert.deepEqual(validateStageExternalUnavailableOutput(output), []);
    assert.match(output, /STAGE_SKIPPED_google/);
    assert.match(output, /STAGE_SKIPPED_task/);
    assert.match(output, /STAGE_SKIPPED_email/);
    assert.doesNotMatch(output, /(?:Google\/Calendar|Carlos Tasks|Email):\s*(?:Yes|No)\./);
    assert.doesNotMatch(output, /\bClear\b/);

    const misleading = output.replace(
      "Google/Calendar: STAGE_SKIPPED_google (unavailable; no result asserted).",
      "Google/Calendar: No.",
    );
    assert.ok(
      validateStageExternalUnavailableOutput(misleading).some((error) => /Yes\/No/.test(error)),
    );
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
      assert.ok(receipt.copyCommands.every((c) => !c.includes("battery-monitor-state.json")));
      assert.ok(receipt.copyCommands.every((c) => !c.includes("if [ ! -e")));
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
