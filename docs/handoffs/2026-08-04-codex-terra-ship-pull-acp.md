# Ship/Pull Codex Terra ACP replacement handoff

## Scope and status

| Field       | Value                                                                 |
| ----------- | --------------------------------------------------------------------- |
| Date        | 2026-08-04 Asia/Taipei                                                |
| Implementer | Codex Desktop Agent (Terra Medium)                                    |
| Branch      | `dev/minicodex/WP-0-ship-pull-codex-terra`                            |
| Base        | `6839620d9983c4e8513d55ac94cf910b6cb2db0f`                            |
| Status      | Handing off for independent verification; not integrated or deployed. |

## What changed

Ship/Pull now has one explicit ACP contract:

```text
runtime: "acp"
agentId: "codex"
model: "openai/gpt-5.6-terra"
thinking: "medium"
```

If Codex ACP or Terra Medium is unavailable, Ship/Pull must record `STAGE_SKIPPED_acp`, return `WAVE: Issues`, and stop. It must not dispatch Cursor/Grok, an internal subagent, direct edits, or another automation as a fallback. The existing event-driven `sessions_wait` path remains mandatory; `sessions_yield` remains forbidden.

Changed files:

- `linkbots/lisa/Personality files/AGENTS.md` — current Ship/Pull summary now names Codex Terra Medium and its fail-closed rule.
- `linkbots/lisa/Personality files/agents/ship-pull-clock.md` — procedure, prompts, and waiting/failure behavior.
- `linkbots/lisa/docs/SHIP-PULL-CLOCK-INSTALL.md` — install/runbook guidance.
- `linkbots/lisa/ops/ship-pull-contract.ts` — canonical spawn contract and pure validators.
- `linkbots/lisa/ops/stage-ops-payloads.ts` and `jobs.stage-seed.json` — all four disabled/delivery=none stage Ship/Pull payloads.
- `linkbots/lisa/ops/stage-workspace-package.manifest.json` — updated hash/size for the packaged procedure.
- `linkbots/lisa/ops/lisa-ops.test.ts` and `stage-ops-holds.test.ts` — exact contract/no-fallback assertions.
- `pnpm-lock.yaml` — reconciled the already-declared `jose@6.2.3` importer entry after the required locked install exposed the prior omission.

## Evidence and validation

- `pnpm --filter @openclaw/gateway-protocol build` — PASS (needed by the local stage-seed generator only; build output is ignored).
- Stage seed regenerated using the repository coordinator with an audited local UUID map; output retains six core disabled jobs and `delivery=none`.
- `node --import tsx --import ./linkbots/lisa/ops/register-strip-types-js-resolve.mjs --test linkbots/lisa/ops/lisa-ops.test.ts linkbots/lisa/ops/stage-ops-holds.test.ts linkbots/lisa/ops/stage-workspace-package.test.ts` — PASS, 78/78.
- `pnpm docs:list` — PASS (inventory only).
- `git diff --check` — PASS.
- Direct protocol evidence inspected: `docs/tools/acp-agents.md` describes `runtime: "acp"`, `agentId: "codex"`, normalized `openai/<model>` refs, and direct `thinking: "medium"`; `extensions/acpx/src/codex-auth-bridge.ts` builds a Codex ACP wrapper even without a bespoke command; `/Users/linktrend/Projects/codex/codex-rs/tui/src/debug_config.rs` and `sdk/typescript/src/exec.ts` confirm Terra and `model_reasoning_effort` handling.

## Hard stops retained

- No stage or live Lisa runtime/profile changes.
- No schedules enabled or changed.
- No cloud, credential, VPS, IDE Development, delivery, merge, or promotion action.
- Stage payloads remain disabled and `delivery=none`.

## Independent verifier checklist

1. Resolve the branch head and inspect the whole Ship/Pull procedure plus payload builder/seed.
2. Confirm all four Ship/Pull payloads contain the exact Codex Terra Medium contract.
3. Confirm `sessions_wait` remains present and `sessions_yield` absent.
4. Confirm no executable Cursor/Grok spawn contract remains on these Ship/Pull paths; references that explicitly forbid a fallback are expected.
5. Re-run the three focused test files and `git diff --check`.
6. Do not install the package, mutate stage/live Lisa, enable schedules, or promote this branch as part of verification.
