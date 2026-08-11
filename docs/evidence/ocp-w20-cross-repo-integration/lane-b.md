# OCP-W20 Lane B — Lisa ops opt-in / non-live / sessions_wait

| Field              | Value                                                                                         |
| ------------------ | --------------------------------------------------------------------------------------------- |
| Lane               | B                                                                                             |
| Model              | cursor-grok-4.5-high                                                                          |
| Worktree           | `ocp-w20-cross-repo-integration-cli`                                                          |
| Base SHA           | `3169119fb697fa28cc6d2c244231729a8206e68d` (unchanged)                                        |
| Reconcile tip      | `fb9fe4b68b85fd866670ce748ba1c060cab6a323` (`issue/ocp-lisa-ops01`, ancestor; **not merged**) |
| When (Asia/Taipei) | 2026-08-01T11:21:45+0800                                                                      |
| Result             | passed                                                                                        |

## Scope

Candidate-only. No live Lisa mutation, credentials, cloud, merge/promote/deploy. Edited only Lane B ownership paths. Did not write to `~/.openclaw-lisa`. Parallel Lane C `model-routing*` dirt left untouched.

## Mission outcomes

1. **Opt-in / non-live defaults (fail-closed):** Added `LISA_OPS_LIVE_ACTION_DEFAULTS`, `authorizeLiveLisaAction`, `authorizeShipPullLiveAction` in `ship-pull-contract.ts`. Repair live ACP gated via `authorizeRepairLiveDispatch`. Main Approve `issueCarlosAsk` / `authorizeApprovalDispatch` require live targeting + separately approved credentials language before store. Personality + install/migration/prerequisite docs banner candidate-only / credentials language.
2. **Ship/Pull `sessions_wait`:** Procedure + `SHIP_PULL_REQUIRED_TOOLS` require `sessions_wait` (registry persist + deadline), forbid `sessions_yield` / polling. Allowlist: spawn/wait/read/write/edit/exec.
3. **Reconcile vs ops01 tip:** Tip ancestor already on base; kept HEAD `sessions_wait` + tip fail-closed Main Approve store; refreshed CRON plan from stale “core wait blocked” to `sessions_wait` + live opt-in gate. No merge.
4. **Live Lisa untouched:** No reads of secrets; no writes under `~/.openclaw-lisa` from this worktree.
5. **Tests strengthened:** Fail-closed live defaults; repair live gate; procedure allowlist vs `SHIP_PULL_REQUIRED_TOOLS`; Main Approve live+store adapters. Existing routing suite left in place (Lane C owns PDF routing expansions); assertion only tolerates current PDF cutover note wording.

## Proof command

```bash
node --experimental-strip-types --test linkbots/lisa/ops/lisa-ops.test.ts
```

Result: **43 pass / 0 fail** (duration ~531ms).

## Changed paths (Lane B owned)

- `linkbots/lisa/ops/ship-pull-contract.ts`
- `linkbots/lisa/ops/repair-dispatcher.ts`
- `linkbots/lisa/ops/main-approve-binding.ts`
- `linkbots/lisa/ops/offline-recovery.ts`
- `linkbots/lisa/ops/pipeline-status-cas.ts`
- `linkbots/lisa/ops/templates.ts`
- `linkbots/lisa/ops/render-template.ts`
- `linkbots/lisa/ops/lisa-ops.test.ts`
- `linkbots/lisa/Personality files/agents/ship-pull-clock.md`
- `linkbots/lisa/Personality files/agents/morning-digest.md`
- `linkbots/lisa/Personality files/agents/repair-dispatcher.md`
- `linkbots/lisa/Personality files/HEARTBEAT.md`
- `linkbots/lisa/docs/LISA-OPS-CORE-PREREQUISITE.md`
- `linkbots/lisa/docs/SHIP-PULL-CLOCK-INSTALL.md`
- `linkbots/lisa/docs/LISA-OPS-CRON-MIGRATION-PLAN.md`
- `docs/evidence/ocp-w20-cross-repo-integration/lane-b.md` (this file)

## Blockers

None for Lane B candidate packet. Live rollout remains a **human gate** (credentials language + explicit live targeting) — not claimed complete here.

## Notes

- Routing/PDF cutover content is Lane C; Lane B did not expand that coverage.
- `sessions-wait-tool*` / `extensions/*` / live `openclaw.json` not touched.
