# Runbook — Mac Mini lisa-stage ops canary (OpenRouter-only)

**Domain:** Lisa stage (Mac Mini) only  
**Owner:** OpenClaw Lisa / stage coordinator  
**Tier:** Stage ops readiness — **no enable / no model invoke / no mutation from audit sessions** unless Principal authorizes  
**Out of scope:** live Lisa (`~/.openclaw-lisa` / 18790), VPS, IDE Development, merge/promote, cloud/Supabase credential mutation

**Hard stops:** secrets in argv/logs; enabling schedules without Principal gate; claiming MiniMax-M3 PDF proven without first-production-proof receipt; requesting direct provider keys (OpenRouter credential only); touching live Lisa.

---

## Verified stage posture (read-only audit 2026-08-03)

| Surface          | Truth                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------- |
| Stage root       | `LiNKplatform-staging/lisa` (profile `lisa-stage`, port **18791**)                             |
| Routing          | OpenRouter-only overlay — see `linkbots/lisa/ops/model-routing.openrouter-stage.contract.json` |
| Primary          | `openrouter/openai/gpt-5.6-luna`, `thinkingDefault: medium`                                    |
| Fallbacks        | GLM-5.2 → Kimi K3 → Gemini 3.5 Flash-Lite (all `openrouter/...`)                               |
| Image/PDF        | `openrouter/minimax/minimax-m3` via `imageModel` + `pdfModel`; PDF `approved_unverified`       |
| Eval             | Nemotron OpenRouter ref — **not** in defaults / modelPolicy.allow                              |
| Cron             | **6** jobs installed, **all `enabled=false`**, prior dry-run force-runs `last_run_status=ok`   |
| Repair           | **Not** installed on stage (planner contracts only)                                            |
| Native heartbeat | `every: 0m` (disabled); wall-clock owned by `lisa-heartbeat-45` when enabled                   |

Job IDs observed 2026-08-03 (re-verify with `cron list` before mutate):

| Name                | job_id                                 |
| ------------------- | -------------------------------------- |
| lisa-heartbeat-45   | `1684ea5f-47ea-464a-8f58-b5990b1ac160` |
| lisa-morning-digest | `3f46ba9b-1ec4-44a3-b402-e7458a4c0e38` |
| lisa-ship-05        | `a7046889-4190-4df7-8b37-2243347dcd1f` |
| lisa-pull-07        | `ac062761-66a3-4f0a-8811-dec198ba12c7` |
| lisa-ship-16        | `e1ff7019-e805-4770-9329-d6656f85d021` |
| lisa-pull-18        | `f24bbd94-c9be-4dba-9602-cfa266fffb9c` |

Prior `ok` force-runs were **STAGE_CANARY one-liner dry-runs** (`toolsAllow=["read"]`, `delivery=none`), not full HEARTBEAT/digest/Ship-Pull procedures.

---

## A) Read-only inventory (safe anytime)

```bash
STAGE_ROOT="/Users/linktrend/Projects/LiNKplatform-staging/lisa"
ENGINE="/Users/linktrend/Projects/openclaw_prime/openclaw.mjs"
export PATH="/opt/homebrew/opt/node@24/bin:$PATH"

"$STAGE_ROOT/probes/health.sh"

OPENCLAW_STATE_DIR="$STAGE_ROOT" \
node "$ENGINE" --profile lisa-stage cron list --json

# Redacted routing check (names only)
python3 - <<'PY'
import json
from pathlib import Path
d=json.loads(Path("/Users/linktrend/Projects/LiNKplatform-staging/lisa/openclaw.json").read_text())["agents"]["defaults"]
print({k:d.get(k) for k in ("model","imageModel","pdfModel","thinkingDefault")})
PY
```

Repo contract tests (no stage mutation):

```bash
node --experimental-strip-types --test \
  linkbots/lisa/ops/lisa-ops.test.ts \
  linkbots/lisa/ops/model-routing-contract.test.ts \
  linkbots/lisa/ops/model-routing.openrouter-stage.test.ts
```

---

## B) Safe schedule disable / rollback (mutation — Principal gate)

Keep or restore **disabled** schedules. Prefer disable-all before unload.

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

**Do not enable** while payloads remain STAGE_CANARY stubs or channels are unset without an explicit canary plan.

Ordered gate:

1. Confirm OpenRouter-only routing + `liveMutationAllowed=false` / `paidSpendEnablementAllowed=false`.
2. Restore real procedure `messageFile` + `toolsAllow` (Ship/Pull must include `sessions_wait`, exclude `sessions_yield`).
3. Confirm delivery mode (prefer `none` for first canary).
4. Enable **one** job only; observe; disable on anomaly.
5. Never enable Repair Dispatcher until durable attempt store exists.

```bash
# Example — enable heartbeat only after payload restore (NOT executed by audit agents)
# OPENCLAW_STATE_DIR=... node openclaw.mjs --profile lisa-stage cron enable 1684ea5f-47ea-464a-8f58-b5990b1ac160
```

Optional dry-run while still disabled (still spend-capable if model is called):

```bash
# Prefer inventory over force-run for Ship/Pull (force-run can announce Clear/Issues).
# OPENCLAW_STATE_DIR=... node openclaw.mjs --profile lisa-stage cron run <job-id> --wait --wait-timeout 5m
```

---

## D) Real MiniMax PDF canary procedure (stage-only; Principal gate)

Capability remains **`approved_unverified`**. Success requires a **first-production-proof receipt**. OpenRouter-only — never mint MiniMax direct keys.

### Preconditions

- lisa-stage healthy on 18791; live Lisa fingerprints unchanged
- `agents.defaults.pdfModel.primary == openrouter/minimax/minimax-m3`
- `model-routing.stage.json` / overlay: `capabilityStatus=approved_unverified`, `paidSpendEnablementAllowed=false`
- Rollback probe present: `probes/rollback-pdf.sh`
- Backup: `openclaw.json.last-good` present

### Steps (coordinator-owned)

1. **Static gate (no spend):** confirm refs + hard stops + last-good backup.
2. **Controlled PDF call (spend):** one authorized stage agent turn attaching a tiny non-secret PDF through `pdfModel` / document path. Record model ref, outcome, latency, and non-secret error class.
3. **Pass receipt:** write `receipts/pdf-first-production-proof-<date>.json` with `capabilityStatus` promotion **only if** Principal accepts; otherwise leave `approved_unverified`.
4. **Fail path:** run `probes/rollback-pdf.sh` (clears `pdfModel` only); confirm primary/image/fallbacks unchanged; emit `pdf_document_routing_validation_failure`; **no** paid alternate model.
5. **Never** claim proven PDF from static dry-run alone.

### Rollback truth

```text
disable agents.defaults.pdfModel only
preserve model.primary + fallbacks + imageModel
alternatePaidDocumentRoutingAllowed = false
liveLisaTouched = false
```

---

## E) Ship/Pull / Repair / GitOps honesty

| Surface                                              | Stage claim                      |
| ---------------------------------------------------- | -------------------------------- |
| Ship/Pull contracts + workshop wait/no-yield         | PASS in-repo                     |
| Stage dry-run cron ok                                | PASS (stub payloads only)        |
| Full Ship/Pull post-process (ACP wait → CAS → email) | HOLD until spend/ACP gate        |
| Repair Dispatcher install                            | HOLD (not in six-job stage set)  |
| Main Approve store                                   | HOLD (`blocked_no_store`)        |
| GitOps durable control plane                         | HOLD (IDE SoT; Lisa is consumer) |

---

## Related artifacts

- Overlay: `linkbots/lisa/ops/model-routing.openrouter-stage.contract.json`
- Semantic contract: `linkbots/lisa/ops/model-routing.contract.json`
- Seed SOT: `linkbots/lisa/ops/jobs.stage-seed.json`
- FAKE/TEMPLATE production gates: `docs/execution/openclawdevelopmentplan01/runbooks/stage-prod-canary-controls.md`
