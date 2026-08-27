# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 16 large files in this module.

## extensions/mattermost/src/mattermost/client.test.ts (648 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | createMockFetch | (private) |
| 45 | fn | requestUrl | (private) |
| 55 | fn | parseRequestJson | (private) |
| 66 | fn | requireRequestCall | (private) |
| 73 | fn | streamingMattermostResponse | (private) |
| 100 | fn | cancelTrackedResponse | (private) |
| 122 | fn | createTestClient | (private) |
| 132 | fn | updatePostAndCapture | (private) |

## extensions/mattermost/src/mattermost/client.ts (748 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | MattermostFetch | pub |
| 32 | type | MattermostRequestInit | (private) |
| 36 | type | MattermostClient | pub |
| 45 | type | MattermostUser | pub |
| 54 | type | MattermostChannel | pub |
| 76 | type | MattermostPost | pub |
| 78 | type | MattermostFileInfo | (private) |
| 85 | fn | normalizeMattermostBaseUrl | pub |
| 94 | fn | buildMattermostApiUrl | pub |
| 115 | fn | readMattermostSuccessText | (private) |
| 123 | fn | readMattermostError | pub |
| 140 | fn | responseWithRelease | (private) |
| 142 | fn | releaseOnce | (private) |
| 190 | fn | createMattermostClient | pub |
| 291 | fn | fetchMattermostMe | pub |
| 295 | fn | fetchMattermostUser | pub |
| 302 | fn | fetchMattermostUserByUsername | pub |
| 309 | fn | fetchMattermostChannel | pub |
| 316 | fn | fetchMattermostChannelByName | pub |
| 326 | fn | sendMattermostTyping | pub |
| 343 | fn | createMattermostDirectChannel | (private) |
| 357 | type | CreateDmChannelRetryOptions | pub |
| 373 | fn | resolveMattermostReplyDeliveryBarrierTimeoutMs | pub |
| 445 | fn | createMattermostDirectChannelWithRetry | pub |
| 490 | fn | isRetryableError | (private) |
| 570 | fn | collectErrorCandidates | (private) |
| 603 | fn | readErrorMessage | (private) |
| 611 | fn | readErrorName | (private) |
| 619 | fn | readErrorCode | (private) |
| 637 | fn | createMattermostPost | pub |
| 666 | type | MattermostTeam | (private) |
| 672 | fn | fetchMattermostUserTeams | pub |
| 679 | fn | updateMattermostPost | pub |
| 700 | fn | deleteMattermostPost | pub |
| 709 | fn | uploadMattermostFile | pub |

## extensions/mattermost/src/mattermost/draft-stream.test.ts (683 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | RequestRecord | (private) |
| 14 | fn | createMockClient | (private) |
| 45 | fn | parseRequestJson | (private) |

## extensions/mattermost/src/mattermost/interactions.test.ts (984 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | ButtonAction | (private) |
| 25 | type | ButtonAttachment | (private) |
| 26 | type | ButtonAttachments | (private) |
| 27 | type | ButtonPropsInput | (private) |
| 39 | fn | buildButtonAttachmentsForTest | (private) |
| 52 | fn | requireFirstAttachment | (private) |
| 60 | fn | requireActions | (private) |
| 68 | fn | requireAction | (private) |
| 76 | fn | generateInteractionToken | (private) |
| 86 | fn | getInteractionSecret | (private) |
| 90 | fn | verifyInteractionToken | (private) |
| 500 | fn | setInteractionRuntime | (private) |
| 513 | fn | createMattermostClientMock | (private) |
| 530 | fn | createReq | (private) |
| 586 | fn | createRes | (private) |
| 608 | fn | createActionContext | (private) |
| 613 | fn | createInteractionBody | (private) |
| 630 | fn | runHandler | (private) |
| 648 | fn | expectForbiddenResponse | (private) |
| 656 | fn | expectSuccessfulApprovalUpdate | (private) |
| 670 | fn | createActionPost | (private) |
| 696 | fn | createUnusedInteractionHandler | (private) |
| 704 | fn | runApproveInteraction | (private) |
| 735 | fn | runInvalidActionRequest | (private) |

## extensions/mattermost/src/mattermost/interactions.ts (674 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | MattermostInteractionPayload | (private) |
| 39 | type | MattermostInteractionResponse | pub |
| 47 | type | MattermostInteractionAuthorizationResult | (private) |
| 51 | type | MattermostInteractiveButtonInput | pub |
| 65 | fn | setInteractionCallbackUrl | pub |
| 69 | type | InteractionCallbackConfig | (private) |
| 75 | fn | resolveInteractionCallbackPath | pub |
| 79 | fn | isWildcardBindHost | (private) |
| 88 | fn | normalizeCallbackBaseUrl | (private) |
| 92 | fn | headerValue | (private) |
| 99 | fn | isAllowedInteractionSource | (private) |
| 124 | fn | computeInteractionCallbackUrl | pub |
| 156 | fn | resolveInteractionCallbackUrl | pub |
| 173 | fn | deriveInteractionSecret | (private) |
| 177 | fn | setInteractionSecret | pub |
| 186 | fn | getInteractionSecret | (private) |
| 206 | fn | canonicalizeInteractionContext | (private) |
| 220 | fn | generateInteractionToken | (private) |
| 226 | fn | verifyInteractionToken | (private) |
| 237 | type | MattermostButton | (private) |
| 248 | type | MattermostAttachment | (private) |
| 267 | fn | sanitizeActionId | (private) |
| 271 | fn | buildButtonAttachments | pub |
| 312 | fn | buildButtonProps | pub |
| 354 | fn | readInteractionBody | (private) |
| 363 | fn | createMattermostInteractionHandler | pub |
| 402 | fn | parseInteractionPayload | (private) |

## extensions/mattermost/src/mattermost/monitor-ingress.test.ts (524 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | MattermostIngressQueue | (private) |
| 19 | type | MattermostIngressPayload | (private) |
| 20 | type | MattermostIngressDispatch | (private) |
| 22 | fn | postedEvent | (private) |
| 41 | fn | startMonitor | (private) |
| 56 | fn | createQueue | (private) |
| 64 | fn | withStateDir | (private) |
| 75 | fn | withQueue | (private) |
| 79 | fn | createDeferred | (private) |
| 80 | fn | resolvePromise | (private) |
| 87 | fn | testLifecycle | (private) |
| 354 | fn | releasePrune | (private) |

## extensions/mattermost/src/mattermost/monitor-resources.test.ts (505 lines)

_No symbols extracted._

## extensions/mattermost/src/mattermost/monitor-websocket.test.ts (765 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | countMatching | (private) |
| 25 | class | FakeWebSocket | (private) |
| 118 | fn | startStalledWebSocketHandshakeServer | (private) |

## extensions/mattermost/src/mattermost/monitor.inbound-system-event.test.ts (1717 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | class | FakeWebSocket | (private) |
| 216 | fn | createRuntimeCore | (private) |
| 242 | type | ReplyDispatcherOptions | (private) |
| 254 | type | RecordInboundSessionInput | (private) |
| 459 | fn | emitMattermostChannelPost | (private) |
| 1058 | fn | isBareAbort | (private) |

## extensions/mattermost/src/mattermost/monitor.test.ts (927 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | resolveMattermostEffectiveReplyToId | (private) |
| 35 | fn | createMattermostClientMock | (private) |
| 47 | fn | createDraftStreamMock | (private) |
| 98 | fn | mockCall | (private) |
| 219 | type | MattermostConfig | (private) |
| 221 | fn | resolveToolProgressEnabled | (private) |
| 266 | type | MattermostConfig | (private) |
| 268 | fn | resolveSuppressDefaultProgress | (private) |

## extensions/mattermost/src/mattermost/monitor.ts (2107 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 134 | type | MonitorMattermostOpts | (private) |
| 145 | type | MediaKind | (private) |
| 147 | type | MattermostReaction | (private) |
| 153 | fn | normalizeInteractionSourceIps | (private) |
| 157 | fn | resolveRuntime | (private) |
| 169 | fn | isSystemPost | (private) |
| 173 | fn | channelChatType | (private) |
| 183 | fn | createDisabledMattermostDraftStream | (private) |
| 184 | fn | noopAsync | (private) |
| 200 | fn | buildMattermostWsUrl | (private) |
| 209 | fn | monitorMattermostProvider | pub |
| 542 | fn | logVerboseMessage | (private) |
| 748 | fn | handleModelPickerInteraction | (private) |
| 960 | fn | handlePost | (private) |
| 1145 | fn | recordPendingHistory | (private) |
| 1440 | fn | enterBlockPreviewActivity | (private) |
| 1479 | fn | resolveFinalDeliveryText | (private) |
| 1487 | fn | resolvePreviewFinalText | (private) |
| 1514 | fn | updateDraftFromPartial | (private) |
| 1569 | fn | markThreadParticipation | (private) |
| 1842 | fn | handleReactionEvent | (private) |
| 2058 | fn | runAbortCleanup | (private) |

## extensions/mattermost/src/mattermost/reactions.test.ts (502 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | addReactionWithFetch | (private) |
| 32 | fn | removeReactionWithFetch | (private) |

## extensions/mattermost/src/mattermost/send.test.ts (830 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | SendMessageMattermostOptions | (private) |
| 36 | type | MattermostPostParams | (private) |
| 46 | type | MattermostUploadParams | (private) |
| 52 | type | MattermostDirectRetryOptions | (private) |
| 60 | fn | mockCall | (private) |
| 69 | fn | uploadMattermostFileCall | (private) |
| 76 | fn | createMattermostPostParams | (private) |
| 86 | fn | createMattermostPostCall | (private) |
| 93 | fn | directChannelRetryCall | (private) |
| 529 | fn | makeAccount | (private) |
| 772 | fn | send | (private) |

## extensions/mattermost/src/mattermost/slash-commands.ts (620 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | truncateMattermostCommandDescription | (private) |
| 29 | type | MattermostSlashCommandConfig | pub |
| 43 | type | MattermostCommandSpec | pub |
| 52 | type | MattermostRegisteredCommand | pub |
| 66 | type | MattermostSlashCommandPayload | pub |
| 83 | type | MattermostSlashCommandResponse | pub |
| 94 | type | MattermostCommandCreate | (private) |
| 107 | type | MattermostCommandUpdate | (private) |
| 119 | type | MattermostCommandResponse | pub |
| 210 | fn | listMattermostCommands | pub |
| 224 | fn | getMattermostCommand | pub |
| 238 | fn | createMattermostCommand | (private) |
| 251 | fn | deleteMattermostCommand | (private) |
| 260 | fn | updateMattermostCommand | (private) |
| 278 | fn | registerSlashCommands | pub |
| 433 | fn | cleanupSlashCommands | pub |
| 457 | fn | parseSlashCommandPayload | pub |
| 529 | fn | resolveCommandText | pub |
| 541 | fn | normalizeSlashCommandTrigger | pub |
| 553 | fn | normalizeCallbackPath | (private) |
| 561 | fn | resolveSlashCommandConfig | pub |
| 572 | fn | isSlashCommandsEnabled | pub |
| 586 | fn | resolveCallbackUrl | pub |

## extensions/mattermost/src/mattermost/slash-http.test.ts (1019 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | createRequest | (private) |
| 55 | fn | createResponse | (private) |
| 92 | fn | createRegisteredCommand | (private) |
| 108 | fn | createCommandLookupClient | (private) |
| 145 | fn | runSlashRequest | (private) |
| 162 | fn | validateMattermostSlashCommandToken | (private) |
| 194 | fn | firstLogMessage | (private) |

## extensions/mattermost/src/mattermost/slash-http.ts (934 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | type | SlashHttpHandlerParams | (private) |
| 86 | type | CommandLookupInflightEntry | (private) |
| 90 | type | CommandValidationRateLimitEntry | (private) |
| 111 | fn | readBody | (private) |
| 122 | fn | sendJsonResponse | (private) |
| 132 | fn | findRegisteredCommandForPayload | (private) |
| 142 | fn | isDeletedMattermostCommand | (private) |
| 146 | fn | sanitizeCommandLookupError | (private) |
| 175 | fn | sanitizeMattermostLogValue | (private) |
| 179 | fn | withCommandLookupTimeout | (private) |
| 189 | fn | commandLookupKey | (private) |
| 197 | fn | clearMattermostSlashCommandValidationCacheForAccount | pub |
| 215 | fn | sweepCommandValidationFailureCache | (private) |
| 236 | fn | hasCachedCommandValidationFailure | (private) |
| 254 | fn | cacheCommandValidationFailure | (private) |
| 270 | fn | sweepCommandValidationLookupRateLimit | (private) |
| 292 | fn | reserveCommandValidationLookup | (private) |
| 331 | fn | fetchCurrentMattermostCommandUncached | (private) |
| 380 | fn | fetchCurrentMattermostCommand | (private) |
| 399 | fn | validateMattermostSlashCommandToken | (private) |
| 452 | type | SlashInvocationAuth | (private) |
| 464 | fn | authorizeSlashInvocation | (private) |
| 581 | fn | createSlashCommandHttpHandler | pub |
| 732 | fn | handleSlashCommandAsync | (private) |
