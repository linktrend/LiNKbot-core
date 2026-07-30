import { describe, expect, it, vi } from "vitest";
import {
  assertMachineTokenNetworkUrl,
  describeMachineTokenHttpFailure,
  machineTokenNetworkFetch,
  machineTokenNetworkFetchJson,
} from "./machine-token-network.js";

describe("machine-token-network", () => {
  it("documents injected fetchFn as a test seam that bypasses SSRF guard", async () => {
    const fetchFn = vi.fn(
      async () =>
        new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "content-type": "application/json" },
        }),
    );
    const result = await machineTokenNetworkFetchJson({
      url: "https://paci.test/.well-known/oauth-authorization-server",
      fetchFn,
      label: "discovery",
    });
    expect(result.ok).toBe(true);
    expect(result.json).toEqual({ ok: true });
    expect(fetchFn).toHaveBeenCalledTimes(1);
  });

  it("rejects HTTP non-loopback and production loopback targets", () => {
    expect(() =>
      assertMachineTokenNetworkUrl({
        url: "http://example.com/oauth/token",
        label: "token",
      }),
    ).toThrow(/HTTPS/u);
    expect(() =>
      assertMachineTokenNetworkUrl({
        url: "https://127.0.0.1/oauth/token",
        label: "token",
      }),
    ).toThrow(/loopback/u);
  });

  it("maps 429 and 5xx without embedding response bodies", () => {
    expect(describeMachineTokenHttpFailure(429, "token request")).toMatch(/429/u);
    expect(describeMachineTokenHttpFailure(503, "discovery")).toMatch(/503/u);
    expect(describeMachineTokenHttpFailure(401, "token request")).toMatch(/401/u);
  });

  it("rejects unsupported JSON content types through the fetchFn seam", async () => {
    await expect(
      machineTokenNetworkFetchJson({
        url: "https://paci.test/oauth/token",
        fetchFn: async () =>
          new Response("not-json", {
            status: 200,
            headers: { "content-type": "text/plain" },
          }),
        label: "token",
      }),
    ).rejects.toThrow(/content-type must be application\/json/u);
  });

  it("always exposes a release function for late-settlement safety", async () => {
    const { response, release } = await machineTokenNetworkFetch({
      url: "https://paci.test/oauth/token",
      fetchFn: async () => new Response("{}", { headers: { "content-type": "application/json" } }),
      label: "token",
    });
    expect(response.ok).toBe(true);
    await expect(release()).resolves.toBeUndefined();
    await expect(release()).resolves.toBeUndefined();
  });
});
