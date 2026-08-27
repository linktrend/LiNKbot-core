# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 12 large files in this module.

## extensions/signal/src/approval-native.test.ts (552 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | SignalConfig | (private) |
| 15 | fn | buildConfig | (private) |
| 32 | fn | buildExecRequest | (private) |
| 52 | fn | buildPluginRequest | (private) |
| 73 | fn | nativeShouldHandle | (private) |
| 88 | fn | buildLocalApprovalPayload | (private) |

## extensions/signal/src/approval-reactions.test.ts (970 lines)

_No symbols extracted._

## extensions/signal/src/approval-reactions.ts (1001 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | SignalApprovalReactionBinding | (private) |
| 39 | type | SignalApprovalReactionResolution | (private) |
| 46 | type | ApprovalKind | (private) |
| 47 | type | ApprovalForwardingConfig | (private) |
| 48 | type | ApprovalForwardingMode | (private) |
| 50 | type | SignalApprovalReactionRoute | (private) |
| 64 | type | SignalApprovalReactionTarget | (private) |
| 70 | type | SignalApprovalDeliveryTarget | (private) |
| 76 | type | SignalApprovalDeliveryResult | (private) |
| 97 | fn | resolveApprovalForwardingConfig | (private) |
| 106 | fn | normalizeApprovalForwardingMode | (private) |
| 112 | fn | approvalModeIncludesSession | (private) |
| 116 | fn | approvalModeIncludesTargets | (private) |
| 120 | fn | matchesSignalApprovalReactionFilters | (private) |
| 135 | fn | targetAccountMatches | (private) |
| 150 | fn | resolveSignalApprovalRouteTarget | (private) |
| 170 | fn | hasMatchingSignalApprovalReactionTarget | (private) |
| 194 | fn | isSignalApprovalReactionRouteStillEnabled | (private) |
| 223 | fn | resolveSignalApprovalConversationKey | pub |
| 227 | fn | resolveSignalApprovalConversationKeyForDeliveredTarget | (private) |
| 245 | fn | normalizeSignalApprovalTargetAuthorKey | (private) |
| 262 | fn | resolveSignalApprovalTargetAuthorKeys | pub |
| 279 | fn | buildReactionTargetKey | (private) |
| 293 | fn | reportPersistentApprovalReactionError | (private) |
| 303 | fn | readPersistedTarget | (private) |
| 352 | fn | listSignalApprovalReactionBindings | (private) |
| 358 | fn | buildSignalApprovalReactionHint | pub |
| 364 | fn | addSignalApprovalReactionHintToText | pub |
| 371 | fn | resolveStandaloneApprovalPromptKind | (private) |
| 385 | fn | isStandaloneApprovalPromptText | (private) |
| 389 | fn | normalizeApprovalDecision | (private) |
| 404 | fn | extractSignalApprovalPromptBinding | (private) |
| 442 | fn | buildTargetRoute | (private) |
| 483 | fn | shouldAppendSignalApprovalReactionHintForOutboundMessage | (private) |
| 516 | fn | appendSignalApprovalReactionHintForOutboundMessage | pub |
| 545 | fn | hasSignalApprovalReactionApprovers | pub |
| 552 | fn | registerSignalApprovalReactionTarget | pub |
| 623 | fn | formatSignalApprovalTerminalTruth | (private) |
| 628 | fn | addSignalApprovalReactionHintToStructuredPayload | pub |
| 667 | fn | readSignalDeliveryVisibleText | (private) |
| 672 | fn | listDeliveredSignalMessageIdsWithVisibleHint | (private) |
| 697 | fn | registerSignalApprovalReactionTargetForDeliveredPayload | pub |
| 769 | fn | registerSignalApprovalReactionTargetForOutboundMessage | pub |
| 827 | fn | unregisterSignalApprovalReactionTarget | pub |
| 839 | fn | resolveTarget | (private) |
| 869 | fn | resolveSignalApprovalReactionTargetWithPersistence | pub |
| 892 | fn | maybeResolveSignalApprovalReaction | pub |
| 997 | fn | clearSignalApprovalReactionTargetsForTest | pub |

## extensions/signal/src/channel.ts (793 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | type | SignalSendFn | (private) |
| 57 | type | SignalProbe | (private) |
| 69 | fn | resolveSignalSendContext | (private) |
| 86 | fn | resolveSignalSendTarget | (private) |
| 100 | fn | sendSignalOutbound | (private) |
| 130 | fn | resolveSignalReplyOptions | (private) |
| 161 | fn | inferSignalTargetChatType | (private) |
| 182 | type | SignalMessageContextExtras | (private) |
| 186 | fn | attachSignalVisibleText | (private) |
| 233 | fn | buildSignalBaseSessionKey | (private) |
| 242 | fn | resolveSignalOutboundSessionRoute | (private) |
| 271 | fn | sendFormattedSignalText | (private) |
| 353 | fn | sendFormattedSignalMedia | (private) |
| 407 | fn | registerDeliveredSignalApprovalPayloadForReactions | (private) |
| 441 | fn | renderSignalApprovalPayloadForReactions | (private) |

## extensions/signal/src/client-adapter.test.ts (643 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | fn | setApiMode | (private) |
| 55 | fn | signalRpcRequest | (private) |
| 63 | fn | signalCheck | (private) |
| 67 | fn | streamSignalEvents | (private) |
| 71 | fn | detectSignalApiMode | (private) |
| 95 | type | MockCalls | (private) |
| 99 | fn | isRecord | (private) |
| 103 | fn | requireRecord | (private) |
| 111 | fn | expectFields | (private) |
| 117 | fn | requireMockCall | (private) |
| 125 | fn | expectRpcCall | (private) |
| 146 | fn | expectSingleObjectCall | (private) |

## extensions/signal/src/client-container.test.ts (1669 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | ContainerRpcOptions | (private) |
| 9 | fn | containerRestRequest | (private) |
| 49 | fn | containerSendMessage | (private) |
| 88 | fn | containerSendTyping | (private) |
| 107 | fn | containerSendReceipt | (private) |
| 128 | fn | containerFetchAttachment | (private) |
| 140 | type | ContainerReactionParams | (private) |
| 151 | fn | sendContainerReaction | (private) |
| 167 | fn | containerSendReaction | (private) |
| 171 | fn | containerRemoveReaction | (private) |
| 180 | fn | bodyStream | (private) |
| 194 | fn | stalledBodyStream | (private) |
| 200 | fn | delayedBodyStream | (private) |
| 231 | fn | requireFetchCall | (private) |
| 239 | fn | expectFetchCall | (private) |
| 248 | fn | expectFirstFetchCall | (private) |
| 252 | fn | parseFetchBody | (private) |
| 260 | fn | expectMockLogNotContains | (private) |
| 297 | fn | onceCallback | (private) |

## extensions/signal/src/client-container.ts (965 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | ContainerRpcOptions | (private) |
| 30 | type | ContainerWebSocketMessage | (private) |
| 74 | fn | normalizeBaseUrl | (private) |
| 91 | class | SignalRestTimeoutError | (private) |
| 98 | fn | signalRestRequestTimeoutError | (private) |
| 102 | type | SignalRestDeadline | (private) |
| 108 | fn | withSignalRestDeadline | (private) |
| 133 | fn | fetchWithTimeout | (private) |
| 143 | fn | normalizeMaxResponseBytes | (private) |
| 150 | fn | readContentLength | (private) |
| 154 | fn | signalRestIdleTimeoutError | (private) |
| 158 | fn | signalAttachmentIdleTimeoutError | (private) |
| 162 | fn | readSignalRestText | (private) |
| 177 | fn | readSignalRestErrorText | (private) |
| 192 | fn | readCappedResponseBuffer | (private) |
| 211 | fn | releaseUnreadResponseBody | (private) |
| 220 | fn | containerCheck | pub |
| 248 | fn | containerReceiveCheck | (private) |
| 263 | fn | settle | (private) |
| 316 | fn | containerRestRequest | (private) |
| 382 | fn | containerFetchAttachment | (private) |
| 422 | fn | streamContainerEvents | pub |
| 444 | fn | cleanup | (private) |
| 450 | fn | resolveOnce | (private) |
| 458 | fn | rejectOnce | (private) |
| 541 | fn | filesToBase64DataUris | (private) |
| 563 | fn | escapeContainerStyledText | (private) |
| 567 | fn | renderContainerStyledText | (private) |
| 613 | fn | parseContainerSendTimestamp | (private) |
| 624 | fn | normalizeContainerQuoteTimestamp | (private) |
| 628 | fn | normalizeContainerQuoteText | (private) |
| 635 | fn | containerSendMessage | (private) |
| 693 | fn | containerSendTyping | (private) |
| 713 | fn | containerSendReceipt | (private) |
| 737 | fn | containerSendReaction | (private) |
| 771 | fn | containerRemoveReaction | (private) |
| 805 | fn | stripUuidPrefix | (private) |
| 813 | fn | formatGroupIdForContainer | (private) |
| 826 | fn | containerRpcRequest | pub |
| 952 | fn | toLintErrorObject | (private) |

## extensions/signal/src/core.test.ts (1288 lines)

_No symbols extracted._

## extensions/signal/src/install-signal-cli.test.ts (655 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 97 | fn | okDownloadResponse | (private) |
| 104 | fn | withTempFile | (private) |
| 116 | fn | setProcessPlatform | (private) |
| 133 | fn | requireAsset | (private) |
| 140 | fn | expectPathMissing | (private) |
| 149 | fn | expectTempDownloadDirMissing | (private) |
| 574 | fn | withArchiveWorkspace | (private) |
| 583 | fn | expectExtractedSignalCli | (private) |

## extensions/signal/src/monitor.tool-result.sends-tool-summaries-responseprefix.test.ts (985 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | MonitorSignalProviderOptions | (private) |
| 35 | fn | waitForSignalDelivery | (private) |
| 39 | fn | runMonitorWithMocks | (private) |
| 48 | fn | receiveSignalPayloads | (private) |
| 81 | fn | hasQueuedReactionEventFor | (private) |
| 100 | fn | makeBaseEnvelope | (private) |
| 109 | fn | receiveSingleEnvelope | (private) |
| 119 | fn | expectNoReplyDeliveryOrRouteUpdate | (private) |
| 125 | fn | setReactionNotificationConfig | (private) |

## extensions/signal/src/monitor.ts (723 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 64 | type | MonitorSignalOpts | pub |
| 89 | fn | createSignalMonitorTaskRunner | (private) |
| 109 | fn | createSignalDaemonLifecycle | (private) |
| 131 | fn | attach | (private) |
| 143 | fn | getExitError | (private) |
| 152 | fn | resolveSignalReactionTargets | (private) |
| 166 | fn | isSignalReactionMessage | (private) |
| 181 | fn | shouldEmitSignalReactionNotification | (private) |
| 215 | fn | buildSignalReactionSystemEventText | (private) |
| 227 | fn | waitForSignalDaemonReady | (private) |
| 262 | fn | deriveSignalAttachmentRpcMaxResponseBytes | (private) |
| 272 | fn | fetchAttachment | (private) |
| 332 | fn | deliverReplies | pub |
| 386 | fn | recordDeliveryResult | (private) |
| 453 | fn | resolveSignalNativeReplyOptions | (private) |
| 486 | fn | isSignalStatusNoticePayload | (private) |
| 490 | fn | createSignalNativeReplyResolver | (private) |
| 528 | fn | monitorSignalProvider | pub |
| 616 | fn | onAbort | (private) |

## extensions/signal/src/send.test.ts (711 lines)

_No symbols extracted._
