/**
 * Managed MCP toolFilter allowlist for `mcp.servers.linkbrain` (plan §9.1).
 *
 * When `toolFilter.include` is set, OpenClaw default-denies any tool not matched.
 * This module is the Brain-only source of truth for that include list.
 * It does not import Skills symbols and must not be merged with linkskills.
 */

/** Knowledge family (§9.1). */
const LINKBRAIN_MCP_KNOWLEDGE_TOOLS = Object.freeze([
  "brain_browse",
  "brain_search",
  "brain_load",
  "brain_append_finding",
] as const);

/** Private capture and episodes family (§9.1). */
const LINKBRAIN_MCP_PRIVATE_TOOLS = Object.freeze([
  "brain_capture_batch",
  "brain_episode_checkpoint",
  "brain_private_search",
  "brain_private_load",
] as const);

/** Coordination family (§9.1). */
const LINKBRAIN_MCP_COORDINATION_TOOLS = Object.freeze([
  "brain_task_start",
  "brain_task_update",
  "brain_inbox_read",
  "brain_conflict_respond",
  "brain_message_send",
  "brain_checkpoint_write",
  "brain_handoff_create",
  "brain_handoff_accept",
  "brain_task_close",
] as const);

/** Full frozen Brain MCP include list for Lisa. */
export const LINKBRAIN_MCP_TOOL_ALLOWLIST = Object.freeze([
  ...LINKBRAIN_MCP_KNOWLEDGE_TOOLS,
  ...LINKBRAIN_MCP_PRIVATE_TOOLS,
  ...LINKBRAIN_MCP_COORDINATION_TOOLS,
] as const);

type LinkbrainMcpAllowedTool = (typeof LINKBRAIN_MCP_TOOL_ALLOWLIST)[number];

const allowedSet = new Set<string>(LINKBRAIN_MCP_TOOL_ALLOWLIST);

/**
 * Returns whether a discovered MCP tool name is on the Brain §9.1 allowlist.
 * Unknown names are default-denied.
 */
export function isAllowedLinkbrainMcpTool(toolName: string): toolName is LinkbrainMcpAllowedTool {
  return allowedSet.has(toolName);
}

/**
 * Builds the OpenClaw `toolFilter` object for `mcp.servers.linkbrain`.
 * Include-only (no exclude) so unreviewed Brain tools stay denied.
 */
export function buildLinkbrainMcpToolFilter(): {
  include: readonly LinkbrainMcpAllowedTool[];
} {
  return { include: LINKBRAIN_MCP_TOOL_ALLOWLIST };
}

/**
 * Asserts a tool name is allowlisted; throws on default-deny.
 */
export function assertAllowedLinkbrainMcpTool(toolName: string): LinkbrainMcpAllowedTool {
  if (!isAllowedLinkbrainMcpTool(toolName)) {
    throw new Error(
      `linkbrain: MCP tool "${toolName}" is not on the §9.1 allowlist (default-deny)`,
    );
  }
  return toolName;
}
