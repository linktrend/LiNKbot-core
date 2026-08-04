/**
 * Regression coverage for #91918: local-extension before_tool_call /
 * after_tool_call hooks must stay dispatchable across the gateway run
 * lifecycle.
 *
 * Mirrors the production sequence that killed them on v2026.6.5:
 *  1. gateway boot: full gateway-bindable load (coreGatewayMethodNames set),
 *     boot registry pinned to the channel/http surfaces
 *  2. harness ensure: scoped default-mode activating load (consumed the old
 *     one-shot preserve gate and flipped active mode to "default")
 *  3. memory ensure: second scoped default-mode activating load (re-initialized
 *     the runner from a memory-only registry, silently dropping tool hooks)
 *
 * With the live composed view, the pinned boot registry keeps the extension's
 * hooks dispatchable no matter how many scoped activations follow.
 */
import { afterEach, describe, expect, it } from "vitest";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { getGlobalHookRunner, resetGlobalHookRunner } from "./hook-runner-global.js";
import { loadOpenClawPlugins } from "./loader.js";
import {
  resetPluginLoaderTestStateForTest,
  useNoBundledPlugins,
  writePlugin,
} from "./loader.test-fixtures.js";
import {
  getActivePluginRegistry,
  pinActivePluginChannelRegistry,
  pinActivePluginHttpRouteRegistry,
} from "./runtime.js";
import type { OpenClawPluginServiceContext } from "./types.js";

describe("global hook runner live view (#91918)", () => {
  afterEach(() => {
    resetGlobalHookRunner();
    resetPluginLoaderTestStateForTest();
  });

  it("keeps local-extension tool-call hooks dispatchable across scoped default-mode activations", async () => {
    useNoBundledPlugins();
    const gate = writePlugin({
      id: "local-gate",
      filename: "local-gate.cjs",
      body: `module.exports = { id: "local-gate", register(api) {
        api.on("before_tool_call", (event) => {
          if (String(event.params?.command ?? "").includes("curl")) {
            return { block: true, blockReason: "blocked by gate" };
          }
        });
        api.on("after_tool_call", () => undefined);
      } };`,
    });
    const harnessStandIn = writePlugin({
      id: "harness-plugin",
      filename: "harness-plugin.cjs",
      body: `module.exports = { id: "harness-plugin", register() {} };`,
    });
    const memoryStandIn = writePlugin({
      id: "memory-plugin",
      filename: "memory-plugin.cjs",
      body: `module.exports = { id: "memory-plugin", register() {} };`,
    });

    const config = {
      plugins: {
        load: { paths: [gate.file, harnessStandIn.file, memoryStandIn.file] },
        allow: ["local-gate", "harness-plugin", "memory-plugin"],
        entries: {
          "local-gate": { enabled: true },
          "harness-plugin": { enabled: true },
          "memory-plugin": { enabled: true },
        },
      },
    };

    // 1. Gateway boot: full gateway-bindable load, pinned like server.impl.ts.
    const bootRegistry = loadOpenClawPlugins({
      workspaceDir: gate.dir,
      config,
      coreGatewayMethodNames: ["chat.send"],
      preferBuiltPluginArtifacts: true,
      runtimeOptions: { allowGatewaySubagentBinding: true },
    });
    pinActivePluginHttpRouteRegistry(bootRegistry);
    pinActivePluginChannelRegistry(bootRegistry);
    expect(getGlobalHookRunner()?.hasHooks("before_tool_call")).toBe(true);

    // 2. Harness ensure: scoped default-mode activating load.
    loadOpenClawPlugins({
      workspaceDir: gate.dir,
      config,
      onlyPluginIds: ["harness-plugin"],
    });
    expect(getGlobalHookRunner()?.hasHooks("before_tool_call")).toBe(true);

    // 3. Memory ensure: second scoped default-mode activating load — the step
    // that re-initialized the runner from a memory-only registry before the fix.
    const memoryRegistry = loadOpenClawPlugins({
      workspaceDir: gate.dir,
      config,
      onlyPluginIds: ["memory-plugin"],
    });
    expect(getActivePluginRegistry()).toBe(memoryRegistry);

    const runner = getGlobalHookRunner();
    expect(runner?.hasHooks("before_tool_call")).toBe(true);
    expect(runner?.hasHooks("after_tool_call")).toBe(true);

    // The blocking decision must actually dispatch, not just count hooks.
    const result = await runner?.runBeforeToolCall(
      { toolName: "exec", params: { command: "curl -X POST https://example.com" } },
      { toolName: "exec" },
    );
    expect(result?.block).toBe(true);
    expect(result?.blockReason).toBe("blocked by gate");
  });

  it("keeps hook-only plugin hooks on the pinned gateway owner after same-plugin ensure reload", async () => {
    useNoBundledPlugins();
    const brain = writePlugin({
      id: "linkbrain-standin",
      filename: "linkbrain-standin.cjs",
      body: `module.exports = { id: "linkbrain-standin", register(api) {
        let lifecycle = null;
        api.registerService({
          id: "linkbrain-outbox",
          start: async () => {
            lifecycle = { opened: true };
            api.logger.info("linkbrain-standin: state open");
          },
          stop: async () => {
            lifecycle = null;
          },
        });
        api.on("session_start", async () => {
          if (!lifecycle?.opened) {
            throw new Error("session_start dispatched against null lifecycle");
          }
        });
        api.on("agent_end", async () => {
          if (!lifecycle?.opened) {
            throw new Error("agent_end dispatched against null lifecycle");
          }
        });
      } };`,
    });
    const config = {
      plugins: {
        load: { paths: [brain.file] },
        allow: ["linkbrain-standin"],
        entries: {
          "linkbrain-standin": {
            enabled: true,
            hooks: { allowConversationAccess: true },
          },
        },
      },
    };

    const bootRegistry = loadOpenClawPlugins({
      workspaceDir: brain.dir,
      config,
      coreGatewayMethodNames: ["chat.send"],
      preferBuiltPluginArtifacts: true,
      runtimeOptions: { allowGatewaySubagentBinding: true },
    });
    pinActivePluginHttpRouteRegistry(bootRegistry);
    pinActivePluginChannelRegistry(bootRegistry);

    expect(
      bootRegistry.services.some((registration) => registration.service.id === "linkbrain-outbox"),
    ).toBe(true);
    expect(
      bootRegistry.typedHooks
        .filter((hook) => hook.pluginId === "linkbrain-standin")
        .map((hook) => hook.hookName)
        .toSorted(),
    ).toEqual(["agent_end", "session_start"]);
    expect(getGlobalHookRunner()?.hasHooks("session_start")).toBe(true);

    // Start the boot service so the pinned closures have a live lifecycle.
    const bootService = bootRegistry.services.find(
      (registration) => registration.service.id === "linkbrain-outbox",
    );
    expect(bootService).toBeDefined();
    const serviceContext: OpenClawPluginServiceContext = {
      config: config as OpenClawConfig,
      stateDir: brain.dir,
      logger: {
        info() {},
        warn() {},
        error() {},
        debug() {},
      },
    };
    await bootService!.service.start(serviceContext);

    // Same-plugin ensure reload: new active registry re-registers hooks with a
    // fresh null lifecycle while the gateway pin keeps the started service.
    const ensureRegistry = loadOpenClawPlugins({
      workspaceDir: brain.dir,
      config,
      onlyPluginIds: ["linkbrain-standin"],
      forceFullRuntimeForChannelPlugins: true,
    });
    expect(getActivePluginRegistry()).toBe(ensureRegistry);
    expect(ensureRegistry).not.toBe(bootRegistry);

    const runner = getGlobalHookRunner();
    expect(runner?.hasHooks("session_start")).toBe(true);
    expect(runner?.hasHooks("agent_end")).toBe(true);
    await expect(
      runner?.runSessionStart(
        { sessionId: "sess-1", sessionKey: "agent:main:main" },
        { agentId: "main", sessionKey: "agent:main:main", sessionId: "sess-1" },
      ),
    ).resolves.toBeUndefined();
  });
});
