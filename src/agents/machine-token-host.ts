/**
 * Host-internal machine-token facade construction and privileged cache controls.
 *
 * Plugins must never import this module. They receive an already identity /
 * binding / domain-scoped `MachineTokenPluginFacade` from the host.
 */
import {
  getCachedMachineToken,
  clearMachineTokenCache as clearMachineTokenCacheCore,
} from "./machine-token-cache.js";
import { buildMachineTokenBindingFingerprint } from "./machine-token-fingerprint.js";
import type { MachineTokenBindingHealth, MachineTokenPluginFacade } from "./machine-token-types.js";
import {
  invalidateMachineTokenCache as invalidateMachineTokenCacheCore,
  resolveMachineTokenAccess as resolveMachineTokenAccessCore,
} from "./machine-token.js";

export type { MachineTokenBindingHealth, MachineTokenPluginFacade } from "./machine-token-types.js";

/** Params for host construction of a binding-scoped plugin facade. */
export type MachineTokenPluginFacadeParams = {
  /** Plugin identity that owns the granted bindings. */
  pluginId: string;
  /** Binding ids this plugin may acquire/invalidate — never another domain. */
  grantedBindingIds: readonly string[];
  /** Optional host/test injection for mint. */
  resolveAccess?: typeof resolveMachineTokenAccessCore;
  /** Optional host/test injection for per-binding invalidation. */
  invalidateCache?: typeof invalidateMachineTokenCacheCore;
  /** Optional host/test injection for cache health reads. */
  getCached?: typeof getCachedMachineToken;
};

const activeFacadesByPluginId = new Map<string, Set<MachineTokenPluginFacade>>();

function assertGrantedBinding(
  facade: Pick<MachineTokenPluginFacade, "pluginId" | "grantedBindingIds">,
  bindingId: string,
): void {
  if (!facade.grantedBindingIds.has(bindingId)) {
    throw new Error(
      `Plugin "${facade.pluginId}" is not granted machine-token binding "${bindingId}"`,
    );
  }
}

/**
 * Create a binding-scoped machine-token facade for one plugin.
 *
 * Host/runtime only. Plugins receive the resulting facade; they must not call
 * this constructor or choose arbitrary plugin IDs / grants.
 */
export function createMachineTokenPluginFacade(
  params: MachineTokenPluginFacadeParams,
): MachineTokenPluginFacade {
  const pluginId = params.pluginId.trim();
  if (!pluginId) {
    throw new Error("createMachineTokenPluginFacade requires a non-empty pluginId");
  }
  const grantedBindingIds = new Set(
    params.grantedBindingIds.map((id) => id.trim()).filter((id) => id.length > 0),
  );
  if (grantedBindingIds.size === 0) {
    throw new Error(
      `createMachineTokenPluginFacade for plugin "${pluginId}" requires at least one grantedBindingId`,
    );
  }

  const resolveAccess = params.resolveAccess ?? resolveMachineTokenAccessCore;
  const invalidateCache = params.invalidateCache ?? invalidateMachineTokenCacheCore;
  const getCached = params.getCached ?? getCachedMachineToken;
  let active = true;
  /** Last acquired binding fingerprint per operator bindingId (cache is fingerprint-keyed). */
  const fingerprintsByBindingId = new Map<string, string>();

  const facade: MachineTokenPluginFacade = {
    pluginId,
    grantedBindingIds,
    async acquire(acquireParams) {
      if (!active) {
        throw new Error(
          `Machine-token facade for plugin "${pluginId}" is unregistered; reload must create a new facade`,
        );
      }
      assertGrantedBinding(facade, acquireParams.binding.bindingId);
      // Public facade deliberately omits fetchFn/now. Even if a caller smuggles
      // those keys at runtime, only binding/signal/forceRefresh reach resolveAccess.
      const resolved = await resolveAccess({
        binding: acquireParams.binding,
        ...(acquireParams.signal ? { signal: acquireParams.signal } : {}),
        ...(acquireParams.forceRefresh !== undefined
          ? { forceRefresh: acquireParams.forceRefresh }
          : {}),
      });
      fingerprintsByBindingId.set(
        acquireParams.binding.bindingId,
        resolved.bindingFingerprint ?? buildMachineTokenBindingFingerprint(acquireParams.binding),
      );
      return resolved;
    },
    invalidate(bindingId) {
      if (!active) {
        throw new Error(
          `Machine-token facade for plugin "${pluginId}" is unregistered; reload must create a new facade`,
        );
      }
      assertGrantedBinding(facade, bindingId);
      const fingerprint = fingerprintsByBindingId.get(bindingId);
      if (fingerprint) {
        invalidateCache(fingerprint);
        fingerprintsByBindingId.delete(bindingId);
      }
    },
    health(bindingId): MachineTokenBindingHealth {
      const granted = grantedBindingIds.has(bindingId);
      const fingerprint = fingerprintsByBindingId.get(bindingId);
      const cachedEntry = granted && active && fingerprint ? getCached(fingerprint) : undefined;
      return {
        pluginId,
        bindingId,
        granted,
        registered: active,
        cached: Boolean(cachedEntry),
        ...(cachedEntry ? { expiresAt: cachedEntry.expiresAt } : {}),
      };
    },
    unregister() {
      if (!active) {
        return;
      }
      for (const bindingId of grantedBindingIds) {
        const fingerprint = fingerprintsByBindingId.get(bindingId);
        if (fingerprint) {
          invalidateCache(fingerprint);
        }
      }
      fingerprintsByBindingId.clear();
      active = false;
      const owned = activeFacadesByPluginId.get(pluginId);
      owned?.delete(facade);
      if (owned && owned.size === 0) {
        activeFacadesByPluginId.delete(pluginId);
      }
    },
  };

  let owned = activeFacadesByPluginId.get(pluginId);
  if (!owned) {
    owned = new Set();
    activeFacadesByPluginId.set(pluginId, owned);
  }
  owned.add(facade);
  return facade;
}

/**
 * Unregister every active facade for one plugin.
 *
 * Each facade invalidates its own granted fingerprints. This does **not** call
 * `clearMachineTokenCacheForHost` — other plugins' cache entries stay intact.
 */
export function unregisterMachineTokenFacadesForPlugin(pluginId: string): void {
  const trimmed = pluginId.trim();
  if (!trimmed) {
    return;
  }
  const owned = activeFacadesByPluginId.get(trimmed);
  if (!owned || owned.size === 0) {
    return;
  }
  // Copy — facade.unregister mutates the live set.
  for (const facade of [...owned]) {
    facade.unregister();
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Collect binding ids the host may grant to a plugin from pluginConfig plus
 * that plugin's managed MCP server `machine_token` bindings.
 */
export function collectGrantedMachineTokenBindingIds(params: {
  pluginId: string;
  pluginConfig?: Record<string, unknown>;
  mcpServers?: Record<string, unknown>;
}): string[] {
  const ids = new Set<string>();
  const pluginConfig = params.pluginConfig;
  const pluginMachineToken = pluginConfig?.machineToken;
  if (isRecord(pluginMachineToken)) {
    const bindingId =
      typeof pluginMachineToken.bindingId === "string" ? pluginMachineToken.bindingId.trim() : "";
    if (bindingId) {
      ids.add(bindingId);
    }
  }

  const configuredServerName =
    typeof pluginConfig?.mcpServerName === "string" ? pluginConfig.mcpServerName.trim() : "";
  const serverNames = new Set<string>();
  if (configuredServerName) {
    serverNames.add(configuredServerName);
  }
  const pluginId = params.pluginId.trim();
  if (pluginId) {
    serverNames.add(pluginId);
  }

  const mcpServers = params.mcpServers;
  if (mcpServers) {
    for (const serverName of serverNames) {
      const entry = mcpServers[serverName];
      if (!isRecord(entry) || entry.auth !== "machine_token") {
        continue;
      }
      const serverToken = entry.machineToken;
      if (!isRecord(serverToken)) {
        continue;
      }
      const bindingId =
        typeof serverToken.bindingId === "string" ? serverToken.bindingId.trim() : "";
      if (bindingId) {
        ids.add(bindingId);
      }
    }
  }

  return [...ids];
}

/**
 * Host/test helper: mint an access token without plugin binding grants.
 * Plugins must use an injected `MachineTokenPluginFacade` instead.
 */
export const resolveMachineTokenAccessForHost = resolveMachineTokenAccessCore;

/**
 * Host/test helper: invalidate one binding cache entry without grant checks.
 * Plugins must use facade.invalidate instead.
 */
export const invalidateMachineTokenCacheForHost = invalidateMachineTokenCacheCore;

/**
 * Host/test helper: clear every process-memory machine-token cache entry.
 * Never expose this to plugins.
 */
export const clearMachineTokenCacheForHost = clearMachineTokenCacheCore;
