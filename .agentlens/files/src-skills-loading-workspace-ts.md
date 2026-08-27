# src/skills/loading/workspace.ts

[← Back to Module](../modules/src-skills-loading/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1895
- **Language:** TypeScript
- **Symbols:** 70
- **Public symbols:** 8

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 73 | fn | resolveUserHomeDir | (private) | `function resolveUserHomeDir(): string | undefin...` |
| 77 | fn | resolveNativeUserHomeDir | (private) | `function resolveNativeUserHomeDir(): string | u...` |
| 85 | fn | resolveCompactHomePrefixes | (private) | `function resolveCompactHomePrefixes(): string[] {` |
| 96 | fn | compactSkillPaths | (private) | `function compactSkillPaths(skills: Skill[]): Sk...` |
| 111 | fn | resolvePreservedPromptSkillPathRoots | (private) | `function resolvePreservedPromptSkillPathRoots()...` |
| 123 | fn | resolvePromptTildeRoots | (private) | `function resolvePromptTildeRoots(): string[] {` |
| 136 | fn | isContainerStateHomeWherePromptTildeEscapes | (private) | `function isContainerStateHomeWherePromptTildeEs...` |
| 144 | fn | shouldPreservePromptSkillPath | (private) | `function shouldPreservePromptSkillPath(` |
| 161 | fn | compactHomePath | (private) | `function compactHomePath(filePath: string, home...` |
| 172 | fn | compactHomePrefixesForHome | (private) | `function compactHomePrefixesForHome(home: strin...` |
| 180 | fn | normalizeCompactedSkillPath | (private) | `function normalizeCompactedSkillPath(filePath: ...` |
| 184 | fn | compactPathForConsoleMessage | (private) | `function compactPathForConsoleMessage(filePath:...` |
| 188 | fn | warnInvalidSkillFrontmatter | (private) | `function warnInvalidSkillFrontmatter(source: st...` |
| 199 | fn | filterSkillEntries | (private) | `function filterSkillEntries(` |
| 239 | type | ResolvedSkillsLimits | (private) | - |
| 247 | type | LoadedSkillRecord | (private) | - |
| 254 | type | CandidateSkillDir | (private) | - |
| 261 | type | ChildDirectoryScan | (private) | - |
| 267 | type | SkillDiscoveryBudget | (private) | - |
| 273 | fn | resolveSkillsLimits | (private) | `function resolveSkillsLimits(config?: OpenClawC...` |
| 289 | fn | listChildDirectories | (private) | `function listChildDirectories(` |
| 318 | fn | resolveRawEntryScanLimit | (private) | `function resolveRawEntryScanLimit(maxCandidateD...` |
| 332 | fn | createSkillDiscoveryBudget | (private) | `function createSkillDiscoveryBudget(maxCandidat...` |
| 341 | fn | listBudgetedChildDirectories | (private) | `function listBudgetedChildDirectories(` |
| 366 | fn | containsDiscoverableSkill | (private) | `function containsDiscoverableSkill(` |
| 412 | fn | hasCandidateSymlinkChild | (private) | `function hasCandidateSymlinkChild(` |
| 444 | fn | hasLoadableSkillFrontmatter | (private) | `function hasLoadableSkillFrontmatter(` |
| 459 | fn | isSymlinkPath | (private) | `function isSymlinkPath(filePath: string): boole...` |
| 467 | fn | buildEscapedSkillPathReason | (private) | `function buildEscapedSkillPathReason(params: { ...` |
| 498 | fn | warnEscapedSkillPath | (private) | `function warnEscapedSkillPath(params: {` |
| 532 | fn | resolveContainedSkillPath | (private) | `function resolveContainedSkillPath(params: {` |
| 559 | fn | resolveNestedSkillsRoot | (private) | `function resolveNestedSkillsRoot(` |
| 617 | fn | unwrapLoadedSkillRecords | (private) | `function unwrapLoadedSkillRecords(loaded: unkno...` |
| 638 | fn | loadContainedSkillRecords | (private) | `function loadContainedSkillRecords(params: {` |
| 660 | fn | readSourceInstallSkillKey | (private) | `function readSourceInstallSkillKey(skillDir: st...` |
| 684 | fn | resolveSkillEntryMetadata | (private) | `function resolveSkillEntryMetadata(params: {` |
| 702 | fn | canonicalizeLoadedSkillRecord | (private) | `function canonicalizeLoadedSkillRecord(` |
| 740 | fn | setSyncSourceForPluginSkill | (private) | `function setSyncSourceForPluginSkill(` |
| 751 | fn | isPathInsideAnyRoot | (private) | `function isPathInsideAnyRoot(rootRealPaths: rea...` |
| 755 | fn | shouldEnforceConfiguredSkillRootContainment | (private) | `function shouldEnforceConfiguredSkillRootContai...` |
| 759 | fn | shouldUseConfiguredSymlinkTargets | (private) | `function shouldUseConfiguredSymlinkTargets(sour...` |
| 767 | fn | resolveSkillRootCandidatePath | (private) | `function resolveSkillRootCandidatePath(params: {` |
| 788 | fn | canonicalSkillDirForSource | (private) | `function canonicalSkillDirForSource(source: str...` |
| 792 | fn | resolveSkillFilePath | (private) | `function resolveSkillFilePath(params: {` |
| 806 | fn | resolvePluginSkillRootRealPaths | (private) | `function resolvePluginSkillRootRealPaths(plugin...` |
| 812 | fn | loadGeneratedPluginSkillRecords | (private) | `function loadGeneratedPluginSkillRecords(params: {` |
| 912 | fn | loadSkillEntries | (private) | `function loadSkillEntries(` |
| 1027 | fn | loadCandidateSkill | (private) | `const loadCandidateSkill = ({` |
| 1250 | fn | mergeRecord | (private) | `const mergeRecord = (record: LoadedSkillRecord)...` |
| 1314 | fn | filterArchivedSkillEntries | (private) | `function filterArchivedSkillEntries(entries: Sk...` |
| 1320 | fn | escapeXml | (private) | `function escapeXml(str: string): string {` |
| 1332 | fn | truncateSkillDescription | (private) | `function truncateSkillDescription(description: ...` |
| 1347 | fn | formatSkillsCompact | pub | `export function formatSkillsCompact(` |
| 1390 | type | SkillsPromptFormat | (private) | - |
| 1392 | fn | buildSkillsLimitNote | (private) | `function buildSkillsLimitNote(params: {` |
| 1413 | fn | buildRenderedSkillsPrompt | (private) | `function buildRenderedSkillsPrompt(params: {` |
| 1435 | fn | applySkillsPromptLimits | (private) | `function applySkillsPromptLimits(params: {` |
| 1504 | fn | buildWorkspaceSkillSnapshot | pub | `export function buildWorkspaceSkillSnapshot(` |
| 1528 | fn | buildWorkspaceSkillsPrompt | pub | `export function buildWorkspaceSkillsPrompt(` |
| 1539 | type | WorkspaceSkillBuildOptions | (private) | - |
| 1550 | fn | resolveEffectiveWorkspaceSkillFilter | (private) | `function resolveEffectiveWorkspaceSkillFilter(` |
| 1562 | fn | resolveWorkspaceSkillPromptState | (private) | `function resolveWorkspaceSkillPromptState(` |
| 1611 | fn | resolveSkillsPromptForRun | pub | `export function resolveSkillsPromptForRun(param...` |
| 1699 | fn | loadWorkspaceSkillEntries | pub | `export function loadWorkspaceSkillEntries(` |
| 1724 | fn | loadVisibleWorkspaceSkillEntries | pub | `export function loadVisibleWorkspaceSkillEntries(` |
| 1743 | fn | resolveUniqueSyncedSkillDirName | (private) | `function resolveUniqueSyncedSkillDirName(base: ...` |
| 1765 | fn | resolveSyncedSkillDestinationPath | (private) | `function resolveSyncedSkillDestinationPath(para...` |
| 1784 | fn | prepareSyncedSkillsDirectory | (private) | `async function prepareSyncedSkillsDirectory(tar...` |
| 1807 | fn | syncSkillsToWorkspace | pub | `export async function syncSkillsToWorkspace(par...` |
| 1885 | fn | filterWorkspaceSkillEntriesWithOptions | pub | `export function filterWorkspaceSkillEntriesWith...` |

## Public API

### `formatSkillsCompact`

```
export function formatSkillsCompact(
```

**Line:** 1347 | **Kind:** fn

### `buildWorkspaceSkillSnapshot`

```
export function buildWorkspaceSkillSnapshot(
```

**Line:** 1504 | **Kind:** fn

### `buildWorkspaceSkillsPrompt`

```
export function buildWorkspaceSkillsPrompt(
```

**Line:** 1528 | **Kind:** fn

### `resolveSkillsPromptForRun`

```
export function resolveSkillsPromptForRun(params: {
```

**Line:** 1611 | **Kind:** fn

### `loadWorkspaceSkillEntries`

```
export function loadWorkspaceSkillEntries(
```

**Line:** 1699 | **Kind:** fn

### `loadVisibleWorkspaceSkillEntries`

```
export function loadVisibleWorkspaceSkillEntries(
```

**Line:** 1724 | **Kind:** fn

### `syncSkillsToWorkspace`

```
export async function syncSkillsToWorkspace(params: {
```

**Line:** 1807 | **Kind:** fn

### `filterWorkspaceSkillEntriesWithOptions`

```
export function filterWorkspaceSkillEntriesWithOptions(
```

**Line:** 1885 | **Kind:** fn
