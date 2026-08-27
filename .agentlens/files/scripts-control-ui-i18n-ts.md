# scripts/control-ui-i18n.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1449
- **Language:** TypeScript
- **Symbols:** 78
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 49 | type | RunProcessParentSignalState | (private) | - |
| 81 | type | TranslationProvider | (private) | - |
| 121 | fn | usage | (private) | `function usage(): never {` |
| 132 | fn | parseArgs | (private) | `function parseArgs(argv: string[]) {` |
| 172 | fn | prettyLanguageLabel | (private) | `function prettyLanguageLabel(locale: string): s...` |
| 223 | fn | resolveConfiguredProvider | (private) | `function resolveConfiguredProvider(): string {` |
| 237 | fn | resolveConfiguredModel | (private) | `function resolveConfiguredModel(): string {` |
| 247 | fn | hasTranslationProvider | (private) | `function hasTranslationProvider(): boolean {` |
| 251 | fn | resolveKnownTranslationProvider | (private) | `function resolveKnownTranslationProvider(): Tra...` |
| 259 | fn | normalizeText | (private) | `function normalizeText(text: string): string {` |
| 263 | fn | sha256 | (private) | `function sha256(input: string | Uint8Array): st...` |
| 267 | fn | hashText | (private) | `function hashText(text: string): string {` |
| 271 | fn | cacheNamespace | (private) | `function cacheNamespace(): string {` |
| 280 | fn | cacheKey | (private) | `function cacheKey(segmentId: string, textHash: ...` |
| 284 | fn | localeFilePath | (private) | `function localeFilePath(entry: LocaleEntry): st...` |
| 288 | fn | glossaryPath | (private) | `function glossaryPath(entry: LocaleEntry): stri...` |
| 292 | fn | metaPath | (private) | `function metaPath(entry: LocaleEntry): string {` |
| 296 | fn | tmPath | (private) | `function tmPath(entry: LocaleEntry): string {` |
| 300 | fn | importLocaleModule | (private) | `async function importLocaleModule<T>(filePath: ...` |
| 306 | fn | loadLocaleMap | (private) | `async function loadLocaleMap(filePath: string, ...` |
| 314 | type | PlaceholderMismatch | (private) | - |
| 321 | fn | extractTranslationPlaceholders | (private) | `function extractTranslationPlaceholders(text: s...` |
| 327 | fn | findPlaceholderMismatches | pub | `export function findPlaceholderMismatches(` |
| 348 | fn | filterPlaceholderCompatibleTranslations | pub | `export function filterPlaceholderCompatibleTran...` |
| 366 | fn | assertPlaceholderParity | (private) | `function assertPlaceholderParity(` |
| 394 | fn | loadGlossary | (private) | `async function loadGlossary(filePath: string): ...` |
| 403 | fn | loadMeta | (private) | `async function loadMeta(filePath: string): Prom...` |
| 411 | fn | loadTranslationMemory | (private) | `async function loadTranslationMemory(` |
| 432 | fn | buildGlossaryPrompt | (private) | `function buildGlossaryPrompt(glossary: readonly...` |
| 444 | fn | buildSystemPrompt | (private) | `function buildSystemPrompt(targetLocale: string...` |
| 469 | fn | buildBatchPrompt | pub | `export function buildBatchPrompt(` |
| 486 | fn | formatDuration | (private) | `function formatDuration(ms: number): string {` |
| 490 | fn | logProgress | (private) | `function logProgress(message: string) {` |
| 494 | fn | isPromptTimeoutError | (private) | `function isPromptTimeoutError(error: Error): bo...` |
| 498 | fn | isProviderAuthError | pub | `export function isProviderAuthError(error: Erro...` |
| 508 | fn | isProviderAuthOptional | (private) | `function isProviderAuthOptional(): boolean {` |
| 513 | fn | resolvePromptTimeoutMs | (private) | `function resolvePromptTimeoutMs(): number {` |
| 522 | fn | resolveThinkingLevel | (private) | `function resolveThinkingLevel(): "low" | "high" {` |
| 526 | fn | resolveBatchCharBudget | (private) | `function resolveBatchCharBudget(): number {` |
| 535 | fn | estimateBatchChars | (private) | `function estimateBatchChars(items: readonly Tra...` |
| 539 | type | RunProcessOptions | (private) | - |
| 548 | type | ProcessOutputCapture | (private) | - |
| 553 | fn | resolveRunProcessOutputLimit | (private) | `function resolveRunProcessOutputLimit(options: ...` |
| 561 | fn | appendBoundedProcessOutput | pub | `export function appendBoundedProcessOutput(` |
| 574 | fn | formatProcessOutput | (private) | `function formatProcessOutput(capture: ProcessOu...` |
| 581 | fn | maybeReraiseRunProcessParentSignal | (private) | `function maybeReraiseRunProcessParentSignal(sig...` |
| 590 | fn | runProcess | pub | `export async function runProcess(` |
| 618 | fn | cleanupParentSignalHandlers | (private) | `const cleanupParentSignalHandlers = () => {` |
| 635 | fn | signalChild | (private) | `const signalChild = (signal: NodeJS.Signals) => {` |
| 658 | fn | relayParentSignal | (private) | `const relayParentSignal = (signal: NodeJS.Signa...` |
| 659 | fn | handler | (private) | `const handler = () => {` |
| 691 | fn | processGroupIsAlive | (private) | `const processGroupIsAlive = () => {` |
| 702 | fn | settle | (private) | `const settle = (callback: () => void) => {` |
| 717 | fn | finishClose | (private) | `const finishClose = (code: number | null, signa...` |
| 746 | fn | scheduleKill | (private) | `const scheduleKill = () => {` |
| 804 | fn | formatGeneratedTypeScript | (private) | `async function formatGeneratedTypeScript(filePa...` |
| 813 | fn | restoreReplacementCorruptedStringLiterals | (private) | `function restoreReplacementCorruptedStringLiter...` |
| 841 | type | LocaleRunContext | (private) | - |
| 846 | type | TranslationBatchContext | (private) | - |
| 854 | type | ClientAccess | (private) | - |
| 859 | fn | createTranslationClientAccess | (private) | `function createTranslationClientAccess(` |
| 876 | fn | formatLocaleLabel | (private) | `function formatLocaleLabel(locale: string, cont...` |
| 880 | fn | formatBatchLabel | (private) | `function formatBatchLabel(context: TranslationB...` |
| 885 | fn | buildTranslationBatches | (private) | `function buildTranslationBatches(items: readonl...` |
| 911 | fn | resolveTranslationModel | pub | `export function resolveTranslationModel(): Model {` |
| 921 | class | TranslationClient | (private) | - |
| 994 | fn | extractTranslationResult | (private) | `function extractTranslationResult(message: Assi...` |
| 1010 | fn | parseTranslationReply | (private) | `function parseTranslationReply(raw: string): Re...` |
| 1017 | fn | parseTranslationBatchReply | pub | `export function parseTranslationBatchReply(` |
| 1035 | fn | translateBatch | (private) | `async function translateBatch(` |
| 1097 | type | NativeTranslationEntry | (private) | - |
| 1103 | fn | translateNativeEntries | pub | `export async function translateNativeEntries(` |
| 1139 | type | SyncOutcome | (private) | - |
| 1146 | fn | assertNoControlUiFallbacks | pub | `export function assertNoControlUiFallbacks(` |
| 1163 | fn | syncLocale | (private) | `async function syncLocale(` |
| 1340 | fn | main | (private) | `async function main() {` |
| 1425 | fn | isCliEntrypoint | (private) | `function isCliEntrypoint() {` |
| 1437 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value: unknown, fall...` |

## Public API

### `findPlaceholderMismatches`

```
export function findPlaceholderMismatches(
```

**Line:** 327 | **Kind:** fn

### `filterPlaceholderCompatibleTranslations`

```
export function filterPlaceholderCompatibleTranslations(
```

**Line:** 348 | **Kind:** fn

### `buildBatchPrompt`

```
export function buildBatchPrompt(
```

**Line:** 469 | **Kind:** fn

### `isProviderAuthError`

```
export function isProviderAuthError(error: Error): boolean {
```

**Line:** 498 | **Kind:** fn

### `appendBoundedProcessOutput`

```
export function appendBoundedProcessOutput(
```

**Line:** 561 | **Kind:** fn

### `runProcess`

```
export async function runProcess(
```

**Line:** 590 | **Kind:** fn

### `resolveTranslationModel`

```
export function resolveTranslationModel(): Model {
```

**Line:** 911 | **Kind:** fn

### `parseTranslationBatchReply`

```
export function parseTranslationBatchReply(
```

**Line:** 1017 | **Kind:** fn

### `translateNativeEntries`

```
export async function translateNativeEntries(
```

**Line:** 1103 | **Kind:** fn

### `assertNoControlUiFallbacks`

```
export function assertNoControlUiFallbacks(
```

**Line:** 1146 | **Kind:** fn
