# Operator Runbooks — Brain / Skills Independent Controls

**Recorded:** 2026-07-27 19:17 Asia/Taipei
**Updated:** 2026-07-28 Asia/Taipei (wave 6 — all 14 plan §19 runbooks at non-live tier)
**Branch:** `issue/ocp-openclawdevelopmentplan01`
**Scope:** OpenClaw Prime Lisa adapters only
**Policy:** No live Lisa/Platform mutation until Phase 7+ gates clear. Never echo secrets.

## Evidence tiers (read first)

| Label          | Meaning                                                                               | May claim environment readiness? |
| -------------- | ------------------------------------------------------------------------------------- | -------------------------------- |
| **FAKE**       | Local stdio/HTTP fakes from `mcp-templates/*stdio.fake.json` and `extensions/*/fake/` | **No**                           |
| **TEMPLATE**   | Sanitized HTTP/OAuth templates with `${ENV}` / authProfile placeholders               | **No** (not wired)               |
| **LIVE-STAGE** | Real Platform stage endpoints + issued credentials                                    | Only after Phase 7 sign-off      |
| **LIVE-PROD**  | Real production endpoints + production credentials                                    | Only after Phase 11/12 prereqs   |

`fake ≠ live`. Phase 6 integrated fake QA does not unlock these LIVE paths.

## Plan §19 index (14 required)

| #   | Required runbook                                                         | File                                                     | Non-live rehearsal |
| --- | ------------------------------------------------------------------------ | -------------------------------------------------------- | ------------------ |
| 1   | Brain enable/disable/read-only/write/drain                               | [brain-enable-disable-drain.md](./brain-enable-disable-drain.md) | 2026-07-28 wave 6 |
| 2   | Skills enable/disable/discovery/execution/telemetry                      | [skills-enable-disable-drain.md](./skills-enable-disable-drain.md) | 2026-07-28 wave 6 |
| 3   | Brain credential issue/rotate/revoke/recover                             | [brain-credential-rotate-revoke.md](./brain-credential-rotate-revoke.md) | 2026-07-28 wave 6 |
| 4   | Skills credential issue/rotate/revoke/recover                            | [skills-credential-rotate-revoke.md](./skills-credential-rotate-revoke.md) | 2026-07-28 wave 6 |
| 5   | MCP probe, repeated-failure pause, recovery                              | [mcp-probe-pause-recover.md](./mcp-probe-pause-recover.md) | 2026-07-28 wave 6 |
| 6   | Plugin/Gateway restart with durable outboxes                             | [gateway-restart-durable-outboxes.md](./gateway-restart-durable-outboxes.md) | 2026-07-28 wave 6 |
| 7   | Queue pressure, reject-new, capacity, dead-letter                        | covered in #1/#2 + gateway restart; Brain/Skills overflow reject-new | 2026-07-28 wave 6 |
| 8   | Brain capture hold, retention deletion, Principal exceptions             | [brain-capture-hold-retention.md](./brain-capture-hold-retention.md) | 2026-07-28 wave 6 |
| 9   | Skills bundle/profile mismatch and last-verified-bundle                  | [skills-bundle-profile-mismatch.md](./skills-bundle-profile-mismatch.md) | 2026-07-28 wave 6 |
| 10  | Privacy or secret incident containment                                   | [privacy-secret-incident.md](./privacy-secret-incident.md) | 2026-07-28 wave 6 |
| 11  | Cross-domain leakage incident containment                                | [cross-domain-leakage-incident.md](./cross-domain-leakage-incident.md) | 2026-07-28 wave 6 |
| 12  | Platform rollback, migration recovery, backup, restore                    | [platform-rollback-backup-restore.md](./platform-rollback-backup-restore.md) | 2026-07-28 wave 6 |
| 13  | Lisa native-behavior regression isolation                                | [lisa-native-regression-isolation.md](./lisa-native-regression-isolation.md) | 2026-07-28 wave 6 |
| 14  | Stage/production canary start/pause/restart/accept/reject                | [stage-prod-canary-controls.md](./stage-prod-canary-controls.md) | 2026-07-28 wave 6 |

Companion rollback order docs (non-live): [brain-rollback-restart.md](./brain-rollback-restart.md), [skills-rollback-restart.md](./skills-rollback-restart.md).

**Independent non-live rehearsal (wave 7):** [REHEARSAL-INDEPENDENT-2026-07-28-wave7.md](./REHEARSAL-INDEPENDENT-2026-07-28-wave7.md) — Cursor Task subagent as independent operator; **14/14 PASS** at FAKE/TEMPLATE; implementer-authored runbook text is **not** counted as independent rehearsal.

## Template sources

All MCP shapes: `docs/execution/openclawdevelopmentplan01/mcp-templates/`

| File                                         | Tier                                     |
| -------------------------------------------- | ---------------------------------------- |
| `linkbrain.stdio.fake.json`                  | FAKE                                     |
| `linkskills.stdio.fake.json`                 | FAKE                                     |
| `linkbrain.http.secretref.template.json`     | TEMPLATE → LIVE when Platform fills refs |
| `linkskills.http.secretref.template.json`    | TEMPLATE → LIVE when Platform fills refs |
| `linkbrain.oauth.authprofile.template.json`  | TEMPLATE (preferred auth path)           |
| `linkskills.oauth.authprofile.template.json` | TEMPLATE (preferred auth path)           |
| `tool-allowlists.yaml`                       | documentation mirror of §9 allowlists    |

Plugin flag defaults (all **false** until deliberately enabled):

- Brain: `mcpRead`, `captureEnqueue`, `captureDrain`, `coordinationWrites`
- Skills: `mcpDiscoveryRead`, `governedExecution`, `telemetryEnqueue`, `telemetryDrain`

Operational notes (wave 7):

- `flushIntervalMs` starts an independent stoppable drain worker when the matching drain flag is true; ticks/stop are bounded.
- `mcpRead` / `mcpDiscoveryRead` / `governedExecution` gate managed MCP include lists + fake/public-surface invoke helpers. Plugins do **not** `registerTool` names `brain_*` / `skills_*` (avoids MCP naming conflicts).
- `outboxAgeAlarmMs` marks health degraded when oldest outbox age exceeds the alarm.
- Independent FAKE/TEMPLATE rehearsal: `REHEARSAL-INDEPENDENT-2026-07-28-wave7.md` (implementer text is not independent evidence).

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
