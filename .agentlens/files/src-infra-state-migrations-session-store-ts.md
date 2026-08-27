# src/infra/state-migrations.session-store.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1393
- **Language:** TypeScript
- **Symbols:** 42
- **Public symbols:** 19

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 50 | fn | isLegacyDefaultMainAliasKey | pub | `export function isLegacyDefaultMainAliasKey(key...` |
| 59 | fn | resolveCanonicalAgentSessionOwner | (private) | `function resolveCanonicalAgentSessionOwner(key:...` |
| 71 | fn | canonicalizeSessionKeyForAgent | (private) | `function canonicalizeSessionKeyForAgent(params: {` |
| 202 | fn | pickLatestLegacyDirectEntry | pub | `export function pickLatestLegacyDirectEntry(` |
| 237 | fn | normalizeSessionEntry | pub | `export function normalizeSessionEntry(entry: Se...` |
| 257 | fn | resolveUpdatedAt | (private) | `function resolveUpdatedAt(entry: SessionEntryLi...` |
| 263 | fn | mergeSessionEntry | pub | `export function mergeSessionEntry(params: {` |
| 282 | fn | canonicalizeSessionStore | pub | `export function canonicalizeSessionStore(params: {` |
| 345 | fn | isAmbiguousSharedStoreKey | pub | `export function isAmbiguousSharedStoreKey(` |
| 368 | fn | aliasedSessionStoreMigrationWarning | pub | `export function aliasedSessionStoreMigrationWar...` |
| 376 | fn | unresolvedSessionStoreIdentityWarning | pub | `export function unresolvedSessionStoreIdentityW...` |
| 380 | fn | distinctSessionStoreAliasWarning | pub | `export function distinctSessionStoreAliasWarnin...` |
| 384 | fn | resolveStaleLegacySessionFile | pub | `export function resolveStaleLegacySessionFile(p...` |
| 429 | fn | readFirstLine | (private) | `const readFirstLine = () => {` |
| 461 | fn | skipJson5Trivia | (private) | `function skipJson5Trivia(raw: string, index: nu...` |
| 488 | fn | readJson5String | (private) | `function readJson5String(raw: string, index: nu...` |
| 509 | fn | readJson5BareKey | (private) | `function readJson5BareKey(raw: string, index: n...` |
| 535 | fn | listTopLevelSessionStoreKeys | (private) | `function listTopLevelSessionStoreKeys(raw: stri...` |
| 599 | fn | sessionStoreTextMayNeedCanonicalization | (private) | `function sessionStoreTextMayNeedCanonicalizatio...` |
| 677 | fn | listLegacySessionKeys | pub | `export function listLegacySessionKeys(params: {` |
| 704 | fn | emptyDirOrMissing | pub | `export function emptyDirOrMissing(dir: string):...` |
| 711 | fn | removeDirIfEmpty | pub | `export function removeDirIfEmpty(dir: string) {` |
| 725 | fn | migrateOrphanedSessionKeys | pub | `export async function migrateOrphanedSessionKey...` |
| 751 | fn | addToStoreMap | (private) | `const addToStoreMap = (p: string, id: string) => {` |
| 920 | fn | migrateLegacyAcpSessionMetadata | pub | `export async function migrateLegacyAcpSessionMe...` |
| 1123 | fn | resolveLegacyAcpMetadataSessionStoreTargets | (private) | `function resolveLegacyAcpMetadataSessionStoreTa...` |
| 1130 | fn | addTarget | (private) | `const addTarget = (agentId: string, storePath: ...` |
| 1169 | fn | isManagedLegacySessionStorePathSafe | (private) | `function isManagedLegacySessionStorePathSafe(st...` |
| 1193 | fn | resolveStorePathFromTemplate | (private) | `function resolveStorePathFromTemplate(` |
| 1198 | fn | expand | (private) | `const expand = (s: string) =>` |
| 1206 | type | SessionStorePathRelationship | (private) | - |
| 1208 | fn | resolveSessionStorePathRelationship | (private) | `function resolveSessionStorePathRelationship(` |
| 1231 | fn | sessionStorePathsMatch | (private) | `function sessionStorePathsMatch(left: string, r...` |
| 1237 | fn | resolvePathThroughExistingParents | (private) | `function resolvePathThroughExistingParents(file...` |
| 1259 | fn | sessionStorePathIsFinalSymlink | (private) | `function sessionStorePathIsFinalSymlink(storePa...` |
| 1267 | fn | sessionStorePathsHaveDistinctEntries | (private) | `function sessionStorePathsHaveDistinctEntries(l...` |
| 1290 | fn | resolveSessionStoreAliasPlan | (private) | `function resolveSessionStoreAliasPlan(` |
| 1318 | fn | mergeSessionStoreAliasPlans | pub | `export function mergeSessionStoreAliasPlans(` |
| 1332 | fn | saveSessionStoreStrict | pub | `export async function saveSessionStoreStrict(` |
| 1342 | type | SessionStoreOwnership | pub | - |
| 1348 | fn | resolveSessionStoreOwnership | pub | `export function resolveSessionStoreOwnership(pa...` |
| 1363 | fn | resolveAgentStorePath | (private) | `const resolveAgentStorePath = (agentId: string) =>` |

## Public API

### `isLegacyDefaultMainAliasKey`

```
export function isLegacyDefaultMainAliasKey(key: string, mainKey: string): boolean {
```

**Line:** 50 | **Kind:** fn

### `pickLatestLegacyDirectEntry`

```
export function pickLatestLegacyDirectEntry(
```

**Line:** 202 | **Kind:** fn

### `normalizeSessionEntry`

```
export function normalizeSessionEntry(entry: SessionEntryLike): SessionEntry | null {
```

**Line:** 237 | **Kind:** fn

### `mergeSessionEntry`

```
export function mergeSessionEntry(params: {
```

**Line:** 263 | **Kind:** fn

### `canonicalizeSessionStore`

```
export function canonicalizeSessionStore(params: {
```

**Line:** 282 | **Kind:** fn

### `isAmbiguousSharedStoreKey`

```
export function isAmbiguousSharedStoreKey(
```

**Line:** 345 | **Kind:** fn

### `aliasedSessionStoreMigrationWarning`

```
export function aliasedSessionStoreMigrationWarning(params: {
```

**Line:** 368 | **Kind:** fn

### `unresolvedSessionStoreIdentityWarning`

```
export function unresolvedSessionStoreIdentityWarning(subject: string, storePath: string): string {
```

**Line:** 376 | **Kind:** fn

### `distinctSessionStoreAliasWarning`

```
export function distinctSessionStoreAliasWarning(subject: string, storePath: string): string {
```

**Line:** 380 | **Kind:** fn

### `resolveStaleLegacySessionFile`

```
export function resolveStaleLegacySessionFile(params: {
```

**Line:** 384 | **Kind:** fn

### `listLegacySessionKeys`

```
export function listLegacySessionKeys(params: {
```

**Line:** 677 | **Kind:** fn

### `emptyDirOrMissing`

```
export function emptyDirOrMissing(dir: string): boolean {
```

**Line:** 704 | **Kind:** fn

### `removeDirIfEmpty`

```
export function removeDirIfEmpty(dir: string) {
```

**Line:** 711 | **Kind:** fn

### `migrateOrphanedSessionKeys`

```
export async function migrateOrphanedSessionKeys(params: {
```

**Line:** 725 | **Kind:** fn

### `migrateLegacyAcpSessionMetadata`

```
export async function migrateLegacyAcpSessionMetadata(params: {
```

**Line:** 920 | **Kind:** fn

### `mergeSessionStoreAliasPlans`

```
export function mergeSessionStoreAliasPlans(
```

**Line:** 1318 | **Kind:** fn

### `saveSessionStoreStrict`

```
export async function saveSessionStoreStrict(
```

**Line:** 1332 | **Kind:** fn

### `resolveSessionStoreOwnership`

```
export function resolveSessionStoreOwnership(params: {
```

**Line:** 1348 | **Kind:** fn
