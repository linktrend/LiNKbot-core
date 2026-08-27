# src/channels/plugins/setup-wizard-helpers.ts

[← Back to Module](../modules/src-channels-plugins/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1592
- **Language:** TypeScript
- **Symbols:** 63
- **Public symbols:** 49

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 36 | fn | asRecord | (private) | `function asRecord(value: unknown): Record<strin...` |
| 42 | fn | asAllowFromList | (private) | `function asAllowFromList(value: unknown): Reado...` |
| 83 | fn | addWildcardAllowFrom | pub | `export function addWildcardAllowFrom(allowFrom?...` |
| 91 | fn | mergeAllowFromEntries | pub | `export function mergeAllowFromEntries(` |
| 99 | fn | splitSetupEntries | pub | `export function splitSetupEntries(raw: string):...` |
| 103 | type | ParsedSetupEntry | (private) | - |
| 105 | fn | parseSetupEntriesWithParser | pub | `export function parseSetupEntriesWithParser(` |
| 121 | fn | parseSetupEntriesAllowingWildcard | pub | `export function parseSetupEntriesAllowingWildcard(` |
| 133 | fn | parseMentionOrPrefixedId | pub | `export function parseMentionOrPrefixedId(params: {` |
| 158 | fn | normalizeAllowFromEntries | pub | `export function normalizeAllowFromEntries(` |
| 176 | fn | createStandardChannelSetupStatus | pub | `export function createStandardChannelSetupStatu...` |
| 222 | fn | resolveSetupAccountId | pub | `export function resolveSetupAccountId(params: {` |
| 229 | fn | resolveAccountIdForConfigure | pub | `export async function resolveAccountIdForConfig...` |
| 253 | fn | setAccountAllowFromForChannel | pub | `export function setAccountAllowFromForChannel(p...` |
| 269 | fn | patchTopLevelChannelConfigSection | pub | `export function patchTopLevelChannelConfigSecti...` |
| 295 | fn | patchNestedChannelConfigSection | pub | `export function patchNestedChannelConfigSection...` |
| 328 | fn | setTopLevelChannelAllowFrom | pub | `export function setTopLevelChannelAllowFrom(par...` |
| 342 | fn | setNestedChannelAllowFrom | pub | `export function setNestedChannelAllowFrom(param...` |
| 358 | fn | setTopLevelChannelDmPolicyWithAllowFrom | pub | `export function setTopLevelChannelDmPolicyWithA...` |
| 382 | fn | setNestedChannelDmPolicyWithAllowFrom | pub | `export function setNestedChannelDmPolicyWithAll...` |
| 412 | fn | setTopLevelChannelGroupPolicy | pub | `export function setTopLevelChannelGroupPolicy(p...` |
| 426 | fn | createTopLevelChannelDmPolicy | pub | `export function createTopLevelChannelDmPolicy(p...` |
| 450 | fn | createNestedChannelDmPolicy | pub | `export function createNestedChannelDmPolicy(par...` |
| 478 | fn | createTopLevelChannelDmPolicySetter | pub | `export function createTopLevelChannelDmPolicySe...` |
| 491 | fn | createNestedChannelDmPolicySetter | pub | `export function createNestedChannelDmPolicySett...` |
| 508 | fn | createTopLevelChannelAllowFromSetter | pub | `export function createTopLevelChannelAllowFromS...` |
| 521 | fn | createNestedChannelAllowFromSetter | pub | `export function createNestedChannelAllowFromSet...` |
| 536 | fn | createTopLevelChannelGroupPolicySetter | pub | `export function createTopLevelChannelGroupPolic...` |
| 549 | fn | setChannelDmPolicyWithAllowFrom | pub | `export function setChannelDmPolicyWithAllowFrom...` |
| 573 | fn | setCompatChannelDmPolicyWithAllowFrom | (private) | `function setCompatChannelDmPolicyWithAllowFrom(...` |
| 602 | fn | setCompatChannelAllowFrom | (private) | `function setCompatChannelAllowFrom(params: {` |
| 614 | fn | setAccountGroupPolicyForChannel | pub | `export function setAccountGroupPolicyForChannel...` |
| 628 | fn | setAccountDmAllowFromForChannel | pub | `export function setAccountDmAllowFromForChannel...` |
| 642 | fn | createCompatChannelDmPolicy | (private) | `function createCompatChannelDmPolicy(params: {` |
| 718 | fn | resolveGroupAllowlistWithLookupNotes | pub | `export async function resolveGroupAllowlistWith...` |
| 743 | fn | createAccountScopedAllowFromSection | pub | `export function createAccountScopedAllowFromSec...` |
| 773 | fn | createAccountScopedGroupAccessSection | pub | `export function createAccountScopedGroupAccessS...` |
| 837 | type | AccountScopedChannel | (private) | - |
| 838 | type | CompatDmChannel | (private) | - |
| 840 | fn | patchCompatDmChannelConfig | (private) | `function patchCompatDmChannelConfig(params: {` |
| 864 | fn | setSetupChannelEnabled | pub | `export function setSetupChannelEnabled(` |
| 882 | fn | patchConfigForScopedAccount | (private) | `function patchConfigForScopedAccount(params: {` |
| 913 | fn | patchChannelConfigForAccount | pub | `export function patchChannelConfigForAccount(pa...` |
| 925 | fn | buildSingleChannelSecretPromptState | pub | `export function buildSingleChannelSecretPromptS...` |
| 942 | fn | promptSingleChannelToken | (private) | `async function promptSingleChannelToken(params: {` |
| 986 | type | SingleChannelSecretInputPromptResult | (private) | - |
| 991 | fn | runSingleChannelSecretStep | pub | `export async function runSingleChannelSecretSte...` |
| 1067 | fn | promptSingleChannelSecretInput | pub | `export async function promptSingleChannelSecret...` |
| 1144 | type | ParsedAllowFromResult | (private) | - |
| 1146 | fn | promptParsedAllowFromForAccount | pub | `export async function promptParsedAllowFromForA...` |
| 1200 | fn | createPromptParsedAllowFromForAccount | pub | `export function createPromptParsedAllowFromForA...` |
| 1235 | fn | promptParsedAllowFromForScopedChannel | pub | `export async function promptParsedAllowFromForS...` |
| 1272 | fn | createTopLevelChannelParsedAllowFromPrompt | pub | `export function createTopLevelChannelParsedAllo...` |
| 1318 | fn | createNestedChannelParsedAllowFromPrompt | pub | `export function createNestedChannelParsedAllowF...` |
| 1369 | fn | resolveParsedAllowFromEntries | pub | `export function resolveParsedAllowFromEntries(p...` |
| 1383 | fn | createAllowFromSection | pub | `export function createAllowFromSection(params: {` |
| 1411 | fn | noteChannelLookupSummary | pub | `export async function noteChannelLookupSummary(...` |
| 1432 | fn | noteChannelLookupFailure | pub | `export async function noteChannelLookupFailure(...` |
| 1443 | type | AllowFromResolution | (private) | - |
| 1449 | fn | resolveEntriesWithOptionalToken | pub | `export async function resolveEntriesWithOptiona...` |
| 1465 | fn | promptResolvedAllowFrom | pub | `export async function promptResolvedAllowFrom(p...` |
| 1517 | fn | promptLegacyChannelAllowFrom | pub | `export async function promptLegacyChannelAllowF...` |
| 1551 | fn | promptLegacyChannelAllowFromForAccount | pub | `export async function promptLegacyChannelAllowF...` |

## Public API

### `addWildcardAllowFrom`

```
export function addWildcardAllowFrom(allowFrom?: ReadonlyArray<string | number> | null): string[] {
```

**Line:** 83 | **Kind:** fn

### `mergeAllowFromEntries`

```
export function mergeAllowFromEntries(
```

**Line:** 91 | **Kind:** fn

### `splitSetupEntries`

```
export function splitSetupEntries(raw: string): string[] {
```

**Line:** 99 | **Kind:** fn

### `parseSetupEntriesWithParser`

```
export function parseSetupEntriesWithParser(
```

**Line:** 105 | **Kind:** fn

### `parseSetupEntriesAllowingWildcard`

```
export function parseSetupEntriesAllowingWildcard(
```

**Line:** 121 | **Kind:** fn

### `parseMentionOrPrefixedId`

```
export function parseMentionOrPrefixedId(params: {
```

**Line:** 133 | **Kind:** fn

### `normalizeAllowFromEntries`

```
export function normalizeAllowFromEntries(
```

**Line:** 158 | **Kind:** fn

### `createStandardChannelSetupStatus`

```
export function createStandardChannelSetupStatus(params: {
```

**Line:** 176 | **Kind:** fn

### `resolveSetupAccountId`

```
export function resolveSetupAccountId(params: {
```

**Line:** 222 | **Kind:** fn

### `resolveAccountIdForConfigure`

```
export async function resolveAccountIdForConfigure(params: {
```

**Line:** 229 | **Kind:** fn

### `setAccountAllowFromForChannel`

```
export function setAccountAllowFromForChannel(params: {
```

**Line:** 253 | **Kind:** fn

### `patchTopLevelChannelConfigSection`

```
export function patchTopLevelChannelConfigSection(params: {
```

**Line:** 269 | **Kind:** fn

### `patchNestedChannelConfigSection`

```
export function patchNestedChannelConfigSection(params: {
```

**Line:** 295 | **Kind:** fn

### `setTopLevelChannelAllowFrom`

```
export function setTopLevelChannelAllowFrom(params: {
```

**Line:** 328 | **Kind:** fn

### `setNestedChannelAllowFrom`

```
export function setNestedChannelAllowFrom(params: {
```

**Line:** 342 | **Kind:** fn

### `setTopLevelChannelDmPolicyWithAllowFrom`

```
export function setTopLevelChannelDmPolicyWithAllowFrom(params: {
```

**Line:** 358 | **Kind:** fn

### `setNestedChannelDmPolicyWithAllowFrom`

```
export function setNestedChannelDmPolicyWithAllowFrom(params: {
```

**Line:** 382 | **Kind:** fn

### `setTopLevelChannelGroupPolicy`

```
export function setTopLevelChannelGroupPolicy(params: {
```

**Line:** 412 | **Kind:** fn

### `createTopLevelChannelDmPolicy`

```
export function createTopLevelChannelDmPolicy(params: {
```

**Line:** 426 | **Kind:** fn

### `createNestedChannelDmPolicy`

```
export function createNestedChannelDmPolicy(params: {
```

**Line:** 450 | **Kind:** fn

### `createTopLevelChannelDmPolicySetter`

```
export function createTopLevelChannelDmPolicySetter(params: {
```

**Line:** 478 | **Kind:** fn

### `createNestedChannelDmPolicySetter`

```
export function createNestedChannelDmPolicySetter(params: {
```

**Line:** 491 | **Kind:** fn

### `createTopLevelChannelAllowFromSetter`

```
export function createTopLevelChannelAllowFromSetter(params: {
```

**Line:** 508 | **Kind:** fn

### `createNestedChannelAllowFromSetter`

```
export function createNestedChannelAllowFromSetter(params: {
```

**Line:** 521 | **Kind:** fn

### `createTopLevelChannelGroupPolicySetter`

```
export function createTopLevelChannelGroupPolicySetter(params: {
```

**Line:** 536 | **Kind:** fn

### `setChannelDmPolicyWithAllowFrom`

```
export function setChannelDmPolicyWithAllowFrom(params: {
```

**Line:** 549 | **Kind:** fn

### `setAccountGroupPolicyForChannel`

```
export function setAccountGroupPolicyForChannel(params: {
```

**Line:** 614 | **Kind:** fn

### `setAccountDmAllowFromForChannel`

```
export function setAccountDmAllowFromForChannel(params: {
```

**Line:** 628 | **Kind:** fn

### `resolveGroupAllowlistWithLookupNotes`

```
export async function resolveGroupAllowlistWithLookupNotes<TResolved>(params: {
```

**Line:** 718 | **Kind:** fn

### `createAccountScopedAllowFromSection`

```
export function createAccountScopedAllowFromSection(params: {
```

**Line:** 743 | **Kind:** fn

### `createAccountScopedGroupAccessSection`

```
export function createAccountScopedGroupAccessSection<TResolved>(params: {
```

**Line:** 773 | **Kind:** fn

### `setSetupChannelEnabled`

```
export function setSetupChannelEnabled(
```

**Line:** 864 | **Kind:** fn

### `patchChannelConfigForAccount`

```
export function patchChannelConfigForAccount(params: {
```

**Line:** 913 | **Kind:** fn

### `buildSingleChannelSecretPromptState`

```
export function buildSingleChannelSecretPromptState(params: {
```

**Line:** 925 | **Kind:** fn

### `runSingleChannelSecretStep`

```
export async function runSingleChannelSecretStep(params: {
```

**Line:** 991 | **Kind:** fn

### `promptSingleChannelSecretInput`

```
export async function promptSingleChannelSecretInput(params: {
```

**Line:** 1067 | **Kind:** fn

### `promptParsedAllowFromForAccount`

```
export async function promptParsedAllowFromForAccount<TConfig extends OpenClawConfig>(params: {
```

**Line:** 1146 | **Kind:** fn

### `createPromptParsedAllowFromForAccount`

```
export function createPromptParsedAllowFromForAccount<TConfig extends OpenClawConfig>(params: {
```

**Line:** 1200 | **Kind:** fn

### `promptParsedAllowFromForScopedChannel`

```
export async function promptParsedAllowFromForScopedChannel(params: {
```

**Line:** 1235 | **Kind:** fn

### `createTopLevelChannelParsedAllowFromPrompt`

```
export function createTopLevelChannelParsedAllowFromPrompt(params: {
```

**Line:** 1272 | **Kind:** fn

### `createNestedChannelParsedAllowFromPrompt`

```
export function createNestedChannelParsedAllowFromPrompt(params: {
```

**Line:** 1318 | **Kind:** fn

### `resolveParsedAllowFromEntries`

```
export function resolveParsedAllowFromEntries(params: {
```

**Line:** 1369 | **Kind:** fn

### `createAllowFromSection`

```
export function createAllowFromSection(params: {
```

**Line:** 1383 | **Kind:** fn

### `noteChannelLookupSummary`

```
export async function noteChannelLookupSummary(params: {
```

**Line:** 1411 | **Kind:** fn

### `noteChannelLookupFailure`

```
export async function noteChannelLookupFailure(params: {
```

**Line:** 1432 | **Kind:** fn

### `resolveEntriesWithOptionalToken`

```
export async function resolveEntriesWithOptionalToken<TResult>(params: {
```

**Line:** 1449 | **Kind:** fn

### `promptResolvedAllowFrom`

```
export async function promptResolvedAllowFrom(params: {
```

**Line:** 1465 | **Kind:** fn

### `promptLegacyChannelAllowFrom`

```
export async function promptLegacyChannelAllowFrom(params: {
```

**Line:** 1517 | **Kind:** fn

### `promptLegacyChannelAllowFromForAccount`

```
export async function promptLegacyChannelAllowFromForAccount<TAccount>(params: {
```

**Line:** 1551 | **Kind:** fn
