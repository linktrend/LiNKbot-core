import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { computeAutoworkFingerprint, requestLisaAutowork } from "./autowork.js";
import { createFakeClock, ownDataFactsForProvider } from "./fakes.js";
import { requestLisaLibraries } from "./libraries.js";
import { authorizeLisaProviderOperation } from "./policy.js";
import { requestLisaSkills } from "./skills.js";
import {
  LISA_WAVE_B_ACCEPTED_ITEM2,
  LISA_WAVE_B_BARREL_PIN_IDENTITIES,
  LISA_WAVE_B_PORT_BINDING_MAP,
  LISA_WAVE_B_PUBLIC_BARRELS,
  LISA_WAVE_B_RECORDED_EXPORTS,
  assertRecordedExportsPresent,
  assertWaveAPinsMatchAcceptedBarrels,
  createWiredLisaProviderPorts,
} from "./wiring.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "../../../..");

describe("P-10 Wave B public-barrel wiring", () => {
  it("records the independently accepted Item 2 commit/tree and five public barrels", () => {
    expect(LISA_WAVE_B_ACCEPTED_ITEM2.commit).toBe("90dad7381cce213db23fa81881787c4ea7d1ad0a");
    expect(LISA_WAVE_B_ACCEPTED_ITEM2.tree).toBe("8358bc165dbe0d5c48d61c7c906c773ee6f14ac1");
    expect(LISA_WAVE_B_ACCEPTED_ITEM2.pinProfile).toBe("ocp-01");
    expect([...LISA_WAVE_B_PUBLIC_BARRELS]).toEqual([
      "extensions/linkplatform/api.ts",
      "extensions/linkbrain/api.ts",
      "extensions/linkskills/api.ts",
      "extensions/linklibraries/api.ts",
      "extensions/linkautowork/api.ts",
    ]);
    for (const rel of LISA_WAVE_B_PUBLIC_BARRELS) {
      expect(readFileSync(path.join(repoRoot, rel), "utf8").length).toBeGreaterThan(0);
    }
    expect(LISA_WAVE_B_PORT_BINDING_MAP.platform).toMatch(/validatePlatformTrustFacts/u);
    expect(LISA_WAVE_B_RECORDED_EXPORTS.brain).toContain("createBrainV2Client");
  });

  it("matches Wave A pin identities to accepted-head barrel pin constants", () => {
    expect(() => assertWaveAPinsMatchAcceptedBarrels()).not.toThrow();
    const pins = JSON.parse(
      readFileSync(path.join(repoRoot, "docs/link-integrations/ocp-01/provider-pins.json"), "utf8"),
    ) as {
      providers: Record<string, { commit: string; tree: string }>;
    };
    expect(LISA_WAVE_B_BARREL_PIN_IDENTITIES.platform.commit).toBe(pins.providers.platform.commit);
    expect(LISA_WAVE_B_BARREL_PIN_IDENTITIES.brain.tree).toBe(pins.providers.brain.tree);
    expect(LISA_WAVE_B_BARREL_PIN_IDENTITIES.skills.commit).toBe(pins.providers.skills.commit);
    expect(LISA_WAVE_B_BARREL_PIN_IDENTITIES.libraries.tree).toBe(pins.providers.libraries.tree);
    expect(LISA_WAVE_B_BARREL_PIN_IDENTITIES.autowork.commit).toBe(pins.providers.autowork.commit);
  });

  it("fails closed when a recorded export binding is missing", () => {
    expect(() => assertRecordedExportsPresent({ validatePlatformTrustFacts: undefined })).toThrow(
      /lisa_wave_b_missing_public_export:validatePlatformTrustFacts/u,
    );
  });

  it("does not deep-import extensions/*/src from the wiring module", () => {
    const source = readFileSync(path.join(here, "wiring.ts"), "utf8");
    expect(source).not.toMatch(/extensions\/link\w+\/src\//u);
    expect(source).toMatch(/extensions\/linkplatform\/api\.js/u);
    expect(source).toMatch(/extensions\/linkbrain\/api\.js/u);
    expect(source).toMatch(/extensions\/linkskills\/api\.js/u);
    expect(source).toMatch(/extensions\/linklibraries\/api\.js/u);
    expect(source).toMatch(/extensions\/linkautowork\/api\.js/u);
  });

  it("constructs bound ports and keeps policy accepted through the wired platform barrel", () => {
    const ports = createWiredLisaProviderPorts({ clock: createFakeClock() });
    const accepted = authorizeLisaProviderOperation(
      {
        agentId: "main",
        facts: ownDataFactsForProvider("platform"),
        operation: { provider: "platform", name: "platform.consume_facts" },
        privacyClass: "work",
        payload: { records: [{ id: "identity-only" }] },
      },
      ports,
    );
    expect(accepted).toMatchObject({
      status: "accepted",
      advisory: true,
      executionAuthority: "none",
      scheduleEnabled: false,
      helperCredentialGranted: false,
    });
  });

  it("keeps Skills, Autowork, and Libraries policy paths working through bound ports", () => {
    const ports = createWiredLisaProviderPorts({ clock: createFakeClock() });
    expect(
      requestLisaSkills(
        {
          agentId: "main",
          facts: ownDataFactsForProvider("skills"),
          operation: { provider: "skills", name: "skills_catalog_list" },
          privacyClass: "work",
          payload: { records: [{ id: "meta-only" }] },
          request: { operation: "skills_catalog_list" },
        },
        ports,
      ).status,
    ).toBe("accepted");
    const fingerprint = computeAutoworkFingerprint({
      operation: "status_collection",
      audience: "autowork",
      inputRefs: ["ref-1"],
      idempotencyKey: "idem-1",
    });
    expect(
      requestLisaAutowork(
        {
          agentId: "main",
          facts: ownDataFactsForProvider("autowork"),
          operation: { provider: "autowork", name: "status_collection" },
          privacyClass: "work",
          payload: { records: [{ id: "opaque-ref-1" }] },
          request: {
            operation: "status_collection",
            audience: "autowork",
            fingerprint,
            idempotencyKey: "idem-1",
            inputRefs: ["ref-1"],
          },
        },
        ports,
      ).status,
    ).toBe("accepted");
    expect(
      requestLisaLibraries(
        {
          agentId: "main",
          facts: ownDataFactsForProvider("libraries"),
          operation: { provider: "libraries", name: "libraries.catalogue.discover" },
          privacyClass: "work",
          payload: { records: [{ id: "lib-meta" }] },
          request: { operation: "libraries.catalogue.discover" },
        },
        ports,
      ).status,
    ).toBe("accepted");
  });
});
