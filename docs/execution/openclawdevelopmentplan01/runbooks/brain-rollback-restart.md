# Runbook — Brain Rollback and Restart

**Owner:** OpenClaw Lisa operator (+ Platform for credential revoke / service rollback)
**Domain:** `linkbrain` first; Skills untouched unless shared-risk evidence
**Prerequisites:** Identify evidence tier (FAKE vs LIVE). Never echo secrets.

---

## Rollback order (LIVE-STAGE / LIVE-PROD)

Matches plan Phase 8 / Phase 11:

1. **Disable Brain writes** — `coordinationWrites=false`
2. **Stop Brain drain** — `captureDrain=false` (durable outbox retained)
3. **Stop new capture** — `captureEnqueue=false` (optional but preferred under incident)
4. **Disable Brain MCP** — `mcp.servers.linkbrain.enabled=false`
5. **Disable Brain plugin** if needed — `plugins.entries.linkbrain.enabled=false`
6. **Revoke Brain credential** — Platform only; Brain-scoped credential; leave Skills credential alone
7. **Rollback Brain service** — Platform only if required

Do **not** disable Skills unless evidence proves shared Platform/OpenClaw risk.

### FAKE rollback

Set fake MCP + plugin enabled flags false; discard temporary probe config. No Platform revoke.

---

## Restart with durable outbox

1. Confirm `captureDrain=false` before restart if remote Brain is unhealthy.
2. Restart Lisa Gateway / LaunchAgent using the **operator-owned** procedure for the Lisa profile (do not invent service names here; use the active session’s documented LaunchAgent).
3. After restart: verify native OpenClaw healthy first.
4. Re-enable Brain MCP health only; keep feature flags false until probes pass.
5. Resume drain only when remote health and auth are confirmed.

See also `gateway-restart-durable-outboxes.md`.

---

## Expected sanitized evidence

| Check             | Pass criteria                                                   |
| ----------------- | --------------------------------------------------------------- |
| Writes stopped    | no new coordination/capture remote attempts                     |
| Outbox retained   | local counts/age visible; no secret payloads logged             |
| Skills healthy    | Skills MCP/plugin unchanged and still serving (if it was on)    |
| Native OpenClaw   | channels/sessions continue after Brain disable                  |
| Credential revoke | Platform confirms Brain-only revoke; Skills still authenticates |

---

## Stop conditions / escalate

- Suspected secret in logs → treat as privacy incident; keep Brain disabled; escalate security/Platform.
- Shared identity fault → Platform decision before touching Skills.
- State compatibility uncertain after bad plugin release → disable plugin; preserve DB for diagnosis; escalate OpenClaw owner.

## Related

- Enable/disable/drain: `brain-enable-disable-drain.md`
- MCP pause: `mcp-probe-pause-recover.md`
- Phase packets: `../PHASE-8-STATUS-BLOCKED.md`, `../PHASE-11-STATUS-BLOCKED.md`
