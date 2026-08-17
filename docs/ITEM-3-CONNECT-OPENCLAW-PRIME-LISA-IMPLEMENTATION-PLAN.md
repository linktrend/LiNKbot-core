---
summary: "Implementation plan mapping Item 3 Lisa PRD acceptance criteria to bounded source packets"
read_when:
  - Executing Orchestrator Item 3 after an independently accepted Item 2 head exists
  - Reviewing Lisa five-provider connection packets, tests, or rollback
title: "Item 3 Connect OpenClaw Prime Lisa Implementation Plan"
---

# Item 3 Connect OpenClaw Prime Lisa Implementation Plan

**Status:** Draft for Codex supervisor acceptance. This plan authorizes no source packet until the Item 2 execution-time fields are filled from an independently accepted exact head.

**Companion PRD:** [Item 3 Lisa PRD](/ITEM-3-CONNECT-OPENCLAW-PRIME-LISA-PRD).

**Documentation branch:** `issue/189-author-lisa-five-provider-connection-prd-and-imp`.

**Documentation start SHA / tree:** `f1ca4e8ad32ef87babad397a2ee14c44d5512c1b` / `8843e51cd6d3e2df695d33c68c27724e7ff56502`.

## 1. Execution gate

Documentation may complete on this issue branch now.

No Lisa source packet may start until all of the following are true:

1. Item 2 has a clean independently accepted exact head.
2. The table in section 2 is filled from that head, not from memory or from this document's inspection notes.
3. The Item 3 source worktree is created from that exact commit/tree, even if Item 2 has no PR yet.
4. The packet uses commit, push, and checkpoint only.
5. No Item 3 PR is opened until IDE Development v2.4.0 rollout is recorded.

If Item 2 review remains unclean, Item 3 implementers stop. They do not repair Item 2, do not layer from a still-reviewing SHA, and do not treat `origin/development` as a substitute for the accepted Item 2 head.

## 2. Item 2 execution-time fields

Fill these at source-packet start. Leave them blank in this documentation revision.

| Field                       | Value at source-packet start                                             |
| --------------------------- | ------------------------------------------------------------------------ |
| Item 2 issue                | _execution-time_                                                         |
| Item 2 branch               | _execution-time_                                                         |
| Item 2 accepted commit      | _execution-time_                                                         |
| Item 2 accepted tree        | _execution-time_                                                         |
| Independent review identity | _execution-time_                                                         |
| Pin profile on that tree    | _execution-time; expected `ocp-01` unless a recorded amendment exists_   |
| Public barrels present      | _execution-time checklist of the five `extensions/link*/api.ts` barrels_ |

Inspection-time non-authority: on 2026-08-17 this documentation session observed Item 2 still reviewing on `issue/188-connect-openclaw-prime-remaining-providers`. That still-reviewing commit/tree must not be copied into the table above or used as a source base.

## 3. Layering and git mechanics

1. Fetch the accepted Item 2 commit and confirm `git rev-parse ACCEPTED^{tree}` matches the recorded tree.
2. Create a new `issue/<n>-<slug>` worktree from that exact commit (`--prefer-worktree`). Do not start from this documentation branch and do not start from dirty `development`.
3. Do not merge Item 2 into `development`. Do not open a PR.
4. If Item 2 later moves to a new accepted head, stop in-flight Lisa packets, record the new execution-time fields, and rebase only the unfinished Lisa packets onto the new accepted head. Do not rewrite a frozen reviewed Lisa SHA.
5. Rollback is `git revert` of the Lisa packet commit on the Lisa issue branch, or abandoning an unpushed packet. Never force-push `development`, `staging`, or `main`. Never reset Item 2.

## 4. Path ownership

### 4.1 Lisa Item 3 may add or edit

| Path                                                                                                       | Why                                                                                                   |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `linkbots/lisa/ops/providers/`                                                                             | New Lisa policy modules that call Item 2 public barrels. Create this directory in P-02.               |
| `linkbots/lisa/ops/providers/*.test.ts`                                                                    | Focused Lisa policy tests.                                                                            |
| `linkbots/lisa/ops/jobs/lisa-job-catalogue.ts`                                                             | Replace placeholder provider dependency refs with pin-backed refs.                                    |
| `linkbots/lisa/ops/jobs/lisa-job-contracts.ts`                                                             | Add closed Lisa provider outcome types if missing.                                                    |
| `linkbots/lisa/ops/jobs/time-management/*`                                                                 | Replace string `linkbrain` destination with policy HOLD or Item 2 Brain v2 calls in source-only form. |
| `linkbots/lisa/Personality files/` only where a Lisa-owned contract currently names v1 provider operations | Obsolete-reference replacement. Do not edit live memory.                                              |
| `docs/ITEM-3-CONNECT-OPENCLAW-PRIME-LISA-PRD.md`                                                           | Supervisor corrections only.                                                                          |
| `docs/ITEM-3-CONNECT-OPENCLAW-PRIME-LISA-IMPLEMENTATION-PLAN.md`                                           | Supervisor corrections and later execution-time field fill via amendment, not silent rewrite.         |

Lisa policy modules import only:

- `extensions/linkplatform/api.ts`
- `extensions/linkbrain/api.ts`
- `extensions/linkskills/api.ts`
- `extensions/linklibraries/api.ts`
- `extensions/linkautowork/api.ts`

They must not import `extensions/*/src/**` from another package path, core `src/**`, or provider repositories.

### 4.2 Lisa Item 3 must not edit

- `extensions/linkplatform/src/**`, `extensions/linkbrain/src/**`, `extensions/linkskills/src/**`, `extensions/linklibraries/src/**`, `extensions/linkautowork/src/**`
- `docs/link-integrations/ocp-01/provider-pins.json` and `verify-provider-pins.mjs`
- workflows, LaunchAgents, VPS units, live config, credentials, schedules
- Item 2 tests except by calling public barrels from Lisa tests
- provider clones under `Projects/LiNK*`

If an accepted Item 2 barrel is missing an export Lisa needs, stop. File the gap against Item 2. Do not duplicate the adapter under `linkbots/lisa`.

## 5. Packet map

Every PRD acceptance criterion maps to one primary packet. Some criteria are invariants on every packet.

| Packet | Name                                                 | Primary ACs                | Depends on                         | Parallel with                                                                                |
| ------ | ---------------------------------------------------- | -------------------------- | ---------------------------------- | -------------------------------------------------------------------------------------------- |
| P-00   | Execution-time freeze                                | AC-01, AC-16               | Independently accepted Item 2 head | Nothing. Serial gate.                                                                        |
| P-01   | Layer and ownership scaffold                         | AC-01, AC-02, AC-16        | P-00                               | Nothing                                                                                      |
| P-02   | Lisa identity and permissions                        | AC-03, AC-04               | P-01                               | Nothing. Foundation for domain packets.                                                      |
| P-03   | Allowed capability matrix and denial                 | AC-05, AC-11, AC-12        | P-02                               | Serial before domain packets                                                                 |
| P-04   | Privacy, memory, and knowledge                       | AC-06, AC-07               | P-02                               | After P-03, or with P-05/P-06/P-07 only if those packets do not edit the same privacy module |
| P-05   | Skills discovery, validation, job execution          | AC-08                      | P-03, P-04                         | P-06, P-07                                                                                   |
| P-06   | Autowork requests, status, handoffs, receipts        | AC-09                      | P-03, P-04                         | P-05, P-07                                                                                   |
| P-07   | Libraries discovery and retrieval                    | AC-10                      | P-03, P-04                         | P-05, P-06                                                                                   |
| P-08   | Obsolete reference replacement                       | AC-13                      | P-05, P-06, P-07                   | Nothing after domain packets, so replacements match the new names                            |
| P-09   | Evidence, non-regression audit, checkpoint, and stop | AC-14, AC-15, AC-16, AC-17 | P-08                               | Nothing                                                                                      |

Invariant on **every** source packet: AC-02, AC-11, AC-15. If a packet would violate them, it stops.

### 5.1 Safe parallelism

- P-00 and P-01 are serial.
- P-02 and P-03 are serial.
- P-04 should land before or with the first domain packet that emits provider payloads.
- P-05, P-06, and P-07 may run in **separate worktrees** from the same P-04 parent SHA if they own disjoint files:
  - P-05: `linkbots/lisa/ops/providers/skills.ts` and tests
  - P-06: `linkbots/lisa/ops/providers/autowork.ts` and tests
  - P-07: `linkbots/lisa/ops/providers/libraries.ts` and tests
- Do not parallelize two packets that edit `lisa-job-catalogue.ts` or the shared policy facade.
- P-08 is serial after the domain packets.
- Never share a checkout while another session is using it.

## 6. Packet specifications

Each packet uses the template in section 10. Details below are the bounded work, tests, and stop conditions.

### P-00 Execution-time freeze

**Work:** Record section 2 from Git and the independent review record. Confirm the five barrels export the symbols the PRD names (Platform claims/trust, Brain v2 client, Skills v2/exact-release, Libraries revision-2/exact-release, Autowork request/receipt/callback). Confirm `provider-pins.json` commit/tree values match adapter constants on that head.

**Tests:** none beyond `git rev-parse` and a read-only export checklist.

**Stop:** any missing barrel, pin mismatch, or review that is not clean.

**Rollback:** do not create the Lisa issue branch.

### P-01 Layer and ownership scaffold

**Work:** Create the Lisa issue branch/worktree from the accepted Item 2 commit. Add `linkbots/lisa/ops/providers/README.md` only if a non-markdown module is also added in P-02; otherwise wait and create modules in P-02. No provider calls yet.

**Owned paths:** issue branch metadata only, plus empty policy directory created with P-02 if that keeps the diff atomic.

**Stop:** accidental checkout of documentation branch 189, `development`, or a still-reviewing Item 2 SHA.

### P-02 Lisa identity and permissions

**Work:** Add `linkbots/lisa/ops/providers/identity.ts` that:

- accepts Platform facts as input;
- calls Item 2 `validatePlatformTrustFacts` / `validateProviderClaim`;
- requires Lisa actor, binding, org, audience, capability, expiry, and `revocationStatus: "active"`;
- returns a closed Lisa identity handle or typed `denied`.

Add `assertNoCredentialInheritance()` for helper agent ids.

**Positive tests:** valid Lisa facts accepted.

**Negative tests:** wrong actor, expired, revoked, missing capability, accessor-backed facts, helper agent presenting Lisa facts.

**Unavailability tests:** not applicable; identity failure is `denied`.

**AC:** AC-03, AC-04.

### P-03 Allowed capability matrix and denial

**Work:** Add `linkbots/lisa/ops/providers/capabilities.ts` with the exhaustive allowlists from PRD section 7. Unknown operation, denied Autowork kinds (`external_assistance`, `media_package`, `outreach_adapter`), and legacy v1 names return `denied` before any domain validator.

**Positive tests:** each allowed operation name is admitted after identity succeeds.

**Negative tests:** each denied/legacy name is rejected; extra fields do not widen the allowlist.

**Unavailability tests:** capability matrix itself does not call the network. If Item 2 provider status is supplied as `disabled` / `contract_incompatible`, return `unavailable` without attempting the operation.

**AC:** AC-05, AC-11, AC-12 (denial versus unavailability split).

### P-04 Privacy, memory, and knowledge

**Work:** Add `linkbots/lisa/ops/providers/privacy.ts` that inspects intended payloads and job privacy class. Reject prohibited payloads from PRD section 6.2. Shared Brain knowledge requests must be classified `work`. `private_health` and `personal_compliance` cannot select Brain shared knowledge, Skills, Libraries, or Autowork.

**Positive tests:** work-class knowledge browse with redacted metadata-only fixture accepted by policy (still advisory).

**Negative tests:** transcript, secret-shaped string, private health fixture, and conversation content to Skills.

**Unavailability tests:** if Brain status is unavailable, policy returns `unavailable` and does not read local memory as a claimed Brain result.

**AC:** AC-06, AC-07.

### P-05 Skills discovery, validation, and job execution

**Work:** Add `linkbots/lisa/ops/providers/skills.ts` that wraps Item 2 `validateSkillsV2Request`, `validateExactRelease`, and `validateProgressiveReleaseTransition`. Lisa job execution emits only `skills_release_verify` plus use-report/feedback status operations. Legacy run/tool requests are denied by P-03 and re-tested here.

**Positive tests:** catalog list, exact release describe/verify, use-report status with valid actor and pins.

**Negative tests:** `skills_run_start`, `skills_tool_invoke`, missing `skillId` where required, cross-operation fields, accessor-backed request.

**Unavailability tests:** provider status offline/stale/unauthorized; missing exact release.

**AC:** AC-08.

### P-06 Autowork requests, status, handoffs, and receipts

**Work:** Add `linkbots/lisa/ops/providers/autowork.ts` that wraps Item 2 `validateRequest`, `validateRequestAt`, `requestFingerprint`, `validateReceipt`, `validateCallback`, and `assertIdempotency`. Build Lisa requests with audience `autowork`, opaque refs only, and optional `brainHandoffRef`. Handoff create/accept goes through Item 2 Brain v2 operations after P-04.

**Positive tests:** allowed operation request accepted; receipt bound to fingerprint; legal callback progression; handoff ref correlation.

**Negative tests:** wrong audience, terminal regression, mutated body with same idempotency key, denied Autowork kinds, pre-issuance revocation, missing fingerprint match.

**Unavailability tests:** Autowork state `unavailable` / `contract_incompatible`; revoked binding.

**AC:** AC-09.

### P-07 Libraries discovery and retrieval

**Work:** Add `linkbots/lisa/ops/providers/libraries.ts` that wraps Item 2 `pageCatalogue`, `validateRevision2Record`, `validateExactRevision2`, and `validateExactRelease`. Lisa may select only admitted selectable records of the allowed artifact types.

**Positive tests:** catalogue page with selectable admitted record; exact-release pass receipt matching pins and catalogue membership.

**Negative tests:** contribution intake attempt; non-selectable/withdrawn record; inherited catalogue fields; truthy non-boolean `resolved`; selected record not in hashed catalogue.

**Unavailability tests:** missing catalogue snapshot; provider disabled.

**AC:** AC-10.

### P-08 Obsolete reference replacement

**Work:** Update Lisa-owned files from PRD section 9:

- job catalogue provider dependencies to pin-backed contract refs;
- time-management destination/ledger strings to the P-04/P-05/P-06/P-07 policy outcomes;
- comments or Lisa-owned docs that still present the July 2026 two-provider plan or v1 MCP run tools as current Lisa contract.

Do not rewrite Issue 183 preserved ledger files. Do not edit Item 2 adapters to delete v1 compatibility they still own.

**Positive tests:** catalogue provider refs match accepted pins; time-management no longer claims a live LiNKbrain write.

**Negative tests:** leftover `skills_run_start` or `brain_capture_batch` as Lisa-allowed names in Lisa policy tests.

**AC:** AC-13.

### P-09 Evidence, checkpoint, and stop

**Work:** Run the focused tests from P-02 through P-08 in one command. Add a
focused source/static non-regression audit covering every PRD section 10.4
ledger entry: model routing, Cursor ACP delegation, main/lisa-cron sandbox
separation, both Google identities and safe wrappers, Carlos approval gates,
planning/HOLD behavior, memory/privacy, jobs/heartbeat/channels, Personality
and tool doctrine, and the source-versus-live runtime boundary. The audit must
prove that the Item 3 diff does not weaken or bypass those contracts; it must
not rewrite them to make a test pass. Run `git diff --check`. Write completion
evidence only if this issue is finished **and** IDE Development v2.4.0 rollout
is recorded. If v2.4.0 is not rolled out, checkpoint with commit+push and stop
without `review-ready` and without a PR.

**AC:** AC-14, AC-15, AC-16, AC-17.

## 7. Test matrix

Use `node scripts/run-vitest.mjs` on the Lisa policy test files only. Do not start a second Vitest process in the same worktree. Do not call live providers.

| Area          | Positive                                          | Negative                                                                    | Unavailability                                         |
| ------------- | ------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------ |
| Identity      | Valid Lisa Platform facts                         | Wrong actor, helper inheritance, revoked, expired, inherited/accessor facts | Not used; identity errors are denied                   |
| Capabilities  | Each PRD section 7 allowlist name                 | Legacy v1 names; denied Autowork kinds; unknown operation                   | Provider status disabled/incompatible                  |
| Privacy       | Work-class advisory knowledge                     | Private health, transcripts, secrets to Skills/Libraries/Autowork           | Brain unavailable does not become local-memory success |
| Skills        | Discover, verify exact release, use-report status | `skills_run_*`, `skills_tool_*`, cross-operation fields                     | Missing release, unauthorized, offline                 |
| Autowork      | Request/receipt/callback/handoff correlation      | Audience mismatch, terminal regression, idempotency mutation                | `unavailable`, revoked, pre-issuance revocation        |
| Libraries     | Selectable admitted exact retrieval               | Contribution, non-selectable, catalogue tamper                              | Missing snapshot, disabled                             |
| Obsolete refs | Pin-backed catalogue refs                         | Residual v1 Lisa contract names                                             | HOLD when pin or adapter missing                       |

## 8. Review, repair, evidence, rollback, and stop

### 8.1 Review

- Implementer does not open a PR and does not request Bugbot.
- Every clean source checkpoint receives an independent exact-head review before acceptance. Post-rollout Packager review remains a separate delivery gate.
- Codex supervisor acceptance of these two documents is separate from later source review.

### 8.2 Repair

- Continue bounded repair/review while findings are actionable, in scope, and each cycle makes measurable progress. Stop only for repeated unresolved findings, consecutive no-progress cycles, redesign or new-authority requirements, infrastructure retry exhaustion, or an explicit resource limit. Retain the separate two-attempt infrastructure retry limit.
- If the defect is in Item 2 adapters, stop and return it to Item 2. Do not patch adapters from Item 3.
- Immediate failure types (credentials, usage limit) are not auto-repaired.

### 8.3 Evidence

When a Lisa source issue is actually finished and v2.4.0 allows packaging:

1. Focused Lisa tests pass.
2. `git diff --check` passes.
3. Working tree clean; `HEAD` equals `origin/<lisa-issue-branch>`.
4. `python3 scripts/gitops/completion_gate.py write-evidence` tied to that exact SHA.
5. `python3 scripts/gitops/completion_gate.py review-ready` only after the above.

Until v2.4.0 rollout: commit, push, checkpoint, stop.

### 8.4 Rollback

- Unpushed packet: delete the Lisa worktree after recording the stop.
- Pushed packet: revert the Lisa commit on the Lisa issue branch.
- Do not revert Item 2.
- Do not use prefer-incoming on conflicts.

### 8.5 Stop conditions

Stop immediately when any of these hold:

- Item 2 exact head is not independently accepted;
- accepted tree does not match the recorded tree;
- required public export is missing;
- packet would edit a forbidden path;
- live runtime, VPS, credential, or schedule change is requested;
- three ordinary repairs are exhausted;
- independent review of a frozen Lisa SHA is in progress;
- someone asks to open an Item 3 PR before IDE Development v2.4.0 rollout.

## 9. Explicit exclusions

Same as PRD section 11. Packets that would touch those surfaces are out of scope even if that would make a test greener.

## 10. Reusable packet template

Copy this block into each Lisa source packet record. Replace angle-bracket fields. Do not pre-fill Item 2 SHAs from documentation inspection.

```text
Packet ID: P-0X
Title: <bounded Lisa work>
Issue / branch / worktree: <filled by agentsetup>
Parent SHA / tree: <Item 2 accepted commit / tree from section 2>
This packet SHA / tree: <filled after commit>
Acceptance criteria: <AC-..>
Owned paths:
  - <exact files>
Forbidden paths:
  - extensions/link*/src/**
  - docs/link-integrations/ocp-01/provider-pins.json
  - workflows, runtime, credentials, VPS, schedules
Dependencies: <P-0Y>
Parallelism: <serial | parallel with P-0Z on disjoint files>
Work:
  - <steps>
Tests:
  - positive: <node scripts/run-vitest.mjs <file>>
  - negative: <...>
  - unavailability: <...>
Evidence:
  - test result:
  - git diff --check:
  - HEAD == origin/<branch>:
Review: none by implementer; no PR; no Bugbot
Repair policy: continue actionable in-scope repairs while measurable progress continues; stop for repeated unresolved findings, consecutive no-progress cycles, redesign/new authority, infrastructure exhaustion, or an explicit resource limit; Item 2 defects return to Item 2
Rollback: revert this packet commit or abandon unpushed worktree
Stop if:
  - Item 2 head no longer matches section 2
  - forbidden path required
  - live/runtime/credential/schedule/production requested
  - PR requested before IDE Development v2.4.0
Checkpoint: commit + push only
```

## 11. Documentation packet closeout

This documentation issue (#189) is complete when:

1. the two named documents exist;
2. documentation validation and `git diff --check` pass;
3. the issue branch is committed, pushed, and remote-equal;
4. no PR is opened;
5. the Codex supervisor is left to accept or correct both documents.

No Lisa source packet is started by this documentation closeout.
