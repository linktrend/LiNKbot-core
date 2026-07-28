# Correction wave 8 — packet for OpenClaw Codex Phase 14 re-verification

**Recorded:** 2026-07-29 Asia/Taipei
**Agent:** Cursor Local Agent / Grok 4.5 High / Lisa role
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) → `development` (**draft**; do not merge)
**Starting tip:** `b3e8853b1c15d13429f51ac5054bac448a4256d2`
**Exact tip SHA:** `bc1d3133d103b4921be6248b37d2aa9848d3fe0b`
**Code tip (drain/AuthClaims/coexistence):** `5a9842f8aa2488ac5de57415981f2609f4727613`
**Authority:** Principal wave-8 Phase-14 correction instruction — **not** self-certification

## Scope bounds (honored)

- Draft PR kept; no merge; no PR readiness change
- No hosted CI / Bugbot poll or rerun
- No Lisa authoritative profile mutation
- No live Platform contact
- No Phases 7–12
- Focused local tests + `git diff --check` only

## Findings

| # | Finding | Result | Evidence |
| - | ------- | ------ | -------- |
| 1 | Connect flags to authoritative managed MCP toolFilter via public APIs | **Stopped — SDK prerequisite / deviation** (no public seam; no private internals) | `MCP-TOOLFILTER-SDK-PREREQUISITE-DEVIATION.md` |
| 2 | Drain ownership until raw drain settles; no post-timeout storm | **Corrected (local)** | `extensions/link{brain,skills}/src/drain-worker.ts`; storm tests in `feature-flags-*.test.ts` |
| 3 | AuthClaims 1.1.0 consumer conformance + fresh countersign request | **Corrected (local) + PENDING owner countersign** | fixtures 1.1.0; `auth-claims-1.1.ts` + tests; `COUNTERSIGN-REQUEST-WAVE8-AUTHCLAIMS-1.1.md` |
| 4 | Real coexistence harness with plugin service start + native paths | **Corrected (local)** | `extensions/linkskills/native-coexistence.test.ts` |
| 5 | Phase 13 totals + complete §13.3 ledger | **Corrected (docs)** | Phase 13; `PHASE-14-CLASSIFICATION-EVIDENCE-INDEX.md` |

## Tip proof (local)

```bash
node scripts/run-vitest.mjs test/helpers/link-domain-fakes extensions/linkbrain extensions/linkskills
# → 31 files / 203 tests PASS

git diff --check origin/development...HEAD
# → clean (required after tip commit)
```

## Fixture aggregates (awaiting owner countersign)

| Package | Count | Aggregate |
| ------- | ----- | --------- |
| Brain | 75 | `4493f71432ef56f9fc272ff4c208b8901242c2bd83e138f53d6f0259b4f4811b` |
| Skills | 71 | `203163711b5db17b8a07d3956e41596384cbd08f0c110bd9f21abfc5c7e5e19a` |

## Explicit non-claims

- Not Phase 14 / 15 complete
- Not self-certified
- Not merged
- Hosted CI not polled
- Fixture-owner gate **re-opened** pending Brain/Skills countersigns of the new aggregates
- Finding 1 is **blocked** on generic SDK — not silently claimed fixed

## Codex next action

Re-verify against pushed HEAD using this packet + revised Phase 13 + §13.3 index + MCP deviation packet. Assign §13.3 classifications independently.
