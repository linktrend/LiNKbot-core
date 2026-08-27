# apps/shared/OpenClawKit/Sources/OpenClawKit/GatewayConnectionProblem.swift

[← Back to Module](../modules/apps-shared-OpenClawKit-Sources-OpenClawKit/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1129
- **Language:** Swift
- **Symbols:** 26
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 3 | struct | GatewayConnectionProblem | pub | `struct GatewayConnectionProblem` |
| 73 | method | init | pub | `public init(     kind: Kind,     owner: Owner, ...` |
| 164 | fn | trimmedOrNil | (private) | `private static func trimmedOrNil(_ value: Strin...` |
| 171 | enum | GatewayConnectionProblemMapper | pub | `enum GatewayConnectionProblemMapper` |
| 184 | fn | map | pub | `public static func map(     error: Error,     p...` |
| 200 | fn | shouldPreserve | pub | `public static func shouldPreserve(     previous...` |
| 210 | fn | shouldPreserve | pub | `public static func shouldPreserve(     previous...` |
| 222 | fn | rawMap | (private) | `private static func rawMap(_ error: Error) -> G...` |
| 235 | fn | map | (private) | `private static func map(_ authError: GatewayCon...` |
| 362 | fn | gatewayCredentialProblem | (private) | `private static func gatewayCredentialProblem(  ...` |
| 478 | fn | deviceCredentialProblem | (private) | `private static func deviceCredentialProblem(   ...` |
| 541 | fn | deviceIdentityProblem | (private) | `private static func deviceIdentityProblem(     ...` |
| 671 | mod | extension GatewayConnectionProblemMapper | (internal) | - |
| 672 | fn | map | (private) | `private static func map(_ responseError: Gatewa...` |
| 694 | fn | map | (private) | `private static func map(_ tlsError: GatewayTLSV...` |
| 762 | fn | mapTransportError | (private) | `private static func mapTransportError(_ error: ...` |
| 884 | fn | pairingProblem | (private) | `private static func pairingProblem(for authErro...` |
| 962 | fn | protocolMismatchProblem | (private) | `private static func protocolMismatchProblem(for...` |
| 1013 | fn | problem | (private) | `private static func problem(     _ defaults: Au...` |
| 1042 | fn | approvalCommand | (private) | `private static func approvalCommand(requestId: ...` |
| 1049 | fn | technicalDetails | (private) | `private static func technicalDetails(for authEr...` |
| 1078 | fn | protocolRange | (private) | `private static func protocolRange(min: Int?, ma...` |
| 1093 | fn | docsURL | (private) | `private static func docsURL(_ preferred: String...` |
| 1103 | fn | owner | (private) | `private static func owner(from raw: String) -> ...` |
| 1120 | fn | stringValue | (private) | `private static func stringValue(_ value: Any?) ...` |
| 1124 | fn | nonEmpty | (private) | `private static func nonEmpty(_ value: String?) ...` |

## Public API

### `GatewayConnectionProblem`

```
struct GatewayConnectionProblem
```

**Line:** 3 | **Kind:** struct

### `init`

```
public init(
        kind: Kind,
        owner: Owner,
        title: String,
        message: String,
        actionLabel: String? = nil,
        titlePresentation: PresentationText? = nil,
        messagePresentation: PresentationText? = nil,
        actionLabelPresentation: PresentationText? = nil,
        actionCommand: String? = nil,
        docsURL: URL? = nil,
        requestId: String? = nil,
        retryable: Bool,
        pauseReconnect: Bool,
        technicalDetails: String? = nil,
        tlsStoreKey: String? = nil,
        tlsExpectedFingerprint: String? = nil,
        tlsObservedFingerprint: String? = nil,
        tlsSystemTrustOk: Bool = false)
```

**Line:** 73 | **Kind:** method

### `GatewayConnectionProblemMapper`

```
enum GatewayConnectionProblemMapper
```

**Line:** 171 | **Kind:** enum

### `map`

```
public static func map(
        error: Error,
        preserving previousProblem: GatewayConnectionProblem? = nil) -> GatewayConnectionProblem?
```

**Line:** 184 | **Kind:** fn

### `shouldPreserve`

```
public static func shouldPreserve(
        previousProblem: GatewayConnectionProblem,
        over nextProblem: GatewayConnectionProblem) -> Bool
```

**Line:** 200 | **Kind:** fn

### `shouldPreserve`

```
public static func shouldPreserve(
        previousProblem: GatewayConnectionProblem,
        overDisconnectReason reason: String) -> Bool
```

**Line:** 210 | **Kind:** fn
