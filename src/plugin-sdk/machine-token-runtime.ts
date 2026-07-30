/**
 * Runtime SDK subpath for machine-token (client_credentials + private_key_jwt) access.
 *
 * Plugins resolve access tokens through this seam — never import `src/agents/*` directly.
 */
import type { ResolvedMachineToken } from "../agents/machine-token-types.js";

export type { MachineTokenBinding, ResolvedMachineToken } from "../agents/machine-token-types.js";

export {
  clearMachineTokenCache,
  invalidateMachineTokenCache,
  resolveMachineTokenAccess,
} from "../agents/machine-token.js";

export {
  assertMachineTokenIssuerUrl,
  buildMachineTokenDiscoveryUrl,
} from "../agents/machine-token-discovery.js";

export { withMachineTokenBearer } from "../agents/machine-token-fetch.js";

/**
 * Build an Authorization header object from a resolved machine token.
 * Does not log or retain the access token beyond the returned value.
 */
export function authorizationHeaderFromMachineToken(token: ResolvedMachineToken): {
  authorization: string;
} {
  return { authorization: `Bearer ${token.accessToken}` };
}
