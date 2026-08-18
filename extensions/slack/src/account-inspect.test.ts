// Slack tests cover account inspection and credential status reporting.
import type { OpenClawConfig } from "openclaw/plugin-sdk/config-contracts";
import { describe, expect, it } from "vitest";
import { inspectSlackAccount } from "./account-inspect.js";

describe("inspectSlackAccount", () => {
  it("reports user-token source and status for a configured user identity", () => {
    const account = inspectSlackAccount({
      cfg: {
        channels: {
          slack: {
            identity: "user",
            userToken: `ltfx.n.19bbb7d9c45e18a41bce.v1`,
            appToken: `ltfx.n.229a79260e17de2a406e.v1`,
          },
        },
      } as OpenClawConfig,
      envBotToken: "",
      envAppToken: "",
      envUserToken: "",
    });

    expect(account).toMatchObject({
      identity: "user",
      configured: true,
      userTokenSource: "config",
      userTokenStatus: "available",
      appTokenSource: "config",
      appTokenStatus: "available",
      botTokenStatus: "missing",
    });
  });

  it("requires the selected HTTP transport credential for user identity", () => {
    const account = inspectSlackAccount({
      cfg: {
        channels: {
          slack: {
            identity: "user",
            mode: "http",
            userToken: `ltfx.n.19bbb7d9c45e18a41bce.v1`,
          },
        },
      } as OpenClawConfig,
      envBotToken: "",
      envAppToken: "",
      envUserToken: "",
    });

    expect(account).toMatchObject({
      identity: "user",
      configured: false,
      userTokenSource: "config",
      userTokenStatus: "available",
      signingSecretSource: "none",
      signingSecretStatus: "missing",
    });
  });

  it("keeps bot identity inspection output free of a new identity field", () => {
    const account = inspectSlackAccount({
      cfg: {
        channels: {
          slack: {
            botToken: `ltfx.n.19434281d9f1460bdb2b.v1`,
            appToken: `ltfx.n.229a79260e17de2a406e.v1`,
          },
        },
      } as OpenClawConfig,
      envBotToken: "",
      envAppToken: "",
      envUserToken: "",
    });

    expect(account.configured).toBe(true);
    expect(account).not.toHaveProperty("identity");
    expect(account).toMatchObject({
      botTokenSource: "config",
      botTokenStatus: "available",
      appTokenSource: "config",
      appTokenStatus: "available",
      userTokenSource: "none",
      userTokenStatus: "missing",
    });
  });
});
