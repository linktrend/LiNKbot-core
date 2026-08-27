# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## test/vitest/vitest.shared.config.ts (625 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | type | OpenClawVitestPool | pub |
| 38 | fn | detectVitestHostInfo | (private) |
| 42 | fn | resolveLocalVitestMaxWorkers | pub |
| 50 | fn | resolveLocalVitestScheduling | pub |
| 58 | fn | resolveDefaultVitestPool | pub |
| 71 | fn | resolveRepoRootPath | pub |
| 83 | fn | hasWorkerOverride | (private) |
| 87 | fn | sourcePackageAlias | (private) |
| 102 | fn | sourcePackageAliasesFromExports | (private) |
| 110 | fn | resolveSharedVitestWorkerConfig | pub |

## test/vitest/vitest.unit-fast-paths.mjs (756 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | normalizeRepoPath | (private) |
| 312 | fn | importsStatefulTestHelper | (private) |
| 344 | fn | matchesAnyGlob | (private) |
| 350 | fn | isUnitFastCandidateFile | (private) |
| 365 | fn | walkFiles | (private) |
| 391 | fn | collectRepoTestFilesFromGit | (private) |
| 406 | fn | collectRepoTestFiles | (private) |
| 423 | fn | collectUnitFastCandidateInventory | (private) |
| 441 | fn | normalizeScopedDir | (private) |
| 446 | fn | hasRepoRootPrefix | (private) |
| 450 | fn | cannotSafelyNarrowIncludePattern | (private) |
| 460 | fn | anchorScopedIncludePattern | (private) |
| 468 | fn | isFileWithinScope | (private) |
| 472 | fn | literalGlobPrefix | (private) |
| 477 | fn | matchesCompiledInclude | (private) |
| 483 | fn | classifyUnitFastTestFileContent | pub |
| 495 | fn | collectUnitFastCandidates | (private) |
| 520 | fn | collectUnitFastTestCandidates | pub |
| 524 | fn | collectBroadUnitFastTestCandidates | pub |
| 531 | fn | analyzeUnitFastTestFile | (private) |
| 567 | fn | collectUnitFastTestFileAnalysis | pub |
| 590 | fn | getUnitFastTestFilesForIncludePatterns | pub |
| 632 | fn | getUnitFastTestFiles | pub |
| 642 | fn | getUnitFastTimerTestFiles | pub |
| 652 | fn | getUnitFastIsolatedTestFiles | pub |
| 668 | fn | getUnitFastTestFileSet | (private) |
| 676 | fn | getUnitFastTimerTestFileSet | (private) |
| 684 | fn | getUnitFastIsolatedTestFileSet | (private) |
| 692 | fn | isUnitFastTestFileOnDemand | (private) |
| 700 | fn | isUnitFastTestFile | pub |
| 704 | fn | isUnitFastTimerTestFile | pub |
| 708 | fn | isUnitFastIsolatedTestFile | pub |
| 712 | fn | resolveUnitFastTestIncludePattern | pub |
| 740 | fn | resolveUnitFastTimerTestIncludePattern | pub |
| 749 | fn | resolveUnitFastIsolatedTestIncludePattern | pub |
