/**
 * MCP client transport factory.
 *
 * This module turns normalized MCP server config into stdio, SSE, or
 * streamable-HTTP SDK transports with OpenClaw auth, redirect, and logging rules.
 */
import {
  SSEClientTransport,
  type SSEClientTransportOptions,
} from "@modelcontextprotocol/sdk/client/sse.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import type { FetchLike, Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import { normalizeOptionalString } from "@openclaw/normalization-core/string-coerce";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { resolveConfiguredSecretInputString } from "../gateway/resolve-configured-secret-input-string.js";
import { logDebug } from "../logger.js";
import { withMachineTokenBearer } from "./machine-token-fetch.js";
import type { MachineTokenBinding } from "./machine-token.js";
import { resolveMcpAuthProfileId, withMcpAuthProfileBearer } from "./mcp-auth-profile.js";
import {
  buildMcpHttpFetch,
  withoutMcpAuthorizationHeader,
  withSameOriginMcpHttpHeaders,
} from "./mcp-http-fetch.js";
import { withMcpOAuthBearer } from "./mcp-oauth-fetch.js";
import { OpenClawStdioClientTransport } from "./mcp-stdio-transport.js";
import { resolveMcpTransportConfig } from "./mcp-transport-config.js";

type ResolvedMcpTransport = {
  transport: Transport;
  description: string;
  transportType: "stdio" | "sse" | "streamable-http";
  connectionTimeoutMs: number;
  requestTimeoutMs: number;
  supportsParallelToolCalls: boolean;
  detachStderr?: () => void;
};

function attachStderrLogging(serverName: string, transport: OpenClawStdioClientTransport) {
  const stderr = transport.stderr;
  if (!stderr || typeof stderr.on !== "function") {
    return undefined;
  }
  const onData = (chunk: Buffer | string) => {
    const message =
      normalizeOptionalString(typeof chunk === "string" ? chunk : String(chunk)) ?? "";
    if (!message) {
      return;
    }
    for (const line of message.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (trimmed) {
        logDebug(`bundle-mcp:${serverName}: ${trimmed}`);
      }
    }
  };
  stderr.on("data", onData);
  return () => {
    if (typeof stderr.off === "function") {
      stderr.off("data", onData);
    } else if (typeof stderr.removeListener === "function") {
      stderr.removeListener("data", onData);
    }
  };
}

type SseEventSourceFetch = NonNullable<
  NonNullable<SSEClientTransportOptions["eventSourceInit"]>["fetch"]
>;

function buildSseEventSourceFetch(
  headers: Record<string, string>,
  baseFetch: FetchLike,
): SseEventSourceFetch {
  return (url: string | URL, init?: RequestInit) => {
    // Header names are case-insensitive, but object spreads preserve case
    // variants and can duplicate Authorization on the wire. Normalize before
    // merging so operator headers override SDK headers as a single entry.
    const mergedHeaders: Record<string, string> = {};
    for (const [key, value] of new Headers(init?.headers)) {
      mergedHeaders[key.toLowerCase()] = value;
    }
    for (const [key, value] of Object.entries(headers)) {
      mergedHeaders[key.toLowerCase()] = value;
    }
    return baseFetch(url, {
      ...(init as RequestInit),
      headers: mergedHeaders,
    }) as ReturnType<SseEventSourceFetch>;
  };
}

function usesManagedHttpAuth(params: {
  auth?: "oauth" | "machine_token";
  authProfileId?: string;
  machineToken?: unknown;
}): boolean {
  return Boolean(
    params.auth === "oauth" ||
    params.auth === "machine_token" ||
    params.authProfileId ||
    params.machineToken,
  );
}

/**
 * Lazily resolve the machine-token assertion key, then wrap fetch with bearer injection.
 * resolveMcpTransport stays sync; secret resolution happens on the first same-origin call.
 */
function withResolvedMachineTokenBearer(params: {
  fetchFn: FetchLike;
  serverName: string;
  resourceUrl: string;
  headers?: Record<string, string>;
  machineToken: {
    bindingId: string;
    issuerUrl: string;
    clientId: string;
    audience?: string;
    scope?: string;
    clientAssertionKeyRef: unknown;
  };
  cfg?: OpenClawConfig;
}): FetchLike {
  let bearerFetch: FetchLike | undefined;
  let resolveKeyPromise: Promise<string> | undefined;

  const resolveAssertionKeyPem = async (): Promise<string> => {
    if (!params.cfg) {
      throw new Error(
        `MCP server "${params.serverName}" uses machine-token auth, but no OpenClaw config was provided to resolve clientAssertionKeyRef.`,
      );
    }
    resolveKeyPromise ??= (async () => {
      const resolved = await resolveConfiguredSecretInputString({
        config: params.cfg!,
        env: process.env,
        value: params.machineToken.clientAssertionKeyRef,
        path: `mcp.servers.${params.serverName}.machineToken.clientAssertionKeyRef`,
      });
      if (!resolved.value) {
        throw new Error(
          resolved.unresolvedRefReason ??
            `MCP server "${params.serverName}" could not resolve machineToken.clientAssertionKeyRef.`,
        );
      }
      return resolved.value;
    })();
    return await resolveKeyPromise;
  };

  return async (url, init) => {
    if (!bearerFetch) {
      const clientAssertionKeyPem = await resolveAssertionKeyPem();
      const binding: MachineTokenBinding = {
        bindingId: params.machineToken.bindingId,
        issuerUrl: params.machineToken.issuerUrl,
        clientId: params.machineToken.clientId,
        ...(params.machineToken.audience ? { audience: params.machineToken.audience } : {}),
        ...(params.machineToken.scope ? { scope: params.machineToken.scope } : {}),
        clientAssertionKeyPem,
      };
      bearerFetch = withMachineTokenBearer({
        fetchFn: params.fetchFn,
        // Discovery/token mint must not inherit resource Authorization headers.
        authFetchFn: params.fetchFn,
        serverName: params.serverName,
        resourceUrl: params.resourceUrl,
        headers: params.headers,
        binding,
      });
    }
    return bearerFetch(url, init);
  };
}

/** Resolves a configured MCP server into a live SDK transport instance. */
export function resolveMcpTransport(
  serverName: string,
  rawServer: unknown,
  options?: { cfg?: OpenClawConfig; agentDir?: string },
): ResolvedMcpTransport | null {
  const resolved = resolveMcpTransportConfig(serverName, rawServer);
  if (!resolved) {
    return null;
  }
  if (resolved.kind === "stdio") {
    const transport = new OpenClawStdioClientTransport({
      command: resolved.command,
      args: resolved.args,
      env: resolved.env,
      cwd: resolved.cwd,
      stderr: "pipe",
    });
    return {
      transport,
      description: resolved.description,
      transportType: "stdio",
      connectionTimeoutMs: resolved.connectionTimeoutMs,
      requestTimeoutMs: resolved.requestTimeoutMs,
      supportsParallelToolCalls: resolved.supportsParallelToolCalls,
      detachStderr: attachStderrLogging(serverName, transport),
    };
  }
  const authProfileId = resolveMcpAuthProfileId(rawServer);
  const useMachineToken = resolved.auth === "machine_token" || Boolean(resolved.machineToken);
  // The SDK reuses one fetch for OAuth and long-lived SSE/streamable bodies.
  // Per-RPC deadlines belong to client calls, not this transport fetch.
  const baseFetch = buildMcpHttpFetch({
    sslVerify: resolved.sslVerify,
    clientCert: resolved.clientCert,
    clientKey: resolved.clientKey,
    resourceUrl: resolved.url,
  });
  const managedAuth = usesManagedHttpAuth({
    auth: resolved.auth,
    authProfileId,
    machineToken: resolved.machineToken,
  });
  const headers = managedAuth ? withoutMcpAuthorizationHeader(resolved.headers) : resolved.headers;
  const resourceFetch = withSameOriginMcpHttpHeaders({
    fetchFn: baseFetch,
    headers,
    resourceUrl: resolved.url,
  });
  // Priority: machine-token binding → auth-profile bearer → interactive oauth.
  const httpFetch = useMachineToken
    ? resolved.machineToken
      ? withResolvedMachineTokenBearer({
          fetchFn: baseFetch,
          serverName,
          resourceUrl: resolved.url,
          headers,
          machineToken: resolved.machineToken,
          cfg: options?.cfg,
        })
      : baseFetch
    : authProfileId
      ? withMcpAuthProfileBearer({
          fetchFn: baseFetch,
          serverName,
          resourceUrl: resolved.url,
          headers,
          authProfileId,
          cfg: options?.cfg,
          agentDir: options?.agentDir,
        })
      : resolved.auth === "oauth"
        ? withMcpOAuthBearer({
            fetchFn: resourceFetch,
            // Protected-resource discovery lives at the resource origin and may
            // require the same routing headers. Cross-origin auth calls stay scrubbed.
            authFetchFn: resourceFetch,
            serverName,
            resourceUrl: resolved.url,
            config: resolved.oauth,
          })
        : baseFetch;
  const omitStaticAuthHeaders = resolved.auth === "oauth" || resolved.auth === "machine_token";
  if (resolved.transportType === "streamable-http") {
    return {
      transport: new StreamableHTTPClientTransport(new URL(resolved.url), {
        requestInit: omitStaticAuthHeaders || !headers ? undefined : { headers },
        fetch: httpFetch,
      }),
      description: resolved.description,
      transportType: "streamable-http",
      connectionTimeoutMs: resolved.connectionTimeoutMs,
      requestTimeoutMs: resolved.requestTimeoutMs,
      supportsParallelToolCalls: resolved.supportsParallelToolCalls,
    };
  }
  const sseHeaders: Record<string, string> = { ...headers };
  const hasHeaders = Object.keys(sseHeaders).length > 0;
  return {
    transport: new SSEClientTransport(new URL(resolved.url), {
      requestInit: omitStaticAuthHeaders || !hasHeaders ? undefined : { headers: sseHeaders },
      fetch: httpFetch,
      eventSourceInit: {
        fetch: buildSseEventSourceFetch(omitStaticAuthHeaders ? {} : sseHeaders, httpFetch),
      },
    }),
    description: resolved.description,
    transportType: "sse",
    connectionTimeoutMs: resolved.connectionTimeoutMs,
    requestTimeoutMs: resolved.requestTimeoutMs,
    supportsParallelToolCalls: resolved.supportsParallelToolCalls,
  };
}
