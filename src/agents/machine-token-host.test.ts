// Host-owned machine-token facade: construction, grants, isolation, global clear.
import { describe, expect, it, vi } from "vitest";
import {
  clearMachineTokenCacheForHost,
  collectGrantedMachineTokenBindingIds,
  createMachineTokenPluginFacade,
  invalidateMachineTokenCacheForHost,
  resolveMachineTokenAccessForHost,
  unregisterMachineTokenFacadesForPlugin,
  type MachineTokenBinding,
} from "./machine-token-host.js";

function sampleBinding(bindingId: string): MachineTokenBinding {
  return {
    bindingId,
    issuerUrl: "https://issuer.example.test",
    clientId: `${bindingId}-client`,
    clientAssertionKeyPem: `PEM-${bindingId}`,
  };
}

describe("agents machine-token-host", () => {
  it("exposes privileged construction and host cache controls", () => {
    expect(createMachineTokenPluginFacade).toBeTypeOf("function");
    expect(resolveMachineTokenAccessForHost).toBeTypeOf("function");
    expect(invalidateMachineTokenCacheForHost).toBeTypeOf("function");
    expect(clearMachineTokenCacheForHost).toBeTypeOf("function");
  });

  it("acquires only granted bindings and rejects foreign domains", async () => {
    const resolveAccess = vi.fn(async ({ binding }) => ({
      bindingId: binding.bindingId,
      bindingFingerprint: `fp-${binding.bindingId}`,
      accessToken: `token-${binding.bindingId}`,
      expiresAt: Date.now() + 60_000,
      tokenType: "Bearer" as const,
    }));
    const facade = createMachineTokenPluginFacade({
      pluginId: "linkbrain",
      grantedBindingIds: ["linkbrain-stage"],
      resolveAccess,
    });

    const acquired = await facade.acquire({ binding: sampleBinding("linkbrain-stage") });
    expect(acquired.accessToken).toBe("token-linkbrain-stage");
    expect(resolveAccess).toHaveBeenCalledOnce();

    await expect(facade.acquire({ binding: sampleBinding("linkskills-stage") })).rejects.toThrow(
      /not granted machine-token binding "linkskills-stage"/,
    );
    expect(() => facade.invalidate("linkskills-stage")).toThrow(
      /not granted machine-token binding "linkskills-stage"/,
    );
  });

  it("isolates invalidate and health across independent plugin facades", async () => {
    const invalidated: string[] = [];
    const cache = new Map<string, { expiresAt: number }>();
    const resolveAccess = vi.fn(async ({ binding }) => {
      const fingerprint = `fp-${binding.bindingId}`;
      const resolved = {
        bindingId: binding.bindingId,
        bindingFingerprint: fingerprint,
        accessToken: `token-${binding.bindingId}`,
        expiresAt: Date.now() + 60_000,
        tokenType: "Bearer" as const,
      };
      cache.set(fingerprint, { expiresAt: resolved.expiresAt });
      return resolved;
    });
    const brain = createMachineTokenPluginFacade({
      pluginId: "linkbrain",
      grantedBindingIds: ["linkbrain-stage"],
      resolveAccess,
      invalidateCache: (fingerprint) => {
        invalidated.push(fingerprint);
        cache.delete(fingerprint);
      },
      getCached: (fingerprint) => {
        const entry = cache.get(fingerprint);
        return entry
          ? {
              bindingId: "linkbrain-stage",
              bindingFingerprint: fingerprint,
              accessToken: "redacted-should-not-surface",
              expiresAt: entry.expiresAt,
              tokenType: "Bearer",
              issuedAt: Date.now(),
            }
          : undefined;
      },
    });
    const skills = createMachineTokenPluginFacade({
      pluginId: "linkskills",
      grantedBindingIds: ["linkskills-stage"],
      resolveAccess,
      invalidateCache: (fingerprint) => {
        invalidated.push(fingerprint);
        cache.delete(fingerprint);
      },
      getCached: (fingerprint) => {
        const entry = cache.get(fingerprint);
        return entry
          ? {
              bindingId: "linkskills-stage",
              bindingFingerprint: fingerprint,
              accessToken: "redacted-should-not-surface",
              expiresAt: entry.expiresAt,
              tokenType: "Bearer",
              issuedAt: Date.now(),
            }
          : undefined;
      },
    });

    await brain.acquire({ binding: sampleBinding("linkbrain-stage") });
    await skills.acquire({ binding: sampleBinding("linkskills-stage") });

    brain.invalidate("linkbrain-stage");
    expect(invalidated).toEqual(["fp-linkbrain-stage"]);
    expect(brain.health("linkbrain-stage")).toMatchObject({
      pluginId: "linkbrain",
      granted: true,
      registered: true,
      cached: false,
    });
    expect(skills.health("linkskills-stage")).toMatchObject({
      pluginId: "linkskills",
      granted: true,
      cached: true,
    });
    expect(JSON.stringify(brain.health("linkbrain-stage"))).not.toContain(
      "redacted-should-not-surface",
    );
    expect(brain.health("linkskills-stage").granted).toBe(false);
  });

  it("unregister invalidates granted bindings and fail-closes later use", async () => {
    const invalidated: string[] = [];
    const resolveAccess = vi.fn(async ({ binding }) => ({
      bindingId: binding.bindingId,
      bindingFingerprint: `fp-${binding.bindingId}`,
      accessToken: "token",
      expiresAt: Date.now() + 60_000,
      tokenType: "Bearer" as const,
    }));
    const facade = createMachineTokenPluginFacade({
      pluginId: "linkbrain",
      grantedBindingIds: ["linkbrain-stage"],
      resolveAccess,
      invalidateCache: (fingerprint) => {
        invalidated.push(fingerprint);
      },
    });

    await facade.acquire({ binding: sampleBinding("linkbrain-stage") });
    facade.unregister();
    expect(invalidated).toEqual(["fp-linkbrain-stage"]);
    expect(facade.health("linkbrain-stage").registered).toBe(false);
    await expect(facade.acquire({ binding: sampleBinding("linkbrain-stage") })).rejects.toThrow(
      /unregistered/,
    );
    expect(() => facade.invalidate("linkbrain-stage")).toThrow(/unregistered/);
  });

  it("rejects empty pluginId or empty grants at construction", () => {
    expect(() =>
      createMachineTokenPluginFacade({ pluginId: " ", grantedBindingIds: ["a"] }),
    ).toThrow(/non-empty pluginId/);
    expect(() =>
      createMachineTokenPluginFacade({ pluginId: "linkbrain", grantedBindingIds: [" ", ""] }),
    ).toThrow(/at least one grantedBindingId/);
  });

  it("ignores smuggled fetchFn/now on public facade acquire", async () => {
    const resolveAccess = vi.fn(async ({ binding }) => ({
      bindingId: binding.bindingId,
      bindingFingerprint: `fp-${binding.bindingId}`,
      accessToken: "token",
      expiresAt: Date.now() + 60_000,
      tokenType: "Bearer" as const,
    }));
    const facade = createMachineTokenPluginFacade({
      pluginId: "linkbrain",
      grantedBindingIds: ["linkbrain-stage"],
      resolveAccess,
    });
    const fetchFn = vi.fn(async () => new Response("bypass"));
    const now = vi.fn(() => 1_700_000_000_000);

    await facade.acquire({
      binding: sampleBinding("linkbrain-stage"),
      // Runtime smuggle: public types omit these keys; host must still drop them.
      fetchFn,
      now,
    } as Parameters<typeof facade.acquire>[0] & {
      fetchFn: typeof fetchFn;
      now: typeof now;
    });

    expect(resolveAccess).toHaveBeenCalledOnce();
    const forwarded = resolveAccess.mock.calls[0]?.[0] as Record<string, unknown>;
    expect(forwarded).toEqual({ binding: sampleBinding("linkbrain-stage") });
    expect(forwarded).not.toHaveProperty("fetchFn");
    expect(forwarded).not.toHaveProperty("now");
    expect(fetchFn).not.toHaveBeenCalled();
    expect(now).not.toHaveBeenCalled();
  });

  it("forwards only binding, signal, and forceRefresh from acquire", async () => {
    const resolveAccess = vi.fn(async ({ binding }) => ({
      bindingId: binding.bindingId,
      bindingFingerprint: `fp-${binding.bindingId}`,
      accessToken: "token",
      expiresAt: Date.now() + 60_000,
      tokenType: "Bearer" as const,
    }));
    const facade = createMachineTokenPluginFacade({
      pluginId: "linkbrain",
      grantedBindingIds: ["linkbrain-stage"],
      resolveAccess,
    });
    const signal = new AbortController().signal;

    await facade.acquire({
      binding: sampleBinding("linkbrain-stage"),
      signal,
      forceRefresh: true,
    });

    expect(resolveAccess).toHaveBeenCalledWith({
      binding: sampleBinding("linkbrain-stage"),
      signal,
      forceRefresh: true,
    });
  });

  it("unregisterMachineTokenFacadesForPlugin tears down all facades without global clear", async () => {
    const invalidated: string[] = [];
    const resolveAccess = vi.fn(async ({ binding }) => ({
      bindingId: binding.bindingId,
      bindingFingerprint: `fp-${binding.bindingId}`,
      accessToken: "token",
      expiresAt: Date.now() + 60_000,
      tokenType: "Bearer" as const,
    }));
    const brainA = createMachineTokenPluginFacade({
      pluginId: "linkbrain",
      grantedBindingIds: ["linkbrain-stage"],
      resolveAccess,
      invalidateCache: (fingerprint) => {
        invalidated.push(fingerprint);
      },
    });
    const brainB = createMachineTokenPluginFacade({
      pluginId: "linkbrain",
      grantedBindingIds: ["linkbrain-other"],
      resolveAccess,
      invalidateCache: (fingerprint) => {
        invalidated.push(fingerprint);
      },
    });
    const skills = createMachineTokenPluginFacade({
      pluginId: "linkskills",
      grantedBindingIds: ["linkskills-stage"],
      resolveAccess,
      invalidateCache: (fingerprint) => {
        invalidated.push(`skills:${fingerprint}`);
      },
    });

    await brainA.acquire({ binding: sampleBinding("linkbrain-stage") });
    await brainB.acquire({ binding: sampleBinding("linkbrain-other") });
    await skills.acquire({ binding: sampleBinding("linkskills-stage") });

    unregisterMachineTokenFacadesForPlugin("linkbrain");
    expect(invalidated).toEqual(["fp-linkbrain-stage", "fp-linkbrain-other"]);
    expect(brainA.health("linkbrain-stage").registered).toBe(false);
    expect(brainB.health("linkbrain-other").registered).toBe(false);
    expect(skills.health("linkskills-stage")).toMatchObject({
      registered: true,
      granted: true,
    });
    await expect(skills.acquire({ binding: sampleBinding("linkskills-stage") })).resolves.toMatchObject({
      accessToken: "token",
    });
    await expect(brainA.acquire({ binding: sampleBinding("linkbrain-stage") })).rejects.toThrow(
      /unregistered/,
    );
  });

  it("collectGrantedMachineTokenBindingIds reads plugin and managed MCP bindings", () => {
    expect(
      collectGrantedMachineTokenBindingIds({
        pluginId: "linkbrain",
        pluginConfig: {
          machineToken: { bindingId: "linkbrain-stage" },
          mcpServerName: "linkbrain",
        },
        mcpServers: {
          linkbrain: {
            auth: "machine_token",
            machineToken: { bindingId: "linkbrain-mcp" },
          },
          foreign: {
            auth: "machine_token",
            machineToken: { bindingId: "foreign-must-not-grant" },
          },
        },
      }),
    ).toEqual(expect.arrayContaining(["linkbrain-stage", "linkbrain-mcp"]));
    expect(
      collectGrantedMachineTokenBindingIds({
        pluginId: "linkbrain",
        pluginConfig: {
          machineToken: { bindingId: "linkbrain-stage" },
          mcpServerName: "linkbrain",
        },
        mcpServers: {
          linkbrain: {
            auth: "machine_token",
            machineToken: { bindingId: "linkbrain-mcp" },
          },
          foreign: {
            auth: "machine_token",
            machineToken: { bindingId: "foreign-must-not-grant" },
          },
        },
      }),
    ).not.toContain("foreign-must-not-grant");
  });
});
