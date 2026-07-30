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
} from "../agents/cli-runner/bundle-mcp-codex.js";
