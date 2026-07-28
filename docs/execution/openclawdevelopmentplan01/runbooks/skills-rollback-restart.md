# Runbook — Skills Rollback and Restart

**Owner:** OpenClaw Lisa operator (+ Platform for credential revoke / service rollback)
**Domain:** `linkskills` first; Brain remains enabled if healthy
**Prerequisites:** Identify evidence tier (FAKE vs LIVE). Never echo secrets. Never add conversation hooks to Skills.

---

## Rollback order (LIVE-STAGE / LIVE-PROD)

Matches plan Phase 9 / Phase 12:

1. **Disable Skills execution** — `governedExecution=false`
2. **Stop Skills telemetry drain** — `telemetryDrain=false` (outbox retained)
3. **Stop new telemetry** — `telemetryEnqueue=false` (preferred under incident)
4. **Disable Skills MCP** — `mcp.servers.linkskills.enabled=false`
5. **Disable Skills plugin** if needed — `plugins.entries.linkskills.enabled=false`
6. **Revoke Skills credential** — Platform only; Skills-scoped; leave Brain credential alone
7. **Rollback Skills service** — Platform only if required

**Brain remains enabled if healthy.**

### FAKE rollback

Disable fake MCP + plugin; discard temporary probe config. No Platform revoke.

---

## Restart with durable telemetry outbox

1. Keep `telemetryDrain=false` if remote Skills is unhealthy.
2. Restart Gateway / Lisa LaunchAgent per operator-owned Lisa procedure.
3. Verify native OpenClaw + Brain (if enabled) first.
4. Re-enable Skills MCP health/discovery only; execution and telemetry remain off until probes pass.
5. Resume `telemetryDrain` only after health + auth + profile compatibility confirmed.

See `gateway-restart-durable-outboxes.md`.

---

## Expected sanitized evidence

| Check             | Pass criteria                                       |
| ----------------- | --------------------------------------------------- |
| Execution stopped | no new governed runs                                |
| Outbox retained   | telemetry queue counts only; no conversation fields |
| Brain healthy     | Brain MCP/plugin unchanged                          |
| Native OpenClaw   | native skills and channels continue                 |
| Credential revoke | Platform confirms Skills-only revoke                |

---

## Stop conditions / escalate

- Conversation/Brain payload in Skills path → critical privacy incident; full Skills disable + revoke; escalate immediately.
- Hash/profile mismatch storm → keep execution off; fall back to last-verified bundle policy (Skills owner).
- Shared Platform identity fault → Platform decision before touching Brain.

## Related

- Enable/disable/drain: `skills-enable-disable-drain.md`
- MCP pause: `mcp-probe-pause-recover.md`
- Phase packets: `../PHASE-9-STATUS-BLOCKED.md`, `../PHASE-12-STATUS-BLOCKED.md`
