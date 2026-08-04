# Runbook — Brain capture enqueue → worker drain → durable visibility canary

**Owner:** OpenClaw Lisa / stage operator (active coordinator)
**Domain:** `linkbrain` only
**Architecture verdict:** drain is **worker / outbox only**. There is **no** Brain capture-drain MCP tool by design.
**This session may author the procedure; LIVE-STAGE execution is coordinator-owned and must not be claimed from FAKE proof.**

---

## Intended architecture (do not invent an MCP drain tool)

| Step               | Owner                                                                               | Mechanism                                                      |
| ------------------ | ----------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| 1. Capture accept  | lifecycle hooks / `createLinkbrainCapture().enqueue`                                | Durable `capture-buffer` namespace when `captureEnqueue=true`  |
| 2. Flush to outbox | capture flush (`batch_limit`, compaction, reset, session_end, gateway_stop, manual) | Outbox record `kind=capture_batch`, tool `brain_capture_batch` |
| 3. Drain           | `createBrainDrainWorker` service `linkbrain-outbox`                                 | Periodic `runtime.drainOnce` when `captureDrain=true`          |
| 4. Remote write    | transport (`http` / `mcp` / test `fake`)                                            | Calls frozen Brain tool `brain_capture_batch`                  |
| 5. Visibility      | Brain durable store + optional `mcpRead` probe                                      | Sanitized search/load or fake ack; never secret values         |

Source locks:

- Worker start/stop: `extensions/linkbrain/index.ts` (`registerService` `linkbrain-outbox`)
- Empty MCP drain surface: `extensions/linkbrain/src/feature-flags.ts` (`LINKBRAIN_MCP_CAPTURE_DRAIN_TOOLS = []`)
- Flag gates worker, not MCP include names: `captureDrain` in `shouldDrain` / `drainOnce`
- Plugin registers **no** `brain_*` tools: `extensions/linkbrain/registered-plugin.test.ts`

`brain_capture_batch` on the managed MCP allowlist is the **Brain write tool** used by the outbox transport (and optionally gated for agent MCP when `captureEnqueue=true`). It is **not** a drain control plane tool.

---

## Evidence tiers

| Tier           | May run from this procedure?                                                     | Proves stage readiness?                                             |
| -------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **FAKE**       | Yes — local vitest / fake transport                                              | **No** (`fake ≠ live`)                                              |
| **TEMPLATE**   | Docs/config rehearsal only                                                       | **No**                                                              |
| **LIVE-STAGE** | Only after Phase 7 + credential SecretRefs + authorized lisa-stage mutation gate | Only with filled receipt labeled `stage/brain-capture-drain-canary` |

Stop conditions: secret in argv/logs/receipt; inventing `brain_capture_drain` MCP tool; touching live Lisa (`18790` / `~/.openclaw-lisa`); unpaid stage mutation without coordinator authority; claiming LIVE from FAKE.

---

## A) FAKE — reproducible non-live proof (safe anytime)

From OpenClaw Prime repo root (trusted checkout with dependencies):

```bash
node scripts/run-vitest.mjs \
  extensions/linkbrain/capture.test.ts \
  extensions/linkbrain/feature-flags-drain.test.ts \
  extensions/linkbrain/runtime.test.ts \
  extensions/linkbrain/registered-plugin.test.ts \
  extensions/linkbrain/brain-capture-drain-canary.receipt.test.ts
```

Optional fake smoke (do not point at Lisa):

```bash
node extensions/linkbrain/fake/server.mjs --stdio
# Ctrl-C after smoke
```

Fill receipt from schema:
`docs/execution/openclawdevelopmentplan01/receipts/brain-capture-drain-canary.schema.json`

Use example shape:
`docs/execution/openclawdevelopmentplan01/receipts/brain-capture-drain-canary.example.fake.json`

**Expected:** tests PASS; `architecture.drainMode=worker_outbox`; `architecture.mcpDrainToolExists=false`; no Platform endpoints contacted; label `fake/integration-local`.

**Rollback (FAKE):** none required beyond leaving plugins/MCP disabled in any temporary non-Lisa probe config.

---

## B) LIVE-STAGE — coordinator canary (authorized mutation only)

**Prerequisites:** Phase 7 sign-off; stage Brain MCP + ingestion SecretRef **names** present; lisa-stage profile owned by coordinator; live Lisa untouched.

Follow enable order in `brain-enable-disable-drain.md` through C4, then:

### B1. Baseline (non-destructive read)

1. Confirm live Lisa fingerprints/ports unchanged (do not restart live Lisa).
2. Confirm lisa-stage only: plugin `linkbrain` present; flags start with `captureDrain=false` if proving enqueue-hold first.
3. Record sanitized health/diagnostics counts only (no payloads, no tokens).

### B2. Enqueue-only (if not already proven)

1. Keep `captureDrain=false`.
2. Set `captureEnqueue=true` (and `allowConversationAccess=true` only if hook path is required).
3. Emit one synthetic redacted canary event with stable opaque id `canaryId` (no secrets, no CoT, no raw tool dumps).
4. Expect: local outbox or capture-buffer count increases; remote Brain write count unchanged.
5. Record `phases.enqueue` on the receipt.

### B3. Worker drain (the missing stage step)

1. Set `captureDrain=true` only — **do not** add an MCP drain tool.
2. Wait ≥ one `flushIntervalMs` worker tick (or trigger gateway lifecycle that keeps the service running).
3. Expect sanitized diagnostics: `outboxCount` decreases for the canary batch; `lastDrainStatus` shows `drained≥1` (or equivalent); dead-letter remains 0 for the canary key.
4. Transport must invoke Brain `brain_capture_batch` with the outbox idempotency key (observe via Brain-side ack / stage logs redacted to counts + opaque ids only).

### B4. Durable Brain visibility

1. With `mcpRead=true` on designated test session **or** Platform-approved stage read probe: confirm the synthetic canary is visible under private/episode search/load using opaque `canaryId` / stream id only.
2. Do not paste conversation bodies into the receipt.
3. Record `phases.visibility` with `proofMethod` enum from the schema.

### B5. Disable / rollback

Prefer least privilege:

1. `captureDrain=false` (retain outbox if investigating)
2. `captureEnqueue=false`
3. `mcpRead=false` if no longer needed
4. Leave Skills flags untouched

Full incident path: `brain-rollback-restart.md`.

---

## Receipt requirements

Every canary run (FAKE or LIVE-STAGE) must emit one JSON object conforming to
`receipts/brain-capture-drain-canary.schema.json`.

Required honesty fields:

- `architecture.drainMode` must be `worker_outbox`
- `architecture.mcpDrainToolExists` must be `false`
- `architecture.drainExecutablePath` must cite the worker/service path, not an MCP tool name
- `secrets.exposed` must be `false`
- `evidenceTier.claimed` must not exceed the tier actually exercised
- `verdict` is `PASS`, `HOLD`, or `FAIL` (never upgrade FAKE to stage PASS)

---

## Commands for the active coordinator (copy/paste)

```bash
# 1) Architecture lock + FAKE path (no stage mutation)
node scripts/run-vitest.mjs \
  extensions/linkbrain/capture.test.ts \
  extensions/linkbrain/feature-flags-drain.test.ts \
  extensions/linkbrain/runtime.test.ts \
  extensions/linkbrain/registered-plugin.test.ts \
  extensions/linkbrain/brain-capture-drain-canary.receipt.test.ts

# 2) After authorized lisa-stage flag flips only:
#    captureEnqueue=true → synthetic event → captureDrain=true → wait flushIntervalMs
#    → record receipt JSON (SecretRef names only) → captureDrain=false

# 3) Rollback if anything unexpected:
#    captureDrain=false; captureEnqueue=false; see brain-rollback-restart.md
```

## Related

- `brain-enable-disable-drain.md` — full flag enable sequence
- `gateway-restart-durable-outboxes.md` — restart with pending outbox
- `PHASE-8-STATUS-BLOCKED.md` — LIVE-STAGE still gated on Platform prerequisites when uncleared
- `extensions/linkbrain/README.md` — plugin contract
