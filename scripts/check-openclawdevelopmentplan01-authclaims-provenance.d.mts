export const AUTH_CLAIMS_CONTRACT: string;
export const AUTH_CLAIMS_SEMVER: string;
export const PLATFORM_CONTRACTS_PACKAGE: string;
export const PLATFORM_SOURCE_HEAD: string;
export const AUTH_CLAIMS_SCHEMA_SHA256: string;
export const AUTH_CLAIMS_CONTENT_HASH: string;
export const BRAIN_FIXTURE_AGGREGATE_SHA256: string;
export const SKILLS_FIXTURE_AGGREGATE_SHA256: string;
export const FIXTURE_OWNER_STATUS: string;
export const FIXTURE_OWNER_GATE: string;
export const COUNTERSIGN_INSPECTION_TIP: string;
export const BRAIN_OWNER_HANDOFF_COMMIT: string;
export const SKILLS_OWNER_HANDOFF_COMMIT: string;
export const REL: Readonly<Record<string, string>>;
export const PLATFORM_HEAD_RECORD_SPECS: ReadonlyArray<{
  id: string;
  rel: string;
  kind: "json_path" | "markdown_full_sha";
  jsonPath?: string[];
}>;
export const CURRENT_STATUS_DOC_RELS: readonly string[];
export function sha256Hex(value: string): string;
export function sha256File(filePath: string): string;
export function readJsonPath(value: unknown, jsonPath: string[]): unknown;
export function isHistoricalOrInstructionLine(line: string): boolean;
export function findStalePendingWhileClosedClaims(text: string): string[];
/** @deprecated Use findStalePendingWhileClosedClaims. */
export function findStaleClosedWhilePendingClaims(text: string): string[];
export function readPlatformHeadRecord(
  repoRoot: string,
  spec: (typeof PLATFORM_HEAD_RECORD_SPECS)[number],
): { ok: boolean; value?: string; error?: string };
export function validatePlatformSourceHeadAgreement(options?: { repoRoot?: string }): {
  ok: boolean;
  errors: string[];
  observed: Record<string, string>;
};
export function validateAuthClaimsProvenance(options?: { repoRoot?: string }): {
  ok: boolean;
  errors: string[];
  checks: string[];
};
