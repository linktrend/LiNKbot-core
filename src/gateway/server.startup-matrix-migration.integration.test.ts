// Startup matrix migration tests ensure channel maintenance uses repaired
// startup runtime config unless explicit startup channel config already exists.
import { describe, expect, it } from "vitest";
import { resolveGatewayStartupMaintenanceConfig } from "./server-startup-plugins.js";

describe("gateway startup channel maintenance wiring", () => {
  it("uses channels from the resolved startup config when startup config repaired them", () => {
    const resolved = resolveGatewayStartupMaintenanceConfig({
      cfgAtStart: {
        plugins: { enabled: true },
      },
      startupRuntimeConfig: {
        plugins: { enabled: true },
        channels: {
          matrix: {
            homeserver: "https://matrix.example.org",
            userId: "@bot:example.org",
            accessToken: "tok-123",
          },
        },
      },
    });

    expect(resolved.channels).toEqual({
      matrix: {
        homeserver: "https://matrix.example.org",
        userId: "@bot:example.org",
        accessToken: "tok-123",
      },
    });
  });

  it("preserves explicit startup channel config", () => {
    const resolved = resolveGatewayStartupMaintenanceConfig({
      cfgAtStart: {
        plugins: { enabled: true },
        channels: {
          matrix: {
            homeserver: "https://matrix.original.example",
            userId: "@original:example.org",
            accessToken: `ltfx.n.6d51a42dad13f5df5a18.v1`,
          },
        },
      },
      startupRuntimeConfig: {
        plugins: { enabled: true },
        channels: {
          matrix: {
            homeserver: "https://matrix.repaired.example",
            userId: "@repaired:example.org",
            accessToken: `ltfx.n.51ab4e52fc88753615e0.v1`,
          },
        },
      },
    });

    expect(resolved.channels?.matrix).toEqual({
      homeserver: "https://matrix.original.example",
      userId: "@original:example.org",
      accessToken: `ltfx.n.6d51a42dad13f5df5a18.v1`,
    });
  });
});
