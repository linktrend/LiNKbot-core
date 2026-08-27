# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 13 large files in this module.

## extensions/google/image-generation-provider.test.ts (624 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | jsonResponse | (private) |
| 18 | fn | mockGoogleApiKeyAuth | (private) |
| 26 | fn | installGoogleFetchMock | (private) |
| 56 | fn | fetchRequest | (private) |
| 75 | fn | postJsonRequestOptions | (private) |

## extensions/google/oauth.test.ts (1291 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | fn | countMatching | (private) |
| 154 | fn | normalizePath | (private) |
| 168 | fn | resolveExtractedCredentialsOrNull | (private) |
| 176 | fn | installMockFs | (private) |
| 185 | fn | makeFakeLayout | (private) |
| 217 | fn | installGeminiLayout | (private) |
| 253 | fn | installNpmShimLayout | (private) |
| 290 | fn | installBundledNpmLayout | (private) |
| 323 | fn | installHomebrewLibexecLayout | (private) |
| 367 | fn | installWindowsNvmLayoutWithUnrelatedOauth | (private) |
| 444 | fn | dirent | (private) |
| 457 | fn | expectFakeCliCredentials | (private) |
| 657 | fn | getRequestUrl | (private) |
| 667 | fn | getHeaderValue | (private) |
| 680 | fn | responseJson | (private) |
| 687 | fn | oversizedJsonStringFieldResponse | (private) |
| 721 | fn | responseTextBodyWithTextTrap | (private) |
| 732 | fn | tokenResponse | (private) |
| 740 | fn | userInfoResponse | (private) |
| 744 | type | RecordedFetchRequest | (private) |
| 749 | fn | installGeminiOAuthFetchMock | (private) |
| 775 | fn | getFormField | (private) |
| 782 | fn | parseJsonString | (private) |
| 789 | fn | requireString | (private) |
| 796 | fn | requireRecordedRequest | (private) |
| 806 | type | LoginGeminiCliOAuthFn | (private) |
| 815 | fn | runRemoteLoginWithCapturedAuthUrl | (private) |
| 841 | fn | runProjectDiscoveryExpectingProjectId | (private) |
| 1237 | fn | oversizedResponse | (private) |

## extensions/google/provider-models.test.ts (532 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | fn | createTemplateModel | (private) |
| 30 | fn | expectModelFields | (private) |

## extensions/google/realtime-voice-provider.test.ts (1486 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | MockGoogleLiveSession | (private) |
| 14 | type | MockGoogleLiveConnectParams | (private) |
| 60 | fn | lastConnectParams | (private) |
| 68 | fn | sentAudio | (private) |
| 76 | fn | requireFirstMockArg | (private) |
| 84 | fn | requireFirstError | (private) |
| 92 | fn | requireFirstAudio | (private) |
| 96 | fn | createRealtimeTool | (private) |
| 105 | fn | createUnreadableToolName | (private) |
| 116 | fn | createMalformedToolName | (private) |

## extensions/google/realtime-voice-provider.ts (1059 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 78 | type | GoogleRealtimeSensitivity | (private) |
| 79 | type | GoogleRealtimeThinkingLevel | (private) |
| 80 | type | GoogleRealtimeActivityHandling | (private) |
| 81 | type | GoogleRealtimeTurnCoverage | (private) |
| 101 | type | GoogleRealtimeVoiceProviderConfig | (private) |
| 121 | type | GoogleRealtimeLiveConfig | (private) |
| 143 | type | GoogleRealtimeVoiceBridgeConfig | (private) |
| 144 | type | GoogleLiveTranscription | (private) |
| 146 | fn | trimToUndefined | (private) |
| 150 | fn | asSensitivity | (private) |
| 155 | fn | asThinkingLevel | (private) |
| 165 | fn | asActivityHandling | (private) |
| 182 | fn | asTurnCoverage | (private) |
| 199 | fn | asNonNegativeInteger | (private) |
| 204 | fn | asGoogleRealtimeThinkingBudget | (private) |
| 213 | fn | resolveGoogleRealtimeProviderConfigRecord | (private) |
| 230 | fn | normalizeProviderConfig | (private) |
| 259 | fn | resolveEnvApiKey | (private) |
| 265 | fn | isGemini31LiveModel | (private) |
| 270 | fn | supportsAsyncFunctionCalling | (private) |
| 274 | fn | buildThinkingConfig | (private) |
| 294 | fn | buildRealtimeInputConfig | (private) |
| 326 | fn | buildFunctionDeclarations | (private) |
| 360 | fn | buildGoogleLiveConnectConfig | (private) |
| 394 | fn | toGoogleModelResource | (private) |
| 398 | fn | buildBrowserInitialSetup | (private) |
| 411 | fn | parsePcmSampleRate | (private) |
| 417 | fn | isMulawSilence | (private) |
| 421 | fn | isPcm16Silence | (private) |
| 434 | fn | formatGoogleLiveCloseEvent | (private) |
| 452 | class | GoogleRealtimeVoiceBridge | (private) |
| 897 | fn | convertMulaw8kToPcm16k | (private) |
| 911 | fn | decodeMulawSample | (private) |
| 921 | fn | createGoogleRealtimeBrowserSession | (private) |
| 1003 | fn | buildGoogleRealtimeVoiceProvider | pub |

## extensions/google/setup-api.test.ts (572 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | GeminiPrepareContext | (private) |
| 28 | type | GeminiPreparedExecution | (private) |
| 32 | fn | stageGeminiPreparedExecution | (private) |
| 38 | fn | buildGeminiOAuthPrepareContext | (private) |
| 60 | fn | buildGeminiApiKeyPrepareContext | (private) |
| 78 | fn | restoreEnv | (private) |

## extensions/google/speech-provider.test.ts (741 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | googleTtsResponse | (private) |
| 52 | fn | installGoogleTtsRequestMock | (private) |
| 60 | fn | oversizedGoogleTtsJsonResponse | (private) |
| 80 | fn | expectRecordFields | (private) |
| 91 | fn | requireFirstMockArg | (private) |
| 99 | fn | requireFirstRecordArg | (private) |

## extensions/google/speech-provider.ts (665 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | type | GoogleTtsProviderConfig | (private) |
| 79 | type | GoogleTtsProviderOverrides | (private) |
| 88 | type | GoogleInlineDataPart | (private) |
| 94 | type | GoogleGenerateSpeechResponse | (private) |
| 106 | class | GoogleTtsRetryableError | (private) |
| 113 | fn | isGoogleTtsRetryableError | (private) |
| 132 | fn | normalizeGoogleTtsModel | (private) |
| 141 | fn | normalizeGoogleTtsVoiceName | (private) |
| 145 | fn | normalizeGooglePromptTemplate | (private) |
| 158 | fn | resolveGoogleTtsEnvApiKey | (private) |
| 165 | fn | resolveGoogleTtsModelProviderApiKey | (private) |
| 172 | fn | resolveGoogleTtsApiKey | (private) |
| 183 | fn | resolveGoogleTtsBaseUrl | (private) |
| 192 | fn | resolveGoogleTtsConfigRecord | (private) |
| 199 | fn | normalizeGoogleTtsProviderConfig | (private) |
| 220 | fn | readGoogleTtsProviderConfig | (private) |
| 239 | fn | readGoogleTtsOverrides | (private) |
| 253 | fn | composeGoogleTtsText | (private) |
| 267 | fn | parseDirectiveToken | (private) |
| 292 | fn | extractGoogleSpeechPcm | (private) |
| 306 | fn | normalizePromptSectionText | (private) |
| 328 | fn | normalizePromptList | (private) |
| 334 | fn | isOpenClawGoogleAudioProfilePrompt | (private) |
| 342 | fn | renderGoogleAudioProfilePrompt | (private) |
| 416 | fn | wrapPcm16MonoToWav | (private) |
| 438 | fn | synthesizeGoogleTtsPcmOnce | (private) |
| 521 | fn | synthesizeGoogleTtsPcm | (private) |
| 546 | type | GoogleTtsSynthesisRequest | (private) |
| 551 | fn | synthesizeConfiguredGoogleTts | (private) |
| 574 | fn | buildGoogleSpeechProvider | pub |

## extensions/google/transport-stream.test.ts (2920 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | fn | attachModelProviderRequestTransport | (private) |
| 58 | fn | buildGeminiModel | (private) |
| 76 | fn | buildGoogleVertexModel | (private) |
| 94 | fn | buildSseResponse | (private) |
| 99 | fn | buildRateLimitResponse | (private) |
| 108 | fn | buildRawSseResponse | (private) |
| 122 | fn | buildOpenRawSseResponse | (private) |
| 138 | fn | buildDelayedSecondSseResponse | (private) |
| 167 | fn | requireMockCall | (private) |
| 179 | fn | requireRequestInit | (private) |
| 187 | fn | expectHeaders | (private) |
| 194 | fn | parseRequestJsonBody | (private) |
| 202 | fn | requireGenerationConfig | (private) |
| 210 | fn | requireThinkingConfig | (private) |
| 218 | type | GoogleTestContentTurn | (private) |
| 222 | fn | isModelTurnWithParts | (private) |
| 226 | fn | getFirstModelTurn | (private) |
| 234 | fn | getLastModelTurn | (private) |
| 242 | fn | googleToolCallAssistantTurn | (private) |
| 280 | fn | toolResultTurn | (private) |
| 294 | fn | parallelGoogleToolCallAssistantTurn | (private) |
| 309 | fn | googleToolResultMessage | (private) |
| 2907 | fn | toLintErrorObject | (private) |

## extensions/google/transport-stream.ts (1497 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | type | CanonicalGoogleTransportApi | (private) |
| 58 | type | GoogleTransportApi | (private) |
| 60 | type | GoogleTransportModel | (private) |
| 65 | type | GoogleTransportOptions | (private) |
| 85 | type | GoogleGenerateContentRequest | (private) |
| 97 | type | GoogleTransportContentBlock | (private) |
| 108 | type | MutableAssistantOutput | (private) |
| 130 | type | GoogleSseChunk | (private) |
| 159 | fn | requiresToolCallId | (private) |
| 163 | fn | requiresToolCallThoughtSignature | (private) |
| 167 | fn | supportsMultimodalFunctionResponse | (private) |
| 175 | fn | retainThoughtSignature | (private) |
| 182 | fn | stableStringifyGoogleToolCallValue | (private) |
| 196 | fn | isJsonLikeThoughtSignature | (private) |
| 211 | fn | hasGeminiThoughtSignatureTruncationFootprint | (private) |
| 215 | fn | isGeminiThoughtSignaturePayload | (private) |
| 219 | fn | sanitizeGeminiThoughtSignature | (private) |
| 246 | fn | isSameGoogleTransportRoute | (private) |
| 257 | fn | normalizeGoogleTransportRouteApi | (private) |
| 271 | fn | normalizeGoogleTransportModelRoute | (private) |
| 276 | fn | normalizeGoogleTransportMessageRoutes | (private) |
| 286 | fn | toolCallThoughtSignatureReplayKey | (private) |
| 298 | fn | mapToolChoice | (private) |
| 318 | fn | mapStopReasonString | (private) |
| 329 | fn | normalizeToolCallId | (private) |
| 333 | fn | resolveGoogleModelPath | (private) |
| 340 | fn | buildGoogleGenerativeAiRequestUrl | (private) |
| 345 | fn | resolveGoogleVertexProject | (private) |
| 358 | fn | resolveGoogleVertexLocation | (private) |
| 370 | fn | resolveGoogleVertexBaseOrigin | (private) |
| 395 | fn | buildGoogleVertexRequestUrl | (private) |
| 408 | fn | resolveThinkingLevel | (private) |
| 416 | fn | resolveExplicitThinkingLevel | (private) |
| 428 | fn | getDisabledThinkingConfig | (private) |
| 436 | fn | getGoogleThinkingBudget | (private) |
| 457 | fn | isAdaptiveReasoningLevel | (private) |
| 461 | fn | resolveGoogleThinkingConfig | (private) |
| 515 | fn | normalizeGoogleThinkingConfig | (private) |
| 523 | fn | convertGoogleMessages | (private) |
| 706 | fn | convertGoogleTools | (private) |
| 721 | fn | buildGoogleGenerativeAiParams | pub |
| 773 | fn | buildGoogleHeaders | (private) |
| 803 | fn | isGoogleOauthApiKey | (private) |
| 809 | fn | hasGoogleAuthHeader | (private) |
| 816 | fn | collectGoogleTransportApiKeys | (private) |
| 837 | fn | buildGoogleVertexHeaders | (private) |
| 862 | fn | buildGoogleTransportRequestUrl | (private) |
| 872 | fn | isOfficialGoogleGenerativeAiBaseUrl | (private) |
| 884 | fn | resolveGoogleGemini3FirstResponseRetryMs | (private) |
| 892 | fn | shouldRetryGoogleGemini3FirstResponse | (private) |
| 905 | fn | resolveGoogleGemini3RetryThinkingLevel | (private) |
| 915 | fn | cloneGoogleGenerateContentRequest | (private) |
| 922 | fn | buildGoogleGemini3FirstResponseRetryParams | (private) |
| 952 | fn | createChildSignal | (private) |
| 956 | fn | abortFromParent | (private) |
| 973 | fn | clearDeadline | (private) |
| 990 | fn | iteratorToAsyncGenerator | (private) |
| 1010 | type | GoogleSseAttempt | (private) |
| 1018 | fn | openGoogleSseAttempt | (private) |
| 1066 | fn | openGoogleSseChunks | (private) |
| 1147 | fn | buildGoogleTransportHeaders | (private) |
| 1175 | fn | abortHandler | (private) |
| 1219 | fn | updateUsage | (private) |
| 1241 | fn | pushTextBlockEnd | (private) |
| 1269 | fn | createGoogleTransportStreamFn | (private) |
| 1295 | fn | openSse | (private) |
| 1490 | fn | createGoogleGenerativeAiTransportStreamFn | pub |
| 1494 | fn | createGoogleVertexTransportStreamFn | pub |

## extensions/google/video-generation-provider.test.ts (761 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | MockWithCalls | (private) |
| 43 | fn | firstObjectArg | (private) |
| 55 | fn | recordField | (private) |
| 62 | fn | firstGoogleClientHttpOptions | (private) |
| 66 | fn | requireFetchCall | (private) |
| 77 | fn | parseFetchJsonBody | (private) |
| 86 | fn | fetchInputUrl | (private) |
| 97 | fn | oversizedJsonResponse | (private) |

## extensions/google/video-generation-provider.ts (634 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | resolveConfiguredGoogleVideoBaseUrl | (private) |
| 41 | fn | resolveGeneratedVideoMaxBytes | (private) |
| 49 | fn | assertGeneratedVideoBufferWithinLimit | (private) |
| 55 | fn | resolveGoogleVideoRestBaseUrl | (private) |
| 59 | fn | resolveGoogleVideoRestModelPath | (private) |
| 73 | fn | parseVideoSize | (private) |
| 90 | fn | resolveAspectRatio | (private) |
| 105 | fn | resolveResolution | (private) |
| 123 | fn | resolveDurationSeconds | (private) |
| 144 | fn | resolveInputImage | (private) |
| 155 | fn | resolveInputVideo | (private) |
| 166 | fn | resolveGoogleGeneratedVideoDownloadUrl | (private) |
| 204 | fn | resolveGoogleGeneratedVideoFileDownloadUrl | (private) |
| 221 | fn | downloadGeneratedVideoFromUri | (private) |
| 274 | fn | extractGoogleApiErrorCode | (private) |
| 289 | fn | extractGeneratedVideos | (private) |
| 300 | fn | requestGoogleVideoJson | (private) |
| 308 | fn | createHttpError | (private) |
| 386 | fn | generateGoogleVideoViaRest | (private) |
| 441 | fn | buildGoogleVideoGenerationProvider | pub |

## extensions/google/web-search-provider.test.ts (650 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | TestModelProviderConfig | (private) |
| 11 | fn | installGeminiFetch | (private) |
| 32 | fn | createGoogleModelProviderConfig | (private) |
| 42 | fn | requireFirstGeminiFetchCall | (private) |
| 52 | fn | getFetchHeaders | (private) |
| 57 | fn | getGeminiFetchUrl | (private) |
| 68 | fn | parseGeminiFetchBody | (private) |
