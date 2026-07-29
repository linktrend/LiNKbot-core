#!/usr/bin/env node
/**
 * Deterministic §13.3 extraction from the frozen OpenClaw implementation plan.
 *
 * Fail-closed: every heading, list item, table row, bold contract label, and
 * requirement-bearing paragraph must be accounted for as either an atomic
 * ledger requirement or an explicitly justified non-requirement.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

/** Pinned frozen plan path (repo-relative). */
export const FROZEN_PLAN_RELATIVE_PATH =
  "docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md";

/** Exact SHA-256 of the frozen plan bytes. */
export const FROZEN_PLAN_SHA256 =
  "17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7";

/** Atomic kinds extracted from the plan. */
export const PLAN_ITEM_KINDS = Object.freeze([
  "task",
  "test",
  "deliverable",
  "exit_gate",
  "rollback",
  "cross_plan_gate",
  "gate",
  "risk",
  "evidence_requirement",
  "dod",
  "assumption",
]);

/** Bold labels that open list/sequence modes or carry inline obligations. */
const BOLD_CONTRACT_LABELS = new Set([
  "Work",
  "Tests",
  "Deliverables",
  "Exit gate",
  "Rollback",
  "Rollback order",
  "Evidence minimums",
  "Required failure/recovery scenarios",
  "Platform-owned evidence",
  "Sequence",
  "Inputs",
  "Prerequisites",
  "Hard prerequisite",
  "Window rule",
  "Objective",
  "OpenClaw owner",
  "External owners",
  "Primary files",
  "Owner",
  "OpenClaw work",
]);

/**
 * @param {string} value
 */
export function normalizePlanText(value) {
  return String(value)
    .normalize("NFKC")
    .replace(/[`*_]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/**
 * @param {string} anchor
 * @param {string} label
 */
export function planItemFingerprint(anchor, label) {
  return crypto
    .createHash("sha256")
    .update(`${anchor}\n${normalizePlanText(label)}`)
    .digest("hex");
}

/**
 * @param {string | Buffer} content
 */
export function sha256Hex(content) {
  return crypto.createHash("sha256").update(content).digest("hex");
}

/**
 * Split a list without breaking parentheses.
 * @param {string} value
 * @param {ReadonlySet<string>} separators
 */
export function splitPlanList(value, separators = new Set([",", ";"])) {
  const out = [];
  let current = "";
  let depth = 0;
  for (const ch of value) {
    if (ch === "(") {
      depth += 1;
    } else if (ch === ")") {
      depth = Math.max(0, depth - 1);
    }
    if (separators.has(ch) && depth === 0) {
      const trimmed = current.trim().replace(/[.;]$/, "").trim();
      if (trimmed) {
        out.push(trimmed);
      }
      current = "";
      continue;
    }
    current += ch;
  }
  const trimmed = current.trim().replace(/[.;]$/, "").trim();
  if (trimmed) {
    out.push(trimmed);
  }
  return out;
}

/**
 * Split inline sequence/task prose on `;` (preferred), clear comma lists, or
 * multi-sentence obligation clauses. Semicolon sequences keep internal commas.
 * @param {string} value
 */
export function splitAtomicObligations(value) {
  const text = String(value).replace(/\s+/g, " ").trim();
  if (!text) {
    return [];
  }
  // Prefer semicolon splits for sequences ("deploy X; enable Y; monitor Z").
  if (text.includes(";")) {
    return splitPlanList(text, new Set([";"]));
  }
  // Comma lists that are clearly enumerated obligations.
  if ((text.match(/,/g) || []).length >= 2 && !/\band\b/.test(text.split(",")[0] ?? "")) {
    return splitPlanList(text, new Set([","]));
  }
  // Multi-sentence obligation prose ("Gates are complete. Lisa may not substitute.").
  const sentences = text
    .split(/(?<=[a-z0-9)"'])\.\s+(?=[A-Z])/)
    .map((part) => part.replace(/[.;]$/, "").trim())
    .filter(Boolean);
  if (sentences.length > 1) {
    return sentences;
  }
  return [text.replace(/[.;]$/, "")];
}

/**
 * @param {string} label
 * @param {string} kind
 * @param {string} anchor
 * @param {number} line
 */
function makeItem(label, kind, anchor, line) {
  const clean = String(label).replace(/\s+/g, " ").trim().replace(/[.;]$/, "");
  return {
    id: anchor,
    kind,
    label: clean,
    anchor,
    line,
    fingerprint: planItemFingerprint(anchor, clean),
  };
}

/**
 * Machine-checkable non_requirement reason codes.
 * Every non_requirement coverage row must use one of these.
 */
export const NON_REQUIREMENT_REASON_CODES = Object.freeze([
  "STRUCTURAL_BLANK",
  "STRUCTURAL_FENCE",
  "STRUCTURAL_TABLE_SEPARATOR",
  "STRUCTURAL_HEADING",
  "STRUCTURAL_TABLE_HEADER",
  "STRUCTURAL_EMPTY_TABLE_ROW",
  "INTRO_OPENS_FOLLOWING_LIST",
  "LABEL_OPENS_FOLLOWING_LIST",
  "METADATA_BOLD_LABEL",
  "DESCRIPTIVE_EXCLUSION",
  "FRONTMATTER_OR_META",
  // Legacy codes retained only so validator can reject them on contentful constructs.
  "DESCRIPTIVE_ALLOWLIST",
  "NARRATIVE_CONTEXT",
]);

/**
 * Explicit reviewed exact-line descriptive exclusions.
 * No section-level blanket allowlisting. Match is fingerprint-exact;
 * any binding obligation language always overrides an exclusion.
 * @typedef {{
 *   id: string,
 *   line: number,
 *   type: string,
 *   text: string,
 *   reason: string,
 *   fingerprint: string,
 * }} DescriptiveExclusion
 */
export const DESCRIPTIVE_EXCLUSIONS = Object.freeze(/** @type {DescriptiveExclusion[]} */ ([]));

/** @deprecated section-level rules removed; retained empty for migration detection. */
export const DESCRIPTIVE_ALLOWLIST_RULES = Object.freeze({});

/**
 * Inherited / structural contexts that forbid non_requirement for obligation-bearing constructs.
 */
export const HARD_REQUIREMENT_CONTEXT_CODES = Object.freeze([
  "HARD_BOUNDARY",
  "REQUIRED",
  "MUST",
  "PROHIBITION",
  "GOVERNANCE",
  "GATE",
  "RISK",
  "DECISION",
  "ASSUMPTION",
  "DOD",
  "ROLLBACK",
  "NEXT_ACTION",
  "APPROVED_TARGET",
  "RULES",
  "PRIVACY_FLOW",
  "PLUGIN_MCP",
  "CONTRACT_FIXTURE",
  "ACTOR_MAPPING",
  "LIFECYCLE",
  "CONFIG",
  "OBSERVABILITY",
  "SECURITY",
  "OUTBOX",
]);

/**
 * Structural / machine non_requirement codes that are not descriptive exclusions.
 */
export const STRUCTURAL_NON_REQUIREMENT_CODES = Object.freeze([
  "STRUCTURAL_BLANK",
  "STRUCTURAL_FENCE",
  "STRUCTURAL_TABLE_SEPARATOR",
  "STRUCTURAL_HEADING",
  "STRUCTURAL_TABLE_HEADER",
  "STRUCTURAL_EMPTY_TABLE_ROW",
  "INTRO_OPENS_FOLLOWING_LIST",
  "LABEL_OPENS_FOLLOWING_LIST",
  "METADATA_BOLD_LABEL",
  "FRONTMATTER_OR_META",
]);

/**
 * Section policy is always implementation-bearing.
 * Descriptive exceptions are exact-line exclusions only — never whole sections.
 * @param {string} _headingText
 * @returns {{ policy: "implementation", rule: null, id: null }}
 */
export function classifySectionPolicy(_headingText) {
  return { policy: "implementation", rule: null, id: null };
}

/**
 * @param {string | null | undefined} rule
 */
export function isDescriptiveAllowlistRule(rule) {
  return false;
}

/**
 * Coverage fingerprint used for exact-line descriptive exclusions.
 * @param {number} line
 * @param {string} type
 * @param {string} text
 */
export function coverageFingerprintFor(line, type, text) {
  return planItemFingerprint(`coverage.L${line}.${type}`, `${type}:${text}`);
}

/**
 * Build a reviewed exclusion entry for the frozen plan (or tests).
 * @param {{ id: string, line: number, type: string, text: string, reason: string }} spec
 * @returns {DescriptiveExclusion}
 */
export function buildDescriptiveExclusion(spec) {
  return {
    id: spec.id,
    line: spec.line,
    type: spec.type,
    text: spec.text,
    reason: spec.reason,
    fingerprint: coverageFingerprintFor(spec.line, spec.type, spec.text),
  };
}

/**
 * @param {number} line
 * @param {string} type
 * @param {string} text
 * @param {ReadonlyMap<string, DescriptiveExclusion> | Iterable<DescriptiveExclusion>} exclusions
 * @returns {DescriptiveExclusion | null}
 */
export function matchDescriptiveExclusion(line, type, text, exclusions) {
  const map =
    exclusions instanceof Map
      ? exclusions
      : new Map([...exclusions].map((entry) => [entry.fingerprint, entry]));
  const fingerprint = coverageFingerprintFor(line, type, text);
  const hit = map.get(fingerprint);
  if (!hit) {
    return null;
  }
  if (hit.line !== line || hit.type !== type) {
    return null;
  }
  if (normalizePlanText(hit.text) !== normalizePlanText(text)) {
    return null;
  }
  // Binding obligation always overrides an exclusion.
  if (lineHasBindingObligation(text)) {
    return null;
  }
  return hit;
}
/**
 * @param {string} line
 */
function parseBoldLabel(line) {
  const match = line.match(/^\*\*([^*]+):\*\*\s*(.*)$/);
  if (!match) {
    return null;
  }
  return { label: match[1].trim(), rest: match[2].trim() };
}

/**
 * @param {string} line
 */
export function isRequirementBearingParagraph(line) {
  return lineHasBindingObligation(line) || /^\*\*[^*]+\.\*\*/.test(line);
}

/**
 * Case-insensitive binding obligation / gate / sequencing / security language.
 * Always overrides any descriptive exclusion.
 * @param {string} text
 */
export function lineHasBindingObligation(text) {
  const lower = String(text).toLowerCase().replace(/\s+/g, " ").trim();
  if (!lower) {
    return false;
  }
  if (
    /\bmust not\b/.test(lower) ||
    /\bmust\b/.test(lower) ||
    /\bshall not\b/.test(lower) ||
    /\bshall\b/.test(lower) ||
    /\bmay not\b/.test(lower) ||
    /\brequires\b/.test(lower) ||
    /\brequired\b/.test(lower) ||
    /\brequire\b/.test(lower) ||
    /\bnot complete until\b/.test(lower) ||
    /\bis a gate\b/.test(lower) ||
    /\bremains a gate\b/.test(lower) ||
    /\bnot reusable\b/.test(lower) ||
    /\bblocked until\b/.test(lower) ||
    /\bonly after\b/.test(lower) ||
    /\bonly before\b/.test(lower) ||
    /\bapproval required\b/.test(lower) ||
    /\bprincipal approval\b/.test(lower) ||
    /\bprohibited\b/.test(lower) ||
    /\bforbidden\b/.test(lower) ||
    /\bdo not\b/.test(lower) ||
    /\bnever\b/.test(lower) ||
    /\bcannot\b/.test(lower)
  ) {
    return true;
  }
  // Sequencing / retention / canary / credential / rollback / evidence constraints.
  if (
    /\b(sequenc\w*|retention|canary|credential\w*|rollback|evidence)\b/.test(lower) &&
    /\b(must|may not|require|gate|until|before|after|not |prohibit|block|approv|constraint|measure|complete|live stage|production)\b/.test(
      lower,
    )
  ) {
    return true;
  }
  if (
    /\b(before skills|after skills|before brain|brain may reach|skills may not begin|live stage proof|consumer canary)\b/.test(
      lower,
    )
  ) {
    return true;
  }
  if (/\buntil\b/.test(lower) && /\b(gate|readiness|approval|cursor|codex|canary)\b/.test(lower)) {
    return true;
  }
  if (/\bis complete only when\b|\breturns work\b|\bdoes not silently\b|\bmissing handoff field\b/.test(lower)) {
    return true;
  }
  return false;
}

/**
 * Imperative / binding instructions that omit classic modal verbs.
 * @param {string} line
 */
export function isImperativeInstruction(line) {
  const text = String(line).replace(/\s+/g, " ").trim();
  if (!text) {
    return false;
  }
  if (lineHasBindingObligation(text) || isRequirementBearingParagraph(text)) {
    return true;
  }
  const lower = text.toLowerCase();
  if (
    /\b(depend only on|remain default-disabled|record the exact|do not combine|do not copy|do not silently|do not authorize)\b/.test(
      lower,
    )
  ) {
    return true;
  }
  return /^(depend only|remain |record the|do not |stop |ask |resume |keep |use |treat |create |assign |freeze |request |begin |prove |enable |disable |return |separate |never |must |may not|cannot |include |exclude |send |give |inspect |introduce |advance |import |publish |change |combine |replace |making |assign |start )\b/i.test(
    text,
  );
}

/**
 * Detect paragraphs that open an inherited requirement list for following children.
 * @param {string} line
 * @returns {{ code: string, kind: string } | null}
 */
export function detectRequirementInheritanceOpener(line) {
  const lower = String(line).toLowerCase().replace(/\s+/g, " ").trim();
  if (!lower) {
    return null;
  }
  if (/approved target/.test(lower)) {
    return { code: "APPROVED_TARGET", kind: "task" };
  }
  if (/does not authorize|non-goals and hard boundaries|hard boundaries/.test(lower)) {
    return { code: "HARD_BOUNDARY", kind: "gate" };
  }
  if (/immediate next action|next action after approval|^after the principal approves/.test(lower)) {
    return { code: "NEXT_ACTION", kind: "task" };
  }
  if (/conflict rule|following rules\b|\brules:\s*$/.test(lower)) {
    return { code: "RULES", kind: "task" };
  }
  if (/each plugin must|plugins? must\b/.test(lower)) {
    return { code: "MUST", kind: "task" };
  }
  if (/\bmust not\b|\bmay not\b|\bdo not\b|\bnever\b|\bprohibit/.test(lower)) {
    return { code: "PROHIBITION", kind: "gate" };
  }
  if (/\bmust\b/.test(lower)) {
    return { code: "MUST", kind: "task" };
  }
  if (/\brequires\b|\brequired\b/.test(lower)) {
    return { code: "REQUIRED", kind: "task" };
  }
  if (/allowed flow|must not receive|cross-domain prohibition/.test(lower)) {
    return { code: "PRIVACY_FLOW", kind: "gate" };
  }
  if (/approved-plan deviation|deviation control|execution governance/.test(lower)) {
    return { code: "GOVERNANCE", kind: "gate" };
  }
  if (/if a generic tool hook is needed|each plugin (exposes|should define|must)\b/.test(lower)) {
    return { code: "REQUIRED", kind: "task" };
  }
  if (
    /change application|plugin configuration shape|honest degraded states|security and secret/.test(
      lower,
    )
  ) {
    return { code: "REQUIRED", kind: "task" };
  }
  return null;
}

/**
 * Structural section modes that default children to requirements.
 * @param {string} headingText markdown heading line including # marks
 * @returns {{ code: string, listMode?: string, tableMode?: string } | null}
 */
export function detectStructuralRequirementSection(headingText) {
  const text = String(headingText);
  if (/^## 1\b/.test(text)) {
    return { code: "APPROVED_TARGET" };
  }
  if (/^## 4\b/.test(text)) {
    return { code: "HARD_BOUNDARY" };
  }
  if (/^## 6\b/.test(text) || /^### 6\./.test(text)) {
    return { code: "ACTOR_MAPPING" };
  }
  if (/^## 7\b/.test(text) || /^### 7\./.test(text)) {
    return { code: "PLUGIN_MCP" };
  }
  if (/^## 8\b/.test(text) || /^### 8\./.test(text)) {
    return { code: "PRIVACY_FLOW" };
  }
  if (/^## 9\b/.test(text) || /^### 9\./.test(text)) {
    return { code: "CONTRACT_FIXTURE" };
  }
  if (/^## 10\b/.test(text) || /^### 10\./.test(text)) {
    return { code: "LIFECYCLE" };
  }
  if (/^## 11\b/.test(text)) {
    return { code: "OUTBOX" };
  }
  if (/^## 12\b/.test(text) || /^### 12\./.test(text)) {
    return { code: "CONFIG" };
  }
  if (/^## 13\b/.test(text) || /^### 13\./.test(text)) {
    return { code: "GOVERNANCE" };
  }
  if (/^## 17\b/.test(text) || /^### 17\./.test(text)) {
    return { code: "OBSERVABILITY" };
  }
  if (/^## 18\b/.test(text)) {
    return { code: "SECURITY" };
  }
  if (/^### 22\.3\b/.test(text)) {
    return { code: "DECISION", listMode: "resolved_decisions" };
  }
  if (/^## 24\b/.test(text)) {
    return { code: "NEXT_ACTION", listMode: "next_actions" };
  }
  return null;
}

/**
 * @param {string | null | undefined} contextCode
 */
export function isHardRequirementContext(contextCode) {
  return Boolean(contextCode && HARD_REQUIREMENT_CONTEXT_CODES.includes(contextCode));
}

/**
 * Soft inherited openers are obsolete under exact-line exclusions.
 * Any hard context code may force requirements; binding language always wins.
 */
export const STRONG_DESCRIPTIVE_OVERRIDE_CODES = Object.freeze([
  ...HARD_REQUIREMENT_CONTEXT_CODES,
]);

/**
 * @param {string | null | undefined} contextCode
 */
export function isStrongDescriptiveOverride(contextCode) {
  return Boolean(contextCode && STRONG_DESCRIPTIVE_OVERRIDE_CODES.includes(contextCode));
}

/**
 * @deprecated use lineHasBindingObligation
 * @param {string} text
 */
export function lineHasStrongObligation(text) {
  return lineHasBindingObligation(text);
}

/**
 * True when a non_requirement coverage row's text still carries binding language.
 * Structural machine codes are exempt; descriptive exclusions are not.
 * @param {{ reasonCode?: string, text?: string, type?: string }} entry
 * @param {string} [sourceText]
 */
export function nonRequirementFailsBindingAudit(entry, sourceText = "") {
  const code = String(entry.reasonCode ?? "");
  if (STRUCTURAL_NON_REQUIREMENT_CODES.includes(code)) {
    return false;
  }
  const text = String(sourceText || entry.text || "");
  if (!text.trim()) {
    return false;
  }
  return lineHasBindingObligation(text);
}

/**
 * Tokenize plan markdown into structural constructs (one per non-skipped line).
 * @param {string} planText
 */
export function tokenizePlanMarkdown(planText) {
  const lines = String(planText).split(/\n/);
  /** @type {Array<Record<string, unknown>>} */
  const constructs = [];
  let inFence = false;
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const lineNo = i + 1;
    if (line.startsWith("```")) {
      inFence = !inFence;
      constructs.push({
        type: inFence ? "fence_open" : "fence_close",
        line: lineNo,
        text: line,
      });
      continue;
    }
    if (inFence) {
      constructs.push({ type: "fence_body", line: lineNo, text: line });
      continue;
    }
    if (!line.trim()) {
      constructs.push({ type: "blank", line: lineNo, text: "" });
      continue;
    }
    if (/^#{1,6} /.test(line)) {
      constructs.push({
        type: "heading",
        line: lineNo,
        text: line,
        level: line.match(/^#+/)?.[0].length ?? 1,
      });
      continue;
    }
    if (/^\|?\s*:?-{3,}/.test(line) && line.includes("|")) {
      constructs.push({ type: "table_separator", line: lineNo, text: line });
      continue;
    }
    if (line.trimStart().startsWith("|")) {
      constructs.push({ type: "table_row", line: lineNo, text: line });
      continue;
    }
    if (/^[-*] /.test(line)) {
      constructs.push({
        type: "list_item",
        line: lineNo,
        text: line.replace(/^[-*] /, "").trim(),
      });
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      const match = line.match(/^(\d+)\.\s+(.+)$/);
      constructs.push({
        type: "numbered_item",
        line: lineNo,
        n: Number(match?.[1] ?? 0),
        text: (match?.[2] ?? "").trim(),
      });
      continue;
    }
    const bold = parseBoldLabel(line);
    if (bold) {
      constructs.push({
        type: "bold_label",
        line: lineNo,
        label: bold.label,
        rest: bold.rest,
        text: line,
      });
      continue;
    }
    constructs.push({ type: "paragraph", line: lineNo, text: line.trim() });
  }
  return constructs;
}

/**
 * Full plan analysis: requirements + fail-closed coverage.
 * @param {string} planText
 * @param {{ descriptiveExclusions?: ReadonlyArray<DescriptiveExclusion> }} [options]
 */
export function analyzePlanForSection133(planText, options = {}) {
  const constructs = tokenizePlanMarkdown(planText);
  /** @type {ReturnType<typeof makeItem>[]} */
  const items = [];
  /** @type {Array<Record<string, unknown>>} */
  const coverage = [];
  /** @type {string[]} */
  const errors = [];
  const exclusionList = options.descriptiveExclusions ?? DESCRIPTIVE_EXCLUSIONS;
  const exclusionByFingerprint = new Map(
    [...exclusionList].map((entry) => [entry.fingerprint, entry]),
  );

  const pushItem = (kind, label, line, anchor) => {
    if (!label || !String(label).trim()) {
      return null;
    }
    const item = makeItem(label, kind, anchor, line);
    items.push(item);
    return item;
  };

  const mapLegacyReasonToCode = (disposition, reason) => {
    if (disposition === "requirement" || disposition === "unhandled") {
      return disposition === "unhandled" ? "UNHANDLED" : "REQUIREMENT";
    }
    const text = String(reason);
    if (/blank|fence_/.test(text)) {
      return text.includes("fence") ? "STRUCTURAL_FENCE" : "STRUCTURAL_BLANK";
    }
    if (/table separator/.test(text)) {
      return "STRUCTURAL_TABLE_SEPARATOR";
    }
    if (/heading provides|heading is/.test(text)) {
      return "STRUCTURAL_HEADING";
    }
    if (/table header|empty table/.test(text)) {
      return text.includes("empty") ? "STRUCTURAL_EMPTY_TABLE_ROW" : "STRUCTURAL_TABLE_HEADER";
    }
    if (/opens /.test(text) || /intro;/i.test(text) || /follow as list/i.test(text)) {
      return /bold label|Work label|scenario|Inputs|Sequence|Prerequisites|platform evidence/i.test(text)
        ? "LABEL_OPENS_FOLLOWING_LIST"
        : "INTRO_OPENS_FOLLOWING_LIST";
    }
    if (/metadata|without ledger obligation|bold label/i.test(text)) {
      return "METADATA_BOLD_LABEL";
    }
    if (/frontmatter|^\-\-\-|summary:|title:/i.test(text)) {
      return "FRONTMATTER_OR_META";
    }
    return "NARRATIVE_CONTEXT";
  };

  const cover = (construct, disposition, reasonOrCode, detailOrIds = "", maybeIds = [], meta = {}) => {
    /** @type {string} */
    let reasonCode;
    /** @type {string} */
    let detail;
    /** @type {unknown[]} */
    let itemIds;
    /** @type {Record<string, unknown>} */
    let extra = meta;
    if (Array.isArray(detailOrIds)) {
      // Legacy: cover(construct, disposition, reasonString, itemIds)
      detail = String(reasonOrCode);
      reasonCode = mapLegacyReasonToCode(disposition, detail);
      itemIds = detailOrIds;
    } else if (NON_REQUIREMENT_REASON_CODES.includes(reasonOrCode) || reasonOrCode === "REQUIREMENT" || reasonOrCode === "UNHANDLED") {
      reasonCode = reasonOrCode;
      detail = typeof detailOrIds === "string" ? detailOrIds : "";
      itemIds = Array.isArray(maybeIds) ? maybeIds : [];
      if (!Array.isArray(maybeIds) && maybeIds && typeof maybeIds === "object") {
        extra = /** @type {Record<string, unknown>} */ (maybeIds);
        itemIds = [];
      }
    } else {
      detail = String(reasonOrCode);
      reasonCode = mapLegacyReasonToCode(disposition, detail);
      itemIds = Array.isArray(maybeIds) ? maybeIds : [];
    }

    if (disposition === "non_requirement" && !NON_REQUIREMENT_REASON_CODES.includes(reasonCode)) {
      errors.push(`invalid non_requirement reasonCode ${reasonCode} at line ${construct.line}`);
    }
    const sourceContext = String(extra.sourceContext ?? sectionKey ?? section ?? "");
    const inheritedContext =
      extra.inheritedContext === undefined ? inherited?.code ?? null : extra.inheritedContext;
    const exclusionId = extra.exclusionId ?? null;
    const exclusionReason = extra.exclusionReason ?? null;
    const sourceAnchor =
      extra.sourceAnchor ?? `coverage.L${construct.line}.${construct.type}`;
    const constructText = String(construct.text ?? construct.label ?? "");
    const fingerprint = planItemFingerprint(
      `coverage.L${construct.line}.${construct.type}`,
      `${construct.type}:${constructText}`,
    );
    const hard =
      isHardRequirementContext(/** @type {string | null} */ (inheritedContext)) ||
      isHardRequirementContext(structuralContext) ||
      true; // fail-closed: every section is implementation-bearing
    if (reasonCode === "DESCRIPTIVE_ALLOWLIST") {
      errors.push(
        `legacy DESCRIPTIVE_ALLOWLIST forbidden at line ${construct.line}; use exact DESCRIPTIVE_EXCLUSION`,
      );
    }
    if (
      disposition === "non_requirement" &&
      (construct.type === "list_item" ||
        construct.type === "numbered_item" ||
        construct.type === "table_row") &&
      reasonCode === "NARRATIVE_CONTEXT"
    ) {
      errors.push(
        `forbidden NARRATIVE_CONTEXT on ${construct.type} at line ${construct.line}; use DESCRIPTIVE_EXCLUSION or extract as requirement`,
      );
    } else if (
      disposition === "non_requirement" &&
      (construct.type === "list_item" ||
        construct.type === "numbered_item" ||
        construct.type === "table_row") &&
      hard &&
      reasonCode !== "STRUCTURAL_TABLE_HEADER" &&
      reasonCode !== "STRUCTURAL_EMPTY_TABLE_ROW" &&
      reasonCode !== "DESCRIPTIVE_EXCLUSION"
    ) {
      errors.push(
        `forbidden non_requirement ${reasonCode} for ${construct.type} at line ${construct.line}`,
      );
    }
    if (disposition === "non_requirement" && reasonCode === "DESCRIPTIVE_EXCLUSION") {
      const matched = exclusionByFingerprint.get(fingerprint);
      if (!matched || matched.id !== exclusionId) {
        errors.push(
          `DESCRIPTIVE_EXCLUSION fingerprint/id mismatch at line ${construct.line} (id=${exclusionId})`,
        );
      }
      if (!exclusionReason || !String(sourceAnchor).startsWith("exclusion.")) {
        errors.push(`DESCRIPTIVE_EXCLUSION missing reason/anchor at line ${construct.line}`);
      }
      if (lineHasBindingObligation(constructText)) {
        errors.push(
          `DESCRIPTIVE_EXCLUSION overridden by binding obligation at line ${construct.line}`,
        );
      }
    }
    if (
      disposition === "non_requirement" &&
      !STRUCTURAL_NON_REQUIREMENT_CODES.includes(reasonCode) &&
      reasonCode !== "DESCRIPTIVE_EXCLUSION" &&
      lineHasBindingObligation(constructText)
    ) {
      errors.push(
        `non_requirement ${reasonCode} still carries binding language at line ${construct.line}`,
      );
    }
    // INTRO openers that still carry binding language must be requirements.
    if (
      disposition === "non_requirement" &&
      reasonCode === "INTRO_OPENS_FOLLOWING_LIST" &&
      lineHasBindingObligation(constructText)
    ) {
      errors.push(
        `INTRO_OPENS_FOLLOWING_LIST carries binding language at line ${construct.line}; extract as requirement`,
      );
    }
    const reason = detail || reasonCode;
    const anchor = `coverage.L${construct.line}.${construct.type}`;
    coverage.push({
      line: construct.line,
      type: construct.type,
      text: constructText,
      disposition,
      reason,
      reasonCode,
      sourceContext,
      inheritedContext,
      structuralContext: structuralContext ?? null,
      sectionPolicy: "implementation",
      exclusionId,
      exclusionReason,
      allowlistRule: null,
      sourceAnchor,
      anchor,
      fingerprint,
      itemIds,
    });
  };

  let section = "";
  let sectionKey = "";
  let subsection = "";
  let phase = /** @type {number | null} */ (null);
  /** @type {null | string} */
  let listMode = null;
  let listIndex = 0;
  /** @type {null | string} */
  let tableMode = null;
  let tableIndex = 0;
  let inDod = false;
  let dodSection = "";
  let dodIndex = 0;
  /** @type {{ code: string, kind: string } | null} */
  let inherited = null;
  /** @type {string | null} */
  let structuralContext = null;
  /** @type {"implementation"} */
  let sectionPolicy = "implementation";
  /** @type {string | null} */
  let descriptiveRule = null;

  const setListMode = (mode) => {
    listMode = mode;
    listIndex = 0;
  };

  const clearListScopedState = () => {
    setListMode(null);
    tableMode = null;
    inherited = null;
  };

  for (const construct of constructs) {
    const { type, line } = construct;

    if (type === "blank" || type === "fence_open" || type === "fence_close" || type === "fence_body") {
      cover(
        construct,
        "non_requirement",
        type === "blank" ? "STRUCTURAL_BLANK" : "STRUCTURAL_FENCE",
        `${type} is structural/non-ledger`,
      );
      continue;
    }

    if (type === "table_separator") {
      cover(construct, "non_requirement", "STRUCTURAL_TABLE_SEPARATOR", "markdown table separator");
      continue;
    }

    if (type === "heading") {
      const text = String(construct.text);
      section = text.replace(/^#+\s+/, "");
      sectionKey = slug(section);
      if (text.startsWith("### ")) {
        subsection = section;
      }
      clearListScopedState();
      const policy = classifySectionPolicy(text);
      sectionPolicy = policy.policy;
      descriptiveRule = policy.rule;
      const phaseMatch = text.match(/^### Phase (\d+) — (.+)$/);
      if (phaseMatch) {
        phase = Number(phaseMatch[1]);
        structuralContext = null;
        sectionPolicy = "implementation";
        descriptiveRule = null;
        const item = pushItem(
          "task",
          `Phase ${phase}: ${phaseMatch[2]}`,
          line,
          `phase.${phase}.title`,
        );
        cover(construct, "requirement", "REQUIREMENT", "phase heading is an atomic phase task", item ? [item.id] : []);
        continue;
      }
      if (/^## /.test(text) && !/^### /.test(text)) {
        phase = null;
      }
      if (/^## 23\. Definition of Done\b/.test(text)) {
        inDod = true;
        dodIndex = 0;
        structuralContext = "DOD";
      } else if (inDod && /^## /.test(text)) {
        inDod = false;
      }
      if (inDod && /^### /.test(text)) {
        dodSection = text.replace(/^###\s+/, "");
        structuralContext = "DOD";
      }
      const structural = detectStructuralRequirementSection(text);
      if (structural) {
        structuralContext = structural.code;
        if (structural.listMode) {
          setListMode(structural.listMode);
        }
        if (structural.tableMode) {
          tableMode = structural.tableMode;
          tableIndex = 0;
        }
      } else if (/^## /.test(text) && !/^### /.test(text) && !inDod) {
        // New top-level section without structural mode clears prior context.
        structuralContext = null;
      }
      // Section context switches for list modes outside phases.
      if (/^### 16\.1\b/.test(text)) {
        tableMode = "test_layers";
        tableIndex = 0;
      } else if (/^### 16\.2\b/.test(text)) {
        setListMode("invariants");
        structuralContext = "REQUIRED";
      } else if (/^## 14\b/.test(text)) {
        setListMode("cross_plan");
        structuralContext = "GATE";
      } else if (/^## 19\b/.test(text)) {
        setListMode("runbooks");
      } else if (/^## 20\b/.test(text)) {
        tableMode = "rollback_matrix";
        tableIndex = 0;
        structuralContext = "ROLLBACK";
      } else if (/^## 21\b/.test(text)) {
        setListMode("handoff_fields");
      } else if (/^### 21\.1\b/.test(text)) {
        setListMode("grok_handoff");
      } else if (/^### 21\.2\b/.test(text)) {
        setListMode("correction_packet");
      } else if (/^### 22\.1\b/.test(text)) {
        setListMode("launch_gates");
        structuralContext = "GATE";
      } else if (/^### 22\.2\b/.test(text)) {
        setListMode("principal_gates");
        structuralContext = "GATE";
      } else if (/^### 22\.3\b/.test(text)) {
        setListMode("resolved_decisions");
        structuralContext = "DECISION";
      } else if (/^### 22\.4\b/.test(text)) {
        setListMode("assumptions");
        structuralContext = "ASSUMPTION";
      } else if (/^### 22\.5\b/.test(text)) {
        tableMode = "risks";
        tableIndex = 0;
        structuralContext = "RISK";
      } else if (/^### 17\.2\b/.test(text)) {
        tableMode = "alert_classes";
        tableIndex = 0;
      } else if (/^### 13\.4\b/.test(text)) {
        tableMode = "ownership_matrix";
        tableIndex = 0;
        structuralContext = "GOVERNANCE";
      }

      cover(construct, "non_requirement", "STRUCTURAL_HEADING", "heading provides structure/context only");
      continue;
    }

    if (type === "bold_label") {
      const label = String(construct.label);
      const rest = String(construct.rest ?? "");
      if (!BOLD_CONTRACT_LABELS.has(label) && phase != null) {
        // Unknown bold label inside a phase still must be handled.
        if (rest) {
          const ids = [];
          for (const [index, part] of splitAtomicObligations(rest).entries()) {
            const item = pushItem(
              "task",
              `${label}: ${part}`,
              line,
              `phase.${phase}.bold.${slug(label)}.${index + 1}`,
            );
            if (item) {
              ids.push(item.id);
            }
          }
          cover(construct, "requirement", "unknown phase bold label treated as requirement", ids);
        } else {
          cover(construct, "non_requirement", `phase bold label ${label} opens following content`);
        }
        setListMode(null);
        continue;
      }

      if (label === "Work") {
        setListMode("work");
        cover(construct, "non_requirement", "Work label opens task list");
        continue;
      }
      if (label === "Required failure/recovery scenarios") {
        setListMode("scenarios");
        cover(construct, "non_requirement", "scenario label opens test list");
        continue;
      }
      if (label === "Platform-owned evidence") {
        setListMode("platform_evidence");
        cover(construct, "non_requirement", "platform evidence label opens evidence list");
        continue;
      }
      if (label === "Inputs") {
        setListMode("inputs");
        cover(construct, "non_requirement", "Inputs label opens evidence list");
        continue;
      }
      if (label === "Sequence") {
        if (rest && phase != null) {
          const ids = [];
          for (const [index, part] of splitAtomicObligations(rest).entries()) {
            const item = pushItem("task", part, line, `phase.${phase}.sequence.${index + 1}`);
            if (item) {
              ids.push(item.id);
            }
          }
          setListMode(null);
          cover(construct, "requirement", "inline Sequence tasks split atomically", ids);
        } else {
          setListMode("sequence");
          cover(construct, "non_requirement", "Sequence label opens numbered tasks");
        }
        continue;
      }
      if (label === "Prerequisites") {
        if (rest && phase != null) {
          const ids = [];
          for (const [index, part] of splitAtomicObligations(rest).entries()) {
            const item = pushItem("gate", part, line, `phase.${phase}.prerequisite.${index + 1}`);
            if (item) {
              ids.push(item.id);
            }
          }
          setListMode(null);
          cover(construct, "requirement", "inline Prerequisites split atomically", ids);
        } else {
          setListMode("prereq");
          cover(construct, "non_requirement", "Prerequisites label opens gate list");
        }
        continue;
      }
      if (label === "Tests" && phase != null) {
        const ids = [];
        for (const [index, part] of splitPlanList(rest).entries()) {
          const item = pushItem("test", part, line, `phase.${phase}.test.${index + 1}`);
          if (item) {
            ids.push(item.id);
          }
        }
        setListMode(null);
        cover(construct, "requirement", "Tests list split atomically", ids);
        continue;
      }
      if (label === "Deliverables" && phase != null) {
        const ids = [];
        for (const [index, part] of splitPlanList(rest).entries()) {
          const item = pushItem("deliverable", part, line, `phase.${phase}.deliverable.${index + 1}`);
          if (item) {
            ids.push(item.id);
          }
        }
        setListMode(null);
        cover(construct, "requirement", "Deliverables list split atomically", ids);
        continue;
      }
      if (label === "Exit gate" && phase != null) {
        const item = pushItem("exit_gate", rest, line, `phase.${phase}.exit_gate`);
        setListMode(null);
        cover(construct, "requirement", "Exit gate is atomic", item ? [item.id] : []);
        continue;
      }
      if ((label === "Rollback" || label === "Rollback order") && phase != null) {
        const item = pushItem("rollback", rest, line, `phase.${phase}.rollback`);
        setListMode(null);
        cover(construct, "requirement", "Rollback is atomic", item ? [item.id] : []);
        continue;
      }
      if (label === "Evidence minimums" && phase != null) {
        const listPart = rest.split(/\.\s+(?=[A-Z])/)[0] ?? rest;
        const ids = [];
        for (const [index, part] of splitPlanList(listPart).entries()) {
          const item = pushItem(
            "evidence_requirement",
            part,
            line,
            `phase.${phase}.evidence_minimum.${index + 1}`,
          );
          if (item) {
            ids.push(item.id);
          }
        }
        // Trailing rationale sentence after the list, if present.
        const rationale = rest.slice(listPart.length).replace(/^\.\s*/, "").trim();
        if (rationale) {
          const item = pushItem(
            "evidence_requirement",
            rationale,
            line,
            `phase.${phase}.evidence_minimum_rationale`,
          );
          if (item) {
            ids.push(item.id);
          }
        }
        setListMode(null);
        cover(construct, "requirement", "Evidence minimums split atomically", ids);
        continue;
      }
      if (label === "Hard prerequisite" && phase != null) {
        const ids = [];
        for (const [index, part] of splitAtomicObligations(rest).entries()) {
          const item = pushItem("gate", part, line, `phase.${phase}.hard_prerequisite.${index + 1}`);
          if (item) {
            ids.push(item.id);
          }
        }
        setListMode(null);
        cover(construct, "requirement", "Hard prerequisite split atomically", ids);
        continue;
      }
      if (label === "Window rule" && phase != null) {
        const item = pushItem("gate", rest, line, `phase.${phase}.window_rule`);
        setListMode(null);
        cover(construct, "requirement", "Window rule is atomic", item ? [item.id] : []);
        continue;
      }
      if (
        label === "Objective" ||
        label === "OpenClaw owner" ||
        label === "External owners" ||
        label === "Primary files" ||
        label === "Owner" ||
        label === "OpenClaw work"
      ) {
        setListMode(label === "OpenClaw work" ? "work" : null);
        if (label === "OpenClaw work" && rest && phase != null) {
          const ids = [];
          for (const [index, part] of splitAtomicObligations(rest).entries()) {
            const item = pushItem("task", part, line, `phase.${phase}.openclaw_work.${index + 1}`);
            if (item) {
              ids.push(item.id);
            }
          }
          cover(construct, "requirement", "OpenClaw work obligations", ids);
        } else if (rest && phase != null && (label === "Objective" || label === "Owner")) {
          const kind = label === "Objective" ? "task" : "evidence_requirement";
          const item = pushItem(
            kind,
            `${label}: ${rest}`,
            line,
            `phase.${phase}.${slug(label)}`,
          );
          cover(construct, "requirement", `${label} recorded`, item ? [item.id] : []);
        } else {
          cover(construct, "non_requirement", `${label} metadata/context`);
        }
        continue;
      }

      // Outside phases: still handle known/unknown bold labels.
      if (rest && isRequirementBearingParagraph(`${label}: ${rest}`)) {
        const ids = [];
        for (const [index, part] of splitAtomicObligations(rest).entries()) {
          const item = pushItem(
            "evidence_requirement",
            `${label}: ${part}`,
            line,
            `bold.${slug(section)}.${slug(label)}.${index + 1}`,
          );
          if (item) {
            ids.push(item.id);
          }
        }
        cover(construct, "requirement", "bold contract label with obligations", ids);
      } else {
        cover(construct, "non_requirement", `bold label ${label} without ledger obligation`);
      }
      continue;
    }

    if (type === "list_item" || type === "numbered_item") {
      const text = String(construct.text);
      // Cross-plan numbered gates with bold titles.
      if (listMode === "cross_plan") {
        const gateMatch = text.match(/^\*\*(.+?)\.\*\*\s*(.*)$/);
        if (gateMatch) {
          const item = pushItem(
            "cross_plan_gate",
            `${gateMatch[1]}. ${gateMatch[2]}`.trim(),
            line,
            `cross_plan_gate.${construct.n ?? ++listIndex}`,
          );
          cover(construct, "requirement", "cross-plan gate", item ? [item.id] : []);
          continue;
        }
      }

      listIndex += 1;
      if (listMode === "work" && phase != null) {
        const item = pushItem("task", text, line, `phase.${phase}.work.${listIndex}`);
        cover(construct, "requirement", "phase work task", item ? [item.id] : []);
        continue;
      }
      if (listMode === "scenarios" && phase != null) {
        const item = pushItem("test", text, line, `phase.${phase}.scenario.${listIndex}`);
        cover(construct, "requirement", "failure/recovery scenario", item ? [item.id] : []);
        continue;
      }
      if (listMode === "platform_evidence" && phase != null) {
        const item = pushItem(
          "evidence_requirement",
          text,
          line,
          `phase.${phase}.platform_evidence.${listIndex}`,
        );
        cover(construct, "requirement", "platform-owned evidence", item ? [item.id] : []);
        continue;
      }
      if (listMode === "prereq" && phase != null) {
        const item = pushItem("gate", text, line, `phase.${phase}.prerequisite.${listIndex}`);
        cover(construct, "requirement", "phase prerequisite", item ? [item.id] : []);
        continue;
      }
      if (listMode === "sequence" && phase != null) {
        const item = pushItem("task", text, line, `phase.${phase}.sequence.${listIndex}`);
        cover(construct, "requirement", "sequence task", item ? [item.id] : []);
        continue;
      }
      if (listMode === "inputs" && phase != null) {
        const item = pushItem(
          "evidence_requirement",
          text,
          line,
          `phase.${phase}.input.${listIndex}`,
        );
        cover(construct, "requirement", "phase input evidence", item ? [item.id] : []);
        continue;
      }
      if (listMode === "invariants") {
        const item = pushItem("test", text, line, `test.invariant.${listIndex}`);
        cover(construct, "requirement", "required invariant", item ? [item.id] : []);
        continue;
      }
      if (listMode === "runbooks") {
        const item = pushItem(
          "deliverable",
          `Runbook: ${text.replace(/\.$/, "")}`,
          line,
          `runbook.${construct.n ?? listIndex}`,
        );
        cover(construct, "requirement", "required runbook", item ? [item.id] : []);
        continue;
      }
      if (listMode === "handoff_fields") {
        const item = pushItem("evidence_requirement", text, line, `evidence.handoff.${listIndex}`);
        cover(construct, "requirement", "phase handoff evidence field", item ? [item.id] : []);
        continue;
      }
      if (listMode === "grok_handoff") {
        const item = pushItem(
          "evidence_requirement",
          text,
          line,
          `evidence.grok_handoff.${listIndex}`,
        );
        cover(construct, "requirement", "§21.1 handoff evidence field", item ? [item.id] : []);
        continue;
      }
      if (listMode === "correction_packet") {
        const item = pushItem(
          "evidence_requirement",
          text,
          line,
          `evidence.correction_packet.${listIndex}`,
        );
        cover(construct, "requirement", "§21.2 correction-packet field", item ? [item.id] : []);
        continue;
      }
      if (listMode === "launch_gates") {
        const item = pushItem("gate", text, line, `gate.launch_blocking.${listIndex}`);
        cover(construct, "requirement", "§22.1 launch-blocking gate", item ? [item.id] : []);
        continue;
      }
      if (listMode === "principal_gates") {
        const item = pushItem("gate", text, line, `gate.principal.${listIndex}`);
        cover(construct, "requirement", "§22.2 Principal gate", item ? [item.id] : []);
        continue;
      }
      if (listMode === "assumptions") {
        const item = pushItem("assumption", text, line, `assumption.verify.${listIndex}`);
        cover(construct, "requirement", "REQUIREMENT", "§22.4 assumption to verify", item ? [item.id] : []);
        continue;
      }
      if (listMode === "resolved_decisions") {
        const item = pushItem("gate", text, line, `decision.resolved.${listIndex}`);
        cover(
          construct,
          "requirement",
          "REQUIREMENT",
          "§22.3 resolved implementation decision",
          item ? [item.id] : [],
        );
        continue;
      }
      if (listMode === "next_actions") {
        const item = pushItem("task", text, line, `next_action.${listIndex}`);
        cover(
          construct,
          "requirement",
          "REQUIREMENT",
          "§24 immediate next action",
          item ? [item.id] : [],
        );
        continue;
      }
      if (inDod) {
        dodIndex += 1;
        const item = pushItem(
          "dod",
          `[${dodSection}] ${text.replace(/\.$/, "")}`,
          line,
          `dod.${dodIndex}`,
        );
        cover(construct, "requirement", "REQUIREMENT", "definition-of-done statement", item ? [item.id] : []);
        continue;
      }

      // Fail-closed: default list/numbered items to requirements unless an exact-line
      // descriptive exclusion matches and the line has no binding obligation language.
      const inheritCode = inherited?.code ?? null;
      const underHardObligation =
        isHardRequirementContext(inheritCode) || isHardRequirementContext(structuralContext);
      const exclusion = matchDescriptiveExclusion(
        line,
        type,
        text,
        exclusionByFingerprint,
      );
      if (exclusion) {
        cover(construct, "non_requirement", "DESCRIPTIVE_EXCLUSION", exclusion.reason, [], {
          exclusionId: exclusion.id,
          exclusionReason: exclusion.reason,
          sourceAnchor: `exclusion.${exclusion.id}.L${line}`,
        });
        continue;
      }
      const kind =
        inherited?.kind ??
        (structuralContext === "HARD_BOUNDARY" ||
        structuralContext === "PROHIBITION" ||
        structuralContext === "DECISION" ||
        structuralContext === "SECURITY"
          ? "gate"
          : structuralContext === "OBSERVABILITY" || structuralContext === "CONFIG"
            ? "evidence_requirement"
            : "task");
      const item = pushItem(kind, text, line, `list.${slug(section)}.${line}.${listIndex}`);
      cover(
        construct,
        "requirement",
        "REQUIREMENT",
        underHardObligation
          ? `inherited/structural requirement (${inheritCode || structuralContext})`
          : "implementation-section default requirement",
        item ? [item.id] : [],
      );
      continue;
    }

    if (type === "table_row") {
      const cells = String(construct.text)
        .split("|")
        .map((cell) => cell.trim())
        .filter((cell, index, arr) => !(index === 0 || index === arr.length - 1) || cell);
      // Normalize: split leaves empties at ends for leading/trailing pipes.
      const parts = String(construct.text)
        .replace(/^\|/, "")
        .replace(/\|$/, "")
        .split("|")
        .map((cell) => cell.trim());
      if (parts.every((part) => !part) || parts[0] === "") {
        cover(construct, "non_requirement", "STRUCTURAL_EMPTY_TABLE_ROW", "empty table row");
        continue;
      }
      // Header rows.
      if (
        /^(Layer|Failure|Risk|Severity|Surface|Field|Name|Item|Priority|Plugin|Severity)$/i.test(
          parts[0],
        ) ||
        parts.every((part) => /^[-: ]+$/.test(part))
      ) {
        cover(construct, "non_requirement", "STRUCTURAL_TABLE_HEADER", "table header/context row");
        continue;
      }
      // Exact-line descriptive exclusion only (no section blanket).
      const tableExclusion = matchDescriptiveExclusion(
        line,
        "table_row",
        String(construct.text),
        exclusionByFingerprint,
      );
      if (tableExclusion) {
        cover(
          construct,
          "non_requirement",
          "DESCRIPTIVE_EXCLUSION",
          tableExclusion.reason,
          [],
          {
            exclusionId: tableExclusion.id,
            exclusionReason: tableExclusion.reason,
            sourceAnchor: `exclusion.${tableExclusion.id}.L${line}`,
          },
        );
        continue;
      }
      tableIndex += 1;
      if (tableMode === "test_layers") {
        const item = pushItem(
          "test",
          `${parts[0]}: ${parts[1] ?? ""} — ${parts[2] ?? ""}`,
          line,
          `test.layer.${tableIndex}`,
        );
        cover(construct, "requirement", "§16.1 test layer", item ? [item.id] : []);
        continue;
      }
      if (tableMode === "rollback_matrix") {
        const item = pushItem(
          "rollback",
          `${parts[0]}: ${parts[1] ?? ""}`,
          line,
          `rollback.matrix.${tableIndex}`,
        );
        cover(construct, "requirement", "§20 rollback matrix row", item ? [item.id] : []);
        continue;
      }
      if (tableMode === "risks") {
        const item = pushItem(
          "risk",
          `${parts[0]} — control: ${parts[1] ?? ""}`,
          line,
          `risk.execution.${tableIndex}`,
        );
        cover(construct, "requirement", "§22.5 risk/control", item ? [item.id] : []);
        continue;
      }
      if (tableMode === "alert_classes") {
        const item = pushItem(
          "evidence_requirement",
          `Alert ${parts[0]}: ${parts[1] ?? ""} → ${parts[2] ?? ""}`,
          line,
          `observability.alert.${tableIndex}`,
        );
        cover(construct, "requirement", "§17.2 alert class", item ? [item.id] : []);
        continue;
      }
      if (tableMode === "ownership_matrix") {
        const item = pushItem(
          "evidence_requirement",
          `Ownership ${parts[0]}: Brain=${parts[1] ?? ""}; Skills=${parts[2] ?? ""}; Platform=${parts[3] ?? ""}; OpenClaw=${parts[4] ?? ""}`,
          line,
          `ownership.matrix.${slug(section)}.${tableIndex}`,
        );
        cover(construct, "requirement", "REQUIREMENT", "§13.4 ownership matrix row", item ? [item.id] : []);
        continue;
      }
      // Generic tables: treat data rows as evidence requirements.
      const item = pushItem(
        "evidence_requirement",
        parts.join(" | "),
        line,
        `table.${slug(section)}.${line}.${tableIndex}`,
      );
      cover(construct, "requirement", "structured table row obligation/evidence", item ? [item.id] : []);
      continue;
    }

    if (type === "paragraph") {
      const text = String(construct.text);
      if (/^---$/.test(text) || /^(summary|title|read_when):/i.test(text)) {
        cover(construct, "non_requirement", "FRONTMATTER_OR_META", "frontmatter or doc meta");
        continue;
      }
      // §21.1 / §21.2 trailing role-separation paragraphs.
      if (
        /does not silently implement|missing handoff field is an independent-verification deficiency|verifier's evidence index|returns work to the original OpenClaw Grok owner/.test(
          text,
        )
      ) {
        const ids = [];
        for (const [index, part] of splitAtomicObligations(text).entries()) {
          const item = pushItem(
            "evidence_requirement",
            part,
            line,
            `verifier.role_separation.${line}.${index + 1}`,
          );
          if (item) {
            ids.push(item.id);
          }
        }
        cover(construct, "requirement", "REQUIREMENT", "verifier correction-ownership / role-separation", ids);
        continue;
      }
      const opener = detectRequirementInheritanceOpener(text);
      if (opener) {
        inherited = opener;
        const opensList =
          /:\s*$/.test(text) ||
          /approved target is$/i.test(text.trim()) ||
          /does not authorize or include$/i.test(text.trim()) ||
          /conflict rule:?$/i.test(text.trim()) ||
          /^tests must prove:?$/i.test(text.trim()) ||
          /^required runbooks:?$/i.test(text.trim()) ||
          /^return to the principal if:?$/i.test(text.trim()) ||
          /^implementation is complete only when/i.test(text.trim());
        // Binding-language intros are requirements (and still set inheritance).
        if (opensList && !lineHasBindingObligation(text)) {
          cover(
            construct,
            "non_requirement",
            "INTRO_OPENS_FOLLOWING_LIST",
            `opens inherited ${opener.code} list`,
          );
          continue;
        }
        // Obligation-bearing intro sentences are themselves requirements and still set inheritance.
        const ids = [];
        for (const [index, part] of splitAtomicObligations(text).entries()) {
          const item = pushItem(
            opener.kind === "gate" ? "gate" : "evidence_requirement",
            part,
            line,
            `prose.${slug(section)}.${line}.${index + 1}`,
          );
          if (item) {
            ids.push(item.id);
          }
        }
        cover(construct, "requirement", "REQUIREMENT", `inheritance opener ${opener.code}`, ids);
        continue;
      }
      if (inDod && /^Implementation is complete only when/.test(text)) {
        inherited = { code: "DOD", kind: "dod" };
        const ids = [];
        for (const [index, part] of splitAtomicObligations(text).entries()) {
          const item = pushItem("evidence_requirement", part, line, `prose.${slug(section)}.${line}.${index + 1}`);
          if (item) {
            ids.push(item.id);
          }
        }
        cover(construct, "requirement", "REQUIREMENT", "DoD intro opens following statements", ids);
        continue;
      }
      if (/^Return to the Principal if:/.test(text)) {
        inherited = { code: "GATE", kind: "gate" };
        cover(construct, "non_requirement", "INTRO_OPENS_FOLLOWING_LIST", "§22.2 intro; gates follow as list items");
        continue;
      }
      if (/^Tests must prove:/.test(text)) {
        inherited = { code: "REQUIRED", kind: "test" };
        const ids = [];
        for (const [index, part] of splitAtomicObligations(text).entries()) {
          const item = pushItem("evidence_requirement", part, line, `prose.${slug(section)}.${line}.${index + 1}`);
          if (item) {
            ids.push(item.id);
          }
        }
        cover(construct, "requirement", "REQUIREMENT", "§16.2 intro opens invariant list", ids);
        continue;
      }
      if (/^Required runbooks:/.test(text)) {
        inherited = { code: "REQUIRED", kind: "deliverable" };
        const ids = [];
        for (const [index, part] of splitAtomicObligations(text).entries()) {
          const item = pushItem("evidence_requirement", part, line, `prose.${slug(section)}.${line}.${index + 1}`);
          if (item) {
            ids.push(item.id);
          }
        }
        cover(construct, "requirement", "REQUIREMENT", "§19 intro opens runbook list", ids);
        continue;
      }
      if (phase != null && /^Synthetic activity may supplement/.test(text)) {
        const ids = [];
        for (const [index, part] of splitAtomicObligations(text).entries()) {
          const item = pushItem(
            "evidence_requirement",
            part,
            line,
            `phase.${phase}.real_activity_rule.${index + 1}`,
          );
          if (item) {
            ids.push(item.id);
          }
        }
        cover(construct, "requirement", "REQUIREMENT", "phase real-activity evidence rule", ids);
        continue;
      }
      const paragraphExclusion = matchDescriptiveExclusion(
        line,
        "paragraph",
        text,
        exclusionByFingerprint,
      );
      if (paragraphExclusion) {
        cover(
          construct,
          "non_requirement",
          "DESCRIPTIVE_EXCLUSION",
          paragraphExclusion.reason,
          [],
          {
            exclusionId: paragraphExclusion.id,
            exclusionReason: paragraphExclusion.reason,
            sourceAnchor: `exclusion.${paragraphExclusion.id}.L${line}`,
          },
        );
        continue;
      }
      // Fail closed: every remaining child paragraph in the plan is a requirement.
      const ids = [];
      for (const [index, part] of splitAtomicObligations(text).entries()) {
        const item = pushItem(
          structuralContext === "HARD_BOUNDARY" ||
            structuralContext === "PROHIBITION" ||
            structuralContext === "SECURITY"
            ? "gate"
            : "evidence_requirement",
          part,
          line,
          `prose.${slug(section)}.${line}.${index + 1}`,
        );
        if (item) {
          ids.push(item.id);
        }
      }
      cover(
        construct,
        "requirement",
        "REQUIREMENT",
        structuralContext
          ? `structural section prose (${structuralContext})`
          : "implementation-section child paragraph",
        ids,
      );
      continue;
    }

    errors.push(`unhandled construct ${type} at line ${line}`);
    cover(construct, "unhandled", "UNHANDLED", "no extraction rule matched");
  }

  // Fail-closed: every non-blank structural construct must be covered.
  const uncovered = coverage.filter((entry) => entry.disposition === "unhandled");
  for (const entry of uncovered) {
    errors.push(`unhandled source construct at line ${entry.line} (${entry.type})`);
  }

  // Every requirement coverage entry must reference emitted items.
  for (const entry of coverage) {
    if (entry.disposition === "requirement" && (!entry.itemIds || entry.itemIds.length === 0)) {
      errors.push(`requirement coverage at line ${entry.line} emitted no atomic items`);
    }
  }

  return { items, coverage, errors, constructs };
}

/**
 * @param {string} value
 */
function slug(value) {
  return normalizePlanText(value)
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .slice(0, 80) || "x";
}

/**
 * Extract every atomic §13.3-relevant item from plan markdown.
 * @param {string} planText
 */
export function extractPlanSection133Items(planText) {
  return analyzePlanForSection133(planText).items;
}

/**
 * Load frozen plan, verify hash, extract items, enforce fail-closed coverage.
 * @param {{ root?: string, planPath?: string, expectedSha256?: string, planText?: string }} [opts]
 */
export function loadFrozenPlanItems(opts = {}) {
  const root = opts.root ?? process.cwd();
  const planPath = path.join(root, opts.planPath ?? FROZEN_PLAN_RELATIVE_PATH);
  const expectedSha = opts.expectedSha256 ?? FROZEN_PLAN_SHA256;
  const planText = opts.planText ?? fs.readFileSync(planPath, "utf8");
  const actualSha = sha256Hex(planText);
  /** @type {string[]} */
  const errors = [];
  if (actualSha !== expectedSha) {
    errors.push(
      `stale or wrong frozen plan hash: expected ${expectedSha}, got ${actualSha} (${planPath})`,
    );
  }
  const analyzed = analyzePlanForSection133(planText);
  errors.push(...analyzed.errors);
  const items = analyzed.items;
  const anchors = new Set();
  const fingerprints = new Set();
  for (const item of items) {
    if (anchors.has(item.anchor)) {
      errors.push(`duplicate plan anchor: ${item.anchor}`);
    }
    anchors.add(item.anchor);
    if (fingerprints.has(item.fingerprint)) {
      errors.push(`duplicate plan fingerprint: ${item.fingerprint} (${item.anchor})`);
    }
    fingerprints.add(item.fingerprint);
    if (!PLAN_ITEM_KINDS.includes(item.kind)) {
      errors.push(`invalid extracted kind ${item.kind} for ${item.anchor}`);
    }
  }
  const coverageAnchors = new Set();
  const coverageFingerprints = new Set();
  for (const entry of analyzed.coverage) {
    if (coverageAnchors.has(entry.anchor)) {
      errors.push(`duplicate coverage anchor: ${entry.anchor}`);
    }
    coverageAnchors.add(entry.anchor);
    if (coverageFingerprints.has(entry.fingerprint)) {
      errors.push(`duplicate coverage fingerprint: ${entry.fingerprint}`);
    }
    coverageFingerprints.add(entry.fingerprint);
  }
  return {
    ok: errors.length === 0,
    errors,
    planPath,
    planSha256: actualSha,
    expectedSha256: expectedSha,
    items,
    coverage: analyzed.coverage,
  };
}

/**
 * Build inventory JSON object from plan-derived items.
 * @param {ReturnType<typeof extractPlanSection133Items>} items
 * @param {string} planSha256
 * @param {unknown[]} [coverage]
 */
export function buildInventoryFromPlanItems(items, planSha256, coverage = []) {
  const descriptiveExclusions = (Array.isArray(coverage) ? coverage : [])
    .filter((entry) => entry && /** @type {{ reasonCode?: string }} */ (entry).reasonCode === "DESCRIPTIVE_EXCLUSION")
    .map((entry) => {
      const row = /** @type {Record<string, unknown>} */ (entry);
      return {
        id: row.exclusionId,
        reason: row.exclusionReason,
        line: row.line,
        type: row.type,
        anchor: row.sourceAnchor || row.anchor,
        fingerprint: row.fingerprint,
        text: row.text,
      };
    });
  return {
    version: 3,
    authority: "frozen_plan",
    plan_path: FROZEN_PLAN_RELATIVE_PATH,
    plan_sha256: planSha256,
    classifications: ["IAP", "INPL", "PART", "OMIT", "DIFF", "BLOCK", "OUT"],
    kinds: [...PLAN_ITEM_KINDS],
    descriptive_exclusions: descriptiveExclusions,
    items: items.map((item) => ({
      id: item.id,
      kind: item.kind,
      label: item.label,
      anchor: item.anchor,
      line: item.line,
      fingerprint: item.fingerprint,
    })),
    coverage,
  };
}
