/**
 * Plugin SDK MCP HTTP fetch surface — re-exports the core guarded MCP fetch.
 */
import { describe, expect, it, vi } from "vitest";
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
    const secret = "Bearer plugin-mcp-body-secret-token";
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
});
