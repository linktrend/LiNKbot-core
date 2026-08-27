# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 38 large files in this module.

## extensions/feishu/src/accounts.test.ts (501 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | makeDefaultAndRouterAccounts | (private) |
| 22 | fn | expectExplicitDefaultAccountSelection | (private) |
| 32 | fn | setTestEnvValue | (private) |
| 42 | fn | restoreTestEnvValue | (private) |
| 50 | fn | withEnvVar | (private) |
| 59 | fn | asConfig | (private) |
| 63 | fn | expectUnresolvedEnvSecretRefError | (private) |

## extensions/feishu/src/bitable.ts (785 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | BitableRecordCreatePayload | (private) |
| 18 | type | BitableRecordUpdatePayload | (private) |
| 21 | type | BitableRecordFields | (private) |
| 22 | type | BitableRecordUpdateFields | (private) |
| 26 | class | LarkApiError | (private) |
| 39 | fn | ensureLarkSuccess | (private) |
| 77 | fn | parseBitableUrl | (private) |
| 107 | fn | getAppTokenFromWiki | (private) |
| 125 | fn | getBitableMeta | (private) |
| 170 | fn | listFields | (private) |
| 190 | fn | listRecords | (private) |
| 214 | fn | readBitableListRecordsPageSize | (private) |
| 221 | fn | getRecord | (private) |
| 232 | fn | createRecord | (private) |
| 250 | type | CleanupLogger | (private) |
| 258 | fn | isDefaultEmptyBitableFieldValue | (private) |
| 279 | fn | isPlaceholderBitableRecord | (private) |
| 288 | fn | cleanupNewBitable | (private) |
| 387 | fn | createApp | (private) |
| 440 | fn | createField | (private) |
| 471 | fn | updateRecord | (private) |
| 586 | fn | registerFeishuBitableTools | pub |
| 601 | type | AccountAwareParams | (private) |
| 603 | fn | getClient | (private) |

## extensions/feishu/src/bot-content.ts (537 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | FeishuMention | (private) |
| 23 | type | FeishuMessageLike | (private) |
| 42 | type | GroupSessionScope | (private) |
| 44 | type | FeishuLogger | (private) |
| 46 | type | ResolvedFeishuGroupSession | (private) |
| 54 | fn | resolveFeishuGroupSession | pub |
| 134 | fn | parseMessageContent | pub |
| 173 | fn | formatFeishuMediaContent | (private) |
| 195 | fn | resolveFeishuMediaFailurePresentation | pub |
| 225 | fn | formatSubMessageContent | (private) |
| 253 | fn | parseMergeForwardContent | pub |
| 297 | fn | checkBotMentioned | pub |
| 315 | fn | normalizeMentions | pub |
| 323 | fn | escaped | (private) |
| 324 | fn | escapeName | (private) |
| 339 | fn | normalizeFeishuCommandProbeBody | pub |
| 350 | fn | parseMediaKeys | (private) |
| 376 | fn | toMessageResourceType | (private) |
| 380 | fn | resolveSavedFeishuMedia | (private) |
| 402 | fn | inferPlaceholder | (private) |
| 420 | fn | resolveFeishuMediaList | pub |

## extensions/feishu/src/bot.broadcast.test.ts (968 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 71 | fn | createRuntimeEnv | (private) |
| 83 | fn | createIngressLifecycle | (private) |
| 100 | fn | createReplayClaim | (private) |
| 197 | fn | createBroadcastConfig | (private) |
| 215 | fn | createBroadcastEvent | (private) |

## extensions/feishu/src/bot.card-action.test.ts (671 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | fn | createCardActionEvent | (private) |
| 81 | fn | createStructuredQuickActionEvent | (private) |
| 124 | fn | mockCallArg | (private) |
| 136 | fn | requireRecord | (private) |
| 143 | fn | handleMessageEvent | (private) |
| 151 | fn | handleMessage | (private) |
| 155 | fn | sendMessageCall | (private) |
| 162 | fn | sendCardCall | (private) |

## extensions/feishu/src/bot.test.ts (4843 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | ConfiguredBindingRoute | (private) |
| 21 | type | BoundConversation | (private) |
| 24 | type | BindingReadiness | (private) |
| 35 | fn | createConfiguredFeishuRoute | (private) |
| 124 | fn | createConfiguredBindingReadiness | (private) |
| 128 | fn | createBoundConversation | (private) |
| 144 | fn | buildDefaultResolveRoute | (private) |
| 157 | fn | createFeishuBotRuntime | (private) |
| 250 | fn | resolveEnvelopeFormatOptionsMock | (private) |
| 251 | fn | withReplyDispatcherMock | (private) |
| 255 | fn | mockCallArg | (private) |
| 268 | fn | lastMockCallArg | (private) |
| 276 | type | FeishuRoutePeer | (private) |
| 278 | fn | expectResolvedRouteCall | (private) |
| 481 | fn | dispatchMessage | (private) |
| 4738 | fn | createTextEvent | (private) |

## extensions/feishu/src/bot.ts (1891 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 104 | fn | shouldSendNoVisibleReplyFallback | (private) |
| 126 | fn | isFeishuTopicSessionScope | (private) |
| 132 | fn | resolveFeishuAudioPreflightTranscript | (private) |
| 167 | fn | parseFeishuMessageEvent | pub |
| 218 | fn | shouldIncludeFetchedGroupContextMessage | (private) |
| 252 | fn | filterFetchedGroupContextMessages | (private) |
| 286 | fn | handleFeishuMessage | pub |
| 732 | fn | rejectDirectAuthorization | (private) |
| 1189 | fn | getRootMessageInfo | (private) |
| 1241 | fn | resolveThreadContextForAgent | (private) |
| 1317 | fn | relevantMessages | (private) |
| 1357 | fn | buildCtxPayloadForAgent | (private) |
| 1470 | fn | buildFeishuInboundLastRouteUpdate | (private) |
| 1536 | fn | abandonBroadcast | (private) |
| 1560 | fn | dispatchForAgent | (private) |

## extensions/feishu/src/channel.test.ts (2362 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 81 | fn | getDescribedActions | (private) |
| 85 | fn | requireRecord | (private) |
| 92 | fn | requireArray | (private) |
| 99 | fn | mockCallArg | (private) |
| 111 | fn | resultDetails | (private) |

## extensions/feishu/src/channel.ts (1887 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 115 | fn | readFeishuMediaParam | (private) |
| 123 | fn | readBooleanParam | (private) |
| 133 | fn | hasLegacyFeishuCardCommandValue | (private) |
| 142 | fn | containsLegacyFeishuCardCommandValue | (private) |
| 183 | fn | toFeishuMessageSendResult | (private) |
| 250 | fn | createFeishuActionClient | (private) |
| 255 | fn | resolveFeishuChatTypeById | (private) |
| 265 | fn | resolveFeishuMessageChatType | (private) |
| 299 | fn | describeFeishuMessageTool | (private) |
| 347 | fn | setFeishuNamedAccountEnabled | (private) |
| 384 | fn | isFeishuReactionsActionEnabled | (private) |
| 401 | fn | areAnyFeishuReactionActionsEnabled | (private) |
| 410 | fn | isFeishuGroupTopicSessionKey | (private) |
| 418 | type | FeishuActionReplyAnchor | (private) |
| 423 | type | FeishuSendActionContext | (private) |
| 428 | fn | resolveFeishuTopicAutoThreadAnchor | (private) |
| 439 | fn | buildFeishuSendReplyAnchor | (private) |
| 453 | fn | isSupportedFeishuDirectConversationId | (private) |
| 464 | fn | normalizeFeishuAcpConversationId | (private) |
| 483 | fn | matchFeishuAcpConversation | (private) |
| 524 | fn | resolveFeishuSenderScopedCommandConversation | (private) |
| 573 | fn | resolveFeishuCommandConversation | (private) |
| 617 | fn | jsonActionResult | (private) |
| 624 | fn | readFirstString | (private) |
| 643 | fn | resolveFeishuMessageActionResponsePrefix | (private) |
| 661 | fn | readOptionalPositiveInteger | (private) |
| 674 | fn | resolveFeishuActionTarget | (private) |
| 681 | fn | resolveFeishuChatId | (private) |
| 702 | fn | resolveFeishuMessageId | (private) |
| 706 | fn | resolveFeishuMessageReadTarget | (private) |
| 739 | fn | assertFeishuMessageMatchesReadTarget | (private) |
| 749 | fn | authorizeFeishuMessageReadTarget | (private) |
| 755 | fn | authorize | (private) |
| 789 | fn | getAuthorizedFeishuChatInfo | (private) |
| 829 | fn | getAuthorizedFeishuMessage | (private) |
| 882 | fn | requireAuthorizedFeishuMessage | (private) |
| 892 | fn | resolveFeishuMemberId | (private) |
| 905 | fn | resolveFeishuMemberIdType | (private) |
| 911 | fn | resolveRequestedFeishuMemberIdType | (private) |

## extensions/feishu/src/chat.test.ts (746 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | createFeishuToolRuntime | (private) |
| 22 | fn | resolveRegisteredTool | (private) |
| 50 | fn | createChatToolApi | (private) |

## extensions/feishu/src/client.test.ts (649 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | CreateFeishuClient | (private) |
| 11 | type | CreateFeishuWSClient | (private) |
| 12 | type | GetFeishuUserAgent | (private) |
| 13 | type | ResetFeishuProxyAgentForTest | (private) |
| 70 | type | ProxyEnvKey | (private) |
| 89 | fn | setFeishuTestEnvValue | (private) |
| 144 | fn | isRecord | (private) |
| 148 | type | HttpInstanceLike | (private) |
| 154 | fn | requireHttpInstance | (private) |
| 170 | fn | readCallOptions | (private) |
| 178 | fn | firstWsClientOptions | (private) |
| 284 | fn | expectGetCallTimeout | (private) |

## extensions/feishu/src/comment-handler.test.ts (619 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | raceWithNextMacrotask | (private) |
| 48 | fn | buildConfig | (private) |
| 63 | fn | buildResolvedRoute | (private) |
| 75 | fn | mockCallArg | (private) |
| 86 | fn | createTestRuntime | (private) |
| 93 | type | CommentTurnPlan | (private) |

## extensions/feishu/src/doctor.test.ts (657 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | EnvSnapshot | (private) |
| 28 | fn | captureEnv | (private) |
| 36 | fn | restoreEnv | (private) |
| 47 | fn | feishuConfig | (private) |
| 58 | fn | stateDir | (private) |
| 66 | fn | sessionsDir | (private) |
| 70 | fn | storePath | (private) |
| 74 | fn | sqliteStorePath | (private) |
| 78 | fn | corruptTranscriptEventJson | (private) |
| 89 | fn | writeStore | (private) |
| 99 | fn | readStoreEntries | (private) |
| 108 | fn | writeTranscript | (private) |
| 115 | fn | sessionHeader | (private) |
| 125 | fn | userMessage | (private) |
| 135 | fn | listBackupDirs | (private) |

## extensions/feishu/src/doctor.ts (976 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | FeishuDoctorFinding | (private) |
| 54 | type | FeishuSessionTarget | (private) |
| 59 | type | FeishuSessionEntry | (private) |
| 64 | type | FeishuDoctorSessionEntry | (private) |
| 71 | type | FeishuDoctorInspection | (private) |
| 78 | type | FeishuDoctorRepairReport | (private) |
| 88 | fn | timestampForPath | (private) |
| 92 | fn | toFeishuSessionEntry | (private) |
| 102 | fn | countLabel | (private) |
| 106 | fn | existsDir | (private) |
| 114 | fn | existsFile | (private) |
| 122 | fn | resolveFeishuAgentSessionsDir | (private) |
| 126 | fn | isSqliteTranscriptMarker | (private) |
| 130 | fn | safeReadDir | (private) |
| 138 | fn | isPathWithinRoot | (private) |
| 145 | fn | formatDisplayPath | (private) |
| 153 | fn | formatFinding | (private) |
| 174 | fn | isFeishuSessionStoreKey | (private) |
| 179 | fn | isFeishuAcpBindingSessionKey | (private) |
| 183 | fn | normalizeMetadataString | (private) |
| 187 | fn | isFeishuSessionEntry | (private) |
| 228 | fn | collectConfiguredAgentIds | (private) |
| 239 | fn | resolveConfiguredDefaultAgentId | (private) |
| 245 | fn | collectFeishuSessionTargets | (private) |
| 251 | fn | addTarget | (private) |
| 284 | fn | collectJsonFiles | (private) |
| 286 | fn | visit | (private) |
| 312 | fn | collectCorruptFeishuStateJsonFindings | (private) |
| 324 | fn | resolveSessionTranscriptCandidates | (private) |
| 374 | fn | isSessionHeader | (private) |
| 378 | fn | isBlankUserMessage | (private) |
| 392 | fn | isUserMessage | (private) |
| 401 | fn | inspectTranscriptEntries | (private) |
| 467 | fn | inspectSessionTranscript | (private) |
| 521 | fn | inspectSqliteSessionTranscript | (private) |
| 564 | fn | collectFeishuSessionFindings | (private) |
| 600 | fn | hasCorruptFeishuStateJsonFinding | (private) |
| 604 | fn | sessionEntryId | (private) |
| 608 | fn | collectRepairSessionEntries | (private) |
| 640 | fn | inspectFeishuDoctorState | (private) |
| 687 | fn | ensureBackupDir | (private) |
| 693 | fn | resolveUniquePath | (private) |
| 706 | fn | movePathToBackup | (private) |
| 720 | fn | copyStoreBackup | (private) |
| 735 | fn | collectSessionArtifactPaths | (private) |
| 752 | fn | archiveSessionArtifacts | (private) |
| 777 | fn | repairFeishuDoctorState | (private) |
| 886 | fn | formatPreviewWarning | (private) |
| 914 | fn | formatRepairChange | (private) |
| 934 | fn | hasConfiguredFeishuChannel | (private) |
| 938 | fn | runFeishuDoctorSequence | (private) |

## extensions/feishu/src/docx.test.ts (938 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 64 | type | ToolResultWithDetails | (private) |
| 70 | fn | requireRecord | (private) |
| 77 | fn | callArg | (private) |
| 86 | fn | expectLoadWebMediaCall | (private) |
| 185 | fn | resolveFeishuDocTool | (private) |
| 203 | fn | executeFeishuDocTool | (private) |

## extensions/feishu/src/docx.ts (1461 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | resolveDocToolLocalRoots | (private) |
| 80 | fn | cleanBlocksForInsert | (private) |
| 109 | fn | convertMarkdown | (private) |
| 122 | fn | normalizeChildIds | (private) |
| 132 | type | DocxChildrenCreatePayload | (private) |
| 135 | type | DocxChildrenCreateChild | (private) |
| 138 | type | DocxDescendantCreatePayload | (private) |
| 141 | type | DocxDescendantCreateBlock | (private) |
| 144 | type | DriveMediaUploadAllPayload | (private) |
| 147 | type | DriveMediaUploadFile | (private) |
| 149 | fn | toCreateChildBlock | (private) |
| 153 | fn | toDescendantBlock | (private) |
| 162 | fn | normalizeInsertedChildBlocks | (private) |
| 176 | fn | normalizeConvertedBlockTree | (private) |
| 227 | fn | visit | (private) |
| 258 | fn | insertBlocks | (private) |
| 293 | fn | convertMarkdownWithFallback | (private) |
| 329 | fn | chunkedConvertMarkdown | (private) |
| 343 | type | Logger | (private) |
| 352 | fn | insertBlocksWithDescendant | (private) |
| 380 | fn | clearDocumentContent | (private) |
| 406 | fn | uploadImageToDocx | (private) |
| 437 | fn | processImages | (private) |
| 489 | fn | uploadImageBlock | (private) |
| 554 | fn | uploadFileBlock | (private) |
| 641 | fn | readDoc | (private) |
| 681 | fn | createDoc | (private) |
| 743 | fn | writeDoc | (private) |
| 788 | fn | appendDoc | (private) |
| 830 | fn | insertDoc | (private) |
| 922 | fn | createTable | (private) |
| 971 | fn | writeTableCells | (private) |
| 1059 | fn | createTableWithValues | (private) |
| 1092 | fn | updateBlock | (private) |
| 1120 | fn | deleteBlock | (private) |
| 1154 | fn | listBlocks | (private) |
| 1167 | fn | getBlock | (private) |
| 1180 | fn | listAppScopes | (private) |
| 1199 | fn | registerFeishuDocTools | pub |
| 1214 | type | FeishuDocExecuteParams | (private) |
| 1216 | fn | getClient | (private) |
| 1224 | fn | getMediaMaxBytes | (private) |
| 1237 | fn | getImageReadTimeoutMs | (private) |

## extensions/feishu/src/drive.test.ts (1497 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | createFeishuToolRuntime | (private) |
| 25 | fn | raceWithNextMacrotask | (private) |
| 34 | fn | createDriveToolApi | (private) |
| 49 | fn | mockCallArg | (private) |
| 62 | type | FeishuDriveTool | (private) |
| 68 | type | FeishuDriveToolFactory | (private) |
| 73 | fn | firstToolFactory | (private) |
| 77 | fn | buildDriveTool | (private) |
| 97 | fn | firstLogMessage | (private) |
| 101 | type | FeishuDriveRequest | (private) |
| 108 | fn | requestCall | (private) |
| 115 | fn | expectRequestCall | (private) |
| 131 | fn | schemaForAction | (private) |

## extensions/feishu/src/drive.ts (901 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | FeishuExplorerRootFolderMetaResponse | (private) |
| 31 | type | FeishuDriveInternalClient | (private) |
| 50 | class | FeishuReplyCommentError | (private) |
| 72 | type | FeishuDriveCommentReply | (private) |
| 82 | type | FeishuDriveCommentCard | (private) |
| 97 | type | FeishuDriveListCommentsResponse | (private) |
| 103 | type | FeishuDriveListRepliesResponse | (private) |
| 109 | type | FeishuDriveToolContext | (private) |
| 119 | fn | getDriveInternalClient | (private) |
| 123 | fn | buildReplyElements | (private) |
| 127 | fn | requestDriveApi | (private) |
| 144 | fn | assertDriveApiSuccess | (private) |
| 151 | fn | normalizeCommentReply | (private) |
| 161 | fn | normalizeCommentCard | (private) |
| 179 | fn | normalizeCommentPageSize | (private) |
| 186 | fn | resolveAmbientCommentTarget | (private) |
| 194 | fn | applyAmbientCommentDefaults | (private) |
| 213 | fn | applyAddCommentAmbientDefaults | (private) |
| 230 | fn | applyAddCommentDefaults | (private) |
| 249 | fn | applyCommentFileTypeDefault | (private) |
| 273 | fn | formatDriveApiError | (private) |
| 277 | fn | extractDriveApiErrorMeta | (private) |
| 304 | fn | isReplyNotAllowedError | (private) |
| 311 | fn | getRootFolderToken | (private) |
| 329 | fn | listFolder | (private) |
| 370 | fn | getRootFileInfo | (private) |
| 392 | fn | getFileInfo | (private) |
| 444 | fn | createFolder | (private) |
| 473 | fn | moveFile | (private) |
| 499 | fn | deleteFile | (private) |
| 525 | fn | listComments | (private) |
| 555 | fn | listCommentReplies | (private) |
| 588 | fn | addComment | (private) |
| 620 | fn | queryCommentById | (private) |
| 646 | fn | replyComment | (private) |
| 716 | fn | deliverCommentThreadText | pub |
| 798 | fn | registerFeishuDriveTools | pub |
| 813 | type | FeishuDriveExecuteParams | (private) |

## extensions/feishu/src/feishu-ingress.test.ts (519 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | FeishuIngressQueue | (private) |
| 27 | type | FeishuIngressPayload | (private) |
| 29 | fn | messageEnvelope | (private) |
| 60 | fn | flattenEnvelope | (private) |
| 64 | fn | createLifecycle | (private) |
| 81 | fn | createDispatcher | (private) |
| 89 | fn | startIngress | (private) |
| 103 | fn | withQueue | (private) |
| 127 | fn | signWebhookBody | (private) |
| 141 | fn | withWebhook | (private) |
| 171 | fn | postWebhook | (private) |

## extensions/feishu/src/feishu-ingress.ts (548 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | FeishuIngressLifecycle | pub |
| 30 | type | FeishuIngressPayload | (private) |
| 36 | type | FeishuIngressFacts | (private) |
| 42 | type | FeishuIngressOptions | (private) |
| 55 | type | FeishuDurableIngress | (private) |
| 64 | type | FeishuLifecycleSource | (private) |
| 69 | class | FeishuIngressPermanentError | pub |
| 80 | fn | isRecord | (private) |
| 84 | fn | readString | (private) |
| 88 | fn | parseRawEnvelope | (private) |
| 108 | fn | decryptEnvelope | (private) |
| 137 | fn | inspectFeishuIngressEnvelope | (private) |
| 188 | fn | resolveFeishuIngressNonRetryableFailure | (private) |
| 205 | fn | buildFeishuFlushIngressLifecycle | pub |
| 230 | fn | releaseReplayClaims | (private) |
| 235 | fn | runAbandon | (private) |
| 243 | fn | ensureAbandoned | (private) |
| 257 | fn | abandonAll | (private) |
| 269 | fn | adoptAll | (private) |
| 366 | fn | createFeishuDurableIngress | pub |
| 413 | fn | settleDeferred | (private) |

## extensions/feishu/src/media.test.ts (1026 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | fn | expectMediaTimeoutClientConfigured | (private) |
| 66 | fn | mockResolvedFeishuAccount | (private) |
| 77 | fn | mockCallArg | (private) |
| 90 | fn | callData | (private) |
| 102 | fn | withIsolatedHome | (private) |
| 672 | fn | httpStatusError | (private) |

## extensions/feishu/src/media.ts (983 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | type | SaveMessageResourceResult | (private) |
| 62 | fn | createConfiguredFeishuMediaClient | (private) |
| 80 | type | FeishuUploadResponse | (private) |
| 84 | type | FeishuDownloadResponse | (private) |
| 86 | type | FeishuHeaderMap | (private) |
| 87 | type | FeishuMessageResourceDownloadType | (private) |
| 89 | fn | asHeaderMap | (private) |
| 100 | fn | extractFeishuUploadKey | (private) |
| 134 | fn | readHeaderValue | (private) |
| 158 | fn | readHttpStatusFromError | (private) |
| 175 | fn | isHttpStatusError | (private) |
| 179 | fn | containsEastAsianScript | (private) |
| 183 | fn | recoverUtf8FileNameFromLatin1Header | (private) |
| 191 | fn | decodeDispositionFileName | (private) |
| 206 | fn | extractFeishuDownloadMetadata | (private) |
| 245 | fn | mediaLimitError | (private) |
| 249 | fn | saveFeishuResponseMedia | (private) |
| 294 | fn | save | (private) |
| 320 | fn | saveMessageResourceWithType | (private) |
| 348 | fn | saveMessageResourceFeishu | pub |
| 392 | type | UploadImageResult | (private) |
| 396 | type | UploadFileResult | (private) |
| 400 | type | SendMediaResult | pub |
| 411 | fn | uploadImageFeishu | (private) |
| 456 | fn | sanitizeFileNameForUpload | (private) |
| 464 | fn | uploadFileFeishu | (private) |
| 508 | fn | sendImageFeishu | (private) |
| 562 | fn | sendFileFeishu | (private) |
| 619 | fn | detectFileType | (private) |
| 647 | fn | resolveFeishuOutboundMediaKind | (private) |
| 694 | fn | isFeishuNativeVoiceAudio | (private) |
| 702 | fn | normalizeMediaNameForExtension | (private) |
| 710 | fn | shouldSuppressFeishuTextForVoiceMedia | pub |
| 745 | fn | isLikelyTranscodableAudio | (private) |
| 751 | fn | transcodeToFeishuVoiceOpus | (private) |
| 801 | fn | prepareFeishuVoiceMedia | (private) |
| 824 | fn | probeMediaDurationMs | (private) |
| 858 | fn | maybeProbeUploadDurationMs | (private) |
| 875 | fn | sendMediaFeishu | pub |

## extensions/feishu/src/monitor.account.ts (576 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | FeishuReactionCreatedEvent | pub |
| 47 | type | FeishuReactionDeletedEvent | (private) |
| 51 | type | ResolveReactionSyntheticEventParams | (private) |
| 63 | fn | resolveReactionSyntheticEvent | pub |
| 159 | fn | normalizeFeishuChatType | (private) |
| 165 | type | RegisterEventHandlersContext | (private) |
| 184 | fn | parseFeishuBotAddedEventPayload | (private) |
| 191 | fn | parseFeishuBotRemovedChatId | (private) |
| 198 | fn | firstString | (private) |
| 209 | fn | readFeishuIdentityField | (private) |
| 219 | fn | parseFeishuCardActionEventPayload | (private) |
| 279 | fn | registerEventHandlers | (private) |
| 287 | fn | runFeishuHandler | (private) |
| 461 | type | BotOpenIdSource | (private) |
| 465 | type | MonitorSingleAccountParams | (private) |
| 481 | fn | monitorSingleAccount | pub |

## extensions/feishu/src/monitor.cleanup.test.ts (508 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | MockWsClient | (private) |
| 30 | fn | createAccount | (private) |
| 45 | fn | createWsClient | (private) |
| 52 | fn | createHttpServerMock | (private) |
| 80 | fn | firstRuntimeError | (private) |
| 84 | fn | firstWsCallbacks | (private) |

## extensions/feishu/src/monitor.comment.test.ts (995 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | buildMonitorConfig | (private) |
| 47 | fn | makeDriveCommentEvent | (private) |
| 72 | fn | makeOpenApiClient | (private) |
| 208 | fn | setupCommentMonitorHandler | (private) |
| 223 | fn | mockCallAt | (private) |

## extensions/feishu/src/monitor.comment.ts (1393 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | FeishuDriveCommentUserId | (private) |
| 38 | type | FeishuDriveCommentNoticeEvent | pub |
| 54 | type | ResolveDriveCommentEventParams | (private) |
| 66 | type | ResolvedDriveCommentEventTurn | (private) |
| 88 | type | FeishuRequestClient | (private) |
| 104 | type | FeishuDriveMetaBatchQueryResponse | (private) |
| 112 | type | FeishuDriveCommentReply | (private) |
| 122 | type | FeishuDriveCommentCard | (private) |
| 136 | type | FeishuDriveCommentBatchQueryResponse | (private) |
| 140 | type | FeishuDriveCommentListResponse | (private) |
| 146 | type | FeishuDriveCommentRepliesListResponse | (private) |
| 152 | type | ResolvedCommentReplyContext | (private) |
| 160 | type | ResolvedWholeCommentTimelineEntry | (private) |
| 169 | fn | safeJsonStringify | (private) |
| 179 | fn | truncatePromptText | (private) |
| 192 | fn | formatPromptTextValue | (private) |
| 196 | fn | formatPromptBoolean | (private) |
| 200 | fn | buildDriveCommentsListUrl | (private) |
| 218 | fn | compareCommentTimelineEntries | (private) |
| 230 | fn | formatLinkedDocumentInline | (private) |
| 242 | fn | formatLinkedDocumentsPromptLines | (private) |
| 257 | fn | formatLinkedDocumentsInlineSummary | (private) |
| 271 | fn | summarizeCommentRepliesForLog | (private) |
| 280 | fn | resolveParsedCommentContent | (private) |
| 367 | fn | buildDriveCommentTargetUrl | (private) |
| 380 | fn | buildDriveCommentRepliesUrl | (private) |
| 399 | fn | fetchDriveComments | (private) |
| 442 | fn | requestFeishuOpenApi | (private) |
| 496 | fn | fetchDriveCommentReplies | (private) |
| 544 | fn | resolveCommentReplyContext | (private) |
| 585 | fn | selectCommentThreadPromptReplies | (private) |
| 617 | fn | formatCommentThreadPromptLines | (private) |
| 635 | fn | findNearestBotTimelineEntry | (private) |
| 654 | fn | selectWholeCommentTimelineEntries | (private) |
| 702 | fn | formatWholeCommentTimelinePromptLines | (private) |
| 720 | fn | fetchDriveCommentContext | (private) |
| 1014 | fn | buildDriveCommentSurfacePrompt | (private) |
| 1203 | fn | resolveDriveCommentEventCore | (private) |
| 1305 | fn | parseFeishuDriveCommentNoticeEventPayload | pub |
| 1343 | fn | resolveDriveCommentEventTurn | pub |

## extensions/feishu/src/monitor.reaction.test.ts (848 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 59 | fn | makeReactionEvent | (private) |
| 71 | fn | createFetchedReactionMessage | (private) |
| 82 | fn | resolveReactionWithLookup | (private) |
| 98 | fn | resolveNonBotReaction | (private) |
| 117 | type | FeishuMention | (private) |
| 119 | fn | buildDebounceConfig | (private) |
| 137 | fn | buildDebounceAccount | (private) |
| 152 | fn | createTextEvent | (private) |
| 175 | fn | setupDebounceMonitor | (private) |
| 202 | fn | mockCallAt | (private) |
| 214 | fn | getFirstDispatchedEvent | (private) |
| 223 | fn | expectSingleDispatchedEvent | (private) |
| 228 | fn | expectParsedFirstDispatchedEvent | (private) |
| 236 | fn | createClaimedFeishuDedupeResult | (private) |
| 247 | fn | setDedupPassThroughMocks | (private) |
| 254 | fn | createMention | (private) |
| 262 | fn | mentionOpenIds | (private) |
| 268 | fn | createFeishuMonitorRuntime | (private) |
| 290 | fn | enqueueDebouncedMessage | (private) |
| 299 | fn | setStaleRetryMocks | (private) |

## extensions/feishu/src/monitor.transport.ts (501 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | MonitorTransportParams | (private) |
| 52 | fn | isFeishuWebhookPayload | (private) |
| 56 | fn | buildFeishuWebhookEnvelope | (private) |
| 63 | fn | parseFeishuWebhookPayload | (private) |
| 72 | fn | isFeishuWebhookSignatureValid | (private) |
| 99 | fn | respondText | (private) |
| 105 | fn | getFeishuWsReconnectDelayMs | (private) |
| 112 | fn | formatFeishuWsErrorForLog | (private) |
| 138 | fn | isFeishuWsTerminalError | (private) |
| 146 | fn | cleanupFeishuWsClient | (private) |
| 168 | fn | waitForFeishuWsCycleEnd | (private) |
| 179 | fn | finish | (private) |
| 201 | fn | monitorWebSocket | pub |
| 225 | fn | handleWsError | (private) |
| 235 | fn | publishWsConnected | (private) |
| 244 | fn | publishWsReconnecting | (private) |
| 327 | fn | monitorWebhook | pub |
| 461 | fn | cleanup | (private) |
| 469 | fn | handleAbort | (private) |

## extensions/feishu/src/outbound.test.ts (2640 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 114 | fn | raceWithNextMacrotask | (private) |
| 123 | type | FeishuSendText | (private) |
| 124 | type | FeishuMessageAdapter | (private) |
| 125 | type | FeishuMessageSender | (private) |
| 127 | fn | requireFeishuSendText | (private) |
| 135 | fn | requireFeishuMessageAdapter | (private) |
| 143 | fn | requireFeishuTextSender | (private) |
| 153 | fn | requireFeishuMediaSender | (private) |
| 173 | fn | createOversizedTablePresentation | (private) |
| 192 | fn | createElementLimitedCommandPresentation | (private) |
| 220 | fn | resetOutboundMocks | (private) |
| 234 | fn | sendMessageCall | (private) |
| 239 | fn | sendMediaCall | (private) |
| 244 | fn | sendCardCall | (private) |
| 249 | fn | sendStructuredCardCall | (private) |
| 254 | fn | sendMarkdownCardCall | (private) |
| 259 | fn | commentThreadParams | (private) |
| 266 | fn | cleanupReactionCall | (private) |
| 273 | fn | expectFeishuResult | (private) |
| 373 | fn | createTmpImage | (private) |
| 618 | fn | createTmpImage | (private) |

## extensions/feishu/src/outbound.ts (978 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 70 | fn | normalizePossibleLocalImagePath | (private) |
| 111 | fn | shouldUseCard | (private) |
| 115 | fn | markRenderedFeishuCard | (private) |
| 123 | fn | readNativeFeishuCard | (private) |
| 139 | type | FeishuOutboundPayload | (private) |
| 142 | type | FeishuSendPayloadContext | (private) |
| 144 | fn | consumeFeishuPresentationFallbackMarker | (private) |
| 169 | fn | buildFeishuPayloadCard | (private) |
| 239 | fn | hasVisibleFallbackCommand | (private) |
| 258 | fn | renderFeishuPresentationPayload | (private) |
| 308 | type | FeishuReplyMode | (private) |
| 314 | fn | resolveFeishuReplyMode | (private) |
| 333 | fn | sendCommentThreadReply | (private) |
| 376 | fn | sendOutboundText | (private) |
| 457 | fn | sendFeishuFallbackPayload | (private) |
| 517 | fn | sendFeishuTtsSupplementPayload | (private) |
| 713 | fn | nextReplyMode | (private) |
| 897 | fn | reportDelivery | (private) |

## extensions/feishu/src/reply-dispatcher.test.ts (2387 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | type | StreamingSessionStub | (private) |
| 51 | fn | mergeStreamingText | (private) |
| 150 | type | ReplyDispatcherArgs | (private) |
| 151 | type | ReplyDispatcherPlan | (private) |
| 152 | type | TypingDispatcherOptions | (private) |
| 194 | fn | useNonStreamingAutoAccount | (private) |
| 207 | fn | useNonStreamingBlockAccount | (private) |
| 220 | fn | setupNonStreamingAutoDispatcher | (private) |
| 234 | fn | createRuntimeLogger | (private) |
| 238 | fn | createDispatcherHarness | (private) |
| 254 | fn | toTypingDispatcherOptions | (private) |
| 258 | fn | isRecord | (private) |
| 262 | fn | requireRecord | (private) |
| 267 | fn | expectRecordFields | (private) |
| 279 | fn | expectMockArgFields | (private) |
| 289 | fn | mockArg | (private) |
| 302 | fn | firstMockArg | (private) |
| 306 | fn | requireStreamingInstance | (private) |
| 314 | fn | firstStreamingCloseText | (private) |
| 319 | fn | expectLastMockArgFields | (private) |
| 329 | fn | expectStreamingStartOptions | (private) |
| 343 | fn | streamingUpdateTexts | (private) |

## extensions/feishu/src/reply-dispatcher.ts (995 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | shouldUseCard | (private) |
| 46 | fn | mergeStreamingFinalText | (private) |
| 71 | fn | isStreamingStartBackedOff | (private) |
| 83 | fn | rememberStreamingStartFailure | (private) |
| 89 | fn | normalizeEpochMs | (private) |
| 99 | fn | resolveCardHeader | (private) |
| 116 | fn | resolveCardNote | (private) |
| 132 | type | CreateFeishuReplyDispatcherParams | (private) |
| 158 | fn | createFeishuReplyDispatcher | pub |
| 290 | type | StreamTextUpdateMode | (private) |
| 292 | fn | markVisibleReplySent | (private) |
| 323 | fn | flushStreamingCardUpdate | (private) |
| 334 | fn | queueStreamingUpdate | (private) |
| 372 | fn | queueReasoningUpdate | (private) |
| 380 | fn | startStreaming | (private) |
| 434 | fn | resetStreamingState | (private) |
| 447 | fn | closeStreaming | (private) |
| 476 | fn | discardStreamingPreview | (private) |
| 490 | fn | updateStreamingStatusLine | (private) |
| 503 | fn | sendChunkedTextReply | (private) |
| 555 | fn | sendMediaReplies | (private) |
| 697 | fn | handleDeliveryError | (private) |

## extensions/feishu/src/send.test.ts (868 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 804 | fn | createCardClient | (private) |
| 820 | fn | parseCardContent | (private) |

## extensions/feishu/src/send.ts (809 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | shouldFallbackFromReplyTarget | (private) |
| 44 | fn | isWithdrawnReplyError | (private) |
| 69 | type | FeishuCreateMessageClient | (private) |
| 84 | type | FeishuMessageSender | (private) |
| 90 | type | FeishuMessageGetItem | (private) |
| 101 | type | FeishuGetMessageResponse | (private) |
| 110 | fn | sendFallbackDirect | (private) |
| 137 | fn | sendReplyOrFallbackDirect | (private) |
| 204 | fn | normalizeCardTemplateVariable | (private) |
| 214 | fn | readCardTemplateVariables | (private) |
| 230 | fn | applyCardTemplateVariables | (private) |
| 240 | fn | extractInteractiveElementText | (private) |
| 262 | fn | extractInteractiveElementsText | (private) |
| 276 | fn | readInteractiveElementArrays | (private) |
| 300 | fn | parseInteractivePostFallback | (private) |
| 305 | fn | parseInteractiveCardContent | (private) |
| 321 | fn | parseFeishuMessageContent | (private) |
| 362 | fn | parseFeishuMessageItem | (private) |
| 393 | fn | getMessageFeishu | pub |
| 433 | type | FeishuThreadMessageInfo | (private) |
| 447 | fn | listFeishuThreadMessages | pub |
| 526 | type | SendFeishuMessageParams | (private) |
| 540 | fn | sendMessageFeishu | pub |
| 580 | type | SendFeishuCardParams | (private) |
| 591 | fn | sendCardFeishu | pub |
| 610 | fn | editMessageFeishu | pub |
| 670 | fn | buildMarkdownCard | (private) |
| 688 | type | CardHeaderConfig | pub |
| 699 | fn | buildStructuredCard | (private) |
| 728 | fn | sendStructuredCardFeishu | pub |
| 773 | fn | sendMarkdownCardFeishu | pub |

## extensions/feishu/src/setup-surface.ts (612 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | isFeishuConfigured | (private) |
| 75 | fn | formatFeishuStatusLine | (private) |
| 87 | fn | patchFeishuConfig | (private) |
| 119 | fn | promptFeishuAllowFrom | (private) |
| 153 | fn | noteFeishuCredentialHelp | (private) |
| 170 | fn | promptFeishuAppId | (private) |
| 223 | type | WizardPrompter | (private) |
| 224 | type | FeishuSetupMethod | (private) |
| 230 | fn | applyNewAppSecurityPolicy | (private) |
| 255 | fn | promptFeishuDomain | (private) |
| 269 | fn | promptFeishuSetupMethod | (private) |
| 280 | fn | runScanToCreate | (private) |
| 334 | fn | runNewAppFlow | (private) |
| 447 | fn | runEditFlow | (private) |
| 510 | fn | runFeishuLogin | pub |

## extensions/feishu/src/streaming-card.test.ts (1191 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | FeishuStreamingFetch | (private) |
| 12 | type | StreamingSessionState | (private) |
| 21 | type | LocalServer | (private) |
| 26 | type | DispatcherInit | (private) |
| 27 | type | StreamingFetchDeps | (private) |
| 32 | type | StreamingRequest | (private) |
| 47 | fn | readRequestBody | (private) |
| 55 | fn | startLocalServer | (private) |
| 89 | fn | stripDispatcher | (private) |
| 97 | fn | createLocalRedirectFetch | (private) |
| 109 | fn | createStreamingFetch | (private) |
| 120 | fn | createMemoryFetch | (private) |
| 135 | fn | writeJson | (private) |
| 140 | fn | jsonResponse | (private) |
| 147 | fn | writeOversizedJson | (private) |
| 164 | fn | sendChunk | (private) |
| 189 | fn | setStreamingSessionInternals | (private) |
| 219 | fn | mockFetches | (private) |
| 258 | fn | mockStreamingTokenStart | (private) |

## extensions/feishu/src/streaming-card.ts (728 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | Credentials | (private) |
| 27 | type | CardState | (private) |
| 36 | type | FeishuStreamingFetch | (private) |
| 38 | type | FeishuStreamingDeps | (private) |
| 45 | type | CardKitResponse | (private) |
| 48 | type | StreamingCardOptions | (private) |
| 56 | type | StreamingCardHeader | (private) |
| 62 | type | StreamingStartOptions | (private) |
| 76 | fn | resolveStreamingTokenExpiresAt | (private) |
| 90 | fn | resolveApiBase | (private) |
| 100 | fn | resolveAllowedHostnames | (private) |
| 114 | fn | assertSuccessfulCardKitResponse | (private) |
| 128 | fn | getToken | (private) |
| 176 | fn | truncateSummary | (private) |
| 187 | fn | hasNaturalStreamingBoundary | (private) |
| 191 | fn | shouldPushStreamingUpdate | (private) |
| 201 | fn | mergeStreamingText | pub |
| 238 | class | FeishuStreamingSession | pub |

## extensions/feishu/src/subagent-hooks.test.ts (632 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | registerHandlersForTest | (private) |
| 30 | fn | expectHookError | (private) |
