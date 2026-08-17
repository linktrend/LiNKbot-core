import { describe, expect, it } from "vitest";
import {
  LIBRARIES_COMMIT,
  LIBRARIES_CATALOGUE_SHA256,
  LIBRARIES_TREE,
  canonicalDigest,
  pageCatalogue,
  validateExactRevision2,
  type ExactRevision2Bundle,
  type Revision2Record,
} from "./api.js";

const d = (letter: string) => `sha256:${letter.repeat(64)}`;
const source = {
  releaseSourceCommitSha: "1234567890abcdef1234567890abcdef12345678",
  releaseSourceRepositoryTreeSha1: "abcdef1234567890abcdef1234567890abcdef12",
};
const manifest = {
  releaseId: "component-echo@1.0.0",
  entryId: "component-echo",
  version: "1.0.0",
  releaseSource: source,
  artifactTreeSha1: "11223344556677889900aabbccddeeff00112233",
  payloadSha256: d("e"),
  inventorySha256: d("b"),
  dependencyLockSha256: d("f"),
};
const record: Revision2Record = {
  schemaVersion: 2,
  schemaRevision: 2,
  recordType: "catalogue_record",
  entryId: "component-echo",
  version: "1.0.0",
  artifactType: "component",
  releaseManifestSha256: canonicalDigest(manifest),
  releaseSource: source,
  artifactTreeSha1: "11223344556677889900aabbccddeeff00112233",
  inventorySha256: d("b"),
  lifecycle: "admitted",
  selectability: "selectable",
  compatibility: "compatible",
  bundlePath: "registry/v2/entries/component-echo/versions/1.0.0",
};
const bundle: ExactRevision2Bundle = {
  source: { commit: LIBRARIES_COMMIT, tree: LIBRARIES_TREE },
  catalogue: {
    schemaVersion: 2,
    schemaRevision: 2,
    catalogueType: "catalogue",
    catalogueSha256: LIBRARIES_CATALOGUE_SHA256,
    recordsSha256: canonicalDigest([record]),
    records: [record],
  },
  record,
  manifest,
  inventorySha256: record.inventorySha256,
  dependencyLockSha256: d("f"),
  expectedConsumerMaterializedTreeSha1: "99887766554433221100ffeeddccbbaa99887766",
  verifiedCache: {
    sourceEvidence: {
      selectedRepositoryCommitSha: LIBRARIES_COMMIT,
      selectedRepositoryTreeSha1: LIBRARIES_TREE,
      immutable: true,
    },
    releaseSource: source,
    catalogueSha256: LIBRARIES_CATALOGUE_SHA256,
    catalogueRecordsSha256: canonicalDigest([record]),
    entryId: record.entryId,
    version: record.version,
    releaseManifestSha256: record.releaseManifestSha256,
    inventorySha256: record.inventorySha256,
    payloadSha256: d("e"),
    artifactTreeSha1: record.artifactTreeSha1,
  },
  consumption: {
    receiptType: "consumption",
    result: "pass",
    entryId: record.entryId,
    version: record.version,
    releaseManifestSha256: record.releaseManifestSha256,
    releaseSourceCommitSha: source.releaseSourceCommitSha,
    releaseSourceRepositoryTreeSha1: source.releaseSourceRepositoryTreeSha1,
    artifactTreeSha1: record.artifactTreeSha1,
    consumerMaterializedTreeSha1: "99887766554433221100ffeeddccbbaa99887766",
  },
};

describe("LiNKlibraries Revision 2 consumer", () => {
  it("pages admitted records and validates exact release evidence", () => {
    const page = pageCatalogue([record], {
      commit: LIBRARIES_COMMIT,
      tree: LIBRARIES_TREE,
      snapshot: "catalogue-v2",
      limit: 1,
    });
    expect(page.records).toHaveLength(1);
    expect(validateExactRevision2(bundle)).toMatchObject({ ok: true });
  });
  it("uses canonical object digests and literal snapshot cursor matching", () => {
    expect(canonicalDigest({ a: 1, b: { c: 2 } })).toBe(canonicalDigest({ b: { c: 2 }, a: 1 }));
    expect(
      pageCatalogue([record], {
        commit: LIBRARIES_COMMIT,
        tree: LIBRARIES_TREE,
        snapshot: "catalogue.*",
        cursor: "snapshot:catalogue.*:0",
      }).records,
    ).toHaveLength(1);
    expect(() =>
      pageCatalogue([record], {
        commit: LIBRARIES_COMMIT,
        tree: LIBRARIES_TREE,
        snapshot: "catalogue.*",
        cursor: "snapshot:catalogueX:0",
      }),
    ).toThrow("stale catalogue cursor");
  });
  it("filters valid non-selectable records after structural validation", () => {
    expect(
      pageCatalogue(
        [
          record,
          {
            ...record,
            entryId: "draft-entry",
            lifecycle: "draft",
            selectability: "non_selectable",
            compatibility: "unknown",
            bundlePath: "registry/v2/entries/draft-entry/versions/1.0.0",
          },
        ],
        {
          commit: LIBRARIES_COMMIT,
          tree: LIBRARIES_TREE,
          snapshot: "catalogue-v2",
        },
      ).records.map((entry) => entry.entryId),
    ).toEqual(["component-echo"]);
  });
  it("rejects malformed required catalogue record fields", () => {
    expect(
      validateExactRevision2({ ...bundle, record: { ...record, artifactType: undefined } }).ok,
    ).toBe(false);
    expect(validateExactRevision2({ ...bundle, record: { ...record, bundlePath: "" } }).ok).toBe(
      false,
    );
  });
  it("binds the selected record to the canonical catalogue records digest", () => {
    const tamperedCatalogue = structuredClone(bundle) as any;
    tamperedCatalogue.catalogue.records[0].version = "2.0.0";
    expect(validateExactRevision2(tamperedCatalogue).ok).toBe(false);

    const substitutedRecord = {
      ...record,
      entryId: "substituted-component",
      bundlePath: "registry/v2/entries/substituted-component/versions/1.0.0",
    };
    const substitutedManifest = {
      ...manifest,
      releaseId: "substituted-component@1.0.0",
      entryId: "substituted-component",
    };
    const substitutedBundle = structuredClone(bundle) as any;
    substitutedBundle.record = {
      ...substitutedRecord,
      releaseManifestSha256: canonicalDigest(substitutedManifest),
    };
    substitutedBundle.manifest = substitutedManifest;
    expect(validateExactRevision2(substitutedBundle).ok).toBe(false);
  });
  it("rejects a self-consistent catalogue digest that is not the pinned provider digest", () => {
    const value = structuredClone(bundle) as any;
    value.catalogue.catalogueSha256 = d("d");
    value.verifiedCache.catalogueSha256 = d("d");
    expect(validateExactRevision2(value)).toMatchObject({
      ok: false,
      reason: "invalid catalogue evidence",
    });
  });
  it("accepts the contract-supported raw manifest digest representation", () => {
    const value = structuredClone(bundle) as any;
    const rawManifestDigest = record.releaseManifestSha256.slice("sha256:".length);
    value.record.releaseManifestSha256 = rawManifestDigest;
    value.catalogue.records[0].releaseManifestSha256 = rawManifestDigest;
    value.catalogue.recordsSha256 = canonicalDigest(value.catalogue.records);
    value.verifiedCache.catalogueRecordsSha256 = value.catalogue.recordsSha256;
    value.verifiedCache.releaseManifestSha256 = rawManifestDigest;
    value.consumption.releaseManifestSha256 = rawManifestDigest;
    expect(validateExactRevision2(value).ok).toBe(true);
  });
  it("rejects inherited and accessor-backed catalogue records without invoking getters", () => {
    let getterCalls = 0;
    const accessorRecord = { ...record } as Record<string, unknown>;
    Object.defineProperty(accessorRecord, "entryId", {
      enumerable: true,
      get() {
        getterCalls += 1;
        return getterCalls === 1 ? record.entryId : "other-entry";
      },
    });
    expect(validateExactRevision2({ ...bundle, record: accessorRecord }).ok).toBe(false);
    expect(getterCalls).toBe(0);
    expect(validateExactRevision2({ ...bundle, record: Object.create(record) }).ok).toBe(false);
  });
  it.each([
    "../../outside",
    "/registry/v2/entries/component-echo/versions/1.0.0",
    "registry\\v2\\entries\\component-echo\\versions\\1.0.0",
    "registry/v2/entries/other/versions/1.0.0",
    "registry/v2/entries/component-echo/versions/2.0.0",
  ])("rejects unsafe or mismatched bundle path %s", (bundlePath) => {
    expect(validateExactRevision2({ ...bundle, record: { ...record, bundlePath } }).ok).toBe(false);
  });
  it.each([
    ["withdrawn lifecycle", { lifecycle: "withdrawn" }],
    ["non-selectable record", { selectability: "non_selectable" }],
    ["incompatible record", { compatibility: "incompatible" }],
  ] as const)("rejects exact release with %s", (_name, changes) => {
    expect(validateExactRevision2({ ...bundle, record: { ...record, ...changes } }).ok).toBe(false);
  });
  it("fails closed when pagination receives a malformed provider record", () => {
    expect(() =>
      pageCatalogue([{ ...record, bundlePath: "" }], {
        commit: LIBRARIES_COMMIT,
        tree: LIBRARIES_TREE,
        snapshot: "catalogue-v2",
      }),
    ).toThrow("invalid catalogue record");
    expect(
      validateExactRevision2({
        ...bundle,
        record: { ...record, releaseSource: { ...source, extra: "payload" } },
      }).ok,
    ).toBe(false);
  });
  it.each(["wrong source", "wrong manifest", "stale cache", "failed consumption"] as const)(
    "rejects %s",
    (failure) => {
      const value = structuredClone(bundle) as any;
      if (failure === "wrong source") value.source.commit = "other";
      if (failure === "wrong manifest") value.manifest.payloadSha256 = d("a");
      if (failure === "stale cache") value.verifiedCache.catalogueSha256 = d("z");
      if (failure === "failed consumption") value.consumption.result = "fail";
      expect(validateExactRevision2(value).ok).toBe(false);
    },
  );
  it("rejects an unrelated consumption receipt", () => {
    const value = structuredClone(bundle) as any;
    value.consumption.entryId = "other-entry";
    expect(validateExactRevision2(value).ok).toBe(false);
  });
});
