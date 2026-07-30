/**
 * Generic machine-token (OAuth client_credentials + private_key_jwt) types.
 *
 * Core takes already-resolved PEM material; SecretRef resolution belongs at
 * call sites. Platform PACI draft pin is the local/fake behavioral baseline.
 */

/** One independent machine-token issuer binding (Brain ≠ Skills, etc.). */
export type MachineTokenBinding = {
  bindingId: string;
  /** RFC 8414 issuer: no trailing slash, no path. */
  issuerUrl: string;
  clientId: string;
  /** Resource audience hint for later phases; unused by Phase-1 mint path. */
  audience?: string;
  scope?: string;
  /** Already-resolved SecretRef material — PKCS#8 PEM for ES256. */
  clientAssertionKeyPem: string;
};

/** Process-resolved access token ready for Authorization: Bearer. */
export type ResolvedMachineToken = {
  bindingId: string;
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
  response_types_supported?: string[];
  jwks_uri?: string;
  introspection_endpoint?: string;
};

export type MachineTokenFetchFn = (
  input: RequestInfo | URL,
  init?: RequestInit,
) => Promise<Response>;
