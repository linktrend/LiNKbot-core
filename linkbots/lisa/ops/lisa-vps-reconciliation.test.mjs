import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";
import {
  buildReconciliation,
  buildSourceAcceptanceReceipt,
  canonicalJson,
  validateReconciliation,
  validateSourceAcceptanceReceipt,
} from "./lisa-vps-reconciliation.mjs";

const HASH_LOCAL = "a".repeat(64);
const HASH_LOCAL_OTHER = "b".repeat(64);
const HASH_VPS = "c".repeat(64);
const HASH_VPS_OTHER = "d".repeat(64);

function source(id, inventorySha256) {
  return {
    id,
    inventorySha256,
    captureRef: `${id}-capture-redacted`,
    capturedAt: "2026-08-13T12:00:00Z",
  };
}

function entry(key, sha256, overrides = {}) {
  return {
    key,
    path: key.replace(/^[^:]+:/u, ""),
    kind: "file",
    sizeBytes: 10,
    mtimeMs: 1,
    sha256,
    ...overrides,
  };
}

function inventory(id, entries) {
  const canonicalEntries = [...entries].toSorted((left, right) =>
    left.key.localeCompare(right.key),
  );
  const inventorySha256 = createHash("sha256")
    .update(canonicalJson(canonicalEntries))
    .digest("hex");
  return { source: source(id, inventorySha256), entries };
}

describe("WP-02 deterministic Local/VPS reconciliation", () => {
  it("keeps VPS authoritative for conflicts and records exact duplicates", () => {
    const result = buildReconciliation({
      local: inventory("local", [
        entry("file:shared.txt", HASH_LOCAL, {
          conflictDisposition: {
            reviewed: true,
            disposition: "no_required_unique_facts",
            reviewRef: "review:shared-file-no-unique-facts",
          },
        }),
        entry("file:duplicate.txt", HASH_LOCAL_OTHER),
      ]),
      vps: inventory("vps", [
        entry("file:shared.txt", HASH_VPS),
        entry("file:duplicate.txt", HASH_LOCAL_OTHER),
      ]),
    });
    const conflict = result.comparisons.find((item) => item.key === "file:shared.txt");
    const duplicate = result.comparisons.find((item) => item.key === "file:duplicate.txt");
    assert.deepEqual(
      {
        status: conflict.status,
        classification: conflict.classification,
        authority: conflict.authority,
      },
      { status: "conflict", classification: "conflict_retained_as_evidence", authority: "vps" },
    );
    assert.equal(conflict.destination.kind, "evidence");
    assert.equal(duplicate.classification, "exact_duplicate");
    assert.equal(duplicate.destination.kind, "vps_authoritative");
    assert.equal(result.receipt.unresolvedCount, 0);
    assert.doesNotMatch(
      JSON.stringify(result),
      /synthetic private|message body|token=|password=/iu,
    );
  });

  it("requires a reviewed conflict disposition for completeness", () => {
    const cases = [
      {},
      {
        conflictDisposition: {
          reviewed: false,
          disposition: "no_required_unique_facts",
          reviewRef: "review:not-reviewed",
        },
      },
      {
        conflictDisposition: {
          reviewed: true,
          disposition: "facts_extracted",
          reviewRef: "review:bad-destination",
          facts: [
            {
              key: "record:unique-1",
              destination: { kind: "evidence", ref: "evidence:not-destination" },
              provenance: "local:record-1",
            },
          ],
        },
      },
    ];
    for (const overrides of cases) {
      const result = buildReconciliation({
        local: inventory("local", [entry("file:shared.txt", HASH_LOCAL, overrides)]),
        vps: inventory("vps", [entry("file:shared.txt", HASH_VPS)]),
      });
      assert.equal(result.comparisons[0].status, "conflict");
      assert.equal(result.comparisons[0].classification, "unresolved");
      assert.equal(result.comparisons[0].destination.kind, "hold");
      assert.equal(result.receipt.unresolvedCount, 1);
    }
  });

  it("accepts extracted conflict facts only with additive/archive destinations and provenance", () => {
    const result = buildReconciliation({
      local: inventory("local", [
        entry("file:shared.txt", HASH_LOCAL, {
          conflictDisposition: {
            reviewed: true,
            disposition: "facts_extracted",
            reviewRef: "review:shared-file-facts",
            facts: [
              {
                key: "record:unique-1",
                destination: { kind: "vps_additive", ref: "lbrain:additive-record-1" },
                provenance: "local:record-unique-1",
              },
              {
                key: "record:unique-2",
                destination: { kind: "archive", ref: "archive:record-unique-2" },
                provenance: "local:record-unique-2",
              },
            ],
          },
        }),
      ]),
      vps: inventory("vps", [entry("file:shared.txt", HASH_VPS)]),
    });
    assert.equal(result.comparisons[0].classification, "conflict_retained_as_evidence");
    assert.equal(result.comparisons[0].conflictDisposition.facts.length, 2);
    assert.equal(result.receipt.unresolvedCount, 0);
    validateReconciliation(result);
  });

  it("fails closed for a Local-only item without an explicit destination", () => {
    const result = buildReconciliation({
      local: inventory("local", [entry("record:history-1", HASH_LOCAL)]),
      vps: inventory("vps", []),
    });
    assert.equal(result.comparisons[0].classification, "unresolved");
    assert.equal(result.comparisons[0].destination, undefined);
    assert.equal(result.receipt.unresolvedCount, 1);
  });

  it("accepts additive Local information with provenance and preserves archive decisions", () => {
    const result = buildReconciliation({
      local: inventory("local", [
        entry("record:history-1", HASH_LOCAL, {
          kind: "record",
          reconciliation: {
            classification: "added",
            destination: { kind: "vps_additive", ref: "lbrain:additive-record-1" },
            reason: "VPS has no matching stable record",
          },
        }),
        entry("job:ship-pull", HASH_LOCAL_OTHER, {
          kind: "job",
          lifecycle: "closed",
          reconciliation: {
            classification: "superseded",
            destination: { kind: "archive", ref: "archive:local-job-ship-pull" },
            reason: "Promoted ten-job source catalogue supersedes the older job",
          },
        }),
      ]),
      vps: inventory("vps", []),
    });
    const added = result.comparisons.find((item) => item.key === "record:history-1");
    const superseded = result.comparisons.find((item) => item.key === "job:ship-pull");
    assert.equal(added.classification, "added");
    assert.equal(added.destination.kind, "vps_additive");
    assert.equal(superseded.classification, "superseded");
    assert.equal(superseded.destination.kind, "archive");
    assert.equal(result.summary["classification:added"], 1);
    assert.equal(result.summary["classification:superseded"], 1);
    validateReconciliation(result);
  });

  it("rejects reactivation of an obsolete or superseded job", () => {
    assert.throws(
      () =>
        buildReconciliation({
          local: inventory("local", [
            entry("job:old-reminder", HASH_LOCAL, {
              kind: "job",
              lifecycle: "active",
              reconciliation: {
                classification: "superseded",
                destination: { kind: "vps_additive", ref: "vps:old-reminder" },
                reason: "Newer promoted job exists",
              },
            }),
          ]),
          vps: inventory("vps", []),
        }),
      /active_legacy_job|legacy_job_reactivation/u,
    );
  });

  it("produces the same receipt for the same inputs regardless of entry order", () => {
    const localEntries = [entry("file:z.txt", HASH_LOCAL), entry("file:a.txt", HASH_LOCAL_OTHER)];
    const vpsEntries = [entry("file:z.txt", HASH_VPS_OTHER)];
    const first = buildReconciliation({
      local: inventory("local", localEntries),
      vps: inventory("vps", vpsEntries),
    });
    const second = buildReconciliation({
      local: inventory("local", [...localEntries].toReversed()),
      vps: inventory("vps", [...vpsEntries].toReversed()),
    });
    assert.equal(first.receipt.digestSha256, second.receipt.digestSha256);
    assert.equal(canonicalJson(first), canonicalJson(second));
  });

  it("requires final-delta gate evidence and verifies a serialized receipt", () => {
    const result = buildReconciliation({
      phase: "final-delta",
      gate: { localQuiesced: true, recoveryVerified: true, finalDeltaCaptured: true },
      local: inventory("local", []),
      vps: inventory("vps", []),
    });
    assert.deepEqual(result.gates, {
      localQuiesced: true,
      recoveryVerified: true,
      finalDeltaCaptured: true,
    });
    const root = mkdtempSync(path.join(tmpdir(), "lisa-reconcile-"));
    try {
      const localPath = path.join(root, "local.json");
      const vpsPath = path.join(root, "vps.json");
      const outputPath = path.join(root, "receipt.json");
      writeFileSync(localPath, `${JSON.stringify(inventory("local", []))}\n`);
      writeFileSync(vpsPath, `${JSON.stringify(inventory("vps", []))}\n`);
      const tool = path.resolve("linkbots/lisa/ops/lisa-vps-reconciliation.mjs");
      const compare = spawnSync(
        process.execPath,
        [
          tool,
          "compare",
          "--local",
          localPath,
          "--vps",
          vpsPath,
          "--phase",
          "final-delta",
          "--local-quiesced",
          "true",
          "--recovery-verified",
          "true",
          "--final-delta-captured",
          "true",
          "--output",
          outputPath,
        ],
        { encoding: "utf8" },
      );
      assert.equal(compare.status, 0, compare.stderr);
      const verify = spawnSync(process.execPath, [tool, "verify", "--manifest", outputPath], {
        encoding: "utf8",
      });
      assert.equal(verify.status, 0, verify.stderr);
      assert.equal(
        JSON.parse(readFileSync(outputPath, "utf8")).receipt.digestSha256,
        result.receipt.digestSha256,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it("fails closed for every missing or false final-delta gate in build and CLI paths", () => {
    const gateNames = ["localQuiesced", "recoveryVerified", "finalDeltaCaptured"];
    const gateFlags = {
      localQuiesced: "local-quiesced",
      recoveryVerified: "recovery-verified",
      finalDeltaCaptured: "final-delta-captured",
    };
    const local = inventory("local", []);
    const vps = inventory("vps", []);
    const root = mkdtempSync(path.join(tmpdir(), "lisa-reconcile-gates-"));
    try {
      const localPath = path.join(root, "local.json");
      const vpsPath = path.join(root, "vps.json");
      const manifestPath = path.join(root, "manifest.json");
      writeFileSync(localPath, `${JSON.stringify(local)}\n`);
      writeFileSync(vpsPath, `${JSON.stringify(vps)}\n`);
      const tool = path.resolve("linkbots/lisa/ops/lisa-vps-reconciliation.mjs");

      for (const gateName of gateNames) {
        for (const value of [false, undefined]) {
          const gate = {
            localQuiesced: true,
            recoveryVerified: true,
            finalDeltaCaptured: true,
          };
          if (value === undefined) {
            delete gate[gateName];
          } else {
            gate[gateName] = value;
          }
          assert.throws(
            () =>
              buildReconciliation({
                phase: "final-delta",
                gate,
                local,
                vps,
              }),
            new RegExp(`(?:manifest_gate_invalid|final_delta_gate_required):${gateName}`, "u"),
          );

          const compareArgs = [
            tool,
            "compare",
            "--local",
            localPath,
            "--vps",
            vpsPath,
            "--phase",
            "final-delta",
            "--local-quiesced",
            "true",
            "--recovery-verified",
            "true",
            "--final-delta-captured",
            "true",
            "--output",
            manifestPath,
          ];
          const flagIndex = compareArgs.indexOf(`--${gateFlags[gateName]}`);
          if (value === undefined) {
            compareArgs.splice(flagIndex, 2);
          } else {
            compareArgs[flagIndex + 1] = "false";
          }
          const compare = spawnSync(process.execPath, compareArgs, { encoding: "utf8" });
          assert.notEqual(compare.status, 0, `${gateName} compare unexpectedly passed`);

          const validManifest = buildReconciliation({
            phase: "final-delta",
            gate: { localQuiesced: true, recoveryVerified: true, finalDeltaCaptured: true },
            local,
            vps,
          });
          const invalidManifest = structuredClone(validManifest);
          if (value === undefined) {
            delete invalidManifest.gates[gateName];
          } else {
            invalidManifest.gates[gateName] = value;
          }
          writeFileSync(manifestPath, `${JSON.stringify(invalidManifest)}\n`);
          const verify = spawnSync(process.execPath, [tool, "verify", "--manifest", manifestPath], {
            encoding: "utf8",
          });
          assert.notEqual(verify.status, 0, `${gateName} verify unexpectedly passed`);
        }
      }
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it("rejects a ledger tamper even when an altered receipt digest is supplied", () => {
    const result = buildReconciliation({
      local: inventory("local", [entry("file:shared.txt", HASH_LOCAL)]),
      vps: inventory("vps", [entry("file:shared.txt", HASH_VPS)]),
    });
    const tampered = structuredClone(result);
    tampered.comparisons[0].status = "vps_only";
    const { receipt: _receipt, ...payload } = tampered;
    tampered.receipt.digestSha256 = createHash("sha256")
      .update(canonicalJson(payload))
      .digest("hex");
    assert.throws(() => validateReconciliation(tampered), /manifest_comparisons_mismatch/u);
  });

  it("rejects absolute paths and structurally embedded payload or secret fields", () => {
    assert.throws(
      () =>
        buildReconciliation({
          local: inventory("local", [entry("file:/private/lisa.txt", HASH_LOCAL)]),
          vps: inventory("vps", []),
        }),
      /unsafe_inventory_path/u,
    );
    for (const field of ["payload", "value", "token"]) {
      assert.throws(
        () =>
          buildReconciliation({
            local: inventory("local", [
              { ...entry("file:metadata.txt", HASH_LOCAL), [field]: "redacted-test-value" },
            ]),
            vps: inventory("vps", []),
          }),
        /forbidden_.*_field/u,
      );
    }
  });

  it("accepts sanitized labels, categories, scopes, and token-related paths without values", () => {
    const safeEntry = entry("config:oauth-token", HASH_LOCAL, {
      path: "config/google-oauth.json",
      category: "oauth-token-metadata",
    });
    const result = buildReconciliation({
      local: inventory("local", [safeEntry]),
      vps: inventory("vps", [safeEntry]),
    });
    assert.equal(result.comparisons[0].classification, "exact_duplicate");
    assert.equal(result.inventories.local[0].path, "config/google-oauth.json");
    assert.equal(result.inventories.local[0].category, "oauth-token-metadata");
  });

  it("builds a deterministic PKT-11 source receipt with every external gate held", () => {
    const input = {
      sourceBase: {
        repository: "openclaw/openclaw",
        ref: "origin/development",
        commit: "9".repeat(40),
        tree: "8".repeat(40),
      },
      stageWorkspacePackage: {
        status: "verified-source",
        packageId: "lisa-stage-workspace-v1",
        manifestSha256: "e".repeat(64),
        fileCount: 45,
      },
    };
    const first = buildSourceAcceptanceReceipt(input);
    const second = buildSourceAcceptanceReceipt(structuredClone(input));
    assert.equal(first.receiptType, "lisa_pkt_11_source_acceptance_receipt_v1");
    assert.equal(first.status, "source-prepared");
    assert.deepEqual(first.dependencyPackets.reproduced, []);
    assert.ok(Object.values(first.gates).every((gate) => gate.status === "HOLD"));
    assert.equal(first.actions.vpsTouched, false);
    assert.equal(first.actions.liveLisaTouched, false);
    assert.equal(first.rollback.rollbackVerified, false);
    assert.equal(first.receiptDigestSha256, second.receiptDigestSha256);
    validateSourceAcceptanceReceipt(first);
  });

  it("rejects PKT-11 receipts that claim an external gate or duplicate dependencies", () => {
    const receipt = buildSourceAcceptanceReceipt({
      sourceBase: {
        repository: "openclaw/openclaw",
        ref: "origin/development",
        commit: "9".repeat(40),
        tree: "8".repeat(40),
      },
      stageWorkspacePackage: {
        status: "verified-source",
        packageId: "lisa-stage-workspace-v1",
        manifestSha256: "e".repeat(64),
        fileCount: 45,
      },
    });
    const gateClaim = structuredClone(receipt);
    gateClaim.gates.vpsDeployment.status = "PASS";
    assert.throws(() => validateSourceAcceptanceReceipt(gateClaim), /acceptance_gate_not_hold/);
    const duplicate = structuredClone(receipt);
    duplicate.dependencyPackets.reproduced = ["PKT-01"];
    assert.throws(
      () => validateSourceAcceptanceReceipt(duplicate),
      /acceptance_reproduced_dependencies_mismatch/,
    );
  });

  it("validates the committed PKT-11 source receipt without live evidence", () => {
    const receiptPath = path.resolve(
      "linkbots/lisa/ops/receipts/pkt-11-source-acceptance.receipt.json",
    );
    const receipt = JSON.parse(readFileSync(receiptPath, "utf8"));
    validateSourceAcceptanceReceipt(receipt);
    assert.equal(receipt.status, "source-prepared");
    assert.equal(receipt.artifacts.stageWorkspacePackage.status, "verified-source");
    assert.ok(Object.values(receipt.gates).every((gate) => gate.status === "HOLD"));
  });
});
