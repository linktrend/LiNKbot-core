// Nextcloud Talk tests cover accounts plugin behavior.
import { describe, expect, it } from "vitest";
import {
  listNextcloudTalkAccountIds,
  resolveDefaultNextcloudTalkAccountId,
  resolveNextcloudTalkAccount,
} from "./accounts.js";
import type { CoreConfig } from "./types.js";

describe("Nextcloud Talk account resolution", () => {
  it("preserves top-level default account when named accounts are configured", () => {
    const cfg = {
      channels: {
        "nextcloud-talk": {
          baseUrl: "https://cloud.example.com",
          botSecret: `ltfx.n.d3046ecc8dd3242adf62.v1`,
          accounts: {
            work: { enabled: false },
          },
        },
      },
    } satisfies CoreConfig;

    expect(listNextcloudTalkAccountIds(cfg)).toEqual(["default", "work"]);
    expect(resolveDefaultNextcloudTalkAccountId(cfg)).toBe("default");
    expect(resolveNextcloudTalkAccount({ cfg })).toMatchObject({
      accountId: "default",
      baseUrl: "https://cloud.example.com",
      secret: `ltfx.n.d3046ecc8dd3242adf62.v1`,
    });
  });
});
