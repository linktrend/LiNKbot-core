# extensions/memory-wiki/src/compile.ts

[← Back to Module](../modules/extensions-memory-wiki-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1445
- **Language:** TypeScript
- **Symbols:** 46
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 73 | type | DashboardPageDefinition | (private) | - |
| 362 | type | CompileMemoryWikiResult | pub | - |
| 371 | type | RefreshMemoryWikiIndexesResult | pub | - |
| 377 | fn | collectMarkdownFiles | (private) | `async function collectMarkdownFiles(rootDir: st...` |
| 392 | fn | readPageSummaries | (private) | `async function readPageSummaries(rootDir: strin...` |
| 396 | fn | filePaths | (private) | `const filePaths = (` |
| 426 | fn | buildPageCounts | (private) | `function buildPageCounts(pages: WikiPageSummary...` |
| 436 | fn | formatPageLink | (private) | `function formatPageLink(` |
| 449 | fn | formatFreshnessLabel | (private) | `function formatFreshnessLabel(freshness: WikiFr...` |
| 463 | fn | formatListPreview | (private) | `function formatListPreview(values: readonly str...` |
| 471 | fn | formatMaybeDetail | (private) | `function formatMaybeDetail(label: string, value...` |
| 475 | fn | isPersonLikePage | (private) | `function isPersonLikePage(page: WikiPageSummary...` |
| 487 | fn | formatPersonDirectoryLine | (private) | `function formatPersonDirectoryLine(` |
| 513 | fn | formatRelationshipTarget | (private) | `function formatRelationshipTarget(` |
| 529 | fn | formatRelationshipLine | (private) | `function formatRelationshipLine(` |
| 552 | fn | countBy | (private) | `function countBy(values: readonly string[]): Ma...` |
| 560 | fn | formatCountLines | (private) | `function formatCountLines(counts: Map<string, n...` |
| 572 | fn | formatClaimIdentityForPage | (private) | `function formatClaimIdentityForPage(claim: Pick...` |
| 576 | fn | isReviewablePrivacyTier | (private) | `function isReviewablePrivacyTier(value: string ...` |
| 581 | fn | formatEvidencePrivacyDetails | (private) | `function formatEvidencePrivacyDetails(evidence:...` |
| 592 | fn | collectPrivacyReviewEntries | (private) | `function collectPrivacyReviewEntries(` |
| 633 | fn | formatClaimIdentity | (private) | `function formatClaimIdentity(claim: WikiClaimHe...` |
| 637 | fn | isClaimHealthContested | (private) | `function isClaimHealthContested(claim: WikiClai...` |
| 641 | fn | formatClaimHealthLine | (private) | `function formatClaimHealthLine(` |
| 660 | fn | formatPageContradictionClusterLine | (private) | `function formatPageContradictionClusterLine(` |
| 676 | fn | formatClaimContradictionClusterLine | (private) | `function formatClaimContradictionClusterLine(` |
| 693 | fn | normalizeComparableTarget | (private) | `function normalizeComparableTarget(value: strin...` |
| 704 | fn | uniquePages | (private) | `function uniquePages(pages: WikiPageSummary[]):...` |
| 718 | fn | buildPageLookupKeys | (private) | `function buildPageLookupKeys(page: WikiPageSumm...` |
| 729 | fn | renderWikiPageLinks | (private) | `function renderWikiPageLinks(params: {` |
| 747 | fn | sharedSourceFanout | (private) | `function sharedSourceFanout(` |
| 767 | fn | buildRelatedBlockBody | (private) | `function buildRelatedBlockBody(params: {` |
| 862 | fn | refreshPageRelatedBlocks | (private) | `async function refreshPageRelatedBlocks(params: {` |
| 901 | fn | renderSectionList | (private) | `function renderSectionList(params: {` |
| 923 | fn | writeManagedMarkdownFile | (private) | `async function writeManagedMarkdownFile(params: {` |
| 951 | fn | writeDashboardPage | (private) | `async function writeDashboardPage(params: {` |
| 1030 | fn | refreshDashboardPages | (private) | `async function refreshDashboardPages(params: {` |
| 1058 | fn | buildRootIndexBody | (private) | `function buildRootIndexBody(params: {` |
| 1089 | fn | buildDirectoryIndexBody | (private) | `function buildDirectoryIndexBody(params: {` |
| 1102 | fn | rankFreshnessLevel | (private) | `function rankFreshnessLevel(level: WikiFreshnes...` |
| 1116 | fn | sortClaims | (private) | `function sortClaims(page: WikiPageSummary): Wik...` |
| 1132 | fn | buildCompiledCacheSnapshot | (private) | `function buildCompiledCacheSnapshot(` |
| 1229 | fn | compileMemoryWikiVaultUnlocked | (private) | `async function compileMemoryWikiVaultUnlocked(` |
| 1391 | fn | compileMemoryWikiVault | pub | `export async function compileMemoryWikiVault(` |
| 1399 | fn | hasMissingWikiIndexes | (private) | `async function hasMissingWikiIndexes(rootDir: s...` |
| 1416 | fn | refreshMemoryWikiIndexesAfterImport | pub | `export async function refreshMemoryWikiIndexesA...` |

## Public API

### `compileMemoryWikiVault`

```
export async function compileMemoryWikiVault(
```

**Line:** 1391 | **Kind:** fn

### `refreshMemoryWikiIndexesAfterImport`

```
export async function refreshMemoryWikiIndexesAfterImport(params: {
```

**Line:** 1416 | **Kind:** fn
