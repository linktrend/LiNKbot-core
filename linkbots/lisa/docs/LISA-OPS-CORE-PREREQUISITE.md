# Lisa Ship/Pull — core prerequisite (sessions_wait landed on RC)

## Why personality-only could not finish post-processing

Isolated Ship/Pull cron parents that call `sessions_yield` after `sessions_spawn` are finalized/killed. ACP children often complete with `WAVE: Clear|Issues`, but announce-back fails because the parent is dead. Status CAS, email, Telegram one-liner synthesis by Lisa, and a real final assistant payload therefore never run.

## Status on OCP-W10-LISA-RELEASE

**Option A landed in-repo:** `src/agents/tools/sessions-wait-tool.ts` parks on `onSubagentRegistryPersisted` plus a single deadline timer — no periodic poll, no `sessions_yield`. Integrated onto release-candidate branch `dev/cloudcursor/OCP-W10-LISA-RELEASE` with PR #38 + Lisa ops allowlisting.

**Still not production-ready:** live `~/.openclaw-lisa` must not be mutated until a separately approved rollout. Workshop procedures/docs now require `sessions_wait` on Ship/Pull allowlists.

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
4. Separately approved live profile sync — **not** this packet.
5. One controlled live rollout after human gate.

Do **not** claim production readiness from repository integration alone.

## Tests required

- Isolated cron + ACP child: parent never uses yield; post-process runs after child completes via `sessions_wait`.
- Yield path remains forbidden / fails closed for Ship/Pull jobs.
- `hasAcceptedSessionSpawn` alone cannot mark delivery success without post-process proof.
- Announce to dead parent does not count as Lisa completion.
- Timeout → `WAVE: Issues` with no invented Clear.

## Out of scope for this RC packet

- Live `~/.openclaw-lisa` mutation, credential entry, paid spend enablement, production deploy/acceptance.
