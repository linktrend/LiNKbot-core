---
type: AgentProcedure
title: Lisa offline recovery
description: One-shot reconcile of missed Ship/Pull windows and unresolved GitHub failures when Lisa returns online
load: on_demand
read_when:
  - Lisa gateway returns after downtime
  - Carlos asks about missed Ship/Pull waves
tags: [gitops, offline, recovery, ship, pull]
---

# Offline recovery (repository-side)

Helpers: `linkbots/lisa/ops/offline-recovery.ts`.

## When Lisa returns online

Run **one** reconcile pass:

1. Collect missed Ship/Pull windows since last successful cycle.
2. Keep only the **latest** incomplete digest cycle's unfinished waves.
3. **Do not** blindly replay obsolete older cycles.
4. Reconcile unresolved GitHub failure IDs once (unique, sorted).
5. Hand ordinary repairables to `agents/repair-dispatcher.md`.
6. Escalate unsafe classes immediately.

## Forbidden

- Continuous polling
- API-heavy loops
- Blind replay of every missed wave forever
- Inventing Clear for waves that never validated ACP outcome

## Output

Private ops note + (if needed) one Carlos notify for escalations. Do not spam Telegram with multi-wave dumps.
