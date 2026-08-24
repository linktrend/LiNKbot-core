import { readFileSync } from "node:fs";
import { expect, it } from "vitest";
import {
  createBusinessPlanDraft,
  evaluateBlueprintLaunch,
  prepareBrainIndex,
  prepareDrivePublication,
  recordBrainIndex,
  recordDrivePublication,
  recordPrincipalApproval,
  requestBusinessPlanReview,
} from "../../linkbots/blueprints/business-plan-workflow.js";
import { createAgent } from "./agent-create.js";
import {
  PROFILE_MANIFEST_EXCLUSIONS,
  PROFILE_MANIFEST_VERSION,
  ProfileManifestValidationError,
  assertValidProfileManifest,
  cloneProfileManifest,
  planProfileProvisioning,
  profileManifestAgentConfig,
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

const executiveBlueprintIds = ["eric", "david", "sara", "jane"] as const;

function readExecutiveBlueprint(id: (typeof executiveBlueprintIds)[number]) {
  return JSON.parse(
    readFileSync(
      new URL(`../../linkbots/blueprints/${id}.profile-manifest.json`, import.meta.url),
      "utf8",
    ),
  ) as unknown;
}

it("keeps all executive blueprints schema-valid, inactive, and excluded from private runtime state", () => {
  for (const id of executiveBlueprintIds) {
    const input = readExecutiveBlueprint(id);
    const manifest = assertValidProfileManifest(input);

    expect(manifest.profileId).toBe(id);
    expect(manifest.activation).toBe("inactive");
    expect(manifest.exclusions).toEqual(
      Object.fromEntries(PROFILE_MANIFEST_EXCLUSIONS.map((key) => [key, true])),
    );
    expect(planProfileProvisioning(manifest).actions).toEqual([]);
    expect(() => {
      // Inactive manifests cannot be turned into an agent config by accident.
      profileManifestAgentConfig({ manifest, agentId: manifest.profileId });
    }).toThrow(/inactive/);

    const serialized = JSON.stringify({
      ...(input as Record<string, unknown>),
      exclusions: undefined,
    }).toLowerCase();
    for (const forbidden of [
      "lisa",
      "credential",
      "private state",
      "session",
      "recipient",
      "schedule",
      "job",
      "account@",
    ]) {
      expect(serialized).not.toContain(forbidden);
    }
  }
});

const workflowDigest = "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";

it("carries no-content plan metadata through review, approval, Drive, and Brain receipts", () => {
  const draft = createBusinessPlanDraft({
    artifactId: "artifact:executive-plan",
    version: 1,
    blueprintProfileId: "eric",
    contentDigest: workflowDigest,
    contentLength: 0,
    sourceRefs: ["source:approved-brief"],
  });
  const review = requestBusinessPlanReview(draft, ["reviewer:principal-staff"]);
  const approval = recordPrincipalApproval(review, {
    receiptRef: "receipt:principal-approval-1",
    approverRef: "principal:founder",
    approvalDigest: workflowDigest,
    approved: true,
  });
  const driveIntent = prepareDrivePublication(approval, "drive-target:business-plan");
  const publication = recordDrivePublication(driveIntent, "drive-receipt:1");
  const brainIntent = prepareBrainIndex(publication, "brain-collection:executive-plans");
  const indexed = recordBrainIndex(brainIntent, "brain-receipt:1");

  expect(indexed).toMatchObject({
    status: "indexed",
    content: null,
    versionLink: "artifact:executive-plan@v1",
    contentDigest: workflowDigest,
    publicationReceiptRef: "drive-receipt:1",
  });
});

it("rejects plan bodies and blocks activation without exact Platform identity and grants", () => {
  expect(() =>
    createBusinessPlanDraft({
      artifactId: "artifact:plan",
      version: 1,
      blueprintProfileId: "eric",
      contentDigest: workflowDigest,
      contentLength: 100,
      content: "a fake plan",
    }),
  ).toThrow(/does not accept content/);

  expect(evaluateBlueprintLaunch({ profileId: "eric", activation: "inactive" })).toMatchObject({
    status: "blocked",
    actions: [],
  });
  expect(
    evaluateBlueprintLaunch(
      { profileId: "eric", activation: "inactive" },
      {
        blueprintProfileId: "eric",
        platformIdentityRef: "platform-identity:eric",
        grantsDigest: workflowDigest,
        launchApprovalRef: "approval:launch-eric",
        approved: true,
      },
    ),
  ).toMatchObject({ status: "launch-authority-verified", activation: "inactive", actions: [] });
});
