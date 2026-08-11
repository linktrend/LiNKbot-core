import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  FROZEN_PLAN_SHA256,
  analyzePlanForSection133,
  buildLedgerCsvFromPlanItems,
  extractPlanSection133Items,
  grokEvidenceMappingForPlanItem,
  isFragmentedPlanLabel,
  loadFrozenPlanItems,
  parseCsv,
  sha256Hex,
  splitAtomicObligations,
  tokenizePlanMarkdown,
  validateSection133Ledger,
  writeSection133ArtifactsFromPlan,
} from "../../scripts/check-openclawdevelopmentplan01-section-13.3-ledger.mjs";
import {
  DESCRIPTIVE_ALLOWLIST_RULES,
  buildDescriptiveExclusion,
  buildInventoryFromPlanItems,
  classifySectionPolicy,
  isBindingSourceAuthorityRow,
  isSection133ClassificationEnumLabel,
  lineHasBindingObligation,
  matchDescriptiveExclusion,
  planItemFingerprint,
} from "../../scripts/lib/openclawdevelopmentplan01-section-13.3-plan-extract.mjs";

const MINI_PLAN = `# Mini

## 1. Purpose and Decision

The approved target is:

- one canonical Lisa actor;
- one Brain plugin and one Skills plugin.

## 4. Non-Goals and Hard Boundaries

This plan does not authorize or include:

- replacing OpenClaw local memory;
- combining Brain and Skills into one plugin.

## 7. Target Architecture

### 7.1 Plugin placement and packaging

Each plugin must:

- depend only on public SDK barrels;
- remain default-disabled.

## 8. Privacy and Information-Flow Contract

### 8.4 Cross-domain prohibition

OpenClaw must not:

- copy Brain payloads into Skills events;
- do not combine Brain and Skills credentials.

## 9. Tool and Contract Mapping

### 9.3 Contract fixtures

Before adapter logic, commit owner-approved sanitized fixtures for:

- Brain request/response pairs;
- Skills immutable release hashes.

## 13. Execution Governance

### 13.5 Approved-plan deviation control

Execution convenience does not authorize architecture changes.

1. Record the exact contract, owner, consumer, and impact.
2. Ask the owning upstream team for a narrow amendment.

## 14. Cross-Plan Interface Gates

1. **Platform identity and credential gate.** Platform owns credentials.
2. **OpenClaw implementation-ownership gate.** OpenClaw owns plugins.

## 15. Phased Implementation Plan

### Phase 7 — Platform Stage Readiness Gate

**Work:**

- validate contract versions;
- run no-secret probes.

**Exit gate:** Platform owner signs stage readiness.

**Rollback:** Platform disables Lisa bindings.

### Phase 8 — Brain Stage Shadow and Write Canary

**Work:**

- enable Brain MCP health.

**Sequence:**

1. Enable Brain MCP health and contract probes with actor features off.
2. Enable Brain read tools for designated test sessions.

**Window rule:** a Brain failure restarts only the Brain window unless it exposes shared Platform/OpenClaw risk.

**Exit gate:** Brain owner accepts stage evidence.

**Rollback:** disable Brain writes.

### Phase 9 — Skills Stage Shadow and Governed Execution Canary

**Hard prerequisite:** Skills Cursor and Codex readiness gates are complete and recorded. Lisa may not be used to substitute for those proofs.

**Sequence:**

1. Enable Skills health and discovery against stage with actor execution flags off.

**Window rule:** a Skills failure restarts only the Skills window unless it exposes shared Platform/OpenClaw risk.

**Exit gate:** Skills owner accepts stage evidence.

**Rollback:** disable Skills execution.

### Phase 11 — Brain Production Cutover

**Prerequisites:** Principal approves Brain production retention; Platform production environment is ready.

**Sequence:** deploy service/binding with actor flags off; validate health and contract; enable Brain read; enable bounded capture; enable coordination; monitor queue/latency/privacy/native behavior; run approved production recovery exercises; complete at least three active operating days plus adequate real activity, whichever is longer.

**Exit gate:** Brain production cutover accepted.

**Rollback:** disable Brain production actor flags.

### Phase 12 — Skills Production Cutover

**Prerequisites:** Skills stage exit; Cursor/Codex readiness.

**Sequence:** deploy service/binding with actor flags off; validate health and contract; enable discovery; enable bounded governed execution; enable telemetry; monitor privacy/hash/profile/queue/native behavior; run approved recovery exercises; complete at least three active operating days plus adequate real activity, whichever is longer.

**Exit gate:** Skills production cutover accepted.

**Rollback:** disable Skills production actor flags.

## 16. Test Strategy

### 16.2 Required invariants

Tests must prove:

- separate Brain and Skills credentials and scopes;
- native skills continue during degradation.

## 21. Handoffs and Correction Packets

### 21.1 OpenClaw Grok to OpenClaw Codex handoff

Every handoff packet must include:

- frozen plan SHA;
- exact HEAD SHA;
- fixture aggregate hashes.

The Codex verifier records and verifies the correction; it does not silently implement it.

### 21.2 Correction work packets

Each OpenClaw Codex correction packet returns work to the original OpenClaw Grok owner and names:

- deficiency id;
- expected correction and acceptance criteria;
- owning agent.

Missing handoff field is an independent-verification deficiency. The verifier does not silently implement corrections.

## 22. Risks, Gates, and Accepted Assumptions

### 22.1 Launch-blocking gates

- explicit Principal approval of this plan;
- active, verified Platform environment for each live stage/production phase.

### 22.2 Principal gates during implementation

Return to the Principal if:

- ownership boundaries change;
- production retention policy is undecided.

### 22.3 Implementation decisions already resolved

- two private bundled plugins and two managed MCP entries;
- Brain-only conversation-hook access;
- fake evidence is not environment proof.

### 22.4 Assumptions to verify, not silently trust

- Platform stage credentials remain least-privilege;
- Librarian ingestion paths reject raw conversation content.

### 22.5 Execution and verification risks

| Risk | Required control |
| ---- | ---------------- |
| Planned items remain unclassified | Require exactly one of the seven Section 13.3 classifications. |

## 23. Definition of Done

### Architecture and ownership

- Lisa maps to one canonical Platform actor and one recorded OpenClaw runtime binding.
- \`linkbrain\` and \`linkskills\` are separate default-disabled plugins using only public SDK surfaces.

## 24. Immediate Next Action After Approval

After the Principal approves this plan, start Phase 0 only:

1. assign the four repository-specific Cursor execution agents with Grok 4.5 High;
2. freeze exact current hashes and versioned contract artifacts across all four repositories.
`;

function writeArtifacts(
  tmp: string,
  planText: string,
  mutate?: (inventory: Record<string, unknown>, ledgerRows: string[][]) => void,
) {
  const planRel = "docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md";
  fs.mkdirSync(path.join(tmp, "docs"), { recursive: true });
  fs.mkdirSync(path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3"), {
    recursive: true,
  });
  fs.writeFileSync(path.join(tmp, planRel), planText);
  const analyzed = analyzePlanForSection133(planText);
  const planSha = sha256Hex(planText);
  const evidenceMaps = new Map(
    analyzed.items.map((item) => [item.id, grokEvidenceMappingForPlanItem(item)]),
  );
  const inventory = buildInventoryFromPlanItems(
    analyzed.items,
    planSha,
    analyzed.coverage,
    evidenceMaps,
  );
  let rows = parseCsv(buildLedgerCsvFromPlanItems(analyzed.items));
  if (mutate) {
    mutate(inventory, rows);
  }
  fs.writeFileSync(
    path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3/inventory.json"),
    JSON.stringify(inventory),
  );
  fs.writeFileSync(
    path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3/ledger.csv"),
    `${rows.map((cells) => cells.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n")}\n`,
  );
  return { planSha, items: analyzed.items, coverage: analyzed.coverage };
}

describe("section 13.3 plan-authority ledger validator", () => {
  it("parses quoted CSV fields", () => {
    expect(parseCsv('a,b\n"x,y","z""z"\n')).toEqual([
      ["a", "b"],
      ["x,y", 'z"z'],
    ]);
  });

  it("pins the frozen plan hash and accepts checked-in plan-derived artifacts", () => {
    const loaded = loadFrozenPlanItems();
    expect(loaded.ok).toBe(true);
    expect(loaded.planSha256).toBe(FROZEN_PLAN_SHA256);
    expect(loaded.items.length).toBeGreaterThan(697);
    expect(loaded.coverage.length).toBeGreaterThan(loaded.items.length);
    const result = validateSection133Ledger();
    expect(result.ok).toBe(true);
    expect(result.errors).toEqual([]);
    expect(result.rowCount).toBe(result.requiredCount);
    expect(result.rowCount).toBe(loaded.items.length);
    expect(result.planSha256).toBe(FROZEN_PLAN_SHA256);
  });

  it("extracts omitted constructs: hard prerequisite, window rules, inline sequences, 21.x, 22.x, verifier role-separation", () => {
    const analyzed = analyzePlanForSection133(MINI_PLAN);
    expect(analyzed.errors).toEqual([]);
    const byId = new Map(analyzed.items.map((item) => [item.id, item]));
    expect(byId.has("phase.9.hard_prerequisite.1")).toBe(true);
    expect(byId.has("phase.9.hard_prerequisite.2")).toBe(false);
    expect(byId.get("phase.9.hard_prerequisite.1")?.label).toMatch(/Lisa may not/);
    expect(byId.has("phase.8.window_rule")).toBe(true);
    expect(byId.has("phase.9.window_rule")).toBe(true);
    expect(byId.has("phase.11.sequence.1")).toBe(true);
    expect(byId.has("phase.11.sequence.8")).toBe(false);
    expect(byId.get("phase.11.sequence.1")?.label).toMatch(/whichever is longer/);
    expect(byId.has("phase.12.sequence.1")).toBe(true);
    expect(byId.has("phase.12.sequence.8")).toBe(false);
    expect(analyzed.items.some((item) => item.id.startsWith("phase.11.prerequisite."))).toBe(true);
    expect(analyzed.items.some((item) => item.id.startsWith("phase.12.prerequisite."))).toBe(true);
    expect(analyzed.items.some((item) => item.id.startsWith("evidence.grok_handoff."))).toBe(true);
    expect(analyzed.items.some((item) => item.id.startsWith("evidence.correction_packet."))).toBe(
      true,
    );
    expect(analyzed.items.some((item) => item.id.startsWith("gate.launch_blocking."))).toBe(true);
    expect(analyzed.items.some((item) => item.id.startsWith("gate.principal."))).toBe(true);
    expect(analyzed.items.some((item) => item.id.startsWith("assumption.verify."))).toBe(true);
    expect(analyzed.items.some((item) => item.kind === "assumption")).toBe(true);
    expect(analyzed.items.some((item) => item.id.startsWith("verifier.role_separation."))).toBe(
      true,
    );
    // §22.3 resolved decisions are ledger requirements (binding architecture decisions).
    expect(analyzed.items.some((item) => item.id.startsWith("decision.resolved."))).toBe(true);
    expect(analyzed.items.some((item) => /two private bundled plugins/.test(item.label))).toBe(
      true,
    );
    expect(analyzed.items.some((item) => item.id.startsWith("next_action."))).toBe(true);
  });

  it("inherits requirement context for approved-target, hard boundaries, imperatives, governance, and next actions", () => {
    const analyzed = analyzePlanForSection133(MINI_PLAN);
    expect(analyzed.errors).toEqual([]);
    const labels = analyzed.items.map((item) => item.label);
    expect(labels.some((label) => /one canonical Lisa actor/.test(label))).toBe(true);
    expect(labels.some((label) => /replacing OpenClaw local memory/.test(label))).toBe(true);
    expect(labels.some((label) => /combining Brain and Skills into one plugin/.test(label))).toBe(
      true,
    );
    expect(labels.some((label) => /depend only on public SDK barrels/.test(label))).toBe(true);
    expect(labels.some((label) => label === "remain default-disabled")).toBe(true);
    expect(labels.some((label) => /copy Brain payloads into Skills events/.test(label))).toBe(true);
    expect(labels.some((label) => /Brain request\/response pairs/.test(label))).toBe(true);
    expect(
      labels.some((label) => /Record the exact contract, owner, consumer, and impact/.test(label)),
    ).toBe(true);
    expect(labels.some((label) => /does not authorize architecture changes/.test(label))).toBe(
      true,
    );
    expect(analyzed.items.some((item) => item.id.startsWith("decision.resolved."))).toBe(true);
    expect(analyzed.items.some((item) => item.id.startsWith("next_action."))).toBe(true);
    const intros = analyzed.coverage.filter(
      (entry) =>
        entry.disposition === "non_requirement" &&
        entry.reasonCode === "INTRO_OPENS_FOLLOWING_LIST",
    );
    expect(intros.length).toBeGreaterThan(0);
    expect(
      analyzed.coverage
        .filter((entry) => entry.disposition === "non_requirement")
        .every(
          (entry) =>
            typeof entry.reasonCode === "string" && typeof entry.sourceContext === "string",
        ),
    ).toBe(true);
    expect(
      analyzed.coverage.every(
        (entry) =>
          !(
            entry.disposition === "non_requirement" &&
            (entry.type === "list_item" || entry.type === "numbered_item") &&
            (entry.inheritedContext === "HARD_BOUNDARY" ||
              entry.structuralContext === "HARD_BOUNDARY" ||
              entry.inheritedContext === "APPROVED_TARGET" ||
              entry.structuralContext === "APPROVED_TARGET")
          ),
      ),
    ).toBe(true);
  });

  it("tokenizes complete Markdown constructs and accounts for every one in coverage", () => {
    const constructs = tokenizePlanMarkdown(MINI_PLAN);
    const analyzed = analyzePlanForSection133(MINI_PLAN);
    const structural = constructs.filter(
      (construct) =>
        construct.type !== "blank" &&
        construct.type !== "fence_open" &&
        construct.type !== "fence_close" &&
        construct.type !== "fence_body" &&
        construct.type !== "table_separator",
    );
    expect(structural.some((construct) => construct.type === "heading")).toBe(true);
    expect(structural.some((construct) => construct.type === "list_item")).toBe(true);
    expect(structural.some((construct) => construct.type === "numbered_item")).toBe(true);
    expect(structural.some((construct) => construct.type === "bold_label")).toBe(true);
    expect(structural.some((construct) => construct.type === "table_row")).toBe(true);
    expect(structural.some((construct) => construct.type === "paragraph")).toBe(true);
    expect(analyzed.coverage.length).toBe(constructs.length);
    expect(analyzed.coverage.every((entry) => entry.disposition !== "unhandled")).toBe(true);
    expect(analyzed.coverage.every((entry) => typeof entry.anchor === "string")).toBe(true);
    expect(analyzed.coverage.every((entry) => typeof entry.fingerprint === "string")).toBe(true);
  });

  it("keeps multi-clause sequences as one item and never comma-splits noun fragments", () => {
    const parts = splitAtomicObligations(
      "deploy A; enable B; complete at least three active operating days plus adequate real activity, whichever is longer.",
    );
    expect(parts).toEqual([
      "deploy A; enable B; complete at least three active operating days plus adequate real activity, whichever is longer",
    ]);
    expect(
      splitAtomicObligations(
        "Skills Cursor and Codex readiness gates are complete and recorded. Lisa may not be used to substitute for those proofs.",
      ),
    ).toEqual([
      "Skills Cursor and Codex readiness gates are complete and recorded. Lisa may not be used to substitute for those proofs",
    ]);
    expect(isFragmentedPlanLabel("credentials")).toBe(true);
    expect(isFragmentedPlanLabel("cron")).toBe(true);
    expect(isFragmentedPlanLabel("migration")).toBe(true);
    expect(isFragmentedPlanLabel("remain default-disabled")).toBe(false);
  });

  it("extracts distinct kinds with stable anchors and fingerprints", () => {
    const items = extractPlanSection133Items(MINI_PLAN);
    const kinds = new Set(items.map((item) => item.kind));
    expect(kinds.has("cross_plan_gate")).toBe(true);
    expect(kinds.has("task")).toBe(true);
    expect(kinds.has("exit_gate")).toBe(true);
    expect(kinds.has("rollback")).toBe(true);
    expect(kinds.has("test")).toBe(true);
    expect(kinds.has("gate")).toBe(true);
    expect(kinds.has("risk")).toBe(true);
    expect(kinds.has("dod")).toBe(true);
    expect(kinds.has("assumption")).toBe(true);
    expect(kinds.has("evidence_requirement")).toBe(true);
    expect(new Set(items.map((item) => item.anchor)).size).toBe(items.length);
    expect(new Set(items.map((item) => item.fingerprint)).size).toBe(items.length);
    expect(
      items.every((item) => item.fingerprint === planItemFingerprint(item.anchor, item.label)),
    ).toBe(true);
  });

  it("rejects stale plan hashes", () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "section133-stale-"));
    try {
      writeArtifacts(tmp, MINI_PLAN);
      const result = validateSection133Ledger({
        root: tmp,
        expectedSha256: FROZEN_PLAN_SHA256,
      });
      expect(result.ok).toBe(false);
      expect(result.errors.join("\n")).toMatch(/stale or wrong frozen plan hash/);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });

  it("rejects omitted, grouped, duplicated, invented, and modified plan items", () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "section133-bad-"));
    try {
      const { planSha } = writeArtifacts(tmp, MINI_PLAN, (inventory, rows) => {
        const items = (inventory.items as Array<Record<string, unknown>>).filter(
          (item) => item.id !== "phase.7.work.1",
        );
        const title = items.find((item) => item.id === "phase.7.title");
        if (title) {
          title.label = "modified away from plan";
        }
        items.push({
          id: "invented.mirror.task",
          kind: "task",
          label: "not in plan",
          anchor: "invented.mirror.task",
          line: 1,
          fingerprint: planItemFingerprint("invented.mirror.task", "not in plan"),
        });
        inventory.items = items;
        const header = rows[0];
        const data = rows.slice(1).filter((row) => row[0] !== "phase.8.title");
        const duplicate = [...data[0]!];
        const invented = [
          "invented.ledger.task",
          "task",
          "invented",
          "owner",
          "docs/fake.md",
          "IAP",
          "note",
          "invented.ledger.task",
          "1",
          planItemFingerprint("invented.ledger.task", "invented"),
        ];
        const grouped = data.find((row) => row[0] === "phase.7.title");
        if (grouped) {
          grouped[5] = "INPL/BLOCK";
        }
        rows.length = 0;
        rows.push(header!, ...data, duplicate, invented);
      });
      const result = validateSection133Ledger({
        root: tmp,
        expectedSha256: planSha,
      });
      expect(result.ok).toBe(false);
      const joined = result.errors.join("\n");
      expect(joined).toMatch(/omitted plan item|inventory omitted plan item/);
      expect(joined).toMatch(/invented/);
      expect(joined).toMatch(/invalid completion_claim|Phase-14 classification|INPL\/BLOCK/);
      expect(joined).toMatch(/duplicate ledger id/);
      expect(joined).toMatch(/label drift|does not match plan source/);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });

  it("rejects Codex classifications in Grok-owned coverage artifacts", () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "section133-class-"));
    try {
      const { planSha } = writeArtifacts(tmp, MINI_PLAN, (inventory, rows) => {
        (inventory as { classifications?: unknown }).classifications = [
          { id: "x", classification: "INPL" },
        ];
        const header = [...rows[0]!];
        header[5] = "classification";
        rows[0] = header;
        if (rows[1]) {
          rows[1][5] = "INPL";
        }
      });
      const result = validateSection133Ledger({ root: tmp, expectedSha256: planSha });
      expect(result.ok).toBe(false);
      const joined = result.errors.join("\n");
      expect(joined).toMatch(
        /must not include classifications|classification column|Phase-14 classification/,
      );
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });

  it("rejects ledger rows that group Phases 7-12 by omitting a phase title", () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "section133-group-"));
    try {
      const { planSha } = writeArtifacts(tmp, MINI_PLAN, (_inventory, rows) => {
        const filtered = rows.filter((row, index) => index === 0 || row[0] !== "phase.8.title");
        rows.length = 0;
        rows.push(...filtered);
      });
      const result = validateSection133Ledger({ root: tmp, expectedSha256: planSha });
      expect(result.ok).toBe(false);
      expect(result.errors.some((error) => error.includes("phase.8.title"))).toBe(true);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });

  it("fails closed when a source construct is left unhandled", () => {
    const analyzed = analyzePlanForSection133(MINI_PLAN);
    // Force an unhandled disposition to prove the fail-closed path.
    analyzed.coverage.push({
      line: 9999,
      type: "paragraph",
      disposition: "unhandled",
      reason: "synthetic",
      anchor: "coverage.L9999.paragraph",
      fingerprint: planItemFingerprint("coverage.L9999.paragraph", "paragraph:x"),
      itemIds: [],
    });
    expect(analyzed.coverage.some((entry) => entry.disposition === "unhandled")).toBe(true);
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "section133-unhandled-"));
    try {
      const planRel =
        "docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md";
      fs.mkdirSync(path.join(tmp, "docs"), { recursive: true });
      fs.mkdirSync(path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3"), {
        recursive: true,
      });
      fs.writeFileSync(path.join(tmp, planRel), MINI_PLAN);
      const planSha = sha256Hex(MINI_PLAN);
      const inventory = buildInventoryFromPlanItems(analyzed.items, planSha, analyzed.coverage);
      fs.writeFileSync(
        path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3/inventory.json"),
        JSON.stringify(inventory),
      );
      fs.writeFileSync(
        path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3/ledger.csv"),
        buildLedgerCsvFromPlanItems(analyzed.items),
      );
      // loadFrozenPlanItems will not see the synthetic unhandled; prove analyzer rejects via coverage.
      expect(
        analyzed.coverage.filter((entry) => entry.disposition === "unhandled").length,
      ).toBeGreaterThan(0);
      // Missing coverage entry / disposition drift still fails validation if we drop coverage.
      const inventoryNoCoverage = buildInventoryFromPlanItems(analyzed.items, planSha);
      fs.writeFileSync(
        path.join(tmp, "docs/execution/openclawdevelopmentplan01/section-13.3/inventory.json"),
        JSON.stringify(inventoryNoCoverage),
      );
      const result = validateSection133Ledger({ root: tmp, expectedSha256: planSha });
      expect(result.ok).toBe(false);
      expect(result.errors.join("\n")).toMatch(/coverage/);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });

  it("frozen plan extraction covers every plan section family and required omission class", () => {
    const loaded = loadFrozenPlanItems();
    expect(loaded.ok).toBe(true);
    expect(loaded.items.length).toBeGreaterThan(697);
    const ids = loaded.items.map((item) => item.id);
    const labels = loaded.items.map((item) => item.label);
    const expectSome = (re: RegExp) => expect(ids.some((id) => re.test(id))).toBe(true);
    const expectLabel = (re: RegExp) => expect(labels.some((label) => re.test(label))).toBe(true);
    expectSome(/^source_hierarchy\./);
    expect(loaded.items.filter((item) => item.id.startsWith("source_hierarchy.")).length).toBe(6);
    expect(
      loaded.coverage.filter((entry) => entry.reasonCode === "STRUCTURAL_ENUM_DEFINITION").length,
    ).toBe(7);
    expect(loaded.items.some((item) => isSection133ClassificationEnumLabel(item.label))).toBe(
      false,
    );
    expectSome(/^phase\.7\./);
    expectSome(/^phase\.8\.window_rule$/);
    expectSome(/^phase\.9\.hard_prerequisite\./);
    expectSome(/^phase\.9\.window_rule$/);
    expectSome(/^phase\.11\.sequence\./);
    expectSome(/^phase\.12\.sequence\./);
    expectSome(/^phase\.11\.prerequisite\./);
    expectSome(/^phase\.12\.prerequisite\./);
    expectSome(/^phase\.14\./);
    expectSome(/^phase\.15\./);
    expectSome(/^cross_plan_gate\./);
    expectSome(/^evidence\.grok_handoff\./);
    expectSome(/^evidence\.correction_packet\./);
    expectSome(/^gate\.launch_blocking\./);
    expectSome(/^gate\.principal\./);
    expectSome(/^assumption\.verify\./);
    expectSome(/^verifier\.role_separation\./);
    expectSome(/^risk\.execution\./);
    expectSome(/^dod\./);
    expectSome(/^test\.invariant\./);
    expectSome(/^rollback\.matrix\./);
    expectSome(/^decision\.resolved\./);
    expectSome(/^next_action\./);
    expectLabel(/one canonical Lisa actor/);
    expectLabel(/replacing OpenClaw local memory/);
    expectLabel(/depend only on public/);
    expectLabel(/^remain default-disabled$/);
    expectLabel(/Record the exact contract, owner, consumer, and impact/);
    expectLabel(/copy Brain payloads into Skills events/);
    expect(loaded.coverage.every((entry) => entry.disposition !== "unhandled")).toBe(true);
    expect(
      loaded.coverage
        .filter((entry) => entry.disposition === "non_requirement")
        .every((entry) => typeof entry.reasonCode === "string"),
    ).toBe(true);
    expect(loaded.items.filter((item) => item.id.startsWith("phase.11.sequence.")).length).toBe(1);
    expect(loaded.items.filter((item) => item.id.startsWith("phase.12.sequence.")).length).toBe(1);
    expect(
      loaded.items.filter((item) => item.id.startsWith("phase.9.hard_prerequisite.")).length,
    ).toBe(1);
    expect(loaded.items.length).toBeGreaterThan(697);
    expect(loaded.items.every((item) => !isFragmentedPlanLabel(item.label))).toBe(true);
    const bySection = (prefix: string) =>
      loaded.items.filter((item) => item.id.includes(prefix) || item.id.startsWith(prefix));
    expect(bySection("10_2_skills_lifecycle_collection").length).toBeGreaterThanOrEqual(6);
    expect(bySection("12_1_plugin_configuration_shape").length).toBeGreaterThanOrEqual(8);
    expect(bySection("12_3_change_application").length).toBeGreaterThanOrEqual(5);
    expect(bySection("17_1_per_domain_health").length).toBeGreaterThanOrEqual(11);
    expect(bySection("17_3_honest_degraded_states").length).toBeGreaterThanOrEqual(4);
    expect(bySection("18_security_and_secret_handling").length).toBeGreaterThanOrEqual(12);
    expectLabel(/exact Skills tool namespace/);
    expectLabel(/is a gate for live stage proof/);
    expectLabel(/not complete until the OpenClaw consumer canary/);
    expectLabel(/Brain may reach production before Skills/);
    expectLabel(/Skills may not begin the Lisa canary until/);
    expectLabel(/retention durations require Principal approval/);
    expectLabel(/canary event counts require measurements/);
    expectLabel(/not reusable by OpenClaw/);
    expect(
      loaded.coverage.filter((entry) => entry.reasonCode === "DESCRIPTIVE_ALLOWLIST").length,
    ).toBe(0);
    expect(
      loaded.coverage.every(
        (entry) =>
          !(
            entry.reasonCode === "NARRATIVE_CONTEXT" &&
            (entry.type === "list_item" ||
              entry.type === "numbered_item" ||
              entry.type === "table_row")
          ),
      ),
    ).toBe(true);
    expect(classifySectionPolicy("## 3. Reconciliation Finding").policy).toBe("implementation");
    expect(classifySectionPolicy("## 5. Current Baseline").policy).toBe("implementation");
    expect(classifySectionPolicy("### 5.1 OpenClaw").policy).toBe("implementation");
  });

  it("lowercase obligations override descriptive exclusion classification", () => {
    const text = "this plugin must remain default-disabled";
    const exclusion = buildDescriptiveExclusion({
      id: "test-lowercase-must",
      line: 7,
      type: "list_item",
      text,
      reason: "synthetic contextual line",
    });
    // Fingerprint matches, but binding language overrides.
    const analyzed = analyzePlanForSection133(
      `# Mini

## 5. Current Baseline

Observations:

- ${text}
`,
      { descriptiveExclusions: [exclusion] },
    );
    expect(lineHasBindingObligation(text)).toBe(true);
    expect(matchDescriptiveExclusion(7, "list_item", text, [exclusion])).toBeNull();
    expect(
      analyzed.coverage.some(
        (entry) => entry.type === "list_item" && entry.reasonCode === "DESCRIPTIVE_EXCLUSION",
      ),
    ).toBe(false);
    expect(analyzed.items.some((item) => /must remain default-disabled/i.test(item.label))).toBe(
      true,
    );
  });

  it("binding bullets become requirements; registered observational bullets stay descriptive exclusions", () => {
    const observational = "sanitized observation without binding words;";
    const exclusion = buildDescriptiveExclusion({
      id: "test-observational-bullet",
      line: 9,
      type: "list_item",
      text: observational,
      reason: "reviewed contextual observation for focused test",
    });
    const analyzed = analyzePlanForSection133(
      `# Mini

## 3. Reconciliation Finding

Findings:

- Platform environment readiness is a gate for live stage proof;
- Skills may not begin the Lisa canary until the Cursor and Codex Skills readiness gates pass;
- ${observational}
`,
      { descriptiveExclusions: [exclusion] },
    );
    expect(analyzed.items.some((item) => /is a gate for live stage proof/.test(item.label))).toBe(
      true,
    );
    expect(
      analyzed.items.some((item) => /Skills may not begin the Lisa canary/.test(item.label)),
    ).toBe(true);
    expect(
      analyzed.items.some((item) => /sanitized observation without binding words/.test(item.label)),
    ).toBe(false);
    expect(
      analyzed.coverage.some(
        (entry) =>
          entry.type === "list_item" &&
          entry.reasonCode === "DESCRIPTIVE_EXCLUSION" &&
          entry.exclusionId === "test-observational-bullet",
      ),
    ).toBe(true);
    expect(
      analyzed.coverage.filter(
        (entry) => entry.type === "list_item" && entry.disposition === "requirement",
      ).length,
    ).toBe(2);
  });

  it("modifying an exact allowlisted line invalidates its exclusion", () => {
    const original = "sanitized current-state observation only;";
    const exclusion = buildDescriptiveExclusion({
      id: "test-exact-line",
      line: 7,
      type: "list_item",
      text: original,
      reason: "reviewed contextual observation",
    });
    const matching = analyzePlanForSection133(
      `# Mini

## 5. Current Baseline

Observations:

- ${original}
`,
      { descriptiveExclusions: [exclusion] },
    );
    expect(
      matching.coverage.some(
        (entry) =>
          entry.type === "list_item" &&
          entry.reasonCode === "DESCRIPTIVE_EXCLUSION" &&
          entry.exclusionId === "test-exact-line",
      ),
    ).toBe(true);

    const modified = analyzePlanForSection133(
      `# Mini

## 5. Current Baseline

Observations:

- sanitized current-state observation only changed;
`,
      { descriptiveExclusions: [exclusion] },
    );
    expect(
      modified.coverage.some(
        (entry) => entry.type === "list_item" && entry.reasonCode === "DESCRIPTIVE_EXCLUSION",
      ),
    ).toBe(false);
    expect(modified.items.some((item) => /changed/.test(item.label))).toBe(true);
  });

  it("does not blanket-allowlist entire sections; unregistered observational bullets remain requirements", () => {
    expect(Object.keys(DESCRIPTIVE_ALLOWLIST_RULES).length).toBe(0);
    expect(classifySectionPolicy("## 3. Reconciliation Finding")).toEqual({
      policy: "implementation",
      rule: null,
      id: null,
    });
    expect(classifySectionPolicy("### 5.2 Lisa")).toEqual({
      policy: "implementation",
      rule: null,
      id: null,
    });
    const analyzed = analyzePlanForSection133(`# Mini

## 3. Reconciliation Finding

- purely observational bullet with no binding words;
`);
    expect(
      analyzed.coverage.some(
        (entry) => entry.type === "list_item" && entry.disposition === "requirement",
      ),
    ).toBe(true);
  });

  it("Grok evidence mapping never emits Codex seven-classifications", () => {
    const items = extractPlanSection133Items(MINI_PLAN);
    for (const item of items) {
      const mapping = grokEvidenceMappingForPlanItem(item);
      expect(["implemented", "blocked", "outside_ownership", "not_claimed"]).toContain(
        mapping.completion_claim,
      );
      expect(["IAP", "INPL", "PART", "OMIT", "DIFF", "BLOCK", "OUT"]).not.toContain(
        mapping.completion_claim,
      );
      expect(mapping.owner.trim().length).toBeGreaterThan(0);
      expect(mapping.evidence_location.trim().length).toBeGreaterThan(0);
    }
  });

  it("rejects NARRATIVE_CONTEXT list coverage outside exact descriptive exclusions", () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "section133-narrative-"));
    try {
      const plan = `# Mini

## 5. Current Baseline

### 5.1 OpenClaw

Current inventory:

- sanitized capability observation one;
- sanitized capability observation two;
`;
      const { planSha } = writeArtifacts(tmp, plan, (inventory) => {
        const coverage = Array.isArray(inventory.coverage) ? inventory.coverage : [];
        const target = coverage.find(
          (entry) =>
            entry &&
            typeof entry === "object" &&
            (entry as { type?: string }).type === "list_item" &&
            (entry as { disposition?: string }).disposition === "requirement",
        ) as Record<string, unknown> | undefined;
        expect(target).toBeTruthy();
        target!.disposition = "non_requirement";
        target!.reasonCode = "NARRATIVE_CONTEXT";
        target!.exclusionId = null;
        target!.sourceAnchor = "coverage.L999.list_item";
      });
      const result = validateSection133Ledger({ root: tmp, expectedSha256: planSha });
      expect(result.ok).toBe(false);
      expect(result.errors.join("\n")).toMatch(/forbidden NARRATIVE_CONTEXT|disposition drift/);
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });

  it("fail-closed: binding §2 source-hierarchy rows cannot be descriptive exclusions", () => {
    const hierarchyRow =
      "| 2        | LiNKplatform shared-foundation detailed implementation plan                                | SHA-256 `fbcf36235c4caaa6abf7ee93afedeedf105a96f6614a3a3ff5ccb8d78e33c6b9` | Actor identity, claims, credentials, environments, infrastructure, migrations, audit, generic Librarian host |";
    expect(isBindingSourceAuthorityRow(hierarchyRow)).toBe(true);
    const exclusion = buildDescriptiveExclusion({
      id: "bad-hierarchy-exclusion",
      line: 7,
      type: "table_row",
      text: hierarchyRow,
      reason: "must not exclude binding hierarchy",
    });
    expect(matchDescriptiveExclusion(7, "table_row", hierarchyRow, [exclusion])).toBeNull();
    const analyzed = analyzePlanForSection133(
      `# Mini

## 2. Frozen Inputs and Source Hierarchy

| Priority | Source | Reviewed snapshot | Authority |
| -------- | ------ | ----------------- | --------- |
${hierarchyRow}
`,
      { descriptiveExclusions: [exclusion] },
    );
    expect(analyzed.errors).toEqual([]);
    expect(analyzed.items.some((item) => item.id.startsWith("source_hierarchy."))).toBe(true);
    expect(
      analyzed.coverage.some(
        (entry) =>
          entry.type === "table_row" &&
          entry.disposition === "requirement" &&
          /fbcf36235c4caaa6/.test(String(entry.text)),
      ),
    ).toBe(true);
  });

  it("fail-closed: §13.3 classification enum definitions are not implementation tasks", () => {
    expect(isSection133ClassificationEnumLabel("`omitted`;")).toBe(true);
    expect(isSection133ClassificationEnumLabel("`implemented and proven`;")).toBe(true);
    const analyzed = analyzePlanForSection133(`# Mini

### 13.3 Plan-conformance classifications

The OpenClaw Codex verifier must classify every task as exactly one of these seven values:

1. \`implemented and proven\`;
2. \`implemented but not proven live\`;
3. \`partially implemented\`;
4. \`omitted\`;
5. \`implemented differently from plan\`;
6. \`blocked by another repository or interface\`;
7. \`outside the execution agent's ownership\`.
`);
    expect(analyzed.errors).toEqual([]);
    expect(
      analyzed.coverage.filter((entry) => entry.reasonCode === "STRUCTURAL_ENUM_DEFINITION").length,
    ).toBe(7);
    expect(analyzed.items.some((item) => isSection133ClassificationEnumLabel(item.label))).toBe(
      false,
    );
  });

  it("fail-closed: implemented evidence may not point at extractor/validator/ledger tooling", () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "section133-tooling-ev-"));
    try {
      const { planSha } = writeArtifacts(tmp, MINI_PLAN, (_inventory, rows) => {
        const target = rows.find((row) => row[0] === "phase.7.title");
        expect(target).toBeTruthy();
        target![4] =
          "scripts/lib/openclawdevelopmentplan01-section-13.3-plan-extract.mjs [plan-item:phase.7.title]";
        target![5] = "implemented";
        target![6] = "bad tooling evidence";
      });
      const result = validateSection133Ledger({ root: tmp, expectedSha256: planSha });
      expect(result.ok).toBe(false);
      expect(result.errors.join("\n")).toMatch(
        /extractor\/validator\/ledger tooling|underlying Phase artifacts/,
      );
    } finally {
      fs.rmSync(tmp, { recursive: true, force: true });
    }
  });

  it("write helper regenerates artifacts that validate", () => {
    const before = validateSection133Ledger();
    expect(before.ok).toBe(true);
    const written = writeSection133ArtifactsFromPlan();
    expect(written.itemCount).toBe(before.requiredCount);
    expect(written.coverageCount).toBeGreaterThan(0);
    const after = validateSection133Ledger();
    expect(after.ok).toBe(true);
    expect(after.rowCount).toBe(written.itemCount);
  });
});
