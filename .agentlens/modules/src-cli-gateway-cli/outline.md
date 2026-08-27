# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## src/cli/gateway-cli/pre-bootstrap.ts (732 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | GatewayRunGuardParams | (private) |
| 16 | type | GatewayRunEnvironmentSelection | (private) |
| 21 | type | PreparedGatewayRunReset | (private) |
| 36 | fn | pinGatewayRunRuntimePaths | (private) |
| 51 | fn | resolveGatewayConfigSelectionSignature | (private) |
| 55 | fn | snapshotGatewayConfigSelectionEnvironment | (private) |
| 61 | fn | restoreGatewayConfigSelectionEnvironment | (private) |
| 74 | fn | resolveGatewayRunDotEnvPaths | (private) |
| 88 | fn | resolveInvocationDestructiveOverride | (private) |
| 96 | fn | applyInvocationDestructiveOverride | (private) |
| 104 | fn | restoreGatewayEnvChanges | (private) |
| 127 | fn | restoreSupersededGatewaySelectionEnv | (private) |
| 147 | fn | restoreAppliedGatewayRunConfigEnvironment | (private) |
| 160 | fn | readGuardedGatewayRunConfig | (private) |
| 174 | fn | isSameGatewayRunConfigSnapshot | (private) |
| 188 | fn | resolveGatewayConfigSelectionDeclarationSignature | (private) |
| 199 | fn | recoverGuardedGatewayRunConfig | (private) |
| 236 | fn | guardGatewayRunSelectedConfig | (private) |
| 268 | fn | applyTrustedGatewayEnv | (private) |
| 286 | fn | applySelectedConfigEnv | (private) |
| 390 | fn | guardGatewayRunReset | (private) |
| 413 | fn | recheckGatewayRunReset | pub |
| 416 | fn | rejectDrift | (private) |
| 447 | fn | applyFinalGatewayRunConfigEnv | pub |
| 535 | fn | clearGatewayRunConfigEnvironment | pub |
| 540 | fn | reloadTrustedGatewayRunEnvironment | pub |
| 592 | fn | selectGatewayRunEnvironment | pub |
| 624 | fn | prepareGatewayRunBootstrap | pub |
| 682 | fn | wasPreparedGatewayRunStatePristine | pub |
| 687 | fn | wasPreparedGatewayRunCoreStatePristine | pub |
| 691 | fn | recheckGatewayRunBootstrap | pub |

## src/cli/gateway-cli/register.ts (939 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 61 | fn | loadConfigModule | (private) |
| 65 | fn | loadGatewayStatusModule | (private) |
| 69 | fn | loadGatewayHealthModule | (private) |
| 73 | fn | loadBonjourDiscoveryModule | (private) |
| 77 | fn | loadWideAreaDnsModule | (private) |
| 81 | fn | loadHealthStyleModule | (private) |
| 85 | fn | loadUsageFormatModule | (private) |
| 89 | fn | loadStabilityBundleModule | (private) |
| 93 | fn | loadSupportExportModule | (private) |
| 97 | fn | loadDaemonStatusGatherModule | (private) |
| 101 | fn | gatewayCallOpts | (private) |
| 111 | fn | callGatewayCli | (private) |
| 116 | fn | parseGatewayCallParams | (private) |
| 124 | fn | loadSettledCostUsageSummary | (private) |
| 161 | fn | createUsageCostSettleTimeoutError | (private) |
| 169 | fn | runGatewayCommand | (private) |
| 195 | fn | parseDaysOption | (private) |
| 208 | fn | parseGatewayRpcTimeoutOption | (private) |
| 221 | fn | resolveGatewayRpcOptions | (private) |
| 234 | fn | resolveGatewayRpcOptionsWithLocalPort | (private) |
| 262 | fn | renderCostUsageSummaryAsync | (private) |
| 294 | fn | formatBytes | (private) |
| 306 | fn | formatStabilityEvent | (private) |
| 331 | fn | renderStabilitySummary | (private) |
| 384 | fn | normalizeStabilityBundleTarget | (private) |
| 398 | fn | formatBundleError | (private) |
| 408 | fn | readStabilityBundleTarget | (private) |
| 418 | fn | renderStabilityBundleSummary | (private) |
| 488 | fn | renderSupportExportResult | (private) |
| 501 | fn | resolveSupportExportRpcOptions | (private) |
| 513 | fn | parseOptionalPositiveIntegerOption | (private) |
| 524 | fn | writeSupportExportFromCli | (private) |
| 560 | fn | registerGatewayCli | pub |

## src/cli/gateway-cli/run-loop.test.ts (2303 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 254 | type | LoopSignal | (private) |
| 257 | fn | setPlatform | (private) |
| 267 | fn | removeNewSignalListeners | (private) |
| 276 | fn | addedSignalListener | (private) |
| 290 | fn | withIsolatedSignals | (private) |
| 299 | fn | captureSignal | (private) |
| 315 | fn | createRuntimeWithExitSignal | (private) |
| 331 | type | GatewayCloseFn | (private) |
| 332 | type | LoopRuntime | (private) |
| 338 | fn | createCloseMock | (private) |
| 342 | fn | expectRestartCloseCall | (private) |
| 358 | fn | createSignaledStart | (private) |
| 370 | fn | runLoopWithStart | (private) |
| 389 | fn | waitForStart | (private) |
| 396 | fn | waitForLoopCondition | (private) |
| 409 | fn | createSignaledLoopHarness | (private) |
| 418 | fn | expectRestartHandoffCall | (private) |
| 825 | type | StartServer | (private) |

## src/cli/gateway-cli/run-loop.ts (1024 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | GatewayRunSignalAction | (private) |
| 31 | type | RestartDrainTimeoutMs | (private) |
| 32 | type | RestartIntentOptions | (private) |
| 37 | type | GatewayRunSignalRequest | (private) |
| 44 | type | GatewayLifecycleRuntimeModule | (private) |
| 46 | fn | isUpdateProcessRestartReason | (private) |
| 54 | fn | loadGatewayLifecycleRuntimeModule | (private) |
| 56 | fn | createRestartIterationHook | (private) |
| 69 | fn | waitForGatewayPortReady | (private) |
| 73 | fn | finish | (private) |
| 91 | fn | waitForHealthyGatewayChild | (private) |
| 109 | fn | runGatewayLoop | pub |
| 156 | fn | cleanupSignals | (private) |
| 161 | fn | exitProcess | (private) |
| 165 | fn | completeForcedStop | (private) |
| 168 | fn | writeStabilityBundle | (private) |
| 194 | fn | handleRestartAfterServerClose | (private) |
| 389 | fn | handleStopAfterServerClose | (private) |
| 397 | fn | clearPendingStartupForceExitTimer | (private) |
| 404 | fn | armPendingStartupForceExitTimer | (private) |
| 440 | fn | markRestartDraining | (private) |
| 451 | fn | runAcceptedRequest | (private) |
| 458 | fn | armForceExitTimer | (private) |
| 481 | fn | clearForceExitTimer | (private) |
| 510 | fn | formatRestartDrainBudget | (private) |
| 514 | fn | armCloseForceExitTimerForIndefiniteRestart | (private) |
| 519 | fn | resolveRestartCloseDrainTimeoutMs | (private) |
| 552 | fn | collectActiveRestartSessionKeys | (private) |
| 555 | fn | collectActiveRestartSessionIds | (private) |
| 560 | fn | markActiveMainSessionsForRestart | (private) |
| 585 | fn | formatTaskBlockers | (private) |
| 594 | fn | createStillPendingDrainLogger | (private) |
| 722 | fn | flushPendingStartupRequest | (private) |
| 735 | fn | request | (private) |
| 812 | fn | onSigterm | (private) |
| 830 | fn | onSigint | (private) |
| 834 | fn | onSigusr1 | (private) |

## src/cli/gateway-cli/run.option-collisions.test.ts (1773 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | GatewayLoopStart | (private) |
| 46 | type | RuntimeDotEnvLoadResult | (private) |
| 78 | type | ConfigSnapshotReadOptionsStub | (private) |
| 429 | fn | runGatewayCli | (private) |
| 433 | fn | prepareGatewayReset | (private) |
| 438 | fn | callArg | (private) |
| 446 | fn | gatewayStartOptions | (private) |
| 457 | fn | expectAuthOverrideMode | (private) |
| 672 | fn | snapshot | (private) |

## src/cli/gateway-cli/run.ts (1250 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 88 | type | GatewayRunLogger | (private) |
| 115 | fn | extractGatewayMiskeys | (private) |
| 134 | fn | createGatewayCliStartupTrace | (private) |
| 138 | fn | emit | (private) |
| 190 | fn | warnInlinePasswordFlag | (private) |
| 196 | fn | resolveGatewayPasswordOption | (private) |
| 209 | fn | parseEnumOption | (private) |
| 219 | fn | formatModeErrorList | (private) |
| 233 | fn | shouldBlockGatewayBindWithoutExplicitAuth | (private) |
| 245 | fn | getGatewayStartGuardErrors | (private) |
| 275 | fn | readGatewayStartupConfig | (private) |
| 323 | type | GatewayRunShellEnvFallbackPlan | (private) |
| 331 | fn | resolveGatewayRunShellEnvFallbackPlan | (private) |
| 355 | fn | loadGatewayRunShellEnvFallback | (private) |
| 375 | fn | clearGatewayRunShellEnvFallback | (private) |
| 391 | fn | gatewayRunShellEnvFallbackPlanSignature | (private) |
| 395 | fn | readGatewayStartupConfigWithShellEnv | (private) |
| 442 | fn | isGatewayLockError | (private) |
| 451 | fn | isGatewayAlreadyRunningLockError | (private) |
| 461 | fn | resolveGatewayLockErrorExitCode | (private) |
| 472 | fn | resolveGatewayStartupFailureExitCode | (private) |
| 476 | fn | normalizeGatewayHealthProbeHost | (private) |
| 483 | fn | isGatewayHealthzResponse | (private) |
| 495 | fn | probeGatewayHealthz | (private) |
| 504 | fn | finish | (private) |
| 569 | fn | runGatewayLoopWithSupervisedLockRecovery | (private) |
| 638 | fn | maybeWriteGatewayStartupFailureBundle | (private) |
| 650 | fn | runGatewayCommandOnce | (private) |
| 708 | fn | loadServerModule | (private) |
| 774 | fn | clearRejectedFinalConfigEnv | (private) |
| 838 | fn | describeNonInteractiveGatewayOwner | (private) |
| 1083 | fn | beginBoot | (private) |
| 1114 | fn | completeBoot | (private) |
| 1118 | fn | startLoop | (private) |
| 1209 | fn | runGatewayCommand | pub |
