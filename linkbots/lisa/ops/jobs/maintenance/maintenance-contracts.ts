import { createHash } from "node:crypto";

export const MAINTENANCE_TIMEZONE = "Asia/Taipei";
export const MAINTENANCE_WINDOWS = {
  librarian: { startMinute: 210, endMinute: 270 },
  dreaming: { startMinute: 270, endMinute: 330 },
  backup: { startMinute: 330, endMinute: 390 },
} as const;

export type MaintenanceStage = "librarian" | "dreaming" | "backup";
export type MaintenanceStatus =
  | "pending"
  | "running"
  | "completed"
  | "failed"
  | "skipped_dependency";

export type LibrarianItemKind = "task" | "handoff" | "work";
export type LibrarianItemClassification = LibrarianItemKind | "private_health";

export type LibrarianIntakeItem = {
  id: string;
  kind: LibrarianItemKind;
  classification?: LibrarianItemClassification;
  summary: string;
  fields?: Readonly<Record<string, unknown>>;
};

export type SafeLibrarianIntakeItem = Readonly<{
  id: string;
  kind: LibrarianItemKind;
  summary: string;
  fields?: Readonly<Record<string, unknown>>;
}>;

export type LibrarianReceiptBase = Readonly<{
  localDate: string;
  cycleId: string;
  contractIdentity: string;
  providerRelease: string;
  acceptedItemCount: number;
  rejectedItemCount: number;
  completedAtMs: number;
  receiptHash: string;
}>;

export type LibrarianSuccessReceipt = LibrarianReceiptBase & Readonly<{ status: "completed" }>;

export type LibrarianFailureReceipt = LibrarianReceiptBase &
  Readonly<{ status: "failed"; failureCode: string }>;

export type LibrarianReceipt = LibrarianSuccessReceipt | LibrarianFailureReceipt;

export type LibrarianReceiptInput =
  | Omit<LibrarianSuccessReceipt, "receiptHash">
  | Omit<LibrarianFailureReceipt, "receiptHash">;

const VALIDATED_RECEIPT: unique symbol = Symbol("validated-librarian-receipt");

export type ValidatedLibrarianReceipt = LibrarianSuccessReceipt & {
  readonly [VALIDATED_RECEIPT]: true;
};

export type LibrarianIntakeAdapter = (input: {
  localDate: string;
  cycleId: string;
  idempotencyKey: string;
  items: readonly SafeLibrarianIntakeItem[];
}) => Promise<LibrarianReceipt>;

const SECRET_KEY_PATTERN =
  /(?:password|secret|token|credential|api[-_]?key|private[-_]?key|access[-_]?token|refresh[-_]?token)/iu;
const PRIVATE_CONTENT_KEY_PATTERN =
  /(?:payload|raw|private[-_]?content|message[-_]?body|health|symptom|medication|mounjaro)/iu;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

/** Reject secret-shaped fields before any provider adapter is invoked. */
export function assertNoSecretShapedFields(value: unknown, path = "value"): void {
  if (Array.isArray(value)) {
    for (const [index, child] of value.entries()) {
      assertNoSecretShapedFields(child, `${path}[${index}]`);
    }
    return;
  }
  if (!isRecord(value)) {
    if (
      typeof value === "string" &&
      (/-----BEGIN [A-Z ]*PRIVATE KEY-----/u.test(value) ||
        /(?:password|secret|token|api[-_]?key)\s*[:=]/iu.test(value))
    ) {
      throw new Error(`rejected_secret_material:${path}`);
    }
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    if (SECRET_KEY_PATTERN.test(key)) {
      throw new Error(`rejected_secret_shaped_field:${path}.${key}`);
    }
    if (PRIVATE_CONTENT_KEY_PATTERN.test(key)) {
      throw new Error(`rejected_private_content_field:${path}.${key}`);
    }
    assertNoSecretShapedFields(child, `${path}.${key}`);
  }
}

function assertHash(value: string, field: string): void {
  if (!/^[a-f0-9]{64}$/u.test(value)) {
    throw new Error(`invalid_${field}`);
  }
}

function receiptHashInput(
  receipt: Omit<LibrarianReceiptBase, "receiptHash"> &
    Readonly<{ status: LibrarianReceipt["status"]; failureCode?: string }>,
): string {
  return [
    receipt.localDate,
    receipt.cycleId,
    receipt.contractIdentity,
    receipt.providerRelease,
    receipt.acceptedItemCount,
    receipt.rejectedItemCount,
    receipt.completedAtMs,
    receipt.status,
    receipt.failureCode ?? "",
  ].join("\n");
}

export function computeLibrarianReceiptHash(receipt: LibrarianReceiptInput): string {
  return createHash("sha256").update(receiptHashInput(receipt)).digest("hex");
}

export function createLibrarianReceipt(input: LibrarianReceiptInput): LibrarianReceipt {
  assertNoSecretShapedFields(input);
  if (input.acceptedItemCount < 0 || input.rejectedItemCount < 0) {
    throw new Error("invalid_librarian_item_counts");
  }
  const receipt = {
    ...input,
    receiptHash: computeLibrarianReceiptHash(input),
  } as LibrarianReceipt;
  return Object.freeze(receipt);
}

export function validateLibrarianReceipt(input: {
  receipt: LibrarianReceipt | undefined;
  localDate: string;
  cycleId: string;
  contractIdentity: string;
  providerRelease: string;
}): ValidatedLibrarianReceipt {
  const { receipt } = input;
  if (!receipt || receipt.status !== "completed") {
    throw new Error("blocked_invalid_librarian_receipt");
  }
  assertNoSecretShapedFields(receipt);
  if (
    receipt.localDate !== input.localDate ||
    receipt.cycleId !== input.cycleId ||
    receipt.contractIdentity !== input.contractIdentity ||
    receipt.providerRelease !== input.providerRelease ||
    !Number.isSafeInteger(receipt.acceptedItemCount) ||
    !Number.isSafeInteger(receipt.rejectedItemCount) ||
    receipt.acceptedItemCount < 0 ||
    receipt.rejectedItemCount < 0 ||
    !Number.isFinite(receipt.completedAtMs)
  ) {
    throw new Error("blocked_invalid_librarian_receipt");
  }
  assertHash(receipt.receiptHash, "librarian_receipt_hash");
  if (computeLibrarianReceiptHash(receipt) !== receipt.receiptHash) {
    throw new Error("blocked_invalid_librarian_receipt");
  }
  if (Object.prototype.hasOwnProperty.call(receipt, "payload")) {
    throw new Error("blocked_payload_bearing_librarian_receipt");
  }
  return Object.freeze({
    ...receipt,
    [VALIDATED_RECEIPT]: true,
  }) as ValidatedLibrarianReceipt;
}

export function validateIntakeBatch(
  items: readonly LibrarianIntakeItem[],
): readonly SafeLibrarianIntakeItem[] {
  const safeItems = items.map((item, index) => {
    if (item.classification === "private_health") {
      throw new Error(`rejected_private_health_item:${index}`);
    }
    if (item.classification && item.classification !== item.kind) {
      throw new Error(`rejected_item_classification:${index}`);
    }
    assertNoSecretShapedFields(item);
    const safeItem: SafeLibrarianIntakeItem = {
      id: item.id,
      kind: item.kind,
      summary: item.summary,
      ...(item.fields ? { fields: Object.freeze({ ...item.fields }) } : {}),
    };
    return Object.freeze(safeItem);
  });
  return Object.freeze(safeItems);
}

export async function runLibrarianIntake(input: {
  adapter: LibrarianIntakeAdapter;
  localDate: string;
  cycleId: string;
  idempotencyKey: string;
  items: readonly LibrarianIntakeItem[];
}): Promise<LibrarianReceipt> {
  const items = validateIntakeBatch(input.items);
  return input.adapter({
    localDate: input.localDate,
    cycleId: input.cycleId,
    idempotencyKey: input.idempotencyKey,
    items,
  });
}

export function validateDreamingReceipt(
  receipt: LibrarianReceipt | undefined,
  localDate: string,
  cycleId: string,
  providerRelease: string,
  contractIdentity = "lbrain-librarian-v1",
): ValidatedLibrarianReceipt {
  return validateLibrarianReceipt({
    receipt,
    localDate,
    cycleId,
    contractIdentity,
    providerRelease,
  });
}

export type DreamingAdapter = (input: {
  receipt: ValidatedLibrarianReceipt;
}) => Promise<Readonly<{ promotedCount: number }>>;

export async function runDreaming(input: {
  adapter: DreamingAdapter;
  receipt: ValidatedLibrarianReceipt;
}): Promise<Readonly<{ promotedCount: number }>> {
  if (!isRecord(input.receipt) || input.receipt[VALIDATED_RECEIPT] !== true) {
    throw new Error("blocked_unvalidated_librarian_receipt");
  }
  return input.adapter({ receipt: input.receipt });
}

export type StageRecord = Readonly<{
  status: MaintenanceStatus;
  attempts: number;
  startedAtMinute?: number;
  completedAtMinute?: number;
  failureCode?: string;
}>;

export type MaintenanceState = Readonly<{
  localDate: string;
  cycleId: string;
  stageRecords: Readonly<Record<MaintenanceStage, StageRecord>>;
}>;

export function createMaintenanceState(input: {
  localDate: string;
  cycleId: string;
}): MaintenanceState {
  const record: StageRecord = Object.freeze({ status: "pending", attempts: 0 });
  return Object.freeze({
    localDate: input.localDate,
    cycleId: input.cycleId,
    stageRecords: Object.freeze({
      librarian: record,
      dreaming: record,
      backup: record,
    }),
  });
}

function hasRunningStage(state: MaintenanceState): boolean {
  return Object.values(state.stageRecords).some((record) => record.status === "running");
}

function isTerminal(record: StageRecord): boolean {
  return record.status === "completed" || record.status === "skipped_dependency";
}

function stageCanStart(
  state: MaintenanceState,
  stage: MaintenanceStage,
  nowMinute: number,
): boolean {
  const record = state.stageRecords[stage];
  const window = MAINTENANCE_WINDOWS[stage];
  if (
    record.status === "completed" ||
    record.status === "running" ||
    record.attempts >= 2 ||
    nowMinute >= window.endMinute
  ) {
    return false;
  }
  if (stage === "librarian") {
    return nowMinute >= window.startMinute;
  }
  const previous = stage === "dreaming" ? "librarian" : "dreaming";
  const previousRecord = state.stageRecords[previous];
  if (!isTerminal(previousRecord) || previousRecord.completedAtMinute === undefined) {
    return false;
  }
  return nowMinute >= previousRecord.completedAtMinute;
}

export function nextMaintenanceStage(
  state: MaintenanceState,
  nowMinute: number,
): MaintenanceStage | undefined {
  if (hasRunningStage(state)) {
    return undefined;
  }
  for (const stage of ["librarian", "dreaming", "backup"] as const) {
    if (stageCanStart(state, stage, nowMinute)) {
      return stage;
    }
  }
  return undefined;
}

export function startMaintenanceStage(
  state: MaintenanceState,
  stage: MaintenanceStage,
  nowMinute: number,
): MaintenanceState {
  if (nextMaintenanceStage(state, nowMinute) !== stage) {
    throw new Error("invalid_stage_transition");
  }
  const record = state.stageRecords[stage];
  const nextRecord: StageRecord = Object.freeze({
    ...record,
    status: "running",
    attempts: record.attempts + 1,
    startedAtMinute: nowMinute,
    failureCode: undefined,
  });
  return Object.freeze({
    ...state,
    stageRecords: Object.freeze({ ...state.stageRecords, [stage]: nextRecord }),
  });
}

export function completeMaintenanceStage(
  state: MaintenanceState,
  stage: MaintenanceStage,
  completedAtMinute: number,
): MaintenanceState {
  const record = state.stageRecords[stage];
  if (
    record.status !== "running" ||
    record.startedAtMinute === undefined ||
    completedAtMinute < record.startedAtMinute
  ) {
    throw new Error("invalid_stage_completion");
  }
  if (completedAtMinute > MAINTENANCE_WINDOWS[stage].endMinute) {
    throw new Error("stage_deadline_exceeded");
  }
  const nextRecord: StageRecord = Object.freeze({
    ...record,
    status: "completed",
    completedAtMinute,
  });
  return Object.freeze({
    ...state,
    stageRecords: Object.freeze({ ...state.stageRecords, [stage]: nextRecord }),
  });
}

export function failMaintenanceStage(
  state: MaintenanceState,
  stage: MaintenanceStage,
  failureCode: string,
): MaintenanceState {
  const record = state.stageRecords[stage];
  if (record.status !== "running") {
    throw new Error("invalid_stage_failure");
  }
  const nextRecord: StageRecord = Object.freeze({
    ...record,
    status: "failed",
    failureCode,
  });
  return Object.freeze({
    ...state,
    stageRecords: Object.freeze({ ...state.stageRecords, [stage]: nextRecord }),
  });
}

export function skipDreamingDependency(
  state: MaintenanceState,
  failureCode = "skipped_dependency",
): MaintenanceState {
  const record = state.stageRecords.dreaming;
  const librarian = state.stageRecords.librarian;
  if (
    (record.status !== "pending" && record.status !== "failed") ||
    librarian.status === "pending" ||
    librarian.status === "running"
  ) {
    throw new Error("invalid_dreaming_skip");
  }
  const nextRecord: StageRecord = Object.freeze({
    ...record,
    status: "skipped_dependency",
    completedAtMinute: MAINTENANCE_WINDOWS.dreaming.startMinute,
    failureCode,
  });
  return Object.freeze({
    ...state,
    stageRecords: Object.freeze({ ...state.stageRecords, dreaming: nextRecord }),
  });
}
