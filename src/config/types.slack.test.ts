// Verifies Slack config TypeScript contracts match the SecretRef-capable schema.
import { describe, expect, it } from "vitest";
import type { OpenClawConfig } from "./types.js";

const slackSecretRefConfig = {
  channels: {
    slack: {
      mode: "relay",
      botToken: { source: "env", provider: "default", id: "SLACK_BOT_TOKEN" },
      appToken: { source: "env", provider: "default", id: "SLACK_APP_TOKEN" },
      signingSecret: { source: "env", provider: "default", id: "SLACK_SIGNING_SECRET" },
      userToken: { source: "env", provider: "default", id: "SLACK_USER_TOKEN" },
      relay: {
        url: `ltfx.n.82d39021b8342771f56c.v1`,
        authToken: { source: "env", provider: "default", id: "SLACK_RELAY_AUTH_TOKEN" },
        gatewayId: "team-gateway",
      },
      accounts: {
        ops: {
          mode: "http",
          botToken: { source: "env", provider: "default", id: "SLACK_OPS_BOT_TOKEN" },
          signingSecret: {
            source: "env",
            provider: "default",
            id: "SLACK_OPS_SIGNING_SECRET",
          },
        },
      },
    },
  },
} satisfies OpenClawConfig;

describe("Slack config types", () => {
  it("accepts SecretRef-backed token fields", () => {
    expect(slackSecretRefConfig.channels.slack.relay.authToken).toMatchObject({
      id: "SLACK_RELAY_AUTH_TOKEN",
    });
  });
});
