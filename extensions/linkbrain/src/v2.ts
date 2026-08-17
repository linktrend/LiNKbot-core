// Kept local to preserve extension package boundaries; these are facts issued by Platform.
export const PLATFORM_COMMIT = "5452f90a35ed690698a9161117a9d92c69985582" as const;
export const PLATFORM_TREE = "90b51726f7a77e4620151a463a10cfc3d2007c88" as const;
export const PLATFORM_AUTH_CLAIMS_CONTRACT_VERSION = "platform.auth-claims/1.1.0" as const;
export const PLATFORM_AUTH_CLAIMS_SCHEMA_VERSION = "2026.07.28-w4" as const;

export const LINKBRAIN_V2_COMMIT = "8ce1d737f8870a479f07b1741c58d6681cd07aa1" as const;
export const LINKBRAIN_V2_TREE = "0cae42d612342f5e52c7e2e0e76cb6fc2f6d81f3" as const;
export const LINKBRAIN_V2_CONTRACT_VERSION = "brain.v2/2.0.0" as const;
export const LINKBRAIN_V2_PIN_CONTRACT_VERSION = "brain.v2/2.0.0" as const;
export const LINKBRAIN_V2_SCHEMA_VERSION = "2.0.0" as const;
export const LINKBRAIN_V2_MCP_PROTOCOL = "2026-07-28" as const;

export const LINKBRAIN_V2_ARTIFACT_DIGESTS = Object.freeze({
  contractsSchema: "sha256:ff02970e0327fc578295637f26e99904d736af8c412a1523586744756881682b",
  sessionlessMcp: "sha256:f88ba9474d23f5a8c46fd39fee6cd1bf4b50b87c40c7c68cefba2023d566eaea",
  httpRegistry: "sha256:fb076dd096d7719202c9790f97699750e2b8e842105d9ebe36baed4048aefe25",
  contractTypes: "sha256:ca2f68671f7fb8738bba7a1629d09de6c8f84d94551d91cea7b908f45ec41950",
  discoveryFixture: "sha256:c45caff2baeba4e47fe108f7ad264efae58373dd57608ffc54485ae2908d00ad",
  projectionFixture: "sha256:4995f99925e9ba2911b24818d0b96550249f11ecdc7f428ca1ae49906d3da36e",
} as const);

export const BRAIN_V2_DISCLOSURE_LEVELS = Object.freeze([
  "guide",
  "index",
  "metadata",
  "record",
  "evidence",
] as const);

export const BRAIN_V2_OPERATIONS = Object.freeze([
  "v2.discovery",
  "v2.capability.status",
  "v2.projection.ingest",
  "v2.projection.list",
  "v2.projection.get",
  "v2.projection.evidence",
  "v2.task.get",
  "v2.task.list",
  "v2.inbox.read",
  "v2.message.send",
  "v2.checkpoint.write",
  "v2.handoff.create",
  "v2.handoff.accept",
  "v2.conflict.report",
  "v2.event.poll",
  "v2.event.ack",
  "v2.finding.submit",
  "v2.knowledge.browse",
  "v2.knowledge.search",
  "v2.knowledge.load",
] as const);

export type BrainV2Disclosure = (typeof BRAIN_V2_DISCLOSURE_LEVELS)[number];
export type BrainV2Operation = (typeof BRAIN_V2_OPERATIONS)[number];
export type BrainV2ProviderStatus =
  | "available"
  | "degraded"
  | "offline"
  | "unauthorized"
  | "forbidden"
  | "stale"
  | "contract_incompatible"
  | "disabled"
  | "unknown";
export type BrainV2FailureStatus = Exclude<BrainV2ProviderStatus, "available">;

export type BrainV2PlatformIdentity = Readonly<{
  providerCandidate: Readonly<{ commit: typeof PLATFORM_COMMIT; tree: typeof PLATFORM_TREE }>;
  claimContractVersion: typeof PLATFORM_AUTH_CLAIMS_CONTRACT_VERSION;
  schemaVersion: typeof PLATFORM_AUTH_CLAIMS_SCHEMA_VERSION;
  actorId: string;
  organizationRef: string;
  runtimeBindingRef: string;
  credentialReference: string;
  issuer: string;
  audience: string;
  serviceScopes: readonly string[];
  capabilities: readonly string[];
  issuedAt: string;
  expiresAt: string;
  revocationStatus: "active";
}>;

export type BrainV2PlatformRevocationDecision = Readonly<{
  status: "active" | "revoked";
  observedAt: string;
  actorId: string;
  organizationRef: string;
  runtimeBindingRef: string;
  credentialReference: string;
}>;

export type BrainV2AuthenticatedProviderEvidence = Readonly<{
  providerCandidate: Readonly<{
    commit: typeof LINKBRAIN_V2_COMMIT;
    tree: typeof LINKBRAIN_V2_TREE;
  }>;
  contractVersion: typeof LINKBRAIN_V2_PIN_CONTRACT_VERSION;
  artifactDigests: typeof LINKBRAIN_V2_ARTIFACT_DIGESTS;
}>;

export type BrainV2IdentityExpectation = Readonly<{
  actorId: string;
  organizationRef: string;
  runtimeBindingRef: string;
  issuer: string;
  audience: string;
  requiredScope: string;
  requiredCapability: string;
  now?: Date | string;
}>;

export type BrainV2Negotiation = Readonly<{
  protocolVersion: typeof LINKBRAIN_V2_MCP_PROTOCOL;
  sessionless: true;
  contractVersion: typeof LINKBRAIN_V2_CONTRACT_VERSION;
  authority: "advisory";
  executionAuthority: "none";
  sdkSupportsModernProtocol: true;
}>;

export type BrainV2Page<T> = Readonly<{
  snapshotId: string;
  disclosure: BrainV2Disclosure;
  pagination: Readonly<{
    limit: number;
    cursor?: string;
    nextCursor?: string;
  }>;
  data: T;
}>;

export type BrainV2SafeResult<T> =
  | Readonly<{ ok: true; data: T }>
  | Readonly<{
      ok: false;
      status: BrainV2FailureStatus;
      reason: string;
    }>;

export type BrainV2TransportFailure = Readonly<{
  status: BrainV2FailureStatus;
  reason: string;
}>;

export type BrainV2TransportRequest = Readonly<{
  protocolVersion: typeof LINKBRAIN_V2_MCP_PROTOCOL;
  method: "discover" | "tools/call";
  actorBindingRef: string;
  organizationRef: string;
  contractVersion: typeof LINKBRAIN_V2_CONTRACT_VERSION;
  params?: Readonly<Record<string, unknown>>;
}>;

export type BrainV2Transport = Readonly<{
  request(input: BrainV2TransportRequest): Promise<unknown>;
}>;

const REF = /^[A-Za-z0-9][A-Za-z0-9._~:/@-]{0,255}$/;
const ISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,9}))?Z$/u;
const SENSITIVE_VALUE =
  /(?:\bbearer\s+\S+|\b(?:api[_-]?key|access[_-]?token|secret|authorization)\s*[:=]\s*\S+|\bsk-[A-Za-z0-9]{16,}\b|\bghp_[A-Za-z0-9]{20,}\b|-----BEGIN\s+[A-Z ]*PRIVATE KEY-----|\b(?:system prompt|developer prompt|chat transcript|raw transcript|raw tool output|chain of thought|internal reasoning|private memory|case vault)\b)/iu;
const REVOCATION_MAX_AGE_MS = 5 * 60 * 1000;
const FORBIDDEN_FIELDS = new Set([
  "body",
  "binary",
  "bytes",
  "caseVault",
  "caseVaultContent",
  "content",
  "contentHash",
  "digest",
  "evidence",
  "file",
  "filePath",
  "fullContent",
  "hash",
  "matterReference",
  "payload",
  "prompt",
  "rawCapture",
  "rawToolOutput",
  "reasoning",
  "recording",
  "secret",
  "secrets",
  "sha256",
  "transcript",
  "workProduct",
]);
const FORBIDDEN_IDENTITY_FIELDS = new Set([
  "actorId",
  "audience",
  "credentialId",
  "credentialReference",
  "issuer",
  "organizationRef",
  "runtimeBindingRef",
  "scope",
  "serviceScopes",
]);
const FORBIDDEN_SECRET_KEYS = new Set([
  "accesskey",
  "apikey",
  "authorization",
  "bearer",
  "clientsecret",
  "password",
  "privatekey",
  "secret",
  "token",
]);
const canonicalKey = (key: string): string => key.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
const FORBIDDEN_FIELDS_CANONICAL = new Set([...FORBIDDEN_FIELDS].map(canonicalKey));
const FORBIDDEN_IDENTITY_FIELDS_CANONICAL = new Set(
  [...FORBIDDEN_IDENTITY_FIELDS].map(canonicalKey),
);
const FORBIDDEN_SECRET_KEYS_CANONICAL = new Set([
  ...[...FORBIDDEN_SECRET_KEYS].map(canonicalKey),
  "accesstoken",
  "refreshtoken",
  "credential",
  "credentialvalue",
]);
const MAX_SAFE_NODES = 1_000;
const MAX_SAFE_DEPTH = 16;
const MAX_SAFE_KEYS = 100;
const MAX_SAFE_KEY_LENGTH = 80;
const MAX_SAFE_STRING_TOTAL = 32_768;

const objectRecord = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === "object" && !Array.isArray(value);
const ownDataString = (value: unknown, key: string): string | undefined => {
  if (!objectRecord(value)) return undefined;
  try {
    const descriptor = Object.getOwnPropertyDescriptor(value, key);
    return descriptor && "value" in descriptor && typeof descriptor.value === "string"
      ? descriptor.value
      : undefined;
  } catch {
    return undefined;
  }
};

const boundedRef = (value: unknown): value is string =>
  typeof value === "string" && REF.test(value);

const assertObjectKeys = (value: Record<string, unknown>, allowed: readonly string[]) => {
  const allowedSet = new Set(allowed);
  for (const key of Object.keys(value)) {
    if (!allowedSet.has(key)) {
      throw new Error(`brain_v2_unknown_field:${key}`);
    }
  }
};

type SafeSnapshotState = {
  nodes: number;
  stringTotal: number;
  readonly seen: WeakSet<object>;
};

const assertSafeKey = (key: string): void => {
  const policyKey = canonicalKey(key);
  if (key.length > MAX_SAFE_KEY_LENGTH || FORBIDDEN_FIELDS_CANONICAL.has(policyKey)) {
    throw new Error(`brain_v2_private_payload:${key}`);
  }
  if (FORBIDDEN_IDENTITY_FIELDS_CANONICAL.has(policyKey)) {
    throw new Error(`brain_v2_identity_override:${key}`);
  }
  if ([...FORBIDDEN_SECRET_KEYS_CANONICAL].some((secretKey) => policyKey.includes(secretKey))) {
    throw new Error(`brain_v2_secret_field:${key}`);
  }
};

const snapshotSafeValue = (
  value: unknown,
  depth: number,
  path: string,
  state: SafeSnapshotState,
  enforcePayloadFieldPolicy: boolean,
): unknown => {
  state.nodes += 1;
  if (state.nodes > MAX_SAFE_NODES) {
    throw new Error("brain_v2_payload_too_large");
  }
  if (value === null || typeof value === "boolean") return value;
  if (typeof value === "string") {
    state.stringTotal += value.length;
    if (value.length > 512 || state.stringTotal > MAX_SAFE_STRING_TOTAL) {
      throw new Error(`brain_v2_unbounded_string:${path}`);
    }
    if (enforcePayloadFieldPolicy && SENSITIVE_VALUE.test(value)) {
      throw new Error(`brain_v2_sensitive_string:${path}`);
    }
    return value;
  }
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value !== "object") {
    throw new Error(`brain_v2_non_json_value:${path}`);
  }
  if (state.seen.has(value)) {
    throw new Error(`brain_v2_cyclic_payload:${path}`);
  }
  state.seen.add(value);

  const descriptors = Object.getOwnPropertyDescriptors(value);
  const symbolKeys = Object.getOwnPropertySymbols(descriptors);
  if (symbolKeys.length > 0) {
    throw new Error(`brain_v2_non_json_value:${path}`);
  }
  for (const descriptor of Object.values(descriptors)) {
    if (descriptor.get !== undefined || descriptor.set !== undefined) {
      throw new Error(`brain_v2_accessor_payload:${path}`);
    }
  }

  if (Array.isArray(value)) {
    const prototype = Object.getPrototypeOf(value);
    if (prototype !== Array.prototype || depth >= MAX_SAFE_DEPTH) {
      throw new Error(`brain_v2_payload_depth_or_array:${path}`);
    }
    const lengthHolder = Object.getOwnPropertyDescriptor(descriptors, "length");
    const lengthDescriptor = lengthHolder?.value as PropertyDescriptor | undefined;
    const length = lengthDescriptor?.value;
    if (!Number.isSafeInteger(length) || length < 0 || length > MAX_SAFE_KEYS) {
      throw new Error(`brain_v2_payload_depth_or_array:${path}`);
    }
    const snapshot = new Array<unknown>(length);
    for (let index = 0; index < length; index += 1) {
      const key = String(index);
      const holder = Object.getOwnPropertyDescriptor(descriptors, key);
      const descriptor = holder?.value as PropertyDescriptor | undefined;
      if (
        !descriptor ||
        !("value" in descriptor) ||
        !descriptor.enumerable ||
        descriptor.get !== undefined ||
        descriptor.set !== undefined
      ) {
        throw new Error(`brain_v2_sparse_or_accessor_array:${path}[${key}]`);
      }
      Object.defineProperty(snapshot, key, {
        configurable: false,
        enumerable: true,
        writable: false,
        value: snapshotSafeValue(
          descriptor.value,
          depth + 1,
          `${path}[${key}]`,
          state,
          enforcePayloadFieldPolicy,
        ),
      });
    }
    for (const [key, descriptor] of Object.entries(descriptors)) {
      if (key === "length") continue;
      if (!descriptor.enumerable || !/^(?:0|[1-9]\d*)$/.test(key) || Number(key) >= length) {
        throw new Error(`brain_v2_non_json_value:${path}.${key}`);
      }
    }
    return Object.freeze(snapshot);
  }

  const prototype = Object.getPrototypeOf(value);
  if (prototype !== Object.prototype && prototype !== null) {
    throw new Error(`brain_v2_non_plain_object:${path}`);
  }
  const entries = Object.entries(descriptors);
  if (entries.length > MAX_SAFE_KEYS || depth >= MAX_SAFE_DEPTH) {
    throw new Error(`brain_v2_payload_depth_or_object:${path}`);
  }
  const snapshot = Object.create(null) as Record<string, unknown>;
  for (const [key, descriptor] of entries) {
    if (!descriptor.enumerable) {
      throw new Error(`brain_v2_non_json_value:${path}.${key}`);
    }
    if (enforcePayloadFieldPolicy) {
      assertSafeKey(key);
    }
    snapshot[key] = snapshotSafeValue(
      descriptor.value,
      depth + 1,
      `${path}.${key}`,
      state,
      enforcePayloadFieldPolicy,
    );
  }
  return Object.freeze(snapshot);
};

function assertIso(value: unknown, field: string): asserts value is string {
  if (typeof value !== "string") {
    throw new Error(`brain_v2_invalid_timestamp:${field}`);
  }
  const match = ISO.exec(value);
  const parsed = Date.parse(value);
  if (!match || !Number.isFinite(parsed)) throw new Error(`brain_v2_invalid_timestamp:${field}`);
  const date = new Date(parsed);
  if (
    date.getUTCFullYear() !== Number(match[1]) ||
    date.getUTCMonth() + 1 !== Number(match[2]) ||
    date.getUTCDate() !== Number(match[3]) ||
    date.getUTCHours() !== Number(match[4]) ||
    date.getUTCMinutes() !== Number(match[5]) ||
    date.getUTCSeconds() !== Number(match[6])
  ) {
    throw new Error(`brain_v2_invalid_timestamp:${field}`);
  }
}

const assertDenseAuthorizationArray = (
  value: unknown,
  requiredValue: unknown,
  field: "serviceScopes" | "capabilities",
): void => {
  if (!Array.isArray(value) || !boundedRef(requiredValue)) {
    throw new Error("brain_v2_scope_or_capability_missing");
  }
  const lengthDescriptor = Object.getOwnPropertyDescriptor(value, "length");
  const length = lengthDescriptor?.value;
  if (!Number.isSafeInteger(length) || length < 1 || length > MAX_SAFE_KEYS) {
    throw new Error("brain_v2_scope_or_capability_missing");
  }
  let requiredValueFound = false;
  for (let index = 0; index < length; index += 1) {
    const descriptor = Object.getOwnPropertyDescriptor(value, String(index));
    if (
      !descriptor ||
      !("value" in descriptor) ||
      !descriptor.enumerable ||
      descriptor.get !== undefined ||
      descriptor.set !== undefined ||
      !boundedRef(descriptor.value)
    ) {
      throw new Error(`brain_v2_authorization_array_not_dense:${field}`);
    }
    if (descriptor.value === requiredValue) {
      requiredValueFound = true;
    }
  }
  if (!requiredValueFound) {
    throw new Error("brain_v2_scope_or_capability_missing");
  }
};

export function assertBrainV2PlatformIdentity(
  input: unknown,
  expected: BrainV2IdentityExpectation,
): asserts input is BrainV2PlatformIdentity {
  if (!objectRecord(input)) {
    throw new Error("brain_v2_identity_not_object");
  }
  const identityDescriptors = Object.getOwnPropertyDescriptors(input);
  assertObjectKeys(identityDescriptors, [
    "providerCandidate",
    "claimContractVersion",
    "schemaVersion",
    "actorId",
    "organizationRef",
    "runtimeBindingRef",
    "credentialReference",
    "issuer",
    "audience",
    "serviceScopes",
    "capabilities",
    "issuedAt",
    "expiresAt",
    "revocationStatus",
  ]);
  const identityValue = (field: string): unknown => {
    const descriptorHolder = Object.getOwnPropertyDescriptor(identityDescriptors, field);
    const descriptor = descriptorHolder?.value as PropertyDescriptor | undefined;
    if (!descriptor || !("value" in descriptor) || !descriptor.enumerable) {
      throw new Error(`brain_v2_identity_field_not_own_data:${field}`);
    }
    return descriptor.value;
  };
  const candidate = identityValue("providerCandidate");
  const candidateDescriptors = objectRecord(candidate)
    ? Object.getOwnPropertyDescriptors(candidate)
    : undefined;
  const candidateDescriptor = (field: "commit" | "tree"): PropertyDescriptor | undefined => {
    const holder = candidateDescriptors
      ? Object.getOwnPropertyDescriptor(candidateDescriptors, field)
      : undefined;
    return holder?.value as PropertyDescriptor | undefined;
  };
  const commitDescriptor = candidateDescriptor("commit");
  const treeDescriptor = candidateDescriptor("tree");
  if (
    !candidateDescriptors ||
    Object.keys(candidateDescriptors).length !== 2 ||
    commitDescriptor?.value !== PLATFORM_COMMIT ||
    treeDescriptor?.value !== PLATFORM_TREE ||
    commitDescriptor.get !== undefined ||
    commitDescriptor.set !== undefined ||
    treeDescriptor.get !== undefined ||
    treeDescriptor.set !== undefined
  ) {
    throw new Error("brain_v2_platform_candidate_mismatch");
  }
  if (
    identityValue("claimContractVersion") !== PLATFORM_AUTH_CLAIMS_CONTRACT_VERSION ||
    identityValue("schemaVersion") !== PLATFORM_AUTH_CLAIMS_SCHEMA_VERSION
  ) {
    throw new Error("brain_v2_platform_contract_mismatch");
  }
  for (const [field, expectedValue] of [
    ["actorId", expected.actorId],
    ["organizationRef", expected.organizationRef],
    ["runtimeBindingRef", expected.runtimeBindingRef],
    ["issuer", expected.issuer],
    ["audience", expected.audience],
  ] as const) {
    const value = identityValue(field);
    if (!boundedRef(value) || value !== expectedValue) {
      throw new Error(`brain_v2_identity_mismatch:${field}`);
    }
  }
  const credentialReference = identityValue("credentialReference");
  if (!boundedRef(credentialReference)) {
    throw new Error("brain_v2_credential_reference_invalid");
  }
  const serviceScopes = identityValue("serviceScopes");
  const capabilities = identityValue("capabilities");
  assertDenseAuthorizationArray(serviceScopes, expected.requiredScope, "serviceScopes");
  assertDenseAuthorizationArray(capabilities, expected.requiredCapability, "capabilities");
  const issuedAt = identityValue("issuedAt");
  const expiresAt = identityValue("expiresAt");
  assertIso(issuedAt, "issuedAt");
  assertIso(expiresAt, "expiresAt");
  const now = expected.now === undefined ? Date.now() : new Date(expected.now).getTime();
  if (!Number.isFinite(now) || Date.parse(expiresAt) <= now || Date.parse(issuedAt) > now) {
    throw new Error("brain_v2_identity_expired_or_not_yet_valid");
  }
  if (identityValue("revocationStatus") !== "active") {
    throw new Error("brain_v2_identity_revoked");
  }
}

export function assertBrainV2Negotiation(input: unknown): asserts input is BrainV2Negotiation {
  let snapshot: unknown;
  try {
    snapshot = snapshotSafeValue(
      input,
      0,
      "negotiation",
      { nodes: 0, stringTotal: 0, seen: new WeakSet() },
      false,
    );
  } catch {
    throw new Error("brain_v2_negotiation_not_object");
  }
  if (!objectRecord(snapshot)) {
    throw new Error("brain_v2_negotiation_not_object");
  }
  assertObjectKeys(snapshot, [
    "protocolVersion",
    "sessionless",
    "contractVersion",
    "authority",
    "executionAuthority",
    "sdkSupportsModernProtocol",
  ]);
  if (
    snapshot.protocolVersion !== LINKBRAIN_V2_MCP_PROTOCOL ||
    snapshot.sessionless !== true ||
    snapshot.contractVersion !== LINKBRAIN_V2_CONTRACT_VERSION ||
    snapshot.authority !== "advisory" ||
    snapshot.executionAuthority !== "none" ||
    snapshot.sdkSupportsModernProtocol !== true
  ) {
    throw new Error("brain_v2_negotiation_incompatible");
  }
}

export function assertBrainV2SafePayload<T>(input: T): T {
  return snapshotSafeValue(
    input,
    0,
    "value",
    {
      nodes: 0,
      stringTotal: 0,
      seen: new WeakSet(),
    },
    true,
  ) as T;
}

const snapshotBrainV2PlatformIdentity = (input: unknown): BrainV2PlatformIdentity => {
  try {
    return snapshotSafeValue(
      input,
      0,
      "identity",
      { nodes: 0, stringTotal: 0, seen: new WeakSet() },
      false,
    ) as BrainV2PlatformIdentity;
  } catch {
    throw new Error("brain_v2_identity_snapshot_invalid");
  }
};

const assertAuthenticatedProviderEvidence = (input: unknown): void => {
  const snapshot = snapshotSafeValue(
    input,
    0,
    "providerEvidence",
    { nodes: 0, stringTotal: 0, seen: new WeakSet() },
    false,
  );
  if (!objectRecord(snapshot)) throw new Error("brain_v2_provider_evidence_invalid");
  assertObjectKeys(snapshot, ["providerCandidate", "contractVersion", "artifactDigests"]);
  if (!objectRecord(snapshot.providerCandidate) || !objectRecord(snapshot.artifactDigests)) {
    throw new Error("brain_v2_provider_evidence_invalid");
  }
  const artifactDigests = snapshot.artifactDigests;
  assertObjectKeys(snapshot.providerCandidate, ["commit", "tree"]);
  assertObjectKeys(artifactDigests, Object.keys(LINKBRAIN_V2_ARTIFACT_DIGESTS));
  if (
    snapshot.providerCandidate.commit !== LINKBRAIN_V2_COMMIT ||
    snapshot.providerCandidate.tree !== LINKBRAIN_V2_TREE ||
    snapshot.contractVersion !== LINKBRAIN_V2_PIN_CONTRACT_VERSION ||
    Object.entries(LINKBRAIN_V2_ARTIFACT_DIGESTS).some(
      ([key, digest]) => artifactDigests[key] !== digest,
    )
  ) {
    throw new Error("brain_v2_provider_evidence_mismatch");
  }
};

const assertFreshRevocationDecision = (
  input: unknown,
  identity: BrainV2PlatformIdentity,
  now: Date | string,
): void => {
  const snapshot = snapshotSafeValue(
    input,
    0,
    "revocationDecision",
    { nodes: 0, stringTotal: 0, seen: new WeakSet() },
    false,
  );
  if (!objectRecord(snapshot)) throw new Error("brain_v2_revocation_decision_invalid");
  assertObjectKeys(snapshot, [
    "status",
    "observedAt",
    "actorId",
    "organizationRef",
    "runtimeBindingRef",
    "credentialReference",
  ]);
  assertIso(snapshot.observedAt, "revocation_observed_at");
  const nowMs = new Date(now).getTime();
  const observedAt = Date.parse(snapshot.observedAt);
  const issuedAt = Date.parse(identity.issuedAt);
  if (
    snapshot.status !== "active" ||
    !Number.isFinite(nowMs) ||
    observedAt < issuedAt ||
    observedAt > nowMs ||
    nowMs - observedAt > REVOCATION_MAX_AGE_MS ||
    snapshot.actorId !== identity.actorId ||
    snapshot.organizationRef !== identity.organizationRef ||
    snapshot.runtimeBindingRef !== identity.runtimeBindingRef ||
    snapshot.credentialReference !== identity.credentialReference
  ) {
    throw new Error("brain_v2_identity_revoked_or_stale");
  }
};

const DISCLOSURE_ORDER: Record<BrainV2Disclosure, number> = {
  guide: 0,
  index: 1,
  metadata: 2,
  record: 3,
  evidence: 4,
};
const OPERATION_DISCLOSURE: Readonly<Record<string, BrainV2Disclosure>> = {
  "v2.discovery": "guide",
  "v2.capability.status": "metadata",
  "v2.projection.ingest": "metadata",
  "v2.projection.list": "index",
  "v2.projection.get": "record",
  "v2.projection.evidence": "evidence",
  "v2.task.get": "record",
  "v2.task.list": "index",
  "v2.inbox.read": "metadata",
  "v2.message.send": "metadata",
  "v2.checkpoint.write": "metadata",
  "v2.handoff.create": "metadata",
  "v2.handoff.accept": "metadata",
  "v2.conflict.report": "metadata",
  "v2.event.poll": "metadata",
  "v2.event.ack": "metadata",
  "v2.finding.submit": "metadata",
  "v2.knowledge.search": "index",
  "v2.knowledge.browse": "index",
  "v2.knowledge.load": "record",
};

export function assertBrainV2Page<T>(
  input: unknown,
  operation: BrainV2Operation,
  expectedSnapshotId?: string,
  expectedCursor?: string,
): asserts input is BrainV2Page<T> {
  const snapshot = assertBrainV2SafePayload(input);
  assertBrainV2PageSnapshot<T>(snapshot, operation, expectedSnapshotId, expectedCursor);
}

function assertBrainV2PageSnapshot<T>(
  input: unknown,
  operation: BrainV2Operation,
  expectedSnapshotId?: string,
  expectedCursor?: string,
): asserts input is BrainV2Page<T> {
  if (!objectRecord(input)) {
    throw new Error("brain_v2_response_not_object");
  }
  assertObjectKeys(input, ["snapshotId", "disclosure", "pagination", "data"]);
  if (!Object.hasOwn(input, "data")) {
    throw new Error("brain_v2_response_data_missing");
  }
  if (!boundedRef(input.snapshotId)) {
    throw new Error("brain_v2_snapshot_invalid");
  }
  if (expectedSnapshotId !== undefined && input.snapshotId !== expectedSnapshotId) {
    throw new Error("brain_v2_snapshot_mismatch");
  }
  const disclosure = input.disclosure;
  const required = OPERATION_DISCLOSURE[operation];
  if (
    !BRAIN_V2_DISCLOSURE_LEVELS.includes(disclosure as BrainV2Disclosure) ||
    required === undefined ||
    DISCLOSURE_ORDER[disclosure as BrainV2Disclosure] > DISCLOSURE_ORDER[required]
  ) {
    throw new Error("brain_v2_disclosure_exceeds_operation_limit");
  }
  const pagination = input.pagination;
  if (!objectRecord(pagination)) {
    throw new Error("brain_v2_pagination_invalid");
  }
  assertObjectKeys(pagination, ["limit", "cursor", "nextCursor"]);
  if (
    typeof pagination.limit !== "number" ||
    !Number.isSafeInteger(pagination.limit) ||
    pagination.limit < 1 ||
    pagination.limit > 100
  ) {
    throw new Error("brain_v2_pagination_limit_invalid");
  }
  for (const key of ["cursor", "nextCursor"] as const) {
    if (
      pagination[key] !== undefined &&
      (typeof pagination[key] !== "string" || !/^v2:\d+$/.test(pagination[key]))
    ) {
      throw new Error(`brain_v2_pagination_${key}_invalid`);
    }
  }
  if (expectedCursor !== undefined && pagination.cursor !== expectedCursor) {
    throw new Error("brain_v2_pagination_cursor_mismatch");
  }
}

export type BrainV2PrivateCapture = Readonly<{
  namespace: "private";
  captureRef: string;
  idempotencyKey: string;
  metadata: Readonly<Record<string, unknown>>;
}>;

export type BrainV2PrivateCheckpoint = Readonly<{
  namespace: "private";
  checkpointRef: string;
  idempotencyKey: string;
  metadata: Readonly<Record<string, unknown>>;
}>;

export function preparePrivateCapture(input: {
  namespace: "private";
  captureRef: string;
  idempotencyKey: string;
  metadata: Readonly<Record<string, unknown>>;
}): BrainV2PrivateCapture {
  const snapshot = snapshotSafeValue(
    input,
    0,
    "capture",
    { nodes: 0, stringTotal: 0, seen: new WeakSet() },
    false,
  ) as Record<string, unknown>;
  assertObjectKeys(snapshot, ["namespace", "captureRef", "idempotencyKey", "metadata"]);
  if (
    snapshot.namespace !== "private" ||
    !boundedRef(snapshot.captureRef) ||
    !boundedRef(snapshot.idempotencyKey)
  ) {
    throw new Error("brain_v2_capture_reference_invalid");
  }
  const metadata = assertBrainV2SafePayload(snapshot.metadata);
  if (!objectRecord(metadata)) {
    throw new Error("brain_v2_capture_metadata_invalid");
  }
  return {
    namespace: "private",
    captureRef: snapshot.captureRef,
    idempotencyKey: snapshot.idempotencyKey,
    metadata,
  };
}

export function preparePrivateCheckpoint(input: {
  namespace: "private";
  checkpointRef: string;
  idempotencyKey: string;
  metadata: Readonly<Record<string, unknown>>;
}): BrainV2PrivateCheckpoint {
  const snapshot = snapshotSafeValue(
    input,
    0,
    "checkpoint",
    { nodes: 0, stringTotal: 0, seen: new WeakSet() },
    false,
  ) as Record<string, unknown>;
  assertObjectKeys(snapshot, ["namespace", "checkpointRef", "idempotencyKey", "metadata"]);
  if (
    snapshot.namespace !== "private" ||
    !boundedRef(snapshot.checkpointRef) ||
    !boundedRef(snapshot.idempotencyKey)
  ) {
    throw new Error("brain_v2_checkpoint_reference_invalid");
  }
  const metadata = assertBrainV2SafePayload(snapshot.metadata);
  if (!objectRecord(metadata)) {
    throw new Error("brain_v2_checkpoint_metadata_invalid");
  }
  return {
    namespace: "private",
    checkpointRef: snapshot.checkpointRef,
    idempotencyKey: snapshot.idempotencyKey,
    metadata,
  };
}

function assertCursor(value: unknown): asserts value is string | undefined {
  if (value !== undefined && (typeof value !== "string" || !/^v2:\d+$/.test(value))) {
    throw new Error("brain_v2_cursor_invalid");
  }
}

function assertIdempotencyKey(value: unknown): asserts value is string {
  if (!boundedRef(value)) {
    throw new Error("brain_v2_idempotency_key_invalid");
  }
}

function assertCursorSnapshot(cursor: unknown, snapshotId: unknown): void {
  assertCursor(cursor);
  if (cursor !== undefined && !boundedRef(snapshotId)) {
    throw new Error("brain_v2_snapshot_required_for_cursor");
  }
  if (snapshotId !== undefined && !boundedRef(snapshotId)) {
    throw new Error("brain_v2_snapshot_invalid");
  }
}

function assertLoadReferences(reference: unknown, snapshotId: unknown): void {
  if (!boundedRef(reference) || !boundedRef(snapshotId)) {
    throw new Error("brain_v2_load_reference_invalid");
  }
}

export function createBrainV2Client(input: {
  identity: BrainV2PlatformIdentity;
  identityExpectation: Omit<BrainV2IdentityExpectation, "now">;
  authenticatedProviderEvidence: BrainV2AuthenticatedProviderEvidence;
  resolveRevocationDecision: () =>
    | BrainV2PlatformRevocationDecision
    | Promise<BrainV2PlatformRevocationDecision>;
  transport: BrainV2Transport;
  clock?: () => Date | string;
}): {
  negotiate(): Promise<BrainV2SafeResult<BrainV2Negotiation>>;
  discovery(): Promise<BrainV2SafeResult<BrainV2Page<unknown>>>;
  search(
    query: string,
    cursor?: string,
    snapshotId?: string,
  ): Promise<BrainV2SafeResult<BrainV2Page<unknown>>>;
  browse(cursor?: string, snapshotId?: string): Promise<BrainV2SafeResult<BrainV2Page<unknown>>>;
  load(reference: string, snapshotId: string): Promise<BrainV2SafeResult<BrainV2Page<unknown>>>;
  submitFinding(
    metadata: Readonly<Record<string, unknown>>,
    idempotencyKey: string,
  ): Promise<BrainV2SafeResult<BrainV2Page<unknown>>>;
  readInbox(cursor?: string, snapshotId?: string): Promise<BrainV2SafeResult<BrainV2Page<unknown>>>;
  sendMessage(
    metadata: Readonly<Record<string, unknown>>,
    idempotencyKey: string,
  ): Promise<BrainV2SafeResult<BrainV2Page<unknown>>>;
  writeCheckpoint(
    checkpoint: BrainV2PrivateCheckpoint,
  ): Promise<BrainV2SafeResult<BrainV2Page<unknown>>>;
  reportConflict(
    metadata: Readonly<Record<string, unknown>>,
    idempotencyKey: string,
  ): Promise<BrainV2SafeResult<BrainV2Page<unknown>>>;
} {
  let negotiated = false;
  const currentIdentityExpectation = (): BrainV2IdentityExpectation => ({
    ...input.identityExpectation,
    now: input.clock?.() ?? new Date(),
  });
  let trustedIdentity: BrainV2PlatformIdentity | undefined;
  let identityConstructionError: unknown;
  let providerEvidenceError: unknown;
  let transportRequest: BrainV2Transport["request"] | undefined;
  let transportConstructionError: unknown;
  let revocationResolver:
    | (() => BrainV2PlatformRevocationDecision | Promise<BrainV2PlatformRevocationDecision>)
    | undefined;
  try {
    const identitySnapshot = snapshotBrainV2PlatformIdentity(input.identity);
    assertBrainV2PlatformIdentity(identitySnapshot, currentIdentityExpectation());
    trustedIdentity = identitySnapshot;
  } catch (error) {
    identityConstructionError = error;
  }
  try {
    // This evidence is supplied by the authenticated transport owner, not by the Brain response.
    const descriptor = Object.getOwnPropertyDescriptor(input, "authenticatedProviderEvidence");
    if (!descriptor || !("value" in descriptor)) {
      throw new Error("brain_v2_provider_evidence_invalid");
    }
    assertAuthenticatedProviderEvidence(descriptor.value);
  } catch (error) {
    providerEvidenceError = error;
  }
  try {
    const descriptor = Object.getOwnPropertyDescriptor(input, "resolveRevocationDecision");
    if (!descriptor || !("value" in descriptor) || typeof descriptor.value !== "function") {
      throw new Error("brain_v2_revocation_resolver_invalid");
    }
    revocationResolver = descriptor.value as typeof revocationResolver;
  } catch (error) {
    identityConstructionError ??= error;
  }
  try {
    const transportDescriptor = Object.getOwnPropertyDescriptor(input, "transport");
    if (
      !transportDescriptor ||
      !("value" in transportDescriptor) ||
      !objectRecord(transportDescriptor.value)
    ) {
      throw new Error("brain_v2_transport_invalid");
    }
    const transport = transportDescriptor.value;
    const requestDescriptor = Object.getOwnPropertyDescriptor(transport, "request");
    if (
      !requestDescriptor ||
      !("value" in requestDescriptor) ||
      typeof requestDescriptor.value !== "function"
    ) {
      throw new Error("brain_v2_transport_invalid");
    }
    transportRequest = requestDescriptor.value.bind(transport) as BrainV2Transport["request"];
  } catch (error) {
    transportConstructionError = error;
  }
  const requireTrustedIdentity = async (): Promise<BrainV2PlatformIdentity> => {
    if (!trustedIdentity || !revocationResolver) {
      throw identityConstructionError ?? new Error("brain_v2_identity_snapshot_invalid");
    }
    const expectation = currentIdentityExpectation();
    assertBrainV2PlatformIdentity(trustedIdentity, expectation);
    const decision = await revocationResolver();
    assertFreshRevocationDecision(decision, trustedIdentity, expectation.now ?? new Date());
    return trustedIdentity;
  };
  const safeFailure = (error: unknown): BrainV2SafeResult<never> => {
    const providerStatus = ownDataString(error, "status");
    const providerReason = ownDataString(error, "reason");
    if (providerStatus !== undefined && providerReason !== undefined) {
      const status = providerStatus as BrainV2FailureStatus;
      if (
        [
          "degraded",
          "offline",
          "unauthorized",
          "forbidden",
          "stale",
          "contract_incompatible",
          "disabled",
          "unknown",
        ].includes(status)
      ) {
        return { ok: false, status, reason: `brain_v2_${status}` };
      }
    }
    const reason = ownDataString(error, "message") ?? "offline";
    const status: BrainV2FailureStatus = /unauthorized|identity|scope|capability|revoked/.test(
      reason,
    )
      ? "unauthorized"
      : /incompatible|negotiation|protocol/.test(reason)
        ? "contract_incompatible"
        : reason.startsWith("brain_v2_")
          ? "contract_incompatible"
          : "offline";
    return { ok: false, status, reason: `brain_v2_${status}` };
  };
  const call = async <T>(
    operation: BrainV2Operation,
    params: Record<string, unknown>,
    disclosure: BrainV2Disclosure,
    snapshotId?: string,
    cursor?: string,
  ): Promise<BrainV2SafeResult<BrainV2Page<T>>> => {
    try {
      const identity = await requireTrustedIdentity();
      if (!negotiated) {
        return {
          ok: false,
          status: "contract_incompatible",
          reason: "brain_v2_negotiation_required",
        };
      }
      const safeParams = assertBrainV2SafePayload(params);
      if (!transportRequest)
        throw transportConstructionError ?? new Error("brain_v2_transport_invalid");
      const response = await transportRequest({
        protocolVersion: LINKBRAIN_V2_MCP_PROTOCOL,
        method: "tools/call",
        actorBindingRef: identity.runtimeBindingRef,
        organizationRef: identity.organizationRef,
        contractVersion: LINKBRAIN_V2_CONTRACT_VERSION,
        params: { operation, disclosure, ...safeParams },
      });
      const safeResponse = assertBrainV2SafePayload(response);
      assertBrainV2PageSnapshot<T>(safeResponse, operation, snapshotId, cursor);
      return { ok: true, data: safeResponse };
    } catch (error) {
      return safeFailure(error);
    }
  };
  const mutation = async (
    operation: BrainV2Operation,
    metadata: Readonly<Record<string, unknown>>,
    idempotencyKey: string,
  ): Promise<BrainV2SafeResult<BrainV2Page<unknown>>> => {
    try {
      assertIdempotencyKey(idempotencyKey);
      return await call(operation, { metadata, idempotencyKey }, "metadata");
    } catch (error) {
      return safeFailure(error);
    }
  };
  return {
    async negotiate() {
      try {
        if (providerEvidenceError) throw providerEvidenceError;
        const identity = await requireTrustedIdentity();
        if (!transportRequest)
          throw transportConstructionError ?? new Error("brain_v2_transport_invalid");
        const response = await transportRequest({
          protocolVersion: LINKBRAIN_V2_MCP_PROTOCOL,
          method: "discover",
          actorBindingRef: identity.runtimeBindingRef,
          organizationRef: identity.organizationRef,
          contractVersion: LINKBRAIN_V2_CONTRACT_VERSION,
        });
        const safeResponse = assertBrainV2SafePayload(response);
        assertBrainV2Negotiation(safeResponse);
        negotiated = true;
        return { ok: true, data: safeResponse };
      } catch (error) {
        negotiated = false;
        return safeFailure(error);
      }
    },
    discovery: () => call("v2.discovery", {}, "guide"),
    search: async (query, cursor, snapshotId) => {
      try {
        assertCursorSnapshot(cursor, snapshotId);
        return await call(
          "v2.knowledge.search",
          {
            query,
            ...(cursor === undefined ? {} : { cursor }),
            ...(snapshotId === undefined ? {} : { snapshotId }),
          },
          "index",
          snapshotId,
          cursor,
        );
      } catch (error) {
        return safeFailure(error);
      }
    },
    browse: async (cursor, snapshotId) => {
      try {
        assertCursorSnapshot(cursor, snapshotId);
        return await call(
          "v2.knowledge.browse",
          {
            ...(cursor === undefined ? {} : { cursor }),
            ...(snapshotId === undefined ? {} : { snapshotId }),
          },
          "index",
          snapshotId,
          cursor,
        );
      } catch (error) {
        return safeFailure(error);
      }
    },
    load: async (reference, snapshotId) => {
      try {
        assertLoadReferences(reference, snapshotId);
        return await call("v2.knowledge.load", { reference, snapshotId }, "record", snapshotId);
      } catch (error) {
        return safeFailure(error);
      }
    },
    submitFinding: (metadata, idempotencyKey) =>
      mutation("v2.finding.submit", metadata, idempotencyKey),
    readInbox: async (cursor, snapshotId) => {
      try {
        assertCursorSnapshot(cursor, snapshotId);
        return await call(
          "v2.inbox.read",
          {
            ...(cursor === undefined ? {} : { cursor }),
            ...(snapshotId === undefined ? {} : { snapshotId }),
          },
          "metadata",
          snapshotId,
          cursor,
        );
      } catch (error) {
        return safeFailure(error);
      }
    },
    sendMessage: (metadata, idempotencyKey) =>
      mutation("v2.message.send", metadata, idempotencyKey),
    writeCheckpoint: async (checkpoint) => {
      try {
        const normalized = preparePrivateCheckpoint(checkpoint);
        return await call("v2.checkpoint.write", normalized, "metadata");
      } catch (error) {
        return safeFailure(error);
      }
    },
    reportConflict: (metadata, idempotencyKey) =>
      mutation("v2.conflict.report", metadata, idempotencyKey),
  };
}
