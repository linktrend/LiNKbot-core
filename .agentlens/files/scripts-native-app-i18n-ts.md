# scripts/native-app-i18n.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1663
- **Language:** TypeScript
- **Symbols:** 57
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 10 | type | NativeI18nSurface | (private) | - |
| 14 | type | NativeI18nEntry | pub | - |
| 23 | type | Candidate | (private) | - |
| 24 | type | NativeTranslationArtifact | (private) | - |
| 30 | type | NativeI18nQualityFinding | pub | - |
| 43 | type | NativeTranslator | (private) | - |
| 44 | type | NativeLocaleSyncOptions | (private) | - |
| 49 | type | NativeI18nCommand | (private) | - |
| 180 | fn | isAsciiLowercaseLetter | (private) | `function isAsciiLowercaseLetter(character: stri...` |
| 184 | fn | isAsciiUppercaseLetter | (private) | `function isAsciiUppercaseLetter(character: stri...` |
| 188 | fn | isAsciiAlphaNumeric | (private) | `function isAsciiAlphaNumeric(character: string)...` |
| 196 | fn | isConditionalBranchIdentifier | pub | `export function isConditionalBranchIdentifier(s...` |
| 216 | fn | isTranslatableCandidate | (private) | `function isTranslatableCandidate(source: string...` |
| 238 | fn | hasQuotedConditionalSwiftInterpolation | (private) | `function hasQuotedConditionalSwiftInterpolation...` |
| 250 | fn | extractSwiftInterpolations | (private) | `function extractSwiftInterpolations(source: str...` |
| 285 | fn | extractKotlinInterpolations | (private) | `function extractKotlinInterpolations(source: st...` |
| 311 | fn | compareCodePoints | (private) | `function compareCodePoints(left: string, right:...` |
| 315 | fn | lineNumber | (private) | `function lineNumber(source: string, offset: num...` |
| 319 | fn | findClosingBrace | (private) | `function findClosingBrace(source: string, openi...` |
| 352 | fn | readSwiftStringLiteral | (private) | `function readSwiftStringLiteral(` |
| 418 | fn | readKotlinStringLiteral | (private) | `function readKotlinStringLiteral(` |
| 484 | fn | readMultilineStringLiteral | (private) | `function readMultilineStringLiteral(` |
| 501 | fn | readNativeStringLiteral | (private) | `function readNativeStringLiteral(` |
| 514 | fn | readAdjacentStringLiterals | (private) | `function readAdjacentStringLiterals(` |
| 542 | fn | extractUiCalls | (private) | `function extractUiCalls(` |
| 564 | fn | decodeMultilineLiteral | (private) | `function decodeMultilineLiteral(raw: string): s...` |
| 588 | fn | decodeLiteral | (private) | `function decodeLiteral(raw: string, kind: strin...` |
| 599 | fn | normalizeSource | (private) | `function normalizeSource(source: string): string {` |
| 603 | fn | identifierBefore | (private) | `function identifierBefore(source: string, offse...` |
| 627 | fn | enclosingCallName | (private) | `function enclosingCallName(source: string, offs...` |
| 646 | fn | structuralTokenSignature | (private) | `function structuralTokenSignature(source: strin...` |
| 655 | fn | addCandidate | (private) | `function addCandidate(` |
| 680 | fn | findCapturedLiteralOffset | (private) | `function findCapturedLiteralOffset(` |
| 693 | fn | addCapturedLiteralCandidates | (private) | `function addCapturedLiteralCandidates(` |
| 727 | fn | skipWhitespaceAndBrace | (private) | `function skipWhitespaceAndBrace(source: string,...` |
| 747 | fn | addConditionalBranchPair | (private) | `function addConditionalBranchPair(` |
| 783 | fn | extractConditionalBranches | (private) | `function extractConditionalBranches(` |
| 811 | fn | addBranchCandidates | (private) | `function addBranchCandidates(` |
| 839 | fn | extractNativeI18nCandidates | pub | `export function extractNativeI18nCandidates(` |
| 1078 | fn | walkFiles | (private) | `async function walkFiles(root: string, surface:...` |
| 1106 | fn | nativeEntryIdentity | (private) | `function nativeEntryIdentity(entry: Pick<Native...` |
| 1110 | fn | assignNativeI18nIds | pub | `export function assignNativeI18nIds(` |
| 1142 | fn | hasErrorCode | (private) | `function hasErrorCode(error: unknown, code: str...` |
| 1146 | fn | readNativeI18nInventory | (private) | `async function readNativeI18nInventory(): Promi...` |
| 1171 | fn | collectNativeI18nEntries | pub | `export async function collectNativeI18nEntries(` |
| 1227 | fn | render | (private) | `function render(entries: NativeI18nEntry[]): st...` |
| 1231 | fn | syncNativeI18n | (private) | `async function syncNativeI18n(options: {` |
| 1263 | fn | loadGlossary | (private) | `async function loadGlossary(locale: string): Pr...` |
| 1276 | fn | glossaryHash | (private) | `function glossaryHash(glossary: readonly { sour...` |
| 1280 | fn | adjacentDuplicateWords | (private) | `function adjacentDuplicateWords(value: string, ...` |
| 1298 | fn | collectNativeI18nQualityFindings | (private) | `function collectNativeI18nQualityFindings(` |
| 1360 | fn | describeArtifactValue | (private) | `function describeArtifactValue(value: unknown):...` |
| 1364 | fn | validateNativeLocaleArtifact | pub | `export function validateNativeLocaleArtifact(` |
| 1450 | fn | checkNativeLocaleArtifacts | pub | `export async function checkNativeLocaleArtifacts(` |
| 1491 | fn | syncNativeLocale | pub | `export async function syncNativeLocale(` |
| 1571 | fn | parseNativeI18nCommand | pub | `export function parseNativeI18nCommand(argv: st...` |
| 1619 | fn | main | (private) | `async function main() {` |

## Public API

### `isConditionalBranchIdentifier`

```
export function isConditionalBranchIdentifier(source: string): boolean {
```

**Line:** 196 | **Kind:** fn

### `extractNativeI18nCandidates`

```
export function extractNativeI18nCandidates(
```

**Line:** 839 | **Kind:** fn

### `assignNativeI18nIds`

```
export function assignNativeI18nIds(
```

**Line:** 1110 | **Kind:** fn

### `collectNativeI18nEntries`

```
export async function collectNativeI18nEntries(
```

**Line:** 1171 | **Kind:** fn

### `validateNativeLocaleArtifact`

```
export function validateNativeLocaleArtifact(
```

**Line:** 1364 | **Kind:** fn

### `checkNativeLocaleArtifacts`

```
export async function checkNativeLocaleArtifacts(
```

**Line:** 1450 | **Kind:** fn

### `syncNativeLocale`

```
export async function syncNativeLocale(
```

**Line:** 1491 | **Kind:** fn

### `parseNativeI18nCommand`

```
export function parseNativeI18nCommand(argv: string[]): NativeI18nCommand {
```

**Line:** 1571 | **Kind:** fn
