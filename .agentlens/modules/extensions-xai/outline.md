# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 12 large files in this module.

## extensions/xai/index.test.ts (806 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | createProviderModel | (private) |
| 51 | type | XaiAutoEnableProbe | (private) |
| 53 | fn | registerXaiAutoEnableProbe | (private) |
| 69 | fn | requireEntry | (private) |
| 77 | type | XaiBilledToolName | (private) |
| 79 | fn | registerXaiBilledToolFactories | (private) |
| 91 | fn | requireFactory | (private) |
| 105 | fn | createXaiBilledToolConfig | (private) |

## extensions/xai/realtime-voice-provider.test.ts (1806 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | Listener | (private) |
| 10 | class | MockWebSocket | (private) |
| 77 | type | FakeWebSocketInstance | (private) |
| 78 | type | SentRealtimeEvent | (private) |
| 105 | fn | waitForRealtimeState | (private) |
| 109 | fn | parseSent | (private) |
| 113 | fn | requireSocket | (private) |
| 121 | fn | requireSession | (private) |

## extensions/xai/stream.test.ts (696 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | XaiStreamApi | (private) |
| 19 | type | StreamEvent | (private) |
| 21 | fn | collectEvents | (private) |
| 29 | fn | buildEventStreamFn | (private) |
| 47 | fn | captureWrappedModelId | (private) |
| 76 | fn | runXaiToolPayloadWrapper | (private) |
| 108 | fn | captureXaiResponsesPayloadWithThinking | (private) |

## extensions/xai/tts.test.ts (647 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | Listener | (private) |
| 16 | class | MockWebSocket | (private) |
| 78 | fn | createStreamingAudioResponse | (private) |

## extensions/xai/tts.ts (515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | normalizeXaiTtsBaseUrl | pub |
| 33 | fn | isValidXaiTtsVoice | pub |
| 37 | fn | listXaiTtsVoices | pub |
| 84 | fn | normalizeXaiLanguageCode | pub |
| 98 | type | XaiTtsResponseFormat | (private) |
| 102 | type | XaiTtsStreamServerEvent | (private) |
| 108 | fn | toXaiTtsWsUrl | (private) |
| 129 | fn | readXaiTtsStreamErrorMessage | (private) |
| 134 | fn | parseXaiTtsStreamBaseUrl | (private) |
| 142 | fn | assertXaiNativeTtsStreamEndpoint | (private) |
| 161 | fn | decodeWebSocketTextMessage | (private) |
| 177 | fn | xaiTTSStream | pub |
| 230 | fn | clearTimers | (private) |
| 241 | fn | release | (private) |
| 260 | fn | failConnect | (private) |
| 270 | fn | failStream | (private) |
| 280 | fn | refreshSynthesisTimer | (private) |
| 372 | fn | handleServerEvent | (private) |
| 456 | fn | xaiTTS | pub |

## extensions/xai/video-generation-provider.test.ts (876 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 73 | fn | requirePostJsonCall | (private) |
| 95 | fn | requireFetchInitCall | (private) |
| 113 | fn | streamedVideoResponse | (private) |
| 125 | fn | streamedJsonResponse | (private) |
| 141 | fn | oversizedJsonResponse | (private) |

## extensions/xai/video-generation-provider.ts (581 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 64 | type | XaiVideoCreateResponse | (private) |
| 72 | type | XaiVideoStatusResponse | (private) |
| 86 | type | VideoGenerationSourceInput | (private) |
| 93 | fn | readXaiVideoJson | (private) |
| 109 | fn | xaiErrorMessage | (private) |
| 120 | fn | readXaiCreateResponse | (private) |
| 127 | fn | readXaiStatusResponse | (private) |
| 140 | fn | resolveXaiVideoBaseUrl | (private) |
| 146 | fn | resolveGeneratedVideoMaxBytes | (private) |
| 154 | fn | resolveImageUrl | (private) |
| 168 | fn | resolveRequiredImageUrl | (private) |
| 176 | fn | isReferenceImage | (private) |
| 180 | fn | isXaiVideo15Model | (private) |
| 185 | fn | isFirstFrameImage | (private) |
| 190 | fn | validateXaiVideo15Request | (private) |
| 207 | fn | resolveInputVideoUrl | (private) |
| 221 | fn | resolveDurationSeconds | (private) |
| 233 | fn | resolveAspectRatio | (private) |
| 241 | fn | resolveResolution | (private) |
| 261 | fn | resolveXaiVideoMode | (private) |
| 280 | fn | buildCreateBody | (private) |
| 360 | fn | resolveCreateEndpoint | (private) |
| 371 | fn | pollXaiVideo | (private) |
| 427 | fn | buildXaiVideoGenerationProvider | pub |

## extensions/xai/web-search.test.ts (1300 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 86 | fn | jsonResponse | (private) |
| 94 | fn | textResponse | (private) |
| 98 | fn | installXaiWebSearchFetch | (private) |
| 115 | fn | firstFetchUrl | (private) |
| 124 | fn | firstFetchBody | (private) |
| 129 | fn | fetchCallHeader | (private) |
| 149 | fn | expectCatalogEntry | (private) |
| 934 | fn | request | (private) |

## extensions/xai/x-search.test.ts (527 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | fn | jsonResponse | (private) |
| 16 | fn | installXSearchFetch | (private) |
| 42 | fn | firstFetchCall | (private) |
| 50 | fn | firstFetchUrl | (private) |
| 55 | fn | firstFetchInit | (private) |
| 63 | fn | firstAuthorizationHeader | (private) |
| 71 | fn | parseFirstRequestBody | (private) |
| 79 | fn | createConfiguredXSearchTool | (private) |

## extensions/xai/xai-oauth.test.ts (563 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | jsonResponse | (private) |
| 27 | fn | createJwt | (private) |
| 33 | fn | requireStringBody | (private) |
| 40 | fn | requestUrl | (private) |

## extensions/xai/xai-oauth.ts (754 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | XaiOAuthDiscovery | (private) |
| 45 | type | XaiDeviceCodeDiscovery | (private) |
| 50 | type | XaiOAuthTokenResponse | (private) |
| 57 | type | XaiOAuthIdentity | (private) |
| 63 | type | XaiOAuthFetchOptions | (private) |
| 69 | fn | xaiOAuthFetchSignal | (private) |
| 74 | type | XaiDeviceCodeResponse | (private) |
| 83 | type | XaiOAuthErrorResponse | (private) |
| 88 | type | XaiOAuthResponseBody | (private) |
| 93 | fn | getFetchImpl | (private) |
| 97 | fn | isTrustedXaiOAuthEndpoint | (private) |
| 109 | fn | requireTrustedXaiOAuthEndpoint | (private) |
| 116 | fn | readStringRecord | (private) |
| 122 | fn | readResponseBody | (private) |
| 136 | fn | readJsonResponse | (private) |
| 148 | fn | fetchXaiOAuthDiscoveryDocument | (private) |
| 161 | fn | fetchXaiOAuthDiscovery | (private) |
| 174 | fn | fetchXaiDeviceCodeDiscovery | (private) |
| 192 | fn | normalizeExpires | (private) |
| 196 | fn | parseXaiOAuthTokenResponse | (private) |
| 231 | fn | deriveExpiresFromJwt | (private) |
| 240 | fn | parseXaiOAuthErrorResponse | (private) |
| 251 | fn | formatXaiOAuthError | (private) |
| 262 | fn | isLikelyXaiCloudflareChallenge | (private) |
| 274 | fn | formatXaiOAuthCloudflareChallengeError | (private) |
| 291 | fn | describeXaiOAuthTokenFailure | (private) |
| 309 | fn | exchangeXaiOAuthToken | (private) |
| 359 | fn | requestXaiDeviceCode | (private) |
| 421 | fn | resolveNextXaiDeviceCodePollDelayMs | (private) |
| 426 | fn | pollXaiDeviceCodeToken | (private) |
| 507 | fn | waitForXaiDeviceCodePoll | (private) |
| 515 | fn | onAbort | (private) |
| 530 | fn | decodeJwtPayload | (private) |
| 545 | fn | resolveXaiOAuthIdentity | (private) |
| 557 | fn | readCredentialString | (private) |
| 565 | fn | isLegacyXaiOAuthTokenEndpoint | (private) |
| 574 | fn | resolveXaiOAuthRefreshTokenEndpoint | (private) |
| 588 | fn | noteXaiDeviceCode | (private) |
| 615 | fn | loginXaiDeviceCode | (private) |
| 681 | fn | refreshXaiOAuthCredential | pub |
| 717 | fn | createXaiOAuthAuthMethod | pub |
| 736 | fn | createXaiDeviceCodeAuthMethod | pub |

## extensions/xai/xai.live.test.ts (884 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | createLiveConfig | (private) |
| 54 | fn | createReferencePng | (private) |
| 74 | fn | createVideoReferencePng | (private) |
| 95 | fn | createTempAgentDir | (private) |
| 99 | fn | registerXaiPlugin | (private) |
| 106 | fn | registerXaiRealtimeVoiceProvider | (private) |
| 116 | fn | registerXaiToolFactories | (private) |
| 130 | fn | runXaiLiveCase | (private) |
| 143 | fn | waitForXaiLive | (private) |
| 161 | fn | isRealtimeOpenBillingDrift | (private) |
