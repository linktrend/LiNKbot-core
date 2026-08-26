/**
 * No-content business-plan workflow contracts for inactive executive blueprints.
 *
 * These functions only validate and carry opaque references. They do not create,
 * publish, index, or persist plan content, and they never resolve an account.
 */

export const BUSINESS_PLAN_WORKFLOW_VERSION = 1 as const;
export const BUSINESS_PLAN_PHASES = [
  "draft",
  "review",
  "principal_approval",
  "drive_publication",
  "brain_index",
] as const;

export type BusinessPlanPhase = (typeof BUSINESS_PLAN_PHASES)[number];

type ArtifactIdentity = {
  artifactId: string;
  version: number;
  blueprintProfileId: string;
  contentDigest: string;
  contentLength: number;
  versionLink: string;
  /** Deliberately absent: the workflow carries no plan content. */
  content: null;
};

export type BusinessPlanDraft = ArtifactIdentity & {
  kind: "business-plan-artifact";
  workflowVersion: typeof BUSINESS_PLAN_WORKFLOW_VERSION;
  phase: "draft";
  sourceRefs: readonly string[];
};

export type BusinessPlanReviewReceipt = ArtifactIdentity & {
  kind: "business-plan-review-receipt";
  workflowVersion: typeof BUSINESS_PLAN_WORKFLOW_VERSION;
  phase: "review";
  reviewerRefs: readonly string[];
  receiptRef: string;
};

export type PrincipalApprovalReceipt = ArtifactIdentity & {
  kind: "principal-approval-receipt";
  workflowVersion: typeof BUSINESS_PLAN_WORKFLOW_VERSION;
  phase: "principal_approval";
  receiptRef: string;
  approverRef: string;
  approvalDigest: string;
  versionLink: string;
};

export type DrivePublicationIntent = ArtifactIdentity & {
  kind: "drive-publication-intent";
  workflowVersion: typeof BUSINESS_PLAN_WORKFLOW_VERSION;
  phase: "drive_publication";
  status: "PENDING_EXTERNAL";
  approvalReceiptRef: string;
  targetRef: string;
};

export type DrivePublicationReceipt = ArtifactIdentity & {
  kind: "drive-publication-receipt";
  workflowVersion: typeof BUSINESS_PLAN_WORKFLOW_VERSION;
  phase: "drive_publication";
  status: "published";
  approvalReceiptRef: string;
  publicationReceiptRef: string;
  targetRef: string;
};

export type BrainIndexIntent = ArtifactIdentity & {
  kind: "brain-index-intent";
  workflowVersion: typeof BUSINESS_PLAN_WORKFLOW_VERSION;
  phase: "brain_index";
  status: "PENDING_EXTERNAL";
  publicationReceiptRef: string;
  collectionRef: string;
};

export type BrainIndexReceipt = ArtifactIdentity & {
  kind: "brain-index-receipt";
  workflowVersion: typeof BUSINESS_PLAN_WORKFLOW_VERSION;
  phase: "brain_index";
  status: "indexed";
  publicationReceiptRef: string;
  indexReceiptRef: string;
  collectionRef: string;
};

export type PrincipalApprovalInput = {
  receiptRef: string;
  approverRef: string;
  approvalDigest: string;
  approved: true;
};

export type BlueprintLaunchRecord = {
  blueprintProfileId: string;
  platformIdentityRef: string;
  grantsDigest: string;
  launchApprovalRef: string;
  approved: true;
};

export type BlueprintLaunchEvaluation =
  | {
      status: "blocked";
      profileId: string;
      reasons: readonly string[];
      actions: readonly [];
    }
  | {
      status: "launch-authority-verified";
      profileId: string;
      activation: "inactive";
      platformIdentityRef: string;
      grantsDigest: string;
      actions: readonly [];
    };

function record(value: object): object {
  return Object.freeze(value);
}

function requiredRef(value: unknown, field: string): string {
  if (typeof value !== "string" || value.trim().length === 0 || value.trim() !== value) {
    throw new Error(`${field} must be a non-empty opaque reference`);
  }
  if (/([\s]|@|https?:\/\/|\\)/i.test(value)) {
    throw new Error(`${field} must be an opaque reference, not an account or URL`);
  }
  return value;
}

function sha256(value: unknown, field: string): string {
  if (typeof value !== "string" || !/^[a-f0-9]{64}$/i.test(value)) {
    throw new Error(`${field} must be a SHA-256 digest`);
  }
  return value.toLowerCase();
}

function positiveVersion(value: unknown): number {
  if (!Number.isInteger(value) || (value as number) < 1) {
    throw new Error("version must be a positive integer");
  }
  return value as number;
}

function nonNegativeLength(value: unknown): number {
  if (!Number.isInteger(value) || (value as number) < 0) {
    throw new Error("contentLength must be a non-negative integer");
  }
  return value as number;
}

function rejectContentFields(input: Record<string, unknown>): void {
  for (const key of ["content", "body", "plan", "planContent"]) {
    if (key in input && input[key] !== null) {
      throw new Error(`business-plan workflow does not accept ${key}`);
    }
  }
}

function artifactFromInput(input: Record<string, unknown>): ArtifactIdentity {
  rejectContentFields(input);
  const artifactId = requiredRef(input.artifactId, "artifactId");
  const blueprintProfileId = requiredRef(input.blueprintProfileId, "blueprintProfileId");
  const version = positiveVersion(input.version);
  const contentDigest = sha256(input.contentDigest, "contentDigest");
  const contentLength = nonNegativeLength(input.contentLength);
  return {
    artifactId,
    version,
    blueprintProfileId,
    contentDigest,
    contentLength,
    versionLink: `${artifactId}@v${version}`,
    content: null,
  };
}

/** Create metadata for a draft; there is intentionally no draft body. */
export function createBusinessPlanDraft(input: Record<string, unknown>): BusinessPlanDraft {
  const artifact = artifactFromInput(input);
  const sourceRefs = Array.isArray(input.sourceRefs)
    ? input.sourceRefs.map((value, index) => requiredRef(value, `sourceRefs[${index}]`))
    : [];
  return record({
    ...artifact,
    kind: "business-plan-artifact",
    workflowVersion: BUSINESS_PLAN_WORKFLOW_VERSION,
    phase: "draft",
    sourceRefs: Object.freeze(sourceRefs),
  }) as BusinessPlanDraft;
}

/** Carry a draft into review without exposing or generating plan content. */
export function requestBusinessPlanReview(
  draft: BusinessPlanDraft,
  reviewerRefs: readonly string[],
): BusinessPlanReviewReceipt {
  if (draft.phase !== "draft" || draft.content !== null) {
    throw new Error("only a no-content draft can enter review");
  }
  const reviewers = reviewerRefs.map((value, index) =>
    requiredRef(value, `reviewerRefs[${index}]`),
  );
  if (reviewers.length === 0) {
    throw new Error("reviewerRefs must not be empty");
  }
  const receiptRef = `${draft.versionLink}:review`;
  return record({
    ...draft,
    kind: "business-plan-review-receipt",
    phase: "review",
    reviewerRefs: Object.freeze(reviewers),
    receiptRef,
  }) as BusinessPlanReviewReceipt;
}

/** Record an explicit Principal approval bound to the exact artifact digest/version. */
export function recordPrincipalApproval(
  review: BusinessPlanReviewReceipt,
  input: PrincipalApprovalInput,
): PrincipalApprovalReceipt {
  if (review.phase !== "review" || review.content !== null) {
    throw new Error("only a no-content review receipt can be approved");
  }
  const receiptRef = requiredRef(input.receiptRef, "receiptRef");
  const approverRef = requiredRef(input.approverRef, "approverRef");
  if (input.approved !== true) {
    throw new Error("Principal approval must be explicit");
  }
  const approvalDigest = sha256(input.approvalDigest, "approvalDigest");
  return record({
    ...review,
    kind: "principal-approval-receipt",
    phase: "principal_approval",
    receiptRef,
    approverRef,
    approvalDigest,
  }) as PrincipalApprovalReceipt;
}

/** Prepare an external Drive publication request; this function never calls Drive. */
export function prepareDrivePublication(
  approval: PrincipalApprovalReceipt,
  targetRef: string,
): DrivePublicationIntent {
  if (approval.phase !== "principal_approval" || approval.content !== null) {
    throw new Error("only a no-content Principal approval can prepare publication");
  }
  const target = requiredRef(targetRef, "targetRef");
  return record({
    ...approval,
    kind: "drive-publication-intent",
    phase: "drive_publication",
    status: "PENDING_EXTERNAL",
    approvalReceiptRef: approval.receiptRef,
    targetRef: target,
  }) as DrivePublicationIntent;
}

export function recordDrivePublication(
  intent: DrivePublicationIntent,
  publicationReceiptRef: string,
): DrivePublicationReceipt {
  if (intent.status !== "PENDING_EXTERNAL" || intent.content !== null) {
    throw new Error("only a pending no-content publication can be recorded");
  }
  const receipt = requiredRef(publicationReceiptRef, "publicationReceiptRef");
  return record({
    ...intent,
    kind: "drive-publication-receipt",
    status: "published",
    publicationReceiptRef: receipt,
  }) as DrivePublicationReceipt;
}

/** Prepare an external Brain index request; this function never calls Brain. */
export function prepareBrainIndex(
  publication: DrivePublicationReceipt,
  collectionRef: string,
): BrainIndexIntent {
  if (publication.status !== "published" || publication.content !== null) {
    throw new Error("only a recorded no-content publication can prepare indexing");
  }
  const collection = requiredRef(collectionRef, "collectionRef");
  return record({
    ...publication,
    kind: "brain-index-intent",
    phase: "brain_index",
    status: "PENDING_EXTERNAL",
    publicationReceiptRef: publication.publicationReceiptRef,
    collectionRef: collection,
  }) as BrainIndexIntent;
}

export function recordBrainIndex(
  intent: BrainIndexIntent,
  indexReceiptRef: string,
): BrainIndexReceipt {
  if (intent.status !== "PENDING_EXTERNAL" || intent.content !== null) {
    throw new Error("only a pending no-content index can be recorded");
  }
  const receipt = requiredRef(indexReceiptRef, "indexReceiptRef");
  return record({
    ...intent,
    kind: "brain-index-receipt",
    status: "indexed",
    indexReceiptRef: receipt,
  }) as BrainIndexReceipt;
}

/** Verify launch authority without changing the inactive manifest or provisioning anything. */
export function evaluateBlueprintLaunch(
  manifest: { profileId: string; activation: "active" | "inactive" },
  launchRecord?: Partial<BlueprintLaunchRecord>,
): BlueprintLaunchEvaluation {
  const reasons: string[] = [];
  if (manifest.activation !== "inactive") {
    reasons.push("blueprint must remain inactive until launch is separately approved");
  }
  if (!launchRecord) {
    reasons.push("separate launch record is required");
  } else {
    let platformIdentityRef: string | undefined;
    let grantsDigest: string | undefined;
    let launchApprovalRef: string | undefined;
    if (launchRecord.approved !== true) reasons.push("launch record approval is required");
    if (launchRecord.blueprintProfileId !== manifest.profileId) {
      reasons.push("launch record must name the exact blueprint profile");
    }
    try {
      platformIdentityRef = requiredRef(launchRecord.platformIdentityRef, "platformIdentityRef");
      if (!platformIdentityRef.startsWith("platform-identity:")) {
        reasons.push("platformIdentityRef must identify a Platform identity");
      }
    } catch (error) {
      reasons.push(error instanceof Error ? error.message : "invalid platform identity reference");
    }
    try {
      grantsDigest = sha256(launchRecord.grantsDigest, "grantsDigest");
    } catch (error) {
      reasons.push(error instanceof Error ? error.message : "invalid grants digest");
    }
    try {
      launchApprovalRef = requiredRef(launchRecord.launchApprovalRef, "launchApprovalRef");
    } catch (error) {
      reasons.push(error instanceof Error ? error.message : "invalid launch approval reference");
    }
    if (reasons.length === 0) {
      const validatedRefs = { platformIdentityRef, grantsDigest, launchApprovalRef };
      if (
        !validatedRefs.platformIdentityRef ||
        !validatedRefs.grantsDigest ||
        !validatedRefs.launchApprovalRef
      ) {
        reasons.push("launch record validation did not produce complete authority references");
      } else {
        return {
          status: "launch-authority-verified",
          profileId: manifest.profileId,
          activation: "inactive",
          platformIdentityRef: validatedRefs.platformIdentityRef,
          grantsDigest: validatedRefs.grantsDigest,
          actions: [],
        };
      }
    }
  }
  if (reasons.length > 0) {
    return { status: "blocked", profileId: manifest.profileId, reasons, actions: [] };
  }
  return { status: "blocked", profileId: manifest.profileId, reasons, actions: [] };
}
