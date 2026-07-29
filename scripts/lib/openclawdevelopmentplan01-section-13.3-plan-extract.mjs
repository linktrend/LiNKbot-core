#!/usr/bin/env node
/**
 * Deterministic §13.3 item extraction from the frozen OpenClaw implementation plan.
 * The plan file bytes are the sole authority for required atomic items.
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
 * Stable fingerprint: anchor + normalized label (anchors are unique; identical
 * labels in different phases remain distinct items).
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
 * Split a comma/semicolon list without breaking parentheses.
 * @param {string} value
 */
export function splitPlanList(value) {
  const out = [];
  let current = "";
  let depth = 0;
  for (const ch of value) {
    if (ch === "(") {
      depth += 1;
    } else if (ch === ")") {
      depth = Math.max(0, depth - 1);
    }
    if ((ch === "," || ch === ";") && depth === 0) {
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
 * Extract every atomic §13.3-relevant item from plan markdown.
 * @param {string} planText
 */
export function extractPlanSection133Items(planText) {
  const lines = String(planText).split(/\n/);
  /** @type {ReturnType<typeof makeItem>[]} */
  const items = [];
  const push = (kind, label, line, anchor) => {
    if (!label || !String(label).trim()) {
      return;
    }
    items.push(makeItem(label, kind, anchor, line));
  };

  // §14 Cross-plan interface gates (numbered 1–11).
  {
    let active = false;
    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i];
      if (/^## 14\. Cross-Plan Interface Gates\b/.test(line)) {
        active = true;
        continue;
      }
      if (active && /^## /.test(line)) {
        break;
      }
      // Titles are bold including the trailing period: **Title.** body
      const match = line.match(/^(\d+)\.\s+\*\*(.+?)\.\*\*\s*(.*)$/);
      if (active && match) {
        push(
          "cross_plan_gate",
          `${match[2]}. ${match[3]}`.trim(),
          i + 1,
          `cross_plan_gate.${match[1]}`,
        );
      }
    }
  }

  // §15 Phases 0–15.
  let phase = /** @type {number | null} */ (null);
  /** @type {null | "work" | "scenarios" | "platform_evidence" | "sequence" | "prereq" | "inputs"} */
  let mode = null;
  let bulletIndex = 0;

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const phaseMatch = line.match(/^### Phase (\d+) — (.+)$/);
    if (phaseMatch) {
      phase = Number(phaseMatch[1]);
      mode = null;
      bulletIndex = 0;
      push("task", `Phase ${phase}: ${phaseMatch[2]}`, i + 1, `phase.${phase}.title`);
      continue;
    }
    if (phase == null) {
      continue;
    }
    if (/^## /.test(line) && !/^### /.test(line)) {
      phase = null;
      mode = null;
      continue;
    }

    if (/^\*\*Work:\*\*\s*$/.test(line)) {
      mode = "work";
      bulletIndex = 0;
      continue;
    }
    if (/^\*\*Tests:\*\*/.test(line)) {
      mode = null;
      const rest = line.replace(/^\*\*Tests:\*\*\s*/, "");
      splitPlanList(rest).forEach((entry, index) => {
        push("test", entry, i + 1, `phase.${phase}.test.${index + 1}`);
      });
      continue;
    }
    if (/^\*\*Deliverables:\*\*/.test(line)) {
      mode = null;
      const rest = line.replace(/^\*\*Deliverables:\*\*\s*/, "");
      splitPlanList(rest).forEach((entry, index) => {
        push("deliverable", entry, i + 1, `phase.${phase}.deliverable.${index + 1}`);
      });
      continue;
    }
    if (/^\*\*Exit gate:\*\*/.test(line)) {
      mode = null;
      push(
        "exit_gate",
        line.replace(/^\*\*Exit gate:\*\*\s*/, ""),
        i + 1,
        `phase.${phase}.exit_gate`,
      );
      continue;
    }
    if (/^\*\*Rollback(?: order)?:\*\*/.test(line)) {
      mode = null;
      push(
        "rollback",
        line.replace(/^\*\*Rollback(?: order)?:\*\*\s*/, ""),
        i + 1,
        `phase.${phase}.rollback`,
      );
      continue;
    }
    if (/^\*\*Evidence minimums:\*\*/.test(line)) {
      mode = null;
      const rest = line.replace(/^\*\*Evidence minimums:\*\*\s*/, "");
      const listPart = rest.split(/\.\s+(?=[A-Z])/)[0] ?? rest;
      splitPlanList(listPart).forEach((entry, index) => {
        push("evidence_requirement", entry, i + 1, `phase.${phase}.evidence_minimum.${index + 1}`);
      });
      continue;
    }
    if (/^\*\*Required failure\/recovery scenarios:\*\*/.test(line)) {
      mode = "scenarios";
      bulletIndex = 0;
      continue;
    }
    if (/^\*\*Platform-owned evidence:\*\*/.test(line)) {
      mode = "platform_evidence";
      bulletIndex = 0;
      continue;
    }
    if (/^\*\*Sequence:\*\*/.test(line)) {
      mode = "sequence";
      bulletIndex = 0;
      continue;
    }
    if (/^\*\*Inputs:\*\*/.test(line)) {
      mode = "inputs";
      bulletIndex = 0;
      continue;
    }
    if (/^\*\*Prerequisites:\*\*/.test(line)) {
      const rest = line.replace(/^\*\*Prerequisites:\*\*\s*/, "").trim();
      if (rest) {
        mode = null;
        splitPlanList(rest).forEach((entry, index) => {
          push("task", entry, i + 1, `phase.${phase}.prerequisite.${index + 1}`);
        });
      } else {
        mode = "prereq";
        bulletIndex = 0;
      }
      continue;
    }
    if (
      /^\*\*(Objective|OpenClaw owner|External owners|Primary files|Owner|Hard prerequisite|Window rule):\*\*/.test(
        line,
      )
    ) {
      mode = null;
      continue;
    }

    const bullet = line.match(/^- (.+)$/);
    const numbered = line.match(/^\d+\.\s+(.+)$/);
    if (mode === "work" && bullet) {
      bulletIndex += 1;
      push("task", bullet[1], i + 1, `phase.${phase}.work.${bulletIndex}`);
    } else if (mode === "scenarios" && bullet) {
      bulletIndex += 1;
      push("test", bullet[1], i + 1, `phase.${phase}.scenario.${bulletIndex}`);
    } else if (mode === "platform_evidence" && bullet) {
      bulletIndex += 1;
      push(
        "evidence_requirement",
        bullet[1],
        i + 1,
        `phase.${phase}.platform_evidence.${bulletIndex}`,
      );
    } else if (mode === "prereq" && bullet) {
      bulletIndex += 1;
      push("task", bullet[1], i + 1, `phase.${phase}.prerequisite.${bulletIndex}`);
    } else if (mode === "sequence" && (bullet || numbered)) {
      bulletIndex += 1;
      push(
        "task",
        bullet ? bullet[1] : numbered[1],
        i + 1,
        `phase.${phase}.sequence.${bulletIndex}`,
      );
    } else if (mode === "inputs" && (bullet || numbered)) {
      bulletIndex += 1;
      push(
        "evidence_requirement",
        bullet ? bullet[1] : numbered[1],
        i + 1,
        `phase.${phase}.input.${bulletIndex}`,
      );
    }
  }

  // §16.1 test layers table.
  {
    let active = false;
    let index = 0;
    for (let i = 0; i < lines.length; i += 1) {
      if (/^### 16\.1 Test layers\b/.test(lines[i])) {
        active = true;
        continue;
      }
      if (active && /^### /.test(lines[i])) {
        break;
      }
      const match = lines[i].match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$/);
      if (active && match && !/^[\s-:]+$/.test(match[1]) && match[1].trim() !== "Layer") {
        index += 1;
        push(
          "test",
          `${match[1].trim()}: ${match[2].trim()} — ${match[3].trim()}`,
          i + 1,
          `test.layer.${index}`,
        );
      }
    }
  }

  // §16.2 required invariants.
  {
    let active = false;
    let index = 0;
    for (let i = 0; i < lines.length; i += 1) {
      if (/^### 16\.2 Required invariants\b/.test(lines[i])) {
        active = true;
        continue;
      }
      if (active && /^### /.test(lines[i])) {
        break;
      }
      const match = lines[i].match(/^- (.+)$/);
      if (active && match) {
        index += 1;
        push("test", match[1], i + 1, `test.invariant.${index}`);
      }
    }
  }

  // §19 required runbooks.
  {
    let active = false;
    for (let i = 0; i < lines.length; i += 1) {
      if (/^## 19\. Operations and Runbooks\b/.test(lines[i])) {
        active = true;
        continue;
      }
      if (active && /^## /.test(lines[i])) {
        break;
      }
      const match = lines[i].match(/^(\d+)\.\s+(.+)\.$/);
      if (active && match) {
        push("deliverable", `Runbook: ${match[2]}`, i + 1, `runbook.${match[1]}`);
      }
    }
  }

  // §20 rollback matrix rows.
  {
    let active = false;
    let index = 0;
    for (let i = 0; i < lines.length; i += 1) {
      if (/^## 20\. Rollback Matrix\b/.test(lines[i])) {
        active = true;
        continue;
      }
      if (active && /^## /.test(lines[i])) {
        break;
      }
      const match = lines[i].match(
        /^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$/,
      );
      if (active && match && !/^[\s-:]+$/.test(match[1]) && match[1].trim() !== "Failure") {
        index += 1;
        push(
          "rollback",
          `${match[1].trim()}: ${match[2].trim()}`,
          i + 1,
          `rollback.matrix.${index}`,
        );
      }
    }
  }

  // §21 phase-handoff evidence fields.
  {
    let active = false;
    let index = 0;
    for (let i = 0; i < lines.length; i += 1) {
      if (/^## 21\. Evidence, Handoffs, and Verification Artifacts\b/.test(lines[i])) {
        active = true;
        continue;
      }
      if (active && /^### 21\.1\b/.test(lines[i])) {
        break;
      }
      const match = lines[i].match(/^- (.+)$/);
      if (active && match) {
        index += 1;
        push("evidence_requirement", match[1], i + 1, `evidence.handoff.${index}`);
      }
    }
  }

  // §21.1 Grok handoff evidence fields.
  {
    let active = false;
    let index = 0;
    for (let i = 0; i < lines.length; i += 1) {
      if (/^### 21\.1\b/.test(lines[i])) {
        active = true;
        continue;
      }
      if (active && (/^### /.test(lines[i]) || /^## /.test(lines[i]))) {
        break;
      }
      const match = lines[i].match(/^- (.+)$/);
      if (active && match) {
        index += 1;
        push("evidence_requirement", match[1], i + 1, `evidence.grok_handoff.${index}`);
      }
    }
  }

  // §22.1 launch-blocking gates.
  {
    let active = false;
    let index = 0;
    for (let i = 0; i < lines.length; i += 1) {
      if (/^### 22\.1 Launch-blocking gates\b/.test(lines[i])) {
        active = true;
        continue;
      }
      if (active && /^### /.test(lines[i])) {
        break;
      }
      const match = lines[i].match(/^- (.+)$/);
      if (active && match) {
        index += 1;
        push("gate", match[1], i + 1, `gate.launch_blocking.${index}`);
      }
    }
  }

  // §22.5 execution/verification risks.
  {
    let active = false;
    let index = 0;
    for (let i = 0; i < lines.length; i += 1) {
      if (/^### 22\.5 Execution and verification risks\b/.test(lines[i])) {
        active = true;
        continue;
      }
      if (active && (/^## /.test(lines[i]) || /^These risks\b/.test(lines[i]))) {
        break;
      }
      const match = lines[i].match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|$/);
      if (active && match && !/^[\s-:]+$/.test(match[1]) && match[1].trim() !== "Risk") {
        index += 1;
        push(
          "risk",
          `${match[1].trim()} — control: ${match[2].trim()}`,
          i + 1,
          `risk.execution.${index}`,
        );
      }
    }
  }

  // §23 definition-of-done statements.
  {
    let active = false;
    let section = "";
    let index = 0;
    for (let i = 0; i < lines.length; i += 1) {
      if (/^## 23\. Definition of Done\b/.test(lines[i])) {
        active = true;
        continue;
      }
      if (active && /^## /.test(lines[i])) {
        break;
      }
      const sectionMatch = lines[i].match(/^### (.+)$/);
      if (active && sectionMatch) {
        section = sectionMatch[1];
        continue;
      }
      const match = lines[i].match(/^- (.+)$/);
      if (active && match) {
        index += 1;
        push("dod", `[${section}] ${match[1].replace(/\.$/, "")}`, i + 1, `dod.${index}`);
      }
    }
  }

  return items;
}

/**
 * Load frozen plan, verify hash, extract items.
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
  const items = extractPlanSection133Items(planText);
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
  return {
    ok: errors.length === 0,
    errors,
    planPath,
    planSha256: actualSha,
    expectedSha256: expectedSha,
    items,
  };
}

/**
 * Build inventory JSON object from plan-derived items.
 * @param {ReturnType<typeof extractPlanSection133Items>} items
 * @param {string} planSha256
 */
export function buildInventoryFromPlanItems(items, planSha256) {
  return {
    version: 2,
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
  };
}
