# OCP-W70 — Lisa Canary and Rollback Plan (documentation only)

| Field                 | Value                                                                 |
| --------------------- | --------------------------------------------------------------------- |
| Packet                | `OCP-W70-LISA-CANARY-ROLLBACK-PLAN`                                   |
| Branch                | `ocp-w70-lisa-canary-rollback-plan`                                   |
| Required base         | `1140c0a4df9165a31b94b8ce2f15e238fc8dc210` (OCP-W30 approved PDF tip) |
| Date                  | 2026-08-01 Asia/Taipei                                                |
| Live Lisa mutation    | **none**                                                              |
| Credentials / cloud   | **untouched**                                                         |
| Deployment / merge    | **not executed** (draft PR to `development` only)                     |
| CI / Bugbot           | deferred (honest — not claimed)                                       |
| Production canary run | **not started**; this document plans a future authorized canary only  |

This packet produces **non-live operational evidence** for a future Lisa canary and fail-closed rollback. It does not enable stage, sync live profile, spend, or claim MiniMax-M3 PDF proven.

Canonical routing contract (workshop, non-live): `linkbots/lisa/docs/LISA-MODEL-ROUTING-CONTRACT-2026-08-01.md` and `linkbots/lisa/ops/model-routing.contract.json`. Prior candidate graph: `docs/evidence/ocp-w30-approved-pdf-routing/release-graph.md`. FAKE/TEMPLATE canary controls: `docs/execution/openclawdevelopmentplan01/runbooks/stage-prod-canary-controls.md`.

---

## 1. Model routing slots (future canary target)

| Slot                         | Ref                                       | Role in canary                                                                                          |
| ---------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Primary                      | `openai/gpt-5.6-luna` @ **medium**        | Default agent model; thinkingDefault medium                                                             |
| Default fallback             | `zai/glm-5.2`                             | First text fallback when primary fails                                                                  |
| Image (`imageModel`)         | `minimax/MiniMax-M3`                      | Image path; catalog text+image                                                                          |
| PDF / `documentModels.pdf`   | `minimax/MiniMax-M3`                      | Capability **`approved_unverified`**; first proof = controlled production rollout only                  |
| Next fallback                | `moonshot/kimi-k3`                        | Utility / deeper text fallback after GLM                                                                |
| Utility                      | `openrouter/google/gemini-3.5-flash-lite` | Lightweight utility route                                                                               |
| Evaluation-only              | `nvidia/nemotron-3-super-120b-a12b`       | **Paid eval only**; `enabledInDefaults: false`; never in canary defaults; no `:free`; no spend flip     |

Honesty: MiniMax-M3 PDF remains `approved_unverified` until a **first-production-proof receipt** exists. Observed media PDF textExtraction history (`MiniMax-M2.7`) does not count as M3 proof.

---

## 2. Hard stops (must remain true unless Principal flips under separate approval)

| Stop                                      | Required value / behavior                                                         |
| ----------------------------------------- | --------------------------------------------------------------------------------- |
| `liveMutationAllowed`                     | `false` until separately authorized live profile sync                             |
| `paidSpendEnablementAllowed`              | `false` — no paid Nemotron / paid alternate spend enablement                      |
| Live `~/.openclaw-lisa`                   | Do not edit from this plan or from FAKE/TEMPLATE rehearsal                        |
| Credentials / provider accounts           | Untouched; no new keys; no Keychain use                                           |
| Cloud / deployment / migration            | Out of scope for this docs packet                                                 |
| Alternate paid document routing           | **Forbidden** on PDF failure                                                      |
| Claim MiniMax-M3 PDF proven               | Forbidden without first-production-proof receipt                                  |
| Claim live canary completed from this PR  | Forbidden — plan only                                                             |
| Silent paid substitution                  | Forbidden for any failed route                                                    |
| Merge beyond draft PR to `development`    | Forbidden in this packet                                                          |

---

## 3. Future canary phases (authorized later; not executed here)

Ordered gates. Each phase requires Principal/Orchestrator clearance before the next.

```text
0. Candidate freeze (done at OCP-W30 tip 1140c0a4…)
1. Draft PR land toward development (this packet — docs only)
2. Human: deployment / promote authorization
3. Human: credentials + live profile sync authorization
4. Controlled canary window start (observation only first)
5. Controlled first-PDF proof (MiniMax-M3 approved_unverified → receipt)
6. First-production-proof receipt recorded
7. Human final acceptance
8. Optional: paid Nemotron evaluation (separate spend gate; never default)
```

### 3.1 Observation window (recommended when live canary is authorized)

| Window                         | Duration (Asia/Taipei) | Focus                                                                 |
| ------------------------------ | ---------------------- | --------------------------------------------------------------------- |
| T0 canary arm                  | clock start            | Profile sync receipt; hard stops still recorded; PDF route armed only if gate cleared |
| T0 + 45m heartbeat             | one heartbeat cycle    | Heartbeat one-liner healthy; no silent mid-run narration spill        |
| T0 + next Ship/Pull pair       | next scheduled waves   | Ship/Pull Clear/Issues shapes; `sessions_wait` path; no yield         |
| T0 + next 08:30 digest         | next morning digest    | Digest format intact; pipeline-status cycle date match                |
| T0 + 24h abort review          | 24 hours               | Abort if hard-stop breach, PDF failure without rollback, or spend     |
| First-PDF proof slot           | Principal-scheduled    | Single controlled PDF attach; success only with receipt fields below  |

These windows are **planning targets**, not evidence that a live canary ran.

### 3.2 Measurable success criteria (future live canary)

1. Primary Luna medium turns succeed on smoke prompts without unpaid/paid substitution.
2. GLM-5.2 fallback engages only on documented primary failure class; receipt notes trigger.
3. Image path uses MiniMax-M3 `imageModel` without changing PDF state.
4. First PDF attempt records a complete **first-production-proof receipt** (section 4) before any “PDF works” claim.
5. Kimi / Gemini utility routes remain available and unused unless explicitly exercised; no default promotion of Nemotron.
6. Cron / heartbeat / digest observation checks (section 6) stay green or report `WAVE: Issues` honestly.
7. Ship/Pull and Repair Dispatcher checks (section 7) pass or escalate per contracts.
8. No hard-stop breach; no paid spend enablement.

### 3.3 Abort criteria (immediate hard stop of canary)

- Any write to live profile/credentials without Principal gate
- PDF provider/model validation failure **and** failure to disable PDF routing only
- Any attempt to substitute another paid document model
- Paid Nemotron or other paid spend flipped into defaults
- Ship/Pull using `sessions_yield` on isolated cron
- Repair Dispatcher force-push / main merge / stale-head “success”
- Secret leakage into argv, logs, Telegram, or email
- Unredacted private memory / message bodies copied into repo docs

---

## 4. Receipt fields

### 4.1 Canary arm / observation receipt (non-secret)

Record one receipt object per canary attempt (workshop path when live; never commit secrets):

| Field                         | Type / example                                              | Required |
| ----------------------------- | ----------------------------------------------------------- | -------- |
| `receiptType`                 | `lisa_canary_observation_v1`                                | yes      |
| `packetId`                    | `OCP-W70-LISA-CANARY-ROLLBACK-PLAN`                         | yes      |
| `canaryId`                    | opaque operator id                                          | yes      |
| `startedAt` / `endedAt`       | ISO-8601 Asia/Taipei                                        | yes      |
| `liveMutationAuthorized`      | boolean (must match Principal gate)                         | yes      |
| `profileSyncAuthorized`       | boolean                                                     | yes      |
| `routingContractVersion`      | e.g. `2026-08-01-ocp-w30-approved-pdf-routing`              | yes      |
| `primaryModel`                | `openai/gpt-5.6-luna`                                       | yes      |
| `thinkingDefault`             | `medium`                                                    | yes      |
| `defaultFallback`             | `zai/glm-5.2`                                               | yes      |
| `imageModel`                  | `minimax/MiniMax-M3`                                        | yes      |
| `pdfCapabilityStatus`         | `approved_unverified` \| `proven`                           | yes      |
| `pdfDocumentModelsEnabled`    | boolean                                                     | yes      |
| `paidSpendEnablementAllowed`  | must be `false` unless separate spend gate                  | yes      |
| `evaluationOnlyRef`           | `nvidia/nemotron-3-super-120b-a12b`                         | yes      |
| `evaluationOnlyEnabled`       | must be `false` for default canary                          | yes      |
| `heartbeatObserved`           | `ok` \| `issues` \| `skipped`                               | yes      |
| `digestObserved`              | `ok` \| `issues` \| `skipped`                               | yes      |
| `shipPullObserved`            | map of wave → `Clear` \| `Issues` \| `skipped`              | yes      |
| `repairDispatcherObserved`    | `idle` \| `pending` \| `escalated` \| `skipped`             | yes      |
| `hardStopBreaches`            | string[] (empty on success)                                 | yes      |
| `abortReason`                 | string or null                                              | yes      |
| `operator`                    | agent/session id (no secrets)                               | yes      |

### 4.2 First-production-proof receipt (PDF) — required before success claim

| Field                              | Type / example                                                         | Required |
| ---------------------------------- | ---------------------------------------------------------------------- | -------- |
| `receiptType`                      | `lisa_pdf_first_production_proof_v1`                                   | yes      |
| `capabilityBefore`                 | `approved_unverified`                                                  | yes      |
| `documentModelRef`                 | `minimax/MiniMax-M3`                                                   | yes      |
| `controlledRolloutAuthorized`      | `true` (Principal)                                                     | yes      |
| `proofAt`                          | ISO-8601                                                               | yes      |
| `channel`                          | e.g. `telegram` \| `googlechat` (no account ids required in repo copy) | yes      |
| `attachmentClass`                  | `pdf`                                                                  | yes      |
| `providerValidation`               | `pass` \| `fail`                                                       | yes      |
| `extractionOrUnderstandOutcome`    | short non-secret code                                                  | yes      |
| `userVisibleSuccess`               | boolean                                                                | yes      |
| `rollbackTriggered`                | boolean                                                                | yes      |
| `rollbackAction`                   | `none` \| `disable_pdf_document_routing_only`                          | yes      |
| `alternatePaidDocumentRoutingUsed` | must be `false`                                                        | yes      |
| `failureEventType`                 | `pdf_document_routing_validation_failure` or null                      | yes      |
| `notes`                            | redacted prose only                                                    | no       |

Without this receipt, PDF capability stays `approved_unverified`. Do not rewrite historical receipts.

### 4.3 Rollback receipt

| Field                    | Type / example                                | Required |
| ------------------------ | --------------------------------------------- | -------- |
| `receiptType`            | `lisa_canary_rollback_v1`                     | yes      |
| `triggeredAt`            | ISO-8601                                      | yes      |
| `trigger`                | `pdf_validation_failure` \| `hard_stop` \| …  | yes      |
| `action`                 | `disable_pdf_document_routing_only`           | yes      |
| `preservedRoutes`        | `text,image,default_fallback`                 | yes      |
| `paidSubstitution`       | `false`                                       | yes      |
| `failureEventEmitted`    | boolean                                       | yes      |
| `liveLisaTouched`        | boolean (must match authorization)            | yes      |
| `gitCandidateRevert`     | SHA or `n/a`                                  | no       |

---

## 5. Rollback contract (PDF-only; no paid substitution)

On provider/model validation failure during an authorized rollout:

1. Disable **PDF document routing only** (`documentModels.pdf` / PDF cutover off).
2. Preserve text primary/fallbacks, `imageModel`, and default-fallback service.
3. Emit non-secret failure event type `pdf_document_routing_validation_failure`.
4. Do **not** route documents to another paid model (including Nemotron or any paid alternate).
5. Record rollback receipt (section 4.3).
6. Escalate to Principal + matching Orchestrator.

**Candidate git rollback** (docs/code candidate only): revert commits on this branch / OCP-W30 tip as needed. Live Lisa remains untouched unless a separately authorized live rollback is running.

**Out of rollback scope for PDF failure:** do not restart LaunchAgent solely for PDF disable; do not wipe SQLite; do not rotate credentials; do not enable paid eval models.

---

## 6. Cron / heartbeat / digest observation checklist

Non-live rehearsal uses workshop docs only. When a live canary is later authorized, observe (read-only unless live mutation gate is on):

| Surface              | Workshop source                                                         | Pass signal                                                                 | Fail / abort signal                                      |
| -------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------- | -------------------------------------------------------- |
| Heartbeat            | `Personality files/HEARTBEAT.md` + cron `lisa-heartbeat-45`             | One-liner; no chain-of-thought dump; pipeline-status cycle date respected   | Opaque exec deny as fatal announce; secret echo          |
| Morning digest       | `agents/morning-digest.md` + `lisa-morning-digest`                      | Exact digest sections; Ship/Pull lines only when cycle dates match          | Fenced template copy into Telegram; undated Clear claims |
| Ship/Pull clock      | `agents/ship-pull-clock.md`                                             | `sessions_wait` used; yield absent; Clear/Issues after CAS + email attempt  | `sessions_yield`; invent Clear without wait              |
| Pipeline status      | `memory/pipeline-status.md` procedure                                   | Monotonic cycle date; wave replace rules                                    | Older cycle overwrites newer                             |
| Offline recovery     | `agents/offline-recovery.md`                                            | Planning only; no false “reconciled forever”                                | Durable latch invented without store                     |

Observation receipts must mark each row `ok` / `issues` / `skipped`. Skipping is honest when the window did not include that cron.

---

## 7. Ship/Pull and Repair Dispatcher checks

### 7.1 Ship/Pull (future canary)

| Check | Expected |
| ----- | -------- |
| Allowlist intersection | `lisa-cron.tools.allow` **and** each Ship/Pull job `toolsAllow` include `sessions_spawn`, `sessions_wait`, `read`, `write`, `edit`, `exec` |
| Forbidden tool | `sessions_yield` **not** on Ship/Pull isolated cron |
| Success gate | child outcome validated ∧ status CAS ∧ email attempted ∧ final one-line payload |
| Work-branch allowlist | `issue/*`, `cursor/*`, rare `dev/*` only; never Ship/Pull on `development`/`staging`/`main` as work branches |
| Live default | `LISA_OPS_LIVE_ACTION_DEFAULTS` remain fail-closed until Principal flips live targeting + credentials language |
| Canary observation | Record Ship 16 / Pull 18 / Ship 05 / Pull 07 results for the active cycle date only |

References: `linkbots/lisa/docs/LISA-OPS-CORE-PREREQUISITE.md`, `SHIP-PULL-CLOCK-INSTALL.md`, `LISA-OPS-CRON-MIGRATION-PLAN.md`.

### 7.2 Repair Dispatcher (future canary)

| Check | Expected |
| ----- | -------- |
| Binding | Every attempt keyed by `repository` + `branch` + `prNumber` + exact `headSha` |
| Pending hold | No second dispatch while attempt pending for same binding |
| Attempt cap | Max **three** genuine dispatches (`dispatchedAt != null`), then escalate to Carlos |
| Immediate escalate classes | credentials/secrets, security, destructive, ambiguous conflict, product decision, approval required, billing, missing authority |
| Hard stops | Never approve/merge `main`; never force-push; stale-head proof cannot resolve current failure |
| Live default | `authorizeRepairLiveDispatch` remains fail-closed without live targeting + credentials language |
| Canary observation | `idle` preferred; `pending`/`escalated` recorded without inventing success |

Reference: `linkbots/lisa/Personality files/agents/repair-dispatcher.md`.

---

## 8. Human gates (exact)

| Gate | Owner | Blocks |
| ---- | ----- | ------ |
| Draft PR review → `development` | Principal / Orchestrator | Broader integration |
| Deployment / promote | Principal | Live binary/path change |
| Credentials / live profile sync | Principal | Any `~/.openclaw-lisa` write |
| Controlled canary start | Principal | Observation window arm |
| Controlled first-PDF proof | Principal | PDF success claims |
| First-production-proof receipt accept | Principal | Capability upgrade beyond `approved_unverified` |
| Final acceptance | Principal | Declaring production-proven routing |
| Paid Nemotron evaluation spend | Principal | Any eval-only enablement / spend |
| CI + Bugbot | Maintainer when requested | Green-wash avoidance (deferred here) |

---

## 9. Ownership

| Surface | Owner for this plan | Notes |
| ------- | ------------------- | ----- |
| This evidence pack | OCP-W70 Lisa docs session | Documentation only |
| Model routing contract | Lisa workshop (`linkbots/lisa/ops`) | Non-live until sync gate |
| Canary FAKE/TEMPLATE runbook | OpenClaw Lisa operator | Non-live by default |
| Ship/Pull / digest / heartbeat procedures | Lisa ops docs | Live cron mutation separate |
| Repair Dispatcher | Lisa GitOps + IDE Development contract | Lisa consumes IDE #23; does not override |
| Live Lisa runtime | Principal-authorized operator only | Untouched by this packet |

---

## 10. Rollback of this documentation packet

Revert-only: remove or revert the OCP-W70 docs commit(s) on `ocp-w70-lisa-canary-rollback-plan`. No live side effects.

---

## 11. Honesty bounds

- No live canary was started by this packet.
- MiniMax-M3 PDF is still `approved_unverified`.
- Paid Nemotron remains evaluation-only and disabled in defaults.
- CI/Bugbot deferred — not claimed green.
- Live Lisa, credentials, cloud, deployment, provider accounts: untouched.
