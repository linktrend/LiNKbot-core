/**
 * Gateway-style load of the real bundled default-disabled linkbrain plugin.
 * Proves explicitly enabling it registers both the outbox service and typed
 * lifecycle hooks on the loaded registry (not snapshot inspect).
 */
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { withEnv } from "../test-utils/env.js";
import { pluginTestRepoRoot as repoRoot } from "./generated-plugin-test-helpers.js";
import { resetGlobalHookRunner } from "./hook-runner-global.js";
import { loadOpenClawPlugins } from "./loader.js";
import { makeTempDir, resetPluginLoaderTestStateForTest } from "./loader.test-fixtures.js";

const BUNDLED_EXTENSIONS_DIR = path.join(repoRoot, "extensions");

const LINKBRAIN_REQUIRED_HOOKS = [
  "session_start",
  "agent_end",
  "gateway_start",
  "gateway_stop",
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

function loadBundledLinkbrain(params: { enabled?: boolean; allowConversationAccess?: boolean }) {
  const workspaceDir = makeTempDir();
  const enabled = params.enabled === true;
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
            ...(params.allowConversationAccess === true
              ? { hooks: { allowConversationAccess: true } }
              : {}),
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

describe("bundled linkbrain gateway-style startup hooks", () => {
  afterEach(() => {
    resetGlobalHookRunner();
    resetPluginLoaderTestStateForTest();
  });

  it("registers outbox service and typed hooks when explicitly enabled", () => {
    const registry = withBundledExtensionsEnv(() =>
      loadBundledLinkbrain({ enabled: true, allowConversationAccess: true }),
    );

    const record = registry.plugins.find((plugin) => plugin.id === "linkbrain");
    expect(record?.status).toBe("loaded");
    expect(record?.origin).toBe("bundled");
    expect(record?.hookCount ?? 0).toBeGreaterThan(0);

    expect(
      registry.services.some((registration) => registration.service.id === "linkbrain-outbox"),
    ).toBe(true);

    const hookNames = new Set(
      registry.typedHooks
        .filter((hook) => hook.pluginId === "linkbrain")
        .map((hook) => hook.hookName),
    );
    for (const hookName of LINKBRAIN_REQUIRED_HOOKS) {
      expect(hookNames.has(hookName)).toBe(true);
    }
  });

  it("stays unloaded without entries.linkbrain.enabled true", () => {
    // Sibling coverage: bundled-plugin-metadata.test.ts asserts empty-config
    // gateway startup ids omit linkbrain. This half proves the real loader
    // also refuses to activate the default-disabled plugin.
    const registry = withBundledExtensionsEnv(() => loadBundledLinkbrain({}));

    const record = registry.plugins.find((plugin) => plugin.id === "linkbrain");
    expect(record?.status).not.toBe("loaded");
    expect(
      registry.services.some((registration) => registration.service.id === "linkbrain-outbox"),
    ).toBe(false);
    expect(registry.typedHooks.some((hook) => hook.pluginId === "linkbrain")).toBe(false);
  });
});
