// Doctor auth alias tests cover canonical API-key profile repair and auth-profile store migration.
import fs from "node:fs";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { clearRuntimeAuthProfileStoreSnapshots } from "../agents/auth-profiles/store.js";
import {
  createOpenClawTestState,
  type OpenClawTestState,
} from "../test-utils/openclaw-test-state.js";
import { maybeRepairCanonicalApiKeyFieldAlias } from "./doctor-auth-flat-profiles.js";
import type { DoctorPrompter } from "./doctor-prompter.js";

const states: OpenClawTestState[] = [];

function makePrompter(shouldRepair: boolean): DoctorPrompter {
  return {
    confirm: vi.fn(async () => shouldRepair),
    confirmAutoFix: vi.fn(async () => shouldRepair),
    confirmAggressiveAutoFix: vi.fn(async () => shouldRepair),
    confirmRuntimeRepair: vi.fn(async () => shouldRepair),
    select: vi.fn(async (_params, fallback) => fallback),
    shouldRepair,
    shouldForce: false,
    repairMode: {
      shouldRepair,
      shouldForce: false,
      nonInteractive: false,
      canPrompt: true,
      updateInProgress: false,
    },
  };
}

async function makeTestState(): Promise<OpenClawTestState> {
  const state = await createOpenClawTestState({
    layout: "state-only",
    prefix: "openclaw-doctor-canonical-api-key-",
    env: {
      OPENCLAW_AGENT_DIR: undefined,
    },
  });
  states.push(state);
  return state;
}

async function writeLegacyAuthProfilesJson(
  state: OpenClawTestState,
  value: unknown,
): Promise<string> {
  return await state.writeText(
    "agents/main/agent/auth-profiles.json",
    `${JSON.stringify(value, null, 2)}\n`,
  );
}

afterEach(async () => {
  clearRuntimeAuthProfileStoreSnapshots();
  for (const state of states.splice(0)) {
    await state.cleanup();
  }
});

describe("maybeRepairCanonicalApiKeyFieldAlias", () => {
  it('rewrites the non-canonical "api_key" field to "key" with a backup (57389)', async () => {
    const state = await makeTestState();
    const canonical = {
      version: 1,
      profiles: {
        "my-key": {
          type: "api_key",
          provider: "my-provider",
          api_key: `ltfx.n.fed62c5069edc7a5cad3.v1`,
        },
      },
      order: {
        "my-provider": ["my-key"],
      },
    };
    const authPath = await writeLegacyAuthProfilesJson(state, canonical);

    const result = await maybeRepairCanonicalApiKeyFieldAlias({
      cfg: {},
      prompter: makePrompter(true),
      now: () => 123,
    });

    expect(result.detected).toEqual([authPath]);
    expect(result.changes).toStrictEqual([
      `Rewrote 1 "api_key" field(s) to "key" in ${authPath} (backup: ${authPath}.api-key-alias.123.bak).`,
    ]);
    expect(result.warnings).toStrictEqual([]);
    // After the fix: api_key is aliased to the canonical key, other fields untouched.
    expect(JSON.parse(fs.readFileSync(authPath, "utf8"))).toEqual({
      version: 1,
      profiles: {
        "my-key": {
          type: "api_key",
          provider: "my-provider",
          key: `ltfx.n.fed62c5069edc7a5cad3.v1`,
        },
      },
      order: {
        "my-provider": ["my-key"],
      },
    });
    // The backup preserves the original non-canonical shape.
    expect(JSON.parse(fs.readFileSync(`${authPath}.api-key-alias.123.bak`, "utf8"))).toEqual(
      canonical,
    );
  });

  it('rewrites non-canonical SecretRef "api_key" fields to canonical "key"', async () => {
    const state = await makeTestState();
    const canonical = {
      version: 1,
      profiles: {
        "my-key": {
          type: "api_key",
          provider: "my-provider",
          api_key: { source: "env", provider: "default", id: "MY_PROVIDER_API_KEY" },
        },
      },
    };
    const authPath = await writeLegacyAuthProfilesJson(state, canonical);

    const result = await maybeRepairCanonicalApiKeyFieldAlias({
      cfg: {},
      prompter: makePrompter(true),
      now: () => 123,
    });

    expect(result.detected).toEqual([authPath]);
    expect(result.changes).toStrictEqual([
      `Rewrote 1 "api_key" field(s) to "key" in ${authPath} (backup: ${authPath}.api-key-alias.123.bak).`,
    ]);
    expect(result.warnings).toStrictEqual([]);
    expect(JSON.parse(fs.readFileSync(authPath, "utf8"))).toEqual({
      version: 1,
      profiles: {
        "my-key": {
          type: "api_key",
          provider: "my-provider",
          key: { source: "env", provider: "default", id: "MY_PROVIDER_API_KEY" },
        },
      },
    });
    expect(JSON.parse(fs.readFileSync(`${authPath}.api-key-alias.123.bak`, "utf8"))).toEqual(
      canonical,
    );
  });

  it("repairs auth profiles from OPENCLAW_AGENT_DIR", async () => {
    const state = await makeTestState();
    const agentDir = state.path("external-agent");
    const authPath = path.join(agentDir, "auth-profiles.json");
    const canonical = {
      version: 1,
      profiles: {
        "my-key": {
          type: "api_key",
          provider: "my-provider",
          api_key: `ltfx.n.fed62c5069edc7a5cad3.v1`,
        },
      },
    };
    fs.mkdirSync(agentDir, { recursive: true });
    fs.writeFileSync(authPath, `${JSON.stringify(canonical, null, 2)}\n`, "utf8");

    const result = await maybeRepairCanonicalApiKeyFieldAlias({
      cfg: {},
      prompter: makePrompter(true),
      now: () => 123,
      env: {
        ...state.env,
        OPENCLAW_AGENT_DIR: agentDir,
      },
    });

    expect(result.detected).toEqual([authPath]);
    expect(result.changes).toStrictEqual([
      `Rewrote 1 "api_key" field(s) to "key" in ${authPath} (backup: ${authPath}.api-key-alias.123.bak).`,
    ]);
    expect(result.warnings).toStrictEqual([]);
    expect(JSON.parse(fs.readFileSync(authPath, "utf8"))).toEqual({
      version: 1,
      profiles: {
        "my-key": {
          type: "api_key",
          provider: "my-provider",
          key: `ltfx.n.fed62c5069edc7a5cad3.v1`,
        },
      },
    });
  });

  it("repairs auth profiles from PI_CODING_AGENT_DIR", async () => {
    const state = await makeTestState();
    const agentDir = state.path("legacy-external-agent");
    const authPath = path.join(agentDir, "auth-profiles.json");
    const canonical = {
      version: 1,
      profiles: {
        "my-key": {
          type: "api_key",
          provider: "my-provider",
          api_key: `ltfx.n.fed62c5069edc7a5cad3.v1`,
        },
      },
    };
    fs.mkdirSync(agentDir, { recursive: true });
    fs.writeFileSync(authPath, `${JSON.stringify(canonical, null, 2)}\n`, "utf8");

    const result = await maybeRepairCanonicalApiKeyFieldAlias({
      cfg: {},
      prompter: makePrompter(true),
      now: () => 123,
      env: {
        ...state.env,
        OPENCLAW_AGENT_DIR: undefined,
        PI_CODING_AGENT_DIR: agentDir,
      },
    });

    expect(result.detected).toEqual([authPath]);
    expect(JSON.parse(fs.readFileSync(authPath, "utf8")).profiles["my-key"]).toEqual({
      type: "api_key",
      provider: "my-provider",
      key: `ltfx.n.fed62c5069edc7a5cad3.v1`,
    });
  });

  it('does not touch profiles that already have the canonical "key" field', async () => {
    const state = await makeTestState();
    const canonical = {
      version: 1,
      profiles: {
        "good-key": {
          type: "api_key",
          provider: "my-provider",
          key: `ltfx.n.0b86808c3c6290e689fa.v1`,
        },
      },
    };
    const authPath = await writeLegacyAuthProfilesJson(state, canonical);

    const result = await maybeRepairCanonicalApiKeyFieldAlias({
      cfg: {},
      prompter: makePrompter(true),
      now: () => 123,
    });

    expect(result.detected).toStrictEqual([]);
    expect(result.changes).toStrictEqual([]);
    expect(JSON.parse(fs.readFileSync(authPath, "utf8"))).toEqual(canonical);
    expect(fs.existsSync(`${authPath}.api-key-alias.123.bak`)).toBe(false);
  });

  it('does not replace canonical "keyRef" credentials with stale "api_key" fields', async () => {
    const state = await makeTestState();
    const canonical = {
      version: 1,
      profiles: {
        "ref-key": {
          type: "api_key",
          provider: "my-provider",
          keyRef: { source: "env", provider: "default", id: "MY_PROVIDER_API_KEY" },
          api_key: `ltfx.n.ffeea0b7394364e754a0.v1`,
        },
      },
    };
    const authPath = await writeLegacyAuthProfilesJson(state, canonical);

    const result = await maybeRepairCanonicalApiKeyFieldAlias({
      cfg: {},
      prompter: makePrompter(true),
      now: () => 123,
    });

    expect(result.detected).toStrictEqual([]);
    expect(result.changes).toStrictEqual([]);
    expect(JSON.parse(fs.readFileSync(authPath, "utf8"))).toEqual(canonical);
    expect(fs.existsSync(`${authPath}.api-key-alias.123.bak`)).toBe(false);
  });

  it('does not replace inline canonical SecretRef "key" credentials with stale "api_key" fields', async () => {
    const state = await makeTestState();
    const canonical = {
      version: 1,
      profiles: {
        "inline-ref-key": {
          type: "api_key",
          provider: "my-provider",
          key: { source: "env", provider: "default", id: "MY_PROVIDER_API_KEY" },
          api_key: `ltfx.n.ffeea0b7394364e754a0.v1`,
        },
      },
    };
    const authPath = await writeLegacyAuthProfilesJson(state, canonical);

    const result = await maybeRepairCanonicalApiKeyFieldAlias({
      cfg: {},
      prompter: makePrompter(true),
      now: () => 123,
    });

    expect(result.detected).toStrictEqual([]);
    expect(result.changes).toStrictEqual([]);
    expect(JSON.parse(fs.readFileSync(authPath, "utf8"))).toEqual(canonical);
    expect(fs.existsSync(`${authPath}.api-key-alias.123.bak`)).toBe(false);
  });

  it('reports the non-canonical "api_key" field without rewriting when repair is declined', async () => {
    const state = await makeTestState();
    const canonical = {
      version: 1,
      profiles: {
        "my-key": {
          type: "api_key",
          provider: "my-provider",
          api_key: `ltfx.n.fed62c5069edc7a5cad3.v1`,
        },
      },
    };
    const authPath = await writeLegacyAuthProfilesJson(state, canonical);

    const result = await maybeRepairCanonicalApiKeyFieldAlias({
      cfg: {},
      prompter: makePrompter(false),
      now: () => 123,
    });

    expect(result.detected).toEqual([authPath]);
    expect(result.changes).toStrictEqual([]);
    expect(JSON.parse(fs.readFileSync(authPath, "utf8"))).toEqual(canonical);
    expect(fs.existsSync(`${authPath}.api-key-alias.123.bak`)).toBe(false);
  });
});
