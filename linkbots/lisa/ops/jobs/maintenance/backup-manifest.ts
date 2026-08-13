import { createHash } from "node:crypto";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { assertNoSecretShapedFields } from "./maintenance-contracts.js";

export type SnapshotArtifactClass =
  | "definition"
  | "runtime_config"
  | "database"
  | "session"
  | "mutable_state"
  | "template"
  | "procedure"
  | "provider_receipt";

export type SnapshotArtifact = Readonly<{
  name: string;
  sourcePath: string;
  artifactClass: SnapshotArtifactClass;
  bytes: number;
  sha256: string;
}>;

export type SnapshotEnumerator = () => Promise<readonly SnapshotArtifact[]>;

const EXCLUDED_CLASS_PATTERN = /^(?:cache|log|temp|plaintext_secret|rebuildable|private_health)$/u;
const EXCLUDED_NAME_PATTERN =
  /(?:^|[/_.-])(?:cache|logs?|tmp|temp|secrets?|passwords?)(?:[/_.-]|$)|(?:\.pem$|\.key$)/iu;

function assertSha256(value: string, field: string): void {
  if (!/^[a-f0-9]{64}$/u.test(value)) {
    throw new Error(`invalid_${field}`);
  }
}

function assertSafeArtifact(artifact: SnapshotArtifact): void {
  if (EXCLUDED_CLASS_PATTERN.test(artifact.artifactClass)) {
    throw new Error(`excluded_snapshot_class:${artifact.artifactClass}`);
  }
  if (
    !artifact.name ||
    !artifact.sourcePath ||
    EXCLUDED_NAME_PATTERN.test(artifact.name) ||
    EXCLUDED_NAME_PATTERN.test(artifact.sourcePath)
  ) {
    throw new Error("excluded_snapshot_artifact");
  }
  if (!Number.isSafeInteger(artifact.bytes) || artifact.bytes < 0) {
    throw new Error("invalid_snapshot_byte_size");
  }
  assertSha256(artifact.sha256, "snapshot_hash");
  assertNoSecretShapedFields(artifact);
}

export function validateSnapshotInventory(
  artifacts: readonly SnapshotArtifact[],
): readonly SnapshotArtifact[] {
  const inventory = artifacts.map((artifact) => {
    assertSafeArtifact(artifact);
    return Object.freeze({ ...artifact });
  });
  return Object.freeze(inventory);
}

export async function enumerateSafeSnapshot(
  enumerator: SnapshotEnumerator,
): Promise<readonly SnapshotArtifact[]> {
  return validateSnapshotInventory(await enumerator());
}

export type SecretReference = Readonly<{
  provider: "google-secret-manager";
  secretName: string;
  version: string;
}>;

export function validateSecretReference(reference: SecretReference): SecretReference {
  if (
    reference.provider !== "google-secret-manager" ||
    !reference.secretName ||
    !reference.version ||
    Object.prototype.hasOwnProperty.call(reference, "secretValue") ||
    Object.prototype.hasOwnProperty.call(reference, "password")
  ) {
    throw new Error("invalid_secret_reference");
  }
  return Object.freeze({ ...reference });
}

export type EncryptedArchive = Readonly<{
  bytes: number;
  sha256: string;
  opaqueArchiveId: string;
}>;

export type Encryptor = (input: {
  snapshot: readonly SnapshotArtifact[];
  secretReference: SecretReference;
}) => Promise<EncryptedArchive>;

export async function encryptSnapshot(input: {
  encryptor: Encryptor;
  snapshot: readonly SnapshotArtifact[];
  secretReference: SecretReference;
}): Promise<EncryptedArchive> {
  const snapshot = validateSnapshotInventory(input.snapshot);
  const secretReference = validateSecretReference(input.secretReference);
  const archive = await input.encryptor({ snapshot, secretReference });
  if (!Number.isSafeInteger(archive.bytes) || archive.bytes < 0 || !archive.opaqueArchiveId) {
    throw new Error("invalid_encrypted_archive");
  }
  assertSha256(archive.sha256, "encrypted_archive_hash");
  return Object.freeze({ ...archive });
}

export type DestinationBindingId = string & {
  readonly __opaqueDestinationBindingId: unique symbol;
};

export function createDestinationBindingId(value: string): DestinationBindingId {
  if (!/^[A-Za-z0-9][A-Za-z0-9._:-]{1,127}$/u.test(value)) {
    throw new Error("invalid_opaque_destination_binding");
  }
  return value as DestinationBindingId;
}

export type DriveUploader = (input: {
  destinationBindingId: DestinationBindingId;
  archive: EncryptedArchive;
  manifest: BackupManifest;
}) => Promise<Readonly<{ verified: boolean }>>;

export async function uploadEncryptedBackup(input: {
  uploader: DriveUploader;
  destinationBindingId: DestinationBindingId;
  archive: EncryptedArchive;
  manifest: BackupManifest;
}): Promise<Readonly<{ verified: boolean }>> {
  if (!input.destinationBindingId) {
    throw new Error("missing_destination_binding");
  }
  const result = await input.uploader({
    destinationBindingId: input.destinationBindingId,
    archive: input.archive,
    manifest: input.manifest,
  });
  if (!result.verified) {
    return Object.freeze({ verified: false });
  }
  return Object.freeze({ verified: true });
}

export type BackupManifest = Readonly<{
  formatVersion: 1;
  actor: string;
  profile: string;
  sourceCommitFingerprint: string;
  configFingerprint: string;
  snapshotInventory: readonly SnapshotArtifact[];
  databaseInventory: readonly SnapshotArtifact[];
  archiveBytes: number;
  encryptedArchiveHash: string;
  captureStartedAtMs: number;
  captureEndedAtMs: number;
  dreamingState: "completed" | "skipped_dependency";
  unfinishedWorkPreservation: "unfinished_work_preserved";
  restorePrerequisites: readonly string[];
}>;

export function buildBackupManifest(input: {
  actor: string;
  profile: string;
  sourceCommitFingerprint: string;
  configFingerprint: string;
  captureStartedAtMs: number;
  captureEndedAtMs: number;
  dreamingState: BackupManifest["dreamingState"];
  snapshotInventory: readonly SnapshotArtifact[];
  encryptedArchive: EncryptedArchive;
  restorePrerequisites: readonly string[];
}): BackupManifest {
  if (!/^[a-f0-9]{40}$/u.test(input.sourceCommitFingerprint)) {
    throw new Error("invalid_source_commit_fingerprint");
  }
  assertSha256(input.configFingerprint, "config_fingerprint");
  if (
    !Number.isFinite(input.captureStartedAtMs) ||
    !Number.isFinite(input.captureEndedAtMs) ||
    input.captureEndedAtMs < input.captureStartedAtMs
  ) {
    throw new Error("invalid_capture_window");
  }
  const snapshotInventory = validateSnapshotInventory(input.snapshotInventory);
  const databaseInventory = Object.freeze(
    snapshotInventory.filter((artifact) => artifact.artifactClass === "database"),
  );
  assertSha256(input.encryptedArchive.sha256, "encrypted_archive_hash");
  if (!Number.isSafeInteger(input.encryptedArchive.bytes)) {
    throw new Error("invalid_encrypted_archive");
  }
  assertNoSecretShapedFields(input.encryptedArchive);
  const manifest: BackupManifest = Object.freeze({
    formatVersion: 1,
    actor: input.actor,
    profile: input.profile,
    sourceCommitFingerprint: input.sourceCommitFingerprint,
    configFingerprint: input.configFingerprint,
    snapshotInventory,
    databaseInventory,
    archiveBytes: input.encryptedArchive.bytes,
    encryptedArchiveHash: input.encryptedArchive.sha256,
    captureStartedAtMs: input.captureStartedAtMs,
    captureEndedAtMs: input.captureEndedAtMs,
    dreamingState: input.dreamingState,
    unfinishedWorkPreservation: "unfinished_work_preserved",
    restorePrerequisites: Object.freeze([...input.restorePrerequisites]),
  });
  assertNoSecretShapedFields(manifest);
  return manifest;
}

export function hashBackupBytes(value: Uint8Array): string {
  return createHash("sha256").update(value).digest("hex");
}

export type RestoreVerificationRequest = Readonly<{
  archive: EncryptedArchive;
  manifest: BackupManifest;
  restoreDirectory: string;
  networkDisabled: true;
  channelDeliveryDisabled: true;
}>;

export type RestoreVerifier = (
  input: RestoreVerificationRequest,
) => Promise<Readonly<{ passed: boolean }>>;

export async function verifyDisposableRestore(input: {
  verifier: RestoreVerifier;
  archive: EncryptedArchive;
  manifest: BackupManifest;
  makeTemporaryDirectory?: () => Promise<string>;
  removeTemporaryDirectory?: (directory: string) => Promise<void>;
}): Promise<Readonly<{ passed: boolean }>> {
  const makeTemporaryDirectory =
    input.makeTemporaryDirectory ?? (() => mkdtemp(join(tmpdir(), "lisa-wp04-")));
  const removeTemporaryDirectory =
    input.removeTemporaryDirectory ??
    ((directory: string) => rm(directory, { recursive: true, force: true }));
  const restoreDirectory = await makeTemporaryDirectory();
  try {
    const result = await input.verifier({
      archive: input.archive,
      manifest: input.manifest,
      restoreDirectory,
      networkDisabled: true,
      channelDeliveryDisabled: true,
    });
    return Object.freeze({ passed: result.passed });
  } finally {
    await removeTemporaryDirectory(restoreDirectory);
  }
}
