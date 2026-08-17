import { LISA_PROVIDER_CAPABILITIES } from "./identity.js";
import type { LisaIdentityHandle, LisaProviderName } from "./outcomes.js";
import {
  type LisaPolicyClock,
  type LisaProviderPorts,
  type LisaProviderStatus,
  type PlatformAttestation,
  type PlatformClaimPort,
  type ProviderStatusPort,
} from "./ports.js";

const DEFAULT_NOW_MS = 1_800_000_000_000;

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

export function createFakeLisaProviderPorts(input?: {
  nowMs?: number;
  attestation?: PlatformAttestation;
  statusByProvider?: Partial<Record<LisaProviderName, LisaProviderStatus>>;
}): LisaProviderPorts {
  return Object.freeze({
    platform: createFakePlatformClaimPort(input?.attestation),
    providerStatus: createFakeProviderStatusPort(input?.statusByProvider),
    clock: createFakeClock(input?.nowMs),
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
