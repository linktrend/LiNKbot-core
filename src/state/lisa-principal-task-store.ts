/* oxlint-disable max-lines -- the bounded store keeps schema, transitions, and idempotent writes together. */
import { randomUUID } from "node:crypto";
import {
  executeSqliteQuerySync,
  executeSqliteQueryTakeFirstSync,
  getNodeSqliteKysely,
  iterateSqliteQuerySync,
} from "../infra/kysely-sync.js";
import { LISA_PRINCIPAL_TASK_SCHEMA_SQL } from "./lisa-principal-task-schema.js";
import {
  openOpenClawAgentDatabase,
  runOpenClawAgentWriteTransaction,
  type OpenClawAgentDatabaseOptions,
} from "./openclaw-agent-db.js";

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

export type LisaPrincipalTaskStoreOptions = OpenClawAgentDatabaseOptions;

type TaskRow = {
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
type ReferenceRow = {
  task_internal_id: string;
  reference_type: LisaPrincipalTaskReferenceType;
  external_reference: string;
  immutable: number;
  created_at_ms: number;
};
type EvidenceRow = {
  evidence_id: string;
  task_internal_id: string;
  source: "Carlos" | "Lisa" | "subordinate-agent";
  description: string;
  reference: string;
  created_at_ms: number;
};
type AliasRow = {
  alias_internal_id: string;
  canonical_internal_id: string;
  reason: string;
  resolved_at_ms: number;
};
type IntakeRow = {
  channel: string;
  event_id: string;
  task_internal_id: string;
  created_at_ms: number;
};
type PrincipalTaskDatabase = {
  lisa_principal_tasks: TaskRow;
  lisa_principal_task_references: ReferenceRow;
  lisa_principal_task_evidence: EvidenceRow;
  lisa_principal_task_aliases: AliasRow;
  lisa_principal_task_intake_events: IntakeRow;
  lisa_principal_task_sequences: { sequence_name: string; next_value: number };
};

function assertNonEmpty(value: string, label: string, maxLength = 500): string {
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > maxLength || trimmed.includes("\0")) {
    throw new Error(`invalid ${label}`);
  }
  return trimmed;
}

function assertTimestamp(value: number, label: string): void {
  if (!Number.isInteger(value) || value < 0) {
    throw new Error(`invalid ${label}`);
  }
}

function normalizeTitle(title: string): string {
  return assertNonEmpty(title, "task title").toLocaleLowerCase("en-US").replace(/\s+/gu, " ");
}

function assertInternalId(value: string): string {
  const normalized = assertNonEmpty(value, "task internal ID", 80).toLowerCase();
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/u.test(normalized)) {
    throw new Error("task internal ID must be a UUIDv4");
  }
  return normalized;
}

export function createLisaPrincipalTaskInternalId(): string {
  return randomUUID();
}

export function formatLisaPrincipalTaskDisplayRef(sequence: number): string {
  if (!Number.isSafeInteger(sequence) || sequence < 1 || sequence > 999_999_999) {
    throw new Error("task display sequence is out of range");
  }
  return `T-${String(sequence).padStart(6, "0")}`;
}

function assertDisplayRef(value: string): string {
  const normalized = assertNonEmpty(value, "task display reference", 32).toUpperCase();
  if (!/^T-[0-9A-Z]{6,}$/u.test(normalized)) {
    throw new Error("task display reference must use stable T- syntax");
  }
  return normalized;
}

function parseJson(value: string, label: string): unknown {
  try {
    return JSON.parse(value) as T;
  } catch {
    throw new Error(`invalid ${label}`);
  }
}

function canonicalizeInternalId(db: import("node:sqlite").DatabaseSync, id: string): string {
  let current = assertInternalId(id);
  for (let i = 0; i < 8; i += 1) {
    const alias = executeSqliteQueryTakeFirstSync(
      db,
      getNodeSqliteKysely<PrincipalTaskDatabase>(db)
        .selectFrom("lisa_principal_task_aliases")
        .select("canonical_internal_id")
        .where("alias_internal_id", "=", current),
    ) as Pick<AliasRow, "canonical_internal_id"> | undefined;
    if (!alias) {
      return current;
    }
    if (alias.canonical_internal_id === current) {
      throw new Error("task alias cycle");
    }
    current = assertInternalId(alias.canonical_internal_id);
  }
  throw new Error("task alias chain exceeds bounded resolution depth");
}

function rowToTask(row: TaskRow): LisaPrincipalTaskRecord {
  const dependencies = parseJson(row.dependencies_json, "task dependencies") as string[];
  const estimates = parseJson(
    row.estimates_json,
    "task estimates",
  ) as LisaPrincipalTaskRecord["estimates"];
  return {
    internalId: row.internal_id,
    displayRef: row.display_ref,
    title: row.title,
    source: row.source,
    explicit: row.explicit === 1,
    confirmed: row.confirmed === 1,
    urgent: row.urgent === 1,
    status: row.status,
    owner: row.owner,
    priority: row.priority,
    difficulty: estimates.difficulty,
    effortPeriods: estimates.effortPeriods,
    importance: estimates.importance,
    dependencies,
    capacity: row.capacity,
    ...(row.due_date ? { dueDate: row.due_date } : {}),
    ...(row.parent_internal_id ? { parentInternalId: row.parent_internal_id } : {}),
    ...(row.related_key ? { relatedKey: row.related_key } : {}),
    confirmationDue: row.confirmation_due,
    estimates,
    createdAtMs: row.created_at_ms,
    updatedAtMs: row.updated_at_ms,
  };
}

function rowToReference(row: ReferenceRow): LisaPrincipalTaskReference {
  return {
    taskInternalId: row.task_internal_id,
    referenceType: row.reference_type,
    externalReference: row.external_reference,
    immutable: row.immutable === 1,
    createdAtMs: row.created_at_ms,
  };
}

function rowToEvidence(row: EvidenceRow): LisaPrincipalTaskEvidence {
  return {
    evidenceId: row.evidence_id,
    taskInternalId: row.task_internal_id,
    source: row.source,
    description: row.description,
    reference: row.reference,
    createdAtMs: row.created_at_ms,
  };
}

function rowToAlias(row: AliasRow): LisaPrincipalTaskAlias {
  return {
    aliasInternalId: row.alias_internal_id,
    canonicalInternalId: row.canonical_internal_id,
    reason: row.reason,
    resolvedAtMs: row.resolved_at_ms,
  };
}

/** Additive lazy ensure; the OpenClaw agent schema version remains unchanged. */
export function ensureLisaPrincipalTaskSchema(options: LisaPrincipalTaskStoreOptions): void {
  runOpenClawAgentWriteTransaction(
    ({ db }) => {
      // sqlite-allow-raw: static additive packet DDL only; task DML uses Kysely.
      db.exec(LISA_PRINCIPAL_TASK_SCHEMA_SQL);
    },
    options,
    { operationLabel: "lisa-principal-task.schema.ensure" },
  );
}

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

function validatedCreateInput(input: LisaPrincipalTaskCreateInput) {
  const title = assertNonEmpty(input.title, "task title");
  if (typeof input.explicit !== "boolean") {
    throw new Error("task explicit state is required");
  }
  const effortPeriods = input.effortPeriods ?? 1;
  if (!Number.isFinite(effortPeriods) || effortPeriods <= 0) {
    throw new Error("invalid task effort");
  }
  const importance = input.importance ?? 3;
  if (!Number.isInteger(importance) || importance < 1 || importance > 5) {
    throw new Error("invalid task importance");
  }
  const dependencies = [...(input.dependencies ?? [])].map((value) =>
    assertNonEmpty(value, "task dependency", 120),
  );
  const sourceChannel = input.sourceChannel
    ? assertNonEmpty(input.sourceChannel, "source channel", 64)
    : undefined;
  const sourceEventId = input.sourceEventId
    ? assertNonEmpty(input.sourceEventId, "source event ID", 200)
    : undefined;
  if (sourceEventId && !sourceChannel) {
    throw new Error("source event ID requires source channel");
  }
  const nowMs = input.nowMs ?? Date.now();
  assertTimestamp(nowMs, "nowMs");
  return {
    ...input,
    title,
    normalizedTitle: normalizeTitle(title),
    source: input.explicit ? ("explicit" as const) : ("inferred" as const),
    confirmed: input.explicit,
    status: input.explicit ? ("confirmed_ready" as const) : ("provisional" as const),
    confirmationDue: input.explicit ? ("immediate" as const) : ("next-review" as const),
    urgent: input.urgent ?? false,
    owner: input.owner ?? ("Carlos" as const),
    priority: input.priority ?? ("optional-improvement" as const),
    difficulty: input.difficulty ?? ("medium" as const),
    effortPeriods,
    importance,
    dependencies,
    capacity: input.capacity ?? ("normal" as const),
    sourceChannel,
    sourceEventId,
    nowMs,
  };
}

function nextDisplayRef(db: import("node:sqlite").DatabaseSync): string {
  const query = getNodeSqliteKysely<PrincipalTaskDatabase>(db);
  const current = executeSqliteQueryTakeFirstSync(
    db,
    query
      .selectFrom("lisa_principal_task_sequences")
      .select("next_value")
      .where("sequence_name", "=", "display_ref"),
  ) as { next_value: number } | undefined;
  const sequence = current?.next_value ?? 1;
  const displayRef = formatLisaPrincipalTaskDisplayRef(sequence);
  if (current) {
    executeSqliteQuerySync(
      db,
      query
        .updateTable("lisa_principal_task_sequences")
        .set({ next_value: sequence + 1 })
        .where("sequence_name", "=", "display_ref"),
    );
  } else {
    executeSqliteQuerySync(
      db,
      query
        .insertInto("lisa_principal_task_sequences")
        .values({ sequence_name: "display_ref", next_value: 2 }),
    );
  }
  return displayRef;
}

function loadTask(db: import("node:sqlite").DatabaseSync, internalId: string): TaskRow {
  const row = executeSqliteQueryTakeFirstSync(
    db,
    getNodeSqliteKysely<PrincipalTaskDatabase>(db)
      .selectFrom("lisa_principal_tasks")
      .selectAll()
      .where("internal_id", "=", internalId),
  ) as TaskRow | undefined;
  if (!row) {
    throw new Error(`Lisa Principal task not found: ${internalId}`);
  }
  return row;
}

function assertReferences(references: LisaPrincipalTaskCreateInput["references"]): Array<{
  type: LisaPrincipalTaskReferenceType;
  externalReference: string;
  immutable: boolean;
}> {
  const values = references ?? [];
  const seen = new Set<string>();
  return values.map((reference) => {
    const type = reference.type;
    const externalReference = assertNonEmpty(
      reference.externalReference,
      "task external reference",
      500,
    );
    const key = `${type}:${externalReference}`;
    if (seen.has(key)) {
      throw new Error(`duplicate task reference: ${key}`);
    }
    seen.add(key);
    return {
      type,
      externalReference,
      immutable: type === "program" || reference.immutable === true,
    };
  });
}

function insertReference(
  db: import("node:sqlite").DatabaseSync,
  taskInternalId: string,
  reference: {
    type: LisaPrincipalTaskReferenceType;
    externalReference: string;
    immutable: boolean;
  },
  nowMs: number,
): void {
  const query = getNodeSqliteKysely<PrincipalTaskDatabase>(db);
  const existing = executeSqliteQueryTakeFirstSync(
    db,
    query
      .selectFrom("lisa_principal_task_references")
      .selectAll()
      .where("reference_type", "=", reference.type)
      .where("external_reference", "=", reference.externalReference),
  ) as ReferenceRow | undefined;
  if (existing) {
    const existingTask = canonicalizeInternalId(db, existing.task_internal_id);
    const requestedTask = canonicalizeInternalId(db, taskInternalId);
    if (existingTask !== requestedTask) {
      throw new Error(`task reference already belongs to ${existingTask}`);
    }
    return;
  }
  executeSqliteQuerySync(
    db,
    query.insertInto("lisa_principal_task_references").values({
      task_internal_id: requestedTaskId(db, taskInternalId),
      reference_type: reference.type,
      external_reference: reference.externalReference,
      immutable: reference.immutable ? 1 : 0,
      created_at_ms: nowMs,
    }),
  );
}

function requestedTaskId(db: import("node:sqlite").DatabaseSync, internalId: string): string {
  return canonicalizeInternalId(db, internalId);
}

function taskFromDb(
  db: import("node:sqlite").DatabaseSync,
  internalId: string,
): LisaPrincipalTaskRecord {
  return rowToTask(loadTask(db, canonicalizeInternalId(db, internalId)));
}

export function intakeLisaPrincipalTask(
  options: LisaPrincipalTaskStoreOptions,
  input: LisaPrincipalTaskCreateInput,
): LisaPrincipalTaskIntakeResult {
  const value = validatedCreateInput(input);
  const references = assertReferences(input.references);
  ensureLisaPrincipalTaskSchema(options);
  return runOpenClawAgentWriteTransaction(
    ({ db }) => {
      const query = getNodeSqliteKysely<PrincipalTaskDatabase>(db);
      if (value.sourceChannel && value.sourceEventId) {
        const existingEvent = executeSqliteQueryTakeFirstSync(
          db,
          query
            .selectFrom("lisa_principal_task_intake_events")
            .select("task_internal_id")
            .where("channel", "=", value.sourceChannel)
            .where("event_id", "=", value.sourceEventId),
        ) as Pick<IntakeRow, "task_internal_id"> | undefined;
        if (existingEvent) {
          const task = taskFromDb(db, existingEvent.task_internal_id);
          return { task, created: false, idempotent: true, duplicateCandidateInternalIds: [] };
        }
      }

      let existingTaskId: string | undefined;
      for (const reference of references) {
        const row = executeSqliteQueryTakeFirstSync(
          db,
          query
            .selectFrom("lisa_principal_task_references")
            .select("task_internal_id")
            .where("reference_type", "=", reference.type)
            .where("external_reference", "=", reference.externalReference),
        ) as Pick<ReferenceRow, "task_internal_id"> | undefined;
        if (row) {
          const canonical = canonicalizeInternalId(db, row.task_internal_id);
          if (existingTaskId && existingTaskId !== canonical) {
            throw new Error("cross-channel references resolve to different tasks");
          }
          existingTaskId = canonical;
        }
      }

      if (existingTaskId) {
        for (const reference of references) {
          insertReference(db, existingTaskId, reference, value.nowMs);
        }
        if (value.sourceChannel && value.sourceEventId) {
          executeSqliteQuerySync(
            db,
            query.insertInto("lisa_principal_task_intake_events").values({
              channel: value.sourceChannel,
              event_id: value.sourceEventId,
              task_internal_id: existingTaskId,
              created_at_ms: value.nowMs,
            }),
          );
        }
        return {
          task: taskFromDb(db, existingTaskId),
          created: false,
          idempotent: false,
          duplicateCandidateInternalIds: [],
        };
      }

      const internalId = assertInternalId(value.internalId ?? createLisaPrincipalTaskInternalId());
      const displayRef = nextDisplayRef(db);
      const estimate = <T>(estimateValue: T): LisaPrincipalTaskEstimate<T> => ({
        value: estimateValue,
        source: "Lisa estimate",
        overridable: true,
      });
      const estimates = {
        importance: estimate(value.importance),
        difficulty: estimate(value.difficulty),
        effortPeriods: estimate(value.effortPeriods),
        dependencies: estimate([...value.dependencies]),
        owner: estimate(value.owner),
      };
      executeSqliteQuerySync(
        db,
        query.insertInto("lisa_principal_tasks").values({
          internal_id: internalId,
          display_ref: displayRef,
          title: value.title,
          normalized_title: value.normalizedTitle,
          source: value.source,
          explicit: value.explicit ? 1 : 0,
          confirmed: value.confirmed ? 1 : 0,
          urgent: value.urgent ? 1 : 0,
          status: value.status,
          owner: value.owner,
          priority: value.priority,
          difficulty: value.difficulty,
          effort_periods: value.effortPeriods,
          importance: value.importance,
          dependencies_json: JSON.stringify(value.dependencies),
          capacity: value.capacity,
          due_date: value.dueDate ?? null,
          parent_internal_id: value.parentInternalId
            ? assertInternalId(value.parentInternalId)
            : null,
          related_key: value.relatedKey
            ? assertNonEmpty(value.relatedKey, "task related key", 200)
            : null,
          confirmation_due: value.confirmationDue,
          estimates_json: JSON.stringify(estimates),
          created_at_ms: value.nowMs,
          updated_at_ms: value.nowMs,
        }),
      );
      for (const reference of references) {
        insertReference(db, internalId, reference, value.nowMs);
      }
      if (value.sourceChannel && value.sourceEventId) {
        executeSqliteQuerySync(
          db,
          query.insertInto("lisa_principal_task_intake_events").values({
            channel: value.sourceChannel,
            event_id: value.sourceEventId,
            task_internal_id: internalId,
            created_at_ms: value.nowMs,
          }),
        );
      }
      const duplicateCandidateRows = [
        ...iterateSqliteQuerySync(
          db,
          query
            .selectFrom("lisa_principal_tasks")
            .select("internal_id")
            .where("normalized_title", "=", value.normalizedTitle)
            .where("internal_id", "!=", internalId)
            .orderBy("created_at_ms", "desc")
            .limit(5),
        ),
      ] as Array<{ internal_id: string }>;
      return {
        task: taskFromDb(db, internalId),
        created: true,
        idempotent: false,
        duplicateCandidateInternalIds: duplicateCandidateRows.map((row) => row.internal_id),
      };
    },
    options,
    { operationLabel: "lisa-principal-task.intake" },
  );
}

/** Alias kept intentionally descriptive for callers that treat intake as create-or-load. */
export const createOrLoadLisaPrincipalTask = intakeLisaPrincipalTask;

export function readLisaPrincipalTask(
  options: LisaPrincipalTaskStoreOptions,
  internalId: string,
): LisaPrincipalTaskRecord | undefined {
  ensureLisaPrincipalTaskSchema(options);
  const { db } = openOpenClawAgentDatabase(options);
  const canonical = canonicalizeInternalId(db, internalId);
  const row = executeSqliteQueryTakeFirstSync(
    db,
    getNodeSqliteKysely<PrincipalTaskDatabase>(db)
      .selectFrom("lisa_principal_tasks")
      .selectAll()
      .where("internal_id", "=", canonical),
  ) as TaskRow | undefined;
  return row ? rowToTask(row) : undefined;
}

export function readLisaPrincipalTaskByDisplayRef(
  options: LisaPrincipalTaskStoreOptions,
  displayRef: string,
): LisaPrincipalTaskRecord | undefined {
  ensureLisaPrincipalTaskSchema(options);
  const { db } = openOpenClawAgentDatabase(options);
  const row = executeSqliteQueryTakeFirstSync(
    db,
    getNodeSqliteKysely<PrincipalTaskDatabase>(db)
      .selectFrom("lisa_principal_tasks")
      .selectAll()
      .where("display_ref", "=", assertDisplayRef(displayRef)),
  ) as TaskRow | undefined;
  return row ? rowToTask(row) : undefined;
}

export function listLisaPrincipalTasks(
  options: LisaPrincipalTaskStoreOptions,
  status?: LisaPrincipalTaskStatus,
): readonly LisaPrincipalTaskRecord[] {
  ensureLisaPrincipalTaskSchema(options);
  const { db } = openOpenClawAgentDatabase(options);
  let query = getNodeSqliteKysely<PrincipalTaskDatabase>(db)
    .selectFrom("lisa_principal_tasks")
    .selectAll()
    .orderBy("created_at_ms")
    .orderBy("display_ref");
  if (status) {
    query = query.where("status", "=", status) as typeof query;
  }
  return [...iterateSqliteQuerySync(db, query)].map((row) => rowToTask(row as TaskRow));
}

export function findLisaPrincipalTaskDuplicates(
  options: LisaPrincipalTaskStoreOptions,
  title: string,
  limit = 5,
): readonly LisaPrincipalTaskRecord[] {
  if (!Number.isInteger(limit) || limit < 1 || limit > 20) {
    throw new Error("duplicate limit is out of range");
  }
  ensureLisaPrincipalTaskSchema(options);
  const { db } = openOpenClawAgentDatabase(options);
  return [
    ...iterateSqliteQuerySync(
      db,
      getNodeSqliteKysely<PrincipalTaskDatabase>(db)
        .selectFrom("lisa_principal_tasks")
        .selectAll()
        .where("normalized_title", "=", normalizeTitle(title))
        .orderBy("created_at_ms", "desc")
        .limit(limit),
    ),
  ].map((row) => rowToTask(row as TaskRow));
}

export function listLisaPrincipalTaskReferences(
  options: LisaPrincipalTaskStoreOptions,
  internalId: string,
): readonly LisaPrincipalTaskReference[] {
  ensureLisaPrincipalTaskSchema(options);
  const { db } = openOpenClawAgentDatabase(options);
  const taskId = canonicalizeInternalId(db, internalId);
  return [
    ...iterateSqliteQuerySync(
      db,
      getNodeSqliteKysely<PrincipalTaskDatabase>(db)
        .selectFrom("lisa_principal_task_references")
        .selectAll()
        .where("task_internal_id", "=", taskId)
        .orderBy("created_at_ms"),
    ),
  ].map((row) => rowToReference(row as ReferenceRow));
}

export function addLisaPrincipalTaskReference(
  options: LisaPrincipalTaskStoreOptions,
  input: {
    internalId: string;
    referenceType: LisaPrincipalTaskReferenceType;
    externalReference: string;
    immutable?: boolean;
    nowMs?: number;
  },
): LisaPrincipalTaskReference {
  const externalReference = assertNonEmpty(input.externalReference, "task external reference", 500);
  const nowMs = input.nowMs ?? Date.now();
  assertTimestamp(nowMs, "nowMs");
  ensureLisaPrincipalTaskSchema(options);
  return runOpenClawAgentWriteTransaction(
    ({ db }) => {
      const taskId = canonicalizeInternalId(db, input.internalId);
      loadTask(db, taskId);
      insertReference(
        db,
        taskId,
        {
          type: input.referenceType,
          externalReference,
          immutable: input.referenceType === "program" || input.immutable === true,
        },
        nowMs,
      );
      const row = executeSqliteQueryTakeFirstSync(
        db,
        getNodeSqliteKysely<PrincipalTaskDatabase>(db)
          .selectFrom("lisa_principal_task_references")
          .selectAll()
          .where("reference_type", "=", input.referenceType)
          .where("external_reference", "=", externalReference),
      ) as ReferenceRow | undefined;
      if (!row) {
        throw new Error("task reference disappeared after insert");
      }
      return rowToReference(row);
    },
    options,
    { operationLabel: "lisa-principal-task.reference.add" },
  );
}

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

function addEvidenceInTransaction(
  db: import("node:sqlite").DatabaseSync,
  taskInternalId: string,
  evidence: {
    evidenceId?: string;
    source: EvidenceRow["source"];
    description: string;
    reference: string;
  },
  nowMs: number,
): EvidenceRow {
  const description = assertNonEmpty(evidence.description, "task evidence description", 1_000);
  const reference = assertNonEmpty(evidence.reference, "task evidence reference", 500);
  const evidenceId = assertInternalId(evidence.evidenceId ?? randomUUID());
  const query = getNodeSqliteKysely<PrincipalTaskDatabase>(db);
  executeSqliteQuerySync(
    db,
    query
      .insertInto("lisa_principal_task_evidence")
      .values({
        evidence_id: evidenceId,
        task_internal_id: requestedTaskId(db, taskInternalId),
        source: evidence.source,
        description,
        reference,
        created_at_ms: nowMs,
      })
      .onConflict((conflict) =>
        conflict.columns(["task_internal_id", "source", "reference"]).doNothing(),
      ),
  );
  const row = executeSqliteQueryTakeFirstSync(
    db,
    query
      .selectFrom("lisa_principal_task_evidence")
      .selectAll()
      .where("task_internal_id", "=", requestedTaskId(db, taskInternalId))
      .where("source", "=", evidence.source)
      .where("reference", "=", reference),
  ) as EvidenceRow | undefined;
  if (!row) {
    throw new Error("task evidence disappeared after insert");
  }
  return row;
}

export function recordLisaPrincipalTaskEvidence(
  options: LisaPrincipalTaskStoreOptions,
  input: {
    internalId: string;
    evidenceId?: string;
    source: "Carlos" | "Lisa" | "subordinate-agent";
    description: string;
    reference: string;
    nowMs?: number;
  },
): LisaPrincipalTaskEvidence {
  const nowMs = input.nowMs ?? Date.now();
  assertTimestamp(nowMs, "nowMs");
  ensureLisaPrincipalTaskSchema(options);
  return runOpenClawAgentWriteTransaction(
    ({ db }) => rowToEvidence(addEvidenceInTransaction(db, input.internalId, input, nowMs)),
    options,
    { operationLabel: "lisa-principal-task.evidence.record" },
  );
}

export function listLisaPrincipalTaskEvidence(
  options: LisaPrincipalTaskStoreOptions,
  internalId: string,
): readonly LisaPrincipalTaskEvidence[] {
  ensureLisaPrincipalTaskSchema(options);
  const { db } = openOpenClawAgentDatabase(options);
  const taskId = canonicalizeInternalId(db, internalId);
  return [
    ...iterateSqliteQuerySync(
      db,
      getNodeSqliteKysely<PrincipalTaskDatabase>(db)
        .selectFrom("lisa_principal_task_evidence")
        .selectAll()
        .where("task_internal_id", "=", taskId)
        .orderBy("created_at_ms"),
    ),
  ].map((row) => rowToEvidence(row as EvidenceRow));
}

export function transitionLisaPrincipalTask(
  options: LisaPrincipalTaskStoreOptions,
  input: {
    internalId: string;
    expectedStatus: LisaPrincipalTaskStatus;
    nextStatus: LisaPrincipalTaskStatus;
    evidence?: {
      evidenceId?: string;
      source: "Carlos" | "Lisa" | "subordinate-agent";
      description: string;
      reference: string;
    };
    nowMs?: number;
  },
): LisaPrincipalTaskRecord {
  assertLisaPrincipalTaskTransition(input.expectedStatus, input.nextStatus);
  const nowMs = input.nowMs ?? Date.now();
  assertTimestamp(nowMs, "nowMs");
  ensureLisaPrincipalTaskSchema(options);
  return runOpenClawAgentWriteTransaction(
    ({ db }) => {
      const taskId = canonicalizeInternalId(db, input.internalId);
      const task = loadTask(db, taskId);
      if (task.status !== input.expectedStatus) {
        throw new Error(
          `state_transition_conflict: expected ${input.expectedStatus}, found ${task.status}`,
        );
      }
      if (input.evidence) {
        addEvidenceInTransaction(db, taskId, input.evidence, nowMs);
      }
      if (input.nextStatus === "completed_verified") {
        const evidence = [
          ...iterateSqliteQuerySync(
            db,
            getNodeSqliteKysely<PrincipalTaskDatabase>(db)
              .selectFrom("lisa_principal_task_evidence")
              .selectAll()
              .where("task_internal_id", "=", taskId),
          ),
        ] as EvidenceRow[];
        if (evidence.length === 0) {
          throw new Error("completed task requires evidence");
        }
        const hasIndependentEvidence = evidence.some(
          (entry) =>
            entry.source !== "Carlos" && entry.description.trim() && entry.reference.trim(),
        );
        const hasCarlosEvidence = evidence.some(
          (entry) => entry.source === "Carlos" && entry.description.trim(),
        );
        if (task.owner === "Carlos" ? !hasCarlosEvidence : !hasIndependentEvidence) {
          throw new Error("Lisa or agent completion requires evidence");
        }
      }
      executeSqliteQuerySync(
        db,
        getNodeSqliteKysely<PrincipalTaskDatabase>(db)
          .updateTable("lisa_principal_tasks")
          .set({
            status: input.nextStatus,
            confirmed: input.nextStatus === "provisional" ? 0 : 1,
            updated_at_ms: nowMs,
          })
          .where("internal_id", "=", taskId)
          .where("status", "=", input.expectedStatus),
      );
      return taskFromDb(db, taskId);
    },
    options,
    { operationLabel: "lisa-principal-task.transition" },
  );
}

export function resolveLisaPrincipalTaskDuplicate(
  options: LisaPrincipalTaskStoreOptions,
  input: { aliasInternalId: string; canonicalInternalId: string; reason: string; nowMs?: number },
): LisaPrincipalTaskAlias {
  const aliasInternalId = assertInternalId(input.aliasInternalId);
  const canonicalInternalId = assertInternalId(input.canonicalInternalId);
  if (aliasInternalId === canonicalInternalId) {
    throw new Error("a task cannot alias itself");
  }
  const reason = assertNonEmpty(input.reason, "duplicate resolution reason", 500);
  const nowMs = input.nowMs ?? Date.now();
  assertTimestamp(nowMs, "nowMs");
  ensureLisaPrincipalTaskSchema(options);
  return runOpenClawAgentWriteTransaction(
    ({ db }) => {
      const alias = canonicalizeInternalId(db, aliasInternalId);
      const canonical = canonicalizeInternalId(db, canonicalInternalId);
      if (alias === canonical) {
        throw new Error("task alias would create a cycle");
      }
      loadTask(db, alias);
      loadTask(db, canonical);
      const existing = executeSqliteQueryTakeFirstSync(
        db,
        getNodeSqliteKysely<PrincipalTaskDatabase>(db)
          .selectFrom("lisa_principal_task_aliases")
          .selectAll()
          .where("alias_internal_id", "=", alias),
      ) as AliasRow | undefined;
      if (existing && existing.canonical_internal_id !== canonical) {
        throw new Error("task alias already resolved to another canonical task");
      }
      if (!existing) {
        executeSqliteQuerySync(
          db,
          getNodeSqliteKysely<PrincipalTaskDatabase>(db)
            .insertInto("lisa_principal_task_aliases")
            .values({
              alias_internal_id: alias,
              canonical_internal_id: canonical,
              reason,
              resolved_at_ms: nowMs,
            }),
        );
        executeSqliteQuerySync(
          db,
          getNodeSqliteKysely<PrincipalTaskDatabase>(db)
            .updateTable("lisa_principal_task_references")
            .set({ task_internal_id: canonical })
            .where("task_internal_id", "=", alias),
        );
        executeSqliteQuerySync(
          db,
          getNodeSqliteKysely<PrincipalTaskDatabase>(db)
            .updateTable("lisa_principal_task_intake_events")
            .set({ task_internal_id: canonical })
            .where("task_internal_id", "=", alias),
        );
      }
      const row = executeSqliteQueryTakeFirstSync(
        db,
        getNodeSqliteKysely<PrincipalTaskDatabase>(db)
          .selectFrom("lisa_principal_task_aliases")
          .selectAll()
          .where("alias_internal_id", "=", alias),
      ) as AliasRow | undefined;
      if (!row) {
        throw new Error("task alias disappeared after resolution");
      }
      return rowToAlias(row);
    },
    options,
    { operationLabel: "lisa-principal-task.duplicate.resolve" },
  );
}

export function listLisaPrincipalTaskAliases(
  options: LisaPrincipalTaskStoreOptions,
  canonicalInternalId?: string,
): readonly LisaPrincipalTaskAlias[] {
  ensureLisaPrincipalTaskSchema(options);
  const { db } = openOpenClawAgentDatabase(options);
  let query = getNodeSqliteKysely<PrincipalTaskDatabase>(db)
    .selectFrom("lisa_principal_task_aliases")
    .selectAll()
    .orderBy("resolved_at_ms");
  if (canonicalInternalId) {
    query = query.where(
      "canonical_internal_id",
      "=",
      canonicalizeInternalId(db, canonicalInternalId),
    ) as typeof query;
  }
  return [...iterateSqliteQuerySync(db, query)].map((row) => rowToAlias(row as AliasRow));
}

/** Google Tasks are only Carlos-owned references; other task ledgers remain distinct. */
export function classifyLisaPrincipalTaskLedger(
  owner: LisaPrincipalTaskOwner,
): "google_tasks" | "other_tasks" {
  return owner === "Carlos" ? "google_tasks" : "other_tasks";
}

/** Brain references are advisory and never grant execution authority. */
export function addLisaPrincipalTaskBrainAdvisoryReference(
  options: LisaPrincipalTaskStoreOptions,
  internalId: string,
  advisoryReference: string,
  nowMs?: number,
): LisaPrincipalTaskReference {
  return addLisaPrincipalTaskReference(options, {
    internalId,
    referenceType: "brain_advisory",
    externalReference: advisoryReference,
    immutable: false,
    ...(nowMs === undefined ? {} : { nowMs }),
  });
}

/** Program references are immutable once recorded and never become task truth. */
export function addLisaPrincipalTaskProgramReference(
  options: LisaPrincipalTaskStoreOptions,
  internalId: string,
  programReference: string,
  nowMs?: number,
): LisaPrincipalTaskReference {
  return addLisaPrincipalTaskReference(options, {
    internalId,
    referenceType: "program",
    externalReference: programReference,
    immutable: true,
    ...(nowMs === undefined ? {} : { nowMs }),
  });
}
