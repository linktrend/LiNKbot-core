# OCP-W20-CROSS-REPO-INTEGRATION — Lane C evidence

| Field                         | Value                                                 |
| ----------------------------- | ----------------------------------------------------- |
| Lane                          | C — Routing / staged canary                           |
| Model                         | cursor-grok-4.5-high                                  |
| Branch                        | `ocp-w20-cross-repo-integration-cli`                  |
| Base SHA                      | `3169119fb697fa28cc6d2c244231729a8206e68d` (no drift) |
| Date                          | 2026-08-01 Asia/Taipei                                |
| Live Lisa mutation            | **none**                                              |
| Credentials / paid enablement | **none**                                              |
| Result                        | `needs_human_gate` (PDF cutover retained disabled)    |

## Mission outcomes

1. Preserved approved routing intent:
   - primary `openai/gpt-5.6-luna` medium
   - default fallback `zai/glm-5.2`
   - MiniMax-M3 via `imageModel` only
   - next fallback `moonshot/kimi-k3`
   - utility `openrouter/google/gemini-3.5-flash-lite`
   - paid Nemotron eval-only (`enabledInDefaults: false`)
2. MiniMax-M3 PDF **unproven** — machine-readable cutover retained:
   - `pdfDocumentModelsCutover.state: "needs_human_gate"`
   - `documentModelsEnabled: false`
   - `alternatePaidDocumentRoutingAllowed: false`
   - observed media PDF textExtraction: `MiniMax-M2.7`
3. `liveMutationAllowed: false`, `paidSpendEnablementAllowed: false`
4. Canary runbook updated: staged canary non-live by default; PDF/paid hard stops named
5. New focused contract tests added (did not edit `lisa-ops.test.ts`)

## READ-ONLY MiniMax PDF evidence

| Source                                               | Finding                                                                            |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `extensions/minimax/provider-models.ts`              | `MiniMax-M3` catalog `input: ["text", "image"]` — no pdf capability listed         |
| `extensions/minimax/media-understanding-provider.ts` | `documentModels.pdf.textExtraction: "MiniMax-M2.7"`, `image: false` (api + portal) |
| `extensions/minimax/openclaw.plugin.json`            | Same PDF metadata under `mediaUnderstandingProviderMetadata`                       |

**Conclusion:** Do not claim MiniMax-M3 PDF support. Do not substitute another paid document model. Human gate required before any live `documentModels` enablement.

## Changed paths (Lane C ownership only)

- `linkbots/lisa/ops/model-routing-contract.ts`
- `linkbots/lisa/ops/model-routing.contract.json`
- `linkbots/lisa/docs/LISA-MODEL-ROUTING-CONTRACT-2026-08-01.md`
- `docs/execution/openclawdevelopmentplan01/runbooks/stage-prod-canary-controls.md`
- `linkbots/lisa/ops/model-routing-contract.test.ts` (created)
- `docs/evidence/ocp-w20-cross-repo-integration/lane-c.md` (this file)

## Validation

```text
node --experimental-strip-types --test linkbots/lisa/ops/model-routing-contract.test.ts
# 5 passed, 0 failed
```

Exact packet command `node --test linkbots/lisa/ops/model-routing-contract.test.ts` requires TypeScript strip support; used `--experimental-strip-types` (same runner family as existing lisa-ops tests).

## Hard stops honored

- No live profile update
- No credentials / Keychain
- No paid spend enablement
- No merge/promote/deploy
- No edits outside Lane C ownership
