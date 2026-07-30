// Machine-token runtime facade smoke: export shapes + Authorization header helper.
import { describe, expect, it } from "vitest";
import {
  assertMachineTokenIssuerUrl,
  authorizationHeaderFromMachineToken,
  buildMachineTokenDiscoveryUrl,
  clearMachineTokenCache,
  invalidateMachineTokenCache,
  resolveMachineTokenAccess,
  withMachineTokenBearer,
  type ResolvedMachineToken,
} from "./machine-token-runtime.js";

describe("plugin-sdk machine-token-runtime", () => {
  it("exports the machine-token runtime surface", () => {
    expect(resolveMachineTokenAccess).toBeTypeOf("function");
    expect(invalidateMachineTokenCache).toBeTypeOf("function");
    expect(clearMachineTokenCache).toBeTypeOf("function");
    expect(withMachineTokenBearer).toBeTypeOf("function");
    expect(assertMachineTokenIssuerUrl).toBeTypeOf("function");
    expect(buildMachineTokenDiscoveryUrl).toBeTypeOf("function");
    expect(authorizationHeaderFromMachineToken).toBeTypeOf("function");
  });

  it("builds a Bearer Authorization header without mutating the token", () => {
    const token: ResolvedMachineToken = {
      bindingId: "binding-a",
      accessToken: "mt-access-token",
      expiresAt: Date.now() + 60_000,
      tokenType: "Bearer",
    };

    expect(authorizationHeaderFromMachineToken(token)).toEqual({
      authorization: "Bearer mt-access-token",
    });
    expect(token.accessToken).toBe("mt-access-token");
  });
});
