# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 10 large files in this module.

## src/cron/service/jobs.ts (1538 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | fn | isFiniteTimestamp | (private) |
| 66 | fn | hasScheduledNextRunAtMs | pub |
| 71 | fn | resolveJobLastRunStatus | pub |
| 76 | fn | errorBackoffMs | pub |
| 88 | fn | resolveJobErrorBackoffUntilMs | pub |
| 108 | fn | resolveStableCronOffsetMs | (private) |
| 131 | fn | computeStaggeredCronNextRunAtMs | (private) |
| 159 | fn | computeStaggeredCronPreviousRunAtMs | (private) |
| 187 | fn | computeStaggeredCronPreviousRunAtOrBeforeMs | (private) |
| 208 | fn | isStaggeredCronRunAtMs | (private) |
| 216 | fn | isPendingErrorBackoffSlot | (private) |
| 227 | fn | shouldRepairFutureCronNextRunAtMs | (private) |
| 288 | fn | resolveEveryAnchorMs | (private) |
| 303 | fn | assertSupportedJobSpec | pub |
| 342 | fn | assertScriptPayloadSupport | (private) |
| 364 | fn | assertTriggerSupport | (private) |
| 383 | fn | assertPacingSupport | (private) |
| 393 | fn | assertCronExpressionSatisfiable | (private) |
| 405 | fn | assertMainSessionAgentId | (private) |
| 427 | fn | assertDeliverySupport | (private) |
| 473 | fn | hasConcreteFailureDestination | (private) |
| 485 | fn | assertFailureDestinationSupport | (private) |
| 510 | fn | findJobOrThrow | pub |
| 519 | fn | isJobEnabled | pub |
| 524 | fn | computeJobNextRunAtMs | pub |
| 570 | fn | computeJobPreviousRunAtMs | pub |
| 579 | fn | computeJobPreviousRunAtOrBeforeMs | pub |
| 591 | fn | recordScheduleComputeError | pub |
| 613 | fn | notify | (private) |
| 643 | fn | normalizeJobTickState | (private) |
| 757 | fn | walkSchedulableJobs | (private) |
| 781 | fn | recomputeJobNextRunAtMs | (private) |
| 828 | fn | recomputeNextRuns | pub |
| 859 | fn | recomputeNextRunsForMaintenance | pub |
| 871 | fn | recomputeJob | (private) |
| 958 | fn | nextWakeAtMs | pub |
| 977 | fn | createJob | pub |
| 1082 | fn | applyJobPatch | pub |
| 1235 | fn | applyDeclarativeJobSpec | pub |
| 1325 | fn | mergeCronDelivery | (private) |
| 1451 | fn | mergeCronFailureAlert | (private) |
| 1504 | fn | hasActiveCronRun | pub |
| 1513 | fn | isJobDue | pub |
| 1531 | fn | resolveJobPayloadTextForMain | pub |

## src/cron/service/ops.regression.test.ts (1065 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | expectQueuedRunAck | (private) |
| 47 | fn | requireMockCall | (private) |
| 59 | fn | expectIsolatedRunJobId | (private) |

## src/cron/service/ops.run-admission.test.ts (841 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | CronStateParams | (private) |
| 32 | fn | createAdmissionTestState | (private) |
| 41 | fn | expectQueuedRunAck | (private) |

## src/cron/service/ops.test.ts (1427 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | withStateDirForStorePath | (private) |
| 38 | fn | createTimedOutIsolatedCronState | (private) |
| 52 | fn | createOkIsolatedCronState | (private) |
| 73 | fn | createFutureEveryJob | (private) |
| 88 | fn | createInterruptedMainJob | (private) |
| 108 | fn | createDueIsolatedJob | (private) |
| 124 | fn | writeDueIsolatedJobSnapshot | (private) |
| 131 | fn | writeLegacyCronArraySnapshot | (private) |
| 136 | fn | insertCronJobRow | (private) |
| 172 | fn | expectDueIsolatedManualRunProgresses | (private) |
| 184 | fn | expectWarnedJob | (private) |
| 193 | fn | expectTaskRun | (private) |
| 209 | fn | findCronTaskByBaseRunId | (private) |
| 216 | fn | createMissedIsolatedJob | (private) |
| 1272 | fn | makeCreateInput | (private) |

## src/cron/service/ops.ts (1596 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 106 | fn | markManualCronJobActive | (private) |
| 117 | fn | clearManualCronJobActive | (private) |
| 129 | fn | maybeNotifyManualIsolatedSetupTimeout | (private) |
| 145 | fn | ensureLoadedForRead | (private) |
| 159 | fn | start | pub |
| 287 | fn | stop | pub |
| 295 | fn | pauseScheduling | pub |
| 300 | fn | resumeScheduling | pub |
| 320 | fn | status | pub |
| 335 | fn | list | pub |
| 345 | fn | readJob | pub |
| 352 | fn | resolveEnabledFilter | (private) |
| 359 | fn | resolveScheduleKindFilter | (private) |
| 372 | fn | resolveLastRunStatusFilter | (private) |
| 385 | fn | resolveJobLastRunStatus | (private) |
| 389 | fn | resolveEffectiveJobAgentId | (private) |
| 398 | fn | listPage | pub |
| 458 | fn | finalizeUpdatedJob | (private) |
| 530 | fn | persistUpdatedJob | (private) |
| 553 | fn | declarativeFields | (private) |
| 566 | fn | add | pub |
| 661 | fn | updateLoadedJob | (private) |
| 696 | fn | update | pub |
| 701 | fn | updateWithPrecondition | pub |
| 711 | fn | remove | pub |
| 741 | type | PreparedManualRun | (private) |
| 766 | type | ActivatedManualRun | (private) |
| 773 | type | ManualRunOptions | (private) |
| 780 | type | ManualRunTerminalTracker | (private) |
| 782 | fn | emitCronRunFinished | (private) |
| 803 | type | ManualRunDisposition | (private) |
| 807 | type | ManualRunPreflightResult | (private) |
| 819 | fn | skipInvalidPersistedManualRun | (private) |
| 879 | fn | inspectManualRunPreflight | (private) |
| 921 | fn | inspectManualRunDisposition | (private) |
| 938 | fn | prepareManualRun | (private) |
| 1007 | fn | cleanup | (private) |
| 1056 | fn | activatePreparedManualRun | (private) |
| 1169 | fn | releasePreparedManualReservation | (private) |
| 1194 | fn | releasePreparedManualReservationWithRetry | (private) |
| 1212 | fn | releasePreparedManualReservationAfterReloadWithRetry | (private) |
| 1216 | fn | attempt | (private) |
| 1234 | fn | finishPreparedManualRun | (private) |
| 1258 | fn | emitMissingQueuedTerminal | (private) |
| 1459 | fn | run | pub |
| 1502 | fn | enqueueRun | pub |
| 1590 | fn | wakeNow | pub |

## src/cron/service/store.test.ts (678 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | writeSingleJobStore | (private) |
| 22 | fn | writeJobStore | (private) |
| 29 | fn | expectPathMissing | (private) |
| 33 | fn | createStoreTestState | (private) |
| 46 | fn | createReloadCronJob | (private) |

## src/cron/service/task-runs.test.ts (701 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 678 | fn | createState | (private) |

## src/cron/service/timer.regression.test.ts (3825 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | type | CronStateParams | (private) |
| 55 | fn | createCronServiceState | (private) |
| 64 | fn | requireJob | (private) |
| 72 | fn | requireTimestamp | (private) |
| 79 | fn | requireRecord | (private) |
| 86 | fn | firstMockArg | (private) |
| 95 | fn | findCronTaskByBaseRunId | (private) |
| 103 | fn | installCronCancellationControlRuntime | (private) |
| 182 | fn | runRetryScenario | (private) |
| 1740 | fn | nowMs | (private) |

## src/cron/service/timer.test.ts (759 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | createDueMainJob | (private) |
| 37 | fn | createDueIsolatedAgentJob | (private) |
| 53 | fn | createDueCommandJob | (private) |
| 69 | fn | createDueScriptJob | (private) |
| 95 | fn | findCronTaskByBaseRunId | (private) |

## src/cron/service/timer.ts (2953 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 135 | type | TimedCronRunOutcome | (private) |
| 155 | type | CronJobRunResult | (private) |
| 164 | type | CronTriggerEvalOutcome | pub |
| 171 | type | IsolatedAgentSetupTimeoutSignal | pub |
| 177 | type | IsolatedAgentSetupTimeoutResult | (private) |
| 183 | type | CronCoreRunOutcome | (private) |
| 187 | type | StartupCatchupCandidate | (private) |
| 194 | type | StartupDeferredJob | (private) |
| 199 | type | StartupCatchupPlan | (private) |
| 204 | type | StartupCatchupExecution | (private) |
| 208 | type | ExecuteJobCoreOptions | (private) |
| 217 | fn | runsDetachedFromMainSession | pub |
| 229 | fn | cronRunAttributionFromExecution | (private) |
| 247 | fn | executeJobCoreWithTimeout | pub |
| 262 | fn | createOperatorCancellationOutcome | (private) |
| 292 | fn | accumulateExecution | (private) |
| 331 | fn | triggerTimeout | (private) |
| 345 | fn | noteLaneState | (private) |
| 408 | fn | notifyIsolatedAgentSetupTimeout | (private) |
| 437 | fn | maybeNotifyIsolatedAgentSetupTimeout | pub |
| 457 | fn | resolveMainSessionCronDeliveryContext | (private) |
| 488 | type | TransientCronRetryDecision | (private) |
| 496 | type | DisabledHeartbeatOneShotRetryDecision | (private) |
| 503 | type | QueuedSystemEventHandle | (private) |
| 508 | fn | resolveCronNextRunWithLowerBound | (private) |
| 529 | fn | resolveRetryConfig | (private) |
| 537 | fn | resolveTransientCronRetryDecision | (private) |
| 577 | fn | resolveDisabledHeartbeatOneShotRetryDecision | (private) |
| 598 | fn | normalizeQueuedSystemEventHandle | (private) |
| 613 | fn | removeQueuedSystemEventHandle | (private) |
| 631 | fn | shouldRetryDisabledHeartbeatOneShot | (private) |
| 644 | fn | isScheduledTerminalOneShotRetry | (private) |
| 669 | fn | resolveDeliveryState | (private) |
| 748 | fn | applyJobResult | pub |
| 954 | fn | computeNormalNext | (private) |
| 1091 | fn | applyTriggerEvaluationState | (private) |
| 1110 | fn | applyTriggerRunResult | pub |
| 1134 | fn | applyScriptRunResult | pub |
| 1146 | fn | applyTriggerNoFireResult | pub |
| 1187 | fn | applyOutcomeToStoredJob | (private) |
| 1250 | fn | armTimer | pub |
| 1316 | fn | armRunningRecheckTimer | (private) |
| 1331 | fn | onTimer | (private) |
| 1351 | fn | onAdmittedTimer | (private) |
| 1417 | fn | cleanup | (private) |
| 1602 | fn | releaseUnclaimedDueJobReservations | (private) |
| 1631 | fn | releaseUnclaimedDueJobReservationsWithRetry | (private) |
| 1849 | fn | isRunnableJob | (private) |
| 1929 | fn | isErrorBackoffPending | (private) |
| 1937 | fn | collectRunnableJobs | (private) |
| 1961 | fn | deferPendingBackoffMissedCronSlots | (private) |
| 2008 | fn | releaseStartupCatchupReservationsAfterFailure | (private) |
| 2013 | fn | attempt | (private) |
| 2045 | fn | runMissedJobs | pub |
| 2091 | fn | planStartupCatchup | (private) |
| 2186 | fn | executeStartupCatchupPlan | (private) |
| 2280 | fn | runStartupCatchupCandidate | (private) |
| 2337 | fn | applyStartupCatchupOutcomes | (private) |
| 2445 | fn | executeJobCore | (private) |
| 2463 | fn | resolveAbortError | (private) |
| 2467 | fn | waitWithAbort | (private) |
| 2482 | fn | onAbort | (private) |
| 2571 | fn | executeMainSessionCronJob | (private) |
| 2714 | fn | executeDetachedCronJob | (private) |
| 2831 | fn | executeScriptCronJob | (private) |
| 2900 | fn | emitJobFinished | (private) |
| 2940 | fn | stopTimer | pub |
