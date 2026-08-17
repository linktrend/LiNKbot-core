import type { LisaIdentityHandle, LisaProviderName } from "./outcomes.js";

export type PlatformAttestation =
  | { readonly outcome: "attested"; readonly attestedAtMs: number }
  | { readonly outcome: "rejected"; readonly reasonCode: string }
  | { readonly outcome: "unavailable"; readonly reasonCode: string };

export type PlatformClaimPort = {
  attestLisaFacts(facts: LisaIdentityHandle): PlatformAttestation;
};

export const LISA_PROVIDER_STATUSES = [
  "available",
  "offline",
  "degraded",
  "stale",
  "disabled",
  "unauthorized",
  "forbidden",
  "contract_incompatible",
] as const;
export type LisaProviderStatus = (typeof LISA_PROVIDER_STATUSES)[number];

export type ProviderStatusPort = {
  statusOf(provider: LisaProviderName): LisaProviderStatus;
};

export type LisaPolicyClock = {
  nowMs(): number;
};

export type LisaProviderPorts = {
  readonly platform: PlatformClaimPort;
  readonly providerStatus: ProviderStatusPort;
  readonly clock: LisaPolicyClock;
};

export const UNAVAILABLE_PROVIDER_STATUSES = [
  "offline",
  "degraded",
  "stale",
  "disabled",
  "unauthorized",
  "forbidden",
  "contract_incompatible",
] as const satisfies readonly LisaProviderStatus[];

export function isUnavailableProviderStatus(status: LisaProviderStatus): boolean {
  return status !== "available";
}
