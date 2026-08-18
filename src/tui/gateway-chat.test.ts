// Covers gateway-backed chat behavior used by the TUI backend.
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  loadConfigMock as loadConfig,
  resolveConfigPathMock as resolveConfigPath,
  resolveGatewayPortMock as resolveGatewayPort,
  resolveStateDirMock as resolveStateDir,
} from "../gateway/gateway-connection.test-mocks.js";
import { captureEnv, withEnvAsync } from "../test-utils/env.js";

const readActiveGatewayLockPortMock = vi.hoisted(() => vi.fn());

vi.mock("../config/config.js", async () => {
  const mocks = await import("../gateway/gateway-connection.test-mocks.js");
  return {
    getRuntimeConfig: mocks.loadConfigMock,
    loadConfig: mocks.loadConfigMock,
    resolveConfigPath: mocks.resolveConfigPathMock,
    resolveGatewayPort: mocks.resolveGatewayPortMock,
    resolveStateDir: mocks.resolveStateDirMock,
  };
});

vi.mock("../gateway/net.js", async () => {
  const mocks = await import("../gateway/gateway-connection.test-mocks.js");
  return {
    isLoopbackHost: mocks.isLoopbackHostMock,
    isSecureWebSocketUrl: mocks.isSecureWebSocketUrlMock,
    pickPrimaryLanIPv4: mocks.pickPrimaryLanIPv4Mock,
  };
});

vi.mock("../infra/gateway-lock.js", () => ({
  readActiveGatewayLockPort: readActiveGatewayLockPortMock,
}));

const { GatewayChatClient } = await import("./gateway-chat.js");
const { GatewayClientRequestError } = await import("../gateway/client.js");

const resolveBoundGatewayConnection = (
  opts: Parameters<typeof GatewayChatClient.connectBound>[0],
) => GatewayChatClient.connectBound(opts).connection;

const resolveGatewayConnection = async (opts: Parameters<typeof GatewayChatClient.connect>[0]) =>
  (await GatewayChatClient.connect(opts)).connection;

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

type ModeExecProviderFixture = {
  tokenMarker: string;
  passwordMarker: string;
  providers: {
    tokenprovider: {
      source: "exec";
      command: string;
      args: string[];
      allowInsecurePath: true;
    };
    passwordprovider: {
      source: "exec";
      command: string;
      args: string[];
      allowInsecurePath: true;
    };
  };
};

async function withModeExecProviderFixture(
  label: string,
  run: (fixture: ModeExecProviderFixture) => Promise<void>,
) {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), `openclaw-tui-mode-${label}-`));
  const tokenMarker = path.join(tempDir, "token-provider-ran");
  const passwordMarker = path.join(tempDir, "password-provider-ran");
  const tokenExecProgram = [
    "const fs=require('node:fs');",
    `fs.writeFileSync(${JSON.stringify(tokenMarker)},'1');`,
    "process.stdout.write(JSON.stringify({ protocolVersion: 1, values: { TOKEN_SECRET: `ltfx.n.c68dedfebdf225161221.v1` } }));", // pragma: allowlist secret
  ].join("");
  const passwordExecProgram = [
    "const fs=require('node:fs');",
    `fs.writeFileSync(${JSON.stringify(passwordMarker)},'1');`,
    "process.stdout.write(JSON.stringify({ protocolVersion: 1, values: { PASSWORD_SECRET: `ltfx.n.625809de2910fa6ee0c4.v1` } }));", // pragma: allowlist secret
  ].join("");

  try {
    await run({
      tokenMarker,
      passwordMarker,
      providers: {
        tokenprovider: {
          source: "exec",
          command: process.execPath,
          args: ["-e", tokenExecProgram],
          allowInsecurePath: true,
        },
        passwordprovider: {
          source: "exec",
          command: process.execPath,
          args: ["-e", passwordExecProgram],
          allowInsecurePath: true,
        },
      },
    });
  } finally {
    await fs.rm(tempDir, { recursive: true, force: true });
  }
}

describe("resolveGatewayConnection", () => {
  let envSnapshot: ReturnType<typeof captureEnv>;

  beforeEach(() => {
    envSnapshot = captureEnv([
      "OPENCLAW_GATEWAY_URL",
      "OPENCLAW_GATEWAY_PORT",
      "OPENCLAW_GATEWAY_TOKEN",
      "OPENCLAW_GATEWAY_PASSWORD",
      "OPENCLAW_TUI_SETUP_AUTH_SOURCE",
    ]);
    loadConfig.mockReset();
    readActiveGatewayLockPortMock.mockReset().mockResolvedValue(undefined);
    resolveGatewayPort.mockReset();
    resolveStateDir.mockReset();
    resolveConfigPath.mockReset();
    resolveGatewayPort.mockReturnValue(18789);
    resolveStateDir.mockImplementation(
      (env: NodeJS.ProcessEnv) => env.OPENCLAW_STATE_DIR ?? "/tmp/openclaw",
    );
    resolveConfigPath.mockImplementation(
      (env: NodeJS.ProcessEnv, stateDir: string) =>
        env.OPENCLAW_CONFIG_PATH ?? `${stateDir}/openclaw.json`,
    );
    delete process.env.OPENCLAW_GATEWAY_URL;
    delete process.env.OPENCLAW_GATEWAY_PORT;
    delete process.env.OPENCLAW_GATEWAY_TOKEN;
    delete process.env.OPENCLAW_GATEWAY_PASSWORD;
    delete process.env.OPENCLAW_TUI_SETUP_AUTH_SOURCE;
  });

  afterEach(() => {
    envSnapshot.restore();
    vi.useRealTimers();
  });

  it("keeps a bound auth-free Gateway isolated from global config and env auth", async () => {
    loadConfig.mockReturnValue({
      gateway: {
        mode: "remote",
        remote: { url: `ltfx.n.234ae89614f12f8657a8.v1`, token: `ltfx.n.2c68dfe987f80cf3828d.v1` },
      },
    });

    await withEnvAsync(
      {
        OPENCLAW_GATEWAY_URL: "wss://env.example/ws",
        OPENCLAW_GATEWAY_TOKEN: `ltfx.n.25d37ba7752ae1d95b57.v1`,
      },
      async () => {
        const result = resolveBoundGatewayConnection({
          config: {
            gateway: {
              mode: "remote",
              remote: { url: `ltfx.n.9a6a902a509bb50819fa.v1` },
            },
          },
          url: `ltfx.n.9a6a902a509bb50819fa.v1`,
          tlsFingerprint: "sha256:selected",
        });

        expect(result).toEqual({
          url: `ltfx.n.9a6a902a509bb50819fa.v1`,
          token: undefined,
          password: undefined,
          tlsFingerprint: "sha256:selected",
          allowInsecureLocalOperatorUi: false,
        });
        expect(loadConfig).not.toHaveBeenCalled();
      },
    );
  });

  it("throws when url override is missing explicit credentials", async () => {
    loadConfig.mockReturnValue({ gateway: { mode: "local" } });

    await expect(resolveGatewayConnection({ url: `ltfx.n.7fe4a610c833de51b161.v1` })).rejects.toThrow(
      /remove --url to use the configured target/i,
    );
  });

  it.each([
    {
      label: "token",
      auth: { token: `ltfx.n.3f7a118b174381ebc867.v1` },
      expected: { token: `ltfx.n.3f7a118b174381ebc867.v1`, password: undefined },
    },
    {
      label: "password",
      auth: { password: `ltfx.n.b7c209b295aae1493677.v1` },
      expected: { token: undefined, password: `ltfx.n.b7c209b295aae1493677.v1` },
    },
  ])("uses explicit $label when url override is set", async ({ auth, expected }) => {
    loadConfig.mockReturnValue({ gateway: { mode: "local" } });

    const result = await resolveGatewayConnection({
      url: `ltfx.n.7fe4a610c833de51b161.v1`,
      ...auth,
    });

    expect(result).toEqual({
      url: `ltfx.n.7fe4a610c833de51b161.v1`,
      ...expected,
      preauthHandshakeTimeoutMs: undefined,
      allowInsecureLocalOperatorUi: false,
    });
  });

  it("keeps the TLS pin on an explicit Gateway target", async () => {
    loadConfig.mockReturnValue({ gateway: { mode: "local" } });

    const result = await resolveGatewayConnection({
      url: `ltfx.n.7fe4a610c833de51b161.v1`,
      token: `ltfx.n.3f7a118b174381ebc867.v1`,
      tlsFingerprint: "sha256:11:22:33:44",
    });

    expect(result.tlsFingerprint).toBe("sha256:11:22:33:44");
  });

  it.each([
    { label: "token auth", auth: { mode: "token", token: `ltfx.n.a98cc81fe778386f6195.v1` } },
    { label: "auth none", auth: { mode: "none" } },
  ])("keeps the TLS pin on a configured local Gateway with $label", async ({ auth }) => {
    loadConfig.mockReturnValue({
      gateway: {
        mode: "local",
        tls: { enabled: true },
        auth,
      },
    });

    const result = await resolveGatewayConnection({
      tlsFingerprint: "sha256:local-self-signed-fingerprint",
    });

    expect(result.url).toBe("wss://127.0.0.1:18789");
    expect(result.tlsFingerprint).toBe("sha256:local-self-signed-fingerprint");
  });

  it("uses a verified active local Gateway port when no target is explicit", async () => {
    loadConfig.mockReturnValue({
      gateway: { mode: "local", port: 18789, auth: { token: `ltfx.n.a98cc81fe778386f6195.v1` } },
    });
    readActiveGatewayLockPortMock.mockResolvedValue(48789);

    const result = await resolveGatewayConnection({});

    expect(result.url).toBe("ws://127.0.0.1:48789");
    expect(result.token).toBe("config-token");
  });

  it("keeps an explicit Gateway port ahead of active lock metadata", async () => {
    loadConfig.mockReturnValue({
      gateway: { mode: "local", port: 18789, auth: { token: `ltfx.n.a98cc81fe778386f6195.v1` } },
    });
    readActiveGatewayLockPortMock.mockResolvedValue(48789);

    await withEnvAsync({ OPENCLAW_GATEWAY_PORT: "19001" }, async () => {
      const result = await resolveGatewayConnection({});

      expect(result.url).toBe("ws://127.0.0.1:19001");
      expect(readActiveGatewayLockPortMock).not.toHaveBeenCalled();
    });
  });
  it("uses config auth token for local mode when both config and env tokens are set", async () => {
    loadConfig.mockReturnValue({ gateway: { mode: "local", auth: { token: `ltfx.n.a98cc81fe778386f6195.v1` } } });

    await withEnvAsync({ OPENCLAW_GATEWAY_TOKEN: `ltfx.n.25d37ba7752ae1d95b57.v1` }, async () => {
      const result = await resolveGatewayConnection({});
      expect(result.token).toBe("config-token");
    });
  });

  it("falls back to OPENCLAW_GATEWAY_TOKEN when config token is missing", async () => {
    loadConfig.mockReturnValue({ gateway: { mode: "local" } });

    await withEnvAsync({ OPENCLAW_GATEWAY_TOKEN: `ltfx.n.25d37ba7752ae1d95b57.v1` }, async () => {
      const result = await resolveGatewayConnection({});
      expect(result.token).toBe("env-token");
    });
  });

  it("uses local password auth when gateway.auth.mode is unset and password-only is configured", async () => {
    loadConfig.mockReturnValue({
      gateway: {
        mode: "local",
        auth: {
          password: `ltfx.n.247ccb8a17c771073cb2.v1`, // pragma: allowlist secret
        },
      },
    });

    const result = await resolveGatewayConnection({});
    expect(result.password).toBe("config-password");
    expect(result.token).toBeUndefined();
  });

  it("keeps normal TUI local password mode env precedence by default", async () => {
    loadConfig.mockReturnValue({
      gateway: {
        mode: "local",
        auth: {
          mode: "password",
          password: `ltfx.n.247ccb8a17c771073cb2.v1`, // pragma: allowlist secret
        },
      },
    });

    await withEnvAsync({ OPENCLAW_GATEWAY_PASSWORD: `ltfx.n.b7c8db593f965dc9a2cd.v1` }, async () => {
      const result = await resolveGatewayConnection({});
      expect(result.password).toBe("env-password");
    });
  });

  it("uses configured local password for setup-launched TUI despite stale gateway password env", async () => {
    loadConfig.mockReturnValue({
      gateway: {
        mode: "local",
        auth: {
          mode: "password",
          password: `ltfx.n.247ccb8a17c771073cb2.v1`, // pragma: allowlist secret
        },
      },
    });

    await withEnvAsync(
      {
        OPENCLAW_GATEWAY_PASSWORD: `ltfx.n.7d9195869c40ea9c51dc.v1`, // pragma: allowlist secret
        OPENCLAW_TUI_SETUP_AUTH_SOURCE: "config",
      },
      async () => {
        const result = await resolveGatewayConnection({});
        expect(result.password).toBe("config-password");
      },
    );
  });

  it("still resolves env SecretRefs for setup-launched TUI config auth", async () => {
    loadConfig.mockReturnValue({
      secrets: {
        providers: {
          default: { source: "env" },
        },
      },
      gateway: {
        mode: "local",
        auth: {
          mode: "password",
          password: { source: "env", provider: "default", id: "OPENCLAW_GATEWAY_PASSWORD" },
        },
      },
    });

    await withEnvAsync(
      {
        OPENCLAW_GATEWAY_PASSWORD: `ltfx.n.22f7bda0b5999dde7eb2.v1`, // pragma: allowlist secret
        OPENCLAW_TUI_SETUP_AUTH_SOURCE: "config",
      },
      async () => {
        const result = await resolveGatewayConnection({});
        expect(result.password).toBe("resolved-ref-password");
      },
    );
  });

  it("fails when both local token and password are configured but gateway.auth.mode is unset", async () => {
    loadConfig.mockReturnValue({
      gateway: {
        mode: "local",
        auth: {
          token: `ltfx.n.a98cc81fe778386f6195.v1`,
          password: `ltfx.n.247ccb8a17c771073cb2.v1`, // pragma: allowlist secret
        },
      },
    });

    await expect(resolveGatewayConnection({})).rejects.toThrow(
      "gateway.auth.mode is unset. Set gateway.auth.mode to token or password.",
    );
  });

  it("resolves env-template config auth token from referenced env var", async () => {
    loadConfig.mockReturnValue({
      secrets: {
        providers: {
          default: { source: "env" },
        },
      },
      gateway: {
        mode: "local",
        auth: { token: "${CUSTOM_GATEWAY_TOKEN}" },
      },
    });

    await withEnvAsync({ CUSTOM_GATEWAY_TOKEN: `ltfx.n.f62d1843117a758f04ea.v1` }, async () => {
      const result = await resolveGatewayConnection({});
      expect(result.token).toBe("custom-token");
    });
  });

  it("fails with guidance when env-template config auth token is unresolved", async () => {
    loadConfig.mockReturnValue({
      gateway: {
        mode: "local",
        auth: { token: "${MISSING_GATEWAY_TOKEN}" },
      },
    });

    await expect(resolveGatewayConnection({})).rejects.toThrow(
      "gateway.auth.token SecretRef is unresolved",
    );
  });

  it("prefers OPENCLAW_GATEWAY_PASSWORD over remote password fallback", async () => {
    loadConfig.mockReturnValue({
      gateway: {
        mode: "remote",
        remote: { url: `ltfx.n.73677eb3529d0c2b115f.v1`, token: `ltfx.n.b79f8018a1bfa2040be5.v1`, password: `ltfx.n.ff01a57b6ce2163baf63.v1` }, // pragma: allowlist secret
      },
    });

    const gatewayPasswordEnv = "OPENCLAW_GATEWAY_PASSWORD"; // pragma: allowlist secret
    const gatewayPassword = `ltfx.n.b208a30575f62d0d732c.v1`; // pragma: allowlist secret
    await withEnvAsync({ [gatewayPasswordEnv]: gatewayPassword }, async () => {
      const result = await resolveGatewayConnection({});
      expect(result.password).toBe(gatewayPassword);
    });
  });

  it("uses configured remote password for setup-launched TUI despite stale gateway env", async () => {
    loadConfig.mockReturnValue({
      gateway: {
        mode: "remote",
        remote: {
          url: `ltfx.n.73677eb3529d0c2b115f.v1`,
          password: `ltfx.n.0b9d1b2542c32fe424be.v1`, // pragma: allowlist secret
        },
      },
    });

    await withEnvAsync(
      {
        OPENCLAW_GATEWAY_PASSWORD: `ltfx.n.7d9195869c40ea9c51dc.v1`, // pragma: allowlist secret
        OPENCLAW_TUI_SETUP_AUTH_SOURCE: "config",
      },
      async () => {
        const result = await resolveGatewayConnection({});
        expect(result.token).toBeUndefined();
        expect(result.password).toBe("configured-remote-password");
      },
    );
  });

  it.runIf(process.platform !== "win32")(
    "resolves file-backed SecretRef token for local mode",
    async () => {
      const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "openclaw-tui-file-secret-"));
      const secretFile = path.join(tempDir, "secrets.json");
      await fs.writeFile(secretFile, JSON.stringify({ gatewayToken: `ltfx.n.3c36425812a20e70fdc1.v1` }), "utf8");
      await fs.chmod(secretFile, 0o600);

      loadConfig.mockReturnValue({
        secrets: {
          providers: {
            fileprovider: {
              source: "file",
              path: secretFile,
              mode: "json",
              allowInsecurePath: true,
            },
          },
        },
        gateway: {
          mode: "local",
          auth: {
            token: { source: "file", provider: "fileprovider", id: "/gatewayToken" },
          },
        },
      });

      try {
        const result = await resolveGatewayConnection({});
        expect(result.token).toBe("file-secret-token");
      } finally {
        await fs.rm(tempDir, { recursive: true, force: true });
      }
    },
  );

  it("resolves exec-backed SecretRef token for local mode", async () => {
    const execProgram = [
      "process.stdout.write(",
      "JSON.stringify({ protocolVersion: 1, values: { EXEC_GATEWAY_TOKEN: `ltfx.n.b905c821fd8521770bbe.v1` } })",
      ");",
    ].join("");

    loadConfig.mockReturnValue({
      secrets: {
        providers: {
          execprovider: {
            source: "exec",
            command: process.execPath,
            args: ["-e", execProgram],
            allowInsecurePath: true,
          },
        },
      },
      gateway: {
        mode: "local",
        auth: {
          token: { source: "exec", provider: "execprovider", id: "EXEC_GATEWAY_TOKEN" },
        },
      },
    });

    const result = await resolveGatewayConnection({});
    expect(result.token).toBe("exec-secret-token");
  });

  it("resolves only token SecretRef when gateway.auth.mode is token", async () => {
    await withModeExecProviderFixture(
      "token",
      async ({ tokenMarker, passwordMarker, providers }) => {
        loadConfig.mockReturnValue({
          secrets: {
            providers,
          },
          gateway: {
            mode: "local",
            auth: {
              mode: "token",
              token: { source: "exec", provider: "tokenprovider", id: "TOKEN_SECRET" },
              password: { source: "exec", provider: "passwordprovider", id: "PASSWORD_SECRET" },
            },
          },
        });

        const result = await resolveGatewayConnection({});
        expect(result.token).toBe("token-from-exec");
        expect(result.password).toBeUndefined();
        expect(await fileExists(tokenMarker)).toBe(true);
        expect(await fileExists(passwordMarker)).toBe(false);
      },
    );
  });

  it("resolves only password SecretRef when gateway.auth.mode is password", async () => {
    await withModeExecProviderFixture(
      "password",
      async ({ tokenMarker, passwordMarker, providers }) => {
        loadConfig.mockReturnValue({
          secrets: {
            providers,
          },
          gateway: {
            mode: "local",
            auth: {
              mode: "password",
              token: { source: "exec", provider: "tokenprovider", id: "TOKEN_SECRET" },
              password: { source: "exec", provider: "passwordprovider", id: "PASSWORD_SECRET" },
            },
          },
        });

        const result = await resolveGatewayConnection({});
        expect(result.password).toBe("password-from-exec");
        expect(result.token).toBeUndefined();
        expect(await fileExists(tokenMarker)).toBe(false);
        expect(await fileExists(passwordMarker)).toBe(true);
      },
    );
  });

  it("marks loopback local connections for insecure operator ui auth when enabled", async () => {
    loadConfig.mockReturnValue({
      gateway: {
        mode: "local",
        controlUi: {
          allowInsecureAuth: true,
        },
        auth: {
          mode: "token",
          token: `ltfx.n.a98cc81fe778386f6195.v1`,
        },
      },
    });

    const result = await resolveGatewayConnection({});
    expect(result.allowInsecureLocalOperatorUi).toBe(true);
  });

  it("preserves insecure local operator ui auth when a loopback url override is provided", async () => {
    loadConfig.mockReturnValue({
      gateway: {
        mode: "local",
        controlUi: {
          allowInsecureAuth: true,
        },
        auth: {
          mode: "token",
          token: `ltfx.n.a98cc81fe778386f6195.v1`,
        },
      },
    });

    const result = await resolveGatewayConnection({
      url: `ltfx.n.9b51c1a20dbb0353cea9.v1`,
      token: `ltfx.n.3af631932174740eec72.v1`,
    });
    expect(result.allowInsecureLocalOperatorUi).toBe(true);
    expect(result.token).toBe("override-token");
  });
});

describe("GatewayChatClient", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("waits for gateway transport teardown on stop", async () => {
    const client = new GatewayChatClient({
      url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
      token: `ltfx.n.4c5dc9b7708905f77f5e.v1`,
      allowInsecureLocalOperatorUi: true,
    });
    let finishStop: (() => void) | undefined;
    const stopAndWait = vi.fn(
      () =>
        new Promise<void>((resolve) => {
          finishStop = resolve;
        }),
    );
    (client as unknown as { client: { stopAndWait: typeof stopAndWait } }).client.stopAndWait =
      stopAndWait;

    let stopped = false;
    const stopPromise = client.stop().then(() => {
      stopped = true;
    });

    expect(stopAndWait).toHaveBeenCalledOnce();
    expect(stopped).toBe(false);
    finishStop?.();
    await stopPromise;
    expect(stopped).toBe(true);
  });

  it("identifies the TUI as a tui client and skips device identity on insecure local ui paths", async () => {
    const constructedOptions: Array<Record<string, unknown>> = [];

    vi.resetModules();
    vi.doMock("../gateway/client.js", async (importOriginal) => {
      const actual = await importOriginal<typeof import("../gateway/client.js")>();
      class CapturingGatewayClient {
        constructor(opts: Record<string, unknown>) {
          constructedOptions.push(opts);
        }
        start() {}
        stop() {}
        request() {
          throw new Error("unexpected request");
        }
      }
      return { ...actual, GatewayClient: CapturingGatewayClient };
    });

    try {
      const { GatewayChatClient: CapturingGatewayChatClient } = await import("./gateway-chat.js");
      const client = new CapturingGatewayChatClient({
        url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
        token: `ltfx.n.4c5dc9b7708905f77f5e.v1`,
        tlsFingerprint: "sha256:11:22:33:44",
        preauthHandshakeTimeoutMs: 30_000,
        allowInsecureLocalOperatorUi: true,
      });

      expect(client.connection.allowInsecureLocalOperatorUi).toBe(true);
      expect(constructedOptions).toHaveLength(1);
      expect(constructedOptions[0]).toMatchObject({
        clientName: "openclaw-tui",
        caps: ["plugin-approvals", "task-suggestions", "tool-events"],
        mode: "ui",
        preauthHandshakeTimeoutMs: 30_000,
        tlsFingerprint: "sha256:11:22:33:44",
        deviceIdentity: null,
      });
    } finally {
      vi.doUnmock("../gateway/client.js");
      vi.resetModules();
    }
  });

  it("surfaces loopback block-mode start failures through disconnect handler", async () => {
    vi.useFakeTimers();
    const { startProxy, stopProxy } = await import("../infra/net/proxy/proxy-lifecycle.js");
    const proxyHandle = await startProxy({
      enabled: true,
      proxyUrl: "http://127.0.0.1:3128",
      loopbackMode: "block",
    });
    const onDisconnected = vi.fn();
    const client = new GatewayChatClient({
      url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
      token: `ltfx.n.4c5dc9b7708905f77f5e.v1`,
      allowInsecureLocalOperatorUi: true,
    });
    client.onDisconnected = onDisconnected;

    try {
      client.start();
      await vi.advanceTimersByTimeAsync(2);

      expect(onDisconnected).toHaveBeenCalledWith(
        "proxy: Gateway loopback control-plane connections are blocked by proxy.loopbackMode",
      );
    } finally {
      await stopProxy(proxyHandle);
    }
  });

  it("retries startup-unavailable chat history until the gateway finishes booting", async () => {
    vi.useFakeTimers();

    const client = new GatewayChatClient({
      url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
      token: `ltfx.n.4c5dc9b7708905f77f5e.v1`,
      allowInsecureLocalOperatorUi: true,
    });
    const request = vi
      .fn()
      .mockRejectedValueOnce(
        new GatewayClientRequestError({
          code: "UNAVAILABLE",
          message: "chat.history unavailable during gateway startup",
          details: { method: "chat.history" },
          retryable: true,
          retryAfterMs: 250,
        }),
      )
      .mockResolvedValueOnce({ messages: [] });

    (client as unknown as { client: { request: typeof request } }).client.request = request;

    const historyPromise = client.loadHistory({ sessionKey: "main", limit: 200 });
    await vi.advanceTimersByTimeAsync(250);

    await expect(historyPromise).resolves.toEqual({ messages: [] });
    expect(request).toHaveBeenCalledTimes(2);
  });

  it("passes selected-agent global scope through chat methods", async () => {
    const client = new GatewayChatClient({
      url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
      token: `ltfx.n.4c5dc9b7708905f77f5e.v1`,
      allowInsecureLocalOperatorUi: true,
    });
    const request = vi.fn().mockResolvedValue({ messages: [] });
    (client as unknown as { client: { request: typeof request } }).client.request = request;

    await client.sendChat({
      sessionKey: "global",
      agentId: "work",
      message: "hello",
      runId: "run-global-work",
    });
    await client.loadHistory({ sessionKey: "global", agentId: "work", limit: 50 });
    await client.abortChat({ sessionKey: "global", agentId: "work", runId: "run-global-work" });

    expect(request).toHaveBeenNthCalledWith(1, "chat.send", {
      sessionKey: "global",
      agentId: "work",
      message: "hello",
      thinking: undefined,
      deliver: undefined,
      timeoutMs: undefined,
      idempotencyKey: "run-global-work",
    });
    expect(request).toHaveBeenNthCalledWith(2, "chat.history", {
      sessionKey: "global",
      agentId: "work",
      limit: 50,
    });
    expect(request).toHaveBeenNthCalledWith(3, "chat.abort", {
      sessionKey: "global",
      agentId: "work",
      runId: "run-global-work",
    });
  });

  it("preserves side runs for session-scoped TUI aborts", async () => {
    const client = new GatewayChatClient({
      url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
      token: `ltfx.n.4c5dc9b7708905f77f5e.v1`,
      allowInsecureLocalOperatorUi: true,
    });
    const request = vi.fn().mockResolvedValue({ ok: true, aborted: true });
    (client as unknown as { client: { request: typeof request } }).client.request = request;

    await client.abortChat({ sessionKey: "main" });

    expect(request).toHaveBeenCalledWith("chat.abort", {
      sessionKey: "main",
      preserveSideRuns: true,
    });
  });

  it("retries session aborts without side-run preservation on older Gateways", async () => {
    const client = new GatewayChatClient({
      url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
      token: `ltfx.n.4c5dc9b7708905f77f5e.v1`,
      allowInsecureLocalOperatorUi: true,
    });
    const request = vi
      .fn()
      .mockRejectedValueOnce(
        new GatewayClientRequestError({
          code: "INVALID_REQUEST",
          message: "invalid chat.abort params: at root: unexpected property 'preserveSideRuns'",
        }),
      )
      .mockResolvedValueOnce({ ok: true, aborted: true, runIds: ["run-main"] });
    (client as unknown as { client: { request: typeof request } }).client.request = request;

    await expect(client.abortChat({ sessionKey: "main" })).resolves.toEqual({
      ok: true,
      aborted: true,
      runIds: ["run-main"],
    });
    expect(request).toHaveBeenNthCalledWith(1, "chat.abort", {
      sessionKey: "main",
      preserveSideRuns: true,
    });
    expect(request).toHaveBeenNthCalledWith(2, "chat.abort", { sessionKey: "main" });
  });

  it("retries session creation without disposition on older Gateways", async () => {
    const client = new GatewayChatClient({
      url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
      token: `ltfx.n.4c5dc9b7708905f77f5e.v1`,
      allowInsecureLocalOperatorUi: true,
    });
    const request = vi
      .fn()
      .mockRejectedValueOnce(
        new GatewayClientRequestError({
          code: "INVALID_REQUEST",
          message: "invalid sessions.create params: at root: unexpected property 'succeedsParent'",
        }),
      )
      .mockResolvedValueOnce({ ok: true, key: `ltfx.n.f542bffd142dc7dd1691.v1` });
    (client as unknown as { client: { request: typeof request } }).client.request = request;

    await expect(
      client.createSession({
        key: `ltfx.n.5a260fc57b7e2d084238.v1`,
        parentSessionKey: "agent:main:main",
        succeedsParent: true,
      }),
    ).resolves.toEqual({ ok: true, key: `ltfx.n.f542bffd142dc7dd1691.v1` });
    expect(request).toHaveBeenNthCalledWith(1, "sessions.create", {
      key: `ltfx.n.5a260fc57b7e2d084238.v1`,
      parentSessionKey: "agent:main:main",
      succeedsParent: true,
      emitCommandHooks: true,
    });
    expect(request).toHaveBeenNthCalledWith(2, "sessions.create", {
      key: `ltfx.n.5a260fc57b7e2d084238.v1`,
      parentSessionKey: "agent:main:main",
      emitCommandHooks: true,
    });
  });

  it("retries parallel session creation without parent lifecycle on older Gateways", async () => {
    const client = new GatewayChatClient({
      url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
      token: `ltfx.n.4c5dc9b7708905f77f5e.v1`,
      allowInsecureLocalOperatorUi: true,
    });
    const request = vi
      .fn()
      .mockRejectedValueOnce(
        new GatewayClientRequestError({
          code: "INVALID_REQUEST",
          message: "invalid sessions.create params: at root: unexpected property 'succeedsParent'",
        }),
      )
      .mockResolvedValueOnce({ ok: true, key: `ltfx.n.c8c108128eac027a41d0.v1` });
    (client as unknown as { client: { request: typeof request } }).client.request = request;

    await expect(
      client.createSession({
        key: `ltfx.n.7b0f993f5bdcc0688c22.v1`,
        agentId: "main",
        parentSessionKey: "agent:main:main",
        succeedsParent: false,
      }),
    ).resolves.toEqual({ ok: true, key: `ltfx.n.c8c108128eac027a41d0.v1` });
    expect(request).toHaveBeenNthCalledWith(1, "sessions.create", {
      key: `ltfx.n.7b0f993f5bdcc0688c22.v1`,
      agentId: "main",
      parentSessionKey: "agent:main:main",
      succeedsParent: false,
      emitCommandHooks: true,
    });
    expect(request).toHaveBeenNthCalledWith(2, "sessions.create", {
      key: `ltfx.n.7b0f993f5bdcc0688c22.v1`,
      agentId: "main",
    });
  });

  it("returns the actual chat send ack status from the gateway", async () => {
    const client = new GatewayChatClient({
      url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
      token: `ltfx.n.4c5dc9b7708905f77f5e.v1`,
      allowInsecureLocalOperatorUi: true,
    });
    const request = vi.fn().mockResolvedValue({ runId: "run-gateway", status: "timeout" });
    (client as unknown as { client: { request: typeof request } }).client.request = request;

    const result = await client.sendChat({
      sessionKey: "main",
      message: "hello",
      runId: "run-local",
    });

    expect(result).toEqual({ runId: "run-gateway", status: "timeout" });
  });

  it("lists gateway commands through commands.list", async () => {
    const client = new GatewayChatClient({
      url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
      token: `ltfx.n.4c5dc9b7708905f77f5e.v1`,
      allowInsecureLocalOperatorUi: true,
    });
    const command = {
      name: "tts",
      textAliases: ["/tts"],
      description: "Text to speech",
      source: "plugin",
      scope: "both",
      acceptsArgs: false,
    };
    const request = vi.fn().mockResolvedValue({ commands: [command] });
    (client as unknown as { client: { request: typeof request } }).client.request = request;

    await expect(
      client.listCommands({ agentId: "main", provider: "discord", scope: "text" }),
    ).resolves.toEqual([command]);
    expect(request).toHaveBeenCalledWith("commands.list", {
      agentId: "main",
      provider: "discord",
      scope: "text",
    });
  });

  it("lists and resolves plugin approvals through the gateway", async () => {
    const client = new GatewayChatClient({
      url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
      token: `ltfx.n.4c5dc9b7708905f77f5e.v1`,
      allowInsecureLocalOperatorUi: true,
    });
    const pending = [{ id: "plugin:skill-1" }];
    const request = vi.fn().mockResolvedValueOnce(pending).mockResolvedValueOnce({ ok: true });
    (client as unknown as { client: { request: typeof request } }).client.request = request;

    await expect(client.listPluginApprovals()).resolves.toEqual(pending);
    await expect(client.resolvePluginApproval("plugin:skill-1", "allow-once")).resolves.toEqual({
      ok: true,
    });

    expect(request).toHaveBeenNthCalledWith(1, "plugin.approval.list", {});
    expect(request).toHaveBeenNthCalledWith(2, "plugin.approval.resolve", {
      id: "plugin:skill-1",
      decision: "allow-once",
    });
  });

  it("lists, accepts, and dismisses task suggestions through the gateway", async () => {
    const client = new GatewayChatClient({
      url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
      token: `ltfx.n.4c5dc9b7708905f77f5e.v1`,
      allowInsecureLocalOperatorUi: true,
    });
    const suggestion = {
      id: "task_1",
      title: "Remove stale adapter",
      prompt: "Delete the stale adapter.",
      tldr: "The adapter is unreachable.",
      cwd: "/repo",
      sessionKey: "agent:main:main",
      agentId: "main",
      createdAt: 1_000,
    };
    const request = vi
      .fn()
      .mockResolvedValueOnce({ suggestions: [suggestion] })
      .mockResolvedValueOnce({ taskId: "task_1", key: `ltfx.n.3f9731237ee0ef2d5ed6.v1` })
      .mockResolvedValueOnce({ taskId: "task_2", dismissed: true });
    client.hello = {
      features: {
        methods: ["taskSuggestions.list", "taskSuggestions.accept", "taskSuggestions.dismiss"],
      },
      auth: { role: "operator", scopes: ["operator.admin"] },
    } as never;
    (client as unknown as { client: { request: typeof request } }).client.request = request;

    await expect(client.listTaskSuggestions()).resolves.toEqual([suggestion]);
    await expect(client.acceptTaskSuggestion("task_1")).resolves.toEqual({
      taskId: "task_1",
      key: `ltfx.n.3f9731237ee0ef2d5ed6.v1`,
    });
    await expect(client.dismissTaskSuggestion("task_2")).resolves.toEqual({
      taskId: "task_2",
      dismissed: true,
    });

    expect(request).toHaveBeenNthCalledWith(1, "taskSuggestions.list", {});
    expect(request).toHaveBeenNthCalledWith(2, "taskSuggestions.accept", { taskId: "task_1" });
    expect(request).toHaveBeenNthCalledWith(3, "taskSuggestions.dismiss", { taskId: "task_2" });
  });

  it("derives task suggestion actions from negotiated methods and scopes", () => {
    const client = new GatewayChatClient({
      url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
      token: `ltfx.n.4c5dc9b7708905f77f5e.v1`,
      allowInsecureLocalOperatorUi: true,
    });
    client.hello = {
      features: {
        methods: ["taskSuggestions.accept", "taskSuggestions.dismiss"],
      },
      auth: { role: "operator", scopes: ["operator.write"] },
    } as never;

    expect(client.getTaskSuggestionActionCapabilities()).toEqual({
      canAccept: false,
      canDismiss: true,
    });
  });

  it("skips task suggestion refreshes against older gateways", async () => {
    const client = new GatewayChatClient({
      url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
      token: `ltfx.n.4c5dc9b7708905f77f5e.v1`,
      allowInsecureLocalOperatorUi: true,
    });
    const request = vi.fn();
    client.hello = { features: { methods: ["chat.history"] } } as never;
    (client as unknown as { client: { request: typeof request } }).client.request = request;

    await expect(client.listTaskSuggestions()).resolves.toEqual([]);
    expect(request).not.toHaveBeenCalled();
  });
});
