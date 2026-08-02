# Agent Session Handoff

## Session Metadata

| Field            | Value                                                                            |
| ---------------- | -------------------------------------------------------------------------------- |
| Agent identity   | Cursor Local Agent (release-hygiene leader, Cursor Grok 4.5 High)                |
| Session ID       | cursor-local-mac-mini-release-hygiene-20260802-1313                              |
| Orchestrator key | cursor-local-mac-mini-desktop-workspace-orchestrator                             |
| Objective        | Pre-launch release hygiene: archive superseded docs, update ops truth, proven dead/temp only |
| Scope            | Isolated worktree docs/hygiene only; no live Lisa/stage/credentials/cloud/prod   |
| Started          | 2026-08-02 13:13 Asia/Taipei                                                     |
| Ended            | 2026-08-02 13:45 Asia/Taipei                                                     |
| Starting branch  | release-hygiene-cleanup @ origin/development `2025401aafc`                       |
| Ending branch    | docs/release-hygiene/cursor-local-mac-mini-release-hygiene-20260802-1313         |
| Starting commit  | 2025401aafc7e877bb11e83c852bb718cdba0a54                                         |
| Ending commit    | 3a33685f5ef77659eeb9e956580698ee4314ff8c                                         |
| Starting status  | clean, tracking origin/development                                               |
| Ending status    | draft PR to development                                                          |

## Summary

Carlos-approved pre-launch hygiene on a fresh `origin/development` worktree. Three Grok 4.5 High lanes (docs/archive, dead-code, repo-hygiene/test) ran read-only. Applied only high-confidence archive moves and ops-doc refreshes. No application/runtime code deletes (freeze pins block CURSOR-GROK / implementation-plan moves; dead-code lane returned zero safeDeletes). Shared checkout and live Lisa/stage untouched; untracked canary session preserved.

## Files Inspected

- Root/scoped AGENTS, briefing, coordination, current-status, active sessions, recent OCP-W10/W20/W30 handoffs/evidence, canary runbook, linkbots README/docs, model-routing contract, CURSOR-GROK provenance refs

## Files Created

- `docs/archive/README.md`
- `docs/agent-sessions/active/cursor-local-mac-mini-release-hygiene-20260802-1313.md` (then moved to completed/)
- `docs/handoffs/2026-08-02-release-hygiene-cleanup.md`

## Files Modified

- `README.md` — onboarding + evidence/canary pointers
- `docs/agent-briefing.md` — 2026-08-02 pre-production supersession
- `docs/current-status.md` — pre-production hygiene top section
- `docs/execution/openclawdevelopmentplan01/runbooks/stage-prod-canary-controls.md` — HEAD authority note
- `linkbots/README.md` — workshop vs live + archive pointer

## Files Deleted

None (archives used `git mv`).

## Archive moves

- `linkbots/lisa/docs/PHASE1-LINKBRAIN-LINKSKILLS.md` → `docs/archive/linkbots-lisa/`
- `linkbots/lisa/docs/LINKBRAIN-AGENT-COORDINATION-HANDOVER-PROMPT.md` → `docs/archive/linkbots-lisa/`
- `linkbots/lisa/heartbeat-digest-preview.md` → `docs/archive/linkbots-lisa/`
- four `openclaw.json.bak-*` → `docs/archive/linkbots-lisa/workshop-backups/`

## Commands Run

- Coordination git inspect + `git fetch origin development`
- Three Task subagents (`cursor-grok-4.5-high`)
- `git diff --check`
- `node scripts/docs-list.js` path sanity
- `node --experimental-strip-types --test linkbots/lisa/ops/model-routing-contract.test.ts linkbots/lisa/ops/lisa-ops.test.ts` → **49 pass**
- Secret-pattern scan on changed files → no hits
- Confirmed shared canary file still present and absent from this worktree

## Decisions

| Decision | Reason | Evidence | Approval |
| -------- | ------ | -------- | -------- |
| Archive Phase-1 + Stage-2 kickoff + bak/preview only | Clearly superseded; no freeze/ledger pins | Lane reports + rg | Carlos pre-launch cleanup + implementation judgment |
| Keep all `docs/CURSOR-GROK-*` and frozen implementation plan | Provenance/hash/ledger pins | PHASE-0 freeze, §13.3 ledger, PACI pins | Implementation judgment (prefer not delete) |
| No code safeDeletes | Dead-code lane confidence <0.95 for deletes | Zero callers ≠ dead workshop | Prefer not delete |
| Refresh current-status top section | Agents were reading July truth as current; Carlos assigned hygiene leader | Stale dashboard vs evidence | Carlos assignment |
| Never touch shared checkout | Preserve untracked canary session | User constraint + ls shared active/ | Carlos explicit |

## Tests and Verification

- Lisa ops + model-routing contract: 49/49 pass
- `git diff --check` clean
- docs-list shows briefing/current-status; CURSOR-GROK execution prompt retained
- No live runtime health claimed
- Full `pnpm check*` / vitest not run: docs/hygiene only; worktree had no ready `node_modules` (partial install from probe removed)

## Problems and Blockers

- OCP-W10 and ACP-wait sessions remain `handing-off` under `active/` — owners/Orchestrator should closeout (not this session)
- CURSOR-GROK prompts still appear in `docs:list` / docs_map public surface — needs coordinated archive+rewrite later

## Uncommitted Changes

None expected after commit. Pre-existing stash `wip-auth-unrelated` untouched.

## Risks and Unknowns

- Feature agent edited Orchestrator dashboard top section under Carlos hygiene authorization; Orchestrator may want a further refresh
- Archived bak files may contain sensitive workshop config shapes (no literal secret markers found in scan)
- Historical handoffs still mention old PHASE1 path as untracked — append-only; not rewritten

## Remaining Work

- Orchestrator closeout of stale active sessions
- Optional later: coordinated CURSOR-GROK archive with freeze/ledger link rewrites
- Human review of draft PR → development

## Exact Next Action

Merge draft PR after review; do not deploy to live Lisa/stage from this PR.

## Questions for Carlos

None blocking.

## Questions for the Orchestrator or Next Agent

Refresh dashboard from this handoff; close or move handing-off W10/ACP active records if work is done.

## Confidence

96% for scoped hygiene correctness; 0% claim of production readiness or live canary start.

## Amendments

### 2026-08-02 — branch tip after hygiene push

- **What was wrong:** Ending-commit field lagged by one meta SHA-sync commit during closeout.
- **Corrected fact:** Branch/PR tip after this amendment commit is recorded in git; content tip for archive+ops refresh remains .
- **Why:** Avoid infinite ending-SHA chase; machine consumers should use  / PR .
- **Who:** cursor-local-mac-mini-release-hygiene-20260802-1313
- **Evidence:** d3d2f0c2c24 docs(hygiene): finalize handoff ending SHA
3a33685f5ef docs(hygiene): set handoff ending commit to pushed tip
72f46875900 docs(hygiene): sync handoff ending SHA to branch tip
48955a1bb44 docs(hygiene): record ending SHA and finalize session closeout
5453be356db docs(hygiene): archive superseded Lisa workshop materials; refresh pre-production ops truth
2025401aafc Merge pull request #43 from linktrend/ocp-w30-approved-pdf-routing-cli
1140c0a4df9 feat(lisa): approve MiniMax-M3 PDF document routing as approved_unverified candidate
fe56c2e697e docs(ocp-w20): strip trailing whitespace in release-graph.md
d167ff3325b docs(ocp-w20): cross-repo integration evidence, release graph, and handoff
82fe631741a fix(lisa): machine-readable PDF needs_human_gate in routing contract
ccb3ce12031 fix(lisa): fail-closed live ops opt-in gates for OCP-W20 candidate
3bb4ef1eef3 test(acp): strengthen sessions_wait adversarial and PACI pin docs for OCP-W20
3169119fb69 docs(sessions): remove active record after OCP-W10 independent correction closeout
7032bc66f2b docs(sessions): complete OCP-W10 independent correction session
f2acb6c12ef fix(ocp-w10): independent correction — ACP adversarial waits + MiniMax PDF honesty
5dcb388d74f docs(sessions): complete OCP-W10-LISA-RELEASE replacement session
305bb27dd4f fix(lisa): allowlist sessions_wait in workshop lisa-cron SOT
40bcb599a1d feat(lisa): OCP-W10 Lisa release RC — ACP wait, ops, non-live routing
36be8d073c3 merge(lisa): integrate ops01 allowlisting into W10 Lisa release RC
15ab4a9d3cf merge(acp): integrate sessions_wait re-entry into W10 Lisa release RC
0675755d170 docs(sessions): record ACP wait re-entry feature session
3c8dbf9f574 docs(paci): add Wave 10 cold-start correction brief
db54d2edb85 docs(handoff): record agents_wait vs sessions_wait decision
3e2abe20a42 feat(agents): add sessions_wait for ACP cron park-wait
e25af324d7e docs(paci): record Wave 9 Phase-13 handoff for Codex re-verification
a8bef6519d9 fix(plugins): rematerialize activating cache hits with live facade ownership (PACI IV Wave 9)
23e06bb94e4 docs(paci): finalize Wave 8 tip pointer for Codex re-verification
49b3d1006db docs(paci): align Wave 8 handoff tip to origin-synced HEAD
5b0d3765a51 docs(paci): point Wave 8 Codex re-verify at origin HEAD
bbc37b7a7f6 docs(paci): record Wave 8 Phase-13 handoff for Codex re-verification
a80d19fc871 fix(plugins): activate cached and fresh loads via combined MT snapshot (PACI IV Wave 8)
66f4bf2be6d test(plugins): add Wave 8 real-loader machine-token activation proofs
2426067e813 docs(paci): record Wave 7 pushed HEAD for Codex re-verification
d3ad3dfc23b fix(plugins): commit machine-token ownership with registry activation (PACI IV Wave 7)
aced47c38d3 docs(paci): point Wave 6 Codex re-verify at origin HEAD
6329eb156d5 docs(paci): align Wave 6 handoff tip to origin-synced HEAD
e073b471a44 docs(paci): record Wave 6 Phase-13 heads for Codex re-verification
72ff0eb7fcf fix(plugins): defer machine-token publish to registry activation (PACI IV Wave 6)
fb0e9a6b3d3 docs(paci): pin Wave 5 Phase-13 tip SHAs
13cd943f134 fix(paci): Wave 5 IV corrections — atomic facade generations, non-bypassable MCP body ceiling
ab76abe0bbf docs(paci): pin Wave 4 Phase-13 tip SHAs
ce8264c16d5 fix(paci): Wave 4 IV corrections — immutable host binding registry, bounded MCP response bodies
a1cf51358ba docs(paci): seal Wave 3 Phase-13 tip SHAs
228d68a13e4 docs(paci): record Wave 3 branch tip after Phase-13 pin
c5c2437132a docs(paci): pin Wave 3 Phase-13 tip SHAs
b3a7eb03c32 fix(paci): Wave 3 IV corrections — host facade injection, guarded MCP fetch, acquire shrink, fail-closed bindings
2a1cab16be6 docs(paci): pin Wave 2 tip SHA in Phase-13 and session handoffs
ce2df824bf0 fix(paci): Wave 2 IV corrections — metadata, auth network, host SDK, SecretRef transports, fake counterprobes
4126b7f590b docs(openclawdevelopmentplan01): pin final PACI correction tip SHA
da8bb4c6174 docs(openclawdevelopmentplan01): record PACI correction tip and Phase-13 evidence note
f6800178d16 fix(auth): apply PACI independent-verification corrections
363621b2610 fix(auth): wire machine-token keyRef fingerprints into MCP and plugin callers
fb9fe4b68b8 fix(lisa): deployed renderer paths, fail-closed approve, strict offline dates
3e449b74d8a feat(auth): add PACI machine-token client_credentials seam for MCP and plugins
cb029a29aca fix(lisa): attribute checkpoint-only to merged IDE GITOPS-01
5c6f4b2b664 fix(lisa): Codex correction pass for ops contracts
7bc4118a1c6 docs(openclawdevelopmentplan01): authorize PACI machine-token seam execution prompt and draft pin
7bc90fd0561 docs(lisa): sync handoff ending SHA to tip
ef9693b55ce docs(lisa): record final SHA in lisa-ops01 handoff
3652f6540bd feat(lisa): checkpoint-only Ship/Pull ops contracts and routing eval
bf10d35847c docs(openclawdevelopmentplan01): close out PACI OpenClaw compatibility handoff provenance
86cb29a6450 docs(openclawdevelopmentplan01): close AuthClaims 1.1 fixture-owner gate as OWNER_COUNTERSIGNED
e8f607f35f0 docs(openclawdevelopmentplan01): set wave20 inspection tip to pushed HEAD
005c9454f1b docs(openclawdevelopmentplan01): align wave20 inspection tip to clean HEAD
5754d7ffd69 docs(openclawdevelopmentplan01): finalize wave20 exact clean tip
80d68c7f620 docs(openclawdevelopmentplan01): set wave20 countersign inspection tip to clean HEAD
83c118e981e docs(openclawdevelopmentplan01): record wave20 exact clean tip
a1c7e19d798 docs(openclawdevelopmentplan01): pin wave20 exact clean tip SHA
bd08dd6ade0 docs(openclawdevelopmentplan01): pin wave20 final inspection tip SHA
3208ac6caad docs(openclawdevelopmentplan01): pin wave20 inspection tip and clean HEAD
a2a13cf9272 docs(openclawdevelopmentplan01): pin wave20 correction commit SHA
059e6e7054d docs(openclawdevelopmentplan01): wave20 AuthClaims Platform HEAD provenance
6dc055e0c9f docs(openclawdevelopmentplan01): pin wave19 correction commit SHA
b1657b463a5 docs(openclawdevelopmentplan01): wave19 AuthClaims provenance reconciliation
febb498817e docs(openclawdevelopmentplan01): pin wave18 correction commit SHA
0e31ab84df7 docs(openclawdevelopmentplan01): wave18 restore §2 hierarchy and Phase-0 evidence
69641277c8c docs(openclawdevelopmentplan01): pin wave17 correction commit SHA
d41eb50435a docs(openclawdevelopmentplan01): wave17 Phase-13 coverage without Codex classifications
098abb436fa docs(openclawdevelopmentplan01): pin wave16 correction commit SHA
7b4be55a3df fix(openclawdevelopmentplan01): wave16 exact-line descriptive exclusions for section 13.3
ffb5ea141bf docs(openclawdevelopmentplan01): record wave15 correction tip SHA
e10385489a3 docs(openclawdevelopmentplan01): pin wave15 correction commit SHA
177134d611c fix(openclawdevelopmentplan01): wave15 fail-closed section policy for section 13.3 ledger
54dfb0165b1 docs(openclawdevelopmentplan01): pin wave14 correction commit SHA
8f77192d513 docs(openclawdevelopmentplan01): record wave14 correction tip SHA
a118d7c5fa2 fix(openclawdevelopmentplan01): wave14 inherit requirement context in section 13.3 ledger
903741cc5a2 docs(openclawdevelopmentplan01): align wave13 tip fields with wave12 pattern
c4efdf6cd30 docs(openclawdevelopmentplan01): restore wave13 tip field placeholders
67c4c25a366 docs(openclawdevelopmentplan01): pin wave13 Exact tip SHA to tip-record
bd6efdb7f32 docs(openclawdevelopmentplan01): record wave13 correction tip SHA
2ae8e7e4e36 docs(openclawdevelopmentplan01): pin wave13 Exact tip SHA to tip-record
e383a4d51fa fix(openclawdevelopmentplan01): wave13 fail-closed section 13.3 coverage extraction
e369d87ade1 docs(openclawdevelopmentplan01): record wave12 correction tip SHA
e332ed44482 fix(openclawdevelopmentplan01): wave12 plan-authority section 13.3 ledger
0701c6d8a2a docs(openclawdevelopmentplan01): align wave11 tip fields with wave10 pattern
ce72a5b8db2 docs(openclawdevelopmentplan01): clarify wave11 tip-record vs correction SHA
8c8af8ddfc0 docs(openclawdevelopmentplan01): record wave11 exact clean tip SHA
daeee30007e docs(openclawdevelopmentplan01): complete wave11 tip metadata
8a1c7e786e9 docs(openclawdevelopmentplan01): record wave11 correction tip SHA
6c65a0b91a8 fix(openclawdevelopmentplan01): wave11 plugin-test-api, boundary, atomic 13.3 ledger
1ccf01dd02c docs(openclawdevelopmentplan01): clarify wave10 tip-record vs correction SHA
f07134ea138 docs(openclawdevelopmentplan01): record wave10 correction tip SHA
b903fe74cd7 fix(openclawdevelopmentplan01): wave10 MCP deny-all, flags, hot invalidation, atomic 13.3
5d1d47ea027 docs(openclawdevelopmentplan01): wave9 HEAD-record tip equals docs packet
2fac6e3aaa1 docs(openclawdevelopmentplan01): wave9 Phase14 packet, §13.3 update, tip 31/203
a7cf9bf2c1b feat(plugins,mcp): add public registerMcpServerToolFilter seam and wire Brain/Skills flags
c16dfeaa327 docs(openclawdevelopmentplan01): wave8 HEAD-record tip equals bc1d3133d10
bc1d3133d10 docs(openclawdevelopmentplan01): self-pin wave 8 Exact tip SHA
d7bf6514501 docs(openclawdevelopmentplan01): pin Exact tip SHA to tip-record parent
93dfb8a8acb docs(openclawdevelopmentplan01): restore wave 8 tip SHA fields and reopen fixture gate row
1ac650f2bdc docs(openclawdevelopmentplan01): pin wave 8 cleanup tip SHA
12f376b52e8 docs(openclawdevelopmentplan01): wave8 cleanup — tip refs, §13.3 individual ledger, Skills schema pins
fdbe7a9113b docs(openclawdevelopmentplan01): wave8 tip SHA record
1a7787b660e docs(openclawdevelopmentplan01): wave8 Phase14 packet, AuthClaims countersign request, tip 31/203
5a9842f8aa2 fix(linkbrain,linkskills): wave8 drain ownership, AuthClaims 1.1, coexistence
b3e8853b1c1 docs(openclawdevelopmentplan01): wave7 HEAD-record 6edd16a7144
6edd16a7144 docs(openclawdevelopmentplan01): wave7 tip equals a441b439118
a441b439118 docs(openclawdevelopmentplan01): record wave7 tip SHAs for Phase 14
b4ac94debf5 docs(openclawdevelopmentplan01): wave7 Phase14 packet, AuthClaims 1.1.0, tip 29/196
39e85a5d6bc fix(linkbrain,linkskills): wave7 MCP flags, bounded drain, enqueue ownership
8b4bd39e27c docs(openclawdevelopmentplan01): independent FAKE/TEMPLATE runbook rehearsal wave 7
b9f948f9b3a docs(openclawdevelopmentplan01): record wave 6 pushed HEAD in Phase 13/handoff
452033e98da docs(openclawdevelopmentplan01): wave 6 Phase 13 packet, runbooks, ledger, sessions
957cb2797a5 fix(linkbrain,linkskills): wave 6 Phase 14 corrections — telemetry, drains, bounds, runbooks
9cfe4c31ea5 docs: wave-5 bounded-timeout closeout; CI deferred/waived
4fa1e9f7ed0 fix(linkbrain): format and lint bounded timeout helpers
57a8571cd1b fix(linkbrain): genuine bounded timeout for capture and lifecycle
11fdce6e81c docs: record capture concurrency tip and ci-gate URL
8e236d2f056 fix(linkbrain): serialize same-stream capture enqueue/flush
2bb00ef4384 docs: record capture durability tip and ci-gate URL
74f7e802227 docs: fix bare URL in capture durability handoff
44b33133c26 fix(linkbrain): durable-save capture buffer before batch flush
da762a39f73 docs: point Phase 13/Codex packet at fixture-owner closeout tip
0a2e97fe643 docs: repair docs_map after fixture-owner closeout handoff fill-in
3735ec56408 docs: repair docs_map after fixture-owner closeout handoff fill-in
a61a764f147 docs: record fixture-owner closeout tip and ci-gate URL
e1ac7323be6 docs: close Phase 1 fixture-owner gate after Brain/Skills OWNER_COUNTERSIGNED
429a7818e2f docs: complete Brain denial-fix session move
8292b065cd1 docs: finalize Brain denial-fix handoff and session
32987eb3ac1 docs: refresh docs_map after Brain fixture denial fix
e25a4cd68e7 style(docs): oxfmt Brain denial-correction markdown
97d87f7d87b fix(linkbrain): align Brain fixtures to 1.0.0 after COUNTERSIGN_DENIED
0b19e43bad4 docs(ocp): fix handoff bare URLs and refresh docs map
0d3922249d9 docs(ocp): record ci-gate green tip and Codex re-verify handoff
69bd01a4ddd docs(ocp): wave-2b Phase 13 update and docs map for PR #38
d79e3356db5 fix(linkbrain,linkskills): SSRF-guard HTTP transport fetches
a7f3ca0e75d docs(ocp): record tip SHA in OpenGrep/docs lint handoff
cdf42b6bca3 fix(linkskills,docs): clear OpenGrep and docs lint for PR #38
4103bd6c1c2 docs(ocp): wave-2b repin Platform/Brain/Skills to latest corrected HEADs
1d30ac8a7fa fix(linkbrain,linkskills): clear PR #38 CI gates for new plugins
5353836006b docs(ocp): correction wave 2 contract pins and AuthClaims fixtures
e8f2a86af41 docs(phase13): sync tip SHA after PR #38 push
048922582e5 docs(phase13): record draft PR #38 for exact-head CI
17508f539d7 chore(openclawdevelopmentplan01): format fixtures docs and commit lockfile for link plugins
c01eb5eb6ef docs(phase13): record corrected handoff commit SHA
811ec575503 docs(phase13): corrected provisional handoff and close sessions
6f6887c31ce docs(phase6): update status counts to tip 20/144
22717f28bb3 docs(phase6): record tip suite counts after transport land
2b1f6293f93 docs(sessions): complete transport-adapters feature session
e88ba95d0a2 feat(linkbrain,linkskills): add configurable disabled/fake/http/mcp transports
66a32888129 test(phase6): complete mandatory failure/recovery/perf matrix
a82c14481e8 docs(openclawdevelopmentplan01): pin contract hashes and fixture sign-off
63cd8e6a053 docs(sessions): record Phase 13 handoff push SHAs
d5ca4fba04c docs(handoff): sync Phase 13 coverage index and draft operator runbooks
600c877212e docs(runbooks): add Brain/Skills enable-disable-drain-rollback-restart operator runbooks
f8e2253deb3 docs(handoff): Phase 13 provisional Grok execution-to-verification handoff
4b941060d67 docs(handoff): set Phase 6 ending SHA to b8d33bf3c60
3be15aa966f docs(handoff): record Phase 5 push SHA and concurrent Phase 6 note
b8d33bf3c60 feat(mcp): add Phase 5 managed MCP templates and tool filters
5dcd80bfe7c docs(sessions): remove Phase 3 session from active
afc61dd4509 docs(sessions): complete linkbrain Phase 3 feature session
7665116e945 feat(linkbrain): map §10.1 lifecycle hooks to Brain capture/coordination
5992a8fc730 feat(linkskills): add default-disabled Skills plugin skeleton with telemetry outbox
2724038dae5 feat(linkskills): add Phase 0–1 freeze packet and Skills fixtures/fake
b93f558d24b feat(linkbrain): add default-disabled Brain plugin skeleton with outbox
4966913a6f8 docs(plan): add approved OpenClaw Lisa Brain/Skills plan and Grok prompt
02659b9ac81 Merge pull request #35 from linktrend/dev/minicodex/WP-0-publish-coordination-records-20260727
ead71ef7f81 docs: finalize Lisa deployment handoff
c6ea73ae604 Merge remote-tracking branch 'origin/development' into dev/minicodex/WP-0-publish-coordination-records-20260727
067d1f2ea5e Merge pull request #34 from linktrend/issue/ocp-lisa-digest-830-ship05
ea3f6c7867d docs(lisa): isolate pipeline email bodies
9b8ec780a70 docs(lisa): serialize pipeline coordination
28275484ae2 docs(lisa): clarify overnight routing
b9c248bdef1 docs(lisa): provision ship pull file tools
7e4cd7f200e docs(lisa): require fresh promotion status
29226dbbdc4 docs(lisa): centralize pipeline status writes
6d1df7b5668 docs(lisa): harden pipeline cycle state
94289548deb docs(lisa): keep unrecovered denials fatal
ec90aa8cd11 docs(coordination): archive completed Lisa session
722d6fd1d33 docs(lisa): finalize safe digest recovery
26f5f89545f Merge remote-tracking branch 'origin/development' into dev/minicodex/planningopenclawprime
6c66aec59df Merge pull request #33 from linktrend/issue/cleanup-ship-hour-labels
218ce75afdf docs(lisa): add safe clock migration
aea5d34117a Merge remote-tracking branch 'origin/development' into issue/cleanup-ship-hour-labels
7fec95a9111 Merge pull request #36 from linktrend/dev/minicodex/WP-0-development-ci-repair-20260727
0ce273160d1 revert(lisa): keep unrecovered cron denials fatal
2b9c1147acf fix(lisa): resolve digest and denial review findings
285fc1351e5 ci: refresh npm shrinkwrap
f26e0e3b7ae ci: restore development quality gates
15c4cc301da docs: finalize orchestrator promotion handoff
f485950b9da fix(lisa): stop digest abort on opaque 2>&1 and Telegram code fences
aba0da40532 fix(lisa): harden silent-work for Telegram and Control UI
5641060c055 fix(lisa): stop Ship/Pull cron from exploring lisa-safe as a directory
4612ac9e11f feat(lisa): move digest to 08:30 and advance morning Ship/Pull
c06249531e2 fix(lisa): rename Ship/Pull waves to hour labels
650d4af1c36 feat(lisa): Option A Ship/Pull clock + git-ops inheritance (#32)
1e34d2c59d8 Merge pull request #27 from linktrend/dev/minicodex/WP-0-sync-main-development-20260724
f754eb79d94 merge: synchronize main into development
6d67477eadf Merge pull request #24 from linktrend/dev/minicodex/WP-0-openclaw-prime-promotion-20260723
49723ecd9e5 ci: rerun after default-branch bootstrap
6bfc783318d Merge pull request #26 from linktrend/dev/minicodex/WP-0-default-branch-workflow-bootstrap-20260723
82dbb7da289 refactor(tool-repair): split standalone parse helpers
87a609ba3fb fix(ci): keep internal Cursor ACP helpers private
9d672c6c0cb fix(deps): carry security baseline into main bootstrap
e1e79e902b5 fix(ci): bootstrap fork workflow tokens on main
b986011703d Merge remote-tracking branch 'origin/development' into dev/minicodex/WP-0-openclaw-prime-promotion-20260723
2acffa7c993 test(deps): update managed Axios baseline
d0815f317dd Merge pull request #25 from linktrend/dev/minicodex/WP-0-workflow-bootstrap-20260723
2be31aca4e3 test(ci): cover fork Testbox fallbacks
98edc80c536 fix(ci): add fork runner fallbacks
42dd5f5df5f fix(ci): bootstrap fork workflows and security baseline
72300ea94b9 fix(ci): unblock fork promotion checks
85498bffe4b docs: preserve append-only handoffs in lint
330ddee9871 test(exec): narrow denied gateway result
6f49826b9a3 fix(ci): keep Cursor ACP helpers private
2546252002b fix(acp): honor explicit model selection
01986138af0 docs: record orchestrator state and completed tasks
786f61d31d4 fix(acpx): preserve configured Cursor model
9922fe8b83c fix(exec): direct blocked Google work to lisa-safe
d0f753c5c76 fix(exec): satisfy denylist integration gates
bf89642adf0 fix(exec): hard-deny opaque shell under yolo denylist screening
3c7b772a5c5 fix(acp): normalize Cursor Grok requests to high-fast
c41d5b6adc8 fix(acp): map Cursor Grok aliases to ACP-advertised model ids
678eed272da fix(acp): preserve model initialization errors
1f1af277bbd feat(acpx): pin Cursor ACP coding to Grok 4.5 Medium with High fallbacks
6d6dbdcd330 Merge pull request #22 from linktrend/docs/pr-merge-complete-20260723-development
dd9e71c5cce docs: record preservation PR merges on development, staging, and main
c1de8594e78 Merge pull request #21 from linktrend/docs/pr-merge-complete-20260723
91f8dda0d77 docs: record preservation PR merges on development, staging, and main
e35f1c0659a Merge pull request #20 from linktrend/docs/initial-agent-handoff-20260723
f544ba7647d Merge pull request #18 from linktrend/docs/initial-agent-handoff-20260723-development
a340f426fa0 docs: record final Lisa PR handoff
497dfd8ff45 docs: record final Lisa PR handoff
4c47f5bf8b4 docs: preserve Lisa handoff and workshop state
d178f4f08b4 docs: preserve Lisa handoff and workshop state
ed4b348d889 Merge pull request #17 from linktrend/fix/cursor-acp-advertised-grok-models-20260721
1ed5f887a0c fix(acp): map Cursor Grok aliases to ACP-advertised model ids
0269d85e392 feat(acpx): Cursor ACP Grok 4.5 Medium preference + Needs-review delivery proof (#16)
5b0facb8575 fix(acp): avoid non-Error stringification in model init failure path
26006ca999f fix(ci): clear knip/lint blockers without axios shrinkwrap churn
c4eb058d4dd fix(ci): unblock PR gates for Grok ACP + Needs-review ship
0750319a115 feat(acpx): pin Cursor ACP coding to Grok 4.5 Medium with High fallbacks
05dab299687 fix(ui): retire false Needs review with gateway and text delivery proof
9906086a94c Merge pull request #14 from linktrend/fix/local-coder-artifact-lifecycle-20260720-v2
071a0e04158 fix(agents): harden local-coder completion and shared scratch artifacts
97ffa24db1d Merge pull request #13 from linktrend/fix/control-ui-stale-delivery-review
eaad83d3b2f fix(ui): clear false Needs review after reconnect delivery proof
ffef7e1e0fb Merge pull request #12 from linktrend/integration/lisa-local-coder-approval-20260720
a6dbeb7d1ba fix: satisfy integration quality gates
e5d3b66f460 fix(agents): isolate local-model coder context
1f243bc9c5c fix(exec): hard-deny opaque shell under yolo denylist screening
9fbe75bc20a fix(exec): adapt denylist backport to async shell planning
3901ad94f0f docs: align denylist field table formatting
18fc68ad70d feat: add exec approvals denylist (STOP list) screening
503b21dc6bf fix(thread-ownership): cancel unread ownership response bodies (#111231)
990916c6ac8 fix(firecrawl): reject malformed 2xx response envelopes (#111210)
792f5b7b74e fix(cloud-workers): reconcile workspace results across turns (#111481)
200653bd60c fix(gateway): generate dashboard titles despite sender metadata (#111613)
0af934cbf94 fix(doctor): stream heartbeat transcript scans without full-file reads (#110721)
e1a82f49916 fix(cron): ignore blank Windows shell override (#111260)
6d39d3cf0ba fix(onboard): preserve gateway settings on rerun (#111569)
cacd98304e8 fix(sandbox): cancel CDP probe response bodies (#109767)
7d4dccf9597 improve(swarm): close out wait, phase, and worker follow-ups (#111605)
19314aa31ad fix(agents): reject non-UTF-8 MCP App sandbox CSP metadata (#111282)
3564c1c7954 fix(test): bound Matrix test process memory (#111607)
a8dd80afc09 fix(plugins): cancel discarded TTS contract response bodies (#111340)
eb3a600571f fix(ui): preserve native context menu for chat links (#111618)
367fe9a42b2 fix(chutes): report cache-read pricing from live catalog (#111253)
da10827439a feat(ui): accept drag-and-drop attachments in the new-session composer (#111530)
64c82812a5e feat(dashboard): pinned MCP apps — board rendering, lease re-mint, durable tool grants (#111524)
ddf57c083f1 fix(onboard): keep invalid wizard retries unpersisted (#111558)
b07985ef45e feat(ui): show waiting-for-approval run status in chat (#111445)
301657f2f3b fix(agents): keep exec ANSI sanitizer state across stream chunks (#111364)
a20e08a56e6 fix(skills): keep ClawHub search results on one line (#111441)
c5bc6c3d2dd fix(duckduckgo): preserve words around highlighted matches (#111460)
27f05c8993f fix(inworld): reject malformed base64 TTS audio (#111197)
00742700568 fix(xai): reject malformed streamed TTS base64 (#111201)
8a858c9c651 fix(openai): reject malformed Codex image base64 (#111235)
3c0f55b58f3 fix(gateway): prevent cross-client system-agent session takeover (#111565)
c5f9addb527 fix(ui): keep custodian transcript aligned after inference errors (#111562)
a0c3067b545 fix(qa-lab): bound evidence checkout ref git probe with timeout (#111448)
e0b1a39d2ac improve(i18n): generate native locales after merge (#111557)
3247a56d153 fix(ui): prevent cross-file mock leakage in Control UI tests (#111554)
7116ad6e28e fix(agents): preserve fresh workspace hatch (#111553)
473962b7def fix(onboarding): scope recommendations by workspace (#111560)
5fcf7e75de3 test: clear plugin runtimes between shared files (#111556)
a1e5b6ef0ed fix(doctor): honor active migration targets (#111555)
6c25f5ae335 fix(ui): keep steered composer messages visible until the transcript owns them (#111540)
bcbbf28093b docs(plugin-sdk): migrate retained SDK contracts (#111535)
c6f7ddff1a5 fix(ui): show attributed sender identity properly in chat (#111537)
b887cd01d81 fix(whatsapp): use canonical media primitives (#107017)
0fff74c800e feat(ios): replace the tab bar with a black overlay sidebar (web parity + dashboard) (#111339)
5420c5c409c feat(clickclack): session discussions — bound channels, side agent, lifecycle sync (#111503)
c45e3dd3157 fix(gateway): avoid macOS startup freeze during worker reconciliation (#111533)
6a408983d07 fix(onboard): make first-run hatch reliable (#111465)
77378cb0f3e fix(ui): keep stray file drops from leaving Control UI (#111531)
171a3852ba5 fix: install exact app recommendations and retry failures (#111518)
13ed8b5aa18 perf(state): cap the per-agent SQLite handle cache with LRU eviction (#111411)
f6a3f22629e refactor(channels): consolidate message action read gate (#111529)
1a574923cb1 fix(onboard): honor remote flags in interactive setup (#111517)
cb0bbcb1772 fix: update debugging skill file references (#111474)
22c336c0b46 fix(plugins): load active generation after upgrades (#111141)
50114c51630 fix(test): recognize CI env aliases (#111521)
06480d767ce feat(dashboard): stitch session dashboards end-to-end — live provider, show_widget pin, board commands (#111218)
431da144107 fix(plugins): load standalone files without manifests (#111515)
9c12542946c fix(gateway): reload when included config changes (#111511)
5ec3b2dab47 fix(install): isolate source postinstall state (#111514)
1ddb6f1bbb4 fix(system-agent): preserve setup success on audit failure (#111504)
31e52dc5c53 feat(gateway): allow explicit operator.admin in device auto-approval with critical audit finding (#111509)
5a6a19c1339 fix(qa): align runner inbound dispatch contract (#111507)
163a6c6e169 fix(agents): declare visible-session constraints upfront in sessions_spawn (#111502)
3e154b67611 fix(agents): let swarm collector fan-outs honor group caps (#111505)
c69d6e148e2 feat(ui): who's-online roster menu on the footer facepile (#111501)
40d31f34813 feat(control-ui): show relative commit age and hover-only copy button on About (#111495)
6d4082ef973 fix(ui): prevent unsafe custodian nudge answers (#111430)
b9cf1add0f9 fix(qa): retry transient history rebuilds (#111475)
c7e7ac27289 refactor: remove expired plugin compatibility surfaces (#111451)
e6d7aee41d6 fix(ui): stop chat normalizers throwing on null/undefined message entries (#111494)
50ce5dedeaf fix(android): improve Wear thread follow behavior (#111459)
8e0c50380c1 fix: preserve message-only terminal output (#111493)
83303f1ba87 feat(channels): batch 1 producers drop media placeholder bodies (#111447)
4c55a4fc282 feat(plugins): expose requester context to tool hooks (#111190)
6fb3aae404f fix(gateway): stop the unmanaged gateway named by its lock (#111378)
d4c7549d1ca test(nextcloud-talk): stabilize room timeout proof (#111490)
0db0142ec8b fix: preserve streamed text before terminal errors (#108509)
1e80a0ee889 chore: format chat run error changes
9dd021a5cc5 fix: align run error on mobile
0d511d1a67e chore: remove unrelated run failure changes
d2a4025d1f5 test: cover chat run error recovery
25b1c6c400c fix: show run failures above the composer
9a699c70376 fix: keep chat errors out of assistant messages
86b1961bcce fix: show run failures above composer
34978b5a074 fix(browser): report final URL when opening managed Chrome tabs (#111374)
0e0432e76ef fix(gateway): keep xdg-open stderr truncation surrogate-safe (#111323)
996312da9f2 fix(media): input_image base64 without media_type is forced to image/png even when bytes sniff as another valid image type (#111276)
a876451d8ba fix(qa): avoid touching operator state during private QA runs (#111446)
197c4f5a042 feat: generic session discussion seam with Control UI panel (#111337)
7aedca21b2d test(release): align built-in timing proofs (#111483)
a70f7702a93 fix(agents): keep web search error serialization surrogate-safe (#111327)
269099585a9 fix(discord): activity widgets recover from stalled gateway responses (#111380)
b15718f8d3f fix: warn before retrying timed-out exec commands (#111390)
a626330a3bf fix(deepinfra): model list fails when HTTP proxy is required (#111428)
6c9b31e4d56 fix(ai): honor Retry-After when retry-after-ms is unparseable (#111353)
fe9e018045d fix(tavily): reject blank extract URLs (#111333)
359859d343b fix(gateway): keep first outbound TLS off the main event loop on macOS (system-CA/trustd) (#111473)
87fbc19fe37 fix: complete lint toolchain reuse in worktrees (#111467)
f8e35afecc6 feat: avatar upload UI, self-service profiles, server-side avatar route (#111421)
1ef99e6dfbd feat(agents): authoritative write diffs end to end (#111456)
218c8a54967 test(signal): make status reaction timing deterministic (#111477)
ca3a1873a6a fix(test): make broad shard execution deterministic (#111416)
8c7f09a3c4d feat(system-agent): durable rolling transcript with openclaw.chat.history (#111440)
a53461b2b15 fix(ios): render Markdown lists and thematic breaks (#111223)
223235044a2 fix(cli): exit cleanly on subcommand-group --help (lazy register handle leak) (#111433)
356bec6f5d6 fix(usage): price usage rows with the owning agent's model registry (#111389)
1f507162ee4 fix(ci): validate sticky importer restores (#111444)
31423de9083 fix(channels): preserve ingress shutdown and named-account setup (#111449)
6dc6d5efeeb fix(qa): wait for active config revision after restart (#111073)
adf02e8de40 refactor(plugin-sdk): retire global provider publication (#111426)
783a5d21cfc refactor(config): purge numeric tuning knobs behind built-in defaults (#111382)
ec01949d862 feat(ui): gravatar fallback in shared avatar primitive (#111418)
e71ddb5c70b fix(onboard): reject unknown auth choices (#111409)
d96a5e2c9eb fix(system-agent): rebind verified model routes (#111431)
b4a206fc41f fix(gmail): prevent duplicate watch renewals during stalls (#108974)
3a85143d979 fix(qa): align ask-user protocol shape (#111429)
da534dc506f fix(ios): harden Talk voice-session lifecycle from review (#111424)
7ea4e6701ed fix(export): prevent broken emoji in HTML tool call previews (#104054)
c42ceb87702 test(gateway): await complete trajectory export instructions (#111427)
4d8462afdb4 test(sessions): isolate store pruning integration test (#111414)
5ae1f7f0f5e fix(agents): reuse configless prepared runtime (#111423)
d9c9eeb8cdb fix(ci): resolve manual protocol baseline
d9465c941e4 fix(gateway): constrain proxy device auto-approval roles (#111394)
d3f2c5ad819 fix(agents): handle deadline race in native hook relay (#111413)
ccea4ea4400 fix(models): support nested policy wildcards (#111350)
29ef6f86372 fix(scripts): resolve remaining repo tools through the worktree-aware helper (#111417)
d0f37bd8433 fix(qa): preserve paginated bus events (#111410)
4e008cd713d feat(ios): adopt Talk voice sessions (#111369)
0cc182844a8 fix(ui): refresh agent roster on config changes (#111395)
be831088e98 fix: local lint works in dependency-less worktrees (#111393)
a5323301e9b fix(swarm): live agents.run fan-outs launch collectors (#111379)
8d2e616483c fix(gateway): preserve explicit approval ids for validation (#111388)
2a6fd77c08f fix(net-policy): restore ipaddr typing compatibility
431482ca3ec docs(agents): require reading ClawSweeper rank-up moves before landing PRs (#111385)
6a8f16a69e1 chore(pr): reuse green hosted CI from patch-identical pre-rebase heads (#111335)
46b9a3e12d9 docs: Swarm user guide (#110325) (#111384)
06f5f73e473 refactor: own model discovery by runtime lifecycle (#111173)
e24420bc1c0 fix(android): stabilize Wear realtime Talk audio and tool calls (#111033)
c95a8e3df1e feat(ui): identity settings and own-identity chip (#111371)
3b84a55d994 refactor(protocol): pre-publish cheat-window cleanup and vintage tracking (#111041)
104691f8223 feat(swarm): add QuickJS guest orchestration (#111298)
bbcfec9e969 fix(channels): prevent outbound echoes and expose native login (#111341)
ef91ce57124 feat: keep reset session history searchable (#111194)
b9c9140034d fix(ci): declare injectable now param on runPrCiSweeper
e2930422d0b fix(ci): make pr-ci-sweeper clock injectable so lookback fixtures cannot rot
6add21bf402 fix(ui): remove duplicate instanceId getter left by concurrent merges
8178b3cc140 feat(clients): adopt model controls, session management, and keyboard history recall on iOS (#110831)
d685037c6e7 fix(workboard): avoid duplicate proof entries on completion (#111324)
5c9916950e6 feat(gateway): watched sessions in presence with viewer facepiles (#111225)
cfe4096db69 fix(cron): separate command delivery failures (#111345)
d4ed08994d3 fix(onboard): validate reset preflight (#111348)
a868d34804b Fix fractional restart handoff migration (#110231)
e0ecdc47bed feat(chat-ui): tool-diff follow-ups — cached diffs, apply_patch, isError, long lines (#111326)
c7d2d111d83 fix(ci): enforce plugin SDK API baseline (#111289)
b9fa1ffa27f feat(gateway): system change history RPC and Ask OpenClaw recent-changes panel (#111286)
b3bb40551b1 fix(mac): opening General Settings crashes in packaged app (#111300)
4e7ef6223c5 fix(cron): keep paced schedules stable across force runs and edits (#111331)
a5a05466fc7 fix(mcp): bound probe initialization (#111318)
10313e3eeef refactor(sessions): keep late-media attachment text out of persisted transcripts (#111293)
84e54ab264c chore(pr): landing-UX — aggregated validation, lock classes, ci-dispatch, committer guard (#111287)
ba06fe1541f feat(ui): author avatar chips on user messages (incl. queued) (#111309)
e2ca148d4b1 fix(codex): preserve JSONL framing across WebSocket writes (#110384)
48ecb31bc69 fix(discord): time out stalled Activity token bodies (#110667)
11beef19e2c fix(cli): keep plugin help transport-free (#111322)
dd16befe58a fix(logs): bound stalled journal subprocesses
e20d4cd450a fix(media): gate inbound audio on structured media facts (#111315)
c26d3cfbd04 fix(ci): skip Periphery scans for unrelated PR changes (#107991)
8631832048c fix: workspace divergence no longer wedges cloud-worker sessions (#111244)
2e8b042f9fb feat(gateway): resolve durable profile identity at connection setup (#111311)
8c0e876e857 fix: prevent cumulative usage from inflating session context (#108323)
f07a1fb5027 refactor: centralize bounded file reads in fs-safe (#111104)
59b2fbbb4b4 feat(ios): Talk camera flip control and mic input selection (#111044)
96c9cc112cc fix(cron): preserve script state and stop stale runs after restart (#111292)
3a0d6b327b3 feat(chat-ui): inline diffs for edit and write tool rows (#111039)
918f6615d02 feat(ui): Swarm progress widget — dot grid per swarm group (#110325) (#111297)
430147fc899 feat(ui): approval UX overhaul — inline cards, fair queue, shortcuts, badges (#110989)
7b3a8dba147 fix(meeting-bot): preserve spawn failure diagnostics (#107614)
59124313f44 fix(release): plugin npm preflight no longer hangs on stalled registries (#110862)
3a5da4faa8c feat(ui): live agent activity subtitles on running sidebar sessions (#111221)
4efcea1fd22 feat(browser): send pages to OpenClaw from the Chrome extension (#111158)
0f95e66b7f8 feat(talk): add durable client voice sessions (#111216)
83fc53a22fd feat(android): approve, reject, and remove device pairings from the phone (#111014)
a8b7290f346 feat(gateway): durable user profiles with email aliases and avatars (#111224)
58452de7118 refactor(config): config-surface reduction tranche 1 — retire dead keys, dedupe channel schemas, add growth ratchet (#111142)
33b50089cdd feat(android): platform trust for public gateway certs and manual fingerprint pinning (#110976)
716f5075644 fix(doctor): preserve config repairs during locked session import (#111280)
9c7800467cb feat(mcp): open App views from channel replies (#111211)
53d600ab833 feat(android): accept audio and document attachments via share sheet and composer (#110941)
9d2f5d4dbb6 feat(ui): enable Swarm toggle in Labs (#110325) (#111267)
c163daa4ed0 refactor(channels): share durable ingress monitor (#111249)
7c4292ee966 fix(agents): reject identity updates for unknown agents (#111268)
9aa6e672a7a fix(custodian): show mode-appropriate guidance and defaults (#111263)
8028288f056 fix(docs): make Mintlify anchor audit reliable (#111265)
8f2ec629179 fix(streams): release guarded response reader locks (#111259)
c84a59284b1 fix(android): stop push-to-talk from dropping speech after mid-hold pauses (#110995)
ea540602231 feat(codex): fork upstream-linked sessions at a message via thread/fork (#111149)
aae5b0f041d feat(ui): hold-to-record dictation on the composer mic button (#111114)
aaacee8166c fix(ui): prevent stale sidebar attention refreshes (#111061)
5a81e9fa811 fix(agents): preserve ANSI sanitizer state across bash chunks (#103706)
ee0e3a4d478 refactor(channels): share durable ingress monitor (#111214)
ccb147518cc feat(agents): Swarm core — collector spawn, agents_wait, structured output, caps (gated) (#110932)
7055ed578d0 fix(wizard): honor process locale when overrides are blank (#111076)
ba62b944fa4 fix(streams): preserve stable results when body cleanup fails (#111245)
55a2a90610b fix(mxc): preserve Windows path fallbacks for blank env values (#111077)
a2ccbdfa963 feat(cli): list and resolve pending approvals headlessly (#111060)
5e4a324f224 fix(ui): report WhatsApp logout no-ops (#105929)
b8b98250832 fix(plugins): report newer registry releases for exact-pinned npm installs (#111169)
2320f338bf7 fix(ui): recover stalled Nostr profile requests (#111093)
7aa5ee594ef fix(doctor): treat invalid legacy session stubs as warnings during session SQLite import (#111168)
baa8b9b24f3 test(telegram): add MCP App Funnel proof fixture (#111238)
25a8b33ff50 fix(state): make managed-image additive migration portable across SQLite versions (#111167)
29b4b74a5a5 fix(clawhub): preserve legacy telemetry opt-out behind blank primary env (#111078)
6eb569ed6ef fix(ui): chat message copy and canvas buttons render as boxed buttons in light mode (#111230)
a920e443ee0 docs: explain Codex memory controls (#111234)
932e8be06cf feat(agents): canonical agent creation with Custodian hatch flow (#111052)
30e2129ace2 docs(gateway): document x-openclaw-scopes cap on trusted-proxy device auto-approval (#111228)
4074e0cae15 fix(browser): close tracked tabs after gateway restart (#110797)
2f7da3057c0 feat(mcp-apps): support bounded model context updates (#111212)
649e94dd217 feat(apple): copy or save rendered widgets as images from the chat transcript (#110987)
e23dde3de55 feat: disable automatic session resets by default (#111140)
d5cb708623f fix(qa): repair WhatsApp live scenario regressions (#110754)
721aee1f19e feat(gateway): attribute prompts to authenticated users (#111207)
1d1565245d7 fix(sessions): stop persisting media-only caption placeholder into transcripts (#111204)
938e3d5f20e refactor(channels): share durable ingress monitor (#111186)
5e51c4bbcca feat(gateway): auto-approve trusted-proxy browser device pairing (#111189)
835adff1260 refactor(whatsapp): simplify doctor streaming materialization (#111188)
060b30f23a1 fix(ui): ignore malformed tool stream entries (#111145)
16e967eb7f5 fix(gateway): reject unknown session agents (#111178)
3af34935410 feat(config): journal every config change with source labels and manual-edit detection (#111147)
c684b132133 feat(gateway): thread authenticated user identity into presence (#111179)
cc57514e680 refactor(agents): make API registry ownership lifecycle-local (#111137)
b49c5463fe9 fix(status): preserve thinking level for discovered Ollama models (#108789)
63f8b8454b7 fix(network): guarded redirects survive cleanup rejection (#111156)
84ad63ef009 fix(tlon): reject unusable setup URLs (#111099)
86bd524a75d fix(whatsapp): keep LID ack reaction participants (#110053)
b57660d0249 fix(apps): call chat sessions threads (#111038)
198d2f000f9 fix(telegram): preserve authored file-reference links (#105911)
2f00a417edd feat(gateway): session dashboard domain — board RPCs, ticketed widgets, dashboard tool, per-agent persistence (#110960)
ed546bdcf54 fix(auth): expired OAuth credentials survive per-provider credential discovery and silently break background operations (#110678)
c2a9579c591 fix(ui): composer small-width polish — single-line placeholder, matched talk split-button (#111150)
6e17f70dab3 feat(android): Talk camera flip control and microphone selection (#111046)
b79c141fc70 fix(cli): bound exec approvals --file JSON read size (#110755)
28ce6b81160 fix(macos): accept current native state schema (#111032)
208036afdcf fix(codex): session permissions persist across resumed turns (#111136)
bdfe2a4e60d fix(telegram): polling worker pins a CPU core when the Bot API answers empty getUpdates instantly (#111063)
491b87c936b fix(openrouter): preserve completed music when stream cleanup fails (#111056)
83653833914 fix(line): deliver rich replies on the reply token instead of the push quota (#109011)
075030c19eb fix(channels): preserve single-account setup labels (#111134)
5bb969f7de6 fix(tlon): preserve shutdown when body cancellation fails (#111106)
18b79d99abb fix(gateway): bound busy channel health by real run age (#103793)
7d62a277fff fix(ui): teardown MCP Apps before unmount (#111124)
68771ebdfef feat(cron): script payloads behind the trigger gate (#111112)
80746b06b98 fix(sessions): commit reduced session index before deleting evicted transcripts (#108378)
6ff963eb466 fix(transcripts): imported text can inject terminal escapes through transcripts show (#110060)
4dbeb84c253 fix(tlon): account checks leave streaming responses open (#111081)
69aeba9d862 fix(discord): sustained gateway bursts stop growing memory (#110954)
ead8f691eac fix(matrix): preserve redirects when body cancellation fails (#111105)
feb6da25f54 fix(googlechat): keep accounts.default streaming when doctor migrates named accounts (#106018)
ced95b3fced refactor(discord): split message process runtime (#111119)
047232bd16e fix(telegram): fall back for web apps outside DMs (#111116)
0a8c4853955 fix(browser): make copilot runtime bundle deterministic (#111109)
ecc56749e11 fix(anthropic): guard invalid timestamps in history imports (#110536)
7e1aca92b45 fix(acp): exit help and EOF cleanly (#111091)
f2137f41b8b fix(whatsapp): serialize source runtime loading (#111094)
b51e3d02c75 docs(meetings): mention Discord voice channels
2e16660f18b fix(line): retry inbound media through the ingress drain on transient download failure (#110921)
53a79a3af15 refactor(agents): unify Responses tool-call id resolver (#111103)
f8f68d1645c fix(android): move device identity key into encrypted storage (#110939)
50e81ce493f fix(diagnostics-otel): classify model calls as client spans (#104211)
c3adaa3195b fix(nostr): report relay connections only after they succeed (#110878)
09dd6167825 docs(meetings): add platform comparison guide
968f9ad0f37 test(codex): split event projector suites (#111097)
756a491a51f fix(speech): strip markdown before TTS and route code-heavy replies sensibly (#110948)
b96d5cf554b fix(qa): resume channel cursor after gateway restart (#111096)
03c3c4b978a fix(browser): keep copilot runtime bundle in sync (#111089)
c17a81b4704 fix(plugins): roll back cleared runtime registrations when an activating reload aborts (#103812)
d96a87e8e9b docs: document session automation contracts (#111095)
276785ae6dc fix: distinct Responses tool-call ids for repeated native Kimi calls (#110956)
62c5a8b8881 fix(gateway): make scope errors machine-readable across clients (#111013)
593ac4ae0cf feat(apps): rewind and fork a session from native chat bubbles (#110886)
47afe8f88fa refactor(discord): split message process tests (#111066)
fc30a6c67d6 fix(oc-path): reject oversized multibyte JSONC input (#104140)
aad27e26296 test(worktrees): honor host umask in mode assertions (#111075)
6c2973dee41 feat(ui): automatic session attention states in the sidebar (#111035)
0a588fa7952 fix(acp): /acp sessions exposes every gateway session to non-owner senders (#110745)
c745e7d66c8 fix(gateway): reject unsafe explicit approval IDs (#111055)
20677baf766 feat(android): copy or save rendered widgets as images from the chat transcript (#111030)
ec740e79a48 fix(agents): honor Anthropic retry-after cooldowns (#111072)
7abcd6c6916 fix(skills): distinguish duplicate ClawHub search results by publisher (#110903)
fdf44edf4d3 docs: document channel ingress guarantees (#111069)
dcffb3f66fd fix(ui): restore Control UI E2E coverage (#111036)
e3ae52b792c feat(ui): microphone picker on the composer talk button (#111043)
e669e97194f fix(acp): persist confirmed output from cancelled turns (#110300)
45f6543c9ac feat(macos): Quick Chat power features — voice dictation, paste-to-app, model/reasoning control (#110994)
e5b2ca3c6bd feat(config): add compaction.thinkingLevel to override thinking level during compaction (#98074)
9fe92cf5ce9 fix(nostr): profile imports no longer crash on invalid fields (#110684)
b4187ced90f feat: add live-validated Zoom meeting guest plugin (#111048)
4e8f0359128 fix(agents): keep run-mode subagent bundle MCP runtimes alive for approved follow-up turns (#101830)
9b42782f76f fix(plugins): agent runs hang when tool-result middleware never settles (#110731)
b550c2cf9a8 feat(ui): add realtime Talk camera controls (#111042)
68ec50d6433 fix(android): show conversation in screenshot fixture (#111000)
a68fdad8f56 fix(usage-bar): clear dead watcher reference after transient error (#109462)
0c221d2b4f7 fix(config): bound state-directory .env file reads with size limit (#109487)
86b5e279fb6 fix(voice-call): clamp continue poll RPCs to remaining deadline (#109053)
c28284cb312 fix(config): bound external catalog file reads with size limit (#108200)
a040f10e85a fix(gateway): reconcile config after watcher recovery (#111049)
4b7d6fa3bf2 docs: align interactive client behavior (#111047)
10f5a7ac584 fix(groq): keep default Llama agent turns within TPM limit (#104904)
9a94beace77 fix(process): preserve descendant output under event-loop stalls (#111040)
8853217ec72 fix(gateway): cancel run-bound approvals on abort and expose approval-park lifecycle (#110993)
3d03b60da99 fix(litellm): guard loopback hostname auto-allow with isIP to prevent DNS SSRF bypass (#110693)
8899940d5ac fix(cron): support current and session: targets in initial delivery resolution (#99115)
7c070d6df67 feat: allow standalone MCP Apps to use bound tools and resources (#110515)
8b720729d25 fix(imessage): keep fast progress out of chat (#110052)
56eef799890 fix(channels): recover dead-lettered inbound events (#111029)
65915bcd262 fix(ui): openknot/dash dark theme AA contrast for text-bearing fills (#111003)
7562b79465c refactor(channels): share durable ingress monitor (#111017)
e5e93e81692 fix(whatsapp): evaluate mention patterns when other members are @-mentioned (#110412)
c1e714e3df9 refactor(agents): shared spawn orchestration pipeline behind backend adapters (#111007)
ec998a0f3fc feat(canvas): export widgets as PNG — copy or download from the card menu (#110992)
941ed4fd4a4 fix(memory-wiki): preserve unavailable source pages (#111034)
d411559dfbb fix(acp): reject malformed session list cursors (#107895)
828bcd8231a fix(scripts): bound GHSA patch GitHub lookups (#110756)
ed458f14dcb test(scripts): wait for Knip pid file content (#111001)
9275837f41c docs: explain managed Gateway heap sizing (#111027)
f7024690ac0 refactor(gateway): split chat handlers by workflow (#111022)
4362e1a4fe3 fix(agents): recognize nested message delivery receipts (#111012)
dc8f90197e6 fix(tui): guarantee exit after drained teardown (#111015)
0483001ef65 fix(scripts): dedupe release checklist declaration (#111024)
5590d7c2809 docs: align SecretRef degradation semantics (#111021)
2dce9d30122 fix(scripts): retry auth alerts after ntfy rejects delivery (#110760)
14a714901bc docs(imessage): align recovery with durable ingress (#111002)
b1c49677ec1 fix(agents): use fatal UTF-8 decoding for provider JSON responses (#108849)
66aa22e4e8b fix(ui): keep session rosters consistent (#108249)
ea1887667e8 fix(scripts): declare validateTrustedToolingPin in the release-candidate contract (#111011)
e33257de118 fix(scripts): bound duplicate PR closure GitHub lookups (#110750)
9d0836ee251 fix(thread-ownership): bound 409 response read and preserve cancel semantics (#98941)
077869c0326 fix(release): declare validateTrustedToolingPin in the checklist contract (#111009)
19184a9fc64 improve(android): move Wear agent, session, and model pickers to Home (#110661)
556a2ee276f feat(cron): add per-job dynamic cadence (#110978)
5114b459272 chore(canvas): compact show_widget tool description with pattern anchor (-40% tokens) (#110999)
d343216510d fix(ios): keep unified voice controls recoverable (#110906)
333a3297afe refactor(plugin-sdk): consolidate persistent dedupe claim loop (#110984)
26e7575780b fix(release): pin trusted candidate tooling across main advances
56915896bc8 fix(qa): bound Matrix E2EE sends (#110968)
9918dd77c4e fix(scripts): bound release CI summary GitHub lookups (#110747)
7fbfc2e8ad3 fix(plugins): allow intentional uninstall size drops (#110991)
2295fae731f fix: bound miscellaneous unbounded file reads across 5 modules (#110516)
a5ec26fa3cb fix: prevent LINE channel reloads from hanging on stalled deliveries (#110971)
7a7d6bb51f4 fix: cloud-worker results are lost when the box dies before reconciliation (#110952)
a21385a3726 fix(channels): scope wizard credentials to the selected account (#110969)
4e6bb619f72 fix(onboarding): preserve emoji in recommendation reasons (#110401)
264a7b0d125 refactor(channels): consolidate manifest descriptors (#110985)
ee37c840f3d fix(reef): contain startup friend reconcile failures (#110918)
69ad5fc7fb3 fix(wizard): treat not-directory paths as missing in migration snapshots (#109161)
c9aa8499366 fix(android): stream replies into view and shrink "Jump to latest" to a compact icon button (#110983)
bb7b2bca68d feat(ui): finish the chat session → thread rename across the Control UI (#110973)
19d887169f7 fix(ai): ChatGPT Responses retries errors it classified as non-retryable (#110655)
01c64793115 fix(discord): long code-fence replies can exceed the message length limit (#110148)
9f7c7521f19 fix(agents): Responses turns that end incomplete report zero tokens and zero cost (#109904)
7bf263b8b64 Bound plugin bundle command file reads with size cap (#110594)
f3f6eb23217 fix(codex): stop fallback for superseded sessions (#110980)
cd78fb3843b fix(channels): harden prepared turn lifecycle (#110981)
460e3e669c1 fix(canvas): restore shipped policy/host-disable contracts; harden workspaces doctor cleanup (#110927)
2f045a73f42 fix(agents): agent-created files get lowercased names on Windows (#109823)
b88646cf78e feat(webchat): reply-to a message with hydrated reply context (#110791)
4d683904dfe fix(agents): restore ask_user roundtrip in Gateway chats (#110961)
490ab265ba8 fix(agents): preserve sanitized stream cancellation (#110427)
74919102a8f fix(cron): preserve startup catch-up job mutations (#110977)
d71ab44a0c2 fix(sandbox): bound sandbox seed bootstrap file reads (#110017)
87de81a5fd4 Bound diagnostic config file read with size cap (#110591)
8ff15124546 feat(ui): sidebar rows use full width; actions overlay with a hover fade (#110959)
4e11da2872e fix(process): UTF-8 command output corrupts at Windows byte limits (#105274)
7a551bff0c9 fix(vault): aggregate provider outage diagnostics (#110908)
fa9ae68c342 docs(agents): draft-then-ready PR creation prevents the merge-ref CI race (#110970)
7e4a76a6d00 fix(amazon-bedrock): ignore blank region env overrides (#110676)
fc777a35bbb test(telegram): mock core turn dispatcher (#110967)
d5b2749fd81 fix(ai): skip blank environment credentials during provider auth (#109691)
848dbcabbae fix(signal): keep REST timeout through slow-drip response bodies (#109047)
77a42adce4d fix(test): re-point workspace bootstrap fault injection at the bounded fd reader
7a70daf55d3 test(agents): update bootstrap read mocks (#110966)
0135c6bf89b test: cover Codex version contracts on dependency bumps (#110958)
5fe8d6a852a fix(gateway): clients can identify authorization failures (#110925)
bde17f99e97 fix(mantis): bound upload error response bodies (#109044)
ff3ed99cde0 fix(usage-bar): validate meter width with strict integer parsing (#110410)
242093fb00b fix(ui): dark theme AA contrast for coral fills — deepen primary/destructive, add widget accent-fill token (#110957)
21c341d548c fix(push): ignore blank timeout env overrides (#110677)
31f2c51ca2c fix(auto-reply): bound AGENTS.md read in post-compaction context (#109945)
598f13a5f39 fix(zai): keep probe deadline through stalled error-body reads (#109026)
1da345e9d36 fix(mcp): clamp oversized MCP timeouts (#105784)
3383e35aa36 feat: add visible session spawn parity (#110943)
09c46fb6822 fix(stt-live-audio): cancel ElevenLabs error response body (#110759)
6646719c052 fix(thread-ownership): ignore blank forwarder URL env overrides (#110675)
42bacaa112c feat(ui): call chat sessions threads and quiet the sidebar sections (#110933)
81362bf6430 feat(apps,ui): question surface parity and composer takeover (#110681)
09a64f7ab00 feat(models): make per-agent allowlists explicit (#110888)
019e42e0133 fix(ios): auto-scroll to the reply when sending with the keyboard open (#110944)
a9fb5b4e3fc fix(diagnostics-otel): ignore blank protocol env overrides (#110674)
0f5d030cb10 fix(ci): sweep PRs with unknown mergeability — stuck merge-ref is the target pathology (#110945)
47f42fdda9e feat(cron): unattended-run preamble and watcher-authoring guidance (#110949)
331eb0d4392 fix(huggingface): discover models when HTTP proxy is required (#110924)
b6f905b4101 test(codex): repair app-server extension shard fixtures (#110951)
37b0b12eb72 fix(tlon): release failed upload response bodies (#110442)
a7e47653fc8 fix(cron): run explicit wakes outside heartbeat hours (#105830)
ef7f4f2a611 feat(ui): Labs settings page for experimental feature toggles (#110359)
2bcbe3a6125 feat(reef): follow up on unconfirmed deliveries instead of staying silent (#110938)
1cacb12c4d7 feat(canvas): give show_widget a design system — theme tokens, base styles, live host theme bridge (#110832)
1626a1696c6 fix(ui): clean up timed-out channel wizard starts (#110146)
377303da9f0 fix(openai): sync Codex catalog client version (#110936)
09fa5818e82 refactor(ui): render Ask OpenClaw chat through the shared chat presentation layer (#110934)
1d492f5c537 fix(gateway): honor scopes for WebChat session mutations (#110931)
db1b9327490 fix(cron): prevent re-enabled active run overlap (#102255)
bbad877aed4 fix: deliver Codex-generated images on message-tool routes (#110893)
bf2da1ce1af fix(agents): parent resumes after yielded child handoff (#110922)
2632969aae0 fix(ui): use clipboard fallback in setup wizards (#110139)
be80cc747cb feat(zalouser): recover accepted messages after local crashes (#110916)
d630f8dc2c2 feat(gateway): parent dashboard sessions to agent main (#110913)
6325b0f3c45 fix(qa): hydrate full profile live credentials (#110897)
7359009dcc4 test(memory-wiki): allow agent isolation proof to finish (#110919)
6589788c027 docs: The main session concept page and shipped-sidebar updates (#110905)
a314a3e3be9 fix(cron): preserve flattened triggers (#110912)
3dd26e7d9c8 feat(irc): add durable ingress queue (#110914)
04a9552a1f3 chore(codex): update app-server to 0.144.6 [AI] (#110821)
138d2d071c4 feat(tlon): add durable ingress (#110910)
53ad69c6eec ci: hourly sweeper re-fires dropped pull_request CI runs (#110889)
36cba351e5f feat(ui): distinct Apps icon and pairing shortcut on the Apps page (#110909)
41fdcac4d78 fix(ui): drop the Subagent prefix from named sidebar threads (#110891)
b526af1a7ed fix(ui): lock channel wizard controls while busy (#110163)
2438a9cc3cd fix(qqbot): guard storage clear ingress effects (#110904)
5fdb0cd24e6 feat(chat): switch between session transcript branches from the chat header (#110857)
64019bc0c2c refactor(ui): split lobster-pet into look/plans/element modules (#110816)
9a9f5919e5f fix(ui): defer remembered camera auto-enable until talk reaches listening (#110874)
bef8a82762f feat(synology-chat): add durable ingress (#110899)
e80b0b5aa50 fix(reef): stop leaking the inbox loop across channel crash restarts (#110870)
90a6256370a test(telegram): isolate miniapp bootstrap fixtures (#110895)
84446ae1ced fix(whatsapp): avoid deprecated access guard collision (#110890)
9f5958e75d6 fix(ui): collapse doubled sidebar footer divider and enlarge settings gear (#110892)
f669fb925a9 fix: preserve same-session hook bursts (#110575)
bb5a31f5d68 fix(ios): "Jump to latest" no longer appears while the assistant is still writing (#110811)
884fdba81c0 fix(telegram): local turn tests complete on macOS (#110894)
a0cc7d11fb5 fix(scripts): restore Testbox lease claims to the originating repo after delegated runs (#110869)
453444636cc feat: bound transcript reads across replacements (#110374)
1ca6b6ff672 feat(ios): unify chat and voice experience (#107879)
3572fba7f9b feat(plugin-sdk): guard ingress effects once per event (#110846)
b7f99d0ffd2 fix(macos): harden Quick Chat capture (area-send visibility, AX text quality, overlay race) (#110830)
e04ea7916c5 feat(twitch): preserve accepted chat through local crashes (#110852)
736dddb96a6 fix(feishu): preserve inbound messages across restarts (#110864)
897ac2d4b0b fix(auto-reply): surface stale Codex sessions (#110856)
7e27101f2cc fix(ci): honor Periphery ignores in shared intersection (#110839)
917bec39875 fix(qa): stabilize Matrix maturity scenarios (#110398)
1dedaea9944 fix(nextcloud-talk): release failed room info response bodies (#110441)
c2431dfcd25 test(memory): isolate qmd shard fixtures (#110863)
8d89ddd8c22 feat(qqbot): preserve inbound messages through gateway restarts (#110844)
9e0780c5a0b fix(ui): styling sweep — compact number steppers, one accent for check controls, composite-page cleanups (#110845)
8a5c8690e10 fix(secrets): keep unaffected owners live during reload failures (#110779)
6d5ebac0b1e docs(agents): additive SQLite surfaces skip schema-version bumps
a89086282a4 fix(googlechat): preserve webhook messages across restarts (#110833)
f01941559bb feat(ui): camera-off glyph and remembered camera state for talk calls (#110817)
a54a292d62c test(ui): fix Node 25+ localStorage crashes in jsdom suites; document PR-open CI drops (#110812)
f705f69fc2a fix(whatsapp): preserve live connections across reloads (#110762)
f1a8c04aeab fix(cron): clean up recurring jobs converted to one-shot (#110431)
4d27b5b67eb refactor(macos): move PortGuardian state to SQLite (#110527)
c1eba30949e fix(qa): discard ignored guarded response bodies (#110443)
50fdbc5c3f8 test(feishu): fix delivery trace dispatcher fixture (#110838)
e9fe7c748bb feat(ui): session dashboard shell — board face, chat dock, reset guard (#110728)
f328250fa9f fix(ui): reject widget command prompts (#110808)
837db49ebb2 test(macos): remove ChatViewModel timing races (#110798)
915d5360b5e refactor(chat-ui): render iOS tool calls as flat expandable rows (#110618)
c8fe8f102f9 feat(macos): Quick Chat area capture and focused-app text context (#110635)
a2f845e6c84 fix: control UI locale PRs fail to arm auto-merge (#110809)
98410d986ee refactor(state): move device identity into canonical SQLite state (#110392)
d022b1f5601 improve(ui): adopt inset secret-input reveal in login gate and config form (#110810)
9b97ee06adb improve(ui): theme Import card uses the import-tray icon (#110807)
8a66aa76dd9 feat(ui): session board grid engine and board view (#110644)
81df196b8dd refactor(ui): unify transcript inline UI on one widget card (#110740)
fd7e444c241 improve(ui): syntax-highlight JSON dumps on the debug page and config issues callout (#110806)
7a35e243c4d refactor(channels): adopt durable Nextcloud Talk and Nostr ingress (#110653)
33f9c47e3c7 fix(ui): label the local-only chat message delete honestly as hide (#110801)
ffb7c983122 fix(ui): drop resting relative ages from agent chip subtitle and footer build chip (#110800)
4fbdb6d0111 test(qa): align coverage inventory contracts (#110799)
ef04f351ea0 fix(ui): keep Web Awesome available-height bound in workboard listbox caps (#110788)
6a8575651f9 chore(ui): raise Control UI CSS gzip budgets to 45 KiB (maintainer-approved)
88e5af7097d feat(ui): interleaved sidebar zone with custom session icons and drag ordering (#110682)
3e8f1c6448a fix(plugin-sdk): refresh memory runtime baseline (#110611)
3fd3ad83014 fix(ci): restore plugin prerelease validation (#110787)
7bded09b617 feat(android): add inline dictation to chat composer (#109329)
faf3dbdda83 fix(ci): classify proxied APNs TLS tunnel (#110480)
63a32e360b3 fix(qa): stop retries after overall health deadline (#110753)
9177601e7e1 fix(plugin-sdk): refresh merged API baseline (#110751)
80f6acc8def fix(agents): bound IDENTITY.md reads to prevent OOM (#101447)
5143d909b96 feat(macos): Quick Chat streamed replies and continue-recent targeting (#110631)
d7b0bacf107 fix(teams-meetings): join and transcribe live meetings reliably (#110615)
33151cbc40a fix(apns): keep diagnostics valid when response capture reaches its byte limit (#110483)
a115af27741 feat(ui): add reactive OpenClaw health nudges (#110708)
d8846a1dcb8 refactor(cli): read-only database access for pure-read commands (#110732)
593423ecc0d fix(shared): bound ignore-file reads during workspace scans (#101429)
4dff4c4996c fix(signal): preserve base URL path prefixes (#110495)
3f976a949ad test(signal): isolate tool-result harness lifecycle (#110720)
e8566596e03 refactor(state): split openclaw-agent-db into focused modules under the line limit (#110707)
a0263806147 fix(release): force isolated gateway shutdown (#110698)
0acece45912 feat(chat): rewind and fork a session from a message bubble (#110660)
9710a1339e3 refactor(canvas): promote inline-widget hosting and show_widget to core (#110475)
e4fd904f8ae test: cover hidden catalog polling across reconnects (#110705)
b5d9573dcaf fix: pause hidden session catalog polling
42133d0c3c3 feat(mac): show native notification permission in dashboard Notifications settings (#110646)
ad3b8e0b6f1 fix(memory): bound qmd taskkill cleanup (#109265)
1cddec35f4b feat(clients): session groups, batch actions, inspector, and worktree-aware creation for native chat (#110347)
881b0a619f5 fix(doctor): bound AGENTS.md and root-memory file reads (#101448)
40793e6f8b5 fix: bound pasted input and provider response bodies (#110627)
e01a880084d refactor(state): split openclaw-state-db into focused modules under the line limit (#110666)
af2662f25a8 fix(reef): add timeout and bounded JSON reads to relay transport (#108333)
7994c44b069 fix(ios): shrink the chat "Jump to latest" pill to a compact icon button (#110651)
d3173f6f918 perf(ui): keep lazy-page CSS out of the Control UI entry stylesheet (#110687)
28069db63aa feat(macos): render system chat option cards (#110584)
bc8d0da0924 feat(linux): Quick Chat streamed replies and precise pairing states (#110632)
74880cb56f9 feat(ui): manage MCP servers directly from Settings → MCP (#110654)
f6de912efec refactor(update): split update-runner into focused modules under the line limit (#110664)
39ddf710f0f feat(ui): session unarchive flows with undo toast (#110605)
f98bcb7fa73 perf(ui): drop zod from the Control UI and lazy-load json5 with the config surfaces (#110623)
684ae080d4f fix(signal): preserve durable ingress retry ownership (#110629)
e976e357ea5 fix(security): bound mcporter registry read in audit (#101772)
05fb8e6e619 fix(cli): bound --message-file reads for agent command (#101442)
60cb6d78de9 perf(ui): lazy-load the lobster pet out of the Control UI startup graph (#110628)
efa7e1a85ad fix(scripts): bound conflict-marker scan reads to prevent OOM on large files (#104420)
b95035491ca fix: repair model refs after provider deletion (#110648)
105aebacea1 fix: report agent deletion cleanup failures (#110560)
00257c3093a feat(ui): theme cards preview their real color palettes (#110626)
0bbb862c55a fix(gateway): keep setup.detect off the event loop so health stays live (#110625)
01a9e1d398f feat(memory): default cross-conversation recall for personal installs (#110597)
c989b8a519d fix(ui): settings language picker was oversized and unthemed (#110621)
3b2797f09ba improve(ui): settings cleanup batch — universal config.changed emitter, synced chat prefs, dedupe and copy fixes (#110581)
0ac69b9fe80 fix(zalo): prevent webhook message loss after acknowledgment (#110630)
31314920ced improve(ui): plugins hub hierarchy, settings section spacing, and grid-aligned secret inputs (#110482)
f57a8753da4 fix(ui): cap sidebar child sessions with show-more, drop Subagent prefix in tree (#110604)
347ee458950 fix(secrets): surface degradation in logs and doctor (#109792)
4a96c9da310 feat(ui): link Get the apps from the mobile pairing dialog (#110622)
9d97e10efe0 refactor: move non-session runtime journals to SQLite (#109427)
bc6d9eb16a2 fix: custom Anthropic models work without maxTokens (#110617)
5360c75de23 fix(tui): stop Codex login lookup hanging the terminal (#109452)
cc920838bc3 fix(android): recover Wear requests from stale phone routes (#110423)
adff355caf2 fix(plugin-sdk): failed raw channel sends report success (#109906)
e22c2dfaaa8 fix(gateway): bound BOOT.md file read size (#101776)
16bd13d2547 fix(plugin-sdk): refresh channel send API baseline (#110620)
2e21d53c84e fix(plugins): bound plugin manifest metadata file reads (#110036)
21c3438dedb feat(ui): merge voice and video talk into one button with in-call camera toggle (#110576)
cb785ed95b3 feat(ui): syntax-highlight the channel health snapshot on the channels settings page (#110613)
52d49a69b2f fix(plugin-sdk): refresh config schema API baseline (#110614)
42e6972d354 fix(opencode): Zen GPT-5.6 models are missing from discovery (#110405)
04d7462806a fix(plugin-sdk): attached send results report the configured channel (#110069)
21bd5a49c3a fix(chat): preserve explicit current-source sends in Control UI history (#106073)
fab3cdf1d8e refactor(gateway): simplify lifecycle mutation contracts (#110583)
bf20509c467 fix: prevent TUI PTY tests from aborting after completion (#110610)
b3650b70125 fix(tui): exit reliably after quit (#110595)
8c95ec95ca5 fix(ui): show sidebar connection state only on sustained disconnect (#110567)
7a7c158210b perf(ci): parallelize gateway watch artifact check (#110609)
e7fe47d63fb fix(browser): allow one retry after transient failures (#110607)
a068d38b663 refactor(plugins)!: remove experimental workspaces plugin (#110416)
fcdf06ed294 fix(config): ignore inherited keys when restoring env refs (#109463)
7752e33f799 Revert "fix(security): restore fs import lost in bounded manifest-read merge"
a941d3ab727 fix(shared): reject HTTP status codes outside the 100-599 range (#110554)
95d632e644b fix(security): bound skill-file audit read via safe reader (restore removed fs dependency) (#110589)
fceae4d8aa0 fix(ui): bound managed outgoing image fetches (#108116)
2b04c350a32 fix(config): restore process.env after invalid config rejection (#103786)
1af6d996580 fix: surface cron errors for empty isolated agent replies (#100229)
b34d0a8bb6a fix(gateway): bound usage.list days parameter to 100 years (#110552)
39528edd745 fix(security): restore fs import lost in bounded manifest-read merge
e721508ed38 fix(ui): bound chat avatar fetches (#110010)
f14947d256d fix(codex): persist automatic compaction history (#110587)
609e5d23184 fix(gateway): session workspace reveal hangs on foreground opener (#110277)
35754a63cca fix(plugins): bound marketplace manifest file reads (#101774)
75b1ac12df1 feat(onboarding): enable lean mode for local models (#110596)
5057fd9e597 fix: keep native question cards out of the public API (#110534)
4b74a7233f8 test(apple): remove model patch timing flake
c791e2b1280 fix(cli): restore terminal state before exit in logs and hooks commands (#105863)
0234cf5f7f8 fix(security): restore fs import dropped by bounded manifest-read change (#110585)
953ae8163a2 fix(cli): reject --channel/--to for systemEvent cron jobs with a clear error (#105910)
f0312bc9796 fix(gateway): trim whitespace in audit.list cursor parsing (#110551)
e1d87e9a9db fix(sessions): preserve parent lifecycle for parallel children (#110541)
08b80224ea0 feat(ui): logo-scare lobster visits; drop the model-auth-expiring chip (#110466)
1e2d0e29b02 refactor(gateway): adopt closedObject in recently added schema files (#106532)
993c975f573 fix(heartbeat): bound HEARTBEAT.md file read size (#101775)
94e1cc9a4e4 fix(daemon): distinguish shared and embedded SQLite in system Node warning (#107990)
222dc580115 feat(linux): native gateway transport for Quick Chat — device identity, TLS pinning, ack-driven sends (#110491)
aa0c92186b6 fix(security): bound plugin manifest reads in audit deep scan (#101773)
654560f289c feat(ui): add Apps & extensions page to the Control UI (#110563)
0d91b07f5be refactor(update): split update-command into focused modules under the line limit (#110550)
d55c91c9182 test: add subagent handoff failure diagnostics
91ded689905 fix(vault): SecretRef resolution no longer hangs on stalled response bodies (#108970)
ab093bded4f docs(onboarding): finalize phase status and phase 7 decision (#110543)
deccdb5e57a fix(ui): bound browser gateway WebSocket opening (#109037)
bc77ef33988 fix(browser): time out relay WebSocket opening (#109114)
cc7bd4d95ab fix(qa-lab): bound Node binary lookup (#109428)
764999c755d refactor(exec): remove duplicate task session detail (#110566)
bbb45cde9d1 fix(scripts): keep hosted-gate run queries under the gh relay response cap (#110540)
78b4a4afedf fix(qa-lab): bound WhatsApp auth archive extraction (#109501)
42be965eace improve(mattermost): restart only the changed account on config reload (#99312)
a45cef0d402 fix: derived caches wedge cloud-worker reconciliation and reclaim (#110380)
10902e9035c fix(scripts): bound clawtributor GitHub lookups (#109968)
30a938772a7 fix(android): Wear Talk replacement survives late audio errors (#110292)
17103135962 fix(cli): offer config repair after invalid startup (#110533)
ccf55a43cd5 fix(ci): bound npm resume GitHub lookups (#109982)
9a7d615dfc7 fix(agents): use fetchWithSsrFGuard in minimax-vlm.ts instead of raw fetch (#106163)
d1153e4e2ba fix(android): preserve graphemes in compact badges (#109486)
6032dec3ba0 fix(ui): make mock sessions archive flow usable (#110556)
66f4ccabc50 fix(ui): usage overview hints do not open when clicked (#109247)
a2b0cfed26d fix(ci): bound openclaw-npm-release git fetch operations with timeout (#109176)
bba71531a9b test(ui): split app sidebar suite (#110549)
f40a30bb72a fix(plugins): recurring plugin-scheduled jobs silently deleted after first post-boot agent turn (#107752)
4187dff99ac fix(testbox): honor explicit changed-gate base
2ba272bda68 improve(ci): warm import-heavy Vitest graphs (#110557)
608bb3b8aba refactor(sqlite): drop write-only verification history and share the terminal-open latch (#110532)
badb5ae7063 fix(memory): reject malformed embedding batch JSONL bytes (#110502)
34440523cd0 fix(voice-call): ngrok tunnels no longer survive cleanup (#110122)
af0d189774e fix(ios): stop repeated gateway errors from wobbling (#110493)
e77140ab8ef perf(ui): drop typebox from Control UI startup by lazy-loading the approval page (#110528)
4d4099e608e fix(ios): prevent black edge bands in chat (#110505)
fcdf3954d7f fix(meetings): wait for audio bridge cleanup (#110548)
307353dd1c1 fix(qa): complete gateway-less transport cleanup
09963412d17 fix(exec): track background commands as tasks (#110468)
6def1a9c04d fix: prevent repeated tool-call IDs from poisoning sessions (#110518)
f594a8f7c6c perf(ci): split straggler bin pairings and drop needless jsdom environments (#110477)
18a49b3a782 refactor(discord): authorize widgets by channel audience (#110522)
b1d271d346b build(deps): bump the android-deps group across 1 directory with 2 updates (#109822)
63c929a74e0 fix(ui): prevent appended chat rows from overlapping (#110525)
c20ece85f4f fix(scripts): bound sync-labels GitHub CLI operations (#110463)
ff54749b1bb test: speed up more control UI async polling (#110530)
7c1c4960c1f fix(ui): detect failed entry-stylesheet loads and self-heal with a reload (#110523)
d7de67ae027 feat: ask_user follow-ups — harness convergence, channel finalization + reactions, native cards, docked web panel (#110372)
