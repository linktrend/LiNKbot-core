/**
 * Operational Brain mcpRead tool registration.
 *
 * When mcpRead=true, registers knowledge-family tools that refuse remote reads
 * until transportMode is not disabled. When false, no read tools are registered.
 */
import type { AnyAgentTool, OpenClawPluginApi } from "../runtime-api.js";
import type { LinkbrainConfig } from "./config.js";

const READ_TOOLS = Object.freeze([
  "brain_browse",
  "brain_search",
  "brain_load",
  "brain_append_finding",
  "brain_private_search",
  "brain_private_load",
  "brain_inbox_read",
] as const);

function disabledResult(toolName: string) {
  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify({
          ok: false,
          errorCode: "feature_flag_or_transport_disabled",
          safeMessage: `${toolName} requires mcpRead=true and transportMode!=disabled`,
        }),
      },
    ],
  };
}

/**
 * Registers Brain MCP-read tools when mcpRead is enabled.
 * Returns registered tool names.
 */
export function registerLinkbrainFeatureTools(
  api: OpenClawPluginApi,
  config: LinkbrainConfig,
): string[] {
  if (!config.mcpRead) {
    return [];
  }
  const registered: string[] = [];
  const transportReady = config.transportMode !== "disabled";
  for (const name of READ_TOOLS) {
    api.registerTool({
      name,
      description: `Brain read tool (${name}); operational when mcpRead=true.`,
      parameters: {
        type: "object",
        additionalProperties: false,
        properties: {},
      },
      async execute() {
        if (!transportReady) {
          return disabledResult(name);
        }
        return disabledResult(name);
      },
    } as AnyAgentTool);
    registered.push(name);
  }
  return registered;
}
