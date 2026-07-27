import { spawn, type ChildProcess } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { mintFakeToken, startSkillsFakeHttp } from "../../../extensions/linkskills/fake/index.mjs";
import { SkillsFakeService } from "../../../extensions/linkskills/fake/service.mjs";

const fakeCliPath = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../../../extensions/linkskills/fake/cli.mjs",
);

export type SkillsFakeHandle = {
  mode: "in-process" | "child-process";
  baseUrl: string;
  port: number;
  pid?: number;
  service?: SkillsFakeService;
  stop: () => Promise<void>;
  invoke: (
    operation: string,
    body?: Record<string, unknown>,
    opts?: { authorization?: string },
  ) => Promise<{ status: number; body: Record<string, unknown> }>;
  health: () => Promise<Record<string, unknown>>;
  negotiateVersion: (body: Record<string, unknown>) => Promise<Record<string, unknown>>;
};

export { mintFakeToken };

/**
 * Valid sanitized claim used by Skills fake integration tests.
 */
export function fixtureSkillsClaim(
  overrides: Record<string, unknown> = {},
): Record<string, unknown> {
  return {
    actor_id: "actor:fixture-lisa-01",
    actor_kind: "openclaw_agent",
    org_id: "org:fixture-studio-01",
    scopes: ["skills:read", "skills:write"],
    audience: "linkskills",
    exp: 1893456000,
    credential_id: "cred:fixture-skills-01",
    ...overrides,
  };
}

/**
 * Start Skills fake in-process on an ephemeral 127.0.0.1 port.
 */
export async function startInProcessSkillsFake(opts?: {
  throttleAfter?: number;
}): Promise<SkillsFakeHandle> {
  const service = new SkillsFakeService({
    throttleAfter: opts?.throttleAfter,
  });
  const http = await startSkillsFakeHttp({ service });
  return wrapHttpHandle({
    mode: "in-process",
    baseUrl: http.baseUrl,
    port: http.port,
    service: http.service,
    stop: () => http.stop(),
  });
}

/**
 * Spawn a process-isolated Skills fake HTTP child (cli.mjs http).
 * Prefer this when proving process/port isolation.
 */
export async function startChildProcessSkillsFake(opts?: {
  throttleAfter?: number;
  env?: NodeJS.ProcessEnv;
}): Promise<SkillsFakeHandle> {
  const env: NodeJS.ProcessEnv = { ...process.env, ...opts?.env };
  if (opts?.throttleAfter != null) {
    env.LINKSKILLS_FAKE_THROTTLE_AFTER = String(opts.throttleAfter);
  }

  const child: ChildProcess = spawn(process.execPath, [fakeCliPath, "http"], {
    env,
    stdio: ["ignore", "pipe", "pipe"],
  });

  const startup = await readStartupLine(child);
  const baseUrl = String(startup.baseUrl);
  const port = Number(startup.port);

  let stopped = false;
  const stop = async () => {
    if (stopped) {
      return;
    }
    stopped = true;
    child.removeAllListeners("exit");
    if (!child.killed) {
      child.kill("SIGTERM");
    }
    await new Promise<void>((resolve) => {
      const done = () => resolve();
      child.once("exit", done);
      setTimeout(() => {
        if (!child.killed) {
          child.kill("SIGKILL");
        }
        done();
      }, 2000).unref?.();
    });
  };

  return wrapHttpHandle({
    mode: "child-process",
    baseUrl,
    port,
    pid: child.pid,
    stop,
  });
}

function wrapHttpHandle(input: {
  mode: "in-process" | "child-process";
  baseUrl: string;
  port: number;
  pid?: number;
  service?: SkillsFakeService;
  stop: () => Promise<void>;
}): SkillsFakeHandle {
  const invoke = async (
    operation: string,
    body: Record<string, unknown> = {},
    opts: { authorization?: string } = {},
  ) => {
    const response = await fetch(`${input.baseUrl}/v1/${operation}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        ...(opts.authorization ? { authorization: opts.authorization } : {}),
      },
      body: JSON.stringify(body),
    });
    const json = (await response.json()) as Record<string, unknown>;
    return { status: response.status, body: json };
  };

  return {
    mode: input.mode,
    baseUrl: input.baseUrl,
    port: input.port,
    pid: input.pid,
    service: input.service,
    stop: input.stop,
    invoke,
    async health() {
      const response = await fetch(`${input.baseUrl}/health`);
      return (await response.json()) as Record<string, unknown>;
    },
    async negotiateVersion(body) {
      const response = await fetch(`${input.baseUrl}/v1/version/negotiate`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      return (await response.json()) as Record<string, unknown>;
    },
  };
}

async function readStartupLine(child: ChildProcess): Promise<Record<string, unknown>> {
  return await new Promise((resolve, reject) => {
    let stdout = "";
    let stderr = "";
    let settled = false;
    const timer = setTimeout(() => {
      if (settled) {
        return;
      }
      settled = true;
      reject(new Error(`Skills fake child startup timeout. stderr=${stderr}`));
      child.kill("SIGKILL");
    }, 10_000);

    child.stdout?.on("data", (chunk: Buffer) => {
      stdout += chunk.toString("utf8");
      const nl = stdout.indexOf("\n");
      if (nl >= 0 && !settled) {
        settled = true;
        clearTimeout(timer);
        try {
          resolve(JSON.parse(stdout.slice(0, nl)) as Record<string, unknown>);
        } catch (err) {
          reject(err);
        }
      }
    });
    child.stderr?.on("data", (chunk: Buffer) => {
      stderr += chunk.toString("utf8");
    });
    child.on("error", (err) => {
      if (settled) {
        return;
      }
      settled = true;
      clearTimeout(timer);
      reject(err);
    });
    child.on("exit", (code) => {
      if (settled) {
        return;
      }
      settled = true;
      clearTimeout(timer);
      reject(new Error(`Skills fake child exited early code=${code} stderr=${stderr}`));
    });
  });
}
