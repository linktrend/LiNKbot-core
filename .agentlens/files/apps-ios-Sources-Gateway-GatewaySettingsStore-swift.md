# apps/ios/Sources/Gateway/GatewaySettingsStore.swift

[← Back to Module](../modules/apps-ios-Sources-Gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1252
- **Language:** Swift
- **Symbols:** 87
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 5 | enum | GatewayCredentialPersistenceError | (internal) | `enum GatewayCredentialPersistenceError` |
| 22 | enum | GatewaySettingsStore | (internal) | `enum GatewaySettingsStore` |
| 133 | fn | bootstrapPersistence | (internal) | `static func bootstrapPersistence()` |
| 143 | fn | currentInstanceID | (internal) | `static func currentInstanceID(defaults: UserDef...` |
| 154 | fn | loadStableInstanceID | (internal) | `static func loadStableInstanceID() -> String?` |
| 165 | fn | saveStableInstanceID | (internal) | `static func saveStableInstanceID(_ instanceId: ...` |
| 169 | fn | loadPreferredGatewayStableID | (internal) | `static func loadPreferredGatewayStableID() -> S...` |
| 175 | fn | savePreferredGatewayStableID | (internal) | `static func savePreferredGatewayStableID(_ stab...` |
| 183 | fn | clearPreferredGatewayStableID | (internal) | `static func clearPreferredGatewayStableID(defau...` |
| 190 | fn | loadLastDiscoveredGatewayStableID | (internal) | `static func loadLastDiscoveredGatewayStableID()...` |
| 196 | fn | saveLastDiscoveredGatewayStableID | (internal) | `static func saveLastDiscoveredGatewayStableID(_...` |
| 204 | fn | clearLastDiscoveredGatewayStableID | (internal) | `static func clearLastDiscoveredGatewayStableID(...` |
| 211 | fn | loadGatewayCredentialMetadata | (internal) | `static func loadGatewayCredentialMetadata(     ...` |
| 224 | fn | loadGatewayCredentials | (internal) | `static func loadGatewayCredentials(instanceId: ...` |
| 238 | fn | saveGatewayCredentials | (internal) | `@discardableResult   static func saveGatewayCre...` |
| 262 | fn | updateGatewayCredentials | (internal) | `@discardableResult   static func updateGatewayC...` |
| 282 | fn | discardUnscopedGatewayCredentials | (internal) | `static func discardUnscopedGatewayCredentials(i...` |
| 291 | fn | authenticationOwnerID | (internal) | `static func authenticationOwnerID(routeStableID...` |
| 298 | fn | loadGatewayCustomHeaders | (internal) | `static func loadGatewayCustomHeaders(gatewaySta...` |
| 301 | fn | loadGatewayCustomHeaders | (internal) | `static func loadGatewayCustomHeaders(     gatew...` |
| 325 | fn | saveGatewayCustomHeaders | (internal) | `@discardableResult   static func saveGatewayCus...` |
| 333 | fn | saveGatewayCustomHeaders | (internal) | `@discardableResult   static func saveGatewayCus...` |
| 360 | fn | clearGatewayCustomHeaders | (internal) | `@discardableResult   static func clearGatewayCu...` |
| 364 | fn | clearGatewayCustomHeaders | (internal) | `@discardableResult   static func clearGatewayCu...` |
| 371 | fn | clearGatewayCustomHeaders | (internal) | `@discardableResult   static func clearGatewayCu...` |
| 387 | fn | clearGatewayCustomHeaders | (internal) | `@discardableResult   static func clearGatewayCu...` |
| 392 | fn | customHeadersAccount | (private) | `private static func customHeadersAccount(stable...` |
| 396 | fn | legacyCustomHeadersAccount | (private) | `private static func legacyCustomHeadersAccount(...` |
| 400 | fn | migrateProvenRelayCredentials | (internal) | `@discardableResult   static func migrateProvenR...` |
| 450 | fn | saveLegacyGatewayTokenForMigrationTest | (internal) | `static func saveLegacyGatewayTokenForMigrationT...` |
| 465 | fn | loadTalkProviderApiKey | (internal) | `static func loadTalkProviderApiKey(provider: St...` |
| 476 | fn | loadGatewayRegistry | (internal) | `static func loadGatewayRegistry() -> GatewayReg...` |
| 487 | fn | upsertGatewayRegistryEntry | (internal) | `@discardableResult   static func upsertGatewayR...` |
| 492 | fn | upsertGatewayRegistryEntry | (internal) | `@discardableResult   static func upsertGatewayR...` |
| 513 | fn | setActiveGateway | (internal) | `@discardableResult   static func setActiveGatew...` |
| 524 | fn | markGatewayConnected | (internal) | `@discardableResult   static func markGatewayCon...` |
| 535 | fn | removeGatewayRegistryEntry | (internal) | `@discardableResult   static func removeGatewayR...` |
| 546 | fn | activeGatewayEntry | (internal) | `static func activeGatewayEntry() -> GatewayRegi...` |
| 554 | fn | clearLegacyGatewaySelectors | (internal) | `static func clearLegacyGatewaySelectors(stableI...` |
| 572 | fn | clearGatewayRegistry | (internal) | `static func clearGatewayRegistry(defaults: User...` |
| 578 | fn | saveGatewayRegistry | (private) | `private static func saveGatewayRegistry(_ regis...` |
| 591 | fn | normalizedGatewayRegistry | (private) | `private static func normalizedGatewayRegistry(_...` |
| 611 | fn | normalizedGatewayRegistryEntry | (private) | `private static func normalizedGatewayRegistryEn...` |
| 638 | fn | migrateGatewayRegistryIfNeeded | (private) | `private static func migrateGatewayRegistryIfNee...` |
| 653 | fn | loadLegacyLastGatewayConnection | (private) | `private static func loadLegacyLastGatewayConnec...` |
| 678 | fn | gatewayRegistryEntry | (private) | `private static func gatewayRegistryEntry(     f...` |
| 693 | fn | removeLastGatewayDefaults | (private) | `private static func removeLastGatewayDefaults(_...` |
| 701 | fn | deleteGatewayCredentials | (internal) | `static func deleteGatewayCredentials(instanceId...` |
| 710 | fn | deleteAllGatewayCredentials | (internal) | `static func deleteAllGatewayCredentials(instanc...` |
| 722 | fn | loadGatewayClientIdOverride | (internal) | `static func loadGatewayClientIdOverride(stableI...` |
| 740 | fn | saveGatewayClientIdOverride | (internal) | `static func saveGatewayClientIdOverride(stableI...` |
| 754 | fn | loadGatewaySelectedAgentId | (internal) | `static func loadGatewaySelectedAgentId(stableID...` |
| 772 | fn | saveGatewaySelectedAgentId | (internal) | `static func saveGatewaySelectedAgentId(stableID...` |
| 786 | fn | gatewayDefaultsKey | (private) | `private static func gatewayDefaultsKey(prefix: ...` |
| 790 | fn | gatewayTokenAccount | (private) | `private static func gatewayTokenAccount(instanc...` |
| 794 | fn | gatewayBootstrapTokenAccount | (private) | `private static func gatewayBootstrapTokenAccoun...` |
| 798 | fn | gatewayPasswordAccount | (private) | `private static func gatewayPasswordAccount(inst...` |
| 802 | fn | legacyGatewayCredentialBundleAccount | (private) | `private static func legacyGatewayCredentialBund...` |
| 806 | fn | gatewayCredentialBundleAccount | (private) | `private static func gatewayCredentialBundleAcco...` |
| 810 | fn | legacyScopedGatewayCredentialBundleAccount | (private) | `private static func legacyScopedGatewayCredenti...` |
| 817 | fn | loadGatewayCredentialBundle | (private) | `private static func loadGatewayCredentialBundle...` |
| 857 | fn | migrateGatewayCredentialBundleIfNeeded | (private) | `private static func migrateGatewayCredentialBun...` |
| 877 | fn | deleteLegacyScopedCredentialBundleIfOwned | (private) | `private static func deleteLegacyScopedCredentia...` |
| 892 | fn | canSafelyReadLegacyRawStorageKey | (private) | `private static func canSafelyReadLegacyRawStora...` |
| 898 | fn | normalizedCredential | (private) | `private static func normalizedCredential(_ valu...` |
| 903 | fn | deleteLegacyGatewayCredentials | (private) | `private static func deleteLegacyGatewayCredenti...` |
| 918 | fn | talkProviderApiKeyAccount | (private) | `private static func talkProviderApiKeyAccount(p...` |
| 922 | fn | normalizedTalkProviderID | (private) | `private static func normalizedTalkProviderID(_ ...` |
| 927 | fn | ensureStableInstanceID | (private) | `private static func ensureStableInstanceID()` |
| 950 | fn | ensurePreferredGatewayStableID | (private) | `private static func ensurePreferredGatewayStabl...` |
| 967 | fn | ensureLastDiscoveredGatewayStableID | (private) | `private static func ensureLastDiscoveredGateway...` |
| 986 | mod | extension GatewaySettingsStore | (internal) | - |
| 987 | fn | completeGatewayCredentialHandoff | (internal) | `@discardableResult   static func completeGatewa...` |
| 1044 | fn | persistGatewayCredentials | (private) | `private static func persistGatewayCredentials( ...` |
| 1084 | fn | saveGatewayCredentialBundle | (private) | `private static func saveGatewayCredentialBundle...` |
| 1105 | enum | GatewayDiagnostics | (internal) | `enum GatewayDiagnostics` |
| 1108 | method | init | (private) | `fileprivate init(prefix: String)` |
| 1112 | fn | stage | (internal) | `func stage(_ message: String)` |
| 1116 | fn | skipped | (internal) | `func skipped(_ reason: String)` |
| 1120 | fn | failed | (internal) | `func failed(_ stage: String, error: Error)` |
| 1141 | fn | sanitizeScopedMessage | (private) | `private static func sanitizeScopedMessage(_ val...` |
| 1154 | fn | isoTimestamp | (private) | `private static func isoTimestamp() -> String` |
| 1165 | fn | truncateLogIfNeeded | (private) | `private static func truncateLogIfNeeded(url: URL)` |
| 1196 | fn | appendToLog | (private) | `private static func appendToLog(url: URL, data:...` |
| 1208 | fn | applyFileProtection | (private) | `private static func applyFileProtection(url: URL)` |
| 1214 | fn | bootstrap | (internal) | `static func bootstrap()` |
| 1227 | fn | log | (internal) | `static func log(_ message: String)` |
