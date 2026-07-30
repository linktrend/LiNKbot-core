/**
 * Runtime SDK subpath for machine-token (client_credentials + private_key_jwt) access.
 *
 * Plugins must use the host-injected binding-scoped facade
 * (`createMachineTokenPluginFacade`). Do not call global cache clear from
 * plugin code. Host/tests may use the `*ForHost` helpers.
 */
import {
  getCachedMachineToken,
  clearMachineTokenCache as clearMachineTokenCacheCore,
} from "../agents/machine-token-cache.js";
import { buildMachineTokenBindingFingerprint } from "../agents/machine-token-fingerprint.js";
import type {
  MachineTokenBinding,
  MachineTokenFetchFn,
  ResolvedMachineToken,
} from "../agents/machine-token-types.js";
import {
  invalidateMachineTokenCache as invalidateMachineTokenCacheCore,
  resolveMachineTokenAccess as resolveMachineTokenAccessCore,
} from "../agents/machine-token.js";

export type { MachineTokenBinding, ResolvedMachineToken } from "../agents/machine-token-types.js";

export {
  assertMachineTokenIssuerUrl,
  buildMachineTokenDiscoveryUrl,
} from "../agents/machine-token-discovery.js";

export { fingerprintMachineTokenKeyRef } from "../agents/machine-token-fingerprint.js";

export { withMachineTokenBearer } from "../agents/machine-token-fetch.js";

/** Redacted health snapshot for one granted binding — never includes access tokens. */
export type MachineTokenBindingHealth = {
  pluginId: string;
  bindingId: string;
  granted: boolean;
  registered: boolean;
  cached: boolean;
  /** Present only when a cache entry exists; absolute ms epoch. */
  expiresAt?: number;
};

/** Params for constructing a binding-scoped plugin facade. */
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

/**
 * Binding-scoped acquisition / invalidation / health surface for one plugin.
 *
 * A facade may operate only bindings listed in `grantedBindingIds`. It cannot
 * clear all process state or invalidate another plugin's domain.
 */
export type MachineTokenPluginFacade = {
  readonly pluginId: string;
  readonly grantedBindingIds: ReadonlySet<string>;
  /**
   * Acquire a Bearer access token for a granted binding.
   * The binding's `bindingId` must be in `grantedBindingIds`.
   */
  acquire: (params: {
    binding: MachineTokenBinding;
    signal?: AbortSignal;
    forceRefresh?: boolean;
    fetchFn?: MachineTokenFetchFn;
    now?: () => number;
  }) => Promise<ResolvedMachineToken>;
  /** Invalidate one granted binding's cached access token. */
  invalidate: (bindingId: string) => void;
  /** Redacted health for one binding id (granted or not). */
  health: (bindingId: string) => MachineTokenBindingHealth;
  /**
   * Unregister this facade: invalidate all granted bindings and mark the
   * facade inactive so later acquire/invalidate fail closed.
   */
  unregister: () => void;
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
 * Create a host-injected binding-scoped machine-token facade for one plugin.
 *
 * Plugins receive this facade (or build it once from their granted binding ids)
 * instead of global `clearMachineTokenCache`.
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
      const resolved = await resolveAccess({
        binding: acquireParams.binding,
        ...(acquireParams.signal ? { signal: acquireParams.signal } : {}),
        ...(acquireParams.forceRefresh !== undefined
          ? { forceRefresh: acquireParams.forceRefresh }
          : {}),
        ...(acquireParams.fetchFn ? { fetchFn: acquireParams.fetchFn } : {}),
        ...(acquireParams.now ? { now: acquireParams.now } : {}),
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
    health(bindingId) {
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
 * Host/test helper: mint an access token without plugin binding grants.
 * Plugins must use `createMachineTokenPluginFacade` instead.
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

/**
 * Build an Authorization header object from a resolved machine token.
 * Does not log or retain the access token beyond the returned value.
 */
export function authorizationHeaderFromMachineToken(token: ResolvedMachineToken): {
  authorization: string;
} {
  return { authorization: `Bearer ${token.accessToken}` };
}
