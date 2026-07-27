# Phase 13 — Provisional OpenClaw Grok Execution-to-Verification Handoff

**Document class:** Section 21.1 provisional Grok handoff (evidence index, not certification)  
**Recorded:** 2026-07-27 19:17 Asia/Taipei  
**Author:** Cursor Local feature subagent (Grok 4.5 High) under session `cursor-local-mac-mini-lisa-openclawdevelopmentplan01-20260727-1648`  
**Plan:** `docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md`  
**Plan SHA-256:** `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7` (HASH_OK re-verified 2026-07-27 19:17 Asia/Taipei)  
**Authority:** `docs/CURSOR-GROK-EXECUTION-PROMPT.md` — OpenClaw-owned Phases 0–13 only

> **Provisional.** This handoff does **not** assign the seven Section 13.3 conformance classifications. It does **not** perform Phase 14 or Phase 15. Independent OpenClaw Codex verification (Phase 14) must inspect actual code, tests, and evidence rather than accepting this summary.

---

## 0. Identity and inspection coordinates

| Field                                     | Value                                                                                                                                                                                                                                     |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Repository                                | `https://github.com/linktrend/openclaw_prime.git` (local: `/Users/linktrend/Projects/openclaw_prime`)                                                                                                                                     |
| Branch                                    | `issue/ocp-openclawdevelopmentplan01`                                                                                                                                                                                                     |
| Tracking                                  | `origin/issue/ocp-openclawdevelopmentplan01`                                                                                                                                                                                              |
| Worktree                                  | `/Users/linktrend/Projects/openclaw_prime` (primary checkout for this package)                                                                                                                                                            |
| Sibling worktree (untouched)              | `/Users/linktrend/Projects/openclaw_prime-development-final-20260727` on `development` @ `02659b9ac81`                                                                                                                                    |
| Base (`origin/development`)               | `02659b9ac819c126432ae5e4c0b379a7f8ff1bee`                                                                                                                                                                                                |
| HEAD at handoff authoring                 | `4b941060d674cc74b57556d0db594ef44965b9c1` (pre-handoff commit; handoff commit follows)                                                                                                                                                   |
| Commits on branch vs `origin/development` | 10 (see §2)                                                                                                                                                                                                                               |
| Changed files vs `origin/development`     | 226 paths (see §2)                                                                                                                                                                                                                        |
| Primary session ID                        | `cursor-local-mac-mini-lisa-openclawdevelopmentplan01-20260727-1648`                                                                                                                                                                      |
| Related feature sessions                  | Phase 2 `…-feature-linkbrain-phase2-20260727-1854` (active record may remain); Phase 3 `…-phase3-20260727-1902` (completed); Phase 5 `…-phase5-mcp-20260727-1910` (completed); Phase 6 `…-phase6-integrated-qa-20260727-1911` (completed) |
| Orchestrator key                          | `cursor-local-mac-mini-desktop-workspace-orchestrator`                                                                                                                                                                                    |
| Agent type / role                         | Cursor Local Agent / lisa (integrator) + feature subagents                                                                                                                                                                                |
| Preserved stash                           | `stash@{0}: On main: wip-auth-unrelated` (never applied)                                                                                                                                                                                  |

---

## 1. Every plan phase 0–13 — claimed complete / blocked / outside ownership

Evidence pointers are status packets and code paths. **No seven-value classifications are assigned here.**

| Phase                                                  | Claim for OpenClaw Grok ownership                                                                                                                                                                                                                                                                                                                             | Evidence pointers                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **0** — Approval, snapshot, ownership freeze           | **Complete** (OpenClaw freeze packet). Live/external gates remain recorded as blocked, not cleared.                                                                                                                                                                                                                                                           | `docs/execution/openclawdevelopmentplan01/PHASE-0-FREEZE-PACKET.md`; plan + prompt committed; hashes in §6                                                                                                                                                                         |
| **1** — Contract and fake freeze                       | **OpenClaw-owned deliverables complete** at fake/draft tier. **Blocked** for full Phase 1 exit: Brain/Skills owner fixture sign-off; Platform auth-path approval. Continued under Option 2 (decision packet in PHASE-1-STATUS).                                                                                                                               | `PHASE-1-STATUS.md`, `PHASE-1-AUTH-COMPATIBILITY-MATRIX.md`, `PHASE-1-OUTBOX-PROTOTYPE-FINDINGS.md`; `extensions/linkbrain/fixtures/**`, `extensions/linkskills/fixtures/**`, `extensions/linkbrain/fake/**`, `extensions/linkskills/fake/**`, `test/helpers/link-domain-fakes/**` |
| **2** — Brain plugin skeleton                          | **Complete** at fake/local tier (default-disabled; no Lisa mutation).                                                                                                                                                                                                                                                                                         | `PHASE-2-STATUS.md`; `extensions/linkbrain/**` (skeleton + keyed-store runtime); `.github/labeler.yml`                                                                                                                                                                             |
| **3** — Brain lifecycle capture / coordination mapping | **Complete** at fake-backed tier (hooks + capture + sanitization + allowlists; no live Brain).                                                                                                                                                                                                                                                                | `PHASE-3-STATUS.md`; `extensions/linkbrain/src/{capture,lifecycle,opaque,sanitize,tools}.ts`, `lifecycle.test.ts`                                                                                                                                                                  |
| **4** — Skills plugin skeleton / structured telemetry  | **Complete** at fake/local tier (no conversation hooks; default-disabled).                                                                                                                                                                                                                                                                                    | `PHASE-4-STATUS.md`; `extensions/linkskills/**`                                                                                                                                                                                                                                    |
| **5** — Managed MCP integration and authentication     | **Template/filter work complete** (fake/template evidence). **Blocked** for live MCP wiring: Platform claim/credential approval (`PHASE-5-DECISION-PACKET-PLATFORM-AUTH.md`). Fake MCP/auth suites beyond templates deferred to Phase 6 local proofs only.                                                                                                    | `PHASE-5-STATUS.md`, `PHASE-5-DECISION-PACKET-PLATFORM-AUTH.md`; `docs/execution/openclawdevelopmentplan01/mcp-templates/**`; `extensions/link{brain,skills}/mcp-tool-filter.ts`                                                                                                   |
| **6** — Integrated local and isolated QA               | **Partial complete** — coexistence/isolation/privacy/disable/native-smoke against deterministic fakes **passed**. **Not claimed complete** for full plan Phase 6 exit: performance/soak budgets; Testbox/Crabbox heavy suites; Platform-dependent failure-matrix items (real credential revoke, Platform audit rejection).                                    | `PHASE-6-STATUS.md`; `test/helpers/link-domain-fakes/integrated-brain-skills.test.ts`; handoff `docs/handoffs/2026-07-27-phase6-integrated-fake-qa.md`                                                                                                                             |
| **7** — Platform stage readiness gate                  | **Blocked** — Platform-owned stage project/endpoints/migrations/credentials/backup/audit/Librarian not supplied; OpenClaw did not contact live Platform.                                                                                                                                                                                                      | `PHASE-7-DECISION-PACKET-PLATFORM-STAGE.md`; `PHASE-0-FREEZE-PACKET.md` §8; `PHASE-5-DECISION-PACKET-PLATFORM-AUTH.md`                                                                                                                                                             |
| **8** — Brain stage shadow/write canary                | **Blocked** — depends on Phase 7 + stage Brain credential + operator enablement. **No canary started.**                                                                                                                                                                                                                                                       | `PHASE-8-STATUS-BLOCKED.md`; §9 canary statement                                                                                                                                                                                                                                   |
| **9** — Skills stage canary                            | **Blocked** — Skills Cursor/Codex readiness + certified profiles not recorded; depends on Phase 7–8 sequencing. **No canary started.**                                                                                                                                                                                                                        | `PHASE-9-STATUS-BLOCKED.md`; Phase 0 external gates                                                                                                                                                                                                                                |
| **10** — Integrated stage soak / operational rehearsal | **Blocked** — depends on Phases 7–9.                                                                                                                                                                                                                                                                                                                          | `PHASE-10-STATUS-BLOCKED.md`                                                                                                                                                                                                                                                       |
| **11** — Brain production deployment / canary          | **Blocked** — Principal retention approval, Platform production readiness, production Brain credential, stage exits not met. **No canary started.**                                                                                                                                                                                                           | `PHASE-11-STATUS-BLOCKED.md`; Phase 0 gates                                                                                                                                                                                                                                        |
| **12** — Skills production deployment / canary         | **Blocked** — Prerequisites unmet. **No canary started.**                                                                                                                                                                                                                                                                                                     | `PHASE-12-STATUS-BLOCKED.md`                                                                                                                                                                                                                                                       |
| **13** — Execution closeout and Grok handoff           | **This document** = provisional OpenClaw execution closeout for work that could proceed under fake/local ownership. Live Phases 7–12 remain blocked (honest omission, not waived). No live Librarian submission (no live Brain integration). Operator runbooks for stage/prod are not finalized because those environments do not exist for this package yet. | This file; short pointer `docs/handoffs/2026-07-27-openclawdevelopmentplan01-phase13-provisional.md`                                                                                                                                                                               |
| **14** — Independent OpenClaw Codex verification       | **Outside ownership** — OpenClaw Codex verifier only.                                                                                                                                                                                                                                                                                                         | Plan Phase 14; execution prompt                                                                                                                                                                                                                                                    |
| **15** — Four-plan reconciliation / Principal closeout | **Outside ownership** — LiNKbrain Codex + Principal only, after all four Codex reports exist.                                                                                                                                                                                                                                                                 | Plan Phase 15                                                                                                                                                                                                                                                                      |

### Issue / work-item rollup (plan issues as phases)

This package was executed as plan Phases 0–13 on a single issue branch (`issue/ocp-openclawdevelopmentplan01`), not as separate GitHub issues per phase. Treat each phase row above as the issue-level claim set.

---

## 2. All changed files and commits

### Commits (`git log --oneline origin/development..HEAD` at handoff authoring)

```text
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
```

> Note: the Phase 13 handoff commit (this document + session/short handoff updates) will append after this list when committed.

### Changed paths (`git diff --name-only origin/development...HEAD`)

226 paths spanning:

- **Plan / prompt / execution docs:** `docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md`, `docs/CURSOR-GROK-EXECUTION-PROMPT.md`, `docs/execution/openclawdevelopmentplan01/**` (PHASE-0…6 status, freeze, auth matrix, outbox findings, MCP templates, decision packets)
- **Sessions / handoffs:** `docs/agent-sessions/active|completed/**` for this package; `docs/handoffs/2026-07-27-*phase5*`, `*phase6*`
- **Brain plugin:** `extensions/linkbrain/**` (plugin, src, fixtures, fake, tests)
- **Skills plugin:** `extensions/linkskills/**` (plugin, src, fixtures, fake, tests)
- **Shared fakes / integrated QA:** `test/helpers/link-domain-fakes/**`
- **Labeler:** `.github/labeler.yml`

Full list is reproducible with:

```bash
git diff --name-only origin/development...HEAD
```

---

## 3. Intentionally untouched ownership boundaries

| Boundary                                                                         | Status                                                                                            |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Upstream `LiNKbrain` repository (implementation / migrations / Gateway)          | **Not edited** — consume-only snapshot HEAD `86161d3ab78679ffc3b96680cf04e03c2d5c8fd2` at Phase 0 |
| Upstream `LiNKskills` repository                                                 | **Not edited** — consume-only snapshot HEAD `fd1b6364b8450ec292773f00cc2dc6de19143a70` at Phase 0 |
| Upstream `LiNKplatform` repository                                               | **Not edited** — consume-only snapshot HEAD `95120dc4549f0bc79627668acbc5b21afd699e29` at Phase 0 |
| Live Lisa profile `~/.openclaw-lisa`                                             | **Not mutated**                                                                                   |
| Live LaunchAgent `ai.openclaw.lisa`                                              | **Not restarted / not reconfigured by this package**                                              |
| Live credentials / Secret Manager / auth-profiles with real tokens               | **Not created or rotated**                                                                        |
| Live Platform stage/production services                                          | **Not contacted**                                                                                 |
| Official-external plugin catalogs / root package dist excludes for these plugins | **Not added** (private bundled stay in core dist; labeler only)                                   |
| Phases 14–15                                                                     | **Not performed**                                                                                 |
| Sibling `development` worktree                                                   | **Not switched / not modified for this package**                                                  |
| `stash@{0}: wip-auth-unrelated`                                                  | **Preserved**                                                                                     |

---

## 4. Exact repository, branch, worktree, commits, session

See §0. Reproduction snapshot:

```bash
cd /Users/linktrend/Projects/openclaw_prime
git fetch origin
git checkout issue/ocp-openclawdevelopmentplan01
git status --short --branch
git rev-parse HEAD
git log --oneline origin/development..HEAD
```

Primary session record: `docs/agent-sessions/active/cursor-local-mac-mini-lisa-openclawdevelopmentplan01-20260727-1648.md`

---

## 5. Commands, tests, failures, reruns

### Focused Vitest re-run (Phase 13 closeout — 2026-07-27 19:17 Asia/Taipei)

Command:

```bash
node scripts/run-vitest.mjs \
  test/helpers/link-domain-fakes/brain-fake.test.ts \
  test/helpers/link-domain-fakes/integrated-brain-skills.test.ts \
  extensions/linkbrain/fake/brain-fake.test.ts \
  extensions/linkbrain/manifest.test.ts \
  extensions/linkbrain/runtime.test.ts \
  extensions/linkbrain/plugin-boundary.test.ts \
  extensions/linkbrain/lifecycle.test.ts \
  extensions/linkbrain/mcp-tool-filter.test.ts \
  extensions/linkskills/fake/skills-fake.contract.test.ts \
  extensions/linkskills/manifest.test.ts \
  extensions/linkskills/runtime.test.ts \
  extensions/linkskills/plugin-boundary.test.ts \
  extensions/linkskills/mcp-tool-filter.test.ts
```

Result:

| Shard                         | Files  | Tests         | Outcome           |
| ----------------------------- | ------ | ------------- | ----------------- |
| `vitest.tooling.config.ts`    | 2      | 14 passed     | pass              |
| `vitest.extensions.config.ts` | 11     | 68 passed     | pass              |
| **Total**                     | **13** | **82 passed** | **pass** (~4.46s) |

Failures this re-run: **none**.

### Prior focused proof (from phase status docs — historical)

| Phase | Command (summary)                                  | Recorded result                               |
| ----- | -------------------------------------------------- | --------------------------------------------- |
| 1     | brain-fake + skills-fake.contract                  | 19 passed (7+12)                              |
| 2     | linkbrain manifest/runtime/boundary/fake           | 4 files / 17 passed                           |
| 3     | Phase 2 set + lifecycle                            | 5 files / 32 passed                           |
| 4     | linkskills manifest/runtime/boundary/fake.contract | 4 files / 26 passed                           |
| 5     | mcp-tool-filter tests (both domains)               | 10 focused filter tests (per Phase 5 session) |
| 6     | `integrated-brain-skills.test.ts`                  | 1 file / 7 passed                             |

### Known failure then fix (Phase 6)

- First integrated run failed on nonexistent `skillsFake.telemetry` API assumption and on `LINKSKILLS_FAKE_THROTTLE_AFTER` empty-env → `Number("") === 0` rate-limiting the first child-process request.
- Fix: `extensions/linkskills/fake/cli.mjs` treats empty/unset throttle as unlimited (matches in-process default). Re-run green. See `PHASE-6-STATUS.md`.

### Not run / not claimed

- Full `pnpm test` / heavy extension matrix
- Testbox / Crabbox remote proof
- Live gateway / Lisa enablement tests
- Stage / production canary suites
- Autoreview (`$autoreview`) not re-run at Phase 13 closeout (docs/evidence closeout; prior feature commits used focused vitest)

---

## 6. Contract versions and hashes

| Artifact                    | SHA-256 / commit                                                   | Status                                                        |
| --------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------- |
| OpenClaw plan               | `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7` | frozen; re-verified 2026-07-27 19:17                          |
| LiNKplatform plan           | `fbcf36235c4caaa6abf7ee93afedeedf105a96f6614a3a3ff5ccb8d78e33c6b9` | frozen Phase 0; re-verified 2026-07-27 19:17                  |
| LiNKbrain plan              | `051caa80191639c06b2dee6fa4800e736ada30772a55ad84e12e5fa6a4e63458` | frozen Phase 0; re-verified 2026-07-27 19:17                  |
| LiNKskills plan             | `31a6cc70bb778ce1dff236819e4bf600b0495dbb06c95bac55bcb2b0b2f5fe88` | frozen Phase 0; re-verified 2026-07-27 19:17                  |
| Brain fixtures package      | `extensions/linkbrain/fixtures/MANIFEST.md` + JSON fixtures        | **OpenClaw-derived draft**; Brain owner sign-off **pending**  |
| Skills fixtures package     | `extensions/linkskills/fixtures/MANIFEST.md` + JSON fixtures       | **OpenClaw-derived draft**; Skills owner sign-off **pending** |
| Tool allowlist mirror       | `mcp-templates/tool-allowlists.yaml`                               | mirrors plan §9.1 / §9.2 (OpenClaw-owned mirror)              |
| openclaw_prime Phase 0 base | `4966913a6f81af58355f4439d146013052587339`                         | first plan commit on branch                                   |
| Upstream consume-only HEADs | Brain `86161d3…`, Skills `fd1b636…`, Platform `95120dc…`           | snapshot only — not re-fetched for live proof                 |

---

## 7. Configuration, credential references, profile changes, deployments, live actions

| Action class                                        | What happened                                                                                                              | Operator                                 |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Live Lisa profile mutation                          | **None**                                                                                                                   | —                                        |
| Live LaunchAgent / gateway restart for this package | **None**                                                                                                                   | —                                        |
| Live Platform contact / probe / mutation            | **None**                                                                                                                   | —                                        |
| Production / stage credential issuance              | **None**                                                                                                                   | —                                        |
| Secret values committed                             | **None** (placeholders / SecretRef **names** only in templates)                                                            | OpenClaw Grok                            |
| Template-only MCP configs added                     | `docs/execution/openclawdevelopmentplan01/mcp-templates/*.json` with `enabled: false` and env/authProfile **placeholders** | OpenClaw Grok (Phase 5 feature subagent) |
| Plugin defaults                                     | Both plugins **default-disabled** in manifests                                                                             | OpenClaw Grok                            |
| Labeler registration                                | `.github/labeler.yml` entries for `extensions: linkbrain` / `linkskills`                                                   | OpenClaw Grok                            |
| Deployment of `dist/` to Lisa LaunchAgent checkout  | **None for this package** (unrelated prior Orchestrator deploys are outside this handoff)                                  | —                                        |
| Authoritative production profile mutation           | **None**                                                                                                                   | —                                        |

Documented placeholder credential **names** (not values) in templates / decision packet:

- `LINKTREND_LINKBRAIN_STAGE_MCP_TOKEN`
- `LINKTREND_LINKBRAIN_STAGE_INGESTION_TOKEN`
- `LINKTREND_LINKSKILLS_STAGE_MCP_TOKEN`
- `LINKTREND_LINKSKILLS_STAGE_PLUGIN_TOKEN`
- authProfileId placeholders `linkbrain-stage-mcp` / `linkskills-stage-mcp`

---

## 8. Evidence tiers (strictly separated)

| Tier                  | What exists in this package                                                                                         | What does **not** exist                                                   |
| --------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Fake**              | Domain fakes (stdio/HTTP), fixture JSON, auth/failure/prohibited canaries, plugin unit/contract tests against fakes | —                                                                         |
| **Integration-local** | `integrated-brain-skills.test.ts` coexistence/isolation proofs; MCP template parse + toolFilter unit tests          | Not a substitute for stage                                                |
| **Stage**             | **None**                                                                                                            | No stage endpoints, credentials, canaries, or observation windows         |
| **Production**        | **None**                                                                                                            | No production credentials, profile mutation, canaries, or retention proof |

Hard rule retained: fake / integration-local evidence **never** proves stage/production readiness, real credential lifecycle, migration state, backup/restore, audit, or Librarian operation.

---

## 9. Canary windows

| Canary                           | Status                                                                                                     |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Brain stage (Phase 8)            | **None started** — no start/end, duration, scenario counts, event/run counts, failures, or window restarts |
| Skills stage (Phase 9)           | **None started**                                                                                           |
| Brain production (Phase 11)      | **None started**                                                                                           |
| Skills production (Phase 12)     | **None started**                                                                                           |
| Integrated stage soak (Phase 10) | **None started**                                                                                           |

---

## 10. Failures, deviations, blockers, risks, omissions, unproven claims

### Failures (resolved under fake surface)

- Phase 6 Skills fake CLI empty-env throttle bug — fixed; re-proven green.

### Approved / proposed deviations

- **Phase 1 Option 2 (implementation judgment / Principal prompt allows continue):** proceed Phases 2–6 against OpenClaw-derived fixture drafts while owner sign-off remains open; never claim domain conformance from drafts alone.
- **Phase 6 scope narrowing (disclosed):** coexistence/isolation packet delivered; full performance budgets + Testbox heavy suite + Platform-dependent failure matrix **omitted** pending Platform/remote proof authorization.

### Blockers (external / ownership)

1. Brain owner fixture package sign-off (`extensions/linkbrain/fixtures/MANIFEST.md`)
2. Skills owner fixture package sign-off (`extensions/linkskills/fixtures/MANIFEST.md`)
3. Platform auth mechanism + claim propagation approval (`PHASE-5-DECISION-PACKET-PLATFORM-AUTH.md`)
4. Platform stage readiness evidence (Phase 7 inventory)
5. Skills Cursor + Codex readiness + certified profiles before Lisa Skills canary
6. Principal Brain production retention / hold approval
7. Production credentials + authorized OpenClaw operator for authoritative Lisa-profile mutation
8. Live Librarian / Brain Gateway availability for scratch finding submission

### Risks (open)

| ID  | Risk                                                    | Mitigation in place                                                       |
| --- | ------------------------------------------------------- | ------------------------------------------------------------------------- |
| R1  | Draft fixtures diverge from future owner contracts      | Pending sign-off; stop on owner delta                                     |
| R2  | Keyed-store caps insufficient under real capture volume | Prototype findings recorded; stage measurement still required             |
| R3  | Accidental live Lisa/Platform mutation                  | Default-disabled; templates disabled; no live actions performed           |
| R4  | Skills conversation leak                                | Separate plugins/MCP/KV; hook prohibition tests; integrated privacy tests |
| R5  | Fake evidence misread as live                           | Explicit tiers in every status + this handoff                             |
| R6  | Claiming Phase 6/7–12 complete                          | Honest partial/blocked rows above                                         |

### Omissions / unproven claims (explicit)

- No claim that Brain/Skills Gateways conform to OpenClaw fixtures
- No claim of stage or production readiness
- No claim of crash-safe outbox under live Gateway load beyond fake-backed plugin tests
- No claim that public MCP OAuth/SecretRef path is Platform-approved
- No performance budget justification from soak measurements
- No backup/restore, audit retrieval, or credential rotation proof
- No native Lisa channel/cron/heartbeat live regression under enabled Brain/Skills (plugins never enabled on Lisa)
- No structured `brain_append_finding` submission (live integration unauthorized)

---

## 11. Reproduction instructions

```bash
# 1. Checkout
cd /Users/linktrend/Projects/openclaw_prime
git fetch origin
git checkout issue/ocp-openclawdevelopmentplan01
git pull --ff-only

# 2. Verify plan hash
shasum -a 256 docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md
# expect: 17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7

# 3. Dependencies (if needed)
pnpm install

# 4. Focused proof (trusted local)
node scripts/run-vitest.mjs \
  test/helpers/link-domain-fakes/brain-fake.test.ts \
  test/helpers/link-domain-fakes/integrated-brain-skills.test.ts \
  extensions/linkbrain/fake/brain-fake.test.ts \
  extensions/linkbrain/manifest.test.ts \
  extensions/linkbrain/runtime.test.ts \
  extensions/linkbrain/plugin-boundary.test.ts \
  extensions/linkbrain/lifecycle.test.ts \
  extensions/linkbrain/mcp-tool-filter.test.ts \
  extensions/linkskills/fake/skills-fake.contract.test.ts \
  extensions/linkskills/manifest.test.ts \
  extensions/linkskills/runtime.test.ts \
  extensions/linkskills/plugin-boundary.test.ts \
  extensions/linkskills/mcp-tool-filter.test.ts

# 5. Inspect evidence index
# this file + docs/execution/openclawdevelopmentplan01/PHASE-*-STATUS.md
# + mcp-templates/ + extensions/link{brain,skills}/
```

Do **not** copy MCP templates into `~/.openclaw-lisa` or enable plugins without Platform + Principal gates.

---

## 12. Rollback instructions

### Domain-specific (Brain)

1. Ensure `plugins.entries.linkbrain` remains disabled / remove registration if experimentally enabled.
2. Disable `mcp.servers.linkbrain` if present.
3. Revoke only the Brain credential family if one was ever issued (none issued in this package).
4. Retain or purge plugin-owned keyed-store namespaces (`outbox`, `deadletter`, `cursor`, `health`, `capture-buffer`) via approved operator action only.
5. Do not touch Skills unless shared-risk evidence exists.

### Domain-specific (Skills)

1. Ensure `plugins.entries.linkskills` remains disabled / remove registration if experimentally enabled.
2. Disable `mcp.servers.linkskills` if present.
3. Revoke only the Skills credential family if issued (none issued here).
4. Brain and native OpenClaw skills must remain functional.

### Full OpenClaw package rollback (this branch’s product surface)

1. Revert or disable both plugins and both MCP template applications (templates were never applied live).
2. Leave live Lisa profile unchanged (already unchanged).
3. Optional git rollback of the feature branch relative to `origin/development`:

```bash
# inspection only — do not force-push shared branches without Principal authorization
git diff --stat origin/development...HEAD
# to discard local package work from a clean tree (destructive; Principal-only):
# git checkout origin/development -- extensions/linkbrain extensions/linkskills \
#   test/helpers/link-domain-fakes docs/execution/openclawdevelopmentplan01
```

4. Preserve `stash@{0}` and sibling worktrees.
5. Native OpenClaw/Lisa behavior was never altered by enabling these plugins; rollback of live runtime for this package is a no-op.

---

## 13. Sanitized evidence locations

| Location                                                                                           | Contents                                                                                                     |
| -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `docs/execution/openclawdevelopmentplan01/`                                                        | Freeze packet, phase status, auth matrix, outbox findings, MCP templates, decision packets, **this handoff** |
| `docs/handoffs/2026-07-27-1914-cursor-local-phase5-managed-mcp-templates.md`                       | Phase 5 session handoff                                                                                      |
| `docs/handoffs/2026-07-27-phase6-integrated-fake-qa.md`                                            | Phase 6 session handoff                                                                                      |
| `docs/handoffs/2026-07-27-openclawdevelopmentplan01-phase13-provisional.md`                        | Short pointer to this file                                                                                   |
| `docs/agent-sessions/active/cursor-local-mac-mini-lisa-openclawdevelopmentplan01-20260727-1648.md` | Primary integrator session                                                                                   |
| `docs/agent-sessions/completed/*phase3*`, `*phase5*`, `*phase6*`                                   | Feature session completions                                                                                  |
| `extensions/linkbrain/fixtures/**`, `fake/**`, `*.test.ts`                                         | Brain sanitized fixtures + fake + proof                                                                      |
| `extensions/linkskills/fixtures/**`, `fake/**`, `*.test.ts`                                        | Skills sanitized fixtures + fake + proof                                                                     |
| `test/helpers/link-domain-fakes/**`                                                                | Shared fakes + integrated suite                                                                              |

No secret values, private messages, memory contents, or live config blobs are included.

---

## 14. Coverage index (phase / task / gate → evidence) — **no final classifications**

| Plan item                                                   | Claimed evidence location                                                    | Notes for verifier                      |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------- |
| Phase 0 freeze / hashes / ownership                         | `PHASE-0-FREEZE-PACKET.md`                                                   | Re-verify hashes §6                     |
| Phase 1 fixtures Brain                                      | `extensions/linkbrain/fixtures/**`                                           | Draft pending Brain sign-off            |
| Phase 1 fixtures Skills                                     | `extensions/linkskills/fixtures/**`                                          | Draft pending Skills sign-off           |
| Phase 1 fakes                                               | `extensions/link{brain,skills}/fake/**`, `test/helpers/link-domain-fakes/**` | Fake tier                               |
| Phase 1 auth matrix                                         | `PHASE-1-AUTH-COMPATIBILITY-MATRIX.md`                                       | Platform approval pending               |
| Phase 1 outbox prototype                                    | `PHASE-1-OUTBOX-PROTOTYPE-FINDINGS.md`                                       | Design + public API inspection          |
| Phase 2 Brain skeleton / outbox                             | `extensions/linkbrain/**`, `PHASE-2-STATUS.md`                               | Default-disabled                        |
| Phase 3 lifecycle / capture / privacy                       | `extensions/linkbrain/src/*`, `lifecycle.test.ts`, `PHASE-3-STATUS.md`       | Fake-backed                             |
| Phase 4 Skills skeleton / telemetry / no conversation hooks | `extensions/linkskills/**`, `PHASE-4-STATUS.md`                              | Default-disabled                        |
| Phase 5 MCP templates                                       | `mcp-templates/**`, `PHASE-5-STATUS.md`                                      | `enabled: false`                        |
| Phase 5 tool filters §9                                     | `mcp-tool-filter.ts` ×2 + tests                                              | Separate modules                        |
| Phase 5 Platform auth gate                                  | `PHASE-5-DECISION-PACKET-PLATFORM-AUTH.md`                                   | Blocked                                 |
| Phase 6 integrated fake QA                                  | `integrated-brain-skills.test.ts`, `PHASE-6-STATUS.md`                       | Partial vs full Phase 6                 |
| Phase 6 privacy / isolation / independent disable           | same integrated suite                                                        | Fake/integration-local                  |
| Phase 6 perf budgets / Testbox                              | —                                                                            | **Omitted / unproven**                  |
| Phase 7 Platform stage readiness                            | —                                                                            | **Blocked / no OpenClaw evidence**      |
| Phase 8–12 canaries / prod                                  | —                                                                            | **None started / blocked**              |
| Phase 13 handoff completeness                               | this file                                                                    | Provisional                             |
| Gate: two plugins / two MCP / separate state                | code + templates + tests                                                     | Implementer claim; Codex must inspect   |
| Gate: Brain-only conversation hooks                         | `linkbrain` hooks + `linkskills` prohibition tests                           | Codex must inspect                      |
| Gate: no live Platform mutation                             | §7 + §3                                                                      | Absence claim                           |
| Gate: no secrets in Git                                     | templates use placeholders                                                   | Codex should secret-scan diff           |
| Gate: native behavior preserved                             | default-disabled; integrated native-smoke                                    | Live Lisa not exercised with plugins on |
| DoD: independent Codex report                               | Phase 14                                                                     | Outside Grok                            |
| DoD: four-plan Principal acceptance                         | Phase 15                                                                     | Outside Grok                            |
| Risk R1–R6                                                  | §10                                                                          | Open                                    |
| Definition-of-done live canary windows                      | §9                                                                           | None                                    |

---

## 15. Native behavior and active-work statements

- **Native OpenClaw/Lisa behavior:** preserved by leaving plugins default-disabled and never mutating the live Lisa profile for this package. Fake-tier tests assert disable/no-throw and independent degradation. Live channel/cron/heartbeat continuity under enabled Brain/Skills is **unproven**.
- **Work remaining active after this handoff:** OpenClaw Grok **execution ownership for Phases 0–13 is provisionally closed**. Independent verification (Phase 14) remains **active** for the OpenClaw Codex verifier. External blockers (Platform, Brain/Skills owners, Principal gates) remain open for any future live work packets. Grok must not self-certify.

---

## Principal instruction (required close)

**Return to the OpenClaw Codex planning/verifier agent for Phase 14 independent verification.**

That verifier must:

1. Ignore this document as proof-by-assertion.
2. Inspect actual code, configuration templates, tests, and sanitized evidence listed here.
3. Assign exactly one of the seven Section 13.3 classifications to every planned item.
4. Issue correction work packets to the original OpenClaw Grok owner for deficiencies.

**LiNKbrain Codex performs Phase 15 only after all four independent Codex verification reports exist** (OpenClaw, LiNKbrain, LiNKskills, LiNKplatform). Do not start four-plan reconciliation from this provisional Grok handoff alone.

---

_End of Phase 13 provisional Grok handoff._
