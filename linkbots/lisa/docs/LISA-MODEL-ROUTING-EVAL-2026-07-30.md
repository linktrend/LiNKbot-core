# Lisa model routing evaluation (read-only) — 2026-07-30

**Status:** recommendation only — do **not** edit live or repo `openclaw.json` model config until Carlos + Codex approve.

**Sources:** OpenClaw `docs/concepts/model-providers.md`, `docs/tools/pdf.md` (imageModel/pdfModel), OpenRouter model pages, MiniMax platform docs, personality `openclaw.json` defaults on `origin/development`.

## Current (live / personality defaults)

| Role                     | Identifier                            |
| ------------------------ | ------------------------------------- |
| Primary                  | `openrouter/minimax/minimax-m3`       |
| Fallback 1               | `openrouter/deepseek/deepseek-v4-pro` |
| Fallback 2 / local-coder | `ollama/qwen3.5:9b`                   |
| imageModel               | none dedicated                        |
| Cursor ACP               | `grok-4.5[effort=high,fast=true]`     |
| Free Nemotron            | registered for eval (remove)          |

## Proposed target vs verified IDs

| Role                 | Carlos proposal       | Verified OpenClaw / OpenRouter id                                                                     | Available?     | Notes                                                                                                                                                                                                                                                                     |
| -------------------- | --------------------- | ----------------------------------------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary              | GLM-5.2               | Prefer `zai/glm-5.2` (native Z.AI) or `openrouter/z-ai/glm-5.2`                                       | Yes            | OpenClaw docs example `zai/glm-5.2`. Text, tools, structured output, ~1M context. Paid.                                                                                                                                                                                   |
| Image/PDF            | MiniMax-M3            | `openrouter/minimax/minimax-m3` or `minimax/MiniMax-M3`                                               | Yes (vision)   | Native image/video. PDF usually via OpenRouter parse or `pdfModel` fallback. OpenClaw MiniMax plugin historically uses `MiniMax-VL-01` for media provider — M3 is OK as `agents.defaults.imageModel` chat-vision route; confirm VL-01 only if media-plugin path required. |
| First fallback       | Kimi K3               | `openrouter/moonshotai/kimi-k3` or `moonshot/kimi-k3`                                                 | Yes            | Multimodal; strong agent/coding. Paid. Prefer OpenRouter if one-key routing.                                                                                                                                                                                              |
| Utility              | Gemini 3.5 Flash-Lite | `openrouter/google/gemini-3.5-flash-lite`                                                             | Yes            | Fast/cheap utility/subagent. Paid (low). Privacy: Google/OpenRouter retention.                                                                                                                                                                                            |
| Eval Nemotron (paid) | keep paid             | `openrouter/nvidia/nemotron-3-super-120b-a12b` (or native `nvidia/nvidia/nemotron-3-super-120b-a12b`) | Yes            | **Replace free.** Ultra (`…-ultra-550b-a55b`) optional heavier eval.                                                                                                                                                                                                      |
| Free Nemotron        | remove                | `…:free` variants                                                                                     | Yes but remove | Do not keep free Ultra/Super/Nano for Lisa.                                                                                                                                                                                                                               |
| Cursor               | keep Grok 4.5         | `grok-4.5[effort=high,fast=true]`                                                                     | Yes            | Unchanged.                                                                                                                                                                                                                                                                |
| Local coder          | keep Qwen             | `ollama/qwen3.5:9b`                                                                                   | Yes (local)    | Keep as **local-coder route**; optionally also last emergency fallback.                                                                                                                                                                                                   |

## Compatibility / behavior

- **OpenClaw:** Z.AI, OpenRouter, Moonshot, MiniMax, Google-via-OpenRouter, NVIDIA, Ollama all have bundled/provider paths.
- **Tool calling / structured output:** GLM-5.2, Kimi K3, MiniMax-M3, Gemini Flash-Lite, Nemotron Super — all advertise tools on OpenRouter; validate live once before cutover.
- **Failure/fallback:** Primary GLM → Kimi K3 → (optional) MiniMax text or Gemini utility → local Qwen last resort. Do not put free Nemotron in the chain.
- **Privacy:** OpenRouter/Z.AI/Moonshot/Google/NVIDIA = cloud retention per provider ToS. Local Qwen = on-box. Prefer local for sensitive scratch when Carlos requires it.
- **Unused aliases to remove:** DeepSeek primary fallback, Kimi K2 aliases, Qwen 3.6+ cloud aliases if unused, Sonnet 5 manual-only clutter if unused, all `:free` Nemotron ids.

## Recommendation (plain English)

1. Switch Lisa default to **GLM-5.2** via Z.AI if GSM already has `ZAI_API_KEY`, else OpenRouter `openrouter/z-ai/glm-5.2`.
2. Set **imageModel** (and pdfModel fallback) to **MiniMax-M3** on the same OpenRouter/MiniMax path already used today.
3. First chat fallback: **Kimi K3**.
4. Utility / high-volume short jobs: **Gemini 3.5 Flash-Lite**.
5. Eval: paid **Nemotron 3 Super** (`openrouter/nvidia/nemotron-3-super-120b-a12b`); remove all free Nemotron.
6. Keep Cursor Grok 4.5 High fast unchanged.
7. Keep local Qwen as **local-coder** and as **last emergency fallback** (both) until a better on-box model is approved.
8. Remove DeepSeek from the default fallback chain unless Carlos wants it retained as an explicit named alias.

## Proposed final routing table (not applied)

| Slot                                    | Model ref                                                                                    |
| --------------------------------------- | -------------------------------------------------------------------------------------------- |
| `agents.defaults.model.primary`         | `zai/glm-5.2` **or** `openrouter/z-ai/glm-5.2`                                               |
| `agents.defaults.model.fallbacks[0]`    | `openrouter/moonshotai/kimi-k3`                                                              |
| `agents.defaults.model.fallbacks[1]`    | `openrouter/google/gemini-3.5-flash-lite` (utility) **or** skip if utility is separate agent |
| `agents.defaults.model.fallbacks[last]` | `ollama/qwen3.5:9b`                                                                          |
| `agents.defaults.imageModel.primary`    | `openrouter/minimax/minimax-m3`                                                              |
| Eval alias                              | `openrouter/nvidia/nemotron-3-super-120b-a12b`                                               |
| Cursor                                  | `grok-4.5[effort=high,fast=true]`                                                            |
| local-coder                             | `ollama/qwen3.5:9b`                                                                          |

## Decisions for Carlos / Codex

1. Z.AI direct (`zai/glm-5.2`) vs OpenRouter (`openrouter/z-ai/glm-5.2`)?
2. Utility Gemini as fallback slot vs dedicated agent id only?
3. Nemotron Super vs Ultra for paid eval budget?
4. Confirm remove DeepSeek from default chain?
5. Confirm MiniMax-M3 as imageModel (not MiniMax-VL-01 media plugin)?

**Stop for approval — no config edits in this task.**
