# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 48 large files in this module.

## extensions/browser/src/browser-tool.actions.ts (706 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | type | BrowserActRequest | (private) |
| 54 | type | BrowserActRequestWithTimeout | (private) |
| 56 | fn | normalizePositiveTimeoutMs | (private) |
| 62 | fn | normalizeNonNegativeDurationMs | (private) |
| 68 | fn | supportsBrowserActTimeout | (private) |
| 85 | fn | existingSessionRejectsActTimeout | (private) |
| 99 | fn | usesExistingSessionProfile | (private) |
| 106 | fn | withConfiguredActTimeout | (private) |
| 126 | fn | resolveActProxyTimeoutMs | (private) |
| 130 | type | BrowserProxyRequest | (private) |
| 139 | type | BrowserTabLike | (private) |
| 150 | fn | formatAgentTab | (private) |
| 171 | fn | wrapBrowserExternalJson | (private) |
| 202 | fn | formatTabsToolResult | (private) |
| 222 | fn | formatConsoleToolResult | (private) |
| 243 | fn | isChromeStaleTargetError | (private) |
| 263 | fn | replaceStaleTargetIdInActRequest | (private) |
| 273 | fn | canRetryChromeActAfterSoleTargetRefresh | (private) |
| 287 | fn | isAriaRefsUnsupportedError | (private) |
| 292 | fn | withRoleRefsFallback | (private) |
| 301 | fn | executeTabsAction | pub |
| 330 | fn | executeSnapshotAction | pub |
| 401 | fn | readSnapshot | (private) |
| 522 | fn | executeConsoleAction | pub |
| 551 | fn | resolveDownloadProxyTimeoutMs | (private) |
| 558 | type | BrowserDownloadRequest | (private) |
| 562 | fn | readBrowserDownloadRequest | (private) |
| 582 | fn | executeDownloadAction | pub |
| 624 | fn | executeActAction | pub |

## extensions/browser/src/browser-tool.test.ts (2838 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 217 | fn | readStringValue | (private) |
| 218 | fn | readStringParam | (private) |
| 307 | fn | mockSingleBrowserProxyNode | (private) |
| 319 | fn | resetBrowserToolMocks | (private) |
| 348 | fn | setResolvedBrowserProfiles | (private) |
| 361 | fn | registerBrowserToolAfterEachReset | (private) |
| 370 | fn | runSnapshotToolCall | (private) |
| 380 | fn | mockCallArg | (private) |
| 394 | fn | lastMockCallArg | (private) |
| 402 | fn | firstResultText | (private) |
| 409 | fn | externalContentDetails | (private) |
| 444 | fn | nodeInvokeCall | (private) |
| 486 | fn | lastNodeInvokeCall | (private) |

## extensions/browser/src/browser-tool.ts (1036 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 99 | fn | readOptionalTargetAndTimeout | (private) |
| 107 | fn | readTargetUrlParam | (private) |
| 115 | fn | formatScreenshotShareHint | (private) |
| 157 | fn | readActRequestParam | (private) |
| 195 | type | BrowserNodeTarget | (private) |
| 200 | fn | isBrowserNode | (private) |
| 206 | fn | resolveBrowserNodeTarget | (private) |
| 286 | fn | resolveBrowserBaseUrl | (private) |
| 321 | fn | readHostSystemProfiles | (private) |
| 344 | fn | shouldPreferHostForProfile | (private) |
| 370 | fn | usesExistingSessionManageFlow | (private) |
| 389 | fn | readToolTimeoutMs | (private) |
| 396 | fn | createBrowserTool | pub |
| 645 | fn | closeOpenedTab | (private) |
| 661 | fn | closeOpenedTab | (private) |

## extensions/browser/src/browser/cdp.helpers.internal.test.ts (590 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | fn | startWsServer | (private) |
| 68 | fn | requireGuardedFetchRequest | (private) |
| 420 | fn | rejectRawString | (private) |
| 578 | fn | toLintErrorObject | (private) |

## extensions/browser/src/browser/cdp.helpers.test.ts (591 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | requireGuardedFetchRequest | (private) |
| 366 | fn | createProfile | (private) |

## extensions/browser/src/browser/cdp.helpers.ts (803 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | fn | isWebSocketUrl | pub |
| 65 | fn | isDirectCdpWebSocketEndpoint | pub |
| 85 | fn | scopeCdpPolicyToConfiguredEndpoint | pub |
| 95 | type | CdpEndpointSource | (private) |
| 99 | fn | cdpEndpointAuthority | (private) |
| 106 | fn | assertDiscoveredCdpEndpointMatchesConfigured | (private) |
| 123 | fn | assertCdpEndpointAllowed | pub |
| 154 | type | CdpResponse | (private) |
| 160 | type | Pending | (private) |
| 166 | type | CdpSendFn | pub |
| 172 | fn | decodeUrlUserInfo | (private) |
| 181 | fn | getHeadersWithAuth | pub |
| 204 | fn | stripCdpUrlCredentials | pub |
| 219 | fn | redactCdpErrorText | pub |
| 225 | fn | appendCdpPath | pub |
| 234 | fn | normalizeCdpHttpBaseForJsonEndpoints | pub |
| 256 | fn | fingerprintCdpIdentity | (private) |
| 260 | fn | canonicalCdpAuthority | (private) |
| 266 | fn | canonicalCdpProfileIdentity | (private) |
| 282 | fn | canonicalBrowserWebSocketIdentity | (private) |
| 297 | fn | createCdpOwnershipFingerprints | (private) |
| 315 | type | CdpTabOwnershipParams | (private) |
| 324 | fn | resolveCdpTabOwnershipContext | (private) |
| 380 | fn | resolveCdpTabOwnership | pub |
| 386 | type | CloseTrackedCdpTargetResult | pub |
| 396 | fn | closeTrackedCdpTarget | pub |
| 486 | type | CdpFetchResult | (private) |
| 491 | fn | createCdpSender | (private) |
| 499 | fn | clearPendingTimer | (private) |
| 536 | fn | closeWithError | (private) |
| 584 | fn | fetchJson | pub |
| 599 | fn | fetchCdpChecked | pub |
| 610 | fn | release | (private) |
| 658 | fn | fetchOk | pub |
| 669 | fn | openCdpWebSocket | pub |
| 691 | type | CdpSocketOptions | (private) |
| 700 | fn | normalizeRetryCount | (private) |
| 707 | fn | computeHandshakeRetryDelayMs | (private) |
| 724 | fn | shouldRetryCdpHandshakeError | (private) |
| 753 | fn | withCdpSocket | pub |

## extensions/browser/src/browser/cdp.internal.test.ts (966 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | CdpReplyHandler | (private) |
| 27 | type | CdpMockMessage | (private) |
| 29 | fn | sendCdpResult | (private) |
| 33 | fn | countMatching | (private) |
| 43 | fn | replyToPageEnable | (private) |
| 51 | fn | replyWithScreenshotData | (private) |
| 59 | fn | replyToViewportCommandOrScreenshot | (private) |
| 74 | fn | startMockWsServer | (private) |
| 120 | fn | captureScreenshotAndObserveParams | (private) |

## extensions/browser/src/browser/cdp.test.ts (1078 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | startWsServer | (private) |
| 46 | fn | startWsServerWithMessages | (private) |
| 82 | fn | startVersionHttpServer | (private) |

## extensions/browser/src/browser/cdp.ts (924 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | normalizeCdpWsUrl | pub |
| 76 | fn | captureScreenshot | pub |
| 193 | fn | createTargetViaCdp | pub |
| 300 | type | AriaSnapshotNode | pub |
| 315 | type | RawAXNode | pub |
| 325 | fn | axValue | (private) |
| 340 | fn | formatAriaSnapshot | pub |
| 409 | fn | snapshotAria | pub |
| 430 | type | CdpRoleRef | (private) |
| 439 | type | CdpRoleSnapshotOptions | (private) |
| 445 | type | CursorInteractiveInfo | (private) |
| 455 | type | RoleTreeNode | (private) |
| 471 | fn | buildRoleTree | (private) |
| 522 | fn | shouldIncludeRoleNode | (private) |
| 536 | fn | cursorSuffix | (private) |
| 550 | fn | escapeRoleSnapshotValue | (private) |
| 558 | fn | renderRoleTree | (private) |
| 585 | fn | findCursorInteractiveElements | (private) |
| 590 | fn | evaluated | (private) |
| 693 | fn | resolveLinkUrls | (private) |
| 731 | fn | resolveIframeFrameIds | (private) |
| 758 | fn | buildCdpRoleSnapshot | (private) |
| 889 | fn | snapshotRoleViaCdp | pub |

## extensions/browser/src/browser/chrome-mcp.ownership.test.ts (556 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | type | ToolCall | (private) |
| 56 | type | FakePage | (private) |
| 62 | fn | createSerialLock | (private) |
| 74 | fn | createMarkerSession | (private) |
| 80 | fn | readUrl | (private) |
| 148 | fn | ownershipOf | (private) |
| 152 | fn | fixtureCdpEndpoint | (private) |

## extensions/browser/src/browser/chrome-mcp.test.ts (3059 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | ToolCall | (private) |
| 40 | type | ToolCallMock | (private) |
| 46 | fn | waitForChromeMcpState | (private) |
| 50 | fn | createSdkTimeoutCallTool | (private) |
| 62 | fn | fakeListPagesResult | (private) |
| 68 | type | ChromeMcpSessionFactory | (private) |
| 72 | type | ChromeMcpSession | (private) |
| 78 | fn | processSnapshot | (private) |
| 82 | fn | createFakeSession | (private) |
| 86 | fn | readUrlArg | (private) |
| 178 | fn | createToolErrorSession | (private) |
| 197 | type | SessionPage | (private) |
| 199 | fn | createPageSession | (private) |
| 1046 | fn | argsFor | (private) |

## extensions/browser/src/browser/chrome-mcp.ts (2685 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | ChromeMcpStructuredPage | (private) |
| 58 | type | ChromeMcpToolResult | (private) |
| 64 | type | ChromeMcpSession | (private) |
| 73 | type | ChromeMcpRoutingState | (private) |
| 82 | type | ChromeMcpOperationOptions | pub |
| 87 | type | ChromeMcpOpenOptions | (private) |
| 92 | type | ChromeMcpTargetOperation | (private) |
| 99 | class | ChromeMcpDocumentUnavailableError | pub |
| 106 | fn | rethrowChromeMcpDocumentError | (private) |
| 118 | type | ChromeMcpCallOptions | (private) |
| 125 | type | ChromeMcpProfileOptions | pub |
| 132 | type | NormalizedChromeMcpProfileOptions | (private) |
| 138 | type | ChromeMcpOptionsInput | (private) |
| 140 | type | ChromeMcpSessionLease | (private) |
| 146 | type | ChromeMcpSessionFactory | (private) |
| 151 | type | PendingChromeMcpSession | (private) |
| 166 | type | PendingChromeMcpSessionLease | (private) |
| 172 | type | ChromeMcpProcessSnapshot | (private) |
| 179 | type | ChromeMcpProcessCleanupDeps | (private) |
| 187 | type | ChromeMcpOwnedProcess | (private) |
| 192 | type | ChromeMcpProcessCleanupTarget | (private) |
| 197 | type | ChromeMcpProcessCleanupState | (private) |
| 235 | class | ChromeMcpReconnectRequiredError | (private) |
| 236 | class | ChromeMcpProcessSnapshotError | (private) |
| 246 | fn | decodeChromeMcpStderrTail | pub |
| 250 | fn | asPages | (private) |
| 269 | fn | getChromeMcpRoutingState | (private) |
| 284 | fn | withChromeMcpOperationLock | (private) |
| 316 | fn | cancel | (private) |
| 357 | fn | clearChromeMcpSnapshotRefsForTarget | (private) |
| 368 | fn | updateChromeMcpTargetMappings | (private) |
| 380 | fn | wrapChromeMcpSnapshotRefs | (private) |
| 411 | fn | resolveChromeMcpSnapshotRef | (private) |
| 423 | fn | extractStructuredContent | (private) |
| 427 | fn | extractTextContent | (private) |
| 437 | fn | extractTextPages | (private) |
| 455 | fn | extractStructuredPages | (private) |
| 460 | fn | extractSnapshot | (private) |
| 469 | fn | extractJsonBlock | (private) |
| 475 | fn | extractMessageText | (private) |
| 484 | fn | extractToolErrorMessage | (private) |
| 489 | fn | formatChromeMcpEndpointForDiagnostic | (private) |
| 493 | fn | formatChromeMcpToolErrorMessage | (private) |
| 524 | fn | shouldReconnectForToolError | (private) |
| 528 | fn | extractJsonMessage | (private) |
| 546 | fn | normalizeChromeMcpUserDataDir | (private) |
| 551 | fn | normalizeChromeMcpStringList | (private) |
| 559 | fn | normalizeChromeMcpOptions | (private) |
| 575 | fn | hasFlag | (private) |
| 582 | fn | isChromeMcpWebSocketEndpoint | (private) |
| 586 | fn | buildChromeMcpConnectionArgs | (private) |
| 598 | fn | buildChromeMcpUserDataDirArgs | (private) |
| 610 | fn | buildChromeMcpSessionCacheKey | (private) |
| 623 | fn | chromeMcpProfileOptionsFromParams | (private) |
| 630 | fn | cacheKeyMatchesProfileName | (private) |
| 639 | fn | closeChromeMcpSessionsForProfile | (private) |
| 688 | fn | buildChromeMcpArgsFromOptions | (private) |
| 705 | fn | drainStderr | (private) |
| 718 | fn | redactChromeMcpDiagnosticText | (private) |
| 722 | fn | redactChromeMcpDiagnosticTextWithLocalPaths | (private) |
| 729 | fn | redactChromeMcpLocalPathForDiagnostic | (private) |
| 745 | fn | redactChromeMcpProfileLabelForDiagnostic | (private) |
| 751 | fn | readChromeMcpTransportPid | (private) |
| 758 | fn | parseChromeMcpLinuxStat | (private) |
| 765 | fn | listChromeMcpLinuxProcesses | (private) |
| 783 | fn | parseChromeMcpDelimitedProcessList | (private) |
| 800 | fn | parseChromeMcpUnixProcessListForTest | pub |
| 808 | fn | listChromeMcpPlatformProcesses | (private) |
| 851 | fn | captureChromeMcpProcessTarget | (private) |
| 881 | fn | sameChromeMcpProcesses | (private) |
| 889 | fn | cleanupTarget | (private) |
| 895 | fn | refreshChromeMcpCleanupProcess | (private) |
| 903 | fn | refresh | (private) |
| 946 | fn | taskkillChromeMcpProcessTree | (private) |
| 961 | fn | currentChromeMcpProcesses | (private) |
| 968 | fn | terminateChromeMcpProcessTree | (private) |
| 1033 | fn | closeChromeMcpSessionHandle | (private) |
| 1036 | fn | attempt | (private) |
| 1067 | fn | closeTrackedChromeMcpSession | (private) |
| 1084 | fn | cleanup | (private) |
| 1099 | fn | drainRetainedChromeMcpCleanup | (private) |
| 1113 | fn | drainChromeMcpCleanupForKey | (private) |
| 1121 | fn | hasChromeMcpCleanupForKey | (private) |
| 1128 | fn | withChromeMcpHandshakeTimeout | (private) |
| 1147 | fn | createRealSession | (private) |
| 1163 | fn | getStderr | (private) |
| 1170 | fn | requireSession | (private) |
| 1171 | fn | ready | (private) |
| 1213 | fn | waitForChromeMcpReady | (private) |
| 1264 | fn | waitForChromeMcpPendingSession | (private) |
| 1292 | fn | createChromeMcpSession | (private) |
| 1301 | fn | closeCreated | (private) |
| 1305 | fn | promise | (private) |
| 1314 | fn | cleanup | (private) |
| 1328 | fn | abortPendingChromeMcpSession | (private) |
| 1338 | fn | forgetCancelledChromeMcpPendingSession | (private) |
| 1344 | fn | drainCancelledChromeMcpPendingSession | (private) |
| 1361 | fn | forgetCachedChromeMcpSessionIfCurrent | (private) |
| 1373 | fn | forgetPendingChromeMcpSessionIfCurrent | (private) |
| 1384 | fn | createSharedPendingChromeMcpSession | (private) |
| 1398 | fn | promise | (private) |
| 1431 | fn | waitForSharedPendingChromeMcpSession | (private) |
| 1438 | fn | release | (private) |
| 1464 | fn | releaseOnAbort | (private) |
| 1488 | fn | getSession | (private) |
| 1582 | fn | getExistingSession | (private) |
| 1654 | fn | createEphemeralSession | (private) |
| 1678 | fn | leaseSession | (private) |
| 1732 | fn | callTool | (private) |
| 1806 | fn | callTargetTool | (private) |
| 1824 | type | ChromeMcpPinnedTarget | (private) |
| 1830 | fn | withChromeMcpLease | (private) |
| 1864 | fn | listChromeMcpTargetsWithLease | (private) |
| 1881 | fn | registerChromeMcpTargets | (private) |
| 1909 | fn | withChromeMcpTarget | (private) |
| 1935 | fn | withTempFile | (private) |
| 1946 | fn | ensureChromeMcpAvailable | pub |
| 1955 | fn | getChromeMcpPid | pub |
| 1972 | fn | closeChromeMcpSession | pub |
| 1977 | fn | stopAllChromeMcpSessions | (private) |
| 1996 | fn | readChromeMcpTabs | (private) |
| 2033 | fn | listChromeMcpTabs | pub |
| 2045 | fn | countChromeMcpTabs | pub |
| 2053 | fn | lookupChromeMcpMarkerNativeTarget | (private) |
| 2086 | fn | captureChromeMcpTabOwnership | (private) |
| 2126 | fn | openChromeMcpTab | pub |
| 2172 | fn | closeUntrackedPage | (private) |
| 2296 | fn | focusChromeMcpTab | pub |
| 2316 | fn | closeChromeMcpTab | pub |
| 2352 | fn | navigateChromeMcpPage | pub |
| 2394 | fn | resolveChromeMcpNavigateCallTimeoutMs | pub |
| 2399 | fn | takeChromeMcpSnapshot | pub |
| 2420 | fn | withChromeMcpDocument | pub |
| 2466 | fn | takeChromeMcpScreenshot | pub |
| 2488 | fn | clickChromeMcpElement | pub |
| 2501 | fn | clickChromeMcpCoords | pub |
| 2536 | fn | dispatch | (private) |
| 2558 | fn | fillChromeMcpElement | pub |
| 2568 | fn | fillChromeMcpForm | pub |
| 2582 | fn | hoverChromeMcpElement | pub |
| 2591 | fn | dragChromeMcpElement | pub |
| 2601 | fn | uploadChromeMcpFile | pub |
| 2611 | fn | pressChromeMcpKey | pub |
| 2620 | fn | resizeChromeMcpPage | pub |
| 2630 | fn | evaluateChromeMcpScript | pub |
| 2647 | fn | setChromeMcpSessionFactoryForTest | pub |
| 2652 | fn | setChromeMcpProcessCleanupDepsForTest | pub |
| 2659 | fn | resetChromeMcpSessionsForTest | pub |
| 2672 | fn | toLintErrorObject | (private) |

## extensions/browser/src/browser/chrome.executables.ts (908 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | BrowserExecutable | pub |
| 111 | fn | exists | (private) |
| 119 | fn | execText | (private) |
| 137 | fn | inferKindFromIdentifier | (private) |
| 162 | fn | inferKindFromExecutableName | (private) |
| 182 | fn | detectDefaultChromiumExecutable | (private) |
| 195 | fn | detectDefaultChromiumExecutableMac | (private) |
| 224 | fn | detectDefaultBrowserBundleIdMac | (private) |
| 251 | fn | resolveScheme | (private) |
| 275 | fn | detectDefaultChromiumExecutableLinux | (private) |
| 309 | fn | detectDefaultChromiumExecutableWindows | (private) |
| 336 | fn | resolveDirectWindowsBrowserExecutable | (private) |
| 357 | fn | findDesktopFilePath | (private) |
| 372 | fn | readDesktopExecLine | (private) |
| 387 | fn | extractExecutableFromExecLine | (private) |
| 404 | fn | splitExecLine | (private) |
| 435 | fn | resolveLinuxExecutablePath | (private) |
| 447 | fn | readWindowsProgId | (private) |
| 461 | fn | readWindowsCommandForProgId | (private) |
| 474 | fn | expandWindowsEnvVars | (private) |
| 481 | fn | extractWindowsExecutablePath | (private) |
| 493 | fn | findFirstExecutable | (private) |
| 503 | fn | findFirstChromeExecutable | (private) |
| 523 | fn | findPlaywrightChromiumExecutableCandidatesLinux | (private) |
| 541 | fn | getPlaywrightBrowserCachePaths | (private) |
| 557 | fn | readSortedDirNames | (private) |
| 566 | fn | findChromeExecutableMac | (private) |
| 619 | fn | findGoogleChromeExecutableMac | (private) |
| 632 | fn | findChromeExecutableLinux | (private) |
| 656 | fn | findGoogleChromeExecutableLinux | (private) |
| 668 | fn | findChromeExecutableWindows | (private) |
| 738 | fn | findGoogleChromeExecutableWindows | (private) |
| 757 | fn | resolveGoogleChromeExecutableForPlatform | pub |
| 773 | fn | readBrowserVersion | pub |
| 794 | fn | readMacBundleBrowserVersion | (private) |
| 809 | fn | readWindowsBrowserVersion | (private) |
| 851 | fn | resolveMacAppBundlePath | (private) |
| 861 | fn | parseBrowserMajorVersion | pub |
| 872 | fn | resolveBrowserExecutableForPlatform | pub |

## extensions/browser/src/browser/chrome.internal.test.ts (2150 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 82 | type | FakeProc | (private) |
| 91 | fn | makeFakeProc | (private) |
| 109 | fn | makeFailedSpawnProc | (private) |
| 115 | fn | stubBrowserExecutableAndPrefs | (private) |
| 127 | fn | requireSpawnCall | (private) |
| 135 | fn | requireSpawnOptions | (private) |
| 143 | fn | effectiveSpawnCommand | (private) |
| 157 | fn | mockExpiredLaunchPollingClock | (private) |
| 165 | fn | deferred | (private) |
| 175 | fn | linuxProcStatLine | (private) |
| 203 | fn | linuxTcpTableForPort | (private) |
| 211 | fn | mockLinuxManagedChromeOwnership | (private) |
| 263 | fn | withMockChromeCdpServer | (private) |
| 2051 | fn | stubExecutableAndPrefsExist | (private) |

## extensions/browser/src/browser/chrome.test.ts (857 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | StopChromeTarget | (private) |
| 28 | type | ChromeCdpDiagnostic | (private) |
| 30 | fn | expectFailedChromeCdpDiagnostic | (private) |
| 39 | fn | expectReadyChromeCdpDiagnostic | (private) |
| 48 | fn | jsonResponse | (private) |
| 55 | fn | withMockChromeCdpServer | (private) |
| 102 | fn | stopChromeWithProc | (private) |
| 113 | fn | makeChromeTestProc | (private) |

## extensions/browser/src/browser/chrome.ts (1456 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 108 | fn | exists | (private) |
| 116 | fn | diagnosticShowsChromeHttpDiscovery | (private) |
| 126 | type | ChromeLaunchStderrSignals | (private) |
| 131 | fn | createChromeLaunchStderrDiagnostics | (private) |
| 139 | fn | updateSignals | (private) |
| 169 | fn | processExists | (private) |
| 184 | fn | readSingletonLockTarget | (private) |
| 203 | fn | readLinuxProcessStartTime | (private) |
| 215 | fn | readLinuxProcessArgv | (private) |
| 229 | fn | readPsCommandLine | (private) |
| 245 | fn | readPsStartTime | (private) |
| 261 | fn | readManagedProcessCommandLine | (private) |
| 292 | fn | isChromeExecutableFamilyMatch | (private) |
| 317 | fn | processCommandHasArg | (private) |
| 327 | fn | commandLineMatchesManagedChrome | (private) |
| 340 | fn | parseLinuxTcpListenInodesForPort | (private) |
| 356 | fn | readLinuxTcpListenInodesForPort | (private) |
| 373 | fn | linuxPidOwnsAnySocketInode | (private) |
| 398 | fn | linuxPidListensOnPort | (private) |
| 402 | fn | lsofShowsPidListeningOnPort | (private) |
| 415 | fn | pidListensOnPort | (private) |
| 425 | type | ManagedChromeProcessIdentity | (private) |
| 431 | fn | sameManagedChromeIdentity | (private) |
| 438 | fn | readOwnedManagedChromeIdentity | (private) |
| 466 | fn | isPortInUseError | (private) |
| 477 | fn | readCurrentHostSingletonPid | (private) |
| 485 | fn | clearChromeSingletonArtifacts | (private) |
| 496 | fn | clearStaleChromeSingletonLocks | (private) |
| 520 | fn | waitForChromeProcessExit | (private) |
| 527 | fn | cleanup | (private) |
| 536 | fn | onExit | (private) |
| 548 | fn | signalChromeProcess | (private) |
| 564 | fn | terminateChromeForRetry | (private) |
| 572 | fn | waitForPidExit | (private) |
| 585 | fn | terminateOwnedStaleChromeProcess | (private) |
| 594 | fn | readCurrentIdentity | (private) |
| 625 | fn | clearRecoveredChromeSingletonArtifacts | (private) |
| 634 | fn | recoverOwnedStaleManagedChromeCdpListener | (private) |
| 687 | fn | ensureManagedChromePortAvailable | (private) |
| 695 | fn | ensureProbeHostsAvailable | (private) |
| 718 | fn | chromeLaunchHints | (private) |
| 754 | type | RunningChrome | pub |
| 770 | class | ManagedChromeCleanupError | pub |
| 782 | fn | resolveBrowserExecutable | (private) |
| 793 | fn | resolveOpenClawUserDataDir | pub |
| 797 | fn | cdpUrlForPort | (private) |
| 802 | fn | buildOpenClawChromeLaunchArgs | (private) |
| 854 | fn | canOpenWebSocket | (private) |
| 867 | fn | isChromeReachable | pub |
| 899 | fn | fetchChromeVersion | (private) |
| 912 | fn | getChromeWebSocketUrl | pub |
| 952 | fn | isChromeCdpReady | pub |
| 965 | type | ManagedBrowserLaunchOptions | (private) |
| 967 | fn | waitForManagedLaunchPoll | (private) |
| 978 | fn | launchOpenClawChrome | pub |
| 1053 | fn | spawnOnce | (private) |
| 1083 | fn | onAbort | (private) |
| 1209 | fn | onStderr | (private) |
| 1335 | fn | cdpProcessListOwnsBrowser | (private) |
| 1353 | fn | isChromeCdpOwnedByPid | pub |
| 1382 | fn | requestGracefulChromeClose | (private) |
| 1427 | fn | stopOpenClawChrome | pub |

## extensions/browser/src/browser/client-fetch.loopback-auth.test.ts (883 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | type | BridgeAuth | (private) |
| 34 | fn | okDispatchResponse | (private) |
| 84 | fn | stubJsonFetchOk | (private) |
| 96 | fn | requireFetchInit | (private) |
| 105 | fn | expectThrownBrowserFetchError | (private) |

## extensions/browser/src/browser/client-fetch.ts (523 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | class | BrowserServiceError | pub |
| 43 | fn | browserServiceErrorFromPayload | (private) |
| 58 | type | LoopbackBrowserAuthDeps | (private) |
| 64 | fn | isAbsoluteHttp | (private) |
| 68 | fn | isLoopbackHttpUrl | (private) |
| 76 | fn | withLoopbackBrowserAuthImpl | (private) |
| 121 | fn | withLoopbackBrowserAuth | (private) |
| 150 | fn | isRateLimitStatus | (private) |
| 154 | type | BrowserControlOwnership | (private) |
| 156 | fn | resolveDispatcherBrowserControlOwnership | (private) |
| 177 | fn | resolveBrowserFetchOperatorHint | (private) |
| 193 | fn | normalizeErrorMessage | (private) |
| 201 | fn | appendBrowserToolModelHint | (private) |
| 209 | type | BrowserFetchFailureKind | (private) |
| 211 | fn | resolveBrowserFetchTimeoutMs | (private) |
| 215 | fn | classifyBrowserFetchFailure | (private) |
| 246 | fn | isPersistentBrowserServiceFailure | (private) |
| 250 | fn | resolveBrowserServiceModelHint | (private) |
| 275 | fn | resolveBrowserToolModelHint | (private) |
| 282 | fn | discardResponseBody | (private) |
| 290 | fn | enhanceDispatcherPathError | (private) |
| 301 | fn | enhanceBrowserFetchError | (private) |
| 332 | fn | fetchHttpJson | (private) |
| 403 | fn | fetchBrowserJson | pub |
| 511 | fn | toLintErrorObject | (private) |

## extensions/browser/src/browser/config.test.ts (1101 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | writeRelaySecret | (private) |
| 42 | fn | withEnv | (private) |

## extensions/browser/src/browser/config.ts (692 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | BrowserSsrFPolicyCompat | (private) |
| 64 | type | ResolvedBrowserConfig | pub |
| 98 | type | ResolvedBrowserTabCleanupConfig | pub |
| 106 | type | ResolvedBrowserProfile | pub |
| 124 | fn | getOwnBrowserProfile | pub |
| 146 | type | ManagedBrowserHeadlessSource | pub |
| 154 | type | ManagedBrowserHeadlessMode | (private) |
| 159 | type | ManagedBrowserMissingDisplayError | (private) |
| 165 | type | ManagedBrowserHeadlessOptions | pub |
| 171 | fn | normalizeHexColor | (private) |
| 183 | fn | normalizeExecutablePath | (private) |
| 194 | fn | normalizeExistingSessionCdpUrl | (private) |
| 225 | fn | hasLinuxDisplay | (private) |
| 229 | fn | isLocalManagedProfile | (private) |
| 233 | fn | resolveBrowserTabCleanupConfig | (private) |
| 247 | fn | resolveBrowserSsrFPolicy | (private) |
| 280 | fn | ensureDefaultProfile | (private) |
| 298 | fn | ensureDefaultUserBrowserProfile | (private) |
| 314 | fn | ensureDefaultChromeExtensionProfile | (private) |
| 335 | fn | resolveExtensionRelayPorts | (private) |
| 350 | fn | applyLegacyCdpUrlToExistingSessionDefaultProfile | (private) |
| 376 | fn | resolveBrowserConfig | pub |
| 500 | fn | resolveProfile | pub |
| 621 | fn | resolveManagedBrowserHeadlessMode | pub |
| 654 | fn | getManagedBrowserMissingDisplayError | pub |

## extensions/browser/src/browser/paths.test.ts (535 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | createFixtureRoot | (private) |
| 25 | fn | withFixtureRoot | (private) |
| 36 | fn | createAliasedUploadsRoot | (private) |
| 48 | fn | expectInvalidResult | (private) |
| 58 | fn | resolveWithinUploads | (private) |

## extensions/browser/src/browser/profiles-service.test.ts (878 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 106 | fn | createCtx | (private) |
| 125 | fn | deferred | (private) |
| 133 | fn | createWorkProfileWithConfig | (private) |
| 144 | fn | writtenBrowserConfig | (private) |

## extensions/browser/src/browser/pw-role-snapshot.ts (516 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | RoleRef | (private) |
| 19 | type | RoleRefMap | pub |
| 21 | type | RoleSnapshotStats | (private) |
| 33 | type | RoleSnapshotOptions | pub |
| 43 | fn | getRoleSnapshotStats | (private) |
| 56 | fn | findSnapshotLineRef | (private) |
| 60 | fn | truncateRoleSnapshot | (private) |
| 75 | fn | finalizeRoleSnapshot | pub |
| 109 | fn | getIndentLevel | (private) |
| 115 | fn | matchInteractiveSnapshotLine | (private) |
| 145 | type | RoleNameTracker | (private) |
| 154 | fn | createRoleNameTracker | (private) |
| 187 | fn | removeNthFromNonDuplicates | (private) |
| 197 | fn | compactTree | (private) |
| 202 | fn | finishEntry | (private) |
| 244 | fn | processLine | (private) |
| 312 | type | InteractiveSnapshotLine | (private) |
| 314 | fn | buildInteractiveSnapshotLines | (private) |
| 353 | fn | parseRoleRef | pub |
| 373 | fn | buildRoleSnapshotFromAriaSnapshot | pub |
| 382 | fn | nextRef | (private) |
| 432 | fn | parseAiSnapshotRef | (private) |
| 446 | fn | buildRoleSnapshotFromAiSnapshot | pub |

## extensions/browser/src/browser/pw-session.connections.test.ts (634 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | BrowserMockBundle | (private) |
| 24 | fn | makeBrowser | (private) |
| 54 | fn | makeEmptyBrowser | (private) |
| 72 | fn | makeDisconnectedReadBrowser | (private) |
| 103 | fn | makeStuckPageTargetBrowser | (private) |
| 140 | fn | makeMutatingDisconnectBrowser | (private) |

## extensions/browser/src/browser/pw-session.create-page.navigation-guard.test.ts (1279 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | MockRoute | (private) |
| 43 | type | MockRequest | (private) |
| 52 | type | MockRouteHandler | (private) |
| 54 | fn | installBrowserMocks | (private) |
| 123 | fn | getBrowserDisconnectedHandler | (private) |
| 147 | fn | createMockRoute | (private) |
| 157 | fn | dispatchMockNavigation | (private) |
| 193 | fn | mockBlockedRedirectNavigation | (private) |

## extensions/browser/src/browser/pw-session.test.ts (910 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | MutableDownload | (private) |
| 30 | fn | fakePage | (private) |
| 97 | fn | firstSavePath | (private) |
| 332 | fn | onUnhandled | (private) |
| 447 | fn | save | (private) |

## extensions/browser/src/browser/pw-session.ts (2667 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 66 | type | BrowserConsoleMessage | pub |
| 74 | type | BrowserPageError | pub |
| 82 | type | BrowserNetworkRequest | pub |
| 94 | type | BrowserObservedDialogRecord | (private) |
| 105 | type | BrowserObservedDialogState | (private) |
| 111 | type | BrowserObservedState | (private) |
| 123 | fn | forwardedBrowserResponseHeaders | (private) |
| 133 | fn | browserRequestHeaders | (private) |
| 147 | fn | fulfillPinnedBrowserNavigation | (private) |
| 185 | fn | admitAndMaybeFulfillPinnedBrowserRequest | (private) |
| 237 | class | BrowserObservedDialogBlockedError | (private) |
| 248 | fn | isBrowserObservedDialogBlockedError | pub |
| 254 | type | PendingObservedDialog | (private) |
| 258 | type | ArmedDialogResponse | (private) |
| 265 | type | TargetInfoResponse | (private) |
| 271 | type | ConnectedBrowser | (private) |
| 277 | type | DownloadPayload | (private) |
| 281 | type | ActionDownloadCapture | (private) |
| 289 | type | PageState | (private) |
| 323 | type | RoleRefs | (private) |
| 324 | type | RoleRefsCacheEntry | (private) |
| 330 | type | ContextState | (private) |
| 351 | type | PendingBrowserConnection | (private) |
| 356 | type | PlaywrightConnectionRetirement | pub |
| 371 | fn | resolveObservedDialogTimeoutMs | (private) |
| 376 | fn | normalizeCdpUrl | (private) |
| 380 | fn | resolveCdpConnectRetryDelayMs | (private) |
| 384 | fn | isDownloadStartingNavigationError | pub |
| 396 | fn | beginActionDownloadCaptureOnPage | pub |
| 419 | fn | detach | (private) |
| 430 | fn | waitForEvent | (private) |
| 432 | fn | finish | (private) |
| 444 | fn | remainingBudgetMs | (private) |
| 473 | fn | hasCachedPlaywrightBrowserConnection | (private) |
| 477 | fn | isRecoverablePlaywrightDisconnectError | (private) |
| 490 | fn | isRecoverableStalePageSelectionError | (private) |
| 507 | fn | findNetworkRequestById | (private) |
| 517 | fn | appendRecentDialog | (private) |
| 524 | fn | serializeDialogRecord | (private) |
| 536 | fn | serializePendingDialog | (private) |
| 540 | fn | serializeObservedBrowserState | (private) |
| 549 | fn | clearArmedDialogResponse | (private) |
| 556 | fn | abortActionsBlockedByDialog | (private) |
| 569 | fn | isNoDialogShowingError | (private) |
| 574 | fn | settleObservedDialog | (private) |
| 614 | fn | observeDialog | (private) |
| 646 | fn | targetKey | (private) |
| 650 | fn | roleRefsKey | (private) |
| 654 | fn | bindRoleRefsTarget | (private) |
| 681 | fn | isBlockedTarget | (private) |
| 689 | fn | markTargetBlocked | (private) |
| 697 | fn | clearBlockedTarget | (private) |
| 705 | fn | clearBlockedTargetsForCdpUrl | (private) |
| 718 | fn | blockedPageRefsForCdpUrl | (private) |
| 729 | fn | isBlockedPageRef | (private) |
| 733 | fn | markPageRefBlocked | (private) |
| 737 | fn | clearBlockedPageRefsForCdpUrl | (private) |
| 745 | fn | clearBlockedPageRef | (private) |
| 749 | fn | takeCachedPlaywrightBrowserConnection | (private) |
| 769 | fn | retainClosingPlaywrightConnection | (private) |
| 775 | fn | releaseClosingPlaywrightConnection | (private) |
| 783 | fn | closeTrackedPlaywrightConnection | (private) |
| 792 | fn | closing | (private) |
| 805 | fn | withPlaywrightCloseTimeout | (private) |
| 826 | fn | retirePlaywrightBrowserConnectionExact | pub |
| 836 | fn | startClosing | (private) |
| 846 | fn | awaitClosing | (private) |
| 863 | fn | capture | (private) |
| 915 | fn | retirePlaywrightBrowserConnection | pub |
| 919 | fn | evictStalePlaywrightBrowserConnection | (private) |
| 930 | fn | hasBlockedTargetsForCdpUrl | (private) |
| 941 | class | BlockedBrowserTargetError | (private) |
| 949 | fn | rememberRoleRefsForTarget | (private) |
| 984 | fn | storeRoleRefsForTarget | pub |
| 1017 | fn | clearRoleRefs | (private) |
| 1034 | fn | currentTargetRoleRefsMode | (private) |
| 1045 | fn | restoreRoleRefsForTarget | pub |
| 1071 | fn | ensurePageState | pub |
| 1245 | fn | getObservedBrowserStateForPage | pub |
| 1251 | fn | getObservedBrowserStateViaPlaywright | pub |
| 1260 | fn | resolvePendingDialogForResponse | (private) |
| 1282 | fn | respondToObservedDialogOnPage | pub |
| 1304 | fn | markObservedDialogsHandledRemotelyForPage | pub |
| 1323 | fn | armObservedDialogResponseOnPage | pub |
| 1350 | fn | createObservedDialogAbortSignalForPage | pub |
| 1356 | fn | abortForCurrentDialog | (private) |
| 1361 | fn | abortForParent | (private) |
| 1389 | fn | observeContext | (private) |
| 1403 | fn | ensureContextState | pub |
| 1413 | fn | observeBrowser | (private) |
| 1419 | fn | connectBrowser | (private) |
| 1452 | fn | connectEndpoint | (private) |
| 1474 | fn | onDisconnected | (private) |
| 1517 | fn | getAllPages | (private) |
| 1523 | fn | partitionAccessiblePages | (private) |
| 1556 | fn | pageTargetId | (private) |
| 1567 | fn | getPageForTargetIdOnce | (private) |
| 1605 | fn | getPageForTargetId | pub |
| 1622 | type | BrowserDocumentNavigationRequestKind | (private) |
| 1625 | fn | classifyBrowserDocumentNavigationRequest | (private) |
| 1661 | fn | isPolicyDenyNavigationError | pub |
| 1670 | fn | quarantineBlockedNavigationTarget | pub |
| 1690 | fn | closeBlockedNavigationTarget | pub |
| 1702 | fn | assertPageNavigationCompletedSafely | pub |
| 1736 | fn | continueRouteSafely | (private) |
| 1748 | fn | fallbackRouteSafely | (private) |
| 1762 | fn | removePageNavigationRequestGuard | (private) |
| 1784 | fn | wasBrowserNavigationSourcePreservedAfterPolicyDenial | pub |
| 1789 | fn | withPageNavigationRequestGuard | pub |
| 1821 | fn | recordGuardError | (private) |
| 1831 | fn | emitPolicyDenied | (private) |
| 1842 | fn | updateImmediateSourcePreservation | (private) |
| 1871 | fn | notifyPolicyDeniedDetected | (private) |
| 1878 | fn | stopGuardedRoute | (private) |
| 1905 | fn | handleRoute | (private) |
| 1977 | fn | handler | (private) |
| 2060 | fn | gotoPageWithNavigationGuard | pub |
| 2077 | fn | handler | (private) |
| 2175 | fn | refLocator | pub |
| 2235 | fn | closePlaywrightBrowserConnection | pub |
| 2263 | fn | cdpSocketNeedsAttach | (private) |
| 2274 | fn | tryTerminateExecutionViaCdp | (private) |
| 2370 | fn | forceDisconnectPlaywrightForTarget | pub |
| 2397 | fn | withPlaywrightSafeReadReconnect | (private) |
| 2421 | fn | readPagesViaPlaywright | (private) |
| 2491 | fn | listPagesViaPlaywright | pub |
| 2539 | fn | createPageViaPlaywright | pub |
| 2632 | fn | closePageByTargetIdViaPlaywright | pub |
| 2645 | fn | focusPageByTargetIdViaPlaywright | pub |
| 2654 | fn | toLintErrorObject | (private) |

## extensions/browser/src/browser/pw-tools-core.browser-ssrf-guard.test.ts (1319 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | fn | requireInvocationOrder | (private) |
| 64 | fn | createSnapshotPage | (private) |

## extensions/browser/src/browser/pw-tools-core.interactions.navigation-guard.test.ts (1739 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | requireInvocationOrder | (private) |
| 19 | fn | createMutableFrame | (private) |
| 31 | fn | runWithVirtualNavigationGrace | (private) |

## extensions/browser/src/browser/pw-tools-core.interactions.ts (2125 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | type | TargetOpts | (private) |
| 69 | fn | interactionNavigationPolicy | (private) |
| 79 | fn | hasInteractionNavigationPolicy | (private) |
| 83 | type | NavigationObservablePage | (private) |
| 91 | fn | resolveBoundedDelayMs | (private) |
| 102 | fn | getRestoredPageForTarget | (private) |
| 109 | fn | toFriendlyInteractionError | (private) |
| 113 | fn | reconcileRemoteDialogAfterActionSettled | (private) |
| 119 | fn | throwIfInteractionAborted | (private) |
| 131 | fn | didCrossDocumentUrlChange | (private) |
| 158 | fn | isHashOnlyNavigation | (private) |
| 175 | fn | isMainFrameNavigation | (private) |
| 182 | fn | assertSubframeNavigationAllowed | (private) |
| 201 | type | ObservedDelayedNavigations | (private) |
| 206 | fn | snapshotNetworkFrameUrl | (private) |
| 215 | fn | assertObservedDelayedNavigations | (private) |
| 246 | fn | observeDelayedInteractionNavigation | (private) |
| 259 | fn | onFrameNavigated | (private) |
| 283 | fn | cleanup | (private) |
| 296 | fn | scheduleDelayedInteractionNavigationGuard | (private) |
| 325 | fn | settle | (private) |
| 334 | fn | onFrameNavigated | (private) |
| 370 | fn | cleanup | (private) |
| 383 | fn | assertInteractionNavigationCompletedSafely | (private) |
| 403 | fn | onFrameNavigated | (private) |
| 491 | fn | awaitActionWithAbort | (private) |
| 511 | fn | awaitNavigationGuardedInteraction | (private) |
| 522 | type | PolicyCheckOutcome | (private) |
| 528 | fn | quarantineUnsafeSource | (private) |
| 625 | fn | createAbortPromise | (private) |
| 632 | fn | createAbortPromiseWithListener | (private) |
| 669 | fn | highlightViaPlaywright | pub |
| 684 | fn | clickViaPlaywright | pub |
| 725 | fn | reconcileRemoteDialog | (private) |
| 775 | fn | clickCoordsViaPlaywright | (private) |
| 790 | fn | reconcileRemoteDialog | (private) |
| 812 | fn | hoverViaPlaywright | pub |
| 829 | fn | reconcileRemoteDialog | (private) |
| 854 | fn | dragViaPlaywright | pub |
| 878 | fn | reconcileRemoteDialog | (private) |
| 903 | fn | selectOptionViaPlaywright | pub |
| 924 | fn | reconcileRemoteDialog | (private) |
| 950 | fn | pressKeyViaPlaywright | pub |
| 966 | fn | reconcileRemoteDialog | (private) |
| 990 | fn | typeViaPlaywright | pub |
| 1012 | fn | reconcileRemoteDialog | (private) |
| 1046 | fn | fillFormViaPlaywright | pub |
| 1058 | fn | reconcileRemoteDialog | (private) |
| 1105 | fn | evaluateViaPlaywright | pub |
| 1155 | fn | reconcileRemoteDialog | (private) |
| 1252 | fn | scrollIntoViewViaPlaywright | pub |
| 1271 | fn | reconcileRemoteDialog | (private) |
| 1292 | type | BrowserWaitPredicateState | (private) |
| 1299 | fn | createBrowserWaitPredicate | (private) |
| 1333 | fn | waitForViaPlaywright | pub |
| 1355 | fn | reconcileRemoteDialog | (private) |
| 1364 | fn | runWaitSequence | (private) |
| 1454 | fn | takeScreenshotViaPlaywright | pub |
| 1492 | fn | screenshotWithLabelsViaPlaywright | pub |
| 1626 | fn | resolveElementBoundingBoxForLabels | (private) |
| 1648 | fn | captureElementScreenshotForLabels | (private) |
| 1665 | fn | setFileChooserFilesViaPlaywright | pub |
| 1686 | fn | setInputFilesViaPlaywright | pub |
| 1732 | fn | executeSingleAction | (private) |
| 1922 | fn | actionUsesNavigationRequestGuard | (private) |
| 1936 | fn | actionNeedsStandaloneDownloadGrace | (private) |
| 1948 | fn | executeActViaPlaywright | pub |
| 1985 | fn | drainDownloads | (private) |
| 2060 | fn | batchViaPlaywright | pub |
| 2112 | fn | toLintErrorObject | (private) |

## extensions/browser/src/browser/pw-tools-core.snapshot.ts (642 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | fn | resolveBoundedTimeoutMs | (private) |
| 54 | fn | resolveSnapshotTimeoutMs | (private) |
| 58 | fn | resolveNavigationTimeoutMs | (private) |
| 62 | fn | resolveViewportDimension | (private) |
| 70 | fn | collectSnapshotUrls | (private) |
| 102 | fn | buildStoredAriaRefs | (private) |
| 145 | fn | storeAriaSnapshotRefsViaPlaywright | pub |
| 175 | fn | prepareSnapshotPageViaPlaywright | (private) |
| 198 | fn | snapshotAriaViaPlaywright | pub |
| 226 | fn | res | (private) |
| 256 | fn | snapshotAiViaPlaywright | pub |
| 299 | fn | assertSnapshotFrameCurrent | (private) |
| 305 | fn | withSnapshotFrameGuard | (private) |
| 312 | fn | onFrameChanged | (private) |
| 327 | fn | finalizeRoleSnapshotViaPlaywright | (private) |
| 368 | fn | snapshotRoleViaPlaywright | pub |
| 465 | fn | navigateViaPlaywright | pub |
| 504 | fn | navigate | (private) |
| 609 | fn | resizeViewportViaPlaywright | pub |
| 624 | fn | closePageViaPlaywright | pub |
| 634 | fn | pdfViaPlaywright | pub |

## extensions/browser/src/browser/pw-tools-core.waits-next-download-saves-it.test.ts (601 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | fn | withTempDir | (private) |
| 77 | fn | requireSaveAsPath | (private) |
| 89 | fn | waitForImplicitDownloadOutput | (private) |
| 116 | fn | expectPathMissing | (private) |
| 127 | fn | createDownloadEventHarness | (private) |
| 153 | fn | expectAtomicDownloadSave | (private) |
| 176 | type | DownloadFixture | (private) |

## extensions/browser/src/browser/server-context.availability.ts (604 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | AvailabilityDeps | (private) |
| 60 | type | AvailabilityOps | (private) |
| 71 | type | BrowserEnsureOptions | (private) |
| 80 | fn | launchOptionsForEnsure | (private) |
| 86 | fn | ensureOptionsKey | (private) |
| 90 | fn | formatLocalPortOwnershipHint | (private) |
| 105 | fn | normalizeFailureMessage | (private) |
| 111 | fn | resetManagedLaunchFailure | (private) |
| 115 | fn | recordManagedLaunchFailure | (private) |
| 132 | fn | assertManagedLaunchNotCoolingDown | (private) |
| 151 | fn | createProfileAvailability | pub |
| 160 | fn | resolveTimeouts | (private) |
| 169 | fn | getCdpReachabilityPolicy | (private) |
| 174 | fn | ensureExtensionRelay | (private) |
| 184 | fn | isReachable | (private) |
| 216 | fn | isTransportAvailable | (private) |
| 229 | fn | isHttpReachable | (private) |
| 249 | fn | stopExactRunning | (private) |
| 314 | fn | finish | (private) |
| 319 | fn | onAbort | (private) |
| 392 | fn | launchManagedChrome | (private) |

## extensions/browser/src/browser/server-context.ensure-browser-available.waits-for-cdp-ready.test.ts (683 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | deferred | (private) |
| 24 | fn | fakeRunning | (private) |
| 35 | fn | setupEnsureBrowserAvailableHarness | (private) |
| 60 | fn | createAttachOnlyLoopbackProfile | (private) |
| 82 | fn | requireFirstLaunchOptions | (private) |

## extensions/browser/src/browser/server-context.existing-session.test.ts (652 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | ChromeLiveProfile | (private) |
| 42 | fn | deferred | (private) |
| 52 | fn | makeState | (private) |

## extensions/browser/src/browser/server-context.hot-reload-profiles.test.ts (833 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | TestProfileConfig | (private) |
| 23 | type | TestConfig | (private) |
| 50 | fn | buildConfig | (private) |
| 107 | fn | requireValue | (private) |
| 114 | fn | deferred | (private) |
| 122 | fn | runtimeState | (private) |
| 132 | fn | createTestProfileRuntimeState | (private) |

## extensions/browser/src/browser/server-context.lifecycle.ts (546 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | ProfileLifecycleTerminal | (private) |
| 22 | type | ProfileLifecycleActor | (private) |
| 39 | type | ProfileTransitionOptions | (private) |
| 54 | type | ProfileTransitionResult | (private) |
| 58 | type | ProfileLeaseContext | (private) |
| 67 | fn | createProfileLifecycleActor | (private) |
| 86 | fn | getProfileLifecycle | pub |
| 95 | fn | isBrowserRuntimeRunning | pub |
| 99 | fn | markBrowserRuntimeStopping | pub |
| 104 | class | ProfileRestartRequiredError | pub |
| 111 | fn | isProfileRestartRequiredError | pub |
| 115 | fn | isWithinProfileOperationLease | pub |
| 119 | fn | lifecycleError | (private) |
| 125 | fn | toLifecycleError | (private) |
| 129 | fn | assertRuntimeAdmission | (private) |
| 135 | fn | assertProfileCurrent | (private) |
| 159 | fn | assertProfileLifecycleContext | pub |
| 167 | fn | combineSignals | (private) |
| 174 | fn | waitForStart | (private) |
| 188 | fn | createLease | (private) |
| 201 | fn | createProfileRuntimeState | (private) |
| 212 | fn | getOrCreateProfileRuntime | pub |
| 228 | fn | registerProfileHandle | pub |
| 242 | fn | releaseProfileHandle | pub |
| 250 | fn | isProfileGenerationCurrent | pub |
| 272 | fn | withProfileOperationLease | pub |
| 330 | fn | enqueueProfileStart | pub |
| 358 | fn | settleStart | (private) |
| 367 | fn | capturePlaywrightRetirement | (private) |
| 384 | fn | cleanupProfileResources | (private) |
| 455 | fn | beginProfileTransition | pub |
| 539 | fn | settleTransition | (private) |

## extensions/browser/src/browser/server-context.remote-profile-tab-ops.playwright.test.ts (503 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | fn | page | (private) |
| 22 | fn | expectBlockedCdpEndpoint | (private) |

## extensions/browser/src/browser/server-context.tab-ops.ts (502 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | TabOpsDeps | (private) |
| 61 | type | ProfileTabOps | (private) |
| 74 | type | CdpTarget | (private) |
| 83 | fn | normalizeWsUrl | (private) |
| 95 | fn | createProfileTabOps | pub |
| 98 | fn | getCdpControlPolicy | (private) |
| 99 | fn | getNavigationPolicy | (private) |

## extensions/browser/src/browser/server-context.tab-selection-state.test.ts (1028 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | seedRunningProfileState | (private) |
| 36 | fn | expectOldManagedTabClose | (private) |
| 44 | fn | fetchCallUrls | (private) |
| 48 | fn | fetchJsonCall | (private) |
| 56 | fn | createOldTabCleanupFetchMock | (private) |
| 75 | fn | createManagedTabListFetchMock | (private) |
| 91 | fn | openManagedTabWithRunningProfile | (private) |

## extensions/browser/src/browser/server.agent-contract-core.test.ts (956 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | ActErrorResponse | (private) |
| 38 | type | ActErrorHttpResponse | (private) |
| 43 | fn | expectRecordFields | (private) |
| 53 | type | MockWithCalls | (private) |
| 57 | fn | mockFirstArg | (private) |
| 73 | fn | postActAndReadError | (private) |
| 89 | fn | requirePwMock | (private) |

## extensions/browser/src/browser/server.agent-contract-form-layout-act-commands.test.ts (821 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | requirePwMock | (private) |
| 34 | type | GuardedCurrentTabRouteCase | (private) |
| 160 | fn | withSymlinkPathEscape | (private) |
| 177 | type | MockWithCalls | (private) |
| 179 | fn | isRecord | (private) |
| 183 | fn | requireRecord | (private) |
| 190 | fn | expectRecordFields | (private) |
| 197 | fn | requireMockArg | (private) |
| 201 | fn | expectBrowserCallFields | (private) |
| 211 | fn | expectOkResult | (private) |

## extensions/browser/src/browser/server.control-server.test-harness.ts (716 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | HarnessState | (private) |
| 55 | fn | getBrowserControlServerTestState | pub |
| 60 | fn | getBrowserControlServerBaseUrl | pub |
| 64 | fn | restoreGatewayPortEnv | (private) |
| 73 | fn | setBrowserControlServerEvaluateEnabled | pub |
| 78 | fn | setBrowserControlServerExtraArgs | pub |
| 83 | fn | setBrowserControlServerSsrFPolicy | pub |
| 88 | fn | setBrowserControlServerReachable | pub |
| 93 | fn | setBrowserControlServerTabUrl | pub |
| 98 | fn | setBrowserControlServerProfiles | pub |
| 121 | fn | getCdpMocks | pub |
| 133 | type | ExecuteActMockAction | (private) |
| 134 | type | ExecuteActMockOptions | (private) |
| 144 | type | PassThroughActDispatch | (private) |
| 151 | fn | pickActionFields | (private) |
| 162 | fn | buildActPayload | (private) |
| 377 | fn | getPwMocks | pub |
| 419 | fn | makeProc | (private) |
| 442 | fn | defaultBrowserCdpPortForState | (private) |
| 446 | fn | defaultProfilesForState | (private) |
| 454 | fn | loadConfig | (private) |
| 570 | fn | startBrowserControlServerFromConfig | pub |
| 574 | fn | stopBrowserControlServer | (private) |
| 579 | fn | makeResponse | pub |
| 591 | fn | mockClearAll | (private) |
| 598 | fn | resetBrowserControlServerTestContext | pub |
| 625 | fn | restoreGatewayAuthEnv | (private) |
| 642 | fn | cleanupBrowserControlServerTestContext | pub |
| 651 | fn | installBrowserControlServerHooks | pub |

## extensions/browser/src/browser/session-tab-registry.sqlite.test.ts (1059 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | TabIdentity | (private) |
| 47 | type | DurableRecord | (private) |
| 63 | type | DurableTab | (private) |
| 64 | type | CloseTab | (private) |
| 71 | type | CleanupParams | (private) |
| 80 | type | RegistryModule | (private) |
| 108 | fn | clearProcessLocalTabState | (private) |
| 123 | fn | setBrowserProfileConfig | (private) |
| 144 | fn | openStore | (private) |
| 152 | fn | installRuntime | (private) |
| 175 | fn | freshRegistry | (private) |

## extensions/browser/src/browser/session-tab-registry.ts (750 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | type | SessionTabParams | (private) |
| 68 | type | DurableRecord | (private) |
| 70 | type | DurableTab | (private) |
| 75 | type | TrackedTab | (private) |
| 76 | type | DurableOwnership | (private) |
| 77 | type | CloseTab | (private) |
| 83 | type | CloseParams | (private) |
| 92 | type | CleanupKind | (private) |
| 94 | fn | normalizeSessionKey | (private) |
| 98 | fn | normalizeProfile | (private) |
| 102 | fn | normalizeProfileAliases | (private) |
| 110 | fn | resolveInteractionIdentity | (private) |
| 125 | fn | durableOwnership | (private) |
| 129 | fn | volatileId | (private) |
| 135 | fn | deleteInvalidRecord | (private) |
| 152 | fn | readDurableTabs | (private) |
| 169 | fn | deleteVolatileMatching | (private) |
| 192 | fn | resolveVolatile | (private) |
| 229 | fn | upsertVolatile | (private) |
| 249 | fn | deleteDurableCandidate | (private) |
| 261 | fn | clearDurableForVolatile | (private) |
| 276 | fn | trackSessionBrowserTab | pub |
| 331 | fn | canonicalCandidate | (private) |
| 362 | fn | touchSessionBrowserTab | pub |
| 416 | fn | untrackSessionBrowserTab | pub |
| 471 | fn | closeCurrentDurableTab | (private) |
| 494 | fn | isIgnorableTabCloseError | (private) |
| 505 | fn | claimCleanup | (private) |
| 527 | fn | matchesCleanupAttempt | (private) |
| 542 | fn | ownsCleanupAttempt | (private) |
| 547 | fn | deleteClaimedTab | (private) |
| 562 | fn | performDurableCleanup | (private) |
| 572 | fn | shouldClose | (private) |
| 614 | fn | closeDurableTab | (private) |
| 623 | fn | sameVolatileTab | (private) |
| 632 | fn | deleteVolatileTarget | (private) |
| 648 | fn | performVolatileCleanup | (private) |
| 684 | fn | closeTrackedTabs | (private) |
| 699 | fn | normalizeSessionKeys | (private) |
| 703 | fn | volatileTabsForSessions | (private) |
| 712 | fn | closeTrackedBrowserTabsForSessions | pub |
| 727 | fn | sweepTrackedBrowserTabs | pub |

## extensions/browser/src/cli/browser-cli-manage.test.ts (548 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | fn | lastRuntimeLog | (private) |

## extensions/browser/src/cli/browser-cli-manage.ts (896 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | BrowserDoctorCheck | (private) |
| 40 | fn | resolveProfileQuery | (private) |
| 54 | fn | printJsonResult | (private) |
| 62 | fn | sanitizeTableCell | (private) |
| 68 | fn | callTabAction | (private) |
| 88 | fn | fetchBrowserStatus | (private) |
| 105 | fn | runBrowserToggle | (private) |
| 127 | fn | runBrowserCommand | (private) |
| 134 | fn | parseTabIndex | (private) |
| 138 | fn | logBrowserTabs | (private) |
| 161 | fn | formatDoctorLine | (private) |
| 166 | fn | isGatewaySecretRefUnavailableErrorShape | (private) |
| 177 | fn | formatBrowserDoctorGatewayError | (private) |
| 184 | fn | runBrowserDoctor | (private) |
| 314 | type | BrowserProfileDriver | (private) |
| 316 | fn | usesChromeMcpTransport | (private) |
| 323 | fn | usesExtensionTransport | (private) |
| 330 | fn | formatBrowserConnectionSummary | (private) |
| 357 | fn | registerBrowserManageCommands | pub |

## extensions/browser/src/node-host/invoke-browser.test.ts (693 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 157 | type | BrowserDispatchRequest | (private) |
| 162 | fn | firstBrowserDispatchRequest | (private) |
| 681 | fn | toLintErrorObject | (private) |
