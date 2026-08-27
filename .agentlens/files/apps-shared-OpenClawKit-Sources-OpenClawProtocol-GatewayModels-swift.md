# apps/shared/OpenClawKit/Sources/OpenClawProtocol/GatewayModels.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 16292
- **Language:** Swift
- **Symbols:** 1115
- **Public symbols:** 1112

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 9 | struct | GatewayAnyCodingKey | (private) | `struct GatewayAnyCodingKey` |
| 12 | method | init | (internal) | `init?(stringValue: String)` |
| 17 | method | init | (internal) | `init?(intValue: Int)` |
| 24 | enum | ErrorCode | pub | `enum ErrorCode` |
| 34 | enum | AuthProbeStatus | pub | `enum AuthProbeStatus` |
| 45 | enum | EnvironmentStatus | pub | `enum EnvironmentStatus` |
| 53 | enum | WorkerEnvironmentState | pub | `enum WorkerEnvironmentState` |
| 67 | enum | WorkerTunnelStatus | pub | `enum WorkerTunnelStatus` |
| 74 | enum | NodePresenceAliveReason | pub | `enum NodePresenceAliveReason` |
| 83 | enum | SessionPlacementState | pub | `enum SessionPlacementState` |
| 96 | enum | SessionDiscussionState | pub | `enum SessionDiscussionState` |
| 102 | enum | SessionFileKind | pub | `enum SessionFileKind` |
| 107 | enum | SessionFileRelevance | pub | `enum SessionFileRelevance` |
| 113 | enum | SessionDiffFileStatus | pub | `enum SessionDiffFileStatus` |
| 120 | enum | TaskSuggestionResolution | pub | `enum TaskSuggestionResolution` |
| 126 | enum | SystemChangeKind | pub | `enum SystemChangeKind` |
| 132 | enum | SystemChangeSource | pub | `enum SystemChangeSource` |
| 142 | enum | MemoryMigrationItemStatus | pub | `enum MemoryMigrationItemStatus` |
| 151 | enum | ApprovalKind | pub | `enum ApprovalKind` |
| 157 | enum | ApprovalDecision | pub | `enum ApprovalDecision` |
| 163 | enum | ApprovalAllowDecision | pub | `enum ApprovalAllowDecision` |
| 168 | enum | ApprovalAllowedReason | pub | `enum ApprovalAllowedReason` |
| 172 | enum | ApprovalDeniedReason | pub | `enum ApprovalDeniedReason` |
| 179 | enum | ApprovalExpiredReason | pub | `enum ApprovalExpiredReason` |
| 183 | enum | ApprovalCancelledReason | pub | `enum ApprovalCancelledReason` |
| 188 | enum | PluginApprovalSeverity | pub | `enum PluginApprovalSeverity` |
| 194 | enum | ApprovalTerminalReason | pub | `enum ApprovalTerminalReason` |
| 204 | enum | QuestionStatus | pub | `enum QuestionStatus` |
| 211 | struct | BoardTab | pub | `struct BoardTab` |
| 216 | method | init | pub | `public init(     tabid: String,     title: Stri...` |
| 237 | struct | BoardWidget | pub | `struct BoardWidget` |
| 250 | method | init | pub | `public init(     name: String,     tabid: Strin...` |
| 295 | struct | BoardSnapshot | pub | `struct BoardSnapshot` |
| 300 | method | init | pub | `public init(     sessionkey: String,     revisi...` |
| 321 | struct | BoardTabCreateOp | pub | `struct BoardTabCreateOp` |
| 326 | method | init | pub | `public init(     kind: String,     tabid: Strin...` |
| 347 | struct | BoardTabUpdateOp | pub | `struct BoardTabUpdateOp` |
| 353 | method | init | pub | `public init(     kind: String,     tabid: Strin...` |
| 377 | struct | BoardTabDeleteOp | pub | `struct BoardTabDeleteOp` |
| 380 | method | init | pub | `public init(     kind: String,     tabid: String)` |
| 395 | struct | BoardTabsReorderOp | pub | `struct BoardTabsReorderOp` |
| 398 | method | init | pub | `public init(     kind: String,     tabids: [Str...` |
| 413 | struct | BoardWidgetMoveOp | pub | `struct BoardWidgetMoveOp` |
| 419 | method | init | pub | `public init(     kind: String,     name: String...` |
| 443 | struct | BoardWidgetResizeOp | pub | `struct BoardWidgetResizeOp` |
| 448 | method | init | pub | `public init(     kind: String,     name: String...` |
| 469 | struct | BoardWidgetRemoveOp | pub | `struct BoardWidgetRemoveOp` |
| 472 | method | init | pub | `public init(     kind: String,     name: String)` |
| 487 | struct | BoardMcpAppDescriptor | pub | `struct BoardMcpAppDescriptor` |
| 493 | method | init | pub | `public init(     servername: String,     toolna...` |
| 517 | struct | BoardMcpAppPinDescriptor | pub | `struct BoardMcpAppPinDescriptor` |
| 524 | method | init | pub | `public init(     viewid: String,     servername...` |
| 551 | struct | BoardWidgetHtmlContent | pub | `struct BoardWidgetHtmlContent` |
| 554 | method | init | pub | `public init(     kind: String,     html: String)` |
| 569 | struct | BoardWidgetMcpAppContent | pub | `struct BoardWidgetMcpAppContent` |
| 572 | method | init | pub | `public init(     kind: String,     descriptor: ...` |
| 587 | struct | BoardWidgetMcpAppPutContent | pub | `struct BoardWidgetMcpAppPutContent` |
| 590 | method | init | pub | `public init(     kind: String,     descriptor: ...` |
| 605 | struct | BoardCanvasDocumentSource | pub | `struct BoardCanvasDocumentSource` |
| 608 | method | init | pub | `public init(     kind: String,     docid: String)` |
| 623 | struct | BoardGetParams | pub | `struct BoardGetParams` |
| 625 | method | init | pub | `public init(     sessionkey: String)` |
| 637 | struct | BoardUpdateParams | pub | `struct BoardUpdateParams` |
| 640 | method | init | pub | `public init(     sessionkey: String,     ops: [...` |
| 655 | struct | BoardWidgetPutParams | pub | `struct BoardWidgetPutParams` |
| 662 | method | init | pub | `public init(     sessionkey: String,     name: ...` |
| 689 | struct | BoardWidgetGrantParams | pub | `struct BoardWidgetGrantParams` |
| 695 | method | init | pub | `public init(     sessionkey: String,     name: ...` |
| 719 | struct | BoardWidgetAppViewParams | pub | `struct BoardWidgetAppViewParams` |
| 724 | method | init | pub | `public init(     sessionkey: String,     name: ...` |
| 745 | struct | BoardWidgetAppViewResult | pub | `struct BoardWidgetAppViewResult` |
| 748 | method | init | pub | `public init(     viewid: String,     expiresatm...` |
| 763 | struct | BoardEventParams | pub | `struct BoardEventParams` |
| 767 | method | init | pub | `public init(     sessionkey: String,     widget...` |
| 785 | struct | BoardChangedEvent | pub | `struct BoardChangedEvent` |
| 789 | method | init | pub | `public init(     sessionkey: String,     revisi...` |
| 807 | struct | BoardFocusTabCommand | pub | `struct BoardFocusTabCommand` |
| 810 | method | init | pub | `public init(     kind: String,     tabid: String)` |
| 825 | struct | BoardSetChatDockCommand | pub | `struct BoardSetChatDockCommand` |
| 828 | method | init | pub | `public init(     kind: String,     dock: AnyCod...` |
| 843 | struct | BoardCommandEvent | pub | `struct BoardCommandEvent` |
| 846 | method | init | pub | `public init(     sessionkey: String,     comman...` |
| 861 | struct | ConnectParams | pub | `struct ConnectParams` |
| 875 | method | init | pub | `public init(     minprotocol: Int,     maxproto...` |
| 923 | struct | WorkerAdmissionHandshake | pub | `struct WorkerAdmissionHandshake` |
| 927 | method | init | pub | `public init(     bundlehash: String,     opencl...` |
| 945 | struct | HelloOk | pub | `struct HelloOk` |
| 955 | method | init | pub | `public init(     type: String,     _protocol: I...` |
| 991 | struct | RequestFrame | pub | `struct RequestFrame` |
| 996 | method | init | pub | `public init(     type: String,     id: String, ...` |
| 1017 | struct | ResponseFrame | pub | `struct ResponseFrame` |
| 1023 | method | init | pub | `public init(     type: String,     id: String, ...` |
| 1047 | struct | EventFrame | pub | `struct EventFrame` |
| 1053 | method | init | pub | `public init(     type: String,     event: Strin...` |
| 1077 | struct | PresenceEntry | pub | `struct PresenceEntry` |
| 1096 | method | init | pub | `public init(     host: String? = nil,     ip: S...` |
| 1159 | struct | StateVersion | pub | `struct StateVersion` |
| 1162 | method | init | pub | `public init(     presence: Int,     health: Int)` |
| 1177 | struct | Snapshot | pub | `struct Snapshot` |
| 1188 | method | init | pub | `public init(     presence: [PresenceEntry],    ...` |
| 1227 | struct | ErrorShape | pub | `struct ErrorShape` |
| 1233 | method | init | pub | `public init(     code: String,     message: Str...` |
| 1257 | struct | MissingScopeErrorDetails | pub | `struct MissingScopeErrorDetails` |
| 1261 | method | init | pub | `public init(     code: String,     missingscope...` |
| 1279 | struct | McpAppViewExpiredErrorDetails | pub | `struct McpAppViewExpiredErrorDetails` |
| 1281 | method | init | pub | `public init(     code: String)` |
| 1293 | struct | GatewaySuspendTaskBlocker | pub | `struct GatewaySuspendTaskBlocker` |
| 1300 | method | init | pub | `public init(     taskid: String,     status: St...` |
| 1327 | struct | GatewaySuspendBlocker | pub | `struct GatewaySuspendBlocker` |
| 1332 | method | init | pub | `public init(     kind: AnyCodable,     count: I...` |
| 1353 | struct | GatewaySuspendPrepareParams | pub | `struct GatewaySuspendPrepareParams` |
| 1355 | method | init | pub | `public init(     requestid: String)` |
| 1367 | struct | GatewaySuspendPrepareBusyResult | pub | `struct GatewaySuspendPrepareBusyResult` |
| 1373 | method | init | pub | `public init(     status: String,     reason: An...` |
| 1397 | struct | GatewaySuspendPrepareReadyResult | pub | `struct GatewaySuspendPrepareReadyResult` |
| 1403 | method | init | pub | `public init(     status: String,     suspension...` |
| 1427 | struct | GatewaySuspendStatusParams | pub | `struct GatewaySuspendStatusParams` |
| 1429 | method | init | pub | `public init(     suspensionid: String)` |
| 1441 | struct | GatewaySuspendStatusRunningResult | pub | `struct GatewaySuspendStatusRunningResult` |
| 1443 | method | init | pub | `public init(     status: String)` |
| 1455 | struct | GatewaySuspendStatusReadyResult | pub | `struct GatewaySuspendStatusReadyResult` |
| 1458 | method | init | pub | `public init(     status: String,     expiresatm...` |
| 1473 | struct | GatewaySuspendResumeParams | pub | `struct GatewaySuspendResumeParams` |
| 1475 | method | init | pub | `public init(     suspensionid: String)` |
| 1487 | struct | GatewaySuspendResumeResult | pub | `struct GatewaySuspendResumeResult` |
| 1491 | method | init | pub | `public init(     ok: Bool,     status: String, ...` |
| 1509 | struct | WorkerEnvironmentMetadata | pub | `struct WorkerEnvironmentMetadata` |
| 1517 | method | init | pub | `public init(     providerid: String,     leasei...` |
| 1547 | struct | EnvironmentSummary | pub | `struct EnvironmentSummary` |
| 1554 | method | init | pub | `public init(     id: String,     type: String, ...` |
| 1581 | struct | EnvironmentsCreateParams | pub | `struct EnvironmentsCreateParams` |
| 1584 | method | init | pub | `public init(     profileid: String,     idempot...` |
| 1599 | struct | EnvironmentsCreateResult | pub | `struct EnvironmentsCreateResult` |
| 1606 | method | init | pub | `public init(     id: String,     type: String, ...` |
| 1633 | struct | EnvironmentsDestroyParams | pub | `struct EnvironmentsDestroyParams` |
| 1636 | method | init | pub | `public init(     environmentid: String,     for...` |
| 1651 | struct | EnvironmentsDestroyResult | pub | `struct EnvironmentsDestroyResult` |
| 1658 | method | init | pub | `public init(     id: String,     type: String, ...` |
| 1685 | struct | EnvironmentsListParams | pub | `struct EnvironmentsListParams` |
| 1687 | struct | EnvironmentsListResult | pub | `struct EnvironmentsListResult` |
| 1690 | method | init | pub | `public init(     environments: [EnvironmentSumm...` |
| 1705 | struct | EnvironmentsStatusParams | pub | `struct EnvironmentsStatusParams` |
| 1707 | method | init | pub | `public init(     environmentid: String)` |
| 1719 | struct | EnvironmentsStatusResult | pub | `struct EnvironmentsStatusResult` |
| 1726 | method | init | pub | `public init(     id: String,     type: String, ...` |
| 1753 | struct | SystemInfoParams | pub | `struct SystemInfoParams` |
| 1755 | struct | SystemInfoResult | pub | `struct SystemInfoResult` |
| 1776 | method | init | pub | `public init(     machinename: String,     hostn...` |
| 1845 | struct | AgentEvent | pub | `struct AgentEvent` |
| 1853 | method | init | pub | `public init(     runid: String,     seq: Int,  ...` |
| 1883 | struct | ConversationSendParams | pub | `struct ConversationSendParams` |
| 1889 | method | init | pub | `public init(     agentid: String,     sourceses...` |
| 1913 | struct | ConversationSendResult | pub | `struct ConversationSendResult` |
| 1919 | method | init | pub | `public init(     status: AnyCodable,     conver...` |
| 1943 | struct | ConversationListItem | pub | `struct ConversationListItem` |
| 1953 | method | init | pub | `public init(     conversationref: String,     c...` |
| 1989 | struct | ConversationListParams | pub | `struct ConversationListParams` |
| 1994 | method | init | pub | `public init(     agentid: String,     channel: ...` |
| 2015 | struct | ConversationListResult | pub | `struct ConversationListResult` |
| 2017 | method | init | pub | `public init(     conversations: [ConversationLi...` |
| 2029 | struct | ConversationTurnCancelParams | pub | `struct ConversationTurnCancelParams` |
| 2032 | method | init | pub | `public init(     agentid: String,     turnid: S...` |
| 2047 | struct | ConversationTurnCancelResult | pub | `struct ConversationTurnCancelResult` |
| 2049 | method | init | pub | `public init(     cancelled: Bool)` |
| 2061 | struct | ConversationTurnParams | pub | `struct ConversationTurnParams` |
| 2068 | method | init | pub | `public init(     agentid: String,     sourceses...` |
| 2095 | struct | ConversationTurnReply | pub | `struct ConversationTurnReply` |
| 2104 | method | init | pub | `public init(     conversationref: String,     m...` |
| 2137 | struct | MessageActionParams | pub | `struct MessageActionParams` |
| 2152 | method | init | pub | `public init(     channel: String,     action: S...` |
| 2203 | struct | SendParams | pub | `struct SendParams` |
| 2223 | method | init | pub | `public init(     to: String,     message: Strin...` |
| 2289 | struct | PollParams | pub | `struct PollParams` |
| 2302 | method | init | pub | `public init(     to: String,     question: Stri...` |
| 2347 | struct | AgentParams | pub | `struct AgentParams` |
| 2393 | method | init | pub | `public init(     message: String,     agentid: ...` |
| 2537 | struct | AgentIdentityParams | pub | `struct AgentIdentityParams` |
| 2540 | method | init | pub | `public init(     agentid: String? = nil,     se...` |
| 2555 | struct | AgentIdentityResult | pub | `struct AgentIdentityResult` |
| 2563 | method | init | pub | `public init(     agentid: String,     name: Str...` |
| 2593 | struct | AgentWaitParams | pub | `struct AgentWaitParams` |
| 2596 | method | init | pub | `public init(     runid: String,     timeoutms: ...` |
| 2611 | struct | WakeParams | pub | `struct WakeParams` |
| 2616 | method | init | pub | `public init(     mode: AnyCodable,     text: St...` |
| 2637 | struct | WorktreeRecord | pub | `struct WorktreeRecord` |
| 2651 | method | init | pub | `public init(     id: String,     name: String, ...` |
| 2699 | struct | WorktreesListParams | pub | `struct WorktreesListParams` |
| 2701 | struct | WorktreesListResult | pub | `struct WorktreesListResult` |
| 2703 | method | init | pub | `public init(     worktrees: [WorktreeRecord])` |
| 2715 | struct | WorktreesCreateParams | pub | `struct WorktreesCreateParams` |
| 2719 | method | init | pub | `public init(     reporoot: String,     name: St...` |
| 2737 | struct | WorktreesRemoveParams | pub | `struct WorktreesRemoveParams` |
| 2740 | method | init | pub | `public init(     id: String,     force: Bool? =...` |
| 2755 | struct | WorktreesRemoveResult | pub | `struct WorktreesRemoveResult` |
| 2759 | method | init | pub | `public init(     removed: Bool,     snapshotref...` |
| 2777 | struct | WorktreesRestoreParams | pub | `struct WorktreesRestoreParams` |
| 2779 | method | init | pub | `public init(     id: String)` |
| 2791 | struct | WorktreesGcParams | pub | `struct WorktreesGcParams` |
| 2793 | struct | WorktreesGcResult | pub | `struct WorktreesGcResult` |
| 2797 | method | init | pub | `public init(     removed: [String],     orphans...` |
| 2815 | struct | WorktreeBranch | pub | `struct WorktreeBranch` |
| 2818 | method | init | pub | `public init(     name: String,     kind: AnyCod...` |
| 2833 | struct | WorktreesBranchesParams | pub | `struct WorktreesBranchesParams` |
| 2835 | method | init | pub | `public init(     reporoot: String)` |
| 2847 | struct | WorktreesBranchesResult | pub | `struct WorktreesBranchesResult` |
| 2851 | method | init | pub | `public init(     branches: [WorktreeBranch],   ...` |
| 2869 | struct | FsDirEntry | pub | `struct FsDirEntry` |
| 2873 | method | init | pub | `public init(     name: String,     path: String...` |
| 2891 | struct | FsListDirParams | pub | `struct FsListDirParams` |
| 2894 | method | init | pub | `public init(     path: String? = nil,     nodei...` |
| 2909 | struct | FsListDirResult | pub | `struct FsListDirResult` |
| 2914 | method | init | pub | `public init(     path: String,     parent: Stri...` |
| 2935 | struct | NodePairListParams | pub | `struct NodePairListParams` |
| 2937 | struct | NodePairApproveParams | pub | `struct NodePairApproveParams` |
| 2939 | method | init | pub | `public init(     requestid: String)` |
| 2951 | struct | NodePairRejectParams | pub | `struct NodePairRejectParams` |
| 2953 | method | init | pub | `public init(     requestid: String)` |
| 2965 | struct | NodePairRemoveParams | pub | `struct NodePairRemoveParams` |
| 2967 | method | init | pub | `public init(     nodeid: String)` |
| 2979 | struct | NodeRenameParams | pub | `struct NodeRenameParams` |
| 2982 | method | init | pub | `public init(     nodeid: String,     displaynam...` |
| 2997 | struct | NodeListParams | pub | `struct NodeListParams` |
| 2999 | struct | NodePluginToolDescriptor | pub | `struct NodePluginToolDescriptor` |
| 3006 | method | init | pub | `public init(     pluginid: String,     name: St...` |
| 3033 | struct | NodePluginToolsUpdateParams | pub | `struct NodePluginToolsUpdateParams` |
| 3035 | method | init | pub | `public init(     tools: [NodePluginToolDescript...` |
| 3047 | struct | NodeSkillDescriptor | pub | `struct NodeSkillDescriptor` |
| 3051 | method | init | pub | `public init(     name: String,     description:...` |
| 3069 | struct | NodeSkillsUpdateParams | pub | `struct NodeSkillsUpdateParams` |
| 3071 | method | init | pub | `public init(     skills: [NodeSkillDescriptor])` |
| 3083 | struct | NodePendingAckParams | pub | `struct NodePendingAckParams` |
| 3085 | method | init | pub | `public init(     ids: [String])` |
| 3097 | struct | NodeDescribeParams | pub | `struct NodeDescribeParams` |
| 3099 | method | init | pub | `public init(     nodeid: String)` |
| 3111 | struct | NodeInvokeParams | pub | `struct NodeInvokeParams` |
| 3122 | method | init | pub | `public init(     nodeid: String,     command: S...` |
| 3161 | struct | NodeInvokeInputEvent | pub | `struct NodeInvokeInputEvent` |
| 3166 | method | init | pub | `public init(     id: String,     nodeid: String...` |
| 3187 | struct | NodeInvokeProgressParams | pub | `struct NodeInvokeProgressParams` |
| 3192 | method | init | pub | `public init(     invokeid: String,     nodeid: ...` |
| 3213 | struct | NodeInvokeResultParams | pub | `struct NodeInvokeResultParams` |
| 3220 | method | init | pub | `public init(     id: String,     nodeid: String...` |
| 3247 | struct | NodeInvokeRequestEvent | pub | `struct NodeInvokeRequestEvent` |
| 3254 | method | init | pub | `public init(     id: String,     nodeid: String...` |
| 3281 | struct | NodeEventParams | pub | `struct NodeEventParams` |
| 3285 | method | init | pub | `public init(     event: String,     payload: An...` |
| 3303 | struct | NodeEventResult | pub | `struct NodeEventResult` |
| 3308 | method | init | pub | `public init(     ok: Bool,     event: String,  ...` |
| 3329 | struct | NodePresenceAlivePayload | pub | `struct NodePresenceAlivePayload` |
| 3338 | method | init | pub | `public init(     trigger: NodePresenceAliveReas...` |
| 3371 | struct | NodePresenceActivityPayload | pub | `struct NodePresenceActivityPayload` |
| 3374 | method | init | pub | `public init(     idleseconds: Int,     saturate...` |
| 3389 | struct | NodePendingDrainParams | pub | `struct NodePendingDrainParams` |
| 3391 | method | init | pub | `public init(     maxitems: Int? = nil)` |
| 3403 | struct | NodePendingDrainResult | pub | `struct NodePendingDrainResult` |
| 3408 | method | init | pub | `public init(     nodeid: String,     revision: ...` |
| 3429 | struct | NodePendingEnqueueParams | pub | `struct NodePendingEnqueueParams` |
| 3435 | method | init | pub | `public init(     nodeid: String,     type: Stri...` |
| 3459 | struct | NodePendingEnqueueResult | pub | `struct NodePendingEnqueueResult` |
| 3464 | method | init | pub | `public init(     nodeid: String,     revision: ...` |
| 3485 | struct | PushTestParams | pub | `struct PushTestParams` |
| 3490 | method | init | pub | `public init(     nodeid: String,     title: Str...` |
| 3511 | struct | PushTestResult | pub | `struct PushTestResult` |
| 3520 | method | init | pub | `public init(     ok: Bool,     status: Int,    ...` |
| 3553 | struct | UiSplitCommand | pub | `struct UiSplitCommand` |
| 3557 | method | init | pub | `public init(     kind: String,     direction: A...` |
| 3575 | struct | UiClosePaneCommand | pub | `struct UiClosePaneCommand` |
| 3578 | method | init | pub | `public init(     kind: String,     sessionkey: ...` |
| 3593 | struct | UiFocusCommand | pub | `struct UiFocusCommand` |
| 3596 | method | init | pub | `public init(     kind: String,     sessionkey: ...` |
| 3611 | struct | UiSidebarCommand | pub | `struct UiSidebarCommand` |
| 3614 | method | init | pub | `public init(     kind: String,     visible: Bool)` |
| 3629 | struct | UiPanelCommand | pub | `struct UiPanelCommand` |
| 3635 | method | init | pub | `public init(     kind: String,     panel: AnyCo...` |
| 3659 | struct | UiNavigateCommand | pub | `struct UiNavigateCommand` |
| 3662 | method | init | pub | `public init(     kind: String,     sessionkey: ...` |
| 3677 | struct | UiCommandParams | pub | `struct UiCommandParams` |
| 3680 | method | init | pub | `public init(     command: UiCommand,     sessio...` |
| 3695 | struct | UiCommandResult | pub | `struct UiCommandResult` |
| 3697 | method | init | pub | `public init(     ok: Bool)` |
| 3709 | struct | SecretsReloadParams | pub | `struct SecretsReloadParams` |
| 3711 | struct | SecretsResolveParams | pub | `struct SecretsResolveParams` |
| 3718 | method | init | pub | `public init(     commandname: String,     targe...` |
| 3745 | struct | SecretsResolveAssignment | pub | `struct SecretsResolveAssignment` |
| 3749 | method | init | pub | `public init(     path: String? = nil,     paths...` |
| 3767 | struct | SecretsResolveResult | pub | `struct SecretsResolveResult` |
| 3772 | method | init | pub | `public init(     ok: Bool? = nil,     assignmen...` |
| 3793 | struct | SessionsListParams | pub | `struct SessionsListParams` |
| 3809 | method | init | pub | `public init(     limit: Int? = nil,     offset:...` |
| 3863 | struct | SessionCatalogCapabilities | pub | `struct SessionCatalogCapabilities` |
| 3868 | method | init | pub | `public init(     continuesession: Bool,     arc...` |
| 3889 | struct | SessionCatalogDescriptor | pub | `struct SessionCatalogDescriptor` |
| 3893 | method | init | pub | `public init(     id: String,     label: String,...` |
| 3911 | struct | SessionCatalogSession | pub | `struct SessionCatalogSession` |
| 3928 | method | init | pub | `public init(     threadid: String,     name: St...` |
| 3985 | struct | SessionCatalogHost | pub | `struct SessionCatalogHost` |
| 3994 | method | init | pub | `public init(     hostid: String,     label: Str...` |
| 4027 | struct | SessionCatalog | pub | `struct SessionCatalog` |
| 4033 | method | init | pub | `public init(     id: String,     label: String,...` |
| 4057 | struct | SessionCatalogTranscriptItem | pub | `struct SessionCatalogTranscriptItem` |
| 4065 | method | init | pub | `public init(     id: String? = nil,     type: A...` |
| 4095 | struct | SessionsCatalogListParams | pub | `struct SessionsCatalogListParams` |
| 4103 | method | init | pub | `public init(     catalogid: String? = nil,     ...` |
| 4133 | struct | SessionsCatalogListResult | pub | `struct SessionsCatalogListResult` |
| 4135 | method | init | pub | `public init(     catalogs: [SessionCatalog])` |
| 4147 | struct | SessionsCatalogReadParams | pub | `struct SessionsCatalogReadParams` |
| 4153 | method | init | pub | `public init(     catalogid: String,     hostid:...` |
| 4177 | struct | SessionsCatalogReadResult | pub | `struct SessionsCatalogReadResult` |
| 4183 | method | init | pub | `public init(     hostid: String,     label: Str...` |
| 4207 | struct | SessionsCatalogContinueParams | pub | `struct SessionsCatalogContinueParams` |
| 4211 | method | init | pub | `public init(     catalogid: String,     hostid:...` |
| 4229 | struct | SessionsCatalogContinueResult | pub | `struct SessionsCatalogContinueResult` |
| 4231 | method | init | pub | `public init(     sessionkey: String)` |
| 4243 | struct | SessionsCatalogArchiveParams | pub | `struct SessionsCatalogArchiveParams` |
| 4248 | method | init | pub | `public init(     catalogid: String,     hostid:...` |
| 4269 | struct | SessionsCatalogArchiveResult | pub | `struct SessionsCatalogArchiveResult` |
| 4271 | method | init | pub | `public init(     ok: Bool)` |
| 4283 | struct | SessionsCleanupParams | pub | `struct SessionsCleanupParams` |
| 4290 | method | init | pub | `public init(     agent: String? = nil,     alla...` |
| 4317 | struct | SessionsPreviewParams | pub | `struct SessionsPreviewParams` |
| 4321 | method | init | pub | `public init(     keys: [String],     limit: Int...` |
| 4339 | struct | SessionsDescribeParams | pub | `struct SessionsDescribeParams` |
| 4343 | method | init | pub | `public init(     key: String,     includederive...` |
| 4361 | struct | SessionsResolveParams | pub | `struct SessionsResolveParams` |
| 4370 | method | init | pub | `public init(     key: String? = nil,     sessio...` |
| 4403 | struct | SessionsSearchHit | pub | `struct SessionsSearchHit` |
| 4411 | method | init | pub | `public init(     sessionkey: String,     sessio...` |
| 4441 | struct | SessionsSearchParams | pub | `struct SessionsSearchParams` |
| 4446 | method | init | pub | `public init(     agentid: String? = nil,     se...` |
| 4467 | struct | SessionsSearchResult | pub | `struct SessionsSearchResult` |
| 4471 | method | init | pub | `public init(     results: [SessionsSearchHit], ...` |
| 4489 | struct | SessionCompactionCheckpoint | pub | `struct SessionCompactionCheckpoint` |
| 4501 | method | init | pub | `public init(     checkpointid: String,     sess...` |
| 4543 | struct | SessionOperationEvent | pub | `struct SessionOperationEvent` |
| 4552 | method | init | pub | `public init(     operationid: String,     opera...` |
| 4585 | struct | LocalSessionPlacement | pub | `struct LocalSessionPlacement` |
| 4591 | method | init | pub | `public init(     state: String,     generation:...` |
| 4615 | struct | RequestedSessionPlacement | pub | `struct RequestedSessionPlacement` |
| 4621 | method | init | pub | `public init(     state: String,     generation:...` |
| 4645 | struct | ProvisioningSessionPlacement | pub | `struct ProvisioningSessionPlacement` |
| 4652 | method | init | pub | `public init(     state: String,     generation:...` |
| 4679 | struct | SyncingSessionPlacement | pub | `struct SyncingSessionPlacement` |
| 4687 | method | init | pub | `public init(     state: String,     generation:...` |
| 4717 | struct | StartingSessionPlacement | pub | `struct StartingSessionPlacement` |
| 4727 | method | init | pub | `public init(     state: String,     generation:...` |
| 4763 | struct | ActiveWorkerSessionPlacement | pub | `struct ActiveWorkerSessionPlacement` |
| 4777 | method | init | pub | `public init(     state: String,     generation:...` |
| 4825 | struct | DrainingSessionPlacement | pub | `struct DrainingSessionPlacement` |
| 4839 | method | init | pub | `public init(     state: String,     generation:...` |
| 4887 | struct | ReconcilingSessionPlacement | pub | `struct ReconcilingSessionPlacement` |
| 4901 | method | init | pub | `public init(     state: String,     generation:...` |
| 4949 | struct | ReclaimedSessionPlacement | pub | `struct ReclaimedSessionPlacement` |
| 4963 | method | init | pub | `public init(     state: String,     generation:...` |
| 5011 | struct | FailedSessionPlacement | pub | `struct FailedSessionPlacement` |
| 5026 | method | init | pub | `public init(     state: String,     generation:...` |
| 5077 | struct | SessionsDispatchParams | pub | `struct SessionsDispatchParams` |
| 5081 | method | init | pub | `public init(     key: String,     agentid: Stri...` |
| 5099 | struct | SessionsDispatchResult | pub | `struct SessionsDispatchResult` |
| 5104 | method | init | pub | `public init(     ok: Bool,     key: String,    ...` |
| 5125 | struct | SessionsReclaimParams | pub | `struct SessionsReclaimParams` |
| 5128 | method | init | pub | `public init(     key: String,     agentid: Stri...` |
| 5143 | struct | SessionsReclaimResult | pub | `struct SessionsReclaimResult` |
| 5148 | method | init | pub | `public init(     ok: Bool,     key: String,    ...` |
| 5169 | struct | SessionDiscussionInfo | pub | `struct SessionDiscussionInfo` |
| 5173 | method | init | pub | `public init(     state: SessionDiscussionState,...` |
| 5191 | struct | SessionDiscussionInfoParams | pub | `struct SessionDiscussionInfoParams` |
| 5193 | method | init | pub | `public init(     sessionkey: String)` |
| 5205 | struct | SessionDiscussionInfoResult | pub | `struct SessionDiscussionInfoResult` |
| 5209 | method | init | pub | `public init(     state: SessionDiscussionState,...` |
| 5227 | struct | SessionDiscussionOpenParams | pub | `struct SessionDiscussionOpenParams` |
| 5229 | method | init | pub | `public init(     sessionkey: String)` |
| 5241 | struct | SessionDiscussionOpenResult | pub | `struct SessionDiscussionOpenResult` |
| 5245 | method | init | pub | `public init(     state: SessionDiscussionState,...` |
| 5263 | struct | SessionsCompactionListParams | pub | `struct SessionsCompactionListParams` |
| 5266 | method | init | pub | `public init(     key: String,     agentid: Stri...` |
| 5281 | struct | SessionsCompactionGetParams | pub | `struct SessionsCompactionGetParams` |
| 5285 | method | init | pub | `public init(     key: String,     agentid: Stri...` |
| 5303 | struct | SessionsCompactionBranchParams | pub | `struct SessionsCompactionBranchParams` |
| 5307 | method | init | pub | `public init(     key: String,     agentid: Stri...` |
| 5325 | struct | SessionsCompactionRestoreParams | pub | `struct SessionsCompactionRestoreParams` |
| 5329 | method | init | pub | `public init(     key: String,     agentid: Stri...` |
| 5347 | struct | SessionsCompactionListResult | pub | `struct SessionsCompactionListResult` |
| 5351 | method | init | pub | `public init(     ok: Bool,     key: String,    ...` |
| 5369 | struct | SessionsCompactionGetResult | pub | `struct SessionsCompactionGetResult` |
| 5373 | method | init | pub | `public init(     ok: Bool,     key: String,    ...` |
| 5391 | struct | SessionsCompactionBranchResult | pub | `struct SessionsCompactionBranchResult` |
| 5398 | method | init | pub | `public init(     ok: Bool,     sourcekey: Strin...` |
| 5425 | struct | SessionsCompactionRestoreResult | pub | `struct SessionsCompactionRestoreResult` |
| 5431 | method | init | pub | `public init(     ok: Bool,     key: String,    ...` |
| 5455 | struct | SessionsRewindParams | pub | `struct SessionsRewindParams` |
| 5459 | method | init | pub | `public init(     sessionkey: String,     agenti...` |
| 5477 | struct | SessionsRewindResult | pub | `struct SessionsRewindResult` |
| 5479 | method | init | pub | `public init(     editortext: String? = nil)` |
| 5491 | struct | SessionsForkParams | pub | `struct SessionsForkParams` |
| 5495 | method | init | pub | `public init(     sessionkey: String,     agenti...` |
| 5513 | struct | SessionsForkResult | pub | `struct SessionsForkResult` |
| 5516 | method | init | pub | `public init(     sessionkey: String,     editor...` |
| 5531 | struct | SessionFileBrowserEntry | pub | `struct SessionFileBrowserEntry` |
| 5538 | method | init | pub | `public init(     path: String,     name: String...` |
| 5565 | struct | SessionFileBrowserResult | pub | `struct SessionFileBrowserResult` |
| 5571 | method | init | pub | `public init(     path: String,     parentpath: ...` |
| 5595 | struct | SessionFileEntry | pub | `struct SessionFileEntry` |
| 5605 | method | init | pub | `public init(     path: String,     workspacepat...` |
| 5641 | struct | SessionsFilesListParams | pub | `struct SessionsFilesListParams` |
| 5646 | method | init | pub | `public init(     sessionkey: String,     agenti...` |
| 5667 | struct | SessionsFilesListResult | pub | `struct SessionsFilesListResult` |
| 5672 | method | init | pub | `public init(     sessionkey: String,     root: ...` |
| 5693 | struct | SessionsFilesGetParams | pub | `struct SessionsFilesGetParams` |
| 5697 | method | init | pub | `public init(     sessionkey: String,     path: ...` |
| 5715 | struct | SessionsFilesGetResult | pub | `struct SessionsFilesGetResult` |
| 5719 | method | init | pub | `public init(     sessionkey: String,     root: ...` |
| 5737 | struct | SessionsFilesRevealParams | pub | `struct SessionsFilesRevealParams` |
| 5740 | method | init | pub | `public init(     key: String,     agentid: Stri...` |
| 5755 | struct | SessionsFilesRevealResult | pub | `struct SessionsFilesRevealResult` |
| 5759 | method | init | pub | `public init(     ok: Bool,     path: String? = ...` |
| 5777 | struct | SessionsFilesSetParams | pub | `struct SessionsFilesSetParams` |
| 5783 | method | init | pub | `public init(     sessionkey: String,     path: ...` |
| 5807 | struct | SessionsFilesSetResult | pub | `struct SessionsFilesSetResult` |
| 5811 | method | init | pub | `public init(     sessionkey: String,     root: ...` |
| 5829 | struct | SessionDiffFile | pub | `struct SessionDiffFile` |
| 5839 | method | init | pub | `public init(     path: String,     oldpath: Str...` |
| 5875 | struct | SessionsDiffParams | pub | `struct SessionsDiffParams` |
| 5878 | method | init | pub | `public init(     sessionkey: String,     agenti...` |
| 5893 | struct | SessionsDiffResult | pub | `struct SessionsDiffResult` |
| 5903 | method | init | pub | `public init(     sessionkey: String,     root: ...` |
| 5939 | struct | SessionWorktreeInfo | pub | `struct SessionWorktreeInfo` |
| 5943 | method | init | pub | `public init(     id: String,     path: String, ...` |
| 5961 | struct | SessionsCreateParams | pub | `struct SessionsCreateParams` |
| 5980 | method | init | pub | `public init(     key: String? = nil,     agenti...` |
| 6043 | struct | SessionsCreateResult | pub | `struct SessionsCreateResult` |
| 6051 | method | init | pub | `public init(     ok: Bool,     key: String,    ...` |
| 6081 | struct | SessionsSendParams | pub | `struct SessionsSendParams` |
| 6089 | method | init | pub | `public init(     key: String,     agentid: Stri...` |
| 6119 | struct | SessionsMessagesSubscribeParams | pub | `struct SessionsMessagesSubscribeParams` |
| 6123 | method | init | pub | `public init(     key: String,     agentid: Stri...` |
| 6141 | struct | SessionsMessagesUnsubscribeParams | pub | `struct SessionsMessagesUnsubscribeParams` |
| 6144 | method | init | pub | `public init(     key: String,     agentid: Stri...` |
| 6159 | struct | SessionsAbortParams | pub | `struct SessionsAbortParams` |
| 6163 | method | init | pub | `public init(     key: String? = nil,     runid:...` |
| 6181 | struct | SessionsPatchParams | pub | `struct SessionsPatchParams` |
| 6212 | method | init | pub | `public init(     key: String,     agentid: Stri...` |
| 6311 | struct | SessionsPluginPatchParams | pub | `struct SessionsPluginPatchParams` |
| 6317 | method | init | pub | `public init(     key: String,     pluginid: Str...` |
| 6341 | struct | SessionsPluginPatchResult | pub | `struct SessionsPluginPatchResult` |
| 6345 | method | init | pub | `public init(     ok: Bool,     key: String,    ...` |
| 6363 | struct | SessionsResetParams | pub | `struct SessionsResetParams` |
| 6367 | method | init | pub | `public init(     key: String,     agentid: Stri...` |
| 6385 | struct | SessionsDeleteParams | pub | `struct SessionsDeleteParams` |
| 6394 | method | init | pub | `public init(     key: String,     agentid: Stri...` |
| 6427 | struct | SessionGroup | pub | `struct SessionGroup` |
| 6430 | method | init | pub | `public init(     name: String,     position: Int)` |
| 6445 | struct | SessionsGroupsListParams | pub | `struct SessionsGroupsListParams` |
| 6447 | struct | SessionsGroupsListResult | pub | `struct SessionsGroupsListResult` |
| 6449 | method | init | pub | `public init(     groups: [SessionGroup])` |
| 6461 | struct | SessionsGroupsPutParams | pub | `struct SessionsGroupsPutParams` |
| 6463 | method | init | pub | `public init(     names: [String])` |
| 6475 | struct | SessionsGroupsRenameParams | pub | `struct SessionsGroupsRenameParams` |
| 6478 | method | init | pub | `public init(     name: String,     to: String)` |
| 6493 | struct | SessionsGroupsDeleteParams | pub | `struct SessionsGroupsDeleteParams` |
| 6495 | method | init | pub | `public init(     name: String)` |
| 6507 | struct | SessionsGroupsMutationResult | pub | `struct SessionsGroupsMutationResult` |
| 6511 | method | init | pub | `public init(     ok: Bool,     groups: [Session...` |
| 6529 | struct | SessionsCompactParams | pub | `struct SessionsCompactParams` |
| 6533 | method | init | pub | `public init(     key: String,     agentid: Stri...` |
| 6551 | struct | SessionsUsageParams | pub | `struct SessionsUsageParams` |
| 6565 | method | init | pub | `public init(     key: String? = nil,     agenti...` |
| 6613 | struct | AuditActivityAgentRunV1 | pub | `struct AuditActivityAgentRunV1` |
| 6630 | method | init | pub | `public init(     eventtype: String,     schemav...` |
| 6687 | struct | AuditActivityToolActionV1 | pub | `struct AuditActivityToolActionV1` |
| 6706 | method | init | pub | `public init(     eventtype: String,     schemav...` |
| 6769 | struct | AuditActivityInboundMessageV1 | pub | `struct AuditActivityInboundMessageV1` |
| 6795 | method | init | pub | `public init(     eventtype: String,     schemav...` |
| 6879 | struct | AuditActivityOutboundMessageV1 | pub | `struct AuditActivityOutboundMessageV1` |
| 6907 | method | init | pub | `public init(     eventtype: String,     schemav...` |
| 6997 | struct | AuditActivityListParams | pub | `struct AuditActivityListParams` |
| 7009 | method | init | pub | `public init(     agentid: String? = nil,     se...` |
| 7051 | struct | AuditActivityListResult | pub | `struct AuditActivityListResult` |
| 7054 | method | init | pub | `public init(     events: [AuditActivityEventV1]...` |
| 7069 | struct | AuditEvent | pub | `struct AuditEvent` |
| 7086 | method | init | pub | `public init(     eventid: String,     sequence:...` |
| 7143 | struct | AuditListParams | pub | `struct AuditListParams` |
| 7153 | method | init | pub | `public init(     agentid: String? = nil,     se...` |
| 7189 | struct | AuditListResult | pub | `struct AuditListResult` |
| 7192 | method | init | pub | `public init(     events: [AuditEvent],     next...` |
| 7207 | struct | TaskSuggestion | pub | `struct TaskSuggestion` |
| 7216 | method | init | pub | `public init(     id: String,     title: String,...` |
| 7249 | struct | TaskSuggestionsAcceptParams | pub | `struct TaskSuggestionsAcceptParams` |
| 7251 | method | init | pub | `public init(     taskid: String)` |
| 7263 | struct | TaskSuggestionsAcceptResult | pub | `struct TaskSuggestionsAcceptResult` |
| 7266 | method | init | pub | `public init(     taskid: String,     key: String)` |
| 7281 | struct | TaskSuggestionsCreateParams | pub | `struct TaskSuggestionsCreateParams` |
| 7288 | method | init | pub | `public init(     title: String,     prompt: Str...` |
| 7315 | struct | TaskSuggestionsCreateResult | pub | `struct TaskSuggestionsCreateResult` |
| 7318 | method | init | pub | `public init(     taskid: String,     suggestion...` |
| 7333 | struct | TaskSuggestionsDismissParams | pub | `struct TaskSuggestionsDismissParams` |
| 7336 | method | init | pub | `public init(     taskid: String,     reason: St...` |
| 7351 | struct | TaskSuggestionsDismissResult | pub | `struct TaskSuggestionsDismissResult` |
| 7354 | method | init | pub | `public init(     taskid: String,     dismissed:...` |
| 7369 | struct | TaskSuggestionsListParams | pub | `struct TaskSuggestionsListParams` |
| 7372 | method | init | pub | `public init(     sessionkey: String? = nil,    ...` |
| 7387 | struct | TaskSuggestionsListResult | pub | `struct TaskSuggestionsListResult` |
| 7389 | method | init | pub | `public init(     suggestions: [TaskSuggestion])` |
| 7401 | struct | TaskSummary | pub | `struct TaskSummary` |
| 7426 | method | init | pub | `public init(     id: String,     kind: String? ...` |
| 7507 | struct | TasksListParams | pub | `struct TasksListParams` |
| 7513 | method | init | pub | `public init(     status: AnyCodable? = nil,    ...` |
| 7537 | struct | TasksListResult | pub | `struct TasksListResult` |
| 7540 | method | init | pub | `public init(     tasks: [TaskSummary],     next...` |
| 7555 | struct | TasksGetParams | pub | `struct TasksGetParams` |
| 7557 | method | init | pub | `public init(     taskid: String)` |
| 7569 | struct | TasksGetResult | pub | `struct TasksGetResult` |
| 7571 | method | init | pub | `public init(     task: TaskSummary)` |
| 7583 | struct | TasksCancelParams | pub | `struct TasksCancelParams` |
| 7586 | method | init | pub | `public init(     taskid: String,     reason: St...` |
| 7601 | struct | TasksCancelResult | pub | `struct TasksCancelResult` |
| 7606 | method | init | pub | `public init(     found: Bool,     cancelled: Bo...` |
| 7627 | struct | ConfigGetParams | pub | `struct ConfigGetParams` |
| 7629 | struct | ConfigSetParams | pub | `struct ConfigSetParams` |
| 7632 | method | init | pub | `public init(     raw: String,     basehash: Str...` |
| 7647 | struct | ConfigApplyParams | pub | `struct ConfigApplyParams` |
| 7654 | method | init | pub | `public init(     raw: String,     basehash: Str...` |
| 7681 | struct | ConfigPatchParams | pub | `struct ConfigPatchParams` |
| 7689 | method | init | pub | `public init(     raw: String,     basehash: Str...` |
| 7719 | struct | ConfigSchemaParams | pub | `struct ConfigSchemaParams` |
| 7721 | struct | ConfigSchemaLookupParams | pub | `struct ConfigSchemaLookupParams` |
| 7723 | method | init | pub | `public init(     path: String)` |
| 7735 | struct | ConfigSchemaResponse | pub | `struct ConfigSchemaResponse` |
| 7740 | method | init | pub | `public init(     schema: AnyCodable,     uihint...` |
| 7761 | struct | ConfigSchemaLookupResult | pub | `struct ConfigSchemaLookupResult` |
| 7768 | method | init | pub | `public init(     path: String,     schema: AnyC...` |
| 7795 | struct | SystemAgentChatParams | pub | `struct SystemAgentChatParams` |
| 7801 | method | init | pub | `public init(     sessionid: String,     message...` |
| 7825 | struct | SystemAgentChatResult | pub | `struct SystemAgentChatResult` |
| 7836 | method | init | pub | `public init(     sessionid: String,     reply: ...` |
| 7875 | struct | SystemAgentChatHistoryParams | pub | `struct SystemAgentChatHistoryParams` |
| 7877 | method | init | pub | `public init(     limit: Int? = nil)` |
| 7889 | struct | SystemAgentChatHistoryTurn | pub | `struct SystemAgentChatHistoryTurn` |
| 7893 | method | init | pub | `public init(     role: AnyCodable,     text: St...` |
| 7911 | struct | SystemAgentChatHistoryResult | pub | `struct SystemAgentChatHistoryResult` |
| 7913 | method | init | pub | `public init(     turns: [SystemAgentChatHistory...` |
| 7925 | struct | SystemChangeEntry | pub | `struct SystemChangeEntry` |
| 7934 | method | init | pub | `public init(     id: String,     at: Double,   ...` |
| 7967 | struct | SystemChangesListParams | pub | `struct SystemChangesListParams` |
| 7970 | method | init | pub | `public init(     limit: Int? = nil,     beforec...` |
| 7985 | struct | SystemChangesListResult | pub | `struct SystemChangesListResult` |
| 7988 | method | init | pub | `public init(     entries: [SystemChangeEntry], ...` |
| 8003 | struct | SystemAgentSetupDetectParams | pub | `struct SystemAgentSetupDetectParams` |
| 8005 | struct | SystemAgentSetupDetectResult | pub | `struct SystemAgentSetupDetectResult` |
| 8015 | method | init | pub | `public init(     candidates: [[String: AnyCodab...` |
| 8051 | struct | SystemAgentSetupVerifyParams | pub | `struct SystemAgentSetupVerifyParams` |
| 8053 | struct | SystemAgentSetupActivateParams | pub | `struct SystemAgentSetupActivateParams` |
| 8059 | method | init | pub | `public init(     kind: AnyCodable,     modelref...` |
| 8083 | struct | SystemAgentSetupActivateResult | pub | `struct SystemAgentSetupActivateResult` |
| 8090 | method | init | pub | `public init(     ok: Bool,     modelref: String...` |
| 8117 | struct | SystemAgentSetupAuthStartParams | pub | `struct SystemAgentSetupAuthStartParams` |
| 8121 | method | init | pub | `public init(     sessionid: String,     authcho...` |
| 8139 | struct | SystemAgentSetupAuthStartResult | pub | `struct SystemAgentSetupAuthStartResult` |
| 8147 | method | init | pub | `public init(     sessionid: String,     done: B...` |
| 8177 | struct | WizardStartParams | pub | `struct WizardStartParams` |
| 8182 | method | init | pub | `public init(     mode: AnyCodable? = nil,     w...` |
| 8203 | struct | WizardNextParams | pub | `struct WizardNextParams` |
| 8206 | method | init | pub | `public init(     sessionid: String,     answer:...` |
| 8221 | struct | WizardCancelParams | pub | `struct WizardCancelParams` |
| 8223 | method | init | pub | `public init(     sessionid: String)` |
| 8235 | struct | WizardStatusParams | pub | `struct WizardStatusParams` |
| 8237 | method | init | pub | `public init(     sessionid: String)` |
| 8249 | struct | WizardStep | pub | `struct WizardStep` |
| 8262 | method | init | pub | `public init(     id: String,     type: AnyCodab...` |
| 8307 | struct | WizardNextResult | pub | `struct WizardNextResult` |
| 8314 | method | init | pub | `public init(     done: Bool,     step: WizardSt...` |
| 8341 | struct | WizardStartResult | pub | `struct WizardStartResult` |
| 8349 | method | init | pub | `public init(     sessionid: String,     done: B...` |
| 8379 | struct | WizardStatusResult | pub | `struct WizardStatusResult` |
| 8382 | method | init | pub | `public init(     status: AnyCodable,     error:...` |
| 8397 | struct | TalkModeParams | pub | `struct TalkModeParams` |
| 8400 | method | init | pub | `public init(     enabled: Bool,     phase: Stri...` |
| 8415 | struct | TalkEvent | pub | `struct TalkEvent` |
| 8432 | method | init | pub | `public init(     id: String,     type: AnyCodab...` |
| 8489 | struct | TalkCatalogParams | pub | `struct TalkCatalogParams` |
| 8491 | struct | TalkCatalogResult | pub | `struct TalkCatalogResult` |
| 8498 | method | init | pub | `public init(     modes: [AnyCodable],     trans...` |
| 8525 | struct | TalkClientCreateParams | pub | `struct TalkClientCreateParams` |
| 8539 | method | init | pub | `public init(     sessionkey: String? = nil,    ...` |
| 8587 | struct | TalkClientCloseParams | pub | `struct TalkClientCloseParams` |
| 8590 | method | init | pub | `public init(     sessionkey: String,     voices...` |
| 8605 | struct | TalkClientMutationResult | pub | `struct TalkClientMutationResult` |
| 8607 | method | init | pub | `public init(     ok: Bool)` |
| 8619 | struct | TalkClientSteerParams | pub | `struct TalkClientSteerParams` |
| 8623 | method | init | pub | `public init(     sessionkey: String,     text: ...` |
| 8641 | struct | TalkAgentControlResult | pub | `struct TalkAgentControlResult` |
| 8658 | method | init | pub | `public init(     ok: Bool,     mode: AnyCodable...` |
| 8715 | struct | TalkClientToolCallParams | pub | `struct TalkClientToolCallParams` |
| 8722 | method | init | pub | `public init(     sessionkey: String,     voices...` |
| 8749 | struct | TalkClientToolCallResult | pub | `struct TalkClientToolCallResult` |
| 8752 | method | init | pub | `public init(     runid: String,     idempotency...` |
| 8767 | struct | TalkClientTranscriptParams | pub | `struct TalkClientTranscriptParams` |
| 8774 | method | init | pub | `public init(     sessionkey: String,     voices...` |
| 8801 | struct | TalkConfigParams | pub | `struct TalkConfigParams` |
| 8803 | method | init | pub | `public init(     includesecrets: Bool? = nil)` |
| 8815 | struct | TalkConfigResult | pub | `struct TalkConfigResult` |
| 8817 | method | init | pub | `public init(     config: [String: AnyCodable])` |
| 8829 | struct | TalkSessionAppendAudioParams | pub | `struct TalkSessionAppendAudioParams` |
| 8833 | method | init | pub | `public init(     sessionid: String,     audioba...` |
| 8851 | struct | TalkSessionAcknowledgeMarkParams | pub | `struct TalkSessionAcknowledgeMarkParams` |
| 8854 | method | init | pub | `public init(     sessionid: String,     marknam...` |
| 8869 | struct | TalkSessionCancelOutputParams | pub | `struct TalkSessionCancelOutputParams` |
| 8873 | method | init | pub | `public init(     sessionid: String,     turnid:...` |
| 8891 | struct | TalkSessionCancelTurnParams | pub | `struct TalkSessionCancelTurnParams` |
| 8895 | method | init | pub | `public init(     sessionid: String,     turnid:...` |
| 8913 | struct | TalkSessionCreateParams | pub | `struct TalkSessionCreateParams` |
| 8928 | method | init | pub | `public init(     sessionkey: String? = nil,    ...` |
| 8979 | struct | TalkSessionCreateResult | pub | `struct TalkSessionCreateResult` |
| 8995 | method | init | pub | `public init(     sessionid: String,     provide...` |
| 9049 | struct | TalkSessionJoinParams | pub | `struct TalkSessionJoinParams` |
| 9052 | method | init | pub | `public init(     sessionid: String,     token: ...` |
| 9067 | struct | TalkSessionJoinResult | pub | `struct TalkSessionJoinResult` |
| 9084 | method | init | pub | `public init(     id: String,     roomid: String...` |
| 9141 | struct | TalkSessionTurnParams | pub | `struct TalkSessionTurnParams` |
| 9144 | method | init | pub | `public init(     sessionid: String,     turnid:...` |
| 9159 | struct | TalkSessionTurnResult | pub | `struct TalkSessionTurnResult` |
| 9163 | method | init | pub | `public init(     ok: Bool,     turnid: String? ...` |
| 9181 | struct | TalkSessionSteerParams | pub | `struct TalkSessionSteerParams` |
| 9186 | method | init | pub | `public init(     sessionid: String,     session...` |
| 9207 | struct | TalkSessionSubmitToolResultParams | pub | `struct TalkSessionSubmitToolResultParams` |
| 9212 | method | init | pub | `public init(     sessionid: String,     callid:...` |
| 9233 | struct | TalkSessionCloseParams | pub | `struct TalkSessionCloseParams` |
| 9235 | method | init | pub | `public init(     sessionid: String)` |
| 9247 | struct | TalkSessionOkResult | pub | `struct TalkSessionOkResult` |
| 9249 | method | init | pub | `public init(     ok: Bool)` |
| 9261 | struct | TalkSpeakParams | pub | `struct TalkSpeakParams` |
| 9276 | method | init | pub | `public init(     text: String,     voiceid: Str...` |
| 9327 | struct | TalkSpeakResult | pub | `struct TalkSpeakResult` |
| 9334 | method | init | pub | `public init(     audiobase64: String,     provi...` |
| 9361 | struct | TtsSpeakParams | pub | `struct TtsSpeakParams` |
| 9363 | method | init | pub | `public init(     text: String)` |
| 9375 | struct | TtsSpeakResult | pub | `struct TtsSpeakResult` |
| 9381 | method | init | pub | `public init(     audiobase64: String,     provi...` |
| 9405 | struct | ChannelsStatusParams | pub | `struct ChannelsStatusParams` |
| 9409 | method | init | pub | `public init(     probe: Bool? = nil,     timeou...` |
| 9427 | struct | ChannelsStatusResult | pub | `struct ChannelsStatusResult` |
| 9440 | method | init | pub | `public init(     ts: Int,     channelorder: [St...` |
| 9485 | struct | ChannelsStartParams | pub | `struct ChannelsStartParams` |
| 9488 | method | init | pub | `public init(     channel: String,     accountid...` |
| 9503 | struct | ChannelsStopParams | pub | `struct ChannelsStopParams` |
| 9506 | method | init | pub | `public init(     channel: String,     accountid...` |
| 9521 | struct | ChannelsLogoutParams | pub | `struct ChannelsLogoutParams` |
| 9524 | method | init | pub | `public init(     channel: String,     accountid...` |
| 9539 | struct | WebLoginStartParams | pub | `struct WebLoginStartParams` |
| 9544 | method | init | pub | `public init(     force: Bool? = nil,     timeou...` |
| 9565 | struct | WebLoginWaitParams | pub | `struct WebLoginWaitParams` |
| 9569 | method | init | pub | `public init(     timeoutms: Int? = nil,     acc...` |
| 9587 | struct | AgentSummary | pub | `struct AgentSummary` |
| 9598 | method | init | pub | `public init(     id: String,     name: String? ...` |
| 9637 | struct | AgentsCreateParams | pub | `struct AgentsCreateParams` |
| 9643 | method | init | pub | `public init(     name: String,     workspace: S...` |
| 9667 | struct | AgentsCreateResult | pub | `struct AgentsCreateResult` |
| 9673 | method | init | pub | `public init(     ok: Bool,     agentid: String,...` |
| 9697 | struct | AgentsUpdateParams | pub | `struct AgentsUpdateParams` |
| 9705 | method | init | pub | `public init(     agentid: String,     name: Str...` |
| 9721 | method | init | pub | `public init(     agentid: String,     name: Str...` |
| 9747 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 9759 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 9771 | struct | AgentsUpdateResult | pub | `struct AgentsUpdateResult` |
| 9774 | method | init | pub | `public init(     ok: Bool,     agentid: String)` |
| 9789 | struct | AgentsDeleteParams | pub | `struct AgentsDeleteParams` |
| 9792 | method | init | pub | `public init(     agentid: String,     deletefil...` |
| 9807 | struct | AgentsDeleteResult | pub | `struct AgentsDeleteResult` |
| 9813 | method | init | pub | `public init(     ok: Bool,     agentid: String,...` |
| 9837 | struct | AgentsFileEntry | pub | `struct AgentsFileEntry` |
| 9844 | method | init | pub | `public init(     name: String,     path: String...` |
| 9871 | struct | AgentsFilesListParams | pub | `struct AgentsFilesListParams` |
| 9873 | method | init | pub | `public init(     agentid: String)` |
| 9885 | struct | AgentsFilesListResult | pub | `struct AgentsFilesListResult` |
| 9889 | method | init | pub | `public init(     agentid: String,     workspace...` |
| 9907 | struct | AgentsFilesGetParams | pub | `struct AgentsFilesGetParams` |
| 9910 | method | init | pub | `public init(     agentid: String,     name: Str...` |
| 9925 | struct | AgentsFilesGetResult | pub | `struct AgentsFilesGetResult` |
| 9929 | method | init | pub | `public init(     agentid: String,     workspace...` |
| 9947 | struct | AgentsFilesSetParams | pub | `struct AgentsFilesSetParams` |
| 9951 | method | init | pub | `public init(     agentid: String,     name: Str...` |
| 9969 | struct | AgentsFilesSetResult | pub | `struct AgentsFilesSetResult` |
| 9974 | method | init | pub | `public init(     ok: Bool,     agentid: String,...` |
| 9995 | struct | AgentsWorkspaceEntry | pub | `struct AgentsWorkspaceEntry` |
| 10001 | method | init | pub | `public init(     path: String,     name: String...` |
| 10025 | struct | AgentsWorkspaceFile | pub | `struct AgentsWorkspaceFile` |
| 10033 | method | init | pub | `public init(     path: String,     name: String...` |
| 10063 | struct | AgentsWorkspaceListParams | pub | `struct AgentsWorkspaceListParams` |
| 10068 | method | init | pub | `public init(     agentid: String,     path: Str...` |
| 10089 | struct | AgentsWorkspaceListResult | pub | `struct AgentsWorkspaceListResult` |
| 10096 | method | init | pub | `public init(     agentid: String,     path: Str...` |
| 10123 | struct | AgentsWorkspaceGetParams | pub | `struct AgentsWorkspaceGetParams` |
| 10126 | method | init | pub | `public init(     agentid: String,     path: Str...` |
| 10141 | struct | AgentsWorkspaceGetResult | pub | `struct AgentsWorkspaceGetResult` |
| 10144 | method | init | pub | `public init(     agentid: String,     file: Age...` |
| 10159 | struct | ArtifactSummary | pub | `struct ArtifactSummary` |
| 10171 | method | init | pub | `public init(     id: String,     type: String, ...` |
| 10213 | struct | ArtifactsListParams | pub | `struct ArtifactsListParams` |
| 10218 | method | init | pub | `public init(     sessionkey: String? = nil,    ...` |
| 10239 | struct | ArtifactsListResult | pub | `struct ArtifactsListResult` |
| 10241 | method | init | pub | `public init(     artifacts: [ArtifactSummary])` |
| 10253 | struct | ArtifactsGetParams | pub | `struct ArtifactsGetParams` |
| 10259 | method | init | pub | `public init(     sessionkey: String? = nil,    ...` |
| 10283 | struct | ArtifactsGetResult | pub | `struct ArtifactsGetResult` |
| 10285 | method | init | pub | `public init(     artifact: ArtifactSummary)` |
| 10297 | struct | ArtifactsDownloadParams | pub | `struct ArtifactsDownloadParams` |
| 10303 | method | init | pub | `public init(     sessionkey: String? = nil,    ...` |
| 10327 | struct | ArtifactsDownloadResult | pub | `struct ArtifactsDownloadResult` |
| 10332 | method | init | pub | `public init(     artifact: ArtifactSummary,    ...` |
| 10353 | struct | AgentsListParams | pub | `struct AgentsListParams` |
| 10355 | struct | AgentsListResult | pub | `struct AgentsListResult` |
| 10360 | method | init | pub | `public init(     defaultid: String,     mainkey...` |
| 10381 | struct | ModelChoice | pub | `struct ModelChoice` |
| 10392 | method | init | pub | `public init(     id: String,     name: String, ...` |
| 10431 | struct | ModelsListParams | pub | `struct ModelsListParams` |
| 10434 | method | init | pub | `public init(     includeprovidercapabilities: B...` |
| 10449 | struct | ModelsListResult | pub | `struct ModelsListResult` |
| 10451 | method | init | pub | `public init(     models: [ModelChoice])` |
| 10463 | struct | ModelsProbeParams | pub | `struct ModelsProbeParams` |
| 10467 | method | init | pub | `public init(     provider: String,     profilei...` |
| 10485 | struct | ModelsProbeTargetResult | pub | `struct ModelsProbeTargetResult` |
| 10491 | method | init | pub | `public init(     profileid: String? = nil,     ...` |
| 10515 | struct | ModelsProbeResult | pub | `struct ModelsProbeResult` |
| 10521 | method | init | pub | `public init(     provider: String,     status: ...` |
| 10545 | struct | CommandEntry | pub | `struct CommandEntry` |
| 10555 | method | init | pub | `public init(     name: String,     nativename: ...` |
| 10591 | struct | CommandsListParams | pub | `struct CommandsListParams` |
| 10596 | method | init | pub | `public init(     agentid: String? = nil,     pr...` |
| 10617 | struct | CommandsListResult | pub | `struct CommandsListResult` |
| 10619 | method | init | pub | `public init(     commands: [CommandEntry])` |
| 10631 | struct | SkillsStatusParams | pub | `struct SkillsStatusParams` |
| 10633 | method | init | pub | `public init(     agentid: String? = nil)` |
| 10645 | struct | ToolsCatalogParams | pub | `struct ToolsCatalogParams` |
| 10648 | method | init | pub | `public init(     agentid: String? = nil,     in...` |
| 10663 | struct | ToolCatalogProfile | pub | `struct ToolCatalogProfile` |
| 10666 | method | init | pub | `public init(     id: AnyCodable,     label: Str...` |
| 10681 | struct | ToolCatalogEntry | pub | `struct ToolCatalogEntry` |
| 10691 | method | init | pub | `public init(     id: String,     label: String,...` |
| 10727 | struct | ToolCatalogGroup | pub | `struct ToolCatalogGroup` |
| 10733 | method | init | pub | `public init(     id: String,     label: String,...` |
| 10757 | struct | ToolsCatalogResult | pub | `struct ToolsCatalogResult` |
| 10761 | method | init | pub | `public init(     agentid: String,     profiles:...` |
| 10779 | struct | ToolsEffectiveParams | pub | `struct ToolsEffectiveParams` |
| 10782 | method | init | pub | `public init(     agentid: String? = nil,     se...` |
| 10797 | struct | ToolsEffectiveEntry | pub | `struct ToolsEffectiveEntry` |
| 10807 | method | init | pub | `public init(     id: String,     label: String,...` |
| 10843 | struct | ToolsEffectiveGroup | pub | `struct ToolsEffectiveGroup` |
| 10848 | method | init | pub | `public init(     id: AnyCodable,     label: Str...` |
| 10869 | struct | ToolsEffectiveNotice | pub | `struct ToolsEffectiveNotice` |
| 10873 | method | init | pub | `public init(     id: String,     severity: AnyC...` |
| 10891 | struct | ToolsEffectiveResult | pub | `struct ToolsEffectiveResult` |
| 10896 | method | init | pub | `public init(     agentid: String,     profile: ...` |
| 10917 | struct | ToolsInvokeParams | pub | `struct ToolsInvokeParams` |
| 10925 | method | init | pub | `public init(     name: String,     args: [Strin...` |
| 10955 | struct | ToolsInvokeError | pub | `struct ToolsInvokeError` |
| 10959 | method | init | pub | `public init(     code: String,     message: Str...` |
| 10977 | struct | ToolsInvokeResult | pub | `struct ToolsInvokeResult` |
| 10985 | method | init | pub | `public init(     ok: Bool,     toolname: String...` |
| 11015 | struct | SkillsBinsParams | pub | `struct SkillsBinsParams` |
| 11017 | struct | SkillsBinsResult | pub | `struct SkillsBinsResult` |
| 11019 | method | init | pub | `public init(     bins: [String])` |
| 11031 | struct | SkillsSearchParams | pub | `struct SkillsSearchParams` |
| 11034 | method | init | pub | `public init(     query: String? = nil,     limi...` |
| 11049 | struct | SkillsSearchResult | pub | `struct SkillsSearchResult` |
| 11051 | method | init | pub | `public init(     results: [[String: AnyCodable]])` |
| 11063 | struct | SkillsDetailParams | pub | `struct SkillsDetailParams` |
| 11065 | method | init | pub | `public init(     slug: String)` |
| 11077 | struct | SkillsDetailResult | pub | `struct SkillsDetailResult` |
| 11082 | method | init | pub | `public init(     skill: AnyCodable,     latestv...` |
| 11103 | struct | SkillsCuratorActionParams | pub | `struct SkillsCuratorActionParams` |
| 11105 | method | init | pub | `public init(     skill: String)` |
| 11117 | struct | SkillsCuratorActionResult | pub | `struct SkillsCuratorActionResult` |
| 11128 | method | init | pub | `public init(     skillfile: String,     skillke...` |
| 11167 | struct | SkillsCuratorStatusParams | pub | `struct SkillsCuratorStatusParams` |
| 11169 | struct | SkillsCuratorStatusResult | pub | `struct SkillsCuratorStatusResult` |
| 11176 | method | init | pub | `public init(     lastattemptatms: AnyCodable,  ...` |
| 11203 | struct | SkillsProposalsListParams | pub | `struct SkillsProposalsListParams` |
| 11205 | method | init | pub | `public init(     agentid: String? = nil)` |
| 11217 | struct | SkillsProposalsListResult | pub | `struct SkillsProposalsListResult` |
| 11221 | method | init | pub | `public init(     schema: String,     updatedat:...` |
| 11239 | struct | SkillsProposalHistoryStatusParams | pub | `struct SkillsProposalHistoryStatusParams` |
| 11241 | method | init | pub | `public init(     agentid: String? = nil)` |
| 11253 | struct | SkillsProposalHistoryScanParams | pub | `struct SkillsProposalHistoryScanParams` |
| 11256 | method | init | pub | `public init(     agentid: String? = nil,     di...` |
| 11271 | struct | SkillsProposalHistoryScanResult | pub | `struct SkillsProposalHistoryScanResult` |
| 11282 | method | init | pub | `public init(     schema: String,     hasscanned...` |
| 11321 | struct | SkillsProposalInspectParams | pub | `struct SkillsProposalInspectParams` |
| 11324 | method | init | pub | `public init(     agentid: String? = nil,     pr...` |
| 11339 | struct | SkillsProposalInspectResult | pub | `struct SkillsProposalInspectResult` |
| 11343 | method | init | pub | `public init(     record: SkillsProposalRecordRe...` |
| 11361 | struct | SkillsProposalCreateParams | pub | `struct SkillsProposalCreateParams` |
| 11369 | method | init | pub | `public init(     agentid: String? = nil,     na...` |
| 11399 | struct | SkillsProposalUpdateParams | pub | `struct SkillsProposalUpdateParams` |
| 11407 | method | init | pub | `public init(     agentid: String? = nil,     sk...` |
| 11437 | struct | SkillsProposalReviseParams | pub | `struct SkillsProposalReviseParams` |
| 11445 | method | init | pub | `public init(     agentid: String? = nil,     pr...` |
| 11475 | struct | SkillsProposalRequestRevisionParams | pub | `struct SkillsProposalRequestRevisionParams` |
| 11483 | method | init | pub | `public init(     agentid: String? = nil,     ta...` |
| 11513 | struct | SkillsProposalRequestRevisionResult | pub | `struct SkillsProposalRequestRevisionResult` |
| 11516 | method | init | pub | `public init(     runid: String,     status: Any...` |
| 11531 | struct | SkillsProposalActionParams | pub | `struct SkillsProposalActionParams` |
| 11535 | method | init | pub | `public init(     agentid: String? = nil,     pr...` |
| 11553 | struct | SkillsProposalApplyResult | pub | `struct SkillsProposalApplyResult` |
| 11556 | method | init | pub | `public init(     record: SkillsProposalRecordRe...` |
| 11571 | struct | SkillsProposalRecordResult | pub | `struct SkillsProposalRecordResult` |
| 11595 | method | init | pub | `public init(     schema: String,     id: String...` |
| 11673 | struct | SkillsSecurityVerdictsParams | pub | `struct SkillsSecurityVerdictsParams` |
| 11675 | method | init | pub | `public init(     agentid: String? = nil)` |
| 11687 | struct | SkillsSecurityVerdictsResult | pub | `struct SkillsSecurityVerdictsResult` |
| 11690 | method | init | pub | `public init(     schema: String,     items: [[S...` |
| 11705 | struct | SkillsSkillCardParams | pub | `struct SkillsSkillCardParams` |
| 11708 | method | init | pub | `public init(     agentid: String? = nil,     sk...` |
| 11723 | struct | SkillsSkillCardResult | pub | `struct SkillsSkillCardResult` |
| 11729 | method | init | pub | `public init(     schema: String,     skillkey: ...` |
| 11753 | struct | SkillsUploadBeginParams | pub | `struct SkillsUploadBeginParams` |
| 11760 | method | init | pub | `public init(     kind: String,     slug: String...` |
| 11787 | struct | SkillsUploadChunkParams | pub | `struct SkillsUploadChunkParams` |
| 11791 | method | init | pub | `public init(     uploadid: String,     offset: ...` |
| 11809 | struct | SkillsUploadCommitParams | pub | `struct SkillsUploadCommitParams` |
| 11812 | method | init | pub | `public init(     uploadid: String,     sha256: ...` |
| 11827 | struct | CronJob | pub | `struct CronJob` |
| 11860 | method | init | pub | `public init(     id: String,     declarationkey...` |
| 11965 | struct | CronListParams | pub | `struct CronListParams` |
| 11977 | method | init | pub | `public init(     includedisabled: Bool? = nil, ...` |
| 12019 | struct | CronStatusParams | pub | `struct CronStatusParams` |
| 12021 | struct | CronAddParams | pub | `struct CronAddParams` |
| 12039 | method | init | pub | `public init(     name: String,     declarationk...` |
| 12099 | struct | CronDeclarativeAddResult | pub | `struct CronDeclarativeAddResult` |
| 12103 | method | init | pub | `public init(     created: Bool,     updated: Bo...` |
| 12121 | struct | CronRunsParams | pub | `struct CronRunsParams` |
| 12135 | method | init | pub | `public init(     agentid: String? = nil,     sc...` |
| 12183 | struct | CronRunLogEntry | pub | `struct CronRunLogEntry` |
| 12207 | method | init | pub | `public init(     ts: Int,     jobid: String,   ...` |
| 12285 | struct | LogsTailParams | pub | `struct LogsTailParams` |
| 12289 | method | init | pub | `public init(     cursor: Int? = nil,     limit:...` |
| 12307 | struct | LogsTailResult | pub | `struct LogsTailResult` |
| 12314 | method | init | pub | `public init(     file: String,     cursor: Int,...` |
| 12341 | struct | MemoryMigrationItem | pub | `struct MemoryMigrationItem` |
| 12349 | method | init | pub | `public init(     id: String,     status: Memory...` |
| 12379 | struct | MemoryMigrationSummary | pub | `struct MemoryMigrationSummary` |
| 12387 | method | init | pub | `public init(     total: Int,     planned: Int, ...` |
| 12417 | struct | MemoryMigrationProviderPlan | pub | `struct MemoryMigrationProviderPlan` |
| 12431 | method | init | pub | `public init(     providerid: String,     label:...` |
| 12479 | struct | MigrationsMemoryPlanParams | pub | `struct MigrationsMemoryPlanParams` |
| 12482 | method | init | pub | `public init(     agentid: String,     overwrite...` |
| 12497 | struct | MigrationsMemoryPlanResult | pub | `struct MigrationsMemoryPlanResult` |
| 12501 | method | init | pub | `public init(     agentid: String,     workspace...` |
| 12519 | struct | MigrationsMemoryApplyParams | pub | `struct MigrationsMemoryApplyParams` |
| 12526 | method | init | pub | `public init(     idempotencykey: String,     ag...` |
| 12553 | struct | MigrationsMemoryApplyResult | pub | `struct MigrationsMemoryApplyResult` |
| 12562 | method | init | pub | `public init(     providerid: String,     source...` |
| 12595 | struct | TerminalOpenParams | pub | `struct TerminalOpenParams` |
| 12600 | method | init | pub | `public init(     agentid: String? = nil,     ca...` |
| 12621 | struct | TerminalOpenResult | pub | `struct TerminalOpenResult` |
| 12628 | method | init | pub | `public init(     sessionid: String,     agentid...` |
| 12655 | struct | TerminalInputParams | pub | `struct TerminalInputParams` |
| 12658 | method | init | pub | `public init(     sessionid: String,     data: S...` |
| 12673 | struct | TerminalResizeParams | pub | `struct TerminalResizeParams` |
| 12677 | method | init | pub | `public init(     sessionid: String,     cols: I...` |
| 12695 | struct | TerminalCloseParams | pub | `struct TerminalCloseParams` |
| 12697 | method | init | pub | `public init(     sessionid: String)` |
| 12709 | struct | TerminalAttachParams | pub | `struct TerminalAttachParams` |
| 12711 | method | init | pub | `public init(     sessionid: String)` |
| 12723 | struct | TerminalAttachResult | pub | `struct TerminalAttachResult` |
| 12731 | method | init | pub | `public init(     sessionid: String,     agentid...` |
| 12761 | struct | TerminalSessionInfo | pub | `struct TerminalSessionInfo` |
| 12770 | method | init | pub | `public init(     sessionid: String,     agentid...` |
| 12803 | struct | TerminalListResult | pub | `struct TerminalListResult` |
| 12805 | method | init | pub | `public init(     sessions: [TerminalSessionInfo])` |
| 12817 | struct | TerminalTextParams | pub | `struct TerminalTextParams` |
| 12819 | method | init | pub | `public init(     sessionid: String)` |
| 12831 | struct | TerminalTextResult | pub | `struct TerminalTextResult` |
| 12833 | method | init | pub | `public init(     text: String)` |
| 12845 | struct | TerminalUploadParams | pub | `struct TerminalUploadParams` |
| 12849 | method | init | pub | `public init(     sessionid: String,     name: S...` |
| 12867 | struct | TerminalUploadResult | pub | `struct TerminalUploadResult` |
| 12870 | method | init | pub | `public init(     path: String,     size: Int)` |
| 12885 | struct | TerminalAckResult | pub | `struct TerminalAckResult` |
| 12887 | method | init | pub | `public init(     ok: Bool)` |
| 12899 | struct | TerminalDataEvent | pub | `struct TerminalDataEvent` |
| 12903 | method | init | pub | `public init(     sessionid: String,     seq: In...` |
| 12921 | struct | TerminalExitEvent | pub | `struct TerminalExitEvent` |
| 12927 | method | init | pub | `public init(     sessionid: String,     exitcod...` |
| 12951 | struct | ExecApprovalPresentation | pub | `struct ExecApprovalPresentation` |
| 12960 | method | init | pub | `public init(     kind: String,     commandtext:...` |
| 12993 | struct | PluginApprovalPresentation | pub | `struct PluginApprovalPresentation` |
| 13002 | method | init | pub | `public init(     kind: String,     title: Strin...` |
| 13035 | struct | SystemAgentApprovalPresentation | pub | `struct SystemAgentApprovalPresentation` |
| 13042 | method | init | pub | `public init(     kind: String,     title: Strin...` |
| 13069 | struct | PendingApprovalSnapshot | pub | `struct PendingApprovalSnapshot` |
| 13076 | method | init | pub | `public init(     id: String,     urlpath: Strin...` |
| 13103 | struct | AllowedApprovalSnapshot | pub | `struct AllowedApprovalSnapshot` |
| 13115 | method | init | pub | `public init(     id: String,     urlpath: Strin...` |
| 13157 | struct | DeniedApprovalSnapshot | pub | `struct DeniedApprovalSnapshot` |
| 13169 | method | init | pub | `public init(     id: String,     urlpath: Strin...` |
| 13211 | struct | ExpiredApprovalSnapshot | pub | `struct ExpiredApprovalSnapshot` |
| 13222 | method | init | pub | `public init(     id: String,     urlpath: Strin...` |
| 13261 | struct | CancelledApprovalSnapshot | pub | `struct CancelledApprovalSnapshot` |
| 13272 | method | init | pub | `public init(     id: String,     urlpath: Strin...` |
| 13311 | struct | ApprovalGetParams | pub | `struct ApprovalGetParams` |
| 13313 | method | init | pub | `public init(     id: String)` |
| 13325 | struct | ApprovalGetResult | pub | `struct ApprovalGetResult` |
| 13327 | method | init | pub | `public init(     approval: ApprovalSnapshot)` |
| 13339 | struct | ApprovalHistoryParams | pub | `struct ApprovalHistoryParams` |
| 13343 | method | init | pub | `public init(     cursor: String? = nil,     lim...` |
| 13361 | struct | ApprovalHistoryResult | pub | `struct ApprovalHistoryResult` |
| 13364 | method | init | pub | `public init(     items: [TerminalApprovalSnapsh...` |
| 13379 | struct | ApprovalResolveParams | pub | `struct ApprovalResolveParams` |
| 13383 | method | init | pub | `public init(     id: String,     kind: Approval...` |
| 13401 | struct | ApprovalResolveResult | pub | `struct ApprovalResolveResult` |
| 13404 | method | init | pub | `public init(     applied: Bool,     approval: T...` |
| 13419 | struct | PendingSessionApprovalEvent | pub | `struct PendingSessionApprovalEvent` |
| 13425 | method | init | pub | `public init(     sessionkey: String,     source...` |
| 13449 | struct | TerminalSessionApprovalEvent | pub | `struct TerminalSessionApprovalEvent` |
| 13455 | method | init | pub | `public init(     sessionkey: String,     source...` |
| 13479 | struct | SessionApprovalReplay | pub | `struct SessionApprovalReplay` |
| 13484 | method | init | pub | `public init(     sessionkey: String,     update...` |
| 13505 | struct | ExecApprovalsGetParams | pub | `struct ExecApprovalsGetParams` |
| 13507 | struct | ExecApprovalsSetParams | pub | `struct ExecApprovalsSetParams` |
| 13510 | method | init | pub | `public init(     file: [String: AnyCodable],   ...` |
| 13525 | struct | ExecApprovalsNodeGetParams | pub | `struct ExecApprovalsNodeGetParams` |
| 13527 | method | init | pub | `public init(     nodeid: String)` |
| 13539 | struct | ExecApprovalsNodeSnapshot | pub | `struct ExecApprovalsNodeSnapshot` |
| 13551 | method | init | pub | `public init(     path: String? = nil,     exist...` |
| 13593 | struct | ExecApprovalsNodeSetParams | pub | `struct ExecApprovalsNodeSetParams` |
| 13598 | method | init | pub | `public init(     nodeid: String,     file: [Str...` |
| 13619 | struct | ExecApprovalsSnapshot | pub | `struct ExecApprovalsSnapshot` |
| 13624 | method | init | pub | `public init(     path: String,     exists: Bool...` |
| 13645 | struct | ExecApprovalGetParams | pub | `struct ExecApprovalGetParams` |
| 13647 | method | init | pub | `public init(     id: String)` |
| 13659 | struct | ExecApprovalRequestParams | pub | `struct ExecApprovalRequestParams` |
| 13688 | method | init | pub | `public init(     id: String? = nil,     command...` |
| 13781 | struct | ExecApprovalResolveParams | pub | `struct ExecApprovalResolveParams` |
| 13784 | method | init | pub | `public init(     id: String,     decision: String)` |
| 13799 | struct | QuestionOption | pub | `struct QuestionOption` |
| 13802 | method | init | pub | `public init(     label: String,     description...` |
| 13817 | struct | Question | pub | `struct Question` |
| 13825 | method | init | pub | `public init(     questionid: String,     header...` |
| 13855 | struct | QuestionRequestQuestion | pub | `struct QuestionRequestQuestion` |
| 13863 | method | init | pub | `public init(     questionid: String,     header...` |
| 13893 | struct | QuestionAnswers | pub | `struct QuestionAnswers` |
| 13895 | method | init | pub | `public init(     answers: [String: AnyCodable])` |
| 13907 | struct | QuestionRecord | pub | `struct QuestionRecord` |
| 13917 | method | init | pub | `public init(     id: String,     questions: [Qu...` |
| 13953 | struct | QuestionRequestParams | pub | `struct QuestionRequestParams` |
| 13959 | method | init | pub | `public init(     id: String? = nil,     questio...` |
| 13983 | struct | QuestionRequestResult | pub | `struct QuestionRequestResult` |
| 13986 | method | init | pub | `public init(     id: String,     expiresatms: Int)` |
| 14001 | struct | QuestionWaitAnswerParams | pub | `struct QuestionWaitAnswerParams` |
| 14004 | method | init | pub | `public init(     id: String,     timeoutms: Int...` |
| 14019 | struct | QuestionGetParams | pub | `struct QuestionGetParams` |
| 14021 | method | init | pub | `public init(     id: String)` |
| 14033 | struct | QuestionGetResult | pub | `struct QuestionGetResult` |
| 14035 | method | init | pub | `public init(     question: QuestionRecord)` |
| 14047 | struct | QuestionListParams | pub | `struct QuestionListParams` |
| 14049 | struct | QuestionListResult | pub | `struct QuestionListResult` |
| 14051 | method | init | pub | `public init(     questions: [QuestionRecord])` |
| 14063 | struct | PluginApprovalRequestParams | pub | `struct PluginApprovalRequestParams` |
| 14080 | method | init | pub | `public init(     pluginid: String? = nil,     t...` |
| 14137 | struct | PluginApprovalResolveParams | pub | `struct PluginApprovalResolveParams` |
| 14140 | method | init | pub | `public init(     id: String,     decision: String)` |
| 14155 | struct | PluginCatalogClawHubInstall | pub | `struct PluginCatalogClawHubInstall` |
| 14158 | method | init | pub | `public init(     source: String,     packagenam...` |
| 14173 | struct | PluginCatalogEntry | pub | `struct PluginCatalogEntry` |
| 14192 | method | init | pub | `public init(     id: String,     name: String, ...` |
| 14255 | struct | PluginCatalogOfficialInstall | pub | `struct PluginCatalogOfficialInstall` |
| 14258 | method | init | pub | `public init(     source: String,     pluginid: ...` |
| 14273 | struct | PluginControlUiDescriptor | pub | `struct PluginControlUiDescriptor` |
| 14283 | method | init | pub | `public init(     id: String,     pluginid: Stri...` |
| 14319 | struct | PluginSearchPackage | pub | `struct PluginSearchPackage` |
| 14330 | method | init | pub | `public init(     name: String,     displayname:...` |
| 14369 | struct | PluginSearchResultEntry | pub | `struct PluginSearchResultEntry` |
| 14372 | method | init | pub | `public init(     score: Double,     package: Pl...` |
| 14387 | struct | PluginsInstallResult | pub | `struct PluginsInstallResult` |
| 14392 | method | init | pub | `public init(     ok: Bool,     plugin: PluginCa...` |
| 14413 | struct | PluginsListParams | pub | `struct PluginsListParams` |
| 14415 | struct | PluginsListResult | pub | `struct PluginsListResult` |
| 14419 | method | init | pub | `public init(     plugins: [PluginCatalogEntry],...` |
| 14437 | struct | PluginsRefreshParams | pub | `struct PluginsRefreshParams` |
| 14439 | struct | PluginsRefreshResult | pub | `struct PluginsRefreshResult` |
| 14441 | method | init | pub | `public init(     ok: Bool)` |
| 14453 | struct | PluginsSearchParams | pub | `struct PluginsSearchParams` |
| 14456 | method | init | pub | `public init(     query: String,     limit: Int?...` |
| 14471 | struct | PluginsSearchResult | pub | `struct PluginsSearchResult` |
| 14473 | method | init | pub | `public init(     results: [PluginSearchResultEn...` |
| 14485 | struct | PluginsSessionActionFailureResult | pub | `struct PluginsSessionActionFailureResult` |
| 14490 | method | init | pub | `public init(     error: String,     code: Strin...` |
| 14509 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 14537 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 14547 | struct | PluginsSessionActionParams | pub | `struct PluginsSessionActionParams` |
| 14552 | method | init | pub | `public init(     pluginid: String,     actionid...` |
| 14573 | struct | PluginsSessionActionSuccessResult | pub | `struct PluginsSessionActionSuccessResult` |
| 14578 | method | init | pub | `public init(     result: AnyCodable? = nil,    ...` |
| 14597 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 14625 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 14635 | struct | PluginsSetEnabledParams | pub | `struct PluginsSetEnabledParams` |
| 14638 | method | init | pub | `public init(     pluginid: String,     enabled:...` |
| 14653 | struct | PluginsSetEnabledResult | pub | `struct PluginsSetEnabledResult` |
| 14658 | method | init | pub | `public init(     ok: Bool,     plugin: PluginCa...` |
| 14679 | struct | PluginsUiDescriptorsParams | pub | `struct PluginsUiDescriptorsParams` |
| 14681 | struct | PluginsUiDescriptorsResult | pub | `struct PluginsUiDescriptorsResult` |
| 14684 | method | init | pub | `public init(     ok: Bool,     descriptors: [Pl...` |
| 14699 | struct | PluginsUninstallParams | pub | `struct PluginsUninstallParams` |
| 14701 | method | init | pub | `public init(     pluginid: String)` |
| 14713 | struct | PluginsUninstallResult | pub | `struct PluginsUninstallResult` |
| 14719 | method | init | pub | `public init(     ok: Bool,     pluginid: String...` |
| 14743 | struct | DevicePairListParams | pub | `struct DevicePairListParams` |
| 14745 | struct | DevicePairApproveParams | pub | `struct DevicePairApproveParams` |
| 14747 | method | init | pub | `public init(     requestid: String)` |
| 14759 | struct | DevicePairRejectParams | pub | `struct DevicePairRejectParams` |
| 14761 | method | init | pub | `public init(     requestid: String)` |
| 14773 | struct | DevicePairRemoveParams | pub | `struct DevicePairRemoveParams` |
| 14775 | method | init | pub | `public init(     deviceid: String)` |
| 14787 | struct | DevicePairSetupCodeParams | pub | `struct DevicePairSetupCodeParams` |
| 14792 | method | init | pub | `public init(     publicurl: String? = nil,     ...` |
| 14813 | struct | DevicePairSetupCodeResult | pub | `struct DevicePairSetupCodeResult` |
| 14822 | method | init | pub | `public init(     setupcode: String,     qrdatau...` |
| 14855 | struct | DevicePairRenameParams | pub | `struct DevicePairRenameParams` |
| 14858 | method | init | pub | `public init(     deviceid: String,     label: S...` |
| 14873 | struct | DeviceTokenRotateParams | pub | `struct DeviceTokenRotateParams` |
| 14877 | method | init | pub | `public init(     deviceid: String,     role: St...` |
| 14895 | struct | DeviceTokenRevokeParams | pub | `struct DeviceTokenRevokeParams` |
| 14898 | method | init | pub | `public init(     deviceid: String,     role: St...` |
| 14913 | struct | DevicePairRequestedEvent | pub | `struct DevicePairRequestedEvent` |
| 14930 | method | init | pub | `public init(     requestid: String,     devicei...` |
| 14987 | struct | DevicePairResolvedEvent | pub | `struct DevicePairResolvedEvent` |
| 14992 | method | init | pub | `public init(     requestid: String,     devicei...` |
| 15013 | struct | ChatHistoryParams | pub | `struct ChatHistoryParams` |
| 15021 | method | init | pub | `public init(     sessionkey: String,     agenti...` |
| 15051 | struct | ChatMetadataParams | pub | `struct ChatMetadataParams` |
| 15053 | method | init | pub | `public init(     agentid: String? = nil)` |
| 15065 | struct | ChatMessageGetParams | pub | `struct ChatMessageGetParams` |
| 15070 | method | init | pub | `public init(     sessionkey: String,     agenti...` |
| 15091 | struct | ChatMessageGetResult | pub | `struct ChatMessageGetResult` |
| 15095 | method | init | pub | `public init(     ok: Bool,     message: AnyCoda...` |
| 15113 | struct | ChatToolTitlesParams | pub | `struct ChatToolTitlesParams` |
| 15117 | method | init | pub | `public init(     sessionkey: String,     agenti...` |
| 15135 | struct | ChatToolTitlesResult | pub | `struct ChatToolTitlesResult` |
| 15138 | method | init | pub | `public init(     titles: [String: AnyCodable], ...` |
| 15153 | struct | ChatSendParams | pub | `struct ChatSendParams` |
| 15177 | method | init | pub | `public init(     sessionkey: String,     agenti...` |
| 15225 | method | init | pub | `public init(     sessionkey: String,     agenti...` |
| 15300 | struct | ChatAbortParams | pub | `struct ChatAbortParams` |
| 15305 | method | init | pub | `public init(     sessionkey: String,     agenti...` |
| 15326 | struct | ChatInjectParams | pub | `struct ChatInjectParams` |
| 15331 | method | init | pub | `public init(     sessionkey: String,     agenti...` |
| 15352 | struct | ChatDeltaEvent | pub | `struct ChatDeltaEvent` |
| 15363 | method | init | pub | `public init(     runid: String,     sessionkey:...` |
| 15402 | struct | ChatFinalEvent | pub | `struct ChatFinalEvent` |
| 15413 | method | init | pub | `public init(     runid: String,     sessionkey:...` |
| 15452 | struct | ChatAbortedEvent | pub | `struct ChatAbortedEvent` |
| 15462 | method | init | pub | `public init(     runid: String,     sessionkey:...` |
| 15498 | struct | ChatErrorEvent | pub | `struct ChatErrorEvent` |
| 15510 | method | init | pub | `public init(     runid: String,     sessionkey:...` |
| 15552 | struct | UpdateStatusParams | pub | `struct UpdateStatusParams` |
| 15554 | struct | UpdateRunParams | pub | `struct UpdateRunParams` |
| 15561 | method | init | pub | `public init(     sessionkey: String? = nil,    ...` |
| 15588 | struct | TickEvent | pub | `struct TickEvent` |
| 15590 | method | init | pub | `public init(     ts: Int)` |
| 15602 | struct | ShutdownEvent | pub | `struct ShutdownEvent` |
| 15605 | method | init | pub | `public init(     reason: String,     restartexp...` |
| 15620 | enum | BoardOp | pub | `enum BoardOp` |
| 15632 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 15652 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 15666 | enum | BoardWidgetContent | pub | `enum BoardWidgetContent` |
| 15673 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 15688 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 15697 | enum | BoardWidgetPutContent | pub | `enum BoardWidgetPutContent` |
| 15705 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 15721 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 15731 | enum | BoardCommand | pub | `enum BoardCommand` |
| 15738 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 15753 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 15762 | enum | GatewayErrorDetails | pub | `enum GatewayErrorDetails` |
| 15765 | method | init | pub | `public init(code: String, missingscope: String,...` |
| 15796 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 15811 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 15820 | enum | GatewaySuspendPrepareResult | pub | `enum GatewaySuspendPrepareResult` |
| 15827 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 15842 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 15851 | enum | GatewaySuspendStatusResult | pub | `enum GatewaySuspendStatusResult` |
| 15858 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 15873 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 15882 | enum | UiCommand | pub | `enum UiCommand` |
| 15893 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 15912 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 15925 | enum | SessionPlacement | pub | `enum SessionPlacement` |
| 15940 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 15963 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 15980 | enum | AuditActivityEventV1 | pub | `enum AuditActivityEventV1` |
| 15989 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 16006 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 16017 | enum | ApprovalPresentation | pub | `enum ApprovalPresentation` |
| 16025 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 16041 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 16051 | enum | ApprovalSnapshot | pub | `enum ApprovalSnapshot` |
| 16061 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 16079 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 16091 | enum | TerminalApprovalSnapshot | pub | `enum TerminalApprovalSnapshot` |
| 16100 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 16117 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 16128 | enum | SessionApprovalEvent | pub | `enum SessionApprovalEvent` |
| 16135 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 16150 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 16159 | enum | PluginCatalogInstallAction | pub | `enum PluginCatalogInstallAction` |
| 16166 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 16181 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 16190 | enum | PluginsSessionActionResult | pub | `enum PluginsSessionActionResult` |
| 16197 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 16206 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 16215 | enum | ChatEvent | pub | `enum ChatEvent` |
| 16224 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 16241 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |
| 16252 | enum | GatewayFrame | pub | `enum GatewayFrame` |
| 16261 | method | init | pub | `public init(from decoder: Decoder) throws` |
| 16278 | fn | encode | pub | `public func encode(to encoder: Encoder) throws` |

## Public API

### `ErrorCode`

```
enum ErrorCode
```

**Line:** 24 | **Kind:** enum

### `AuthProbeStatus`

```
enum AuthProbeStatus
```

**Line:** 34 | **Kind:** enum

### `EnvironmentStatus`

```
enum EnvironmentStatus
```

**Line:** 45 | **Kind:** enum

### `WorkerEnvironmentState`

```
enum WorkerEnvironmentState
```

**Line:** 53 | **Kind:** enum

### `WorkerTunnelStatus`

```
enum WorkerTunnelStatus
```

**Line:** 67 | **Kind:** enum

### `NodePresenceAliveReason`

```
enum NodePresenceAliveReason
```

**Line:** 74 | **Kind:** enum

### `SessionPlacementState`

```
enum SessionPlacementState
```

**Line:** 83 | **Kind:** enum

### `SessionDiscussionState`

```
enum SessionDiscussionState
```

**Line:** 96 | **Kind:** enum

### `SessionFileKind`

```
enum SessionFileKind
```

**Line:** 102 | **Kind:** enum

### `SessionFileRelevance`

```
enum SessionFileRelevance
```

**Line:** 107 | **Kind:** enum

### `SessionDiffFileStatus`

```
enum SessionDiffFileStatus
```

**Line:** 113 | **Kind:** enum

### `TaskSuggestionResolution`

```
enum TaskSuggestionResolution
```

**Line:** 120 | **Kind:** enum

### `SystemChangeKind`

```
enum SystemChangeKind
```

**Line:** 126 | **Kind:** enum

### `SystemChangeSource`

```
enum SystemChangeSource
```

**Line:** 132 | **Kind:** enum

### `MemoryMigrationItemStatus`

```
enum MemoryMigrationItemStatus
```

**Line:** 142 | **Kind:** enum

### `ApprovalKind`

```
enum ApprovalKind
```

**Line:** 151 | **Kind:** enum

### `ApprovalDecision`

```
enum ApprovalDecision
```

**Line:** 157 | **Kind:** enum

### `ApprovalAllowDecision`

```
enum ApprovalAllowDecision
```

**Line:** 163 | **Kind:** enum

### `ApprovalAllowedReason`

```
enum ApprovalAllowedReason
```

**Line:** 168 | **Kind:** enum

### `ApprovalDeniedReason`

```
enum ApprovalDeniedReason
```

**Line:** 172 | **Kind:** enum

### `ApprovalExpiredReason`

```
enum ApprovalExpiredReason
```

**Line:** 179 | **Kind:** enum

### `ApprovalCancelledReason`

```
enum ApprovalCancelledReason
```

**Line:** 183 | **Kind:** enum

### `PluginApprovalSeverity`

```
enum PluginApprovalSeverity
```

**Line:** 188 | **Kind:** enum

### `ApprovalTerminalReason`

```
enum ApprovalTerminalReason
```

**Line:** 194 | **Kind:** enum

### `QuestionStatus`

```
enum QuestionStatus
```

**Line:** 204 | **Kind:** enum

### `BoardTab`

```
struct BoardTab
```

**Line:** 211 | **Kind:** struct

### `init`

```
public init(
        tabid: String,
        title: String,
        position: Int,
        chatdock: AnyCodable)
```

**Line:** 216 | **Kind:** method

### `BoardWidget`

```
struct BoardWidget
```

**Line:** 237 | **Kind:** struct

### `init`

```
public init(
        name: String,
        tabid: String,
        title: String? = nil,
        contentkind: AnyCodable,
        sizew: Int,
        sizeh: Int,
        position: Int,
        grantstate: AnyCodable,
        revision: Int,
        instanceid: String? = nil,
        declaredsummary: [String]? = nil,
        frameurl: String? = nil)
```

**Line:** 250 | **Kind:** method

### `BoardSnapshot`

```
struct BoardSnapshot
```

**Line:** 295 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        revision: Int,
        tabs: [BoardTab],
        widgets: [BoardWidget])
```

**Line:** 300 | **Kind:** method

### `BoardTabCreateOp`

```
struct BoardTabCreateOp
```

**Line:** 321 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        tabid: String,
        title: String,
        chatdock: AnyCodable? = nil)
```

**Line:** 326 | **Kind:** method

### `BoardTabUpdateOp`

```
struct BoardTabUpdateOp
```

**Line:** 347 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        tabid: String,
        title: String? = nil,
        chatdock: AnyCodable? = nil,
        position: Int? = nil)
```

**Line:** 353 | **Kind:** method

### `BoardTabDeleteOp`

```
struct BoardTabDeleteOp
```

**Line:** 377 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        tabid: String)
```

**Line:** 380 | **Kind:** method

### `BoardTabsReorderOp`

```
struct BoardTabsReorderOp
```

**Line:** 395 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        tabids: [String])
```

**Line:** 398 | **Kind:** method

### `BoardWidgetMoveOp`

```
struct BoardWidgetMoveOp
```

**Line:** 413 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        name: String,
        tabid: String? = nil,
        position: Int? = nil,
        after: String? = nil)
```

**Line:** 419 | **Kind:** method

### `BoardWidgetResizeOp`

```
struct BoardWidgetResizeOp
```

**Line:** 443 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        name: String,
        sizew: Int,
        sizeh: Int)
```

**Line:** 448 | **Kind:** method

### `BoardWidgetRemoveOp`

```
struct BoardWidgetRemoveOp
```

**Line:** 469 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        name: String)
```

**Line:** 472 | **Kind:** method

### `BoardMcpAppDescriptor`

```
struct BoardMcpAppDescriptor
```

**Line:** 487 | **Kind:** struct

### `init`

```
public init(
        servername: String,
        toolname: String,
        uiresourceuri: String,
        originsessionkey: String,
        toolcallid: String)
```

**Line:** 493 | **Kind:** method

### `BoardMcpAppPinDescriptor`

```
struct BoardMcpAppPinDescriptor
```

**Line:** 517 | **Kind:** struct

### `init`

```
public init(
        viewid: String,
        servername: String,
        toolname: String,
        uiresourceuri: String,
        originsessionkey: String,
        toolcallid: String)
```

**Line:** 524 | **Kind:** method

### `BoardWidgetHtmlContent`

```
struct BoardWidgetHtmlContent
```

**Line:** 551 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        html: String)
```

**Line:** 554 | **Kind:** method

### `BoardWidgetMcpAppContent`

```
struct BoardWidgetMcpAppContent
```

**Line:** 569 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        descriptor: BoardMcpAppDescriptor)
```

**Line:** 572 | **Kind:** method

### `BoardWidgetMcpAppPutContent`

```
struct BoardWidgetMcpAppPutContent
```

**Line:** 587 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        descriptor: BoardMcpAppPinDescriptor)
```

**Line:** 590 | **Kind:** method

### `BoardCanvasDocumentSource`

```
struct BoardCanvasDocumentSource
```

**Line:** 605 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        docid: String)
```

**Line:** 608 | **Kind:** method

### `BoardGetParams`

```
struct BoardGetParams
```

**Line:** 623 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String)
```

**Line:** 625 | **Kind:** method

### `BoardUpdateParams`

```
struct BoardUpdateParams
```

**Line:** 637 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        ops: [BoardOp])
```

**Line:** 640 | **Kind:** method

### `BoardWidgetPutParams`

```
struct BoardWidgetPutParams
```

**Line:** 655 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        name: String,
        title: String? = nil,
        content: BoardWidgetPutContent,
        placement: [String: AnyCodable]? = nil,
        declared: [String: AnyCodable]? = nil)
```

**Line:** 662 | **Kind:** method

### `BoardWidgetGrantParams`

```
struct BoardWidgetGrantParams
```

**Line:** 689 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        name: String,
        decision: AnyCodable,
        revision: Int,
        instanceid: String? = nil)
```

**Line:** 695 | **Kind:** method

### `BoardWidgetAppViewParams`

```
struct BoardWidgetAppViewParams
```

**Line:** 719 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        name: String,
        revision: Int,
        instanceid: String? = nil)
```

**Line:** 724 | **Kind:** method

### `BoardWidgetAppViewResult`

```
struct BoardWidgetAppViewResult
```

**Line:** 745 | **Kind:** struct

### `init`

```
public init(
        viewid: String,
        expiresatms: Int)
```

**Line:** 748 | **Kind:** method

### `BoardEventParams`

```
struct BoardEventParams
```

**Line:** 763 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        widget: String,
        payload: AnyCodable)
```

**Line:** 767 | **Kind:** method

### `BoardChangedEvent`

```
struct BoardChangedEvent
```

**Line:** 785 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        revision: Int,
        widget: String? = nil)
```

**Line:** 789 | **Kind:** method

### `BoardFocusTabCommand`

```
struct BoardFocusTabCommand
```

**Line:** 807 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        tabid: String)
```

**Line:** 810 | **Kind:** method

### `BoardSetChatDockCommand`

```
struct BoardSetChatDockCommand
```

**Line:** 825 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        dock: AnyCodable)
```

**Line:** 828 | **Kind:** method

### `BoardCommandEvent`

```
struct BoardCommandEvent
```

**Line:** 843 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        command: BoardCommand)
```

**Line:** 846 | **Kind:** method

### `ConnectParams`

```
struct ConnectParams
```

**Line:** 861 | **Kind:** struct

### `init`

```
public init(
        minprotocol: Int,
        maxprotocol: Int,
        client: [String: AnyCodable],
        caps: [String]? = nil,
        commands: [String]? = nil,
        permissions: [String: AnyCodable]? = nil,
        pathenv: String? = nil,
        role: String? = nil,
        scopes: [String]? = nil,
        device: [String: AnyCodable]? = nil,
        auth: [String: AnyCodable]? = nil,
        locale: String? = nil,
        useragent: String? = nil)
```

**Line:** 875 | **Kind:** method

### `WorkerAdmissionHandshake`

```
struct WorkerAdmissionHandshake
```

**Line:** 923 | **Kind:** struct

### `init`

```
public init(
        bundlehash: String,
        openclawversion: String,
        protocolfeatures: [String])
```

**Line:** 927 | **Kind:** method

### `HelloOk`

```
struct HelloOk
```

**Line:** 945 | **Kind:** struct

### `init`

```
public init(
        type: String,
        _protocol: Int,
        server: [String: AnyCodable],
        features: [String: AnyCodable],
        snapshot: Snapshot,
        controluitabs: [[String: AnyCodable]]? = nil,
        pluginsurfaceurls: [String: AnyCodable]? = nil,
        auth: [String: AnyCodable],
        policy: [String: AnyCodable])
```

**Line:** 955 | **Kind:** method

### `RequestFrame`

```
struct RequestFrame
```

**Line:** 991 | **Kind:** struct

### `init`

```
public init(
        type: String,
        id: String,
        method: String,
        params: AnyCodable? = nil)
```

**Line:** 996 | **Kind:** method

### `ResponseFrame`

```
struct ResponseFrame
```

**Line:** 1017 | **Kind:** struct

### `init`

```
public init(
        type: String,
        id: String,
        ok: Bool,
        payload: AnyCodable? = nil,
        error: ErrorShape? = nil)
```

**Line:** 1023 | **Kind:** method

### `EventFrame`

```
struct EventFrame
```

**Line:** 1047 | **Kind:** struct

### `init`

```
public init(
        type: String,
        event: String,
        payload: AnyCodable? = nil,
        seq: Int? = nil,
        stateversion: StateVersion? = nil)
```

**Line:** 1053 | **Kind:** method

### `PresenceEntry`

```
struct PresenceEntry
```

**Line:** 1077 | **Kind:** struct

### `init`

```
public init(
        host: String? = nil,
        ip: String? = nil,
        version: String? = nil,
        platform: String? = nil,
        devicefamily: String? = nil,
        modelidentifier: String? = nil,
        mode: String? = nil,
        lastinputseconds: Int? = nil,
        reason: String? = nil,
        tags: [String]? = nil,
        text: String? = nil,
        ts: Int,
        deviceid: String? = nil,
        roles: [String]? = nil,
        scopes: [String]? = nil,
        instanceid: String? = nil,
        user: [String: AnyCodable]? = nil,
        watchedsessions: [String]? = nil)
```

**Line:** 1096 | **Kind:** method

### `StateVersion`

```
struct StateVersion
```

**Line:** 1159 | **Kind:** struct

### `init`

```
public init(
        presence: Int,
        health: Int)
```

**Line:** 1162 | **Kind:** method

### `Snapshot`

```
struct Snapshot
```

**Line:** 1177 | **Kind:** struct

### `init`

```
public init(
        presence: [PresenceEntry],
        health: [String: AnyCodable],
        stateversion: StateVersion,
        uptimems: Int,
        appliedconfighash: AnyCodable? = nil,
        configpath: String? = nil,
        statedir: String? = nil,
        sessiondefaults: [String: AnyCodable]? = nil,
        authmode: AnyCodable? = nil,
        updateavailable: [String: AnyCodable]? = nil)
```

**Line:** 1188 | **Kind:** method

### `ErrorShape`

```
struct ErrorShape
```

**Line:** 1227 | **Kind:** struct

### `init`

```
public init(
        code: String,
        message: String,
        details: AnyCodable? = nil,
        retryable: Bool? = nil,
        retryafterms: Int? = nil)
```

**Line:** 1233 | **Kind:** method

### `MissingScopeErrorDetails`

```
struct MissingScopeErrorDetails
```

**Line:** 1257 | **Kind:** struct

### `init`

```
public init(
        code: String,
        missingscope: String,
        requiredscopes: [String])
```

**Line:** 1261 | **Kind:** method

### `McpAppViewExpiredErrorDetails`

```
struct McpAppViewExpiredErrorDetails
```

**Line:** 1279 | **Kind:** struct

### `init`

```
public init(
        code: String)
```

**Line:** 1281 | **Kind:** method

### `GatewaySuspendTaskBlocker`

```
struct GatewaySuspendTaskBlocker
```

**Line:** 1293 | **Kind:** struct

### `init`

```
public init(
        taskid: String,
        status: String,
        runtime: AnyCodable,
        runid: String? = nil,
        label: String? = nil,
        title: String? = nil)
```

**Line:** 1300 | **Kind:** method

### `GatewaySuspendBlocker`

```
struct GatewaySuspendBlocker
```

**Line:** 1327 | **Kind:** struct

### `init`

```
public init(
        kind: AnyCodable,
        count: Int,
        message: String,
        task: GatewaySuspendTaskBlocker? = nil)
```

**Line:** 1332 | **Kind:** method

### `GatewaySuspendPrepareParams`

```
struct GatewaySuspendPrepareParams
```

**Line:** 1353 | **Kind:** struct

### `init`

```
public init(
        requestid: String)
```

**Line:** 1355 | **Kind:** method

### `GatewaySuspendPrepareBusyResult`

```
struct GatewaySuspendPrepareBusyResult
```

**Line:** 1367 | **Kind:** struct

### `init`

```
public init(
        status: String,
        reason: AnyCodable,
        retryafterms: Int,
        activecount: Int,
        blockers: [GatewaySuspendBlocker])
```

**Line:** 1373 | **Kind:** method

### `GatewaySuspendPrepareReadyResult`

```
struct GatewaySuspendPrepareReadyResult
```

**Line:** 1397 | **Kind:** struct

### `init`

```
public init(
        status: String,
        suspensionid: String,
        expiresatms: Int,
        activecount: Int,
        blockers: [GatewaySuspendBlocker])
```

**Line:** 1403 | **Kind:** method

### `GatewaySuspendStatusParams`

```
struct GatewaySuspendStatusParams
```

**Line:** 1427 | **Kind:** struct

### `init`

```
public init(
        suspensionid: String)
```

**Line:** 1429 | **Kind:** method

### `GatewaySuspendStatusRunningResult`

```
struct GatewaySuspendStatusRunningResult
```

**Line:** 1441 | **Kind:** struct

### `init`

```
public init(
        status: String)
```

**Line:** 1443 | **Kind:** method

### `GatewaySuspendStatusReadyResult`

```
struct GatewaySuspendStatusReadyResult
```

**Line:** 1455 | **Kind:** struct

### `init`

```
public init(
        status: String,
        expiresatms: Int)
```

**Line:** 1458 | **Kind:** method

### `GatewaySuspendResumeParams`

```
struct GatewaySuspendResumeParams
```

**Line:** 1473 | **Kind:** struct

### `init`

```
public init(
        suspensionid: String)
```

**Line:** 1475 | **Kind:** method

### `GatewaySuspendResumeResult`

```
struct GatewaySuspendResumeResult
```

**Line:** 1487 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        status: String,
        resumed: Bool)
```

**Line:** 1491 | **Kind:** method

### `WorkerEnvironmentMetadata`

```
struct WorkerEnvironmentMetadata
```

**Line:** 1509 | **Kind:** struct

### `init`

```
public init(
        providerid: String,
        leaseid: String? = nil,
        state: WorkerEnvironmentState,
        agems: Int,
        idlems: Int? = nil,
        attachedsessionids: [String],
        tunnelstatus: WorkerTunnelStatus)
```

**Line:** 1517 | **Kind:** method

### `EnvironmentSummary`

```
struct EnvironmentSummary
```

**Line:** 1547 | **Kind:** struct

### `init`

```
public init(
        id: String,
        type: String,
        label: String? = nil,
        status: EnvironmentStatus,
        capabilities: [String]? = nil,
        worker: WorkerEnvironmentMetadata? = nil)
```

**Line:** 1554 | **Kind:** method

### `EnvironmentsCreateParams`

```
struct EnvironmentsCreateParams
```

**Line:** 1581 | **Kind:** struct

### `init`

```
public init(
        profileid: String,
        idempotencykey: String)
```

**Line:** 1584 | **Kind:** method

### `EnvironmentsCreateResult`

```
struct EnvironmentsCreateResult
```

**Line:** 1599 | **Kind:** struct

### `init`

```
public init(
        id: String,
        type: String,
        label: String? = nil,
        status: EnvironmentStatus,
        capabilities: [String]? = nil,
        worker: WorkerEnvironmentMetadata? = nil)
```

**Line:** 1606 | **Kind:** method

### `EnvironmentsDestroyParams`

```
struct EnvironmentsDestroyParams
```

**Line:** 1633 | **Kind:** struct

### `init`

```
public init(
        environmentid: String,
        force: Bool? = nil)
```

**Line:** 1636 | **Kind:** method

### `EnvironmentsDestroyResult`

```
struct EnvironmentsDestroyResult
```

**Line:** 1651 | **Kind:** struct

### `init`

```
public init(
        id: String,
        type: String,
        label: String? = nil,
        status: EnvironmentStatus,
        capabilities: [String]? = nil,
        worker: WorkerEnvironmentMetadata? = nil)
```

**Line:** 1658 | **Kind:** method

### `EnvironmentsListParams`

```
struct EnvironmentsListParams
```

**Line:** 1685 | **Kind:** struct

### `EnvironmentsListResult`

```
struct EnvironmentsListResult
```

**Line:** 1687 | **Kind:** struct

### `init`

```
public init(
        environments: [EnvironmentSummary],
        profiles: [[String: AnyCodable]]? = nil)
```

**Line:** 1690 | **Kind:** method

### `EnvironmentsStatusParams`

```
struct EnvironmentsStatusParams
```

**Line:** 1705 | **Kind:** struct

### `init`

```
public init(
        environmentid: String)
```

**Line:** 1707 | **Kind:** method

### `EnvironmentsStatusResult`

```
struct EnvironmentsStatusResult
```

**Line:** 1719 | **Kind:** struct

### `init`

```
public init(
        id: String,
        type: String,
        label: String? = nil,
        status: EnvironmentStatus,
        capabilities: [String]? = nil,
        worker: WorkerEnvironmentMetadata? = nil)
```

**Line:** 1726 | **Kind:** method

### `SystemInfoParams`

```
struct SystemInfoParams
```

**Line:** 1753 | **Kind:** struct

### `SystemInfoResult`

```
struct SystemInfoResult
```

**Line:** 1755 | **Kind:** struct

### `init`

```
public init(
        machinename: String,
        hostname: String,
        platform: String,
        release: String,
        arch: String,
        oslabel: String,
        lanaddress: String? = nil,
        port: Int? = nil,
        nodeversion: String,
        pid: Int,
        processinstanceid: String? = nil,
        uptimems: Int,
        cpucount: Int,
        cpumodel: String? = nil,
        loadaverage: [AnyCodable]? = nil,
        memorytotalbytes: Int,
        memoryfreebytes: Int,
        disktotalbytes: Int? = nil,
        diskavailablebytes: Int? = nil,
        diskpath: String? = nil)
```

**Line:** 1776 | **Kind:** method

### `AgentEvent`

```
struct AgentEvent
```

**Line:** 1845 | **Kind:** struct

### `init`

```
public init(
        runid: String,
        seq: Int,
        stream: String,
        ts: Int,
        spawnedby: String? = nil,
        isheartbeat: Bool? = nil,
        data: [String: AnyCodable])
```

**Line:** 1853 | **Kind:** method

### `ConversationSendParams`

```
struct ConversationSendParams
```

**Line:** 1883 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        sourcesessionkey: String? = nil,
        operationid: String,
        conversationref: String,
        message: String)
```

**Line:** 1889 | **Kind:** method

### `ConversationSendResult`

```
struct ConversationSendResult
```

**Line:** 1913 | **Kind:** struct

### `init`

```
public init(
        status: AnyCodable,
        conversationref: String,
        channel: String,
        messageid: String? = nil,
        queueid: String? = nil)
```

**Line:** 1919 | **Kind:** method

### `ConversationListItem`

```
struct ConversationListItem
```

**Line:** 1943 | **Kind:** struct

### `init`

```
public init(
        conversationref: String,
        channel: String,
        accountid: String,
        kind: AnyCodable,
        target: String,
        threadid: String? = nil,
        label: String? = nil,
        firstseenat: Int,
        lastseenat: Int)
```

**Line:** 1953 | **Kind:** method

### `ConversationListParams`

```
struct ConversationListParams
```

**Line:** 1989 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        channel: String? = nil,
        query: String? = nil,
        limit: Int? = nil)
```

**Line:** 1994 | **Kind:** method

### `ConversationListResult`

```
struct ConversationListResult
```

**Line:** 2015 | **Kind:** struct

### `init`

```
public init(
        conversations: [ConversationListItem])
```

**Line:** 2017 | **Kind:** method

### `ConversationTurnCancelParams`

```
struct ConversationTurnCancelParams
```

**Line:** 2029 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        turnid: String)
```

**Line:** 2032 | **Kind:** method

### `ConversationTurnCancelResult`

```
struct ConversationTurnCancelResult
```

**Line:** 2047 | **Kind:** struct

### `init`

```
public init(
        cancelled: Bool)
```

**Line:** 2049 | **Kind:** method

### `ConversationTurnParams`

```
struct ConversationTurnParams
```

**Line:** 2061 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        sourcesessionkey: String? = nil,
        turnid: String,
        conversationref: String,
        message: String,
        timeoutms: Int)
```

**Line:** 2068 | **Kind:** method

### `ConversationTurnReply`

```
struct ConversationTurnReply
```

**Line:** 2095 | **Kind:** struct

### `init`

```
public init(
        conversationref: String,
        messageid: String,
        replytoid: String? = nil,
        threadid: String? = nil,
        text: String,
        timestamp: Int,
        transcriptartifactid: String? = nil,
        transcriptmessageid: String? = nil)
```

**Line:** 2104 | **Kind:** method

### `MessageActionParams`

```
struct MessageActionParams
```

**Line:** 2137 | **Kind:** struct

### `init`

```
public init(
        channel: String,
        action: String,
        params: [String: AnyCodable],
        accountid: String? = nil,
        requesteraccountid: String? = nil,
        requestersenderid: String? = nil,
        senderisowner: Bool? = nil,
        sessionkey: String? = nil,
        sessionid: String? = nil,
        inboundturnkind: String? = nil,
        agentid: String? = nil,
        toolcontext: [String: AnyCodable]? = nil,
        conversationreadorigin: String? = nil,
        idempotencykey: String)
```

**Line:** 2152 | **Kind:** method

### `SendParams`

```
struct SendParams
```

**Line:** 2203 | **Kind:** struct

### `init`

```
public init(
        to: String,
        message: String? = nil,
        mediaurl: String? = nil,
        mediaurls: [String]? = nil,
        buffer: String? = nil,
        filename: String? = nil,
        contenttype: String? = nil,
        asvoice: Bool? = nil,
        gifplayback: Bool? = nil,
        channel: String? = nil,
        accountid: String? = nil,
        agentid: String? = nil,
        replytoid: String? = nil,
        threadid: String? = nil,
        forcedocument: Bool? = nil,
        silent: Bool? = nil,
        parsemode: String? = nil,
        sessionkey: String? = nil,
        idempotencykey: String)
```

**Line:** 2223 | **Kind:** method

### `PollParams`

```
struct PollParams
```

**Line:** 2289 | **Kind:** struct

### `init`

```
public init(
        to: String,
        question: String,
        options: [String],
        maxselections: Int? = nil,
        durationseconds: Int? = nil,
        durationhours: Int? = nil,
        silent: Bool? = nil,
        isanonymous: Bool? = nil,
        threadid: String? = nil,
        channel: String? = nil,
        accountid: String? = nil,
        idempotencykey: String)
```

**Line:** 2302 | **Kind:** method

### `AgentParams`

```
struct AgentParams
```

**Line:** 2347 | **Kind:** struct

### `init`

```
public init(
        message: String,
        agentid: String? = nil,
        provider: String? = nil,
        model: String? = nil,
        to: String? = nil,
        replyto: String? = nil,
        sessionid: String? = nil,
        sessionkey: String? = nil,
        expectedexistingsessionid: String? = nil,
        thinking: String? = nil,
        deliver: Bool? = nil,
        attachments: [AnyCodable]? = nil,
        channel: String? = nil,
        replychannel: String? = nil,
        accountid: String? = nil,
        replyaccountid: String? = nil,
        threadid: String? = nil,
        groupid: String? = nil,
        groupchannel: String? = nil,
        groupspace: String? = nil,
        timeout: Int? = nil,
        besteffortdeliver: Bool? = nil,
        lane: String? = nil,
        cwd: String? = nil,
        cleanupbundlemcponrunend: Bool? = nil,
        modelrun: Bool? = nil,
        promptmode: AnyCodable? = nil,
        extrasystemprompt: String? = nil,
        bootstrapcontextmode: AnyCodable? = nil,
        bootstrapcontextrunkind: AnyCodable? = nil,
        acpturnsource: String? = nil,
        internalruntimehandoffid: String? = nil,
        execapprovalfollowupexpectedsessionid: String? = nil,
        internalevents: [[String: AnyCodable]]? = nil,
        inputprovenance: [String: AnyCodable]? = nil,
        suppresspromptpersistence: Bool? = nil,
        sessioneffects: AnyCodable? = nil,
        sourcereplydeliverymode: AnyCodable? = nil,
        disablemessagetool: Bool? = nil,
        swarmcollector: Bool? = nil,
        swarmoutputschema: [String: AnyCodable]? = nil,
        forcerestartsafetools: Bool? = nil,
        voicewaketrigger: String? = nil,
        idempotencykey: String,
        label: String? = nil)
```

**Line:** 2393 | **Kind:** method

### `AgentIdentityParams`

```
struct AgentIdentityParams
```

**Line:** 2537 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        sessionkey: String? = nil)
```

**Line:** 2540 | **Kind:** method

### `AgentIdentityResult`

```
struct AgentIdentityResult
```

**Line:** 2555 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        name: String? = nil,
        avatar: String? = nil,
        avatarsource: String? = nil,
        avatarstatus: String? = nil,
        avatarreason: String? = nil,
        emoji: String? = nil)
```

**Line:** 2563 | **Kind:** method

### `AgentWaitParams`

```
struct AgentWaitParams
```

**Line:** 2593 | **Kind:** struct

### `init`

```
public init(
        runid: String,
        timeoutms: Int? = nil)
```

**Line:** 2596 | **Kind:** method

### `WakeParams`

```
struct WakeParams
```

**Line:** 2611 | **Kind:** struct

### `init`

```
public init(
        mode: AnyCodable,
        text: String,
        sessionkey: String? = nil,
        agentid: String? = nil)
```

**Line:** 2616 | **Kind:** method

### `WorktreeRecord`

```
struct WorktreeRecord
```

**Line:** 2637 | **Kind:** struct

### `init`

```
public init(
        id: String,
        name: String,
        repofingerprint: String,
        reporoot: String,
        path: String,
        branch: String,
        baseref: String,
        ownerkind: String,
        ownerid: String? = nil,
        snapshotref: String? = nil,
        createdat: Int,
        lastactiveat: Int,
        removedat: Int? = nil)
```

**Line:** 2651 | **Kind:** method

### `WorktreesListParams`

```
struct WorktreesListParams
```

**Line:** 2699 | **Kind:** struct

### `WorktreesListResult`

```
struct WorktreesListResult
```

**Line:** 2701 | **Kind:** struct

### `init`

```
public init(
        worktrees: [WorktreeRecord])
```

**Line:** 2703 | **Kind:** method

### `WorktreesCreateParams`

```
struct WorktreesCreateParams
```

**Line:** 2715 | **Kind:** struct

### `init`

```
public init(
        reporoot: String,
        name: String? = nil,
        baseref: String? = nil)
```

**Line:** 2719 | **Kind:** method

### `WorktreesRemoveParams`

```
struct WorktreesRemoveParams
```

**Line:** 2737 | **Kind:** struct

### `init`

```
public init(
        id: String,
        force: Bool? = nil)
```

**Line:** 2740 | **Kind:** method

### `WorktreesRemoveResult`

```
struct WorktreesRemoveResult
```

**Line:** 2755 | **Kind:** struct

### `init`

```
public init(
        removed: Bool,
        snapshotref: String? = nil,
        snapshoterror: String? = nil)
```

**Line:** 2759 | **Kind:** method

### `WorktreesRestoreParams`

```
struct WorktreesRestoreParams
```

**Line:** 2777 | **Kind:** struct

### `init`

```
public init(
        id: String)
```

**Line:** 2779 | **Kind:** method

### `WorktreesGcParams`

```
struct WorktreesGcParams
```

**Line:** 2791 | **Kind:** struct

### `WorktreesGcResult`

```
struct WorktreesGcResult
```

**Line:** 2793 | **Kind:** struct

### `init`

```
public init(
        removed: [String],
        orphansdeleted: Int,
        snapshotspruned: Int)
```

**Line:** 2797 | **Kind:** method

### `WorktreeBranch`

```
struct WorktreeBranch
```

**Line:** 2815 | **Kind:** struct

### `init`

```
public init(
        name: String,
        kind: AnyCodable)
```

**Line:** 2818 | **Kind:** method

### `WorktreesBranchesParams`

```
struct WorktreesBranchesParams
```

**Line:** 2833 | **Kind:** struct

### `init`

```
public init(
        reporoot: String)
```

**Line:** 2835 | **Kind:** method

### `WorktreesBranchesResult`

```
struct WorktreesBranchesResult
```

**Line:** 2847 | **Kind:** struct

### `init`

```
public init(
        branches: [WorktreeBranch],
        defaultbranch: String? = nil,
        headbranch: String? = nil)
```

**Line:** 2851 | **Kind:** method

### `FsDirEntry`

```
struct FsDirEntry
```

**Line:** 2869 | **Kind:** struct

### `init`

```
public init(
        name: String,
        path: String,
        hidden: Bool? = nil)
```

**Line:** 2873 | **Kind:** method

### `FsListDirParams`

```
struct FsListDirParams
```

**Line:** 2891 | **Kind:** struct

### `init`

```
public init(
        path: String? = nil,
        nodeid: String? = nil)
```

**Line:** 2894 | **Kind:** method

### `FsListDirResult`

```
struct FsListDirResult
```

**Line:** 2909 | **Kind:** struct

### `init`

```
public init(
        path: String,
        parent: String? = nil,
        home: String,
        entries: [FsDirEntry])
```

**Line:** 2914 | **Kind:** method

### `NodePairListParams`

```
struct NodePairListParams
```

**Line:** 2935 | **Kind:** struct

### `NodePairApproveParams`

```
struct NodePairApproveParams
```

**Line:** 2937 | **Kind:** struct

### `init`

```
public init(
        requestid: String)
```

**Line:** 2939 | **Kind:** method

### `NodePairRejectParams`

```
struct NodePairRejectParams
```

**Line:** 2951 | **Kind:** struct

### `init`

```
public init(
        requestid: String)
```

**Line:** 2953 | **Kind:** method

### `NodePairRemoveParams`

```
struct NodePairRemoveParams
```

**Line:** 2965 | **Kind:** struct

### `init`

```
public init(
        nodeid: String)
```

**Line:** 2967 | **Kind:** method

### `NodeRenameParams`

```
struct NodeRenameParams
```

**Line:** 2979 | **Kind:** struct

### `init`

```
public init(
        nodeid: String,
        displayname: String)
```

**Line:** 2982 | **Kind:** method

### `NodeListParams`

```
struct NodeListParams
```

**Line:** 2997 | **Kind:** struct

### `NodePluginToolDescriptor`

```
struct NodePluginToolDescriptor
```

**Line:** 2999 | **Kind:** struct

### `init`

```
public init(
        pluginid: String,
        name: String,
        description: String,
        parameters: [String: AnyCodable]? = nil,
        command: String? = nil,
        mcp: [String: AnyCodable]? = nil)
```

**Line:** 3006 | **Kind:** method

### `NodePluginToolsUpdateParams`

```
struct NodePluginToolsUpdateParams
```

**Line:** 3033 | **Kind:** struct

### `init`

```
public init(
        tools: [NodePluginToolDescriptor])
```

**Line:** 3035 | **Kind:** method

### `NodeSkillDescriptor`

```
struct NodeSkillDescriptor
```

**Line:** 3047 | **Kind:** struct

### `init`

```
public init(
        name: String,
        description: String,
        content: String)
```

**Line:** 3051 | **Kind:** method

### `NodeSkillsUpdateParams`

```
struct NodeSkillsUpdateParams
```

**Line:** 3069 | **Kind:** struct

### `init`

```
public init(
        skills: [NodeSkillDescriptor])
```

**Line:** 3071 | **Kind:** method

### `NodePendingAckParams`

```
struct NodePendingAckParams
```

**Line:** 3083 | **Kind:** struct

### `init`

```
public init(
        ids: [String])
```

**Line:** 3085 | **Kind:** method

### `NodeDescribeParams`

```
struct NodeDescribeParams
```

**Line:** 3097 | **Kind:** struct

### `init`

```
public init(
        nodeid: String)
```

**Line:** 3099 | **Kind:** method

### `NodeInvokeParams`

```
struct NodeInvokeParams
```

**Line:** 3111 | **Kind:** struct

### `init`

```
public init(
        nodeid: String,
        command: String,
        params: AnyCodable? = nil,
        timeoutms: Int? = nil,
        idempotencykey: String,
        sessionkey: String? = nil,
        turnsourcechannel: String? = nil,
        turnsourceto: String? = nil,
        turnsourceaccountid: String? = nil,
        turnsourcethreadid: AnyCodable? = nil)
```

**Line:** 3122 | **Kind:** method

### `NodeInvokeInputEvent`

```
struct NodeInvokeInputEvent
```

**Line:** 3161 | **Kind:** struct

### `init`

```
public init(
        id: String,
        nodeid: String,
        seq: Int,
        payloadjson: String)
```

**Line:** 3166 | **Kind:** method

### `NodeInvokeProgressParams`

```
struct NodeInvokeProgressParams
```

**Line:** 3187 | **Kind:** struct

### `init`

```
public init(
        invokeid: String,
        nodeid: String,
        seq: Int,
        chunk: String)
```

**Line:** 3192 | **Kind:** method

### `NodeInvokeResultParams`

```
struct NodeInvokeResultParams
```

**Line:** 3213 | **Kind:** struct

### `init`

```
public init(
        id: String,
        nodeid: String,
        ok: Bool,
        payload: AnyCodable? = nil,
        payloadjson: String? = nil,
        error: [String: AnyCodable]? = nil)
```

**Line:** 3220 | **Kind:** method

### `NodeInvokeRequestEvent`

```
struct NodeInvokeRequestEvent
```

**Line:** 3247 | **Kind:** struct

### `init`

```
public init(
        id: String,
        nodeid: String,
        command: String,
        paramsjson: String? = nil,
        timeoutms: Int? = nil,
        idempotencykey: String? = nil)
```

**Line:** 3254 | **Kind:** method

### `NodeEventParams`

```
struct NodeEventParams
```

**Line:** 3281 | **Kind:** struct

### `init`

```
public init(
        event: String,
        payload: AnyCodable? = nil,
        payloadjson: String? = nil)
```

**Line:** 3285 | **Kind:** method

### `NodeEventResult`

```
struct NodeEventResult
```

**Line:** 3303 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        event: String,
        handled: Bool,
        reason: String? = nil)
```

**Line:** 3308 | **Kind:** method

### `NodePresenceAlivePayload`

```
struct NodePresenceAlivePayload
```

**Line:** 3329 | **Kind:** struct

### `init`

```
public init(
        trigger: NodePresenceAliveReason,
        sentatms: Int? = nil,
        displayname: String? = nil,
        version: String? = nil,
        platform: String? = nil,
        devicefamily: String? = nil,
        modelidentifier: String? = nil,
        pushtransport: String? = nil)
```

**Line:** 3338 | **Kind:** method

### `NodePresenceActivityPayload`

```
struct NodePresenceActivityPayload
```

**Line:** 3371 | **Kind:** struct

### `init`

```
public init(
        idleseconds: Int,
        saturated: Bool? = nil)
```

**Line:** 3374 | **Kind:** method

### `NodePendingDrainParams`

```
struct NodePendingDrainParams
```

**Line:** 3389 | **Kind:** struct

### `init`

```
public init(
        maxitems: Int? = nil)
```

**Line:** 3391 | **Kind:** method

### `NodePendingDrainResult`

```
struct NodePendingDrainResult
```

**Line:** 3403 | **Kind:** struct

### `init`

```
public init(
        nodeid: String,
        revision: Int,
        items: [[String: AnyCodable]],
        hasmore: Bool)
```

**Line:** 3408 | **Kind:** method

### `NodePendingEnqueueParams`

```
struct NodePendingEnqueueParams
```

**Line:** 3429 | **Kind:** struct

### `init`

```
public init(
        nodeid: String,
        type: String,
        priority: String? = nil,
        expiresinms: Int? = nil,
        wake: Bool? = nil)
```

**Line:** 3435 | **Kind:** method

### `NodePendingEnqueueResult`

```
struct NodePendingEnqueueResult
```

**Line:** 3459 | **Kind:** struct

### `init`

```
public init(
        nodeid: String,
        revision: Int,
        queued: [String: AnyCodable],
        waketriggered: Bool)
```

**Line:** 3464 | **Kind:** method

### `PushTestParams`

```
struct PushTestParams
```

**Line:** 3485 | **Kind:** struct

### `init`

```
public init(
        nodeid: String,
        title: String? = nil,
        body: String? = nil,
        environment: String? = nil)
```

**Line:** 3490 | **Kind:** method

### `PushTestResult`

```
struct PushTestResult
```

**Line:** 3511 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        status: Int,
        apnsid: String? = nil,
        reason: String? = nil,
        tokensuffix: String,
        topic: String,
        environment: String,
        transport: String)
```

**Line:** 3520 | **Kind:** method

### `UiSplitCommand`

```
struct UiSplitCommand
```

**Line:** 3553 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        direction: AnyCodable,
        sessionkey: String)
```

**Line:** 3557 | **Kind:** method

### `UiClosePaneCommand`

```
struct UiClosePaneCommand
```

**Line:** 3575 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        sessionkey: String)
```

**Line:** 3578 | **Kind:** method

### `UiFocusCommand`

```
struct UiFocusCommand
```

**Line:** 3593 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        sessionkey: String)
```

**Line:** 3596 | **Kind:** method

### `UiSidebarCommand`

```
struct UiSidebarCommand
```

**Line:** 3611 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        visible: Bool)
```

**Line:** 3614 | **Kind:** method

### `UiPanelCommand`

```
struct UiPanelCommand
```

**Line:** 3629 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        panel: AnyCodable,
        _open: Bool,
        dock: AnyCodable? = nil,
        terminalsessionid: String? = nil)
```

**Line:** 3635 | **Kind:** method

### `UiNavigateCommand`

```
struct UiNavigateCommand
```

**Line:** 3659 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        sessionkey: String)
```

**Line:** 3662 | **Kind:** method

### `UiCommandParams`

```
struct UiCommandParams
```

**Line:** 3677 | **Kind:** struct

### `init`

```
public init(
        command: UiCommand,
        sessionkey: String? = nil)
```

**Line:** 3680 | **Kind:** method

### `UiCommandResult`

```
struct UiCommandResult
```

**Line:** 3695 | **Kind:** struct

### `init`

```
public init(
        ok: Bool)
```

**Line:** 3697 | **Kind:** method

### `SecretsReloadParams`

```
struct SecretsReloadParams
```

**Line:** 3709 | **Kind:** struct

### `SecretsResolveParams`

```
struct SecretsResolveParams
```

**Line:** 3711 | **Kind:** struct

### `init`

```
public init(
        commandname: String,
        targetids: [String],
        allowedpaths: [String]? = nil,
        forcedactivepaths: [String]? = nil,
        optionalactivepaths: [String]? = nil,
        provideroverrides: [String: AnyCodable]? = nil)
```

**Line:** 3718 | **Kind:** method

### `SecretsResolveAssignment`

```
struct SecretsResolveAssignment
```

**Line:** 3745 | **Kind:** struct

### `init`

```
public init(
        path: String? = nil,
        pathsegments: [String],
        value: AnyCodable)
```

**Line:** 3749 | **Kind:** method

### `SecretsResolveResult`

```
struct SecretsResolveResult
```

**Line:** 3767 | **Kind:** struct

### `init`

```
public init(
        ok: Bool? = nil,
        assignments: [SecretsResolveAssignment]? = nil,
        diagnostics: [String]? = nil,
        inactiverefpaths: [String]? = nil)
```

**Line:** 3772 | **Kind:** method

### `SessionsListParams`

```
struct SessionsListParams
```

**Line:** 3793 | **Kind:** struct

### `init`

```
public init(
        limit: Int? = nil,
        offset: Int? = nil,
        activeminutes: Int? = nil,
        requirelastinteraction: Bool? = nil,
        sortby: AnyCodable? = nil,
        includeglobal: Bool? = nil,
        includeunknown: Bool? = nil,
        configuredagentsonly: Bool? = nil,
        includederivedtitles: Bool? = nil,
        includelastmessage: Bool? = nil,
        label: String? = nil,
        spawnedby: String? = nil,
        agentid: String? = nil,
        search: String? = nil,
        archived: Bool? = nil)
```

**Line:** 3809 | **Kind:** method

### `SessionCatalogCapabilities`

```
struct SessionCatalogCapabilities
```

**Line:** 3863 | **Kind:** struct

### `init`

```
public init(
        continuesession: Bool,
        archive: Bool,
        createsession: [String: AnyCodable]? = nil,
        openterminal: Bool? = nil)
```

**Line:** 3868 | **Kind:** method

### `SessionCatalogDescriptor`

```
struct SessionCatalogDescriptor
```

**Line:** 3889 | **Kind:** struct

### `init`

```
public init(
        id: String,
        label: String,
        capabilities: SessionCatalogCapabilities)
```

**Line:** 3893 | **Kind:** method

### `SessionCatalogSession`

```
struct SessionCatalogSession
```

**Line:** 3911 | **Kind:** struct

### `init`

```
public init(
        threadid: String,
        name: String? = nil,
        cwd: String? = nil,
        status: String,
        createdat: Double? = nil,
        updatedat: Double? = nil,
        recencyat: Double? = nil,
        source: String? = nil,
        modelprovider: String? = nil,
        cliversion: String? = nil,
        gitbranch: String? = nil,
        archived: Bool,
        sessionkey: String? = nil,
        cancontinue: Bool,
        canarchive: Bool,
        canopenterminal: Bool? = nil)
```

**Line:** 3928 | **Kind:** method

### `SessionCatalogHost`

```
struct SessionCatalogHost
```

**Line:** 3985 | **Kind:** struct

### `init`

```
public init(
        hostid: String,
        label: String,
        kind: AnyCodable,
        connected: Bool,
        nodeid: String? = nil,
        sessions: [SessionCatalogSession],
        nextcursor: String? = nil,
        error: [String: AnyCodable]? = nil)
```

**Line:** 3994 | **Kind:** method

### `SessionCatalog`

```
struct SessionCatalog
```

**Line:** 4027 | **Kind:** struct

### `init`

```
public init(
        id: String,
        label: String,
        capabilities: SessionCatalogCapabilities,
        hosts: [SessionCatalogHost],
        error: [String: AnyCodable]? = nil)
```

**Line:** 4033 | **Kind:** method

### `SessionCatalogTranscriptItem`

```
struct SessionCatalogTranscriptItem
```

**Line:** 4057 | **Kind:** struct

### `init`

```
public init(
        id: String? = nil,
        type: AnyCodable,
        text: String? = nil,
        timestamp: String? = nil,
        model: String? = nil,
        truncated: Bool? = nil,
        raw: AnyCodable? = nil)
```

**Line:** 4065 | **Kind:** method

### `SessionsCatalogListParams`

```
struct SessionsCatalogListParams
```

**Line:** 4095 | **Kind:** struct

### `init`

```
public init(
        catalogid: String? = nil,
        cursors: [String: AnyCodable]? = nil,
        agentid: String? = nil,
        progressid: String? = nil,
        search: String? = nil,
        limitperhost: Int? = nil,
        hostids: [String]? = nil)
```

**Line:** 4103 | **Kind:** method

### `SessionsCatalogListResult`

```
struct SessionsCatalogListResult
```

**Line:** 4133 | **Kind:** struct

### `init`

```
public init(
        catalogs: [SessionCatalog])
```

**Line:** 4135 | **Kind:** method

### `SessionsCatalogReadParams`

```
struct SessionsCatalogReadParams
```

**Line:** 4147 | **Kind:** struct

### `init`

```
public init(
        catalogid: String,
        hostid: String,
        threadid: String,
        limit: Int? = nil,
        cursor: String? = nil)
```

**Line:** 4153 | **Kind:** method

### `SessionsCatalogReadResult`

```
struct SessionsCatalogReadResult
```

**Line:** 4177 | **Kind:** struct

### `init`

```
public init(
        hostid: String,
        label: String? = nil,
        threadid: String,
        items: [SessionCatalogTranscriptItem],
        nextcursor: String? = nil)
```

**Line:** 4183 | **Kind:** method

### `SessionsCatalogContinueParams`

```
struct SessionsCatalogContinueParams
```

**Line:** 4207 | **Kind:** struct

### `init`

```
public init(
        catalogid: String,
        hostid: String,
        threadid: String)
```

**Line:** 4211 | **Kind:** method

### `SessionsCatalogContinueResult`

```
struct SessionsCatalogContinueResult
```

**Line:** 4229 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String)
```

**Line:** 4231 | **Kind:** method

### `SessionsCatalogArchiveParams`

```
struct SessionsCatalogArchiveParams
```

**Line:** 4243 | **Kind:** struct

### `init`

```
public init(
        catalogid: String,
        hostid: String,
        threadid: String,
        confirmnootherrunner: Bool)
```

**Line:** 4248 | **Kind:** method

### `SessionsCatalogArchiveResult`

```
struct SessionsCatalogArchiveResult
```

**Line:** 4269 | **Kind:** struct

### `init`

```
public init(
        ok: Bool)
```

**Line:** 4271 | **Kind:** method

### `SessionsCleanupParams`

```
struct SessionsCleanupParams
```

**Line:** 4283 | **Kind:** struct

### `init`

```
public init(
        agent: String? = nil,
        allagents: Bool? = nil,
        enforce: Bool? = nil,
        activekey: String? = nil,
        fixmissing: Bool? = nil,
        fixdmscope: Bool? = nil)
```

**Line:** 4290 | **Kind:** method

### `SessionsPreviewParams`

```
struct SessionsPreviewParams
```

**Line:** 4317 | **Kind:** struct

### `init`

```
public init(
        keys: [String],
        limit: Int? = nil,
        maxchars: Int? = nil)
```

**Line:** 4321 | **Kind:** method

### `SessionsDescribeParams`

```
struct SessionsDescribeParams
```

**Line:** 4339 | **Kind:** struct

### `init`

```
public init(
        key: String,
        includederivedtitles: Bool? = nil,
        includelastmessage: Bool? = nil)
```

**Line:** 4343 | **Kind:** method

### `SessionsResolveParams`

```
struct SessionsResolveParams
```

**Line:** 4361 | **Kind:** struct

### `init`

```
public init(
        key: String? = nil,
        sessionid: String? = nil,
        label: String? = nil,
        agentid: String? = nil,
        spawnedby: String? = nil,
        includeglobal: Bool? = nil,
        includeunknown: Bool? = nil,
        allowmissing: Bool? = nil)
```

**Line:** 4370 | **Kind:** method

### `SessionsSearchHit`

```
struct SessionsSearchHit
```

**Line:** 4403 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        sessionid: String,
        messageid: String,
        role: AnyCodable,
        timestamp: Int,
        snippet: String,
        score: Double)
```

**Line:** 4411 | **Kind:** method

### `SessionsSearchParams`

```
struct SessionsSearchParams
```

**Line:** 4441 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        sessionkeys: [String]? = nil,
        query: String,
        limit: Int? = nil)
```

**Line:** 4446 | **Kind:** method

### `SessionsSearchResult`

```
struct SessionsSearchResult
```

**Line:** 4467 | **Kind:** struct

### `init`

```
public init(
        results: [SessionsSearchHit],
        indexing: Bool? = nil,
        truncated: Bool? = nil)
```

**Line:** 4471 | **Kind:** method

### `SessionCompactionCheckpoint`

```
struct SessionCompactionCheckpoint
```

**Line:** 4489 | **Kind:** struct

### `init`

```
public init(
        checkpointid: String,
        sessionkey: String,
        sessionid: String,
        createdat: Int,
        reason: AnyCodable,
        tokensbefore: Int? = nil,
        tokensafter: Int? = nil,
        summary: String? = nil,
        firstkeptentryid: String? = nil,
        precompaction: [String: AnyCodable],
        postcompaction: [String: AnyCodable])
```

**Line:** 4501 | **Kind:** method

### `SessionOperationEvent`

```
struct SessionOperationEvent
```

**Line:** 4543 | **Kind:** struct

### `init`

```
public init(
        operationid: String,
        operation: String,
        phase: AnyCodable,
        sessionkey: String,
        agentid: String? = nil,
        ts: Int,
        completed: Bool? = nil,
        reason: String? = nil)
```

**Line:** 4552 | **Kind:** method

### `LocalSessionPlacement`

```
struct LocalSessionPlacement
```

**Line:** 4585 | **Kind:** struct

### `init`

```
public init(
        state: String,
        generation: Int,
        createdatms: Int,
        updatedatms: Int,
        statechangedatms: Int)
```

**Line:** 4591 | **Kind:** method

### `RequestedSessionPlacement`

```
struct RequestedSessionPlacement
```

**Line:** 4615 | **Kind:** struct

### `init`

```
public init(
        state: String,
        generation: Int,
        createdatms: Int,
        updatedatms: Int,
        statechangedatms: Int)
```

**Line:** 4621 | **Kind:** method

### `ProvisioningSessionPlacement`

```
struct ProvisioningSessionPlacement
```

**Line:** 4645 | **Kind:** struct

### `init`

```
public init(
        state: String,
        generation: Int,
        createdatms: Int,
        updatedatms: Int,
        statechangedatms: Int,
        environmentid: String? = nil)
```

**Line:** 4652 | **Kind:** method

### `SyncingSessionPlacement`

```
struct SyncingSessionPlacement
```

**Line:** 4679 | **Kind:** struct

### `init`

```
public init(
        state: String,
        generation: Int,
        createdatms: Int,
        updatedatms: Int,
        statechangedatms: Int,
        environmentid: String,
        workerbundlehash: String)
```

**Line:** 4687 | **Kind:** method

### `StartingSessionPlacement`

```
struct StartingSessionPlacement
```

**Line:** 4717 | **Kind:** struct

### `init`

```
public init(
        state: String,
        generation: Int,
        createdatms: Int,
        updatedatms: Int,
        statechangedatms: Int,
        environmentid: String,
        workerbundlehash: String,
        workspacebasemanifestref: String,
        remoteworkspacedir: String)
```

**Line:** 4727 | **Kind:** method

### `ActiveWorkerSessionPlacement`

```
struct ActiveWorkerSessionPlacement
```

**Line:** 4763 | **Kind:** struct

### `init`

```
public init(
        state: String,
        generation: Int,
        createdatms: Int,
        updatedatms: Int,
        statechangedatms: Int,
        environmentid: String,
        activeownerepoch: Int,
        workerbundlehash: String,
        workspacebasemanifestref: String,
        remoteworkspacedir: String,
        lasttranscriptackcursor: Int? = nil,
        lastliveeventackcursor: Int? = nil,
        workspaceresultconflict: [String: AnyCodable]? = nil)
```

**Line:** 4777 | **Kind:** method

### `DrainingSessionPlacement`

```
struct DrainingSessionPlacement
```

**Line:** 4825 | **Kind:** struct

### `init`

```
public init(
        state: String,
        generation: Int,
        createdatms: Int,
        updatedatms: Int,
        statechangedatms: Int,
        environmentid: String,
        activeownerepoch: Int,
        workerbundlehash: String,
        workspacebasemanifestref: String,
        remoteworkspacedir: String,
        lasttranscriptackcursor: Int? = nil,
        lastliveeventackcursor: Int? = nil,
        workspaceresultconflict: [String: AnyCodable]? = nil)
```

**Line:** 4839 | **Kind:** method

### `ReconcilingSessionPlacement`

```
struct ReconcilingSessionPlacement
```

**Line:** 4887 | **Kind:** struct

### `init`

```
public init(
        state: String,
        generation: Int,
        createdatms: Int,
        updatedatms: Int,
        statechangedatms: Int,
        environmentid: String,
        activeownerepoch: Int,
        workerbundlehash: String,
        workspacebasemanifestref: String,
        remoteworkspacedir: String,
        lasttranscriptackcursor: Int? = nil,
        lastliveeventackcursor: Int? = nil,
        workspaceresultconflict: [String: AnyCodable]? = nil)
```

**Line:** 4901 | **Kind:** method

### `ReclaimedSessionPlacement`

```
struct ReclaimedSessionPlacement
```

**Line:** 4949 | **Kind:** struct

### `init`

```
public init(
        state: String,
        generation: Int,
        createdatms: Int,
        updatedatms: Int,
        statechangedatms: Int,
        environmentid: String? = nil,
        activeownerepoch: Int? = nil,
        workspacebasemanifestref: String? = nil,
        remoteworkspacedir: String? = nil,
        workerbundlehash: String? = nil,
        lasttranscriptackcursor: Int? = nil,
        lastliveeventackcursor: Int? = nil,
        workspaceresultconflict: [String: AnyCodable]? = nil)
```

**Line:** 4963 | **Kind:** method

### `FailedSessionPlacement`

```
struct FailedSessionPlacement
```

**Line:** 5011 | **Kind:** struct

### `init`

```
public init(
        state: String,
        generation: Int,
        createdatms: Int,
        updatedatms: Int,
        statechangedatms: Int,
        environmentid: String? = nil,
        activeownerepoch: Int? = nil,
        workspacebasemanifestref: String? = nil,
        remoteworkspacedir: String? = nil,
        workerbundlehash: String? = nil,
        lasttranscriptackcursor: Int? = nil,
        lastliveeventackcursor: Int? = nil,
        workspaceresultconflict: [String: AnyCodable]? = nil,
        recoveryerror: String)
```

**Line:** 5026 | **Kind:** method

### `SessionsDispatchParams`

```
struct SessionsDispatchParams
```

**Line:** 5077 | **Kind:** struct

### `init`

```
public init(
        key: String,
        agentid: String? = nil,
        profileid: String)
```

**Line:** 5081 | **Kind:** method

### `SessionsDispatchResult`

```
struct SessionsDispatchResult
```

**Line:** 5099 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        key: String,
        sessionid: String,
        placement: ActiveWorkerSessionPlacement)
```

**Line:** 5104 | **Kind:** method

### `SessionsReclaimParams`

```
struct SessionsReclaimParams
```

**Line:** 5125 | **Kind:** struct

### `init`

```
public init(
        key: String,
        agentid: String? = nil)
```

**Line:** 5128 | **Kind:** method

### `SessionsReclaimResult`

```
struct SessionsReclaimResult
```

**Line:** 5143 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        key: String,
        sessionid: String,
        placement: ReclaimedSessionPlacement)
```

**Line:** 5148 | **Kind:** method

### `SessionDiscussionInfo`

```
struct SessionDiscussionInfo
```

**Line:** 5169 | **Kind:** struct

### `init`

```
public init(
        state: SessionDiscussionState,
        embedurl: String? = nil,
        openurl: String? = nil)
```

**Line:** 5173 | **Kind:** method

### `SessionDiscussionInfoParams`

```
struct SessionDiscussionInfoParams
```

**Line:** 5191 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String)
```

**Line:** 5193 | **Kind:** method

### `SessionDiscussionInfoResult`

```
struct SessionDiscussionInfoResult
```

**Line:** 5205 | **Kind:** struct

### `init`

```
public init(
        state: SessionDiscussionState,
        embedurl: String? = nil,
        openurl: String? = nil)
```

**Line:** 5209 | **Kind:** method

### `SessionDiscussionOpenParams`

```
struct SessionDiscussionOpenParams
```

**Line:** 5227 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String)
```

**Line:** 5229 | **Kind:** method

### `SessionDiscussionOpenResult`

```
struct SessionDiscussionOpenResult
```

**Line:** 5241 | **Kind:** struct

### `init`

```
public init(
        state: SessionDiscussionState,
        embedurl: String? = nil,
        openurl: String? = nil)
```

**Line:** 5245 | **Kind:** method

### `SessionsCompactionListParams`

```
struct SessionsCompactionListParams
```

**Line:** 5263 | **Kind:** struct

### `init`

```
public init(
        key: String,
        agentid: String? = nil)
```

**Line:** 5266 | **Kind:** method

### `SessionsCompactionGetParams`

```
struct SessionsCompactionGetParams
```

**Line:** 5281 | **Kind:** struct

### `init`

```
public init(
        key: String,
        agentid: String? = nil,
        checkpointid: String)
```

**Line:** 5285 | **Kind:** method

### `SessionsCompactionBranchParams`

```
struct SessionsCompactionBranchParams
```

**Line:** 5303 | **Kind:** struct

### `init`

```
public init(
        key: String,
        agentid: String? = nil,
        checkpointid: String)
```

**Line:** 5307 | **Kind:** method

### `SessionsCompactionRestoreParams`

```
struct SessionsCompactionRestoreParams
```

**Line:** 5325 | **Kind:** struct

### `init`

```
public init(
        key: String,
        agentid: String? = nil,
        checkpointid: String)
```

**Line:** 5329 | **Kind:** method

### `SessionsCompactionListResult`

```
struct SessionsCompactionListResult
```

**Line:** 5347 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        key: String,
        checkpoints: [SessionCompactionCheckpoint])
```

**Line:** 5351 | **Kind:** method

### `SessionsCompactionGetResult`

```
struct SessionsCompactionGetResult
```

**Line:** 5369 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        key: String,
        checkpoint: SessionCompactionCheckpoint)
```

**Line:** 5373 | **Kind:** method

### `SessionsCompactionBranchResult`

```
struct SessionsCompactionBranchResult
```

**Line:** 5391 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        sourcekey: String,
        key: String,
        sessionid: String,
        checkpoint: SessionCompactionCheckpoint,
        entry: [String: AnyCodable])
```

**Line:** 5398 | **Kind:** method

### `SessionsCompactionRestoreResult`

```
struct SessionsCompactionRestoreResult
```

**Line:** 5425 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        key: String,
        sessionid: String,
        checkpoint: SessionCompactionCheckpoint,
        entry: [String: AnyCodable])
```

**Line:** 5431 | **Kind:** method

### `SessionsRewindParams`

```
struct SessionsRewindParams
```

**Line:** 5455 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        agentid: String? = nil,
        entryid: String)
```

**Line:** 5459 | **Kind:** method

### `SessionsRewindResult`

```
struct SessionsRewindResult
```

**Line:** 5477 | **Kind:** struct

### `init`

```
public init(
        editortext: String? = nil)
```

**Line:** 5479 | **Kind:** method

### `SessionsForkParams`

```
struct SessionsForkParams
```

**Line:** 5491 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        agentid: String? = nil,
        entryid: String)
```

**Line:** 5495 | **Kind:** method

### `SessionsForkResult`

```
struct SessionsForkResult
```

**Line:** 5513 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        editortext: String? = nil)
```

**Line:** 5516 | **Kind:** method

### `SessionFileBrowserEntry`

```
struct SessionFileBrowserEntry
```

**Line:** 5531 | **Kind:** struct

### `init`

```
public init(
        path: String,
        name: String,
        kind: AnyCodable,
        sessionkind: SessionFileRelevance? = nil,
        size: Int? = nil,
        updatedatms: Int? = nil)
```

**Line:** 5538 | **Kind:** method

### `SessionFileBrowserResult`

```
struct SessionFileBrowserResult
```

**Line:** 5565 | **Kind:** struct

### `init`

```
public init(
        path: String,
        parentpath: String? = nil,
        search: String? = nil,
        entries: [SessionFileBrowserEntry],
        truncated: Bool? = nil)
```

**Line:** 5571 | **Kind:** method

### `SessionFileEntry`

```
struct SessionFileEntry
```

**Line:** 5595 | **Kind:** struct

### `init`

```
public init(
        path: String,
        workspacepath: String? = nil,
        name: String,
        kind: SessionFileKind,
        missing: Bool,
        size: Int? = nil,
        updatedatms: Int? = nil,
        content: String? = nil,
        hash: String? = nil)
```

**Line:** 5605 | **Kind:** method

### `SessionsFilesListParams`

```
struct SessionsFilesListParams
```

**Line:** 5641 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        agentid: String? = nil,
        path: String? = nil,
        search: String? = nil)
```

**Line:** 5646 | **Kind:** method

### `SessionsFilesListResult`

```
struct SessionsFilesListResult
```

**Line:** 5667 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        root: String? = nil,
        files: [SessionFileEntry],
        browser: SessionFileBrowserResult? = nil)
```

**Line:** 5672 | **Kind:** method

### `SessionsFilesGetParams`

```
struct SessionsFilesGetParams
```

**Line:** 5693 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        path: String,
        agentid: String? = nil)
```

**Line:** 5697 | **Kind:** method

### `SessionsFilesGetResult`

```
struct SessionsFilesGetResult
```

**Line:** 5715 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        root: String? = nil,
        file: SessionFileEntry)
```

**Line:** 5719 | **Kind:** method

### `SessionsFilesRevealParams`

```
struct SessionsFilesRevealParams
```

**Line:** 5737 | **Kind:** struct

### `init`

```
public init(
        key: String,
        agentid: String? = nil)
```

**Line:** 5740 | **Kind:** method

### `SessionsFilesRevealResult`

```
struct SessionsFilesRevealResult
```

**Line:** 5755 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        path: String? = nil,
        error: String? = nil)
```

**Line:** 5759 | **Kind:** method

### `SessionsFilesSetParams`

```
struct SessionsFilesSetParams
```

**Line:** 5777 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        path: String,
        agentid: String? = nil,
        content: String,
        expectedhash: String)
```

**Line:** 5783 | **Kind:** method

### `SessionsFilesSetResult`

```
struct SessionsFilesSetResult
```

**Line:** 5807 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        root: String? = nil,
        file: SessionFileEntry)
```

**Line:** 5811 | **Kind:** method

### `SessionDiffFile`

```
struct SessionDiffFile
```

**Line:** 5829 | **Kind:** struct

### `init`

```
public init(
        path: String,
        oldpath: String? = nil,
        status: SessionDiffFileStatus,
        additions: Int,
        deletions: Int,
        binary: Bool? = nil,
        untracked: Bool? = nil,
        patch: String? = nil,
        truncated: Bool? = nil)
```

**Line:** 5839 | **Kind:** method

### `SessionsDiffParams`

```
struct SessionsDiffParams
```

**Line:** 5875 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        agentid: String? = nil)
```

**Line:** 5878 | **Kind:** method

### `SessionsDiffResult`

```
struct SessionsDiffResult
```

**Line:** 5893 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        root: String? = nil,
        branch: String? = nil,
        baseref: String? = nil,
        files: [SessionDiffFile],
        additions: Int,
        deletions: Int,
        truncated: Bool? = nil,
        unavailablereason: AnyCodable? = nil)
```

**Line:** 5903 | **Kind:** method

### `SessionWorktreeInfo`

```
struct SessionWorktreeInfo
```

**Line:** 5939 | **Kind:** struct

### `init`

```
public init(
        id: String,
        path: String,
        branch: String)
```

**Line:** 5943 | **Kind:** method

### `SessionsCreateParams`

```
struct SessionsCreateParams
```

**Line:** 5961 | **Kind:** struct

### `init`

```
public init(
        key: String? = nil,
        agentid: String? = nil,
        label: String? = nil,
        model: String? = nil,
        thinkinglevel: String? = nil,
        catalogid: String? = nil,
        parentsessionkey: String? = nil,
        fork: Bool? = nil,
        emitcommandhooks: Bool? = nil,
        succeedsparent: Bool? = nil,
        task: String? = nil,
        message: String? = nil,
        attachments: [AnyCodable]? = nil,
        worktree: Bool? = nil,
        worktreebaseref: String? = nil,
        worktreename: String? = nil,
        execnode: String? = nil,
        cwd: String? = nil)
```

**Line:** 5980 | **Kind:** method

### `SessionsCreateResult`

```
struct SessionsCreateResult
```

**Line:** 6043 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        key: String,
        sessionid: String? = nil,
        entry: [String: AnyCodable]? = nil,
        runstarted: Bool? = nil,
        runerror: ErrorShape? = nil,
        worktree: SessionWorktreeInfo? = nil)
```

**Line:** 6051 | **Kind:** method

### `SessionsSendParams`

```
struct SessionsSendParams
```

**Line:** 6081 | **Kind:** struct

### `init`

```
public init(
        key: String,
        agentid: String? = nil,
        message: String,
        thinking: String? = nil,
        attachments: [AnyCodable]? = nil,
        timeoutms: Int? = nil,
        idempotencykey: String? = nil)
```

**Line:** 6089 | **Kind:** method

### `SessionsMessagesSubscribeParams`

```
struct SessionsMessagesSubscribeParams
```

**Line:** 6119 | **Kind:** struct

### `init`

```
public init(
        key: String,
        agentid: String? = nil,
        includeapprovals: Bool? = nil)
```

**Line:** 6123 | **Kind:** method

### `SessionsMessagesUnsubscribeParams`

```
struct SessionsMessagesUnsubscribeParams
```

**Line:** 6141 | **Kind:** struct

### `init`

```
public init(
        key: String,
        agentid: String? = nil)
```

**Line:** 6144 | **Kind:** method

### `SessionsAbortParams`

```
struct SessionsAbortParams
```

**Line:** 6159 | **Kind:** struct

### `init`

```
public init(
        key: String? = nil,
        runid: String? = nil,
        agentid: String? = nil)
```

**Line:** 6163 | **Kind:** method

### `SessionsPatchParams`

```
struct SessionsPatchParams
```

**Line:** 6181 | **Kind:** struct

### `init`

```
public init(
        key: String,
        agentid: String? = nil,
        label: AnyCodable? = nil,
        category: AnyCodable? = nil,
        icon: AnyCodable? = nil,
        archived: Bool? = nil,
        pinned: Bool? = nil,
        unread: Bool? = nil,
        thinkinglevel: AnyCodable? = nil,
        fastmode: AnyCodable? = nil,
        verboselevel: AnyCodable? = nil,
        tracelevel: AnyCodable? = nil,
        reasoninglevel: AnyCodable? = nil,
        responseusage: AnyCodable? = nil,
        elevatedlevel: AnyCodable? = nil,
        exechost: AnyCodable? = nil,
        execsecurity: AnyCodable? = nil,
        execask: AnyCodable? = nil,
        execnode: AnyCodable? = nil,
        model: AnyCodable? = nil,
        spawnedby: AnyCodable? = nil,
        spawnedworkspacedir: AnyCodable? = nil,
        spawnedcwd: AnyCodable? = nil,
        spawndepth: AnyCodable? = nil,
        subagentrole: AnyCodable? = nil,
        subagentcontrolscope: AnyCodable? = nil,
        inheritedtoolallow: AnyCodable? = nil,
        inheritedtooldeny: AnyCodable? = nil,
        sendpolicy: AnyCodable? = nil,
        groupactivation: AnyCodable? = nil)
```

**Line:** 6212 | **Kind:** method

### `SessionsPluginPatchParams`

```
struct SessionsPluginPatchParams
```

**Line:** 6311 | **Kind:** struct

### `init`

```
public init(
        key: String,
        pluginid: String,
        namespace: String,
        value: AnyCodable? = nil,
        unset: Bool? = nil)
```

**Line:** 6317 | **Kind:** method

### `SessionsPluginPatchResult`

```
struct SessionsPluginPatchResult
```

**Line:** 6341 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        key: String,
        value: AnyCodable? = nil)
```

**Line:** 6345 | **Kind:** method

### `SessionsResetParams`

```
struct SessionsResetParams
```

**Line:** 6363 | **Kind:** struct

### `init`

```
public init(
        key: String,
        agentid: String? = nil,
        reason: AnyCodable? = nil)
```

**Line:** 6367 | **Kind:** method

### `SessionsDeleteParams`

```
struct SessionsDeleteParams
```

**Line:** 6385 | **Kind:** struct

### `init`

```
public init(
        key: String,
        agentid: String? = nil,
        deletetranscript: Bool? = nil,
        expectedsessionid: String? = nil,
        expectedlifecyclerevision: String? = nil,
        expectedsessionupdatedat: Double? = nil,
        emitlifecyclehooks: Bool? = nil,
        archivedonly: Bool? = nil)
```

**Line:** 6394 | **Kind:** method

### `SessionGroup`

```
struct SessionGroup
```

**Line:** 6427 | **Kind:** struct

### `init`

```
public init(
        name: String,
        position: Int)
```

**Line:** 6430 | **Kind:** method

### `SessionsGroupsListParams`

```
struct SessionsGroupsListParams
```

**Line:** 6445 | **Kind:** struct

### `SessionsGroupsListResult`

```
struct SessionsGroupsListResult
```

**Line:** 6447 | **Kind:** struct

### `init`

```
public init(
        groups: [SessionGroup])
```

**Line:** 6449 | **Kind:** method

### `SessionsGroupsPutParams`

```
struct SessionsGroupsPutParams
```

**Line:** 6461 | **Kind:** struct

### `init`

```
public init(
        names: [String])
```

**Line:** 6463 | **Kind:** method

### `SessionsGroupsRenameParams`

```
struct SessionsGroupsRenameParams
```

**Line:** 6475 | **Kind:** struct

### `init`

```
public init(
        name: String,
        to: String)
```

**Line:** 6478 | **Kind:** method

### `SessionsGroupsDeleteParams`

```
struct SessionsGroupsDeleteParams
```

**Line:** 6493 | **Kind:** struct

### `init`

```
public init(
        name: String)
```

**Line:** 6495 | **Kind:** method

### `SessionsGroupsMutationResult`

```
struct SessionsGroupsMutationResult
```

**Line:** 6507 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        groups: [SessionGroup],
        updatedsessions: Int? = nil)
```

**Line:** 6511 | **Kind:** method

### `SessionsCompactParams`

```
struct SessionsCompactParams
```

**Line:** 6529 | **Kind:** struct

### `init`

```
public init(
        key: String,
        agentid: String? = nil,
        maxlines: Int? = nil)
```

**Line:** 6533 | **Kind:** method

### `SessionsUsageParams`

```
struct SessionsUsageParams
```

**Line:** 6551 | **Kind:** struct

### `init`

```
public init(
        key: String? = nil,
        agentid: String? = nil,
        agentscope: String? = nil,
        startdate: String? = nil,
        enddate: String? = nil,
        mode: AnyCodable? = nil,
        range: AnyCodable? = nil,
        groupby: AnyCodable? = nil,
        includehistorical: Bool? = nil,
        utcoffset: String? = nil,
        timezone: String? = nil,
        limit: Int? = nil,
        includecontextweight: Bool? = nil)
```

**Line:** 6565 | **Kind:** method

### `AuditActivityAgentRunV1`

```
struct AuditActivityAgentRunV1
```

**Line:** 6613 | **Kind:** struct

### `init`

```
public init(
        eventtype: String,
        schemaversion: Int,
        eventid: String,
        sequence: Int,
        sourcesequence: Int,
        occurredat: Int,
        redaction: String,
        actor: [String: AnyCodable],
        agentid: String,
        sessionkey: String? = nil,
        sessionid: String? = nil,
        runid: String,
        kind: String,
        action: AnyCodable,
        status: AnyCodable,
        errorcode: AnyCodable? = nil)
```

**Line:** 6630 | **Kind:** method

### `AuditActivityToolActionV1`

```
struct AuditActivityToolActionV1
```

**Line:** 6687 | **Kind:** struct

### `init`

```
public init(
        eventtype: String,
        schemaversion: Int,
        eventid: String,
        sequence: Int,
        sourcesequence: Int,
        occurredat: Int,
        redaction: String,
        actor: [String: AnyCodable],
        agentid: String,
        sessionkey: String? = nil,
        sessionid: String? = nil,
        runid: String,
        kind: String,
        toolcallid: String? = nil,
        toolname: String? = nil,
        action: AnyCodable,
        status: AnyCodable,
        errorcode: AnyCodable? = nil)
```

**Line:** 6706 | **Kind:** method

### `AuditActivityInboundMessageV1`

```
struct AuditActivityInboundMessageV1
```

**Line:** 6769 | **Kind:** struct

### `init`

```
public init(
        eventtype: String,
        schemaversion: Int,
        eventid: String,
        sequence: Int,
        sourcesequence: Int,
        occurredat: Int,
        redaction: String,
        channel: String,
        conversationkind: AnyCodable,
        durationms: Int? = nil,
        resultcount: Int? = nil,
        agentid: String? = nil,
        runid: String? = nil,
        accountref: String? = nil,
        conversationref: String? = nil,
        messageref: String? = nil,
        targetref: String? = nil,
        kind: String,
        action: String,
        direction: String,
        actor: AnyCodable,
        status: AnyCodable,
        outcome: AnyCodable,
        errorcode: String? = nil,
        reasoncode: AnyCodable? = nil)
```

**Line:** 6795 | **Kind:** method

### `AuditActivityOutboundMessageV1`

```
struct AuditActivityOutboundMessageV1
```

**Line:** 6879 | **Kind:** struct

### `init`

```
public init(
        eventtype: String,
        schemaversion: Int,
        eventid: String,
        sequence: Int,
        sourcesequence: Int,
        occurredat: Int,
        redaction: String,
        channel: String,
        conversationkind: AnyCodable,
        durationms: Int? = nil,
        resultcount: Int? = nil,
        agentid: String? = nil,
        runid: String? = nil,
        accountref: String? = nil,
        conversationref: String? = nil,
        messageref: String? = nil,
        targetref: String? = nil,
        kind: String,
        action: String,
        direction: String,
        actor: [String: AnyCodable],
        deliverykind: AnyCodable? = nil,
        status: AnyCodable,
        outcome: AnyCodable,
        errorcode: AnyCodable? = nil,
        reasoncode: AnyCodable? = nil,
        failurestage: AnyCodable? = nil)
```

**Line:** 6907 | **Kind:** method

### `AuditActivityListParams`

```
struct AuditActivityListParams
```

**Line:** 6997 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        sessionkey: String? = nil,
        runid: String? = nil,
        kind: AnyCodable? = nil,
        status: AnyCodable? = nil,
        direction: AnyCodable? = nil,
        channel: String? = nil,
        after: Int? = nil,
        before: Int? = nil,
        limit: Int? = nil,
        cursor: String? = nil)
```

**Line:** 7009 | **Kind:** method

### `AuditActivityListResult`

```
struct AuditActivityListResult
```

**Line:** 7051 | **Kind:** struct

### `init`

```
public init(
        events: [AuditActivityEventV1],
        nextcursor: String? = nil)
```

**Line:** 7054 | **Kind:** method

### `AuditEvent`

```
struct AuditEvent
```

**Line:** 7069 | **Kind:** struct

### `init`

```
public init(
        eventid: String,
        sequence: Int,
        sourcesequence: Int,
        occurredat: Int,
        kind: AnyCodable,
        action: AnyCodable,
        status: AnyCodable,
        errorcode: AnyCodable? = nil,
        actor: [String: AnyCodable],
        agentid: String,
        sessionkey: String? = nil,
        sessionid: String? = nil,
        runid: String,
        toolcallid: String? = nil,
        toolname: String? = nil,
        redaction: String)
```

**Line:** 7086 | **Kind:** method

### `AuditListParams`

```
struct AuditListParams
```

**Line:** 7143 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        sessionkey: String? = nil,
        runid: String? = nil,
        kind: AnyCodable? = nil,
        status: AnyCodable? = nil,
        after: Int? = nil,
        before: Int? = nil,
        limit: Int? = nil,
        cursor: String? = nil)
```

**Line:** 7153 | **Kind:** method

### `AuditListResult`

```
struct AuditListResult
```

**Line:** 7189 | **Kind:** struct

### `init`

```
public init(
        events: [AuditEvent],
        nextcursor: String? = nil)
```

**Line:** 7192 | **Kind:** method

### `TaskSuggestion`

```
struct TaskSuggestion
```

**Line:** 7207 | **Kind:** struct

### `init`

```
public init(
        id: String,
        title: String,
        prompt: String,
        tldr: String,
        cwd: String,
        sessionkey: String,
        agentid: String? = nil,
        createdat: Int)
```

**Line:** 7216 | **Kind:** method

### `TaskSuggestionsAcceptParams`

```
struct TaskSuggestionsAcceptParams
```

**Line:** 7249 | **Kind:** struct

### `init`

```
public init(
        taskid: String)
```

**Line:** 7251 | **Kind:** method

### `TaskSuggestionsAcceptResult`

```
struct TaskSuggestionsAcceptResult
```

**Line:** 7263 | **Kind:** struct

### `init`

```
public init(
        taskid: String,
        key: String)
```

**Line:** 7266 | **Kind:** method

### `TaskSuggestionsCreateParams`

```
struct TaskSuggestionsCreateParams
```

**Line:** 7281 | **Kind:** struct

### `init`

```
public init(
        title: String,
        prompt: String,
        tldr: String,
        cwd: String,
        sessionkey: String,
        agentid: String? = nil)
```

**Line:** 7288 | **Kind:** method

### `TaskSuggestionsCreateResult`

```
struct TaskSuggestionsCreateResult
```

**Line:** 7315 | **Kind:** struct

### `init`

```
public init(
        taskid: String,
        suggestion: TaskSuggestion)
```

**Line:** 7318 | **Kind:** method

### `TaskSuggestionsDismissParams`

```
struct TaskSuggestionsDismissParams
```

**Line:** 7333 | **Kind:** struct

### `init`

```
public init(
        taskid: String,
        reason: String? = nil)
```

**Line:** 7336 | **Kind:** method

### `TaskSuggestionsDismissResult`

```
struct TaskSuggestionsDismissResult
```

**Line:** 7351 | **Kind:** struct

### `init`

```
public init(
        taskid: String,
        dismissed: Bool)
```

**Line:** 7354 | **Kind:** method

### `TaskSuggestionsListParams`

```
struct TaskSuggestionsListParams
```

**Line:** 7369 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String? = nil,
        agentid: String? = nil)
```

**Line:** 7372 | **Kind:** method

### `TaskSuggestionsListResult`

```
struct TaskSuggestionsListResult
```

**Line:** 7387 | **Kind:** struct

### `init`

```
public init(
        suggestions: [TaskSuggestion])
```

**Line:** 7389 | **Kind:** method

### `TaskSummary`

```
struct TaskSummary
```

**Line:** 7401 | **Kind:** struct

### `init`

```
public init(
        id: String,
        kind: String? = nil,
        runtime: String? = nil,
        status: AnyCodable,
        title: String? = nil,
        agentid: String? = nil,
        sessionkey: String? = nil,
        childsessionkey: String? = nil,
        ownerkey: String? = nil,
        runid: String? = nil,
        taskid: String? = nil,
        flowid: String? = nil,
        parenttaskid: String? = nil,
        sourceid: String? = nil,
        createdat: AnyCodable? = nil,
        updatedat: AnyCodable? = nil,
        startedat: AnyCodable? = nil,
        endedat: AnyCodable? = nil,
        toolusecount: Int? = nil,
        lasttoolname: String? = nil,
        progresssummary: String? = nil,
        terminalsummary: String? = nil,
        error: String? = nil,
        prompt: String? = nil)
```

**Line:** 7426 | **Kind:** method

### `TasksListParams`

```
struct TasksListParams
```

**Line:** 7507 | **Kind:** struct

### `init`

```
public init(
        status: AnyCodable? = nil,
        agentid: String? = nil,
        sessionkey: String? = nil,
        limit: Int? = nil,
        cursor: String? = nil)
```

**Line:** 7513 | **Kind:** method

### `TasksListResult`

```
struct TasksListResult
```

**Line:** 7537 | **Kind:** struct

### `init`

```
public init(
        tasks: [TaskSummary],
        nextcursor: String? = nil)
```

**Line:** 7540 | **Kind:** method

### `TasksGetParams`

```
struct TasksGetParams
```

**Line:** 7555 | **Kind:** struct

### `init`

```
public init(
        taskid: String)
```

**Line:** 7557 | **Kind:** method

### `TasksGetResult`

```
struct TasksGetResult
```

**Line:** 7569 | **Kind:** struct

### `init`

```
public init(
        task: TaskSummary)
```

**Line:** 7571 | **Kind:** method

### `TasksCancelParams`

```
struct TasksCancelParams
```

**Line:** 7583 | **Kind:** struct

### `init`

```
public init(
        taskid: String,
        reason: String? = nil)
```

**Line:** 7586 | **Kind:** method

### `TasksCancelResult`

```
struct TasksCancelResult
```

**Line:** 7601 | **Kind:** struct

### `init`

```
public init(
        found: Bool,
        cancelled: Bool,
        reason: String? = nil,
        task: TaskSummary? = nil)
```

**Line:** 7606 | **Kind:** method

### `ConfigGetParams`

```
struct ConfigGetParams
```

**Line:** 7627 | **Kind:** struct

### `ConfigSetParams`

```
struct ConfigSetParams
```

**Line:** 7629 | **Kind:** struct

### `init`

```
public init(
        raw: String,
        basehash: String? = nil)
```

**Line:** 7632 | **Kind:** method

### `ConfigApplyParams`

```
struct ConfigApplyParams
```

**Line:** 7647 | **Kind:** struct

### `init`

```
public init(
        raw: String,
        basehash: String? = nil,
        sessionkey: String? = nil,
        deliverycontext: [String: AnyCodable]? = nil,
        note: String? = nil,
        restartdelayms: Int? = nil)
```

**Line:** 7654 | **Kind:** method

### `ConfigPatchParams`

```
struct ConfigPatchParams
```

**Line:** 7681 | **Kind:** struct

### `init`

```
public init(
        raw: String,
        basehash: String? = nil,
        sessionkey: String? = nil,
        deliverycontext: [String: AnyCodable]? = nil,
        note: String? = nil,
        restartdelayms: Int? = nil,
        replacepaths: [String]? = nil)
```

**Line:** 7689 | **Kind:** method

### `ConfigSchemaParams`

```
struct ConfigSchemaParams
```

**Line:** 7719 | **Kind:** struct

### `ConfigSchemaLookupParams`

```
struct ConfigSchemaLookupParams
```

**Line:** 7721 | **Kind:** struct

### `init`

```
public init(
        path: String)
```

**Line:** 7723 | **Kind:** method

### `ConfigSchemaResponse`

```
struct ConfigSchemaResponse
```

**Line:** 7735 | **Kind:** struct

### `init`

```
public init(
        schema: AnyCodable,
        uihints: [String: AnyCodable],
        version: String,
        generatedat: String)
```

**Line:** 7740 | **Kind:** method

### `ConfigSchemaLookupResult`

```
struct ConfigSchemaLookupResult
```

**Line:** 7761 | **Kind:** struct

### `init`

```
public init(
        path: String,
        schema: AnyCodable,
        reloadkind: AnyCodable? = nil,
        hint: [String: AnyCodable]? = nil,
        hintpath: String? = nil,
        children: [[String: AnyCodable]])
```

**Line:** 7768 | **Kind:** method

### `SystemAgentChatParams`

```
struct SystemAgentChatParams
```

**Line:** 7795 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        message: String? = nil,
        welcomevariant: AnyCodable? = nil,
        reset: Bool? = nil,
        delegation: [String: AnyCodable]? = nil)
```

**Line:** 7801 | **Kind:** method

### `SystemAgentChatResult`

```
struct SystemAgentChatResult
```

**Line:** 7825 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        reply: String,
        sensitive: Bool? = nil,
        wizardinputpending: Bool? = nil,
        action: AnyCodable,
        agentdraft: String? = nil,
        agentid: String? = nil,
        needsapproval: Bool? = nil,
        proposalid: String? = nil,
        question: [String: AnyCodable]? = nil)
```

**Line:** 7836 | **Kind:** method

### `SystemAgentChatHistoryParams`

```
struct SystemAgentChatHistoryParams
```

**Line:** 7875 | **Kind:** struct

### `init`

```
public init(
        limit: Int? = nil)
```

**Line:** 7877 | **Kind:** method

### `SystemAgentChatHistoryTurn`

```
struct SystemAgentChatHistoryTurn
```

**Line:** 7889 | **Kind:** struct

### `init`

```
public init(
        role: AnyCodable,
        text: String,
        at: Double)
```

**Line:** 7893 | **Kind:** method

### `SystemAgentChatHistoryResult`

```
struct SystemAgentChatHistoryResult
```

**Line:** 7911 | **Kind:** struct

### `init`

```
public init(
        turns: [SystemAgentChatHistoryTurn])
```

**Line:** 7913 | **Kind:** method

### `SystemChangeEntry`

```
struct SystemChangeEntry
```

**Line:** 7925 | **Kind:** struct

### `init`

```
public init(
        id: String,
        at: Double,
        kind: SystemChangeKind,
        source: SystemChangeSource,
        summary: String,
        changedpaths: [String]? = nil,
        invalid: Bool? = nil,
        opaquechange: Bool? = nil)
```

**Line:** 7934 | **Kind:** method

### `SystemChangesListParams`

```
struct SystemChangesListParams
```

**Line:** 7967 | **Kind:** struct

### `init`

```
public init(
        limit: Int? = nil,
        beforecursor: String? = nil)
```

**Line:** 7970 | **Kind:** method

### `SystemChangesListResult`

```
struct SystemChangesListResult
```

**Line:** 7985 | **Kind:** struct

### `init`

```
public init(
        entries: [SystemChangeEntry],
        nextcursor: String? = nil)
```

**Line:** 7988 | **Kind:** method

### `SystemAgentSetupDetectParams`

```
struct SystemAgentSetupDetectParams
```

**Line:** 8003 | **Kind:** struct

### `SystemAgentSetupDetectResult`

```
struct SystemAgentSetupDetectResult
```

**Line:** 8005 | **Kind:** struct

### `init`

```
public init(
        candidates: [[String: AnyCodable]],
        unavailablecandidates: [[String: AnyCodable]]? = nil,
        manualproviders: [[String: AnyCodable]],
        authoptions: [[String: AnyCodable]]? = nil,
        recommendedinstalls: [[String: AnyCodable]]? = nil,
        workspace: String,
        codexappserverdetected: Bool? = nil,
        configuredmodel: String? = nil,
        setupcomplete: Bool)
```

**Line:** 8015 | **Kind:** method

### `SystemAgentSetupVerifyParams`

```
struct SystemAgentSetupVerifyParams
```

**Line:** 8051 | **Kind:** struct

### `SystemAgentSetupActivateParams`

```
struct SystemAgentSetupActivateParams
```

**Line:** 8053 | **Kind:** struct

### `init`

```
public init(
        kind: AnyCodable,
        modelref: String? = nil,
        authchoice: String? = nil,
        apikey: String? = nil,
        workspace: String? = nil)
```

**Line:** 8059 | **Kind:** method

### `SystemAgentSetupActivateResult`

```
struct SystemAgentSetupActivateResult
```

**Line:** 8083 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        modelref: String? = nil,
        latencyms: Double? = nil,
        lines: [String]? = nil,
        status: AnyCodable? = nil,
        error: String? = nil)
```

**Line:** 8090 | **Kind:** method

### `SystemAgentSetupAuthStartParams`

```
struct SystemAgentSetupAuthStartParams
```

**Line:** 8117 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        authchoice: String,
        workspace: String? = nil)
```

**Line:** 8121 | **Kind:** method

### `SystemAgentSetupAuthStartResult`

```
struct SystemAgentSetupAuthStartResult
```

**Line:** 8139 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        done: Bool,
        step: WizardStep? = nil,
        status: AnyCodable? = nil,
        error: String? = nil,
        channels: [String]? = nil,
        accounts: [[String: AnyCodable]]? = nil)
```

**Line:** 8147 | **Kind:** method

### `WizardStartParams`

```
struct WizardStartParams
```

**Line:** 8177 | **Kind:** struct

### `init`

```
public init(
        mode: AnyCodable? = nil,
        workspace: String? = nil,
        flow: AnyCodable? = nil,
        channel: String? = nil)
```

**Line:** 8182 | **Kind:** method

### `WizardNextParams`

```
struct WizardNextParams
```

**Line:** 8203 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        answer: [String: AnyCodable]? = nil)
```

**Line:** 8206 | **Kind:** method

### `WizardCancelParams`

```
struct WizardCancelParams
```

**Line:** 8221 | **Kind:** struct

### `init`

```
public init(
        sessionid: String)
```

**Line:** 8223 | **Kind:** method

### `WizardStatusParams`

```
struct WizardStatusParams
```

**Line:** 8235 | **Kind:** struct

### `init`

```
public init(
        sessionid: String)
```

**Line:** 8237 | **Kind:** method

### `WizardStep`

```
struct WizardStep
```

**Line:** 8249 | **Kind:** struct

### `init`

```
public init(
        id: String,
        type: AnyCodable,
        title: String? = nil,
        message: String? = nil,
        format: AnyCodable? = nil,
        options: [[String: AnyCodable]]? = nil,
        initialvalue: AnyCodable? = nil,
        placeholder: String? = nil,
        sensitive: Bool? = nil,
        executor: AnyCodable? = nil,
        externalurl: String? = nil,
        devicecode: [String: AnyCodable]? = nil)
```

**Line:** 8262 | **Kind:** method

### `WizardNextResult`

```
struct WizardNextResult
```

**Line:** 8307 | **Kind:** struct

### `init`

```
public init(
        done: Bool,
        step: WizardStep? = nil,
        status: AnyCodable? = nil,
        error: String? = nil,
        channels: [String]? = nil,
        accounts: [[String: AnyCodable]]? = nil)
```

**Line:** 8314 | **Kind:** method

### `WizardStartResult`

```
struct WizardStartResult
```

**Line:** 8341 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        done: Bool,
        step: WizardStep? = nil,
        status: AnyCodable? = nil,
        error: String? = nil,
        channels: [String]? = nil,
        accounts: [[String: AnyCodable]]? = nil)
```

**Line:** 8349 | **Kind:** method

### `WizardStatusResult`

```
struct WizardStatusResult
```

**Line:** 8379 | **Kind:** struct

### `init`

```
public init(
        status: AnyCodable,
        error: String? = nil)
```

**Line:** 8382 | **Kind:** method

### `TalkModeParams`

```
struct TalkModeParams
```

**Line:** 8397 | **Kind:** struct

### `init`

```
public init(
        enabled: Bool,
        phase: String? = nil)
```

**Line:** 8400 | **Kind:** method

### `TalkEvent`

```
struct TalkEvent
```

**Line:** 8415 | **Kind:** struct

### `init`

```
public init(
        id: String,
        type: AnyCodable,
        sessionid: String,
        turnid: String? = nil,
        captureid: String? = nil,
        seq: Int,
        timestamp: String,
        mode: AnyCodable,
        transport: AnyCodable,
        brain: AnyCodable,
        provider: String? = nil,
        final: Bool? = nil,
        callid: String? = nil,
        itemid: String? = nil,
        parentid: String? = nil,
        payload: AnyCodable)
```

**Line:** 8432 | **Kind:** method

### `TalkCatalogParams`

```
struct TalkCatalogParams
```

**Line:** 8489 | **Kind:** struct

### `TalkCatalogResult`

```
struct TalkCatalogResult
```

**Line:** 8491 | **Kind:** struct

### `init`

```
public init(
        modes: [AnyCodable],
        transports: [AnyCodable],
        brains: [AnyCodable],
        speech: [String: AnyCodable],
        transcription: [String: AnyCodable],
        realtime: [String: AnyCodable])
```

**Line:** 8498 | **Kind:** method

### `TalkClientCreateParams`

```
struct TalkClientCreateParams
```

**Line:** 8525 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String? = nil,
        voicesessionid: String? = nil,
        provider: String? = nil,
        model: String? = nil,
        voice: String? = nil,
        vadthreshold: Double? = nil,
        silencedurationms: Int? = nil,
        prefixpaddingms: Int? = nil,
        reasoningeffort: String? = nil,
        mode: AnyCodable? = nil,
        transport: AnyCodable? = nil,
        brain: AnyCodable? = nil,
        capabilities: [AnyCodable]? = nil)
```

**Line:** 8539 | **Kind:** method

### `TalkClientCloseParams`

```
struct TalkClientCloseParams
```

**Line:** 8587 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        voicesessionid: String)
```

**Line:** 8590 | **Kind:** method

### `TalkClientMutationResult`

```
struct TalkClientMutationResult
```

**Line:** 8605 | **Kind:** struct

### `init`

```
public init(
        ok: Bool)
```

**Line:** 8607 | **Kind:** method

### `TalkClientSteerParams`

```
struct TalkClientSteerParams
```

**Line:** 8619 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        text: String,
        mode: AnyCodable? = nil)
```

**Line:** 8623 | **Kind:** method

### `TalkAgentControlResult`

```
struct TalkAgentControlResult
```

**Line:** 8641 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        mode: AnyCodable,
        sessionkey: String,
        sessionid: String? = nil,
        active: Bool,
        queued: Bool? = nil,
        aborted: Bool? = nil,
        target: AnyCodable? = nil,
        reason: String? = nil,
        message: String,
        speak: Bool,
        show: Bool,
        suppress: Bool,
        providerresult: [String: AnyCodable]? = nil,
        enqueuedatms: Double? = nil,
        deliveredatms: Double? = nil)
```

**Line:** 8658 | **Kind:** method

### `TalkClientToolCallParams`

```
struct TalkClientToolCallParams
```

**Line:** 8715 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        voicesessionid: String? = nil,
        callid: String,
        name: String,
        args: AnyCodable? = nil,
        relaysessionid: String? = nil)
```

**Line:** 8722 | **Kind:** method

### `TalkClientToolCallResult`

```
struct TalkClientToolCallResult
```

**Line:** 8749 | **Kind:** struct

### `init`

```
public init(
        runid: String,
        idempotencykey: String)
```

**Line:** 8752 | **Kind:** method

### `TalkClientTranscriptParams`

```
struct TalkClientTranscriptParams
```

**Line:** 8767 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        voicesessionid: String,
        entryid: String,
        role: AnyCodable,
        text: String,
        timestamp: Double? = nil)
```

**Line:** 8774 | **Kind:** method

### `TalkConfigParams`

```
struct TalkConfigParams
```

**Line:** 8801 | **Kind:** struct

### `init`

```
public init(
        includesecrets: Bool? = nil)
```

**Line:** 8803 | **Kind:** method

### `TalkConfigResult`

```
struct TalkConfigResult
```

**Line:** 8815 | **Kind:** struct

### `init`

```
public init(
        config: [String: AnyCodable])
```

**Line:** 8817 | **Kind:** method

### `TalkSessionAppendAudioParams`

```
struct TalkSessionAppendAudioParams
```

**Line:** 8829 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        audiobase64: String,
        timestamp: Double? = nil)
```

**Line:** 8833 | **Kind:** method

### `TalkSessionAcknowledgeMarkParams`

```
struct TalkSessionAcknowledgeMarkParams
```

**Line:** 8851 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        markname: String)
```

**Line:** 8854 | **Kind:** method

### `TalkSessionCancelOutputParams`

```
struct TalkSessionCancelOutputParams
```

**Line:** 8869 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        turnid: String? = nil,
        reason: String? = nil)
```

**Line:** 8873 | **Kind:** method

### `TalkSessionCancelTurnParams`

```
struct TalkSessionCancelTurnParams
```

**Line:** 8891 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        turnid: String? = nil,
        reason: String? = nil)
```

**Line:** 8895 | **Kind:** method

### `TalkSessionCreateParams`

```
struct TalkSessionCreateParams
```

**Line:** 8913 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String? = nil,
        spawnedby: String? = nil,
        provider: String? = nil,
        model: String? = nil,
        voice: String? = nil,
        language: String? = nil,
        vadthreshold: Double? = nil,
        silencedurationms: Int? = nil,
        prefixpaddingms: Int? = nil,
        reasoningeffort: String? = nil,
        mode: AnyCodable? = nil,
        transport: AnyCodable? = nil,
        brain: AnyCodable? = nil,
        ttlms: Int? = nil)
```

**Line:** 8928 | **Kind:** method

### `TalkSessionCreateResult`

```
struct TalkSessionCreateResult
```

**Line:** 8979 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        provider: String? = nil,
        mode: AnyCodable,
        transport: AnyCodable,
        brain: AnyCodable,
        relaysessionid: String? = nil,
        transcriptionsessionid: String? = nil,
        handoffid: String? = nil,
        roomid: String? = nil,
        roomurl: String? = nil,
        token: String? = nil,
        audio: AnyCodable? = nil,
        model: String? = nil,
        voice: String? = nil,
        expiresat: Double? = nil)
```

**Line:** 8995 | **Kind:** method

### `TalkSessionJoinParams`

```
struct TalkSessionJoinParams
```

**Line:** 9049 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        token: String)
```

**Line:** 9052 | **Kind:** method

### `TalkSessionJoinResult`

```
struct TalkSessionJoinResult
```

**Line:** 9067 | **Kind:** struct

### `init`

```
public init(
        id: String,
        roomid: String,
        roomurl: String,
        sessionkey: String,
        sessionid: String? = nil,
        channel: String? = nil,
        target: String? = nil,
        provider: String? = nil,
        model: String? = nil,
        voice: String? = nil,
        mode: AnyCodable,
        transport: AnyCodable,
        brain: AnyCodable,
        createdat: Double,
        expiresat: Double,
        room: [String: AnyCodable])
```

**Line:** 9084 | **Kind:** method

### `TalkSessionTurnParams`

```
struct TalkSessionTurnParams
```

**Line:** 9141 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        turnid: String? = nil)
```

**Line:** 9144 | **Kind:** method

### `TalkSessionTurnResult`

```
struct TalkSessionTurnResult
```

**Line:** 9159 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        turnid: String? = nil,
        events: [TalkEvent]? = nil)
```

**Line:** 9163 | **Kind:** method

### `TalkSessionSteerParams`

```
struct TalkSessionSteerParams
```

**Line:** 9181 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        sessionkey: String? = nil,
        text: String,
        mode: AnyCodable? = nil)
```

**Line:** 9186 | **Kind:** method

### `TalkSessionSubmitToolResultParams`

```
struct TalkSessionSubmitToolResultParams
```

**Line:** 9207 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        callid: String,
        result: AnyCodable,
        options: [String: AnyCodable]? = nil)
```

**Line:** 9212 | **Kind:** method

### `TalkSessionCloseParams`

```
struct TalkSessionCloseParams
```

**Line:** 9233 | **Kind:** struct

### `init`

```
public init(
        sessionid: String)
```

**Line:** 9235 | **Kind:** method

### `TalkSessionOkResult`

```
struct TalkSessionOkResult
```

**Line:** 9247 | **Kind:** struct

### `init`

```
public init(
        ok: Bool)
```

**Line:** 9249 | **Kind:** method

### `TalkSpeakParams`

```
struct TalkSpeakParams
```

**Line:** 9261 | **Kind:** struct

### `init`

```
public init(
        text: String,
        voiceid: String? = nil,
        modelid: String? = nil,
        outputformat: String? = nil,
        speed: Double? = nil,
        ratewpm: Int? = nil,
        stability: Double? = nil,
        similarity: Double? = nil,
        style: Double? = nil,
        speakerboost: Bool? = nil,
        seed: Int? = nil,
        normalize: String? = nil,
        language: String? = nil,
        latencytier: Int? = nil)
```

**Line:** 9276 | **Kind:** method

### `TalkSpeakResult`

```
struct TalkSpeakResult
```

**Line:** 9327 | **Kind:** struct

### `init`

```
public init(
        audiobase64: String,
        provider: String,
        outputformat: String? = nil,
        voicecompatible: Bool? = nil,
        mimetype: String? = nil,
        fileextension: String? = nil)
```

**Line:** 9334 | **Kind:** method

### `TtsSpeakParams`

```
struct TtsSpeakParams
```

**Line:** 9361 | **Kind:** struct

### `init`

```
public init(
        text: String)
```

**Line:** 9363 | **Kind:** method

### `TtsSpeakResult`

```
struct TtsSpeakResult
```

**Line:** 9375 | **Kind:** struct

### `init`

```
public init(
        audiobase64: String,
        provider: String,
        outputformat: String? = nil,
        mimetype: String? = nil,
        fileextension: String? = nil)
```

**Line:** 9381 | **Kind:** method

### `ChannelsStatusParams`

```
struct ChannelsStatusParams
```

**Line:** 9405 | **Kind:** struct

### `init`

```
public init(
        probe: Bool? = nil,
        timeoutms: Int? = nil,
        channel: String? = nil)
```

**Line:** 9409 | **Kind:** method

### `ChannelsStatusResult`

```
struct ChannelsStatusResult
```

**Line:** 9427 | **Kind:** struct

### `init`

```
public init(
        ts: Int,
        channelorder: [String],
        channellabels: [String: AnyCodable],
        channeldetaillabels: [String: AnyCodable]? = nil,
        channelsystemimages: [String: AnyCodable]? = nil,
        channelmeta: [[String: AnyCodable]]? = nil,
        channels: [String: AnyCodable],
        channelaccounts: [String: AnyCodable],
        channeldefaultaccountid: [String: AnyCodable],
        eventloop: [String: AnyCodable]? = nil,
        partial: Bool? = nil,
        warnings: [String]? = nil)
```

**Line:** 9440 | **Kind:** method

### `ChannelsStartParams`

```
struct ChannelsStartParams
```

**Line:** 9485 | **Kind:** struct

### `init`

```
public init(
        channel: String,
        accountid: String? = nil)
```

**Line:** 9488 | **Kind:** method

### `ChannelsStopParams`

```
struct ChannelsStopParams
```

**Line:** 9503 | **Kind:** struct

### `init`

```
public init(
        channel: String,
        accountid: String? = nil)
```

**Line:** 9506 | **Kind:** method

### `ChannelsLogoutParams`

```
struct ChannelsLogoutParams
```

**Line:** 9521 | **Kind:** struct

### `init`

```
public init(
        channel: String,
        accountid: String? = nil)
```

**Line:** 9524 | **Kind:** method

### `WebLoginStartParams`

```
struct WebLoginStartParams
```

**Line:** 9539 | **Kind:** struct

### `init`

```
public init(
        force: Bool? = nil,
        timeoutms: Int? = nil,
        verbose: Bool? = nil,
        accountid: String? = nil)
```

**Line:** 9544 | **Kind:** method

### `WebLoginWaitParams`

```
struct WebLoginWaitParams
```

**Line:** 9565 | **Kind:** struct

### `init`

```
public init(
        timeoutms: Int? = nil,
        accountid: String? = nil,
        currentqrdataurl: String? = nil)
```

**Line:** 9569 | **Kind:** method

### `AgentSummary`

```
struct AgentSummary
```

**Line:** 9587 | **Kind:** struct

### `init`

```
public init(
        id: String,
        name: String? = nil,
        identity: [String: AnyCodable]? = nil,
        workspace: String? = nil,
        workspacegit: Bool? = nil,
        model: [String: AnyCodable]? = nil,
        agentruntime: [String: AnyCodable]? = nil,
        thinkinglevels: [[String: AnyCodable]]? = nil,
        thinkingoptions: [String]? = nil,
        thinkingdefault: String? = nil)
```

**Line:** 9598 | **Kind:** method

### `AgentsCreateParams`

```
struct AgentsCreateParams
```

**Line:** 9637 | **Kind:** struct

### `init`

```
public init(
        name: String,
        workspace: String? = nil,
        model: String? = nil,
        emoji: String? = nil,
        avatar: String? = nil)
```

**Line:** 9643 | **Kind:** method

### `AgentsCreateResult`

```
struct AgentsCreateResult
```

**Line:** 9667 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        agentid: String,
        name: String,
        workspace: String,
        model: String? = nil)
```

**Line:** 9673 | **Kind:** method

### `AgentsUpdateParams`

```
struct AgentsUpdateParams
```

**Line:** 9697 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        name: String? = nil,
        workspace: String? = nil,
        modelvalue: AnyCodable?,
        emoji: String? = nil,
        avatar: String? = nil)
```

**Line:** 9705 | **Kind:** method

### `init`

```
public init(
        agentid: String,
        name: String? = nil,
        workspace: String? = nil,
        model: String? = nil,
        emoji: String? = nil,
        avatar: String? = nil)
```

**Line:** 9721 | **Kind:** method

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 9747 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 9759 | **Kind:** fn

### `AgentsUpdateResult`

```
struct AgentsUpdateResult
```

**Line:** 9771 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        agentid: String)
```

**Line:** 9774 | **Kind:** method

### `AgentsDeleteParams`

```
struct AgentsDeleteParams
```

**Line:** 9789 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        deletefiles: Bool? = nil)
```

**Line:** 9792 | **Kind:** method

### `AgentsDeleteResult`

```
struct AgentsDeleteResult
```

**Line:** 9807 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        agentid: String,
        removedbindings: Int,
        removed: [[String: AnyCodable]]? = nil,
        failed: [[String: AnyCodable]]? = nil)
```

**Line:** 9813 | **Kind:** method

### `AgentsFileEntry`

```
struct AgentsFileEntry
```

**Line:** 9837 | **Kind:** struct

### `init`

```
public init(
        name: String,
        path: String,
        missing: Bool,
        size: Int? = nil,
        updatedatms: Int? = nil,
        content: String? = nil)
```

**Line:** 9844 | **Kind:** method

### `AgentsFilesListParams`

```
struct AgentsFilesListParams
```

**Line:** 9871 | **Kind:** struct

### `init`

```
public init(
        agentid: String)
```

**Line:** 9873 | **Kind:** method

### `AgentsFilesListResult`

```
struct AgentsFilesListResult
```

**Line:** 9885 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        workspace: String,
        files: [AgentsFileEntry])
```

**Line:** 9889 | **Kind:** method

### `AgentsFilesGetParams`

```
struct AgentsFilesGetParams
```

**Line:** 9907 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        name: String)
```

**Line:** 9910 | **Kind:** method

### `AgentsFilesGetResult`

```
struct AgentsFilesGetResult
```

**Line:** 9925 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        workspace: String,
        file: AgentsFileEntry)
```

**Line:** 9929 | **Kind:** method

### `AgentsFilesSetParams`

```
struct AgentsFilesSetParams
```

**Line:** 9947 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        name: String,
        content: String)
```

**Line:** 9951 | **Kind:** method

### `AgentsFilesSetResult`

```
struct AgentsFilesSetResult
```

**Line:** 9969 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        agentid: String,
        workspace: String,
        file: AgentsFileEntry)
```

**Line:** 9974 | **Kind:** method

### `AgentsWorkspaceEntry`

```
struct AgentsWorkspaceEntry
```

**Line:** 9995 | **Kind:** struct

### `init`

```
public init(
        path: String,
        name: String,
        kind: AnyCodable,
        size: Int? = nil,
        updatedatms: Int? = nil)
```

**Line:** 10001 | **Kind:** method

### `AgentsWorkspaceFile`

```
struct AgentsWorkspaceFile
```

**Line:** 10025 | **Kind:** struct

### `init`

```
public init(
        path: String,
        name: String,
        size: Int,
        updatedatms: Int,
        mimetype: String,
        encoding: AnyCodable,
        content: String)
```

**Line:** 10033 | **Kind:** method

### `AgentsWorkspaceListParams`

```
struct AgentsWorkspaceListParams
```

**Line:** 10063 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        path: String? = nil,
        offset: Int? = nil,
        limit: Int? = nil)
```

**Line:** 10068 | **Kind:** method

### `AgentsWorkspaceListResult`

```
struct AgentsWorkspaceListResult
```

**Line:** 10089 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        path: String,
        parentpath: String? = nil,
        entries: [AgentsWorkspaceEntry],
        totalentries: Int,
        offset: Int)
```

**Line:** 10096 | **Kind:** method

### `AgentsWorkspaceGetParams`

```
struct AgentsWorkspaceGetParams
```

**Line:** 10123 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        path: String)
```

**Line:** 10126 | **Kind:** method

### `AgentsWorkspaceGetResult`

```
struct AgentsWorkspaceGetResult
```

**Line:** 10141 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        file: AgentsWorkspaceFile)
```

**Line:** 10144 | **Kind:** method

### `ArtifactSummary`

```
struct ArtifactSummary
```

**Line:** 10159 | **Kind:** struct

### `init`

```
public init(
        id: String,
        type: String,
        title: String,
        mimetype: String? = nil,
        sizebytes: Int? = nil,
        sessionkey: String? = nil,
        runid: String? = nil,
        taskid: String? = nil,
        messageseq: Int? = nil,
        source: String? = nil,
        download: [String: AnyCodable])
```

**Line:** 10171 | **Kind:** method

### `ArtifactsListParams`

```
struct ArtifactsListParams
```

**Line:** 10213 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String? = nil,
        runid: String? = nil,
        taskid: String? = nil,
        agentid: String? = nil)
```

**Line:** 10218 | **Kind:** method

### `ArtifactsListResult`

```
struct ArtifactsListResult
```

**Line:** 10239 | **Kind:** struct

### `init`

```
public init(
        artifacts: [ArtifactSummary])
```

**Line:** 10241 | **Kind:** method

### `ArtifactsGetParams`

```
struct ArtifactsGetParams
```

**Line:** 10253 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String? = nil,
        runid: String? = nil,
        taskid: String? = nil,
        agentid: String? = nil,
        artifactid: String)
```

**Line:** 10259 | **Kind:** method

### `ArtifactsGetResult`

```
struct ArtifactsGetResult
```

**Line:** 10283 | **Kind:** struct

### `init`

```
public init(
        artifact: ArtifactSummary)
```

**Line:** 10285 | **Kind:** method

### `ArtifactsDownloadParams`

```
struct ArtifactsDownloadParams
```

**Line:** 10297 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String? = nil,
        runid: String? = nil,
        taskid: String? = nil,
        agentid: String? = nil,
        artifactid: String)
```

**Line:** 10303 | **Kind:** method

### `ArtifactsDownloadResult`

```
struct ArtifactsDownloadResult
```

**Line:** 10327 | **Kind:** struct

### `init`

```
public init(
        artifact: ArtifactSummary,
        encoding: String? = nil,
        data: String? = nil,
        url: String? = nil)
```

**Line:** 10332 | **Kind:** method

### `AgentsListParams`

```
struct AgentsListParams
```

**Line:** 10353 | **Kind:** struct

### `AgentsListResult`

```
struct AgentsListResult
```

**Line:** 10355 | **Kind:** struct

### `init`

```
public init(
        defaultid: String,
        mainkey: String,
        scope: AnyCodable,
        agents: [AgentSummary])
```

**Line:** 10360 | **Kind:** method

### `ModelChoice`

```
struct ModelChoice
```

**Line:** 10381 | **Kind:** struct

### `init`

```
public init(
        id: String,
        name: String,
        provider: String,
        alias: String? = nil,
        available: Bool? = nil,
        contextwindow: Int? = nil,
        reasoning: Bool? = nil,
        agentruntime: [String: AnyCodable]? = nil,
        apikeysupported: Bool? = nil,
        input: [AnyCodable]? = nil)
```

**Line:** 10392 | **Kind:** method

### `ModelsListParams`

```
struct ModelsListParams
```

**Line:** 10431 | **Kind:** struct

### `init`

```
public init(
        includeprovidercapabilities: Bool? = nil,
        view: AnyCodable? = nil)
```

**Line:** 10434 | **Kind:** method

### `ModelsListResult`

```
struct ModelsListResult
```

**Line:** 10449 | **Kind:** struct

### `init`

```
public init(
        models: [ModelChoice])
```

**Line:** 10451 | **Kind:** method

### `ModelsProbeParams`

```
struct ModelsProbeParams
```

**Line:** 10463 | **Kind:** struct

### `init`

```
public init(
        provider: String,
        profileid: String? = nil,
        timeoutms: Int? = nil)
```

**Line:** 10467 | **Kind:** method

### `ModelsProbeTargetResult`

```
struct ModelsProbeTargetResult
```

**Line:** 10485 | **Kind:** struct

### `init`

```
public init(
        profileid: String? = nil,
        label: String,
        status: AuthProbeStatus,
        latencyms: Int? = nil,
        error: String? = nil)
```

**Line:** 10491 | **Kind:** method

### `ModelsProbeResult`

```
struct ModelsProbeResult
```

**Line:** 10515 | **Kind:** struct

### `init`

```
public init(
        provider: String,
        status: AuthProbeStatus,
        latencyms: Int? = nil,
        error: String? = nil,
        results: [ModelsProbeTargetResult])
```

**Line:** 10521 | **Kind:** method

### `CommandEntry`

```
struct CommandEntry
```

**Line:** 10545 | **Kind:** struct

### `init`

```
public init(
        name: String,
        nativename: String? = nil,
        textaliases: [String]? = nil,
        description: String,
        category: AnyCodable? = nil,
        source: AnyCodable,
        scope: AnyCodable,
        acceptsargs: Bool,
        args: [[String: AnyCodable]]? = nil)
```

**Line:** 10555 | **Kind:** method

### `CommandsListParams`

```
struct CommandsListParams
```

**Line:** 10591 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        provider: String? = nil,
        scope: AnyCodable? = nil,
        includeargs: Bool? = nil)
```

**Line:** 10596 | **Kind:** method

### `CommandsListResult`

```
struct CommandsListResult
```

**Line:** 10617 | **Kind:** struct

### `init`

```
public init(
        commands: [CommandEntry])
```

**Line:** 10619 | **Kind:** method

### `SkillsStatusParams`

```
struct SkillsStatusParams
```

**Line:** 10631 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil)
```

**Line:** 10633 | **Kind:** method

### `ToolsCatalogParams`

```
struct ToolsCatalogParams
```

**Line:** 10645 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        includeplugins: Bool? = nil)
```

**Line:** 10648 | **Kind:** method

### `ToolCatalogProfile`

```
struct ToolCatalogProfile
```

**Line:** 10663 | **Kind:** struct

### `init`

```
public init(
        id: AnyCodable,
        label: String)
```

**Line:** 10666 | **Kind:** method

### `ToolCatalogEntry`

```
struct ToolCatalogEntry
```

**Line:** 10681 | **Kind:** struct

### `init`

```
public init(
        id: String,
        label: String,
        description: String,
        source: AnyCodable,
        pluginid: String? = nil,
        optional: Bool? = nil,
        risk: AnyCodable? = nil,
        tags: [String]? = nil,
        defaultprofiles: [AnyCodable])
```

**Line:** 10691 | **Kind:** method

### `ToolCatalogGroup`

```
struct ToolCatalogGroup
```

**Line:** 10727 | **Kind:** struct

### `init`

```
public init(
        id: String,
        label: String,
        source: AnyCodable,
        pluginid: String? = nil,
        tools: [ToolCatalogEntry])
```

**Line:** 10733 | **Kind:** method

### `ToolsCatalogResult`

```
struct ToolsCatalogResult
```

**Line:** 10757 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        profiles: [ToolCatalogProfile],
        groups: [ToolCatalogGroup])
```

**Line:** 10761 | **Kind:** method

### `ToolsEffectiveParams`

```
struct ToolsEffectiveParams
```

**Line:** 10779 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        sessionkey: String)
```

**Line:** 10782 | **Kind:** method

### `ToolsEffectiveEntry`

```
struct ToolsEffectiveEntry
```

**Line:** 10797 | **Kind:** struct

### `init`

```
public init(
        id: String,
        label: String,
        description: String,
        rawdescription: String,
        source: AnyCodable,
        pluginid: String? = nil,
        channelid: String? = nil,
        risk: AnyCodable? = nil,
        tags: [String]? = nil)
```

**Line:** 10807 | **Kind:** method

### `ToolsEffectiveGroup`

```
struct ToolsEffectiveGroup
```

**Line:** 10843 | **Kind:** struct

### `init`

```
public init(
        id: AnyCodable,
        label: String,
        source: AnyCodable,
        tools: [ToolsEffectiveEntry])
```

**Line:** 10848 | **Kind:** method

### `ToolsEffectiveNotice`

```
struct ToolsEffectiveNotice
```

**Line:** 10869 | **Kind:** struct

### `init`

```
public init(
        id: String,
        severity: AnyCodable,
        message: String)
```

**Line:** 10873 | **Kind:** method

### `ToolsEffectiveResult`

```
struct ToolsEffectiveResult
```

**Line:** 10891 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        profile: String,
        groups: [ToolsEffectiveGroup],
        notices: [ToolsEffectiveNotice]? = nil)
```

**Line:** 10896 | **Kind:** method

### `ToolsInvokeParams`

```
struct ToolsInvokeParams
```

**Line:** 10917 | **Kind:** struct

### `init`

```
public init(
        name: String,
        args: [String: AnyCodable]? = nil,
        sessionkey: String? = nil,
        agentid: String? = nil,
        confirm: Bool? = nil,
        idempotencykey: String? = nil,
        conversationreadorigin: String? = nil)
```

**Line:** 10925 | **Kind:** method

### `ToolsInvokeError`

```
struct ToolsInvokeError
```

**Line:** 10955 | **Kind:** struct

### `init`

```
public init(
        code: String,
        message: String,
        details: AnyCodable? = nil)
```

**Line:** 10959 | **Kind:** method

### `ToolsInvokeResult`

```
struct ToolsInvokeResult
```

**Line:** 10977 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        toolname: String,
        output: AnyCodable? = nil,
        requiresapproval: Bool? = nil,
        approvalid: String? = nil,
        source: AnyCodable? = nil,
        error: ToolsInvokeError? = nil)
```

**Line:** 10985 | **Kind:** method

### `SkillsBinsParams`

```
struct SkillsBinsParams
```

**Line:** 11015 | **Kind:** struct

### `SkillsBinsResult`

```
struct SkillsBinsResult
```

**Line:** 11017 | **Kind:** struct

### `init`

```
public init(
        bins: [String])
```

**Line:** 11019 | **Kind:** method

### `SkillsSearchParams`

```
struct SkillsSearchParams
```

**Line:** 11031 | **Kind:** struct

### `init`

```
public init(
        query: String? = nil,
        limit: Int? = nil)
```

**Line:** 11034 | **Kind:** method

### `SkillsSearchResult`

```
struct SkillsSearchResult
```

**Line:** 11049 | **Kind:** struct

### `init`

```
public init(
        results: [[String: AnyCodable]])
```

**Line:** 11051 | **Kind:** method

### `SkillsDetailParams`

```
struct SkillsDetailParams
```

**Line:** 11063 | **Kind:** struct

### `init`

```
public init(
        slug: String)
```

**Line:** 11065 | **Kind:** method

### `SkillsDetailResult`

```
struct SkillsDetailResult
```

**Line:** 11077 | **Kind:** struct

### `init`

```
public init(
        skill: AnyCodable,
        latestversion: AnyCodable? = nil,
        metadata: AnyCodable? = nil,
        owner: AnyCodable? = nil)
```

**Line:** 11082 | **Kind:** method

### `SkillsCuratorActionParams`

```
struct SkillsCuratorActionParams
```

**Line:** 11103 | **Kind:** struct

### `init`

```
public init(
        skill: String)
```

**Line:** 11105 | **Kind:** method

### `SkillsCuratorActionResult`

```
struct SkillsCuratorActionResult
```

**Line:** 11117 | **Kind:** struct

### `init`

```
public init(
        skillfile: String,
        skillkey: String,
        skillname: String,
        state: AnyCodable,
        pinned: Bool,
        createdatms: Double,
        statechangedatms: Double,
        lastusedatms: AnyCodable,
        usecount: Double,
        archivedreason: AnyCodable)
```

**Line:** 11128 | **Kind:** method

### `SkillsCuratorStatusParams`

```
struct SkillsCuratorStatusParams
```

**Line:** 11167 | **Kind:** struct

### `SkillsCuratorStatusResult`

```
struct SkillsCuratorStatusResult
```

**Line:** 11169 | **Kind:** struct

### `init`

```
public init(
        lastattemptatms: AnyCodable,
        lastsuccessatms: AnyCodable,
        lasterror: AnyCodable,
        counts: [String: AnyCodable],
        skills: [SkillsCuratorActionResult],
        overlaps: [[String: AnyCodable]])
```

**Line:** 11176 | **Kind:** method

### `SkillsProposalsListParams`

```
struct SkillsProposalsListParams
```

**Line:** 11203 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil)
```

**Line:** 11205 | **Kind:** method

### `SkillsProposalsListResult`

```
struct SkillsProposalsListResult
```

**Line:** 11217 | **Kind:** struct

### `init`

```
public init(
        schema: String,
        updatedat: String,
        proposals: [[String: AnyCodable]])
```

**Line:** 11221 | **Kind:** method

### `SkillsProposalHistoryStatusParams`

```
struct SkillsProposalHistoryStatusParams
```

**Line:** 11239 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil)
```

**Line:** 11241 | **Kind:** method

### `SkillsProposalHistoryScanParams`

```
struct SkillsProposalHistoryScanParams
```

**Line:** 11253 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        direction: AnyCodable? = nil)
```

**Line:** 11256 | **Kind:** method

### `SkillsProposalHistoryScanResult`

```
struct SkillsProposalHistoryScanResult
```

**Line:** 11271 | **Kind:** struct

### `init`

```
public init(
        schema: String,
        hasscanned: Bool,
        reviewedsessions: Int,
        ideasfound: Int,
        hasmore: Bool,
        lastscanreviewed: Int,
        lastscanideas: Int,
        lastscanat: String? = nil,
        oldestreviewedat: String? = nil,
        newestreviewedat: String? = nil)
```

**Line:** 11282 | **Kind:** method

### `SkillsProposalInspectParams`

```
struct SkillsProposalInspectParams
```

**Line:** 11321 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        proposalid: String)
```

**Line:** 11324 | **Kind:** method

### `SkillsProposalInspectResult`

```
struct SkillsProposalInspectResult
```

**Line:** 11339 | **Kind:** struct

### `init`

```
public init(
        record: SkillsProposalRecordResult,
        content: String,
        supportfiles: [[String: AnyCodable]]? = nil)
```

**Line:** 11343 | **Kind:** method

### `SkillsProposalCreateParams`

```
struct SkillsProposalCreateParams
```

**Line:** 11361 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        name: String,
        description: String,
        content: String,
        supportfiles: [[String: AnyCodable]]? = nil,
        goal: String? = nil,
        evidence: String? = nil)
```

**Line:** 11369 | **Kind:** method

### `SkillsProposalUpdateParams`

```
struct SkillsProposalUpdateParams
```

**Line:** 11399 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        skillname: String,
        description: String? = nil,
        content: String,
        supportfiles: [[String: AnyCodable]]? = nil,
        goal: String? = nil,
        evidence: String? = nil)
```

**Line:** 11407 | **Kind:** method

### `SkillsProposalReviseParams`

```
struct SkillsProposalReviseParams
```

**Line:** 11437 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        proposalid: String,
        content: String,
        supportfiles: [[String: AnyCodable]]? = nil,
        description: String? = nil,
        goal: String? = nil,
        evidence: String? = nil)
```

**Line:** 11445 | **Kind:** method

### `SkillsProposalRequestRevisionParams`

```
struct SkillsProposalRequestRevisionParams
```

**Line:** 11475 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        targetagentid: String? = nil,
        proposalid: String,
        instructions: String,
        sessionkey: String,
        sessionid: String? = nil,
        idempotencykey: String)
```

**Line:** 11483 | **Kind:** method

### `SkillsProposalRequestRevisionResult`

```
struct SkillsProposalRequestRevisionResult
```

**Line:** 11513 | **Kind:** struct

### `init`

```
public init(
        runid: String,
        status: AnyCodable)
```

**Line:** 11516 | **Kind:** method

### `SkillsProposalActionParams`

```
struct SkillsProposalActionParams
```

**Line:** 11531 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        proposalid: String,
        reason: String? = nil)
```

**Line:** 11535 | **Kind:** method

### `SkillsProposalApplyResult`

```
struct SkillsProposalApplyResult
```

**Line:** 11553 | **Kind:** struct

### `init`

```
public init(
        record: SkillsProposalRecordResult,
        targetskillfile: String)
```

**Line:** 11556 | **Kind:** method

### `SkillsProposalRecordResult`

```
struct SkillsProposalRecordResult
```

**Line:** 11571 | **Kind:** struct

### `init`

```
public init(
        schema: String,
        id: String,
        kind: AnyCodable,
        status: AnyCodable,
        title: String,
        description: String,
        createdat: String,
        updatedat: String,
        createdby: AnyCodable,
        origin: [String: AnyCodable]? = nil,
        proposedversion: String,
        draftfile: String,
        drafthash: String,
        supportfiles: [[String: AnyCodable]]? = nil,
        target: [String: AnyCodable],
        scan: [String: AnyCodable],
        goal: String? = nil,
        evidence: String? = nil,
        appliedat: String? = nil,
        rejectedat: String? = nil,
        quarantinedat: String? = nil,
        staleat: String? = nil,
        statusreason: String? = nil)
```

**Line:** 11595 | **Kind:** method

### `SkillsSecurityVerdictsParams`

```
struct SkillsSecurityVerdictsParams
```

**Line:** 11673 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil)
```

**Line:** 11675 | **Kind:** method

### `SkillsSecurityVerdictsResult`

```
struct SkillsSecurityVerdictsResult
```

**Line:** 11687 | **Kind:** struct

### `init`

```
public init(
        schema: String,
        items: [[String: AnyCodable]])
```

**Line:** 11690 | **Kind:** method

### `SkillsSkillCardParams`

```
struct SkillsSkillCardParams
```

**Line:** 11705 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        skillkey: String)
```

**Line:** 11708 | **Kind:** method

### `SkillsSkillCardResult`

```
struct SkillsSkillCardResult
```

**Line:** 11723 | **Kind:** struct

### `init`

```
public init(
        schema: String,
        skillkey: String,
        path: String,
        sizebytes: Int,
        content: String)
```

**Line:** 11729 | **Kind:** method

### `SkillsUploadBeginParams`

```
struct SkillsUploadBeginParams
```

**Line:** 11753 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        slug: String,
        sizebytes: Int,
        sha256: String? = nil,
        force: Bool? = nil,
        idempotencykey: String? = nil)
```

**Line:** 11760 | **Kind:** method

### `SkillsUploadChunkParams`

```
struct SkillsUploadChunkParams
```

**Line:** 11787 | **Kind:** struct

### `init`

```
public init(
        uploadid: String,
        offset: Int,
        database64: String)
```

**Line:** 11791 | **Kind:** method

### `SkillsUploadCommitParams`

```
struct SkillsUploadCommitParams
```

**Line:** 11809 | **Kind:** struct

### `init`

```
public init(
        uploadid: String,
        sha256: String? = nil)
```

**Line:** 11812 | **Kind:** method

### `CronJob`

```
struct CronJob
```

**Line:** 11827 | **Kind:** struct

### `init`

```
public init(
        id: String,
        declarationkey: String? = nil,
        displayname: String? = nil,
        owner: [String: AnyCodable]? = nil,
        agentid: String? = nil,
        sessionkey: String? = nil,
        name: String,
        description: String? = nil,
        enabled: Bool,
        deleteafterrun: Bool? = nil,
        createdatms: Int,
        updatedatms: Int,
        configrevision: String? = nil,
        schedule: AnyCodable,
        pacing: [String: AnyCodable]? = nil,
        trigger: [String: AnyCodable]? = nil,
        sessiontarget: AnyCodable,
        wakemode: AnyCodable,
        payload: AnyCodable,
        delivery: AnyCodable? = nil,
        failurealert: AnyCodable? = nil,
        state: [String: AnyCodable],
        nextrunatms: Int? = nil,
        lastrunatms: Int? = nil,
        lastrunstatus: AnyCodable? = nil,
        lastrunerror: String? = nil,
        lastdelivered: Bool? = nil,
        lastdeliverystatus: AnyCodable? = nil,
        lastdeliveryerror: String? = nil,
        lastfailurenotificationdelivered: Bool? = nil,
        lastfailurenotificationdeliverystatus: AnyCodable? = nil,
        lastfailurenotificationdeliveryerror: String? = nil)
```

**Line:** 11860 | **Kind:** method

### `CronListParams`

```
struct CronListParams
```

**Line:** 11965 | **Kind:** struct

### `init`

```
public init(
        includedisabled: Bool? = nil,
        limit: Int? = nil,
        offset: Int? = nil,
        query: String? = nil,
        enabled: AnyCodable? = nil,
        schedulekind: AnyCodable? = nil,
        lastrunstatus: AnyCodable? = nil,
        sortby: AnyCodable? = nil,
        sortdir: AnyCodable? = nil,
        agentid: String? = nil,
        compact: Bool? = nil)
```

**Line:** 11977 | **Kind:** method

### `CronStatusParams`

```
struct CronStatusParams
```

**Line:** 12019 | **Kind:** struct

### `CronAddParams`

```
struct CronAddParams
```

**Line:** 12021 | **Kind:** struct

### `init`

```
public init(
        name: String,
        declarationkey: String? = nil,
        displayname: String? = nil,
        owner: [String: AnyCodable]? = nil,
        agentid: AnyCodable? = nil,
        sessionkey: AnyCodable? = nil,
        description: String? = nil,
        enabled: Bool? = nil,
        deleteafterrun: Bool? = nil,
        schedule: AnyCodable,
        pacing: [String: AnyCodable]? = nil,
        trigger: [String: AnyCodable]? = nil,
        sessiontarget: AnyCodable,
        wakemode: AnyCodable,
        payload: AnyCodable,
        delivery: AnyCodable? = nil,
        failurealert: AnyCodable? = nil)
```

**Line:** 12039 | **Kind:** method

### `CronDeclarativeAddResult`

```
struct CronDeclarativeAddResult
```

**Line:** 12099 | **Kind:** struct

### `init`

```
public init(
        created: Bool,
        updated: Bool? = nil,
        job: CronJob)
```

**Line:** 12103 | **Kind:** method

### `CronRunsParams`

```
struct CronRunsParams
```

**Line:** 12121 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        scope: AnyCodable? = nil,
        id: String? = nil,
        jobid: String? = nil,
        runid: String? = nil,
        limit: Int? = nil,
        offset: Int? = nil,
        statuses: [AnyCodable]? = nil,
        status: AnyCodable? = nil,
        deliverystatuses: [AnyCodable]? = nil,
        deliverystatus: AnyCodable? = nil,
        query: String? = nil,
        sortdir: AnyCodable? = nil)
```

**Line:** 12135 | **Kind:** method

### `CronRunLogEntry`

```
struct CronRunLogEntry
```

**Line:** 12183 | **Kind:** struct

### `init`

```
public init(
        ts: Int,
        jobid: String,
        action: String,
        status: AnyCodable? = nil,
        error: String? = nil,
        errorreason: AnyCodable? = nil,
        summary: String? = nil,
        diagnostics: [String: AnyCodable]? = nil,
        delivered: Bool? = nil,
        deliverystatus: AnyCodable? = nil,
        deliveryerror: String? = nil,
        failurenotificationdelivery: [String: AnyCodable]? = nil,
        sessionid: String? = nil,
        sessionkey: String? = nil,
        runid: String? = nil,
        runatms: Int? = nil,
        durationms: Int? = nil,
        nextrunatms: Int? = nil,
        triggerfired: Bool? = nil,
        model: String? = nil,
        provider: String? = nil,
        usage: [String: AnyCodable]? = nil,
        jobname: String? = nil)
```

**Line:** 12207 | **Kind:** method

### `LogsTailParams`

```
struct LogsTailParams
```

**Line:** 12285 | **Kind:** struct

### `init`

```
public init(
        cursor: Int? = nil,
        limit: Int? = nil,
        maxbytes: Int? = nil)
```

**Line:** 12289 | **Kind:** method

### `LogsTailResult`

```
struct LogsTailResult
```

**Line:** 12307 | **Kind:** struct

### `init`

```
public init(
        file: String,
        cursor: Int,
        size: Int,
        lines: [String],
        truncated: Bool? = nil,
        reset: Bool? = nil)
```

**Line:** 12314 | **Kind:** method

### `MemoryMigrationItem`

```
struct MemoryMigrationItem
```

**Line:** 12341 | **Kind:** struct

### `init`

```
public init(
        id: String,
        status: MemoryMigrationItemStatus,
        source: String? = nil,
        target: String? = nil,
        message: String? = nil,
        reason: String? = nil,
        details: [String: AnyCodable]? = nil)
```

**Line:** 12349 | **Kind:** method

### `MemoryMigrationSummary`

```
struct MemoryMigrationSummary
```

**Line:** 12379 | **Kind:** struct

### `init`

```
public init(
        total: Int,
        planned: Int,
        migrated: Int,
        skipped: Int,
        conflicts: Int,
        errors: Int,
        sensitive: Int)
```

**Line:** 12387 | **Kind:** method

### `MemoryMigrationProviderPlan`

```
struct MemoryMigrationProviderPlan
```

**Line:** 12417 | **Kind:** struct

### `init`

```
public init(
        providerid: String,
        label: String,
        description: String? = nil,
        planfingerprint: String? = nil,
        found: Bool,
        source: String? = nil,
        target: String? = nil,
        confidence: AnyCodable? = nil,
        message: String? = nil,
        error: String? = nil,
        summary: MemoryMigrationSummary,
        items: [MemoryMigrationItem],
        warnings: [String]? = nil)
```

**Line:** 12431 | **Kind:** method

### `MigrationsMemoryPlanParams`

```
struct MigrationsMemoryPlanParams
```

**Line:** 12479 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        overwrite: Bool? = nil)
```

**Line:** 12482 | **Kind:** method

### `MigrationsMemoryPlanResult`

```
struct MigrationsMemoryPlanResult
```

**Line:** 12497 | **Kind:** struct

### `init`

```
public init(
        agentid: String,
        workspace: String,
        providers: [MemoryMigrationProviderPlan])
```

**Line:** 12501 | **Kind:** method

### `MigrationsMemoryApplyParams`

```
struct MigrationsMemoryApplyParams
```

**Line:** 12519 | **Kind:** struct

### `init`

```
public init(
        idempotencykey: String,
        agentid: String,
        providerid: String,
        planfingerprint: String,
        itemids: [String],
        overwrite: Bool? = nil)
```

**Line:** 12526 | **Kind:** method

### `MigrationsMemoryApplyResult`

```
struct MigrationsMemoryApplyResult
```

**Line:** 12553 | **Kind:** struct

### `init`

```
public init(
        providerid: String,
        source: String,
        target: String? = nil,
        summary: MemoryMigrationSummary,
        items: [MemoryMigrationItem],
        warnings: [String]? = nil,
        backuppath: String? = nil,
        reportdir: String? = nil)
```

**Line:** 12562 | **Kind:** method

### `TerminalOpenParams`

```
struct TerminalOpenParams
```

**Line:** 12595 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil,
        catalog: SessionsCatalogContinueParams? = nil,
        cols: Int,
        rows: Int)
```

**Line:** 12600 | **Kind:** method

### `TerminalOpenResult`

```
struct TerminalOpenResult
```

**Line:** 12621 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        agentid: String,
        shell: String,
        cwd: String,
        confined: Bool,
        title: String? = nil)
```

**Line:** 12628 | **Kind:** method

### `TerminalInputParams`

```
struct TerminalInputParams
```

**Line:** 12655 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        data: String)
```

**Line:** 12658 | **Kind:** method

### `TerminalResizeParams`

```
struct TerminalResizeParams
```

**Line:** 12673 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        cols: Int,
        rows: Int)
```

**Line:** 12677 | **Kind:** method

### `TerminalCloseParams`

```
struct TerminalCloseParams
```

**Line:** 12695 | **Kind:** struct

### `init`

```
public init(
        sessionid: String)
```

**Line:** 12697 | **Kind:** method

### `TerminalAttachParams`

```
struct TerminalAttachParams
```

**Line:** 12709 | **Kind:** struct

### `init`

```
public init(
        sessionid: String)
```

**Line:** 12711 | **Kind:** method

### `TerminalAttachResult`

```
struct TerminalAttachResult
```

**Line:** 12723 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        agentid: String,
        shell: String,
        cwd: String,
        confined: Bool,
        buffer: String,
        seq: Int? = nil)
```

**Line:** 12731 | **Kind:** method

### `TerminalSessionInfo`

```
struct TerminalSessionInfo
```

**Line:** 12761 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        agentid: String,
        shell: String,
        cwd: String,
        confined: Bool,
        attached: Bool,
        owner: AnyCodable? = nil,
        createdatms: Int)
```

**Line:** 12770 | **Kind:** method

### `TerminalListResult`

```
struct TerminalListResult
```

**Line:** 12803 | **Kind:** struct

### `init`

```
public init(
        sessions: [TerminalSessionInfo])
```

**Line:** 12805 | **Kind:** method

### `TerminalTextParams`

```
struct TerminalTextParams
```

**Line:** 12817 | **Kind:** struct

### `init`

```
public init(
        sessionid: String)
```

**Line:** 12819 | **Kind:** method

### `TerminalTextResult`

```
struct TerminalTextResult
```

**Line:** 12831 | **Kind:** struct

### `init`

```
public init(
        text: String)
```

**Line:** 12833 | **Kind:** method

### `TerminalUploadParams`

```
struct TerminalUploadParams
```

**Line:** 12845 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        name: String,
        contentbase64: String)
```

**Line:** 12849 | **Kind:** method

### `TerminalUploadResult`

```
struct TerminalUploadResult
```

**Line:** 12867 | **Kind:** struct

### `init`

```
public init(
        path: String,
        size: Int)
```

**Line:** 12870 | **Kind:** method

### `TerminalAckResult`

```
struct TerminalAckResult
```

**Line:** 12885 | **Kind:** struct

### `init`

```
public init(
        ok: Bool)
```

**Line:** 12887 | **Kind:** method

### `TerminalDataEvent`

```
struct TerminalDataEvent
```

**Line:** 12899 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        seq: Int,
        data: String)
```

**Line:** 12903 | **Kind:** method

### `TerminalExitEvent`

```
struct TerminalExitEvent
```

**Line:** 12921 | **Kind:** struct

### `init`

```
public init(
        sessionid: String,
        exitcode: AnyCodable? = nil,
        signal: AnyCodable? = nil,
        reason: AnyCodable? = nil,
        error: String? = nil)
```

**Line:** 12927 | **Kind:** method

### `ExecApprovalPresentation`

```
struct ExecApprovalPresentation
```

**Line:** 12951 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        commandtext: String,
        commandpreview: AnyCodable? = nil,
        warningtext: AnyCodable? = nil,
        host: AnyCodable? = nil,
        nodeid: AnyCodable? = nil,
        agentid: AnyCodable? = nil,
        alloweddecisions: [ApprovalDecision])
```

**Line:** 12960 | **Kind:** method

### `PluginApprovalPresentation`

```
struct PluginApprovalPresentation
```

**Line:** 12993 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        title: String,
        description: String,
        severity: PluginApprovalSeverity,
        pluginid: AnyCodable? = nil,
        toolname: AnyCodable? = nil,
        agentid: AnyCodable? = nil,
        alloweddecisions: [ApprovalDecision])
```

**Line:** 13002 | **Kind:** method

### `SystemAgentApprovalPresentation`

```
struct SystemAgentApprovalPresentation
```

**Line:** 13035 | **Kind:** struct

### `init`

```
public init(
        kind: String,
        title: String,
        description: String,
        proposalhash: String,
        agentid: AnyCodable? = nil,
        alloweddecisions: [AnyCodable])
```

**Line:** 13042 | **Kind:** method

### `PendingApprovalSnapshot`

```
struct PendingApprovalSnapshot
```

**Line:** 13069 | **Kind:** struct

### `init`

```
public init(
        id: String,
        urlpath: String,
        createdatms: Int,
        expiresatms: Int,
        presentation: ApprovalPresentation,
        status: String)
```

**Line:** 13076 | **Kind:** method

### `AllowedApprovalSnapshot`

```
struct AllowedApprovalSnapshot
```

**Line:** 13103 | **Kind:** struct

### `init`

```
public init(
        id: String,
        urlpath: String,
        createdatms: Int,
        expiresatms: Int,
        presentation: ApprovalPresentation,
        resolvedatms: Int,
        source: [String: AnyCodable]? = nil,
        resolver: [String: AnyCodable]? = nil,
        status: String,
        decision: ApprovalAllowDecision,
        reason: ApprovalAllowedReason)
```

**Line:** 13115 | **Kind:** method

### `DeniedApprovalSnapshot`

```
struct DeniedApprovalSnapshot
```

**Line:** 13157 | **Kind:** struct

### `init`

```
public init(
        id: String,
        urlpath: String,
        createdatms: Int,
        expiresatms: Int,
        presentation: ApprovalPresentation,
        resolvedatms: Int,
        source: [String: AnyCodable]? = nil,
        resolver: [String: AnyCodable]? = nil,
        status: String,
        decision: String,
        reason: ApprovalDeniedReason)
```

**Line:** 13169 | **Kind:** method

### `ExpiredApprovalSnapshot`

```
struct ExpiredApprovalSnapshot
```

**Line:** 13211 | **Kind:** struct

### `init`

```
public init(
        id: String,
        urlpath: String,
        createdatms: Int,
        expiresatms: Int,
        presentation: ApprovalPresentation,
        resolvedatms: Int,
        source: [String: AnyCodable]? = nil,
        resolver: [String: AnyCodable]? = nil,
        status: String,
        reason: ApprovalExpiredReason)
```

**Line:** 13222 | **Kind:** method

### `CancelledApprovalSnapshot`

```
struct CancelledApprovalSnapshot
```

**Line:** 13261 | **Kind:** struct

### `init`

```
public init(
        id: String,
        urlpath: String,
        createdatms: Int,
        expiresatms: Int,
        presentation: ApprovalPresentation,
        resolvedatms: Int,
        source: [String: AnyCodable]? = nil,
        resolver: [String: AnyCodable]? = nil,
        status: String,
        reason: ApprovalCancelledReason)
```

**Line:** 13272 | **Kind:** method

### `ApprovalGetParams`

```
struct ApprovalGetParams
```

**Line:** 13311 | **Kind:** struct

### `init`

```
public init(
        id: String)
```

**Line:** 13313 | **Kind:** method

### `ApprovalGetResult`

```
struct ApprovalGetResult
```

**Line:** 13325 | **Kind:** struct

### `init`

```
public init(
        approval: ApprovalSnapshot)
```

**Line:** 13327 | **Kind:** method

### `ApprovalHistoryParams`

```
struct ApprovalHistoryParams
```

**Line:** 13339 | **Kind:** struct

### `init`

```
public init(
        cursor: String? = nil,
        limit: Int? = nil,
        kind: ApprovalKind? = nil)
```

**Line:** 13343 | **Kind:** method

### `ApprovalHistoryResult`

```
struct ApprovalHistoryResult
```

**Line:** 13361 | **Kind:** struct

### `init`

```
public init(
        items: [TerminalApprovalSnapshot],
        nextcursor: String? = nil)
```

**Line:** 13364 | **Kind:** method

### `ApprovalResolveParams`

```
struct ApprovalResolveParams
```

**Line:** 13379 | **Kind:** struct

### `init`

```
public init(
        id: String,
        kind: ApprovalKind,
        decision: ApprovalDecision)
```

**Line:** 13383 | **Kind:** method

### `ApprovalResolveResult`

```
struct ApprovalResolveResult
```

**Line:** 13401 | **Kind:** struct

### `init`

```
public init(
        applied: Bool,
        approval: TerminalApprovalSnapshot)
```

**Line:** 13404 | **Kind:** method

### `PendingSessionApprovalEvent`

```
struct PendingSessionApprovalEvent
```

**Line:** 13419 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        sourcesessionkey: String? = nil,
        updatedatms: Int,
        phase: String,
        approval: PendingApprovalSnapshot)
```

**Line:** 13425 | **Kind:** method

### `TerminalSessionApprovalEvent`

```
struct TerminalSessionApprovalEvent
```

**Line:** 13449 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        sourcesessionkey: String? = nil,
        updatedatms: Int,
        phase: String,
        approval: TerminalApprovalSnapshot)
```

**Line:** 13455 | **Kind:** method

### `SessionApprovalReplay`

```
struct SessionApprovalReplay
```

**Line:** 13479 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        updatedatms: Int,
        approvals: [PendingApprovalSnapshot],
        truncated: Bool)
```

**Line:** 13484 | **Kind:** method

### `ExecApprovalsGetParams`

```
struct ExecApprovalsGetParams
```

**Line:** 13505 | **Kind:** struct

### `ExecApprovalsSetParams`

```
struct ExecApprovalsSetParams
```

**Line:** 13507 | **Kind:** struct

### `init`

```
public init(
        file: [String: AnyCodable],
        basehash: String? = nil)
```

**Line:** 13510 | **Kind:** method

### `ExecApprovalsNodeGetParams`

```
struct ExecApprovalsNodeGetParams
```

**Line:** 13525 | **Kind:** struct

### `init`

```
public init(
        nodeid: String)
```

**Line:** 13527 | **Kind:** method

### `ExecApprovalsNodeSnapshot`

```
struct ExecApprovalsNodeSnapshot
```

**Line:** 13539 | **Kind:** struct

### `init`

```
public init(
        path: String? = nil,
        exists: Bool? = nil,
        hash: String? = nil,
        file: [String: AnyCodable]? = nil,
        resolveddefaults: [String: AnyCodable]? = nil,
        enabled: Bool? = nil,
        basehash: String? = nil,
        defaultaction: AnyCodable? = nil,
        rules: [[String: AnyCodable]]? = nil,
        constraints: [String: AnyCodable]? = nil,
        message: String? = nil)
```

**Line:** 13551 | **Kind:** method

### `ExecApprovalsNodeSetParams`

```
struct ExecApprovalsNodeSetParams
```

**Line:** 13593 | **Kind:** struct

### `init`

```
public init(
        nodeid: String,
        file: [String: AnyCodable]? = nil,
        native: [String: AnyCodable]? = nil,
        basehash: String? = nil)
```

**Line:** 13598 | **Kind:** method

### `ExecApprovalsSnapshot`

```
struct ExecApprovalsSnapshot
```

**Line:** 13619 | **Kind:** struct

### `init`

```
public init(
        path: String,
        exists: Bool,
        hash: String,
        file: [String: AnyCodable])
```

**Line:** 13624 | **Kind:** method

### `ExecApprovalGetParams`

```
struct ExecApprovalGetParams
```

**Line:** 13645 | **Kind:** struct

### `init`

```
public init(
        id: String)
```

**Line:** 13647 | **Kind:** method

### `ExecApprovalRequestParams`

```
struct ExecApprovalRequestParams
```

**Line:** 13659 | **Kind:** struct

### `init`

```
public init(
        id: String? = nil,
        command: String? = nil,
        commandargv: [String]? = nil,
        systemrunplan: [String: AnyCodable]? = nil,
        env: [String: AnyCodable]? = nil,
        cwd: AnyCodable? = nil,
        nodeid: AnyCodable? = nil,
        host: AnyCodable? = nil,
        security: AnyCodable? = nil,
        ask: AnyCodable? = nil,
        warningtext: AnyCodable? = nil,
        unavailabledecisions: [String]? = nil,
        commandspans: [[String: AnyCodable]]? = nil,
        agentid: AnyCodable? = nil,
        resolvedpath: AnyCodable? = nil,
        sessionkey: AnyCodable? = nil,
        sessionid: AnyCodable? = nil,
        runid: AnyCodable? = nil,
        toolcallid: AnyCodable? = nil,
        turnsourcechannel: AnyCodable? = nil,
        turnsourceto: AnyCodable? = nil,
        turnsourceaccountid: AnyCodable? = nil,
        turnsourcethreadid: AnyCodable? = nil,
        approvalreviewerdeviceids: [String]? = nil,
        requiredeliveryroute: Bool? = nil,
        suppressdelivery: Bool? = nil,
        timeoutms: Int? = nil,
        twophase: Bool? = nil)
```

**Line:** 13688 | **Kind:** method

### `ExecApprovalResolveParams`

```
struct ExecApprovalResolveParams
```

**Line:** 13781 | **Kind:** struct

### `init`

```
public init(
        id: String,
        decision: String)
```

**Line:** 13784 | **Kind:** method

### `QuestionOption`

```
struct QuestionOption
```

**Line:** 13799 | **Kind:** struct

### `init`

```
public init(
        label: String,
        description: String? = nil)
```

**Line:** 13802 | **Kind:** method

### `Question`

```
struct Question
```

**Line:** 13817 | **Kind:** struct

### `init`

```
public init(
        questionid: String,
        header: String,
        question: String,
        options: [QuestionOption],
        multiselect: Bool? = nil,
        isother: Bool? = nil,
        issecret: Bool? = nil)
```

**Line:** 13825 | **Kind:** method

### `QuestionRequestQuestion`

```
struct QuestionRequestQuestion
```

**Line:** 13855 | **Kind:** struct

### `init`

```
public init(
        questionid: String,
        header: String,
        question: String,
        options: [QuestionOption],
        multiselect: Bool? = nil,
        isother: Bool? = nil,
        issecret: Bool? = nil)
```

**Line:** 13863 | **Kind:** method

### `QuestionAnswers`

```
struct QuestionAnswers
```

**Line:** 13893 | **Kind:** struct

### `init`

```
public init(
        answers: [String: AnyCodable])
```

**Line:** 13895 | **Kind:** method

### `QuestionRecord`

```
struct QuestionRecord
```

**Line:** 13907 | **Kind:** struct

### `init`

```
public init(
        id: String,
        questions: [Question],
        agentid: String? = nil,
        sessionkey: String? = nil,
        createdatms: Int,
        expiresatms: Int,
        status: QuestionStatus,
        answers: QuestionAnswers? = nil,
        resolvedby: String? = nil)
```

**Line:** 13917 | **Kind:** method

### `QuestionRequestParams`

```
struct QuestionRequestParams
```

**Line:** 13953 | **Kind:** struct

### `init`

```
public init(
        id: String? = nil,
        questions: [QuestionRequestQuestion],
        agentid: String? = nil,
        sessionkey: String? = nil,
        timeoutms: Int? = nil)
```

**Line:** 13959 | **Kind:** method

### `QuestionRequestResult`

```
struct QuestionRequestResult
```

**Line:** 13983 | **Kind:** struct

### `init`

```
public init(
        id: String,
        expiresatms: Int)
```

**Line:** 13986 | **Kind:** method

### `QuestionWaitAnswerParams`

```
struct QuestionWaitAnswerParams
```

**Line:** 14001 | **Kind:** struct

### `init`

```
public init(
        id: String,
        timeoutms: Int? = nil)
```

**Line:** 14004 | **Kind:** method

### `QuestionGetParams`

```
struct QuestionGetParams
```

**Line:** 14019 | **Kind:** struct

### `init`

```
public init(
        id: String)
```

**Line:** 14021 | **Kind:** method

### `QuestionGetResult`

```
struct QuestionGetResult
```

**Line:** 14033 | **Kind:** struct

### `init`

```
public init(
        question: QuestionRecord)
```

**Line:** 14035 | **Kind:** method

### `QuestionListParams`

```
struct QuestionListParams
```

**Line:** 14047 | **Kind:** struct

### `QuestionListResult`

```
struct QuestionListResult
```

**Line:** 14049 | **Kind:** struct

### `init`

```
public init(
        questions: [QuestionRecord])
```

**Line:** 14051 | **Kind:** method

### `PluginApprovalRequestParams`

```
struct PluginApprovalRequestParams
```

**Line:** 14063 | **Kind:** struct

### `init`

```
public init(
        pluginid: String? = nil,
        title: String,
        description: String,
        severity: String? = nil,
        toolname: String? = nil,
        toolcallid: String? = nil,
        alloweddecisions: [String]? = nil,
        agentid: String? = nil,
        sessionkey: String? = nil,
        approvalreviewerdeviceids: [String]? = nil,
        turnsourcechannel: String? = nil,
        turnsourceto: String? = nil,
        turnsourceaccountid: String? = nil,
        turnsourcethreadid: AnyCodable? = nil,
        timeoutms: Int? = nil,
        twophase: Bool? = nil)
```

**Line:** 14080 | **Kind:** method

### `PluginApprovalResolveParams`

```
struct PluginApprovalResolveParams
```

**Line:** 14137 | **Kind:** struct

### `init`

```
public init(
        id: String,
        decision: String)
```

**Line:** 14140 | **Kind:** method

### `PluginCatalogClawHubInstall`

```
struct PluginCatalogClawHubInstall
```

**Line:** 14155 | **Kind:** struct

### `init`

```
public init(
        source: String,
        packagename: String)
```

**Line:** 14158 | **Kind:** method

### `PluginCatalogEntry`

```
struct PluginCatalogEntry
```

**Line:** 14173 | **Kind:** struct

### `init`

```
public init(
        id: String,
        name: String,
        packagename: String? = nil,
        description: String? = nil,
        version: String? = nil,
        kind: [String]? = nil,
        origin: String? = nil,
        installed: Bool,
        enabled: Bool,
        state: AnyCodable,
        featured: Bool? = nil,
        featuredat: Int? = nil,
        order: Double? = nil,
        hasicon: Bool? = nil,
        install: PluginCatalogInstallAction? = nil,
        error: String? = nil,
        category: String? = nil,
        removable: Bool? = nil)
```

**Line:** 14192 | **Kind:** method

### `PluginCatalogOfficialInstall`

```
struct PluginCatalogOfficialInstall
```

**Line:** 14255 | **Kind:** struct

### `init`

```
public init(
        source: String,
        pluginid: String)
```

**Line:** 14258 | **Kind:** method

### `PluginControlUiDescriptor`

```
struct PluginControlUiDescriptor
```

**Line:** 14273 | **Kind:** struct

### `init`

```
public init(
        id: String,
        pluginid: String,
        pluginname: String? = nil,
        surface: AnyCodable,
        label: String,
        description: String? = nil,
        placement: String? = nil,
        schema: AnyCodable? = nil,
        requiredscopes: [String]? = nil)
```

**Line:** 14283 | **Kind:** method

### `PluginSearchPackage`

```
struct PluginSearchPackage
```

**Line:** 14319 | **Kind:** struct

### `init`

```
public init(
        name: String,
        displayname: String,
        family: AnyCodable,
        channel: AnyCodable,
        isofficial: Bool,
        summary: String? = nil,
        latestversion: String? = nil,
        runtimeid: String? = nil,
        downloads: Double? = nil,
        verificationtier: String? = nil)
```

**Line:** 14330 | **Kind:** method

### `PluginSearchResultEntry`

```
struct PluginSearchResultEntry
```

**Line:** 14369 | **Kind:** struct

### `init`

```
public init(
        score: Double,
        package: PluginSearchPackage)
```

**Line:** 14372 | **Kind:** method

### `PluginsInstallResult`

```
struct PluginsInstallResult
```

**Line:** 14387 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        plugin: PluginCatalogEntry,
        restartrequired: Bool,
        warnings: [String]? = nil)
```

**Line:** 14392 | **Kind:** method

### `PluginsListParams`

```
struct PluginsListParams
```

**Line:** 14413 | **Kind:** struct

### `PluginsListResult`

```
struct PluginsListResult
```

**Line:** 14415 | **Kind:** struct

### `init`

```
public init(
        plugins: [PluginCatalogEntry],
        diagnostics: [AnyCodable],
        mutationallowed: Bool)
```

**Line:** 14419 | **Kind:** method

### `PluginsRefreshParams`

```
struct PluginsRefreshParams
```

**Line:** 14437 | **Kind:** struct

### `PluginsRefreshResult`

```
struct PluginsRefreshResult
```

**Line:** 14439 | **Kind:** struct

### `init`

```
public init(
        ok: Bool)
```

**Line:** 14441 | **Kind:** method

### `PluginsSearchParams`

```
struct PluginsSearchParams
```

**Line:** 14453 | **Kind:** struct

### `init`

```
public init(
        query: String,
        limit: Int? = nil)
```

**Line:** 14456 | **Kind:** method

### `PluginsSearchResult`

```
struct PluginsSearchResult
```

**Line:** 14471 | **Kind:** struct

### `init`

```
public init(
        results: [PluginSearchResultEntry])
```

**Line:** 14473 | **Kind:** method

### `PluginsSessionActionFailureResult`

```
struct PluginsSessionActionFailureResult
```

**Line:** 14485 | **Kind:** struct

### `init`

```
public init(
        error: String,
        code: String? = nil,
        details: AnyCodable? = nil
    )
```

**Line:** 14490 | **Kind:** method

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 14509 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 14537 | **Kind:** fn

### `PluginsSessionActionParams`

```
struct PluginsSessionActionParams
```

**Line:** 14547 | **Kind:** struct

### `init`

```
public init(
        pluginid: String,
        actionid: String,
        sessionkey: String? = nil,
        payload: AnyCodable? = nil)
```

**Line:** 14552 | **Kind:** method

### `PluginsSessionActionSuccessResult`

```
struct PluginsSessionActionSuccessResult
```

**Line:** 14573 | **Kind:** struct

### `init`

```
public init(
        result: AnyCodable? = nil,
        continueagent: Bool? = nil,
        reply: AnyCodable? = nil
    )
```

**Line:** 14578 | **Kind:** method

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 14597 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 14625 | **Kind:** fn

### `PluginsSetEnabledParams`

```
struct PluginsSetEnabledParams
```

**Line:** 14635 | **Kind:** struct

### `init`

```
public init(
        pluginid: String,
        enabled: Bool)
```

**Line:** 14638 | **Kind:** method

### `PluginsSetEnabledResult`

```
struct PluginsSetEnabledResult
```

**Line:** 14653 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        plugin: PluginCatalogEntry,
        restartrequired: Bool,
        warnings: [String]? = nil)
```

**Line:** 14658 | **Kind:** method

### `PluginsUiDescriptorsParams`

```
struct PluginsUiDescriptorsParams
```

**Line:** 14679 | **Kind:** struct

### `PluginsUiDescriptorsResult`

```
struct PluginsUiDescriptorsResult
```

**Line:** 14681 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        descriptors: [PluginControlUiDescriptor])
```

**Line:** 14684 | **Kind:** method

### `PluginsUninstallParams`

```
struct PluginsUninstallParams
```

**Line:** 14699 | **Kind:** struct

### `init`

```
public init(
        pluginid: String)
```

**Line:** 14701 | **Kind:** method

### `PluginsUninstallResult`

```
struct PluginsUninstallResult
```

**Line:** 14713 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        pluginid: String,
        restartrequired: Bool,
        removed: [String],
        warnings: [String]? = nil)
```

**Line:** 14719 | **Kind:** method

### `DevicePairListParams`

```
struct DevicePairListParams
```

**Line:** 14743 | **Kind:** struct

### `DevicePairApproveParams`

```
struct DevicePairApproveParams
```

**Line:** 14745 | **Kind:** struct

### `init`

```
public init(
        requestid: String)
```

**Line:** 14747 | **Kind:** method

### `DevicePairRejectParams`

```
struct DevicePairRejectParams
```

**Line:** 14759 | **Kind:** struct

### `init`

```
public init(
        requestid: String)
```

**Line:** 14761 | **Kind:** method

### `DevicePairRemoveParams`

```
struct DevicePairRemoveParams
```

**Line:** 14773 | **Kind:** struct

### `init`

```
public init(
        deviceid: String)
```

**Line:** 14775 | **Kind:** method

### `DevicePairSetupCodeParams`

```
struct DevicePairSetupCodeParams
```

**Line:** 14787 | **Kind:** struct

### `init`

```
public init(
        publicurl: String? = nil,
        preferremoteurl: Bool? = nil,
        includeqr: Bool? = nil,
        bootstrapprofile: String? = nil)
```

**Line:** 14792 | **Kind:** method

### `DevicePairSetupCodeResult`

```
struct DevicePairSetupCodeResult
```

**Line:** 14813 | **Kind:** struct

### `init`

```
public init(
        setupcode: String,
        qrdataurl: String? = nil,
        gatewayurl: String,
        gatewayurls: [String]? = nil,
        auth: AnyCodable,
        urlsource: String,
        access: AnyCodable? = nil,
        accessdowngraded: Bool? = nil)
```

**Line:** 14822 | **Kind:** method

### `DevicePairRenameParams`

```
struct DevicePairRenameParams
```

**Line:** 14855 | **Kind:** struct

### `init`

```
public init(
        deviceid: String,
        label: String)
```

**Line:** 14858 | **Kind:** method

### `DeviceTokenRotateParams`

```
struct DeviceTokenRotateParams
```

**Line:** 14873 | **Kind:** struct

### `init`

```
public init(
        deviceid: String,
        role: String,
        scopes: [String]? = nil)
```

**Line:** 14877 | **Kind:** method

### `DeviceTokenRevokeParams`

```
struct DeviceTokenRevokeParams
```

**Line:** 14895 | **Kind:** struct

### `init`

```
public init(
        deviceid: String,
        role: String)
```

**Line:** 14898 | **Kind:** method

### `DevicePairRequestedEvent`

```
struct DevicePairRequestedEvent
```

**Line:** 14913 | **Kind:** struct

### `init`

```
public init(
        requestid: String,
        deviceid: String,
        publickey: String,
        displayname: String? = nil,
        platform: String? = nil,
        devicefamily: String? = nil,
        clientid: String? = nil,
        clientmode: String? = nil,
        browserorigin: String? = nil,
        role: String? = nil,
        roles: [String]? = nil,
        scopes: [String]? = nil,
        remoteip: String? = nil,
        silent: Bool? = nil,
        isrepair: Bool? = nil,
        ts: Int)
```

**Line:** 14930 | **Kind:** method

### `DevicePairResolvedEvent`

```
struct DevicePairResolvedEvent
```

**Line:** 14987 | **Kind:** struct

### `init`

```
public init(
        requestid: String,
        deviceid: String,
        decision: String,
        ts: Int)
```

**Line:** 14992 | **Kind:** method

### `ChatHistoryParams`

```
struct ChatHistoryParams
```

**Line:** 15013 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        agentid: String? = nil,
        limit: Int? = nil,
        offset: Int? = nil,
        messageid: String? = nil,
        sessionid: String? = nil,
        maxchars: Int? = nil)
```

**Line:** 15021 | **Kind:** method

### `ChatMetadataParams`

```
struct ChatMetadataParams
```

**Line:** 15051 | **Kind:** struct

### `init`

```
public init(
        agentid: String? = nil)
```

**Line:** 15053 | **Kind:** method

### `ChatMessageGetParams`

```
struct ChatMessageGetParams
```

**Line:** 15065 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        agentid: String? = nil,
        messageid: String,
        maxchars: Int? = nil)
```

**Line:** 15070 | **Kind:** method

### `ChatMessageGetResult`

```
struct ChatMessageGetResult
```

**Line:** 15091 | **Kind:** struct

### `init`

```
public init(
        ok: Bool,
        message: AnyCodable? = nil,
        unavailablereason: AnyCodable? = nil)
```

**Line:** 15095 | **Kind:** method

### `ChatToolTitlesParams`

```
struct ChatToolTitlesParams
```

**Line:** 15113 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        agentid: String? = nil,
        items: [[String: AnyCodable]])
```

**Line:** 15117 | **Kind:** method

### `ChatToolTitlesResult`

```
struct ChatToolTitlesResult
```

**Line:** 15135 | **Kind:** struct

### `init`

```
public init(
        titles: [String: AnyCodable],
        disabled: Bool? = nil)
```

**Line:** 15138 | **Kind:** method

### `ChatSendParams`

```
struct ChatSendParams
```

**Line:** 15153 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        agentid: String? = nil,
        sessionid: String? = nil,
        message: String,
        thinking: String? = nil,
        fastmodevalue: AnyCodable? = nil,
        fastautoonseconds: Int? = nil,
        queuemode: String? = nil,
        deliver: Bool? = nil,
        originatingchannel: String? = nil,
        originatingto: String? = nil,
        originatingaccountid: String? = nil,
        originatingthreadid: String? = nil,
        replytoid: String? = nil,
        attachments: [AnyCodable]? = nil,
        toolbindings: [String: AnyCodable]? = nil,
        timeoutms: Int? = nil,
        systeminputprovenance: [String: AnyCodable]? = nil,
        systemprovenancereceipt: String? = nil,
        suppresscommandinterpretation: Bool? = nil,
        expectedsessionroutingcontract: String? = nil,
        idempotencykey: String)
```

**Line:** 15177 | **Kind:** method

### `init`

```
public init(
        sessionkey: String,
        agentid: String? = nil,
        sessionid: String? = nil,
        message: String,
        thinking: String? = nil,
        fastmode: Bool?,
        queuemode: String? = nil,
        deliver: Bool? = nil,
        originatingchannel: String? = nil,
        originatingto: String? = nil,
        originatingaccountid: String? = nil,
        originatingthreadid: String? = nil,
        replytoid: String? = nil,
        attachments: [AnyCodable]? = nil,
        toolbindings: [String: AnyCodable]? = nil,
        timeoutms: Int? = nil,
        systeminputprovenance: [String: AnyCodable]? = nil,
        systemprovenancereceipt: String? = nil,
        suppresscommandinterpretation: Bool? = nil,
        expectedsessionroutingcontract: String? = nil,
        idempotencykey: String)
```

**Line:** 15225 | **Kind:** method

### `ChatAbortParams`

```
struct ChatAbortParams
```

**Line:** 15300 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        agentid: String? = nil,
        runid: String? = nil,
        preservesideruns: Bool? = nil)
```

**Line:** 15305 | **Kind:** method

### `ChatInjectParams`

```
struct ChatInjectParams
```

**Line:** 15326 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String,
        agentid: String? = nil,
        message: String,
        label: String? = nil)
```

**Line:** 15331 | **Kind:** method

### `ChatDeltaEvent`

```
struct ChatDeltaEvent
```

**Line:** 15352 | **Kind:** struct

### `init`

```
public init(
        runid: String,
        sessionkey: String,
        agentid: String? = nil,
        spawnedby: String? = nil,
        seq: Int,
        state: String,
        message: AnyCodable? = nil,
        deltatext: String,
        replace: Bool? = nil,
        usage: AnyCodable? = nil)
```

**Line:** 15363 | **Kind:** method

### `ChatFinalEvent`

```
struct ChatFinalEvent
```

**Line:** 15402 | **Kind:** struct

### `init`

```
public init(
        runid: String,
        sessionkey: String,
        agentid: String? = nil,
        spawnedby: String? = nil,
        seq: Int,
        state: String,
        message: AnyCodable? = nil,
        usage: AnyCodable? = nil,
        stopreason: String? = nil,
        yielded: Bool? = nil)
```

**Line:** 15413 | **Kind:** method

### `ChatAbortedEvent`

```
struct ChatAbortedEvent
```

**Line:** 15452 | **Kind:** struct

### `init`

```
public init(
        runid: String,
        sessionkey: String,
        agentid: String? = nil,
        spawnedby: String? = nil,
        seq: Int,
        state: String,
        message: AnyCodable? = nil,
        errormessage: String? = nil,
        stopreason: String? = nil)
```

**Line:** 15462 | **Kind:** method

### `ChatErrorEvent`

```
struct ChatErrorEvent
```

**Line:** 15498 | **Kind:** struct

### `init`

```
public init(
        runid: String,
        sessionkey: String,
        agentid: String? = nil,
        spawnedby: String? = nil,
        seq: Int,
        state: String,
        message: AnyCodable? = nil,
        errormessage: String? = nil,
        errorkind: AnyCodable? = nil,
        usage: AnyCodable? = nil,
        stopreason: String? = nil)
```

**Line:** 15510 | **Kind:** method

### `UpdateStatusParams`

```
struct UpdateStatusParams
```

**Line:** 15552 | **Kind:** struct

### `UpdateRunParams`

```
struct UpdateRunParams
```

**Line:** 15554 | **Kind:** struct

### `init`

```
public init(
        sessionkey: String? = nil,
        deliverycontext: [String: AnyCodable]? = nil,
        note: String? = nil,
        continuationmessage: String? = nil,
        restartdelayms: Int? = nil,
        timeoutms: Int? = nil)
```

**Line:** 15561 | **Kind:** method

### `TickEvent`

```
struct TickEvent
```

**Line:** 15588 | **Kind:** struct

### `init`

```
public init(
        ts: Int)
```

**Line:** 15590 | **Kind:** method

### `ShutdownEvent`

```
struct ShutdownEvent
```

**Line:** 15602 | **Kind:** struct

### `init`

```
public init(
        reason: String,
        restartexpectedms: Int? = nil)
```

**Line:** 15605 | **Kind:** method

### `BoardOp`

```
enum BoardOp
```

**Line:** 15620 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 15632 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 15652 | **Kind:** fn

### `BoardWidgetContent`

```
enum BoardWidgetContent
```

**Line:** 15666 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 15673 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 15688 | **Kind:** fn

### `BoardWidgetPutContent`

```
enum BoardWidgetPutContent
```

**Line:** 15697 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 15705 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 15721 | **Kind:** fn

### `BoardCommand`

```
enum BoardCommand
```

**Line:** 15731 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 15738 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 15753 | **Kind:** fn

### `GatewayErrorDetails`

```
enum GatewayErrorDetails
```

**Line:** 15762 | **Kind:** enum

### `init`

```
public init(code: String, missingscope: String, requiredscopes: [String])
```

**Line:** 15765 | **Kind:** method

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 15796 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 15811 | **Kind:** fn

### `GatewaySuspendPrepareResult`

```
enum GatewaySuspendPrepareResult
```

**Line:** 15820 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 15827 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 15842 | **Kind:** fn

### `GatewaySuspendStatusResult`

```
enum GatewaySuspendStatusResult
```

**Line:** 15851 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 15858 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 15873 | **Kind:** fn

### `UiCommand`

```
enum UiCommand
```

**Line:** 15882 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 15893 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 15912 | **Kind:** fn

### `SessionPlacement`

```
enum SessionPlacement
```

**Line:** 15925 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 15940 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 15963 | **Kind:** fn

### `AuditActivityEventV1`

```
enum AuditActivityEventV1
```

**Line:** 15980 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 15989 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 16006 | **Kind:** fn

### `ApprovalPresentation`

```
enum ApprovalPresentation
```

**Line:** 16017 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 16025 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 16041 | **Kind:** fn

### `ApprovalSnapshot`

```
enum ApprovalSnapshot
```

**Line:** 16051 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 16061 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 16079 | **Kind:** fn

### `TerminalApprovalSnapshot`

```
enum TerminalApprovalSnapshot
```

**Line:** 16091 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 16100 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 16117 | **Kind:** fn

### `SessionApprovalEvent`

```
enum SessionApprovalEvent
```

**Line:** 16128 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 16135 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 16150 | **Kind:** fn

### `PluginCatalogInstallAction`

```
enum PluginCatalogInstallAction
```

**Line:** 16159 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 16166 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 16181 | **Kind:** fn

### `PluginsSessionActionResult`

```
enum PluginsSessionActionResult
```

**Line:** 16190 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 16197 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 16206 | **Kind:** fn

### `ChatEvent`

```
enum ChatEvent
```

**Line:** 16215 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 16224 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 16241 | **Kind:** fn

### `GatewayFrame`

```
enum GatewayFrame
```

**Line:** 16252 | **Kind:** enum

### `init`

```
public init(from decoder: Decoder) throws
```

**Line:** 16261 | **Kind:** method

### `encode`

```
public func encode(to encoder: Encoder) throws
```

**Line:** 16278 | **Kind:** fn
