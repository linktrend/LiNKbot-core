# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/memory-lancedb/index.test.ts (4309 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | MemoryPluginTestConfig | (private) |
| 59 | type | LanceDbModule | (private) |
| 61 | fn | createMockModule | (private) |
| 67 | fn | invokeEmbeddingCreate | (private) |
| 71 | fn | createRuntimeLoader | (private) |
| 89 | type | MockCallSource | (private) |
| 116 | fn | registerTestPlugin | (private) |
| 120 | fn | firstMockArg | (private) |
| 132 | fn | firstObjectArg | (private) |
| 140 | fn | hookHandler | (private) |
| 146 | fn | expectHookRegistered | (private) |
| 150 | fn | expectToolExecute | (private) |
| 158 | fn | materializeRegisteredTool | (private) |
| 167 | fn | createAgentScopedSchemaMock | (private) |
| 171 | fn | createAgentScopedVectorQuery | (private) |
| 179 | fn | firstAddedMemory | (private) |
| 190 | fn | withMockedOpenAiMemoryPlugin | (private) |
| 237 | fn | parseConfig | (private) |
| 2433 | fn | setupAutoCaptureCursorHarness | (private) |
| 2525 | fn | cleanupAutoCaptureCursorHarness | (private) |

## extensions/memory-lancedb/index.ts (2110 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | type | AutoCaptureCursor | (private) |
| 67 | type | OpenAiEmbeddingClient | (private) |
| 81 | fn | extractUserTextContent | (private) |
| 106 | fn | extractLatestUserText | (private) |
| 116 | fn | normalizeRecallQuery | pub |
| 125 | fn | normalizeMaxChars | (private) |
| 131 | fn | messageFingerprint | (private) |
| 146 | fn | resolveAutoCaptureStartIndex | (private) |
| 186 | type | MemoryCliColumn | (private) |
| 188 | fn | parsePositiveIntegerOption | (private) |
| 199 | fn | parseMemoryCliColumns | (private) |
| 214 | fn | parseMemoryCliOrder | (private) |
| 235 | fn | parseMemoryCliFilter | pub |
| 284 | type | Embeddings | (private) |
| 288 | class | OpenAiCompatibleEmbeddings | (private) |
| 356 | fn | isEmbeddingDimensionsRejectedError | (private) |
| 365 | fn | isUnsupportedEmbeddingFieldError | (private) |
| 379 | fn | stringifyEmbeddingApiError | (private) |
| 398 | fn | truncateEmbeddingVector | (private) |
| 411 | class | ProviderAdapterEmbeddings | (private) |
| 486 | fn | runWithTimeout | (private) |
| 512 | fn | formatMemoryRecallError | (private) |
| 516 | fn | buildMemoryRecallUnavailableResult | (private) |
| 533 | class | MemoryRecallEmbeddingError | (private) |
| 546 | fn | createEmbeddings | (private) |
| 554 | type | EmbeddingCreateResponse | (private) |
| 560 | fn | normalizeEmbeddingVector | pub |
| 622 | fn | looksLikePromptInjection | pub |
| 642 | fn | escapeMemoryForPrompt | pub |
| 649 | fn | stripMediaAttachedAnnotations | (private) |
| 664 | fn | sanitizeRecallMemoryText | (private) |
| 672 | fn | findCleanDuplicateMemory | (private) |
| 688 | fn | cleanMemorySearchResults | (private) |
| 881 | fn | matchKnownChannelMarkerFreeEnvelopePrefix | (private) |
| 904 | fn | looksLikeEnvelopeSludge | pub |
| 982 | fn | stripEnvelopeBodySenderPrefix | (private) |
| 1005 | fn | stripLeadingMessageToolDeliveryHints | (private) |
| 1024 | fn | findFirstInboundEnvelopeIndex | (private) |
| 1049 | fn | stripPendingHistoryContextBeforeCurrentMessage | (private) |
| 1061 | fn | stripToCurrentMessageMarker | (private) |
| 1069 | fn | findLastContextMarker | (private) |
| 1083 | fn | stripLeadingCurrentMessageContextBeforeEnvelope | (private) |
| 1109 | fn | stripLeadingPlainTextMetadataBody | (private) |
| 1119 | fn | stripLeadingInboundEnvelope | (private) |
| 1141 | fn | stripLeadingChronologicalContextBlocks | (private) |
| 1193 | fn | sanitizeForMemoryCapture | pub |
| 1335 | fn | formatRelevantMemoriesContext | pub |
| 1353 | fn | matchesCustomTrigger | (private) |
| 1361 | fn | shouldCapture | pub |
| 1406 | fn | detectCategory | pub |
| 1482 | fn | resolveCurrentHookConfig | (private) |
