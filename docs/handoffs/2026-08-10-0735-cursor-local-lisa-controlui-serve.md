# Agent Session Handoff

## Session Metadata

| Field            | Value                                                             |
| ---------------- | ----------------------------------------------------------------- |
| Agent identity   | Cursor Local Agent, mac-mini, desktop-workspace                   |
| Session ID       | `cursor-local-mac-mini-lisa-controlui-serve-20260810-0730`        |
| Orchestrator key | `cursor-local-mac-mini-desktop-workspace-orchestrator`            |
| Objective        | Private Tailscale Serve for Lisa Control UI; preserve Funnel Chat |
| Scope            | VPS Tailscale Serve/Funnel; Lisa `allowedOrigins`; no Eric deploy |
| Started          | 2026-08-10 07:30 Asia/Taipei                                      |
| Ended            | 2026-08-10 07:35 Asia/Taipei                                      |
| Starting branch  | `main`                                                            |
| Ending branch    | `main`                                                            |
| Starting commit  | `383b8b27adf`                                                     |
| Ending commit    | `383b8b27adf`                                                     |
| Starting status  | Pre-existing untracked coordination records                       |
| Ending status    | Control UI Serve on `:8443` live; Funnel `/googlechat` restored   |

## Summary

Lisa Control UI is reachable on the Tailscale tailnet at `https://linkserver01.tailf7e13a.ts.net:8443/` via Tailscale **Serve** (private). Google Chat stays on **Funnel** `https://linkserver01.tailf7e13a.ts.net/googlechat` (public HTTPS). Same-port Serve+Funnel on `:443` is not supported by Tailscale — Serve on `:443` cleared Funnel, so UI was moved to HTTPS `:8443`. Gateway remains loopback-only on `127.0.0.1:18790`. Eric was not deployed.

## Files Inspected

- `docs/gateway/tailscale.md`, `docs/web/control-ui.md`
- VPS `/var/lib/openclaw/lisa/.openclaw-lisa/openclaw.json` (secrets redacted in notes)
- `sudo tailscale serve|funnel status` (+ JSON / LocalAPI)

## Files Created

- `docs/agent-sessions/active/cursor-local-mac-mini-lisa-controlui-serve-20260810-0730.md` (moved to completed on closeout)
- This handoff

## Files Modified

- VPS Tailscale Serve/Funnel config (persistent via LocalAPI POST serve-config)
- VPS Lisa `openclaw.json`: added `https://linkserver01.tailf7e13a.ts.net:8443` to `gateway.controlUi.allowedOrigins`; kept `tailscale.mode=off`, `preserveFunnel=true`
- Backup: `openclaw.json.bak-controlui-serve-<timestamp>` beside the live config

## Files Deleted

- None in repo. Transient Serve-on-443 state was replaced by the final split config.

## Commands Run

- SSH inspect listen/bind, serve/funnel status, redacted config dump
- LocalAPI POST serve-config restoring Funnel `/googlechat` on 443 + Serve `/` on 8443
- `systemctl restart openclaw-lisa.service`
- Local `curl` healthz/readyz/root; Mac tailnet `curl` to Serve `:8443` and public Funnel/root

## Decisions

1. **Serve UI on `:8443`, Funnel Chat on `:443`** — Reason: Tailscale same-port Serve vs Funnel mutual exclusion (Serve on 443 removed Funnel). Evidence: CLI message `Removing Funnel...`; official Funnel docs. Impact: browser URL includes `:8443`. Judgment (Carlos goal: private UI + public Chat).
2. **Do not enable `gateway.tailscale.mode=serve`** — Reason: OpenClaw `preserveFunnel` skips Serve when Funnel covers the gateway port; managing Serve externally avoids clobbering Funnel. Evidence: `docs/gateway/tailscale.md`, `server-tailscale.ts` tests. Judgment.
3. **Keep gateway bind loopback** — Prefer Serve reverse-proxy over binding `0.0.0.0`/tailnet. Matches OpenClaw recommended pattern.
4. **No remote ACL mutation** — CLI cannot safely edit tailnet ACL policy; Mac proof already reached `:8443`. Document paste-ready ACL for Carlos if needed.

## Tests and Verification

| Check                                                      | Result                                                           |
| ---------------------------------------------------------- | ---------------------------------------------------------------- |
| Lisa listen `127.0.0.1:18790`                              | Yes                                                              |
| Local UI `/`                                               | HTTP 200 HTML                                                    |
| Local `/healthz` `/readyz` after restart                   | 200 / 200                                                        |
| Mac → `https://linkserver01.tailf7e13a.ts.net:8443/`       | HTTP 200 HTML                                                    |
| Public `https://linkserver01.tailf7e13a.ts.net/`           | HTTP 404 (UI not public)                                         |
| Funnel `https://linkserver01.tailf7e13a.ts.net/googlechat` | HTTP 405 on GET (webhook present; POST not re-proven end-to-end) |
| Telegram after restart                                     | `@lisaprime_bot` polling started                                 |
| Google Chat after restart                                  | webhook starting logged                                          |
| ACL policy file read                                       | Not available via CLI (no admin edit)                            |

Not tested: interactive browser WebSocket login UX; Google Chat live message round-trip after Funnel restore.

## Problems and Blockers

- Brief Serve-on-443 attempt removed Funnel until LocalAPI restore.
- `tailscale funnel` CLI hung on node-attr approval message; LocalAPI POST succeeded without that hang.
- Journal noted memory pressure warning and Ollama unreachable on VPS (pre-existing / unrelated to Serve).

## Uncommitted Changes

- This session: new session record + handoff (untracked docs).
- Pre-existing: other untracked `docs/agent-sessions/*` and `docs/handoffs/*` from 2026-08-09 VPS work (untouched content-wise).

## Risks and Unknowns

- Serve/Funnel config is on the node; a future `tailscale serve reset` or OpenClaw `tailscale.mode=serve` without care could break Funnel or UI.
- First browser open may still prompt for gateway token if Tailscale identity header auth does not satisfy the WS handshake (token exists via env; not printed).
- `dangerouslyDisableDeviceAuth=true` remains enabled (pre-existing); security audit warning on startup.

## Remaining Work

1. Carlos confirm browser UI from iPhone + Macs.
2. Optional ACL hardening if any tagged device fails TCP 443/8443 to `tag:linkserver01`.
3. Eric later: second profile/port + separate Serve HTTPS port/hostname (do not share Lisa 18790/8443).
4. Orchestrator refresh `docs/current-status.md`.

## Exact Next Action

Carlos: open `https://linkserver01.tailf7e13a.ts.net:8443/` while on Tailscale.

## Questions for Carlos

1. Does the Control UI connect without pasting a token (Tailscale identity), or does it ask for the gateway token?
2. Want ACL policy tightened to only `tag:apple-*` → `tag:linkserver01` ports 443/8443?

## Questions for the Orchestrator or Next Agent

- Close this session to `completed/` after dashboard refresh.
- Do not deploy Eric in this path.

## Confidence

95% for Serve reachability and Funnel path presence; ~85% for zero-friction browser auth without token paste (not interactively verified).

## Amendments

_(none yet)_
