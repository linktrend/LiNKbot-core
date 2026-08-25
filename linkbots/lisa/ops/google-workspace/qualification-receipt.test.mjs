import assert from "node:assert/strict";
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";
import {
  validateQualifiedSkillsReceipt,
  validateQualifiedSkillsReceiptFiles,
} from "./qualification-receipt.mjs";

const sourcePath = new URL("./receipts/qualified-skills.receipt.json", import.meta.url);
const source = JSON.parse(readFileSync(sourcePath, "utf8"));

function qualifiedCandidate() {
  return {
    ...source,
    status: "qualified",
    catalogueBinding: { ...source.catalogueBinding },
    catalogueIndexBinding: {
      ...source.catalogueIndexBinding,
      presentSkillIds: [...source.catalogueIndexBinding.requiredSkillIds],
      status: "qualified",
    },
    qualification: {
      ...source.qualification,
      state: "qualified",
      executionGate: "enabled",
    },
  };
}

describe("PKT-07 qualified Skills receipt validator", () => {
  it("rejects the committed source-only receipt", () => {
    assert.deepEqual(validateQualifiedSkillsReceipt(source, source), {
      ok: false,
      reason: "candidate_not_qualified",
    });
  });

  it("accepts a complete candidate bound to every source identity and digest", () => {
    assert.deepEqual(validateQualifiedSkillsReceipt(source, qualifiedCandidate()), { ok: true });
  });

  it("rejects provider pin drift even when the qualification flags are enabled", () => {
    const candidate = qualifiedCandidate();
    candidate.provider = {
      ...candidate.provider,
      commit: "0000000000000000000000000000000000000000",
    };
    assert.deepEqual(validateQualifiedSkillsReceipt(source, candidate), {
      ok: false,
      reason: "provider_commit_mismatch",
    });
  });

  it("rejects a partial catalogue rather than enabling the wrapper", () => {
    const candidate = qualifiedCandidate();
    candidate.catalogueIndexBinding = {
      ...candidate.catalogueIndexBinding,
      presentSkillIds: candidate.catalogueIndexBinding.presentSkillIds.slice(0, -1),
    };
    assert.deepEqual(validateQualifiedSkillsReceipt(source, candidate), {
      ok: false,
      reason: "required_skill_ids_not_present",
    });
  });

  it("fails closed for unreadable or malformed receipt files", () => {
    const directory = mkdtempSync(path.join(tmpdir(), "lisa-qualification-receipt-"));
    try {
      const candidatePath = path.join(directory, "candidate.json");
      writeFileSync(candidatePath, "not-json");
      assert.deepEqual(validateQualifiedSkillsReceiptFiles(sourcePath, candidatePath), {
        ok: false,
        reason: "receipt_unreadable_or_invalid_json",
      });
    } finally {
      rmSync(directory, { recursive: true, force: true });
    }
  });
});
