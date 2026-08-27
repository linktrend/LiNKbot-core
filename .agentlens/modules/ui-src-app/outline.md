# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 11 large files in this module.

## ui/src/app/app-host.test.ts (1019 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | AppLifecycleState | (private) |
| 35 | type | ShellInitializationState | (private) |
| 47 | type | ShellKeyboardState | (private) |
| 54 | type | TestOptionalCustomElement | (private) |
| 60 | type | ShellLazySurfaceState | (private) |
| 68 | type | ShellApprovalLazyState | (private) |
| 74 | type | ShellUiCommandState | (private) |
| 78 | fn | roster | (private) |
| 82 | fn | createRosterRefreshContext | (private) |
| 133 | fn | createLazyElementSpec | (private) |
| 145 | type | ShellNavigationState | (private) |
| 159 | type | ShellChromeEventState | (private) |
| 168 | fn | createDragEvent | (private) |
| 175 | type | ShellSettingsSearchLoadState | (private) |
| 182 | type | TestWebKitWindow | (private) |
| 190 | type | MacosTitlebarControlsState | (private) |
| 209 | type | ShellEpochState | (private) |

## ui/src/app/app-host.ts (1668 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 106 | type | ShellRouteState | (private) |
| 112 | type | AppSidebarElement | (private) |
| 121 | fn | diffAgentRoster | (private) |
| 140 | fn | selectShellRouteState | (private) |
| 151 | fn | equalShellRouteState | (private) |
| 169 | fn | isTerminalOnlyView | (private) |
| 173 | fn | resolveTerminalThemeMode | (private) |
| 179 | fn | renderConnectingSplash | (private) |
| 191 | fn | renderApprovalDocument | (private) |
| 210 | fn | isBrowserPanelAvailable | (private) |
| 220 | class | OpenClawApp | (private) |
| 471 | class | OpenClawShell | (private) |
| 1111 | fn | show | (private) |

## ui/src/app/custom-theme.ts (606 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 88 | type | ModeTokenName | (private) |
| 89 | type | ThemeTokenMap | (private) |
| 91 | type | ImportedCustomTheme | pub |
| 103 | fn | readThemeRecord | (private) |
| 109 | type | TweakcnThemeResolution | (private) |
| 115 | fn | requireThemeId | (private) |
| 121 | fn | normalizeThemeIdFromPath | (private) |
| 138 | fn | normalizePastedThemeInput | (private) |
| 159 | fn | normalizeThemeIdFromUrl | (private) |
| 175 | fn | requireSafeCssValue | (private) |
| 208 | fn | requireSafeExternalColorValue | (private) |
| 221 | fn | isSafeFontFamilyCharacter | (private) |
| 232 | fn | requireSafeFontFamilyValue | (private) |
| 244 | fn | requireSafeExternalModeValue | (private) |
| 251 | fn | makeTokenMap | (private) |
| 255 | fn | normalizeStoredTokenMap | (private) |
| 270 | fn | resolveModeVar | (private) |
| 292 | fn | normalizeModeTokenMap | (private) |
| 383 | fn | describeThemeLabel | (private) |
| 391 | fn | normalizeTweakcnThemeUrl | (private) |
| 410 | fn | parseImportedCustomTheme | pub |
| 444 | fn | normalizeImportedCustomTheme | (private) |
| 466 | fn | assertTweakcnResponseUrl | (private) |
| 481 | fn | parseContentLength | (private) |
| 490 | fn | readResponseTextWithLimit | (private) |
| 524 | fn | readJsonResponseWithLimit | (private) |
| 533 | fn | importCustomThemeFromUrl | pub |
| 562 | fn | buildCustomThemeStyles | (private) |
| 568 | fn | renderDeclarations | (private) |
| 580 | fn | syncCustomThemeStyleTag | pub |

## ui/src/app/exec-approval.test.ts (615 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | parseExecApprovalRequested | (private) |
| 17 | fn | parsePluginApprovalRequested | (private) |
| 19 | fn | parseSystemAgentApprovalRequested | (private) |
| 22 | type | RequestFn | (private) |
| 24 | fn | createExecApproval | (private) |
| 35 | fn | createPromptState | (private) |
| 47 | fn | createGatewayError | (private) |

## ui/src/app/exec-approval.ts (528 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | type | ExecApprovalRequestPayload | pub |
| 21 | type | ExecApprovalDecision | pub |
| 23 | type | ExecApprovalRequest | pub |
| 36 | type | ExecApprovalResolved | (private) |
| 43 | type | ExecApprovalPromptState | pub |
| 60 | fn | isRecord | (private) |
| 64 | fn | parseCommandSpans | (private) |
| 101 | fn | parseAllowedDecisions | (private) |
| 112 | fn | parseExecApprovalRequested | (private) |
| 151 | fn | parseExecApprovalResolved | pub |
| 167 | fn | parsePluginApprovalRequested | (private) |
| 208 | fn | parseSystemAgentApprovalRequested | (private) |
| 240 | fn | parseApprovalRequestedEvent | pub |
| 255 | fn | resolveApprovalRequest | pub |
| 272 | fn | pruneExecApprovalQueue | (private) |
| 277 | fn | addExecApproval | (private) |
| 286 | fn | removeExecApproval | (private) |
| 290 | fn | readGatewayErrorCode | (private) |
| 297 | fn | readGatewayErrorReason | (private) |
| 308 | fn | isStaleApprovalResolutionError | pub |
| 323 | fn | parseApprovalList | (private) |
| 336 | fn | sortApprovalsOldestFirst | (private) |
| 340 | fn | currentApprovalsForKind | (private) |
| 347 | fn | mergeRefreshedApprovalQueue | (private) |
| 368 | fn | clearApprovalCountdownTimer | (private) |
| 376 | fn | synchronizeApprovalCountdownTimer | (private) |
| 393 | fn | clearApprovalExpiryTimer | (private) |
| 402 | fn | scheduleApprovalExpiryPrune | (private) |
| 425 | fn | removeExecApprovalFromState | (private) |
| 432 | fn | pruneExecApprovalErrors | (private) |
| 441 | fn | clearExecApprovalTimers | pub |
| 449 | fn | enqueueExecApprovalPrompt | pub |
| 458 | fn | refreshPendingApprovalQueue | pub |
| 523 | fn | clearResolvedExecApprovalPrompt | pub |

## ui/src/app/overlays.test.ts (513 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | RequestFn | (private) |
| 10 | fn | deferred | (private) |
| 20 | fn | approval | (private) |
| 29 | fn | createGatewayHarness | (private) |
| 109 | fn | client | (private) |
| 113 | fn | flushMicrotasks | (private) |

## ui/src/app/overlays.ts (729 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | ApplicationStatusBanner | (private) |
| 37 | type | ApplicationOverlaySnapshot | (private) |
| 54 | type | ApplicationOverlays | pub |
| 77 | type | UpdateRestartStatusResponse | (private) |
| 88 | fn | readUpdateAvailable | (private) |
| 109 | fn | resolveUpdateStatusBanner | (private) |
| 144 | fn | resolveUpdateVerificationBanner | (private) |
| 157 | fn | resolvePostRestartUpdateBanner | (private) |
| 171 | fn | resolvePendingUpdateHandoffTimeoutBanner | (private) |
| 178 | fn | isPendingUpdateHandoffSentinel | (private) |
| 190 | fn | isGatewayEvent | (private) |
| 194 | type | UpdateRunResponse | (private) |
| 205 | type | UpdateVerificationWait | (private) |
| 210 | fn | createApplicationOverlays | pub |
| 265 | fn | publish | (private) |
| 284 | fn | publishDevicePairSetupOperation | (private) |
| 291 | fn | isCurrentClient | (private) |
| 297 | fn | refreshDevicePairPendingCount | (private) |
| 327 | fn | refreshApprovals | (private) |
| 340 | fn | publishUpdateBanner | (private) |
| 345 | fn | settleUpdateVerificationWait | (private) |
| 355 | fn | cancelUpdateVerification | (private) |
| 360 | fn | waitForUpdateVerification | (private) |
| 375 | fn | verifyPendingUpdateVersion | (private) |
| 385 | fn | isCurrentVerification | (private) |
| 460 | fn | synchronizeGateway | (private) |
| 644 | fn | isCurrentOperation | (private) |

## ui/src/app/question-prompt.test.ts (716 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | RequestFn | (private) |
| 15 | type | QuestionPromptState | (private) |
| 19 | fn | createState | (private) |
| 25 | fn | requestedPayload | (private) |
| 46 | fn | questionNotFoundError | (private) |

## ui/src/app/question-prompt.ts (648 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | QuestionClient | (private) |
| 14 | type | QuestionDraft | (private) |
| 19 | type | QuestionPromptStatus | (private) |
| 21 | type | QuestionPrompt | pub |
| 40 | type | QuestionPromptState | (private) |
| 50 | type | QuestionAnswerValues | (private) |
| 54 | fn | isRecord | (private) |
| 58 | fn | readNonEmptyString | (private) |
| 66 | fn | readTimestamp | (private) |
| 72 | fn | clampHeaderGraphemes | (private) |
| 83 | fn | parseQuestion | (private) |
| 133 | fn | parseQuestionAnswers | (private) |
| 150 | fn | questionAnswersEqual | (private) |
| 172 | fn | parseQuestionRecord | (private) |
| 223 | fn | parseQuestionRequestedEvent | (private) |
| 228 | fn | parseQuestionResolvedEvent | (private) |
| 246 | fn | createQuestionPromptState | pub |
| 258 | fn | scheduleTick | (private) |
| 286 | fn | promptFromRecord | (private) |
| 319 | fn | applyQuestionResolution | (private) |
| 342 | fn | handleQuestionPromptEvent | pub |
| 385 | fn | parseQuestionListResult | (private) |
| 393 | fn | parseQuestionGetResult | (private) |
| 397 | fn | isQuestionNotFoundError | (private) |
| 406 | fn | markRecoveryUnavailable | (private) |
| 419 | fn | refreshPendingQuestions | (private) |
| 516 | fn | refreshPendingQuestionsWithRetry | pub |
| 522 | fn | run | (private) |
| 545 | fn | setQuestionPromptClient | pub |
| 556 | fn | disposeQuestionPromptState | pub |
| 568 | fn | buildAnswers | (private) |
| 574 | fn | resolveQuestionPrompt | (private) |
| 632 | fn | submitQuestionPrompt | pub |
| 640 | fn | cancelQuestionPrompt | pub |
| 644 | fn | listQuestionPrompts | pub |

## ui/src/app/settings.node.test.ts (1094 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | setTestLocation | (private) |
| 24 | fn | setControlUiBasePath | (private) |
| 25 | type | TestWindow | (private) |
| 46 | fn | expectedGatewayUrl | (private) |
| 51 | fn | makeSettings | (private) |

## ui/src/app/settings.ts (617 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | settingsKeyForGateway | (private) |
| 17 | fn | currentGatewaySelectionKeyForPage | (private) |
| 21 | type | ScopedSessionSelection | (private) |
| 26 | type | PersistedUiSettings | (private) |
| 52 | type | TextScaleStop | pub |
| 55 | type | ChatSendShortcut | pub |
| 57 | fn | normalizeChoice | (private) |
| 67 | type | ChatFollowUpMode | pub |
| 71 | fn | normalizeChatFollowUpModeOverride | pub |
| 78 | type | CatalogOpenTarget | pub |
| 83 | type | ChatWorkspaceDock | pub |
| 87 | fn | normalizeTextScale | pub |
| 103 | type | UiSettings | pub |
| 137 | type | LastActiveSessionHost | (private) |
| 142 | fn | setLastActiveSessionKey | pub |
| 150 | fn | isViteDevPage | (private) |
| 157 | fn | formatHostWithPort | (private) |
| 162 | fn | deriveDefaultGatewayUrl | (private) |
| 178 | fn | resolvePageGatewaySettings | pub |
| 195 | fn | getSessionStorage | (private) |
| 199 | type | PersistedSettingsSource | (private) |
| 204 | fn | parsePersistedSettings | (private) |
| 215 | fn | settingsMatchGatewayTarget | (private) |
| 223 | fn | readSettingsForGateway | (private) |
| 240 | fn | tokenSessionKeyForGateway | (private) |
| 244 | fn | resolveScopedSessionSelection | (private) |
| 272 | fn | loadGatewaySessionSelection | pub |
| 283 | fn | loadSessionToken | (private) |
| 297 | fn | resolveGatewayTokenForUrlEdit | pub |
| 312 | fn | persistSessionToken | pub |
| 336 | fn | loadSettings | pub |
| 481 | fn | saveSettings | pub |
| 488 | type | SettingsChangeListener | (private) |
| 491 | fn | setSettingsChangeListener | pub |
| 495 | fn | patchSettings | pub |
| 508 | fn | loadLocalUserIdentity | pub |
| 521 | fn | persistSettings | (private) |
