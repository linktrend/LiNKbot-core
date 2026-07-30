/**
 * RFC 8414 OAuth authorization-server discovery for machine-token issuers.
 *
 * Issuer MUST NOT end with `/` and MUST have no path. Discovery URL =
 * issuer + "/.well-known/oauth-authorization-server". Token/JWKS/introspection
 * endpoints must share the issuer origin. Errors never include secrets or tokens.
 */
import {
  assertMachineTokenNetworkUrl,
  describeMachineTokenHttpFailure,
  machineTokenNetworkFetchJson,
} from "./machine-token-network.js";
import type {
  MachineTokenAuthorizationServerMetadata,
  MachineTokenFetchFn,
} from "./machine-token-types.js";

const DISCOVERY_SUFFIX = "/.well-known/oauth-authorization-server";

export type DiscoverMachineTokenAuthorizationServerParams = {
  issuerUrl: string;
  fetchFn?: MachineTokenFetchFn;
  signal?: AbortSignal;
  /** Explicit local-test mode (HTTP loopback only). */
  localTest?: boolean;
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
export function assertMachineTokenIssuerUrl(issuerUrl: string, localTest?: boolean): URL {
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
  assertMachineTokenNetworkUrl({
    url: issuerUrl,
    localTest,
    label: "issuer URL",
  });
  return url;
}

/** Build the RFC 8414 discovery document URL for a validated issuer. */
export function buildMachineTokenDiscoveryUrl(issuerUrl: string, localTest?: boolean): string {
  assertMachineTokenIssuerUrl(issuerUrl, localTest);
  return `${issuerUrl}${DISCOVERY_SUFFIX}`;
}

function includesNormalized(values: readonly string[] | undefined, expected: string): boolean {
  if (!values) {
    return false;
  }
  const needle = expected.toLowerCase();
  return values.some((value) => value.toLowerCase() === needle);
}

function assertSameOriginEndpoint(params: {
  issuer: URL;
  endpoint: string;
  label: string;
  localTest?: boolean;
}): void {
  assertMachineTokenNetworkUrl({
    url: params.endpoint,
    localTest: params.localTest,
    label: params.label,
  });
  let endpointUrl: URL;
  try {
    endpointUrl = new URL(params.endpoint);
  } catch (cause) {
    throw discoveryError(`Machine-token ${params.label} is not a valid absolute URL`, cause);
  }
  if (endpointUrl.origin !== params.issuer.origin) {
    throw discoveryError(`Machine-token ${params.label} must share the issuer origin`);
  }
}

/**
 * Validate authorization-server metadata for the frozen machine-token path.
 *
 * Requires exact issuer match, client_credentials, private_key_jwt, ES256 when
 * signing algs are advertised, empty response_types_supported when present, no
 * authorization_endpoint, no shared-secret auth methods, and same-origin
 * token/JWKS/introspection endpoints.
 */
export function validateMachineTokenAuthorizationServerMetadata(params: {
  metadata: unknown;
  issuerUrl: string;
  localTest?: boolean;
}): MachineTokenAuthorizationServerMetadata {
  const issuer = assertMachineTokenIssuerUrl(params.issuerUrl, params.localTest);
  if (!params.metadata || typeof params.metadata !== "object" || Array.isArray(params.metadata)) {
    throw discoveryError("Machine-token discovery metadata must be a JSON object");
  }
  const raw = params.metadata as Record<string, unknown>;
  if (typeof raw.issuer !== "string" || raw.issuer.length === 0) {
    throw discoveryError("Machine-token discovery metadata is missing issuer");
  }
  const normalizedConfigured = params.issuerUrl;
  const normalizedReported = raw.issuer.replace(/\/$/u, "");
  if (normalizedReported !== normalizedConfigured) {
    throw discoveryError(
      "Machine-token discovery metadata issuer does not match configured issuer",
    );
  }
  if ("authorization_endpoint" in raw && raw.authorization_endpoint != null) {
    throw discoveryError(
      "Machine-token discovery metadata must not include authorization_endpoint (machine clients are non-interactive)",
    );
  }
  if (typeof raw.token_endpoint !== "string" || raw.token_endpoint.length === 0) {
    throw discoveryError("Machine-token discovery metadata is missing token_endpoint");
  }
  assertSameOriginEndpoint({
    issuer,
    endpoint: raw.token_endpoint,
    label: "token_endpoint",
    localTest: params.localTest,
  });

  const grantTypes = Array.isArray(raw.grant_types_supported)
    ? raw.grant_types_supported.filter((value): value is string => typeof value === "string")
    : undefined;
  const authMethods = Array.isArray(raw.token_endpoint_auth_methods_supported)
    ? raw.token_endpoint_auth_methods_supported.filter(
        (value): value is string => typeof value === "string",
      )
    : undefined;
  const signingAlgs = Array.isArray(raw.token_endpoint_auth_signing_alg_values_supported)
    ? raw.token_endpoint_auth_signing_alg_values_supported.filter(
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
  if (authMethods?.some((method) => method.toLowerCase().startsWith("client_secret_"))) {
    throw discoveryError(
      "Machine-token authorization server advertises shared-secret token endpoint auth methods (client_secret_*) which are rejected",
    );
  }
  if (signingAlgs && !includesNormalized(signingAlgs, "ES256")) {
    throw discoveryError(
      "Machine-token authorization server token_endpoint_auth_signing_alg_values_supported must include ES256 when present",
    );
  }

  let responseTypes: string[] | undefined;
  if ("response_types_supported" in raw) {
    if (!Array.isArray(raw.response_types_supported)) {
      throw discoveryError(
        "Machine-token discovery metadata response_types_supported must be an array when present",
      );
    }
    responseTypes = raw.response_types_supported.filter(
      (value): value is string => typeof value === "string",
    );
    if (responseTypes.length > 0) {
      throw discoveryError(
        "Machine-token discovery metadata response_types_supported must be empty for machine clients",
      );
    }
  }

  if (typeof raw.jwks_uri === "string") {
    assertSameOriginEndpoint({
      issuer,
      endpoint: raw.jwks_uri,
      label: "jwks_uri",
      localTest: params.localTest,
    });
  }
  if (typeof raw.introspection_endpoint === "string") {
    assertSameOriginEndpoint({
      issuer,
      endpoint: raw.introspection_endpoint,
      label: "introspection_endpoint",
      localTest: params.localTest,
    });
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
  if (signingAlgs) {
    metadata.token_endpoint_auth_signing_alg_values_supported = signingAlgs;
  }
  if (responseTypes) {
    metadata.response_types_supported = responseTypes;
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
  const discoveryUrl = buildMachineTokenDiscoveryUrl(params.issuerUrl, params.localTest);
  let fetched: { status: number; ok: boolean; json: unknown };
  try {
    fetched = await machineTokenNetworkFetchJson({
      url: discoveryUrl,
      init: {
        method: "GET",
        headers: { accept: "application/json" },
      },
      fetchFn: params.fetchFn,
      signal: params.signal,
      localTest: params.localTest,
      label: "discovery",
    });
  } catch (cause) {
    throwIfAborted(params.signal);
    if (cause instanceof Error && cause.message.startsWith("Machine-token ")) {
      throw cause;
    }
    throw discoveryError("Machine-token discovery request failed", cause);
  }
  throwIfAborted(params.signal);
  if (!fetched.ok) {
    throw discoveryError(describeMachineTokenHttpFailure(fetched.status, "discovery"));
  }
  return validateMachineTokenAuthorizationServerMetadata({
    metadata: fetched.json,
    issuerUrl: params.issuerUrl,
    localTest: params.localTest,
  });
}
