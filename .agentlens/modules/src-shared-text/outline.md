# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/shared/text/assistant-visible-text.test.ts (1000 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | expectVisibleText | (private) |
| 18 | fn | createLiteralRelevantMemoriesCodeBlock | (private) |
| 30 | fn | expectLiteralVisibleText | (private) |

## src/shared/text/assistant-visible-text.ts (1099 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | ToolCallPayloadKind | (private) |
| 54 | fn | endsInsideQuotedString | (private) |
| 85 | interface | ParsedToolCallTag | (private) |
| 94 | fn | parseXmlTagAt | (private) |
| 149 | fn | isToolCallBoundary | (private) |
| 153 | fn | findTagCloseIndex | (private) |
| 189 | fn | detectToolCallPayloadKind | (private) |
| 200 | fn | startsWithNestedJsonToolCallPayload | (private) |
| 221 | fn | isLikelyStandaloneFunctionToolCall | (private) |
| 242 | fn | isStandaloneOpeningTagLine | (private) |
| 261 | fn | isOpeningTagFollowedByLineBreak | (private) |
| 269 | fn | hasSameLineContentAfterOpeningTag | (private) |
| 277 | fn | isVisibleLineStart | (private) |
| 285 | fn | isAdjacentToStrippedToolCallBlock | (private) |
| 301 | fn | findMatchingToolCallCloseIndex | (private) |
| 318 | fn | findAdjacentOpeningToolCallTag | (private) |
| 337 | fn | parseToolCallTagAt | (private) |
| 342 | fn | hasMatchingXmlCloseTag | (private) |
| 365 | fn | isDanglingFunctionParameterParent | (private) |
| 377 | fn | consumeImmediateLineBreak | (private) |
| 384 | fn | trimImmediateLineBreakBefore | (private) |
| 391 | fn | isLineStartAt | (private) |
| 399 | fn | isLineEndAfter | (private) |
| 407 | fn | unwrapStandaloneParameterTags | (private) |
| 472 | fn | stripToolCallXmlTags | pub |
| 635 | fn | stripMinimaxToolCallXml | pub |
| 656 | fn | isLegacyBracketToolCallPayload | (private) |
| 663 | fn | isLegacyBracketToolResultPayload | (private) |
| 671 | fn | stripLegacyBracketToolCallBlocks | pub |
| 724 | fn | stripDowngradedToolCallText | pub |
| 881 | fn | stripRelevantMemoriesTags | (private) |
| 918 | fn | stripAssistantInternalTraceLines | pub |
| 946 | type | AssistantVisibleTextSanitizerProfile | pub |
| 953 | type | AssistantVisibleTextPipelineOptions | (private) |
| 1009 | fn | applyAssistantVisibleTextStagePipeline | (private) |
| 1017 | fn | stripReasoning | (private) |
| 1023 | fn | applyFinalTrim | (private) |
| 1032 | fn | stripNonReasoningStages | (private) |
| 1061 | fn | sanitizeAssistantVisibleTextWithProfile | pub |
| 1071 | fn | stripAssistantInternalScaffolding | pub |
| 1079 | fn | sanitizeAssistantVisibleText | pub |
| 1084 | fn | sanitizeAssistantFinalAnswerText | pub |
| 1092 | fn | sanitizeAssistantVisibleTextWithOptions | pub |
