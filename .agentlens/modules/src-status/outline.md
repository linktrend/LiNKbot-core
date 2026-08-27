# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/status/status-message.ts (1164 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | type | AgentDefaults | (private) |
| 76 | type | AgentConfig | (private) |
| 80 | type | QueueStatus | (private) |
| 89 | type | StatusArgs | (private) |
| 123 | type | NormalizedAuthMode | (private) |
| 125 | fn | normalizeAuthMode | (private) |
| 151 | fn | resolveConfiguredTextVerbosity | (private) |
| 172 | fn | resolveExecutionLabel | (private) |
| 193 | fn | sandboxed | (private) |
| 216 | fn | formatTokens | (private) |
| 228 | fn | formatEstimatedContextBudgetTokens | (private) |
| 258 | fn | formatContextUsageShort | pub |
| 263 | fn | formatQueueDetails | (private) |
| 374 | fn | formatUsagePair | (private) |
| 383 | fn | formatCacheLine | (private) |
| 413 | fn | formatMediaUnderstandingLine | (private) |
| 510 | fn | resolveChannelModelNote | (private) |
| 566 | fn | hasUserPinnedModelSelection | (private) |
| 579 | fn | buildStatusMessage | pub |
| 776 | fn | persistedContextMatchesActiveModel | (private) |
| 1112 | fn | configuredFallbacks | (private) |

## src/status/status-text.ts (713 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 76 | fn | resolveStatusChannelFeatureLine | (private) |
| 128 | fn | resolveStatusRuntimeContextTokens | (private) |
| 141 | fn | shouldLoadUsageSummary | (private) |
| 163 | fn | resolveCodexSyntheticUsageAuthProfileId | (private) |
| 195 | fn | formatSessionTaskLine | (private) |
| 213 | fn | resolveStatusHarnessId | (private) |
| 265 | fn | resolveStatusRuntimeProvider | (private) |
| 280 | fn | resolveStatusCodexCliCredentialsHome | (private) |
| 289 | fn | formatAgentTaskCountsLine | (private) |
| 297 | fn | resolveRuntimePluginHealthLine | (private) |
| 308 | fn | buildStatusText | pub |
