/**
 * Mirror of linkbrain machine-token facade stop/reload lifecycle proofs for
 * LinkSkills (same dual gateway_stop / service.stop unregister hazard).
 */
import { createTestPluginApi } from "openclaw/plugin-sdk/plugin-test-api";
import { afterEach, describe, expect, it, vi } from "vitest";
import { fingerprintMachineTokenKeyRef } from "../../src/agents/machine-token-fingerprint.js";
import {
  buildHostMachineTokenBindingFingerprint,
  createMachineTokenFacadeGeneration,
  destroyMachineTokenFacadeGeneration,
  getLiveMachineTokenFacadeGenerationHandle,
  publishMachineTokenFacadeGeneration,
  unregisterMachineTokenFacadesForPlugin,
  type HostMachineTokenBindingRecord,
  type MachineTokenKeyRefIdentity,
} from "../../src/agents/machine-token-host.js";
import linkskillsPlugin from "./index.js";
import type { OpenClawPluginApi, OpenClawPluginService } from "./runtime-api.js";
import { createMemoryKeyedStore } from "./src/test-support/memory-store.js";

const KEY_REF: MachineTokenKeyRefIdentity = {
  source: "env",
  provider: "default",
  id: "test-skills-lifecycle-assertion-pem",
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
    pluginId: "linkskills",
    domain: "linkskills",
  };
  return {
    ...base,
    bindingFingerprint: buildHostMachineTokenBindingFingerprint(base),
  };
}

function createLiveFacade(bindingId: string) {
  const generation = createMachineTokenFacadeGeneration({
    pluginId: "linkskills",
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
}) {
  let service: OpenClawPluginService | undefined;
  const hooks = new Map<string, HookHandler>();
  const api = createTestPluginApi({
    id: "linkskills",
    pluginConfig: {
      telemetryEnqueue: false,
      telemetryDrain: false,
      transportMode: "disabled",
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

  linkskillsPlugin.register(api as OpenClawPluginApi);
  expect(service).toBeDefined();
  await service!.start({} as never);
  return { service: service!, hooks };
}

describe("linkskills machine-token facade stop/reload lifecycle", () => {
  afterEach(() => {
    unregisterMachineTokenFacadesForPlugin("linkskills");
    vi.restoreAllMocks();
  });

  it("keeps the live facade registered through gateway_stop so service.stop can flush", async () => {
    const generation = createLiveFacade("linkskills-stage");
    const { service, hooks } = await registerStartedService({ facade: generation.facade });
    const gatewayStop = hooks.get("gateway_stop");
    expect(gatewayStop).toBeTypeOf("function");

    await gatewayStop!({ reason: "gateway stopping" }, {} as never);

    expect(generation.facade.health("linkskills-stage").registered).toBe(true);
    await expect(
      generation.facade.acquire({ bindingId: "linkskills-stage" }),
    ).resolves.toMatchObject({ accessToken: "test-access-token" });

    await service.stop({} as never);
    expect(generation.facade.health("linkskills-stage").registered).toBe(false);
    expect(getLiveMachineTokenFacadeGenerationHandle("linkskills")).toBeUndefined();
  });

  it("does not let a retired generation's service.stop unregister a newer live facade", async () => {
    const first = createLiveFacade("linkskills-stage");
    const { service: previousService } = await registerStartedService({ facade: first.facade });

    const second = createLiveFacade("linkskills-stage");
    expect(first.facade.health("linkskills-stage").registered).toBe(false);
    expect(second.facade.health("linkskills-stage").registered).toBe(true);

    await previousService.stop({} as never);

    expect(second.facade.health("linkskills-stage").registered).toBe(true);
    await expect(second.facade.acquire({ bindingId: "linkskills-stage" })).resolves.toMatchObject({
      accessToken: "test-access-token",
    });
    expect(getLiveMachineTokenFacadeGenerationHandle("linkskills")?.generationId).toBe(
      second.handle.generationId,
    );

    destroyMachineTokenFacadeGeneration(second.handle);
  });
});
