# src/commands/doctor-state-integrity.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1511
- **Language:** TypeScript
- **Symbols:** 51
- **Public symbols:** 12

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 51 | type | DoctorPrompterLike | (private) | - |
| 60 | fn | existsDir | (private) | `function existsDir(dir: string): boolean {` |
| 68 | fn | existsFile | (private) | `function existsFile(filePath: string): boolean {` |
| 76 | type | OrphanAgentDir | (private) | - |
| 81 | type | StateIntegrityHealthIssue | pub | - |
| 131 | fn | tryResolveNativeRealPath | (private) | `function tryResolveNativeRealPath(targetPath: s...` |
| 139 | fn | resolveComparableTranscriptPath | (private) | `function resolveComparableTranscriptPath(filePa...` |
| 143 | fn | areComparablePathsEqual | (private) | `function areComparablePathsEqual(leftPath: stri...` |
| 149 | fn | isReachableConfiguredAgentDir | (private) | `function isReachableConfiguredAgentDir(params: {` |
| 164 | fn | formatOrphanAgentDirLabel | (private) | `function formatOrphanAgentDirLabel(entry: Orpha...` |
| 168 | fn | formatOrphanAgentDirPreview | (private) | `function formatOrphanAgentDirPreview(entries: O...` |
| 177 | fn | listOrphanAgentDirs | (private) | `function listOrphanAgentDirs(cfg: OpenClawConfi...` |
| 221 | fn | canWriteDir | (private) | `function canWriteDir(dir: string): boolean {` |
| 230 | fn | ensureDir | (private) | `function ensureDir(dir: string): { ok: boolean;...` |
| 239 | fn | dirPermissionHint | (private) | `function dirPermissionHint(dir: string): string...` |
| 256 | fn | addUserRwx | (private) | `function addUserRwx(mode: number): number {` |
| 261 | fn | countJsonlLines | (private) | `function countJsonlLines(filePath: string): num...` |
| 297 | fn | findOtherStateDirs | (private) | `function findOtherStateDirs(stateDir: string): ...` |
| 330 | fn | isPathUnderRoot | (private) | `function isPathUnderRoot(targetPath: string, ro...` |
| 343 | fn | tryResolveRealPath | (private) | `function tryResolveRealPath(targetPath: string)...` |
| 351 | fn | resolvePathThroughExistingAncestor | (private) | `function resolvePathThroughExistingAncestor(` |
| 372 | fn | decodeMountInfoPath | (private) | `function decodeMountInfoPath(value: string): st...` |
| 378 | fn | escapeControlCharsForTerminal | (private) | `function escapeControlCharsForTerminal(value: s...` |
| 411 | type | LinuxMountInfoEntry | (private) | - |
| 417 | type | LinuxSdBackedStateDir | (private) | - |
| 424 | fn | parseLinuxMountInfo | (private) | `function parseLinuxMountInfo(rawMountInfo: stri...` |
| 453 | fn | isPathUnderRootWithPathOps | (private) | `function isPathUnderRootWithPathOps(` |
| 470 | fn | findLinuxMountInfoEntryForPath | (private) | `function findLinuxMountInfoEntryForPath(` |
| 491 | fn | isMmcDevicePath | (private) | `function isMmcDevicePath(devicePath: string, pa...` |
| 496 | fn | tryReadLinuxMountInfo | (private) | `function tryReadLinuxMountInfo(): string | null {` |
| 505 | fn | detectLinuxSdBackedStateDir | pub | `export function detectLinuxSdBackedStateDir(` |
| 560 | fn | formatLinuxSdBackedStateDirWarning | pub | `export function formatLinuxSdBackedStateDirWarn...` |
| 578 | type | LinuxVolatileStateDir | (private) | - |
| 588 | fn | detectLinuxVolatileStateDir | pub | `export function detectLinuxVolatileStateDir(` |
| 628 | fn | formatLinuxVolatileStateDirWarning | pub | `export function formatLinuxVolatileStateDirWarn...` |
| 645 | fn | detectMacCloudSyncedStateDir | pub | `export function detectMacCloudSyncedStateDir(` |
| 690 | fn | isPairingPolicy | (private) | `function isPairingPolicy(value: unknown): boole...` |
| 694 | fn | hasPairingPolicy | (private) | `function hasPairingPolicy(value: unknown): bool...` |
| 718 | fn | isSlashRoutingSessionKey | (private) | `function isSlashRoutingSessionKey(sessionKey: s...` |
| 727 | fn | shouldRequireOAuthDir | (private) | `function shouldRequireOAuthDir(cfg: OpenClawCon...` |
| 763 | fn | shouldSuppressOrphanTranscriptWarning | (private) | `function shouldSuppressOrphanTranscriptWarning(...` |
| 768 | fn | detectStateIntegrityHealthIssues | pub | `export function detectStateIntegrityHealthIssues(` |
| 778 | fn | homedir | (private) | `const homedir = () => resolveRequiredHomeDir(en...` |
| 887 | fn | stateIntegrityIssueToHealthFinding | pub | `export function stateIntegrityIssueToHealthFind...` |
| 974 | fn | stateIntegrityIssueToRepairEffect | pub | `export function stateIntegrityIssueToRepairEffect(` |
| 1027 | fn | assertNeverStateIntegrityIssue | (private) | `function assertNeverStateIntegrityIssue(issue: ...` |
| 1034 | fn | noteStateIntegrity | pub | `export async function noteStateIntegrity(` |
| 1043 | fn | homedir | (private) | `const homedir = () => resolveRequiredHomeDir(en...` |
| 1194 | fn | displayDirFor | (private) | `const displayDirFor = (dir: string) => {` |
| 1493 | fn | collectWorkspaceBackupTip | pub | `export function collectWorkspaceBackupTip(works...` |
| 1505 | fn | noteWorkspaceBackupTip | pub | `export function noteWorkspaceBackupTip(workspac...` |

## Public API

### `detectLinuxSdBackedStateDir`

```
export function detectLinuxSdBackedStateDir(
```

**Line:** 505 | **Kind:** fn

### `formatLinuxSdBackedStateDirWarning`

```
export function formatLinuxSdBackedStateDirWarning(
```

**Line:** 560 | **Kind:** fn

### `detectLinuxVolatileStateDir`

```
export function detectLinuxVolatileStateDir(
```

**Line:** 588 | **Kind:** fn

### `formatLinuxVolatileStateDirWarning`

```
export function formatLinuxVolatileStateDirWarning(
```

**Line:** 628 | **Kind:** fn

### `detectMacCloudSyncedStateDir`

```
export function detectMacCloudSyncedStateDir(
```

**Line:** 645 | **Kind:** fn

### `detectStateIntegrityHealthIssues`

```
export function detectStateIntegrityHealthIssues(
```

**Line:** 768 | **Kind:** fn

### `stateIntegrityIssueToHealthFinding`

```
export function stateIntegrityIssueToHealthFinding(
```

**Line:** 887 | **Kind:** fn

### `stateIntegrityIssueToRepairEffect`

```
export function stateIntegrityIssueToRepairEffect(
```

**Line:** 974 | **Kind:** fn

### `noteStateIntegrity`

```
export async function noteStateIntegrity(
```

**Line:** 1034 | **Kind:** fn

### `collectWorkspaceBackupTip`

```
export function collectWorkspaceBackupTip(workspaceDir: string): string | null {
```

**Line:** 1493 | **Kind:** fn

### `noteWorkspaceBackupTip`

```
export function noteWorkspaceBackupTip(workspaceDir: string) {
```

**Line:** 1505 | **Kind:** fn
