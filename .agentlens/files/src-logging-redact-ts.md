# src/logging/redact.ts

[← Back to Module](../modules/src-logging/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1294
- **Language:** TypeScript
- **Symbols:** 66
- **Public symbols:** 16

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 23 | type | RedactSensitiveMode | pub | - |
| 24 | type | RedactPattern | pub | - |
| 25 | type | LoggingConfig | (private) | - |
| 324 | type | RedactOptions | pub | - |
| 329 | type | ResolvedRedactOptions | pub | - |
| 336 | fn | normalizeMode | (private) | `function normalizeMode(value?: string): RedactS...` |
| 340 | fn | parsePattern | (private) | `function parsePattern(raw: RedactPattern): RegE...` |
| 375 | fn | resolvePatterns | (private) | `function resolvePatterns(value?: RedactPattern[...` |
| 385 | fn | includesDefaultRedactPatterns | (private) | `function includesDefaultRedactPatterns(value?: ...` |
| 393 | fn | maskToken | (private) | `function maskToken(token: string): string {` |
| 405 | fn | splitSecretValueForMask | (private) | `function splitSecretValueForMask(token: string): {` |
| 457 | fn | maskSecretValue | (private) | `function maskSecretValue(token: string, options...` |
| 462 | fn | normalizeSensitiveKeyName | (private) | `function normalizeSensitiveKeyName(value: strin...` |
| 474 | fn | isSensitiveBodyKey | (private) | `function isSensitiveBodyKey(key: string): boole...` |
| 478 | fn | hasEncodedOrInvisibleFormKey | (private) | `function hasEncodedOrInvisibleFormKey(key: stri...` |
| 484 | fn | redactFormEncodedPairs | (private) | `function redactFormEncodedPairs(` |
| 509 | fn | markBitmapRange | (private) | `function markBitmapRange(bitmap: boolean[], sta...` |
| 517 | fn | markSensitiveFormEncodedPairValues | (private) | `function markSensitiveFormEncodedPairValues(` |
| 549 | fn | redactUrlQueryPairs | (private) | `function redactUrlQueryPairs(text: string): str...` |
| 561 | fn | markUrlQueryPairRedactions | (private) | `function markUrlQueryPairRedactions(text: strin...` |
| 581 | fn | redactEncodedFormPairs | (private) | `function redactEncodedFormPairs(text: string): ...` |
| 593 | fn | markEncodedFormPairRedactions | (private) | `function markEncodedFormPairRedactions(text: st...` |
| 617 | fn | redactFormBodyContextSinglePairs | (private) | `function redactFormBodyContextSinglePairs(text:...` |
| 632 | fn | markFormBodyContextSinglePairRedactions | (private) | `function markFormBodyContextSinglePairRedactions(` |
| 660 | fn | redactFormBodyLine | (private) | `function redactFormBodyLine(text: string): stri...` |
| 681 | fn | redactFormBody | (private) | `function redactFormBody(text: string): string {` |
| 696 | fn | markFormBodyLineRedactions | (private) | `function markFormBodyLineRedactions(text: strin...` |
| 719 | fn | markFormBodyRedactions | (private) | `function markFormBodyRedactions(text: string, b...` |
| 736 | fn | redactPemBlock | (private) | `function redactPemBlock(block: string): string {` |
| 744 | fn | isShellReferenceToKey | (private) | `function isShellReferenceToKey(key: string, val...` |
| 756 | fn | readEnvAssignmentKey | (private) | `function readEnvAssignmentKey(match: string): s...` |
| 760 | fn | shouldPreserveShellReferenceMatch | (private) | `function shouldPreserveShellReferenceMatch(matc...` |
| 765 | fn | isEmptyShellParameterExpansionTail | (private) | `function isEmptyShellParameterExpansionTail(tok...` |
| 769 | fn | hasBackreferenceToGroup | (private) | `function hasBackreferenceToGroup(pattern: RegEx...` |
| 773 | type | SecretCaptureSelection | (private) | - |
| 779 | fn | selectSecretCapture | (private) | `function selectSecretCapture(match: string, gro...` |
| 793 | fn | getIndexedCaptureStart | (private) | `function getIndexedCaptureStart(` |
| 823 | fn | getSecretCaptureStart | (private) | `function getSecretCaptureStart(` |
| 847 | fn | redactMatch | (private) | `function redactMatch(` |
| 895 | fn | redactText | (private) | `function redactText(` |
| 913 | fn | replacer | (private) | `const replacer = (...args: unknown[]) => {` |
| 936 | fn | couldMatchDefaultRedactPatterns | (private) | `function couldMatchDefaultRedactPatterns(text: ...` |
| 940 | fn | cloneGlobalPattern | (private) | `function cloneGlobalPattern(pattern: RegExp): R...` |
| 946 | fn | markPatternMatchRedaction | (private) | `function markPatternMatchRedaction(` |
| 979 | fn | computeSensitiveRedactionBitmap | pub | `export function computeSensitiveRedactionBitmap(` |
| 1004 | fn | looksLikeAppSpecificPassword | (private) | `function looksLikeAppSpecificPassword(candidate...` |
| 1008 | fn | redactAppSpecificPasswords | (private) | `function redactAppSpecificPasswords(text: strin...` |
| 1016 | fn | resolveConfigRedaction | (private) | `function resolveConfigRedaction(): RedactOptions {` |
| 1024 | fn | resolveRedactOptions | pub | `export function resolveRedactOptions(options?: ...` |
| 1044 | fn | redactSensitiveText | pub | `export function redactSensitiveText(text: strin...` |
| 1066 | fn | redactToolDetail | pub | `export function redactToolDetail(detail: string...` |
| 1070 | fn | resolveToolPayloadRedaction | (private) | `function resolveToolPayloadRedaction(` |
| 1084 | fn | redactToolPayloadText | pub | `export function redactToolPayloadText(text: str...` |
| 1088 | fn | redactToolPayloadTextWithConfig | pub | `export function redactToolPayloadTextWithConfig(` |
| 1107 | fn | isSensitiveFieldKey | pub | `export function isSensitiveFieldKey(key: string...` |
| 1111 | fn | redactSensitiveFieldValueWithOptions | (private) | `function redactSensitiveFieldValueWithOptions(` |
| 1155 | fn | redactSensitiveFieldValue | pub | `export function redactSensitiveFieldValue(` |
| 1163 | fn | redactSensitiveFieldValueWithConfig | pub | `export function redactSensitiveFieldValueWithCo...` |
| 1175 | fn | pathEndsWith | (private) | `function pathEndsWith(path: readonly string[], ...` |
| 1182 | fn | shouldRedactStructuredAuthorizationCode | (private) | `function shouldRedactStructuredAuthorizationCode(` |
| 1203 | fn | shouldRedactStructuredPrimitiveField | (private) | `function shouldRedactStructuredPrimitiveField(k...` |
| 1208 | fn | isPlainRedactableObject | (private) | `function isPlainRedactableObject(value: object)...` |
| 1213 | fn | redactStructuredSecretValue | (private) | `function redactStructuredSecretValue(` |
| 1259 | fn | redactSecrets | pub | `export function redactSecrets<T>(value: T): T {` |
| 1273 | fn | getDefaultRedactPatterns | pub | `export function getDefaultRedactPatterns(): str...` |
| 1281 | fn | redactSensitiveLines | pub | `export function redactSensitiveLines(lines: str...` |

## Public API

### `computeSensitiveRedactionBitmap`

```
export function computeSensitiveRedactionBitmap(
```

**Line:** 979 | **Kind:** fn

### `resolveRedactOptions`

```
export function resolveRedactOptions(options?: RedactOptions): ResolvedRedactOptions {
```

**Line:** 1024 | **Kind:** fn

### `redactSensitiveText`

```
export function redactSensitiveText(text: string, options?: RedactOptions): string {
```

**Line:** 1044 | **Kind:** fn

### `redactToolDetail`

```
export function redactToolDetail(detail: string): string {
```

**Line:** 1066 | **Kind:** fn

### `redactToolPayloadText`

```
export function redactToolPayloadText(text: string): string {
```

**Line:** 1084 | **Kind:** fn

### `redactToolPayloadTextWithConfig`

```
export function redactToolPayloadTextWithConfig(
```

**Line:** 1088 | **Kind:** fn

### `isSensitiveFieldKey`

```
export function isSensitiveFieldKey(key: string): boolean {
```

**Line:** 1107 | **Kind:** fn

### `redactSensitiveFieldValue`

```
export function redactSensitiveFieldValue(
```

**Line:** 1155 | **Kind:** fn

### `redactSensitiveFieldValueWithConfig`

```
export function redactSensitiveFieldValueWithConfig(
```

**Line:** 1163 | **Kind:** fn

### `redactSecrets`

```
export function redactSecrets<T>(value: T): T {
```

**Line:** 1259 | **Kind:** fn

### `getDefaultRedactPatterns`

```
export function getDefaultRedactPatterns(): string[] {
```

**Line:** 1273 | **Kind:** fn

### `redactSensitiveLines`

```
export function redactSensitiveLines(lines: string[], resolved: ResolvedRedactOptions): string[] {
```

**Line:** 1281 | **Kind:** fn
