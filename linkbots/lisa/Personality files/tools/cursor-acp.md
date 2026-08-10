---
type: ToolReference
title: Cursor / ACP (OpenClaw acpx) — Full Reference
description: How to spawn Cursor via ACP, forbidden substitutes, honest reporting, and headless CLI quirks
load: on_demand
read_when:
  - Carlos says use/delegate to/send to Cursor and Lisa needs the exact call
  - An ACP Cursor spawn fails and Lisa needs to know what to report and what NOT to do
  - Carlos asks how the bind/unbind direct-Cursor mode works
tags: [cursor, acp, acpx, tools]
---

# Cursor / ACP (OpenClaw acpx) — Full Reference

**Ownership rule:** only `development-orchestrator` may invoke this route for a scored 0–2 coding packet. Lisa always delegates coding to `development-orchestrator`; she never invokes Cursor directly or edits code herself.

Lisa gateway uses `acp.backend: acpx` with `defaultAgent: cursor` (`cursor-agent acp`). ACP coding is **not** the Cursor TypeScript SDK path.

**Critical id rule (2026-07-21):** Cursor ACP on this machine advertises `grok-4.5[effort=high,fast=true]` (among other non-Grok models). CLI catalog ids (`cursor-grok-4.5-medium`) and unadvertised bracket forms (`grok-4.5[effort=medium,fast=false]`, `grok-4.5[effort=high,fast=false]`) **fail** `session/set_config_option` and show as Tool error / failed yield if tried first. Always request the live advertised id below.

**Trigger:** the Development Orchestrator score is 0–2, or Carlos explicitly requests Cursor and no hard gate applies.

**Required action:** the Development Orchestrator calls `sessions_spawn` with `runtime: "acp"`, `agentId: "cursor"`, the complete packet, and the exact model below. It waits, verifies the result, and checks ACP status for the applied model.

## Model preference (wired 2026-07-21 — durable)

**Default / only Grok request:**

1. **`grok-4.5[effort=high,fast=true]`** — Grok 4.5 High fast — **must be first spawn attempt**

Do **not** request medium/no-fast or `cursor-grok-4.5-medium` first. Alias remaps in the fork still resolve to high-fast.

**How it is enforced (do not improvise other models):**

- Live config: `agents.list` entry `id: "cursor"` with `runtime.type: "acp"` and `model.primary: "grok-4.5[effort=high,fast=true]"`.
- Live acpx: `plugins.entries.acpx.config.agents.cursor` launches `cursor-agent acp` (no CLI `--model`; ACP model is applied via advertised sessionOptions).
- Fork behavior: maps CLI aliases and unadvertised Grok bracket ids → `grok-4.5[effort=high,fast=true]` so the first attempt succeeds.

**The Development Orchestrator must request the preferred model explicitly:**

```json
{
  "task": "<clear coding brief>",
  "runtime": "acp",
  "agentId": "cursor",
  "model": "grok-4.5[effort=high,fast=true]"
}
```

Do **not** substitute Composer/GPT/Claude/Auto. On failure, record the verbatim error and escalate exactly once to native OAuth Luna High.

**Forbidden substitutes — NEVER:**

- `runtime: "subagent"` (internal Lisa subagent — DeepSeek, etc.)
- Lisa writing/editing code herself via `write` / `edit` / `apply_patch` when Carlos asked for Cursor
- Labeling subagent or self-work as "Cursor"

**On spawn failure:** preserve the error in the route receipt and escalate once to Luna High. A second failure stops the packet. Never retry Cursor in a loop.

**`apply_patch`/`edit` note (2026-07-20):** Both are technically allowed on Lisa's main session again — they had to be, because OpenClaw's ACP runtime inherits the requester's own tool-deny list before it will start a Cursor ACP session at all, so denying Lisa either one was also denying her the ability to spawn Cursor via `runtime: "acp"` (`apply_patch` was tried first; testing then showed `edit` is separately required too — `runtime="acp" is unavailable because the requester denies edit`). This does **not** relax the forbidden-substitutes rule above. The only time Lisa may call `apply_patch`/`edit` herself is when Cursor ACP is confirmed unavailable (a real spawn failure, quoted verbatim) **and** Carlos has explicitly told her to fix it directly in that conversation. Any other direct `apply_patch`/`edit` call from Lisa's main session (`agent:main:main`) triggers an automatic Telegram alert to Carlos (`~/.openclaw-lisa/tripwire/apply-patch-tripwire.mjs`, via the `apply-patch-tripwire` cron job, every 5 minutes) — it is not a silent bypass.

**Optional (direct bind):** Carlos may run **`/acp doctor`**, then **`/acp spawn cursor --bind here`** to talk to Cursor directly in-thread until `/acp unbind`. This bypasses Lisa orchestration; use when Carlos wants hands-on Cursor, not when Lisa should coordinate.

**Honest reporting (required):**

- Say **Cursor** only when `sessions_spawn` with `runtime: "acp"` **succeeds** (accepted status / ACP session key).
- Internal `runtime: "subagent"` work is **Lisa subagent** — never "Cursor (via subagent)".
- When reporting model, prefer the applied advertised Grok id (`grok-4.5[effort=high,fast=true]`), not a guess.

Headless `cursor-agent -p` still needs `PATH` with `~/.local/bin` and `-f --trust` on throwaway workspaces; unset `CURSOR_AGENT` when not inside Cursor IDE exec.

**Sandbox note:** `sandbox.mode: non-main` (see `TOOLS.md` § Sandbox). Cursor ACP keeps its configured Grok high-fast mapping and should be verified after sandbox changes.

**Deeper LiNKdeveloper supervision workflow (monitoring, stalled-agent recovery, multi-repo scanning):** `memory/linkdeveloper.md`.
