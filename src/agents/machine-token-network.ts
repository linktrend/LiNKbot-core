/**
 * Hardened network boundary for machine-token discovery and token mint calls.
 *
 * Production paths use fetchWithSsrFGuard (SSRF/DNS/TLS-safe). Injected fetchFn
 * is an explicit TEST SEAM that bypasses the guard so hermetic PACI fakes and
 * unit stubs can run without DNS pinning — document and keep test-only.
 */
import { readResponseWithLimit } from "../infra/http-body.js";
import { fetchWithSsrFGuard } from "../infra/net/fetch-guard.js";
import type { SsrFPolicy } from "../infra/net/ssrf.js";
import type { MachineTokenFetchFn } from "./machine-token-types.js";

/** Bound connect/response deadline for discovery and token requests. */
export const MACHINE_TOKEN_NETWORK_TIMEOUT_MS = 15_000;

/** Max JSON body size for discovery/token responses. */
export const MACHINE_TOKEN_MAX_RESPONSE_BYTES = 64 * 1024;

function networkError(message: string, cause?: unknown): Error {
  return new Error(message, cause !== undefined ? { cause } : undefined);
}

function normalizeHostname(hostname: string): string {
  return hostname
    .trim()
    .toLowerCase()
    .replace(/^\[|\]$/gu, "");
}

/** True for explicit local-test loopback hostnames only. */
export function isMachineTokenLocalTestLoopbackHost(hostname: string): boolean {
  const host = normalizeHostname(hostname);
  return host === "localhost" || host === "127.0.0.1" || host === "::1";
}

/**
 * Enforce HTTPS for non-local-test endpoints; HTTP only for explicit local-test
 * loopback (127.0.0.1 / ::1 / localhost).
 */
export function assertMachineTokenNetworkUrl(params: {
  url: string;
  localTest?: boolean;
  label: string;
}): URL {
  let parsed: URL;
  try {
    parsed = new URL(params.url);
  } catch (cause) {
    throw networkError(`Machine-token ${params.label} is not a valid absolute URL`, cause);
  }
  if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
    throw networkError(`Machine-token ${params.label} must use http or https`);
  }
  if (parsed.username || parsed.password) {
    throw networkError(`Machine-token ${params.label} must not include userinfo`);
  }
  const loopback = isMachineTokenLocalTestLoopbackHost(parsed.hostname);
  if (parsed.protocol === "http:") {
    if (params.localTest !== true || !loopback) {
      throw networkError(
        `Machine-token ${params.label} must use HTTPS (HTTP is allowed only for explicit local-test loopback)`,
      );
    }
  }
  if (params.localTest !== true && loopback) {
    throw networkError(
      `Machine-token ${params.label} must not target loopback outside explicit local-test mode`,
    );
  }
  return parsed;
}

function resolveSsrFPolicy(localTest: boolean | undefined): SsrFPolicy | undefined {
  if (localTest === true) {
    // Local-test loopback issuers need private/loopback allowance; production
    // leaves policy undefined so SSRF rejects private/link-local/reserved.
    return { allowPrivateNetwork: true };
  }
  return undefined;
}

function assertJsonContentType(response: Response, label: string): void {
  const contentType = response.headers.get("content-type") ?? "";
  const mediaType = contentType.split(";")[0]?.trim().toLowerCase() ?? "";
  if (mediaType !== "application/json") {
    throw networkError(`Machine-token ${label} response content-type must be application/json`);
  }
}

async function readJsonBody(params: {
  response: Response;
  label: string;
  signal?: AbortSignal;
}): Promise<unknown> {
  params.signal?.throwIfAborted();
  assertJsonContentType(params.response, params.label);
  let buffer: Buffer;
  try {
    buffer = await readResponseWithLimit(params.response, MACHINE_TOKEN_MAX_RESPONSE_BYTES, {
      timeoutMs: MACHINE_TOKEN_NETWORK_TIMEOUT_MS,
      onOverflow: () => networkError(`Machine-token ${params.label} response exceeds size limit`),
      onTimeout: () => networkError(`Machine-token ${params.label} response body timed out`),
    });
  } catch (cause) {
    params.signal?.throwIfAborted();
    if (cause instanceof Error && cause.message.startsWith("Machine-token ")) {
      throw cause;
    }
    throw networkError(`Machine-token ${params.label} response body read failed`, cause);
  }
  params.signal?.throwIfAborted();
  try {
    return JSON.parse(buffer.toString("utf8")) as unknown;
  } catch (cause) {
    throw networkError(`Machine-token ${params.label} response is not valid JSON`, cause);
  }
}

export type MachineTokenNetworkFetchParams = {
  url: string;
  init?: RequestInit;
  /**
   * TEST SEAM: when provided, bypasses fetchWithSsrFGuard so hermetic PACI
   * fakes / stubs can mint without DNS pinning. Production callers omit this
   * and use the SSRF-guarded default path.
   */
  fetchFn?: MachineTokenFetchFn;
  signal?: AbortSignal;
  localTest?: boolean;
  timeoutMs?: number;
  label?: string;
};

export type MachineTokenNetworkResponse = {
  response: Response;
  /** Always call after the response body is consumed (or canceled). */
  release: () => Promise<void>;
};

/**
 * Fetch a machine-token discovery or token endpoint under the hardened boundary.
 *
 * Callers MUST invoke `release()` after consuming or canceling the body so the
 * SSRF dispatcher is closed (late-settlement safe; release is idempotent).
 */
export async function machineTokenNetworkFetch(
  params: MachineTokenNetworkFetchParams,
): Promise<MachineTokenNetworkResponse> {
  const label = params.label ?? "request";
  assertMachineTokenNetworkUrl({
    url: params.url,
    localTest: params.localTest,
    label,
  });

  // TEST SEAM: injected fetchFn bypasses SSRF guard for hermetic unit/fake servers.
  if (params.fetchFn) {
    try {
      const response = await params.fetchFn(params.url, {
        ...params.init,
        ...(params.signal ? { signal: params.signal } : {}),
      });
      return {
        response,
        release: async () => undefined,
      };
    } catch (cause) {
      params.signal?.throwIfAborted();
      throw networkError(`Machine-token ${label} request failed`, cause);
    }
  }

  const timeoutMs = params.timeoutMs ?? MACHINE_TOKEN_NETWORK_TIMEOUT_MS;
  const requireHttps = !(
    params.localTest === true && isMachineTokenLocalTestLoopbackHost(new URL(params.url).hostname)
  );
  try {
    const guarded = await fetchWithSsrFGuard({
      url: params.url,
      init: params.init,
      signal: params.signal,
      timeoutMs,
      requireHttps,
      maxRedirects: 0,
      policy: resolveSsrFPolicy(params.localTest),
      auditContext: "machine-token",
    });
    return {
      response: guarded.response,
      release: guarded.release,
    };
  } catch (cause) {
    params.signal?.throwIfAborted();
    throw networkError(`Machine-token ${label} request failed`, cause);
  }
}

/**
 * Fetch + bounded JSON parse with mandatory dispatcher release.
 *
 * Returns HTTP status separately so callers can map 429/5xx without reading
 * secrets from error bodies.
 */
export async function machineTokenNetworkFetchJson(
  params: MachineTokenNetworkFetchParams,
): Promise<{ status: number; ok: boolean; json: unknown }> {
  const label = params.label ?? "request";
  const { response, release } = await machineTokenNetworkFetch(params);
  try {
    if (!response.ok) {
      // Drain/cancel body without parsing secrets into Error.message.
      try {
        await response.arrayBuffer();
      } catch {
        // Ignore late body settlement errors after HTTP failure.
      }
      return { status: response.status, ok: false, json: undefined };
    }
    const json = await readJsonBody({
      response,
      label,
      signal: params.signal,
    });
    return { status: response.status, ok: true, json };
  } finally {
    await release().catch(() => undefined);
  }
}

/**
 * Classify HTTP status for machine-token mint/discovery error messages.
 * No automatic retries — callers decide (resource path allows one 401/403 reissue).
 */
export function describeMachineTokenHttpFailure(status: number, label: string): string {
  if (status === 429) {
    return `Machine-token ${label} failed with HTTP 429 (rate limited)`;
  }
  if (status >= 500) {
    return `Machine-token ${label} failed with HTTP ${String(status)} (upstream error)`;
  }
  return `Machine-token ${label} failed with HTTP ${String(status)}`;
}
