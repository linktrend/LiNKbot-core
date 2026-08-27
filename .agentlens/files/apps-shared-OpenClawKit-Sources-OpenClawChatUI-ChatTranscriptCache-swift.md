# apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatTranscriptCache.swift

[← Back to Module](../modules/apps-shared-OpenClawKit-Sources-OpenClawChatUI/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1585
- **Language:** Swift
- **Symbols:** 78
- **Public symbols:** 26

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 11 | class | OutboxChangeHub | (private) | `class OutboxChangeHub` |
| 14 | fn | stream | (internal) | `func stream() -> AsyncStream<OpenClawChatOutbox...` |
| 26 | fn | yield | (internal) | `func yield(_ change: OpenClawChatOutboxChange)` |
| 35 | fn | finish | (internal) | `func finish()` |
| 45 | fn | remove | (private) | `private func remove(_ id: UUID)` |
| 55 | class | CanonicalMessageProofHub | (private) | `class CanonicalMessageProofHub` |
| 59 | fn | observe | (internal) | `func observe(_ observed: Set<String>)` |
| 76 | fn | lockProofDecision | (internal) | `func lockProofDecision(for key: String) -> Bool` |
| 80 | fn | unlockProofDecision | (internal) | `func unlockProofDecision()` |
| 94 | class | OpenClawChatSQLiteTranscriptCache | pub | `actor OpenClawChatSQLiteTranscriptCache` |
| 161 | method | init | (internal) | `init(raw: OpaquePointer)` |
| 184 | method | init | pub | `public init(databaseURL: URL, gatewayID: String)` |
| 225 | fn | removeDatabaseFiles | pub | `public static func removeDatabaseFiles(at datab...` |
| 234 | fn | loadSessions | pub | `public func loadSessions() async -> [OpenClawCh...` |
| 255 | fn | loadTranscript | pub | `public func loadTranscript(sessionKey: String) ...` |
| 259 | fn | loadTranscript | pub | `public func loadTranscript(sessionKey: String, ...` |
| 265 | fn | readTranscript | (private) | `private func readTranscript(     _ db: OpaquePo...` |
| 297 | fn | storeSessions | pub | `public func storeSessions(_ sessions: [OpenClaw...` |
| 315 | fn | loadSessionRoutingIdentity | pub | `public func loadSessionRoutingIdentity() async ...` |
| 336 | fn | storeSessionRoutingIdentity | pub | `public func storeSessionRoutingIdentity(_ ident...` |
| 354 | fn | storeTranscript | pub | `public func storeTranscript(sessionKey: String,...` |
| 358 | fn | storeTranscript | pub | `public func storeTranscript(     sessionKey: St...` |
| 366 | fn | storeCanonicalTranscript | pub | `public func storeCanonicalTranscript(     sessi...` |
| 378 | fn | storeCanonicalTranscript | pub | `public func storeCanonicalTranscript(     sessi...` |
| 394 | fn | mergeCanonicalTranscriptMessage | pub | `public func mergeCanonicalTranscriptMessage(   ...` |
| 431 | fn | writeTranscript | (private) | `private func writeTranscript(     sessionKey: S...` |
| 441 | fn | writeTranscript | (private) | `private func writeTranscript(     _ db: OpaqueP...` |
| 486 | fn | retire | pub | `public func retire() async` |
| 496 | mod | extension OpenClawChatSQLiteTranscriptCache | (internal) | - |
| 502 | fn | enqueueCommand | pub | `public func enqueueCommand(_ command: OpenClawC...` |
| 564 | fn | loadCommands | pub | `public func loadCommands() async -> [OpenClawCh...` |
| 568 | fn | loadCommandsIfAvailable | pub | `public func loadCommandsIfAvailable() async -> ...` |
| 574 | fn | recoverInterruptedSends | pub | `@discardableResult   public func recoverInterru...` |
| 592 | fn | claimNextCommand | pub | `public func claimNextCommand() async -> OpenCla...` |
| 631 | fn | markCommandQueued | pub | `public func markCommandQueued(id: String, retry...` |
| 635 | fn | markCommandAwaitingConfirmation | pub | `public func markCommandAwaitingConfirmation(id:...` |
| 656 | fn | markCommandFailedIfPresent | pub | `public func markCommandFailedIfPresent(     id:...` |
| 681 | fn | markCommandRetriedIfPresent | pub | `public func markCommandRetriedIfPresent(     id...` |
| 755 | fn | cancelCommand | pub | `public func cancelCommand(id: String) async -> ...` |
| 823 | fn | confirmCommand | pub | `public func confirmCommand(id: String) async ->...` |
| 835 | fn | emitOutboxChange | (private) | `private func emitOutboxChange(_ change: OpenCla...` |
| 839 | fn | updateCommandStatus | (private) | `private func updateCommandStatus(id: String, st...` |
| 856 | fn | applyOutboxStaleness | (private) | `private func applyOutboxStaleness(_ db: OpaqueP...` |
| 880 | mod | extension OpenClawChatSQLiteTranscriptCache | (internal) | - |
| 886 | fn | cacheableMessages | (internal) | `static func cacheableMessages(_ messages: [Open...` |
| 919 | fn | cacheableDetails | (private) | `private static func cacheableDetails(_ details:...` |
| 926 | fn | cacheablePatchArguments | (private) | `private static func cacheablePatchArguments(_ i...` |
| 943 | fn | cacheableText | (private) | `private static func cacheableText(_ value: Stri...` |
| 953 | fn | utf16Prefix | (private) | `private static func utf16Prefix(_ value: String...` |
| 964 | fn | boundedSessions | (internal) | `static func boundedSessions(_ sessions: [OpenCl...` |
| 972 | fn | normalizedAgentID | (private) | `private static func normalizedAgentID(_ agentID...` |
| 976 | fn | transcriptCacheAgentID | (private) | `private static func transcriptCacheAgentID(sess...` |
| 988 | fn | attachmentByteCount | (private) | `private static func attachmentByteCount(_ attac...` |
| 998 | fn | canEnqueueAttachmentBytes | (internal) | `static func canEnqueueAttachmentBytes(commandBy...` |
| 1006 | fn | encodeJSON | (private) | `private static func encodeJSON(_ value: some En...` |
| 1011 | fn | rememberMessageKey | (private) | `private static func rememberMessageKey(     _ k...` |
| 1033 | fn | removeCachedMessage | (private) | `private func removeCachedMessage(     _ db: Opa...` |
| 1089 | fn | handle | (private) | `private func handle() async -> OpaquePointer?` |
| 1128 | fn | isProtectedDataAvailable | (private) | `private func isProtectedDataAvailable() async -...` |
| 1132 | fn | openConnection | (private) | `private func openConnection() -> OpaquePointer?` |
| 1197 | fn | readUserVersion | (private) | `private func readUserVersion(_ db: OpaquePointe...` |
| 1207 | fn | createSchema | (private) | `private func createSchema(_ db: OpaquePointer) ...` |
| 1227 | fn | migrateSchemaFromV1 | (private) | `private func migrateSchemaFromV1(_ db: OpaquePo...` |
| 1247 | fn | migrateSchemaFromV2 | (private) | `private func migrateSchemaFromV2(_ db: OpaquePo...` |
| 1302 | fn | migrateSchemaFromV3 | (private) | `private func migrateSchemaFromV3(_ db: OpaquePo...` |
| 1339 | fn | migrateSchemaFromV4 | (private) | `private func migrateSchemaFromV4(_ db: OpaquePo...` |
| 1356 | fn | migrateSchemaFromV5 | (private) | `private func migrateSchemaFromV5(_ db: OpaquePo...` |
| 1372 | fn | addV6AttachmentColumns | (private) | `private func addV6AttachmentColumns(_ db: Opaqu...` |
| 1387 | fn | migrateTranscriptTableToV3 | (private) | `private func migrateTranscriptTableToV3(_ db: O...` |
| 1415 | fn | table | (private) | `private func table(_ db: OpaquePointer, hasColu...` |
| 1430 | fn | execute | (private) | `@discardableResult   private func execute(_ db:...` |
| 1442 | fn | selectInt | (private) | `private func selectInt(_ db: OpaquePointer, sql...` |
| 1451 | fn | readCommands | (private) | `private func readCommands(_ db: OpaquePointer) ...` |
| 1516 | fn | lookupOutboxTarget | (private) | `private func lookupOutboxTarget(_ db: OpaquePoi...` |
| 1537 | fn | lookupPayload | (private) | `private func lookupPayload(_ db: OpaquePointer,...` |
| 1553 | fn | selectPayload | (private) | `private func selectPayload(_ db: OpaquePointer,...` |
| 1560 | fn | bind | (private) | `private func bind(_ statement: OpaquePointer?, ...` |
| 1580 | fn | removeDatabaseFiles | (private) | `private func removeDatabaseFiles()` |

## Public API

### `OpenClawChatSQLiteTranscriptCache`

```
actor OpenClawChatSQLiteTranscriptCache
```

**Line:** 94 | **Kind:** class

### `init`

```
public init(databaseURL: URL, gatewayID: String)
```

**Line:** 184 | **Kind:** method

### `removeDatabaseFiles`

```
public static func removeDatabaseFiles(at databaseURL: URL)
```

**Line:** 225 | **Kind:** fn

### `loadSessions`

```
public func loadSessions() async -> [OpenClawChatSessionEntry]
```

**Line:** 234 | **Kind:** fn

### `loadTranscript`

```
public func loadTranscript(sessionKey: String) async -> [OpenClawChatMessage]
```

**Line:** 255 | **Kind:** fn

### `loadTranscript`

```
public func loadTranscript(sessionKey: String, agentID: String?) async -> [OpenClawChatMessage]
```

**Line:** 259 | **Kind:** fn

### `storeSessions`

```
public func storeSessions(_ sessions: [OpenClawChatSessionEntry]) async
```

**Line:** 297 | **Kind:** fn

### `loadSessionRoutingIdentity`

```
public func loadSessionRoutingIdentity() async -> OpenClawChatSessionRoutingIdentity?
```

**Line:** 315 | **Kind:** fn

### `storeSessionRoutingIdentity`

```
public func storeSessionRoutingIdentity(_ identity: OpenClawChatSessionRoutingIdentity) async
```

**Line:** 336 | **Kind:** fn

### `storeTranscript`

```
public func storeTranscript(sessionKey: String, messages: [OpenClawChatMessage]) async
```

**Line:** 354 | **Kind:** fn

### `storeTranscript`

```
public func storeTranscript(
        sessionKey: String,
        agentID: String?,
        messages: [OpenClawChatMessage]) async
```

**Line:** 358 | **Kind:** fn

### `storeCanonicalTranscript`

```
public func storeCanonicalTranscript(
        sessionKey: String,
        messages: [OpenClawChatMessage],
        canonicalMessageIdempotencyKeys: Set<String>) async
```

**Line:** 366 | **Kind:** fn

### `storeCanonicalTranscript`

```
public func storeCanonicalTranscript(
        sessionKey: String,
        agentID: String?,
        messages: [OpenClawChatMessage],
        canonicalMessageIdempotencyKeys: Set<String>) async
```

**Line:** 378 | **Kind:** fn

### `mergeCanonicalTranscriptMessage`

```
public func mergeCanonicalTranscriptMessage(
        sessionKey: String,
        agentID: String?,
        message: OpenClawChatMessage,
        canonicalMessageIdempotencyKey: String) async
```

**Line:** 394 | **Kind:** fn

### `retire`

```
public func retire() async
```

**Line:** 486 | **Kind:** fn

### `enqueueCommand`

```
public func enqueueCommand(_ command: OpenClawChatOutboxCommand) async -> Bool
```

**Line:** 502 | **Kind:** fn

### `loadCommands`

```
public func loadCommands() async -> [OpenClawChatOutboxCommand]
```

**Line:** 564 | **Kind:** fn

### `loadCommandsIfAvailable`

```
public func loadCommandsIfAvailable() async -> [OpenClawChatOutboxCommand]?
```

**Line:** 568 | **Kind:** fn

### `recoverInterruptedSends`

```
@discardableResult
    public func recoverInterruptedSends() async -> Bool
```

**Line:** 574 | **Kind:** fn

### `claimNextCommand`

```
public func claimNextCommand() async -> OpenClawChatOutboxCommand?
```

**Line:** 592 | **Kind:** fn

### `markCommandQueued`

```
public func markCommandQueued(id: String, retryCount: Int, lastError: String?) async
```

**Line:** 631 | **Kind:** fn

### `markCommandAwaitingConfirmation`

```
public func markCommandAwaitingConfirmation(id: String) async -> OpenClawChatOutboxUpdateResult
```

**Line:** 635 | **Kind:** fn

### `markCommandFailedIfPresent`

```
public func markCommandFailedIfPresent(
        id: String,
        retryCount: Int,
        lastError: String?) async -> OpenClawChatOutboxUpdateResult
```

**Line:** 656 | **Kind:** fn

### `markCommandRetriedIfPresent`

```
public func markCommandRetriedIfPresent(
        id: String,
        agentID: String?,
        deliverySessionKey: String,
        routingContract: String) async -> OpenClawChatOutboxUpdateResult
```

**Line:** 681 | **Kind:** fn

### `cancelCommand`

```
public func cancelCommand(id: String) async -> OpenClawChatOutboxUpdateResult
```

**Line:** 755 | **Kind:** fn

### `confirmCommand`

```
public func confirmCommand(id: String) async -> OpenClawChatOutboxUpdateResult
```

**Line:** 823 | **Kind:** fn
