/**
 * Regression: machineToken.clientAssertionKeyRef must remain a SecretRef object
 * through secrets runtime materialization and plugin schema validation.
 *
 * Live defect: manifests listed the path under secretInputs expected:"string",
 * so prepareSecretsRuntimeSnapshot rewrote the ref to PEM before
 * validatePluginConfig (schema requires secretRef object → "must be object").
 * Host resolveKeyPem still resolves at acquire time only.
 */
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it, vi } from "vitest";
import { createPaciFakeEs256KeyPair } from "../../test/helpers/paci-fake/keys.js";
import {
  collectGrantedMachineTokenBindingRecords,
  createMachineTokenPluginFacade,
  getLiveMachineTokenPluginFacade,
  unregisterMachineTokenFacadesForPlugin,
} from "../agents/machine-token-host.js";
import type { MachineTokenPluginFacade } from "../agents/machine-token-types.js";
import { clearMachineTokenCache } from "../agents/machine-token.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { isSecretRef } from "../config/types.secrets.js";
import { resolveConfiguredSecretInputString } from "../gateway/resolve-configured-secret-input-string.js";
import { validatePluginConfig } from "../plugins/loader-shared.js";
import {
  cleanupPluginLoaderFixturesForTest,
  clearPluginLoaderCache,
  loadOpenClawPlugins,
  makeTempDir,
  resetPluginLoaderTestStateForTest,
  writePlugin,
} from "../plugins/loader.test-fixtures.js";
import { secretRefKey } from "./ref-contract.js";
import { resolveSecretRefValues } from "./resolve.js";
import { collectPluginConfigAssignments } from "./runtime-config-collectors-plugins.js";
import {
  applyResolvedAssignments,
  createResolverContext,
  type SecretAssignment,
} from "./runtime-shared.js";
import { asConfig, setupSecretsRuntimeSnapshotTestHooks } from "./runtime.test-support.js";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const EXTENSION_IDS = ["linkbrain", "linkskills"] as const;

const {
  loadPluginManifestRegistryForPluginRegistryMock,
  realLoadPluginManifestRegistryForPluginRegistry,
} = vi.hoisted(() => ({
  loadPluginManifestRegistryForPluginRegistryMock: vi.fn(),
  realLoadPluginManifestRegistryForPluginRegistry: vi.fn(),
}));

vi.mock("../plugins/plugin-registry.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../plugins/plugin-registry.js")>();
  realLoadPluginManifestRegistryForPluginRegistry.mockImplementation(
    actual.loadPluginManifestRegistryForPluginRegistry,
  );
  loadPluginManifestRegistryForPluginRegistryMock.mockImplementation(
    actual.loadPluginManifestRegistryForPluginRegistry,
  );
  return {
    ...actual,
    loadPluginManifestRegistryForPluginRegistry: (...args: unknown[]) =>
      loadPluginManifestRegistryForPluginRegistryMock(...args),
  };
});

vi.mock("../plugins/bundled-plugin-metadata.js", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../plugins/bundled-plugin-metadata.js")>();
  return {
    ...actual,
    findBundledPluginMetadataById: () => undefined,
    listBundledPluginMetadata: () => [],
  };
});

const { prepareSecretsRuntimeSnapshot } = setupSecretsRuntimeSnapshotTestHooks();

const FACADE_STORE_KEY = "__openclawMachineTokenSecretRefFacades";

type FacadeStore = Record<string, MachineTokenPluginFacade | undefined>;

function facadeStore(): FacadeStore {
  const globalStore = globalThis as typeof globalThis & {
    [FACADE_STORE_KEY]?: FacadeStore;
  };
  if (!globalStore[FACADE_STORE_KEY]) {
    globalStore[FACADE_STORE_KEY] = {};
  }
  return globalStore[FACADE_STORE_KEY];
}

function clearFacadeStore(): void {
  delete (globalThis as typeof globalThis & { [FACADE_STORE_KEY]?: FacadeStore })[FACADE_STORE_KEY];
}

type ExtensionManifest = {
  id: string;
  configSchema: Record<string, unknown>;
  configContracts?: {
    secretInputs?: {
      paths?: Array<{ path: string; expected?: string; ownerKind?: string }>;
    };
  };
};

async function readExtensionManifest(
  pluginId: (typeof EXTENSION_IDS)[number],
): Promise<ExtensionManifest> {
  const raw = await fs.readFile(
    path.join(repoRoot, "extensions", pluginId, "openclaw.plugin.json"),
    "utf8",
  );
  return JSON.parse(raw) as ExtensionManifest;
}

function secretInputPaths(manifest: ExtensionManifest): string[] {
  return (manifest.configContracts?.secretInputs?.paths ?? []).map((entry) => entry.path);
}

async function writeSecureFile(filePath: string, content: string): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  const tempPath = `${filePath}.tmp-${process.pid}-${Date.now()}`;
  await fs.writeFile(tempPath, content, "utf8");
  await fs.chmod(tempPath, 0o600);
  await fs.rename(tempPath, filePath);
}

function machineTokenConfig(params: {
  bindingId: string;
  clientId: string;
  provider: string;
}): Record<string, unknown> {
  return {
    transportMode: "disabled",
    machineToken: {
      bindingId: params.bindingId,
      issuerUrl: "https://issuer.example.test",
      clientId: params.clientId,
      clientAssertionKeyRef: {
        source: "file",
        provider: params.provider,
        id: "value",
      },
    },
  };
}

function stubRegistryFromManifests(manifests: ExtensionManifest[]): void {
  loadPluginManifestRegistryForPluginRegistryMock.mockReturnValue({
    plugins: manifests.map((manifest) => ({
      id: manifest.id,
      origin: "config" as const,
      providers: [],
      legacyPluginIds: [],
      ...(manifest.configContracts ? { configContracts: manifest.configContracts } : {}),
    })),
    diagnostics: [],
  });
}

describe("machine-token clientAssertionKeyRef SecretRef runtime boundary", () => {
  afterEach(() => {
    for (const pluginId of EXTENSION_IDS) {
      unregisterMachineTokenFacadesForPlugin(pluginId);
    }
    clearMachineTokenCache();
    clearFacadeStore();
    clearPluginLoaderCache();
    resetPluginLoaderTestStateForTest();
    cleanupPluginLoaderFixturesForTest();
    loadPluginManifestRegistryForPluginRegistryMock.mockReset();
    loadPluginManifestRegistryForPluginRegistryMock.mockImplementation((...args: unknown[]) =>
      realLoadPluginManifestRegistryForPluginRegistry(...args),
    );
  });

  it("linkbrain and linkskills keep clientAssertionKeyRef off string secretInputs", async () => {
    for (const pluginId of EXTENSION_IDS) {
      const manifest = await readExtensionManifest(pluginId);
      expect(secretInputPaths(manifest)).not.toContain("machineToken.clientAssertionKeyRef");
      expect(secretInputPaths(manifest).length).toBeGreaterThan(0);
    }
  });

  it("file SecretRef stays an object through secrets prepare + real schema validation", async () => {
    if (process.platform === "win32") {
      return;
    }
    const root = await fs.mkdtemp(path.join(os.tmpdir(), "ocp-mt-secretref-"));
    try {
      const keyPair = await createPaciFakeEs256KeyPair({ reuse: false });
      const manifests = await Promise.all(EXTENSION_IDS.map((id) => readExtensionManifest(id)));
      stubRegistryFromManifests(manifests);

      const providers: Record<string, { source: "file"; path: string; mode: "singleValue" }> = {};
      const entries: Record<string, { enabled: boolean; config: Record<string, unknown> }> = {};
      for (const pluginId of EXTENSION_IDS) {
        const provider = `paci_${pluginId}_assertion_pem`;
        const pemPath = path.join(root, `${pluginId}.pem`);
        await writeSecureFile(pemPath, keyPair.privateKeyPem);
        providers[provider] = { source: "file", path: pemPath, mode: "singleValue" };
        entries[pluginId] = {
          enabled: true,
          config: machineTokenConfig({
            bindingId: `${pluginId}-stage`,
            clientId: `${pluginId}-client`,
            provider,
          }),
        };
      }

      const config = asConfig({
        secrets: { providers },
        plugins: { enabled: true, entries },
      });

      const snapshot = await prepareSecretsRuntimeSnapshot({
        config,
        agentDirs: [path.join(root, "agent")],
        loadAuthStore: () => ({ version: 1, profiles: {} }),
        loadablePluginOrigins: new Map(EXTENSION_IDS.map((id) => [id, "config" as const])),
      });

      for (const pluginId of EXTENSION_IDS) {
        const pluginConfig = snapshot.config.plugins?.entries?.[pluginId]?.config as
          | Record<string, unknown>
          | undefined;
        expect(pluginConfig).toBeDefined();
        const keyRef = (
          pluginConfig?.machineToken as { clientAssertionKeyRef?: unknown } | undefined
        )?.clientAssertionKeyRef;
        expect(isSecretRef(keyRef)).toBe(true);

        const validated = validatePluginConfig({
          schema: manifests.find((manifest) => manifest.id === pluginId)?.configSchema,
          value: pluginConfig,
        });
        expect(validated.ok).toBe(true);

        const serialized = JSON.stringify(pluginConfig);
        expect(serialized).not.toContain("BEGIN PRIVATE KEY");
        expect(serialized).not.toContain(keyPair.privateKeyPem);
      }

      // Non-machine-token SecretInput still materializes (credential string path).
      const withCredential = asConfig({
        secrets: { providers },
        plugins: {
          enabled: true,
          entries: {
            linkbrain: {
              enabled: true,
              config: {
                ...machineTokenConfig({
                  bindingId: "linkbrain-stage",
                  clientId: "brain-client",
                  provider: "paci_linkbrain_assertion_pem",
                }),
                ingestionCredential: {
                  source: "file",
                  provider: "paci_linkbrain_assertion_pem",
                  id: "value",
                },
              },
            },
          },
        },
      });
      const credentialSnapshot = await prepareSecretsRuntimeSnapshot({
        config: withCredential,
        agentDirs: [path.join(root, "agent-cred")],
        loadAuthStore: () => ({ version: 1, profiles: {} }),
        loadablePluginOrigins: new Map([["linkbrain", "config"]]),
      });
      const brainConfig = credentialSnapshot.config.plugins?.entries?.linkbrain?.config as
        | Record<string, unknown>
        | undefined;
      expect(brainConfig?.ingestionCredential).toBe(keyPair.privateKeyPem);
      expect(
        isSecretRef(
          (brainConfig?.machineToken as { clientAssertionKeyRef?: unknown }).clientAssertionKeyRef,
        ),
      ).toBe(true);
    } finally {
      await fs.rm(root, { recursive: true, force: true });
    }
  });

  it("loads both plugins and acquires via machineTokenFacade without PEM in config", async () => {
    if (process.platform === "win32") {
      return;
    }
    const root = await fs.mkdtemp(path.join(os.tmpdir(), "ocp-mt-secretref-load-"));
    try {
      const keyPair = await createPaciFakeEs256KeyPair({ reuse: false });
      const manifests = await Promise.all(EXTENSION_IDS.map((id) => readExtensionManifest(id)));
      loadPluginManifestRegistryForPluginRegistryMock.mockImplementation((...args: unknown[]) =>
        realLoadPluginManifestRegistryForPluginRegistry(...args),
      );

      const providers: Record<string, { source: "file"; path: string; mode: "singleValue" }> = {};
      const pluginDirs: Record<string, string> = {};

      for (const pluginId of EXTENSION_IDS) {
        const provider = `paci_${pluginId}_assertion_pem`;
        const pemPath = path.join(root, `${pluginId}.pem`);
        await writeSecureFile(pemPath, keyPair.privateKeyPem);
        providers[provider] = { source: "file", path: pemPath, mode: "singleValue" };

        const written = writePlugin({
          id: pluginId,
          configSchema: manifests.find((manifest) => manifest.id === pluginId)?.configSchema,
          body: `module.exports = {
  id: ${JSON.stringify(pluginId)},
  register(api) {
    globalThis.${FACADE_STORE_KEY} = globalThis.${FACADE_STORE_KEY} || {};
    globalThis.${FACADE_STORE_KEY}[${JSON.stringify(pluginId)}] = api.machineTokenFacade;
  },
};
`,
        });
        pluginDirs[pluginId] = written.dir;
      }

      const config: OpenClawConfig = {
        secrets: { providers },
        plugins: {
          enabled: true,
          load: { paths: Object.values(pluginDirs) },
          entries: {
            linkbrain: {
              enabled: true,
              config: machineTokenConfig({
                bindingId: "linkbrain-stage",
                clientId: "brain-client",
                provider: "paci_linkbrain_assertion_pem",
              }),
            },
            linkskills: {
              enabled: true,
              config: machineTokenConfig({
                bindingId: "linkskills-stage",
                clientId: "skills-client",
                provider: "paci_linkskills_assertion_pem",
              }),
            },
          },
        },
      };

      const registry = loadOpenClawPlugins({
        cache: false,
        activate: true,
        throwOnLoadError: true,
        config,
        env: {
          OPENCLAW_STATE_DIR: makeTempDir(),
          OPENCLAW_DISABLE_BUNDLED_PLUGINS: "1",
        },
      });

      for (const pluginId of EXTENSION_IDS) {
        const record = registry.plugins.find((plugin) => plugin.id === pluginId);
        expect(record?.status).toBe("loaded");
        expect(record?.error).toBeUndefined();

        const liveFacade = facadeStore()[pluginId] ?? getLiveMachineTokenPluginFacade(pluginId);
        expect(liveFacade).toBeDefined();
        expect(liveFacade!.health(`${pluginId}-stage`).registered).toBe(true);

        const entryConfig = config.plugins?.entries?.[pluginId]?.config as Record<string, unknown>;
        expect(
          isSecretRef(
            (entryConfig.machineToken as { clientAssertionKeyRef: unknown }).clientAssertionKeyRef,
          ),
        ).toBe(true);
        expect(JSON.stringify(entryConfig)).not.toContain("BEGIN PRIVATE KEY");

        // Host-internal acquire path: resolve SecretRef only at mint time.
        const grantedRecords = collectGrantedMachineTokenBindingRecords({
          pluginId,
          pluginConfig: entryConfig,
        });
        const resolveAccess = vi.fn(async ({ binding }) => {
          expect(binding.clientAssertionKeyPem).toContain("BEGIN PRIVATE KEY");
          return {
            bindingId: binding.bindingId,
            bindingFingerprint: `fp-${binding.bindingId}`,
            accessToken: `token-${pluginId}`,
            expiresAt: Date.now() + 60_000,
            tokenType: "Bearer" as const,
          };
        });
        unregisterMachineTokenFacadesForPlugin(pluginId);
        const acquireFacade = createMachineTokenPluginFacade({
          pluginId,
          grantedRecords,
          resolveKeyPem: async ({ bindingId, keyRef: ref }) => {
            const resolved = await resolveConfiguredSecretInputString({
              config,
              env: process.env,
              value: ref,
              path: `plugins.entries.${pluginId}.machineToken[${bindingId}].clientAssertionKeyRef`,
            });
            if (!resolved.value) {
              throw new Error(resolved.unresolvedRefReason ?? "unresolved key");
            }
            return resolved.value;
          },
          resolveAccess,
        });
        const acquired = await acquireFacade.acquire({ bindingId: `${pluginId}-stage` });
        expect(acquired.accessToken).toBe(`token-${pluginId}`);
        expect(resolveAccess).toHaveBeenCalledOnce();
        expect(JSON.stringify(entryConfig)).not.toContain(keyPair.privateKeyPem);
        expect(JSON.stringify(acquired)).not.toContain("BEGIN PRIVATE KEY");
      }
    } finally {
      await fs.rm(root, { recursive: true, force: true });
    }
  });

  it("fail-closes when machineToken clientAssertionKeyRef is a literal string before load", async () => {
    const manifests = await Promise.all(EXTENSION_IDS.map((id) => readExtensionManifest(id)));
    for (const manifest of manifests) {
      const validated = validatePluginConfig({
        schema: manifest.configSchema,
        value: {
          machineToken: {
            bindingId: `${manifest.id}-stage`,
            issuerUrl: "https://issuer.example.test",
            clientId: `${manifest.id}-client`,
            clientAssertionKeyRef: "-----BEGIN PRIVATE KEY-----\nstub\n-----END PRIVATE KEY-----",
          },
        },
      });
      expect(validated.ok).toBe(false);
      expect(validated.ok ? [] : validated.error.join(", ")).toMatch(
        /clientAssertionKeyRef: must be object/,
      );
    }
  });

  it("does not collect machineToken.clientAssertionKeyRef assignments from live contracts", async () => {
    const manifests = await Promise.all(EXTENSION_IDS.map((id) => readExtensionManifest(id)));
    stubRegistryFromManifests(manifests);
    const config = asConfig({
      plugins: {
        entries: {
          linkbrain: {
            enabled: true,
            config: {
              ingestionCredential: {
                source: "env",
                provider: "default",
                id: "BRAIN_CRED",
              },
              ...machineTokenConfig({
                bindingId: "linkbrain-stage",
                clientId: "brain-client",
                provider: "paci_linkbrain_assertion_pem",
              }),
            },
          },
          linkskills: {
            enabled: true,
            config: {
              skillsCredential: {
                source: "env",
                provider: "default",
                id: "SKILLS_CRED",
              },
              ...machineTokenConfig({
                bindingId: "linkskills-stage",
                clientId: "skills-client",
                provider: "paci_linkskills_assertion_pem",
              }),
            },
          },
        },
      },
    });
    const context = createResolverContext({ sourceConfig: config, env: {} });
    collectPluginConfigAssignments({
      config,
      defaults: undefined,
      context,
      loadablePluginOrigins: new Map([
        ["linkbrain", "config"],
        ["linkskills", "config"],
      ]),
    });
    const paths = context.assignments.map((assignment: SecretAssignment) => assignment.path);
    expect(paths).toEqual(
      expect.arrayContaining([
        "plugins.entries.linkbrain.config.ingestionCredential",
        "plugins.entries.linkskills.config.skillsCredential",
      ]),
    );
    expect(paths.some((pathText) => pathText.includes("clientAssertionKeyRef"))).toBe(false);

    const resolved = await resolveSecretRefValues(
      context.assignments.map((assignment) => assignment.ref),
      {
        config,
        env: { BRAIN_CRED: "brain-secret", SKILLS_CRED: "skills-secret" },
      },
    );
    applyResolvedAssignments({ assignments: context.assignments, resolved });
    expect(
      isSecretRef(
        (
          config.plugins?.entries?.linkbrain?.config as {
            machineToken: { clientAssertionKeyRef: unknown };
          }
        ).machineToken.clientAssertionKeyRef,
      ),
    ).toBe(true);
    expect(
      (config.plugins?.entries?.linkbrain?.config as { ingestionCredential: unknown })
        .ingestionCredential,
    ).toBe("brain-secret");
    expect(
      resolved.has(secretRefKey({ source: "env", provider: "default", id: "BRAIN_CRED" })),
    ).toBe(true);
  });
});
