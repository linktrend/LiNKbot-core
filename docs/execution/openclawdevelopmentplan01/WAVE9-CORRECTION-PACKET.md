# Correction wave 9 — packet for OpenClaw Codex Phase 14 re-verification

**Recorded:** 2026-07-29 Asia/Taipei
**Agent:** Cursor Local Agent / Grok 4.5 High / Lisa role
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) → `development` (**draft**; do not merge)
**Starting tip:** `c16dfeaa32766bc5276eb169f7d3c2b0ab98491a`
**Exact tip SHA:** `2fac6e3aaa10a84d8db5ae0aab7f7bf1f9959aa3`
**Authority:** Principal-approved smallest public MCP toolFilter SDK seam — **not** self-certification

## Scope bounds (honored)

- Draft PR kept; no merge; no PR readiness change
- No hosted CI / Bugbot poll or rerun
- No Lisa authoritative profile mutation
- No live Platform contact
- No Phases 7–12
- Focused local tests + `git diff --check` only
- No broader architecture deviation beyond the approved seam

## Delivered

| #   | Requirement                                                           | Result                    | Evidence                                                |
| --- | --------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------- |
| 1   | Public `registerMcpServerToolFilter`                                  | **Implemented (local)**   | plugin API + registrar + docs                           |
| 2   | Core/domain separation                                                | **Honored**               | generic overlay in core; Brain/Skills policy in plugins |
| 3   | Ownership, validation, default-deny, hot apply, diagnostics, rollback | **Implemented (local)**   | ownership tests; null omit; generation invalidate       |
| 4   | Wire mcpRead / mcpDiscoveryRead / governedExecution                   | **Wired**                 | linkbrain + linkskills `register()`                     |
| 5   | Prove via managed-MCP listTools path                                  | **Proven (local)**        | `agent-bundle-mcp-runtime.mcp-tool-filter.test.ts`      |
| 6   | Preserve drain ownership + coexistence                                | **Preserved**             | tip suite 31/203 still green                            |
| 7   | Phase 13 totals 31/203                                                | **Corrected**             | Phase 13 tip proof / reproduction                       |
| 8   | §13.3 ledger individual classifications                               | **Updated (provisional)** | `PHASE-14-CLASSIFICATION-EVIDENCE-INDEX.md`             |
| 9   | AuthClaims 1.1 fixtures                                               | **Unchanged**             | aggregates unchanged vs wave 8                          |

## Tip proof (local)

```bash
node scripts/run-vitest.mjs \
  src/plugins/registry-registrars-network.mcp-tool-filter.test.ts \
  src/agents/mcp-tool-filter-resolver.test.ts \
  src/agents/agent-bundle-mcp-runtime.mcp-tool-filter.test.ts \
  extensions/linkbrain/registered-plugin.test.ts \
  extensions/linkskills/registered-plugin.test.ts
# → focused shards PASS

node scripts/run-vitest.mjs test/helpers/link-domain-fakes extensions/linkbrain extensions/linkskills
# → 31 files / 203 tests PASS

git diff --check origin/development...HEAD
# → clean (required after tip commit)
```

## Fixture aggregates (unchanged; still awaiting owner countersign)

Method: from each fixtures root, SHA-256 of sorted `{file_sha256}  {relative_path}` lines.

| Package | Count | Aggregate                                                          |
| ------- | ----- | ------------------------------------------------------------------ |
| Brain   | 75    | `4493f71432ef56f9fc272ff4c208b8901242c2bd83e138f53d6f0259b4f4811b` |
| Skills  | 71    | `203163711b5db17b8a07d3956e41596384cbd08f0c110bd9f21abfc5c7e5e19a` |

## Explicit non-claims

- Not Phase 14 / 15 complete
- Not self-certified
- Not merged
- Hosted CI not polled
- Fixture-owner gate remains **PENDING** owner countersigns

## Codex next action

Re-verify against pushed HEAD using this packet + revised Phase 13 + §13.3 index + `MCP-TOOLFILTER-SDK-SEAM-IMPLEMENTED.md`. Assign §13.3 classifications independently. Owners countersign aggregates against the exact tip.
