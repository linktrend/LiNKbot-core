# scripts/lib/openclawdevelopmentplan01-section-13.3-plan-extract.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2296
- **Language:** JavaScript
- **Symbols:** 36
- **Public symbols:** 28

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 63 | fn | normalizePlanText | pub | `export function normalizePlanText(value) {` |
| 76 | fn | planItemFingerprint | pub | `export function planItemFingerprint(anchor, lab...` |
| 86 | fn | sha256Hex | pub | `export function sha256Hex(content) {` |
| 98 | fn | splitPlanList | pub | `export function splitPlanList(value, separators...` |
| 131 | fn | splitAtomicObligations | pub | `export function splitAtomicObligations(value) {` |
| 143 | fn | isFragmentedPlanLabel | pub | `export function isFragmentedPlanLabel(label) {` |
| 161 | fn | makeItem | (private) | `function makeItem(label, kind, anchor, line) {` |
| 395 | fn | classifySectionPolicy | pub | `export function classifySectionPolicy(_headingT...` |
| 402 | fn | isDescriptiveAllowlistRule | pub | `export function isDescriptiveAllowlistRule(rule) {` |
| 412 | fn | coverageFingerprintFor | pub | `export function coverageFingerprintFor(line, ty...` |
| 421 | fn | buildDescriptiveExclusion | pub | `export function buildDescriptiveExclusion(spec) {` |
| 445 | fn | isBindingSourceAuthorityRow | pub | `export function isBindingSourceAuthorityRow(tex...` |
| 473 | fn | isSection133ClassificationEnumLabel | pub | `export function isSection133ClassificationEnumL...` |
| 570 | fn | matchStructuralEnumDefinition | pub | `export function matchStructuralEnumDefinition(l...` |
| 602 | fn | matchDescriptiveExclusion | pub | `export function matchDescriptiveExclusion(line,...` |
| 627 | fn | parseBoldLabel | (private) | `function parseBoldLabel(line) {` |
| 638 | fn | isRequirementBearingParagraph | pub | `export function isRequirementBearingParagraph(l...` |
| 647 | fn | lineHasBindingObligation | pub | `export function lineHasBindingObligation(text) {` |
| 711 | fn | isImperativeInstruction | pub | `export function isImperativeInstruction(line) {` |
| 737 | fn | detectRequirementInheritanceOpener | pub | `export function detectRequirementInheritanceOpe...` |
| 792 | fn | detectStructuralRequirementSection | pub | `export function detectStructuralRequirementSect...` |
| 845 | fn | isHardRequirementContext | pub | `export function isHardRequirementContext(contex...` |
| 858 | fn | isStrongDescriptiveOverride | pub | `export function isStrongDescriptiveOverride(con...` |
| 866 | fn | lineHasStrongObligation | pub | `export function lineHasStrongObligation(text) {` |
| 876 | fn | nonRequirementFailsBindingAudit | pub | `export function nonRequirementFailsBindingAudit...` |
| 893 | fn | tokenizePlanMarkdown | pub | `export function tokenizePlanMarkdown(planText) {` |
| 993 | fn | analyzePlanForSection133 | pub | `export function analyzePlanForSection133(planTe...` |
| 1008 | fn | pushItem | (private) | `const pushItem = (kind, label, line, anchor) => {` |
| 1023 | fn | mapLegacyReasonToCode | (private) | `const mapLegacyReasonToCode = (disposition, rea...` |
| 1056 | fn | cover | (private) | `const cover = (` |
| 1234 | fn | setListMode | (private) | `const setListMode = (mode) => {` |
| 1239 | fn | clearListScopedState | (private) | `const clearListScopedState = () => {` |
| 2169 | fn | slug | (private) | `function slug(value) {` |
| 2182 | fn | extractPlanSection133Items | pub | `export function extractPlanSection133Items(plan...` |
| 2190 | fn | loadFrozenPlanItems | pub | `export function loadFrozenPlanItems(opts = {}) {` |
| 2250 | fn | buildInventoryFromPlanItems | pub | `export function buildInventoryFromPlanItems(ite...` |

## Public API

### `normalizePlanText`

```
export function normalizePlanText(value) {
```

**Line:** 63 | **Kind:** fn

### `planItemFingerprint`

```
export function planItemFingerprint(anchor, label) {
```

**Line:** 76 | **Kind:** fn

### `sha256Hex`

```
export function sha256Hex(content) {
```

**Line:** 86 | **Kind:** fn

### `splitPlanList`

```
export function splitPlanList(value, separators = new Set([",", ";"])) {
```

**Line:** 98 | **Kind:** fn

### `splitAtomicObligations`

```
export function splitAtomicObligations(value) {
```

**Line:** 131 | **Kind:** fn

### `isFragmentedPlanLabel`

```
export function isFragmentedPlanLabel(label) {
```

**Line:** 143 | **Kind:** fn

### `classifySectionPolicy`

```
export function classifySectionPolicy(_headingText) {
```

**Line:** 395 | **Kind:** fn

### `isDescriptiveAllowlistRule`

```
export function isDescriptiveAllowlistRule(rule) {
```

**Line:** 402 | **Kind:** fn

### `coverageFingerprintFor`

```
export function coverageFingerprintFor(line, type, text) {
```

**Line:** 412 | **Kind:** fn

### `buildDescriptiveExclusion`

```
export function buildDescriptiveExclusion(spec) {
```

**Line:** 421 | **Kind:** fn

### `isBindingSourceAuthorityRow`

```
export function isBindingSourceAuthorityRow(text) {
```

**Line:** 445 | **Kind:** fn

### `isSection133ClassificationEnumLabel`

```
export function isSection133ClassificationEnumLabel(text) {
```

**Line:** 473 | **Kind:** fn

### `matchStructuralEnumDefinition`

```
export function matchStructuralEnumDefinition(line, type, text, enums) {
```

**Line:** 570 | **Kind:** fn

### `matchDescriptiveExclusion`

```
export function matchDescriptiveExclusion(line, type, text, exclusions) {
```

**Line:** 602 | **Kind:** fn

### `isRequirementBearingParagraph`

```
export function isRequirementBearingParagraph(line) {
```

**Line:** 638 | **Kind:** fn

### `lineHasBindingObligation`

```
export function lineHasBindingObligation(text) {
```

**Line:** 647 | **Kind:** fn

### `isImperativeInstruction`

```
export function isImperativeInstruction(line) {
```

**Line:** 711 | **Kind:** fn

### `detectRequirementInheritanceOpener`

```
export function detectRequirementInheritanceOpener(line) {
```

**Line:** 737 | **Kind:** fn

### `detectStructuralRequirementSection`

```
export function detectStructuralRequirementSection(headingText) {
```

**Line:** 792 | **Kind:** fn

### `isHardRequirementContext`

```
export function isHardRequirementContext(contextCode) {
```

**Line:** 845 | **Kind:** fn

### `isStrongDescriptiveOverride`

```
export function isStrongDescriptiveOverride(contextCode) {
```

**Line:** 858 | **Kind:** fn

### `lineHasStrongObligation`

```
export function lineHasStrongObligation(text) {
```

**Line:** 866 | **Kind:** fn

### `nonRequirementFailsBindingAudit`

```
export function nonRequirementFailsBindingAudit(entry, sourceText = "") {
```

**Line:** 876 | **Kind:** fn

### `tokenizePlanMarkdown`

```
export function tokenizePlanMarkdown(planText) {
```

**Line:** 893 | **Kind:** fn

### `analyzePlanForSection133`

```
export function analyzePlanForSection133(planText, options = {}) {
```

**Line:** 993 | **Kind:** fn

### `extractPlanSection133Items`

```
export function extractPlanSection133Items(planText) {
```

**Line:** 2182 | **Kind:** fn

### `loadFrozenPlanItems`

```
export function loadFrozenPlanItems(opts = {}) {
```

**Line:** 2190 | **Kind:** fn

### `buildInventoryFromPlanItems`

```
export function buildInventoryFromPlanItems(items, planSha256, coverage = [], evidenceMaps = null) {
```

**Line:** 2250 | **Kind:** fn
