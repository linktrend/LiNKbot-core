/**
 * Gateway server test-helper coverage.
 */
import { describe, expect, it } from "vitest";
import { testOnlyResolveAuthTokenForSignature } from "./test-helpers.server.js";

describe("testOnlyResolveAuthTokenForSignature", () => {
  it("matches connect auth precedence for bootstrap tokens", () => {
    expect(
      testOnlyResolveAuthTokenForSignature({
        token: undefined,
        bootstrapToken: `ltfx.n.c72773a4ddf81c3ad2b8.v1`,
        deviceToken: `ltfx.n.73fff793651a92729a85.v1`,
      }),
    ).toBe("bootstrap-token");
  });

  it("still prefers the shared token when present", () => {
    expect(
      testOnlyResolveAuthTokenForSignature({
        token: `ltfx.n.fad34a6f30260e5a8db3.v1`,
        bootstrapToken: `ltfx.n.c72773a4ddf81c3ad2b8.v1`,
        deviceToken: `ltfx.n.73fff793651a92729a85.v1`,
      }),
    ).toBe("shared-token");
  });
});
