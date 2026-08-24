import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  addLisaPrincipalTaskBrainAdvisoryReference,
  addLisaPrincipalTaskProgramReference,
  classifyLisaPrincipalTaskLedger,
  ensureLisaPrincipalTaskSchema,
  findLisaPrincipalTaskDuplicates,
  intakeLisaPrincipalTask,
  listLisaPrincipalTaskAliases,
  listLisaPrincipalTaskEvidence,
  listLisaPrincipalTaskReferences,
  readLisaPrincipalTask,
  readLisaPrincipalTaskByDisplayRef,
  recordLisaPrincipalTaskEvidence,
  resolveLisaPrincipalTaskDuplicate,
  transitionLisaPrincipalTask,
} from "./lisa-principal-task-store.js";
import {
  closeOpenClawAgentDatabasesForTest,
  openOpenClawAgentDatabase,
} from "./openclaw-agent-db.js";

const dirs: string[] = [];

afterEach(() => {
  closeOpenClawAgentDatabasesForTest();
  for (const dir of dirs.splice(0)) {
    rmSync(dir, { recursive: true, force: true });
  }
});

function options() {
  const dir = mkdtempSync(join(tmpdir(), "lisa-principal-task-"));
  dirs.push(dir);
  return { agentId: "lisa", path: join(dir, "agent.sqlite") };
}

describe("Lisa Principal task state", () => {
  it("uses additive SQLite-only state without changing the agent schema version", () => {
    const o = options();
    ensureLisaPrincipalTaskSchema(o);
    const { db } = openOpenClawAgentDatabase(o);
    const names = db
      .prepare(
        "SELECT name FROM sqlite_master WHERE type = 'table' AND name LIKE 'lisa_principal_%' ORDER BY name",
      )
      .all() as Array<{ name: string }>;
    expect(names.map((row) => row.name)).toEqual([
      "lisa_principal_task_aliases",
      "lisa_principal_task_evidence",
      "lisa_principal_task_intake_events",
      "lisa_principal_task_references",
      "lisa_principal_task_sequences",
      "lisa_principal_tasks",
    ]);
    expect(db.prepare("PRAGMA user_version").get()).toEqual({ user_version: 13 });
  });

  it("assigns immutable UUID identity and stable T display refs at intake", () => {
    const o = options();
    const first = intakeLisaPrincipalTask(o, {
      title: "Review launch plan",
      explicit: true,
      sourceChannel: "telegram",
      sourceEventId: "telegram-1",
      nowMs: 100,
    });
    const second = intakeLisaPrincipalTask(o, {
      title: "Prepare budget",
      explicit: false,
      sourceChannel: "email",
      sourceEventId: "email-1",
      nowMs: 101,
    });
    expect(first.task.internalId).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/,
    );
    expect(second.task.internalId).not.toBe(first.task.internalId);
    expect(first.task.displayRef).toBe("T-000001");
    expect(second.task.displayRef).toBe("T-000002");
    expect(readLisaPrincipalTaskByDisplayRef(o, first.task.displayRef)?.internalId).toBe(
      first.task.internalId,
    );
    expect(first.task.status).toBe("confirmed_ready");
    expect(second.task.status).toBe("provisional");
    expect(second.task.confirmationDue).toBe("next-review");
  });

  it("is idempotent per channel event and converges cross-channel references to one task", () => {
    const o = options();
    const first = intakeLisaPrincipalTask(o, {
      title: "Review launch plan",
      explicit: true,
      sourceChannel: "telegram",
      sourceEventId: "event-1",
      references: [{ type: "google_task", externalReference: "g-1" }],
      nowMs: 100,
    });
    const replay = intakeLisaPrincipalTask(o, {
      title: "Different replay text is ignored",
      explicit: true,
      sourceChannel: "telegram",
      sourceEventId: "event-1",
      nowMs: 101,
    });
    expect(replay.idempotent).toBe(true);
    expect(replay.task.internalId).toBe(first.task.internalId);
    const crossChannel = intakeLisaPrincipalTask(o, {
      title: "Review launch plan from email",
      explicit: true,
      sourceChannel: "email",
      sourceEventId: "email-1",
      references: [
        { type: "google_task", externalReference: "g-1" },
        { type: "email", externalReference: "message-1" },
      ],
      nowMs: 102,
    });
    expect(crossChannel.created).toBe(false);
    expect(crossChannel.task.internalId).toBe(first.task.internalId);
    expect(
      listLisaPrincipalTaskReferences(o, first.task.internalId).map((r) => r.referenceType),
    ).toEqual(["google_task", "email"]);
    expect(classifyLisaPrincipalTaskLedger("Carlos")).toBe("google_tasks");
    expect(classifyLisaPrincipalTaskLedger("Lisa")).toBe("other_tasks");
  });

  it("keeps evidence-gated status transitions and separates Carlos completion", () => {
    const o = options();
    const lisa = intakeLisaPrincipalTask(o, {
      title: "Verify report",
      explicit: true,
      owner: "Lisa",
      nowMs: 100,
    });
    expect(() =>
      transitionLisaPrincipalTask(o, {
        internalId: lisa.task.internalId,
        expectedStatus: "confirmed_ready",
        nextStatus: "completed_verified",
      }),
    ).toThrow();
    transitionLisaPrincipalTask(o, {
      internalId: lisa.task.internalId,
      expectedStatus: "confirmed_ready",
      nextStatus: "in_progress",
      nowMs: 101,
    });
    transitionLisaPrincipalTask(o, {
      internalId: lisa.task.internalId,
      expectedStatus: "in_progress",
      nextStatus: "completed_pending_evidence",
      nowMs: 102,
    });
    recordLisaPrincipalTaskEvidence(o, {
      internalId: lisa.task.internalId,
      source: "Lisa",
      description: "Independent verification receipt",
      reference: "receipt-1",
      nowMs: 103,
    });
    const verified = transitionLisaPrincipalTask(o, {
      internalId: lisa.task.internalId,
      expectedStatus: "completed_pending_evidence",
      nextStatus: "completed_verified",
      nowMs: 104,
    });
    expect(verified.status).toBe("completed_verified");
    expect(listLisaPrincipalTaskEvidence(o, lisa.task.internalId)).toHaveLength(1);

    const carlos = intakeLisaPrincipalTask(o, {
      title: "Carlos reports completion",
      explicit: true,
      owner: "Carlos",
      nowMs: 105,
    });
    transitionLisaPrincipalTask(o, {
      internalId: carlos.task.internalId,
      expectedStatus: "confirmed_ready",
      nextStatus: "in_progress",
      nowMs: 106,
    });
    transitionLisaPrincipalTask(o, {
      internalId: carlos.task.internalId,
      expectedStatus: "in_progress",
      nextStatus: "completed_pending_evidence",
      nowMs: 107,
    });
    expect(
      transitionLisaPrincipalTask(o, {
        internalId: carlos.task.internalId,
        expectedStatus: "completed_pending_evidence",
        nextStatus: "completed_verified",
        evidence: { source: "Carlos", description: "I completed it", reference: "carlos-1" },
        nowMs: 108,
      }).status,
    ).toBe("completed_verified");
  });

  it("keeps Brain advisory and Program references distinct, immutable, and aliasable", () => {
    const o = options();
    const first = intakeLisaPrincipalTask(o, {
      title: "One logical task",
      explicit: true,
      nowMs: 100,
    });
    const duplicate = intakeLisaPrincipalTask(o, {
      title: "One logical task",
      explicit: true,
      nowMs: 101,
    });
    expect(findLisaPrincipalTaskDuplicates(o, "One logical task")).toHaveLength(2);
    addLisaPrincipalTaskBrainAdvisoryReference(o, first.task.internalId, "brain-1", 102);
    const program = addLisaPrincipalTaskProgramReference(
      o,
      first.task.internalId,
      "program-1",
      103,
    );
    expect(program.immutable).toBe(true);
    expect(() =>
      addLisaPrincipalTaskProgramReference(o, duplicate.task.internalId, "program-1", 104),
    ).toThrow(/already belongs/);
    const alias = resolveLisaPrincipalTaskDuplicate(o, {
      aliasInternalId: duplicate.task.internalId,
      canonicalInternalId: first.task.internalId,
      reason: "same normalized title after bounded review",
      nowMs: 105,
    });
    expect(alias.canonicalInternalId).toBe(first.task.internalId);
    expect(listLisaPrincipalTaskAliases(o, first.task.internalId)).toHaveLength(1);
    expect(readLisaPrincipalTask(o, duplicate.task.internalId)?.internalId).toBe(
      first.task.internalId,
    );
  });

  it("migrates alias evidence transactionally and keeps repeated merge idempotent", () => {
    const o = options();
    const canonical = intakeLisaPrincipalTask(o, {
      title: "Evidence-bearing task",
      explicit: true,
      nowMs: 100,
    });
    const alias = intakeLisaPrincipalTask(o, {
      title: "Evidence-bearing task",
      explicit: true,
      nowMs: 101,
    });
    recordLisaPrincipalTaskEvidence(o, {
      internalId: canonical.task.internalId,
      source: "Lisa",
      description: "Canonical receipt",
      reference: "shared-receipt",
      nowMs: 102,
    });
    recordLisaPrincipalTaskEvidence(o, {
      internalId: alias.task.internalId,
      source: "Lisa",
      description: "Alias receipt",
      reference: "alias-receipt",
      nowMs: 103,
    });
    const resolved = resolveLisaPrincipalTaskDuplicate(o, {
      aliasInternalId: alias.task.internalId,
      canonicalInternalId: canonical.task.internalId,
      reason: "adversarial evidence merge",
      nowMs: 104,
    });
    expect(resolved.canonicalInternalId).toBe(canonical.task.internalId);
    expect(
      listLisaPrincipalTaskEvidence(o, canonical.task.internalId).map((item) => item.reference),
    ).toEqual(["shared-receipt", "alias-receipt"]);
    expect(
      resolveLisaPrincipalTaskDuplicate(o, {
        aliasInternalId: alias.task.internalId,
        canonicalInternalId: canonical.task.internalId,
        reason: "repeated merge",
        nowMs: 105,
      }),
    ).toEqual(resolved);
    expect(listLisaPrincipalTaskEvidence(o, canonical.task.internalId)).toHaveLength(2);
  });
});
