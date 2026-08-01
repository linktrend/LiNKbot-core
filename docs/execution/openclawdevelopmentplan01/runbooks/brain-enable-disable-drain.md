# Runbook — Brain Enable / Disable / Drain

**Owner:** OpenClaw Lisa operator
**Domain:** `linkbrain` only (do not touch Skills)
**Prerequisites:** Read `README.md` evidence tiers. LIVE paths require Phase 7+ clearance.
**Stop conditions:** secret in argv/logs; cross-domain flag edits; native OpenClaw regression after enable.

---

## A) FAKE — local developer proof (safe anytime)

**Tier:** FAKE — does **not** prove stage/production.

1. From OpenClaw Prime repo root, confirm fake binary:

```bash
node extensions/linkbrain/fake/server.mjs --stdio
# Ctrl-C after smoke; do not leave listening for Lisa
```

2. Use template `mcp-templates/linkbrain.stdio.fake.json`.
   Replace `__OPENCLAW_PRIME_ROOT__` with the absolute repo root.
   Keep `"enabled": false` until you intentionally probe in a **non-Lisa** profile.

3. Plugin flags for fake local config (example shape — not live Lisa):

```json
{
  "plugins": {
    "entries": {
      "linkbrain": {
        "enabled": false,
        "config": {
          "mcpRead": false,
          "captureEnqueue": false,
          "captureDrain": false,
          "coordinationWrites": false
        }
      }
    }
  }
}
```

4. Focused fake/integration proof (already used in Phase 6):

```bash
node scripts/run-vitest.mjs test/helpers/link-domain-fakes/integrated-brain-skills.test.ts
```

**Expected sanitized evidence:** tests pass; no Platform endpoints contacted; label `fake/integration-local`.

**Rollback (FAKE):** set plugin + MCP `enabled: false`; delete temporary non-Lisa probe config.

---

## B) TEMPLATE — prepare LIVE wiring (still not live)

**Tier:** TEMPLATE

1. Choose auth path from Phase 5 packet:
   - Preferred: `mcp-templates/linkbrain.oauth.authprofile.template.json`
   - Fallback: `mcp-templates/linkbrain.http.secretref.template.json`
2. Keep `"enabled": false`.
3. Confirm `toolFilter.include` matches `extensions/linkbrain/mcp-tool-filter.ts`.
4. Document SecretRef **names** only (examples):
   - `LINKTREND_LINKBRAIN_STAGE_MCP_TOKEN`
   - `LINKTREND_LINKBRAIN_STAGE_INGESTION_TOKEN` (plugin ingestion; never reuse Skills IDs)

Do **not** copy into `~/.openclaw-lisa` until Phase 7 + Phase 5 auth approval.

---

## C) LIVE-STAGE / LIVE-PROD — enable sequence (gated)

**Tier:** LIVE-STAGE (Phase 8+) or LIVE-PROD (Phase 11+)
**Authority required:** Phase 7 sign-off (stage) or Phase 11 prereqs (prod).
**Also required:** authorized Lisa-profile mutation gate for the target environment.

### C1. Baseline (all off)

Ensure:

- `mcp.servers.linkbrain.enabled=false` **or** plugin fully disabled
- `mcpRead=false`, `captureEnqueue=false`, `captureDrain=false`, `coordinationWrites=false`

### C2. Health / contract only

1. Apply approved MCP entry from TEMPLATE with Platform-issued refs (values never in Git).
2. Set `mcp.servers.linkbrain.enabled=true` with feature flags still false.
3. Run no-secret health/contract probe (operator’s supported MCP probe path).
4. **Expected:** healthy; contract version matches freeze; no private payloads in logs.

If probe fails → disable MCP immediately; see `mcp-probe-pause-recover.md`.

### C3. Read-only

1. Set `plugins.entries.linkbrain.enabled=true`.
2. Set `mcpRead=true` only.
3. Use designated test sessions.
4. **Expected:** browse/search/load succeed; native OpenClaw unchanged; Skills untouched.

### C4. Capture enqueue (drain off)

1. If capture/coordination needs conversation hooks, set **only**:
   `plugins.entries.linkbrain.hooks.allowConversationAccess=true`
2. Set `captureEnqueue=true`, keep `captureDrain=false`.
3. Inspect local outbox capacity/age (sanitized counts only).
4. **Expected:** queue grows under reject-new policy; no remote write until drain on.

### C5. Drain on (approved scenarios)

1. Set `captureDrain=true`.
2. Watch delivery success/retry/dead-letter (sanitized).
3. **Expected:** approved redacted batches drain; Skills remains healthy independently.

### C6. Coordination writes

1. Set `coordinationWrites=true` for bounded scenarios only.
2. **Expected:** task/handoff/checkpoint paths work; idempotent replay safe.

### Disable (any step)

Prefer least privilege first:

1. `coordinationWrites=false`
2. `captureDrain=false` (outbox retained)
3. `captureEnqueue=false`
4. `mcpRead=false`
5. `mcp.servers.linkbrain.enabled=false`
6. `plugins.entries.linkbrain.enabled=false` if full isolation needed

Skills must remain unchanged.

### Escalation

- Privacy/secret concern → full Brain disable + Platform revoke Brain credential only (`brain-rollback-restart.md`).
- Platform shared-identity fault → escalate Platform; disable both domains only with shared-scope evidence.
