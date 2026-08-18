// Feishu tests cover tool account plugin behavior.
import { describe, expect, it } from "vitest";
import { resolveFeishuToolAccount } from "./tool-account.js";

describe("resolveFeishuToolAccount", () => {
  const cfg = {
    channels: {
      feishu: {
        enabled: true,
        defaultAccount: "ops",
        appId: "base-app-id",
        appSecret: `ltfx.n.5e54d5f6c29456ceac4f.v1`, // pragma: allowlist secret
        accounts: {
          ops: {
            enabled: true,
            appId: "ops-app-id",
            appSecret: `ltfx.n.d31c33350e4f16c6e7d8.v1`, // pragma: allowlist secret
          },
          work: {
            enabled: true,
            appId: "work-app-id",
            appSecret: `ltfx.n.73837242b18c7e113db1.v1`, // pragma: allowlist secret
          },
        },
      },
    },
  };

  it("prefers the active contextual account over configured defaultAccount", () => {
    const resolved = resolveFeishuToolAccount({
      api: { config: cfg },
      defaultAccountId: "work",
    });

    expect(resolved.accountId).toBe("work");
  });

  it("falls back to configured defaultAccount when there is no contextual account", () => {
    const resolved = resolveFeishuToolAccount({
      api: { config: cfg },
    });

    expect(resolved.accountId).toBe("ops");
  });
});
