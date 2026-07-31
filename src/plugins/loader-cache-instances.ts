import { PluginLoaderCacheState } from "./loader-cache-state.js";
import type { MachineTokenOwnershipBlueprint } from "./plugin-runtime-activation.js";
import type { PluginProcessGlobalState } from "./plugin-registration-transaction.js";
import type { PluginRegistry } from "./registry-types.js";

export type CachedPluginState = {
  registry: PluginRegistry;
  processGlobalState: PluginProcessGlobalState;
  /**
   * Immutable MT ownership descriptors required to reconstruct matching live
   * generations on cache-hit activation. Never stores live handles.
   */
  machineTokenOwnership: MachineTokenOwnershipBlueprint;
};

const MAX_PLUGIN_REGISTRY_CACHE_ENTRIES = 128;

export const pluginLoaderCacheInstances = {
  scoped: new PluginLoaderCacheState<CachedPluginState>(MAX_PLUGIN_REGISTRY_CACHE_ENTRIES),
  fullWorkspace: new PluginLoaderCacheState<CachedPluginState>(MAX_PLUGIN_REGISTRY_CACHE_ENTRIES),
};
