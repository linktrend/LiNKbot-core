import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { createFakeLisaProviderPorts, ownDataFactsForProvider } from "./fakes.js";
import { authorizeLisaProviderOperation } from "./policy.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const nowMs = 1_800_000_000_000;

describe("Lisa provider policy facade invariants", () => {
  it("never grants helper credentials, never enables schedules, and never claims execution authority", () => {
    const result = authorizeLisaProviderOperation(
      {
        agentId: "main",
        facts: ownDataFactsForProvider("platform"),
        operation: { provider: "platform", name: "platform.consume_facts" },
        privacyClass: "private_health",
        payload: { records: [{ id: "identity-only" }] },
      },
      createFakeLisaProviderPorts({ nowMs }),
    );
    expect(result.status).toBe("accepted");
    if (result.status === "accepted") {
      expect(result.helperCredentialGranted).toBe(false);
      expect(result.scheduleEnabled).toBe(false);
      expect(result.executionAuthority).toBe("none");
      expect(result.advisory).toBe(true);
    }
  });

  it("keeps source files free of Item 2 adapter imports and live runtime paths", () => {
    const files = [
      "policy.ts",
      "identity.ts",
      "capabilities.ts",
      "privacy.ts",
      "ports.ts",
      "fakes.ts",
      "outcomes.ts",
      "own-data.ts",
    ];
    for (const fileName of files) {
      const source = readFileSync(path.join(here, fileName), "utf8");
      expect(source, fileName).not.toMatch(/extensions\/link/u);
      expect(source, fileName).not.toMatch(/openclaw-lisa/u);
      expect(source, fileName).not.toMatch(/LaunchAgent/u);
      expect(source, fileName).not.toMatch(/model-routing/u);
      expect(source, fileName).not.toMatch(/google-workspace/u);
      expect(source, fileName).not.toMatch(/lisa-job-catalogue/u);
      expect(source, fileName).not.toMatch(/gws auth/u);
    }
  });
});
