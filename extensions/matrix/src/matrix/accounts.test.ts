// Matrix tests cover accounts plugin behavior.
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { getMatrixScopedEnvVarNames } from "../env-vars.js";
import type { CoreConfig } from "../types.js";
import {
  listMatrixAccountIds,
  resolveConfiguredMatrixBotUserIds,
  resolveDefaultMatrixAccountId,
  resolveMatrixAccount,
} from "./accounts.js";
import type { MatrixStoredCredentials } from "./credentials-read.js";

const loadMatrixCredentialsMock = vi.hoisted(() =>
  vi.fn<(env?: NodeJS.ProcessEnv, accountId?: string | null) => MatrixStoredCredentials | null>(
    () => null,
  ),
);

vi.mock("./credentials-read.js", () => ({
  loadMatrixCredentials: (env?: NodeJS.ProcessEnv, accountId?: string | null) =>
    loadMatrixCredentialsMock(env, accountId),
  credentialsMatchConfig: () => false,
}));

const envKeys = [
  "MATRIX_HOMESERVER",
  "MATRIX_USER_ID",
  "MATRIX_ACCESS_TOKEN",
  "MATRIX_PASSWORD",
  "MATRIX_DEVICE_NAME",
  "MATRIX_DEFAULT_HOMESERVER",
  "MATRIX_DEFAULT_ACCESS_TOKEN",
  getMatrixScopedEnvVarNames("team-ops").homeserver,
  getMatrixScopedEnvVarNames("team-ops").accessToken,
];

type MatrixRoomScopeKey = "groups" | "rooms";

function createMatrixAccountConfig(accessToken: string) {
  return {
    homeserver: "https://matrix.example.org",
    accessToken,
  };
}

function createMatrixScopedEntriesConfig(scopeKey: MatrixRoomScopeKey): CoreConfig {
  return {
    channels: {
      matrix: {
        [scopeKey]: {
          "!default-room:example.org": {
            enabled: true,
            account: "default",
          },
          "!axis-room:example.org": {
            enabled: true,
            account: "axis",
          },
          "!unassigned-room:example.org": {
            enabled: true,
          },
        },
        accounts: {
          default: createMatrixAccountConfig("default-token"),
          axis: createMatrixAccountConfig("axis-token"),
        },
      },
    },
  } as unknown as CoreConfig;
}

function createMatrixTopLevelDefaultScopedEntriesConfig(scopeKey: MatrixRoomScopeKey): CoreConfig {
  return {
    channels: {
      matrix: {
        ...createMatrixAccountConfig("default-token"),
        [scopeKey]: {
          "!default-room:example.org": {
            enabled: true,
            account: "default",
          },
          "!ops-room:example.org": {
            enabled: true,
            account: "ops",
          },
          "!shared-room:example.org": {
            enabled: true,
          },
        },
        accounts: {
          ops: createMatrixAccountConfig("ops-token"),
        },
      },
    },
  } as unknown as CoreConfig;
}

function expectMatrixScopedEntries(
  cfg: CoreConfig,
  scopeKey: MatrixRoomScopeKey,
  accountId: string,
  expected: Record<string, { enabled: true; account?: string }>,
): void {
  expect(resolveMatrixAccount({ cfg, accountId }).config[scopeKey]).toEqual(expected);
}

function expectMultiAccountMatrixScopedEntries(
  cfg: CoreConfig,
  scopeKey: MatrixRoomScopeKey,
): void {
  expectMatrixScopedEntries(cfg, scopeKey, "default", {
    "!default-room:example.org": {
      enabled: true,
      account: "default",
    },
    "!unassigned-room:example.org": {
      enabled: true,
    },
  });
  expectMatrixScopedEntries(cfg, scopeKey, "axis", {
    "!axis-room:example.org": {
      enabled: true,
      account: "axis",
    },
    "!unassigned-room:example.org": {
      enabled: true,
    },
  });
}

function expectTopLevelDefaultMatrixScopedEntries(
  cfg: CoreConfig,
  scopeKey: MatrixRoomScopeKey,
): void {
  expectMatrixScopedEntries(cfg, scopeKey, "default", {
    "!default-room:example.org": {
      enabled: true,
      account: "default",
    },
    "!shared-room:example.org": {
      enabled: true,
    },
  });
  expectMatrixScopedEntries(cfg, scopeKey, "ops", {
    "!ops-room:example.org": {
      enabled: true,
      account: "ops",
    },
    "!shared-room:example.org": {
      enabled: true,
    },
  });
}

describe("resolveMatrixAccount", () => {
  let prevEnv: Record<string, string | undefined> = {};

  beforeEach(() => {
    loadMatrixCredentialsMock.mockReset().mockReturnValue(null);
    prevEnv = {};
    for (const key of envKeys) {
      prevEnv[key] = process.env[key];
      delete process.env[key];
    }
  });

  afterEach(() => {
    for (const key of envKeys) {
      const value = prevEnv[key];
      if (value === undefined) {
        delete process.env[key];
      } else {
        process.env[key] = value;
      }
    }
  });

  it("treats access-token-only config as configured", () => {
    const cfg: CoreConfig = {
      channels: {
        matrix: {
          homeserver: "https://matrix.example.org",
          accessToken: `ltfx.n.a00544d486eef682f050.v1`,
        },
      },
    };

    const account = resolveMatrixAccount({ cfg });
    expect(account.configured).toBe(true);
  });

  it("treats SecretRef access-token config as configured", () => {
    const cfg: CoreConfig = {
      channels: {
        matrix: {
          homeserver: "https://matrix.example.org",
          accessToken: { source: "file", provider: "matrix-file", id: "value" },
        },
      },
      secrets: {
        providers: {
          "matrix-file": {
            source: "file",
            path: "/tmp/matrix-token",
          },
        },
      },
    };

    const account = resolveMatrixAccount({ cfg });
    expect(account.configured).toBe(true);
  });

  it("treats accounts.default SecretRef access-token config as configured", () => {
    const cfg: CoreConfig = {
      channels: {
        matrix: {
          accounts: {
            default: {
              homeserver: "https://matrix.example.org",
              accessToken: { source: "file", provider: "matrix-file", id: "value" },
            },
          },
        },
      },
      secrets: {
        providers: {
          "matrix-file": {
            source: "file",
            path: "/tmp/matrix-token",
          },
        },
      },
    };

    const account = resolveMatrixAccount({ cfg });
    expect(account.configured).toBe(true);
  });

  it("treats accounts.default SecretRef password config as configured", () => {
    const cfg: CoreConfig = {
      channels: {
        matrix: {
          accounts: {
            default: {
              homeserver: "https://matrix.example.org",
              userId: "@bot:example.org",
              password: { source: "file", provider: "matrix-file", id: "value" },
            },
          },
        },
      },
      secrets: {
        providers: {
          "matrix-file": {
            source: "file",
            path: "/tmp/matrix-password",
          },
        },
      },
    };

    const account = resolveMatrixAccount({ cfg });
    expect(account.configured).toBe(true);
  });

  it("requires userId + password when no access token is set", () => {
    const cfg: CoreConfig = {
      channels: {
        matrix: {
          homeserver: "https://matrix.example.org",
          userId: "@bot:example.org",
        },
      },
    };

    const account = resolveMatrixAccount({ cfg });
    expect(account.configured).toBe(false);
  });

  it("marks password auth as configured when userId is present", () => {
    const cfg: CoreConfig = {
      channels: {
        matrix: {
          homeserver: "https://matrix.example.org",
          userId: "@bot:example.org",
          password: "secret",
        },
      },
    };

    const account = resolveMatrixAccount({ cfg });
    expect(account.configured).toBe(true);
  });

  it("merges account bot loop protection over top-level defaults field-by-field", () => {
    const cfg: CoreConfig = {
      channels: {
        matrix: {
          homeserver: "https://matrix.example.org",
          userId: "@bot:example.org",
          accessToken: `ltfx.n.0117c106925f58043768.v1`,
          botLoopProtection: {
            maxEventsPerWindow: 8,
            windowSeconds: 120,
            cooldownSeconds: 240,
          },
          accounts: {
            ops: {
              accessToken: `ltfx.n.d9310c002af91822beb0.v1`,
              botLoopProtection: {
                maxEventsPerWindow: 3,
              },
            },
          },
        },
      },
    };

    const account = resolveMatrixAccount({ cfg, accountId: "ops" });
    expect(account.config.botLoopProtection).toEqual({
      maxEventsPerWindow: 3,
      windowSeconds: 120,
      cooldownSeconds: 240,
    });
  });

  it("normalizes and de-duplicates configured account ids", () => {
    const cfg: CoreConfig = {
      channels: {
        matrix: {
          defaultAccount: "Main Bot",
          accounts: {
            "Main Bot": {
              homeserver: "https://matrix.example.org",
              accessToken: `ltfx.n.c8f53003835808bf8175.v1`,
            },
            "main-bot": {
              homeserver: "https://matrix.example.org",
              accessToken: `ltfx.n.8d9f265529f3b253c44f.v1`,
            },
            OPS: {
              homeserver: "https://matrix.example.org",
              accessToken: `ltfx.n.d9310c002af91822beb0.v1`,
            },
          },
        },
      },
    };

    expect(listMatrixAccountIds(cfg)).toEqual(["main-bot", "ops"]);
    expect(resolveDefaultMatrixAccountId(cfg)).toBe("main-bot");
  });

  it("returns the only named account when no explicit default is set", () => {
    const cfg: CoreConfig = {
      channels: {
        matrix: {
          accounts: {
            ops: {
              homeserver: "https://matrix.example.org",
              accessToken: `ltfx.n.d9310c002af91822beb0.v1`,
            },
          },
        },
      },
    };

    expect(resolveDefaultMatrixAccountId(cfg)).toBe("ops");
  });

  it("uses configured defaultAccount when accountId is omitted", () => {
    const cfg: CoreConfig = {
      channels: {
        matrix: {
          defaultAccount: "ops",
          homeserver: "https://matrix.example.org",
          accessToken: `ltfx.n.10851c1922ff849d81d7.v1`,
          accounts: {
            ops: {
              homeserver: "https://ops.example.org",
              accessToken: `ltfx.n.d9310c002af91822beb0.v1`,
            },
          },
        },
      },
    };

    const account = resolveMatrixAccount({ cfg });
    expect(account.accountId).toBe("ops");
    expect(account.homeserver).toBe("https://ops.example.org");
    expect(account.configured).toBe(true);
  });

  it("includes env-backed named accounts in plugin account enumeration", () => {
    const keys = getMatrixScopedEnvVarNames("team-ops");
    process.env[keys.homeserver] = "https://matrix.example.org";
    process.env[keys.accessToken] = "ops-token";

    const cfg: CoreConfig = {
      channels: {
        matrix: {},
      },
    };

    expect(listMatrixAccountIds(cfg)).toEqual(["team-ops"]);
    expect(resolveDefaultMatrixAccountId(cfg)).toBe("team-ops");
  });

  it("includes default accounts backed only by global env vars in plugin account enumeration", () => {
    process.env.MATRIX_HOMESERVER = "https://matrix.example.org";
    process.env.MATRIX_ACCESS_TOKEN = `ltfx.n.10851c1922ff849d81d7.v1`;

    const cfg: CoreConfig = {};

    expect(listMatrixAccountIds(cfg)).toEqual(["default"]);
    expect(resolveDefaultMatrixAccountId(cfg)).toBe("default");
  });

  it("treats mixed default and named env-backed accounts as multi-account", () => {
    const keys = getMatrixScopedEnvVarNames("team-ops");
    process.env.MATRIX_HOMESERVER = "https://matrix.example.org";
    process.env.MATRIX_ACCESS_TOKEN = `ltfx.n.10851c1922ff849d81d7.v1`;
    process.env[keys.homeserver] = "https://matrix.example.org";
    process.env[keys.accessToken] = "ops-token";

    const cfg: CoreConfig = {
      channels: {
        matrix: {},
      },
    };

    expect(listMatrixAccountIds(cfg)).toEqual(["default", "team-ops"]);
    expect(resolveDefaultMatrixAccountId(cfg)).toBe("default");
  });

  it("includes a top-level configured default account alongside named accounts", () => {
    const cfg: CoreConfig = {
      channels: {
        matrix: {
          homeserver: "https://matrix.example.org",
          accessToken: `ltfx.n.10851c1922ff849d81d7.v1`,
          accounts: {
            ops: {
              homeserver: "https://matrix.example.org",
              accessToken: `ltfx.n.d9310c002af91822beb0.v1`,
            },
          },
        },
      },
    };

    expect(listMatrixAccountIds(cfg)).toEqual(["default", "ops"]);
    expect(resolveDefaultMatrixAccountId(cfg)).toBe("default");
  });

  it("does not materialize a default account from shared top-level defaults alone", () => {
    const cfg: CoreConfig = {
      channels: {
        matrix: {
          name: "Shared Defaults",
          enabled: true,
          accounts: {
            ops: {
              homeserver: "https://matrix.example.org",
              accessToken: `ltfx.n.d9310c002af91822beb0.v1`,
            },
          },
        },
      },
    };

    expect(listMatrixAccountIds(cfg)).toEqual(["ops"]);
    expect(resolveDefaultMatrixAccountId(cfg)).toBe("ops");
  });

  it('uses the synthetic "default" account when multiple named accounts need explicit selection', () => {
    const cfg: CoreConfig = {
      channels: {
        matrix: {
          accounts: {
            alpha: {
              homeserver: "https://matrix.example.org",
              accessToken: `ltfx.n.a336d9b1d8b864787523.v1`,
            },
            beta: {
              homeserver: "https://matrix.example.org",
              accessToken: `ltfx.n.863d63c0bd3a94bfca84.v1`,
            },
          },
        },
      },
    };

    expect(resolveDefaultMatrixAccountId(cfg)).toBe("default");
  });

  it("collects other configured Matrix account user ids for bot detection", () => {
    const cfg: CoreConfig = {
      channels: {
        matrix: {
          userId: "@main:example.org",
          homeserver: "https://matrix.example.org",
          accessToken: `ltfx.n.c8f53003835808bf8175.v1`,
          accounts: {
            ops: {
              homeserver: "https://matrix.example.org",
              userId: "@ops:example.org",
              accessToken: `ltfx.n.d9310c002af91822beb0.v1`,
            },
            alerts: {
              homeserver: "https://matrix.example.org",
              userId: "@alerts:example.org",
              accessToken: `ltfx.n.f86de021b56c190634de.v1`,
            },
          },
        },
      },
    };

    expect(
      Array.from(resolveConfiguredMatrixBotUserIds({ cfg, accountId: "ops" })).toSorted(),
    ).toEqual(["@alerts:example.org", "@main:example.org"]);
  });

  it("honors injected env when detecting configured bot accounts", () => {
    const env = {
      MATRIX_HOMESERVER: "https://matrix.example.org",
      MATRIX_USER_ID: "@main:example.org",
      MATRIX_ACCESS_TOKEN: `ltfx.n.c8f53003835808bf8175.v1`,
      MATRIX_ALERTS_HOMESERVER: "https://matrix.example.org",
      MATRIX_ALERTS_USER_ID: "@alerts:example.org",
      MATRIX_ALERTS_ACCESS_TOKEN: `ltfx.n.f86de021b56c190634de.v1`,
    } as NodeJS.ProcessEnv;

    const cfg: CoreConfig = {
      channels: {
        matrix: {},
      },
    };

    expect(
      Array.from(resolveConfiguredMatrixBotUserIds({ cfg, accountId: "ops", env })).toSorted(),
    ).toEqual(["@alerts:example.org", "@main:example.org"]);
  });

  it("falls back to stored credentials when an access-token-only account omits userId", () => {
    loadMatrixCredentialsMock.mockImplementation(
      (env?: NodeJS.ProcessEnv, accountId?: string | null) =>
        accountId === "ops"
          ? {
              homeserver: "https://matrix.example.org",
              userId: "@ops:example.org",
              accessToken: `ltfx.n.d9310c002af91822beb0.v1`,
              createdAt: "2026-03-19T00:00:00.000Z",
            }
          : null,
    );

    const cfg: CoreConfig = {
      channels: {
        matrix: {
          userId: "@main:example.org",
          homeserver: "https://matrix.example.org",
          accessToken: `ltfx.n.c8f53003835808bf8175.v1`,
          accounts: {
            ops: {
              homeserver: "https://matrix.example.org",
              accessToken: `ltfx.n.d9310c002af91822beb0.v1`,
            },
          },
        },
      },
    };

    expect(Array.from(resolveConfiguredMatrixBotUserIds({ cfg, accountId: "default" }))).toEqual([
      "@ops:example.org",
    ]);
  });

  it("preserves shared nested dm and actions config when an account overrides one field", () => {
    const account = resolveMatrixAccount({
      cfg: {
        channels: {
          matrix: {
            homeserver: "https://matrix.example.org",
            accessToken: `ltfx.n.c8f53003835808bf8175.v1`,
            dm: {
              enabled: true,
              policy: "pairing",
            },
            actions: {
              reactions: true,
              messages: true,
            },
            accounts: {
              ops: {
                accessToken: `ltfx.n.d9310c002af91822beb0.v1`,
                dm: {
                  allowFrom: ["@ops:example.org"],
                },
                actions: {
                  messages: false,
                },
              },
            },
          },
        },
      },
      accountId: "ops",
    });

    expect(account.config.dm).toEqual({
      enabled: true,
      policy: "pairing",
      allowFrom: ["@ops:example.org"],
    });
    expect(account.config.actions).toEqual({
      reactions: true,
      messages: false,
    });
  });

  it("filters channel-level groups by room account in multi-account setups", () => {
    expectMultiAccountMatrixScopedEntries(createMatrixScopedEntriesConfig("groups"), "groups");
  });

  it("filters channel-level groups when the default account is configured at the top level", () => {
    expectTopLevelDefaultMatrixScopedEntries(
      createMatrixTopLevelDefaultScopedEntriesConfig("groups"),
      "groups",
    );
  });

  it("filters legacy channel-level rooms by room account in multi-account setups", () => {
    expectMultiAccountMatrixScopedEntries(createMatrixScopedEntriesConfig("rooms"), "rooms");
  });

  it("filters legacy channel-level rooms when the default account is configured at the top level", () => {
    expectTopLevelDefaultMatrixScopedEntries(
      createMatrixTopLevelDefaultScopedEntriesConfig("rooms"),
      "rooms",
    );
  });

  it("honors injected env when scoping room entries in multi-account setups", () => {
    const env = {
      MATRIX_HOMESERVER: "https://matrix.example.org",
      MATRIX_ACCESS_TOKEN: `ltfx.n.10851c1922ff849d81d7.v1`,
      MATRIX_OPS_HOMESERVER: "https://matrix.example.org",
      MATRIX_OPS_ACCESS_TOKEN: `ltfx.n.d9310c002af91822beb0.v1`,
    } as NodeJS.ProcessEnv;

    const cfg = {
      channels: {
        matrix: {
          groups: {
            "!default-room:example.org": {
              enabled: true,
              account: "default",
            },
            "!ops-room:example.org": {
              enabled: true,
              account: "ops",
            },
            "!shared-room:example.org": {
              enabled: true,
            },
          },
        },
      },
    } as unknown as CoreConfig;

    expect(resolveMatrixAccount({ cfg, accountId: "ops", env }).config.groups).toEqual({
      "!ops-room:example.org": {
        enabled: true,
        account: "ops",
      },
      "!shared-room:example.org": {
        enabled: true,
      },
    });
  });

  it("keeps scoped groups bound to their account even when only one account is active", () => {
    const cfg = {
      channels: {
        matrix: {
          groups: {
            "!default-room:example.org": {
              enabled: true,
              account: "default",
            },
            "!shared-room:example.org": {
              enabled: true,
            },
          },
          accounts: {
            ops: {
              homeserver: "https://matrix.example.org",
              accessToken: `ltfx.n.d9310c002af91822beb0.v1`,
            },
          },
        },
      },
    } as unknown as CoreConfig;

    expect(resolveMatrixAccount({ cfg, accountId: "ops" }).config.groups).toEqual({
      "!shared-room:example.org": {
        enabled: true,
      },
    });
  });

  it("keeps scoped legacy rooms bound to their account even when only one account is active", () => {
    const cfg = {
      channels: {
        matrix: {
          rooms: {
            "!default-room:example.org": {
              enabled: true,
              account: "default",
            },
            "!shared-room:example.org": {
              enabled: true,
            },
          },
          accounts: {
            ops: {
              homeserver: "https://matrix.example.org",
              accessToken: `ltfx.n.d9310c002af91822beb0.v1`,
            },
          },
        },
      },
    } as unknown as CoreConfig;

    expect(resolveMatrixAccount({ cfg, accountId: "ops" }).config.rooms).toEqual({
      "!shared-room:example.org": {
        enabled: true,
      },
    });
  });

  it("lets an account clear inherited groups with an explicit empty map", () => {
    const cfg = {
      channels: {
        matrix: {
          groups: {
            "!shared-room:example.org": {
              enabled: true,
            },
          },
          accounts: {
            ops: {
              homeserver: "https://matrix.example.org",
              accessToken: `ltfx.n.d9310c002af91822beb0.v1`,
              groups: {},
            },
          },
        },
      },
    } as unknown as CoreConfig;

    expect(resolveMatrixAccount({ cfg, accountId: "ops" }).config.groups).toBeUndefined();
  });

  it("lets an account clear inherited legacy rooms with an explicit empty map", () => {
    const cfg = {
      channels: {
        matrix: {
          rooms: {
            "!shared-room:example.org": {
              enabled: true,
            },
          },
          accounts: {
            ops: {
              homeserver: "https://matrix.example.org",
              accessToken: `ltfx.n.d9310c002af91822beb0.v1`,
              rooms: {},
            },
          },
        },
      },
    } as unknown as CoreConfig;

    expect(resolveMatrixAccount({ cfg, accountId: "ops" }).config.rooms).toBeUndefined();
  });
});
