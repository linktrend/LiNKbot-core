# Lisa stage/production integration packet — PREPARED ONLY (do not apply)

**Recorded:** 2026-07-30 Asia/Taipei
**OpenClaw branch:** `issue/ocp-openclawdevelopmentplan01`
**Status:** Prepared for later combined gate — **not** applied; **not** live mutation authority
**Lisa ops boundary:** `issue/ocp-lisa-ops01` / `.worktrees/lisa-ops01` remains a separate workstream — do not merge/rebase/edit from this packet

## Templates (default-disabled)

| Domain | Template                                               |
| ------ | ------------------------------------------------------ |
| Brain  | `mcp-templates/linkbrain.machine-token.template.json`  |
| Skills | `mcp-templates/linkskills.machine-token.template.json` |

Both keep `enabled: false` / `transportMode: disabled`. Distinct `bindingId` and SecretRef **names** only. Do not enable live templates from this packet.

## SecretRef / binding names (names only — no values)

| Domain | bindingId          | clientAssertionKeyRef id                               |
| ------ | ------------------ | ------------------------------------------------------ |
| Brain  | `linkbrain-stage`  | `LINKTREND_LINKBRAIN_STAGE_PACI_CLIENT_ASSERTION_KEY`  |
| Skills | `linkskills-stage` | `LINKTREND_LINKSKILLS_STAGE_PACI_CLIENT_ASSERTION_KEY` |

Production: replace `stage` with `prod` ids from Platform — never reuse Brain ids for Skills.

Private-key custody is **SecretRef-only** (or file/injected key references). Do not place literal PEM/private-key strings in config, templates, docs, fixtures, diagnostics, or argv. Resolve refs only at the trusted machine-token provider / Plugin SDK acquire boundary.

## Redacted operator commands (placeholders)

```bash
# Validate config fragments (dry) — do not apply live
# openclaw doctor --profile lisa
# openclaw secrets audit --check

# After Principal + Platform stage unlock ONLY:
# 1. Backup Lisa config/state (Lisa ops owner)
# 2. Merge machine-token fragments with enabled=false first
# 3. Inject SecretRefs (names resolved via GSM) — never argv, never literal PEM
# 4. Enable one domain MCP server, probe health, then the other
# 5. Rollback: set enabled=false; restart process (or facade.unregister / host cache clear); revoke Platform credentialId
```

## Combined checklist (with Lisa ops/model branch)

1. Platform stage PACI issuer + JWKS live and Principal-approved
2. OpenClaw Codex verifies machine-token seam on this PR tip
3. Lisa ops branch verified independently (models/routing untouched by this work)
4. Fake/local OpenClaw suite green on tip
5. Stage canary evidence template filled (separate)
6. One-operator mutation order preserves native memory/sessions/cron/heartbeat/channels

## Explicit non-actions for this implementation wave

- Do not edit `~/.openclaw-lisa/**`
- Do not restart Lisa LaunchAgents
- Do not enable plugins/MCP live
- Do not contact live Platform
- Do not start Phases 7–12
- Do not change Lisa models/providers/routing/personality
