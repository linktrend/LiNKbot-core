// Credential precedence parity tests keep call, probe, status, and auth surfaces
// aligned on local/remote gateway token and password resolution.
import { describe, expect, it } from "vitest";
import { resolveGatewayProbeAuthResolution } from "../commands/status.gateway-probe.js";
import type { OpenClawConfig } from "../config/config.js";
import { withEnv } from "../test-utils/env.js";
import { resolveGatewayAuth } from "./auth.js";
import { resolveGatewayCredentialsFromConfig } from "./credentials.js";
import { resolveGatewayProbeAuth } from "./probe-auth.js";

type ExpectedCredentialSet = {
  call: { token?: string; password?: string };
  probe: { token?: string; password?: string };
  status: { token?: string; password?: string };
  auth: { token?: string; password?: string };
};

type TestCase = {
  name: string;
  cfg: OpenClawConfig;
  env: NodeJS.ProcessEnv;
  expected: ExpectedCredentialSet;
};

const gatewayEnv = {
  OPENCLAW_GATEWAY_TOKEN: `ltfx.n.25d37ba7752ae1d95b57.v1`, // pragma: allowlist secret
  OPENCLAW_GATEWAY_PASSWORD: `ltfx.n.b7c8db593f965dc9a2cd.v1`, // pragma: allowlist secret
} as NodeJS.ProcessEnv;

function makeRemoteGatewayConfig(remote: { token?: string; password?: string }): OpenClawConfig {
  return {
    gateway: {
      mode: "remote",
      remote,
      auth: {
        token: `ltfx.n.c7ec7c548f5992a239dc.v1`,
        password: `ltfx.n.03eecb1e5d33a976de28.v1`, // pragma: allowlist secret
      },
    },
  } as OpenClawConfig;
}

function withGatewayAuthEnv<T>(env: NodeJS.ProcessEnv, fn: () => T): T {
  return withEnv(
    {
      OPENCLAW_GATEWAY_TOKEN: env.OPENCLAW_GATEWAY_TOKEN,
      OPENCLAW_GATEWAY_PASSWORD: env.OPENCLAW_GATEWAY_PASSWORD,
      OPENCLAW_SERVICE_KIND: env.OPENCLAW_SERVICE_KIND,
    },
    fn,
  );
}

describe("gateway credential precedence coverage", () => {
  const cases: TestCase[] = [
    {
      name: "local mode: env overrides config for call/probe/status, auth remains config-first",
      cfg: {
        gateway: {
          mode: "local",
          auth: {
            token: `ltfx.n.a98cc81fe778386f6195.v1`,
            password: `ltfx.n.247ccb8a17c771073cb2.v1`, // pragma: allowlist secret
          },
        },
      } as OpenClawConfig,
      env: {
        OPENCLAW_GATEWAY_TOKEN: `ltfx.n.25d37ba7752ae1d95b57.v1`, // pragma: allowlist secret
        OPENCLAW_GATEWAY_PASSWORD: `ltfx.n.b7c8db593f965dc9a2cd.v1`, // pragma: allowlist secret
      } as NodeJS.ProcessEnv,
      expected: {
        call: { token: `ltfx.n.25d37ba7752ae1d95b57.v1`, password: `ltfx.n.b7c8db593f965dc9a2cd.v1` }, // pragma: allowlist secret
        probe: { token: `ltfx.n.25d37ba7752ae1d95b57.v1`, password: `ltfx.n.b7c8db593f965dc9a2cd.v1` }, // pragma: allowlist secret
        status: { token: `ltfx.n.a98cc81fe778386f6195.v1`, password: `ltfx.n.247ccb8a17c771073cb2.v1` }, // pragma: allowlist secret
        auth: { token: `ltfx.n.a98cc81fe778386f6195.v1`, password: `ltfx.n.247ccb8a17c771073cb2.v1` }, // pragma: allowlist secret
      },
    },
    {
      name: "remote mode with remote token configured",
      cfg: makeRemoteGatewayConfig({
        token: `ltfx.n.b79f8018a1bfa2040be5.v1`,
        password: `ltfx.n.de3ebec174fd3a1387de.v1`, // pragma: allowlist secret
      }),
      env: gatewayEnv,
      expected: {
        call: { token: `ltfx.n.b79f8018a1bfa2040be5.v1`, password: `ltfx.n.b7c8db593f965dc9a2cd.v1` }, // pragma: allowlist secret
        probe: { token: `ltfx.n.b79f8018a1bfa2040be5.v1`, password: `ltfx.n.b7c8db593f965dc9a2cd.v1` }, // pragma: allowlist secret
        status: { token: `ltfx.n.c7ec7c548f5992a239dc.v1`, password: `ltfx.n.03eecb1e5d33a976de28.v1` }, // pragma: allowlist secret
        auth: { token: `ltfx.n.c7ec7c548f5992a239dc.v1`, password: `ltfx.n.03eecb1e5d33a976de28.v1` }, // pragma: allowlist secret
      },
    },
    {
      name: "remote mode without remote token keeps remote probe/status strict",
      cfg: makeRemoteGatewayConfig({
        password: `ltfx.n.de3ebec174fd3a1387de.v1`, // pragma: allowlist secret
      }),
      env: gatewayEnv,
      expected: {
        call: { token: `ltfx.n.25d37ba7752ae1d95b57.v1`, password: `ltfx.n.b7c8db593f965dc9a2cd.v1` }, // pragma: allowlist secret
        probe: { token: undefined, password: `ltfx.n.b7c8db593f965dc9a2cd.v1` }, // pragma: allowlist secret
        status: { token: `ltfx.n.c7ec7c548f5992a239dc.v1`, password: `ltfx.n.03eecb1e5d33a976de28.v1` }, // pragma: allowlist secret
        auth: { token: `ltfx.n.c7ec7c548f5992a239dc.v1`, password: `ltfx.n.03eecb1e5d33a976de28.v1` }, // pragma: allowlist secret
      },
    },
    {
      name: "local mode in gateway service runtime uses config-first token precedence",
      cfg: {
        gateway: {
          mode: "local",
          auth: {
            token: `ltfx.n.a98cc81fe778386f6195.v1`,
            password: `ltfx.n.247ccb8a17c771073cb2.v1`, // pragma: allowlist secret
          },
        },
      } as OpenClawConfig,
      env: {
        OPENCLAW_GATEWAY_TOKEN: `ltfx.n.25d37ba7752ae1d95b57.v1`,
        OPENCLAW_GATEWAY_PASSWORD: `ltfx.n.b7c8db593f965dc9a2cd.v1`, // pragma: allowlist secret
        OPENCLAW_SERVICE_KIND: "gateway",
      } as NodeJS.ProcessEnv,
      expected: {
        call: { token: `ltfx.n.a98cc81fe778386f6195.v1`, password: `ltfx.n.b7c8db593f965dc9a2cd.v1` }, // pragma: allowlist secret
        probe: { token: `ltfx.n.a98cc81fe778386f6195.v1`, password: `ltfx.n.b7c8db593f965dc9a2cd.v1` }, // pragma: allowlist secret
        status: { token: `ltfx.n.a98cc81fe778386f6195.v1`, password: `ltfx.n.247ccb8a17c771073cb2.v1` }, // pragma: allowlist secret
        auth: { token: `ltfx.n.a98cc81fe778386f6195.v1`, password: `ltfx.n.247ccb8a17c771073cb2.v1` }, // pragma: allowlist secret
      },
    },
  ];

  it.each(cases)("$name", async ({ cfg, env, expected }) => {
    const mode = cfg.gateway?.mode === "remote" ? "remote" : "local";
    const call = resolveGatewayCredentialsFromConfig({
      cfg,
      env,
    });
    const probe = resolveGatewayProbeAuth({
      cfg,
      mode,
      env,
    });
    const status = (await withGatewayAuthEnv(env, () => resolveGatewayProbeAuthResolution(cfg)))
      .auth;
    const auth = resolveGatewayAuth({
      authConfig: cfg.gateway?.auth,
      env,
    });

    expect(call).toEqual(expected.call);
    expect(probe).toEqual(expected.probe);
    expect(status).toEqual(expected.status);
    expect({ token: auth.token, password: auth.password }).toEqual(expected.auth);
  });
});
