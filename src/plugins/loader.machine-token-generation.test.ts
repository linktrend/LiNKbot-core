/**
 * Wave 6/7 — real loadOpenClawPlugins transaction proofs for machine-token
 * facade staging, combined ownership commit, removal/disable reconciliation,
 * activating-load serialization, and activation-failure rollback.
 */
import { afterEach, describe, expect, it } from "vitest";
import {
  countMachineTokenFacadeGenerations,
  getLiveMachineTokenFacadeGenerationHandle,
  listLiveMachineTokenFacadePluginIds,
  unregisterMachineTokenFacadesForPlugin,
} from "../agents/machine-token-host.js";
import type { MachineTokenPluginFacade } from "../agents/machine-token-types.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  cleanupPluginLoaderFixturesForTest,
  clearPluginLoaderCache,
  loadOpenClawPlugins,
  makeTempDir,
  resetPluginLoaderTestStateForTest,
  writePlugin,
} from "./loader.test-fixtures.js";
import {
  PluginActivatingLoadConflictError,
  resetActivatingPluginLoadLockForTest,
  setPluginLoadActivationFailureInjectorForTest,
} from "./loader.js";
import { createPluginRegistry } from "./registry.js";
import type { PluginRuntime } from "./runtime/types.js";
import { createPluginRecord } from "./status.test-fixtures.js";

const BRAIN_KEY = "LINKTREND_TEST_WAVE7_BRAIN_ASSERTION_PEM";
const SKILLS_KEY = "LINKTREND_TEST_WAVE7_SKILLS_ASSERTION_PEM";
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
  onlyPluginIds?: string[];
  paths?: string[];
}) {
  process.env[BRAIN_KEY] = "test-pem-brain";
  process.env[SKILLS_KEY] = "test-pem-skills";
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
    cache: false,
    activate: params.activate !== false,
    throwOnLoadError: params.throwOnLoadError,
    ...(params.onlyPluginIds ? { onlyPluginIds: params.onlyPluginIds } : {}),
    config: {
      plugins: {
        enabled: true,
        load: {
          paths: params.paths ?? params.plugins.map((plugin) => plugin.path),
        },
        entries,
      },
    },
    env: {
      OPENCLAW_STATE_DIR: makeTempDir(),
      OPENCLAW_DISABLE_BUNDLED_PLUGINS: "1",
      [BRAIN_KEY]: "test-pem-brain",
      [SKILLS_KEY]: "test-pem-skills",
    },
  });
}

describe("loadOpenClawPlugins machine-token generation transaction", () => {
  afterEach(() => {
    setPluginLoadActivationFailureInjectorForTest(null);
    resetActivatingPluginLoadLockForTest();
    unregisterMachineTokenFacadesForPlugin("linkbrain");
    unregisterMachineTokenFacadesForPlugin("linkskills");
    unregisterMachineTokenFacadesForPlugin("wave6-ok");
    unregisterMachineTokenFacadesForPlugin("wave6-fail");
    unregisterMachineTokenFacadesForPlugin("wave7-other");
    clearFacadeStore();
    clearPluginLoaderCache();
    resetPluginLoaderTestStateForTest();
    cleanupPluginLoaderFixturesForTest();
    delete process.env[BRAIN_KEY];
    delete process.env[SKILLS_KEY];
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
    const env = {
      OPENCLAW_STATE_DIR: makeTempDir(),
      OPENCLAW_DISABLE_BUNDLED_PLUGINS: "1",
      [BRAIN_KEY]: "test-pem-brain",
    };
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
    // First load publishes; cache hit reuses without taking a second overlapping
    // construction path. Nested reentry for an in-flight key is covered by the
    // activating-load conflict test above.
    const first = loadOpenClawPlugins({ cache: true, config, env });
    const before = countMachineTokenFacadeGenerations();
    const second = loadOpenClawPlugins({ cache: true, config, env });
    expect(second).toBe(first);
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
});
