# Agent Session Handoff

## Session Metadata

| Field            | Value                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------- |
| Agent identity   | Codex Desktop Agent                                                                                |
| Session ID       | `codex-desktop-ocp-acp-tool-policy-20260804-1430`                                                  |
| Orchestrator key | link-production-control                                                                            |
| Objective        | Correct the requester tool policy required for Codex ACP spawn.                                    |
| Scope            | Lisa Ship/Pull and Repair allowlists, generated stage artifacts, focused tests, and documentation. |
| Started          | 2026-08-04 14:30 Asia/Taipei                                                                       |
| Ended            | 2026-08-04 14:37 Asia/Taipei                                                                       |
| Starting branch  | `dev/minicodex/WP-0-stage-workspace-path-hotfix`                                                   |
| Ending branch    | `dev/minicodex/WP-0-stage-workspace-path-hotfix`                                                   |
| Starting commit  | `65c920fb83c705ee0c1ab14cf5a75df877bf55fc`                                                         |
| Ending commit    | Resolve the pushed branch tip; this handoff is committed with the implementation.                  |
| Starting status  | Ten inherited uncommitted hotfix files.                                                            |
| Ending status    | Scoped changes validated and ready for exact promotion.                                            |

## Summary

Ship/Pull and Repair Codex ACP dispatch now expose `apply_patch` at both the cron payload and `lisa-cron` agent-policy layers. The ACP runtime validates edit capabilities before spawn, so omitting `apply_patch` blocked an otherwise healthy Codex Terra child. The correction is bounded to tool policy, tests, generated hashes, and matching operator documentation.

## Files Inspected

- `AGENTS.md`, scoped Lisa/docs instructions, briefing, coordination dashboard, and active session records
- Ship/Pull and Repair contracts, payload builders, installer/coordinator callers, tests, seed, and manifest
- Relevant 2026-08-04 Ship/Pull, Repair, and workspace-package handoffs
- Installed Codex apply-patch tool specification and session tests under `/Users/linktrend/Projects/codex`

## Files Created

- `docs/agent-sessions/completed/codex-desktop-ocp-acp-tool-policy-20260804-1430.md`
- `docs/handoffs/2026-08-04-ocp-acp-tool-policy-hotfix.md`

## Files Modified

- `linkbots/lisa/Personality files/agents/ship-pull-clock.md`
- `linkbots/lisa/Personality files/openclaw.json`
- `linkbots/lisa/docs/LISA-OPS-CRON-MIGRATION-PLAN.md`
- `linkbots/lisa/docs/SHIP-PULL-CLOCK-INSTALL.md`
- `linkbots/lisa/ops/jobs.stage-seed.json`
- `linkbots/lisa/ops/lisa-ops.test.ts`
- `linkbots/lisa/ops/repair-dispatcher.ts`
- `linkbots/lisa/ops/ship-pull-contract.ts`
- `linkbots/lisa/ops/stage-ops-holds.test.ts`
- `linkbots/lisa/ops/stage-workspace-package.manifest.json`

## Files Deleted

None.

## Commands Run

- Git/coordination preflight and scoped source searches
- `pnpm exec oxfmt --write linkbots/lisa/docs/LISA-OPS-CRON-MIGRATION-PLAN.md`
- `git diff --check`
- Targeted `pnpm exec oxfmt --check` across the ten hotfix files
- Four focused Node test suites using the repository TypeScript/resolve loaders

## Decisions

- Added `apply_patch` to both canonical required-tool arrays and the workshop `lisa-cron` allowlist because the verified ACP path rejects spawn when the requester lacks that edit capability.
- Regenerated the stage seed from canonical builders and updated the workspace manifest hash rather than hand-editing derived hashes.
- Preserved disabled schedules, `delivery=none`, the `sessions_wait` contract, and the `sessions_yield` prohibition.

## Tests and Verification

- `git diff --check`: PASS.
- Targeted formatting check: PASS.
- `lisa-ops.test.ts`, `stage-ops-holds.test.ts`, `stage-ops-cron-installer.test.ts`, and `stage-workspace-package.test.ts`: PASS, 85/85.
- Hosted CI and Bugbot: deferred under the production-control sprint policy; bounded local evidence is green.
- No live runtime test or mutation was performed in this repository-only lane.

## Problems and Blockers

None at handoff.

## Uncommitted Changes

The scoped implementation and this coordination record are ready to commit together.

## Risks and Unknowns

The change expands the trusted cron requester tool surface by one required file-edit capability. Existing sandbox, prompt hard stops, exact Codex runtime contract, disabled stage schedules, and no-fallback rules remain unchanged.

## Remaining Work

Commit/push, PR merge to development, then exact-tree promotions development to staging and staging to main.

## Exact Next Action

Promote only after reconfirming the final diff and green focused tests.

## Questions for Carlos

None.

## Questions for the Orchestrator or Next Agent

None.

## Confidence

99% for the bounded repository correction.

## Amendments

Append dated factual corrections here. Never silently rewrite an earlier handoff.
