import type { AuthorityAction, Permission, TaskOwner, TimeTask } from "./time-contracts.js";

export type IntakeCandidate = {
  id: string;
  title: string;
  explicit: boolean;
  urgent?: boolean;
  priority?: TimeTask["priority"];
  owner?: TaskOwner;
  difficulty?: TimeTask["difficulty"]["value"];
  effortPeriods?: number;
  importance?: number;
  dependencies?: readonly string[];
  capacity?: TimeTask["capacity"];
  dueDate?: string;
  relatedKey?: string;
};

export type IntakeClassification = TimeTask & {
  reviewRequired: boolean;
};

const defaultEstimate = <T>(value: T) => ({
  value,
  source: "Lisa estimate" as const,
  overridable: true as const,
});

export function classifyIntake(candidate: IntakeCandidate): IntakeClassification {
  const urgent = candidate.urgent ?? false;
  const source = candidate.explicit ? "explicit" : "inferred";
  return {
    id: candidate.id,
    title: candidate.title,
    source,
    explicit: candidate.explicit,
    confirmed: candidate.explicit || urgent,
    urgent,
    status: candidate.explicit || urgent ? "Ready" : "Provisional",
    priority: candidate.priority ?? "optional-improvement",
    owner: candidate.owner ?? "Carlos",
    difficulty: defaultEstimate(candidate.difficulty ?? "medium"),
    effortPeriods: defaultEstimate(candidate.effortPeriods ?? 1),
    importance: defaultEstimate(candidate.importance ?? 3),
    dependencies: [...(candidate.dependencies ?? [])],
    capacity: candidate.capacity ?? "normal",
    ...(candidate.dueDate ? { dueDate: candidate.dueDate } : {}),
    ...(candidate.relatedKey ? { relatedKey: candidate.relatedKey } : {}),
    confirmationDue: candidate.explicit || urgent ? "immediate" : "next-review",
    reviewRequired: !candidate.explicit && !urgent,
    estimates: {
      importance: defaultEstimate(candidate.importance ?? 3),
      difficulty: defaultEstimate(candidate.difficulty ?? "medium"),
      effortPeriods: defaultEstimate(candidate.effortPeriods ?? 1),
      dependencies: defaultEstimate([...(candidate.dependencies ?? [])]),
      owner: defaultEstimate(candidate.owner ?? "Carlos"),
    },
  };
}

export function confirmationTiming(
  task: Pick<TimeTask, "source" | "urgent">,
): "immediate" | "next-review" {
  return task.source === "explicit" || task.urgent ? "immediate" : "next-review";
}

export function confirmAtReview(task: TimeTask): TimeTask {
  if (task.source === "explicit") {
    return task;
  }
  if (task.status !== "Provisional") {
    throw new Error(`only provisional tasks can be confirmed: ${task.status}`);
  }
  return { ...task, confirmed: true, status: "Ready", confirmationDue: "immediate" };
}

export type ResearchDelegationRequest = {
  researchOnly: boolean;
  requestedDomain: string;
  subordinateDomains: readonly string[];
};

export function decideReadOnlyResearchDelegation(request: ResearchDelegationRequest): {
  allowed: boolean;
  reason: string;
} {
  if (!request.researchOnly) {
    return { allowed: false, reason: "research delegation cannot create an external commitment" };
  }
  const domain = request.requestedDomain.trim().toLowerCase();
  if (!domain) {
    return { allowed: false, reason: "read-only research requires a domain" };
  }
  const allowed = request.subordinateDomains.some((item) => item.trim().toLowerCase() === domain);
  return allowed
    ? { allowed: true, reason: "read-only research is inside the subordinate's matching domain" }
    : { allowed: false, reason: "subordinate domain does not match the requested research domain" };
}

export type AuthorityDecision = {
  allowed: boolean;
  action: AuthorityAction;
  reason: string;
};

export function decideAuthority(
  action: AuthorityAction,
  permissions: ReadonlySet<Permission> | readonly Permission[],
): AuthorityDecision {
  const granted = "has" in permissions ? permissions.has(action) : permissions.includes(action);
  return granted
    ? { allowed: true, action, reason: `matching permission granted for ${action}` }
    : { allowed: false, action, reason: `matching permission required for ${action}` };
}

/** Compatibility helper for callers that only need the fail-closed boolean. */
export function canPerformExternalAction(permission: boolean): boolean {
  return permission;
}

export function routeTask(task: Pick<TimeTask, "owner" | "status">): {
  destination: "google-tasks" | "hold";
  calendarProposal: boolean;
  hold: boolean;
  liveBrainWriteClaimed: false;
} {
  const carlosOwned = task.owner === "Carlos";
  return {
    destination: carlosOwned ? "google-tasks" : "hold",
    calendarProposal: task.status === "Scheduled" || task.status === "In progress",
    hold: !carlosOwned,
    liveBrainWriteClaimed: false,
  };
}
