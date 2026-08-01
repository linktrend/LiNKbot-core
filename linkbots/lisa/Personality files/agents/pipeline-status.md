---
type: AgentProcedure
title: Pipeline status (Ship / Pull / Promote)
description: One-line autonomous Git ops status for Carlos on Telegram + Ship/Pull email; Main Approve via 08:30 digest
load: on_demand
read_when:
  - Heartbeat or digest needs pipeline one-liners
  - Carlos asks about Ship/Pull/staging/main status
  - Monday 08:30 Main Approve window (inside morning digest)
tags: [pipeline, ship, pull, promote, telegram, email]
---

# Pipeline Status (Lisa)

**IDE Development is the GitOps source of truth.** Lisa implements the pinned IDE contract on IDE `origin/development` (checkpoint-only Ship, Packager opens PRs, Review Packager 08:00, Staging 10:00 — already merged via GITOPS-01 / PR #19). Open follow-on: [IDE Development issue #23](https://github.com/linktrend/IDE-Development/issues/23) (lifecycle/repair-control hardening; draft PR #24). Do not invent local doctrine that replaces IDE Development.

**Primary clock:** Lisa Option A — `agents/ship-pull-clock.md` (cron → Cursor ACP). Cursor Automations are backup only.  
**Channels:** Telegram one-liners on heartbeat/digest; **Ship/Pull completion** also emails the same one line after validated ACP outcome. Main Approve ask is inside the **08:30 morning digest** (email + Telegram); Carlos answers on Telegram only.

**Wave names:** Ship 05, Pull 07, Ship 16, Pull 18.

## Status vocabulary (plain English)

| State          | Meaning                                          |
| -------------- | ------------------------------------------------ |
| checkpointed   | Ordinary Ship committed + pushed; no PR / Bugbot |
| review-ready   | Separate from Ship; packager/marking only        |
| under-review   | PR open; Bugbot/Integrator path                  |
| merged         | Landed on `development` (or later staging/main)  |
| conflict       | Merge/rebase conflict; do not auto-pick sides    |
| repair pending | Repair Dispatcher has an open bounded attempt    |
| blocked        | Needs Carlos or authority; unsafe to auto-repair |

## Status file

Prefer reading:

`/Users/linktrend/.openclaw-lisa/workspace/memory/pipeline-status.md`

If missing, treat checkpoints as unknown and do **not** invent Clear. Lisa owns writes; shippers/pullers return only their one-line result.

The file starts with `Cycle date: YYYY-MM-DD`. It keeps Ship 16 and Pull 18 from the prior evening followed by Ship 05 and Pull 07 from that morning. Derive each wave's expected cycle from its nominal scheduled occurrence. Missing/newer cycle clears all four Ship/Pull lines before writing. Matching date replaces only that wave. Older expected date must not modify newer results. Preserve Staging/Main lines until their owning checkpoint updates them.

Heartbeat and morning digest compare stored cycle date with the digest cycle they report. Include Ship/Pull lines only when it matches; omit stale or undated Ship/Pull lines. Metadata lines are never sent to Telegram or email.

Staging and Main readiness use `Staging date:` and `Main ready date:`. Include those results only when the marker matches the checkpoint date being reported. Monday Main Approve only when `Main ready date` is today and `Main ready (Mon): Clear`.

All runtime updates use compare-and-swap `edit` from `agents/ship-pull-clock.md`. `Main approve claim` is a two-hour lease. `Main approve decision date` records Carlos's reply.

Template helpers: `templates/pipeline-one-liner.md`. Ops helpers: `linkbots/lisa/ops/pipeline-status-cas.ts`.

## One-line contract (hard)

Exactly one of these shapes — no lists, no links, no extra words:

- `Ship 05: Clear` / `Ship 05: Issues`
- `Pull 07: Clear` / `Pull 07: Issues`
- `Ship 16: Clear` / `Ship 16: Issues`
- `Pull 18: Clear` / `Pull 18: Issues`
- `Staging promote (Tue): Clear` / `Staging promote (Tue): Issues`
- `Staging promote (Fri): Clear` / `Staging promote (Fri): Issues`
- `Main ready (Mon): Clear` / `Main ready (Mon): Issues`

## Calendar (Asia/Taipei)

| Event           | Time          | Lisa action                                                     |
| --------------- | ------------- | --------------------------------------------------------------- |
| Ship 05         | 05:00         | Cron → ACP shipper (checkpoint-only); Telegram + email one line |
| Pull 07         | 07:00         | Cron → ACP puller (skip frozen tips); Telegram + email one line |
| Review Packager | Tue/Fri 08:00 | Reflect review-ready packaging window (not ordinary Ship)       |
| Staging         | Tue/Fri 10:00 | Reflect staging promote line                                    |
| Ship 16         | 16:00         | Cron → ACP shipper                                              |
| Pull 18         | 18:00         | Cron → ACP puller                                               |
| Main package    | Mon 08:00     | `Main ready (Mon): Clear` or `Issues`                           |
| Main Approve    | Mon 08:30     | Inside morning digest (email notify + Telegram ask)             |
| Morning digest  | 08:30         | Reflect section D; Approve ask when Clear (Mon)                 |

Mini must be awake for ACP waves.

## Main Approve (digest + Telegram reply)

On Monday in the **08:30 morning digest**, when today's dated package result is Clear:

1. Require `Main ready date` = today and `Main ready (Mon): Clear`. Otherwise omit.
2. Claim with compare-and-swap before including the Approve ask in **both** email and Telegram (**blocked** until an authoritative package store exists — see `main-approve-binding.ts` / IDE #23).
3. Present repositories to Carlos in **plain English**, numbered, with short descriptions only — **no SHAs**.
4. Internally bind each number immutably to: repository, promotion PR number, staging SHA, prior main SHA, promotion-head SHA, gate result. Approval dispatches exactly those identifiers. Drift → invalidate → new package.
5. Carlos replies **Approve / yes on Telegram** only.
6. If Approve and store/bindings valid: for each in-scope repo run the approved staging→main workflow (unpiped). Never invent SHA questions for Carlos.
7. Never merge `staging`→`main` without Carlos Approve.
8. Never choose conflict sides arbitrarily. Never approve/merge main without this path.

Example Approve wording (no SHAs for Carlos):

```text
Ready to Approve staging→main for these repositories?
1) openclaw_prime — OpenClaw Prime coordination and Lisa runtime
2) LiNKplatform — platform capabilities
Reply Approve / yes on Telegram (email is notify-only).
```

## Until CTO OpenClaw exists

Lisa owns watch + one-line digest for these checkpoints.
