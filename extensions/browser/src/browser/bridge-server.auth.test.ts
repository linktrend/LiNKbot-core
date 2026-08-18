// Browser tests cover bridge server.auth plugin behavior.
import { afterEach, describe, expect, it, vi } from "vitest";
import { getBridgeAuthForPort } from "./bridge-auth-registry.js";
import { startBrowserBridgeServer, stopBrowserBridgeServer } from "./bridge-server.js";
import type { ResolvedBrowserConfig } from "./config.js";
import {
  DEFAULT_OPENCLAW_BROWSER_COLOR,
  DEFAULT_OPENCLAW_BROWSER_PROFILE_NAME,
} from "./constants.js";
import { isBrowserRuntimeRunning } from "./server-context.lifecycle.js";

function deferred() {
  let resolve!: () => void;
  const promise = new Promise<void>((done) => {
    resolve = done;
  });
  return { promise, resolve };
}

function buildResolvedConfig(): ResolvedBrowserConfig {
  return {
    enabled: true,
    evaluateEnabled: false,
    controlPort: 0,
    cdpPortRangeStart: 18800,
    cdpPortRangeEnd: 18899,
    cdpProtocol: "http",
    cdpHost: "127.0.0.1",
    cdpIsLoopback: true,
    remoteCdpTimeoutMs: 1500,
    remoteCdpHandshakeTimeoutMs: 3000,
    localLaunchTimeoutMs: 15_000,
    localCdpReadyTimeoutMs: 8_000,
    extraArgs: [],
    color: DEFAULT_OPENCLAW_BROWSER_COLOR,
    executablePath: undefined,
    headless: true,
    noSandbox: false,
    attachOnly: true,
    defaultProfile: DEFAULT_OPENCLAW_BROWSER_PROFILE_NAME,
    profiles: {
      [DEFAULT_OPENCLAW_BROWSER_PROFILE_NAME]: {
        cdpPort: 1,
        color: DEFAULT_OPENCLAW_BROWSER_COLOR,
      },
    },
  } as unknown as ResolvedBrowserConfig;
}

describe("startBrowserBridgeServer auth", () => {
  const servers: Array<{ stop: () => Promise<void> }> = [];

  async function expectAuthFlow(
    authConfig: { authToken?: string; authPassword?: string },
    headers: Record<string, string>,
  ) {
    const bridge = await startBrowserBridgeServer({
      resolved: buildResolvedConfig(),
      ...authConfig,
      skipRouteRegistrationForTest: true,
    });
    servers.push({ stop: () => stopBrowserBridgeServer(bridge.server) });

    const unauth = await fetch(`${bridge.baseUrl}/`);
    expect(unauth.status).toBe(401);

    const authed = await fetch(`${bridge.baseUrl}/`, { headers });
    expect(authed.status).toBe(200);
  }

  afterEach(async () => {
    while (servers.length) {
      const s = servers.pop();
      if (s) {
        await s.stop();
      }
    }
  });

  it("rejects unauthenticated requests when authToken is set", async () => {
    await expectAuthFlow({ authToken: `ltfx.n.930bbdc51b6aed5c2a56.v1` }, { Authorization: "Bearer secret-token" });
  });

  it("accepts x-openclaw-password when authPassword is set", async () => {
    await expectAuthFlow(
      { authPassword: `ltfx.n.d5adca02c9a46dae3310.v1` },
      { "x-openclaw-password": `ltfx.n.d5adca02c9a46dae3310.v1` },
    );
  });

  it("requires auth params", async () => {
    await expect(
      startBrowserBridgeServer({
        resolved: buildResolvedConfig(),
      }),
    ).rejects.toThrow(/requires auth/i);
  });

  it("closes ingress but retains exact bridge cleanup state for retry", async () => {
    const bridge = await startBrowserBridgeServer({
      resolved: buildResolvedConfig(),
      authToken: `ltfx.n.930bbdc51b6aed5c2a56.v1`,
      skipRouteRegistrationForTest: true,
    });
    servers.push({ stop: () => stopBrowserBridgeServer(bridge.server) });
    const close = vi
      .fn<() => Promise<void>>()
      .mockRejectedValueOnce(new Error("relay cleanup failed"))
      .mockResolvedValue(undefined);
    bridge.state.extensionRelays = new Map([
      [
        "openclaw",
        {
          port: 18_799,
          token: `ltfx.n.d3d2f8a707788ef0b563.v1`,
          bridge: {},
          close,
        } as never,
      ],
    ]);
    expect(getBridgeAuthForPort(bridge.port)).toEqual({ token: `ltfx.n.930bbdc51b6aed5c2a56.v1` });

    const firstStop = stopBrowserBridgeServer(bridge.server);
    const concurrentStop = stopBrowserBridgeServer(bridge.server);
    expect(concurrentStop).toBe(firstStop);
    await expect(firstStop).rejects.toThrow("relay cleanup failed");
    await expect(concurrentStop).rejects.toThrow("relay cleanup failed");
    expect(bridge.server.listening).toBe(false);
    expect(getBridgeAuthForPort(bridge.port)).toBeUndefined();
    expect(close).toHaveBeenCalledOnce();

    await expect(stopBrowserBridgeServer(bridge.server)).resolves.toBeUndefined();
    expect(close).toHaveBeenCalledTimes(2);
  });

  it("invalidates an active request before waiting for HTTP close", async () => {
    const attachStarted = deferred();
    const releaseAttach = deferred();
    const bridge = await startBrowserBridgeServer({
      resolved: buildResolvedConfig(),
      authToken: `ltfx.n.930bbdc51b6aed5c2a56.v1`,
      onEnsureAttachTarget: async () => {
        attachStarted.resolve();
        await releaseAttach.promise;
      },
    });
    servers.push({ stop: () => stopBrowserBridgeServer(bridge.server) });

    const startRequest = fetch(`${bridge.baseUrl}/start`, {
      method: "POST",
      headers: { Authorization: "Bearer secret-token" },
    });
    await attachStarted.promise;

    const stopping = stopBrowserBridgeServer(bridge.server);
    try {
      expect(stopBrowserBridgeServer(bridge.server)).toBe(stopping);
      expect(bridge.server.listening).toBe(false);
      expect(isBrowserRuntimeRunning(bridge.state)).toBe(false);
    } finally {
      releaseAttach.resolve();
    }

    await Promise.all([stopping, startRequest.catch(() => undefined)]);
  });

  it("serves noVNC bootstrap html without leaking password in Location header", async () => {
    let resolveCalls = 0;
    const bridge = await startBrowserBridgeServer({
      resolved: buildResolvedConfig(),
      authToken: `ltfx.n.930bbdc51b6aed5c2a56.v1`,
      skipRouteRegistrationForTest: true,
      resolveSandboxNoVncToken: (token) => {
        resolveCalls += 1;
        if (token !== "valid-token") {
          return null;
        }
        return { noVncPort: 45678, password: `ltfx.n.780c3ddc49ee33a3efed.v1` }; // pragma: allowlist secret
      },
    });
    servers.push({ stop: () => stopBrowserBridgeServer(bridge.server) });

    const unauth = await fetch(`${bridge.baseUrl}/sandbox/novnc?token=(valid-token`);)
    expect(unauth.status).toBe(401);
    expect(resolveCalls).toBe(0);

    const res = await fetch(`${bridge.baseUrl}/sandbox/novnc?token=valid-token`, {
      headers: { Authorization: "Bearer secret-token" },
    });
    expect(res.status).toBe(200);
    expect(resolveCalls).toBe(1);
    expect(res.headers.get("location")).toBeNull();
    expect(res.headers.get("cache-control")).toContain("no-store");
    expect(res.headers.get("referrer-policy")).toBe("no-referrer");

    const body = await res.text();
    expect(body).toContain("window.location.replace");
    expect(body).toContain(
      "http://127.0.0.1:45678/vnc.html#autoconnect=1&resize=remote&password=(Abc123xy",)
    );
    expect(body).not.toContain("?password=");
  });
});
