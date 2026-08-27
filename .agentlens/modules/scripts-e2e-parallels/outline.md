# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## scripts/e2e/parallels/guest-transports.ts (644 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | interface | GuestExecOptions | (private) |
| 15 | interface | WindowsBackgroundPowerShellOptions | (private) |
| 28 | fn | guestScriptName | (private) |
| 32 | fn | appendOutput | (private) |
| 44 | fn | timeoutBefore | (private) |
| 48 | fn | throwIfFailed | (private) |
| 59 | fn | throwIfGuestSessionUnavailable | (private) |
| 72 | fn | throwIfParallelsVmStopped | (private) |
| 81 | fn | appendCommandResult | (private) |
| 86 | fn | cleanupPosixGuestScript | (private) |
| 101 | fn | runWindowsBackgroundPowerShell | pub |
| 125 | fn | Write | (private) |
| 133 | fn | Add | (private) |
| 282 | fn | activeDeadline | (private) |
| 345 | fn | findControlValue | (private) |
| 350 | fn | hasControlLine | (private) |
| 354 | fn | waitForWindowsBackgroundMaterialized | (private) |
| 391 | fn | cleanupWindowsBackground | (private) |
| 466 | class | LinuxGuest | pub |
| 507 | interface | MacosGuestOptions | (private) |
| 511 | class | MacosGuest | pub |
| 577 | class | WindowsGuest | pub |

## scripts/e2e/parallels/host-command.ts (783 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | HostCommandInvocation | (private) |
| 38 | type | ResolveHostCommandOptions | (private) |
| 46 | fn | hostInvocationFromRunner | (private) |
| 55 | fn | say | pub |
| 60 | fn | warn | pub |
| 64 | fn | withProgressOnStderr | pub |
| 73 | fn | die | pub |
| 78 | fn | signalHostCommandProcess | (private) |
| 127 | fn | writeAllSync | (private) |
| 134 | fn | signalGroup | (private) |
| 147 | fn | groupAlive | (private) |
| 159 | fn | finishTimedOut | (private) |
| 167 | fn | finishTimedOutAfterCleanup | (private) |
| 176 | fn | finish | (private) |
| 199 | fn | finishForwardedSignal | (private) |
| 212 | fn | finishForwardedSignalAfterCleanup | (private) |
| 236 | fn | forwardBounded | (private) |
| 329 | fn | shellQuote | pub |
| 333 | fn | portableBasename | (private) |
| 337 | fn | portableExtension | (private) |
| 341 | fn | isBareCommand | (private) |
| 345 | fn | resolveHostCommandTimeoutMs | (private) |
| 349 | fn | resolveOptionalHostCommandTimeoutMs | (private) |
| 353 | fn | resolveHostCommandInvocation | pub |
| 399 | fn | run | pub |
| 464 | fn | hasPosixTimedWrapperTimeout | (private) |
| 468 | fn | parsePosixTimedWrapperChildPid | (private) |
| 485 | fn | parsePosixTimedWrapperSpawnError | (private) |
| 507 | fn | runPosixTimedCommandSync | (private) |
| 537 | fn | sh | pub |
| 541 | fn | runStreaming | pub |

## scripts/e2e/parallels/linux-smoke.ts (904 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | fn | parseOpenClawPackageVersion | (private) |
| 66 | fn | compareOpenClawPackageVersions | (private) |
| 88 | interface | LinuxOptions | (private) |
| 97 | interface | LinuxSummary | (private) |
| 144 | fn | usage | (private) |
| 171 | fn | parseArgs | pub |
| 251 | fn | stripLeadingPackageManagerSeparator | (private) |
| 255 | class | LinuxSmoke | (private) |
| 902 | fn | runSmoke | (private) |

## scripts/e2e/parallels/macos-smoke.ts (1295 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | interface | MacosOptions | (private) |
| 78 | interface | MacosSummary | (private) |
| 141 | fn | usage | (private) |
| 171 | fn | parseArgs | pub |
| 266 | fn | stripLeadingPackageManagerSeparator | (private) |
| 270 | class | MacosSmoke | (private) |
| 1290 | fn | runSmoke | (private) |

## scripts/e2e/parallels/npm-update-smoke.ts (1633 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | interface | NpmUpdateOptions | (private) |
| 74 | interface | Job | (private) |
| 88 | interface | UpdateJobContext | (private) |
| 94 | interface | SpawnLoggedOptions | (private) |
| 100 | interface | NpmUpdateSummary | (private) |
| 136 | fn | resolveRequiredTimerMs | (private) |
| 140 | fn | resolveOptionalTimerMs | (private) |
| 144 | fn | resolveSecondsTimerMs | (private) |
| 161 | fn | freshLaneTimeoutMs | pub |
| 168 | fn | spawnLoggedCommand | pub |
| 189 | fn | append | (private) |
| 236 | fn | finish | (private) |
| 253 | fn | trackLoggedChild | (private) |
| 268 | fn | untrackLoggedChild | (private) |
| 274 | fn | installLoggedParentCleanup | (private) |
| 283 | fn | handler | (private) |
| 296 | fn | cleanupActiveLoggedChildren | (private) |
| 305 | fn | loggedProcessTreeIsAlive | (private) |
| 317 | fn | waitForLoggedProcessTreeExit | (private) |
| 333 | fn | finishTimedOutLoggedProcessTree | (private) |
| 354 | fn | signalLoggedChild | (private) |
| 374 | fn | usage | (private) |
| 400 | fn | parseArgs | pub |
| 502 | fn | stripLeadingPackageManagerSeparator | (private) |
| 506 | fn | platformRecord | (private) |
| 510 | fn | formatDuration | (private) |
| 514 | fn | readHarnessCheckoutVersion | (private) |
| 521 | fn | openClawVersionFamily | (private) |
| 525 | fn | parseOpenClawPackageSpecVersion | (private) |
| 533 | fn | readString | (private) |
| 537 | fn | isRecord | (private) |
| 541 | fn | parseRegistryPackageMetadata | pub |
| 566 | class | NpmUpdateSmoke | pub |
| 1628 | fn | runSmoke | (private) |

## scripts/e2e/parallels/windows-smoke.ts (868 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 60 | interface | WindowsOptions | (private) |
| 70 | interface | WindowsSummary | (private) |
| 124 | fn | usage | (private) |
| 154 | fn | parseArgs | pub |
| 244 | fn | stripLeadingPackageManagerSeparator | (private) |
| 248 | class | WindowsSmoke | (private) |
| 863 | fn | runSmoke | (private) |
