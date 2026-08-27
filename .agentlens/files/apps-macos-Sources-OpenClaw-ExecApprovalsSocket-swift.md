# apps/macos/Sources/OpenClaw/ExecApprovalsSocket.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1626
- **Language:** Swift
- **Symbols:** 73
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 10 | struct | ExecApprovalPromptRequest | (internal) | `struct ExecApprovalPromptRequest` |
| 20 | method | init | (internal) | `init(     command: String,     cwd: String? = n...` |
| 54 | method | init | (internal) | `init(from decoder: Decoder) throws` |
| 70 | fn | allowedDecisions | (internal) | `static func allowedDecisions(     forAsk ask: S...` |
| 85 | struct | DecodedExecApprovalDecision | (private) | `struct DecodedExecApprovalDecision` |
| 87 | method | init | (internal) | `init(from decoder: Decoder) throws` |
| 98 | struct | ExecApprovalSocketRequest | (private) | `struct ExecApprovalSocketRequest` |
| 105 | struct | ExecApprovalSocketDecision | (private) | `struct ExecApprovalSocketDecision` |
| 111 | struct | ExecHostSocketRequest | (private) | `struct ExecHostSocketRequest` |
| 120 | struct | ExecHostRequest | (internal) | `struct ExecHostRequest` |
| 134 | struct | ExecHostRunResult | (private) | `struct ExecHostRunResult` |
| 143 | enum | ExecHostOutputLimiter | (internal) | `enum ExecHostOutputLimiter` |
| 147 | fn | truncate | (internal) | `static func truncate(_ value: String) -> String` |
| 162 | struct | ExecHostError | (internal) | `struct ExecHostError` |
| 168 | struct | ExecHostResponse | (private) | `struct ExecHostResponse` |
| 175 | fn | configureSocketTimeouts | (private) | `private func configureSocketTimeouts(_ fd: Int3...` |
| 188 | fn | readLineFromSocket | (private) | `private func readLineFromSocket(_ fd: Int32, ma...` |
| 219 | fn | timingSafeHexStringEquals | (internal) | `func timingSafeHexStringEquals(_ lhs: String, _...` |
| 233 | fn | execHostTimestampIsFresh | (internal) | `func execHostTimestampIsFresh(   nowMs: Int,   ...` |
| 251 | enum | ExecApprovalsSocketClient | (internal) | `enum ExecApprovalsSocketClient` |
| 258 | fn | requestDecision | (internal) | `static func requestDecision(     socketPath: St...` |
| 287 | fn | requestDecisionSync | (private) | `private static func requestDecisionSync(     so...` |
| 349 | class | ExecApprovalsPromptServer | (internal) | `class ExecApprovalsPromptServer` |
| 377 | fn | start | (internal) | `func start()` |
| 456 | fn | stop | (internal) | `@discardableResult   func stop() -> Task<Void, ...` |
| 470 | fn | handleUnexpectedStop | (private) | `private func handleUnexpectedStop(     _ stoppe...` |
| 483 | fn | _testFailActiveSocket | (internal) | `func _testFailActiveSocket()` |
| 486 | fn | _testPrecancelledSocketStart | (internal) | `static func _testPrecancelledSocketStart(     s...` |
| 524 | fn | _testSocketLeaseHandoff | (internal) | `static func _testSocketLeaseHandoff(     socket...` |
| 569 | fn | _testExecHostTimestampFailureReason | (internal) | `static func _testExecHostTimestampFailureReason...` |
| 589 | enum | ExecApprovalsPromptPresenter | (internal) | `enum ExecApprovalsPromptPresenter` |
| 599 | fn | prompt | (internal) | `@MainActor   static func prompt(     _ request:...` |
| 640 | fn | runPrompt | (private) | `@MainActor   private static func runPrompt(    ...` |
| 669 | fn | acquirePrompt | (private) | `@MainActor   private static func acquirePrompt(...` |
| 682 | fn | releasePrompt | (private) | `@MainActor   private static func releasePrompt(...` |
| 692 | fn | cancelPrompt | (private) | `@MainActor   private static func cancelPrompt(i...` |
| 708 | fn | decision | (internal) | `static func decision(     forModalResponse resp...` |
| 720 | fn | allowedPromptDecisions | (internal) | `static func allowedPromptDecisions(_ request: E...` |
| 727 | fn | buttonTitle | (private) | `private static func buttonTitle(for decision: E...` |
| 738 | fn | buildAccessoryView | (internal) | `@MainActor   static func buildAccessoryView(_ r...` |
| 825 | fn | sanitizedContextValue | (internal) | `static func sanitizedContextValue(_ value: Stri...` |
| 831 | fn | addDetailRow | (private) | `@MainActor   private static func addDetailRow(t...` |
| 855 | mod | extension ExecApprovalsPromptPresenter | (internal) | - |
| 856 | fn | reservePromptForTesting | (internal) | `@MainActor   static func reservePromptForTestin...` |
| 863 | fn | releasePromptForTesting | (internal) | `@MainActor   static func releasePromptForTestin...` |
| 876 | enum | ExecHostExecutor | (private) | `enum ExecHostExecutor` |
| 878 | fn | handle | (internal) | `static func handle(_ request: ExecHostRequest) ...` |
| 1009 | fn | buildContext | (private) | `private static func buildContext(     request: ...` |
| 1024 | fn | approvalStoreErrorResponse | (private) | `private static func approvalStoreErrorResponse(...` |
| 1031 | fn | ensureScreenRecordingAccess | (private) | `private static func ensureScreenRecordingAccess...` |
| 1044 | fn | commandResponse | (private) | `private static func commandResponse(     execut...` |
| 1058 | fn | errorResponse | (private) | `private static func errorResponse(     _ error:...` |
| 1069 | fn | errorResponse | (private) | `private static func errorResponse(     code: St...` |
| 1082 | fn | successResponse | (private) | `private static func successResponse(_ payload: ...` |
| 1093 | class | ExecApprovalsSocketLifecycleLease | (private) | `class ExecApprovalsSocketLifecycleLease` |
| 1101 | method | init | (private) | `private init(descriptor: Int32, path: String)` |
| 1106 | fn | acquire | (internal) | `static func acquire(for socketPath: String) thr...` |
| 1160 | fn | release | (internal) | `func release()` |
| 1176 | fn | releaseProcessReservation | (private) | `private static func releaseProcessReservation(_...` |
| 1184 | class | ExecApprovalsSocketServer | (private) | `class ExecApprovalsSocketServer` |
| 1221 | fn | start | (internal) | `func start() async -> Bool` |
| 1250 | fn | stop | (internal) | `func stop()` |
| 1270 | fn | runAcceptLoop | (private) | `private func runAcceptLoop(onReady: @escaping @...` |
| 1358 | fn | closeOwnedSocket | (private) | `private func closeOwnedSocket(     fd: Int32,  ...` |
| 1383 | fn | failForTesting | (private) | `fileprivate func failForTesting()` |
| 1412 | fn | openSocket | (private) | `private func openSocket() -> OpenedSocket?` |
| 1498 | fn | handleClient | (private) | `private func handleClient(fd: Int32) async` |
| 1540 | fn | sendApprovalResponse | (private) | `private func sendApprovalResponse(     handle: ...` |
| 1552 | fn | sendExecResponse | (private) | `private func sendExecResponse(handle: FileHandl...` |
| 1559 | fn | isAllowedPeer | (private) | `private func isAllowedPeer(fd: Int32) -> Bool` |
| 1568 | fn | handleExecRequest | (private) | `private func handleExecRequest(_ request: ExecH...` |
| 1608 | fn | testExecHostTimestampFailureReason | (private) | `fileprivate func testExecHostTimestampFailureRe...` |
| 1619 | fn | hmacHex | (private) | `private func hmacHex(nonce: String, ts: Int, re...` |
