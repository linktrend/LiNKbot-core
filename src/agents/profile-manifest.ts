import type { AgentConfig } from "../config/types.agents.js";

/** The first version is deliberately small: references are opaque and never payloads. */
export const PROFILE_MANIFEST_VERSION = 1 as const;

export const PROFILE_MANIFEST_EXCLUSIONS = [
  "credentials",
  "accountIds",
  "privateState",
  "sessions",
  "recipients",
  "schedules",
  "jobs",
  "cookies",
  "downloads",
  "workspace",
] as const;

type ProfileManifestExclusion = (typeof PROFILE_MANIFEST_EXCLUSIONS)[number];

type ProfileManifestExclusions = {
  [key in ProfileManifestExclusion]: true;
};

export type ProfileManifest = {
  schemaVersion: typeof PROFILE_MANIFEST_VERSION;
  profileId: string;
  roleRefs: readonly string[];
  identityRef: string;
  activation: "active" | "inactive";
  capabilityClasses: readonly string[];
  providerPins: Readonly<Record<string, string>>;
  skillPins: Readonly<Record<string, string>>;
  modelPolicyRef: string;
  toolExposure: readonly string[];
  channelBindingRefs?: readonly string[];
  accountBindingRefs?: readonly string[];
  stateOwners: Readonly<Record<string, string>>;
  exclusions: ProfileManifestExclusions;
};

type ProfileManifestValidationResult =
  | { ok: true; valid: true; manifest: ProfileManifest; errors: [] }
  | { ok: false; valid: false; errors: string[] };

export class ProfileManifestValidationError extends Error {
  readonly errors: readonly string[];

  constructor(errors: readonly string[]) {
    super(`invalid profile manifest: ${errors.join("; ")}`);
    this.name = "ProfileManifestValidationError";
    this.errors = [...errors];
  }
}

export class InactiveProfileManifestError extends Error {
  constructor(profileId: string) {
    super(`profile "${profileId}" is inactive and cannot be provisioned`);
    this.name = "InactiveProfileManifestError";
  }
}

type ProfileProvisioningPlan = {
  profileId: string;
  activation: ProfileManifest["activation"];
  /** An inactive profile has no actor, credential, grant, or delivery side effect. */
  actions: readonly ("config" | "workspace" | "agent-state" | "bindings" | "jobs")[];
  excluded: readonly ProfileManifestExclusion[];
};

type ProfileManifestCloneOptions = {
  profileId: string;
  identityRef?: string;
  roleRefs?: readonly string[];
};

const PROFILE_MANIFEST_KEYS = new Set([
  "schemaVersion",
  "profileId",
  "roleRefs",
  "identityRef",
  "activation",
  "capabilityClasses",
  "providerPins",
  "skillPins",
  "modelPolicyRef",
  "toolExposure",
  "channelBindingRefs",
  "accountBindingRefs",
  "stateOwners",
  "exclusions",
]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function nonEmptyString(value: unknown, field: string, errors: string[]): value is string {
  if (typeof value !== "string" || value.trim().length === 0) {
    errors.push(`${field} must be a non-empty string`);
    return false;
  }
  if (value.trim() !== value) {
    errors.push(`${field} must not have leading or trailing whitespace`);
    return false;
  }
  return true;
}

function stringList(value: unknown, field: string, errors: string[], allowEmpty = false): string[] {
  if (!Array.isArray(value)) {
    errors.push(`${field} must be an array of strings`);
    return [];
  }
  const result: string[] = [];
  for (const [index, entry] of value.entries()) {
    if (!nonEmptyString(entry, `${field}[${index}]`, errors)) {
      continue;
    }
    if (result.includes(entry)) {
      errors.push(`${field} must not contain duplicate entries`);
      continue;
    }
    result.push(entry);
  }
  if (!allowEmpty && result.length === 0) {
    errors.push(`${field} must not be empty`);
  }
  return result;
}

function stringMap(
  value: unknown,
  field: string,
  errors: string[],
  allowEmpty = false,
): Record<string, string> {
  if (!isRecord(value)) {
    errors.push(`${field} must be an object of opaque string references`);
    return {};
  }
  const result: Record<string, string> = {};
  for (const [key, entry] of Object.entries(value)) {
    if (!nonEmptyString(key, `${field} key`, errors)) {
      continue;
    }
    if (!nonEmptyString(entry, `${field}.${key}`, errors)) {
      continue;
    }
    result[key] = entry;
  }
  if (!allowEmpty && Object.keys(result).length === 0) {
    errors.push(`${field} must not be empty`);
  }
  return result;
}

function validateExclusions(value: unknown, errors: string[]): ProfileManifestExclusions {
  const exclusions = isRecord(value) ? value : {};
  if (!isRecord(value)) {
    errors.push("exclusions must declare every cloning exclusion");
  }
  for (const key of Object.keys(exclusions)) {
    if (!(PROFILE_MANIFEST_EXCLUSIONS as readonly string[]).includes(key)) {
      errors.push(`exclusions.${key} is not a supported exclusion`);
    }
  }
  for (const key of PROFILE_MANIFEST_EXCLUSIONS) {
    if (exclusions[key] !== true) {
      errors.push(`exclusions.${key} must be true`);
    }
  }
  return Object.fromEntries(
    PROFILE_MANIFEST_EXCLUSIONS.map((key) => [key, true]),
  ) as ProfileManifestExclusions;
}

function freezeManifest(manifest: ProfileManifest): ProfileManifest {
  const frozen = {
    ...manifest,
    roleRefs: Object.freeze([...manifest.roleRefs]),
    capabilityClasses: Object.freeze([...manifest.capabilityClasses]),
    providerPins: Object.freeze({ ...manifest.providerPins }),
    skillPins: Object.freeze({ ...manifest.skillPins }),
    toolExposure: Object.freeze([...manifest.toolExposure]),
    ...(manifest.channelBindingRefs
      ? { channelBindingRefs: Object.freeze([...manifest.channelBindingRefs]) }
      : {}),
    ...(manifest.accountBindingRefs
      ? { accountBindingRefs: Object.freeze([...manifest.accountBindingRefs]) }
      : {}),
    stateOwners: Object.freeze({ ...manifest.stateOwners }),
    exclusions: Object.freeze({ ...manifest.exclusions }),
  } as ProfileManifest;
  return Object.freeze(frozen);
}

/** Validate and normalize a manifest without resolving any provider or account. */
export function validateProfileManifest(input: unknown): ProfileManifestValidationResult {
  const errors: string[] = [];
  if (!isRecord(input)) {
    return { ok: false, valid: false, errors: ["manifest must be an object"] };
  }
  for (const key of Object.keys(input)) {
    if (!PROFILE_MANIFEST_KEYS.has(key)) {
      errors.push(`manifest.${key} is not supported; private runtime data must not be included`);
    }
  }
  if (input.schemaVersion !== PROFILE_MANIFEST_VERSION) {
    errors.push(`schemaVersion must be ${PROFILE_MANIFEST_VERSION}`);
  }
  const profileId = nonEmptyString(input.profileId, "profileId", errors)
    ? input.profileId
    : "invalid";
  const roleRefs = stringList(input.roleRefs, "roleRefs", errors);
  const identityRef = nonEmptyString(input.identityRef, "identityRef", errors)
    ? input.identityRef
    : "invalid";
  const activation =
    input.activation === "active" || input.activation === "inactive" ? input.activation : undefined;
  if (!activation) {
    errors.push('activation must be "active" or "inactive"');
  }
  const capabilityClasses = stringList(input.capabilityClasses, "capabilityClasses", errors);
  const providerPins = stringMap(input.providerPins, "providerPins", errors);
  const skillPins = stringMap(input.skillPins, "skillPins", errors);
  const modelPolicyRef = nonEmptyString(input.modelPolicyRef, "modelPolicyRef", errors)
    ? input.modelPolicyRef
    : "invalid";
  const toolExposure = stringList(input.toolExposure, "toolExposure", errors, true);
  const channelBindingRefs =
    input.channelBindingRefs === undefined
      ? undefined
      : stringList(input.channelBindingRefs, "channelBindingRefs", errors, true);
  const accountBindingRefs =
    input.accountBindingRefs === undefined
      ? undefined
      : stringList(input.accountBindingRefs, "accountBindingRefs", errors, true);
  const stateOwners = stringMap(input.stateOwners, "stateOwners", errors);
  const exclusions = validateExclusions(input.exclusions, errors);
  if (errors.length > 0 || !activation) {
    return { ok: false, valid: false, errors };
  }
  return {
    ok: true,
    valid: true,
    errors: [],
    manifest: freezeManifest({
      schemaVersion: PROFILE_MANIFEST_VERSION,
      profileId,
      roleRefs,
      identityRef,
      activation,
      capabilityClasses,
      providerPins,
      skillPins,
      modelPolicyRef,
      toolExposure,
      ...(channelBindingRefs ? { channelBindingRefs } : {}),
      ...(accountBindingRefs ? { accountBindingRefs } : {}),
      stateOwners,
      exclusions,
    }),
  };
}

export function assertValidProfileManifest(input: unknown): ProfileManifest {
  const result = validateProfileManifest(input);
  if (!result.ok) {
    throw new ProfileManifestValidationError(result.errors);
  }
  return result.manifest;
}

/** Clone only generic profile structure; all instance/account/private bindings are dropped. */
export function cloneProfileManifest(
  source: unknown,
  options: ProfileManifestCloneOptions,
): ProfileManifest {
  const manifest = assertValidProfileManifest(source);
  const errors: string[] = [];
  const profileId = nonEmptyString(options.profileId, "profileId", errors)
    ? options.profileId
    : "invalid";
  const identityRef = options.identityRef ?? manifest.identityRef;
  const roleRefs = options.roleRefs ?? manifest.roleRefs;
  nonEmptyString(identityRef, "identityRef", errors);
  stringList(roleRefs, "roleRefs", errors);
  if (errors.length > 0) {
    throw new ProfileManifestValidationError(errors);
  }
  const generic = { ...manifest } as {
    channelBindingRefs?: readonly string[];
    accountBindingRefs?: readonly string[];
  } & Omit<ProfileManifest, "channelBindingRefs" | "accountBindingRefs">;
  delete generic.channelBindingRefs;
  delete generic.accountBindingRefs;
  return assertValidProfileManifest({
    ...generic,
    profileId,
    identityRef,
    roleRefs: [...roleRefs],
    activation: "inactive",
  });
}

export function planProfileProvisioning(input: unknown): ProfileProvisioningPlan {
  const manifest = assertValidProfileManifest(input);
  return {
    profileId: manifest.profileId,
    activation: manifest.activation,
    actions:
      manifest.activation === "active"
        ? ["config", "workspace", "agent-state", "bindings", "jobs"]
        : [],
    excluded: PROFILE_MANIFEST_EXCLUSIONS,
  };
}

/** Convert an active manifest into the narrow generic config shape used by createAgent. */
export function profileManifestAgentConfig(params: {
  manifest: unknown;
  agentId: string;
  name?: string;
}): Pick<AgentConfig, "id" | "name"> {
  const manifest = assertValidProfileManifest(params.manifest);
  if (manifest.activation !== "active") {
    throw new InactiveProfileManifestError(manifest.profileId);
  }
  return {
    id: params.agentId,
    ...(params.name ? { name: params.name } : {}),
  };
}
