/**
 * Generic public machine-token access resolution (client_credentials + private_key_jwt).
 *
 * Discovers RFC 8414 metadata, mints Bearer access tokens, caches in process
 * memory with early renewal, and coalesces concurrent mint flights per bindingId.
 * Errors never include access tokens, assertions, or private keys.
 */
import { createAbortError } from "../infra/abort-signal.js";
import { createMachineTokenClientAssertion } from "./machine-token-assertion.js";
import {
  deleteCachedMachineToken,
  getCachedMachineToken,
  isCachedMachineTokenFresh,
  setCachedMachineToken,
} from "./machine-token-cache.js";
import { discoverMachineTokenAuthorizationServer } from "./machine-token-discovery.js";
import type {
  MachineTokenBinding,
  MachineTokenFetchFn,
  ResolvedMachineToken,
} from "./machine-token-types.js";

export type { MachineTokenBinding, ResolvedMachineToken } from "./machine-token-types.js";
export {
  assertMachineTokenIssuerUrl,
  buildMachineTokenDiscoveryUrl,
  validateMachineTokenAuthorizationServerMetadata,
} from "./machine-token-discovery.js";
export {
  clearMachineTokenCache,
  MACHINE_TOKEN_EARLY_RENEWAL_REMAINING_FRACTION,
} from "./machine-token-cache.js";

const CLIENT_ASSERTION_TYPE = "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";

const inflightByBindingId = new Map<string, Promise<ResolvedMachineToken>>();

function machineTokenError(message: string, cause?: unknown): Error {
  return new Error(message, cause !== undefined ? { cause } : undefined);
}

function throwIfAborted(signal: AbortSignal | undefined): void {
  if (!signal) {
    return;
  }
  if (signal.aborted) {
    throw createAbortError("Machine token resolution aborted", {
      cause: signal.reason,
    });
  }
}

async function awaitWithAbort<T>(promise: Promise<T>, signal?: AbortSignal): Promise<T> {
  if (!signal) {
    return await promise;
  }
  throwIfAborted(signal);
  return await new Promise<T>((resolve, reject) => {
    let settled = false;
    const settle = (complete: () => void) => {
      if (settled) {
        return;
      }
      settled = true;
      signal.removeEventListener("abort", onAbort);
      complete();
    };
    const onAbort = () =>
      settle(() =>
        reject(
          createAbortError("Machine token resolution aborted", {
            cause: signal.reason,
          }),
        ),
      );
    signal.addEventListener("abort", onAbort, { once: true });
    if (signal.aborted) {
      onAbort();
      return;
    }
    void promise.then(
      (value) => settle(() => resolve(value)),
      (error: unknown) => settle(() => reject(error)),
    );
  });
}

function parseTokenResponse(
  body: unknown,
  nowMs: number,
): {
  accessToken: string;
  expiresAt: number;
  tokenType: "Bearer";
} {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    throw machineTokenError("Machine-token response must be a JSON object");
  }
  const raw = body as Record<string, unknown>;
  if ("refresh_token" in raw && raw.refresh_token != null && raw.refresh_token !== "") {
    throw machineTokenError(
      "Machine-token response included refresh_token; Phase-1 machine-token path rejects refresh tokens",
    );
  }
  if (typeof raw.access_token !== "string" || raw.access_token.length === 0) {
    throw machineTokenError("Machine-token response is missing access_token");
  }
  if (typeof raw.token_type !== "string" || raw.token_type.toLowerCase() !== "bearer") {
    throw machineTokenError("Machine-token response token_type must be Bearer");
  }
  if (
    typeof raw.expires_in !== "number" ||
    !Number.isFinite(raw.expires_in) ||
    raw.expires_in <= 0
  ) {
    throw machineTokenError("Machine-token response is missing a positive expires_in");
  }
  return {
    accessToken: raw.access_token,
    expiresAt: nowMs + Math.floor(raw.expires_in * 1000),
    tokenType: "Bearer",
  };
}

async function mintMachineTokenAccess(params: {
  binding: MachineTokenBinding;
  fetchFn: MachineTokenFetchFn;
  now: () => number;
  signal?: AbortSignal;
}): Promise<ResolvedMachineToken> {
  throwIfAborted(params.signal);
  const metadata = await discoverMachineTokenAuthorizationServer({
    issuerUrl: params.binding.issuerUrl,
    fetchFn: params.fetchFn,
    signal: params.signal,
  });
  throwIfAborted(params.signal);

  const assertion = await createMachineTokenClientAssertion({
    clientId: params.binding.clientId,
    tokenEndpoint: metadata.token_endpoint,
    clientAssertionKeyPem: params.binding.clientAssertionKeyPem,
    now: params.now,
  });
  throwIfAborted(params.signal);

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_assertion_type: CLIENT_ASSERTION_TYPE,
    client_assertion: assertion.assertion,
  });
  if (params.binding.scope) {
    body.set("scope", params.binding.scope);
  }

  let response: Response;
  try {
    response = await params.fetchFn(metadata.token_endpoint, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/x-www-form-urlencoded",
      },
      body,
      signal: params.signal,
    });
  } catch (cause) {
    throwIfAborted(params.signal);
    throw machineTokenError("Machine-token token request failed", cause);
  }
  throwIfAborted(params.signal);

  if (!response.ok) {
    throw machineTokenError(
      `Machine-token token request failed with HTTP ${String(response.status)}`,
    );
  }

  let json: unknown;
  try {
    json = await response.json();
  } catch (cause) {
    throw machineTokenError("Machine-token token response is not valid JSON", cause);
  }
  throwIfAborted(params.signal);

  const nowMs = params.now();
  const parsed = parseTokenResponse(json, nowMs);
  const resolved: ResolvedMachineToken = {
    bindingId: params.binding.bindingId,
    accessToken: parsed.accessToken,
    expiresAt: parsed.expiresAt,
    tokenType: "Bearer",
  };
  setCachedMachineToken({
    ...resolved,
    issuedAt: nowMs,
  });
  return resolved;
}

/** Remove one binding's cached access token from process memory. */
export function invalidateMachineTokenCache(bindingId: string): void {
  deleteCachedMachineToken(bindingId);
}

/**
 * Resolve a current Bearer access token for a machine-token binding.
 *
 * Reuses process cache when remaining TTL >= 20%. Concurrent callers for the
 * same bindingId share one in-flight mint (Promise coalescing).
 */
export async function resolveMachineTokenAccess(params: {
  binding: MachineTokenBinding;
  fetchFn?: MachineTokenFetchFn;
  now?: () => number;
  signal?: AbortSignal;
  forceRefresh?: boolean;
}): Promise<ResolvedMachineToken> {
  throwIfAborted(params.signal);
  const now = params.now ?? Date.now;
  const fetchFn = params.fetchFn ?? globalThis.fetch;
  const bindingId = params.binding.bindingId;

  if (params.forceRefresh !== true) {
    const cached = getCachedMachineToken(bindingId);
    if (cached && isCachedMachineTokenFresh(cached, now())) {
      return {
        bindingId: cached.bindingId,
        accessToken: cached.accessToken,
        expiresAt: cached.expiresAt,
        tokenType: "Bearer",
      };
    }
  } else {
    deleteCachedMachineToken(bindingId);
  }

  const existing = inflightByBindingId.get(bindingId);
  if (existing) {
    return await awaitWithAbort(existing, params.signal);
  }

  const flight = mintMachineTokenAccess({
    binding: params.binding,
    fetchFn,
    now,
    signal: params.signal,
  }).finally(() => {
    if (inflightByBindingId.get(bindingId) === flight) {
      inflightByBindingId.delete(bindingId);
    }
  });
  inflightByBindingId.set(bindingId, flight);

  try {
    return await awaitWithAbort(flight, params.signal);
  } catch (error) {
    // Caller abort while waiting must not strand the flight map if this caller
    // owns the only reference and mint already failed/aborted.
    throw error;
  }
}
