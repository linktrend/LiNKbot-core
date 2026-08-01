# Lisa Ship/Pull — core prerequisite (sessions_wait landed on RC)

## Why personality-only could not finish post-processing

Isolated Ship/Pull cron parents that call `sessions_yield` after `sessions_spawn` are finalized/killed. ACP children often complete with `WAVE: Clear|Issues`, but announce-back fails because the parent is dead. Status CAS, email, Telegram one-liner synthesis by Lisa, and a real final assistant payload therefore never run.

## Status on OCP-W10-LISA-RELEASE / OCP-W20 Lane B

**Option A landed in-repo:** `src/agents/tools/sessions-wait-tool.ts` parks on `onSubagentRegistryPersisted` plus a single deadline timer — no periodic poll, no `sessions_yield`. Integrated onto release-candidate surfaces with PR #38 + Lisa ops allowlisting (`SHIP_PULL_REQUIRED_TOOLS`).

**Still not production-ready (fail-closed):** live `~/.openclaw-lisa` must not be mutated until Carlos explicitly opts in to live targeting **and** separately approved credentials language is recorded in docs/contracts. Workshop procedures/docs require `sessions_wait` on Ship/Pull allowlists and keep candidate defaults non-live (`LISA_OPS_LIVE_ACTION_DEFAULTS`).

## Public APIs

| Surface                                                                                  | Role for ACP Ship/Pull wait                                                                                             |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `sessions_wait`                                                                          | **Use** — push-based park for owned non-collector ACP/subagent runs                                                     |
| `sessions_yield`                                                                         | **Forbidden** on isolated Ship/Pull cron — terminates parent                                                            |
| `agents_wait`                                                                            | Swarm collectors only (`collect=true`); ACP rejected for collect                                                        |
| `sessions_list` / `sessions_history` / sleep                                             | Forbidden uncontrolled polling                                                                                          |
| `sessions_spawn` `collect=true`                                                          | Subagent only — not ACP                                                                                                 |
| Core `waitForDescendantSubagentSummary` (`src/cron/isolated-agent/subagent-followup.ts`) | Can substitute child text for Telegram after parent ends; cannot replace in-parent CAS/email when using `sessions_wait` |

## Contract (Option A)

```text
sessions_spawn(runtime=acp, mode=run) -> { runId, childSessionKey, status: accepted }
// Parent MUST NOT call sessions_yield on isolated cron.

sessions_wait({ ids: [runId], timeoutSeconds }) -> terminal registry outcome
// Wakes from registry persist events + deadline timer only.
```

Ship/Pull success gate: child outcome validated ∧ status CAS ∧ email attempted ∧ final one-line payload.

## Integration / deploy order (hard)

1. Independent ACP `sessions_wait` verification (done on RC).
2. Integrate onto verified PR #38 head + Lisa ops allowlisting (this RC).
3. Combined bounded tests green (docs/evidence only for rollout).
4. Separately approved credentials language in docs/contracts — **required before live**.
5. Explicit live Lisa targeting opt-in + one controlled live profile sync — **not** candidate packets.
6. One controlled live rollout after human gate.

Do **not** claim production readiness from repository integration alone. Do **not** enter credentials, tokens, or Keychain material from this workstream.

## Tests required

- Isolated cron + ACP child: parent never uses yield; post-process runs after child completes via `sessions_wait`.
- Yield path remains forbidden / fails closed for Ship/Pull jobs.
- Allowlist includes `sessions_wait` and excludes `sessions_yield`.
- Live-action defaults fail closed (`authorizeLiveLisaAction` / `authorizeShipPullLiveAction`).
- `hasAcceptedSessionSpawn` alone cannot mark delivery success without post-process proof.
- Announce to dead parent does not count as Lisa completion.
- Timeout → `WAVE: Issues` with no invented Clear.

## Out of scope for this RC / Lane B packet

- Live `~/.openclaw-lisa` mutation, credential entry, paid spend enablement, production deploy/acceptance, merge/promote.
