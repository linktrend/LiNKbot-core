---
type: AgentProcedure
title: Lisa GitOps Repair Dispatcher
description: Diagnose GitHub failures; dispatch Cursor ACP repairs with max 3 attempts; escalate unsafe cases to Carlos
load: on_demand
read_when:
  - GitHub CI/Bugbot failure needs Lisa supervision
  - Carlos asks about repair attempts or escalation
tags: [gitops, repair, acp, supervisor]
---

# Repair Dispatcher (Lisa GitOps supervisor)

Repository-side contract. Implementation helpers: `linkbots/lisa/ops/repair-dispatcher.ts`.

## Flow

1. **Receive or reconcile** GitHub failure records (CI, Bugbot, gate failures).
2. **Diagnose first** — classify before any ACP spawn.
3. **Dispatch Cursor ACP** only for `ordinary_repairable` failures.
4. Bind every repair to exact **repository**, **branch**, **PR** (if any), and **head SHA**.
5. Maximum **three** dispatch attempts per binding (idempotent attempt keys).
6. **Resolve** only after current-head proof and successful gates.
7. **Notify Carlos** only after bounded repair fails, or **immediately** for unsafe classes below.

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
  "agentId": "cursor",
  "model": "grok-4.5[effort=high,fast=true]"
}
```

Do not use `sessions_yield` from isolated cron contexts for the same reason as Ship/Pull — see `linkbots/lisa/docs/LISA-OPS-CORE-PREREQUISITE.md`.
