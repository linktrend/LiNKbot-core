# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 8 large files in this module.

## extensions/qqbot/src/engine/messaging/markdown-table-chunking.ts (619 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 3 | type | QQBotBaseMarkdownChunker | (private) |
| 7 | type | TableHeader | (private) |
| 13 | type | ActiveFence | (private) |
| 19 | type | QQBotMarkdownChunker | (private) |
| 24 | fn | chunkQQBotMarkdownText | pub |
| 33 | fn | createQQBotMarkdownChunker | pub |
| 43 | class | QQBotMarkdownChunkingState | (private) |
| 364 | fn | isTableRowLine | (private) |
| 369 | fn | resolveQQBotMarkdownChunkLimit | (private) |
| 373 | fn | pushBaseChunks | (private) |
| 391 | fn | splitByUtf8ByteLimit | (private) |
| 414 | fn | utf8ByteLength | (private) |
| 418 | fn | isIncompleteTableRowFragment | (private) |
| 425 | fn | isShortTableRowLine | (private) |
| 432 | fn | isTableSeparatorLine | (private) |
| 449 | fn | splitTableRowCells | (private) |
| 471 | fn | splitTableCells | (private) |
| 475 | fn | splitPartialTableCells | (private) |
| 481 | fn | mergeRowFragments | (private) |
| 485 | fn | mergeFenceLineFragments | (private) |
| 489 | fn | shouldJoinFenceLineFragments | (private) |
| 507 | fn | hasUnclosedQuote | (private) |
| 531 | fn | hasUnclosedDelimiter | (private) |
| 549 | fn | renderMalformedPipeLineAsText | (private) |
| 553 | fn | renderTableRowAsFields | (private) |
| 562 | fn | pushFenceLineChunks | (private) |
| 572 | fn | render | (private) |
| 601 | fn | parseFenceLine | (private) |
| 613 | fn | isClosingFenceLine | (private) |

## extensions/qqbot/src/engine/messaging/outbound-deliver.ts (966 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | interface | MediaTargetContext | (private) |
| 46 | interface | MediaSendResult | (private) |
| 53 | interface | MediaSender | (private) |
| 76 | interface | DeliverDeps | pub |
| 87 | interface | DeliverEventContext | (private) |
| 97 | interface | DeliverAccountContext | (private) |
| 108 | type | SendWithRetryFn | (private) |
| 111 | type | ConsumeQuoteRefFn | (private) |
| 115 | fn | resolveMediaTargetContext | (private) |
| 145 | fn | isHttpUrl | (private) |
| 149 | fn | isImageDataUrl | (private) |
| 153 | fn | isBareRelativeMediaPath | (private) |
| 163 | fn | autoMediaBatch | (private) |
| 211 | fn | sendTextChunkToTarget | (private) |
| 234 | fn | sendTextChunks | (private) |
| 258 | fn | sendTextOnlyReply | pub |
| 287 | fn | sendTextChunksWithRetry | (private) |
| 326 | fn | sendWithResultLogging | (private) |
| 351 | fn | sendPhotoWithLogging | (private) |
| 368 | fn | sendVoiceWithTimeout | (private) |
| 418 | fn | parseAndSendMediaTags | pub |
| 449 | type | QueueItem | (private) |
| 576 | interface | PlainReplyPayload | (private) |
| 587 | fn | sendPlainReply | pub |
| 778 | fn | sendMarkdownReply | (private) |
| 906 | fn | sendPlainTextReply | (private) |

## extensions/qqbot/src/engine/messaging/outbound-media-send.test.ts (665 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | class | HoistedUploadDailyLimitExceededError | (private) |
| 82 | fn | makeCtx | (private) |
| 524 | fn | readFile | (private) |

## extensions/qqbot/src/engine/messaging/outbound-media-send.ts (964 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 64 | fn | parseTarget | pub |
| 75 | fn | buildMediaTarget | pub |
| 96 | fn | shouldDirectUploadUrl | (private) |
| 100 | type | QQBotMediaKind | (private) |
| 101 | type | LoadedOutboundMedia | (private) |
| 111 | type | ResolvedOutboundMediaPath | (private) |
| 112 | type | ResolveOutboundMediaPathOptions | (private) |
| 117 | type | SendDocumentOptions | (private) |
| 121 | fn | isHttpUrl | (private) |
| 125 | fn | isDataUrl | (private) |
| 129 | fn | isHttpOrDataSource | (private) |
| 133 | fn | resolveMissingPathWithinRoots | (private) |
| 151 | fn | isPathWithinAnyRoot | (private) |
| 160 | fn | resolveExistingPathWithinRoots | (private) |
| 173 | fn | resolveOutboundMediaReadFile | (private) |
| 177 | fn | resolveHostReadMediaAccess | (private) |
| 194 | fn | mediaFileTypeForKind | (private) |
| 207 | fn | senderKindForLoadedMedia | (private) |
| 229 | fn | resolveHostReadMediaPath | (private) |
| 250 | fn | stageLoadedHostReadVoice | (private) |
| 268 | fn | stageHostReadVoice | (private) |
| 293 | fn | trySendViaHostRead | (private) |
| 370 | fn | sendAutoDetectedMedia | pub |
| 381 | fn | resolveOutboundMediaPath | pub |
| 433 | fn | sendPhoto | pub |
| 523 | fn | sendPhotoFromLocal | (private) |
| 574 | fn | sendVoice | pub |
| 640 | fn | sendVoiceFromLocal | (private) |
| 718 | fn | sendVideoMsg | pub |
| 786 | fn | sendVideoFromLocal | (private) |
| 827 | fn | sendDocument | pub |
| 902 | fn | sendDocumentFromLocal | (private) |
| 949 | fn | downloadToFallbackDir | (private) |

## extensions/qqbot/src/engine/messaging/reply-dispatcher.ts (715 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | interface | TTSProvider | (private) |
| 63 | interface | ReplyDispatcherDeps | pub |
| 69 | interface | MessageTarget | (private) |
| 78 | interface | ReplyContext | (private) |
| 92 | fn | sendWithTokenRetry | pub |
| 105 | fn | sendTextToTarget | (private) |
| 123 | fn | sendErrorToTarget | pub |
| 137 | fn | handleStructuredPayload | pub |
| 208 | type | StructuredPayloadMediaType | (private) |
| 210 | fn | formatMediaTypeLabel | (private) |
| 214 | fn | validateStructuredPayloadLocalPath | (private) |
| 253 | fn | isRemoteHttpUrl | (private) |
| 257 | fn | isInlineImageDataUrl | (private) |
| 261 | fn | resolveStructuredPayloadPath | (private) |
| 284 | fn | sanitizeForLog | (private) |
| 288 | fn | describeMediaTargetForLog | (private) |
| 303 | fn | resolveStructuredPayloadReadFile | (private) |
| 307 | fn | assertBufferWithinTypeLimit | (private) |
| 316 | fn | imageBufferMatchesMime | (private) |
| 341 | fn | readLocalFileForInlineBase64 | (private) |
| 370 | fn | readPayloadFileBuffer | (private) |
| 393 | fn | assertLocalFileWithinTypeLimit | (private) |
| 405 | fn | handleImagePayload | (private) |
| 488 | fn | handleAudioPayload | (private) |
| 497 | fn | sendTextAsVoiceReply | pub |
| 572 | fn | handleVideoPayload | (private) |
| 645 | fn | handleFilePayload | (private) |

## extensions/qqbot/src/engine/messaging/sender.ts (787 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 63 | fn | buildUserAgent | (private) |
| 68 | fn | getPluginUserAgent | pub |
| 76 | fn | initSender | pub |
| 86 | fn | setOpenClawVersion | pub |
| 95 | interface | AccountContext | (private) |
| 122 | fn | buildAccountContext | (private) |
| 167 | fn | registerAccount | pub |
| 186 | fn | initApiConfig | pub |
| 208 | fn | resolveAccount | (private) |
| 221 | fn | getMessageApi | pub |
| 227 | type | OnMessageSentCallback | (private) |
| 230 | fn | onMessageSent | pub |
| 236 | fn | getAccessToken | pub |
| 240 | fn | clearTokenCache | pub |
| 250 | fn | startBackgroundTokenRefresh | pub |
| 268 | fn | stopBackgroundTokenRefresh | pub |
| 280 | fn | getGatewayUrl | pub |
| 292 | fn | acknowledgeInteraction | pub |
| 309 | interface | DeliveryTarget | pub |
| 315 | interface | AccountCreds | (private) |
| 329 | fn | withTokenRetry | pub |
| 369 | fn | notifyMediaHook | (private) |
| 384 | fn | sendText | pub |
| 433 | fn | sendInputNotify | pub |
| 452 | fn | createRawInputNotifyFn | pub |
| 474 | type | MediaKind | (private) |
| 490 | interface | SendMediaOptions | (private) |
| 544 | fn | sendMedia | pub |
| 560 | fn | buildOutboundMeta | (private) |
| 599 | fn | sendMediaInternal | (private) |
| 678 | fn | dispatchUpload | (private) |
| 760 | fn | buildDeliveryTarget | pub |
| 780 | fn | accountToCreds | pub |
| 785 | fn | supportsRichMedia | (private) |

## extensions/qqbot/src/engine/messaging/streaming-c2c.ts (1206 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | formatStreamErr | (private) |
| 59 | type | StreamingPhase | (private) |
| 77 | class | FlushController | (private) |
| 218 | interface | StreamingControllerDeps | (private) |
| 258 | class | StreamingController | pub |
| 1121 | interface | StreamingMediaContext | (private) |
| 1143 | fn | toMediaSendContext | (private) |
| 1181 | fn | sendMediaQueue | (private) |
| 1197 | fn | shouldUseOfficialC2cStream | pub |

## extensions/qqbot/src/engine/messaging/streaming-media-send.ts (566 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | formatStreamSendErr | (private) |
| 31 | interface | SendQueueItem | pub |
| 41 | fn | createMediaTagRegex | (private) |
| 46 | interface | MediaSendContext | pub |
| 76 | fn | fixPathEncoding | (private) |
| 139 | fn | isInsideCodeBlock | (private) |
| 171 | interface | FirstClosedMediaTag | (private) |
| 193 | fn | findFirstClosedMediaTag | pub |
| 253 | fn | executeSendQueue | pub |
| 383 | fn | stripIncompleteMediaTag | pub |
| 427 | fn | isMedia | (private) |
| 428 | fn | couldBeMedia | (private) |
