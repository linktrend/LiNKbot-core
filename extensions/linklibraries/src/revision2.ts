import { createHash } from "node:crypto";

export const LIBRARIES_COMMIT = "0efa68b19686e976ecee93c6a962e81d2a0265f5" as const;
export const LIBRARIES_TREE = "c42d20b3119ca4bfdd24d4c6b06d6bc7a7f50d4a" as const;
export const LIBRARIES_SCHEMA_VERSION = 2 as const;
export const LIBRARIES_SCHEMA_REVISION = 2 as const;
export const LIBRARIES_SCHEMA_VERSION_LABEL = "2.2" as const;
export const LIBRARIES_CONTRACT_VERSION = "libraries.v2/revision-2" as const;

type Digest = string;
export type Revision2Record = Readonly<{
  schemaVersion: 2;
  schemaRevision: 2;
  recordType: "catalogue_record";
  entryId: string;
  version: string;
  artifactType: "component" | "starter_kit" | "website_template";
  releaseManifestSha256: Digest;
  releaseSource: { releaseSourceCommitSha: string; releaseSourceRepositoryTreeSha1: string };
  artifactTreeSha1: string;
  inventorySha256: Digest;
  lifecycle: string;
  selectability: string;
  compatibility: string;
  bundlePath: string;
}>;
export type Revision2Page = Readonly<{
  snapshot: string;
  records: readonly Revision2Record[];
  nextCursor: string | null;
}>;
export type Revision2Validation = Readonly<
  { ok: true; record: Revision2Record } | { ok: false; reason: string }
>;
export type ExactRevision2Bundle = Readonly<{
  source: { commit: typeof LIBRARIES_COMMIT; tree: typeof LIBRARIES_TREE };
  catalogue: {
    schemaVersion: 2;
    schemaRevision: 2;
    catalogueSha256: Digest;
    recordsSha256: Digest;
  };
  record: Revision2Record;
  manifest: {
    releaseId: string;
    entryId: string;
    version: string;
    releaseSource: Revision2Record["releaseSource"];
    artifactTreeSha1: string;
    payloadSha256: Digest;
    inventorySha256: Digest;
    dependencyLockSha256: Digest;
  };
  inventorySha256: Digest;
  dependencyLockSha256: Digest;
  expectedConsumerMaterializedTreeSha1: string;
  verifiedCache: {
    sourceEvidence: {
      selectedRepositoryCommitSha: typeof LIBRARIES_COMMIT;
      selectedRepositoryTreeSha1: typeof LIBRARIES_TREE;
      immutable: true;
    };
    releaseSource: Revision2Record["releaseSource"];
    catalogueSha256: Digest;
    catalogueRecordsSha256: Digest;
    entryId: string;
    version: string;
    releaseManifestSha256: Digest;
    inventorySha256: Digest;
    payloadSha256: Digest;
    artifactTreeSha1: string;
  };
  consumption: {
    receiptType: "consumption";
    result: "pass";
    entryId: string;
    version: string;
    releaseManifestSha256: Digest;
    releaseSourceCommitSha: string;
    releaseSourceRepositoryTreeSha1: string;
    artifactTreeSha1: string;
    consumerMaterializedTreeSha1: string;
  };
}>;

const SHA1 = /^[0-9a-f]{40}$/;
const SHA256 = /^[0-9a-f]{64}$/;
const ARTIFACT_TYPES = new Set(["component", "starter_kit", "website_template"]);
const LIFECYCLE_VALUES = new Set([
  "draft",
  "qualified",
  "admitted",
  "selectable",
  "deprecated",
  "withdrawn",
  "quarantined",
  "rejected",
  "superseded",
]);
const SELECTABILITY_VALUES = new Set(["selectable", "conditionally_selectable", "non_selectable"]);
const COMPATIBILITY_VALUES = new Set([
  "compatible",
  "conditionally_compatible",
  "incompatible",
  "unknown",
  "not_applicable",
]);
const RECORD_KEYS = new Set([
  "schemaVersion",
  "schemaRevision",
  "recordType",
  "entryId",
  "version",
  "artifactType",
  "releaseManifestSha256",
  "releaseSource",
  "artifactTreeSha1",
  "inventorySha256",
  "lifecycle",
  "selectability",
  "compatibility",
  "bundlePath",
]);
const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);
const digest = (value: unknown): value is string =>
  typeof value === "string" &&
  (value.startsWith("sha256:") ? SHA256.test(value.slice(7)) : SHA256.test(value));
const source = (value: unknown): value is Revision2Record["releaseSource"] =>
  isObject(value) &&
  Object.keys(value).length === 2 &&
  typeof value.releaseSourceCommitSha === "string" &&
  SHA1.test(value.releaseSourceCommitSha) &&
  typeof value.releaseSourceRepositoryTreeSha1 === "string" &&
  SHA1.test(value.releaseSourceRepositoryTreeSha1);

function canonical(value: unknown): unknown {
  return Array.isArray(value)
    ? value.map(canonical)
    : isObject(value)
      ? Object.fromEntries(
          Object.entries(value)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([key, child]) => [key, canonical(child)]),
        )
      : value;
}

const boundedText = (value: unknown, max: number): value is string =>
  typeof value === "string" &&
  value.length > 0 &&
  value.length <= max &&
  !/[\u0000-\u001f\u007f]/u.test(value);

export function canonicalDigest(value: unknown): string {
  return `sha256:${createHash("sha256")
    .update(JSON.stringify(canonical(value)))
    .digest("hex")}`;
}

export function pageCatalogue(
  records: readonly Revision2Record[],
  input: { commit: string; tree: string; snapshot: string; cursor?: string; limit?: number },
): Revision2Page {
  if (input.commit !== LIBRARIES_COMMIT || input.tree !== LIBRARIES_TREE)
    throw new Error("wrong Libraries source");
  if (!Number.isInteger(input.limit ?? 25) || (input.limit ?? 25) < 1 || (input.limit ?? 25) > 50)
    throw new Error("invalid page limit");
  if (!boundedText(input.snapshot, 512)) throw new Error("invalid catalogue snapshot");
  const snapshot = input.snapshot;
  let offset = 0;
  if (input.cursor !== undefined) {
    const prefix = `snapshot:${snapshot}:`;
    if (!boundedText(input.cursor, 600) || !input.cursor.startsWith(prefix))
      throw new Error("stale catalogue cursor");
    const offsetText = input.cursor.slice(prefix.length);
    if (!/^\d+$/u.test(offsetText)) throw new Error("stale catalogue cursor");
    offset = Number(offsetText);
    if (!Number.isSafeInteger(offset)) throw new Error("stale catalogue cursor");
  }
  const limit = input.limit ?? 25;
  const ordered = [...records]
    .map((record) => {
      const result = validateRevision2Record(record);
      if (!result.ok) throw new Error(`invalid catalogue record: ${result.reason}`);
      return result.record;
    })
    .filter(
      (record) =>
        record.lifecycle === "admitted" &&
        record.selectability === "selectable" &&
        record.compatibility === "compatible",
    )
    .sort((a, b) => {
      const left = `${a.entryId}@${a.version}`;
      const right = `${b.entryId}@${b.version}`;
      return left < right ? -1 : left > right ? 1 : 0;
    });
  const page = ordered.slice(offset, offset + limit);
  return Object.freeze({
    snapshot,
    records: Object.freeze(page.map((record) => Object.freeze({ ...record }))),
    nextCursor: offset + limit < ordered.length ? `snapshot:${snapshot}:${offset + limit}` : null,
  });
}

export function validateRevision2Record(value: unknown): Revision2Validation {
  if (
    !isObject(value) ||
    Object.keys(value).some((key) => !RECORD_KEYS.has(key)) ||
    value.schemaVersion !== 2 ||
    value.schemaRevision !== 2 ||
    value.recordType !== "catalogue_record"
  )
    return { ok: false, reason: "invalid catalogue record schema" };
  if (
    !boundedText(value.entryId, 256) ||
    !boundedText(value.version, 128) ||
    typeof value.artifactType !== "string" ||
    !ARTIFACT_TYPES.has(value.artifactType) ||
    !digest(value.releaseManifestSha256) ||
    !source(value.releaseSource) ||
    typeof value.artifactTreeSha1 !== "string" ||
    !SHA1.test(value.artifactTreeSha1) ||
    !digest(value.inventorySha256) ||
    typeof value.lifecycle !== "string" ||
    !LIFECYCLE_VALUES.has(value.lifecycle) ||
    typeof value.selectability !== "string" ||
    !SELECTABILITY_VALUES.has(value.selectability) ||
    typeof value.compatibility !== "string" ||
    !COMPATIBILITY_VALUES.has(value.compatibility) ||
    !boundedText(value.bundlePath, 512)
  )
    return { ok: false, reason: "catalogue record is not admitted and selectable" };
  const releaseSource = {
    releaseSourceCommitSha: (value.releaseSource as Record<string, unknown>)
      .releaseSourceCommitSha as string,
    releaseSourceRepositoryTreeSha1: (value.releaseSource as Record<string, unknown>)
      .releaseSourceRepositoryTreeSha1 as string,
  } as const;
  return {
    ok: true,
    record: Object.freeze({
      ...(value as Revision2Record),
      releaseSource: Object.freeze(releaseSource),
    }),
  };
}

export function validateExactRevision2(bundle: unknown): Revision2Validation {
  if (
    !isObject(bundle) ||
    !isObject(bundle.source) ||
    bundle.source.commit !== LIBRARIES_COMMIT ||
    bundle.source.tree !== LIBRARIES_TREE
  )
    return { ok: false, reason: "wrong source commit or tree" };
  if (
    !isObject(bundle.catalogue) ||
    bundle.catalogue.schemaVersion !== 2 ||
    bundle.catalogue.schemaRevision !== 2 ||
    !digest(bundle.catalogue.catalogueSha256) ||
    !digest(bundle.catalogue.recordsSha256)
  )
    return { ok: false, reason: "invalid catalogue evidence" };
  const recordResult = validateRevision2Record(bundle.record);
  if (!recordResult.ok) return recordResult;
  const record = recordResult.record;
  if (
    record.lifecycle !== "admitted" ||
    record.selectability !== "selectable" ||
    record.compatibility !== "compatible"
  )
    return { ok: false, reason: "record is not admitted, selectable, and compatible" };
  const manifest = bundle.manifest;
  if (
    !isObject(manifest) ||
    manifest.entryId !== record.entryId ||
    manifest.version !== record.version ||
    manifest.releaseId !== `${record.entryId}@${record.version}` ||
    !source(manifest.releaseSource) ||
    manifest.releaseSource.releaseSourceCommitSha !== record.releaseSource.releaseSourceCommitSha ||
    manifest.releaseSource.releaseSourceRepositoryTreeSha1 !==
      record.releaseSource.releaseSourceRepositoryTreeSha1 ||
    manifest.artifactTreeSha1 !== record.artifactTreeSha1 ||
    manifest.inventorySha256 !== record.inventorySha256 ||
    !digest(manifest.payloadSha256) ||
    !digest(manifest.dependencyLockSha256) ||
    manifest.releaseId.length > 160 ||
    canonicalDigest(manifest) !== record.releaseManifestSha256
  )
    return { ok: false, reason: "release manifest does not match catalogue" };
  if (
    bundle.inventorySha256 !== record.inventorySha256 ||
    bundle.dependencyLockSha256 !== manifest.dependencyLockSha256
  )
    return { ok: false, reason: "inventory or dependency evidence mismatch" };
  const cache = bundle.verifiedCache;
  if (
    !isObject(cache) ||
    !isObject(cache.sourceEvidence) ||
    cache.sourceEvidence.selectedRepositoryCommitSha !== LIBRARIES_COMMIT ||
    cache.sourceEvidence.selectedRepositoryTreeSha1 !== LIBRARIES_TREE ||
    cache.sourceEvidence.immutable !== true ||
    !source(cache.releaseSource) ||
    cache.releaseSource.releaseSourceCommitSha !== record.releaseSource.releaseSourceCommitSha ||
    cache.releaseSource.releaseSourceRepositoryTreeSha1 !==
      record.releaseSource.releaseSourceRepositoryTreeSha1 ||
    cache.catalogueSha256 !== bundle.catalogue.catalogueSha256 ||
    cache.catalogueRecordsSha256 !== bundle.catalogue.recordsSha256 ||
    cache.entryId !== record.entryId ||
    cache.version !== record.version ||
    cache.releaseManifestSha256 !== record.releaseManifestSha256 ||
    cache.inventorySha256 !== record.inventorySha256 ||
    cache.payloadSha256 !== manifest.payloadSha256 ||
    cache.artifactTreeSha1 !== record.artifactTreeSha1
  )
    return { ok: false, reason: "verified cache receipt mismatch" };
  if (
    !isObject(bundle.consumption) ||
    bundle.consumption.receiptType !== "consumption" ||
    bundle.consumption.result !== "pass" ||
    bundle.consumption.entryId !== record.entryId ||
    bundle.consumption.version !== record.version ||
    bundle.consumption.releaseManifestSha256 !== record.releaseManifestSha256 ||
    bundle.consumption.releaseSourceCommitSha !== record.releaseSource.releaseSourceCommitSha ||
    bundle.consumption.releaseSourceRepositoryTreeSha1 !==
      record.releaseSource.releaseSourceRepositoryTreeSha1 ||
    bundle.consumption.artifactTreeSha1 !== record.artifactTreeSha1 ||
    typeof bundle.expectedConsumerMaterializedTreeSha1 !== "string" ||
    !SHA1.test(bundle.expectedConsumerMaterializedTreeSha1) ||
    typeof bundle.consumption.consumerMaterializedTreeSha1 !== "string" ||
    !SHA1.test(bundle.consumption.consumerMaterializedTreeSha1) ||
    bundle.consumption.consumerMaterializedTreeSha1 !== bundle.expectedConsumerMaterializedTreeSha1
  )
    return { ok: false, reason: "consumption receipt is not a pass" };
  return { ok: true, record };
}
