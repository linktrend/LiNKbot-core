# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 1 large files in this module.

## src/auto-reply/reply/queue/drain.ts (1385 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | fn | hasExclusiveTurnAdmission | (private) |
| 65 | fn | resolveTurnAdoptionLifecycleDeliveryKey | (private) |
| 87 | fn | assertSingleAdmissionOwner | (private) |
| 98 | fn | rememberFollowupDrainCallback | pub |
| 105 | fn | clearFollowupDrainCallback | pub |
| 110 | fn | kickFollowupDrainIfIdle | pub |
| 118 | type | OriginRoutingMetadata | (private) |
| 130 | fn | resolveOriginRoutingMetadata | (private) |
| 165 | fn | resolveFollowupAuthorizationKey | (private) |
| 183 | fn | resolveFollowupDeliveryContextKey | pub |
| 232 | fn | resolveFollowupReplyAnchor | pub |
| 251 | fn | splitCollectItemsByDeliveryContext | (private) |
| 280 | fn | renderCollectItem | (private) |
| 284 | fn | renderCollectItemPrompt | (private) |
| 291 | fn | collectQueuedImages | (private) |
| 308 | type | FollowupRuntimeMetadata | (private) |
| 320 | fn | hasCurrentTurnRuntimeMetadata | (private) |
| 328 | fn | hasRuntimeOnlyFollowupMetadata | (private) |
| 332 | fn | buildCollectTranscriptPrompt | (private) |
| 341 | fn | resolveFollowupTranscriptTarget | (private) |
| 362 | fn | createCollectUserTurnTranscriptRecorder | (private) |
| 368 | fn | buildInput | (private) |
| 418 | fn | resolveAggregateOwner | (private) |
| 428 | fn | requiresIndividualCollectDrain | (private) |
| 432 | type | AggregateCancellation | (private) |
| 438 | fn | createAggregateCancellation | (private) |
| 470 | fn | abort | (private) |
| 478 | fn | disposeSignal | (private) |
| 505 | fn | collectCurrentInboundContext | (private) |
| 515 | fn | renderField | (private) |
| 538 | fn | collectRuntimeMetadata | (private) |
| 568 | type | FollowupQueueSummaryState | (private) |
| 584 | type | QueueSummaryDelivery | (private) |
| 590 | fn | createQueueSummaryDelivery | (private) |
| 623 | fn | consumeQueueSummaryDelivery | (private) |
| 660 | fn | releaseQueueSummaryDeliveryForRetry | (private) |
| 675 | fn | dropAbortedQueueSummarySources | (private) |
| 691 | fn | runQueueSummaryDelivery | (private) |
| 788 | fn | dropAbortedFollowups | (private) |
| 805 | fn | resolveCrossChannelKey | (private) |
| 850 | fn | resolveOverflowSummarySourceGroup | (private) |
| 868 | fn | drainProtectedPriorityFollowup | (private) |
| 881 | fn | createOverflowSummaryRetrySource | pub |
| 907 | fn | resolveOverflowSummaryInboundEventKind | (private) |
| 914 | fn | runSyntheticOverflowSummary | (private) |
| 984 | fn | drainElidedOverflowSummary | (private) |
| 1070 | fn | drainOverflowSummaryGroup | (private) |
| 1114 | fn | scheduleFollowupDrain | pub |
| 1237 | fn | restoreGroupItems | (private) |
| 1248 | fn | consumeAdmittedGroup | (private) |
| 1258 | fn | admitGroupSources | (private) |
| 1262 | fn | completeGroup | (private) |
| 1268 | fn | drainGroup | (private) |
