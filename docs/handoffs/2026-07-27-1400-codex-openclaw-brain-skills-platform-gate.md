# Agent Session Handoff

## Session Metadata

| Field            | Value                                                                                                                   |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Agent identity   | Codex Desktop Agent · Codex · mac-mini · desktop-app · local · feature                                                  |
| Session ID       | `codex-desktop-agent-feature-20260727-1353`                                                                             |
| Orchestrator key | `codex-mac-mini-desktop-app-orchestrator`                                                                               |
| Objective        | Plan separate LiNKbrain and LiNKskills integrations for OpenClaw Prime/Lisa after cross-plan reconciliation             |
| Scope            | Read-only discovery, current-state assessment, architecture recommendation, clarification, and Platform dependency gate |
| Started          | 2026-07-27 13:53 Asia/Taipei                                                                                            |
| Ended            | Waiting at Platform-plan gate as of 2026-07-27 14:00 Asia/Taipei                                                        |
| Starting branch  | `dev/minicodex/openclawprimelisaplanning`                                                                               |
| Ending branch    | `dev/minicodex/openclawprimelisaplanning`                                                                               |
| Starting commit  | `ec90aa8cd119bb271fa2e93edb230c79fe33b689`                                                                              |
| Ending commit    | `ec90aa8cd119bb271fa2e93edb230c79fe33b689` (no commit created)                                                          |
| Starting status  | Clean                                                                                                                   |
| Ending status    | This handoff and the unique session record are uncommitted; no product or live-runtime change                           |

## Summary

Completed the required initial discovery without drafting or implementing the OpenClaw integration plan. Current OpenClaw 2026.7.2 already provides managed outbound MCP configuration, typed plugin hooks, plugin isolation, and SQLite-backed trusted-plugin state. The authoritative Lisa profile is valid and reachable, preserves native memory/compaction/cron/channels/skills, and currently has no managed MCP servers or LiNKskills `extraDirs` configured. No live LiNKbrain or LiNKskills integration exists.

The recommended OpenClaw end state is two thin bundled or trusted official plugins plus two independent managed MCP server entries. The Brain plugin alone may opt into conversation-bearing hooks and owns a Brain-only durable outbox. The Skills plugin receives structured run/profile telemetry only and owns a Skills-only outbox. Credentials, scopes, endpoints, tool namespaces, state, telemetry, retention, health, flags, rollout, and rollback stay separate. Existing OpenClaw/Lisa behavior and Program/host authority remain unchanged.

The completed LiNKplatform implementation plan was not found under the LiNKplatform repository. The final OpenClaw plan is therefore intentionally blocked before drafting.

## Files Inspected

- Root and docs `AGENTS.md`, `README.md`, `docs/agent-briefing.md`, `docs/agent-coordination.md`, `docs/current-status.md`, active session records, recent relevant handoffs, and coordination templates.
- Current managed MCP, plugin SDK/runtime, typed hook, SQLite plugin-state, skill loading, session, memory, compaction, heartbeat, cron, channel, config, and test documentation/source.
- `linkbots/lisa/docs/PHASE1-LINKBRAIN-LINKSKILLS.md`, `linkbots/lisa/docs/OPENCLAW_PRIME_MEMORY_SESSIONS_BRIEFING.md`, and `linkbots/lisa/docs/LINKBRAIN-AGENT-COORDINATION-HANDOVER-PROMPT.md`.
- Full LiNKbrain Phase 1 detailed implementation plan.
- Full LiNKskills internal-launch detailed development plan and its 2026-07-27 planning handoff.
- LiNKplatform repository plan/handoff inventory; existing intent, PRD, operations, open-issues, contracts, and Librarian documents were identified, but no completed implementation plan was present.

## Files Created

- `docs/agent-sessions/active/codex-desktop-agent-feature-20260727-1353.md`
- `docs/handoffs/2026-07-27-1400-codex-openclaw-brain-skills-platform-gate.md`

## Files Modified

- `docs/agent-sessions/active/codex-desktop-agent-feature-20260727-1353.md` (this session only)

## Files Deleted

- None.

## Commands Run

- Fresh Git status, branch, tracking, remotes, worktrees, and stash inspection.
- `pnpm docs:list`.
- Targeted `rg`, `find`, `sed`, and line-numbered source/document reads across the required OpenClaw and Lisa surfaces.
- Full read of both upstream detailed plans and the LiNKskills plan handoff.
- Read-only, sanitized Lisa checks: config validation, health/status summaries, managed MCP status, plugin inventory, skill inventory, and selected non-secret configuration shape.
- LiNKplatform plan/handoff filename inventory.

## Decisions

- **Two plugins, not one combined plugin.** Reason: plugin identity is the current OpenClaw unit for enablement, trust, hook privacy, state isolation, diagnostics, and rollback. Separate plugins materially reduce cross-domain privacy and failure-coupling risk. This is an implementation recommendation within the Principal-approved option set.
- **Two managed MCP entries.** Reason: matches the approved separate Brain/Skills service, endpoint, credential, scope, namespace, health, and rollback contracts. Carlos-approved boundary.
- **Only Brain receives raw conversation access.** Reason: non-bundled conversation hooks require explicit per-plugin access, which is a direct technical control preventing Skills telemetry from receiving raw Brain evidence. Carlos-approved privacy boundary; exact hook selection remains an OpenClaw implementation decision.
- **Use existing SQLite-backed plugin state before proposing schema work.** Reason: OpenClaw already provides plugin-isolated durable keyed state and the repository forbids new sidecar state. Exact outbox mechanics remain subject to frozen domain contracts and implementation proof. No schema-version change is approved or proposed.
- **Historical LiNKskills Git/`extraDirs` delivery is obsolete.** Reason: the current LiNKskills plan requires a separate Gateway/MCP/API and immutable published bundles. OpenClaw built-in/local skills remain preserved, but `extraDirs` is not the LiNKskills production integration.
- **Stop before plan drafting.** Reason: the Principal explicitly made the completed LiNKplatform plan a hard gate. No substitute contract was inferred from older Platform documents.

## Tests and Verification

- Lisa configuration validation passed.
- Sanitized Lisa health was `ok`; Gateway was reachable on the expected Lisa profile.
- Lisa managed MCP inventory contained zero servers.
- Lisa skill inventory was present and functioning, with no `skills.load.extraDirs` configured.
- Lisa native heartbeat remained disabled and current cron/channel behavior was left untouched.
- No product tests were run because no product code changed.
- Final docs whitespace/diff validation is recorded when the session pauses.

## Problems and Blockers

- Hard blocker: no completed LiNKplatform plan was found. The missing plan must freeze or clearly define canonical actor/auth claims, credential issuance/rotation/revocation, separate Brain/Skills scopes and endpoints, hosting/environment topology, audit/telemetry conventions, Librarian hosting, live migration ownership, and operational failure contracts.

## Uncommitted Changes

This session:

- `docs/agent-sessions/active/codex-desktop-agent-feature-20260727-1353.md`
- `docs/handoffs/2026-07-27-1400-codex-openclaw-brain-skills-platform-gate.md`

Pre-existing and preserved:

- `stash@{0}: On main: wip-auth-unrelated`
- All other branches, worktrees, active session records, live Lisa changes, and coordination work owned by other sessions.

## Risks and Unknowns

- The exact Platform actor-to-OpenClaw agent/session mapping cannot be finalized without the canonical actor claim contract.
- Credential representation, SecretRef/OAuth choice, scope boundaries, refresh/revocation behavior, and operator ownership cannot be finalized without the Platform plan.
- Ordered outbox records, idempotency keys, retry/dead-letter semantics, and retention must be checked against frozen Brain and Skills contracts before choosing the smallest current SDK implementation.
- Canary evidence windows and production exit thresholds need Principal confirmation unless the completed Platform plan supplies them.
- Upstream plan prose currently appears compatible at the ownership level, but three-plan mutual compatibility cannot be declared until the Platform plan is read.

## Remaining Work

1. Receive and read the completed LiNKplatform plan completely.
2. Reconcile its versioned contracts with the Brain and Skills plans and current OpenClaw surfaces.
3. Resolve only material intent/risk/done questions.
4. Explicitly declare greater-than-98% clarity and mutual compatibility, or issue cross-plan correction prompts.
5. Draft and validate `docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md` plus the final planning handoff.
6. Stop for Principal approval; do not implement.

## Exact Next Action

Carlos supplies the completed LiNKplatform plan path and confirms it is the execution baseline. Resume this same session, read it fully, and reconcile it before any OpenClaw plan drafting.

## Questions for Carlos

- What is the path to the completed LiNKplatform implementation plan, once it is ready?
- Should the current LiNKbrain and LiNKskills detailed plans be treated as frozen execution baselines despite their internal proposal/review status labels?
- What minimum stage and production observation window should define a successful Lisa canary if the Platform plan does not define one?

## Questions for the Orchestrator or Next Agent

- Refresh `docs/current-status.md` from this waiting record when practical.
- Do not assign overlapping ownership of the proposed OpenClaw plan file or live Lisa integration surfaces without coordination.

## Confidence

- Current OpenClaw/Lisa baseline: 99%.
- Managed MCP and plugin architecture: 99%.
- Lifecycle hooks and privacy controls: 98%.
- Local durable-state building blocks: 96%; exact outbox design awaits frozen contracts.
- LiNKbrain/OpenClaw boundary: 97%.
- LiNKskills/OpenClaw boundary: 97%.
- Platform-dependent identity, credentials, hosting, audit, and migration: 70% because the required completed plan is absent.
- Overall provisional clarity: 94%. Final greater-than-98% clarity is not claimed.

## Amendments

### 2026-07-27 14:08 Asia/Taipei — Principal decisions and exact resume gate

The Principal answered all three questions recorded above. This amendment supersedes those open questions without altering the earlier discovery evidence:

- The intended completed Platform plan is `/Users/linktrend/Projects/LiNKplatform/docs/LINKPLATFORM-SHARED-FOUNDATION-DETAILED-IMPLEMENTATION-PLAN.md`. It was still absent when rechecked at this checkpoint. Older Platform documents are not substitutes for its final contracts.
- The current LiNKbrain and LiNKskills detailed plans are frozen architectural and ownership baselines for cross-plan planning. Their remaining proposal/review labels do not reopen approved boundaries and are not execution authorization.
- The proposed OpenClaw architecture is approved as the planning baseline: one Brain plugin, one Skills plugin, one Brain managed MCP entry, one Skills managed MCP entry, Brain-only minimum conversation-hook access, and completely separate credentials, scopes, flags, health, SQLite state/outboxes, telemetry, retention, rollout, and rollback.
- Historical Git-mounted or `skills.load.extraDirs` LiNKskills delivery remains obsolete for the production LiNKskills integration. Native OpenClaw skills remain preserved.
- Each applicable Brain or Skills canary requires at least three active operating days plus the required minimum successful scenario and lifecycle-event counts, whichever takes longer. Every mandatory stage failure/recovery scenario needs at least one deliberate successful test. Production also requires three active operating days and adequate real activity; synthetic checks may supplement but not replace it.
- Brain and Skills have independent evidence windows. Skills cannot start its Lisa canary until the Skills Cursor and Codex readiness gates pass. A domain failure restarts only its own window unless it reveals shared OpenClaw or Platform infrastructure risk.
- Exact ordinary event/run thresholds remain implementation-time acceptance values to be justified after final contract reconciliation; they are not another intent question unless they materially alter launch scope.

The exact resume condition is: **the completed LiNKplatform plan exists, has been identified as the planning baseline, and is ready for full OpenClaw reconciliation.** Until then, this session remains waiting and must not create the detailed OpenClaw implementation-plan document or begin implementation.

When the condition is met, resume this same session, read the Platform plan completely, reconcile all three upstream plans, verify the contracts against current public OpenClaw extension surfaces, issue correction prompts for any contradiction, ask only genuinely material remaining questions, and declare greater-than-98% clarity before drafting. After the standalone plan and final planning handoff are validated, stop for Principal approval; implementation still requires explicit authorization.
