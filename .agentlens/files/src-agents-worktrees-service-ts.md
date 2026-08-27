# src/agents/worktrees/service.ts

[← Back to Module](../modules/src-agents-worktrees/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1125
- **Language:** TypeScript
- **Symbols:** 27
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 65 | class | WorktreeSnapshotError | pub | - |
| 75 | type | ServiceOptions | (private) | - |
| 80 | type | WorktreeCleanupLimits | pub | - |
| 85 | type | ManagedWorktreeGcParams | (private) | - |
| 91 | fn | resolveWorktreeCleanupLimits | pub | `export function resolveWorktreeCleanupLimits():...` |
| 95 | fn | resultMessage | (private) | `function resultMessage(result: GitResult): stri...` |
| 99 | fn | validateName | (private) | `function validateName(name: string): string {` |
| 106 | fn | generateName | (private) | `function generateName(): string {` |
| 110 | fn | resolveRepository | (private) | `async function resolveRepository(repoRoot: stri...` |
| 140 | fn | cleanupFailedCreate | (private) | `async function cleanupFailedCreate(repoRoot: st...` |
| 151 | fn | resetFailedWorktreeAdd | (private) | `async function resetFailedWorktreeAdd(` |
| 180 | fn | canResetFailedWorktreeAdd | (private) | `async function canResetFailedWorktreeAdd(` |
| 206 | fn | runSetupScript | (private) | `async function runSetupScript(repoRoot: string,...` |
| 227 | fn | isMissingFileError | (private) | `function isMissingFileError(error: unknown): bo...` |
| 236 | fn | directorySizeBytes | (private) | `async function directorySizeBytes(root: string)...` |
| 264 | fn | containsGitMarker | (private) | `async function containsGitMarker(root: string, ...` |
| 288 | fn | splitNullBuffer | (private) | `function splitNullBuffer(input: Buffer): Buffer...` |
| 306 | fn | gitPathKey | (private) | `function gitPathKey(gitPath: Buffer): string {` |
| 310 | fn | checkoutPathFromGitBytes | (private) | `function checkoutPathFromGitBytes(checkoutRoot:...` |
| 317 | fn | rawPathExists | (private) | `async function rawPathExists(target: string | B...` |
| 329 | fn | snapshotWorktree | (private) | `async function snapshotWorktree(` |
| 357 | fn | addSnapshotPath | (private) | `const addSnapshotPath = (entry: Buffer) => {` |
| 452 | class | ManagedWorktreeService | pub | - |
| 507 | fn | worktreeAddArgs | (private) | `const worktreeAddArgs = () => [` |
| 657 | fn | rank | (private) | `const rank = (shortName: string) =>` |
| 1014 | fn | overLimit | (private) | `const overLimit = () =>` |
| 1025 | fn | refreshTotals | (private) | `const refreshTotals = () => {` |

## Public API

### `resolveWorktreeCleanupLimits`

```
export function resolveWorktreeCleanupLimits(): WorktreeCleanupLimits {
```

**Line:** 91 | **Kind:** fn
