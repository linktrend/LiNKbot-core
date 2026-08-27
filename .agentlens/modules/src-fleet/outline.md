# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 7 large files in this module.

## src/fleet/backup.runtime.test.ts (537 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | inspection | (private) |
| 47 | fn | containerMock | (private) |
| 73 | fn | createArchive | (private) |
| 281 | fn | restoreParams | (private) |

## src/fleet/backup.runtime.ts (814 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | BackupLinkCacheKey | (private) |
| 45 | class | BackupLinkCache | (private) |
| 55 | type | FleetBackupManifest | (private) |
| 65 | type | FleetBackupResult | (private) |
| 74 | type | FleetRestoreResult | (private) |
| 83 | fn | errorMessage | (private) |
| 87 | fn | timestampBasename | (private) |
| 95 | fn | resolveOutputPath | (private) |
| 110 | fn | canonicalizeForContainment | (private) |
| 129 | fn | isWithin | (private) |
| 137 | fn | remapArchivePath | (private) |
| 158 | fn | backupFleetCell | pub |
| 372 | fn | publishArchive | (private) |
| 400 | fn | isAllowedRestorePath | (private) |
| 420 | fn | restoreEntryKind | (private) |
| 432 | fn | resolveRestoreOwner | (private) |
| 448 | fn | chownTree | (private) |
| 463 | fn | restoreFleetCell | pub |

## src/fleet/containers.runtime.test.ts (607 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | FleetContainerCommandExecutor | (private) |
| 27 | type | FleetContainerStreamExecutor | (private) |
| 29 | fn | successfulExecutor | (private) |

## src/fleet/containers.runtime.ts (813 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | FleetContainerCommandOptions | (private) |
| 21 | type | FleetContainerCommandResult | (private) |
| 27 | type | FleetContainerCommandExecutor | (private) |
| 33 | type | FleetContainerStreamResult | (private) |
| 49 | type | FleetContainerStreamExecutor | (private) |
| 55 | type | FleetContainerLogsOptions | (private) |
| 61 | type | FleetContainerInspectResult | pub |
| 88 | type | FleetNetworkInspectResult | pub |
| 98 | type | FleetContainerRuntime | pub |
| 103 | class | InvalidInspectOutputError | (private) |
| 109 | fn | isRecord | (private) |
| 113 | fn | requireRecord | (private) |
| 120 | fn | requireString | (private) |
| 127 | fn | requireBoolean | (private) |
| 134 | fn | requireNonNegativeNumber | (private) |
| 141 | fn | readOptionalString | (private) |
| 151 | fn | readLabels | (private) |
| 166 | fn | readStringRecord | (private) |
| 179 | fn | readStringArray | (private) |
| 189 | fn | readOptionalBoolean | (private) |
| 196 | fn | readRestartPolicy | (private) |
| 203 | fn | readPortBindings | (private) |
| 226 | fn | readNetworkAttachments | (private) |
| 247 | fn | readEnvironment | (private) |
| 265 | fn | readPidsLimit | (private) |
| 275 | fn | parseInspectOutput | (private) |
| 317 | fn | parseNetworkInspectOutput | (private) |
| 339 | fn | parseDockerContextEndpoint | (private) |
| 359 | fn | isLocalDockerEndpoint | (private) |
| 373 | fn | parsePodmanServiceIsRemote | (private) |
| 393 | fn | parseDockerRootlessInfo | (private) |
| 406 | fn | readEnvironmentValues | (private) |
| 435 | fn | redactEnvironmentValues | (private) |
| 450 | fn | formatExecutorError | (private) |
| 461 | fn | commandFailureError | (private) |
| 540 | fn | isMissingContainerError | (private) |
| 550 | fn | isMissingNetworkError | (private) |
| 560 | fn | validateNetworkName | (private) |
| 568 | fn | validateContainerName | (private) |
| 576 | fn | buildLogsArgs | (private) |
| 598 | fn | createFleetContainerRuntime | pub |

## src/fleet/service-support.runtime.ts (687 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | type | FleetHealthResult | (private) |
| 44 | fn | requiredRecord | (private) |
| 51 | fn | optionalRecord | (private) |
| 58 | fn | readAllowedOrigins | (private) |
| 68 | fn | ensurePrivateDirectory | (private) |
| 77 | fn | prepareCellDirectories | pub |
| 94 | fn | prepareCellConfig | pub |
| 154 | type | HostIdentity | pub |
| 156 | fn | readHostIdentity | pub |
| 171 | fn | resolveContainerUser | pub |
| 200 | fn | detectHostSelinux | pub |
| 212 | fn | inspectionState | pub |
| 225 | fn | assertManagedInspection | pub |
| 248 | fn | probeCellHealth | pub |
| 283 | fn | resolvePurgeTarget | pub |
| 320 | fn | requireCell | pub |
| 329 | fn | assertCurrentReservation | pub |
| 344 | fn | requirePositiveResource | (private) |
| 356 | fn | requireInspectedGatewayToken | pub |
| 367 | fn | requireInspectedAttemptId | pub |
| 378 | fn | requirePidsLimit | (private) |
| 388 | fn | rebuildInspectedEnvironment | (private) |
| 412 | fn | buildProfileBaseFromInspection | pub |
| 450 | fn | verifyReplacementHealthy | pub |
| 494 | fn | cleanupFailedCreateContainer | pub |
| 523 | fn | cleanupFailedCreateNetwork | pub |
| 555 | fn | inspectionHasFleetOwner | (private) |
| 565 | fn | assertManagedNetwork | pub |
| 596 | fn | restorePreviousCell | pub |
| 637 | fn | withFleetCellOperation | pub |
| 649 | fn | checkpoint | (private) |

## src/fleet/service.runtime.test.ts (1084 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | FleetServiceOptions | (private) |
| 17 | fn | createFleetService | (private) |
| 21 | fn | fleetLabels | (private) |
| 30 | fn | runningInspection | (private) |
| 60 | fn | createContainerMock | (private) |

## src/fleet/service.runtime.ts (799 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 71 | fn | probeLoopbackPort | (private) |
| 86 | type | FleetCreateOptions | pub |
| 101 | type | FleetCreateResult | (private) |
| 114 | type | FleetListEntry | (private) |
| 122 | type | FleetHealthResult | pub |
| 127 | type | FleetStatusResult | (private) |
| 143 | type | FleetLifecycleAction | pub |
| 145 | type | FleetLogsOptions | pub |
| 152 | type | FleetActionResult | (private) |
| 159 | type | FleetServiceOptions | (private) |
| 174 | fn | createFleetService | pub |
