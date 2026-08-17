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
  readOwnBoolean,
  readOwnDataValue,
  readOwnString,
} from "./own-data.js";
import type { LisaProviderAuthorizationRequest } from "./policy.js";
import { authorizeLisaProviderOperation } from "./policy.js";
import {
  LISA_ALLOWED_LIBRARY_ARTIFACT_TYPES,
  type LisaLibrariesPortEvidence,
  type LisaLibraryArtifactType,
  type LisaProviderPorts,
} from "./ports.js";

export type LisaLibrariesRequest = LisaProviderAuthorizationRequest & {
  readonly request?: unknown;
};

export type LisaLibrariesAccepted = LisaPolicyAccepted & {
  readonly evidence: LisaLibrariesPortEvidence;
};

export type LisaLibrariesOutcome =
  | LisaLibrariesAccepted
  | Exclude<LisaPolicyOutcome, LisaPolicyAccepted>;

export function requestLisaLibraries(
  input: LisaLibrariesRequest,
  ports: LisaProviderPorts,
): LisaLibrariesOutcome {
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
  if (authorized.operation.provider !== "libraries") {
    return denied("unknown_provider");
  }
  const parsed = parseLibrariesRequest(authorized.operation.name, input.request);
  if (parsed.status !== "ok") {
    return parsed;
  }
  const portResult = ports.libraries.request({
    operation: authorized.operation.name,
    ...(parsed.recordId ? { recordId: parsed.recordId } : {}),
    ...(parsed.catalogueHash ? { catalogueHash: parsed.catalogueHash } : {}),
    ...(parsed.pinCommit ? { pinCommit: parsed.pinCommit } : {}),
    ...(parsed.pinTree ? { pinTree: parsed.pinTree } : {}),
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
  return {
    ...accepted({
      handle: authorized.handle,
      operation: authorized.operation,
      privacyClass: authorized.privacyClass,
    }),
    evidence: portResult.evidence,
  };
}

function parseLibrariesRequest(
  operation: string,
  request: unknown,
):
  | {
      readonly status: "ok";
      readonly recordId?: string;
      readonly catalogueHash?: string;
      readonly pinCommit?: string;
      readonly pinTree?: string;
    }
  | ReturnType<typeof denied>
  | ReturnType<typeof invalid> {
  if ((LISA_DENIED_OPERATIONS.libraries as readonly string[]).includes(operation)) {
    return denied("forbidden_operation");
  }
  if (request === undefined) {
    return operation === "libraries.catalogue.discover"
      ? { status: "ok" }
      : invalid("malformed_request");
  }
  if (isInheritedOrHostObject(request)) {
    return invalid("accessor_backed_or_inherited_request");
  }
  if (!isPlainOwnDataRecord(request)) {
    return invalid("malformed_request");
  }
  for (const key of Object.keys(request)) {
    if (!hasOwnDataField(request, key)) {
      return invalid("accessor_backed_or_inherited_request");
    }
  }
  if (hasOwnDataField(request, "resolved") && readOwnBoolean(request, "resolved") === undefined) {
    return invalid("non_boolean_resolved");
  }
  const record = readRecord(request);
  if (record.status !== "ok") {
    return record;
  }
  const recordId = readOwnString(request, "recordId") ?? record.recordId;
  const catalogueHash = readOwnString(request, "catalogueHash");
  const pinCommit = readOwnString(request, "pinCommit");
  const pinTree = readOwnString(request, "pinTree");
  if (operation === "libraries.catalogue.discover") {
    return {
      status: "ok",
      ...(recordId ? { recordId } : {}),
      ...(catalogueHash ? { catalogueHash } : {}),
    };
  }
  if (!recordId || !isSafeOpaqueRef(recordId)) {
    return recordId ? denied("unsafe_credential_ref") : invalid("malformed_request");
  }
  return {
    status: "ok",
    recordId,
    ...(catalogueHash ? { catalogueHash } : {}),
    ...(pinCommit ? { pinCommit } : {}),
    ...(pinTree ? { pinTree } : {}),
  };
}

function readRecord(
  request: Record<string, unknown>,
):
  | { readonly status: "ok"; readonly recordId?: string }
  | ReturnType<typeof denied>
  | ReturnType<typeof invalid> {
  if (!hasOwnDataField(request, "record")) {
    return { status: "ok" };
  }
  const raw = readOwnDataValue(request, "record");
  if (isInheritedOrHostObject(raw)) {
    return invalid("inherited_catalogue_fields");
  }
  if (!isPlainOwnDataRecord(raw)) {
    return invalid("malformed_request");
  }
  for (const key of Object.keys(raw)) {
    if (!hasOwnDataField(raw, key)) {
      return invalid("inherited_catalogue_fields");
    }
  }
  if (hasOwnDataField(raw, "resolved") && readOwnBoolean(raw, "resolved") === undefined) {
    return invalid("non_boolean_resolved");
  }
  const admitted = readOwnBoolean(raw, "admitted");
  const selectable = readOwnBoolean(raw, "selectable");
  const withdrawn = readOwnBoolean(raw, "withdrawn");
  const artifactType = readOwnString(raw, "artifactType");
  const recordId = readOwnString(raw, "id");
  if (withdrawn === true || selectable === false || admitted === false) {
    return denied("non_selectable_or_withdrawn_record");
  }
  if (
    artifactType &&
    !(LISA_ALLOWED_LIBRARY_ARTIFACT_TYPES as readonly string[]).includes(artifactType)
  ) {
    return denied("non_selectable_or_withdrawn_record");
  }
  if (artifactType && admitted !== true && selectable !== true) {
    return denied("non_selectable_or_withdrawn_record");
  }
  if (recordId && !isSafeOpaqueRef(recordId)) {
    return denied("unsafe_credential_ref");
  }
  void (artifactType as LisaLibraryArtifactType | undefined);
  return { status: "ok", ...(recordId ? { recordId } : {}) };
}
