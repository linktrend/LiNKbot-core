# scripts/android-app-i18n.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1348
- **Language:** TypeScript
- **Symbols:** 53
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 41 | fn | localeDirectory | (private) | `const localeDirectory = (locale: string) => `va...` |
| 54 | type | NativeInventoryEntry | (private) | - |
| 62 | type | NativeArtifactEntry | (private) | - |
| 68 | type | ResourceString | (private) | - |
| 75 | type | TranslationContradiction | (private) | - |
| 82 | type | GeneratedCatalog | (private) | - |
| 89 | type | AndroidUiLiteralFinding | pub | - |
| 95 | fn | compareText | (private) | `function compareText(left: string, right: strin...` |
| 99 | fn | decodeXml | (private) | `function decodeXml(value: string): string {` |
| 111 | fn | decodeAndroidResourceValue | pub | `export function decodeAndroidResourceValue(rawV...` |
| 118 | type | KotlinInterpolation | (private) | - |
| 124 | fn | readKotlinInterpolations | (private) | `function readKotlinInterpolations(source: strin...` |
| 176 | fn | renderAndroidResourceValue | pub | `export function renderAndroidResourceValue(sour...` |
| 187 | fn | tokenCounts | (private) | `const tokenCounts = (tokens: readonly string[])...` |
| 230 | fn | escapeKotlin | (private) | `function escapeKotlin(value: string): string {` |
| 238 | fn | resourceKey | (private) | `function resourceKey(source: string): string {` |
| 242 | fn | parseStrings | (private) | `function parseStrings(source: string): Resource...` |
| 251 | fn | parseArrays | (private) | `function parseArrays(source: string): Map<strin...` |
| 262 | fn | readStrings | (private) | `async function readStrings(locale: string): Pro...` |
| 267 | fn | readAndroidSource | (private) | `async function readAndroidSource(` |
| 288 | type | AndroidResourceReferenceSource | (private) | - |
| 293 | fn | readAndroidResourceReferences | (private) | `async function readAndroidResourceReferences(` |
| 315 | fn | findUnusedAndroidResourceKeys | pub | `export function findUnusedAndroidResourceKeys(` |
| 336 | fn | lineNumber | (private) | `function lineNumber(source: string, offset: num...` |
| 340 | fn | decodeKotlinLiteral | (private) | `function decodeKotlinLiteral(value: string): st...` |
| 348 | fn | collectExplicitRuntimeSources | (private) | `function collectExplicitRuntimeSources(` |
| 366 | fn | collectToolDisplaySources | (private) | `function collectToolDisplaySources(value: unkno...` |
| 386 | fn | readToolDisplaySources | (private) | `async function readToolDisplaySources(): Promis...` |
| 494 | fn | isAllowedUiLiteral | (private) | `function isAllowedUiLiteral(repoPath: string, s...` |
| 502 | fn | shouldScanUiLiterals | (private) | `function shouldScanUiLiterals(repoPath: string)...` |
| 528 | fn | findClosingDelimiter | (private) | `function findClosingDelimiter(` |
| 566 | fn | expressionEnd | (private) | `function expressionEnd(source: string, expressi...` |
| 623 | fn | splitTopLevelSegments | (private) | `function splitTopLevelSegments(` |
| 693 | fn | isLocalizedLiteral | (private) | `function isLocalizedLiteral(expression: string,...` |
| 697 | fn | isComparisonLiteral | (private) | `function isComparisonLiteral(expression: string...` |
| 701 | fn | collectHelperLiteralFindings | (private) | `function collectHelperLiteralFindings(source: s...` |
| 703 | fn | collectRange | (private) | `const collectRange = (name: string, start: numb...` |
| 719 | fn | addLiteral | (private) | `const addLiteral = (literal: string, literalOff...` |
| 810 | fn | collectTypedModelLiteralFindings | (private) | `function collectTypedModelLiteralFindings(` |
| 923 | fn | findUnlocalizedAndroidUiLiterals | pub | `export function findUnlocalizedAndroidUiLiterals(` |
| 975 | fn | findInvalidResourceSyntax | (private) | `function findInvalidResourceSyntax(strings: Map...` |
| 985 | fn | selectDeterministicTranslation | pub | `export function selectDeterministicTranslation(...` |
| 1002 | fn | selectGeneratedTranslation | pub | `export function selectGeneratedTranslation(` |
| 1018 | fn | readInventory | (private) | `async function readInventory(): Promise<NativeI...` |
| 1025 | fn | readArtifacts | (private) | `async function readArtifacts(): Promise<Map<str...` |
| 1038 | fn | renderStringsXml | (private) | `function renderStringsXml(` |
| 1068 | fn | renderAssistantXml | (private) | `function renderAssistantXml(items: readonly str...` |
| 1079 | fn | renderKotlin | (private) | `function renderKotlin(sourceToKey: ReadonlyMap<...` |
| 1095 | fn | buildCatalog | (private) | `async function buildCatalog(): Promise<Generate...` |
| 1227 | fn | formatProblems | (private) | `function formatProblems(problems: Array<readonl...` |
| 1234 | fn | syncAndroidAppI18n | pub | `export async function syncAndroidAppI18n(option...` |
| 1276 | fn | verifyAndroidAppI18n | pub | `export async function verifyAndroidAppI18n() {` |
| 1301 | fn | checkAndroidAppI18n | pub | `export async function checkAndroidAppI18n() {` |

## Public API

### `decodeAndroidResourceValue`

```
export function decodeAndroidResourceValue(rawValue: string): string {
```

**Line:** 111 | **Kind:** fn

### `renderAndroidResourceValue`

```
export function renderAndroidResourceValue(source: string, translated: string): string {
```

**Line:** 176 | **Kind:** fn

### `findUnusedAndroidResourceKeys`

```
export function findUnusedAndroidResourceKeys(
```

**Line:** 315 | **Kind:** fn

### `findUnlocalizedAndroidUiLiterals`

```
export function findUnlocalizedAndroidUiLiterals(
```

**Line:** 923 | **Kind:** fn

### `selectDeterministicTranslation`

```
export function selectDeterministicTranslation(source: string, values: readonly string[]): string {
```

**Line:** 985 | **Kind:** fn

### `selectGeneratedTranslation`

```
export function selectGeneratedTranslation(
```

**Line:** 1002 | **Kind:** fn

### `syncAndroidAppI18n`

```
export async function syncAndroidAppI18n(options: { check?: boolean } = {}) {
```

**Line:** 1234 | **Kind:** fn

### `verifyAndroidAppI18n`

```
export async function verifyAndroidAppI18n() {
```

**Line:** 1276 | **Kind:** fn

### `checkAndroidAppI18n`

```
export async function checkAndroidAppI18n() {
```

**Line:** 1301 | **Kind:** fn
