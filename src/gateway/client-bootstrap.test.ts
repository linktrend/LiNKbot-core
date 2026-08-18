// Gateway client bootstrap tests keep URL override provenance wired into shared
// auth resolution so CLI and env callers authenticate against the intended target.
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { resolveGatewayConnectionAuth } from "./connection-auth.js";

type AuthResolutionParams = Parameters<typeof resolveGatewayConnectionAuth>[0];

const mockState = vi.hoisted(() => ({
  buildGatewayConnectionDetails: vi.fn(),
  resolveGatewayConnectionAuth: vi.fn(),
}));

vi.mock("./connection-details.js", () => ({
  buildGatewayConnectionDetailsWithResolvers: (...args: unknown[]) =>
    mockState.buildGatewayConnectionDetails(...args),
}));

vi.mock("./connection-auth.js", () => ({
  resolveGatewayConnectionAuth: (...args: unknown[]) =>
    mockState.resolveGatewayConnectionAuth(...args),
}));
const { resolveGatewayClientBootstrap } = await import("./client-bootstrap.js");

function expectLastAuthResolutionParams(expected: {
  urlOverride?: string;
  urlOverrideSource?: "cli" | "env";
}) {
  const [params] = mockState.resolveGatewayConnectionAuth.mock.calls.at(-1) ?? [];
  if (params === undefined) {
    throw new Error("Expected shared auth resolution to be called");
  }
  const authParams = params as AuthResolutionParams;
  expect(authParams.env).toBe(process.env);
  expect(authParams.urlOverride).toBe(expected.urlOverride);
  expect(authParams.urlOverrideSource).toBe(expected.urlOverrideSource);
}

describe("resolveGatewayClientBootstrap", () => {
  beforeEach(() => {
    mockState.buildGatewayConnectionDetails.mockReset();
    mockState.resolveGatewayConnectionAuth.mockReset();
    mockState.resolveGatewayConnectionAuth.mockResolvedValue({
      token: undefined,
      password: undefined,
    });
  });

  it("passes cli override context into shared auth resolution", async () => {
    mockState.buildGatewayConnectionDetails.mockReturnValueOnce({
      url: `ltfx.n.7fe4a610c833de51b161.v1`,
      urlSource: "cli --url",
    });

    const result = await resolveGatewayClientBootstrap({
      config: {} as never,
      gatewayUrl: "wss://override.example/ws",
      env: process.env,
    });

    expect(result).toEqual({
      url: `ltfx.n.7fe4a610c833de51b161.v1`,
      urlSource: "cli --url",
      preauthHandshakeTimeoutMs: undefined,
      auth: {
        token: undefined,
        password: undefined,
      },
    });
    expectLastAuthResolutionParams({
      urlOverride: "wss://override.example/ws",
      urlOverrideSource: "cli",
    });
  });

  it("does not mark config-derived urls as overrides", async () => {
    mockState.buildGatewayConnectionDetails.mockReturnValue({
      url: `ltfx.n.220960bbd8d741e2dfde.v1`,
      urlSource: "config gateway.remote.url",
    });

    await resolveGatewayClientBootstrap({
      config: {} as never,
      env: process.env,
    });

    expectLastAuthResolutionParams({
      urlOverride: undefined,
      urlOverrideSource: undefined,
    });
  });
});
