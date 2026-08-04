/**
 * Gateway-style load of the real bundled default-disabled linkbrain plugin.
 * Proves explicitly enabling it registers the outbox service and typed
 * lifecycle hooks on the loaded registry (not snapshot inspect), and that
 * conversation/data-bearing hooks stay fail-closed unless
 * plugins.entries.linkbrain.hooks.allowConversationAccess===true.
 */
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { withEnv } from "../test-utils/env.js";
import { pluginTestRepoRoot as repoRoot } from "./generated-plugin-test-helpers.js";
import { resetGlobalHookRunner } from "./hook-runner-global.js";
import { loadOpenClawPlugins } from "./loader.js";
import { makeTempDir, resetPluginLoaderTestStateForTest } from "./loader.test-fixtures.js";

const BUNDLED_EXTENSIONS_DIR = path.join(repoRoot, "extensions");

/** Service/worker hooks that remain registerable without conversation access. */
const EXPECTED_SERVICE_HOOKS = ["gateway_start", "gateway_stop"] as const;

/** Governed Brain conversation/data-bearing hooks (§10.1 minus service hooks). */
const EXPECTED_CONVERSATION_HOOKS = [
  "session_start",
  "message_received",
  "agent_end",
  "before_compaction",
  "after_compaction",
  "before_reset",
  "session_end",
  "subagent_spawned",
  "subagent_ended",
] as const;

function withBundledExtensionsEnv<T>(fn: () => T): T {
  return withEnv(
    {
      OPENCLAW_BUNDLED_PLUGINS_DIR: BUNDLED_EXTENSIONS_DIR,
      OPENCLAW_TEST_TRUST_BUNDLED_PLUGINS_DIR: "1",
      OPENCLAW_DISABLE_BUNDLED_PLUGINS: undefined,
    },
    fn,
  );
}

function loadBundledLinkbrain(params: {
  enabled?: boolean;
  allowConversationAccess?: boolean | "absent";
}) {
  const workspaceDir = makeTempDir();
  const enabled = params.enabled === true;
  const access = params.allowConversationAccess;
  const hooks =
    access === true
      ? { allowConversationAccess: true as const }
      : access === false
        ? { allowConversationAccess: false as const }
        : undefined;
  return loadOpenClawPlugins({
    workspaceDir,
    cache: false,
    onlyPluginIds: ["linkbrain"],
    coreGatewayMethodNames: ["chat.send"],
    preferBuiltPluginArtifacts: true,
    runtimeOptions: { allowGatewaySubagentBinding: true },
    config: {
      plugins: {
        allow: ["linkbrain"],
        entries: {
          linkbrain: {
            ...(enabled ? { enabled: true } : {}),
            ...(hooks ? { hooks } : {}),
            config: {
              captureEnqueue: true,
              captureDrain: true,
              transportMode: "disabled",
            },
          },
        },
      },
    },
  });
}

function linkbrainHookNames(registry: ReturnType<typeof loadOpenClawPlugins>): string[] {
  return registry.typedHooks
    .filter((hook) => hook.pluginId === "linkbrain")
    .map((hook) => hook.hookName)
    .toSorted();
}

function hasOutboxService(registry: ReturnType<typeof loadOpenClawPlugins>): boolean {
  return registry.services.some((registration) => registration.service.id === "linkbrain-outbox");
}

describe("bundled linkbrain gateway-style startup hooks", () => {
  afterEach(() => {
    resetGlobalHookRunner();
    resetPluginLoaderTestStateForTest();
  });

  it("registers service hooks and full governed conversation set when allowConversationAccess===true", () => {
    const registry = withBundledExtensionsEnv(() =>
      loadBundledLinkbrain({ enabled: true, allowConversationAccess: true }),
    );

    const record = registry.plugins.find((plugin) => plugin.id === "linkbrain");
    expect(record?.status).toBe("loaded");
    expect(record?.origin).toBe("bundled");
    expect(hasOutboxService(registry)).toBe(true);

    const hookNames = linkbrainHookNames(registry);
    expect(hookNames).toEqual(
      [...EXPECTED_CONVERSATION_HOOKS, ...EXPECTED_SERVICE_HOOKS].toSorted(),
    );

    // No double registration of any governed hook under a single load.
    expect(hookNames).toEqual([...new Set(hookNames)].toSorted());
    for (const hookName of EXPECTED_CONVERSATION_HOOKS) {
      expect(
        registry.typedHooks.filter((h) => h.pluginId === "linkbrain" && h.hookName === hookName),
      ).toHaveLength(1);
    }
  });

  it("keeps service/worker hooks but blocks conversation hooks when allowConversationAccess is absent", () => {
    const registry = withBundledExtensionsEnv(() =>
      loadBundledLinkbrain({ enabled: true, allowConversationAccess: "absent" }),
    );

    const record = registry.plugins.find((plugin) => plugin.id === "linkbrain");
    expect(record?.status).toBe("loaded");
    expect(hasOutboxService(registry)).toBe(true);

    const hookNames = linkbrainHookNames(registry);
    expect(hookNames).toEqual([...EXPECTED_SERVICE_HOOKS].toSorted());
    for (const hookName of EXPECTED_CONVERSATION_HOOKS) {
      expect(hookNames).not.toContain(hookName);
    }
  });

  it("keeps service/worker hooks but blocks conversation hooks when allowConversationAccess===false", () => {
    const registry = withBundledExtensionsEnv(() =>
      loadBundledLinkbrain({ enabled: true, allowConversationAccess: false }),
    );

    const record = registry.plugins.find((plugin) => plugin.id === "linkbrain");
    expect(record?.status).toBe("loaded");
    expect(hasOutboxService(registry)).toBe(true);

    const hookNames = linkbrainHookNames(registry);
    expect(hookNames).toEqual([...EXPECTED_SERVICE_HOOKS].toSorted());
    expect(hookNames).not.toContain("message_received");
    expect(hookNames).not.toContain("agent_end");
    for (const hookName of EXPECTED_CONVERSATION_HOOKS) {
      expect(hookNames).not.toContain(hookName);
    }
  });

  it("stays unloaded without entries.linkbrain.enabled true", () => {
    // Sibling coverage: bundled-plugin-metadata.test.ts asserts empty-config
    // gateway startup ids omit linkbrain. This half proves the real loader
    // also refuses to activate the default-disabled plugin.
    const registry = withBundledExtensionsEnv(() => loadBundledLinkbrain({}));

    const record = registry.plugins.find((plugin) => plugin.id === "linkbrain");
    expect(record?.status).not.toBe("loaded");
    expect(hasOutboxService(registry)).toBe(false);
    expect(registry.typedHooks.some((hook) => hook.pluginId === "linkbrain")).toBe(false);
  });
});
