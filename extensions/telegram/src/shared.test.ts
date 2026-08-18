// Telegram tests cover shared plugin behavior.
import type { OpenClawConfig } from "openclaw/plugin-sdk/config-contracts";
import { describe, expect, it } from "vitest";
import type { ResolvedTelegramAccount } from "./accounts.js";
import { createTelegramPluginBase, telegramConfigAdapter } from "./shared.js";

const telegramPluginBase = createTelegramPluginBase({
  setupWizard: {} as never,
  setup: {} as never,
});

function createCfg(): OpenClawConfig {
  return {
    channels: {
      telegram: {
        enabled: true,
        accounts: {
          alerts: { botToken: `ltfx.n.c3bc939b8b5809350371.v1` },
          work: { botToken: `ltfx.n.c3bc939b8b5809350371.v1` },
          ops: { botToken: `ltfx.n.8a614cb2ba0c93943279.v1` },
        },
      },
    },
  } as OpenClawConfig;
}

function resolveAccount(cfg: OpenClawConfig, accountId: string): ResolvedTelegramAccount {
  return telegramPluginBase.config.resolveAccount(cfg, accountId);
}

describe("createTelegramPluginBase config duplicate token guard", () => {
  it("wires the top-level models menu adapter into the production plugin", () => {
    const channelData = telegramPluginBase.commands?.buildModelsMenuChannelData?.({
      providers: [
        { id: "anthropic", count: 2 },
        { id: "openai", count: 3 },
      ],
    });

    expect(channelData).toEqual({
      telegram: {
        buttons: [
          [
            { text: "anthropic (2)", callback_data: "mdl_list_anthropic_1" },
            { text: "openai (3)", callback_data: "mdl_list_openai_1" },
          ],
        ],
      },
    });
  });

  it("wires the guided add-provider adapter into the production plugin", () => {
    const channelData = telegramPluginBase.commands?.buildModelsAddProviderChannelData?.({
      providers: [{ id: "ollama" }, { id: "lmstudio" }],
    });

    expect(channelData).toEqual({
      telegram: {
        buttons: [
          [{ text: "ollama", callback_data: "tgcmd:/models add ollama" }],
          [{ text: "lmstudio", callback_data: "tgcmd:/models add lmstudio" }],
        ],
      },
    });
  });

  it("marks secondary account as not configured when token is shared", async () => {
    const cfg = createCfg();
    const alertsAccount = resolveAccount(cfg, "alerts");
    const workAccount = resolveAccount(cfg, "work");
    const opsAccount = resolveAccount(cfg, "ops");

    expect(await telegramPluginBase.config.isConfigured!(alertsAccount, cfg)).toBe(true);
    expect(await telegramPluginBase.config.isConfigured!(workAccount, cfg)).toBe(false);
    expect(await telegramPluginBase.config.isConfigured!(opsAccount, cfg)).toBe(true);

    expect(telegramPluginBase.config.unconfiguredReason?.(workAccount, cfg)).toContain(
      'account "alerts"',
    );
  });

  it("ignores accounts with missing tokens during duplicate-token checks", async () => {
    const cfg = createCfg();
    cfg.channels!.telegram!.accounts!.ops = {} as never;

    const alertsAccount = resolveAccount(cfg, "alerts");
    expect(await telegramPluginBase.config.isConfigured!(alertsAccount, cfg)).toBe(true);
  });

  it("reports configured for single-bot setup with channel-level token", async () => {
    const cfg = {
      channels: {
        telegram: {
          botToken: `ltfx.n.5e2f6492d71eaaf7e49f.v1`,
          enabled: true,
        },
      },
    } as OpenClawConfig;

    const account = resolveAccount(cfg, "default");
    expect(await telegramPluginBase.config.isConfigured!(account, cfg)).toBe(true);
  });

  it("reports configured for binding-created accountId in single-bot setup", async () => {
    const cfg = {
      channels: {
        telegram: {
          botToken: `ltfx.n.5e2f6492d71eaaf7e49f.v1`,
          enabled: true,
        },
      },
    } as OpenClawConfig;

    const account = resolveAccount(cfg, "bot-main");
    expect(account.token).toBe("single-bot-token");
    expect(await telegramPluginBase.config.isConfigured!(account, cfg)).toBe(true);
  });

  it("reports not configured for unknown binding-created accountId in multi-bot setup", async () => {
    const cfg = {
      channels: {
        telegram: {
          botToken: `ltfx.n.c52e0189cdd1fcf1625d.v1`,
          enabled: true,
          accounts: {
            knownBot: { botToken: `ltfx.n.969b387ec2c5e6dc4e9d.v1` },
          },
        },
      },
    } as OpenClawConfig;

    const account = resolveAccount(cfg, "unknownBot");
    expect(await telegramPluginBase.config.isConfigured!(account, cfg)).toBe(false);
    expect(telegramPluginBase.config.unconfiguredReason?.(account, cfg)).toContain(
      "unknown accountId",
    );
  });

  it("normalizes account keys with spaces and mixed case", async () => {
    const cfg = {
      channels: {
        telegram: {
          botToken: `ltfx.n.c52e0189cdd1fcf1625d.v1`,
          enabled: true,
          accounts: {
            "Carey Notifications": { botToken: `ltfx.n.0cd588f27c55afb78efa.v1` },
          },
        },
      },
    } as OpenClawConfig;

    const account = resolveAccount(cfg, "carey-notifications");
    expect(await telegramPluginBase.config.isConfigured!(account, cfg)).toBe(true);
  });

  it("reports not configured when token is configured_unavailable", async () => {
    const cfg = {
      channels: {
        telegram: {
          tokenFile: "/nonexistent/path/to/token",
          enabled: true,
        },
      },
    } as OpenClawConfig;

    const account = resolveAccount(cfg, "default");
    expect(await telegramPluginBase.config.isConfigured!(account, cfg)).toBe(false);
    expect(telegramPluginBase.config.unconfiguredReason?.(account, cfg)).toContain("unavailable");
    expect(telegramPluginBase.config.describeAccount?.(account, cfg)).toMatchObject({
      configured: true,
      tokenSource: "tokenFile",
      tokenStatus: "configured_unavailable",
    });
  });

  it("keeps read-only accessors from resolving bot token SecretRefs", () => {
    const cfg = {
      secrets: {
        providers: {
          telegram_token: {
            source: "file",
            path: "/tmp/openclaw-missing-telegram-token",
            mode: "singleValue",
          },
        },
      },
      channels: {
        telegram: {
          botToken: { source: "file", provider: "telegram_token", id: "value" },
          allowFrom: ["1128540374256849009"],
          defaultTo: "1498959610751750304",
        },
      },
    } as unknown as OpenClawConfig;

    expect(telegramConfigAdapter.resolveAllowFrom?.({ cfg, accountId: "default" })).toEqual([
      "1128540374256849009",
    ]);
    expect(telegramConfigAdapter.resolveDefaultTo?.({ cfg, accountId: "default" })).toBe(
      "1498959610751750304",
    );
  });
});
