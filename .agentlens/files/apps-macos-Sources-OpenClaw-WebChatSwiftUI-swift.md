# apps/macos/Sources/OpenClaw/WebChatSwiftUI.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1336
- **Language:** Swift
- **Symbols:** 78
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 14 | enum | WebChatSwiftUILayout | (private) | `enum WebChatSwiftUILayout` |
| 22 | enum | WebChatTracePreferences | (internal) | `enum WebChatTracePreferences` |
| 23 | fn | displayOptions | (internal) | `static func displayOptions(defaults: UserDefaul...` |
| 48 | class | WebChatWindow | (private) | `class WebChatWindow` |
| 58 | struct | MacGatewayChatTransport | (internal) | `struct MacGatewayChatTransport` |
| 64 | method | init | (internal) | `init(defaultGlobalAgentID: String?)` |
| 68 | fn | update | (internal) | `func update(defaultGlobalAgentID: String?)` |
| 74 | fn | currentAgentID | (internal) | `func currentAgentID() -> String?` |
| 78 | fn | normalized | (private) | `private static func normalized(_ agentID: Strin...` |
| 89 | method | init | (internal) | `init(outboxGatewayID: String? = nil, defaultGlo...` |
| 94 | fn | updateDefaultGlobalAgentID | (internal) | `func updateDefaultGlobalAgentID(_ agentID: Stri...` |
| 98 | fn | sessionTarget | (internal) | `func sessionTarget(for sessionKey: String) -> S...` |
| 109 | fn | requestHistory | (internal) | `func requestHistory(sessionKey: String) async t...` |
| 116 | fn | requestFullMessage | (internal) | `func requestFullMessage(sessionKey: String, mes...` |
| 130 | fn | fullMessageRequest | (internal) | `static func fullMessageRequest(     sessionKey:...` |
| 147 | fn | resolveInlineWidgetResource | (internal) | `func resolveInlineWidgetResource(     path: Str...` |
| 169 | fn | resolveInlineWidgetURL | (internal) | `func resolveInlineWidgetURL(path: String, repla...` |
| 175 | fn | listModels | (internal) | `func listModels() async throws -> [OpenClawChat...` |
| 186 | fn | abortRun | (internal) | `func abortRun(sessionKey: String, runId: String...` |
| 195 | fn | listSessions | (internal) | `func listSessions(     limit: Int?,     search:...` |
| 228 | fn | listAgents | (internal) | `func listAgents() async throws -> OpenClawChatA...` |
| 241 | fn | listSessionGroups | (internal) | `func listSessionGroups() async throws -> OpenCl...` |
| 246 | fn | putSessionGroups | (internal) | `func putSessionGroups(names: [String]) async th...` |
| 252 | fn | renameSessionGroup | (internal) | `func renameSessionGroup(     name: String,     ...` |
| 261 | fn | deleteSessionGroup | (internal) | `func deleteSessionGroup(name: String) async thr...` |
| 267 | fn | setSessionModel | (internal) | `func setSessionModel(sessionKey: String, model:...` |
| 275 | fn | patchSessionModel | (internal) | `func patchSessionModel(     sessionKey: String,...` |
| 286 | fn | patchSessionSettings | (internal) | `func patchSessionSettings(     sessionKey: Stri...` |
| 298 | fn | patchSessionSettings | (private) | `private func patchSessionSettings(     sessionK...` |
| 325 | fn | sessionSettingsRequest | (internal) | `static func sessionSettingsRequest(     session...` |
| 339 | fn | acquireSessionSettingsRouteLease | (internal) | `func acquireSessionSettingsRouteLease() async -...` |
| 358 | fn | setSessionThinking | (internal) | `func setSessionThinking(sessionKey: String, thi...` |
| 366 | fn | sendMessage | (internal) | `func sendMessage(     sessionKey: String,     m...` |
| 383 | fn | sendMessage | (internal) | `func sendMessage(     sessionKey: String,     a...` |
| 419 | fn | acquireOutboxRouteLease | (internal) | `func acquireOutboxRouteLease() async -> OpenCla...` |
| 460 | fn | requireGateway | (private) | `private static func requireGateway(_ gatewayID:...` |
| 467 | fn | synthesizeSpeech | (internal) | `func synthesizeSpeech(text: String) async throw...` |
| 486 | fn | listCommands | (internal) | `func listCommands(sessionKey: String) async thr...` |
| 495 | fn | createSession | (internal) | `func createSession(     key: String,     label:...` |
| 510 | fn | createSession | (internal) | `func createSession(     key: String,     label:...` |
| 533 | fn | patchSession | (internal) | `func patchSession(     key: String,     label: ...` |
| 553 | fn | deleteSession | (internal) | `func deleteSession(key: String) async throws` |
| 561 | fn | requestHealth | (internal) | `func requestHealth(timeoutMs: Int) async throws...` |
| 565 | fn | listQuestions | (internal) | `func listQuestions() async throws -> [QuestionR...` |
| 570 | fn | getQuestion | (internal) | `func getQuestion(id: String) async throws -> Qu...` |
| 575 | fn | resolveQuestion | (internal) | `func resolveQuestion(id: String, answers: [Stri...` |
| 580 | fn | cancelQuestion | (internal) | `func cancelQuestion(id: String) async throws` |
| 585 | fn | waitForRunCompletion | (internal) | `func waitForRunCompletion(     runId rawRunId: ...` |
| 607 | fn | resetSession | (internal) | `func resetSession(sessionKey: String) async throws` |
| 615 | fn | compactSession | (internal) | `func compactSession(sessionKey: String) async t...` |
| 624 | fn | setActiveSessionKey | (internal) | `func setActiveSessionKey(_ sessionKey: String) ...` |
| 635 | fn | events | (internal) | `func events() -> AsyncStream<OpenClawChatTransp...` |
| 661 | fn | mapPushToTransportEvent | (internal) | `static func mapPushToTransportEvent(_ push: Gat...` |
| 681 | enum | MacChatMessageSpeechError | (private) | `enum MacChatMessageSpeechError` |
| 698 | enum | MacChatMessageSpeechClient | (private) | `enum MacChatMessageSpeechClient` |
| 700 | fn | synthesize | (internal) | `static func synthesize(     text: String,     s...` |
| 726 | struct | MacChatSurface | (private) | `struct MacChatSurface` |
| 741 | method | init | (internal) | `init(     viewModel: OpenClawChatViewModel,    ...` |
| 864 | struct | MacChatSurfaceCapabilities | (internal) | `struct MacChatSurfaceCapabilities` |
| 875 | class | WebChatSessionKeyRelay | (private) | `class WebChatSessionKeyRelay` |
| 880 | class | WebChatSwiftUIWindowController | (internal) | `class WebChatSwiftUIWindowController` |
| 897 | method | init | (internal) | `convenience init(     sessionKey: String,     a...` |
| 917 | method | init | (internal) | `convenience init(     sessionKey: String,     a...` |
| 1069 | fn | applyDraftIfEmpty | (internal) | `func applyDraftIfEmpty(_ draft: String?)` |
| 1077 | fn | show | (internal) | `func show()` |
| 1085 | fn | presentAnchored | (internal) | `func presentAnchored(anchorProvider: () -> NSRe...` |
| 1110 | fn | close | (internal) | `func close()` |
| 1117 | fn | reposition | (private) | `@discardableResult   private func reposition(us...` |
| 1142 | fn | installDismissMonitor | (private) | `private func installDismissMonitor()` |
| 1158 | fn | removeDismissMonitor | (private) | `private func removeDismissMonitor()` |
| 1162 | fn | persistedThinkingLevel | (internal) | `static func persistedThinkingLevel(defaults: Us...` |
| 1174 | fn | persistedVerboseLevel | (internal) | `static func persistedVerboseLevel(defaults: Use...` |
| 1181 | fn | persistVerbosePreference | (internal) | `static func persistVerbosePreference(_ level: S...` |
| 1189 | fn | effectiveAgentID | (internal) | `static func effectiveAgentID(     explicitAgent...` |
| 1197 | fn | makeWindow | (private) | `private static func makeWindow(     for present...` |
| 1255 | fn | makePanelContentController | (private) | `private static func makePanelContentController(...` |
| 1295 | fn | ensureWindowSize | (private) | `private func ensureWindowSize()` |
| 1305 | fn | color | (private) | `private static func color(fromHex raw: String?)...` |
