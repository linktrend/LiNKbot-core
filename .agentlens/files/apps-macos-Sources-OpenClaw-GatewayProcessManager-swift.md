# apps/macos/Sources/OpenClaw/GatewayProcessManager.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1208
- **Language:** Swift
- **Symbols:** 71
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 5 | struct | GatewayHealthProbeTimeout | (private) | `struct GatewayHealthProbeTimeout` |
| 13 | class | GatewayProcessManager | (internal) | `class GatewayProcessManager` |
| 23 | fn | hasSameConfiguration | (internal) | `func hasSameConfiguration(as other: LaunchAgent...` |
| 46 | fn | failed | (internal) | `static func failed(_ error: String) -> LaunchAg...` |
| 50 | fn | installed | (internal) | `static func installed() -> LaunchAgentEnableResult` |
| 138 | fn | setActive | (internal) | `func setActive(_ active: Bool)` |
| 158 | fn | ensureLaunchAgentEnabledIfNeeded | (internal) | `func ensureLaunchAgentEnabledIfNeeded() async -...` |
| 178 | fn | enableLaunchAgentIfNeeded | (private) | `private func enableLaunchAgentIfNeeded(     bun...` |
| 230 | fn | waitForPendingLaunchAgentDisable | (private) | `private func waitForPendingLaunchAgentDisable()...` |
| 238 | fn | drainLaunchAgentEnableRequests | (private) | `private func drainLaunchAgentEnableRequests()  ...` |
| 264 | fn | performLaunchAgentEnable | (private) | `private func performLaunchAgentEnable(_ request...` |
| 314 | fn | resolveLaunchAgentReadinessFailure | (private) | `private func resolveLaunchAgentReadinessFailure...` |
| 332 | fn | setLaunchAgentReadinessState | (private) | `private func setLaunchAgentReadinessState(     ...` |
| 341 | fn | startIfNeeded | (internal) | `func startIfNeeded()` |
| 379 | fn | waitForStartupAttempt | (internal) | `func waitForStartupAttempt() async` |
| 387 | fn | stop | (internal) | `func stop()` |
| 421 | fn | clearLastFailure | (internal) | `func clearLastFailure()` |
| 425 | fn | refreshEnvironmentStatus | (internal) | `func refreshEnvironmentStatus(force: Bool = false)` |
| 448 | fn | refreshLog | (internal) | `func refreshLog()` |
| 468 | fn | isCurrentGatewayStart | (private) | `private func isCurrentGatewayStart(_ generation...` |
| 473 | fn | attachExistingGatewayAfterPendingDisable | (private) | `private func attachExistingGatewayAfterPendingD...` |
| 489 | fn | attachExistingGatewayIfAvailable | (private) | `private func attachExistingGatewayIfAvailable( ...` |
| 556 | fn | describe | (private) | `private func describe(details instance: String?...` |
| 576 | fn | describe | (private) | `private func describe(instance: PortGuardian.De...` |
| 581 | fn | describeAttachFailure | (private) | `private func describeAttachFailure(_ error: Err...` |
| 604 | fn | isGatewayAuthFailure | (private) | `private func isGatewayAuthFailure(_ error: Erro...` |
| 616 | mod | extension GatewayProcessManager | (internal) | - |
| 617 | fn | prepareLaunchdGatewayStart | (private) | `private func prepareLaunchdGatewayStart(startGe...` |
| 665 | fn | enableLaunchdGateway | (private) | `private func enableLaunchdGateway(startGenerati...` |
| 728 | fn | publishLaunchdGatewayReady | (private) | `private func publishLaunchdGatewayReady(     in...` |
| 766 | fn | finishLaunchAgentReadinessFailure | (private) | `private func finishLaunchAgentReadinessFailure(...` |
| 793 | fn | finishResponsiveGatewayProbeFailure | (private) | `private func finishResponsiveGatewayProbeFailur...` |
| 813 | fn | finishGatewayReadinessDeadlineWithoutRepair | (private) | `private func finishGatewayReadinessDeadlineWith...` |
| 829 | fn | probeFailureDisposition | (private) | `private func probeFailureDisposition(_ error: E...` |
| 853 | fn | probeFailureIsCancellation | (private) | `private func probeFailureIsCancellation(_ error...` |
| 860 | fn | gatewayPIDChanged | (private) | `private static func gatewayPIDChanged(from prev...` |
| 865 | fn | appendLog | (private) | `private func appendLog(_ chunk: String)` |
| 872 | fn | refreshControlChannelIfNeeded | (private) | `private func refreshControlChannelIfNeeded(reas...` |
| 892 | fn | waitForGatewayReady | (internal) | `func waitForGatewayReady(     timeout: TimeInte...` |
| 954 | fn | publishGatewayReadinessSuccess | (private) | `private func publishGatewayReadinessSuccess(   ...` |
| 996 | fn | finishGatewayReadinessTimeout | (private) | `private func finishGatewayReadinessTimeout(    ...` |
| 1037 | fn | probeGatewayHealth | (private) | `private func probeGatewayHealth(timeoutMs: Doub...` |
| 1053 | fn | clearLog | (internal) | `func clearLog()` |
| 1059 | fn | setProjectRoot | (internal) | `func setProjectRoot(path: String)` |
| 1063 | fn | projectRootPath | (internal) | `func projectRootPath() -> String` |
| 1078 | mod | extension GatewayProcessManager | (internal) | - |
| 1079 | fn | setTestingConnection | (internal) | `func setTestingConnection(_ connection: Gateway...` |
| 1082 | fn | setTestingSkipControlChannelRefresh | (internal) | `func setTestingSkipControlChannelRefresh(_ skip...` |
| 1086 | fn | _testControlChannelRefreshForces | (internal) | `func _testControlChannelRefreshForces() -> [Bool]` |
| 1090 | fn | _testClearControlChannelRefreshForces | (internal) | `func _testClearControlChannelRefreshForces()` |
| 1094 | fn | _testClearLaunchAgentInstallEvidence | (internal) | `func _testClearLaunchAgentInstallEvidence()` |
| 1098 | fn | _testSetLastObservedGatewayPID | (internal) | `func _testSetLastObservedGatewayPID(_ pid: Int32?)` |
| 1102 | fn | _testProbeFailureMayNeedLaunchAgentRepair | (internal) | `func _testProbeFailureMayNeedLaunchAgentRepair(...` |
| 1109 | fn | _testGatewayResponseRetriesWithoutRepair | (internal) | `func _testGatewayResponseRetriesWithoutRepair(_...` |
| 1121 | fn | setTestingDesiredActive | (internal) | `func setTestingDesiredActive(_ active: Bool)` |
| 1125 | fn | setTestingLastFailureReason | (internal) | `func setTestingLastFailureReason(_ reason: Stri...` |
| 1129 | fn | setTestingStatus | (internal) | `func setTestingStatus(_ status: Status)` |
| 1133 | fn | _testAttachExistingGatewayIfAvailable | (internal) | `func _testAttachExistingGatewayIfAvailable(port...` |
| 1137 | fn | _testAttachExistingGatewayAfterPendingDisable | (internal) | `func _testAttachExistingGatewayAfterPendingDisa...` |
| 1143 | fn | _testEnableLaunchAgentIfNeeded | (internal) | `func _testEnableLaunchAgentIfNeeded(bundlePath:...` |
| 1147 | fn | _testEnableLaunchAgentIfNeededInstalled | (internal) | `func _testEnableLaunchAgentIfNeededInstalled(bu...` |
| 1151 | fn | _testRecordLaunchAgentReadinessFailure | (internal) | `func _testRecordLaunchAgentReadinessFailure(por...` |
| 1160 | fn | _testFinishLaunchAgentReadinessFailure | (internal) | `func _testFinishLaunchAgentReadinessFailure(por...` |
| 1168 | fn | _testClearLaunchAgentReadinessFailure | (internal) | `func _testClearLaunchAgentReadinessFailure()` |
| 1172 | fn | _testSetLaunchAgentReadinessFailure | (internal) | `func _testSetLaunchAgentReadinessFailure(port: ...` |
| 1178 | fn | _testSetLaunchAgentReadinessCandidate | (internal) | `func _testSetLaunchAgentReadinessCandidate(port...` |
| 1186 | fn | _testHasLaunchAgentReadinessFailure | (internal) | `func _testHasLaunchAgentReadinessFailure() -> Bool` |
| 1190 | fn | _testHasLaunchAgentReadinessCandidate | (internal) | `func _testHasLaunchAgentReadinessCandidate() ->...` |
| 1194 | fn | _testLaunchAgentReadinessCandidatePID | (internal) | `func _testLaunchAgentReadinessCandidatePID() ->...` |
| 1198 | fn | _testBeginGatewayStartGeneration | (internal) | `func _testBeginGatewayStartGeneration()` |
| 1203 | fn | _testPendingLaunchAgentPort | (internal) | `func _testPendingLaunchAgentPort() -> Int?` |
