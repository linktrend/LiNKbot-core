/**
 * Feature flags for Skills — managed MCP allowlist gating + fake/MCP delegation.
 *
 * Does **not** register plugin tools named `skills_*` (avoids MCP naming conflicts).
 * Flags gate which §9.2 tools appear via `api.registerMcpServerToolFilter` (config ∩
 * plugin overlay at catalog materialization) and which ops may invoke transport.
 */
import type { LinkskillsConfig } from "./config.js";
import {
  LINKSKILLS_MCP_TOOL_ALLOWLIST,
  isAllowedLinkskillsMcpTool,
} from "../mcp-tool-filter.js";

export const LINKSKILLS_MCP_DISCOVERY_TOOLS = Object.freeze([
  "skills_list",
  "skills_search",
  "skills_describe",
  "skills_fragment_get",
  "skills_release_get",
] as const);

export const LINKSKILLS_MCP_EXECUTION_TOOLS = Object.freeze([
  "skills_run_start",
  "skills_run_update",
  "skills_run_complete",
  "skills_run_fail",
  "skills_tool_resolve",
  "skills_tool_invoke",
  "skills_input_validate",
  "skills_output_validate",
] as const);

const discoverySet = new Set<string>(LINKSKILLS_MCP_DISCOVERY_TOOLS);
const executionSet = new Set<string>(LINKSKILLS_MCP_EXECUTION_TOOLS);

export function isLinkskillsDiscoveryTool(toolName: string): boolean {
  return discoverySet.has(toolName);
}

export function isLinkskillsExecutionTool(toolName: string): boolean {
  return executionSet.has(toolName);
}

/**
 * Builds the managed MCP include list after applying Skills feature flags.
 * Evidence/drain tools remain available when telemetryDrain paths need them;
 * discovery/execution families require their flags.
 */
export function buildLinkskillsFlaggedMcpToolFilter(
  config: Pick<LinkskillsConfig, "mcpDiscoveryRead" | "governedExecution">,
): { include: readonly string[] } {
  const include = LINKSKILLS_MCP_TOOL_ALLOWLIST.filter((name) => {
    if (isLinkskillsDiscoveryTool(name)) {
      return config.mcpDiscoveryRead;
    }
    if (isLinkskillsExecutionTool(name)) {
      return config.governedExecution;
    }
    return true;
  });
  return { include };
}

export type SkillsFeatureInvokeResult = {
  ok: boolean;
  errorCode?: string;
  safeMessage?: string;
  result?: Record<string, unknown>;
};

export type SkillsFeatureTransport = {
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
 * Invokes a Skills discovery/execution op through transport when the matching
 * flag is on and transportMode is not disabled.
 */
export async function invokeLinkskillsFeatureOp(params: {
  config: Pick<LinkskillsConfig, "mcpDiscoveryRead" | "governedExecution" | "transportMode">;
  transport: SkillsFeatureTransport;
  toolName: string;
  arguments?: Record<string, unknown>;
  idempotencyKey: string;
  signal?: AbortSignal;
}): Promise<SkillsFeatureInvokeResult> {
  const isDiscovery = isLinkskillsDiscoveryTool(params.toolName);
  const isExecution = isLinkskillsExecutionTool(params.toolName);
  if (!isDiscovery && !isExecution) {
    return {
      ok: false,
      errorCode: "tool_not_allowlisted",
      safeMessage: `tool "${params.toolName}" is not a Skills discovery/execution op`,
    };
  }
  if (isDiscovery && !params.config.mcpDiscoveryRead) {
    return {
      ok: false,
      errorCode: "feature_flag_disabled",
      safeMessage: "mcpDiscoveryRead is disabled",
    };
  }
  if (isExecution && !params.config.governedExecution) {
    return {
      ok: false,
      errorCode: "feature_flag_disabled",
      safeMessage: "governedExecution is disabled",
    };
  }
  if (params.config.transportMode === "disabled") {
    return {
      ok: false,
      errorCode: "transport_disabled",
      safeMessage: "transportMode is disabled",
    };
  }
  if (!isAllowedLinkskillsMcpTool(params.toolName)) {
    return {
      ok: false,
      errorCode: "tool_not_allowlisted",
      safeMessage: `tool "${params.toolName}" is not on the §9.2 allowlist`,
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
