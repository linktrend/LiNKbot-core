# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 9 large files in this module.

## apps/ios/Tests/GatewayConnectionControllerTests.swift (2768 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | fn | saveActiveManualGateway | (private) |
| 28 | struct | GatewayRegistryTestIsolation | (private) |
| 43 | method | init | (internal) |
| 61 | fn | restore | (internal) |
| 89 | fn | waitForActiveGateway | (private) |

## apps/ios/Tests/GatewayConnectionSecurityTests.swift (693 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | fn | makeController | (private) |
| 13 | fn | makeDiscoveredGateway | (private) |
| 36 | fn | clearTLSFingerprint | (private) |

## apps/ios/Tests/GatewaySettingsStoreTests.swift (917 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | struct | KeychainEntry | (private) |
| 32 | fn | snapshotDefaults | (private) |
| 41 | fn | applyDefaults | (private) |
| 52 | fn | restoreDefaults | (private) |
| 56 | fn | snapshotKeychain | (private) |
| 64 | fn | applyKeychain | (private) |
| 74 | fn | restoreKeychain | (private) |
| 78 | fn | withBootstrapSnapshots | (private) |
| 91 | fn | withLastGatewaySnapshot | (private) |

## apps/ios/Tests/NodeAppModelInvokeTests.swift (7940 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | class | MockVoiceNoteAudioCapture | (private) |
| 14 | fn | requestPermission | (internal) |
| 19 | fn | start | (internal) |
| 21 | fn | stop | (internal) |
| 24 | fn | cancel | (internal) |
| 28 | fn | setFailureHandler | (internal) |
| 32 | class | CancellingCameraService | (private) |
| 33 | fn | listDevices | (internal) |
| 36 | fn | snap | (internal) |
| 43 | fn | clip | (internal) |
| 52 | class | RecordingCameraService | (private) |
| 54 | fn | listDevices | (internal) |
| 58 | fn | snap | (internal) |
| 65 | fn | clip | (internal) |
| 73 | fn | clipCallCount | (internal) |
| 79 | class | ApprovalResolutionCapture | (private) |
| 81 | fn | record | (internal) |
| 85 | fn | recordedKind | (internal) |
| 91 | class | MockHealthSummaryService | (private) |
| 93 | fn | summary | (internal) |
| 109 | class | BlockingAudioCameraService | (private) |
| 111 | method | init | (internal) |
| 115 | fn | listDevices | (internal) |
| 119 | fn | snap | (internal) |
| 126 | fn | clip | (internal) |
| 137 | class | BlockingAudioScreenRecorder | (private) |
| 140 | method | init | (internal) |
| 144 | fn | record | (internal) |
| 160 | fn | recordCallCount | (internal) |
| 166 | class | CancellationIgnoringScreenRecorder | (private) |
| 169 | method | init | (internal) |
| 174 | fn | record | (internal) |
| 188 | class | OverlappingCameraService | (private) |
| 194 | method | init | (internal) |
| 202 | fn | listDevices | (internal) |
| 206 | fn | snap | (internal) |
| 224 | fn | clip | (internal) |
| 231 | fn | releaseFirst | (internal) |
| 236 | fn | releaseSecond | (internal) |
| 243 | class | TalkPreparationBarrier | (private) |
| 248 | fn | suspendFirstPreparation | (internal) |
| 258 | fn | waitUntilEntered | (internal) |
| 267 | fn | release | (internal) |
| 273 | fn | waitForTalkCondition | (private) |
| 284 | fn | talkRequest | (private) |
| 293 | fn | makeAgentDeepLinkURL | (private) |
| 320 | fn | makeWatchChatRawMessage | (private) |
| 345 | fn | makeProjectedWatchChatRawMessage | (private) |
| 365 | fn | makePendingExecApprovalJSON | (private) |
| 369 | fn | makeExpiredExecApprovalJSON | (private) |
| 390 | fn | mountScreen | (private) |
| 399 | class | MockWatchMessagingService | (private) |
| 430 | fn | status | (internal) |
| 434 | fn | setStatusHandler | (internal) |
| 438 | fn | emitStatus | (internal) |
| 443 | fn | setReplyHandler | (internal) |
| 447 | fn | setExecApprovalResolveHandler | (internal) |
| 451 | fn | setExecApprovalSnapshotRequestHandler | (internal) |
| 457 | fn | setAppSnapshotRequestHandler | (internal) |
| 461 | fn | setAppCommandHandler | (internal) |
| 465 | fn | sendNotification | (internal) |
| 477 | fn | sendDirectNodeSetup | (internal) |
| 485 | fn | sendExecApprovalPrompt | (internal) |
| 496 | fn | sendExecApprovalResolved | (internal) |
| 506 | fn | sendExecApprovalExpired | (internal) |
| 516 | fn | syncExecApprovalSnapshot | (internal) |
| 530 | fn | syncAppSnapshot | (internal) |
| 540 | fn | sendChatCompletion | (internal) |
| 550 | fn | emitReply | (internal) |
| 554 | fn | emitExecApprovalResolve | (internal) |
| 558 | fn | emitExecApprovalSnapshotRequest | (internal) |
| 562 | fn | emitAppSnapshotRequest | (internal) |
| 566 | fn | emitAppCommand | (internal) |
| 572 | class | MockBootstrapNotificationCenter | (private) |
| 579 | fn | authorizationStatus | (internal) |
| 586 | fn | add | (internal) |
| 590 | fn | removePendingNotificationRequests | (internal) |
| 594 | fn | removeDeliveredNotifications | (internal) |
| 598 | fn | deliveredNotifications | (internal) |
| 604 | class | NotificationAuthorizationGate | (private) |
| 607 | fn | wait | (internal) |
| 614 | fn | hasStarted | (internal) |
| 618 | fn | resume | (internal) |
| 625 | class | WatchSnapshotSendGate | (private) |
| 629 | fn | wait | (internal) |
| 640 | fn | hasStarted | (internal) |
| 644 | fn | resume | (internal) |
| 655 | class | ExecApprovalResolutionGate | (private) |
| 658 | fn | waitForFirstCall | (internal) |
| 667 | fn | callCount | (internal) |
| 671 | fn | hasStarted | (internal) |
| 675 | fn | resume | (internal) |
| 682 | class | ExecApprovalConcurrentWriteProbe | (private) |
| 687 | fn | resolve | (internal) |
| 700 | fn | snapshot | (internal) |
| 704 | fn | releaseFirst | (internal) |
| 710 | fn | overrideNotificationServingPreference | (private) |

## apps/ios/Tests/OpenClawTypographyTests.swift (767 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | struct | RootSidebarTypographyTests | (internal) |
| 24 | struct | OpenClawTypographyTests | (internal) |
| 467 | fn | projectYmlURL | (private) |
| 471 | fn | activityWidgetInfoPlistURL | (private) |
| 475 | fn | watchInfoPlistURL | (private) |
| 479 | fn | activityWidgetSourceURL | (private) |
| 483 | fn | activityWidgetTypographySourceURL | (private) |
| 487 | fn | watchInboxSourceURL | (private) |
| 491 | fn | watchTypographySourceURL | (private) |
| 495 | fn | appSourceURL | (private) |
| 499 | fn | sourceURL | (private) |
| 503 | fn | swiftSourcesForTypographyAudit | (private) |
| 523 | fn | unbrandedTextCallOffenders | (private) |
| 557 | fn | isTextOrLabelCall | (private) |
| 561 | fn | isAccessibilityMetadataTextCall | (private) |
| 565 | fn | accessibilityMetadataTextLines | (private) |
| 610 | fn | callOpeningParenthesis | (private) |
| 625 | fn | skippingWhitespace | (private) |
| 633 | fn | matchingParenthesis | (private) |
| 646 | fn | isSwiftIdentifierByte | (private) |
| 650 | fn | maskedSwiftCode | (private) |
| 655 | fn | mask | (internal) |
| 725 | fn | isShorthandControlCall | (private) |
| 731 | fn | hasAllowedBrandedFontParameter | (private) |
| 746 | fn | relativePath | (private) |
| 754 | fn | iosRootURL | (private) |
| 760 | fn | extract | (private) |

## apps/ios/Tests/RootTabsPresentationTests.swift (788 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | struct | RootTabsPresentationTests | (internal) |
| 586 | fn | entry | (internal) |
| 740 | fn | sessionEntry | (private) |
| 773 | fn | cronJob | (private) |

## apps/ios/Tests/RootTabsSourceGuardTests.swift (1885 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | struct | RootTabsSourceGuardTests | (internal) |
| 535 | mod | extension RootTabsSourceGuardTests | (internal) |
| 1381 | mod | extension RootTabsSourceGuardTests | (internal) |
| 1539 | fn | rootTabsSourceURL | (internal) |
| 1546 | fn | rootSidebarSourceURL | (private) |
| 1553 | fn | rootSidebarModelSourceURL | (private) |
| 1560 | fn | nodeAppModelSourceURL | (internal) |
| 1567 | fn | execApprovalPromptDialogSourceURL | (private) |
| 1574 | fn | iOSGatewayChatTransportSourceURL | (private) |
| 1581 | fn | proComponentsSourceURL | (private) |
| 1588 | fn | commandCenterSourceURL | (private) |
| 1595 | fn | commandCenterSupportSourceURL | (private) |
| 1602 | fn | agentProTabSourceURL | (private) |
| 1609 | fn | agentProTabOverviewSourceURL | (private) |
| 1616 | fn | agentProTabDestinationsSourceURL | (private) |
| 1623 | fn | agentProNodesDestinationSourceURL | (private) |
| 1630 | fn | agentProDreamingDestinationSourceURL | (private) |
| 1637 | fn | rootTabsNavigationSourceURL | (private) |
| 1644 | fn | iPadSidebarFeatureScreensSourceURL | (private) |
| 1651 | fn | iPadTaskFeatureScreensSource | (private) |
| 1661 | fn | iPadWorkboardScreenSourceURL | (private) |
| 1668 | fn | iPadSkillWorkshopScreenSourceURL | (private) |
| 1675 | fn | iPadSidebarFeaturePreviewsSourceURL | (private) |
| 1682 | fn | iPadActivityScreenSourceURL | (private) |
| 1689 | fn | iPadSidebarScreenChromeSourceURL | (private) |
| 1696 | fn | chatProTabSourceURL | (private) |
| 1703 | fn | docsSourceURL | (private) |
| 1710 | fn | settingsProTabSectionsSourceURL | (internal) |
| 1717 | fn | settingsProTabSourceURL | (internal) |
| 1724 | fn | onboardingWizardSourceURL | (private) |
| 1731 | fn | gatewayQuickSetupSourceURL | (private) |
| 1738 | fn | onboardingWizardSource | (internal) |
| 1747 | fn | qrScannerSourceURL | (internal) |
| 1754 | fn | openClawAppSourceURL | (private) |
| 1761 | fn | notificationPermissionGuidanceDialogSourceURL | (private) |
| 1768 | fn | settingsProTabActionsSourceURL | (internal) |
| 1775 | fn | settingsProTabSupportSourceURL | (private) |
| 1782 | fn | gatewayTrustPromptAlertSourceURL | (internal) |
| 1789 | fn | gatewayConnectionControllerSourceURL | (private) |
| 1796 | fn | gatewayConnectionControllerSource | (internal) |
| 1806 | fn | watchConnectivityReceiverSourceURL | (private) |
| 1813 | fn | watchInboxStoreSourceURL | (private) |
| 1820 | fn | watchInboxMessagesSourceURL | (private) |
| 1827 | fn | channelsSourceURL | (private) |
| 1834 | fn | settingsSkillsSourceURL | (private) |
| 1841 | fn | sharedChatPreviewSourceURL | (private) |
| 1849 | fn | sharedChatComposerSourceURL | (private) |
| 1857 | fn | cleanChatComposerControlsSourceURL | (private) |
| 1865 | fn | xcodeProjectSourceURL | (private) |
| 1872 | fn | extract | (internal) |
| 1879 | fn | sourceContents | (private) |

## apps/ios/Tests/SwiftUIRenderSmokeTests.swift (655 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | struct | SwiftUIRenderSmokeTests | (internal) |
| 9 | fn | host | (private) |
| 469 | fn | gatewayControllerWithCapturedTLSFingerprint | (private) |
| 480 | fn | triggerGatewayTrustPrompt | (private) |
| 572 | fn | waitForPresentedAlert | (private) |
| 580 | fn | rootTabsGatewayStateModels | (private) |
| 595 | fn | rootTabsShellScenarios | (private) |

## apps/ios/Tests/TalkModeConfigParsingTests.swift (1123 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | struct | TalkModeManagerTests | (internal) |
