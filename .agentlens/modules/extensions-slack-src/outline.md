# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 36 large files in this module.

## extensions/slack/src/accounts.test.ts (642 lines)

_No symbols extracted._

## extensions/slack/src/action-runtime.test.ts (1711 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | fn | slackConfig | (private) |
| 76 | fn | createReplyToFirstContext | (private) |
| 85 | fn | createReplyToFirstScenario | (private) |
| 93 | fn | requireRecord | (private) |
| 100 | fn | requireArray | (private) |
| 108 | fn | requireMockCall | (private) |
| 120 | fn | requireMockArg | (private) |
| 129 | fn | requireRecordArg | (private) |
| 141 | fn | expectRecordFields | (private) |
| 147 | fn | requireSlackSendCall | (private) |
| 155 | fn | expectSlackSendCall | (private) |
| 168 | fn | expectLastSlackSend | (private) |
| 177 | fn | requireDetails | (private) |
| 181 | fn | sendSecondMessageAndExpectNoThread | (private) |
| 251 | fn | resolveReadToken | (private) |
| 259 | fn | resolveSendToken | (private) |

## extensions/slack/src/action-runtime.ts (948 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | ConversationReadInvocationOrigin | (private) |
| 46 | type | SlackActionsRuntimeModule | (private) |
| 53 | fn | createLazySlackAction | (private) |
| 94 | type | SlackActionContext | pub |
| 124 | fn | resolveThreadTsFromContext | (private) |
| 169 | fn | readSlackBlocksParam | (private) |
| 173 | fn | isImageContentType | (private) |
| 177 | fn | hasPotentialSlackNamedPolicy | (private) |
| 195 | fn | resolveSlackDmReadAllowed | (private) |
| 200 | fn | normalizeConfiguredSlackDmUserId | (private) |
| 209 | fn | isSlackDmTargetConfigured | (private) |
| 240 | fn | isCurrentSlackReadTarget | (private) |
| 255 | fn | assertSlackMemberInfoAllowed | (private) |
| 276 | fn | resolveSlackChannelReadPolicy | (private) |
| 347 | fn | assertSlackReadTargetAllowed | (private) |
| 354 | fn | deny | (private) |
| 452 | fn | isSlackGroupDmTargetConfigured | (private) |
| 471 | fn | handleSlackAction | pub |
| 476 | fn | resolveChannelId | (private) |
| 493 | fn | buildActionOpts | (private) |
| 508 | fn | assertReadTargetAllowed | (private) |
| 618 | fn | sendContentAndBlocks | (private) |

## extensions/slack/src/actions.ts (706 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | SlackActionClientOpts | pub |
| 35 | type | SlackMessageSummary | pub |
| 54 | type | SlackPin | pub |
| 60 | fn | resolveToken | (private) |
| 134 | fn | normalizeSlackEmojiName | (private) |
| 155 | fn | formatEpochSeconds | (private) |
| 163 | fn | normalizeSlackReadTimestamp | (private) |
| 188 | fn | hasSlackPlatformError | (private) |
| 199 | fn | getClient | (private) |
| 207 | fn | resolveBotUserId | (private) |
| 215 | fn | reactSlackMessage | pub |
| 236 | fn | removeSlackReaction | pub |
| 257 | fn | removeOwnSlackReactions | pub |
| 290 | fn | listSlackReactions | pub |
| 305 | fn | sendSlackMessage | pub |
| 351 | fn | editSlackMessage | pub |
| 428 | fn | deleteSlackMessage | pub |
| 440 | fn | resolveSlackConversationName | pub |
| 449 | fn | readSlackMessages | pub |
| 508 | fn | getSlackMemberInfo | pub |
| 513 | fn | listSlackEmojis | pub |
| 518 | fn | pinSlackMessage | pub |
| 527 | fn | unpinSlackMessage | pub |
| 536 | fn | listSlackPins | pub |
| 545 | type | SlackFileInfoSummary | (private) |
| 557 | type | SlackFileThreadShare | (private) |
| 563 | fn | normalizeSlackScopeValue | (private) |
| 568 | fn | collectSlackDirectShareChannelIds | (private) |
| 587 | fn | collectSlackShareMaps | (private) |
| 598 | fn | collectSlackSharedChannelIds | (private) |
| 611 | fn | collectSlackThreadShares | (private) |
| 635 | fn | hasSlackScopeMismatch | (private) |
| 673 | fn | downloadSlackFile | pub |

## extensions/slack/src/approval-handler.runtime.test.ts (680 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | type | SlackPayload | (private) |
| 10 | type | ChatUpdatePayload | (private) |
| 18 | fn | findSlackActionsBlock | (private) |
| 22 | fn | decodeSlackApprovalElements | (private) |
| 30 | fn | readChatUpdatePayload | (private) |
| 48 | fn | readMrkdwnTexts | (private) |
| 88 | fn | findApprovalMrkdwn | (private) |
| 628 | fn | payload | (private) |

## extensions/slack/src/approval-handler.runtime.ts (526 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | SlackBlock | (private) |
| 33 | type | SlackPendingApproval | (private) |
| 37 | type | SlackPendingDelivery | (private) |
| 41 | type | SlackMetadataItem | (private) |
| 45 | type | SlackPluginApprovalView | (private) |
| 54 | type | SlackExecApprovalConfig | (private) |
| 58 | type | SlackApprovalHandlerContext | (private) |
| 63 | fn | resolveHandlerContext | (private) |
| 75 | fn | truncateSlackMrkdwn | (private) |
| 86 | fn | buildSlackCodeBlock | (private) |
| 94 | fn | formatSlackApprover | (private) |
| 103 | fn | formatSlackMetadataLine | (private) |
| 107 | fn | buildSlackMetadataLines | (private) |
| 115 | fn | buildSlackMetadataContextElements | (private) |
| 139 | fn | buildSlackMetadataContextBlocks | (private) |
| 151 | fn | resolveSlackApprovalDecisionLabel | (private) |
| 161 | fn | buildSlackPluginMetadata | (private) |
| 165 | fn | resolveSlackPluginDescription | (private) |
| 169 | fn | buildSlackPluginRequestBlocks | (private) |
| 182 | fn | buildSlackExecPendingApprovalText | (private) |
| 195 | fn | buildSlackPluginPendingApprovalText | (private) |
| 208 | fn | buildSlackPendingApprovalText | (private) |
| 214 | fn | buildSlackExecPendingApprovalBlocks | (private) |
| 240 | fn | buildSlackPluginPendingApprovalBlocks | (private) |
| 262 | fn | buildSlackPendingApprovalBlocks | (private) |
| 268 | fn | buildSlackExecResolvedText | (private) |
| 280 | fn | buildSlackPluginResolvedText | (private) |
| 294 | fn | buildSlackResolvedText | (private) |
| 300 | fn | buildSlackExecResolvedBlocks | (private) |
| 322 | fn | buildSlackPluginResolvedBlocks | (private) |
| 338 | fn | buildSlackResolvedBlocks | (private) |
| 344 | fn | buildSlackExecExpiredText | (private) |
| 354 | fn | buildSlackPluginExpiredText | (private) |
| 366 | fn | buildSlackExpiredText | (private) |
| 372 | fn | buildSlackExecExpiredBlocks | (private) |
| 391 | fn | buildSlackPluginExpiredBlocks | (private) |
| 404 | fn | buildSlackExpiredBlocks | (private) |
| 410 | fn | updateMessage | (private) |

## extensions/slack/src/approval-native.test.ts (1220 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | buildConfig | (private) |
| 39 | fn | createTempStorePath | (private) |
| 45 | fn | createExecApprovalRequest | (private) |
| 66 | fn | resolveExecOriginTarget | (private) |
| 77 | fn | resolvePluginOriginTarget | (private) |

## extensions/slack/src/blocks-render.ts (667 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | type | SlackBlock | pub |
| 59 | type | SlackBlockRenderOptions | pub |
| 66 | fn | buildSlackReplyButtonActionId | (private) |
| 70 | fn | buildSlackReplyLinkActionId | (private) |
| 74 | fn | buildSlackReplySelectActionId | (private) |
| 78 | fn | buildSlackApprovalButtonActionId | (private) |
| 82 | fn | buildSlackApprovalSelectActionId | (private) |
| 86 | fn | buildSlackCallbackButtonActionId | (private) |
| 90 | fn | buildSlackCallbackSelectActionId | (private) |
| 94 | fn | buildSlackQuestionButtonActionId | (private) |
| 98 | fn | resolveSlackButtonStyle | (private) |
| 110 | type | SlackActionTarget | (private) |
| 117 | fn | resolveSlackActionTarget | (private) |
| 150 | fn | resolveSlackButtonTarget | (private) |
| 174 | fn | resolveSlackOptionTarget | (private) |
| 186 | fn | isWithinSlackLimit | (private) |
| 190 | fn | isRenderableSlackOption | (private) |
| 198 | fn | readSlackBlockId | (private) |
| 203 | fn | readSlackOpenClawBlockIndex | (private) |
| 212 | fn | resolveSlackBlockOffsets | pub |
| 246 | fn | buildSlackInteractiveBlocks | pub |
| 366 | fn | buildSlackPresentationBlocks | pub |
| 471 | fn | buildSlackPresentationChartBlock | (private) |
| 477 | fn | buildSlackPresentationButtonBlock | (private) |
| 528 | fn | canRenderSlackPresentationTables | (private) |
| 549 | fn | canRenderSlackPresentation | pub |
| 622 | fn | buildSlackPresentationSelectBlock | (private) |

## extensions/slack/src/channel-type.test.ts (587 lines)

_No symbols extracted._

## extensions/slack/src/channel.test.ts (1755 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | fn | getSlackConfiguredState | (private) |
| 88 | fn | requireSlackHandleAction | (private) |
| 96 | fn | requireSlackSendText | (private) |
| 104 | fn | requireSlackSendMedia | (private) |
| 112 | fn | requireSlackSendPayload | (private) |
| 120 | fn | requireSlackHeartbeatSendTyping | (private) |
| 128 | fn | requireSlackHeartbeatClearTyping | (private) |
| 136 | fn | requireSlackListPeers | (private) |
| 144 | fn | isRecord | (private) |
| 148 | fn | requireRecord | (private) |
| 155 | fn | requireArray | (private) |
| 162 | fn | expectRecordFields | (private) |
| 169 | fn | requireMockCall | (private) |
| 177 | fn | requireMockCallArgValue | (private) |
| 189 | fn | requireMockCallArg | (private) |
| 193 | fn | findSchemaEntry | (private) |
| 1575 | fn | requireSlackBindings | (private) |

## extensions/slack/src/channel.ts (986 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 94 | type | ExtensionSharedSurface | (private) |
| 117 | type | TargetResolverRuntimeSurface | (private) |
| 150 | fn | resolveSlackHandleAction | (private) |
| 157 | fn | shouldTreatSlackDeliveredTextAsVisible | (private) |
| 166 | type | SlackSendFn | (private) |
| 186 | fn | resolveSlackSendContext | (private) |
| 208 | fn | setSlackHeartbeatThreadStatus | (private) |
| 251 | fn | withSlackSendOverride | (private) |
| 276 | fn | resolveSlackRouteTarget | (private) |
| 287 | fn | normalizeSlackAcpConversationId | (private) |
| 299 | fn | matchSlackAcpConversation | (private) |
| 327 | fn | buildSlackBaseSessionKey | (private) |
| 336 | fn | shouldRecoverSlackThreadFromCurrentSession | (private) |
| 348 | fn | resolveSlackOutboundSessionRoute | (private) |
| 432 | type | SlackScopesResultShape | (private) |
| 439 | fn | formatSlackScopeDiagnostic | (private) |
| 722 | fn | toResolvedTarget | (private) |

## extensions/slack/src/delivery-trace.test.ts (627 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | RecordedWireCall | (private) |
| 34 | type | CapturedDispatcherOptions | (private) |
| 44 | type | CapturedReplyOptions | (private) |
| 50 | type | TurnCounts | (private) |
| 54 | fn | createDeferred | (private) |
| 62 | type | SlackTraceState | (private) |
| 95 | type | DispatchParams | (private) |
| 126 | fn | traceClient | (private) |
| 168 | type | SlackTraceScenarioName | (private) |
| 269 | fn | createSlackTsNormalizer | (private) |
| 271 | fn | canonicalize | (private) |
| 298 | fn | nextSlackTs | (private) |
| 304 | fn | asWireString | (private) |
| 309 | fn | stripToken | (private) |
| 314 | fn | createRecordingSlackClient | (private) |
| 315 | fn | record | (private) |
| 318 | fn | unexpected | (private) |
| 432 | fn | createPreparedTraceMessage | (private) |
| 438 | fn | setStatus | (private) |
| 518 | fn | setupSlackTrace | (private) |
| 544 | fn | deliver | (private) |

## extensions/slack/src/doctor.test.ts (577 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | collectSlackWarnings | (private) |
| 26 | fn | getSlackCompatibilityNormalizer | (private) |

## extensions/slack/src/message-action-dispatch.test.ts (1209 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | fn | createInvokeSpy | (private) |
| 14 | fn | slackConfig | (private) |
| 18 | fn | firstInvokeCall | (private) |
| 26 | fn | expectForwardedCfg | (private) |
| 30 | fn | expectNoForwardedToolContext | (private) |
| 34 | fn | firstAction | (private) |
| 42 | fn | preparedMessages | (private) |
| 53 | fn | blockAt | (private) |
| 62 | fn | elementAt | (private) |
| 71 | fn | largeTablePresentation | (private) |

## extensions/slack/src/monitor.tool-result.test.ts (924 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | SlackMessageEvent | (private) |
| 52 | fn | makeSlackMessageEvent | (private) |
| 56 | fn | setDirectMessageReplyMode | (private) |
| 74 | fn | firstMockCall | (private) |
| 82 | fn | firstMockArg | (private) |
| 86 | fn | firstMockRecordArg | (private) |
| 98 | fn | firstReplyCtx | (private) |
| 102 | fn | setRequireMentionChannelConfig | (private) |
| 123 | fn | runDirectMessageEvent | (private) |
| 129 | fn | runChannelThreadReplyEvent | (private) |
| 140 | fn | runChannelMessageEvent | (private) |
| 153 | fn | setHistoryCaptureConfig | (private) |
| 168 | fn | captureReplyContexts | (private) |
| 177 | fn | runMonitoredSlackMessages | (private) |
| 186 | fn | setPairingOnlyDirectMessages | (private) |
| 204 | fn | setOpenChannelDirectMessages | (private) |
| 242 | fn | getFirstReplySessionCtx | (private) |
| 256 | fn | expectSingleSendWithThread | (private) |
| 261 | fn | setMentionGatedAckConfig | (private) |
| 284 | fn | mockGeneralChannelInfo | (private) |
| 297 | fn | runMentionGatedChannelMessage | (private) |
| 311 | fn | expectReactionFlow | (private) |
| 322 | fn | runDefaultMessageAndExpectSentText | (private) |
| 471 | fn | expectMentionPatternMessageAccepted | (private) |

## extensions/slack/src/monitor/auth.test.ts (770 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | makeSlackCtx | (private) |
| 30 | fn | makeAuthorizeCtx | (private) |

## extensions/slack/src/monitor/auth.ts (632 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | SlackChannelMembersCacheEntry | (private) |
| 36 | type | SlackIngressChannelType | (private) |
| 37 | type | SlackSystemEventAuthorization | (private) |
| 60 | fn | normalizeSlackUserId | (private) |
| 72 | fn | isSlackStableUserId | (private) |
| 76 | fn | normalizeSlackStableEntry | (private) |
| 85 | fn | normalizeSlackNameEntry | (private) |
| 93 | fn | normalizeSlackNameSubject | (private) |
| 97 | fn | normalizeSlackNameSlugEntry | (private) |
| 127 | fn | createSlackIngressSubject | (private) |
| 140 | fn | createSlackIngressResolver | (private) |
| 149 | fn | readSlackCacheTtlMs | (private) |
| 158 | fn | getChannelMembersCache | (private) |
| 170 | fn | pruneChannelMembersCache | (private) |
| 180 | fn | buildBaseAllowFrom | (private) |
| 184 | fn | resolveSlackEffectiveAllowFrom | pub |
| 206 | fn | fetchSlackChannelMemberIds | (private) |
| 229 | fn | resolveSlackChannelMemberIds | (private) |
| 282 | fn | resolveExplicitSlackOwnerIds | (private) |
| 293 | fn | authorizeSlackBotRoomMessage | pub |
| 345 | fn | wildcardWhenOpen | (private) |
| 349 | fn | slackIngressConversationKind | (private) |
| 355 | fn | resolveSlackCommandIngress | pub |
| 417 | fn | decideSlackSystemIngress | (private) |
| 436 | fn | groupAllowFrom | (private) |
| 492 | fn | authorizeSlackSystemEventSender | pub |

## extensions/slack/src/monitor/context.ts (753 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | SlackAssistantSuggestedPrompt | pub |
| 43 | type | SlackAssistantThreadContext | pub |
| 53 | type | SlackChannelInfo | (private) |
| 60 | type | SlackChannelCacheEntry | (private) |
| 71 | fn | buildSlackAssistantThreadMetadata | pub |
| 90 | fn | parseSlackAssistantThreadMetadata | pub |
| 103 | fn | stringField | (private) |
| 114 | type | SlackMonitorContext | pub |
| 213 | fn | createSlackMonitorContext | pub |
| 276 | fn | scopedKey | (private) |
| 279 | fn | rememberSlackChannelType | (private) |
| 321 | fn | assistantContextKey | (private) |
| 324 | fn | cleanupAssistantThreadContexts | (private) |
| 338 | fn | getSlackAssistantThreadContext | (private) |
| 358 | fn | saveSlackAssistantThreadContext | (private) |
| 372 | fn | resolveSlackSystemEventSessionKey | (private) |
| 464 | fn | resolveChannelName | (private) |
| 502 | fn | resolveUserName | (private) |
| 523 | fn | setSlackThreadStatus | (private) |
| 546 | fn | setSlackAssistantSuggestedPrompts | (private) |
| 579 | fn | isChannelAllowed | (private) |
| 668 | fn | shouldDropMismatchedSlackEvent | (private) |

## extensions/slack/src/monitor/media.test.ts (1353 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | FetchMock | (private) |
| 17 | type | SaveMediaBufferMock | (private) |
| 24 | type | SlackMediaResult | (private) |
| 26 | fn | expectSlackMediaResult | (private) |
| 118 | fn | withFetchPreconnect | (private) |
| 174 | type | MockCallReader | (private) |
| 176 | fn | requireMockCall | (private) |
| 184 | fn | requireRecord | (private) |
| 191 | fn | expectFetchCalledWithUrl | (private) |
| 195 | fn | expectSaveMediaBufferCall | (private) |
| 203 | fn | expectVerboseLogContains | (private) |
| 210 | fn | getRequestHeader | (private) |
| 215 | fn | expectPrivateDownloadRedirect | (private) |

## extensions/slack/src/monitor/provider-support.ts (514 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | SlackAppConstructor | (private) |
| 9 | type | SlackHttpReceiverConstructor | (private) |
| 10 | type | SlackReceiver | (private) |
| 11 | type | SlackSocketModeReceiverConstructor | (private) |
| 12 | type | SlackSocketModeReceiverOptions | (private) |
| 13 | type | SlackSocketModeConfig | (private) |
| 17 | type | SlackSdkLogger | (private) |
| 18 | type | SlackSdkLogLevel | (private) |
| 19 | type | SlackSocketModeLogger | (private) |
| 22 | type | SlackSocketDisconnect | (private) |
| 32 | type | SlackBoltResolvedExports | pub |
| 38 | type | SlackSocketShutdownClient | (private) |
| 41 | type | Constructor | (private) |
| 42 | type | SlackSelfFilterArgs | (private) |
| 51 | fn | isConstructorFunction | (private) |
| 58 | fn | installSlackNativeReconnectFailureObserver | (private) |
| 79 | fn | patchedDelayReconnectAttempt | (private) |
| 118 | fn | createSlackRelayReceiver | (private) |
| 126 | fn | resolveSlackBoltModule | (private) |
| 147 | fn | resolveSlackBoltInterop | pub |
| 190 | fn | publishSlackConnectedStatus | pub |
| 204 | fn | publishSlackDisconnectedStatus | pub |
| 221 | fn | isSlackSocketHeartbeatTimeoutWarning | (private) |
| 229 | fn | isSlackSocketSelfInflictedLoggerWarning | (private) |
| 233 | fn | formatSlackSdkLogArgs | (private) |
| 240 | fn | createSlackSocketModeLogger | (private) |
| 245 | fn | prefix | (private) |
| 247 | fn | remember | (private) |
| 281 | fn | shouldSkipOpenClawSlackSelfEvent | (private) |
| 308 | fn | createSlackBoltApp | pub |
| 375 | fn | createSlackSocketDisconnectWaiter | (private) |
| 377 | fn | relayAbort | (private) |
| 397 | fn | startSlackSocketAndWaitForDisconnect | pub |
| 430 | fn | isMissingSocketStartErrorDetail | (private) |
| 436 | fn | resolveSlackSocketShutdownClient | (private) |
| 451 | fn | gracefulStopSlackApp | pub |
| 459 | fn | formatSlackResolvedLabel | (private) |
| 482 | fn | formatSlackChannelResolved | pub |
| 492 | fn | formatSlackUserResolved | pub |
| 502 | fn | toLintErrorObject | (private) |

## extensions/slack/src/monitor/provider.auth-test-token.test.ts (635 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | StartedSlackMonitor | (private) |
| 23 | fn | trackSlackMonitor | (private) |
| 28 | fn | startSlackMonitor | (private) |
| 32 | fn | runTrackedSlackMessageOnce | (private) |
| 57 | fn | startStalledSlackApiServer | (private) |
| 341 | fn | userSocketConfig | (private) |
| 355 | fn | startWithoutBotToken | (private) |

## extensions/slack/src/monitor/provider.ts (863 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 94 | fn | getSlackBoltInterop | (private) |
| 110 | fn | resolveStableSlackUserIdEntry | (private) |
| 126 | fn | resolveStableSlackUserAllowlistEntries | (private) |
| 137 | fn | formatSlackSocketReconnectMessage | (private) |
| 147 | fn | formatSlackSocketStartRetryMessage | (private) |
| 161 | fn | parseApiAppIdFromAppToken | (private) |
| 170 | fn | resolveSlackRelayConfig | (private) |
| 197 | fn | monitorSlackProvider | pub |
| 367 | fn | gracefulStop | (private) |
| 723 | fn | stopOnAbort | (private) |

## extensions/slack/src/monitor/replies.test.ts (1311 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | baseParams | (private) |
| 52 | fn | largePortableTablePresentation | (private) |
| 67 | fn | requireSendCall | (private) |
| 75 | type | SlashTestMessage | (private) |
| 82 | fn | requireSlashMessage | (private) |
| 90 | fn | readPlainSectionTexts | (private) |

## extensions/slack/src/monitor/replies.ts (623 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | fn | readSlackReplyBlocks | pub |
| 51 | fn | resolveSlackMediaHookSpokenText | (private) |
| 56 | fn | resolveDeliveredSlackReplyThreadTs | pub |
| 67 | fn | deliverReplies | pub |
| 164 | fn | emitSent | (private) |
| 179 | fn | emitFailed | (private) |
| 279 | type | SlackRespondFn | (private) |
| 286 | type | SlackResponseUrlBudget | (private) |
| 294 | fn | resolveSlackThreadTs | pub |
| 311 | type | SlackReplyDeliveryPlan | (private) |
| 317 | fn | createSlackReplyReferencePlanner | (private) |
| 339 | fn | createSlackReplyDeliveryPlan | pub |
| 363 | fn | deliverSlackSlashReplies | pub |
| 377 | type | SlashReplyMessage | (private) |
| 382 | type | PlannedSlashReplyMessage | (private) |
| 387 | type | SlashReplyDelivery | (private) |
| 510 | fn | respond | (private) |
| 517 | fn | emitDeliveryFailure | (private) |
| 565 | fn | deliverNativeFallback | (private) |

## extensions/slack/src/monitor/slash.test.ts (1791 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | fn | hasNonEmptyArgValue | (private) |
| 65 | fn | resolvePeriodMenu | (private) |
| 319 | type | RegisterFn | (private) |
| 339 | fn | registerCommands | (private) |
| 347 | fn | encodeValue | (private) |
| 357 | fn | findFirstActionsBlock | (private) |
| 363 | fn | createDeferred | (private) |
| 374 | fn | createArgMenusHarness | (private) |
| 442 | fn | requireHandler | (private) |
| 459 | fn | createSlashCommand | (private) |
| 471 | fn | runCommandHandler | (private) |
| 482 | fn | expectArgMenuLayout | (private) |
| 498 | fn | expectSingleDispatchedSlashBody | (private) |
| 504 | type | ActionsBlockPayload | (private) |
| 508 | fn | runCommandAndResolveActionsBlock | (private) |
| 521 | fn | getFirstActionElementFromCommand | (private) |
| 533 | fn | runArgMenuAction | (private) |
| 563 | type | MockCallSource | (private) |
| 569 | fn | firstMockArg | (private) |
| 578 | fn | firstCallPayload | (private) |
| 586 | fn | firstDispatchArg | (private) |
| 592 | fn | responseTexts | (private) |
| 600 | fn | mockSixDispatchedReplies | (private) |
| 612 | fn | deliver | (private) |
| 694 | fn | deliver | (private) |
| 733 | fn | deliver | (private) |
| 994 | fn | responseBudget | (private) |
| 1004 | fn | deliver | (private) |
| 1268 | fn | createPolicyHarness | (private) |
| 1329 | fn | runSlashHandler | (private) |
| 1366 | fn | registerAndRunPolicySlash | (private) |
| 1390 | fn | expectChannelBlockedResponse | (private) |
| 1398 | fn | expectUnauthorizedResponse | (private) |
| 1698 | fn | deliver | (private) |
| 1736 | fn | deliver | (private) |

## extensions/slack/src/monitor/slash.ts (1117 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 96 | fn | resolveSlackCommandMenuModelContext | (private) |
| 148 | type | EncodedMenuChoice | (private) |
| 151 | fn | buildSlackArgMenuConfirm | (private) |
| 168 | fn | storeSlackExternalArgMenu | (private) |
| 178 | fn | readSlackExternalArgMenuToken | (private) |
| 182 | fn | encodeSlackCommandArgValue | (private) |
| 197 | fn | parseSlackCommandArgValue | (private) |
| 214 | fn | decode | (private) |
| 236 | fn | buildSlackArgMenuOptions | (private) |
| 246 | fn | buildSlackCommandArgMenuBlocks | (private) |
| 374 | type | SlackCommandRegistration | (private) |
| 379 | fn | registerSlackMonitorSlashCommands | pub |
| 396 | fn | handleSlashCommand | (private) |
| 590 | fn | resolveSlashRoute | (private) |
| 780 | fn | deliverSlashPayloads | (private) |
| 943 | fn | registerArgOptions | (private) |
| 1019 | fn | registerArgAction | (private) |

## extensions/slack/src/outbound-payload.test.ts (1221 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | fn | createHarness | (private) |
| 17 | type | MockWithCalls | (private) |
| 21 | fn | sendCall | (private) |
| 29 | fn | sendOptions | (private) |
| 57 | fn | renderedPresentationSegments | (private) |
| 67 | fn | createMixedPresentationPayload | (private) |

## extensions/slack/src/progress-blocks.test.ts (661 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | progressLine | (private) |
| 22 | fn | itemLine | (private) |
| 26 | fn | toolLine | (private) |
| 37 | fn | planUpdate | (private) |
| 41 | fn | taskUpdate | (private) |
| 49 | fn | contentTaskId | (private) |
| 53 | fn | legacyHeadingBlock | (private) |
| 60 | fn | legacyLineBlock | (private) |
| 70 | fn | expectLegacyLineBlock | (private) |
| 74 | fn | expectTaskUpdate | (private) |

## extensions/slack/src/reply-blocks.test.ts (715 lines)

_No symbols extracted._

## extensions/slack/src/reply-blocks.ts (505 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | SlackReplyBlockSegment | pub |
| 45 | type | SlackReplyBlockResolution | pub |
| 50 | fn | parseSlackReplyBlockSegments | pub |
| 75 | type | SlackReplyDeliveryMessage | pub |
| 84 | fn | resolveSlackReplyDeliveryMessages | pub |
| 124 | fn | resolveSlackReplyText | (private) |
| 131 | type | SlackReplyRenderPlan | (private) |
| 144 | fn | resolveSlackReplyRenderPlan | pub |
| 201 | fn | readSlackChannelBlocks | (private) |
| 209 | fn | hasSlackReplyStructuredContent | pub |
| 217 | fn | renderSlackAuthoredTextFragments | (private) |
| 227 | fn | buildSlackAuthoredTextBlocks | (private) |
| 234 | fn | addPreviewVerbatimToAuthoredTextBlocks | (private) |
| 259 | fn | readLastBlockSegment | (private) |
| 264 | fn | readAllNativeBlocks | (private) |
| 268 | fn | appendTextSegment | (private) |
| 281 | fn | appendBlockSegment | (private) |
| 298 | fn | resolvePresentationRenderOptions | (private) |
| 314 | fn | renderNativePresentation | (private) |
| 325 | fn | appendPresentationPart | (private) |
| 368 | fn | readGeneratedSlackControlRowKey | (private) |
| 401 | fn | subtractMirroredSlackControlRows | (private) |
| 427 | fn | resolveSlackReplyBlockResolution | pub |
| 502 | fn | resolveSlackReplyBlocks | pub |

## extensions/slack/src/send.blocks.test.ts (1359 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | MockCallSource | (private) |
| 15 | fn | mockObjectArg | (private) |
| 32 | fn | postedMessage | (private) |
| 36 | fn | interleavedNativeDataBlocks | (private) |
| 85 | fn | slackDnsRequestError | (private) |

## extensions/slack/src/send.reconcile.test.ts (654 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | SlackReconcileTestClient | (private) |
| 51 | fn | createSlackReconcileTestClient | (private) |
| 69 | fn | createUnknownSendContext | (private) |
| 85 | fn | postWithDeliveryMetadata | (private) |

## extensions/slack/src/send.ts (1438 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 69 | type | SlackRecipient | (private) |
| 79 | type | SlackSendIdentity | pub |
| 85 | type | SlackEnterpriseEventScope | (private) |
| 94 | type | SlackEnterpriseDelivery | (private) |
| 102 | type | SlackSendOpts | (private) |
| 142 | type | SlackWebApiErrorData | (private) |
| 151 | type | SlackWebApiError | (private) |
| 155 | fn | hasCustomIdentity | (private) |
| 159 | fn | normalizeSlackSendIdentity | (private) |
| 171 | fn | setSlackDefaultSendIdentity | pub |
| 184 | fn | getSlackDefaultSendIdentity | (private) |
| 189 | fn | resolveSlackSendIdentity | (private) |
| 198 | fn | normalizeSlackScopeList | (private) |
| 208 | fn | getSlackWebApiErrorData | (private) |
| 219 | fn | formatSlackWebApiErrorMessage | (private) |
| 246 | fn | enrichSlackWebApiError | (private) |
| 254 | fn | readSlackRequestErrorMessage | (private) |
| 261 | fn | resolvePostedMessageThreadTs | (private) |
| 268 | type | SlackSendResult | pub |
| 275 | fn | updateMessageSlack | pub |
| 299 | type | SlackConversationMessage | (private) |
| 305 | type | SlackConversationLookupResponse | (private) |
| 311 | type | SlackConversationLookupClient | (private) |
| 313 | fn | createSlackSendReceipt | (private) |
| 338 | fn | resolveToken | (private) |
| 360 | fn | parseRecipient | (private) |
| 371 | fn | parseEnterpriseEventRecipient | (private) |
| 379 | fn | resolveEnterpriseEventScope | (private) |
| 404 | fn | resolveSlackTextChunks | (private) |
| 446 | fn | createSlackSendQueueKey | (private) |
| 460 | fn | runQueuedSlackSend | (private) |
| 464 | fn | createSlackDmCacheKey | (private) |
| 474 | fn | getSlackDmChannelCache | (private) |
| 484 | fn | setSlackDmChannelCache | (private) |
| 496 | fn | isSlackUserRecipient | (private) |
| 500 | fn | resolveDirectUserPostChannelId | (private) |
| 511 | fn | resolvePostedMessageChannelId | (private) |
| 518 | fn | resolveChannelId | (private) |
| 552 | fn | resolveSlackDmChannelId | pub |
| 566 | fn | createSlackDeliveryMetadataId | (private) |
| 576 | fn | createSlackDeliveryMetadataSignature | (private) |
| 596 | fn | withSlackDeliveryMetadata | (private) |
| 638 | fn | formatSlackTimestampFromMs | (private) |
| 642 | fn | asSlackConversationMessages | (private) |
| 653 | type | SlackDeliveryPart | (private) |
| 660 | type | SlackConversationDeliveryScan | (private) |
| 672 | fn | findSlackConversationDeliveryParts | (private) |
| 737 | fn | scanSlackConversationForDelivery | (private) |
| 752 | fn | response | (private) |
| 863 | fn | reconcileSlackUnknownSend | pub |
| 975 | fn | sendMessageSlack | pub |
| 1055 | fn | sendMessageSlackQueued | (private) |
| 1072 | fn | sendMessageSlackQueuedInner | (private) |
| 1115 | fn | reportDelivery | (private) |
| 1120 | fn | dispatchOnce | (private) |

## extensions/slack/src/send.upload.test.ts (1034 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 115 | type | UploadTestClient | (private) |
| 124 | type | MockCalls | (private) |
| 128 | fn | requireRecord | (private) |
| 137 | fn | requireArray | (private) |
| 146 | fn | expectFields | (private) |
| 150 | fn | expectCallFirstArg | (private) |
| 163 | fn | expectOnlyCallFirstArg | (private) |
| 172 | fn | expectCompletedUpload | (private) |
| 189 | fn | createUploadTestClient | (private) |

## extensions/slack/src/setup-surface.test.ts (590 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | fn | requireFirstStringArg | (private) |

## extensions/slack/src/shared-interactive.test.ts (814 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 731 | fn | table | (private) |
