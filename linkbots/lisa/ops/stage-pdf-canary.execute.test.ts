/**
 * Stage PDF canary execute — mock transport proves request/verify; never production proof.
 * Operational rollback requires explicit wiring (temp config + fake runner in tests).
 * Run: node --experimental-strip-types --test linkbots/lisa/ops/stage-pdf-canary.execute.test.ts
 */
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";
import { LISA_OPENROUTER_ONLY_STAGE_ROUTING } from "./model-routing.openrouter-stage.ts";
import {
  STAGE_PDF_CANARY_ENDPOINT,
  STAGE_PDF_CANARY_MODEL,
  STAGE_PDF_CANARY_WIRE_MODEL,
  buildStagePdfOpenRouterRequest,
  buildSyntheticStagePdfBytes,
  executeStagePdfCanary,
  planStagePdfCanary,
  resolveLiveExecuteOperationalRollback,
  type StagePdfCanaryTransport,
  type StagePdfOpenRouterRequest,
} from "./stage-pdf-canary.ts";
import {
  applyStagePdfOperationalRollback,
  writeStagePdfRollbackFixtureConfig,
  type StagePdfServiceRunner,
} from "./stage-pdf-operational-rollback.ts";

const GATE_ENV = {
  STAGE_PDF_CANARY_EXECUTE: "1",
  OPENROUTER_API_KEY: "redacted-test-value-not-printed",
};

function routingSliceFixture() {
  const refs = LISA_OPENROUTER_ONLY_STAGE_ROUTING.agents.defaults;
  return {
    agents: {
      defaults: {
        model: {
          primary: refs.model.primary,
          fallbacks: [...refs.model.fallbacks],
        },
        imageModel: { primary: refs.imageModel.primary },
        pdfModel: { primary: refs.pdfModel.primary },
      },
    },
    tools: { deny: [] as string[] },
  };
}

function fakeRunner(events: string[]): StagePdfServiceRunner {
  return {
    async restart(service) {
      events.push(`restart:${service}`);
      return { ok: true };
    },
    async health(service) {
      events.push(`health:${service}`);
      return { ok: true };
    },
  };
}

function wireTempRollback(dir: string, events: string[] = []) {
  const configPath = path.join(dir, "openclaw.json");
  writeStagePdfRollbackFixtureConfig({
    targetPath: configPath,
    slice: routingSliceFixture(),
  });
  return { configPath, runner: fakeRunner(events), events };
}

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
      assert.equal(gated.proof_kind, "none");
      assert.equal(gated.paidSpendEnablementAllowed, false);
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

  it("execute fails closed without operationalRollback wiring", async () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-no-wire-"));
    const transport: StagePdfCanaryTransport = {
      async send() {
        return {
          ok: true,
          statusCode: 200,
          assistantText: "STAGE_PDF_CANARY_OK",
        };
      },
    };
    try {
      const receipt = await executeStagePdfCanary({
        outputDir: dir,
        executeGateEnv: GATE_ENV,
        transport,
      });
      assert.equal(receipt.status, "blocked_no_rollback_wiring");
      assert.equal(receipt.firstProductionProofEarned, false);
      assert.equal(receipt.spend, false);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("live CLI resolve fails closed without configPath/healthUrl", () => {
    const missing = resolveLiveExecuteOperationalRollback({
      STAGE_PDF_CANARY_EXECUTE: "1",
    });
    assert.equal(missing.ok, false);
    if (!missing.ok) assert.match(missing.error, /CONFIG_PATH/);

    const noHealth = resolveLiveExecuteOperationalRollback({
      STAGE_PDF_CANARY_CONFIG_PATH: "/tmp/does-not-need-exist-yet.json",
    });
    assert.equal(noHealth.ok, false);
    if (!noHealth.ok) assert.match(noHealth.error, /HEALTH_URL/);
  });

  it("mock success → mock_verified only (never executed / never first production proof)", async () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-ok-"));
    const wiring = wireTempRollback(dir);
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
        operationalRollback: { configPath: wiring.configPath, runner: wiring.runner },
      });
      assert.equal(receipt.status, "mock_verified");
      assert.equal(receipt.proof_kind, "mock_transport");
      assert.equal(receipt.firstProductionProofEarned, false);
      assert.equal(receipt.paidSpendEnablementAllowed, false);
      assert.equal(receipt.hardStops.paidSpendEnablementAllowed, false);
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
      assert.equal(written.status, "mock_verified");
      assert.equal(written.firstProductionProofEarned, false);
      assert.equal(JSON.stringify(written).includes("redacted-test-value"), false);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("adversarial: self-declared openrouter_http_production + 200 cannot earn production proof", async () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-spoof-"));
    const wiring = wireTempRollback(dir);
    // Force the classic spoof shape even though proofKind is no longer on the type.
    const transport = {
      proofKind: "openrouter_http_production",
      async send() {
        return {
          ok: true,
          statusCode: 200,
          assistantText: "STAGE_PDF_CANARY_OK — spoofed",
        };
      },
    } as StagePdfCanaryTransport & { proofKind: "openrouter_http_production" };
    try {
      const receipt = await executeStagePdfCanary({
        outputDir: dir,
        executeGateEnv: GATE_ENV,
        transport,
        operationalRollback: { configPath: wiring.configPath, runner: wiring.runner },
      });
      assert.equal(receipt.status, "mock_verified");
      assert.equal(receipt.proof_kind, "mock_transport");
      assert.equal(receipt.firstProductionProofEarned, false);
      assert.notEqual(receipt.status, "executed");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("adversarial: Object.assign spoof + Symbol.for brand still mock_verified only", async () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-spoof2-"));
    const wiring = wireTempRollback(dir);
    const transport = Object.assign(
      {
        async send() {
          return {
            ok: true,
            statusCode: 200,
            assistantText: "STAGE_PDF_CANARY_OK",
          };
        },
      },
      {
        proofKind: "openrouter_http_production",
        [Symbol.for("lisa.stage.pdf.openrouter_http_production")]: true,
      },
    ) as StagePdfCanaryTransport;
    try {
      const receipt = await executeStagePdfCanary({
        outputDir: dir,
        executeGateEnv: GATE_ENV,
        transport,
        operationalRollback: { configPath: wiring.configPath, runner: wiring.runner },
      });
      assert.equal(receipt.status, "mock_verified");
      assert.equal(receipt.proof_kind, "mock_transport");
      assert.equal(receipt.firstProductionProofEarned, false);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("adversarial spoof on failure never stamps production proof_kind", async () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-spoof-fail-"));
    const wiring = wireTempRollback(dir);
    const transport = {
      proofKind: "openrouter_http_production",
      async send() {
        return { ok: false, statusCode: 500, errorClass: "http_error", errorMessage: "boom" };
      },
    } as StagePdfCanaryTransport & { proofKind: "openrouter_http_production" };
    try {
      const receipt = await executeStagePdfCanary({
        outputDir: dir,
        executeGateEnv: GATE_ENV,
        transport,
        operationalRollback: { configPath: wiring.configPath, runner: wiring.runner },
      });
      assert.equal(receipt.status, "execute_failed_rolled_back");
      assert.equal(receipt.proof_kind, "mock_transport");
      assert.equal(receipt.firstProductionProofEarned, false);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("mock failure → operational tools_deny_pdf rollback on temp fixture + fake runner", async () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-fail-"));
    const events: string[] = [];
    const wiring = wireTempRollback(dir, events);
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
        operationalRollback: { configPath: wiring.configPath, runner: wiring.runner },
      });
      assert.equal(receipt.status, "execute_failed_rolled_back");
      assert.equal(receipt.firstProductionProofEarned, false);
      assert.equal(receipt.transport?.called, true);
      assert.equal(receipt.transport?.ok, false);
      assert.ok(receipt.rollbackApplied);
      assert.equal(receipt.rollbackApplied.strategy, "tools_deny_pdf");
      assert.equal(receipt.rollbackApplied.applied, true);
      assert.equal(receipt.rollbackApplied.scope, "operational_file");
      assert.equal(receipt.rollbackApplied.pdfToolDenied, true);
      assert.equal(receipt.rollbackApplied.pdfModelRemoved, true);
      assert.equal(receipt.rollbackApplied.operational?.ok, true);
      assert.equal(receipt.rollbackApplied.operational?.restarted, true);
      assert.equal(receipt.rollbackApplied.operational?.healthOk, true);
      assert.deepEqual(events, ["restart:ai.openclaw.lisa-stage", "health:ai.openclaw.lisa-stage"]);
      const after = JSON.parse(readFileSync(wiring.configPath, "utf8")) as {
        tools?: { deny?: string[] };
        agents?: { defaults?: { pdfModel?: unknown } };
      };
      assert.ok(after.tools?.deny?.includes("pdf"));
      assert.equal(after.agents?.defaults?.pdfModel, undefined);
      assert.ok(receipt.rollbackApplied.operational?.backupPath);
      assert.equal(receipt.rollback.neverWriteEmptyPrimary, true);
      assert.equal(JSON.stringify(receipt).includes('"primary":""'), false);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("empty assistant text fails verification and rolls back with wiring", async () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-empty-"));
    const wiring = wireTempRollback(dir);
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
        operationalRollback: { configPath: wiring.configPath, runner: wiring.runner },
      });
      assert.equal(receipt.status, "execute_failed_rolled_back");
      assert.equal(receipt.rollbackApplied?.strategy, "tools_deny_pdf");
      assert.equal(receipt.rollbackApplied?.scope, "operational_file");
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});

describe("Stage PDF operational rollback (temp fixture + fake runner)", () => {
  it("backs up, mutates file bytes, restarts, and health-checks lisa-stage only", async () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-op-ok-"));
    const configPath = path.join(dir, "openclaw.json");
    writeStagePdfRollbackFixtureConfig({
      targetPath: configPath,
      slice: routingSliceFixture(),
    });
    const before = readFileSync(configPath, "utf8");
    const events: string[] = [];
    const runner = fakeRunner(events);
    try {
      const result = await applyStagePdfOperationalRollback({
        configPath,
        runner,
        nowIso: "2026-08-03T12:10:00.000Z",
      });
      assert.equal(result.ok, true);
      assert.equal(result.service, "ai.openclaw.lisa-stage");
      assert.equal(result.restarted, true);
      assert.equal(result.healthOk, true);
      assert.equal(result.pdfToolDenied, true);
      assert.equal(result.pdfModelRemoved, true);
      assert.ok(result.backupPath);
      assert.equal(readFileSync(result.backupPath!, "utf8"), before);
      const after = JSON.parse(readFileSync(configPath, "utf8")) as {
        tools?: { deny?: string[] };
        agents?: { defaults?: { pdfModel?: unknown; model?: { primary?: string } } };
      };
      assert.ok(after.tools?.deny?.includes("pdf"));
      assert.equal(after.agents?.defaults?.pdfModel, undefined);
      assert.ok(after.agents?.defaults?.model?.primary);
      assert.deepEqual(events, ["restart:ai.openclaw.lisa-stage", "health:ai.openclaw.lisa-stage"]);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("restores backup then recovery-restarts when restart fails after write", async () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-op-restore-"));
    const configPath = path.join(dir, "openclaw.json");
    writeStagePdfRollbackFixtureConfig({
      targetPath: configPath,
      slice: routingSliceFixture(),
    });
    const before = readFileSync(configPath, "utf8");
    const events: string[] = [];
    let restartCalls = 0;
    const runner: StagePdfServiceRunner = {
      async restart(service) {
        events.push(`restart:${service}`);
        restartCalls += 1;
        if (restartCalls === 1) return { ok: false, error: "fake_restart_failed" };
        return { ok: true };
      },
      async health(service) {
        events.push(`health:${service}`);
        return { ok: true };
      },
    };
    try {
      const result = await applyStagePdfOperationalRollback({
        configPath,
        runner,
        nowIso: "2026-08-03T12:11:00.000Z",
      });
      assert.equal(result.ok, false);
      assert.equal(result.restoredFromBackup, true);
      assert.equal(result.recoveryRestarted, true);
      assert.equal(result.recoveryHealthOk, true);
      assert.equal(readFileSync(configPath, "utf8"), before);
      assert.match(result.error ?? "", /fake_restart_failed/);
      assert.deepEqual(events, [
        "restart:ai.openclaw.lisa-stage",
        "restart:ai.openclaw.lisa-stage",
        "health:ai.openclaw.lisa-stage",
      ]);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("fails loudly when recovery restart/health also fails after restore", async () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-op-recovery-fail-"));
    const configPath = path.join(dir, "openclaw.json");
    writeStagePdfRollbackFixtureConfig({
      targetPath: configPath,
      slice: routingSliceFixture(),
    });
    const runner: StagePdfServiceRunner = {
      async restart() {
        return { ok: false, error: "always_restart_fail" };
      },
      async health() {
        return { ok: false, error: "always_health_fail" };
      },
    };
    try {
      const result = await applyStagePdfOperationalRollback({
        configPath,
        runner,
        nowIso: "2026-08-03T12:12:00.000Z",
      });
      assert.equal(result.ok, false);
      assert.equal(result.restoredFromBackup, true);
      assert.equal(result.recoveryRestarted, false);
      assert.equal(result.recoveryHealthOk, false);
      assert.match(result.error ?? "", /recovery restart failed/);
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });

  it("refuses live Lisa service label", async () => {
    const dir = mkdtempSync(path.join(tmpdir(), "stage-pdf-op-refuse-"));
    const configPath = path.join(dir, "openclaw.json");
    writeFileSync(configPath, "{}\n");
    try {
      await assert.rejects(
        () =>
          applyStagePdfOperationalRollback({
            configPath,
            runner: {
              async restart() {
                return { ok: true };
              },
              async health() {
                return { ok: true };
              },
            },
            service: "ai.openclaw.lisa" as "ai.openclaw.lisa-stage",
          }),
        /only ai\.openclaw\.lisa-stage|refusing/,
      );
    } finally {
      rmSync(dir, { recursive: true, force: true });
    }
  });
});
