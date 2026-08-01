# Runbook — Skills Enable / Disable / Drain

**Owner:** OpenClaw Lisa operator
**Domain:** `linkskills` only (do not touch Brain)
**Prerequisites:** Phase 9 hard gate — Skills Cursor **and** Codex readiness recorded before LIVE Lisa Skills. Read `README.md` tiers.
**Stop conditions:** conversation content in Skills telemetry; Brain flags edited; secret in argv/logs.

---

## A) FAKE — local developer proof (safe anytime)

**Tier:** FAKE — does **not** prove stage/production or Cursor/Codex readiness.

1. Smoke fake:

```bash
node extensions/linkskills/fake/cli.mjs stdio
# Ctrl-C after smoke
```

2. Use `mcp-templates/linkskills.stdio.fake.json`; replace `__OPENCLAW_PRIME_ROOT__`.
   Keep `"enabled": false` for Lisa; use only non-Lisa probe profiles if needed.

3. Plugin flag baseline (all false):

```json
{
  "plugins": {
    "entries": {
      "linkskills": {
        "enabled": false,
        "config": {
          "mcpDiscoveryRead": false,
          "governedExecution": false,
          "telemetryEnqueue": false,
          "telemetryDrain": false
        }
      }
    }
  }
}
```

4. **Never** set `hooks.allowConversationAccess` on Skills.

5. Focused proof:

```bash
node scripts/run-vitest.mjs test/helpers/link-domain-fakes/integrated-brain-skills.test.ts
```

**Expected:** Skills never receives conversation/content; label `fake/integration-local`.

**Rollback (FAKE):** disable plugin + MCP; discard temporary probe config.

---

## B) TEMPLATE — prepare LIVE wiring (still not live)

**Tier:** TEMPLATE

1. Preferred: `mcp-templates/linkskills.oauth.authprofile.template.json`
   Fallback: `mcp-templates/linkskills.http.secretref.template.json`
2. Keep `"enabled": false`.
3. Confirm `toolFilter.include` matches `extensions/linkskills/mcp-tool-filter.ts`.
4. Document names only:
   - `LINKTREND_LINKSKILLS_STAGE_MCP_TOKEN`
   - `LINKTREND_LINKSKILLS_STAGE_PLUGIN_TOKEN`
5. Do not copy into live Lisa until Phase 7 + Phase 5 auth + Cursor/Codex readiness.

---

## C) LIVE-STAGE / LIVE-PROD — enable sequence (gated)

**Tier:** LIVE-STAGE (Phase 9+) or LIVE-PROD (Phase 12+)
**Authority:** Phase 7; Phase 9 Cursor/Codex proofs; Phase 12 adds production credential + change window.

### C1. Baseline (all off)

`mcpDiscoveryRead`, `governedExecution`, `telemetryEnqueue`, `telemetryDrain` all **false**; MCP/plugin disabled or probe-only.

### C2. Health / discovery

1. Apply approved Skills MCP template with Platform-issued refs (no secret values in Git).
2. Enable MCP; run no-secret health probe.
3. Set `mcpDiscoveryRead=true` with `governedExecution=false`.
4. Prove immutable release retrieval + certified profile compatibility.
5. **Expected:** list/search/describe/fragment/release work; hash/profile mismatch rejects.

### C3. Bounded governed execution

1. Set `governedExecution=true` for approved scenarios only.
2. **Expected:** run start/update/complete/fail + tool resolve/invoke with validation; native OpenClaw skills still work if Skills fails.

### C4. Telemetry enqueue then drain

1. `telemetryEnqueue=true`, `telemetryDrain=false` → inspect local capacity (sanitized).
2. `telemetryDrain=true` for approved structured telemetry.
3. Feedback / trace-candidate without raw conversation content.
4. **Expected:** zero prohibited fields; Brain unchanged.

### Disable (any step)

1. `governedExecution=false`
2. `telemetryDrain=false` (outbox retained)
3. `telemetryEnqueue=false`
4. `mcpDiscoveryRead=false`
5. `mcp.servers.linkskills.enabled=false`
6. `plugins.entries.linkskills.enabled=false` if full isolation needed

Brain must remain unchanged.

### Escalation

Content leak or privacy incident → full Skills disable + Platform revoke Skills credential only (`skills-rollback-restart.md`).
