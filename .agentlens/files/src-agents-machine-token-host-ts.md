# src/agents/machine-token-host.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1020
- **Language:** TypeScript
- **Symbols:** 42
- **Public symbols:** 24

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 48 | type | HostMachineTokenBindingRecord | pub | - |
| 76 | type | MachineTokenResolveKeyPem | pub | - |
| 83 | type | MachineTokenPluginFacadeParams | pub | - |
| 106 | type | MachineTokenFacadeGenerationHandle | pub | - |
| 112 | type | MachineTokenFacadeGeneration | pub | - |
| 117 | type | MachineTokenFacadeGenerationState | (private) | - |
| 119 | type | MachineTokenFacadeGenerationRecord | (private) | - |
| 147 | fn | canonicalizeMachineTokenOwnershipTuple | (private) | `function canonicalizeMachineTokenOwnershipTuple(` |
| 179 | fn | compareMachineTokenCanonicalJson | pub | `export function compareMachineTokenCanonicalJso...` |
| 187 | fn | fingerprintMachineTokenGrantedRecords | pub | `export function fingerprintMachineTokenGrantedR...` |
| 208 | fn | liveMachineTokenOwnershipMatchesGrantedRecords | pub | `export function liveMachineTokenOwnershipMatche...` |
| 227 | fn | destroyCandidateMachineTokenFacadeGeneration | pub | `export function destroyCandidateMachineTokenFac...` |
| 245 | fn | allocateGenerationId | (private) | `function allocateGenerationId(pluginId: string)...` |
| 250 | fn | isLiveGeneration | (private) | `function isLiveGeneration(handle: MachineTokenF...` |
| 255 | fn | assertGrantedBinding | (private) | `function assertGrantedBinding(` |
| 266 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Rec...` |
| 270 | fn | readOptionalNonEmptyString | (private) | `function readOptionalNonEmptyString(value: unkn...` |
| 278 | fn | readOptionalStringList | (private) | `function readOptionalStringList(value: unknown)...` |
| 289 | fn | normalizeKeyRef | (private) | `function normalizeKeyRef(ref: SecretRef): Machi...` |
| 300 | fn | buildHostMachineTokenBindingFingerprint | pub | `export function buildHostMachineTokenBindingFin...` |
| 322 | fn | normalizeMachineTokenConfigRecord | (private) | `function normalizeMachineTokenConfigRecord(para...` |
| 370 | fn | assembleBindingFromRecord | (private) | `function assembleBindingFromRecord(` |
| 392 | fn | normalizeOptionalStringField | (private) | `function normalizeOptionalStringField(value: un...` |
| 396 | fn | normalizeOptionalStringListField | (private) | `function normalizeOptionalStringListField(value...` |
| 412 | fn | assertSmuggledBindingMatchesRegistry | (private) | `function assertSmuggledBindingMatchesRegistry(` |
| 417 | fn | expectString | (private) | `const expectString = (field: string, expected: ...` |
| 492 | fn | freezeBindingRegistry | (private) | `function freezeBindingRegistry(` |
| 522 | fn | createMachineTokenFacadeGeneration | pub | `export function createMachineTokenFacadeGenerat...` |
| 689 | fn | releaseMachineTokenFacadeGeneration | pub | `export function releaseMachineTokenFacadeGenera...` |
| 708 | fn | acquireMachineTokenFacadeLeaseForPlugin | pub | `export function acquireMachineTokenFacadeLeaseF...` |
| 736 | fn | publishMachineTokenFacadeGeneration | pub | `export function publishMachineTokenFacadeGenera...` |
| 770 | fn | destroyMachineTokenFacadeGeneration | pub | `export function destroyMachineTokenFacadeGenera...` |
| 797 | fn | createMachineTokenPluginFacade | pub | `export function createMachineTokenPluginFacade(` |
| 813 | fn | unregisterMachineTokenFacadesForPlugin | pub | `export function unregisterMachineTokenFacadesFo...` |
| 827 | fn | getLiveMachineTokenPluginFacade | pub | `export function getLiveMachineTokenPluginFacade(` |
| 840 | fn | getLiveMachineTokenFacadeGenerationHandle | pub | `export function getLiveMachineTokenFacadeGenera...` |
| 855 | fn | countMachineTokenFacadeGenerations | pub | `export function countMachineTokenFacadeGenerati...` |
| 875 | fn | listLiveMachineTokenFacadePluginIds | pub | `export function listLiveMachineTokenFacadePlugi...` |
| 887 | fn | commitMachineTokenOwnershipSnapshot | pub | `export function commitMachineTokenOwnershipSnap...` |
| 915 | fn | collectGrantedMachineTokenBindingRecords | pub | `export function collectGrantedMachineTokenBindi...` |
| 929 | fn | upsert | (private) | `const upsert = (record: HostMachineTokenBinding...` |
| 996 | fn | collectGrantedMachineTokenBindingIds | pub | `export function collectGrantedMachineTokenBindi...` |

## Public API

### `compareMachineTokenCanonicalJson`

```
export function compareMachineTokenCanonicalJson(left: unknown, right: unknown): number {
```

**Line:** 179 | **Kind:** fn

### `fingerprintMachineTokenGrantedRecords`

```
export function fingerprintMachineTokenGrantedRecords(
```

**Line:** 187 | **Kind:** fn

### `liveMachineTokenOwnershipMatchesGrantedRecords`

```
export function liveMachineTokenOwnershipMatchesGrantedRecords(
```

**Line:** 208 | **Kind:** fn

### `destroyCandidateMachineTokenFacadeGeneration`

```
export function destroyCandidateMachineTokenFacadeGeneration(
```

**Line:** 227 | **Kind:** fn

### `buildHostMachineTokenBindingFingerprint`

```
export function buildHostMachineTokenBindingFingerprint(
```

**Line:** 300 | **Kind:** fn

### `createMachineTokenFacadeGeneration`

```
export function createMachineTokenFacadeGeneration(
```

**Line:** 522 | **Kind:** fn

### `releaseMachineTokenFacadeGeneration`

```
export function releaseMachineTokenFacadeGeneration(
```

**Line:** 689 | **Kind:** fn

### `acquireMachineTokenFacadeLeaseForPlugin`

```
export function acquireMachineTokenFacadeLeaseForPlugin(pluginId: string): () => void {
```

**Line:** 708 | **Kind:** fn

### `publishMachineTokenFacadeGeneration`

```
export function publishMachineTokenFacadeGeneration(
```

**Line:** 736 | **Kind:** fn

### `destroyMachineTokenFacadeGeneration`

```
export function destroyMachineTokenFacadeGeneration(
```

**Line:** 770 | **Kind:** fn

### `createMachineTokenPluginFacade`

```
export function createMachineTokenPluginFacade(
```

**Line:** 797 | **Kind:** fn

### `unregisterMachineTokenFacadesForPlugin`

```
export function unregisterMachineTokenFacadesForPlugin(pluginId: string): void {
```

**Line:** 813 | **Kind:** fn

### `getLiveMachineTokenPluginFacade`

```
export function getLiveMachineTokenPluginFacade(
```

**Line:** 827 | **Kind:** fn

### `getLiveMachineTokenFacadeGenerationHandle`

```
export function getLiveMachineTokenFacadeGenerationHandle(
```

**Line:** 840 | **Kind:** fn

### `countMachineTokenFacadeGenerations`

```
export function countMachineTokenFacadeGenerations(): {
```

**Line:** 855 | **Kind:** fn

### `listLiveMachineTokenFacadePluginIds`

```
export function listLiveMachineTokenFacadePluginIds(): string[] {
```

**Line:** 875 | **Kind:** fn

### `commitMachineTokenOwnershipSnapshot`

```
export function commitMachineTokenOwnershipSnapshot(params: {
```

**Line:** 887 | **Kind:** fn

### `collectGrantedMachineTokenBindingRecords`

```
export function collectGrantedMachineTokenBindingRecords(params: {
```

**Line:** 915 | **Kind:** fn

### `collectGrantedMachineTokenBindingIds`

```
export function collectGrantedMachineTokenBindingIds(params: {
```

**Line:** 996 | **Kind:** fn
