# LISA-MODEL-ROUTING-CONTRACT — 2026-08-01

**Status:** approved non-live workshop contract (OCP-W10 freeze; OCP-W20 candidate strengthen).
**Do not** edit live `~/.openclaw-lisa/openclaw.json` from this document.
**Staged canary:** non-live by default (`liveMutationAllowed: false`).

## Code + fragment

- TypeScript: `linkbots/lisa/ops/model-routing-contract.ts`
- JSON fragment: `linkbots/lisa/ops/model-routing.contract.json`
- Contract tests: `linkbots/lisa/ops/model-routing-contract.test.ts`
- Prior eval notes (superseded for defaults): `LISA-MODEL-ROUTING-EVAL-2026-07-30.md`

## Approved slots

1. Primary: `openai/gpt-5.6-luna`, reasoning effort **medium**
2. Default fallback: `zai/glm-5.2`
3. Image (`agents.defaults.imageModel`): `minimax/MiniMax-M3` (catalog text+image only)
4. Next fallback: `moonshot/kimi-k3`
5. Utility: `openrouter/google/gemini-3.5-flash-lite`
6. Evaluation-only: `nvidia/nemotron-3-super-120b-a12b` — **not** in defaults; no `:free`; no paid spend enablement

## PDF cutover (machine-readable)

| Field | Value |
| ----- | ----- |
| `pdfDocumentModelsCutover.state` | `needs_human_gate` |
| `documentModelsEnabled` | `false` |
| Observed media PDF textExtraction | `MiniMax-M2.7` (not M3) |
| Alternate paid document routing | **forbidden** |

**Do not claim MiniMax-M3 PDF support.** Local provider config (`extensions/minimax/media-understanding-provider.ts`, plugin metadata) defaults PDF textExtraction to `MiniMax-M2.7` with `image: false`. Catalog input for M3 is `text`+`image` only. Human gate required before any live `documentModels` enablement; do not substitute another paid model for documents.

## Hard stops

- `liveMutationAllowed: false`
- `paidSpendEnablementAllowed: false`
- No live profile sync from this contract alone
- Staged canary controls remain FAKE/TEMPLATE / non-live by default (see `docs/execution/openclawdevelopmentplan01/runbooks/stage-prod-canary-controls.md`)

## Rollout gate

Live profile sync requires a separate human-approved rollout after this RC lands toward `development`. PDF documentModels cutover requires an additional human gate after MiniMax-M3 PDF capability is proven.
