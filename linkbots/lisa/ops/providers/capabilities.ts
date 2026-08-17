import {
  denied,
  invalid,
  LISA_PROVIDER_NAMES,
  type LisaAdmittedOperation,
  type LisaPolicyDenied,
  type LisaPolicyInvalid,
  type LisaProviderName,
} from "./outcomes.js";
import {
  hasOwnDataField,
  isInheritedOrHostObject,
  isPlainOwnDataRecord,
  readOwnString,
} from "./own-data.js";

export const LISA_ALLOWED_OPERATIONS = Object.freeze({
  platform: Object.freeze(["platform.consume_facts"]),
  brain: Object.freeze([
    "v2.discovery",
    "v2.capability.status",
    "v2.knowledge.browse",
    "v2.knowledge.search",
    "v2.knowledge.load",
    "v2.inbox.read",
    "v2.handoff.create",
    "v2.handoff.accept",
    "v2.conflict.report",
    "v2.finding.submit",
    "v2.checkpoint.write",
  ]),
  skills: Object.freeze([
    "skills_capabilities_get",
    "skills_catalog_list",
    "skills_catalog_search",
    "skills_release_list",
    "skills_release_describe",
    "skills_qualification_get",
    "skills_release_entrypoint_get",
    "skills_release_sections_list",
    "skills_release_section_get",
    "skills_release_resources_list",
    "skills_release_resource_get",
    "skills_release_content_get",
    "skills_release_package_get",
    "skills_release_verify",
    "skills_use_report_submit",
    "skills_use_report_status_get",
    "skills_feedback_submit",
    "skills_feedback_status_get",
    "skills_librarian_status_get",
  ]),
  autowork: Object.freeze([
    "status_collection",
    "precheck",
    "evidence_collection",
    "notification_delivery",
    "artifact_transform",
  ]),
  libraries: Object.freeze(["libraries.catalogue.discover", "libraries.exact_release.retrieve"]),
} as const satisfies Record<LisaProviderName, readonly string[]>);

export const LISA_DENIED_OPERATIONS = Object.freeze({
  platform: Object.freeze(["platform.issue_credential", "platform.mint", "platform.copy_secret"]),
  brain: Object.freeze(["brain_capture_batch", "brain_checkpoint_write", "brain_task_update"]),
  skills: Object.freeze([
    "skills_run_start",
    "skills_run_status",
    "skills_tool_invoke",
    "skills_list",
    "skills_search",
    "skills_describe",
    "skills_fragment_get",
    "skills_release_get",
  ]),
  autowork: Object.freeze(["external_assistance", "media_package", "outreach_adapter"]),
  libraries: Object.freeze(["libraries.catalogue.contribute", "libraries.contribution.intake"]),
} as const satisfies Record<LisaProviderName, readonly string[]>);

const ALLOWED_INDEX: ReadonlyMap<LisaProviderName, ReadonlySet<string>> = new Map(
  LISA_PROVIDER_NAMES.map((provider) => [
    provider,
    new Set<string>(LISA_ALLOWED_OPERATIONS[provider]),
  ]),
);

const FORBIDDEN_REASON_BY_PROVIDER = {
  platform: "forbidden_operation",
  brain: "legacy_operation",
  skills: "legacy_operation",
  autowork: "forbidden_operation",
  libraries: "forbidden_operation",
} as const satisfies Record<LisaProviderName, string>;

export type LisaCapabilityResult =
  | { readonly status: "ok"; readonly operation: LisaAdmittedOperation }
  | LisaPolicyDenied
  | LisaPolicyInvalid;

export function admitLisaOperation(operation: unknown): LisaCapabilityResult {
  if (isInheritedOrHostObject(operation)) {
    return invalid("accessor_backed_or_inherited_operation");
  }
  if (!isPlainOwnDataRecord(operation)) {
    return invalid("malformed_operation");
  }
  if (!hasOwnDataField(operation, "provider") || !hasOwnDataField(operation, "name")) {
    return invalid("accessor_backed_or_inherited_operation");
  }
  const providerRaw = readOwnString(operation, "provider");
  const name = readOwnString(operation, "name");
  if (!providerRaw || !name) {
    return invalid("malformed_operation");
  }
  const allowed = ALLOWED_INDEX.get(providerRaw as LisaProviderName);
  if (!allowed) {
    return denied("unknown_provider");
  }
  // Extra own keys are ignored so they cannot widen the allowlist.
  if (!allowed.has(name)) {
    return denied(denyReasonFor(providerRaw as LisaProviderName, name));
  }
  return {
    status: "ok",
    operation: Object.freeze({ provider: providerRaw as LisaProviderName, name }),
  };
}

export function isSharedBrainKnowledgeOperation(name: string): boolean {
  return (
    name === "v2.knowledge.browse" || name === "v2.knowledge.search" || name === "v2.knowledge.load"
  );
}

function denyReasonFor(provider: LisaProviderName, name: string): string {
  if (
    provider === "skills" &&
    (name.startsWith("skills_run_") || name.startsWith("skills_tool_"))
  ) {
    return "legacy_operation";
  }
  if (provider === "brain" && name.startsWith("brain_")) {
    return "legacy_operation";
  }
  const deniedNames = LISA_DENIED_OPERATIONS[provider] as readonly string[];
  if (deniedNames.includes(name)) {
    return FORBIDDEN_REASON_BY_PROVIDER[provider];
  }
  return "unknown_operation";
}
