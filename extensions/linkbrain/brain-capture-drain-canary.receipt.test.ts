/**
 * Locks Brain capture-drain canary receipt schema + worker-only architecture.
 * Does not contact stage/Platform or invent an MCP drain tool.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { LINKBRAIN_MCP_TOOL_ALLOWLIST } from "./mcp-tool-filter.js";
import { LINKBRAIN_MCP_CAPTURE_DRAIN_TOOLS } from "./src/feature-flags.js";

const receiptDir = join(
  dirname(fileURLToPath(import.meta.url)),
  "../../docs/execution/openclawdevelopmentplan01/receipts",
);

function readJson(name: string): unknown {
  return JSON.parse(readFileSync(join(receiptDir, name), "utf8"));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function assertString(value: unknown, label: string): string {
  expect(typeof value, label).toBe("string");
  return value as string;
}

function assertBoolean(value: unknown, label: string): boolean {
  expect(typeof value, label).toBe("boolean");
  return value as boolean;
}

describe("brain-capture-drain-canary receipt + architecture lock", () => {
  it("keeps captureDrain as worker-only (empty MCP drain tool list)", () => {
    expect([...LINKBRAIN_MCP_CAPTURE_DRAIN_TOOLS]).toEqual([]);
    expect(LINKBRAIN_MCP_TOOL_ALLOWLIST.some((name) => /drain/i.test(name))).toBe(false);
    expect(LINKBRAIN_MCP_TOOL_ALLOWLIST).toContain("brain_capture_batch");
  });

  it("schema and FAKE example agree on worker_outbox receipt contract", () => {
    const schema = readJson("brain-capture-drain-canary.schema.json");
    const example = readJson("brain-capture-drain-canary.example.fake.json");
    expect(isRecord(schema)).toBe(true);
    expect(isRecord(example)).toBe(true);
    if (!isRecord(schema) || !isRecord(example)) {
      return;
    }

    expect(schema.title).toBe("BrainCaptureDrainCanaryReceipt");
    const required = schema.required;
    expect(Array.isArray(required)).toBe(true);
    for (const key of required as string[]) {
      expect(example, `example missing required ${key}`).toHaveProperty(key);
    }

    expect(example.schemaVersion).toBe("1.0.0");
    expect(example.receiptType).toBe("brain-capture-drain-canary");
    expect(assertString(example.canaryId, "canaryId").length).toBeGreaterThanOrEqual(8);

    const architecture = example.architecture;
    expect(isRecord(architecture)).toBe(true);
    if (!isRecord(architecture)) {
      return;
    }
    expect(architecture.drainMode).toBe("worker_outbox");
    expect(assertBoolean(architecture.mcpDrainToolExists, "mcpDrainToolExists")).toBe(false);
    expect(architecture.captureWriteTool).toBe("brain_capture_batch");
    expect(assertString(architecture.drainExecutablePath, "drainExecutablePath")).toMatch(
      /linkbrain/,
    );
    expect(assertString(architecture.drainExecutablePath, "drainExecutablePath")).not.toMatch(
      /brain_.*drain/i,
    );

    const tiers = example.evidenceTier;
    expect(isRecord(tiers)).toBe(true);
    if (!isRecord(tiers)) {
      return;
    }
    expect(tiers.claimed).toBe("FAKE");
    expect(tiers.exercised).toEqual(["FAKE"]);

    const phases = example.phases;
    expect(isRecord(phases)).toBe(true);
    if (!isRecord(phases)) {
      return;
    }
    for (const phaseName of ["enqueue", "drain", "visibility"] as const) {
      const phase = phases[phaseName];
      expect(isRecord(phase), phaseName).toBe(true);
      if (!isRecord(phase)) {
        continue;
      }
      expect(phase.status).toBe("PASS");
    }
    const visibility = phases.visibility;
    if (isRecord(visibility)) {
      expect(visibility.proofMethod).toBe("fake_transport_ack");
    }

    const secrets = example.secrets;
    expect(isRecord(secrets)).toBe(true);
    if (!isRecord(secrets)) {
      return;
    }
    expect(secrets.exposed).toBe(false);
    expect(Array.isArray(secrets.refsNamedOnly)).toBe(true);

    expect(example.verdict).toBe("PASS");
  });

  it("rejects upgrading FAKE evidence to LIVE-STAGE claim in the example", () => {
    const example = readJson("brain-capture-drain-canary.example.fake.json");
    expect(isRecord(example)).toBe(true);
    if (!isRecord(example)) {
      return;
    }
    const tiers = example.evidenceTier;
    expect(isRecord(tiers)).toBe(true);
    if (!isRecord(tiers)) {
      return;
    }
    expect(tiers.claimed).not.toBe("LIVE-STAGE");
    expect(tiers.claimed).not.toBe("LIVE-PROD");
  });
});
