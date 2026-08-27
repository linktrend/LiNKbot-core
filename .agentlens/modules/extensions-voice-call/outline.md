# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 14 large files in this module.

## extensions/voice-call/index.test.ts (1286 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | Registered | (private) |
| 40 | type | MockCallSource | (private) |
| 45 | type | RespondCall | (private) |
| 53 | type | RegisterVoiceCall | (private) |
| 54 | type | RegisterCliContext | (private) |
| 61 | fn | captureStdout | (private) |
| 73 | fn | createRuntimeStub | (private) |
| 105 | fn | createCallRecord | (private) |
| 120 | fn | createServiceContext | (private) |
| 128 | fn | setup | (private) |
| 166 | fn | envRef | (private) |
| 170 | fn | mockCall | (private) |
| 178 | fn | firstRespondCall | (private) |
| 182 | fn | firstRuntimeConfig | (private) |
| 189 | fn | expectWarningIncludes | (private) |
| 193 | fn | expectRedactedVoiceCallStatus | (private) |
| 209 | fn | registerVoiceCallCli | (private) |

## extensions/voice-call/index.ts (911 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 232 | fn | asParamRecord | (private) |
| 238 | fn | isCliOnlyProcess | (private) |
| 242 | type | VoiceCallStatus | (private) |
| 255 | fn | toVoiceCallStatus | (private) |
| 273 | type | VoiceCallRuntimeGlobalState | (private) |
| 279 | fn | getVoiceCallRuntimeGlobalState | (private) |
| 365 | fn | sendError | (private) |
| 369 | fn | describeHistoricalCall | (private) |
| 383 | fn | resolveCallMessageRequest | (private) |
| 397 | fn | initiateCallAndRespond | (private) |
| 422 | fn | respondToCallMessageAction | (private) |
| 895 | fn | stopPromise | (private) |

## extensions/voice-call/src/cli.ts (913 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | Logger | (private) |
| 39 | type | SetupCheck | (private) |
| 45 | type | SetupStatus | (private) |
| 50 | type | VoiceCallGatewayMethod | (private) |
| 61 | type | VoiceCallGatewayCallResult | (private) |
| 68 | fn | writeStdoutLine | (private) |
| 72 | fn | writeStdoutJson | (private) |
| 76 | fn | parseVoiceCallIntOption | (private) |
| 90 | fn | isGatewayUnavailableForLocalFallback | (private) |
| 102 | fn | callVoiceCallGateway | (private) |
| 127 | fn | resolveGatewayOperationTimeoutMs | (private) |
| 134 | fn | resolveGatewayContinueTimeoutMs | (private) |
| 144 | fn | resolveVoiceCallDeadlineMs | (private) |
| 148 | fn | isUnknownGatewayMethod | (private) |
| 152 | fn | readGatewayOperationId | (private) |
| 159 | fn | readGatewayPollTimeoutMs | (private) |
| 166 | fn | readCompletedContinueResult | (private) |
| 190 | fn | pollVoiceCallContinueGateway | (private) |
| 232 | fn | resolveMode | (private) |
| 240 | fn | resolveDefaultStorePath | (private) |
| 247 | fn | percentile | (private) |
| 256 | fn | summarizeSeries | (private) |
| 287 | fn | resolveCallMode | (private) |
| 291 | fn | buildSetupStatus | (private) |
| 340 | fn | writeSetupStatus | (private) |
| 347 | fn | initiateCallAndPrintId | (private) |
| 363 | fn | writeGatewayCallId | (private) |
| 374 | fn | initiateCallViaGatewayOrRuntime | (private) |
| 412 | fn | registerVoiceCallCli | pub |
| 837 | fn | writeVoiceCallLatencySummary | (private) |

## extensions/voice-call/src/config.test.ts (849 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | createBaseConfig | (private) |
| 20 | fn | resolveVoiceCallAgentSessionKey | (private) |
| 33 | fn | envRef | (private) |
| 37 | fn | requireElevenLabsTtsConfig | (private) |
| 48 | fn | clearProviderEnv | (private) |

## extensions/voice-call/src/config.ts (953 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 63 | type | TelnyxConfig | pub |
| 84 | type | PlivoConfig | pub |
| 86 | type | VoiceCallTtsConfig | pub |
| 104 | type | VoiceCallNumberRouteConfig | (private) |
| 191 | type | WebhookSecurityConfig | pub |
| 203 | type | CallMode | pub |
| 233 | type | RealtimeToolConfig | (private) |
| 356 | type | VoiceCallRealtimeConfig | pub |
| 506 | type | VoiceCallConfig | pub |
| 507 | type | VoiceCallEffectiveConfigResult | (private) |
| 518 | type | VoiceCallConfigInput | (private) |
| 527 | fn | cloneDefaultVoiceCallConfig | (private) |
| 531 | fn | defaultRealtimeStreamPathForServePath | (private) |
| 542 | fn | normalizeVoiceCallTtsConfig | (private) |
| 553 | fn | normalizePhoneRouteKey | (private) |
| 557 | fn | resolveVoiceCallNumberRouteKey | (private) |
| 579 | fn | resolveVoiceCallNumberRouteKeyForCall | pub |
| 594 | fn | resolveVoiceCallEffectiveConfig | pub |
| 619 | fn | sanitizeVoiceCallProviderConfigs | (private) |
| 632 | fn | sanitizeVoiceCallNumberRoutes | (private) |
| 645 | fn | resolveTwilioAuthToken | pub |
| 654 | fn | normalizeVoiceCallConfig | pub |
| 720 | type | VoiceCallCoreSessionConfig | pub |
| 722 | fn | resolveVoiceCallSessionKey | pub |
| 750 | fn | resolveVoiceCallAgentSessionKey | (private) |
| 793 | fn | resolveVoiceCallConfig | pub |
| 856 | fn | validateProviderConfig | pub |

## extensions/voice-call/src/media-stream.test.ts (1088 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 90 | fn | requireTalkEvent | (private) |

## extensions/voice-call/src/media-stream.ts (860 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | interface | MediaStreamConfig | pub |
| 70 | interface | StreamSession | (private) |
| 78 | type | TtsQueueEntry | (private) |
| 85 | type | StreamSendResult | (private) |
| 92 | type | PendingConnection | (private) |
| 105 | fn | sanitizeLogText | (private) |
| 116 | fn | normalizeWsMessageData | (private) |
| 126 | fn | parseTwilioMediaMessage | (private) |
| 138 | class | MediaStreamHandler | pub |
| 193 | fn | releaseUpgradeReservation | (private) |
| 200 | fn | handleUpgradeAbort | (private) |
| 834 | interface | TwilioMediaMessage | (private) |

## extensions/voice-call/src/response-generator.test.ts (918 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | TestSessionEntry | (private) |
| 23 | type | EmbeddedAgentArgs | (private) |
| 57 | fn | createAgentRuntime | (private) |
| 171 | fn | requireEmbeddedAgentArgs | (private) |
| 184 | fn | requireFirstMockCall | (private) |
| 192 | fn | runGenerateVoiceResponse | (private) |
| 713 | fn | generate | (private) |

## extensions/voice-call/src/runtime.test.ts (764 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 122 | fn | createBaseConfig | (private) |
| 126 | fn | createExternalProviderConfig | (private) |
| 153 | type | RealtimeConsultToolHandler | (private) |
| 159 | fn | firstMockCall | (private) |
| 167 | fn | firstCallParam | (private) |
| 172 | type | MockSessionEntry | (private) |
| 178 | fn | createMockSessionRuntime | (private) |
| 210 | fn | requireRecord | (private) |
| 217 | fn | requireRealtimeConsultToolHandler | (private) |

## extensions/voice-call/src/runtime.ts (576 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | type | VoiceCallRuntime | pub |
| 56 | type | Logger | (private) |
| 63 | type | ResolvedRealtimeProvider | (private) |
| 88 | fn | resolveVoiceCallConsultSessionKey | (private) |
| 106 | fn | mapVoiceCallConsultTranscript | (private) |
| 125 | fn | createRuntimeResourceLifecycle | (private) |
| 135 | fn | runStep | (private) |
| 168 | fn | resolveProvider | (private) |
| 229 | fn | resolveRealtimeProvider | (private) |
| 241 | fn | listRealtimeAgentIds | (private) |
| 254 | fn | createRealtimeInstructionsResolver | (private) |
| 293 | fn | createVoiceCallRuntime | pub |
| 552 | fn | stop | (private) |

## extensions/voice-call/src/webhook-security.test.ts (955 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | canonicalizeBase64 | (private) |
| 15 | fn | plivoV2Signature | (private) |
| 27 | fn | plivoV3Signature | (private) |
| 78 | fn | twilioSignature | (private) |
| 91 | fn | expectReplayResultPair | (private) |
| 105 | fn | expectAcceptedWebhookVersion | (private) |
| 113 | fn | verifyTwilioNgrokLoopback | (private) |
| 132 | fn | verifyTwilioSignedRequest | (private) |
| 151 | fn | createSignedTelnyxWebhookRequest | (private) |
| 249 | fn | verify | (private) |

## extensions/voice-call/src/webhook-security.ts (944 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | sha256Hex | (private) |
| 23 | fn | createSkippedVerificationReplayKey | (private) |
| 35 | fn | validateTwilioSignature | (private) |
| 56 | fn | buildTwilioDataToSign | (private) |
| 67 | fn | buildCanonicalTwilioParamString | (private) |
| 77 | interface | WebhookUrlOptions | (private) |
| 110 | fn | isValidHostname | (private) |
| 125 | fn | extractHostname | (private) |
| 156 | fn | extractHostnameFromHeader | (private) |
| 164 | fn | normalizeAllowedHosts | (private) |
| 195 | fn | reconstructWebhookUrl | pub |
| 291 | fn | buildTwilioVerificationUrl | (private) |
| 311 | fn | redactTwilioVerificationUrlForDiagnostics | (private) |
| 326 | fn | stripPortFromUrl | (private) |
| 339 | fn | setPortOnUrl | (private) |
| 349 | fn | extractPortFromHostHeader | (private) |
| 364 | interface | TwilioVerificationResult | (private) |
| 377 | interface | TelnyxVerificationResult | (private) |
| 386 | fn | createTwilioReplayKey | (private) |
| 397 | fn | decodeBase64OrBase64Url | (private) |
| 405 | fn | base64UrlEncode | (private) |
| 409 | fn | importEd25519PublicKey | (private) |
| 441 | fn | verifyTelnyxWebhook | pub |
| 511 | fn | verifyTwilioWebhook | pub |
| 651 | interface | PlivoVerificationResult | (private) |
| 663 | fn | normalizeSignatureBase64 | (private) |
| 668 | fn | getBaseUrlNoQuery | (private) |
| 673 | fn | createPlivoV2ReplayKey | (private) |
| 677 | fn | createPlivoV3ReplayKey | (private) |
| 691 | fn | validatePlivoV2Signature | (private) |
| 707 | type | PlivoParamMap | (private) |
| 709 | fn | toParamMapFromSearchParams | (private) |
| 720 | fn | sortedQueryString | (private) |
| 734 | fn | sortedParamsString | (private) |
| 748 | fn | constructPlivoV3BaseUrl | (private) |
| 777 | fn | validatePlivoV3Signature | (private) |
| 815 | fn | verifyPlivoWebhook | pub |

## extensions/voice-call/src/webhook.test.ts (2353 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 66 | type | TwilioProviderTestDouble | (private) |
| 76 | type | VoiceCallConfigInput | (private) |
| 127 | fn | createManager | (private) |
| 139 | fn | hasPort | (private) |
| 147 | fn | requireBoundRequestUrl | (private) |
| 148 | fn | address | (private) |
| 159 | fn | requireFirstMockCall | (private) |
| 167 | fn | createCapturingLogger | (private) |
| 169 | fn | capture | (private) |
| 176 | fn | expectPrivateLogMetadata | (private) |
| 192 | fn | expectWebhookUrl | (private) |
| 199 | fn | expectNoTwilioStreamState | (private) |
| 208 | fn | expectTwilioReplayTwiML | (private) |
| 214 | fn | createTwilioVerificationProvider | (private) |
| 225 | fn | createTwilioStreamingProvider | (private) |
| 403 | type | MediaStreamRequestDouble | (private) |
| 551 | fn | runStaleCallReaperCase | (private) |
| 574 | fn | postWebhookForm | (private) |
| 583 | fn | postWebhookFormWithHeaders | (private) |
| 600 | fn | postWebhookFormWithHeadersResult | (private) |
| 644 | fn | requestWebSocketUpgrade | (private) |
| 658 | fn | finish | (private) |
| 713 | fn | createRealtimeRoutingServer | (private) |
| 896 | fn | runWebhookPipeline | (private) |
| 1661 | fn | runWebhookPipeline | (private) |
| 1699 | fn | makeRequestWithoutRemoteAddress | (private) |
| 2032 | fn | createTwilioProvider | (private) |
| 2039 | fn | getMediaCallbacks | (private) |
| 2298 | fn | buildManagerWith | (private) |
| 2311 | fn | installHandleInboundResponseSpy | (private) |

## extensions/voice-call/src/webhook.ts (1038 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | type | Logger | (private) |
| 68 | type | WebhookHeaderGateResult | (private) |
| 75 | fn | appendRecentTalkEventMetadata | (private) |
| 97 | fn | buildRequestUrl | (private) |
| 101 | fn | resolveForwardedClientIp | (private) |
| 129 | fn | normalizeWebhookResponse | (private) |
| 141 | fn | buildRealtimeRejectedTwiML | (private) |
| 149 | fn | buildTwilioReplayTwiML | (private) |
| 161 | type | CachedWebhookResponse | (private) |
| 166 | fn | cloneWebhookResponsePayload | (private) |
| 178 | class | VoiceCallWebhookServer | pub |
