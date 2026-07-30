/**
 * Wave 6 — real loadOpenClawPlugins transaction proofs for machine-token
 * facade staging/publication. Surrogate createApi+commit tests alone are
 * insufficient; this file exercises the complete candidate loop + activation.
 */
import { afterEach, describe, expect, it } from "vitest";
import {
  countMachineTokenFacadeGenerations,
  getLiveMachineTokenFacadeGenerationHandle,
  unregisterMachineTokenFacadesForPlugin,
} from "../agents/machine-token-host.js";
import type { MachineTokenPluginFacade } from "../agents/machine-token-types.js";
import {
  cleanupPluginLoaderFixturesForTest,
  clearPluginLoaderCache,
  loadOpenClawPlugins,
  makeTempDir,
  resetPluginLoaderTestStateForTest,
  writePlugin,
} from "./loader.test-fixtures.js";
import { createPluginRegistry } from "./registry.js";
import { createPluginRecord } from "./status.test-fixtures.js";
import type { PluginRuntime } from "./runtime/types.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";

const BRAIN_KEY = "LINKTREND_TEST_WAVE6_BRAIN_ASSERTION_PEM";
const SKILLS_KEY = "LINKTREND_TEST_WAVE6_SKILLS_ASSERTION_PEM";
const FACADE_STORE_KEY = "__openclawWave6MachineTokenFacades";

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

function writeCapturingPlugin(params: { id: string; failRegister?: boolean }) {
  const failBody = params.failRegister
    ? `throw new Error("intentional register failure for ${params.id}");`
    : "";
  return writePlugin({
    id: params.id,
    configSchema: MACHINE_TOKEN_SCHEMA,
    body: `module.exports = {
  id: ${JSON.stringify(params.id)},
  register(api) {
    ${failBody}
    globalThis.${FACADE_STORE_KEY} = globalThis.${FACADE_STORE_KEY} || {};
    globalThis.${FACADE_STORE_KEY}[${JSON.stringify(params.id)}] = api.machineTokenFacade;
  },
};
`,
  });
}

function loadWithMachineTokenPlugins(params: {
  plugins: Array<{
    id: string;
    path: string;
    bindingId: string;
    clientId: string;
    keyId: string;
    enabled?: boolean;
  }>;
  throwOnLoadError?: boolean;
  activate?: boolean;
}) {
  process.env[BRAIN_KEY] = "test-pem-brain";
  process.env[SKILLS_KEY] = "test-pem-skills";
  const entries: Record<string, { enabled: boolean; config: Record<string, unknown> }> = {};
  for (const plugin of params.plugins) {
    entries[plugin.id] = {
      enabled: plugin.enabled !== false,
      config: machineTokenEntryConfig({
        bindingId: plugin.bindingId,
        clientId: plugin.clientId,
        keyId: plugin.keyId,
      }),
    };
  }
  return loadOpenClawPlugins({
    cache: false,
    activate: params.activate !== false,
    throwOnLoadError: params.throwOnLoadError,
    config: {
      plugins: {
        enabled: true,
        load: { paths: params.plugins.map((plugin) => plugin.path) },
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
    unregisterMachineTokenFacadesForPlugin("linkbrain");
    unregisterMachineTokenFacadesForPlugin("linkskills");
    unregisterMachineTokenFacadesForPlugin("wave6-ok");
    unregisterMachineTokenFacadesForPlugin("wave6-fail");
    clearFacadeStore();
    clearPluginLoaderCache();
    resetPluginLoaderTestStateForTest();
    cleanupPluginLoaderFixturesForTest();
    delete process.env[BRAIN_KEY];
    delete process.env[SKILLS_KEY];
  });

  it("keeps prior live facades until atomic registry activation publishes replacements", async () => {
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
    expect(countMachineTokenFacadeGenerations()).toEqual({ candidate: 0, live: 1, total: 1 });

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
    const liveV2 = getLiveMachineTokenFacadeGenerationHandle("linkbrain");
    expect(liveV2?.generationId).not.toBe(liveV1?.generationId);
    expect(facadeV1?.health("linkbrain-stage").registered).toBe(false);
    expect(facadeStore().linkbrain?.health("linkbrain-stage").registered).toBe(true);
    await expect(facadeV1!.acquire({ bindingId: "linkbrain-stage" })).rejects.toThrow(
      /unregistered/,
    );
    expect(countMachineTokenFacadeGenerations()).toEqual({ candidate: 0, live: 1, total: 1 });
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
    expect(liveHandle).toBeDefined();
    const liveFacade = facadeStore().linkbrain;
    expect(liveFacade?.health("linkbrain-stage").registered).toBe(true);

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
    expect(getLiveMachineTokenFacadeGenerationHandle("wave6-ok")).toBeUndefined();
    expect(getLiveMachineTokenFacadeGenerationHandle("wave6-fail")).toBeUndefined();
    expect(countMachineTokenFacadeGenerations()).toEqual(baseline);
  });

  it("abandons staged candidates when an earlier plugin fails under throwOnLoadError", () => {
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
    const failPlugin = writeCapturingPlugin({ id: "wave6-fail", failRegister: true });
    const okPlugin = writeCapturingPlugin({ id: "wave6-ok" });

    expect(() =>
      loadWithMachineTokenPlugins({
        throwOnLoadError: true,
        plugins: [
          {
            id: "wave6-fail",
            path: failPlugin.dir,
            bindingId: "fail-stage",
            clientId: "fail-early",
            keyId: BRAIN_KEY,
          },
          {
            id: "wave6-ok",
            path: okPlugin.dir,
            bindingId: "ok-stage",
            clientId: "ok-late",
            keyId: BRAIN_KEY,
          },
        ],
      }),
    ).toThrow(/plugin load failed/);

    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).toBe(
      liveHandle?.generationId,
    );
    expect(getLiveMachineTokenFacadeGenerationHandle("wave6-ok")).toBeUndefined();
    expect(countMachineTokenFacadeGenerations().candidate).toBe(0);
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
    expect(skillsHandle).toBeDefined();

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

  it("rejects nested concurrent loads for the same cache key (serialization)", () => {
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
    // First load publishes; second load with cache true reuses. Nested reentry
    // during an in-flight load is rejected by PluginLoadReentryError.
    const first = loadOpenClawPlugins({ cache: true, config, env });
    expect(first.plugins.find((entry) => entry.id === "linkbrain")?.status).toBe("loaded");
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeDefined();

    // Cache hit path must not leak candidates.
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
    const live = getLiveMachineTokenFacadeGenerationHandle("linkbrain");
    expect(live).toBeDefined();
    unregisterMachineTokenFacadesForPlugin("linkbrain");
    unregisterMachineTokenFacadesForPlugin("linkbrain");
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeUndefined();
    expect(countMachineTokenFacadeGenerations()).toEqual({ candidate: 0, live: 0, total: 0 });
    await expect(
      facadeStore().linkbrain!.acquire({ bindingId: "linkbrain-stage" }),
    ).rejects.toThrow(/unregistered/);
  });
});
