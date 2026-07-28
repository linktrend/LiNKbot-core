import { describe, expect, it, vi } from "vitest";
import { createTestPluginApi } from "openclaw/plugin-sdk/plugin-test-api";
import linkskillsPlugin from "./index.js";
import { createSkillsTelemetryCollector } from "./src/collect.js";
import { parseLinkskillsConfig } from "./src/config.js";
import { registerLinkskillsFeatureTools } from "./src/feature-tools.js";
import type { OpenClawPluginApi } from "./runtime-api.js";

describe("linkskills registered-plugin integration", () => {
  it("registers discovery/execution tools only when flags are true", () => {
    const tools: string[] = [];
    const api = createTestPluginApi({
      registerTool: (tool) => {
        tools.push(typeof tool === "function" ? "factory" : tool.name);
      },
    });
    expect(
      registerLinkskillsFeatureTools(
        api,
        parseLinkskillsConfig({ mcpDiscoveryRead: false, governedExecution: false }),
      ),
    ).toEqual([]);
    const discovery = registerLinkskillsFeatureTools(
      api,
      parseLinkskillsConfig({ mcpDiscoveryRead: true }),
    );
    expect(discovery).toContain("skills_list");
    const execution = registerLinkskillsFeatureTools(
      api,
      parseLinkskillsConfig({ governedExecution: true }),
    );
    expect(execution).toContain("skills_tool_invoke");
  });

  it("registers after_tool_call and never conversation hooks; isolates from Brain", () => {
    const hooks: string[] = [];
    const api = createTestPluginApi({
      pluginConfig: { telemetryEnqueue: true, telemetryDrain: false },
      on: (name: string) => {
        hooks.push(name);
      },
      registerService: () => undefined,
      registerMemoryCapability: vi.fn(),
      registerChannel: vi.fn(),
    } as unknown as Partial<OpenClawPluginApi>);

    linkskillsPlugin.register(api as OpenClawPluginApi);

    expect(hooks).toContain("after_tool_call");
    expect(hooks).toContain("gateway_start");
    expect(hooks).toContain("gateway_stop");
    expect(hooks).not.toContain("agent_end");
    expect(hooks).not.toContain("message_received");
    expect(hooks).not.toContain("before_compaction");
    expect(api.registerMemoryCapability).not.toHaveBeenCalled();
    expect(api.registerChannel).not.toHaveBeenCalled();
  });

  it("non-Skills tools remain silent even when telemetryEnqueue is enabled", () => {
    const collector = createSkillsTelemetryCollector();
    expect(collector.observe({ toolName: "sessions_list" })).toBeNull();
    expect(collector.observe({ toolName: "memory_search" })).toBeNull();
    expect(collector.observe({ toolName: "cron" })).toBeNull();
    expect(collector.observe({ toolName: "brain_browse" })).toBeNull();
  });
});
