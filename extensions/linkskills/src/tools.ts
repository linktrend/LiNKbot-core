/**
 * Skills telemetry drain tool names (frozen OpenClaw §9.2 evidence/run ops).
 * Conversation fields remain rejected at envelope build time.
 */

export const LINKSKILLS_DEFAULT_TELEMETRY_TOOL = "skills_feedback_submit" as const;

export const LINKSKILLS_DRAIN_TOOLS = Object.freeze([
  "skills_run_start",
  "skills_run_update",
  "skills_run_complete",
  "skills_run_fail",
  "skills_feedback_submit",
  "skills_trace_candidate_submit",
] as const);

export type LinkskillsDrainTool = (typeof LINKSKILLS_DRAIN_TOOLS)[number];

const drainSet = new Set<string>(LINKSKILLS_DRAIN_TOOLS);

export function isSkillsDrainTool(toolName: string): toolName is LinkskillsDrainTool {
  return drainSet.has(toolName);
}

/**
 * Maps structured telemetry event_type (or an already-frozen skills_* name)
 * onto the exact MCP/HTTP op used during drain.
 */
export function mapSkillsEventTypeToToolName(eventType: string): LinkskillsDrainTool {
  if (isSkillsDrainTool(eventType)) {
    return eventType;
  }
  switch (eventType) {
    case "skill.run_started":
    case "skill_run_started":
    case "run_started":
      return "skills_run_start";
    case "skill.run_updated":
    case "skill_run_updated":
    case "run_updated":
      return "skills_run_update";
    case "skill.run_completed":
    case "skill_run_completed":
    case "run_completed":
      return "skills_run_complete";
    case "skill.run_failed":
    case "skill_run_failed":
    case "run_failed":
      return "skills_run_fail";
    case "skill.trace_candidate":
    case "skill_trace_candidate":
    case "trace_candidate":
      return "skills_trace_candidate_submit";
    case "skill.feedback":
    case "skill_feedback":
    case "feedback":
      return "skills_feedback_submit";
    default:
      return LINKSKILLS_DEFAULT_TELEMETRY_TOOL;
  }
}

export function resolveSkillsDrainToolName(params: {
  toolName?: string;
  eventType?: string;
}): LinkskillsDrainTool {
  if (params.toolName && isSkillsDrainTool(params.toolName)) {
    return params.toolName;
  }
  if (typeof params.eventType === "string" && params.eventType.length > 0) {
    return mapSkillsEventTypeToToolName(params.eventType);
  }
  if (params.toolName) {
    return mapSkillsEventTypeToToolName(params.toolName);
  }
  return LINKSKILLS_DEFAULT_TELEMETRY_TOOL;
}
