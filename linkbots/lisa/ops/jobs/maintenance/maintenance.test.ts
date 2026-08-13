import { describe, expect, it } from "vitest";
import {
  completeMaintenanceStage,
  createLibrarianReceipt,
  createMaintenanceState,
  failMaintenanceStage,
  runDreaming,
  runLibrarianIntake,
  skipDreamingDependency,
  startMaintenanceStage,
  validateDreamingReceipt,
  type LibrarianReceipt,
  type LibrarianReceiptInput,
} from "./maintenance-contracts.js";
import {
  backupRetention,
  composeImmediateDreamingFailureMessage,
  composeMaintenanceDigest,
  planBackgroundUploadRetry,
  planMaintenance,
} from "./maintenance.js";

const CONTRACT = "lbrain-librarian-v1";
const PROVIDER = "lbrain-release-2026-08";

function successfulReceipt(overrides: Partial<LibrarianReceipt> = {}): LibrarianReceipt {
  return createLibrarianReceipt({
    localDate: "2026-08-13",
    cycleId: "cycle-1",
    contractIdentity: CONTRACT,
    providerRelease: PROVIDER,
    acceptedItemCount: 2,
    rejectedItemCount: 0,
    completedAtMs: 1_755_000_000_000,
    status: "completed",
    ...overrides,
  } as LibrarianReceiptInput);
}

describe("WP-04 maintenance state machine", () => {
  it("runs stages in order, forwards early, and never overlaps mutations", () => {
    let state = createMaintenanceState({ localDate: "2026-08-13", cycleId: "cycle-1" });
    expect(planMaintenance(state, 209).stage).toBeUndefined();
    expect(planMaintenance(state, 210).stage).toBe("librarian");

    state = startMaintenanceStage(state, "librarian", 210);
    expect(planMaintenance(state, 211).stage).toBeUndefined();
    state = completeMaintenanceStage(state, "librarian", 220);
    expect(planMaintenance(state, 220).stage).toBe("dreaming");

    state = startMaintenanceStage(state, "dreaming", 220);
    state = completeMaintenanceStage(state, "dreaming", 250);
    expect(planMaintenance(state, 250).stage).toBe("backup");
    state = startMaintenanceStage(state, "backup", 250);
    expect(planMaintenance(state, 251).stage).toBeUndefined();
    expect(() => startMaintenanceStage(state, "backup", 251)).toThrow("invalid_stage_transition");
  });

  it("allows one retry in a stage window and makes Lisa available at 06:30", () => {
    let state = createMaintenanceState({ localDate: "2026-08-13", cycleId: "cycle-1" });
    state = startMaintenanceStage(state, "librarian", 210);
    state = failMaintenanceStage(state, "librarian", "provider_timeout");
    expect(planMaintenance(state, 240).stage).toBe("librarian");
    state = startMaintenanceStage(state, "librarian", 240);
    state = failMaintenanceStage(state, "librarian", "provider_timeout");
    expect(planMaintenance(state, 270).stage).toBeUndefined();
    expect(planMaintenance(state, 390, true)).toMatchObject({
      lisaAvailable: true,
      backgroundRetry: true,
    });
  });

  it("permits backup after a dependency skip without claiming Dreaming completed", () => {
    let state = createMaintenanceState({ localDate: "2026-08-13", cycleId: "cycle-1" });
    state = startMaintenanceStage(state, "librarian", 210);
    state = failMaintenanceStage(state, "librarian", "missing_receipt");
    state = skipDreamingDependency(state);
    expect(state.stageRecords.dreaming.status).toBe("skipped_dependency");
    expect(planMaintenance(state, 270).stage).toBe("backup");
  });

  it.each([
    [undefined, "missing"],
    [successfulReceipt({ localDate: "2026-08-12" }), "stale date"],
    [successfulReceipt({ cycleId: "cycle-2" }), "wrong cycle"],
    [successfulReceipt({ providerRelease: "other-release" }), "wrong provider"],
    [
      createLibrarianReceipt({
        localDate: "2026-08-13",
        cycleId: "cycle-1",
        contractIdentity: CONTRACT,
        providerRelease: PROVIDER,
        acceptedItemCount: 0,
        rejectedItemCount: 0,
        completedAtMs: 1_755_000_000_000,
        status: "failed",
        failureCode: "provider_timeout",
      }),
      "failed",
    ],
  ] as const)("blocks Dreaming on %s receipt (%s)", (receipt, _label) => {
    expect(() => validateDreamingReceipt(receipt, "2026-08-13", "cycle-1", PROVIDER)).toThrow(
      "blocked_invalid_librarian_receipt",
    );
  });

  it("blocks a tampered receipt hash and a boolean capability", async () => {
    const receipt = successfulReceipt();
    const tampered = { ...receipt, acceptedItemCount: 99 };
    expect(() => validateDreamingReceipt(tampered, "2026-08-13", "cycle-1", PROVIDER)).toThrow(
      "blocked_invalid_librarian_receipt",
    );
    const capability = validateDreamingReceipt(receipt, "2026-08-13", "cycle-1", PROVIDER);
    await expect(
      runDreaming({
        adapter: async () => ({ promotedCount: 1 }),
        receipt: true as unknown as typeof capability,
      }),
    ).rejects.toThrow("blocked_unvalidated_librarian_receipt");
  });

  it("rejects private health and secret-shaped intake before the provider call", async () => {
    let providerCalls = 0;
    let observedIdempotencyKey: string | undefined;
    const secretFieldName = ["access", "to", "ken"].join("");
    const adapter = async () => {
      providerCalls += 1;
      return successfulReceipt();
    };
    await expect(
      runLibrarianIntake({
        adapter: async (input) => {
          observedIdempotencyKey = input.idempotencyKey;
          return adapter();
        },
        localDate: "2026-08-13",
        cycleId: "cycle-1",
        idempotencyKey: "cycle-1",
        items: [{ id: "h", kind: "work", classification: "private_health", summary: "hidden" }],
      }),
    ).rejects.toThrow("rejected_private_health_item");
    await expect(
      runLibrarianIntake({
        adapter,
        localDate: "2026-08-13",
        cycleId: "cycle-1",
        idempotencyKey: "cycle-1",
        items: [
          {
            id: "s",
            kind: "work",
            summary: "safe",
            fields: { [secretFieldName]: "fixture-value" },
          },
        ],
      }),
    ).rejects.toThrow("rejected_secret_shaped_field");
    expect(providerCalls).toBe(0);
    expect(observedIdempotencyKey).toBeUndefined();

    await runLibrarianIntake({
      adapter: async (input) => {
        observedIdempotencyKey = input.idempotencyKey;
        return adapter();
      },
      localDate: "2026-08-13",
      cycleId: "cycle-1",
      idempotencyKey: "cycle-1",
      items: [{ id: "w", kind: "work", summary: "safe" }],
    });
    expect(observedIdempotencyKey).toBe("cycle-1");
  });

  it("plans six hourly background retries without making Lisa unavailable", () => {
    expect(
      planBackgroundUploadRetry({ nowMinute: 390, uploadFailed: true, attemptsCompleted: 0 }),
    ).toEqual({
      attemptNumber: 1,
      dueAtMinute: 390,
      lisaAvailable: true,
    });
    expect(
      planBackgroundUploadRetry({ nowMinute: 749, uploadFailed: true, attemptsCompleted: 5 }),
    ).toMatchObject({
      attemptNumber: 6,
      lisaAvailable: true,
    });
    expect(
      planBackgroundUploadRetry({ nowMinute: 750, uploadFailed: true, attemptsCompleted: 6 }),
    ).toBeUndefined();
  });

  it("retains the previous backup until upload and restore verification both pass", () => {
    expect(
      backupRetention({
        currentUploadVerified: false,
        currentRestoreVerified: true,
        previousExists: true,
      }),
    ).toBe("retain_previous");
    expect(
      backupRetention({
        currentUploadVerified: true,
        currentRestoreVerified: false,
        previousExists: true,
      }),
    ).toBe("retain_previous");
    expect(
      backupRetention({
        currentUploadVerified: true,
        currentRestoreVerified: true,
        previousExists: true,
      }),
    ).toBe("replace_previous");
  });

  it("keeps Dreaming failure digest-only and emits only approved backup lines", () => {
    expect(composeImmediateDreamingFailureMessage()).toBeUndefined();
    expect(
      composeMaintenanceDigest({
        dreaming: { status: "failed_after_retry" },
        backup: { status: "completed_verified" },
      }),
    ).toEqual([
      "Memory Dreaming: failed after retry",
      "Lisa backup: completed and verified in Google Drive",
    ]);
  });
});
