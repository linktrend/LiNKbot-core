/** In-memory plugin registry builder and mutation API for plugin runtime registration. */
import { clearCodeModeNamespacesForPlugin } from "../agents/code-mode-namespaces.js";
import { clearContextEnginesForOwner } from "../context-engine/registry.js";
import { clearPluginCommandsForPlugin } from "./command-registry-state.js";
import { clearPluginInteractiveHandlersForPlugin } from "./interactive-registry.js";
import { createPluginApiFactory } from "./registry-api.js";
import { createPluginRegistrars } from "./registry-registrars.js";
import { createPluginRuntimeResolver } from "./registry-runtime.js";
import { createPluginRegistryState } from "./registry-state.js";
import type {
  PluginHttpRouteRegistration as RegistryTypesPluginHttpRouteRegistration,
  PluginRegistryParams,
} from "./registry-types.js";
import type { OpenClawPluginGatewayRuntimeScopeSurface } from "./types.js";

export type PluginHttpRouteRegistration = RegistryTypesPluginHttpRouteRegistration & {
  gatewayRuntimeScopeSurface?: OpenClawPluginGatewayRuntimeScopeSurface;
};

export type { PluginRecord, PluginRegistry } from "./registry-types.js";
export { createEmptyPluginRegistry } from "./registry-empty.js";

/**
 * Compose the registry state, domain registrars, scoped runtime, and plugin API.
 * Domain modules own validation and mutation; this function owns lifecycle wiring only.
 */
export function createPluginRegistry(registryParams: PluginRegistryParams) {
  const state = createPluginRegistryState(registryParams);
  const registrars = createPluginRegistrars(state);
  const runtimeResolver = createPluginRuntimeResolver(state);
  const {
    createApi,
    deactivatePluginSideEffectGuards,
    commitPluginSideEffectGuards,
    publishAllPluginMachineTokenGenerations,
    collectStagedMachineTokenGenerationHandles,
    collectMachineTokenOwnershipBlueprintPlugins,
    commitMachineTokenOwnershipForRegistry,
    abandonPluginMachineTokenGenerations,
    abandonAllPluginMachineTokenGenerations,
  } = createPluginApiFactory(state, registrars, runtimeResolver);

  const rollbackPluginGlobalSideEffects = (pluginId: string) => {
    deactivatePluginSideEffectGuards(pluginId);
    if (registryParams.activateGlobalSideEffects === false) {
      return;
    }
    clearPluginCommandsForPlugin(pluginId);
    clearPluginInteractiveHandlersForPlugin(pluginId);
    clearCodeModeNamespacesForPlugin(pluginId);
    clearContextEnginesForOwner(`plugin:${pluginId}`);
    registrars.rollbackHooks(pluginId);
  };

  /**
   * Per-plugin side-effect commit. For machine-token facades, `activate: true`
   * publishes immediately — tests and manual callers may use this. The
   * production loader must **not** call activate during the candidate loop;
   * it commits ownership via {@link commitPluginMachineTokenOwnershipSnapshot}
   * only after activatePluginRegistry succeeds.
   */
  const commitPluginGlobalSideEffects = (pluginId: string, params?: { activate?: boolean }) => {
    const activate =
      params?.activate !== false && registryParams.activateGlobalSideEffects !== false;
    if (activate) {
      commitPluginSideEffectGuards(pluginId);
      return;
    }
    abandonPluginMachineTokenGenerations(pluginId);
  };

  const publishPluginMachineTokenGenerations = () => {
    publishAllPluginMachineTokenGenerations();
  };

  const commitPluginMachineTokenOwnershipSnapshot = (params: {
    reconcileScope: "full" | ReadonlySet<string>;
  }) => {
    commitMachineTokenOwnershipForRegistry(params);
  };

  const abandonPluginMachineTokenGenerationsForLoad = () => {
    abandonAllPluginMachineTokenGenerations();
  };

  const collectPluginMachineTokenOwnershipBlueprintPlugins = () =>
    collectMachineTokenOwnershipBlueprintPlugins();

  const collectPluginStagedMachineTokenGenerationHandles = () =>
    collectStagedMachineTokenGenerationHandles();

  return {
    registry: state.registry,
    createApi,
    rollbackPluginGlobalSideEffects,
    commitPluginGlobalSideEffects,
    publishPluginMachineTokenGenerations,
    commitPluginMachineTokenOwnershipSnapshot,
    collectPluginMachineTokenOwnershipBlueprintPlugins,
    collectPluginStagedMachineTokenGenerationHandles,
    abandonPluginMachineTokenGenerations: abandonPluginMachineTokenGenerationsForLoad,
    pushDiagnostic: state.pushDiagnostic,
    registerTool: registrars.registerTool,
    registerChannel: registrars.registerChannel,
    registerHostedMediaResolver: registrars.registerHostedMediaResolver,
    registerMcpServerConnectionResolver: registrars.registerMcpServerConnectionResolver,
    registerProvider: registrars.registerProvider,
    registerWorkerProvider: registrars.registerWorkerProvider,
    registerModelCatalogProvider: registrars.registerModelCatalogProvider,
    registerAgentHarness: registrars.registerAgentHarness,
    registerCliBackend: registrars.registerCliBackend,
    registerTextTransforms: registrars.registerTextTransforms,
    registerEmbeddingProvider: registrars.registerEmbeddingProvider,
    registerSpeechProvider: registrars.registerSpeechProvider,
    registerRealtimeTranscriptionProvider: registrars.registerRealtimeTranscriptionProvider,
    registerRealtimeVoiceProvider: registrars.registerRealtimeVoiceProvider,
    registerMediaUnderstandingProvider: registrars.registerMediaUnderstandingProvider,
    registerTranscriptSourceProvider: registrars.registerTranscriptSourceProvider,
    registerImageGenerationProvider: registrars.registerImageGenerationProvider,
    registerVideoGenerationProvider: registrars.registerVideoGenerationProvider,
    registerMusicGenerationProvider: registrars.registerMusicGenerationProvider,
    registerWebSearchProvider: registrars.registerWebSearchProvider,
    registerMigrationProvider: registrars.registerMigrationProvider,
    registerGatewayMethod: registrars.registerGatewayMethod,
    registerSessionCatalog: registrars.registerSessionCatalog,
    registerCli: registrars.registerCli,
    registerReload: registrars.registerReload,
    registerNodeHostCommand: registrars.registerNodeHostCommand,
    registerSecurityAuditCollector: registrars.registerSecurityAuditCollector,
    registerService: registrars.registerService,
    registerCommand: registrars.registerCommand,
    registerSessionExtension: registrars.registerSessionExtension,
    registerTrustedToolPolicy: registrars.registerTrustedToolPolicy,
    registerToolMetadata: registrars.registerToolMetadata,
    registerControlUiDescriptor: registrars.registerControlUiDescriptor,
    registerRuntimeLifecycle: registrars.registerRuntimeLifecycle,
    registerAgentEventSubscription: registrars.registerAgentEventSubscription,
    registerSessionSchedulerJob: registrars.registerSessionSchedulerJob,
    registerSessionAction: registrars.registerSessionAction,
    registerHook: registrars.registerHook,
    registerTypedHook: registrars.registerTypedHook,
  };
}
