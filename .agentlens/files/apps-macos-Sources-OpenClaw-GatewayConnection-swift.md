# apps/macos/Sources/OpenClaw/GatewayConnection.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1702
- **Language:** Swift
- **Symbols:** 99
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 11 | struct | GatewayRouteChangedAfterDispatchError | (private) | `struct GatewayRouteChangedAfterDispatchError` |
| 19 | enum | GatewayActivationBindingKeyStore | (private) | `enum GatewayActivationBindingKeyStore` |
| 23 | fn | loadOrCreate | (internal) | `static func loadOrCreate() -> SymmetricKey?` |
| 50 | fn | load | (private) | `private static func load() -> Data?` |
| 77 | class | GatewayConnection | (internal) | `actor GatewayConnection` |
| 89 | method | init | (internal) | `init(       config: Config,       routeAuthorit...` |
| 113 | fn | matches | (private) | `fileprivate func matches(       _ config: Confi...` |
| 223 | method | init | (internal) | `init(from decoder: Decoder) throws` |
| 239 | method | init | (internal) | `init(from decoder: Decoder) throws` |
| 252 | method | init | (internal) | `init(from decoder: Decoder) throws` |
| 297 | fn | request | (internal) | `func request(     method: String,     params: [...` |
| 420 | fn | request | (internal) | `func request(     method: String,     params: [...` |
| 451 | fn | request | (internal) | `func request(     method: String,     params: [...` |
| 475 | mod | extension GatewayConnection | (internal) | - |
| 484 | fn | cancelWizardSession | (internal) | `@discardableResult   func cancelWizardSession( ...` |
| 499 | fn | sendWizardCancellation | (private) | `private func sendWizardCancellation(     _ sess...` |
| 520 | fn | wizardCancellationOutcome | (internal) | `static func wizardCancellationOutcome(after err...` |
| 532 | fn | requestRaw | (internal) | `func requestRaw(     method: Method,     params...` |
| 540 | fn | request | (internal) | `func request(     _ request: OpenClawChatGatewa...` |
| 551 | fn | request | (internal) | `func request(     _ request: OpenClawChatGatewa...` |
| 564 | fn | requestRaw | (internal) | `func requestRaw(     method: String,     params...` |
| 607 | fn | requestVoid | (internal) | `func requestVoid(     method: Method,     param...` |
| 617 | fn | refresh | (internal) | `func refresh() async throws` |
| 629 | fn | captureRoute | (internal) | `func captureRoute() async -> Route?` |
| 661 | fn | acquireServerLease | (internal) | `func acquireServerLease() async throws -> Serve...` |
| 667 | fn | captureServerLease | (internal) | `func captureServerLease() async -> ServerLease?` |
| 676 | fn | acquireServerLease | (private) | `private func acquireServerLease(     timeoutMs:...` |
| 730 | fn | acquireServerLease | (internal) | `func acquireServerLease(     ifSameRouteAs prev...` |
| 752 | fn | isCurrentRoute | (internal) | `func isCurrentRoute(_ route: Route) async -> Bool` |
| 767 | fn | supportsServerCapability | (internal) | `func supportsServerCapability(     _ capability...` |
| 789 | fn | supportsServerCapability | (internal) | `func supportsServerCapability(     _ capability...` |
| 800 | fn | isCurrentServerLease | (internal) | `func isCurrentServerLease(_ lease: ServerLease)...` |
| 813 | fn | activationOwnershipFingerprint | (internal) | `func activationOwnershipFingerprint(     ifCurr...` |
| 820 | fn | serverLeaseMatchesCurrentState | (private) | `private func serverLeaseMatchesCurrentState(_ l...` |
| 832 | fn | sessionRoutingIdentity | (internal) | `func sessionRoutingIdentity(     ifCurrentRoute...` |
| 841 | fn | configuredGatewayURL | (internal) | `func configuredGatewayURL() -> URL?` |
| 845 | fn | authSource | (internal) | `func authSource() async -> GatewayAuthSource?` |
| 850 | fn | shutdown | (internal) | `func shutdown() async` |
| 870 | fn | configure | (private) | `private func configure(     url: URL,     token...` |
| 968 | fn | configuredClient | (private) | `private func configuredClient(     url: URL,   ...` |
| 986 | fn | requireCurrentShutdownGeneration | (private) | `private func requireCurrentShutdownGeneration(_...` |
| 992 | fn | handle | (private) | `private func handle(     push: GatewayPush,    ...` |
| 1006 | fn | admitConnectSnapshot | (private) | `private func admitConnectSnapshot(     _ snapsh...` |
| 1017 | fn | handleDisconnect | (private) | `private func handleDisconnect(routeGeneration: ...` |
| 1027 | mod | extension GatewayConnection | (internal) | - |
| 1028 | fn | admitSocketGeneration | (private) | `private func admitSocketGeneration(_ socketGene...` |
| 1040 | fn | retireSocketGeneration | (private) | `private func retireSocketGeneration(_ socketGen...` |
| 1056 | fn | resetSocketGeneration | (private) | `private func resetSocketGeneration()` |
| 1063 | fn | _test_routeGeneration | (internal) | `func _test_routeGeneration() -> UInt64` |
| 1066 | fn | _test_configuredURL | (internal) | `func _test_configuredURL() -> URL?` |
| 1070 | fn | _test_handlePush | (internal) | `func _test_handlePush(     _ push: GatewayPush,...` |
| 1081 | fn | _test_handleDisconnect | (internal) | `func _test_handleDisconnect(     routeGeneratio...` |
| 1091 | fn | defaultEndpointProvider | (private) | `private static func defaultEndpointProvider() a...` |
| 1095 | fn | currentEndpoint | (private) | `private func currentEndpoint() async throws -> ...` |
| 1101 | fn | acceptEndpointRevision | (private) | `private func acceptEndpointRevision(_ endpoint:...` |
| 1111 | fn | defaultActivationBindingKey | (internal) | `static func defaultActivationBindingKey() -> Sy...` |
| 1115 | fn | activationOwnershipFingerprint | (private) | `private static func activationOwnershipFingerpr...` |
| 1137 | mod | extension GatewayConnection | (internal) | - |
| 1138 | fn | controlUiAutoAuthToken | (internal) | `func controlUiAutoAuthToken(config: Config) asy...` |
| 1190 | fn | controlUiRouteIsLive | (private) | `private func controlUiRouteIsLive(     config: ...` |
| 1208 | fn | sessionDefaultString | (private) | `private func sessionDefaultString(_ defaults: [...` |
| 1213 | fn | cachedMainSessionKey | (internal) | `func cachedMainSessionKey() -> String?` |
| 1219 | fn | cachedGatewayVersion | (internal) | `func cachedGatewayVersion() -> String?` |
| 1226 | fn | cachedGatewayVersion | (internal) | `func cachedGatewayVersion(ifCurrentServerLease ...` |
| 1231 | fn | snapshotPaths | (internal) | `func snapshotPaths() -> (configPath: String?, s...` |
| 1240 | fn | subscribe | (internal) | `func subscribe(bufferingNewest: Int = 100) -> A...` |
| 1255 | fn | removeSubscriber | (private) | `private func removeSubscriber(_ id: UUID)` |
| 1259 | fn | broadcast | (private) | `private func broadcast(_ push: GatewayPush)` |
| 1276 | fn | canonicalizeSessionKey | (private) | `private func canonicalizeSessionKey(_ raw: Stri...` |
| 1298 | mod | extension GatewayConnection | (internal) | - |
| 1311 | fn | mainSessionKey | (internal) | `static func mainSessionKey(fromConfigGetData da...` |
| 1320 | fn | mainSessionKey | (internal) | `func mainSessionKey(timeoutMs: Double = 15000) ...` |
| 1327 | fn | refreshMainSessionKey | (internal) | `func refreshMainSessionKey(timeoutMs: Double = ...` |
| 1336 | fn | status | (internal) | `func status() async -> (ok: Bool, error: String?)` |
| 1345 | fn | setHeartbeatsEnabled | (internal) | `func setHeartbeatsEnabled(_ enabled: Bool) asyn...` |
| 1355 | fn | sendAgent | (internal) | `func sendAgent(_ invocation: GatewayAgentInvoca...` |
| 1412 | fn | healthSnapshot | (internal) | `func healthSnapshot(timeoutMs: Double? = nil) a...` |
| 1420 | fn | healthOK | (internal) | `func healthOK(timeoutMs: Int = 8000) async thro...` |
| 1427 | fn | skillsStatus | (internal) | `func skillsStatus() async throws -> SkillsStatu...` |
| 1431 | fn | skillsInstall | (internal) | `func skillsInstall(     name: String,     insta...` |
| 1450 | fn | skillsUpdate | (internal) | `func skillsUpdate(     skillKey: String,     en...` |
| 1473 | fn | sessionsPreview | (internal) | `func sessionsPreview(     keys: [String],     l...` |
| 1501 | fn | agentIdentity | (internal) | `func agentIdentity(sessionKey: String, timeoutM...` |
| 1510 | fn | chatHistory | (internal) | `func chatHistory(     sessionKey: String,     a...` |
| 1535 | fn | chatSend | (internal) | `func chatSend(     sessionKey: String,     agen...` |
| 1571 | fn | talkMode | (internal) | `func talkMode(enabled: Bool, phase: String? = n...` |
| 1581 | fn | voiceWakeGetTriggers | (internal) | `func voiceWakeGetTriggers() async throws -> [St...` |
| 1587 | fn | voiceWakeSetTriggers | (internal) | `func voiceWakeSetTriggers(_ triggers: [String])...` |
| 1600 | fn | nodePairApprove | (internal) | `func nodePairApprove(requestId: String) async t...` |
| 1607 | fn | nodePairReject | (internal) | `func nodePairReject(requestId: String) async th...` |
| 1616 | fn | devicePairApprove | (internal) | `func devicePairApprove(requestId: String) async...` |
| 1623 | fn | devicePairReject | (internal) | `func devicePairReject(requestId: String) async ...` |
| 1640 | fn | cronStatus | (internal) | `func cronStatus() async throws -> CronScheduler...` |
| 1644 | fn | cronList | (internal) | `func cronList(includeDisabled: Bool = true) asy...` |
| 1651 | fn | cronRuns | (internal) | `func cronRuns(jobId: String, limit: Int = 200) ...` |
| 1658 | fn | cronRun | (internal) | `func cronRun(jobId: String, force: Bool = true)...` |
| 1668 | fn | cronRemove | (internal) | `func cronRemove(jobId: String) async throws` |
| 1672 | fn | cronUpdate | (internal) | `func cronUpdate(jobId: String, patch: [String: ...` |
| 1678 | fn | cronAdd | (internal) | `func cronAdd(payload: [String: AnyCodable]) asy...` |
