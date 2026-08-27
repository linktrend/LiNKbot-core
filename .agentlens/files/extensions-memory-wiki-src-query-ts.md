# extensions/memory-wiki/src/query.ts

[← Back to Module](../modules/extensions-memory-wiki-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1593
- **Language:** TypeScript
- **Symbols:** 72
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 93 | fn | normalizePositiveInteger | (private) | `function normalizePositiveInteger(value: number...` |
| 107 | type | WikiSearchMode | pub | - |
| 109 | type | QueryDigestPage | (private) | - |
| 110 | type | QueryDigestClaim | (private) | - |
| 112 | type | QueryDigestBundle | (private) | - |
| 117 | type | WikiSearchResult | (private) | - |
| 146 | type | WikiGetResult | (private) | - |
| 164 | type | QueryableWikiPage | pub | - |
| 168 | type | QuerySearchOverrides | (private) | - |
| 173 | fn | sortWikiSearchResults | (private) | `function sortWikiSearchResults(results: WikiSea...` |
| 182 | fn | mergeWikiSearchCorpusResults | (private) | `function mergeWikiSearchCorpusResults(params: {` |
| 210 | fn | listWikiMarkdownFiles | (private) | `async function listWikiMarkdownFiles(rootDir: s...` |
| 211 | fn | files | (private) | `const files = (` |
| 232 | fn | readQueryableWikiPages | pub | `export async function readQueryableWikiPages(ro...` |
| 237 | fn | readQueryableWikiPagesByPaths | (private) | `async function readQueryableWikiPagesByPaths(` |
| 253 | fn | readQueryDigestBundle | (private) | `async function readQueryDigestBundle(` |
| 260 | fn | buildSnippet | (private) | `function buildSnippet(raw: string, query: strin...` |
| 280 | fn | buildPageSearchText | (private) | `function buildPageSearchText(page: QueryableWik...` |
| 334 | fn | stripGeneratedRelatedBlock | (private) | `function stripGeneratedRelatedBlock(raw: string...` |
| 338 | fn | buildSnippetSearchText | (private) | `function buildSnippetSearchText(raw: string): s...` |
| 342 | fn | buildQueryTokens | (private) | `function buildQueryTokens(queryLower: string): ...` |
| 353 | fn | buildRouteQuestionTokens | (private) | `function buildRouteQuestionTokens(queryLower: s...` |
| 359 | fn | lineMatchesQuery | (private) | `function lineMatchesQuery(lineLower: string, qu...` |
| 366 | fn | buildDigestPageSearchText | (private) | `function buildDigestPageSearchText(page: QueryD...` |
| 410 | fn | isClaimTextOrIdMatch | (private) | `function isClaimTextOrIdMatch(` |
| 422 | fn | scoreClaimMatch | (private) | `function scoreClaimMatch(params: {` |
| 468 | fn | scoreDigestClaimMatch | (private) | `function scoreDigestClaimMatch(claim: QueryDige...` |
| 480 | fn | scoreWikiMetadataMatch | (private) | `function scoreWikiMetadataMatch(params: {` |
| 512 | fn | hasQueryMatch | (private) | `function hasQueryMatch(` |
| 521 | fn | hasAnyQueryMatch | (private) | `function hasAnyQueryMatch(` |
| 529 | fn | buildPageRouteQuestionFields | (private) | `function buildPageRouteQuestionFields(page: Que...` |
| 546 | fn | buildDigestRouteQuestionFields | (private) | `function buildDigestRouteQuestionFields(page: Q...` |
| 563 | fn | hasRouteQuestionMatch | (private) | `function hasRouteQuestionMatch(values: readonly...` |
| 567 | fn | isPersonLikeSummary | (private) | `function isPersonLikeSummary(` |
| 581 | fn | scorePageSearchModeBoost | (private) | `function scorePageSearchModeBoost(params: {` |
| 651 | fn | scoreDigestSearchModeBoost | (private) | `function scoreDigestSearchModeBoost(params: {` |
| 717 | fn | buildDigestCandidatePaths | (private) | `function buildDigestCandidatePaths(params: {` |
| 788 | fn | isClaimMatch | (private) | `function isClaimMatch(` |
| 796 | fn | rankClaimMatch | (private) | `function rankClaimMatch(` |
| 814 | fn | getMatchingClaims | (private) | `function getMatchingClaims(page: QueryableWikiP...` |
| 825 | fn | buildPageSnippet | (private) | `function buildPageSnippet(page: QueryableWikiPa...` |
| 834 | fn | scorePage | (private) | `function scorePage(page: QueryableWikiPage, que...` |
| 899 | fn | normalizeLookupKey | (private) | `function normalizeLookupKey(value: string): str...` |
| 904 | fn | buildLookupCandidates | (private) | `function buildLookupCandidates(lookup: string):...` |
| 910 | fn | shouldEnforceSessionVisibility | (private) | `function shouldEnforceSessionVisibility(params: {` |
| 922 | fn | shouldSearchSharedMemoryCorpus | (private) | `function shouldSearchSharedMemoryCorpus(config:...` |
| 926 | fn | shouldUseSharedMemory | (private) | `function shouldUseSharedMemory(config: Resolved...` |
| 930 | fn | assertSessionVisibilityAppConfig | (private) | `function assertSessionVisibilityAppConfig(param...` |
| 953 | fn | isSessionMemoryPath | (private) | `function isSessionMemoryPath(relPath: string): ...` |
| 961 | fn | shouldSearchWiki | (private) | `function shouldSearchWiki(config: ResolvedMemor...` |
| 965 | fn | shouldSearchSharedMemory | (private) | `function shouldSearchSharedMemory(` |
| 972 | fn | resolveActiveMemoryAgentId | (private) | `function resolveActiveMemoryAgentId(params: {` |
| 992 | fn | resolveActiveMemoryManager | (private) | `async function resolveActiveMemoryManager(param...` |
| 1015 | fn | buildMemoryManagerContractError | (private) | `function buildMemoryManagerContractError(method...` |
| 1022 | fn | buildMemorySearchTitle | (private) | `function buildMemorySearchTitle(resultPath: str...` |
| 1027 | fn | applySearchOverrides | (private) | `function applySearchOverrides(` |
| 1043 | fn | buildWikiProvenanceLabel | (private) | `function buildWikiProvenanceLabel(` |
| 1069 | fn | buildWikiResultMetadata | (private) | `function buildWikiResultMetadata(` |
| 1115 | fn | buildClaimResultMetadata | (private) | `function buildClaimResultMetadata(claim: WikiCl...` |
| 1128 | fn | toWikiSearchResult | (private) | `function toWikiSearchResult(` |
| 1148 | fn | toMemoryWikiSearchResult | (private) | `function toMemoryWikiSearchResult(` |
| 1167 | fn | filterMemoryWikiSearchHitsBySessionVisibility | (private) | `async function filterMemoryWikiSearchHitsBySess...` |
| 1190 | type | SessionMemoryPathVisibilityChecker | (private) | - |
| 1192 | fn | filterSessionKeysByScopedAgent | (private) | `function filterSessionKeysByScopedAgent(params: {` |
| 1213 | fn | createSessionMemoryPathVisibilityChecker | (private) | `async function createSessionMemoryPathVisibilit...` |
| 1295 | fn | filterMemoryWikiSearchHitsWithSessionVisibility | (private) | `function filterMemoryWikiSearchHitsWithSessionV...` |
| 1313 | fn | canReadSessionMemoryPath | (private) | `function canReadSessionMemoryPath(params: {` |
| 1334 | fn | searchWikiCorpus | (private) | `async function searchWikiCorpus(params: {` |
| 1378 | fn | resolveDigestClaimLookup | (private) | `function resolveDigestClaimLookup(digest: Query...` |
| 1385 | fn | resolveQueryableWikiPageByLookup | pub | `export function resolveQueryableWikiPageByLookup(` |
| 1401 | fn | searchMemoryWiki | pub | `export async function searchMemoryWiki(params: {` |
| 1471 | fn | getMemoryWikiPage | pub | `export async function getMemoryWikiPage(params: {` |

## Public API

### `readQueryableWikiPages`

```
export async function readQueryableWikiPages(rootDir: string): Promise<QueryableWikiPage[]> {
```

**Line:** 232 | **Kind:** fn

### `resolveQueryableWikiPageByLookup`

```
export function resolveQueryableWikiPageByLookup(
```

**Line:** 1385 | **Kind:** fn

### `searchMemoryWiki`

```
export async function searchMemoryWiki(params: {
```

**Line:** 1401 | **Kind:** fn

### `getMemoryWikiPage`

```
export async function getMemoryWikiPage(params: {
```

**Line:** 1471 | **Kind:** fn
