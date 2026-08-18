/**
 * Tests provider web search contract suite behavior.
 */
import { describe, expect, it } from "vitest";
import { createWebSearchProviderContractFields } from "./provider-web-search-contract.js";

describe("createWebSearchProviderContractFields", () => {
  it("builds scoped config-backed credential handlers", () => {
    const credentialPath = "plugins.entries.google.config.webSearch.apiKey";
    const fields = createWebSearchProviderContractFields({
      credentialPath,
      searchCredential: { type: "scoped", scopeId: "gemini" },
      configuredCredential: { pluginId: "google" },
      selectionPluginId: "google",
    });

    expect(fields.inactiveSecretPaths).toEqual([credentialPath]);
    expect(fields.getCredentialValue({ gemini: { apiKey: `ltfx.n.900acb201274154f9a64.v1` } })).toBe("AIza-scoped");

    const searchConfig = {};
    fields.setCredentialValue(searchConfig, "AIza-next");
    expect(searchConfig).toEqual({
      gemini: {
        apiKey: `ltfx.n.d08e3e78b185e0d9a96c.v1`,
      },
    });

    const config = {};
    fields.setConfiguredCredentialValue?.(config as never, "AIza-configured");
    expect(fields.getConfiguredCredentialValue?.(config as never)).toBe("AIza-configured");
    expect(fields.applySelectionConfig?.({} as never)).toEqual({
      plugins: {
        entries: {
          google: {
            enabled: true,
          },
        },
      },
    });
  });

  it("builds top-level config-backed credential handlers", () => {
    const credentialPath = "plugins.entries.brave.config.webSearch.apiKey";
    const fields = createWebSearchProviderContractFields({
      credentialPath,
      searchCredential: { type: "top-level" },
      configuredCredential: { pluginId: "brave" },
    });

    expect(fields.getCredentialValue({ apiKey: `ltfx.n.cd456e6c80c37ca2f8fb.v1` })).toBe("BSA-top-level");

    const searchConfig = {};
    fields.setCredentialValue(searchConfig, "BSA-next");
    expect(searchConfig).toEqual({
      apiKey: `ltfx.n.844bc875a59e71c186eb.v1`,
    });

    const config = {};
    fields.setConfiguredCredentialValue?.(config as never, "BSA-configured");
    expect(fields.getConfiguredCredentialValue?.(config as never)).toBe("BSA-configured");
    expect(fields.applySelectionConfig).toBeUndefined();
  });

  it("builds keyless provider handlers without inactive credential paths", () => {
    const fields = createWebSearchProviderContractFields({
      credentialPath: "",
      searchCredential: { type: "none" },
      selectionPluginId: "ollama",
    });

    expect(fields.inactiveSecretPaths).toStrictEqual([]);
    expect(fields.getCredentialValue({ apiKey: "ignored" })).toBeUndefined();

    const searchConfig = { apiKey: "ignored" };
    fields.setCredentialValue(searchConfig, "still ignored");
    expect(searchConfig).toEqual({ apiKey: "ignored" });
    expect(fields.getConfiguredCredentialValue).toBeUndefined();
    expect(fields.setConfiguredCredentialValue).toBeUndefined();
    expect(fields.applySelectionConfig?.({} as never)).toEqual({
      plugins: {
        entries: {
          ollama: {
            enabled: true,
          },
        },
      },
    });
  });
});
