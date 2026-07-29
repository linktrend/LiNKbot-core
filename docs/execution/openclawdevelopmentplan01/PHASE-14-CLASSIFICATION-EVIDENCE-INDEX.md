# Plan §13.3 classification / evidence index — provisional for Codex Phase 14

**Recorded:** 2026-07-29 Asia/Taipei (wave 10)
**Branch tip:** `b903fe74cd7cf1412e83074f7b45e634e45034d9`
**PR:** [#38](https://github.com/linktrend/openclaw_prime/pull/38) (draft)
**Local tip proof:** **31 files / 203+ tests** expected PASS; base-to-head `git diff --check` required clean
**Authority:** Plan §13.3 evidence index for OpenClaw Codex. **Not** self-certification. Codex alone accepts classifications.

**Ledger rule (wave 10):** every atomic row has exactly **one** permitted classification from the legend. Combined statuses such as `INPL/BLOCK`, `OUT/consume`, or `INPL/PART` are forbidden. Evidence, owner, deficiency, and next action are separate columns.

Legend: `IAP` · `INPL` · `PART` · `OMIT` · `DIFF` · `BLOCK` · `OUT`

---

## A. Phases 0–15 (task / evidence / DoD)

| Item | Classification | Evidence | Owner | Deficiency | Next action |
| ---- | -------------- | -------- | ----- | ---------- | ----------- |
| Phase 0 freeze | `INPL` | `PHASE-0-FREEZE-PACKET.md` | OpenClaw | Live/external gates uncleared | Codex verify packet; keep live out of scope |
| Phase 1 contracts/pins | `PART` | `PHASE-1-*`; `contracts/**`; AuthClaims 1.1.0 pin | OpenClaw | Platform auth-path live blocked | Codex verify pins; Platform owns live auth |
| Phase 1 fixture-owner gate | `PART` | `FIXTURE-OWNER-SIGNOFF.md`; wave-8 countersign request | LiNKbrain + LiNKskills owners | Countersign pending (not requested this wave) | Countersign only after Codex confirms final head + aggregates |
| Phase 2 Brain skeleton | `INPL` | `extensions/linkbrain/**`; `PHASE-2-STATUS.md` | OpenClaw | Live MCP not exercised | Codex verify default-disabled + tests |
| Phase 3 Brain lifecycle | `INPL` | capture/lifecycle tests | OpenClaw | Live timeout races unproven | Codex verify bounded capture proofs |
| Phase 4 Skills skeleton | `INPL` | `extensions/linkskills/**` | OpenClaw | Live privacy surface unproven | Codex verify no conversation hooks |
| Phase 5 managed MCP templates + public toolFilter seam | `INPL` | templates; `MCP-TOOLFILTER-SDK-SEAM-IMPLEMENTED.md`; catalog-path + hot-invalidation tests | OpenClaw | Live Platform auth still absent | Codex re-verify seam + wave-10 corrections |
| Phase 5 live Platform MCP auth | `BLOCK` | Phase 5 blocked packets | Platform | Auth-path unavailable | Platform delivers live auth evidence |
| Phase 6 integrated fake QA | `INPL` | matrix/perf; coexistence harness; §D rows | OpenClaw | Platform-live gaps named SKIPPED | Codex verify fake matrix; do not treat as live |
| Phases 7–12 | `BLOCK` | `PHASE-*-STATUS-BLOCKED.md` | Multi | Premature start forbidden | Remain blocked until Phase 14 gate |
| Phase 13 Grok handoff | `INPL` | `PHASE-13-PROVISIONAL-GROK-HANDOFF.md` | OpenClaw (Grok) | Tip lag vs latest wave | Codex re-verify against wave-10 tip |
| Phase 14 Codex | `OUT` | Plan Phase 14 | OpenClaw Codex | Not started by Grok | Codex assigns accepted classifications |
| Phase 15 reconciliation | `OUT` | Plan Phase 15 | LiNKbrain Codex + Principal | Not started | After Phase 14 |

---

## B. Cross-plan gates (§14)

| Gate | Classification | Evidence | Owner | Deficiency | Next action |
| ---- | -------------- | -------- | ----- | ---------- | ----------- |
| 1 Platform identity/credentials | `BLOCK` | Phase 5; AuthClaims pin only | Platform | Live credentials unavailable | Platform clears gate |
| 2 Brain contract/fake consume | `OUT` | fixtures; PENDING countersign | LiNKbrain | Owner countersign pending | Countersign after Codex confirms aggregates |
| 3 Skills contract/fake consume | `OUT` | fixtures; PENDING countersign | LiNKskills | Owner countersign pending | Countersign after Codex confirms aggregates |
| 4 Platform migration/env | `BLOCK` | blocked packets | Platform | Env/migration blocked | Platform clears gate |
| 5 OpenClaw implementation ownership | `INPL` | plugins/tests on branch | OpenClaw | — | Codex verify ownership boundaries |
| 6 Lisa live enablement | `BLOCK` | not started | Lisa / Multi | Explicit non-goal this wave | Remain blocked |
| 7 Stage promotion | `BLOCK` | not started | Multi | Premature | Remain blocked |
| 8 Prod promotion | `BLOCK` | not started | Multi | Premature | Remain blocked |
| 9 Remaining stage/prod gates | `BLOCK` | not started | Multi | Premature | Remain blocked |
| 10 Independent repo verification | `OUT` | Codex Phase 14 | OpenClaw Codex | Awaiting tip | Codex verifies pushed HEAD |
| 11 Four-plan reconciliation | `OUT` | Phase 15 | LiNKbrain Codex + Principal | Not started | After Phase 14 |

---

## C. Plugin / runtime requirements (individual)

| Requirement | Classification | Evidence | Owner | Deficiency | Next action |
| ----------- | -------------- | -------- | ----- | ---------- | ----------- |
| Two plugins / two MCP / independent domains | `INPL` | linkbrain + linkskills | OpenClaw | Live cross-talk unproven | Codex verify separate stores/flags |
| Brain conversation hooks only | `INPL` | lifecycle + boundary tests | OpenClaw | Skills leakage residual risk | Codex verify Skills forbids conversation hooks |
| Skills `skills_*` via public `after_tool_call` | `INPL` | collect + adversarial | OpenClaw | Over-collect residual risk | Codex verify non-Skills silent |
| Allowlisted Skills schemas | `INPL` | envelopes + adversarial | OpenClaw | Nesting residual risk | Codex verify exact keys/limits |
| Durable outboxes reject-new | `INPL` | runtime + matrix | OpenClaw | Overflow residual risk | Codex verify reject-new |
| Independent drain workers + flushIntervalMs | `INPL` | drain-worker + tests | OpenClaw | Storm residual risk | Codex verify ownership until raw settle |
| Feature flags → managed MCP toolFilter (all Brain/Skills flags) | `INPL` | `registerMcpServerToolFilter`; flagged filters return null deny-all; catalog + hot tests | OpenClaw | Live Lisa enable unproven | Codex verify flag→surface map |
| Feature flags → invoke helpers (no MCP bypass) | `INPL` | feature-flags invoke tests | OpenClaw | Incomplete ops alone insufficient | Codex verify disabled fails closed |
| Bounded hooks / enqueue / shutdown | `INPL` | bounded + enqueue tests | OpenClaw | Race/dup residual | Codex verify signal + exclusive enqueue |
| Native coexistence under adapter failure | `INPL` | `native-coexistence.test.ts` | OpenClaw | Synthetic gap residual | Codex verify service start + native paths |
| Fourteen runbooks non-live | `INPL` | independent rehearsal wave 7 | OpenClaw | Implementer-as-indep residual | Codex verify FAKE/TEMPLATE only |
| AuthClaims consumer shape 1.1.0 | `INPL` | auth-claims-1.1 tests + fixtures | OpenClaw | — | Codex verify positive 1.1 / reject 1.0 |
| AuthClaims fixture-owner gate | `PART` | countersign request; aggregates | Owners | PENDING sign (not requested wave 10) | Sign after Codex confirms tip + aggregates |
| Lisa live enablement | `OMIT` | — | Principal | Explicit non-goal | No action |
| Live Platform contact | `OMIT` | — | Platform | Explicit non-goal | No action |
| MCP deny-all metadata (not `include:[]`) | `INPL` | resolver + materialize + catalog tests | OpenClaw | — | Codex verify denyAll path |
| Operator ceiling ∩ plugin (tools + utilities) | `INPL` | composition + utility materialize + hot tests | OpenClaw | — | Codex verify disjoint/widen proofs |
| Same-runtime hot invalidation | `INPL` | `agent-bundle-mcp-runtime.mcp-tool-filter.test.ts` | OpenClaw | — | Codex verify rematerialize cases |

---

## D. Phase 6 mandatory scenarios (individual)

| # | Task / scenario | Classification | Evidence | Owner | Deficiency | Next action |
| - | --------------- | -------------- | -------- | ----- | ---------- | ----------- |
| 1 | Brain unavailable → Skills + native continue | `INPL` | `phase6-mandatory-matrix.test.ts` | OpenClaw | Silent Brain loss residual | Codex verify |
| 2 | Skills unavailable → Brain + native continue | `INPL` | same | OpenClaw | Silent Skills loss residual | Codex verify |
| 3 | Both unavailable → native honest degraded | `INPL` | same | OpenClaw | Crash-on-dual residual | Codex verify |
| 4 | Brain auth revoked → Skills still works | `INPL` | same + fake auth matrix | OpenClaw | Cross-domain auth coupling residual | Codex verify |
| 5 | Skills auth revoked → Brain still works | `INPL` | same + fake auth matrix | OpenClaw | Cross-domain auth coupling residual | Codex verify |
| 6 | Restart with both outboxes pending | `INPL` | same | OpenClaw | Data-loss residual | Codex verify |
| 7 | Queue capacity reject-new | `INPL` | same | OpenClaw | Unbounded growth residual | Codex verify |
| 8 | Duplicate delivery / replay | `INPL` | same | OpenClaw | Double-apply residual | Codex verify |
| 9 | Brain content → Skills rejected pre-transmit | `INPL` | same + envelope builders | OpenClaw | Privacy leak residual | Codex verify |
| 10 | Secret canaries absent from logs/state/events | `INPL` | same | OpenClaw | Secret persistence residual | Codex verify |
| 11 | Cross-domain namespace isolation | `INPL` | same | OpenClaw | Store crosstalk residual | Codex verify |
| 12 | Independent enable/disable/drain | `INPL` | same + feature-flag tests | OpenClaw | Coupled flags residual | Codex verify |
| 13 | Perf budgets | `INPL` | `phase6-perf-baseline.test.ts`; `PHASE-6-PERF-BASELINE.md` | OpenClaw | Silent budget drift residual | Codex verify |
| 14 | Throttle / malformed / fake crash-restart | `INPL` | matrix | OpenClaw | Sticky failure residual | Codex verify |
| 15 | Privacy: Skills never registers conversation hooks | `INPL` | matrix + source scan | OpenClaw | Skills conversation capture residual | Codex verify |
| — | Platform audit/correlation rejection | `BLOCK` | SKIPPED_PLATFORM_LIVE | Platform | Needs Phase 7 stage audit API | Remain blocked |
| — | Real Platform credential issuer revoke | `BLOCK` | SKIPPED_PLATFORM_LIVE | Platform | Fake-as-live risk | Remain blocked |
| C-A | Coexistence proof A | `INPL` | `PHASE-6-STATUS.md`; `native-coexistence.test.ts` | OpenClaw | Synthetic-only gap | Codex verify |
| C-B | Coexistence proof B | `INPL` | same | OpenClaw | Synthetic-only gap | Codex verify |
| C-C | Coexistence proof C | `INPL` | same | OpenClaw | Synthetic-only gap | Codex verify |
| C-D | Coexistence proof D | `INPL` | same | OpenClaw | Synthetic-only gap | Codex verify |
| C-E | Coexistence proof E | `INPL` | same | OpenClaw | Synthetic-only gap | Codex verify |
| C-F | Coexistence proof F | `INPL` | same | OpenClaw | Synthetic-only gap | Codex verify |
| C-G | Coexistence proof G | `INPL` | same | OpenClaw | Synthetic-only gap | Codex verify |

---

## E. Wave 8–10 finding map (tests / gates)

| Finding | Classification | Evidence | Owner | Deficiency | Next action |
| ------- | -------------- | -------- | ----- | ---------- | ----------- |
| Public MCP toolFilter API | `INPL` | ownership + unregister + composition unit tests | OpenClaw | Ownership race residual | Codex verify |
| Catalog listTools exposure under flags | `INPL` | `agent-bundle-mcp-runtime.mcp-tool-filter.test.ts` | OpenClaw | Fake-only residual | Codex verify |
| Brain four-flag MCP wiring | `INPL` | linkbrain feature-flags + registered-plugin | OpenClaw | captureDrain has no MCP tool names | Codex verify worker gate + null deny-all |
| Skills four-flag MCP wiring | `INPL` | linkskills feature-flags + registered-plugin | OpenClaw | telemetryDrain has no MCP tool names | Codex verify worker gate + null deny-all |
| Deny-all ≠ `include:[]` | `INPL` | resolver describe + materialize denyAll tests | OpenClaw | — | Codex verify |
| Operator ceiling cannot be widened | `INPL` | composition + hot catalog tests | OpenClaw | — | Codex verify |
| Same-runtime hot invalidation | `INPL` | hot catalog test (ownership/replace/rollback/removal/reload/utilities) | OpenClaw | — | Codex verify |
| Drain ownership / storm | `INPL` | feature-flags-drain/enqueue tests | OpenClaw | Queue storm residual | Codex verify |
| AuthClaims 1.1 shape | `INPL` | auth-claims-1.1 tests | OpenClaw | — | Codex verify |
| AuthClaims owner countersign | `PART` | aggregates; request packet | Owners | PENDING (deferred past Codex) | Countersign after Codex confirms tip |
| Coexistence | `INPL` | `native-coexistence.test.ts` | OpenClaw | Synthetic gap | Codex verify |
| Phase 13 tip totals | `INPL` | Phase 13 tip proof text | OpenClaw | Tip lag | Update to wave-10 tip after push |
| §13.3 ledger atomic classifications | `INPL` | this file | OpenClaw (provisional) | Not Codex-accepted | Codex accepts or revises each row |
| §13.3 ledger acceptance | `OUT` | Plan Phase 14 | OpenClaw Codex | Grok must not self-accept | Codex assigns acceptance |

## F. Explicit non-claims

- No seven-value classification is **accepted** here.
- No merge / self-certify / hosted CI green claim.
- Fixture-owner countersign is **not** requested in wave 10; request only after Codex confirms final head + aggregates.
- MCP toolFilter seam corrections are locally implemented; Codex must re-verify.
