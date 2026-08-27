# src/agents/sessions/extensions/types.ts

[← Back to Module](../modules/src-agents-sessions-extensions/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1699
- **Language:** TypeScript
- **Symbols:** 140
- **Public symbols:** 86

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 77 | type | OAuthCredentials | pub | - |
| 84 | type | OAuthPrompt | pub | - |
| 90 | type | OAuthAuthInfo | pub | - |
| 95 | type | OAuthSelectOption | pub | - |
| 100 | type | OAuthSelectPrompt | pub | - |
| 105 | interface | OAuthLoginCallbacks | pub | - |
| 120 | interface | ExtensionUIDialogOptions | (private) | - |
| 128 | type | WidgetPlacement | (private) | - |
| 131 | interface | ExtensionWidgetOptions | (private) | - |
| 137 | type | TerminalInputHandler | (private) | - |
| 140 | interface | WorkingIndicatorOptions | (private) | - |
| 148 | type | AutocompleteProviderFactory | (private) | - |
| 149 | type | EditorFactory | (private) | - |
| 159 | interface | ExtensionUIContext | pub | - |
| 330 | interface | ContextUsage | pub | - |
| 338 | interface | CompactOptions | pub | - |
| 347 | interface | ExtensionContext | pub | - |
| 382 | interface | ExtensionCommandContext | pub | - |
| 428 | interface | ReplacedSessionContext | pub | - |
| 445 | interface | ToolRenderResultOptions | pub | - |
| 453 | interface | ToolRenderContext | pub | - |
| 487 | interface | ToolDefinition | pub | - |
| 550 | type | AnyToolDefinition | (private) | - |
| 559 | fn | defineTool | pub | `export function defineTool<TParams extends TSch...` |
| 570 | interface | ResourcesDiscoverEvent | pub | - |
| 577 | interface | ResourcesDiscoverResult | pub | - |
| 588 | interface | SessionStartEvent | pub | - |
| 597 | interface | SessionBeforeSwitchEvent | (private) | - |
| 604 | interface | SessionBeforeForkEvent | (private) | - |
| 611 | interface | SessionBeforeCompactEvent | (private) | - |
| 620 | interface | SessionCompactEvent | (private) | - |
| 627 | interface | SessionShutdownEvent | pub | - |
| 635 | interface | TreePreparation | pub | - |
| 650 | interface | SessionBeforeTreeEvent | (private) | - |
| 657 | interface | SessionTreeEvent | (private) | - |
| 665 | type | SessionEvent | (private) | - |
| 680 | interface | ContextEvent | pub | - |
| 686 | interface | BeforeProviderRequestEvent | pub | - |
| 692 | interface | AfterProviderResponseEvent | (private) | - |
| 699 | interface | BeforeAgentStartEvent | pub | - |
| 712 | interface | AgentStartEvent | (private) | - |
| 717 | interface | AgentEndEvent | (private) | - |
| 723 | interface | AgentSettledEvent | (private) | - |
| 728 | interface | TurnStartEvent | pub | - |
| 735 | interface | TurnEndEvent | pub | - |
| 743 | interface | MessageStartEvent | pub | - |
| 749 | interface | MessageUpdateEvent | pub | - |
| 756 | interface | MessageEndEvent | pub | - |
| 762 | interface | ToolExecutionStartEvent | pub | - |
| 770 | interface | ToolExecutionUpdateEvent | pub | - |
| 779 | interface | ToolExecutionEndEvent | pub | - |
| 791 | type | ModelSelectSource | (private) | - |
| 794 | interface | ModelSelectEvent | (private) | - |
| 802 | interface | ThinkingLevelSelectEvent | pub | - |
| 813 | interface | UserBashEvent | pub | - |
| 828 | type | InputSource | pub | - |
| 831 | interface | InputEvent | pub | - |
| 842 | type | InputEventResult | pub | - |
| 851 | interface | ToolCallEventBase | (private) | - |
| 856 | interface | BashToolCallEvent | (private) | - |
| 861 | interface | ReadToolCallEvent | (private) | - |
| 866 | interface | EditToolCallEvent | (private) | - |
| 871 | interface | WriteToolCallEvent | (private) | - |
| 876 | interface | GrepToolCallEvent | (private) | - |
| 881 | interface | FindToolCallEvent | (private) | - |
| 886 | interface | LsToolCallEvent | (private) | - |
| 891 | interface | CustomToolCallEvent | (private) | - |
| 902 | type | ToolCallEvent | pub | - |
| 912 | interface | ToolResultEventBase | (private) | - |
| 920 | interface | BashToolResultEvent | (private) | - |
| 925 | interface | ReadToolResultEvent | (private) | - |
| 930 | interface | EditToolResultEvent | (private) | - |
| 935 | interface | WriteToolResultEvent | (private) | - |
| 940 | interface | GrepToolResultEvent | (private) | - |
| 945 | interface | FindToolResultEvent | (private) | - |
| 950 | interface | LsToolResultEvent | (private) | - |
| 955 | interface | CustomToolResultEvent | (private) | - |
| 961 | type | ToolResultEvent | pub | - |
| 972 | fn | isBashToolResult | pub | `export function isBashToolResult(e: ToolResultE...` |
| 975 | fn | isReadToolResult | pub | `export function isReadToolResult(e: ToolResultE...` |
| 978 | fn | isEditToolResult | pub | `export function isEditToolResult(e: ToolResultE...` |
| 981 | fn | isWriteToolResult | pub | `export function isWriteToolResult(e: ToolResult...` |
| 984 | fn | isGrepToolResult | pub | `export function isGrepToolResult(e: ToolResultE...` |
| 987 | fn | isFindToolResult | pub | `export function isFindToolResult(e: ToolResultE...` |
| 990 | fn | isLsToolResult | pub | `export function isLsToolResult(e: ToolResultEve...` |
| 1014 | fn | isToolCallEventType | pub | `export function isToolCallEventType(` |
| 1018 | fn | isToolCallEventType | pub | `export function isToolCallEventType(` |
| 1022 | fn | isToolCallEventType | pub | `export function isToolCallEventType(` |
| 1026 | fn | isToolCallEventType | pub | `export function isToolCallEventType(` |
| 1030 | fn | isToolCallEventType | pub | `export function isToolCallEventType(` |
| 1034 | fn | isToolCallEventType | pub | `export function isToolCallEventType(` |
| 1038 | fn | isToolCallEventType | pub | `export function isToolCallEventType(toolName: "...` |
| 1039 | fn | isToolCallEventType | pub | `export function isToolCallEventType<TName exten...` |
| 1043 | fn | isToolCallEventType | pub | `export function isToolCallEventType(toolName: s...` |
| 1048 | type | ExtensionEvent | pub | - |
| 1077 | interface | ContextEventResult | pub | - |
| 1081 | type | BeforeProviderRequestEventResult | (private) | - |
| 1083 | interface | ToolCallEventResult | pub | - |
| 1090 | interface | UserBashEventResult | pub | - |
| 1097 | interface | ToolResultEventResult | pub | - |
| 1103 | interface | MessageEndEventResult | pub | - |
| 1108 | interface | BeforeAgentStartEventResult | pub | - |
| 1114 | interface | SessionBeforeSwitchResult | pub | - |
| 1118 | interface | SessionBeforeForkResult | pub | - |
| 1123 | interface | SessionBeforeCompactResult | pub | - |
| 1128 | interface | SessionBeforeTreeResult | pub | - |
| 1146 | interface | MessageRenderOptions | (private) | - |
| 1160 | interface | RegisteredCommand | pub | - |
| 1170 | interface | ResolvedCommand | pub | - |
| 1188 | interface | ExtensionAPI | pub | - |
| 1433 | interface | ProviderConfig | pub | - |
| 1470 | interface | ProviderModelConfig | (private) | - |
| 1498 | type | ExtensionFactory | pub | - |
| 1504 | interface | RegisteredTool | pub | - |
| 1509 | interface | ExtensionFlag | pub | - |
| 1517 | interface | ExtensionShortcut | pub | - |
| 1524 | type | HandlerFn | (private) | - |
| 1526 | type | SendMessageHandler | (private) | - |
| 1531 | type | SendUserMessageHandler | (private) | - |
| 1536 | type | AppendEntryHandler | (private) | - |
| 1538 | type | SetSessionNameHandler | pub | - |
| 1540 | type | GetSessionNameHandler | pub | - |
| 1542 | type | GetActiveToolsHandler | (private) | - |
| 1545 | type | ToolInfo | pub | - |
| 1549 | type | GetAllToolsHandler | (private) | - |
| 1551 | type | GetCommandsHandler | (private) | - |
| 1553 | type | SetActiveToolsHandler | (private) | - |
| 1555 | type | RefreshToolsHandler | pub | - |
| 1557 | type | SetModelHandler | (private) | - |
| 1559 | type | GetThinkingLevelHandler | (private) | - |
| 1561 | type | SetThinkingLevelHandler | (private) | - |
| 1563 | type | SetLabelHandler | (private) | - |
| 1569 | interface | ExtensionRuntimeState | pub | - |
| 1595 | interface | ExtensionActions | pub | - |
| 1616 | interface | ExtensionContextActions | pub | - |
| 1632 | interface | ExtensionCommandContextActions | pub | - |
| 1666 | interface | ExtensionRuntime | pub | - |
| 1669 | interface | Extension | pub | - |
| 1682 | interface | LoadExtensionsResult | pub | - |
| 1693 | interface | ExtensionError | pub | - |

## Public API

### `defineTool`

```
export function defineTool<TParams extends TSchema, TDetails = unknown, TState = unknown>(
```

**Line:** 559 | **Kind:** fn

### `isBashToolResult`

```
export function isBashToolResult(e: ToolResultEvent): e is BashToolResultEvent {
```

**Line:** 972 | **Kind:** fn

### `isReadToolResult`

```
export function isReadToolResult(e: ToolResultEvent): e is ReadToolResultEvent {
```

**Line:** 975 | **Kind:** fn

### `isEditToolResult`

```
export function isEditToolResult(e: ToolResultEvent): e is EditToolResultEvent {
```

**Line:** 978 | **Kind:** fn

### `isWriteToolResult`

```
export function isWriteToolResult(e: ToolResultEvent): e is WriteToolResultEvent {
```

**Line:** 981 | **Kind:** fn

### `isGrepToolResult`

```
export function isGrepToolResult(e: ToolResultEvent): e is GrepToolResultEvent {
```

**Line:** 984 | **Kind:** fn

### `isFindToolResult`

```
export function isFindToolResult(e: ToolResultEvent): e is FindToolResultEvent {
```

**Line:** 987 | **Kind:** fn

### `isLsToolResult`

```
export function isLsToolResult(e: ToolResultEvent): e is LsToolResultEvent {
```

**Line:** 990 | **Kind:** fn

### `isToolCallEventType`

```
export function isToolCallEventType(
```

**Line:** 1014 | **Kind:** fn

### `isToolCallEventType`

```
export function isToolCallEventType(
```

**Line:** 1018 | **Kind:** fn

### `isToolCallEventType`

```
export function isToolCallEventType(
```

**Line:** 1022 | **Kind:** fn

### `isToolCallEventType`

```
export function isToolCallEventType(
```

**Line:** 1026 | **Kind:** fn

### `isToolCallEventType`

```
export function isToolCallEventType(
```

**Line:** 1030 | **Kind:** fn

### `isToolCallEventType`

```
export function isToolCallEventType(
```

**Line:** 1034 | **Kind:** fn

### `isToolCallEventType`

```
export function isToolCallEventType(toolName: "ls", event: ToolCallEvent): event is LsToolCallEvent;
```

**Line:** 1038 | **Kind:** fn

### `isToolCallEventType`

```
export function isToolCallEventType<TName extends string, TInput extends Record<string, unknown>>(
```

**Line:** 1039 | **Kind:** fn

### `isToolCallEventType`

```
export function isToolCallEventType(toolName: string, event: ToolCallEvent): boolean {
```

**Line:** 1043 | **Kind:** fn

## Memory Markers

### 🟢 `NOTE` (line 1011)

> Direct narrowing via `event.toolName === "bash"` doesn't work because
