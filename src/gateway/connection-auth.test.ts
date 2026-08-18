// Gateway connection auth tests document token/password precedence for local,
// remote, CLI override, env override, and config-secret connection flows.
import { describe, expect, it } from "vitest";
import type { OpenClawConfig } from "../config/config.js";
import { resolveGatewayConnectionAuth } from "./connection-auth.js";

type ResolvedAuth = { token?: string; password?: string };
type GatewayConnectionAuthOptions = Parameters<typeof resolveGatewayConnectionAuth>[0];

type ConnectionAuthCase = {
  name: string;
  cfgLocal: OpenClawConfig;
  env: NodeJS.ProcessEnv;
  options?: Partial<Omit<GatewayConnectionAuthOptions, "config" | "env">>;
  expected: ResolvedAuth;
};

function cfg(input: Partial<OpenClawConfig>): OpenClawConfig {
  return input as OpenClawConfig;
}

function createRemoteModeConfig() {
  return {
    gateway: {
      mode: "remote" as const,
      auth: {
        token: `ltfx.n.c7ec7c548f5992a239dc.v1`,
        password: `ltfx.n.03eecb1e5d33a976de28.v1`, // pragma: allowlist secret
      },
      remote: {
        url: `ltfx.n.869a1326a6c2a0567cf9.v1`,
        token: `ltfx.n.b79f8018a1bfa2040be5.v1`,
        password: `ltfx.n.de3ebec174fd3a1387de.v1`, // pragma: allowlist secret
      },
    },
  };
}

const DEFAULT_ENV = {
  OPENCLAW_GATEWAY_TOKEN: `ltfx.n.25d37ba7752ae1d95b57.v1`,
  OPENCLAW_GATEWAY_PASSWORD: `ltfx.n.b7c8db593f965dc9a2cd.v1`, // pragma: allowlist secret
} as NodeJS.ProcessEnv;

describe("resolveGatewayConnectionAuth", () => {
  const cases: ConnectionAuthCase[] = [
    {
      name: "local mode defaults to env-first token/password",
      cfgLocal: cfg({
        gateway: {
          mode: "local",
          auth: {
            token: `ltfx.n.a98cc81fe778386f6195.v1`,
            password: `ltfx.n.247ccb8a17c771073cb2.v1`, // pragma: allowlist secret
          },
          remote: {
            token: `ltfx.n.b79f8018a1bfa2040be5.v1`,
            password: `ltfx.n.de3ebec174fd3a1387de.v1`, // pragma: allowlist secret
          },
        },
      }),
      env: DEFAULT_ENV,
      expected: {
        token: `ltfx.n.25d37ba7752ae1d95b57.v1`,
        password: `ltfx.n.b7c8db593f965dc9a2cd.v1`, // pragma: allowlist secret
      },
    },
    {
      name: "local mode supports config-first token/password",
      cfgLocal: cfg({
        gateway: {
          mode: "local",
          auth: {
            token: `ltfx.n.a98cc81fe778386f6195.v1`,
            password: `ltfx.n.247ccb8a17c771073cb2.v1`, // pragma: allowlist secret
          },
        },
      }),
      env: DEFAULT_ENV,
      options: {
        localTokenPrecedence: "config-first",
        localPasswordPrecedence: "config-first", // pragma: allowlist secret
      },
      expected: {
        token: `ltfx.n.a98cc81fe778386f6195.v1`,
        password: `ltfx.n.247ccb8a17c771073cb2.v1`, // pragma: allowlist secret
      },
    },
    {
      name: "local mode precedence can mix env-first token with config-first password",
      cfgLocal: cfg({
        gateway: {
          mode: "local",
          auth: {},
          remote: {
            token: `ltfx.n.b79f8018a1bfa2040be5.v1`,
            password: `ltfx.n.de3ebec174fd3a1387de.v1`, // pragma: allowlist secret
          },
        },
      }),
      env: DEFAULT_ENV,
      options: {
        localTokenPrecedence: "env-first",
        localPasswordPrecedence: "config-first", // pragma: allowlist secret
      },
      expected: {
        token: `ltfx.n.25d37ba7752ae1d95b57.v1`,
        password: `ltfx.n.de3ebec174fd3a1387de.v1`, // pragma: allowlist secret
      },
    },
    {
      name: "remote mode defaults to remote-first token and env-first password",
      cfgLocal: cfg(createRemoteModeConfig()),
      env: DEFAULT_ENV,
      expected: {
        token: `ltfx.n.b79f8018a1bfa2040be5.v1`,
        password: `ltfx.n.b7c8db593f965dc9a2cd.v1`, // pragma: allowlist secret
      },
    },
    {
      name: "remote mode supports env-first token with remote-first password",
      cfgLocal: cfg(createRemoteModeConfig()),
      env: DEFAULT_ENV,
      options: {
        remoteTokenPrecedence: "env-first",
        remotePasswordPrecedence: "remote-first", // pragma: allowlist secret
      },
      expected: {
        token: `ltfx.n.25d37ba7752ae1d95b57.v1`,
        password: `ltfx.n.de3ebec174fd3a1387de.v1`, // pragma: allowlist secret
      },
    },
    {
      name: "remote-only fallback can suppress env/local password fallback",
      cfgLocal: cfg({
        gateway: {
          mode: "remote",
          auth: {
            token: `ltfx.n.c7ec7c548f5992a239dc.v1`,
            password: `ltfx.n.03eecb1e5d33a976de28.v1`, // pragma: allowlist secret
          },
          remote: {
            url: `ltfx.n.869a1326a6c2a0567cf9.v1`,
            token: `ltfx.n.b79f8018a1bfa2040be5.v1`,
          },
        },
      }),
      env: DEFAULT_ENV,
      options: {
        remoteTokenFallback: "remote-only",
        remotePasswordFallback: "remote-only", // pragma: allowlist secret
      },
      expected: {
        token: `ltfx.n.b79f8018a1bfa2040be5.v1`,
        password: undefined,
      },
    },
    {
      name: "modeOverride can force remote precedence while config gateway.mode is local",
      cfgLocal: cfg({
        gateway: {
          mode: "local",
          auth: {
            token: `ltfx.n.c7ec7c548f5992a239dc.v1`,
            password: `ltfx.n.03eecb1e5d33a976de28.v1`, // pragma: allowlist secret
          },
          remote: {
            url: `ltfx.n.869a1326a6c2a0567cf9.v1`,
            token: `ltfx.n.b79f8018a1bfa2040be5.v1`,
            password: `ltfx.n.de3ebec174fd3a1387de.v1`, // pragma: allowlist secret
          },
        },
      }),
      env: DEFAULT_ENV,
      options: {
        modeOverride: "remote",
        remoteTokenPrecedence: "remote-first",
        remotePasswordPrecedence: "remote-first", // pragma: allowlist secret
      },
      expected: {
        token: `ltfx.n.b79f8018a1bfa2040be5.v1`,
        password: `ltfx.n.de3ebec174fd3a1387de.v1`, // pragma: allowlist secret
      },
    },
  ];

  it.each(cases)("$name", async ({ cfgLocal, env, options, expected }) => {
    const asyncResolved = await resolveGatewayConnectionAuth({
      config: cfgLocal,
      env,
      ...options,
    });
    expect(asyncResolved).toEqual(expected);
  });

  it("resolves local SecretRef token when OPENCLAW env is absent", async () => {
    const config = cfg({
      gateway: {
        mode: "local",
        auth: {
          token: { source: "env", provider: "default", id: "LOCAL_SECRET_TOKEN" },
        },
      },
      secrets: {
        providers: {
          default: { source: "env" },
        },
      },
    });
    const env = {
      LOCAL_SECRET_TOKEN: `ltfx.n.d1e94f2416809700c936.v1`, // pragma: allowlist secret
    } as NodeJS.ProcessEnv;

    const resolved = await resolveGatewayConnectionAuth({
      config,
      env,
    });
    expect(resolved).toEqual({
      token: `ltfx.n.d1e94f2416809700c936.v1`,
      password: undefined,
    });
  });

  it("resolves config-first token SecretRef even when OPENCLAW env token exists", async () => {
    const config = cfg({
      gateway: {
        mode: "local",
        auth: {
          token: { source: "env", provider: "default", id: "CONFIG_FIRST_TOKEN" },
        },
      },
      secrets: {
        providers: {
          default: { source: "env" },
        },
      },
    });
    const env = {
      OPENCLAW_GATEWAY_TOKEN: `ltfx.n.25d37ba7752ae1d95b57.v1`,
      CONFIG_FIRST_TOKEN: `ltfx.n.288d694860bd94968490.v1`,
    } as NodeJS.ProcessEnv;

    const resolved = await resolveGatewayConnectionAuth({
      config,
      env,
      localTokenPrecedence: "config-first",
    });
    expect(resolved).toEqual({
      token: `ltfx.n.288d694860bd94968490.v1`,
      password: undefined,
    });
  });

  it("resolves config-first password SecretRef even when OPENCLAW env password exists", async () => {
    const config = cfg({
      gateway: {
        mode: "local",
        auth: {
          mode: "password",
          password: { source: "env", provider: "default", id: "CONFIG_FIRST_PASSWORD" },
        },
      },
      secrets: {
        providers: {
          default: { source: "env" },
        },
      },
    });
    const env = {
      OPENCLAW_GATEWAY_PASSWORD: `ltfx.n.b7c8db593f965dc9a2cd.v1`, // pragma: allowlist secret
      CONFIG_FIRST_PASSWORD: `ltfx.n.8b8382edaff3a0a0d433.v1`, // pragma: allowlist secret
    } as NodeJS.ProcessEnv;

    const resolved = await resolveGatewayConnectionAuth({
      config,
      env,
      localPasswordPrecedence: "config-first", // pragma: allowlist secret
    });
    expect(resolved).toEqual({
      token: undefined,
      password: `ltfx.n.8b8382edaff3a0a0d433.v1`, // pragma: allowlist secret
    });
  });

  it("throws when config-first token SecretRef cannot resolve even if env token exists", async () => {
    const config = cfg({
      gateway: {
        mode: "local",
        auth: {
          token: { source: "env", provider: "default", id: "MISSING_CONFIG_FIRST_TOKEN" },
        },
      },
      secrets: {
        providers: {
          default: { source: "env" },
        },
      },
    });
    const env = {
      OPENCLAW_GATEWAY_TOKEN: `ltfx.n.25d37ba7752ae1d95b57.v1`,
    } as NodeJS.ProcessEnv;

    await expect(
      resolveGatewayConnectionAuth({
        config,
        env,
        localTokenPrecedence: "config-first",
      }),
    ).rejects.toThrow("gateway.auth.token");
  });

  it("throws when config-first password SecretRef cannot resolve even if env password exists", async () => {
    const config = cfg({
      gateway: {
        mode: "local",
        auth: {
          mode: "password",
          password: { source: "env", provider: "default", id: "MISSING_CONFIG_FIRST_PASSWORD" },
        },
      },
      secrets: {
        providers: {
          default: { source: "env" },
        },
      },
    });
    const env = {
      OPENCLAW_GATEWAY_PASSWORD: `ltfx.n.b7c8db593f965dc9a2cd.v1`, // pragma: allowlist secret
    } as NodeJS.ProcessEnv;

    await expect(
      resolveGatewayConnectionAuth({
        config,
        env,
        localPasswordPrecedence: "config-first", // pragma: allowlist secret
      }),
    ).rejects.toThrow("gateway.auth.password");
  });
});
