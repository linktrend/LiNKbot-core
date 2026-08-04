---
type: AgentProcedure
title: Lisa GitOps Repair Dispatcher
description: Diagnose GitHub failures; dispatch Codex Terra Medium ACP repairs with exact binding; hold pending; max 3 genuine dispatches
load: on_demand
read_when:
  - GitHub CI/Bugbot failure needs Lisa supervision
  - Carlos asks about repair attempts or escalation
tags: [gitops, repair, acp, supervisor]
---

# Repair Dispatcher (Lisa GitOps supervisor)

**Candidate-only / non-live default (fail-closed):** Live ACP repair dispatch against Lisa is opt-in. Defaults in `ops/repair-dispatcher.ts` (`authorizeRepairLiveDispatch`) require explicit `liveLisaTargetingAllowed` **and** separately approved credentials language; otherwise dispatch is blocked. Do not mutate `~/.openclaw-lisa` from repository-only work.

Repository-side contract. Implementation helpers: `linkbots/lisa/ops/repair-dispatcher.ts`.

**IDE Development** owns the repair control-plane contract (issue #23 and related GitOps docs). Lisa consumes that contract; this file does not override IDE Development.

## Binding (exact — all four fields)

Every repair attempt is keyed by:

1. `repository`
2. `branch`
3. `prNumber` (nullable)
4. exact `headSha`

Different PRs that share a branch or head SHA are **separate** bindings.

## Flow

1. **Receive or reconcile** GitHub failure records (CI, Bugbot, gate failures).
2. **Diagnose first** — classify before any ACP spawn.
3. If an attempt for this **exact binding** is already `pending` (genuinely dispatched): **hold** — return no-new-dispatch. Never open attempt 2 merely because attempt 1 is pending.
4. **Dispatch Codex ACP Terra Medium** only for `ordinary_repairable` failures and only when no pending attempt exists for the binding.
5. Count **only genuinely dispatched** attempts (`dispatchedAt != null`). Held evaluations do not consume an attempt.
6. Maximum **three** genuine dispatches per binding, then escalate to Carlos.
7. **Resolve** only when proof matches repository + branch + PR + exact head SHA + recorded attempt number + successful required gates.
8. Reject stale head, unmatched binding, unrecorded attempt, or failed gates — do not treat as success.
9. **Notify Carlos** only after bounded repair fails, or **immediately** for unsafe classes below.

## Immediate escalate (no ACP dispatch)

- credentials / secrets / auth
- security
- destructive action
- ambiguous conflict (never choose sides arbitrarily)
- product decision
- approval required
- billing / usage limit
- unavailable required authority

## Hard stops

- Never approve or merge `main`.
- Never force-push.
- Stale-head repair success **cannot** resolve a current failure (proof SHA must equal current head).
- Use existing public ACP APIs only (`sessions_spawn` runtime `acp`). Do not invent MCP/auth/plugin-SDK surfaces here.
- If a new core/plugin-SDK/auth/MCP surface is required, stop and report to the LiNKbrain-coordinated workstream (do not edit forbidden surfaces).

## ACP repair spawn (ordinary only)

```json
{
  "task": "<repair brief bound to repo/branch/PR/headSha>",
  "runtime": "acp",
  "agentId": "codex",
  "model": "openai/gpt-5.6-terra",
  "thinking": "medium"
}
```

If Codex ACP or Terra Medium is unavailable, stop fail-closed. No Cursor/Grok fallback, Cursor Automation/webhook, internal subagent, direct/self edits, no self-write, or alternate automation. Do not spawn Cursor.

After a genuine dispatch, `sessions_wait` is required to obtain the terminal registry outcome; `sessions_yield` is forbidden. Do not poll. This preserves the exact binding, durable Repair/Main Approve stores, and max-attempt contract — see `linkbots/lisa/docs/LISA-OPS-CORE-PREREQUISITE.md`.
