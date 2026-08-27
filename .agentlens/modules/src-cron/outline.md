# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 13 large files in this module.

## src/cron/isolated-agent.direct-delivery-core-channels.test.ts (565 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | ChannelCase | (private) |
| 71 | fn | runExplicitAnnounceTurn | (private) |
| 94 | type | CoreChannelSendFn | (private) |
| 95 | type | MockedTestSendFn | (private) |
| 99 | fn | expectCoreChannelSendCall | (private) |
| 120 | fn | expectCoreChannelAnnounceDelivery | (private) |
| 156 | type | CoreChannel | (private) |
| 157 | type | TestSendFn | (private) |
| 163 | fn | withRequiredMessageId | (private) |
| 174 | fn | resolveCoreChannelSender | (private) |
| 185 | fn | createCliDelegatingOutbound | (private) |
| 215 | fn | makeRunMeta | (private) |
| 223 | fn | expectTelegramAnnounceDelivery | (private) |
| 257 | fn | setupCoreChannelMocks | (private) |

## src/cron/isolated-agent.model-formatting.test.ts (795 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | type | AgentTurnPayload | (private) |
| 74 | type | SelectModelOptions | (private) |
| 87 | fn | parseModelRef | (private) |
| 105 | fn | resolveConfiguredModelForTest | (private) |
| 130 | fn | defaultPayload | (private) |
| 137 | fn | selectModel | (private) |
| 153 | fn | expectSelectedModel | (private) |
| 161 | fn | expectDefaultSelectedModel | (private) |

## src/cron/normalize.test.ts (1133 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | expectNormalizedAtSchedule | (private) |
| 29 | fn | expectAnnounceDeliveryTarget | (private) |
| 38 | fn | normalizeIsolatedAgentTurnCreateJob | (private) |
| 58 | fn | normalizeMainSystemEventCreateJob | (private) |

## src/cron/normalize.ts (534 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | UnknownRecord | (private) |
| 26 | type | NormalizeOptions | (private) |
| 36 | fn | coerceSchedule | (private) |
| 133 | fn | coerceTrigger | (private) |
| 142 | fn | coerceDelivery | (private) |
| 207 | fn | coerceCompletionDestination | (private) |
| 219 | fn | coerceFailureDestination | (private) |
| 280 | fn | normalizeSessionTarget | (private) |
| 297 | fn | normalizeWakeMode | (private) |
| 309 | fn | normalizeCronJobInput | pub |
| 515 | fn | normalizeCronJobCreate | pub |
| 526 | fn | normalizeCronJobPatch | pub |

## src/cron/service.failure-alert.test.ts (652 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | CronServiceParams | (private) |
| 17 | fn | makeStorePath | (private) |
| 27 | fn | createFailureAlertCron | (private) |
| 45 | fn | alertCallArg | (private) |
| 56 | fn | expectAlertFields | (private) |
| 68 | fn | expectAlertTextContaining | (private) |

## src/cron/service.jobs.test.ts (1669 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | expectCronStaggerMs | (private) |
| 820 | fn | createMockState | (private) |
| 838 | fn | input | (private) |
| 948 | fn | mainJobInput | (private) |
| 1215 | fn | createCronJob | (private) |

## src/cron/service.persists-delivered-status.test.ts (515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | CronAddInput | (private) |
| 18 | fn | buildIsolatedAgentTurnJob | (private) |
| 30 | fn | buildAnnounceIsolatedAgentTurnJob | (private) |
| 37 | fn | buildAnnounceWithFailureDestinationJob | (private) |
| 52 | fn | buildFailureDestinationOnlyJob | (private) |
| 65 | fn | buildBestEffortFailureDestinationOnlyJob | (private) |
| 79 | fn | buildMainSessionSystemEventJob | (private) |
| 90 | fn | createIsolatedCronWithFinishedBarrier | (private) |
| 140 | fn | runSingleJobAndReadState | (private) |
| 156 | fn | expectSuccessfulCronRun | (private) |
| 171 | fn | expectDeliveryNotRequested | (private) |
| 194 | fn | runIsolatedJobAndReadState | (private) |

## src/cron/service.restart-catchup.test.ts (1010 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | writeStoreJobs | (private) |
| 21 | fn | createRestartCronService | (private) |
| 47 | fn | createOverdueEveryJob | (private) |
| 62 | fn | createOverdueIsolatedEveryJob | (private) |
| 70 | fn | createOverdueCronJob | (private) |
| 85 | fn | createOverdueDisabledHeartbeatOneShotRetry | (private) |
| 107 | fn | expectQueuedSystemEvent | (private) |
| 117 | fn | expectInterruptedJobEvent | (private) |
| 129 | fn | withRestartedCron | (private) |

## src/cron/service.runs-one-shot-main-job-disables-it.test.ts (764 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | expectCronRunSessionKey | (private) |
| 35 | fn | createCronEventHarness | (private) |
| 42 | fn | onEvent | (private) |
| 53 | fn | waitFor | (private) |
| 67 | type | CronHarnessOptions | (private) |
| 78 | fn | createCronHarness | (private) |
| 128 | fn | createMainOneShotHarness | (private) |
| 136 | fn | createIsolatedAnnounceHarness | (private) |
| 148 | fn | createWakeModeNowMainHarness | (private) |
| 163 | fn | addDefaultIsolatedAnnounceJob | (private) |
| 177 | fn | runIsolatedAnnounceJobAndWait | (private) |
| 192 | fn | runIsolatedAnnounceScenario | (private) |
| 206 | fn | addWakeModeNowMainSystemEventJob | (private) |
| 222 | fn | addMainOneShotHelloJob | (private) |
| 237 | fn | expectMainSystemEventPosted | (private) |
| 253 | fn | expectQueuedCronHeartbeat | (private) |
| 268 | fn | getPostedSystemEventSessionKeys | (private) |
| 274 | fn | expectNoQueuedEvents | (private) |
| 280 | fn | stopCronAndCleanup | (private) |
| 287 | fn | createStartedCronService | (private) |
| 301 | fn | createMainOneShotJobHarness | (private) |
| 312 | fn | expectNoMainSummaryForIsolatedRun | (private) |
| 426 | fn | nowMs | (private) |
| 491 | fn | nowMs | (private) |

## src/cron/session-reaper.test.ts (515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | createTestLogger | (private) |
| 34 | fn | seedSessionEntries | (private) |
| 43 | fn | readSessionEntries | (private) |

## src/cron/store.test.ts (1276 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | makeStorePath | (private) |
| 46 | fn | makeStore | (private) |
| 67 | fn | expectPathMissing | (private) |
| 77 | fn | requireRecord | (private) |

## src/cron/trigger-script.test.ts (537 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | EvaluatorDeps | (private) |
| 10 | type | HeadlessParams | (private) |
| 11 | type | PrepareParams | (private) |
| 15 | fn | completed | (private) |
| 24 | fn | abortReason | (private) |
| 29 | fn | createPreparedRuntime | (private) |
| 52 | fn | createEvaluator | (private) |
| 67 | fn | createCronTriggerEvaluator | (private) |

## src/cron/trigger-script.ts (629 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | type | AssertTriggerCodesCoverHeadless | (private) |
| 70 | type | PreparedTriggerRuntime | (private) |
| 76 | type | PrepareTriggerRuntime | (private) |
| 84 | type | CronTriggerEvaluatorDeps | (private) |
| 90 | type | TriggerRuntimeCacheEntry | (private) |
| 97 | fn | resolveTriggerAgentId | (private) |
| 101 | fn | prepareTriggerRuntime | (private) |
| 198 | fn | triggerStateNamespace | (private) |
| 209 | fn | triggerResultCandidate | (private) |
| 222 | fn | scriptPayloadResultCandidate | (private) |
| 237 | fn | parseTriggerResult | (private) |
| 267 | fn | createHeadlessDeadlineScope | (private) |
| 273 | fn | onExternalAbort | (private) |
| 293 | fn | awaitTriggerSignal | (private) |
| 312 | fn | createCronCodeModeRunner | (private) |
| 319 | fn | trimRuntimeCache | (private) |
| 461 | type | CronScriptPayloadExecutionResult | (private) |
| 472 | fn | validateCronState | (private) |
| 507 | fn | parseScriptPayloadResult | (private) |
| 573 | fn | createCronScriptRuntime | pub |
