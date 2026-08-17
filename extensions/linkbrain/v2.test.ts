import { describe, expect, it } from "vitest";
import {
  BRAIN_V2_DISCLOSURE_LEVELS,
  BRAIN_V2_OPERATIONS,
  LINKBRAIN_V2_COMMIT,
  LINKBRAIN_V2_CONTRACT_VERSION,
  LINKBRAIN_V2_MCP_PROTOCOL,
  LINKBRAIN_V2_TREE,
  assertBrainV2Negotiation,
  assertBrainV2Page,
  assertBrainV2PlatformIdentity,
  assertBrainV2SafePayload,
  createBrainV2Client,
  preparePrivateCapture,
  preparePrivateCheckpoint,
  type BrainV2PlatformIdentity,
  type BrainV2TransportRequest,
} from "./src/v2.js";

const NOW = "2026-08-14T12:00:00.000Z";
const identity = (): BrainV2PlatformIdentity => ({
  providerCandidate: {
    commit: "5452f90a35ed690698a9161117a9d92c69985582",
    tree: "90b51726f7a77e4620151a463a10cfc3d2007c88",
  },
  claimContractVersion: "platform.auth-claims/1.1.0",
  schemaVersion: "2026.07.28-w4",
  actorId: "actor:ocp",
  organizationRef: "org:linktrend",
  runtimeBindingRef: "binding:ocp-brain",
  credentialReference: "credential-ref:platform-brain",
  issuer: "issuer:platform",
  audience: "audience:brain",
  serviceScopes: ["brain.v2"],
  capabilities: ["brain.knowledge"],
  issuedAt: "2026-08-14T11:00:00.000Z",
  expiresAt: "2026-08-14T13:00:00.000Z",
  revocationStatus: "active",
});

const expected = {
  actorId: "actor:ocp",
  organizationRef: "org:linktrend",
  runtimeBindingRef: "binding:ocp-brain",
  issuer: "issuer:platform",
  audience: "audience:brain",
  requiredScope: "brain.v2",
  requiredCapability: "brain.knowledge",
  now: NOW,
};
const identityExpectation = {
  actorId: expected.actorId,
  organizationRef: expected.organizationRef,
  runtimeBindingRef: expected.runtimeBindingRef,
  issuer: expected.issuer,
  audience: expected.audience,
  requiredScope: expected.requiredScope,
  requiredCapability: expected.requiredCapability,
};

const negotiation = {
  protocolVersion: LINKBRAIN_V2_MCP_PROTOCOL,
  sessionless: true,
  contractVersion: LINKBRAIN_V2_CONTRACT_VERSION,
  authority: "advisory",
  executionAuthority: "none",
  sdkSupportsModernProtocol: true,
} as const;

const page = (disclosure: "guide" | "index" | "metadata" | "record") => ({
  snapshotId: "snapshot:brain-1",
  disclosure,
  pagination: { limit: 25, nextCursor: "v2:25" },
  data: { reference: "knowledge:1", title: "bounded metadata" },
});

describe("LiNKbrain v2 immutable consumer boundary", () => {
  it("pins the final provider and exposes the ordered contract surface", () => {
    expect(LINKBRAIN_V2_COMMIT).toBe("8ce1d737f8870a479f07b1741c58d6681cd07aa1");
    expect(LINKBRAIN_V2_TREE).toBe("0cae42d612342f5e52c7e2e0e76cb6fc2f6d81f3");
    expect(BRAIN_V2_DISCLOSURE_LEVELS).toEqual([
      "guide",
      "index",
      "metadata",
      "record",
      "evidence",
    ]);
    expect(BRAIN_V2_OPERATIONS).toContain("v2.knowledge.search");
    expect(BRAIN_V2_OPERATIONS).toContain("v2.checkpoint.write");
  });

  it("accepts Platform trust facts only when actor, binding, audience, scope and capability match", () => {
    expect(() => assertBrainV2PlatformIdentity(identity(), expected)).not.toThrow();
    for (const field of ["audience", "runtimeBindingRef", "issuer"] as const) {
      const candidate = { ...identity(), [field]: `${identity()[field]}:wrong` };
      expect(() => assertBrainV2PlatformIdentity(candidate, expected)).toThrow();
    }
    expect(() =>
      assertBrainV2PlatformIdentity({ ...identity(), serviceScopes: ["other"] }, expected),
    ).toThrow();
    expect(() =>
      assertBrainV2PlatformIdentity({ ...identity(), capabilities: ["other"] }, expected),
    ).toThrow();
    expect(() =>
      assertBrainV2PlatformIdentity({ ...identity(), revocationStatus: "revoked" }, expected),
    ).toThrow();
    expect(() =>
      assertBrainV2PlatformIdentity({ ...identity(), expiresAt: NOW }, expected),
    ).toThrow();
    expect(() =>
      assertBrainV2PlatformIdentity({ ...identity(), secret: "never" }, expected),
    ).toThrow();
  });

  it("rejects stale, future, malformed and incorrectly pinned Platform facts", () => {
    expect(() =>
      assertBrainV2PlatformIdentity(
        { ...identity(), issuedAt: "2026-08-14T13:00:01.000Z" },
        expected,
      ),
    ).toThrow();
    expect(() =>
      assertBrainV2PlatformIdentity({ ...identity(), expiresAt: "not-a-time" }, expected),
    ).toThrow();
    expect(() =>
      assertBrainV2PlatformIdentity(
        {
          ...identity(),
          providerCandidate: { commit: "a".repeat(40), tree: identity().providerCandidate.tree },
        },
        expected,
      ),
    ).toThrow();
  });

  it("requires modern sessionless negotiation and fails closed for v1 or session IDs", () => {
    expect(LINKBRAIN_V2_CONTRACT_VERSION).toBe("brain.v2/2.0.0");
    expect(() => assertBrainV2Negotiation(negotiation)).not.toThrow();
    for (const candidate of [
      { ...negotiation, protocolVersion: "2025-06-18" },
      { ...negotiation, sessionless: false },
      { ...negotiation, contractVersion: "2.0.0" },
      { ...negotiation, contractVersion: "other.v2/2.0.0" },
      { ...negotiation, contractVersion: "1.0.0" },
      { ...negotiation, sdkSupportsModernProtocol: false },
      { ...negotiation, sessionId: "session-1" },
    ]) {
      expect(() => assertBrainV2Negotiation(candidate)).toThrow();
    }
  });

  it("enforces operation-specific disclosure ceilings, snapshot stability and cursors", () => {
    expect(() => assertBrainV2Page(page("index"), "v2.knowledge.search")).not.toThrow();
    expect(() => assertBrainV2Page(page("record"), "v2.knowledge.search")).toThrow();
    expect(() =>
      assertBrainV2Page(page("record"), "v2.knowledge.load", "snapshot:other"),
    ).toThrow();
    expect(() =>
      assertBrainV2Page(
        { ...page("index"), pagination: { limit: 25, cursor: "old:1" } },
        "v2.knowledge.search",
      ),
    ).toThrow();
    expect(() =>
      assertBrainV2Page(
        { ...page("index"), pagination: { limit: 25, cursor: "v2:0" } },
        "v2.knowledge.search",
        "snapshot:brain-1",
        "v2:25",
      ),
    ).toThrow("brain_v2_pagination_cursor_mismatch");
    expect(() =>
      assertBrainV2Page(
        { ...page("index"), pagination: { limit: 25, payload: { transcript: "blocked" } } },
        "v2.knowledge.search",
      ),
    ).toThrow();
    expect(() =>
      assertBrainV2Page({ ...page("index"), data: { content: "private" } }, "v2.knowledge.search"),
    ).toThrow();
    expect(() =>
      assertBrainV2Page(
        { snapshotId: "snapshot:brain-1", disclosure: "index", pagination: { limit: 25 } },
        "v2.knowledge.search",
      ),
    ).toThrow();
    expect(() => assertBrainV2SafePayload({ nested: { apiKey: "blocked" } })).toThrow();
    expect(() =>
      assertBrainV2SafePayload({ nested: { Authorization: "Bearer blocked" } }),
    ).toThrow();
    expect(() => assertBrainV2SafePayload({ Transcript: "blocked" })).toThrow();
    expect(() => assertBrainV2SafePayload({ accessToken: "blocked" })).toThrow();
    expect(() => assertBrainV2SafePayload({ toJSON: () => ({ transcript: "blocked" }) })).toThrow();
    expect(() => assertBrainV2SafePayload({ value: new Date() })).toThrow();
    expect(() =>
      assertBrainV2SafePayload({ nested: { depth: { deeper: { value: "x" } } } }),
    ).not.toThrow();
    expect(() =>
      assertBrainV2SafePayload(
        Object.fromEntries(Array.from({ length: 101 }, (_, i) => [`k${i}`, i])),
      ),
    ).toThrow();
  });

  it("rejects reasoning, secrets, raw output, payloads and identity overrides", () => {
    for (const key of [
      "reasoning",
      "secret",
      "rawToolOutput",
      "transcript",
      "payload",
      "actorId",
    ]) {
      expect(() => assertBrainV2SafePayload({ [key]: "blocked" })).toThrow();
    }
    expect(() =>
      assertBrainV2SafePayload({ refs: ["knowledge:1"], metadata: { title: "safe" } }),
    ).not.toThrow();
    expect(() => assertBrainV2SafePayload({ metadata: { actorId: "other" } })).toThrow();
    expect(() => assertBrainV2SafePayload({ text: "x".repeat(513) })).toThrow();
  });

  it("rejects accessor-backed payloads without evaluating changing getters", () => {
    let reads = 0;
    const changingPayload = {} as Record<string, unknown>;
    Object.defineProperty(changingPayload, "metadata", {
      enumerable: true,
      get() {
        reads += 1;
        return reads === 1 ? { title: "safe" } : { token: "secret" };
      },
    });

    expect(() => assertBrainV2SafePayload(changingPayload)).toThrow("brain_v2_accessor_payload");
    expect(reads).toBe(0);
  });

  it("requires explicit private namespaces and bounded idempotency references", () => {
    expect(
      preparePrivateCapture({
        namespace: "private",
        captureRef: "capture:1",
        idempotencyKey: "idem:1",
        metadata: { kind: "note" },
      }),
    ).toMatchObject({ namespace: "private" });
    expect(
      preparePrivateCheckpoint({
        namespace: "private",
        checkpointRef: "checkpoint:1",
        idempotencyKey: "idem:2",
        metadata: { state: "bounded" },
      }),
    ).toMatchObject({ namespace: "private", checkpointRef: "checkpoint:1" });
    expect(() =>
      preparePrivateCapture({
        namespace: "private",
        captureRef: "capture:1",
        idempotencyKey: "idem:1",
        metadata: { transcript: "blocked" },
      }),
    ).toThrow();
    expect(() =>
      preparePrivateCapture({
        namespace: "private",
        captureRef: "",
        idempotencyKey: "idem:1",
        metadata: {},
      }),
    ).toThrow();
    expect(() =>
      preparePrivateCapture({
        captureRef: "capture:1",
        idempotencyKey: "idem:1",
        metadata: {},
      } as never),
    ).toThrow();
  });

  it("returns isolated validated metadata from private preparation", () => {
    const captureMetadata = { nested: { label: "capture" } };
    const checkpointMetadata = { nested: { label: "checkpoint" } };
    const capture = preparePrivateCapture({
      namespace: "private",
      captureRef: "capture:1",
      idempotencyKey: "idem:1",
      metadata: captureMetadata,
    });
    const checkpoint = preparePrivateCheckpoint({
      namespace: "private",
      checkpointRef: "checkpoint:1",
      idempotencyKey: "idem:2",
      metadata: checkpointMetadata,
    });

    captureMetadata.nested.label = "mutated";
    checkpointMetadata.nested.label = "mutated";

    expect(capture.metadata).toEqual({ nested: { label: "capture" } });
    expect(checkpoint.metadata).toEqual({ nested: { label: "checkpoint" } });
    expect(capture.metadata).not.toBe(captureMetadata);
    expect(checkpoint.metadata).not.toBe(checkpointMetadata);
  });

  it("requires negotiation before calls and never sends the credential reference", async () => {
    const requests: BrainV2TransportRequest[] = [];
    const transport = {
      async request(request: BrainV2TransportRequest) {
        requests.push(request);
        return request.method === "discover" ? negotiation : page("index");
      },
    };
    let now = NOW;
    const client = createBrainV2Client({
      identity: identity(),
      identityExpectation,
      transport,
      clock: () => now,
    });
    expect(await client.search("knowledge")).toMatchObject({
      ok: false,
      status: "contract_incompatible",
    });
    expect(await client.negotiate()).toMatchObject({ ok: true });
    expect(requests[0]?.contractVersion).toBe("brain.v2/2.0.0");
    expect(await client.search("knowledge")).toMatchObject({
      ok: true,
      data: { disclosure: "index" },
    });
    expect(await client.search("knowledge", "bad-cursor")).toMatchObject({
      ok: false,
      status: "contract_incompatible",
    });
    expect(await client.load("knowledge:1", "snapshot:brain-1")).toMatchObject({ ok: true });
    expect(requests[2]?.params).toMatchObject({ snapshotId: "snapshot:brain-1" });
    expect(await client.load("not a reference", "snapshot:brain-1")).toMatchObject({
      ok: false,
      status: "contract_incompatible",
    });
    expect(await client.load("knowledge:1", "not a snapshot")).toMatchObject({
      ok: false,
      status: "contract_incompatible",
    });
    expect(requests).toHaveLength(3);
    expect(await client.search("knowledge", "v2:25", "snapshot:other")).toMatchObject({
      ok: false,
      status: "contract_incompatible",
    });
    expect(await client.sendMessage({}, "")).toMatchObject({
      ok: false,
      status: "contract_incompatible",
    });
    expect(requests[1]).not.toHaveProperty("credentialReference");
    expect(requests[1]).not.toHaveProperty("credentialValue");
    expect(requests[1]?.contractVersion).toBe("brain.v2/2.0.0");
    now = "2026-08-14T13:00:00.000Z";
    expect(await client.search("knowledge")).toMatchObject({ ok: false, status: "unauthorized" });
    expect(requests).toHaveLength(4);
  });

  it("uses independent trusted expectations and revalidates checkpoint writes at runtime", async () => {
    const requests: BrainV2TransportRequest[] = [];
    const transport = {
      async request(request: BrainV2TransportRequest) {
        requests.push(request);
        return request.method === "discover" ? negotiation : page("metadata");
      },
    };
    const client = createBrainV2Client({
      identity: identity(),
      identityExpectation: { ...identityExpectation, actorId: "actor:intended" },
      transport,
      clock: () => NOW,
    });
    expect(await client.negotiate()).toMatchObject({ ok: false, status: "unauthorized" });
    const validClient = createBrainV2Client({
      identity: identity(),
      identityExpectation,
      transport,
      clock: () => NOW,
    });
    expect(await validClient.negotiate()).toMatchObject({ ok: true });
    expect(
      await validClient.writeCheckpoint({
        namespace: "public",
        checkpointRef: "checkpoint:bad",
        idempotencyKey: "idem:bad",
        metadata: {},
      } as never),
    ).toMatchObject({ ok: false });
    expect(requests).toHaveLength(1);
  });

  it("rejects accessor-backed Platform bindings without invoking their getters", async () => {
    for (const field of ["runtimeBindingRef", "organizationRef"] as const) {
      let reads = 0;
      const accessorIdentity = identity() as unknown as Record<string, unknown>;
      Object.defineProperty(accessorIdentity, field, {
        enumerable: true,
        get() {
          reads += 1;
          return reads === 1 ? identity()[field] : `${identity()[field]}:changed`;
        },
      });
      expect(() => assertBrainV2PlatformIdentity(accessorIdentity, expected)).toThrow(
        `brain_v2_identity_field_not_own_data:${field}`,
      );
      expect(reads).toBe(0);
      const requests: BrainV2TransportRequest[] = [];
      const client = createBrainV2Client({
        identity: accessorIdentity as BrainV2PlatformIdentity,
        identityExpectation,
        transport: {
          request: async (request) => {
            requests.push(request);
            return negotiation;
          },
        },
        clock: () => NOW,
      });

      await expect(client.negotiate()).resolves.toMatchObject({
        ok: false,
        status: "unauthorized",
      });
      expect(reads).toBe(0);
      expect(requests).toHaveLength(0);
    }
  });

  it("rejects inherited Platform bindings even when Object.prototype is polluted", async () => {
    const sourceIdentity = identity() as unknown as Record<string, unknown>;
    delete sourceIdentity.runtimeBindingRef;
    let reads = 0;
    Object.defineProperty(Object.prototype, "runtimeBindingRef", {
      configurable: true,
      get() {
        reads += 1;
        return reads === 1 ? "binding:ocp-brain" : "binding:changed";
      },
    });
    try {
      const requests: BrainV2TransportRequest[] = [];
      const client = createBrainV2Client({
        identity: sourceIdentity as BrainV2PlatformIdentity,
        identityExpectation,
        transport: {
          request: async (request) => {
            requests.push(request);
            return negotiation;
          },
        },
        clock: () => NOW,
      });

      await expect(client.negotiate()).resolves.toMatchObject({
        ok: false,
        status: "unauthorized",
      });
      expect(reads).toBe(0);
      expect(requests).toHaveLength(0);
    } finally {
      delete (Object.prototype as Record<string, unknown>).runtimeBindingRef;
    }
  });

  it("uses only the construction-time Platform identity snapshot for transport", async () => {
    const sourceIdentity = identity() as unknown as Record<string, unknown>;
    const requests: BrainV2TransportRequest[] = [];
    const client = createBrainV2Client({
      identity: sourceIdentity as BrainV2PlatformIdentity,
      identityExpectation,
      transport: {
        request: async (request) => {
          requests.push(request);
          return negotiation;
        },
      },
      clock: () => NOW,
    });

    sourceIdentity.runtimeBindingRef = "binding:changed-after-construction";
    sourceIdentity.organizationRef = "org:changed-after-construction";

    await expect(client.negotiate()).resolves.toMatchObject({ ok: true });
    expect(requests[0]).toMatchObject({
      actorBindingRef: "binding:ocp-brain",
      organizationRef: "org:linktrend",
    });
  });

  it("rejects sparse authorization arrays populated through Array.prototype", async () => {
    const sparseScopes = new Array<string>(1);
    const sourceIdentity = { ...identity(), serviceScopes: sparseScopes };
    const requests: BrainV2TransportRequest[] = [];
    let reads = 0;
    let client: ReturnType<typeof createBrainV2Client>;
    Object.defineProperty(Array.prototype, "0", {
      configurable: true,
      get() {
        reads += 1;
        return "brain.v2";
      },
    });
    try {
      client = createBrainV2Client({
        identity: sourceIdentity,
        identityExpectation,
        transport: {
          request: async (request) => {
            requests.push(request);
            return negotiation;
          },
        },
        clock: () => NOW,
      });
      expect(reads).toBe(0);
    } finally {
      delete (Array.prototype as unknown as Record<string, unknown>)["0"];
    }

    await expect(client!.negotiate()).resolves.toMatchObject({
      ok: false,
      status: "unauthorized",
    });
    expect(reads).toBe(0);
    expect(requests).toHaveLength(0);
  });

  it("rejects accessor-backed authorization elements without invoking getters", async () => {
    for (const field of ["serviceScopes", "capabilities"] as const) {
      const values = field === "serviceScopes" ? ["brain.v2"] : ["brain.knowledge"];
      let reads = 0;
      Object.defineProperty(values, "0", {
        configurable: true,
        enumerable: true,
        get() {
          reads += 1;
          return reads === 1 ? identity()[field][0] : "changed";
        },
      });
      const requests: BrainV2TransportRequest[] = [];
      const client = createBrainV2Client({
        identity: { ...identity(), [field]: values },
        identityExpectation,
        transport: {
          request: async (request) => {
            requests.push(request);
            return negotiation;
          },
        },
        clock: () => NOW,
      });

      await expect(client.negotiate()).resolves.toMatchObject({
        ok: false,
        status: "unauthorized",
      });
      expect(reads).toBe(0);
      expect(requests).toHaveLength(0);
    }
  });

  it("uses construction-time authorization arrays after source mutation", async () => {
    const sourceScopes = [...identity().serviceScopes];
    const sourceCapabilities = [...identity().capabilities];
    const sourceIdentity = {
      ...identity(),
      serviceScopes: sourceScopes,
      capabilities: sourceCapabilities,
    };
    const requests: BrainV2TransportRequest[] = [];
    const client = createBrainV2Client({
      identity: sourceIdentity,
      identityExpectation,
      transport: {
        request: async (request) => {
          requests.push(request);
          return negotiation;
        },
      },
      clock: () => NOW,
    });

    sourceScopes[0] = "changed";
    sourceCapabilities[0] = "changed";

    await expect(client.negotiate()).resolves.toMatchObject({ ok: true });
    expect(requests).toHaveLength(1);
  });

  it("returns safe unavailable results without a silent downgrade", async () => {
    const client = createBrainV2Client({
      identity: identity(),
      identityExpectation,
      transport: {
        request: async () => {
          throw new Error("offline");
        },
      },
      clock: () => NOW,
    });
    expect(await client.negotiate()).toMatchObject({ ok: false, status: "offline" });
    expect(await client.discovery()).toMatchObject({ ok: false, status: "contract_incompatible" });
  });

  it("sanitizes transport failure reasons", async () => {
    const client = createBrainV2Client({
      identity: identity(),
      identityExpectation,
      transport: {
        request: async () => {
          throw { status: "offline", reason: "Bearer secret-value" };
        },
      },
      clock: () => NOW,
    });

    await expect(client.negotiate()).resolves.toEqual({
      ok: false,
      status: "offline",
      reason: "brain_v2_offline",
    });
  });

  it("rejects accessor-backed provider pages before any getter can change values", async () => {
    let reads = 0;
    const providerPage = page("index") as Record<string, unknown>;
    Object.defineProperty(providerPage, "data", {
      enumerable: true,
      get() {
        reads += 1;
        return reads === 1 ? { reference: "knowledge:1", title: "safe" } : { token: "secret" };
      },
    });
    const client = createBrainV2Client({
      identity: identity(),
      identityExpectation,
      transport: {
        request: async (request) => (request.method === "discover" ? negotiation : providerPage),
      },
      clock: () => NOW,
    });

    await expect(client.negotiate()).resolves.toMatchObject({ ok: true });
    await expect(client.search("knowledge")).resolves.toMatchObject({
      ok: false,
      status: "contract_incompatible",
    });
    expect(reads).toBe(0);
  });
});
