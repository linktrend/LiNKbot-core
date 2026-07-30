/**
 * Lisa ops focused tests — Node built-in test runner (no vitest config / knip changes).
 * Run: node --experimental-strip-types --test linkbots/lisa/ops/*.test.ts
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import { isOfflineReconcileBounded, planOfflineReconcile } from "./offline-recovery.ts";
import {
  applyWaveCas,
  expectedCycleDateForWave,
  selectFreshCheckpointLines,
} from "./pipeline-status-cas.ts";
import {
  classifyFailure,
  MAX_REPAIR_ATTEMPTS,
  nextRepairDecision,
  recordAttemptIdempotent,
  repairAttemptKey,
} from "./repair-dispatcher.ts";
import {
  canFinishShipPullSuccessfully,
  planPullBranch,
  planShipBranch,
  shipPullForbidsSessionsYield,
  validatePullPromptContract,
  validateShipPromptContract,
} from "./ship-pull-contract.ts";
import {
  omitStalePipelineLines,
  renderEmailDailyDigest,
  renderPipelineOneLiner,
  renderTelegramDailyDigest,
  renderTelegramHeartbeat,
  templatesDifferTelegramVsEmail,
} from "./templates.ts";

const here = path.dirname(fileURLToPath(import.meta.url));
const personalityRoot = path.resolve(here, "../Personality files");

function readPersonality(rel: string): string {
  return readFileSync(path.join(personalityRoot, rel), "utf8");
}

describe("Ship checkpoint-only", () => {
  it("never opens PRs or requests Bugbot in procedure prompt", () => {
    const text = readPersonality("agents/ship-pull-clock.md");
    const shipBlock = text.slice(text.indexOf("## ACP prompt — Shipper"));
    const errors = validateShipPromptContract(shipBlock);
    assert.deepEqual(errors, []);
  });

  it("plans commit+push without PR/Bugbot", () => {
    const plan = planShipBranch({
      repo: "openclaw_prime",
      branch: "issue/1-x",
      tipSha: "abc",
      dirty: false,
      activelyOwned: false,
      frozenReviewedSha: null,
      hasLocalChanges: true,
      hasUnpushedCommits: false,
    });
    assert.equal(plan.action, "checkpoint");
    if (plan.action === "checkpoint") {
      assert.equal(plan.allowPr, false);
      assert.equal(plan.allowBugbot, false);
    }
  });
});

describe("Pull frozen/dirty/owned protection", () => {
  it("skips frozen/reviewed tips in procedure", () => {
    const text = readPersonality("agents/ship-pull-clock.md");
    const pullBlock = text.slice(text.indexOf("## ACP prompt — Puller"));
    assert.deepEqual(validatePullPromptContract(pullBlock), []);
  });

  it("skips frozen tip SHA", () => {
    const plan = planPullBranch({
      repo: "r",
      branch: "issue/1-x",
      tipSha: "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
      dirty: false,
      activelyOwned: false,
      frozenReviewedSha: "deadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
      hasLocalChanges: false,
      hasUnpushedCommits: false,
    });
    assert.equal(plan.action, "skip");
    if (plan.action === "skip") {
      assert.match(plan.explicitResult, /frozen tip/);
    }
  });

  it("preserves dirty and actively owned branches", () => {
    const dirty = planPullBranch({
      repo: "r",
      branch: "issue/1-x",
      tipSha: "a",
      dirty: true,
      activelyOwned: false,
      frozenReviewedSha: null,
      hasLocalChanges: true,
      hasUnpushedCommits: false,
    });
    const owned = planPullBranch({
      repo: "r",
      branch: "issue/1-x",
      tipSha: "a",
      dirty: false,
      activelyOwned: true,
      frozenReviewedSha: null,
      hasLocalChanges: false,
      hasUnpushedCommits: false,
    });
    assert.equal(dirty.action, "skip");
    assert.equal(owned.action, "skip");
  });
});

describe("Ship/Pull post-processing gate", () => {
  it("cannot finish successfully without validated child + CAS + email + payload", () => {
    assert.equal(
      canFinishShipPullSuccessfully({
        childOutcomeValidated: false,
        statusCasDone: true,
        emailAttempted: true,
        finalAssistantPayload: "Ship 05: Clear",
      }),
      false,
    );
    assert.equal(
      canFinishShipPullSuccessfully({
        childOutcomeValidated: true,
        statusCasDone: true,
        emailAttempted: true,
        finalAssistantPayload: "Ship 05: Clear",
      }),
      true,
    );
  });

  it("forbids sessions_yield in ship-pull procedure", () => {
    const text = readPersonality("agents/ship-pull-clock.md");
    assert.equal(shipPullForbidsSessionsYield(text), true);
  });
});

describe("Pipeline status CAS", () => {
  it("is monotonic and cycle-dated", () => {
    const first = applyWaveCas({
      currentText: "",
      wave: "Ship 16",
      result: "Clear",
      expectedCycleDate: expectedCycleDateForWave("Ship 16", "2026-07-29"),
    });
    assert.equal(first.action, "updated");
    if (first.action !== "updated") return;
    assert.match(first.nextText, /Cycle date: 2026-07-30/);
    const second = applyWaveCas({
      currentText: first.nextText,
      wave: "Pull 18",
      result: "Issues",
      expectedCycleDate: "2026-07-30",
    });
    assert.equal(second.action, "updated");
    if (second.action !== "updated") return;
    assert.match(second.nextText, /Ship 16: Clear/);
    assert.match(second.nextText, /Pull 18: Issues/);
    const stale = applyWaveCas({
      currentText: second.nextText,
      wave: "Ship 05",
      result: "Clear",
      expectedCycleDate: "2026-07-29",
    });
    assert.equal(stale.action, "skipped_stale_cycle");
  });

  it("omits stale Ship/Pull lines for heartbeat/digest", () => {
    const text = `Cycle date: 2026-07-30\nShip 05: Clear\nPull 07: Clear\n`;
    assert.deepEqual(selectFreshCheckpointLines({ text, reportCycleDate: "2026-07-30" }), [
      "Ship 05: Clear",
      "Pull 07: Clear",
    ]);
    assert.deepEqual(selectFreshCheckpointLines({ text, reportCycleDate: "2026-07-31" }), []);
  });
});

describe("Templates", () => {
  const baseCtx = {
    weekdayDate: "Thursday, 30 Jul 2026",
    time: "10:45",
    workSummary: {
      calendar: "Yes" as const,
      tasks: "No" as const,
      email: "No" as const,
      unanswered: "No" as const,
    },
    codingEvals: "No" as const,
    battery: {
      expectedCharge: "72%",
      timeTo30: "N/A",
      timeTo98: "14:00",
      chargeRate: "+30 pp/h charging",
      routineChanges: "None",
      checks: "No" as const,
      alerts: [] as string[],
    },
    pipelineLines: ["Ship 05: Clear"],
    digestDetail: {
      calendarEvents: ["09:00 — standup — Shared"],
      tasks: [] as string[],
      emails: [] as string[],
      unanswered: [] as string[],
    },
  };

  it("renders deterministically and omits stale pipeline keys", () => {
    assert.equal(renderPipelineOneLiner("Ship 05", "Clear"), "Ship 05: Clear");
    assert.deepEqual(
      omitStalePipelineLines(["Ship 05: Clear", "Ship 16: Issues"], new Set(["Ship 05"])),
      ["Ship 05: Clear"],
    );
    const a = renderTelegramHeartbeat(baseCtx);
    const b = renderTelegramHeartbeat(baseCtx);
    assert.equal(a, b);
  });

  it("keeps Telegram and email formats different where required", () => {
    const tg = renderTelegramDailyDigest(baseCtx);
    const em = renderEmailDailyDigest(baseCtx);
    const diff = templatesDifferTelegramVsEmail(tg, em);
    assert.equal(diff.telegramHasBattery, true);
    assert.equal(diff.emailHasBattery, false);
    assert.equal(diff.differ, true);
  });
});

describe("Repair dispatcher", () => {
  const binding = {
    repository: "linktrend/openclaw_prime",
    branch: "issue/1-x",
    prNumber: 10,
    headSha: "aaa111",
  };

  it("is idempotent and stops at three", () => {
    let attempts = recordAttemptIdempotent([], {
      binding,
      attempt: 1,
      dispatchedAt: "t1",
      outcome: "failed",
      proofHeadSha: null,
    });
    attempts = recordAttemptIdempotent(attempts, {
      binding,
      attempt: 1,
      dispatchedAt: "t1b",
      outcome: "failed",
      proofHeadSha: null,
    });
    assert.equal(attempts.length, 1);
    attempts = recordAttemptIdempotent(attempts, {
      binding,
      attempt: 2,
      dispatchedAt: "t2",
      outcome: "failed",
      proofHeadSha: null,
    });
    attempts = recordAttemptIdempotent(attempts, {
      binding,
      attempt: 3,
      dispatchedAt: "t3",
      outcome: "failed",
      proofHeadSha: null,
    });
    const next = nextRepairDecision({
      failureClass: "ordinary_repairable",
      binding,
      priorAttempts: attempts,
      currentHeadSha: "aaa111",
    });
    assert.equal(next.decision, "escalate");
    if (next.decision === "escalate") {
      assert.equal(next.reason, "max_attempts");
      assert.equal(next.notifyCarlos, true);
    }
    assert.equal(MAX_REPAIR_ATTEMPTS, 3);
    assert.equal(repairAttemptKey(binding, 1), "linktrend/openclaw_prime|issue/1-x|10|aaa111|1");
  });

  it("rejects stale-head repair success", () => {
    const decision = nextRepairDecision({
      failureClass: "ordinary_repairable",
      binding,
      priorAttempts: [],
      currentHeadSha: "bbb222",
      latestAttemptProof: { headSha: "aaa111", gatesPassed: true },
    });
    assert.equal(decision.decision, "reject_stale_success");
  });

  it("escalates unsafe decisions without dispatch", () => {
    for (const summary of ["credential missing", "security XSS", "merge conflict ambiguous"]) {
      const cls = classifyFailure({ summary });
      const decision = nextRepairDecision({
        failureClass: cls,
        binding,
        priorAttempts: [],
        currentHeadSha: "aaa111",
      });
      assert.equal(decision.decision, "escalate");
    }
  });
});

describe("Offline recovery", () => {
  it("is bounded and does not blindly replay obsolete waves", () => {
    const plan = planOfflineReconcile({
      nowIso: "2026-07-30T11:00:00+08:00",
      missedWindows: [
        { wave: "Ship 16", scheduledAt: "2026-07-28T16:00:00+08:00", cycleDate: "2026-07-29" },
        { wave: "Pull 18", scheduledAt: "2026-07-28T18:00:00+08:00", cycleDate: "2026-07-29" },
        { wave: "Ship 05", scheduledAt: "2026-07-30T05:00:00+08:00", cycleDate: "2026-07-30" },
      ],
      unresolvedFailureIds: ["f2", "f1", "f1"],
      lastReconcileAt: null,
    });
    assert.equal(plan.windowsToConsider.length, 1);
    assert.equal(plan.windowsToConsider[0]?.wave, "Ship 05");
    assert.equal(plan.obsoleteSkipped.length, 2);
    assert.deepEqual(plan.failureIdsToReconcile, ["f1", "f2"]);
    assert.equal(isOfflineReconcileBounded(plan), true);
  });
});

describe("Heartbeat/digest GitOps alignment (no regression of required markers)", () => {
  it("documents Review Packager 08:00 and Staging 10:00", () => {
    const pipeline = readPersonality("agents/pipeline-status.md");
    const heartbeat = readPersonality("HEARTBEAT.md");
    const digest = readPersonality("agents/morning-digest.md");
    for (const text of [pipeline, heartbeat, digest]) {
      assert.match(text, /Review Packager/i);
      assert.match(text, /08:00/);
      assert.match(text, /Staging/);
      assert.match(text, /10:00/);
    }
  });
});
