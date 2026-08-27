# apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatTransport.swift

[← Back to Module](../modules/apps-shared-OpenClawKit-Sources-OpenClawChatUI/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 894
- **Language:** Swift
- **Symbols:** 84
- **Public symbols:** 77

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 4 | enum | OpenClawChatTransportEvent | pub | `enum OpenClawChatTransportEvent` |
| 16 | struct | OpenClawQuestionResolvedEvent | pub | `struct OpenClawQuestionResolvedEvent` |
| 22 | method | init | pub | `public init(id: String, status: QuestionStatus,...` |
| 29 | struct | OpenClawChatSessionsChangedEvent | pub | `struct OpenClawChatSessionsChangedEvent` |
| 33 | method | init | pub | `public init(sessionKey: String?, agentId: Strin...` |
| 44 | struct | OpenClawChatTransportRouteLease | pub | `struct OpenClawChatTransportRouteLease` |
| 66 | method | init | pub | `public init(     sendMessage: @escaping SendMes...` |
| 80 | method | init | pub | `public init(     sendTargetedMessage: @escaping...` |
| 90 | fn | sendMessage | pub | `public func sendMessage(     sessionKey: String...` |
| 107 | fn | requestHistory | pub | `public func requestHistory(     sessionKey: Str...` |
| 116 | enum | OpenClawChatTransportRouteLeaseResult | pub | `enum OpenClawChatTransportRouteLeaseResult` |
| 123 | struct | OpenClawChatSessionSettingsRouteLease | pub | `struct OpenClawChatSessionSettingsRouteLease` |
| 130 | method | init | pub | `public init(patchSessionSettings: @escaping Pat...` |
| 134 | fn | patchSessionSettings | pub | `public func patchSessionSettings(     sessionKe...` |
| 146 | struct | OpenClawChatSessionMutationRouteLease | pub | `struct OpenClawChatSessionMutationRouteLease` |
| 158 | method | init | pub | `public init(     patchSession: @escaping PatchS...` |
| 166 | fn | patchSession | pub | `public func patchSession(     key: String,     ...` |
| 177 | fn | deleteSession | pub | `public func deleteSession(key: String) async th...` |
| 189 | struct | OpenClawChatSessionGroupsRouteLease | pub | `struct OpenClawChatSessionGroupsRouteLease` |
| 199 | method | init | pub | `public init(     listGroups: @escaping ListGrou...` |
| 211 | fn | listGroups | pub | `public func listGroups() async throws -> OpenCl...` |
| 215 | fn | putGroups | pub | `public func putGroups(names: [String]) async th...` |
| 219 | fn | renameGroup | pub | `public func renameGroup(name: String, to: Strin...` |
| 223 | fn | deleteGroup | pub | `public func deleteGroup(name: String) async thr...` |
| 231 | struct | OpenClawChatNewSessionRouteLease | pub | `struct OpenClawChatNewSessionRouteLease` |
| 243 | method | init | pub | `public init(     listAgents: @escaping ListAgen...` |
| 251 | fn | listAgents | pub | `public func listAgents() async throws -> OpenCl...` |
| 255 | fn | createSession | pub | `public func createSession(     key: String,    ...` |
| 276 | enum | OpenClawChatTransportSendError | pub | `enum OpenClawChatTransportSendError` |
| 280 | enum | OpenClawChatTransportUpgradeMessage | pub | `enum OpenClawChatTransportUpgradeMessage` |
| 285 | enum | OpenClawChatRunTerminalState | pub | `enum OpenClawChatRunTerminalState` |
| 290 | enum | OpenClawChatRunObservation | pub | `enum OpenClawChatRunObservation` |
| 294 | fn | fromWaitResponse | pub | `public static func fromWaitResponse(     status...` |
| 345 | fn | normalized | (private) | `private static func normalized(_ value: String?...` |
| 349 | fn | failureMessage | (private) | `private static func failureMessage(     status:...` |
| 377 | trait | OpenClawChatTransport | pub | `protocol OpenClawChatTransport` |
| 378 | fn | createSession | (internal) | `func createSession(     key: String,     label:...` |
| 395 | fn | listCommands | (internal) | `func listCommands(sessionKey: String) async thr...` |
| 417 | fn | listSessions | (internal) | `func listSessions(     limit: Int?,     search:...` |
| 473 | mod | extension OpenClawChatTransport | (internal) | - |
| 474 | fn | listQuestions | pub | `public func listQuestions() async throws -> [Qu...` |
| 477 | fn | getQuestion | pub | `public func getQuestion(id _: String) async thr...` |
| 484 | fn | resolveQuestion | pub | `public func resolveQuestion(id _: String, answe...` |
| 491 | fn | cancelQuestion | pub | `public func cancelQuestion(id _: String) async ...` |
| 498 | fn | requestFullMessage | pub | `public func requestFullMessage(sessionKey _: St...` |
| 502 | fn | resolveInlineWidgetResource | pub | `public func resolveInlineWidgetResource(     pa...` |
| 510 | fn | resolveInlineWidgetURL | pub | `public func resolveInlineWidgetURL(path _: Stri...` |
| 518 | fn | acquireOutboxRouteLease | pub | `public func acquireOutboxRouteLease() async -> ...` |
| 534 | fn | acquireSessionSettingsRouteLease | pub | `public func acquireSessionSettingsRouteLease() ...` |
| 544 | fn | acquireSessionMutationRouteLease | pub | `public func acquireSessionMutationRouteLease() ...` |
| 561 | fn | acquireSessionGroupsRouteLease | pub | `public func acquireSessionGroupsRouteLease() as...` |
| 570 | fn | acquireNewSessionRouteLease | pub | `public func acquireNewSessionRouteLease() async...` |
| 585 | fn | sendMessage | pub | `public func sendMessage(     sessionKey: String...` |
| 602 | fn | createSession | pub | `public func createSession(     key _: String,  ...` |
| 614 | fn | createSession | pub | `public func createSession(     key: String,    ...` |
| 640 | fn | setActiveSessionKey | pub | `public func setActiveSessionKey(_: String) asyn...` |
| 642 | fn | waitForRunCompletion | pub | `public func waitForRunCompletion(runId _: Strin...` |
| 646 | fn | resetSession | pub | `public func resetSession(sessionKey _: String) ...` |
| 653 | fn | compactSession | pub | `public func compactSession(sessionKey _: String...` |
| 660 | fn | abortRun | pub | `public func abortRun(sessionKey _: String, runI...` |
| 667 | fn | listSessions | pub | `public func listSessions(     limit _: Int?,   ...` |
| 683 | fn | listSessions | pub | `public func listSessions(limit: Int?) async thr...` |
| 686 | fn | listSessions | pub | `public func listSessions(limit: Int?, archived:...` |
| 690 | fn | listAgents | pub | `public func listAgents() async throws -> OpenCl...` |
| 694 | fn | listSessionGroups | pub | `public func listSessionGroups() async throws ->...` |
| 698 | fn | putSessionGroups | pub | `public func putSessionGroups(names _: [String])...` |
| 705 | fn | renameSessionGroup | pub | `public func renameSessionGroup(     name _: Str...` |
| 715 | fn | deleteSessionGroup | pub | `public func deleteSessionGroup(name _: String) ...` |
| 722 | fn | patchSession | pub | `public func patchSession(     key _: String,   ...` |
| 736 | fn | deleteSession | pub | `public func deleteSession(key _: String) async ...` |
| 743 | fn | forkSession | pub | `public func forkSession(parentKey _: String) as...` |
| 750 | fn | rewindSession | pub | `public func rewindSession(     sessionKey _: St...` |
| 760 | fn | forkSessionAtMessage | pub | `public func forkSessionAtMessage(     sessionKe...` |
| 770 | fn | listModels | pub | `public func listModels() async throws -> [OpenC...` |
| 781 | fn | listCommands | pub | `public func listCommands(sessionKey _: String) ...` |
| 785 | fn | setSessionModel | pub | `public func setSessionModel(sessionKey _: Strin...` |
| 792 | fn | patchSessionModel | pub | `public func patchSessionModel(     sessionKey: ...` |
| 801 | fn | setSessionThinking | pub | `public func setSessionThinking(sessionKey _: St...` |
| 808 | fn | patchSessionSettings | pub | `public func patchSessionSettings(     sessionKe...` |
| 844 | enum | OpenClawChatSessionRoutingContract | pub | `enum OpenClawChatSessionRoutingContract` |
| 855 | fn | expectedValue | pub | `public static func expectedValue(     _ contrac...` |
| 862 | fn | make | pub | `public static func make(     scope: String?,   ...` |
| 877 | fn | parse | pub | `public static func parse(_ contract: String?) -...` |
| 889 | fn | normalize | (private) | `private static func normalize(_ value: String?)...` |

## Public API

### `OpenClawChatTransportEvent`

```
enum OpenClawChatTransportEvent
```

**Line:** 4 | **Kind:** enum

### `OpenClawQuestionResolvedEvent`

```
struct OpenClawQuestionResolvedEvent
```

**Line:** 16 | **Kind:** struct

### `init`

```
public init(id: String, status: QuestionStatus, answers: QuestionAnswers? = nil)
```

**Line:** 22 | **Kind:** method

### `OpenClawChatSessionsChangedEvent`

```
struct OpenClawChatSessionsChangedEvent
```

**Line:** 29 | **Kind:** struct

### `init`

```
public init(sessionKey: String?, agentId: String? = nil, reason: String)
```

**Line:** 33 | **Kind:** method

### `OpenClawChatTransportRouteLease`

```
struct OpenClawChatTransportRouteLease
```

**Line:** 44 | **Kind:** struct

### `init`

```
public init(
        sendMessage: @escaping SendMessage,
        requestHistory: @escaping RequestHistory,
        sessionRoutingContract: String? = nil)
```

**Line:** 66 | **Kind:** method

### `init`

```
public init(
        sendTargetedMessage: @escaping SendTargetedMessage,
        requestTargetedHistory: @escaping RequestTargetedHistory,
        sessionRoutingContract: String? = nil)
```

**Line:** 80 | **Kind:** method

### `sendMessage`

```
public func sendMessage(
        sessionKey: String,
        agentID: String? = nil,
        message: String,
        thinking: String,
        idempotencyKey: String,
        attachments: [OpenClawChatAttachmentPayload]) async throws -> OpenClawChatSendResponse
```

**Line:** 90 | **Kind:** fn

### `requestHistory`

```
public func requestHistory(
        sessionKey: String,
        agentID: String? = nil) async throws -> OpenClawChatHistoryPayload
```

**Line:** 107 | **Kind:** fn

### `OpenClawChatTransportRouteLeaseResult`

```
enum OpenClawChatTransportRouteLeaseResult
```

**Line:** 116 | **Kind:** enum

### `OpenClawChatSessionSettingsRouteLease`

```
struct OpenClawChatSessionSettingsRouteLease
```

**Line:** 123 | **Kind:** struct

### `init`

```
public init(patchSessionSettings: @escaping PatchSessionSettings)
```

**Line:** 130 | **Kind:** method

### `patchSessionSettings`

```
public func patchSessionSettings(
        sessionKey: String,
        agentID: String?,
        patch: OpenClawChatSessionSettingsPatch) async throws -> OpenClawChatModelPatchResult?
```

**Line:** 134 | **Kind:** fn

### `OpenClawChatSessionMutationRouteLease`

```
struct OpenClawChatSessionMutationRouteLease
```

**Line:** 146 | **Kind:** struct

### `init`

```
public init(
        patchSession: @escaping PatchSession,
        deleteSession: DeleteSession? = nil)
```

**Line:** 158 | **Kind:** method

### `patchSession`

```
public func patchSession(
        key: String,
        label: String??,
        category: String??,
        pinned: Bool?,
        archived: Bool?,
        unread: Bool?) async throws
```

**Line:** 166 | **Kind:** fn

### `deleteSession`

```
public func deleteSession(key: String) async throws
```

**Line:** 177 | **Kind:** fn

### `OpenClawChatSessionGroupsRouteLease`

```
struct OpenClawChatSessionGroupsRouteLease
```

**Line:** 189 | **Kind:** struct

### `init`

```
public init(
        listGroups: @escaping ListGroups,
        putGroups: @escaping PutGroups,
        renameGroup: @escaping RenameGroup,
        deleteGroup: @escaping DeleteGroup)
```

**Line:** 199 | **Kind:** method

### `listGroups`

```
public func listGroups() async throws -> OpenClawChatSessionGroupsResponse?
```

**Line:** 211 | **Kind:** fn

### `putGroups`

```
public func putGroups(names: [String]) async throws -> OpenClawChatSessionGroupsMutationResponse
```

**Line:** 215 | **Kind:** fn

### `renameGroup`

```
public func renameGroup(name: String, to: String) async throws -> OpenClawChatSessionGroupsMutationResponse
```

**Line:** 219 | **Kind:** fn

### `deleteGroup`

```
public func deleteGroup(name: String) async throws -> OpenClawChatSessionGroupsMutationResponse
```

**Line:** 223 | **Kind:** fn

### `OpenClawChatNewSessionRouteLease`

```
struct OpenClawChatNewSessionRouteLease
```

**Line:** 231 | **Kind:** struct

### `init`

```
public init(
        listAgents: @escaping ListAgents,
        createSession: @escaping CreateSession)
```

**Line:** 243 | **Kind:** method

### `listAgents`

```
public func listAgents() async throws -> OpenClawChatAgentsListResponse?
```

**Line:** 251 | **Kind:** fn

### `createSession`

```
public func createSession(
        key: String,
        label: String?,
        agentID: String?,
        parentSessionKey: String?,
        worktree: Bool?,
        worktreeBaseRef: String?) async throws -> OpenClawChatCreateSessionResponse
```

**Line:** 255 | **Kind:** fn

### `OpenClawChatTransportSendError`

```
enum OpenClawChatTransportSendError
```

**Line:** 276 | **Kind:** enum

### `OpenClawChatTransportUpgradeMessage`

```
enum OpenClawChatTransportUpgradeMessage
```

**Line:** 280 | **Kind:** enum

### `OpenClawChatRunTerminalState`

```
enum OpenClawChatRunTerminalState
```

**Line:** 285 | **Kind:** enum

### `OpenClawChatRunObservation`

```
enum OpenClawChatRunObservation
```

**Line:** 290 | **Kind:** enum

### `fromWaitResponse`

```
public static func fromWaitResponse(
        status: String?,
        endedAt: Double? = nil,
        error: String? = nil,
        stopReason: String? = nil,
        livenessState: String? = nil,
        yielded: Bool? = nil,
        pendingError: Bool? = nil,
        timeoutPhase: String? = nil,
        providerStarted: Bool? = nil,
        aborted: Bool? = nil) -> Self
```

**Line:** 294 | **Kind:** fn

### `OpenClawChatTransport`

```
protocol OpenClawChatTransport
```

**Line:** 377 | **Kind:** trait

### `listQuestions`

```
public func listQuestions() async throws -> [QuestionRecord]
```

**Line:** 474 | **Kind:** fn

### `getQuestion`

```
public func getQuestion(id _: String) async throws -> QuestionRecord
```

**Line:** 477 | **Kind:** fn

### `resolveQuestion`

```
public func resolveQuestion(id _: String, answers _: [String: [String]]) async throws
```

**Line:** 484 | **Kind:** fn

### `cancelQuestion`

```
public func cancelQuestion(id _: String) async throws
```

**Line:** 491 | **Kind:** fn

### `requestFullMessage`

```
public func requestFullMessage(sessionKey _: String, messageID _: String) async throws -> OpenClawChatMessage?
```

**Line:** 498 | **Kind:** fn

### `resolveInlineWidgetResource`

```
public func resolveInlineWidgetResource(
        path: String,
        replacing failedResource: OpenClawChatWidgetResource?) async -> OpenClawChatWidgetResource?
```

**Line:** 502 | **Kind:** fn

### `resolveInlineWidgetURL`

```
public func resolveInlineWidgetURL(path _: String, replacing _: URL?) async -> URL?
```

**Line:** 510 | **Kind:** fn

### `acquireOutboxRouteLease`

```
public func acquireOutboxRouteLease() async -> OpenClawChatTransportRouteLeaseResult
```

**Line:** 518 | **Kind:** fn

### `acquireSessionSettingsRouteLease`

```
public func acquireSessionSettingsRouteLease() async -> OpenClawChatSessionSettingsRouteLease?
```

**Line:** 534 | **Kind:** fn

### `acquireSessionMutationRouteLease`

```
public func acquireSessionMutationRouteLease() async -> OpenClawChatSessionMutationRouteLease?
```

**Line:** 544 | **Kind:** fn

### `acquireSessionGroupsRouteLease`

```
public func acquireSessionGroupsRouteLease() async -> OpenClawChatSessionGroupsRouteLease?
```

**Line:** 561 | **Kind:** fn

### `acquireNewSessionRouteLease`

```
public func acquireNewSessionRouteLease() async -> OpenClawChatNewSessionRouteLease?
```

**Line:** 570 | **Kind:** fn

### `sendMessage`

```
public func sendMessage(
        sessionKey: String,
        agentID _: String?,
        expectedSessionRoutingContract _: String?,
        message: String,
        thinking: String,
        idempotencyKey: String,
        attachments: [OpenClawChatAttachmentPayload]) async throws -> OpenClawChatSendResponse
```

**Line:** 585 | **Kind:** fn

### `createSession`

```
public func createSession(
        key _: String,
        label _: String?,
        parentSessionKey _: String?,
        worktree _: Bool?) async throws -> OpenClawChatCreateSessionResponse
```

**Line:** 602 | **Kind:** fn

### `createSession`

```
public func createSession(
        key: String,
        label: String?,
        agentID: String?,
        parentSessionKey: String?,
        worktree: Bool?,
        worktreeBaseRef: String?) async throws -> OpenClawChatCreateSessionResponse
```

**Line:** 614 | **Kind:** fn

### `setActiveSessionKey`

```
public func setActiveSessionKey(_: String) async throws
```

**Line:** 640 | **Kind:** fn

### `waitForRunCompletion`

```
public func waitForRunCompletion(runId _: String, timeoutMs _: Int) async -> OpenClawChatRunObservation
```

**Line:** 642 | **Kind:** fn

### `resetSession`

```
public func resetSession(sessionKey _: String) async throws
```

**Line:** 646 | **Kind:** fn

### `compactSession`

```
public func compactSession(sessionKey _: String) async throws
```

**Line:** 653 | **Kind:** fn

### `abortRun`

```
public func abortRun(sessionKey _: String, runId _: String) async throws
```

**Line:** 660 | **Kind:** fn

### `listSessions`

```
public func listSessions(
        limit _: Int?,
        search _: String?,
        archived _: Bool) async throws -> OpenClawChatSessionsListResponse
```

**Line:** 667 | **Kind:** fn

### `listSessions`

```
public func listSessions(limit: Int?) async throws -> OpenClawChatSessionsListResponse
```

**Line:** 683 | **Kind:** fn

### `listSessions`

```
public func listSessions(limit: Int?, archived: Bool) async throws -> OpenClawChatSessionsListResponse
```

**Line:** 686 | **Kind:** fn

### `listAgents`

```
public func listAgents() async throws -> OpenClawChatAgentsListResponse?
```

**Line:** 690 | **Kind:** fn

### `listSessionGroups`

```
public func listSessionGroups() async throws -> OpenClawChatSessionGroupsResponse?
```

**Line:** 694 | **Kind:** fn

### `putSessionGroups`

```
public func putSessionGroups(names _: [String]) async throws -> OpenClawChatSessionGroupsMutationResponse
```

**Line:** 698 | **Kind:** fn

### `renameSessionGroup`

```
public func renameSessionGroup(
        name _: String,
        to _: String) async throws -> OpenClawChatSessionGroupsMutationResponse
```

**Line:** 705 | **Kind:** fn

### `deleteSessionGroup`

```
public func deleteSessionGroup(name _: String) async throws -> OpenClawChatSessionGroupsMutationResponse
```

**Line:** 715 | **Kind:** fn

### `patchSession`

```
public func patchSession(
        key _: String,
        label _: String?? = nil,
        category _: String?? = nil,
        pinned _: Bool? = nil,
        archived _: Bool? = nil,
        unread _: Bool? = nil) async throws
```

**Line:** 722 | **Kind:** fn

### `deleteSession`

```
public func deleteSession(key _: String) async throws
```

**Line:** 736 | **Kind:** fn

### `forkSession`

```
public func forkSession(parentKey _: String) async throws -> String
```

**Line:** 743 | **Kind:** fn

### `rewindSession`

```
public func rewindSession(
        sessionKey _: String,
        entryId _: String) async throws -> OpenClawChatRewindResponse
```

**Line:** 750 | **Kind:** fn

### `forkSessionAtMessage`

```
public func forkSessionAtMessage(
        sessionKey _: String,
        entryId _: String) async throws -> OpenClawChatForkAtMessageResponse
```

**Line:** 760 | **Kind:** fn

### `listModels`

```
public func listModels() async throws -> [OpenClawChatModelChoice]
```

**Line:** 770 | **Kind:** fn

### `listCommands`

```
public func listCommands(sessionKey _: String) async throws -> [OpenClawChatCommandChoice]
```

**Line:** 781 | **Kind:** fn

### `setSessionModel`

```
public func setSessionModel(sessionKey _: String, model _: String?) async throws
```

**Line:** 785 | **Kind:** fn

### `patchSessionModel`

```
public func patchSessionModel(
        sessionKey: String,
        agentID _: String?,
        model: String?) async throws -> OpenClawChatModelPatchResult?
```

**Line:** 792 | **Kind:** fn

### `setSessionThinking`

```
public func setSessionThinking(sessionKey _: String, thinkingLevel _: String) async throws
```

**Line:** 801 | **Kind:** fn

### `patchSessionSettings`

```
public func patchSessionSettings(
        sessionKey: String,
        agentID: String?,
        patch: OpenClawChatSessionSettingsPatch) async throws -> OpenClawChatModelPatchResult?
```

**Line:** 808 | **Kind:** fn

### `OpenClawChatSessionRoutingContract`

```
enum OpenClawChatSessionRoutingContract
```

**Line:** 844 | **Kind:** enum

### `expectedValue`

```
public static func expectedValue(
        _ contract: String?,
        serverSupportsGuard: Bool) -> String?
```

**Line:** 855 | **Kind:** fn

### `make`

```
public static func make(
        scope: String?,
        mainKey: String?,
        defaultAgentID: String?) -> String?
```

**Line:** 862 | **Kind:** fn

### `parse`

```
public static func parse(_ contract: String?) -> Components?
```

**Line:** 877 | **Kind:** fn
