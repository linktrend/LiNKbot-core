# extensions/openshell/src/backend.ts

[← Back to Module](../modules/extensions-openshell-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1004
- **Language:** TypeScript
- **Symbols:** 17
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 40 | type | CreateOpenShellSandboxBackendFactoryParams | (private) | - |
| 44 | type | PendingExec | (private) | - |
| 49 | fn | buildOpenShellDirectoryUploadArgs | (private) | `function buildOpenShellDirectoryUploadArgs(para...` |
| 206 | fn | buildOpenShellSshExecEnv | (private) | `function buildOpenShellSshExecEnv(): NodeJS.Pro...` |
| 210 | fn | createOpenShellSandboxBackendFactory | pub | `export function createOpenShellSandboxBackendFa...` |
| 220 | fn | createOpenShellSandboxBackendManager | pub | `export function createOpenShellSandboxBackendMa...` |
| 253 | fn | createOpenShellSandboxBackend | (private) | `async function createOpenShellSandboxBackend(pa...` |
| 325 | class | OpenShellSandboxBackendImpl | (private) | - |
| 883 | fn | resolveOpenShellPluginConfigFromConfig | (private) | `function resolveOpenShellPluginConfigFromConfig(` |
| 894 | fn | buildOpenShellSandboxName | (private) | `function buildOpenShellSandboxName(scopeKey: st...` |
| 907 | fn | resolveRemoteMaterializedSkillsWorkspaceDir | (private) | `function resolveRemoteMaterializedSkillsWorkspa...` |
| 912 | fn | removeMaterializedSkillsFromDownloadedWorkspace | (private) | `async function removeMaterializedSkillsFromDown...` |
| 932 | fn | moveMaterializedSkillsShadowAside | (private) | `async function moveMaterializedSkillsShadowAsid...` |
| 953 | fn | restoreMaterializedSkillsShadow | (private) | `async function restoreMaterializedSkillsShadow(...` |
| 985 | fn | resolveOpenShellTmpRoot | (private) | `function resolveOpenShellTmpRoot(): string {` |
| 989 | fn | normalizeRemotePath | (private) | `function normalizeRemotePath(remotePath: string...` |
| 997 | fn | isRemotePathInside | (private) | `function isRemotePathInside(root: string, candi...` |

## Public API

### `createOpenShellSandboxBackendFactory`

```
export function createOpenShellSandboxBackendFactory(
```

**Line:** 210 | **Kind:** fn

### `createOpenShellSandboxBackendManager`

```
export function createOpenShellSandboxBackendManager(params: {
```

**Line:** 220 | **Kind:** fn
