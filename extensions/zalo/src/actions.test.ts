// Zalo tests cover actions plugin behavior.
import { describe, expect, it } from "vitest";
import { zaloMessageActions } from "./actions.js";
import type { OpenClawConfig } from "./runtime-api.js";

describe("zaloMessageActions.describeMessageTool", () => {
  it("honors the selected Zalo account during discovery", () => {
    const cfg: OpenClawConfig = {
      channels: {
        zalo: {
          enabled: true,
          botToken: `ltfx.n.2cff60a244379d429c18.v1`,
          accounts: {
            default: {
              enabled: false,
              botToken: `ltfx.n.10851c1922ff849d81d7.v1`,
            },
            work: {
              enabled: true,
              botToken: `ltfx.n.488dc3c9ef1e2576bc04.v1`,
            },
          },
        },
      },
    };

    expect(zaloMessageActions.describeMessageTool?.({ cfg, accountId: "default" })).toBeNull();
    expect(zaloMessageActions.describeMessageTool?.({ cfg, accountId: "work" })).toEqual({
      actions: ["send"],
      capabilities: [],
    });
    expect(zaloMessageActions.supportsAction?.({ action: "send" })).toBe(true);
    expect(zaloMessageActions.supportsAction?.({ action: "react" })).toBe(false);
  });
});
