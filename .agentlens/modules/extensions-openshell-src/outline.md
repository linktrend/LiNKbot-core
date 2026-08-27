# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## extensions/openshell/src/backend.e2e.test.ts (682 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 44 | type | ExecResult | (private) |
| 50 | type | HostPolicyServer | (private) |
| 55 | fn | runCommand | (private) |
| 118 | fn | commandAvailable | (private) |
| 132 | fn | activeOpenShellGateway | (private) |
| 185 | fn | dockerReady | (private) |
| 199 | fn | resolveOpenShellHostIp | (private) |
| 234 | fn | allocatePort | (private) |
| 256 | fn | openshellEnv | (private) |
| 268 | fn | trimTrailingNewline | (private) |
| 272 | fn | startHostPolicyServer | (private) |
| 280 | class | Handler | (private) |
| 366 | fn | buildOpenShellPolicyYaml | (private) |
| 402 | fn | runBackendExec | (private) |

## extensions/openshell/src/backend.ts (1004 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | CreateOpenShellSandboxBackendFactoryParams | (private) |
| 44 | type | PendingExec | (private) |
| 49 | fn | buildOpenShellDirectoryUploadArgs | (private) |
| 206 | fn | buildOpenShellSshExecEnv | (private) |
| 210 | fn | createOpenShellSandboxBackendFactory | pub |
| 220 | fn | createOpenShellSandboxBackendManager | pub |
| 253 | fn | createOpenShellSandboxBackend | (private) |
| 325 | class | OpenShellSandboxBackendImpl | (private) |
| 883 | fn | resolveOpenShellPluginConfigFromConfig | (private) |
| 894 | fn | buildOpenShellSandboxName | (private) |
| 907 | fn | resolveRemoteMaterializedSkillsWorkspaceDir | (private) |
| 912 | fn | removeMaterializedSkillsFromDownloadedWorkspace | (private) |
| 932 | fn | moveMaterializedSkillsShadowAside | (private) |
| 953 | fn | restoreMaterializedSkillsShadow | (private) |
| 985 | fn | resolveOpenShellTmpRoot | (private) |
| 989 | fn | normalizeRemotePath | (private) |
| 997 | fn | isRemotePathInside | (private) |

## extensions/openshell/src/fs-bridge.ts (641 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | ResolvedMountPath | (private) |
| 20 | type | FsSafeRoot | (private) |
| 21 | type | FsSafeStat | (private) |
| 25 | fn | createOpenShellFsBridge | pub |
| 32 | class | OpenShellFsBridge | (private) |
| 358 | fn | mkdirLocalRootPath | (private) |
| 370 | fn | removeLocalRootPath | (private) |
| 405 | fn | removeRootTree | (private) |
| 423 | fn | moveLocalRootPath | (private) |
| 436 | fn | mkdirParentPath | (private) |
| 444 | fn | relativeToRoot | (private) |
| 449 | fn | assertRenameSourceSupported | (private) |
| 461 | fn | assertSameDeviceRenameSupported | (private) |
| 476 | fn | nearestExistingDirectoryStats | (private) |
| 504 | fn | isNotFoundError | (private) |
| 514 | fn | resolveProtectedSkillTarget | (private) |
| 549 | fn | resolveProtectedSkillShadowTarget | (private) |
| 580 | fn | assertLocalPathSafety | (private) |
| 622 | fn | resolveCanonicalCandidate | (private) |

## extensions/openshell/src/openshell-core.test.ts (1435 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | installOpenShellBackendMocks | (private) |
| 66 | fn | uninstallOpenShellBackendMocks | (private) |
| 72 | fn | resetOpenShellBackendMocks | (private) |
| 573 | fn | createOpenShellBackendSandboxConfig | (private) |
| 598 | fn | makeTempDir | (private) |
| 604 | fn | makeExecutable | (private) |
| 614 | fn | readOpenShellSshConfig | (private) |
| 643 | fn | expectPathMissing | (private) |
| 658 | fn | createMirrorBackendMock | (private) |
