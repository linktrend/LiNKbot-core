# Lisa Ship/Pull — later live cron migration plan

**Do not apply this plan in the repository-only task.** No changes to `~/.openclaw-lisa`, LaunchAgents, or live cron.

## Jobs to update (in place — keep IDs)

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

## Deploy order (later, with Carlos approval)

1. Merge/deploy personality files to Lisa workspace (mirror).
2. Apply core wait prerequisite (separate workstream) **or** accept Issues until it lands.
3. `cron edit` each of the four Ship/Pull jobs’ messages + tool allowlists.
4. Verify with `cron list --json` (no Telegram force-run unless Carlos wants it).
5. Confirm first Clear/Issues includes status CAS + email + final payload.

## Personality deploy paths (mirror)

- `agents/ship-pull-clock.md`, `pipeline-status.md`, `morning-digest.md`, `repair-dispatcher.md`, `offline-recovery.md`
- `HEARTBEAT.md`, `AGENTS.md`, `tools/cursor-acp.md`
- `templates/*`, `memory/pipeline-status.md` (template only — do not clobber live undated status without migrate)
