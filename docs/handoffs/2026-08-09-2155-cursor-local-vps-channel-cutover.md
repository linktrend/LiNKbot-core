# Agent Session Handoff

## Session Metadata

| Field          | Value                                                                       |
| -------------- | --------------------------------------------------------------------------- |
| Agent identity | Cursor Local Agent, mac-mini, desktop-workspace                             |
| Objective      | Move Lisa channels to VPS; create prod Brain/Skills DB secrets              |
| Scope          | Mac Lisa channel disable; VPS Telegram enable; GSM/Supabase prod DB secrets |
| Started        | 2026-08-09 21:47 Asia/Taipei                                                |
| Ended          | 2026-08-09 21:55 Asia/Taipei                                                |

## Summary

Telegram was moved from Mac Lisa to VPS Lisa. Mac Telegram and Google Chat are disabled; VPS Telegram (`@lisaprime_bot`) is polling successfully. Google Chat remains disabled on the VPS because its webhook still targets the Mac Tailscale Funnel URL and the VPS has no Tailscale/public hostname path. Production Supabase project `linkplatform-prod` was restored from paused to healthy. Production login roles and enabled GSM secrets `LINKTREND_BRAIN_PROD_DATABASE_URL` and `LINKTREND_SKILLS_PROD_DATABASE_URL` were created. VPS Brain/Skills remain on stage DB mounts because production schemas are incomplete relative to stage.

## Decisions

1. Enable VPS Telegram only; leave VPS Google Chat disabled until a new webhook target exists.
2. Create prod DB secrets, but do not cut Brain/Skills over to prod yet (prod `lbrain`/`lskills` table counts are lower than stage).
3. Rotate DB role passwords after local terminal exposure of the first generated values; GSM stores the rotated versions.

## Verification

- Mac: channels.telegram=false, channels.googlechat=false; gateway live; plugin list after reload has no telegram.
- VPS: openclaw-lisa/linkbrain/linkskills active; health/ready OK; telegram provider started for `@lisaprime_bot`.
- GSM: both prod DB secrets have enabled version 1.
- Supabase: `linkplatform-prod` ACTIVE_HEALTHY.

## Remaining

1. Google Chat cutover needs either Tailscale on the VPS (auth key) or a real public hostname + reverse proxy, then Google Chat app URL update.
2. Apply missing prod Brain/Skills migrations before switching VPS services off stage DB mounts.
3. Optional: wire systemd to keyless WIF secret fetch for prod secrets.
