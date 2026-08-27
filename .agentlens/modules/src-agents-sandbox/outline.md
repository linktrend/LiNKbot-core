# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 9 large files in this module.

## src/agents/sandbox/browser.create.test.ts (1025 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 50 | fn | makeTempDir | (private) |
| 112 | fn | loadFreshBrowserModulesForTest | (private) |
| 118 | fn | buildConfig | (private) |
| 166 | fn | computeTestBrowserHash | (private) |
| 201 | type | EnsureSandboxBrowserParams | (private) |
| 203 | fn | ensureTestSandboxBrowser | (private) |
| 210 | fn | requireDockerCreateArgs | (private) |
| 218 | fn | requireValue | (private) |
| 225 | fn | latestBridgeResolved | (private) |

## src/agents/sandbox/browser.ts (548 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 73 | fn | buildSandboxCdpAuthHeader | (private) |
| 77 | fn | buildSandboxCdpUrl | (private) |
| 84 | fn | waitForSandboxCdp | (private) |
| 123 | fn | buildSandboxBrowserResolvedConfig | (private) |
| 174 | fn | ensureSandboxBrowserImage | (private) |
| 204 | fn | ensureDockerNetwork | (private) |
| 222 | fn | ensureSandboxBrowser | pub |
| 243 | fn | stopExistingForContainer | (private) |
| 325 | fn | hint | (private) |
| 470 | fn | ensureBridge | (private) |

## src/agents/sandbox/docker.config-hash-recreate.test.ts (528 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | SpawnCall | (private) |
| 38 | fn | makeTempDir | (private) |
| 53 | fn | spawnDockerProcess | (private) |
| 101 | fn | loadFreshDockerModuleForTest | (private) |
| 114 | fn | createSandboxConfig | (private) |
| 165 | fn | ensureSandboxCreateCallForTest | (private) |

## src/agents/sandbox/docker.ts (594 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | ExecDockerRawOptions | (private) |
| 18 | type | ExecDockerRawResult | pub |
| 24 | type | ExecDockerRawError | (private) |
| 30 | fn | execDockerRaw | pub |
| 114 | type | ExecDockerOptions | (private) |
| 116 | fn | envRecordsEqual | (private) |
| 132 | fn | resolveDockerEnvPolicyEpoch | pub |
| 141 | fn | execDocker | pub |
| 150 | fn | readDockerContainerLabel | pub |
| 168 | fn | readDockerContainerEnvVar | pub |
| 187 | fn | readDockerPort | pub |
| 210 | fn | isDockerDaemonUnavailable | pub |
| 214 | fn | formatDockerDaemonUnavailableError | pub |
| 225 | fn | inspectDockerImage | (private) |
| 242 | fn | ensureDockerImage | pub |
| 255 | fn | dockerContainerState | pub |
| 265 | fn | normalizeDockerLimit | (private) |
| 276 | fn | normalizeFiniteDockerNumber | (private) |
| 280 | fn | formatUlimitValue | (private) |
| 309 | fn | buildSandboxCreateArgs | pub |
| 435 | fn | appendCustomBinds | (private) |
| 444 | fn | createSandboxContainer | (private) |
| 492 | fn | readContainerConfigHash | (private) |
| 496 | fn | ensureSandboxContainer | pub |

## src/agents/sandbox/fs-bridge-mutation-helper.ts (526 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 417 | fn | buildPinnedMutationPlan | (private) |
| 444 | fn | buildPinnedWritePlan | pub |
| 461 | fn | buildPinnedMkdirpPlan | pub |
| 471 | fn | buildPinnedRemovePlan | pub |
| 498 | fn | buildPinnedRenamePlan | pub |

## src/agents/sandbox/registry.ts (743 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | SandboxRegistryEntry | pub |
| 38 | type | SandboxRegistry | (private) |
| 42 | type | SandboxBrowserRegistryEntry | pub |
| 53 | type | SandboxBrowserRegistry | (private) |
| 57 | type | RegistryEntry | (private) |
| 61 | type | RegistryEntryPayload | (private) |
| 63 | type | RegistryFile | (private) |
| 73 | type | LegacyRegistryKind | (private) |
| 74 | type | SandboxRegistryKind | (private) |
| 75 | type | SandboxRegistryTable | (private) |
| 76 | type | SandboxRegistryDatabase | (private) |
| 77 | type | SandboxRegistryRow | (private) |
| 78 | type | SandboxRegistryInsert | (private) |
| 79 | type | SandboxRegistryUpdate | (private) |
| 81 | type | LegacyRegistryTarget | (private) |
| 87 | type | LegacySandboxRegistryInspection | pub |
| 94 | type | LegacySandboxRegistryMigrationResult | pub |
| 111 | fn | getSandboxRegistryKysely | (private) |
| 115 | fn | parseRegistryEntryJson | (private) |
| 126 | fn | optionalPayloadString | (private) |
| 130 | fn | rowToContainerEntry | (private) |
| 152 | fn | rowToBrowserEntry | (private) |
| 173 | fn | containerEntryToRow | (private) |
| 201 | fn | browserEntryToRow | (private) |
| 229 | fn | rowToUpdate | (private) |
| 234 | fn | readRegistryRows | (private) |
| 255 | fn | readRegistryRow | (private) |
| 282 | fn | insertRegistryRowIfMissing | (private) |
| 297 | fn | insertRegistryRow | (private) |
| 313 | fn | readRegistryRowFromDb | (private) |
| 332 | fn | removeRegistryRow | (private) |
| 345 | fn | normalizeSandboxRegistryEntry | (private) |
| 354 | fn | withRegistryLock | (private) |
| 367 | fn | readLegacyRegistryFile | (private) |
| 385 | fn | readRegistry | pub |
| 394 | fn | readShardedEntriesDetailed | (private) |
| 446 | fn | quarantineLegacyRegistry | (private) |
| 457 | fn | quarantineInvalidShards | (private) |
| 476 | fn | removeFiles | (private) |
| 480 | fn | migrateMonolithicIfNeeded | (private) |
| 523 | fn | writeLegacyEntryIfMissing | (private) |
| 551 | fn | migrateShardedIfNeeded | (private) |
| 595 | fn | combineMigrationResults | (private) |
| 616 | fn | legacyRegistryTargets | (private) |
| 632 | fn | inspectLegacySandboxRegistryFiles | pub |
| 687 | fn | migrateLegacySandboxRegistryFiles | pub |
| 700 | fn | readRegistryEntry | pub |
| 709 | fn | updateRegistry | pub |
| 718 | fn | removeRegistryEntry | pub |
| 723 | fn | readBrowserRegistry | pub |
| 732 | fn | updateBrowserRegistry | pub |
| 741 | fn | removeBrowserRegistryEntry | pub |

## src/agents/sandbox/remote-fs-bridge.ts (739 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | RemoteMountSource | (private) |
| 30 | type | ResolvedRemotePath | (private) |
| 36 | fn | hasMultipleHardlinks | (private) |
| 44 | type | MountInfo | (private) |
| 52 | type | RemoteShellSandboxHandle | pub |
| 59 | fn | createRemoteShellSandboxFsBridge | pub |
| 66 | class | RemoteShellSandboxFsBridge | (private) |
| 636 | fn | buildRemoteProtectedSkillMounts | (private) |
| 714 | fn | compareRemoteMountsByContainerPath | (private) |
| 718 | fn | compareRemoteMountsByLocalPath | (private) |
| 722 | fn | mountPriority | (private) |
| 732 | fn | normalizeContainerPath | (private) |
| 737 | fn | toPosixRelative | (private) |

## src/agents/sandbox/ssh-backend.test.ts (790 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | fn | createTempDir | (private) |
| 47 | fn | createConfig | (private) |
| 69 | fn | createSession | (private) |
| 77 | fn | requireRecord | (private) |
| 84 | fn | requireMockRecordArg | (private) |
| 88 | fn | requireSshRunCommandParams | (private) |
| 94 | fn | requireSshUploadParams | (private) |
| 98 | fn | createBackendSandboxConfig | (private) |
| 135 | fn | expectBackendCreationToReject | (private) |

## src/agents/sandbox/ssh.ts (932 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | SshSandboxSettings | pub |
| 35 | type | SshSandboxSession | pub |
| 42 | type | RunSshSandboxCommandParams | pub |
| 51 | fn | normalizeInlineSshMaterial | (private) |
| 64 | fn | buildSshFailureMessage | (private) |
| 81 | fn | shellEscape | pub |
| 86 | fn | buildRemoteCommand | pub |
| 90 | type | ExecCommandQuoteState | (private) |
| 92 | type | ExecCommandFrame | (private) |
| 99 | type | HeredocMarker | (private) |
| 104 | type | PendingHeredoc | (private) |
| 108 | fn | assertValidExecRemoteCommand | (private) |
| 286 | fn | buildExecRemoteCommand | pub |
| 308 | fn | buildValidatedExecRemoteCommand | pub |
| 357 | fn | buildRemoteWorkdirValidationCommand | pub |
| 371 | fn | createExecCommandFrame | (private) |
| 375 | fn | readPlaceholderToken | (private) |
| 396 | fn | hasRedirectionTargetAfter | (private) |
| 405 | fn | isLikelyGeneratedWorkflowPlaceholder | (private) |
| 420 | fn | readHeredoc | (private) |
| 445 | fn | readHeredocDelimiter | (private) |
| 508 | fn | isHeredocDelimiterTerminator | (private) |
| 514 | fn | skipHeredocBodies | (private) |
| 546 | fn | isShellCommentStart | (private) |
| 551 | fn | skipShellComment | (private) |
| 557 | fn | buildSshSandboxArgv | pub |
| 575 | fn | createSshSandboxSessionFromConfigText | pub |
| 596 | fn | createSshSandboxSessionFromSettings | pub |
| 669 | fn | disposeSshSandboxSession | pub |
| 674 | fn | runSshSandboxCommand | pub |
| 757 | fn | uploadDirectoryToSshTarget | pub |
| 801 | fn | fail | (private) |
| 839 | fn | maybeResolve | (private) |
| 872 | fn | assertSafeUploadSymlinks | (private) |
| 876 | fn | walkDirectory | (private) |
| 905 | fn | parseSshConfigHost | (private) |
| 910 | fn | resolveSshTmpRoot | (private) |
| 914 | fn | resolveOptionalLocalPath | (private) |
| 919 | fn | writeSecretMaterial | (private) |
