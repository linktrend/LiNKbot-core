/**
 * Canonical combined plugin-runtime activation (registry + machine-token ownership).
 *
 * Wave 8: every activating path — fresh load, cache hit, empty scope — converges
 * here. Cache entries store immutable ownership blueprints (descriptors only),
 * never live generation handles. Final live commit prefers a single synchronous
 * swap after all fallible preparation.
 */
import {
  commitMachineTokenOwnershipSnapshot,
  createMachineTokenFacadeGeneration,
  destroyMachineTokenFacadeGeneration,
  type HostMachineTokenBindingRecord,
  type MachineTokenFacadeGenerationHandle,
} from "../agents/machine-token-host.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { resolveConfiguredSecretInputString } from "../gateway/resolve-configured-secret-input-string.js";
import { initializeGlobalHookRunner } from "./hook-runner-global.js";
import type { PluginRuntimeSubagentMode } from "./loader-types.js";
import type { PluginProcessGlobalState } from "./plugin-registration-transaction.js";
import { restorePluginProcessGlobalState } from "./plugin-registration-transaction.js";
import type { PluginRegistry } from "./registry-types.js";
import {
  getActivePluginRegistry,
  getActivePluginRegistryKey,
  getActivePluginRegistryWorkspaceDir,
  getActivePluginRuntimeSubagentMode,
  setActivePluginRegistry,
} from "./runtime.js";

/** One plugin's frozen machine-token ownership descriptors for cache/activate. */
export type MachineTokenOwnershipPluginBlueprint = {
  readonly pluginId: string;
  readonly grantedRecords: ReadonlyArray<HostMachineTokenBindingRecord>;
};

/**
 * Complete immutable machine-token half of a combined runtime snapshot.
 * Never contains live facade handles or PEM.
 */
export type MachineTokenOwnershipBlueprint = {
  readonly plugins: ReadonlyArray<MachineTokenOwnershipPluginBlueprint>;
  /** `"full"` or sorted plugin ids for scoped onlyPluginIds loads. */
  readonly reconcileScope: "full" | readonly string[];
  /** Stable identity of ownership descriptors (cacheKey companion). */
  readonly ownershipFingerprint: string;
};

export type CombinedPluginRuntimeSnapshotIdentity = {
  readonly cacheKey: string;
  readonly ownershipFingerprint: string;
};

type ActivationFailurePhase = "precommit" | "after-registry-before-mt";

let activationFailureInjectorForTest: ((phase: ActivationFailurePhase) => void) | null = null;

let activeCombinedSnapshotIdentity: CombinedPluginRuntimeSnapshotIdentity | null = null;

function freezeBindingRecord(
  record: HostMachineTokenBindingRecord,
): HostMachineTokenBindingRecord {
  return Object.freeze({
    ...record,
    keyRef: Object.freeze({ ...record.keyRef }),
    ...(record.operations ? { operations: Object.freeze([...record.operations]) } : {}),
    ...(record.scopes ? { scopes: Object.freeze([...record.scopes]) } : {}),
  });
}

function fingerprintOwnershipPlugins(
  plugins: ReadonlyArray<MachineTokenOwnershipPluginBlueprint>,
): string {
  return plugins
    .map((plugin) => {
      const bindings = plugin.grantedRecords
        .map((record) => record.bindingFingerprint)
        .toSorted()
        .join(",");
      return `${plugin.pluginId}=${bindings}`;
    })
    .toSorted()
    .join("|");
}

function normalizeReconcileScope(
  reconcileScope: "full" | ReadonlySet<string> | readonly string[],
): "full" | readonly string[] {
  if (reconcileScope === "full") {
    return "full";
  }
  if (reconcileScope instanceof Set) {
    return [...reconcileScope].toSorted();
  }
  return [...reconcileScope].toSorted();
}

function toReconcileScopeSet(
  reconcileScope: "full" | readonly string[],
): "full" | ReadonlySet<string> {
  return reconcileScope === "full" ? "full" : new Set(reconcileScope);
}

/**
 * Capture a complete ownership blueprint from descriptor records only.
 * Safe to store in the plugin-registry cache.
 */
export function captureMachineTokenOwnershipBlueprint(params: {
  plugins: ReadonlyArray<{
    pluginId: string;
    grantedRecords: readonly HostMachineTokenBindingRecord[];
  }>;
  reconcileScope: "full" | ReadonlySet<string> | readonly string[];
}): MachineTokenOwnershipBlueprint {
  const plugins = params.plugins
    .map((plugin) =>
      Object.freeze({
        pluginId: plugin.pluginId.trim(),
        grantedRecords: Object.freeze(plugin.grantedRecords.map(freezeBindingRecord)),
      }),
    )
    .filter((plugin) => plugin.pluginId.length > 0 && plugin.grantedRecords.length > 0)
    .toSorted((left, right) => left.pluginId.localeCompare(right.pluginId));
  const reconcileScope = normalizeReconcileScope(params.reconcileScope);
  return Object.freeze({
    plugins: Object.freeze(plugins),
    reconcileScope: reconcileScope === "full" ? "full" : Object.freeze([...reconcileScope]),
    ownershipFingerprint: fingerprintOwnershipPlugins(plugins),
  });
}

export function getActiveCombinedPluginRuntimeSnapshotIdentity(): CombinedPluginRuntimeSnapshotIdentity | null {
  return activeCombinedSnapshotIdentity;
}

export function resetActiveCombinedPluginRuntimeSnapshotIdentityForTest(): void {
  activeCombinedSnapshotIdentity = null;
}

/**
 * Test helper: inject a throw at a named activation boundary.
 * `precommit` runs before any live registry/MT swap.
 * `after-registry-before-mt` runs after registry activation and before MT commit
 * so rollback of the prior combined snapshot can be proven.
 */
export function setCombinedPluginRuntimeActivationFailureInjectorForTest(
  injector: ((phase: ActivationFailurePhase) => void) | null,
): void {
  activationFailureInjectorForTest = injector;
}

function buildResolveKeyPem(params: {
  config: OpenClawConfig;
  env: NodeJS.ProcessEnv;
  pluginId: string;
}) {
  return async ({
    bindingId,
    keyRef,
  }: {
    bindingId: string;
    keyRef: HostMachineTokenBindingRecord["keyRef"];
  }) => {
    const resolved = await resolveConfiguredSecretInputString({
      config: params.config,
      env: params.env,
      value: keyRef,
      path: `plugins.entries.${params.pluginId}.machineToken[${bindingId}].clientAssertionKeyRef`,
    });
    if (!resolved.value) {
      throw new Error(
        resolved.unresolvedRefReason ??
          `Machine-token binding "${bindingId}" clientAssertionKeyRef unresolved`,
      );
    }
    return resolved.value;
  };
}

function isSameActiveCombinedSnapshot(params: {
  registry: PluginRegistry;
  cacheKey: string;
  ownershipFingerprint: string;
}): boolean {
  if (getActivePluginRegistry() !== params.registry) {
    return false;
  }
  if (getActivePluginRegistryKey() !== params.cacheKey) {
    return false;
  }
  const active = activeCombinedSnapshotIdentity;
  return (
    active !== null &&
    active.cacheKey === params.cacheKey &&
    active.ownershipFingerprint === params.ownershipFingerprint
  );
}

export type ActivateCombinedPluginRuntimeSnapshotParams = {
  registry: PluginRegistry;
  cacheKey: string;
  runtimeSubagentMode: PluginRuntimeSubagentMode;
  workspaceDir?: string;
  machineTokenOwnership: MachineTokenOwnershipBlueprint;
  /**
   * Fresh-load path: already-staged candidate handles from this registry
   * builder. When omitted, generations are reconstructed from the blueprint
   * (cache-hit / empty / restore paths).
   */
  stagedPublishHandles?: readonly MachineTokenFacadeGenerationHandle[];
  processGlobalState?: PluginProcessGlobalState;
  config: OpenClawConfig;
  env?: NodeJS.ProcessEnv;
};

export type ActivateCombinedPluginRuntimeSnapshotResult = {
  registry: PluginRegistry;
  /** False when the requested snapshot was already the exact active combined snapshot. */
  activated: boolean;
};

/**
 * Canonical activating commit for registry + machine-token ownership.
 *
 * Fallible work (candidate construction, process-global restore, injectors)
 * happens before the live pointer swap. On mid-commit failure after registry
 * activation, restores the prior registry and destroys newly prepared
 * candidates without retiring prior live facades that were never published-over.
 */
export function activateCombinedPluginRuntimeSnapshot(
  params: ActivateCombinedPluginRuntimeSnapshotParams,
): ActivateCombinedPluginRuntimeSnapshotResult {
  const ownership = params.machineTokenOwnership;
  if (
    isSameActiveCombinedSnapshot({
      registry: params.registry,
      cacheKey: params.cacheKey,
      ownershipFingerprint: ownership.ownershipFingerprint,
    })
  ) {
    return { registry: params.registry, activated: false };
  }

  const env = params.env ?? process.env;
  const preparedHandles: MachineTokenFacadeGenerationHandle[] = [];
  const destroyPrepared = () => {
    for (const handle of preparedHandles.toReversed()) {
      destroyMachineTokenFacadeGeneration(handle);
    }
    preparedHandles.length = 0;
  };

  try {
    if (params.stagedPublishHandles) {
      preparedHandles.push(...params.stagedPublishHandles);
    } else {
      for (const plugin of ownership.plugins) {
        const created = createMachineTokenFacadeGeneration({
          pluginId: plugin.pluginId,
          grantedRecords: plugin.grantedRecords,
          resolveKeyPem: buildResolveKeyPem({
            config: params.config,
            env,
            pluginId: plugin.pluginId,
          }),
        });
        preparedHandles.push(created.handle);
      }
    }

    if (params.processGlobalState) {
      restorePluginProcessGlobalState(params.processGlobalState);
    }

    activationFailureInjectorForTest?.("precommit");

    const priorRegistry = getActivePluginRegistry();
    const priorKey = getActivePluginRegistryKey() ?? undefined;
    const priorWorkspaceDir = getActivePluginRegistryWorkspaceDir();
    const priorRuntimeSubagentMode = getActivePluginRuntimeSubagentMode();
    const priorIdentity = activeCombinedSnapshotIdentity;
    let registryActivated = false;
    try {
      setActivePluginRegistry(
        params.registry,
        params.cacheKey,
        params.runtimeSubagentMode,
        params.workspaceDir,
      );
      initializeGlobalHookRunner(params.registry);
      registryActivated = true;

      activationFailureInjectorForTest?.("after-registry-before-mt");

      commitMachineTokenOwnershipSnapshot({
        publish: preparedHandles,
        reconcileScope: toReconcileScopeSet(ownership.reconcileScope),
      });
      activeCombinedSnapshotIdentity = {
        cacheKey: params.cacheKey,
        ownershipFingerprint: ownership.ownershipFingerprint,
      };
      // Handles are now live (or reconciled); do not destroy on success.
      preparedHandles.length = 0;
      return { registry: params.registry, activated: true };
    } catch (error) {
      if (registryActivated && priorRegistry) {
        setActivePluginRegistry(
          priorRegistry,
          priorKey,
          priorRuntimeSubagentMode,
          priorWorkspaceDir,
        );
        initializeGlobalHookRunner(priorRegistry);
        activeCombinedSnapshotIdentity = priorIdentity;
      } else if (registryActivated && !priorRegistry) {
        activeCombinedSnapshotIdentity = priorIdentity;
      }
      destroyPrepared();
      throw error;
    }
  } catch (error) {
    destroyPrepared();
    throw error;
  }
}

/** Empty ownership blueprint for empty-scope activating loads. */
export function emptyMachineTokenOwnershipBlueprint(): MachineTokenOwnershipBlueprint {
  return captureMachineTokenOwnershipBlueprint({
    plugins: [],
    reconcileScope: "full",
  });
}
