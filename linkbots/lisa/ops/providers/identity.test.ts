import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { createFakeLisaProviderPorts, ownDataFacts } from "./fakes.js";
import {
  LISA_HELPER_AGENT_IDS,
  LISA_PROVIDER_CAPABILITIES,
  assertNoCredentialInheritance,
  resolveLisaIdentity,
} from "./identity.js";
import { authorizeLisaProviderOperation } from "./policy.js";

const nowMs = 1_800_000_000_000;

function accessorFacts(): Record<string, unknown> {
  const facts = ownDataFacts();
  Object.defineProperty(facts, "actorId", {
    enumerable: true,
    get: () => "lisa",
  });
  return facts;
}

function inheritedFacts(): Record<string, unknown> {
  return Object.create(ownDataFacts()) as Record<string, unknown>;
}

describe("Lisa identity and helper credential inheritance", () => {
  it("accepts valid own-data Lisa facts for main and lisa-cron", () => {
    for (const agentId of ["lisa", "main", "lisa-cron"] as const) {
      const result = resolveLisaIdentity({
        agentId,
        facts: ownDataFacts(),
        targetProvider: "brain",
        ports: createFakeLisaProviderPorts({ nowMs }),
      });
      expect(result.status).toBe("ok");
      if (result.status === "ok") {
        expect(result.handle.actorId).toBe("lisa");
        expect(result.handle.revocationStatus).toBe("active");
        expect(result.handle.subordinateAgentId).toBe(agentId);
        expect(Object.isFrozen(result.handle.capabilities)).toBe(true);
      }
    }
  });

  it("denies helper agents even when they present Lisa facts", () => {
    const facts = ownDataFacts();
    for (const agentId of LISA_HELPER_AGENT_IDS) {
      expect(assertNoCredentialInheritance(agentId)).toMatchObject({
        status: "denied",
        reasonCode: "helper_credential_inheritance",
        retryable: false,
      });
      const authorized = authorizeLisaProviderOperation(
        {
          agentId,
          facts,
          operation: { provider: "brain", name: "v2.discovery" },
          privacyClass: "work",
          payload: { records: [{ id: "knowledge-ref-1" }] },
        },
        createFakeLisaProviderPorts({ nowMs }),
      );
      expect(authorized).toMatchObject({
        status: "denied",
        reasonCode: "helper_credential_inheritance",
      });
      expect(authorized.status === "accepted" ? authorized.helperCredentialGranted : false).toBe(
        false,
      );
    }
  });

  it("denies unrecognized agents and malformed agent ids", () => {
    expect(assertNoCredentialInheritance("david")).toMatchObject({
      status: "denied",
      reasonCode: "unrecognized_agent_id",
      retryable: false,
    });
    expect(assertNoCredentialInheritance("")).toMatchObject({
      status: "invalid",
      reasonCode: "malformed_agent_id",
    });
  });

  it("denies wrong actor, expired, not-yet-valid, revoked, unsafe refs, and missing capability facts", () => {
    const ports = createFakeLisaProviderPorts({ nowMs });
    expect(
      resolveLisaIdentity({
        agentId: "main",
        facts: ownDataFacts({ actorId: "david" }),
        targetProvider: "brain",
        ports,
      }),
    ).toMatchObject({ status: "denied", reasonCode: "actor_mismatch" });
    expect(
      resolveLisaIdentity({
        agentId: "main",
        facts: ownDataFacts({ expiresAtMs: nowMs - 1 }),
        targetProvider: "brain",
        ports,
      }),
    ).toMatchObject({ status: "denied", reasonCode: "expired" });
    expect(
      resolveLisaIdentity({
        agentId: "main",
        facts: ownDataFacts({ issuedAtMs: nowMs + 1 }),
        targetProvider: "brain",
        ports,
      }),
    ).toMatchObject({ status: "denied", reasonCode: "not_yet_valid" });
    expect(
      resolveLisaIdentity({
        agentId: "main",
        facts: ownDataFacts({ revocationStatus: "revoked" }),
        targetProvider: "brain",
        ports,
      }),
    ).toMatchObject({ status: "denied", reasonCode: "revoked" });
    expect(
      resolveLisaIdentity({
        agentId: "main",
        facts: ownDataFacts({ capabilities: [] }),
        targetProvider: "brain",
        ports,
      }),
    ).toMatchObject({ status: "denied", reasonCode: "missing_capability" });
    expect(
      resolveLisaIdentity({
        agentId: "main",
        facts: ownDataFacts({ credentialRef: "lisa-platform-token-ref" }),
        targetProvider: "brain",
        ports,
      }),
    ).toMatchObject({ status: "denied", reasonCode: "unsafe_credential_ref" });
    expect(
      resolveLisaIdentity({
        agentId: "main",
        facts: ownDataFacts({
          audience: "skills",
          capabilities: [LISA_PROVIDER_CAPABILITIES.skills],
        }),
        targetProvider: "brain",
        ports,
      }),
    ).toMatchObject({ status: "denied", reasonCode: "audience_mismatch" });
  });

  it("rejects accessor-backed and inherited facts as invalid", () => {
    const ports = createFakeLisaProviderPorts({ nowMs });
    expect(
      resolveLisaIdentity({
        agentId: "main",
        facts: accessorFacts(),
        targetProvider: "brain",
        ports,
      }),
    ).toMatchObject({ status: "invalid", reasonCode: "accessor_backed_or_inherited_facts" });
    expect(
      resolveLisaIdentity({
        agentId: "main",
        facts: inheritedFacts(),
        targetProvider: "brain",
        ports,
      }),
    ).toMatchObject({ status: "invalid", reasonCode: "accessor_backed_or_inherited_facts" });
  });

  it("returns unavailable when the Platform port cannot attest, and snapshots capabilities", () => {
    const facts = ownDataFacts();
    const capabilities = facts.capabilities as string[];
    const result = resolveLisaIdentity({
      agentId: "main",
      facts,
      targetProvider: "brain",
      ports: createFakeLisaProviderPorts({
        nowMs,
        attestation: { outcome: "unavailable", reasonCode: "transport" },
      }),
    });
    expect(result).toMatchObject({ status: "unavailable", reasonCode: "platform_unavailable" });
    capabilities.push("lisa.autowork.request");
    const acceptedIdentity = resolveLisaIdentity({
      agentId: "main",
      facts: ownDataFacts(),
      targetProvider: "brain",
      ports: createFakeLisaProviderPorts({ nowMs }),
    });
    expect(acceptedIdentity.status).toBe("ok");
    if (acceptedIdentity.status === "ok") {
      expect(acceptedIdentity.handle.capabilities).toEqual(["lisa.brain.v2"]);
    }
  });

  it("denies rejected Platform attestation without treating it as retryable unavailability", () => {
    expect(
      resolveLisaIdentity({
        agentId: "main",
        facts: ownDataFacts(),
        targetProvider: "brain",
        ports: createFakeLisaProviderPorts({
          nowMs,
          attestation: { outcome: "rejected", reasonCode: "binding_mismatch" },
        }),
      }),
    ).toMatchObject({
      status: "denied",
      reasonCode: "platform_attestation_rejected",
      retryable: false,
    });
  });

  it("does not import Item 2 adapter paths", () => {
    const here = path.dirname(fileURLToPath(import.meta.url));
    const source = readFileSync(path.join(here, "identity.ts"), "utf8");
    expect(source).not.toMatch(/extensions\/link/u);
  });
});
