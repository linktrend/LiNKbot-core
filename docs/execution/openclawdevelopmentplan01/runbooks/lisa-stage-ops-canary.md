# Runbook — Mac Mini lisa-stage ops canary (OpenRouter-only)

**Domain:** Lisa stage (Mac Mini) only  
**Owner:** OpenClaw Lisa / stage coordinator  
**Tier:** Stage ops readiness — **no enable / no model invoke / no mutation from audit sessions** unless Principal authorizes  
**Out of scope:** live Lisa (`~/.openclaw-lisa` / 18790), VPS, IDE Development, merge/promote, cloud/Supabase credential mutation

**Hard stops:** secrets in argv/logs; enabling schedules without Principal gate; claiming MiniMax-M3 PDF proven without first-production-proof receipt; requesting direct provider keys (OpenRouter credential only); touching live Lisa.

---

## Verified stage posture (read-only audit 2026-08-03)

| Surface          | Truth                                                                                                              |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| Stage root       | `LiNKplatform-staging/lisa` (profile `lisa-stage`, port **18791**)                                                 |
| Routing          | OpenRouter-only overlay — see `linkbots/lisa/ops/model-routing.openrouter-stage.contract.json`                     |
| Primary          | `openrouter/openai/gpt-5.6-luna`, `thinkingDefault: medium`                                                        |
| Fallbacks        | GLM-5.2 → Kimi K3 → Gemini 3.5 Flash-Lite (all `openrouter/...`)                                                   |
| Image/PDF        | `openrouter/minimax/minimax-m3` via `imageModel` + `pdfModel`; PDF `approved_unverified`                           |
| Eval             | Nemotron OpenRouter ref — **not** in defaults / modelPolicy.allow                                                  |
| Cron SOT         | Repo `linkbots/lisa/ops/jobs.stage-seed.json` v2 — **6** real bounded procedures, `delivery=none`, `enabled=false` |
| Repair package   | Packaged separately; default decision `blocked_no_store` until durable stores exist                                |
| Native heartbeat | `every: 0m` (disabled); wall-clock owned by `lisa-heartbeat-45` when enabled                                       |

Job IDs observed 2026-08-03 (re-verify with `cron list` before mutate):

| Name                | job_id                                 |
| ------------------- | -------------------------------------- |
| lisa-heartbeat-45   | `1684ea5f-47ea-464a-8f58-b5990b1ac160` |
| lisa-morning-digest | `3f46ba9b-1ec4-44a3-b402-e7458a4c0e38` |
| lisa-ship-05        | `a7046889-4190-4df7-8b37-2243347dcd1f` |
| lisa-pull-07        | `ac062761-66a3-4f0a-8811-dec198ba12c7` |
| lisa-ship-16        | `e1ff7019-e805-4770-9329-d6656f85d021` |
| lisa-pull-18        | `f24bbd94-c9be-4dba-9602-cfa266fffb9c` |

Prior stage force-runs used **STAGE_CANARY one-liner stubs**. Repo SOT now packages real bounded HEARTBEAT/digest/Ship/Pull payloads (`STAGE BOUNDED PROCEDURE …`, `delivery=none`). Coordinator must **update** stage jobs from SOT before any enable.

---

## A) Read-only inventory (safe anytime)

```bash
STAGE_ROOT="/Users/linktrend/Projects/LiNKplatform-staging/lisa"
ENGINE="/Users/linktrend/Projects/openclaw_prime/openclaw.mjs"
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"

"$STAGE_ROOT/probes/health.sh"

OPENCLAW_STATE_DIR="$STAGE_ROOT" \
node "$ENGINE" --profile lisa-stage cron list --json

# Repo plan + payload hashes (no stage mutation)
node --experimental-strip-types linkbots/lisa/ops/stage-ops-coordinator.ts install --json
```

Repo contract tests (no stage mutation):

```bash
node --experimental-strip-types --test \
  linkbots/lisa/ops/lisa-ops.test.ts \
  linkbots/lisa/ops/model-routing-contract.test.ts \
  linkbots/lisa/ops/model-routing.openrouter-stage.test.ts \
  linkbots/lisa/ops/stage-ops-holds.test.ts
```

---

## B) Coordinator apply commands (mutation — Principal gate)

Tooling is **plan-only by default** (`mutateStage=false`, `enableSchedules=false`). `--emit-commands` prints exact shell; a human/coordinator still runs them under Principal gate.

```bash
# Plan install/update of six bounded payloads (delivery=none, enabled stays false)
node --experimental-strip-types linkbots/lisa/ops/stage-ops-coordinator.ts update --emit-commands

# Disable all six (safe rollback of schedule enablement)
node --experimental-strip-types linkbots/lisa/ops/stage-ops-coordinator.ts disable --emit-commands

# Rollback payloads to repo bounded procedures + keep disabled
node --experimental-strip-types linkbots/lisa/ops/stage-ops-coordinator.ts rollback --emit-commands

# Optional: include Repair/GitOps supervision job (still disabled; blocked_no_store)
node --experimental-strip-types linkbots/lisa/ops/stage-ops-coordinator.ts install --include-repair --emit-commands
```

Manual disable fallback (known IDs — re-verify first):

```bash
STAGE_ROOT="/Users/linktrend/Projects/LiNKplatform-staging/lisa"
ENGINE="/Users/linktrend/Projects/openclaw_prime/openclaw.mjs"
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"
OC=(env OPENCLAW_STATE_DIR="$STAGE_ROOT" node "$ENGINE" --profile lisa-stage)

"${OC[@]}" cron disable 1684ea5f-47ea-464a-8f58-b5990b1ac160
"${OC[@]}" cron disable 3f46ba9b-1ec4-44a3-b402-e7458a4c0e38
"${OC[@]}" cron disable a7046889-4190-4df7-8b37-2243347dcd1f
"${OC[@]}" cron disable ac062761-66a3-4f0a-8811-dec198ba12c7
"${OC[@]}" cron disable e1ff7019-e805-4770-9329-d6656f85d021
"${OC[@]}" cron disable f24bbd94-c9be-4dba-9602-cfa266fffb9c
"${OC[@]}" cron list --json   # expect enabled=false for all six

# PDF-only rollback (preserves text/image/fallbacks; mutates stage config)
# "$STAGE_ROOT/probes/rollback-pdf.sh"

# Full stage stop (does not replace cron disable)
# "$STAGE_ROOT/probes/unload-stage.sh"
```

---

## C) Safe schedule enable (mutation + spend risk — Principal gate)

**Do not enable** until stage payloads match repo bounded procedures (`payloadHash` / message starts with `STAGE BOUNDED PROCEDURE`) and channels plan is explicit.

Ordered gate:

1. Confirm OpenRouter-only routing + `liveMutationAllowed=false` / `paidSpendEnablementAllowed=false`.
2. Apply `stage-ops-coordinator.ts update --emit-commands` so jobs are not STAGE_CANARY stubs.
3. Confirm `delivery.mode=none` for first canary.
4. Enable **one** job only; observe; disable on anomaly.
5. Never enable Repair Dispatcher until durable attempt + Main Approve stores exist (`blocked_no_store` otherwise).

```bash
# Example — enable heartbeat only after payload restore (NOT executed by audit agents)
# OPENCLAW_STATE_DIR=... node openclaw.mjs --profile lisa-stage cron enable 1684ea5f-47ea-464a-8f58-b5990b1ac160
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
disable agents.defaults.pdfModel only
preserve model.primary + fallbacks + imageModel
alternatePaidDocumentRoutingAllowed = false
liveLisaTouched = false
probe: LiNKplatform-staging/lisa/probes/rollback-pdf.sh
```

---

## E) Ship/Pull / Repair / GitOps honesty

| Surface                                              | Stage claim                                      |
| ---------------------------------------------------- | ------------------------------------------------ |
| Ship/Pull contracts + workshop wait/no-yield         | PASS in-repo                                     |
| Six bounded procedure payloads (repo SOT)            | PASS (package; stage apply still Principal gate) |
| Stage SQLite still holding STAGE_CANARY stubs        | HOLD until coordinator `update` applied          |
| Full Ship/Pull post-process (ACP wait → CAS → email) | HOLD until spend/ACP gate                        |
| Repair Dispatcher package + `blocked_no_store`       | PASS packaged; HOLD for durable stores / enable  |
| Main Approve store                                   | HOLD (`blocked_no_store`)                        |
| GitOps durable control plane                         | HOLD (IDE SoT; Lisa is consumer)                 |
| MiniMax PDF canary command                           | PASS packaged dry-run; HOLD for execute/proof    |

---

## Related artifacts

- Overlay: `linkbots/lisa/ops/model-routing.openrouter-stage.contract.json`
- Semantic contract: `linkbots/lisa/ops/model-routing.contract.json`
- Seed SOT: `linkbots/lisa/ops/jobs.stage-seed.json`
- Payload builders: `linkbots/lisa/ops/stage-ops-payloads.ts`
- Coordinator: `linkbots/lisa/ops/stage-ops-coordinator.ts`
- PDF canary: `linkbots/lisa/ops/stage-pdf-canary.ts`
- FAKE/TEMPLATE production gates: `docs/execution/openclawdevelopmentplan01/runbooks/stage-prod-canary-controls.md`
