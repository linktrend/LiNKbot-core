// Android node policy-source tests document when clients fetch remote capability
// policy versus trusting local loopback gateway configuration.
import { describe, expect, it } from "vitest";
import { shouldFetchRemotePolicyConfig } from "../../test/helpers/gateway/android-node-capabilities-policy-source.js";
import type { GatewayConnectionDetails } from "./call.js";

function details(overrides: Partial<GatewayConnectionDetails>): GatewayConnectionDetails {
  return {
    url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
    urlSource: "local loopback",
    message: "test",
    ...overrides,
  };
}

describe("shouldFetchRemotePolicyConfig", () => {
  it("returns false for local loopback config", () => {
    expect(shouldFetchRemotePolicyConfig(details({ urlSource: "local loopback" }))).toBe(false);
  });

  it("returns true for config-driven remote urls even if loopback-tunneled", () => {
    expect(
      shouldFetchRemotePolicyConfig(
        details({ url: `ltfx.n.0edbee82f0824a1ed09b.v1`, urlSource: "config gateway.remote.url" }),
      ),
    ).toBe(true);
  });

  it("returns true for env and cli overrides", () => {
    expect(shouldFetchRemotePolicyConfig(details({ urlSource: "env OPENCLAW_GATEWAY_URL" }))).toBe(
      true,
    );
    expect(shouldFetchRemotePolicyConfig(details({ urlSource: "cli --url" }))).toBe(true);
  });

  it("returns true for remote fallback/misconfigured cases that did not use local loopback source", () => {
    expect(
      shouldFetchRemotePolicyConfig(
        details({ urlSource: "missing gateway.remote.url (fallback local)" }),
      ),
    ).toBe(true);
  });
});
