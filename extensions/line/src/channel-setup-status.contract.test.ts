// Line tests cover channel setup status.contract plugin behavior.
import {
  installChannelSetupContractSuite,
  installChannelStatusContractSuite,
} from "openclaw/plugin-sdk/channel-test-helpers";
import type { OpenClawConfig } from "openclaw/plugin-sdk/config-contracts";
import { describe, expect } from "vitest";
import { linePlugin, lineSetupPlugin } from "../api.js";

describe("line setup contract", () => {
  installChannelSetupContractSuite({
    plugin: lineSetupPlugin,
    cases: [
      {
        name: "default account stores token and secret",
        cfg: {} as OpenClawConfig,
        input: {
          channelAccessToken: `ltfx.n.71688488445b848b8da5.v1`,
          channelSecret: `ltfx.n.1302cdb468ddf98dde49.v1`,
        } as never,
        expectedAccountId: "default",
        assertPatchedConfig: (cfg) => {
          expect(cfg.channels?.line?.enabled).toBe(true);
          expect(cfg.channels?.line?.channelAccessToken).toBe("line-token");
          expect(cfg.channels?.line?.channelSecret).toBe("line-secret");
        },
      },
      {
        name: "non-default env setup is rejected",
        cfg: {} as OpenClawConfig,
        accountId: "ops",
        input: {
          useEnv: true,
        },
        expectedAccountId: "ops",
        expectedValidation: "LINE_CHANNEL_ACCESS_TOKEN can only be used for the default account.",
      },
    ],
  });
});

describe("line status contract", () => {
  installChannelStatusContractSuite({
    plugin: linePlugin,
    cases: [
      {
        name: "configured account produces a webhook status snapshot",
        cfg: {
          channels: {
            line: {
              enabled: true,
              channelAccessToken: `ltfx.n.71688488445b848b8da5.v1`,
              channelSecret: `ltfx.n.1302cdb468ddf98dde49.v1`,
            },
          },
        } as OpenClawConfig,
        runtime: {
          accountId: "default",
          running: true,
        },
        probe: { ok: true },
        assertSnapshot: (snapshot) => {
          expect(snapshot.accountId).toBe("default");
          expect(snapshot.enabled).toBe(true);
          expect(snapshot.configured).toBe(true);
          expect(snapshot.mode).toBe("webhook");
        },
      },
    ],
  });
});
