import { createHash } from "node:crypto";

export const AUTOWORK_COMMIT = "4eb29203766b1ccf200a2dc10b39cc58d175c90c" as const;
export const AUTOWORK_TREE = "5f306d674780a5a26048017f916da6048d71e7a5" as const;
export const AUTOWORK_CONTRACT_VERSION = "2026-08-13.v1" as const;
export const AUTOWORK_SCHEMA_VERSION = "provider-contract-v1" as const;
export const AUTOWORK_PROTOCOL_VERSION = "2026-07-28" as const;
export const AUTOWORK_OPERATIONS = Object.freeze([
  "status_collection",
  "precheck",
  "evidence_collection",
  "notification_delivery",
  "external_assistance",
  "artifact_transform",
  "media_package",
  "outreach_adapter",
] as const);
export const AUTOWORK_STATES = Object.freeze([
  "accepted",
  "queued",
  "running",
  "succeeded",
  "failed",
  "expired",
  "cancelled",
  "timed_out",
  "rejected",
  "blocked",
  "quarantined",
  "unavailable",
  "contract_incompatible",
] as const);
export type Operation = (typeof AUTOWORK_OPERATIONS)[number];
export type ReceiptState = (typeof AUTOWORK_STATES)[number];
export type OpaqueReference = Readonly<{ ref: string; digest: string; observedAt: string }>;
export type AutoworkRequest = Readonly<{
  providerCandidate: { commit: typeof AUTOWORK_COMMIT; tree: typeof AUTOWORK_TREE };
  contractVersion: typeof AUTOWORK_CONTRACT_VERSION;
  protocolVersion: string;
  requestId: string;
  platform: Readonly<{
    orgId: string;
    actorId: string;
    audience: string;
    capability: string;
    credentialId: string;
    bindingId: string;
    issuedAt: string;
    expiresAt: string;
    revocationRef: string;
  }>;
  automation: Readonly<{
    automationId: string;
    version: string;
    definitionDigest: string;
    configurationRef: OpaqueReference;
  }>;
  operationKind: Operation;
  inputRef: OpaqueReference;
  artifactRefs: readonly OpaqueReference[];
  resultDestinationRef: string;
  correlationRefs: readonly OpaqueReference[];
  brainHandoffRef?: OpaqueReference;
  idempotencyKey: string;
  expiresAt: string;
  cancellationRequestedAt?: string;
}>;
export type AutoworkReceipt = Readonly<{
  providerCandidate: { commit: typeof AUTOWORK_COMMIT; tree: typeof AUTOWORK_TREE };
  contractVersion: typeof AUTOWORK_CONTRACT_VERSION;
  requestId: string;
  receiptId: string;
  state: ReceiptState;
  acceptedAt: string;
  updatedAt: string;
  attemptCount: number;
  requestFingerprint: string;
  automation: AutoworkRequest["automation"];
  resultRefs: readonly OpaqueReference[];
  evidenceRefs: readonly OpaqueReference[];
  uncertainOutcome: boolean;
}>;
export type AutoworkCallback = Readonly<{
  requestId: string;
  receiptId: string;
  orgId: string;
  callbackBindingRef: string;
  sourceTimestamp: string;
  receipt: AutoworkReceipt;
}>;
export type AutoworkAcceptedCallbackState = Readonly<{
  latestSourceTimestamp: string | null;
  acceptedReceiptIds: readonly string[];
  latestReceiptState: ReceiptState | null;
  latestAttemptCount: number | null;
}>;
export type PlatformRevocationDecision = Readonly<{
  status: "active" | "revoked";
  observedAt: string;
  credentialId: string;
  bindingId: string;
  orgId: string;
  actorId: string;
  audience: string;
  capability: string;
  revocationRef: string;
  authorizedOperation: Operation;
}>;
const REVOCATION_MAX_AGE_MS = 5 * 60 * 1000;
const NON_TERMINAL_RECEIPT_STATES = ["accepted", "queued", "running"] as const;

const SHA256 = /^sha256:[0-9a-f]{64}$/;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const OPAQUE = /^[a-z][a-z0-9+.-]*:\/\/[A-Za-z0-9._~/%:-]+$/;
const bounded = (value: unknown, max = 512): value is string =>
  typeof value === "string" &&
  value.length > 0 &&
  value.length <= max &&
  !/[\u0000-\u001f\u007f]/u.test(value);
const matches = (value: unknown, pattern: RegExp): value is string =>
  typeof value === "string" && pattern.test(value);
const plain = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" &&
  value !== null &&
  !Array.isArray(value) &&
  (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);
function snapshotPlainData(value: unknown, seen = new WeakSet<object>()): unknown {
  if (
    value === null ||
    value === undefined ||
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  )
    return value;
  if (typeof value !== "object" || seen.has(value)) throw new Error("invalid_plain_data");
  seen.add(value);
  try {
    if (Object.getOwnPropertySymbols(value).length > 0) throw new Error("invalid_plain_data");
    const descriptors = Object.getOwnPropertyDescriptors(value);
    if (Array.isArray(value)) {
      if (Object.getPrototypeOf(value) !== Array.prototype) throw new Error("invalid_plain_data");
      const length = descriptors.length?.value;
      if (!Number.isSafeInteger(length) || length < 0) throw new Error("invalid_plain_data");
      const snapshot: unknown[] = [];
      for (let index = 0; index < length; index += 1) {
        const descriptor = descriptors[String(index)];
        if (!descriptor || !("value" in descriptor)) throw new Error("invalid_plain_data");
        snapshot.push(snapshotPlainData(descriptor.value, seen));
      }
      if (Object.keys(descriptors).some((key) => key !== "length" && !/^\d+$/u.test(key)))
        throw new Error("invalid_plain_data");
      return snapshot;
    }
    const prototype = Object.getPrototypeOf(value);
    if (prototype !== Object.prototype && prototype !== null) throw new Error("invalid_plain_data");
    const snapshot = Object.create(null) as Record<string, unknown>;
    for (const [key, descriptor] of Object.entries(descriptors)) {
      if (!("value" in descriptor)) throw new Error("invalid_plain_data");
      snapshot[key] = snapshotPlainData(descriptor.value, seen);
    }
    return snapshot;
  } finally {
    seen.delete(value);
  }
}
const iso = (value: unknown): value is string =>
  bounded(value, 64) && Number.isFinite(Date.parse(value));
const keys = (
  value: Record<string, unknown>,
  required: readonly string[],
  optional: readonly string[] = [],
) => {
  const actual = Object.keys(value);
  return (
    required.every((key) => actual.includes(key)) &&
    actual.every((key) => required.includes(key) || optional.includes(key))
  );
};
const ref = (value: unknown): value is OpaqueReference =>
  plain(value) &&
  keys(value, ["ref", "digest", "observedAt"]) &&
  bounded(value.ref) &&
  OPAQUE.test(value.ref) &&
  typeof value.digest === "string" &&
  SHA256.test(value.digest) &&
  iso(value.observedAt);

function automation(value: unknown): value is AutoworkRequest["automation"] {
  return (
    plain(value) &&
    keys(value, ["automationId", "version", "definitionDigest", "configurationRef"]) &&
    bounded(value.automationId, 256) &&
    bounded(value.version, 64) &&
    matches(value.definitionDigest, SHA256) &&
    ref(value.configurationRef)
  );
}

function validateRequestSnapshot(value: unknown): value is AutoworkRequest {
  if (
    !plain(value) ||
    !keys(
      value,
      [
        "providerCandidate",
        "contractVersion",
        "protocolVersion",
        "requestId",
        "platform",
        "automation",
        "operationKind",
        "inputRef",
        "artifactRefs",
        "resultDestinationRef",
        "correlationRefs",
        "idempotencyKey",
        "expiresAt",
      ],
      ["brainHandoffRef", "cancellationRequestedAt"],
    )
  )
    return false;
  const candidate = value.providerCandidate;
  if (
    !plain(candidate) ||
    Object.keys(candidate).length !== 2 ||
    candidate.commit !== AUTOWORK_COMMIT ||
    candidate.tree !== AUTOWORK_TREE
  )
    return false;
  const platform = value.platform;
  if (
    !plain(platform) ||
    !keys(platform, [
      "orgId",
      "actorId",
      "audience",
      "capability",
      "credentialId",
      "bindingId",
      "issuedAt",
      "expiresAt",
      "revocationRef",
    ]) ||
    !matches(platform.orgId, UUID) ||
    !bounded(platform.actorId, 256) ||
    !bounded(platform.audience, 256) ||
    !bounded(platform.capability, 256) ||
    !bounded(platform.credentialId, 256) ||
    !bounded(platform.bindingId, 256) ||
    !iso(platform.issuedAt) ||
    !iso(platform.expiresAt) ||
    !matches(platform.revocationRef, OPAQUE)
  )
    return false;
  if (
    value.contractVersion !== AUTOWORK_CONTRACT_VERSION ||
    value.protocolVersion !== AUTOWORK_PROTOCOL_VERSION ||
    !matches(value.requestId, UUID) ||
    !automation(value.automation) ||
    !(AUTOWORK_OPERATIONS as readonly unknown[]).includes(value.operationKind) ||
    !ref(value.inputRef) ||
    !Array.isArray(value.artifactRefs) ||
    !value.artifactRefs.every(ref) ||
    !bounded(value.resultDestinationRef) ||
    !OPAQUE.test(value.resultDestinationRef) ||
    !Array.isArray(value.correlationRefs) ||
    value.correlationRefs.length < 1 ||
    !value.correlationRefs.every(ref) ||
    !bounded(value.idempotencyKey, 160) ||
    !/^[A-Za-z0-9._:-]{16,160}$/.test(value.idempotencyKey) ||
    !iso(value.expiresAt)
  )
    return false;
  if (value.brainHandoffRef !== undefined && !ref(value.brainHandoffRef)) return false;
  if (value.cancellationRequestedAt !== undefined && !iso(value.cancellationRequestedAt))
    return false;
  if (value.operationKind === "external_assistance" && value.brainHandoffRef === undefined)
    return false;
  return true;
}

export function validateRequest(value: unknown): value is AutoworkRequest {
  try {
    return validateRequestSnapshot(snapshotPlainData(value));
  } catch {
    return false;
  }
}

function canonical(value: unknown): unknown {
  return Array.isArray(value)
    ? value.map(canonical)
    : plain(value)
      ? Object.fromEntries(
          Object.entries(value)
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([key, child]) => [key, canonical(child)]),
        )
      : value;
}
export function requestFingerprint(value: unknown): string {
  try {
    value = snapshotPlainData(value);
  } catch {
    throw new Error("invalid Autowork request");
  }
  if (!validateRequestSnapshot(value)) throw new Error("invalid Autowork request");
  return `sha256:${createHash("sha256")
    .update(JSON.stringify(canonical(value)))
    .digest("hex")}`;
}
export function sameIdempotencyContent(a: unknown, b: unknown): boolean {
  try {
    return requestFingerprint(a) === requestFingerprint(b);
  } catch {
    return false;
  }
}
export function assertIdempotency(existingFingerprint: string, incoming: unknown): void {
  if (existingFingerprint !== requestFingerprint(incoming))
    throw new Error("idempotency key conflicts with changed request");
}
export function validateRequestAt(
  value: unknown,
  now = new Date(),
  revocationDecision?: PlatformRevocationDecision,
): value is AutoworkRequest {
  try {
    value = snapshotPlainData(value);
    revocationDecision = snapshotPlainData(revocationDecision) as
      | PlatformRevocationDecision
      | undefined;
  } catch {
    return false;
  }
  return (
    validateRequestSnapshot(value) &&
    Number.isFinite(now.getTime()) &&
    value.cancellationRequestedAt === undefined &&
    revocationDecision?.status === "active" &&
    iso(revocationDecision.observedAt) &&
    Date.parse(revocationDecision.observedAt) <= now.getTime() &&
    now.getTime() - Date.parse(revocationDecision.observedAt) <= REVOCATION_MAX_AGE_MS &&
    revocationDecision.credentialId === value.platform.credentialId &&
    revocationDecision.bindingId === value.platform.bindingId &&
    revocationDecision.orgId === value.platform.orgId &&
    revocationDecision.actorId === value.platform.actorId &&
    revocationDecision.audience === value.platform.audience &&
    revocationDecision.capability === value.platform.capability &&
    revocationDecision.revocationRef === value.platform.revocationRef &&
    revocationDecision.authorizedOperation === value.operationKind &&
    Date.parse(value.platform.issuedAt) <= now.getTime() &&
    Date.parse(value.expiresAt) > now.getTime() &&
    Date.parse(value.platform.expiresAt) > now.getTime() &&
    true
  );
}

export function validateReceipt(
  value: unknown,
  request?: AutoworkRequest,
  now = new Date(),
): value is AutoworkReceipt {
  try {
    value = snapshotPlainData(value);
    request = request === undefined ? undefined : (snapshotPlainData(request) as AutoworkRequest);
  } catch {
    return false;
  }
  if (
    !plain(value) ||
    !keys(value, [
      "providerCandidate",
      "contractVersion",
      "requestId",
      "receiptId",
      "state",
      "acceptedAt",
      "updatedAt",
      "attemptCount",
      "requestFingerprint",
      "automation",
      "resultRefs",
      "evidenceRefs",
      "uncertainOutcome",
    ]) ||
    value.contractVersion !== AUTOWORK_CONTRACT_VERSION ||
    !plain(value.providerCandidate) ||
    Object.keys(value.providerCandidate).length !== 2 ||
    value.providerCandidate.commit !== AUTOWORK_COMMIT ||
    value.providerCandidate.tree !== AUTOWORK_TREE ||
    !matches(value.requestId, UUID) ||
    !matches(value.receiptId, UUID) ||
    !(AUTOWORK_STATES as readonly unknown[]).includes(value.state) ||
    !iso(value.acceptedAt) ||
    !iso(value.updatedAt) ||
    typeof value.attemptCount !== "number" ||
    !Number.isInteger(value.attemptCount) ||
    value.attemptCount < 0 ||
    !matches(value.requestFingerprint, SHA256) ||
    !automation(value.automation) ||
    !Array.isArray(value.resultRefs) ||
    !value.resultRefs.every(ref) ||
    !Array.isArray(value.evidenceRefs) ||
    !value.evidenceRefs.every(ref) ||
    typeof value.uncertainOutcome !== "boolean"
  )
    return false;
  const acceptedAt = Date.parse(value.acceptedAt);
  const updatedAt = Date.parse(value.updatedAt);
  if (
    !Number.isFinite(now.getTime()) ||
    !Number.isFinite(acceptedAt) ||
    !Number.isFinite(updatedAt) ||
    acceptedAt > updatedAt ||
    updatedAt > now.getTime()
  )
    return false;
  if (request) {
    const issuedAt = Date.parse(request.platform.issuedAt);
    const requestExpiresAt = Date.parse(request.expiresAt);
    const platformExpiresAt = Date.parse(request.platform.expiresAt);
    if (
      ![acceptedAt, issuedAt, requestExpiresAt, platformExpiresAt].every(Number.isFinite) ||
      acceptedAt < issuedAt ||
      acceptedAt >= requestExpiresAt ||
      acceptedAt >= platformExpiresAt ||
      value.requestId !== request.requestId ||
      value.providerCandidate.commit !== request.providerCandidate.commit ||
      value.providerCandidate.tree !== request.providerCandidate.tree ||
      value.requestFingerprint !== requestFingerprint(request) ||
      JSON.stringify(canonical(value.automation)) !== JSON.stringify(canonical(request.automation))
    )
      return false;
  }
  return true;
}
export function validateCallback(
  value: unknown,
  request: AutoworkRequest,
  expected?: {
    callbackBindingRef: string;
    now: Date;
    acceptedState: AutoworkAcceptedCallbackState;
  },
): value is AutoworkCallback {
  try {
    value = snapshotPlainData(value);
    request = snapshotPlainData(request) as AutoworkRequest;
    if (expected) {
      expected = {
        callbackBindingRef: expected.callbackBindingRef,
        now: expected.now,
        acceptedState: snapshotPlainData(expected.acceptedState) as AutoworkAcceptedCallbackState,
      };
    }
  } catch {
    return false;
  }
  if (
    !plain(value) ||
    !keys(value, [
      "requestId",
      "receiptId",
      "orgId",
      "callbackBindingRef",
      "sourceTimestamp",
      "receipt",
    ]) ||
    !matches(value.requestId, UUID) ||
    !matches(value.receiptId, UUID) ||
    !matches(value.orgId, UUID) ||
    !matches(value.callbackBindingRef, OPAQUE) ||
    !iso(value.sourceTimestamp) ||
    !expected ||
    !plain(expected.acceptedState) ||
    !keys(expected.acceptedState, [
      "latestSourceTimestamp",
      "acceptedReceiptIds",
      "latestReceiptState",
      "latestAttemptCount",
    ]) ||
    (expected.acceptedState.latestSourceTimestamp !== null &&
      !iso(expected.acceptedState.latestSourceTimestamp)) ||
    !Array.isArray(expected.acceptedState.acceptedReceiptIds) ||
    !expected.acceptedState.acceptedReceiptIds.every((receiptId) => UUID.test(receiptId)) ||
    (expected.acceptedState.latestReceiptState !== null &&
      !(AUTOWORK_STATES as readonly unknown[]).includes(
        expected.acceptedState.latestReceiptState,
      )) ||
    (expected.acceptedState.latestAttemptCount !== null &&
      (!Number.isInteger(expected.acceptedState.latestAttemptCount) ||
        expected.acceptedState.latestAttemptCount < 0)) ||
    (expected.acceptedState.latestReceiptState === null) !==
      (expected.acceptedState.latestAttemptCount === null) ||
    (expected.acceptedState.latestSourceTimestamp === null) !==
      (expected.acceptedState.latestReceiptState === null) ||
    !Number.isFinite(expected.now.getTime()) ||
    value.callbackBindingRef !== expected.callbackBindingRef ||
    !validateReceipt(value.receipt, request, expected.now)
  )
    return false;
  const sourceTimestamp = Date.parse(value.sourceTimestamp);
  const acceptedAt = Date.parse((value.receipt as AutoworkReceipt).acceptedAt);
  const updatedAt = Date.parse((value.receipt as AutoworkReceipt).updatedAt);
  const latestSourceTimestamp =
    expected.acceptedState.latestSourceTimestamp === null
      ? null
      : Date.parse(expected.acceptedState.latestSourceTimestamp);
  const receipt = value.receipt as AutoworkReceipt;
  const latestReceiptState = expected.acceptedState.latestReceiptState;
  const latestAttemptCount = expected.acceptedState.latestAttemptCount;
  const latestStateIsTerminal =
    latestReceiptState !== null &&
    !(NON_TERMINAL_RECEIPT_STATES as readonly ReceiptState[]).includes(latestReceiptState);
  const stateRank = (state: ReceiptState): number =>
    state === "accepted" ? 0 : state === "queued" ? 1 : state === "running" ? 2 : 3;
  return (
    value.requestId === receipt.requestId &&
    value.receiptId === receipt.receiptId &&
    value.orgId === request.platform.orgId &&
    sourceTimestamp === updatedAt &&
    sourceTimestamp >= acceptedAt &&
    sourceTimestamp <= expected.now.getTime() &&
    (latestSourceTimestamp === null || sourceTimestamp > latestSourceTimestamp) &&
    !expected.acceptedState.acceptedReceiptIds.includes(value.receiptId) &&
    (latestAttemptCount === null || receipt.attemptCount >= latestAttemptCount) &&
    !latestStateIsTerminal &&
    (latestReceiptState === null ||
      latestAttemptCount === null ||
      receipt.attemptCount > latestAttemptCount ||
      stateRank(receipt.state) >= stateRank(latestReceiptState))
  );
}
