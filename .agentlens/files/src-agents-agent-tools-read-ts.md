# src/agents/agent-tools.read.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1244
- **Language:** TypeScript
- **Symbols:** 60
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 52 | type | ToolContentBlock | (private) | - |
| 53 | type | ImageContentBlock | (private) | - |
| 54 | type | TextContentBlock | (private) | - |
| 62 | type | OpenClawReadToolOptions | (private) | - |
| 67 | type | SkillReadContent | (private) | - |
| 72 | type | ReadTruncationDetails | (private) | - |
| 83 | fn | resolveAdaptiveReadMaxBytes | (private) | `function resolveAdaptiveReadMaxBytes(options?: ...` |
| 98 | fn | malformedXmlArgValuePathError | (private) | `function malformedXmlArgValuePathError(key: str...` |
| 102 | fn | formatBytes | (private) | `function formatBytes(bytes: number): string {` |
| 111 | fn | getToolResultText | (private) | `function getToolResultText(result: AgentToolRes...` |
| 132 | fn | withToolResultText | (private) | `function withToolResultText(` |
| 163 | fn | extractReadTruncationDetails | (private) | `function extractReadTruncationDetails(` |
| 190 | fn | stripReadContinuationNotice | (private) | `function stripReadContinuationNotice(text: stri...` |
| 194 | fn | stripReadTruncationContentDetails | (private) | `function stripReadTruncationContentDetails(` |
| 223 | fn | isOffsetBeyondEof | (private) | `function isOffsetBeyondEof(error: unknown, args...` |
| 234 | fn | emptyReadResult | (private) | `function emptyReadResult(): AgentToolResult<unk...` |
| 239 | fn | missingDailyMemoryReadResult | (private) | `function missingDailyMemoryReadResult(relativeP...` |
| 255 | fn | normalizeDailyMemoryReadPath | (private) | `function normalizeDailyMemoryReadPath(value: un...` |
| 266 | fn | isNotFoundError | (private) | `function isNotFoundError(error: unknown): boole...` |
| 276 | fn | executeReadPage | (private) | `async function executeReadPage(params: {` |
| 296 | fn | executeReadWithAdaptivePaging | (private) | `async function executeReadWithAdaptivePaging(pa...` |
| 379 | fn | rewriteReadImageHeader | (private) | `function rewriteReadImageHeader(text: string, m...` |
| 387 | fn | normalizeReadImageResult | (private) | `async function normalizeReadImageResult(` |
| 446 | fn | normalizeReadResultDetails | (private) | `function normalizeReadResultDetails(` |
| 497 | fn | wrapToolWorkspaceRootGuard | pub | `export function wrapToolWorkspaceRootGuard(tool...` |
| 501 | fn | mapContainerPathToWorkspaceRoot | (private) | `function mapContainerPathToWorkspaceRoot(params: {` |
| 513 | fn | resolveContainerPathCandidate | (private) | `function resolveContainerPathCandidate(filePath...` |
| 550 | fn | mapContainerPathToRoot | (private) | `function mapContainerPathToRoot(params: {` |
| 588 | fn | resolveToolPathAgainstWorkspaceRoot | (private) | `function resolveToolPathAgainstWorkspaceRoot(pa...` |
| 604 | type | MemoryFlushAppendOnlyWriteOptions | (private) | - |
| 614 | fn | readOptionalUtf8File | (private) | `async function readOptionalUtf8File(params: {` |
| 646 | fn | appendMemoryFlushContent | (private) | `async function appendMemoryFlushContent(params: {` |
| 695 | fn | wrapToolMemoryFlushAppendOnlyWrite | pub | `export function wrapToolMemoryFlushAppendOnlyWr...` |
| 748 | fn | isSandboxRootEscapeError | (private) | `function isSandboxRootEscapeError(error: unknow...` |
| 752 | fn | withWorkspaceSafeTempHint | (private) | `function withWorkspaceSafeTempHint(error: unkno...` |
| 762 | fn | assertSandboxPathWithinAnyRoot | (private) | `async function assertSandboxPathWithinAnyRoot(p...` |
| 798 | fn | wrapToolWorkspaceRootGuardWithOptions | pub | `export function wrapToolWorkspaceRootGuardWithO...` |
| 880 | type | SandboxToolParams | (private) | - |
| 888 | fn | createSandboxedReadTool | pub | `export function createSandboxedReadTool(params:...` |
| 899 | fn | createSandboxedWriteTool | pub | `export function createSandboxedWriteTool(params...` |
| 907 | fn | createSandboxedEditTool | pub | `export function createSandboxedEditTool(params:...` |
| 915 | fn | createHostWorkspaceWriteTool | pub | `export function createHostWorkspaceWriteTool(ro...` |
| 923 | fn | createHostWorkspaceEditTool | pub | `export function createHostWorkspaceEditTool(roo...` |
| 931 | fn | createOpenClawReadTool | pub | `export function createOpenClawReadTool(` |
| 965 | fn | wrapReadToolWithSkillContent | pub | `export function wrapReadToolWithSkillContent(` |
| 1014 | fn | createSandboxReadOperations | (private) | `function createSandboxReadOperations(params: Sa...` |
| 1038 | fn | createSandboxWriteOperations | (private) | `function createSandboxWriteOperations(params: S...` |
| 1053 | fn | createSandboxEditOperations | (private) | `function createSandboxEditOperations(params: Sa...` |
| 1063 | fn | assertSandboxFileExists | (private) | `async function assertSandboxFileExists(params: ...` |
| 1070 | fn | expandTildeToOsHome | (private) | `function expandTildeToOsHome(filePath: string):...` |
| 1075 | fn | resolveHostPath | (private) | `function resolveHostPath(filePath: string): str...` |
| 1079 | fn | writeHostFile | (private) | `async function writeHostFile(absolutePath: stri...` |
| 1085 | fn | statHostFile | (private) | `async function statHostFile(absolutePath: strin...` |
| 1106 | fn | writeWorkspaceFile | (private) | `async function writeWorkspaceFile(` |
| 1120 | fn | createHostWriteOperations | (private) | `function createHostWriteOperations(root: string...` |
| 1143 | fn | getRoot | (private) | `const getRoot = () => (rootPromise ??= fsRoot(r...` |
| 1164 | fn | createHostEditOperations | (private) | `function createHostEditOperations(root: string,...` |
| 1185 | fn | getRoot | (private) | `const getRoot = () => (rootPromise ??= fsRoot(r...` |
| 1224 | fn | toCanonicalRelativeWorkspacePath | (private) | `async function toCanonicalRelativeWorkspacePath(` |
| 1239 | fn | createFsAccessError | (private) | `function createFsAccessError(code: string, file...` |

## Public API

### `wrapToolWorkspaceRootGuard`

```
export function wrapToolWorkspaceRootGuard(tool: AnyAgentTool, root: string): AnyAgentTool {
```

**Line:** 497 | **Kind:** fn

### `wrapToolMemoryFlushAppendOnlyWrite`

```
export function wrapToolMemoryFlushAppendOnlyWrite(
```

**Line:** 695 | **Kind:** fn

### `wrapToolWorkspaceRootGuardWithOptions`

```
export function wrapToolWorkspaceRootGuardWithOptions(
```

**Line:** 798 | **Kind:** fn

### `createSandboxedReadTool`

```
export function createSandboxedReadTool(params: SandboxToolParams) {
```

**Line:** 888 | **Kind:** fn

### `createSandboxedWriteTool`

```
export function createSandboxedWriteTool(params: SandboxToolParams) {
```

**Line:** 899 | **Kind:** fn

### `createSandboxedEditTool`

```
export function createSandboxedEditTool(params: SandboxToolParams) {
```

**Line:** 907 | **Kind:** fn

### `createHostWorkspaceWriteTool`

```
export function createHostWorkspaceWriteTool(root: string, options?: { workspaceOnly?: boolean }) {
```

**Line:** 915 | **Kind:** fn

### `createHostWorkspaceEditTool`

```
export function createHostWorkspaceEditTool(root: string, options?: { workspaceOnly?: boolean }) {
```

**Line:** 923 | **Kind:** fn

### `createOpenClawReadTool`

```
export function createOpenClawReadTool(
```

**Line:** 931 | **Kind:** fn

### `wrapReadToolWithSkillContent`

```
export function wrapReadToolWithSkillContent(
```

**Line:** 965 | **Kind:** fn

## Memory Markers

### 🟢 `NOTE` (line 50)

> (steipete): Upstream read now does file-magic MIME detection; we keep the wrapper
