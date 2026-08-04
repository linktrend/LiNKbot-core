# Handoff — Lisa digest cron failure + Telegram format flip

## Summary

Lisa did not “die” after midnight. Heartbeats ran through 06:45. At 08:30 `lisa-morning-digest` failed because MiniMax appended `2>&1` to `tools/bin/lisa-safe gmail-triage --max 5`, which yolo-mode hard-denies as opaque shell. Cron treated that as a fatal run and Telegram got only the Exec failed alert — then silence until the next heartbeat slot (10:45). Separately, heartbeat/digest templates were shown inside Markdown code fences, so some announces rendered as Telegram “Text” code cards and others as plain bubbles.

## Files inspected

- ~/.openclaw-lisa logs, SQLite cron_jobs, gateway LaunchAgent
- linkbots/lisa/Personality files/HEARTBEAT.md, agents/morning-digest.md, AGENTS.md, ship-pull-clock.md
- src/agents/embedded-agent-runner/failure-signal.ts (+ helpers cron outcome path)

## Files created/modified

- Personality: HEARTBEAT.md, agents/morning-digest.md, AGENTS.md, agents/ship-pull-clock.md, VERSION.md (addendum 16)
- Live sync: ~/.openclaw-lisa/workspace/{HEARTBEAT,AGENTS,VERSION,agents/morning-digest,agents/ship-pull-clock}.md
- Engine: failure-signal.ts + test; live patch in dist/embedded-agent-BJitPwsb.js and dist/embedded-agent-CqOLeMzf.js
- Cron: HARD EXEC / plain-Telegram suffix on lisa-morning-digest + lisa-heartbeat-45 payloads; restored ~/.openclaw-lisa/cron/jobs.json from SQLite

## Commands / validation

- failure-signal unit tests: 9/9 passed via `node scripts/run-vitest.mjs src/agents/embedded-agent-runner/failure-signal.test.ts`
- `launchctl kickstart -k gui/$UID/ai.openclaw.lisa`
- Force-run digest `openclaw.mjs --profile lisa cron run fbb95594-… --wait`
- Evidence: digest last_run_status=ok, delivery=delivered, consecutiveErrors=0; Telegram messageId=699; heartbeat messageId=697

## Decisions

- Opaque denylist SYSTEM_RUN_DENIED is not fatalForCron (recoverable). Approval-required denials remain fatal.
- Remove copyable ```text fences from Lisa Telegram output templates; keep bash example fences for commands only.

## Problems / risks

- Full `pnpm build` not run; dist was surgically patched — next full build will regenerate hashes; keep source as SOT.
- Writing incomplete jobs.json briefly risked durability; full 11-job snapshot restored. Doctor may rename jobs.json to .migrated on startup.
- Gateway restart interrupted one in-flight digest attempt before the successful catch-up.

## Remaining work

- Commit on branch when Carlos/Orchestrator wants.
- Optional full rebuild before broader dist changes.
- Carlos visual confirm of Telegram format for #699.

## Exact next action

Ask Carlos to glance at the newest Morning Digest in Telegram; if it is plain text and complete, treat recovery as done.

## Confidence

95%

## Amendment — 2026-07-27 13:45 Asia/Taipei

The live `dist/` patch and the source-level failure classification above accurately record what this session did, but they are not the final integration decision. During takeover review, the Codex Desktop Orchestrator found that suppressing an unrecovered execution denial could let a failed cron continue and report misleading success. The source change was therefore removed from PR #34. Lisa's durable recovery rule is now personality-level: retry the exact analyzable, unpiped command once; if it still fails, preserve the failure as fatal. After the safe source is merged, a full build and Lisa restart will replace the temporary live `dist/` patch before final health verification.
