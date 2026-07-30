# Lisa Ship/Pull — core prerequisite (blocked in this task)

## Why personality-only cannot finish post-processing

Isolated Ship/Pull cron parents that call `sessions_yield` after `sessions_spawn` are finalized/killed. ACP children often complete with `WAVE: Clear|Issues`, but announce-back fails because the parent is dead. Status CAS, email, Telegram one-liner synthesis by Lisa, and a real final assistant payload therefore never run.

## Existing public APIs inspected (insufficient)

| Surface                                                                                  | Why insufficient for ACP Ship/Pull wait                                                                                    |
| ---------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `sessions_yield`                                                                         | Terminates isolated cron parent; child cannot wake it                                                                      |
| `agents_wait`                                                                            | Swarm collectors only (`collect=true`); ACP rejected for collect                                                           |
| `sessions_list` / `sessions_history` / sleep                                             | Forbidden uncontrolled polling                                                                                             |
| `sessions_spawn` `collect=true`                                                          | Subagent only — not ACP                                                                                                    |
| Core `waitForDescendantSubagentSummary` (`src/cron/isolated-agent/subagent-followup.ts`) | Can substitute child text for Telegram after parent ends; cannot run Lisa CAS/email post-processing inside the dead parent |

## Exact required core files (proposed ownership)

1. `src/cron/isolated-agent/run.ts` / `run-executor.ts` — keep isolated cron turn alive or re-enter for post-processing after ACP descendants settle; do not treat yield as success for Ship/Pull.
2. `src/cron/isolated-agent/delivery-dispatch.ts` — after descendant drain, optionally re-queue requester agent for post-process turn instead of only substituting child text.
3. `src/agents/tools/sessions-spawn-tool.ts` / `src/agents/acp-spawn.ts` — optional blocking or evented wait for ACP `mode=run` without `sessions_yield`.
4. `src/agents/subagent-registry.ts` + announce delivery — ensure inactive isolated cron run keys remain wakeable **or** explicitly document non-wake and provide re-entry.
5. `src/agents/subagent-spawn-accepted-note.ts` — restore push-based wait guidance for cron when a supported wait path exists (today cron notes are suppressed).

## Proposed contract

```text
sessions_spawn(runtime=acp, mode=run) -> { runId, childSessionKey, status: accepted }
// Parent MUST NOT call sessions_yield on isolated cron.

Option A (preferred): runtime parks the current tool-call with a push-based wait
  keyed by runId (registry persist wake; no busy poll; bounded timeout).
  Tool returns { status: completed|timeout|error, resultText }.

Option B: after parent turn ends with accepted ACP spawn and no final WAVE line,
  cron delivery waits for descendant, then starts a post-process turn on the same
  cron session with injected child result, requiring Lisa to CAS+email+final line.
```

Ship/Pull success gate: child outcome validated ∧ status CAS ∧ email attempted ∧ final one-line payload.

## Tests required

- Isolated cron + ACP child: parent never uses yield; post-process runs after child completes.
- Yield path remains forbidden / fails closed for Ship/Pull jobs.
- `hasAcceptedSessionSpawn` alone cannot mark delivery success without post-process proof.
- Announce to dead parent does not count as Lisa completion.
- Timeout → `WAVE: Issues` with no invented Clear.

## Out of scope for this branch

Do not edit the files above in `issue/ocp-lisa-ops01`. Personality procedures already ban `sessions_yield` and document the gate.
