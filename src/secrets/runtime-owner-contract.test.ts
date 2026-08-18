import { describe, expect, it } from "vitest";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { digestRuntimeWebOwnerContract } from "./runtime-owner-contract.js";

function digestWebContract(sourceConfig: OpenClawConfig): string {
  return digestRuntimeWebOwnerContract({
    scopePath: "plugins.entries.web-search.config.webSearch.apiKey",
    configuredProvider: "brave",
    toolConfig: sourceConfig.tools?.web?.search,
    providers: [{ id: "brave", pluginId: "web-search" }],
    providerId: "brave",
    sourceConfig,
  });
}

describe("runtime owner contracts", () => {
  it("canonicalizes equivalent web-owner SecretRef input forms", () => {
    const shorthand = {
      plugins: {
        entries: {
          "web-search": { config: { webSearch: { apiKey: `ltfx.n.249f22f4a8b2b11f4598.v1` } } },
        },
      },
    } satisfies OpenClawConfig;
    const canonical = {
      plugins: {
        entries: {
          "web-search": {
            config: {
              webSearch: {
                apiKey: { source: "env", provider: "default", id: "BRAVE_API_KEY" },
              },
            },
          },
        },
      },
    } satisfies OpenClawConfig;

    expect(digestWebContract(shorthand)).toBe(digestWebContract(canonical));
  });
});
