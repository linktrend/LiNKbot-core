# Lisa Option A — Ship/Pull Cron Install Notes

**Doctrine:** IDE Development `docs/AUTONOMOUS-GIT-OPERATIONS.md`  
**Procedure:** `linkbots/lisa/Personality files/agents/ship-pull-clock.md`  
**Do not commit secrets.** Live cron state lives on the Lisa gateway (Mini), not as secrets in git.

## Human / ops prerequisites

1. **Mac Mini awake** with Keep Awake / Remote Control so Cursor ACP can spawn at 06:00 / 08:00 / 16:00 / 18:00 Asia/Taipei.
2. Lisa gateway healthy (`--profile lisa`); ACP/`acpx` working.
3. Personality mirror deployed or live workspace has `agents/ship-pull-clock.md`.

## Jobs to create (once)

| Name          | Expr (Asia/Taipei) | Wave   |
| ------------- | ------------------ | ------ |
| `lisa-ship-a` | `0 6 * * *`        | Ship A |
| `lisa-pull-a` | `0 8 * * *`        | Pull A |
| `lisa-ship-b` | `0 16 * * *`       | Ship B |
| `lisa-pull-b` | `0 18 * * *`       | Pull B |

Match flags used by existing `lisa-morning-digest` / `lisa-heartbeat-45`: isolated session, `agentId: lisa-cron`, announce → Telegram `1123023078`. Message body should instruct: read and run `agents/ship-pull-clock.md` for that wave (spawn Cursor ACP with the shipper or puller prompt).

## Verify

```bash
PATH="/opt/homebrew/opt/node@24/bin:$PATH" \
node /Users/linktrend/Projects/openclaw_prime/openclaw.mjs --profile lisa cron list
```

Confirm all four jobs are present and enabled. Do not disable digest/heartbeat jobs while installing.

## Backup

If Lisa ACP is down, optional Cursor Automations remain documented in IDE Development `docs/CURSOR-AUTOMATIONS-SETUP.md` (backup only — not primary).
