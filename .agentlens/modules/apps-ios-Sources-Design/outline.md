# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 16 large files in this module.

## apps/ios/Sources/Design/AgentAutomationDetailScreen.swift (1108 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | enum | AgentAutomationDetailSection | (private) |
| 21 | struct | AgentAutomationNotice | (private) |
| 41 | struct | AgentAutomationDetailScreen | (internal) |
| 195 | fn | summaryMetric | (private) |
| 242 | fn | identityCard | (private) |
| 256 | fn | scheduleCard | (private) |
| 277 | fn | scheduleFields | (private) |
| 322 | fn | actionCard | (private) |
| 331 | fn | payloadFields | (private) |
| 367 | fn | executionCard | (private) |
| 385 | fn | managementCard | (private) |
| 469 | fn | cardSection | (private) |
| 491 | fn | labeledField | (private) |
| 514 | fn | actionButton | (private) |
| 543 | fn | messageCard | (private) |
| 559 | fn | noticeCard | (private) |
| 583 | fn | stateMilliseconds | (private) |
| 587 | fn | scheduleBinding | (private) |
| 600 | fn | payloadBinding | (private) |
| 613 | fn | reload | (private) |
| 653 | fn | loadHistory | (private) |
| 665 | fn | loadHistory | (private) |
| 683 | fn | save | (private) |
| 702 | fn | setEnabled | (private) |
| 727 | fn | runNow | (private) |
| 789 | fn | trackRun | (private) |
| 835 | fn | runNotice | (private) |
| 865 | fn | reloadAfterRun | (private) |
| 883 | fn | deleteAutomation | (private) |
| 897 | fn | performAction | (private) |
| 910 | fn | applyUpdatedJob | (private) |
| 919 | fn | gatewayRoute | (private) |
| 929 | fn | request | (private) |
| 947 | fn | params | (private) |
| 955 | fn | runSkipMessage | (private) |
| 966 | fn | relativeTime | (private) |
| 972 | fn | duration | (private) |
| 984 | mod | extension AgentAutomationDetailScreen | (internal) |
| 985 | fn | historyRow | (private) |
| 1028 | fn | initialLoad | (private) |
| 1040 | fn | showError | (private) |
| 1050 | mod | extension AgentAutomationScheduleDraft | (internal) |
| 1060 | fn | schedule | (internal) |
| 1082 | mod | extension AgentAutomationPayloadDraft | (internal) |
| 1090 | fn | payload | (internal) |

## apps/ios/Sources/Design/AgentProDreamingDestination.swift (771 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | struct | AgentProDreamingDestination | (internal) |
| 113 | fn | detailSummaryCard | (private) |
| 280 | fn | dreamDiaryDayMenu | (private) |
| 310 | fn | dreamDiaryDayView | (private) |
| 337 | fn | selectedDreamDiaryDay | (private) |
| 346 | fn | dreamingEntriesList | (private) |
| 376 | fn | dreamingEntryRow | (private) |
| 440 | fn | dreamingPhaseRow | (private) |
| 469 | fn | emptyDetailRow | (private) |
| 488 | fn | detailMetric | (private) |
| 505 | fn | dreamingEntryTitle | (private) |
| 510 | fn | dreamingEntryDetail | (private) |
| 528 | fn | dreamingPhaseDetail | (private) |
| 540 | fn | dreamingPhaseState | (private) |
| 547 | fn | dreamDiaryUpdatedLabel | (private) |
| 556 | fn | runDreamAction | (private) |
| 575 | fn | dreamActionSummary | (private) |
| 609 | fn | dreamingPhaseTitle | (private) |
| 618 | fn | normalized | (private) |
| 623 | fn | normalizedMultiline | (private) |
| 629 | fn | compactNumber | (private) |
| 633 | fn | relativeTime | (private) |
| 638 | fn | dreamDiaryDays | (private) |
| 652 | fn | dreamDiaryInnerContent | (private) |
| 663 | fn | dreamDiaryBlock | (private) |
| 690 | fn | mergeDiaryBlocksByDay | (private) |
| 708 | fn | splitDiaryBlocksByDateLine | (private) |
| 726 | fn | isDiaryDateLine | (private) |
| 736 | fn | dayTitle | (private) |
| 744 | fn | dayID | (private) |
| 750 | fn | unwrappedEmphasis | (private) |
| 756 | fn | backfillDay | (private) |
| 765 | struct | DreamDiaryDay | (private) |

## apps/ios/Sources/Design/AgentProModels.swift (517 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | struct | AgentOverviewRefreshGate | (internal) |
| 12 | fn | isCurrent | (internal) |
| 18 | enum | AgentProValueReader | (internal) |
| 19 | fn | intValue | (internal) |
| 27 | fn | doubleValue | (internal) |
| 38 | struct | AgentOverviewSnapshot | (internal) |
| 60 | mod | extension AgentOverviewSnapshot | (internal) |
| 128 | struct | SkillStatusReportLite | (internal) |
| 158 | struct | SkillStatusEntryLite | (internal) |
| 232 | struct | SkillInstallOptionLite | (internal) |
| 239 | struct | SkillUpdateParams | (internal) |
| 245 | struct | SkillInstallParams | (internal) |
| 251 | struct | SkillInstallResultLite | (internal) |
| 255 | struct | ClawHubSearchParams | (internal) |
| 260 | struct | ClawHubSearchResponseLite | (internal) |
| 264 | struct | ClawHubSearchResultLite | (internal) |
| 271 | struct | ClawHubInstallParams | (internal) |
| 276 | struct | SkillStatusMissingLite | (internal) |
| 290 | method | init | (internal) |
| 301 | struct | CronStatusLite | (internal) |
| 313 | struct | CronJobsListLite | (internal) |
| 327 | method | init | (internal) |
| 341 | method | init | (internal) |
| 352 | struct | CronJobsSnapshotIdentity | (internal) |
| 356 | fn | cronJobsSnapshotIdentity | (internal) |
| 364 | fn | nextCronJobsListOffset | (internal) |
| 370 | struct | DreamingStatusEnvelope | (internal) |
| 374 | struct | DreamingStatusLite | (internal) |
| 392 | struct | DreamingEntryLite | (internal) |
| 413 | struct | DreamDiaryLite | (internal) |
| 421 | struct | DreamingPhaseStatusLite | (internal) |
| 428 | struct | DreamingPhaseRow | (internal) |
| 434 | struct | ConfigSnapshotLite | (internal) |
| 437 | fn | agentConfig | (internal) |
| 441 | fn | effectiveSkillFilter | (internal) |
| 450 | struct | ConfigRootLite | (internal) |
| 454 | struct | AgentsConfigLite | (internal) |
| 459 | struct | AgentDefaultsConfigLite | (internal) |
| 463 | struct | AgentConfigLite | (internal) |
| 468 | struct | ConfigPatchParams | (internal) |
| 472 | method | init | (internal) |
| 480 | enum | SkillMutationError | (internal) |
| 497 | struct | CostUsageSummaryLite | (internal) |
| 513 | struct | CostUsageDailyEntryLite | (internal) |

## apps/ios/Sources/Design/AgentProTab+Overview.swift (771 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | mod | extension AgentProTab | (internal) |
| 278 | fn | agentRow | (internal) |
| 321 | fn | headerIconButton | (internal) |
| 336 | fn | agentAvatar | (internal) |
| 356 | fn | agentMenuRow | (internal) |
| 388 | fn | metricTile | (internal) |
| 420 | fn | metricTileContent | (internal) |
| 473 | fn | cronJobRow | (internal) |

## apps/ios/Sources/Design/AgentProTab+Skills.swift (890 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | mod | extension AgentProTab | (internal) |
| 161 | fn | clawHubResultRow | (internal) |
| 267 | fn | matchesSkillStatusFilter | (internal) |
| 282 | fn | sortSkills | (internal) |
| 289 | fn | skillRow | (internal) |
| 363 | fn | skillToggle | (internal) |
| 378 | fn | isSkillAllowed | (internal) |
| 383 | fn | isSkillConfigBusy | (internal) |
| 388 | fn | canInstallSkillRequirements | (internal) |
| 393 | fn | skillByKey | (internal) |
| 399 | fn | openSkillEditor | (internal) |
| 403 | fn | skillAPIKeyBinding | (internal) |
| 438 | fn | skillEditorSheet | (internal) |
| 467 | fn | skillEditorHeader | (internal) |
| 491 | fn | skillEditorControls | (internal) |
| 535 | fn | skillSecureField | (private) |
| 551 | fn | skillEditorToggleRow | (internal) |
| 576 | fn | skillEditorSetup | (internal) |
| 608 | fn | skillEditorMetadata | (internal) |
| 624 | fn | setSkillAllowed | (internal) |
| 638 | fn | enableAllSkills | (internal) |
| 645 | fn | disableAllSkills | (internal) |
| 650 | fn | resetSkillPolicy | (internal) |
| 662 | fn | patchAgentSkills | (internal) |
| 703 | fn | updateSkillGlobalEnabled | (internal) |
| 712 | fn | saveSkillAPIKey | (internal) |
| 725 | fn | installSkillRequirements | (internal) |
| 740 | fn | installClawHubSkill | (internal) |
| 756 | fn | searchClawHubSkills | (internal) |
| 772 | fn | runSkillConfigMutation | (internal) |
| 795 | fn | requestGateway | (internal) |
| 813 | fn | requestConfigSnapshot | (internal) |
| 824 | fn | agentSkillsPatchRaw | (internal) |
| 843 | fn | skillMutationMessage | (internal) |
| 854 | fn | skillStatus | (internal) |
| 873 | fn | localizedSkillStatus | (internal) |

## apps/ios/Sources/Design/ChatProTab.swift (917 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | struct | ChatScrollEdgeTreatment | (private) |
| 7 | fn | body | (internal) |
| 18 | struct | ChatProTab | (internal) |
| 359 | fn | handleHeaderAgentIdentityTap | (private) |
| 420 | fn | syncChatViewModel | (private) |
| 463 | fn | handleNewChatRequest | (private) |
| 470 | fn | captureCurrentPresentationIdentity | (private) |
| 477 | fn | makeChatViewModel | (private) |
| 690 | fn | exportTranscript | (private) |
| 911 | fn | normalized | (private) |

## apps/ios/Sources/Design/CommandCenterTab.swift (1395 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | struct | CommandCenterTab | (internal) |
| 138 | fn | threadTile | (private) |
| 212 | fn | dashboardActionRow | (private) |
| 239 | fn | usageTrend | (private) |
| 253 | fn | usageCostText | (private) |
| 265 | fn | visibleOverviewSessions | (internal) |
| 290 | fn | usesSplitSectionsLayout | (internal) |
| 298 | fn | shouldShowHeaderMark | (internal) |
| 383 | fn | gatewayFact | (private) |
| 479 | fn | cardHeader | (private) |
| 607 | fn | open | (private) |
| 617 | fn | open | (private) |
| 621 | fn | openDefaultChatSession | (private) |
| 625 | fn | patchSession | (private) |
| 644 | fn | deleteSession | (private) |
| 650 | fn | archiveSession | (private) |
| 662 | fn | forkSession | (private) |
| 676 | fn | performSessionMutation | (private) |
| 695 | fn | refreshRecentSessionsIfNeeded | (private) |
| 705 | fn | applyCachedSessions | (private) |
| 710 | fn | applySessions | (private) |
| 719 | fn | sessionChoices | (private) |
| 728 | fn | sessionWorkItem | (internal) |
| 747 | fn | sessionTitle | (internal) |
| 767 | fn | redactedSessionTitle | (private) |
| 786 | fn | humanizedSessionKey | (private) |
| 806 | fn | sessionDetail | (internal) |
| 814 | fn | relativeTimeText | (internal) |
| 891 | fn | normalized | (private) |
| 895 | fn | normalized | (private) |
| 903 | struct | CommandSessionsScreen | (internal) |
| 1134 | fn | sectionHeader | (private) |
| 1151 | fn | groupMenu | (private) |
| 1193 | fn | commitGroupEditor | (private) |
| 1211 | fn | deleteGroup | (private) |
| 1217 | fn | updateStoredGroups | (private) |
| 1225 | fn | patchGroupMembers | (private) |
| 1261 | fn | sessionRow | (private) |
| 1286 | fn | open | (private) |
| 1290 | fn | openSessionKey | (private) |
| 1296 | fn | patchSession | (private) |
| 1315 | fn | deleteSession | (private) |
| 1321 | fn | toggleArchived | (private) |
| 1334 | fn | forkSession | (private) |
| 1346 | fn | performMutation | (private) |
| 1363 | fn | refreshSessions | (private) |
| 1387 | mod | extension NodeAppModel | (internal) |

## apps/ios/Sources/Design/IPadSidebarFeaturePreviews.swift (674 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | struct | IPadWorkboardCompactRowsPreview | (private) |
| 114 | struct | IPadSkillWorkshopCompactRowsPreview | (private) |
| 186 | struct | IPadActivityStatesPreview | (private) |
| 281 | fn | previewHeader | (private) |
| 288 | fn | activityCard | (private) |
| 357 | struct | IPadWorkboardStatesPreview | (private) |
| 427 | fn | previewHeader | (private) |
| 436 | enum | IPadWorkboardPreviewFixtures | (private) |
| 477 | struct | IPadSkillWorkshopStatesPreview | (private) |
| 529 | fn | previewHeader | (private) |
| 535 | fn | queueCard | (private) |
| 562 | struct | IPadSkillWorkshopKanbanPreview | (private) |
| 609 | enum | IPadSkillWorkshopPreviewFixtures | (private) |
| 652 | fn | proposal | (private) |

## apps/ios/Sources/Design/IPadSkillWorkshopScreen.swift (1255 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | struct | IPadSkillWorkshopScreen | (internal) |
| 435 | fn | presentedProposalDetail | (private) |
| 453 | fn | proposalDetailCard | (private) |
| 521 | fn | proposalApplyButton | (private) |
| 534 | fn | proposalRejectButton | (private) |
| 547 | fn | proposalInspectButton | (private) |
| 617 | fn | shouldEnableProposalMutation | (internal) |
| 639 | fn | usesCompactTaskFlow | (internal) |
| 650 | fn | proposalStatusFilterLabel | (internal) |
| 660 | fn | proposalLaneLabel | (internal) |
| 671 | fn | titleCasedProposalStatus | (internal) |
| 686 | fn | proposalStatusBoardLanes | (internal) |
| 702 | fn | proposalStatusMatchesFilter | (internal) |
| 722 | fn | nextSelectedProposalID | (internal) |
| 730 | fn | normalizedScopeID | (internal) |
| 764 | fn | proposals | (private) |
| 783 | fn | syncSelectedProposalIDForVisibleProposals | (private) |
| 791 | fn | count | (private) |
| 795 | fn | proposal | (private) |
| 799 | fn | selectProposal | (private) |
| 811 | fn | loadProposals | (private) |
| 846 | fn | inspect | (private) |
| 869 | fn | run | (private) |
| 893 | fn | merge | (private) |
| 899 | fn | request | (private) |
| 911 | fn | message | (private) |
| 920 | struct | IPadSkillProposalKanbanColumn | (internal) |
| 984 | struct | IPadSkillProposalKanbanCard | (private) |
| 1083 | struct | IPadSkillProposalRow | (internal) |
| 1114 | struct | IPadSkillProposalSheetRoute | (private) |
| 1122 | struct | IPadSkillProposalAction | (internal) |
| 1132 | struct | IPadSkillProposalManifest | (private) |
| 1136 | struct | IPadSkillProposalManifestEntry | (internal) |
| 1147 | struct | IPadSkillWorkshopAgentScope | (private) |
| 1152 | struct | IPadSkillProposalListParams | (private) |
| 1156 | struct | IPadSkillProposalInspectParams | (private) |
| 1161 | struct | IPadSkillProposalInspectResponse | (internal) |
| 1167 | struct | IPadSkillProposalRecord | (internal) |
| 1176 | struct | IPadSkillProposalTarget | (internal) |
| 1181 | struct | IPadSkillProposalSupportFile | (internal) |
| 1186 | struct | IPadSkillProposal | (internal) |
| 1196 | method | init | (internal) |
| 1208 | method | init | (internal) |
| 1245 | fn | parseDate | (private) |
| 1249 | fn | stripFrontmatter | (private) |

## apps/ios/Sources/Design/IPadWorkboardScreen.swift (1572 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | struct | IPadWorkboardScreen | (internal) |
| 255 | fn | newCardButton | (private) |
| 332 | fn | compactStatusChip | (private) |
| 630 | fn | usesCompactTaskFlow | (internal) |
| 637 | fn | workboardSubtitle | (internal) |
| 644 | fn | compactWriteUnavailableMessage | (internal) |
| 650 | fn | boardScopeOptions | (internal) |
| 672 | fn | cards | (private) |
| 698 | fn | matchesQuery | (private) |
| 714 | fn | loadCards | (private) |
| 741 | fn | beginCreateCard | (private) |
| 748 | fn | createCard | (private) |
| 783 | fn | move | (private) |
| 803 | fn | archive | (private) |
| 822 | fn | dispatchCards | (private) |
| 843 | fn | open | (private) |
| 852 | fn | replace | (private) |
| 858 | fn | fetchCards | (private) |
| 866 | fn | applyCardsResponse | (private) |
| 872 | fn | loadBoardScopes | (private) |
| 887 | fn | request | (private) |
| 899 | fn | normalizedStatuses | (private) |
| 906 | fn | nextPosition | (private) |
| 914 | fn | decodeCardResponse | (private) |
| 918 | fn | normalized | (private) |
| 924 | fn | boardID | (private) |
| 930 | fn | rememberBoardIDs | (private) |
| 935 | fn | rememberBoardIDs | (private) |
| 942 | fn | normalizedScopeID | (internal) |
| 946 | fn | boardScopeLabel | (internal) |
| 951 | fn | message | (private) |
| 960 | struct | IPadWorkboardKanbanColumn | (internal) |
| 1020 | struct | IPadWorkboardKanbanCard | (private) |
| 1134 | struct | IPadWorkboardQueueRow | (internal) |
| 1289 | struct | IPadWorkboardCardDetailSheet | (private) |
| 1365 | fn | detailRow | (private) |
| 1378 | enum | IPadWorkboardSheet | (private) |
| 1392 | enum | IPadWorkboardDefaults | (private) |
| 1394 | fn | label | (internal) |
| 1412 | fn | rank | (internal) |
| 1418 | struct | IPadWorkboardCardsResponse | (private) |
| 1423 | struct | IPadWorkboardCardResponse | (private) |
| 1427 | struct | IPadWorkboardBoardsResponse | (private) |
| 1431 | struct | IPadWorkboardBoardSummary | (private) |
| 1435 | struct | IPadWorkboardCard | (internal) |
| 1449 | struct | IPadWorkboardMetadata | (internal) |
| 1454 | struct | IPadWorkboardAutomationMetadata | (internal) |
| 1458 | struct | IPadWorkboardListParams | (private) |
| 1462 | struct | IPadWorkboardCreateParams | (private) |
| 1474 | struct | IPadWorkboardMoveParams | (private) |
| 1480 | struct | IPadWorkboardArchiveParams | (private) |
| 1485 | struct | IPadWorkboardDispatchSummary | (internal) |
| 1503 | method | init | (internal) |
| 1541 | fn | arrayCount | (private) |
| 1557 | fn | outcomeText | (private) |
| 1572 | struct | IPadWorkboardDispatchEntry | (private) |

## apps/ios/Sources/Design/OpenClawProComponents.swift (822 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | enum | OpenClawProMetric | (internal) |
| 13 | enum | OpenClawSpacing | (internal) |
| 21 | enum | OpenClawRadius | (internal) |
| 27 | enum | OpenClawTextValue | (internal) |
| 30 | method | init | (internal) |
| 34 | fn | localized | (internal) |
| 49 | struct | OpenClawProBackground | (internal) |
| 56 | struct | ProSectionHeader | (internal) |
| 105 | struct | ProPanelBackground | (private) |
| 133 | struct | ProInsetSurfaceModifier | (private) |
| 137 | fn | body | (internal) |
| 152 | struct | OpenClawGlassButtonModifier | (private) |
| 155 | fn | body | (internal) |
| 183 | struct | OpenClawGlassSurfaceModifier | (private) |
| 185 | fn | body | (internal) |
| 197 | mod | extension View | (internal) |
| 198 | fn | proPanelSurface | (internal) |
| 208 | fn | proInsetSurface | (internal) |
| 212 | fn | openClawGlassButton | (internal) |
| 216 | fn | openClawGlassSurface | (internal) |
| 222 | struct | ProPanelSurfaceModifier | (private) |
| 227 | fn | body | (internal) |
| 245 | struct | ProIconBadge | (internal) |
| 261 | struct | OpenClawSidebarHeaderAction | (internal) |
| 280 | struct | OpenClawSidebarRevealButton | (internal) |
| 282 | method | init | (internal) |
| 309 | struct | OpenClawSidebarHeaderLeadingSlot | (internal) |
| 332 | enum | OpenClawNoticeDetail | (internal) |
| 337 | struct | OpenClawNoticeBanner | (internal) |
| 512 | struct | OpenClawToggleIndicator | (internal) |
| 529 | enum | OpenClawStatusTone | (internal) |
| 551 | struct | OpenClawStatusBadge | (internal) |
| 575 | struct | ProValuePill | (internal) |
| 594 | struct | OpenClawProMark | (internal) |
| 608 | struct | ProProgressBar | (internal) |
| 627 | struct | OpenClawGatewayCompactPill | (internal) |
| 665 | struct | ProMetricTile | (internal) |
| 700 | struct | ProMetric | (internal) |
| 708 | struct | ProMetricGrid | (internal) |
| 734 | struct | ProPanelHeader | (internal) |
| 783 | struct | ProStatusRow | (internal) |

## apps/ios/Sources/Design/SettingsChannelsDestination.swift (697 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | struct | SettingsChannelsDestination | (internal) |
| 13 | method | init | (internal) |
| 133 | fn | shouldEnableChannelOperation | (internal) |
| 175 | fn | entry | (private) |
| 202 | fn | accounts | (private) |
| 229 | fn | loadChannels | (private) |
| 253 | fn | run | (private) |
| 281 | fn | request | (private) |
| 292 | fn | fallbackLabel | (internal) |
| 303 | fn | fallbackDetail | (internal) |
| 310 | fn | fallbackSystemImage | (internal) |
| 320 | fn | relativeTime | (private) |
| 334 | fn | message | (private) |
| 343 | struct | SettingsChannelRow | (private) |
| 387 | fn | accountRow | (private) |
| 438 | fn | actionMenuIcon | (private) |
| 448 | fn | isBusy | (private) |
| 454 | struct | SettingsChannelEntry | (private) |
| 496 | struct | SettingsChannelFallbackMetadata | (private) |
| 501 | struct | SettingsChannelAccount | (private) |
| 556 | struct | SettingsChannelOperation | (private) |
| 568 | enum | SettingsChannelError | (private) |
| 584 | struct | SettingsChannelsStatesPreview | (private) |
| 654 | fn | stateSection | (private) |

## apps/ios/Sources/Design/SettingsProTabActions.swift (1412 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | mod | extension SettingsProTab | (internal) |
| 8 | fn | detailStatusCard | (internal) |
| 96 | fn | diagnosticCheckRow | (internal) |
| 120 | fn | detailListCard | (internal) |
| 126 | fn | reconnectGateway | (internal) |
| 134 | fn | switchGateway | (internal) |
| 151 | fn | forgetPendingGateway | (internal) |
| 170 | fn | refreshGatewayRegistry | (internal) |
| 174 | fn | gatewayEndpointSummary | (internal) |
| 190 | fn | runDiagnostics | (internal) |
| 214 | fn | syncSettingsState | (internal) |
| 241 | fn | refreshLocationPermissionSummary | (internal) |
| 265 | fn | locationServicesEnabled | (private) |
| 271 | fn | syncAfterOnboardingReset | (internal) |
| 280 | fn | connect | (internal) |
| 301 | fn | applySetupCodeAndConnect | (internal) |
| 319 | fn | applyGatewaySetupLink | (internal) |
| 338 | fn | applySetupCode | (internal) |
| 369 | fn | applyGatewayLink | (internal) |
| 397 | fn | openGatewayQRScanner | (internal) |
| 408 | fn | queueScannedResult | (internal) |
| 414 | fn | processQueuedScannerResult | (internal) |
| 428 | fn | handleScannedGatewayLink | (internal) |
| 435 | fn | handleScannedSetupCode | (internal) |
| 445 | fn | clearStagedGatewaySetupLink | (internal) |
| 451 | fn | takeStagedGatewaySetupSuppression | (private) |
| 456 | fn | connectAfterScannedGatewayLink | (internal) |
| 477 | fn | connectManual | (internal) |
| 552 | fn | preflightGateway | (internal) |
| 564 | fn | resetOnboarding | (internal) |
| 583 | fn | beginGatewaySetupAttempt | (internal) |
| 591 | fn | finishGatewaySetupAttempt | (internal) |
| 596 | fn | invalidateGatewaySetupAttempt | (internal) |
| 601 | fn | handleLocationModeChange | (internal) |
| 611 | fn | applyLocationMode | (internal) |
| 661 | fn | locationSettingsPresentation | (internal) |
| 667 | fn | handleLocationSharingTap | (internal) |
| 672 | fn | selectLocationAccessLevel | (internal) |
| 679 | fn | performLocationSettingsAction | (internal) |
| 690 | fn | setLocationMode | (internal) |
| 702 | fn | applyPendingLocationModeIfAvailable | (internal) |
| 723 | fn | openLocationSettings | (internal) |
| 728 | fn | refreshNotificationSettings | (internal) |
| 738 | fn | handleNotificationServingToggleChange | (internal) |
| 761 | fn | prepareNotificationEnrollment | (private) |
| 771 | fn | enableNotificationServing | (private) |
| 777 | fn | acceptNotificationRelayDisclosure | (internal) |
| 792 | fn | requestNotificationAuthorizationFromSettings | (internal) |
| 813 | fn | registerForRemoteNotificationsIfEnrollmentReady | (internal) |
| 823 | fn | applyNotificationStatus | (internal) |
| 891 | fn | persistGatewayToken | (internal) |
| 909 | fn | persistGatewayPassword | (internal) |
| 927 | fn | openNotificationSettings | (internal) |
| 932 | fn | title | (internal) |
| 949 | fn | sendDirectWatchSetup | (internal) |
| 981 | fn | clearManualCredentialFields | (private) |
| 988 | fn | selectGatewayCredentialTarget | (private) |
| 1014 | fn | resolvedManualPort | (internal) |
| 1052 | fn | friendlyGatewayMessage | (internal) |
| 1077 | fn | isTransientSetupStatus | (internal) |
| 1087 | fn | localizedFormat | (internal) |
| 1166 | fn | gatewayDetailLines | (internal) |

## apps/ios/Sources/Design/SettingsProTabSections.swift (1506 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | struct | SettingsIcon | (internal) |
| 18 | struct | AppearanceSettingsRow | (private) |
| 55 | struct | AppearanceSettingsScreen | (private) |
| 111 | fn | select | (private) |
| 124 | mod | extension SettingsProTab | (internal) |
| 226 | fn | settingsListRow | (internal) |
| 244 | fn | destination | (internal) |
| 858 | fn | gatewayActionButton | (internal) |
| 944 | fn | aboutLinkRow | (internal) |
| 968 | fn | toggleCard | (internal) |
| 1139 | fn | pairedGatewayRow | (internal) |
| 1197 | fn | discoveredGatewayRow | (internal) |
| 1319 | fn | gatewaySecureField | (internal) |
| 1479 | fn | settingsToggle | (internal) |

## apps/ios/Sources/Design/SettingsProTabSupport.swift (605 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | enum | SettingsRoute | (internal) |
| 22 | enum | SettingsLayout | (internal) |
| 30 | struct | SettingsDetailRow | (internal) |
| 33 | method | init | (internal) |
| 52 | struct | SettingsBuildMetadataStrip | (internal) |
| 158 | fn | metadataField | (private) |
| 214 | fn | copyCommit | (private) |
| 219 | fn | copyBuildInfo | (private) |
| 225 | struct | SettingsApprovalItem | (internal) |
| 234 | struct | SettingsApprovalRow | (internal) |
| 271 | enum | SettingsNotificationStatus | (internal) |
| 277 | method | init | (internal) |
| 296 | enum | SettingsNotificationPresentation | (internal) |
| 359 | enum | SettingsDiagnosticIssue | (internal) |
| 366 | enum | SettingsDiagnostics | (internal) |
| 367 | fn | issues | (internal) |
| 380 | fn | issueCount | (internal) |
| 393 | fn | timestamp | (internal) |
| 399 | mod | extension SettingsProTab | (internal) |
| 400 | fn | hasTailnetIPv4 | (internal) |
| 428 | fn | isTailnetHostOrIP | (internal) |
| 434 | fn | isTailnetIPv4 | (internal) |
| 452 | struct | SettingsGatewayStatesPreview | (private) |
| 502 | fn | stateSection | (private) |
| 514 | fn | gatewayStatusCard | (private) |
| 532 | fn | gatewayFactsCard | (private) |
| 551 | fn | factRow | (private) |
| 565 | fn | gatewayActionsCard | (private) |
| 588 | fn | previewButton | (private) |

## apps/ios/Sources/Design/SettingsSkillsDestination.swift (1132 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | enum | SkillsSettingsSection | (private) |
| 17 | enum | InstalledSkillFilter | (private) |
| 37 | enum | SkillsReviewSheet | (private) |
| 49 | struct | SettingsSkillsDestination | (internal) |
| 399 | fn | loadInitialState | (private) |
| 420 | fn | refreshVisibleSection | (private) |
| 430 | fn | updateClawHubSupport | (private) |
| 453 | fn | loadInstalled | (private) |
| 479 | fn | searchClawHub | (private) |
| 517 | fn | review | (private) |
| 556 | fn | install | (private) |
| 658 | fn | setEnabled | (private) |
| 699 | fn | fetchInstalledSkills | (private) |
| 710 | fn | request | (private) |
| 730 | fn | gatewayRoute | (private) |
| 740 | fn | resetGatewayState | (private) |
| 815 | fn | isReady | (internal) |
| 819 | fn | needsSetup | (internal) |
| 825 | struct | InstalledSkillRow | (private) |
| 899 | struct | ClawHubSkillRow | (private) |
| 934 | struct | SkillsNotice | (private) |
| 941 | struct | SkillsNoticeCard | (private) |
| 967 | struct | SkillsInstallReviewSheet | (private) |
| 1008 | struct | SkillsRiskReviewSheet | (private) |
| 1063 | struct | SkillsReviewDetails | (private) |
| 1080 | struct | SkillsReviewLine | (private) |
| 1092 | struct | EmptySkillsRequest | (private) |
| 1094 | struct | ClawHubSearchRequest | (private) |
| 1099 | struct | ClawHubDetailRequest | (private) |
| 1101 | struct | ClawHubInstallRequest | (private) |
| 1109 | struct | SkillEnabledRequest | (private) |
| 1114 | enum | SkillsSettingsError | (private) |
| 1128 | mod | extension String | (internal) |
