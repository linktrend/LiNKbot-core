# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 13 large files in this module.

## src/cron/isolated-agent/delivery-dispatch.double-announce.test.ts (2750 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 175 | type | SuccessfulDeliveryResolution | (private) |
| 176 | type | ResolvedOutboundSessionRoute | (private) |
| 184 | fn | makeResolvedDelivery | (private) |
| 198 | fn | makeWithRunSession | (private) |
| 208 | fn | makeBaseParams | (private) |
| 265 | fn | requireRecord | (private) |
| 272 | fn | outboundDeliveryCall | (private) |
| 280 | fn | expectFields | (private) |
| 286 | fn | expectDeliveryCall | (private) |
| 290 | fn | expectResultFields | (private) |
| 294 | fn | mockResolvedOutboundRoute | (private) |

## src/cron/isolated-agent/delivery-dispatch.ts (1584 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | fn | normalizeDeliveryTarget | (private) |
| 70 | type | NormalizedSilentReplyText | (private) |
| 75 | fn | normalizeSilentReplyText | (private) |
| 104 | fn | resolveCronDeliveryBestEffort | pub |
| 109 | type | SuccessfulDeliveryTarget | (private) |
| 111 | type | DispatchCronDeliveryParams | (private) |
| 146 | type | DirectCronTranscriptMirror | (private) |
| 159 | type | DispatchCronDeliveryState | (private) |
| 185 | type | CompletedDirectCronDelivery | (private) |
| 212 | fn | loadDeliveryOutboundRuntime | (private) |
| 218 | fn | loadOutboundSessionRuntime | (private) |
| 224 | fn | loadTranscriptRuntime | (private) |
| 230 | fn | loadDeliverySubagentRegistryRuntime | (private) |
| 236 | fn | loadDeliveryLoggerRuntime | (private) |
| 240 | fn | loadSubagentFollowupRuntime | (private) |
| 246 | fn | loadTtsRuntime | (private) |
| 250 | fn | logCronDeliveryWarn | (private) |
| 255 | fn | logCronDeliveryError | (private) |
| 261 | fn | cleanupDirectCronSession | pub |
| 281 | fn | logCronDeliveryErrorDeferred | (private) |
| 287 | fn | cloneDeliveryResults | (private) |
| 296 | fn | pruneCompletedDirectCronDeliveries | (private) |
| 320 | fn | resolveCronDeliveryScheduledAtMs | (private) |
| 325 | fn | resolveCronDeliveryStartDelayMs | (private) |
| 329 | fn | isStaleCronDelivery | (private) |
| 333 | fn | rememberCompletedDirectCronDelivery | (private) |
| 347 | fn | getCompletedDirectCronDelivery | (private) |
| 359 | fn | maybeApplyTtsToCronPayloads | (private) |
| 393 | fn | buildDirectCronDeliveryIdempotencyKey | (private) |
| 410 | fn | shouldQueueCronAwareness | (private) |
| 424 | fn | resolveCronAwarenessMainSessionKey | (private) |
| 433 | fn | isSameSessionKey | (private) |
| 439 | fn | resolveCronAwarenessText | (private) |
| 458 | fn | formatTargetCronDeliveryAwarenessText | (private) |
| 462 | fn | formatTargetCronDeliveryFailureAwarenessText | (private) |
| 485 | fn | queueCronAwarenessSystemEvent | (private) |
| 524 | fn | isCustomCronSessionTarget | (private) |
| 528 | fn | buildDirectCronTranscriptMirrorPayloads | (private) |
| 556 | fn | resolveDirectCronTranscriptMirrorText | (private) |
| 571 | fn | pickDirectCronMirrorPayloadText | (private) |
| 575 | fn | isTtsAudioMirrorOnly | (private) |
| 585 | fn | projectDeliveredDirectCronPayloadsForMirror | (private) |
| 608 | fn | canonicalizeDirectCronRouteSessionKey | (private) |
| 639 | fn | resolveCronDeliveryRouteSessionKey | (private) |
| 700 | fn | resolveDirectCronDeliverySessionKey | (private) |
| 723 | fn | resolveCronMessageToolAwarenessTarget | (private) |
| 772 | fn | queueCronMessageToolDeliveryAwareness | pub |
| 826 | fn | appendDirectCronDeliveryTranscriptMirror | (private) |
| 848 | fn | appendAdmittedDirectCronDeliveryTranscriptMirror | (private) |
| 918 | fn | resetCompletedDirectCronDeliveriesForTests | (private) |
| 923 | fn | getCompletedDirectCronDeliveriesCountForTests | (private) |
| 935 | fn | summarizeDirectCronDeliveryError | (private) |
| 949 | fn | isTransientDirectCronDeliveryError | (private) |
| 959 | fn | resolveDirectCronRetryDelaysMs | (private) |
| 965 | fn | retryTransientDirectCronDelivery | (private) |
| 975 | fn | runWithAbortCheck | (private) |
| 1002 | fn | dispatchCronDelivery | pub |
| 1028 | fn | formatDeliveryTargetError | (private) |
| 1032 | fn | failDeliveryTarget | (private) |
| 1216 | fn | runDelivery | (private) |

## src/cron/isolated-agent/delivery-target.test.ts (1614 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | fn | createStubOutbound | (private) |
| 87 | fn | createAllowlistAwareStubOutbound | (private) |
| 202 | fn | makeCfg | (private) |
| 210 | fn | makeForumBoundCfg | (private) |
| 227 | type | SessionStore | (private) |
| 229 | fn | setSessionStore | (private) |
| 233 | fn | setMainSessionEntry | (private) |
| 238 | fn | setLastSessionEntry | (private) |
| 255 | fn | resolveForAgent | (private) |
| 267 | fn | resolveLastTarget | (private) |

## src/cron/isolated-agent/delivery-target.ts (512 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | DeliveryTargetResolution | pub |
| 48 | fn | loadTargetsRuntime | (private) |
| 52 | fn | resolveOutboundTargetWithRuntime | (private) |
| 77 | fn | loadChannelSelectionRuntime | (private) |
| 81 | fn | loadDeliveryTargetRuntime | (private) |
| 85 | fn | isNonEmptyThreadId | (private) |
| 89 | fn | routesSharePeer | (private) |
| 99 | fn | shouldCarrySessionThread | (private) |
| 119 | fn | stripSelectedProviderPrefix | (private) |
| 131 | fn | shouldStripResolvedTargetProviderPrefix | (private) |
| 136 | fn | resolveDeliveryTarget | pub |

## src/cron/isolated-agent/run-executor.ts (839 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | type | AgentTurnPayload | (private) |
| 62 | type | CronPromptRunResult | (private) |
| 63 | type | CronEmbeddedRuntime | (private) |
| 64 | type | CronSubagentRegistryRuntime | (private) |
| 73 | fn | loadCronEmbeddedRuntime | (private) |
| 77 | fn | loadCronSubagentRegistryRuntime | (private) |
| 81 | fn | hasCliSessionReuseMetadata | (private) |
| 89 | fn | resolveIsolatedCronPromptCacheKey | (private) |
| 115 | fn | isCommandStyleCronMessage | (private) |
| 123 | fn | resolveCronBootstrapContextMode | (private) |
| 137 | fn | buildCronDeliveryTargetRuntimeContext | (private) |
| 186 | type | CronExecutionResult | pub |
| 196 | fn | createCronPromptExecutor | (private) |
| 301 | fn | currentAttemptCommittedMedia | (private) |
| 304 | fn | runPrompt | (private) |
| 614 | fn | executeCronRun | pub |

## src/cron/isolated-agent/run-session-state.test.ts (551 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | makeSessionEntry | (private) |
| 28 | fn | makeCronSession | (private) |
| 44 | fn | makeGuardedPersistSessionEntry | (private) |
| 542 | fn | createTranscriptFile | (private) |

## src/cron/isolated-agent/run.cron-model-override-forwarding.test.ts (1010 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | fn | makeJob | (private) |
| 48 | fn | makeParams | (private) |
| 59 | fn | makeSuccessfulRunResult | (private) |
| 77 | fn | createDeferred | (private) |
| 87 | fn | requireRecord | (private) |
| 94 | fn | firstMockArg | (private) |
| 98 | fn | hasPhaseWithFields | (private) |

## src/cron/isolated-agent/run.message-tool-policy.test.ts (2062 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | makeMessageToolPolicyJob | (private) |
| 49 | fn | makeAnnounceMessageToolJob | (private) |
| 66 | fn | makeParams | (private) |
| 76 | fn | makeAnnounceDeliveryPlan | (private) |
| 86 | fn | makeResolvedAnnounceTarget | (private) |
| 98 | fn | makeMessageToolRunResult | (private) |
| 107 | fn | mockPendingMessagePresentationWarningOutcome | (private) |
| 121 | fn | requireRecord | (private) |
| 128 | fn | expectRecordFields | (private) |
| 140 | fn | getMockCallArg | (private) |
| 153 | fn | expectEmbeddedRunFields | (private) |
| 161 | fn | expectEmbeddedRunPrompt | (private) |
| 169 | fn | expectEmbeddedTranscriptPrompt | (private) |
| 177 | fn | expectDispatchFields | (private) |
| 185 | fn | expectDeliveryFields | (private) |
| 195 | fn | expectMessageToolDisabledForPlan | (private) |
| 211 | fn | expectMessageToolEnabledForPlan | (private) |
| 227 | fn | runModeNoneDeliveryCase | (private) |
| 255 | fn | expectCronFallbackSkippedForMessageToolDelivery | (private) |
| 340 | fn | createMessageToolExecutor | (private) |
| 1114 | fn | releaseFirst | (private) |
| 1115 | fn | releaseSecond | (private) |
| 1116 | fn | markFirstStarted | (private) |
| 1117 | fn | markSecondStarted | (private) |

## src/cron/isolated-agent/run.source-delivery-guard.test.ts (513 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | makeJob | (private) |
| 47 | fn | makeExecutor | (private) |
| 63 | fn | getEmbeddedRunArg | (private) |
| 424 | fn | makeExecuteCronRunParams | (private) |

## src/cron/isolated-agent/run.test-harness.ts (840 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | CronSessionEntry | (private) |
| 19 | type | CronSession | (private) |
| 29 | type | SessionAccessorModule | (private) |
| 34 | fn | createMock | (private) |
| 38 | fn | normalizeModelSelectionForTest | (private) |
| 49 | fn | usesRealAccessorStore | (private) |
| 204 | fn | normalize | (private) |
| 409 | fn | makeCronSessionEntry | pub |
| 419 | fn | makeCronSession | pub |
| 439 | fn | makeDefaultModelFallbackResult | (private) |
| 450 | fn | makeDefaultEmbeddedResult | (private) |
| 457 | fn | mockRunCronFallbackPassthrough | pub |
| 464 | fn | resetRunConfigMocks | (private) |
| 571 | fn | resetRunExecutionMocks | (private) |
| 600 | fn | resetRunOutcomeMocks | (private) |
| 736 | fn | resetRunSessionMocks | (private) |
| 768 | fn | installPatchSessionEntryStore | (private) |
| 769 | type | PatchRow | (private) |
| 806 | fn | resetRunCronIsolatedAgentTurnHarness | pub |
| 822 | fn | clearFastTestEnv | pub |
| 828 | fn | restoreFastTestEnv | pub |
| 836 | fn | loadRunCronIsolatedAgentTurn | pub |

## src/cron/isolated-agent/run.ts (1944 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 168 | fn | loadSessionAccessorRuntime | (private) |
| 172 | fn | loadCronExecutorRuntime | (private) |
| 176 | fn | loadCronExternalContentRuntime | (private) |
| 180 | fn | loadCronAuthProfileRuntime | (private) |
| 184 | fn | loadCronContextRuntime | (private) |
| 188 | fn | loadCronModelCatalogRuntime | (private) |
| 192 | fn | loadCronDeliveryRuntime | (private) |
| 196 | fn | loadCronModelPreflightRuntime | (private) |
| 200 | fn | loadRuntimePlugins | (private) |
| 204 | fn | loadCodexNativeWebSearch | (private) |
| 208 | fn | loadWebToolRuntimeContext | (private) |
| 212 | fn | loadWebSearchRuntime | (private) |
| 216 | fn | hasConfiguredAuthProfiles | (private) |
| 223 | fn | isCronNestedLaneTaskTimeoutError | (private) |
| 227 | fn | retireRolledCronSessionMcpRuntime | (private) |
| 250 | type | CronExecutionRuntime | (private) |
| 251 | type | CronExecutionResult | (private) |
| 252 | type | CronModelCatalogRuntime | (private) |
| 253 | type | CronDeliveryRuntime | (private) |
| 254 | type | ResolvedCronDeliveryTarget | (private) |
| 256 | fn | normalizeCronTraceTarget | (private) |
| 271 | fn | normalizeMessagingToolTarget | (private) |
| 292 | fn | buildResolvedCronTraceTarget | (private) |
| 320 | fn | buildCronDeliveryTrace | (private) |
| 354 | fn | canPromptForMessageTool | (private) |
| 371 | fn | createCronToolsAllowPreflightDiagnostics | (private) |
| 431 | fn | resolveCronDeliveryContext | (private) |
| 493 | fn | appendCronDeliveryInstruction | (private) |
| 519 | fn | appendCronUnattendedRunPreamble | (private) |
| 526 | fn | resolvePositiveContextTokens | (private) |
| 530 | fn | loadCliRunnerRuntime | (private) |
| 534 | fn | loadUsageFormatRuntime | (private) |
| 538 | type | RunCronAgentTurnParams | (private) |
| 553 | fn | resolveCronAgentTurnMessage | (private) |
| 560 | type | WithRunSession | (private) |
| 564 | type | PreparedCronRunContext | (private) |
| 607 | type | CronPreparationResult | (private) |
| 611 | fn | prepareCronRunContext | (private) |
| 642 | fn | loadCatalog | (private) |
| 725 | fn | currentRunSessionId | (private) |
| 737 | fn | persistCronSessionRow | (private) |
| 1173 | fn | finalizeCronRun | (private) |
| 1411 | fn | resolveRunOutcome | (private) |
| 1442 | fn | failPendingPresentationWarningUnlessDelivered | (private) |
| 1656 | fn | disposeCronRunContext | (private) |
| 1678 | fn | runCronIsolatedAgentTurn | pub |
| 1698 | fn | isAborted | (private) |
| 1699 | fn | abortReason | (private) |
| 1716 | fn | notifyExecutionStarted | (private) |
| 1731 | fn | notifyExecutionPhase | (private) |
| 1747 | fn | messageLifecycle | (private) |

## src/cron/isolated-agent/session.test.ts (560 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | SessionStore | (private) |
| 33 | type | MockSessionStoreEntry | (private) |
| 35 | fn | resolveWithStoredEntry | (private) |

## src/cron/isolated-agent/subagent-followup.test.ts (523 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | resolveAfterAdvancingTimers | (private) |
| 42 | fn | createDescendantRun | (private) |
