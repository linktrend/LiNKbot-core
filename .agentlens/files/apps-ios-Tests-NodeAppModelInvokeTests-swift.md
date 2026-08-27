# apps/ios/Tests/NodeAppModelInvokeTests.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 7940
- **Language:** Swift
- **Symbols:** 97
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 10 | class | MockVoiceNoteAudioCapture | (private) | `class MockVoiceNoteAudioCapture` |
| 14 | fn | requestPermission | (internal) | `func requestPermission() async -> Bool` |
| 19 | fn | start | (internal) | `func start(url _: URL) throws` |
| 21 | fn | stop | (internal) | `func stop() -> TimeInterval` |
| 24 | fn | cancel | (internal) | `func cancel()` |
| 28 | fn | setFailureHandler | (internal) | `func setFailureHandler(_: @escaping @MainActor ...` |
| 32 | class | CancellingCameraService | (private) | `actor CancellingCameraService` |
| 33 | fn | listDevices | (internal) | `func listDevices() async -> [CameraController.C...` |
| 36 | fn | snap | (internal) | `func snap(     params _: OpenClawCameraSnapPara...` |
| 43 | fn | clip | (internal) | `func clip(     params _: OpenClawCameraClipPara...` |
| 52 | class | RecordingCameraService | (private) | `actor RecordingCameraService` |
| 54 | fn | listDevices | (internal) | `func listDevices() async -> [CameraController.C...` |
| 58 | fn | snap | (internal) | `func snap(     params _: OpenClawCameraSnapPara...` |
| 65 | fn | clip | (internal) | `func clip(     params _: OpenClawCameraClipPara...` |
| 73 | fn | clipCallCount | (internal) | `func clipCallCount() -> Int` |
| 79 | class | ApprovalResolutionCapture | (private) | `actor ApprovalResolutionCapture` |
| 81 | fn | record | (internal) | `func record(kind: ApprovalKind)` |
| 85 | fn | recordedKind | (internal) | `func recordedKind() -> ApprovalKind?` |
| 91 | class | MockHealthSummaryService | (private) | `actor MockHealthSummaryService` |
| 93 | fn | summary | (internal) | `func summary(params: OpenClawHealthSummaryParam...` |
| 109 | class | BlockingAudioCameraService | (private) | `actor BlockingAudioCameraService` |
| 111 | method | init | (internal) | `init(barrier: TalkPreparationBarrier)` |
| 115 | fn | listDevices | (internal) | `func listDevices() async -> [CameraController.C...` |
| 119 | fn | snap | (internal) | `func snap(     params _: OpenClawCameraSnapPara...` |
| 126 | fn | clip | (internal) | `func clip(     params _: OpenClawCameraClipPara...` |
| 137 | class | BlockingAudioScreenRecorder | (private) | `actor BlockingAudioScreenRecorder` |
| 140 | method | init | (internal) | `init(barrier: TalkPreparationBarrier)` |
| 144 | fn | record | (internal) | `func record(     screenIndex _: Int?,     durat...` |
| 160 | fn | recordCallCount | (internal) | `func recordCallCount() -> Int` |
| 166 | class | CancellationIgnoringScreenRecorder | (private) | `actor CancellationIgnoringScreenRecorder` |
| 169 | method | init | (internal) | `init(barrier: TalkPreparationBarrier, outputURL...` |
| 174 | fn | record | (internal) | `func record(     screenIndex _: Int?,     durat...` |
| 188 | class | OverlappingCameraService | (private) | `actor OverlappingCameraService` |
| 194 | method | init | (internal) | `init(     firstStarted: AsyncStream<Void>.Conti...` |
| 202 | fn | listDevices | (internal) | `func listDevices() async -> [CameraController.C...` |
| 206 | fn | snap | (internal) | `func snap(     params _: OpenClawCameraSnapPara...` |
| 224 | fn | clip | (internal) | `func clip(     params _: OpenClawCameraClipPara...` |
| 231 | fn | releaseFirst | (internal) | `func releaseFirst()` |
| 236 | fn | releaseSecond | (internal) | `func releaseSecond()` |
| 243 | class | TalkPreparationBarrier | (private) | `class TalkPreparationBarrier` |
| 248 | fn | suspendFirstPreparation | (internal) | `func suspendFirstPreparation() async` |
| 258 | fn | waitUntilEntered | (internal) | `func waitUntilEntered() async` |
| 267 | fn | release | (internal) | `func release()` |
| 273 | fn | waitForTalkCondition | (private) | `@MainActor private func waitForTalkCondition(_ ...` |
| 284 | fn | talkRequest | (private) | `private func talkRequest(id: String, command: O...` |
| 293 | fn | makeAgentDeepLinkURL | (private) | `private func makeAgentDeepLinkURL(   message: S...` |
| 320 | fn | makeWatchChatRawMessage | (private) | `private func makeWatchChatRawMessage(   role: S...` |
| 345 | fn | makeProjectedWatchChatRawMessage | (private) | `private func makeProjectedWatchChatRawMessage( ...` |
| 365 | fn | makePendingExecApprovalJSON | (private) | `private func makePendingExecApprovalJSON(_ appr...` |
| 369 | fn | makeExpiredExecApprovalJSON | (private) | `private func makeExpiredExecApprovalJSON(_ appr...` |
| 390 | fn | mountScreen | (private) | `@MainActor private func mountScreen(_ screen: S...` |
| 399 | class | MockWatchMessagingService | (private) | `class MockWatchMessagingService` |
| 430 | fn | status | (internal) | `func status() async -> WatchMessagingStatus` |
| 434 | fn | setStatusHandler | (internal) | `func setStatusHandler(_ handler: (@Sendable (Wa...` |
| 438 | fn | emitStatus | (internal) | `func emitStatus(_ status: WatchMessagingStatus)` |
| 443 | fn | setReplyHandler | (internal) | `func setReplyHandler(_ handler: (@Sendable (Wat...` |
| 447 | fn | setExecApprovalResolveHandler | (internal) | `func setExecApprovalResolveHandler(_ handler: (...` |
| 451 | fn | setExecApprovalSnapshotRequestHandler | (internal) | `func setExecApprovalSnapshotRequestHandler(    ...` |
| 457 | fn | setAppSnapshotRequestHandler | (internal) | `func setAppSnapshotRequestHandler(_ handler: (@...` |
| 461 | fn | setAppCommandHandler | (internal) | `func setAppCommandHandler(_ handler: (@Sendable...` |
| 465 | fn | sendNotification | (internal) | `func sendNotification(     id: String,     para...` |
| 477 | fn | sendDirectNodeSetup | (internal) | `func sendDirectNodeSetup(setupCode: String) asy...` |
| 485 | fn | sendExecApprovalPrompt | (internal) | `func sendExecApprovalPrompt(     _ message: Ope...` |
| 496 | fn | sendExecApprovalResolved | (internal) | `func sendExecApprovalResolved(     _ message: O...` |
| 506 | fn | sendExecApprovalExpired | (internal) | `func sendExecApprovalExpired(     _ message: Op...` |
| 516 | fn | syncExecApprovalSnapshot | (internal) | `func syncExecApprovalSnapshot(     _ message: O...` |
| 530 | fn | syncAppSnapshot | (internal) | `func syncAppSnapshot(     _ message: OpenClawWa...` |
| 540 | fn | sendChatCompletion | (internal) | `func sendChatCompletion(     _ message: OpenCla...` |
| 550 | fn | emitReply | (internal) | `func emitReply(_ event: WatchQuickReplyEvent)` |
| 554 | fn | emitExecApprovalResolve | (internal) | `func emitExecApprovalResolve(_ event: WatchExec...` |
| 558 | fn | emitExecApprovalSnapshotRequest | (internal) | `func emitExecApprovalSnapshotRequest(_ event: W...` |
| 562 | fn | emitAppSnapshotRequest | (internal) | `func emitAppSnapshotRequest(_ event: WatchAppSn...` |
| 566 | fn | emitAppCommand | (internal) | `func emitAppCommand(_ event: WatchAppCommandEvent)` |
| 572 | class | MockBootstrapNotificationCenter | (private) | `class MockBootstrapNotificationCenter` |
| 579 | fn | authorizationStatus | (internal) | `func authorizationStatus() async -> Notificatio...` |
| 586 | fn | add | (internal) | `func add(_: UNNotificationRequest) async throws` |
| 590 | fn | removePendingNotificationRequests | (internal) | `func removePendingNotificationRequests(withIden...` |
| 594 | fn | removeDeliveredNotifications | (internal) | `func removeDeliveredNotifications(withIdentifie...` |
| 598 | fn | deliveredNotifications | (internal) | `func deliveredNotifications() async -> [Notific...` |
| 604 | class | NotificationAuthorizationGate | (private) | `actor NotificationAuthorizationGate` |
| 607 | fn | wait | (internal) | `func wait() async -> NotificationAuthorizationS...` |
| 614 | fn | hasStarted | (internal) | `func hasStarted() -> Bool` |
| 618 | fn | resume | (internal) | `func resume(returning status: NotificationAutho...` |
| 625 | class | WatchSnapshotSendGate | (private) | `actor WatchSnapshotSendGate` |
| 629 | fn | wait | (internal) | `func wait() async` |
| 640 | fn | hasStarted | (internal) | `func hasStarted() -> Bool` |
| 644 | fn | resume | (internal) | `func resume()` |
| 655 | class | ExecApprovalResolutionGate | (private) | `actor ExecApprovalResolutionGate` |
| 658 | fn | waitForFirstCall | (internal) | `func waitForFirstCall() async -> String` |
| 667 | fn | callCount | (internal) | `func callCount() -> Int` |
| 671 | fn | hasStarted | (internal) | `func hasStarted() -> Bool` |
| 675 | fn | resume | (internal) | `func resume()` |
| 682 | class | ExecApprovalConcurrentWriteProbe | (private) | `actor ExecApprovalConcurrentWriteProbe` |
| 687 | fn | resolve | (internal) | `func resolve(decision: String) async -> String` |
| 700 | fn | snapshot | (internal) | `func snapshot() -> (calls: [String], maximumAct...` |
| 704 | fn | releaseFirst | (internal) | `func releaseFirst()` |
| 710 | fn | overrideNotificationServingPreference | (private) | `private func overrideNotificationServingPrefere...` |
