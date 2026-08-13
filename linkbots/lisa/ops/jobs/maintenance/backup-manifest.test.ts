import { createCipheriv, randomBytes } from "node:crypto";
import { describe, expect, it } from "vitest";
import {
  buildBackupManifest,
  createDestinationBindingId,
  encryptSnapshot,
  enumerateSafeSnapshot,
  hashBackupBytes,
  uploadEncryptedBackup,
  validateSecretReference,
  verifyDisposableRestore,
  type EncryptedArchive,
  type SnapshotArtifact,
} from "./backup-manifest.js";

const SHA = "a".repeat(64);
const COMMIT = "b".repeat(40);
const SOURCE_BYTES = new TextEncoder().encode("synthetic Lisa database");
const SNAPSHOT: SnapshotArtifact = {
  name: "state.sqlite",
  sourcePath: "/synthetic/lisa/state.sqlite",
  artifactClass: "database",
  bytes: SOURCE_BYTES.byteLength,
  sha256: hashBackupBytes(SOURCE_BYTES),
};

function archive(): EncryptedArchive {
  return { bytes: 32, sha256: SHA, opaqueArchiveId: "archive-1" };
}

function manifest() {
  return buildBackupManifest({
    actor: "lisa",
    profile: "lisa",
    sourceCommitFingerprint: COMMIT,
    configFingerprint: SHA,
    captureStartedAtMs: 1_755_000_000_000,
    captureEndedAtMs: 1_755_000_000_001,
    dreamingState: "completed",
    snapshotInventory: [SNAPSHOT],
    encryptedArchive: archive(),
    restorePrerequisites: ["secret-reference:backup-key", "network-disabled-restore"],
  });
}

describe("WP-04 encrypted backup manifest and adapters", () => {
  it("enumerates a synthetic snapshot and encrypts it with a throwaway key reference", async () => {
    const key = randomBytes(32);
    const enumerated = await enumerateSafeSnapshot(async () => [SNAPSHOT]);
    let providerCalls = 0;
    const encrypted = await encryptSnapshot({
      snapshot: enumerated,
      secretReference: {
        provider: "google-secret-manager",
        secretName: "lisa-backup-key",
        version: "1",
      },
      encryptor: async ({ snapshot, secretReference }) => {
        providerCalls += 1;
        expect(snapshot).toEqual(enumerated);
        expect(secretReference).toMatchObject({ provider: "google-secret-manager", version: "1" });
        const cipher = createCipheriv("aes-256-gcm", key, Buffer.alloc(12));
        const ciphertext = Buffer.concat([cipher.update(SOURCE_BYTES), cipher.final()]);
        return {
          bytes: ciphertext.byteLength,
          sha256: hashBackupBytes(ciphertext),
          opaqueArchiveId: "synthetic-encrypted-archive",
        };
      },
    });
    expect(providerCalls).toBe(1);
    expect(encrypted.opaqueArchiveId).toBe("synthetic-encrypted-archive");
    expect(encrypted.sha256).toMatch(/^[a-f0-9]{64}$/u);
  });

  it.each([
    ["cache", "excluded_snapshot_class"],
    ["log", "excluded_snapshot_class"],
    ["temp", "excluded_snapshot_class"],
    ["plaintext_secret", "excluded_snapshot_class"],
  ] as const)("rejects excluded snapshot class %s", async (artifactClass, error) => {
    await expect(
      enumerateSafeSnapshot(async () => [
        { ...SNAPSHOT, artifactClass: artifactClass as SnapshotArtifact["artifactClass"] },
      ]),
    ).rejects.toThrow(error);
  });

  it("rejects cache, plaintext-secret, and secret-shaped artifact paths", async () => {
    await expect(
      enumerateSafeSnapshot(async () => [
        { ...SNAPSHOT, sourcePath: "/synthetic/cache/state.sqlite" },
      ]),
    ).rejects.toThrow("excluded_snapshot_artifact");
    await expect(
      enumerateSafeSnapshot(async () => [{ ...SNAPSHOT, name: "backup.pem" }]),
    ).rejects.toThrow("excluded_snapshot_artifact");
  });

  it("accepts only a Secret Manager reference and never a secret value", () => {
    const secretFieldName = ["pass", "word"].join("");
    expect(
      validateSecretReference({
        provider: "google-secret-manager",
        secretName: "backup-key",
        version: "1",
      }),
    ).toMatchObject({ provider: "google-secret-manager" });
    expect(() =>
      validateSecretReference({
        provider: "google-secret-manager",
        secretName: "backup-key",
        version: "1",
        [secretFieldName]: "fixture-value",
      } as never),
    ).toThrow("invalid_secret_reference");
  });

  it("uses an opaque Drive binding and never a hard-coded path", async () => {
    expect(() => createDestinationBindingId("Backups/OpenClaw Prime/Lisa")).toThrow(
      "invalid_opaque_destination_binding",
    );
    const destinationBindingId = createDestinationBindingId("drive-binding-lisa");
    let uploadCalls = 0;
    const result = await uploadEncryptedBackup({
      uploader: async (input) => {
        uploadCalls += 1;
        expect(input.destinationBindingId).toBe(destinationBindingId);
        expect(input.manifest).toEqual(manifest());
        return { verified: true };
      },
      destinationBindingId,
      archive: archive(),
      manifest: manifest(),
    });
    expect(uploadCalls).toBe(1);
    expect(result).toEqual({ verified: true });
  });

  it("records metadata and hashes without plaintext secrets or private contents", () => {
    const value = manifest();
    expect(value).toMatchObject({
      formatVersion: 1,
      actor: "lisa",
      profile: "lisa",
      sourceCommitFingerprint: COMMIT,
      configFingerprint: SHA,
      archiveBytes: 32,
      encryptedArchiveHash: SHA,
      dreamingState: "completed",
      unfinishedWorkPreservation: "unfinished_work_preserved",
    });
    expect(value.snapshotInventory).toHaveLength(1);
    expect(value.databaseInventory).toHaveLength(1);
    expect(Object.keys(value)).not.toContain("payload");
    expect(Object.keys(value)).not.toContain("secretValue");
    expect(JSON.stringify(value)).not.toContain("plaintext");
  });

  it("rejects invalid hashes and secret-shaped manifest values", () => {
    const secretMaterial = ["pass", "word=fixture-value"].join("");
    expect(() =>
      buildBackupManifest({ ...manifest(), encryptedArchive: { ...archive(), sha256: "bad" } }),
    ).toThrow("invalid_encrypted_archive_hash");
    expect(() =>
      buildBackupManifest({
        ...manifest(),
        encryptedArchive: archive(),
        restorePrerequisites: [secretMaterial],
      }),
    ).toThrow("rejected_secret_material");
    expect(() =>
      buildBackupManifest({
        ...manifest(),
        encryptedArchive: archive(),
        snapshotInventory: [{ ...SNAPSHOT, name: "password.txt" }],
      }),
    ).toThrow("excluded_snapshot_artifact");
  });

  it("creates a fresh network-disabled restore and cleans it up", async () => {
    const directories: string[] = [];
    const removed: string[] = [];
    let networkCalls = 0;
    let verifierCalls = 0;
    const result = await verifyDisposableRestore({
      archive: archive(),
      manifest: manifest(),
      makeTemporaryDirectory: async () => {
        const directory = `/synthetic/restore-${directories.length + 1}`;
        directories.push(directory);
        return directory;
      },
      removeTemporaryDirectory: async (directory) => {
        removed.push(directory);
      },
      verifier: async (input) => {
        verifierCalls += 1;
        expect(input.restoreDirectory).toBe("/synthetic/restore-1");
        expect(input.networkDisabled).toBe(true);
        expect(input.channelDeliveryDisabled).toBe(true);
        // The disposable verifier has no provider/channel adapters to call.
        expect(networkCalls).toBe(0);
        return { passed: true };
      },
    });
    expect(result).toEqual({ passed: true });
    expect(verifierCalls).toBe(1);
    expect(removed).toEqual(["/synthetic/restore-1"]);
    expect(directories).toHaveLength(1);
    expect(networkCalls).toBe(0);
  });

  it("always cleans a disposable restore directory after verifier failure", async () => {
    const removed: string[] = [];
    await expect(
      verifyDisposableRestore({
        archive: archive(),
        manifest: manifest(),
        makeTemporaryDirectory: async () => "/synthetic/restore-failure",
        removeTemporaryDirectory: async (directory) => {
          removed.push(directory);
        },
        verifier: async () => {
          throw new Error("restore_failed");
        },
      }),
    ).rejects.toThrow("restore_failed");
    expect(removed).toEqual(["/synthetic/restore-failure"]);
  });
});
