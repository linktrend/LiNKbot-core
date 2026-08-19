import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { LISA_JOB_CATALOGUE } from "../jobs/lisa-job-catalogue.js";
import { LISA_OPS_LIVE_ACTION_DEFAULTS } from "../ship-pull-contract.js";
import { createFakeLisaProviderPorts, ownDataFactsForProvider } from "./fakes.js";
import { authorizeLisaProviderOperation } from "./policy.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const lisaRoot = path.resolve(here, "../..");

function readLisa(relPath: string): string {
  return readFileSync(path.join(lisaRoot, relPath), "utf8");
}

function providerPolicySources(): string[] {
  return readdirSync(here)
    .filter((name) => name.endsWith(".ts") && !name.endsWith(".test.ts") && name !== "wiring.ts")
    .map((name) => readFileSync(path.join(here, name), "utf8"));
}

describe("P-09 operating-model non-regression ledger", () => {
  it("preserves model routing, Cursor ACP, sandbox, Google, and approval contracts", () => {
    const tools = readLisa("Personality files/TOOLS.md");
    const agents = readLisa("Personality files/AGENTS.md");
    const routing = readLisa("ops/model-routing.contract.json");
    const cursor = readLisa("Personality files/tools/cursor-acp.md");
    const safe = readLisa("Personality files/tools/lisa-safe.md");

    expect(routing).toContain("openai/gpt-5.6-luna");
    expect(routing).toContain('"userVisible": false');
    expect(routing).toMatch(/Nemotron/u);
    expect(routing).toContain('"enabledInDefaults": false');
    expect(tools).toContain("sandbox.mode: non-main");
    expect(tools).toContain("lisa@linktrend.media");
    expect(tools).toContain("tools/bin/lisa-safe");
    expect(tools).toContain("tools/bin/lisa-carlos-tasks");
    expect(tools).toContain("calusa@linktrend.media");
    expect(agents).toContain("development-orchestrator");
    expect(agents).toContain("Main must not spawn `lisa-cron` as a subagent");
    expect(agents).toContain("Never author your own skills");
    expect(agents).toContain("gws auth*");
    expect(cursor).toContain("Cursor ACP");
    expect(cursor).toContain("apply_patch");
    expect(safe).toContain("gws auth*");
    expect(safe).toContain("gws keep*");
  });

  it("preserves planning HOLD, memory privacy, jobs, Personality, and the runtime boundary", () => {
    const agents = readLisa("Personality files/AGENTS.md");
    const identity = readLisa("Personality files/IDENTITY.md");
    const shipPull = readLisa("ops/ship-pull-contract.ts");
    expect(agents).toContain("Progressive Disclosure");
    expect(agents).toContain("MEMORY.md");
    expect(agents).toContain("battery-monitor");
    expect(agents).toContain("Retired Ship, Pull, Repair Dispatcher, and `lisa-heartbeat-45`");
    expect(agents).toContain("Native `heartbeat.every` is disabled");
    expect(identity).toMatch(/v1\.3/u);
    expect(LISA_JOB_CATALOGUE.sourceStatus).toBe("SOURCE_ONLY");
    expect(LISA_JOB_CATALOGUE.deliveryMode).toBe("none");
    expect(LISA_JOB_CATALOGUE.entries.every((entry) => entry.enabled === false)).toBe(true);
    expect(LISA_OPS_LIVE_ACTION_DEFAULTS.heartbeatLiveActionAllowed).toBe(false);
    expect(shipPull).toContain("~/.openclaw-lisa");
    expect(shipPull).toMatch(/No action may target live Lisa/u);
  });

  it("keeps provider policy from bypassing the ledger or claiming live activation", () => {
    const sources = providerPolicySources().join("\n");
    expect(sources).not.toMatch(/extensions\/link/u);
    expect(sources).not.toMatch(/openclaw-lisa/u);
    expect(sources).not.toMatch(/LaunchAgent/u);
    expect(sources).not.toMatch(/gws auth/u);
    expect(sources).not.toMatch(/sessions_spawn/u);
    expect(sources).not.toMatch(/Nemotron/u);
    expect(sources).not.toMatch(/skill-creator/u);
    expect(sources).not.toMatch(/clawhub/u);
    const wiring = readFileSync(path.join(here, "wiring.ts"), "utf8");
    expect(wiring).toMatch(/extensions\/linkplatform\/api\.js/u);
    expect(wiring).toMatch(/extensions\/linkbrain\/api\.js/u);
    expect(wiring).toMatch(/extensions\/linkskills\/api\.js/u);
    expect(wiring).toMatch(/extensions\/linklibraries\/api\.js/u);
    expect(wiring).toMatch(/extensions\/linkautowork\/api\.js/u);
    expect(wiring).not.toMatch(/extensions\/link\w+\/src\//u);
    expect(wiring).not.toMatch(/LaunchAgent/u);
    expect(wiring).not.toMatch(/gws auth/u);
    expect(wiring).not.toMatch(/sessions_spawn/u);
    const accepted = authorizeLisaProviderOperation(
      {
        agentId: "main",
        facts: ownDataFactsForProvider("platform"),
        operation: { provider: "platform", name: "platform.consume_facts" },
        privacyClass: "private_health",
        payload: { records: [{ id: "identity-only" }] },
      },
      createFakeLisaProviderPorts({ nowMs: 1_800_000_000_000 }),
    );
    expect(accepted).toMatchObject({
      status: "accepted",
      advisory: true,
      executionAuthority: "none",
      scheduleEnabled: false,
      helperCredentialGranted: false,
    });
  });
});
