/**
 * Host injects MachineTokenPluginFacade onto OpenClawPluginApi when grants exist.
 */
import { describe, expect, it, vi } from "vitest";
import {
  collectGrantedMachineTokenBindingIds,
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
  it("exposes host-constructed facade on the plugin API shape", async () => {
    const resolveAccess = vi.fn(async ({ binding }) => ({
      bindingId: binding.bindingId,
      bindingFingerprint: `fp-${binding.bindingId}`,
      accessToken: "host-token",
      expiresAt: Date.now() + 60_000,
      tokenType: "Bearer" as const,
    }));
    const grantedBindingIds = collectGrantedMachineTokenBindingIds({
      pluginId: "linkbrain",
      pluginConfig: {
        machineToken: { bindingId: "linkbrain-stage" },
      },
    });
    const facade = createMachineTokenPluginFacade({
      pluginId: "linkbrain",
      grantedBindingIds,
      resolveAccess,
    });
    const api = minimalApi({
      id: "linkbrain",
      pluginConfig: { machineToken: { bindingId: "linkbrain-stage" } },
      machineTokenFacade: facade,
    });

    expect(api.machineTokenFacade).toBe(facade);
    const acquired = await api.machineTokenFacade!.acquire({
      binding: {
        bindingId: "linkbrain-stage",
        issuerUrl: "https://issuer.example.test",
        clientId: "brain-client",
        clientAssertionKeyPem: "PEM",
      },
    });
    expect(acquired.accessToken).toBe("host-token");
    expect(resolveAccess).toHaveBeenCalledOnce();

    unregisterMachineTokenFacadesForPlugin("linkbrain");
    expect(api.machineTokenFacade!.health("linkbrain-stage").registered).toBe(false);
  });

  it("leaves machineTokenFacade undefined when no grants exist", () => {
    const api = minimalApi({ id: "linkbrain", pluginConfig: {} });
    expect(api.machineTokenFacade).toBeUndefined();
  });
});
