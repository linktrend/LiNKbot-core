/**
 * Feature flags for Brain — managed MCP allowlist gating + fake/MCP delegation.
 *
 * Does **not** register plugin tools named `brain_*` (avoids MCP naming conflicts).
 * Flags gate which §9.1 tools appear via `api.registerMcpServerToolFilter` (config ∩
 * plugin overlay at catalog materialization) and which ops the plugin may invoke
 * through the injectable transport/public surface.
 */
import type { LinkbrainConfig } from "./config.js";
import {
  LINKBRAIN_MCP_TOOL_ALLOWLIST,
  isAllowedLinkbrainMcpTool,
} from "../mcp-tool-filter.js";

export const LINKBRAIN_MCP_READ_TOOLS = Object.freeze([
  "brain_browse",
  "brain_search",
  "brain_load",
  "brain_append_finding",
  "brain_private_search",
  "brain_private_load",
  "brain_inbox_read",
] as const);

type LinkbrainReadTool = (typeof LINKBRAIN_MCP_READ_TOOLS)[number];

const readSet = new Set<string>(LINKBRAIN_MCP_READ_TOOLS);

export function isLinkbrainReadTool(toolName: string): toolName is LinkbrainReadTool {
  return readSet.has(toolName);
}

/**
 * Builds the managed MCP include list after applying independent Brain flags.
 * Write families remain listed when the plugin is enabled; runtime still gates
 * capture/coordination writes via captureEnqueue/coordinationWrites.
 */
export function buildLinkbrainFlaggedMcpToolFilter(config: Pick<LinkbrainConfig, "mcpRead">): {
  include: readonly string[];
} {
  const include = LINKBRAIN_MCP_TOOL_ALLOWLIST.filter((name) => {
    if (isLinkbrainReadTool(name)) {
      return config.mcpRead;
    }
    return true;
  });
  return { include };
}

export type BrainFeatureInvokeResult = {
  ok: boolean;
  errorCode?: string;
  safeMessage?: string;
  result?: Record<string, unknown>;
};

export type BrainFeatureTransport = {
  write(params: {
    toolName: string;
    idempotencyKey: string;
    arguments: Record<string, unknown>;
    signal?: AbortSignal;
  }): Promise<{
    ok: boolean;
    errorCode?: string;
    safeMessage?: string;
    result?: Record<string, unknown>;
  }>;
};

/**
 * Invokes a Brain read op through the configured transport when mcpRead is on
 * and transportMode is not disabled. Used by tests and future MCP proxies.
 */
export async function invokeLinkbrainFeatureRead(params: {
  config: Pick<LinkbrainConfig, "mcpRead" | "transportMode">;
  transport: BrainFeatureTransport;
  toolName: string;
  arguments?: Record<string, unknown>;
  idempotencyKey: string;
  signal?: AbortSignal;
}): Promise<BrainFeatureInvokeResult> {
  if (!params.config.mcpRead) {
    return {
      ok: false,
      errorCode: "feature_flag_disabled",
      safeMessage: "mcpRead is disabled",
    };
  }
  if (params.config.transportMode === "disabled") {
    return {
      ok: false,
      errorCode: "transport_disabled",
      safeMessage: "transportMode is disabled",
    };
  }
  if (!isLinkbrainReadTool(params.toolName) || !isAllowedLinkbrainMcpTool(params.toolName)) {
    return {
      ok: false,
      errorCode: "tool_not_allowlisted",
      safeMessage: `tool "${params.toolName}" is not a Brain read op`,
    };
  }
  const outcome = await params.transport.write({
    toolName: params.toolName,
    idempotencyKey: params.idempotencyKey,
    arguments: params.arguments ?? {},
    signal: params.signal,
  });
  return {
    ok: outcome.ok,
    ...(outcome.errorCode ? { errorCode: outcome.errorCode } : {}),
    ...(outcome.safeMessage ? { safeMessage: outcome.safeMessage } : {}),
    ...(outcome.result ? { result: outcome.result } : {}),
  };
}
