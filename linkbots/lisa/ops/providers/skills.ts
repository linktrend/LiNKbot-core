import { LISA_ALLOWED_OPERATIONS } from "./capabilities.js";
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
  readOwnString,
} from "./own-data.js";
import type { LisaProviderAuthorizationRequest } from "./policy.js";
import { authorizeLisaProviderOperation } from "./policy.js";
import type { LisaProviderPorts, LisaSkillsPortEvidence, LisaSkillsPortRequest } from "./ports.js";

const DISCOVERY_NO_ID = new Set([
  "skills_capabilities_get",
  "skills_catalog_list",
  "skills_catalog_search",
  "skills_librarian_status_get",
]);

const DISCOVERY_SKILL_ID = new Set(["skills_release_list", "skills_qualification_get"]);

const EXACT_RELEASE = new Set([
  "skills_release_describe",
  "skills_release_entrypoint_get",
  "skills_release_sections_list",
  "skills_release_section_get",
  "skills_release_resources_list",
  "skills_release_resource_get",
  "skills_release_content_get",
  "skills_release_package_get",
  "skills_release_verify",
]);

const JOB_EVIDENCE_SUBMIT = new Set(["skills_use_report_submit", "skills_feedback_submit"]);
const JOB_EVIDENCE_STATUS = new Set(["skills_use_report_status_get", "skills_feedback_status_get"]);

const LEGACY_CROSS_FIELDS = new Set(["runId", "toolName", "toolId"]);

export type LisaSkillsRequest = LisaProviderAuthorizationRequest & {
  readonly request?: unknown;
};

export type LisaSkillsAccepted = LisaPolicyAccepted & {
  readonly evidence: LisaSkillsPortEvidence;
};

export type LisaSkillsOutcome = LisaSkillsAccepted | Exclude<LisaPolicyOutcome, LisaPolicyAccepted>;

export function requestLisaSkills(
  input: LisaSkillsRequest,
  ports: LisaProviderPorts,
): LisaSkillsOutcome {
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
  if (authorized.operation.provider !== "skills") {
    return denied("unknown_provider");
  }
  const parsed = parseSkillsRequest(authorized.operation.name, input.request);
  if (parsed.status !== "ok") {
    return parsed;
  }
  const portResult = ports.skills.request(parsed.portRequest);
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

function parseSkillsRequest(
  operation: string,
  request: unknown,
):
  | { readonly status: "ok"; readonly portRequest: LisaSkillsPortRequest }
  | ReturnType<typeof denied>
  | ReturnType<typeof invalid> {
  if (!LISA_ALLOWED_OPERATIONS.skills.includes(operation as never)) {
    return denied("legacy_operation");
  }
  if (request === undefined) {
    if (DISCOVERY_NO_ID.has(operation)) {
      return { status: "ok", portRequest: { operation } };
    }
    return invalid("missing_skill_id");
  }
  if (isInheritedOrHostObject(request)) {
    return invalid("accessor_backed_or_inherited_request");
  }
  if (!isPlainOwnDataRecord(request)) {
    return invalid("malformed_request");
  }
  const keys = Object.keys(request);
  for (const key of keys) {
    if (!hasOwnDataField(request, key)) {
      return invalid("accessor_backed_or_inherited_request");
    }
    if (LEGACY_CROSS_FIELDS.has(key)) {
      return invalid("cross_operation_fields");
    }
  }
  const skillId = readOwnString(request, "skillId");
  const releaseId = readOwnString(request, "releaseId");
  const pinCommit = readOwnString(request, "pinCommit");
  const pinTree = readOwnString(request, "pinTree");
  const reportId = readOwnString(request, "reportId");
  const feedbackId = readOwnString(request, "feedbackId");
  const query = readOwnString(request, "query");
  if (DISCOVERY_NO_ID.has(operation)) {
    if (skillId || releaseId || reportId || feedbackId) {
      return invalid("cross_operation_fields");
    }
    if (operation === "skills_catalog_search" && query && !isSafeOpaqueRef(query)) {
      return denied("unsafe_credential_ref");
    }
    return { status: "ok", portRequest: { operation, ...(query ? { query } : {}) } };
  }
  if (!skillId || !isSafeOpaqueRef(skillId)) {
    return skillId ? denied("unsafe_credential_ref") : invalid("missing_skill_id");
  }
  if (DISCOVERY_SKILL_ID.has(operation)) {
    if (releaseId || reportId || feedbackId) {
      return invalid("cross_operation_fields");
    }
    return { status: "ok", portRequest: { operation, skillId } };
  }
  if (EXACT_RELEASE.has(operation)) {
    if (!releaseId || !isSafeOpaqueRef(releaseId)) {
      return releaseId ? denied("unsafe_credential_ref") : invalid("missing_release_id");
    }
    if (reportId || feedbackId) {
      return invalid("cross_operation_fields");
    }
    return {
      status: "ok",
      portRequest: {
        operation,
        skillId,
        releaseId,
        ...(pinCommit ? { pinCommit } : {}),
        ...(pinTree ? { pinTree } : {}),
      },
    };
  }
  if (JOB_EVIDENCE_SUBMIT.has(operation)) {
    if (reportId || feedbackId) {
      return invalid("cross_operation_fields");
    }
    return {
      status: "ok",
      portRequest: {
        operation,
        skillId,
        ...(releaseId ? { releaseId } : {}),
        ...(pinCommit ? { pinCommit } : {}),
        ...(pinTree ? { pinTree } : {}),
      },
    };
  }
  if (JOB_EVIDENCE_STATUS.has(operation)) {
    const statusId = operation === "skills_use_report_status_get" ? reportId : feedbackId;
    if (!statusId || !isSafeOpaqueRef(statusId)) {
      return statusId ? denied("unsafe_credential_ref") : invalid("missing_status_id");
    }
    if (releaseId) {
      return invalid("cross_operation_fields");
    }
    return {
      status: "ok",
      portRequest: {
        operation,
        skillId,
        ...(operation === "skills_use_report_status_get"
          ? { reportId: statusId }
          : { feedbackId: statusId }),
      },
    };
  }
  return denied("unknown_operation");
}
