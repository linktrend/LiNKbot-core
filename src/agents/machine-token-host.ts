/**
 * Host-internal machine-token facade construction and privileged cache controls.
 *
 * Plugins must never import this module. They receive an already identity /
 * binding / domain-scoped `MachineTokenPluginFacade` from the host.
 *
 * The host owns an immutable normalized binding registry. Public acquire accepts
 * only `bindingId` (+ signal/forceRefresh); SecretRef → PEM resolution and
 * MachineTokenBinding assembly happen inside the facade.
 */
import { isSecretRef, type SecretRef } from "../config/types.secrets.js";
import {
  getCachedMachineToken,
  clearMachineTokenCache as clearMachineTokenCacheCore,
} from "./machine-token-cache.js";
import {
  buildMachineTokenBindingFingerprint,
  fingerprintMachineTokenKeyRef,
} from "./machine-token-fingerprint.js";
import type {
  MachineTokenBinding,
  MachineTokenBindingHealth,
  MachineTokenKeyRefIdentity,
  MachineTokenPluginFacade,
} from "./machine-token-types.js";
import {
  invalidateMachineTokenCache as invalidateMachineTokenCacheCore,
  resolveMachineTokenAccess as resolveMachineTokenAccessCore,
} from "./machine-token.js";

export type {
  MachineTokenBinding,
  MachineTokenBindingHealth,
  MachineTokenKeyRefIdentity,
  MachineTokenPluginFacade,
} from "./machine-token-types.js";

/**
 * Host-internal normalized binding record — no PEM.
 *
 * Public SDK types must not expose this shape; plugins never supply credential
 * material alongside an allowed bindingId.
 */
export type HostMachineTokenBindingRecord = {
  bindingId: string;
  issuerUrl: string;
  clientId: string;
  audience?: string;
  scope?: string;
  operations?: readonly string[];
  scopes?: readonly string[];
  environment?: string;
  service?: string;
  discoveryUrl?: string;
  tokenEndpoint?: string;
  /** SecretRef identity used to resolve PEM at acquire time. */
  keyRef: MachineTokenKeyRefIdentity;
  keyRefFingerprint: string;
  /** Owning plugin id (cross-plugin isolation). */
  pluginId: string;
  /** Domain partition (defaults to pluginId). */
  domain: string;
  /** Immutable fingerprint of normalized credential scope (no PEM). */
  bindingFingerprint: string;
};

/** Host-injected SecretRef → PEM resolver (closure over config/env). */
export type MachineTokenResolveKeyPem = (params: {
  bindingId: string;
  keyRef: MachineTokenKeyRefIdentity;
  signal?: AbortSignal;
}) => Promise<string>;

/** Params for host construction of a binding-scoped plugin facade. */
export type MachineTokenPluginFacadeParams = {
  /** Plugin identity that owns the granted bindings. */
  pluginId: string;
  /**
   * Normalized host-owned binding records this plugin may acquire.
   * Prefer this over bare binding ids — the registry is the credential source.
   */
  grantedRecords: readonly HostMachineTokenBindingRecord[];
  /** Host-owned SecretRef → PEM resolution (required for real mint). */
  resolveKeyPem: MachineTokenResolveKeyPem;
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

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function readOptionalNonEmptyString(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function readOptionalStringList(value: unknown): readonly string[] | undefined {
  if (!Array.isArray(value)) {
    return undefined;
  }
  const items = value
    .filter((entry): entry is string => typeof entry === "string")
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0);
  return items.length > 0 ? items : undefined;
}

function normalizeKeyRef(ref: SecretRef): MachineTokenKeyRefIdentity {
  return {
    source: ref.source,
    provider: ref.provider.trim(),
    id: ref.id.trim(),
  };
}

/**
 * Build the immutable binding fingerprint for a host record (no PEM).
 */
export function buildHostMachineTokenBindingFingerprint(
  record: Omit<HostMachineTokenBindingRecord, "bindingFingerprint">,
): string {
  return buildMachineTokenBindingFingerprint({
    bindingId: record.bindingId,
    issuerUrl: record.issuerUrl,
    clientId: record.clientId,
    ...(record.audience ? { audience: record.audience } : {}),
    ...(record.scope ? { scope: record.scope } : {}),
    ...(record.operations ? { operations: record.operations } : {}),
    ...(record.scopes ? { scopes: record.scopes } : {}),
    ...(record.environment ? { environment: record.environment } : {}),
    ...(record.service ? { service: record.service } : {}),
    ...(record.discoveryUrl ? { discoveryUrl: record.discoveryUrl } : {}),
    ...(record.tokenEndpoint ? { tokenEndpoint: record.tokenEndpoint } : {}),
    keyRefFingerprint: record.keyRefFingerprint,
    // Unused when keyRefFingerprint is set; required by MachineTokenBinding.
    clientAssertionKeyPem: "",
  });
}

function normalizeMachineTokenConfigRecord(params: {
  raw: Record<string, unknown>;
  pluginId: string;
  domain: string;
  environment?: string;
  service?: string;
}): HostMachineTokenBindingRecord | undefined {
  const bindingId = readOptionalNonEmptyString(params.raw.bindingId);
  const issuerUrl = readOptionalNonEmptyString(params.raw.issuerUrl);
  const clientId = readOptionalNonEmptyString(params.raw.clientId);
  if (!bindingId || !issuerUrl || !clientId || !isSecretRef(params.raw.clientAssertionKeyRef)) {
    return undefined;
  }
  const keyRef = normalizeKeyRef(params.raw.clientAssertionKeyRef);
  const keyRefFingerprint = fingerprintMachineTokenKeyRef(keyRef);
  const audience = readOptionalNonEmptyString(params.raw.audience);
  const scope = readOptionalNonEmptyString(params.raw.scope);
  const operations = readOptionalStringList(params.raw.operations);
  const scopes = readOptionalStringList(params.raw.scopes);
  const environment =
    readOptionalNonEmptyString(params.raw.environment) ?? params.environment;
  const service = readOptionalNonEmptyString(params.raw.service) ?? params.service;
  const discoveryUrl = readOptionalNonEmptyString(params.raw.discoveryUrl);
  const tokenEndpoint = readOptionalNonEmptyString(params.raw.tokenEndpoint);
  const base = {
    bindingId,
    issuerUrl,
    clientId,
    ...(audience ? { audience } : {}),
    ...(scope ? { scope } : {}),
    ...(operations ? { operations } : {}),
    ...(scopes ? { scopes } : {}),
    ...(environment ? { environment } : {}),
    ...(service ? { service } : {}),
    ...(discoveryUrl ? { discoveryUrl } : {}),
    ...(tokenEndpoint ? { tokenEndpoint } : {}),
    keyRef,
    keyRefFingerprint,
    pluginId: params.pluginId,
    domain: params.domain,
  };
  return {
    ...base,
    bindingFingerprint: buildHostMachineTokenBindingFingerprint(base),
  };
}

function assembleBindingFromRecord(
  record: HostMachineTokenBindingRecord,
  clientAssertionKeyPem: string,
): MachineTokenBinding {
  return {
    bindingId: record.bindingId,
    issuerUrl: record.issuerUrl,
    clientId: record.clientId,
    ...(record.audience ? { audience: record.audience } : {}),
    ...(record.scope ? { scope: record.scope } : {}),
    ...(record.operations ? { operations: record.operations } : {}),
    ...(record.scopes ? { scopes: record.scopes } : {}),
    ...(record.environment ? { environment: record.environment } : {}),
    ...(record.service ? { service: record.service } : {}),
    ...(record.discoveryUrl ? { discoveryUrl: record.discoveryUrl } : {}),
    ...(record.tokenEndpoint ? { tokenEndpoint: record.tokenEndpoint } : {}),
    keyRefFingerprint: record.keyRefFingerprint,
    clientAssertionKeyPem,
  };
}

function normalizeOptionalStringField(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeOptionalStringListField(value: unknown): string {
  if (!Array.isArray(value)) {
    return "";
  }
  return value
    .filter((entry): entry is string => typeof entry === "string")
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0)
    .toSorted()
    .join("\0");
}

/**
 * Deep-compare a smuggled binding-like object against the registered record.
 * Any difference fails closed — plugins must not substitute credential scope.
 */
function assertSmuggledBindingMatchesRegistry(
  record: HostMachineTokenBindingRecord,
  smuggled: Record<string, unknown>,
): void {
  const mismatches: string[] = [];
  const expectString = (field: string, expected: string | undefined, actual: unknown) => {
    const got = normalizeOptionalStringField(actual);
    const want = expected ?? "";
    if (got !== want) {
      mismatches.push(field);
    }
  };
  expectString("bindingId", record.bindingId, smuggled.bindingId);
  expectString("issuerUrl", record.issuerUrl, smuggled.issuerUrl);
  expectString("clientId", record.clientId, smuggled.clientId);
  expectString("audience", record.audience, smuggled.audience);
  expectString("scope", record.scope, smuggled.scope);
  expectString("environment", record.environment, smuggled.environment);
  expectString("service", record.service, smuggled.service);
  expectString("discoveryUrl", record.discoveryUrl, smuggled.discoveryUrl);
  expectString("tokenEndpoint", record.tokenEndpoint, smuggled.tokenEndpoint);
  const wantOperations = [...(record.operations ?? [])]
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0)
    .toSorted()
    .join("\0");
  if (normalizeOptionalStringListField(smuggled.operations) !== wantOperations) {
    mismatches.push("operations");
  }
  const wantScopes = [...(record.scopes ?? [])]
    .map((entry) => entry.trim())
    .filter((entry) => entry.length > 0)
    .toSorted()
    .join("\0");
  if (normalizeOptionalStringListField(smuggled.scopes) !== wantScopes) {
    mismatches.push("scopes");
  }
  if ("keyRefFingerprint" in smuggled) {
    expectString("keyRefFingerprint", record.keyRefFingerprint, smuggled.keyRefFingerprint);
  }
  if ("bindingFingerprint" in smuggled) {
    expectString("bindingFingerprint", record.bindingFingerprint, smuggled.bindingFingerprint);
  }
  if ("pluginId" in smuggled) {
    expectString("pluginId", record.pluginId, smuggled.pluginId);
  }
  if ("domain" in smuggled) {
    expectString("domain", record.domain, smuggled.domain);
  }
  if (isSecretRef(smuggled.keyRef) || isSecretRef(smuggled.clientAssertionKeyRef)) {
    const smuggledRef = isSecretRef(smuggled.keyRef)
      ? normalizeKeyRef(smuggled.keyRef)
      : normalizeKeyRef(smuggled.clientAssertionKeyRef as SecretRef);
    if (
      smuggledRef.source !== record.keyRef.source ||
      smuggledRef.provider !== record.keyRef.provider ||
      smuggledRef.id !== record.keyRef.id
    ) {
      mismatches.push("keyRef");
    }
  }
  // Any PEM material on a smuggled binding is forbidden — host resolves keys.
  if (
    typeof smuggled.clientAssertionKeyPem === "string" &&
    smuggled.clientAssertionKeyPem.trim().length > 0
  ) {
    mismatches.push("clientAssertionKeyPem");
  }
  if (mismatches.length > 0) {
    throw new Error(
      `Machine-token binding "${record.bindingId}" does not match the host registry (${mismatches.join(", ")} differ)`,
    );
  }
}

function freezeBindingRegistry(
  records: readonly HostMachineTokenBindingRecord[],
  pluginId: string,
): ReadonlyMap<string, HostMachineTokenBindingRecord> {
  const map = new Map<string, HostMachineTokenBindingRecord>();
  for (const record of records) {
    if (record.pluginId !== pluginId) {
      throw new Error(
        `createMachineTokenPluginFacade for plugin "${pluginId}" received foreign pluginId "${record.pluginId}" on binding "${record.bindingId}"`,
      );
    }
    const existing = map.get(record.bindingId);
    if (existing && existing.bindingFingerprint !== record.bindingFingerprint) {
      throw new Error(
        `createMachineTokenPluginFacade for plugin "${pluginId}" has conflicting records for binding "${record.bindingId}"`,
      );
    }
    // Freeze each record so callers cannot mutate registry credential scope.
    map.set(record.bindingId, Object.freeze({ ...record }));
  }
  return map;
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
  if (!params.resolveKeyPem) {
    throw new Error(
      `createMachineTokenPluginFacade for plugin "${pluginId}" requires resolveKeyPem`,
    );
  }
  const registry = freezeBindingRegistry(params.grantedRecords, pluginId);
  if (registry.size === 0) {
    throw new Error(
      `createMachineTokenPluginFacade for plugin "${pluginId}" requires at least one granted binding record`,
    );
  }
  const grantedBindingIds = new Set(registry.keys());

  const resolveAccess = params.resolveAccess ?? resolveMachineTokenAccessCore;
  const invalidateCache = params.invalidateCache ?? invalidateMachineTokenCacheCore;
  const getCached = params.getCached ?? getCachedMachineToken;
  const resolveKeyPem = params.resolveKeyPem;
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
      const bindingId =
        typeof acquireParams.bindingId === "string" ? acquireParams.bindingId.trim() : "";
      if (!bindingId) {
        throw new Error(
          `Machine-token facade for plugin "${pluginId}" requires a non-empty bindingId`,
        );
      }
      assertGrantedBinding(facade, bindingId);
      const record = registry.get(bindingId);
      if (!record) {
        throw new Error(
          `Plugin "${pluginId}" has no host registry record for machine-token binding "${bindingId}"`,
        );
      }
      // Compat/smuggle guard: if a caller still passes a binding object, every
      // normalized field must match the registry. Credential material is never
      // taken from the smuggled object.
      const smuggled = (acquireParams as { binding?: unknown }).binding;
      if (smuggled !== undefined) {
        if (!isRecord(smuggled)) {
          throw new Error(
            `Machine-token binding "${bindingId}" smuggled binding must be an object matching the host registry`,
          );
        }
        assertSmuggledBindingMatchesRegistry(record, smuggled);
      }

      const pem = await resolveKeyPem({
        bindingId: record.bindingId,
        keyRef: record.keyRef,
        ...(acquireParams.signal ? { signal: acquireParams.signal } : {}),
      });
      if (typeof pem !== "string" || pem.trim().length === 0) {
        throw new Error(
          `Machine-token binding "${bindingId}" key SecretRef resolved to empty PEM`,
        );
      }
      const binding = assembleBindingFromRecord(record, pem);
      // Public facade deliberately omits fetchFn/now. Even if a caller smuggles
      // those keys at runtime, only binding/signal/forceRefresh reach resolveAccess.
      const resolved = await resolveAccess({
        binding,
        ...(acquireParams.signal ? { signal: acquireParams.signal } : {}),
        ...(acquireParams.forceRefresh !== undefined
          ? { forceRefresh: acquireParams.forceRefresh }
          : {}),
      });
      const fingerprint =
        resolved.bindingFingerprint ??
        record.bindingFingerprint ??
        buildMachineTokenBindingFingerprint(binding);
      fingerprintsByBindingId.set(bindingId, fingerprint);
      return resolved;
    },
    invalidate(bindingId) {
      if (!active) {
        throw new Error(
          `Machine-token facade for plugin "${pluginId}" is unregistered; reload must create a new facade`,
        );
      }
      assertGrantedBinding(facade, bindingId);
      const fingerprint = fingerprintsByBindingId.get(bindingId) ?? registry.get(bindingId)?.bindingFingerprint;
      if (fingerprint) {
        invalidateCache(fingerprint);
        fingerprintsByBindingId.delete(bindingId);
      }
    },
    health(bindingId): MachineTokenBindingHealth {
      const granted = grantedBindingIds.has(bindingId);
      const fingerprint =
        fingerprintsByBindingId.get(bindingId) ?? registry.get(bindingId)?.bindingFingerprint;
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
        const fingerprint =
          fingerprintsByBindingId.get(bindingId) ?? registry.get(bindingId)?.bindingFingerprint;
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

/**
 * Collect full host-owned binding records the host may grant to a plugin from
 * pluginConfig.machineToken plus that plugin's managed MCP server machineToken
 * bindings. Incomplete blocks (missing issuer/client/keyRef) are omitted.
 */
export function collectGrantedMachineTokenBindingRecords(params: {
  pluginId: string;
  pluginConfig?: Record<string, unknown>;
  mcpServers?: Record<string, unknown>;
}): HostMachineTokenBindingRecord[] {
  const pluginId = params.pluginId.trim();
  if (!pluginId) {
    return [];
  }
  const domain = pluginId;
  const pluginConfig = params.pluginConfig;
  const environment = readOptionalNonEmptyString(pluginConfig?.environment);
  const byId = new Map<string, HostMachineTokenBindingRecord>();

  const upsert = (record: HostMachineTokenBindingRecord | undefined) => {
    if (!record) {
      return;
    }
    const existing = byId.get(record.bindingId);
    if (existing && existing.bindingFingerprint !== record.bindingFingerprint) {
      // Conflicting credential scope for the same id — fail closed by dropping both.
      byId.delete(record.bindingId);
      return;
    }
    byId.set(record.bindingId, record);
  };

  const pluginMachineToken = pluginConfig?.machineToken;
  if (isRecord(pluginMachineToken)) {
    upsert(
      normalizeMachineTokenConfigRecord({
        raw: pluginMachineToken,
        pluginId,
        domain,
        ...(environment ? { environment } : {}),
        service: pluginId,
      }),
    );
  }

  const configuredServerName =
    typeof pluginConfig?.mcpServerName === "string" ? pluginConfig.mcpServerName.trim() : "";
  const serverNames = new Set<string>();
  if (configuredServerName) {
    serverNames.add(configuredServerName);
  }
  serverNames.add(pluginId);

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
      upsert(
        normalizeMachineTokenConfigRecord({
          raw: serverToken,
          pluginId,
          domain,
          ...(environment ? { environment } : {}),
          service: pluginId,
        }),
      );
    }
  }

  return [...byId.values()];
}

/**
 * Collect binding ids the host may grant to a plugin from pluginConfig plus
 * that plugin's managed MCP server `machine_token` bindings.
 *
 * Prefer {@link collectGrantedMachineTokenBindingRecords} when constructing
 * facades — ids alone are insufficient for immutable credential scope.
 */
export function collectGrantedMachineTokenBindingIds(params: {
  pluginId: string;
  pluginConfig?: Record<string, unknown>;
  mcpServers?: Record<string, unknown>;
}): string[] {
  return collectGrantedMachineTokenBindingRecords(params).map((record) => record.bindingId);
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
