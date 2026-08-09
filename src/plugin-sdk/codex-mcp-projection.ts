// Private helper surface for the bundled Codex plugin. Mirrors the Codex CLI
// runtime's user-mcp-server projection so the bundled Codex app-server harness
// can attach the same user `mcp.servers` entries to its thread config without
// deep-importing core helpers.
//
// Machine-token MCP servers are intentionally unsupported for external
// projection — callers must fail closed rather than export access tokens.

export {
  buildCodexUserMcpServersThreadConfigPatch,
  buildCodexUserMcpServersThreadConfigPatchForRuntime,
  injectCodexMcpConfigArgs,
  isMachineTokenMcpProjectionUnsupported,
  machineTokenMcpProjectionUnsupportedError,
  resolveCodexHostManagedMcpServerNames,
} from "../agents/cli-runner/bundle-mcp-codex.js";

/** Private Codex-plugin seam for OpenClaw-hosted machine-token MCP tools. */
export async function materializeCodexHostManagedMcpToolsForHarnessRun(
  params: Parameters<
    typeof import("../agents/agent-bundle-mcp-harness.js").materializeHostManagedMcpToolsForHarnessRun
  >[0],
): Promise<
  Awaited<
    ReturnType<
      typeof import("../agents/agent-bundle-mcp-harness.js").materializeHostManagedMcpToolsForHarnessRun
    >
  >
> {
  const { materializeHostManagedMcpToolsForHarnessRun: materialize } =
    await import("../agents/agent-bundle-mcp-harness.js");
  return materialize(params);
}
