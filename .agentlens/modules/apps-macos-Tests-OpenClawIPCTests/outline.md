# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 23 large files in this module.

## apps/macos/Tests/OpenClawIPCTests/AppStateRemoteConfigTests.swift (791 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 5 | struct | StoredGatewayPreference | (private) |
| 9 | fn | captureGatewayPreference | (private) |
| 15 | fn | restoreGatewayPreference | (private) |
| 22 | class | GatewayConfigReadGate | (private) |
| 26 | fn | suspendRead | (internal) |
| 37 | fn | waitUntilStarted | (internal) |
| 44 | fn | release | (internal) |
| 52 | struct | AppStateRemoteConfigTests | (internal) |

## apps/macos/Tests/OpenClawIPCTests/CommandResolverTests.swift (555 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | fn | makeDefaults | (private) |
| 11 | fn | makeLocalDefaults | (private) |
| 17 | fn | makeProjectRootWithPnpm | (private) |

## apps/macos/Tests/OpenClawIPCTests/ComputerActionServiceTests.swift (715 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | struct | ComputerActionServiceTests | (internal) |
| 16 | fn | wait | (internal) |
| 23 | fn | signal | (internal) |
| 41 | fn | perform | (internal) |
| 68 | method | init | (internal) |
| 72 | fn | attempt | (internal) |
| 86 | fn | schedule | (internal) |
| 90 | fn | runAll | (internal) |
| 108 | fn | isLifecycleChanged | (private) |
| 116 | fn | validationError | (private) |

## apps/macos/Tests/OpenClawIPCTests/DashboardWindowSmokeTests.swift (1044 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | class | DashboardRouteAuthGate | (private) |
| 10 | method | init | (internal) |
| 14 | fn | authToken | (internal) |
| 18 | fn | probe | (internal) |
| 23 | fn | replaceToken | (internal) |
| 27 | fn | probes | (internal) |
| 33 | class | DashboardBrowserImportGate | (private) |
| 37 | fn | request | (internal) |
| 45 | struct | DashboardWindowSmokeTests | (internal) |
| 891 | fn | makeShownController | (private) |

## apps/macos/Tests/OpenClawIPCTests/ExecAllowlistTests.swift (1015 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | struct | ExecAllowlistTests | (internal) |
| 27 | fn | loadShellParserParityCases | (private) |
| 34 | fn | loadWrapperResolutionParityCases | (private) |
| 41 | fn | fixtureURL | (private) |
| 52 | fn | homebrewRGResolution | (private) |
| 60 | fn | makeExecutable | (private) |
| 221 | fn | resolution | (internal) |

## apps/macos/Tests/OpenClawIPCTests/ExecApprovalsStoreRefactorTests.swift (1485 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | struct | ExecApprovalsStoreRefactorTests | (internal) |
| 16 | fn | withLockedEnv | (private) |
| 21 | fn | restoreEnv | (internal) |
| 52 | fn | withTempStateDir | (private) |
| 71 | fn | withTempHomeAndStateDir | (private) |
| 1131 | mod | extension ExecApprovalsStoreRefactorTests | (internal) |
| 1461 | fn | fileIdentity | (private) |
| 1470 | fn | seedCurrentApprovalsFile | (private) |

## apps/macos/Tests/OpenClawIPCTests/ExecHostRequestEvaluatorTests.swift (573 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | struct | ExecHostRequestEvaluatorTests | (internal) |
| 533 | fn | makeContext | (private) |

## apps/macos/Tests/OpenClawIPCTests/GatewayChannelConnectTests.swift (529 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | struct | GatewayChannelConnectTests | (internal) |
| 14 | fn | wait | (internal) |
| 24 | fn | waitUntilStarted | (internal) |
| 31 | fn | open | (internal) |
| 37 | fn | opened | (internal) |
| 46 | fn | record | (internal) |
| 53 | fn | wait | (internal) |
| 66 | method | init | (internal) |
| 70 | fn | makeTask | (internal) |
| 93 | fn | record | (internal) |
| 102 | fn | snapshot | (internal) |
| 113 | fn | set | (internal) |
| 119 | fn | snapshot | (internal) |
| 129 | method | init | (internal) |
| 133 | fn | makeWebSocketTask | (internal) |
| 137 | fn | makeWebSocketTask | (internal) |
| 148 | fn | consumeLastTLSFailure | (internal) |
| 164 | fn | makeSession | (private) |

## apps/macos/Tests/OpenClawIPCTests/GatewayConnectionControlTests.swift (921 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | fn | makeGatewayGenerationSnapshot | (private) |
| 32 | fn | gatewayGenerationSnapshotVersion | (private) |
| 38 | class | FakeWebSocketTask | (private) |
| 44 | fn | resume | (internal) |
| 46 | fn | cancel | (internal) |
| 50 | fn | send | (internal) |
| 54 | fn | receive | (internal) |
| 78 | fn | receive | (internal) |
| 82 | fn | latestUnrespondedRequest | (private) |
| 107 | class | FakeWebSocketSession | (private) |
| 109 | fn | makeWebSocketTask | (internal) |
| 113 | fn | makeWebSocketTask | (internal) |
| 119 | class | WebSocketMessageRecorder | (private) |
| 122 | fn | append | (internal) |
| 128 | fn | snapshot | (internal) |
| 136 | class | GatewayConnectionRouteConfigSource | (private) |
| 139 | method | init | (internal) |
| 143 | fn | setURL | (internal) |
| 149 | fn | snapshotURL | (internal) |
| 157 | class | GatewayConnectionClientShutdownGate | (private) |
| 162 | fn | run | (internal) |
| 174 | fn | waitUntilStarted | (internal) |
| 181 | fn | open | (internal) |
| 189 | class | GatewayConnectionConfigProviderGate | (private) |
| 195 | method | init | (internal) |
| 199 | fn | provide | (internal) |
| 211 | fn | waitUntilStarted | (internal) |
| 218 | fn | open | (internal) |
| 225 | fn | makeTestGatewayConnection | (private) |
| 790 | fn | messageData | (private) |
| 893 | fn | chatSendOkResponseData | (private) |

## apps/macos/Tests/OpenClawIPCTests/GatewayEndpointStoreTests.swift (1184 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | class | GatewayEndpointSourceGate | (private) |
| 13 | method | init | (internal) |
| 17 | fn | snapshot | (internal) |
| 33 | fn | suspendNextRead | (internal) |
| 39 | fn | update | (internal) |
| 43 | fn | waitUntilSuspendedReadStarts | (internal) |
| 50 | fn | releaseSuspendedRead | (internal) |
| 57 | class | GatewayEndpointRouteLookupGate | (private) |
| 61 | fn | lookup | (internal) |
| 73 | fn | waitUntilStarted | (internal) |
| 80 | fn | release | (internal) |
| 87 | class | GatewayEndpointRemoteEnsureGate | (private) |
| 95 | method | init | (internal) |
| 99 | fn | routeIfRunning | (internal) |
| 109 | fn | isCurrent | (internal) |
| 113 | fn | ensure | (internal) |
| 126 | fn | waitUntilLookupCount | (internal) |
| 133 | fn | waitUntilEnsureStarts | (internal) |
| 140 | fn | releaseEnsure | (internal) |
| 147 | struct | GatewayEndpointStoreTests | (internal) |
| 148 | fn | makeLaunchAgentSnapshot | (private) |
| 163 | fn | makeDefaults | (private) |
| 170 | fn | source | (private) |
| 555 | mod | extension GatewayEndpointStoreTests | (internal) |

## apps/macos/Tests/OpenClawIPCTests/GatewayProcessManagerTests.swift (1830 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | struct | GatewayProcessManagerTests | (internal) |
| 1796 | fn | cleanup | (internal) |

## apps/macos/Tests/OpenClawIPCTests/MacNodeCodexThreadCatalogTests.swift (1082 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | struct | MacNodeCodexThreadCatalogTests | (internal) |
| 13 | fn | makeFakeCodex | (private) |
| 26 | fn | listResponseJSON | (private) |

## apps/macos/Tests/OpenClawIPCTests/MacNodeModeCoordinatorTests.swift (971 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | class | CoordinatorInvokeLifecycleProbe | (private) |
| 14 | fn | invoke | (internal) |
| 30 | fn | recordInvalidation | (internal) |
| 43 | fn | releaseInvalidation | (internal) |
| 50 | fn | recordSuccessorConnected | (internal) |
| 55 | fn | state | (internal) |
| 59 | fn | recordedEvents | (internal) |
| 65 | class | CoordinatorRouteInvalidationHookProbe | (private) |
| 69 | fn | run | (internal) |
| 77 | fn | calls | (internal) |
| 81 | fn | releaseBlockedCall | (internal) |
| 90 | class | CoordinatorDrainSnapshotProbe | (private) |
| 92 | fn | recordCapture | (internal) |
| 96 | fn | hasCaptured | (internal) |
| 102 | class | CoordinatorNodeHostWorkerProbe | (private) |
| 104 | fn | start | (internal) |
| 108 | fn | supports | (internal) |
| 110 | fn | invoke | (internal) |
| 113 | fn | handleInput | (internal) |
| 115 | fn | cancel | (internal) |
| 116 | fn | setRoute | (internal) |
| 118 | fn | publishInventory | (internal) |
| 119 | fn | stop | (internal) |
| 120 | fn | stops | (internal) |
| 123 | struct | MacNodeModeCoordinatorTests | (internal) |

## apps/macos/Tests/OpenClawIPCTests/MacNodeRuntimeTests.swift (1092 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | struct | MacNodeRuntimeTests | (internal) |
| 12 | fn | wait | (internal) |
| 19 | fn | open | (internal) |
| 33 | fn | increment | (internal) |
| 39 | fn | value | (internal) |
| 53 | fn | run | (internal) |
| 69 | fn | release | (internal) |
| 73 | fn | snapshot | (internal) |
| 80 | fn | waitForCount | (private) |
| 92 | fn | refresh | (internal) |
| 101 | fn | current | (internal) |
| 105 | fn | reconnectDuringRefresh | (internal) |
| 131 | fn | snapshotScreen | (internal) |
| 149 | fn | recordScreen | (internal) |
| 162 | fn | locationAuthorizationStatus | (internal) |
| 166 | fn | locationAccuracyAuthorization | (internal) |
| 170 | fn | currentLocation | (internal) |
| 181 | fn | performComputerAct | (internal) |
| 190 | fn | releaseHeldInput | (internal) |
| 417 | fn | snapshotScreen | (internal) |
| 434 | fn | recordScreen | (internal) |
| 447 | fn | locationAuthorizationStatus | (internal) |
| 451 | fn | locationAccuracyAuthorization | (internal) |
| 455 | fn | currentLocation | (internal) |
| 463 | fn | performComputerAct | (internal) |
| 472 | fn | releaseHeldInput | (internal) |
| 501 | fn | snapshotScreen | (internal) |
| 520 | fn | recordScreen | (internal) |
| 533 | fn | locationAuthorizationStatus | (internal) |
| 537 | fn | locationAccuracyAuthorization | (internal) |
| 541 | fn | currentLocation | (internal) |
| 552 | fn | performComputerAct | (internal) |
| 561 | fn | releaseHeldInput | (internal) |
| 647 | method | init | (internal) |
| 657 | fn | snapshotScreen | (internal) |
| 672 | fn | recordScreen | (internal) |
| 682 | fn | locationAuthorizationStatus | (internal) |
| 686 | fn | locationAccuracyAuthorization | (internal) |
| 690 | fn | currentLocation | (internal) |
| 698 | fn | performComputerAct | (internal) |
| 719 | fn | releaseHeldInput | (internal) |

## apps/macos/Tests/OpenClawIPCTests/OnboardingAISetupTests.swift (3781 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | class | ActivationMarkerObservation | (private) |
| 12 | fn | record | (internal) |
| 16 | fn | value | (internal) |
| 20 | fn | record | (internal) |
| 24 | fn | deadline | (internal) |
| 30 | class | ActivationOwnerObservation | (private) |
| 33 | fn | record | (internal) |
| 39 | fn | value | (internal) |
| 47 | class | AISetupSocketGeneration | (private) |
| 50 | fn | claim | (internal) |
| 59 | class | AISetupGatewayConfig | (private) |
| 64 | method | init | (internal) |
| 69 | fn | setToken | (internal) |
| 76 | fn | switchToken | (internal) |
| 82 | fn | snapshot | (internal) |
| 101 | class | AISetupRouteIdentity | (private) |
| 104 | method | init | (internal) |
| 108 | fn | set | (internal) |
| 114 | fn | snapshot | (internal) |
| 122 | class | AISetupRequestRecorder | (private) |
| 125 | fn | record | (internal) |
| 133 | fn | snapshot | (internal) |
| 139 | class | AISetupRequestGate | (private) |
| 144 | fn | wait | (internal) |
| 154 | fn | waitUntilStarted | (internal) |
| 161 | fn | release | (internal) |
| 169 | class | AISetupConfigReadGate | (private) |
| 175 | fn | armNextRead | (internal) |
| 179 | fn | snapshotToken | (internal) |
| 194 | fn | waitUntilBlocked | (internal) |
| 201 | fn | release | (internal) |
| 208 | fn | aiSetupRequest | (private) |
| 224 | fn | detectedSetupResponse | (private) |
| 258 | fn | successfulEmptyResponse | (private) |
| 293 | fn | actionableDetectedSetupResponse | (private) |
| 299 | fn | persistedDetectedSetupResponse | (private) |
| 316 | fn | missingConfiguredModelResponse | (private) |
| 334 | fn | configuredModelResponse | (private) |
| 355 | fn | waitForAISetupRequests | (private) |
| 369 | fn | settleQueuedAISetupTasks | (private) |
| 373 | fn | makeAISetupSession | (private) |
| 408 | fn | makeRestartingAISetupSession | (private) |
| 464 | fn | failedActivationResponse | (private) |
| 477 | fn | indeterminateActivationResponse | (private) |
| 493 | fn | verifiedSetupResponse | (private) |
| 506 | fn | rejectedSetupVerificationResponse | (private) |
| 519 | fn | unavailableGatewayResponse | (private) |
| 534 | struct | OnboardingAISetupTests | (internal) |

## apps/macos/Tests/OpenClawIPCTests/OnboardingConfiguredGatewayProbeTests.swift (650 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | class | OnboardingProbeGatewayConfig | (private) |
| 8 | fn | snapshotToken | (internal) |
| 12 | fn | setToken | (internal) |
| 18 | class | OnboardingProbeEndpoint | (private) |
| 21 | method | init | (internal) |
| 25 | fn | snapshot | (internal) |
| 35 | fn | advance | (internal) |
| 41 | class | OnboardingProbeRequestGate | (private) |
| 46 | fn | wait | (internal) |
| 56 | fn | waitUntilStarted | (internal) |
| 63 | fn | release | (internal) |
| 71 | class | OnboardingProbeConfigReadGate | (private) |
| 78 | method | init | (internal) |
| 82 | fn | snapshotToken | (internal) |
| 97 | fn | waitUntilBlocked | (internal) |
| 104 | fn | release | (internal) |
| 112 | class | OnboardingEndpointRevisionGate | (private) |
| 120 | method | init | (internal) |
| 131 | fn | snapshot | (internal) |
| 145 | fn | waitUntilStaleReadStarted | (internal) |
| 152 | fn | releaseStaleRead | (internal) |
| 159 | fn | onboardingAgentsResponse | (private) |
| 191 | fn | onboardingProbeErrorResponse | (private) |
| 203 | fn | runOnboardingProbe | (private) |
| 212 | fn | configuredModel | (private) |
| 219 | fn | isMissing | (private) |
| 228 | struct | OnboardingConfiguredGatewayProbeTests | (internal) |

## apps/macos/Tests/OpenClawIPCTests/OnboardingMemoryImportTests.swift (947 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | struct | MemoryImportWireRequest | (private) |
| 17 | class | MemoryImportRequestRecorder | (private) |
| 19 | fn | record | (internal) |
| 23 | fn | snapshot | (internal) |
| 29 | class | MemoryImportRequestGate | (private) |
| 34 | fn | wait | (internal) |
| 42 | fn | waitUntilStarted | (internal) |
| 47 | fn | release | (internal) |
| 55 | class | MemoryImportApplyCounter | (private) |
| 57 | fn | next | (internal) |
| 65 | class | MemoryImportGatewayConfig | (private) |
| 69 | method | init | (internal) |
| 74 | fn | setToken | (internal) |
| 80 | fn | snapshot | (internal) |
| 87 | fn | memoryImportWireRequest | (private) |
| 112 | fn | memoryImportOK | (private) |
| 116 | fn | memoryImportError | (private) |
| 253 | fn | memoryImportApplyPayload | (private) |
| 257 | fn | makeMemoryImportGateway | (private) |
| 274 | struct | OnboardingMemoryImportTests | (internal) |

## apps/macos/Tests/OpenClawIPCTests/OnboardingSystemAgentChatTests.swift (849 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | class | SystemAgentGatewayConfig | (private) |
| 8 | fn | snapshotToken | (internal) |
| 12 | fn | setToken | (internal) |
| 18 | class | SystemAgentSessionRecorder | (private) |
| 20 | fn | record | (internal) |
| 24 | fn | snapshot | (internal) |
| 30 | class | SystemAgentMessageRecorder | (private) |
| 32 | fn | record | (internal) |
| 36 | fn | snapshot | (internal) |
| 42 | class | SystemAgentMethodRecorder | (private) |
| 44 | fn | record | (internal) |
| 48 | fn | snapshot | (internal) |
| 54 | class | SystemAgentRequestGate | (private) |
| 58 | fn | waitIfFirst | (internal) |
| 69 | fn | release | (internal) |
| 76 | fn | systemAgentSessionID | (private) |
| 90 | fn | systemAgentRequestMethod | (private) |
| 102 | fn | systemAgentChatMessage | (private) |
| 116 | fn | respondToSystemAgentHealth | (private) |
| 126 | fn | systemAgentResponse | (private) |
| 150 | fn | verifiedInferenceResponse | (private) |
| 166 | fn | configuredAgentsResponse | (private) |
| 186 | fn | transientVerificationErrorResponse | (private) |
| 200 | struct | OnboardingSystemAgentChatTests | (internal) |

## apps/macos/Tests/OpenClawIPCTests/OnboardingViewSmokeTests.swift (592 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | struct | OnboardingStoredGatewayPreference | (private) |
| 14 | fn | captureOnboardingGatewayPreference | (private) |
| 20 | fn | restoreOnboardingGatewayPreference | (private) |
| 26 | fn | makeOnboardingResumeDefaults | (private) |
| 33 | struct | OnboardingViewSmokeTests | (internal) |

## apps/macos/Tests/OpenClawIPCTests/OpenClawConfigFileTests.swift (522 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | struct | OpenClawConfigFileTests | (internal) |
| 7 | fn | makeConfigOverridePath | (private) |

## apps/macos/Tests/OpenClawIPCTests/PortGuardianRecordStoreTests.swift (749 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | struct | PortGuardianRecordStoreTests | (internal) |
| 632 | fn | cleanup | (internal) |
| 637 | fn | fixture | (private) |
| 648 | fn | record | (private) |
| 657 | fn | execute | (private) |
| 671 | fn | seedVersionedPortGuardianDatabase | (private) |
| 701 | fn | scalarInt | (private) |
| 718 | fn | writeLegacyRecords | (private) |
| 733 | fn | record | (private) |

## apps/macos/Tests/OpenClawIPCTests/QuickChatModelTests.swift (732 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | struct | QuickChatModelTests | (internal) |
| 611 | fn | prepare | (private) |
| 616 | fn | makeModel | (private) |
| 647 | fn | agentsResult | (private) |
| 667 | enum | FakeSendError | (private) |
| 675 | class | GrantFlag | (private) |
| 680 | class | PermissionGrantLatch | (private) |
| 684 | fn | wait | (internal) |
| 691 | fn | finish | (internal) |
| 699 | class | AgentsResultsBox | (private) |
| 702 | method | init | (internal) |
| 706 | fn | next | (internal) |
| 712 | class | SendLatch | (private) |
| 720 | fn | wait | (internal) |
| 727 | fn | finish | (internal) |

## apps/macos/Tests/OpenClawIPCTests/UpdateOrchestrationTests.swift (539 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | struct | UpdateOrchestrationTests | (internal) |
| 527 | class | TestUpdater | (private) |
| 533 | method | init | (internal) |
| 537 | fn | checkForUpdates | (internal) |
