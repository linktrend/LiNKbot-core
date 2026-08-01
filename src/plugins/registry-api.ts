import path from "node:path";
import {
  collectGrantedMachineTokenBindingRecords,
  createMachineTokenFacadeGeneration,
  destroyMachineTokenFacadeGeneration,
  publishMachineTokenFacadeGeneration,
  commitMachineTokenOwnershipSnapshot,
  type HostMachineTokenBindingRecord,
  type MachineTokenFacadeGenerationHandle,
} from "../agents/machine-token-host.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { resolveConfiguredSecretInputString } from "../gateway/resolve-configured-secret-input-string.js";
import { formatErrorMessage } from "../infra/errors.js";
import { resolveUserPath } from "../utils.js";
import { emitPluginAgentEvent } from "./agent-event-emission.js";
import { buildPluginApi } from "./api-builder.js";
import { sendPluginSessionAttachment } from "./host-hook-attachments.js";
import {
  clearPluginRunContext,
  getPluginRunContext,
  setPluginRunContext,
} from "./host-hook-runtime.js";
import {
  schedulePluginSessionTurn,
  unschedulePluginSessionTurnsByTag,
} from "./host-hook-scheduled-turns.js";
import { enqueuePluginNextTurnInjection } from "./host-hook-state.js";
import { isPluginRegistryActivated, isPluginRegistryRetired } from "./registry-lifecycle.js";
import type { PluginRegistrars } from "./registry-registrars.js";
import type { PluginRuntimeResolver } from "./registry-runtime.js";
import {
  resolvePluginRegistrationCapabilities,
  type PluginRegistryState,
  type PluginTypedHookPolicy,
  type PluginSideEffectGuard,
} from "./registry-state.js";
import type { PluginRecord } from "./registry-types.js";
import type { OpenClawPluginApi, PluginLogger, PluginRegistrationMode } from "./types.js";

function normalizeLogger(logger: PluginLogger): PluginLogger {
  return {
    info: logger.info,
    warn: logger.warn,
    error: logger.error,
    debug: logger.debug,
  };
}

function resolvePluginPath(input: string, rootDir: string | undefined): string {
  const trimmed = input.trim();
  if (!trimmed || path.isAbsolute(trimmed) || trimmed.startsWith("~")) {
    return resolveUserPath(input);
  }
  return rootDir ? path.resolve(rootDir, trimmed) : resolveUserPath(input);
}

export function createPluginApiFactory(
  state: PluginRegistryState,
  registrars: PluginRegistrars,
  runtimeResolver: PluginRuntimeResolver,
) {
  const { registry, registryParams, getHostCronService, pluginSideEffectGuards, pushDiagnostic } =
    state;
  const {
    registerTool,
    registerHook,
    registerHttpRoute,
    registerHostedMediaResolver,
    registerMcpServerConnectionResolver,
    registerMcpServerToolFilter,
    unregisterMcpServerToolFilter,
    registerProvider,
    registerWorkerProvider,
    registerModelCatalogProvider,
    registerEmbeddingProvider,
    registerAgentHarness,
    registerDetachedTaskRuntime,
    registerSpeechProvider,
    registerRealtimeTranscriptionProvider,
    registerRealtimeVoiceProvider,
    registerMediaUnderstandingProvider,
    registerTranscriptSourceProvider,
    registerImageGenerationProvider,
    registerVideoGenerationProvider,
    registerMusicGenerationProvider,
    registerWebFetchProvider,
    registerWebSearchProvider,
    registerMigrationProvider,
    registerGatewayMethod,
    registerSessionCatalog,
    registerService,
    registerGatewayDiscoveryService,
    registerCliBackend,
    registerTextTransforms,
    registerReload,
    registerNodeHostCommand,
    registerNodeInvokePolicy,
    registerSecurityAuditCollector,
    registerInteractiveHandler,
    registerConversationBindingResolvedHandler,
    registerCommand,
    registerContextEngine,
    registerCompactionProvider,
    registerCodexAppServerExtensionFactory,
    registerAgentToolResultMiddleware,
    registerSessionExtension,
    registerTrustedToolPolicy,
    registerToolMetadata,
    registerControlUiDescriptor,
    registerRuntimeLifecycle,
    registerAgentEventSubscription,
    registerSessionSchedulerJob,
    registerSessionAction,
    registerTypedHook,
    registerMemoryCapability,
    registerMemoryPromptSupplement,
    registerMemoryPromptPreparation,
    registerMemoryCorpusSupplement,
    registerMemoryEmbeddingProvider,
    registerCli,
    registerChannel,
  } = registrars;
  const { resolvePluginRuntime, setPluginRuntimeRecord } = runtimeResolver;

  const createPluginSideEffectGuard = (pluginId: string): PluginSideEffectGuard => {
    const guard: PluginSideEffectGuard = { active: true };
    const guards = pluginSideEffectGuards.get(pluginId) ?? new Set<PluginSideEffectGuard>();
    guards.add(guard);
    pluginSideEffectGuards.set(pluginId, guards);
    return guard;
  };

  /**
   * Registration failure / stop: destroy only generations owned by this plugin's
   * guards. Does not blanket-kill an unrelated live generation that a failed
   * candidate never replaced.
   */
  const deactivatePluginSideEffectGuards = (pluginId: string): void => {
    const guards = pluginSideEffectGuards.get(pluginId);
    if (!guards) {
      return;
    }
    for (const guard of guards) {
      guard.active = false;
      const generation = guard.machineTokenGeneration;
      if (generation) {
        destroyMachineTokenFacadeGeneration(generation);
        guard.machineTokenGeneration = undefined;
      }
    }
    pluginSideEffectGuards.delete(pluginId);
  };

  /**
   * Publish candidate generations owned by this plugin's active guards
   * (retires only the prior live generation for that plugin).
   *
   * Production loader must call this only at the registry-activation boundary
   * via {@link publishAllPluginMachineTokenGenerations}, not per-candidate.
   */
  const commitPluginSideEffectGuards = (pluginId: string): void => {
    const guards = pluginSideEffectGuards.get(pluginId);
    if (!guards) {
      return;
    }
    for (const guard of guards) {
      if (!guard.active) {
        continue;
      }
      const generation = guard.machineTokenGeneration;
      if (generation) {
        publishMachineTokenFacadeGeneration(generation);
      }
    }
  };

  /**
   * Publish every staged machine-token generation owned by this registry
   * builder. Intended for the complete load-transaction activation boundary.
   */
  const publishAllPluginMachineTokenGenerations = (): void => {
    for (const pluginId of [...pluginSideEffectGuards.keys()].toSorted()) {
      commitPluginSideEffectGuards(pluginId);
    }
  };

  /**
   * Collect exact staged (unpublished) generation handles owned by this
   * registry builder for the combined ownership snapshot commit.
   */
  const collectStagedMachineTokenGenerationHandles = (): MachineTokenFacadeGenerationHandle[] => {
    const handles: MachineTokenFacadeGenerationHandle[] = [];
    for (const pluginId of [...pluginSideEffectGuards.keys()].toSorted()) {
      const guards = pluginSideEffectGuards.get(pluginId);
      if (!guards) {
        continue;
      }
      for (const guard of guards) {
        if (!guard.active || !guard.machineTokenGeneration) {
          continue;
        }
        handles.push(guard.machineTokenGeneration);
      }
    }
    return handles;
  };

  /**
   * Capture immutable ownership descriptors for cache publication / reconstruct.
   * Descriptors only — never live generation handles.
   */
  const collectMachineTokenOwnershipBlueprintPlugins = (): Array<{
    pluginId: string;
    grantedRecords: readonly HostMachineTokenBindingRecord[];
  }> => {
    const byPlugin = new Map<string, HostMachineTokenBindingRecord[]>();
    for (const pluginId of [...pluginSideEffectGuards.keys()].toSorted()) {
      const guards = pluginSideEffectGuards.get(pluginId);
      if (!guards) {
        continue;
      }
      for (const guard of guards) {
        if (!guard.active || !guard.machineTokenGrantedRecords?.length) {
          continue;
        }
        const existing = byPlugin.get(pluginId) ?? [];
        existing.push(...guard.machineTokenGrantedRecords);
        byPlugin.set(pluginId, existing);
      }
    }
    return [...byPlugin.entries()].map(([pluginId, grantedRecords]) => ({
      pluginId,
      grantedRecords,
    }));
  };

  /**
   * Publish staged generations and retire obsolete live generations according
   * to reconcileScope. Call only after activatePluginRegistry succeeds.
   */
  const commitMachineTokenOwnershipForRegistry = (params: {
    reconcileScope: "full" | ReadonlySet<string>;
  }): void => {
    commitMachineTokenOwnershipSnapshot({
      publish: collectStagedMachineTokenGenerationHandles(),
      reconcileScope: params.reconcileScope,
    });
  };

  /**
   * Non-activating snapshot loads: abandon candidates without publishing so the
   * process-global live generation is unchanged.
   */
  const abandonPluginMachineTokenGenerations = (pluginId: string): void => {
    const guards = pluginSideEffectGuards.get(pluginId);
    if (!guards) {
      return;
    }
    for (const guard of guards) {
      const generation = guard.machineTokenGeneration;
      if (!generation) {
        continue;
      }
      destroyMachineTokenFacadeGeneration(generation);
      guard.machineTokenGeneration = undefined;
    }
  };

  /**
   * Abandon every staged (unpublished) machine-token generation owned by this
   * registry builder without touching unrelated live generations.
   */
  const abandonAllPluginMachineTokenGenerations = (): void => {
    for (const pluginId of [...pluginSideEffectGuards.keys()]) {
      abandonPluginMachineTokenGenerations(pluginId);
    }
  };

  const createApi = (
    record: PluginRecord,
    params: {
      config: OpenClawPluginApi["config"];
      pluginConfig?: Record<string, unknown>;
      hookPolicy?: PluginTypedHookPolicy;
      registrationMode?: PluginRegistrationMode;
    },
  ): OpenClawPluginApi => {
    const registrationMode = params.registrationMode ?? "full";
    const registrationCapabilities = resolvePluginRegistrationCapabilities(registrationMode);
    setPluginRuntimeRecord(record);
    const sideEffectGuard = createPluginSideEffectGuard(record.id);
    const isLoadedRecordInRegistry = () =>
      registry.plugins.some((plugin) => plugin.id === record.id && plugin.status === "loaded");
    const isLoadedRecordInLiveRegistry = () =>
      sideEffectGuard.active &&
      isPluginRegistryActivated(registry) &&
      !isPluginRegistryRetired(registry) &&
      isLoadedRecordInRegistry();
    const isActivatingLoadedRecord = () =>
      registryParams.activateGlobalSideEffects !== false &&
      record.enabled &&
      record.status === "loaded" &&
      !registry.plugins.some((plugin) => plugin.id === record.id);
    const shouldCommitWorkflowSideEffect = () =>
      sideEffectGuard.active &&
      !isPluginRegistryRetired(registry) &&
      (isActivatingLoadedRecord() ||
        (isPluginRegistryActivated(registry) && isLoadedRecordInRegistry()));
    const openClawConfig = params.config as OpenClawConfig;
    const mcpServers = openClawConfig.mcp?.servers;
    const grantedRecords = collectGrantedMachineTokenBindingRecords({
      pluginId: record.id,
      pluginConfig: params.pluginConfig,
      ...(mcpServers && typeof mcpServers === "object"
        ? { mcpServers: mcpServers as Record<string, unknown> }
        : {}),
    });
    // Control-plane / setup / discovery paths must not stage production facades.
    // Only full runtime registration under an activating load may create candidates.
    const mayStageMachineTokenFacade =
      registrationMode === "full" &&
      registryParams.activateGlobalSideEffects !== false &&
      grantedRecords.length > 0;
    let machineTokenFacade: OpenClawPluginApi["machineTokenFacade"];
    if (mayStageMachineTokenFacade) {
      const generation = createMachineTokenFacadeGeneration({
        pluginId: record.id,
        grantedRecords,
        resolveKeyPem: async ({ bindingId, keyRef }) => {
          const resolved = await resolveConfiguredSecretInputString({
            config: openClawConfig,
            env: process.env,
            value: keyRef,
            path: `plugins.entries.${record.id}.machineToken[${bindingId}].clientAssertionKeyRef`,
          });
          if (!resolved.value) {
            throw new Error(
              resolved.unresolvedRefReason ??
                `Machine-token binding "${bindingId}" clientAssertionKeyRef unresolved`,
            );
          }
          return resolved.value;
        },
      });
      sideEffectGuard.machineTokenGeneration = generation.handle;
      sideEffectGuard.machineTokenGrantedRecords = Object.freeze(
        grantedRecords.map((record) =>
          Object.freeze({
            ...record,
            keyRef: Object.freeze({ ...record.keyRef }),
            ...(record.operations
              ? { operations: Object.freeze([...record.operations]) }
              : {}),
            ...(record.scopes ? { scopes: Object.freeze([...record.scopes]) } : {}),
          }),
        ),
      );
      machineTokenFacade = generation.facade;
    }
    return buildPluginApi({
      id: record.id,
      name: record.name,
      version: record.version,
      description: record.description,
      source: record.source,
      rootDir: record.rootDir,
      registrationMode,
      config: params.config,
      pluginConfig: params.pluginConfig,
      ...(machineTokenFacade ? { machineTokenFacade } : {}),
      runtime: resolvePluginRuntime(record.id),
      logger: normalizeLogger(registryParams.logger),
      resolvePath: (input: string) => resolvePluginPath(input, record.rootDir),
      handlers: {
        ...(registrationCapabilities.capabilityHandlers
          ? {
              registerTool: (tool, opts) => registerTool(record, tool, opts),
              registerHook: (events, handler, opts) =>
                registerHook(record, events, handler, opts, params.config, params.pluginConfig),
              registerHttpRoute: (routeParams) => registerHttpRoute(record, routeParams),
              registerHostedMediaResolver: (resolver) =>
                registerHostedMediaResolver(record, resolver),
              registerMcpServerConnectionResolver: (resolver) =>
                registerMcpServerConnectionResolver(record, resolver),
              registerMcpServerToolFilter: (resolver) =>
                registerMcpServerToolFilter(record, resolver),
              unregisterMcpServerToolFilter: (serverName) =>
                unregisterMcpServerToolFilter(record, serverName),
              registerProvider: (provider) => registerProvider(record, provider),
              registerWorkerProvider: (provider) => registerWorkerProvider(record, provider),
              registerModelCatalogProvider: (provider) =>
                registerModelCatalogProvider(record, provider),
              registerEmbeddingProvider: (provider) => registerEmbeddingProvider(record, provider),
              registerAgentHarness: (harness) => registerAgentHarness(record, harness),
              registerDetachedTaskRuntime: (runtime) =>
                registerDetachedTaskRuntime(record, runtime),
              registerSpeechProvider: (provider) => registerSpeechProvider(record, provider),
              registerRealtimeTranscriptionProvider: (provider) =>
                registerRealtimeTranscriptionProvider(record, provider),
              registerRealtimeVoiceProvider: (provider) =>
                registerRealtimeVoiceProvider(record, provider),
              registerMediaUnderstandingProvider: (provider) =>
                registerMediaUnderstandingProvider(record, provider),
              registerTranscriptSourceProvider: (provider) =>
                registerTranscriptSourceProvider(record, provider),
              registerImageGenerationProvider: (provider) =>
                registerImageGenerationProvider(record, provider),
              registerVideoGenerationProvider: (provider) =>
                registerVideoGenerationProvider(record, provider),
              registerMusicGenerationProvider: (provider) =>
                registerMusicGenerationProvider(record, provider),
              registerWebFetchProvider: (provider) => registerWebFetchProvider(record, provider),
              registerWebSearchProvider: (provider) => registerWebSearchProvider(record, provider),
              registerMigrationProvider: (provider) => registerMigrationProvider(record, provider),
              registerGatewayMethod: (method, handler, opts) =>
                registerGatewayMethod(record, method, handler, opts),
              registerSessionCatalog: (provider) => registerSessionCatalog(record, provider),
              registerService: (service) => registerService(record, service),
              registerGatewayDiscoveryService: (service) =>
                registerGatewayDiscoveryService(record, service),
              registerCliBackend: (backend) => registerCliBackend(record, backend),
              registerTextTransforms: (transforms) => registerTextTransforms(record, transforms),
              registerReload: (registration) => registerReload(record, registration),
              registerNodeHostCommand: (command) => registerNodeHostCommand(record, command),
              registerNodeInvokePolicy: (policy) =>
                registerNodeInvokePolicy(record, policy, params.pluginConfig),
              registerSecurityAuditCollector: (collector) =>
                registerSecurityAuditCollector(record, collector),
              registerInteractiveHandler: (registration) =>
                registerInteractiveHandler(record, registration),
              onConversationBindingResolved: (handler) =>
                registerConversationBindingResolvedHandler(record, handler),
              registerCommand: (command) => registerCommand(record, command),
              registerContextEngine: (id, factory) =>
                registerContextEngine(record, id, factory, registrationMode),
              registerCompactionProvider: (provider) =>
                registerCompactionProvider(record, provider),
              registerCodexAppServerExtensionFactory: (factory) => {
                registerCodexAppServerExtensionFactory(record, factory);
              },
              registerAgentToolResultMiddleware: (handler, options) => {
                registerAgentToolResultMiddleware(record, handler, options, params.hookPolicy);
              },
              registerSessionExtension: (extension) => registerSessionExtension(record, extension),
              enqueueNextTurnInjection: (injection) => {
                if (params.hookPolicy?.allowPromptInjection === false) {
                  pushDiagnostic({
                    level: "warn",
                    pluginId: record.id,
                    source: record.source,
                    message: `next-turn injection blocked by plugins.entries.${record.id}.hooks.allowPromptInjection=false`,
                  });
                  return Promise.resolve({
                    enqueued: false,
                    id: "",
                    sessionKey: injection.sessionKey,
                  });
                }
                return enqueuePluginNextTurnInjection({
                  cfg: registryParams.runtime.config.current() as OpenClawConfig,
                  pluginId: record.id,
                  pluginName: record.name,
                  injection,
                });
              },
              registerTrustedToolPolicy: (policy) => registerTrustedToolPolicy(record, policy),
              registerToolMetadata: (metadata) => registerToolMetadata(record, metadata),
              registerControlUiDescriptor: (descriptor) =>
                registerControlUiDescriptor(record, descriptor),
              registerRuntimeLifecycle: (lifecycle) => registerRuntimeLifecycle(record, lifecycle),
              registerAgentEventSubscription: (subscription) =>
                registerAgentEventSubscription(record, subscription),
              emitAgentEvent: (event) => {
                if (registryParams.activateGlobalSideEffects === false) {
                  return { emitted: false, reason: "global side effects disabled" };
                }
                if (!shouldCommitWorkflowSideEffect()) {
                  return { emitted: false, reason: "plugin is not loaded" };
                }
                return emitPluginAgentEvent({
                  pluginId: record.id,
                  pluginName: record.name,
                  origin: record.origin,
                  event,
                });
              },
              setRunContext: (patch) =>
                registryParams.activateGlobalSideEffects !== false &&
                shouldCommitWorkflowSideEffect()
                  ? setPluginRunContext({ pluginId: record.id, patch })
                  : false,
              getRunContext: (get) => getPluginRunContext({ pluginId: record.id, get }),
              clearRunContext: (paramsLocal) => {
                if (
                  registryParams.activateGlobalSideEffects === false ||
                  !shouldCommitWorkflowSideEffect()
                ) {
                  return;
                }
                clearPluginRunContext({
                  pluginId: record.id,
                  runId: paramsLocal.runId,
                  namespace: paramsLocal.namespace,
                });
              },
              registerSessionSchedulerJob: (job) => registerSessionSchedulerJob(record, job),
              registerSessionAction: (action) => registerSessionAction(record, action),
              sendSessionAttachment: async (attachment) => {
                if (registryParams.activateGlobalSideEffects === false) {
                  return { ok: false, error: "global side effects disabled" };
                }
                try {
                  if (!isLoadedRecordInLiveRegistry()) {
                    return { ok: false, error: "plugin is not loaded" };
                  }
                  const runtimeConfig =
                    (registryParams.runtime.config?.current?.() as OpenClawConfig | undefined) ??
                    params.config;
                  return await sendPluginSessionAttachment({
                    ...attachment,
                    config: runtimeConfig,
                    origin: record.origin,
                  });
                } catch (error) {
                  return {
                    ok: false,
                    error: `attachment delivery setup failed: ${formatErrorMessage(error)}`,
                  };
                }
              },
              scheduleSessionTurn: async (schedule) => {
                if (registryParams.activateGlobalSideEffects === false) {
                  return undefined;
                }
                await Promise.resolve();
                return schedulePluginSessionTurn({
                  pluginId: record.id,
                  pluginName: record.name,
                  origin: record.origin,
                  schedule,
                  cron: getHostCronService(),
                  shouldCommit: isLoadedRecordInLiveRegistry,
                  ownerRegistry: registry,
                });
              },
              unscheduleSessionTurnsByTag: async (request) => {
                if (registryParams.activateGlobalSideEffects === false) {
                  return { removed: 0, failed: 0 };
                }
                await Promise.resolve();
                if (!isLoadedRecordInLiveRegistry()) {
                  return { removed: 0, failed: 0 };
                }
                return unschedulePluginSessionTurnsByTag({
                  pluginId: record.id,
                  origin: record.origin,
                  cron: getHostCronService(),
                  request,
                });
              },
              registerMemoryCapability: (capability) =>
                registerMemoryCapability(record, capability),
              registerMemoryPromptSupplement: (builder) =>
                registerMemoryPromptSupplement(record, builder),
              registerMemoryPromptPreparation: (prepare) =>
                registerMemoryPromptPreparation(record, prepare),
              registerMemoryCorpusSupplement: (supplement) =>
                registerMemoryCorpusSupplement(record, supplement),
              registerMemoryEmbeddingProvider: (adapter) =>
                registerMemoryEmbeddingProvider(record, adapter),
              on: (hookName, handler, opts) =>
                registerTypedHook(record, hookName, handler, opts, params.hookPolicy),
            }
          : {}),
        ...(registrationCapabilities.setupRuntimeHandlers
          ? {
              registerHttpRoute: (routeParams) => registerHttpRoute(record, routeParams),
              registerGatewayMethod: (method, handler, opts) =>
                registerGatewayMethod(record, method, handler, opts),
              registerSessionCatalog: (provider) => registerSessionCatalog(record, provider),
            }
          : {}),
        // Allow setup-only/setup-runtime paths to surface parse-time CLI metadata
        // without opting into the wider full-registration surface.
        registerCli: (registrar, opts) => registerCli(record, registrar, opts),
        registerChannel: (registration) => registerChannel(record, registration, registrationMode),
      },
    });
  };

  return {
    createApi,
    deactivatePluginSideEffectGuards,
    commitPluginSideEffectGuards,
    publishAllPluginMachineTokenGenerations,
    collectStagedMachineTokenGenerationHandles,
    collectMachineTokenOwnershipBlueprintPlugins,
    commitMachineTokenOwnershipForRegistry,
    abandonPluginMachineTokenGenerations,
    abandonAllPluginMachineTokenGenerations,
  };
}
