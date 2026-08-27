# apps/macos/Sources/OpenClaw/ExecApprovalsStore.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1137
- **Language:** Swift
- **Symbols:** 57
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 6 | enum | ExecApprovalsStore | (internal) | `enum ExecApprovalsStore` |
| 29 | fn | fileURL | (internal) | `static func fileURL() -> URL` |
| 33 | fn | socketPath | (internal) | `static func socketPath() -> String` |
| 37 | fn | trustedRootURL | (private) | `private static func trustedRootURL() -> URL` |
| 46 | fn | stateDirURL | (private) | `private static func stateDirURL() -> URL` |
| 63 | fn | failClosedFallbackFile | (private) | `private static func failClosedFallbackFile() ->...` |
| 75 | fn | normalizeIncoming | (internal) | `static func normalizeIncoming(_ file: ExecAppro...` |
| 108 | fn | readSnapshot | (internal) | `static func readSnapshot() -> ExecApprovalsSnap...` |
| 123 | fn | readSnapshotUnlocked | (private) | `private static func readSnapshotUnlocked() thro...` |
| 142 | fn | loadFile | (internal) | `static func loadFile() -> ExecApprovalsFile` |
| 153 | fn | loadFileUnlocked | (private) | `private static func loadFileUnlocked() -> ExecA...` |
| 165 | fn | loadFileForMutationUnlocked | (private) | `private static func loadFileForMutationUnlocked...` |
| 172 | fn | decodeCurrentFile | (private) | `private static func decodeCurrentFile(_ data: D...` |
| 187 | fn | fileNeedsAllowlistRewrite | (private) | `private static func fileNeedsAllowlistRewrite(_...` |
| 204 | fn | hasValidPersistedStructure | (private) | `private static func hasValidPersistedStructure(...` |
| 234 | fn | hasValidAllowlistEntry | (private) | `private static func hasValidAllowlistEntry(_ va...` |
| 256 | fn | hasValidPolicyFields | (private) | `private static func hasValidPolicyFields(_ valu...` |
| 273 | fn | hasOptionalString | (private) | `private static func hasOptionalString(_ object:...` |
| 278 | fn | saveFileUnlocked | (private) | `private static func saveFileUnlocked(_ file: Ex...` |
| 290 | fn | ensureFile | (internal) | `static func ensureFile() -> ExecApprovalsFile` |
| 301 | fn | ensureFileUnlocked | (private) | `private static func ensureFileUnlocked() throws...` |
| 332 | fn | saveFile | (internal) | `static func saveFile(     _ incoming: ExecAppro...` |
| 378 | fn | resolve | (internal) | `static func resolve(agentId: String?) -> ExecAp...` |
| 387 | fn | resolveResult | (internal) | `static func resolveResult(     agentId: String?...` |
| 401 | fn | resolveAsyncResult | (internal) | `static func resolveAsyncResult(     agentId: St...` |
| 412 | fn | resolveReadOnly | (internal) | `static func resolveReadOnly(agentId: String?) -...` |
| 424 | fn | resolveDefaults | (internal) | `static func resolveDefaults(from file: ExecAppr...` |
| 433 | fn | resolveFromFile | (private) | `private static func resolveFromFile(_ file: Exe...` |
| 460 | fn | resolveDefaultsAsyncResult | (internal) | `static func resolveDefaultsAsyncResult() async ...` |
| 468 | mod | extension ExecApprovalsStore | (internal) | - |
| 469 | fn | updateDefaults | (internal) | `@discardableResult   static func updateDefaults...` |
| 479 | fn | addAllowlistEntry | (internal) | `@discardableResult   static func addAllowlistEn...` |
| 496 | fn | addAllowlistEntries | (internal) | `@discardableResult   static func addAllowlistEn...` |
| 543 | fn | commitExecution | (internal) | `@discardableResult   static func commitExecutio...` |
| 595 | fn | recordAllowlistUses | (internal) | `@discardableResult   static func recordAllowlis...` |
| 632 | fn | normalizeExecutionGrants | (private) | `private static func normalizeExecutionGrants(  ...` |
| 654 | fn | assertCurrentExecutionAuthorization | (private) | `private static func assertCurrentExecutionAutho...` |
| 731 | fn | executionAuthorizationChangedError | (private) | `private static func executionAuthorizationChang...` |
| 737 | fn | applyAllowlistGrantsUnlocked | (private) | `private static func applyAllowlistGrantsUnlocke...` |
| 769 | fn | applyAllowlistUsesUnlocked | (private) | `private static func applyAllowlistUsesUnlocked(...` |
| 808 | fn | updateAllowlistEntry | (internal) | `@discardableResult   static func updateAllowlis...` |
| 840 | fn | removeAllowlistEntry | (internal) | `@discardableResult   static func removeAllowlis...` |
| 863 | fn | updateAgentSettings | (internal) | `@discardableResult   static func updateAgentSet...` |
| 882 | fn | updateFile | (private) | `private static func updateFile(     _ mutate: (...` |
| 900 | fn | normalizeArgPattern | (private) | `private static func normalizeArgPattern(_ value...` |
| 905 | fn | allowlistEntryMatchKey | (internal) | `static func allowlistEntryMatchKey(_ entry: Exe...` |
| 911 | fn | ensureSecureStateDirectory | (private) | `private static func ensureSecureStateDirectory(...` |
| 928 | fn | generateToken | (private) | `private static func generateToken() -> String` |
| 941 | fn | hashRaw | (private) | `private static func hashRaw(_ raw: String?) -> ...` |
| 948 | fn | hashFile | (private) | `private static func hashFile(_ file: ExecApprov...` |
| 956 | fn | expandPath | (internal) | `static func expandPath(_ raw: String) -> String` |
| 972 | fn | agentKey | (private) | `private static func agentKey(_ agentId: String?...` |
| 977 | fn | normalizedPattern | (private) | `private static func normalizedPattern(_ pattern...` |
| 989 | fn | migrateLegacyPattern | (private) | `private static func migrateLegacyPattern(_ entr...` |
| 1046 | fn | normalizeAllowlistEntries | (private) | `private static func normalizeAllowlistEntries( ...` |
| 1101 | fn | mergeAgents | (private) | `private static func mergeAgents(     current: E...` |
| 1110 | fn | append | (internal) | `func append(_ entry: ExecAllowlistEntry)` |
