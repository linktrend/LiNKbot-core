import { createHash } from "node:crypto";
import { LISA_DENIED_OPERATIONS } from "./capabilities.js";
import {
  accepted,
  denied,
  invalid,
  unavailable,
  type LisaPolicyAccepted,
  type LisaPolicyOutcome,
} from "./outcomes.js";
import {
  hasOwnDataField,
  isInheritedOrHostObject,
  isPlainOwnDataRecord,
  isSafeOpaqueRef,
  readOwnFiniteInteger,
  readOwnString,
  readOwnStringArray,
} from "./own-data.js";
import type { LisaProviderAuthorizationRequest } from "./policy.js";
import { authorizeLisaProviderOperation } from "./policy.js";
import {
  LISA_AUTOWORK_CALLBACK_STATES,
  type LisaAutoworkCallbackState,
  type LisaAutoworkPortEvidence,
  type LisaProviderPorts,
} from "./ports.js";

const TERMINAL_STATES = new Set<LisaAutoworkCallbackState>(["completed", "failed", "rejected"]);
const CALLBACK_RANK: Readonly<Record<LisaAutoworkCallbackState, number>> = {
  pending: 0,
  in_progress: 1,
  completed: 2,
  failed: 2,
  rejected: 2,
};

export type LisaAutoworkRequest = LisaProviderAuthorizationRequest & {
  readonly request?: unknown;
};

export type LisaAutoworkAccepted = LisaPolicyAccepted & {
  readonly evidence: LisaAutoworkPortEvidence;
};

export type LisaAutoworkOutcome =
  | LisaAutoworkAccepted
  | Exclude<LisaPolicyOutcome, LisaPolicyAccepted>;

export function requestLisaAutowork(
  input: LisaAutoworkRequest,
  ports: LisaProviderPorts,
): LisaAutoworkOutcome {
  const authorized = authorizeLisaProviderOperation(
    {
      agentId: input.agentId,
      facts: input.facts,
      operation: input.operation,
      privacyClass: input.privacyClass,
      payload: input.payload,
      localMemoryClaim: input.localMemoryClaim,
    },
    ports,
  );
  if (authorized.status !== "accepted") {
    return authorized;
  }
  if (authorized.operation.provider !== "autowork") {
    return denied("unknown_provider");
  }
  const parsed = parseAutoworkRequest(authorized.operation.name, input.request);
  if (parsed.status !== "ok") {
    return parsed;
  }
  if (
    parsed.revocationObservedAtMs !== undefined &&
    parsed.revocationObservedAtMs < authorized.handle.issuedAtMs
  ) {
    return denied("pre_issuance_revocation");
  }
  if (parsed.handoffRef) {
    const handoff = ports.brain.requestHandoff({
      operation: parsed.handoffOperation,
      handoffRef: parsed.handoffRef,
    });
    if (handoff.outcome !== "accepted") {
      if (handoff.outcome === "unavailable") {
        return unavailable(handoff.reasonCode);
      }
      if (handoff.outcome === "denied") {
        return denied(handoff.reasonCode);
      }
      return invalid(handoff.reasonCode);
    }
  }
  const portResult = ports.autowork.request({
    operation: authorized.operation.name,
    audience: "autowork",
    fingerprint: parsed.fingerprint,
    idempotencyKey: parsed.idempotencyKey,
    inputRefs: parsed.inputRefs,
    ...(parsed.handoffRef ? { handoffRef: parsed.handoffRef } : {}),
    ...(parsed.callbackState ? { callbackState: parsed.callbackState } : {}),
    ...(parsed.priorCallbackState ? { priorCallbackState: parsed.priorCallbackState } : {}),
  });
  if (portResult.outcome !== "accepted") {
    if (portResult.outcome === "unavailable") {
      return unavailable(portResult.reasonCode);
    }
    if (portResult.outcome === "denied") {
      return denied(portResult.reasonCode);
    }
    return invalid(portResult.reasonCode);
  }
  if (portResult.evidence.fingerprint !== parsed.fingerprint) {
    return invalid("missing_fingerprint_match");
  }
  return {
    ...accepted({
      handle: authorized.handle,
      operation: authorized.operation,
      privacyClass: authorized.privacyClass,
    }),
    evidence: portResult.evidence,
  };
}

function parseAutoworkRequest(
  operation: string,
  request: unknown,
):
  | {
      readonly status: "ok";
      readonly fingerprint: string;
      readonly idempotencyKey: string;
      readonly inputRefs: readonly string[];
      readonly handoffRef?: string;
      readonly handoffOperation: "v2.handoff.create" | "v2.handoff.accept";
      readonly callbackState?: LisaAutoworkCallbackState;
      readonly priorCallbackState?: LisaAutoworkCallbackState;
      readonly revocationObservedAtMs?: number;
    }
  | ReturnType<typeof denied>
  | ReturnType<typeof invalid> {
  if ((LISA_DENIED_OPERATIONS.autowork as readonly string[]).includes(operation)) {
    return denied("forbidden_operation");
  }
  if (request === undefined || isInheritedOrHostObject(request)) {
    return request === undefined
      ? invalid("malformed_request")
      : invalid("accessor_backed_or_inherited_request");
  }
  if (!isPlainOwnDataRecord(request)) {
    return invalid("malformed_request");
  }
  for (const key of Object.keys(request)) {
    if (!hasOwnDataField(request, key)) {
      return invalid("accessor_backed_or_inherited_request");
    }
  }
  const audience = readOwnString(request, "audience");
  if (audience !== "autowork") {
    return denied("audience_mismatch");
  }
  const idempotencyKey = readOwnString(request, "idempotencyKey");
  const inputRefs = readOwnStringArray(request, "inputRefs");
  if (!idempotencyKey || !isSafeOpaqueRef(idempotencyKey)) {
    return idempotencyKey ? denied("unsafe_credential_ref") : invalid("malformed_request");
  }
  if (!inputRefs || inputRefs.length === 0 || inputRefs.some((ref) => !isSafeOpaqueRef(ref))) {
    return invalid("malformed_request");
  }
  const handoffRef = readOwnString(request, "handoffRef");
  if (handoffRef !== undefined && !isSafeOpaqueRef(handoffRef)) {
    return denied("unsafe_credential_ref");
  }
  const handoffOperationRaw = readOwnString(request, "handoffOperation");
  const handoffOperation =
    handoffOperationRaw === "v2.handoff.accept" ? "v2.handoff.accept" : "v2.handoff.create";
  const callbackState = parseCallbackState(readOwnString(request, "callbackState"));
  const priorCallbackState = parseCallbackState(readOwnString(request, "priorCallbackState"));
  if (readOwnString(request, "callbackState") && !callbackState) {
    return invalid("malformed_request");
  }
  if (readOwnString(request, "priorCallbackState") && !priorCallbackState) {
    return invalid("malformed_request");
  }
  if (
    callbackState &&
    priorCallbackState &&
    isCallbackRegression(priorCallbackState, callbackState)
  ) {
    return invalid("terminal_regression");
  }
  const claimedFingerprint = readOwnString(request, "fingerprint");
  const computed = computeAutoworkFingerprint({
    operation,
    audience: "autowork",
    inputRefs,
    idempotencyKey,
    handoffRef,
  });
  if (claimedFingerprint && claimedFingerprint !== computed) {
    return invalid("missing_fingerprint_match");
  }
  const revocationObservedAtMs = readOwnFiniteInteger(request, "revocationObservedAtMs");
  return {
    status: "ok",
    fingerprint: computed,
    idempotencyKey,
    inputRefs,
    handoffOperation,
    ...(handoffRef ? { handoffRef } : {}),
    ...(callbackState ? { callbackState } : {}),
    ...(priorCallbackState ? { priorCallbackState } : {}),
    ...(revocationObservedAtMs !== undefined ? { revocationObservedAtMs } : {}),
  };
}

export function computeAutoworkFingerprint(input: {
  operation: string;
  audience: "autowork";
  inputRefs: readonly string[];
  idempotencyKey: string;
  handoffRef?: string;
}): string {
  return createHash("sha256")
    .update(
      JSON.stringify({
        operation: input.operation,
        audience: input.audience,
        inputRefs: [...input.inputRefs],
        idempotencyKey: input.idempotencyKey,
        handoffRef: input.handoffRef ?? null,
      }),
    )
    .digest("hex");
}

function parseCallbackState(value: string | undefined): LisaAutoworkCallbackState | undefined {
  if (!value) {
    return undefined;
  }
  return (LISA_AUTOWORK_CALLBACK_STATES as readonly string[]).includes(value)
    ? (value as LisaAutoworkCallbackState)
    : undefined;
}

function isCallbackRegression(
  prior: LisaAutoworkCallbackState,
  next: LisaAutoworkCallbackState,
): boolean {
  if (TERMINAL_STATES.has(prior) && next !== prior) {
    return true;
  }
  return CALLBACK_RANK[next] < CALLBACK_RANK[prior];
}
