/**
 * Codex CLI and app-server bundle MCP projection helpers.
 */
import { normalizeConfiguredMcpServers } from "../../config/mcp-config-normalize.js";
import type { OpenClawConfig } from "../../config/types.openclaw.js";
import type { BundleMcpConfig, BundleMcpServerConfig } from "../../plugins/bundle-mcp.js";
import { isValidAgentId, normalizeAgentId } from "../../routing/session-key.js";
import { buildCodexMcpServersConfig, normalizeCodexMcpServerConfig } from "../codex-mcp-config.js";
import { requiresMcpBearerProjection, resolveMcpBearerBundleConfig } from "../mcp-auth-profile.js";
import { partitionMcpServersByConnectionScope } from "../mcp-connection-resolver.js";
import { isRecord } from "./bundle-mcp-adapter-shared.js";
import { serializeTomlInlineValue } from "./toml-inline.js";

// Mutable JSON shape structurally compatible with the bundled Codex
// app-server thread-config JsonObject (see the protocol module in the codex
// plugin). Defined locally so this projection result stays assignable to
// mergeCodexThreadConfigs without pulling plugin-local types across the
// extensions boundary.
type CodexThreadConfigValue =
  | string
  | number
  | boolean
  | null
  | CodexThreadConfigValue[]
  | { [key: string]: CodexThreadConfigValue };
type CodexThreadConfigObject = { [key: string]: CodexThreadConfigValue };

type CodexUserMcpServersProjectionOptions = {
  agentId?: string;
  agentDir?: string;
  allowLiteralOAuthProjection?: boolean;
  onServerUnavailable?: (serverName: string, error: unknown) => void;
};

/**
 * True when an MCP server uses machine-token auth that must never be projected
 * into Codex/CLI config, child-process env, literal headers, or external bundles.
 */
export function isMachineTokenMcpProjectionUnsupported(rawServer: unknown): boolean {
  if (!isRecord(rawServer)) {
    return false;
  }
  return rawServer.auth === "machine_token" || isRecord(rawServer.machineToken);
}

/** Fail-closed error when Codex/CLI projection would need a literal machine token. */
export function machineTokenMcpProjectionUnsupportedError(serverName: string): Error {
  return new Error(
    `MCP server "${serverName}" uses machine-token auth, which cannot be projected into Codex/CLI config, child-process env, or external bundles. External runtimes must call the OpenClaw machine-token provider seam directly; projection is unsupported.`,
  );
}

function omitMachineTokenProjectionServers(
  servers: BundleMcpConfig["mcpServers"],
  onServerUnavailable?: (serverName: string, error: unknown) => void,
): BundleMcpConfig["mcpServers"] {
  const next: BundleMcpConfig["mcpServers"] = {};
  for (const [serverName, server] of Object.entries(servers)) {
    if (isMachineTokenMcpProjectionUnsupported(server)) {
      onServerUnavailable?.(serverName, machineTokenMcpProjectionUnsupportedError(serverName));
      continue;
    }
    next[serverName] = server;
  }
  return next;
}

function normalizeAgentIds(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .filter((entry): entry is string => typeof entry === "string")
    .map((entry) => entry.trim())
    .filter((entry) => isValidAgentId(entry))
    .map((entry) => normalizeAgentId(entry));
}

function readCodexProjectionConfig(server: BundleMcpServerConfig): Record<string, unknown> {
  return isRecord(server.codex) ? server.codex : {};
}

function isCodexMcpServerAllowedForAgent(
  server: BundleMcpServerConfig,
  options: CodexUserMcpServersProjectionOptions | undefined,
): boolean {
  const codex = readCodexProjectionConfig(server);
  if (!Object.hasOwn(codex, "agents")) {
    return true;
  }
  const agentIds = normalizeAgentIds(codex.agents);
  if (agentIds.length === 0 || !options?.agentId) {
    return false;
  }
  return agentIds.includes(normalizeAgentId(options.agentId));
}

/**
 * Returns user MCP servers that Codex must call through OpenClaw-hosted dynamic
 * tools because their machine credentials cannot cross into native Codex MCP.
 */
export function resolveCodexHostManagedMcpServerNames(
  cfg: OpenClawConfig | undefined,
  options?: { agentId?: string },
): string[] {
  const userServers = normalizeConfiguredMcpServers(cfg?.mcp?.servers);
  const { staticServers } = partitionMcpServersByConnectionScope(userServers);
  return Object.entries(staticServers)
    .filter(
      ([, server]) =>
        server.enabled !== false &&
        isCodexMcpServerAllowedForAgent(server as BundleMcpServerConfig, options) &&
        server.auth === "machine_token",
    )
    .map(([serverName]) => serverName)
    .toSorted((a, b) => a.localeCompare(b));
}

/** Returns Codex CLI args with TOML MCP server overrides injected. */
export function injectCodexMcpConfigArgs(
  args: string[] | undefined,
  config: BundleMcpConfig,
  options?: {
    onServerUnavailable?: (serverName: string, error: unknown) => void;
  },
): string[] {
  // Machine-token servers never enter CLI TOML projection (fail closed).
  const projectable: BundleMcpConfig = {
    mcpServers: omitMachineTokenProjectionServers(config.mcpServers, options?.onServerUnavailable),
  };
  const overrides = serializeTomlInlineValue(buildCodexMcpServersConfig(projectable));
  return [...(args ?? []), "-c", `mcp_servers=${overrides}`];
}

/**
 * Codex app-server runtime (extensions/codex) receives its thread config as a
 * JSON object through JSON-RPC `thread/start`/`thread/resume`, not as `-c` CLI
 * args. This returns a thread-config patch projecting user-configured
 * `cfg.mcp.servers` entries into Codex's `mcp_servers` table using the same
 * per-server normalization the CLI path uses, so app-server agents see the
 * same user MCP servers the CLI runtime exposes via `injectCodexMcpConfigArgs`.
 *
 * Only user-configured servers (`cfg.mcp.servers`) are projected. Plugin-
 * curated app-server apps are already attached separately through the codex
 * plugin thread-config `apps` patch, so they must not be re-projected here.
 */
export function buildCodexUserMcpServersThreadConfigPatch(
  cfg: OpenClawConfig | undefined,
  options?: CodexUserMcpServersProjectionOptions,
): { mcp_servers: CodexThreadConfigObject } | undefined {
  const userServers = normalizeConfiguredMcpServers(cfg?.mcp?.servers);
  // Fail-closed: requester-scoped servers never enter harness-native MCP config.
  const { staticServers } = partitionMcpServersByConnectionScope(userServers);
  const entries = Object.entries(staticServers);
  if (entries.length === 0) {
    return undefined;
  }
  const mcp_servers: CodexThreadConfigObject = {};
  for (const [name, server] of entries) {
    if (server.enabled === false) {
      continue;
    }
    if (!isCodexMcpServerAllowedForAgent(server as BundleMcpServerConfig, options)) {
      continue;
    }
    // Machine tokens must never appear in static Codex thread-config projection.
    if (isMachineTokenMcpProjectionUnsupported(server)) {
      options?.onServerUnavailable?.(name, machineTokenMcpProjectionUnsupportedError(name));
      continue;
    }
    mcp_servers[name] = normalizeCodexMcpServerConfig(name, server) as CodexThreadConfigObject;
  }
  if (Object.keys(mcp_servers).length === 0) {
    return undefined;
  }
  return { mcp_servers };
}

/** Async runtime projection that resolves OpenClaw-managed MCP bearer tokens. */
export async function buildCodexUserMcpServersThreadConfigPatchForRuntime(
  cfg: OpenClawConfig | undefined,
  options?: CodexUserMcpServersProjectionOptions,
): Promise<{ mcp_servers: CodexThreadConfigObject } | undefined> {
  const userServers = normalizeConfiguredMcpServers(cfg?.mcp?.servers);
  // Fail-closed: requester-scoped servers never enter harness-native MCP config.
  const { staticServers } = partitionMcpServersByConnectionScope(userServers);
  const entries = Object.entries(staticServers);
  if (entries.length === 0) {
    return undefined;
  }
  let allowedServers = Object.fromEntries(
    entries.filter(
      ([, server]) =>
        server.enabled !== false &&
        isCodexMcpServerAllowedForAgent(server as BundleMcpServerConfig, options),
    ),
  ) as BundleMcpConfig["mcpServers"];
  if (Object.keys(allowedServers).length === 0) {
    return undefined;
  }
  // Never request or receive literal machine tokens for Codex projection.
  allowedServers = omitMachineTokenProjectionServers(allowedServers, options?.onServerUnavailable);
  if (Object.keys(allowedServers).length === 0) {
    return undefined;
  }
  if (options?.allowLiteralOAuthProjection === false) {
    const remoteSafeServers: BundleMcpConfig["mcpServers"] = {};
    for (const [serverName, server] of Object.entries(allowedServers)) {
      if (requiresMcpBearerProjection(server)) {
        options.onServerUnavailable?.(
          serverName,
          new Error(
            `MCP OAuth bearer projection is only supported for local app-server connections.`,
          ),
        );
        continue;
      }
      remoteSafeServers[serverName] = server;
    }
    allowedServers = remoteSafeServers;
  }
  if (Object.keys(allowedServers).length === 0) {
    return undefined;
  }
  const resolvedConfig = await resolveMcpBearerBundleConfig({
    config: { mcpServers: allowedServers },
    cfg,
    agentDir: options?.agentDir,
    tokenProjection: "literal",
    omitUnavailableOAuthServers: true,
    onServerUnavailable: options?.onServerUnavailable,
  });
  const mcp_servers: CodexThreadConfigObject = {};
  for (const [name, server] of Object.entries(resolvedConfig.config.mcpServers)) {
    // Defense in depth: machine-token markers must never survive projection.
    if (isMachineTokenMcpProjectionUnsupported(server)) {
      options?.onServerUnavailable?.(name, machineTokenMcpProjectionUnsupportedError(name));
      continue;
    }
    const projected = normalizeCodexMcpServerConfig(name, server) as CodexThreadConfigObject;
    const serialized = JSON.stringify(projected);
    if (/"machineToken"|machine_token/i.test(serialized)) {
      options?.onServerUnavailable?.(
        name,
        new Error(
          `MCP server "${name}" projection contained machine-token material and was omitted.`,
        ),
      );
      continue;
    }
    mcp_servers[name] = projected;
  }
  return Object.keys(mcp_servers).length === 0 ? undefined : { mcp_servers };
}
