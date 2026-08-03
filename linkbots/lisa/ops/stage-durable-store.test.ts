/**
 * Stage durable-store probe + fail-closed repair gate tests.
 * Run: node --experimental-strip-types --test linkbots/lisa/ops/stage-durable-store.test.ts
 */
import assert from "node:assert/strict";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { describe, it } from "node:test";
import { probeLisaStageOpsStoreHealth } from "./lisa-stage-ops-store.ts";
import { probeStageDurableStores } from "./stage-durable-store.ts";
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
      rmSync(directory, { recursive: true, force: true });
    }
  });
});
