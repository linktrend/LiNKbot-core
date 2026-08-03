/**
 * Integration regression: gateway plugin composition with repeated activating
 * registrations must keep the service-held machine-token facade live through
 * rematerialize, process-style stop/start with persistent state, and drain mint.
 *
 * Stage defect (third disprove): state open + worker running, repeated linkbrain
 * registrations, then capture worker deadletters
 * "Machine-token facade for plugin linkbrain is unregistered; reload must create a new facade".
 */
import fs from "node:fs/promises";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  countMachineTokenFacadeGenerations,
  getLiveMachineTokenFacadeGenerationHandle,
  unregisterMachineTokenFacadesForPlugin,
} from "../agents/machine-token-host.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  resetActivatingPluginLoadLockForTest,
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
import {
  resetActiveCombinedPluginRuntimeSnapshotIdentityForTest,
  setCombinedPluginRuntimeActivationFailureInjectorForTest,
} from "./plugin-runtime-activation.js";
import { startPluginServices } from "./services.js";

const BRAIN_KEY = "OPENCLAW_TEST_MT_BRAIN_PEM";
const FACADE_STORE_KEY = "__openclawMtBootFacadeStore";
const SERVICE_FACADE_KEY = "__openclawMtBootServiceFacade";
const REGISTER_COUNT_KEY = "__openclawMtBootRegisterCount";

const MACHINE_TOKEN_SCHEMA = {
  type: "object",
  additionalProperties: false,
  properties: {
    machineToken: { type: "object", additionalProperties: true },
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

function sharedEnv(stateDir: string): NodeJS.ProcessEnv {
  process.env[BRAIN_KEY] = "test-pem-brain";
  return {
    OPENCLAW_STATE_DIR: stateDir,
    OPENCLAW_DISABLE_BUNDLED_PLUGINS: "1",
    [BRAIN_KEY]: "test-pem-brain",
  };
}

type HeldFacade = {
  health: (id: string) => { registered: boolean };
  acquire: (p: { bindingId: string }) => Promise<unknown>;
};

function clearGlobals(): void {
  delete (globalThis as Record<string, unknown>)[FACADE_STORE_KEY];
  delete (globalThis as Record<string, unknown>)[SERVICE_FACADE_KEY];
  delete (globalThis as Record<string, unknown>)[REGISTER_COUNT_KEY];
}

async function drainMintOnHeldFacade(held: HeldFacade): Promise<void> {
  // Capture worker mint path before Brain MCP write — must not hit unregistered.
  let mintError: unknown;
  try {
    await held.acquire({ bindingId: "linkbrain-stage" });
  } catch (error) {
    mintError = error;
  }
  expect(String(mintError ?? "")).not.toMatch(/unregistered|not granted machine-token binding/);
}

describe("machine-token gateway boot rematerialize drain integration", () => {
  afterEach(() => {
    setPluginLoadActivationFailureInjectorForTest(null);
    setCombinedPluginRuntimeActivationFailureInjectorForTest(null);
    setGlobalHookRunnerInitFailureInjectorForTest(null);
    resetActiveCombinedPluginRuntimeSnapshotIdentityForTest();
    resetActivatingPluginLoadLockForTest();
    unregisterMachineTokenFacadesForPlugin("linkbrain");
    clearGlobals();
    clearPluginLoaderCache();
    resetPluginLoaderTestStateForTest();
    cleanupPluginLoaderFixturesForTest();
    delete process.env[BRAIN_KEY];
  });

  it("boots, rematerializes, process-restarts, and drains mint on the live facade", async () => {
    const stateDir = makeTempDir();
    const outboxPath = path.join(stateDir, "brain-outbox.jsonl");
    const env = sharedEnv(stateDir);

    const brain = writePlugin({
      id: "linkbrain",
      configSchema: MACHINE_TOKEN_SCHEMA,
      body: `module.exports = {
  id: "linkbrain",
  register(api) {
    globalThis.${FACADE_STORE_KEY} = globalThis.${FACADE_STORE_KEY} || {};
    globalThis.${FACADE_STORE_KEY}.linkbrain = api.machineTokenFacade;
    globalThis.${REGISTER_COUNT_KEY} = (globalThis.${REGISTER_COUNT_KEY} || 0) + 1;
    api.registerService({
      id: "linkbrain-outbox",
      start: async () => {
        globalThis.${SERVICE_FACADE_KEY} = api.machineTokenFacade;
      },
      stop: async () => { api.machineTokenFacade?.unregister(); },
    });
  },
};
`,
    });

    const config = {
      plugins: {
        enabled: true,
        load: { paths: [brain.dir] },
        entries: {
          linkbrain: {
            enabled: true,
            config: machineTokenEntryConfig({
              bindingId: "linkbrain-stage",
              clientId: "brain-stage",
              keyId: BRAIN_KEY,
            }),
          },
        },
      },
    };

    // 1) Full activating boot + service start (state open).
    const boot = loadOpenClawPlugins({ cache: true, config, env });
    const genBoot = getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId;
    expect(genBoot).toBeTruthy();
    let services = await startPluginServices({
      registry: boot,
      config: config as OpenClawConfig,
    });
    const held = (globalThis as Record<string, unknown>)[SERVICE_FACADE_KEY] as HeldFacade;
    expect(held).toBeTruthy();
    expect(held.health("linkbrain-stage").registered).toBe(true);

    // Capture buffer → durable outbox row (local; no MT required).
    await fs.writeFile(
      outboxPath,
      `${JSON.stringify({
        id: "brain:capture_batch:1785755688927:cap:stream_c3ab9fbcce56a7ba:1:1:3ef161e3",
        status: "pending",
      })}\n`,
      "utf8",
    );

    // 2) Repeated activating registrations (prewarm / validation / agent command).
    for (let i = 0; i < 3; i += 1) {
      const rematerialized = loadOpenClawPlugins({ cache: false, config, env });
      expect(rematerialized).not.toBe(boot);
      expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).toBe(genBoot);
      expect(held.health("linkbrain-stage").registered).toBe(true);
    }
    expect((globalThis as Record<string, number>)[REGISTER_COUNT_KEY]).toBeGreaterThanOrEqual(4);

    // 3) Drain mint must succeed on the service-held facade (not unregistered).
    await drainMintOnHeldFacade(held);

    // 4) Process-style shutdown then start with the same persistent state dir.
    await services.stop();
    unregisterMachineTokenFacadesForPlugin("linkbrain");
    clearPluginLoaderCache();
    resetActiveCombinedPluginRuntimeSnapshotIdentityForTest();
    clearGlobals();

    const restarted = loadOpenClawPlugins({ cache: true, config, env });
    const genRestart = getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId;
    expect(genRestart).toBeTruthy();
    services = await startPluginServices({
      registry: restarted,
      config: config as OpenClawConfig,
    });
    const heldAfterRestart = (globalThis as Record<string, unknown>)[
      SERVICE_FACADE_KEY
    ] as HeldFacade;
    expect(heldAfterRestart.health("linkbrain-stage").registered).toBe(true);
    await drainMintOnHeldFacade(heldAfterRestart);

    const outbox = await fs.readFile(outboxPath, "utf8");
    expect(outbox).toContain(
      "brain:capture_batch:1785755688927:cap:stream_c3ab9fbcce56a7ba:1:1:3ef161e3",
    );

    await services.stop();
    expect(countMachineTokenFacadeGenerations().candidate).toBe(0);
  });
});
