# LISA-MODEL-ROUTING-CONTRACT — 2026-08-01

**Status:** approved non-live workshop contract for packet `OCP-W10-LISA-RELEASE`.
**Do not** edit live `~/.openclaw-lisa/openclaw.json` from this document.

## Code + fragment

- TypeScript: `linkbots/lisa/ops/model-routing-contract.ts`
- JSON fragment: `linkbots/lisa/ops/model-routing.contract.json`
- Prior eval notes (superseded for defaults): `LISA-MODEL-ROUTING-EVAL-2026-07-30.md`

## Approved slots

1. Primary: `openai/gpt-5.6-luna`, reasoning effort **medium**
2. Default fallback: `zai/glm-5.2`
3. Image/PDF: `minimax/MiniMax-M3`
4. Next fallback: `moonshot/kimi-k3`
5. Utility: `openrouter/google/gemini-3.5-flash-lite`
6. Evaluation-only: `nvidia/nemotron-3-super-120b-a12b` — **not** in defaults; no `:free`; no paid spend enablement

## Rollout gate

Live profile sync requires a separate human-approved rollout after this RC lands toward `development`.
