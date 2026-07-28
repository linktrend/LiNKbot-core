/**
 * Configurable Skills transport adapters.
 *
 * Modes: disabled (default) | fake (test-only) | http | mcp.
 * Drain calls exact frozen skills_* ops. No conversation hooks.
 */
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { resolveConfiguredSecretInputString } from "openclaw/plugin-sdk/secret-input-runtime";
import type { OpenClawPluginApi } from "../runtime-api.js";
import type { LinkskillsConfig, LinkskillsTransportMode } from "./config.js";
import {
  createSkillsFakeTransport,
  type LinkskillsTransport,
  type LinkskillsTransportResult,
  type SkillsFakeDispatch,
} from "./runtime.js";
import { isSkillsDrainTool } from "./tools.js";

type ManagedMcpServerEntry = {
  enabled?: boolean;
  command?: string;
  args?: string[];
  env?: Record<string, string | number | boolean>;
  cwd?: string;
  workingDirectory?: string;
  url?: string;
  transport?: "stdio" | "sse" | "streamable-http";
  headers?: Record<string, unknown>;
  auth?: string;
  oauth?: {
    authProfileId?: string;
    scope?: string;
    redirectUrl?: string;
    clientMetadataUrl?: string;
  };
  connectionTimeoutMs?: number;
  requestTimeoutMs?: number;
  [key: string]: unknown;
};

type McpToolSession = {
  callTool(
    name: string,
    args: Record<string, unknown>,
  ): Promise<{ isError?: boolean; structuredContent?: unknown; content?: unknown }>;
  close(): Promise<void>;
};

export type ResolveLinkskillsTransportParams = {
  api: Pick<OpenClawPluginApi, "config" | "logger">;
  config: LinkskillsConfig;
  fakeForTests?: {
    fake: SkillsFakeDispatch;
    authorization: string;
  };
  fetchImpl?: typeof fetch;
  env?: NodeJS.ProcessEnv;
  createMcpSession?: (server: ManagedMcpServerEntry) => Promise<McpToolSession>;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mapHttpStatus(
  status: number,
): Pick<LinkskillsTransportResult, "retryable" | "terminal" | "errorCode" | "safeMessage"> {
  if (status === 429 || status === 408 || status === 502 || status === 503 || status === 504) {
    return {
      retryable: true,
      terminal: false,
      errorCode: status === 429 ? "throttled" : "retryable",
      safeMessage: `HTTP ${status}`,
    };
  }
  if (status >= 500) {
    return {
      retryable: true,
      terminal: false,
      errorCode: "retryable",
      safeMessage: `HTTP ${status}`,
    };
  }
  if (status === 401 || status === 403) {
    return {
      retryable: false,
      terminal: true,
      errorCode: "authentication",
      safeMessage: `HTTP ${status}`,
    };
  }
  if (status >= 400 && status < 500) {
    return {
      retryable: false,
      terminal: true,
      errorCode: "terminal",
      safeMessage: `HTTP ${status}`,
    };
  }
  return {
    retryable: true,
    terminal: false,
    errorCode: "retryable",
    safeMessage: `HTTP ${status}`,
  };
}

function createStaticResultTransport(result: LinkskillsTransportResult): LinkskillsTransport {
  return {
    async write() {
      return result;
    },
  };
}

function createDisabledTransport(): LinkskillsTransport {
  return createStaticResultTransport({
    ok: false,
    retryable: true,
    terminal: false,
    errorCode: "transport_disabled",
    safeMessage: "linkskills transportMode is disabled",
  });
}

function createRejectedFakeTransport(safeMessage: string): LinkskillsTransport {
  return createStaticResultTransport({
    ok: false,
    retryable: false,
    terminal: true,
    errorCode: "fake_rejected",
    safeMessage,
  });
}

async function resolveBearerToken(params: {
  config: LinkskillsConfig;
  apiConfig: OpenClawPluginApi["config"];
  env: NodeJS.ProcessEnv;
}): Promise<{ value?: string; error?: LinkskillsTransportResult }> {
  if (params.config.skillsCredential === undefined) {
    return {
      error: {
        ok: false,
        retryable: true,
        terminal: false,
        errorCode: "credential_missing",
        safeMessage: "linkskills skillsCredential is not configured",
      },
    };
  }
  const resolved = await resolveConfiguredSecretInputString({
    config: params.apiConfig,
    env: params.env,
    value: params.config.skillsCredential,
    path: "plugins.entries.linkskills.config.skillsCredential",
  });
  if (resolved.unresolvedRefReason || !resolved.value) {
    return {
      error: {
        ok: false,
        retryable: true,
        terminal: false,
        errorCode: "credential_unresolved",
        safeMessage: resolved.unresolvedRefReason ?? "linkskills skillsCredential unresolved",
      },
    };
  }
  return { value: resolved.value };
}

function coerceHeaderValue(value: unknown): string | undefined {
  if (typeof value === "string" && value.length > 0) {
    return value;
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  return undefined;
}

function expandEnvTemplate(value: string, env: NodeJS.ProcessEnv): string {
  return value.replace(/\$\{([A-Z0-9_]+)\}/g, (_match, name: string) => env[name] ?? "");
}

async function resolveMcpHeaders(params: {
  server: ManagedMcpServerEntry;
  apiConfig: OpenClawPluginApi["config"];
  env: NodeJS.ProcessEnv;
}): Promise<{ headers: Record<string, string>; authProfileOnly: boolean }> {
  const headers: Record<string, string> = {};
  const raw = params.server.headers ?? {};
  for (const [key, value] of Object.entries(raw)) {
    if (isRecord(value) && typeof value.source === "string") {
      const resolved = await resolveConfiguredSecretInputString({
        config: params.apiConfig,
        env: params.env,
        value,
        path: `mcp.servers.headers.${key}`,
      });
      if (resolved.value) {
        headers[key] = resolved.value;
      }
      continue;
    }
    const coerced = coerceHeaderValue(value);
    if (coerced) {
      headers[key] = expandEnvTemplate(coerced, params.env);
    }
  }

  const authProfileId =
    typeof params.server.oauth?.authProfileId === "string"
      ? params.server.oauth.authProfileId
      : undefined;
  const hasAuthorization = Object.keys(headers).some((key) => {
    const value = headers[key];
    return (
      key.toLowerCase() === "authorization" && typeof value === "string" && value.trim().length > 0
    );
  });
  const authProfileOnly =
    Boolean(authProfileId || params.server.auth === "oauth") && !hasAuthorization;
  return { headers, authProfileOnly };
}

function readManagedServer(
  apiConfig: OpenClawPluginApi["config"],
  serverName: string,
): ManagedMcpServerEntry | undefined {
  const servers = apiConfig.mcp?.servers;
  if (!servers || typeof servers !== "object") {
    return undefined;
  }
  const entry = (servers as Record<string, unknown>)[serverName];
  if (!isRecord(entry)) {
    return undefined;
  }
  return entry as ManagedMcpServerEntry;
}

async function openDefaultMcpSession(
  server: ManagedMcpServerEntry,
  headers: Record<string, string>,
): Promise<McpToolSession> {
  const client = new Client({ name: "openclaw-linkskills", version: "1.0.0" });
  const cwd = server.cwd ?? server.workingDirectory;
  let transport;

  if (server.command) {
    const env: Record<string, string> = {};
    for (const [key, value] of Object.entries(server.env ?? {})) {
      env[key] = String(value);
    }
    transport = new StdioClientTransport({
      command: server.command,
      args: server.args ?? [],
      env: Object.keys(env).length > 0 ? env : undefined,
      cwd,
      stderr: "pipe",
    });
  } else if (typeof server.url === "string" && server.url.length > 0) {
    const url = new URL(server.url);
    const transportKind = server.transport ?? "streamable-http";
    if (transportKind === "sse") {
      transport = new SSEClientTransport(url, {
        requestInit: Object.keys(headers).length > 0 ? { headers } : undefined,
      });
    } else {
      transport = new StreamableHTTPClientTransport(url, {
        requestInit: Object.keys(headers).length > 0 ? { headers } : undefined,
      });
    }
  } else {
    throw new Error("linkskills mcp server entry requires command or url");
  }

  await client.connect(transport);
  return {
    async callTool(name, args) {
      return (await client.callTool({ name, arguments: args })) as {
        isError?: boolean;
        structuredContent?: unknown;
        content?: unknown;
      };
    },
    async close() {
      await client.close();
    },
  };
}

function createHttpTransport(params: {
  endpoint: string;
  config: LinkskillsConfig;
  apiConfig: OpenClawPluginApi["config"];
  env: NodeJS.ProcessEnv;
  fetchImpl: typeof fetch;
}): LinkskillsTransport {
  return {
    async write(writeParams) {
      if (writeParams.signal?.aborted) {
        return {
          ok: false,
          retryable: true,
          errorCode: "aborted",
          safeMessage: "aborted",
        };
      }
      if (!isSkillsDrainTool(writeParams.toolName)) {
        return {
          ok: false,
          terminal: true,
          errorCode: "tool_not_allowlisted",
          safeMessage: `tool "${writeParams.toolName}" is not a Skills drain op`,
        };
      }
      const bearer = await resolveBearerToken({
        config: params.config,
        apiConfig: params.apiConfig,
        env: params.env,
      });
      if (bearer.error) {
        return bearer.error;
      }
      try {
        const response = await params.fetchImpl(params.endpoint, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${bearer.value}`,
          },
          body: JSON.stringify({
            toolName: writeParams.toolName,
            idempotencyKey: writeParams.idempotencyKey,
            arguments: writeParams.arguments,
          }),
          signal: writeParams.signal,
        });
        if (response.ok) {
          let result: Record<string, unknown> | undefined;
          try {
            const json = (await response.json()) as unknown;
            if (isRecord(json)) {
              result = json;
            }
          } catch {
            result = undefined;
          }
          return { ok: true, result };
        }
        return {
          ok: false,
          ...mapHttpStatus(response.status),
        };
      } catch (error) {
        if (writeParams.signal?.aborted) {
          return {
            ok: false,
            retryable: true,
            errorCode: "aborted",
            safeMessage: "aborted",
          };
        }
        return {
          ok: false,
          retryable: true,
          errorCode: "network_error",
          safeMessage: error instanceof Error ? error.message : "network error",
        };
      }
    },
  };
}

function createMcpTransport(params: {
  server: ManagedMcpServerEntry;
  apiConfig: OpenClawPluginApi["config"];
  env: NodeJS.ProcessEnv;
  createMcpSession: (server: ManagedMcpServerEntry) => Promise<McpToolSession>;
}): LinkskillsTransport {
  return {
    async write(writeParams) {
      if (writeParams.signal?.aborted) {
        return {
          ok: false,
          retryable: true,
          errorCode: "aborted",
          safeMessage: "aborted",
        };
      }
      if (!isSkillsDrainTool(writeParams.toolName)) {
        return {
          ok: false,
          terminal: true,
          errorCode: "tool_not_allowlisted",
          safeMessage: `tool "${writeParams.toolName}" is not a Skills drain op`,
        };
      }

      const { headers, authProfileOnly } = await resolveMcpHeaders({
        server: params.server,
        apiConfig: params.apiConfig,
        env: params.env,
      });
      if (authProfileOnly) {
        return {
          ok: false,
          retryable: true,
          terminal: false,
          errorCode: "auth_profile_required",
          safeMessage:
            "linkskills MCP server uses oauth.authProfileId; Gateway must inject bearer auth before plugin-owned drain (prefer SecretRef Authorization header)",
        };
      }

      let session: McpToolSession | undefined;
      try {
        const serverWithHeaders: ManagedMcpServerEntry = {
          ...params.server,
          headers,
        };
        session = await params.createMcpSession(serverWithHeaders);
        const outcome = await session.callTool(writeParams.toolName, {
          ...writeParams.arguments,
          idempotency_key: writeParams.idempotencyKey,
        });
        if (outcome.isError) {
          return {
            ok: false,
            terminal: true,
            errorCode: "mcp_tool_error",
            safeMessage: "MCP tool returned isError",
          };
        }
        const result = isRecord(outcome.structuredContent)
          ? outcome.structuredContent
          : isRecord(outcome.content)
            ? outcome.content
            : undefined;
        return { ok: true, result };
      } catch (error) {
        return {
          ok: false,
          retryable: true,
          errorCode: "mcp_connect_error",
          safeMessage: error instanceof Error ? error.message : "MCP connect/call failed",
        };
      } finally {
        if (session) {
          try {
            await session.close();
          } catch {
            // ignore close errors
          }
        }
      }
    },
  };
}

/**
 * Resolves the Skills write transport from plugin config.
 * Defaults to disabled. Fake is test-only. Does not require live MCP/HTTP servers at resolve time.
 */
export function resolveLinkskillsTransport(
  params: ResolveLinkskillsTransportParams,
): LinkskillsTransport {
  const mode: LinkskillsTransportMode = params.config.transportMode;
  const env = params.env ?? process.env;
  const fetchImpl = params.fetchImpl ?? fetch;

  if (mode === "disabled") {
    return createDisabledTransport();
  }

  if (mode === "fake") {
    if (params.fakeForTests) {
      return createSkillsFakeTransport(params.fakeForTests);
    }
    if (params.config.environment !== "test") {
      return createRejectedFakeTransport(
        "linkskills fake transport is not allowed outside test environment",
      );
    }
    return createRejectedFakeTransport(
      "linkskills fake transport requires explicit test injection (fakeForTests)",
    );
  }

  if (mode === "http") {
    const endpoint = params.config.skillsEndpoint;
    if (!endpoint) {
      return createStaticResultTransport({
        ok: false,
        retryable: true,
        terminal: false,
        errorCode: "endpoint_missing",
        safeMessage: "linkskills skillsEndpoint is required for http transportMode",
      });
    }
    return createHttpTransport({
      endpoint,
      config: params.config,
      apiConfig: params.api.config,
      env,
      fetchImpl,
    });
  }

  if (mode === "mcp") {
    const serverName = params.config.mcpServerName;
    const server = readManagedServer(params.api.config, serverName);
    if (!server) {
      return createStaticResultTransport({
        ok: false,
        retryable: true,
        terminal: false,
        errorCode: "mcp_server_missing",
        safeMessage: `mcp.servers.${serverName} is not configured`,
      });
    }
    if (server.enabled === false) {
      return createStaticResultTransport({
        ok: false,
        retryable: true,
        terminal: false,
        errorCode: "mcp_server_disabled",
        safeMessage: `mcp.servers.${serverName} is disabled`,
      });
    }
    const createMcpSession =
      params.createMcpSession ??
      ((entry: ManagedMcpServerEntry) =>
        openDefaultMcpSession(
          entry,
          Object.fromEntries(
            Object.entries(entry.headers ?? {}).flatMap(([key, value]) => {
              const coerced = coerceHeaderValue(value);
              return coerced ? [[key, coerced] as const] : [];
            }),
          ),
        ));
    return createMcpTransport({
      server,
      apiConfig: params.api.config,
      env,
      createMcpSession,
    });
  }

  const exhaustive: never = mode;
  void exhaustive;
  return createDisabledTransport();
}
