/**
 * Production-path machine-token facade generation replacement via registry
 * createApi + commit/rollback (low-level surrogate). Wave 6 also requires
 * real loadOpenClawPlugins transaction coverage in
 * loader.machine-token-generation.test.ts — do not treat this file alone as
 * loader-lifecycle proof.
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  getLiveMachineTokenFacadeGenerationHandle,
  unregisterMachineTokenFacadesForPlugin,
} from "../agents/machine-token-host.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { createPluginRegistry } from "./registry.js";
import type { PluginRuntime } from "./runtime/types.js";
import { createPluginRecord } from "./status.test-fixtures.js";

const BRAIN_KEY = "LINKTREND_TEST_BRAIN_ASSERTION_PEM";
const SKILLS_KEY = "LINKTREND_TEST_SKILLS_ASSERTION_PEM";

function machineTokenConfig(params: {
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

function createActivatingRegistry() {
  return createPluginRegistry({
    logger: {
      info() {},
      warn() {},
      error() {},
      debug() {},
    },
    runtime: {} as PluginRuntime,
    activateGlobalSideEffects: true,
  });
}

function createRecord(id: string) {
  return createPluginRecord({
    id,
    source: `/plugins/${id}/index.ts`,
    enabled: true,
    status: "loaded",
  });
}

describe("plugin API machine-token generation replacement", () => {
  afterEach(() => {
    unregisterMachineTokenFacadesForPlugin("linkbrain");
    unregisterMachineTokenFacadesForPlugin("linkskills");
    delete process.env[BRAIN_KEY];
    delete process.env[SKILLS_KEY];
    vi.restoreAllMocks();
  });

  it("keeps candidates unpublished until commit, then publishes live", async () => {
    const registry = createActivatingRegistry();
    const record = createRecord("linkbrain");
    const api = registry.createApi(record, {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkbrain-stage",
        clientId: "brain-v1",
        keyId: BRAIN_KEY,
      }),
    });

    expect(api.machineTokenFacade).toBeDefined();
    expect(api.machineTokenFacade!.health("linkbrain-stage").registered).toBe(false);
    await expect(
      api.machineTokenFacade!.acquire({ bindingId: "linkbrain-stage" }),
    ).rejects.toThrow(/unregistered/);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeUndefined();

    registry.commitPluginGlobalSideEffects("linkbrain", { activate: true });
    expect(api.machineTokenFacade!.health("linkbrain-stage").registered).toBe(true);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toMatchObject({
      pluginId: "linkbrain",
    });
  });

  it("rolls back a failed candidate without removing the prior live generation", async () => {
    const registry = createActivatingRegistry();
    const liveRecord = createRecord("linkbrain");
    const liveApi = registry.createApi(liveRecord, {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkbrain-stage",
        clientId: "brain-live",
        keyId: BRAIN_KEY,
      }),
    });
    registry.commitPluginGlobalSideEffects("linkbrain", { activate: true });
    const liveHandle = getLiveMachineTokenFacadeGenerationHandle("linkbrain");
    expect(liveApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(true);

    // Simulate a replacement registration attempt that fails after createApi.
    const candidateRegistry = createActivatingRegistry();
    const candidateRecord = createRecord("linkbrain");
    const candidateApi = candidateRegistry.createApi(candidateRecord, {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkbrain-stage",
        clientId: "brain-candidate",
        keyId: BRAIN_KEY,
      }),
    });
    expect(candidateApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(false);
    expect(liveApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(true);

    candidateRegistry.rollbackPluginGlobalSideEffects("linkbrain");

    expect(candidateApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(false);
    expect(liveApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(true);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).toBe(
      liveHandle?.generationId,
    );
    await expect(
      candidateApi.machineTokenFacade!.acquire({ bindingId: "linkbrain-stage" }),
    ).rejects.toThrow(/unregistered/);
  });

  it("cancels a candidate during replacement and leaves prior live usable", async () => {
    const liveRegistry = createActivatingRegistry();
    const liveApi = liveRegistry.createApi(createRecord("linkbrain"), {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkbrain-stage",
        clientId: "brain-live",
        keyId: BRAIN_KEY,
      }),
    });
    liveRegistry.commitPluginGlobalSideEffects("linkbrain", { activate: true });

    const pendingRegistry = createActivatingRegistry();
    const pendingApi = pendingRegistry.createApi(createRecord("linkbrain"), {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkbrain-stage",
        clientId: "brain-pending",
        keyId: BRAIN_KEY,
      }),
    });
    // Cancellation = abandon without publish (non-activating finalize).
    pendingRegistry.commitPluginGlobalSideEffects("linkbrain", { activate: false });

    expect(pendingApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(false);
    expect(liveApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(true);
  });

  it("atomically publishes a replacement and retires only the prior generation", async () => {
    const firstRegistry = createActivatingRegistry();
    const firstApi = firstRegistry.createApi(createRecord("linkbrain"), {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkbrain-stage",
        clientId: "brain-v1",
        keyId: BRAIN_KEY,
      }),
    });
    firstRegistry.commitPluginGlobalSideEffects("linkbrain", { activate: true });
    const firstHandle = getLiveMachineTokenFacadeGenerationHandle("linkbrain");
    expect(firstApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(true);

    const secondRegistry = createActivatingRegistry();
    const secondApi = secondRegistry.createApi(createRecord("linkbrain"), {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkbrain-stage",
        clientId: "brain-v2",
        keyId: BRAIN_KEY,
      }),
    });
    // Both must not be live before commit.
    expect(secondApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(false);
    expect(firstApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(true);

    secondRegistry.commitPluginGlobalSideEffects("linkbrain", { activate: true });

    expect(firstApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(false);
    expect(secondApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(true);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).not.toBe(
      firstHandle?.generationId,
    );
    await expect(
      firstApi.machineTokenFacade!.acquire({ bindingId: "linkbrain-stage" }),
    ).rejects.toThrow(/unregistered/);
  });

  it("ignores stale cleanup from an old generation after a newer commit", async () => {
    const firstRegistry = createActivatingRegistry();
    firstRegistry.createApi(createRecord("linkbrain"), {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkbrain-stage",
        clientId: "brain-v1",
        keyId: BRAIN_KEY,
      }),
    });
    firstRegistry.commitPluginGlobalSideEffects("linkbrain", { activate: true });

    const secondRegistry = createActivatingRegistry();
    const secondApi = secondRegistry.createApi(createRecord("linkbrain"), {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkbrain-stage",
        clientId: "brain-v2",
        keyId: BRAIN_KEY,
      }),
    });
    secondRegistry.commitPluginGlobalSideEffects("linkbrain", { activate: true });
    const liveHandle = getLiveMachineTokenFacadeGenerationHandle("linkbrain");

    // Late cleanup from the retired first registration must not remove v2.
    firstRegistry.rollbackPluginGlobalSideEffects("linkbrain");

    expect(secondApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(true);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).toBe(
      liveHandle?.generationId,
    );
  });

  it("stop/deactivate tears down the live generation for that plugin only", async () => {
    const brainRegistry = createActivatingRegistry();
    const brainApi = brainRegistry.createApi(createRecord("linkbrain"), {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkbrain-stage",
        clientId: "brain",
        keyId: BRAIN_KEY,
      }),
    });
    brainRegistry.commitPluginGlobalSideEffects("linkbrain", { activate: true });

    const skillsRegistry = createActivatingRegistry();
    const skillsApi = skillsRegistry.createApi(createRecord("linkskills"), {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkskills-stage",
        clientId: "skills",
        keyId: SKILLS_KEY,
      }),
    });
    skillsRegistry.commitPluginGlobalSideEffects("linkskills", { activate: true });

    brainRegistry.rollbackPluginGlobalSideEffects("linkbrain");

    expect(brainApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(false);
    expect(skillsApi.machineTokenFacade!.health("linkskills-stage").registered).toBe(true);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkskills")).toBeDefined();
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeUndefined();
  });

  it("leaves an unaffected second plugin domain live across brain replacement", async () => {
    const skillsRegistry = createActivatingRegistry();
    const skillsApi = skillsRegistry.createApi(createRecord("linkskills"), {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkskills-stage",
        clientId: "skills",
        keyId: SKILLS_KEY,
      }),
    });
    skillsRegistry.commitPluginGlobalSideEffects("linkskills", { activate: true });

    const brainV1 = createActivatingRegistry();
    brainV1.createApi(createRecord("linkbrain"), {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkbrain-stage",
        clientId: "brain-v1",
        keyId: BRAIN_KEY,
      }),
    });
    brainV1.commitPluginGlobalSideEffects("linkbrain", { activate: true });

    const brainV2 = createActivatingRegistry();
    const brainApiV2 = brainV2.createApi(createRecord("linkbrain"), {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkbrain-stage",
        clientId: "brain-v2",
        keyId: BRAIN_KEY,
      }),
    });
    brainV2.commitPluginGlobalSideEffects("linkbrain", { activate: true });

    expect(brainApiV2.machineTokenFacade!.health("linkbrain-stage").registered).toBe(true);
    expect(skillsApi.machineTokenFacade!.health("linkskills-stage").registered).toBe(true);
  });

  it("keeps the old facade valid after a failed swap and invalid after a successful swap", async () => {
    const liveRegistry = createActivatingRegistry();
    const liveApi = liveRegistry.createApi(createRecord("linkbrain"), {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkbrain-stage",
        clientId: "brain-live",
        keyId: BRAIN_KEY,
      }),
    });
    liveRegistry.commitPluginGlobalSideEffects("linkbrain", { activate: true });

    const failedRegistry = createActivatingRegistry();
    failedRegistry.createApi(createRecord("linkbrain"), {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkbrain-stage",
        clientId: "brain-fail",
        keyId: BRAIN_KEY,
      }),
    });
    failedRegistry.rollbackPluginGlobalSideEffects("linkbrain");
    expect(liveApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(true);

    const successRegistry = createActivatingRegistry();
    const successApi = successRegistry.createApi(createRecord("linkbrain"), {
      config: {} as OpenClawConfig,
      pluginConfig: machineTokenConfig({
        bindingId: "linkbrain-stage",
        clientId: "brain-success",
        keyId: BRAIN_KEY,
      }),
    });
    successRegistry.commitPluginGlobalSideEffects("linkbrain", { activate: true });

    expect(liveApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(false);
    expect(successApi.machineTokenFacade!.health("linkbrain-stage").registered).toBe(true);
  });
});
