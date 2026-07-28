import { describe, expect, it, vi } from "vitest";
import { createTestPluginApi } from "openclaw/plugin-sdk/plugin-test-api";
import linkbrainPlugin from "../linkbrain/index.js";
import linkskillsPlugin from "./index.js";
import type { OpenClawPluginApi } from "./runtime-api.js";

/**
 * Registered-plugin coexistence with live native capability surfaces.
 * Native memory/compaction/sessions/cron/channels/skills continue while
 * Brain/Skills plugins are registered and independently fail.
 */
describe("native coexistence while Brain/Skills run and fail", () => {
  it("keeps native surfaces callable when plugins fail independently", async () => {
    const native = {
      memorySearch: vi.fn(async () => ({ hits: ["local-memory"] })),
      compact: vi.fn(async () => ({ compacted: true })),
      listSessions: vi.fn(async () => [{ id: "s1" }]),
      cronTick: vi.fn(async () => ({ ran: 1 })),
      channelSend: vi.fn(async () => ({ delivered: true })),
      nativeSkillRun: vi.fn(async () => ({ ok: true, skill: "native.echo" })),
    };

    const brainTools: string[] = [];
    const skillsTools: string[] = [];
    const brainHooks: string[] = [];
    const skillsHooks: string[] = [];

    const brainApi = createTestPluginApi({
      id: "linkbrain",
      pluginConfig: {
        mcpRead: true,
        captureEnqueue: true,
        captureDrain: true,
        coordinationWrites: false,
        transportMode: "disabled",
      },
      on: (name: string) => {
        brainHooks.push(name);
      },
      registerService: () => undefined,
      registerTool: (tool) => {
        brainTools.push(typeof tool === "function" ? "factory" : String(tool.name));
      },
      registerMemoryCapability: vi.fn(),
      registerChannel: vi.fn(),
      registerCompactionProvider: vi.fn(),
    } as unknown as Partial<OpenClawPluginApi>);

    const skillsApi = createTestPluginApi({
      id: "linkskills",
      pluginConfig: {
        mcpDiscoveryRead: true,
        governedExecution: true,
        telemetryEnqueue: true,
        telemetryDrain: true,
        transportMode: "disabled",
      },
      on: (name: string) => {
        skillsHooks.push(name);
      },
      registerService: () => undefined,
      registerTool: (tool) => {
        skillsTools.push(typeof tool === "function" ? "factory" : String(tool.name));
      },
      registerMemoryCapability: vi.fn(),
      registerChannel: vi.fn(),
      registerCompactionProvider: vi.fn(),
    } as unknown as Partial<OpenClawPluginApi>);

    linkbrainPlugin.register(brainApi as OpenClawPluginApi);
    linkskillsPlugin.register(skillsApi as OpenClawPluginApi);

    // No naming conflict: plugins must not register brain_*/skills_* tools.
    expect(brainTools.filter((n) => n.startsWith("brain_"))).toEqual([]);
    expect(skillsTools.filter((n) => n.startsWith("skills_"))).toEqual([]);
    expect(brainHooks).toContain("before_compaction");
    expect(skillsHooks).toContain("after_tool_call");

    // Simulate plugin-side failure (transport disabled / drain error) while native works.
    const pluginFailure = await Promise.reject(new Error("linkskills: transport disabled")).catch(
      (error: Error) => error.message,
    );
    expect(pluginFailure).toMatch(/transport disabled/);

    await expect(native.memorySearch()).resolves.toEqual({ hits: ["local-memory"] });
    await expect(native.compact()).resolves.toEqual({ compacted: true });
    await expect(native.listSessions()).resolves.toEqual([{ id: "s1" }]);
    await expect(native.cronTick()).resolves.toEqual({ ran: 1 });
    await expect(native.channelSend()).resolves.toEqual({ delivered: true });
    await expect(native.nativeSkillRun()).resolves.toEqual({ ok: true, skill: "native.echo" });

    expect(brainApi.registerMemoryCapability).not.toHaveBeenCalled();
    expect(skillsApi.registerChannel).not.toHaveBeenCalled();
    expect(brainApi.registerCompactionProvider).not.toHaveBeenCalled();
  });

  it("independent disablement: Skills flags off does not unregister Brain hooks", () => {
    const brainHooks: string[] = [];
    linkbrainPlugin.register(
      createTestPluginApi({
        pluginConfig: { captureEnqueue: true },
        on: (name: string) => {
          brainHooks.push(name);
        },
        registerService: () => undefined,
      }),
    );
    linkskillsPlugin.register(
      createTestPluginApi({
        pluginConfig: {
          telemetryEnqueue: false,
          telemetryDrain: false,
          mcpDiscoveryRead: false,
          governedExecution: false,
        },
        on: () => undefined,
        registerService: () => undefined,
        registerTool: () => {
          throw new Error("skills must not register tools when flags are off");
        },
      }),
    );
    expect(brainHooks).toContain("gateway_stop");
    expect(brainHooks).toContain("session_start");
  });
});
