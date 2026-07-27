# Operator Runbooks — Brain / Skills Independent Controls

**Recorded:** 2026-07-27 19:17 Asia/Taipei  
**Branch:** `issue/ocp-openclawdevelopmentplan01`  
**Scope:** OpenClaw Prime Lisa adapters only  
**Policy:** No live Lisa/Platform mutation until Phase 7+ gates clear. Never echo secrets.

## Evidence tiers (read first)

| Label | Meaning | May claim environment readiness? |
| ----- | ------- | -------------------------------- |
| **FAKE** | Local stdio/HTTP fakes from `mcp-templates/*stdio.fake.json` and `extensions/*/fake/` | **No** |
| **TEMPLATE** | Sanitized HTTP/OAuth templates with `${ENV}` / authProfile placeholders | **No** (not wired) |
| **LIVE-STAGE** | Real Platform stage endpoints + issued credentials | Only after Phase 7 sign-off |
| **LIVE-PROD** | Real production endpoints + production credentials | Only after Phase 11/12 prereqs |

`fake ≠ live`. Phase 6 integrated fake QA does not unlock these LIVE paths.

## Index

| Runbook | Domain | Controls |
| ------- | ------ | -------- |
| [brain-enable-disable-drain.md](./brain-enable-disable-drain.md) | Brain | enable / disable / read / enqueue / drain |
| [skills-enable-disable-drain.md](./skills-enable-disable-drain.md) | Skills | enable / disable / discovery / execution / telemetry |
| [brain-rollback-restart.md](./brain-rollback-restart.md) | Brain | rollback order + Gateway/plugin restart |
| [skills-rollback-restart.md](./skills-rollback-restart.md) | Skills | rollback order + Gateway/plugin restart |
| [mcp-probe-pause-recover.md](./mcp-probe-pause-recover.md) | Both | MCP probe, repeated-failure pause, recovery |
| [gateway-restart-durable-outboxes.md](./gateway-restart-durable-outboxes.md) | Both | restart with durable outboxes retained |

## Template sources

All MCP shapes: `docs/execution/openclawdevelopmentplan01/mcp-templates/`

| File | Tier |
| ---- | ---- |
| `linkbrain.stdio.fake.json` | FAKE |
| `linkskills.stdio.fake.json` | FAKE |
| `linkbrain.http.secretref.template.json` | TEMPLATE → LIVE when Platform fills refs |
| `linkskills.http.secretref.template.json` | TEMPLATE → LIVE when Platform fills refs |
| `linkbrain.oauth.authprofile.template.json` | TEMPLATE (preferred auth path) |
| `linkskills.oauth.authprofile.template.json` | TEMPLATE (preferred auth path) |
| `tool-allowlists.yaml` | documentation mirror of §9 allowlists |

Plugin flag defaults (all **false** until deliberately enabled):

- Brain: `mcpRead`, `captureEnqueue`, `captureDrain`, `coordinationWrites`
- Skills: `mcpDiscoveryRead`, `governedExecution`, `telemetryEnqueue`, `telemetryDrain`

## Independence rules

1. Disable or revoke **one** domain; leave the other running.
2. Never share Brain and Skills credentials.
3. Skills never gets conversation hooks (`allowConversationAccess` must not be set on Skills).
4. Brain conversation hooks require explicit `plugins.entries.linkbrain.hooks.allowConversationAccess=true` only when capture/coordination is authorized.

## Secret handling

- Document **names** only (`LINKTREND_LINKBRAIN_STAGE_MCP_TOKEN`, etc.).
- Never paste token values into Git, chat, docs, logs, or process argv.
- Prefer Platform OAuth `authProfileId`; else env SecretRef injection per Phase 5 packet.

## Related gates

- Phase 7: `../PHASE-7-DECISION-PACKET-PLATFORM-STAGE.md`
- Phase 5 auth: `../PHASE-5-DECISION-PACKET-PLATFORM-AUTH.md`
- Phases 8–12 blocked packets: `../PHASE-*-STATUS-BLOCKED.md`
