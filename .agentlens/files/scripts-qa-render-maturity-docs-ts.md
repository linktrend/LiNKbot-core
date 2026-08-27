# scripts/qa/render-maturity-docs.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1298
- **Language:** TypeScript
- **Symbols:** 65
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 34 | type | Args | (private) | - |
| 45 | type | EvidenceSummary | (private) | - |
| 56 | type | StatusCounts | (private) | - |
| 65 | type | RenderInputs | (private) | - |
| 71 | type | DocsRouteIndex | (private) | - |
| 76 | type | RenderMaturityScorecardInputs | (private) | - |
| 80 | type | DerivedCoverageScores | (private) | - |
| 91 | fn | parseArgs | (private) | `function parseArgs(argv: string[]): Args {` |
| 158 | fn | familyTitle | (private) | `function familyTitle(value: string): string {` |
| 178 | type | RenderScalar | (private) | - |
| 180 | fn | markdownEscape | (private) | `function markdownEscape(value: RenderScalar): s...` |
| 184 | fn | markdownSlug | (private) | `function markdownSlug(value: string): string {` |
| 196 | fn | normalizeRoutePath | (private) | `function normalizeRoutePath(route: string): str...` |
| 200 | fn | collectDocsRouteIndex | (private) | `function collectDocsRouteIndex(docsRoot: string...` |
| 241 | fn | docsLink | (private) | `function docsLink(docPath: string, docsRouteInd...` |
| 261 | fn | scorePercent | (private) | `function scorePercent(value?: QaMaturityScoreOb...` |
| 268 | fn | scoreClass | (private) | `function scoreClass(value?: QaMaturityScoreObje...` |
| 288 | fn | scoreLabel | (private) | `function scoreLabel(value?: QaMaturityScoreObje...` |
| 296 | fn | scoreMeter | (private) | `function scoreMeter(value?: QaMaturityScoreObje...` |
| 304 | fn | scoreSummary | (private) | `function scoreSummary(` |
| 329 | fn | maturityLtsBadge | (private) | `function maturityLtsBadge(lts?: QaMaturityScore...` |
| 340 | fn | maturityLevelClass | (private) | `function maturityLevelClass(code: RenderScalar)...` |
| 359 | fn | maturityLabelCode | (private) | `function maturityLabelCode(label: RenderScalar)...` |
| 383 | fn | maturityDisplayLabel | (private) | `function maturityDisplayLabel(label: RenderScal...` |
| 391 | fn | maturityLabelPill | (private) | `function maturityLabelPill(label: RenderScalar)...` |
| 399 | fn | maturityBandClass | (private) | `function maturityBandClass(label: RenderScalar)...` |
| 406 | fn | maturityLevelPill | (private) | `function maturityLevelPill(code: RenderScalar, ...` |
| 410 | fn | maturityLevelPillFromText | (private) | `function maturityLevelPillFromText(value: strin...` |
| 418 | fn | indentMarkdown | (private) | `function indentMarkdown(lines: string[], spaces...` |
| 423 | fn | renderSurfaceRows | (private) | `function renderSurfaceRows({` |
| 454 | fn | renderSurfaceTabs | (private) | `function renderSurfaceTabs({` |
| 490 | fn | levelText | (private) | `function levelText(` |
| 503 | fn | maturityLevelRank | (private) | `function maturityLevelRank(` |
| 511 | fn | ltsRank | (private) | `function ltsRank(lts?: QaMaturityScoreSurfaceLt...` |
| 521 | fn | sortedMaturitySurfaces | (private) | `function sortedMaturitySurfaces(` |
| 552 | fn | renderScoreBands | (private) | `function renderScoreBands(): string[] {` |
| 566 | fn | latestScoreRunDate | (private) | `function latestScoreRunDate(scores: QaMaturityS...` |
| 574 | fn | frontmatter | (private) | `function frontmatter(title: string, summary: st...` |
| 578 | fn | surfaceScoreMap | (private) | `function surfaceScoreMap(scores: QaMaturityScor...` |
| 582 | fn | categoryScoreMap | (private) | `function categoryScoreMap(` |
| 588 | fn | collectQaEvidenceFiles | (private) | `function collectQaEvidenceFiles(root?: string):...` |
| 607 | fn | countStatuses | (private) | `function countStatuses(entries: QaEvidenceSumma...` |
| 615 | fn | blockingResultLabels | (private) | `function blockingResultLabels(entries: QaEviden...` |
| 621 | fn | numberText | (private) | `function numberText(value: unknown): string {` |
| 625 | fn | countText | (private) | `function countText(counts?: QaEvidenceScorecard...` |
| 632 | fn | averageScores | (private) | `function averageScores(` |
| 642 | fn | checkSetTitle | (private) | `function checkSetTitle(profile: string): string {` |
| 653 | fn | resultCountsText | (private) | `function resultCountsText(statuses: StatusCount...` |
| 667 | fn | readinessStatusText | (private) | `function readinessStatusText(status: string): s...` |
| 680 | fn | followUpText | (private) | `function followUpText(missingCoverageIds: reado...` |
| 687 | fn | readEvidenceSummaries | (private) | `function readEvidenceSummaries(evidenceDir?: st...` |
| 703 | fn | rejectBlockingEvidence | (private) | `function rejectBlockingEvidence(evidenceSummari...` |
| 724 | fn | latestCoverageScorecard | (private) | `function latestCoverageScorecard(` |
| 739 | fn | deriveCoverageScores | (private) | `function deriveCoverageScores(` |
| 808 | fn | evidenceScorecardWarnings | (private) | `function evidenceScorecardWarnings(` |
| 823 | fn | writeInputWarnings | (private) | `function writeInputWarnings(warnings: string[])...` |
| 829 | fn | enforceStrictInputs | (private) | `function enforceStrictInputs(warnings: string[]...` |
| 838 | fn | copyStaticSourceAssets | (private) | `function copyStaticSourceAssets({` |
| 871 | fn | surfaceNameMap | (private) | `function surfaceNameMap(surfaces: QaMaturityTax...` |
| 875 | fn | renderEvidenceSection | (private) | `function renderEvidenceSection(` |
| 957 | fn | renderMaturityScorecard | (private) | `function renderMaturityScorecard({` |
| 1029 | fn | renderTaxonomy | (private) | `function renderTaxonomy({` |
| 1159 | fn | writeOrCheck | (private) | `function writeOrCheck(outputPath: string, conte...` |
| 1175 | fn | checkEvidenceIndependentInputs | (private) | `function checkEvidenceIndependentInputs({` |
| 1206 | fn | main | (private) | `function main(): void {` |
