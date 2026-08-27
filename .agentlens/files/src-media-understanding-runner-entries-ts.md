# src/media-understanding/runner.entries.ts

[← Back to Module](../modules/src-media-understanding/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1115
- **Language:** TypeScript
- **Symbols:** 37
- **Public symbols:** 7

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 76 | type | ProviderRegistry | (private) | - |
| 79 | fn | resolveLiteralProviderApiKey | (private) | `function resolveLiteralProviderApiKey(params: {` |
| 86 | fn | sanitizeProviderHeaders | (private) | `function sanitizeProviderHeaders(` |
| 106 | fn | trimOutput | (private) | `function trimOutput(text: string, maxChars?: nu...` |
| 114 | fn | extractSherpaOnnxText | (private) | `function extractSherpaOnnxText(raw: string): { ...` |
| 155 | fn | commandBase | (private) | `function commandBase(command: string): string {` |
| 159 | fn | isAntigravityCliCommand | (private) | `function isAntigravityCliCommand(command: strin...` |
| 164 | fn | findArgValue | (private) | `function findArgValue(args: string[], keys: str...` |
| 185 | fn | hasArg | (private) | `function hasArg(args: string[], keys: string[])...` |
| 189 | fn | resolveWhisperOutputPath | (private) | `function resolveWhisperOutputPath(args: string[...` |
| 201 | fn | resolveWhisperCppOutputPath | (private) | `function resolveWhisperCppOutputPath(args: stri...` |
| 212 | fn | resolveParakeetOutputPath | (private) | `function resolveParakeetOutputPath(args: string...` |
| 229 | fn | readCliTranscriptFile | (private) | `async function readCliTranscriptFile(filePath: ...` |
| 240 | fn | resolveCliOutput | (private) | `async function resolveCliOutput(params: {` |
| 278 | fn | resolveCliMediaPath | (private) | `async function resolveCliMediaPath(params: {` |
| 319 | type | ProviderQuery | (private) | - |
| 321 | fn | normalizeProviderQuery | (private) | `function normalizeProviderQuery(` |
| 337 | fn | normalizeDeepgramQueryKeys | (private) | `function normalizeDeepgramQueryKeys(query: Prov...` |
| 350 | fn | resolveProviderQuery | (private) | `function resolveProviderQuery(params: {` |
| 368 | fn | buildModelDecision | pub | `export function buildModelDecision(params: {` |
| 402 | fn | resolveEntryRunOptions | (private) | `function resolveEntryRunOptions(params: {` |
| 435 | fn | resolveMediaRequestOverrides | (private) | `function resolveMediaRequestOverrides(config: M...` |
| 449 | fn | resolveAudioProviderPrompt | (private) | `function resolveAudioProviderPrompt(params: {` |
| 471 | type | ProviderExecutionAuth | (private) | - |
| 484 | fn | resolveProviderExecutionAuthModelApi | (private) | `function resolveProviderExecutionAuthModelApi(p...` |
| 491 | fn | resolveProviderExecutionAuth | (private) | `async function resolveProviderExecutionAuth(par...` |
| 600 | fn | resolveProviderExecutionContext | (private) | `async function resolveProviderExecutionContext(...` |
| 636 | fn | formatDecisionSummary | pub | `export function formatDecisionSummary(decision:...` |
| 662 | fn | findDecisionReason | pub | `export function findDecisionReason(` |
| 683 | fn | normalizeDecisionReason | pub | `export function normalizeDecisionReason(reason?...` |
| 693 | fn | summarizeDecisionReason | pub | `export function summarizeDecisionReason(reason?...` |
| 701 | fn | assertMinAudioSize | (private) | `function assertMinAudioSize(params: { size: num...` |
| 729 | fn | formatMissingProviderHint | (private) | `function formatMissingProviderHint(providerId: ...` |
| 759 | fn | runProviderEntry | pub | `export async function runProviderEntry(params: {` |
| 898 | fn | buildRequest | (private) | `const buildRequest = (requestAuth: { kind: "api...` |
| 973 | fn | buildRequest | (private) | `const buildRequest = (requestAuth: { kind: "api...` |
| 1009 | fn | runCliEntry | pub | `export async function runCliEntry(params: {` |

## Public API

### `buildModelDecision`

```
export function buildModelDecision(params: {
```

**Line:** 368 | **Kind:** fn

### `formatDecisionSummary`

```
export function formatDecisionSummary(decision: MediaUnderstandingDecision): string {
```

**Line:** 636 | **Kind:** fn

### `findDecisionReason`

```
export function findDecisionReason(
```

**Line:** 662 | **Kind:** fn

### `normalizeDecisionReason`

```
export function normalizeDecisionReason(reason?: string): string | undefined {
```

**Line:** 683 | **Kind:** fn

### `summarizeDecisionReason`

```
export function summarizeDecisionReason(reason?: string): string | undefined {
```

**Line:** 693 | **Kind:** fn

### `runProviderEntry`

```
export async function runProviderEntry(params: {
```

**Line:** 759 | **Kind:** fn

### `runCliEntry`

```
export async function runCliEntry(params: {
```

**Line:** 1009 | **Kind:** fn
