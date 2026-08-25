import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import {
  buildBackupReceipt,
  decryptAndVerifyPrivateSnapshot,
  encryptPrivateSnapshot,
  uploadEncryptedSnapshot,
  createSourceArchive,
} from "./backup.js";
import { validateBackupReceipt } from "./receipt-validator.js";

const KEY = new Uint8Array(32).fill(5);
const NONCE = new Uint8Array(12).fill(9);
const REFERENCE = {
  provider: "google-secret-manager" as const,
  secretName: "projects/synthetic/secrets/lisa-backup-key",
  version: "1",
  workloadIdentityAudience:
    "https://iam.googleapis.com/projects/synthetic/locations/global/workloadIdentityPools/lisa",
};

async function makeReceipt(reference = REFERENCE) {
  const sourceArchive = createSourceArchive([
    { path: "config/openclaw.json", kind: "source", bytes: new TextEncoder().encode("config") },
    { path: "ops/procedure.md", kind: "procedure", bytes: new TextEncoder().encode("procedure") },
  ]);
  const snapshot = await encryptPrivateSnapshot({
    plaintext: new TextEncoder().encode("SQLite format 3\0synthetic"),
    keyReference: reference,
    nonce: NONCE,
    resolveKey: async () => KEY,
  });
  const upload = await uploadEncryptedSnapshot({
    snapshot,
    destinationBindingId: "synthetic-offline-binding",
    uploader: async ({ objectSha256, objectBytes }) => ({
      objectSha256,
      objectBytes: objectBytes.byteLength,
    }),
  });
  const restore = await decryptAndVerifyPrivateSnapshot({
    snapshot,
    resolveKey: async () => KEY,
    quickCheck: (bytes) => new TextDecoder().decode(bytes).startsWith("SQLite format 3"),
  });
  return buildBackupReceipt({
    sourceArchive,
    snapshot,
    upload,
    restore: restore.verification,
    capturedAtMs: 1_755_000_000_000,
  });
}

describe("PKT-09 offline receipt validator", () => {
  it("accepts a receipt emitted by the backup contract", async () => {
    const receipt = await makeReceipt();
    expect(validateBackupReceipt(receipt)).toEqual({ valid: true, issues: [] });
  });

  it("rejects digest tampering and upload/restore mismatches", async () => {
    const receipt = await makeReceipt();
    const tampered = {
      ...receipt,
      upload: { ...receipt.upload, objectBytes: receipt.upload.objectBytes + 1 },
      restore: {
        ...receipt.restore,
        plaintextSha256: createHash("sha256").update("wrong").digest("hex"),
      },
    };
    const result = validateBackupReceipt(tampered);
    expect(result.valid).toBe(false);
    expect(result.issues).toEqual(
      expect.arrayContaining([
        "upload.objectBytes:mismatch",
        "restore.plaintextSha256:mismatch",
        "receiptSha256:mismatch",
      ]),
    );
  });

  it("rejects unsafe paths, private fields, and non-promoted retention", async () => {
    const receipt = await makeReceipt();
    const tampered = {
      ...receipt,
      sourceArchive: {
        ...receipt.sourceArchive,
        entries: [{ ...receipt.sourceArchive.entries[0], path: "state/private-health.sqlite" }],
      },
      privateSnapshot: { ...receipt.privateSnapshot, secretValue: "should-never-be-recorded" },
      retention: "retain_previous" as const,
    };
    const result = validateBackupReceipt(tampered);
    expect(result.valid).toBe(false);
    expect(result.issues).toEqual(
      expect.arrayContaining([
        "sourceArchive.entries[0].path:privacy-boundary",
        "privateSnapshot.secretValue:unexpected",
        "receipt.privateSnapshot.secretValue:private-field",
        "retention:promotion",
      ]),
    );
  });

  it.each([
    "https://",
    "https://?audience=lisa",
    "https://#audience",
    "https://[invalid-host",
    "https://iam.googleapis.com/%zz",
    "https://iam.googleapis.com/path with spaces",
    "not a uri",
  ])("rejects malformed workload identity audience URI: %s", async (audience) => {
    const receipt = await makeReceipt();
    const result = validateBackupReceipt({
      ...receipt,
      privateSnapshot: {
        ...receipt.privateSnapshot,
        keyReference: {
          ...receipt.privateSnapshot.keyReference,
          workloadIdentityAudience: audience,
        },
      },
    });
    expect(result.valid).toBe(false);
    expect(result.issues).toContain(
      "privateSnapshot.keyReference.workloadIdentityAudience:reference",
    );
  });

  it.each([
    "https://iam.googleapis.com/projects/synthetic/locations/global/workloadIdentityPools/lisa",
    "https://iam.googleapis.com/audience?profile=lisa#v1",
  ])("accepts schema-valid workload identity audience URI: %s", async (audience) => {
    const receipt = await makeReceipt({ ...REFERENCE, workloadIdentityAudience: audience });
    expect(validateBackupReceipt(receipt)).toEqual({ valid: true, issues: [] });
  });
});
