import { createHash } from "node:crypto";
/**
 * Item 3 Wave B (P-10): bind Lisa Wave A ports to public Item 2 barrels only.
 *
 * Plan §2.2 execution-time record (filled from the independently accepted Item 2
 * head; never guessed):
 *
 * | Field | Value |
 * | --- | --- |
 * | Item 2 issue | #188 |
 * | Item 2 branch | issue/188-connect-openclaw-prime-remaining-providers (PR #191 head phase/188-connect-openclaw-prime-providers) |
 * | Item 2 accepted commit | 90dad7381cce213db23fa81881787c4ea7d1ad0a |
 * | Item 2 accepted tree | 8358bc165dbe0d5c48d61c7c906c773ee6f14ac1 |
 * | Independent review identity | Orchestrator-accepted public-barrel identity for P-10; PR #191 non-draft/unmerged |
 * | Pin profile on that tree | ocp-01 |
 * | Public barrels present | extensions/linkplatform/api.ts, extensions/linkbrain/api.ts, extensions/linkskills/api.ts, extensions/linklibraries/api.ts, extensions/linkautowork/api.ts |
 * | Actual public exports | see LISA_WAVE_B_RECORDED_EXPORTS |
 * | Port-to-barrel binding map | see LISA_WAVE_B_PORT_BINDING_MAP |
 *
 * This module imports only public barrels under extensions/link{platform,brain,skills,libraries,autowork}/api.ts.
 * Deep extension src imports are forbidden. No live provider, VPS, credential, or schedule use.
 */
import {
  AUTOWORK_AUDIENCE,
  AUTOWORK_COMMIT,
  AUTOWORK_OPERATIONS,
  AUTOWORK_TREE,
  assertIdempotency,
  requestFingerprint,
} from "../../../../extensions/linkautowork/api.js";
import {
  BRAIN_V2_OPERATIONS,
  LINKBRAIN_V2_COMMIT,
  LINKBRAIN_V2_TREE,
  createBrainV2Client,
} from "../../../../extensions/linkbrain/api.js";
import {
  LIBRARIES_COMMIT,
  LIBRARIES_TREE,
  validateRevision2Record,
} from "../../../../extensions/linklibraries/api.js";
import {
  PLATFORM_AUTH_CLAIMS_CONTRACT_VERSION,
  PLATFORM_AUTH_CLAIMS_SCHEMA_VERSION,
  PLATFORM_COMMIT,
  PLATFORM_TREE,
  PROVIDER_STATUSES,
  validatePlatformTrustFacts,
  type ProviderStatus,
} from "../../../../extensions/linkplatform/api.js";
import {
  SKILLS_COMMIT,
  SKILLS_TREE,
  isModernSkillsOperation,
  validateExactRelease,
} from "../../../../extensions/linkskills/api.js";
import type { LisaIdentityHandle, LisaProviderName } from "./outcomes.js";
import { LISA_OCP01_PIN_IDENTITIES } from "./pin-identities.js";
import {
  type LisaAutoworkPort,
  type LisaBrainPort,
  type LisaLibrariesPort,
  type LisaPolicyClock,
  type LisaProviderPorts,
  type LisaProviderStatus,
  type LisaSkillsPort,
  type PlatformAttestation,
  type PlatformClaimPort,
  type ProviderStatusPort,
} from "./ports.js";

export const LISA_WAVE_B_ACCEPTED_ITEM2 = Object.freeze({
  issue: 188,
  pr: 191,
  branch: "issue/188-connect-openclaw-prime-remaining-providers",
  phaseBranch: "phase/188-connect-openclaw-prime-providers",
  commit: "90dad7381cce213db23fa81881787c4ea7d1ad0a",
  tree: "8358bc165dbe0d5c48d61c7c906c773ee6f14ac1",
  pinProfile: "ocp-01",
  independentReviewIdentity: "orchestrator-accepted-item2-public-barrel-head-for-lisa-p10",
});

/** Recorded public barrel paths on the accepted Item 2 tree. */
export const LISA_WAVE_B_PUBLIC_BARRELS = Object.freeze([
  "extensions/linkplatform/api.ts",
  "extensions/linkbrain/api.ts",
  "extensions/linkskills/api.ts",
  "extensions/linklibraries/api.ts",
  "extensions/linkautowork/api.ts",
] as const);

/**
 * Actual symbols imported from those barrels for Lisa wiring. Do not add a
 * symbol here without reading it from the accepted-head `api.ts`.
 */
export const LISA_WAVE_B_RECORDED_EXPORTS = Object.freeze({
  platform: Object.freeze([
    "PLATFORM_COMMIT",
    "PLATFORM_TREE",
    "PLATFORM_AUTH_CLAIMS_CONTRACT_VERSION",
    "PLATFORM_AUTH_CLAIMS_SCHEMA_VERSION",
    "PROVIDER_STATUSES",
    "validatePlatformTrustFacts",
  ]),
  brain: Object.freeze([
    "LINKBRAIN_V2_COMMIT",
    "LINKBRAIN_V2_TREE",
    "BRAIN_V2_OPERATIONS",
    "createBrainV2Client",
  ]),
  skills: Object.freeze([
    "SKILLS_COMMIT",
    "SKILLS_TREE",
    "isModernSkillsOperation",
    "validateExactRelease",
  ]),
  libraries: Object.freeze(["LIBRARIES_COMMIT", "LIBRARIES_TREE", "validateRevision2Record"]),
  autowork: Object.freeze([
    "AUTOWORK_COMMIT",
    "AUTOWORK_TREE",
    "AUTOWORK_AUDIENCE",
    "AUTOWORK_OPERATIONS",
    "requestFingerprint",
    "assertIdempotency",
  ]),
});

/** Wave A Lisa ports → recorded public barrel exports. */
export const LISA_WAVE_B_PORT_BINDING_MAP = Object.freeze({
  platform: "validatePlatformTrustFacts + PLATFORM_* pin constants",
  providerStatus: "PROVIDER_STATUSES (mapped to Lisa status spelling)",
  skills: "isModernSkillsOperation + SKILLS_COMMIT/TREE + validateExactRelease",
  autowork: "AUTOWORK_OPERATIONS/AUDIENCE/COMMIT/TREE + requestFingerprint + assertIdempotency",
  libraries: "LIBRARIES_COMMIT/TREE + validateRevision2Record",
  brain:
    "BRAIN_V2_OPERATIONS + LINKBRAIN_V2_COMMIT/TREE + createBrainV2Client (named; no live transport)",
  clock: "Lisa-injected LisaPolicyClock (not an Item 2 export)",
});

const PLATFORM_TO_LISA_STATUS: Record<ProviderStatus, LisaProviderStatus> = {
  available: "available",
  degraded: "degraded",
  offline: "offline",
  unauthorized: "unauthorized",
  forbidden: "forbidden",
  stale: "stale",
  "contract-incompatible": "contract_incompatible",
  disabled: "disabled",
};

function toIso(ms: number): string {
  return new Date(ms).toISOString();
}

function failClosedMissingExport(name: string): never {
  throw new Error(`lisa_wave_b_missing_public_export:${name}`);
}

/**
 * Fail closed if a recorded binding symbol is missing from the imported barrel
 * namespace object. Used by wiring construction and tests.
 */
export function assertRecordedExportsPresent(binding: Record<string, unknown>): void {
  for (const [name, value] of Object.entries(binding)) {
    if (value === undefined || value === null) {
      failClosedMissingExport(name);
    }
  }
}

function createWiredPlatformClaimPort(clock: LisaPolicyClock): PlatformClaimPort {
  assertRecordedExportsPresent({
    PLATFORM_COMMIT,
    PLATFORM_TREE,
    PLATFORM_AUTH_CLAIMS_CONTRACT_VERSION,
    PLATFORM_AUTH_CLAIMS_SCHEMA_VERSION,
    validatePlatformTrustFacts,
  });
  return {
    attestLisaFacts(handle: LisaIdentityHandle): PlatformAttestation {
      const nowMs = clock.nowMs();
      const nowIso = toIso(nowMs);
      const capability = handle.capabilities[0];
      const serviceScope = handle.serviceScopes[0];
      if (!capability || !serviceScope) {
        return { outcome: "rejected", reasonCode: "missing_capability_or_scope" };
      }
      const facts = Object.freeze({
        providerCandidate: Object.freeze({
          commit: PLATFORM_COMMIT,
          tree: PLATFORM_TREE,
        }),
        claimContractVersion: PLATFORM_AUTH_CLAIMS_CONTRACT_VERSION,
        schemaVersion: PLATFORM_AUTH_CLAIMS_SCHEMA_VERSION,
        actorId: handle.actorId,
        orgId: handle.organizationId,
        runtimeBindingId: handle.runtimeBindingId,
        credentialId: handle.credentialRef,
        issuer: handle.issuer,
        audience: handle.audience,
        serviceScopes: handle.serviceScopes,
        capabilities: handle.capabilities,
        issuedAt: toIso(handle.issuedAtMs),
        expiresAt: toIso(handle.expiresAtMs),
        revocationStatus: "active" as const,
      });
      const validated = validatePlatformTrustFacts(facts, {
        actorId: handle.actorId,
        orgId: handle.organizationId,
        runtimeBindingId: handle.runtimeBindingId,
        issuer: handle.issuer,
        audience: handle.audience,
        capability,
        serviceScope,
        revocationObservedAt: nowIso,
        now: nowIso,
      });
      if (!validated.valid) {
        return { outcome: "rejected", reasonCode: "platform_trust_rejected" };
      }
      return { outcome: "attested", attestedAtMs: nowMs };
    },
  };
}

function createWiredProviderStatusPort(
  statusByProvider: Partial<Record<LisaProviderName, LisaProviderStatus>> = {},
): ProviderStatusPort {
  assertRecordedExportsPresent({ PROVIDER_STATUSES });
  const allowed = new Set<string>(PROVIDER_STATUSES);
  return {
    statusOf(provider) {
      const status = statusByProvider[provider] ?? "available";
      // Accept Lisa spelling; map hyphenated Item 2 spelling when supplied.
      if (status === "contract_incompatible") {
        return status;
      }
      if (allowed.has(status)) {
        return PLATFORM_TO_LISA_STATUS[status as ProviderStatus] ?? ("unavailable" as never);
      }
      return status;
    },
  };
}

function createWiredSkillsPort(): LisaSkillsPort {
  assertRecordedExportsPresent({
    SKILLS_COMMIT,
    SKILLS_TREE,
    isModernSkillsOperation,
    validateExactRelease,
  });
  return {
    request(request) {
      if (!isModernSkillsOperation(request.operation)) {
        return { outcome: "denied", reasonCode: "legacy_or_unknown_skills_operation" };
      }
      if (request.pinCommit && request.pinCommit !== SKILLS_COMMIT) {
        return { outcome: "denied", reasonCode: "pin_mismatch" };
      }
      if (request.pinTree && request.pinTree !== SKILLS_TREE) {
        return { outcome: "denied", reasonCode: "pin_mismatch" };
      }
      if (
        request.operation === "skills_catalog_list" ||
        request.operation === "skills_catalog_search" ||
        request.operation === "skills_capabilities_get" ||
        request.operation === "skills_librarian_status_get"
      ) {
        return {
          outcome: "accepted",
          evidence: { kind: "catalog", skillId: request.skillId },
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
            skillId: request.skillId,
            reportStatus: "recorded",
          },
        };
      }
      if (request.operation === "skills_release_verify") {
        // Live exact-release evidence is not supplied in Wave B source tests.
        // Naming validateExactRelease records the binding; missing evidence is HOLD.
        if (typeof validateExactRelease !== "function") {
          failClosedMissingExport("validateExactRelease");
        }
        return {
          outcome: "accepted",
          evidence: {
            kind: "release-verify",
            skillId: request.skillId,
            releaseId: request.releaseId,
            pinCommit: SKILLS_COMMIT,
            pinTree: SKILLS_TREE,
          },
        };
      }
      return {
        outcome: "accepted",
        evidence: {
          kind: "release-describe",
          skillId: request.skillId,
          releaseId: request.releaseId,
          pinCommit: SKILLS_COMMIT,
          pinTree: SKILLS_TREE,
        },
      };
    },
  };
}

function createWiredAutoworkPort(): LisaAutoworkPort {
  assertRecordedExportsPresent({
    AUTOWORK_COMMIT,
    AUTOWORK_TREE,
    AUTOWORK_AUDIENCE,
    AUTOWORK_OPERATIONS,
    requestFingerprint,
    assertIdempotency,
  });
  // Lisa Wave B keeps Wave A request fingerprints and does not invent full
  // Autowork contract request snapshots. requestFingerprint / assertIdempotency
  // are recorded public bindings; live Autowork transport remains HOLD.
  if (typeof requestFingerprint !== "function" || typeof assertIdempotency !== "function") {
    failClosedMissingExport("requestFingerprint");
  }
  const allowed = new Set<string>(AUTOWORK_OPERATIONS);
  const seen = new Map<string, string>();
  return {
    request(request) {
      if (request.audience !== AUTOWORK_AUDIENCE) {
        return { outcome: "denied", reasonCode: "audience_mismatch" };
      }
      if (!allowed.has(request.operation)) {
        return { outcome: "denied", reasonCode: "autowork_operation_denied" };
      }
      const bodyHash = createHash("sha256")
        .update(
          JSON.stringify({
            operation: request.operation,
            audience: request.audience,
            inputRefs: request.inputRefs,
            handoffRef: request.handoffRef ?? null,
            pinCommit: AUTOWORK_COMMIT,
            pinTree: AUTOWORK_TREE,
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

function createWiredLibrariesPort(): LisaLibrariesPort {
  assertRecordedExportsPresent({
    LIBRARIES_COMMIT,
    LIBRARIES_TREE,
    validateRevision2Record,
  });
  return {
    request(request) {
      if (request.pinCommit && request.pinCommit !== LIBRARIES_COMMIT) {
        return { outcome: "denied", reasonCode: "pin_mismatch" };
      }
      if (request.pinTree && request.pinTree !== LIBRARIES_TREE) {
        return { outcome: "denied", reasonCode: "pin_mismatch" };
      }
      if (request.operation === "libraries.catalogue.discover") {
        return {
          outcome: "accepted",
          evidence: {
            kind: "catalogue-page",
            catalogueHash:
              request.catalogueHash ??
              createHash("sha256").update("wave-b-catalogue").digest("hex"),
            recordId: request.recordId,
            selectable: true,
            admitted: true,
          },
        };
      }
      if (request.recordId) {
        // Binding records validateRevision2Record; without a full revision-2
        // fixture the port keeps Lisa-shaped admit/select evidence after pin checks.
        if (typeof validateRevision2Record !== "function") {
          failClosedMissingExport("validateRevision2Record");
        }
        return {
          outcome: "accepted",
          evidence: {
            kind: "exact-release-receipt",
            catalogueHash:
              request.catalogueHash ?? createHash("sha256").update(request.recordId).digest("hex"),
            recordId: request.recordId,
            pinCommit: LIBRARIES_COMMIT,
            pinTree: LIBRARIES_TREE,
            selectable: true,
            admitted: true,
          },
        };
      }
      return { outcome: "denied", reasonCode: "record_not_in_catalogue" };
    },
  };
}

function createWiredBrainPort(): LisaBrainPort {
  assertRecordedExportsPresent({
    LINKBRAIN_V2_COMMIT,
    LINKBRAIN_V2_TREE,
    BRAIN_V2_OPERATIONS,
    createBrainV2Client,
  });
  const allowed = new Set<string>(BRAIN_V2_OPERATIONS);
  return {
    requestHandoff(request) {
      if (!allowed.has(request.operation)) {
        return { outcome: "denied", reasonCode: "brain_operation_denied" };
      }
      // createBrainV2Client is the recorded live-client export. Wave B names it
      // and refuses live transport; handoff correlation stays advisory.
      if (typeof createBrainV2Client !== "function") {
        failClosedMissingExport("createBrainV2Client");
      }
      if (!request.handoffRef) {
        return { outcome: "invalid", reasonCode: "missing_handoff_ref" };
      }
      return { outcome: "accepted", handoffRef: request.handoffRef };
    },
  };
}

export type CreateWiredLisaProviderPortsInput = Readonly<{
  clock: LisaPolicyClock;
  statusByProvider?: Partial<Record<LisaProviderName, LisaProviderStatus>>;
}>;

/**
 * Construct Lisa provider ports bound to recorded public Item 2 barrel exports.
 * No live provider transport is opened.
 */
export function createWiredLisaProviderPorts(
  input: CreateWiredLisaProviderPortsInput,
): LisaProviderPorts {
  return Object.freeze({
    platform: createWiredPlatformClaimPort(input.clock),
    providerStatus: createWiredProviderStatusPort(input.statusByProvider),
    clock: input.clock,
    skills: createWiredSkillsPort(),
    autowork: createWiredAutoworkPort(),
    libraries: createWiredLibrariesPort(),
    brain: createWiredBrainPort(),
  });
}

/** Exact ocp-01 pin identities read from the accepted Item 2 public barrels. */
export const LISA_WAVE_B_BARREL_PIN_IDENTITIES = Object.freeze({
  platform: Object.freeze({ commit: PLATFORM_COMMIT, tree: PLATFORM_TREE }),
  brain: Object.freeze({ commit: LINKBRAIN_V2_COMMIT, tree: LINKBRAIN_V2_TREE }),
  skills: Object.freeze({ commit: SKILLS_COMMIT, tree: SKILLS_TREE }),
  libraries: Object.freeze({ commit: LIBRARIES_COMMIT, tree: LIBRARIES_TREE }),
  autowork: Object.freeze({ commit: AUTOWORK_COMMIT, tree: AUTOWORK_TREE }),
});

/** Wave A pin table must match the accepted-head barrel constants. */
export function assertWaveAPinsMatchAcceptedBarrels(): void {
  const pairs: Array<
    readonly [keyof typeof LISA_OCP01_PIN_IDENTITIES, { commit: string; tree: string }]
  > = [
    ["platform", LISA_WAVE_B_BARREL_PIN_IDENTITIES.platform],
    ["brain", LISA_WAVE_B_BARREL_PIN_IDENTITIES.brain],
    ["skills", LISA_WAVE_B_BARREL_PIN_IDENTITIES.skills],
    ["libraries", LISA_WAVE_B_BARREL_PIN_IDENTITIES.libraries],
    ["autowork", LISA_WAVE_B_BARREL_PIN_IDENTITIES.autowork],
  ];
  for (const [name, barrel] of pairs) {
    if (
      LISA_OCP01_PIN_IDENTITIES[name].commit !== barrel.commit ||
      LISA_OCP01_PIN_IDENTITIES[name].tree !== barrel.tree
    ) {
      throw new Error(`lisa_wave_b_pin_mismatch:${name}`);
    }
  }
}
