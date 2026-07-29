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
  "DESCRIPTIVE_ALLOWLIST",
  "FRONTMATTER_OR_META",
  // Legacy code retained only so validator can reject it on list/table items.
  "NARRATIVE_CONTEXT",
]);

/**
 * Explicit reviewed allowlist of genuinely descriptive / current-state sections.
 * List/table items may be non_requirement only when matched here.
 */
export const DESCRIPTIVE_ALLOWLIST_RULES = Object.freeze({
  FRONTMATTER_OR_META: {
    id: "frontmatter-or-meta",
    description: "YAML/doc frontmatter and document metadata lines",
  },
  SOURCE_HIERARCHY_METADATA: {
    id: "section-2-source-hierarchy-metadata",
    description: "Section 2 frozen-input priority/source hierarchy metadata table",
  },
  RECONCILIATION_FINDING: {
    id: "section-3-reconciliation-finding",
    description: "Section 3 reconciliation findings and remaining uncertainties",
  },
  BASELINE_CAPABILITY_INVENTORY: {
    id: "section-5.1-openclaw-baseline",
    description: "Section 5.1 sanitized current OpenClaw capability inventory",
  },
  BASELINE_LISA_OBSERVATION: {
    id: "section-5.2-lisa-baseline",
    description: "Section 5.2 sanitized Lisa baseline observations",
  },
  BASELINE_PLATFORM_STATUS: {
    id: "section-5.3-platform-baseline",
    description: "Section 5.3 inactive Platform environment status narrative",
  },
  BASELINE_SECTION: {
    id: "section-5-baseline",
    description: "Section 5 current baseline descriptive framing",
  },
  DOCUMENT_TITLE: {
    id: "document-title",
    description: "Top-level document title / explanatory heading context",
  },
});

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
 * Classify a heading into fail-closed section policy.
 * Default is implementation-bearing (requirements). Descriptive only via allowlist.
 * @param {string} headingText
 * @returns {{ policy: "implementation" | "descriptive" | "mixed_source_hierarchy", rule: string | null, id: string | null }}
 */
export function classifySectionPolicy(headingText) {
  const text = String(headingText);
  if (/^# /.test(text) && !/^## /.test(text)) {
    return { policy: "descriptive", rule: "DOCUMENT_TITLE", id: "document-title" };
  }
  if (/^## 2\b/.test(text)) {
    return {
      policy: "mixed_source_hierarchy",
      rule: "SOURCE_HIERARCHY_METADATA",
      id: "section-2-source-hierarchy-metadata",
    };
  }
  if (/^## 3\b/.test(text)) {
    return {
      policy: "descriptive",
      rule: "RECONCILIATION_FINDING",
      id: "section-3-reconciliation-finding",
    };
  }
  if (/^### 5\.1\b/.test(text)) {
    return {
      policy: "descriptive",
      rule: "BASELINE_CAPABILITY_INVENTORY",
      id: "section-5.1-openclaw-baseline",
    };
  }
  if (/^### 5\.2\b/.test(text)) {
    return {
      policy: "descriptive",
      rule: "BASELINE_LISA_OBSERVATION",
      id: "section-5.2-lisa-baseline",
    };
  }
  if (/^### 5\.3\b/.test(text)) {
    return {
      policy: "descriptive",
      rule: "BASELINE_PLATFORM_STATUS",
      id: "section-5.3-platform-baseline",
    };
  }
  if (/^## 5\b/.test(text)) {
    return { policy: "descriptive", rule: "BASELINE_SECTION", id: "section-5-baseline" };
  }
  return { policy: "implementation", rule: null, id: null };
}

/**
 * @param {string | null | undefined} rule
 */
export function isDescriptiveAllowlistRule(rule) {
  return Boolean(rule && Object.prototype.hasOwnProperty.call(DESCRIPTIVE_ALLOWLIST_RULES, rule));
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
  const lower = line.toLowerCase();
  return (
    /\b(must|shall|require|required|prove|proves|never|only when|do not|cannot|may not|is complete only when|returns work|records and verifies|does not silently|missing handoff field)\b/.test(
      lower,
    ) || /^\*\*[^*]+\.\*\*/.test(line)
  );
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
  if (isRequirementBearingParagraph(text)) {
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
 * Soft inherited openers (e.g. "required primitives") must not override the
 * descriptive allowlist. Only these codes force requirements inside descriptive sections.
 */
export const STRONG_DESCRIPTIVE_OVERRIDE_CODES = Object.freeze([
  "MUST",
  "PROHIBITION",
  "HARD_BOUNDARY",
  "RULES",
  "NEXT_ACTION",
  "GATE",
  "DOD",
  "ROLLBACK",
  "SECURITY",
]);

/**
 * @param {string | null | undefined} contextCode
 */
export function isStrongDescriptiveOverride(contextCode) {
  return Boolean(contextCode && STRONG_DESCRIPTIVE_OVERRIDE_CODES.includes(contextCode));
}

/**
 * Strong obligation language on the current line itself (not soft "required").
 * @param {string} text
 */
export function lineHasStrongObligation(text) {
  const value = String(text);
  return (
    /\bMUST NOT\b|\bSHALL NOT\b|\bMUST\b|\bSHALL\b|\bMAY NOT\b/.test(value) ||
    /\bprohibited\b|\bforbidden\b/i.test(value)
  );
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
 */
export function analyzePlanForSection133(planText) {
  const constructs = tokenizePlanMarkdown(planText);
  /** @type {ReturnType<typeof makeItem>[]} */
  const items = [];
  /** @type {Array<Record<string, unknown>>} */
  const coverage = [];
  /** @type {string[]} */
  const errors = [];

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
    const allowlistRule =
      extra.allowlistRule === undefined ? descriptiveRule : extra.allowlistRule;
    const sourceAnchor =
      extra.sourceAnchor ??
      (allowlistRule
        ? `allowlist.${allowlistRule}.L${construct.line}`
        : `coverage.L${construct.line}.${construct.type}`);
    const hard =
      isHardRequirementContext(/** @type {string | null} */ (inheritedContext)) ||
      isHardRequirementContext(structuralContext) ||
      sectionPolicy === "implementation";
    const allowlistedDescriptive =
      reasonCode === "DESCRIPTIVE_ALLOWLIST" &&
      isDescriptiveAllowlistRule(/** @type {string} */ (allowlistRule)) &&
      (sectionPolicy === "descriptive" || sectionPolicy === "mixed_source_hierarchy") &&
      !lineHasStrongObligation(String(construct.text ?? ""));
    if (
      disposition === "non_requirement" &&
      (construct.type === "list_item" ||
        construct.type === "numbered_item" ||
        construct.type === "table_row") &&
      reasonCode === "NARRATIVE_CONTEXT"
    ) {
      errors.push(
        `forbidden NARRATIVE_CONTEXT on ${construct.type} at line ${construct.line}; use DESCRIPTIVE_ALLOWLIST or extract as requirement`,
      );
    } else if (
      disposition === "non_requirement" &&
      (construct.type === "list_item" ||
        construct.type === "numbered_item" ||
        construct.type === "table_row") &&
      hard &&
      reasonCode !== "STRUCTURAL_TABLE_HEADER" &&
      reasonCode !== "STRUCTURAL_EMPTY_TABLE_ROW" &&
      !allowlistedDescriptive
    ) {
      errors.push(
        `forbidden non_requirement ${reasonCode} for ${construct.type} at line ${construct.line} (sectionPolicy=${sectionPolicy}; allowlist=${allowlistRule || "none"})`,
      );
    }
    if (disposition === "non_requirement" && reasonCode === "DESCRIPTIVE_ALLOWLIST") {
      if (!allowlistRule || !isDescriptiveAllowlistRule(/** @type {string} */ (allowlistRule))) {
        errors.push(`DESCRIPTIVE_ALLOWLIST missing valid allowlistRule at line ${construct.line}`);
      }
      if (!(sectionPolicy === "descriptive" || sectionPolicy === "mixed_source_hierarchy")) {
        errors.push(
          `DESCRIPTIVE_ALLOWLIST outside descriptive allowlist section at line ${construct.line} (sectionPolicy=${sectionPolicy})`,
        );
      }
      if (!String(sourceAnchor).startsWith("allowlist.")) {
        errors.push(`DESCRIPTIVE_ALLOWLIST missing sourceAnchor at line ${construct.line}`);
      }
    }
    const reason = detail || reasonCode;
    const anchor = `coverage.L${construct.line}.${construct.type}`;
    coverage.push({
      line: construct.line,
      type: construct.type,
      disposition,
      reason,
      reasonCode,
      sourceContext,
      inheritedContext,
      structuralContext: structuralContext ?? null,
      sectionPolicy,
      allowlistRule: allowlistRule ?? null,
      sourceAnchor,
      anchor,
      fingerprint: planItemFingerprint(
        anchor,
        `${construct.type}:${construct.text ?? construct.label ?? ""}`,
      ),
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
  /** @type {"implementation" | "descriptive" | "mixed_source_hierarchy"} */
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

      // Fail-closed section policy: default list/numbered items to requirements unless
      // an explicit descriptive allowlist rule applies. Soft inherited REQUIRED does not
      // override the allowlist; only strong obligation language / override codes do.
      const inheritCode = inherited?.code ?? null;
      const underHardObligation =
        isHardRequirementContext(inheritCode) || isHardRequirementContext(structuralContext);
      const strongOverride =
        isStrongDescriptiveOverride(inheritCode) ||
        isStrongDescriptiveOverride(structuralContext) ||
        lineHasStrongObligation(text);
      const allowDescriptive =
        (sectionPolicy === "descriptive" || sectionPolicy === "mixed_source_hierarchy") &&
        isDescriptiveAllowlistRule(descriptiveRule) &&
        !strongOverride;
      if (allowDescriptive) {
        cover(construct, "non_requirement", "DESCRIPTIVE_ALLOWLIST", DESCRIPTIVE_ALLOWLIST_RULES[descriptiveRule].description, [], {
          allowlistRule: descriptiveRule,
          sourceAnchor: `allowlist.${descriptiveRule}.L${line}`,
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
          : `implementation-section default requirement (${sectionPolicy})`,
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
      // Section 2 source-hierarchy metadata table is descriptive allowlist only.
      if (
        sectionPolicy === "mixed_source_hierarchy" &&
        isDescriptiveAllowlistRule(descriptiveRule) &&
        !tableMode
      ) {
        cover(
          construct,
          "non_requirement",
          "DESCRIPTIVE_ALLOWLIST",
          DESCRIPTIVE_ALLOWLIST_RULES[descriptiveRule].description,
          [],
          {
            allowlistRule: descriptiveRule,
            sourceAnchor: `allowlist.${descriptiveRule}.L${line}`,
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
        // Soft REQUIRED openers inside descriptive allowlist sections must not force
        // following inventory/finding bullets into requirements.
        const softDescriptiveOpener =
          (sectionPolicy === "descriptive" || sectionPolicy === "mixed_source_hierarchy") &&
          opener.code === "REQUIRED" &&
          !lineHasStrongObligation(text);
        inherited = softDescriptiveOpener ? null : opener;
        // Intros that only open a following list stay non_requirement with a machine code.
        if (
          /:\s*$/.test(text) ||
          /approved target is$/i.test(text.trim()) ||
          /does not authorize or include$/i.test(text.trim()) ||
          /conflict rule:?$/i.test(text.trim()) ||
          /^tests must prove:?$/i.test(text.trim()) ||
          /^required runbooks:?$/i.test(text.trim()) ||
          /^return to the principal if:?$/i.test(text.trim()) ||
          /^implementation is complete only when/i.test(text.trim())
        ) {
          cover(
            construct,
            "non_requirement",
            softDescriptiveOpener ? "DESCRIPTIVE_ALLOWLIST" : "INTRO_OPENS_FOLLOWING_LIST",
            softDescriptiveOpener
              ? DESCRIPTIVE_ALLOWLIST_RULES[descriptiveRule].description
              : `opens inherited ${opener.code} list`,
            [],
            softDescriptiveOpener
              ? {
                  allowlistRule: descriptiveRule,
                  sourceAnchor: `allowlist.${descriptiveRule}.L${line}`,
                }
              : {},
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
        cover(construct, "non_requirement", "INTRO_OPENS_FOLLOWING_LIST", "DoD intro; statements follow as list items");
        continue;
      }
      if (/^Return to the Principal if:/.test(text)) {
        inherited = { code: "GATE", kind: "gate" };
        cover(construct, "non_requirement", "INTRO_OPENS_FOLLOWING_LIST", "§22.2 intro; gates follow as list items");
        continue;
      }
      if (/^Tests must prove:/.test(text)) {
        inherited = { code: "REQUIRED", kind: "test" };
        cover(construct, "non_requirement", "INTRO_OPENS_FOLLOWING_LIST", "§16.2 intro; invariants follow as list items");
        continue;
      }
      if (/^Required runbooks:/.test(text)) {
        inherited = { code: "REQUIRED", kind: "deliverable" };
        cover(construct, "non_requirement", "INTRO_OPENS_FOLLOWING_LIST", "§19 intro; runbooks follow as numbered items");
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
      if (isImperativeInstruction(text) || isHardRequirementContext(structuralContext) || sectionPolicy === "implementation") {
        const ids = [];
        for (const [index, part] of splitAtomicObligations(text).entries()) {
          const item = pushItem(
            structuralContext === "HARD_BOUNDARY" || structuralContext === "PROHIBITION" || structuralContext === "SECURITY"
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
          sectionPolicy === "implementation"
            ? `implementation-section child paragraph (${structuralContext || sectionPolicy})`
            : isHardRequirementContext(structuralContext)
              ? `structural section prose (${structuralContext})`
              : "imperative/requirement-bearing paragraph",
          ids,
        );
        continue;
      }
      if (
        (sectionPolicy === "descriptive" || sectionPolicy === "mixed_source_hierarchy") &&
        isDescriptiveAllowlistRule(descriptiveRule)
      ) {
        cover(
          construct,
          "non_requirement",
          "DESCRIPTIVE_ALLOWLIST",
          DESCRIPTIVE_ALLOWLIST_RULES[descriptiveRule].description,
          [],
          {
            allowlistRule: descriptiveRule,
            sourceAnchor: `allowlist.${descriptiveRule}.L${line}`,
          },
        );
        continue;
      }
      // Fail closed: remaining prose in unknown contexts becomes a requirement.
      const ids = [];
      for (const [index, part] of splitAtomicObligations(text).entries()) {
        const item = pushItem(
          "evidence_requirement",
          part,
          line,
          `prose.${slug(section)}.${line}.${index + 1}`,
        );
        if (item) {
          ids.push(item.id);
        }
      }
      cover(construct, "requirement", "REQUIREMENT", "fail-closed prose default", ids);
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
  return {
    version: 3,
    authority: "frozen_plan",
    plan_path: FROZEN_PLAN_RELATIVE_PATH,
    plan_sha256: planSha256,
    classifications: ["IAP", "INPL", "PART", "OMIT", "DIFF", "BLOCK", "OUT"],
    kinds: [...PLAN_ITEM_KINDS],
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
