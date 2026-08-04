---
type: AgentProcedure
title: Ship / Pull clock (Lisa Option A)
description: Primary Ship/Pull clock — Lisa cron spawns Codex ACP Terra Medium shipper/puller on Mini; checkpoint-only Ship; frozen-tip Pull
load: on_demand
read_when:
  - Running lisa-ship-05 / lisa-pull-07 / lisa-ship-16 / lisa-pull-18 cron
  - Carlos asks how Ship/Pull is triggered
  - Installing or repairing Lisa Option A clock jobs
tags: [pipeline, ship, pull, cron, acp, codex, terra, option-a]
---

# Ship / Pull Clock — Lisa Option A

**Candidate-only / non-live default:** This procedure is opt-in workshop documentation. It must **not** target live Lisa (`~/.openclaw-lisa`) until Carlos explicitly enables live targeting **and** separately approved credentials language appears in docs/contracts. Fail-closed: no cron mutation, profile sync, ACP spawn against live Lisa, or credential use from this repository packet alone. See `linkbots/lisa/ops/ship-pull-contract.ts` (`LISA_OPS_LIVE_ACTION_DEFAULTS` / `authorizeShipPullLiveAction`).

**IDE Development is the GitOps source of truth.** Lisa’s procedures are consumer/runtime instructions that must faithfully implement the pinned IDE contract on IDE `origin/development` (`docs/AUTONOMOUS-GIT-OPERATIONS.md`, ADR `0003` amendments). Cite that tip — not stale rule copies.

**Pinned merged contract (already on IDE `development` via GITOPS-01 / PR #19):** checkpoint-only Ship (commit+push → STOP; Packager opens PRs; no Bugbot on Ship); Review Packager Tue/Fri **08:00**; Staging promote Tue/Fri **10:00** Asia/Taipei; Pull skips frozen/reviewed tips.

**Open IDE dependency:** [IDE Development issue #23](https://github.com/linktrend/IDE-Development/issues/23) / draft PR #24 harden the remaining lifecycle + repair-control plane (completion gate, Lisa ACP Repair Dispatcher wiring, leftover contradictions). Until #23 merges, Lisa consumes the **already-merged** AUTONOMOUS contract above and treats #23 as the open repair/lifecycle follow-on — it must **not** invent local doctrine that replaces IDE Development.

**Primary clock:** This procedure. Codex ACP Terra Medium is the only Ship/Pull implementation runtime; other automation may observe but must not dispatch a replacement worker.

**Wave names** use **local hour** labels (Asia/Taipei): Ship 05, Pull 07, Ship 16, Pull 18 — not A/B letters.

**Work-branch allowlist (IDE-approved):** `issue/*`, `cursor/*`, and rare `dev/*` only. Unsupported branch kinds are **skipped explicitly**. Integration branches (`development` / `staging` / `main`) are never Ship/Pull work branches.

## Hard prerequisites (ops)

- **Mac Mini must be awake** so Codex ACP can spawn.
- Lisa gateway running with profile `lisa`; ACP/`acpx` healthy.
- Do **not** put secrets in this repo or cron message text.
- Isolated cron jobs **must not** call `cron.add` / `cron.update` / `cron.remove` for other jobs.

## Calendar (Asia/Taipei)

| Job name       | Cron expr (tz Asia/Taipei) | Wave    |
| -------------- | -------------------------- | ------- |
| `lisa-ship-05` | `0 5 * * *`                | Ship 05 |
| `lisa-pull-07` | `0 7 * * *`                | Pull 07 |
| `lisa-ship-16` | `0 16 * * *`               | Ship 16 |
| `lisa-pull-18` | `0 18 * * *`               | Pull 18 |

Related GitOps (not these four jobs): **Review Packager** Tue/Fri **08:00**; **Staging promote** Tue/Fri **10:00**; weekly **Main Approve** via Monday morning digest.

Each job: isolated `agentTurn`, preferred `agentId: lisa-cron`. Announce → Telegram `1123023078` with the **one-line** Clear/Issues result only. **Also** email that same one line after validated ACP outcome.

**Tool allowlist:** cron `payload.toolsAllow` **and** `agents.list[lisa-cron].tools.allow` must include `sessions_spawn`, `sessions_wait`, `apply_patch`, `read`, `write`, `edit`, and `exec`. The ACP runtime validates `apply_patch` and `edit` before spawn even when the bounded child does not call them. Do **not** include or call `sessions_yield` for Ship/Pull (see Wait contract). See `linkbots/lisa/docs/SHIP-PULL-CLOCK-INSTALL.md` and `linkbots/lisa/docs/LISA-OPS-CRON-MIGRATION-PLAN.md`.

## Repo list (sequential — one at a time)

1. `/Users/linktrend/Projects/IDE Development`
2. `/Users/linktrend/Projects/openclaw_prime`
3. `/Users/linktrend/Projects/LiNKplatform`
4. `/Users/linktrend/Projects/LiNKskills`
5. `/Users/linktrend/Projects/LiNKbrain`
6. `/Users/linktrend/Projects/LiNKsites`
7. `/Users/linktrend/Projects/LiNKdeveloper`
8. `/Users/linktrend/Projects/LiNKlibraries`
9. `/Users/linktrend/Projects/LiNKautowork`

## Status file

`/Users/linktrend/.openclaw-lisa/workspace/memory/pipeline-status.md`

Keep `Cycle date: YYYY-MM-DD` plus one result line per known checkpoint in that digest cycle. Derive expected cycle from the cron run's **nominal** scheduled occurrence: next calendar date for Ship 16/Pull 18; same date for Ship 05/Pull 07. Monotonic CAS via `edit` only (see `agents/pipeline-status.md`). Live file must not be edited from this repository-only task during development.

GitOps state vocabulary (digest/heartbeat language): **checkpointed**, **review-ready**, **under-review**, **merged**, **conflict**, **repair pending**, **blocked**. Ordinary Ship produces **checkpointed** only — never Review Ready.

## Wait contract (CRITICAL — post-processing)

Proven failure mode: `sessions_spawn` then `sessions_yield` finalizes/kills the isolated cron parent; ACP child cannot wake it; Lisa never does status CAS, email, Telegram one-liner, or final payload.

**Integrated core path (OCP-W10-LISA-RELEASE):** park with `sessions_wait` after ACP spawn. Wakes from subagent registry persist events plus a single deadline timer — no periodic poll, no `sessions_yield`.

### HARD RULES

1. **Never call `sessions_yield`** on Ship/Pull isolated cron turns.
2. **Never** poll with `sessions_list`, `sessions_history`, `exec sleep`, or busy-wait loops.
3. Spawn Codex ACP Terra Medium with this exact contract: `runtime: "acp"`, `agentId: "codex"`, `model: "openai/gpt-5.6-terra"`, `thinking: "medium"`.
4. Record `childSessionKey` / `runId` from the spawn tool result.
5. Call `sessions_wait` with the owned ACP `runId` (bounded `timeoutSeconds`) and park until a terminal registry outcome.
6. Status CAS, email, Telegram one-liner, and the final assistant payload may run **only after** a validated child outcome (`WAVE: Clear` or `WAVE: Issues`).
7. `canFinishShipPullSuccessfully` semantics: child validated + status CAS done + email attempted + exact one-line final payload.
8. If Codex ACP or Terra Medium is unavailable, fail closed: record `STAGE_SKIPPED_acp`, produce `WAVE: Issues`, and stop. **No Cursor/Grok fallback. Do not spawn Cursor. Do not self-write.**

### Public API notes

- `sessions_wait` — push-based park for owned non-collector ACP/subagent runs (registry persist wake + deadline). **Use this for Ship/Pull.**
- `sessions_yield` — terminates/kills isolated cron parents (**forbidden** on Ship/Pull).
- `agents_wait` — swarm `collect=true` children only; **ACP is rejected** for `collect=true` (do not substitute).

Live rollout of this workshop procedure still requires a separately approved profile sync. Until live allowlists include `sessions_wait`, treat Ship/Pull post-processing as **blocked** and report `WAVE: Issues` rather than inventing Clear. See `linkbots/lisa/docs/LISA-OPS-CORE-PREREQUISITE.md`.

Templates: `templates/pipeline-one-liner.md` (render via `node --experimental-strip-types ops/render-template.ts pipeline-one-liner --wave "<WAVE>" --result Clear|Issues` from the Lisa workspace root).

## Cron run procedure (Lisa)

### Silent work (mandatory)

Emit **no** mid-run assistant text until the final reply. Tool calls only. Final Telegram body = **exactly one line** (`WAVE: Clear` or `WAVE: Issues`) — plain text, never Markdown fences.

1. `read` this file.
2. Spawn **one** Codex ACP Terra Medium session with the Shipper or Puller prompt below, using exactly `runtime: "acp"`, `agentId: "codex"`, `model: "openai/gpt-5.6-terra"`, and `thinking: "medium"`.
3. **Do not** call `sessions_yield`. Call `sessions_wait` on the owned ACP `runId` (park; no poll).
4. On spawn or wait failure/timeout: status CAS `WAVE: Issues`, email attempt, final one-liner Issues; stop.
5. On validated success: accept only Codex's exact `WAVE: Clear` or `WAVE: Issues`, then Lisa writes status via monotonic CAS, then email, then final Telegram one-liner.
6. **Email:** fresh UUID body file under `scratch/pipeline-status-<wave-slug>-<run-uuid>.txt`, then exactly one unpiped:
   ```bash
   tools/bin/lisa-safe email-send --to calusa@linktrend.media --subject "<WAVE> status" --body-file scratch/pipeline-status-<wave-slug>-<run-uuid>.txt
   ```
7. Order: ACP spawn → `sessions_wait` → **validated child outcome** → status CAS → email attempt → final Telegram one-liner.

### HARD RULES — `lisa-safe`

Never `ls` / explore `tools/bin/lisa-safe`. Never multi-step opaque shell. Invoke `email-send` directly.

## ACP prompt — Shipper

Replace `WAVE` with `Ship 05` or `Ship 16`.

```text
WAVE (Asia/Taipei). You are the Codex Terra Medium Implementer shipper under Lisa Option A (checkpoint-only Ship).

Process ONE REPO AT A TIME in this exact order (skip missing paths):
1) /Users/linktrend/Projects/IDE Development
2) /Users/linktrend/Projects/openclaw_prime
3) /Users/linktrend/Projects/LiNKplatform
4) /Users/linktrend/Projects/LiNKskills
5) /Users/linktrend/Projects/LiNKbrain
6) /Users/linktrend/Projects/LiNKsites
7) /Users/linktrend/Projects/LiNKdeveloper
8) /Users/linktrend/Projects/LiNKlibraries
9) /Users/linktrend/Projects/LiNKautowork

Act ONLY on the IDE-approved work-branch allowlist: issue/*, cursor/*, rare dev/*. Unsupported kinds and integration branches (development/staging/main): skip explicitly and record an explicit skip result.

For each allowlisted work branch with local changes or unpushed commits:
1) Commit with conventional commits if there are changes (never commit secrets). Preserve unfinished work honestly — do not invent completeness.
2) Push the branch (never force-push).
3) STOP. This is a checkpoint only.
4) Do not create or update a PR.
5) Do not request Bugbot.
6) Do not merge. Do not self-review. Do not touch staging/main.
7) Do not mark Review Ready. Final completion and Review Ready remain separate from ordinary Ship.

Skip dirty actively owned worktrees; record an explicit skip reason privately (not in the status line).

Wave result semantics (deterministic):
- Clear ONLY if at least one allowlisted branch was successfully checkpointed (commit and/or push completed) and none were blocked/failed.
- Issues if any branch was blocked/failed, OR if every branch was skipped/empty (no actionable work completed). Never report Clear merely because everything was skipped.

Do not edit /Users/linktrend/.openclaw-lisa/workspace/memory/pipeline-status.md; Lisa owns the shared status writer.

Reply with exactly one line only: `WAVE: Clear` or `WAVE: Issues`.
```

## ACP prompt — Puller

Replace `WAVE` with `Pull 07` or `Pull 18`.

```text
WAVE (Asia/Taipei). You are the Codex Terra Medium Implementer puller under Lisa Option A.

Pull is NOT hard-gated on all PRs being merged. Unfinished work rolls forward.

Process ONE REPO AT A TIME in this exact order (skip missing paths):
1) /Users/linktrend/Projects/IDE Development
2) /Users/linktrend/Projects/openclaw_prime
3) /Users/linktrend/Projects/LiNKplatform
4) /Users/linktrend/Projects/LiNKskills
5) /Users/linktrend/Projects/LiNKbrain
6) /Users/linktrend/Projects/LiNKsites
7) /Users/linktrend/Projects/LiNKdeveloper
8) /Users/linktrend/Projects/LiNKlibraries
9) /Users/linktrend/Projects/LiNKautowork

Act ONLY on the IDE-approved work-branch allowlist: issue/*, cursor/*, rare dev/*. Unsupported kinds and integration branches: skip explicitly.

For each allowlisted checked-out work branch:
1) git fetch origin
2) Skip frozen/reviewed exact tip SHAs (do not merge into a tip that is frozen for review). Produce an explicit result for every skipped or updated branch.
3) Never overwrite dirty worktrees. Never overwrite actively owned worktrees. Skip them with an explicit result.
4) Otherwise merge origin/development into the current work branch (unless the repo already mandates rebase).
5) Never force-push.
6) Do not invent merges into staging/main.
7) Note blockers privately; do not paste lists into the status line.

Wave result semantics (deterministic):
- Clear ONLY if at least one allowlisted branch was successfully updated and none were blocked/failed.
- Issues if any branch was blocked/failed, OR if every branch was skipped/empty (no actionable work completed). Never report Clear merely because everything was skipped.

Do not edit /Users/linktrend/.openclaw-lisa/workspace/memory/pipeline-status.md; Lisa owns the shared status writer.

Reply with exactly one line only: `WAVE: Clear` or `WAVE: Issues`.
```

## Install / repair cron jobs (main session or operator — not from isolated cron)

Live cron must **not** be modified in repository-only work. Migration plan: `linkbots/lisa/docs/LISA-OPS-CRON-MIGRATION-PLAN.md`.

## Related

- Status + GitOps calendar: `agents/pipeline-status.md`
- Repair dispatcher: `agents/repair-dispatcher.md`
- Offline recovery: `agents/offline-recovery.md`
- Templates: `templates/`
- Codex ACP Ship/Pull contract: the exact spawn contract in this procedure and `linkbots/lisa/ops/ship-pull-contract.ts`
- Core wait prerequisite: `linkbots/lisa/docs/LISA-OPS-CORE-PREREQUISITE.md`
