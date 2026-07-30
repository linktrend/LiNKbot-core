/**
 * TEST ONLY — in-memory fake PACI authorization server.
 *
 * Serves RFC 8414 discovery, token, optional JWKS, and optional introspection
 * via an injected fetch dispatcher. Enforces private_key_jwt assertion jti
 * replay rejection. Issues opaque access tokens with expires_in=900.
 *
 * Never contact live Platform. Never print private keys or access tokens.
 */
import { randomUUID } from "node:crypto";
import { compactVerify, importSPKI } from "jose";
import { createPaciFakeEs256KeyPair, type PaciFakeEs256KeyPair } from "./keys.js";

/** Phase-1 PACI draft access-token lifetime (15 minutes). */
export const PACI_FAKE_ACCESS_TOKEN_EXPIRES_IN_SECONDS = 900;

const CLIENT_ASSERTION_TYPE = "urn:ietf:params:oauth:client-assertion-type:jwt-bearer";

export type PaciFakeServerOptions = {
  /** Issuer origin without trailing slash or path (e.g. https://paci.test). */
  issuerUrl: string;
  /** Expected OAuth client_id. */
  clientId: string;
  /** Client public key used to verify private_key_jwt assertions. */
  clientPublicKeyPem: string;
  /** Optional server signing keypair for JWKS (TEST ONLY). */
  serverKeys?: PaciFakeEs256KeyPair;
  /** Override expires_in (seconds). Defaults to 900. */
  expiresInSeconds?: number;
  /**
   * When true, metadata omits private_key_jwt (interactive-only denial fixture).
   */
  omitPrivateKeyJwt?: boolean;
  /**
   * When true, metadata omits client_credentials (interactive-only denial).
   */
  omitClientCredentials?: boolean;
  /**
   * When true, token responses include a refresh_token (client must reject).
   */
  includeRefreshToken?: boolean;
  /** Optional fixed token-endpoint path (default /oauth/token). */
  tokenPath?: string;
  /** Injected clock (ms epoch) for assertion/token lifetime checks. */
  now?: () => number;
};

export type PaciFakeServer = {
  issuerUrl: string;
  discoveryUrl: string;
  tokenEndpoint: string;
  jwksUrl: string;
  introspectionUrl: string;
  /** Injected fetch dispatcher covering this fake's origin. */
  fetchFn: typeof fetch;
  /** Count of successful token mints (not discovery). */
  tokenRequestCount: () => number;
  /** Invalidate one issued access token (resource 401 simulation). */
  revokeAccessToken: (accessToken: string) => void;
  /** Invalidate every issued access token for this fake. */
  revokeAllAccessTokens: () => void;
  /** Mark the client suspended so new mints fail. */
  suspendClient: () => void;
  /** Clear assertion jti replay set (test isolation). */
  clearAssertionReplay: () => void;
  /** Whether an access token is currently considered active. */
  isAccessTokenActive: (accessToken: string) => boolean;
};

type IssuedToken = {
  accessToken: string;
  clientId: string;
  expiresAt: number;
  revoked: boolean;
};

function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}

function oauthError(error: string, status: number, description?: string): Response {
  return jsonResponse(
    {
      error,
      ...(description ? { error_description: description } : {}),
    },
    status,
  );
}

/**
 * Create a deterministic in-memory fake PACI server for machine-token tests.
 */
export async function createPaciFakeServer(
  options: PaciFakeServerOptions,
): Promise<PaciFakeServer> {
  const issuerUrl = options.issuerUrl.replace(/\/$/u, "");
  const tokenPath = options.tokenPath ?? "/oauth/token";
  const tokenEndpoint = `${issuerUrl}${tokenPath}`;
  const discoveryUrl = `${issuerUrl}/.well-known/oauth-authorization-server`;
  const jwksUrl = `${issuerUrl}/.well-known/jwks.json`;
  const introspectionUrl = `${issuerUrl}/oauth/introspect`;
  const expiresInSeconds = options.expiresInSeconds ?? PACI_FAKE_ACCESS_TOKEN_EXPIRES_IN_SECONDS;
  const serverKeys = options.serverKeys ?? (await createPaciFakeEs256KeyPair());
  const clientPublicKey = await importSPKI(options.clientPublicKeyPem, "ES256");
  const now = options.now ?? Date.now;

  const seenAssertionJtis = new Set<string>();
  const issuedTokens = new Map<string, IssuedToken>();
  let tokenRequestCount = 0;
  let clientSuspended = false;

  const grantTypes = options.omitClientCredentials
    ? ["authorization_code"]
    : ["client_credentials"];
  const authMethods = options.omitPrivateKeyJwt ? ["client_secret_basic"] : ["private_key_jwt"];

  const metadata = {
    issuer: issuerUrl,
    token_endpoint: tokenEndpoint,
    jwks_uri: jwksUrl,
    introspection_endpoint: introspectionUrl,
    grant_types_supported: grantTypes,
    token_endpoint_auth_methods_supported: authMethods,
    response_types_supported: options.omitClientCredentials ? ["code"] : [],
  };

  async function handleToken(request: Request): Promise<Response> {
    tokenRequestCount += 1;
    if (clientSuspended) {
      return oauthError("invalid_client", 401, "client suspended");
    }
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("application/x-www-form-urlencoded")) {
      return oauthError("invalid_request", 400, "expected form body");
    }
    const form = new URLSearchParams(await request.text());
    if (form.get("grant_type") !== "client_credentials") {
      return oauthError("unsupported_grant_type", 400);
    }
    if (form.get("client_assertion_type") !== CLIENT_ASSERTION_TYPE) {
      return oauthError("invalid_request", 400, "unsupported client_assertion_type");
    }
    const assertion = form.get("client_assertion");
    if (!assertion) {
      return oauthError("invalid_client", 401, "missing client_assertion");
    }

    let payload: Record<string, unknown>;
    try {
      const verified = await compactVerify(assertion, clientPublicKey);
      payload = JSON.parse(new TextDecoder().decode(verified.payload)) as Record<string, unknown>;
    } catch {
      return oauthError("invalid_client", 401, "invalid client_assertion");
    }

    if (payload.iss !== options.clientId || payload.sub !== options.clientId) {
      return oauthError("invalid_client", 401, "iss/sub mismatch");
    }
    if (payload.aud !== tokenEndpoint) {
      return oauthError("invalid_client", 401, "aud mismatch");
    }
    if (typeof payload.jti !== "string" || payload.jti.length === 0) {
      return oauthError("invalid_client", 401, "missing jti");
    }
    if (seenAssertionJtis.has(payload.jti)) {
      return oauthError("invalid_client", 401, "assertion jti replay");
    }
    seenAssertionJtis.add(payload.jti);

    const nowMs = now();
    const nowSec = Math.floor(nowMs / 1000);
    if (typeof payload.exp !== "number" || payload.exp <= nowSec) {
      return oauthError("invalid_client", 401, "assertion expired");
    }
    if (typeof payload.iat !== "number") {
      return oauthError("invalid_client", 401, "missing iat");
    }

    const accessToken = `paci-fake-at-${randomUUID()}`;
    issuedTokens.set(accessToken, {
      accessToken,
      clientId: options.clientId,
      expiresAt: nowMs + expiresInSeconds * 1000,
      revoked: false,
    });

    const body: Record<string, unknown> = {
      access_token: accessToken,
      token_type: "Bearer",
      expires_in: expiresInSeconds,
    };
    if (options.includeRefreshToken) {
      body.refresh_token = `paci-fake-rt-${randomUUID()}`;
    }
    return jsonResponse(body);
  }

  async function handleIntrospect(request: Request): Promise<Response> {
    const form = new URLSearchParams(await request.text());
    const token = form.get("token") ?? "";
    const issued = issuedTokens.get(token);
    if (!issued || issued.revoked || issued.expiresAt <= now()) {
      return jsonResponse({ active: false });
    }
    return jsonResponse({
      active: true,
      client_id: issued.clientId,
      token_type: "Bearer",
      exp: Math.floor(issued.expiresAt / 1000),
    });
  }

  const fetchFn: typeof fetch = async (input, init) => {
    const request = input instanceof Request ? input : new Request(input, init);
    const url = new URL(request.url);
    if (url.origin !== new URL(issuerUrl).origin) {
      return new Response("not found", { status: 404 });
    }
    if (url.pathname === "/.well-known/oauth-authorization-server" && request.method === "GET") {
      return jsonResponse(metadata);
    }
    if (url.pathname === "/.well-known/jwks.json" && request.method === "GET") {
      return jsonResponse({ keys: [serverKeys.publicJwk] });
    }
    if (url.pathname === tokenPath && request.method === "POST") {
      return await handleToken(request);
    }
    if (url.pathname === "/oauth/introspect" && request.method === "POST") {
      return await handleIntrospect(request);
    }
    return new Response("not found", { status: 404 });
  };

  return {
    issuerUrl,
    discoveryUrl,
    tokenEndpoint,
    jwksUrl,
    introspectionUrl,
    fetchFn,
    tokenRequestCount: () => tokenRequestCount,
    revokeAccessToken: (accessToken) => {
      const issued = issuedTokens.get(accessToken);
      if (issued) {
        issued.revoked = true;
      }
    },
    revokeAllAccessTokens: () => {
      for (const issued of issuedTokens.values()) {
        issued.revoked = true;
      }
    },
    suspendClient: () => {
      clientSuspended = true;
    },
    clearAssertionReplay: () => {
      seenAssertionJtis.clear();
    },
    isAccessTokenActive: (accessToken) => {
      const issued = issuedTokens.get(accessToken);
      return Boolean(issued && !issued.revoked && issued.expiresAt > now());
    },
  };
}
