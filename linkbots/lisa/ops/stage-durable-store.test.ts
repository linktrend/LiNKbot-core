/**
 * Stage durable-store probe + fail-closed repair gate + canonical consumer proofs.
 * Run:
 *   node --import ./linkbots/lisa/ops/register-strip-types-js-resolve.mjs \
 *     --experimental-strip-types --test linkbots/lisa/ops/stage-durable-store.test.ts
 */
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { describe, it } from "node:test";
import {
  closeLisaStageOpsStore,
  expireMainApproveClaims,
  expireStaleRepairAttempts,
  hashMainApprovePackageContents,
  listRepairAttempts,
  probeLisaStageOpsStoreHealth,
} from "./lisa-stage-ops-store.ts";
import {
  claimSealedMainApprovePackage,
  authorizeApprovalDispatch,
  issueCarlosAsk,
  sealMainApprovePackage,
  type MainApprovePackage,
} from "./main-approve-binding.ts";
import {
  authorizeRepairLiveDispatch,
  persistRepairAttempt,
  persistRepairBinding,
} from "./repair-dispatcher.ts";
import {
  claimStageMainApprovePackage,
  ensureStageDurableStores,
  openStageDurableStoreCapability,
  persistStageMainApprovePackage,
  persistStageRepairAttempt,
  persistStageRepairBinding,
  probeStageDurableStores,
} from "./stage-durable-store.ts";
import { planStageOps } from "./stage-ops-coordinator.ts";
import { decideRepairSupervision, buildStageRepairSupervisionJob } from "./stage-ops-payloads.ts";

function tempDbPath(prefix = "stage-durable-"): { directory: string; databasePath: string } {
  const directory = mkdtempSync(path.join(tmpdir(), prefix));
  return { directory, databasePath: path.join(directory, "openclaw.sqlite") };
}

describe("Stage durable store probe", () => {
  it("probeStageDurableStores becomes available after ensure:true on a temp DB", () => {
    const { directory, databasePath } = tempDbPath();
    try {
      const before = probeStageDurableStores({ databasePath });
      assert.equal(before.repairAttemptStoreAvailable, false);
      assert.equal(before.mainApproveStoreAvailable, false);
      assert.equal(before.health.ok, false);

      const ensured = probeLisaStageOpsStoreHealth({ databasePath, ensure: true });
      assert.equal(ensured.ok, true);
      assert.equal(ensured.available, true);

      const after = probeStageDurableStores({ databasePath });
      assert.equal(after.repairAttemptStoreAvailable, true);
      assert.equal(after.mainApproveStoreAvailable, true);
      assert.equal(after.health.ok, true);
      assert.equal(after.health.available, true);
    } finally {
      closeLisaStageOpsStore();
      rmSync(directory, { recursive: true, force: true });
    }
  });

  it("probe without ensure on empty/missing DB stays unavailable (fail-closed)", () => {
    const { directory, databasePath } = tempDbPath("stage-durable-missing-");
    try {
      const missing = probeStageDurableStores({ databasePath });
      assert.equal(missing.repairAttemptStoreAvailable, false);
      assert.equal(missing.mainApproveStoreAvailable, false);
      assert.equal(missing.health.available, false);
      assert.ok(missing.repairAttemptStorePrerequisite);

      // Empty on-disk DB still missing lisa_stage_* tables — probe must not CREATE.
      const empty = new DatabaseSync(databasePath);
      empty.close();
      const emptyProbe = probeStageDurableStores({ databasePath });
      assert.equal(emptyProbe.repairAttemptStoreAvailable, false);
      assert.equal(emptyProbe.mainApproveStoreAvailable, false);
      assert.equal(emptyProbe.health.ok, false);
      assert.ok(emptyProbe.health.missingTables.length > 0);
    } finally {
      closeLisaStageOpsStore();
      rmSync(directory, { recursive: true, force: true });
    }
  });
});

describe("Stage durable repair install fail-closed", () => {
  it("decideRepairSupervision stays blocked_no_store when durable probe is unhealthy", () => {
    const { directory, databasePath } = tempDbPath("stage-durable-repair-blocked-");
    try {
      const probe = probeStageDurableStores({ databasePath });
      assert.equal(probe.health.ok, false);

      const decision = decideRepairSupervision({
        repairAttemptStoreAvailable: probe.repairAttemptStoreAvailable,
        mainApproveStoreAvailable: probe.mainApproveStoreAvailable,
        repairAttemptStorePrerequisite: probe.repairAttemptStorePrerequisite,
        mainApproveStorePrerequisite: probe.mainApproveStorePrerequisite,
      });
      assert.equal(decision.decision, "blocked_no_store");
      assert.equal(decision.mayDispatchAcp, false);

      const repair = buildStageRepairSupervisionJob();
      assert.equal(repair.enabled, false);
      assert.match(repair.payload.message, /blocked_no_store/);
    } finally {
      closeLisaStageOpsStore();
      rmSync(directory, { recursive: true, force: true });
    }
  });

  it("decideRepairSupervision allows readonly supervise only when probe is healthy", () => {
    const { directory, databasePath } = tempDbPath("stage-durable-repair-ok-");
    try {
      const health = probeLisaStageOpsStoreHealth({ databasePath, ensure: true });
      assert.equal(health.ok, true);
      const probe = probeStageDurableStores({ databasePath });
      assert.equal(probe.repairAttemptStoreAvailable, true);
      assert.equal(probe.mainApproveStoreAvailable, true);

      const decision = decideRepairSupervision({
        repairAttemptStoreAvailable: true,
        mainApproveStoreAvailable: true,
      });
      assert.equal(decision.decision, "supervise_readonly");
      assert.equal(decision.mayDispatchAcp, false);
    } finally {
      closeLisaStageOpsStore();
      rmSync(directory, { recursive: true, force: true });
    }
  });
});

describe("Canonical store consumers (Repair / Main Approve / coordinator ensure)", () => {
  it("fail closed on persist before ensure; after ensure proves restart/idempotency/expiry", () => {
    const { directory, databasePath } = tempDbPath("stage-durable-consumers-");
    const options = { databasePath, path: databasePath };
    try {
      assert.throws(
        () =>
          persistStageRepairBinding(
            {
              repository: "openclaw/openclaw",
              branch: "fix/stage",
              prNumber: 7,
              headSha: "deadbeef",
            },
            { databasePath },
          ),
        /blocked_no_store/,
      );

      ensureStageDurableStores({ databasePath });
      const binding = persistRepairBinding(
        {
          repository: "openclaw/openclaw",
          branch: "fix/stage",
          prNumber: 7,
          headSha: "deadbeef",
        },
        options,
        1_700_000_000_000,
      );
      const again = persistStageRepairBinding(
        {
          repository: "openclaw/openclaw",
          branch: "fix/stage",
          prNumber: 7,
          headSha: "deadbeef",
        },
        { databasePath },
        1_700_000_005_000,
      );
      assert.equal(again.bindingKey, binding.bindingKey);
      assert.equal(again.createdAtMs, binding.createdAtMs);

      persistRepairAttempt(
        {
          binding: {
            repository: "openclaw/openclaw",
            branch: "fix/stage",
            prNumber: 7,
            headSha: "deadbeef",
          },
          attempt: 1,
          dispatchedAt: "2026-08-03T00:00:00.000Z",
          outcome: "pending",
          expiresAtMs: 1_700_000_001_000,
        },
        options,
        1_700_000_000_000,
      );
      persistStageRepairAttempt(
        {
          bindingKey: binding.bindingKey,
          attempt: 1,
          dispatchedAtMs: Date.parse("2026-08-03T00:00:00.000Z"),
          outcome: "pending",
          expiresAtMs: 1_700_000_001_000,
        },
        { databasePath },
        1_700_000_000_500,
      );

      closeLisaStageOpsStore();
      const listed = listRepairAttempts(options, binding.bindingKey);
      assert.equal(listed.length, 1);
      assert.equal(listed[0]!.attempt, 1);
      assert.equal(listed[0]!.outcome, "pending");

      const expired = expireStaleRepairAttempts(options, 1_700_000_002_000);
      assert.equal(expired, 1);
      assert.equal(listRepairAttempts(options, binding.bindingKey)[0]!.outcome, "held");

      const pkg: MainApprovePackage = {
        packageId: "pkg-1",
        mondayDate: "2026-08-03",
        claimExpiresAt: "2026-08-03T12:00:00.000Z",
        items: [
          {
            index: 1,
            plainDescription: "promote stage fix",
            repository: "openclaw/openclaw",
            promotionPrNumber: 9,
            stagingSha: "aaa1111",
            priorMainSha: "bbb2222",
            promotionHeadSha: "ccc3333",
            gateResult: "Clear",
          },
        ],
      };
      sealMainApprovePackage(pkg, options, 1_700_000_000_000);
      persistStageMainApprovePackage(
        {
          packageId: "pkg-1",
          mondayDate: "2026-08-03",
          claimExpiresAtMs: Date.parse("2026-08-03T12:00:00.000Z"),
          itemsJson: JSON.stringify(pkg.items),
        },
        { databasePath },
        1_700_000_000_100,
      );
      const pkg1Hash = hashMainApprovePackageContents({
        packageId: "pkg-1",
        mondayDate: "2026-08-03",
        claimExpiresAtMs: Date.parse("2026-08-03T12:00:00.000Z"),
        itemsJson: JSON.stringify(pkg.items),
      });
      const claim = claimSealedMainApprovePackage(
        {
          packageId: "pkg-1",
          expiresAtMs: Date.parse("2026-08-03T12:00:00.000Z"),
          claimId: "claim-a",
          expectedPackageHash: pkg1Hash,
        },
        options,
        Date.parse("2026-08-03T11:00:00.000Z"),
      );
      assert.ok(!("ok" in claim && claim.ok === false));
      const conflict = claimStageMainApprovePackage(
        {
          packageId: "pkg-1",
          expiresAtMs: Date.parse("2026-08-03T12:00:00.000Z"),
          claimId: "claim-b",
          expectedPackageHash: pkg1Hash,
        },
        { databasePath },
        Date.parse("2026-08-03T11:30:00.000Z"),
      );
      assert.deepEqual(conflict, { ok: false, reason: "claim_conflict" });

      // Idempotent re-entry with the same claim id succeeds.
      const reentry = claimStageMainApprovePackage(
        {
          packageId: "pkg-1",
          expiresAtMs: Date.parse("2026-08-03T12:00:00.000Z"),
          claimId: "claim-a",
          expectedPackageHash: pkg1Hash,
        },
        { databasePath },
        Date.parse("2026-08-03T11:45:00.000Z"),
      );
      assert.ok(!("ok" in reentry && reentry.ok === false));
      if (!("ok" in reentry && reentry.ok === false)) {
        assert.equal(reentry.claimId, "claim-a");
      }

      // Adversarial: anonymous concurrency after claim → conflict.
      const anonymous = claimStageMainApprovePackage(
        {
          packageId: "pkg-1",
          expiresAtMs: Date.parse("2026-08-03T12:00:00.000Z"),
          claimId: "",
          expectedPackageHash: pkg1Hash,
        },
        { databasePath },
        Date.parse("2026-08-03T11:50:00.000Z"),
      );
      assert.deepEqual(anonymous, { ok: false, reason: "claim_conflict" });

      const expiredClaims = expireMainApproveClaims(
        options,
        Date.parse("2026-08-03T13:00:00.000Z"),
      );
      assert.equal(expiredClaims, 1);
    } finally {
      closeLisaStageOpsStore();
      rmSync(directory, { recursive: true, force: true });
    }
  });

  it("coordinator ensureDurableStore on temp DB unlocks include-repair install", () => {
    const { directory, databasePath } = tempDbPath("stage-durable-coord-ensure-");
    try {
      const blocked = planStageOps({
        action: "install",
        includeRepair: true,
        durableStoreDatabasePath: databasePath,
      });
      assert.equal(blocked.repairSupervision.installAllowed, false);

      const unlocked = planStageOps({
        action: "install",
        includeRepair: true,
        durableStoreDatabasePath: databasePath,
        ensureDurableStore: true,
      });
      assert.equal(unlocked.repairSupervision.installAllowed, true);
      assert.equal(unlocked.repairSupervision.installedInPlan, true);
    } finally {
      closeLisaStageOpsStore();
      rmSync(directory, { recursive: true, force: true });
    }
  });

  it("auth consumers require sealed capability; load attempts from store across restart", () => {
    const { directory, databasePath } = tempDbPath("stage-durable-auth-");
    const live = {
      liveLisaTargetingAllowed: true,
      credentialsLanguageSeparatelyApproved: true,
    };
    const binding = {
      repository: "openclaw/openclaw",
      branch: "fix/stage",
      prNumber: 11,
      headSha: "cafebabe",
    };
    try {
      const missing = openStageDurableStoreCapability({ databasePath });
      assert.equal(missing.ok, false);

      const minted = openStageDurableStoreCapability({ databasePath, ensure: true });
      assert.equal(minted.ok, true);
      if (!minted.ok) return;

      const first = authorizeRepairLiveDispatch(
        {
          failureClass: "ordinary_repairable",
          binding,
          currentHeadSha: binding.headSha,
        },
        minted.store,
        live,
      );
      assert.equal(first.ok, true);
      if (first.ok) assert.equal(first.decision.attempt, 1);

      persistRepairBinding(binding, { databasePath, path: databasePath }, 1_700_000_100_000);
      persistRepairAttempt(
        {
          binding,
          attempt: 1,
          dispatchedAt: "2026-08-03T01:00:00.000Z",
          outcome: "pending",
          expiresAtMs: 1_700_000_200_000,
        },
        { databasePath, path: databasePath },
        1_700_000_100_000,
      );

      closeLisaStageOpsStore();
      const reminted = openStageDurableStoreCapability({ databasePath });
      assert.equal(reminted.ok, true);
      if (!reminted.ok) return;

      const held = authorizeRepairLiveDispatch(
        {
          failureClass: "ordinary_repairable",
          binding,
          currentHeadSha: binding.headSha,
        },
        reminted.store,
        live,
      );
      assert.equal(held.ok, false);
      if (!held.ok) {
        assert.equal(held.reason, "not_dispatch");
        assert.equal(held.decision.decision, "hold");
      }

      expireStaleRepairAttempts({ databasePath, path: databasePath }, 1_700_000_300_000);
      const afterExpire = authorizeRepairLiveDispatch(
        {
          failureClass: "ordinary_repairable",
          binding,
          currentHeadSha: binding.headSha,
        },
        reminted.store,
        live,
      );
      assert.equal(afterExpire.ok, true);
      if (afterExpire.ok) assert.equal(afterExpire.decision.attempt, 1);

      const pkg: MainApprovePackage = {
        packageId: "pkg-auth-1",
        mondayDate: "2026-08-03",
        claimExpiresAt: "2026-08-03T12:00:00.000Z",
        items: [
          {
            index: 1,
            plainDescription: "promote stage fix",
            repository: "openclaw/openclaw",
            promotionPrNumber: 11,
            stagingSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            priorMainSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            promotionHeadSha: "cccccccccccccccccccccccccccccccccccccccc",
            gateResult: "Clear",
          },
        ],
      };

      // Never-persisted fabricated package must fail even with healthy store.
      const fabricated = issueCarlosAsk(
        {
          packageId: "pkg-never-persisted",
          expectedPackageHash: "0".repeat(64),
          claimId: "fabricated-claim",
        },
        reminted.store,
        live,
        Date.parse("2026-08-03T11:00:00.000Z"),
      );
      assert.equal(fabricated.ok, false);
      if (!fabricated.ok) assert.equal(fabricated.reason, "package_absent");

      const sealed = sealMainApprovePackage(
        pkg,
        { databasePath, path: databasePath },
        Date.parse("2026-08-03T10:00:00.000Z"),
      );

      closeLisaStageOpsStore();
      const afterRestart = openStageDurableStoreCapability({ databasePath });
      assert.equal(afterRestart.ok, true);
      if (!afterRestart.ok) return;

      const ask = issueCarlosAsk(
        {
          packageId: pkg.packageId,
          expectedPackageHash: sealed.packageHash,
          claimId: "claim-owner-1",
        },
        afterRestart.store,
        live,
        Date.parse("2026-08-03T11:00:00.000Z"),
      );
      assert.equal(ask.ok, true);
      if (!ask.ok) return;
      assert.equal(ask.packageHash, sealed.packageHash);
      assert.equal(ask.claimId, "claim-owner-1");
      assert.equal(ask.package.items[0]?.promotionPrNumber, 11);

      // Idempotent re-entry with same claim id.
      const askAgain = issueCarlosAsk(
        {
          packageId: pkg.packageId,
          expectedPackageHash: sealed.packageHash,
          claimId: ask.claimId,
        },
        afterRestart.store,
        live,
        Date.parse("2026-08-03T11:01:00.000Z"),
      );
      assert.equal(askAgain.ok, true);
      if (askAgain.ok) assert.equal(askAgain.claimId, ask.claimId);

      // Concurrent different claim id → conflict.
      const conflict = issueCarlosAsk(
        {
          packageId: pkg.packageId,
          expectedPackageHash: sealed.packageHash,
          claimId: "other-claim",
        },
        afterRestart.store,
        live,
        Date.parse("2026-08-03T11:02:00.000Z"),
      );
      assert.equal(conflict.ok, false);
      if (!conflict.ok) assert.equal(conflict.reason, "claim_conflict");

      // Adversarial: no-claim-id after a claim → conflict.
      const noClaimId = issueCarlosAsk(
        {
          packageId: pkg.packageId,
          expectedPackageHash: sealed.packageHash,
          claimId: "",
        },
        afterRestart.store,
        live,
        Date.parse("2026-08-03T11:03:00.000Z"),
      );
      assert.equal(noClaimId.ok, false);
      if (!noClaimId.ok) assert.equal(noClaimId.reason, "claim_conflict");

      const dispatch = authorizeApprovalDispatch(
        {
          packageId: pkg.packageId,
          expectedPackageHash: sealed.packageHash,
          claimId: ask.claimId,
          approvedIndexes: [1],
          nowIso: "2026-08-03T11:00:00.000Z",
        },
        afterRestart.store,
        live,
      );
      assert.equal(dispatch.ok, true);
      if (dispatch.ok) {
        assert.equal(dispatch.items[0]?.promotionPrNumber, 11);
        assert.equal(dispatch.packageHash, sealed.packageHash);
        assert.equal(dispatch.claimId, ask.claimId);
      }

      // Hash mismatch / caller-fabricated contents never authorize.
      const badHash = authorizeApprovalDispatch(
        {
          packageId: pkg.packageId,
          expectedPackageHash: "0".repeat(64),
          claimId: ask.claimId,
          approvedIndexes: [1],
          nowIso: "2026-08-03T11:00:00.000Z",
        },
        afterRestart.store,
        live,
      );
      assert.equal(badHash.ok, false);
      if (!badHash.ok) assert.equal(badHash.reason, "package_hash_mismatch");

      // Adversarial: dispatch without claimId conflicts after claim.
      const dispatchNoClaim = authorizeApprovalDispatch(
        {
          packageId: pkg.packageId,
          expectedPackageHash: sealed.packageHash,
          claimId: "",
          approvedIndexes: [1],
          nowIso: "2026-08-03T11:00:00.000Z",
        },
        afterRestart.store,
        live,
      );
      assert.equal(dispatchNoClaim.ok, false);
      if (!dispatchNoClaim.ok) assert.equal(dispatchNoClaim.reason, "claim_conflict");

      expireMainApproveClaims(
        { databasePath, path: databasePath },
        Date.parse("2026-08-03T13:00:00.000Z"),
      );
      // Package itself expires via claimExpiresAtMs — seal a short-lived package.
      const expiredPkg: MainApprovePackage = {
        ...pkg,
        packageId: "pkg-auth-expired",
        claimExpiresAt: "2026-08-03T10:30:00.000Z",
      };
      const expiredSealed = sealMainApprovePackage(
        expiredPkg,
        { databasePath, path: databasePath },
        Date.parse("2026-08-03T10:00:00.000Z"),
      );
      const expiredAsk = issueCarlosAsk(
        {
          packageId: expiredPkg.packageId,
          expectedPackageHash: expiredSealed.packageHash,
          claimId: "expired-claim",
        },
        afterRestart.store,
        live,
        Date.parse("2026-08-03T11:00:00.000Z"),
      );
      assert.equal(expiredAsk.ok, false);
      if (!expiredAsk.ok) assert.equal(expiredAsk.reason, "expired_package");

      const forgedAsk = issueCarlosAsk(
        {
          packageId: pkg.packageId,
          expectedPackageHash: sealed.packageHash,
          claimId: "forged",
        },
        { available: true } as never,
        live,
      );
      assert.equal(forgedAsk.ok, false);
    } finally {
      closeLisaStageOpsStore();
      rmSync(directory, { recursive: true, force: true });
    }
  });
});
