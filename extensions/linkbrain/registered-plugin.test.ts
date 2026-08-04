import { createTestPluginApi } from "openclaw/plugin-sdk/plugin-test-api";
import { describe, expect, it, vi } from "vitest";
import linkbrainPlugin from "./index.js";
import type { OpenClawPluginApi, OpenClawPluginService } from "./runtime-api.js";
import { parseLinkbrainConfig } from "./src/config.js";
import { buildLinkbrainFlaggedMcpToolFilter } from "./src/feature-flags.js";

describe("linkbrain registered-plugin feature flags + coexistence surface", () => {
  it("does not register brain_* plugin tools; registers MCP toolFilter and respects mcpRead", () => {
    const tools: string[] = [];
    const toolFilters: Array<{ serverName: string }> = [];
    const api = createTestPluginApi({
      pluginConfig: { mcpRead: true },
      registerTool: (tool) => {
        tools.push(typeof tool === "function" ? "factory" : String(tool.name));
      },
      registerService: () => undefined,
      on: () => undefined,
      registerMcpServerToolFilter: (resolver) => {
        toolFilters.push({ serverName: resolver.serverName });
      },
    });
    linkbrainPlugin.register(api);
    expect(tools.filter((n) => n.startsWith("brain_"))).toEqual([]);
    expect(toolFilters).toEqual([{ serverName: "linkbrain" }]);
    expect(
      buildLinkbrainFlaggedMcpToolFilter(
        parseLinkbrainConfig({
          mcpRead: false,
          captureEnqueue: false,
          captureDrain: false,
          coordinationWrites: false,
        }),
      ),
    ).toBeNull();
    expect(
      buildLinkbrainFlaggedMcpToolFilter(
        parseLinkbrainConfig({
          mcpRead: true,
          captureEnqueue: false,
          captureDrain: false,
          coordinationWrites: false,
        }),
      )?.include,
    ).toContain("brain_browse");
  });

  it("registers only service hooks unless allowConversationAccess===true", () => {
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
      registerService: (service: OpenClawPluginService) => {
        services.push(service.id);
      },
      registerMemoryCapability: vi.fn(),
      registerChannel: vi.fn(),
    } as unknown as Partial<OpenClawPluginApi>);

    linkbrainPlugin.register(api as OpenClawPluginApi);

    expect(hooks).toEqual(["gateway_start", "gateway_stop"]);
    expect(services).toContain("linkbrain-outbox");
    expect(api.registerMemoryCapability).not.toHaveBeenCalled();
    expect(api.registerChannel).not.toHaveBeenCalled();
  });

  it("registers governed conversation hooks when allowConversationAccess===true", () => {
    const hooks: string[] = [];
    const api = createTestPluginApi({
      config: {
        plugins: {
          entries: {
            linkbrain: {
              hooks: { allowConversationAccess: true },
            },
          },
        },
      },
      pluginConfig: {
        mcpRead: true,
        captureEnqueue: false,
        captureDrain: false,
        coordinationWrites: false,
      },
      on: (name: string) => {
        hooks.push(name);
      },
      registerService: () => undefined,
      registerMemoryCapability: vi.fn(),
      registerChannel: vi.fn(),
    } as unknown as Partial<OpenClawPluginApi>);

    linkbrainPlugin.register(api as OpenClawPluginApi);

    expect(hooks).toEqual(
      expect.arrayContaining([
        "session_start",
        "message_received",
        "agent_end",
        "before_compaction",
        "after_compaction",
        "before_reset",
        "session_end",
        "gateway_start",
        "gateway_stop",
        "subagent_spawned",
        "subagent_ended",
      ]),
    );
    expect(hooks).toHaveLength(11);
    expect(api.registerMemoryCapability).not.toHaveBeenCalled();
    expect(api.registerChannel).not.toHaveBeenCalled();
  });
});
