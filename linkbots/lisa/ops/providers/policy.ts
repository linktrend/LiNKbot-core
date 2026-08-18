import { admitLisaOperation } from "./capabilities.js";
import { assertNoCredentialInheritance, resolveLisaIdentity } from "./identity.js";
import {
  accepted,
  invalid,
  unavailable,
  LISA_PROVIDER_NAMES,
  type LisaPolicyOutcome,
  type LisaProviderName,
} from "./outcomes.js";
import { hasOwnDataField, isPlainOwnDataRecord, readOwnString } from "./own-data.js";
import { isUnavailableProviderStatus, type LisaProviderPorts } from "./ports.js";
import { evaluateLisaPrivacy } from "./privacy.js";

export type LisaProviderAuthorizationRequest = {
  readonly agentId: unknown;
  readonly facts: unknown;
  readonly operation: unknown;
  readonly privacyClass: unknown;
  readonly payload?: unknown;
  readonly localMemoryClaim?: unknown;
};

/**
 * Helper denial, identity, allowlist, privacy, then provider status.
 * Unavailability never rewrites a denial into a retryable HOLD.
 * Local memory claims are never consulted as provider results.
 */
export function authorizeLisaProviderOperation(
  request: LisaProviderAuthorizationRequest,
  ports: LisaProviderPorts,
): LisaPolicyOutcome {
  const inheritance = assertNoCredentialInheritance(request.agentId);
  if (inheritance.status !== "ok") {
    return inheritance;
  }

  const admitted = admitLisaOperation(request.operation);
  const targetProvider =
    admitted.status === "ok" ? admitted.operation.provider : readOwnProvider(request.operation);
  if (!targetProvider) {
    return admitted.status === "ok" ? invalid("malformed_operation") : admitted;
  }

  const identity = resolveLisaIdentity({
    agentId: request.agentId,
    facts: request.facts,
    targetProvider,
    ports,
  });
  if (identity.status !== "ok") {
    return identity;
  }
  if (admitted.status !== "ok") {
    return admitted;
  }

  const privacy = evaluateLisaPrivacy({
    privacyClass: request.privacyClass,
    payload: request.payload,
    operation: admitted.operation,
  });
  if (privacy.status !== "ok") {
    return privacy;
  }

  const providerStatus = ports.providerStatus.statusOf(admitted.operation.provider);
  if (isUnavailableProviderStatus(providerStatus)) {
    return unavailable(`provider_${providerStatus}`);
  }

  return accepted({
    handle: identity.handle,
    operation: admitted.operation,
    privacyClass: privacy.privacyClass,
  });
}

function readOwnProvider(operation: unknown): LisaProviderName | undefined {
  if (!isPlainOwnDataRecord(operation) || !hasOwnDataField(operation, "provider")) {
    return undefined;
  }
  const provider = readOwnString(operation, "provider");
  return (LISA_PROVIDER_NAMES as readonly string[]).includes(provider ?? "")
    ? (provider as LisaProviderName)
    : undefined;
}
