# Correction wave 7 — packet for OpenClaw Codex Phase 14 re-verification

**Recorded:** 2026-07-28 21:40 Asia/Taipei
**Agent:** Cursor Local Agent / Grok 4.5 High / Lisa role
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) → `development` (draft; do not merge)
**Starting tip:** `b9f948f9b3a856e997247355f697c3fc7767e844`
**Pushed tip (this packet):** `6edd16a71440accacfac5dd8c639321a130986d3` (docs `b4ac94debf5`; code `39e85a5d6bc`)
**Authority:** Principal wave-7 instruction only — not self-certification

> OpenClaw Codex must re-verify against the pushed HEAD and evidence below. This packet does **not** assign accepted §13.3 classifications and does **not** claim Phase 14 complete.

## Scope bounds (honored)

- No merge; no PR readiness change
- No hosted CI / Bugbot poll
- No Lisa live profile mutation
- No Platform live services / credentials
- No Phases 7–12 start
- Focused local tests + base-to-head `git diff --check` only

## Findings addressed

| # | Finding | Correction | Evidence |
| - | ------- | ---------- | -------- |
| 1 | Always-failing Brain/Skills feature-tool stubs | Removed `feature-tools.ts`; flags gate managed MCP include lists + fake/public-surface invoke helpers; **no** `brain_*` / `skills_*` plugin `registerTool` | `extensions/link{brain,skills}/src/feature-flags.ts`; `feature-flags-*.test.ts`; `native-coexistence.test.ts` |
| 2 | Drain-worker ticks/stop unbounded | Tick timeout, stop deadline, retain/abort active controllers, no concurrent ticks, late-mutation ownership preserved, stalled transport/store proofs | `drain-worker.ts` (both); drain suites in `feature-flags-*.test.ts` |
| 3 | Skills telemetry enqueue race/loss/dup | Exclusive keyed bounded enqueue + signal; hook timeout / shutdown ownership proofs | `bounded.ts` `createKeyedPromiseChain` / `runExclusiveBounded`; `runtime.ts` `enqueueTelemetry`; enqueue suite |
| 4 | Coexistence tests insufficient | Native memory/compaction/sessions/cron/channels/native skills exercised while plugins register/fail; no naming conflict | `extensions/linkskills/native-coexistence.test.ts` |
| 5 | Phase 13 tip counts stale | Tip totals corrected to **29 files / 196 tests** | `PHASE-13-PROVISIONAL-GROK-HANDOFF.md`; `PHASE-6-STATUS.md` |
| 6 | Only working-tree `git diff --check` | Trailing whitespace stripped in plan docs; **base-to-head** `git diff --check origin/development...HEAD` required green after commit | commit + verifier command below |
| 7 | Correction-only ledger insufficient | Full §13.3 item-by-item classification/evidence index (provisional; Codex accepts) | `PHASE-14-CLASSIFICATION-EVIDENCE-INDEX.md` (supersedes wave-6 correction-only ledger for classification duty) |
| 8 | Independent runbook rehearsal missing | Independent FAKE/TEMPLATE rehearsal by separate operator (not implementer-as-independent) | `runbooks/REHEARSAL-INDEPENDENT-2026-07-28-wave7.md` — 14/14 PASS |
| 9 | AuthClaims still 1.0.0 | Repinned to `platform.auth-claims/1.1.0` / `@linktrend/platform-contracts@0.2.2` at Platform `6861a376…`; Brain/Skills fixture bytes unchanged → **no owner reaffirmation required** | `contracts/platform/PIN.json`; `contracts/platform/auth-claims-1.1.0/` |

## Tip proof (local, focused)

```bash
node scripts/run-vitest.mjs test/helpers/link-domain-fakes extensions/linkbrain extensions/linkskills
# Test Files  29 passed (29)
# Tests       196 passed (196)

git diff --check origin/development...HEAD
# expect: clean
```

Recorded: 2026-07-28 21:36 Asia/Taipei (vitest). Base-to-head `git diff --check origin/development...HEAD` **clean** at tip `6edd16a7144…` (verified 2026-07-28 21:40 Asia/Taipei).

## AuthClaims pin (wave 7)

| Field | Value |
| ----- | ----- |
| Platform HEAD | `6861a376aae5fa4e12c1b68a808d7b04e7bbfb5b` |
| Contract | `platform.auth-claims/1.1.0` |
| Package | `0.2.2` |
| Schema SHA-256 | `c2e8bc68b3feb9a3dacc497f5a5d497b466c400804fb4f9e41734c10772ddfa1` |
| contentHash | `fb518834be897c32574df5f7235704fdb0de708bd3da1b48fc448246e3eca567` |
| claims.ts SHA-256 | `cc382008d1e0a15112ad03d2ad83cbdf55ec24b67807a6af595999b84d943ca8` |
| Brain/Skills fixtures | unchanged → no owner reaffirmation |

## Explicit non-claims

- Not Phase 14 / 15 complete
- Not self-certified
- Not merged; PR readiness unchanged
- Hosted CI not polled / not claimed green
- No Lisa live mutation; no Platform live contact
- Phases 7–12 not started
- Implementer-authored wave-6 runbook text is **not** independent rehearsal

## Codex next action

Re-verify against pushed HEAD using this packet + `PHASE-13-PROVISIONAL-GROK-HANDOFF.md` + `PHASE-14-CLASSIFICATION-EVIDENCE-INDEX.md`. Assign §13.3 classifications independently.
