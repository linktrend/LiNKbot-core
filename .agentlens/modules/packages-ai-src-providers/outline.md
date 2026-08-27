# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 12 large files in this module.

## packages/ai/src/providers/agent-tools-parameter-schema.ts (972 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | ToolSchemaModelCompat | pub |
| 28 | fn | extractToolSchemaModelCompat | pub |
| 42 | fn | resolveUnsupportedToolSchemaKeywords | pub |
| 54 | fn | shouldOmitEmptyArrayItems | pub |
| 60 | type | ToolParameterSchemaOptions | pub |
| 69 | fn | resolveToolParameterSchemaCacheKey | (private) |
| 90 | fn | getCachedToolParameterSchema | (private) |
| 94 | fn | rememberCachedToolParameterSchema | (private) |
| 106 | fn | isGeminiModelId | (private) |
| 110 | fn | extractEnumValues | (private) |
| 136 | fn | mergePropertySchemas | (private) |
| 171 | type | FlattenableVariantKey | (private) |
| 172 | type | TopLevelConditionalKey | (private) |
| 174 | fn | setOwnSchemaProperty | (private) |
| 183 | fn | hasTopLevelArrayKeyword | (private) |
| 190 | fn | getFlattenableVariantKey | (private) |
| 202 | fn | getTopLevelConditionalKey | (private) |
| 211 | fn | hasTopLevelObjectSchema | (private) |
| 222 | fn | isObjectLikeSchemaMissingType | (private) |
| 233 | fn | isTypedObjectSchemaMissingValidProperties | (private) |
| 244 | fn | isTrulyEmptySchema | (private) |
| 248 | fn | normalizeArraySchemasMissingItems | (private) |
| 328 | fn | schemaAllowsArrayType | (private) |
| 354 | fn | stripEmptyArrayItemsFromArraySchemas | (private) |
| 410 | type | SchemaDefs | (private) |
| 415 | fn | copySchemaMeta | (private) |
| 423 | fn | extendSchemaDefs | (private) |
| 464 | fn | decodeJsonPointerSegment | (private) |
| 468 | fn | resolveJsonPointerPath | (private) |
| 492 | fn | resolveLocalJsonPointer | (private) |
| 522 | fn | tryResolveLocalRef | (private) |
| 540 | fn | inlineLocalSchemaRefsWithDefs | (private) |
| 648 | fn | inlineLocalToolSchemaRefs | (private) |
| 673 | fn | appendNullSchemaType | (private) |
| 686 | fn | isNullSchemaLike | (private) |
| 702 | fn | hasOpenApiComposition | (private) |
| 706 | fn | schemaCompositionAlreadyAllowsNull | (private) |
| 713 | fn | wrapNullableComposedSchema | (private) |
| 724 | fn | normalizeOpenApiSchemaKeywords | (private) |
| 800 | fn | normalizeToolParameterSchemaUncached | (private) |
| 835 | fn | applyProviderCleaning | (private) |
| 954 | fn | normalizeToolParameterSchema | pub |

## packages/ai/src/providers/anthropic.test.ts (2780 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | createSseResponse | (private) |
| 39 | fn | makeAnthropicModel | (private) |
| 55 | fn | makeSonnet5PrefillContext | (private) |
| 2611 | fn | createSseEventResponse | (private) |
| 2658 | fn | createSseEventResponse | (private) |

## packages/ai/src/providers/anthropic.ts (1684 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 105 | fn | getCacheControl | (private) |
| 151 | fn | toClaudeCodeName | (private) |
| 156 | fn | convertContentBlocks | (private) |
| 229 | type | AnthropicEffort | pub |
| 231 | type | AnthropicThinkingDisplay | pub |
| 237 | fn | getAnthropicCompat | (private) |
| 252 | interface | AnthropicOptions | pub |
| 297 | fn | mergeHeaders | (private) |
| 467 | type | Block | (private) |
| 812 | fn | normalizeAnthropicToolChoice | (private) |
| 828 | fn | supportsAdaptiveThinking | (private) |
| 832 | fn | normalizeAnthropicThinkingOptions | (private) |
| 851 | fn | supportsNativeXhighEffort | (private) |
| 859 | fn | mapThinkingLevelToEffort | (private) |
| 897 | type | AnthropicSimpleStreamOptions | (private) |
| 982 | fn | isOAuthToken | (private) |
| 987 | fn | isAnthropicPublicEndpoint | (private) |
| 1003 | fn | supportsAnthropicServerSideFallback | (private) |
| 1010 | fn | createClient | (private) |
| 1163 | fn | buildParams | (private) |
| 1296 | fn | normalizeToolCallId | (private) |
| 1300 | fn | convertMessages | (private) |
| 1540 | fn | applyContentBlockCacheControl | (private) |
| 1548 | fn | buildAnthropicSystemBlocks | (private) |
| 1572 | fn | buildSystemPromptBlocks | (private) |
| 1607 | fn | countNativeCacheControlMarkers | (private) |
| 1621 | fn | shouldUseFineGrainedToolStreamingBeta | (private) |
| 1630 | fn | convertTools | (private) |
| 1663 | fn | mapStopReason | (private) |

## packages/ai/src/providers/google-shared.ts (924 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | GoogleApiType | (private) |
| 45 | type | GoogleThinkingLevel | (private) |
| 47 | type | GoogleToolChoice | (private) |
| 49 | type | GoogleThinkingOptions | (private) |
| 55 | type | GoogleProviderOptions | pub |
| 60 | type | GoogleGenerateContentClient | (private) |
| 68 | type | ClampedGoogleThinkingLevel | (private) |
| 85 | fn | isThinkingPart | (private) |
| 99 | fn | retainThoughtSignature | (private) |
| 112 | fn | isValidThoughtSignature | (private) |
| 125 | fn | resolveThoughtSignature | (private) |
| 136 | fn | requiresToolCallId | (private) |
| 140 | fn | getGeminiMajorVersion | (private) |
| 149 | fn | supportsMultimodalFunctionResponse | (private) |
| 161 | fn | convertMessages | pub |
| 355 | fn | sanitizeForOpenApi | (private) |
| 379 | fn | convertTools | pub |
| 403 | fn | mapToolChoice | (private) |
| 416 | fn | createGoogleAssistantOutput | pub |
| 439 | fn | runGoogleGenerateContentLifecycle | pub |
| 479 | fn | buildGoogleGenerateContentParams | pub |
| 546 | fn | buildGoogleSimpleThinking | pub |
| 587 | fn | getDisabledGoogleThinkingConfig | pub |
| 611 | fn | isGemma4Model | (private) |
| 615 | fn | isGemini3ProModel | (private) |
| 619 | fn | isGemini3FlashModel | (private) |
| 623 | fn | getGoogleThinkingLevel | (private) |
| 661 | fn | getGoogleBudget | (private) |
| 708 | fn | mapStopReason | (private) |
| 738 | fn | consumeGoogleGenerateContentStream | pub |
| 755 | fn | blockIndex | (private) |
| 757 | fn | endCurrentBlock | (private) |

## packages/ai/src/providers/mistral.test.ts (1001 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | fn | makeMistralModel | (private) |
| 75 | fn | makeUnreadableParameterTool | (private) |

## packages/ai/src/providers/mistral.ts (1045 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | fn | createBoundedMistralFetcher | pub |
| 107 | type | MistralReasoningEffort | (private) |
| 109 | interface | MistralOptions | (private) |
| 240 | fn | createOutput | (private) |
| 260 | fn | createMistralToolCallIdNormalizer | (private) |
| 284 | fn | deriveMistralToolCallId | (private) |
| 297 | fn | formatMistralError | (private) |
| 313 | fn | truncateErrorText | (private) |
| 321 | fn | safeJsonStringify | (private) |
| 330 | fn | buildChatPayload | (private) |
| 386 | fn | resolveMistralPromptCacheKey | (private) |
| 393 | fn | readMistralCachedPromptTokens | (private) |
| 410 | fn | consumeChatStream | (private) |
| 418 | fn | blockIndex | (private) |
| 419 | type | ToolBlockIdentity | (private) |
| 431 | fn | createMissingToolCallId | (private) |
| 434 | fn | findIdentityCandidates | (private) |
| 575 | fn | finishCurrentBlock | (private) |
| 800 | fn | toFunctionTools | (private) |
| 818 | fn | stripSymbolKeys | (private) |
| 834 | fn | toChatMessages | (private) |
| 944 | fn | buildToolResultText | (private) |
| 974 | fn | usesReasoningEffort | (private) |
| 982 | fn | usesPromptModeReasoning | (private) |
| 986 | fn | mapReasoningEffort | (private) |
| 993 | fn | mapToolChoice | (private) |
| 1027 | fn | mapChatStopReason | (private) |

## packages/ai/src/providers/openai-chatgpt-responses.test.ts (1114 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | createJwt | (private) |
| 24 | fn | stubTimeoutSignal | (private) |
| 35 | fn | stubHangingFetch | (private) |
| 49 | fn | abort | (private) |
| 66 | fn | completedSseResponse | (private) |
| 271 | class | ConnectionLimitWebSocket | (private) |
| 321 | class | AgedWebSocket | (private) |
| 413 | class | FailingWebSocket | (private) |
| 648 | class | HangingWebSocket | (private) |
| 681 | class | OpenNoMessageWebSocket | (private) |
| 734 | class | OpeningThenTimedOutWebSocket | (private) |

## packages/ai/src/providers/openai-chatgpt-responses.ts (1720 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | DynamicImport | (private) |
| 15 | type | ProcessWithOsBuiltinModule | (private) |
| 19 | fn | loadNodeOs | (private) |
| 100 | interface | OpenAICodexResponsesOptions | (private) |
| 107 | type | CodexResponseStatus | (private) |
| 115 | interface | RequestBody | (private) |
| 138 | fn | isRetryableError | (private) |
| 147 | fn | resolveHttpRetryDelayMs | (private) |
| 173 | fn | resolveRequestTimeoutMs | (private) |
| 180 | fn | buildRequestSignal | (private) |
| 194 | fn | isRequestTimeoutError | (private) |
| 213 | fn | formatRequestTimeoutError | (private) |
| 219 | type | ProcessWithZlibBuiltinModule | (private) |
| 223 | fn | compressRequestBodyZstd | (private) |
| 528 | fn | buildRequestBody | (private) |
| 591 | fn | getServiceTierCostMultiplier | (private) |
| 605 | fn | applyServiceTierPricing | (private) |
| 623 | fn | resolveCodexServiceTier | (private) |
| 636 | fn | resolveCodexUrl | (private) |
| 648 | fn | resolveCodexWebSocketUrl | (private) |
| 663 | fn | processStream | (private) |
| 682 | class | CodexApiError | (private) |
| 698 | class | CodexProtocolError | (private) |
| 709 | fn | isCodexNonTransportError | (private) |
| 713 | fn | isWebSocketConnectionLimitReachedError | (private) |
| 717 | fn | extractCodexEventError | (private) |
| 787 | fn | normalizeCodexStatus | (private) |
| 875 | type | WebSocketEventType | (private) |
| 876 | type | WebSocketListener | (private) |
| 878 | interface | WebSocketLike | (private) |
| 885 | interface | CachedWebSocketContinuationState | (private) |
| 891 | interface | CachedWebSocketConnection | (private) |
| 899 | type | WebSocketConstructor | (private) |
| 908 | fn | resetOpenAICodexWebSocketStateForTest | pub |
| 913 | fn | closeOpenAICodexWebSocketSessions | pub |
| 914 | fn | closeEntry | (private) |
| 936 | fn | isWebSocketSseFallbackActive | (private) |
| 940 | fn | getWebSocketConstructor | (private) |
| 955 | fn | getProxyForUrl | (private) |
| 983 | class | WebSocketCloseError | (private) |
| 997 | fn | getWebSocketReadyState | (private) |
| 1002 | fn | isWebSocketReusable | (private) |
| 1008 | fn | isWebSocketSessionExpired | (private) |
| 1012 | fn | closeWebSocketSilently | (private) |
| 1018 | fn | scheduleSessionWebSocketExpiry | (private) |
| 1031 | fn | connectWebSocket | (private) |
| 1081 | fn | onAbort | (private) |
| 1091 | fn | cleanup | (private) |
| 1110 | fn | acquireWebSocket | (private) |
| 1197 | fn | extractWebSocketError | (private) |
| 1218 | fn | extractWebSocketCloseError | (private) |
| 1237 | fn | decodeWebSocketData | (private) |
| 1266 | fn | wake | (private) |
| 1331 | fn | onAbort | (private) |
| 1374 | fn | requestBodyWithoutInput | (private) |
| 1379 | fn | responseInputsEqual | (private) |
| 1383 | fn | requestBodiesMatchExceptInput | (private) |
| 1387 | fn | getCachedWebSocketInputDelta | (private) |
| 1412 | fn | buildCachedWebSocketRequestBody | (private) |
| 1451 | fn | processWebSocketStream | (private) |
| 1534 | fn | readChatGptResponsesErrorTextLimited | (private) |
| 1585 | fn | parseErrorResponseText | (private) |
| 1628 | fn | extractOpenAICodexAccountId | pub |
| 1636 | fn | createCodexRequestId | (private) |
| 1649 | fn | buildBaseCodexHeaders | (private) |
| 1669 | fn | buildSSEHeaders | (private) |
| 1689 | fn | buildWebSocketHeaders | (private) |
| 1707 | fn | toLintErrorObject | (private) |

## packages/ai/src/providers/openai-completions.test.ts (1626 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | OpenAICompatibleDelta | (private) |
| 12 | type | OpenAICompatibleChoice | (private) |
| 20 | type | OpenAICompatibleChatCompletionChunk | (private) |
| 27 | type | FirstEventSimpleStreamOptions | (private) |
| 43 | class | MockOpenAI | (private) |
| 110 | fn | createModel | (private) |
| 125 | fn | makeTextChunk | (private) |
| 132 | fn | makeRefusalChunk | (private) |
| 145 | fn | makeRefusalMessageChunk | (private) |
| 158 | fn | makeToolCallChunk | (private) |
| 178 | fn | makeFinishChunk | (private) |
| 194 | fn | createNeverYieldingStream | (private) |

## packages/ai/src/providers/openai-completions.ts (1505 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 76 | fn | hasToolHistory | (private) |
| 92 | fn | isTextContentBlock | (private) |
| 96 | fn | isThinkingContentBlock | (private) |
| 100 | fn | isToolCallBlock | (private) |
| 106 | fn | sanitizeToolResultText | (private) |
| 111 | interface | OpenAICompletionsOptions | pub |
| 116 | interface | OpenAICompatCacheControl | (private) |
| 121 | type | ResolvedOpenAICompletionsCompat | (private) |
| 129 | type | EncryptedReasoningDetail | (private) |
| 135 | fn | isEncryptedReasoningDetail | (private) |
| 149 | type | ChatCompletionInstructionMessageParam | (private) |
| 153 | type | ChatCompletionTextPartWithCacheControl | (private) |
| 157 | type | ChatCompletionToolWithCacheControl | (private) |
| 216 | interface | StreamingToolCallBlock | (private) |
| 220 | type | StreamingBlock | (private) |
| 221 | type | StreamingToolCallDelta | (private) |
| 238 | fn | appendBlock | (private) |
| 242 | fn | getContentIndex | (private) |
| 243 | fn | rememberFirstToolCallById | (private) |
| 256 | fn | finishBlock | (private) |
| 289 | fn | ensureTextBlock | (private) |
| 301 | fn | ensureThinkingBlock | (private) |
| 322 | fn | sealNativeReasoningBeforeText | (private) |
| 328 | fn | appendTextDelta | (private) |
| 339 | fn | appendThinkingDelta | (private) |
| 349 | fn | ensureToolCallBlock | (private) |
| 388 | fn | appendPartitionedContent | (private) |
| 398 | fn | flushPartitionedContent | (private) |
| 643 | fn | createClient | (private) |
| 699 | fn | buildParams | (private) |
| 715 | type | ChatCompletionRequestParams | (private) |
| 876 | fn | clampOpenAICompletionsMaxTokens | (private) |
| 889 | fn | getCompatCacheControl | (private) |
| 901 | fn | applyAnthropicCacheControl | (private) |
| 912 | fn | addCacheControlToSystemPrompt | (private) |
| 924 | fn | addCacheControlToLastConversationMessage | (private) |
| 942 | fn | addCacheControlToLastTool | (private) |
| 957 | fn | addCacheControlToInstructionMessage | (private) |
| 964 | fn | addCacheControlToMessage | (private) |
| 974 | fn | addCacheControlToTextContent | (private) |
| 1006 | fn | buildCacheControlledTextParts | (private) |
| 1029 | fn | convertMessages | pub |
| 1318 | fn | convertTools | (private) |
| 1341 | fn | parseChunkUsage | (private) |
| 1385 | fn | detectCompat | (private) |
| 1470 | fn | getCompat | (private) |

## packages/ai/src/providers/openai-responses-shared.test.ts (3297 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | ResponsesFunctionTool | (private) |
| 23 | type | OpenAIResponsesStreamEvent | (private) |
| 34 | fn | createNeverYieldingResponsesStream | (private) |
| 48 | fn | createCapturedAssistantMessageEventStream | (private) |
| 62 | fn | expectResponsesFunctionTool | (private) |
| 96 | fn | createAssistantOutput | (private) |
| 1450 | fn | collect | (private) |
| 1521 | fn | runOnce | (private) |
| 2648 | fn | collect | (private) |
| 2663 | fn | messageItem | (private) |
| 2732 | fn | collect | (private) |
| 2802 | fn | collect | (private) |

## packages/ai/src/providers/openai-responses-shared.ts (1403 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 82 | fn | splitResponsesToolCallId | (private) |
| 89 | fn | resolveResponsesToolCallId | (private) |
| 105 | fn | sanitizeToolResultText | (private) |
| 110 | type | ReplayableResponseOutputMessage | (private) |
| 111 | type | ReplayableResponseReasoningItem | (private) |
| 112 | type | ResponsesTextContentPart | (private) |
| 115 | type | ResponsesStreamOutputMessage | (private) |
| 118 | type | ResponsesContentPartAddedEvent | (private) |
| 122 | type | ResponsesOutputItemDoneEvent | (private) |
| 126 | type | AzureResponsesContentPartAddedEvent | (private) |
| 129 | type | AzureResponsesOutputItemDoneEvent | (private) |
| 133 | type | OpenAIResponsesStreamEvent | (private) |
| 139 | fn | normalizeResponsesReasoningReplayItem | (private) |
| 153 | fn | encodeTextSignatureV1 | (private) |
| 161 | fn | parseTextSignature | (private) |
| 189 | fn | resolveReplayableResponsesMessageId | (private) |
| 203 | interface | OpenAIResponsesStreamOptions | (private) |
| 215 | interface | ConvertResponsesMessagesOptions | (private) |
| 221 | type | ResponsesRequestOptions | (private) |
| 227 | type | ResponsesStreamRequest | (private) |
| 234 | type | ResponsesStreamClient | (private) |
| 243 | type | ResponsesLifecycleStreamOptions | (private) |
| 249 | type | OpenAIResponsesProcessStreamOptions | (private) |
| 252 | type | ResponsesReasoningEffort | (private) |
| 254 | fn | isResponsesReasoningEffort | (private) |
| 266 | type | ResponsesReasoningSummary | (private) |
| 268 | type | ResponsesCommonParamsOptions | (private) |
| 277 | fn | convertResponsesMessages | pub |
| 504 | fn | createResponsesAssistantOutput | pub |
| 527 | fn | resolveResponsesReasoningEffort | pub |
| 549 | fn | applyCommonResponsesParams | pub |
| 593 | fn | buildResponsesRequestOptions | (private) |
| 603 | fn | cleanStreamingScratchBuffers | (private) |
| 611 | fn | runResponsesStreamLifecycle | pub |
| 688 | fn | processResponsesStream | pub |
| 695 | type | StreamingToolCallBlock | (private) |
| 696 | type | StreamingToolCallState | (private) |
| 700 | type | TextBlockReference | (private) |
| 705 | type | ResponsesOutputSlot | (private) |
| 728 | fn | blockIndex | (private) |
| 921 | fn | appendPendingMessageDelta | (private) |
