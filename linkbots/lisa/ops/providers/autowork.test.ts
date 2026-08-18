import { describe, expect, it } from "vitest";
import { computeAutoworkFingerprint, requestLisaAutowork } from "./autowork.js";
import {
  createFakeAutoworkPort,
  createFakeBrainPort,
  createFakeLisaProviderPorts,
  FAKE_AUTOWORK_IDEMPOTENCY_KEY,
  FAKE_HANDOFF_REF,
  ownDataFactsForProvider,
} from "./fakes.js";

const nowMs = 1_800_000_000_000;

function request(input: {
  name?: string;
  request?: Record<string, unknown>;
  statusByProvider?: Parameters<typeof createFakeLisaProviderPorts>[0] extends infer T
    ? T extends { statusByProvider?: infer S }
      ? S
      : never
    : never;
  autowork?: ReturnType<typeof createFakeAutoworkPort>;
  brain?: ReturnType<typeof createFakeBrainPort>;
  facts?: Record<string, unknown>;
}) {
  const name = input.name ?? "status_collection";
  const baseRequest = {
    audience: "autowork",
    idempotencyKey: FAKE_AUTOWORK_IDEMPOTENCY_KEY,
    inputRefs: ["artifact-ref-1"],
    ...input.request,
  };
  return requestLisaAutowork(
    {
      agentId: "main",
      facts: input.facts ?? ownDataFactsForProvider("autowork"),
      operation: { provider: "autowork", name },
      privacyClass: "work",
      payload: { records: [{ id: "artifact-ref-1" }] },
      request: baseRequest,
    },
    createFakeLisaProviderPorts({
      nowMs,
      statusByProvider: input.statusByProvider,
      autowork: input.autowork,
      brain: input.brain,
    }),
  );
}

describe("Lisa Autowork domain request and outcome policy", () => {
  it("accepts an allowed request, binds the receipt to the fingerprint, and correlates a handoff", () => {
    const fingerprint = computeAutoworkFingerprint({
      operation: "status_collection",
      audience: "autowork",
      inputRefs: ["artifact-ref-1"],
      idempotencyKey: FAKE_AUTOWORK_IDEMPOTENCY_KEY,
      handoffRef: FAKE_HANDOFF_REF,
    });
    const result = request({
      request: { fingerprint, handoffRef: FAKE_HANDOFF_REF },
    });
    expect(result.status).toBe("accepted");
    if (result.status === "accepted") {
      expect(result.advisory).toBe(true);
      expect(result.executionAuthority).toBe("none");
      expect(result.evidence.fingerprint).toBe(fingerprint);
      expect(result.evidence.receiptId).toContain("receipt-");
      expect(result.evidence.handoffRef).toBe(FAKE_HANDOFF_REF);
    }
  });

  it("accepts legal callback progression and rejects terminal regression", () => {
    expect(
      request({
        request: { callbackState: "in_progress", priorCallbackState: "pending" },
      }).status,
    ).toBe("accepted");
    expect(
      request({
        request: { callbackState: "completed", priorCallbackState: "in_progress" },
      }).status,
    ).toBe("accepted");
    expect(
      request({
        request: { callbackState: "in_progress", priorCallbackState: "completed" },
      }),
    ).toMatchObject({ status: "invalid", reasonCode: "terminal_regression" });
  });

  it("denies wrong audience, denied kinds, and pre-issuance revocation", () => {
    expect(request({ request: { audience: "brain" } })).toMatchObject({
      status: "denied",
      reasonCode: "audience_mismatch",
    });
    expect(request({ name: "external_assistance" })).toMatchObject({
      status: "denied",
      reasonCode: "forbidden_operation",
    });
    expect(request({ name: "media_package" })).toMatchObject({
      status: "denied",
      reasonCode: "forbidden_operation",
    });
    expect(
      request({
        request: { revocationObservedAtMs: nowMs - 120_000 },
      }),
    ).toMatchObject({ status: "denied", reasonCode: "pre_issuance_revocation" });
  });

  it("rejects mutated bodies under the same idempotency key and fingerprint mismatch", () => {
    const autowork = createFakeAutoworkPort();
    const first = request({ autowork });
    expect(first.status).toBe("accepted");
    const mutated = requestLisaAutowork(
      {
        agentId: "main",
        facts: ownDataFactsForProvider("autowork"),
        operation: { provider: "autowork", name: "status_collection" },
        privacyClass: "work",
        payload: { records: [{ id: "artifact-ref-2" }] },
        request: {
          audience: "autowork",
          idempotencyKey: FAKE_AUTOWORK_IDEMPOTENCY_KEY,
          inputRefs: ["artifact-ref-2"],
        },
      },
      createFakeLisaProviderPorts({ nowMs, autowork }),
    );
    expect(mutated).toMatchObject({ status: "invalid", reasonCode: "idempotency_mutation" });
    expect(
      request({
        request: { fingerprint: "0".repeat(64) },
      }),
    ).toMatchObject({ status: "invalid", reasonCode: "missing_fingerprint_match" });
  });

  it("returns unavailable for Autowork unavailability, contract incompatibility, and revoked binding", () => {
    expect(
      request({
        autowork: createFakeAutoworkPort({ unavailable: true }),
      }),
    ).toMatchObject({
      status: "unavailable",
      reasonCode: "autowork_unavailable",
      hold: true,
      usedLocalMemoryAsProviderResult: false,
    });
    expect(
      request({
        statusByProvider: { autowork: "contract_incompatible" },
      }),
    ).toMatchObject({
      status: "unavailable",
      reasonCode: "provider_contract_incompatible",
    });
    expect(
      request({
        facts: ownDataFactsForProvider("autowork"),
        statusByProvider: { autowork: "disabled" },
      }),
    ).toMatchObject({ status: "unavailable", reasonCode: "provider_disabled" });
    expect(
      requestLisaAutowork(
        {
          agentId: "main",
          facts: { ...ownDataFactsForProvider("autowork"), revocationStatus: "revoked" },
          operation: { provider: "autowork", name: "precheck" },
          privacyClass: "work",
          request: {
            audience: "autowork",
            idempotencyKey: FAKE_AUTOWORK_IDEMPOTENCY_KEY,
            inputRefs: ["artifact-ref-1"],
          },
        },
        createFakeLisaProviderPorts({ nowMs }),
      ),
    ).toMatchObject({ status: "denied", reasonCode: "revoked", retryable: false });
  });
});
