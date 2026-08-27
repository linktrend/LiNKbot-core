# extensions/codex/src/app-server/protocol.ts

[← Back to Module](../modules/extensions-codex-src-app-server/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 803
- **Language:** TypeScript
- **Symbols:** 123
- **Public symbols:** 77

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 2 | type | JsonValue | pub | - |
| 3 | type | JsonObject | pub | - |
| 4 | type | CodexServiceTier | pub | - |
| 5 | type | CodexApprovalPolicy | pub | - |
| 18 | type | CodexApprovalsReviewer | (private) | - |
| 19 | type | CodexSandboxMode | (private) | - |
| 20 | type | CodexPersonality | (private) | - |
| 22 | type | CodexAppServerRequestMethod | pub | - |
| 33 | type | RpcRequest | pub | - |
| 39 | type | RpcResponse | pub | - |
| 49 | type | RpcMessage | pub | - |
| 51 | type | CodexInitializeParams | pub | - |
| 60 | type | CodexInitializeResponse | pub | - |
| 72 | type | CodexUserInput | pub | - |
| 90 | type | CodexDynamicToolFunctionSpec | pub | - |
| 98 | type | CodexDynamicToolNamespaceTool | (private) | - |
| 103 | type | CodexDynamicToolNamespaceSpec | (private) | - |
| 110 | type | CodexDynamicToolSpec | pub | - |
| 112 | fn | flattenCodexDynamicToolFunctions | pub | `export function flattenCodexDynamicToolFunctions(` |
| 118 | type | CodexTurnEnvironmentParams | pub | - |
| 123 | type | CodexThreadStartParams | pub | - |
| 140 | type | CodexThreadResumeParams | pub | - |
| 159 | type | CodexThreadStartResponse | pub | - |
| 165 | type | CodexThreadForkParams | pub | - |
| 187 | type | CodexThreadForkResponse | pub | - |
| 192 | type | CodexThreadSourceKind | (private) | - |
| 203 | type | CodexThreadListParams | pub | - |
| 218 | type | CodexThreadListResponse | pub | - |
| 224 | type | CodexThreadReadParams | (private) | - |
| 229 | type | CodexThreadReadResponse | (private) | - |
| 233 | type | CodexThreadTurnsListParams | pub | - |
| 241 | type | CodexThreadTurnsListResponse | pub | - |
| 247 | type | CodexInitialTurnsPage | (private) | - |
| 251 | type | CodexThreadSetNameParams | (private) | - |
| 256 | type | CodexThreadArchiveParams | (private) | - |
| 260 | type | CodexThreadUnarchiveResponse | (private) | - |
| 264 | type | CodexThreadResumeResponse | pub | - |
| 271 | type | CodexThreadGoalStatus | (private) | - |
| 279 | type | CodexThreadGoal | (private) | - |
| 290 | type | CodexThreadGoalSetParams | (private) | - |
| 297 | type | CodexThreadGoalGetParams | (private) | - |
| 298 | type | CodexThreadGoalClearParams | (private) | - |
| 299 | type | CodexThreadGoalSetResponse | (private) | - |
| 300 | type | CodexThreadGoalGetResponse | (private) | - |
| 301 | type | CodexThreadGoalClearResponse | (private) | - |
| 303 | type | CodexThreadInjectItemsParams | (private) | - |
| 308 | type | CodexThreadUnsubscribeParams | (private) | - |
| 312 | type | CodexTurnInterruptParams | (private) | - |
| 317 | type | CodexTurnStartParams | pub | - |
| 339 | type | CodexSandboxPolicy | pub | - |
| 351 | type | CodexTurnStartResponse | pub | - |
| 355 | type | CodexTurn | pub | - |
| 366 | type | CodexThread | pub | - |
| 385 | type | CodexThreadStatus | pub | - |
| 391 | type | CodexSubAgentThreadSpawnSource | pub | - |
| 399 | type | CodexSubAgentSource | (private) | - |
| 406 | type | CodexSessionSource | pub | - |
| 415 | type | CodexThreadStartedNotification | pub | - |
| 419 | type | CodexThreadStatusChangedNotification | pub | - |
| 424 | type | CodexThreadItem | pub | - |
| 447 | type | CodexServerNotification | pub | - |
| 452 | type | CodexDynamicToolCallParams | pub | - |
| 461 | type | CodexDynamicToolCallResponse | pub | - |
| 471 | type | CodexDynamicToolDiagnosticTerminalType | pub | - |
| 472 | type | CodexDynamicToolDiagnosticTerminalReason | pub | - |
| 474 | type | CodexDynamicToolCallOutputContentItem | pub | - |
| 488 | type | CodexErrorNotification | pub | - |
| 500 | type | CodexTurnCompletedNotification | pub | - |
| 504 | type | CodexModel | pub | - |
| 516 | type | CodexReasoningEffortOption | pub | - |
| 520 | type | CodexModelListResponse | pub | - |
| 525 | type | CodexGetAccountResponse | pub | - |
| 530 | type | CodexModelProviderCapabilitiesReadResponse | (private) | - |
| 536 | type | CodexChatgptAuthTokensRefreshResponse | pub | - |
| 542 | type | CodexLoginAccountParams | pub | - |
| 554 | type | CodexPluginSummary | (private) | - |
| 567 | type | CodexAppSummary | (private) | - |
| 575 | type | CodexPluginDetail | pub | - |
| 585 | type | CodexPluginMarketplaceEntry | (private) | - |
| 592 | type | CodexPluginListResponse | pub | - |
| 598 | type | CodexPluginReadResponse | pub | - |
| 602 | type | CodexPluginListMarketplaceKind | (private) | - |
| 609 | type | CodexPluginListParams | (private) | - |
| 614 | type | CodexPluginReadParams | (private) | - |
| 620 | type | CodexPluginInstallParams | (private) | - |
| 622 | type | CodexPluginInstallResponse | (private) | - |
| 627 | type | CodexAppInfo | (private) | - |
| 643 | type | CodexAppsListParams | (private) | - |
| 649 | type | CodexAppsListResponse | (private) | - |
| 654 | type | CodexSkillsListParams | (private) | - |
| 659 | type | CodexSkillScope | (private) | - |
| 661 | type | CodexSkillMetadata | (private) | - |
| 672 | type | CodexSkillErrorInfo | (private) | - |
| 677 | type | CodexSkillsListEntry | (private) | - |
| 683 | type | CodexSkillsListResponse | (private) | - |
| 687 | type | CodexHooksListParams | (private) | - |
| 691 | type | CodexHooksListResponse | (private) | - |
| 696 | type | CodexMcpServerStatus | pub | - |
| 701 | type | CodexListMcpServerStatusResponse | pub | - |
| 706 | type | CodexConfigReadResponse | pub | - |
| 711 | type | CodexConfigRequirementsReadResponse | pub | - |
| 715 | type | CodexRequestObject | pub | - |
| 718 | type | AppInfo | pub | - |
| 719 | type | AppSummary | pub | - |
| 720 | type | AppsListParams | pub | - |
| 721 | type | AppsListResponse | pub | - |
| 722 | type | HooksListParams | pub | - |
| 723 | type | HooksListResponse | pub | - |
| 724 | type | PluginDetail | pub | - |
| 725 | type | PluginInstallParams | pub | - |
| 726 | type | PluginInstallResponse | pub | - |
| 727 | type | PluginListParams | pub | - |
| 728 | type | PluginListResponse | pub | - |
| 729 | type | PluginMarketplaceEntry | pub | - |
| 730 | type | PluginReadParams | pub | - |
| 731 | type | PluginReadResponse | pub | - |
| 732 | type | PluginSummary | pub | - |
| 733 | type | SkillsListParams | pub | - |
| 734 | type | SkillsListResponse | pub | - |
| 737 | type | CodexAppServerRequestParamsOverride | (private) | - |
| 755 | type | CodexAppServerRequestResultMap | (private) | - |
| 797 | fn | isJsonObject | pub | `export function isJsonObject(value: unknown): v...` |
| 801 | fn | isRpcResponse | pub | `export function isRpcResponse(message: RpcMessa...` |

## Public API

### `flattenCodexDynamicToolFunctions`

```
export function flattenCodexDynamicToolFunctions(
```

**Line:** 112 | **Kind:** fn

### `isJsonObject`

```
export function isJsonObject(value: unknown): value is JsonObject {
```

**Line:** 797 | **Kind:** fn

### `isRpcResponse`

```
export function isRpcResponse(message: RpcMessage): message is RpcResponse {
```

**Line:** 801 | **Kind:** fn
