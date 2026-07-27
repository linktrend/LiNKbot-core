/**
 * Focused Phase 1 Brain fixture/fake proofs for Lisa integration.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it } from "vitest";
import {
  BRAIN_FAKE_PHASE1_LIMITATION,
  createBrainFake,
  getBrainToolNames,
  handleBrainMcpMessage,
  startBrainFakeHttpServer,
  validateBrainPayload,
  type BrainFakeHttpServer,
} from "./brain-fake.js";

const helperDir = path.dirname(fileURLToPath(import.meta.url));
const fixturesDir = path.resolve(helperDir, "../../../extensions/linkbrain/fixtures");

const PLAN_TOOLS = [
  "brain_browse",
  "brain_search",
  "brain_load",
  "brain_append_finding",
  "brain_capture_batch",
  "brain_episode_checkpoint",
  "brain_private_search",
  "brain_private_load",
  "brain_task_start",
  "brain_task_update",
  "brain_inbox_read",
  "brain_conflict_respond",
  "brain_message_send",
  "brain_checkpoint_write",
  "brain_handoff_create",
  "brain_handoff_accept",
  "brain_task_close",
] as const;

function readFixture(...parts: string[]) {
  return JSON.parse(fs.readFileSync(path.join(fixturesDir, ...parts), "utf8"));
}

describe("linkbrain Phase 1 fixtures", () => {
  it("parses identity, auth, health, and every §9.1 tool fixture", async () => {
    const positive = readFixture("identity", "positive-claim.json");
    const negative = readFixture("identity", "negative-claim.json");
    expect(positive.claim.platformActorId).toBe("actor_test_lisa");
    expect(negative.expectedOutcome).toBe("authentication_failed");

    for (const name of ["expired", "revoked", "wrong-audience", "wrong-scope"] as const) {
      const auth = readFixture("auth", `${name}.json`);
      expect(String(auth.credential.value)).toMatch(/^fake-/);
      expect(auth.expectedOutcome).toBeTruthy();
    }

    const tools = await getBrainToolNames();
    expect([...tools]).toEqual([...PLAN_TOOLS]);

    for (const tool of PLAN_TOOLS) {
      const family =
        tool.startsWith("brain_browse") ||
        tool === "brain_search" ||
        tool === "brain_load" ||
        tool === "brain_append_finding"
          ? "knowledge"
          : tool.startsWith("brain_capture") ||
              tool === "brain_episode_checkpoint" ||
              tool === "brain_private_search" ||
              tool === "brain_private_load"
            ? "private"
            : "coordination";
      const request = readFixture("tools", family, `${tool}.request.json`);
      const response = readFixture("tools", family, `${tool}.response.json`);
      const error = readFixture("tools", family, `${tool}.error.json`);
      expect(request.tool).toBe(tool);
      expect(response.contractVersion).toBe("brain.contract.v0.draft");
      expect(error.error.code).toBeTruthy();
    }

    expect(readFixture("health", "health-ok.json").status).toBe("ok");
    expect(readFixture("health", "version-negotiate.json").compatible).toBe(true);
    expect(readFixture("failures", "retryable.json").retryable).toBe(true);
    expect(readFixture("replay", "duplicate-idempotency.json").expected.secondReplayed).toBe(true);
  });
});

describe("linkbrain Phase 1 fake runtime", () => {
  it("rejects prohibited reasoning/secrets/unbounded fields", async () => {
    const reasoning = readFixture("capture", "prohibited-reasoning.json");
    const secrets = readFixture("capture", "prohibited-secrets.json");
    const unbounded = readFixture("capture", "prohibited-unbounded-tool-output.json");

    expect(await validateBrainPayload({ batch: reasoning.batch })).toMatchObject({
      ok: false,
      code: "prohibited_field",
    });
    expect(await validateBrainPayload({ batch: secrets.batch })).toMatchObject({
      ok: false,
      code: "prohibited_field",
    });
    expect(await validateBrainPayload({ batch: unbounded.batch })).toMatchObject({
      ok: false,
      code: "prohibited_field",
    });

    const fake = await createBrainFake({ fixturesDir });
    const rejected = fake.callTool(
      "brain_capture_batch",
      {
        idempotencyKey: "cap:bad:reasoning",
        batch: reasoning.batch,
      },
      { authToken: "fake-valid-token" },
    );
    expect(rejected.ok).toBe(false);
    expect(rejected.error?.code).toBe("prohibited_field");
  });

  it("rejects Skills-shaped cross-domain fields on Brain fake", async () => {
    const cross = readFixture("cross-domain-skills-shaped.json");
    const validation = await validateBrainPayload(cross.payload);
    expect(validation).toMatchObject({
      ok: false,
      code: "cross_domain_field",
    });

    const fake = await createBrainFake({ fixturesDir });
    const rejected = fake.callTool(
      "brain_append_finding",
      {
        idempotencyKey: "find:cross:001",
        finding: { title: "x" },
        ...cross.payload,
      },
      { authToken: "fake-valid-token" },
    );
    expect(rejected.ok).toBe(false);
    expect(rejected.error?.code).toBe("cross_domain_field");
  });

  it("returns replay-safe ack for duplicate idempotency keys", async () => {
    const fake = await createBrainFake({ fixturesDir });
    const args = {
      idempotencyKey: "chk:replay:001",
      taskId: "task_test_001",
      summary: "First write.",
    };
    const first = fake.callTool("brain_checkpoint_write", args, {
      authToken: "fake-valid-token",
    });
    const second = fake.callTool("brain_checkpoint_write", args, {
      authToken: "fake-valid-token",
    });
    expect(first.ok).toBe(true);
    expect(first.replayed).toBe(false);
    expect(second.ok).toBe(true);
    expect(second.replayed).toBe(true);
    expect(second.result?.checkpointId).toBe(first.result?.checkpointId);
    expect(BRAIN_FAKE_PHASE1_LIMITATION).toContain("in-memory");
  });

  it("covers auth matrix subset", async () => {
    const fake = await createBrainFake({ fixturesDir });
    const cases = [
      ["fake-expired-token", "expired"],
      ["fake-revoked-token", "revoked"],
      ["fake-wrong-audience-token", "wrong_audience"],
      ["fake-wrong-scope-token", "wrong_scope"],
    ] as const;
    for (const [token, detail] of cases) {
      const outcome = fake.callTool(
        "brain_browse",
        { path: "/knowledge/test" },
        { authToken: token },
      );
      expect(outcome.ok).toBe(false);
      expect(outcome.error?.code).toBe("authentication");
      expect(outcome.error?.detail).toBe(detail);
    }
    const ok = fake.callTool(
      "brain_browse",
      { path: "/knowledge/test" },
      { authToken: "fake-valid-token" },
    );
    expect(ok.ok).toBe(true);
  });

  it("serves health and version negotiation over MCP initialize", async () => {
    const fake = await createBrainFake({ fixturesDir });
    expect(fake.health().status).toBe("ok");
    expect(fake.negotiateVersion("brain.contract.v0.draft").compatible).toBe(true);
    expect(fake.negotiateVersion("brain.contract.v999").compatible).toBe(false);

    const listed = await handleBrainMcpMessage(fake, {
      jsonrpc: "2.0",
      id: 1,
      method: "tools/list",
    });
    expect(listed?.result?.tools?.map((tool: { name: string }) => tool.name)).toEqual([
      ...PLAN_TOOLS,
    ]);
  });
});

describe("linkbrain Phase 1 fake HTTP isolation", () => {
  let server: BrainFakeHttpServer | undefined;

  afterEach(async () => {
    await server?.stop();
    server = undefined;
  });

  it("binds 127.0.0.1 on an ephemeral port and serves health + tool call", async () => {
    server = await startBrainFakeHttpServer();
    expect(server.baseUrl).toMatch(/^http:\/\/127\.0\.0\.1:\d+$/);

    const health = await fetch(`${server.baseUrl}/health`);
    expect(health.status).toBe(200);
    expect(await health.json()).toMatchObject({ status: "ok" });

    const version = await fetch(`${server.baseUrl}/version`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ requested: "brain.contract.v0.draft" }),
    });
    expect(version.status).toBe(200);
    expect(await version.json()).toMatchObject({ compatible: true });

    const call = await fetch(`${server.baseUrl}/tools/call`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer fake-valid-token",
      },
      body: JSON.stringify({
        name: "brain_inbox_read",
        arguments: { limit: 5 },
      }),
    });
    expect(call.status).toBe(200);
    const body = await call.json();
    expect(body.ok).toBe(true);
    expect(body.result.items).toEqual([]);
  });
});
