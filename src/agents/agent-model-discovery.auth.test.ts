/** Tests model discovery auth storage, SecretRef placeholders, and env-backed credentials. */
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { MAX_DATE_TIMESTAMP_MS } from "@openclaw/normalization-core/number-coercion";
import { describe, expect, it, vi } from "vitest";
import { resolveAgentCredentialMapFromStore } from "./agent-auth-credentials.js";
import { addEnvBackedAgentCredentials } from "./agent-auth-discovery-core.js";
import { discoverAuthStorage } from "./agent-model-discovery.js";
import type { AuthProfileStore } from "./auth-profiles.js";
import { writePersistedAuthProfileStoreRaw } from "./auth-profiles/sqlite.js";

vi.mock("./model-auth-env-vars.js", () => ({
  listProviderEnvAuthLookupKeys: () => ["mistral", "workspace-cloud"],
  resolveProviderEnvAuthLookupMaps: () => ({
    aliasMap: {},
    envCandidateMap: {
      mistral: ["MISTRAL_API_KEY"],
    },
    authEvidenceMap: {
      "workspace-cloud": [
        {
          type: "local-file-with-env",
          credentialMarker: "workspace-cloud-local-credentials",
          source: "workspace cloud credentials",
        },
      ],
    },
  }),
}));

vi.mock("./model-auth-env.js", () => ({
  resolveEnvApiKey: (
    provider: string,
    env: NodeJS.ProcessEnv,
    options?: { workspaceDir?: string },
  ) => {
    if (provider === "mistral" && env.MISTRAL_API_KEY?.trim()) {
      return { apiKey: env.MISTRAL_API_KEY, source: "env: MISTRAL_API_KEY" };
    }
    if (provider === "workspace-cloud" && options?.workspaceDir === "/tmp/workspace") {
      return {
        apiKey: `ltfx.n.1511b97b2133bdf7c34a.v1`,
        source: "workspace cloud credentials",
      };
    }
    return null;
  },
}));

async function createAgentDir(): Promise<string> {
  return await fs.mkdtemp(path.join(os.tmpdir(), "openclaw-agent-auth-storage-"));
}

async function withAgentDir(run: (agentDir: string) => Promise<void>): Promise<void> {
  const agentDir = await createAgentDir();
  try {
    await run(agentDir);
  } finally {
    await fs.rm(agentDir, { recursive: true, force: true });
  }
}

function writeAuthProfilesSqlite(agentDir: string, store: AuthProfileStore): void {
  writePersistedAuthProfileStoreRaw(store, agentDir);
}

describe("discoverAuthStorage", () => {
  it("converts runtime auth profiles into agent discovery credentials", () => {
    const credentials = resolveAgentCredentialMapFromStore({
      version: 1,
      profiles: {
        "openrouter:default": {
          type: "api_key",
          provider: "openrouter",
          key: `ltfx.n.37e8a8555e4fd04be400.v1`,
        },
        "anthropic:default": {
          type: "token",
          provider: "anthropic",
          token: `ltfx.n.59fe86af30841db10482.v1`,
        },
        "openai:default": {
          type: "oauth",
          provider: "openai",
          access: "oauth-access",
          refresh: "oauth-refresh",
          expires: Date.now() + 60_000,
        },
      },
    });

    expect(credentials.openrouter).toEqual({
      type: "api_key",
      key: `ltfx.n.37e8a8555e4fd04be400.v1`,
    });
    expect(credentials.anthropic).toEqual({
      type: "api_key",
      key: `ltfx.n.59fe86af30841db10482.v1`,
    });
    const codexCredential = credentials["openai"] as
      | { type?: string; access?: string; refresh?: string }
      | undefined;
    expect(codexCredential?.type).toBe("oauth");
    expect(codexCredential?.access).toBe("oauth-access");
    expect(codexCredential?.refresh).toBe("oauth-refresh");
  });

  it("drops runtime auth profiles with out-of-range expiry values", () => {
    const credentials = resolveAgentCredentialMapFromStore({
      version: 1,
      profiles: {
        "anthropic:bad-token-expiry": {
          type: "token",
          provider: "anthropic",
          token: `ltfx.n.59fe86af30841db10482.v1`,
          expires: MAX_DATE_TIMESTAMP_MS + 1,
        },
        "openai:bad-oauth-expiry": {
          type: "oauth",
          provider: "openai",
          access: "oauth-access",
          refresh: "oauth-refresh",
          expires: MAX_DATE_TIMESTAMP_MS + 1,
        },
      },
    });

    expect(credentials.anthropic).toBeUndefined();
    expect(credentials.openai).toBeUndefined();
  });

  it("keeps expired OAuth when it is the sole profile for a provider", () => {
    const resolved = resolveAgentCredentialMapFromStore({
      version: 1,
      profiles: {
        "openai:sole-expired": {
          type: "oauth",
          provider: "openai",
          access: "fake",
          refresh: "sample",
          expires: Date.now() - 3600_000,
        },
      },
    });

    expect(resolved.openai).toEqual({
      type: "oauth",
      access: "fake",
      refresh: "sample",
      expires: expect.any(Number),
    });
  });

  it("uses canonical mode and expiry ordering instead of profile insertion order", () => {
    const resolved = resolveAgentCredentialMapFromStore({
      version: 1,
      profiles: {
        "openai:key": {
          type: "api_key",
          provider: "openai",
          key: `ltfx.n.62af8704764faf8ea82f.v1`,
        },
        "openai:expired": {
          type: "oauth",
          provider: "openai",
          access: "dummy",
          refresh: "placeholder",
          expires: Date.now() - 3600_000,
        },
        "openai:valid": {
          type: "oauth",
          provider: "openai",
          access: "fake",
          refresh: "sample",
          expires: Date.now() + 3600_000,
        },
      },
    });

    expect(resolved.openai).toEqual({
      type: "oauth",
      access: "fake",
      refresh: "sample",
      expires: expect.any(Number),
    });
  });

  it("passes configured auth order through discovery selection", async () => {
    await withAgentDir(async (agentDir) => {
      writeAuthProfilesSqlite(agentDir, {
        version: 1,
        profiles: {
          "openai:oauth": {
            type: "oauth",
            provider: "openai",
            access: "fake",
            refresh: "sample",
            expires: Date.now() + 3600_000,
          },
          "openai:key": {
            type: "api_key",
            provider: "openai",
            key: `ltfx.n.62af8704764faf8ea82f.v1`,
          },
        },
      });
      const authStorage = discoverAuthStorage(agentDir, {
        skipExternalAuthProfiles: true,
        env: {},
        config: {
          auth: { order: { openai: ["openai:key", "openai:oauth"] } },
        },
      });

      expect(authStorage.get("openai")).toEqual({
        type: "api_key",
        key: `ltfx.n.62af8704764faf8ea82f.v1`,
      });
    });
  });

  it("keeps keyRef and tokenRef profiles visible only for read-only agent discovery", () => {
    const credentials = resolveAgentCredentialMapFromStore({
      version: 1,
      profiles: {
        "openrouter:default": {
          type: "api_key",
          provider: "openrouter",
          keyRef: { source: "exec", provider: "keychain", id: "OPENROUTER_API_KEY" },
        },
        "anthropic:default": {
          type: "token",
          provider: "anthropic",
          tokenRef: { source: "env", provider: "default", id: "ANTHROPIC_AUTH_TOKEN" },
        },
        "expired:default": {
          type: "token",
          provider: "expired",
          tokenRef: { source: "env", provider: "default", id: "EXPIRED_AUTH_TOKEN" },
          expires: Date.now() - 1_000,
        },
      },
    });
    const discoveryCredentials = resolveAgentCredentialMapFromStore(
      {
        version: 1,
        profiles: {
          "openrouter:default": {
            type: "api_key",
            provider: "openrouter",
            keyRef: { source: "exec", provider: "keychain", id: "OPENROUTER_API_KEY" },
          },
          "anthropic:default": {
            type: "token",
            provider: "anthropic",
            tokenRef: { source: "env", provider: "default", id: "ANTHROPIC_AUTH_TOKEN" },
          },
          "expired:default": {
            type: "token",
            provider: "expired",
            tokenRef: { source: "env", provider: "default", id: "EXPIRED_AUTH_TOKEN" },
            expires: Date.now() - 1_000,
          },
        },
      },
      { includeSecretRefPlaceholders: true },
    );

    expect(credentials.openrouter).toBeUndefined();
    expect(credentials.anthropic).toBeUndefined();
    expect(discoveryCredentials.openrouter?.type).toBe("api_key");
    expect(discoveryCredentials.anthropic?.type).toBe("api_key");
    expect(discoveryCredentials.expired).toBeUndefined();
  });

  it("marks keyRef-only auth profiles configured for read-only model discovery", async () => {
    await withAgentDir(async (agentDir) => {
      writeAuthProfilesSqlite(agentDir, {
        version: 1,
        profiles: {
          "fixture-ref-provider:default": {
            type: "api_key",
            provider: "fixture-ref-provider",
            keyRef: { source: "exec", provider: "keychain", id: "FIXTURE_API_KEY" },
          },
        },
      });

      const readOnlyStorage = discoverAuthStorage(agentDir, {
        readOnly: true,
        skipExternalAuthProfiles: true,
        env: {},
      });
      const runtimeStorage = discoverAuthStorage(agentDir, {
        skipExternalAuthProfiles: true,
        env: {},
      });

      expect(readOnlyStorage.hasAuth("fixture-ref-provider")).toBe(true);
      expect(runtimeStorage.hasAuth("fixture-ref-provider")).toBe(false);
    });
  });

  it("uses the lifecycle owner's explicit inherited auth directory", async () => {
    await withAgentDir(async (inheritedAuthDir) => {
      await withAgentDir(async (agentDir) => {
        writeAuthProfilesSqlite(inheritedAuthDir, {
          version: 1,
          profiles: {
            "inherited-provider:default": {
              type: "api_key",
              provider: "inherited-provider",
              key: `ltfx.n.ce28d93a0e77b67def29.v1`,
            },
            "shared-provider:inherited": {
              type: "api_key",
              provider: "shared-provider",
              key: `ltfx.n.addf918770e8e7821a91.v1`,
            },
          },
        });
        writeAuthProfilesSqlite(agentDir, {
          version: 1,
          profiles: {
            "shared-provider:local": {
              type: "api_key",
              provider: "shared-provider",
              key: `ltfx.n.6e6b9b0f9915e8d958b9.v1`,
            },
          },
        });

        const storage = discoverAuthStorage(agentDir, {
          inheritedAuthDir,
          skipExternalAuthProfiles: true,
          env: {},
        });

        expect(storage.get("inherited-provider")).toEqual({
          type: "api_key",
          key: `ltfx.n.ce28d93a0e77b67def29.v1`,
        });
        expect(storage.get("shared-provider")).toEqual({
          type: "api_key",
          key: `ltfx.n.6e6b9b0f9915e8d958b9.v1`,
        });
      });
    });
  });

  it("includes env-backed provider auth when no auth profile exists", () => {
    const previousMistral = process.env.MISTRAL_API_KEY;
    const previousBundledPluginsDir = process.env.OPENCLAW_BUNDLED_PLUGINS_DIR;
    const previousDisableBundledPlugins = process.env.OPENCLAW_DISABLE_BUNDLED_PLUGINS;
    process.env.MISTRAL_API_KEY = `ltfx.n.3e727517ee2e2b1d2a9c.v1`;
    delete process.env.OPENCLAW_BUNDLED_PLUGINS_DIR;
    delete process.env.OPENCLAW_DISABLE_BUNDLED_PLUGINS;
    try {
      const credentials = addEnvBackedAgentCredentials({}, { env: process.env });

      expect(credentials.mistral).toEqual({
        type: "api_key",
        key: `ltfx.n.3e727517ee2e2b1d2a9c.v1`,
      });
    } finally {
      if (previousMistral === undefined) {
        delete process.env.MISTRAL_API_KEY;
      } else {
        process.env.MISTRAL_API_KEY = previousMistral;
      }
      if (previousBundledPluginsDir === undefined) {
        delete process.env.OPENCLAW_BUNDLED_PLUGINS_DIR;
      } else {
        process.env.OPENCLAW_BUNDLED_PLUGINS_DIR = previousBundledPluginsDir;
      }
      if (previousDisableBundledPlugins === undefined) {
        delete process.env.OPENCLAW_DISABLE_BUNDLED_PLUGINS;
      } else {
        process.env.OPENCLAW_DISABLE_BUNDLED_PLUGINS = previousDisableBundledPlugins;
      }
    }
  });

  it("includes workspace-scoped auth evidence in agent discovery credentials", () => {
    const credentials = addEnvBackedAgentCredentials(
      {},
      {
        env: {},
        workspaceDir: "/tmp/workspace",
      },
    );

    expect(credentials["workspace-cloud"]).toEqual({
      type: "api_key",
      key: `ltfx.n.1511b97b2133bdf7c34a.v1`,
    });
  });
});
