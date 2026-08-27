# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/agents/agent-hooks/compaction-safeguard.test.ts (3274 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | summaryResult | (private) |
| 78 | fn | stubSessionManager | (private) |
| 97 | fn | createAnthropicModelFixture | (private) |
| 113 | type | CompactionHandler | (private) |
| 114 | fn | createCompactionHandler | (private) |
| 130 | fn | createCompactionEvent | (private) |
| 148 | fn | createCompactionContext | (private) |
| 169 | fn | runCompactionScenario | (private) |
| 197 | fn | expectCompactionResult | (private) |
| 212 | fn | mockCallArg | (private) |
| 224 | fn | latestMockCallArg | (private) |
| 231 | fn | requireRecord | (private) |
| 238 | fn | requireArray | (private) |
| 3133 | fn | expectWorkspaceSummaryEmptyForAgentsAlias | (private) |
| 3152 | fn | withWorkspaceSummary | (private) |

## src/agents/agent-hooks/compaction-safeguard.ts (1539 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 90 | fn | buildPreviousSummaryMessage | (private) |
| 103 | fn | prependPreviousSummaryForRedistill | (private) |
| 114 | type | SessionBranchEntry | (private) |
| 126 | fn | coerceTimestamp | (private) |
| 139 | fn | sessionBranchEntryToMessage | (private) |
| 164 | fn | collectSessionBranchMessages | (private) |
| 187 | fn | isReplayUnsafeInterSessionInput | (private) |
| 195 | fn | isSessionsSendToolName | (private) |
| 207 | fn | sanitizeSourceSessionSends | (private) |
| 295 | fn | filterReplayUnsafeSessionBranchMessages | (private) |
| 335 | fn | containsRealConversation | (private) |
| 346 | fn | tryProviderSummarize | (private) |
| 387 | fn | summarizeViaLLM | (private) |
| 431 | fn | assembleSuffix | (private) |
| 452 | type | ToolFailure | (private) |
| 459 | type | ModelRegistryWithRequestAuthLookup | (private) |
| 465 | type | ResolvedRequestAuth | (private) |
| 480 | fn | resolveModelAuth | (private) |
| 519 | fn | buildCompactionSummaryHeaders | (private) |
| 539 | fn | clampNonNegativeInt | (private) |
| 544 | fn | resolveRecentTurnsPreserve | (private) |
| 551 | fn | resolveQualityGuardMaxRetries | (private) |
| 558 | fn | normalizeFailureText | (private) |
| 562 | fn | truncateFailureText | (private) |
| 569 | fn | formatToolFailureMeta | (private) |
| 589 | fn | extractToolResultText | (private) |
| 593 | fn | collectToolFailures | (private) |
| 649 | fn | formatToolFailuresSection | (private) |
| 663 | fn | computeFileLists | (private) |
| 673 | fn | formatFileOperations | (private) |
| 674 | fn | formatBoundedFileList | (private) |
| 722 | fn | capCompactionSummary | (private) |
| 735 | fn | capCompactionSummaryPreservingSuffix | (private) |
| 755 | fn | resolveSummaryReserveTokens | (private) |
| 771 | fn | extractMessageText | (private) |
| 792 | fn | formatNonTextPlaceholder | (private) |
| 823 | fn | splitPreservedRecentTurns | (private) |
| 924 | fn | formatContextMessages | (private) |
| 957 | fn | formatPreservedTurnsSection | (private) |
| 968 | fn | formatSplitTurnContextSection | (private) |
| 979 | fn | extractLatestUserAsk | (private) |
| 999 | fn | readWorkspaceContextForSummary | (private) |
