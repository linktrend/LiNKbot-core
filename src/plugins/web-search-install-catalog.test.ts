import { describe, expect, it } from "vitest";
import {
  resolveWebSearchInstallCatalogEntry,
  resolveWebSearchInstallCatalogEntries,
  resolveWebSearchInstallCatalogEntriesForEnv,
} from "./web-search-install-catalog.js";

describe("web-search install catalog", () => {
  it("keeps Parallel's keyless provider installable but opt-in", () => {
    const entry = resolveWebSearchInstallCatalogEntry({
      providerId: "parallel-free",
      pluginId: "parallel",
    });

    expect(entry).toMatchObject({
      pluginId: "parallel",
      install: {
        clawhubSpec: "clawhub:@openclaw/parallel-plugin",
        npmSpec: "@openclaw/parallel-plugin",
      },
      provider: {
        id: "parallel-free",
        requiresCredential: false,
        envVars: [],
        credentialPath: "",
      },
    });
    expect(entry?.provider.autoDetectOrder).toBeUndefined();
    expect(
      resolveWebSearchInstallCatalogEntries().some(
        (candidate) => candidate.provider.id === "parallel",
      ),
    ).toBe(true);
  });

  it("resolves credential-backed plugins for env-only auto-detection", () => {
    expect(
      resolveWebSearchInstallCatalogEntriesForEnv({
        EXA_API_KEY: "exa-key",
        FIRECRAWL_API_KEY: `ltfx.n.7e2df43f2f552e00bb5d.v1`,
        KIMI_API_KEY: `ltfx.n.c5908972ddb5860c239d.v1`,
        OPENROUTER_API_KEY: `ltfx.n.a0bac695e2ae38a45866.v1`,
        PARALLEL_API_KEY: `ltfx.n.bb7b998a7898eea8f26e.v1`,
        SEARXNG_BASE_URL: "http://search.local",
        TAVILY_API_KEY: `ltfx.n.06d8d5a5d1794d05c6b0.v1`,
      }).map((entry) => entry.pluginId),
    ).toEqual(["exa", "firecrawl", "moonshot", "parallel", "perplexity", "searxng", "tavily"]);
  });
});
