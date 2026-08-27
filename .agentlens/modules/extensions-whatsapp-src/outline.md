# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 19 large files in this module.

## extensions/whatsapp/src/approval-native.test.ts (557 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | WhatsAppConfig | (private) |
| 12 | fn | buildConfig | (private) |
| 29 | fn | buildExecRequest | (private) |
| 49 | fn | buildPluginRequest | (private) |
| 70 | fn | nativeShouldHandle | (private) |

## extensions/whatsapp/src/approval-reactions.ts (655 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | WhatsAppApprovalKind | (private) |
| 27 | type | WhatsAppApprovalDeliveryBinding | (private) |
| 34 | type | WhatsAppApprovalReactionBinding | (private) |
| 36 | type | WhatsAppApprovalReactionResolution | (private) |
| 42 | type | WhatsAppApprovalReactionTarget | (private) |
| 46 | type | WhatsAppApprovalReactionEvent | (private) |
| 53 | type | ResolvedWhatsAppApprovalReactionTarget | (private) |
| 71 | fn | buildReactionTargetKey | (private) |
| 85 | fn | addCandidateRemoteJid | (private) |
| 92 | fn | reportPersistentApprovalReactionError | (private) |
| 102 | fn | reportApprovalBindingCorrelationMismatch | (private) |
| 120 | fn | readPersistedTarget | (private) |
| 137 | fn | listWhatsAppApprovalReactionBindings | (private) |
| 146 | fn | isApprovalDecision | (private) |
| 150 | fn | readStrictDecisionList | (private) |
| 157 | fn | readStrictApprovalMetadata | (private) |
| 178 | fn | listTypedApprovalActions | (private) |
| 189 | fn | decisionSetsMatch | (private) |
| 196 | fn | readTypedApprovalDeliveryBinding | (private) |
| 224 | fn | visibleApprovalBindingMatches | (private) |
| 287 | fn | readDeliveredApprovalBinding | (private) |
| 310 | fn | prepareWhatsAppApprovalPayloadForDelivery | pub |
| 331 | fn | registerWhatsAppApprovalReactionTarget | pub |
| 362 | fn | listWhatsAppDeliveredMessageIdentities | (private) |
| 367 | fn | add | (private) |
| 401 | fn | registerWhatsAppApprovalReactionTargetForDeliveredPayload | pub |
| 441 | fn | unregisterWhatsAppApprovalReactionTarget | pub |
| 453 | fn | resolveTarget | (private) |
| 470 | fn | resolveWhatsAppApprovalReactionTargetWithPersistence | pub |
| 486 | fn | resolveWhatsAppApprovalReactionTargetFromCandidates | (private) |
| 522 | fn | readWhatsAppApprovalReactionEvent | (private) |
| 550 | fn | maybeResolveWhatsAppApprovalReaction | pub |
| 652 | fn | clearWhatsAppApprovalReactionTargetsForTest | pub |

## extensions/whatsapp/src/auth-store.ts (512 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | emptyWebSelfId | (private) |
| 32 | type | WhatsAppWebAuthState | pub |
| 34 | class | WhatsAppAuthUnstableError | pub |
| 43 | fn | resolveDefaultWebAuthDir | pub |
| 49 | fn | readCredsJsonRaw | pub |
| 53 | fn | waitForWebAuthBarrier | (private) |
| 70 | fn | isValidJson | (private) |
| 79 | fn | restoreCredsFromBackupIfNeeded | pub |
| 130 | fn | webAuthExists | pub |
| 145 | fn | resolveWebAuthState | (private) |
| 155 | fn | readWebAuthStateCore | (private) |
| 169 | fn | formatWhatsAppWebAuthStatusState | pub |
| 182 | fn | readWebAuthState | pub |
| 188 | fn | readWebAuthSnapshot | pub |
| 197 | fn | readWebAuthExistsBestEffort | pub |
| 205 | fn | readWebAuthExistsForDecision | pub |
| 218 | fn | readWebAuthSnapshotBestEffort | pub |
| 228 | fn | isBaileysAuthFileName | (private) |
| 241 | fn | clearBaileysAuthFiles | (private) |
| 264 | fn | shouldClearOnLogout | (private) |
| 295 | fn | isPathInsideDirectory | (private) |
| 300 | fn | pathHasSymlinkComponent | (private) |
| 313 | type | WebAuthDirOwnership | (private) |
| 318 | fn | isLegacyWebAuthDir | (private) |
| 328 | fn | classifyWebAuthDirOwnership | (private) |
| 351 | fn | logoutWeb | pub |
| 400 | fn | readWebSelfId | pub |
| 426 | fn | readWebSelfIdentity | pub |
| 455 | fn | readWebSelfIdentityForDecision | pub |
| 474 | fn | getWebAuthAgeMs | pub |
| 479 | fn | logWebSelfId | pub |
| 497 | fn | pickWebChannel | pub |

## extensions/whatsapp/src/auto-reply.web-auto-reply.connection-and-logging.e2e.test.ts (1335 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | DrainSelectionEntry | (private) |
| 41 | type | DrainPendingDeliveriesCall | (private) |
| 57 | fn | requireOnMessage | (private) |
| 66 | fn | startWatchdogScenario | (private) |
| 108 | fn | expectErrorContaining | (private) |
| 115 | fn | mockStringMessages | (private) |
| 121 | fn | mockCallArg | (private) |
| 1322 | fn | toLintErrorObject | (private) |

## extensions/whatsapp/src/channel-outbound.test.ts (537 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | ApprovalAction | (private) |

## extensions/whatsapp/src/channel-react-action.test.ts (594 lines)

_No symbols extracted._

## extensions/whatsapp/src/channel.setup.test.ts (515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | splitSetupEntriesForMock | (private) |
| 114 | fn | createRuntime | (private) |
| 120 | fn | runConfigureWithHarness | (private) |
| 139 | fn | createSeparatePhoneHarness | (private) |
| 147 | fn | runSeparatePhoneFlow | (private) |

## extensions/whatsapp/src/connection-controller.test.ts (1105 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | fn | createListenerStub | (private) |
| 77 | fn | createSocketWithTransportEmitter | (private) |
| 97 | fn | loggedOutError | (private) |
| 101 | fn | createLoginResultHarness | (private) |
| 137 | fn | runLoggedOutRecovery | (private) |
| 535 | fn | resolvePersistenceFailure | (private) |
| 746 | fn | resolveOwner | (private) |
| 790 | fn | resolveListener | (private) |

## extensions/whatsapp/src/connection-controller.ts (1117 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | type | TimerHandle | (private) |
| 54 | type | WaSocket | (private) |
| 56 | type | ManagedWhatsAppListener | pub |
| 62 | type | WhatsAppLiveConnection | (private) |
| 81 | type | WhatsAppSocketCleanup | (private) |
| 83 | type | WhatsAppOpenConnectionParams | (private) |
| 95 | type | WhatsAppConnectionSnapshot | (private) |
| 105 | type | NormalizedConnectionCloseReason | (private) |
| 113 | type | WhatsAppConnectionCloseDecision | (private) |
| 121 | type | WhatsAppReconnectAttemptDecision | (private) |
| 128 | type | LoginSocketRestartKind | (private) |
| 130 | fn | createNeverResolvePromise | (private) |
| 134 | fn | getLoginSocketRestartKind | (private) |
| 144 | fn | getLoginSocketRestartMessage | (private) |
| 150 | type | SocketActivityEmitter | (private) |
| 156 | fn | createLiveConnection | (private) |
| 163 | fn | resolveClosePromise | (private) |
| 194 | fn | closeWebSocketBestEffort | (private) |
| 202 | fn | closeWaSocket | pub |
| 228 | fn | stoppedControllerError | (private) |
| 232 | fn | closeWaSocketSoon | pub |
| 247 | type | WhatsAppLoginWaitResult | (private) |
| 266 | type | CredentialPersistenceFailure | (private) |
| 268 | fn | waitForLoginSocket | (private) |
| 288 | fn | throwIfCredentialPersistenceFailed | (private) |
| 297 | fn | waitForWhatsAppLoginResult | pub |
| 450 | class | WhatsAppConnectionController | pub |
| 520 | fn | stop | (private) |
| 1092 | fn | noteActivity | (private) |

## extensions/whatsapp/src/login-qr.test.ts (741 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | fn | encodedQr | (private) |
| 69 | fn | queueQrSocket | (private) |
| 83 | fn | queueRotatingQrSocket | (private) |
| 98 | fn | queueSilentSocket | (private) |
| 102 | fn | expectScanQrResult | (private) |
| 109 | fn | expectQrRefreshResult | (private) |
| 117 | fn | waitForever | (private) |
| 121 | fn | flushTasks | (private) |
| 126 | fn | waitForNextTask | (private) |
| 132 | fn | waitMs | (private) |
| 138 | fn | waitForQrRenderCallCount | (private) |

## extensions/whatsapp/src/login-qr.ts (598 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | WaSocket | (private) |
| 27 | type | StartWebLoginWithQrResult | (private) |
| 34 | type | ActiveLogin | (private) |
| 57 | type | LoginQrRaceResult | (private) |
| 62 | fn | waitForNextTask | (private) |
| 72 | fn | resolveWhatsAppLoginTimeoutMs | (private) |
| 80 | fn | closeSocket | (private) |
| 84 | fn | resetActiveLogin | (private) |
| 95 | fn | isLoginFresh | (private) |
| 99 | fn | resetQrUpdateSignal | (private) |
| 105 | fn | notifyQrUpdate | (private) |
| 111 | fn | updateLoginQrState | (private) |
| 117 | fn | ensureQrDataUrl | (private) |
| 140 | fn | renderPromise | (private) |
| 179 | fn | renderLatestQrDataUrlInBackground | (private) |
| 191 | fn | attachLoginWaiter | (private) |
| 246 | fn | waitForQrOrRecoveredLogin | (private) |
| 313 | fn | startWebLoginWithQr | pub |
| 502 | fn | waitForWebLogin | pub |

## extensions/whatsapp/src/monitor-inbox.streams-inbound-messages.test-support.ts (2065 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 69 | fn | nextMessageId | (private) |
| 74 | fn | createSocketRef | (private) |
| 78 | fn | fastReconnectPolicy | (private) |
| 90 | fn | inboundMessage | (private) |
| 96 | fn | expectDeprecatedAdmissionAliases | (private) |
| 104 | fn | expectSocketOperationTimeout | (private) |
| 118 | fn | groupMetadata | (private) |
| 131 | fn | createBaileysCacheSupport | (private) |
| 147 | fn | startInboxMonitorWithBaileysCache | (private) |
| 159 | fn | expectCachedGroupMetadata | (private) |
| 168 | fn | primeInboundReplyHandle | (private) |
| 214 | fn | expectQuotedReplyContext | (private) |

## extensions/whatsapp/src/outbound-base.test.ts (673 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | MockWithCalls | (private) |
| 11 | fn | sendMessageOptionsAt | (private) |

## extensions/whatsapp/src/qa-driver.runtime.test.ts (856 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | createMockSocket | (private) |
| 49 | fn | incomingMessage | (private) |
| 62 | fn | incomingGroupMessage | (private) |
| 81 | fn | incomingImageMessage | (private) |
| 97 | fn | incomingImageMessageWithoutMime | (private) |
| 110 | fn | incomingStickerMessageWithoutMime | (private) |
| 123 | fn | incomingAudioMessage | (private) |
| 138 | fn | incomingEditedImageMessage | (private) |
| 157 | fn | incomingLocationMessage | (private) |
| 173 | fn | incomingReactionMessage | (private) |
| 193 | fn | incomingQuotedMessage | (private) |
| 215 | fn | incomingQuotedLocationMessage | (private) |

## extensions/whatsapp/src/qa-driver.runtime.ts (580 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | WhatsAppQaDriverObservedMessageKind | (private) |
| 30 | type | WhatsAppQaDriverQuotedMessage | (private) |
| 36 | type | WhatsAppQaDriverObservedReaction | (private) |
| 43 | type | WhatsAppQaDriverObservedPoll | (private) |
| 48 | type | WhatsAppQaDriverObservedMessage | pub |
| 64 | type | WhatsAppQaDriverSendTextOptions | (private) |
| 66 | type | WhatsAppQaDriverSendMediaOptions | (private) |
| 71 | type | WhatsAppQaDriverSendReactionOptions | (private) |
| 76 | type | WhatsAppQaDriverSession | pub |
| 126 | type | MessageUpsertEvent | (private) |
| 130 | type | ConnectionUpdateEvent | (private) |
| 132 | type | Waiter | (private) |
| 139 | type | PendingNotificationsWaiter | (private) |
| 145 | fn | isRecord | (private) |
| 149 | fn | readString | (private) |
| 153 | fn | readBoolean | (private) |
| 157 | fn | findMessageSection | (private) |
| 201 | fn | readReaction | (private) |
| 216 | fn | readPoll | (private) |
| 235 | fn | readMedia | (private) |
| 265 | fn | readQuotedMessage | (private) |
| 281 | fn | normalizeObservedMessage | (private) |
| 331 | fn | closeSocket | (private) |
| 332 | fn | maybeEnd | (private) |
| 337 | fn | maybeClose | (private) |
| 343 | fn | createConnectionClosedError | (private) |
| 351 | fn | startWhatsAppQaDriverSession | pub |
| 364 | fn | removeWaiter | (private) |
| 372 | fn | removePendingNotificationsWaiter | (private) |
| 380 | fn | markPendingNotificationsReceived | (private) |
| 391 | fn | observe | (private) |
| 402 | fn | onMessagesUpsert | (private) |
| 411 | fn | onConnectionUpdate | (private) |
| 420 | fn | removeMessageListener | (private) |
| 431 | fn | closeSessionResources | (private) |
| 555 | fn | predicate | (private) |

## extensions/whatsapp/src/send.test.ts (856 lines)

_No symbols extracted._

## extensions/whatsapp/src/session.test.ts (1071 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | fn | flushCredsUpdate | (private) |
| 58 | fn | emitCredsUpdate | (private) |
| 67 | fn | createTempAuthDir | (private) |
| 73 | fn | createTempCaFile | (private) |
| 80 | fn | mockFsOpenForCredsWrites | (private) |
| 140 | fn | firstMockCall | (private) |
| 151 | fn | readLastSocketOptions | (private) |
| 182 | fn | requireValue | (private) |
| 189 | fn | requireString | (private) |
| 196 | fn | firstWriteFileCall | (private) |
| 210 | fn | expectRuntimeLogContaining | (private) |
| 217 | fn | installUndiciRuntimeDeps | (private) |
| 836 | fn | guardedKeys | (private) |

## extensions/whatsapp/src/session.ts (600 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 71 | fn | rejectUnsafeWebCredsPath | (private) |
| 75 | fn | enqueueSaveCreds | (private) |
| 100 | fn | safeSaveCreds | (private) |
| 149 | fn | abortSocketAfterCredentialPersistenceFailure | (private) |
| 155 | fn | closeWebSocket | (private) |
| 169 | fn | printTerminalQr | (private) |
| 174 | fn | resolveWaWebSocketUrl | (private) |
| 181 | fn | resolveEnvWaWebSocketUrl | (private) |
| 202 | fn | createWaSocket | pub |
| 219 | fn | createWaSocketInternal | (private) |
| 257 | fn | saveCreds | (private) |
| 273 | fn | reportCredentialPersistenceError | (private) |
| 300 | fn | task | (private) |
| 429 | fn | createWaDirectorySocket | pub |
| 435 | fn | resolveEnvProxyAgent | (private) |
| 458 | fn | resolveEnvFetchDispatcher | (private) |
| 478 | fn | resolveProxyUrlFromAgent | (private) |
| 498 | fn | resolveEnvHttpsProxyUrl | (private) |
| 508 | fn | normalizeEnvProxyValue | (private) |
| 516 | type | WhatsAppConnectionWaitOptions | (private) |
| 524 | fn | waitForWaConnection | pub |
| 529 | type | OffCapable | (private) |
| 535 | fn | cleanup | (private) |
| 543 | fn | handler | (private) |
| 574 | fn | newConnectionId | pub |
| 578 | fn | toLintErrorObject | (private) |
| 592 | fn | createConnectionTimeoutError | (private) |

## extensions/whatsapp/src/test-helpers.ts (736 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | setLoadConfigMock | pub |
| 39 | fn | setRuntimeConfigSourceSnapshotMock | pub |
| 44 | fn | resetLoadConfigMock | pub |
| 49 | fn | resolveStorePathFallback | (private) |
| 64 | fn | loadConfigMock | (private) |
| 72 | fn | loadRuntimeConfigSourceSnapshotMock | (private) |
| 80 | fn | updateLastRouteMock | (private) |
| 97 | fn | loadSessionStoreMock | (private) |
| 105 | type | BufferedDispatchReplyParams | (private) |
| 121 | type | MockTypingController | (private) |
| 126 | type | BufferedReplyOptions | (private) |
| 130 | type | TestEnvelopeOptions | (private) |
| 137 | type | TestInboundEnvelopeParams | (private) |
| 150 | fn | sanitizeEnvelopeHeaderPart | (private) |
| 159 | fn | resolveEnvelopeOptionsMock | (private) |
| 178 | fn | resolveEnvelopeTimestampMock | (private) |
| 196 | fn | resolveSenderLabelMock | (private) |
| 205 | fn | resolveDirectEnvelopeBodyLabelMock | (private) |
| 215 | fn | formatInboundEnvelopeMock | (private) |
| 240 | fn | createChannelMessageReplyPipelineMock | (private) |
| 247 | fn | normalizePhoneLikeToE164 | (private) |
| 252 | fn | resolveIdentityNamePrefixMock | (private) |
| 259 | fn | resolveSendableOutboundReplyPartsMock | (private) |
| 269 | fn | resolveChannelMessageSourceReplyDeliveryModeMock | (private) |
| 294 | fn | toLocationContextMock | (private) |
| 298 | fn | createBufferedDispatchReplyMock | (private) |
| 340 | fn | resolveChannelContextVisibilityModeMock | (private) |
| 362 | fn | resolveGroupSessionKeyMock | (private) |
| 385 | fn | resolveChannelGroupPolicyMock | (private) |
| 420 | fn | resolveChannelGroupRequireMentionMock | (private) |
| 666 | fn | resetMockExport | (private) |
| 682 | fn | resetBaileysMocks | pub |
| 727 | fn | getLastSocket | pub |
