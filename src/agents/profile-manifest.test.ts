import { expect, it } from "vitest";
import { createAgent } from "./agent-create.js";
import {
  PROFILE_MANIFEST_EXCLUSIONS,
  PROFILE_MANIFEST_VERSION,
  ProfileManifestValidationError,
  assertValidProfileManifest,
  cloneProfileManifest,
  planProfileProvisioning,
  validateProfileManifest,
} from "./profile-manifest.js";

function manifest(overrides: Record<string, unknown> = {}) {
  return {
    schemaVersion: PROFILE_MANIFEST_VERSION,
    profileId: "future-agent",
    roleRefs: ["role:future"],
    identityRef: "identity:future",
    activation: "inactive",
    capabilityClasses: ["general"],
    providerPins: { platform: "platform@1" },
    skillPins: { core: "skills@1" },
    modelPolicyRef: "policy:future",
    toolExposure: [],
    stateOwners: { profile: "openclaw" },
    exclusions: Object.fromEntries(PROFILE_MANIFEST_EXCLUSIONS.map((key) => [key, true])),
    ...overrides,
  };
}

it("validates the versioned inactive manifest and freezes the normalized result", () => {
  const result = validateProfileManifest(manifest());

  expect(result).toMatchObject({ ok: true, valid: true, errors: [] });
  if (!result.ok) {
    throw new Error("expected valid manifest");
  }
  expect(result.manifest.schemaVersion).toBe(1);
  expect(Object.isFrozen(result.manifest)).toBe(true);
  expect(result.manifest.activation).toBe("inactive");
});

it("fails closed when a required exclusion is missing or private data is supplied", () => {
  const missingExclusion = manifest({
    exclusions: Object.fromEntries(
      PROFILE_MANIFEST_EXCLUSIONS.filter((key) => key !== "credentials").map((key) => [key, true]),
    ),
  });
  const result = validateProfileManifest({ ...missingExclusion, secret: "should-not-be-here" });

  expect(result.ok).toBe(false);
  if (result.ok) {
    throw new Error("expected invalid manifest");
  }
  expect(result.errors).toEqual(
    expect.arrayContaining([
      "manifest.secret is not supported; private runtime data must not be included",
      "exclusions.credentials must be true",
    ]),
  );
});

it("clones generic structure while forcing inactive state and dropping instance bindings", () => {
  const source = manifest({
    activation: "active",
    channelBindingRefs: ["channel:lisa"],
    accountBindingRefs: ["account:lisa"],
  });
  const clone = cloneProfileManifest(source, {
    profileId: "future-copy",
    identityRef: "identity:future-copy",
  });

  expect(clone).toMatchObject({
    profileId: "future-copy",
    identityRef: "identity:future-copy",
    activation: "inactive",
  });
  expect(clone.channelBindingRefs).toBeUndefined();
  expect(clone.accountBindingRefs).toBeUndefined();
  expect(clone.providerPins).toEqual(source.providerPins);
  expect(clone.exclusions).toEqual(source.exclusions);
});

it("plans no runtime actions for inactive profiles", () => {
  expect(planProfileProvisioning(manifest())).toMatchObject({
    profileId: "future-agent",
    activation: "inactive",
    actions: [],
    excluded: PROFILE_MANIFEST_EXCLUSIONS,
  });
});

it("keeps createAgent side-effect free for inactive profiles and supports active dry-run", async () => {
  const inactive = await createAgent({
    name: "Future Agent",
    workspace: "/this-path-must-not-be-created",
    profileManifest: manifest(),
  });
  expect(inactive).toEqual({
    status: "inactive",
    agentId: "future-agent",
    profileId: "future-agent",
    bootstrapPending: false,
    runtimeCreated: false,
  });

  const activeDryRun = await createAgent({
    name: "Future Agent",
    profileManifest: manifest({ activation: "active" }),
    dryRun: true,
  });
  expect(activeDryRun).toMatchObject({
    status: "dry-run",
    agentId: "future-agent",
    profileId: "future-agent",
    plan: { activation: "active" },
  });
});

it("exposes structured validation errors to provisioning callers", () => {
  expect(() => assertValidProfileManifest({})).toThrow(ProfileManifestValidationError);
});
