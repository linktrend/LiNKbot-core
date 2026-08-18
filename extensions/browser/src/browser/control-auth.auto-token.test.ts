// Browser tests cover control auth.auto token plugin behavior.
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import { expectGeneratedTokenPersistedToGatewayAuth } from "../../test-support.js";
import type { OpenClawConfig } from "../config/config.js";

const mocks = vi.hoisted(() => ({
  getRuntimeConfig: vi.fn<() => OpenClawConfig>(),
  writeConfigFile: vi.fn<(cfg: OpenClawConfig) => Promise<void>>(async (_cfg) => {}),
  replaceConfigFile: vi.fn(async ({ nextConfig }: { nextConfig: OpenClawConfig }) => {
    await mocks.writeConfigFile(nextConfig);
  }),
  mutateConfigFile: vi.fn(
    async (params: {
      mutate: (draft: OpenClawConfig, context: { snapshot: { path: string } }) => unknown;
    }) => {
      const draft = structuredClone(mocks.getRuntimeConfig());
      const result = await params.mutate(draft, { snapshot: { path: "/tmp/openclaw.json" } });
      await mocks.writeConfigFile(draft);
      return {
        path: "/tmp/openclaw.json",
        previousHash: "test-hash",
        persistedHash: "test-hash",
        snapshot: { path: "/tmp/openclaw.json" },
        nextConfig: draft,
        result,
        attempts: 1,
        afterWrite: { mode: "auto" },
        followUp: { action: "none" },
      };
    },
  ),
  resolveGatewayAuth: vi.fn(
    ({
      authConfig,
    }: {
      authConfig?: NonNullable<NonNullable<OpenClawConfig["gateway"]>["auth"]>;
    }) => {
      const token =
        typeof authConfig?.token === "string"
          ? authConfig.token
          : typeof authConfig?.token === "object"
            ? undefined
            : undefined;
      const password = typeof authConfig?.password === "string" ? authConfig.password : undefined;
      const mode = authConfig?.mode ?? (password ? "password" : token ? "token" : "token");
      return {
        mode,
        token,
        password,
      };
    },
  ),
  ensureGatewayStartupAuth: vi.fn(async ({ cfg }: { cfg: OpenClawConfig }) => ({
    cfg: {
      ...cfg,
      gateway: {
        ...cfg.gateway,
        auth: {
          ...cfg.gateway?.auth,
          mode: "token" as const,
          token: "a".repeat(48),
        },
      },
    },
    auth: {
      mode: "token" as const,
      token: "a".repeat(48),
    },
    generatedToken: "a".repeat(48),
    persistedGeneratedToken: true,
  })),
}));

vi.mock("../config/config.js", () => ({
  getRuntimeConfig: mocks.getRuntimeConfig,
  replaceConfigFile: mocks.replaceConfigFile,
  mutateConfigFile: mocks.mutateConfigFile,
}));

vi.mock("../gateway/startup-auth.js", () => ({
  ensureGatewayStartupAuth: mocks.ensureGatewayStartupAuth,
}));

vi.mock("../gateway/auth.js", () => ({
  resolveGatewayAuth: mocks.resolveGatewayAuth,
}));

function readPersistedConfig(): OpenClawConfig {
  const [call] = mocks.writeConfigFile.mock.calls;
  if (!call) {
    throw new Error("expected persisted config write");
  }
  const [persistedCfg] = call;
  if (!persistedCfg) {
    throw new Error("expected persisted config");
  }
  return persistedCfg;
}

async function expectGeneratedBrowserAuthPersistence(params: {
  cfg: OpenClawConfig;
  mode: "none" | "trusted-proxy";
  generatedAuthField: "token" | "password";
}) {
  mocks.getRuntimeConfig.mockReturnValue(params.cfg);

  const result = await ensureBrowserControlAuth({ cfg: params.cfg, env: {} as NodeJS.ProcessEnv });

  expect(result.generatedToken).toMatch(/^[a-f0-9]{48}$/);
  expect(result.auth[params.generatedAuthField]).toBe(result.generatedToken);
  expect(result.auth[params.generatedAuthField === "token" ? "password" : "token"]).toBeUndefined();
  expect(mocks.writeConfigFile).toHaveBeenCalledTimes(1);
  const persistedCfg = readPersistedConfig();
  expect(persistedCfg?.gateway?.auth?.mode).toBe(params.mode);
  expect(persistedCfg?.gateway?.auth?.[params.generatedAuthField]).toBe(result.generatedToken);
  expect(mocks.ensureGatewayStartupAuth).not.toHaveBeenCalled();
}

async function expectUnresolvedBrowserSecretRefSkipsPersistence(cfg: OpenClawConfig) {
  mocks.getRuntimeConfig.mockReturnValue(cfg);

  const result = await ensureBrowserControlAuth({ cfg, env: {} as NodeJS.ProcessEnv });

  expect(result).toEqual({ auth: {} });
  expect(mocks.writeConfigFile).not.toHaveBeenCalled();
  expect(mocks.ensureGatewayStartupAuth).not.toHaveBeenCalled();
}

let ensureBrowserControlAuth: typeof import("./control-auth.js").ensureBrowserControlAuth;
let resolveBrowserControlAuth: typeof import("./control-auth.js").resolveBrowserControlAuth;

describe("ensureBrowserControlAuth", () => {
  const expectExplicitModeSkipsAutoAuth = async (mode: "password") => {
    const cfg: OpenClawConfig = {
      gateway: {
        auth: { mode },
      },
      browser: {
        enabled: true,
      },
    };

    const result = await ensureBrowserControlAuth({ cfg, env: {} as NodeJS.ProcessEnv });
    expect(result).toEqual({ auth: {} });
    expect(mocks.getRuntimeConfig).not.toHaveBeenCalled();
    expect(mocks.writeConfigFile).not.toHaveBeenCalled();
    expect(mocks.ensureGatewayStartupAuth).not.toHaveBeenCalled();
  };

  const expectGeneratedTokenPersisted = async (result: {
    generatedToken?: string;
    auth: { token?: string };
  }) => {
    expect(mocks.ensureGatewayStartupAuth).toHaveBeenCalledTimes(1);
    const ensured = await mocks.ensureGatewayStartupAuth.mock.results[0]?.value;
    expectGeneratedTokenPersistedToGatewayAuth({
      generatedToken: result.generatedToken,
      authToken: result.auth.token,
      persistedConfig: ensured?.cfg,
    });
  };

  beforeAll(async () => {
    ({ ensureBrowserControlAuth, resolveBrowserControlAuth } = await import("./control-auth.js"));
  });

  beforeEach(() => {
    vi.restoreAllMocks();
    mocks.getRuntimeConfig.mockClear();
    mocks.writeConfigFile.mockClear();
    mocks.mutateConfigFile.mockClear();
    mocks.resolveGatewayAuth.mockClear();
    mocks.ensureGatewayStartupAuth.mockClear();
  });

  it("returns existing auth and skips writes", async () => {
    const cfg: OpenClawConfig = {
      gateway: {
        auth: {
          token: `ltfx.n.5cb6bd91784f12f989f0.v1`,
        },
      },
    };

    const result = await ensureBrowserControlAuth({ cfg, env: {} as NodeJS.ProcessEnv });

    expect(result).toEqual({ auth: { token: `ltfx.n.5cb6bd91784f12f989f0.v1` } });
    expect(mocks.getRuntimeConfig).not.toHaveBeenCalled();
    expect(mocks.writeConfigFile).not.toHaveBeenCalled();
    expect(mocks.ensureGatewayStartupAuth).not.toHaveBeenCalled();
  });

  it("returns only the active credential in password mode", () => {
    const cfg: OpenClawConfig = {
      gateway: {
        auth: {
          mode: "password",
          token: `ltfx.n.33a8964c41f858e7d794.v1`,
          password: `ltfx.n.356f229d2154ecc14680.v1`,
        },
      },
    };

    expect(resolveBrowserControlAuth(cfg, {} as NodeJS.ProcessEnv)).toEqual({
      password: `ltfx.n.356f229d2154ecc14680.v1`,
    });
  });

  it("returns only the resolved active credential when mode is inferred", () => {
    const cfg: OpenClawConfig = {
      gateway: {
        auth: {
          token: `ltfx.n.33a8964c41f858e7d794.v1`,
          password: `ltfx.n.356f229d2154ecc14680.v1`,
        },
      },
    };

    expect(resolveBrowserControlAuth(cfg, {} as NodeJS.ProcessEnv)).toEqual({
      password: `ltfx.n.356f229d2154ecc14680.v1`,
    });
  });

  it("returns only the browser token in none mode", () => {
    const cfg: OpenClawConfig = {
      gateway: {
        auth: {
          mode: "none",
          token: `ltfx.n.012632faba814fab31a2.v1`,
          password: `ltfx.n.469056bb0c8953ed768d.v1`,
        },
      },
    };

    expect(resolveBrowserControlAuth(cfg, {} as NodeJS.ProcessEnv)).toEqual({
      token: `ltfx.n.012632faba814fab31a2.v1`,
    });
  });

  it("returns only the active token in token mode", () => {
    const cfg: OpenClawConfig = {
      gateway: {
        auth: {
          mode: "token",
          token: `ltfx.n.ba2efa2f1b25f88201ee.v1`,
          password: `ltfx.n.469056bb0c8953ed768d.v1`,
        },
      },
    };

    expect(resolveBrowserControlAuth(cfg, {} as NodeJS.ProcessEnv)).toEqual({
      token: `ltfx.n.ba2efa2f1b25f88201ee.v1`,
    });
  });

  it("returns only the browser password in trusted-proxy mode", () => {
    const cfg: OpenClawConfig = {
      gateway: {
        auth: {
          mode: "trusted-proxy",
          token: `ltfx.n.33a8964c41f858e7d794.v1`,
          password: `ltfx.n.1c95ae0a5b8ed8df652d.v1`,
          trustedProxy: { userHeader: "x-forwarded-user" },
        },
      },
    };

    expect(resolveBrowserControlAuth(cfg, {} as NodeJS.ProcessEnv)).toEqual({
      password: `ltfx.n.1c95ae0a5b8ed8df652d.v1`,
    });
  });

  it("does not accept an inactive token in trusted-proxy mode", () => {
    const cfg: OpenClawConfig = {
      gateway: {
        auth: {
          mode: "trusted-proxy",
          token: `ltfx.n.33a8964c41f858e7d794.v1`,
          trustedProxy: { userHeader: "x-forwarded-user" },
        },
      },
    };

    expect(resolveBrowserControlAuth(cfg, {} as NodeJS.ProcessEnv)).toEqual({});
  });

  it("auto-generates and persists a token when auth is missing", async () => {
    const cfg: OpenClawConfig = {
      browser: {
        enabled: true,
      },
    };
    mocks.getRuntimeConfig.mockReturnValue({
      browser: {
        enabled: true,
      },
    });

    const result = await ensureBrowserControlAuth({ cfg, env: {} as NodeJS.ProcessEnv });
    await expectGeneratedTokenPersisted(result);
    expect(mocks.writeConfigFile).not.toHaveBeenCalled();
  });

  it("skips auto-generation in test env", async () => {
    const cfg: OpenClawConfig = {
      browser: {
        enabled: true,
      },
    };

    const result = await ensureBrowserControlAuth({
      cfg,
      env: { NODE_ENV: "test" } as NodeJS.ProcessEnv,
    });

    expect(result).toEqual({ auth: {} });
    expect(mocks.getRuntimeConfig).not.toHaveBeenCalled();
    expect(mocks.writeConfigFile).not.toHaveBeenCalled();
    expect(mocks.ensureGatewayStartupAuth).not.toHaveBeenCalled();
  });

  it("respects explicit password mode", async () => {
    await expectExplicitModeSkipsAutoAuth("password");
  });

  it("auto-generates and persists browser auth token in none mode", async () => {
    const cfg: OpenClawConfig = {
      gateway: {
        auth: { mode: "none" },
      },
      browser: {
        enabled: true,
      },
    };
    await expectGeneratedBrowserAuthPersistence({
      cfg,
      mode: "none",
      generatedAuthField: "token",
    });
  });

  it("does not persist over unresolved token SecretRef in none mode", async () => {
    const cfg: OpenClawConfig = {
      gateway: {
        auth: {
          mode: "none",
          token: { source: "env", provider: "default", id: "BROWSER_TOKEN" },
        },
      },
      browser: {
        enabled: true,
      },
    };
    await expectUnresolvedBrowserSecretRefSkipsPersistence(cfg);
  });

  it("still auto-generates in none mode when only password SecretRef is set", async () => {
    const cfg: OpenClawConfig = {
      gateway: {
        auth: {
          mode: "none",
          password: { source: "env", provider: "default", id: "INACTIVE_PASSWORD" },
        },
      },
      browser: {
        enabled: true,
      },
    };
    await expectGeneratedBrowserAuthPersistence({
      cfg,
      mode: "none",
      generatedAuthField: "token",
    });
  });

  it("auto-generates in trusted-proxy mode and persists browser auth password", async () => {
    const cfg: OpenClawConfig = {
      gateway: {
        auth: { mode: "trusted-proxy", trustedProxy: { userHeader: "x-forwarded-user" } },
      },
      browser: {
        enabled: true,
      },
    };
    await expectGeneratedBrowserAuthPersistence({
      cfg,
      mode: "trusted-proxy",
      generatedAuthField: "password",
    });
  });

  it("still auto-generates in trusted-proxy mode when only token SecretRef is set", async () => {
    const cfg: OpenClawConfig = {
      gateway: {
        auth: {
          mode: "trusted-proxy",
          token: { source: "env", provider: "default", id: "INACTIVE_TOKEN" },
          trustedProxy: { userHeader: "x-forwarded-user" },
        },
      },
      browser: {
        enabled: true,
      },
    };
    await expectGeneratedBrowserAuthPersistence({
      cfg,
      mode: "trusted-proxy",
      generatedAuthField: "password",
    });
  });

  it("does not persist over unresolved password SecretRef in trusted-proxy mode", async () => {
    const cfg: OpenClawConfig = {
      gateway: {
        auth: {
          mode: "trusted-proxy",
          password: { source: "env", provider: "default", id: "BROWSER_PASSWORD" },
          trustedProxy: { userHeader: "x-forwarded-user" },
        },
      },
      browser: {
        enabled: true,
      },
    };
    await expectUnresolvedBrowserSecretRefSkipsPersistence(cfg);
  });

  it("reuses auth from latest config snapshot", async () => {
    const cfg: OpenClawConfig = {
      browser: {
        enabled: true,
      },
    };
    mocks.getRuntimeConfig.mockReturnValue({
      gateway: {
        auth: {
          token: `ltfx.n.0826a13ace64f4d6202e.v1`,
        },
      },
      browser: {
        enabled: true,
      },
    });

    const result = await ensureBrowserControlAuth({ cfg, env: {} as NodeJS.ProcessEnv });

    expect(result).toEqual({ auth: { token: `ltfx.n.0826a13ace64f4d6202e.v1` } });
    expect(mocks.writeConfigFile).not.toHaveBeenCalled();
    expect(mocks.ensureGatewayStartupAuth).not.toHaveBeenCalled();
  });

  it("fails when gateway.auth.token SecretRef is unresolved", async () => {
    const cfg: OpenClawConfig = {
      gateway: {
        auth: {
          mode: "token",
          token: { source: "env", provider: "default", id: "MISSING_GW_TOKEN" },
        },
      },
      browser: {
        enabled: true,
      },
      secrets: {
        providers: {
          default: { source: "env" },
        },
      },
    };
    mocks.getRuntimeConfig.mockReturnValue(cfg);
    mocks.ensureGatewayStartupAuth.mockRejectedValueOnce(new Error("MISSING_GW_TOKEN"));

    await expect(ensureBrowserControlAuth({ cfg, env: {} as NodeJS.ProcessEnv })).rejects.toThrow(
      /MISSING_GW_TOKEN/i,
    );
    expect(mocks.ensureGatewayStartupAuth).toHaveBeenCalledTimes(1);
  });
});
