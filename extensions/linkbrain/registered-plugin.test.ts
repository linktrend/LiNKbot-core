import { describe, expect, it, vi } from "vitest";
import { createTestPluginApi } from "openclaw/plugin-sdk/plugin-test-api";
import linkbrainPlugin from "./index.js";
import { parseLinkbrainConfig } from "./src/config.js";
import { registerLinkbrainFeatureTools } from "./src/feature-tools.js";
import type { OpenClawPluginApi } from "./runtime-api.js";

describe("linkbrain registered-plugin feature flags + coexistence surface", () => {
  it("registers mcpRead tools only when flag is true", () => {
    const tools: string[] = [];
    const api = createTestPluginApi({
      registerTool: (tool) => {
        const name = typeof tool === "function" ? "factory" : tool.name;
        tools.push(name);
      },
    });
    expect(registerLinkbrainFeatureTools(api, parseLinkbrainConfig({ mcpRead: false }))).toEqual(
      [],
    );
    expect(tools).toEqual([]);
    const registered = registerLinkbrainFeatureTools(
      api,
      parseLinkbrainConfig({ mcpRead: true, transportMode: "disabled" }),
    );
    expect(registered).toContain("brain_browse");
    expect(registered).toContain("brain_search");
    expect(tools.length).toBe(registered.length);
  });

  it("plugin register wires hooks without mutating native memory/cron/channel surfaces", () => {
    const hooks: string[] = [];
    const services: string[] = [];
    const tools: string[] = [];
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
      registerTool: (tool) => {
        tools.push(typeof tool === "function" ? "factory" : tool.name);
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
    expect(tools).toContain("brain_browse");
    // Native surfaces stay independently owned — plugin must not register them.
    expect(api.registerMemoryCapability).not.toHaveBeenCalled();
    expect(api.registerChannel).not.toHaveBeenCalled();
  });
});
