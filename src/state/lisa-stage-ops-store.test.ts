import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { readSqliteNumberPragma } from "../infra/sqlite-pragma.test-support.js";
import { LISA_STAGE_OPS_TABLES } from "./lisa-stage-ops-schema.js";
import {
  claimMainApprovePackage,
  closeLisaStageOpsStore,
  ensureLisaStageOpsSchema,
  expireMainApproveClaims,
  expireStaleRepairAttempts,
  isHealthyLisaStageOpsStore,
  loadAndClaimMainApprovePackage,
  listRepairAttempts,
  openHealthyLisaStageOpsStore,
  probeLisaStageOpsStoreHealth,
  putMainApprovePackage,
  recordRepairAttempt,
  requireHealthyLisaStageOpsStore,
  resolveOpenClawStateSqlitePath,
  upsertRepairBinding,
  hashMainApprovePackageContents,
} from "./lisa-stage-ops-store.js";
import { tableExists } from "./openclaw-state-db-schema-helpers.js";
import { OPENCLAW_STATE_SCHEMA_VERSION, openOpenClawStateDatabase } from "./openclaw-state-db.js";

const tempDirs: string[] = [];

function tempDbPath(prefix = "lisa-stage-ops-"): string {
  const directory = mkdtempSync(join(tmpdir(), prefix));
  tempDirs.push(directory);
  return join(directory, "openclaw.sqlite");
}

function optsFor(databasePath: string) {
  return { databasePath, path: databasePath, ensure: true as const };
}

afterEach(() => {
  closeLisaStageOpsStore();
  for (const dir of tempDirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

describe("lisa stage ops store", () => {
  it("fails closed on write without ensure when lisa_stage_* tables are absent", () => {
    const databasePath = tempDbPath("lisa-stage-ops-noensure-");
    const options = { databasePath, path: databasePath };
    // Create base OpenClaw DB without lisa_stage_* tables.
    openOpenClawStateDatabase(options);
    expect(() =>
      upsertRepairBinding(options, {
        repository: "openclaw/openclaw",
        branch: "fix",
        prNumber: 1,
        headSha: "abc",
      }),
    ).toThrow(/blocked_no_store/);
    expect(() => requireHealthyLisaStageOpsStore(options)).toThrow(/blocked_no_store/);
  });

  it("mints sealed HealthyLisaStageOpsStore only after health; rejects forgeable available:true", () => {
    const databasePath = tempDbPath("lisa-stage-ops-brand-");
    const options = { databasePath, path: databasePath };
    expect(() => openHealthyLisaStageOpsStore(options)).toThrow(/blocked_no_store/);
    expect(isHealthyLisaStageOpsStore({ available: true })).toBe(false);
    ensureLisaStageOpsSchema({ ...options, ensure: true });
    const store = openHealthyLisaStageOpsStore(options);
    expect(isHealthyLisaStageOpsStore(store)).toBe(true);
    expect(store.databasePath).toBe(databasePath);
  });

  it("lazily ensures all lisa_stage_* tables without further bumping schema_version", () => {
    const databasePath = tempDbPath();
    const options = { databasePath, path: databasePath };

    // Opening the shared state DB applies the canonical OpenClaw schema version.
    const beforeEnsure = openOpenClawStateDatabase(options);
    expect(readSqliteNumberPragma(beforeEnsure.db, "user_version")).toBe(
      OPENCLAW_STATE_SCHEMA_VERSION,
    );
    for (const table of LISA_STAGE_OPS_TABLES) {
      expect(tableExists(beforeEnsure.db, table)).toBe(false);
    }

    ensureLisaStageOpsSchema({ ...options, ensure: true });

    const { db } = openOpenClawStateDatabase(options);
    for (const table of LISA_STAGE_OPS_TABLES) {
      expect(tableExists(db, table)).toBe(true);
    }
    // Additive lazy-ensure must not advance OpenClaw user_version further.
    expect(readSqliteNumberPragma(db, "user_version")).toBe(OPENCLAW_STATE_SCHEMA_VERSION);

    const meta = db
      .prepare(`SELECT meta_value FROM lisa_stage_ops_store_meta WHERE meta_key = ?`)
      .get("schema_ensured_v1") as { meta_value: string } | undefined;
    expect(meta?.meta_value).toBe("1");

    // Idempotent re-ensure
    ensureLisaStageOpsSchema({ ...options, ensure: true });
    expect(readSqliteNumberPragma(db, "user_version")).toBe(OPENCLAW_STATE_SCHEMA_VERSION);
  });

  it("upserts repair bindings and attempts idempotently without duplicate rows", () => {
    const databasePath = tempDbPath();
    const opts = optsFor(databasePath);
    const now = 1_700_000_000_000;

    const first = upsertRepairBinding(
      opts,
      {
        repository: "openclaw/openclaw",
        branch: "fix/stage",
        prNumber: 42,
        headSha: "abc123",
      },
      now,
    );
    const second = upsertRepairBinding(
      opts,
      {
        repository: "openclaw/openclaw",
        branch: "fix/stage",
        prNumber: 42,
        headSha: "abc123",
      },
      now + 5_000,
    );
    expect(second.bindingKey).toBe(first.bindingKey);
    expect(second.updatedAtMs).toBe(now + 5_000);

    const { db } = openOpenClawStateDatabase(opts);
    const bindingCount = (
      db.prepare(`SELECT COUNT(*) AS n FROM lisa_stage_repair_bindings`).get() as { n: number }
    ).n;
    expect(Number(bindingCount)).toBe(1);

    const attemptA = recordRepairAttempt(
      opts,
      {
        bindingKey: first.bindingKey,
        attempt: 1,
        dispatchedAtMs: now,
        outcome: "pending",
        expiresAtMs: now + 60_000,
        attemptId: "attempt-fixed-1",
      },
      now,
    );
    const attemptB = recordRepairAttempt(
      opts,
      {
        bindingKey: first.bindingKey,
        attempt: 1,
        dispatchedAtMs: now + 1_000,
        outcome: "succeeded",
        proofHeadSha: "abc123",
        expiresAtMs: now + 60_000,
        attemptId: "attempt-should-not-replace-pk-on-conflict",
      },
      now + 2_000,
    );

    expect(attemptB.attemptId).toBe(attemptA.attemptId);
    expect(attemptB.outcome).toBe("succeeded");
    expect(attemptB.proofHeadSha).toBe("abc123");
    expect(attemptB.updatedAtMs).toBe(now + 2_000);

    const attemptCount = (
      db.prepare(`SELECT COUNT(*) AS n FROM lisa_stage_repair_attempts`).get() as { n: number }
    ).n;
    expect(Number(attemptCount)).toBe(1);
    expect(listRepairAttempts(opts, first.bindingKey)).toHaveLength(1);
  });

  it("survives close + reopen on the same database path (restart persistence)", () => {
    const databasePath = tempDbPath();
    const opts1 = optsFor(databasePath);
    const binding = upsertRepairBinding(opts1, {
      repository: "openclaw/openclaw",
      branch: "main",
      prNumber: null,
      headSha: "deadbeef",
    });
    recordRepairAttempt(opts1, {
      bindingKey: binding.bindingKey,
      attempt: 1,
      dispatchedAtMs: 100,
      outcome: "pending",
      attemptId: "persist-1",
    });
    recordRepairAttempt(opts1, {
      bindingKey: binding.bindingKey,
      attempt: 2,
      dispatchedAtMs: 200,
      outcome: "failed",
      attemptId: "persist-2",
    });
    closeLisaStageOpsStore();

    const opts2 = optsFor(databasePath);
    const attempts = listRepairAttempts(opts2, binding.bindingKey);
    expect(attempts).toHaveLength(2);
    expect(attempts.map((a) => a.attemptId)).toEqual(["persist-1", "persist-2"]);
    expect(attempts.map((a) => a.outcome)).toEqual(["pending", "failed"]);
  });

  it("expires stale pending repair attempts and active main-approve claims", () => {
    const databasePath = tempDbPath();
    const opts = optsFor(databasePath);
    const now = 2_000_000_000_000;

    const binding = upsertRepairBinding(
      opts,
      {
        repository: "openclaw/openclaw",
        branch: "repair",
        prNumber: 7,
        headSha: "sha1",
      },
      now,
    );
    recordRepairAttempt(
      opts,
      {
        bindingKey: binding.bindingKey,
        attempt: 1,
        dispatchedAtMs: now - 10_000,
        outcome: "pending",
        expiresAtMs: now - 1,
      },
      now - 10_000,
    );
    recordRepairAttempt(
      opts,
      {
        bindingKey: binding.bindingKey,
        attempt: 2,
        dispatchedAtMs: now - 5_000,
        outcome: "pending",
        expiresAtMs: now + 60_000,
      },
      now - 5_000,
    );
    recordRepairAttempt(
      opts,
      {
        bindingKey: binding.bindingKey,
        attempt: 3,
        dispatchedAtMs: now - 4_000,
        outcome: "succeeded",
        expiresAtMs: now - 1,
      },
      now - 4_000,
    );

    expect(expireStaleRepairAttempts(opts, now)).toBe(1);
    const after = listRepairAttempts(opts, binding.bindingKey);
    expect(after.find((a) => a.attempt === 1)?.outcome).toBe("held");
    expect(after.find((a) => a.attempt === 2)?.outcome).toBe("pending");
    expect(after.find((a) => a.attempt === 3)?.outcome).toBe("succeeded");

    putMainApprovePackage(
      opts,
      {
        packageId: "pkg-1",
        mondayDate: "2026-08-03",
        claimExpiresAtMs: now + 60_000,
        itemsJson: "[]",
      },
      now,
    );
    const pkg1Hash = hashMainApprovePackageContents({
      packageId: "pkg-1",
      mondayDate: "2026-08-03",
      claimExpiresAtMs: now + 60_000,
      itemsJson: "[]",
    });
    const claim = claimMainApprovePackage(
      opts,
      {
        packageId: "pkg-1",
        expiresAtMs: now - 1,
        claimId: "claim-1",
        expectedPackageHash: pkg1Hash,
      },
      now,
    );
    expect("claimId" in claim && claim.status).toBe("active");

    expect(expireMainApproveClaims(opts, now)).toBe(1);
    const { db } = openOpenClawStateDatabase(opts);
    const claimRow = db
      .prepare(`SELECT status FROM lisa_stage_main_approve_claims WHERE package_id = ?`)
      .get("pkg-1") as { status: string };
    expect(claimRow.status).toBe("expired");
  });

  it("putMainApprovePackage + claimMainApprovePackage: success, conflict, expired_package", () => {
    const databasePath = tempDbPath();
    const opts = optsFor(databasePath);
    const now = 3_000_000_000_000;

    putMainApprovePackage(
      opts,
      {
        packageId: "pkg-live",
        mondayDate: "2026-08-03",
        claimExpiresAtMs: now + 10_000,
        itemsJson: '["a"]',
      },
      now,
    );
    // Idempotent put
    putMainApprovePackage(
      opts,
      {
        packageId: "pkg-live",
        mondayDate: "2026-08-03",
        claimExpiresAtMs: now + 20_000,
        itemsJson: '["a","b"]',
      },
      now + 1,
    );
    const { db } = openOpenClawStateDatabase(opts);
    const pkgCount = (
      db.prepare(`SELECT COUNT(*) AS n FROM lisa_stage_main_approve_packages`).get() as {
        n: number;
      }
    ).n;
    expect(Number(pkgCount)).toBe(1);

    const liveHash = hashMainApprovePackageContents({
      packageId: "pkg-live",
      mondayDate: "2026-08-03",
      claimExpiresAtMs: now + 20_000,
      itemsJson: '["a","b"]',
    });

    const firstClaim = claimMainApprovePackage(
      opts,
      {
        packageId: "pkg-live",
        expiresAtMs: now + 5_000,
        claimId: "c1",
        expectedPackageHash: liveHash,
      },
      now + 2,
    );
    expect(firstClaim).toMatchObject({
      claimId: "c1",
      packageId: "pkg-live",
      status: "active",
    });

    const conflict = claimMainApprovePackage(
      opts,
      {
        packageId: "pkg-live",
        expiresAtMs: now + 5_000,
        claimId: "c2",
        expectedPackageHash: liveHash,
      },
      now + 3,
    );
    expect(conflict).toEqual({ ok: false, reason: "claim_conflict" });

    // Adversarial: anonymous (no claimId) after a claim must conflict.
    const anonymous = loadAndClaimMainApprovePackage(
      opts,
      {
        packageId: "pkg-live",
        expectedPackageHash: liveHash,
        claimId: "",
      },
      now + 3,
    );
    expect(anonymous).toEqual({ ok: false, reason: "claim_conflict" });

    // Adversarial: missing hash fails closed.
    const missingHash = loadAndClaimMainApprovePackage(
      opts,
      {
        packageId: "pkg-live",
        expectedPackageHash: "",
        claimId: "c1",
      },
      now + 3,
    );
    expect(missingHash).toEqual({ ok: false, reason: "missing_package_hash" });

    putMainApprovePackage(
      opts,
      {
        packageId: "pkg-stale",
        mondayDate: "2026-07-27",
        claimExpiresAtMs: now - 1,
        itemsJson: "[]",
      },
      now - 100,
    );
    const staleHash = hashMainApprovePackageContents({
      packageId: "pkg-stale",
      mondayDate: "2026-07-27",
      claimExpiresAtMs: now - 1,
      itemsJson: "[]",
    });
    const expired = claimMainApprovePackage(
      opts,
      {
        packageId: "pkg-stale",
        expiresAtMs: now + 5_000,
        claimId: "stale-claim",
        expectedPackageHash: staleHash,
      },
      now,
    );
    expect(expired).toEqual({ ok: false, reason: "expired_package" });

    const missing = claimMainApprovePackage(
      opts,
      {
        packageId: "pkg-missing",
        expiresAtMs: now + 5_000,
        claimId: "missing-claim",
        expectedPackageHash: "0".repeat(64),
      },
      now,
    );
    expect(missing).toEqual({ ok: false, reason: "expired_package" });

    const loaded = loadAndClaimMainApprovePackage(
      opts,
      {
        packageId: "pkg-live",
        expectedPackageHash: liveHash,
        claimId: "c1",
      },
      now + 4,
    );
    expect(loaded).toMatchObject({
      ok: true,
      idempotentReentry: true,
      claim: { claimId: "c1" },
    });

    // Adversarial: claimId owner cannot be reused on a different package while active.
    putMainApprovePackage(
      opts,
      {
        packageId: "pkg-other",
        mondayDate: "2026-08-03",
        claimExpiresAtMs: now + 20_000,
        itemsJson: "[]",
      },
      now + 5,
    );
    const otherHash = hashMainApprovePackageContents({
      packageId: "pkg-other",
      mondayDate: "2026-08-03",
      claimExpiresAtMs: now + 20_000,
      itemsJson: "[]",
    });
    const crossPackage = loadAndClaimMainApprovePackage(
      opts,
      {
        packageId: "pkg-other",
        expectedPackageHash: otherHash,
        claimId: "c1",
      },
      now + 6,
    );
    expect(crossPackage).toEqual({ ok: false, reason: "claim_conflict" });

    const absent = loadAndClaimMainApprovePackage(
      opts,
      {
        packageId: "pkg-missing",
        expectedPackageHash: "0".repeat(64),
        claimId: "any-claim",
      },
      now,
    );
    expect(absent).toEqual({ ok: false, reason: "package_absent" });

    // First claim without claimId fails closed (missing_claim_id).
    putMainApprovePackage(
      opts,
      {
        packageId: "pkg-fresh",
        mondayDate: "2026-08-03",
        claimExpiresAtMs: now + 20_000,
        itemsJson: "[]",
      },
      now + 7,
    );
    const freshHash = hashMainApprovePackageContents({
      packageId: "pkg-fresh",
      mondayDate: "2026-08-03",
      claimExpiresAtMs: now + 20_000,
      itemsJson: "[]",
    });
    const missingClaimId = loadAndClaimMainApprovePackage(
      opts,
      {
        packageId: "pkg-fresh",
        expectedPackageHash: freshHash,
        claimId: "",
      },
      now + 8,
    );
    expect(missingClaimId).toEqual({ ok: false, reason: "missing_claim_id" });
  });

  it("probeLisaStageOpsStoreHealth is read-only by default and ok after ensure", () => {
    const databasePath = tempDbPath();

    const missingFile = probeLisaStageOpsStoreHealth({ databasePath });
    expect(missingFile.ok).toBe(false);
    expect(missingFile.available).toBe(false);
    expect(missingFile.missingTables.length).toBe(LISA_STAGE_OPS_TABLES.length);

    // Empty on-disk OpenClaw DB still missing lisa_stage_* — probe must not CREATE.
    openOpenClawStateDatabase({ path: databasePath });
    closeLisaStageOpsStore();

    const noEnsure = probeLisaStageOpsStoreHealth({ databasePath, ensure: false });
    expect(noEnsure.ok).toBe(false);
    expect(noEnsure.available).toBe(false);
    expect(noEnsure.schemaEnsured).toBe(false);
    expect(noEnsure.missingTables).toEqual([...LISA_STAGE_OPS_TABLES]);

    const afterEnsure = probeLisaStageOpsStoreHealth({ databasePath, ensure: true });
    expect(afterEnsure.ok).toBe(true);
    expect(afterEnsure.available).toBe(true);
    expect(afterEnsure.schemaEnsured).toBe(true);
    expect(afterEnsure.missingTables).toEqual([]);
    expect(afterEnsure.tablesPresent).toEqual([...LISA_STAGE_OPS_TABLES]);

    const readOnlyOk = probeLisaStageOpsStoreHealth({ databasePath });
    expect(readOnlyOk.ok).toBe(true);
    expect(readOnlyOk.available).toBe(true);
  });

  it("resolveOpenClawStateSqlitePath joins stateDir/state/openclaw.sqlite", () => {
    expect(resolveOpenClawStateSqlitePath("/tmp/lisa-stage")).toBe(
      join("/tmp/lisa-stage", "state", "openclaw.sqlite"),
    );
    expect(resolveOpenClawStateSqlitePath(join("var", "stage"))).toBe(
      join("var", "stage", "state", "openclaw.sqlite"),
    );
  });
});
