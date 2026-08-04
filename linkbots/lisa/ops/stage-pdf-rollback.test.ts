/**
 * Stage PDF rollback-plan receipt + reversible in-memory helpers (non-live).
 * Run: node --experimental-strip-types --test linkbots/lisa/ops/stage-pdf-rollback.test.ts
 */
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";
import { planStagePdfCanary } from "./stage-pdf-canary.ts";

describe("Stage PDF rollback-plan receipt (non-live)", () => {
  it('uses tools_deny_pdf strategy and neverWriteEmptyPrimary (no primary:"")', () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-rollback-"));
    try {
      const receipt = planStagePdfCanary({
        mode: "rollback-plan",
        outputDir: dir,
        executeGateEnv: {},
        nowIso: "2026-08-03T12:30:00.000Z",
      });
      assert.equal(receipt.status, "rollback_planned");
      assert.equal(receipt.rollback.strategy, "tools_deny_pdf");
      assert.equal(receipt.rollback.neverWriteEmptyPrimary, true);
      assert.equal(receipt.rollback.removePdfModelKey, true);
      assert.deepEqual(receipt.rollback.toolsDenyAdd, ["pdf"]);
      assert.equal(receipt.rollback.runtimeConfigNotes.removedKey, "agents.defaults.pdfModel");
      assert.equal(receipt.rollback.runtimeConfigNotes.denyPath, "tools.deny");
      const raw = JSON.stringify(receipt.rollback);
      assert.equal(raw.includes('"primary":""'), false);
      const written = JSON.parse(
        readFileSync(path.join(dir, "pdf-canary-receipt.json"), "utf8"),
      ) as typeof receipt;
      assert.equal(written.rollback.strategy, "tools_deny_pdf");
      assert.equal(written.rollback.neverWriteEmptyPrimary, true);
      assert.equal(JSON.stringify(written.rollback).includes('"primary":""'), false);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
