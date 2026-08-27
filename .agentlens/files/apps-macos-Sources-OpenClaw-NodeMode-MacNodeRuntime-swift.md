# apps/macos/Sources/OpenClaw/NodeMode/MacNodeRuntime.swift

[← Back to Module](../modules/apps-macos-Sources-OpenClaw-NodeMode/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1022
- **Language:** Swift
- **Symbols:** 39
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 6 | class | MacNodeClaudeSessionCatalogWorker | (internal) | `actor MacNodeClaudeSessionCatalogWorker` |
| 30 | method | init | (internal) | `init(     listOperation: @escaping Operation,  ...` |
| 38 | fn | list | (internal) | `func list(paramsJSON: String?) async throws -> ...` |
| 42 | fn | read | (internal) | `func read(paramsJSON: String?) async throws -> ...` |
| 46 | fn | enqueue | (private) | `private func enqueue(     paramsJSON: String?, ...` |
| 71 | fn | startNextIfNeeded | (private) | `private func startNextIfNeeded()` |
| 90 | fn | cancel | (private) | `private func cancel(id: UUID)` |
| 102 | fn | finish | (private) | `private func finish(id: UUID, result: Result<St...` |
| 112 | class | MacNodeRuntime | (internal) | `actor MacNodeRuntime` |
| 180 | fn | updateMainSessionKey | (internal) | `func updateMainSessionKey(_ sessionKey: String)` |
| 188 | fn | handleInvoke | (internal) | `func handleInvoke(_ req: BridgeInvokeRequest) a...` |
| 250 | fn | isCanvasCommand | (private) | `private func isCanvasCommand(_ command: String)...` |
| 254 | fn | handleCodexThreadInvoke | (private) | `private func handleCodexThreadInvoke(_ req: Bri...` |
| 268 | fn | handleClaudeSessionInvoke | (private) | `private func handleClaudeSessionInvoke(_ req: B...` |
| 286 | mod | extension MacNodeRuntime | (internal) | - |
| 287 | fn | handleCanvasInvoke | (private) | `private func handleCanvasInvoke(_ req: BridgeIn...` |
| 369 | fn | handleA2UIInvoke | (private) | `private func handleA2UIInvoke(_ req: BridgeInvo...` |
| 385 | mod | extension MacNodeRuntime | (internal) | - |
| 386 | fn | handleCameraInvoke | (private) | `private func handleCameraInvoke(_ req: BridgeIn...` |
| 449 | fn | handleLocationInvoke | (private) | `private func handleLocationInvoke(_ req: Bridge...` |
| 516 | fn | handleComputerActInvoke | (private) | `private func handleComputerActInvoke(_ req: Bri...` |
| 572 | fn | handleScreenRecordInvoke | (private) | `private func handleScreenRecordInvoke(_ req: Br...` |
| 608 | fn | handleScreenSnapshotInvoke | (private) | `private func handleScreenSnapshotInvoke(_ req: ...` |
| 685 | fn | mainActorServices | (private) | `private func mainActorServices() async -> any M...` |
| 713 | fn | releaseHeldComputerInput | (internal) | `func releaseHeldComputerInput() async` |
| 723 | mod | extension MacNodeRuntime | (internal) | - |
| 724 | fn | handleA2UIReset | (private) | `private func handleA2UIReset(_ req: BridgeInvok...` |
| 737 | fn | handleA2UIPush | (private) | `private func handleA2UIPush(_ req: BridgeInvoke...` |
| 773 | fn | ensureA2UIHost | (private) | `private func ensureA2UIHost() async throws` |
| 808 | fn | isA2UIReady | (private) | `private func isA2UIReady(poll: Bool = false) as...` |
| 836 | mod | extension MacNodeRuntime | (internal) | - |
| 837 | fn | handleSystemNotify | (private) | `private func handleSystemNotify(_ req: BridgeIn...` |
| 879 | mod | extension MacNodeRuntime | (internal) | - |
| 888 | fn | encodePayload | (private) | `private static func encodePayload(_ obj: some E...` |
| 898 | fn | projectedOuterFrameBytes | (internal) | `static func projectedOuterFrameBytes(     forPa...` |
| 925 | fn | screenSnapshotPayloadTooLarge | (private) | `private static func screenSnapshotPayloadTooLar...` |
| 956 | fn | errorResponse | (private) | `private static func errorResponse(     _ req: B...` |
| 967 | fn | encodeCanvasSnapshot | (private) | `private static func encodeCanvasSnapshot(     i...` |
| 1004 | fn | scaleImage | (private) | `private static func scaleImage(_ image: NSImage...` |
