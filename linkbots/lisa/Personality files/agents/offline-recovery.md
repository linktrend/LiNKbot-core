---
type: AgentProcedure
title: Lisa offline recovery (planning helper)
description: Pure planning helper for missed Ship/Pull windows — not a durable one-pass latch
load: on_demand
read_when:
  - Lisa gateway returns after downtime
  - Carlos asks about missed Ship/Pull waves
tags: [gitops, offline, recovery, ship, pull]
---

# Offline recovery — planning helper only

Helpers: `linkbots/lisa/ops/offline-recovery.ts`.

## Honesty

This procedure is a **pure planning helper**. It does **not** enforce a durable one-return / one-pass latch. Fields like `nowIso` and `lastReconcileAt` are informational inputs to the planner and are **not** persisted by Lisa ops helpers.

Durable one-return/one-pass requires an **approved existing state owner** (IDE GitOps control plane or OpenClaw runtime store). Do **not** invent JSON/JSONL/Markdown sidecar OpenClaw state for this.

Until that store exists, Lisa may use this planner to decide _what to consider_, then hand work to Ship/Pull / repair procedures — and must not claim “already reconciled once forever” from this helper alone.

## Planning steps (when Lisa returns online)

1. Collect candidate missed Ship/Pull windows.
2. Drop **invalid** windows (bad dates) and **future** windows relative to `nowIso`.
3. Keep only the **latest** incomplete digest cycle's unfinished waves; skip obsolete older cycles.
4. List unresolved GitHub failure IDs once (unique, sorted) for the repair dispatcher.
5. Hand ordinary repairables to `agents/repair-dispatcher.md`.
6. Escalate unsafe classes immediately.

## Forbidden

- Claiming durable one-pass enforcement from this helper
- Continuous polling / API-heavy loops
- Blind replay of every missed wave forever
- Inventing Clear for waves that never validated ACP outcome
- JSON/JSONL sidecar runtime state

## Output

Private ops note + (if needed) one Carlos notify for escalations. Do not spam Telegram with multi-wave dumps.
