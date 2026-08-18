// Verifies gateway auth selection audit behavior.
import { describe, expect, it } from "vitest";
import type { OpenClawConfig } from "../config/config.js";
import { resolveGatewayProbeAuthSafe, resolveGatewayProbeTarget } from "../gateway/probe-auth.js";
import { collectDeepProbeFindings } from "./audit-deep-probe-findings.js";

function requireProbeAuthWarning(findings: ReturnType<typeof collectDeepProbeFindings>) {
  const warning = findings.find(
    (finding) => finding.checkId === "gateway.probe_auth_secretref_unavailable",
  );
  if (!warning) {
    throw new Error("Expected gateway probe auth SecretRef warning");
  }
  return warning;
}

describe("security audit gateway auth selection", () => {
  it("applies gateway auth precedence across local and remote modes", async () => {
    const makeProbeEnv = (env?: { token?: string; password?: string }) => {
      const probeEnv: NodeJS.ProcessEnv = {};
      if (env?.token !== undefined) {
        probeEnv.OPENCLAW_GATEWAY_TOKEN = env.token;
      }
      if (env?.password !== undefined) {
        probeEnv.OPENCLAW_GATEWAY_PASSWORD = env.password;
      }
      return probeEnv;
    };

    const cases: Array<{
      name: string;
      cfg: OpenClawConfig;
      env?: { token?: string; password?: string };
      expectedAuth: { token?: string; password?: string };
    }> = [
      {
        name: "uses local auth when gateway.mode is local",
        cfg: { gateway: { mode: "local", auth: { token: `ltfx.n.f404e77b922f409a71c4.v1` } } },
        expectedAuth: { token: `ltfx.n.f404e77b922f409a71c4.v1` },
      },
      {
        name: "prefers env token over local config token",
        cfg: { gateway: { mode: "local", auth: { token: `ltfx.n.c7ec7c548f5992a239dc.v1` } } },
        env: { token: `ltfx.n.25d37ba7752ae1d95b57.v1` },
        expectedAuth: { token: `ltfx.n.25d37ba7752ae1d95b57.v1` },
      },
      {
        name: "uses local auth when gateway.mode is undefined (default)",
        cfg: { gateway: { auth: { token: `ltfx.n.a68604b984c664438981.v1` } } },
        expectedAuth: { token: `ltfx.n.a68604b984c664438981.v1` },
      },
      {
        name: "uses remote auth when gateway.mode is remote with URL",
        cfg: {
          gateway: {
            mode: "remote",
            auth: { token: `ltfx.n.eb501fed59d5d93226f8.v1` },
            remote: { url: `ltfx.n.381ad3a3d616596dd5f8.v1`, token: `ltfx.n.48c96f0e28e6af6b76ed.v1` },
          },
        },
        expectedAuth: { token: `ltfx.n.48c96f0e28e6af6b76ed.v1` },
      },
      {
        name: "ignores env token when gateway.mode is remote",
        cfg: {
          gateway: {
            mode: "remote",
            auth: { token: `ltfx.n.eb501fed59d5d93226f8.v1` },
            remote: { url: `ltfx.n.381ad3a3d616596dd5f8.v1`, token: `ltfx.n.b79f8018a1bfa2040be5.v1` },
          },
        },
        env: { token: `ltfx.n.25d37ba7752ae1d95b57.v1` },
        expectedAuth: { token: `ltfx.n.b79f8018a1bfa2040be5.v1` },
      },
      {
        name: "falls back to local auth when gateway.mode is remote but URL is missing",
        cfg: {
          gateway: {
            mode: "remote",
            auth: { token: `ltfx.n.ae843c293e59230756e3.v1` },
            remote: { token: `ltfx.n.b782c20a93bdaceaa5e0.v1` },
          },
        },
        expectedAuth: { token: `ltfx.n.ae843c293e59230756e3.v1` },
      },
      {
        name: "uses remote password when env is unset",
        cfg: {
          gateway: {
            mode: "remote",
            remote: { url: `ltfx.n.381ad3a3d616596dd5f8.v1`, password: `ltfx.n.ff01a57b6ce2163baf63.v1` },
          },
        },
        expectedAuth: { password: `ltfx.n.ff01a57b6ce2163baf63.v1` },
      },
      {
        name: "prefers env password over remote password",
        cfg: {
          gateway: {
            mode: "remote",
            remote: { url: `ltfx.n.381ad3a3d616596dd5f8.v1`, password: `ltfx.n.ff01a57b6ce2163baf63.v1` },
          },
        },
        env: { password: `ltfx.n.b208a30575f62d0d732c.v1` },
        expectedAuth: { password: `ltfx.n.b208a30575f62d0d732c.v1` },
      },
    ];

    await Promise.all(
      cases.map(async (testCase) => {
        const target = resolveGatewayProbeTarget(testCase.cfg);
        const result = resolveGatewayProbeAuthSafe({
          cfg: testCase.cfg,
          env: makeProbeEnv(testCase.env),
          mode: target.mode,
        });
        expect(result.auth, testCase.name).toEqual(testCase.expectedAuth);
      }),
    );
  });

  it("adds warning finding when probe auth SecretRef is unavailable", () => {
    const cfg: OpenClawConfig = {
      gateway: {
        mode: "local",
        auth: {
          mode: "token",
          token: { source: "env", provider: "default", id: "MISSING_GATEWAY_TOKEN" },
        },
      },
      secrets: {
        providers: {
          default: { source: "env" },
        },
      },
    };

    const result = resolveGatewayProbeAuthSafe({
      cfg,
      mode: "local",
      env: {},
    });
    const warning = requireProbeAuthWarning(
      collectDeepProbeFindings({
        deep: {
          gateway: {
            attempted: true,
            url: `ltfx.n.0edbee82f0824a1ed09b.v1`,
            ok: true,
            error: null,
            close: null,
          },
        },
        authWarning: result.warning,
      }),
    );
    expect(warning.severity).toBe("warn");
    expect(warning.detail).toContain("gateway.auth.token");
  });
});
