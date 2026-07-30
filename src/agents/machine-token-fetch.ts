/**
 * Bearer injection for machine-token bindings on remote MCP HTTP fetches.
 *
 * Same-origin resource requests get a resolved Bearer; token/discovery traffic
 * uses authFetchFn (no Authorization leakage). One bounded reissue on matching
 * 401 and 403 — never retry endlessly.
 */
import type { FetchLike } from "@modelcontextprotocol/sdk/shared/transport.js";
import type { MachineTokenFetchFn } from "./machine-token-types.js";
import {
  invalidateMachineTokenCache,
  resolveMachineTokenAccess,
  type MachineTokenBinding,
} from "./machine-token.js";

function withBearerHeader(headers: Headers, accessToken: string): Headers {
  const next = new Headers(headers);
  next.set("authorization", `Bearer ${accessToken}`);
  return next;
}

function mergeRequestHeaders(
  configured: Record<string, string> | undefined,
  init: RequestInit | undefined,
): Headers {
  const headers = new Headers(configured);
  for (const [key, value] of new Headers(init?.headers)) {
    if (key.toLowerCase() !== "authorization") {
      headers.set(key, value);
    }
  }
  return headers;
}

function isBoundedReissueStatus(status: number): boolean {
  return status === 401 || status === 403;
}

/** Wrap fetch with same-origin machine-token bearer injection. */
export function withMachineTokenBearer(params: {
  fetchFn: FetchLike | MachineTokenFetchFn;
  /** Fetch used for discovery/token mint (no resource Authorization). */
  authFetchFn?: FetchLike | MachineTokenFetchFn;
  serverName?: string;
  resourceUrl: string;
  headers?: Record<string, string>;
  binding: MachineTokenBinding;
}): FetchLike {
  const resourceOrigin = new URL(params.resourceUrl).origin;
  const authFetchFn = params.authFetchFn ?? params.fetchFn;

  return async (url, init) => {
    if (new URL(url).origin !== resourceOrigin) {
      return params.fetchFn(url, init);
    }

    const signal = (init as RequestInit | undefined)?.signal ?? undefined;
    const baseHeaders = mergeRequestHeaders(params.headers, init as RequestInit | undefined);
    const first = await resolveMachineTokenAccess({
      binding: params.binding,
      fetchFn: authFetchFn,
      ...(signal ? { signal } : {}),
    });
    void params.serverName;

    const firstResponse = await params.fetchFn(url, {
      ...(init as RequestInit),
      headers: withBearerHeader(baseHeaders, first.accessToken),
    });
    if (!isBoundedReissueStatus(firstResponse.status)) {
      return firstResponse;
    }

    // One bounded reissue after resource 401/403 — never loop.
    invalidateMachineTokenCache(params.binding);
    const second = await resolveMachineTokenAccess({
      binding: params.binding,
      fetchFn: authFetchFn,
      forceRefresh: true,
      ...(signal ? { signal } : {}),
    });
    return await params.fetchFn(url, {
      ...(init as RequestInit),
      headers: withBearerHeader(baseHeaders, second.accessToken),
    });
  };
}
