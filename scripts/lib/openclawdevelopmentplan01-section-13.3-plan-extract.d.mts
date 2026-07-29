#!/usr/bin/env node
/**
 * Deterministic §13.3 item extraction from the frozen OpenClaw implementation plan.
 * Fail-closed complete Markdown coverage with exact-line descriptive exclusions only.
 */
export const FROZEN_PLAN_RELATIVE_PATH: string;
export const FROZEN_PLAN_SHA256: string;
export const PLAN_ITEM_KINDS: readonly string[];
export const NON_REQUIREMENT_REASON_CODES: readonly string[];
export const HARD_REQUIREMENT_CONTEXT_CODES: readonly string[];
export const STRUCTURAL_NON_REQUIREMENT_CODES: readonly string[];
export const DESCRIPTIVE_EXCLUSIONS: ReadonlyArray<{
  id: string;
  line: number;
  type: string;
  text: string;
  reason: string;
  fingerprint: string;
}>;
export const DESCRIPTIVE_ALLOWLIST_RULES: Readonly<Record<string, never>>;
export const STRONG_DESCRIPTIVE_OVERRIDE_CODES: readonly string[];
export function classifySectionPolicy(headingText: string): {
  policy: "implementation";
  rule: null;
  id: null;
};
export function isDescriptiveAllowlistRule(rule: string | null | undefined): boolean;
export function coverageFingerprintFor(line: number, type: string, text: string): string;
export function buildDescriptiveExclusion(spec: {
  id: string;
  line: number;
  type: string;
  text: string;
  reason: string;
}): {
  id: string;
  line: number;
  type: string;
  text: string;
  reason: string;
  fingerprint: string;
};
export function matchDescriptiveExclusion(
  line: number,
  type: string,
  text: string,
  exclusions: ReadonlyMap<string, unknown> | Iterable<unknown>,
): unknown;
export function isStrongDescriptiveOverride(contextCode: string | null | undefined): boolean;
export function lineHasStrongObligation(text: string): boolean;
export function lineHasBindingObligation(text: string): boolean;
export function nonRequirementFailsBindingAudit(
  entry: { reasonCode?: string; text?: string; type?: string },
  sourceText?: string,
): boolean;
export function normalizePlanText(value: string): string;
export function planItemFingerprint(anchor: string, label: string): string;
export function sha256Hex(content: string | Buffer): string;
export function splitPlanList(value: string, separators?: ReadonlySet<string>): string[];
export function splitAtomicObligations(value: string): string[];
export function isFragmentedPlanLabel(label: string): boolean;
export function isBindingSourceAuthorityRow(text: string): boolean;
export function isSection133ClassificationEnumLabel(text: string): boolean;
export const STRUCTURAL_ENUM_DEFINITIONS: ReadonlyArray<{
  id: string;
  line: number;
  type: string;
  text: string;
  reason: string;
  fingerprint: string;
}>;
export function matchStructuralEnumDefinition(
  line: number,
  type: string,
  text: string,
  enums: ReadonlyMap<string, unknown> | Iterable<unknown>,
): unknown;
export function isRequirementBearingParagraph(line: string): boolean;
export function isImperativeInstruction(line: string): boolean;
export function detectRequirementInheritanceOpener(
  line: string,
): { code: string; kind: string } | null;
export function detectStructuralRequirementSection(
  headingText: string,
): { code: string; listMode?: string; tableMode?: string } | null;
export function isHardRequirementContext(contextCode: string | null | undefined): boolean;
export function tokenizePlanMarkdown(planText: string): Array<Record<string, unknown>>;
export function analyzePlanForSection133(
  planText: string,
  options?: { descriptiveExclusions?: ReadonlyArray<unknown> },
): {
  items: Array<{
    id: string;
    kind: string;
    label: string;
    anchor: string;
    line: number;
    fingerprint: string;
  }>;
  coverage: Array<Record<string, unknown>>;
  errors: string[];
  constructs: Array<Record<string, unknown>>;
};
export function extractPlanSection133Items(planText: string): Array<{
  id: string;
  kind: string;
  label: string;
  anchor: string;
  line: number;
  fingerprint: string;
}>;
export function loadFrozenPlanItems(opts?: {
  root?: string;
  planPath?: string;
  expectedSha256?: string;
  planText?: string;
}): {
  ok: boolean;
  errors: string[];
  planPath: string;
  planSha256: string;
  expectedSha256: string;
  items: Array<{
    id: string;
    kind: string;
    label: string;
    anchor: string;
    line: number;
    fingerprint: string;
  }>;
  coverage: Array<Record<string, unknown>>;
};
export function buildInventoryFromPlanItems(
  items: unknown[],
  planSha256: string,
  coverage?: unknown[],
  evidenceMaps?: Map<string, {
    owner: string;
    evidence_location: string;
    completion_claim: string;
    note: string;
  }> | null,
): Record<string, unknown>;
