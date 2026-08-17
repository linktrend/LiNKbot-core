import { describe, expect, it } from "vitest";
import { createFakeLisaProviderPorts, ownDataFactsForProvider } from "./fakes.js";
import { authorizeLisaProviderOperation } from "./policy.js";

const nowMs = 1_800_000_000_000;

function authorize(input: {
  provider?: "platform" | "brain" | "skills" | "libraries" | "autowork";
  name?: string;
  privacyClass?: unknown;
  payload?: unknown;
  localMemoryClaim?: unknown;
  statusByProvider?: Parameters<typeof createFakeLisaProviderPorts>[0] extends infer T
    ? T extends { statusByProvider?: infer S }
      ? S
      : never
    : never;
}) {
  const provider = input.provider ?? "brain";
  return authorizeLisaProviderOperation(
    {
      agentId: "main",
      facts: ownDataFactsForProvider(provider),
      operation: { provider, name: input.name ?? "v2.knowledge.browse" },
      privacyClass: input.privacyClass ?? "work",
      payload: input.payload,
      localMemoryClaim: input.localMemoryClaim,
    },
    createFakeLisaProviderPorts({ nowMs, statusByProvider: input.statusByProvider }),
  );
}

describe("Lisa privacy, memory, and knowledge policy", () => {
  it("accepts work-class advisory knowledge browse with redacted metadata only", () => {
    const result = authorize({
      payload: { records: [{ id: "knowledge-ref-1", title: "redacted-metadata" }] },
    });
    expect(result.status).toBe("accepted");
    if (result.status === "accepted") {
      expect(result.privacyClass).toBe("work");
      expect(result.advisory).toBe(true);
      expect(result.executionAuthority).toBe("none");
    }
  });

  it("denies transcripts, conversation content to Skills, and secret-shaped strings", () => {
    expect(
      authorize({
        payload: { transcript: "synthetic conversation transcript" },
      }),
    ).toMatchObject({ status: "denied", reasonCode: "conversation_payload", retryable: false });

    expect(
      authorize({
        provider: "skills",
        name: "skills_catalog_list",
        payload: { conversation: "synthetic chat body" },
      }),
    ).toMatchObject({ status: "denied", reasonCode: "conversation_payload" });

    expect(
      authorize({
        provider: "skills",
        name: "skills_catalog_list",
        payload: { telegram: "synthetic telegram body" },
      }),
    ).toMatchObject({ status: "denied", reasonCode: "conversation_payload" });

    const secret = ["pass", "word", "=", "not-a-real-", "secret"].join("");
    expect(
      authorize({
        provider: "skills",
        name: "skills_catalog_list",
        payload: { note: secret },
      }),
    ).toMatchObject({ status: "denied", reasonCode: "secret_payload" });
  });

  it("denies private health and personal compliance payloads and provider selection", () => {
    expect(
      authorize({
        privacyClass: "private_health",
        payload: { privateHealth: { energy: 3, source: "synthetic-fixture" } },
      }),
    ).toMatchObject({
      status: "denied",
      reasonCode: "privacy_class_forbidden_for_provider",
    });
    expect(
      authorize({
        privacyClass: "work",
        payload: { privateHealth: { energy: 3, source: "synthetic-fixture" } },
      }),
    ).toMatchObject({
      status: "denied",
      reasonCode: "private_health_or_compliance_payload",
    });
    expect(
      authorize({
        provider: "autowork",
        name: "status_collection",
        privacyClass: "personal_compliance",
        payload: { records: [{ id: "ref-1" }] },
      }),
    ).toMatchObject({
      status: "denied",
      reasonCode: "privacy_class_forbidden_for_provider",
    });
    expect(
      authorize({
        provider: "libraries",
        name: "libraries.catalogue.discover",
        privacyClass: "personal_compliance",
        payload: { records: [{ id: "ref-1" }] },
      }),
    ).toMatchObject({
      status: "denied",
      reasonCode: "privacy_class_forbidden_for_provider",
    });
  });

  it("does not treat local memory as a Brain result when Brain is unavailable", () => {
    const result = authorize({
      payload: { records: [{ id: "knowledge-ref-1" }] },
      localMemoryClaim: { memoryFile: "MEMORY.md", claimedAs: "brain" },
      statusByProvider: { brain: "offline" },
    });
    expect(result).toMatchObject({
      status: "unavailable",
      reasonCode: "provider_offline",
      hold: true,
      usedLocalMemoryAsProviderResult: false,
    });
  });

  it("rejects accessor-backed payloads", () => {
    const payload: Record<string, unknown> = { records: [{ id: "knowledge-ref-1" }] };
    Object.defineProperty(payload, "transcript", {
      enumerable: true,
      get: () => "hidden-transcript",
    });
    expect(authorize({ payload })).toMatchObject({
      status: "invalid",
      reasonCode: "accessor_backed_or_inherited_payload",
    });
  });
});
