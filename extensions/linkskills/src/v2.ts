import { createHash } from "node:crypto";
import {
  SKILLS_COMMIT,
  SKILLS_CONTRACT_VERSION,
  SKILLS_MCP_PROTOCOL_VERSION,
  SKILLS_RELEASE_CONTRACT_VERSION,
  SKILLS_TREE,
} from "./exact-release.js";

export {
  SKILLS_COMMIT,
  SKILLS_TREE,
  SKILLS_MCP_PROTOCOL_VERSION,
  SKILLS_CONTRACT_VERSION,
  SKILLS_RELEASE_CONTRACT_VERSION,
};
export const SKILLS_V2_RESOURCE_OPERATIONS = Object.freeze([
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
] as const);
export const SKILLS_V2_TOOL_OPERATIONS = Object.freeze([
  "skills_release_verify",
  "skills_use_report_submit",
  "skills_use_report_status_get",
  "skills_feedback_submit",
  "skills_feedback_status_get",
  "skills_librarian_status_get",
] as const);
export const SKILLS_V2_OPERATIONS = Object.freeze([
  ...SKILLS_V2_RESOURCE_OPERATIONS,
  ...SKILLS_V2_TOOL_OPERATIONS,
] as const);
export type SkillsV2Operation = (typeof SKILLS_V2_OPERATIONS)[number];

export type SkillsV2Request = Readonly<{
  providerCandidate: { commit: typeof SKILLS_COMMIT; tree: typeof SKILLS_TREE };
  protocolVersion: typeof SKILLS_MCP_PROTOCOL_VERSION;
  contractVersion: typeof SKILLS_CONTRACT_VERSION;
  operation: SkillsV2Operation;
  actorId: string;
  idempotencyKey: string;
  skillId?: string;
  version?: string;
  query?: string;
  sectionId?: string;
  resourceId?: string;
  contentId?: string;
  feedbackRef?: string;
  reportRef?: string;
  cursor?: string;
  limit?: number;
}>;

const legacy = /^(skills_run_|skills_tool_)/;
const SNAPSHOT_CURSOR = /^snapshot:[0-9a-f]{16}:(?:0|[1-9][0-9]*)$/u;
const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);
const snapshotOwnDataRecord = (value: unknown): Record<string, unknown> | undefined => {
  if (!isRecord(value)) return undefined;
  try {
    const prototype = Object.getPrototypeOf(value);
    if (prototype !== Object.prototype && prototype !== null) return undefined;
    if (Object.getOwnPropertySymbols(value).length > 0) return undefined;
    const snapshot = Object.create(null) as Record<string, unknown>;
    for (const [key, descriptor] of Object.entries(Object.getOwnPropertyDescriptors(value))) {
      if (!("value" in descriptor)) return undefined;
      snapshot[key] = descriptor.value;
    }
    return snapshot;
  } catch {
    return undefined;
  }
};
const bounded = (value: unknown, max = 256): value is string =>
  typeof value === "string" &&
  value.length > 0 &&
  value.length <= max &&
  !/[\u0000-\u001f\u007f]/u.test(value);

export function skillsSnapshotCursor(catalogVersion: string): string {
  if (!bounded(catalogVersion, 512)) throw new Error("invalid Skills catalog version");
  return `snapshot:${createHash("sha256").update(catalogVersion).digest("hex").slice(0, 16)}:0`;
}

export function isModernSkillsOperation(value: unknown): value is SkillsV2Operation {
  return (
    typeof value === "string" &&
    !legacy.test(value) &&
    (SKILLS_V2_OPERATIONS as readonly string[]).includes(value)
  );
}

export function validateSkillsV2Request(input: unknown):
  | { ok: true; request: SkillsV2Request }
  | {
      ok: false;
      code:
        | "invalid_shape"
        | "wrong_provider"
        | "incompatible_protocol"
        | "legacy_execution_disabled"
        | "invalid_pagination";
    } {
  const value = snapshotOwnDataRecord(input);
  if (!value) return { ok: false, code: "invalid_shape" };
  const allowed = new Set([
    "providerCandidate",
    "protocolVersion",
    "contractVersion",
    "operation",
    "actorId",
    "idempotencyKey",
    "skillId",
    "version",
    "query",
    "sectionId",
    "resourceId",
    "contentId",
    "feedbackRef",
    "reportRef",
    "cursor",
    "limit",
  ]);
  if (Object.keys(value).some((key) => !allowed.has(key)))
    return { ok: false, code: "invalid_shape" };
  const candidate = snapshotOwnDataRecord(value.providerCandidate);
  if (!candidate || candidate.commit !== SKILLS_COMMIT || candidate.tree !== SKILLS_TREE)
    return { ok: false, code: "wrong_provider" };
  if (
    value.protocolVersion !== SKILLS_MCP_PROTOCOL_VERSION ||
    value.contractVersion !== SKILLS_CONTRACT_VERSION
  )
    return { ok: false, code: "incompatible_protocol" };
  if (typeof value.operation === "string" && legacy.test(value.operation))
    return { ok: false, code: "legacy_execution_disabled" };
  if (
    !isModernSkillsOperation(value.operation) ||
    !bounded(value.actorId) ||
    !bounded(value.idempotencyKey, 160)
  )
    return { ok: false, code: "invalid_shape" };
  const limit = value.limit;
  if (
    limit !== undefined &&
    (typeof limit !== "number" || !Number.isInteger(limit) || limit < 1 || limit > 100)
  )
    return { ok: false, code: "invalid_pagination" };
  if (
    value.cursor !== undefined &&
    (!bounded(value.cursor, 256) || !SNAPSHOT_CURSOR.test(value.cursor))
  )
    return { ok: false, code: "invalid_pagination" };
  if (value.skillId !== undefined && !bounded(value.skillId))
    return { ok: false, code: "invalid_shape" };
  if (value.version !== undefined && !bounded(value.version, 128))
    return { ok: false, code: "invalid_shape" };
  if (value.query !== undefined && !bounded(value.query, 512))
    return { ok: false, code: "invalid_shape" };
  for (const field of ["sectionId", "resourceId", "contentId", "feedbackRef", "reportRef"] as const)
    if (value[field] !== undefined && !bounded(value[field]))
      return { ok: false, code: "invalid_shape" };
  if (
    (value.operation === "skills_release_describe" ||
      value.operation === "skills_release_verify") &&
    (!bounded(value.skillId) || !bounded(value.version))
  )
    return { ok: false, code: "invalid_shape" };
  const requiresReleaseIdentity = new Set([
    "skills_release_sections_list",
    "skills_release_section_get",
    "skills_release_resources_list",
    "skills_release_resource_get",
    "skills_release_content_get",
    "skills_release_package_get",
    "skills_release_entrypoint_get",
    "skills_qualification_get",
  ]);
  if (value.operation === "skills_catalog_search" && !bounded(value.query, 512))
    return { ok: false, code: "invalid_shape" };
  if (
    requiresReleaseIdentity.has(value.operation) &&
    (!bounded(value.skillId) || !bounded(value.version))
  )
    return { ok: false, code: "invalid_shape" };
  if (value.operation === "skills_release_section_get" && !bounded(value.sectionId))
    return { ok: false, code: "invalid_shape" };
  if (value.operation === "skills_release_resource_get" && !bounded(value.resourceId))
    return { ok: false, code: "invalid_shape" };
  if (value.operation === "skills_release_content_get" && !bounded(value.contentId))
    return { ok: false, code: "invalid_shape" };
  if (
    (value.operation === "skills_feedback_submit" ||
      value.operation === "skills_feedback_status_get") &&
    !bounded(value.feedbackRef)
  )
    return { ok: false, code: "invalid_shape" };
  if (
    value.operation === "skills_feedback_submit" &&
    (!bounded(value.skillId) || !bounded(value.version))
  )
    return { ok: false, code: "invalid_shape" };
  if (
    (value.operation === "skills_use_report_submit" ||
      value.operation === "skills_use_report_status_get") &&
    !bounded(value.reportRef)
  )
    return { ok: false, code: "invalid_shape" };
  return {
    ok: true,
    request: Object.freeze({
      providerCandidate: Object.freeze({ commit: SKILLS_COMMIT, tree: SKILLS_TREE }),
      protocolVersion: SKILLS_MCP_PROTOCOL_VERSION,
      contractVersion: SKILLS_CONTRACT_VERSION,
      operation: value.operation,
      actorId: value.actorId,
      idempotencyKey: value.idempotencyKey,
      ...(value.skillId === undefined ? {} : { skillId: value.skillId }),
      ...(value.version === undefined ? {} : { version: value.version }),
      ...(value.query === undefined ? {} : { query: value.query }),
      ...(value.sectionId === undefined ? {} : { sectionId: value.sectionId }),
      ...(value.resourceId === undefined ? {} : { resourceId: value.resourceId }),
      ...(value.contentId === undefined ? {} : { contentId: value.contentId }),
      ...(value.feedbackRef === undefined ? {} : { feedbackRef: value.feedbackRef }),
      ...(value.reportRef === undefined ? {} : { reportRef: value.reportRef }),
      ...(value.cursor === undefined ? {} : { cursor: value.cursor }),
      ...(value.limit === undefined ? {} : { limit: value.limit }),
    }) as SkillsV2Request,
  };
}

/** Accepts qualification evidence only when it names the requested exact release. */
export function validateSkillsQualificationIdentity(value: unknown, expected: unknown): boolean {
  const evidence = snapshotOwnDataRecord(value);
  const expectation = snapshotOwnDataRecord(expected);
  return (
    evidence !== undefined &&
    expectation !== undefined &&
    bounded(evidence.skillId) &&
    bounded(evidence.version, 128) &&
    bounded(expectation.skillId) &&
    bounded(expectation.version, 128) &&
    evidence.skillId === expectation.skillId &&
    evidence.version === expectation.version
  );
}
