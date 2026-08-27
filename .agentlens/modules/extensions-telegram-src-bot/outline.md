# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 7 large files in this module.

## extensions/telegram/src/bot/body-helpers.ts (600 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | TelegramMediaMessage | (private) |
| 16 | type | TelegramMediaFileRef | (private) |
| 25 | type | TelegramPrimaryMedia | (private) |
| 30 | fn | buildSenderName | pub |
| 37 | fn | resolveTelegramPrimaryMedia | pub |
| 68 | fn | resolveTelegramMediaPlaceholder | pub |
| 74 | fn | buildSenderLabel | pub |
| 96 | type | TelegramTextEntity | pub |
| 100 | type | TelegramTextMessage | (private) |
| 104 | fn | hasTelegramRichMessage | (private) |
| 108 | fn | compactRichText | (private) |
| 116 | fn | joinRichText | (private) |
| 120 | fn | renderRichInlineText | (private) |
| 143 | fn | renderRichBlocks | (private) |
| 187 | fn | resolveTelegramRichMessagePlaceholder | pub |
| 193 | fn | resolveTelegramRichMessageText | pub |
| 200 | fn | resolveTelegramRichMessageBody | pub |
| 204 | fn | isBinaryContent | pub |
| 214 | fn | resolveTelegramTextContent | pub |
| 219 | fn | getTelegramTextParts | pub |
| 228 | fn | isTelegramMentionWordChar | (private) |
| 232 | fn | hasStandaloneTelegramMention | (private) |
| 249 | fn | isBotCommandAddressedToMention | (private) |
| 258 | fn | hasBotMention | pub |
| 276 | fn | hasBotMentionInText | pub |
| 283 | type | TelegramMarkdownEntity | (private) |
| 291 | type | TelegramMarkdownBoundary | (private) |
| 312 | fn | longestBacktickRun | (private) |
| 326 | fn | markdownInlineCodeDelimiters | (private) |
| 334 | fn | markdownPreAffixes | (private) |
| 342 | fn | markdownAffixesForTelegramEntity | (private) |
| 368 | fn | renderTelegramTextEntities | pub |
| 377 | fn | addBoundary | (private) |
| 436 | type | TelegramForwardedContext | pub |
| 448 | fn | normalizeForwardedUserLabel | (private) |
| 459 | fn | normalizeForwardedChatLabel | (private) |
| 467 | fn | buildForwardedContextFromUser | (private) |
| 486 | fn | buildForwardedContextFromHiddenName | (private) |
| 503 | fn | buildForwardedContextFromChat | (private) |
| 531 | fn | resolveForwardOrigin | (private) |
| 566 | fn | normalizeForwardedContext | pub |
| 573 | fn | extractTelegramLocation | pub |

## extensions/telegram/src/bot/delivery.replies.ts (1077 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 78 | type | DeliveryProgress | (private) |
| 83 | type | TelegramReplyChannelData | (private) |
| 91 | type | TelegramReplyQuoteForSend | (private) |
| 98 | type | TelegramDeliveryTextChunk | (private) |
| 106 | type | ChunkTextFn | (private) |
| 108 | fn | buildChunkTextResolver | (private) |
| 172 | fn | markDelivered | (private) |
| 177 | fn | filterEmptyTelegramTextChunks | (private) |
| 191 | fn | resolveReplyQuoteForSend | (private) |
| 231 | fn | deliverTextReply | (private) |
| 297 | fn | isVoiceMessagesForbidden | (private) |
| 304 | fn | isCaptionTooLong | (private) |
| 311 | fn | resolveVoiceFallbackText | (private) |
| 321 | fn | buildPlainCaptionParams | (private) |
| 330 | fn | sendTelegramCaptionedMediaWithFallback | (private) |
| 339 | fn | sendMedia | (private) |
| 375 | fn | deliverMediaReply | (private) |
| 405 | fn | recordPromptContextMessage | (private) |
| 413 | fn | deliverAcceptedMedia | (private) |
| 523 | fn | sendVoiceMedia | (private) |
| 662 | fn | maybePinFirstDeliveredMessage | (private) |
| 685 | type | EmitMessageSentHookParams | (private) |
| 697 | fn | buildTelegramSentHookContext | (private) |
| 712 | fn | emitInternalMessageSentHook | pub |
| 730 | fn | emitMessageSentHooks | (private) |
| 754 | fn | emitTelegramMessageSentHooks | pub |
| 763 | fn | deliverReplies | pub |

## extensions/telegram/src/bot/delivery.resolve-media-retry.test.ts (1229 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | class | MediaFetchError | (private) |
| 82 | fn | makeCtx | (private) |
| 161 | fn | setupTransientGetFileRetry | (private) |
| 180 | fn | mockPdfFetchAndSave | (private) |
| 192 | fn | createFileTooBigError | (private) |
| 196 | fn | createFileTooBigGrammyError | (private) |
| 210 | fn | createRateLimitGrammyError | (private) |
| 224 | fn | createFileAccessError | (private) |
| 228 | fn | resolveMediaWithDefaults | (private) |
| 240 | fn | requireResolvedMedia | (private) |
| 250 | fn | requireRecord | (private) |
| 257 | fn | expectRecordFields | (private) |
| 263 | fn | requireReadRemoteMediaBufferParams | (private) |
| 271 | fn | expectReadRemoteMediaBufferFields | (private) |
| 275 | fn | expectFetchSsrfPolicyFields | (private) |
| 280 | fn | expectResolvedMediaFields | (private) |
| 288 | fn | expectMediaFetchError | (private) |
| 307 | fn | expectSaveMediaBufferCall | (private) |
| 319 | fn | expectTransientGetFileRetrySuccess | (private) |
| 335 | fn | flushRetryTimers | (private) |

## extensions/telegram/src/bot/delivery.resolve-media.ts (524 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | fn | buildTelegramMediaSsrfPolicy | (private) |
| 61 | fn | isFileTooBigError | (private) |
| 72 | fn | isRetryableGetFileError | (private) |
| 81 | interface | MediaMetadata | (private) |
| 93 | fn | resolveMediaMetadata | (private) |
| 116 | fn | resolveTelegramFileWithRetry | (private) |
| 168 | fn | resolveRequiredTelegramTransport | (private) |
| 190 | fn | usesTrustedTelegramExplicitProxy | (private) |
| 198 | fn | resolveTrustedLocalTelegramRoot | (private) |
| 224 | fn | normalizeTrustedTelegramRelativeFilePath | (private) |
| 236 | fn | resolveTelegramBotApiContainerRelativePaths | (private) |
| 261 | fn | isTrustedLocalTelegramFileMissing | (private) |
| 269 | fn | downloadAndSaveTelegramFile | (private) |
| 364 | fn | resolveStickerMedia | (private) |
| 457 | fn | resolveMedia | pub |

## extensions/telegram/src/bot/delivery.test.ts (2164 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | DeliverRepliesParams | (private) |
| 25 | type | DeliverWithParams | (private) |
| 30 | type | RuntimeStub | (private) |
| 80 | fn | createRuntime | (private) |
| 88 | fn | createBot | (private) |
| 138 | fn | deliverWith | (private) |
| 146 | fn | mockMediaLoad | (private) |
| 154 | fn | createObservedPromptContextSequence | (private) |
| 167 | fn | expectRecordFields | (private) |
| 178 | fn | mockCallArg | (private) |
| 186 | fn | firstMockCallArg | (private) |
| 190 | fn | firstSendText | (private) |
| 196 | fn | createSendMessageHarness | (private) |
| 206 | fn | createVoiceMessagesForbiddenError | (private) |
| 212 | fn | createThreadNotFoundError | (private) |
| 218 | fn | createQuoteNotFoundError | (private) |
| 224 | fn | createQuoteTextInvalidError | (private) |
| 230 | fn | createNormalizedQuoteTextInvalidError | (private) |
| 236 | fn | createRichEntityInvalidError | (private) |
| 242 | fn | createRichContentRequiredError | (private) |
| 248 | fn | createHtmlParseError | (private) |
| 254 | fn | createWrappedConnectTimeoutHttpError | (private) |
| 266 | fn | createPlainHttpError | (private) |
| 273 | fn | createVoiceFailureHarness | (private) |

## extensions/telegram/src/bot/helpers.test.ts (1058 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | TelegramMessage | (private) |
| 24 | fn | asMalformedTelegramMessage | (private) |

## extensions/telegram/src/bot/helpers.ts (677 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | fn | resetTelegramForumFlagCacheForTest | pub |
| 69 | fn | cacheTelegramForumFlag | (private) |
| 93 | fn | hadUnsafeTelegramText | (private) |
| 97 | type | TelegramThreadSpec | pub |
| 102 | fn | shouldUseTelegramDmThreadSession | pub |
| 109 | fn | resolveTelegramBotHasTopicsEnabled | pub |
| 118 | fn | extractTelegramForumFlag | pub |
| 126 | fn | resolveTelegramMessageForumFlagHint | pub |
| 137 | fn | resolveTelegramForumFlag | pub |
| 183 | fn | withResolvedTelegramForumFlag | pub |
| 200 | fn | resolveTelegramGroupAllowFromContext | pub |
| 288 | fn | isTelegramDmAllowedByConfiguredAllowFrom | (private) |
| 315 | class | TelegramPairingStoreReadError | pub |
| 325 | fn | loadTelegramPairingStoreIfNeeded | (private) |
| 366 | fn | resolveTelegramForumThreadId | pub |
| 381 | fn | resolveTelegramThreadSpec | pub |
| 419 | fn | buildTelegramThreadParams | pub |
| 448 | fn | buildTelegramRoutingTarget | pub |
| 465 | fn | buildTelegramInboundOriginTarget | pub |
| 479 | fn | buildTypingThreadParams | pub |
| 486 | fn | resolveTelegramStreamMode | pub |
| 492 | fn | buildTelegramGroupPeerId | pub |
| 503 | fn | resolveTelegramDirectPeerId | pub |
| 515 | fn | buildTelegramGroupFrom | pub |
| 519 | fn | isTelegramCommandsAllowFromConfigured | pub |
| 528 | fn | resolveTelegramCommandAuthorization | pub |
| 562 | fn | buildTelegramParentPeer | pub |
| 573 | fn | buildGroupLabel | pub |
| 582 | fn | resolveTelegramReplyId | pub |
| 586 | type | TelegramReplyTarget | pub |
| 603 | fn | describeReplyTarget | pub |
