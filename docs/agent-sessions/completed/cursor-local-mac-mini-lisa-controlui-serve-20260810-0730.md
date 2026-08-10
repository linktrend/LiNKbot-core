# Agent Session Record

## Identity

| Field             | Value                                                                 |
| ----------------- | --------------------------------------------------------------------- |
| Agent type        | Cursor Local Agent                                                    |
| Platform          | Cursor                                                                |
| Machine           | mac-mini (coordination checkout; proof also from Mac on same tailnet) |
| Surface           | desktop-workspace                                                     |
| Execution         | local                                                                 |
| Role              | lisa                                                                  |
| Orchestrator key  | cursor-local-mac-mini-desktop-workspace-orchestrator                  |
| Coordination home | `/Users/linktrend/Projects/openclaw_prime`                            |
| Session ID        | `cursor-local-mac-mini-lisa-controlui-serve-20260810-0730`            |
| Started           | 2026-08-10 07:30 Asia/Taipei                                          |
| Last updated      | 2026-08-10 07:36 Asia/Taipei                                          |

## Work

| Field           | Value                                                                         |
| --------------- | ----------------------------------------------------------------------------- |
| Objective       | Private Tailscale Serve for Lisa Control UI on VPS; keep Funnel `/googlechat` |
| Branch          | `main` (docs-only session/handoff; no application branch required)            |
| Starting commit | `383b8b27adf`                                                                 |
| Status          | `complete`                                                                    |
| Handoff         | `docs/handoffs/2026-08-10-0735-cursor-local-lisa-controlui-serve.md`          |

## Ownership Scope

- Files or components expected to inspect: VPS Lisa `openclaw.json` (redacted), Tailscale serve/funnel status, loopback gateway, OpenClaw Tailscale/Control UI docs.
- Files or components expected to modify: VPS Tailscale Serve/Funnel config; Lisa `gateway.controlUi.allowedOrigins` (+ backup); this session record and handoff.
- Runtime, service, profile, or deployment scope: `openclaw-lisa.service` on linkserver01; profile `/var/lib/openclaw/lisa/.openclaw-lisa`.
- Explicitly excluded: Eric deploy; Tailscale auth-key rotation; printing secrets; public Funnel for Control UI; ACL remote mutation without readable safe edit path.

## Coordination

- Parent or matching Orchestrator: Carlos direct assignment; Cursor local mac-mini desktop-workspace Orchestrator.
- Related sessions: prior VPS cutover/PACI sessions completed; active `cursor-local-mac-mini-lisa-direct-2-20260809-1911` historically owned VPS Lisa install (stale “Lisa stopped” note — Lisa is live on VPS).
- Overlap risk: Medium — touches live VPS Lisa config/restart and Tailscale paths already used by Google Chat Funnel.
- Pre-existing changes to preserve: untracked prior session/handoff docs; other worktrees; Funnel `/googlechat`.
- Relayed or directly verified: direct VPS SSH + Mac MagicDNS curl proof.

## Progress

- 2026-08-10 07:30: Confirmed Lisa loopback `127.0.0.1:18790`, Control UI HTML 200 locally; Funnel only `/googlechat`.
- 2026-08-10 07:31: Attempted Serve `/` on `:443`; Tailscale removed Funnel (same-port Serve/Funnel mutual exclusion). Restored Funnel `:443` `/googlechat` and placed Control UI on Serve HTTPS `:8443` via LocalAPI.
- 2026-08-10 07:33: Added `https://linkserver01.tailf7e13a.ts.net:8443` to `allowedOrigins`; restarted Lisa; healthz/readyz 200; Google Chat webhook + Telegram started.
- 2026-08-10 07:34: From Mac on tailnet: Serve UI HTTPS 200; public root `:443` 404 (UI not public); Funnel `/googlechat` responds (405 on GET — expected for webhook POST).

## Next Action

- Exact next action: Carlos open `https://linkserver01.tailf7e13a.ts.net:8443/` from phone/Macs; Orchestrator refresh dashboard; close this session to `completed/`.
- Owner: Carlos (browser) / Orchestrator (dashboard).
- Questions for Carlos: If Control UI WebSocket asks for a token, paste the existing gateway token (env `OPENCLAW_GATEWAY_TOKEN`) — do not rotate. Optional ACL hardening if any tagged device cannot reach `:8443`.
- Questions for the Orchestrator or next agent: Eric later needs second profile/port + second Serve HTTPS port or hostname; do not reuse Lisa `:8443`/18790.
