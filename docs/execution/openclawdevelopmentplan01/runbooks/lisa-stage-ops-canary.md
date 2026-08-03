# Runbook — Mac Mini lisa-stage ops canary (OpenRouter-only)

**Domain:** Lisa stage (Mac Mini) only  
**Owner:** OpenClaw Lisa / stage coordinator  
**Tier:** Stage ops readiness — **no enable / no model invoke / no mutation from audit sessions** unless Principal authorizes  
**Out of scope:** live Lisa (`~/.openclaw-lisa` / 18790), VPS, IDE Development, merge/promote, cloud/Supabase credential mutation

**Hard stops:** secrets in argv/logs; enabling schedules without Principal gate; claiming MiniMax-M3 PDF proven without first-production-proof receipt; requesting direct provider keys (OpenRouter credential only); touching live Lisa; using `/Users/linktrend/Projects/openclaw_prime` as the stage engine.

---

## Verified stage posture (read-only audit 2026-08-03 + launch-blocker close)

| Surface          | Truth                                                                                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stage root       | `LiNKplatform-staging/lisa` (profile `lisa-stage`, port **18791**)                                                                                                                             |
| Stage engine     | `LiNKplatform-staging/openclaw_prime/openclaw.mjs`. **Inspect/inventory:** no PACI wrapper. **Apply/runtime:** via `service-env/ai.openclaw.lisa-stage-env-wrapper.sh` (writes PACI JWKs/PEMs) |
| Routing          | OpenRouter-only overlay — see `linkbots/lisa/ops/model-routing.openrouter-stage.contract.json`                                                                                                 |
| Primary          | `openrouter/openai/gpt-5.6-luna`, `thinkingDefault: medium`                                                                                                                                    |
| Fallbacks        | GLM-5.2 → Kimi K3 → Gemini 3.5 Flash-Lite (all `openrouter/...`)                                                                                                                               |
| Image/PDF        | `openrouter/minimax/minimax-m3` via `imageModel` + `pdfModel`; PDF `approved_unverified`                                                                                                       |
| PDF rollback     | `tools.deny` includes `pdf` + remove `agents.defaults.pdfModel` (never write empty `primary`) + restore receipt                                                                                |
| Eval             | Nemotron OpenRouter ref — **not** in defaults / modelPolicy.allow                                                                                                                              |
| Cron SOT         | Repo `linkbots/lisa/ops/jobs.stage-seed.json` v2 — **6** real bounded procedures, `delivery=none`, `enabled=false`                                                                             |
| Typed installer  | `stage-ops-cron-installer.ts` emits gateway-valid create/edit payloads (UUID preserve, disabled, delivery=none)                                                                                |
| Durable stores   | Additive OpenClaw SQLite `lisa_stage_*` tables (lazy ensure; no schema_version bump). Repair install fail-closed                                                                               |
| Repair package   | Packaged separately; install only when store health passes; default `blocked_no_store`                                                                                                         |
| Native heartbeat | `every: 0m` (disabled); wall-clock owned by `lisa-heartbeat-45` when enabled                                                                                                                   |

Job IDs observed 2026-08-03 (re-verify with `cron list` before mutate):

| Name                | job_id                                 |
| ------------------- | -------------------------------------- |
| lisa-heartbeat-45   | `1684ea5f-47ea-464a-8f58-b5990b1ac160` |
| lisa-morning-digest | `3f46ba9b-1ec4-44a3-b402-e7458a4c0e38` |
| lisa-ship-05        | `a7046889-4190-4df7-8b37-2243347dcd1f` |
| lisa-pull-07        | `ac062761-66a3-4f0a-8811-dec198ba12c7` |
| lisa-ship-16        | `e1ff7019-e805-4770-9329-d6656f85d021` |
| lisa-pull-18        | `f24bbd94-c9be-4dba-9602-cfa266fffb9c` |

Prior stage force-runs used **STAGE_CANARY one-liner stubs**. Repo SOT packages real bounded HEARTBEAT/digest/Ship/Pull payloads (`STAGE BOUNDED PROCEDURE …`, `delivery=none`). Coordinator must **update** stage jobs from SOT before any enable.

---

## A) Read-only inventory (safe anytime)

**Do not** use `ai.openclaw.lisa-stage-env-wrapper.sh` for inventory. That wrapper always materializes PACI JWK/PEM files under `secrets/paci-assertions` (and may call gcloud). Use the inspect path instead.

Prefer `OPENCLAW_GATEWAY_TOKEN` already in process env or present in `ai.openclaw.lisa-stage.env`; never call gcloud/PACI project for inventory.

```bash
# Print packaged inspect commands (no PACI write; no gcloud)
node --experimental-strip-types linkbots/lisa/ops/stage-ops-inventory.ts

# Or run the inspect path directly:
STAGE_ROOT="/Users/linktrend/Projects/LiNKplatform-staging/lisa"
ENGINE="/Users/linktrend/Projects/LiNKplatform-staging/openclaw_prime/openclaw.mjs"
ENV_FILE="/Users/linktrend/Projects/LiNKplatform-staging/lisa/service-env/ai.openclaw.lisa-stage.env"
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"

"$STAGE_ROOT/probes/health.sh"

# Optional: source env file ONLY if OPENCLAW_GATEWAY_TOKEN is already stored there.
# Do not invoke the PACI-writing wrapper; do not call gcloud.
# set -a; [ -f "$ENV_FILE" ] && . "$ENV_FILE"; set +a

OPENCLAW_STATE_DIR="$STAGE_ROOT" \
  node "$ENGINE" --profile lisa-stage cron list --json

# Repo plan + payload hashes (no stage mutation; no PACI write)
# Cron installer imports validateCronAddParams from packages/gateway-protocol/dist.
STAGE_OPS_NODE=(node --import ./linkbots/lisa/ops/register-strip-types-js-resolve.mjs --experimental-strip-types)
"${STAGE_OPS_NODE[@]}" linkbots/lisa/ops/stage-ops-coordinator.ts install --json
```

Repo contract tests (no stage mutation):

```bash
STAGE_OPS_NODE=(node --import ./linkbots/lisa/ops/register-strip-types-js-resolve.mjs --experimental-strip-types)
"${STAGE_OPS_NODE[@]}" --test \
  linkbots/lisa/ops/lisa-ops.test.ts \
  linkbots/lisa/ops/model-routing-contract.test.ts \
  linkbots/lisa/ops/model-routing.openrouter-stage.test.ts \
  linkbots/lisa/ops/stage-ops-holds.test.ts \
  linkbots/lisa/ops/stage-ops-command.test.ts \
  linkbots/lisa/ops/stage-ops-cron-installer.test.ts \
  linkbots/lisa/ops/stage-durable-store.test.ts \
  linkbots/lisa/ops/stage-pdf-rollback.test.ts \
  linkbots/lisa/ops/stage-pdf-canary.execute.test.ts \
  linkbots/lisa/ops/stage-workspace-package.test.ts
node scripts/run-vitest.mjs src/state/lisa-stage-ops-store.test.ts
pnpm lint:kysely
```

---

## B) Coordinator apply / canary / rollback (mutation — Principal gate)

Tooling is **plan-only by default** (`mutateStage=false`, `enableSchedules=false`). `--emit-commands` prints exact shell through the stage env wrapper (`ai.openclaw.lisa-stage-env-wrapper.sh` — GSM inject + PACI JWK/PEM writes); a human/coordinator still runs them under Principal gate. Section A inventory must **not** use this wrapper. Creates emit `--disabled` + `--no-deliver`; edits emit `--disable` + `--no-deliver` (single mutation).

```bash
STAGE_OPS_NODE=(node --import ./linkbots/lisa/ops/register-strip-types-js-resolve.mjs --experimental-strip-types)

# Plan install/update of six bounded payloads (delivery=none, enabled stays false)
"${STAGE_OPS_NODE[@]}" linkbots/lisa/ops/stage-ops-coordinator.ts update --emit-commands

# Disable all six (safe rollback of schedule enablement)
"${STAGE_OPS_NODE[@]}" linkbots/lisa/ops/stage-ops-coordinator.ts disable --emit-commands

# Rollback payloads to repo bounded procedures + keep disabled
"${STAGE_OPS_NODE[@]}" linkbots/lisa/ops/stage-ops-coordinator.ts rollback --emit-commands

# Optional: include Repair/GitOps supervision ONLY when durable SQLite store health passes
"${STAGE_OPS_NODE[@]}" linkbots/lisa/ops/stage-ops-coordinator.ts install --include-repair --emit-commands
```

Manual disable fallback (known IDs — re-verify first):

```bash
STAGE_ROOT="/Users/linktrend/Projects/LiNKplatform-staging/lisa"
ENGINE="/Users/linktrend/Projects/LiNKplatform-staging/openclaw_prime/openclaw.mjs"
WRAPPER="/Users/linktrend/Projects/LiNKplatform-staging/lisa/service-env/ai.openclaw.lisa-stage-env-wrapper.sh"
ENV_FILE="/Users/linktrend/Projects/LiNKplatform-staging/lisa/service-env/ai.openclaw.lisa-stage.env"
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"
oc() {
  OPENCLAW_STATE_DIR="$STAGE_ROOT" "$WRAPPER" "$ENV_FILE" node "$ENGINE" --profile lisa-stage "$@"
}

oc cron disable 1684ea5f-47ea-464a-8f58-b5990b1ac160
oc cron disable 3f46ba9b-1ec4-44a3-b402-e7458a4c0e38
oc cron disable a7046889-4190-4df7-8b37-2243347dcd1f
oc cron disable ac062761-66a3-4f0a-8811-dec198ba12c7
oc cron disable e1ff7019-e805-4770-9329-d6656f85d021
oc cron disable f24bbd94-c9be-4dba-9602-cfa266fffb9c
oc cron list --json   # expect enabled=false for all six
```

### PDF-only rollback (preserve text/image/fallbacks)

Repo plan (never writes `pdfModel.primary=""`):

1. Capture restore receipt (`priorPdfModel`, `priorToolsDeny`).
2. Add `pdf` to `tools.deny`.
3. Remove `agents.defaults.pdfModel` key entirely.
4. Validate config (reject empty primary).
5. Health-check text + image preserved; auto-restore from receipt when reversing.

```bash
node --experimental-strip-types linkbots/lisa/ops/stage-pdf-canary.ts rollback-plan --out /tmp/lisa-stage-pdf-canary
# Principal-gated stage apply of the deny/remove plan is separate; do not use empty-primary fragments.
```

---

## C) Safe schedule enable (mutation + spend risk — Principal gate)

**Do not enable** until stage payloads match repo bounded procedures (`payloadHash` / message starts with `STAGE BOUNDED PROCEDURE`) and channels plan is explicit.

Ordered gate:

1. Confirm OpenRouter-only routing + `liveMutationAllowed=false` / `paidSpendEnablementAllowed=false`.
2. Apply `stage-ops-coordinator.ts update --emit-commands` so jobs are not STAGE_CANARY stubs.
3. Confirm `delivery.mode=none` for first canary.
4. Enable **one** job only; observe; disable on anomaly.
5. Never enable Repair Dispatcher until durable OpenClaw SQLite store health passes (`blocked_no_store` otherwise).

```bash
# Example — enable heartbeat only after payload restore (NOT executed by audit agents)
# OPENCLAW_STATE_DIR=... wrapper + staging engine: cron enable 1684ea5f-47ea-464a-8f58-b5990b1ac160
```

---

## D) Stage MiniMax PDF canary command (package / dry-run; Principal gate for execute)

```bash
# Package/dry-run: synthetic local PDF + machine-readable receipt; no external delivery; no spend
node --experimental-strip-types linkbots/lisa/ops/stage-pdf-canary.ts dry-run --out /tmp/lisa-stage-pdf-canary

# Rollback plan fragment (does not mutate stage by itself)
node --experimental-strip-types linkbots/lisa/ops/stage-pdf-canary.ts rollback-plan --out /tmp/lisa-stage-pdf-canary

# Execute (SPEND) — dual gate only: STAGE_PDF_CANARY_EXECUTE=1 + existing OPENROUTER_API_KEY in process env
# Never mint MiniMax direct keys. Never print secrets.
# STAGE_PDF_CANARY_EXECUTE=1 node --experimental-strip-types linkbots/lisa/ops/stage-pdf-canary.ts execute --out /tmp/lisa-stage-pdf-canary
```

Success still requires a **first-production-proof receipt** accepted by Principal. Package/dry-run alone does **not** earn proof.

### Rollback truth

```text
strategy: tools_deny_pdf
add tools.deny: pdf
remove agents.defaults.pdfModel (never primary:"")
preserve model.primary + fallbacks + imageModel
store restore receipt for auto-restore
alternatePaidDocumentRoutingAllowed = false
liveLisaTouched = false
```

---

## E) Durable store schema (additive OpenClaw state)

Owner: OpenClaw shared state DB (`state/openclaw.sqlite`). Lazy `CREATE TABLE IF NOT EXISTS` — **no** `schema_version` bump.

| Table                              | Purpose                               |
| ---------------------------------- | ------------------------------------- |
| `lisa_stage_repair_bindings`       | Exact repo/branch/PR/headSha bindings |
| `lisa_stage_repair_attempts`       | Attempt records + optional expiry     |
| `lisa_stage_main_approve_packages` | Sealed Main Approve packages          |
| `lisa_stage_main_approve_claims`   | Claim rows with expiry/status         |
| `lisa_stage_ops_store_meta`        | Schema ensure marker                  |

IDE Development remains the external GitOps SoT and is untouched. Repair supervisor stays disabled by default and fail-closed until store health passes.

---

## F) Ship/Pull / Repair / GitOps honesty

| Surface                                              | Stage claim                                       |
| ---------------------------------------------------- | ------------------------------------------------- |
| Ship/Pull contracts + workshop wait/no-yield         | PASS in-repo                                      |
| Six bounded procedure payloads (repo SOT)            | PASS (package; stage apply still Principal gate)  |
| Typed gateway create/edit payloads                   | PASS packaged                                     |
| Stage command rendering (inspect vs apply wrapper)   | PASS packaged (inventory never uses PACI wrapper) |
| Stage SQLite still holding STAGE_CANARY stubs        | HOLD until coordinator `update` applied           |
| Full Ship/Pull post-process (ACP wait → CAS → email) | HOLD until spend/ACP gate                         |
| Repair Dispatcher SQLite store + fail-closed install | PASS packaged; HOLD for stage ensure/enable       |
| Main Approve epoch expiry + SQLite packages/claims   | PASS packaged; HOLD for live store ensure         |
| MiniMax PDF deny-rollback + restore receipt          | PASS packaged; HOLD for execute/proof             |

---

## Related artifacts

- Overlay: `linkbots/lisa/ops/model-routing.openrouter-stage.contract.json`
- Semantic contract: `linkbots/lisa/ops/model-routing.contract.json`
- Seed SOT: `linkbots/lisa/ops/jobs.stage-seed.json`
- Payload builders: `linkbots/lisa/ops/stage-ops-payloads.ts`
- Coordinator: `linkbots/lisa/ops/stage-ops-coordinator.ts`
- Command renderer: `linkbots/lisa/ops/stage-ops-command.ts` (`renderStageOpenClawInspectCommand` vs `renderStageOpenClawCommand`)
- Read-only inventory CLI: `linkbots/lisa/ops/stage-ops-inventory.ts`
- Typed cron installer: `linkbots/lisa/ops/stage-ops-cron-installer.ts`
- Durable store: `src/state/lisa-stage-ops-schema.ts`, `src/state/lisa-stage-ops-store.ts`
- PDF canary: `linkbots/lisa/ops/stage-pdf-canary.ts`
- FAKE/TEMPLATE production gates: `docs/execution/openclawdevelopmentplan01/runbooks/stage-prod-canary-controls.md`
