// Kept local to preserve extension package boundaries; these are facts issued by Platform.
export const PLATFORM_COMMIT = "5452f90a35ed690698a9161117a9d92c69985582" as const;
export const PLATFORM_TREE = "90b51726f7a77e4620151a463a10cfc3d2007c88" as const;
export const PLATFORM_AUTH_CLAIMS_CONTRACT_VERSION = "platform.auth-claims/1.1.0" as const;
export const PLATFORM_AUTH_CLAIMS_SCHEMA_VERSION = "2026.07.28-w4" as const;

export const LINKBRAIN_V2_COMMIT = "8ce1d737f8870a479f07b1741c58d6681cd07aa1" as const;
export const LINKBRAIN_V2_TREE = "0cae42d612342f5e52c7e2e0e76cb6fc2f6d81f3" as const;
export const LINKBRAIN_V2_CONTRACT_VERSION = "2.0.0" as const;
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
      status: BrainV2ProviderStatus;
      reason: string;
    }>;

export type BrainV2TransportFailure = Readonly<{
  status: BrainV2ProviderStatus;
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
const ISO = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/;
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

const assertSafeValue = (value: unknown): void => {
  const pending: Array<{ value: unknown; depth: number; path: string }> = [
    { value, depth: 0, path: "value" },
  ];
  let nodes = 0;
  let stringTotal = 0;
  while (pending.length > 0) {
    const current = pending.pop();
    if (!current) continue;
    nodes += 1;
    if (nodes > MAX_SAFE_NODES) {
      throw new Error("brain_v2_payload_too_large");
    }
    if (current.value === null) continue;
    if (typeof current.value === "string") {
      stringTotal += current.value.length;
      if (current.value.length > 512 || stringTotal > MAX_SAFE_STRING_TOTAL) {
        throw new Error(`brain_v2_unbounded_string:${current.path}`);
      }
      continue;
    }
    if (
      typeof current.value === "boolean" ||
      (typeof current.value === "number" && Number.isFinite(current.value))
    ) {
      continue;
    }
    if (typeof current.value !== "object") {
      throw new Error(`brain_v2_non_json_value:${current.path}`);
    }
    if (Array.isArray(current.value)) {
      if (current.value.length > MAX_SAFE_KEYS || current.depth >= MAX_SAFE_DEPTH) {
        throw new Error(`brain_v2_payload_depth_or_array:${current.path}`);
      }
      for (let index = current.value.length - 1; index >= 0; index -= 1) {
        pending.push({
          value: current.value[index],
          depth: current.depth + 1,
          path: `${current.path}[${index}]`,
        });
      }
      continue;
    }
    if (!objectRecord(current.value)) {
      throw new Error(`brain_v2_non_plain_object:${current.path}`);
    }
    const prototype = Object.getPrototypeOf(current.value);
    if (prototype !== Object.prototype && prototype !== null) {
      throw new Error(`brain_v2_non_plain_object:${current.path}`);
    }
    const entries = Object.entries(current.value);
    if (entries.length > MAX_SAFE_KEYS || current.depth >= MAX_SAFE_DEPTH) {
      throw new Error(`brain_v2_payload_depth_or_object:${current.path}`);
    }
    for (let index = entries.length - 1; index >= 0; index -= 1) {
      const entry = entries[index];
      if (!entry) continue;
      const [key, child] = entry;
      const policyKey = canonicalKey(key);
      if (key.length > MAX_SAFE_KEY_LENGTH || FORBIDDEN_FIELDS_CANONICAL.has(policyKey)) {
        throw new Error(`brain_v2_private_payload:${key}`);
      }
      if (FORBIDDEN_IDENTITY_FIELDS_CANONICAL.has(policyKey)) {
        throw new Error(`brain_v2_identity_override:${key}`);
      }
      if (
        FORBIDDEN_SECRET_KEYS_CANONICAL.has(policyKey) ||
        policyKey.includes("secret") ||
        policyKey.includes("token")
      ) {
        throw new Error(`brain_v2_secret_field:${key}`);
      }
      pending.push({ value: child, depth: current.depth + 1, path: `${current.path}.${key}` });
    }
  }
};

function assertIso(value: unknown, field: string): asserts value is string {
  if (typeof value !== "string" || !ISO.test(value) || !Number.isFinite(Date.parse(value))) {
    throw new Error(`brain_v2_invalid_timestamp:${field}`);
  }
}

export function assertBrainV2PlatformIdentity(
  input: unknown,
  expected: BrainV2IdentityExpectation,
): asserts input is BrainV2PlatformIdentity {
  if (!objectRecord(input)) {
    throw new Error("brain_v2_identity_not_object");
  }
  assertObjectKeys(input, [
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
  const candidate = input.providerCandidate;
  if (
    !objectRecord(candidate) ||
    Object.keys(candidate).length !== 2 ||
    candidate.commit !== PLATFORM_COMMIT ||
    candidate.tree !== PLATFORM_TREE
  ) {
    throw new Error("brain_v2_platform_candidate_mismatch");
  }
  if (
    input.claimContractVersion !== PLATFORM_AUTH_CLAIMS_CONTRACT_VERSION ||
    input.schemaVersion !== PLATFORM_AUTH_CLAIMS_SCHEMA_VERSION
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
    if (!boundedRef(input[field]) || input[field] !== expectedValue) {
      throw new Error(`brain_v2_identity_mismatch:${field}`);
    }
  }
  if (!boundedRef(input.credentialReference)) {
    throw new Error("brain_v2_credential_reference_invalid");
  }
  if (
    !Array.isArray(input.serviceScopes) ||
    !input.serviceScopes.every(boundedRef) ||
    !input.serviceScopes.includes(expected.requiredScope) ||
    !Array.isArray(input.capabilities) ||
    !input.capabilities.every(boundedRef) ||
    !input.capabilities.includes(expected.requiredCapability)
  ) {
    throw new Error("brain_v2_scope_or_capability_missing");
  }
  assertIso(input.issuedAt, "issuedAt");
  assertIso(input.expiresAt, "expiresAt");
  const now = expected.now === undefined ? Date.now() : new Date(expected.now).getTime();
  if (
    !Number.isFinite(now) ||
    Date.parse(input.expiresAt) <= now ||
    Date.parse(input.issuedAt) > now
  ) {
    throw new Error("brain_v2_identity_expired_or_not_yet_valid");
  }
  if (input.revocationStatus !== "active") {
    throw new Error("brain_v2_identity_revoked");
  }
}

export function assertBrainV2Negotiation(input: unknown): asserts input is BrainV2Negotiation {
  if (!objectRecord(input)) {
    throw new Error("brain_v2_negotiation_not_object");
  }
  assertObjectKeys(input, [
    "protocolVersion",
    "sessionless",
    "contractVersion",
    "authority",
    "executionAuthority",
    "sdkSupportsModernProtocol",
  ]);
  if (
    input.protocolVersion !== LINKBRAIN_V2_MCP_PROTOCOL ||
    input.sessionless !== true ||
    input.contractVersion !== LINKBRAIN_V2_CONTRACT_VERSION ||
    input.authority !== "advisory" ||
    input.executionAuthority !== "none" ||
    input.sdkSupportsModernProtocol !== true
  ) {
    throw new Error("brain_v2_negotiation_incompatible");
  }
}

export function assertBrainV2SafePayload<T>(input: T): T {
  assertSafeValue(input);
  return structuredClone(input);
}

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
  assertBrainV2SafePayload(pagination);
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
  assertBrainV2SafePayload(input.data);
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
  captureRef: string;
  idempotencyKey: string;
  metadata: Readonly<Record<string, unknown>>;
}): BrainV2PrivateCapture {
  if (!boundedRef(input.captureRef) || !boundedRef(input.idempotencyKey)) {
    throw new Error("brain_v2_capture_reference_invalid");
  }
  assertBrainV2SafePayload(input.metadata);
  return {
    namespace: "private",
    captureRef: input.captureRef,
    idempotencyKey: input.idempotencyKey,
    metadata: { ...input.metadata },
  };
}

export function preparePrivateCheckpoint(input: {
  namespace: "private";
  checkpointRef: string;
  idempotencyKey: string;
  metadata: Readonly<Record<string, unknown>>;
}): BrainV2PrivateCheckpoint {
  if (
    input.namespace !== "private" ||
    !boundedRef(input.checkpointRef) ||
    !boundedRef(input.idempotencyKey)
  ) {
    throw new Error("brain_v2_checkpoint_reference_invalid");
  }
  assertBrainV2SafePayload(input.metadata);
  return {
    namespace: "private",
    checkpointRef: input.checkpointRef,
    idempotencyKey: input.idempotencyKey,
    metadata: { ...input.metadata },
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

export function createBrainV2Client(input: {
  identity: BrainV2PlatformIdentity;
  identityExpectation: Omit<BrainV2IdentityExpectation, "now">;
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
  const safeFailure = (error: unknown): BrainV2SafeResult<never> => {
    if (
      objectRecord(error) &&
      typeof error.status === "string" &&
      typeof error.reason === "string"
    ) {
      const status = error.status as BrainV2ProviderStatus;
      if (
        [
          "available",
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
        return { ok: false, status, reason: error.reason };
      }
    }
    const reason = error instanceof Error ? error.message : "brain_v2_unavailable";
    const status: BrainV2ProviderStatus = /unauthorized|identity|scope|capability|revoked/.test(
      reason,
    )
      ? "unauthorized"
      : /incompatible|negotiation|protocol/.test(reason)
        ? "contract_incompatible"
        : reason.startsWith("brain_v2_")
          ? "contract_incompatible"
          : "offline";
    return { ok: false, status, reason };
  };
  const call = async <T>(
    operation: BrainV2Operation,
    params: Record<string, unknown>,
    disclosure: BrainV2Disclosure,
    snapshotId?: string,
  ): Promise<BrainV2SafeResult<BrainV2Page<T>>> => {
    try {
      assertBrainV2PlatformIdentity(input.identity, currentIdentityExpectation());
      if (!negotiated) {
        return {
          ok: false,
          status: "contract_incompatible",
          reason: "brain_v2_negotiation_required",
        };
      }
      const safeParams = assertBrainV2SafePayload(params);
      const response = await input.transport.request({
        protocolVersion: LINKBRAIN_V2_MCP_PROTOCOL,
        method: "tools/call",
        actorBindingRef: input.identity.runtimeBindingRef,
        organizationRef: input.identity.organizationRef,
        contractVersion: LINKBRAIN_V2_CONTRACT_VERSION,
        params: { operation, disclosure, ...safeParams },
      });
      assertBrainV2Page<T>(response, operation, snapshotId);
      return { ok: true, data: structuredClone(response) as BrainV2Page<T> };
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
        assertBrainV2PlatformIdentity(input.identity, currentIdentityExpectation());
        const response = await input.transport.request({
          protocolVersion: LINKBRAIN_V2_MCP_PROTOCOL,
          method: "discover",
          actorBindingRef: input.identity.runtimeBindingRef,
          organizationRef: input.identity.organizationRef,
          contractVersion: LINKBRAIN_V2_CONTRACT_VERSION,
        });
        assertBrainV2Negotiation(response);
        negotiated = true;
        return { ok: true, data: response };
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
        );
      } catch (error) {
        return safeFailure(error);
      }
    },
    load: (reference, snapshotId) =>
      call("v2.knowledge.load", { reference, snapshotId }, "record", snapshotId),
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
