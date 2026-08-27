# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 5 large files in this module.

## apps/macos/Sources/OpenClaw/NodeMode/MacNodeClaudeSessionCatalog.swift (968 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 4 | enum | MacNodeClaudeSessionCatalogContract | (internal) |
| 12 | enum | MacNodeClaudeSessionCatalog | (internal) |
| 125 | fn | lookup | (internal) |
| 144 | fn | store | (internal) |
| 158 | fn | removeUnseen | (internal) |
| 188 | fn | shouldAdvertise | (internal) |
| 203 | fn | list | (internal) |
| 209 | fn | read | (internal) |
| 215 | fn | list | (internal) |
| 238 | fn | read | (internal) |
| 259 | fn | appendLine | (internal) |
| 341 | mod | extension MacNodeClaudeSessionCatalog | (internal) |
| 342 | fn | projectsURL | (private) |
| 345 | fn | desktopSessionsURL | (private) |
| 351 | fn | childDirectories | (private) |
| 361 | fn | readJSON | (private) |
| 366 | fn | catalogFileIdentity | (private) |
| 375 | fn | string | (private) |
| 381 | fn | timestampMs | (private) |
| 391 | fn | isWithin | (private) |
| 397 | fn | safeSessionFile | (private) |
| 417 | fn | desktopMetadata | (private) |
| 451 | fn | discoverCLIRecords | (private) |
| 496 | fn | discoverCLIRecord | (private) |
| 572 | fn | scanCLIRecordFile | (private) |
| 631 | fn | inspectCLIRecordLine | (private) |
| 676 | fn | sessions | (private) |
| 762 | fn | locateSessionFile | (private) |
| 782 | mod | extension MacNodeClaudeSessionCatalog | (internal) |
| 783 | fn | decodeObject | (private) |
| 790 | fn | requireOnlyKeys | (private) |
| 796 | fn | boundedLimit | (private) |
| 807 | fn | decodeListParams | (private) |
| 818 | fn | decodeReadParams | (private) |
| 830 | fn | encodeCursor | (private) |
| 838 | fn | decodeCursor | (private) |
| 854 | fn | encode | (private) |
| 865 | fn | truncateUTF8 | (private) |
| 879 | mod | extension MacNodeClaudeSessionCatalog | (internal) |
| 880 | fn | collectText | (private) |
| 900 | fn | itemType | (private) |
| 917 | fn | parseTranscriptLine | (private) |

## apps/macos/Sources/OpenClaw/NodeMode/MacNodeCodexThreadCatalog.swift (1502 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | enum | MacNodeCodexThreadCatalogContract | (internal) |
| 13 | enum | MacNodeCodexThreadCatalog | (internal) |
| 175 | fn | list | (internal) |
| 181 | fn | turns | (internal) |
| 190 | fn | list | (internal) |
| 205 | fn | turns | (internal) |
| 226 | fn | turns | (private) |
| 259 | fn | requireCatalogThread | (private) |
| 292 | fn | shouldAdvertise | (internal) |
| 309 | fn | list | (internal) |
| 330 | fn | list | (private) |
| 406 | mod | extension MacNodeCodexThreadCatalog | (internal) |
| 475 | fn | supportsConfiguredTransport | (private) |
| 479 | fn | supportsConfiguredHomeScope | (private) |
| 483 | fn | configuredPlugin | (private) |
| 511 | fn | validateAppServerConfig | (private) |
| 563 | fn | optionalConfiguredString | (private) |
| 574 | fn | configuredArguments | (private) |
| 593 | fn | configuredStringList | (private) |
| 604 | fn | validateDiscoveryConfig | (private) |
| 614 | fn | validateComputerUseConfig | (private) |
| 643 | fn | validateSupervisionConfig | (private) |
| 668 | fn | validateSupervisionEndpoint | (private) |
| 698 | fn | validateNetworkProxyConfig | (private) |
| 745 | fn | validateExperimentalConfig | (private) |
| 754 | fn | validateHeaders | (private) |
| 764 | fn | validateSecretInput | (private) |
| 796 | fn | validFileSecretId | (private) |
| 807 | fn | validateKeys | (private) |
| 816 | fn | validateBoolean | (private) |
| 823 | fn | validateString | (private) |
| 828 | fn | validateNonEmptyString | (private) |
| 837 | fn | validateStringOrNull | (private) |
| 844 | fn | validateEnum | (private) |
| 855 | fn | validatePositiveNumber | (private) |
| 866 | fn | validateStringArray | (private) |
| 873 | fn | validateStringRecord | (private) |
| 889 | fn | literalBoolean | (private) |
| 896 | fn | matches | (private) |
| 903 | fn | splitShellWords | (private) |
| 932 | fn | resolvePath | (private) |
| 945 | fn | decodeParams | (private) |
| 986 | fn | decodeTurnParams | (private) |
| 1019 | fn | optionalString | (private) |
| 1036 | fn | appServerParams | (private) |
| 1058 | fn | normalize | (internal) |
| 1067 | fn | normalizedResponse | (private) |
| 1137 | fn | encodeResponse | (private) |
| 1145 | fn | nonEmptyString | (private) |
| 1151 | fn | boundedString | (private) |
| 1162 | fn | boundedCursor | (private) |
| 1172 | fn | truncateUTF16 | (private) |
| 1184 | fn | integer | (private) |
| 1191 | fn | sourceName | (private) |
| 1211 | class | CodexAppServerThreadRequestSession | (private) |
| 1240 | method | init | (internal) |
| 1268 | fn | run | (internal) |
| 1282 | fn | start | (private) |
| 1334 | fn | drainStdout | (private) |
| 1344 | fn | consumeStdout | (private) |
| 1363 | fn | handleLine | (private) |
| 1399 | fn | write | (private) |
| 1405 | fn | finish | (private) |
| 1421 | fn | initializeRequestData | (private) |
| 1436 | fn | initializedNotificationData | (private) |
| 1440 | fn | jsonData | (private) |
| 1444 | fn | readAvailable | (private) |
| 1474 | fn | drainAvailable | (private) |
| 1494 | fn | setNonBlocking | (private) |

## apps/macos/Sources/OpenClaw/NodeMode/MacNodeHostWorker.swift (704 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | struct | MacNodeHostManifest | (internal) |
| 17 | trait | MacNodeHostWorking | (internal) |
| 18 | fn | start | (internal) |
| 31 | class | MacNodeHostWorker | (internal) |
| 89 | fn | start | (internal) |
| 109 | fn | supports | (internal) |
| 117 | fn | invoke | (internal) |
| 155 | fn | handleInput | (internal) |
| 169 | fn | cancel | (internal) |
| 183 | fn | bufferInvokeControlLocked | (private) |
| 210 | fn | takePendingInvokeControlsLocked | (private) |
| 215 | fn | enqueueInvokeControlLocked | (private) |
| 232 | fn | setRoute | (internal) |
| 261 | fn | publishInventory | (internal) |
| 276 | fn | stop | (internal) |
| 285 | fn | startLocked | (private) |
| 388 | fn | consumeStdoutLocked | (private) |
| 404 | fn | handleMessageLocked | (private) |
| 482 | fn | handleGatewayRequest | (private) |
| 520 | fn | writeGatewayUnavailableLocked | (private) |
| 529 | fn | scheduleInventoryPublicationLocked | (private) |
| 549 | fn | inventoryPublicationIsCurrent | (private) |
| 561 | fn | sendInventory | (private) |
| 581 | fn | enqueueWriteLocked | (private) |
| 603 | fn | finishStartLocked | (private) |
| 616 | fn | stopLocked | (private) |
| 664 | fn | decodeInvokeResponse | (private) |
| 676 | fn | unavailableResponse | (private) |
| 683 | fn | paramsJSON | (private) |
| 688 | fn | jsonData | (private) |
| 693 | fn | readAvailable | (private) |

## apps/macos/Sources/OpenClaw/NodeMode/MacNodeModeCoordinator.swift (1015 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | struct | MacNodeGatewayTLSSessionCache | (internal) |
| 13 | method | init | (internal) |
| 43 | class | MacNodeModeCoordinator | (internal) |
| 70 | fn | prepareNodeIdentityProfile | (internal) |
| 76 | fn | resolveNodeIdentityProfile | (internal) |
| 199 | fn | start | (internal) |
| 224 | fn | stop | (internal) |
| 230 | fn | stopAndWait | (internal) |
| 236 | fn | cancelCoordinatorTasks | (private) |
| 245 | fn | setPreferredGatewayStableID | (internal) |
| 260 | fn | refresh | (internal) |
| 267 | fn | currentCanvasPluginSurfaceRoute | (internal) |
| 271 | fn | refreshCanvasPluginSurfaceRoute | (internal) |
| 275 | fn | refresh | (private) |
| 294 | fn | invalidateEndpointAttempt | (private) |
| 298 | fn | revokeRouteAuthority | (private) |
| 307 | fn | enqueueRouteInvalidation | (private) |
| 334 | fn | endpointTransitionRequiresDisconnect | (internal) |
| 429 | fn | effectiveEndpoint | (private) |
| 439 | fn | invalidateRuntimeRoute | (private) |
| 446 | fn | awaitStableRouteInvalidationDrain | (private) |
| 456 | fn | run | (private) |
| 524 | fn | prepareConnectionAttempt | (private) |
| 608 | fn | connect | (private) |
| 715 | fn | validatePostConnect | (private) |
| 741 | fn | scheduleReconnectProbe | (private) |
| 752 | fn | routeAuthorityAllowsInvoke | (private) |
| 762 | fn | waitForRouteInvalidationForTesting | (internal) |
| 767 | fn | refreshForTesting | (internal) |
| 773 | fn | enqueueRouteInvalidationForTesting | (internal) |
| 777 | fn | generationsForTesting | (internal) |
| 784 | fn | routeAuthorityAllowsInvokeForTesting | (internal) |
| 793 | fn | cancelReconnectProbe | (private) |
| 818 | fn | currentCaps | (private) |
| 837 | fn | currentPermissions | (private) |
| 842 | fn | currentCommands | (private) |
| 846 | fn | startNodeHostWorkerIfConfigured | (private) |
| 887 | fn | autoRepairStaleTLSPinIfNeeded | (private) |
| 920 | fn | buildSessionBox | (private) |
| 941 | mod | extension MacNodeModeCoordinator | (internal) |

## apps/macos/Sources/OpenClaw/NodeMode/MacNodeRuntime.swift (1022 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | class | MacNodeClaudeSessionCatalogWorker | (internal) |
| 30 | method | init | (internal) |
| 38 | fn | list | (internal) |
| 42 | fn | read | (internal) |
| 46 | fn | enqueue | (private) |
| 71 | fn | startNextIfNeeded | (private) |
| 90 | fn | cancel | (private) |
| 102 | fn | finish | (private) |
| 112 | class | MacNodeRuntime | (internal) |
| 180 | fn | updateMainSessionKey | (internal) |
| 188 | fn | handleInvoke | (internal) |
| 250 | fn | isCanvasCommand | (private) |
| 254 | fn | handleCodexThreadInvoke | (private) |
| 268 | fn | handleClaudeSessionInvoke | (private) |
| 286 | mod | extension MacNodeRuntime | (internal) |
| 287 | fn | handleCanvasInvoke | (private) |
| 369 | fn | handleA2UIInvoke | (private) |
| 385 | mod | extension MacNodeRuntime | (internal) |
| 386 | fn | handleCameraInvoke | (private) |
| 449 | fn | handleLocationInvoke | (private) |
| 516 | fn | handleComputerActInvoke | (private) |
| 572 | fn | handleScreenRecordInvoke | (private) |
| 608 | fn | handleScreenSnapshotInvoke | (private) |
| 685 | fn | mainActorServices | (private) |
| 713 | fn | releaseHeldComputerInput | (internal) |
| 723 | mod | extension MacNodeRuntime | (internal) |
| 724 | fn | handleA2UIReset | (private) |
| 737 | fn | handleA2UIPush | (private) |
| 773 | fn | ensureA2UIHost | (private) |
| 808 | fn | isA2UIReady | (private) |
| 836 | mod | extension MacNodeRuntime | (internal) |
| 837 | fn | handleSystemNotify | (private) |
| 879 | mod | extension MacNodeRuntime | (internal) |
| 888 | fn | encodePayload | (private) |
| 898 | fn | projectedOuterFrameBytes | (internal) |
| 925 | fn | screenSnapshotPayloadTooLarge | (private) |
| 956 | fn | errorResponse | (private) |
| 967 | fn | encodeCanvasSnapshot | (private) |
| 1004 | fn | scaleImage | (private) |
