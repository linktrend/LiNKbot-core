import { describe, expect, it, vi } from "vitest";
import { parseLinkbrainConfig } from "./src/config.js";
import { resolveLinkbrainTransport } from "./src/transport.js";

function stubApi(config: Record<string, unknown> = {}) {
  return {
    config: config as never,
    logger: {
      info: vi.fn(),
      warn: vi.fn(),
      error: vi.fn(),
      debug: vi.fn(),
    },
  };
}

const writeArgs = {
  toolName: "brain_capture_batch",
  idempotencyKey: "idem:test-1",
  arguments: { batch: { batchId: "b1" } },
};

describe("linkbrain transport modes", () => {
  it("defaults transportMode to disabled and returns transport_disabled", async () => {
    const config = parseLinkbrainConfig({});
    expect(config.transportMode).toBe("disabled");
    expect(config.mcpServerName).toBe("linkbrain");
    const transport = resolveLinkbrainTransport({
      api: stubApi(),
      config,
    });
    const result = await transport.write(writeArgs);
    expect(result).toMatchObject({
      ok: false,
      retryable: true,
      errorCode: "transport_disabled",
    });
    expect(result.errorCode).not.toBe("not_configured");
  });

  it("rejects fake outside test environment", async () => {
    const config = parseLinkbrainConfig({
      transportMode: "fake",
      environment: "production",
    });
    const transport = resolveLinkbrainTransport({
      api: stubApi(),
      config,
    });
    const result = await transport.write(writeArgs);
    expect(result).toMatchObject({
      ok: false,
      terminal: true,
      errorCode: "fake_rejected",
    });
  });

  it("accepts fake via explicit test injection", async () => {
    const config = parseLinkbrainConfig({
      transportMode: "fake",
      environment: "test",
    });
    const transport = resolveLinkbrainTransport({
      api: stubApi(),
      config,
      fakeForTests: {
        callTool: () => ({ ok: true, result: { accepted: true } }),
      },
    });
    const result = await transport.write(writeArgs);
    expect(result).toMatchObject({ ok: true, result: { accepted: true } });
  });

  it("http mode posts with SecretRef bearer from env", async () => {
    const fetchImpl = vi.fn(async (_url: string | URL | Request, init?: RequestInit) => {
      expect(init?.method).toBe("POST");
      const headers = new Headers(init?.headers);
      expect(headers.get("authorization")).toBe("Bearer fake-brain-token");
      const rawBody = init?.body;
      const bodyText =
        typeof rawBody === "string"
          ? rawBody
          : rawBody instanceof Uint8Array
            ? Buffer.from(rawBody).toString("utf8")
            : rawBody == null
              ? ""
              : JSON.stringify(rawBody);
      const body = JSON.parse(bodyText) as { toolName: string };
      expect(body.toolName).toBe("brain_capture_batch");
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    });
    const config = parseLinkbrainConfig({
      transportMode: "http",
      ingestionEndpoint: "https://brain.example.test/ingest",
      ingestionCredential: {
        source: "env",
        provider: "default",
        id: "LINKTREND_BRAIN_FAKE_TOKEN",
      },
    });
    const transport = resolveLinkbrainTransport({
      api: stubApi(),
      config,
      fetchImpl: fetchImpl as unknown as typeof fetch,
      env: { LINKTREND_BRAIN_FAKE_TOKEN: "fake-brain-token" },
    });
    const result = await transport.write(writeArgs);
    expect(result.ok).toBe(true);
    expect(fetchImpl).toHaveBeenCalledOnce();
  });

  it("http mode maps 503 to retryable and 401 to terminal", async () => {
    const config = parseLinkbrainConfig({
      transportMode: "http",
      ingestionEndpoint: "https://brain.example.test/ingest",
      ingestionCredential: "plain-fake-token",
    });
    const fetch503 = vi.fn(async () => new Response("busy", { status: 503 }));
    const transport503 = resolveLinkbrainTransport({
      api: stubApi(),
      config,
      fetchImpl: fetch503 as unknown as typeof fetch,
    });
    expect(await transport503.write(writeArgs)).toMatchObject({
      ok: false,
      retryable: true,
      errorCode: "retryable",
    });

    const fetch401 = vi.fn(async () => new Response("nope", { status: 401 }));
    const transport401 = resolveLinkbrainTransport({
      api: stubApi(),
      config,
      fetchImpl: fetch401 as unknown as typeof fetch,
    });
    expect(await transport401.write(writeArgs)).toMatchObject({
      ok: false,
      terminal: true,
      errorCode: "authentication",
    });
  });

  it("mcp mode calls frozen tool names through injected session", async () => {
    const calls: Array<{ name: string; args: Record<string, unknown> }> = [];
    const config = parseLinkbrainConfig({
      transportMode: "mcp",
      mcpServerName: "linkbrain",
    });
    const transport = resolveLinkbrainTransport({
      api: stubApi({
        mcp: {
          servers: {
            linkbrain: {
              enabled: true,
              url: "https://mcp.example.test/brain",
              headers: {
                Authorization: "Bearer mcp-fake",
              },
            },
          },
        },
      }),
      config,
      createMcpSession: async () => ({
        async callTool(name, args) {
          calls.push({ name, args });
          return { structuredContent: { accepted: true } };
        },
        async close() {},
      }),
    });
    const result = await transport.write(writeArgs);
    expect(result.ok).toBe(true);
    expect(calls).toEqual([
      {
        name: "brain_capture_batch",
        args: expect.objectContaining({
          idempotencyKey: "idem:test-1",
        }),
      },
    ]);
  });

  it("mcp oauth-only without SecretRef header returns auth_profile_required", async () => {
    const config = parseLinkbrainConfig({ transportMode: "mcp" });
    const transport = resolveLinkbrainTransport({
      api: stubApi({
        mcp: {
          servers: {
            linkbrain: {
              enabled: true,
              url: "https://mcp.example.test/brain",
              auth: "oauth",
              oauth: { authProfileId: "linkbrain-stage-mcp" },
            },
          },
        },
      }),
      config,
    });
    const result = await transport.write(writeArgs);
    expect(result).toMatchObject({
      ok: false,
      retryable: true,
      errorCode: "auth_profile_required",
    });
  });
});
