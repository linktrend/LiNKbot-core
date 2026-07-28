/**
 * Operational feature-flag tool registration for Skills.
 *
 * mcpDiscoveryRead / governedExecution register thin local tools that refuse
 * remote work until transportMode is not disabled. When flags are false, no
 * tools are registered for that family.
 */
import type { AnyAgentTool, OpenClawPluginApi } from "../runtime-api.js";
import type { LinkskillsConfig } from "./config.js";

const DISCOVERY_TOOLS = Object.freeze([
  "skills_list",
  "skills_search",
  "skills_describe",
  "skills_fragment_get",
  "skills_release_get",
] as const);

const EXECUTION_TOOLS = Object.freeze([
  "skills_run_start",
  "skills_run_update",
  "skills_run_complete",
  "skills_run_fail",
  "skills_tool_resolve",
  "skills_tool_invoke",
  "skills_input_validate",
  "skills_output_validate",
] as const);

function disabledResult(flag: string, toolName: string) {
  return {
    content: [
      {
        type: "text" as const,
        text: JSON.stringify({
          ok: false,
          errorCode: "feature_flag_or_transport_disabled",
          safeMessage: `${toolName} requires ${flag}=true and transportMode!=disabled`,
        }),
      },
    ],
  };
}

function makeStubTool(name: string, flag: string, transportReady: boolean): AnyAgentTool {
  return {
    name,
    description: `Skills ${flag} tool (${name}).`,
    parameters: {
      type: "object",
      additionalProperties: false,
      properties: {},
    },
    async execute() {
      if (!transportReady) {
        return disabledResult(flag, name);
      }
      return disabledResult(`${flag}+transport`, name);
    },
  } as AnyAgentTool;
}

/**
 * Registers discovery and/or governed-execution tools according to config flags.
 * Returns the names actually registered (for tests / diagnostics).
 */
export function registerLinkskillsFeatureTools(
  api: OpenClawPluginApi,
  config: LinkskillsConfig,
): string[] {
  const registered: string[] = [];
  const transportReady = config.transportMode !== "disabled";

  if (config.mcpDiscoveryRead) {
    for (const name of DISCOVERY_TOOLS) {
      api.registerTool(makeStubTool(name, "mcpDiscoveryRead", transportReady));
      registered.push(name);
    }
  }

  if (config.governedExecution) {
    for (const name of EXECUTION_TOOLS) {
      api.registerTool(makeStubTool(name, "governedExecution", transportReady));
      registered.push(name);
    }
  }

  return registered;
}
