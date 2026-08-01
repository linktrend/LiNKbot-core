# LISA-MODEL-ROUTING-CONTRACT — 2026-08-01

**Status:** approved non-live workshop contract (OCP-W10 freeze; OCP-W20 candidate strengthen; OCP-W30 Principal-approved MiniMax-M3 PDF/document candidate at `approved_unverified`).
**Do not** edit live `~/.openclaw-lisa/openclaw.json` from this document.
**Staged canary:** non-live by default (`liveMutationAllowed: false`).

## Code + fragment

- TypeScript: `linkbots/lisa/ops/model-routing-contract.ts`
- JSON fragment: `linkbots/lisa/ops/model-routing.contract.json`
- Contract tests: `linkbots/lisa/ops/model-routing-contract.test.ts`
- Prior eval notes (superseded for defaults): `LISA-MODEL-ROUTING-EVAL-2026-07-30.md`
- Release graph: `docs/evidence/ocp-w30-approved-pdf-routing/release-graph.md`

## Approved slots

1. Primary: `openai/gpt-5.6-luna`, reasoning effort **medium**
2. Default fallback: `zai/glm-5.2`
3. Image (`agents.defaults.imageModel`): `minimax/MiniMax-M3` (catalog text+image)
4. PDF / documentModels (candidate): `minimax/MiniMax-M3` — capability **`approved_unverified`**
5. Next fallback: `moonshot/kimi-k3`
6. Utility: `openrouter/google/gemini-3.5-flash-lite`
7. Evaluation-only: `nvidia/nemotron-3-super-120b-a12b` — **not** in defaults; no `:free`; no paid spend enablement

## PDF cutover (machine-readable)

| Field                            | Value                                                                                       |
| -------------------------------- | ------------------------------------------------------------------------------------------- |
| `pdfDocumentModelsCutover.state` | Principal-approved **candidate** (capability `approved_unverified`) — not production-proven |
| PDF / documentModels candidate   | `minimax/MiniMax-M3`                                                                        |
| Capability class                 | `approved_unverified`                                                                       |
| First proof                      | controlled production rollout (separately authorized; **not claimed done here**)            |
| Alternate paid document routing  | **forbidden**                                                                               |

**Candidate honesty:** MiniMax-M3 is the approved PDF/document **candidate** under `approved_unverified`. Do **not** claim MiniMax-M3 PDF support is proven, accepted, or live from this contract alone. Observed media PDF textExtraction historically defaulted to `MiniMax-M2.7`; that history does not block the candidate naming, and it does not constitute M3 PDF proof.

**First-production-proof receipt** is required before any success claim. Deployment, credentials/live profile sync, and final acceptance remain **separate human gates**.

## Hard stops

- `liveMutationAllowed: false`
- `paidSpendEnablementAllowed: false`
- No live profile sync from this contract alone
- Staged canary controls remain FAKE/TEMPLATE / non-live by default (see `docs/execution/openclawdevelopmentplan01/runbooks/stage-prod-canary-controls.md`)
- No paid substitute if PDF document routing fails

## Fail-closed rollback (PDF only)

On provider/PDF failure during a separately authorized rollout:

1. Disable **PDF document routing only**
2. Preserve text, image (`imageModel`), and default-fallback routes
3. Emit a non-secret failure event
4. Do **not** route documents to another paid model

Candidate git rollback: revert the OCP-W30 candidate commit; live Lisa stays untouched.

## Rollout gate

Live profile sync requires a separate human-approved rollout after this RC lands toward `development`. Controlled **first-PDF proof** occurs only during that separately authorized production rollout. Success claims require a first-production-proof receipt. Final acceptance is a further human gate after that receipt. CI/Bugbot remain deferred until explicitly run.

**Future canary/rollback operational plan (docs only):** `docs/evidence/ocp-w70-lisa-canary-rollback-plan/README.md`.
