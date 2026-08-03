/**
 * Stage PDF canary execute — mock transport proves request, verify, rollback.
 * Run: node --experimental-strip-types --test linkbots/lisa/ops/stage-pdf-canary.execute.test.ts
 */
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";
import {
  STAGE_PDF_CANARY_ENDPOINT,
  STAGE_PDF_CANARY_MODEL,
  STAGE_PDF_CANARY_WIRE_MODEL,
  buildStagePdfOpenRouterRequest,
  buildSyntheticStagePdfBytes,
  executeStagePdfCanary,
  planStagePdfCanary,
  type StagePdfCanaryTransport,
  type StagePdfOpenRouterRequest,
} from "./stage-pdf-canary.ts";

const GATE_ENV = {
  STAGE_PDF_CANARY_EXECUTE: "1",
  OPENROUTER_API_KEY: "redacted-test-value-not-printed",
};

describe("Stage PDF canary execute (mock transport)", () => {
  it("sync plan never claims executed without a transport call", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-sync-exec-"));
    try {
      const gated = planStagePdfCanary({
        mode: "execute",
        outputDir: dir,
        executeGateEnv: GATE_ENV,
      });
      assert.equal(gated.status, "blocked_no_transport");
      assert.equal(gated.firstProductionProofEarned, false);
      assert.equal(gated.spend, false);

      const blocked = planStagePdfCanary({
        mode: "execute",
        outputDir: dir,
        executeGateEnv: { OPENROUTER_API_KEY: "x" },
      });
      assert.equal(blocked.status, "blocked_no_execute_gate");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("builds OpenRouter-only request with minimax-m3 and attached PDF", () => {
    const pdf = buildSyntheticStagePdfBytes();
    const sha = "abc";
    const req = buildStagePdfOpenRouterRequest({
      pdfPath: "/tmp/synthetic-stage-pdf-canary.pdf",
      pdfSha256: sha,
      pdfBytes: pdf.length,
      pdfBuffer: pdf,
    });
    assert.equal(req.modelRef, STAGE_PDF_CANARY_MODEL);
    assert.equal(req.wireModel, STAGE_PDF_CANARY_WIRE_MODEL);
    assert.equal(req.body.model, STAGE_PDF_CANARY_WIRE_MODEL);
    assert.equal(req.endpoint, STAGE_PDF_CANARY_ENDPOINT);
    assert.equal(req.openRouterOnly, true);
    assert.equal(req.pdf.attached, true);
    assert.equal(req.pdf.mimeType, "application/pdf");
    const filePart = req.body.messages[0]!.content.find((c) => c.type === "file");
    assert.ok(filePart && filePart.type === "file");
    assert.ok(filePart.file.file_data.startsWith("data:application/pdf;base64,"));
    assert.equal(req.body.model.startsWith("openrouter/"), false);
    assert.ok(req.modelRef.startsWith("openrouter/"));
  });

  it("mock success → executed + verified response + firstProductionProofEarned", async () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-ok-"));
    let captured: StagePdfOpenRouterRequest | undefined;
    const transport: StagePdfCanaryTransport = {
      async send(request) {
        captured = request;
        return {
          ok: true,
          statusCode: 200,
          assistantText: "STAGE_PDF_CANARY_OK — saw OpenClaw stage PDF canary",
        };
      },
    };
    try {
      const receipt = await executeStagePdfCanary({
        outputDir: dir,
        executeGateEnv: GATE_ENV,
        transport,
        nowIso: "2026-08-03T12:00:00.000Z",
      });
      assert.equal(receipt.status, "executed");
      assert.equal(receipt.firstProductionProofEarned, true);
      assert.equal(receipt.transport?.called, true);
      assert.equal(receipt.transport?.ok, true);
      assert.equal(receipt.request?.modelRef, STAGE_PDF_CANARY_MODEL);
      assert.equal(receipt.request?.pdfAttached, true);
      assert.equal(receipt.credentialPosture.secretPrinted, false);
      assert.ok(captured);
      assert.equal(captured.modelRef, STAGE_PDF_CANARY_MODEL);
      assert.equal(captured.pdf.attached, true);
      assert.ok(captured.body.messages[0]!.content.some((c) => c.type === "file"));
      const written = JSON.parse(
        readFileSync(path.join(dir, "pdf-canary-receipt.json"), "utf8"),
      ) as typeof receipt;
      assert.equal(written.status, "executed");
      assert.equal(JSON.stringify(written).includes("redacted-test-value"), false);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("mock failure → tools_deny_pdf rollback applied and recorded", async () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-fail-"));
    const transport: StagePdfCanaryTransport = {
      async send() {
        return {
          ok: false,
          statusCode: 502,
          errorClass: "http_error",
          errorMessage: "upstream_unavailable",
        };
      },
    };
    try {
      const receipt = await executeStagePdfCanary({
        outputDir: dir,
        executeGateEnv: GATE_ENV,
        transport,
        nowIso: "2026-08-03T12:01:00.000Z",
      });
      assert.equal(receipt.status, "execute_failed_rolled_back");
      assert.equal(receipt.firstProductionProofEarned, false);
      assert.equal(receipt.transport?.called, true);
      assert.equal(receipt.transport?.ok, false);
      assert.ok(receipt.rollbackApplied);
      assert.equal(receipt.rollbackApplied.strategy, "tools_deny_pdf");
      assert.equal(receipt.rollbackApplied.applied, true);
      assert.equal(receipt.rollbackApplied.pdfToolDenied, true);
      assert.equal(receipt.rollbackApplied.pdfModelRemoved, true);
      assert.equal(receipt.rollback.neverWriteEmptyPrimary, true);
      assert.equal(receipt.rollback.removePdfModelKey, true);
      assert.equal(JSON.stringify(receipt).includes('"primary":""'), false);
      assert.equal(
        receipt.rollbackApplied.restoreReceipt.receiptType,
        "lisa_stage_pdf_rollback_restore_v1",
      );
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("empty assistant text fails verification and rolls back", async () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-empty-"));
    const transport: StagePdfCanaryTransport = {
      async send() {
        return { ok: true, statusCode: 200, assistantText: "   " };
      },
    };
    try {
      const receipt = await executeStagePdfCanary({
        outputDir: dir,
        executeGateEnv: GATE_ENV,
        transport,
      });
      assert.equal(receipt.status, "execute_failed_rolled_back");
      assert.equal(receipt.rollbackApplied?.strategy, "tools_deny_pdf");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
