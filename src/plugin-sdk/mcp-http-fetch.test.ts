/**
 * Plugin SDK MCP HTTP fetch surface — re-exports the core guarded MCP fetch.
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  buildPluginMcpHttpFetch,
  MCP_HTTP_MAX_RESPONSE_BYTES,
  withoutMcpAuthorizationHeader,
  withSameOriginMcpHttpHeaders,
} from "./mcp-http-fetch.js";

const testGlobal = globalThis as Record<string, unknown>;
const TEST_UNDICI_RUNTIME_DEPS_KEY = "__OPENCLAW_TEST_UNDICI_RUNTIME_DEPS__";
const { lookupMock } = vi.hoisted(() => ({
  lookupMock: vi.fn(),
}));

vi.mock("node:dns/promises", () => ({
  lookup: lookupMock,
}));

class TestAgent {
  constructor(readonly options: unknown) {}
}

class TestEnvHttpProxyAgent {
  constructor(readonly options: unknown) {}
}

class TestProxyAgent {
  constructor(readonly options: unknown) {}
}

describe("plugin-sdk mcp-http-fetch", () => {
  afterEach(() => {
    delete testGlobal[TEST_UNDICI_RUNTIME_DEPS_KEY];
    lookupMock.mockReset();
  });

  it("exports the guarded MCP fetch helpers", () => {
    expect(buildPluginMcpHttpFetch).toBeTypeOf("function");
    expect(withoutMcpAuthorizationHeader).toBeTypeOf("function");
    expect(withSameOriginMcpHttpHeaders).toBeTypeOf("function");
    expect(MCP_HTTP_MAX_RESPONSE_BYTES).toBe(16 * 1024 * 1024);
  });

  it("strips Authorization for same-origin helper callers", () => {
    expect(
      withoutMcpAuthorizationHeader({
        Authorization: "Bearer static",
        "x-openclaw": "1",
      }),
    ).toEqual({ "x-openclaw": "1" });
  });

  it("rejects link-local metadata targets via SSRF policy", async () => {
    testGlobal[TEST_UNDICI_RUNTIME_DEPS_KEY] = {
      Agent: TestAgent,
      EnvHttpProxyAgent: TestEnvHttpProxyAgent,
      ProxyAgent: TestProxyAgent,
      fetch: vi.fn(async () => new Response("ok")),
    };
    const fetchFn = buildPluginMcpHttpFetch({
      resourceUrl: "https://mcp.example.com/mcp",
    });
    await expect(fetchFn("http://169.254.169.254/latest")).rejects.toThrow(
      /Blocked hostname or private\/internal\/special-use IP address/i,
    );
  });

  it("rejects private RFC1918 targets via SSRF policy", async () => {
    testGlobal[TEST_UNDICI_RUNTIME_DEPS_KEY] = {
      Agent: TestAgent,
      EnvHttpProxyAgent: TestEnvHttpProxyAgent,
      ProxyAgent: TestProxyAgent,
      fetch: vi.fn(async () => new Response("ok")),
    };
    const fetchFn = buildPluginMcpHttpFetch({
      resourceUrl: "https://mcp.example.com/mcp",
    });
    await expect(fetchFn("http://10.0.0.8/internal")).rejects.toThrow(
      /Blocked hostname or private\/internal\/special-use IP address/i,
    );
  });

  it("omits configured Authorization on cross-origin MCP hops", async () => {
    const seen: Array<{ url: string; authorization: string | null }> = [];
    const baseFetch = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url =
        typeof input === "string" ? input : input instanceof URL ? input.href : String(input);
      seen.push({
        url,
        authorization: new Headers(init?.headers).get("authorization"),
      });
      return new Response("ok", { status: 200 });
    });
    const fetchFn = withSameOriginMcpHttpHeaders({
      fetchFn: baseFetch as never,
      headers: { Authorization: "Bearer secret-token" },
      resourceUrl: "https://mcp.example.com/mcp",
    });
    await fetchFn("https://mcp.example.com/mcp", { method: "POST" });
    await fetchFn("https://evil.example.com/callback", { method: "GET" });
    expect(seen[0]).toEqual({
      url: "https://mcp.example.com/mcp",
      authorization: "Bearer secret-token",
    });
    expect(seen[1]).toEqual({
      url: "https://evil.example.com/callback",
      authorization: null,
    });
  });

  it("fails closed on stalled MCP requests via deadline", async () => {
    lookupMock.mockResolvedValue([{ address: "93.184.216.34", family: 4 }]);
    testGlobal[TEST_UNDICI_RUNTIME_DEPS_KEY] = {
      Agent: TestAgent,
      EnvHttpProxyAgent: TestEnvHttpProxyAgent,
      ProxyAgent: TestProxyAgent,
      fetch: vi.fn(
        async (_input: RequestInfo | URL, init?: RequestInit) =>
          await new Promise<Response>((_resolve, reject) => {
            const signal = init?.signal;
            if (!signal) {
              reject(new Error("expected abort signal"));
              return;
            }
            signal.addEventListener(
              "abort",
              () => {
                reject(Object.assign(new Error("aborted"), { name: "AbortError" }));
              },
              { once: true },
            );
          }),
      ),
    };
    const fetchFn = buildPluginMcpHttpFetch({
      resourceUrl: "https://mcp.example.com/mcp",
      timeoutMs: 50,
    });
    await expect(fetchFn("https://mcp.example.com/mcp")).rejects.toThrow();
  });

  it("bounds oversized plugin MCP response bodies without leaking tokens", async () => {
    lookupMock.mockResolvedValue([{ address: "93.184.216.34", family: 4 }]);
    const secret = `ltfx.n.df022292544769e8f655.v1`;
    const maxBytes = 32;
    testGlobal[TEST_UNDICI_RUNTIME_DEPS_KEY] = {
      Agent: TestAgent,
      EnvHttpProxyAgent: TestEnvHttpProxyAgent,
      ProxyAgent: TestProxyAgent,
      fetch: vi.fn(
        async () =>
          new Response(`${"y".repeat(maxBytes + 8)}${secret}`, {
            status: 200,
            headers: { "content-type": "application/json" },
          }),
      ),
    };
    const fetchFn = buildPluginMcpHttpFetch({
      resourceUrl: "https://mcp.example.com/mcp",
      maxResponseBytes: maxBytes,
    });
    const response = await fetchFn("https://mcp.example.com/mcp");
    let overflow: unknown;
    try {
      await response.text();
    } catch (error) {
      overflow = error;
    }
    expect(overflow).toBeInstanceOf(Error);
    expect((overflow as Error).message).toMatch(/exceeds \d+ bytes/);
    expect((overflow as Error).message).not.toContain(secret);
    expect((overflow as Error).message).not.toContain("Bearer");
  });

  it("clamps plugin-requested maxResponseBytes to the host ceiling at build time", () => {
    expect(() =>
      buildPluginMcpHttpFetch({
        resourceUrl: "https://mcp.example.com/mcp",
        maxResponseBytes: Number.MAX_SAFE_INTEGER,
      }),
    ).not.toThrow();
    expect(() =>
      buildPluginMcpHttpFetch({
        resourceUrl: "https://mcp.example.com/mcp",
        maxResponseBytes: 64,
      }),
    ).not.toThrow();
  });

  it.each([0, -1, 2.5, Number.NaN, Number.POSITIVE_INFINITY])(
    "fails closed on invalid plugin maxResponseBytes %s",
    (value) => {
      expect(() =>
        buildPluginMcpHttpFetch({
          resourceUrl: "https://mcp.example.com/mcp",
          maxResponseBytes: value,
        }),
      ).toThrow(/maxResponseBytes must be a positive safe integer/);
    },
  );

  it("aborts Streamable/SSE reads at the host ceiling when an enormous limit is requested", async () => {
    lookupMock.mockResolvedValue([{ address: "93.184.216.34", family: 4 }]);
    const chunkSize = 1024 * 1024;
    let cancelled = false;
    const source = new ReadableStream<Uint8Array>({
      pull(controller) {
        controller.enqueue(new Uint8Array(chunkSize));
      },
      cancel() {
        cancelled = true;
      },
    });
    testGlobal[TEST_UNDICI_RUNTIME_DEPS_KEY] = {
      Agent: TestAgent,
      EnvHttpProxyAgent: TestEnvHttpProxyAgent,
      ProxyAgent: TestProxyAgent,
      fetch: vi.fn(
        async () =>
          new Response(source, {
            status: 200,
            headers: { "content-type": "text/event-stream" },
          }),
      ),
    };
    const fetchFn = buildPluginMcpHttpFetch({
      resourceUrl: "https://mcp.example.com/mcp",
      maxResponseBytes: Number.MAX_SAFE_INTEGER,
    });
    const response = await fetchFn("https://mcp.example.com/mcp");
    const reader = response.body?.getReader();
    expect(reader).toBeDefined();
    let received = 0;
    let overflow: unknown;
    for (;;) {
      try {
        const result = await reader!.read();
        if (result.done || !result.value) {
          break;
        }
        received += result.value.byteLength;
      } catch (error) {
        overflow = error;
        break;
      }
    }
    expect(received).toBe(MCP_HTTP_MAX_RESPONSE_BYTES);
    expect(overflow).toBeInstanceOf(Error);
    expect((overflow as Error).message).toBe(
      `Guarded response body exceeds ${MCP_HTTP_MAX_RESPONSE_BYTES} bytes`,
    );
    reader!.releaseLock();
    expect(cancelled).toBe(true);
  });

  it("does not enqueue the overflowing cumulative chunk on the plugin SDK path", async () => {
    lookupMock.mockResolvedValue([{ address: "93.184.216.34", family: 4 }]);
    const maxBytes = 10;
    const first = new TextEncoder().encode("12345678");
    const overflowChunk = new TextEncoder().encode("WXYZ");
    let pullCount = 0;
    const source = new ReadableStream<Uint8Array>({
      pull(controller) {
        pullCount += 1;
        controller.enqueue(pullCount === 1 ? first : overflowChunk);
      },
    });
    testGlobal[TEST_UNDICI_RUNTIME_DEPS_KEY] = {
      Agent: TestAgent,
      EnvHttpProxyAgent: TestEnvHttpProxyAgent,
      ProxyAgent: TestProxyAgent,
      fetch: vi.fn(
        async () =>
          new Response(source, {
            status: 200,
            headers: { "content-type": "text/event-stream" },
          }),
      ),
    };
    const fetchFn = buildPluginMcpHttpFetch({
      resourceUrl: "https://mcp.example.com/mcp",
      maxResponseBytes: maxBytes,
    });
    const response = await fetchFn("https://mcp.example.com/mcp");
    const reader = response.body?.getReader();
    expect(reader).toBeDefined();
    const delivered: Uint8Array[] = [];
    let overflow: unknown;
    for (;;) {
      try {
        const result = await reader!.read();
        if (result.done || !result.value) {
          break;
        }
        delivered.push(result.value);
      } catch (error) {
        overflow = error;
        break;
      }
    }
    expect(delivered).toHaveLength(1);
    expect(Buffer.concat(delivered).toString("utf8")).toBe("12345678");
    expect(overflow).toBeInstanceOf(Error);
    expect((overflow as Error).message).toBe(`Guarded response body exceeds ${maxBytes} bytes`);
    reader!.releaseLock();
  });
});
