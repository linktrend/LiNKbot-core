import { describe, expect, it, vi } from "vitest";
import { createTestPluginApi } from "openclaw/plugin-sdk/plugin-test-api";
import linkbrainPlugin from "./index.js";
import { parseLinkbrainConfig } from "./src/config.js";
import { buildLinkbrainFlaggedMcpToolFilter } from "./src/feature-flags.js";
import type { OpenClawPluginApi } from "./runtime-api.js";

describe("linkbrain registered-plugin feature flags + coexistence surface", () => {
  it("does not register brain_* plugin tools; MCP include respects mcpRead", () => {
    const tools: string[] = [];
    const api = createTestPluginApi({
      pluginConfig: { mcpRead: true },
      registerTool: (tool) => {
        tools.push(typeof tool === "function" ? "factory" : String(tool.name));
      },
      registerService: () => undefined,
      on: () => undefined,
    });
    linkbrainPlugin.register(api);
    expect(tools.filter((n) => n.startsWith("brain_"))).toEqual([]);
    expect(buildLinkbrainFlaggedMcpToolFilter(parseLinkbrainConfig({ mcpRead: false })).include).not.toContain(
      "brain_browse",
    );
    expect(buildLinkbrainFlaggedMcpToolFilter(parseLinkbrainConfig({ mcpRead: true })).include).toContain(
      "brain_browse",
    );
  });

  it("plugin register wires hooks without mutating native memory/cron/channel surfaces", () => {
    const hooks: string[] = [];
    const services: string[] = [];
    const api = createTestPluginApi({
      pluginConfig: {
        mcpRead: true,
        captureEnqueue: false,
        captureDrain: false,
        coordinationWrites: false,
      },
      on: (name: string) => {
        hooks.push(name);
      },
      registerService: (service) => {
        services.push(service.id);
      },
      registerMemoryCapability: vi.fn(),
      registerChannel: vi.fn(),
    } as unknown as Partial<OpenClawPluginApi>);

    linkbrainPlugin.register(api as OpenClawPluginApi);

    expect(hooks).toEqual(
      expect.arrayContaining([
        "session_start",
        "agent_end",
        "before_compaction",
        "after_compaction",
        "gateway_start",
        "gateway_stop",
      ]),
    );
    expect(services).toContain("linkbrain-outbox");
    expect(api.registerMemoryCapability).not.toHaveBeenCalled();
    expect(api.registerChannel).not.toHaveBeenCalled();
  });
});
