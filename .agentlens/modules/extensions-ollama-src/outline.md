# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 8 large files in this module.

## extensions/ollama/src/embedding-provider.test.ts (818 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | fn | mockEmbeddingFetch | (private) |
| 58 | fn | firstFetchInit | (private) |
| 66 | fn | readEmbeddingRequestBody | (private) |
| 73 | fn | readFirstEmbeddingInput | (private) |
| 79 | fn | firstGuardedFetchCall | (private) |
| 87 | fn | cancelTrackedResponse | (private) |
| 109 | fn | expectEmbeddingFetch | (private) |

## extensions/ollama/src/node-inference.ts (551 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | NodeModel | (private) |
| 57 | type | OllamaModelsPayload | (private) |
| 62 | type | OllamaChatPayload | (private) |
| 76 | type | NodeSummary | (private) |
| 80 | fn | asRecord | (private) |
| 86 | fn | readNodeCommandParams | (private) |
| 97 | fn | errorMessage | (private) |
| 101 | fn | durationMs | (private) |
| 108 | fn | optionalNumber | (private) |
| 112 | fn | requestOllamaJson | (private) |
| 159 | fn | fetchLoadedModelNames | (private) |
| 183 | fn | discoverOllamaNodeModels | (private) |
| 242 | fn | runOllamaNodeChat | (private) |
| 317 | fn | createOllamaNodeHostCommands | pub |
| 372 | fn | createOllamaNodeInvokePolicy | pub |
| 380 | fn | findNode | (private) |
| 395 | fn | parseInvokePayload | (private) |
| 407 | fn | invokeNode | (private) |
| 448 | fn | createOllamaNodeInferenceTool | pub |

## extensions/ollama/src/setup.test.ts (1085 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | createOllamaFetchMock | (private) |
| 81 | fn | mockCall | (private) |
| 85 | fn | mockCallArg | (private) |
| 89 | fn | abortReasonAsError | (private) |
| 95 | fn | createLocalPrompter | (private) |
| 103 | fn | createCloudPrompter | (private) |
| 112 | fn | createCloudLocalPrompter | (private) |
| 120 | fn | createDefaultOllamaConfig | (private) |
| 127 | fn | createRuntime | (private) |

## extensions/ollama/src/setup.ts (947 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | type | OllamaSetupOptions | (private) |
| 61 | type | OllamaSetupResult | (private) |
| 67 | fn | isTruthyEnvValue | (private) |
| 71 | fn | resolveOllamaSetupDefaultBaseUrl | (private) |
| 77 | type | OllamaInteractiveMode | (private) |
| 78 | type | HostBackedOllamaInteractiveMode | (private) |
| 94 | fn | buildOllamaUnreachableLines | (private) |
| 103 | fn | buildOllamaCloudSigninLines | (private) |
| 112 | fn | normalizeOllamaModelName | (private) |
| 124 | fn | isOllamaCloudModel | (private) |
| 128 | fn | formatOllamaPullStatus | (private) |
| 140 | fn | checkOllamaCloudAuth | pub |
| 174 | type | OllamaPullChunk | (private) |
| 181 | type | OllamaPullResult | (private) |
| 183 | fn | readOllamaPullChunkWithIdleTimeout | (private) |
| 190 | fn | clear | (private) |
| 225 | fn | pullOllamaModelCore | (private) |
| 337 | fn | pullOllamaModel | (private) |
| 365 | fn | pullOllamaModelNonInteractive | (private) |
| 380 | fn | promptForOllamaCloudCredential | (private) |
| 433 | fn | buildOllamaModelsConfig | (private) |
| 447 | fn | getOllamaLatestDedupeKey | (private) |
| 452 | fn | isExplicitLatestOllamaModel | (private) |
| 456 | fn | shouldReplaceOllamaModelName | (private) |
| 460 | fn | mergeUniqueModelNames | (private) |
| 481 | fn | findAvailableOllamaModelName | (private) |
| 491 | fn | applyOllamaProviderConfig | (private) |
| 516 | fn | storeOllamaCredential | (private) |
| 524 | fn | promptForOllamaBaseUrl | (private) |
| 538 | fn | resolveHostBackedSuggestedModelNames | (private) |
| 560 | fn | parseOllamaSetupShowInfo | (private) |
| 587 | fn | inspectOllamaModelsForSetup | (private) |
| 647 | fn | promptAndConfigureHostBackedOllama | (private) |
| 669 | fn | supportsTools | (private) |
| 755 | fn | promptAndConfigureOllama | pub |
| 815 | fn | configureOllamaNonInteractive | pub |
| 906 | fn | ensureOllamaModelPulled | pub |
| 934 | fn | toLintErrorObject | (private) |

## extensions/ollama/src/stream-runtime.test.ts (3082 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | GuardedFetchCall | (private) |
| 43 | fn | requireEntry | (private) |
| 47 | fn | requireRecord | (private) |
| 54 | fn | requireHeaders | (private) |
| 58 | fn | expectToolCallContent | (private) |
| 68 | fn | expectIteratorEvent | (private) |
| 1479 | fn | mockNdjsonReader | (private) |
| 1500 | fn | expectDoneEventContent | (private) |
| 1514 | fn | expectNoParsedChunks | (private) |
| 1651 | fn | withMockNdjsonFetch | (private) |
| 1668 | fn | createControlledNdjsonFetch | (private) |
| 1703 | fn | getGuardedFetchCall | (private) |
| 1707 | fn | cancelTrackedResponse | (private) |
| 1729 | fn | createOllamaTestStream | (private) |
| 1758 | fn | collectStreamEvents | (private) |
| 1766 | fn | nextEventWithin | (private) |

## extensions/ollama/src/stream.test.ts (529 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | makeOllamaResponse | (private) |
| 122 | fn | makeNdjsonBody | (private) |
| 133 | fn | streamOllamaEvents | (private) |

## extensions/ollama/src/stream.ts (1479 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 66 | type | OllamaStreamCooperativeScheduler | (private) |
| 70 | fn | throwIfOllamaStreamAborted | (private) |
| 76 | fn | createOllamaStreamCooperativeScheduler | (private) |
| 102 | fn | countMatches | (private) |
| 107 | fn | maxCharacterFrequency | (private) |
| 118 | fn | isKnownOllamaGarbledVisibleTextModel | (private) |
| 122 | fn | isLikelyGarbledVisibleText | (private) |
| 145 | fn | resolveOllamaBaseUrlForRun | pub |
| 160 | fn | resolveConfiguredOllamaProviderConfig | pub |
| 185 | fn | isOllamaCompatProvider | pub |
| 220 | fn | resolveOllamaCompatNumCtxEnabled | pub |
| 227 | fn | shouldInjectOllamaCompatNumCtx | pub |
| 244 | fn | wrapOllamaCompatNumCtx | pub |
| 255 | type | OllamaThinkValue | (private) |
| 281 | fn | createOllamaThinkingWrapper | (private) |
| 292 | fn | resolveOllamaThinkValue | (private) |
| 308 | fn | resolveOllamaThinkParamValue | (private) |
| 330 | fn | shouldForwardNativeOllamaThink | (private) |
| 339 | fn | resolveOllamaConfiguredNumCtx | (private) |
| 347 | fn | resolveOllamaNumCtx | (private) |
| 370 | fn | resolveOllamaNativeNumCtx | (private) |
| 382 | fn | resolveOllamaModelOptions | (private) |
| 402 | fn | normalizeOllamaGreedySamplingOptions | (private) |
| 414 | fn | resolveOllamaTopLevelParams | (private) |
| 433 | fn | resolveStreamingTextDelta | (private) |
| 448 | fn | createConfiguredOllamaCompatStreamWrapper | pub |
| 504 | fn | buildOllamaChatRequest | pub |
| 523 | type | StreamModelDescriptor | (private) |
| 530 | type | OllamaUsageFallback | (private) |
| 537 | fn | buildUsageWithNoCost | (private) |
| 558 | fn | buildStreamAssistantMessage | (private) |
| 577 | fn | buildStreamErrorAssistantMessage | (private) |
| 599 | interface | OllamaChatRequest | (private) |
| 608 | interface | OllamaChatMessage | (private) |
| 616 | interface | OllamaTool | (private) |
| 625 | interface | OllamaToolCall | (private) |
| 633 | interface | OllamaChatResponse | (private) |
| 653 | fn | safeJsonLength | (private) |
| 662 | fn | estimateTokensFromChars | (private) |
| 669 | fn | resolveOllamaStopReason | (private) |
| 681 | fn | estimateOllamaPromptTokens | (private) |
| 696 | fn | estimateOllamaCompletionTokens | (private) |
| 709 | fn | resolveUsageCount | (private) |
| 719 | type | InputContentPart | (private) |
| 725 | fn | extractTextContent | (private) |
| 738 | fn | extractOllamaImages | (private) |
| 747 | fn | ensureArgsObject | (private) |
| 751 | fn | normalizeOllamaToolCallArguments | (private) |
| 755 | fn | inferOllamaSchemaType | (private) |
| 804 | fn | normalizeOllamaToolSchema | (private) |
| 850 | type | OllamaToolCallNameOptions | (private) |
| 854 | type | OllamaAssistantMessageBuildOptions | (private) |
| 858 | fn | readOllamaToolCallId | (private) |
| 862 | fn | extractToolCalls | (private) |
| 895 | fn | buildOllamaToolNameSet | (private) |
| 908 | fn | normalizeOllamaToolCallName | (private) |
| 936 | fn | convertToOllamaMessages | pub |
| 987 | fn | extractOllamaTools | (private) |
| 1008 | fn | buildAssistantMessage | pub |
| 1094 | fn | resolveOllamaChatUrl | (private) |
| 1100 | fn | resolveOllamaModelHeaders | (private) |
| 1109 | fn | resolveOllamaRequestTimeoutMs | (private) |
| 1120 | fn | createRawOllamaStreamFn | (private) |
| 1130 | fn | run | (private) |
| 1224 | fn | textContentIndex | (private) |
| 1240 | fn | closeThinkingBlock | (private) |
| 1259 | fn | closeTextBlock | (private) |
| 1278 | fn | flushVisibleText | (private) |
| 1460 | fn | createOllamaStreamFn | pub |
| 1467 | fn | createConfiguredOllamaStreamFn | pub |

## extensions/ollama/src/web-search-provider.test.ts (531 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | OllamaProviderConfigOverride | (private) |
| 26 | fn | createOllamaConfig | (private) |
| 41 | fn | createOllamaConfigWithWebSearchBaseUrl | (private) |
| 58 | fn | createSetupNotes | (private) |
| 70 | fn | mockSuccessfulSearchResponse | (private) |
| 80 | fn | runOllamaWebSearchSetup | (private) |
| 90 | fn | runOllamaWebSearch | (private) |
| 107 | fn | expectOllamaWebSearchRequest | (private) |
| 148 | fn | fetchCall | (private) |
| 156 | fn | fetchRequest | (private) |
| 170 | fn | expectSingleSearchResultUrl | (private) |
