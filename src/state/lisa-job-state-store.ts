import { randomUUID } from "node:crypto";
import {
  assertCycleIdentity,
  assertLisaGenericPrivacyClass,
  assertLisaJobId,
  assertLisaJobRunState,
  assertLisaLocalDate,
  assertProviderReceiptReference,
  assertSafeIdentifier,
  assertSha256Hash,
  assertTimestamp,
  isLisaTerminalJobRunState,
  type LisaDependencyReceipt,
  type LisaDeliveryAttempt,
  type LisaDeliveryAttemptStatus,
  type LisaGenericPrivacyClass,
  type LisaJobId,
  type LisaJobRunState,
} from "../../linkbots/lisa/ops/jobs/lisa-job-contracts.js";
import { executeSqliteQuerySync } from "../infra/kysely-sync.js";
import {
  type LisaDeliveryDbRow,
  type LisaJobStateSchemaOptions,
  type LisaJobRunRecord,
  type LisaJobRunCreateInput,
  type LisaJobRunTransitionInput,
  type LisaJobRunDbRow,
  type LisaPendingWorkDbRow,
  type LisaPendingWorkRecord,
  type LisaReceiptDbRow,
  lisaJobStateDbOptions,
  lisaJobStateDelivery,
  lisaJobStateKysely,
  ensureLisaJobStateSchema,
  lisaJobStateOne,
  lisaJobStatePending,
  lisaJobStateReceipt,
  lisaJobStateRun,
  lisaJobStateSafeResult,
  lisaJobStateWorkPayload,
  lisaJobStateRows,
  requireHealthyLisaJobStateStore,
  redactLisaJobResultForDiagnostics,
} from "./lisa-job-state-schema.js";
import {
  openOpenClawAgentDatabase,
  runOpenClawAgentWriteTransaction,
} from "./openclaw-agent-db.js";

export type LisaJobStateStoreOptions = LisaJobStateSchemaOptions;
export { hashLisaJobPayload } from "./lisa-job-state-schema.js";
export { redactLisaJobResultForDiagnostics };
type LisaDeliveryAttemptDbRow = LisaDeliveryDbRow;
type RunRow = LisaJobRunDbRow;
type ReceiptRow = LisaReceiptDbRow;
type DeliveryRow = LisaDeliveryAttemptDbRow;
type WorkRow = LisaPendingWorkDbRow;
const dbOptions = lisaJobStateDbOptions;
const kysely = lisaJobStateKysely;
const one = lisaJobStateOne;
const rows = lisaJobStateRows;
const run = lisaJobStateRun;
const receipt = lisaJobStateReceipt;
const delivery = lisaJobStateDelivery;
const pending = lisaJobStatePending;
const safeResult = lisaJobStateSafeResult;
const workPayload = lisaJobStateWorkPayload;

export type DeliveryStartResult = {
  readonly status: "started" | "already_started" | "suppressed";
  readonly attempt: LisaDeliveryAttempt;
};

function ready(options: LisaJobStateStoreOptions): void {
  if (options.ensure === true) {
    ensureLisaJobStateSchema(options);
  } else {
    requireHealthyLisaJobStateStore(options);
  }
}
export {
  closeLisaJobStateStoreForTest,
  isHealthyLisaJobStateStore,
  openHealthyLisaJobStateStore,
  probeLisaJobStateStoreHealth,
  requireHealthyLisaJobStateStore,
  lisaJobStateStoreOptionsFromCapability,
} from "./lisa-job-state-schema.js";

export function createOrLoadLisaJobRun(
  options: LisaJobStateStoreOptions,
  input: LisaJobRunCreateInput,
): LisaJobRunRecord {
  assertCycleIdentity(input);
  assertTimestamp(input.scheduledAtMs, "scheduledAtMs");
  assertTimestamp(input.deadlineAtMs, "deadlineAtMs");
  if (input.deadlineAtMs < input.scheduledAtMs) {
    throw new Error("deadlineAtMs must not precede scheduledAtMs");
  }
  const now = input.nowMs ?? Date.now();
  assertTimestamp(now, "nowMs");
  ready(options);
  const resolved = dbOptions(options);
  return runOpenClawAgentWriteTransaction(
    ({ db }) => {
      const existing = one<RunRow>(
        db,
        kysely(db)
          .selectFrom("lisa_job_runs")
          .selectAll()
          .where("job_id", "=", input.jobId)
          .where("cycle_id", "=", input.cycleId),
      );
      if (existing) {
        return run(existing);
      }
      executeSqliteQuerySync(
        db,
        kysely(db).insertInto("lisa_job_runs").values({
          job_id: input.jobId,
          cycle_id: input.cycleId,
          local_date: input.localDate,
          state: "pending",
          attempt: 1,
          scheduled_at_ms: input.scheduledAtMs,
          deadline_at_ms: input.deadlineAtMs,
          started_at_ms: null,
          completed_at_ms: null,
          safe_result_json: null,
          error_code: null,
          created_at_ms: now,
          updated_at_ms: now,
        }),
      );
      const created = one<RunRow>(
        db,
        kysely(db)
          .selectFrom("lisa_job_runs")
          .selectAll()
          .where("job_id", "=", input.jobId)
          .where("cycle_id", "=", input.cycleId),
      );
      if (!created) {
        throw new Error("Lisa job run disappeared after create");
      }
      return run(created);
    },
    resolved,
    { operationLabel: "lisa-job-state.run.create-or-load" },
  );
}
function allowed(from: LisaJobRunState, to: LisaJobRunState): boolean {
  if (isLisaTerminalJobRunState(from)) {
    return false;
  }
  if (from === "pending") {
    return to === "running" || to === "failed" || to === "skipped_dependency";
  }
  if (from === "running") {
    return to === "completed" || to === "failed" || to === "retrying";
  }
  return from === "retrying" && (to === "running" || to === "failed");
}
export function transitionLisaJobRun(
  options: LisaJobStateStoreOptions,
  input: LisaJobRunTransitionInput,
): LisaJobRunRecord {
  assertCycleIdentity(input);
  assertLisaJobRunState(input.expectedState);
  assertLisaJobRunState(input.nextState);
  if (!allowed(input.expectedState, input.nextState)) {
    throw new Error(
      `invalid Lisa job state transition: ${input.expectedState} -> ${input.nextState}`,
    );
  }
  const resultJson = safeResult(input.safeResultJson);
  if (input.errorCode != null) {
    assertSafeIdentifier(input.errorCode, "errorCode");
  }
  if (input.nextState === "failed" && !input.errorCode) {
    throw new Error("failed Lisa job runs require a payload-free error code");
  }
  const now = input.nowMs ?? Date.now();
  assertTimestamp(now, "nowMs");
  ready(options);
  const resolved = dbOptions(options);
  return runOpenClawAgentWriteTransaction(
    ({ db }) => {
      const existing = one<RunRow>(
        db,
        kysely(db)
          .selectFrom("lisa_job_runs")
          .selectAll()
          .where("job_id", "=", input.jobId)
          .where("cycle_id", "=", input.cycleId),
      );
      if (!existing) {
        throw new Error("Lisa job run not found");
      }
      assertLisaJobRunState(existing.state);
      if (existing.state !== input.expectedState) {
        throw new Error(
          `state_transition_conflict: expected ${input.expectedState}, found ${existing.state}`,
        );
      }
      const attempt =
        input.expectedState === "retrying" && input.nextState === "running"
          ? existing.attempt + 1
          : existing.attempt;
      const started =
        input.nextState === "running" ? (existing.started_at_ms ?? now) : existing.started_at_ms;
      const completed = isLisaTerminalJobRunState(input.nextState) ? now : existing.completed_at_ms;
      const changed = executeSqliteQuerySync(
        db,
        kysely(db)
          .updateTable("lisa_job_runs")
          .set({
            state: input.nextState,
            attempt,
            started_at_ms: started,
            completed_at_ms: completed,
            safe_result_json: resultJson,
            error_code: input.nextState === "failed" ? (input.errorCode ?? null) : null,
            updated_at_ms: now,
          })
          .where("job_id", "=", input.jobId)
          .where("cycle_id", "=", input.cycleId)
          .where("state", "=", input.expectedState),
      );
      if (Number(changed.numAffectedRows ?? 0) !== 1) {
        throw new Error("state_transition_conflict: compare-and-set updated no rows");
      }
      const updated = one<RunRow>(
        db,
        kysely(db)
          .selectFrom("lisa_job_runs")
          .selectAll()
          .where("job_id", "=", input.jobId)
          .where("cycle_id", "=", input.cycleId),
      );
      if (!updated) {
        throw new Error("Lisa job run disappeared after transition");
      }
      return run(updated);
    },
    resolved,
    { operationLabel: "lisa-job-state.run.transition" },
  );
}

export function recordLisaDependencyReceipt(
  options: LisaJobStateStoreOptions,
  input: Omit<LisaDependencyReceipt, "receiptId"> & { receiptId?: string },
): LisaDependencyReceipt {
  assertCycleIdentity(input);
  assertTimestamp(input.producerCompletedAtMs, "producerCompletedAtMs");
  assertSha256Hash(input.payloadHash, "payloadHash");
  assertProviderReceiptReference(input.provider);
  const receiptId = input.receiptId ?? randomUUID();
  assertSafeIdentifier(receiptId, "receiptId");
  const now = Date.now();
  ready(options);
  const resolved = dbOptions(options);
  return runOpenClawAgentWriteTransaction(
    ({ db }) => {
      const producer = one<Pick<RunRow, "state" | "completed_at_ms">>(
        db,
        kysely(db)
          .selectFrom("lisa_job_runs")
          .select(["state", "completed_at_ms"])
          .where("job_id", "=", input.jobId)
          .where("cycle_id", "=", input.cycleId)
          .where("local_date", "=", input.localDate),
      );
      if (!producer || producer.state !== "completed") {
        throw new Error("dependency receipt requires a completed producer run");
      }
      if (producer.completed_at_ms !== input.producerCompletedAtMs) {
        throw new Error("dependency receipt producer completion timestamp mismatch");
      }
      const existing = one<ReceiptRow>(
        db,
        kysely(db)
          .selectFrom("lisa_job_receipts")
          .selectAll()
          .where("job_id", "=", input.jobId)
          .where("local_date", "=", input.localDate)
          .where("cycle_id", "=", input.cycleId),
      );
      if (existing) {
        if (
          existing.payload_hash !== input.payloadHash ||
          existing.producer_completed_at_ms !== input.producerCompletedAtMs ||
          existing.provider_id !== input.provider.providerId ||
          existing.provider_release_ref !== input.provider.releaseRef ||
          existing.provider_contract_ref !== input.provider.contractRef ||
          existing.provider_received_at_ms !== input.provider.receivedAtMs
        ) {
          throw new Error("dependency receipt is immutable and does not match the stored receipt");
        }
        return receipt(existing);
      }
      executeSqliteQuerySync(
        db,
        kysely(db).insertInto("lisa_job_receipts").values({
          receipt_id: receiptId,
          job_id: input.jobId,
          local_date: input.localDate,
          cycle_id: input.cycleId,
          producer_completed_at_ms: input.producerCompletedAtMs,
          payload_hash: input.payloadHash,
          provider_id: input.provider.providerId,
          provider_release_ref: input.provider.releaseRef,
          provider_contract_ref: input.provider.contractRef,
          provider_received_at_ms: input.provider.receivedAtMs,
          created_at_ms: now,
        }),
      );
      const created = one<ReceiptRow>(
        db,
        kysely(db).selectFrom("lisa_job_receipts").selectAll().where("receipt_id", "=", receiptId),
      );
      if (!created) {
        throw new Error("Lisa dependency receipt disappeared after create");
      }
      return receipt(created);
    },
    resolved,
    { operationLabel: "lisa-job-state.receipt.record" },
  );
}
export function validateLisaDependencyReceipt(
  options: LisaJobStateStoreOptions,
  input: {
    consumerJobId: LisaJobId;
    producerJobId: LisaJobId;
    localDate: string;
    cycleId: string;
    producerCompletedAtMs: number;
    payloadHash: string;
  },
): LisaDependencyReceipt | null {
  assertLisaJobId(input.consumerJobId);
  assertLisaJobId(input.producerJobId);
  assertLisaLocalDate(input.localDate);
  assertSafeIdentifier(input.cycleId, "cycleId");
  assertTimestamp(input.producerCompletedAtMs, "producerCompletedAtMs");
  assertSha256Hash(input.payloadHash, "payloadHash");
  if (input.consumerJobId === input.producerJobId) {
    throw new Error("a dependency receipt must have distinct producer and consumer jobs");
  }
  requireHealthyLisaJobStateStore(options);
  const { db } = openOpenClawAgentDatabase(dbOptions(options));
  const found = one<ReceiptRow>(
    db,
    kysely(db)
      .selectFrom("lisa_job_receipts")
      .selectAll()
      .where("job_id", "=", input.producerJobId)
      .where("local_date", "=", input.localDate)
      .where("cycle_id", "=", input.cycleId),
  );
  if (!found) {
    return null;
  }
  if (
    found.producer_completed_at_ms !== input.producerCompletedAtMs ||
    found.payload_hash !== input.payloadHash
  ) {
    throw new Error("dependency receipt binding mismatch");
  }
  const producer = one<Pick<RunRow, "state" | "completed_at_ms">>(
    db,
    kysely(db)
      .selectFrom("lisa_job_runs")
      .select(["state", "completed_at_ms"])
      .where("job_id", "=", input.producerJobId)
      .where("local_date", "=", input.localDate)
      .where("cycle_id", "=", input.cycleId),
  );
  if (
    !producer ||
    producer.state !== "completed" ||
    producer.completed_at_ms !== input.producerCompletedAtMs
  ) {
    throw new Error("dependency receipt producer state is no longer valid");
  }
  return receipt(found);
}

function deliveryInput(input: {
  channel: string;
  destinationBindingId: string;
  idempotencyKey: string;
  attempt: number;
  renderedHash: string;
}): void {
  assertSafeIdentifier(input.channel, "channel");
  assertSafeIdentifier(input.destinationBindingId, "destinationBindingId");
  assertSafeIdentifier(input.idempotencyKey, "idempotencyKey");
  if (!Number.isSafeInteger(input.attempt) || input.attempt < 1 || input.attempt > 2) {
    throw new Error("delivery attempts are limited to one retry");
  }
  assertSha256Hash(input.renderedHash, "renderedHash");
}
export function startLisaDeliveryAttempt(
  options: LisaJobStateStoreOptions,
  input: {
    channel: string;
    destinationBindingId: string;
    idempotencyKey: string;
    attempt: number;
    renderedHash: string;
    nowMs?: number;
  },
): DeliveryStartResult {
  deliveryInput(input);
  const now = input.nowMs ?? Date.now();
  assertTimestamp(now, "nowMs");
  ready(options);
  const resolved = dbOptions(options);
  return runOpenClawAgentWriteTransaction(
    ({ db }) => {
      const success = one<DeliveryRow>(
        db,
        kysely(db)
          .selectFrom("lisa_delivery_attempts")
          .selectAll()
          .where("idempotency_key", "=", input.idempotencyKey)
          .where("status", "=", "succeeded")
          .where("provider_receipt_id", "is not", null)
          .orderBy("attempt", "asc"),
      );
      if (success) {
        return { status: "suppressed", attempt: delivery(success) };
      }
      const existing = one<DeliveryRow>(
        db,
        kysely(db)
          .selectFrom("lisa_delivery_attempts")
          .selectAll()
          .where("idempotency_key", "=", input.idempotencyKey)
          .where("attempt", "=", input.attempt),
      );
      if (existing) {
        const record = delivery(existing);
        if (record.status === "started") {
          return { status: "already_started", attempt: record };
        }
        throw new Error("delivery attempt already finished; use the one permitted retry");
      }
      if (input.attempt === 2) {
        const first = one<DeliveryRow>(
          db,
          kysely(db)
            .selectFrom("lisa_delivery_attempts")
            .selectAll()
            .where("idempotency_key", "=", input.idempotencyKey)
            .where("attempt", "=", 1),
        );
        if (!first || first.status !== "failed") {
          throw new Error("delivery retry requires a failed first attempt");
        }
        if (first.rendered_hash !== input.renderedHash) {
          throw new Error("delivery retry must use the same rendered message hash");
        }
      }
      const attemptId = randomUUID();
      executeSqliteQuerySync(
        db,
        kysely(db).insertInto("lisa_delivery_attempts").values({
          attempt_id: attemptId,
          channel: input.channel,
          destination_binding_id: input.destinationBindingId,
          idempotency_key: input.idempotencyKey,
          attempt: input.attempt,
          rendered_hash: input.renderedHash,
          status: "started",
          provider_receipt_id: null,
          started_at_ms: now,
          finished_at_ms: null,
          created_at_ms: now,
          updated_at_ms: now,
        }),
      );
      const created = one<DeliveryRow>(
        db,
        kysely(db)
          .selectFrom("lisa_delivery_attempts")
          .selectAll()
          .where("attempt_id", "=", attemptId),
      );
      if (!created) {
        throw new Error("Lisa delivery attempt disappeared after create");
      }
      return { status: "started", attempt: delivery(created) };
    },
    resolved,
    { operationLabel: "lisa-job-state.delivery.start" },
  );
}
export function finishLisaDeliveryAttempt(
  options: LisaJobStateStoreOptions,
  input: {
    attemptId: string;
    status: Exclude<LisaDeliveryAttemptStatus, "started">;
    providerReceiptId?: string | null;
    nowMs?: number;
  },
): LisaDeliveryAttempt {
  assertSafeIdentifier(input.attemptId, "attemptId");
  if (input.status === "succeeded") {
    assertSafeIdentifier(input.providerReceiptId, "providerReceiptId");
  } else if (input.providerReceiptId != null) {
    throw new Error("failed delivery attempts cannot store provider receipts");
  }
  const now = input.nowMs ?? Date.now();
  assertTimestamp(now, "nowMs");
  ready(options);
  const resolved = dbOptions(options);
  return runOpenClawAgentWriteTransaction(
    ({ db }) => {
      const found = one<DeliveryRow>(
        db,
        kysely(db)
          .selectFrom("lisa_delivery_attempts")
          .selectAll()
          .where("attempt_id", "=", input.attemptId),
      );
      if (!found) {
        throw new Error("Lisa delivery attempt not found");
      }
      const current = delivery(found);
      if (current.status === "succeeded") {
        if (input.status !== "succeeded" || current.providerReceiptId !== input.providerReceiptId) {
          throw new Error("successful provider receipt is immutable");
        }
        return current;
      }
      if (current.status !== "started") {
        throw new Error("delivery attempt is already terminal");
      }
      const changed = executeSqliteQuerySync(
        db,
        kysely(db)
          .updateTable("lisa_delivery_attempts")
          .set({
            status: input.status,
            provider_receipt_id:
              input.status === "succeeded" ? (input.providerReceiptId ?? null) : null,
            finished_at_ms: now,
            updated_at_ms: now,
          })
          .where("attempt_id", "=", input.attemptId)
          .where("status", "=", "started"),
      );
      if (Number(changed.numAffectedRows ?? 0) !== 1) {
        throw new Error("delivery_finish_conflict");
      }
      const finished = one<DeliveryRow>(
        db,
        kysely(db)
          .selectFrom("lisa_delivery_attempts")
          .selectAll()
          .where("attempt_id", "=", input.attemptId),
      );
      if (!finished) {
        throw new Error("Lisa delivery attempt disappeared after finish");
      }
      return delivery(finished);
    },
    resolved,
    { operationLabel: "lisa-job-state.delivery.finish" },
  );
}

export function enqueueLisaWork(
  options: LisaJobStateStoreOptions,
  input: {
    payload: Record<string, unknown>;
    privacyClass?: LisaGenericPrivacyClass;
    nowMs?: number;
  },
): LisaPendingWorkRecord {
  if (input.privacyClass !== undefined) {
    assertLisaGenericPrivacyClass(input.privacyClass);
    if (input.privacyClass !== "work") {
      throw new Error("Lisa operational pending work is restricted to privacy class work");
    }
  }
  const payload = workPayload(input.payload);
  const now = input.nowMs ?? Date.now();
  assertTimestamp(now, "nowMs");
  ready(options);
  const resolved = dbOptions(options);
  return runOpenClawAgentWriteTransaction(
    ({ db }) => {
      const ids = rows<{ temporary_id: string }>(
        db,
        kysely(db).selectFrom("lisa_pending_work").select("temporary_id"),
      );
      const next =
        ids.reduce((max, row) => {
          const match = /^P-(\d{4})$/u.exec(row.temporary_id);
          return match ? Math.max(max, Number(match[1])) : max;
        }, 0) + 1;
      if (next > 9_999) {
        throw new Error("Lisa pending work temporary ID space exhausted");
      }
      const temporaryId = `P-${String(next).padStart(4, "0")}`;
      executeSqliteQuerySync(
        db,
        kysely(db).insertInto("lisa_pending_work").values({
          temporary_id: temporaryId,
          payload_json: payload,
          privacy_class: "work",
          delivery_state: "pending",
          permanent_id: null,
          created_at_ms: now,
          updated_at_ms: now,
        }),
      );
      const created = one<WorkRow>(
        db,
        kysely(db)
          .selectFrom("lisa_pending_work")
          .selectAll()
          .where("temporary_id", "=", temporaryId),
      );
      if (!created) {
        throw new Error("Lisa pending work disappeared after enqueue");
      }
      return pending(created);
    },
    resolved,
    { operationLabel: "lisa-job-state.pending.enqueue" },
  );
}
export function mapLisaTemporaryWorkId(
  options: LisaJobStateStoreOptions,
  input: { temporaryId: string; permanentId: string; nowMs?: number },
): LisaPendingWorkRecord {
  assertSafeIdentifier(input.temporaryId, "temporaryId");
  if (!/^P-\d{4}$/u.test(input.temporaryId)) {
    throw new Error("temporaryId must use the P-0007 form");
  }
  assertSafeIdentifier(input.permanentId, "permanentId");
  const now = input.nowMs ?? Date.now();
  assertTimestamp(now, "nowMs");
  ready(options);
  const resolved = dbOptions(options);
  return runOpenClawAgentWriteTransaction(
    ({ db }) => {
      const found = one<WorkRow>(
        db,
        kysely(db)
          .selectFrom("lisa_pending_work")
          .selectAll()
          .where("temporary_id", "=", input.temporaryId),
      );
      if (!found) {
        throw new Error("temporary work ID not found");
      }
      if (found.permanent_id !== null) {
        throw new Error("temporary work ID has already been mapped");
      }
      const changed = executeSqliteQuerySync(
        db,
        kysely(db)
          .updateTable("lisa_pending_work")
          .set({ permanent_id: input.permanentId, updated_at_ms: now })
          .where("temporary_id", "=", input.temporaryId)
          .where("permanent_id", "is", null),
      );
      if (Number(changed.numAffectedRows ?? 0) !== 1) {
        throw new Error("temporary work mapping conflict");
      }
      const mapped = one<WorkRow>(
        db,
        kysely(db)
          .selectFrom("lisa_pending_work")
          .selectAll()
          .where("temporary_id", "=", input.temporaryId),
      );
      if (!mapped) {
        throw new Error("temporary work row disappeared after mapping");
      }
      return pending(mapped);
    },
    resolved,
    { operationLabel: "lisa-job-state.pending.map" },
  );
}
export {
  listLisaDueJobRuns,
  listLisaNonHealthDuePendingRecords,
  listLisaPendingWork,
  listLisaUnresolvedDeliveryAttempts,
} from "./lisa-job-state-schema.js";
