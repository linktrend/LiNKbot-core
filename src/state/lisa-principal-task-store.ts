import {
  executeSqliteQueryTakeFirstSync,
  getNodeSqliteKysely,
  iterateSqliteQuerySync,
} from "../infra/kysely-sync.js";
import {
  assertDisplayRef,
  canonicalizeInternalId,
  conflictRowToEvidence,
  ensureLisaPrincipalTaskSchema,
  normalizeTitle,
  rowToAlias,
  rowToEvidence,
  rowToReference,
  rowToTask,
} from "./lisa-principal-task-helpers.js";
import type {
  AliasRow,
  EvidenceConflictRow,
  EvidenceRow,
  LisaPrincipalTaskAlias,
  LisaPrincipalTaskEvidence,
  LisaPrincipalTaskOwner,
  LisaPrincipalTaskRecord,
  LisaPrincipalTaskReference,
  LisaPrincipalTaskStatus,
  LisaPrincipalTaskStoreOptions,
  PrincipalTaskDatabase,
  ReferenceRow,
  TaskRow,
} from "./lisa-principal-task-types.js";
import {
  addLisaPrincipalTaskReference,
  intakeLisaPrincipalTask,
} from "./lisa-principal-task-writes.js";
import { openOpenClawAgentDatabase } from "./openclaw-agent-db.js";

export {
  LISA_PRINCIPAL_TASK_STATUSES,
  assertLisaPrincipalTaskTransition,
  type LisaPrincipalTaskAlias,
  type LisaPrincipalTaskCapacity,
  type LisaPrincipalTaskCreateInput,
  type LisaPrincipalTaskDifficulty,
  type LisaPrincipalTaskEstimate,
  type LisaPrincipalTaskEvidence,
  type LisaPrincipalTaskIntakeResult,
  type LisaPrincipalTaskOwner,
  type LisaPrincipalTaskPriority,
  type LisaPrincipalTaskRecord,
  type LisaPrincipalTaskReference,
  type LisaPrincipalTaskReferenceType,
  type LisaPrincipalTaskSource,
  type LisaPrincipalTaskStatus,
  type LisaPrincipalTaskStoreOptions,
} from "./lisa-principal-task-types.js";
export {
  createLisaPrincipalTaskInternalId,
  ensureLisaPrincipalTaskSchema,
  formatLisaPrincipalTaskDisplayRef,
} from "./lisa-principal-task-helpers.js";
export {
  addLisaPrincipalTaskReference,
  intakeLisaPrincipalTask,
  recordLisaPrincipalTaskEvidence,
  resolveLisaPrincipalTaskDuplicate,
  transitionLisaPrincipalTask,
} from "./lisa-principal-task-writes.js";

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

export function listLisaPrincipalTaskEvidence(
  options: LisaPrincipalTaskStoreOptions,
  internalId: string,
): readonly LisaPrincipalTaskEvidence[] {
  ensureLisaPrincipalTaskSchema(options);
  const { db } = openOpenClawAgentDatabase(options);
  const taskId = canonicalizeInternalId(db, internalId);
  const evidence = [
    ...iterateSqliteQuerySync(
      db,
      getNodeSqliteKysely<PrincipalTaskDatabase>(db)
        .selectFrom("lisa_principal_task_evidence")
        .selectAll()
        .where("task_internal_id", "=", taskId)
        .orderBy("created_at_ms"),
    ),
  ].map((row) => rowToEvidence(row as EvidenceRow));
  const conflicts = [
    ...iterateSqliteQuerySync(
      db,
      getNodeSqliteKysely<PrincipalTaskDatabase>(db)
        .selectFrom("lisa_principal_task_evidence_conflicts")
        .selectAll()
        .where("task_internal_id", "=", taskId)
        .orderBy("created_at_ms"),
    ),
  ].map((row) => conflictRowToEvidence(row as EvidenceConflictRow));
  return [...evidence, ...conflicts].toSorted(
    (left, right) =>
      left.createdAtMs - right.createdAtMs || left.evidenceId.localeCompare(right.evidenceId),
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
