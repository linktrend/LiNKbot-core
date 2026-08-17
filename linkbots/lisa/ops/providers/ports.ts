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

export type LisaSkillsPortRequest = Readonly<{
  operation: string;
  skillId?: string;
  releaseId?: string;
  pinCommit?: string;
  pinTree?: string;
  reportId?: string;
  feedbackId?: string;
  query?: string;
}>;

export type LisaSkillsPortEvidence = Readonly<{
  kind: "catalog" | "release-describe" | "release-verify" | "use-report-status";
  skillId?: string;
  releaseId?: string;
  pinCommit?: string;
  pinTree?: string;
  reportStatus?: string;
}>;

export type LisaSkillsPortResult =
  | { readonly outcome: "accepted"; readonly evidence: LisaSkillsPortEvidence }
  | { readonly outcome: "denied"; readonly reasonCode: string }
  | { readonly outcome: "unavailable"; readonly reasonCode: string }
  | { readonly outcome: "invalid"; readonly reasonCode: string };

export type LisaSkillsPort = {
  request(input: LisaSkillsPortRequest): LisaSkillsPortResult;
};

export type LisaBrainHandoffRequest = Readonly<{
  operation: "v2.handoff.create" | "v2.handoff.accept";
  handoffRef: string;
}>;

export type LisaBrainPortResult =
  | { readonly outcome: "accepted"; readonly handoffRef: string }
  | { readonly outcome: "denied"; readonly reasonCode: string }
  | { readonly outcome: "unavailable"; readonly reasonCode: string }
  | { readonly outcome: "invalid"; readonly reasonCode: string };

export type LisaBrainPort = {
  requestHandoff(input: LisaBrainHandoffRequest): LisaBrainPortResult;
};

export const LISA_AUTOWORK_CALLBACK_STATES = [
  "pending",
  "in_progress",
  "completed",
  "failed",
  "rejected",
] as const;
export type LisaAutoworkCallbackState = (typeof LISA_AUTOWORK_CALLBACK_STATES)[number];

export type LisaAutoworkPortRequest = Readonly<{
  operation: string;
  audience: "autowork";
  fingerprint: string;
  idempotencyKey: string;
  inputRefs: readonly string[];
  handoffRef?: string;
  callbackState?: LisaAutoworkCallbackState;
  priorCallbackState?: LisaAutoworkCallbackState;
}>;

export type LisaAutoworkPortEvidence = Readonly<{
  receiptId: string;
  fingerprint: string;
  callbackState: LisaAutoworkCallbackState;
  handoffRef?: string;
}>;

export type LisaAutoworkPortResult =
  | { readonly outcome: "accepted"; readonly evidence: LisaAutoworkPortEvidence }
  | { readonly outcome: "denied"; readonly reasonCode: string }
  | { readonly outcome: "unavailable"; readonly reasonCode: string }
  | { readonly outcome: "invalid"; readonly reasonCode: string };

export type LisaAutoworkPort = {
  request(input: LisaAutoworkPortRequest): LisaAutoworkPortResult;
};

export const LISA_ALLOWED_LIBRARY_ARTIFACT_TYPES = [
  "document",
  "schema",
  "contract",
  "bundle",
] as const;
export type LisaLibraryArtifactType = (typeof LISA_ALLOWED_LIBRARY_ARTIFACT_TYPES)[number];

export type LisaLibrariesPortRequest = Readonly<{
  operation: string;
  recordId?: string;
  catalogueHash?: string;
  pinCommit?: string;
  pinTree?: string;
}>;

export type LisaLibrariesPortEvidence = Readonly<{
  kind: "catalogue-page" | "exact-release-receipt";
  catalogueHash: string;
  recordId?: string;
  pinCommit?: string;
  pinTree?: string;
  selectable?: true;
  admitted?: true;
}>;

export type LisaLibrariesPortResult =
  | { readonly outcome: "accepted"; readonly evidence: LisaLibrariesPortEvidence }
  | { readonly outcome: "denied"; readonly reasonCode: string }
  | { readonly outcome: "unavailable"; readonly reasonCode: string }
  | { readonly outcome: "invalid"; readonly reasonCode: string };

export type LisaLibrariesPort = {
  request(input: LisaLibrariesPortRequest): LisaLibrariesPortResult;
};

export type LisaProviderPorts = {
  readonly platform: PlatformClaimPort;
  readonly providerStatus: ProviderStatusPort;
  readonly clock: LisaPolicyClock;
  readonly skills: LisaSkillsPort;
  readonly autowork: LisaAutoworkPort;
  readonly libraries: LisaLibrariesPort;
  readonly brain: LisaBrainPort;
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
