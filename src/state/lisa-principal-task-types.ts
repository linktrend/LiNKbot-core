import type { OpenClawAgentDatabaseOptions } from "./openclaw-agent-db.js";

export type LisaPrincipalTaskStoreOptions = OpenClawAgentDatabaseOptions;

export const LISA_PRINCIPAL_TASK_STATUSES = [
  "provisional",
  "confirmed_ready",
  "scheduled",
  "in_progress",
  "blocked",
  "awaiting_carlos",
  "awaiting_other",
  "completed_pending_evidence",
  "completed_verified",
] as const;
export type LisaPrincipalTaskStatus = (typeof LISA_PRINCIPAL_TASK_STATUSES)[number];
export type LisaPrincipalTaskSource = "explicit" | "inferred";
export type LisaPrincipalTaskOwner = "Carlos" | "Lisa" | "subordinate-agent" | "conversation-work";
export type LisaPrincipalTaskPriority =
  | "prevent-harm-or-hard-deadline"
  | "unblock-dependent-work"
  | "current-weekly-outcome"
  | "routine-maintenance"
  | "optional-improvement";
export type LisaPrincipalTaskDifficulty = "easy" | "medium" | "hard";
export type LisaPrincipalTaskCapacity = "high" | "normal" | "reduced" | "unavailable" | "recovered";
export type LisaPrincipalTaskReferenceType =
  | "google_task"
  | "other_task"
  | "brain_advisory"
  | "program"
  | "email"
  | "message"
  | "handoff"
  | "channel_event";

export type LisaPrincipalTaskEstimate<T> = {
  value: T;
  source: "Lisa estimate";
  overridable: true;
};

export type LisaPrincipalTaskRecord = {
  readonly internalId: string;
  readonly displayRef: string;
  readonly title: string;
  readonly source: LisaPrincipalTaskSource;
  readonly explicit: boolean;
  readonly confirmed: boolean;
  readonly urgent: boolean;
  readonly status: LisaPrincipalTaskStatus;
  readonly owner: LisaPrincipalTaskOwner;
  readonly priority: LisaPrincipalTaskPriority;
  readonly difficulty: LisaPrincipalTaskEstimate<LisaPrincipalTaskDifficulty>;
  readonly effortPeriods: LisaPrincipalTaskEstimate<number>;
  readonly importance: LisaPrincipalTaskEstimate<number>;
  readonly dependencies: readonly string[];
  readonly capacity: LisaPrincipalTaskCapacity;
  readonly dueDate?: string;
  readonly parentInternalId?: string;
  readonly relatedKey?: string;
  readonly confirmationDue: "immediate" | "next-review";
  readonly estimates: {
    readonly importance: LisaPrincipalTaskEstimate<number>;
    readonly difficulty: LisaPrincipalTaskEstimate<LisaPrincipalTaskDifficulty>;
    readonly effortPeriods: LisaPrincipalTaskEstimate<number>;
    readonly dependencies: LisaPrincipalTaskEstimate<readonly string[]>;
    readonly owner: LisaPrincipalTaskEstimate<LisaPrincipalTaskOwner>;
  };
  readonly createdAtMs: number;
  readonly updatedAtMs: number;
};

export type LisaPrincipalTaskReference = {
  readonly taskInternalId: string;
  readonly referenceType: LisaPrincipalTaskReferenceType;
  readonly externalReference: string;
  readonly immutable: boolean;
  readonly createdAtMs: number;
};

export type LisaPrincipalTaskEvidence = {
  readonly evidenceId: string;
  readonly taskInternalId: string;
  readonly source: "Carlos" | "Lisa" | "subordinate-agent";
  readonly description: string;
  readonly reference: string;
  readonly createdAtMs: number;
};

export type LisaPrincipalTaskAlias = {
  readonly aliasInternalId: string;
  readonly canonicalInternalId: string;
  readonly reason: string;
  readonly resolvedAtMs: number;
};

export type LisaPrincipalTaskCreateInput = {
  title: string;
  explicit: boolean;
  sourceChannel?: string;
  sourceEventId?: string;
  urgent?: boolean;
  owner?: LisaPrincipalTaskOwner;
  priority?: LisaPrincipalTaskPriority;
  difficulty?: LisaPrincipalTaskDifficulty;
  effortPeriods?: number;
  importance?: number;
  dependencies?: readonly string[];
  capacity?: LisaPrincipalTaskCapacity;
  dueDate?: string;
  parentInternalId?: string;
  relatedKey?: string;
  references?: readonly {
    type: LisaPrincipalTaskReferenceType;
    externalReference: string;
    immutable?: boolean;
  }[];
  internalId?: string;
  nowMs?: number;
};

export type LisaPrincipalTaskIntakeResult = {
  readonly task: LisaPrincipalTaskRecord;
  readonly created: boolean;
  readonly idempotent: boolean;
  readonly duplicateCandidateInternalIds: readonly string[];
};

export type TaskRow = {
  internal_id: string;
  display_ref: string;
  title: string;
  normalized_title: string;
  source: LisaPrincipalTaskSource;
  explicit: number;
  confirmed: number;
  urgent: number;
  status: LisaPrincipalTaskStatus;
  owner: LisaPrincipalTaskOwner;
  priority: LisaPrincipalTaskPriority;
  difficulty: LisaPrincipalTaskDifficulty;
  effort_periods: number;
  importance: number;
  dependencies_json: string;
  capacity: LisaPrincipalTaskCapacity;
  due_date: string | null;
  parent_internal_id: string | null;
  related_key: string | null;
  confirmation_due: "immediate" | "next-review";
  estimates_json: string;
  created_at_ms: number;
  updated_at_ms: number;
};
export type ReferenceRow = {
  task_internal_id: string;
  reference_type: LisaPrincipalTaskReferenceType;
  external_reference: string;
  immutable: number;
  created_at_ms: number;
};
export type EvidenceRow = {
  evidence_id: string;
  task_internal_id: string;
  source: "Carlos" | "Lisa" | "subordinate-agent";
  description: string;
  reference: string;
  created_at_ms: number;
};
export type EvidenceConflictRow = {
  conflict_id: string;
  task_internal_id: string;
  source: "Carlos" | "Lisa" | "subordinate-agent";
  description: string;
  reference: string;
  original_evidence_id: string;
  created_at_ms: number;
};
export type AliasRow = {
  alias_internal_id: string;
  canonical_internal_id: string;
  reason: string;
  resolved_at_ms: number;
};
export type IntakeRow = {
  channel: string;
  event_id: string;
  task_internal_id: string;
  created_at_ms: number;
};
export type PrincipalTaskDatabase = {
  lisa_principal_tasks: TaskRow;
  lisa_principal_task_references: ReferenceRow;
  lisa_principal_task_evidence: EvidenceRow;
  lisa_principal_task_evidence_conflicts: EvidenceConflictRow;
  lisa_principal_task_aliases: AliasRow;
  lisa_principal_task_intake_events: IntakeRow;
  lisa_principal_task_sequences: { sequence_name: string; next_value: number };
};

const TRANSITIONS: Readonly<Record<LisaPrincipalTaskStatus, readonly LisaPrincipalTaskStatus[]>> = {
  provisional: ["confirmed_ready", "blocked", "awaiting_carlos", "awaiting_other"],
  confirmed_ready: ["scheduled", "in_progress", "blocked", "awaiting_carlos", "awaiting_other"],
  scheduled: ["in_progress", "blocked", "awaiting_carlos", "awaiting_other"],
  in_progress: ["blocked", "awaiting_carlos", "awaiting_other", "completed_pending_evidence"],
  blocked: ["confirmed_ready", "in_progress", "awaiting_carlos", "awaiting_other"],
  awaiting_carlos: ["confirmed_ready", "in_progress", "blocked"],
  awaiting_other: ["confirmed_ready", "in_progress", "blocked"],
  completed_pending_evidence: ["completed_verified", "in_progress", "blocked"],
  completed_verified: [],
};

export function assertLisaPrincipalTaskTransition(
  from: LisaPrincipalTaskStatus,
  to: LisaPrincipalTaskStatus,
): void {
  if (!TRANSITIONS[from]?.includes(to)) {
    throw new Error(`invalid task transition: ${from} -> ${to}`);
  }
}
