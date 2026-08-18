// Startup auth tests cover weak-token rejection, startup auth repair, env secret
// references, and merged Tailscale gateway auth config.
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { OpenClawConfig } from "../config/config.js";
import { assertGatewayAuthNotKnownWeak } from "./known-weak-gateway-secrets.js";
import { ensureGatewayStartupAuth, mergeGatewayTailscaleConfig } from "./startup-auth.js";

const KNOWN_WEAK_GATEWAY_TOKEN_PLACEHOLDERS = [
  "change-me-to-a-long-random-token",
  "change-me-now",
] as const;

const mocks = vi.hoisted(() => ({
  replaceConfigFile: vi.fn(async (_params: { nextConfig: OpenClawConfig }) => {}),
}));

vi.mock("../config/mutate.js", () => ({
  replaceConfigFile: mocks.replaceConfigFile,
}));

vi.mock("../config/mutate.js", async () => {
  const actual = await vi.importActual<typeof import("../config/mutate.js")>("../config/mutate.js");
  return {
    ...actual,
    replaceConfigFile: mocks.replaceConfigFile,
  };
});

type StartupAuthInput = Parameters<typeof ensureGatewayStartupAuth>[0];
type StartupAuthResult = Awaited<ReturnType<typeof ensureGatewayStartupAuth>>;
type GatewayAuthConfig = NonNullable<NonNullable<OpenClawConfig["gateway"]>["auth"]>;
type GatewayAuthCheck = Parameters<typeof assertGatewayAuthNotKnownWeak>[0];

function emptyEnv(): NodeJS.ProcessEnv {
  return {} as NodeJS.ProcessEnv;
}

function gatewayEnvSecretRef(id: string) {
  return { source: "env" as const, provider: "default", id };
}

function gatewayAuthConfig(auth: GatewayAuthConfig): OpenClawConfig {
  return {
    gateway: { auth },
  };
}

function gatewayAuthConfigWithDefaultEnvProvider(auth: GatewayAuthConfig): OpenClawConfig {
  return {
    ...gatewayAuthConfig(auth),
    secrets: {
      providers: {
        default: { source: "env" },
      },
    },
  };
}

describe("mergeGatewayTailscaleConfig", () => {
  it("preserves explicit preserveFunnel overrides", () => {
    expect(
      mergeGatewayTailscaleConfig(
        { mode: "serve", resetOnExit: false, preserveFunnel: false },
        { preserveFunnel: true },
      ),
    ).toEqual({ mode: "serve", resetOnExit: false, preserveFunnel: true });
  });

  it("preserves explicit serviceName overrides", () => {
    expect(
      mergeGatewayTailscaleConfig(
        { mode: "serve", serviceName: "svc:old-openclaw", resetOnExit: false },
        { serviceName: "svc:openclaw" },
      ),
    ).toEqual({ mode: "serve", serviceName: "svc:openclaw", resetOnExit: false });
  });
});

describe("ensureGatewayStartupAuth", () => {
  async function runStartupAuth(
    params: Omit<StartupAuthInput, "env"> & { env?: NodeJS.ProcessEnv },
  ) {
    return ensureGatewayStartupAuth({
      env: emptyEnv(),
      ...params,
    });
  }

  function expectNoGeneratedToken(result: StartupAuthResult) {
    expect(result.generatedToken).toBeUndefined();
    expect(result.persistedGeneratedToken).toBe(false);
  }

  function expectEphemeralGeneratedToken(result: StartupAuthResult) {
    expect(result.generatedToken).toMatch(/^[0-9a-f]{48}$/);
    expect(result.persistedGeneratedToken).toBe(false);
    expect(result.auth.mode).toBe("token");
    expect(result.auth.token).toBe(result.generatedToken);
  }

  function expectResolvedPassword(result: StartupAuthResult, password: string) {
    expectNoGeneratedToken(result);
    expect(result.auth.mode).toBe("password");
    expect(result.auth.password).toBe(password);
  }

  async function expectEphemeralGeneratedTokenWhenOverridden(cfg: OpenClawConfig) {
    const result = await runStartupAuth({
      cfg,
      authOverride: { mode: "token" },
      persist: true,
    });

    expectEphemeralGeneratedToken(result);
    expect(mocks.replaceConfigFile).not.toHaveBeenCalled();
  }

  beforeEach(() => {
    vi.restoreAllMocks();
    mocks.replaceConfigFile.mockClear();
  });

  async function expectNoTokenGeneration(cfg: OpenClawConfig, mode: string) {
    const result = await runStartupAuth({
      cfg,
      persist: true,
    });

    expectNoGeneratedToken(result);
    expect(result.auth.mode).toBe(mode);
    expect(mocks.replaceConfigFile).not.toHaveBeenCalled();
  }

  async function expectResolvedToken(params: {
    cfg: OpenClawConfig;
    env: NodeJS.ProcessEnv;
    authOverride?: StartupAuthInput["authOverride"];
    expectedToken: string;
    expectedConfiguredToken?: unknown;
  }) {
    const result = await runStartupAuth({
      cfg: params.cfg,
      env: params.env,
      authOverride: params.authOverride,
      persist: true,
    });

    expectNoGeneratedToken(result);
    expect(result.auth.mode).toBe("token");
    expect(result.auth.token).toBe(params.expectedToken);
    if ("expectedConfiguredToken" in params) {
      expect(result.cfg.gateway?.auth?.token).toEqual(params.expectedConfiguredToken);
    }
    expect(mocks.replaceConfigFile).not.toHaveBeenCalled();
  }

  function createMissingGatewayTokenSecretRefConfig(): OpenClawConfig {
    return gatewayAuthConfigWithDefaultEnvProvider({
      mode: "token",
      token: gatewayEnvSecretRef("MISSING_GW_TOKEN"),
    });
  }

  it("generates a runtime token without persisting when startup auth is missing", async () => {
    const result = await runStartupAuth({
      cfg: {},
      persist: true,
    });

    expectEphemeralGeneratedToken(result);
    expect(result.cfg.gateway?.auth?.token).toBe(result.generatedToken);
    expect(mocks.replaceConfigFile).not.toHaveBeenCalled();
  });

  it("does not generate when token already exists", async () => {
    await expectResolvedToken({
      cfg: gatewayAuthConfig({ mode: "token", token: `ltfx.n.81e61c0285659b608bb9.v1` }),
      env: emptyEnv(),
      expectedToken: `ltfx.n.81e61c0285659b608bb9.v1`,
    });
  });

  it("does not generate in password mode", async () => {
    await expectNoTokenGeneration(gatewayAuthConfig({ mode: "password" }), "password");
  });

  it("resolves gateway.auth.password SecretRef before startup auth checks", async () => {
    const configuredPassword = gatewayEnvSecretRef("GW_PASSWORD");
    const result = await runStartupAuth({
      cfg: gatewayAuthConfigWithDefaultEnvProvider({
        mode: "password",
        password: configuredPassword,
      }),
      env: {
        GW_PASSWORD: `ltfx.n.b1eb3909e2f829bebf9e.v1`, // pragma: allowlist secret
      } as NodeJS.ProcessEnv,
      persist: true,
    });

    expectResolvedPassword(result, "resolved-password");
    expect(result.cfg.gateway?.auth?.password).toEqual(configuredPassword);
  });

  it("resolves gateway.auth.token SecretRef before startup auth checks", async () => {
    const configuredToken = gatewayEnvSecretRef("GW_TOKEN");
    await expectResolvedToken({
      cfg: gatewayAuthConfigWithDefaultEnvProvider({
        mode: "token",
        token: configuredToken,
      }),
      env: {
        GW_TOKEN: `ltfx.n.cad2ed06900405ac7d61.v1`,
      } as NodeJS.ProcessEnv,
      expectedToken: `ltfx.n.cad2ed06900405ac7d61.v1`,
      expectedConfiguredToken: configuredToken,
    });
  });

  it("resolves env-template gateway.auth.token before env-token short-circuiting", async () => {
    await expectResolvedToken({
      cfg: gatewayAuthConfig({ mode: "token", token: "${OPENCLAW_GATEWAY_TOKEN}" }),
      env: {
        OPENCLAW_GATEWAY_TOKEN: `ltfx.n.cad2ed06900405ac7d61.v1`,
      } as NodeJS.ProcessEnv,
      expectedToken: `ltfx.n.cad2ed06900405ac7d61.v1`,
      expectedConfiguredToken: "${OPENCLAW_GATEWAY_TOKEN}",
    });
  });

  it("uses OPENCLAW_GATEWAY_TOKEN without resolving configured token SecretRef", async () => {
    await expectResolvedToken({
      cfg: createMissingGatewayTokenSecretRefConfig(),
      env: {
        OPENCLAW_GATEWAY_TOKEN: `ltfx.n.62bee5457ffee6207e50.v1`,
      } as NodeJS.ProcessEnv,
      expectedToken: `ltfx.n.62bee5457ffee6207e50.v1`,
    });
  });

  it("fails when gateway.auth.token SecretRef is active and unresolved", async () => {
    await expect(
      runStartupAuth({
        cfg: createMissingGatewayTokenSecretRefConfig(),
        persist: true,
      }),
    ).rejects.toThrow(/MISSING_GW_TOKEN/i);
    expect(mocks.replaceConfigFile).not.toHaveBeenCalled();
  });

  it("requires explicit gateway.auth.mode when token and password are both configured", async () => {
    await expect(
      runStartupAuth({
        cfg: gatewayAuthConfig({
          token: `ltfx.n.81e61c0285659b608bb9.v1`,
          password: `ltfx.n.22e488acf9a186f29cef.v1`, // pragma: allowlist secret
        }),
        persist: true,
      }),
    ).rejects.toThrow(/gateway\.auth\.mode is unset/i);
    expect(mocks.replaceConfigFile).not.toHaveBeenCalled();
  });

  it("uses OPENCLAW_GATEWAY_PASSWORD without resolving configured password SecretRef", async () => {
    const result = await runStartupAuth({
      cfg: gatewayAuthConfigWithDefaultEnvProvider({
        mode: "password",
        password: gatewayEnvSecretRef("MISSING_GW_PASSWORD"),
      }),
      env: {
        OPENCLAW_GATEWAY_PASSWORD: `ltfx.n.1c2f5e6225edcf121d43.v1`, // pragma: allowlist secret
      } as NodeJS.ProcessEnv,
      persist: true,
    });

    expectResolvedPassword(result, "password-from-env");
  });

  it("does not resolve gateway.auth.password SecretRef when token mode is explicit", async () => {
    const cfg = gatewayAuthConfigWithDefaultEnvProvider({
      mode: "token",
      token: `ltfx.n.81e61c0285659b608bb9.v1`,
      password: { source: "env", provider: "missing", id: "GW_PASSWORD" },
    });

    await expectResolvedToken({
      cfg,
      env: emptyEnv(),
      expectedToken: `ltfx.n.81e61c0285659b608bb9.v1`,
    });
  });

  it("does not generate in trusted-proxy mode", async () => {
    await expectNoTokenGeneration(
      {
        gateway: {
          auth: {
            mode: "trusted-proxy",
            trustedProxy: { userHeader: "x-forwarded-user" },
          },
        },
      },
      "trusted-proxy",
    );
  });

  it("does not generate in explicit none mode", async () => {
    await expectNoTokenGeneration(
      {
        gateway: {
          auth: {
            mode: "none",
          },
        },
      },
      "none",
    );
  });

  it("treats undefined token override as no override", async () => {
    await expectResolvedToken({
      cfg: {
        gateway: {
          auth: {
            mode: "token",
            token: `ltfx.n.e7eb488c3d4e07f6b343.v1`,
          },
        },
      },
      env: emptyEnv(),
      authOverride: { mode: "token", token: undefined },
      expectedToken: `ltfx.n.e7eb488c3d4e07f6b343.v1`,
    });
  });

  it("keeps generated token ephemeral when runtime override flips explicit non-token mode", async () => {
    await expectEphemeralGeneratedTokenWhenOverridden({
      gateway: {
        auth: {
          mode: "password",
        },
      },
    });
  });

  it("keeps generated token ephemeral when runtime override flips explicit none mode", async () => {
    await expectEphemeralGeneratedTokenWhenOverridden({
      gateway: {
        auth: {
          mode: "none",
        },
      },
    });
  });

  it("keeps generated token ephemeral when runtime override flips implicit password mode", async () => {
    await expectEphemeralGeneratedTokenWhenOverridden({
      gateway: {
        auth: {
          password: `ltfx.n.22e488acf9a186f29cef.v1`, // pragma: allowlist secret
        },
      },
    });
  });

  it("keeps startup non-breaking when hooks token reuses gateway token resolved from env", async () => {
    const warn = vi.fn();
    const result = await runStartupAuth({
      cfg: {
        hooks: {
          enabled: true,
          token: `ltfx.n.1c36b35cf138f5ec56a0.v1`,
        },
      },
      env: {
        OPENCLAW_GATEWAY_TOKEN: `ltfx.n.1c36b35cf138f5ec56a0.v1`,
      } as NodeJS.ProcessEnv,
      warn,
    });

    expectNoGeneratedToken(result);
    expect(result.auth.mode).toBe("token");
    expect(result.auth.token).toBe("shared-gateway-token-1234567890");
    expect(warn).toHaveBeenCalledWith(expect.stringContaining("Security warning"));
    expect(warn).toHaveBeenCalledWith(expect.stringContaining("openclaw security audit"));
  });

  it("keeps startup non-breaking when hooks token reuses gateway password auth", async () => {
    const warn = vi.fn();
    const result = await runStartupAuth({
      cfg: {
        hooks: {
          enabled: true,
          token: `ltfx.n.1db5107c2c4372d8159b.v1`,
        },
        gateway: {
          auth: {
            mode: "password",
            password: `ltfx.n.1db5107c2c4372d8159b.v1`, // pragma: allowlist secret
          },
        },
      },
      warn,
    });

    expectResolvedPassword(result, "shared-gateway-password-1234567890");
    expect(warn).toHaveBeenCalledWith(expect.stringContaining("Security warning"));
  });

  it("allows distinct hooks token with gateway password auth during startup", async () => {
    const warn = vi.fn();
    const result = await runStartupAuth({
      cfg: {
        hooks: {
          enabled: true,
          token: `ltfx.n.8a08720a0d909870f562.v1`,
        },
        gateway: {
          auth: {
            mode: "password",
            password: `ltfx.n.1db5107c2c4372d8159b.v1`, // pragma: allowlist secret
          },
        },
      },
      warn,
    });

    expect(result.auth.mode).toBe("password");
    expectNoGeneratedToken(result);
    expect(warn).not.toHaveBeenCalled();
  });

  it.each(KNOWN_WEAK_GATEWAY_TOKEN_PLACEHOLDERS)(
    "rejects the published placeholder token %s supplied via environment",
    async (token) => {
      await expect(
        runStartupAuth({
          cfg: {},
          env: {
            OPENCLAW_GATEWAY_TOKEN: token,
          } as NodeJS.ProcessEnv,
        }),
      ).rejects.toThrow(/example placeholder/i);
      expect(mocks.replaceConfigFile).not.toHaveBeenCalled();
    },
  );

  it.each(KNOWN_WEAK_GATEWAY_TOKEN_PLACEHOLDERS)(
    "rejects the published placeholder token %s supplied via config",
    async (token) => {
      await expect(
        runStartupAuth({
          cfg: gatewayAuthConfig({ mode: "token", token }),
        }),
      ).rejects.toThrow(/example placeholder/i);
      expect(mocks.replaceConfigFile).not.toHaveBeenCalled();
    },
  );

  it("rejects the .env.example placeholder password supplied via config", async () => {
    await expect(
      runStartupAuth({
        cfg: gatewayAuthConfig({
          mode: "password",
          password: `ltfx.n.da7438354b7ce5068f4e.v1`, // pragma: allowlist secret
        }),
      }),
    ).rejects.toThrow(/example placeholder/i);
    expect(mocks.replaceConfigFile).not.toHaveBeenCalled();
  });

  it("accepts any non-placeholder token (negative control)", async () => {
    await expectResolvedToken({
      cfg: gatewayAuthConfig({ mode: "token", token: `ltfx.n.ea7db566f6e7f439a9a8.v1` }),
      env: emptyEnv(),
      expectedToken: `ltfx.n.ea7db566f6e7f439a9a8.v1`,
    });
  });
});

describe("assertGatewayAuthNotKnownWeak", () => {
  function expectKnownWeakAuthRejected(auth: GatewayAuthCheck) {
    expect(() => assertGatewayAuthNotKnownWeak(auth)).toThrow(/example placeholder/i);
  }

  function expectGatewayAuthAllowed(auth: GatewayAuthCheck) {
    expect(assertGatewayAuthNotKnownWeak(auth)).toBeUndefined();
  }

  beforeEach(() => {
    vi.restoreAllMocks();
    mocks.replaceConfigFile.mockClear();
  });

  it.each(KNOWN_WEAK_GATEWAY_TOKEN_PLACEHOLDERS)(
    "throws on the known-weak token sentinel %s",
    (token) => {
      expectKnownWeakAuthRejected({
        mode: "token",
        modeSource: "config",
        token,
        allowTailscale: false,
      });
    },
  );

  it("throws on the known-weak password sentinel", () => {
    expectKnownWeakAuthRejected({
      mode: "password",
      modeSource: "config",
      password: `ltfx.n.da7438354b7ce5068f4e.v1`, // pragma: allowlist secret
      allowTailscale: false,
    });
  });

  it.each(KNOWN_WEAK_GATEWAY_TOKEN_PLACEHOLDERS)(
    "rejects whitespace-padded placeholder token %s after trimming",
    (token) => {
      expectKnownWeakAuthRejected({
        mode: "token",
        modeSource: "config",
        token: `  ${token}  `,
        allowTailscale: false,
      });
    },
  );

  it("allows an empty token to fall through to generation path", () => {
    expectGatewayAuthAllowed({
      mode: "token",
      modeSource: "config",
      token: "",
      allowTailscale: false,
    });
  });

  it("allows a real token", () => {
    expectGatewayAuthAllowed({
      mode: "token",
      modeSource: "config",
      token: `ltfx.n.ea7db566f6e7f439a9a8.v1`,
      allowTailscale: false,
    });
  });

  it("allows the none mode", () => {
    expectGatewayAuthAllowed({
      mode: "none",
      modeSource: "default",
      allowTailscale: false,
    });
  });
});
