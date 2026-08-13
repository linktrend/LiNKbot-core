import { describe, expect, it } from "vitest";
import { buildBackupManifest, hashBackupBytes } from "./backup-manifest.js";

describe("backup manifest", () => {
  it("records hashes and preserves unfinished work without secrets", () => {
    const hash = hashBackupBytes(new TextEncoder().encode("synthetic"));
    const manifest = buildBackupManifest({ actor: "lisa", startedAtMs: 1, endedAtMs: 2, dreamingState: "completed", encryptedArchiveHash: hash, artifacts: [{ name: "state.sqlite", bytes: 9, sha256: hash, class: "database" }] });
    expect(manifest).toMatchObject({ formatVersion: 1, unfinishedWorkPreserved: true, encryptedArchiveHash: hash });
  });
  it("rejects an unverified archive hash", () => {
    expect(() => buildBackupManifest({ actor: "lisa", startedAtMs: 1, endedAtMs: 2, dreamingState: "completed", encryptedArchiveHash: "bad", artifacts: [] })).toThrow("invalid encrypted archive hash");
  });
});
