import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { test } from "node:test";
import {
  createSourceArchive,
  encryptPrivateSnapshot,
  decryptAndVerifyPrivateSnapshot,
  encryptedSnapshotBytes,
  buildBackupReceipt,
  uploadEncryptedSnapshot,
} from "../backup/backup.ts";
import {
  buildDeploymentPlan,
  executeSourceRollback,
  validateDeploymentPlan,
} from "./deployment.ts";

const KEY = new Uint8Array(32).fill(7);
const NONCE = new Uint8Array(12).fill(3);
const KEY_REFERENCE = {
  provider: "google-secret-manager",
  secretName: "projects/synthetic/secrets/lisa-backup-key",
  version: "1",
  workloadIdentityAudience:
    "https://iam.googleapis.com/projects/synthetic/locations/global/workloadIdentityPools/lisa",
};
const PATHS = {
  checkoutRoot: "/opt/linktrend/openclaw_prime",
  stateRoot: "/var/lib/openclaw/lisa/state",
  backupRoot: "/var/backups/openclaw/lisa",
  receiptRoot: "/var/lib/openclaw/lisa/receipts",
};

test("PKT-09 offline rehearsal composes encrypted backup, deployment validation, restore, and rollback", async () => {
  const sourceArchive = createSourceArchive([
    {
      path: "ops/deployment/reviewed-unit-files",
      kind: "procedure",
      bytes: new TextEncoder().encode("synthetic reviewed units"),
    },
    {
      path: "config/openclaw.json",
      kind: "source",
      bytes: new TextEncoder().encode("synthetic config reference"),
    },
  ]);
  const plaintext = new TextEncoder().encode("SQLite format 3\\0synthetic private health");
  const snapshot = await encryptPrivateSnapshot({
    plaintext,
    keyReference: KEY_REFERENCE,
    nonce: NONCE,
    resolveKey: async () => KEY,
  });
  const upload = await uploadEncryptedSnapshot({
    snapshot,
    destinationBindingId: "synthetic-offline-binding",
    uploader: async ({ objectBytes, objectSha256 }) => ({
      objectSha256,
      objectBytes: objectBytes.byteLength,
    }),
  });
  const restored = await decryptAndVerifyPrivateSnapshot({
    snapshot,
    resolveKey: async () => KEY,
    quickCheck: (bytes) => new TextDecoder().decode(bytes).startsWith("SQLite format 3"),
  });
  assert.deepEqual([...restored.plaintext], [...plaintext]);
  assert.equal(restored.verification.network, "disabled");
  assert.equal(restored.verification.channelDelivery, "disabled");
  assert.equal(
    createHash("sha256").update(encryptedSnapshotBytes(snapshot)).digest("hex"),
    snapshot.objectSha256,
  );

  const receipt = buildBackupReceipt({
    sourceArchive,
    snapshot,
    upload,
    restore: restored.verification,
    capturedAtMs: 1_755_000_000_000,
  });
  assert.equal(receipt.retention, "promote_current");
  assert.deepEqual(receipt.sourceArchive.excluded, ["private-health", "credentials"]);
  assert.equal(JSON.stringify(receipt).includes("synthetic private health"), false);

  const deployment = buildDeploymentPlan({ paths: PATHS });
  assert.equal(validateDeploymentPlan(deployment).valid, true);
  assert.equal(deployment.units.length, 3);
  assert.equal(
    deployment.units.some((unit) => unit.contents.includes("/Users/")),
    false,
  );
  assert.equal(
    deployment.units.some((unit) => unit.contents.includes("GOOGLE_APPLICATION_CREDENTIALS=")),
    false,
  );

  const events = [];
  const rollback = await executeSourceRollback({
    stopBackupTimer: async () => events.push("stop-timer"),
    restorePreviousUnits: async () => events.push("restore-units"),
    preserveVerifiedBackup: async () => events.push("preserve-backup"),
    startBackupService: async () => events.push("start-service"),
  });
  assert.deepEqual(rollback, { status: "rolled_back" });
  assert.deepEqual(events, ["stop-timer", "restore-units", "preserve-backup", "start-service"]);
});
