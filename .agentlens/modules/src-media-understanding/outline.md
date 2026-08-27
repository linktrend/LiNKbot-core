# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 15 large files in this module.

## src/media-understanding/apply.test.ts (2076 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | ResolveApiKeyForProvider | (private) |
| 50 | fn | createTempMediaDir | (private) |
| 60 | fn | getSharedTempMediaCacheDir | (private) |
| 67 | fn | createGroqAudioConfig | (private) |
| 81 | fn | createGroqProviders | (private) |
| 90 | fn | createRegistryMediaProviders | (private) |
| 102 | fn | expectTranscriptApplied | (private) |
| 115 | fn | getRunExecCall | (private) |
| 123 | fn | getRunExecCallForCommand | (private) |
| 131 | fn | getRunFfmpegArgs | (private) |
| 139 | fn | expectCliRunOptions | (private) |
| 146 | fn | createMediaDisabledConfig | (private) |
| 158 | fn | createMediaDisabledConfigWithAllowedMimes | (private) |
| 173 | fn | createTempMediaFile | (private) |
| 193 | fn | createMockExecutable | (private) |
| 199 | fn | withMediaAutoDetectEnv | (private) |
| 219 | fn | createAudioCtx | (private) |
| 236 | fn | setupAudioAutoDetectCase | (private) |
| 255 | fn | mockWhisperCliTranscript | (private) |
| 270 | fn | applyWithDisabledMedia | (private) |
| 288 | fn | expectFileNotApplied | (private) |

## src/media-understanding/apply.ts (725 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | ApplyMediaUnderstandingResult | pub |
| 97 | fn | sanitizeMimeType | (private) |
| 106 | fn | appendFileBlocks | (private) |
| 118 | fn | wrapUntrustedAttachmentContent | (private) |
| 125 | fn | resolveUtf16Charset | (private) |
| 195 | fn | decodeLegacyText | (private) |
| 208 | fn | getTextStats | (private) |
| 238 | fn | isMostlyPrintable | (private) |
| 242 | fn | looksLikeLegacyTextBytes | (private) |
| 251 | fn | looksLikeUtf8Text | (private) |
| 264 | fn | hasSuspiciousBinarySignal | (private) |
| 280 | fn | decodeTextSample | (private) |
| 300 | fn | guessDelimitedMime | (private) |
| 316 | fn | resolveTextMimeFromName | (private) |
| 324 | fn | buildSyntheticSkippedAudioOutputs | (private) |
| 350 | fn | isBinaryMediaMime | (private) |
| 386 | type | ExtractedFileContext | (private) |
| 391 | fn | extractFileContext | (private) |
| 534 | fn | applyMediaUnderstanding | pub |

## src/media-understanding/attachments.cache.ts (522 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | MediaBufferResult | (private) |
| 35 | type | MediaPathResult | (private) |
| 40 | type | LocalReadResult | (private) |
| 52 | type | AttachmentCacheEntry | (private) |
| 65 | fn | concreteMime | (private) |
| 73 | fn | getDefaultLocalPathRoots | (private) |
| 80 | fn | resolveUsableLocalCandidate | (private) |
| 106 | type | MediaAttachmentCacheOptions | pub |
| 119 | class | MediaAttachmentCache | pub |

## src/media-understanding/image.runtime-profile.test.ts (885 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 71 | type | ResolveModelWithRegistryTestParams | (private) |
| 77 | type | AuthRequestCall | (private) |
| 83 | fn | requireMockCallAt | (private) |
| 97 | fn | requireFirstMockCall | (private) |
| 273 | fn | getApiKeyForModelCall | (private) |

## src/media-understanding/image.runtime-timeout.test.ts (794 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 66 | type | ResolveModelWithRegistryTestParams | (private) |
| 72 | fn | requireMockCallAt | (private) |
| 86 | fn | requireFirstMockCall | (private) |

## src/media-understanding/image.test.ts (969 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 67 | type | ResolveModelWithRegistryTestParams | (private) |
| 73 | type | AuthRequestCall | (private) |
| 79 | fn | requireMockCallAt | (private) |
| 93 | fn | requireFirstMockCall | (private) |
| 100 | fn | requireRecord | (private) |
| 276 | fn | getApiKeyForModelCall | (private) |

## src/media-understanding/image.ts (576 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | resolveImageToolMaxTokens | (private) |
| 42 | fn | isNativeResponsesReasoningPayload | (private) |
| 59 | fn | removeReasoningInclude | (private) |
| 67 | fn | disableReasoningForImageRetryPayload | (private) |
| 90 | fn | isImageModelNoTextError | (private) |
| 94 | fn | isPromiseLike | (private) |
| 98 | fn | composeImageDescriptionPayloadHandlers | (private) |
| 109 | fn | runSecond | (private) |
| 112 | fn | coerceResult | (private) |
| 126 | fn | buildImageContext | (private) |
| 152 | fn | shouldPlaceImagePromptInUserContent | (private) |
| 174 | fn | buildImageRequestHeaders | (private) |
| 187 | fn | describeImagesWithMinimax | (private) |
| 228 | fn | isUnknownModelError | (private) |
| 232 | fn | resolveConfiguredProviderBaseUrl | (private) |
| 251 | fn | resolveConfiguredProviderAllowPrivateNetwork | (private) |
| 267 | fn | isMinimaxCnAlias | (private) |
| 272 | fn | isMinimaxCnBaseUrl | (private) |
| 285 | fn | hasConfiguredProviderApiKey | (private) |
| 293 | fn | resolveMinimaxVlmAuthProvider | (private) |
| 303 | fn | resolveMinimaxVlmFallbackRuntime | (private) |
| 327 | fn | resolveImageDescriptionTimeoutMs | (private) |
| 331 | fn | buildImageDescriptionTimeoutError | (private) |
| 352 | fn | withImageDescriptionTimeout | (private) |
| 379 | fn | describeImagesWithModelInternal | (private) |
| 470 | fn | completeImage | (private) |
| 524 | fn | toImagesDescriptionRequest | (private) |
| 549 | fn | describeImagesWithModel | pub |
| 555 | fn | describeImagesWithModelPayloadTransform | pub |
| 562 | fn | describeImageWithModel | pub |
| 568 | fn | describeImageWithModelPayloadTransform | pub |

## src/media-understanding/runner.auto-audio.test.ts (601 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | createProviderRegistry | (private) |
| 33 | fn | createOpenAiAudioProvider | (private) |
| 45 | fn | createOpenAiAudioCfg | (private) |
| 59 | fn | createMockExecutable | (private) |
| 65 | fn | runAutoAudioCase | (private) |
| 88 | type | CapabilityResult | (private) |
| 90 | fn | requireCapabilityOutput | (private) |
| 483 | fn | runCase | (private) |

## src/media-understanding/runner.entries.ts (1115 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 76 | type | ProviderRegistry | (private) |
| 79 | fn | resolveLiteralProviderApiKey | (private) |
| 86 | fn | sanitizeProviderHeaders | (private) |
| 106 | fn | trimOutput | (private) |
| 114 | fn | extractSherpaOnnxText | (private) |
| 155 | fn | commandBase | (private) |
| 159 | fn | isAntigravityCliCommand | (private) |
| 164 | fn | findArgValue | (private) |
| 185 | fn | hasArg | (private) |
| 189 | fn | resolveWhisperOutputPath | (private) |
| 201 | fn | resolveWhisperCppOutputPath | (private) |
| 212 | fn | resolveParakeetOutputPath | (private) |
| 229 | fn | readCliTranscriptFile | (private) |
| 240 | fn | resolveCliOutput | (private) |
| 278 | fn | resolveCliMediaPath | (private) |
| 319 | type | ProviderQuery | (private) |
| 321 | fn | normalizeProviderQuery | (private) |
| 337 | fn | normalizeDeepgramQueryKeys | (private) |
| 350 | fn | resolveProviderQuery | (private) |
| 368 | fn | buildModelDecision | pub |
| 402 | fn | resolveEntryRunOptions | (private) |
| 435 | fn | resolveMediaRequestOverrides | (private) |
| 449 | fn | resolveAudioProviderPrompt | (private) |
| 471 | type | ProviderExecutionAuth | (private) |
| 484 | fn | resolveProviderExecutionAuthModelApi | (private) |
| 491 | fn | resolveProviderExecutionAuth | (private) |
| 600 | fn | resolveProviderExecutionContext | (private) |
| 636 | fn | formatDecisionSummary | pub |
| 662 | fn | findDecisionReason | pub |
| 683 | fn | normalizeDecisionReason | pub |
| 693 | fn | summarizeDecisionReason | pub |
| 701 | fn | assertMinAudioSize | (private) |
| 729 | fn | formatMissingProviderHint | (private) |
| 759 | fn | runProviderEntry | pub |
| 898 | fn | buildRequest | (private) |
| 973 | fn | buildRequest | (private) |
| 1009 | fn | runCliEntry | pub |

## src/media-understanding/runner.local-no-auth.test.ts (700 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 69 | fn | createAudioProvider | (private) |
| 82 | fn | createVideoProvider | (private) |
| 95 | fn | withIsolatedAgentDir | (private) |
| 104 | fn | createAudioCfg | (private) |
| 133 | fn | createVideoCfg | (private) |

## src/media-understanding/runner.ts (1172 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 79 | type | ProviderRegistry | (private) |
| 80 | type | ModelCatalogApi | (private) |
| 82 | type | ModelCatalog | (private) |
| 84 | type | RunCapabilityResult | (private) |
| 99 | fn | resolveLiteralProviderApiKey | (private) |
| 108 | fn | hasProviderAuthAvailable | (private) |
| 130 | fn | resolveConfiguredKeyProviderOrder | (private) |
| 148 | fn | resolveConfiguredImageModelId | (private) |
| 160 | fn | resolveConfiguredImageModel | (private) |
| 181 | fn | resolveCatalogImageModelId | (private) |
| 198 | fn | resolveDefaultMediaModelFromRegistry | (private) |
| 207 | fn | resolveAutoMediaKeyProvidersFromRegistry | (private) |
| 211 | type | AutoProviderEntry | (private) |
| 238 | fn | explicitImageModelVisionStatus | (private) |
| 273 | fn | resolveAutoImageModelId | (private) |
| 335 | fn | buildProviderRegistry | pub |
| 342 | fn | resolveMediaAttachmentLocalRoots | pub |
| 363 | fn | clearMediaUnderstandingBinaryCacheForTests | (private) |
| 375 | fn | expandHomeDir | (private) |
| 389 | fn | hasPathSeparator | (private) |
| 393 | fn | candidateBinaryNames | (private) |
| 407 | fn | isExecutable | (private) |
| 423 | fn | findBinary | (private) |
| 457 | fn | probeAntigravityCliCandidate | (private) |
| 482 | fn | resolveAntigravityCliBinary | (private) |
| 498 | fn | resolveAntigravityCliEntry | (private) |
| 521 | fn | resolveKeyEntry | (private) |
| 614 | fn | resolveImageModelFromAgentDefaults | (private) |
| 665 | fn | hasExplicitImageUnderstandingConfig | (private) |
| 671 | fn | isMinimaxNativeVisionModel | (private) |
| 680 | fn | activeModelSupportsNativeVision | (private) |
| 712 | fn | resolveAutoEntries | (private) |
| 764 | fn | resolveAutoImageModel | pub |
| 817 | fn | resolveActiveModelEntry | (private) |
| 893 | fn | runAttachmentEntries | (private) |
| 992 | fn | hasFailedMediaAttempt | (private) |
| 998 | fn | runCapability | pub |

## src/media-understanding/runner.vision-skip.test.ts (1085 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | TestCatalogEntry | (private) |
| 75 | fn | setCompatibleActiveMediaUnderstandingRegistry | (private) |
| 105 | type | CapabilityResult | (private) |
| 107 | fn | requireDecisionAttachment | (private) |
| 115 | fn | requireCapabilityOutput | (private) |

## src/media-understanding/runtime.test.ts (991 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | fn | requireRunCapabilityRequest | (private) |

## src/media-understanding/shared.test.ts (1153 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | fn | getFirstGuardedFetchCall | (private) |
| 71 | fn | createTricklingResponse | (private) |

## src/media-understanding/shared.ts (755 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | fn | resolveAudioTranscriptionUploadFileName | pub |
| 66 | fn | buildAudioTranscriptionFormData | pub |
| 88 | type | ProviderOperationDeadline | pub |
| 95 | type | ProviderOperationTimeoutMs | pub |
| 97 | type | GuardedProviderRequestParams | (private) |
| 112 | fn | createProviderOperationDeadline | pub |
| 131 | fn | resolveProviderOperationTimeoutMs | pub |
| 148 | fn | createProviderOperationTimeoutError | (private) |
| 155 | fn | resolveProviderRequestTimeoutMs | (private) |
| 168 | fn | createProviderOperationBodyReadOptions | (private) |
| 179 | fn | createProviderOperationTimeoutResolver | pub |
| 187 | fn | waitProviderOperationPollInterval | pub |
| 208 | fn | pollProviderOperationJson | pub |
| 285 | fn | fetchProviderOperationResponse | pub |
| 332 | fn | fetchProviderDownloadResponse | pub |
| 366 | fn | resolveGuardedHttpTimeoutMs | (private) |
| 373 | fn | sanitizeAuditContext | (private) |
| 384 | type | ResolvedProviderHttpRequestConfig | (private) |
| 392 | type | ResolvedProviderHttpRequestConfigWithOriginTrust | (private) |
| 396 | fn | resolveProviderHttpRequestConfigWithOriginTrustInternal | (private) |
| 441 | fn | resolveProviderHttpRequestConfig | pub |
| 454 | fn | resolveProviderHttpRequestConfigWithOriginTrust | pub |
| 484 | fn | shouldAutoUpgradeToTrustedEnvProxy | (private) |
| 495 | fn | fetchWithTimeoutGuarded | pub |
| 553 | type | GuardedProviderRequestOptions | (private) |
| 555 | fn | mergeGuardedRequestSsrfPolicy | (private) |
| 568 | fn | resolveGuardedRequestOptions | (private) |
| 591 | fn | fetchGuardedProviderOperationResponse | (private) |
| 641 | type | GuardedPostRequestRetryOptions | (private) |
| 659 | fn | postTranscriptionRequest | pub |
| 675 | fn | postGuardedRequest | (private) |
| 684 | fn | operation | (private) |
| 714 | fn | postJsonRequest | pub |
| 730 | fn | postMultipartRequest | pub |
| 746 | fn | requireTranscriptionText | pub |
