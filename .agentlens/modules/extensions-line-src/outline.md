# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 11 large files in this module.

## extensions/line/src/auto-reply-delivery.test.ts (715 lines)

_No symbols extracted._

## extensions/line/src/bot-handlers.test.ts (1348 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | MessageEvent | (private) |
| 180 | type | LineWebhookContext | (private) |
| 182 | fn | createRuntime | (private) |
| 184 | fn | createReplayMessageEvent | (private) |
| 203 | fn | createTestMessageEvent | (private) |
| 223 | fn | createLineWebhookTestContext | (private) |
| 265 | fn | expectGroupMessageBlocked | (private) |
| 275 | fn | expectRequireMentionGroupMessageProcessed | (private) |

## extensions/line/src/bot-handlers.ts (568 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | type | FollowEvent | (private) |
| 45 | type | JoinEvent | (private) |
| 46 | type | LeaveEvent | (private) |
| 47 | type | MessageEvent | (private) |
| 48 | type | PostbackEvent | (private) |
| 49 | type | UnfollowEvent | (private) |
| 50 | type | WebhookEvent | (private) |
| 52 | interface | MediaRef | (private) |
| 64 | fn | isDownloadableLineMessageType | (private) |
| 70 | interface | LineHandlerContext | (private) |
| 84 | fn | normalizeLineIngressEntry | (private) |
| 88 | fn | resolveLineGroupConfig | (private) |
| 99 | fn | sendLinePairingReply | (private) |
| 105 | fn | idLabel | (private) |
| 154 | fn | shouldProcessLineEvent | (private) |
| 182 | fn | mentionFacts | (private) |
| 323 | fn | getLineMentionees | (private) |
| 337 | fn | isLineBotMentioned | (private) |
| 341 | fn | hasAnyLineMention | (private) |
| 345 | fn | resolveEventRawText | (private) |
| 359 | fn | handleMessageEvent | (private) |
| 459 | fn | handleFollowEvent | (private) |
| 464 | fn | handleUnfollowEvent | (private) |
| 472 | fn | handleJoinEvent | (private) |
| 477 | fn | handleLeaveEvent | (private) |
| 482 | fn | handlePostbackEvent | (private) |
| 510 | fn | handleLineWebhookEvents | pub |
| 528 | fn | handleLineWebhookEvent | (private) |
| 556 | fn | toLintErrorObject | (private) |

## extensions/line/src/bot-message-context.test.ts (545 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | MessageEvent | (private) |
| 32 | type | PostbackEvent | (private) |

## extensions/line/src/bot-message-context.ts (576 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | EventSource | (private) |
| 32 | type | MessageEvent | (private) |
| 33 | type | PostbackEvent | (private) |
| 34 | type | StickerEventMessage | (private) |
| 36 | interface | MediaRef | (private) |
| 41 | interface | BuildLineMessageContextParams | (private) |
| 51 | type | LineSourceInfo | (private) |
| 58 | fn | getLineSourceInfo | pub |
| 77 | fn | buildPeerId | (private) |
| 93 | fn | resolveLineInboundRoute | (private) |
| 189 | fn | describeStickerKeywords | (private) |
| 203 | fn | extractMessageText | (private) |
| 231 | fn | extractNativeMediaKind | (private) |
| 248 | type | LineRouteInfo | (private) |
| 249 | type | LineSourceInfoWithPeerId | (private) |
| 251 | fn | resolveLineConversationLabel | (private) |
| 266 | fn | resolveLineAddresses | (private) |
| 285 | fn | finalizeLineInboundContext | (private) |
| 440 | fn | buildLineMessageContext | pub |
| 517 | fn | buildLinePostbackContext | pub |
| 574 | type | LineMessageContext | (private) |
| 575 | type | LinePostbackContext | (private) |
| 576 | type | LineInboundContext | pub |

## extensions/line/src/channel.sendPayload.test.ts (750 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | LineRuntimeMocks | (private) |
| 57 | fn | lineResult | (private) |
| 65 | fn | createCredentialBearingHttpUrl | (private) |
| 73 | fn | createRuntime | (private) |

## extensions/line/src/monitor.lifecycle.test.ts (589 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | LineNodeWebhookHandler | (private) |
| 12 | type | LineHandleWebhook | (private) |
| 37 | type | RegisteredRoute | (private) |
| 46 | type | RegisteredTarget | (private) |
| 51 | type | WebhookRegistration | (private) |
| 56 | fn | requireWebhookRegistration | (private) |
| 66 | fn | requireRegisteredRoute | (private) |
| 210 | fn | createRouteResponse | (private) |
| 544 | fn | createHeldPostRequest | (private) |
| 558 | fn | createSignedPostRequest | (private) |

## extensions/line/src/send.test.ts (560 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 97 | fn | createCredentialBearingHttpUrl | (private) |

## extensions/line/src/send.ts (549 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | Message | (private) |
| 17 | type | TextMessage | (private) |
| 18 | type | ImageMessage | (private) |
| 19 | type | VideoMessage | (private) |
| 20 | type | AudioMessage | (private) |
| 21 | type | LocationMessage | (private) |
| 22 | type | FlexMessage | (private) |
| 23 | type | FlexContainer | (private) |
| 24 | type | TemplateMessage | (private) |
| 25 | type | QuickReply | (private) |
| 26 | type | QuickReplyItem | (private) |
| 35 | fn | cacheUserProfile | (private) |
| 53 | interface | LineSendOpts | (private) |
| 66 | type | LineClientOpts | (private) |
| 67 | type | LinePushOpts | (private) |
| 69 | interface | LinePushBehavior | (private) |
| 74 | interface | LineReplyBehavior | (private) |
| 78 | fn | normalizeTarget | (private) |
| 109 | fn | isLineUserChatId | (private) |
| 113 | fn | createLineMessagingClient | (private) |
| 129 | fn | createLinePushContext | (private) |
| 142 | fn | createTextMessage | (private) |
| 146 | fn | createImageMessage | pub |
| 157 | fn | createVideoMessage | pub |
| 170 | fn | createAudioMessage | pub |
| 178 | fn | createLocationMessage | pub |
| 193 | fn | logLineHttpError | (private) |
| 208 | fn | recordLineOutboundActivity | (private) |
| 216 | fn | resolveLineReceiptKind | (private) |
| 233 | fn | pushLineMessages | (private) |
| 279 | fn | replyLineMessages | (private) |
| 302 | fn | sendMessageLine | pub |
| 368 | fn | pushMessageLine | pub |
| 376 | fn | replyMessageLine | pub |
| 384 | fn | pushMessagesLine | pub |
| 394 | fn | createFlexMessage | pub |
| 405 | fn | pushImageMessage | pub |
| 420 | fn | pushLocationMessage | pub |
| 435 | fn | pushFlexMessage | pub |
| 453 | fn | pushTemplateMessage | pub |
| 463 | fn | pushTextMessageWithQuickReplies | pub |
| 476 | fn | createQuickReplyItems | pub |
| 484 | fn | createTextMessageWithQuickReplies | pub |
| 495 | fn | showLoadingAnimation | pub |
| 512 | fn | getUserProfile | pub |
| 546 | fn | getUserDisplayName | pub |

## extensions/line/src/webhook-node.test.ts (656 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | fn | sign | (private) |
| 31 | fn | createRes | (private) |
| 52 | type | ParsedLineWebhookPayload | (private) |
| 56 | fn | firstMockCall | (private) |
| 67 | fn | firstParsedPayload | (private) |
| 74 | type | RuntimeEnvMock | (private) |
| 80 | fn | createRuntimeMock | (private) |
| 88 | fn | createMiddlewareRes | (private) |
| 101 | fn | createMiddlewareRequest | (private) |
| 107 | fn | createPostWebhookTestHarness | (private) |
| 119 | fn | runSignedPost | (private) |
| 133 | fn | invokeWebhook | (private) |
| 166 | fn | parseResponseBody | (private) |
| 177 | type | WebhookPostResult | (private) |
| 185 | type | WebhookPostInvoker | (private) |
| 191 | fn | invokeNodePostContract | (private) |
| 225 | fn | invokeMiddlewarePostContract | (private) |
| 260 | fn | expectSignedRawBodyWins | (private) |

## extensions/line/src/webhook-spool.test.ts (756 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | SpoolPayload | (private) |
| 30 | fn | createEvent | (private) |
| 52 | fn | callback | (private) |
| 56 | fn | payloadFor | (private) |
| 60 | fn | withQueue | (private) |
| 78 | fn | waitForVerdict | (private) |
| 96 | fn | createResponse | (private) |
| 110 | fn | invokeSignedWebhook | (private) |
| 172 | fn | releaseDeliveries | (private) |
| 230 | fn | releaseDelivery | (private) |
| 286 | fn | releaseDelivery | (private) |
| 361 | fn | releaseDelivery | (private) |
