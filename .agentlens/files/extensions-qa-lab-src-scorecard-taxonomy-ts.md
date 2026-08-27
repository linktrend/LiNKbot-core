# extensions/qa-lab/src/scorecard-taxonomy.ts

[← Back to Module](../modules/extensions-qa-lab/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1136
- **Language:** TypeScript
- **Symbols:** 62
- **Public symbols:** 21

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 35 | fn | isRepoRootRelativeRef | (private) | `function isRepoRootRelativeRef(value: string) {` |
| 52 | fn | maturityScoreLabelForScore | (private) | `function maturityScoreLabelForScore(score: numb...` |
| 77 | fn | qaMaturityScoreObjectForScore | pub | `export function qaMaturityScoreObjectForScore(s...` |
| 296 | type | QaNativeCoverageEvidenceKind | (private) | - |
| 297 | type | QaScorecardEvidenceKind | (private) | - |
| 298 | type | QaScorecardEvidenceMode | pub | - |
| 299 | type | QaScorecardChannelDriver | pub | - |
| 300 | type | QaMaturityScoreKey | (private) | - |
| 301 | type | QaMaturityScoreObject | pub | - |
| 302 | type | QaMaturityScoreSurfaceLts | pub | - |
| 303 | type | QaMaturityScoreCategory | (private) | - |
| 304 | type | QaMaturityScoreSurface | pub | - |
| 305 | type | QaMaturityScores | pub | - |
| 306 | type | QaMaturityTaxonomyLevel | pub | - |
| 307 | type | QaMaturityTaxonomyCategory | (private) | - |
| 308 | type | QaMaturityTaxonomySurface | pub | - |
| 309 | type | QaMaturityTaxonomy | pub | - |
| 310 | type | QaCoverageEvidenceRole | (private) | - |
| 312 | type | QaMaturityCoverageScores | pub | - |
| 316 | type | QaScorecardValidationIssueCode | (private) | - |
| 325 | type | QaScorecardValidationIssue | (private) | - |
| 333 | type | QaScorecardInventoryRef | (private) | - |
| 341 | type | QaScorecardCategoryCoverageReport | pub | - |
| 356 | type | QaScorecardCategoryFeatureCoverageReport | (private) | - |
| 361 | type | QaScorecardProfileReport | (private) | - |
| 368 | type | QaScorecardTaxonomyReport | pub | - |
| 392 | type | QaMaturityTaxonomyCategoryIndex | (private) | - |
| 400 | type | MaturityCategoryRef | (private) | - |
| 408 | type | MaturityFeatureRef | (private) | - |
| 413 | type | MaturityCoverageRef | (private) | - |
| 419 | fn | resolveRepoPath | (private) | `function resolveRepoPath(relativePath: string, ...` |
| 423 | fn | repoRootFromPath | (private) | `function repoRootFromPath(filePath: string) {` |
| 427 | fn | formatZodIssuePath | (private) | `function formatZodIssuePath(pathLocal: Property...` |
| 431 | fn | parseQaMaturityTaxonomy | (private) | `function parseQaMaturityTaxonomy(value: unknown...` |
| 442 | fn | parseQaMaturityScores | (private) | `function parseQaMaturityScores(value: unknown, ...` |
| 453 | fn | readQaMaturityTaxonomySource | pub | `export function readQaMaturityTaxonomySource(ta...` |
| 457 | fn | readValidatedQaMaturityScoreSources | pub | `export function readValidatedQaMaturityScoreSou...` |
| 476 | fn | readQaMaturityTaxonomy | (private) | `function readQaMaturityTaxonomy(repoRoot: strin...` |
| 489 | fn | pathExists | (private) | `function pathExists(repoRoot: string | undefine...` |
| 496 | fn | scenarioCoverageIds | (private) | `function scenarioCoverageIds(scenario: QaSeedSc...` |
| 500 | type | ScenarioInventoryRef | (private) | - |
| 506 | fn | scenarioInventoryKind | (private) | `function scenarioInventoryKind(scenario: QaSeed...` |
| 510 | fn | scenarioInventoryPath | (private) | `function scenarioInventoryPath(scenario: QaSeed...` |
| 514 | fn | collectScenarioInventoryByCoverageId | (private) | `function collectScenarioInventoryByCoverageId(p...` |
| 537 | fn | uniqueSorted | (private) | `function uniqueSorted(values: Iterable<string>) {` |
| 541 | fn | percent | (private) | `function percent(part: number, total: number) {` |
| 545 | fn | activeQaMaturityTaxonomySurfaces | pub | `export function activeQaMaturityTaxonomySurface...` |
| 549 | fn | buildQaMaturityTaxonomyCategoryIndex | (private) | `function buildQaMaturityTaxonomyCategoryIndex(` |
| 570 | fn | qaMaturityTaxonomyLevelMap | pub | `export function qaMaturityTaxonomyLevelMap(taxo...` |
| 574 | fn | qaMaturityFamilyOrder | pub | `export function qaMaturityFamilyOrder(surfaces:...` |
| 584 | fn | averageSurfaceScore | (private) | `function averageSurfaceScore(rows: readonly QaM...` |
| 588 | fn | averageCategoryScore | (private) | `function averageCategoryScore(rows: readonly Qa...` |
| 592 | fn | qaMaturityCoverageCategoryKey | pub | `export function qaMaturityCoverageCategoryKey(s...` |
| 596 | fn | expectedMaturityLtsSupported | (private) | `function expectedMaturityLtsSupported(params: {` |
| 607 | fn | expectedMaturitySurfaceLtsStatus | (private) | `function expectedMaturitySurfaceLtsStatus(suppo...` |
| 614 | fn | validateQaMaturityScoresAgainstTaxonomy | (private) | `function validateQaMaturityScoresAgainstTaxonom...` |
| 755 | fn | buildMaturityRefs | (private) | `function buildMaturityRefs(taxonomy: QaMaturity...` |
| 791 | fn | readQaScorecardProfileOptions | pub | `export function readQaScorecardProfileOptions(p...` |
| 805 | fn | pushMissingPrimaryInventoryIssues | (private) | `function pushMissingPrimaryInventoryIssues(para...` |
| 830 | fn | collectInventoryRefsForCoverageId | (private) | `function collectInventoryRefsForCoverageId(para...` |
| 876 | fn | buildQaScorecardTaxonomyReport | (private) | `function buildQaScorecardTaxonomyReport(params: {` |
| 1126 | fn | readQaScorecardTaxonomyReport | pub | `export function readQaScorecardTaxonomyReport(s...` |

## Public API

### `qaMaturityScoreObjectForScore`

```
export function qaMaturityScoreObjectForScore(score: number): QaMaturityScoreObject {
```

**Line:** 77 | **Kind:** fn

### `readQaMaturityTaxonomySource`

```
export function readQaMaturityTaxonomySource(taxonomyPath = QA_MATURITY_TAXONOMY_PATH) {
```

**Line:** 453 | **Kind:** fn

### `readValidatedQaMaturityScoreSources`

```
export function readValidatedQaMaturityScoreSources(params?: {
```

**Line:** 457 | **Kind:** fn

### `activeQaMaturityTaxonomySurfaces`

```
export function activeQaMaturityTaxonomySurfaces(taxonomy: QaMaturityTaxonomy) {
```

**Line:** 545 | **Kind:** fn

### `qaMaturityTaxonomyLevelMap`

```
export function qaMaturityTaxonomyLevelMap(taxonomy: QaMaturityTaxonomy) {
```

**Line:** 570 | **Kind:** fn

### `qaMaturityFamilyOrder`

```
export function qaMaturityFamilyOrder(surfaces: readonly QaMaturityTaxonomySurface[]): string[] {
```

**Line:** 574 | **Kind:** fn

### `qaMaturityCoverageCategoryKey`

```
export function qaMaturityCoverageCategoryKey(surfaceId: string, categoryName: string) {
```

**Line:** 592 | **Kind:** fn

### `readQaScorecardProfileOptions`

```
export function readQaScorecardProfileOptions(profileId: string | undefined, repoRoot?: string) {
```

**Line:** 791 | **Kind:** fn

### `readQaScorecardTaxonomyReport`

```
export function readQaScorecardTaxonomyReport(scenarios: readonly QaSeedScenarioWithSource[]) {
```

**Line:** 1126 | **Kind:** fn
