import { describe, expect, it } from "vitest";
import {
  createFakeLibrariesPort,
  createFakeLisaProviderPorts,
  FAKE_LIBRARY_CATALOGUE_HASH,
  FAKE_LIBRARY_RECORD_ID,
  ownDataFactsForProvider,
} from "./fakes.js";
import { requestLisaLibraries } from "./libraries.js";
import { LISA_OCP01_PIN_IDENTITIES } from "./pin-identities.js";

const nowMs = 1_800_000_000_000;

function request(input: {
  name?: string;
  request?: unknown;
  statusByProvider?: Parameters<typeof createFakeLisaProviderPorts>[0] extends infer T
    ? T extends { statusByProvider?: infer S }
      ? S
      : never
    : never;
  libraries?: ReturnType<typeof createFakeLibrariesPort>;
}) {
  return requestLisaLibraries(
    {
      agentId: "main",
      facts: ownDataFactsForProvider("libraries"),
      operation: { provider: "libraries", name: input.name ?? "libraries.catalogue.discover" },
      privacyClass: "work",
      payload: { records: [{ id: FAKE_LIBRARY_RECORD_ID }] },
      request: input.request,
    },
    createFakeLisaProviderPorts({
      nowMs,
      statusByProvider: input.statusByProvider,
      libraries: input.libraries,
    }),
  );
}

describe("Lisa Libraries domain request and outcome policy", () => {
  it("accepts a catalogue page with a selectable admitted record and an exact-release pass receipt", () => {
    const page = request({ name: "libraries.catalogue.discover" });
    expect(page.status).toBe("accepted");
    if (page.status === "accepted") {
      expect(page.advisory).toBe(true);
      expect(page.executionAuthority).toBe("none");
      expect(page.evidence.kind).toBe("catalogue-page");
      expect(page.evidence.recordId).toBe(FAKE_LIBRARY_RECORD_ID);
      expect(page.evidence.admitted).toBe(true);
      expect(page.evidence.selectable).toBe(true);
    }

    const receipt = request({
      name: "libraries.exact_release.retrieve",
      request: {
        recordId: FAKE_LIBRARY_RECORD_ID,
        catalogueHash: FAKE_LIBRARY_CATALOGUE_HASH,
        pinCommit: LISA_OCP01_PIN_IDENTITIES.libraries.commit,
        pinTree: LISA_OCP01_PIN_IDENTITIES.libraries.tree,
        record: {
          id: FAKE_LIBRARY_RECORD_ID,
          admitted: true,
          selectable: true,
          artifactType: "document",
        },
      },
    });
    expect(receipt.status).toBe("accepted");
    if (receipt.status === "accepted") {
      expect(receipt.evidence.kind).toBe("exact-release-receipt");
      expect(receipt.evidence.catalogueHash).toBe(FAKE_LIBRARY_CATALOGUE_HASH);
      expect(receipt.evidence.pinCommit).toBe(LISA_OCP01_PIN_IDENTITIES.libraries.commit);
    }
  });

  it("denies contribution, withdrawn records, inherited fields, and non-boolean resolved", () => {
    expect(request({ name: "libraries.catalogue.contribute" })).toMatchObject({
      status: "denied",
      reasonCode: "forbidden_operation",
    });
    expect(request({ name: "libraries.contribution.intake" })).toMatchObject({
      status: "denied",
      reasonCode: "forbidden_operation",
    });
    expect(
      request({
        name: "libraries.exact_release.retrieve",
        request: {
          record: {
            id: FAKE_LIBRARY_RECORD_ID,
            admitted: true,
            selectable: false,
            withdrawn: true,
            artifactType: "document",
          },
        },
      }),
    ).toMatchObject({ status: "denied", reasonCode: "non_selectable_or_withdrawn_record" });

    const inherited = Object.create({ id: FAKE_LIBRARY_RECORD_ID }) as Record<string, unknown>;
    inherited.admitted = true;
    inherited.selectable = true;
    expect(
      request({
        name: "libraries.exact_release.retrieve",
        request: { record: inherited },
      }),
    ).toMatchObject({ status: "invalid", reasonCode: "inherited_catalogue_fields" });

    expect(
      request({
        name: "libraries.catalogue.discover",
        request: { resolved: "yes" },
      }),
    ).toMatchObject({ status: "invalid", reasonCode: "non_boolean_resolved" });
  });

  it("denies a selected record that is not in the hashed catalogue", () => {
    expect(
      request({
        name: "libraries.exact_release.retrieve",
        request: {
          recordId: "lib-record-missing",
          catalogueHash: FAKE_LIBRARY_CATALOGUE_HASH,
        },
      }),
    ).toMatchObject({ status: "denied", reasonCode: "record_not_in_catalogue" });
  });

  it("returns unavailable for a missing catalogue snapshot or disabled provider", () => {
    expect(
      request({
        name: "libraries.catalogue.discover",
        libraries: createFakeLibrariesPort({ missingSnapshot: true }),
      }),
    ).toMatchObject({
      status: "unavailable",
      reasonCode: "missing_catalogue_snapshot",
      hold: true,
      usedLocalMemoryAsProviderResult: false,
    });
    expect(
      request({
        name: "libraries.catalogue.discover",
        statusByProvider: { libraries: "disabled" },
      }),
    ).toMatchObject({
      status: "unavailable",
      reasonCode: "provider_disabled",
    });
  });
});
