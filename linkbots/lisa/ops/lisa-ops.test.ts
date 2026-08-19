/**
 * Lisa ops focused tests — Node built-in test runner (no vitest config / knip changes).
 * Run: node --experimental-strip-types --test linkbots/lisa/ops/*.test.ts
 */
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { cpSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, it } from "node:test";
import { fileURLToPath } from "node:url";
import {
  assertImmutableBindings,
  authorizeApprovalDispatch,
  buildCarlosAskViewPure,
  isMainApproveClaimExpired,
  issueCarlosAsk,
  MAIN_APPROVE_RUNTIME_STORE,
  MAIN_APPROVE_UNHEALTHY_STORE,
  parseInstantToEpochMs,
  validateApprovalBindings,
  type MainApprovePackage,
} from "./main-approve-binding.ts";
import {
  buildNonLiveAgentsDefaultsFragment,
  LISA_APPROVED_MODEL_ROUTING,
  validateApprovedRouting,
} from "./model-routing-contract.ts";
import {
  isOfflinePlanHonest,
  isValidCalendarDate,
  parseInstantMs,
  planOfflineReconcile,
} from "./offline-recovery.ts";
import {
  applyWaveCas,
  expectedCycleDateForWave,
  selectFreshCheckpointLines,
} from "./pipeline-status-cas.ts";
import {
  authorizeRepairLiveDispatch,
  classifyFailure,
  evaluateProof,
  MAX_REPAIR_ATTEMPTS,
  nextRepairDecision,
  recordDispatch,
  type RepairAttemptRecord,
  type RepairBinding,
} from "./repair-dispatcher.ts";
import {
  canFinishShipPullSuccessfully,
  classifyBranch,
  isApprovedWorkBranch,
  authorizeLiveLisaAction,
  authorizeShipPullLiveAction,
  LISA_OPS_LIVE_ACTION_DEFAULTS,
  planPullBranch,
  planShipBranch,
  resolveWaveOutcome,
  SHIP_PULL_REQUIRED_TOOLS,
  shipPullAllowlistIncludesSessionsWait,
  shipPullDocumentsCodexOnlyAcpContract,
  shipPullForbidsCursorFallback,
  shipPullForbidsSessionsYield,
  shipPullRequiresCodexTerraSpawnContract,
  shipPullRequiresSessionsWait,
  shipPullRespectsIdeAuthority,
  validatePullPromptContract,
  validateShipPromptContract,
  type BranchWaveResult,
} from "./ship-pull-contract.ts";
import {
  assertNoUnresolvedPlaceholders,
  loadCanonicalTemplateBody,
  omitStalePipelineLines,
  renderEmailDailyDigest,
  renderTelegramDailyDigest,
  templatesDifferTelegramVsEmail,
} from "./templates.ts";

const here = path.dirname(fileURLToPath(import.meta.url));
const personalityRoot = path.resolve(here, "../Personality files");
const repoRoot = path.resolve(here, "../../..");

function readPersonality(rel: string): string {
  return readFileSync(path.join(personalityRoot, rel), "utf8");
}

const baseBinding: RepairBinding = {
  repository: "linktrend/openclaw_prime",
  branch: "issue/1-x",
  prNumber: 10,
  headSha: "aaa111aaa111aaa111aaa111aaa111aaa111aaa1",
};

describe.skip("Retired Ship/Pull IDE authority", () => {
  it("Ship/Pull procedure does not claim Lisa overrides IDE Development", () => {
    const text = readPersonality("agents/ship-pull-clock.md");
    assert.equal(shipPullRespectsIdeAuthority(text), true);
    assert.doesNotMatch(text, /this file wins/i);
    assert.doesNotMatch(text, /lisa override/i);
    assert.match(text, /IDE Development/i);
    assert.match(text, /origin\/development|AUTONOMOUS-GIT-OPERATIONS|PR #19|GITOPS-01/i);
    assert.match(text, /issue #23|#23/i);
    // Checkpoint-only is already merged on IDE development — #23 is follow-on, not the inventing source.
    assert.match(text, /already (on IDE|merged)|pinned merged contract/i);
  });
});

describe.skip("Retired Ship checkpoint-only + allowlist", () => {
  it("never opens PRs or requests Bugbot in procedure prompt", () => {
    const text = readPersonality("agents/ship-pull-clock.md");
    const shipBlock = text.slice(text.indexOf("## ACP prompt — Shipper"));
    const errors = validateShipPromptContract(shipBlock);
    assert.deepEqual(errors, []);
  });

  it("plans commit+push without PR/Bugbot for issue/*", () => {
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

  it("skips unsupported and integration branches explicitly", () => {
    assert.equal(isApprovedWorkBranch("feature/x"), false);
    assert.equal(classifyBranch("development"), "integration");
    const unsupported = planShipBranch({
      repo: "r",
      branch: "feature/x",
      tipSha: "a",
      dirty: false,
      activelyOwned: false,
      frozenReviewedSha: null,
      hasLocalChanges: true,
      hasUnpushedCommits: true,
    });
    assert.equal(unsupported.action, "skip");
    if (unsupported.action === "skip") {
      assert.match(unsupported.explicitResult, /unsupported/);
    }
  });
});

describe("Wave Clear/Issues semantics", () => {
  it("Clear only when work succeeded; Issues when all skipped or empty", () => {
    const mixedSuccess: BranchWaveResult[] = [
      { repo: "a", branch: "issue/1", status: "skipped", detail: "unsupported" },
      { repo: "b", branch: "issue/2", status: "checkpointed", detail: "ok" },
    ];
    assert.deepEqual(resolveWaveOutcome(mixedSuccess), {
      result: "Clear",
      reason: "work_succeeded",
    });

    const allSkipped: BranchWaveResult[] = [
      { repo: "a", branch: "feature/x", status: "skipped", detail: "unsupported" },
      { repo: "b", branch: "development", status: "skipped", detail: "integration" },
    ];
    const skippedOutcome = resolveWaveOutcome(allSkipped);
    assert.equal(skippedOutcome.result, "Issues");
    if (skippedOutcome.result === "Issues") {
      assert.equal(skippedOutcome.reason, "all_skipped_or_empty");
    }

    assert.equal(resolveWaveOutcome([]).result, "Issues");

    const blocked: BranchWaveResult[] = [
      { repo: "a", branch: "issue/1", status: "blocked", detail: "push failed" },
    ];
    assert.deepEqual(resolveWaveOutcome(blocked), {
      result: "Issues",
      reason: "blocked_or_failed",
    });

    const successful: BranchWaveResult[] = [
      { repo: "a", branch: "issue/1", status: "updated", detail: "merged development" },
    ];
    assert.deepEqual(resolveWaveOutcome(successful), {
      result: "Clear",
      reason: "work_succeeded",
    });
  });
});

describe.skip("Retired Pull frozen/dirty/owned protection", () => {
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

describe.skip("Retired Ship/Pull post-processing gate", () => {
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

  it("requires sessions_wait park contract in ship-pull procedure", () => {
    const text = readPersonality("agents/ship-pull-clock.md");
    assert.equal(shipPullRequiresSessionsWait(text), true);
    assert.match(text, /sessions_wait/);
    assert.match(text, /registry persist/i);
    assert.doesNotMatch(text, /call sessions_yield after/i);
  });

  it("pins Ship/Pull dispatch to Codex Terra Medium with no Cursor fallback", () => {
    const text = readPersonality("agents/ship-pull-clock.md");
    assert.equal(shipPullRequiresCodexTerraSpawnContract(text), true);
    assert.equal(shipPullForbidsCursorFallback(text), true);
    assert.match(text, /runtime: "acp"/);
    assert.match(text, /agentId: "codex"/);
    assert.match(text, /model: "openai\/gpt-5\.6-terra"/);
    assert.match(text, /thinking: "medium"/);
    assert.doesNotMatch(text, /agentId: "cursor"/);
    assert.doesNotMatch(text, /model: "grok-4\.5/);
  });

  it("keeps heartbeat and pipeline status fail-closed on the Codex-only ACP contract", () => {
    for (const rel of ["HEARTBEAT.md", "agents/pipeline-status.md"]) {
      const text = readPersonality(rel);
      assert.equal(shipPullDocumentsCodexOnlyAcpContract(text), true, rel);
    }
  });

  it("Ship/Pull allowlist includes sessions_wait and excludes yield", () => {
    assert.equal(shipPullAllowlistIncludesSessionsWait(SHIP_PULL_REQUIRED_TOOLS), true);
    assert.ok(SHIP_PULL_REQUIRED_TOOLS.includes("sessions_spawn"));
    assert.ok(SHIP_PULL_REQUIRED_TOOLS.includes("sessions_wait"));
    assert.ok(SHIP_PULL_REQUIRED_TOOLS.includes("apply_patch"));
    assert.ok(!SHIP_PULL_REQUIRED_TOOLS.includes("sessions_yield"));
  });

  it("keeps environment-specific runtime config outside the stable source bundle", () => {
    const manifest = JSON.parse(
      readFileSync(path.resolve(personalityRoot, "../PROFILE_BUNDLE_MANIFEST.json"), "utf8"),
    ) as {
      requiredStableDefinition: Array<{ path: string }>;
      secretAndRuntimeExclusions: Array<{ pattern: string }>;
    };
    assert.ok(
      manifest.secretAndRuntimeExclusions.some(
        (entry) => entry.pattern === "Personality files/openclaw.json",
      ),
    );
    assert.ok(
      manifest.requiredStableDefinition.every(
        (entry) => entry.path !== "Personality files/openclaw.json",
      ),
    );
  });

  it("keeps MiniMax image routing in the non-live routing contract", () => {
    const fragment = buildNonLiveAgentsDefaultsFragment();
    assert.equal(fragment.imageModel.primary, "openrouter/minimax/minimax-m3");
  });

  it("procedure allowlist text matches SHIP_PULL_REQUIRED_TOOLS", () => {
    const text = readPersonality("agents/ship-pull-clock.md");
    for (const tool of SHIP_PULL_REQUIRED_TOOLS) {
      assert.match(text, new RegExp(tool));
    }
    assert.match(
      text,
      /toolsAllow` \*\*and\*\* `agents\.list\[lisa-cron\]\.tools\.allow` must include `sessions_spawn`, `sessions_wait`, `apply_patch`/,
    );
    assert.equal(shipPullForbidsSessionsYield(text), true);
    assert.equal(shipPullAllowlistIncludesSessionsWait(SHIP_PULL_REQUIRED_TOOLS), true);
  });
});

describe.skip("Retired Lisa GitOps live-action defaults", () => {
  it("defaults block live Lisa targeting without credentials language approval", () => {
    assert.equal(LISA_OPS_LIVE_ACTION_DEFAULTS.liveLisaTargetingAllowed, false);
    assert.equal(LISA_OPS_LIVE_ACTION_DEFAULTS.credentialsLanguageSeparatelyApproved, false);
    assert.equal(LISA_OPS_LIVE_ACTION_DEFAULTS.cronMutationAllowed, false);
    assert.equal(LISA_OPS_LIVE_ACTION_DEFAULTS.shipPullLiveActionAllowed, false);
    assert.equal(LISA_OPS_LIVE_ACTION_DEFAULTS.repairDispatcherLiveActionAllowed, false);
    assert.equal(LISA_OPS_LIVE_ACTION_DEFAULTS.digestLiveActionAllowed, false);
    assert.equal(LISA_OPS_LIVE_ACTION_DEFAULTS.heartbeatLiveActionAllowed, false);
    const blocked = authorizeLiveLisaAction();
    assert.equal(blocked.ok, false);
    if (!blocked.ok) {
      assert.equal(blocked.reason, "live_targeting_disabled");
    }
    const needCreds = authorizeLiveLisaAction({
      liveLisaTargetingAllowed: true,
      credentialsLanguageSeparatelyApproved: false,
    });
    assert.equal(needCreds.ok, false);
    if (!needCreds.ok) {
      assert.equal(needCreds.reason, "credentials_language_not_approved");
    }
    const shipBlocked = authorizeShipPullLiveAction();
    assert.equal(shipBlocked.ok, false);
  });

  it("opt-in live config authorizes only when both gates are true", () => {
    const ok = authorizeLiveLisaAction({
      liveLisaTargetingAllowed: true,
      credentialsLanguageSeparatelyApproved: true,
    });
    assert.equal(ok.ok, true);
  });

  it("procedures document non-live / opt-in defaults", () => {
    const ship = readPersonality("agents/ship-pull-clock.md");
    const digest = readPersonality("agents/morning-digest.md");
    const repair = readPersonality("agents/repair-dispatcher.md");
    const heartbeat = readPersonality("HEARTBEAT.md");
    for (const text of [ship, digest, repair, heartbeat]) {
      assert.match(text, /non-live|opt-in|candidate-only|fail-closed/i);
      assert.match(text, /credentials/i);
    }
  });
});

describe("Approved model routing (non-live)", () => {
  it("validates OCP-W10 approved identifiers without secrets", () => {
    const errors = validateApprovedRouting(LISA_APPROVED_MODEL_ROUTING);
    assert.deepEqual(errors, []);
    const fragment = buildNonLiveAgentsDefaultsFragment();
    assert.equal(fragment.model.primary, "openai/gpt-5.6-luna");
    assert.equal(fragment.thinkingDefault, "high");
    assert.deepEqual(fragment.model.fallbacks, [
      "openrouter/openai/gpt-5.6-luna",
      "openrouter/z-ai/glm-5.2",
      "openrouter/moonshotai/kimi-k3",
      "openrouter/google/gemini-3.5-flash-lite",
    ]);
    assert.equal(fragment.imageModel.primary, "openrouter/minimax/minimax-m3");
    assert.equal(fragment.evaluationOnly.enabledInDefaults, false);
    assert.ok(!fragment.evaluationOnly.ref.includes(":free"));
    assert.equal(LISA_APPROVED_MODEL_ROUTING.liveMutationAllowed, false);
    assert.equal(LISA_APPROVED_MODEL_ROUTING.paidSpendEnablementAllowed, true);
    const imagePdf = LISA_APPROVED_MODEL_ROUTING.entries.find((e) => e.slot === "imagePdf");
    assert.ok(imagePdf);
    assert.match(imagePdf.notes ?? "", /pdfModel|pdfDocumentModelsCutover|approved_unverified/i);
    assert.ok(!/Image\/PDF via MiniMax native vision catalog/i.test(imagePdf.notes ?? ""));
    assert.equal(fragment.pdfModel.primary, "openrouter/minimax/minimax-m3");
    assert.equal(fragment.pdfDocumentModelsCutover.capabilityStatus, "approved_unverified");
    assert.equal(fragment.pdfDocumentModelsCutover.state, "enabled_candidate");
  });

  it("keeps contract JSON aligned with TypeScript contract", () => {
    const raw = JSON.parse(
      readFileSync(path.join(here, "model-routing.contract.json"), "utf8"),
    ) as {
      agents: {
        defaults: {
          model: { primary: string; fallbacks: string[] };
          imageModel: { primary: string };
          pdfModel?: { primary: string };
          thinkingDefault: string;
        };
      };
      tools: {
        media: {
          image: {
            models: Array<{ provider: string; model: string }>;
          };
        };
      };
      evaluationOnly: { enabledInDefaults: boolean; ref: string };
      liveMutationAllowed: boolean;
      pdfDocumentModelsCutover?: { capabilityStatus?: string; state?: string };
    };
    const fragment = buildNonLiveAgentsDefaultsFragment();
    assert.equal(raw.liveMutationAllowed, false);
    assert.equal(raw.agents.defaults.model.primary, fragment.model.primary);
    assert.deepEqual(raw.agents.defaults.model.fallbacks, fragment.model.fallbacks);
    assert.equal(raw.agents.defaults.imageModel.primary, fragment.imageModel.primary);
    assert.equal(raw.agents.defaults.pdfModel?.primary, fragment.pdfModel.primary);
    assert.equal(raw.agents.defaults.thinkingDefault, fragment.thinkingDefault);
    assert.deepEqual(raw.tools.media.image.models, [
      { provider: "openrouter", model: "minimax/minimax-m3" },
    ]);
    assert.equal(raw.evaluationOnly.enabledInDefaults, false);
    assert.equal(raw.pdfDocumentModelsCutover?.capabilityStatus, "approved_unverified");
    assert.equal(raw.pdfDocumentModelsCutover?.state, "enabled_candidate");
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
    if (first.action !== "updated") {
      return;
    }
    assert.match(first.nextText, /Cycle date: 2026-07-30/);
    const second = applyWaveCas({
      currentText: first.nextText,
      wave: "Pull 18",
      result: "Issues",
      expectedCycleDate: "2026-07-30",
    });
    assert.equal(second.action, "updated");
    if (second.action !== "updated") {
      return;
    }
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

describe("Templates operational", () => {
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
    pipelineLines: ["Ship 05: Clear"] as string[],
    digestDetail: {
      calendarEvents: ["09:00 — standup — Shared"],
      tasks: [] as string[],
      emails: [] as string[],
      unanswered: [] as string[],
    },
  };

  it("canonical template files expose every section and placeholder", () => {
    for (const kind of ["telegram-daily-digest", "email-daily-digest"] as const) {
      const body = loadCanonicalTemplateBody(kind);
      assert.match(body, /\{\{[a-zA-Z0-9_.]+\}\}/);
      assert.ok(body.length > 10);
    }
  });

  it("rejects unresolved placeholders and filters stale optional lines", () => {
    assert.throws(() => assertNoUnresolvedPlaceholders("hello {{missing}}"), /unresolved/);
    assert.deepEqual(
      omitStalePipelineLines(["Ship 05: Clear", "Ship 16: Issues"], new Set(["Ship 05"])),
      ["Ship 05: Clear"],
    );
  });

  it("Telegram digest includes Battery; email excludes Battery", () => {
    const tg = renderTelegramDailyDigest(baseCtx);
    const em = renderEmailDailyDigest(baseCtx);
    const diff = templatesDifferTelegramVsEmail(tg, em);
    assert.equal(diff.telegramHasBattery, true);
    assert.equal(diff.emailHasBattery, false);
    assert.equal(diff.differ, true);
    assert.doesNotMatch(em, /Battery Monitoring|plugged status/i);
  });

  it("runtime CLI path uses canonical templates", () => {
    const dir = mkdtempSync(path.join(tmpdir(), "lisa-tpl-"));
    const jsonPath = path.join(dir, "ctx.json");
    writeFileSync(jsonPath, JSON.stringify(baseCtx));
    const cli = path.join(here, "render-template.ts");
    const dig = spawnSync(
      process.execPath,
      ["--experimental-strip-types", cli, "telegram-daily-digest", jsonPath],
      { encoding: "utf8", cwd: repoRoot },
    );
    assert.equal(dig.status, 0, dig.stderr);
    assert.match(dig.stdout, /Morning Digest/);

    const email = spawnSync(
      process.execPath,
      ["--experimental-strip-types", cli, "email-daily-digest", jsonPath],
      { encoding: "utf8", cwd: repoRoot },
    );
    assert.equal(email.status, 0, email.stderr);
    assert.doesNotMatch(email.stdout, /Battery Monitoring/);
  });

  it("active procedures exclude retired job instructions", () => {
    const digest = readPersonality("agents/morning-digest.md");
    const heartbeat = readPersonality("HEARTBEAT.md");
    for (const text of [digest, heartbeat]) {
      assert.doesNotMatch(text, /lisa-ship-|lisa-pull-|apply-patch-tripwire/);
    }
  });

  it("deployed workspace layout renders the retained digest kinds without repo path", () => {
    const ws = mkdtempSync(path.join(tmpdir(), "lisa-deploy-ws-"));
    mkdirSync(path.join(ws, "ops"), { recursive: true });
    cpSync(path.join(personalityRoot, "templates"), path.join(ws, "templates"), {
      recursive: true,
    });
    cpSync(path.join(here, "render-template.ts"), path.join(ws, "ops", "render-template.ts"));
    cpSync(path.join(here, "templates.ts"), path.join(ws, "ops", "templates.ts"));
    // Prove we did not need the repository layout.
    assert.equal(
      spawnSync("test", ["!", "-e", path.join(ws, "Personality files")], { encoding: "utf8" })
        .status,
      0,
    );
    const jsonPath = path.join(ws, "ctx.json");
    writeFileSync(jsonPath, JSON.stringify(baseCtx));
    const run = (args: string[]) =>
      spawnSync(process.execPath, ["--experimental-strip-types", ...args], {
        encoding: "utf8",
        cwd: ws,
      });
    const dig = run(["ops/render-template.ts", "telegram-daily-digest", jsonPath]);
    assert.equal(dig.status, 0, dig.stderr);
    assert.match(dig.stdout, /Morning Digest/);
    const email = run(["ops/render-template.ts", "email-daily-digest", jsonPath]);
    assert.equal(email.status, 0, email.stderr);
    assert.doesNotMatch(email.stdout, /Battery Monitoring/);
  });
});

describe("Repair dispatcher binding + pending hold", () => {
  it("holds when exact binding attempt is already pending (no attempt 2)", () => {
    const prior = recordDispatch([], baseBinding, 1, "2026-07-30T10:00:00Z");
    const again = nextRepairDecision({
      failureClass: "ordinary_repairable",
      binding: baseBinding,
      priorAttempts: prior,
      currentHeadSha: baseBinding.headSha,
    });
    assert.equal(again.decision, "hold");
    if (again.decision === "hold") {
      assert.equal(again.attempt, 1);
      assert.equal(again.reason, "pending_attempt");
    }
  });

  it("isolates different PRs sharing branch/head", () => {
    const other: RepairBinding = { ...baseBinding, prNumber: 99 };
    let prior = recordDispatch([], baseBinding, 1, "t1");
    prior = prior.map((a) => (a.attempt === 1 ? { ...a, outcome: "failed" as const } : a));
    prior = recordDispatch(prior, baseBinding, 2, "t2");
    prior = prior.map((a) =>
      a.attempt === 2 && same(a, baseBinding) ? { ...a, outcome: "failed" as const } : a,
    );

    const forOther = nextRepairDecision({
      failureClass: "ordinary_repairable",
      binding: other,
      priorAttempts: prior,
      currentHeadSha: other.headSha,
    });
    assert.equal(forOther.decision, "dispatch");
    if (forOther.decision === "dispatch") {
      assert.equal(forOther.attempt, 1);
    }
  });

  function same(a: RepairAttemptRecord, b: RepairBinding): boolean {
    return (
      a.binding.repository === b.repository &&
      a.binding.branch === b.branch &&
      a.binding.prNumber === b.prNumber &&
      a.binding.headSha === b.headSha
    );
  }

  it("rejects stale, unmatched, and unrecorded proof", () => {
    const prior = recordDispatch([], baseBinding, 1, "t1");
    assert.equal(
      evaluateProof({
        proof: {
          ...baseBinding,
          headSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
          attempt: 1,
          gatesPassed: true,
        },
        binding: baseBinding,
        currentHeadSha: baseBinding.headSha,
        priorAttempts: prior,
      }).decision,
      "reject_proof",
    );
    assert.equal(
      evaluateProof({
        proof: {
          repository: "other/repo",
          branch: baseBinding.branch,
          prNumber: baseBinding.prNumber,
          headSha: baseBinding.headSha,
          attempt: 1,
          gatesPassed: true,
        },
        binding: baseBinding,
        currentHeadSha: baseBinding.headSha,
        priorAttempts: prior,
      }).decision,
      "reject_proof",
    );
    assert.equal(
      evaluateProof({
        proof: { ...baseBinding, attempt: 2, gatesPassed: true },
        binding: baseBinding,
        currentHeadSha: baseBinding.headSha,
        priorAttempts: prior,
      }).decision,
      "reject_proof",
    );
  });

  it("resolves only with exact binding + recorded attempt + gates", () => {
    const prior = recordDispatch([], baseBinding, 1, "t1");
    const ok = evaluateProof({
      proof: { ...baseBinding, attempt: 1, gatesPassed: true },
      binding: baseBinding,
      currentHeadSha: baseBinding.headSha,
      priorAttempts: prior,
    });
    assert.equal(ok.decision, "resolve");
  });

  it("escalates exactly after three genuine dispatches", () => {
    let prior: RepairAttemptRecord[] = [];
    for (let n = 1; n <= 3; n++) {
      prior = recordDispatch(prior, baseBinding, n, `t${n}`);
      prior = prior.map((a) => (a.attempt === n ? { ...a, outcome: "failed" as const } : a));
    }
    const next = nextRepairDecision({
      failureClass: "ordinary_repairable",
      binding: baseBinding,
      priorAttempts: prior,
      currentHeadSha: baseBinding.headSha,
    });
    assert.equal(next.decision, "escalate");
    if (next.decision === "escalate") {
      assert.equal(next.reason, "max_attempts");
      assert.equal(next.notifyCarlos, true);
    }
    assert.equal(MAX_REPAIR_ATTEMPTS, 3);
  });

  it("escalates unsafe classes without dispatch", () => {
    for (const summary of ["credential missing", "security XSS", "merge conflict ambiguous"]) {
      const cls = classifyFailure({ summary });
      const decision = nextRepairDecision({
        failureClass: cls,
        binding: baseBinding,
        priorAttempts: [],
        currentHeadSha: baseBinding.headSha,
      });
      assert.equal(decision.decision, "escalate");
    }
  });

  it("live ACP dispatch fails closed under candidate defaults", () => {
    const blocked = authorizeRepairLiveDispatch({
      failureClass: "ordinary_repairable",
      binding: baseBinding,
      currentHeadSha: baseBinding.headSha,
    });
    assert.equal(blocked.ok, false);
    if (!blocked.ok) {
      assert.equal(blocked.reason, "live_targeting_disabled");
      assert.equal(blocked.decision.decision, "blocked_non_live");
    }
    const stillNeedCreds = authorizeRepairLiveDispatch(
      {
        failureClass: "ordinary_repairable",
        binding: baseBinding,
        currentHeadSha: baseBinding.headSha,
      },
      null,
      { liveLisaTargetingAllowed: true, credentialsLanguageSeparatelyApproved: false },
    );
    assert.equal(stillNeedCreds.ok, false);
    if (!stillNeedCreds.ok) {
      assert.equal(stillNeedCreds.reason, "credentials_language_not_approved");
    }
    const noStore = authorizeRepairLiveDispatch(
      {
        failureClass: "ordinary_repairable",
        binding: baseBinding,
        currentHeadSha: baseBinding.headSha,
      },
      { available: true } as never,
      { liveLisaTargetingAllowed: true, credentialsLanguageSeparatelyApproved: true },
    );
    assert.equal(noStore.ok, false);
    if (!noStore.ok) {
      assert.equal(noStore.reason, "blocked_no_store");
    }
  });
});

describe("Main Approve binding", () => {
  const pkg: MainApprovePackage = {
    packageId: "main-2026-08-03",
    mondayDate: "2026-08-03",
    claimExpiresAt: "2026-08-03T12:00:00+08:00",
    items: [
      {
        index: 1,
        plainDescription: "LiNKsites weekly promotion",
        repository: "linktrend/LiNKsites",
        promotionPrNumber: 12,
        stagingSha: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        priorMainSha: "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        promotionHeadSha: "cccccccccccccccccccccccccccccccccccccccc",
        gateResult: "Clear",
      },
      {
        index: 2,
        plainDescription: "LiNKplatform weekly promotion",
        repository: "linktrend/LiNKplatform",
        promotionPrNumber: 34,
        stagingSha: "dddddddddddddddddddddddddddddddddddddddd",
        priorMainSha: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        promotionHeadSha: "ffffffffffffffffffffffffffffffffffffffff",
        gateResult: "Clear",
      },
    ],
  };

  const paramsOk = {
    packageId: pkg.packageId,
    expectedPackageHash: "a".repeat(64),
    claimId: "test-claim-owner",
    approvedIndexes: [1, 2],
    nowIso: "2026-08-03T10:00:00+08:00",
    liveItems: structuredClone(pkg.items),
  };

  const askRef = {
    packageId: pkg.packageId,
    expectedPackageHash: "a".repeat(64),
    claimId: "test-claim-owner",
  };

  it("pure Carlos view is plain English without SHAs", () => {
    assertImmutableBindings(pkg);
    const view = buildCarlosAskViewPure(pkg);
    assert.match(view.telegramBody, /1\) linktrend\/LiNKsites/);
    assert.doesNotMatch(view.telegramBody, /[0-9a-f]{7,}/i);
    assert.equal(MAIN_APPROVE_UNHEALTHY_STORE.available, false);
  });

  it("runtime issues no Carlos ask without store and names prerequisite", () => {
    const blocked = issueCarlosAsk(askRef);
    assert.equal(blocked.ok, false);
    if (blocked.ok) {
      return;
    }
    assert.ok(
      blocked.reason === "blocked_no_store" ||
        blocked.reason === "live_targeting_disabled" ||
        blocked.reason === "credentials_language_not_approved",
    );
    // Defaults fail closed on live targeting before store check.
    assert.equal(blocked.reason, "live_targeting_disabled");
  });

  it("live opt-in still blocks Main Approve when store is unhealthy/missing", () => {
    const liveOptIn = {
      liveLisaTargetingAllowed: true,
      credentialsLanguageSeparatelyApproved: true,
    };
    const ask = issueCarlosAsk(askRef, null, liveOptIn);
    assert.equal(ask.ok, false);
    if (ask.ok) {
      return;
    }
    assert.equal(ask.reason, "blocked_no_store");
    assert.match(ask.prerequisite ?? "", /lisa_stage_|package store|SQLite/i);

    const dispatch = authorizeApprovalDispatch(paramsOk, null, liveOptIn);
    assert.equal(dispatch.ok, false);
    if (dispatch.ok) {
      return;
    }
    assert.equal(dispatch.reason, "blocked_no_store");

    // Packaging default remains fail-closed; use openStageDurableStoreCapability for live probes.
    assert.equal(MAIN_APPROVE_RUNTIME_STORE.available, false);
    assert.equal(MAIN_APPROVE_UNHEALTHY_STORE.available, false);
  });

  it("runtime approval dispatch fails closed without store", () => {
    const blocked = authorizeApprovalDispatch(paramsOk);
    assert.equal(blocked.ok, false);
    if (blocked.ok) {
      return;
    }
    assert.equal(blocked.reason, "live_targeting_disabled");
  });

  it("pure binding validation: exact ok; drift/reorder/expiry/partial fail", () => {
    const live = structuredClone(pkg.items);
    assert.equal(
      validateApprovalBindings({
        sealed: pkg,
        approvedIndexes: [1, 2],
        nowIso: "2026-08-03T10:00:00+08:00",
        liveItems: live,
      }).ok,
      true,
    );

    const drifted = structuredClone(live);
    drifted[0]!.stagingSha = "1111111111111111111111111111111111111111";
    assert.equal(
      validateApprovalBindings({
        sealed: pkg,
        approvedIndexes: [1, 2],
        nowIso: "2026-08-03T10:00:00+08:00",
        liveItems: drifted,
      }).ok,
      false,
    );

    const reordered = [live[1]!, live[0]!];
    assert.equal(
      validateApprovalBindings({
        sealed: pkg,
        approvedIndexes: [1, 2],
        nowIso: "2026-08-03T10:00:00+08:00",
        liveItems: reordered,
      }).reason,
      "reordered",
    );

    assert.equal(
      validateApprovalBindings({
        sealed: pkg,
        approvedIndexes: [1, 2],
        nowIso: "2026-08-03T13:00:00+08:00",
        liveItems: live,
      }).reason,
      "expired_claim",
    );

    assert.equal(
      validateApprovalBindings({
        sealed: pkg,
        approvedIndexes: [1],
        nowIso: "2026-08-03T10:00:00+08:00",
        liveItems: live,
      }).reason,
      "partial_approval",
    );
  });

  it("epoch expiry: timezone-offset claim beats lexical string compare", () => {
    // claimExpiresAt +08:00 noon == 04:00Z. Lexical "05:00Z" < "12:00+08" would wrongly pass.
    const expires = "2026-08-03T12:00:00+08:00";
    assert.equal(parseInstantToEpochMs(expires), Date.parse("2026-08-03T04:00:00.000Z"));
    assert.equal(
      isMainApproveClaimExpired({
        nowIso: "2026-08-03T05:00:00.000Z",
        claimExpiresAt: expires,
      }),
      true,
    );
    assert.equal(
      validateApprovalBindings({
        sealed: pkg,
        approvedIndexes: [1, 2],
        nowIso: "2026-08-03T05:00:00.000Z",
        liveItems: structuredClone(pkg.items),
      }).reason,
      "expired_claim",
    );

    assert.equal(
      isMainApproveClaimExpired({
        nowIso: "2026-08-03T03:00:00.000Z",
        claimExpiresAt: expires,
      }),
      false,
    );
    assert.equal(
      validateApprovalBindings({
        sealed: pkg,
        approvedIndexes: [1, 2],
        nowIso: "2026-08-03T03:00:00.000Z",
        liveItems: structuredClone(pkg.items),
      }).ok,
      true,
    );
  });

  it("epoch expiry: invalid nowIso or claimExpiresAt fail closed as expired_claim", () => {
    assert.equal(parseInstantToEpochMs(""), null);
    assert.equal(parseInstantToEpochMs("not-an-instant"), null);
    assert.equal(
      isMainApproveClaimExpired({
        nowIso: "not-an-instant",
        claimExpiresAt: "2026-08-03T12:00:00+08:00",
      }),
      true,
    );
    assert.equal(
      isMainApproveClaimExpired({
        nowIso: "2026-08-03T03:00:00.000Z",
        claimExpiresAt: "",
      }),
      true,
    );
    assert.equal(
      validateApprovalBindings({
        sealed: { ...pkg, claimExpiresAt: "bogus" },
        approvedIndexes: [1, 2],
        nowIso: "2026-08-03T03:00:00.000Z",
        liveItems: structuredClone(pkg.items),
      }).reason,
      "expired_claim",
    );
    assert.equal(
      validateApprovalBindings({
        sealed: pkg,
        approvedIndexes: [1, 2],
        nowIso: "",
        liveItems: structuredClone(pkg.items),
      }).reason,
      "expired_claim",
    );
  });

  it("rejects forgeable available:true; exact binding needs sealed store capability", () => {
    const live = {
      liveLisaTargetingAllowed: true,
      credentialsLanguageSeparatelyApproved: true,
    };
    const forged = { available: true as const };
    const askForged = issueCarlosAsk(askRef, forged as never, live);
    assert.equal(askForged.ok, false);
    if (!askForged.ok) {
      assert.equal(askForged.reason, "blocked_no_store");
    }
    const authForged = authorizeApprovalDispatch(paramsOk, forged as never, live);
    assert.equal(authForged.ok, false);
    if (!authForged.ok) {
      assert.equal(authForged.reason, "blocked_no_store");
    }

    const askBlockedLive = issueCarlosAsk(askRef, null);
    assert.equal(askBlockedLive.ok, false);
    const authBlockedLive = authorizeApprovalDispatch(paramsOk, null);
    assert.equal(authBlockedLive.ok, false);
  });
});

describe("Offline recovery planning helper", () => {
  it("is honest planning-only and skips obsolete/future/invalid", () => {
    const plan = planOfflineReconcile({
      nowIso: "2026-07-30T11:00:00+08:00",
      missedWindows: [
        { wave: "Ship 16", scheduledAt: "2026-07-28T16:00:00+08:00", cycleDate: "2026-07-29" },
        { wave: "Pull 18", scheduledAt: "2026-07-28T18:00:00+08:00", cycleDate: "2026-07-29" },
        { wave: "Ship 05", scheduledAt: "2026-07-30T05:00:00+08:00", cycleDate: "2026-07-30" },
        { wave: "Pull 07", scheduledAt: "2026-07-30T12:00:00+08:00", cycleDate: "2026-07-30" },
        { wave: "Ship 16", scheduledAt: "not-a-date", cycleDate: "bad" },
      ],
      unresolvedFailureIds: ["f2", "f1", "f1"],
      lastReconcileAt: null,
    });
    assert.equal(plan.kind, "planning_helper");
    assert.equal(plan.durableOnePassEnforced, false);
    assert.equal(plan.windowsToConsider.length, 1);
    assert.equal(plan.windowsToConsider[0]?.wave, "Ship 05");
    assert.ok(plan.invalidSkipped.length >= 2);
    assert.equal(isOfflinePlanHonest(plan), true);
  });

  it("rejects impossible calendar dates and malformed timestamps", () => {
    assert.equal(isValidCalendarDate("2026-02-29"), false);
    assert.equal(isValidCalendarDate("2024-02-29"), true);
    assert.equal(isValidCalendarDate("2026-04-31"), false);
    assert.equal(isValidCalendarDate("2026-13-01"), false);
    assert.equal(parseInstantMs("2026-07-30T11:00:00"), null);
    assert.equal(parseInstantMs("2026-07-30T11:00:00+25:00"), null);
    assert.equal(parseInstantMs("2026-07-30T25:00:00+08:00"), null);

    const plan = planOfflineReconcile({
      nowIso: "2026-07-30T11:00:00+08:00",
      missedWindows: [
        { wave: "Ship 05", scheduledAt: "2026-02-29T05:00:00+08:00", cycleDate: "2026-02-29" },
        { wave: "Ship 05", scheduledAt: "2026-04-31T05:00:00+08:00", cycleDate: "2026-04-31" },
        { wave: "Ship 05", scheduledAt: "2026-07-30T05:00:00", cycleDate: "2026-07-30" },
      ],
      unresolvedFailureIds: [],
      lastReconcileAt: null,
    });
    assert.equal(plan.windowsToConsider.length, 0);
    assert.equal(plan.invalidSkipped.length, 3);
  });

  it("compares instants not lexicographic strings; accepts equivalent offsets", () => {
    // Same UTC instant: 03:00Z == 11:00+08:00. Lexicographically "2026-07-30T03:00:00Z" < now string
    // but must be treated as past relative to 11:00+08.
    const a = parseInstantMs("2026-07-30T03:00:00Z");
    const b = parseInstantMs("2026-07-30T11:00:00+08:00");
    assert.equal(a, b);

    // Future when expressed with different offset: 12:00 UTC vs now 11:00+08 (=03:00Z)
    const futurePlan = planOfflineReconcile({
      nowIso: "2026-07-30T11:00:00+08:00",
      missedWindows: [
        {
          wave: "Pull 07",
          scheduledAt: "2026-07-30T12:00:00Z",
          cycleDate: "2026-07-30",
        },
        {
          wave: "Ship 05",
          scheduledAt: "2026-07-30T05:00:00+08:00",
          cycleDate: "2026-07-30",
        },
      ],
      unresolvedFailureIds: [],
      lastReconcileAt: null,
    });
    assert.equal(futurePlan.windowsToConsider.length, 1);
    assert.equal(futurePlan.windowsToConsider[0]?.wave, "Ship 05");
    assert.equal(futurePlan.invalidSkipped.length, 1);
  });
});

describe.skip("Retired stage cron seed SOT", () => {
  it("keeps exactly six disabled jobs with correct heartbeat wall-clock expr", () => {
    const seed = JSON.parse(readFileSync(path.join(here, "jobs.stage-seed.json"), "utf8")) as {
      version: number;
      jobs: Array<{
        id: string;
        enabled: boolean;
        schedule: { expr: string; tz: string };
        delivery: { mode: string };
        payload: { toolsAllow: string[]; message: string; messageFile: string };
        payloadHash: string;
      }>;
      payloadHashes: Record<string, string>;
      notInstalledByDefault: Array<{ id: string }>;
      repairSupervision: { job: { id: string } };
    };
    assert.equal(seed.version, 2);
    assert.equal(seed.jobs.length, 6);
    assert.ok(seed.jobs.every((j) => j.enabled === false));
    assert.ok(seed.jobs.every((j) => j.schedule.tz === "Asia/Taipei"));
    assert.ok(seed.jobs.every((j) => j.delivery.mode === "none"));
    assert.ok(seed.jobs.every((j) => j.payload.message.includes("STAGE BOUNDED PROCEDURE")));
    assert.ok(seed.jobs.every((j) => !/^STAGE CANARY ONLY\b/m.test(j.payload.message)));
    const byId = new Map(seed.jobs.map((j) => [j.id, j]));
    assert.equal(byId.get("lisa-morning-digest")?.schedule.expr, "30 8 * * *");
    assert.equal(
      byId.get("lisa-heartbeat-45")?.schedule.expr,
      "45 0,2,4,6,10,12,14,16,18,20,22 * * *",
    );
    assert.ok(!byId.has("lisa-repair-dispatcher"));
    assert.equal(seed.notInstalledByDefault[0]?.id, "lisa-repair-dispatcher");
    assert.equal(seed.repairSupervision.job.id, "lisa-repair-dispatcher");
    for (const id of ["lisa-ship-05", "lisa-pull-07", "lisa-ship-16", "lisa-pull-18"]) {
      const tools = byId.get(id)?.payload.toolsAllow ?? [];
      assert.ok(tools.includes("sessions_wait"));
      assert.ok(!tools.includes("sessions_yield"));
      assert.equal(seed.payloadHashes[id], byId.get(id)?.payloadHash);
    }
  });
});
