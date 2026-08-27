# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 8 large files in this module.

## extensions/browser/src/browser/routes/agent.act.existing-session-navigation-guard.test.ts (605 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 70 | fn | getActPostHandler | (private) |
| 131 | fn | runAction | (private) |
| 143 | fn | expectActionToReject | (private) |
| 147 | fn | expectActionToThrow | (private) |
| 152 | fn | completion | (private) |
| 160 | fn | expectNavigationProbeUrls | (private) |

## extensions/browser/src/browser/routes/agent.act.ts (880 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | type | ExistingSessionOperation | (private) |
| 68 | fn | readExistingSessionLocationHref | (private) |
| 83 | fn | assertExistingSessionPostInteractionNavigationAllowed | (private) |
| 99 | fn | assertNewTabsAllowed | (private) |
| 171 | fn | runExistingSessionActionWithNavigationGuard | (private) |
| 194 | fn | buildExistingSessionWaitPredicate | (private) |
| 230 | fn | waitForExistingSessionCondition | (private) |
| 255 | fn | readAllowedUrl | (private) |
| 338 | fn | shouldEnforceCurrentUrlForAct | (private) |
| 343 | fn | getExistingSessionUnsupportedMessage | (private) |
| 409 | fn | registerBrowserAgentActRoutes | pub |
| 469 | fn | jsonOk | (private) |
| 818 | fn | jsonOk | (private) |
| 867 | fn | toLintErrorObject | (private) |

## extensions/browser/src/browser/routes/agent.existing-session.test.ts (557 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 89 | fn | getSnapshotGetHandler | (private) |
| 99 | fn | getSnapshotPostHandler | (private) |
| 109 | fn | getActPostHandler | (private) |
| 119 | fn | getDialogHookPostHandler | (private) |
| 129 | fn | requireRecord | (private) |
| 136 | fn | callArg | (private) |
| 145 | fn | expectExistingSessionProfile | (private) |

## extensions/browser/src/browser/routes/agent.snapshot.ts (885 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 64 | type | ChromeMcpSnapshotOperation | (private) |
| 71 | fn | collectChromeMcpSnapshotUrls | (private) |
| 109 | fn | clearChromeMcpOverlay | (private) |
| 121 | fn | renderChromeMcpLabels | (private) |
| 187 | fn | saveNormalizedScreenshotResponse | (private) |
| 235 | fn | rescaleAnnotationsForNormalization | (private) |
| 257 | fn | saveBrowserMediaResponse | (private) |
| 290 | fn | hasObservableBrowserState | (private) |
| 298 | fn | hasPendingDialogs | (private) |
| 306 | fn | browserStateResponseFields | (private) |
| 311 | fn | registerBrowserAgentSnapshotRoutes | pub |
| 724 | fn | cdpRoleSnapshot | (private) |

## extensions/browser/src/browser/routes/agent.storage.ts (571 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | StorageKind | (private) |
| 25 | type | GeolocationOptions | (private) |
| 33 | type | CookieSetOptions | (private) |
| 46 | fn | parseStorageKind | (private) |
| 54 | fn | parseStorageMutationRequest | (private) |
| 65 | fn | parseRequiredStorageMutationRequest | (private) |
| 79 | fn | parseStorageMutationOrRespond | (private) |
| 92 | fn | parseStorageMutationFromRequest | (private) |
| 101 | fn | assertRange | (private) |
| 116 | fn | readOptionalHttpOrigin | (private) |
| 129 | fn | parseCookieSetOptions | (private) |
| 147 | fn | parseGeolocationOptions | (private) |
| 176 | fn | registerBrowserAgentStorageRoutes | pub |

## extensions/browser/src/browser/routes/basic.existing-session.test.ts (689 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | createExistingSessionProfileState | (private) |
| 63 | fn | readFirstReachabilityCall | (private) |
| 75 | fn | createManagedProfileState | (private) |
| 114 | fn | callBasicRouteWithState | (private) |
| 132 | fn | callStartRoute | (private) |
| 174 | fn | responseBodyRecord | (private) |

## extensions/browser/src/browser/routes/basic.ts (539 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | remainingChromeMcpStatusTimeoutMs | (private) |
| 44 | fn | probeChromeMcpPageReady | (private) |
| 61 | fn | handleBrowserRouteError | (private) |
| 72 | fn | sendBasicJsonResponse | (private) |
| 83 | fn | withBasicProfileRoute | (private) |
| 100 | fn | registerBasicProfilePost | (private) |
| 120 | fn | withProfilesServiceMutation | (private) |
| 134 | fn | buildBrowserStatus | (private) |
| 258 | fn | runBrowserLiveProbe | (private) |
| 308 | fn | hasQueryKey | (private) |
| 312 | fn | parseHeadlessStartOverride | (private) |
| 345 | fn | registerBrowserBasicRoutes | pub |

## extensions/browser/src/browser/routes/tabs.test.ts (744 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | ProfileContext | (private) |
| 20 | type | TabFixture | (private) |
| 46 | fn | ssrfBlockedError | (private) |
| 50 | fn | createProfileWithTabs | (private) |
| 55 | fn | expectBrowserNotRunningAction | (private) |
| 78 | fn | createProfileContext | (private) |
| 85 | fn | baseProfileContext | (private) |
| 129 | fn | createRouteContext | (private) |
| 158 | fn | callTabsRoute | (private) |
| 231 | fn | callTabsAction | (private) |
| 241 | fn | callTabsList | (private) |
| 250 | fn | callTabsFocus | (private) |
| 258 | fn | callTabsDelete | (private) |
