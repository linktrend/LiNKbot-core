/** Tests runtime secret auditing for externalized channel plugin surfaces. */
import path from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { OpenClawConfig } from "../config/config.js";
import type { PluginManifestRecord } from "../plugins/manifest-registry.js";
import type { PluginOrigin } from "../plugins/plugin-origin.types.js";
import { getPath } from "./path-utils.js";

const {
  getBootstrapChannelSecretsMock,
  loadBundledPluginPublicArtifactModuleSyncMock,
  loadPluginMetadataSnapshotMock,
} = vi.hoisted(() => ({
  getBootstrapChannelSecretsMock: vi.fn(),
  loadBundledPluginPublicArtifactModuleSyncMock: vi.fn(),
  loadPluginMetadataSnapshotMock: vi.fn(),
}));

vi.mock("../plugins/plugin-metadata-snapshot.js", () => ({
  loadPluginMetadataSnapshot: loadPluginMetadataSnapshotMock,
  listPluginOriginsFromMetadataSnapshot: (snapshot: {
    plugins: Array<{ id: string; origin: PluginOrigin }>;
  }) => new Map(snapshot.plugins.map((record) => [record.id, record.origin])),
}));

vi.mock("../plugins/public-surface-loader.js", () => ({
  loadBundledPluginPublicArtifactModuleSync: loadBundledPluginPublicArtifactModuleSyncMock,
}));

vi.mock("../channels/plugins/bootstrap-registry.js", () => ({
  getBootstrapChannelSecrets: getBootstrapChannelSecretsMock,
}));

import {
  asConfig,
  loadAuthStoreWithProfiles,
  setupSecretsRuntimeSnapshotTestHooks,
} from "./runtime.test-support.ts";

const { prepareSecretsRuntimeSnapshot } = setupSecretsRuntimeSnapshotTestHooks();

const EXTERNALIZED_CHANNEL_IDS = [
  "discord",
  "feishu",
  "googlechat",
  "msteams",
  "nextcloud-talk",
  "zalo",
] as const;

type ExternalizedChannelId = (typeof EXTERNALIZED_CHANNEL_IDS)[number];

function ref(id: string) {
  return { source: "env", provider: "default", id };
}

function inactiveExecRef(id: string) {
  return { source: "exec", provider: "vault", id };
}

function createExternalChannelRecord(id: ExternalizedChannelId): PluginManifestRecord {
  const rootDir = path.resolve("extensions", id);
  return {
    id,
    channels: [id],
    providers: [],
    cliBackends: [],
    skills: [],
    hooks: [],
    origin: "global",
    rootDir,
    source: path.join(rootDir, "index.js"),
    manifestPath: path.join(rootDir, "openclaw.plugin.json"),
  };
}

function configureExternalChannelRecords(
  channelIds: readonly ExternalizedChannelId[] = EXTERNALIZED_CHANNEL_IDS,
): PluginManifestRecord[] {
  const records = channelIds.map((id) => createExternalChannelRecord(id));
  loadPluginMetadataSnapshotMock.mockReturnValue({ plugins: records });
  return records;
}

function externalChannelOrigins(records: readonly PluginManifestRecord[]) {
  return new Map(records.map((record) => [record.id, record.origin] as const));
}

function mockBundledPublicArtifactMiss() {
  loadBundledPluginPublicArtifactModuleSyncMock.mockImplementation(
    (params: { dirName: string; artifactBasename: string }) => {
      if (params.dirName === "googlechat" && params.artifactBasename === "secret-contract-api.js") {
        return createGoogleChatSecretContractApi();
      }
      throw new Error(
        `Unable to resolve bundled plugin public surface ${params.dirName}/${params.artifactBasename}`,
      );
    },
  );
}

function createGoogleChatSecretContractApi() {
  const secretTargetRegistryEntries = [
    {
      id: "channels.googlechat.accounts.*.serviceAccount",
      targetType: "channels.googlechat.serviceAccount",
      targetTypeAliases: ["channels.googlechat.accounts.*.serviceAccount"],
      configFile: "openclaw.json",
      pathPattern: "channels.googlechat.accounts.*.serviceAccount",
      refPathPattern: "channels.googlechat.accounts.*.serviceAccountRef",
      secretShape: "sibling_ref",
      expectedResolvedValue: "string-or-object",
      includeInPlan: true,
      includeInConfigure: true,
      includeInAudit: true,
      accountIdPathSegmentIndex: 3,
    },
    {
      id: "channels.googlechat.serviceAccount",
      targetType: "channels.googlechat.serviceAccount",
      configFile: "openclaw.json",
      pathPattern: "channels.googlechat.serviceAccount",
      refPathPattern: "channels.googlechat.serviceAccountRef",
      secretShape: "sibling_ref",
      expectedResolvedValue: "string-or-object",
      includeInPlan: true,
      includeInConfigure: true,
      includeInAudit: true,
    },
  ];
  const collectRuntimeConfigAssignments = (params: {
    config: { channels?: { googlechat?: Record<string, unknown> } };
    context: {
      assignments: Array<{
        ref: unknown;
        path: string;
        expected: "string-or-object";
        apply: (value: unknown) => void;
      }>;
      warnings: Array<{ code: string; path: string; message: string }>;
    };
  }) => {
    const googlechat = params.config.channels?.googlechat;
    if (!googlechat) {
      return;
    }
    const collect = (target: Record<string, unknown>, pathKey: string, active: boolean) => {
      const refValue = target.serviceAccountRef;
      if (!refValue) {
        return;
      }
      const pathLocal = `${pathKey}.serviceAccount`;
      if (!active) {
        params.context.warnings.push({
          code: "SECRETS_REF_IGNORED_INACTIVE_SURFACE",
          path: pathLocal,
          message: `${pathLocal}: Google Chat account is disabled.`,
        });
        return;
      }
      params.context.assignments.push({
        ref: refValue,
        path: pathLocal,
        expected: "string-or-object",
        apply: (value) => {
          target.serviceAccount = value;
        },
      });
    };

    collect(googlechat, "channels.googlechat", googlechat.enabled !== false);
    const accounts = googlechat.accounts as Record<string, Record<string, unknown>> | undefined;
    for (const [accountId, account] of Object.entries(accounts ?? {})) {
      collect(account, `channels.googlechat.accounts.${accountId}`, account.enabled !== false);
    }
  };
  return {
    channelSecrets: {
      secretTargetRegistryEntries,
      collectRuntimeConfigAssignments,
    },
    secretTargetRegistryEntries,
    collectRuntimeConfigAssignments,
  };
}

function expectMetadataBackedContractsWereUsed(
  channelIds: readonly ExternalizedChannelId[] = EXTERNALIZED_CHANNEL_IDS,
) {
  expect(getBootstrapChannelSecretsMock).not.toHaveBeenCalled();
  if (channelIds.some((channelId) => channelId !== "googlechat")) {
    expect(loadPluginMetadataSnapshotMock).toHaveBeenCalled();
  }
  for (const channelId of channelIds) {
    expect(loadBundledPluginPublicArtifactModuleSyncMock).toHaveBeenCalledWith({
      dirName: channelId,
      artifactBasename: "secret-contract-api.js",
    });
    expect(loadBundledPluginPublicArtifactModuleSyncMock).not.toHaveBeenCalledWith({
      dirName: channelId,
      artifactBasename: "contract-api.js",
    });
  }
}

function expectResolvedPaths(config: OpenClawConfig, expected: Record<string, unknown>) {
  for (const [pathKey, expectedValue] of Object.entries(expected)) {
    expect(getPath(config, pathKey.split(".")), pathKey).toBe(expectedValue);
  }
}

describe("secrets runtime externalized channel SecretRef audit", () => {
  beforeEach(() => {
    getBootstrapChannelSecretsMock.mockReset();
    getBootstrapChannelSecretsMock.mockReturnValue(undefined);
    loadBundledPluginPublicArtifactModuleSyncMock.mockReset();
    mockBundledPublicArtifactMiss();
    loadPluginMetadataSnapshotMock.mockReset();
  });

  it.each(EXTERNALIZED_CHANNEL_IDS)(
    "resolves active SecretRef targets for %s contract",
    async (channelId) => {
      const records = configureExternalChannelRecords([channelId]);
      const config = asConfig({
        channels: {
          discord: {
            token: ref("DISCORD_TOKEN"),
            pluralkit: {
              enabled: true,
              token: ref("DISCORD_PLURALKIT_TOKEN"),
            },
            voice: {
              enabled: true,
              tts: {
                providers: {
                  openai: { apiKey: ref("DISCORD_VOICE_TTS_API_KEY") },
                },
              },
            },
            accounts: {
              inherited: {
                enabled: true,
              },
              work: {
                enabled: true,
                token: ref("DISCORD_WORK_TOKEN"),
                pluralkit: {
                  enabled: true,
                  token: ref("DISCORD_WORK_PLURALKIT_TOKEN"),
                },
                voice: {
                  enabled: true,
                  tts: {
                    providers: {
                      openai: { apiKey: ref("DISCORD_WORK_VOICE_TTS_API_KEY") },
                    },
                  },
                },
              },
            },
          },
          feishu: {
            connectionMode: "webhook",
            appSecret: ref("FEISHU_APP_SECRET"),
            encryptKey: ref("FEISHU_ENCRYPT_KEY"),
            verificationToken: ref("FEISHU_VERIFICATION_TOKEN"),
            accounts: {
              inherited: {
                enabled: true,
                connectionMode: "webhook",
              },
              work: {
                enabled: true,
                connectionMode: "webhook",
                appSecret: ref("FEISHU_WORK_APP_SECRET"),
                encryptKey: ref("FEISHU_WORK_ENCRYPT_KEY"),
                verificationToken: ref("FEISHU_WORK_VERIFICATION_TOKEN"),
              },
            },
          },
          googlechat: {
            serviceAccountRef: ref("GOOGLECHAT_SERVICE_ACCOUNT"),
            accounts: {
              inherited: {
                enabled: true,
              },
              work: {
                enabled: true,
                serviceAccountRef: ref("GOOGLECHAT_WORK_SERVICE_ACCOUNT"),
              },
            },
          },
          msteams: {
            appPassword: ref("MSTEAMS_APP_PASSWORD"),
          },
          "nextcloud-talk": {
            botSecret: ref("NEXTCLOUD_TALK_BOT_SECRET"),
            apiPassword: ref("NEXTCLOUD_TALK_API_PASSWORD"),
            accounts: {
              inherited: {
                enabled: true,
              },
              work: {
                enabled: true,
                botSecret: ref("NEXTCLOUD_TALK_WORK_BOT_SECRET"),
                apiPassword: ref("NEXTCLOUD_TALK_WORK_API_PASSWORD"),
              },
            },
          },
          zalo: {
            webhookUrl: "https://example.test/zalo",
            botToken: ref("ZALO_BOT_TOKEN"),
            webhookSecret: ref("ZALO_WEBHOOK_SECRET"),
            accounts: {
              inherited: {
                enabled: true,
              },
              work: {
                enabled: true,
                webhookUrl: "https://example.test/zalo-work",
                botToken: ref("ZALO_WORK_BOT_TOKEN"),
                webhookSecret: ref("ZALO_WORK_WEBHOOK_SECRET"),
              },
            },
          },
        },
      });
      const channels = (config as { channels: Record<string, unknown> }).channels;
      (config as { channels: Record<string, unknown> }).channels = {
        [channelId]: channels[channelId],
      };

      const snapshot = await prepareSecretsRuntimeSnapshot({
        config,
        env: {
          DISCORD_TOKEN: `ltfx.n.0017ec88d6aa85df6bc5.v1`,
          DISCORD_PLURALKIT_TOKEN: `ltfx.n.6ff084b7beec777891c2.v1`,
          DISCORD_VOICE_TTS_API_KEY: `ltfx.n.8e1344652dfcb6e7f4a5.v1`,
          DISCORD_WORK_TOKEN: `ltfx.n.9682d110bb2995ac6015.v1`,
          DISCORD_WORK_PLURALKIT_TOKEN: `ltfx.n.cfdf73c2d3525bbf658b.v1`,
          DISCORD_WORK_VOICE_TTS_API_KEY: `ltfx.n.c2c4cf5af9e896460137.v1`,
          FEISHU_APP_SECRET: `ltfx.n.06702934db73aadc7390.v1`,
          FEISHU_ENCRYPT_KEY: "feishu-encrypt-key",
          FEISHU_VERIFICATION_TOKEN: `ltfx.n.4368418246a6e981c4e3.v1`,
          FEISHU_WORK_APP_SECRET: `ltfx.n.83a6ab4da69f52e1512f.v1`,
          FEISHU_WORK_ENCRYPT_KEY: "feishu-work-encrypt-key",
          FEISHU_WORK_VERIFICATION_TOKEN: `ltfx.n.f78859c90c1ca209ee72.v1`,
          GOOGLECHAT_SERVICE_ACCOUNT: "googlechat-service-account",
          GOOGLECHAT_WORK_SERVICE_ACCOUNT: "googlechat-work-service-account",
          MSTEAMS_APP_PASSWORD: `ltfx.n.f026503a64893e8fc182.v1`,
          NEXTCLOUD_TALK_BOT_SECRET: `ltfx.n.18f9cd874db3253a0ce3.v1`,
          NEXTCLOUD_TALK_API_PASSWORD: `ltfx.n.c277ebf2e3805752cb97.v1`,
          NEXTCLOUD_TALK_WORK_BOT_SECRET: `ltfx.n.8fe0968105efa26b74ae.v1`,
          NEXTCLOUD_TALK_WORK_API_PASSWORD: `ltfx.n.880580ea52a6ee46cc3f.v1`,
          ZALO_BOT_TOKEN: `ltfx.n.bfc31b89d6d844e525f3.v1`,
          ZALO_WEBHOOK_SECRET: `ltfx.n.1519265ff1503d63e953.v1`,
          ZALO_WORK_BOT_TOKEN: `ltfx.n.81e929469a80ccf24d7c.v1`,
          ZALO_WORK_WEBHOOK_SECRET: `ltfx.n.45998c02d712f845b202.v1`,
        },
        includeAuthStoreRefs: false,
        loadablePluginOrigins: externalChannelOrigins(records),
      });

      const expectedPaths = {
        "channels.discord.token": `ltfx.n.0017ec88d6aa85df6bc5.v1`,
        "channels.discord.pluralkit.token": `ltfx.n.6ff084b7beec777891c2.v1`,
        "channels.discord.voice.tts.providers.openai.apiKey": `ltfx.n.8e1344652dfcb6e7f4a5.v1`,
        "channels.discord.accounts.work.token": `ltfx.n.9682d110bb2995ac6015.v1`,
        "channels.discord.accounts.work.pluralkit.token": `ltfx.n.cfdf73c2d3525bbf658b.v1`,
        "channels.discord.accounts.work.voice.tts.providers.openai.apiKey":
          "discord-work-voice-tts-api-key",
        "channels.feishu.appSecret": `ltfx.n.06702934db73aadc7390.v1`,
        "channels.feishu.encryptKey": "feishu-encrypt-key",
        "channels.feishu.verificationToken": `ltfx.n.4368418246a6e981c4e3.v1`,
        "channels.feishu.accounts.work.appSecret": `ltfx.n.83a6ab4da69f52e1512f.v1`,
        "channels.feishu.accounts.work.encryptKey": "feishu-work-encrypt-key",
        "channels.feishu.accounts.work.verificationToken": `ltfx.n.f78859c90c1ca209ee72.v1`,
        "channels.googlechat.serviceAccount": "googlechat-service-account",
        "channels.googlechat.accounts.work.serviceAccount": "googlechat-work-service-account",
        "channels.msteams.appPassword": `ltfx.n.f026503a64893e8fc182.v1`,
        "channels.nextcloud-talk.botSecret": `ltfx.n.18f9cd874db3253a0ce3.v1`,
        "channels.nextcloud-talk.apiPassword": `ltfx.n.c277ebf2e3805752cb97.v1`,
        "channels.nextcloud-talk.accounts.work.botSecret": `ltfx.n.8fe0968105efa26b74ae.v1`,
        "channels.nextcloud-talk.accounts.work.apiPassword": `ltfx.n.880580ea52a6ee46cc3f.v1`,
        "channels.zalo.botToken": `ltfx.n.bfc31b89d6d844e525f3.v1`,
        "channels.zalo.webhookSecret": `ltfx.n.1519265ff1503d63e953.v1`,
        "channels.zalo.accounts.work.botToken": `ltfx.n.81e929469a80ccf24d7c.v1`,
        "channels.zalo.accounts.work.webhookSecret": `ltfx.n.45998c02d712f845b202.v1`,
      };
      expectResolvedPaths(
        snapshot.config,
        Object.fromEntries(
          Object.entries(expectedPaths).filter(([pathKey]) =>
            pathKey.startsWith(`channels.${channelId}.`),
          ),
        ),
      );
      expect(snapshot.warnings).toStrictEqual([]);
      expectMetadataBackedContractsWereUsed([channelId]);
    },
  );

  it("skips inactive exec-backed SecretRefs for every externalized channel contract", async () => {
    const records = configureExternalChannelRecords();
    const config = asConfig({
      channels: {
        discord: {
          enabled: false,
          token: inactiveExecRef("DISCORD_DISABLED_TOKEN"),
          pluralkit: {
            enabled: true,
            token: inactiveExecRef("DISCORD_DISABLED_PLURALKIT_TOKEN"),
          },
          voice: {
            enabled: true,
            tts: {
              providers: {
                openai: {
                  apiKey: inactiveExecRef("DISCORD_DISABLED_VOICE_TTS_API_KEY"),
                },
              },
            },
          },
          accounts: {
            disabled: {
              enabled: false,
              token: inactiveExecRef("DISCORD_DISABLED_ACCOUNT_TOKEN"),
              pluralkit: {
                enabled: true,
                token: inactiveExecRef("DISCORD_DISABLED_ACCOUNT_PLURALKIT_TOKEN"),
              },
              voice: {
                enabled: true,
                tts: {
                  providers: {
                    openai: {
                      apiKey: inactiveExecRef("DISCORD_DISABLED_ACCOUNT_VOICE_TTS_API_KEY"),
                    },
                  },
                },
              },
            },
          },
        },
        feishu: {
          enabled: false,
          connectionMode: "webhook",
          appSecret: inactiveExecRef("FEISHU_DISABLED_APP_SECRET"),
          encryptKey: inactiveExecRef("FEISHU_DISABLED_ENCRYPT_KEY"),
          verificationToken: inactiveExecRef("FEISHU_DISABLED_VERIFICATION_TOKEN"),
          accounts: {
            disabled: {
              enabled: false,
              connectionMode: "webhook",
              appSecret: inactiveExecRef("FEISHU_DISABLED_ACCOUNT_APP_SECRET"),
              encryptKey: inactiveExecRef("FEISHU_DISABLED_ACCOUNT_ENCRYPT_KEY"),
              verificationToken: inactiveExecRef("FEISHU_DISABLED_ACCOUNT_VERIFICATION_TOKEN"),
            },
          },
        },
        googlechat: {
          enabled: false,
          serviceAccountRef: inactiveExecRef("GOOGLECHAT_DISABLED_SERVICE_ACCOUNT"),
          accounts: {
            disabled: {
              enabled: false,
              serviceAccountRef: inactiveExecRef("GOOGLECHAT_DISABLED_ACCOUNT_SERVICE_ACCOUNT"),
            },
          },
        },
        msteams: {
          enabled: false,
          appPassword: inactiveExecRef("MSTEAMS_DISABLED_APP_PASSWORD"),
        },
        "nextcloud-talk": {
          enabled: false,
          botSecret: inactiveExecRef("NEXTCLOUD_TALK_DISABLED_BOT_SECRET"),
          apiPassword: inactiveExecRef("NEXTCLOUD_TALK_DISABLED_API_PASSWORD"),
          accounts: {
            disabled: {
              enabled: false,
              botSecret: inactiveExecRef("NEXTCLOUD_TALK_DISABLED_ACCOUNT_BOT_SECRET"),
              apiPassword: inactiveExecRef("NEXTCLOUD_TALK_DISABLED_ACCOUNT_API_PASSWORD"),
            },
          },
        },
        zalo: {
          enabled: false,
          webhookUrl: "https://example.test/zalo-disabled",
          botToken: inactiveExecRef("ZALO_DISABLED_BOT_TOKEN"),
          webhookSecret: inactiveExecRef("ZALO_DISABLED_WEBHOOK_SECRET"),
          accounts: {
            disabled: {
              enabled: false,
              webhookUrl: "https://example.test/zalo-account-disabled",
              botToken: inactiveExecRef("ZALO_DISABLED_ACCOUNT_BOT_TOKEN"),
              webhookSecret: inactiveExecRef("ZALO_DISABLED_ACCOUNT_WEBHOOK_SECRET"),
            },
          },
        },
      },
    });

    const snapshot = await prepareSecretsRuntimeSnapshot({
      config,
      env: {},
      agentDirs: ["/tmp/openclaw-agent-main"],
      loadAuthStore: () => loadAuthStoreWithProfiles({}),
      loadablePluginOrigins: externalChannelOrigins(records),
    });

    expect(getPath(snapshot.config, ["channels", "discord", "token"])).toEqual(
      inactiveExecRef("DISCORD_DISABLED_TOKEN"),
    );
    expect(
      getPath(snapshot.config, ["channels", "zalo", "accounts", "disabled", "botToken"]),
    ).toEqual(inactiveExecRef("ZALO_DISABLED_ACCOUNT_BOT_TOKEN"));
    expect(snapshot.warnings.map((warning) => warning.path)).toStrictEqual([
      "channels.discord.token",
      "channels.discord.accounts.disabled.token",
      "channels.discord.pluralkit.token",
      "channels.discord.accounts.disabled.pluralkit.token",
      "channels.discord.voice.tts.providers.openai.apiKey",
      "channels.discord.accounts.disabled.voice.tts.providers.openai.apiKey",
      "channels.feishu.appSecret",
      "channels.feishu.accounts.disabled.appSecret",
      "channels.feishu.encryptKey",
      "channels.feishu.accounts.disabled.encryptKey",
      "channels.feishu.verificationToken",
      "channels.feishu.accounts.disabled.verificationToken",
      "channels.googlechat.serviceAccount",
      "channels.googlechat.accounts.disabled.serviceAccount",
      "channels.msteams.appPassword",
      "channels.nextcloud-talk.botSecret",
      "channels.nextcloud-talk.accounts.disabled.botSecret",
      "channels.nextcloud-talk.apiPassword",
      "channels.nextcloud-talk.accounts.disabled.apiPassword",
      "channels.zalo.botToken",
      "channels.zalo.accounts.disabled.botToken",
      "channels.zalo.webhookSecret",
      "channels.zalo.accounts.disabled.webhookSecret",
    ]);
    expectMetadataBackedContractsWereUsed();
  });

  it("resolves Feishu top-level appSecret SecretRef for the implicit default account", async () => {
    const records = configureExternalChannelRecords(["feishu"]);
    const snapshot = await prepareSecretsRuntimeSnapshot({
      config: asConfig({
        channels: {
          feishu: {
            enabled: true,
            appId: "cli_default",
            appSecret: ref("FEISHU_APP_SECRET"),
            accounts: {
              "resource-shrimp": {
                enabled: true,
                appId: "cli_resource",
                appSecret: `ltfx.n.f077ca283b31d15a1099.v1`, // pragma: allowlist secret
              },
            },
          },
        },
      }),
      env: { FEISHU_APP_SECRET: `ltfx.n.0a9f34c448a4bb29e6f2.v1` },
      includeAuthStoreRefs: false,
      loadablePluginOrigins: externalChannelOrigins(records),
    });

    expectResolvedPaths(snapshot.config, {
      "channels.feishu.appSecret": `ltfx.n.0a9f34c448a4bb29e6f2.v1`,
      "channels.feishu.accounts.resource-shrimp.appSecret": `ltfx.n.f077ca283b31d15a1099.v1`,
    });
    expect(snapshot.warnings).toStrictEqual([]);
    expectMetadataBackedContractsWereUsed(["feishu"]);
  });
});
