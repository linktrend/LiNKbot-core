# src/agents/tool-search.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2578
- **Language:** TypeScript
- **Symbols:** 115
- **Public symbols:** 23

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 60 | type | ToolSearchMode | (private) | - |
| 61 | type | CatalogSource | (private) | - |
| 62 | type | CatalogTool | (private) | - |
| 63 | type | CatalogVisibilityOptions | (private) | - |
| 66 | type | UnknownToolRecoverySurface | (private) | - |
| 67 | type | UnknownToolErrorOptions | (private) | - |
| 71 | type | ToolSearchCallOptions | (private) | - |
| 78 | type | ReusableCatalogSnapshot | (private) | - |
| 83 | type | ToolSearchCatalogToolExecutor | pub | - |
| 99 | type | ToolSearchTargetTranscriptProjection | pub | - |
| 110 | type | ToolSearchConfig | pub | - |
| 119 | type | ToolSearchToolContext | pub | - |
| 133 | type | ToolSearchCatalogEntry | pub | - |
| 146 | type | ToolSearchDirectoryIntent | (private) | - |
| 156 | type | ToolDirectoryFamily | (private) | - |
| 158 | type | ToolSearchCatalogSession | (private) | - |
| 165 | type | ToolSearchCatalogRef | pub | - |
| 169 | type | CodeModeBridgeMethod | (private) | - |
| 171 | type | CodeModeChildMessage | (private) | - |
| 177 | type | CodeModeBridgeResultMessage | (private) | - |
| 184 | fn | send | (private) | `function send(message) {` |
| 190 | fn | sendAndFlush | (private) | `function sendAndFlush(message) {` |
| 204 | fn | toJsonSafe | (private) | `function toJsonSafe(value) {` |
| 232 | fn | formatLogItem | (private) | `function formatLogItem(value) {` |
| 240 | fn | bridgeResultPayload | (private) | `function bridgeResultPayload(message) {` |
| 248 | fn | settleBridge | (private) | `function settleBridge(message) {` |
| 264 | fn | buildModelScriptSource | (private) | `function buildModelScriptSource(code) {` |
| 268 | fn | buildControllerSource | (private) | `function buildControllerSource() {` |
| 349 | fn | pumpController | (private) | `function pumpController(controller) {` |
| 358 | fn | runModelCode | (private) | `async function runModelCode(code, timeoutMs) {` |
| 442 | fn | readToolSearchConfig | (private) | `function readToolSearchConfig(config?: OpenClaw...` |
| 454 | fn | readBoolean | (private) | `function readBoolean(value: unknown, fallback: ...` |
| 458 | fn | readInteger | (private) | `function readInteger(value: unknown, fallback: ...` |
| 465 | fn | isToolSearchCodeModeSupported | (private) | `function isToolSearchCodeModeSupported(): boole...` |
| 472 | fn | resolveMinCodeTimeoutMs | (private) | `function resolveMinCodeTimeoutMs(): number {` |
| 476 | fn | resolveToolSearchConfig | pub | `export function resolveToolSearchConfig(config?...` |
| 503 | fn | sessionCatalogKeys | (private) | `function sessionCatalogKeys(input: {` |
| 526 | fn | sessionCatalogKey | (private) | `function sessionCatalogKey(input: {` |
| 535 | fn | reusableCatalogKey | (private) | `function reusableCatalogKey(input: {` |
| 547 | fn | stableJsonFingerprint | (private) | `function stableJsonFingerprint(value: unknown, ...` |
| 565 | fn | catalogToolIdentity | (private) | `function catalogToolIdentity(tool: CatalogTool)...` |
| 576 | fn | untrustedSchemaFingerprint | (private) | `function untrustedSchemaFingerprint(schema: unk...` |
| 590 | fn | catalogEntriesFingerprint | (private) | `function catalogEntriesFingerprint(entries: rea...` |
| 620 | fn | restoreToolSearchCatalog | (private) | `function restoreToolSearchCatalog(params: {` |
| 649 | fn | bindToolSearchCatalog | (private) | `function bindToolSearchCatalog(params: {` |
| 665 | fn | rememberReusableCatalog | (private) | `function rememberReusableCatalog(key: string | ...` |
| 686 | fn | classifyTool | (private) | `function classifyTool(tool: CatalogTool): {` |
| 710 | fn | makeCatalogId | (private) | `function makeCatalogId(tool: CatalogTool, sourc...` |
| 715 | fn | wrapCatalogTool | (private) | `function wrapCatalogTool(tool: AnyAgentTool, ho...` |
| 722 | fn | toCatalogEntry | (private) | `function toCatalogEntry(` |
| 750 | fn | shouldCatalogTool | (private) | `function shouldCatalogTool(tool: AnyAgentTool):...` |
| 762 | fn | registerHeadlessToolSearchCatalog | pub | `export function registerHeadlessToolSearchCatal...` |
| 780 | fn | collectUniqueCatalogToolNames | pub | `export function collectUniqueCatalogToolNames(t...` |
| 794 | fn | shouldExposeControlTool | (private) | `function shouldExposeControlTool(name: string, ...` |
| 808 | fn | readMessageToolResultId | (private) | `function readMessageToolResultId(message: Agent...` |
| 835 | fn | textFromToolSearchProjectionResult | (private) | `function textFromToolSearchProjectionResult(res...` |
| 864 | fn | buildToolSearchTargetTranscriptMessages | (private) | `function buildToolSearchTargetTranscriptMessages(` |
| 908 | fn | projectToolSearchTargetTranscriptMessages | pub | `export function projectToolSearchTargetTranscri...` |
| 951 | fn | freezeJsonSnapshot | (private) | `function freezeJsonSnapshot(value: unknown): un...` |
| 962 | fn | snapshotToolSearchTargetTranscriptResult | (private) | `function snapshotToolSearchTargetTranscriptResult(` |
| 979 | fn | createToolSearchCatalogRef | pub | `export function createToolSearchCatalogRef(): T...` |
| 984 | fn | applyToolSearchCatalog | pub | `export function applyToolSearchCatalog(params: {` |
| 1012 | fn | applyToolSchemaDirectoryCatalog | pub | `export function applyToolSchemaDirectoryCatalog...` |
| 1061 | fn | buildToolSchemaDirectoryPrompt | pub | `export function buildToolSchemaDirectoryPrompt(` |
| 1073 | fn | resolveToolSearchCatalogTool | pub | `export function resolveToolSearchCatalogTool(` |
| 1099 | fn | addClientToolsToToolSearchCatalog | pub | `export function addClientToolsToToolSearchCatal...` |
| 1119 | fn | registerToolSearchCatalog | (private) | `function registerToolSearchCatalog(params: {` |
| 1161 | fn | clearToolSearchCatalog | pub | `export function clearToolSearchCatalog(params: {` |
| 1182 | fn | resolveCatalog | (private) | `function resolveCatalog(ctx: ToolSearchToolCont...` |
| 1211 | fn | compactToolSearchCatalogEntry | pub | `export function compactToolSearchCatalogEntry(e...` |
| 1229 | fn | compactDirectoryDescription | (private) | `function compactDirectoryDescription(descriptio...` |
| 1237 | fn | formatToolDirectoryIdentifier | (private) | `function formatToolDirectoryIdentifier(value: s...` |
| 1242 | fn | formatToolDirectoryEntry | (private) | `function formatToolDirectoryEntry(` |
| 1258 | fn | renderToolSearchCatalogDirectory | (private) | `function renderToolSearchCatalogDirectory(lines...` |
| 1267 | fn | formatToolSearchCatalogDirectory | (private) | `function formatToolSearchCatalogDirectory(` |
| 1370 | fn | readToolDirectoryIntent | (private) | `function readToolDirectoryIntent(query: string)...` |
| 1406 | fn | classifyDirectoryToolFamilies | (private) | `function classifyDirectoryToolFamilies(` |
| 1440 | fn | scoreDirectoryTool | (private) | `function scoreDirectoryTool(` |
| 1490 | fn | expandDirectoryHydrationGroups | (private) | `function expandDirectoryHydrationGroups(params: {` |
| 1554 | fn | estimateToolSchemaDirectoryToolNames | pub | `export function estimateToolSchemaDirectoryTool...` |
| 1603 | fn | describeEntry | (private) | `function describeEntry(entry: ToolSearchCatalog...` |
| 1611 | fn | tokenize | (private) | `function tokenize(input: string): string[] {` |
| 1615 | fn | scoreEntry | (private) | `function scoreEntry(entry: ToolSearchCatalogEnt...` |
| 1644 | fn | visibleCatalogEntries | (private) | `function visibleCatalogEntries(` |
| 1653 | fn | tokenizeLookupValue | (private) | `function tokenizeLookupValue(input: string): Se...` |
| 1657 | fn | scoreUnknownToolSuggestion | (private) | `function scoreUnknownToolSuggestion(needle: str...` |
| 1685 | fn | formatUnknownToolIdError | (private) | `function formatUnknownToolIdError(` |
| 1716 | fn | findEntry | (private) | `function findEntry(` |
| 1739 | fn | findEntryByExactId | (private) | `function findEntryByExactId(` |
| 1754 | fn | readId | (private) | `function readId(args: unknown): string {` |
| 1763 | fn | readLimit | (private) | `function readLimit(value: unknown, config: Tool...` |
| 1773 | fn | readSearchArgs | (private) | `function readSearchArgs(args: unknown, config: ...` |
| 1786 | fn | readCallArgs | (private) | `function readCallArgs(args: unknown): { id: str...` |
| 1795 | fn | getTelemetry | (private) | `function getTelemetry(catalog: ToolSearchCatalo...` |
| 1817 | fn | validateCatalogOutputValue | (private) | `async function validateCatalogOutputValue(` |
| 1841 | fn | assertCatalogOutputSchemaIsValid | (private) | `async function assertCatalogOutputSchemaIsValid...` |
| 1847 | fn | assertCatalogOutputMatchesSchema | (private) | `async function assertCatalogOutputMatchesSchema(` |
| 1874 | fn | sanitizeToolCallIdPart | (private) | `function sanitizeToolCallIdPart(value: string):...` |
| 1880 | class | ToolSearchRuntime | pub | - |
| 1996 | fn | acceptResultBeforeProjection | (private) | `const acceptResultBeforeProjection = async (can...` |
| 2030 | fn | unwrapToolResultValue | (private) | `function unwrapToolResultValue(result: AgentToo...` |
| 2035 | fn | applyToolCatalogCompaction | pub | `export function applyToolCatalogCompaction(para...` |
| 2077 | fn | shouldCatalog | (private) | `const shouldCatalog = (tool: AnyAgentTool) =>` |
| 2163 | fn | addClientToolsToToolCatalog | pub | `export function addClientToolsToToolCatalog(par...` |
| 2192 | fn | toJsonSafe | (private) | `function toJsonSafe(value: unknown): unknown {` |
| 2221 | fn | runCodeMode | (private) | `async function runCodeMode(params: {` |
| 2248 | fn | buildCodeModeChildArgs | (private) | `function buildCodeModeChildArgs(): string[] {` |
| 2255 | fn | isCodeModeBridgeMethod | (private) | `function isCodeModeBridgeMethod(value: unknown)...` |
| 2259 | fn | runCodeModeBridgeRequest | (private) | `async function runCodeModeBridgeRequest(` |
| 2302 | fn | appendToolSearchCodeStderrTail | (private) | `function appendToolSearchCodeStderrTail(current...` |
| 2306 | fn | runCodeModeChild | (private) | `function runCodeModeChild(params: {` |
| 2328 | fn | settle | (private) | `const settle = (callback: () => void) => {` |
| 2375 | fn | rejectOnExit | (private) | `const rejectOnExit = () => {` |
| 2465 | fn | readCode | (private) | `function readCode(args: unknown): string {` |
| 2475 | fn | createToolSearchTools | pub | `export function createToolSearchTools(ctx: Tool...` |

## Public API

### `resolveToolSearchConfig`

```
export function resolveToolSearchConfig(config?: OpenClawConfig): ToolSearchConfig {
```

**Line:** 476 | **Kind:** fn

### `registerHeadlessToolSearchCatalog`

```
export function registerHeadlessToolSearchCatalog(params: {
```

**Line:** 762 | **Kind:** fn

### `collectUniqueCatalogToolNames`

```
export function collectUniqueCatalogToolNames(tools: readonly AnyAgentTool[]): Set<string> {
```

**Line:** 780 | **Kind:** fn

### `projectToolSearchTargetTranscriptMessages`

```
export function projectToolSearchTargetTranscriptMessages(
```

**Line:** 908 | **Kind:** fn

### `createToolSearchCatalogRef`

```
export function createToolSearchCatalogRef(): ToolSearchCatalogRef {
```

**Line:** 979 | **Kind:** fn

### `applyToolSearchCatalog`

```
export function applyToolSearchCatalog(params: {
```

**Line:** 984 | **Kind:** fn

### `applyToolSchemaDirectoryCatalog`

```
export function applyToolSchemaDirectoryCatalog(params: {
```

**Line:** 1012 | **Kind:** fn

### `buildToolSchemaDirectoryPrompt`

```
export function buildToolSchemaDirectoryPrompt(
```

**Line:** 1061 | **Kind:** fn

### `resolveToolSearchCatalogTool`

```
export function resolveToolSearchCatalogTool(
```

**Line:** 1073 | **Kind:** fn

### `addClientToolsToToolSearchCatalog`

```
export function addClientToolsToToolSearchCatalog(params: {
```

**Line:** 1099 | **Kind:** fn

### `clearToolSearchCatalog`

```
export function clearToolSearchCatalog(params: {
```

**Line:** 1161 | **Kind:** fn

### `compactToolSearchCatalogEntry`

```
export function compactToolSearchCatalogEntry(entry: ToolSearchCatalogEntry) {
```

**Line:** 1211 | **Kind:** fn

### `estimateToolSchemaDirectoryToolNames`

```
export function estimateToolSchemaDirectoryToolNames(params: {
```

**Line:** 1554 | **Kind:** fn

### `applyToolCatalogCompaction`

```
export function applyToolCatalogCompaction(params: {
```

**Line:** 2035 | **Kind:** fn

### `addClientToolsToToolCatalog`

```
export function addClientToolsToToolCatalog(params: {
```

**Line:** 2163 | **Kind:** fn

### `createToolSearchTools`

```
export function createToolSearchTools(ctx: ToolSearchToolContext): AnyAgentTool[] {
```

**Line:** 2475 | **Kind:** fn
