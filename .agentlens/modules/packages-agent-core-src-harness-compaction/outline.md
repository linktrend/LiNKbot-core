# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 1 large files in this module.

## packages/agent-core/src/harness/compaction/compaction.ts (938 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | interface | CompactionDetails | pub |
| 51 | fn | safeJsonStringify | (private) |
| 59 | fn | extractFileOperations | (private) |
| 87 | fn | getMessageFromEntry | (private) |
| 113 | fn | getMessageFromEntryForCompaction | (private) |
| 121 | interface | CompactionResult | pub |
| 133 | interface | CompactionSettings | pub |
| 150 | fn | calculateContextTokens | pub |
| 156 | fn | getAssistantUsage | (private) |
| 172 | fn | getLastAssistantUsage | pub |
| 185 | interface | ContextUsageEstimate | pub |
| 196 | fn | getLastAssistantUsageInfo | (private) |
| 213 | fn | estimateContextTokens | pub |
| 244 | fn | shouldCompact | pub |
| 257 | fn | countContentBlockChars | (private) |
| 272 | fn | estimateTokens | pub |
| 323 | fn | isCutPointMessage | (private) |
| 339 | fn | isTurnStartMessage | (private) |
| 355 | fn | isTurnStartEntry | (private) |
| 360 | fn | findValidCutPoints | (private) |
| 380 | fn | findTurnStartIndex | pub |
| 398 | interface | CutPointResult | (private) |
| 408 | fn | findCutPoint | pub |
| 555 | fn | createSummarizationOptions | (private) |
| 573 | fn | completeSummarization | (private) |
| 587 | fn | runSummarizationCompletion | (private) |
| 644 | fn | generateSummary | pub |
| 688 | interface | CompactionPreparation | pub |
| 708 | fn | prepareCompaction | pub |
| 809 | fn | compact | pub |
| 907 | fn | generateTurnPrefixSummary | (private) |
