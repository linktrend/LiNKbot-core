# src/tui/embedded-backend.ts

[← Back to Module](../modules/src-tui/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1547
- **Language:** TypeScript
- **Symbols:** 17
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 114 | type | LocalRunState | (private) | - |
| 141 | type | QueuedSessionRun | (private) | - |
| 147 | type | LocalPendingMessage | (private) | - |
| 168 | fn | hasProviderWildcardModelAllowlist | (private) | `function hasProviderWildcardModelAllowlist(cfg:...` |
| 178 | fn | resolveConfiguredReplaceModeCatalog | (private) | `function resolveConfiguredReplaceModeCatalog(cf...` |
| 188 | fn | shouldLoadFullGatewayCatalogForReplaceMode | (private) | `function shouldLoadFullGatewayCatalogForReplace...` |
| 192 | fn | ensureEmbeddedHistoryRuntimePluginsLoaded | (private) | `function ensureEmbeddedHistoryRuntimePluginsLoa...` |
| 208 | fn | loadEmbeddedTuiModelCatalog | (private) | `async function loadEmbeddedTuiModelCatalog(cfg:...` |
| 218 | fn | resolveBtwQuestion | (private) | `function resolveBtwQuestion(message: string): s...` |
| 224 | fn | buildLocalQueuedPrompt | (private) | `function buildLocalQueuedPrompt(queue: NonNulla...` |
| 240 | fn | payloadText | (private) | `function payloadText(parts: unknown): string {` |
| 257 | fn | timeoutSecondsFromMs | (private) | `function timeoutSecondsFromMs(timeoutMs?: numbe...` |
| 264 | fn | resolveDeltaPayload | (private) | `function resolveDeltaPayload(text: string, prev...` |
| 274 | fn | createQueuedRunReadiness | (private) | `function createQueuedRunReadiness() {` |
| 296 | fn | waitForLocalRunShutdown | (private) | `async function waitForLocalRunShutdown(promises...` |
| 321 | fn | waitForQueuedLocalRun | (private) | `async function waitForQueuedLocalRun(previousRu...` |
| 355 | class | EmbeddedTuiBackend | pub | - |

## Public API
