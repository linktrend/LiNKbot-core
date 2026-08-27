# src/commands/doctor/shared/legacy-config-migrations.runtime.agents.ts

[← Back to Module](../modules/src-commands-doctor-shared/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1564
- **Language:** TypeScript
- **Symbols:** 53
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 42 | type | LegacyAgentRuntimeIntent | (private) | - |
| 114 | fn | hasLegacyMemorySearchFlatKeys | (private) | `function hasLegacyMemorySearchFlatKeys(value: u...` |
| 124 | fn | hasAgentListLegacyMemorySearchFlatKeys | (private) | `function hasAgentListLegacyMemorySearchFlatKeys...` |
| 302 | fn | sandboxScopeFromPerSession | (private) | `function sandboxScopeFromPerSession(perSession:...` |
| 306 | fn | splitLegacyHeartbeat | (private) | `function splitLegacyHeartbeat(legacyHeartbeat: ...` |
| 334 | fn | mergeLegacyIntoDefaults | (private) | `function mergeLegacyIntoDefaults(params: {` |
| 360 | fn | hasLegacySandboxPerSession | (private) | `function hasLegacySandboxPerSession(value: unkn...` |
| 365 | fn | hasLegacyAgentListSandboxPerSession | (private) | `function hasLegacyAgentListSandboxPerSession(va...` |
| 372 | fn | hasLegacyAgentListEmbeddedHarness | (private) | `function hasLegacyAgentListEmbeddedHarness(valu...` |
| 379 | fn | hasLegacyAgentListEmbeddedAgentKey | (private) | `function hasLegacyAgentListEmbeddedAgentKey(val...` |
| 386 | fn | hasAgentListRuntimePolicy | (private) | `function hasAgentListRuntimePolicy(value: unkno...` |
| 393 | fn | hasAgentListSystemPromptOverride | (private) | `function hasAgentListSystemPromptOverride(value...` |
| 400 | fn | hasOwnTimeoutMs | (private) | `function hasOwnTimeoutMs(value: unknown): boole...` |
| 405 | fn | hasAgentListModelTimeout | (private) | `function hasAgentListModelTimeout(value: unknow...` |
| 418 | fn | migrateLegacyEmbeddedAgentKey | (private) | `function migrateLegacyEmbeddedAgentKey(` |
| 442 | fn | isLegacyMemorySearchAutoProvider | (private) | `function isLegacyMemorySearchAutoProvider(value...` |
| 446 | fn | hasAgentListLegacyMemorySearchAutoProvider | (private) | `function hasAgentListLegacyMemorySearchAutoProv...` |
| 455 | fn | hasMemorySearchStorePath | (private) | `function hasMemorySearchStorePath(value: unknow...` |
| 459 | fn | hasAgentListMemorySearchStorePath | (private) | `function hasAgentListMemorySearchStorePath(valu...` |
| 466 | fn | migrateLegacyMemorySearchFlatKeys | (private) | `function migrateLegacyMemorySearchFlatKeys(` |
| 500 | fn | removeLegacyMemorySearchStorePath | (private) | `function removeLegacyMemorySearchStorePath(` |
| 513 | fn | rewriteLegacyMemorySearchAutoProvider | (private) | `function rewriteLegacyMemorySearchAutoProvider(` |
| 525 | fn | migrateLegacySandboxPerSession | (private) | `function migrateLegacySandboxPerSession(` |
| 546 | fn | removeLegacyAgentRuntimePolicy | (private) | `function removeLegacyAgentRuntimePolicy(` |
| 562 | fn | resolveLegacyAgentRuntimeIntent | (private) | `function resolveLegacyAgentRuntimeIntent(raw: u...` |
| 577 | fn | selectedCanonicalModelRefsForRuntimePolicy | (private) | `function selectedCanonicalModelRefsForRuntimePo...` |
| 579 | fn | addRef | (private) | `const addRef = (rawRef: unknown) => {` |
| 611 | fn | modelEntryWithRuntimePolicy | (private) | `function modelEntryWithRuntimePolicy(` |
| 632 | fn | preserveLegacyWholeAgentRuntimePolicy | (private) | `function preserveLegacyWholeAgentRuntimePolicy(` |
| 666 | fn | removeIgnoredAgentModelTimeout | (private) | `function removeIgnoredAgentModelTimeout(` |
| 679 | fn | hasOwnRecordProperty | (private) | `function hasOwnRecordProperty(value: unknown, k...` |
| 684 | fn | hasSurfaceSilentReplyRewrite | (private) | `function hasSurfaceSilentReplyRewrite(value: un...` |
| 695 | fn | hasSurfaceSilentReplyDirect | (private) | `function hasSurfaceSilentReplyDirect(value: unk...` |
| 705 | fn | removeLegacySilentReplyConfig | (private) | `function removeLegacySilentReplyConfig(raw: Rec...` |
| 743 | fn | removeLegacySystemPromptOverride | (private) | `function removeLegacySystemPromptOverride(raw: ...` |
| 769 | fn | readToolPolicyGrantList | (private) | `function readToolPolicyGrantList(value: unknown...` |
| 773 | fn | readOwnToolPolicyGrantList | (private) | `function readOwnToolPolicyGrantList(` |
| 783 | fn | resolveToolProfileForMigration | (private) | `function resolveToolProfileForMigration(` |
| 790 | fn | collectProfileConfiguredSectionRepairGrants | (private) | `function collectProfileConfiguredSectionRepairG...` |
| 828 | fn | toolProfileConfiguredSectionsNeedExplicitRepair | (private) | `function toolProfileConfiguredSectionsNeedExpli...` |
| 856 | fn | collectConfiguredToolSectionGrants | (private) | `function collectConfiguredToolSectionGrants(too...` |
| 866 | fn | collectEffectiveConfiguredToolSectionGrants | (private) | `function collectEffectiveConfiguredToolSectionG...` |
| 879 | fn | toolProfileAllowRequiresFull | (private) | `function toolProfileAllowRequiresFull(params: {` |
| 888 | fn | resolveProfileBoundAllowGrants | (private) | `function resolveProfileBoundAllowGrants(params: {` |
| 917 | fn | scopeToolProfileConfiguredSectionsNeedMigration | (private) | `function scopeToolProfileConfiguredSectionsNeed...` |
| 926 | fn | byProviderToolProfilesNeedConfiguredSectionMigration | (private) | `function byProviderToolProfilesNeedConfiguredSe...` |
| 980 | fn | addProfileConfiguredSectionGrants | (private) | `function addProfileConfiguredSectionGrants(` |
| 1028 | fn | addByProviderProfileConfiguredSectionGrants | (private) | `function addByProviderProfileConfiguredSectionG...` |
| 1103 | fn | addHandledProviderPolicyKey | (private) | `function addHandledProviderPolicyKey(handledPro...` |
| 1107 | fn | buildInheritedProviderPolicyLookup | (private) | `function buildInheritedProviderPolicyLookup(` |
| 1146 | fn | resolveInheritedProviderPolicy | (private) | `function resolveInheritedProviderPolicy(` |
| 1163 | fn | listInheritedProviderPoliciesWithProfiles | (private) | `function listInheritedProviderPoliciesWithProfi...` |
| 1191 | fn | addProfileConfiguredSectionGrantsWithConfiguredGrants | (private) | `function addProfileConfiguredSectionGrantsWithC...` |
