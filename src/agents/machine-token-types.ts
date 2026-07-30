/**
 * Generic machine-token (OAuth client_credentials + private_key_jwt) types.
 *
 * Core takes already-resolved PEM material; SecretRef resolution belongs at
 * call sites. Platform PACI draft pin is the local/fake behavioral baseline.
 */

/** SecretRef identity used only for cache-key fingerprints (never secrets). */
export type MachineTokenKeyRefIdentity = {
  source: string;
  provider: string;
  id: string;
};

/** One independent machine-token issuer binding (Brain ≠ Skills, etc.). */
export type MachineTokenBinding = {
  bindingId: string;
  /** RFC 8414 issuer: no trailing slash, no path. */
  issuerUrl: string;
  clientId: string;
  /** Resource audience hint for later phases; unused by Phase-1 mint path. */
  audience?: string;
  /** Space-delimited OAuth scope string (legacy/config form). */
  scope?: string;
  /** Explicit operation/scope list; included in binding fingerprint. */
  operations?: readonly string[];
  /** Alias for operations when callers already use scopes terminology. */
  scopes?: readonly string[];
  /** Deployment/environment partition for cache isolation. */
  environment?: string;
  /** Logical service partition (e.g. brain vs skills). */
  service?: string;
  /**
   * Preferred key identity fingerprint (hash of SecretRef source+provider+id).
   * When absent, cache keys hash resolved PEM bytes (never logged).
   */
  keyRefFingerprint?: string;
  /** Discovery URL once known; defaults to RFC 8414 well-known from issuer. */
  discoveryUrl?: string;
  /** Token endpoint once known; included in fingerprint when set. */
  tokenEndpoint?: string;
  /**
   * Explicit local-test mode: permits HTTP only for loopback hosts and relaxes
   * SSRF private/loopback blocks for that issuer. Production must leave unset.
   */
  localTest?: boolean;
  /** Already-resolved SecretRef material — PKCS#8 PEM for ES256. */
  clientAssertionKeyPem: string;
};

/** Process-resolved access token ready for Authorization: Bearer. */
export type ResolvedMachineToken = {
  bindingId: string;
  /** Immutable binding fingerprint used for cache / single-flight isolation. */
  bindingFingerprint: string;
  accessToken: string;
  /** Absolute expiry as milliseconds since Unix epoch. */
  expiresAt: number;
  tokenType: "Bearer";
};

/** RFC 8414 authorization-server metadata fields this client requires. */
export type MachineTokenAuthorizationServerMetadata = {
  issuer: string;
  token_endpoint: string;
  grant_types_supported?: string[];
  token_endpoint_auth_methods_supported?: string[];
  token_endpoint_auth_signing_alg_values_supported?: string[];
  response_types_supported?: string[];
  jwks_uri?: string;
  introspection_endpoint?: string;
};

export type MachineTokenFetchFn = (
  input: RequestInfo | URL,
  init?: RequestInit,
) => Promise<Response>;

/** Frozen PACI access-token lifetime (seconds). All other positive values rejected. */
export const MACHINE_TOKEN_FROZEN_EXPIRES_IN_SECONDS = 900;
