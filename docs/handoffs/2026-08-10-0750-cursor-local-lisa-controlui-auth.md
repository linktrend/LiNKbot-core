# Agent Session Handoff

## Session Metadata

| Field            | Value                                                              |
| ---------------- | ------------------------------------------------------------------ |
| Agent identity   | Cursor Local Agent, mac-mini, desktop-workspace                    |
| Session ID       | `cursor-local-mac-mini-lisa-controlui-auth-20260810-0740`          |
| Orchestrator key | `cursor-local-mac-mini-desktop-workspace-orchestrator`             |
| Objective        | Fix Lisa Control UI auth so each Mac remembers access              |
| Scope            | VPS Lisa `controlUi` device auth; Serve `:8443` + Funnel preserved |
| Started          | 2026-08-10 07:40 Asia/Taipei                                       |
| Ended            | 2026-08-10 07:50 Asia/Taipei                                       |
| Starting branch  | `main`                                                             |
| Ending branch    | `main`                                                             |
| Starting commit  | `383b8b27adf`                                                      |
| Ending commit    | `383b8b27adf`                                                      |
| Starting status  | Pre-existing untracked coordination records                        |
| Ending status    | Device auth re-enabled; Serve/Funnel intact; channels up           |

## Summary

Lisa Control UI on `https://linkserver01.tailf7e13a.ts.net:8443/` was failing because `gateway.controlUi.dangerouslyDisableDeviceAuth=true` forced shared-token auth with no durable per-browser credential. Tagged Tailscale Macs (csp / macbook / mini) have **no Tailscale user LoginName**, so `allowTailscale` whois auth cannot replace the token. OpenClaw’s designed remember path is **device pairing**: each browser stores a device identity + operator device token in localStorage. That flag was removed; Lisa restarted; Serve `:8443` and Funnel `/googlechat` unchanged. MacBook and Mini already have paired operator devices; **csp has none yet** (first-time paste + approve).

## Files Inspected

- `docs/web/control-ui.md`, `docs/gateway/tailscale.md`, `docs/cli/devices.md`
- `src/gateway/auth.ts`, `connect-device-pairing.ts`, `ui/src/app/settings.ts`, device-token storage
- VPS Lisa `openclaw.json` (redacted), Serve/Funnel status, `devices list --json`, journal auth lines

## Files Created

- `docs/agent-sessions/active/cursor-local-mac-mini-lisa-controlui-auth-20260810-0740.md` (moved to completed on closeout)
- This handoff

## Files Modified

- VPS `/var/lib/openclaw/lisa/.openclaw-lisa/openclaw.json`: removed `gateway.controlUi.dangerouslyDisableDeviceAuth`
- Backup: `openclaw.json.bak-controlui-auth-20260809T234251Z`
- Lisa unit restarted (`openclaw-lisa.service`)

## Files Deleted

- None in repo

## Commands Run

- SSH inspect/redact config; whois tagged devices; Serve/Funnel status
- Config edit + `systemctl restart openclaw-lisa.service`
- `devices list --json`; local `wss://…:8443` connect probe; healthz/readyz; Telegram/Google Chat journal smoke

## Decisions

1. **Re-enable device pairing (remove `dangerouslyDisableDeviceAuth`)** — Reason: matches Carlos “token per machine, remembered”; shared gateway token is only sessionStorage. Evidence: docs + UI storage code; live logs `device=no` / `token_missing`; whois has Tags only. Judgment.
2. **Do not switch to Tailscale-identity-only auth** — Tagged Macs lack LoginName; whois path cannot succeed. Keep `allowTailscale: true` for any future user-owned clients. Judgment.
3. **Do not print `OPENCLAW_GATEWAY_TOKEN`** — Carlos retrieves it himself for first-time paste. Carlos goal + security rules.
4. **Skip iPhone Control UI** — Explicit ask; existing iPhone entry is `role:node` mobile pairing, not browser Control UI.

## Tests and Verification

| Check                                          | Result                                                     |
| ---------------------------------------------- | ---------------------------------------------------------- |
| `readyz` / local UI                            | 200 / 200                                                  |
| Serve `:8443` HTML                             | 200 from Mini                                              |
| Funnel `/googlechat`                           | 405 GET (webhook present)                                  |
| Public root                                    | 404 (UI not public)                                        |
| Startup warning `dangerouslyDisableDeviceAuth` | Gone (only acpx approve-all remains)                       |
| Telegram / Google Chat after restart           | started in journal                                         |
| Serve WS connect without device                | `control ui requires device identity` (device auth active) |
| Paired operators                               | MacBook + Mac Mini present; **csp absent**                 |
| Interactive browser login                      | Not run in this session (Carlos must confirm once per Mac) |

## Problems and Blockers

- First-time or cleared-browser Macs still need a one-time gateway token paste + possibly `devices approve` (csp definitely).
- Shared token alone no longer bypasses device identity over Serve.

## Uncommitted Changes

- This session: session record + handoff (untracked docs).
- Pre-existing: other untracked 2026-08-09/10 session/handoff docs (untouched content-wise).

## Risks and Unknowns

- If MacBook/Mini cleared site data for `:8443`, they must re-pair (new device IDs).
- Memory-pressure warning on VPS remains (pre-existing).
- Interactive “sticks across browser restart” not proven in-agent; relies on existing paired rows + localStorage design.

## Remaining Work

1. Carlos: open Control UI on csp, macbook, mini; confirm remember after close/reopen.
2. Approve pending pairing for csp (and any Mac that cleared site data).
3. Orchestrator refresh `docs/current-status.md`.

## Exact Next Action

Carlos opens `https://linkserver01.tailf7e13a.ts.net:8443/` on each Mac (see first-time steps in session closeout / agent reply).

## Questions for Carlos

1. On MacBook and Mini: does the dashboard connect without pasting a token (existing pairing)?
2. On csp: after first paste, did pairing approval succeed?

## Questions for the Orchestrator or Next Agent

- Close this session after dashboard refresh.
- Do not re-enable `dangerouslyDisableDeviceAuth`.

## Confidence

90% for root cause + config fix; ~75% that MacBook/Mini reconnect without paste if localStorage intact; csp needs first-time flow.

## Amendments

_(none yet)_
