# apps/macos/Sources/OpenClaw/NodeMode/MacNodeCodexThreadCatalog.swift

[← Back to Module](../modules/apps-macos-Sources-OpenClaw-NodeMode/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1502
- **Language:** Swift
- **Symbols:** 69
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 5 | enum | MacNodeCodexThreadCatalogContract | (internal) | `enum MacNodeCodexThreadCatalogContract` |
| 13 | enum | MacNodeCodexThreadCatalog | (internal) | `enum MacNodeCodexThreadCatalog` |
| 175 | fn | list | (internal) | `static func list(paramsJSON: String?) async thr...` |
| 181 | fn | turns | (internal) | `static func turns(paramsJSON: String?) async th...` |
| 190 | fn | list | (internal) | `static func list(     paramsJSON: String?,     ...` |
| 205 | fn | turns | (internal) | `static func turns(     paramsJSON: String?,    ...` |
| 226 | fn | turns | (private) | `private static func turns(     params: TurnPara...` |
| 259 | fn | requireCatalogThread | (private) | `private static func requireCatalogThread(     _...` |
| 292 | fn | shouldAdvertise | (internal) | `static func shouldAdvertise(root: [String: Any]...` |
| 309 | fn | list | (internal) | `static func list(     paramsJSON: String?,     ...` |
| 330 | fn | list | (private) | `private static func list(     params: ListParam...` |
| 406 | mod | extension MacNodeCodexThreadCatalog | (internal) | - |
| 475 | fn | supportsConfiguredTransport | (private) | `private static func supportsConfiguredTransport...` |
| 479 | fn | supportsConfiguredHomeScope | (private) | `private static func supportsConfiguredHomeScope...` |
| 483 | fn | configuredPlugin | (private) | `private static func configuredPlugin(root: [Str...` |
| 511 | fn | validateAppServerConfig | (private) | `private static func validateAppServerConfig(_ r...` |
| 563 | fn | optionalConfiguredString | (private) | `private static func optionalConfiguredString(  ...` |
| 574 | fn | configuredArguments | (private) | `private static func configuredArguments(     _ ...` |
| 593 | fn | configuredStringList | (private) | `private static func configuredStringList(     _...` |
| 604 | fn | validateDiscoveryConfig | (private) | `private static func validateDiscoveryConfig(_ r...` |
| 614 | fn | validateComputerUseConfig | (private) | `private static func validateComputerUseConfig(_...` |
| 643 | fn | validateSupervisionConfig | (private) | `private static func validateSupervisionConfig(_...` |
| 668 | fn | validateSupervisionEndpoint | (private) | `private static func validateSupervisionEndpoint...` |
| 698 | fn | validateNetworkProxyConfig | (private) | `private static func validateNetworkProxyConfig(...` |
| 745 | fn | validateExperimentalConfig | (private) | `private static func validateExperimentalConfig(...` |
| 754 | fn | validateHeaders | (private) | `private static func validateHeaders(_ rawValue:...` |
| 764 | fn | validateSecretInput | (private) | `private static func validateSecretInput(_ rawVa...` |
| 796 | fn | validFileSecretId | (private) | `private static func validFileSecretId(_ value: ...` |
| 807 | fn | validateKeys | (private) | `private static func validateKeys(     _ object:...` |
| 816 | fn | validateBoolean | (private) | `private static func validateBoolean(_ object: [...` |
| 823 | fn | validateString | (private) | `private static func validateString(_ object: [S...` |
| 828 | fn | validateNonEmptyString | (private) | `private static func validateNonEmptyString(_ ob...` |
| 837 | fn | validateStringOrNull | (private) | `private static func validateStringOrNull(_ obje...` |
| 844 | fn | validateEnum | (private) | `private static func validateEnum(     _ object:...` |
| 855 | fn | validatePositiveNumber | (private) | `private static func validatePositiveNumber(_ ob...` |
| 866 | fn | validateStringArray | (private) | `private static func validateStringArray(_ objec...` |
| 873 | fn | validateStringRecord | (private) | `private static func validateStringRecord(     _...` |
| 889 | fn | literalBoolean | (private) | `private static func literalBoolean(_ value: Any...` |
| 896 | fn | matches | (private) | `private static func matches(_ value: String, pa...` |
| 903 | fn | splitShellWords | (private) | `private static func splitShellWords(_ value: St...` |
| 932 | fn | resolvePath | (private) | `private static func resolvePath(     _ path: St...` |
| 945 | fn | decodeParams | (private) | `private static func decodeParams(_ paramsJSON: ...` |
| 986 | fn | decodeTurnParams | (private) | `private static func decodeTurnParams(_ paramsJS...` |
| 1019 | fn | optionalString | (private) | `private static func optionalString(     _ param...` |
| 1036 | fn | appServerParams | (private) | `private static func appServerParams(_ params: L...` |
| 1058 | fn | normalize | (internal) | `static func normalize(     listResultData: Data...` |
| 1067 | fn | normalizedResponse | (private) | `private static func normalizedResponse(     lis...` |
| 1137 | fn | encodeResponse | (private) | `private static func encodeResponse(_ response: ...` |
| 1145 | fn | nonEmptyString | (private) | `fileprivate static func nonEmptyString(_ value:...` |
| 1151 | fn | boundedString | (private) | `private static func boundedString(     _ value:...` |
| 1162 | fn | boundedCursor | (private) | `private static func boundedCursor(_ value: Any?...` |
| 1172 | fn | truncateUTF16 | (private) | `private static func truncateUTF16(_ value: Stri...` |
| 1184 | fn | integer | (private) | `private static func integer(_ value: Any?) -> I...` |
| 1191 | fn | sourceName | (private) | `private static func sourceName(_ value: Any?) -...` |
| 1211 | class | CodexAppServerThreadRequestSession | (private) | `class CodexAppServerThreadRequestSession` |
| 1240 | method | init | (internal) | `init(     invocation: MacNodeCodexThreadCatalog...` |
| 1268 | fn | run | (internal) | `func run() async throws -> Output` |
| 1282 | fn | start | (private) | `private func start(_ continuation: CheckedConti...` |
| 1334 | fn | drainStdout | (private) | `private func drainStdout(from handle: FileHandle)` |
| 1344 | fn | consumeStdout | (private) | `private func consumeStdout(_ data: Data)` |
| 1363 | fn | handleLine | (private) | `private func handleLine(_ data: Data)` |
| 1399 | fn | write | (private) | `private func write(_ data: Data) throws` |
| 1405 | fn | finish | (private) | `private func finish(_ result: Result<Output, Er...` |
| 1421 | fn | initializeRequestData | (private) | `private static func initializeRequestData() thr...` |
| 1436 | fn | initializedNotificationData | (private) | `private static func initializedNotificationData...` |
| 1440 | fn | jsonData | (private) | `private static func jsonData(_ object: Any) thr...` |
| 1444 | fn | readAvailable | (private) | `private static func readAvailable(from handle: ...` |
| 1474 | fn | drainAvailable | (private) | `private static func drainAvailable(from handle:...` |
| 1494 | fn | setNonBlocking | (private) | `private static func setNonBlocking(_ handle: Fi...` |
