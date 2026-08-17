import { describe, expect, it } from "vitest";
import {
  AUTOWORK_COMMIT,
  AUTOWORK_CONTRACT_VERSION,
  AUTOWORK_TREE,
  requestFingerprint,
  sameIdempotencyContent,
  validateCallback,
  validateReceipt,
  validateRequestAt,
  validateRequest,
} from "./src/contract.js";

const uuid = "11111111-1111-4111-8111-111111111111";
const ref = (name: string) => ({
  ref: `evidence://${name}`,
  digest: `sha256:${"a".repeat(64)}`,
  observedAt: "2026-08-13T00:00:00.000Z",
});
const request = {
  providerCandidate: { commit: AUTOWORK_COMMIT, tree: AUTOWORK_TREE },
  contractVersion: AUTOWORK_CONTRACT_VERSION,
  protocolVersion: "2026-07-28",
  requestId: uuid,
  platform: {
    orgId: uuid,
    actorId: "actor-1",
    audience: "autowork",
    capability: "status_collection",
    credentialId: "credential-1",
    bindingId: "binding-1",
    issuedAt: "2026-08-12T00:00:00.000Z",
    expiresAt: "2026-08-14T00:00:00.000Z",
    revocationRef: "evidence://revocation/active",
  },
  automation: {
    automationId: "status-check",
    version: "1.0.0",
    definitionDigest: `sha256:${"b".repeat(64)}`,
    configurationRef: ref("config"),
  },
  operationKind: "status_collection",
  inputRef: ref("input"),
  artifactRefs: [],
  resultDestinationRef: "evidence://results/one",
  correlationRefs: [ref("correlation")],
  idempotencyKey: "idem:autowork:0001",
  expiresAt: "2026-08-14T00:00:00.000Z",
} as const;
const receipt = {
  providerCandidate: { commit: AUTOWORK_COMMIT, tree: AUTOWORK_TREE },
  contractVersion: AUTOWORK_CONTRACT_VERSION,
  requestId: uuid,
  receiptId: "22222222-2222-4222-8222-222222222222",
  state: "accepted",
  acceptedAt: "2026-08-13T00:00:00.000Z",
  updatedAt: "2026-08-13T00:00:00.000Z",
  attemptCount: 0,
  requestFingerprint: requestFingerprint(request),
  automation: request.automation,
  resultRefs: [],
  evidenceRefs: [],
  uncertainOutcome: false,
} as const;

describe("LinkAutowork final provider contract", () => {
  it("accepts exact request, immutable receipt and correlated callback", () => {
    expect(validateRequest(request)).toBe(true);
    expect(validateReceipt(receipt, request)).toBe(true);
    expect(
      validateCallback(
        {
          requestId: uuid,
          receiptId: receipt.receiptId,
          orgId: uuid,
          callbackBindingRef: "evidence://callback/binding",
          sourceTimestamp: receipt.updatedAt,
          receipt,
        },
        request,
        {
          callbackBindingRef: "evidence://callback/binding",
          now: new Date("2026-08-13T12:00:00.000Z"),
          acceptedState: { latestSourceTimestamp: null, acceptedReceiptIds: [] },
        },
      ),
    ).toBe(true);
    expect(sameIdempotencyContent(request, structuredClone(request))).toBe(true);
  });
  it("requires an independent current Platform revocation decision", () => {
    const now = new Date("2026-08-13T12:00:00.000Z");
    expect(validateRequestAt(request, now)).toBe(false);
    expect(
      validateRequestAt(request, now, {
        status: "active",
        observedAt: "2026-08-13T11:59:00.000Z",
        credentialId: request.platform.credentialId,
        bindingId: request.platform.bindingId,
        orgId: request.platform.orgId,
        actorId: request.platform.actorId,
        audience: request.platform.audience,
        capability: request.platform.capability,
        revocationRef: request.platform.revocationRef,
        authorizedOperation: request.operationKind,
      }),
    ).toBe(true);
    expect(
      validateRequestAt(request, now, {
        status: "revoked",
        observedAt: "2026-08-13T11:59:00.000Z",
        credentialId: request.platform.credentialId,
        bindingId: request.platform.bindingId,
        orgId: request.platform.orgId,
        actorId: request.platform.actorId,
        audience: request.platform.audience,
        capability: request.platform.capability,
        revocationRef: request.platform.revocationRef,
        authorizedOperation: request.operationKind,
      }),
    ).toBe(false);
    expect(
      validateRequestAt(
        { ...request, platform: { ...request.platform, issuedAt: "2026-08-14T00:00:00.000Z" } },
        now,
        {
          status: "active",
          observedAt: "2026-08-13T11:59:00.000Z",
          credentialId: request.platform.credentialId,
          bindingId: request.platform.bindingId,
          orgId: request.platform.orgId,
          actorId: request.platform.actorId,
          audience: request.platform.audience,
          capability: request.platform.capability,
          revocationRef: request.platform.revocationRef,
          authorizedOperation: request.operationKind,
        },
      ),
    ).toBe(false);
  });
  it("rejects cancellation markers on the ordinary execution path", () => {
    const now = new Date("2026-08-13T12:00:00.000Z");
    const decision = {
      status: "active" as const,
      observedAt: "2026-08-13T11:59:00.000Z",
      credentialId: request.platform.credentialId,
      bindingId: request.platform.bindingId,
      orgId: request.platform.orgId,
      actorId: request.platform.actorId,
      audience: request.platform.audience,
      capability: request.platform.capability,
      revocationRef: request.platform.revocationRef,
      authorizedOperation: request.operationKind,
    };
    expect(
      validateRequestAt(
        { ...request, cancellationRequestedAt: "2026-08-13T11:59:00.000Z" },
        now,
        decision,
      ),
    ).toBe(false);
    expect(
      validateRequestAt(
        { ...request, cancellationRequestedAt: "2026-08-13T12:01:00.000Z" },
        now,
        decision,
      ),
    ).toBe(false);
  });
  it("requires receipt acceptance within the request validity window", () => {
    const issueBoundary = {
      ...receipt,
      acceptedAt: request.platform.issuedAt,
      updatedAt: request.platform.issuedAt,
    };
    expect(validateReceipt(issueBoundary, request, new Date(request.platform.issuedAt))).toBe(true);

    const requestExpiry = "2026-08-14T00:00:00.000Z";
    const requestBoundary = {
      ...request,
      expiresAt: requestExpiry,
      platform: { ...request.platform, expiresAt: "2026-08-15T00:00:00.000Z" },
    };
    expect(
      validateReceipt(
        {
          ...receipt,
          acceptedAt: requestExpiry,
          updatedAt: requestExpiry,
          requestFingerprint: requestFingerprint(requestBoundary),
        },
        requestBoundary,
        new Date(requestExpiry),
      ),
    ).toBe(false);
    expect(
      validateReceipt(
        { ...receipt, acceptedAt: "2026-08-11T23:59:59.000Z" },
        request,
        new Date("2026-08-13T12:00:00.000Z"),
      ),
    ).toBe(false);
    expect(
      validateReceipt(
        {
          ...receipt,
          acceptedAt: "2026-08-14T00:00:01.000Z",
          updatedAt: "2026-08-14T00:00:01.000Z",
          requestFingerprint: requestFingerprint(requestBoundary),
        },
        requestBoundary,
        new Date("2026-08-14T00:00:01.000Z"),
      ),
    ).toBe(false);
    expect(
      validateReceipt(
        {
          ...receipt,
          acceptedAt: "2026-08-14T00:00:01.000Z",
          updatedAt: "2026-08-14T00:00:01.000Z",
          requestFingerprint: requestFingerprint({
            ...request,
            expiresAt: "2026-08-15T00:00:00.000Z",
          }),
        },
        { ...request, expiresAt: "2026-08-15T00:00:00.000Z" },
        new Date("2026-08-14T00:00:01.000Z"),
      ),
    ).toBe(false);
    expect(validateReceipt({ ...receipt, acceptedAt: "not-a-time" }, request)).toBe(false);
    expect(validateReceipt({ ...receipt, updatedAt: "not-a-time" }, request)).toBe(false);
    expect(validateReceipt(receipt, request, new Date(Number.NaN))).toBe(false);
  });
  it("matches automation objects by canonical content", () => {
    const reorderedAutomation = {
      configurationRef: request.automation.configurationRef,
      definitionDigest: request.automation.definitionDigest,
      version: request.automation.version,
      automationId: request.automation.automationId,
    };
    expect(validateReceipt({ ...receipt, automation: reorderedAutomation }, request)).toBe(true);
  });
  it.each([
    [
      "wrong provider commit",
      { platform: { ...request.platform, credentialId: AUTOWORK_COMMIT } },
      true,
    ],
    ["malformed result reference", { resultDestinationRef: "not-a-ref" }, false],
    ["changed idempotency content", { inputRef: ref("different") }, true],
    ["missing correlation", { correlationRefs: [] }, false],
    ["expired request", { expiresAt: "2026-08-12T00:00:00.000Z" }, true],
  ] as const)("fails closed for %s", (_name, changes, valid) => {
    const candidate = { ...request, ...changes };
    expect(validateRequest(candidate)).toBe(valid);
    if (_name === "changed idempotency content")
      expect(sameIdempotencyContent(request, candidate)).toBe(false);
  });
  it("rejects callback replay or receipt fingerprint mismatch", () => {
    expect(
      validateReceipt({ ...receipt, requestFingerprint: `sha256:${"c".repeat(64)}` }, request),
    ).toBe(false);
    expect(
      validateCallback(
        {
          requestId: uuid,
          receiptId: receipt.receiptId,
          orgId: "33333333-3333-4333-8333-333333333333",
          callbackBindingRef: "evidence://callback/binding",
          sourceTimestamp: receipt.updatedAt,
          receipt,
        },
        request,
        {
          callbackBindingRef: "evidence://callback/binding",
          now: new Date("2026-08-13T12:00:00.000Z"),
          acceptedState: { latestSourceTimestamp: null, acceptedReceiptIds: [] },
        },
      ),
    ).toBe(false);
  });

  it("requires explicit accepted callback state and rejects replay or stale chronology", () => {
    const callback = {
      requestId: uuid,
      receiptId: receipt.receiptId,
      orgId: uuid,
      callbackBindingRef: "evidence://callback/binding",
      sourceTimestamp: receipt.updatedAt,
      receipt,
    };
    expect(validateCallback(callback, request)).toBe(false);
    expect(
      validateCallback(callback, request, {
        callbackBindingRef: "evidence://callback/binding",
        now: new Date("2026-08-13T12:00:00.000Z"),
        acceptedState: {
          latestSourceTimestamp: null,
          acceptedReceiptIds: [receipt.receiptId],
        },
      }),
    ).toBe(false);
    expect(
      validateCallback(callback, request, {
        callbackBindingRef: "evidence://callback/binding",
        now: new Date("2026-08-13T12:00:00.000Z"),
        acceptedState: {
          latestSourceTimestamp: receipt.updatedAt,
          acceptedReceiptIds: [],
        },
      }),
    ).toBe(false);
    expect(
      validateCallback(
        {
          ...callback,
          sourceTimestamp: "2026-08-12T23:59:59.000Z",
        },
        request,
        {
          callbackBindingRef: "evidence://callback/binding",
          now: new Date("2026-08-13T12:00:00.000Z"),
          acceptedState: { latestSourceTimestamp: null, acceptedReceiptIds: [] },
        },
      ),
    ).toBe(false);
  });
});
