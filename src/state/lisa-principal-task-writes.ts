import {
  executeSqliteQuerySync,
  executeSqliteQueryTakeFirstSync,
  getNodeSqliteKysely,
  iterateSqliteQuerySync,
} from "../infra/kysely-sync.js";
import {
  addEvidenceInTransaction,
  assertInternalId,
  assertNonEmpty,
  assertReferences,
  assertTimestamp,
  canonicalizeInternalId,
  createLisaPrincipalTaskInternalId,
  ensureLisaPrincipalTaskSchema,
  insertReference,
  loadTask,
  nextDisplayRef,
  normalizeTitle,
  rowToAlias,
  rowToEvidence,
  rowToReference,
  taskFromDb,
} from "./lisa-principal-task-helpers.js";
import {
  assertLisaPrincipalTaskTransition,
  type AliasRow,
  type EvidenceConflictRow,
  type EvidenceRow,
  type IntakeRow,
  type LisaPrincipalTaskAlias,
  type LisaPrincipalTaskCreateInput,
  type LisaPrincipalTaskEstimate,
  type LisaPrincipalTaskEvidence,
  type LisaPrincipalTaskIntakeResult,
  type LisaPrincipalTaskRecord,
  type LisaPrincipalTaskReference,
  type LisaPrincipalTaskReferenceType,
  type LisaPrincipalTaskStatus,
  type LisaPrincipalTaskStoreOptions,
  type PrincipalTaskDatabase,
  type ReferenceRow,
} from "./lisa-principal-task-types.js";
import { runOpenClawAgentWriteTransaction } from "./openclaw-agent-db.js";

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
        const conflictEvidence = [
          ...iterateSqliteQuerySync(
            db,
            getNodeSqliteKysely<PrincipalTaskDatabase>(db)
              .selectFrom("lisa_principal_task_evidence_conflicts")
              .selectAll()
              .where("task_internal_id", "=", taskId),
          ),
        ] as EvidenceConflictRow[];
        if (evidence.length === 0 && conflictEvidence.length === 0) {
          throw new Error("completed task requires evidence");
        }
        const hasIndependentEvidence = [...evidence, ...conflictEvidence].some(
          (entry) =>
            entry.source !== "Carlos" && entry.description.trim() && entry.reference.trim(),
        );
        const hasCarlosEvidence = [...evidence, ...conflictEvidence].some(
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
      const alias = aliasInternalId;
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
      if (existing) {
        if (canonicalizeInternalId(db, existing.canonical_internal_id) !== canonical) {
          throw new Error("task alias already resolved to another canonical task");
        }
        return rowToAlias(existing);
      }
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
      const aliasEvidence = [
        ...iterateSqliteQuerySync(
          db,
          getNodeSqliteKysely<PrincipalTaskDatabase>(db)
            .selectFrom("lisa_principal_task_evidence")
            .selectAll()
            .where("task_internal_id", "=", alias),
        ),
      ] as EvidenceRow[];
      const evidenceQuery = getNodeSqliteKysely<PrincipalTaskDatabase>(db);
      for (const evidence of aliasEvidence) {
        const canonicalEvidence = executeSqliteQueryTakeFirstSync(
          db,
          evidenceQuery
            .selectFrom("lisa_principal_task_evidence")
            .select("evidence_id")
            .where("task_internal_id", "=", canonical)
            .where("source", "=", evidence.source)
            .where("reference", "=", evidence.reference),
        );
        if (canonicalEvidence) {
          // Keep the alias receipt in a keyed conflict row when its description differs.
          executeSqliteQuerySync(
            db,
            evidenceQuery
              .insertInto("lisa_principal_task_evidence_conflicts")
              .values({
                conflict_id: evidence.evidence_id,
                task_internal_id: canonical,
                source: evidence.source,
                description: evidence.description,
                reference: evidence.reference,
                original_evidence_id: evidence.evidence_id,
                created_at_ms: evidence.created_at_ms,
              })
              .onConflict((conflict) => conflict.column("conflict_id").doNothing()),
          );
          executeSqliteQuerySync(
            db,
            evidenceQuery
              .deleteFrom("lisa_principal_task_evidence")
              .where("evidence_id", "=", evidence.evidence_id),
          );
        } else {
          executeSqliteQuerySync(
            db,
            evidenceQuery
              .updateTable("lisa_principal_task_evidence")
              .set({ task_internal_id: canonical })
              .where("evidence_id", "=", evidence.evidence_id),
          );
        }
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
