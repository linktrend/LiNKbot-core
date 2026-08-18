// Slack tests cover accounts plugin behavior.
import type { OpenClawConfig } from "openclaw/plugin-sdk/config-contracts";
import { describe, expect, it } from "vitest";
import {
  listEnabledSlackAccounts,
  listSlackAccountIds,
  resolveDefaultSlackAccountId,
  resolveSlackAccount,
  resolveSlackAccountAllowFrom,
  resolveSlackAccountDmPolicy,
  resolveSlackOperationToken,
} from "./accounts.js";

describe("resolveSlackOperationToken", () => {
  it.each([
    {
      name: "prefers the user token for reads",
      userTokenReadOnly: true,
      operation: "read" as const,
      expected: "xoxp-user",
    },
    {
      name: "prefers the bot token for writes when user writes are enabled",
      userTokenReadOnly: false,
      operation: "write" as const,
      expected: "xoxb-bot",
    },
    {
      name: "uses the user token for writes only when explicitly enabled",
      userTokenReadOnly: false,
      operation: "write" as const,
      hasBotToken: false,
      expected: "xoxp-user",
    },
    {
      name: "does not use the user token for writes by default",
      userTokenReadOnly: true,
      operation: "write" as const,
      hasBotToken: false,
      expected: undefined,
    },
  ])("$name", ({ userTokenReadOnly, operation, hasBotToken = true, expected }) => {
    const account = resolveSlackAccount({
      cfg: {
        channels: {
          slack: {
            accounts: {
              work: {
                ...(hasBotToken ? { botToken: `ltfx.n.c8b505c2b4aca8778b0a.v1` } : {}),
                userToken: `ltfx.n.7c40c10cd6816e744256.v1`,
                userTokenReadOnly,
              },
            },
          },
        },
      } as OpenClawConfig,
      accountId: "work",
    });

    expect(resolveSlackOperationToken(account, operation)).toBe(expected);
  });

  it.each(["read", "write"] as const)(
    "uses the user token for %s operations with user identity",
    (operation) => {
      const account = resolveSlackAccount({
        cfg: {
          channels: {
            slack: {
              identity: "user",
              userToken: `ltfx.n.19bbb7d9c45e18a41bce.v1`,
              userTokenReadOnly: true,
            },
          },
        } as OpenClawConfig,
      });

      expect(resolveSlackOperationToken(account, operation)).toBe("test-user-token");
    },
  );

  it("does not fall back when a user identity has no user token", () => {
    const account = resolveSlackAccount({
      cfg: {
        channels: {
          slack: {
            identity: "user",
            botToken: `ltfx.n.19434281d9f1460bdb2b.v1`,
          },
        },
      } as OpenClawConfig,
    });

    expect(resolveSlackOperationToken(account, "read")).toBeUndefined();
    expect(resolveSlackOperationToken(account, "write")).toBeUndefined();
  });
});

describe("resolveSlackAccount allowFrom precedence", () => {
  it("uses configured defaultAccount when accountId is omitted", () => {
    const resolved = resolveSlackAccount({
      cfg: {
        channels: {
          slack: {
            defaultAccount: "work",
            accounts: {
              work: {
                name: "Work",
                botToken: `ltfx.n.95b0664cb949350b3191.v1`,
                appToken: `ltfx.n.600b236f3d56d622ddab.v1`,
              },
            },
          },
        },
      },
    });

    expect(resolved.accountId).toBe("work");
    expect(resolved.identity).toBe("bot");
    expect(resolved.name).toBe("Work");
    expect(resolved.botToken).toBe("xoxb-work");
    expect(resolved.appToken).toBe("xapp-work");
  });

  it("keeps the implicit default account when named accounts are added to top-level credentials", () => {
    const cfg = {
      channels: {
        slack: {
          botToken: `ltfx.n.4f68dd56cdc3b48ad886.v1`,
          appToken: `ltfx.n.f19ab51df9fdc80f5d51.v1`,
          accounts: {
            work: {
              enabled: false,
              botToken: `ltfx.n.95b0664cb949350b3191.v1`,
              appToken: `ltfx.n.600b236f3d56d622ddab.v1`,
            },
          },
        },
      },
    } as OpenClawConfig;

    expect(listSlackAccountIds(cfg)).toEqual(["default", "work"]);
    expect(resolveDefaultSlackAccountId(cfg)).toBe("default");
    expect(listEnabledSlackAccounts(cfg).map((account) => account.accountId)).toEqual(["default"]);
  });

  it("does not synthesize a default account from only shared optional tokens", () => {
    const cfg = {
      channels: {
        slack: {
          appToken: `ltfx.n.29ed7c4bbc08c63d55f0.v1`,
          userToken: `ltfx.n.469f9aadf086130c020a.v1`,
          accounts: {
            work: {
              botToken: `ltfx.n.95b0664cb949350b3191.v1`,
              appToken: `ltfx.n.600b236f3d56d622ddab.v1`,
            },
          },
        },
      },
    } as OpenClawConfig;

    expect(listSlackAccountIds(cfg)).toEqual(["work"]);
    expect(resolveDefaultSlackAccountId(cfg)).toBe("work");
    expect(listEnabledSlackAccounts(cfg).map((account) => account.accountId)).toEqual(["work"]);
  });

  it("prefers accounts.default.allowFrom over top-level for default account", () => {
    const resolved = resolveSlackAccount({
      cfg: {
        channels: {
          slack: {
            allowFrom: ["top"],
            accounts: {
              default: {
                botToken: `ltfx.n.4f68dd56cdc3b48ad886.v1`,
                appToken: `ltfx.n.f19ab51df9fdc80f5d51.v1`,
                allowFrom: ["default"],
              },
            },
          },
        },
      },
      accountId: "default",
    });

    expect(resolved.config.allowFrom).toEqual(["default"]);
  });

  it("falls back to top-level allowFrom for named account without override", () => {
    const resolved = resolveSlackAccount({
      cfg: {
        channels: {
          slack: {
            allowFrom: ["top"],
            accounts: {
              work: { botToken: `ltfx.n.95b0664cb949350b3191.v1`, appToken: `ltfx.n.600b236f3d56d622ddab.v1` },
            },
          },
        },
      },
      accountId: "work",
    });

    expect(resolved.config.allowFrom).toEqual(["top"]);
  });

  it("merges top-level unfurl controls into named accounts", () => {
    const resolved = resolveSlackAccount({
      cfg: {
        channels: {
          slack: {
            unfurlLinks: false,
            unfurlMedia: true,
            accounts: {
              work: { botToken: `ltfx.n.95b0664cb949350b3191.v1`, appToken: `ltfx.n.600b236f3d56d622ddab.v1` },
            },
          },
        },
      },
      accountId: "work",
    });

    expect(resolved.config.unfurlLinks).toBe(false);
    expect(resolved.config.unfurlMedia).toBe(true);
  });

  it("prefers account-level unfurl controls over top-level defaults", () => {
    const resolved = resolveSlackAccount({
      cfg: {
        channels: {
          slack: {
            unfurlLinks: false,
            unfurlMedia: true,
            accounts: {
              work: {
                botToken: `ltfx.n.95b0664cb949350b3191.v1`,
                appToken: `ltfx.n.600b236f3d56d622ddab.v1`,
                unfurlLinks: true,
                unfurlMedia: false,
              },
            },
          },
        },
      },
      accountId: "work",
    });

    expect(resolved.config.unfurlLinks).toBe(true);
    expect(resolved.config.unfurlMedia).toBe(false);
  });

  it("merges account bot loop protection over top-level defaults field-by-field", () => {
    const resolved = resolveSlackAccount({
      cfg: {
        channels: {
          slack: {
            botLoopProtection: {
              maxEventsPerWindow: 8,
              windowSeconds: 120,
              cooldownSeconds: 240,
            },
            accounts: {
              work: {
                botToken: `ltfx.n.95b0664cb949350b3191.v1`,
                appToken: `ltfx.n.600b236f3d56d622ddab.v1`,
                botLoopProtection: {
                  maxEventsPerWindow: 3,
                },
              },
            },
          },
        },
      },
      accountId: "work",
    });

    expect(resolved.config.botLoopProtection).toEqual({
      maxEventsPerWindow: 3,
      windowSeconds: 120,
      cooldownSeconds: 240,
    });
  });

  it("merges canonical account streaming over top-level defaults field-by-field", () => {
    const resolved = resolveSlackAccount({
      cfg: {
        channels: {
          slack: {
            streaming: {
              mode: "progress",
              nativeTransport: true,
              preview: { toolProgress: true, commandText: "raw" },
              progress: { label: "Shelling", commandText: "status" },
              block: { enabled: true, coalesce: { minChars: 40, maxChars: 80, idleMs: 250 } },
            },
            accounts: {
              work: {
                botToken: `ltfx.n.95b0664cb949350b3191.v1`,
                appToken: `ltfx.n.600b236f3d56d622ddab.v1`,
                streaming: {
                  progress: { nativeTaskCards: true },
                  block: { coalesce: { idleMs: 500 } },
                },
              },
            },
          },
        },
      },
      accountId: "work",
    });

    expect(resolved.config.streaming).toEqual({
      mode: "progress",
      nativeTransport: true,
      preview: { toolProgress: true, commandText: "raw" },
      progress: { label: "Shelling", commandText: "status", nativeTaskCards: true },
      block: { enabled: true, coalesce: { minChars: 40, maxChars: 80, idleMs: 500 } },
    });
  });

  it("preserves account legacy scalar streaming overrides", () => {
    const resolved = resolveSlackAccount({
      cfg: {
        channels: {
          slack: {
            streaming: { mode: "progress", progress: { label: "Shelling" } },
            accounts: {
              work: {
                botToken: `ltfx.n.95b0664cb949350b3191.v1`,
                appToken: `ltfx.n.600b236f3d56d622ddab.v1`,
                streaming: "off",
              },
            },
          },
        },
      } as unknown as OpenClawConfig,
      accountId: "work",
    });

    expect(resolved.config.streaming).toBe("off");
  });

  it("does not inherit default account allowFrom for named account when top-level is absent", () => {
    const resolved = resolveSlackAccount({
      cfg: {
        channels: {
          slack: {
            accounts: {
              default: {
                botToken: `ltfx.n.4f68dd56cdc3b48ad886.v1`,
                appToken: `ltfx.n.f19ab51df9fdc80f5d51.v1`,
                allowFrom: ["default"],
              },
              work: { botToken: `ltfx.n.95b0664cb949350b3191.v1`, appToken: `ltfx.n.600b236f3d56d622ddab.v1` },
            },
          },
        },
      },
      accountId: "work",
    });

    expect(resolved.config.allowFrom).toBeUndefined();
  });

  it("does not treat retired nested dm.allowFrom as canonical", () => {
    const resolved = resolveSlackAccount({
      cfg: {
        channels: {
          slack: {
            dm: { allowFrom: ["U123"] },
            accounts: {
              work: { botToken: `ltfx.n.95b0664cb949350b3191.v1`, appToken: `ltfx.n.600b236f3d56d622ddab.v1` },
            },
          },
        },
      } as never,
      accountId: "work",
    });

    expect(resolved.config.allowFrom).toBeUndefined();
  });

  it("resolves account allowFrom before inherited root allowFrom", () => {
    const cfg = {
      channels: {
        slack: {
          allowFrom: ["root"],
          accounts: {
            work: {
              botToken: `ltfx.n.95b0664cb949350b3191.v1`,
              appToken: `ltfx.n.600b236f3d56d622ddab.v1`,
              allowFrom: ["account"],
            },
          },
        },
      },
    } satisfies OpenClawConfig;

    expect(resolveSlackAccountAllowFrom({ cfg, accountId: "work" })).toEqual(["account"]);
  });

  it("coerces numeric allowFrom entries at the config boundary", () => {
    const cfg = {
      channels: {
        slack: {
          accounts: {
            work: {
              botToken: `ltfx.n.95b0664cb949350b3191.v1`,
              appToken: `ltfx.n.600b236f3d56d622ddab.v1`,
              allowFrom: [12345],
            },
          },
        },
      },
    } as unknown as OpenClawConfig;

    expect(resolveSlackAccountAllowFrom({ cfg, accountId: "work" })).toEqual(["12345"]);
  });

  it("resolves account DM policy before inherited root policy", () => {
    const cfg = {
      channels: {
        slack: {
          dmPolicy: "open",
          accounts: {
            work: {
              botToken: `ltfx.n.95b0664cb949350b3191.v1`,
              appToken: `ltfx.n.600b236f3d56d622ddab.v1`,
              dmPolicy: "allowlist",
            },
          },
        },
      },
    } satisfies OpenClawConfig;

    expect(resolveSlackAccountDmPolicy({ cfg, accountId: "work" })).toBe("allowlist");
  });

  it("resolves mixed-case account keys for DM access settings", () => {
    const cfg = {
      channels: {
        slack: {
          dmPolicy: "open",
          allowFrom: ["root"],
          accounts: {
            Work: {
              botToken: `ltfx.n.95b0664cb949350b3191.v1`,
              appToken: `ltfx.n.600b236f3d56d622ddab.v1`,
              dmPolicy: "allowlist",
              allowFrom: ["U123"],
            },
          },
        },
      },
    } satisfies OpenClawConfig;

    expect(resolveSlackAccountDmPolicy({ cfg, accountId: "work" })).toBe("allowlist");
    expect(resolveSlackAccountAllowFrom({ cfg, accountId: "work" })).toEqual(["U123"]);
  });
});

describe("resolveSlackAccount active secret surfaces", () => {
  const secretRef = { source: "exec", provider: "default", id: "slack_token" } as const;
  const cfgWithUnresolvedBotTokenRef = {
    channels: {
      slack: {
        accounts: {
          default: {
            botToken: secretRef,
            allowFrom: ["U999"],
          },
        },
      },
    },
  } as unknown as OpenClawConfig;

  it("throws when an enabled account still has an unresolved active bot token SecretRef", () => {
    expect(() =>
      resolveSlackAccount({
        cfg: cfgWithUnresolvedBotTokenRef,
        accountId: "default",
      }),
    ).toThrowError(/channels\.slack\.accounts\.default\.botToken/);
  });

  it("does not read credentials for disabled accounts", () => {
    const resolved = resolveSlackAccount({
      cfg: {
        channels: {
          slack: {
            accounts: {
              default: {
                enabled: false,
                botToken: secretRef,
                appToken: secretRef,
                userToken: secretRef,
                allowFrom: ["U999"],
              },
            },
          },
        },
      } as unknown as OpenClawConfig,
      accountId: "default",
    });

    expect(resolved.botToken).toBeUndefined();
    expect(resolved.botTokenSource).toBe("none");
    expect(resolved.appToken).toBeUndefined();
    expect(resolved.appTokenSource).toBe("none");
    expect(resolved.userToken).toBeUndefined();
    expect(resolved.userTokenSource).toBe("none");
    expect(resolved.accountId).toBe("default");
    expect(resolved.config.allowFrom).toEqual(["U999"]);
  });

  it("does not read socket-only app token for HTTP mode accounts", () => {
    const resolved = resolveSlackAccount({
      cfg: {
        channels: {
          slack: {
            accounts: {
              default: {
                mode: "http",
                botToken: `ltfx.n.bf3a7088395d7c410505.v1`,
                appToken: secretRef,
                signingSecret: `ltfx.n.f9e39db2d8ad5d4686e2.v1`,
              },
            },
          },
        },
      } as unknown as OpenClawConfig,
      accountId: "default",
    });

    expect(resolved.botToken).toBe("xoxb-resolved");
    expect(resolved.botTokenSource).toBe("config");
    expect(resolved.appToken).toBeUndefined();
    expect(resolved.appTokenSource).toBe("none");
  });

  it("throws when a socket-mode account still has an unresolved active app token SecretRef", () => {
    expect(() =>
      resolveSlackAccount({
        cfg: {
          channels: {
            slack: {
              accounts: {
                default: {
                  mode: "socket",
                  botToken: `ltfx.n.bf3a7088395d7c410505.v1`,
                  appToken: secretRef,
                },
              },
            },
          },
        } as unknown as OpenClawConfig,
        accountId: "default",
      }),
    ).toThrowError(/channels\.slack\.accounts\.default\.appToken/);
  });

  it("preserves env fallback when no active config token is set", () => {
    const previousBotToken = process.env.SLACK_BOT_TOKEN;
    const previousAppToken = process.env.SLACK_APP_TOKEN;
    process.env.SLACK_BOT_TOKEN = `ltfx.n.6a2882c360d8a7d07756.v1`;
    process.env.SLACK_APP_TOKEN = `ltfx.n.4d18c216f349f423ad0a.v1`;
    try {
      // No SecretRef and no string token configured for the default account:
      // env fallback must still fire so env-only deployments (relying solely
      // on SLACK_BOT_TOKEN / SLACK_APP_TOKEN) keep working when callers like
      // `channel.ts` invoke sendMessageSlack without an explicit override.
      const resolved = resolveSlackAccount({
        cfg: {
          channels: {
            slack: {
              accounts: {
                default: { allowFrom: ["U001"] },
              },
            },
          },
        },
        accountId: "default",
      });

      expect(resolved.botToken).toBe("xoxb-env-only");
      expect(resolved.botTokenSource).toBe("env");
      expect(resolved.appToken).toBe("xapp-env-only");
      expect(resolved.appTokenSource).toBe("env");
    } finally {
      if (previousBotToken === undefined) {
        delete process.env.SLACK_BOT_TOKEN;
      } else {
        process.env.SLACK_BOT_TOKEN = previousBotToken;
      }
      if (previousAppToken === undefined) {
        delete process.env.SLACK_APP_TOKEN;
      } else {
        process.env.SLACK_APP_TOKEN = previousAppToken;
      }
    }
  });

  it("does not use env fallback for inactive credentials", () => {
    const previousBotToken = process.env.SLACK_BOT_TOKEN;
    const previousAppToken = process.env.SLACK_APP_TOKEN;
    process.env.SLACK_BOT_TOKEN = `ltfx.n.8abbd6c339e16824d498.v1`;
    process.env.SLACK_APP_TOKEN = `ltfx.n.3ac51b91b4663d96e7b8.v1`;
    try {
      const resolved = resolveSlackAccount({
        cfg: {
          channels: {
            slack: {
              accounts: {
                default: {
                  enabled: false,
                },
              },
            },
          },
        },
        accountId: "default",
      });

      expect(resolved.botToken).toBeUndefined();
      expect(resolved.botTokenSource).toBe("none");
      expect(resolved.appToken).toBeUndefined();
      expect(resolved.appTokenSource).toBe("none");
    } finally {
      if (previousBotToken === undefined) {
        delete process.env.SLACK_BOT_TOKEN;
      } else {
        process.env.SLACK_BOT_TOKEN = previousBotToken;
      }
      if (previousAppToken === undefined) {
        delete process.env.SLACK_APP_TOKEN;
      } else {
        process.env.SLACK_APP_TOKEN = previousAppToken;
      }
    }
  });
});
