import type { GatewayRequestHandler } from "../gateway/server-methods/types.js";
import {
  beginActivatingPluginLoad,
  finishActivatingPluginLoad,
} from "./loader-activating-lock.js";
import {
  getReusableCachedPluginRegistry,
  pluginLoaderCacheState,
  setCachedPluginRegistry,
} from "./loader-cache.js";
import { resolvePluginLoadDiscovery } from "./loader-discovery.js";
import {
  resolvePluginLoadCacheContext,
  resolveRuntimeSubagentMode,
} from "./loader-load-context.js";
import { createLazyPluginRuntime, createPluginModuleLoader } from "./loader-module-runtime.js";
import { warnAboutUntrackedLoadedPlugins } from "./loader-provenance.js";
import { formatPluginFailureSummary } from "./loader-records.js";
import {
  loadRuntimePluginCandidate,
  type PluginLoadLoopState,
} from "./loader-runtime-candidate.js";
import {
  clearActivatedPluginRuntimeState,
  createPluginLoaderLogger,
  maybeThrowOnPluginLoadError,
  resolveAuthorizedDreamingSidecar,
} from "./loader-shared.js";
import type { PluginLoadOptions } from "./loader-types.js";
import {
  createPluginRegistrationTransaction,
  snapshotPluginProcessGlobalState,
} from "./plugin-registration-transaction.js";
import {
  activateCombinedPluginRuntimeSnapshot,
  canReuseActiveCombinedPluginRuntimeSnapshot,
  captureMachineTokenOwnershipBlueprint,
  emptyMachineTokenOwnershipBlueprint,
  setCombinedPluginRuntimeActivationFailureInjectorForTest,
} from "./plugin-runtime-activation.js";
import { createPluginIdScopeSet, normalizePluginIdScope } from "./plugin-scope.js";
import { createEmptyPluginRegistry } from "./registry-empty.js";
import { createPluginRegistry, type PluginRegistry } from "./registry.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";

/**
 * Test helper: inject a throw at a combined-activation boundary.
 * Prefer phase-aware injector; legacy null-arg form maps to `precommit`.
 */
export function setPluginLoadActivationFailureInjectorForTest(
  injector: ((phase?: "precommit" | "after-registry-before-mt") => void) | null,
): void {
  if (!injector) {
    setCombinedPluginRuntimeActivationFailureInjectorForTest(null);
    return;
  }
  setCombinedPluginRuntimeActivationFailureInjectorForTest((phase) => {
    injector(phase);
  });
}

export function loadOpenClawPlugins(options: PluginLoadOptions = {}): PluginRegistry {
  const requestedOnlyPluginIds = normalizePluginIdScope(options.onlyPluginIds);
  const requestedOnlyPluginIdSet = createPluginIdScopeSet(requestedOnlyPluginIds);
  if (requestedOnlyPluginIdSet && requestedOnlyPluginIdSet.size === 0) {
    const emptyRegistry = createEmptyPluginRegistry();
    if (options.activate !== false) {
      const emptyOwnerKey = `empty-plugin-scope::${options.workspaceDir ?? ""}`;
      beginActivatingPluginLoad(emptyOwnerKey);
      try {
        clearActivatedPluginRuntimeState();
        const runtimeSubagentMode = resolveRuntimeSubagentMode(options.runtimeOptions);
        activateCombinedPluginRuntimeSnapshot({
          registry: emptyRegistry,
          cacheKey: `empty-plugin-scope::${runtimeSubagentMode}::${options.workspaceDir ?? ""}`,
          runtimeSubagentMode,
          workspaceDir: options.workspaceDir,
          machineTokenOwnership: emptyMachineTokenOwnershipBlueprint(),
          stagedPublishHandles: [],
          config: (options.config ?? {}) as OpenClawConfig,
          env: options.env,
        });
      } finally {
        finishActivatingPluginLoad(emptyOwnerKey);
      }
    }
    return emptyRegistry;
  }

  const context = resolvePluginLoadCacheContext(options);
  const logger = options.logger ?? createPluginLoaderLogger();
  const validateOnly = options.mode === "validate";
  const onlyPluginIdSet = createPluginIdScopeSet(context.onlyPluginIds);
  const cacheEnabled = options.cache !== false && options.resolveRawConfigEnvVars !== true;
  const activatingOwnerKey = context.shouldActivate ? context.cacheKey : null;

  // Wave 8: acquire activating-load ownership before any cache lookup that can
  // activate or return a runtime registry.
  if (activatingOwnerKey) {
    beginActivatingPluginLoad(activatingOwnerKey);
  }

  try {
    if (cacheEnabled) {
      const cached = getReusableCachedPluginRegistry({
        cacheKey: context.cacheKey,
        onlyPluginIds: context.onlyPluginIds,
        runtimeSubagentMode: context.runtimeSubagentMode,
        options,
      });
      if (cached) {
        if (!context.shouldActivate) {
          // Non-activating snapshot loads may reuse the cached registry object.
          return cached.state.registry;
        }
        // Wave 9: never reactivate a cached plugin instance whose closures may
        // hold a retired facade. Same-active healthy reuse is the only fast path;
        // otherwise fall through and rematerialize with fresh register/API/facade.
        if (
          canReuseActiveCombinedPluginRuntimeSnapshot({
            registry: cached.state.registry,
            cacheKey: cached.cacheKey,
            machineTokenOwnership: cached.state.machineTokenOwnership,
          })
        ) {
          return cached.state.registry;
        }
      }
    }

    pluginLoaderCacheState.beginLoad(context.cacheKey);

    let registryBuilder: ReturnType<typeof createPluginRegistry> | undefined;
    const activatingLoadTransaction = context.shouldActivate
      ? createPluginRegistrationTransaction({
          rollbackGlobalSideEffects: () => {
            const loadedPluginIds = (registryBuilder?.registry.plugins ?? [])
              .filter((plugin) => plugin.status === "loaded")
              .map((plugin) => plugin.id);
            for (const pluginId of loadedPluginIds.toReversed()) {
              registryBuilder?.rollbackPluginGlobalSideEffects(pluginId);
            }
          },
        })
      : null;
    try {
      // Snapshot loads must not wipe global state registered by the active plugin set.
      if (context.shouldActivate) {
        clearActivatedPluginRuntimeState();
      }
      // Module and runtime loading stay lazy for discovery-only or disabled-plugin paths.
      const loadPluginModule = createPluginModuleLoader({
        devSourceRoot: context.devSourceRoot,
        pluginSdkResolution: options.pluginSdkResolution,
      });
      const runtime = createLazyPluginRuntime({
        devSourceRoot: context.devSourceRoot,
        pluginSdkResolution: options.pluginSdkResolution,
        runtimeOptions: options.runtimeOptions,
        loadPluginModule,
      });
      registryBuilder = createPluginRegistry({
        logger,
        runtime,
        coreGatewayHandlers: options.coreGatewayHandlers as Record<string, GatewayRequestHandler>,
        ...(options.coreGatewayMethodNames !== undefined && {
          coreGatewayMethodNames: options.coreGatewayMethodNames,
        }),
        ...(options.hostServices !== undefined && { hostServices: options.hostServices }),
        activateGlobalSideEffects: context.shouldActivate,
      });
      const { registry } = registryBuilder;
      const { manifestRegistry, orderedCandidates, manifestBySource, provenance } =
        resolvePluginLoadDiscovery({
          options,
          context,
          diagnostics: registry.diagnostics,
          logger,
          onlyPluginIdSet,
          emitWarning: context.shouldActivate,
          warningCacheKey: context.cacheKey,
          suppliedManifestRegistry: options.manifestRegistry,
        });
      const memorySlot = context.normalized.slots.memory;
      const state: PluginLoadLoopState = {
        seenIds: new Map(),
        selectedMemoryPluginId: null,
        memorySlotMatched: false,
        pluginLoadAttemptCount: 0,
      };
      const dreamingSidecar = resolveAuthorizedDreamingSidecar({
        cfg: context.cfg,
        normalized: context.normalized,
        activationSource: context.activationSource,
        manifestRegistry,
        memorySlot,
      });
      const pluginLoadStartMs = performance.now();
      for (const candidate of orderedCandidates) {
        const manifestRecord = manifestBySource.get(candidate.source);
        if (!manifestRecord) {
          continue;
        }
        loadRuntimePluginCandidate({
          candidate,
          manifestRecord,
          context,
          options,
          onlyPluginIdSet,
          dreamingSidecar,
          validateOnly,
          registryBuilder,
          loadPluginModule,
          logger,
          state,
        });
      }
      const pluginLoadElapsedMs = performance.now() - pluginLoadStartMs;
      if (state.pluginLoadAttemptCount > 0) {
        logger.debug?.(
          `[plugins] loaded ${registry.plugins.length} plugin(s) (${state.pluginLoadAttemptCount} attempted) in ${pluginLoadElapsedMs.toFixed(1)}ms`,
        );
      }
      // Scoped snapshots may omit the configured memory plugin intentionally.
      if (!onlyPluginIdSet && typeof memorySlot === "string" && !state.memorySlotMatched) {
        registry.diagnostics.push({
          level: "warn",
          message: `memory slot plugin not found or not marked as memory: ${memorySlot}`,
        });
      }
      warnAboutUntrackedLoadedPlugins({
        registry,
        provenance,
        allowlist: context.normalized.allow,
        emitWarning: context.shouldActivate,
        logger,
        env: context.env,
      });
      maybeThrowOnPluginLoadError(registry, options.throwOnLoadError);
      if (context.shouldActivate && options.mode !== "validate") {
        const failedPlugins = registry.plugins.filter((plugin) => plugin.failedAt != null);
        if (failedPlugins.length > 0) {
          logger.warn(
            `[plugins] ${failedPlugins.length} plugin(s) failed to initialize (${formatPluginFailureSummary(
              failedPlugins,
            )}). Run 'openclaw plugins inspect <id> --runtime --json' for runtime diagnostics, 'openclaw plugins list' for registry state, and restart the Gateway after plugin code or load-path changes.`,
          );
        }
      }

      const reconcileScope = onlyPluginIdSet ?? "full";
      const machineTokenOwnership = captureMachineTokenOwnershipBlueprint({
        plugins: registryBuilder.collectPluginMachineTokenOwnershipBlueprintPlugins?.() ?? [],
        reconcileScope,
      });

      // Cache publication stores the complete blueprint only — never live handles.
      if (cacheEnabled) {
        setCachedPluginRegistry(
          context.cacheKey,
          {
            registry,
            processGlobalState: snapshotPluginProcessGlobalState(),
            machineTokenOwnership,
          },
          context.onlyPluginIds,
        );
      }

      if (context.shouldActivate) {
        // Fallible combined activation first; commit the registration transaction
        // only after the live snapshot swap succeeds so rollback can restore
        // process-global plugin state on mid-activation failure.
        activateCombinedPluginRuntimeSnapshot({
          registry,
          cacheKey: context.cacheKey,
          runtimeSubagentMode: context.runtimeSubagentMode,
          workspaceDir: options.workspaceDir,
          machineTokenOwnership,
          stagedPublishHandles:
            registryBuilder.collectPluginStagedMachineTokenGenerationHandles?.() ?? [],
          config: context.cfg,
          env: context.env,
        });
        activatingLoadTransaction?.commit({ activate: true });
      }
      return registry;
    } catch (error) {
      // Rollback restores prior process-global plugin state and destroys staged
      // machine-token candidates owned by this failed activating load. Prior live
      // generations remain usable when they were never published-over.
      activatingLoadTransaction?.rollback();
      registryBuilder?.abandonPluginMachineTokenGenerations?.();
      throw error;
    } finally {
      pluginLoaderCacheState.finishLoad(context.cacheKey);
    }
  } finally {
    if (activatingOwnerKey) {
      finishActivatingPluginLoad(activatingOwnerKey);
    }
  }
}

export { clearActivatedPluginRuntimeState } from "./loader-shared.js";
export {
  isActivatingPluginLoadInFlight,
  resetActivatingPluginLoadLockForTest,
  PluginActivatingLoadConflictError,
} from "./loader-activating-lock.js";
export {
  getActiveCombinedPluginRuntimeSnapshotIdentity,
  resetActiveCombinedPluginRuntimeSnapshotIdentityForTest,
  setCombinedPluginRuntimeActivationFailureInjectorForTest,
  canReuseActiveCombinedPluginRuntimeSnapshot,
} from "./plugin-runtime-activation.js";
export { setGlobalHookRunnerInitFailureInjectorForTest } from "./hook-runner-global.js";
