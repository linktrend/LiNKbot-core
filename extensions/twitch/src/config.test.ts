// Twitch tests cover config plugin behavior.
import { describe, expect, it } from "vitest";
import {
  getAccountConfig,
  listAccountIds,
  resolveDefaultTwitchAccountId,
  resolveTwitchAccountContext,
} from "./config.js";

describe("getAccountConfig", () => {
  const mockMultiAccountConfig = {
    channels: {
      twitch: {
        accounts: {
          default: {
            username: "testbot",
            accessToken: `ltfx.n.9719e2e0668fef5c8519.v1`,
          },
          secondary: {
            username: "secondbot",
            accessToken: `ltfx.n.24cae92041d0285ccf36.v1`,
          },
        },
      },
    },
  };

  const mockSimplifiedConfig = {
    channels: {
      twitch: {
        username: "testbot",
        accessToken: `ltfx.n.9719e2e0668fef5c8519.v1`,
      },
    },
  };

  it("returns account config for valid account ID (multi-account)", () => {
    const result = getAccountConfig(mockMultiAccountConfig, "default");

    expect(result?.username).toBe("testbot");
  });

  it("returns account config for default account (simplified config)", () => {
    const result = getAccountConfig(mockSimplifiedConfig, "default");

    expect(result?.username).toBe("testbot");
  });

  it("returns non-default account from multi-account config", () => {
    const result = getAccountConfig(mockMultiAccountConfig, "secondary");

    expect(result?.username).toBe("secondbot");
  });

  it("normalizes account ids without reading inherited account properties", () => {
    const accounts = Object.create({
      inherited: {
        username: "inherited-bot",
        accessToken: `ltfx.n.42e66c24f06047c3f862.v1`,
      },
    }) as Record<string, unknown>;
    accounts.Secondary = {
      username: "secondbot",
      accessToken: `ltfx.n.24cae92041d0285ccf36.v1`,
    };

    const cfg = {
      channels: {
        twitch: {
          accounts,
        },
      },
    };

    expect(getAccountConfig(cfg, "SECONDARY\r\n")).toEqual({
      username: "secondbot",
      accessToken: `ltfx.n.24cae92041d0285ccf36.v1`,
    });
    expect(getAccountConfig(cfg, "inherited")).toBeNull();
  });

  it("returns null for non-existent account ID", () => {
    const result = getAccountConfig(mockMultiAccountConfig, "nonexistent");

    expect(result).toBeNull();
  });

  it("returns null when core config is null", () => {
    const result = getAccountConfig(null, "default");

    expect(result).toBeNull();
  });

  it("returns null when core config is undefined", () => {
    const result = getAccountConfig(undefined, "default");

    expect(result).toBeNull();
  });

  it("returns null when channels are not defined", () => {
    const result = getAccountConfig({}, "default");

    expect(result).toBeNull();
  });

  it("returns null when twitch is not defined", () => {
    const result = getAccountConfig({ channels: {} }, "default");

    expect(result).toBeNull();
  });

  it("returns null when accounts are not defined", () => {
    const result = getAccountConfig({ channels: { twitch: {} } }, "default");

    expect(result).toBeNull();
  });
});

describe("listAccountIds", () => {
  it("includes the implicit default account from simplified config", () => {
    expect(
      listAccountIds({
        channels: {
          twitch: {
            username: "testbot",
            accessToken: `ltfx.n.9719e2e0668fef5c8519.v1`,
          },
        },
      } as Parameters<typeof listAccountIds>[0]),
    ).toEqual(["default"]);
  });

  it("combines explicit accounts with the implicit default account once", () => {
    expect(
      listAccountIds({
        channels: {
          twitch: {
            username: "testbot",
            accounts: {
              default: { username: "testbot" },
              secondary: { username: "secondbot" },
            },
          },
        },
      } as Parameters<typeof listAccountIds>[0]),
    ).toEqual(["default", "secondary"]);
  });

  it("normalizes configured account ids", () => {
    expect(
      listAccountIds({
        channels: {
          twitch: {
            accounts: {
              Secondary: { username: "secondbot" },
              "Alerts\r\n\u001b[31m": { username: "alerts" },
            },
          },
        },
      } as Parameters<typeof listAccountIds>[0]),
    ).toEqual(["alerts-31m", "secondary"]);
  });
});

describe("resolveDefaultTwitchAccountId", () => {
  it("prefers channels.twitch.defaultAccount when configured", () => {
    expect(
      resolveDefaultTwitchAccountId({
        channels: {
          twitch: {
            defaultAccount: "secondary",
            accounts: {
              default: { username: "default" },
              secondary: { username: "secondary" },
            },
          },
        },
      } as Parameters<typeof resolveDefaultTwitchAccountId>[0]),
    ).toBe("secondary");
  });
});

describe("resolveTwitchAccountContext", () => {
  it("uses configured defaultAccount when accountId is omitted", () => {
    const context = resolveTwitchAccountContext({
      channels: {
        twitch: {
          defaultAccount: "secondary",
          accounts: {
            default: {
              username: "default-bot",
              accessToken: `ltfx.n.2976d1d3b72d737e7a39.v1`,
            },
            secondary: {
              username: "second-bot",
              accessToken: `ltfx.n.70061447e7e274cd1d85.v1`,
            },
          },
        },
      },
    } as Parameters<typeof resolveTwitchAccountContext>[0]);

    expect(context.accountId).toBe("secondary");
    expect(context.account?.username).toBe("second-bot");
  });

  it("keeps account and token lookup aligned after account id normalization", () => {
    const context = resolveTwitchAccountContext(
      {
        channels: {
          twitch: {
            accounts: {
              Secondary: {
                username: "second-bot",
                accessToken: `ltfx.n.70061447e7e274cd1d85.v1`,
                clientId: "second-client",
                channel: "#second",
              },
            },
          },
        },
      } as Parameters<typeof resolveTwitchAccountContext>[0],
      "secondary",
    );

    expect(context.accountId).toBe("secondary");
    expect(context.account?.username).toBe("second-bot");
    expect(context.tokenResolution).toEqual({
      token: `ltfx.n.70061447e7e274cd1d85.v1`,
      source: "config",
    });
    expect(context.configured).toBe(true);
  });
});
