---
summary: "PRD for Lisa-specific consumption of the accepted OpenClaw Prime five-provider connection"
read_when:
  - Authoring or reviewing Orchestrator Item 3 Lisa provider connection work
  - Planning Lisa identity, privacy, Skills, Autowork, or Libraries policy on top of Item 2
title: "Item 3 Connect OpenClaw Prime Lisa PRD"
---

# Item 3 Connect OpenClaw Prime Lisa PRD

**Status:** Draft for Codex supervisor acceptance. This document authorizes no source, runtime, credential, or production change.

**Scope owner:** Lisa-specific OpenClaw Prime consumer policy.

**Audience:** Principal, Codex supervisor, Item 3 implementers, and the matching Orchestrator.

**Planning date:** 2026-08-17 Asia/Taipei.

**Documentation branch:** `issue/189-author-lisa-five-provider-connection-prd-and-imp`.

**Documentation start SHA / tree:** `f1ca4e8ad32ef87babad397a2ee14c44d5512c1b` / `8843e51cd6d3e2df695d33c68c27724e7ff56502` (`origin/development` at authoring).

## 1. Purpose

Lisa must consume the **final independently accepted Item 2** OpenClaw Prime connection to the five providers, then add only Lisa-specific policy:

- identity and permissions;
- allowed provider capabilities;
- privacy, memory, and knowledge boundaries;
- Skills discovery, validation, and job execution;
- Autowork requests, status, handoffs, and receipts;
- LiNKlibraries discovery and retrieval;
- safe denial, provider unavailability, retry/replay, and fail-closed behavior;
- replacement of obsolete provider references.

Item 2 owns the reusable OpenClaw adapters. Item 3 owns Lisa as one canonical actor on top of those adapters. Item 3 must not re-implement provider contracts, mutate provider repositories, or treat a still-reviewing Item 2 candidate as an accepted head.

Companion execution document: [Item 3 implementation plan](/ITEM-3-CONNECT-OPENCLAW-PRIME-LISA-IMPLEMENTATION-PLAN).

## 2. Verified current facts

These statements were read from current source, pins, Lisa files, and Item 2 evidence during this documentation session. They are not live-service claims.

### 2.1 Frozen provider pins on current development

`docs/link-integrations/ocp-01/provider-pins.json` on `origin/development` records profile `ocp-01` with these immutable provider identities:

| Provider  | Repository    | Commit                                     | Tree                                       | Contract / schema                                                                     | MCP                      |
| --------- | ------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------------------- | ------------------------ |
| Platform  | LiNKplatform  | `5452f90a35ed690698a9161117a9d92c69985582` | `90b51726f7a77e4620151a463a10cfc3d2007c88` | `platform.auth-claims/1.1.0`, `platform.provider-trust/1.0.0`, schema `2026.07.28-w4` | none                     |
| Brain     | LiNKbrain     | `8ce1d737f8870a479f07b1741c58d6681cd07aa1` | `0cae42d612342f5e52c7e2e0e76cb6fc2f6d81f3` | `brain.v2/2.0.0`, schema `2.0.0`                                                      | `2026-07-28` sessionless |
| Skills    | LiNKskills    | `6269cb173a7c9e0170b29f35c539343c29eab795` | `6c36e6c98f90e55d957fba781327b1b0ef90860a` | `skills.api.v0.2`, `skills-release/0.2`, schema `0.2`                                 | `2026-07-28`             |
| Libraries | LiNKlibraries | `0efa68b19686e976ecee93c6a962e81d2a0265f5` | `c42d20b3119ca4bfdd24d4c6b06d6bc7a7f50d4a` | `libraries.v2/revision-2`, schema `2.2`                                               | none                     |
| Autowork  | LiNKautowork  | `4eb29203766b1ccf200a2dc10b39cc58d175c90c` | `5f306d674780a5a26048017f916da6048d71e7a5` | `2026-08-13.v1`, schema `provider-contract-v1`                                        | none                     |

The shared verifier is `docs/link-integrations/ocp-01/verify-provider-pins.mjs`. It already names the five adapter paths, including files that do not exist on current development.

### 2.2 Provider versus OpenClaw versus Lisa ownership

Issue 183 `docs/link-integrations/ocp-01/PROVIDER-CONSUMER-MAP.md` and `docs/link-integrations/ocp-01/platform-foundation.md` record this ownership split. It remains the planning baseline unless Item 2 acceptance changes it:

| Owner                     | Authority                                                                                                     | Must not do                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Provider repositories     | Contract, release, catalogue, dispatch, and domain data                                                       | Be edited by Item 3                                             |
| Platform                  | Actor identity, runtime binding, credential references, issuer/audience/scope, capability facts, revocation   | Be issued, minted, or bypassed by OpenClaw or Lisa              |
| OpenClaw Item 2 consumers | Validate supplied evidence against frozen pins; return typed safe failures                                    | Issue credentials, mutate provider state, or silently downgrade |
| Lisa Item 3               | Bind the one Lisa actor to allowed Item 2 operations; enforce Lisa privacy and obsolete-reference replacement | Own provider truth, activate runtime, or widen Item 2 adapters  |

### 2.3 Current development consumer surface

On documentation start SHA `f1ca4e8ad32ef87babad397a2ee14c44d5512c1b`:

- Platform consumer exists: `extensions/linkplatform/api.ts` and `extensions/linkplatform/src/claims.ts`.
- Historical Brain plugin exists (`extensions/linkbrain/`) with v1 runtime, capture, namespaces, and MCP filter. Public `api.ts` does **not** export Brain v2.
- Historical Skills plugin exists (`extensions/linkskills/`) with v1 runtime, envelopes, and MCP filter. Public `api.ts` does **not** export Skills v2 or exact-release.
- `extensions/linklibraries/` and `extensions/linkautowork/` are **absent**.
- `docs/link-integrations/ocp-01/platform-foundation.md` is present. Brain consumer page, Libraries, and Autowork consumer pages are not on this SHA.

Current Brain write-tool names in `extensions/linkbrain/src/tools.ts` are `brain_capture_batch`, `brain_checkpoint_write`, and `brain_task_update`.

Current Skills MCP allowlist in `extensions/linkskills/mcp-tool-filter.ts` still includes legacy families `skills_run_*` and `skills_tool_*`, plus v1 discovery names `skills_list`, `skills_search`, `skills_describe`, `skills_fragment_get`, and `skills_release_get`. Skills conversation-hook policy already forbids conversation access.

### 2.4 Item 2 candidate evidence, not accepted head

Item 2 remaining-provider work lives on `issue/188-connect-openclaw-prime-remaining-providers`. At documentation inspection it was still under independent exact-head review. The extra-cycle session remained active. No independently accepted exact head existed.

Item 2 candidate source, inspected read-only and not modified, adds:

- Brain v2: `extensions/linkbrain/src/v2.ts`, exported from `extensions/linkbrain/api.ts`.
- Skills v2 and exact-release: `extensions/linkskills/src/v2.ts`, `extensions/linkskills/src/exact-release.ts`.
- Libraries: `extensions/linklibraries/src/revision2.ts`, `extensions/linklibraries/src/exact-release.ts`.
- Autowork: `extensions/linkautowork/src/contract.ts`.
- Brain consumer note: `docs/link-integrations/ocp-01/brain-consumer.md`.

Item 2 Brain v2 operations include discovery, capability status, projections, tasks, inbox, message, checkpoint, handoff, conflict, events, finding submit, and knowledge browse/search/load. Authority is advisory. Execution authority is none. Private capture requires an explicit `private` namespace, opaque references, and prohibited-payload rejection.

Item 2 Skills v2 closed resource operations are discovery and exact-release reads. Closed tool operations are `skills_release_verify`, use-report submit/status, feedback submit/status, and `skills_librarian_status_get`. Legacy `skills_run_*` and `skills_tool_*` are rejected.

Item 2 Autowork closed operations are `status_collection`, `precheck`, `evidence_collection`, `notification_delivery`, `external_assistance`, `artifact_transform`, `media_package`, and `outreach_adapter`. Requests require audience `autowork`, exact request fingerprint, Brain handoff correlation when present, and immutable receipt/callback binding.

Item 2 Libraries consume revision-2 catalogue records and exact-release evidence. OpenClaw validates; Libraries remain authoritative for catalogue admission.

**Critical rule:** the still-reviewing Item 2 commit/tree observed during this documentation session is inspection evidence only. It must not be copied into Item 3 source packets as the execution base. Execution-time fields are defined in section 12 and in the implementation plan.

### 2.5 Current Lisa source

Lisa's version-controlled definition bundle is `linkbots/lisa/`. `linkbots/lisa/README.md` states that Git holds stable identity and operating instructions; secrets stay out of Git; mutable memory stays out of Git.

Verified Lisa identity and permission facts from `linkbots/lisa/Personality files/`:

- Canonical name Lisa; profile `lisa`; one human-facing Strategic Operations actor.
- Skills are armed by Carlos. Lisa must not author skills via `skill-creator`, ClawHub, or `skill_workshop`.
- Coding is delegated; Lisa is not a hands-on builder.
- Google work uses the Lisa-safe wrapper. `gws auth*` is denied.
- Native local memory, sessions, compaction, cron, and channels remain Lisa/OpenClaw-owned.
- Personality version recorded in `IDENTITY.md` is v1.3 (2026-07-14).

Verified Lisa job-catalogue facts from `linkbots/lisa/ops/jobs/`:

- Ten job families exist as **source-only**, `enabled: false`, `delivery.mode=none`.
- Privacy classes are `work`, `personal_compliance`, and `private_health`.
- Provider dependencies currently use placeholder IDs such as `linkbrain-librarian` with `releaseRef: source-contract-wp04`. They are not pinned to the OCP-01 commits/trees.
- Catalogue hard stops forbid mutating Google, Telegram, email, GSM, LiNKbrain, or any provider from this source package.
- Time-management routes Carlos-owned tasks to Google Tasks and other tasks to a string destination `linkbrain` / ledger `LiNKbrain`, without the Item 2 v2 client.

Historical Lisa Brain/Skills plan `docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md` (2026-07-27) remains on development. It is a two-provider plan. It does not define Libraries or Autowork. It still describes v1 MCP tool families and managed MCP activation. It is superseded as Lisa five-provider authority by this PRD plus the accepted Item 2 head.

Live briefing `docs/agent-briefing.md` records that VPS Lisa already reaches LiNKskills and LiNKbrain through governed native bridges. That is a **live-runtime** fact. Item 3 is source-only Lisa policy on the Item 2 consumers. Item 3 must not treat live VPS wiring as completed Item 3 source, and must not change that runtime.

### 2.6 Coordination and process facts

- Item 3 documentation may complete now.
- No Lisa source packet may start until Item 2 has a clean independently accepted exact head.
- Item 3 source may then branch or layer from that exact Item 2 head before Item 2 PR or merge, and may proceed only through commit, push, and checkpoint.
- No Item 3 PR may open until IDE Development v2.4.0 is rolled out.
- The Codex supervisor reads and corrects both Item 3 documents and remains responsible for acceptance.

## 3. Assumptions

These are planning assumptions, not verified current facts. An Item 3 source packet must re-verify them against the accepted Item 2 head before coding.

1. The independently accepted Item 2 head will expose the five consumers through the public barrels `extensions/linkplatform/api.ts`, `extensions/linkbrain/api.ts`, `extensions/linkskills/api.ts`, `extensions/linklibraries/api.ts`, and `extensions/linkautowork/api.ts`.
2. Item 2 will keep provider pins identical to the current `provider-pins.json` identities unless a recorded pin amendment exists on the accepted head.
3. Lisa remains one Platform actor with one runtime binding. `main` and `lisa-cron` stay subordinate roles of that actor. `cursor` and `local-coder` do not inherit Lisa provider credentials.
4. Native OpenClaw memory, compaction, sessions, channels, cron, and native skills remain in place. Item 3 adds provider consumption; it does not replace those subsystems.
5. Platform will later issue Lisa-scoped credential references, audiences, and capabilities. Item 3 source uses opaque references and fixtures only.
6. Brain knowledge is advisory. Skills, Libraries, and Autowork results are not execution authority for Git, GitHub, VPS, or production actions.
7. Autowork handoffs that need Brain correlation will use Item 2 `brainHandoffRef` plus Lisa policy, not a new OpenClaw ledger.
8. Libraries contribution intake remains out of Lisa Item 3 unless a later issue explicitly adds it.
9. Historical v1 Brain/Skills MCP names in current Lisa-adjacent allowlists become obsolete on the Item 2 head and must be replaced in Lisa-owned references, not by forking Item 2 adapters.
10. The July 2026 Lisa Brain/Skills implementation plan remains historical context. Where it conflicts with this PRD or accepted Item 2, this PRD plus Item 2 win.

## 4. Goals and non-goals

### 4.1 Goals

1. Define Lisa as the first consumer of the accepted five-provider OpenClaw connection.
2. Bind Lisa identity, permissions, and capabilities to Platform facts validated by Item 2.
3. Constrain each provider to the Lisa-allowed operation set in section 7.
4. Keep private memory, private health, credentials, prompts, transcripts, and reasoning out of Skills, Libraries, Autowork, and shared Brain knowledge.
5. Specify Skills discovery/validation/job-execution, Autowork request/status/handoff/receipt, and Libraries discovery/retrieval behavior for Lisa.
6. Specify safe denial, unavailability, retry/replay, and fail-closed behavior.
7. Inventory and replace obsolete Lisa provider references.

### 4.2 Non-goals

See section 11. Documentation completion is not source authorization.

## 5. Actor, identity, and permissions

### 5.1 Canonical actor

Lisa is exactly one canonical Platform actor. OpenClaw profile `lisa`, installation, agents, sessions, cron runs, and tools are subordinate records.

Required Lisa identity fields, validated through Item 2 Platform claims and never minted by Lisa:

- actor id;
- organization / tenancy boundary;
- runtime binding id;
- credential reference (opaque);
- issuer;
- audience per provider;
- service scopes;
- capabilities;
- issued-at, expiry, and active revocation status.

### 5.2 Permission rules

Lisa source policy must enforce:

1. No credential issuance, copying, or fallback secret.
2. No widening of Platform capabilities locally.
3. No inheritance of Lisa provider credentials by `cursor`, `local-coder`, or other helpers.
4. No skill authoring, ClawHub install, or `skill_workshop`.
5. No provider repository mutation.
6. No live Gateway, VPS, schedule, or production activation.
7. Denied Lisa media-generation tools remain denied. Autowork `media_package` is a provider operation, not a grant for Lisa to generate media locally.
8. Model output is never authority for identity, scope, release, authorization, or execution state.

### 5.3 Subordinate roles

| Role                     | Provider permission                                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `main`                   | May request Lisa-allowed provider operations after policy checks.                                                                           |
| `lisa-cron`              | Same actor; may run only catalogue-declared Lisa jobs once a later activation issue authorizes schedules. Item 3 does not enable schedules. |
| `cursor` / `local-coder` | No Lisa Brain, Skills, Libraries, or Autowork credential.                                                                                   |

## 6. Privacy, memory, and knowledge

### 6.1 Memory ownership

| Store                                                            | Owner                    | Lisa Item 3 rule                                                      |
| ---------------------------------------------------------------- | ------------------------ | --------------------------------------------------------------------- |
| Local OpenClaw memory, daily logs, indexes, sessions, compaction | Lisa / OpenClaw          | Remains canonical for Lisa continuity. Not replaced by Brain.         |
| Private health ledger and personal compliance state              | Lisa job privacy classes | Never sent to Skills, Libraries, Autowork, or shared Brain knowledge. |
| Shared Brain knowledge and governed coordination                 | LiNKbrain                | Advisory read/write through Item 2 v2 only, after redaction.          |
| Skills bundles and run evidence                                  | LiNKskills               | Structured skill metadata and exact releases only.                    |
| Library catalogue and artifacts                                  | LiNKlibraries            | Discovery/retrieval of admitted selectable records only.              |
| Autowork receipts                                                | LiNKautowork             | Opaque input/result refs; no private payload in OpenClaw.             |

### 6.2 Prohibited payloads

Lisa must fail closed, without retry, if a provider request would include:

- prompts, transcripts, reasoning traces, or raw tool output;
- secrets, tokens, OAuth material, or credential values;
- private health, selfie, battery, or other personal-compliance bodies;
- private Brain episode bodies;
- binaries or unbounded attachments;
- live message contents from Telegram, email, or chat.

Brain private capture, if used at all in later source, requires Item 2 `private` namespace, bounded opaque references, idempotency keys, and safe metadata only. Item 3 source-only work must not enable conversation-bearing Brain hooks.

### 6.3 Knowledge use

Brain knowledge browse/search/load results are references and redacted records. They are not executable instructions, schedule triggers, or merge/deploy authority.

## 7. Allowed Lisa provider capabilities

Lisa may request only the operations below, and only after Platform identity, audience, capability, pin, and revocation checks succeed on the accepted Item 2 consumers. Anything else is a typed denial.

### 7.1 Platform

Lisa consumes Platform facts. Lisa never issues them. Required checks: actor, binding, org, audience, capability, expiry, and active revocation.

### 7.2 Brain

Allowed Lisa operations from the Item 2 v2 map:

- `v2.discovery`
- `v2.capability.status`
- `v2.knowledge.browse`
- `v2.knowledge.search`
- `v2.knowledge.load`
- `v2.inbox.read`
- `v2.handoff.create`
- `v2.handoff.accept`
- `v2.conflict.report`
- `v2.finding.submit`
- `v2.checkpoint.write` only with opaque refs and no prohibited payload

Not allowed for Item 3 Lisa source:

- treating Brain as execution authority;
- v1 MCP write names `brain_capture_batch`, `brain_checkpoint_write`, `brain_task_update` as current Lisa contracts;
- enabling conversation capture or live Librarian scheduling.

### 7.3 Skills

Allowed Lisa operations from the Item 2 v2 closed map:

- discovery/read: `skills_capabilities_get`, `skills_catalog_list`, `skills_catalog_search`, `skills_release_list`, `skills_release_describe`, `skills_qualification_get`, `skills_release_entrypoint_get`, `skills_release_sections_list`, `skills_release_section_get`, `skills_release_resources_list`, `skills_release_resource_get`, `skills_release_content_get`, `skills_release_package_get`
- validation: `skills_release_verify`
- job-execution evidence: `skills_use_report_submit`, `skills_use_report_status_get`, `skills_feedback_submit`, `skills_feedback_status_get`, `skills_librarian_status_get`

Not allowed:

- legacy `skills_run_*` and `skills_tool_*`;
- v1 names `skills_list`, `skills_search`, `skills_describe`, `skills_fragment_get`, `skills_release_get` as current Lisa contracts;
- ClawHub, skill authoring, or prompt-only certification;
- sending conversation or private memory to Skills.

Lisa job execution through Skills means: resolve an exact release, verify it, and record bounded use/feedback. It does not mean OpenClaw starts a provider-side mutable run through retired v1 run tools.

### 7.4 Autowork

Allowed Lisa operations from the Item 2 closed set, each as request/status/receipt only:

- `status_collection`
- `precheck`
- `evidence_collection`
- `notification_delivery`
- `artifact_transform`

`external_assistance`, `media_package`, and `outreach_adapter` are **denied for Lisa Item 3** unless a later Principal decision adds them. They are provider operations, not Lisa grants.

Lisa Autowork flow:

1. Build a request with opaque input/artifact refs, exact pin, audience `autowork`, Lisa actor/binding, and idempotency key.
2. Validate through Item 2 `validateRequest` / `validateRequestAt` plus a fresh correlated Platform revocation decision.
3. Accept only an immutable receipt bound to the request fingerprint.
4. Track status through callbacks that Item 2 accepts; reject terminal regression.
5. Create or accept Brain handoffs only through Item 2 Brain operations plus `brainHandoffRef` when the Autowork request carries one.

Lisa must not locally invent Autowork state, replay a mutated body under the same idempotency key, or treat `uncertainOutcome` as success.

### 7.5 Libraries

Allowed Lisa operations:

- discover revision-2 catalogue records that are admitted and selectable;
- retrieve exact-release evidence for one selected record;
- accept only pass consumption receipts that match pin, catalogue membership, and dependency closure.

Not allowed in Item 3:

- contribution intake;
- selecting draft, withdrawn, quarantined, rejected, superseded, or non-selectable records;
- mutating the Libraries repository or cache as if OpenClaw owned it.

## 8. Failure, denial, retry, replay, and fail-closed behavior

### 8.1 Typed outcomes

Every Lisa provider call returns one closed outcome:

- `accepted` with bounded Item 2 evidence;
- `denied` for identity, permission, capability, privacy, or obsolete-reference violations;
- `unavailable` for provider status `offline`, `degraded`, `stale`, `disabled`, `unauthorized`, `forbidden`, `contract_incompatible`, or transport failure;
- `invalid` for malformed, inherited, or accessor-backed input.

Silent success, silent downgrade, v1 fallback, and "use local memory instead and claim the provider ran" are forbidden.

### 8.2 Safe denial

Denial is operator-visible, redacted, and non-retryable for the same invalid body. Missing capability, wrong audience, revoked binding, prohibited payload, or legacy operation name is `denied`, not `unavailable`.

### 8.3 Unavailability

If Item 2 reports the provider unavailable or Lisa cannot prove the accepted pin/head, Lisa records `HOLD` / `unavailable`. Job catalogue entries that depend on that provider stay skipped. No substitute provider, cached unverified catalogue, or guessed release is used.

### 8.4 Retry and replay

Retry is allowed only for `unavailable` with:

- the exact previously accepted request fingerprint;
- unchanged opaque refs and body;
- a fresh revocation observation that is not older than the Item 2 max age and not before credential issuance;
- attempt counting owned by the provider receipt, not a Lisa-invented success.

Replay of a different body under the same idempotency key is `invalid`. Callbacks that regress from a terminal Autowork state are `invalid`. Brain snapshot cursors must not be reused across incompatible snapshots.

### 8.5 Fail-closed defaults

- Missing Item 2 accepted head: no Lisa source packet starts.
- Missing adapter export on that head: packet stops; do not re-implement the adapter in `linkbots/lisa`.
- Missing pin, digest, or schema: deny.
- Accessor-backed or inherited fields: deny, matching Item 2 own-data rules.
- Private class data present: deny without sending.

## 9. Obsolete provider reference replacement

Item 3 must replace Lisa-owned obsolete references so Lisa points at accepted Item 2 consumers and current pins. Provider repositories stay unchanged.

Inventory of obsolete or superseded Lisa-adjacent references found during inspection:

| Current reference                                                                                               | Why it is obsolete                                 | Replacement                                             |
| --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- | ------------------------------------------------------- |
| `docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md` as five-provider Lisa authority | Two-provider, v1 MCP, July 2026                    | This PRD plus accepted Item 2                           |
| Issue 183 five-provider candidate as live implementation                                                        | Preserved ledger only; retired unresolved findings | Pins remain; source is accepted Item 2                  |
| Placeholder job provider IDs `linkbrain-librarian`, `source-contract-wp04`                                      | Not OCP-01 commits/trees                           | Pin-backed provider ids and contract refs               |
| Time-management destination string `linkbrain` without v2 client                                                | No Item 2 validation                               | Item 2 Brain v2 knowledge/handoff APIs or explicit HOLD |
| Skills MCP v1 names `skills_list`, `skills_run_*`, `skills_tool_*`                                              | Item 2 rejects legacy execution                    | Skills v2 closed map                                    |
| Brain v1 write names `brain_capture_batch` and siblings as Lisa contract                                        | Replaced by Brain v2 operations                    | Brain v2 allowlist in section 7.2                       |
| Compatibility profile v1 operation titles on Issue 183                                                          | Historical map; not on current development         | Item 2 operation ids                                    |
| Live VPS native Brain/Skills bridges as Item 3 completion                                                       | Runtime, out of scope                              | Source-only Lisa policy tests against Item 2 fakes      |

Lisa personality files that list provider **git checkouts** for Ship/Pull remain operational checkout lists. They are not provider-consumer contracts and must not be rewritten into live MCP endpoints by Item 3.

## 10. Functional, nonfunctional, security, and privacy requirements

### 10.1 Functional

- **F1.** Lisa identity is supplied as Platform facts and validated by Item 2 before any domain call.
- **F2.** Lisa capability allowlists in section 7 are exhaustive for Item 3.
- **F3.** Skills discovery, exact-release validation, and use/feedback status work through Item 2 Skills v2.
- **F4.** Autowork request, status, handoff correlation, and receipt validation work through Item 2 Autowork plus Brain handoff operations.
- **F5.** Libraries discovery and exact retrieval work through Item 2 Libraries revision-2 / exact-release.
- **F6.** Obsolete Lisa-owned provider references in section 9 are replaced or explicitly marked historical.
- **F7.** Every path has positive, negative, and unavailability tests as specified in the implementation plan.

### 10.2 Nonfunctional

- **N1.** Lisa policy modules import public Item 2 barrels only. No deep plugin internals from core, and no copy of provider contracts into Lisa.
- **N2.** No new SQLite schema version. No new JSON/JSONL sidecar for runtime provider state.
- **N3.** Deterministic tests with fakes; no live provider, GSM, VPS, or network dependency.
- **N4.** Redacted operator errors; no secret or private-body leakage in tests, docs, or logs.
- **N5.** Source packets stay bounded and reviewable. No Full suite as a required Item 3 proof.

### 10.3 Security and privacy

- **S1.** Fail closed on revocation, expiry, audience mismatch, and missing capability.
- **S2.** Separate audiences/scopes per provider. No cross-credential use.
- **S3.** Privacy classes `private_health` and `personal_compliance` never leave Lisa-owned fixtures.
- **S4.** Skills never receive conversation hooks or conversation content.
- **S5.** Autowork and Libraries see only opaque refs and admitted catalogue metadata.
- **S6.** No production, staging, or live profile mutation.

### 10.4 Existing Lisa operating-model non-regression ledger

Item 3 adds five-provider consumption; it does not redesign Lisa. Every source
packet must preserve the current version-controlled Lisa operating contracts
unless Carlos separately authorizes a named change. The implementation must
test that provider policy cannot bypass or silently weaken these controls:

1. **Model routing:** preserve the authoritative aliases, primary and fallback
   chain, reasoning levels, image/PDF routes and PDF-only rollback in
   `Personality files/TOOLS.md` and `ops/model-routing*`. Provider availability
   must not trigger an unapproved model substitution or turn Nemotron into a
   default/user-visible route.
2. **Coding delegation:** Lisa remains an orchestrator, not a hands-on coding
   agent. Coding must use the configured Cursor ACP route and its advertised
   session contract. Direct `apply_patch`/`edit` remains the documented
   exceptional path only when ACP is genuinely unavailable and Carlos gives
   explicit case-specific authorization. Provider credentials never flow to
   Cursor, `local-coder`, or another helper.
3. **Sandbox separation:** `main` retains `sandbox.mode: non-main` with no
   gateway host override. Trusted scheduled Google/host jobs remain bound to
   the separate no-channel `lisa-cron` agent with sandbox off and heartbeat
   disabled. `main` must not spawn `lisa-cron`; provider policy must not create
   an alternate route around that separation.
4. **Google Workspace:** primary Calendar/Drive/Gmail identity remains
   `lisa@linktrend.media`; allowed work uses `tools/bin/lisa-safe`, never
   improvised bare `gws`, opaque shell, `gws auth*`, or `gws keep*`. Email is
   limited to `@linktrend.media` unless Carlos explicitly approves an
   exception. Carlos Tasks remain the separate `calusa@linktrend.media`
   identity through `tools/bin/lisa-carlos-tasks`; identities and credential
   stores must never be mixed. Google Keep remains unavailable via CLI.
5. **Human authority and sandboxed actions:** existing Carlos-held Spec/PRD,
   Program, Module, launch/release, public-posting, deletion, finance, legal,
   external-sharing/email, and protected-promotion gates remain fail closed.
   Provider facts, model output, Autowork receipts, or Brain advice cannot
   approve an action. Unapproved actions remain planned/held, not executed.
6. **Planning and prioritization:** preserve Lisa's existing progressive
   disclosure, project ranking, approval-first gates, source-of-truth checks,
   and explicit HOLD behavior. Provider results may inform a plan but cannot
   silently reorder Carlos's priorities or replace a missing decision.
7. **Memory and privacy:** preserve native memory, daily logs, indexes,
   sessions, compaction, privacy classes, battery persistence, and the rule
   that mutable memory and secrets stay outside Git. Brain remains advisory;
   private health, personal compliance, prompts, transcripts, reasoning,
   credentials, and live message bodies do not cross provider boundaries.
8. **Jobs, heartbeat, and channels:** preserve the disabled native heartbeat,
   the existing Asia/Taipei cron-owned heartbeat/digest schedules, job
   catalogue disabled/source-only default, templates, Telegram/Web UI session
   rules, internal-only email limits, and separate Telegram-versus-email
   content. Item 3 does not enable, reschedule, or activate any job.
9. **Personality and tools:** preserve the current Personality files, denied
   media/skill-authoring tools, safe wrappers, skills doctrine, Ship/Pull and
   approval contracts, except for the narrow obsolete provider references
   explicitly owned by P-08. Historical documents remain historical.
10. **Runtime boundary:** source, stage, VPS, credentials, schedules, E2E, and
    production are separate proof classes. Item 3 source completion must not
    claim live activation or mutate `~/.openclaw-lisa`.

## 11. Explicit exclusions

Item 3, including later source packets authorized by an accepted plan, excludes:

- Lisa runtime activation;
- VPS and deployment;
- services;
- schedules and cron enablement;
- credentials, GSM, OAuth, Keychain, and secret values;
- production and staging;
- provider repository changes;
- broad OpenClaw redesign;
- Item 2 source modification;
- Full suite as a merge gate;
- opening a PR before IDE Development v2.4.0 rollout;
- merge, promotion, and branch-protection changes;
- live Librarian timer enablement;
- Eric/David profiles;
- contribution intake to Libraries;
- Autowork `external_assistance`, `media_package`, and `outreach_adapter`;
- conversation-bearing Brain capture.

## 12. No-production boundary and Item 2 execution-time fields

Item 3 documentation is complete when the two named docs exist, pass documentation validation, and are checkpointed. That does not authorize Lisa source.

Lisa source packets may start only when all of the following are recorded at execution time, not copied from this PRD's inspection notes:

| Execution-time field        | How it is filled                                                  | Forbidden stand-in                                                       |
| --------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Item 2 issue                | The issue that carries the accepted remaining-provider connection | Issue 183 retired candidate; this docs issue 189                         |
| Item 2 branch               | Branch of the accepted head                                       | Any still-reviewing extra-cycle SHA                                      |
| Item 2 accepted commit      | Exact independently accepted head SHA                             | Inspection-time candidate, local dirty trees, `origin/development` alone |
| Item 2 accepted tree        | `git rev-parse ACCEPTED^{tree}`                                   | Tree of a later unreviewed commit                                        |
| Independent review identity | Reviewer/session that declared the exact head clean               | Implementer self-review                                                  |
| Pin profile                 | `ocp-01` pins on that accepted tree                               | Older candidate pins inside adapters                                     |

Item 3 source then branches or layers from that exact Item 2 head, even if Item 2 has no PR yet, and proceeds only through commit, push, and checkpoint. No Item 3 PR opens until IDE Development v2.4.0 is rolled out.

## 13. Acceptance criteria

A future Item 3 source delivery is complete only when every criterion below is true on a clean worktree layered from the execution-time Item 2 head. Documentation acceptance is Codex supervisor acceptance of this PRD and the companion plan, not these source criteria.

| ID    | Criterion                                                                                                                                                                                                                                                               |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AC-01 | Lisa source packets start only from the independently accepted Item 2 exact commit and tree recorded in execution-time fields.                                                                                                                                          |
| AC-02 | Lisa does not modify Item 2 adapter files, provider repositories, workflows, runtime config, credentials, or deployment assets.                                                                                                                                         |
| AC-03 | Lisa identity and permissions are expressed as Platform facts validated by Item 2 claims/trust helpers before any Brain, Skills, Libraries, or Autowork call.                                                                                                           |
| AC-04 | Helper agents cannot inherit Lisa provider credentials or capabilities.                                                                                                                                                                                                 |
| AC-05 | Lisa-allowed provider operations match section 7 exactly. Extra operations are denied.                                                                                                                                                                                  |
| AC-06 | Privacy classes and prohibited payloads in section 6 are rejected before transport.                                                                                                                                                                                     |
| AC-07 | Local Lisa memory remains separate from shared Brain knowledge; Brain results stay advisory.                                                                                                                                                                            |
| AC-08 | Skills discovery, exact-release validation, and job-execution evidence use Item 2 Skills v2 only. Legacy run/tool operations are denied.                                                                                                                                |
| AC-09 | Autowork requests, status, handoffs, and receipts use Item 2 Autowork validation plus Brain handoff correlation when required. Terminal regression and idempotency mutation are denied.                                                                                 |
| AC-10 | Libraries discovery and retrieval accept only admitted selectable revision-2 records with exact-release identity. Contribution remains excluded.                                                                                                                        |
| AC-11 | Unavailable, revoked, unauthorized, stale, disabled, and contract-incompatible providers produce typed `unavailable` or `denied` results with HOLD behavior and no silent fallback.                                                                                     |
| AC-12 | Retry/replay follows section 8.4. Invalid bodies are not retried as unavailability.                                                                                                                                                                                     |
| AC-13 | Obsolete Lisa-owned provider references in section 9 are replaced or labeled historical. No Lisa contract remains on v1 MCP run/write names.                                                                                                                            |
| AC-14 | Focused positive, negative, and unavailability tests exist for each provider Lisa consumes, using fakes only.                                                                                                                                                           |
| AC-15 | No production, schedule, VPS, service, or live credential proof is claimed.                                                                                                                                                                                             |
| AC-16 | Item 3 opens no PR until IDE Development v2.4.0 rollout is recorded. Until then, the only git actions are commit, push, and checkpoint.                                                                                                                                 |
| AC-17 | The complete operating-model non-regression ledger in section 10.4 is preserved and covered by focused source/static tests; no provider path bypasses its model, Cursor, sandbox, Google, approval, planning, memory, channel, job, Personality, or runtime boundaries. |

## 14. Documentation acceptance

This PRD is accepted when the Codex supervisor records that:

1. verified facts and assumptions remain correctly separated;
2. ownership, requirements, exclusions, and no-production boundaries are complete;
3. every acceptance criterion is implementable without violating Item 2;
4. execution-time Item 2 fields are not hard-coded to a still-reviewing candidate.

The supervising Codex agent remains responsible for that acceptance.
