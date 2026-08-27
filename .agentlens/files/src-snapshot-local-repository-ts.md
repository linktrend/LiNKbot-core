# src/snapshot/local-repository.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1484
- **Language:** TypeScript
- **Symbols:** 46
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 207 | type | WindowsAclEntry | (private) | - |
| 215 | type | LocalSqliteSnapshotProviderOptions | (private) | - |
| 222 | fn | createLocalSqliteSnapshotProvider | pub | `export function createLocalSqliteSnapshotProvider(` |
| 228 | class | LocalSqliteSnapshotProvider | (private) | - |
| 583 | fn | readVerifiedSnapshotManifest | (private) | `async function readVerifiedSnapshotManifest(sna...` |
| 588 | fn | assertArtifactMatchesManifest | (private) | `function assertArtifactMatchesManifest(` |
| 605 | fn | assertAllowedDatabaseRole | (private) | `function assertAllowedDatabaseRole(` |
| 617 | fn | verifySnapshotDatabaseFile | (private) | `async function verifySnapshotDatabaseFile(` |
| 683 | fn | normalizeSnapshotIdentity | (private) | `function normalizeSnapshotIdentity(identity: Sn...` |
| 701 | fn | buildDatabaseManifest | (private) | `function buildDatabaseManifest(` |
| 716 | fn | buildDatabaseValidator | (private) | `function buildDatabaseValidator(` |
| 733 | fn | buildManifestDatabaseValidator | (private) | `function buildManifestDatabaseValidator(` |
| 748 | fn | buildSnapshotId | (private) | `function buildSnapshotId(now: Date): string {` |
| 753 | fn | ensurePrivateDirectory | (private) | `async function ensurePrivateDirectory(directory...` |
| 781 | fn | ensureRestoreParentDirectory | (private) | `async function ensureRestoreParentDirectory(dir...` |
| 791 | fn | assertDirectory | (private) | `function assertDirectory(stat: Stats, pathname:...` |
| 797 | fn | assertDirectoryIdentity | (private) | `async function assertDirectoryIdentity(` |
| 808 | fn | assertOpenDirectoryIdentity | (private) | `async function assertOpenDirectoryIdentity(` |
| 825 | fn | assertDirectoryIdentitySync | (private) | `function assertDirectoryIdentitySync(directoryP...` |
| 833 | fn | isSnapshotEntryLinkFallbackError | (private) | `function isSnapshotEntryLinkFallbackError(error...` |
| 844 | fn | publishSnapshotEntryNoOverwrite | (private) | `async function publishSnapshotEntryNoOverwrite(` |
| 886 | fn | copySnapshotEntryExclusive | (private) | `async function copySnapshotEntryExclusive(sourc...` |
| 939 | fn | assertExactSnapshotContents | (private) | `async function assertExactSnapshotContents(snap...` |
| 946 | fn | assertPendingSnapshotContents | (private) | `async function assertPendingSnapshotContents(sn...` |
| 953 | fn | assertSnapshotContents | (private) | `async function assertSnapshotContents(snapshotD...` |
| 978 | fn | isIncompleteSnapshotDirectory | (private) | `async function isIncompleteSnapshotDirectory(sn...` |
| 990 | fn | assertFreshRestorePathsAbsent | (private) | `async function assertFreshRestorePathsAbsent(da...` |
| 1001 | fn | assertNoSqliteSidecarsSync | (private) | `function assertNoSqliteSidecarsSync(databasePat...` |
| 1016 | fn | lstatIfExists | (private) | `async function lstatIfExists(pathname: string):...` |
| 1027 | fn | removePrivateDirectoryIfOwned | (private) | `async function removePrivateDirectoryIfOwned(` |
| 1061 | fn | withPrivateSqliteStagingDirectory | (private) | `async function withPrivateSqliteStagingDirector...` |
| 1122 | fn | assertTrustedStagingRoot | (private) | `async function assertTrustedStagingRoot(` |
| 1150 | fn | assertPrivateStagingDirectory | (private) | `async function assertPrivateStagingDirectory(` |
| 1173 | fn | assertTrustedPosixStagingAncestors | (private) | `async function assertTrustedPosixStagingAncestors(` |
| 1207 | type | MacosAclEntry | (private) | - |
| 1213 | fn | parseMacosAclEntries | (private) | `function parseMacosAclEntries(output: string, p...` |
| 1244 | fn | normalizeAclPrincipal | (private) | `function normalizeAclPrincipal(principal: strin...` |
| 1248 | fn | resolveTrustedMacosAclPrincipals | (private) | `async function resolveTrustedMacosAclPrincipals...` |
| 1275 | fn | assertTrustedMacosAcl | (private) | `async function assertTrustedMacosAcl(pathname: ...` |
| 1310 | fn | assertTrustedWindowsStagingPath | (private) | `async function assertTrustedWindowsStagingPath(...` |
| 1339 | fn | assertTrustedWindowsAcl | (private) | `function assertTrustedWindowsAcl(` |
| 1364 | fn | windowsSecurityEntryToAclEntry | (private) | `function windowsSecurityEntryToAclEntry(` |
| 1390 | fn | windowsAclEntryPermitsUnsafeStagingAccess | (private) | `function windowsAclEntryPermitsUnsafeStagingAcc...` |
| 1409 | fn | inspectWindowsPathSecurity | (private) | `async function inspectWindowsPathSecurity(` |
| 1435 | fn | runEncodedWindowsPowerShell | (private) | `async function runEncodedWindowsPowerShell(comm...` |
| 1452 | fn | removePublishedSnapshotDirectoryIfOwned | (private) | `async function removePublishedSnapshotDirectory...` |

## Public API

### `createLocalSqliteSnapshotProvider`

```
export function createLocalSqliteSnapshotProvider(
```

**Line:** 222 | **Kind:** fn
