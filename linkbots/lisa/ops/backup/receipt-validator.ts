import { createHash } from "node:crypto";

const HASH_PATTERN = /^[a-f0-9]{64}$/u;
const RELATIVE_PATH_PATTERN = /^[^/\\][^\\]*$/u;
const SECRET_NAME_PATTERN = /^[A-Za-z0-9._:/-]{1,256}$/u;
const VERSION_PATTERN = /^[A-Za-z0-9._:-]{1,64}$/u;
const DESTINATION_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._:-]{1,127}$/u;

export type ReceiptValidation = Readonly<{
  valid: boolean;
  issues: readonly string[];
}>;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function addIssue(issues: string[], path: string): void {
  issues.push(path);
}

function hasOwn(value: Record<string, unknown>, key: string): boolean {
  return Object.hasOwn(value, key);
}

function hasExactKeys(
  value: Record<string, unknown>,
  expected: readonly string[],
  path: string,
  issues: string[],
): void {
  const expectedSet = new Set(expected);
  for (const key of Object.keys(value)) {
    if (!expectedSet.has(key)) {
      addIssue(issues, `${path}.${key}:unexpected`);
    }
  }
  for (const key of expected) {
    if (!hasOwn(value, key)) {
      addIssue(issues, `${path}.${key}:missing`);
    }
  }
}

function isSafeHash(value: unknown): value is string {
  return typeof value === "string" && HASH_PATTERN.test(value);
}

function isNonNegativeInteger(value: unknown): value is number {
  return typeof value === "number" && Number.isSafeInteger(value) && value >= 0;
}

function canonicalJson(value: unknown): string {
  if (Array.isArray(value)) {
    return `[${value.map((item) => canonicalJson(item)).join(",")}]`;
  }
  if (isRecord(value)) {
    const keys: string[] = [];
    for (const key of Object.keys(value)) {
      const index = keys.findIndex((existing) => key.localeCompare(existing) < 0);
      if (index === -1) {
        keys.push(key);
      } else {
        keys.splice(index, 0, key);
      }
    }
    return `{${keys
      .filter((key) => value[key] !== undefined)
      .map((key) => `${JSON.stringify(key)}:${canonicalJson(value[key])}`)
      .join(",")}}`;
  }
  const serialized = JSON.stringify(value);
  if (serialized === undefined) {
    throw new Error("non_serializable_receipt");
  }
  return serialized;
}

function receiptDigest(value: Record<string, unknown>): string {
  const withoutDigest = { ...value };
  delete withoutDigest.receiptSha256;
  return createHash("sha256").update(canonicalJson(withoutDigest)).digest("hex");
}

function inspectSanitizedValue(value: unknown, path: string, issues: string[]): void {
  if (Array.isArray(value)) {
    value.forEach((child, index) => inspectSanitizedValue(child, `${path}[${index}]`, issues));
    return;
  }
  if (!isRecord(value)) {
    if (
      typeof value === "string" &&
      /(?:BEGIN (?:RSA|EC|OPENSSH) PRIVATE KEY|password=|token=)/iu.test(value)
    ) {
      addIssue(issues, `${path}:secret-like-value`);
    }
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    if (/(?:payload|secretValue|password|credentialValue|privateContent|messageBody)/iu.test(key)) {
      addIssue(issues, `${path}.${key}:private-field`);
    }
    inspectSanitizedValue(child, `${path}.${key}`, issues);
  }
}

function validateSourceArchive(value: unknown, issues: string[]): void {
  const path = "sourceArchive";
  if (!isRecord(value)) {
    addIssue(issues, `${path}:object`);
    return;
  }
  hasExactKeys(value, ["sha256", "bytes", "entries", "excluded"], path, issues);
  if (!isSafeHash(value.sha256)) {
    addIssue(issues, `${path}.sha256:hash`);
  }
  if (!isNonNegativeInteger(value.bytes)) {
    addIssue(issues, `${path}.bytes:integer`);
  }
  if (!Array.isArray(value.entries)) {
    addIssue(issues, `${path}.entries:array`);
  } else {
    let previousPath = "";
    const seen = new Set<string>();
    value.entries.forEach((entry, index) => {
      const entryPath = `${path}.entries[${index}]`;
      if (!isRecord(entry)) {
        addIssue(issues, `${entryPath}:object`);
        return;
      }
      hasExactKeys(entry, ["path", "kind", "bytes", "sha256"], entryPath, issues);
      if (
        typeof entry.path !== "string" ||
        !RELATIVE_PATH_PATTERN.test(entry.path) ||
        entry.path.split("/").some((part) => part === ".." || part === "")
      ) {
        addIssue(issues, `${entryPath}.path:relative`);
      } else {
        if (
          /(?:private[-_]?health|health\.sqlite|credentials?|secrets?|\.env)/iu.test(entry.path)
        ) {
          addIssue(issues, `${entryPath}.path:privacy-boundary`);
        }
        if (seen.has(entry.path)) {
          addIssue(issues, `${entryPath}.path:duplicate`);
        }
        if (previousPath && previousPath.localeCompare(entry.path) > 0) {
          addIssue(issues, `${entryPath}.path:unordered`);
        }
        seen.add(entry.path);
        previousPath = entry.path;
      }
      if (
        entry.kind !== "source" &&
        entry.kind !== "database" &&
        entry.kind !== "procedure" &&
        entry.kind !== "receipt"
      ) {
        addIssue(issues, `${entryPath}.kind:enum`);
      }
      if (!isNonNegativeInteger(entry.bytes)) {
        addIssue(issues, `${entryPath}.bytes:integer`);
      }
      if (!isSafeHash(entry.sha256)) {
        addIssue(issues, `${entryPath}.sha256:hash`);
      }
    });
  }
  if (
    !Array.isArray(value.excluded) ||
    value.excluded.length !== 2 ||
    value.excluded[0] !== "private-health" ||
    value.excluded[1] !== "credentials"
  ) {
    addIssue(issues, `${path}.excluded:privacy-boundary`);
  }
}

function validatePrivateSnapshot(value: unknown, issues: string[]): void {
  const path = "privateSnapshot";
  if (!isRecord(value)) {
    addIssue(issues, `${path}:object`);
    return;
  }
  hasExactKeys(
    value,
    ["objectSha256", "objectBytes", "plaintextSha256", "keyReference"],
    path,
    issues,
  );
  if (!isSafeHash(value.objectSha256)) {
    addIssue(issues, `${path}.objectSha256:hash`);
  }
  if (!isNonNegativeInteger(value.objectBytes) || value.objectBytes < 28) {
    addIssue(issues, `${path}.objectBytes:size`);
  }
  if (!isSafeHash(value.plaintextSha256)) {
    addIssue(issues, `${path}.plaintextSha256:hash`);
  }
  if (!isRecord(value.keyReference)) {
    addIssue(issues, `${path}.keyReference:object`);
    return;
  }
  const referencePath = `${path}.keyReference`;
  hasExactKeys(
    value.keyReference,
    ["provider", "secretName", "version", "workloadIdentityAudience"],
    referencePath,
    issues,
  );
  if (value.keyReference.provider !== "google-secret-manager") {
    addIssue(issues, `${referencePath}.provider:enum`);
  }
  if (
    typeof value.keyReference.secretName !== "string" ||
    !SECRET_NAME_PATTERN.test(value.keyReference.secretName)
  ) {
    addIssue(issues, `${referencePath}.secretName:reference`);
  }
  if (
    typeof value.keyReference.version !== "string" ||
    !VERSION_PATTERN.test(value.keyReference.version)
  ) {
    addIssue(issues, `${referencePath}.version:reference`);
  }
  if (
    typeof value.keyReference.workloadIdentityAudience !== "string" ||
    !value.keyReference.workloadIdentityAudience.startsWith("https://")
  ) {
    addIssue(issues, `${referencePath}.workloadIdentityAudience:reference`);
  }
}

function validateUpload(
  value: unknown,
  snapshot: Record<string, unknown> | undefined,
  issues: string[],
): void {
  const path = "upload";
  if (!isRecord(value)) {
    addIssue(issues, `${path}:object`);
    return;
  }
  hasExactKeys(
    value,
    ["status", "destinationBindingId", "objectSha256", "objectBytes"],
    path,
    issues,
  );
  if (value.status !== "verified") {
    addIssue(issues, `${path}.status:verified`);
  }
  if (
    typeof value.destinationBindingId !== "string" ||
    !DESTINATION_PATTERN.test(value.destinationBindingId)
  ) {
    addIssue(issues, `${path}.destinationBindingId:reference`);
  }
  if (!isSafeHash(value.objectSha256)) {
    addIssue(issues, `${path}.objectSha256:hash`);
  }
  if (!isNonNegativeInteger(value.objectBytes) || value.objectBytes < 28) {
    addIssue(issues, `${path}.objectBytes:size`);
  }
  if (snapshot && value.objectSha256 !== snapshot.objectSha256) {
    addIssue(issues, `${path}.objectSha256:mismatch`);
  }
  if (snapshot && value.objectBytes !== snapshot.objectBytes) {
    addIssue(issues, `${path}.objectBytes:mismatch`);
  }
}

function validateRestore(
  value: unknown,
  snapshot: Record<string, unknown> | undefined,
  issues: string[],
): void {
  const path = "restore";
  if (!isRecord(value)) {
    addIssue(issues, `${path}:object`);
    return;
  }
  hasExactKeys(
    value,
    ["status", "plaintextSha256", "quickCheck", "network", "channelDelivery"],
    path,
    issues,
  );
  if (value.status !== "verified") {
    addIssue(issues, `${path}.status:verified`);
  }
  if (!isSafeHash(value.plaintextSha256)) {
    addIssue(issues, `${path}.plaintextSha256:hash`);
  }
  if (snapshot && value.plaintextSha256 !== snapshot.plaintextSha256) {
    addIssue(issues, `${path}.plaintextSha256:mismatch`);
  }
  if (value.quickCheck !== "passed") {
    addIssue(issues, `${path}.quickCheck:passed`);
  }
  if (value.network !== "disabled") {
    addIssue(issues, `${path}.network:disabled`);
  }
  if (value.channelDelivery !== "disabled") {
    addIssue(issues, `${path}.channelDelivery:disabled`);
  }
}

/** Validate a sanitized PKT-09 receipt without reading files, providers, or private state. */
export function validateBackupReceipt(value: unknown): ReceiptValidation {
  const issues: string[] = [];
  if (!isRecord(value)) {
    return Object.freeze({ valid: false, issues: Object.freeze(["receipt:object"]) });
  }
  hasExactKeys(
    value,
    [
      "formatVersion",
      "profile",
      "sourceArchive",
      "privateSnapshot",
      "upload",
      "restore",
      "retention",
      "capturedAtMs",
      "receiptSha256",
    ],
    "receipt",
    issues,
  );
  if (value.formatVersion !== 1) {
    addIssue(issues, "formatVersion:version");
  }
  if (value.profile !== "lisa") {
    addIssue(issues, "profile:enum");
  }
  validateSourceArchive(value.sourceArchive, issues);
  const snapshot = isRecord(value.privateSnapshot) ? value.privateSnapshot : undefined;
  validatePrivateSnapshot(value.privateSnapshot, issues);
  validateUpload(value.upload, snapshot, issues);
  validateRestore(value.restore, snapshot, issues);
  if (value.retention !== "promote_current") {
    addIssue(issues, "retention:promotion");
  }
  if (!isNonNegativeInteger(value.capturedAtMs)) {
    addIssue(issues, "capturedAtMs:integer");
  }
  if (!isSafeHash(value.receiptSha256)) {
    addIssue(issues, "receiptSha256:hash");
  } else {
    try {
      if (receiptDigest(value) !== value.receiptSha256) {
        addIssue(issues, "receiptSha256:mismatch");
      }
    } catch {
      addIssue(issues, "receiptSha256:canonicalization");
    }
  }
  inspectSanitizedValue(value, "receipt", issues);
  return Object.freeze({ valid: issues.length === 0, issues: Object.freeze(issues) });
}
