import {
  denied,
  invalid,
  unavailable,
  LISA_PROVIDER_NAMES,
  type LisaIdentityHandle,
  type LisaPolicyDenied,
  type LisaPolicyInvalid,
  type LisaPolicyUnavailable,
  type LisaProviderName,
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
import type { LisaProviderPorts } from "./ports.js";

export const LISA_CANONICAL_ACTOR_ID = "lisa" as const;
export const LISA_SUBORDINATE_AGENT_IDS = ["lisa", "main", "lisa-cron"] as const;
export type LisaSubordinateAgentId = (typeof LISA_SUBORDINATE_AGENT_IDS)[number];

export const LISA_HELPER_AGENT_IDS = ["cursor", "local-coder"] as const;
export type LisaHelperAgentId = (typeof LISA_HELPER_AGENT_IDS)[number];

export const LISA_PROVIDER_CAPABILITIES = {
  platform: "lisa.platform.consume",
  brain: "lisa.brain.v2",
  skills: "lisa.skills.v2",
  libraries: "lisa.libraries.revision2",
  autowork: "lisa.autowork.request",
} as const satisfies Record<LisaProviderName, string>;

const PROVIDER_NAMES = new Set<string>(LISA_PROVIDER_NAMES);

export function isLisaHelperAgentId(value: string): value is LisaHelperAgentId {
  return (LISA_HELPER_AGENT_IDS as readonly string[]).includes(value);
}

export function isLisaSubordinateAgentId(value: string): value is LisaSubordinateAgentId {
  return (LISA_SUBORDINATE_AGENT_IDS as readonly string[]).includes(value);
}

export function assertNoCredentialInheritance(
  agentId: unknown,
): LisaPolicyDenied | LisaPolicyInvalid | { status: "ok"; agentId: LisaSubordinateAgentId } {
  if (typeof agentId !== "string" || agentId.length === 0) {
    return invalid("malformed_agent_id");
  }
  if (isLisaHelperAgentId(agentId)) {
    return denied("helper_credential_inheritance");
  }
  if (!isLisaSubordinateAgentId(agentId)) {
    return denied("unrecognized_agent_id");
  }
  return { status: "ok", agentId };
}

function isProviderName(value: string): value is LisaProviderName {
  return PROVIDER_NAMES.has(value);
}

export type LisaIdentitySuccess = Readonly<{
  status: "ok";
  handle: LisaIdentityHandle;
}>;

export type LisaIdentityResult =
  | LisaIdentitySuccess
  | LisaPolicyDenied
  | LisaPolicyInvalid
  | LisaPolicyUnavailable;

export function resolveLisaIdentity(input: {
  agentId: unknown;
  facts: unknown;
  targetProvider: LisaProviderName;
  ports: LisaProviderPorts;
}): LisaIdentityResult {
  const inheritance = assertNoCredentialInheritance(input.agentId);
  if (inheritance.status !== "ok") {
    return inheritance;
  }
  const parsed = parseLisaPlatformFacts(input.facts, inheritance.agentId);
  if (parsed.status !== "ok") {
    return parsed;
  }
  if (parsed.handle.audience !== input.targetProvider) {
    return denied("audience_mismatch");
  }
  const requiredCapability = LISA_PROVIDER_CAPABILITIES[input.targetProvider];
  if (!parsed.handle.capabilities.includes(requiredCapability)) {
    return denied("missing_capability");
  }
  const nowMs = input.ports.clock.nowMs();
  if (parsed.handle.expiresAtMs <= nowMs) {
    return denied("expired");
  }
  if (parsed.handle.issuedAtMs > nowMs) {
    return denied("not_yet_valid");
  }
  const attestation = input.ports.platform.attestLisaFacts(parsed.handle);
  if (attestation.outcome === "unavailable") {
    return unavailable("platform_unavailable");
  }
  if (attestation.outcome === "rejected") {
    return denied("platform_attestation_rejected");
  }
  return { status: "ok", handle: parsed.handle };
}

function parseLisaPlatformFacts(
  facts: unknown,
  subordinateAgentId: LisaSubordinateAgentId,
): LisaIdentitySuccess | LisaPolicyDenied | LisaPolicyInvalid {
  if (isInheritedOrHostObject(facts)) {
    return invalid("accessor_backed_or_inherited_facts");
  }
  if (!isPlainOwnDataRecord(facts)) {
    return invalid("malformed_facts");
  }
  const requiredKeys = [
    "actorId",
    "organizationId",
    "runtimeBindingId",
    "credentialRef",
    "issuer",
    "audience",
    "serviceScopes",
    "capabilities",
    "issuedAtMs",
    "expiresAtMs",
    "revocationStatus",
  ] as const;
  for (const key of requiredKeys) {
    if (!hasOwnDataField(facts, key)) {
      return invalid("accessor_backed_or_inherited_facts");
    }
  }
  const actorId = readOwnString(facts, "actorId");
  if (actorId !== LISA_CANONICAL_ACTOR_ID) {
    return denied("actor_mismatch");
  }
  const organizationId = readOwnString(facts, "organizationId");
  const runtimeBindingId = readOwnString(facts, "runtimeBindingId");
  const credentialRef = readOwnString(facts, "credentialRef");
  const issuer = readOwnString(facts, "issuer");
  const audienceRaw = readOwnString(facts, "audience");
  const revocationStatus = readOwnString(facts, "revocationStatus");
  const issuedAtMs = readOwnFiniteInteger(facts, "issuedAtMs");
  const expiresAtMs = readOwnFiniteInteger(facts, "expiresAtMs");
  const serviceScopes = readOwnStringArray(facts, "serviceScopes");
  const capabilities = readOwnStringArray(facts, "capabilities");
  if (
    !organizationId ||
    !runtimeBindingId ||
    !credentialRef ||
    !issuer ||
    !audienceRaw ||
    !revocationStatus ||
    issuedAtMs === undefined ||
    expiresAtMs === undefined ||
    !serviceScopes ||
    !capabilities
  ) {
    return invalid("malformed_facts");
  }
  if (!isProviderName(audienceRaw)) {
    return denied("audience_mismatch");
  }
  if (
    !isSafeOpaqueRef(organizationId) ||
    !isSafeOpaqueRef(runtimeBindingId) ||
    !isSafeOpaqueRef(credentialRef) ||
    !isSafeOpaqueRef(issuer)
  ) {
    return denied("unsafe_credential_ref");
  }
  if (issuedAtMs <= 0 || expiresAtMs <= 0) {
    return invalid("malformed_facts");
  }
  if (revocationStatus !== "active") {
    return denied("revoked");
  }
  const handle: LisaIdentityHandle = Object.freeze({
    actorId: LISA_CANONICAL_ACTOR_ID,
    organizationId,
    runtimeBindingId,
    credentialRef,
    issuer,
    audience: audienceRaw,
    serviceScopes: Object.freeze([...serviceScopes]),
    capabilities: Object.freeze([...capabilities]),
    issuedAtMs,
    expiresAtMs,
    revocationStatus: "active",
    subordinateAgentId,
  });
  return { status: "ok", handle };
}
