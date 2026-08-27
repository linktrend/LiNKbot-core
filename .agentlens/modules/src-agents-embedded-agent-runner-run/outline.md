# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 33 large files in this module.

## src/agents/embedded-agent-runner/run/assistant-failover.test.ts (773 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | Params | (private) |
| 8 | type | Outcome | (private) |
| 10 | fn | makeParams | (private) |
| 56 | fn | expectThrownFailoverError | (private) |

## src/agents/embedded-agent-runner/run/attempt-tool-construction-plan.test.ts (563 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | EmbeddedAttemptToolConstructionPlan | (private) |
| 15 | fn | expectConstructionPlan | (private) |
| 134 | fn | toolMeta | (private) |
| 165 | fn | toolMeta | (private) |

## src/agents/embedded-agent-runner/run/attempt.llm-boundary.cache-stability.test.ts (646 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | AgentMsg | (private) |
| 54 | fn | storedUserMsg | (private) |
| 63 | fn | currentUserMsg | (private) |
| 80 | fn | requiredTimestampPrefix | (private) |
| 109 | fn | captureOpenAICompletionsPayload | (private) |
| 135 | fn | captureOpenAIResponsesPayload | (private) |
| 161 | fn | firstTwoProviderMessages | (private) |
| 474 | fn | runtimeCarrier | (private) |
| 485 | fn | isCarrier | (private) |
| 493 | fn | textOf | (private) |
| 508 | fn | wire | (private) |

## src/agents/embedded-agent-runner/run/attempt.llm-boundary.test.ts (1079 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 169 | fn | image | (private) |
| 172 | fn | userImage | (private) |
| 1059 | fn | originalTransform | (private) |

## src/agents/embedded-agent-runner/run/attempt.llm-boundary.ts (612 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | LlmBoundaryOptions | (private) |
| 43 | fn | normalizeMessagesForLlmBoundary | pub |
| 67 | fn | normalizeMessagesForCurrentPromptBoundary | pub |
| 78 | fn | normalizeCurrentPromptTextForLlmBoundary | pub |
| 91 | fn | buildCurrentPromptBoundaryInput | (private) |
| 125 | fn | installRuntimeContextMessageForPrompt | pub |
| 139 | fn | installBeforePrompt | (private) |
| 147 | fn | installBeforeRetry | (private) |
| 174 | fn | appendRuntimeContextMessageForPrompt | (private) |
| 189 | fn | insertRuntimeContextMessageForPrompt | (private) |
| 207 | fn | replaceLastUserTextPrompt | (private) |
| 267 | fn | composeModelPromptContext | (private) |
| 281 | fn | installModelPromptTransform | pub |
| 363 | fn | canonicalizeTextOnlyUserContent | (private) |
| 402 | fn | stampUserTextWithMessageTimestamp | (private) |
| 437 | fn | messageContentMatchesCurrentUserText | (private) |
| 447 | fn | messageRuntimeTimestampMatchesCurrentUserOverride | (private) |
| 460 | fn | stripHistoricalInboundMetadataFromUserMessages | (private) |
| 581 | fn | stripUnsafeBlockedRunMetadata | (private) |

## src/agents/embedded-agent-runner/run/attempt.model-diagnostic-events.test.ts (1259 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | collectModelCallEvents | (private) |
| 52 | fn | collectTrustedModelCallEvents | (private) |
| 78 | fn | drain | (private) |
| 86 | fn | isRecord | (private) |
| 90 | fn | requireRecord | (private) |
| 97 | fn | readRecordField | (private) |
| 105 | fn | expectNumberField | (private) |
| 109 | fn | getEvent | (private) |
| 113 | fn | requireMockRecordArg | (private) |
| 122 | fn | collectProviderTimelineEvents | (private) |

## src/agents/embedded-agent-runner/run/attempt.model-diagnostic-events.ts (896 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | ModelCallDiagnosticContext | (private) |
| 59 | type | ModelCallEventBase | (private) |
| 63 | type | ModelCallErrorFields | (private) |
| 67 | type | ModelCallEndedHookFields | (private) |
| 78 | type | ModelCallSizeTimingFields | (private) |
| 82 | type | ModelCallPromptStats | (private) |
| 85 | type | ModelCallUsage | (private) |
| 88 | type | ModelCallObservationState | (private) |
| 105 | type | ModelCallStreamOptions | (private) |
| 107 | fn | utf8JsonByteLength | (private) |
| 115 | fn | assignRequestPayloadBytes | (private) |
| 122 | fn | utf8StringByteLength | (private) |
| 126 | fn | jsonCharLength | (private) |
| 134 | fn | streamDeltaByteLength | (private) |
| 145 | fn | responseStreamChunkByteLengthUnchecked | (private) |
| 162 | fn | responseStreamChunkByteLength | (private) |
| 170 | fn | streamContextModelContentFields | (private) |
| 191 | fn | streamContextModelPromptStats | (private) |
| 223 | fn | normalizedModelCallUsage | (private) |
| 238 | fn | observeModelCallUsage | (private) |
| 254 | fn | observeOutputMessageContent | (private) |
| 278 | fn | observeResultMessageContent | (private) |
| 296 | fn | observeResponseChunk | (private) |
| 309 | fn | maybeEmitModelCallStreamProgress | (private) |
| 342 | fn | modelCallSizeTimingFields | (private) |
| 354 | fn | isPromiseLike | (private) |
| 365 | fn | asyncIteratorFactory | (private) |
| 380 | fn | baseModelCallEvent | (private) |
| 406 | fn | modelContentPrivateData | (private) |
| 410 | fn | modelCallCompletedContent | (private) |
| 420 | fn | modelCallUsageField | (private) |
| 424 | fn | boundedTimelineAttribute | (private) |
| 428 | fn | emitProviderRequestTimelineEvent | (private) |
| 456 | fn | modelCallErrorFields | (private) |
| 466 | fn | processMemoryUsageSnapshot | (private) |
| 481 | fn | modelCallHookEventBase | (private) |
| 501 | fn | modelCallHookContext | (private) |
| 519 | fn | dispatchModelCallStartedHook | (private) |
| 532 | fn | dispatchModelCallEndedHook | (private) |
| 551 | fn | emitModelCallStarted | (private) |
| 565 | fn | emitModelCallCompleted | (private) |
| 594 | fn | emitModelCallError | (private) |
| 626 | fn | withDiagnosticRequestContext | (private) |
| 674 | fn | safeReturnIterator | (private) |
| 747 | fn | observeModelCallFinalResult | (private) |
| 758 | fn | createObservedResultFunction | (private) |
| 788 | fn | observeModelCallStream | (private) |
| 795 | fn | observedIterator | (private) |
| 825 | fn | observeModelCallResult | (private) |
| 850 | fn | wrapStreamFnWithDiagnosticModelCallEvents | pub |

## src/agents/embedded-agent-runner/run/attempt.prompt-helpers.ts (639 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | PromptBuildHookRunner | (private) |
| 68 | fn | rememberDrainedInjections | (private) |
| 87 | fn | forgetPromptBuildDrainCacheForRun | pub |
| 98 | fn | resolvePromptBuildHookResult | pub |
| 198 | fn | resolvePromptModeForSession | pub |
| 210 | fn | shouldInjectHeartbeatPrompt | pub |
| 233 | fn | shouldWarnOnOrphanedUserRepair | pub |
| 248 | fn | summarizeStructuredMediaRef | (private) |
| 267 | fn | summarizeStructuredJsonString | (private) |
| 279 | fn | sanitizeStructuredJsonValue | (private) |
| 332 | fn | stringifyStructuredJsonFallback | (private) |
| 350 | fn | stringifyStructuredContentPart | (private) |
| 388 | fn | extractUserMessagePromptText | (private) |
| 406 | fn | promptAlreadyIncludesQueuedUserMessage | (private) |
| 421 | fn | shouldDropStaleInternalOrphanedUserPrompt | (private) |
| 436 | fn | mergeOrphanedTrailingUserPrompt | pub |
| 464 | fn | resolveAttemptFsWorkspaceOnly | pub |
| 474 | fn | prependSystemPromptAddition | pub |
| 485 | fn | resolveAttemptMediaTaskSystemPromptAddition | pub |
| 499 | type | AfterTurnRuntimeContextAttempt | (private) |
| 529 | fn | resolveRuntimeContextSessionTarget | (private) |
| 556 | fn | buildAfterTurnRuntimeContext | pub |
| 630 | fn | buildAfterTurnRuntimeContextFromUsage | pub |

## src/agents/embedded-agent-runner/run/attempt.session-lock.test.ts (3808 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | fn | createTempSessionFile | (private) |
| 63 | fn | waitUntil | (private) |
| 75 | fn | cloneBigIntStatWith | (private) |
| 2122 | fn | readSnapshot | (private) |

## src/agents/embedded-agent-runner/run/attempt.session-lock.ts (2216 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | SessionLock | (private) |
| 32 | type | AcquireSessionWriteLock | (private) |
| 33 | type | PhysicalWriteLockScope | (private) |
| 38 | type | ActiveWriteLockState | (private) |
| 52 | type | RootWriteLockState | (private) |
| 54 | fn | createActiveWriteLockScope | (private) |
| 76 | fn | trackWriteLockOperation | (private) |
| 94 | fn | drainWriteLockScope | (private) |
| 100 | type | LockOptions | (private) |
| 109 | type | SessionWithAgentPrompt | (private) |
| 115 | type | PromptReleaseStreamFn | (private) |
| 119 | type | SessionFileFingerprint | (private) |
| 130 | type | TrustedSessionFileSnapshot | (private) |
| 139 | type | SessionFileFenceSnapshot | (private) |
| 145 | type | SessionFileHandle | (private) |
| 147 | fn | sessionFileFingerprintFromStat | (private) |
| 158 | fn | sameSessionFileFingerprint | (private) |
| 177 | fn | sameSessionFileIdentity | (private) |
| 184 | fn | sameSessionFileIdentityAndSize | (private) |
| 197 | fn | splitSessionFileLines | (private) |
| 201 | fn | isJsonRecord | (private) |
| 205 | fn | parsePromptReleasedMessageLine | (private) |
| 249 | fn | hasSessionEntryBase | (private) |
| 259 | type | PromptReleasedSessionMetadataEntry | (private) |
| 261 | type | PromptReleasedOpaqueEntry | (private) |
| 268 | type | PromptReleasedSessionEntry | (private) |
| 273 | type | PromptReleasedSessionMergeResult | (private) |
| 279 | fn | parsePromptReleasedGlobalMetadataLine | (private) |
| 332 | fn | parsePromptReleasedOpaqueLine | (private) |
| 343 | fn | parsePromptReleasedSideLeafControlLine | (private) |
| 366 | type | PromptReleasedSessionChange | (private) |
| 383 | fn | classifyPromptReleasedSessionLines | (private) |
| 502 | fn | haveSamePublishedEntries | (private) |
| 520 | fn | normalizeTranscriptEntryId | (private) |
| 524 | fn | omitRecordKeys | (private) |
| 537 | fn | lineMatchesLinearTranscriptMigration | (private) |
| 586 | fn | readAppendedSessionFileText | (private) |
| 616 | fn | readSessionFileFenceSnapshot | (private) |
| 670 | fn | readSessionFileBytes | (private) |
| 686 | fn | readSessionFileDigest | (private) |
| 705 | fn | classifySessionFenceAdvance | (private) |
| 734 | fn | classifyOwnedSessionFileInitialization | (private) |
| 789 | fn | readByteIdenticalSessionFenceSnapshot | (private) |
| 816 | fn | classifySessionFenceRewrite | (private) |
| 867 | fn | classifySessionFenceChange | (private) |
| 886 | type | OwnedSessionFileWrite | (private) |
| 893 | type | OwnedSessionFileWriteHistory | (private) |
| 898 | type | TrustedSessionFileState | (private) |
| 912 | fn | resolveSessionFileFenceKey | (private) |
| 916 | type | SessionFileOwnerWaiter | (private) |
| 924 | type | SessionFileOwnerEntry | (private) |
| 929 | type | SessionFileOwnerState | (private) |
| 944 | type | EmbeddedAttemptSessionFileOwner | pub |
| 949 | class | EmbeddedAttemptSessionFileOwnerTimeoutError | (private) |
| 956 | fn | abortReason | (private) |
| 960 | fn | abortOwnerWaitReason | (private) |
| 964 | fn | resolveSessionFileOwnerWaitTimeoutMs | (private) |
| 971 | fn | waitForSessionFileOwnerRelease | (private) |
| 988 | fn | cleanup | (private) |
| 1024 | fn | acquireEmbeddedAttemptSessionFileOwner | pub |
| 1064 | fn | resetEmbeddedAttemptSessionFileOwnersForTest | (private) |
| 1086 | fn | resolveOwnedSessionFileWriteHistory | (private) |
| 1099 | fn | pruneOwnedSessionFileWriteHistory | (private) |
| 1111 | fn | recordOwnedSessionFileWrite | (private) |
| 1131 | fn | recordTrustedSessionFileState | (private) |
| 1144 | fn | trustSessionFileState | (private) |
| 1162 | fn | isTrustedSessionFileState | (private) |
| 1170 | fn | readSessionFileFingerprint | (private) |
| 1184 | fn | readSessionFileFingerprintSync | (private) |
| 1198 | fn | waitForSessionEventQueue | (private) |
| 1200 | class | EmbeddedAttemptSessionTakeoverError | pub |
| 1207 | type | EmbeddedAttemptSessionLockController | pub |
| 1230 | fn | createEmbeddedAttemptSessionLockController | pub |
| 1275 | fn | runLockLifecycle | (private) |
| 1284 | fn | setFenceGeneration | (private) |
| 1294 | fn | activateFence | (private) |
| 1299 | fn | deactivateFence | (private) |
| 1312 | fn | mergePromptReleasedSessionChange | (private) |
| 1374 | fn | reloadPromptReleasedSessionFile | (private) |
| 1394 | fn | beginRetainedLockUse | (private) |
| 1413 | fn | waitForRetainedLockIdle | (private) |
| 1426 | fn | acquireWriteLock | (private) |
| 1445 | fn | waitForHeldLockDrain | (private) |
| 1456 | fn | beginHeldLockDrain | (private) |
| 1470 | fn | finishHeldLockDrain | (private) |
| 1486 | fn | assertSessionFileFence | (private) |
| 1595 | fn | refreshSessionFileFence | (private) |
| 1606 | fn | captureOwnedSessionFileWriteStart | (private) |
| 1618 | fn | publishOwnedSessionFileFence | (private) |
| 1665 | fn | publishOwnedSessionFileFenceSync | (private) |
| 1701 | fn | releaseHeldLockWithFence | (private) |
| 1739 | fn | takeHeldLockAfterRetainedIdle | (private) |
| 1761 | fn | disposeHeldLockAfterRetainedIdle | (private) |
| 1783 | fn | releaseHeldLockAfterTakeover | (private) |
| 1790 | fn | acquireCleanupLock | (private) |
| 1807 | fn | runWithPhysicalWriteLockScope | (private) |
| 1846 | fn | runWithRetainedLock | (private) |
| 1853 | fn | runPublishingOwnedSessionFileWrite | (private) |
| 1863 | fn | nestedPublication | (private) |
| 1885 | fn | publication | (private) |
| 1944 | fn | runInheritedWriteLockOperation | (private) |
| 1948 | fn | operation | (private) |
| 1952 | fn | withSessionWriteLock | (private) |
| 1975 | fn | runLockedOperation | (private) |
| 2168 | fn | installPromptSubmissionLockRelease | pub |

## src/agents/embedded-agent-runner/run/attempt.spawn-workspace.context-engine.test.ts (3785 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | type | AfterTurnPromptCacheCall | (private) |
| 63 | type | TrajectoryEvent | (private) |
| 64 | type | ToolResultGuardInstallParams | (private) |
| 69 | type | MockCallSource | (private) |
| 75 | fn | readTrajectoryEvents | (private) |
| 83 | fn | requireRecord | (private) |
| 90 | fn | requireRecords | (private) |
| 95 | fn | sumToolResultTextChars | (private) |
| 123 | fn | findRecord | (private) |
| 135 | fn | mockArg | (private) |
| 146 | fn | mockParams | (private) |
| 150 | fn | expectFields | (private) |
| 156 | fn | trackSessionWriteLocks | (private) |
| 172 | fn | expectInitialLockReleasedBeforePostTurnWrite | (private) |
| 178 | fn | createTestContextEngine | (private) |
| 195 | fn | runBootstrap | (private) |
| 216 | fn | runAssemble | (private) |
| 232 | fn | finalizeTurn | (private) |
| 685 | fn | appendSessionMessage | (private) |
| 1282 | fn | transformContext | (private) |
| 1349 | fn | transformContext | (private) |
| 1411 | fn | transformContext | (private) |
| 2023 | fn | transformContext | (private) |
| 2085 | fn | transformContext | (private) |
| 2246 | fn | transformContext | (private) |

## src/agents/embedded-agent-runner/run/attempt.spawn-workspace.test-support.ts (1437 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | SubscribeEmbeddedAgentSessionFn | (private) |
| 39 | type | AcquireSessionWriteLockFn | (private) |
| 41 | type | ShouldPreemptivelyCompactBeforePromptFn | (private) |
| 44 | type | SubscriptionMock | (private) |
| 45 | type | UnknownMock | (private) |
| 46 | type | AsyncUnknownMock | (private) |
| 47 | type | AsyncContextEngineMaintenanceMock | (private) |
| 50 | type | BootstrapContext | (private) |
| 54 | type | CapturedTrajectoryEvent | (private) |
| 60 | fn | normalizeMockProviderId | (private) |
| 66 | type | SessionManagerMocks | (private) |
| 83 | type | AttemptSpawnWorkspaceHoisted | (private) |
| 125 | fn | createSubscriptionMock | (private) |
| 292 | fn | getHoisted | pub |
| 386 | fn | AuthStorage | (private) |
| 387 | class | DefaultResourceLoader | (private) |
| 393 | fn | ModelRegistry | (private) |
| 394 | fn | estimateTokens | (private) |
| 954 | type | MutableSession | (private) |
| 990 | type | SessionPromptOverride | (private) |
| 996 | type | TestAgentStream | (private) |
| 1001 | fn | createCompletedAssistantStream | (private) |
| 1021 | fn | preloadRunEmbeddedAttemptForTests | pub |
| 1025 | fn | resetEmbeddedAttemptHarness | pub |
| 1135 | fn | cleanupTempPaths | pub |
| 1144 | fn | createDefaultEmbeddedSession | pub |
| 1232 | fn | createContextEngineBootstrapAndAssemble | pub |
| 1244 | fn | expectCalledWithSessionKey | pub |
| 1260 | fn | createContextEngineAttemptRunner | pub |

## src/agents/embedded-agent-runner/run/attempt.test.ts (3570 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | fn | resolveEmbeddedAgentStreamFn | (private) |
| 52 | type | FakeWrappedStream | (private) |
| 57 | fn | createFakeStream | (private) |
| 77 | fn | invokeWrappedTestStream | (private) |
| 88 | fn | requireRecord | (private) |
| 95 | fn | requireContentItem | (private) |
| 99 | fn | wrappedPluginSystemContext | (private) |
| 103 | fn | expectSingleTextContent | (private) |
| 110 | fn | expectSingleToolCallContent | (private) |
| 117 | fn | firstBaseContext | (private) |
| 654 | fn | invokeWrappedStream | (private) |
| 666 | fn | createEventStream | (private) |
| 2875 | fn | invokeWrappedStream | (private) |

## src/agents/embedded-agent-runner/run/attempt.tool-call-argument-repair.test.ts (524 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | FakeWrappedStream | (private) |
| 14 | type | FakeStreamFn | (private) |
| 20 | fn | createFakeStream | (private) |
| 40 | fn | invokeProviderStream | (private) |
| 56 | type | ToolCallRepairCaseResult | (private) |
| 65 | fn | runToolCallRepairCase | (private) |
| 134 | fn | expectAllToolCallArgs | (private) |

## src/agents/embedded-agent-runner/run/attempt.tool-call-argument-repair.ts (799 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 91 | fn | shouldAttemptMalformedToolCallRepair | (private) |
| 103 | type | ToolCallArgumentRepair | (private) |
| 110 | fn | isAllowedToolCallRepairLeadingPrefix | (private) |
| 123 | fn | isWhitespace | (private) |
| 127 | fn | skipWhitespace | (private) |
| 136 | fn | isToolCallRepairSmartQuote | (private) |
| 140 | type | ToolCallRepairStringToken | (private) |
| 145 | type | ToolCallRepairJsonValue | (private) |
| 150 | type | ToolCallRepairParsedObject | (private) |
| 155 | fn | parseUsableObjectJson | (private) |
| 166 | fn | findAsciiStringEnd | (private) |
| 181 | fn | readAsciiQuotedString | (private) |
| 197 | fn | readSmartQuotedObjectKey | (private) |
| 215 | fn | readObjectKey | (private) |
| 224 | fn | readObjectMemberKeyAfterComma | (private) |
| 233 | fn | normalizeToolCallRepairToolName | (private) |
| 241 | fn | extractToolNameFromLeadingPrefix | (private) |
| 246 | fn | isToolSpecificValueSuccessor | (private) |
| 262 | fn | shouldCloseSmartQuotedValueAt | (private) |
| 290 | fn | decodeSmartQuotedJsonStringEscapes | (private) |
| 301 | fn | readSmartQuotedValue | (private) |
| 318 | fn | readJsonValue | (private) |
| 356 | fn | parseJsonValuePrefix | (private) |
| 372 | fn | readSmartQuotedEditArray | (private) |
| 407 | fn | readObjectValue | (private) |
| 426 | fn | parseSmartQuotedToolCallObject | (private) |
| 473 | fn | tryExtractUsableToolCallArgumentsFromJson | (private) |
| 507 | fn | tryExtractSmartQuotedToolCallArguments | (private) |
| 545 | fn | tryExtractUsableToolCallArguments | (private) |
| 568 | fn | readToolCallNameInMessage | (private) |
| 587 | fn | repairToolCallArgumentsInMessage | (private) |
| 610 | fn | hasMeaningfulToolCallArgumentsInMessage | (private) |
| 634 | fn | clearToolCallArgumentsInMessage | (private) |
| 653 | fn | repairMalformedToolCallArgumentsInMessage | (private) |
| 669 | fn | wrapStreamRepairMalformedToolCallArguments | (private) |
| 772 | fn | wrapStreamFnRepairMalformedToolCallArguments | pub |
| 784 | fn | shouldRepairMalformedToolCallArguments | pub |
| 796 | fn | wrapStreamFnDecodeXaiToolCallArguments | pub |

## src/agents/embedded-agent-runner/run/attempt.tool-call-normalization.test.ts (1731 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | AssistantMessage | (private) |
| 15 | type | ToolResultMessage | (private) |
| 16 | type | FakeWrappedStream | (private) |
| 21 | fn | createFakeStream | (private) |
| 39 | fn | collectStreamEvents | (private) |
| 48 | fn | requireRecord | (private) |
| 55 | fn | requireAssistantMessage | (private) |
| 62 | fn | requireToolResultMessage | (private) |
| 69 | fn | assistantToolUseSummaries | (private) |
| 86 | fn | toolResultSummary | (private) |
| 180 | fn | createMessage | (private) |
| 221 | fn | createMessage | (private) |
| 1105 | fn | createMessage | (private) |

## src/agents/embedded-agent-runner/run/attempt.tool-call-normalization.ts (1211 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | UnknownToolLoopGuardState | (private) |
| 45 | type | AssistantStream | (private) |
| 47 | fn | resolveCaseInsensitiveAllowedToolName | (private) |
| 68 | fn | resolveExactAllowedToolName | (private) |
| 88 | fn | buildStructuredToolNameCandidates | (private) |
| 96 | fn | addCandidate | (private) |
| 124 | fn | resolveStructuredAllowedToolName | (private) |
| 149 | fn | inferToolNameFromToolCallId | (private) |
| 162 | fn | addToken | (private) |
| 206 | fn | looksLikeMalformedToolNameCounter | (private) |
| 214 | fn | normalizeToolCallNameForDispatch | (private) |
| 245 | type | ReplayToolCallBlock | (private) |
| 253 | type | ReplayToolCallSanitizeReport | (private) |
| 258 | type | AnthropicToolResultContentBlock | (private) |
| 266 | fn | isThinkingLikeReplayBlock | (private) |
| 274 | fn | isReplaySafeThinkingTurn | (private) |
| 295 | fn | isReplayToolCallBlock | (private) |
| 302 | fn | replayToolCallHasInput | (private) |
| 309 | fn | collectFollowingToolResults | (private) |
| 338 | fn | replayToolCallNonEmptyString | (private) |
| 342 | fn | resolveReplayToolCallName | (private) |
| 361 | fn | sanitizeReplayToolCallInputs | (private) |
| 473 | fn | extractAnthropicReplayToolResultIds | (private) |
| 488 | fn | isSignedThinkingReplayAssistantSpan | (private) |
| 502 | fn | sanitizeAnthropicReplayToolResults | (private) |
| 591 | fn | assistantTurnHasReplayToolCall | (private) |
| 602 | fn | stripTrailingAssistantPrefillTurns | (private) |
| 617 | fn | createStandaloneTextToolCallId | (private) |
| 621 | fn | normalizeToolCallIdsInMessage | (private) |
| 679 | fn | trimWhitespaceFromToolCallNamesInMessage | (private) |
| 705 | fn | classifyToolCallMessage | (private) |
| 785 | fn | rewriteUnknownToolLoopMessage | (private) |
| 797 | fn | guardUnknownToolLoopInMessage | (private) |
| 873 | fn | isRetainableNonVisibleBlock | (private) |
| 879 | fn | createStandaloneToolCallNameMatcher | (private) |
| 888 | fn | wrapStreamPromoteStandaloneTextToolCalls | (private) |
| 975 | fn | wrapStreamFnPromoteStandaloneTextToolCalls | pub |
| 993 | fn | wrapStreamTrimToolCallNames | (private) |
| 1057 | fn | wrapStreamFnTrimToolCallNames | pub |
| 1083 | type | ReplayToolCallIdSanitizerDecision | (private) |
| 1090 | fn | shouldApplyReplayToolCallIdSanitizer | pub |
| 1099 | fn | sanitizeReplayToolCallIdsForStream | pub |
| 1120 | fn | sanitizeOpenAIResponsesReplayForStream | pub |
| 1136 | fn | wrapStreamFnSanitizeMalformedToolCalls | pub |

## src/agents/embedded-agent-runner/run/attempt.ts (502 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | fn | runEmbeddedAttempt | pub |
| 92 | fn | cleanupEmbeddedPrepResourcesAfterEarlyExit | (private) |
| 171 | fn | resolveActiveContextEnginePluginId | (private) |

## src/agents/embedded-agent-runner/run/auth-controller.test.ts (873 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | createDeferred | (private) |
| 57 | fn | createTestModel | (private) |
| 75 | fn | getRuntimeAuthSnapshot | (private) |
| 81 | type | MutableAuthControllerHarness | (private) |
| 90 | type | RuntimeApiKeySetter | (private) |
| 92 | fn | expectProtectedRuntimeValue | (private) |
| 98 | fn | createMutableAuthControllerHarness | (private) |
| 111 | fn | createMutableEmbeddedRunAuthController | (private) |
| 541 | fn | resolve | (private) |

## src/agents/embedded-agent-runner/run/auth-controller.ts (680 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | ApiKeyInfo | (private) |
| 49 | type | RuntimeApiKeySink | (private) |
| 53 | type | LogLike | (private) |
| 60 | fn | resolveEmbeddedAuthCooldownProbePolicy | pub |
| 96 | fn | createEmbeddedRunAuthController | pub |
| 141 | fn | commitPreparedModel | (private) |
| 176 | fn | hasRefreshableRuntimeAuth | (private) |
| 179 | fn | nextRuntimeAuthGeneration | (private) |
| 181 | fn | prepareRuntimeAuthForModel | (private) |
| 214 | fn | clearRuntimeAuthRefreshTimer | (private) |
| 223 | fn | stopRuntimeAuthRefreshTimer | (private) |
| 599 | fn | initializeAuthProfile | (private) |

## src/agents/embedded-agent-runner/run/failover-policy.test.ts (824 lines)

_No symbols extracted._

## src/agents/embedded-agent-runner/run/images.test.ts (678 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | expectNoPromptImages | (private) |
| 26 | fn | expectNoImageReferences | (private) |
| 31 | fn | expectImageReferenceCount | (private) |
| 37 | fn | expectSingleImageReference | (private) |

## src/agents/embedded-agent-runner/run/images.ts (665 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 86 | interface | DetectedImageRef | (private) |
| 98 | fn | isImageExtension | (private) |
| 103 | fn | normalizeRefForDedupe | (private) |
| 107 | fn | isOpenClawCliImageCachePath | (private) |
| 123 | fn | mergePromptAttachmentImages | (private) |
| 169 | fn | createRefCountMap | (private) |
| 178 | fn | consumeRefCount | (private) |
| 196 | fn | extractLeadingAttachmentPrompt | (private) |
| 217 | fn | extractLeadingInlineAttachmentRefs | (private) |
| 233 | fn | extractTrailingAttachmentMediaUris | (private) |
| 268 | fn | splitPromptAndAttachmentRefs | (private) |
| 308 | fn | sanitizeImagesWithLog | (private) |
| 338 | fn | detectImageReferences | pub |
| 343 | fn | addPathRef | (private) |
| 472 | fn | loadImageFromRef | pub |
| 546 | fn | modelSupportsImages | (private) |
| 555 | fn | detectAndLoadPromptImages | pub |

## src/agents/embedded-agent-runner/run/incomplete-turn.ts (903 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | ReplayMetadataAttempt | (private) |
| 38 | type | IncompleteTurnAttempt | (private) |
| 67 | fn | hasPositiveOutputTokenUsage | (private) |
| 79 | type | SilentToolResultAttempt | (private) |
| 89 | type | RunLivenessAttempt | (private) |
| 99 | fn | isIncompleteTerminalAssistantTurn | pub |
| 148 | fn | buildAttemptReplayMetadata | pub |
| 166 | fn | resolveAttemptReplayMetadata | pub |
| 172 | type | TerminalAttemptState | (private) |
| 199 | fn | hasAttemptTerminalState | pub |
| 228 | fn | resolveIncompleteTurnPayloadText | pub |
| 309 | fn | shouldRetryMissingAssistantTurn | pub |
| 361 | fn | joinAssistantTexts | (private) |
| 365 | fn | hasOnlySilentAssistantReply | (private) |
| 373 | fn | hasAsyncStartedToolActivity | (private) |
| 377 | fn | isToolResultRole | (private) |
| 381 | fn | readMessageTextContent | (private) |
| 394 | fn | readToolResultAggregatedText | (private) |
| 403 | fn | hasTrailingSilentToolResult | (private) |
| 426 | fn | resolveSilentToolResultReplyPayload | pub |
| 458 | fn | resolveReplayInvalidFlag | pub |
| 471 | fn | resolveRunLivenessState | pub |
| 496 | fn | isReasoningOnlyAssistantTurn | (private) |
| 506 | fn | isUnsignedThinkingOnlyAssistantTurn | (private) |
| 517 | fn | shouldRetrySilentErrorAssistantTurn | pub |
| 567 | fn | isEmptyResponseAssistantTurn | (private) |
| 599 | fn | isNonVisibleAssistantTurnEligibleForSilentReply | (private) |
| 630 | fn | shouldSkipNonVisibleTurnRetry | (private) |
| 648 | fn | shouldTreatEmptyAssistantReplyAsSilent | pub |
| 690 | fn | resolveReasoningOnlyRetryInstruction | pub |
| 729 | fn | resolveToolUseTerminalContinuationInstruction | pub |
| 808 | fn | resolveEmptyResponseRetryInstruction | pub |
| 860 | fn | shouldApplyNonVisibleTurnRetryGuard | (private) |
| 884 | fn | isIncompleteTurnRecoverySupportedProviderModel | (private) |

## src/agents/embedded-agent-runner/run/llm-idle-timeout.test.ts (1167 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 669 | fn | createMockAsyncIterable | (private) |
| 693 | fn | createNeverYieldingStream | (private) |
| 912 | fn | collect | (private) |
| 1153 | fn | toLintErrorObject | (private) |

## src/agents/embedded-agent-runner/run/llm-idle-timeout.ts (615 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | IdleTimeoutProviderConfig | (private) |
| 58 | fn | isLocalProviderBaseUrl | (private) |
| 110 | fn | isExplicitLocalHostnameBaseUrl | (private) |
| 128 | fn | isBareProviderHostnameBaseUrl | (private) |
| 142 | fn | isSelfHostedProviderId | (private) |
| 152 | fn | findConfiguredProviderConfig | (private) |
| 172 | fn | hasLocalProviderAuthMarker | (private) |
| 176 | fn | hasConfiguredLocalProviderSignal | (private) |
| 186 | fn | isOllamaCloudModel | (private) |
| 203 | type | RuntimeModelLocality | (private) |
| 213 | fn | resolveRuntimeModelLocality | (private) |
| 245 | fn | resolveLlmIdleTimeoutMs | pub |
| 252 | fn | clampTimeoutMs | (private) |
| 362 | fn | resolveLlmFirstEventTimeoutMs | pub |
| 368 | fn | clampTimeoutMs | (private) |
| 426 | fn | streamWithIdleTimeout | pub |
| 435 | fn | createIdleTimeoutError | (private) |
| 440 | fn | abortStream | (private) |
| 445 | fn | abortFromSourceSignal | (private) |
| 453 | fn | cleanupSourceSignal | (private) |
| 460 | fn | createTimeoutPromise | (private) |
| 481 | fn | wrapStream | (private) |
| 496 | fn | clearTimer | (private) |
| 502 | fn | armTimer | (private) |
| 527 | fn | stopWaiting | (private) |
| 537 | fn | cleanupIterator | (private) |
| 587 | fn | clearStreamPromiseTimer | (private) |

## src/agents/embedded-agent-runner/run/payloads.errors.test.ts (1205 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | makeStoppedAssistant | (private) |
| 43 | fn | expectOverloadedFallback | (private) |
| 50 | fn | expectNoPayloadTextContaining | (private) |
| 57 | fn | expectSinglePayloadSummary | (private) |
| 69 | fn | expectNoPayloads | (private) |
| 74 | fn | expectNoSyntheticCompletionForSession | (private) |

## src/agents/embedded-agent-runner/run/payloads.test.ts (1076 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | expectNoPayloads | (private) |

## src/agents/embedded-agent-runner/run/payloads.ts (963 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | type | ToolMetaEntry | (private) |
| 66 | type | ToolErrorWarningPolicy | (private) |
| 81 | fn | isRecoverableToolError | (private) |
| 86 | fn | isVerboseToolDetailEnabled | (private) |
| 90 | fn | isAssistantTextContentBlockType | (private) |
| 94 | fn | resolveRawAssistantAnswerText | (private) |
| 150 | fn | normalizeReplyTextForComparison | (private) |
| 154 | fn | shouldIncludeToolErrorDetails | (private) |
| 178 | fn | shouldMarkNonTerminalToolErrorWarning | (private) |
| 182 | fn | formatToolErrorWarningText | (private) |
| 212 | fn | formatExecLikeFailureSubject | (private) |
| 229 | fn | splitExecLikeFailureMeta | (private) |
| 270 | fn | extractLiteralExecCommand | (private) |
| 289 | type | RawExecContext | (private) |
| 294 | fn | extractRawExecCommand | (private) |
| 304 | fn | extractTrailingMarkdownCodeSpan | (private) |
| 337 | fn | unwrapMarkdownInlineCodePadding | (private) |
| 344 | fn | extractRawExecContext | (private) |
| 359 | fn | shouldKeepRawExecTrailingContext | (private) |
| 383 | fn | isCompactCwdSuffix | (private) |
| 386 | fn | isPathLikeCwdSuffix | (private) |
| 392 | fn | isKnownLiteralRunSummary | (private) |
| 409 | fn | splitDisplayContextSuffix | (private) |
| 416 | fn | formatConciseExecExitSuffix | (private) |
| 423 | fn | maybeWrapInlineCode | (private) |
| 431 | fn | longestBacktickRun | (private) |
| 449 | fn | resolveToolErrorWarningPolicy | (private) |
| 516 | fn | buildEmbeddedRunPayloads | pub |
| 677 | fn | shouldSuppressRawErrorText | (private) |

## src/agents/embedded-agent-runner/run/preemptive-compaction.test.ts (587 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | makeAssistantHistory | (private) |
| 39 | fn | makeToolResultMessage | (private) |
| 50 | fn | makeJsonToolResultMessage | (private) |
| 63 | fn | makeAssistantToolCall | (private) |
| 504 | fn | estimate | (private) |

## src/agents/embedded-agent-runner/run/runtime-context-prompt.test.ts (636 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | fn | withModelPromptBuildContext | (private) |

## src/agents/embedded-agent-runner/run/runtime-preparation.ts (519 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | ApiKeyInfo | (private) |
| 39 | fn | prepareEmbeddedRunRuntime | pub |
| 88 | fn | resolveEffectiveModel | (private) |
| 117 | fn | selectHarnessForModel | (private) |
| 132 | fn | selectHarnessForPreparedAttempts | (private) |
| 236 | fn | findPreparedAuthAttempt | (private) |

## src/agents/embedded-agent-runner/run/terminal-resolution.ts (565 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | TerminalRunParams | (private) |
| 52 | type | TerminalResolution | (private) |
| 56 | fn | resolveEmbeddedRunTerminal | pub |
| 363 | fn | surfaceIncompleteTurn | (private) |
| 423 | fn | completeEmbeddedRun | (private) |
| 551 | fn | copyAttemptDeliveryState | pub |
