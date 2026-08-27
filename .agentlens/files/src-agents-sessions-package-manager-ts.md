# src/agents/sessions/package-manager.ts

[← Back to Module](../modules/src-agents-sessions/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1486
- **Language:** TypeScript
- **Symbols:** 44
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 26 | interface | PathMetadata | pub | - |
| 33 | interface | ResolvedResource | pub | - |
| 39 | interface | ResolvedPaths | pub | - |
| 46 | type | MissingSourceAction | pub | - |
| 48 | interface | PackageManager | pub | - |
| 56 | interface | PackageManagerOptions | (private) | - |
| 62 | type | SourceScope | (private) | - |
| 64 | type | NpmSource | (private) | - |
| 71 | type | LocalSource | (private) | - |
| 76 | type | ParsedSource | (private) | - |
| 78 | interface | ResourceManifest | (private) | - |
| 85 | interface | ResourceAccumulator | (private) | - |
| 104 | fn | resourcePrecedenceRank | (private) | `function resourcePrecedenceRank(m: PathMetadata...` |
| 112 | interface | PackageFilter | (private) | - |
| 119 | type | ResourceType | (private) | - |
| 120 | type | TopLevelAutoResourceType | (private) | - |
| 131 | fn | getHomeDir | (private) | `function getHomeDir(): string {` |
| 135 | fn | getAgentResourceTempDir | (private) | `function getAgentResourceTempDir(agentDir: stri...` |
| 143 | fn | isPattern | (private) | `function isPattern(s: string): boolean {` |
| 153 | fn | isOverridePattern | (private) | `function isOverridePattern(s: string): boolean {` |
| 157 | fn | hasGlobPattern | (private) | `function hasGlobPattern(s: string): boolean {` |
| 161 | fn | splitPatterns | (private) | `function splitPatterns(entries: string[]): { pl...` |
| 174 | fn | collectFiles | (private) | `function collectFiles(` |
| 234 | type | SkillDiscoveryMode | (private) | - |
| 236 | fn | collectSkillEntries | (private) | `function collectSkillEntries(` |
| 333 | fn | collectAutoSkillEntries | (private) | `function collectAutoSkillEntries(dir: string, m...` |
| 337 | fn | findGitRepoRoot | (private) | `function findGitRepoRoot(startDir: string): str...` |
| 351 | fn | collectAncestorAgentsSkillDirs | (private) | `function collectAncestorAgentsSkillDirs(startDi...` |
| 372 | fn | collectTopLevelAutoResourceEntries | (private) | `function collectTopLevelAutoResourceEntries(` |
| 422 | fn | readResourceManifestFile | (private) | `function readResourceManifestFile(packageJsonPa...` |
| 432 | fn | resolveExtensionEntries | (private) | `function resolveExtensionEntries(dir: string, r...` |
| 462 | fn | collectAutoExtensionEntries | (private) | `function collectAutoExtensionEntries(dir: strin...` |
| 530 | fn | collectResourceFiles | (private) | `function collectResourceFiles(dir: string, reso...` |
| 540 | fn | resolveRealPathIfPossible | (private) | `function resolveRealPathIfPossible(path: string...` |
| 548 | fn | isPathWithinRoot | (private) | `function isPathWithinRoot(root: string, candida...` |
| 553 | fn | isRealPathWithinRoot | (private) | `function isRealPathWithinRoot(root: string, can...` |
| 560 | fn | getMatchCandidates | (private) | `function getMatchCandidates(filePath: string, b...` |
| 576 | fn | matchesAnyPattern | (private) | `function matchesAnyPattern(filePath: string, pa...` |
| 581 | fn | normalizeExactPattern | (private) | `function normalizeExactPattern(pattern: string)...` |
| 587 | fn | matchesAnyExactPattern | (private) | `function matchesAnyExactPattern(filePath: strin...` |
| 592 | fn | isEnabledByOverrides | (private) | `function isEnabledByOverrides(filePath: string,...` |
| 604 | fn | applyPatterns | (private) | `function applyPatterns(allPaths: string[], patt...` |
| 652 | class | DefaultPackageManager | pub | - |
| 1281 | fn | addResources | (private) | `const addResources = (` |

## Public API
