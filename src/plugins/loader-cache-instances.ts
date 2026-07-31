import { PluginLoaderCacheState } from "./loader-cache-state.js";
import type { MachineTokenOwnershipBlueprint } from "./plugin-runtime-activation.js";
import type { PluginProcessGlobalState } from "./plugin-registration-transaction.js";
import type { PluginRegistry } from "./registry-types.js";

export type CachedPluginState = {
  /**
   * Materialized registry from a prior load. Wave 9: activating loads must not
   * reactivate this object unless it is already the healthy active combined
   * snapshot — plugin closures may capture retired facades.
   */
  registry: PluginRegistry;
  processGlobalState: PluginProcessGlobalState;
  /**
   * Immutable MT ownership descriptors required to reconstruct matching live
   * generations on rematerialize. Never stores live handles.
   */
  machineTokenOwnership: MachineTokenOwnershipBlueprint;
};

const MAX_PLUGIN_REGISTRY_CACHE_ENTRIES = 128;

export const pluginLoaderCacheInstances = {
  scoped: new PluginLoaderCacheState<CachedPluginState>(MAX_PLUGIN_REGISTRY_CACHE_ENTRIES),
  fullWorkspace: new PluginLoaderCacheState<CachedPluginState>(MAX_PLUGIN_REGISTRY_CACHE_ENTRIES),
};
