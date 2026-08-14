# Agent Session Handoff

## Session Metadata

| Field            | Value                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| Agent identity   | Codex Desktop Agent                                                                            |
| Session ID       | `codex-local-mac-mini-desktop-workspace-feature-20260813-2221`                                 |
| Orchestrator key | `codex-local-mac-mini-desktop-workspace-orchestrator`                                          |
| Objective        | Implement source-owned WP-01 reusable safe-action and sandbox routing hardening.               |
| Scope            | Generic execution routing, sandbox policy/config contracts, diagnostics, docs, and tests only. |
| Started          | 2026-08-13 22:21 Asia/Taipei                                                                   |
| Ended            | 2026-08-13 22:39 Asia/Taipei                                                                   |
| Starting branch  | `feature/lisa-vps-wp-01`                                                                       |
| Ending branch    | `feature/lisa-vps-wp-01`                                                                       |
| Starting commit  | `c67c7cc65c62e336d0f2922697685ef3192373b1`                                                     |
| Ending commit    | Final commit is reported in the agent handoff; this record is included in that commit.         |
| Starting status  | Clean                                                                                          |
| Ending status    | Clean                                                                                          |

## Summary

Implemented the reusable source-side WP-01 boundary. Sessions that are explicitly sandboxed now fail closed when automatic sandbox routing is unavailable; ordinary unsandboxed `host=auto` behavior remains unchanged. Trusted exec diagnostics identify completed runs as `sandbox` or `host-adapter`, while policy-denied routes emit a redacted `denied` security event without command text.

No Lisa-specific literals, live VPS/profile/service/credential/deployment/channel/schedule/deletion changes, Item 1 reopening, WP-02/WP-03 work, or packet-file edits were made.

## Files Inspected

- Immutable roadmap source at worktree commit `47bd61c6bd0`, including the complete WP-01 packet and adjacent roadmap requirements.
- Root and scoped `AGENTS.md` instructions, coordination/status docs, session/handoff templates, and relevant prior handoffs.
- Existing generic exec routing, approvals, sandbox config/backend/security validation, runtime status, diagnostic events, docs, and affected tests.

## Files Created

- `docs/handoffs/2026-08-13-2239-codex-wp-01-safe-actions-sandbox.md`
- `docs/agent-sessions/active/codex-local-mac-mini-desktop-workspace-feature-20260813-2221.md` (moved to `completed/` before commit)

## Files Modified

- `src/agents/agent-tools.ts`
- `src/agents/bash-tools.exec-runtime.ts`
- `src/agents/bash-tools.exec-types.ts`
- `src/agents/bash-tools.exec.ts`
- `src/agents/bash-tools.exec-runtime.test.ts`
- `src/agents/bash-tools.exec-runtime.pty-fallback.test.ts`
- `src/agents/bash-tools.exec.security-floor.test.ts`
- `src/agents/exec-defaults.ts`
- `src/infra/diagnostic-events.ts`
- `docs/tools/exec.md`

## Files Deleted

- None.

## Commands Run

- Read-only repository/worktree/coordination inspection and immutable packet reads.
- `node scripts/run-vitest.mjs src/agents/bash-tools.exec-runtime.test.ts src/agents/bash-tools.exec-runtime.pty-fallback.test.ts src/agents/exec-defaults.test.ts src/agents/bash-tools.exec.security-floor.test.ts`
- `pnpm format` on the 10 changed source/test/doc paths.
- `node scripts/run-tsgo.mjs -p tsconfig.core.json --incremental --tsBuildInfoFile .artifacts/tsgo-cache/core.tsbuildinfo`
- `node scripts/run-oxlint.mjs` on the 9 changed TypeScript paths.
- `node scripts/check-changed.mjs -- <10 changed paths>` attempted Testbox delegation; Crabbox failed its local binary sanity check before remote execution.
- `node scripts/run-tsgo.mjs -p test/tsconfig/tsconfig.test.src.json ...` was interrupted after extended CPU-bound execution without diagnostics.

## Decisions

- Added an internal `sandboxRequired` execution default rather than a new public config key: existing sandbox runtime status is authoritative, avoiding schema/default/doctor expansion.
- Preserved the existing unsandboxed `host=auto` gateway fallback for compatibility; only sandbox-required sessions fail closed.
- Treated gateway/node execution as the redacted `host-adapter` diagnostic class and kept command text out of route evidence.
- Kept elevated routing as its existing explicit host escape; it remains subject to existing host security and approval policy.

## Tests and Verification

- PASS: 4 focused Vitest files, 69 tests.
- PASS: core production `tsgo` graph.
- PASS: targeted `oxlint`.
- PASS: targeted `oxfmt` and `git diff --check`.
- HOLD: changed-path Testbox check did not execute remotely because the local Crabbox binary failed basic sanity checks.
- HOLD: test-source `tsgo` was stopped after a long CPU-bound run with no diagnostics; no failure was observed.
- Not run: any live VPS, profile, service, credential, deployment, channel, schedule, or deletion proof; this packet is source-only.

## Problems and Blockers

- Live sandbox installation/availability and observed route/isolation proof remain external integration gates.
- Testbox/Crabbox infrastructure was unavailable in this environment as described above.

## Uncommitted Changes

- Before final commit: only this session's 10 source/test/doc changes, handoff, and completed session record. No pre-existing changes were present.
- Final handoff must confirm clean status and exact commit/tree.

## Risks and Unknowns

- `sandboxRequired` is derived at agent-tool construction time; live VPS proof must confirm the actual profile/session construction path supplies the intended runtime status.
- This source change does not prove a maintained sandbox backend/image is installed, non-root, network-disabled, mount-restricted, credential-isolated, resource-limited, or observable on the VPS.

## Remaining Work

- Independent review of the packet branch.
- Live VPS installation/configuration and observed positive/negative isolation probes under the separate operational gate.
- Confirm rollback using a redacted previous config snapshot without removing shared sandbox infrastructure.

## Exact Next Action

Final commit/tree are reported in the agent handoff; verify clean status and hand the exact commit to the matching Orchestrator for independent review and live-gate coordination.

## Questions for Carlos

- None for source implementation.

## Questions for the Orchestrator or Next Agent

- Please keep live VPS sandbox installation and observed isolation proof separate from this source PASS; do not claim production readiness from this commit alone.

## Confidence

High for the source behavior and focused tests. Live capability remains unverified by design.

## Model-Use Receipt

- Acting model: GPT-5 Codex Desktop Agent.
- Delegated agents: none.
- External model/tool calls: none; repository inspection, edits, and validation were local except for the attempted Testbox classifier delegation, which failed before remote execution.

## Amendments
