# src/commands/doctor-auth-flat-profiles.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1762
- **Language:** TypeScript
- **Symbols:** 67
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 40 | type | AuthProfileRepairCandidate | (private) | - |
| 45 | type | LegacyFlatAuthProfileStore | (private) | - |
| 51 | type | AuthProfileSqliteMigrationCandidate | (private) | - |
| 56 | type | AwsSdkProfileMarker | (private) | - |
| 63 | type | AwsSdkAuthProfileMarkerStore | (private) | - |
| 70 | type | RawAuthProfileImportStore | (private) | - |
| 76 | type | LegacyFlatAuthProfileRepairResult | (private) | - |
| 85 | fn | readNonEmptyString | (private) | `function readNonEmptyString(value: unknown): st...` |
| 89 | fn | isSafeLegacyProviderKey | (private) | `function isSafeLegacyProviderKey(key: string): ...` |
| 93 | fn | extractProviderFromProfileId | (private) | `function extractProviderFromProfileId(profileId...` |
| 101 | fn | extractProviderFromModelRef | (private) | `function extractProviderFromModelRef(modelRef: ...` |
| 110 | fn | collectLegacyConfigAuthProfileProviderHints | (private) | `function collectLegacyConfigAuthProfileProvider...` |
| 181 | fn | inferLegacyCredentialType | (private) | `function inferLegacyCredentialType(` |
| 204 | fn | coerceLegacyFlatCredential | (private) | `function coerceLegacyFlatCredential(` |
| 257 | fn | coerceLegacyFlatAuthProfileStore | (private) | `function coerceLegacyFlatAuthProfileStore(raw: ...` |
| 279 | fn | addCandidate | (private) | `function addCandidate(` |
| 287 | fn | listExistingAgentDirsFromState | (private) | `function listExistingAgentDirsFromState(env: No...` |
| 307 | fn | listAuthProfileRepairCandidates | (private) | `function listAuthProfileRepairCandidates(` |
| 327 | fn | listAuthProfileSqliteMigrationCandidates | (private) | `function listAuthProfileSqliteMigrationCandidates(` |
| 343 | fn | hasAuthProfileState | (private) | `function hasAuthProfileState(state: AuthProfile...` |
| 347 | fn | normalizeLegacyApiKeyAliasesForImport | (private) | `function normalizeLegacyApiKeyAliasesForImport(...` |
| 368 | fn | collectAuthProfileStateProfileIds | (private) | `function collectAuthProfileStateProfileIds(stat...` |
| 384 | fn | inferLegacyConfigAuthProfileMode | (private) | `function inferLegacyConfigAuthProfileMode(` |
| 419 | fn | coerceLegacyConfigAuthProfileStore | (private) | `function coerceLegacyConfigAuthProfileStore(cfg...` |
| 490 | fn | isDefaultAgentCandidate | (private) | `function isDefaultAgentCandidate(` |
| 498 | fn | stripImportedConfigAuthProfileCredentials | (private) | `function stripImportedConfigAuthProfileCredenti...` |
| 521 | fn | hasUsableAuthProfileCredential | (private) | `function hasUsableAuthProfileCredential(credent...` |
| 535 | fn | mergeImportedAuthProfiles | (private) | `function mergeImportedAuthProfiles(params: {` |
| 560 | fn | mergeImportedAuthProfileState | (private) | `function mergeImportedAuthProfileState(params: {` |
| 607 | fn | formatMissingAuthProfileSqliteVerification | (private) | `function formatMissingAuthProfileSqliteVerifica...` |
| 647 | fn | filterRawAuthProfileState | (private) | `function filterRawAuthProfileState(` |
| 692 | fn | pruneRawAuthProfileIds | (private) | `function pruneRawAuthProfileIds(raw: unknown, p...` |
| 702 | fn | pickRawAuthProfileIds | (private) | `function pickRawAuthProfileIds(` |
| 721 | fn | collectUnresolvedLegacyOAuthSidecarProfileIds | (private) | `function collectUnresolvedLegacyOAuthSidecarPro...` |
| 741 | fn | hasImportableAuthProfileStore | (private) | `function hasImportableAuthProfileStore(store: A...` |
| 745 | fn | hasLegacyAuthProfileSource | (private) | `function hasLegacyAuthProfileSource(candidate: ...` |
| 753 | fn | backupAuthProfileJson | (private) | `function backupAuthProfileJson(pathname: string...` |
| 759 | fn | backupAndRemoveAuthProfileJson | (private) | `function backupAndRemoveAuthProfileJson(` |
| 769 | fn | writeJsonFile | (private) | `function writeJsonFile(pathname: string, value:...` |
| 779 | fn | maybeMigrateAuthProfileJsonStoresToSqlite | pub | `export async function maybeMigrateAuthProfileJs...` |
| 1043 | fn | resolveLegacyFlatStore | (private) | `function resolveLegacyFlatStore(` |
| 1063 | fn | backupAuthProfileStore | (private) | `function backupAuthProfileStore(authPath: strin...` |
| 1069 | fn | backupAwsSdkProfileMarkerStore | (private) | `function backupAwsSdkProfileMarkerStore(authPat...` |
| 1075 | fn | resolveAwsSdkAuthProfileMarkerStore | (private) | `function resolveAwsSdkAuthProfileMarkerStore(` |
| 1116 | fn | ensureConfigAuthProfiles | (private) | `function ensureConfigAuthProfiles(config: OpenC...` |
| 1128 | fn | removeAwsSdkProfileMarkers | (private) | `function removeAwsSdkProfileMarkers(raw: Record...` |
| 1143 | fn | maybeRepairLegacyFlatAuthProfileStores | pub | `export async function maybeRepairLegacyFlatAuth...` |
| 1247 | type | CanonicalApiKeyAliasRepair | (private) | - |
| 1253 | fn | resolveCanonicalApiKeyAliasRepair | (private) | `function resolveCanonicalApiKeyAliasRepair(` |
| 1282 | fn | backupCanonicalApiKeyAlias | (private) | `function backupCanonicalApiKeyAlias(authPath: s...` |
| 1294 | fn | maybeRepairCanonicalApiKeyFieldAlias | pub | `export async function maybeRepairCanonicalApiKe...` |
| 1367 | fn | isLegacyOpenAICodexProvider | (private) | `function isLegacyOpenAICodexProvider(value: unk...` |
| 1373 | fn | isLegacyOpenAICodexProfileId | (private) | `function isLegacyOpenAICodexProfileId(profileId...` |
| 1377 | fn | canonicalOpenAIProfileSuffix | (private) | `function canonicalOpenAIProfileSuffix(profileId...` |
| 1381 | fn | allocateOpenAIProfileId | (private) | `function allocateOpenAIProfileId(legacyProfileI...` |
| 1402 | fn | canonicalizeOpenAIProfileEntries | (private) | `function canonicalizeOpenAIProfileEntries(` |
| 1447 | fn | replaceMappedProfileId | (private) | `function replaceMappedProfileId(value: unknown,...` |
| 1476 | fn | rewriteMappedAuthProfileRefs | (private) | `function rewriteMappedAuthProfileRefs(` |
| 1505 | fn | canonicalizeOpenAIAuthOrder | (private) | `function canonicalizeOpenAIAuthOrder(` |
| 1562 | fn | renameMappedProfileIdKeys | (private) | `function renameMappedProfileIdKeys(` |
| 1579 | fn | canonicalizeOpenAILastGood | (private) | `function canonicalizeOpenAILastGood(` |
| 1609 | fn | maybeRepairOpenAICodexAuthConfig | pub | `export function maybeRepairOpenAICodexAuthConfig(` |
| 1646 | type | OpenAICodexAuthStoreRepair | (private) | - |
| 1653 | fn | resolveOpenAICodexAuthStoreRepair | (private) | `function resolveOpenAICodexAuthStoreRepair(` |
| 1687 | fn | collectOpenAICodexAuthProfileStoreIdMap | pub | `export function collectOpenAICodexAuthProfileSt...` |
| 1717 | fn | backupOpenAIProviderUnification | (private) | `function backupOpenAIProviderUnification(authPa...` |
| 1726 | fn | maybeRepairOpenAICodexAuthProfileStores | pub | `export async function maybeRepairOpenAICodexAut...` |

## Public API

### `maybeMigrateAuthProfileJsonStoresToSqlite`

```
export async function maybeMigrateAuthProfileJsonStoresToSqlite(params: {
```

**Line:** 779 | **Kind:** fn

### `maybeRepairLegacyFlatAuthProfileStores`

```
export async function maybeRepairLegacyFlatAuthProfileStores(params: {
```

**Line:** 1143 | **Kind:** fn

### `maybeRepairCanonicalApiKeyFieldAlias`

```
export async function maybeRepairCanonicalApiKeyFieldAlias(params: {
```

**Line:** 1294 | **Kind:** fn

### `maybeRepairOpenAICodexAuthConfig`

```
export function maybeRepairOpenAICodexAuthConfig(
```

**Line:** 1609 | **Kind:** fn

### `collectOpenAICodexAuthProfileStoreIdMap`

```
export function collectOpenAICodexAuthProfileStoreIdMap(params: {
```

**Line:** 1687 | **Kind:** fn

### `maybeRepairOpenAICodexAuthProfileStores`

```
export async function maybeRepairOpenAICodexAuthProfileStores(params: {
```

**Line:** 1726 | **Kind:** fn
