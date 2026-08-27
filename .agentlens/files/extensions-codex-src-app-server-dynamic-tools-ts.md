# extensions/codex/src/app-server/dynamic-tools.ts

[← Back to Module](../modules/extensions-codex-src-app-server/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1522
- **Language:** TypeScript
- **Symbols:** 53
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 72 | type | CodexDynamicToolHookContext | (private) | - |
| 92 | type | CodexToolResultHookContext | (private) | - |
| 94 | type | ProjectedCodexDynamicTool | (private) | - |
| 101 | type | CodexDynamicToolSchemaQuarantine | (private) | - |
| 106 | fn | applyCurrentMessageProvider | (private) | `function applyCurrentMessageProvider(` |
| 122 | fn | normalizeRouteToken | (private) | `function normalizeRouteToken(value: string | nu...` |
| 130 | fn | sourceRouteTokens | (private) | `function sourceRouteTokens(hookContext: CodexDy...` |
| 163 | fn | routeTokenMatchesSource | (private) | `function routeTokenMatchesSource(` |
| 171 | fn | routeProviderMatchesSource | (private) | `function routeProviderMatchesSource(` |
| 184 | fn | routeTokenMatchesCurrentMessage | (private) | `function routeTokenMatchesCurrentMessage(` |
| 194 | fn | readRouteToken | (private) | `function readRouteToken(record: Record<string, ...` |
| 199 | fn | explicitRouteTokensMismatchCurrent | (private) | `function explicitRouteTokensMismatchCurrent(` |
| 214 | fn | explicitThreadRouteTargetsNonSource | (private) | `function explicitThreadRouteTargetsNonSource(` |
| 234 | fn | replyReceiptMatchesCurrentMessage | (private) | `function replyReceiptMatchesCurrentMessage(` |
| 287 | fn | hasExplicitNonSourceMessageRoute | (private) | `function hasExplicitNonSourceMessageRoute(` |
| 342 | type | CodexDynamicToolBridge | pub | - |
| 390 | fn | computerFrameImageIdentity | (private) | `function computerFrameImageIdentity(` |
| 406 | fn | invalidateComputerFrame | (private) | `function invalidateComputerFrame(contextEpoch: {` |
| 420 | fn | createCodexDynamicToolBridge | pub | `export function createCodexDynamicToolBridge(pa...` |
| 485 | type | ExecutionSnapshot | (private) | - |
| 489 | type | ExecutionSnapshotState | (private) | - |
| 559 | fn | captureExecutionBoundary | (private) | `const captureExecutionBoundary = () => {` |
| 868 | fn | notifyAgentToolResult | (private) | `function notifyAgentToolResult(` |
| 887 | fn | failedToolResult | (private) | `function failedToolResult(` |
| 897 | fn | wrapProjectedCodexDynamicTools | (private) | `function wrapProjectedCodexDynamicTools(` |
| 929 | fn | createCodexDynamicToolSpecs | (private) | `function createCodexDynamicToolSpecs(params: {` |
| 974 | fn | createCodexDynamicToolFunctionSpec | (private) | `function createCodexDynamicToolFunctionSpec(par...` |
| 985 | fn | projectCodexDynamicTools | (private) | `function projectCodexDynamicTools(tools: readon...` |
| 1040 | type | CodexDynamicToolDescriptorRead | (private) | - |
| 1052 | fn | readCodexDynamicToolDescriptor | (private) | `function readCodexDynamicToolDescriptor(` |
| 1106 | fn | warnQuarantinedDynamicTools | (private) | `function warnQuarantinedDynamicTools(tools: rea...` |
| 1122 | fn | emitQuarantinedDynamicToolDiagnostics | (private) | `function emitQuarantinedDynamicToolDiagnostics(` |
| 1140 | fn | dedupeQuarantinedDynamicTools | (private) | `function dedupeQuarantinedDynamicTools(` |
| 1155 | fn | toToolResultHookContext | (private) | `function toToolResultHookContext(` |
| 1168 | fn | resolveCodexDynamicToolResultMaxChars | (private) | `function resolveCodexDynamicToolResultMaxChars(` |
| 1178 | fn | composeAbortSignals | (private) | `function composeAbortSignals(...signals: Array<...` |
| 1188 | fn | collectToolTelemetry | (private) | `function collectToolTelemetry(params: {` |
| 1282 | fn | extractInternalSourceReplyPayload | (private) | `function extractInternalSourceReplyPayload(` |
| 1316 | fn | isToolResultYield | (private) | `function isToolResultYield(result: AgentToolRes...` |
| 1323 | fn | isAsyncStartedToolResult | (private) | `function isAsyncStartedToolResult(result: Agent...` |
| 1327 | fn | withDiagnosticTerminalType | (private) | `function withDiagnosticTerminalType<T extends C...` |
| 1338 | fn | withDiagnosticFailureDisposition | (private) | `function withDiagnosticFailureDisposition<T ext...` |
| 1355 | fn | withDynamicToolTermination | (private) | `function withDynamicToolTermination<T extends C...` |
| 1369 | fn | withDynamicToolAsyncStarted | (private) | `function withDynamicToolAsyncStarted<T extends ...` |
| 1383 | fn | normalizeToolResultMaxChars | (private) | `function normalizeToolResultMaxChars(maxChars: ...` |
| 1388 | fn | convertToolContents | (private) | `function convertToolContents(` |
| 1437 | fn | convertToolContent | (private) | `function convertToolContent(` |
| 1454 | fn | jsonObjectToRecord | (private) | `function jsonObjectToRecord(value: JsonValue | ...` |
| 1460 | fn | readFirstString | (private) | `function readFirstString(record: Record<string,...` |
| 1472 | fn | collectMediaUrls | (private) | `function collectMediaUrls(record: Record<string...` |
| 1474 | fn | pushMediaUrl | (private) | `const pushMediaUrl = (value: unknown) => {` |
| 1479 | fn | pushAttachment | (private) | `const pushAttachment = (value: unknown) => {` |
| 1518 | fn | isCronAddAction | (private) | `function isCronAddAction(args: Record<string, u...` |

## Public API

### `createCodexDynamicToolBridge`

```
export function createCodexDynamicToolBridge(params: {
```

**Line:** 420 | **Kind:** fn
