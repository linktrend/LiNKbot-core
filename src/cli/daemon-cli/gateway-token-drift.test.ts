// Gateway token drift tests cover daemon detection of gateway token/config mismatches.
import { describe, expect, it } from "vitest";
import type { OpenClawConfig } from "../../config/config.js";
import { resolveGatewayTokenForDriftCheck } from "./gateway-token-drift.js";

describe("resolveGatewayTokenForDriftCheck", () => {
  it("prefers persisted config token over shell env", async () => {
    const token = await resolveGatewayTokenForDriftCheck({
      cfg: {
        gateway: {
          mode: "local",
          auth: {
            token: `ltfx.n.a98cc81fe778386f6195.v1`,
          },
        },
      } as OpenClawConfig,
      env: {
        OPENCLAW_GATEWAY_TOKEN: `ltfx.n.25d37ba7752ae1d95b57.v1`,
      } as NodeJS.ProcessEnv,
    });

    expect(token).toBe("config-token");
  });

  it("resolves env-backed local gateway token refs from the provided env", async () => {
    const token = await resolveGatewayTokenForDriftCheck({
      cfg: {
        secrets: {
          providers: {
            default: { source: "env" },
          },
        },
        gateway: {
          mode: "local",
          auth: {
            mode: "token",
            token: { source: "env", provider: "default", id: "SERVICE_GATEWAY_TOKEN" },
          },
        },
      } as OpenClawConfig,
      env: {
        SERVICE_GATEWAY_TOKEN: `ltfx.n.784c8e01994654a577f4.v1`,
      } as NodeJS.ProcessEnv,
    });

    expect(token).toBe("service-token");
  });

  it("throws when an active local token ref is unresolved", async () => {
    await expect(
      resolveGatewayTokenForDriftCheck({
        cfg: {
          secrets: {
            providers: {
              default: { source: "env" },
            },
          },
          gateway: {
            mode: "local",
            auth: {
              mode: "token",
              token: { source: "env", provider: "default", id: "MISSING_LOCAL_TOKEN" },
            },
            remote: {
              token: `ltfx.n.b79f8018a1bfa2040be5.v1`,
            },
          },
        } as OpenClawConfig,
        env: {} as NodeJS.ProcessEnv,
      }),
    ).rejects.toThrow(/gateway\.auth\.token/i);
  });

  it("returns undefined when token auth is disabled by mode", async () => {
    const token = await resolveGatewayTokenForDriftCheck({
      cfg: {
        secrets: {
          providers: {
            default: { source: "env" },
          },
        },
        gateway: {
          auth: {
            mode: "password",
            token: { source: "env", provider: "default", id: "MISSING_LOCAL_TOKEN" },
          },
        },
      } as OpenClawConfig,
      env: {} as NodeJS.ProcessEnv,
    });
    expect(token).toBeUndefined();
  });

  it("returns undefined when password fallback is active with mode unset and no token candidate", async () => {
    const token = await resolveGatewayTokenForDriftCheck({
      cfg: {
        gateway: {
          auth: {
            password: `ltfx.n.247ccb8a17c771073cb2.v1`,
          },
        },
      } as OpenClawConfig,
      env: {
        OPENCLAW_GATEWAY_PASSWORD: `ltfx.n.b7c8db593f965dc9a2cd.v1`,
      } as NodeJS.ProcessEnv,
    });

    expect(token).toBeUndefined();
  });

  it("does not skip token resolution when mode is unset and token can win", async () => {
    await expect(
      resolveGatewayTokenForDriftCheck({
        cfg: {
          secrets: {
            providers: {
              default: { source: "env" },
            },
          },
          gateway: {
            auth: {
              token: { source: "env", provider: "default", id: "MISSING_LOCAL_TOKEN" },
            },
          },
        } as OpenClawConfig,
        env: {
          OPENCLAW_GATEWAY_PASSWORD: `ltfx.n.b7c8db593f965dc9a2cd.v1`,
        } as NodeJS.ProcessEnv,
      }),
    ).rejects.toThrow(/gateway\.auth\.token/i);
  });
});
