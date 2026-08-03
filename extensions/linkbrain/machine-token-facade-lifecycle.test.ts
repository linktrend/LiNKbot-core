/**
 * Production defect regression: gateway_stop must not unregister the machine-token
 * facade before service.stop finishes its final flush. Early unregister causes
 * machine_token_error deadletters ("facade … is unregistered; reload must create
 * a new facade") on restart flush paths.
 */
import { createTestPluginApi } from "openclaw/plugin-sdk/plugin-test-api";
import { afterEach, describe, expect, it, vi } from "vitest";
import { fingerprintMachineTokenKeyRef } from "../../src/agents/machine-token-fingerprint.js";
import {
  acquireMachineTokenFacadeLeaseForPlugin,
  buildHostMachineTokenBindingFingerprint,
  createMachineTokenFacadeGeneration,
  destroyMachineTokenFacadeGeneration,
  getLiveMachineTokenFacadeGenerationHandle,
  publishMachineTokenFacadeGeneration,
  unregisterMachineTokenFacadesForPlugin,
  type HostMachineTokenBindingRecord,
  type MachineTokenKeyRefIdentity,
} from "../../src/agents/machine-token-host.js";
import linkbrainPlugin from "./index.js";
import type { OpenClawPluginApi, OpenClawPluginService } from "./runtime-api.js";
import { createMemoryKeyedStore } from "./src/test-support/memory-store.js";

const KEY_REF: MachineTokenKeyRefIdentity = {
  source: "env",
  provider: "default",
  id: "test-brain-lifecycle-assertion-pem",
};

function grantedRecord(bindingId: string): HostMachineTokenBindingRecord {
  const keyRef = { ...KEY_REF };
  const keyRefFingerprint = fingerprintMachineTokenKeyRef(keyRef);
  const base = {
    bindingId,
    issuerUrl: "https://issuer.example.test",
    clientId: `${bindingId}-client`,
    keyRef,
    keyRefFingerprint,
    pluginId: "linkbrain",
    domain: "linkbrain",
  };
  return {
    ...base,
    bindingFingerprint: buildHostMachineTokenBindingFingerprint(base),
  };
}

function createLiveFacade(bindingId: string) {
  const generation = createMachineTokenFacadeGeneration({
    pluginId: "linkbrain",
    grantedRecords: [grantedRecord(bindingId)],
    resolveKeyPem: async () => "test-pem",
    resolveAccess: async ({ binding }) => ({
      bindingId: binding.bindingId,
      bindingFingerprint: `fp-${binding.bindingId}`,
      accessToken: "test-access-token",
      expiresAt: Date.now() + 60_000,
      tokenType: "Bearer" as const,
    }),
  });
  publishMachineTokenFacadeGeneration(generation.handle);
  return generation;
}

type HookHandler = (event?: unknown, ctx?: unknown) => void | Promise<void>;

async function registerStartedService(params: {
  facade: ReturnType<typeof createLiveFacade>["facade"];
  pluginConfig?: Record<string, unknown>;
}) {
  let service: OpenClawPluginService | undefined;
  const hooks = new Map<string, HookHandler>();
  const api = createTestPluginApi({
    id: "linkbrain",
    pluginConfig: {
      captureEnqueue: false,
      captureDrain: false,
      coordinationWrites: false,
      transportMode: "disabled",
      ...params.pluginConfig,
    },
    machineTokenFacade: params.facade,
    runtime: {
      state: {
        openKeyedStore: (options: {
          namespace: string;
          maxEntries: number;
          overflowPolicy: "reject-new";
        }) =>
          createMemoryKeyedStore({
            maxEntries: options.maxEntries,
            overflowPolicy: options.overflowPolicy,
          }),
        withLease: async (_options, run) => {
          const controller = new AbortController();
          return await run({
            signal: controller.signal,
            assertOwned: () => undefined,
          });
        },
      },
    } as OpenClawPluginApi["runtime"],
    registerService: (next) => {
      service = next;
    },
    on: (name, handler) => {
      hooks.set(String(name), handler as HookHandler);
    },
  });

  linkbrainPlugin.register(api as OpenClawPluginApi);
  expect(service).toBeDefined();
  await service!.start({} as never);
  return { service: service!, hooks, api };
}

describe("linkbrain machine-token facade stop/reload lifecycle", () => {
  afterEach(() => {
    unregisterMachineTokenFacadesForPlugin("linkbrain");
    vi.restoreAllMocks();
  });

  it("keeps the live facade registered through gateway_stop so service.stop can flush", async () => {
    const generation = createLiveFacade("linkbrain-stage");
    const { service, hooks } = await registerStartedService({ facade: generation.facade });
    const gatewayStop = hooks.get("gateway_stop");
    expect(gatewayStop).toBeTypeOf("function");

    await gatewayStop!({ reason: "gateway stopping" }, {} as never);

    expect(generation.facade.health("linkbrain-stage").registered).toBe(true);
    await expect(
      generation.facade.acquire({ bindingId: "linkbrain-stage" }),
    ).resolves.toMatchObject({ accessToken: "test-access-token" });

    await service.stop({} as never);
    expect(generation.facade.health("linkbrain-stage").registered).toBe(false);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeUndefined();
  });

  it("does not let a retired generation's service.stop unregister a newer live facade", async () => {
    const first = createLiveFacade("linkbrain-stage");
    const { service: previousService } = await registerStartedService({ facade: first.facade });

    const second = createLiveFacade("linkbrain-stage");
    expect(first.facade.health("linkbrain-stage").registered).toBe(false);
    expect(second.facade.health("linkbrain-stage").registered).toBe(true);

    // Reload path: previous services stop after the new generation is published.
    await previousService.stop({} as never);

    expect(second.facade.health("linkbrain-stage").registered).toBe(true);
    await expect(second.facade.acquire({ bindingId: "linkbrain-stage" })).resolves.toMatchObject({
      accessToken: "test-access-token",
    });
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).toBe(
      second.handle.generationId,
    );

    destroyMachineTokenFacadeGeneration(second.handle);
  });

  it("repeated restart: gateway_stop then service.stop unregisters only once at the end", async () => {
    const unregisterSpy = vi.fn();
    for (let round = 0; round < 2; round += 1) {
      const generation = createLiveFacade("linkbrain-stage");
      const facade = {
        ...generation.facade,
        unregister: () => {
          unregisterSpy();
          generation.facade.unregister();
        },
      };
      const { service, hooks } = await registerStartedService({ facade });
      await hooks.get("gateway_stop")!({ reason: "restart" }, {} as never);
      expect(facade.health("linkbrain-stage").registered).toBe(true);
      await service.stop({} as never);
      expect(facade.health("linkbrain-stage").registered).toBe(false);
    }
    expect(unregisterSpy).toHaveBeenCalledTimes(2);
  });

  it("host lease keeps the shared live facade across duplicate service.stop then restart", async () => {
    const generation = createLiveFacade("linkbrain-stage");
    const releaseLease = acquireMachineTokenFacadeLeaseForPlugin("linkbrain");
    const { service: first } = await registerStartedService({ facade: generation.facade });

    await first.stop({} as never);
    expect(generation.facade.health("linkbrain-stage").registered).toBe(true);
    await expect(
      generation.facade.acquire({ bindingId: "linkbrain-stage" }),
    ).resolves.toMatchObject({ accessToken: "test-access-token" });
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")?.generationId).toBe(
      generation.handle.generationId,
    );

    const { service: second } = await registerStartedService({ facade: generation.facade });
    await expect(
      generation.facade.acquire({ bindingId: "linkbrain-stage" }),
    ).resolves.toMatchObject({ accessToken: "test-access-token" });

    releaseLease();
    await second.stop({} as never);
    // No host lease remains — plugin unregister is authoritative.
    expect(generation.facade.health("linkbrain-stage").registered).toBe(false);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkbrain")).toBeUndefined();
  });
});
