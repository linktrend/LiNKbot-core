# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## src/skills/loading/plugin-skills.test.ts (670 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | fn | expectPathMissing | (private) |
| 63 | fn | buildRegistry | (private) |
| 97 | fn | createSinglePluginRegistry | (private) |
| 125 | fn | setupAcpxAndHelperRegistry | (private) |
| 137 | fn | setupPluginOutsideSkills | (private) |
| 145 | fn | registerHealthyAcpBackend | (private) |
| 399 | fn | publishPluginSkills | (private) |
| 428 | fn | withPlatform | (private) |
| 438 | fn | writeSkillDir | (private) |

## src/skills/loading/skills.test.ts (988 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | resolveTestSkillDirs | (private) |
| 45 | fn | makeWorkspace | (private) |
| 48 | fn | withWorkspaceHome | (private) |
| 52 | fn | writePromptLimitSkills | (private) |
| 86 | fn | makeSkillEntry | (private) |
| 108 | fn | envSkillEntries | (private) |
| 112 | fn | envSkillSnapshot | (private) |
| 125 | fn | rawSkillApiKeyRefConfig | (private) |
| 141 | fn | resolvedSkillApiKeyConfig | (private) |
| 515 | fn | shouldInclude | (private) |

## src/skills/loading/workspace-load.test.ts (1417 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | fn | createWorkspacePluginRegistry | (private) |
| 103 | fn | createWorkspacePluginMetadataSnapshot | (private) |
| 151 | fn | setWorkspacePluginMetadataSnapshot | (private) |
| 166 | fn | collectMatching | (private) |
| 176 | fn | expectMissingPath | (private) |
| 186 | fn | createTempWorkspaceDir | (private) |
| 192 | fn | captureWarningLogger | (private) |
| 204 | fn | firstWarningLine | (private) |
| 209 | fn | loadTestWorkspaceSkillEntries | (private) |
| 244 | fn | setupWorkspaceWithProsePlugin | (private) |
| 260 | fn | createEscapedBundledSkillFixture | (private) |
| 869 | fn | createNoisyTree | (private) |

## src/skills/loading/workspace.ts (1895 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 73 | fn | resolveUserHomeDir | (private) |
| 77 | fn | resolveNativeUserHomeDir | (private) |
| 85 | fn | resolveCompactHomePrefixes | (private) |
| 96 | fn | compactSkillPaths | (private) |
| 111 | fn | resolvePreservedPromptSkillPathRoots | (private) |
| 123 | fn | resolvePromptTildeRoots | (private) |
| 136 | fn | isContainerStateHomeWherePromptTildeEscapes | (private) |
| 144 | fn | shouldPreservePromptSkillPath | (private) |
| 161 | fn | compactHomePath | (private) |
| 172 | fn | compactHomePrefixesForHome | (private) |
| 180 | fn | normalizeCompactedSkillPath | (private) |
| 184 | fn | compactPathForConsoleMessage | (private) |
| 188 | fn | warnInvalidSkillFrontmatter | (private) |
| 199 | fn | filterSkillEntries | (private) |
| 239 | type | ResolvedSkillsLimits | (private) |
| 247 | type | LoadedSkillRecord | (private) |
| 254 | type | CandidateSkillDir | (private) |
| 261 | type | ChildDirectoryScan | (private) |
| 267 | type | SkillDiscoveryBudget | (private) |
| 273 | fn | resolveSkillsLimits | (private) |
| 289 | fn | listChildDirectories | (private) |
| 318 | fn | resolveRawEntryScanLimit | (private) |
| 332 | fn | createSkillDiscoveryBudget | (private) |
| 341 | fn | listBudgetedChildDirectories | (private) |
| 366 | fn | containsDiscoverableSkill | (private) |
| 412 | fn | hasCandidateSymlinkChild | (private) |
| 444 | fn | hasLoadableSkillFrontmatter | (private) |
| 459 | fn | isSymlinkPath | (private) |
| 467 | fn | buildEscapedSkillPathReason | (private) |
| 498 | fn | warnEscapedSkillPath | (private) |
| 532 | fn | resolveContainedSkillPath | (private) |
| 559 | fn | resolveNestedSkillsRoot | (private) |
| 617 | fn | unwrapLoadedSkillRecords | (private) |
| 638 | fn | loadContainedSkillRecords | (private) |
| 660 | fn | readSourceInstallSkillKey | (private) |
| 684 | fn | resolveSkillEntryMetadata | (private) |
| 702 | fn | canonicalizeLoadedSkillRecord | (private) |
| 740 | fn | setSyncSourceForPluginSkill | (private) |
| 751 | fn | isPathInsideAnyRoot | (private) |
| 755 | fn | shouldEnforceConfiguredSkillRootContainment | (private) |
| 759 | fn | shouldUseConfiguredSymlinkTargets | (private) |
| 767 | fn | resolveSkillRootCandidatePath | (private) |
| 788 | fn | canonicalSkillDirForSource | (private) |
| 792 | fn | resolveSkillFilePath | (private) |
| 806 | fn | resolvePluginSkillRootRealPaths | (private) |
| 812 | fn | loadGeneratedPluginSkillRecords | (private) |
| 912 | fn | loadSkillEntries | (private) |
| 1027 | fn | loadCandidateSkill | (private) |
| 1250 | fn | mergeRecord | (private) |
| 1314 | fn | filterArchivedSkillEntries | (private) |
| 1320 | fn | escapeXml | (private) |
| 1332 | fn | truncateSkillDescription | (private) |
| 1347 | fn | formatSkillsCompact | pub |
| 1390 | type | SkillsPromptFormat | (private) |
| 1392 | fn | buildSkillsLimitNote | (private) |
| 1413 | fn | buildRenderedSkillsPrompt | (private) |
| 1435 | fn | applySkillsPromptLimits | (private) |
| 1504 | fn | buildWorkspaceSkillSnapshot | pub |
| 1528 | fn | buildWorkspaceSkillsPrompt | pub |
| 1539 | type | WorkspaceSkillBuildOptions | (private) |
| 1550 | fn | resolveEffectiveWorkspaceSkillFilter | (private) |
| 1562 | fn | resolveWorkspaceSkillPromptState | (private) |
| 1611 | fn | resolveSkillsPromptForRun | pub |
| 1699 | fn | loadWorkspaceSkillEntries | pub |
| 1724 | fn | loadVisibleWorkspaceSkillEntries | pub |
| 1743 | fn | resolveUniqueSyncedSkillDirName | (private) |
| 1765 | fn | resolveSyncedSkillDestinationPath | (private) |
| 1784 | fn | prepareSyncedSkillsDirectory | (private) |
| 1807 | fn | syncSkillsToWorkspace | pub |
| 1885 | fn | filterWorkspaceSkillEntriesWithOptions | pub |
