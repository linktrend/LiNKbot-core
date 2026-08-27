# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/phone-control/index.test.ts (1170 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | RegisteredNodeInvokePolicy | (private) |
| 24 | type | NodeInvokePolicyContext | (private) |
| 36 | fn | createApi | (private) |
| 97 | fn | createCommandContext | (private) |
| 113 | fn | createPhoneControlConfig | (private) |
| 124 | fn | createMockOpenKeyedStore | (private) |
| 154 | fn | createInMemoryArmStore | (private) |
| 201 | fn | createPolicyContext | (private) |
| 222 | fn | createDeferred | (private) |
| 230 | fn | withRegisteredPhoneControl | (private) |
| 867 | fn | armCtx | (private) |

## extensions/phone-control/index.ts (786 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | ArmGroup | (private) |
| 23 | type | ArmStateFileV1 | (private) |
| 30 | type | ArmStateFileV2 | (private) |
| 40 | type | ArmStateFileV3 | (private) |
| 53 | type | ArmStateFile | (private) |
| 54 | type | StoredArmState | (private) |
| 55 | type | PhoneControlConfigView | (private) |
| 80 | fn | uniqSorted | (private) |
| 84 | fn | resolveCommandsForGroup | (private) |
| 93 | fn | formatGroupList | (private) |
| 97 | fn | parseDurationMs | (private) |
| 106 | fn | formatDuration | (private) |
| 114 | fn | openArmStateStore | (private) |
| 122 | fn | readStoredArmState | (private) |
| 137 | fn | readArmState | (private) |
| 141 | fn | registerArmState | (private) |
| 145 | fn | activateArmState | (private) |
| 165 | fn | consumeArmState | (private) |
| 179 | fn | normalizeDenyList | (private) |
| 183 | fn | normalizeAllowList | (private) |
| 187 | fn | resolveEffectivePhoneControlAllows | (private) |
| 198 | fn | resolvePersistentEffectivePhoneControlAllows | (private) |
| 220 | fn | resolveArmStateCommands | (private) |
| 231 | fn | isArmStatePreparing | (private) |
| 235 | fn | isCommandEffectivelyAllowed | (private) |
| 241 | fn | formatPersistentAllows | (private) |
| 248 | fn | hasPhoneControlAllowOverride | (private) |
| 253 | fn | patchConfigNodeLists | (private) |
| 270 | fn | disarmNow | (private) |
| 358 | fn | formatHelp | (private) |
| 381 | fn | parseGroup | (private) |
| 398 | fn | lacksAdminToMutatePhoneControl | (private) |
| 409 | fn | resolveArmExpiryStatus | (private) |
| 424 | fn | isArmStateExpired | (private) |
| 436 | fn | formatStatus | (private) |
| 484 | fn | disarmLease | (private) |
| 505 | fn | logReconcileFailure | (private) |
| 512 | fn | tick | (private) |
