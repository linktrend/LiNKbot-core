/**
 * Host injects MachineTokenPluginFacade onto OpenClawPluginApi when grants exist.
 */
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  collectGrantedMachineTokenBindingRecords,
  createMachineTokenPluginFacade,
  unregisterMachineTokenFacadesForPlugin,
} from "../agents/machine-token-host.js";
import { buildPluginApi } from "./api-builder.js";
import type { OpenClawPluginApi } from "./types.js";

function minimalApi(params: {
  id: string;
  pluginConfig?: Record<string, unknown>;
  machineTokenFacade?: OpenClawPluginApi["machineTokenFacade"];
}): OpenClawPluginApi {
  return buildPluginApi({
    id: params.id,
    name: params.id,
    source: "test",
    registrationMode: "full",
    config: {},
    pluginConfig: params.pluginConfig,
    ...(params.machineTokenFacade ? { machineTokenFacade: params.machineTokenFacade } : {}),
    runtime: {} as OpenClawPluginApi["runtime"],
    logger: { info() {}, warn() {}, error() {}, debug() {} },
    resolvePath: (input) => input,
  });
}

describe("plugin API machineTokenFacade injection", () => {
  afterEach(() => {
    unregisterMachineTokenFacadesForPlugin("linkbrain");
  });

  it("exposes host-constructed facade on the plugin API shape", async () => {
    const resolveAccess = vi.fn(async ({ binding }) => ({
      bindingId: binding.bindingId,
      bindingFingerprint: `fp-${binding.bindingId}`,
      accessToken: "host-token",
      expiresAt: Date.now() + 60_000,
      tokenType: "Bearer" as const,
    }));
    const pluginConfig = {
      machineToken: {
        bindingId: "linkbrain-stage",
        issuerUrl: "https://issuer.example.test",
        clientId: "brain-client",
        clientAssertionKeyRef: {
          source: "env",
          provider: "default",
          id: "BRAIN_KEY",
        },
      },
    };
    const grantedRecords = collectGrantedMachineTokenBindingRecords({
      pluginId: "linkbrain",
      pluginConfig,
    });
    const facade = createMachineTokenPluginFacade({
      pluginId: "linkbrain",
      grantedRecords,
      resolveKeyPem: async () => "PEM",
      resolveAccess,
    });
    const api = minimalApi({
      id: "linkbrain",
      pluginConfig,
      machineTokenFacade: facade,
    });

    expect(api.machineTokenFacade).toBe(facade);
    const acquired = await api.machineTokenFacade!.acquire({
      bindingId: "linkbrain-stage",
    });
    expect(acquired.accessToken).toBe("host-token");
    expect(resolveAccess).toHaveBeenCalledOnce();
    expect(resolveAccess.mock.calls[0]?.[0].binding.clientAssertionKeyPem).toBe("PEM");

    unregisterMachineTokenFacadesForPlugin("linkbrain");
    expect(api.machineTokenFacade!.health("linkbrain-stage").registered).toBe(false);
  });

  it("leaves machineTokenFacade undefined when no grants exist", () => {
    const api = minimalApi({ id: "linkbrain", pluginConfig: {} });
    expect(api.machineTokenFacade).toBeUndefined();
  });
});
