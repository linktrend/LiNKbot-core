# apps/macos/Sources/OpenClaw/AppState.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1287
- **Language:** Swift
- **Symbols:** 60
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 8 | enum | ExecApprovalsPolicyLoadState | (internal) | `enum ExecApprovalsPolicyLoadState` |
| 23 | class | AppState | (internal) | `class AppState` |
| 56 | fn | ifNotPreview | (private) | `private func ifNotPreview(_ action: () -> Void)` |
| 77 | fn | shouldPersistLaunchAtLoginChange | (internal) | `static func shouldPersistLaunchAtLoginChange(  ...` |
| 282 | fn | applyPeekabooBridgeHostState | (internal) | `func applyPeekabooBridgeHostState()` |
| 490 | fn | hydrateLaunchAtLogin | (private) | `private func hydrateLaunchAtLogin(_ enabled: Bool)` |
| 504 | fn | remoteHost | (private) | `private static func remoteHost(from urlString: ...` |
| 516 | fn | sanitizeSSHTarget | (private) | `private static func sanitizeSSHTarget(_ value: ...` |
| 525 | fn | sshTunnelGatewayUrl | (private) | `private static func sshTunnelGatewayUrl(existin...` |
| 549 | fn | updateGatewayString | (private) | `private static func updateGatewayString(     _ ...` |
| 567 | fn | applyRemoteTokenState | (private) | `private func applyRemoteTokenState(_ tokenValue...` |
| 581 | fn | updatedRemoteGatewayConfig | (private) | `private static func updatedRemoteGatewayConfig(...` |
| 634 | fn | startConfigWatcher | (private) | `private func startConfigWatcher()` |
| 644 | fn | applyConfigFromDisk | (private) | `private func applyConfigFromDisk()` |
| 654 | fn | configFingerprint | (private) | `private static func configFingerprint(_ root: [...` |
| 670 | fn | applyConfigOverrides | (private) | `private func applyConfigOverrides(_ root: [Stri...` |
| 741 | fn | gatewaySelectionSnapshot | (private) | `private func gatewaySelectionSnapshot() -> Gate...` |
| 751 | fn | reconcilePreferredGatewayRouteBinding | (private) | `@discardableResult   private func reconcilePref...` |
| 761 | fn | updateRemoteTarget | (private) | `private func updateRemoteTarget(host: String)` |
| 777 | fn | syncedGatewayRoot | (private) | `private static func syncedGatewayRoot(     curr...` |
| 834 | fn | triggerVoiceEars | (internal) | `func triggerVoiceEars(ttl: TimeInterval? = 5)` |
| 846 | fn | stopVoiceEars | (internal) | `func stopVoiceEars()` |
| 852 | fn | blinkOnce | (internal) | `func blinkOnce()` |
| 856 | fn | celebrateSend | (internal) | `func celebrateSend()` |
| 860 | fn | setVoiceWakeEnabled | (internal) | `func setVoiceWakeEnabled(_ enabled: Bool) async` |
| 884 | fn | setTalkEnabled | (internal) | `func setTalkEnabled(_ enabled: Bool) async` |
| 911 | fn | applyGlobalVoiceWakeTriggers | (internal) | `func applyGlobalVoiceWakeTriggers(_ triggers: [...` |
| 917 | fn | scheduleVoiceWakeGlobalSyncIfNeeded | (private) | `private func scheduleVoiceWakeGlobalSyncIfNeeded()` |
| 929 | fn | loadChime | (private) | `private static func loadChime(key: String, fall...` |
| 937 | fn | storeChime | (private) | `private func storeChime(_ chime: VoiceWakeChime...` |
| 946 | mod | extension AppState | (internal) | - |
| 954 | fn | updateExecApprovalMode | (internal) | `func updateExecApprovalMode(_ mode: ExecApprova...` |
| 966 | fn | applyExecApprovalModeMutation | (internal) | `func applyExecApprovalModeMutation(     _ mode:...` |
| 978 | fn | syncExecApprovalMode | (internal) | `func syncExecApprovalMode(_ mode: ExecApprovalQ...` |
| 987 | fn | retryExecApprovalModeRead | (internal) | `func retryExecApprovalModeRead()` |
| 991 | fn | waitForExecApprovalModeRead | (internal) | `func waitForExecApprovalModeRead() async` |
| 995 | fn | recoverExecApprovalModeRead | (internal) | `func recoverExecApprovalModeRead(maxAttempts: I...` |
| 1005 | fn | performExecApprovalModeReadAttempts | (private) | `private func performExecApprovalModeReadAttempt...` |
| 1036 | fn | scheduleExecApprovalModeReadRetry | (private) | `private func scheduleExecApprovalModeReadRetry()` |
| 1050 | mod | extension AppState | (internal) | - |
| 1051 | fn | syncGatewayConfigIfNeeded | (private) | `private func syncGatewayConfigIfNeeded()` |
| 1075 | fn | setGatewayConfigSyncState | (private) | `private func setGatewayConfigSyncState(_ state:...` |
| 1085 | fn | advanceGatewayRoutingGeneration | (private) | `private func advanceGatewayRoutingGeneration()` |
| 1089 | fn | gatewayDraftCanPersist | (private) | `private static func gatewayDraftCanPersist(_ dr...` |
| 1102 | fn | syncGatewayConfigNow | (internal) | `@discardableResult   func syncGatewayConfigNow(...` |
| 1141 | mod | extension AppState | (internal) | - |
| 1178 | mod | extension AppState | (internal) | - |
| 1219 | mod | extension AppState | (internal) | - |
| 1221 | fn | _testConfigFingerprint | (internal) | `static func _testConfigFingerprint(_ root: [Str...` |
| 1224 | fn | _testUpdatedRemoteGatewayConfig | (internal) | `static func _testUpdatedRemoteGatewayConfig(   ...` |
| 1233 | fn | _testSyncedGatewayRoot | (internal) | `static func _testSyncedGatewayRoot(     current...` |
| 1242 | fn | _testGatewayDraftCanPersist | (internal) | `static func _testGatewayDraftCanPersist(_ draft...` |
| 1246 | fn | _testApplyConfigOverrides | (internal) | `func _testApplyConfigOverrides(_ root: [String:...` |
| 1250 | fn | _testEnableGatewayConfigSync | (internal) | `func _testEnableGatewayConfigSync()` |
| 1254 | fn | _testAwaitGatewayConfigSync | (internal) | `func _testAwaitGatewayConfigSync() async` |
| 1262 | fn | _testReconcilePreferredGatewayRouteBinding | (internal) | `@discardableResult   func _testReconcilePreferr...` |
| 1270 | enum | AppStateStore | (internal) | `enum AppStateStore` |
| 1273 | fn | updateLaunchAtLogin | (internal) | `static func updateLaunchAtLogin(enabled: Bool)` |
| 1281 | enum | AppActivationPolicy | (internal) | `enum AppActivationPolicy` |
| 1283 | fn | apply | (internal) | `static func apply(showDockIcon: Bool)` |
