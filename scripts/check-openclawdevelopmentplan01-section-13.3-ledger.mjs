#!/usr/bin/env node
/**
 * §13.3 conformance ledger validator.
 * Authority: frozen implementation plan bytes (pinned SHA-256), not a hand-edited inventory.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  FROZEN_PLAN_RELATIVE_PATH,
  FROZEN_PLAN_SHA256,
  PLAN_ITEM_KINDS,
  NON_REQUIREMENT_REASON_CODES,
  analyzePlanForSection133,
  buildInventoryFromPlanItems,
  extractPlanSection133Items,
  isFragmentedPlanLabel,
  isHardRequirementContext,
  isImperativeInstruction,
  lineHasBindingObligation,
  loadFrozenPlanItems,
  sha256Hex,
  splitAtomicObligations,
  tokenizePlanMarkdown,
} from "./lib/openclawdevelopmentplan01-section-13.3-plan-extract.mjs";
import { runAsScript } from "./lib/ts-guard-utils.mjs";

/** Grok completion claims — not Codex Phase-14 classifications. */
export const GROK_COMPLETION_CLAIMS = Object.freeze([
  "implemented",
  "blocked",
  "outside_ownership",
  "not_claimed",
]);

const KINDS = new Set(PLAN_ITEM_KINDS);
const CLAIMS = new Set(GROK_COMPLETION_CLAIMS);
const FORBIDDEN_CLASSIFICATIONS = new Set([
  "IAP",
  "INPL",
  "PART",
  "OMIT",
  "DIFF",
  "BLOCK",
  "OUT",
]);

const DEFAULT_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DEFAULT_INVENTORY = "docs/execution/openclawdevelopmentplan01/section-13.3/inventory.json";
const DEFAULT_LEDGER = "docs/execution/openclawdevelopmentplan01/section-13.3/ledger.csv";

const GENERIC_EVIDENCE_RE =
  /plan-derived item|local fake-tier \/ docs evidence on branch|codex verify classification|not live-proven\)\s*$/i;

/** Evidence that only points at extractor/validator/ledger tooling is forbidden for implemented claims. */
const TOOLING_SELF_EVIDENCE_RE =
  /section-13\.3-ledger\.mjs|section-13\.3-plan-extract\.mjs|section-13\.3\/(ledger\.csv|inventory\.json)/i;

/** Phase-0 underlying evidence paths (not the coverage tooling itself). */
const PHASE0_EVIDENCE_BY_ID = Object.freeze({
  "phase.0.title":
    "docs/execution/openclawdevelopmentplan01/PHASE-0-FREEZE-PACKET.md",
  "phase.0.objective":
    "docs/execution/openclawdevelopmentplan01/PHASE-0-FREEZE-PACKET.md",
  "phase.0.work.1":
    "docs/CURSOR-GROK-EXECUTION-PROMPT.md; docs/execution/openclawdevelopmentplan01/PHASE-0-FREEZE-PACKET.md §1 approved plan reference",
  "phase.0.work.2":
    "docs/execution/openclawdevelopmentplan01/PHASE-0-FREEZE-PACKET.md §2 frozen hashes (OpenClaw + Platform/Brain/Skills plan SHA-256)",
  "phase.0.work.3":
    "docs/execution/openclawdevelopmentplan01/contracts/brain/PIN.json; docs/execution/openclawdevelopmentplan01/contracts/skills/PIN.json; docs/execution/openclawdevelopmentplan01/contracts/platform/PIN.json; docs/execution/openclawdevelopmentplan01/PHASE-0-FREEZE-PACKET.md §3",
  "phase.0.work.4":
    "docs/execution/openclawdevelopmentplan01/PHASE-0-FREEZE-PACKET.md §5 boundary freeze",
  "phase.0.work.5":
    "docs/execution/openclawdevelopmentplan01/PHASE-0-FREEZE-PACKET.md; docs/agent-sessions/completed/cursor-local-mac-mini-lisa-openclawdevelopmentplan01-20260727-1648.md",
  "phase.0.work.6":
    "docs/execution/openclawdevelopmentplan01/PHASE-0-FREEZE-PACKET.md §6 active work / overlap inventory",
  "phase.0.work.7":
    "docs/execution/openclawdevelopmentplan01/PHASE-0-FREEZE-PACKET.md §4 ownership matrix / CODEOWNERS surfaces",
  "phase.0.work.8":
    "docs/execution/openclawdevelopmentplan01/PHASE-0-FREEZE-PACKET.md §5–§6 environment, credential, migration, retention, and external Cursor gates",
  "phase.0.deliverable.1":
    "docs/execution/openclawdevelopmentplan01/PHASE-0-FREEZE-PACKET.md; docs/CURSOR-GROK-EXECUTION-PROMPT.md; docs/execution/openclawdevelopmentplan01/contracts/",
  "phase.0.exit_gate":
    "docs/CURSOR-GROK-EXECUTION-PROMPT.md (Principal authorization); docs/execution/openclawdevelopmentplan01/PHASE-0-FREEZE-PACKET.md §1–§3",
});

/**
 * Parse a minimal RFC4180-ish CSV with quoted fields.
 * @param {string} text
 */
export function parseCsv(text) {
  const rows = [];
  let i = 0;
  const row = [];
  let field = "";
  let inQuotes = false;
  while (i < text.length) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i += 1;
        continue;
      }
      field += ch;
      i += 1;
      continue;
    }
    if (ch === '"') {
      inQuotes = true;
      i += 1;
      continue;
    }
    if (ch === ",") {
      row.push(field);
      field = "";
      i += 1;
      continue;
    }
    if (ch === "\n" || (ch === "\r" && text[i + 1] === "\n")) {
      row.push(field);
      field = "";
      if (row.length > 1 || row[0] !== "") {
        rows.push([...row]);
      }
      row.length = 0;
      i += ch === "\r" ? 2 : 1;
      continue;
    }
    field += ch;
    i += 1;
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

/**
 * Escape one CSV field.
 * @param {string} value
 */
export function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) {
    return `"${text.replaceAll('"', '""')}"`;
  }
  return `"${text}"`;
}

/**
 * Grok Phase-13 evidence mapping for a plan-derived requirement.
 * Does NOT assign Codex Phase-14 seven-value classifications.
 * Evidence strings must be specific; blanket reuse is rejected by the validator.
 * @param {{ id: string, kind: string, label: string }} item
 */
export function grokEvidenceMappingForPlanItem(item) {
  const id = item.id;
  const label = item.label;

  // Unexecuted rollback / closeout paths are never claimed implemented.
  if (item.kind === "rollback" || /\.rollback$/.test(id)) {
    return {
      owner: "OpenClaw (rollback path recorded, not executed)",
      evidence_location: `docs/execution/openclawdevelopmentplan01/PHASE-13-COVERAGE-EVIDENCE-INDEX.md#${id}`,
      completion_claim: "not_claimed",
      note: "Unexecuted rollback/recovery action; not claimed implemented",
    };
  }

  if (
    id.startsWith("phase.14.") ||
    id.startsWith("phase.15.") ||
    id === "phase.14.title" ||
    id === "phase.15.title" ||
    id.startsWith("cross_plan_gate.10") ||
    id.startsWith("cross_plan_gate.11") ||
    /codex verifier|coordinating verifier|principal accept/i.test(label)
  ) {
    return {
      owner: "OpenClaw Codex / LiNKbrain Codex / Principal",
      evidence_location:
        "OUT: OpenClaw Codex Phase-14 verification + Principal accept gate (see docs/execution/openclawdevelopmentplan01/PHASE-13-PROVISIONAL-GROK-HANDOFF.md)",
      completion_claim: "outside_ownership",
      note: "Outside Grok execution ownership; Codex assigns Phase-14 classifications",
    };
  }

  if (
    /^phase\.(7|8|9|10|11|12)\./.test(id) ||
    id.startsWith("gate.launch_blocking.") ||
    /^cross_plan_gate\.(1|2|3|4|6|7|8|9)\b/.test(id)
  ) {
    const phaseMatch = id.match(/^phase\.(\d+)/);
    const phase = phaseMatch?.[1];
    const blockedDoc =
      phase && ["8", "9", "10", "11", "12"].includes(phase)
        ? `docs/execution/openclawdevelopmentplan01/PHASE-${phase}-STATUS-BLOCKED.md`
        : "docs/execution/openclawdevelopmentplan01/PHASE-13-PROVISIONAL-GROK-HANDOFF.md";
    return {
      owner: "Platform / LiNKbrain / LiNKskills / Principal (named live gate)",
      evidence_location: `BLOCK: ${blockedDoc} (live/stage/production uncleared; Phases 7–12 not started)`,
      completion_claim: "blocked",
      note: "Live/stage/production or external-owner gate uncleared",
    };
  }

  if (/stage|production|live platform|principal-approved retention|cursor credential/i.test(label)) {
    return {
      owner: "Platform / Principal / Cursor maintenance (as labeled)",
      evidence_location:
        "BLOCK: live/external gate named in plan item; OpenClaw fake-tier work is not live proof (docs/execution/openclawdevelopmentplan01/PHASE-13-PROVISIONAL-GROK-HANDOFF.md)",
      completion_claim: "blocked",
      note: "Label requires live/external proof beyond fake-tier OpenClaw work",
    };
  }

  if (item.kind === "assumption" || id.startsWith("assumption.verify.")) {
    return {
      owner: "OpenClaw Codex / named upstream owner",
      evidence_location:
        "OUT: plan §22.4 assumption verification owned by independent verifier (docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md)",
      completion_claim: "outside_ownership",
      note: "Assumption requires independent verification; not Grok-classified",
    };
  }

  if (id.startsWith("next_action.") || id.startsWith("verifier.role_separation.") || id.startsWith("gate.principal.")) {
    return {
      owner: "Principal / OpenClaw Codex",
      evidence_location:
        "OUT: Principal/verifier gate in plan §21–§24 (docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md)",
      completion_claim: "outside_ownership",
      note: "Principal/verifier gate or next-action ownership",
    };
  }

  if (Object.prototype.hasOwnProperty.call(PHASE0_EVIDENCE_BY_ID, id)) {
    const base = PHASE0_EVIDENCE_BY_ID[id];
    return {
      owner: "OpenClaw Grok (Phase 0 freeze packet)",
      evidence_location: `${base} [plan-item:${id}]`,
      completion_claim: "implemented",
      note: "Phase 0 freeze/approval evidence on branch (not extractor/validator tooling)",
    };
  }

  // Default: map ownership + coverage pointer without claiming implementation or
  // inventing a Codex Phase-14 classification. Codex assigns IAP/INPL/PART/OMIT/DIFF/BLOCK/OUT.
  return {
    owner: "OpenClaw (Grok Phase-13 coverage index; Codex classifies)",
    evidence_location: `docs/execution/openclawdevelopmentplan01/PHASE-13-COVERAGE-EVIDENCE-INDEX.md#${id}`,
    completion_claim: "not_claimed",
    note: "No specific Grok implementation claim; Codex assigns Phase-14 classification from independent evidence review",
  };
}

/**
 * @deprecated Removed — Grok must not emit Phase-14 classifications.
 */
export function provisionalClassificationForPlanItem() {
  throw new Error(
    "provisionalClassificationForPlanItem removed: Grok owns Phase-13 evidence mapping only; Codex owns Phase-14 classifications",
  );
}

/**
 * @param {ReturnType<typeof extractPlanSection133Items>} items
 */
export function buildLedgerCsvFromPlanItems(items) {
  const header = [
    "id",
    "kind",
    "item",
    "owner",
    "evidence_location",
    "completion_claim",
    "note",
    "anchor",
    "line",
    "fingerprint",
  ];
  const rows = [header.map(csvEscape).join(",")];
  for (const item of items) {
    const mapping = grokEvidenceMappingForPlanItem(item);
    rows.push(
      [
        item.id,
        item.kind,
        item.label,
        mapping.owner,
        mapping.evidence_location,
        mapping.completion_claim,
        mapping.note,
        item.anchor,
        String(item.line),
        item.fingerprint,
      ]
        .map(csvEscape)
        .join(","),
    );
  }
  return `${rows.join("\n")}\n`;
}

/**
 * Validate inventory + ledger against plan-derived authority.
 * @param {{
 *   root?: string,
 *   inventoryPath?: string,
 *   ledgerPath?: string,
 *   planPath?: string,
 *   expectedSha256?: string,
 *   planText?: string,
 * }} [opts]
 */
export function validateSection133Ledger(opts = {}) {
  const root = opts.root ?? DEFAULT_ROOT;
  const inventoryPath = path.join(root, opts.inventoryPath ?? DEFAULT_INVENTORY);
  const ledgerPath = path.join(root, opts.ledgerPath ?? DEFAULT_LEDGER);
  /** @type {string[]} */
  const errors = [];

  const loaded = loadFrozenPlanItems({
    root,
    planPath: opts.planPath,
    expectedSha256: opts.expectedSha256,
    planText: opts.planText,
  });
  errors.push(...loaded.errors);
  const required = loaded.items;
  const requiredById = new Map(required.map((item) => [item.id, item]));

  if (!fs.existsSync(inventoryPath)) {
    errors.push(`missing inventory: ${inventoryPath}`);
  }
  if (!fs.existsSync(ledgerPath)) {
    errors.push(`missing ledger: ${ledgerPath}`);
    return {
      ok: false,
      errors,
      rowCount: 0,
      requiredCount: required.length,
      planSha256: loaded.planSha256,
    };
  }

  if (fs.existsSync(inventoryPath)) {
    let inventory;
    try {
      inventory = JSON.parse(fs.readFileSync(inventoryPath, "utf8"));
    } catch (error) {
      errors.push(`inventory JSON parse failed: ${String(error)}`);
      inventory = null;
    }
    if (inventory) {
      if (inventory.authority !== "frozen_plan") {
        errors.push('inventory.authority must be "frozen_plan"');
      }
      if (inventory.plan_sha256 !== loaded.expectedSha256) {
        errors.push(
          `inventory plan_sha256 mismatch: inventory=${inventory.plan_sha256} expected=${loaded.expectedSha256}`,
        );
      }
      if (
        inventory.plan_path !== FROZEN_PLAN_RELATIVE_PATH &&
        inventory.plan_path !== opts.planPath
      ) {
        // Allow test overrides when planPath is provided.
        if (!opts.planPath) {
          errors.push(`inventory.plan_path must be ${FROZEN_PLAN_RELATIVE_PATH}`);
        }
      }
      const inventoryItems = Array.isArray(inventory.items) ? inventory.items : [];
      const inventoryIds = inventoryItems.map((item) => item.id);
      if (new Set(inventoryIds).size !== inventoryIds.length) {
        errors.push("inventory contains duplicate ids");
      }
      const inventoryById = new Map(inventoryItems.map((item) => [item.id, item]));
      for (const planItem of required) {
        const inv = inventoryById.get(planItem.id);
        if (!inv) {
          errors.push(`inventory omitted plan item: ${planItem.id}`);
          continue;
        }
        if (inv.kind !== planItem.kind) {
          errors.push(`inventory kind drift for ${planItem.id}`);
        }
        if (inv.label !== planItem.label) {
          errors.push(`inventory label drift for ${planItem.id}`);
        }
        if (inv.anchor !== planItem.anchor) {
          errors.push(`inventory anchor drift for ${planItem.id}`);
        }
        if (inv.fingerprint !== planItem.fingerprint) {
          errors.push(`inventory fingerprint drift for ${planItem.id}`);
        }
        if (Number(inv.line) !== planItem.line) {
          errors.push(`inventory line drift for ${planItem.id}`);
        }
      }
      for (const inv of inventoryItems) {
        if (!requiredById.has(inv.id)) {
          errors.push(`invented inventory mirror row not in plan: ${inv.id}`);
          continue;
        }
        if ("classification" in inv) {
          errors.push(`inventory item ${inv.id} must not include Codex classification`);
        }
        for (const key of ["owner", "evidence_location", "completion_claim", "note"]) {
          if (typeof inv[key] !== "string" || String(inv[key]).trim() === "") {
            errors.push(`inventory item ${inv.id} missing ${key}`);
          }
        }
        if (inv.completion_claim && !CLAIMS.has(String(inv.completion_claim))) {
          errors.push(`inventory item ${inv.id} invalid completion_claim ${inv.completion_claim}`);
        }
        if (
          FORBIDDEN_CLASSIFICATIONS.has(String(inv.completion_claim || "").toUpperCase()) &&
          String(inv.completion_claim).length <= 4
        ) {
          errors.push(`inventory item ${inv.id} completion_claim looks like Phase-14 classification`);
        }
      }
      // Fail-closed source coverage: inventory must retain the analyzer coverage map.
      const expectedCoverage = Array.isArray(loaded.coverage) ? loaded.coverage : [];
      const inventoryCoverage = Array.isArray(inventory.coverage) ? inventory.coverage : [];
      if (inventory.version !== 4) {
        errors.push(`inventory.version must be 4 (got ${inventory.version})`);
      }
      if (Array.isArray(inventory.classifications) || inventory.classifications) {
        errors.push(
          "inventory must not include classifications (Codex owns Phase-14 classifications)",
        );
      }
      if (!Array.isArray(inventory.coverage)) {
        errors.push("inventory.coverage missing; fail-closed source coverage required");
      } else if (inventoryCoverage.length !== expectedCoverage.length) {
        errors.push(
          `inventory.coverage count mismatch: inventory=${inventoryCoverage.length} expected=${expectedCoverage.length}`,
        );
      } else {
        const coverageByAnchor = new Map(
          inventoryCoverage.map((entry) => [entry.anchor, entry]),
        );
        for (const expected of expectedCoverage) {
          const got = coverageByAnchor.get(expected.anchor);
          if (!got) {
            errors.push(`inventory omitted coverage anchor: ${expected.anchor}`);
            continue;
          }
          if (got.disposition !== expected.disposition) {
            errors.push(`inventory coverage disposition drift for ${expected.anchor}`);
          }
          if (got.fingerprint !== expected.fingerprint) {
            errors.push(`inventory coverage fingerprint drift for ${expected.anchor}`);
          }
          if (got.disposition === "unhandled") {
            errors.push(`inventory retains unhandled source construct: ${expected.anchor}`);
          }
        }
        for (const got of inventoryCoverage) {
          if (got.disposition === "unhandled") {
            errors.push(`unhandled source construct in inventory coverage: ${got.anchor}`);
          }
          if (got.disposition === "non_requirement") {
            if (!got.reasonCode || typeof got.reasonCode !== "string") {
              errors.push(`non_requirement missing reasonCode at ${got.anchor}`);
            } else if (!NON_REQUIREMENT_REASON_CODES.includes(got.reasonCode)) {
              errors.push(
                `non_requirement invalid reasonCode ${got.reasonCode} at ${got.anchor}`,
              );
            }
            if (got.sourceContext === undefined || got.sourceContext === null) {
              errors.push(`non_requirement missing sourceContext at ${got.anchor}`);
            }
            if (got.reasonCode === "DESCRIPTIVE_ALLOWLIST") {
              errors.push(
                `legacy DESCRIPTIVE_ALLOWLIST forbidden at ${got.anchor}; use exact DESCRIPTIVE_EXCLUSION`,
              );
            }
            if (
              (got.type === "list_item" ||
                got.type === "numbered_item" ||
                got.type === "table_row") &&
              got.reasonCode === "NARRATIVE_CONTEXT"
            ) {
              errors.push(
                `forbidden NARRATIVE_CONTEXT on ${got.type} at ${got.anchor}; require DESCRIPTIVE_EXCLUSION or extract as requirement`,
              );
            }
            if (got.reasonCode === "DESCRIPTIVE_EXCLUSION") {
              if (!got.exclusionId || typeof got.exclusionId !== "string") {
                errors.push(`DESCRIPTIVE_EXCLUSION missing exclusionId at ${got.anchor}`);
              }
              if (!got.exclusionReason || typeof got.exclusionReason !== "string") {
                errors.push(`DESCRIPTIVE_EXCLUSION missing exclusionReason at ${got.anchor}`);
              }
              if (
                !got.sourceAnchor ||
                typeof got.sourceAnchor !== "string" ||
                !String(got.sourceAnchor).startsWith("exclusion.")
              ) {
                errors.push(`DESCRIPTIVE_EXCLUSION missing sourceAnchor at ${got.anchor}`);
              }
              if (!got.fingerprint || typeof got.fingerprint !== "string") {
                errors.push(`DESCRIPTIVE_EXCLUSION missing fingerprint at ${got.anchor}`);
              }
              const sourceText = String(got.text ?? "");
              if (
                lineHasBindingObligation(sourceText) ||
                /sha-256\s*`[a-f0-9]{64}`/i.test(sourceText) ||
                (/^\|\s*[1-6]\s*\|/.test(sourceText.trim()) &&
                  /\b(authority|approval|credential|gateway|contract|ownership)\b/i.test(
                    sourceText,
                  ))
              ) {
                errors.push(
                  `DESCRIPTIVE_EXCLUSION cannot exclude binding source-authority/obligation row at ${got.anchor}`,
                );
              }
            }
            if (
              (got.type === "list_item" ||
                got.type === "numbered_item" ||
                got.type === "table_row") &&
              got.reasonCode !== "DESCRIPTIVE_EXCLUSION" &&
              got.reasonCode !== "STRUCTURAL_TABLE_HEADER" &&
              got.reasonCode !== "STRUCTURAL_EMPTY_TABLE_ROW" &&
              got.reasonCode !== "STRUCTURAL_ENUM_DEFINITION"
            ) {
              errors.push(
                `forbidden non_requirement ${got.reasonCode} on ${got.type} outside exact descriptive exclusion at ${got.anchor}`,
              );
            }
            if (got.reasonCode === "STRUCTURAL_ENUM_DEFINITION") {
              const enumText = String(got.text ?? "");
              if (
                !/implemented and proven|implemented but not proven live|partially implemented|omitted|implemented differently from plan|blocked by another repository|outside the execution agent/i.test(
                  enumText,
                )
              ) {
                errors.push(
                  `STRUCTURAL_ENUM_DEFINITION is not a §13.3 classification enum at ${got.anchor}`,
                );
              }
            }
            if (
              got.reasonCode === "INTRO_OPENS_FOLLOWING_LIST" &&
              lineHasBindingObligation(String(got.text ?? ""))
            ) {
              errors.push(
                `INTRO_OPENS_FOLLOWING_LIST carries binding language at ${got.anchor}`,
              );
            }
          }
        }
      }
      if (!Array.isArray(inventory.kinds) || !inventory.kinds.includes("assumption")) {
        errors.push('inventory.kinds must include "assumption"');
      }
    }
  }

  const csvRows = parseCsv(fs.readFileSync(ledgerPath, "utf8"));
  if (csvRows.length < 2) {
    errors.push("ledger.csv has no data rows");
    return {
      ok: false,
      errors,
      rowCount: 0,
      requiredCount: required.length,
      planSha256: loaded.planSha256,
    };
  }
  const header = csvRows[0];
  const expectedHeader = [
    "id",
    "kind",
    "item",
    "owner",
    "evidence_location",
    "completion_claim",
    "note",
    "anchor",
    "line",
    "fingerprint",
  ];
  if (JSON.stringify(header) !== JSON.stringify(expectedHeader)) {
    errors.push(`ledger header mismatch: got ${JSON.stringify(header)}`);
  }
  if (header.includes("classification")) {
    errors.push(
      "Grok-owned coverage ledger must not include classification column (Codex owns Phase-14 classifications)",
    );
  }

  const seen = new Set();
  const seenAnchors = new Set();
  const seenFingerprints = new Set();
  /** @type {Map<string, string[]>} */
  const evidenceOwners = new Map();
  let evidenceMapped = 0;
  for (let index = 1; index < csvRows.length; index += 1) {
    const cells = csvRows[index];
    const line = index + 1;
    if (cells.length !== expectedHeader.length) {
      errors.push(`line ${line}: expected ${expectedHeader.length} columns, got ${cells.length}`);
      continue;
    }
    const [
      id,
      kind,
      item,
      owner,
      evidenceLocation,
      completionClaim,
      note,
      anchor,
      srcLine,
      fingerprint,
    ] = cells;
    if (!id) {
      errors.push(`line ${line}: empty id`);
      continue;
    }
    if (seen.has(id)) {
      errors.push(`duplicate ledger id: ${id}`);
    }
    seen.add(id);
    const planItem = requiredById.get(id);
    if (!planItem) {
      errors.push(`invented ledger row without exact plan source item: ${id}`);
      continue;
    }
    if (kind !== planItem.kind || !KINDS.has(kind)) {
      errors.push(`${id}: kind mismatch/invalid (${kind})`);
    }
    if (item !== planItem.label) {
      errors.push(`${id}: ledger item text does not match plan source`);
    }
    if (isFragmentedPlanLabel(item)) {
      errors.push(`${id}: fragmented single-token plan label forbidden: ${item}`);
    }
    if (anchor !== planItem.anchor) {
      errors.push(`${id}: ledger anchor does not match plan source`);
    }
    if (fingerprint !== planItem.fingerprint) {
      errors.push(`${id}: ledger fingerprint does not match plan source`);
    }
    if (String(srcLine) !== String(planItem.line)) {
      errors.push(`${id}: ledger line does not match plan source`);
    }
    if (seenAnchors.has(anchor)) {
      errors.push(`duplicate ledger anchor: ${anchor}`);
    }
    seenAnchors.add(anchor);
    if (seenFingerprints.has(fingerprint)) {
      errors.push(`duplicate ledger fingerprint: ${fingerprint}`);
    }
    seenFingerprints.add(fingerprint);
    if (FORBIDDEN_CLASSIFICATIONS.has(String(completionClaim).toUpperCase()) && completionClaim.length <= 4) {
      errors.push(`${id}: completion_claim looks like a Phase-14 classification: ${completionClaim}`);
    }
    if (!CLAIMS.has(completionClaim)) {
      errors.push(`${id}: invalid completion_claim ${JSON.stringify(completionClaim)}`);
    }
    if (!owner || !String(owner).trim()) {
      errors.push(`${id}: empty owner`);
    }
    if (!evidenceLocation || !String(evidenceLocation).trim()) {
      errors.push(`${id}: empty evidence_location`);
    }
    if (!note || !String(note).trim()) {
      errors.push(`${id}: empty note`);
    }
    if (GENERIC_EVIDENCE_RE.test(evidenceLocation)) {
      errors.push(`${id}: generic blanket evidence_location forbidden`);
    }
    if (completionClaim === "implemented") {
      if (
        !/^(extensions\/|docs\/|test\/|scripts\/|packages\/)/.test(evidenceLocation) &&
        !evidenceLocation.includes("extensions/") &&
        !evidenceLocation.includes("docs/") &&
        !evidenceLocation.includes("scripts/") &&
        !evidenceLocation.includes("test/")
      ) {
        errors.push(`${id}: implemented claim requires specific code/test/doc/config evidence path`);
      }
      if (!evidenceLocation.includes(`[plan-item:${id}]`)) {
        errors.push(`${id}: implemented evidence must include [plan-item:${id}] specificity marker`);
      }
      if (GENERIC_EVIDENCE_RE.test(evidenceLocation)) {
        errors.push(`${id}: generic blanket evidence_location forbidden for implemented claim`);
      }
      if (TOOLING_SELF_EVIDENCE_RE.test(evidenceLocation)) {
        errors.push(
          `${id}: implemented evidence must identify underlying Phase artifacts, not extractor/validator/ledger tooling`,
        );
      }
      if (planItem.kind === "rollback" || /\.rollback$/.test(id)) {
        errors.push(`${id}: unexecuted rollback must not be claimed implemented`);
      }
      evidenceMapped += 1;
      const base = evidenceLocation.replace(/\s*\[plan-item:[^\]]+\]\s*$/i, "").trim();
      const implBucket = evidenceOwners.get(`implemented::${base}`) ?? [];
      implBucket.push(id);
      evidenceOwners.set(`implemented::${base}`, implBucket);
    }
    if (completionClaim === "blocked" && !/^BLOCK:/i.test(evidenceLocation)) {
      errors.push(`${id}: blocked claim must name BLOCK: owning gate/document`);
    }
    if (completionClaim === "outside_ownership" && !/^OUT:/i.test(evidenceLocation)) {
      errors.push(`${id}: outside_ownership claim must name OUT: owning repository/interface`);
    }
    const bucket = evidenceOwners.get(evidenceLocation) ?? [];
    bucket.push(id);
    evidenceOwners.set(evidenceLocation, bucket);
  }

  for (const [evidence, ids] of evidenceOwners) {
    if (!evidence.startsWith("implemented::")) {
      continue;
    }
    if (ids.length < 8) {
      continue;
    }
    errors.push(
      `generic implemented evidence reused across ${ids.length} unrelated items: ${evidence.slice(0, 120)}`,
    );
  }

  for (const planItem of required) {
    if (!seen.has(planItem.id)) {
      errors.push(`omitted plan item from ledger: ${planItem.id}`);
    }
    if (isFragmentedPlanLabel(planItem.label)) {
      errors.push(`plan extraction produced fragmented label: ${planItem.id}=${planItem.label}`);
    }
  }

  // Explicit anti-grouping: Phases 7–12 must each appear as distinct title rows.
  for (const phase of [7, 8, 9, 10, 11, 12]) {
    const titleId = `phase.${phase}.title`;
    if (!seen.has(titleId) && requiredById.has(titleId)) {
      errors.push(`Phases 7-12 must be ungrouped; missing ${titleId}`);
    }
  }

  return {
    ok: errors.length === 0,
    errors,
    rowCount: seen.size,
    requiredCount: required.length,
    coverageCount: Array.isArray(loaded.coverage) ? loaded.coverage.length : 0,
    planSha256: loaded.planSha256,
    descriptiveExclusions: listDescriptiveExclusions(loaded.coverage),
    evidenceMappedCount: evidenceMapped,
  };
}

/**
 * Independent-review listing of exact-line descriptive exclusions.
 * @param {unknown[]} coverage
 */
export function listDescriptiveExclusions(coverage) {
  return (Array.isArray(coverage) ? coverage : [])
    .filter((entry) => entry && entry.reasonCode === "DESCRIPTIVE_EXCLUSION")
    .map((entry) => ({
      id: entry.exclusionId,
      reason: entry.exclusionReason,
      line: entry.line,
      type: entry.type,
      anchor: entry.sourceAnchor || entry.anchor,
      fingerprint: entry.fingerprint,
      text: entry.text,
    }));
}

/**
 * Regenerate inventory.json + ledger.csv from the frozen plan.
 * @param {{ root?: string }} [opts]
 */
export function writeSection133ArtifactsFromPlan(opts = {}) {
  const root = opts.root ?? DEFAULT_ROOT;
  const loaded = loadFrozenPlanItems({ root });
  if (!loaded.ok) {
    throw new Error(loaded.errors.join("\n"));
  }
  /** @type {Map<string, ReturnType<typeof grokEvidenceMappingForPlanItem>>} */
  const evidenceMaps = new Map(
    loaded.items.map((item) => [item.id, grokEvidenceMappingForPlanItem(item)]),
  );
  const inventory = buildInventoryFromPlanItems(
    loaded.items,
    loaded.planSha256,
    loaded.coverage,
    evidenceMaps,
  );
  const inventoryPath = path.join(root, DEFAULT_INVENTORY);
  const ledgerPath = path.join(root, DEFAULT_LEDGER);
  fs.mkdirSync(path.dirname(inventoryPath), { recursive: true });
  fs.writeFileSync(inventoryPath, `${JSON.stringify(inventory, null, 2)}\n`);
  fs.writeFileSync(ledgerPath, buildLedgerCsvFromPlanItems(loaded.items));
  const evidenceMappedCount = [...evidenceMaps.values()].filter(
    (mapping) => mapping.completion_claim === "implemented",
  ).length;
  const descriptiveExclusionCount = (loaded.coverage || []).filter(
    (entry) => entry && entry.reasonCode === "DESCRIPTIVE_EXCLUSION",
  ).length;
  return {
    inventoryPath,
    ledgerPath,
    itemCount: loaded.items.length,
    coverageCount: loaded.coverage.length,
    descriptiveExclusionCount,
    evidenceMappedCount,
    planSha256: loaded.planSha256,
  };
}

/**
 * CLI entry.
 * @param {string[]} [argv]
 * @param {{ stdout?: { write(s: string): void }, stderr?: { write(s: string): void } }} [io]
 */
export async function main(argv, io) {
  const args = Array.isArray(argv) ? argv : process.argv.slice(2);
  const streams = io ?? process;
  const out = streams.stdout ?? process.stdout;
  const err = streams.stderr ?? process.stderr;
  if (args.includes("--write")) {
    const written = writeSection133ArtifactsFromPlan();
    out.write(
      `Wrote plan-derived §13.3 artifacts (${written.itemCount} requirement items, ${written.descriptiveExclusionCount} descriptive exclusions, ${written.evidenceMappedCount} evidence-mapped implemented claims, ${written.coverageCount} coverage rows; plan ${written.planSha256}). Grok owns Phase-13 coverage/evidence only; Codex owns Phase-14 classifications.\n`,
    );
    return 0;
  }
  const json = args.includes("--json");
  const result = validateSection133Ledger();
  if (json) {
    out.write(`${JSON.stringify(result, null, 2)}\n`);
  } else if (result.ok) {
    out.write(
      `Section 13.3 ledger OK (${result.rowCount}/${result.requiredCount} plan-derived rows; evidence-mapped=${result.evidenceMappedCount}; plan ${result.planSha256}).\n`,
    );
    const exclusions = Array.isArray(result.descriptiveExclusions)
      ? result.descriptiveExclusions
      : [];
    out.write(`Descriptive exclusions for independent review: ${exclusions.length}\n`);
    for (const exclusion of exclusions) {
      out.write(
        `- ${exclusion.id} L${exclusion.line} ${exclusion.type} fp=${String(exclusion.fingerprint).slice(0, 12)}… :: ${exclusion.reason}\n`,
      );
    }
  } else {
    err.write(`Section 13.3 ledger FAILED (${result.errors.length} errors):\n`);
    for (const error of result.errors.slice(0, 80)) {
      err.write(`- ${error}\n`);
    }
    if (result.errors.length > 80) {
      err.write(`- ... ${result.errors.length - 80} more\n`);
    }
  }
  return result.ok ? 0 : 1;
}

export {
  FROZEN_PLAN_RELATIVE_PATH,
  FROZEN_PLAN_SHA256,
  NON_REQUIREMENT_REASON_CODES,
  analyzePlanForSection133,
  extractPlanSection133Items,
  isFragmentedPlanLabel,
  isHardRequirementContext,
  isImperativeInstruction,
  lineHasBindingObligation,
  loadFrozenPlanItems,
  sha256Hex,
  splitAtomicObligations,
  tokenizePlanMarkdown,
};

runAsScript(import.meta.url, async () => {
  process.exitCode = await main(process.argv.slice(2), process);
});
