import { randomUUID } from "node:crypto";
import type { DatabaseSync } from "node:sqlite";
import {
  executeSqliteQuerySync,
  executeSqliteQueryTakeFirstSync,
  getNodeSqliteKysely,
} from "../infra/kysely-sync.js";
import { LISA_PRINCIPAL_TASK_SCHEMA_SQL } from "./lisa-principal-task-schema.js";
import type {
  AliasRow,
  EvidenceConflictRow,
  EvidenceRow,
  LisaPrincipalTaskAlias,
  LisaPrincipalTaskCreateInput,
  LisaPrincipalTaskEvidence,
  LisaPrincipalTaskRecord,
  LisaPrincipalTaskReference,
  LisaPrincipalTaskReferenceType,
  LisaPrincipalTaskStoreOptions,
  PrincipalTaskDatabase,
  ReferenceRow,
  TaskRow,
} from "./lisa-principal-task-types.js";
import { runOpenClawAgentWriteTransaction } from "./openclaw-agent-db.js";

export function assertNonEmpty(value: string, label: string, maxLength = 500): string {
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > maxLength || trimmed.includes("\0")) {
    throw new Error(`invalid ${label}`);
  }
  return trimmed;
}

export function assertTimestamp(value: number, label: string): void {
  if (!Number.isInteger(value) || value < 0) {
    throw new Error(`invalid ${label}`);
  }
}

export function normalizeTitle(title: string): string {
  return assertNonEmpty(title, "task title").toLocaleLowerCase("en-US").replace(/\s+/gu, " ");
}

export function assertInternalId(value: string): string {
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

export function assertDisplayRef(value: string): string {
  const normalized = assertNonEmpty(value, "task display reference", 32).toUpperCase();
  if (!/^T-[0-9A-Z]{6,}$/u.test(normalized)) {
    throw new Error("task display reference must use stable T- syntax");
  }
  return normalized;
}

export function parseJson(value: string, label: string): unknown {
  try {
    return JSON.parse(value) as unknown;
  } catch {
    throw new Error(`invalid ${label}`);
  }
}

export function canonicalizeInternalId(db: DatabaseSync, id: string): string {
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

export function rowToTask(row: TaskRow): LisaPrincipalTaskRecord {
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

export function rowToReference(row: ReferenceRow): LisaPrincipalTaskReference {
  return {
    taskInternalId: row.task_internal_id,
    referenceType: row.reference_type,
    externalReference: row.external_reference,
    immutable: row.immutable === 1,
    createdAtMs: row.created_at_ms,
  };
}

export function rowToEvidence(row: EvidenceRow): LisaPrincipalTaskEvidence {
  return {
    evidenceId: row.evidence_id,
    taskInternalId: row.task_internal_id,
    source: row.source,
    description: row.description,
    reference: row.reference,
    createdAtMs: row.created_at_ms,
  };
}

export function conflictRowToEvidence(row: EvidenceConflictRow): LisaPrincipalTaskEvidence {
  return {
    evidenceId: row.conflict_id,
    taskInternalId: row.task_internal_id,
    source: row.source,
    description: row.description,
    reference: row.reference,
    createdAtMs: row.created_at_ms,
  };
}

export function rowToAlias(row: AliasRow): LisaPrincipalTaskAlias {
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

export function nextDisplayRef(db: DatabaseSync): string {
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

export function loadTask(db: DatabaseSync, internalId: string): TaskRow {
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

export function assertReferences(references: LisaPrincipalTaskCreateInput["references"]): Array<{
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

export function insertReference(
  db: DatabaseSync,
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

export function requestedTaskId(db: DatabaseSync, internalId: string): string {
  return canonicalizeInternalId(db, internalId);
}

export function taskFromDb(db: DatabaseSync, internalId: string): LisaPrincipalTaskRecord {
  return rowToTask(loadTask(db, canonicalizeInternalId(db, internalId)));
}

export function addEvidenceInTransaction(
  db: DatabaseSync,
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
