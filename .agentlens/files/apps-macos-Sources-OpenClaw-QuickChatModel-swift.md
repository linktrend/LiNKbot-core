# apps/macos/Sources/OpenClaw/QuickChatModel.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1242
- **Language:** Swift
- **Symbols:** 55
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 8 | enum | QuickChatAgentAvatar | (internal) | `enum QuickChatAgentAvatar` |
| 13 | struct | QuickChatAgentDisplay | (internal) | `struct QuickChatAgentDisplay` |
| 23 | method | init | (internal) | `init(id: String, name: String, emoji: String?, ...` |
| 33 | method | init | (internal) | `init(summary: AgentSummary)` |
| 43 | fn | avatar | (internal) | `static func avatar(fromRendered rawValue: Strin...` |
| 67 | fn | stableTintHue | (private) | `private static func stableTintHue(for id: Strin...` |
| 78 | struct | QuickChatRoutingTarget | (internal) | `struct QuickChatRoutingTarget` |
| 83 | struct | QuickChatSessionTargetOverride | (internal) | `struct QuickChatSessionTargetOverride` |
| 88 | enum | QuickChatConnectionGate | (internal) | `enum QuickChatConnectionGate` |
| 95 | enum | QuickChatSendState | (internal) | `enum QuickChatSendState` |
| 102 | class | QuickChatModel | (internal) | `class QuickChatModel` |
| 380 | fn | beginPresentation | (internal) | `func beginPresentation() -> UUID` |
| 408 | fn | refreshForPresentation | (internal) | `func refreshForPresentation(id: UUID) async` |
| 431 | fn | selectAgent | (internal) | `func selectAgent(_ id: String)` |
| 449 | fn | selectSessionOverride | (internal) | `func selectSessionOverride(_ target: QuickChatS...` |
| 455 | fn | dismissPermissionsForSession | (internal) | `func dismissPermissionsForSession()` |
| 459 | fn | grantMissingPermissions | (internal) | `func grantMissingPermissions()` |
| 476 | fn | prepareDictation | (internal) | `func prepareDictation(selection: NSRange) -> Bool` |
| 487 | fn | dictationDidStart | (internal) | `func dictationDidStart()` |
| 493 | fn | applyDictationTranscript | (internal) | `func applyDictationTranscript(_ transcript: Str...` |
| 500 | fn | stopDictation | (internal) | `func stopDictation()` |
| 506 | fn | failDictation | (internal) | `func failDictation(message: String)` |
| 511 | fn | selectThinkingLevel | (internal) | `func selectThinkingLevel(_ level: String?)` |
| 520 | fn | selectModel | (internal) | `func selectModel(_ selectionID: String)` |
| 539 | fn | send | (internal) | `func send() async -> Bool` |
| 543 | fn | captureFocusedAppText | (internal) | `func captureFocusedAppText()` |
| 572 | fn | replaceTextContext | (internal) | `func replaceTextContext(_ context: QuickChatTex...` |
| 578 | fn | clearTextContext | (internal) | `func clearTextContext()` |
| 588 | fn | beginCapturePipeline | (internal) | `func beginCapturePipeline() -> UUID?` |
| 595 | fn | cancelCapturePipeline | (internal) | `func cancelCapturePipeline(_ id: UUID)` |
| 603 | fn | failCapturePipeline | (internal) | `func failCapturePipeline(_ id: UUID)` |
| 612 | fn | setCaptureFailure | (internal) | `func setCaptureFailure()` |
| 616 | fn | sendCapturedImage | (internal) | `func sendCapturedImage(     pipelineID: UUID,  ...` |
| 722 | fn | endPresentation | (internal) | `func endPresentation()` |
| 751 | fn | cancelAllTasks | (internal) | `func cancelAllTasks()` |
| 763 | fn | applyAgentsList | (private) | `private func applyAgentsList(_ result: AgentsLi...` |
| 799 | fn | refreshFallbackIdentity | (private) | `private func refreshFallbackIdentity(id: UUID) ...` |
| 823 | fn | applyRoutingTarget | (private) | `private func applyRoutingTarget()` |
| 845 | fn | performSend | (private) | `private func performSend(     messageOverride: ...` |
| 948 | fn | startPermissionPolling | (private) | `private func startPermissionPolling(id: UUID)` |
| 961 | fn | cancelPermissionPolling | (private) | `private func cancelPermissionPolling()` |
| 966 | fn | cancelPermissionTask | (private) | `private func cancelPermissionTask()` |
| 972 | fn | cancelTextContextCapture | (private) | `private func cancelTextContextCapture()` |
| 979 | fn | recheckPermissions | (private) | `private func recheckPermissions(id: UUID) async` |
| 985 | fn | applyPermissionStatus | (private) | `private func applyPermissionStatus(_ status: [C...` |
| 989 | fn | isCurrentPresentation | (private) | `private func isCurrentPresentation(_ id: UUID) ...` |
| 995 | mod | extension QuickChatModel | (internal) | - |
| 1040 | fn | refreshModelControls | (private) | `private func refreshModelControls(for target: Q...` |
| 1076 | fn | startSelectedModelPatchIfNeeded | (private) | `private func startSelectedModelPatchIfNeeded(se...` |
| 1082 | fn | applySelectedModelIfNeeded | (private) | `private func applySelectedModelIfNeeded(     to...` |
| 1132 | fn | finishModelPatch | (private) | `private func finishModelPatch(     _ task: Task...` |
| 1212 | fn | clearModelPatchState | (private) | `private func clearModelPatchState(requestID: UUID)` |
| 1220 | fn | cancelModelControlRefresh | (private) | `private func cancelModelControlRefresh()` |
| 1227 | fn | resetDictationState | (private) | `private func resetDictationState()` |
| 1237 | mod | extension String | (internal) | - |
