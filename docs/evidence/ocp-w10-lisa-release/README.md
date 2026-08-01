# OCP-W10-LISA-RELEASE — combined rollout evidence (docs only)

| Field              | Value                                  |
| ------------------ | -------------------------------------- |
| Packet             | `OCP-W10-LISA-RELEASE`                 |
| Branch             | `dev/cloudcursor/OCP-W10-LISA-RELEASE` |
| Date               | 2026-08-01 Asia/Taipei                 |
| Live Lisa mutation | **none**                               |
| Production deploy  | **not claimed**                        |

## Verified inputs (fresh resolve)

| Stream                   | Branch                                | Tip SHA                                    |
| ------------------------ | ------------------------------------- | ------------------------------------------ |
| PR #38 PACI/Brain/Skills | `issue/ocp-openclawdevelopmentplan01` | `3c8dbf9f5741cad1d1cd50d88b260be48dfa97e5` |
| ACP sessions_wait        | `issue/ocp-acp-wait-reentry`          | `0675755d170aaa264dac898081cc10d58af017a4` |
| Lisa ops allowlisting    | `issue/ocp-lisa-ops01`                | `fb9fe4b68b85fd866670ce748ba1c060cab6a323` |

Path intersections vs `origin/development` among the three streams: **empty** (safe to integrate).

## Release graph (owned surfaces)

```text
PR #38 (PACI / linkbrain / linkskills)
        \
         +--> RC branch ──> development (PR) ──> staging/main (Principal only)
        /         ^
ACP sessions_wait |     (no live profile sync in this packet)
Lisa ops01 -------+
Model routing contract (non-live JSON + TS)
Cron / heartbeat / digest (docs + templates ownership)
Ship/Pull post-processing (sessions_wait + allowlists)
Repair Dispatcher / GitOps supervision (ops contracts)
```

| Surface                    | Ownership on RC                              | Live deploy status |
| -------------------------- | -------------------------------------------- | ------------------ |
| PACI / Brain / Skills      | PR #38 tip integrated                        | deferred           |
| `sessions_wait`            | ACP tip integrated + Ship/Pull docs wired    | deferred           |
| Lisa ops allowlisting      | ops01 tip integrated                         | deferred           |
| Model routing              | `linkbots/lisa/ops/model-routing.contract.*` | non-live only      |
| Cron / heartbeat / digest  | personality + templates + ops tests          | deferred           |
| Ship/Pull post-processing  | `sessions_wait` procedure + allowlist docs   | deferred           |
| Repair Dispatcher / GitOps | `ops/repair-dispatcher.ts` + agents docs     | deferred           |

## Independent ACP verification (pre-integration)

- Inspected `src/agents/tools/sessions-wait-tool.ts`: wakes via `onSubagentRegistryPersisted` + single deadline timer; description forbids poll/`sessions_yield`.
- Command: `node scripts/run-vitest.mjs src/agents/tools/sessions-wait-tool.test.ts src/agents/tools/agents-wait-tool.test.ts`
- Result: **19 passed** (recorded before merge onto PR #38 head).

## Model identifier verification (no secrets)

| Slot             | Ref                   | Sources                                                                                                                |
| ---------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Primary          | `openai/gpt-5.6-luna` | OpenClaw repo GPT-5.6 Luna routes / AGENTS examples                                                                    |
| Default fallback | `zai/glm-5.2`         | `extensions/zai/model-definitions.ts`; https://docs.z.ai/guides/llm/glm-5.2                                            |
| Image/PDF        | `minimax/MiniMax-M3`  | imageModel only (catalog text+image). PDF documentModels not in fragment; MiniMax media PDF defaults M2.7 — human gate |

| Next fallback | `moonshot/kimi-k3` | `extensions/moonshot/provider-policy-api.ts`; Moonshot + OpenRouter docs |
| Utility | `openrouter/google/gemini-3.5-flash-lite` | https://openrouter.ai/google/gemini-3.5-flash-lite |
| Eval-only | `nvidia/nemotron-3-super-120b-a12b` | `extensions/nvidia/provider-catalog.ts` — **disabled** |

## Hard stops honored

- No live Lisa profile mutation
- No credential creation/entry
- No IDE Development edits
- No production migration/deployment
- No paid/ongoing cost enablement
- CI/Bugbot deferred per packet
