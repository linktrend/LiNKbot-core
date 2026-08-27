# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/skills/security/scanner.test.ts (705 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | makeTmpDir | (private) |
| 33 | fn | expectScanRule | (private) |
| 48 | fn | writeFixtureFiles | (private) |
| 59 | fn | mockStatPermissionDeniedFor | (private) |
| 72 | fn | expectRulePresence | (private) |
| 81 | fn | runNamedCase | (private) |
| 89 | fn | runSyncNamedCase | (private) |
| 97 | fn | normalizeSkillScanOptions | (private) |
| 118 | type | FixtureFiles | (private) |
| 120 | type | SummaryCase | (private) |
| 302 | fn | greet | pub |
| 323 | fn | closeFetchHandles | (private) |
| 333 | fn | resolvePreferencesStorePath | (private) |
| 339 | fn | sendMessage | pub |

## src/skills/security/scanner.ts (816 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | SkillScanSeverity | (private) |
| 16 | type | SkillScanFinding | pub |
| 25 | type | SkillScanSummary | (private) |
| 34 | type | SkillScanOptions | pub |
| 67 | type | FileScanCacheEntry | (private) |
| 76 | type | CachedDirEntry | (private) |
| 80 | type | CollectedScannableFiles | (private) |
| 84 | type | DirEntryCacheEntry | (private) |
| 90 | fn | isScannable | pub |
| 94 | fn | getCachedFileScanResult | (private) |
| 115 | fn | setCachedFileScanResult | (private) |
| 125 | fn | setCachedDirEntries | (private) |
| 135 | fn | clearSkillScanCacheForTest | pub |
| 144 | type | LineRule | (private) |
| 153 | type | SourceRule | (private) |
| 278 | fn | isBenignMemberExecMatch | (private) |
| 292 | fn | stripCommentsForHeuristics | (private) |
| 354 | fn | findSourceRuleMatch | (private) |
| 390 | fn | scanSource | pub |
| 472 | fn | scanSkillContent | pub |
| 511 | fn | normalizeScanOptions | (private) |
| 524 | fn | isExcludedTestDirectoryName | (private) |
| 528 | fn | isExcludedTestFileName | (private) |
| 532 | fn | pathContainsNodeModulesSegment | (private) |
| 536 | fn | walkDirWithLimit | (private) |
| 591 | fn | readDirEntriesWithCache | (private) |
| 626 | fn | resolveForcedFiles | (private) |
| 669 | fn | collectScannableFiles | (private) |
| 712 | fn | scanFileWithCache | (private) |
| 774 | fn | scanDirectoryWithSummary | pub |
