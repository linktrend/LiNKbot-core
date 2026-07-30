# Lisa Ship/Pull — later live cron migration plan

**Do not apply this plan in the repository-only task.** No changes to `~/.openclaw-lisa`, LaunchAgents, or live cron.

## Hard deploy gate (ordered — all required)

This Lisa branch **must not** be deployed before:

1. **Core ACP wait/re-entry** is implemented by its designated OpenClaw workstream (`LISA-OPS-CORE-PREREQUISITE.md`).
2. **PR #38** lands into `development`.
3. This branch updates onto that exact `development` head.
4. Combined tests pass.
5. One controlled live rollout is approved by Carlos.

There is **no** option to deploy personality/cron updates and knowingly “accept Issues until core lands.”

## Jobs to update (in place — keep IDs) — only after the gate above

| Job            | Action | Message / allowlist changes                                                                                                                                                                                                      |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lisa-ship-05` | Update | Point at new `agents/ship-pull-clock.md` Ship 05; checkpoint-only wording; **remove** `sessions_yield` from `toolsAllow` once core wait exists (until then keep spawn/read/write/edit/exec; yield must not be used by procedure) |
| `lisa-pull-07` | Update | Same for Pull 07 + frozen-tip skip                                                                                                                                                                                               |
| `lisa-ship-16` | Update | Same as Ship 05                                                                                                                                                                                                                  |
| `lisa-pull-18` | Update | Same as Pull 07                                                                                                                                                                                                                  |

## Jobs to retain unchanged

| Job                                           | Notes                                                                                               |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `lisa-morning-digest`                         | Retain; after personality deploy, digest picks up Staging 10:00 / Review Packager / Approve wording |
| `lisa-heartbeat-45`                           | Retain; same                                                                                        |
| `battery-selfie-1745` / `battery-selfie-2145` | Retain                                                                                              |
| `battery-monitor-alert-35`                    | Retain (event-driven)                                                                               |

## Jobs / messages to remove

| Item                                                                                    | When                                                      |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Any residual `lisa-ship-a` / `lisa-pull-a` / `lisa-ship-06` / `lisa-pull-08` duplicates | After verifying canonical four jobs                       |
| Cron message text that says “open or update a PR” or “request Bugbot”                   | On update of the four Ship/Pull jobs                      |
| Cron guidance that requires `sessions_yield` after ACP                                  | On update; replace with Wait contract + core prerequisite |

## Deploy order (later, with Carlos approval — after hard gate)

1. Confirm core wait/re-entry is live and proven.
2. Confirm PR #38 is on `development`; rebase/update this branch; combined tests green.
3. Merge/deploy personality files to Lisa workspace (mirror).
4. `cron edit` each of the four Ship/Pull jobs’ messages + tool allowlists.
5. Verify with `cron list --json` (no Telegram force-run unless Carlos wants it).
6. Confirm first Clear/Issues includes status CAS + email + final payload.

## Personality deploy paths (mirror)

- `agents/ship-pull-clock.md`, `pipeline-status.md`, `morning-digest.md`, `repair-dispatcher.md`, `offline-recovery.md`
- `HEARTBEAT.md`, `AGENTS.md`, `tools/cursor-acp.md`
- `Personality files/templates/*` → workspace `templates/` (canonical message bodies)
- `memory/pipeline-status.md` (template only — do not clobber live undated status without migrate)
- `linkbots/lisa/ops/render-template.ts` + `templates.ts` → workspace `ops/` (Lisa-executable renderer)
- **Do not deploy** `*.test.ts` or other test files

Live render (cwd = `/Users/linktrend/.openclaw-lisa/workspace`):

```bash
node --experimental-strip-types ops/render-template.ts <kind> <json-path>
```

See `Personality files/PERSONALITY_WORKFLOW.md` Safe Deploy Workflow for full copy commands.
