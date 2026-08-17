export {
  FROZEN_CANDIDATE_SHA,
  FROZEN_TREE_SHA,
  candidateDependencyClosureDigest,
  validateExactRelease,
  type Candidate,
  type CandidateDependency,
  type ExactReleaseResult,
  type AuthenticatedLibraryAssetEvidence,
  type InventoryDigest,
  type ReleaseEvidence,
} from "./src/exact-release.js";
export {
  LIBRARIES_COMMIT,
  LIBRARIES_TREE,
  LIBRARIES_SCHEMA_VERSION,
  LIBRARIES_SCHEMA_REVISION,
  LIBRARIES_SCHEMA_VERSION_LABEL,
  LIBRARIES_CONTRACT_VERSION,
  LIBRARIES_CATALOGUE_SHA256,
  canonicalDigest,
  pageCatalogue,
  validateRevision2Record,
  validateExactRevision2,
} from "./src/revision2.js";
export type {
  Revision2Record,
  Revision2Page,
  Revision2Validation,
  ExactRevision2Bundle,
  AuthenticatedRevision2CatalogueEvidence,
  VerifiedConsumerMaterializationEvidence,
} from "./src/revision2.js";
