/**
 * Configurable Brain transport adapters.
 *
 * Modes: disabled (default) | fake (test-only) | http | mcp.
 * Frozen write tool names only — no Brain Gateway alias mapping.
 */
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import {
  createMachineTokenPluginFacade,
  fingerprintMachineTokenKeyRef,
  type MachineTokenBinding,
  type MachineTokenPluginFacade,
  type ResolvedMachineToken,
} from "openclaw/plugin-sdk/machine-token-runtime";
import {
  isSecretRef,
  resolveConfiguredSecretInputString,
} from "openclaw/plugin-sdk/secret-input-runtime";
import {
  fetchWithSsrFGuard,
  mergeSsrFPolicies,
  ssrfPolicyFromHttpBaseUrlAllowedHostname,
} from "openclaw/plugin-sdk/ssrf-runtime";
import type { OpenClawPluginApi } from "../runtime-api.js";
import {
  parseLinkbrainMachineToken,
  type LinkbrainConfig,
  type LinkbrainMachineTokenConfig,
  type LinkbrainTransportMode,
} from "./config.js";
import {
  createBrainFakeTransport,
  type LinkbrainTransport,
  type LinkbrainTransportResult,
} from "./runtime.js";
import { isAllowedBrainWriteTool } from "./tools.js";

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
  machineToken?: unknown;
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

type ResolveMachineTokenAccessFn = (params: {
  binding: MachineTokenBinding;
  signal?: AbortSignal;
  forceRefresh?: boolean;
}) => Promise<ResolvedMachineToken>;

type InvalidateMachineTokenCacheFn = (bindingId: string) => void;

export type ResolveLinkbrainTransportParams = {
  api: Pick<OpenClawPluginApi, "config" | "logger">;
  config: LinkbrainConfig;
  /** Explicit test injection — required for fake mode outside createBrainFakeTransport wiring. */
  fakeForTests?: Parameters<typeof createBrainFakeTransport>[0];
  fetchImpl?: typeof fetch;
  env?: NodeJS.ProcessEnv;
  createMcpSession?: (server: ManagedMcpServerEntry) => Promise<McpToolSession>;
  /** Host-injected binding-scoped facade (preferred). */
  machineTokenFacade?: MachineTokenPluginFacade;
  /** Test injection for machine-token mint (wrapped into a scoped facade). */
  resolveMachineTokenAccess?: ResolveMachineTokenAccessFn;
  /** Test injection for cache invalidation after HTTP 401. */
  invalidateMachineTokenCache?: InvalidateMachineTokenCacheFn;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mapHttpStatus(
  status: number,
): Pick<LinkbrainTransportResult, "retryable" | "terminal" | "errorCode" | "safeMessage"> {
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

function createStaticResultTransport(result: LinkbrainTransportResult): LinkbrainTransport {
  return {
    async write() {
      return result;
    },
  };
}

function createDisabledTransport(): LinkbrainTransport {
  return createStaticResultTransport({
    ok: false,
    retryable: true,
    terminal: false,
    errorCode: "transport_disabled",
    safeMessage: "linkbrain transportMode is disabled",
  });
}

function createRejectedFakeTransport(safeMessage: string): LinkbrainTransport {
  return createStaticResultTransport({
    ok: false,
    retryable: false,
    terminal: true,
    errorCode: "fake_rejected",
    safeMessage,
  });
}

async function resolveMachineTokenBearer(params: {
  machineToken: LinkbrainMachineTokenConfig;
  apiConfig: OpenClawPluginApi["config"];
  env: NodeJS.ProcessEnv;
  signal?: AbortSignal;
  forceRefresh?: boolean;
  machineTokenFacade: MachineTokenPluginFacade;
  pathPrefix: string;
}): Promise<{ value?: string; bindingId?: string; error?: LinkbrainTransportResult }> {
  const keyResolved = await resolveConfiguredSecretInputString({
    config: params.apiConfig,
    env: params.env,
    value: params.machineToken.clientAssertionKeyRef,
    path: `${params.pathPrefix}.clientAssertionKeyRef`,
  });
  if (keyResolved.unresolvedRefReason || !keyResolved.value) {
    return {
      error: {
        ok: false,
        retryable: true,
        terminal: false,
        errorCode: "credential_unresolved",
        safeMessage:
          keyResolved.unresolvedRefReason ??
          "linkbrain machineToken.clientAssertionKeyRef unresolved",
      },
    };
  }
  try {
    const keyRef = params.machineToken.clientAssertionKeyRef;
    const binding: MachineTokenBinding = {
      bindingId: params.machineToken.bindingId,
      issuerUrl: params.machineToken.issuerUrl,
      clientId: params.machineToken.clientId,
      ...(params.machineToken.audience ? { audience: params.machineToken.audience } : {}),
      ...(params.machineToken.scope ? { scope: params.machineToken.scope } : {}),
      clientAssertionKeyPem: keyResolved.value,
      ...(isSecretRef(keyRef)
        ? {
            keyRefFingerprint: fingerprintMachineTokenKeyRef({
              source: keyRef.source,
              provider: keyRef.provider,
              id: keyRef.id,
            }),
          }
        : {}),
    };
    const resolved = await params.machineTokenFacade.acquire({
      binding,
      ...(params.signal ? { signal: params.signal } : {}),
      ...(params.forceRefresh ? { forceRefresh: true } : {}),
    });
    return { value: resolved.accessToken, bindingId: resolved.bindingId };
  } catch (error) {
    return {
      error: {
        ok: false,
        retryable: true,
        terminal: false,
        errorCode: "machine_token_error",
        safeMessage: error instanceof Error ? error.message : "machine token resolution failed",
      },
    };
  }
}

async function resolveBearerToken(params: {
  config: LinkbrainConfig;
  apiConfig: OpenClawPluginApi["config"];
  env: NodeJS.ProcessEnv;
  signal?: AbortSignal;
  forceRefresh?: boolean;
  machineTokenFacade?: MachineTokenPluginFacade;
}): Promise<{ value?: string; bindingId?: string; error?: LinkbrainTransportResult }> {
  // Explicit machineToken config selects machine-token mode and fail-closes —
  // never fall through to SecretRef bearer when the binding is incomplete.
  if (params.config.machineToken) {
    if (!params.machineTokenFacade) {
      return {
        error: {
          ok: false,
          retryable: true,
          terminal: false,
          errorCode: "machine_token_error",
          safeMessage: "linkbrain machine-token facade is not configured",
        },
      };
    }
    return await resolveMachineTokenBearer({
      machineToken: params.config.machineToken,
      apiConfig: params.apiConfig,
      env: params.env,
      signal: params.signal,
      forceRefresh: params.forceRefresh,
      machineTokenFacade: params.machineTokenFacade,
      pathPrefix: "plugins.entries.linkbrain.config.machineToken",
    });
  }
  if (params.config.ingestionCredential === undefined) {
    return {
      error: {
        ok: false,
        retryable: true,
        terminal: false,
        errorCode: "credential_missing",
        safeMessage: "linkbrain ingestionCredential is not configured",
      },
    };
  }
  const resolved = await resolveConfiguredSecretInputString({
    config: params.apiConfig,
    env: params.env,
    value: params.config.ingestionCredential,
    path: "plugins.entries.linkbrain.config.ingestionCredential",
  });
  if (resolved.unresolvedRefReason || !resolved.value) {
    return {
      error: {
        ok: false,
        retryable: true,
        terminal: false,
        errorCode: "credential_unresolved",
        safeMessage: resolved.unresolvedRefReason ?? "linkbrain ingestionCredential unresolved",
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

function selectMcpMachineToken(
  server: ManagedMcpServerEntry,
  pluginMachineToken: LinkbrainMachineTokenConfig | undefined,
):
  | { status: "selected"; machineToken: LinkbrainMachineTokenConfig }
  | { status: "incomplete" }
  | { status: "none" } {
  // Never override interactive oauth merely because a machineToken block exists.
  if (server.auth === "oauth") {
    return { status: "none" };
  }
  // Explicit machine_token mode only — incomplete bindings fail closed.
  if (server.auth === "machine_token") {
    const serverToken = parseLinkbrainMachineToken(server.machineToken);
    if (serverToken) {
      return { status: "selected", machineToken: serverToken };
    }
    if (pluginMachineToken) {
      return { status: "selected", machineToken: pluginMachineToken };
    }
    return { status: "incomplete" };
  }
  return { status: "none" };
}

async function resolveMcpHeaders(params: {
  server: ManagedMcpServerEntry;
  apiConfig: OpenClawPluginApi["config"];
  env: NodeJS.ProcessEnv;
  pluginMachineToken?: LinkbrainMachineTokenConfig;
  signal?: AbortSignal;
  machineTokenFacade?: MachineTokenPluginFacade;
}): Promise<{
  headers: Record<string, string>;
  authProfileOnly: boolean;
  error?: LinkbrainTransportResult;
}> {
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

  const selection = selectMcpMachineToken(params.server, params.pluginMachineToken);
  if (selection.status === "incomplete") {
    return {
      headers,
      authProfileOnly: false,
      error: {
        ok: false,
        retryable: true,
        terminal: false,
        errorCode: "machine_token_error",
        safeMessage:
          "mcp server auth is machine_token but no complete machineToken binding is configured",
      },
    };
  }
  if (selection.status === "selected") {
    if (!params.machineTokenFacade) {
      return {
        headers,
        authProfileOnly: false,
        error: {
          ok: false,
          retryable: true,
          terminal: false,
          errorCode: "machine_token_error",
          safeMessage: "linkbrain machine-token facade is not configured",
        },
      };
    }
    const bearer = await resolveMachineTokenBearer({
      machineToken: selection.machineToken,
      apiConfig: params.apiConfig,
      env: params.env,
      signal: params.signal,
      machineTokenFacade: params.machineTokenFacade,
      pathPrefix: `mcp.servers.machineToken`,
    });
    if (bearer.error) {
      return { headers, authProfileOnly: false, error: bearer.error };
    }
    if (bearer.value) {
      headers.Authorization = `Bearer ${bearer.value}`;
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
  // Interactive oauth-only without a resolved Authorization header needs Gateway auth-profile injection.
  // machine_token mode must never surface auth_profile_required when resolution succeeds.
  const wantsInteractiveOauth =
    params.server.auth === "oauth" ||
    (Boolean(authProfileId) && params.server.auth !== "machine_token");
  const authProfileOnly = wantsInteractiveOauth && !hasAuthorization;
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
  const client = new Client({ name: "openclaw-linkbrain", version: "1.0.0" });
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
    throw new Error("linkbrain mcp server entry requires command or url");
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
  config: LinkbrainConfig;
  apiConfig: OpenClawPluginApi["config"];
  env: NodeJS.ProcessEnv;
  /** When set (tests), forwarded to the SSRF guard so mocks stay hermetic. */
  fetchImpl?: typeof fetch;
  machineTokenFacade?: MachineTokenPluginFacade;
}): LinkbrainTransport {
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
      if (!isAllowedBrainWriteTool(writeParams.toolName)) {
        return {
          ok: false,
          terminal: true,
          errorCode: "tool_not_allowlisted",
          safeMessage: `tool "${writeParams.toolName}" is not on the Brain write allowlist`,
        };
      }
      const bearer = await resolveBearerToken({
        config: params.config,
        apiConfig: params.apiConfig,
        env: params.env,
        signal: writeParams.signal,
        machineTokenFacade: params.machineTokenFacade,
      });
      if (bearer.error) {
        return bearer.error;
      }
      // Operator-configured ingestionEndpoint may intentionally target private/LAN hosts.
      // Hostname is still pinned to the configured endpoint host.
      const policy = mergeSsrFPolicies(ssrfPolicyFromHttpBaseUrlAllowedHostname(params.endpoint), {
        allowPrivateNetwork: true,
      });

      const postOnce = async (accessToken: string) => {
        const guarded = await fetchWithSsrFGuard({
          url: params.endpoint,
          ...(params.fetchImpl ? { fetchImpl: params.fetchImpl } : {}),
          init: {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              toolName: writeParams.toolName,
              idempotencyKey: writeParams.idempotencyKey,
              arguments: writeParams.arguments,
            }),
          },
          signal: writeParams.signal,
          policy,
          auditContext: "linkbrain.http-transport",
        });
        return guarded;
      };

      let release: (() => Promise<void>) | undefined;
      try {
        let guarded = await postOnce(bearer.value!);
        release = guarded.release;
        // One bounded machine-token reissue on remote 401.
        if (guarded.response.status === 401 && bearer.bindingId && params.machineTokenFacade) {
          params.machineTokenFacade.invalidate(bearer.bindingId);
          await release();
          release = undefined;
          const refreshed = await resolveBearerToken({
            config: params.config,
            apiConfig: params.apiConfig,
            env: params.env,
            signal: writeParams.signal,
            forceRefresh: true,
            machineTokenFacade: params.machineTokenFacade,
          });
          if (refreshed.error) {
            return refreshed.error;
          }
          guarded = await postOnce(refreshed.value!);
          release = guarded.release;
        }
        const response = guarded.response;
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
      } finally {
        if (release) {
          await release();
        }
      }
    },
  };
}

function createMcpTransport(params: {
  server: ManagedMcpServerEntry;
  apiConfig: OpenClawPluginApi["config"];
  env: NodeJS.ProcessEnv;
  createMcpSession: (server: ManagedMcpServerEntry) => Promise<McpToolSession>;
  pluginMachineToken?: LinkbrainMachineTokenConfig;
  machineTokenFacade?: MachineTokenPluginFacade;
}): LinkbrainTransport {
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
      if (!isAllowedBrainWriteTool(writeParams.toolName)) {
        return {
          ok: false,
          terminal: true,
          errorCode: "tool_not_allowlisted",
          safeMessage: `tool "${writeParams.toolName}" is not on the Brain write allowlist`,
        };
      }

      const { headers, authProfileOnly, error } = await resolveMcpHeaders({
        server: params.server,
        apiConfig: params.apiConfig,
        env: params.env,
        pluginMachineToken: params.pluginMachineToken,
        signal: writeParams.signal,
        machineTokenFacade: params.machineTokenFacade,
      });
      if (error) {
        return error;
      }
      if (authProfileOnly) {
        return {
          ok: false,
          retryable: true,
          terminal: false,
          errorCode: "auth_profile_required",
          safeMessage:
            "linkbrain MCP server uses oauth.authProfileId; Gateway must inject bearer auth before plugin-owned drain (prefer SecretRef Authorization header)",
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
          idempotencyKey: writeParams.idempotencyKey,
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
 * Resolves the Brain write transport from plugin config.
 * Defaults to disabled. Fake is test-only. Does not require live MCP/HTTP servers at resolve time.
 */
export function resolveLinkbrainTransport(
  params: ResolveLinkbrainTransportParams,
): LinkbrainTransport {
  const mode: LinkbrainTransportMode = params.config.transportMode;
  const env = params.env ?? process.env;
  const grantedBindingIds = new Set<string>();
  if (params.config.machineToken) {
    grantedBindingIds.add(params.config.machineToken.bindingId);
  }
  if (mode === "mcp") {
    const peekServer = readManagedServer(params.api.config, params.config.mcpServerName);
    if (peekServer?.auth === "machine_token") {
      const serverToken = parseLinkbrainMachineToken(peekServer.machineToken);
      if (serverToken) {
        grantedBindingIds.add(serverToken.bindingId);
      }
    }
  }
  const machineTokenFacade =
    params.machineTokenFacade ??
    (grantedBindingIds.size > 0
      ? createMachineTokenPluginFacade({
          pluginId: "linkbrain",
          grantedBindingIds: [...grantedBindingIds],
          ...(params.resolveMachineTokenAccess
            ? { resolveAccess: params.resolveMachineTokenAccess }
            : {}),
          ...(params.invalidateMachineTokenCache
            ? { invalidateCache: params.invalidateMachineTokenCache }
            : {}),
        })
      : undefined);

  if (mode === "disabled") {
    return createDisabledTransport();
  }

  if (mode === "fake") {
    if (params.fakeForTests) {
      return createBrainFakeTransport(params.fakeForTests);
    }
    if (params.config.environment !== "test") {
      return createRejectedFakeTransport(
        "linkbrain fake transport is not allowed outside test environment",
      );
    }
    return createRejectedFakeTransport(
      "linkbrain fake transport requires explicit test injection (fakeForTests)",
    );
  }

  if (mode === "http") {
    const endpoint = params.config.ingestionEndpoint;
    if (!endpoint) {
      return createStaticResultTransport({
        ok: false,
        retryable: true,
        terminal: false,
        errorCode: "endpoint_missing",
        safeMessage: "linkbrain ingestionEndpoint is required for http transportMode",
      });
    }
    return createHttpTransport({
      endpoint,
      config: params.config,
      apiConfig: params.api.config,
      env,
      ...(params.fetchImpl ? { fetchImpl: params.fetchImpl } : {}),
      machineTokenFacade,
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
      pluginMachineToken: params.config.machineToken,
      machineTokenFacade,
    });
  }

  const exhaustive: never = mode;
  void exhaustive;
  return createDisabledTransport();
}
