# src/agents/workspace.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1200
- **Language:** TypeScript
- **Symbols:** 47
- **Public symbols:** 12

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 75 | type | WorkspaceGuardedReadResult | (private) | - |
| 79 | fn | workspaceFileIdentity | (private) | `function workspaceFileIdentity(stat: syncFs.Sta...` |
| 83 | fn | readWorkspaceFileWithGuards | (private) | `async function readWorkspaceFileWithGuards(para...` |
| 142 | fn | stripFrontMatter | (private) | `function stripFrontMatter(content: string): str...` |
| 146 | fn | loadTemplate | (private) | `async function loadTemplate(name: string): Prom...` |
| 152 | fn | pending | (private) | `const pending = (async () => {` |
| 184 | type | WorkspaceBootstrapFileName | pub | - |
| 194 | type | WorkspaceBootstrapFile | pub | - |
| 201 | type | ExtraBootstrapLoadDiagnosticCode | pub | - |
| 207 | type | ExtraBootstrapLoadDiagnostic | pub | - |
| 234 | class | WorkspaceVanishedError | pub | - |
| 249 | fn | writeFileIfMissing | (private) | `async function writeFileIfMissing(filePath: str...` |
| 265 | fn | isTransientWorkspaceReadError | (private) | `function isTransientWorkspaceReadError(error: u...` |
| 276 | fn | fileContentDiffersFromTemplate | (private) | `async function fileContentDiffersFromTemplate(` |
| 296 | fn | hasWorkspaceUserContentEvidence | (private) | `async function hasWorkspaceUserContentEvidence(` |
| 318 | fn | hasWorkspaceSkillEvidence | (private) | `async function hasWorkspaceSkillEvidence(dir: s...` |
| 338 | fn | hasSkipBootstrapWorkspaceContentEvidence | (private) | `async function hasSkipBootstrapWorkspaceContent...` |
| 365 | fn | workspaceProfileLooksConfigured | (private) | `async function workspaceProfileLooksConfigured(...` |
| 382 | fn | workspaceRequiredBootstrapLooksCustomized | (private) | `async function workspaceRequiredBootstrapLooksC...` |
| 412 | fn | workspaceAttestedGeneratedFilesIntact | (private) | `async function workspaceAttestedGeneratedFilesI...` |
| 436 | fn | workspaceHasBootstrapCompletionEvidence | (private) | `async function workspaceHasBootstrapCompletionE...` |
| 440 | type | WorkspaceBootstrapCompletionReconcileResult | (private) | - |
| 446 | fn | reconcileWorkspaceBootstrapCompletionState | (private) | `async function reconcileWorkspaceBootstrapCompl...` |
| 494 | fn | collectGeneratedBootstrapHashes | (private) | `async function collectGeneratedBootstrapHashes(...` |
| 517 | fn | recentWorkspaceAttestation | (private) | `function recentWorkspaceAttestation(` |
| 533 | fn | maybeWriteWorkspaceAttestation | (private) | `async function maybeWriteWorkspaceAttestation(d...` |
| 551 | fn | hasWorkspaceSetupStateMarker | (private) | `function hasWorkspaceSetupStateMarker(state: Wo...` |
| 555 | fn | hasRecentWorkspaceSetupState | (private) | `function hasRecentWorkspaceSetupState(` |
| 565 | fn | workspaceAttestationHasSurvivalEvidence | (private) | `async function workspaceAttestationHasSurvivalE...` |
| 590 | fn | workspaceSetupStateHasSurvivalEvidence | (private) | `async function workspaceSetupStateHasSurvivalEv...` |
| 619 | fn | readCanonicalWorkspaceStateSnapshot | (private) | `function readCanonicalWorkspaceStateSnapshot(di...` |
| 627 | fn | isWorkspaceSetupCompleted | pub | `export async function isWorkspaceSetupCompleted...` |
| 632 | fn | resolveWorkspaceBootstrapStatus | pub | `export async function resolveWorkspaceBootstrap...` |
| 648 | fn | isWorkspaceBootstrapPending | pub | `export async function isWorkspaceBootstrapPendi...` |
| 652 | fn | hasGitRepo | (private) | `async function hasGitRepo(dir: string): Promise...` |
| 661 | fn | isGitAvailable | (private) | `async function isGitAvailable(): Promise<boolea...` |
| 678 | fn | ensureGitRepo | (private) | `async function ensureGitRepo(dir: string, isBra...` |
| 695 | fn | ensureAgentWorkspace | pub | `export async function ensureAgentWorkspace(para...` |
| 872 | fn | markState | (private) | `const markState = (next: Partial<WorkspaceSetup...` |
| 876 | fn | nowIso | (private) | `const nowIso = () => new Date().toISOString();` |
| 949 | fn | loadWorkspaceBootstrapFiles | pub | `export async function loadWorkspaceBootstrapFil...` |
| 1026 | fn | filterBootstrapFilesForSession | pub | `export function filterBootstrapFilesForSession(` |
| 1042 | fn | hasGlobPattern | (private) | `function hasGlobPattern(pattern: string): boole...` |
| 1047 | fn | normalizeWorkspacePatternPath | (private) | `function normalizeWorkspacePatternPath(value: s...` |
| 1054 | fn | resolveGlobWalkRoot | (private) | `function resolveGlobWalkRoot(pattern: string): ...` |
| 1099 | fn | resolveExtraBootstrapPatternPaths | (private) | `async function resolveExtraBootstrapPatternPaths(` |
| 1132 | fn | loadExtraBootstrapFilesWithDiagnostics | pub | `export async function loadExtraBootstrapFilesWi...` |

## Public API

### `isWorkspaceSetupCompleted`

```
export async function isWorkspaceSetupCompleted(dir: string): Promise<boolean> {
```

**Line:** 627 | **Kind:** fn

### `resolveWorkspaceBootstrapStatus`

```
export async function resolveWorkspaceBootstrapStatus(
```

**Line:** 632 | **Kind:** fn

### `isWorkspaceBootstrapPending`

```
export async function isWorkspaceBootstrapPending(dir: string): Promise<boolean> {
```

**Line:** 648 | **Kind:** fn

### `ensureAgentWorkspace`

```
export async function ensureAgentWorkspace(params?: {
```

**Line:** 695 | **Kind:** fn

### `loadWorkspaceBootstrapFiles`

```
export async function loadWorkspaceBootstrapFiles(dir: string): Promise<WorkspaceBootstrapFile[]> {
```

**Line:** 949 | **Kind:** fn

### `filterBootstrapFilesForSession`

```
export function filterBootstrapFilesForSession(
```

**Line:** 1026 | **Kind:** fn

### `loadExtraBootstrapFilesWithDiagnostics`

```
export async function loadExtraBootstrapFilesWithDiagnostics(
```

**Line:** 1132 | **Kind:** fn
