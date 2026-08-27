# apps/shared/OpenClawKit/Tests/OpenClawKitTests/ChatViewModelTests.swift

[← Back to Module](../modules/apps-shared-OpenClawKit-Tests-OpenClawKitTests/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 11305
- **Language:** Swift
- **Symbols:** 136
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 6 | fn | chatTextMessage | (private) | `private func chatTextMessage(   role: String,  ...` |
| 28 | fn | chatTextModelMessage | (private) | `private func chatTextModelMessage(   role: Stri...` |
| 48 | fn | chatErrorMessage | (private) | `private func chatErrorMessage(role: String, err...` |
| 60 | fn | containsUserText | (private) | `fileprivate func containsUserText(_ text: Strin...` |
| 67 | fn | historyPayload | (private) | `private func historyPayload(   sessionKey: Stri...` |
| 89 | fn | sessionEntry | (private) | `private func sessionEntry(   key: String,   upd...` |
| 129 | fn | sessionsListResponse | (private) | `private func sessionsListResponse(_ sessions: [...` |
| 138 | fn | thinkingOption | (private) | `private func thinkingOption(_ id: String, label...` |
| 142 | fn | sessionEntry | (private) | `private func sessionEntry(   key: String,   upd...` |
| 186 | fn | modelChoice | (private) | `private func modelChoice(   id: String,   name:...` |
| 200 | fn | sessionsResponse | (private) | `private func sessionsResponse(   _ session: Ope...` |
| 212 | fn | commandChoice | (private) | `private func commandChoice(   name: String,   a...` |
| 229 | struct | ToolActivityEvent | (private) | `struct ToolActivityEvent` |
| 236 | class | ToolActivityRecorder | (private) | `class ToolActivityRecorder` |
| 239 | fn | record | (internal) | `func record(id: String, name: String, isActive:...` |
| 248 | fn | makeViewModel | (private) | `@MainActor private func makeViewModel(   sessio...` |
| 342 | fn | loadAndWaitBootstrap | (private) | `private func loadAndWaitBootstrap(   vm: OpenCl...` |
| 354 | fn | sendUserMessage | (private) | `private func sendUserMessage(_ vm: OpenClawChat...` |
| 361 | fn | waitForLastSentRunId | (private) | `private func waitForLastSentRunId(_ transport: ...` |
| 368 | fn | waitForSentRunId | (private) | `private func waitForSentRunId(after sentRunCoun...` |
| 375 | fn | sendMessageAndEmitFinal | (private) | `@discardableResult private func sendMessageAndE...` |
| 402 | fn | emitAssistantText | (private) | `private func emitAssistantText(   transport: Te...` |
| 418 | fn | emitToolStart | (private) | `private func emitToolStart(   transport: TestCh...` |
| 438 | fn | emitAgentLifecycleEnd | (private) | `private func emitAgentLifecycleEnd(   transport...` |
| 453 | fn | planStep | (private) | `private func planStep(_ step: String, status: S...` |
| 460 | fn | emitPlan | (private) | `private func emitPlan(   transport: TestChatTra...` |
| 484 | fn | emitExternalFinal | (private) | `private func emitExternalFinal(   transport: Te...` |
| 500 | class | CallbackBox | (private) | `class CallbackBox` |
| 505 | class | OptionalCallbackBox | (private) | `class OptionalCallbackBox` |
| 510 | class | AsyncGate | (private) | `actor AsyncGate` |
| 513 | fn | wait | (internal) | `func wait() async` |
| 520 | fn | open | (internal) | `func open()` |
| 528 | class | AsyncCounter | (private) | `actor AsyncCounter` |
| 530 | method | init | (internal) | `init(_ initialValue: Int = 0)` |
| 534 | fn | increment | (internal) | `func increment() -> Int` |
| 539 | fn | current | (internal) | `func current() -> Int` |
| 545 | class | AsyncStringRecorder | (private) | `actor AsyncStringRecorder` |
| 547 | fn | append | (internal) | `func append(_ value: String)` |
| 551 | fn | current | (internal) | `func current() -> [String]` |
| 557 | class | SessionSubscribeGate | (private) | `actor SessionSubscribeGate` |
| 559 | fn | wait | (internal) | `func wait() async` |
| 565 | fn | release | (internal) | `func release()` |
| 577 | method | init | (internal) | `init(_ value: Value)` |
| 588 | struct | TestSessionListQuery | (internal) | `struct TestSessionListQuery` |
| 594 | class | TestChatTransportState | (private) | `actor TestChatTransportState` |
| 625 | class | TestChatTransport | (private) | `class TestChatTransport` |
| 726 | fn | events | (internal) | `func events() -> AsyncStream<OpenClawChatTransp...` |
| 730 | fn | setActiveSessionKey | (internal) | `func setActiveSessionKey(_ sessionKey: String) ...` |
| 737 | fn | createSession | (internal) | `func createSession(     key: String,     label ...` |
| 751 | fn | requestHistory | (internal) | `func requestHistory(sessionKey: String) async t...` |
| 772 | fn | sendMessage | (internal) | `func sendMessage(     sessionKey: String,     a...` |
| 791 | fn | sendMessage | (internal) | `func sendMessage(     sessionKey: String,     m...` |
| 808 | fn | abortRun | (internal) | `func abortRun(sessionKey _: String, runId: Stri...` |
| 812 | fn | listSessions | (internal) | `func listSessions(     limit: Int?,     search:...` |
| 835 | fn | patchSession | (internal) | `func patchSession(     key: String,     label: ...` |
| 863 | fn | listModels | (internal) | `func listModels() async throws -> [OpenClawChat...` |
| 875 | fn | listCommands | (internal) | `func listCommands(sessionKey: String) async thr...` |
| 884 | fn | setSessionModel | (internal) | `func setSessionModel(sessionKey: String, model:...` |
| 888 | fn | acquireSessionSettingsRouteLease | (internal) | `func acquireSessionSettingsRouteLease() async -...` |
| 905 | fn | patchSessionModel | (internal) | `func patchSessionModel(     sessionKey: String,...` |
| 926 | fn | resetSession | (internal) | `func resetSession(sessionKey: String) async throws` |
| 933 | fn | compactSession | (internal) | `func compactSession(sessionKey: String) async t...` |
| 940 | fn | setSessionThinking | (internal) | `func setSessionThinking(sessionKey: String, thi...` |
| 944 | fn | patchSessionSettings | (internal) | `func patchSessionSettings(     sessionKey: Stri...` |
| 976 | fn | patchSessionThinking | (private) | `private func patchSessionThinking(     sessionK...` |
| 997 | fn | requestHealth | (internal) | `func requestHealth(timeoutMs _: Int) async thro...` |
| 1005 | fn | listQuestions | (internal) | `func listQuestions() async throws -> [QuestionR...` |
| 1009 | fn | getQuestion | (internal) | `func getQuestion(id: String) async throws -> Qu...` |
| 1019 | fn | cancelQuestion | (internal) | `func cancelQuestion(id: String) async throws` |
| 1023 | fn | waitForRunCompletion | (internal) | `func waitForRunCompletion(     runId: String,  ...` |
| 1031 | fn | emit | (internal) | `func emit(_ evt: OpenClawChatTransportEvent)` |
| 1035 | fn | lastSentRunId | (internal) | `func lastSentRunId() async -> String?` |
| 1040 | fn | sentRunIds | (internal) | `func sentRunIds() async -> [String]` |
| 1044 | fn | sentMessages | (internal) | `func sentMessages() async -> [String]` |
| 1048 | fn | sentAgentIDs | (internal) | `func sentAgentIDs() async -> [String?]` |
| 1052 | fn | sentRoutingContracts | (internal) | `func sentRoutingContracts() async -> [String?]` |
| 1056 | fn | commandSessionKeys | (internal) | `func commandSessionKeys() async -> [String]` |
| 1060 | fn | lastSentSessionKey | (internal) | `func lastSentSessionKey() async -> String?` |
| 1065 | fn | abortedRunIds | (internal) | `func abortedRunIds() async -> [String]` |
| 1069 | fn | sentThinkingLevels | (internal) | `func sentThinkingLevels() async -> [String]` |
| 1073 | fn | patchedModels | (internal) | `func patchedModels() async -> [String?]` |
| 1077 | fn | patchedModelTargets | (internal) | `func patchedModelTargets() async -> [(sessionKe...` |
| 1081 | fn | activeSessionKeys | (internal) | `func activeSessionKeys() async -> [String]` |
| 1085 | fn | patchedThinkingLevels | (internal) | `func patchedThinkingLevels() async -> [String]` |
| 1089 | fn | healthCallCount | (internal) | `func healthCallCount() async -> Int` |
| 1093 | fn | resetSessionKeys | (internal) | `func resetSessionKeys() async -> [String]` |
| 1097 | fn | compactSessionKeys | (internal) | `func compactSessionKeys() async -> [String]` |
| 1101 | fn | waitCompletionRunIds | (internal) | `func waitCompletionRunIds() async -> [String]` |
| 1105 | fn | createdSessionKeys | (internal) | `func createdSessionKeys() async -> [String]` |
| 1109 | fn | createdParentSessionKeys | (internal) | `func createdParentSessionKeys() async -> [String?]` |
| 1113 | fn | listSessionsQueries | (internal) | `func listSessionsQueries() async -> [TestSessio...` |
| 1117 | fn | renamedLabels | (internal) | `func renamedLabels() async -> [(key: String, la...` |
| 1121 | fn | pinnedChanges | (internal) | `func pinnedChanges() async -> [(key: String, pi...` |
| 1125 | fn | archivedChanges | (internal) | `func archivedChanges() async -> [(key: String, ...` |
| 1129 | fn | replaceSessionSettingsRoute | (internal) | `func replaceSessionSettingsRoute() async` |
| 1133 | fn | capturedSessionSettingsRouteGenerations | (internal) | `func capturedSessionSettingsRouteGenerations() ...` |
| 1139 | mod | extension TestChatTransportState | (internal) | - |
| 1140 | fn | captureSessionSettingsRouteGeneration | (private) | `fileprivate func captureSessionSettingsRouteGen...` |
| 1144 | fn | replaceSessionSettingsRoute | (private) | `fileprivate func replaceSessionSettingsRoute()` |
| 1148 | fn | nextHistoryCallIndex | (private) | `fileprivate func nextHistoryCallIndex() -> Int` |
| 1153 | fn | nextSessionsCallIndex | (private) | `private func nextSessionsCallIndex() -> Int` |
| 1158 | fn | recordSessionsCall | (private) | `fileprivate func recordSessionsCall(_ query: Te...` |
| 1163 | fn | nextModelsCallIndex | (private) | `fileprivate func nextModelsCallIndex() -> Int` |
| 1168 | fn | nextCommandsCallIndex | (private) | `fileprivate func nextCommandsCallIndex() -> Int` |
| 1173 | fn | nextHealthCallIndex | (private) | `fileprivate func nextHealthCallIndex() -> Int` |
| 1178 | fn | activeSessionKeysAppend | (private) | `fileprivate func activeSessionKeysAppend(_ v: S...` |
| 1182 | fn | sentRunIdsAppend | (private) | `fileprivate func sentRunIdsAppend(_ v: String)` |
| 1186 | fn | commandSessionKeysAppend | (private) | `fileprivate func commandSessionKeysAppend(_ v: ...` |
| 1190 | fn | abortedRunIdsAppend | (private) | `fileprivate func abortedRunIdsAppend(_ v: String)` |
| 1194 | fn | waitCompletionRunIdsAppend | (private) | `fileprivate func waitCompletionRunIdsAppend(_ v...` |
| 1198 | fn | sentThinkingLevelsAppend | (private) | `fileprivate func sentThinkingLevelsAppend(_ v: ...` |
| 1202 | fn | recordPatchedModel | (private) | `fileprivate func recordPatchedModel(     sessio...` |
| 1213 | fn | recordPatchedThinkingLevel | (private) | `fileprivate func recordPatchedThinkingLevel(_ v...` |
| 1219 | fn | resetSessionKeysAppend | (private) | `fileprivate func resetSessionKeysAppend(_ v: St...` |
| 1223 | fn | compactSessionKeysAppend | (private) | `fileprivate func compactSessionKeysAppend(_ v: ...` |
| 1227 | fn | createdSessionKeysAppend | (private) | `fileprivate func createdSessionKeysAppend(_ v: ...` |
| 1231 | fn | createdParentSessionKeysAppend | (private) | `fileprivate func createdParentSessionKeysAppend...` |
| 1235 | fn | sentSessionKeysAppend | (private) | `fileprivate func sentSessionKeysAppend(_ v: Str...` |
| 1239 | fn | sentAgentIDsAppend | (private) | `fileprivate func sentAgentIDsAppend(_ v: String?)` |
| 1243 | fn | sentRoutingContractsAppend | (private) | `fileprivate func sentRoutingContractsAppend(_ v...` |
| 1247 | fn | sentMessagesAppend | (private) | `fileprivate func sentMessagesAppend(_ v: String)` |
| 1251 | fn | renamedLabelsAppend | (private) | `fileprivate func renamedLabelsAppend(key: Strin...` |
| 1255 | fn | pinnedChangesAppend | (private) | `fileprivate func pinnedChangesAppend(key: Strin...` |
| 1259 | fn | archivedChangesAppend | (private) | `fileprivate func archivedChangesAppend(key: Str...` |
| 1265 | class | QuestionListGate | (private) | `actor QuestionListGate` |
| 1271 | fn | wait | (internal) | `func wait() async -> [QuestionRecord]` |
| 1277 | fn | resume | (internal) | `func resume(with records: [QuestionRecord])` |
| 1284 | class | QuestionListEventRace | (private) | `actor QuestionListEventRace` |
| 1288 | method | init | (internal) | `init(currentRecords: [QuestionRecord])` |
| 1300 | fn | request | (internal) | `func request() async -> [QuestionRecord]` |
| 1310 | fn | resumeFirst | (internal) | `func resumeFirst(with records: [QuestionRecord])` |
| 1316 | fn | chatQuestionRecord | (private) | `private func chatQuestionRecord(   id: String, ...` |
| 1342 | struct | ChatViewModelTests | (internal) | `struct ChatViewModelTests` |
| 1754 | fn | fraction | (internal) | `func fraction(total: Int?, fresh: Bool? = true,...` |
| 3035 | fn | decodeMessage | (internal) | `func decodeMessage(role: String, stopReason: St...` |
| 11117 | struct | ChatViewModelSessionManagementTests | (internal) | `struct ChatViewModelSessionManagementTests` |
