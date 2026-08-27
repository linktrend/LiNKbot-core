# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 9 large files in this module.

## src/cli/update-cli/plugin-payload-validation.test.ts (697 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | BundleFormat | (private) |
| 14 | type | FormatMarkedBundleInstallRecord | (private) |
| 29 | fn | writePackage | (private) |
| 44 | fn | writeBundle | (private) |
| 70 | fn | formatMarkedBundleRecord | (private) |
| 83 | fn | resolveTestHostRoot | (private) |
| 93 | fn | linkOpenClawPeerToHost | (private) |
| 98 | fn | resolveRealPath | (private) |

## src/cli/update-cli/post-core-plugin-convergence.test.ts (817 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | fn | makeTempDir | (private) |
| 74 | fn | writeBundledPlugin | (private) |

## src/cli/update-cli/restart-helper.test.ts (964 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | findPowerShell | (private) |
| 47 | fn | prepareAndReadScript | (private) |
| 60 | fn | cleanupScript | (private) |
| 73 | fn | extractWindowsKillPolicy | (private) |
| 82 | fn | executeWindowsKillPolicy | (private) |
| 122 | fn | makeTempDir | (private) |
| 126 | fn | writeFakeLaunchctl | (private) |
| 141 | fn | writeFakeSleep | (private) |
| 145 | fn | executeScript | (private) |
| 160 | fn | expectWindowsRestartWaitOrdering | (private) |
| 581 | fn | Assert | (private) |
| 586 | fn | Assert | (private) |
| 592 | fn | New | (private) |
| 601 | fn | New | (private) |
| 618 | fn | Invoke | (private) |
| 647 | fn | Get | (private) |
| 661 | fn | Get | (private) |
| 662 | fn | netstat | (private) |
| 675 | fn | netstat | (private) |

## src/cli/update-cli/restart-helper.ts (733 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | shellEscape | (private) |
| 32 | fn | isWindowsTaskNameSafe | (private) |
| 36 | fn | powerShellSingleQuote | (private) |
| 40 | fn | resolveSystemdUnit | (private) |
| 48 | fn | resolveLaunchdLabel | (private) |
| 56 | fn | resolveWindowsTaskName | (private) |
| 70 | fn | prepareRestartScript | pub |
| 210 | fn | Write | (private) |
| 218 | fn | Join | (private) |
| 229 | fn | Invoke | (private) |
| 266 | fn | Get | (private) |
| 407 | fn | Get | (private) |
| 457 | fn | Get | (private) |
| 483 | fn | Test | (private) |
| 509 | fn | Test | (private) |
| 519 | fn | Get | (private) |
| 552 | fn | Invoke | (private) |
| 615 | fn | Invoke | (private) |
| 717 | fn | runRestartScript | pub |

## src/cli/update-cli/update-command-plugins.ts (759 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | PostCorePluginUpdateResult | pub |
| 56 | type | MissingPluginInstallPayload | (private) |
| 62 | type | PostUpdatePluginWarning | (private) |
| 64 | fn | resolvePostSyncPluginUpdateSkipIds | (private) |
| 76 | fn | isClawHubTrustNotice | (private) |
| 86 | fn | isNonBlockingClawHubTrustNotice | (private) |
| 94 | fn | formatPluginUpdateWarning | (private) |
| 98 | fn | resolveUpdateClawHubRiskAcknowledgementOptions | (private) |
| 136 | fn | isTrackedPackageInstallRecord | (private) |
| 145 | fn | collectMissingPluginInstallPayloads | (private) |
| 215 | fn | formatMissingPluginPayloadReason | (private) |
| 225 | fn | formatPostUpdatePluginInspectGuidance | (private) |
| 229 | fn | createPostUpdatePluginWarning | (private) |
| 248 | fn | createGuidedPostUpdatePluginOutcome | (private) |
| 276 | fn | collectPluginChannelFallbackMessages | (private) |
| 290 | fn | isDisabledAfterFailureOutcome | (private) |
| 294 | fn | isActionableSkippedPostUpdateOutcome | (private) |
| 306 | fn | buildInvalidConfigPostCoreUpdateResult | (private) |
| 350 | fn | updatePluginsAfterCoreUpdate | pub |
| 456 | fn | onPluginIntegrityDrift | (private) |
| 685 | fn | summarizeList | (private) |

## src/cli/update-cli/update-command-post-core.ts (674 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 92 | fn | reportPreMutationUpdateFailure | pub |
| 116 | type | UpdateFinalizeResult | (private) |
| 130 | fn | withUpdateFinalizationEnv | (private) |
| 160 | fn | updateFinalizeCommand | pub |
| 306 | fn | writePostCorePluginUpdateResultFile | pub |
| 316 | fn | writePostCorePluginInstallRecordsFile | (private) |
| 323 | fn | readPostCorePluginInstallRecordsFile | pub |
| 337 | fn | execFileStdout | (private) |
| 344 | fn | readProcessStartTimeMs | (private) |
| 364 | fn | resolvePostCoreUpdateStartedAtMs | pub |
| 374 | fn | readPostCorePluginUpdateResultFile | (private) |
| 395 | fn | stopPostCoreUpdateChild | (private) |
| 428 | fn | resolvePostCoreUpdateChildStdio | pub |
| 434 | fn | preparePostCorePluginInstallRecordsForFreshProcess | (private) |
| 463 | fn | continuePostCoreUpdateInFreshProcess | pub |
| 548 | fn | finish | (private) |
| 610 | fn | shouldResumePostCoreUpdateInFreshProcess | pub |
| 633 | fn | writeControlPlaneUpdateRestartSentinelBestEffort | pub |
| 656 | fn | markControlPlaneUpdateRestartSentinelFailureBestEffort | pub |

## src/cli/update-cli/update-command-service.ts (1507 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 83 | fn | isPackageManagerUpdateMode | pub |
| 89 | fn | shouldPrepareUpdatedInstallRestart | pub |
| 112 | fn | shouldUseLegacyProcessRestartAfterUpdate | (private) |
| 118 | type | PostUpdateLaunchAgentRecoveryResult | (private) |
| 123 | type | PostUpdateLaunchAgentRecoveryDeps | (private) |
| 129 | fn | recoverInstalledLaunchAgentAfterUpdate | (private) |
| 169 | type | PostUpdateGatewayHealthRecoveryDeps | (private) |
| 174 | fn | recoverLaunchAgentAndRecheckGatewayHealth | (private) |
| 210 | fn | hasLoadedLaunchdKeepAliveSupervisor | (private) |
| 222 | fn | formatPostUpdateGatewayRecoveryLine | (private) |
| 244 | fn | formatPostUpdateGatewayRecoveryInstructions | (private) |
| 269 | type | PreManagedServiceStop | pub |
| 280 | type | WindowsTaskAutoStartRecovery | (private) |
| 287 | type | UpdateCommandRecoveryState | pub |
| 291 | class | UpdateCommandAbort | pub |
| 298 | fn | createAggregateErrorWithCause | pub |
| 306 | type | ManagedServiceRootRedirect | pub |
| 312 | fn | formatGatewayAncestryBlockMessage | (private) |
| 318 | fn | parsePositivePid | (private) |
| 332 | fn | isInheritedGatewayRuntimePid | (private) |
| 342 | fn | isGatewayAncestorPid | (private) |
| 353 | fn | gatewayAncestryBlockMessage | (private) |
| 357 | fn | serviceControlStdoutForMode | (private) |
| 361 | fn | armWindowsTaskAutoStartRecovery | (private) |
| 365 | fn | unregisterSignalExitBarrier | (private) |
| 374 | fn | onSignal | (private) |
| 384 | fn | onSigint | (private) |
| 385 | fn | onSigterm | (private) |
| 386 | fn | onSigbreak | (private) |
| 387 | fn | removeSignalHandlers | (private) |
| 393 | fn | complete | (private) |
| 398 | fn | restore | (private) |
| 418 | fn | abortWindowsTaskUpdateIfInterrupted | (private) |
| 432 | fn | maybeSuspendWindowsTaskAutoStartForPackageUpdate | (private) |
| 464 | fn | maybeResumeWindowsTaskAutoStartAfterPackageUpdate | pub |
| 476 | fn | restoreWindowsTaskAutoStartOrExit | pub |
| 491 | fn | maybeStopManagedServiceBeforeMutableUpdate | pub |
| 667 | fn | maybeRestartServiceAfterFailedMutableUpdate | pub |
| 692 | fn | isRunningInsideGatewayService | (private) |
| 702 | fn | shouldBlockMutableUpdateFromGatewayServiceEnv | pub |
| 721 | fn | formatCommandFailure | (private) |
| 729 | fn | tryResolveInvocationCwd | pub |
| 737 | type | PackageRuntimePreflight | (private) |
| 743 | fn | resolvePackageRuntimePreflight | pub |
| 828 | fn | resolvePackageRuntimeForPreflight | (private) |
| 844 | fn | resolveServiceRefreshEnv | (private) |
| 867 | fn | disableUpdatedPackageCompileCacheEnv | pub |
| 874 | fn | stripGatewayServiceMarkerEnv | pub |
| 882 | fn | resolveUpdatedInstallCommandEnv | (private) |
| 889 | fn | resolvePostInstallDoctorEnv | pub |
| 911 | fn | resolveUpdatedGatewayRestartPort | pub |
| 919 | fn | resolvePostUpdateServiceStateReadEnv | pub |
| 936 | fn | refreshGatewayServiceEnv | (private) |
| 975 | fn | runUpdatedInstallGatewayRestart | (private) |
| 1012 | fn | tryInstallShellCompletion | pub |
| 1068 | fn | installShellCompletionForUpdate | (private) |
| 1077 | fn | tryRealpathOrResolve | (private) |
| 1085 | fn | isNodeExecutable | (private) |
| 1090 | fn | resolveManagedServiceNodeRunner | (private) |
| 1111 | fn | resolveManagedServiceNodeRunnerOverride | pub |
| 1130 | fn | resolveManagedServicePackageUpdateRoot | pub |
| 1156 | fn | gatewayServiceCommandUsesRoot | pub |
| 1188 | fn | maybeRestartService | pub |
| 1202 | fn | verifyRestartedGateway | (private) |
| 1206 | fn | restartAfterStaleCleanup | (private) |

## src/cli/update-cli/update-command.test.ts (910 lines)

_No symbols extracted._

## src/cli/update-cli/update-command.ts (590 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 86 | fn | withUpdateInProgressEnv | (private) |
| 98 | fn | updateCommand | pub |
| 113 | fn | updateCommandInternal | (private) |
