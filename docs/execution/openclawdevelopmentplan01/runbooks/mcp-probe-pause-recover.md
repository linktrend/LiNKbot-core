# Runbook — MCP Probe, Pause, and Recover

**Owner:** OpenClaw Lisa operator
**Domains:** independent `mcp.servers.linkbrain` and `mcp.servers.linkskills`
**Prerequisites:** Templates from `../mcp-templates/`. Never echo secrets. Label FAKE vs LIVE.

---

## Probe (no-secret)

### FAKE

```bash
# Brain fake stdio (repo root)
node extensions/linkbrain/fake/server.mjs --stdio

# Skills fake stdio
node extensions/linkskills/fake/cli.mjs stdio
```

Or enable the corresponding `*.stdio.fake.json` MCP entry in a **non-Lisa** profile only.
**Evidence tier:** FAKE — not environment proof.

### LIVE-STAGE / LIVE-PROD (gated)

1. Confirm Phase 7 (stage) or Phase 11/12 (prod) authority.
2. Use HTTP SecretRef or OAuth authProfile templates with Platform-issued IDs.
3. Set **one** domain MCP `enabled=true`; keep the sibling domain unchanged.
4. Run health/contract probe via the supported OpenClaw MCP probe path for that profile.
5. Confirm toolFilter allowlist still matches:
   - Brain: `extensions/linkbrain/mcp-tool-filter.ts`
   - Skills: `extensions/linkskills/mcp-tool-filter.ts`

**Expected sanitized evidence:** transport healthy; contract version OK; auth succeeds without printing tokens; no private message bodies in logs.

---

## Repeated-failure pause

If probes or drains fail repeatedly for one domain:

1. Set that domain’s drain flag false:
   - Brain: `captureDrain=false`
   - Skills: `telemetryDrain=false`
2. Set that domain’s MCP `enabled=false` if failures continue.
3. Leave the **other** domain running.
4. Preserve durable outbox (do not delete local queue to “fix” auth).
5. Record sanitized failure counts, last error **codes** (not payloads), and timestamp.

**Stop:** if failures look like credential leakage or cross-domain coupling → escalate and follow domain rollback runbook.

---

## Recovery

1. Platform confirms credential/service health (LIVE) or restart fake (FAKE).
2. Re-enable MCP for the affected domain only.
3. Health probe pass required before drain.
4. Re-enable drain for approved scenarios.
5. Watch one bounded window; confirm sibling domain never flapped.

---

## Independence check (mandatory)

After any pause/recover on one domain, verify the other domain’s MCP enabled state and last health did **not** change as a side effect.

## Related

- `brain-enable-disable-drain.md` / `skills-enable-disable-drain.md`
- `brain-rollback-restart.md` / `skills-rollback-restart.md`
- Phase 7 decision: `../PHASE-7-DECISION-PACKET-PLATFORM-STAGE.md`
