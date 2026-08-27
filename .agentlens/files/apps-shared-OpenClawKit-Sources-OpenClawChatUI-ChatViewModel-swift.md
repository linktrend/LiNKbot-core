# apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel.swift

[← Back to Module](../modules/apps-shared-OpenClawKit-Sources-OpenClawChatUI/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1583
- **Language:** Swift
- **Symbols:** 62
- **Public symbols:** 17

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 9 | class | OpenClawChatViewModel | pub | `class OpenClawChatViewModel` |
| 511 | fn | load | pub | `public func load()` |
| 515 | fn | refresh | pub | `public func refresh()` |
| 530 | fn | isDefaultModel | pub | `public func isDefaultModel(_ model: OpenClawCha...` |
| 542 | fn | toggleSelectedModelPinned | pub | `public func toggleSelectedModelPinned()` |
| 548 | fn | resumeFromForeground | pub | `public func resumeFromForeground()` |
| 552 | fn | abort | pub | `public func abort()` |
| 556 | fn | deleteSession | pub | `public func deleteSession(_ sessionKey: String)` |
| 584 | fn | switchSession | pub | `public func switchSession(to sessionKey: String)` |
| 588 | fn | syncSession | pub | `public func syncSession(to sessionKey: String)` |
| 594 | fn | syncActiveAgentId | pub | `public func syncActiveAgentId(_ agentId: String?)` |
| 600 | fn | syncSessionRoutingContract | pub | `public func syncSessionRoutingContract(_ contra...` |
| 609 | fn | syncDeliveryIdentity | pub | `public func syncDeliveryIdentity(     activeAge...` |
| 654 | fn | selectThinkingLevel | pub | `public func selectThinkingLevel(_ level: String)` |
| 658 | fn | selectVerboseLevel | pub | `public func selectVerboseLevel(_ level: String)` |
| 662 | fn | selectFastMode | pub | `public func selectFastMode(_ selectionID: String)` |
| 666 | fn | selectModel | pub | `public func selectModel(_ selectionID: String)` |
| 684 | fn | usesMutableContractRouting | (private) | `private func usesMutableContractRouting(for con...` |
| 688 | fn | usesMutableContractRouting | (internal) | `func usesMutableContractRouting(sessionKey: Str...` |
| 730 | mod | extension OpenClawChatViewModel | (internal) | - |
| 732 | fn | markTimelineChanged | (internal) | `func markTimelineChanged()` |
| 736 | fn | appendMessage | (internal) | `func appendMessage(_ message: OpenClawChatMessage)` |
| 741 | fn | removeMessage | (internal) | `func removeMessage(id: UUID)` |
| 749 | fn | updateStreamingAssistantText | (internal) | `func updateStreamingAssistantText(_ text: String?)` |
| 755 | fn | logDiagnostic | (internal) | `func logDiagnostic(_ message: String)` |
| 759 | fn | currentSessionSnapshot | (internal) | `func currentSessionSnapshot() -> SessionSnapshot` |
| 768 | fn | isCurrentSession | (internal) | `func isCurrentSession(_ snapshot: SessionSnapsh...` |
| 777 | fn | isCurrentBootstrap | (private) | `private func isCurrentBootstrap(_ context: Boot...` |
| 781 | fn | startBootstrap | (private) | `private func startBootstrap(sessionKey requeste...` |
| 809 | fn | bootstrap | (private) | `private func bootstrap(context: BootstrapContex...` |
| 853 | fn | syncActiveSessionSubscription | (private) | `private func syncActiveSessionSubscription(star...` |
| 875 | fn | refreshRunStateAfterForeground | (private) | `private func refreshRunStateAfterForeground() a...` |
| 912 | fn | performAbort | (private) | `private func performAbort() async` |
| 928 | fn | fetchSessions | (internal) | `func fetchSessions(limit: Int?, sessionSnapshot...` |
| 1013 | fn | restoreOverlappingSettingsPatch | (private) | `private func restoreOverlappingSettingsPatch(re...` |
| 1046 | fn | invalidateSessionMetadataReadiness | (internal) | `func invalidateSessionMetadataReadiness()` |
| 1055 | fn | fetchModels | (private) | `private func fetchModels(sessionSnapshot: Sessi...` |
| 1069 | fn | applySessionSwitch | (private) | `private func applySessionSwitch(to sessionKey: ...` |
| 1100 | fn | applyDeferredExternalStateIfReady | (internal) | `func applyDeferredExternalStateIfReady()` |
| 1117 | fn | adoptCreatedSession | (internal) | `func adoptCreatedSession(_ next: String)` |
| 1129 | fn | clearSessionOwnedState | (private) | `private func clearSessionOwnedState()` |
| 1146 | fn | performReset | (internal) | `func performReset() async` |
| 1165 | fn | performCompact | (internal) | `func performCompact() async` |
| 1201 | fn | reserveModelSelection | (private) | `private func reserveModelSelection(_ selectionI...` |
| 1232 | fn | performSelectModel | (private) | `private func performSelectModel(     _ request:...` |
| 1285 | fn | finishSettingsPatchTail | (private) | `private func finishSettingsPatchTail(requestID:...` |
| 1290 | fn | reserveSessionSettingsRequest | (internal) | `func reserveSessionSettingsRequest(for target: ...` |
| 1296 | fn | enqueueSessionSettingsPatch | (internal) | `func enqueueSessionSettingsPatch(     requestID...` |
| 1324 | fn | beginSettingsPatch | (private) | `private func beginSettingsPatch(for target: Mod...` |
| 1329 | fn | endSettingsPatch | (private) | `private func endSettingsPatch(for target: Model...` |
| 1356 | fn | waitForPendingSessionSettings | (internal) | `func waitForPendingSessionSettings(     in sess...` |
| 1383 | fn | waitForPendingSessionSettings | (private) | `private func waitForPendingSessionSettings(for ...` |
| 1390 | fn | placeholderSession | (internal) | `func placeholderSession(key: String) -> OpenCla...` |
| 1413 | fn | syncSelectedModel | (internal) | `func syncSelectedModel()` |
| 1437 | fn | normalizedSelectionID | (private) | `private func normalizedSelectionID(_ selectionI...` |
| 1443 | fn | normalizedModelSelectionID | (private) | `private func normalizedModelSelectionID(_ model...` |
| 1467 | fn | modelRef | (private) | `private func modelRef(forSelectionID selectionI...` |
| 1477 | fn | generatedNewSessionKey | (internal) | `func generatedNewSessionKey(agentID explicitAge...` |
| 1489 | fn | modelLabel | (private) | `private func modelLabel(for modelID: String) ->...` |
| 1494 | fn | applySuccessfulModelSelection | (private) | `private func applySuccessfulModelSelection(    ...` |
| 1542 | fn | recordSuccessfulModelPatch | (private) | `private func recordSuccessfulModelPatch(     se...` |
| 1571 | fn | resolvedSessionModelIdentity | (private) | `private func resolvedSessionModelIdentity(forSe...` |

## Public API

### `OpenClawChatViewModel`

```
class OpenClawChatViewModel
```

**Line:** 9 | **Kind:** class

### `load`

```
public func load()
```

**Line:** 511 | **Kind:** fn

### `refresh`

```
public func refresh()
```

**Line:** 515 | **Kind:** fn

### `isDefaultModel`

```
public func isDefaultModel(_ model: OpenClawChatModelChoice) -> Bool
```

**Line:** 530 | **Kind:** fn

### `toggleSelectedModelPinned`

```
public func toggleSelectedModelPinned()
```

**Line:** 542 | **Kind:** fn

### `resumeFromForeground`

```
public func resumeFromForeground()
```

**Line:** 548 | **Kind:** fn

### `abort`

```
public func abort()
```

**Line:** 552 | **Kind:** fn

### `deleteSession`

```
public func deleteSession(_ sessionKey: String)
```

**Line:** 556 | **Kind:** fn

### `switchSession`

```
public func switchSession(to sessionKey: String)
```

**Line:** 584 | **Kind:** fn

### `syncSession`

```
public func syncSession(to sessionKey: String)
```

**Line:** 588 | **Kind:** fn

### `syncActiveAgentId`

```
public func syncActiveAgentId(_ agentId: String?)
```

**Line:** 594 | **Kind:** fn

### `syncSessionRoutingContract`

```
public func syncSessionRoutingContract(_ contract: String?)
```

**Line:** 600 | **Kind:** fn

### `syncDeliveryIdentity`

```
public func syncDeliveryIdentity(
        activeAgentId agentId: String?,
        sessionRoutingContract contract: String?)
```

**Line:** 609 | **Kind:** fn

### `selectThinkingLevel`

```
public func selectThinkingLevel(_ level: String)
```

**Line:** 654 | **Kind:** fn

### `selectVerboseLevel`

```
public func selectVerboseLevel(_ level: String)
```

**Line:** 658 | **Kind:** fn

### `selectFastMode`

```
public func selectFastMode(_ selectionID: String)
```

**Line:** 662 | **Kind:** fn

### `selectModel`

```
public func selectModel(_ selectionID: String)
```

**Line:** 666 | **Kind:** fn
