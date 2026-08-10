# Agent Session Handoff

## Session Metadata

| Field            | Value                                                    |
| ---------------- | -------------------------------------------------------- |
| Agent identity   | Cursor Local Agent, mac-mini, desktop-workspace          |
| Session ID       | `cursor-local-mac-mini-vps-base-1-20260809-2017`         |
| Orchestrator key | `cursor-local-mac-mini-desktop-workspace-orchestrator`   |
| Objective        | Prepare and harden VPS-BASE-1 without application deploy |
| Scope            | Hetzner VPS base OS only                                 |
| Started          | 2026-08-09 20:17 Asia/Taipei                             |
| Ended            | 2026-08-09 20:18 Asia/Taipei                             |
| Starting branch  | `main`                                                   |
| Ending branch    | `main`                                                   |
| Starting commit  | `383b8b27adf`                                            |
| Ending commit    | `383b8b27adf`                                            |
| Starting status  | Pre-existing untracked coordination records              |
| Ending status    | This session record and handoff are uncommitted          |

## Summary

VPS-BASE-1 was confirmed as a newly provisioned Ubuntu 24.04.4 LTS host and prepared as a hardened base server. The host now uses `linktrend` key-only administration, denies direct root and password SSH, runs UFW default-deny inbound with only 22/80/443 allowed for IPv4 and IPv6, has current Node.js 24/Corepack/pnpm, security updates including the current booted kernel, UTC chrony synchronization, unattended upgrades, bounded journald/logrotate, and an 8 GiB root-owned swapfile. OpenClaw and LiNK services were not deployed.

## Files Inspected

- `AGENTS.md`, repository coordination rules, current status, active session records, and handoff template.
- Repository `package.json` for the Node.js engine and exact pnpm package-manager pin.
- Fresh VPS identity, OS, users, workloads, disks, memory, addresses, services, listeners, swap, and top-level data.
- Effective SSH configuration, UFW rules, package versions, time synchronization, systemd service state, journald usage, and logrotate validation after reboot.

## Files Created

- `docs/agent-sessions/completed/cursor-local-mac-mini-vps-base-1-20260809-2017.md`
- `docs/handoffs/2026-08-09-2017-cursor-local-vps-base-1.md`
- Local redacted evidence outside the repository: `/Users/linktrend/.linktrend-evidence/vps-base-1-20260809-2017.md`

## Files Modified

- None in the application or deployment source tree.

## Files Deleted

- None.

## Commands Run

- Read-only first-connection SSH identity and fresh-host workload inspection using the dedicated key with `StrictHostKeyChecking=accept-new`.
- Package/security update, signed NodeSource APT setup, Node.js 24/Corepack/pnpm installation, chrony/timezone, user/sudo, directory, journald, logrotate, unattended-upgrades, and swap setup.
- Dedicated `linktrend` SSH and `sudo -n` verification.
- SSH configuration validation/reload and live root recovery-session guard.
- UFW IPv4/IPv6 rule setup and activation.
- Required reboot and post-reboot reconnection.
- Post-reboot SSH rejection, firewall, listener, version, time, swap, logging, directory, and reboot-marker checks.

## Decisions

- Used the official signed NodeSource APT repository for Node.js 24 rather than an unsigned or ad hoc installer; implementation judgment based on the requested official-maintained-source constraint.
- Used `chrony` as the active time-sync service and disabled `systemd-timesyncd` to avoid competing time daemons; implementation judgment.
- Used a root-owned `/etc/sudoers.d/90-linktrend` `NOPASSWD:ALL` rule so the key-only automation/admin contract can satisfy `sudo -n true`; Carlos authorized the production server setup.
- Created an 8 GiB mode-0600 swapfile only because the fresh host had no swap; did not attempt encrypted swap because no key-handling contract was established.
- Kept the four requested base directories root-owned with restrictive modes; no agent profile, secret, or application state was created.

## Tests and Verification

- Ubuntu 24.04.4 LTS and expected hostname/public addresses: pass.
- Freshness check: only root-capable root account, no application workload/data, no swap at first inspection: pass.
- `linktrend` key login and `sudo -n true`: pass.
- Effective SSH policy: public-key only, password/challenge-response disabled, direct root login disabled: pass.
- New root SSH login and password SSH tests: both rejected.
- UFW active with only 22/tcp, 80/tcp, and 443/tcp for IPv4 and IPv6: pass.
- Node.js `v24.19.0`, Corepack `0.35.0`, pnpm `11.2.2`, Python `3.12.3`, Git `2.43.0`, SQLite `3.45.1`, curl `8.5.0`, and htop `3.3.0`: pass.
- UTC timezone, chrony active, and NTP synchronized: pass.
- 8 GiB swapfile, mode 0600, swappiness 10: pass.
- journald usage/limits and `logrotate -d /etc/logrotate.conf`: pass.
- Required reboot after `libc6`/`apparmor` updates: completed; reboot-required marker absent afterward.
- Security update audit found a dependency-changing `linux-image-virtual` update; `apt-get full-upgrade` installed kernel `6.8.0-137-generic`, a second reboot completed, and the final reboot-required marker is absent. Five phased `noble-updates` packages remain; no `noble-security` package remains pending.
- Listeners after reboot: SSH on 22 plus loopback/system DNS, chrony, and DHCP listeners; no application/database listener.

## Problems and Blockers

- The first baseline script stopped after package installation because it wrote the journald drop-in before creating its parent directory. The setup was resumed idempotently; no security policy or SSH change was lost.
- One post-reboot validation wrapper initially checked the login identity inside a sudo shell; the corrected admin and SSH rejection checks passed.
- A follow-up package audit found and resolved the pending security kernel update; only phased non-security `noble-updates` packages remain and unattended upgrades is enabled.
- No remaining blocker for base-server readiness.

## Uncommitted Changes

- This session: the session record and handoff above.
- Pre-existing: all repository status shown at session start, including other untracked coordination records and existing worktrees/branches.
- No application code, runtime profile, secret, or cloud configuration was changed.

## Risks and Unknowns

- `NOPASSWD:ALL` gives the dedicated key holder full root authority; this is intentional for the requested admin/automation contract and must remain protected as a high-value SSH key.
- Ports 80/443 are allowed in UFW but no service is listening yet; this is base readiness, not application exposure proof.
- Recovery depends on the dedicated key or the Hetzner provider console/rescue path; root SSH is intentionally disabled.

## Remaining Work

- None within VPS-BASE-1 base preparation.
- Any OpenClaw, LiNK service, DNS, certificate, secret, or deployment work requires a separate explicit authorization and readiness task.

## Exact Next Action

Use the redacted evidence file as the base deployment handoff. Before any application deployment, define the service ownership, secret retrieval, ports, backup/restore, health checks, and rollback plan in a separate authorized task.

## Questions for Carlos

None.

## Questions for the Orchestrator or Next Agent

None. Please refresh `docs/current-status.md` from the completed session record; this task did not edit the shared dashboard.

## Confidence

98% for the requested base-server setup and validation. No application deployment readiness beyond the stated OS/base prerequisites is implied.

## Amendments

Append dated factual corrections here. Never silently rewrite an earlier handoff.
