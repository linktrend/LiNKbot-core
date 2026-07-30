/**
 * RFC 8414 OAuth authorization-server discovery for machine-token issuers.
 *
 * Issuer MUST NOT end with `/` and MUST have no path. Discovery URL =
 * issuer + "/.well-known/oauth-authorization-server". Token endpoint must
 * share the issuer origin. Errors never include secrets or tokens.
 */
import type {
  MachineTokenAuthorizationServerMetadata,
  MachineTokenFetchFn,
} from "./machine-token-types.js";

const DISCOVERY_SUFFIX = "/.well-known/oauth-authorization-server";

export type DiscoverMachineTokenAuthorizationServerParams = {
  issuerUrl: string;
  fetchFn?: MachineTokenFetchFn;
  signal?: AbortSignal;
};

function discoveryError(message: string, cause?: unknown): Error {
  return new Error(message, cause !== undefined ? { cause } : undefined);
}

function throwIfAborted(signal: AbortSignal | undefined): void {
  signal?.throwIfAborted();
}

/**
 * Validate and parse an RFC 8414 issuer URL for machine-token discovery.
 *
 * @throws when the issuer has a trailing slash, path, or non-http(s) scheme
 */
export function assertMachineTokenIssuerUrl(issuerUrl: string): URL {
  if (issuerUrl.endsWith("/")) {
    throw discoveryError("Machine-token issuer URL must not end with a trailing slash");
  }
  let url: URL;
  try {
    url = new URL(issuerUrl);
  } catch (cause) {
    throw discoveryError("Machine-token issuer URL is not a valid absolute URL", cause);
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw discoveryError("Machine-token issuer URL must use http or https");
  }
  if (url.username || url.password) {
    throw discoveryError("Machine-token issuer URL must not include userinfo");
  }
  if (url.pathname !== "" && url.pathname !== "/") {
    throw discoveryError("Machine-token issuer URL must not include a path");
  }
  if (url.search || url.hash) {
    throw discoveryError("Machine-token issuer URL must not include query or fragment");
  }
  return url;
}

/** Build the RFC 8414 discovery document URL for a validated issuer. */
export function buildMachineTokenDiscoveryUrl(issuerUrl: string): string {
  assertMachineTokenIssuerUrl(issuerUrl);
  return `${issuerUrl}${DISCOVERY_SUFFIX}`;
}

function includesNormalized(values: readonly string[] | undefined, expected: string): boolean {
  if (!values) {
    return false;
  }
  const needle = expected.toLowerCase();
  return values.some((value) => value.toLowerCase() === needle);
}

/**
 * Validate authorization-server metadata for the Phase-1 machine-token path.
 *
 * Requires client_credentials + private_key_jwt and a same-origin token_endpoint.
 * Rejects interactive-only servers that omit client_credentials.
 */
export function validateMachineTokenAuthorizationServerMetadata(params: {
  metadata: unknown;
  issuerUrl: string;
}): MachineTokenAuthorizationServerMetadata {
  const issuer = assertMachineTokenIssuerUrl(params.issuerUrl);
  if (!params.metadata || typeof params.metadata !== "object" || Array.isArray(params.metadata)) {
    throw discoveryError("Machine-token discovery metadata must be a JSON object");
  }
  const raw = params.metadata as Record<string, unknown>;
  if (typeof raw.issuer !== "string" || raw.issuer.length === 0) {
    throw discoveryError("Machine-token discovery metadata is missing issuer");
  }
  if (raw.issuer !== params.issuerUrl && raw.issuer !== issuer.href.replace(/\/$/u, "")) {
    throw discoveryError(
      "Machine-token discovery metadata issuer does not match configured issuer",
    );
  }
  if (typeof raw.token_endpoint !== "string" || raw.token_endpoint.length === 0) {
    throw discoveryError("Machine-token discovery metadata is missing token_endpoint");
  }

  let tokenEndpoint: URL;
  try {
    tokenEndpoint = new URL(raw.token_endpoint);
  } catch (cause) {
    throw discoveryError("Machine-token token_endpoint is not a valid absolute URL", cause);
  }
  if (tokenEndpoint.protocol !== "https:" && tokenEndpoint.protocol !== "http:") {
    throw discoveryError("Machine-token token_endpoint must use http or https");
  }
  if (tokenEndpoint.origin !== issuer.origin) {
    throw discoveryError("Machine-token token_endpoint must share the issuer origin");
  }

  const grantTypes = Array.isArray(raw.grant_types_supported)
    ? raw.grant_types_supported.filter((value): value is string => typeof value === "string")
    : undefined;
  const authMethods = Array.isArray(raw.token_endpoint_auth_methods_supported)
    ? raw.token_endpoint_auth_methods_supported.filter(
        (value): value is string => typeof value === "string",
      )
    : undefined;

  if (!includesNormalized(grantTypes, "client_credentials")) {
    throw discoveryError(
      "Machine-token authorization server does not support client_credentials (interactive-only servers are rejected)",
    );
  }
  if (!includesNormalized(authMethods, "private_key_jwt")) {
    throw discoveryError(
      "Machine-token authorization server does not support private_key_jwt token endpoint auth",
    );
  }

  const metadata: MachineTokenAuthorizationServerMetadata = {
    issuer: params.issuerUrl,
    token_endpoint: raw.token_endpoint,
  };
  if (grantTypes) {
    metadata.grant_types_supported = grantTypes;
  }
  if (authMethods) {
    metadata.token_endpoint_auth_methods_supported = authMethods;
  }
  if (Array.isArray(raw.response_types_supported)) {
    metadata.response_types_supported = raw.response_types_supported.filter(
      (value): value is string => typeof value === "string",
    );
  }
  if (typeof raw.jwks_uri === "string") {
    metadata.jwks_uri = raw.jwks_uri;
  }
  if (typeof raw.introspection_endpoint === "string") {
    metadata.introspection_endpoint = raw.introspection_endpoint;
  }
  return metadata;
}

/**
 * Fetch and validate RFC 8414 authorization-server metadata for an issuer.
 */
export async function discoverMachineTokenAuthorizationServer(
  params: DiscoverMachineTokenAuthorizationServerParams,
): Promise<MachineTokenAuthorizationServerMetadata> {
  throwIfAborted(params.signal);
  const discoveryUrl = buildMachineTokenDiscoveryUrl(params.issuerUrl);
  const fetchFn = params.fetchFn ?? globalThis.fetch;
  let response: Response;
  try {
    response = await fetchFn(discoveryUrl, {
      method: "GET",
      headers: { accept: "application/json" },
      signal: params.signal,
    });
  } catch (cause) {
    throwIfAborted(params.signal);
    throw discoveryError("Machine-token discovery request failed", cause);
  }
  throwIfAborted(params.signal);
  if (!response.ok) {
    throw discoveryError(`Machine-token discovery failed with HTTP ${String(response.status)}`);
  }
  let body: unknown;
  try {
    body = await response.json();
  } catch (cause) {
    throw discoveryError("Machine-token discovery response is not valid JSON", cause);
  }
  throwIfAborted(params.signal);
  return validateMachineTokenAuthorizationServerMetadata({
    metadata: body,
    issuerUrl: params.issuerUrl,
  });
}
