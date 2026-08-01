/**
 * Wave 6/7/8/9 — real loadOpenClawPlugins transaction proofs for machine-token
 * facade staging, combined ownership commit, activating cache rematerialize,
 * same-active live ownership, removal/disable reconciliation, activating-load
 * serialization, activation-failure rollback (including mid-commit and real
 * hook-runner init early/mid/late), and setup/channel lifecycle baselines.
 */
import { afterEach, describe, expect, it } from "vitest";
import {
  countMachineTokenFacadeGenerations,
  getLiveMachineTokenFacadeGenerationHandle,
  getLiveMachineTokenPluginFacade,
  listLiveMachineTokenFacadePluginIds,
  unregisterMachineTokenFacadesForPlugin,
} from "../agents/machine-token-host.js";
import type { MachineTokenPluginFacade } from "../agents/machine-token-types.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { resetGlobalHookRunner } from "./hook-runner-global.js";
import {
  getActiveCombinedPluginRuntimeSnapshotIdentity,
  PluginActivatingLoadConflictError,
  resetActivatingPluginLoadLockForTest,
  resetActiveCombinedPluginRuntimeSnapshotIdentityForTest,
  setCombinedPluginRuntimeActivationFailureInjectorForTest,
  setGlobalHookRunnerInitFailureInjectorForTest,
  setPluginLoadActivationFailureInjectorForTest,
} from "./loader.js";
import {
  cleanupPluginLoaderFixturesForTest,
  clearPluginLoaderCache,
  loadOpenClawPlugins,
  makeTempDir,
  resetPluginLoaderTestStateForTest,
  writePlugin,
} from "./loader.test-fixtures.js";
import { createSetupEntryChannelPluginFixture } from "./loader.test-harness.js";
import { createPluginRegistry } from "./registry.js";
import { getActivePluginRegistry } from "./runtime.js";
import type { PluginRuntime } from "./runtime/types.js";
import { createPluginRecord } from "./status.test-fixtures.js";

const BRAIN_KEY = "LINKTREND_TEST_WAVE7_BRAIN_ASSERTION_PEM";
const SKILLS_KEY = "LINKTREND_TEST_WAVE7_SKILLS_ASSERTION_PEM";
const MCP_KEY = "LINKTREND_TEST_WAVE8_MCP_ASSERTION_PEM";
const FACADE_STORE_KEY = "__openclawWave7MachineTokenFacades";
const NESTED_LOAD_HOOK_KEY = "__wave7NestedActivatingLoad";
const NESTED_LOAD_ERROR_KEY = "__wave7NestedLoadError";

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
  const globalStore = globalThis as typeof globalThis & {
    [FACADE_STORE_KEY]?: FacadeStore;
  };
  delete globalStore[FACADE_STORE_KEY];
}

const MACHINE_TOKEN_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    machineToken: {
      type: "object",
      additionalProperties: true,
    },
  },
};

function machineTokenEntryConfig(params: {
  bindingId: string;
  clientId: string;
  keyId: string;
}): Record<string, unknown> {
  return {
    machineToken: {
      bindingId: params.bindingId,
      issuerUrl: "https://issuer.example.test",
      clientId: params.clientId,
      clientAssertionKeyRef: {
        source: "env",
        provider: "default",
        id: params.keyId,
      },
    },
  };
}

function writeCapturingPlugin(params: {
  id: string;
  failRegister?: boolean;
  nestedLoadDuringRegister?: boolean;
}) {
  const failBody = params.failRegister
    ? `throw new Error("intentional register failure for ${params.id}");`
    : "";
  const nestedBody = params.nestedLoadDuringRegister
    ? `
    try {
      globalThis.${NESTED_LOAD_HOOK_KEY}();
      globalThis.${NESTED_LOAD_ERROR_KEY} = null;
    } catch (error) {
      globalThis.${NESTED_LOAD_ERROR_KEY} = error;
    }
`
    : "";
  return writePlugin({
    id: params.id,
    configSchema: MACHINE_TOKEN_SCHEMA,
    body: `module.exports = {
  id: ${JSON.stringify(params.id)},
  register(api) {
    ${failBody}
    ${nestedBody}
    globalThis.${FACADE_STORE_KEY} = globalThis.${FACADE_STORE_KEY} || {};
    globalThis.${FACADE_STORE_KEY}[${JSON.stringify(params.id)}] = api.machineTokenFacade;
  },
};
`,
  });
}

function writePlainPlugin(id: string) {
  return writePlugin({
    id,
    configSchema: MACHINE_TOKEN_SCHEMA,
    body: `module.exports = {
  id: ${JSON.stringify(id)},
  register(api) {
    globalThis.${FACADE_STORE_KEY} = globalThis.${FACADE_STORE_KEY} || {};
    globalThis.${FACADE_STORE_KEY}[${JSON.stringify(id)}] = api.machineTokenFacade;
  },
};
`,
  });
}

function mcpMachineTokenServer(params: {
  bindingId: string;
  clientId: string;
  keyId: string;
}): Record<string, unknown> {
  return {
    url: "https://mcp.example.test/mcp",
    auth: "machine_token",
    machineToken: {
      bindingId: params.bindingId,
      issuerUrl: "https://issuer.example.test",
      clientId: params.clientId,
      clientAssertionKeyRef: {
        source: "env",
        provider: "default",
        id: params.keyId,
      },
    },
  };
}

function sharedLoaderEnv(stateDir?: string): NodeJS.ProcessEnv {
  process.env[BRAIN_KEY] = "test-pem-brain";
  process.env[SKILLS_KEY] = "test-pem-skills";
  process.env[MCP_KEY] = "test-pem-mcp";
  return {
    OPENCLAW_STATE_DIR: stateDir ?? makeTempDir(),
    OPENCLAW_DISABLE_BUNDLED_PLUGINS: "1",
    [BRAIN_KEY]: "test-pem-brain",
    [SKILLS_KEY]: "test-pem-skills",
    [MCP_KEY]: "test-pem-mcp",
  };
}

function loadWithMachineTokenPlugins(params: {
  plugins: Array<{
    id: string;
    path: string;
    bindingId?: string;
    clientId?: string;
    keyId?: string;
    enabled?: boolean;
    includeMachineToken?: boolean;
  }>;
  throwOnLoadError?: boolean;
  activate?: boolean;
  cache?: boolean;
  onlyPluginIds?: string[];
  paths?: string[];
  /** Shared state dir so cache keys stay stable across loads. */
  stateDir?: string;
  env?: NodeJS.ProcessEnv;
  mcpServers?: Record<string, Record<string, unknown>>;
}) {
  const entries: Record<string, { enabled: boolean; config?: Record<string, unknown> }> = {};
  for (const plugin of params.plugins) {
    const includeToken = plugin.includeMachineToken !== false && plugin.bindingId && plugin.keyId;
    entries[plugin.id] = {
      enabled: plugin.enabled !== false,
      ...(includeToken
        ? {
            config: machineTokenEntryConfig({
              bindingId: plugin.bindingId!,
              clientId: plugin.clientId ?? `${plugin.id}-client`,
              keyId: plugin.keyId!,
            }),
          }
        : { config: {} }),
    };
  }
  return loadOpenClawPlugins({
    cache: params.cache === true,
    activate: params.activate !== false,
    throwOnLoadError: params.throwOnLoadError,
    ...(params.onlyPluginIds ? { onlyPluginIds: params.onlyPluginIds } : {}),
    config: {
      ...(params.mcpServers ? { mcp: { servers: params.mcpServers } } : {}),
      plugins: {
        enabled: true,
        load: {
          paths: params.paths ?? params.plugins.map((plugin) => plugin.path),
        },
        entries,
      },
    },
    env: params.env ?? sharedLoaderEnv(params.stateDir),
  });
}

describe("loadOpenClawPlugins machine-token generation transaction", () => {
  afterEach(() => {
    setPluginLoadActivationFailureInjectorForTest(null);
    setCombinedPluginRuntimeActivationFailureInjectorForTest(null);
    setGlobalHookRunnerInitFailureInjectorForTest(null);
    resetActiveCombinedPluginRuntimeSnapshotIdentityForTest();
    resetActivatingPluginLoadLockForTest();
    unregisterMachineTokenFacadesForPlugin("linkbrain");
    unregisterMachineTokenFacadesForPlugin("linkskills");
    unregisterMachineTokenFacadesForPlugin("wave6-ok");
    unregisterMachineTokenFacadesForPlugin("wave6-fail");
    unregisterMachineTokenFacadesForPlugin("wave7-other");
    unregisterMachineTokenFacadesForPlugin("wave8-b");
    clearFacadeStore();
    clearPluginLoaderCache();
    resetPluginLoaderTestStateForTest();
    cleanupPluginLoaderFixturesForTest();
    delete process.env[BRAIN_KEY];
    delete process.env[SKILLS_KEY];
    delete process.env[MCP_KEY];
    delete (globalThis as Record<string, unknown>)[NESTED_LOAD_HOOK_KEY];
    delete (globalThis as Record<string, unknown>)[NESTED_LOAD_ERROR_KEY];
  });

  it("keeps prior live facades until registry activation then publishes replacements", async () => {
    const first = writeCapturingPlugin({ id: "linkbrain" });
    const firstRegistry = loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: first.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-v1",
          keyId: BRAIN_KEY,
        },
      ],
    });
    expect(firstRegistry.plugins.find((plugin) => plugin.id === "linkbrain")?.status).toBe(
      "loaded",
    );
    const liveV1 = getLiveMachineTokenFacadeGenerationHandle("linkbrain");
    expect(liveV1).toBeDefined();
    const facadeV1 = facadeStore().linkbrain;
    expect(facadeV1?.health("linkbrain-stage").registered).toBe(true);

    const second = writeCapturingPlugin({ id: "linkbrain" });
    const secondRegistry = loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: second.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-v2",
          keyId: BRAIN_KEY,
        },
      ],
    });
    expect(secondRegistry).not.toBe(firstRegistry);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).not.toBe(
      liveV1?.generationId,
    );
    expect(facadeV1?.health("linkbrain-stage").registered).toBe(false);
    await expect(facadeV1!.acquire({ bindingId: "linkbrain-stage" })).rejects.toThrow(
      /unregistered/,
    );
  });

  it("abandons staged candidates on later-plugin throwOnLoadError without retiring the prior live facade", () => {
    const livePlugin = writeCapturingPlugin({ id: "linkbrain" });
    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: livePlugin.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-live",
          keyId: BRAIN_KEY,
        },
      ],
    });
    const liveHandle = getLiveMachineTokenFacadeGenerationHandle("linkbrain");
    const liveFacade = facadeStore().linkbrain;
    const okPlugin = writeCapturingPlugin({ id: "wave6-ok" });
    const failPlugin = writeCapturingPlugin({ id: "wave6-fail", failRegister: true });
    const baseline = countMachineTokenFacadeGenerations();

    expect(() =>
      loadWithMachineTokenPlugins({
        throwOnLoadError: true,
        plugins: [
          {
            id: "wave6-ok",
            path: okPlugin.dir,
            bindingId: "ok-stage",
            clientId: "ok-v2",
            keyId: BRAIN_KEY,
          },
          {
            id: "wave6-fail",
            path: failPlugin.dir,
            bindingId: "fail-stage",
            clientId: "fail-v2",
            keyId: BRAIN_KEY,
          },
        ],
      }),
    ).toThrow(/plugin load failed/);

    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).toBe(
      liveHandle?.generationId,
    );
    expect(liveFacade?.health("linkbrain-stage").registered).toBe(true);
    expect(countMachineTokenFacadeGenerations()).toEqual(baseline);
  });

  it("rolls back on injected activation/precommit failure without retiring prior facades", () => {
    const livePlugin = writeCapturingPlugin({ id: "linkbrain" });
    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: livePlugin.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-live",
          keyId: BRAIN_KEY,
        },
      ],
    });
    const liveHandle = getLiveMachineTokenFacadeGenerationHandle("linkbrain");
    const liveFacade = facadeStore().linkbrain;
    const baseline = countMachineTokenFacadeGenerations();

    setPluginLoadActivationFailureInjectorForTest(() => {
      throw new Error("injected activation failure");
    });
    const replacement = writeCapturingPlugin({ id: "linkbrain" });
    expect(() =>
      loadWithMachineTokenPlugins({
        plugins: [
          {
            id: "linkbrain",
            path: replacement.dir,
            bindingId: "linkbrain-stage",
            clientId: "brain-v2",
            keyId: BRAIN_KEY,
          },
        ],
      }),
    ).toThrow(/injected activation failure/);

    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).toBe(
      liveHandle?.generationId,
    );
    expect(liveFacade?.health("linkbrain-stage").registered).toBe(true);
    expect(countMachineTokenFacadeGenerations()).toEqual(baseline);
  });

  it("retires the live facade when a plugin is removed from the candidate registry", async () => {
    const brain = writeCapturingPlugin({ id: "linkbrain" });
    const skills = writeCapturingPlugin({ id: "linkskills" });
    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: brain.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-live",
          keyId: BRAIN_KEY,
        },
        {
          id: "linkskills",
          path: skills.dir,
          bindingId: "linkskills-stage",
          clientId: "skills-live",
          keyId: SKILLS_KEY,
        },
      ],
    });
    const brainFacade = facadeStore().linkbrain;
    expect(listLiveMachineTokenFacadePluginIds()).toEqual(["linkbrain", "linkskills"]);

    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkskills",
          path: skills.dir,
          bindingId: "linkskills-stage",
          clientId: "skills-live",
          keyId: SKILLS_KEY,
        },
      ],
    });

    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeUndefined();
    expect(brainFacade?.health("linkbrain-stage").registered).toBe(false);
    await expect(brainFacade!.acquire({ bindingId: "linkbrain-stage" })).rejects.toThrow(
      /unregistered/,
    );
    expect(getLiveMachineTokenFacadeGenerationHandle("linkskills")).toBeDefined();
    expect(facadeStore().linkskills?.health("linkskills-stage").registered).toBe(true);
  });

  it("retires the live facade when a plugin is configured disabled", async () => {
    const brain = writeCapturingPlugin({ id: "linkbrain" });
    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: brain.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-live",
          keyId: BRAIN_KEY,
        },
      ],
    });
    const brainFacade = facadeStore().linkbrain;

    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: brain.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-live",
          keyId: BRAIN_KEY,
          enabled: false,
        },
      ],
    });

    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeUndefined();
    expect(brainFacade?.health("linkbrain-stage").registered).toBe(false);
    await expect(brainFacade!.acquire({ bindingId: "linkbrain-stage" })).rejects.toThrow(
      /unregistered/,
    );
  });

  it("retires the live facade when all machine-token bindings are removed", async () => {
    const brain = writeCapturingPlugin({ id: "linkbrain" });
    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: brain.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-live",
          keyId: BRAIN_KEY,
        },
      ],
    });
    const brainFacade = facadeStore().linkbrain;

    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: brain.dir,
          includeMachineToken: false,
        },
      ],
    });

    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeUndefined();
    expect(facadeStore().linkbrain).toBeUndefined();
    expect(brainFacade?.health("linkbrain-stage").registered).toBe(false);
    await expect(brainFacade!.acquire({ bindingId: "linkbrain-stage" })).rejects.toThrow(
      /unregistered/,
    );
  });

  it("replaces the generation when the binding id changes so the old binding cannot mint", async () => {
    const brain = writeCapturingPlugin({ id: "linkbrain" });
    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: brain.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-live",
          keyId: BRAIN_KEY,
        },
      ],
    });
    const oldFacade = facadeStore().linkbrain;
    const oldHandle = getLiveMachineTokenFacadeGenerationHandle("linkbrain");

    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: brain.dir,
          bindingId: "linkbrain-retained",
          clientId: "brain-live",
          keyId: BRAIN_KEY,
        },
      ],
    });

    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).not.toBe(
      oldHandle?.generationId,
    );
    expect(oldFacade?.health("linkbrain-stage").registered).toBe(false);
    await expect(oldFacade!.acquire({ bindingId: "linkbrain-stage" })).rejects.toThrow(
      /unregistered/,
    );
    expect(facadeStore().linkbrain?.health("linkbrain-retained").registered).toBe(true);
    expect(facadeStore().linkbrain?.grantedBindingIds.has("linkbrain-stage")).toBe(false);
    expect(facadeStore().linkbrain?.grantedBindingIds.has("linkbrain-retained")).toBe(true);
  });

  it("rejects a nested overlapping activating load during candidate registration", () => {
    const other = writePlainPlugin("wave7-other");
    (globalThis as Record<string, unknown>)[NESTED_LOAD_HOOK_KEY] = () => {
      loadOpenClawPlugins({
        cache: false,
        activate: true,
        config: {
          plugins: {
            enabled: true,
            load: { paths: [other.dir] },
            entries: {
              "wave7-other": { enabled: true },
            },
          },
        },
        env: {
          OPENCLAW_STATE_DIR: makeTempDir(),
          OPENCLAW_DISABLE_BUNDLED_PLUGINS: "1",
        },
      });
    };
    const nested = writeCapturingPlugin({
      id: "linkbrain",
      nestedLoadDuringRegister: true,
    });

    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: nested.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-live",
          keyId: BRAIN_KEY,
        },
      ],
    });

    const nestedError = (globalThis as Record<string, unknown>)[NESTED_LOAD_ERROR_KEY];
    expect(nestedError).toBeInstanceOf(PluginActivatingLoadConflictError);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeDefined();
    expect(getLiveMachineTokenFacadeGenerationHandle("wave7-other")).toBeUndefined();
  });

  it("rejects same-cache-key reentrant activating loads", () => {
    const plugin = writeCapturingPlugin({ id: "linkbrain" });
    const env = sharedLoaderEnv();
    const config = {
      plugins: {
        enabled: true,
        load: { paths: [plugin.dir] },
        entries: {
          linkbrain: {
            enabled: true,
            config: machineTokenEntryConfig({
              bindingId: "linkbrain-stage",
              clientId: "brain-v1",
              keyId: BRAIN_KEY,
            }),
          },
        },
      },
    };
    // Healthy same-active: second identical load returns the same registry,
    // same generation id, and unchanged generation counts (no rematerialize).
    const first = loadOpenClawPlugins({ cache: true, config, env });
    const before = countMachineTokenFacadeGenerations();
    const liveHandle = getLiveMachineTokenFacadeGenerationHandle("linkbrain");
    const snapshotIdentity = getActiveCombinedPluginRuntimeSnapshotIdentity();
    const facadeBefore = facadeStore().linkbrain;
    expect(snapshotIdentity).not.toBeNull();
    expect(getActivePluginRegistry()).toBe(first);
    expect(facadeBefore?.health("linkbrain-stage").registered).toBe(true);

    const second = loadOpenClawPlugins({ cache: true, config, env });
    expect(second).toBe(first);
    expect(getActivePluginRegistry()).toBe(first);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).toBe(
      liveHandle?.generationId,
    );
    expect(facadeStore().linkbrain).toBe(facadeBefore);
    expect(getActiveCombinedPluginRuntimeSnapshotIdentity()).toEqual(snapshotIdentity);
    expect(countMachineTokenFacadeGenerations()).toEqual(before);
  });

  it("does not stage production machine-token facades on setup-only createApi paths", () => {
    const registry = createPluginRegistry({
      logger: { info() {}, warn() {}, error() {}, debug() {} },
      runtime: {} as PluginRuntime,
      activateGlobalSideEffects: true,
    });
    const before = countMachineTokenFacadeGenerations();
    const api = registry.createApi(
      createPluginRecord({
        id: "telegram",
        source: "/plugins/telegram/index.ts",
        enabled: true,
        status: "loaded",
      }),
      {
        config: {} as OpenClawConfig,
        pluginConfig: machineTokenEntryConfig({
          bindingId: "telegram-stage",
          clientId: "telegram-client",
          keyId: BRAIN_KEY,
        }),
        registrationMode: "setup-only",
      },
    );
    expect(api.machineTokenFacade).toBeUndefined();
    expect(countMachineTokenFacadeGenerations()).toEqual(before);
    registry.commitPluginGlobalSideEffects("telegram", { activate: false });
    expect(countMachineTokenFacadeGenerations()).toEqual(before);
  });

  it("idempotently unregisters after replacement without resurrecting retired generations", async () => {
    const first = writeCapturingPlugin({ id: "linkbrain" });
    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: first.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-v1",
          keyId: BRAIN_KEY,
        },
      ],
    });
    const second = writeCapturingPlugin({ id: "linkbrain" });
    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: second.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-v2",
          keyId: BRAIN_KEY,
        },
      ],
    });
    unregisterMachineTokenFacadesForPlugin("linkbrain");
    unregisterMachineTokenFacadesForPlugin("linkbrain");
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeUndefined();
    expect(countMachineTokenFacadeGenerations()).toEqual({ candidate: 0, live: 0, total: 0 });
    await expect(
      facadeStore().linkbrain!.acquire({ bindingId: "linkbrain-stage" }),
    ).rejects.toThrow(/unregistered/);
  });

  it("keeps an unaffected second plugin live across a failed replacement load", () => {
    const brain = writeCapturingPlugin({ id: "linkbrain" });
    const skills = writeCapturingPlugin({ id: "linkskills" });
    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: brain.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-live",
          keyId: BRAIN_KEY,
        },
        {
          id: "linkskills",
          path: skills.dir,
          bindingId: "linkskills-stage",
          clientId: "skills-live",
          keyId: SKILLS_KEY,
        },
      ],
    });
    const skillsHandle = getLiveMachineTokenFacadeGenerationHandle("linkskills");
    const failPlugin = writeCapturingPlugin({ id: "wave6-fail", failRegister: true });
    expect(() =>
      loadWithMachineTokenPlugins({
        throwOnLoadError: true,
        plugins: [
          {
            id: "linkbrain",
            path: brain.dir,
            bindingId: "linkbrain-stage",
            clientId: "brain-v2",
            keyId: BRAIN_KEY,
          },
          {
            id: "wave6-fail",
            path: failPlugin.dir,
            bindingId: "fail-stage",
            clientId: "fail-v2",
            keyId: BRAIN_KEY,
          },
        ],
      }),
    ).toThrow(/plugin load failed/);

    expect(getLiveMachineTokenFacadeGenerationHandle("linkskills")?.generationId).toBe(
      skillsHandle?.generationId,
    );
    expect(facadeStore().linkskills?.health("linkskills-stage").registered).toBe(true);
  });

  it("rematerializes A facade generations on A→B→cached-A with fresh register", async () => {
    const stateDir = makeTempDir();
    const env = sharedLoaderEnv(stateDir);
    const pluginA = writeCapturingPlugin({ id: "linkbrain" });
    const pluginB = writeCapturingPlugin({ id: "wave8-b" });
    const configA = {
      plugins: {
        enabled: true,
        load: { paths: [pluginA.dir] },
        entries: {
          linkbrain: {
            enabled: true,
            config: machineTokenEntryConfig({
              bindingId: "linkbrain-stage",
              clientId: "brain-a",
              keyId: BRAIN_KEY,
            }),
          },
        },
      },
    };
    const configB = {
      plugins: {
        enabled: true,
        load: { paths: [pluginB.dir] },
        entries: {
          "wave8-b": {
            enabled: true,
            config: machineTokenEntryConfig({
              bindingId: "wave8-b-stage",
              clientId: "b-client",
              keyId: SKILLS_KEY,
            }),
          },
        },
      },
    };

    const registryA = loadOpenClawPlugins({ cache: true, config: configA, env });
    const genA = getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId;
    const facadeA = facadeStore().linkbrain;
    const snapshotA = getActiveCombinedPluginRuntimeSnapshotIdentity();
    expect(genA).toBeDefined();
    expect(snapshotA).not.toBeNull();
    expect(getActivePluginRegistry()).toBe(registryA);
    expect(facadeA?.health("linkbrain-stage").registered).toBe(true);

    const registryB = loadOpenClawPlugins({ cache: true, config: configB, env });
    expect(registryB).not.toBe(registryA);
    const genB = getLiveMachineTokenFacadeGenerationHandle("wave8-b")?.generationId;
    const facadeB = facadeStore()["wave8-b"];
    expect(genB).toBeDefined();
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeUndefined();
    expect(facadeA?.health("linkbrain-stage").registered).toBe(false);
    expect(getActivePluginRegistry()).toBe(registryB);

    // Wave 9: activating cache hit rematerializes unless same-active healthy.
    // A→B→cached A creates a new registry and re-runs register with a fresh facade.
    clearFacadeStore();
    const registryACached = loadOpenClawPlugins({ cache: true, config: configA, env });
    expect(registryACached).not.toBe(registryA);
    expect(getActivePluginRegistry()).toBe(registryACached);

    const newFacade = facadeStore().linkbrain;
    expect(newFacade).toBeDefined();
    expect(newFacade).not.toBe(facadeA);
    expect(newFacade?.health("linkbrain-stage").registered).toBe(true);
    expect(facadeA?.health("linkbrain-stage").registered).toBe(false);

    const liveAAfter = getLiveMachineTokenFacadeGenerationHandle("linkbrain");
    expect(liveAAfter).toBeDefined();
    expect(liveAAfter?.generationId).not.toBe(genA);
    expect(liveAAfter?.generationId).not.toBe(genB);
    expect(getLiveMachineTokenFacadeGenerationHandle("wave8-b")).toBeUndefined();
    expect(facadeB?.health("wave8-b-stage").registered).toBe(false);
    await expect(facadeA!.acquire({ bindingId: "linkbrain-stage" })).rejects.toThrow(
      /unregistered/,
    );
    await expect(facadeB!.acquire({ bindingId: "wave8-b-stage" })).rejects.toThrow(/unregistered/);

    let acquireError: unknown;
    try {
      await newFacade!.acquire({ bindingId: "linkbrain-stage" });
    } catch (error) {
      acquireError = error;
    }
    // Test PEM is not a real assertion key; mint may fail, but grant/live must not.
    expect(String(acquireError ?? "")).not.toMatch(
      /unregistered|not granted machine-token binding/,
    );

    // Secondary: host live accessor agrees with the captured facade.
    expect(getLiveMachineTokenPluginFacade("linkbrain")).toBe(newFacade);

    expect(listLiveMachineTokenFacadePluginIds()).toEqual(["linkbrain"]);
    expect(countMachineTokenFacadeGenerations()).toEqual({
      candidate: 0,
      live: 1,
      total: 1,
    });
    expect(getActiveCombinedPluginRuntimeSnapshotIdentity()).toEqual(snapshotA);
    expect(getActiveCombinedPluginRuntimeSnapshotIdentity()?.cacheKey).toBe(snapshotA?.cacheKey);

    newFacade!.unregister();
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeUndefined();
    expect(countMachineTokenFacadeGenerations()).toEqual({
      candidate: 0,
      live: 0,
      total: 0,
    });
  });

  it("rematerializes same-active after live facade loss", async () => {
    const stateDir = makeTempDir();
    const env = sharedLoaderEnv(stateDir);
    const plugin = writeCapturingPlugin({ id: "linkbrain" });
    const config = {
      plugins: {
        enabled: true,
        load: { paths: [plugin.dir] },
        entries: {
          linkbrain: {
            enabled: true,
            config: machineTokenEntryConfig({
              bindingId: "linkbrain-stage",
              clientId: "brain-a",
              keyId: BRAIN_KEY,
            }),
          },
        },
      },
    };

    const registryA = loadOpenClawPlugins({ cache: true, config, env });
    const facadeA = facadeStore().linkbrain;
    const genA = getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId;
    expect(facadeA?.health("linkbrain-stage").registered).toBe(true);
    expect(getActivePluginRegistry()).toBe(registryA);

    facadeStore().linkbrain!.unregister();
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeUndefined();
    expect(facadeA?.health("linkbrain-stage").registered).toBe(false);

    clearFacadeStore();
    const registryRebuilt = loadOpenClawPlugins({ cache: true, config, env });
    expect(registryRebuilt).not.toBe(registryA);
    expect(getActivePluginRegistry()).toBe(registryRebuilt);

    const newFacade = facadeStore().linkbrain;
    expect(newFacade).toBeDefined();
    expect(newFacade).not.toBe(facadeA);
    expect(newFacade?.health("linkbrain-stage").registered).toBe(true);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).not.toBe(genA);

    let acquireError: unknown;
    try {
      await newFacade!.acquire({ bindingId: "linkbrain-stage" });
    } catch (error) {
      acquireError = error;
    }
    expect(String(acquireError ?? "")).not.toMatch(
      /unregistered|not granted machine-token binding/,
    );

    expect(countMachineTokenFacadeGenerations()).toEqual({
      candidate: 0,
      live: 1,
      total: 1,
    });

    newFacade!.unregister();
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeUndefined();
    expect(countMachineTokenFacadeGenerations()).toEqual({
      candidate: 0,
      live: 0,
      total: 0,
    });
  });

  it("rolls back after-registry-before-mt activation failure without retiring prior facades", () => {
    const livePlugin = writeCapturingPlugin({ id: "linkbrain" });
    const priorRegistry = loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: livePlugin.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-live",
          keyId: BRAIN_KEY,
        },
      ],
    });
    const liveHandle = getLiveMachineTokenFacadeGenerationHandle("linkbrain");
    const liveFacade = facadeStore().linkbrain;
    const priorSnapshot = getActiveCombinedPluginRuntimeSnapshotIdentity();
    const baseline = countMachineTokenFacadeGenerations();

    setPluginLoadActivationFailureInjectorForTest((phase) => {
      if (phase === "after-registry-before-mt") {
        throw new Error("injected after-registry-before-mt failure");
      }
    });
    const replacement = writeCapturingPlugin({ id: "linkbrain" });
    expect(() =>
      loadWithMachineTokenPlugins({
        plugins: [
          {
            id: "linkbrain",
            path: replacement.dir,
            bindingId: "linkbrain-stage",
            clientId: "brain-v2",
            keyId: BRAIN_KEY,
          },
        ],
      }),
    ).toThrow(/injected after-registry-before-mt failure/);

    expect(getActivePluginRegistry()).toBe(priorRegistry);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).toBe(
      liveHandle?.generationId,
    );
    expect(liveFacade?.health("linkbrain-stage").registered).toBe(true);
    expect(getActiveCombinedPluginRuntimeSnapshotIdentity()).toEqual(priorSnapshot);
    expect(countMachineTokenFacadeGenerations()).toEqual(baseline);
  });

  it("retires only the removed binding when one of multiple bindings is dropped", async () => {
    const brain = writeCapturingPlugin({ id: "linkbrain" });
    const skills = writeCapturingPlugin({ id: "linkskills" });
    const pluginBinding = "linkbrain-plugin-stage";
    const mcpBinding = "linkbrain-mcp-stage";
    const mcpServers = {
      linkbrain: mcpMachineTokenServer({
        bindingId: mcpBinding,
        clientId: "brain-mcp",
        keyId: MCP_KEY,
      }),
    };

    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: brain.dir,
          bindingId: pluginBinding,
          clientId: "brain-plugin",
          keyId: BRAIN_KEY,
        },
        {
          id: "linkskills",
          path: skills.dir,
          bindingId: "linkskills-stage",
          clientId: "skills-live",
          keyId: SKILLS_KEY,
        },
      ],
      mcpServers,
    });
    const bothFacade = facadeStore().linkbrain;
    const skillsHandle = getLiveMachineTokenFacadeGenerationHandle("linkskills");
    expect(bothFacade?.grantedBindingIds.has(pluginBinding)).toBe(true);
    expect(bothFacade?.grantedBindingIds.has(mcpBinding)).toBe(true);
    expect(bothFacade?.health(pluginBinding).registered).toBe(true);
    expect(bothFacade?.health(mcpBinding).registered).toBe(true);

    // Drop the MCP binding; retain pluginConfig.machineToken. Scope to
    // linkbrain so unrelated linkskills stays on its prior live generation.
    loadWithMachineTokenPlugins({
      onlyPluginIds: ["linkbrain"],
      plugins: [
        {
          id: "linkbrain",
          path: brain.dir,
          bindingId: pluginBinding,
          clientId: "brain-plugin",
          keyId: BRAIN_KEY,
        },
      ],
    });

    expect(bothFacade?.health(pluginBinding).registered).toBe(false);
    await expect(bothFacade!.acquire({ bindingId: pluginBinding })).rejects.toThrow(/unregistered/);
    await expect(bothFacade!.acquire({ bindingId: mcpBinding })).rejects.toThrow(/unregistered/);

    const retainedFacade = facadeStore().linkbrain;
    expect(retainedFacade).toBeDefined();
    expect(retainedFacade?.grantedBindingIds.has(pluginBinding)).toBe(true);
    expect(retainedFacade?.grantedBindingIds.has(mcpBinding)).toBe(false);
    expect(retainedFacade?.health(pluginBinding).registered).toBe(true);
    await expect(retainedFacade!.acquire({ bindingId: mcpBinding })).rejects.toThrow(
      /not granted machine-token binding/,
    );
    expect(getLiveMachineTokenFacadeGenerationHandle("linkskills")?.generationId).toBe(
      skillsHandle?.generationId,
    );
    expect(facadeStore().linkskills?.health("linkskills-stage").registered).toBe(true);
  });

  it("rejects nested cache-hit activating loads while a fresh load holds the lock", () => {
    const stateDir = makeTempDir();
    const env = sharedLoaderEnv(stateDir);
    const cachedA = writeCapturingPlugin({ id: "linkbrain" });
    const configA = {
      plugins: {
        enabled: true,
        load: { paths: [cachedA.dir] },
        entries: {
          linkbrain: {
            enabled: true,
            config: machineTokenEntryConfig({
              bindingId: "linkbrain-stage",
              clientId: "brain-cached",
              keyId: BRAIN_KEY,
            }),
          },
        },
      },
    };
    // Populate cache for A, then leave B as the active registry so a nested
    // cache-hit of A must take the activating lock and conflict.
    loadOpenClawPlugins({ cache: true, config: configA, env });
    const other = writeCapturingPlugin({
      id: "wave8-b",
      nestedLoadDuringRegister: true,
    });
    (globalThis as Record<string, unknown>)[NESTED_LOAD_HOOK_KEY] = () => {
      loadOpenClawPlugins({ cache: true, config: configA, env });
    };

    loadWithMachineTokenPlugins({
      stateDir,
      env,
      plugins: [
        {
          id: "wave8-b",
          path: other.dir,
          bindingId: "wave8-b-stage",
          clientId: "b-nested",
          keyId: SKILLS_KEY,
        },
      ],
    });

    const nestedError = (globalThis as Record<string, unknown>)[NESTED_LOAD_ERROR_KEY];
    expect(nestedError).toBeInstanceOf(PluginActivatingLoadConflictError);
    expect(getLiveMachineTokenFacadeGenerationHandle("wave8-b")).toBeDefined();
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeUndefined();
  });

  it("documents cancel-after-commit as N/A for the sync loader (precommit failure leaves prior untouched)", () => {
    // loadOpenClawPlugins has no AbortSignal option; commit is synchronous.
    // Cancel-after-successful-commit cannot roll back a completed combined
    // activation. Precommit failure coverage below proves prior stays live.
    const livePlugin = writeCapturingPlugin({ id: "linkbrain" });
    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: livePlugin.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-live",
          keyId: BRAIN_KEY,
        },
      ],
    });
    const liveHandle = getLiveMachineTokenFacadeGenerationHandle("linkbrain");
    const liveFacade = facadeStore().linkbrain;
    const baseline = countMachineTokenFacadeGenerations();

    setCombinedPluginRuntimeActivationFailureInjectorForTest((phase) => {
      if (phase === "precommit") {
        throw new Error("injected precommit cancel-equivalent failure");
      }
    });
    const replacement = writeCapturingPlugin({ id: "linkbrain" });
    expect(() =>
      loadWithMachineTokenPlugins({
        plugins: [
          {
            id: "linkbrain",
            path: replacement.dir,
            bindingId: "linkbrain-stage",
            clientId: "brain-v2",
            keyId: BRAIN_KEY,
          },
        ],
      }),
    ).toThrow(/injected precommit cancel-equivalent failure/);

    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).toBe(
      liveHandle?.generationId,
    );
    expect(liveFacade?.health("linkbrain-stage").registered).toBe(true);
    expect(countMachineTokenFacadeGenerations()).toEqual(baseline);
  });

  it.each([
    { point: "early" as const },
    { point: "late" as const },
  ])(
    "rolls back on real hook-runner init $point failure without retiring prior facades",
    ({ point }) => {
      const livePlugin = writeCapturingPlugin({ id: "linkbrain" });
      const priorRegistry = loadWithMachineTokenPlugins({
        plugins: [
          {
            id: "linkbrain",
            path: livePlugin.dir,
            bindingId: "linkbrain-stage",
            clientId: "brain-live",
            keyId: BRAIN_KEY,
          },
        ],
      });
      const liveHandle = getLiveMachineTokenFacadeGenerationHandle("linkbrain");
      const liveFacade = facadeStore().linkbrain;
      const priorSnapshot = getActiveCombinedPluginRuntimeSnapshotIdentity();
      const baseline = countMachineTokenFacadeGenerations();

      // One-shot so rollback re-init of the prior runner is not re-injected.
      setGlobalHookRunnerInitFailureInjectorForTest((injectPoint) => {
        if (injectPoint === point) {
          setGlobalHookRunnerInitFailureInjectorForTest(null);
          throw new Error(`injected hook-init ${point} failure`);
        }
      });
      const replacement = writeCapturingPlugin({ id: "linkbrain" });
      expect(() =>
        loadWithMachineTokenPlugins({
          plugins: [
            {
              id: "linkbrain",
              path: replacement.dir,
              bindingId: "linkbrain-stage",
              clientId: "brain-v2",
              keyId: BRAIN_KEY,
            },
          ],
        }),
      ).toThrow(new RegExp(`injected hook-init ${point} failure`));

      expect(getActivePluginRegistry()).toBe(priorRegistry);
      expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).toBe(
        liveHandle?.generationId,
      );
      expect(liveFacade?.health("linkbrain-stage").registered).toBe(true);
      expect(getActiveCombinedPluginRuntimeSnapshotIdentity()).toEqual(priorSnapshot);
      expect(countMachineTokenFacadeGenerations()).toEqual(baseline);
    },
  );

  it("rolls back on real hook-runner init mid failure when runner is not yet created", () => {
    resetGlobalHookRunner();
    const livePlugin = writeCapturingPlugin({ id: "linkbrain" });
    const priorRegistry = loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: livePlugin.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-live",
          keyId: BRAIN_KEY,
        },
      ],
    });
    const liveHandle = getLiveMachineTokenFacadeGenerationHandle("linkbrain");
    const liveFacade = facadeStore().linkbrain;
    const priorSnapshot = getActiveCombinedPluginRuntimeSnapshotIdentity();
    const baseline = countMachineTokenFacadeGenerations();

    // Drop the runner so the next initializeGlobalHookRunner hits the mid point.
    resetGlobalHookRunner();
    setGlobalHookRunnerInitFailureInjectorForTest((injectPoint) => {
      if (injectPoint === "mid") {
        setGlobalHookRunnerInitFailureInjectorForTest(null);
        throw new Error("injected hook-init mid failure");
      }
    });
    const replacement = writeCapturingPlugin({ id: "linkbrain" });
    expect(() =>
      loadWithMachineTokenPlugins({
        plugins: [
          {
            id: "linkbrain",
            path: replacement.dir,
            bindingId: "linkbrain-stage",
            clientId: "brain-v2",
            keyId: BRAIN_KEY,
          },
        ],
      }),
    ).toThrow(/injected hook-init mid failure/);

    expect(getActivePluginRegistry()).toBe(priorRegistry);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).toBe(
      liveHandle?.generationId,
    );
    expect(liveFacade?.health("linkbrain-stage").registered).toBe(true);
    expect(getActiveCombinedPluginRuntimeSnapshotIdentity()).toEqual(priorSnapshot);
    expect(countMachineTokenFacadeGenerations()).toEqual(baseline);
  });
});

describe("loadOpenClawPlugins setup/channel lifecycle machine-token baselines", () => {
  afterEach(() => {
    setPluginLoadActivationFailureInjectorForTest(null);
    setCombinedPluginRuntimeActivationFailureInjectorForTest(null);
    setGlobalHookRunnerInitFailureInjectorForTest(null);
    resetActiveCombinedPluginRuntimeSnapshotIdentityForTest();
    resetActivatingPluginLoadLockForTest();
    unregisterMachineTokenFacadesForPlugin("linkbrain");
    unregisterMachineTokenFacadesForPlugin("wave8-b");
    clearFacadeStore();
    clearPluginLoaderCache();
    resetPluginLoaderTestStateForTest();
    cleanupPluginLoaderFixturesForTest();
    delete process.env[BRAIN_KEY];
    delete process.env[SKILLS_KEY];
    delete process.env[MCP_KEY];
    delete (globalThis as Record<string, unknown>)[NESTED_LOAD_HOOK_KEY];
    delete (globalThis as Record<string, unknown>)[NESTED_LOAD_ERROR_KEY];
  });

  it("keeps machine-token generation counts at baseline for setup-only success", () => {
    const built = createSetupEntryChannelPluginFixture({
      id: "wave9-setup-only-mt",
      label: "Wave9 Setup Only MT",
      packageName: "@openclaw/wave9-setup-only-mt",
      fullBlurb: "full entry must not run in setup-only mode",
      setupBlurb: "setup-only baseline",
      configured: false,
      useBundledSetupEntryContract: true,
    });
    const baseline = countMachineTokenFacadeGenerations();

    const registry = loadOpenClawPlugins({
      cache: false,
      config: {
        plugins: {
          load: { paths: [built.pluginDir] },
          allow: ["wave9-setup-only-mt"],
          entries: {
            "wave9-setup-only-mt": { enabled: false },
          },
        },
      },
      includeSetupOnlyChannelPlugins: true,
      onlyPluginIds: ["wave9-setup-only-mt"],
    });

    // Disabled + setup-only scoped load must not stage production MT facades.
    expect(registry.plugins.find((plugin) => plugin.id === "wave9-setup-only-mt")).toBeDefined();
    expect(countMachineTokenFacadeGenerations()).toEqual(baseline);
    expect(getLiveMachineTokenFacadeGenerationHandle("wave9-setup-only-mt")).toBeUndefined();
  });

  it("keeps machine-token generation counts at baseline when setup load throws sync", () => {
    const built = createSetupEntryChannelPluginFixture({
      id: "wave9-setup-throw-mt",
      label: "Wave9 Setup Throw MT",
      packageName: "@openclaw/wave9-setup-throw-mt",
      fullBlurb: "full entry unused",
      setupBlurb: "setup throw baseline",
      configured: true,
      startupDeferConfiguredChannelFullLoadUntilAfterListen: true,
      useBundledSetupEntryContract: true,
      bundledSetupRuntimeRoutePath: "/wave9-setup-throw",
      bundledSetupRuntimeRegisterError: "wave9 intentional setup-runtime registrar throw",
    });
    const baseline = countMachineTokenFacadeGenerations();

    const registry = loadOpenClawPlugins({
      cache: false,
      preferSetupRuntimeForChannelPlugins: true,
      config: {
        channels: {
          "wave9-setup-throw-mt": {
            enabled: true,
            token: "configured",
          },
        },
        plugins: {
          load: { paths: [built.pluginDir] },
          allow: ["wave9-setup-throw-mt"],
        },
      },
    });

    expect(registry.plugins.find((entry) => entry.id === "wave9-setup-throw-mt")?.status).toBe(
      "error",
    );
    expect(registry.plugins.find((entry) => entry.id === "wave9-setup-throw-mt")?.error).toContain(
      "wave9 intentional setup-runtime registrar throw",
    );
    expect(countMachineTokenFacadeGenerations()).toEqual(baseline);
    expect(getLiveMachineTokenFacadeGenerationHandle("wave9-setup-throw-mt")).toBeUndefined();
  });

  it("rejects nested activating setup load during full machine-token register", () => {
    const built = createSetupEntryChannelPluginFixture({
      id: "wave9-setup-nested-mt",
      label: "Wave9 Setup Nested MT",
      packageName: "@openclaw/wave9-setup-nested-mt",
      fullBlurb: "full unused during nested setup",
      setupBlurb: "nested setup overlap",
      configured: false,
      useBundledSetupEntryContract: true,
    });
    const setupConfig = {
      plugins: {
        load: { paths: [built.pluginDir] },
        allow: ["wave9-setup-nested-mt"],
        entries: {
          "wave9-setup-nested-mt": { enabled: false },
        },
      },
    };
    (globalThis as Record<string, unknown>)[NESTED_LOAD_HOOK_KEY] = () => {
      loadOpenClawPlugins({
        cache: false,
        activate: true,
        config: setupConfig,
        includeSetupOnlyChannelPlugins: true,
        forceSetupOnlyChannelPlugins: true,
        onlyPluginIds: ["wave9-setup-nested-mt"],
      });
    };
    const nested = writeCapturingPlugin({
      id: "linkbrain",
      nestedLoadDuringRegister: true,
    });

    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: nested.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-live",
          keyId: BRAIN_KEY,
        },
      ],
    });

    const nestedError = (globalThis as Record<string, unknown>)[NESTED_LOAD_ERROR_KEY];
    expect(nestedError).toBeInstanceOf(PluginActivatingLoadConflictError);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeDefined();
    expect(getLiveMachineTokenFacadeGenerationHandle("wave9-setup-nested-mt")).toBeUndefined();
  });

  it("documents that activate:false setup loads may nest without activating-load conflict", () => {
    // Non-activating snapshot loads do not take the activating lock, so a
    // nested setup-only probe during full MT register is allowed. Production
    // callers that need isolation must use activate:true (covered above).
    const built = createSetupEntryChannelPluginFixture({
      id: "wave9-setup-inactive-mt",
      label: "Wave9 Setup Inactive MT",
      packageName: "@openclaw/wave9-setup-inactive-mt",
      fullBlurb: "full unused",
      setupBlurb: "inactive nested setup",
      configured: false,
      useBundledSetupEntryContract: true,
    });
    const baselineBeforeNested = { current: null as ReturnType<
      typeof countMachineTokenFacadeGenerations
    > | null };
    (globalThis as Record<string, unknown>)[NESTED_LOAD_HOOK_KEY] = () => {
      baselineBeforeNested.current = countMachineTokenFacadeGenerations();
      loadOpenClawPlugins({
        cache: false,
        activate: false,
        config: {
          plugins: {
            load: { paths: [built.pluginDir] },
            allow: ["wave9-setup-inactive-mt"],
            entries: {
              "wave9-setup-inactive-mt": { enabled: false },
            },
          },
        },
        includeSetupOnlyChannelPlugins: true,
        forceSetupOnlyChannelPlugins: true,
        onlyPluginIds: ["wave9-setup-inactive-mt"],
      });
      (globalThis as Record<string, unknown>)[NESTED_LOAD_ERROR_KEY] = null;
    };
    const nested = writeCapturingPlugin({
      id: "linkbrain",
      nestedLoadDuringRegister: true,
    });

    loadWithMachineTokenPlugins({
      plugins: [
        {
          id: "linkbrain",
          path: nested.dir,
          bindingId: "linkbrain-stage",
          clientId: "brain-live",
          keyId: BRAIN_KEY,
        },
      ],
    });

    expect((globalThis as Record<string, unknown>)[NESTED_LOAD_ERROR_KEY]).toBeNull();
    expect(baselineBeforeNested.current).not.toBeNull();
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeDefined();
    expect(getLiveMachineTokenFacadeGenerationHandle("wave9-setup-inactive-mt")).toBeUndefined();
  });
});
