# Lisa Option A — Ship/Pull Cron Install Notes

**Doctrine:** IDE Development `docs/AUTONOMOUS-GIT-OPERATIONS.md`  
**Procedure:** `linkbots/lisa/Personality files/agents/ship-pull-clock.md`  
**Do not commit secrets.** Live cron state lives on the Lisa gateway (Mini), not as secrets in git.

**Candidate-only / non-live default (fail-closed):** This install note must **not** be applied from repository-only / candidate packets. Live install requires explicit live Lisa targeting opt-in **and** separately approved credentials language in docs/contracts. Do not write to `~/.openclaw-lisa` until that gate passes.

**Wave names** use local hour labels: Ship 05, Pull 07, Ship 16, Pull 18 (not A/B letters; not `Ship 05:00`).

## Human / ops prerequisites

1. **Mac Mini awake** with Keep Awake / Remote Control so Codex ACP can spawn at 05:00 / 07:00 / 16:00 / 18:00 Asia/Taipei.
2. Lisa gateway healthy (`--profile lisa`); ACP/`acpx` working.
3. Personality mirror deployed or live workspace has `agents/ship-pull-clock.md`.
4. `memory/pipeline-status.md` exists before enabling the jobs. Initialize it from the personality template if missing; runtime jobs update this existing file with compare-and-swap `edit`, not stale full-file writes.
5. Separately approved credentials language + explicit live targeting opt-in (see `LISA-OPS-CORE-PREREQUISITE.md`).

## Related schedule (digest / heartbeat)

| Name                  | Expr (Asia/Taipei)                      | Notes                                                              |
| --------------------- | --------------------------------------- | ------------------------------------------------------------------ |
| `lisa-heartbeat-45`   | `45 0,2,4,6,10,12,14,16,18,20,22 * * *` | Includes 06:45; **no 08:45**                                       |
| `lisa-morning-digest` | `30 8 * * *`                            | Email A+B+D (+ Main Approve when needed); Telegram A–D (+ Approve) |

## Existing-install migration (required)

Do not create a second set of jobs when legacy names (`lisa-ship-a`, `lisa-pull-a`, `lisa-ship-b`, `lisa-pull-b`) or the prior hour names (`lisa-ship-06`, `lisa-pull-08`) already exist. Live cron jobs have stable IDs independent of their names, so migrate each existing job in place:

1. Run `cron list --json` and identify the four existing Ship/Pull job IDs by name, schedule, and payload.
2. Use `cron edit <job-id>` to update its `--name`, `--cron`, `--tz Asia/Taipei`, description, message, and tool allowlist to the matching requirements below. Preserve its agent, isolated session, and delivery target.
3. If both a legacy and replacement job exist for the same wave, keep them disabled until you choose the canonical job; then enable exactly one and remove the duplicate only after verifying its ID and configuration.
4. Re-run `cron list --json`. The A/B, Ship 06, and Pull 08 names must be absent, and exactly one enabled job must exist for each wave schedule before the migration is complete.

## Jobs to create (new installs only)

| Name           | Expr (Asia/Taipei) | Wave    |
| -------------- | ------------------ | ------- |
| `lisa-ship-05` | `0 5 * * *`        | Ship 05 |
| `lisa-pull-07` | `0 7 * * *`        | Pull 07 |
| `lisa-ship-16` | `0 16 * * *`       | Ship 16 |
| `lisa-pull-18` | `0 18 * * *`       | Pull 18 |

Match flags used by existing `lisa-morning-digest` / `lisa-heartbeat-45`: isolated session, `agentId: lisa-cron`, announce → Telegram `1123023078`. Message body should instruct: read and run `agents/ship-pull-clock.md` for that wave, then spawn Codex ACP with **exactly** `runtime: "acp"`, `agentId: "codex"`, `model: "openai/gpt-5.6-terra"`, and `thinking: "medium"`. If Codex ACP/Terra is unavailable, report Issues and stop — no Cursor/Grok fallback and no self-write.

**Email exec HARD (2026-07-26):** cron messages must say `tools/bin/lisa-safe` is a **script file** — never list/explore it; invoke `email-send` unpiped. Retry that exact command only once after a hard denial. Pull 07 failed when the agent ran `list files in …/lisa-safe` via `exec`.

### Tool allowlist (required — 2026-07-25 fix; sessions_wait required)

Ship/Pull jobs already set `payload.toolsAllow` including `sessions_spawn`. That is **not enough** alone: OpenClaw intersects cron `toolsAllow` with `agents.list[lisa-cron].tools.allow`. If `sessions_spawn` / `sessions_wait` is missing from the agent allowlist, the live cron run will not expose the tool.

1. **Agent config** (`~/.openclaw-lisa/openclaw.json` → `agents.list` id `lisa-cron` → `tools.allow`) must include at least:
   - `sessions_spawn` (Codex ACP spawn)
   - `sessions_wait` (ACP park-wait; registry persist + deadline — no polling)
   - plus the usual host ops tools (`read` / `write` / `edit` / `exec` / `process` / `cron` / session list helpers) so `lisa-safe email-send` works after each wave
   - **Do not use `sessions_yield` for Ship/Pull** — it kills isolated cron parents (see `LISA-OPS-CORE-PREREQUISITE.md`). Remove yield from Ship/Pull job allowlists when migrating; main-session yield for other workflows is separate. Workshop `lisa-cron` SOT also **excludes** `sessions_yield` so a loose job `toolsAllow` cannot re-expose the kill path.
2. **Each Ship/Pull job** `payload.toolsAllow` must include `sessions_spawn`, `sessions_wait`, `apply_patch`, `read`, `write`, `edit`, and `exec`. ACP validates `apply_patch` and `edit` before spawn even when the bounded child does not call them. File tools are required to read the procedure/current cycle, serialize the shared status update, and write the email-body file; `exec` is required for the `lisa-safe email-send` side effect. Digest/heartbeat jobs should **omit** spawn/wait entries so they stay non-spawning.
3. Do **not** change `main` agent tools for this fix.

Repo SOT mirror: `linkbots/lisa/Personality files/openclaw.json` (workshop only — not auto-applied to live).

## Verify

```bash
PATH="/opt/homebrew/opt/node@24/bin:$PATH" \
node /Users/linktrend/Projects/openclaw_prime/openclaw.mjs --profile lisa cron list
```

Confirm all four jobs are present and enabled (`lisa-ship-05`, `lisa-pull-07`, `lisa-ship-16`, `lisa-pull-18`). Do not disable digest/heartbeat jobs while installing.

Policy check (no Telegram): confirm live `lisa-cron.tools.allow` and every Ship/Pull job's `toolsAllow` contain `sessions_spawn`, `sessions_wait`, `apply_patch`, `read`, `write`, `edit`, and `exec` (`cron list --json`). Prefer a one-word tool-inventory agent turn over force-running Ship/Pull (force-run announces Clear/Issues to Telegram). After migration, confirm `sessions_yield` is **absent** from `lisa-cron.tools.allow` and from Ship/Pull job `toolsAllow` / messages (main-session yield remains separate).

## Failure handling

If Codex ACP or Terra Medium is unavailable, Ship/Pull must fail closed as `WAVE: Issues`. Do not reroute Ship/Pull to Cursor/Grok, an internal subagent, direct edits, or an automation fallback.
