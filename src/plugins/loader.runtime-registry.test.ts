// Verifies plugin loader runtime registry behavior.
import { afterEach, describe, expect, it } from "vitest";
import {
  clearPluginRegistryLoadCache,
  loadOpenClawPlugins,
  resolveCompatibleRuntimePluginRegistry,
  resolvePluginRegistryLoadCacheKey,
  resolveRuntimePluginRegistry,
} from "./loader.js";
import { resetPluginLoaderTestStateForTest } from "./loader.test-fixtures.js";
import {
  getMemoryEmbeddingProvider,
  registerMemoryEmbeddingProvider,
} from "./memory-embedding-providers.js";
import { buildMemoryPromptSection, registerMemoryCapability } from "./memory-state.js";
import { createEmptyPluginRegistry } from "./registry.js";
import { resetPluginRuntimeStateForTest, setActivePluginRegistry } from "./runtime.js";

afterEach(() => {
  resetPluginLoaderTestStateForTest();
  resetPluginRuntimeStateForTest();
});

function requireMemoryEmbeddingProvider(providerId: string) {
  const provider = getMemoryEmbeddingProvider(providerId);
  if (!provider) {
    throw new Error(`expected ${providerId} memory embedding provider`);
  }
  return provider;
}

describe("resolveRuntimePluginRegistry", () => {
  it("falls back to the current active runtime when no explicit load context is provided", () => {
    const registry = createEmptyPluginRegistry();
    setActivePluginRegistry(registry, "startup-registry");

    expect(resolveRuntimePluginRegistry()).toBe(registry);
  });
});

describe("resolveCompatibleRuntimePluginRegistry channel startup mode", () => {
  it("reuses gateway prefer-setup+prefer-built when agent ensure asks force-full", () => {
    const gatewayRegistry = createEmptyPluginRegistry();
    const gatewayOptions = {
      config: { plugins: { enabled: true, allow: ["demo"] } },
      preferSetupRuntimeForChannelPlugins: true,
      preferBuiltPluginArtifacts: true,
      runtimeOptions: { allowGatewaySubagentBinding: true as const },
    };
    setActivePluginRegistry(
      gatewayRegistry,
      resolvePluginRegistryLoadCacheKey(gatewayOptions),
      "gateway-bindable",
    );

    const compatible = resolveCompatibleRuntimePluginRegistry({
      config: gatewayOptions.config,
      forceFullRuntimeForChannelPlugins: true,
      runtimeOptions: { allowGatewaySubagentBinding: true },
    });
    expect(compatible).toBe(gatewayRegistry);
  });
});

describe("clearPluginRegistryLoadCache", () => {
  it("preserves plugin-owned runtime registries while invalidating load snapshots", () => {
    registerMemoryEmbeddingProvider({
      id: "still-live",
      create: async () => ({ provider: null }),
    });
    registerMemoryCapability("memory-core", {
      promptBuilder: () => ["still live"],
    });

    clearPluginRegistryLoadCache();

    expect(buildMemoryPromptSection({ availableTools: new Set() })).toEqual(["still live"]);
    expect(requireMemoryEmbeddingProvider("still-live").id).toBe("still-live");
  });

  it("invalidates full-workspace load snapshots", () => {
    const loadOptions = {
      config: {
        plugins: {
          allow: ["demo"],
        },
      },
      workspaceDir: "/tmp/workspace-a",
    };
    const registry = loadOpenClawPlugins(loadOptions);

    clearPluginRegistryLoadCache();

    expect(loadOpenClawPlugins(loadOptions)).not.toBe(registry);
  });
});
