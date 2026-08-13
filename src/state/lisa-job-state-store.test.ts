import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { readSqliteNumberPragma } from "../infra/sqlite-pragma.test-support.js";
import { LISA_JOB_STATE_TABLES, LISA_JOB_STATE_SCHEMA_VERSION } from "./lisa-job-state-schema.js";
import {
  closeLisaJobStateStoreForTest,
  createOrLoadLisaJobRun,
  enqueueLisaWork,
  finishLisaDeliveryAttempt,
  isHealthyLisaJobStateStore,
  listLisaNonHealthDuePendingRecords,
  mapLisaTemporaryWorkId,
  openHealthyLisaJobStateStore,
  probeLisaJobStateStoreHealth,
  recordLisaDependencyReceipt,
  redactLisaJobResultForDiagnostics,
  startLisaDeliveryAttempt,
  transitionLisaJobRun,
  validateLisaDependencyReceipt,
  type LisaJobStateStoreOptions,
} from "./lisa-job-state-store.js";
import { OPENCLAW_AGENT_SCHEMA_VERSION } from "./openclaw-agent-db-contract.js";
import {
  closeOpenClawAgentDatabasesForTest,
  openOpenClawAgentDatabase,
} from "./openclaw-agent-db.js";
import { tableExists } from "./openclaw-state-db-schema-helpers.js";

const tempDirs: string[] = [];

function tempDbPath(prefix = "lisa-job-state-"): string {
  const directory = mkdtempSync(join(tmpdir(), prefix));
  tempDirs.push(directory);
  return join(directory, "openclaw-agent.sqlite");
}

function optionsFor(databasePath: string, ensure = true): LisaJobStateStoreOptions {
  return { agentId: "lisa", path: databasePath, ensure };
}

const NOW = 1_700_000_000_000;
const HASH_A = "a".repeat(64);
const HASH_B = "b".repeat(64);

afterEach(() => {
  closeOpenClawAgentDatabasesForTest();
  for (const directory of tempDirs.splice(0)) {
    rmSync(directory, { recursive: true, force: true });
  }
});

describe("Lisa job state store", () => {
  it("probes read-only, lazily ensures additive STRICT tables, and preserves user_version", () => {
    const databasePath = tempDbPath();
    const options = optionsFor(databasePath, false);
    const missing = probeLisaJobStateStoreHealth(options);
    expect(missing.ok).toBe(false);
    expect(missing.error).toBe("database-missing");

    const database = openOpenClawAgentDatabase({ agentId: "lisa", path: databasePath });
    const beforeVersion = readSqliteNumberPragma(database.db, "user_version");
    expect(beforeVersion).toBe(OPENCLAW_AGENT_SCHEMA_VERSION);
    expect(tableExists(database.db, "lisa_job_runs")).toBe(false);

    const ensured = probeLisaJobStateStoreHealth({ ...options, ensure: true });
    expect(ensured.ok).toBe(true);
    expect(ensured.tablesPresent).toEqual([...LISA_JOB_STATE_TABLES]);
    expect(readSqliteNumberPragma(database.db, "user_version")).toBe(beforeVersion);
    expect(readSqliteNumberPragma(database.db, "user_version")).not.toBe(
      LISA_JOB_STATE_SCHEMA_VERSION,
    );
    for (const table of LISA_JOB_STATE_TABLES) {
      expect(tableExists(database.db, table)).toBe(true);
    }
    expect(
      (
        database.db
          .prepare("SELECT strict FROM pragma_table_list WHERE name = ?")
          .get("lisa_job_runs") as { strict: number }
      ).strict,
    ).toBe(1);
  });

  it("seals the healthy capability and rejects a forgeable plain object", () => {
    const databasePath = tempDbPath();
    const options = optionsFor(databasePath);
    expect(() => openHealthyLisaJobStateStore({ ...options, ensure: false })).toThrow(
      /blocked_no_store/iu,
    );
    expect(isHealthyLisaJobStateStore({ available: true, agentId: "lisa" })).toBe(false);
    probeLisaJobStateStoreHealth(options);
    const capability = openHealthyLisaJobStateStore({ ...options, ensure: false });
    expect(isHealthyLisaJobStateStore(capability)).toBe(true);
    expect(capability.agentId).toBe("lisa");
    expect(capability.databasePath).toBe(databasePath);
  });

  it("creates and reloads one logical run, then authorizes a same-cycle dependency receipt", () => {
    const options = optionsFor(tempDbPath());
    const created = createOrLoadLisaJobRun(options, {
      jobId: "librarian",
      cycleId: "cycle-1",
      localDate: "2026-08-13",
      scheduledAtMs: NOW,
      deadlineAtMs: NOW + 30 * 60_000,
      nowMs: NOW,
    });
    expect(created.state).toBe("pending");
    expect(
      createOrLoadLisaJobRun(options, {
        jobId: "librarian",
        cycleId: "cycle-1",
        localDate: "2026-08-13",
        scheduledAtMs: NOW + 1_000,
        deadlineAtMs: NOW + 1_000,
        nowMs: NOW + 1_000,
      }),
    ).toEqual(created);
    transitionLisaJobRun(options, {
      jobId: "librarian",
      cycleId: "cycle-1",
      localDate: "2026-08-13",
      expectedState: "pending",
      nextState: "running",
      nowMs: NOW + 1_000,
    });
    const completed = transitionLisaJobRun(options, {
      jobId: "librarian",
      cycleId: "cycle-1",
      localDate: "2026-08-13",
      expectedState: "running",
      nextState: "completed",
      safeResultJson: '{"accepted":2}',
      nowMs: NOW + 2_000,
    });
    const receipt = recordLisaDependencyReceipt(options, {
      jobId: "librarian",
      cycleId: "cycle-1",
      localDate: "2026-08-13",
      producerCompletedAtMs: completed.completedAtMs ?? 0,
      payloadHash: HASH_A,
      provider: {
        providerId: "linkbrain",
        releaseRef: "2026.08.13",
        contractRef: "librarian@1.0.0",
        receivedAtMs: NOW + 2_100,
      },
    });
    expect(receipt.provider.receivedAtMs).toBe(NOW + 2_100);
    expect(
      validateLisaDependencyReceipt(options, {
        consumerJobId: "memory_dreaming",
        producerJobId: "librarian",
        localDate: "2026-08-13",
        cycleId: "cycle-1",
        producerCompletedAtMs: NOW + 2_000,
        payloadHash: HASH_A,
      }),
    ).toEqual(receipt);
    expect(
      validateLisaDependencyReceipt(options, {
        consumerJobId: "memory_dreaming",
        producerJobId: "librarian",
        localDate: "2026-08-14",
        cycleId: "cycle-1",
        producerCompletedAtMs: NOW + 2_000,
        payloadHash: HASH_A,
      }),
    ).toBeNull();
    expect(() =>
      validateLisaDependencyReceipt(options, {
        consumerJobId: "memory_dreaming",
        producerJobId: "librarian",
        localDate: "2026-08-13",
        cycleId: "cycle-1",
        producerCompletedAtMs: NOW + 2_000,
        payloadHash: HASH_B,
      }),
    ).toThrow(/binding mismatch/iu);
  });

  it("enforces compare-and-set transitions and terminal immutability", () => {
    const options = optionsFor(tempDbPath());
    createOrLoadLisaJobRun(options, {
      jobId: "memory_dreaming",
      cycleId: "cycle-2",
      localDate: "2026-08-13",
      scheduledAtMs: NOW,
      deadlineAtMs: NOW + 1_000,
      nowMs: NOW,
    });
    expect(() =>
      transitionLisaJobRun(options, {
        jobId: "memory_dreaming",
        cycleId: "cycle-2",
        localDate: "2026-08-13",
        expectedState: "running",
        nextState: "completed",
        nowMs: NOW + 1,
      }),
    ).toThrow(/state_transition_conflict/iu);
    transitionLisaJobRun(options, {
      jobId: "memory_dreaming",
      cycleId: "cycle-2",
      localDate: "2026-08-13",
      expectedState: "pending",
      nextState: "skipped_dependency",
      nowMs: NOW + 1,
    });
    expect(() =>
      transitionLisaJobRun(options, {
        jobId: "memory_dreaming",
        cycleId: "cycle-2",
        localDate: "2026-08-13",
        expectedState: "skipped_dependency",
        nextState: "running",
        nowMs: NOW + 2,
      }),
    ).toThrow(/invalid Lisa job state transition/iu);
  });

  it("records delivery attempts, retries one failed render, and suppresses duplicate success", () => {
    const options = optionsFor(tempDbPath());
    const first = startLisaDeliveryAttempt(options, {
      channel: "telegram",
      destinationBindingId: "carlos-work",
      idempotencyKey: "digest-2026-08-13-am",
      attempt: 1,
      renderedHash: HASH_A,
      nowMs: NOW,
    });
    expect(first.status).toBe("started");
    const firstAttempt = first.attempt;
    expect(
      finishLisaDeliveryAttempt(options, {
        attemptId: firstAttempt.attemptId,
        status: "failed",
        nowMs: NOW + 1,
      }).status,
    ).toBe("failed");
    const retry = startLisaDeliveryAttempt(options, {
      channel: "telegram",
      destinationBindingId: "carlos-work",
      idempotencyKey: "digest-2026-08-13-am",
      attempt: 2,
      renderedHash: HASH_A,
      nowMs: NOW + 2,
    });
    expect(retry.status).toBe("started");
    const succeeded = finishLisaDeliveryAttempt(options, {
      attemptId: retry.attempt.attemptId,
      status: "succeeded",
      providerReceiptId: "telegram-receipt-1",
      nowMs: NOW + 3,
    });
    expect(succeeded.providerReceiptId).toBe("telegram-receipt-1");
    const suppressed = startLisaDeliveryAttempt(options, {
      channel: "telegram",
      destinationBindingId: "carlos-work",
      idempotencyKey: "digest-2026-08-13-am",
      attempt: 2,
      renderedHash: HASH_A,
      nowMs: NOW + 4,
    });
    expect(suppressed.status).toBe("suppressed");
    expect(() =>
      startLisaDeliveryAttempt(options, {
        channel: "telegram",
        destinationBindingId: "carlos-work",
        idempotencyKey: "new-message",
        attempt: 1,
        renderedHash: HASH_B,
        nowMs: NOW + 5,
      }),
    ).not.toThrow();
  });

  it("generates and maps temporary work IDs once, while generic readers exclude private health", () => {
    const options = optionsFor(tempDbPath());
    const pending = enqueueLisaWork(options, {
      payload: { task: "review", priority: 1 },
      privacyClass: "work",
      nowMs: NOW,
    });
    expect(pending.temporaryId).toBe("P-0001");
    const mapped = mapLisaTemporaryWorkId(options, {
      temporaryId: pending.temporaryId,
      permanentId: "T-000042",
      nowMs: NOW + 1,
    });
    expect(mapped.permanentId).toBe("T-000042");
    expect(() =>
      mapLisaTemporaryWorkId(options, {
        temporaryId: pending.temporaryId,
        permanentId: "T-000043",
        nowMs: NOW + 2,
      }),
    ).toThrow(/already been mapped/iu);
    expect(() =>
      enqueueLisaWork(options, {
        payload: { medication: "synthetic" },
        privacyClass: "work",
        nowMs: NOW + 3,
      }),
    ).toThrow(/privacy boundary/iu);
    expect(() =>
      enqueueLisaWork(options, {
        payload: { task: "not allowed" },
        privacyClass: "private_health" as never,
        nowMs: NOW + 3,
      }),
    ).toThrow(/private_health|privacy class/iu);
    expect(listLisaNonHealthDuePendingRecords(options, NOW + 10).pendingWork).toHaveLength(0);
  });

  it("fails writes closed before explicit ensure and redacts diagnostic output", () => {
    const databasePath = tempDbPath();
    openOpenClawAgentDatabase({ agentId: "lisa", path: databasePath });
    const options = optionsFor(databasePath, false);
    expect(() =>
      createOrLoadLisaJobRun(options, {
        jobId: "librarian",
        cycleId: "cycle-3",
        localDate: "2026-08-13",
        scheduledAtMs: NOW,
        deadlineAtMs: NOW + 1_000,
        nowMs: NOW,
      }),
    ).toThrow(/blocked_no_store/iu);
    expect(redactLisaJobResultForDiagnostics({ ok: true, token: "hidden", detail: "x" })).toBe(
      '{"detail":"x","ok":true,"token":"[redacted]"}',
    );
    closeLisaJobStateStoreForTest(options);
  });
});
