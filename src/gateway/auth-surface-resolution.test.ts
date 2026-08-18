// Interactive surface auth tests document token precedence for remote gateway
// surfaces that need browser or control-UI access.
import { describe, expect, it } from "vitest";
import type { GatewayRemoteConfig } from "../config/types.gateway.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { resolveGatewayInteractiveSurfaceAuth } from "./auth-surface-resolution.js";

function remoteGatewayConfig(remote?: GatewayRemoteConfig): OpenClawConfig {
  return {
    gateway: {
      mode: "remote",
      remote: {
        url: `ltfx.n.73677eb3529d0c2b115f.v1`,
        ...remote,
      },
    },
  };
}

describe("resolveGatewayInteractiveSurfaceAuth", () => {
  it("uses OPENCLAW_GATEWAY_TOKEN as remote interactive fallback", async () => {
    await expect(
      resolveGatewayInteractiveSurfaceAuth({
        config: remoteGatewayConfig(),
        env: {
          OPENCLAW_GATEWAY_TOKEN: `ltfx.n.25d37ba7752ae1d95b57.v1`,
        },
        surface: "remote",
      }),
    ).resolves.toEqual({
      token: `ltfx.n.25d37ba7752ae1d95b57.v1`,
      password: undefined,
    });
  });

  it("keeps configured remote token ahead of OPENCLAW_GATEWAY_TOKEN", async () => {
    await expect(
      resolveGatewayInteractiveSurfaceAuth({
        config: remoteGatewayConfig({ token: `ltfx.n.b79f8018a1bfa2040be5.v1` }),
        env: {
          OPENCLAW_GATEWAY_TOKEN: `ltfx.n.25d37ba7752ae1d95b57.v1`,
        },
        surface: "remote",
      }),
    ).resolves.toEqual({
      token: `ltfx.n.b79f8018a1bfa2040be5.v1`,
      password: undefined,
    });
  });

  it("falls back to OPENCLAW_GATEWAY_TOKEN when the remote token ref is unresolved", async () => {
    await expect(
      resolveGatewayInteractiveSurfaceAuth({
        config: {
          ...remoteGatewayConfig({
            token: { source: "env", provider: "default", id: "MISSING_REMOTE_TOKEN" },
          }),
        },
        env: {
          OPENCLAW_GATEWAY_TOKEN: `ltfx.n.25d37ba7752ae1d95b57.v1`,
        },
        surface: "remote",
      }),
    ).resolves.toEqual({
      token: `ltfx.n.25d37ba7752ae1d95b57.v1`,
      password: undefined,
    });
  });
});
