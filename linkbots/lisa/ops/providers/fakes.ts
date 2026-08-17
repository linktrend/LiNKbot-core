import { createHash } from "node:crypto";
import { LISA_PROVIDER_CAPABILITIES } from "./identity.js";
import type { LisaIdentityHandle, LisaProviderName } from "./outcomes.js";
import { LISA_OCP01_PIN_IDENTITIES } from "./pin-identities.js";
import {
  type LisaAutoworkCallbackState,
  type LisaAutoworkPort,
  type LisaBrainPort,
  type LisaLibrariesPort,
  type LisaLibraryArtifactType,
  type LisaPolicyClock,
  type LisaProviderPorts,
  type LisaProviderStatus,
  type LisaSkillsPort,
  type PlatformAttestation,
  type PlatformClaimPort,
  type ProviderStatusPort,
} from "./ports.js";

const DEFAULT_NOW_MS = 1_800_000_000_000;

export const FAKE_SKILL_ID = "skill-ref-1";
export const FAKE_SKILL_RELEASE_ID = "skills-release-0.2.1";
export const FAKE_LIBRARY_RECORD_ID = "lib-record-1";
export const FAKE_AUTOWORK_IDEMPOTENCY_KEY = "autowork-idem-1";
export const FAKE_HANDOFF_REF = "handoff-ref-1";

export function createFakeClock(nowMs = DEFAULT_NOW_MS): LisaPolicyClock {
  return { nowMs: () => nowMs };
}

export function createFakePlatformClaimPort(
  attestation: PlatformAttestation = { outcome: "attested", attestedAtMs: DEFAULT_NOW_MS },
): PlatformClaimPort {
  return {
    attestLisaFacts() {
      return attestation;
    },
  };
}

export function createFakeProviderStatusPort(
  statusByProvider: Partial<Record<LisaProviderName, LisaProviderStatus>> = {},
): ProviderStatusPort {
  return {
    statusOf(provider) {
      return statusByProvider[provider] ?? "available";
    },
  };
}

export function createFakeSkillsPort(input?: {
  missingRelease?: boolean;
  unauthorized?: boolean;
}): LisaSkillsPort {
  return {
    request(request) {
      if (input?.unauthorized) {
        return { outcome: "unavailable", reasonCode: "skills_unauthorized" };
      }
      if (
        request.operation === "skills_catalog_list" ||
        request.operation === "skills_catalog_search" ||
        request.operation === "skills_capabilities_get" ||
        request.operation === "skills_librarian_status_get"
      ) {
        return {
          outcome: "accepted",
          evidence: { kind: "catalog", skillId: FAKE_SKILL_ID },
        };
      }
      if (input?.missingRelease) {
        return { outcome: "unavailable", reasonCode: "missing_exact_release" };
      }
      const pinCommit = LISA_OCP01_PIN_IDENTITIES.skills.commit;
      const pinTree = LISA_OCP01_PIN_IDENTITIES.skills.tree;
      if (request.pinCommit && request.pinCommit !== pinCommit) {
        return { outcome: "denied", reasonCode: "pin_mismatch" };
      }
      if (request.pinTree && request.pinTree !== pinTree) {
        return { outcome: "denied", reasonCode: "pin_mismatch" };
      }
      if (request.operation === "skills_release_verify") {
        return {
          outcome: "accepted",
          evidence: {
            kind: "release-verify",
            skillId: request.skillId ?? FAKE_SKILL_ID,
            releaseId: request.releaseId ?? FAKE_SKILL_RELEASE_ID,
            pinCommit,
            pinTree,
          },
        };
      }
      if (
        request.operation === "skills_use_report_status_get" ||
        request.operation === "skills_feedback_status_get"
      ) {
        return {
          outcome: "accepted",
          evidence: {
            kind: "use-report-status",
            skillId: request.skillId ?? FAKE_SKILL_ID,
            reportStatus: "recorded",
          },
        };
      }
      return {
        outcome: "accepted",
        evidence: {
          kind: "release-describe",
          skillId: request.skillId ?? FAKE_SKILL_ID,
          releaseId: request.releaseId ?? FAKE_SKILL_RELEASE_ID,
          pinCommit,
          pinTree,
        },
      };
    },
  };
}

export function createFakeBrainPort(input?: { unavailable?: boolean }): LisaBrainPort {
  return {
    requestHandoff(request) {
      if (input?.unavailable) {
        return { outcome: "unavailable", reasonCode: "brain_handoff_unavailable" };
      }
      return { outcome: "accepted", handoffRef: request.handoffRef };
    },
  };
}

export function createFakeAutoworkPort(input?: {
  unavailable?: boolean;
  contractIncompatible?: boolean;
}): LisaAutoworkPort {
  const seen = new Map<string, string>();
  return {
    request(request) {
      if (input?.unavailable) {
        return { outcome: "unavailable", reasonCode: "autowork_unavailable" };
      }
      if (input?.contractIncompatible) {
        return { outcome: "unavailable", reasonCode: "autowork_contract_incompatible" };
      }
      const bodyHash = createHash("sha256")
        .update(
          JSON.stringify({
            operation: request.operation,
            audience: request.audience,
            inputRefs: request.inputRefs,
            handoffRef: request.handoffRef ?? null,
          }),
        )
        .digest("hex");
      const prior = seen.get(request.idempotencyKey);
      if (prior && prior !== bodyHash) {
        return { outcome: "invalid", reasonCode: "idempotency_mutation" };
      }
      seen.set(request.idempotencyKey, bodyHash);
      return {
        outcome: "accepted",
        evidence: {
          receiptId: `receipt-${request.fingerprint.slice(0, 12)}`,
          fingerprint: request.fingerprint,
          callbackState: request.callbackState ?? "pending",
          ...(request.handoffRef ? { handoffRef: request.handoffRef } : {}),
        },
      };
    },
  };
}

export type FakeLibraryRecord = Readonly<{
  id: string;
  admitted: boolean;
  selectable: boolean;
  withdrawn?: boolean;
  artifactType: LisaLibraryArtifactType;
}>;

export function hashFakeCatalogue(records: readonly FakeLibraryRecord[]): string {
  return createHash("sha256")
    .update(JSON.stringify(records.map((record) => ({ id: record.id, admitted: record.admitted }))))
    .digest("hex");
}

export const FAKE_LIBRARY_RECORDS: readonly FakeLibraryRecord[] = Object.freeze([
  Object.freeze({
    id: FAKE_LIBRARY_RECORD_ID,
    admitted: true,
    selectable: true,
    artifactType: "document" as const,
  }),
]);

export const FAKE_LIBRARY_CATALOGUE_HASH = hashFakeCatalogue(FAKE_LIBRARY_RECORDS);

export function createFakeLibrariesPort(input?: {
  records?: readonly FakeLibraryRecord[];
  missingSnapshot?: boolean;
  disabled?: boolean;
}): LisaLibrariesPort {
  const records = input?.records ?? FAKE_LIBRARY_RECORDS;
  const catalogueHash = hashFakeCatalogue(records);
  return {
    request(request) {
      if (input?.disabled) {
        return { outcome: "unavailable", reasonCode: "libraries_disabled" };
      }
      if (input?.missingSnapshot) {
        return { outcome: "unavailable", reasonCode: "missing_catalogue_snapshot" };
      }
      if (request.operation === "libraries.catalogue.discover") {
        return {
          outcome: "accepted",
          evidence: {
            kind: "catalogue-page",
            catalogueHash,
            recordId: records[0]?.id,
            selectable: true,
            admitted: true,
          },
        };
      }
      const record = records.find((entry) => entry.id === request.recordId);
      if (!record) {
        return { outcome: "denied", reasonCode: "record_not_in_catalogue" };
      }
      if (request.catalogueHash && request.catalogueHash !== catalogueHash) {
        return { outcome: "denied", reasonCode: "catalogue_membership_mismatch" };
      }
      if (request.pinCommit && request.pinCommit !== LISA_OCP01_PIN_IDENTITIES.libraries.commit) {
        return { outcome: "denied", reasonCode: "pin_mismatch" };
      }
      if (request.pinTree && request.pinTree !== LISA_OCP01_PIN_IDENTITIES.libraries.tree) {
        return { outcome: "denied", reasonCode: "pin_mismatch" };
      }
      return {
        outcome: "accepted",
        evidence: {
          kind: "exact-release-receipt",
          catalogueHash,
          recordId: record.id,
          pinCommit: LISA_OCP01_PIN_IDENTITIES.libraries.commit,
          pinTree: LISA_OCP01_PIN_IDENTITIES.libraries.tree,
          selectable: true,
          admitted: true,
        },
      };
    },
  };
}

export function createFakeLisaProviderPorts(input?: {
  nowMs?: number;
  attestation?: PlatformAttestation;
  statusByProvider?: Partial<Record<LisaProviderName, LisaProviderStatus>>;
  skills?: LisaSkillsPort;
  autowork?: LisaAutoworkPort;
  libraries?: LisaLibrariesPort;
  brain?: LisaBrainPort;
}): LisaProviderPorts {
  return Object.freeze({
    platform: createFakePlatformClaimPort(input?.attestation),
    providerStatus: createFakeProviderStatusPort(input?.statusByProvider),
    clock: createFakeClock(input?.nowMs),
    skills: input?.skills ?? createFakeSkillsPort(),
    autowork: input?.autowork ?? createFakeAutoworkPort(),
    libraries: input?.libraries ?? createFakeLibrariesPort(),
    brain: input?.brain ?? createFakeBrainPort(),
  });
}

export function validLisaFacts(overrides: Partial<LisaIdentityHandle> = {}): LisaIdentityHandle {
  const facts = {
    actorId: "lisa" as const,
    organizationId: "linktrend",
    runtimeBindingId: "lisa-runtime-binding",
    credentialRef: "lisa-platform-cred-ref",
    issuer: "linkplatform",
    audience: "brain" as const,
    serviceScopes: ["brain.v2"],
    capabilities: ["lisa.brain.v2"],
    issuedAtMs: DEFAULT_NOW_MS - 60_000,
    expiresAtMs: DEFAULT_NOW_MS + 3_600_000,
    revocationStatus: "active" as const,
    subordinateAgentId: "main" as const,
    ...overrides,
  };
  return Object.freeze({
    ...facts,
    serviceScopes: Object.freeze([...facts.serviceScopes]),
    capabilities: Object.freeze([...facts.capabilities]),
  });
}

export function ownDataFacts(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  const facts = validLisaFacts();
  return {
    actorId: facts.actorId,
    organizationId: facts.organizationId,
    runtimeBindingId: facts.runtimeBindingId,
    credentialRef: facts.credentialRef,
    issuer: facts.issuer,
    audience: facts.audience,
    serviceScopes: [...facts.serviceScopes],
    capabilities: [...facts.capabilities],
    issuedAtMs: facts.issuedAtMs,
    expiresAtMs: facts.expiresAtMs,
    revocationStatus: facts.revocationStatus,
    ...overrides,
  };
}

export function ownDataFactsForProvider(provider: LisaProviderName): Record<string, unknown> {
  return ownDataFacts({
    audience: provider,
    serviceScopes: [`${provider}.scope`],
    capabilities: [LISA_PROVIDER_CAPABILITIES[provider]],
  });
}
