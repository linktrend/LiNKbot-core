# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 14 large files in this module.

## extensions/openai/embedding-batch.test.ts (747 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | fn | jsonResponse | (private) |
| 15 | fn | jsonlBytes | (private) |
| 19 | fn | cancelTrackedResponse | (private) |
| 41 | fn | fetchInputUrl | (private) |
| 51 | fn | parseStringBody | (private) |
| 58 | fn | listenLoopbackServer | (private) |
| 73 | fn | closeServer | (private) |
| 579 | fn | writeNext | (private) |

## extensions/openai/image-generation-provider.test.ts (2354 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 84 | fn | mockGeneratedPngResponse | (private) |
| 100 | fn | mockCodexImageStream | (private) |
| 126 | fn | mockCodexCompletedImageStream | (private) |
| 155 | fn | mockCodexRawStream | (private) |
| 162 | fn | mockCodexAuthOnly | (private) |
| 171 | fn | createCodexOAuthAuthStore | (private) |
| 186 | fn | createCodexApiKeyAuthStore | (private) |
| 199 | fn | createCodexTokenAuthStore | (private) |
| 212 | fn | createMixedCodexAuthStore | (private) |
| 222 | fn | createMixedOpenAIAuthStore | (private) |
| 242 | type | MockWithCalls | (private) |
| 248 | type | HttpConfigCall | (private) |
| 259 | type | RequestCall | (private) |
| 270 | type | AuthResolutionCall | (private) |
| 285 | fn | mockCallArg | (private) |
| 296 | fn | jsonRequestCall | (private) |
| 300 | fn | multipartRequestCall | (private) |
| 304 | fn | httpConfigCall | (private) |
| 308 | fn | authResolutionCall | (private) |
| 312 | fn | expectNoJsonRequestUrl | (private) |
| 318 | fn | expectNoJsonRequestUrlContaining | (private) |

## extensions/openai/image-generation-provider.ts (1096 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 92 | fn | sanitizeLogValue | (private) |
| 113 | fn | resolveOpenAIImageTimeoutMs | (private) |
| 123 | fn | resolveOpenAIImageCount | (private) |
| 130 | fn | resolveGeneratedImageMaxBytes | (private) |
| 138 | fn | isPublicOpenAIImageBaseUrl | (private) |
| 161 | fn | isAzureOpenAIBaseUrl | (private) |
| 174 | fn | resolveAzureApiVersion | (private) |
| 178 | fn | buildAzureImageUrl | (private) |
| 190 | fn | resolveOutputMime | (private) |
| 206 | type | OpenAIImageRequest | (private) |
| 207 | type | OpenAIImageOptions | (private) |
| 209 | fn | resolveOpenAIImageOutputCompression | (private) |
| 220 | fn | appendOpenAIImageOptions | (private) |
| 244 | fn | resolveOpenAIImageRequestModel | (private) |
| 259 | fn | resolveNativeOpenAIImageSizesForModel | (private) |
| 269 | fn | resolveConfiguredOpenAIImageBaseUrl | (private) |
| 277 | fn | resolveOpenAIImageRequestSize | (private) |
| 307 | fn | shouldAllowPrivateImageEndpoint | (private) |
| 325 | fn | resolveRequestAuthStore | (private) |
| 341 | fn | hasDirectOpenAIImageApiKeyAuth | (private) |
| 366 | fn | hasCodexResponseTransportProfileConfigured | (private) |
| 380 | fn | resolveOpenAIImageAuthProvider | (private) |
| 396 | fn | hasExplicitOpenAIImageApiKeyConfig | (private) |
| 401 | fn | hasExplicitDirectOpenAIImageConfig | (private) |
| 415 | fn | hasChatGPTImageRouteConfig | (private) |
| 423 | fn | resolveConfiguredOpenAIImageHeaders | (private) |
| 438 | fn | forceOpenAIImageApiKeyAuth | (private) |
| 461 | fn | resolveOpenAIImageAuth | (private) |
| 474 | fn | isCodexSubscriptionAuthMode | (private) |
| 478 | type | OpenAICodexImageGenerationEvent | (private) |
| 501 | fn | inferImageUploadFileName | (private) |
| 515 | fn | readResponseBodyText | (private) |
| 551 | fn | parseCodexImageGenerationEvents | (private) |
| 577 | fn | decodeCodexImagePayload | (private) |
| 599 | fn | toCodexImage | (private) |
| 618 | fn | extractCodexImageGenerationResult | (private) |
| 669 | fn | createOpenAIImageGenerationProviderBase | (private) |
| 709 | fn | resolveOptionalApiKeyForProvider | (private) |
| 724 | fn | logCodexImageAuthSelected | (private) |
| 741 | fn | generateOpenAICodexImage | (private) |
| 854 | fn | buildOpenAIImageGenerationProvider | pub |

## extensions/openai/index.test.ts (594 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | registerOpenAIPluginWithHook | (private) |
| 62 | fn | expectOpenAIPromptContribution | (private) |
| 88 | fn | mockOpenAIImageApiResponse | (private) |
| 93 | fn | response | (private) |
| 124 | fn | firstMockArg | (private) |
| 132 | fn | mockCalls | (private) |
| 136 | fn | expectNoBeforePromptBuildHook | (private) |
| 141 | fn | expectNoRequestUrl | (private) |

## extensions/openai/openai-chatgpt-device-code.test.ts (601 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | fn | createJwt | (private) |
| 12 | fn | createJsonResponse | (private) |
| 21 | fn | cancelTrackedResponse | (private) |
| 43 | fn | fetchCall | (private) |
| 51 | fn | waitForFetchAbort | (private) |
| 57 | fn | rejectWithReason | (private) |
| 67 | fn | createBodyThatStallsUntilAbort | (private) |
| 75 | fn | fail | (private) |

## extensions/openai/openai-chatgpt-provider.ts (718 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 123 | fn | isOpenAIOrLegacyCodexProvider | (private) |
| 128 | fn | isLegacyCodexCompatBaseUrl | (private) |
| 135 | fn | normalizeCodexTransportFields | (private) |
| 159 | fn | hasImageInput | (private) |
| 163 | fn | matchesOpenAICodexImageCapableModel | (private) |
| 180 | fn | applyOpenAICodexImageInputCapability | (private) |
| 196 | fn | normalizeCodexTransport | (private) |
| 227 | fn | resolveCodexForwardCompatModel | (private) |
| 380 | fn | withDefaultCodexContextMetadata | (private) |
| 405 | fn | withCodexTransport | (private) |
| 419 | fn | buildCodexCredentialExtra | (private) |
| 430 | fn | buildOpenAICodexAuthConfigPatch | (private) |
| 442 | fn | refreshOpenAICodexOAuthCredential | (private) |
| 472 | type | OpenAICodexOAuthContext | (private) |
| 477 | fn | runOpenAICodexOAuth | (private) |
| 510 | fn | runOpenAICodexDeviceCode | (private) |
| 574 | fn | buildOpenAICodexAuthDoctorHint | (private) |
| 581 | fn | buildOpenAIChatGPTAuthMethods | pub |
| 615 | fn | buildOpenAICodexProviderHooks | pub |

## extensions/openai/openai-provider.test.ts (2364 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | runCatalogWithFetchGuard | (private) |
| 76 | fn | buildOpenAILiveProviderConfig | (private) |
| 88 | fn | buildOpenAICodexLiveProviderConfig | (private) |
| 171 | fn | readPinnedCodexClientVersion | (private) |
| 182 | fn | runWrappedPayloadCase | (private) |
| 224 | fn | expectFields | (private) |
| 234 | fn | expectCatalogEntry | (private) |
| 242 | fn | expectNoCatalogEntry | (private) |

## extensions/openai/openai-provider.ts (1091 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 73 | fn | classifyOpenAiFailoverCode | (private) |
| 168 | type | BuildOpenAILiveProviderConfigParams | (private) |
| 177 | fn | shouldFetchOpenAILiveModels | (private) |
| 181 | fn | buildOpenAIManifestModelsForBaseUrl | (private) |
| 189 | fn | buildOpenAILiveProviderConfig | (private) |
| 220 | fn | readCodexModelString | (private) |
| 228 | fn | readCodexModelPositiveInteger | (private) |
| 242 | fn | readCodexModelStringArray | (private) |
| 256 | fn | readCodexReasoningLevels | (private) |
| 277 | fn | readCodexModelBoolean | (private) |
| 285 | fn | readCodexModelRows | (private) |
| 296 | fn | shouldIncludeCodexModelRow | (private) |
| 306 | fn | resolveCodexModelInput | (private) |
| 333 | fn | normalizeOpenAICodexCatalogModel | (private) |
| 373 | fn | resolveCodexModelFallback | (private) |
| 381 | fn | buildOpenAICodexModelFromLiveRow | (private) |
| 440 | fn | buildOpenAICodexStaticProviderConfig | (private) |
| 458 | fn | buildOpenAICodexLiveProviderConfig | (private) |
| 505 | fn | isCodexCatalogAuthMode | (private) |
| 509 | fn | resolveOpenAICatalogBaseUrl | (private) |
| 522 | fn | shouldUseOpenAIResponsesTransport | (private) |
| 545 | fn | resolveAuthoredOpenAIConfigRoute | (private) |
| 593 | fn | resolveAuthoredOpenAICompletionsRoute | (private) |
| 615 | fn | isOpenAIProvider | (private) |
| 620 | fn | normalizeOpenAITransport | (private) |
| 645 | fn | shouldUseCodexResponsesHooks | (private) |
| 656 | fn | resolveConfiguredProviderAuthTransport | (private) |
| 670 | fn | shouldResolveDynamicModelThroughCodex | (private) |
| 699 | fn | buildOpenAIUnknownModelHint | (private) |
| 707 | fn | resolveOpenAIGptForwardCompatModel | (private) |
| 846 | fn | buildOpenAIProvider | pub |
| 1088 | fn | buildOpenAICodexProviderPlugin | pub |

## extensions/openai/provider-policy-api.test.ts (1004 lines)

_No symbols extracted._

## extensions/openai/provider-policy-api.ts (553 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | OpenAIResolveSingleModelRouteContext | (private) |
| 40 | fn | normalizeOptionalRouteApi | (private) |
| 44 | fn | normalizeOptionalRouteBaseUrl | (private) |
| 49 | fn | normalizeModelCatalogId | pub |
| 55 | fn | firstRouteBaseUrl | (private) |
| 70 | fn | concreteBaseUrl | (private) |
| 74 | fn | resolveOpenAIEnvironmentBaseUrl | (private) |
| 80 | fn | isHttpBaseUrl | (private) |
| 91 | fn | codexCanReproduceRoute | (private) |
| 107 | fn | withRuntimePolicy | (private) |
| 121 | fn | defaultRuntimeIdForRoute | (private) |
| 130 | fn | route | (private) |
| 149 | fn | resolveSingleObservedModelRoute | (private) |
| 367 | fn | hasAuthoredRouteFacts | (private) |
| 377 | fn | authoredRouteNeedsObservedPlatformApi | (private) |
| 396 | fn | canonicalRouteCandidateBaseUrl | (private) |
| 408 | fn | routeCandidateKey | (private) |
| 418 | fn | compareRouteCandidates | (private) |
| 422 | fn | authOrder | (private) |
| 429 | fn | ambiguousObservedRouteGroup | (private) |
| 435 | fn | resolveAuthoredObservedFallback | (private) |
| 472 | fn | resolveModelRoutes | pub |
| 537 | fn | normalizeConfig | pub |
| 541 | fn | resolveThinkingProfile | pub |

## extensions/openai/realtime-voice-provider.test.ts (2812 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | Listener | (private) |
| 16 | class | MockWebSocket | (private) |
| 55 | fn | emitClose | (private) |
| 105 | type | FakeWebSocketInstance | (private) |
| 106 | type | SentRealtimeEvent | (private) |
| 146 | fn | parseSent | (private) |
| 150 | fn | expectedResponseCreateEvent | (private) |
| 157 | fn | expectedResponseCancelEvent | (private) |
| 164 | fn | createJsonResponse | (private) |
| 173 | fn | isRecord | (private) |
| 177 | fn | requireRecord | (private) |
| 182 | fn | requireNestedRecord | (private) |
| 194 | fn | expectRecordFields | (private) |
| 206 | fn | firstMockCall | (private) |
| 217 | fn | requireFetchRequest | (private) |
| 221 | fn | requireFetchInit | (private) |
| 225 | fn | requireFetchHeaders | (private) |
| 229 | fn | requireFetchJsonBody | (private) |
| 235 | fn | requireSession | (private) |
| 239 | fn | hasSentEventType | (private) |
| 243 | fn | createRealtimeTool | (private) |
| 252 | fn | createUnreadableToolName | (private) |
| 263 | fn | createMalformedToolName | (private) |

## extensions/openai/realtime-voice-provider.ts (1608 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | type | OpenAIRealtimeVoice | (private) |
| 62 | type | OpenAIRealtimeVoiceProviderConfig | (private) |
| 78 | type | OpenAIRealtimeVoiceBridgeConfig | (private) |
| 120 | fn | normalizeOpenAIRealtimeVoice | (private) |
| 130 | type | RealtimeEvent | (private) |
| 156 | type | RealtimeTurnDetectionConfig | (private) |
| 165 | type | RealtimeGaSessionUpdate | (private) |
| 190 | type | RealtimeAzureDeploymentSessionUpdate | (private) |
| 206 | type | OpenAIRealtimeAudioFormatConfig | (private) |
| 215 | fn | normalizeProviderConfig | (private) |
| 242 | fn | asNonNegativeInteger | (private) |
| 247 | fn | asUnitInterval | (private) |
| 252 | type | OpenAIRealtimeApiKeyResolution | (private) |
| 265 | fn | resolveKeychainSecretRef | (private) |
| 299 | fn | resolveOpenAIRealtimeSecretInput | (private) |
| 311 | fn | resolveOpenAIRealtimeEnvApiKey | (private) |
| 320 | fn | resolveOpenAIRealtimeApiKey | (private) |
| 333 | fn | requireOpenAIRealtimeApiKey | (private) |
| 344 | fn | hasOpenAIRealtimeConfiguredApiKeyInput | (private) |
| 348 | fn | hasOpenAIRealtimeApiKeyInput | (private) |
| 355 | fn | normalizeOpenAIRealtimeTools | (private) |
| 389 | fn | resolveOpenAIRealtimePlatformAuth | (private) |
| 426 | fn | requireOpenAIRealtimePlatformAuth | (private) |
| 437 | fn | hasOpenAIRealtimePlatformAuthInput | (private) |
| 456 | fn | isOpenAIRealtimeMaxSessionDurationError | (private) |
| 464 | fn | readRealtimeErrorEventId | (private) |
| 472 | fn | base64ToBuffer | (private) |
| 476 | class | OpenAIRealtimeVoiceBridge | (private) |
| 613 | fn | settleResolve | (private) |
| 621 | fn | settleReject | (private) |
| 637 | fn | openWebSocket | (private) |
| 656 | fn | rejectStartup | (private) |
| 1042 | fn | emitServerEvent | (private) |
| 1459 | fn | resolveOpenAIRealtimeBrowserOfferHeaders | (private) |
| 1477 | fn | createOpenAIRealtimeBrowserSession | (private) |
| 1549 | fn | buildOpenAIRealtimeVoiceProvider | pub |

## extensions/openai/speech-provider.test.ts (661 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | isSpeechRequestBody | (private) |
| 29 | fn | parseRequestBody | (private) |
| 46 | fn | mockSpeechFetchExpectingFormat | (private) |

## extensions/openai/video-generation-provider.test.ts (655 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | fn | postJsonRequest | (private) |
| 41 | fn | postMultipartRequest | (private) |
| 51 | fn | fetchWithTimeoutCall | (private) |
| 61 | fn | fetchWithTimeoutGuardedCall | (private) |
| 73 | fn | pollProviderOperationRequest | (private) |
| 83 | fn | providerHttpConfigRequest | (private) |
| 95 | fn | streamedVideoResponse | (private) |
| 109 | fn | streamedJsonResponse | (private) |
