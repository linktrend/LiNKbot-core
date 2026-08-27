# extensions/codex/src/app-server/attempt-context.ts

[← Back to Module](../modules/extensions-codex-src-app-server/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1074
- **Language:** TypeScript
- **Symbols:** 59
- **Public symbols:** 11

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 59 | type | CodexBootstrapFile | (private) | - |
| 60 | type | CodexBootstrapContext | (private) | - |
| 65 | type | CodexSystemPromptReport | pub | - |
| 66 | type | CodexToolReportEntry | (private) | - |
| 67 | type | CodexWorkspaceBootstrapContext | (private) | - |
| 84 | fn | readMirroredSessionHistoryMessages | pub | `export async function readMirroredSessionHistor...` |
| 100 | fn | readContextEngineThreadBootstrapProjection | pub | `export function readContextEngineThreadBootstra...` |
| 125 | fn | resolveContextEngineBootstrapProjectionDecision | pub | `export function resolveContextEngineBootstrapPr...` |
| 169 | fn | buildCodexWorkspaceBootstrapContext | pub | `export async function buildCodexWorkspaceBootst...` |
| 287 | fn | buildCodexSystemPromptReport | pub | `export function buildCodexSystemPromptReport(pa...` |
| 345 | fn | buildCodexSkillReportEntries | (private) | `function buildCodexSkillReportEntries(` |
| 360 | fn | buildCodexToolReportEntry | (private) | `function buildCodexToolReportEntry(tool: CodexD...` |
| 380 | fn | buildCodexToolSchemaStats | (private) | `function buildCodexToolSchemaStats(` |
| 383 | fn | schemaChars | (private) | `const schemaChars = (() => {` |
| 399 | fn | sha256Text | (private) | `function sha256Text(value: string): string {` |
| 403 | fn | normalizeForStableHash | (private) | `function normalizeForStableHash(value: unknown)...` |
| 418 | fn | stableJsonHash | (private) | `function stableJsonHash(value: JsonValue): stri...` |
| 422 | fn | buildCodexBootstrapInjectionStats | (private) | `function buildCodexBootstrapInjectionStats(para...` |
| 475 | fn | indexCodexContextFileContent | (private) | `function indexCodexContextFileContent(files: Em...` |
| 497 | fn | readCodexIndexedContextFileContent | (private) | `function readCodexIndexedContextFileContent(` |
| 516 | fn | readPositiveNumber | (private) | `function readPositiveNumber(value: unknown): nu...` |
| 522 | fn | readNonEmptyString | (private) | `function readNonEmptyString(value: unknown): st...` |
| 529 | fn | buildCodexOpenClawPromptContext | pub | `export function buildCodexOpenClawPromptContext...` |
| 552 | fn | shouldInjectCodexOpenClawPromptContext | (private) | `function shouldInjectCodexOpenClawPromptContext...` |
| 561 | fn | renderCodexSkillsCollaborationInstructions | pub | `export function renderCodexSkillsCollaborationI...` |
| 577 | fn | prependCodexOpenClawPromptContext | pub | `export function prependCodexOpenClawPromptContext(` |
| 605 | fn | resolveCodexDeliveryHintPreservedInputRange | pub | `export function resolveCodexDeliveryHintPreserv...` |
| 646 | fn | splitLeadingCodexDeliveryHint | (private) | `function splitLeadingCodexDeliveryHint(prompt: ...` |
| 664 | fn | renderCodexWorkspaceBootstrapPromptContext | (private) | `function renderCodexWorkspaceBootstrapPromptCon...` |
| 685 | fn | selectCodexWorkspacePromptContextFiles | (private) | `function selectCodexWorkspacePromptContextFiles(` |
| 709 | fn | selectCodexWorkspaceInheritedDeveloperInstructionFiles | (private) | `function selectCodexWorkspaceInheritedDeveloper...` |
| 718 | fn | selectCodexWorkspaceTurnScopedDeveloperInstructionFiles | (private) | `function selectCodexWorkspaceTurnScopedDevelope...` |
| 727 | fn | selectCodexWorkspaceDeveloperInstructionFiles | (private) | `function selectCodexWorkspaceDeveloperInstructi...` |
| 744 | fn | renderCodexWorkspaceThreadDeveloperInstructions | (private) | `function renderCodexWorkspaceThreadDeveloperIns...` |
| 755 | fn | renderCodexWorkspaceCollaborationDeveloperInstructions | (private) | `function renderCodexWorkspaceCollaborationDevel...` |
| 767 | fn | renderCodexWorkspaceDeveloperInstructions | (private) | `function renderCodexWorkspaceDeveloperInstructi...` |
| 790 | fn | selectCodexWorkspaceHeartbeatReferenceFiles | (private) | `function selectCodexWorkspaceHeartbeatReference...` |
| 805 | fn | renderCodexWorkspaceHeartbeatReference | (private) | `function renderCodexWorkspaceHeartbeatReference...` |
| 821 | fn | selectCodexWorkspaceMemoryReferenceFiles | (private) | `function selectCodexWorkspaceMemoryReferenceFil...` |
| 843 | fn | renderCodexWorkspaceMemoryReference | (private) | `function renderCodexWorkspaceMemoryReference(pa...` |
| 865 | fn | renderCodexWorkspaceMemoryCollaborationInstructions | (private) | `async function renderCodexWorkspaceMemoryCollab...` |
| 891 | fn | renderCodexMemoryRecallInstructions | (private) | `async function renderCodexMemoryRecallInstructi...` |
| 915 | fn | renderCodexMemoryToolSearchBridge | (private) | `function renderCodexMemoryToolSearchBridge(tool...` |
| 927 | fn | getCodexWorkspaceMemoryToolNames | pub | `export function getCodexWorkspaceMemoryToolName...` |
| 934 | fn | canRouteCodexWorkspaceMemoryThroughTools | (private) | `function canRouteCodexWorkspaceMemoryThroughToo...` |
| 948 | fn | isMissingCodexBootstrapContextFile | (private) | `function isMissingCodexBootstrapContextFile(fil...` |
| 952 | fn | toCodexEmbeddedContextFile | (private) | `function toCodexEmbeddedContextFile(file: Codex...` |
| 959 | fn | isCodexWorkspaceRootMemoryBootstrapFile | (private) | `function isCodexWorkspaceRootMemoryBootstrapFil...` |
| 969 | fn | isCodexWorkspaceRootMemoryContextFile | (private) | `function isCodexWorkspaceRootMemoryContextFile(...` |
| 982 | fn | isCodexWorkspaceRootMemoryPath | (private) | `function isCodexWorkspaceRootMemoryPath(params: {` |
| 996 | fn | isSameCodexWorkspacePath | (private) | `function isSameCodexWorkspacePath(left: string,...` |
| 1004 | fn | remapCodexContextFilePath | (private) | `function remapCodexContextFilePath(params: {` |
| 1032 | fn | compareCodexContextFiles | (private) | `function compareCodexContextFiles(left: Embedde...` |
| 1048 | fn | compareCodexBootstrapFiles | (private) | `function compareCodexBootstrapFiles(left: Codex...` |
| 1055 | fn | normalizeCodexContextFilePath | (private) | `function normalizeCodexContextFilePath(filePath...` |
| 1059 | fn | getCodexContextFileDisplayBasename | (private) | `function getCodexContextFileDisplayBasename(fil...` |
| 1063 | fn | getCodexContextFileBasename | (private) | `function getCodexContextFileBasename(filePath: ...` |
| 1067 | fn | normalizeCodexDynamicToolName | (private) | `function normalizeCodexDynamicToolName(name: st...` |
| 1071 | fn | isNonEmptyString | (private) | `function isNonEmptyString(value: unknown): valu...` |

## Public API

### `readMirroredSessionHistoryMessages`

```
export async function readMirroredSessionHistoryMessages(params: {
```

**Line:** 84 | **Kind:** fn

### `readContextEngineThreadBootstrapProjection`

```
export function readContextEngineThreadBootstrapProjection(
```

**Line:** 100 | **Kind:** fn

### `resolveContextEngineBootstrapProjectionDecision`

```
export function resolveContextEngineBootstrapProjectionDecision(params: {
```

**Line:** 125 | **Kind:** fn

### `buildCodexWorkspaceBootstrapContext`

```
export async function buildCodexWorkspaceBootstrapContext(params: {
```

**Line:** 169 | **Kind:** fn

### `buildCodexSystemPromptReport`

```
export function buildCodexSystemPromptReport(params: {
```

**Line:** 287 | **Kind:** fn

### `buildCodexOpenClawPromptContext`

```
export function buildCodexOpenClawPromptContext(params: {
```

**Line:** 529 | **Kind:** fn

### `renderCodexSkillsCollaborationInstructions`

```
export function renderCodexSkillsCollaborationInstructions(params: {
```

**Line:** 561 | **Kind:** fn

### `prependCodexOpenClawPromptContext`

```
export function prependCodexOpenClawPromptContext(
```

**Line:** 577 | **Kind:** fn

### `resolveCodexDeliveryHintPreservedInputRange`

```
export function resolveCodexDeliveryHintPreservedInputRange(params: {
```

**Line:** 605 | **Kind:** fn

### `getCodexWorkspaceMemoryToolNames`

```
export function getCodexWorkspaceMemoryToolNames(tools: readonly CodexDynamicToolSpec[]): string[] {
```

**Line:** 927 | **Kind:** fn
