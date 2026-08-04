/**
 * Post-spawn guidance notes.
 *
 * Returns push-based completion guidance for run spawns and thread-binding guidance for session spawns.
 */
import { isCronSessionKey } from "../routing/session-key.js";

const SUBAGENT_SPAWN_ACCEPTED_NOTE =
  "Auto-announce is push-based. After spawning children, do NOT call sessions_list, sessions_history, exec sleep, or any polling tool. Track expected child session keys. Continue any independent work. If your final answer depends on child output, wait for runtime completion events to arrive as user messages and only answer after completion events for ALL required children arrive. If a child completion event arrives AFTER your final answer, reply ONLY with NO_REPLY.";
const SUBAGENT_SPAWN_CRON_ACCEPTED_NOTE =
  "Child runs are push-based. Do NOT call sessions_yield, sessions_list, sessions_history, exec sleep, or any polling tool. After sessions_spawn returns a runId, call sessions_wait with that runId to park until the child reaches a terminal registry outcome, then continue post-processing in this same turn.";
const SUBAGENT_SPAWN_SESSION_ACCEPTED_NOTE =
  "thread-bound session stays active after this task; continue in-thread for follow-ups.";

/** Resolve the post-spawn note, restoring push-based wait guidance for cron when sessions_wait exists. */
export function resolveSubagentSpawnAcceptedNote(params: {
  spawnMode: "run" | "session";
  agentSessionKey?: string;
}): string | undefined {
  if (params.spawnMode === "session") {
    return SUBAGENT_SPAWN_SESSION_ACCEPTED_NOTE;
  }
  return isCronSessionKey(params.agentSessionKey)
    ? SUBAGENT_SPAWN_CRON_ACCEPTED_NOTE
    : SUBAGENT_SPAWN_ACCEPTED_NOTE;
}
