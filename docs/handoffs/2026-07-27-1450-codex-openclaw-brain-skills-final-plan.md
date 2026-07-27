# Agent Session Handoff

## Session Metadata

| Field                  | Value                                                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Agent identity         | Codex Desktop Agent · Codex · mac-mini · desktop-app · local · feature                                            |
| Session ID             | `codex-desktop-agent-feature-20260727-1353`                                                                       |
| Orchestrator key       | `codex-mac-mini-desktop-app-orchestrator`                                                                         |
| Objective              | Produce the reconciled OpenClaw Prime/Lisa implementation plan for separate LiNKbrain and LiNKskills integrations |
| Scope                  | Planning, documentation, coordination, and validation only                                                        |
| Started                | 2026-07-27 13:53 Asia/Taipei                                                                                      |
| Ended                  | 2026-07-27 14:50 Asia/Taipei                                                                                      |
| Branch                 | `dev/minicodex/openclawprimelisaplanning`                                                                         |
| Starting/ending commit | `ec90aa8cd119bb271fa2e93edb230c79fe33b689` (no commit created)                                                    |

## Outcome

Created the standalone OpenClaw Prime/Lisa detailed implementation plan after fully reconciling the frozen LiNKbrain, LiNKskills, and LiNKplatform plans with current OpenClaw 2026.7.2 public extension surfaces. Planning clarity is 99.2%. The upstream plans are mutually compatible; no correction prompt is required.

The plan freezes two private bundled plugins and two managed MCP entries, one canonical Lisa actor and runtime binding, Brain-only conversation-hook access, Skills structured telemetry only, and independent credentials, state/outboxes, health, flags, rollout, rollback, and evidence windows. It preserves native OpenClaw/Lisa memory, compaction, sessions, cron, channels, native skills, and Program authority.

Implementation is not authorized. The next action is Principal review and approval, followed by Phase 0 only.

## Files Inspected

- Root, docs, and extensions `AGENTS.md` files; repository README; agent briefing, coordination, dashboard, active records, and relevant handoffs.
- Complete LiNKbrain Phase 1 implementation plan.
- Complete LiNKskills internal-launch implementation plan and planning handoff.
- Complete LiNKplatform shared-foundation implementation plan and planning handoff.
- Current OpenClaw managed MCP config/auth/OAuth, plugin SDK/API, hook privacy/timeouts, SQLite keyed state, manifests, SecretRef, memory, compaction, session, cron, channel, skill, and test surfaces.
- Sanitized current Lisa profile baseline and existing Lisa planning documents.
- Technical-documentation skill instructions and the brownfield/OpenClaw documentation references required for this planning task.

## Files Created

- `docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md`
- `docs/agent-sessions/completed/codex-desktop-agent-feature-20260727-1353.md`
- `docs/handoffs/2026-07-27-1400-codex-openclaw-brain-skills-platform-gate.md`
- `docs/handoffs/2026-07-27-1450-codex-openclaw-brain-skills-final-plan.md`

## Files Modified

- The unique session record was updated during the planning lifecycle and moved from `active/` to `completed/` at closeout.

## Files Deleted

- `docs/agent-sessions/active/codex-desktop-agent-feature-20260727-1353.md` was moved to the completed-session path; no information was discarded.

## Commands and Checks

- Fresh Git status, branch, tracking, remotes, worktrees, stash, dashboard, and overlap inspection.
- `pnpm docs:list` and targeted repository document/source discovery.
- Complete chunked reads and SHA-256 verification of the three upstream implementation plans.
- Targeted `rg`, `sed`, `find`, and source reads for managed MCP, auth/OAuth, SecretRef, plugin API, hook privacy and payloads, state/lease/order, lifecycle, native Lisa behavior, and tests.
- Sanitized profile-qualified Lisa validation, health, MCP, plugin, and skills inventory during discovery; no values or private payloads were recorded.
- Required-term, heading, phase, code-fence, and repo-path checks for the new plan.
- Documentation formatting, docs inventory, MDX validation, whitespace/diff, and final status checks recorded below.

## Material Decisions

- **Mutual compatibility:** the three upstream plans and current OpenClaw seams are compatible. The Platform can provision a service/binding with actor flags off; OpenClaw can build against fakes; live stage remains environment-gated.
- **Packaging:** use two default-disabled private bundled plugins, `extensions/linkbrain` and `extensions/linkskills`, so current trusted SQLite runtime state, version lock, diagnostics, trust, and rollback boundaries remain enforceable.
- **MCP:** use independent `mcp.servers.linkbrain` and `mcp.servers.linkskills` entries with separate endpoints, credentials, scopes, filters, health, and rollback.
- **Privacy:** Brain explicitly opts into only necessary conversation-bearing hooks. Skills does not opt in and must not register any prompt/message/content-bearing hook even if the current gate omits a particular hook name.
- **Skills guidance:** rely on stable MCP schemas/descriptions and immutable bundle metadata; do not use dynamic conversation prompt hooks.
- **State:** prototype current public SQLite keyed state first, using separate plugin namespaces, reject-new overflow, deterministic order, leases, idempotency, retry, and dead letters. Stop for a generic public SDK proposal if crash-safe semantics cannot be proven. No core-private import, sidecar, raw database access, or schema bump.
- **Identity:** Lisa remains one canonical actor. Local agents, sessions, cron runs, tasks, and transient subagents are subordinate unless Platform explicitly designates a durable independent actor/binding.
- **Authentication:** prefer native MCP OAuth/auth profiles; otherwise use Platform-approved SecretRef injection. An unsupported mechanism is a stop gate, not permission for literal tokens or core hacks.
- **Rollout:** Brain may reach production first. Skills waits for Cursor and Codex readiness. Each domain has independent stage and production evidence windows of at least three active operating days plus approved scenario/event/activity counts, whichever is longer.
- **No implementation:** product code, runtime config, credentials, migrations, services, and deployments remain untouched pending Principal approval.

## Validation Results

- The plan contains 23 top-level sections and 14 implementation phases, with explicit objectives, owners, work, tests, gates, and rollback.
- Final plan artifact: 1,131 lines; SHA-256 `9fe08d53b527f63d2b2325976e3fe1a6cc88b988cc7a2dd892d3a90ca378dce7`.
- Required architecture, privacy, identity, credential, environment, canary, operations, risks, and definition-of-done terms are present.
- Code fences are balanced and referenced repository paths exist.
- Documentation validation commands completed as recorded in the final session record.
- The first custom whitespace loop accidentally reused zsh's reserved `path` variable and stopped before Git inspection; the corrected loop used `artifact_file`, found six intentional Markdown hard-break spaces, those were removed, and the final whitespace/status rerun passed.
- No product or live-runtime test was required because no product or runtime change was made.

## Uncommitted Changes

This session's planning artifacts remain uncommitted:

- `docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md`
- `docs/agent-sessions/completed/codex-desktop-agent-feature-20260727-1353.md`
- `docs/handoffs/2026-07-27-1400-codex-openclaw-brain-skills-platform-gate.md`
- `docs/handoffs/2026-07-27-1450-codex-openclaw-brain-skills-final-plan.md`

Pre-existing and preserved: `stash@{0}: On main: wip-auth-unrelated`; all other branches, worktrees, session records, live Lisa state, and coordination work.

## Gates and Remaining Risks

- Principal approval of the detailed plan is required before Phase 0.
- Stage and production Platform projects are inactive; schemas, migrations, data state, backup/restore, services, audit, and Librarian remain live-proof gates.
- The Platform auth mechanism must be consumable securely by current OpenClaw public surfaces.
- Brain production retention and hold durations require Principal approval.
- Outbox limits/retry timing and ordinary canary count thresholds require measured implementation values.
- Cursor credentials exposed in process arguments remain an external launch-critical maintenance gate; OpenClaw must not inspect or reuse them.

## Exact Next Action

The Principal reviews `docs/OPENCLAW-PRIME-LISA-LINKBRAIN-LINKSKILLS-DETAILED-IMPLEMENTATION-PLAN.md`. If approved, assign Phase 0 only: create a fresh implementation session/worktree, freeze exact source and contract hashes, obtain owner-approved sanitized fixtures and the Platform auth ADR, then stop at the Phase 1 contract/fake gate before live Lisa or Platform work.

## Questions

- Principal: approve, request amendments, or reject the plan. No unresolved architecture question is being deferred.
- Matching Orchestrator: refresh `docs/current-status.md` from the completed record and state that this planning work is no longer active.

## Confidence

- Three-plan reconciliation: 99.4%.
- Current OpenClaw extension/auth/state/lifecycle fit: 99.0%.
- Identity, privacy, and ownership mapping: 99.5%.
- Phase sequencing, tests, rollout, and rollback: 99.0%.
- Overall planning clarity: 99.2%.

## Amendments

### 2026-07-27 15:43 Asia/Taipei — Independent execution and verification controls

The Principal's focused verification review found missing execution/verification governance controls while affirming the existing architecture. The plan was corrected without reopening or changing the approved two-plugin/two-MCP, canonical Lisa actor, Brain-only conversation access, Skills structured telemetry, independent-domain, Platform/OpenClaw ownership, Brain-first rollout, evidence-window, rollback, or native-preservation decisions. The three upstream plan hashes remain unchanged.

Added to the plan:

- four concurrent repository-specific Cursor execution agents using Grok 4.5 High, each with a repository, branch, separate checkout/worktree where required, active ownership record, declared interfaces/files, and implementation handoff;
- four matching Codex 5.6 Sol Medium independent verifiers, with LiNKbrain Codex responsible for final four-plan reconciliation;
- an explicit prohibition on treating Grok completion reports as proof or letting verification silently become implementation;
- the exact seven plan-conformance classifications required for every task, phase, test, gate, risk, evidence requirement, and definition-of-done item;
- the four-repository ownership matrix and coordinated ownership-transfer work-packet rule;
- eleven named cross-plan interface gates with owner-evidence requirements;
- approved-plan deviation control for the OpenClaw Grok execution owner;
- a complete execution-to-verification handoff contract and Codex correction-work-packet contract;
- separate Phase 13 Grok execution closeout, Phase 14 OpenClaw Codex verification, and Phase 15 LiNKbrain Codex reconciliation/Principal closeout;
- explicit risks for provisional completion, self-certification, unclassified items, assumed interface completion, verifier takeover, and provisional final reconciliation;
- definition-of-done requirements for the complete Grok handoff, all seven classifications, resolved/accepted correction packets, all four verification reports, LiNKbrain Codex reconciliation, contradiction-free launch state, and final Principal acceptance.

Corrected artifact facts supersede the earlier validation claims in this handoff:

- top-level sections: 24, not 23;
- implementation phases: 16 (`0` through `15`), not 14;
- final line count: 1,335, not 1,131;
- final SHA-256: `17203ee586a3fb2b1281bcddd8b17ae350075ebce537689f3c4bfcbbd14914f7`, replacing `9fe08d53b527f63d2b2325976e3fe1a6cc88b988cc7a2dd892d3a90ca378dce7`.

Validation for this amendment includes `oxfmt`, `pnpm docs:list`, `pnpm docs:check-mdx`, sequential section/phase checks, balanced code fences, exact seven-classification checks, ownership-matrix and eleven-gate checks, role-separation checks, untracked-file whitespace checks, and final Git scope inspection. No product code, plugin, hook, MCP configuration, credential, runtime, service, deployment, live profile, live integration, or upstream plan changed.

The corrected OpenClaw plan now fully gels with the frozen LiNKbrain, LiNKskills, and LiNKplatform plans at 99.5% planning confidence. Implementation remains unauthorized pending Principal review and approval.
