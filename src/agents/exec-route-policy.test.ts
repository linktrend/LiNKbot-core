import { mkdtempSync, realpathSync, rmSync, symlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { decideExecRoute, screenExecCommand } from "./exec-route-policy.js";

const executable = realpathSync(process.execPath);
const adapter = {
  id: "profile-wrapper",
  target: "gateway" as const,
  executable,
  argvPrefix: ["wrapper"],
  environment: { PATH: "/usr/local/bin:/usr/bin:/bin" },
};

describe("generic exec route policy", () => {
  it.each(["main", "second-agent", "lisa-derived-clone"])(
    "%s applies its own STOP policy before either route",
    async () => {
      const screen = await screenExecCommand({
        command: "cat .ssh/id_rsa",
        denylist: [{ pattern: "cat .ssh/*" }],
      });
      expect(screen).toMatchObject({ allowed: false, reason: "stop-list" });
      expect(
        decideExecRoute({
          secureRouting: true,
          screen,
          configuredTarget: "auto",
          elevatedRequested: true,
          sandboxRequired: true,
        }),
      ).toEqual({ kind: "denied", reason: "stop-list" });
    },
  );

  it("selects a structural profile adapter and rebuilds dynamic argv without elevated mode", async () => {
    const screen = await screenExecCommand({
      command: `${executable} wrapper --query 'dynamic value'`,
    });
    expect(screen.allowed).toBe(true);
    const route = decideExecRoute({
      secureRouting: true,
      screen,
      configuredTarget: "auto",
      elevatedRequested: false,
      sandboxRequired: true,
      hostAdapters: [adapter],
    });
    expect(route).toMatchObject({
      kind: "host-adapter",
      target: "gateway",
      bindingId: "profile-wrapper",
      environment: adapter.environment,
    });
    expect(route.kind === "host-adapter" && route.enforcedCommand).toContain("'dynamic value'");
  });

  it("routes adapter near-matches and secure profiles with zero adapters to sandbox", async () => {
    const nearMatch = await screenExecCommand({ command: `${executable} other --query value` });
    expect(
      decideExecRoute({
        secureRouting: true,
        screen: nearMatch,
        configuredTarget: "auto",
        elevatedRequested: false,
        sandboxRequired: true,
        hostAdapters: [adapter],
      }),
    ).toEqual({ kind: "sandbox" });
    const noAdapter = await screenExecCommand({ command: "printf harmless" });
    expect(
      decideExecRoute({
        secureRouting: true,
        screen: noAdapter,
        configuredTarget: "auto",
        elevatedRequested: false,
        sandboxRequired: true,
      }),
    ).toEqual({ kind: "sandbox" });
  });

  it("routes operators and env-prefix near-matches away from the adapter", async () => {
    for (const command of [
      `${executable} wrapper --query value; id`,
      `env X=1 ${executable} wrapper --query value`,
    ]) {
      const screen = await screenExecCommand({ command });
      expect(
        decideExecRoute({
          secureRouting: true,
          screen,
          configuredTarget: "auto",
          elevatedRequested: false,
          sandboxRequired: true,
          hostAdapters: [adapter],
        }),
      ).not.toMatchObject({ kind: "host-adapter" });
    }
  });

  it("denies opaque expansion and rejects a symlink executable near-match", async () => {
    const opaque = await screenExecCommand({ command: `${executable} wrapper --query $(id)` });
    expect(opaque).toMatchObject({ allowed: false, reason: "opaque" });
    expect(
      decideExecRoute({
        secureRouting: true,
        screen: opaque,
        configuredTarget: "auto",
        elevatedRequested: false,
        sandboxRequired: true,
        hostAdapters: [adapter],
      }),
    ).toEqual({ kind: "denied", reason: "opaque" });

    const directory = mkdtempSync(path.join(tmpdir(), "exec-route-adapter-"));
    try {
      const executableLink = path.join(directory, "wrapper-link");
      symlinkSync("/bin/echo", executableLink);
      const screen = await screenExecCommand({
        command: `${executableLink} wrapper --query value`,
      });
      expect(
        decideExecRoute({
          secureRouting: true,
          screen,
          configuredTarget: "auto",
          elevatedRequested: false,
          sandboxRequired: true,
          hostAdapters: [adapter],
        }),
      ).toEqual({ kind: "sandbox" });
    } finally {
      rmSync(directory, { recursive: true, force: true });
    }
  });

  it("keeps an unconfigured legacy profile on its existing direct route", () => {
    expect(
      decideExecRoute({
        secureRouting: false,
        configuredTarget: "gateway",
        elevatedRequested: false,
        sandboxRequired: false,
      }),
    ).toEqual({ kind: "host-direct", target: "gateway" });
  });
});
