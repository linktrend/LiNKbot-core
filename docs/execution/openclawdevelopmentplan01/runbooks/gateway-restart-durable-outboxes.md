# Runbook — Gateway Restart with Durable Outboxes

**Owner:** OpenClaw Lisa operator
**Scope:** Lisa Gateway / LaunchAgent restart while Brain and/or Skills outboxes must survive
**Prerequisites:** Know which evidence tier you are in. FAKE restarts use local processes only. LIVE restarts require change-window awareness. Never echo secrets. Never run `security`/Keychain commands.

---

## Principles

1. Outboxes are durable in plugin keyed-store namespaces — restart must **not** require wiping state.
2. Prefer **drain off** before restart if the remote domain is unhealthy.
3. Restart is **not** enablement — after restart, feature flags remain as left unless you deliberately change them.
4. Domains stay independent: restart does not authorize enabling a previously disabled domain.

---

## Pre-restart checklist

| Step                                          | FAKE     | LIVE-STAGE / LIVE-PROD          |
| --------------------------------------------- | -------- | ------------------------------- |
| Record current flag snapshot (Brain + Skills) | yes      | yes                             |
| Set affected drain false if remote unhealthy  | optional | **required** if remote failing  |
| Confirm MCP templates / refs unchanged        | n/a      | yes (no secret values in files) |
| Confirm native OpenClaw needs preserved       | yes      | yes                             |
| Change window / incident ticket               | n/a      | yes                             |

Flag names to snapshot:

- Brain: `enabled`, `mcpRead`, `captureEnqueue`, `captureDrain`, `coordinationWrites`
- Skills: `enabled`, `mcpDiscoveryRead`, `governedExecution`, `telemetryEnqueue`, `telemetryDrain`
- MCP: `mcp.servers.linkbrain.enabled`, `mcp.servers.linkskills.enabled`

---

## Restart procedure

### FAKE / developer

Stop any local fake HTTP/stdio processes you started. Restart your non-Lisa probe Gateway if used. Do **not** restart the live Lisa LaunchAgent for FAKE work.

### LIVE (authorized operators only)

1. Use the operator-owned Lisa service procedure for profile `lisa` (LaunchAgent documented in the active briefing — inspect sanitized; do not paste private paths into public docs beyond the standard profile name).
2. Wait for Gateway health.
3. Verify native channels/status without dumping credentials.
4. Verify each enabled domain’s MCP health independently (`mcp-probe-pause-recover.md`).
5. Only then re-enable drain flags that were intentionally on before the incident (or remain off if still recovering).

---

## Post-restart expected evidence

| Check               | Pass                                                         |
| ------------------- | ------------------------------------------------------------ |
| Native OpenClaw     | healthy without Brain/Skills                                 |
| Outbox retention    | pre-restart queue depth/age still present (sanitized counts) |
| Brain independence  | Skills flags unchanged by Brain recovery                     |
| Skills independence | Brain flags unchanged by Skills recovery                     |
| No secret leakage   | restart logs contain no tokens/headers/bodies                |

---

## Failure / escalate

- Outbox missing or corrupt after restart → stop drains; preserve DB files for diagnosis; escalate OpenClaw owner; do not “repair” by enabling the other domain.
- Native regression after restart → disable the most recently enabled domain first (plan rollback matrix).
- Shared Platform fault → escalate Platform before dual-domain disable.

## Related

- `brain-rollback-restart.md` / `skills-rollback-restart.md`
- Phase 10 rehearsal: `../PHASE-10-STATUS-BLOCKED.md`
