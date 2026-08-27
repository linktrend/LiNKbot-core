# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 10 large files in this module.

## extensions/matrix/src/matrix/monitor/config.ts (570 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | MatrixRoomsConfig | (private) |
| 18 | type | ResolveMatrixTargetsFn | (private) |
| 20 | type | MatrixResolvedAllowlistEntry | pub |
| 25 | type | MatrixResolvedUserAllowlist | (private) |
| 30 | fn | normalizeMatrixUserLookupEntry | (private) |
| 37 | fn | normalizeMatrixRoomLookupEntry | (private) |
| 44 | fn | filterResolvedMatrixAllowlistEntries | (private) |
| 57 | fn | filterFailClosedMatrixAllowlistEntries | (private) |
| 61 | fn | listResolvedMatrixAllowlistEntries | (private) |
| 85 | fn | normalizeConfiguredMatrixAllowlistEntries | (private) |
| 98 | fn | isMatrixDangerousNameMatchingEnabled | (private) |
| 110 | fn | addUniqueMatrixAllowlistEntry | (private) |
| 127 | fn | resolveStableMatrixMonitorUserEntries | (private) |
| 156 | fn | logStableMatrixAllowlistUnresolved | (private) |
| 170 | fn | resolveStableMatrixMonitorUserAllowlist | (private) |
| 199 | fn | resolveMatrixMonitorUserEntries | (private) |
| 255 | fn | resolveMatrixMonitorUserAllowlist | (private) |
| 312 | fn | resolveMatrixMonitorLiveUserAllowlist | pub |
| 390 | fn | resolveMatrixMonitorRoomsConfig | (private) |
| 519 | fn | resolveMatrixMonitorConfig | pub |

## extensions/matrix/src/matrix/monitor/direct.test.ts (595 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | MockStateEvents | (private) |
| 9 | fn | createMockClient | (private) |

## extensions/matrix/src/matrix/monitor/events.test.ts (1846 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | RoomEventListener | (private) |
| 13 | type | FailedDecryptListener | (private) |
| 14 | type | VerificationSummaryListener | (private) |
| 16 | fn | getSentNoticeBody | (private) |
| 21 | fn | getSentNoticeBodyFromCall | (private) |
| 26 | fn | getSentNoticeBodies | (private) |
| 30 | fn | expectBodiesContain | (private) |
| 34 | fn | expectBodiesExclude | (private) |
| 38 | fn | requireRecord | (private) |
| 45 | fn | expectRecordFields | (private) |
| 51 | fn | expectWarnContextFields | (private) |
| 62 | fn | createHarness | (private) |
| 126 | fn | flushTasks | (private) |

## extensions/matrix/src/matrix/monitor/handler.group-history.test.ts (760 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 59 | fn | makeRoomTriggerEvent | (private) |
| 69 | fn | makeRoomPlainEvent | (private) |
| 77 | fn | makeDevRoute | (private) |
| 92 | fn | deferred | (private) |
| 103 | fn | createFinalDeliveryFailureHandler | (private) |
| 136 | fn | inboundHistoryBodies | (private) |
| 142 | fn | finalizeInboundContextCall | (private) |
| 153 | fn | expectSomeBodyContaining | (private) |
| 157 | fn | expectNoBodyContaining | (private) |

## extensions/matrix/src/matrix/monitor/handler.test.ts (4434 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | fn | waitForMatrixState | (private) |
| 75 | fn | writeMatrixSessionMeta | (private) |
| 129 | fn | createReactionHarness | (private) |
| 153 | fn | requireRecord | (private) |
| 160 | fn | requireArray | (private) |
| 165 | fn | mockCalls | (private) |
| 177 | fn | callArg | (private) |
| 185 | fn | lastCallArg | (private) |
| 190 | fn | singleTextMessageBody | (private) |
| 194 | fn | expectMockCallWithFields | (private) |
| 205 | fn | expectNoticeSent | (private) |
| 211 | fn | expectRuntimeErrorContaining | (private) |
| 218 | fn | findMockCall | (private) |
| 226 | fn | expectMatrixEdit | (private) |
| 236 | fn | expectFinalizedPreviewEdit | (private) |
| 247 | fn | expectEditLiveFlag | (private) |
| 262 | fn | expectDeliveredMediaReply | (private) |
| 2080 | type | MatrixHandler | (private) |
| 2082 | fn | createDispatchInboundMessage | (private) |
| 2088 | fn | sendLiveAllowlistMessage | (private) |
| 2114 | type | LiveNameMatchingResolveParams | (private) |
| 2809 | type | DeliverFn | (private) |
| 2822 | type | ReplyOpts | (private) |
| 2883 | fn | createStreamingHarness | (private) |
| 2896 | fn | notifyCaptured | (private) |
| 2945 | fn | dispatch | (private) |

## extensions/matrix/src/matrix/monitor/handler.ts (2596 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 146 | fn | matrixTextWouldActivateMentions | (private) |
| 157 | type | MatrixAllowBotsMode | (private) |
| 158 | type | MatrixDraftStreamHandle | (private) |
| 169 | fn | redactMatrixDraftEvent | (private) |
| 177 | fn | buildMatrixFinalizedPreviewContent | (private) |
| 181 | type | MatrixMonitorHandlerParams | (private) |
| 236 | fn | resolveMatrixMentionPrecheckText | (private) |
| 256 | fn | hasBundledMatrixReplacementRelation | (private) |
| 264 | fn | resolveMatrixInboundBodyText | (private) |
| 293 | fn | markTrackedRoomIfFirst | (private) |
| 307 | fn | resolveMatrixSharedDmContextNotice | (private) |
| 359 | fn | resolveMatrixPendingHistoryText | (private) |
| 382 | fn | isMatrixAudioMediaEnabled | (private) |
| 395 | fn | shouldDeferMatrixAudioPreflightForRoomIngress | (private) |
| 422 | fn | resolveMatrixAllowBotsMode | (private) |
| 432 | fn | formatMatrixToolProgressMarkdownCode | (private) |
| 441 | fn | createMatrixRoomMessageHandler | pub |
| 493 | type | LiveAllowlistCacheEntry | (private) |
| 496 | fn | resolveCachedLiveAllowlist | (private) |
| 627 | fn | commitInboundEventIfClaimed | (private) |
| 634 | fn | readIngressPrefix | (private) |
| 695 | fn | continueIngress | (private) |
| 719 | fn | discardReservedHistorySlot | (private) |
| 725 | fn | commitInboundEventIfClaimedAndDiscardReserved | (private) |
| 1688 | fn | shouldAckReaction | (private) |
| 1788 | type | PendingDraftBoundary | (private) |
| 1810 | fn | renderProgressDraft | (private) |
| 1832 | fn | pushPreviewToolProgress | (private) |
| 1887 | fn | pushPlanProgress | (private) |
| 1907 | fn | suppressPreviewToolProgressForAnswerText | (private) |
| 1917 | fn | resetPreviewToolProgress | (private) |
| 2031 | fn | getDisplayableDraftText | (private) |
| 2041 | fn | updateDraftFromLatestFullText | (private) |
| 2048 | fn | queueDraftBlockBoundary | (private) |
| 2064 | fn | advanceDraftBlockBoundary | (private) |
| 2084 | fn | resetDraftBlockOffsets | (private) |
| 2090 | fn | resetDraftDeliveryState | (private) |

## extensions/matrix/src/matrix/monitor/index.test.ts (1086 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | DirectRoomTrackerOptions | (private) |
| 17 | fn | createEmitter | (private) |
| 141 | fn | normalizeAccountId | (private) |
| 373 | fn | flushUntil | (private) |
| 383 | fn | waitForCallOrderEntry | (private) |
| 390 | fn | startMonitorAndAbortAfterStartup | (private) |
| 398 | fn | mockCallArg | (private) |
| 406 | fn | directRoomTrackerOptions | (private) |
| 414 | fn | lastMockCallArg | (private) |
| 422 | fn | expectStatusCallFields | (private) |
| 430 | fn | expectLastStatusFields | (private) |
| 629 | fn | onUnhandled | (private) |

## extensions/matrix/src/matrix/monitor/index.ts (553 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | type | MonitorMatrixOpts | (private) |
| 76 | type | MatrixStreamingInput | (private) |
| 78 | fn | isMatrixStreamingConfig | (private) |
| 84 | fn | resolveMatrixStreamingMode | (private) |
| 106 | fn | resolveMatrixPreviewToolProgress | (private) |
| 116 | fn | resolveMatrixPreviewToolProgressEnabled | (private) |
| 124 | fn | monitorMatrixProvider | pub |
| 139 | fn | formatRuntimeMessage | (private) |
| 151 | fn | logVerboseMessage | (private) |
| 236 | fn | cleanup | (private) |
| 320 | fn | onSyncState | (private) |

## extensions/matrix/src/matrix/monitor/room-history.ts (507 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | HistorySnapshotToken | (private) |
| 39 | type | ReservedHistorySlot | pub |
| 44 | type | QueuedHistoryEntry | (private) |
| 50 | type | PreparedTriggerResult | (private) |
| 54 | type | RoomHistoryTracker | (private) |
| 115 | type | HistoryQueue | (private) |
| 123 | type | RoomQueue | (private) |
| 127 | fn | createRoomHistoryTrackerInternal | (private) |
| 138 | fn | clearRoomWatermarks | (private) |
| 147 | fn | clearThreadWatermarks | (private) |
| 156 | fn | createHistoryQueue | (private) |
| 165 | fn | getOrCreateQueue | (private) |
| 185 | fn | getOrCreateThreadQueue | (private) |
| 205 | fn | getScopedQueue | (private) |
| 210 | fn | findScopedQueue | (private) |
| 218 | fn | appendToQueue | (private) |
| 231 | fn | wmKey | (private) |
| 239 | fn | preparedTriggerKey | (private) |
| 246 | fn | rememberWatermark | (private) |
| 261 | fn | markConsumedAfterReservedGap | (private) |
| 278 | fn | rememberPreparedTrigger | (private) |
| 297 | fn | computePendingHistory | (private) |
| 328 | fn | prepareTriggerInternal | (private) |
| 486 | fn | createRoomHistoryTracker | pub |

## extensions/matrix/src/matrix/monitor/verification-events.ts (636 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | MatrixVerificationStage | (private) |
| 19 | type | MatrixVerificationSummaryLike | (private) |
| 44 | fn | trimMaybeString | (private) |
| 52 | fn | readVerificationSignal | (private) |
| 91 | fn | formatVerificationStageNotice | (private) |
| 123 | fn | formatVerificationSasNotice | (private) |
| 154 | fn | resolveVerificationFlowCandidates | (private) |
| 164 | fn | add | (private) |
| 177 | fn | resolveSummaryRecency | (private) |
| 182 | fn | isActiveVerificationSummary | (private) |
| 195 | fn | resolveVerificationSummaryForSignal | (private) |
| 268 | fn | resolveVerificationSasNoticeForSignal | (private) |
| 302 | fn | trackBounded | (private) |
| 316 | fn | sendVerificationNotice | (private) |
| 338 | fn | isVerificationNoticeAuthorized | (private) |
| 379 | fn | createMatrixVerificationEventRouter | pub |
| 396 | fn | resolveActiveDirectRoomId | (private) |
| 405 | fn | shouldEmitVerificationEventNotice | (private) |
| 416 | fn | rememberVerificationRoom | (private) |
| 428 | fn | rememberVerificationUserRoom | (private) |
| 444 | fn | resolveSummaryRoomId | (private) |
| 484 | fn | routeVerificationSummary | (private) |
| 531 | fn | routeVerificationEvent | (private) |
| 542 | fn | routeTask | (private) |
