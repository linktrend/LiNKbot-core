// Probe auth tests cover safe credential resolution, unresolved-secret warnings,
// local/remote target selection, and redacted auth payload handling.
import { describe, expect, it } from "vitest";
import type { OpenClawConfig } from "../config/config.js";
import {
  resolveGatewayProbeAuthSafe,
  resolveGatewayProbeAuthSafeWithSecretInputs,
  resolveGatewayProbeTarget,
  resolveGatewayProbeAuthWithSecretInputs,
} from "./probe-auth.js";

const EMPTY_PROBE_AUTH = {
  token: undefined,
  password: undefined,
};

function envSecretRef(id: string) {
  return { source: "env", provider: "default", id } as const;
}

function tokenAuthConfig(id: string) {
  return {
    mode: "token",
    token: envSecretRef(id),
  } as const;
}

function configWithDefaultEnvProvider(gateway: NonNullable<OpenClawConfig["gateway"]>) {
  return {
    gateway,
    secrets: {
      providers: {
        default: { source: "env" },
      },
    },
  } as OpenClawConfig;
}

function resolveSafeProbeAuth(cfg: OpenClawConfig, mode: "local" | "remote" = "local") {
  return resolveGatewayProbeAuthSafe({
    cfg,
    mode,
    env: {} as NodeJS.ProcessEnv,
  });
}

function expectUnresolvedProbeTokenWarning(cfg: OpenClawConfig) {
  const result = resolveSafeProbeAuth(cfg);

  expect(result.auth).toStrictEqual({});
  expect(result.warning).toContain("gateway.auth.token");
  expect(result.warning).toContain("unresolved");
}

describe("resolveGatewayProbeAuthSafe", () => {
  it("returns probe auth credentials when available", () => {
    const result = resolveSafeProbeAuth({
      gateway: {
        auth: {
          token: `ltfx.n.e6c02a5742ea9d4de588.v1`,
        },
      },
    } as OpenClawConfig);

    expect(result).toEqual({
      auth: {
        token: `ltfx.n.e6c02a5742ea9d4de588.v1`,
        password: undefined,
      },
    });
  });

  it("returns warning and empty auth when token SecretRef is unresolved", () => {
    expectUnresolvedProbeTokenWarning(
      configWithDefaultEnvProvider({
        auth: tokenAuthConfig("MISSING_GATEWAY_TOKEN"),
      }),
    );
  });

  it("does not fall through to remote token when local token SecretRef is unresolved", () => {
    expectUnresolvedProbeTokenWarning(
      configWithDefaultEnvProvider({
        mode: "local",
        auth: tokenAuthConfig("MISSING_GATEWAY_TOKEN"),
        remote: {
          token: `ltfx.n.b79f8018a1bfa2040be5.v1`,
        },
      }),
    );
  });

  it("does not fall through to remote credentials for local probes", () => {
    const result = resolveSafeProbeAuth({
      gateway: {
        mode: "local",
        remote: {
          url: `ltfx.n.2ec8b0b0f4c7fc92b531.v1`,
          token: `ltfx.n.b79f8018a1bfa2040be5.v1`,
          password: `ltfx.n.de3ebec174fd3a1387de.v1`, // pragma: allowlist secret
        },
      },
    } as OpenClawConfig);

    expect(result).toEqual({
      auth: EMPTY_PROBE_AUTH,
    });
  });

  it("ignores unresolved local token SecretRef in remote mode when remote-only auth is requested", () => {
    const result = resolveSafeProbeAuth(
      configWithDefaultEnvProvider({
        mode: "remote",
        remote: {
          url: `ltfx.n.2ec8b0b0f4c7fc92b531.v1`,
        },
        auth: tokenAuthConfig("MISSING_LOCAL_TOKEN"),
      }),
      "remote",
    );

    expect(result).toEqual({
      auth: EMPTY_PROBE_AUTH,
    });
  });
});

describe("resolveGatewayProbeTarget", () => {
  it("falls back to local probe mode when remote mode is configured without remote url", () => {
    expect(
      resolveGatewayProbeTarget({
        gateway: {
          mode: "remote",
        },
      } as OpenClawConfig),
    ).toEqual({
      gatewayMode: "remote",
      mode: "local",
      remoteUrlMissing: true,
    });
  });

  it("keeps remote probe mode when remote url is configured", () => {
    expect(
      resolveGatewayProbeTarget({
        gateway: {
          mode: "remote",
          remote: {
            url: `ltfx.n.2ec8b0b0f4c7fc92b531.v1`,
          },
        },
      } as OpenClawConfig),
    ).toEqual({
      gatewayMode: "remote",
      mode: "remote",
      remoteUrlMissing: false,
    });
  });
});

describe("resolveGatewayProbeAuthSafeWithSecretInputs", () => {
  it("resolves env SecretRef token via async secret-inputs path", async () => {
    const result = await resolveGatewayProbeAuthSafeWithSecretInputs({
      cfg: configWithDefaultEnvProvider({
        auth: tokenAuthConfig("OPENCLAW_GATEWAY_TOKEN"),
      }),
      mode: "local",
      env: {
        OPENCLAW_GATEWAY_TOKEN: `ltfx.n.094c84a8c26dc35bb20c.v1`,
      } as NodeJS.ProcessEnv,
    });

    expect(result.warning).toBeUndefined();
    expect(result.auth).toEqual({
      token: `ltfx.n.094c84a8c26dc35bb20c.v1`,
      password: undefined,
    });
  });

  it("returns empty auth without warning for gateway.remote SecretRefs in local probes", async () => {
    const result = await resolveGatewayProbeAuthSafeWithSecretInputs({
      cfg: configWithDefaultEnvProvider({
        mode: "local",
        remote: {
          url: `ltfx.n.2ec8b0b0f4c7fc92b531.v1`,
          token: envSecretRef("REMOTE_GATEWAY_TOKEN"),
        },
      }),
      mode: "local",
      env: {
        REMOTE_GATEWAY_TOKEN: `ltfx.n.b79f8018a1bfa2040be5.v1`,
      } as NodeJS.ProcessEnv,
    });

    expect(result.warning).toBeUndefined();
    expect(result.auth).toEqual({
      ...EMPTY_PROBE_AUTH,
    });
  });

  it("returns warning and empty auth when SecretRef cannot be resolved via async path", async () => {
    const result = await resolveGatewayProbeAuthSafeWithSecretInputs({
      cfg: configWithDefaultEnvProvider({
        auth: tokenAuthConfig("MISSING_TOKEN_XYZ"),
      }),
      mode: "local",
      env: {} as NodeJS.ProcessEnv,
    });

    expect(result.auth).toStrictEqual({});
    expect(result.warning).toContain("gateway.auth.token");
    expect(result.warning).toContain("unresolved");
  });
});

describe("resolveGatewayProbeAuthWithSecretInputs", () => {
  it("resolves local probe SecretRef values before shared credential selection", async () => {
    const auth = await resolveGatewayProbeAuthWithSecretInputs({
      cfg: configWithDefaultEnvProvider({
        auth: tokenAuthConfig("DAEMON_GATEWAY_TOKEN"),
      }),
      mode: "local",
      env: {
        DAEMON_GATEWAY_TOKEN: `ltfx.n.61306217baaba12ed554.v1`,
      } as NodeJS.ProcessEnv,
    });

    expect(auth).toEqual({
      token: `ltfx.n.61306217baaba12ed554.v1`,
      password: undefined,
    });
  });
});
