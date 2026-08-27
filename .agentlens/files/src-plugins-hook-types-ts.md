# src/plugins/hook-types.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1346
- **Language:** TypeScript
- **Symbols:** 91
- **Public symbols:** 71

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 72 | type | PluginHookName | pub | - |
| 165 | type | MissingPluginHookNames | (private) | - |
| 166 | type | AssertAllPluginHookNamesListed | (private) | - |
| 170 | type | DeprecatedPluginHookName | (private) | - |
| 172 | type | PluginHookDeprecation | (private) | - |
| 178 | type | PluginHookChannelPairingRequestedEvent | (private) | - |
| 191 | type | PluginHookChannelPairingContext | (private) | - |
| 252 | type | PluginHookAgentContext | pub | - |
| 286 | type | PluginHookContextWindowSource | pub | - |
| 292 | type | PluginHookBeforeAgentReplyEvent | pub | - |
| 296 | type | PluginHookBeforeAgentReplyResult | pub | - |
| 302 | type | PluginHookLlmInputEvent | pub | - |
| 314 | type | PluginHookModelCallBaseEvent | (private) | - |
| 331 | type | PluginHookModelCallStartedEvent | pub | - |
| 333 | type | PluginHookModelCallEndedEvent | pub | - |
| 344 | type | PluginHookLlmOutputEvent | pub | - |
| 389 | type | PluginHookAgentEndEvent | pub | - |
| 397 | type | PluginHookBeforeAgentFinalizeEvent | pub | - |
| 411 | type | PluginHookBeforeAgentFinalizeResult | pub | - |
| 426 | type | PluginHookBeforeCompactionEvent | pub | - |
| 434 | type | PluginHookBeforeResetEvent | pub | - |
| 440 | type | PluginHookAfterCompactionEvent | pub | - |
| 449 | type | PluginHookInboundClaimResult | pub | - |
| 454 | type | PluginHookBeforeDispatchEvent | pub | - |
| 469 | type | PluginHookBeforeDispatchContext | pub | - |
| 482 | type | PluginHookBeforeDispatchResult | pub | - |
| 487 | type | PluginHookReplyDispatchEvent | pub | - |
| 510 | type | PluginHookReplyDispatchContext | pub | - |
| 525 | type | PluginHookReplyDispatchResult | pub | - |
| 537 | type | PluginHookReplyUsageState | pub | - |
| 598 | type | PluginHookReplyPayloadSendingEvent | pub | - |
| 611 | type | PluginHookReplyPayload | pub | - |
| 612 | type | PluginHookReplyPayloadSendingContext | pub | - |
| 614 | type | PluginHookReplyPayloadSendingResult | pub | - |
| 620 | type | PluginHookToolKind | pub | - |
| 621 | type | PluginHookToolInputKind | pub | - |
| 624 | type | PluginHookToolRequesterContext | pub | - |
| 637 | type | PluginHookToolContext | pub | - |
| 659 | type | PluginHookBeforeToolCallEvent | pub | - |
| 682 | type | PluginHookAfterToolCallEvent | pub | - |
| 692 | type | PluginHookToolResultPersistContext | pub | - |
| 699 | type | PluginHookToolResultPersistEvent | pub | - |
| 706 | type | PluginHookToolResultPersistResult | pub | - |
| 710 | type | PluginHookBeforeMessageWriteEvent | pub | - |
| 716 | type | PluginHookBeforeMessageWriteResult | pub | - |
| 721 | type | PluginHookSessionContext | pub | - |
| 727 | type | PluginHookSessionStartEvent | pub | - |
| 733 | type | PluginHookSessionEndReason | pub | - |
| 744 | type | PluginHookSessionEndEvent | pub | - |
| 756 | type | PluginHookSubagentContext | pub | - |
| 762 | type | PluginHookSubagentTargetKind | (private) | - |
| 764 | type | PluginHookSubagentRequester | (private) | - |
| 775 | type | PluginHookSubagentSpawnBase | (private) | - |
| 789 | type | PluginHookSubagentSpawningEvent | pub | - |
| 796 | type | PluginHookSubagentSpawningResult | pub | - |
| 822 | type | PluginHookSubagentDeliveryTargetEvent | pub | - |
| 841 | type | PluginHookSubagentDeliveryTargetResult | pub | - |
| 850 | type | PluginHookSubagentSpawnedEvent | pub | - |
| 859 | type | PluginHookSubagentProgressEvent | pub | - |
| 874 | type | PluginHookSubagentEndedEvent | pub | - |
| 886 | type | PluginHookGatewayContext | pub | - |
| 893 | type | PluginHookCronReconciledContext | pub | - |
| 898 | type | PluginHookGatewayStartEvent | pub | - |
| 902 | type | PluginHookGatewayStopEvent | pub | - |
| 906 | type | PluginHookCronReconciledEvent | pub | - |
| 911 | type | PluginHookGatewayCronRunStatus | (private) | - |
| 913 | type | PluginHookGatewayCronDeliveryStatus | (private) | - |
| 919 | type | PluginHookGatewayCronJobState | (private) | - |
| 934 | type | PluginHookGatewayCronJob | pub | - |
| 973 | type | PluginHookCronChangedEvent | pub | - |
| 997 | type | PluginHookGatewayCronCreateInput | (private) | - |
| 1014 | type | PluginHookGatewayCronUpdateInput | (private) | - |
| 1016 | type | PluginHookGatewayCronRemoveResult | (private) | - |
| 1020 | type | PluginHookGatewayCronService | pub | - |
| 1027 | type | PluginInstallTargetType | pub | - |
| 1028 | type | PluginInstallRequestKind | (private) | - |
| 1035 | type | PluginInstallSourcePathKind | pub | - |
| 1037 | type | PluginInstallFinding | (private) | - |
| 1045 | type | PluginHookBeforeInstallRequest | pub | - |
| 1051 | type | PluginHookBeforeInstallBuiltinScan | pub | - |
| 1061 | type | PluginHookBeforeInstallSkillInstallSpec | (private) | - |
| 1077 | type | PluginHookBeforeInstallSkill | pub | - |
| 1082 | type | PluginHookBeforeInstallPlugin | pub | - |
| 1091 | type | PluginHookBeforeInstallContext | pub | - |
| 1097 | type | PluginHookBeforeInstallEvent | pub | - |
| 1109 | type | PluginHookBeforeInstallResult | pub | - |
| 1120 | type | PluginHookBeforeAgentRunEvent | pub | - |
| 1138 | type | PluginHookBeforeAgentRunResult | (private) | - |
| 1140 | type | PluginHookResolveExecEnvEvent | pub | - |
| 1146 | type | PluginHookResolveExecEnvContext | pub | - |
| 1148 | type | PluginHookHandlerMap | pub | - |

## Public API

## Memory Markers

### 🔴 `DEPRECATED` (line 1289)

> compatibility alias for gateway_stop.
