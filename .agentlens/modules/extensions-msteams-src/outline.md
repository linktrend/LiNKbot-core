# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 18 large files in this module.

## extensions/msteams/src/attachments.test.ts (740 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | createUrlForHost | (private) |
| 32 | fn | createTestUrl | (private) |
| 47 | type | RemoteMediaFetchParams | (private) |
| 55 | fn | detectMimeDefault | (private) |
| 56 | fn | saveMediaBufferDefault | (private) |
| 70 | fn | isHostnameAllowedByPattern | (private) |
| 78 | fn | isUrlAllowedBySsrfPolicy | (private) |
| 88 | fn | readRemoteMediaBufferWithRedirects | (private) |
| 140 | type | DownloadAttachmentsParams | (private) |
| 141 | type | DownloadedMedia | (private) |
| 142 | type | DownloadAttachmentsBuildOverrides | (private) |
| 146 | type | DownloadAttachmentsNoFetchOverrides | (private) |
| 150 | type | FetchFn | (private) |
| 151 | type | MSTeamsAttachments | (private) |
| 152 | type | LabeledCase | (private) |
| 153 | type | FetchCallExpectation | (private) |
| 154 | type | DownloadedMediaExpectation | (private) |
| 159 | fn | formatDocumentPlaceholder | (private) |
| 165 | fn | createTokenProvider | (private) |
| 181 | fn | createHtmlAttachment | (private) |
| 183 | fn | buildHtmlImageTag | (private) |
| 184 | fn | createHtmlImageAttachments | (private) |
| 186 | fn | createContentUrlAttachments | (private) |
| 188 | fn | createImageAttachments | (private) |
| 190 | fn | createPdfAttachments | (private) |
| 192 | fn | createTeamsFileDownloadInfoAttachments | (private) |
| 201 | type | BinaryPayload | (private) |
| 202 | fn | createBufferResponse | (private) |
| 209 | fn | createTextResponse | (private) |
| 210 | fn | createNotFoundResponse | (private) |
| 211 | fn | createRedirectResponse | (private) |
| 213 | fn | publicResolve | (private) |
| 215 | fn | createOkFetchMock | (private) |
| 234 | fn | downloadAttachmentsWithFetch | (private) |
| 250 | fn | createAuthAwareImageFetchMock | (private) |
| 259 | fn | expectMockCallState | (private) |
| 267 | fn | expectAttachmentMediaLength | (private) |
| 270 | fn | expectSingleMedia | (private) |
| 274 | fn | expectMediaBufferSaved | (private) |
| 279 | fn | expectFirstMedia | (private) |
| 288 | type | AttachmentDownloadSuccessCase | (private) |
| 294 | type | AttachmentAuthRetryScenario | (private) |
| 300 | type | AttachmentAuthRetryCase | (private) |
| 364 | fn | runAttachmentDownloadSuccessCase | (private) |
| 370 | fn | fetchFn | (private) |
| 376 | fn | runAttachmentAuthRetryCase | (private) |
| 602 | fn | createGraphSharesFetchMock | (private) |

## extensions/msteams/src/channel.actions.test.ts (1422 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 102 | fn | padded | (private) |
| 106 | fn | msteamsActionDetails | (private) |
| 114 | fn | okMSTeamsActionDetails | (private) |
| 118 | fn | requireMSTeamsHandleAction | (private) |
| 126 | fn | runAction | (private) |
| 156 | fn | expectActionError | (private) |
| 168 | fn | expectActionParamError | (private) |
| 177 | fn | expectActionSuccess | (private) |
| 193 | fn | expectActionRuntimeCall | (private) |
| 204 | fn | expectSuccessfulAction | (private) |
| 1352 | fn | callBuildToolContext | (private) |

## extensions/msteams/src/channel.ts (1346 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 70 | type | ResolvedMSTeamsAccount | (private) |
| 121 | fn | resolveMSTeamsChannelConfig | (private) |
| 145 | fn | jsonActionResult | (private) |
| 153 | fn | jsonMSTeamsActionResult | (private) |
| 157 | fn | jsonMSTeamsOkActionResult | (private) |
| 161 | fn | jsonMSTeamsConversationResult | (private) |
| 172 | fn | jsonActionResultWithDetails | (private) |
| 184 | fn | actionError | (private) |
| 192 | fn | requireMSTeamsGroupManagementAuthorization | (private) |
| 204 | fn | resolveActionTarget | (private) |
| 215 | fn | resolveGraphActionTarget | (private) |
| 243 | fn | resolveCurrentGraphActionTarget | (private) |
| 253 | fn | resolveActionMessageId | (private) |
| 257 | fn | resolveActionPinnedMessageId | (private) |
| 265 | fn | resolveActionQuery | (private) |
| 269 | fn | resolveActionContent | (private) |
| 279 | fn | readOptionalTrimmedString | (private) |
| 286 | fn | resolveActionUploadFilePath | (private) |
| 298 | fn | resolveRequiredActionTarget | (private) |
| 320 | fn | resolveRequiredActionMessageTarget | (private) |
| 343 | fn | resolveRequiredActionPinnedMessageTarget | (private) |
| 366 | fn | runWithRequiredActionTarget | (private) |
| 389 | fn | runWithRequiredActionMessageTarget | (private) |
| 412 | fn | runWithRequiredActionPinnedMessageTarget | (private) |
| 435 | fn | describeMSTeamsMessageTool | (private) |
| 638 | type | ResolveTargetResultEntry | (private) |
| 639 | type | PendingTargetEntry | (private) |
| 641 | fn | stripPrefix | (private) |
| 642 | fn | markPendingLookupFailed | (private) |
| 1263 | fn | formatPermission | (private) |

## extensions/msteams/src/file-consent.test.ts (541 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | fn | publicResolve | (private) |
| 10 | fn | privateResolve | (private) |
| 12 | fn | multiResolve | (private) |
| 14 | fn | failingResolve | (private) |
| 18 | type | ConsentValidationOptions | (private) |
| 22 | fn | validateConsentUploadUrl | (private) |
| 31 | fn | isPrivateOrReservedIP | (private) |
| 46 | fn | firstFetchCall | (private) |
| 54 | fn | responseWithCancel | (private) |

## extensions/msteams/src/graph-messages.ts (528 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | GraphMessageBody | (private) |
| 20 | type | GraphMessageFrom | (private) |
| 25 | type | GraphMessage | (private) |
| 32 | type | GraphPinnedMessage | (private) |
| 37 | type | GraphPinnedMessagesResponse | (private) |
| 51 | fn | stripTargetPrefix | (private) |
| 68 | fn | resolveGraphConversationId | pub |
| 97 | fn | resolveConversationPath | pub |
| 128 | type | GetMessageMSTeamsParams | (private) |
| 134 | type | GetMessageMSTeamsResult | (private) |
| 144 | fn | getMessageMSTeams | pub |
| 160 | type | PinMessageMSTeamsParams | (private) |
| 177 | fn | pinMessageMSTeams | pub |
| 205 | type | UnpinMessageMSTeamsParams | (private) |
| 220 | fn | unpinMessageMSTeams | pub |
| 237 | type | ListPinsMSTeamsParams | (private) |
| 242 | type | ListPinsMSTeamsResult | (private) |
| 256 | fn | listPinsMSTeams | pub |
| 303 | type | GraphReaction | (private) |
| 309 | type | GraphMessageWithReactions | (private) |
| 313 | type | ReactMessageMSTeamsParams | (private) |
| 320 | type | ListReactionsMSTeamsParams | (private) |
| 326 | type | ReactionSummary | (private) |
| 336 | type | ListReactionsMSTeamsResult | (private) |
| 348 | fn | reactMessageMSTeams | pub |
| 366 | fn | unreactMessageMSTeams | pub |
| 382 | fn | listReactionsMSTeams | pub |
| 427 | type | SearchMessagesMSTeamsParams | (private) |
| 435 | type | SearchMessagesMSTeamsResult | (private) |
| 450 | type | GraphMessagesPage | (private) |
| 455 | fn | normalizeSearchText | (private) |
| 462 | fn | matchesSearchSender | (private) |
| 478 | fn | searchMessagesMSTeams | pub |

## extensions/msteams/src/graph-upload.test.ts (771 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | FetchCall | (private) |
| 15 | fn | requireFetchCall | (private) |
| 23 | fn | expectGraphUploadFetch | (private) |
| 32 | fn | bodyOnlyErrorResponse | (private) |
| 41 | fn | waitForFetchCall | (private) |
| 49 | fn | fetchSignal | (private) |
| 58 | fn | abortReasonError | (private) |
| 62 | fn | createHangingFetch | (private) |
| 76 | fn | createHangingBodyFetch | (private) |
| 97 | fn | expectMSTeamsTimeout | (private) |
| 104 | type | UploadToSharePointParams | (private) |
| 109 | fn | uploadToSharePoint | (private) |
| 695 | fn | writeNext | (private) |

## extensions/msteams/src/graph.test.ts (692 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 78 | fn | jsonResponse | (private) |
| 86 | fn | textResponse | (private) |
| 90 | fn | mockFetch | (private) |
| 94 | fn | mockJsonFetchResponse | (private) |
| 98 | fn | mockTextFetchResponse | (private) |
| 102 | fn | graphStreamResponse | (private) |
| 129 | fn | graphCollection | (private) |
| 133 | fn | mockGraphCollection | (private) |
| 137 | fn | requestUrl | (private) |
| 147 | fn | fetchCallUrl | (private) |
| 155 | fn | fetchCallInit | (private) |
| 159 | fn | fetchCallHeader | (private) |
| 167 | fn | expectFetchPathContains | (private) |
| 171 | fn | fetchCallSearchParam | (private) |
| 179 | fn | expectSearchGraphUsers | (private) |
| 193 | fn | expectRejectsToThrow | (private) |
| 197 | fn | mockGraphTokenResolution | (private) |
| 531 | type | Item | (private) |
| 534 | fn | pagedResponse | (private) |

## extensions/msteams/src/messenger.test.ts (906 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | chunkMarkdownText | (private) |
| 78 | fn | findEntity | (private) |
| 85 | fn | requireAiGeneratedEntity | (private) |
| 98 | type | MockAppOptions | (private) |
| 104 | fn | createMockApp | (private) |
| 163 | fn | buildActivity | (private) |
| 246 | fn | createRevokedThreadContext | (private) |
| 271 | fn | sendAndCaptureRevokeFallbackReference | (private) |

## extensions/msteams/src/messenger.ts (576 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | MSTeamsConversationReference | (private) |
| 70 | type | MSTeamsReplyRenderOptions | (private) |
| 82 | type | MSTeamsRenderedMessage | pub |
| 87 | type | MSTeamsSendRetryOptions | (private) |
| 93 | type | MSTeamsSendRetryEvent | (private) |
| 102 | fn | normalizeConversationId | (private) |
| 106 | fn | buildConversationReference | pub |
| 145 | fn | pushTextMessages | (private) |
| 179 | fn | clampMs | (private) |
| 186 | fn | resolveRetryOptions | (private) |
| 200 | fn | computeRetryDelayMs | (private) |
| 212 | fn | shouldRetry | (private) |
| 216 | fn | renderReplyPayloadsToMessages | pub |
| 278 | fn | buildActivity | (private) |
| 395 | fn | sendMSTeamsMessages | pub |
| 423 | fn | sendWithRetry | (private) |
| 461 | fn | sendMessageInContext | (private) |
| 504 | fn | sendMessageBatchInContext | (private) |
| 523 | fn | sendFn | (private) |

## extensions/msteams/src/monitor.lifecycle.test.ts (1127 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | FakeServer | (private) |
| 22 | type | MSTeamsUserResolution | (private) |
| 28 | type | ResolveMSTeamsTeamsConfigMock | (private) |
| 38 | type | ResolveMSTeamsUserAllowlistMock | (private) |
| 43 | type | RegisterMSTeamsHandlersMock | (private) |
| 48 | type | MockExpressFn | (private) |
| 49 | type | MockExpressApp | (private) |
| 96 | fn | factory | (private) |
| 123 | fn | wrappedFactory | (private) |
| 229 | fn | waitForMSTeamsTestState | (private) |
| 233 | fn | createConfig | (private) |
| 250 | fn | updateMSTeamsConfig | (private) |
| 264 | fn | createRuntime | (private) |
| 274 | fn | createStores | (private) |
| 281 | fn | requireRegisteredMSTeamsConfig | (private) |

## extensions/msteams/src/monitor.ts (787 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | type | MonitorMSTeamsOpts | (private) |
| 65 | type | MonitorMSTeamsResult | (private) |
| 70 | fn | monitorMSTeamsProvider | pub |
| 104 | fn | cleanAllowEntry | (private) |
| 109 | fn | isStableUserId | (private) |
| 110 | fn | cleanAllowEntries | (private) |
| 112 | fn | isMutableUserEntry | (private) |
| 115 | fn | resolveAllowlistUsers | (private) |
| 435 | fn | handleSdkSigninInvoke | (private) |
| 527 | fn | next | (private) |
| 582 | fn | shutdown | (private) |
| 609 | fn | buildActivityHandler | (private) |
| 610 | type | Handler | (private) |
| 611 | type | MessageHandler | (private) |
| 637 | fn | noop | (private) |
| 672 | fn | createMSTeamsReplayContext | (private) |
| 735 | fn | adaptSdkContext | (private) |
| 766 | fn | sendActivity | (private) |

## extensions/msteams/src/reply-dispatcher.test.ts (653 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | StreamMock | (private) |
| 50 | fn | createStreamMock | (private) |
| 106 | fn | createDispatcher | (private) |
| 146 | fn | getStreamMock | (private) |
| 153 | fn | getContextSendActivity | (private) |
| 160 | type | DispatcherOptions | (private) |
| 165 | type | PipelineArgs | (private) |
| 173 | fn | dispatcherOptions | (private) |
| 186 | fn | pipelineArgs | (private) |
| 194 | fn | pipelineTypingStart | (private) |
| 202 | fn | firstSystemEventCall | (private) |
| 210 | fn | triggerPartialReply | (private) |

## extensions/msteams/src/reply-dispatcher.ts (559 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | createMSTeamsReplyDispatcher | pub |
| 97 | fn | rawSendTypingIndicator | (private) |
| 219 | fn | queueDeliveryFailureSystemEvent | (private) |
| 245 | fn | queueReplyPayload | (private) |
| 256 | fn | flushPendingMessages | (private) |
| 388 | type | PipelinePayload | (private) |

## extensions/msteams/src/reply-stream-controller.test.ts (569 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | type | StreamCloseResult | (private) |
| 7 | fn | makeStream | (private) |
| 17 | fn | makeContext | (private) |
| 21 | fn | makeController | (private) |
| 410 | fn | makeCancelError | (private) |

## extensions/msteams/src/resolve-allowlist.test.ts (513 lines)

_No symbols extracted._

## extensions/msteams/src/resolve-allowlist.ts (557 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | MSTeamsChannelResolution | (private) |
| 27 | type | MSTeamsUserResolution | (private) |
| 35 | type | StableMSTeamsTeamIdMode | (private) |
| 37 | fn | normalizeExactMatch | (private) |
| 41 | fn | uniqueItemsById | (private) |
| 52 | fn | findExactTeams | (private) |
| 59 | fn | findExactChannels | (private) |
| 66 | fn | findExactUsers | (private) |
| 77 | fn | isStableMSTeamsUserId | (private) |
| 81 | fn | normalizeStaticMSTeamsAllowEntry | (private) |
| 93 | fn | projectStableMSTeamsUserAllowlist | pub |
| 103 | fn | stripProviderPrefix | (private) |
| 107 | fn | normalizeMSTeamsMessagingTarget | pub |
| 124 | fn | normalizeMSTeamsUserInput | pub |
| 130 | fn | parseMSTeamsConversationId | pub |
| 150 | fn | looksLikeMSTeamsConversationId | pub |
| 185 | fn | looksLikeMSTeamsTargetId | pub |
| 199 | fn | normalizeMSTeamsTeamKey | (private) |
| 206 | fn | normalizeMSTeamsChannelKey | (private) |
| 211 | fn | normalizeMSTeamsConversationTargetId | (private) |
| 216 | fn | looksLikeMSTeamsThreadConversationId | (private) |
| 221 | fn | isStableMSTeamsTeamKey | (private) |
| 225 | fn | projectStableMSTeamsChannels | (private) |
| 241 | fn | projectStableMSTeamsTeamsConfig | pub |
| 261 | fn | parseMSTeamsTeamChannelInput | pub |
| 276 | fn | parseMSTeamsTeamEntry | pub |
| 289 | fn | resolveMSTeamsChannelAllowlist | pub |
| 295 | fn | getToken | (private) |
| 422 | fn | resolveMSTeamsTeamsConfig | pub |
| 515 | fn | resolveMSTeamsUserAllowlist | pub |
| 520 | fn | getToken | (private) |

## extensions/msteams/src/send.test.ts (608 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 109 | fn | createMockApp | (private) |
| 131 | fn | mockProactiveSendContextFailure | (private) |
| 157 | fn | createSharePointSendContext | (private) |
| 173 | fn | mockSharePointPdfUpload | (private) |
| 205 | type | MockWithCalls | (private) |
| 209 | fn | firstObjectArg | (private) |

## extensions/msteams/src/send.ts (672 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | SendMSTeamsMessageParams | (private) |
| 50 | type | SendMSTeamsMessageResult | (private) |
| 67 | fn | createMSTeamsSendReceipt | (private) |
| 107 | fn | createMSTeamsSendResult | (private) |
| 131 | type | SendMSTeamsPollParams | (private) |
| 144 | type | SendMSTeamsPollResult | (private) |
| 150 | type | SendMSTeamsCardParams | (private) |
| 159 | type | SendMSTeamsCardResult | (private) |
| 175 | fn | sendMessageMSTeams | pub |
| 363 | fn | sendTextWithMedia | (private) |
| 424 | type | ProactiveActivityParams | (private) |
| 432 | type | ProactiveActivityRawParams | (private) |
| 434 | fn | sendProactiveActivityRaw | (private) |
| 447 | fn | sendProactiveActivity | (private) |
| 470 | fn | sendPollMSTeams | pub |
| 522 | fn | sendAdaptiveCardMSTeams | pub |
| 564 | type | EditMSTeamsMessageParams | (private) |
| 575 | type | EditMSTeamsMessageResult | (private) |
| 579 | type | DeleteMSTeamsMessageParams | (private) |
| 588 | type | DeleteMSTeamsMessageResult | (private) |
| 598 | fn | editMessageMSTeams | pub |
| 643 | fn | deleteMessageMSTeams | pub |
