/** Closed Lisa provider-policy outcomes. Silent success is unrepresentable. */

export const LISA_POLICY_STATUSES = ["accepted", "denied", "unavailable", "invalid"] as const;
export type LisaPolicyStatus = (typeof LISA_POLICY_STATUSES)[number];

export const LISA_PROVIDER_NAMES = [
  "platform",
  "brain",
  "skills",
  "libraries",
  "autowork",
] as const;
export type LisaProviderName = (typeof LISA_PROVIDER_NAMES)[number];

/** Matches Lisa job privacy classes without importing the job catalogue. */
export type LisaPrivacyClass = "work" | "personal_compliance" | "private_health";

export type LisaAdmittedOperation = Readonly<{
  provider: LisaProviderName;
  name: string;
}>;

export type LisaIdentityHandle = Readonly<{
  actorId: "lisa";
  organizationId: string;
  runtimeBindingId: string;
  credentialRef: string;
  issuer: string;
  audience: LisaProviderName;
  serviceScopes: readonly string[];
  capabilities: readonly string[];
  issuedAtMs: number;
  expiresAtMs: number;
  revocationStatus: "active";
  subordinateAgentId: "lisa" | "main" | "lisa-cron";
}>;

export type LisaPolicyAccepted = Readonly<{
  status: "accepted";
  handle: LisaIdentityHandle;
  operation: LisaAdmittedOperation;
  privacyClass: LisaPrivacyClass;
  advisory: true;
  executionAuthority: "none";
  scheduleEnabled: false;
  helperCredentialGranted: false;
}>;

export type LisaPolicyDenied = Readonly<{
  status: "denied";
  reasonCode: string;
  retryable: false;
}>;

export type LisaPolicyUnavailable = Readonly<{
  status: "unavailable";
  reasonCode: string;
  hold: true;
  retryable: true;
  usedLocalMemoryAsProviderResult: false;
}>;

export type LisaPolicyInvalid = Readonly<{
  status: "invalid";
  reasonCode: string;
  retryable: false;
}>;

export type LisaPolicyOutcome =
  | LisaPolicyAccepted
  | LisaPolicyDenied
  | LisaPolicyUnavailable
  | LisaPolicyInvalid;

export function denied(reasonCode: string): LisaPolicyDenied {
  return { status: "denied", reasonCode, retryable: false };
}

export function unavailable(reasonCode: string): LisaPolicyUnavailable {
  return {
    status: "unavailable",
    reasonCode,
    hold: true,
    retryable: true,
    usedLocalMemoryAsProviderResult: false,
  };
}

export function invalid(reasonCode: string): LisaPolicyInvalid {
  return { status: "invalid", reasonCode, retryable: false };
}

export function accepted(input: {
  handle: LisaIdentityHandle;
  operation: LisaAdmittedOperation;
  privacyClass: LisaPrivacyClass;
}): LisaPolicyAccepted {
  return {
    status: "accepted",
    handle: input.handle,
    operation: input.operation,
    privacyClass: input.privacyClass,
    advisory: true,
    executionAuthority: "none",
    scheduleEnabled: false,
    helperCredentialGranted: false,
  };
}
