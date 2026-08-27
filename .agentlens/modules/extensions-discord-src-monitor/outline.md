# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 36 large files in this module.

## extensions/discord/src/monitor/allow-list.ts (664 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | DiscordAllowList | pub |
| 26 | type | DiscordAllowListMatch | (private) |
| 30 | type | DiscordChannelOverrideConfig | (private) |
| 44 | type | DiscordGuildEntryResolved | pub |
| 55 | type | DiscordChannelConfigResolved | pub |
| 61 | fn | normalizeDiscordAllowList | pub |
| 94 | fn | normalizeDiscordSlug | pub |
| 101 | fn | normalizeDiscordDisplaySlug | pub |
| 111 | fn | resolveDiscordAllowListNameMatch | (private) |
| 126 | fn | allowListMatches | pub |
| 145 | fn | resolveDiscordAllowListMatch | pub |
| 166 | fn | resolveDiscordUserAllowed | (private) |
| 188 | fn | resolveDiscordRoleAllowed | (private) |
| 200 | fn | resolveDiscordMemberAllowed | pub |
| 232 | fn | resolveDiscordMemberAccessState | pub |
| 256 | fn | resolveDiscordOwnerAllowFrom | pub |
| 285 | fn | resolveDiscordOwnerAccess | pub |
| 314 | fn | resolveDiscordCommandOwnerAllowFrom | pub |
| 344 | fn | resolveDiscordCommandAuthorized | pub |
| 369 | fn | resolveDiscordGuildEntry | pub |
| 399 | type | DiscordChannelEntry | (private) |
| 400 | type | DiscordChannelLookup | (private) |
| 405 | type | DiscordChannelScope | (private) |
| 407 | fn | buildDiscordChannelKeys | (private) |
| 418 | fn | resolveDiscordChannelEntryMatch | (private) |
| 433 | fn | hasConfiguredDiscordChannels | (private) |
| 439 | fn | resolveDiscordChannelConfigEntry | (private) |
| 459 | fn | resolveDiscordChannelConfig | pub |
| 479 | fn | resolveDiscordChannelConfigWithFallback | pub |
| 523 | fn | resolveDiscordShouldRequireMention | pub |
| 544 | fn | isDiscordAutoThreadOwnedByBot | (private) |
| 561 | fn | isDiscordGroupAllowedByPolicy | pub |
| 580 | fn | resolveDiscordChannelPolicyCommandAuthorizer | pub |
| 600 | fn | resolveGroupDmAllow | pub |
| 620 | fn | shouldEmitDiscordReactionNotification | pub |

## extensions/discord/src/monitor/listeners.presence.test.ts (1011 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | presence | (private) |
| 49 | fn | guildSnapshot | (private) |
| 60 | fn | client | (private) |
| 64 | fn | cooldownStore | (private) |
| 892 | fn | createListener | (private) |
| 931 | fn | createListener | (private) |
| 987 | fn | createListener | (private) |

## extensions/discord/src/monitor/listeners.reactions.ts (593 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | LoadedConfig | (private) |
| 28 | type | RuntimeEnv | (private) |
| 30 | type | DiscordReactionEvent | (private) |
| 32 | type | DiscordReactionListenerParams | (private) |
| 39 | type | DiscordReactionRoutingParams | (private) |
| 52 | type | DiscordReactionMode | (private) |
| 53 | type | DiscordReactionChannelConfig | (private) |
| 54 | type | DiscordReactionIngressAccess | (private) |
| 55 | type | DiscordFetchedReactionMessage | (private) |
| 57 | class | DiscordReactionListener | pub |
| 75 | class | DiscordReactionRemoveListener | pub |
| 93 | fn | runDiscordReactionHandler | (private) |
| 126 | type | DiscordReactionIngressAuthorizationParams | (private) |
| 148 | fn | authorizeDiscordReactionIngress | (private) |
| 222 | fn | handleDiscordThreadReactionNotification | (private) |
| 274 | fn | handleDiscordChannelReactionNotification | (private) |
| 333 | fn | hasDiscordGuildChannelOverrides | (private) |
| 339 | fn | shouldSkipGuildReactionBeforeChannelFetch | (private) |
| 369 | fn | handleDiscordReactionEvent | (private) |
| 467 | fn | resolveReactionBase | (private) |
| 488 | fn | emitReaction | (private) |
| 507 | fn | shouldNotifyReaction | (private) |
| 524 | fn | emitReactionWithAuthor | (private) |
| 530 | fn | resolveThreadChannelConfig | (private) |
| 541 | fn | authorizeReactionIngressForChannel | (private) |
| 548 | fn | resolveThreadChannelAccess | (private) |

## extensions/discord/src/monitor/listeners.ts (515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | Logger | (private) |
| 41 | type | DiscordRawMessageEvent | (private) |
| 42 | type | DiscordMessageEvent | pub |
| 43 | type | DiscordInteractionEvent | (private) |
| 45 | type | DiscordMessageHandler | pub |
| 51 | fn | registerDiscordListener | pub |
| 59 | class | DiscordMessageListener | pub |
| 81 | class | DiscordInteractionListener | pub |
| 102 | type | PresenceUpdateEvent | (private) |
| 103 | type | GuildCreateEvent | (private) |
| 104 | type | GuildDeleteEvent | (private) |
| 105 | type | GuildPresenceState | (private) |
| 107 | class | DiscordPresenceListener | pub |
| 442 | class | DiscordPresenceGuildCreateListener | pub |
| 452 | class | DiscordPresenceGuildDeleteListener | pub |
| 462 | class | DiscordPresenceReadyListener | pub |
| 472 | type | ThreadUpdateEvent | (private) |
| 474 | class | DiscordThreadUpdateListener | pub |

## extensions/discord/src/monitor/message-handler.preflight.test.ts (2422 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 76 | fn | createThreadBinding | (private) |
| 101 | fn | createPreflightArgs | (private) |
| 110 | type | DiscordPreflightResult | (private) |
| 112 | fn | expectPreflightResult | (private) |
| 121 | type | MockWithCalls | (private) |
| 123 | fn | firstMockArg | (private) |
| 131 | fn | createThreadClient | (private) |
| 155 | fn | createDmClient | (private) |
| 169 | fn | createMissingChannelClient | (private) |
| 175 | fn | runThreadBoundPreflight | (private) |
| 216 | fn | runGuildPreflight | (private) |
| 244 | fn | runDmPreflight | (private) |
| 263 | fn | runUnresolvedDmPreflight | (private) |
| 283 | fn | runMentionOnlyBotPreflight | (private) |
| 298 | fn | runIgnoreOtherMentionsPreflight | (private) |
| 774 | fn | runBotMessage | (private) |

## extensions/discord/src/monitor/message-handler.preflight.ts (878 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 93 | fn | resolveDiscordPreflightConversationKind | (private) |
| 104 | fn | isDiscordImageAttachmentCandidate | (private) |
| 119 | fn | resolveDiscordHistoryMediaForPendingRecord | (private) |
| 133 | fn | rawData | (private) |
| 170 | fn | recordDiscordPendingHistoryEntry | (private) |
| 215 | fn | preflightDiscordMessage | pub |

## extensions/discord/src/monitor/message-handler.process.ack.test.ts (582 lines)

_No symbols extracted._

## extensions/discord/src/monitor/message-handler.process.draft-final.test.ts (592 lines)

_No symbols extracted._

## extensions/discord/src/monitor/message-handler.process.draft-progress.test.ts (589 lines)

_No symbols extracted._

## extensions/discord/src/monitor/message-handler.process.draft-reasoning.test.ts (628 lines)

_No symbols extracted._

## extensions/discord/src/monitor/message-handler.process.draft-recovery.test.ts (597 lines)

_No symbols extracted._

## extensions/discord/src/monitor/message-handler.process.test-harness.ts (673 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | createMockDraftStream | pub |
| 62 | fn | createNonTerminalToolWarningPayload | pub |
| 128 | type | DispatchInboundParams | pub |
| 286 | fn | deliver | (private) |
| 301 | fn | queueDelivery | (private) |
| 354 | fn | queueDelivery | (private) |
| 388 | fn | runDispatch | (private) |
| 485 | fn | createBaseContext | pub |
| 491 | fn | createAutomaticSourceDeliveryContext | pub |
| 515 | fn | createDirectMessageContextOverrides | pub |
| 521 | fn | mockDispatchSingleBlockReply | pub |
| 528 | fn | createNoQueuedDispatchResult | pub |
| 532 | fn | processStreamOffDiscordMessage | pub |
| 537 | fn | registerDiscordProcessTestLifecycle | pub |
| 580 | fn | getLastRouteUpdate | pub |
| 606 | fn | getLastDispatchCtx | pub |
| 656 | fn | getLastDispatchReplyOptions | pub |
| 664 | fn | runProcessDiscordMessage | pub |
| 668 | fn | runInPartialStreamMode | pub |

## extensions/discord/src/monitor/message-handler.process.ts (708 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | fn | isProcessAborted | (private) |
| 54 | fn | isFallbackOnlyToolWarningFinal | (private) |
| 63 | type | DiscordMessageProcessObserver | (private) |
| 69 | fn | processDiscordMessage | pub |
| 76 | fn | processDiscordMessageInner | (private) |
| 189 | fn | notifyFinalReplyStart | (private) |
| 202 | fn | markUserFacingFinalDelivered | (private) |
| 225 | fn | resetDeliveryState | (private) |
| 242 | fn | onDiscordReplyStart | (private) |
| 280 | fn | deliverDiscordPayload | (private) |
| 563 | fn | onDiscordDeliveryError | (private) |
| 585 | fn | deliverPendingToolWarningFinalIfNeeded | (private) |

## extensions/discord/src/monitor/message-handler.queue.test.ts (659 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | SetStatusFn | (private) |
| 18 | type | MockCallSource | (private) |
| 19 | fn | mockCalls | (private) |
| 23 | fn | statusPatches | (private) |
| 27 | fn | expectStatusPatch | (private) |
| 35 | fn | createDeferred | (private) |
| 43 | fn | createIngressLifecycle | (private) |
| 56 | fn | flushQueueWork | (private) |
| 62 | fn | createMessageData | (private) |
| 76 | fn | createTextMessageData | (private) |
| 82 | fn | createPreflightContext | (private) |
| 122 | fn | createHandlerWithDefaultPreflight | (private) |
| 129 | fn | installDefaultDiscordPreflight | (private) |
| 135 | fn | createLifecycleStopScenario | (private) |
| 612 | fn | sequentialDispatch | (private) |

## extensions/discord/src/monitor/message-media.ts (589 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | type | DiscordMediaInfo | pub |
| 56 | type | DiscordMediaResolveOptions | (private) |
| 64 | type | DiscordStickerAssetCandidate | (private) |
| 69 | fn | isDiscordAudioAttachmentFileName | (private) |
| 74 | fn | hasDiscordVoiceAttachmentFields | (private) |
| 85 | fn | isDefinitiveMediaType | (private) |
| 90 | fn | resolveEffectiveMediaType | (private) |
| 103 | fn | resolveDiscordMediaClassification | (private) |
| 128 | fn | mergeHostnameList | (private) |
| 139 | fn | resolveDiscordMediaSsrFPolicy | (private) |
| 162 | fn | resolveMediaList | pub |
| 194 | fn | resolveForwardedMediaList | pub |
| 258 | fn | resolveReferencedReplyMediaList | pub |
| 294 | fn | fetchDiscordMedia | (private) |
| 349 | fn | appendResolvedMediaFromAttachments | (private) |
| 407 | fn | resolveStickerAssetCandidates | (private) |
| 432 | fn | formatStickerError | (private) |
| 446 | fn | inferStickerContentType | (private) |
| 459 | fn | appendResolvedMediaFromStickers | (private) |
| 516 | fn | inferPlaceholder | (private) |
| 533 | fn | isImageAttachment | (private) |
| 545 | fn | buildDiscordAttachmentPlaceholder | (private) |
| 557 | fn | buildDiscordStickerPlaceholder | (private) |
| 566 | fn | buildDiscordMediaPlaceholder | pub |
| 578 | fn | buildDiscordMediaPayload | pub |

## extensions/discord/src/monitor/message-utils.test.ts (1490 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | fn | asMessage | (private) |
| 83 | fn | requireRecord | (private) |
| 90 | fn | requireArray | (private) |
| 95 | fn | callArg | (private) |
| 104 | fn | fetchParams | (private) |
| 111 | fn | expectDiscordCdnSsrFPolicy | (private) |
| 120 | fn | expectSinglePngDownload | (private) |
| 149 | fn | expectAttachmentImageFallback | (private) |
| 160 | fn | asForwardedSnapshotMessage | (private) |
| 185 | fn | asReferencedForwardMessage | (private) |

## extensions/discord/src/monitor/model-picker.state.ts (636 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | compareBucketItems | (private) |
| 42 | type | DiscordModelPickerCommandContext | pub |
| 43 | type | DiscordModelPickerAction | (private) |
| 44 | type | DiscordModelPickerView | (private) |
| 45 | type | DiscordModelPickerLayout | pub |
| 47 | type | DiscordModelPickerState | pub |
| 81 | fn | createDiscordModelPickerModelToken | pub |
| 88 | type | DiscordModelPickerBucket | pub |
| 99 | type | DiscordModelPickerProviderItem | pub |
| 114 | type | DiscordModelPickerModelPage | pub |
| 122 | fn | isValidCommandContext | (private) |
| 126 | fn | isValidPickerAction | (private) |
| 130 | fn | isValidPickerView | (private) |
| 134 | fn | normalizeModelPickerPage | pub |
| 142 | fn | parseRawPage | (private) |
| 155 | fn | parseRawPositiveInt | (private) |
| 159 | fn | coerceString | (private) |
| 163 | fn | clampPageSize | (private) |
| 170 | fn | paginateItems | (private) |
| 192 | fn | loadDiscordModelPickerData | pub |
| 200 | fn | buildDiscordModelPickerCustomId | pub |
| 294 | fn | parseDiscordModelPickerData | pub |
| 358 | fn | computeAlphaBuckets | (private) |
| 420 | fn | computeBucketTargetSize | (private) |
| 426 | fn | chunkBucketsByCount | (private) |
| 447 | fn | resolveBucket | (private) |
| 471 | fn | findProviderBucketId | pub |
| 478 | fn | findProviderBucketLocation | pub |
| 506 | fn | findModelBucketId | pub |
| 525 | fn | buildDiscordModelPickerProviderItems | (private) |
| 536 | fn | getDiscordModelPickerProviderPage | pub |
| 563 | fn | getDiscordModelPickerModelPage | pub |
| 605 | fn | resolveDiscordModelPickerPageForModel | pub |

## extensions/discord/src/monitor/model-picker.test.ts (1412 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | parseDiscordModelPickerCustomId | (private) |
| 43 | type | SerializedComponent | (private) |
| 55 | fn | extractContainerRows | (private) |
| 67 | fn | renderModelsViewRows | (private) |
| 77 | fn | renderRecentsViewRows | (private) |
| 87 | fn | requireValue | (private) |

## extensions/discord/src/monitor/model-picker.view.ts (1015 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | DiscordModelPickerButtonOptions | (private) |
| 43 | type | DiscordModelPickerCurrentModelRef | (private) |
| 48 | type | DiscordModelPickerRow | (private) |
| 49 | type | CompactRuntimeState | (private) |
| 54 | type | DiscordModelPickerRenderShellParams | (private) |
| 66 | type | DiscordModelPickerRenderedView | (private) |
| 72 | type | DiscordModelPickerProviderViewParams | (private) |
| 82 | type | DiscordModelPickerModelViewParams | (private) |
| 100 | fn | parseCurrentModelRef | (private) |
| 120 | fn | formatCurrentModelLine | (private) |
| 128 | fn | createModelPickerButton | (private) |
| 129 | class | DiscordModelPickerButton | (private) |
| 138 | fn | createModelSelect | (private) |
| 144 | class | DiscordModelPickerSelect | (private) |
| 163 | fn | buildBucketSelectRow | (private) |
| 213 | fn | getRuntimeChoices | (private) |
| 230 | fn | resolveSelectedRuntime | (private) |
| 249 | fn | resolveExplicitRuntimeState | (private) |
| 266 | fn | getActiveBucketId | (private) |
| 272 | fn | resolveCompactRuntimeState | (private) |
| 287 | fn | buildRenderedShell | (private) |
| 326 | fn | buildProviderSelectRow | (private) |
| 359 | fn | buildPaginationRow | (private) |
| 428 | fn | buildModelRows | (private) |
| 704 | fn | renderDiscordModelPickerProvidersView | pub |
| 772 | fn | renderDiscordModelPickerModelsView | pub |
| 880 | type | DiscordModelPickerRecentsViewParams | (private) |
| 895 | fn | formatRecentsButtonLabel | (private) |
| 907 | fn | createModelRefToken | (private) |
| 912 | fn | renderDiscordModelPickerRecentsView | pub |
| 1002 | fn | toDiscordModelPickerMessagePayload | pub |

## extensions/discord/src/monitor/monitor.test.ts (1026 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | CreateDiscordComponentButton | (private) |
| 28 | type | CreateDiscordComponentModal | (private) |
| 30 | type | CreateDiscordComponentStringSelect | (private) |
| 31 | type | DispatchReplyWithBufferedBlockDispatcherFn | (private) |
| 33 | type | DispatchReplyWithBufferedBlockDispatcherResult | (private) |
| 47 | fn | requireComponentFactory | (private) |
| 57 | type | MockWithCalls | (private) |
| 59 | fn | mockCall | (private) |
| 68 | fn | mockCallArg | (private) |
| 72 | fn | getLastRecordedCtx | (private) |
| 79 | fn | getLastPluginDispatchCtx | (private) |
| 88 | fn | requireRecord | (private) |
| 95 | fn | firstMockCall | (private) |
| 99 | fn | firstMockArg | (private) |
| 103 | fn | discordTestSendResult | (private) |
| 128 | type | DispatchParams | (private) |
| 130 | type | ComponentContext | (private) |
| 132 | fn | createComponentContext | (private) |
| 143 | fn | createComponentInteractionBase | (private) |
| 161 | fn | createComponentButtonInteraction | (private) |
| 172 | fn | createComponentSelectInteraction | (private) |
| 186 | fn | createModalInteraction | (private) |
| 245 | fn | createGuildPluginButton | (private) |
| 256 | fn | createGuildPluginButtonInteraction | (private) |
| 267 | fn | expectPluginGuildInteractionAuth | (private) |
| 633 | fn | runModalSubmission | (private) |
| 650 | fn | expectBlockedGuildButton | (private) |
| 691 | fn | expectGuildModalAuth | (private) |

## extensions/discord/src/monitor/monitor.threading-utils.test.ts (620 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | resolveDiscordRoleAllowed | (private) |
| 163 | type | GatewayPlugin | (private) |
| 165 | fn | fakeGateway | (private) |
| 457 | fn | createAutoThreadParams | (private) |
| 508 | fn | createAutoThreadPlanParams | (private) |

## extensions/discord/src/monitor/native-command-model-picker-interaction.ts (783 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | fn | resolveModelPickerSelectionValue | (private) |
| 67 | fn | resolveModelPickerRuntimeByIndex | (private) |
| 79 | fn | resolveModelPickerProvider | (private) |
| 91 | fn | resolveSelectedBucket | (private) |
| 98 | fn | resolvePendingRuntime | (private) |
| 113 | fn | resolveParsedRuntimeForSubmission | (private) |
| 134 | fn | resolveSubmittedModelRef | (private) |
| 177 | fn | buildDiscordModelPickerSelectionCommand | (private) |
| 199 | fn | listDiscordModelPickerProviderModels | (private) |
| 210 | fn | resolveDiscordModelPickerModelRefByToken | (private) |
| 225 | fn | resolveDiscordModelPickerModelIndex | (private) |
| 241 | fn | resolveDiscordModelPickerModelSelection | (private) |
| 264 | fn | resolveDiscordModelPickerRuntimeForProvider | (private) |
| 284 | fn | resolveDiscordModelPickerSubmissionRuntime | (private) |
| 305 | fn | handleDiscordModelPickerInteraction | (private) |
| 370 | fn | updatePicker | (private) |
| 374 | fn | showNotice | (private) |
| 731 | type | DiscordModelPickerFallbackParams | (private) |
| 737 | fn | runDiscordModelPickerFallback | (private) |
| 746 | class | DiscordModelPickerFallbackButton | (private) |
| 759 | class | DiscordModelPickerFallbackSelect | (private) |
| 772 | fn | createDiscordModelPickerFallbackButton | pub |
| 778 | fn | createDiscordModelPickerFallbackSelect | pub |

## extensions/discord/src/monitor/native-command.commands-allowfrom.test.ts (535 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | createInteraction | (private) |
| 33 | fn | createConfig | (private) |
| 58 | fn | createCommand | (private) |
| 75 | fn | createDispatchSpy | (private) |
| 87 | fn | firstDispatchReplyCall | (private) |
| 97 | fn | runGuildSlashCommand | (private) |
| 114 | fn | expectNotUnauthorizedReply | (private) |
| 126 | fn | expectUnauthorizedReply | (private) |

## extensions/discord/src/monitor/native-command.model-picker.test.ts (1241 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | ModelPickerContext | (private) |
| 39 | type | PickerButton | (private) |
| 40 | type | PickerSelect | (private) |
| 41 | type | PickerButtonInteraction | (private) |
| 42 | type | PickerButtonData | (private) |
| 43 | type | PickerSelectInteraction | (private) |
| 44 | type | PickerSelectData | (private) |
| 46 | type | MockInteraction | (private) |
| 63 | fn | createModelsProviderData | (private) |
| 67 | fn | createModelPickerContext | (private) |
| 92 | fn | createInteraction | (private) |
| 125 | fn | createDefaultModelPickerData | (private) |
| 132 | fn | createModelCommandDefinition | (private) |
| 144 | fn | mockModelCommandPipeline | (private) |
| 152 | fn | createModelsViewSelectData | (private) |
| 163 | fn | createModelsViewSubmitData | (private) |
| 175 | fn | safeInteractionCall | (private) |
| 179 | fn | createDispatchSpy | (private) |
| 183 | type | MockWithCalls | (private) |
| 185 | fn | firstMockArg | (private) |
| 193 | fn | createModelPickerFallbackButton | (private) |
| 204 | fn | createModelPickerFallbackSelect | (private) |
| 215 | fn | runSubmitButton | (private) |
| 227 | fn | runModelSelect | (private) |
| 246 | fn | expectDispatchedModelSelection | (private) |
| 262 | fn | createBoundThreadBindingManager | (private) |

## extensions/discord/src/monitor/native-command.options.test.ts (725 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | fn | createNativeCommand | (private) |
| 87 | type | CommandOption | (private) |
| 91 | fn | findOption | (private) |
| 98 | fn | requireOption | (private) |
| 109 | fn | readAutocomplete | (private) |
| 116 | fn | readChoices | (private) |
| 124 | fn | requireAutocomplete | (private) |
| 132 | fn | createAllowedGuildAutocompleteConfig | (private) |
| 155 | fn | runAutocomplete | (private) |
| 195 | fn | resolveAutocompleteAuthorized | (private) |

## extensions/discord/src/monitor/native-command.plugin-dispatch.test.ts (1395 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | fn | createConfig | (private) |
| 53 | fn | createConfiguredAcpBinding | (private) |
| 72 | fn | createConfiguredAcpCase | (private) |
| 128 | fn | createNativeCommand | (private) |
| 140 | fn | createConfiguredRouteState | (private) |
| 173 | fn | createUnboundRouteState | (private) |
| 206 | type | MockCalls | (private) |
| 210 | fn | isRecord | (private) |
| 214 | fn | requireRecord | (private) |
| 222 | fn | expectFields | (private) |
| 228 | fn | firstMockCall | (private) |
| 236 | fn | firstMockArg | (private) |
| 240 | fn | expectSingleCallFirstArg | (private) |
| 251 | fn | expectPluginCommandExecution | (private) |
| 261 | fn | expectFollowUpFields | (private) |
| 272 | fn | expectNoFollowUpContent | (private) |
| 278 | fn | createPluginCommand | (private) |
| 294 | fn | registerPairPlugin | (private) |
| 314 | fn | registerScopedPairPlugin | (private) |
| 330 | fn | expectPairCommandReply | (private) |
| 364 | fn | createStatusCommand | (private) |
| 372 | fn | createDispatchSpy | (private) |
| 382 | fn | expectBoundStatusCommandDirectReply | (private) |

## extensions/discord/src/monitor/native-command.ts (745 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 89 | fn | createDiscordNativeCommand | pub |
| 116 | fn | resolveCurrentConfig | (private) |
| 202 | fn | dispatchDiscordCommandInteraction | (private) |
| 232 | fn | respond | (private) |
| 322 | fn | getNativeRouteState | (private) |
| 336 | fn | canBypassConfiguredAcpGuildGuards | (private) |
| 720 | fn | createDiscordCommandArgFallbackButton | pub |
| 728 | fn | createDiscordModelPickerFallbackButton | pub |
| 736 | fn | createDiscordModelPickerFallbackSelect | pub |

## extensions/discord/src/monitor/provider.lifecycle.test.ts (720 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | LifecycleParams | (private) |
| 16 | type | WaitForDiscordGatewayStopParams | (private) |
| 17 | type | MockGateway | (private) |
| 78 | fn | createGatewayHarness | (private) |
| 95 | fn | createGatewayEvent | (private) |
| 108 | fn | createLifecycleHarness | (private) |
| 170 | fn | expectLifecycleCleanup | (private) |
| 183 | fn | mockMessages | (private) |
| 187 | fn | expectMockMessageContains | (private) |
| 191 | fn | expectMockMessageNotContains | (private) |
| 195 | type | StatusPatch | (private) |
| 201 | fn | statusPatches | (private) |
| 205 | fn | expectStatusPatch | (private) |

## extensions/discord/src/monitor/provider.lifecycle.ts (579 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | GatewayReadyWaitResult | (private) |
| 38 | fn | normalizeGatewayReadyTimeoutMs | (private) |
| 46 | fn | resolveDiscordGatewayReadyTimeoutMs | (private) |
| 53 | fn | resolveDiscordGatewayRuntimeReadyTimeoutMs | (private) |
| 60 | fn | restartGatewayAfterReadyTimeout | (private) |
| 82 | fn | ignoreSocketError | (private) |
| 83 | fn | clearTimers | (private) |
| 93 | fn | cleanup | (private) |
| 98 | fn | finishResolve | (private) |
| 106 | fn | finishReject | (private) |
| 118 | fn | onClose | (private) |
| 170 | fn | parseGatewayCloseCode | (private) |
| 179 | fn | resolveTransportActivityAt | (private) |
| 185 | fn | createGatewayStatusObserver | (private) |
| 198 | fn | shouldStop | (private) |
| 199 | fn | clearReadyWatch | (private) |
| 209 | fn | triggerForceStop | (private) |
| 216 | fn | pushConnectedStatus | (private) |
| 223 | fn | startReadyWatch | (private) |
| 225 | fn | pollConnected | (private) |
| 266 | fn | onGatewayDebug | (private) |
| 319 | fn | waitForGatewayReady | (private) |
| 405 | fn | runDiscordGatewayLifecycle | pub |
| 429 | fn | pushStatus | (private) |
| 448 | fn | onGatewayTransportActivity | (private) |

## extensions/discord/src/monitor/provider.proxy.test.ts (916 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | fn | createGatewayInfoBody | (private) |
| 21 | fn | resolveGatewayInfoFetch | (private) |
| 83 | class | GatewayPluginLocal | (private) |
| 101 | class | HttpsAgentLocal | (private) |
| 111 | class | HttpsProxyAgentLocal | (private) |
| 199 | fn | createRuntime | (private) |
| 209 | type | MockWithCalls | (private) |
| 211 | fn | firstMockCall | (private) |
| 219 | fn | firstMockArg | (private) |
| 223 | fn | firstGuardedFetchCall | (private) |
| 235 | fn | createProxyTestingOverrides | (private) |
| 255 | fn | registerGatewayClient | (private) |
| 271 | fn | startIgnoredGatewayRegistration | (private) |
| 287 | fn | expectGatewayRegisterFetchFailure | (private) |
| 301 | fn | expectGatewayRegisterFallback | (private) |
| 321 | fn | registerGatewayClientWithMetadata | (private) |
| 387 | fn | createWebSocket | (private) |
| 412 | fn | createWebSocket | (private) |
| 442 | fn | onUnhandledRejection | (private) |
| 510 | fn | createWebSocket | (private) |
| 533 | fn | createWebSocket | (private) |
| 556 | fn | createWebSocket | (private) |
| 578 | fn | createWebSocket | (private) |
| 600 | fn | createWebSocket | (private) |
| 675 | fn | createWebSocket | (private) |
| 693 | fn | createWebSocket | (private) |
| 813 | fn | registerPromise | (private) |
| 830 | fn | runCase | (private) |
| 850 | fn | registerPromise | (private) |

## extensions/discord/src/monitor/provider.test.ts (1227 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | fn | createAcpRuntimeError | (private) |
| 57 | fn | createTestChannelRuntime | (private) |
| 59 | fn | keyFor | (private) |
| 82 | fn | createRateLimitError | (private) |
| 100 | fn | createConfigWithDiscordAccount | (private) |
| 115 | type | MockCallReader | (private) |
| 117 | fn | firstMockArg | (private) |
| 125 | fn | mockMessages | (private) |
| 132 | fn | expectMockLogContains | (private) |
| 136 | fn | expectMockLogNotContains | (private) |
| 140 | fn | expectMessagesContainAll | (private) |
| 160 | type | ReconcileHealthProbeParams | (private) |
| 168 | type | ReconcileStartupParams | (private) |
| 198 | fn | getHealthProbe | (private) |

## extensions/discord/src/monitor/provider.ts (522 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | MonitorDiscordOpts | pub |
| 63 | type | DiscordVoiceManager | (private) |
| 65 | fn | logDiscordStartupPhase | (private) |
| 76 | fn | isDiscordDisallowedIntentsError | (private) |
| 84 | fn | monitorDiscordProvider | pub |

## extensions/discord/src/monitor/reply-delivery.test.ts (616 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | DeliverParams | (private) |
| 44 | fn | firstDeliverParams | (private) |
| 53 | fn | recordField | (private) |
| 60 | fn | firstMockCall | (private) |
| 68 | fn | firstMockArg | (private) |
| 72 | fn | objectArgAt | (private) |

## extensions/discord/src/monitor/thread-bindings.lifecycle.test.ts (1915 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | DiscordRuntime | (private) |
| 84 | fn | createTestThreadBindingManager | (private) |
| 95 | fn | requireRecord | (private) |
| 102 | fn | expectFields | (private) |
| 114 | fn | expectThreadCreateOptionsWithoutArchiveOverride | (private) |
| 120 | fn | mockCallArg | (private) |
| 267 | fn | createDefaultSweeperManager | (private) |
| 276 | fn | bindDefaultThreadTarget | (private) |
| 290 | fn | requireBinding | (private) |

## extensions/discord/src/monitor/thread-bindings.manager.ts (556 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 63 | fn | registerManager | (private) |
| 67 | fn | unregisterManager | (private) |
| 76 | fn | createNoopManager | (private) |
| 94 | fn | isDirectConversationBindingId | (private) |
| 99 | fn | createThreadBindingManager | pub |
| 128 | fn | resolveCurrentCfg | (private) |
| 129 | fn | resolveCurrentToken | (private) |
| 132 | fn | runSweepOnce | (private) |
| 537 | fn | createNoopThreadBindingManager | pub |
| 541 | fn | getThreadBindingManager | pub |

## extensions/discord/src/monitor/thread-bindings.state.ts (507 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | ThreadBindingsGlobalState | (private) |
| 36 | fn | createThreadBindingsGlobalState | (private) |
| 54 | fn | resolveThreadBindingsGlobalState | (private) |
| 78 | fn | rememberThreadBindingToken | pub |
| 87 | fn | forgetThreadBindingToken | pub |
| 91 | fn | getThreadBindingToken | pub |
| 95 | fn | shouldDefaultPersist | pub |
| 99 | fn | openThreadBindingsStore | (private) |
| 106 | fn | normalizeTargetKind | pub |
| 116 | fn | normalizeThreadId | pub |
| 120 | fn | toBindingRecordKey | pub |
| 124 | fn | resolveBindingRecordKey | pub |
| 138 | fn | normalizePersistedBinding | pub |
| 211 | fn | normalizeThreadBindingDurationMs | pub |
| 222 | fn | resolveThreadBindingIdleTimeoutMs | pub |
| 233 | fn | resolveThreadBindingMaxAgeMs | pub |
| 244 | fn | resolveThreadBindingInactivityExpiresAt | pub |
| 262 | fn | resolveThreadBindingMaxAgeExpiresAt | pub |
| 280 | fn | linkSessionBinding | (private) |
| 290 | fn | unlinkSessionBinding | (private) |
| 305 | fn | toReusableWebhookKey | pub |
| 309 | fn | rememberReusableWebhook | pub |
| 322 | fn | refreshUnboundThreadWebhookIdentity | pub |
| 337 | fn | setBindingRecord | pub |
| 351 | fn | removeBindingRecord | pub |
| 365 | fn | shouldPersistAnyBindingState | (private) |
| 374 | fn | shouldPersistBindingMutations | pub |
| 384 | fn | toPersistedBindingRecord | (private) |
| 392 | fn | saveBindingsToDisk | pub |
| 431 | fn | ensureBindingsLoaded | pub |
| 441 | fn | entries | (private) |
| 463 | fn | resolveBindingIdsForSession | pub |
| 493 | fn | resetThreadBindingsForTests | pub |
