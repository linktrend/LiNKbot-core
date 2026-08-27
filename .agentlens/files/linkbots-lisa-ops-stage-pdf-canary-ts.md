# linkbots/lisa/ops/stage-pdf-canary.ts

[← Back to Module](../modules/linkbots-lisa-ops/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1002
- **Language:** TypeScript
- **Symbols:** 30
- **Public symbols:** 19

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 65 | type | StagePdfCanaryMode | pub | - |
| 67 | type | StagePdfOpenRouterRequest | pub | - |
| 98 | type | StagePdfTransportResult | pub | - |
| 107 | type | StagePdfProofKind | pub | - |
| 114 | type | StagePdfCanaryTransport | pub | - |
| 124 | type | SealedOpenRouterHttpProductionTransport | (private) | - |
| 128 | fn | isSealedOpenRouterHttpProduction | (private) | `function isSealedOpenRouterHttpProduction(` |
| 139 | type | StagePdfCanaryReceipt | pub | - |
| 216 | fn | buildSyntheticStagePdfBytes | pub | `export function buildSyntheticStagePdfBytes(): ...` |
| 231 | fn | writeSyntheticStagePdf | pub | `export function writeSyntheticStagePdf(targetPa...` |
| 250 | fn | inspectOpenRouterCredentialSecretRef | pub | `export function inspectOpenRouterCredentialSecr...` |
| 273 | fn | hasOpenRouterCredentialProcessOnly | pub | `export function hasOpenRouterCredentialProcessO...` |
| 285 | fn | resolveOpenRouterApiKeyViaSecretRef | pub | `export async function resolveOpenRouterApiKeyVi...` |
| 303 | fn | buildStagePdfOpenRouterRequest | pub | `export function buildStagePdfOpenRouterRequest(...` |
| 350 | fn | verifyStagePdfTransportResponse | pub | `export function verifyStagePdfTransportResponse...` |
| 368 | fn | sendOpenRouterChatRequest | (private) | `async function sendOpenRouterChatRequest(` |
| 443 | fn | createOpenRouterFetchTransport | pub | `export function createOpenRouterFetchTransport(` |
| 461 | fn | mintSealedOpenRouterHttpProductionTransport | (private) | `function mintSealedOpenRouterHttpProductionTran...` |
| 474 | fn | stagePdfConfigSliceForRollback | (private) | `function stagePdfConfigSliceForRollback(): Stag...` |
| 491 | fn | applyInMemoryFailureRollback | (private) | `function applyInMemoryFailureRollback(` |
| 508 | type | StagePdfOperationalRollbackWiring | pub | - |
| 520 | fn | resolveLiveExecuteOperationalRollback | pub | `export function resolveLiveExecuteOperationalRo...` |
| 545 | fn | applyExecuteFailureRollback | (private) | `async function applyExecuteFailureRollback(para...` |
| 590 | fn | baseReceiptFields | (private) | `function baseReceiptFields(params: {` |
| 654 | fn | writeReceipt | (private) | `function writeReceipt(outputDir: string, receip...` |
| 665 | fn | planStagePdfCanary | pub | `export function planStagePdfCanary(params: {` |
| 713 | fn | executeStagePdfCanary | pub | `export async function executeStagePdfCanary(par...` |
| 887 | fn | printHelp | (private) | `function printHelp(): void {` |
| 898 | fn | mainAsync | (private) | `async function mainAsync(argv: string[]): Promi...` |
| 981 | fn | readReceipt | pub | `export function readReceipt(filePath: string): ...` |

## Public API

### `buildSyntheticStagePdfBytes`

```
export function buildSyntheticStagePdfBytes(): Buffer {
```

**Line:** 216 | **Kind:** fn

### `writeSyntheticStagePdf`

```
export function writeSyntheticStagePdf(targetPath: string): {
```

**Line:** 231 | **Kind:** fn

### `inspectOpenRouterCredentialSecretRef`

```
export function inspectOpenRouterCredentialSecretRef(env: NodeJS.ProcessEnv = process.env): {
```

**Line:** 250 | **Kind:** fn

### `hasOpenRouterCredentialProcessOnly`

```
export function hasOpenRouterCredentialProcessOnly(env: NodeJS.ProcessEnv = process.env): {
```

**Line:** 273 | **Kind:** fn

### `resolveOpenRouterApiKeyViaSecretRef`

```
export async function resolveOpenRouterApiKeyViaSecretRef(
```

**Line:** 285 | **Kind:** fn

### `buildStagePdfOpenRouterRequest`

```
export function buildStagePdfOpenRouterRequest(params: {
```

**Line:** 303 | **Kind:** fn

### `verifyStagePdfTransportResponse`

```
export function verifyStagePdfTransportResponse(result: StagePdfTransportResult): {
```

**Line:** 350 | **Kind:** fn

### `createOpenRouterFetchTransport`

```
export function createOpenRouterFetchTransport(
```

**Line:** 443 | **Kind:** fn

### `resolveLiveExecuteOperationalRollback`

```
export function resolveLiveExecuteOperationalRollback(
```

**Line:** 520 | **Kind:** fn

### `planStagePdfCanary`

```
export function planStagePdfCanary(params: {
```

**Line:** 665 | **Kind:** fn

### `executeStagePdfCanary`

```
export async function executeStagePdfCanary(params: {
```

**Line:** 713 | **Kind:** fn

### `readReceipt`

```
export function readReceipt(filePath: string): StagePdfCanaryReceipt {
```

**Line:** 981 | **Kind:** fn
