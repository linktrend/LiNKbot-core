# extensions/memory-core/src/rem-evidence.ts

[← Back to Module](../modules/extensions-memory-core/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1101
- **Language:** TypeScript
- **Symbols:** 47
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 68 | type | GroundedRemPreviewItem | (private) | - |
| 73 | type | GroundedRemCandidate | (private) | - |
| 77 | type | GroundedRemFilePreview | (private) | - |
| 86 | type | GroundedRemPreviewResult | pub | - |
| 92 | type | CandidateSnippetSummary | (private) | - |
| 96 | type | ParsedSectionLine | (private) | - |
| 101 | type | ParsedMarkdownSection | (private) | - |
| 108 | type | SectionSnippet | (private) | - |
| 113 | type | SectionSummary | (private) | - |
| 130 | fn | normalizeWhitespace | (private) | `function normalizeWhitespace(value: string): st...` |
| 134 | fn | normalizePath | (private) | `function normalizePath(rawPath: string): string {` |
| 138 | fn | stripMarkdown | (private) | `function stripMarkdown(text: string): string {` |
| 148 | fn | sanitizeSectionTitle | (private) | `function sanitizeSectionTitle(title: string): s...` |
| 152 | fn | makeRef | (private) | `function makeRef(pathValue: string, startLine: ...` |
| 158 | fn | parseMarkdownSections | (private) | `function parseMarkdownSections(content: string)...` |
| 164 | fn | flush | (private) | `const flush = () => {` |
| 219 | fn | sectionToSnippets | (private) | `function sectionToSnippets(section: ParsedMarkd...` |
| 243 | fn | countMatchingSnippets | (private) | `function countMatchingSnippets(snippets: Sectio...` |
| 253 | fn | scoreSection | (private) | `function scoreSection(section: ParsedMarkdownSe...` |
| 255 | fn | titleBonus | (private) | `const titleBonus = (pattern: RegExp) => (patter...` |
| 295 | fn | scoreSnippet | (private) | `function scoreSnippet(text: string, title: stri...` |
| 327 | fn | chooseSummarySnippets | (private) | `function chooseSummarySnippets(` |
| 345 | fn | joinSummaryParts | (private) | `function joinSummaryParts(parts: string[]): str...` |
| 355 | fn | summarizeSection | (private) | `function summarizeSection(` |
| 381 | fn | compactCandidateTitle | (private) | `function compactCandidateTitle(title: string): ...` |
| 396 | fn | compactCandidateSnippetText | (private) | `function compactCandidateSnippetText(text: stri...` |
| 411 | fn | isDurableSignalSnippet | (private) | `function isDurableSignalSnippet(text: string, t...` |
| 421 | fn | scoreCandidateSnippet | (private) | `function scoreCandidateSnippet(text: string, ti...` |
| 492 | fn | chooseFactSnippets | (private) | `function chooseFactSnippets(` |
| 520 | type | FactSnippetSummary | (private) | - |
| 524 | fn | buildFactText | (private) | `function buildFactText(title: string, text: str...` |
| 539 | fn | chooseCandidateSnippets | (private) | `function chooseCandidateSnippets(` |
| 573 | fn | buildCandidateSnippetText | (private) | `function buildCandidateSnippetText(title: strin...` |
| 577 | fn | findTopLevelDelimiter | (private) | `function findTopLevelDelimiter(text: string, de...` |
| 597 | fn | splitTopLevelClauses | (private) | `function splitTopLevelClauses(text: string, del...` |
| 612 | fn | splitSubjectLeadClaim | (private) | `function splitSubjectLeadClaim(text: string): s...` |
| 639 | fn | atomizeClaimText | (private) | `function atomizeClaimText(text: string): string...` |
| 651 | fn | classifyCandidateLeanFromText | (private) | `function classifyCandidateLeanFromText(text: st...` |
| 662 | fn | addReflection | (private) | `function addReflection(` |
| 677 | fn | isOperatorRuleSummary | (private) | `function isOperatorRuleSummary(summary: Section...` |
| 683 | fn | isRoutingSummary | (private) | `function isRoutingSummary(summary: SectionSumma...` |
| 687 | fn | findStrongestSummary | (private) | `function findStrongestSummary(` |
| 703 | fn | previewGroundedRemForFile | (private) | `function previewGroundedRemForFile(params: {` |
| 826 | fn | bestFor | (private) | `const bestFor = (metric: keyof SectionSummary["...` |
| 1044 | fn | collectMarkdownFiles | (private) | `async function collectMarkdownFiles(inputPaths:...` |
| 1046 | fn | walk | (private) | `async function walk(targetPath: string): Promis...` |
| 1083 | fn | previewGroundedRemMarkdown | pub | `export async function previewGroundedRemMarkdow...` |

## Public API

### `previewGroundedRemMarkdown`

```
export async function previewGroundedRemMarkdown(params: {
```

**Line:** 1083 | **Kind:** fn
