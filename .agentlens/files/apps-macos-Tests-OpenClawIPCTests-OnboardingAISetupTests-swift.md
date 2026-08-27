# apps/macos/Tests/OpenClawIPCTests/OnboardingAISetupTests.swift

[← Back to Module](../modules/apps-macos-Tests-OpenClawIPCTests/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3781
- **Language:** Swift
- **Symbols:** 48
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 9 | class | ActivationMarkerObservation | (private) | `actor ActivationMarkerObservation` |
| 12 | fn | record | (internal) | `func record(_ value: Bool)` |
| 16 | fn | value | (internal) | `func value() -> Bool` |
| 20 | fn | record | (internal) | `func record(deadline: Date?)` |
| 24 | fn | deadline | (internal) | `func deadline() -> Date?` |
| 30 | class | ActivationOwnerObservation | (private) | `class ActivationOwnerObservation` |
| 33 | fn | record | (internal) | `func record(_ owner: OnboardingSystemAgentResum...` |
| 39 | fn | value | (internal) | `func value() -> OnboardingSystemAgentResumeStor...` |
| 47 | class | AISetupSocketGeneration | (private) | `class AISetupSocketGeneration` |
| 50 | fn | claim | (internal) | `func claim() -> Int` |
| 59 | class | AISetupGatewayConfig | (private) | `class AISetupGatewayConfig` |
| 64 | method | init | (internal) | `init(url: URL, token: String)` |
| 69 | fn | setToken | (internal) | `func setToken(_ token: String)` |
| 76 | fn | switchToken | (internal) | `func switchToken(to token: String, afterReads: ...` |
| 82 | fn | snapshot | (internal) | `func snapshot() -> GatewayConnection.Config` |
| 101 | class | AISetupRouteIdentity | (private) | `class AISetupRouteIdentity` |
| 104 | method | init | (internal) | `init(_ value: String)` |
| 108 | fn | set | (internal) | `func set(_ value: String)` |
| 114 | fn | snapshot | (internal) | `func snapshot() -> String` |
| 122 | class | AISetupRequestRecorder | (private) | `actor AISetupRequestRecorder` |
| 125 | fn | record | (internal) | `func record(_ message: URLSessionWebSocketTask....` |
| 133 | fn | snapshot | (internal) | `func snapshot() -> (methods: [String], apiKeys:...` |
| 139 | class | AISetupRequestGate | (private) | `actor AISetupRequestGate` |
| 144 | fn | wait | (internal) | `func wait() async` |
| 154 | fn | waitUntilStarted | (internal) | `func waitUntilStarted() async` |
| 161 | fn | release | (internal) | `func release()` |
| 169 | class | AISetupConfigReadGate | (private) | `actor AISetupConfigReadGate` |
| 175 | fn | armNextRead | (internal) | `func armNextRead()` |
| 179 | fn | snapshotToken | (internal) | `func snapshotToken() async -> String` |
| 194 | fn | waitUntilBlocked | (internal) | `func waitUntilBlocked() async` |
| 201 | fn | release | (internal) | `func release()` |
| 208 | fn | aiSetupRequest | (private) | `private func aiSetupRequest(   from message: UR...` |
| 224 | fn | detectedSetupResponse | (private) | `private func detectedSetupResponse(   id: Strin...` |
| 258 | fn | successfulEmptyResponse | (private) | `private func successfulEmptyResponse(id: String...` |
| 293 | fn | actionableDetectedSetupResponse | (private) | `private func actionableDetectedSetupResponse(id...` |
| 299 | fn | persistedDetectedSetupResponse | (private) | `private func persistedDetectedSetupResponse(   ...` |
| 316 | fn | missingConfiguredModelResponse | (private) | `private func missingConfiguredModelResponse(id:...` |
| 334 | fn | configuredModelResponse | (private) | `private func configuredModelResponse(id: String...` |
| 355 | fn | waitForAISetupRequests | (private) | `private func waitForAISetupRequests(   _ record...` |
| 369 | fn | settleQueuedAISetupTasks | (private) | `private func settleQueuedAISetupTasks() async` |
| 373 | fn | makeAISetupSession | (private) | `private func makeAISetupSession(   recorder: AI...` |
| 408 | fn | makeRestartingAISetupSession | (private) | `private func makeRestartingAISetupSession(   su...` |
| 464 | fn | failedActivationResponse | (private) | `private func failedActivationResponse(id: Strin...` |
| 477 | fn | indeterminateActivationResponse | (private) | `private func indeterminateActivationResponse(id...` |
| 493 | fn | verifiedSetupResponse | (private) | `private func verifiedSetupResponse(id: String) ...` |
| 506 | fn | rejectedSetupVerificationResponse | (private) | `private func rejectedSetupVerificationResponse(...` |
| 519 | fn | unavailableGatewayResponse | (private) | `private func unavailableGatewayResponse(id: Str...` |
| 534 | struct | OnboardingAISetupTests | (internal) | `struct OnboardingAISetupTests` |
