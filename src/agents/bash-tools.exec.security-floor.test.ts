/**
 * Exec security floor tests.
 * Verifies tool config and exec-approvals policy combine by tightening
 * security/ask rather than silently broadening execution.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  onInternalDiagnosticEvent,
  type DiagnosticEventPayload,
} from "../infra/diagnostic-events.js";
import type { ExecAutoReviewer } from "../infra/exec-auto-review.js";
import { captureEnv, deleteTestEnvValue, setTestEnvValue } from "../test-utils/env.js";
import { resetProcessRegistryForTests } from "./bash-process-registry.test-support.js";
import { createExecTool } from "./bash-tools.exec.js";
import { decideExecRoute, screenExecCommand } from "./exec-route-policy.js";
import { callGatewayTool } from "./tools/gateway.js";

vi.mock("./tools/gateway.js", () => ({
  callGatewayTool: vi.fn(),
  readGatewayCallOptions: vi.fn(() => ({})),
}));

function installAllowlistedGogFixture(root: string): string {
  const binDir = path.join(root, "bin");
  fs.mkdirSync(binDir, { recursive: true });
  const gogPath = path.join(binDir, "gog");
  fs.writeFileSync(gogPath, "#!/bin/sh\nprintf 'gog-ok %s\\n' \"$*\"\n", { mode: 0o755 });
  writeExecApprovalsFixture(root, {
    version: 1,
    defaults: { security: "allowlist", ask: "off", askFallback: "allowlist" },
    agents: { "*": { allowlist: [{ pattern: gogPath }] } },
  });
  return binDir;
}

function writeExecApprovalsFixture(root: string, file: Record<string, unknown>): void {
  const stateDir = process.env.OPENCLAW_STATE_DIR ?? path.join(root, "state");
  fs.mkdirSync(stateDir, { recursive: true });
  fs.writeFileSync(path.join(stateDir, "exec-approvals.json"), `${JSON.stringify(file)}\n`);
}

function writeDenyExecApprovalsFixture(root: string): void {
  writeExecApprovalsFixture(root, {
    version: 1,
    defaults: { security: "deny", ask: "off" },
    agents: {},
  });
}

function writeFullAskExecApprovalsFixture(root: string): void {
  writeExecApprovalsFixture(root, {
    version: 1,
    defaults: { security: "full", ask: "always" },
    agents: {},
  });
}

function installSecureAdapterFixture(
  root: string,
  policy: { security?: "allowlist" | "full"; ask?: "always" | "off" } = {},
): string {
  const binDir = path.join(root, "adapter-bin");
  fs.mkdirSync(binDir, { recursive: true });
  const wrapper = path.join(binDir, "profile-wrapper");
  fs.writeFileSync(
    wrapper,
    '#!/bin/sh\nprintf \'adapter-ok %s path=%s shell=%s leaked=%s\\n\' "$*" "$PATH" "${OPENCLAW_SHELL:-unset}" "${HOSTILE_ADAPTER_LEAK:-unset}"\n',
    { mode: 0o755 },
  );
  const executable = fs.realpathSync(wrapper);
  writeExecApprovalsFixture(root, {
    version: 1,
    defaults: { security: "full", ask: "off" },
    agents: {
      "*": {
        secureRouting: true,
        security: policy.security,
        ask: policy.ask,
        hostAdapters: [
          {
            id: "profile-wrapper",
            target: "gateway",
            executable,
            argvPrefix: ["read"],
            environment: { PATH: `${binDir}:/usr/bin:/bin` },
          },
        ],
      },
    },
  });
  return wrapper;
}

describe("exec security floor", () => {
  let envSnapshot: ReturnType<typeof captureEnv>;
  let tempRoot: string | undefined;

  beforeEach(() => {
    envSnapshot = captureEnv([
      "HOME",
      "USERPROFILE",
      "HOMEDRIVE",
      "HOMEPATH",
      "OPENCLAW_HOME",
      "OPENCLAW_STATE_DIR",
      "SHELL",
    ]);
    tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "openclaw-exec-security-floor-"));
    setTestEnvValue("HOME", tempRoot);
    setTestEnvValue("USERPROFILE", tempRoot);
    setTestEnvValue("OPENCLAW_HOME", tempRoot);
    setTestEnvValue("OPENCLAW_STATE_DIR", path.join(tempRoot, "state"));
    if (process.platform === "win32") {
      const parsed = path.parse(tempRoot);
      setTestEnvValue("HOMEDRIVE", parsed.root.slice(0, 2));
      setTestEnvValue("HOMEPATH", tempRoot.slice(2) || "\\");
    } else {
      deleteTestEnvValue("HOMEDRIVE");
      deleteTestEnvValue("HOMEPATH");
    }
    resetProcessRegistryForTests();
    vi.mocked(callGatewayTool).mockReset();
  });

  afterEach(() => {
    const dir = tempRoot;
    tempRoot = undefined;
    envSnapshot.restore();
    if (dir) {
      fs.rmSync(dir, { recursive: true, force: true, maxRetries: 5, retryDelay: 20 });
    }
  });

  it("ignores model-supplied allowlist security when configured security is full", async () => {
    const tool = createExecTool({
      security: "full",
      ask: "off",
    });

    const result = await tool.execute("call-1", {
      command: "echo hello",
      security: "allowlist",
      ask: "off",
    });

    expect(result.content[0]?.type).toBe("text");
    const text = (result.content[0] as { text?: string }).text ?? "";
    expect(text).not.toMatch(/exec denied/i);
    expect(text).not.toMatch(/allowlist miss/i);
    expect(text.trim()).toContain("hello");
  });

  it("runs a structural gateway adapter with an enforced command and fixed environment", async () => {
    const root = tempRoot ?? os.tmpdir();
    const wrapper = installSecureAdapterFixture(root, { security: "allowlist", ask: "always" });
    const events: DiagnosticEventPayload[] = [];
    const unsubscribe = onInternalDiagnosticEvent((event) => events.push(event));
    process.env.HOSTILE_ADAPTER_LEAK = "must-not-reach-adapter";
    try {
      const tool = createExecTool({ host: "gateway", security: "allowlist", ask: "always" });
      const command = `${wrapper} read --value 'dynamic value'`;
      const screen = await screenExecCommand({ command, env: process.env });
      expect(screen.allowed).toBe(true);
      if (screen.allowed) {
        const candidate = screen.plan.groups.flatMap((group) => group.candidates)[0];
        expect(candidate?.sourceSegment.argv.slice(1)).toEqual([
          "read",
          "--value",
          "dynamic value",
        ]);
        expect(candidate?.sourceSegment.resolution?.execution.resolvedRealPath).toBe(
          fs.realpathSync(wrapper),
        );
        expect(candidate?.sourceSegment.resolution?.wrapperChain).toEqual([]);
      }
      const plannedRoute = decideExecRoute({
        secureRouting: true,
        screen,
        configuredTarget: "gateway",
        elevatedRequested: false,
        sandboxRequired: false,
        hostAdapters: [
          {
            id: "profile-wrapper",
            target: "gateway",
            executable: fs.realpathSync(wrapper),
            argvPrefix: ["read"],
            environment: { PATH: `${path.dirname(wrapper)}:/usr/bin:/bin` },
          },
        ],
      });
      expect(plannedRoute).toMatchObject({ kind: "host-adapter" });
      const result = await tool.execute("call-secure-adapter", {
        command,
      });
      expect((result.content[0] as { text?: string }).text ?? "").toContain(
        "adapter-ok read --value dynamic value",
      );
      expect((result.content[0] as { text?: string }).text ?? "").toContain(
        "path=" + path.join(root, "adapter-bin") + ":/usr/bin:/bin shell=exec leaked=unset",
      );
      expect(events).toContainEqual(
        expect.objectContaining({
          action: "exec.route.decided",
          attributes: expect.objectContaining({
            execution_path: "host-adapter",
            adapter_binding: "verified",
          }),
        }),
      );
      expect(events).not.toContainEqual(
        expect.objectContaining({
          action: "exec.route.denied",
          attributes: expect.objectContaining({ execution_path: "host-adapter" }),
        }),
      );
      await expect(
        tool.execute("call-secure-adapter-env", {
          command: `${wrapper} read --value value`,
          env: { PATH: "/tmp/hostile" },
        }),
      ).rejects.toThrow(/does not accept caller environment overrides/);
    } finally {
      delete process.env.HOSTILE_ADAPTER_LEAK;
      unsubscribe();
    }
  });

  it("fails closed for secure non-adapter and STOP routes while legacy routing remains direct", async () => {
    const root = tempRoot ?? os.tmpdir();
    writeExecApprovalsFixture(root, {
      version: 1,
      agents: { "*": { secureRouting: true, denylist: [{ pattern: "printf *" }] } },
    });
    const secureTool = createExecTool({ host: "gateway", security: "full", ask: "off" });
    await expect(
      secureTool.execute("call-secure-stop", { command: "printf prohibited" }),
    ).rejects.toThrow(/prohibited command/);
    await expect(
      secureTool.execute("call-secure-sandbox", { command: "echo harmless" }),
    ).rejects.toThrow(/sandbox execution is required/);

    writeExecApprovalsFixture(root, { version: 1, agents: { "*": {} } });
    const legacyTool = createExecTool({ host: "gateway", security: "full", ask: "off" });
    const result = await legacyTool.execute("call-legacy-direct", { command: "printf legacy" });
    expect((result.content[0] as { text?: string }).text ?? "").toContain("legacy");
  });

  it("does not activate a host adapter from a binding with an execution-injection environment key", async () => {
    const root = tempRoot ?? os.tmpdir();
    const wrapper = installSecureAdapterFixture(root);
    writeExecApprovalsFixture(root, {
      version: 1,
      defaults: { security: "full", ask: "off" },
      agents: {
        "*": {
          secureRouting: true,
          hostAdapters: [
            {
              id: "unsafe-wrapper",
              target: "gateway",
              executable: fs.realpathSync(wrapper),
              argvPrefix: ["read"],
              environment: {
                PATH: `${path.dirname(wrapper)}:/usr/bin:/bin`,
                NODE_OPTIONS: "--require=/tmp/inject",
              },
            },
          ],
        },
      },
    });
    const events: DiagnosticEventPayload[] = [];
    const unsubscribe = onInternalDiagnosticEvent((event) => events.push(event));
    try {
      const tool = createExecTool({ host: "gateway", security: "full", ask: "off" });
      await expect(
        tool.execute("call-unsafe-adapter", { command: `${wrapper} read --value value` }),
      ).rejects.toThrow(/exec denied: host=gateway security=deny/i);
      expect(events).toContainEqual(
        expect.objectContaining({
          action: "exec.route.decided",
          attributes: expect.objectContaining({ execution_path: "host-direct" }),
        }),
      );
      expect(events).not.toContainEqual(
        expect.objectContaining({
          action: "exec.route.decided",
          attributes: expect.objectContaining({ execution_path: "host-adapter" }),
        }),
      );
    } finally {
      unsubscribe();
    }
  });

  it("enforces configured allowlist security when model also passes allowlist", async () => {
    const tool = createExecTool({
      security: "allowlist",
      ask: "off",
      safeBins: [],
    });

    await expect(
      tool.execute("call-2", {
        command: "echo hello",
        security: "allowlist",
        ask: "off",
      }),
    ).rejects.toThrow(/exec denied: allowlist miss/i);
  });

  it("ignores model-supplied ask overrides when configured ask is off", async () => {
    const root = tempRoot ?? os.tmpdir();
    const binDir = installAllowlistedGogFixture(root);
    const tool = createExecTool({
      host: "gateway",
      security: "allowlist",
      ask: "off",
      safeBins: [],
      pathPrepend: [binDir],
      messageProvider: "telegram",
      currentChannelId: "telegram:12345",
      accountId: "default",
    });

    const result = await tool.execute("call-model-ask-ignored", {
      command: "gog tasks add tasklist --title test",
      ask: "always",
    });

    expect(result.details.status).toBe("completed");
    expect((result.content[0] as { text?: string }).text ?? "").toContain(
      "gog-ok tasks add tasklist --title test",
    );
    expect(callGatewayTool).not.toHaveBeenCalled();
  });

  it("honors per-call ask hardening for trusted callers without messageProvider", async () => {
    const root = tempRoot ?? os.tmpdir();
    const binDir = installAllowlistedGogFixture(root);
    const tool = createExecTool({
      host: "gateway",
      security: "allowlist",
      ask: "off",
      safeBins: [],
      pathPrepend: [binDir],
    });

    const result = await tool.execute("call-trusted-ask-always", {
      command: "gog tasks add tasklist --title test",
      ask: "always",
    });

    expect(callGatewayTool).toHaveBeenCalled();
    expect(result.details.status).toBe("approval-pending");
  });

  it("ignores model-supplied deny security when configured security is allowlist", async () => {
    const tool = createExecTool({
      security: "allowlist",
      ask: "off",
      safeBins: [],
    });

    await expect(
      tool.execute("call-3", {
        command: "echo hello",
        security: "deny",
        ask: "off",
      }),
    ).rejects.toThrow(/exec denied: allowlist miss/i);
  });

  it("ignores model-supplied full security when configured security is deny", async () => {
    const tool = createExecTool({
      security: "deny",
      ask: "off",
    });

    await expect(
      tool.execute("call-4", {
        command: "echo hello",
        security: "full",
        ask: "off",
      }),
    ).rejects.toThrow(/exec denied/i);
  });

  it("records a redacted denial route for security policy blocks", async () => {
    const events: DiagnosticEventPayload[] = [];
    const unsubscribe = onInternalDiagnosticEvent((event) => events.push(event));
    try {
      const tool = createExecTool({
        host: "gateway",
        security: "deny",
        ask: "off",
      });

      await expect(
        tool.execute("call-denied-route", { command: "printf super-secret-value" }),
      ).rejects.toThrow("exec denied: host=gateway security=deny");

      const event = events.find(
        (candidate) =>
          candidate.type === "security.event" && candidate.action === "exec.route.denied",
      );
      expect(event?.type).toBe("security.event");
      if (event?.type === "security.event") {
        expect(event.outcome).toBe("denied");
        expect(event.attributes).toMatchObject({
          execution_path: "denied",
          host: "gateway",
          security: "deny",
        });
        expect(JSON.stringify(event)).not.toContain("super-secret-value");
      }
    } finally {
      unsubscribe();
    }
  });

  it("does not let host approval defaults deny implicit sandbox execution", async () => {
    writeDenyExecApprovalsFixture(tempRoot ?? os.tmpdir());
    const buildExecSpec = vi.fn(async () => ({
      argv: ["/bin/sh", "-lc", "printf sandbox-ok"],
      env: process.env,
      stdinMode: "pipe-closed" as const,
    }));
    const tool = createExecTool({
      host: "auto",
      sandbox: {
        containerName: "sandbox-host-approval-defaults-test",
        workspaceDir: tempRoot ?? "/tmp",
        containerWorkdir: "/workspace",
        buildExecSpec,
      },
    });

    const result = await tool.execute("call-sandbox-host-defaults", {
      command: "echo sandbox-ok",
    });

    expect(buildExecSpec).toHaveBeenCalledTimes(1);
    expect(result.content[0]?.type).toBe("text");
    const text = (result.content[0] as { text?: string }).text ?? "";
    expect(text).toContain("sandbox-ok");
  });

  it("honors configured deny mode before implicit sandbox execution", async () => {
    const buildExecSpec = vi.fn(async () => ({
      argv: ["/bin/sh", "-lc", "printf leaked"],
      env: process.env,
      stdinMode: "pipe-closed" as const,
    }));
    const tool = createExecTool({
      host: "auto",
      mode: "deny",
      sandbox: {
        containerName: "sandbox-deny-test",
        workspaceDir: tempRoot ?? "/tmp",
        containerWorkdir: "/workspace",
        buildExecSpec,
      },
    });

    await expect(
      tool.execute("call-mode-deny-sandbox", {
        command: "echo blocked",
      }),
    ).rejects.toThrow(/security=deny|exec denied/i);
    expect(buildExecSpec).not.toHaveBeenCalled();
  });

  it("lets normalized auto mode run implicit sandbox execution", async () => {
    const buildExecSpec = vi.fn(async () => ({
      argv: ["/bin/sh", "-lc", "printf sandbox-auto-ok"],
      env: process.env,
      stdinMode: "pipe-closed" as const,
    }));
    const tool = createExecTool({
      host: "auto",
      mode: "auto",
      sandbox: {
        containerName: "sandbox-auto-mode-test",
        workspaceDir: tempRoot ?? "/tmp",
        containerWorkdir: "/workspace",
        buildExecSpec,
      },
    });

    const result = await tool.execute("call-mode-auto-sandbox", {
      command: "echo sandbox-auto-ok",
    });

    expect(buildExecSpec).toHaveBeenCalledTimes(1);
    expect(result.content[0]?.type).toBe("text");
    const text = (result.content[0] as { text?: string }).text ?? "";
    expect(text).toContain("sandbox-auto-ok");
  });

  it("intersects normalized gateway auto mode with host approval deny defaults", async () => {
    writeDenyExecApprovalsFixture(tempRoot ?? os.tmpdir());
    const autoReviewer = vi.fn<ExecAutoReviewer>(async () => ({
      decision: "allow-once",
      risk: "low",
      rationale: "would otherwise run",
    }));
    const tool = createExecTool({
      host: "gateway",
      mode: "auto",
      safeBins: [],
      autoReviewer,
    });

    await expect(
      tool.execute("call-auto-mode-host-deny", {
        command: "echo blocked",
      }),
    ).rejects.toThrow(/security=deny|exec denied/i);
    expect(autoReviewer).not.toHaveBeenCalled();
  });

  it("uses agent-scoped host policy when clamping normalized modes", async () => {
    writeExecApprovalsFixture(tempRoot ?? os.tmpdir(), {
      version: 1,
      defaults: { security: "deny", ask: "off" },
      agents: { main: { security: "full", ask: "off" } },
    });
    const tool = createExecTool({
      host: "gateway",
      mode: "full",
      agentId: "main",
    });

    const result = await tool.execute("call-agent-host-policy", {
      command: "echo agent-ok",
    });

    expect(result.content[0]?.type).toBe("text");
    const text = (result.content[0] as { text?: string }).text ?? "";
    expect(text.trim()).toContain("agent-ok");
  });

  it("preserves host ask floors for elevated full gateway exec", async () => {
    writeFullAskExecApprovalsFixture(tempRoot ?? os.tmpdir());
    const calls: string[] = [];
    vi.mocked(callGatewayTool).mockImplementation(async (method) => {
      calls.push(method);
      if (method === "exec.approval.request") {
        return { status: "accepted", id: "approval-id" };
      }
      if (method === "exec.approval.waitDecision") {
        return { decision: null };
      }
      return { ok: true };
    });
    const tool = createExecTool({
      host: "gateway",
      security: "full",
      ask: "off",
      approvalRunningNoticeMs: 0,
      elevated: { enabled: true, allowed: true, defaultLevel: "full" },
    });

    const result = await tool.execute("call-elevated-full-host-ask-floor", {
      command: "echo ok",
      elevated: true,
    });

    expect(result.details.status).toBe("approval-pending");
    expect(calls).toContain("exec.approval.request");
  });

  it("honors normalized auto mode before elevated full bypass", async () => {
    const calls: string[] = [];
    vi.mocked(callGatewayTool).mockImplementation(async (method) => {
      calls.push(method);
      if (method === "exec.approval.request") {
        return { status: "accepted", id: "approval-id" };
      }
      if (method === "exec.approval.waitDecision") {
        return { decision: null };
      }
      return { ok: true };
    });
    const autoReviewer = vi.fn<ExecAutoReviewer>(async () => ({
      decision: "ask",
      risk: "high",
      rationale: "test reviewer asks for approval",
    }));
    const tool = createExecTool({
      host: "gateway",
      mode: "auto",
      safeBins: [],
      autoReviewer,
      elevated: { enabled: true, allowed: true, defaultLevel: "full" },
    });

    const result = await tool.execute("call-elevated-full-auto-mode", {
      command: "whoami",
      elevated: true,
    });

    expect(autoReviewer).toHaveBeenCalledWith(
      expect.objectContaining({
        command: "whoami",
        host: "gateway",
        reason: "allowlist-miss",
      }),
    );
    expect(result.details.status).toBe("approval-pending");
    expect(calls).toContain("exec.approval.request");
  });

  it.each(["on-miss", "off"] as const)(
    "keeps auto review enabled when legacy ask=%s does not strengthen auto mode",
    async (ask) => {
      const calls: string[] = [];
      vi.mocked(callGatewayTool).mockImplementation(async (method) => {
        calls.push(method);
        if (method === "exec.approval.request") {
          return { status: "accepted", id: "approval-id" };
        }
        if (method === "exec.approval.waitDecision") {
          return { decision: null };
        }
        return { ok: true };
      });
      const autoReviewer = vi.fn<ExecAutoReviewer>(async () => ({
        decision: "ask",
        risk: "high",
        rationale: "test reviewer asks for approval",
      }));
      const tool = createExecTool({
        host: "gateway",
        mode: "auto",
        safeBins: [],
        autoReviewer,
      });

      const result = await tool.execute(`call-auto-review-${ask}`, {
        command: "whoami",
        ask,
      });

      expect(autoReviewer).toHaveBeenCalledWith(
        expect.objectContaining({
          command: "whoami",
          host: "gateway",
          reason: "allowlist-miss",
        }),
      );
      expect(result.details.status).toBe("approval-pending");
      expect(calls).toContain("exec.approval.request");
    },
  );
});
