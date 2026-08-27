# extensions/memory-core/src/cli.runtime.ts

[← Back to Module](../modules/extensions-memory-core/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2056
- **Language:** TypeScript
- **Symbols:** 53
- **Public symbols:** 7

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 75 | type | MemoryManager | (private) | - |
| 76 | type | MemoryManagerPurpose | (private) | - |
| 78 | type | MemorySourceName | (private) | - |
| 80 | type | LlamaCppRuntimeStatus | (private) | - |
| 103 | fn | readLlamaCppRuntimeStatus | (private) | `function readLlamaCppRuntimeStatus(` |
| 110 | fn | formatMemoryIndexIdentityWarning | (private) | `function formatMemoryIndexIdentityWarning(` |
| 132 | fn | formatRuntimeBytes | (private) | `function formatRuntimeBytes(bytes: number): str...` |
| 146 | type | SourceScan | (private) | - |
| 152 | type | MemorySourceScan | (private) | - |
| 158 | type | LoadedMemoryCommandConfig | (private) | - |
| 163 | fn | getMemoryCommandSecretTargetIds | (private) | `function getMemoryCommandSecretTargetIds(): Set...` |
| 170 | fn | loadMemoryCommandConfig | (private) | `async function loadMemoryCommandConfig(commandN...` |
| 182 | fn | emitMemorySecretResolveDiagnostics | (private) | `function emitMemorySecretResolveDiagnostics(` |
| 200 | fn | resolveMemoryPluginConfig | (private) | `function resolveMemoryPluginConfig(cfg: OpenCla...` |
| 207 | fn | listHistoricalDailyFiles | (private) | `async function listHistoricalDailyFiles(inputPa...` |
| 231 | fn | createHistoricalRemHarnessWorkspace | (private) | `async function createHistoricalRemHarnessWorksp...` |
| 273 | fn | formatDreamingSummary | (private) | `function formatDreamingSummary(cfg: OpenClawCon...` |
| 279 | fn | formatCron | (private) | `const formatCron = (cron: string) => (timezone ...` |
| 294 | fn | formatAuditCounts | (private) | `function formatAuditCounts(audit: ShortTermAudi...` |
| 317 | fn | formatRepairSummary | (private) | `function formatRepairSummary(repair: RepairShor...` |
| 335 | fn | formatDreamingAuditSummary | (private) | `function formatDreamingAuditSummary(audit: Drea...` |
| 347 | fn | formatDreamingRepairSummary | (private) | `function formatDreamingRepairSummary(repair: Re...` |
| 364 | fn | formatSourceLabel | (private) | `function formatSourceLabel(source: string, work...` |
| 379 | fn | resolveAgent | (private) | `function resolveAgent(cfg: OpenClawConfig, agen...` |
| 387 | fn | buildCliMemorySearchSessionKey | (private) | `function buildCliMemorySearchSessionKey(agentId...` |
| 396 | fn | resolveAgentIds | (private) | `function resolveAgentIds(cfg: OpenClawConfig, a...` |
| 408 | fn | formatExtraPaths | (private) | `function formatExtraPaths(workspaceDir: string,...` |
| 412 | fn | extractIsoDayFromPath | (private) | `function extractIsoDayFromPath(filePath: string...` |
| 417 | fn | normalizeRelativePath | (private) | `function normalizeRelativePath(baseDir: string,...` |
| 421 | fn | groundedMarkdownToDiaryLines | (private) | `function groundedMarkdownToDiaryLines(markdown:...` |
| 428 | fn | parseGroundedRef | (private) | `function parseGroundedRef(` |
| 447 | fn | collectGroundedShortTermSeedItems | (private) | `function collectGroundedShortTermSeedItems(` |
| 522 | fn | matchesPromotionSelector | (private) | `function matchesPromotionSelector(` |
| 542 | fn | withMemoryManagerForAgent | (private) | `async function withMemoryManagerForAgent(params: {` |
| 575 | fn | checkReadableFile | (private) | `async function checkReadableFile(pathname: stri...` |
| 591 | fn | scanSessionFiles | (private) | `async function scanSessionFiles(agentId: string...` |
| 613 | fn | scanMemoryFiles | (private) | `async function scanMemoryFiles(` |
| 701 | fn | summarizeQmdIndexArtifact | (private) | `async function summarizeQmdIndexArtifact(manage...` |
| 729 | fn | scanMemorySources | (private) | `async function scanMemorySources(params: {` |
| 754 | fn | runMemoryStatus | pub | `export async function runMemoryStatus(` |
| 907 | fn | label | (private) | `const label = (text: string) => muted(`${text}:`);` |
| 1025 | fn | formatVectorState | (private) | `const formatVectorState = (available: boolean |...` |
| 1033 | fn | formatVectorLine | (private) | `const formatVectorLine = (lineLabel: string, st...` |
| 1169 | fn | runMemoryIndex | pub | `export async function runMemoryIndex(` |
| 1189 | fn | label | (private) | `const label = (text: string) => muted(`${text}:`);` |
| 1217 | fn | formatElapsed | (private) | `const formatElapsed = () => {` |
| 1224 | fn | formatEta | (private) | `const formatEta = () => {` |
| 1239 | fn | buildLabel | (private) | `const buildLabel = () => {` |
| 1329 | fn | runMemorySearch | pub | `export async function runMemorySearch(` |
| 1417 | fn | runMemoryPromote | pub | `export async function runMemoryPromote(` |
| 1578 | fn | runMemoryPromoteExplain | pub | `export async function runMemoryPromoteExplain(` |
| 1686 | fn | runMemoryRemHarness | pub | `export async function runMemoryRemHarness(` |
| 1858 | fn | runMemoryRemBackfill | pub | `export async function runMemoryRemBackfill(` |

## Public API

### `runMemoryStatus`

```
export async function runMemoryStatus(
```

**Line:** 754 | **Kind:** fn

### `runMemoryIndex`

```
export async function runMemoryIndex(
```

**Line:** 1169 | **Kind:** fn

### `runMemorySearch`

```
export async function runMemorySearch(
```

**Line:** 1329 | **Kind:** fn

### `runMemoryPromote`

```
export async function runMemoryPromote(
```

**Line:** 1417 | **Kind:** fn

### `runMemoryPromoteExplain`

```
export async function runMemoryPromoteExplain(
```

**Line:** 1578 | **Kind:** fn

### `runMemoryRemHarness`

```
export async function runMemoryRemHarness(
```

**Line:** 1686 | **Kind:** fn

### `runMemoryRemBackfill`

```
export async function runMemoryRemBackfill(
```

**Line:** 1858 | **Kind:** fn
