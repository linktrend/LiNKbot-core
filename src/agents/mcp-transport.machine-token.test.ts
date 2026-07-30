/**
 * Managed-MCP machine-token transport selection vs interactive oauth.
 */
import { beforeEach, describe, expect, it, vi } from "vitest";
import { resolveMcpTransportConfig } from "./mcp-transport-config.js";
import { resolveMcpTransport } from "./mcp-transport.js";

type StreamableTransportOptions = {
  requestInit?: RequestInit;
  fetch?: (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;
  authProvider?: unknown;
};

const {
  machineTokenBearerMock,
  oauthBearerMock,
  resolveConfiguredSecretInputStringMock,
  streamableTransportConstructorMock,
} = vi.hoisted(() => ({
  machineTokenBearerMock: vi.fn(() => vi.fn(async () => new Response("ok"))),
  oauthBearerMock: vi.fn(() => vi.fn(async () => new Response("ok"))),
  resolveConfiguredSecretInputStringMock: vi.fn(),
  streamableTransportConstructorMock: vi.fn(),
}));

vi.mock("./machine-token-fetch.js", () => ({
  withMachineTokenBearer: machineTokenBearerMock,
}));

vi.mock("./mcp-oauth-fetch.js", () => ({
  withMcpOAuthBearer: oauthBearerMock,
}));

vi.mock("../gateway/resolve-configured-secret-input-string.js", () => ({
  resolveConfiguredSecretInputString: resolveConfiguredSecretInputStringMock,
}));

vi.mock("@modelcontextprotocol/sdk/client/streamableHttp.js", () => ({
  StreamableHTTPClientTransport: function MockStreamableHTTPClientTransport(
    this: unknown,
    url: URL,
    options?: StreamableTransportOptions,
  ) {
    streamableTransportConstructorMock(url, options);
  },
}));

vi.mock("@modelcontextprotocol/sdk/client/sse.js", () => ({
  SSEClientTransport: function MockSSEClientTransport() {},
}));

vi.mock("../infra/net/undici-runtime.js", () => ({
  createHttp1Agent: (options: unknown) => ({ options }),
  createHttp1EnvHttpProxyAgent: (options: unknown) => ({ options }),
  createHttp1ProxyAgent: (options: unknown) => ({ options }),
  loadUndiciRuntimeDeps: () => ({
    fetch: vi.fn(async () => new Response("ok")),
  }),
}));

const MACHINE_TOKEN = {
  bindingId: "binding-skills",
  issuerUrl: "https://paci.example",
  clientId: "skills-client",
  scope: "skills.read",
  clientAssertionKeyRef: {
    source: "env" as const,
    provider: "default",
    id: "LINKTREND_SKILLS_ASSERTION_KEY",
  },
};

function latestStreamableOptions(): StreamableTransportOptions {
  const latestCall = streamableTransportConstructorMock.mock.calls.at(-1) as unknown[] | undefined;
  const options = latestCall?.[1];
  if (!options || typeof options !== "object") {
    throw new Error("Expected streamable HTTP transport options");
  }
  return options as StreamableTransportOptions;
}

describe("mcp transport machine-token wiring", () => {
  beforeEach(() => {
    machineTokenBearerMock.mockClear();
    oauthBearerMock.mockClear();
    resolveConfiguredSecretInputStringMock.mockReset();
    streamableTransportConstructorMock.mockClear();
    resolveConfiguredSecretInputStringMock.mockResolvedValue({
      value: "-----BEGIN PRIVATE KEY-----\nstub\n-----END PRIVATE KEY-----",
    });
  });

  it("resolves machineToken config into ResolvedHttpMcpTransportConfig", () => {
    const resolved = resolveMcpTransportConfig("skills", {
      url: "https://mcp.example.com/mcp",
      transport: "streamable-http",
      auth: "machine_token",
      machineToken: MACHINE_TOKEN,
    });

    expect(resolved).toEqual(
      expect.objectContaining({
        kind: "http",
        auth: "machine_token",
        machineToken: expect.objectContaining({
          bindingId: "binding-skills",
          issuerUrl: "https://paci.example",
          clientId: "skills-client",
          scope: "skills.read",
        }),
      }),
    );
  });

  it("selects machine-token bearer when auth is machine_token", async () => {
    resolveMcpTransport(
      "skills",
      {
        url: "https://mcp.example.com/mcp",
        transport: "streamable-http",
        auth: "machine_token",
        machineToken: MACHINE_TOKEN,
        headers: { Authorization: "Bearer static" },
      },
      { cfg: {} },
    );

    const options = latestStreamableOptions();
    expect(options.requestInit).toBeUndefined();
    expect(oauthBearerMock).not.toHaveBeenCalled();
    expect(machineTokenBearerMock).not.toHaveBeenCalled();

    // Secret resolution + withMachineTokenBearer happen lazily on first fetch.
    await options.fetch?.("https://mcp.example.com/mcp");

    expect(resolveConfiguredSecretInputStringMock).toHaveBeenCalledWith(
      expect.objectContaining({
        path: "mcp.servers.skills.machineToken.clientAssertionKeyRef",
      }),
    );
    expect(machineTokenBearerMock).toHaveBeenCalledWith(
      expect.objectContaining({
        serverName: "skills",
        resourceUrl: "https://mcp.example.com/mcp",
        binding: expect.objectContaining({
          bindingId: "binding-skills",
          clientAssertionKeyPem: expect.stringContaining("PRIVATE KEY"),
        }),
      }),
    );
    expect(oauthBearerMock).not.toHaveBeenCalled();
  });

  it("keeps interactive oauth when auth=oauth without machineToken", () => {
    resolveMcpTransport("probe", {
      url: "https://mcp.example.com/mcp",
      transport: "streamable-http",
      auth: "oauth",
      headers: {
        Authorization: "Bearer static",
      },
    });

    expect(oauthBearerMock).toHaveBeenCalledWith(
      expect.objectContaining({
        serverName: "probe",
        resourceUrl: "https://mcp.example.com/mcp",
      }),
    );
    expect(machineTokenBearerMock).not.toHaveBeenCalled();
    expect(latestStreamableOptions().requestInit).toBeUndefined();
  });

  it("prefers machineToken binding over auth=oauth when both are present", async () => {
    resolveMcpTransport(
      "skills",
      {
        url: "https://mcp.example.com/mcp",
        transport: "streamable-http",
        auth: "oauth",
        oauth: { scope: "openid" },
        machineToken: MACHINE_TOKEN,
      },
      { cfg: {} },
    );

    await latestStreamableOptions().fetch?.("https://mcp.example.com/mcp");

    expect(machineTokenBearerMock).toHaveBeenCalled();
    expect(oauthBearerMock).not.toHaveBeenCalled();
  });
});
