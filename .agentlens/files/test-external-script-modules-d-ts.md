# test/external-script-modules.d.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 283
- **Language:** TypeScript
- **Symbols:** 57
- **Public symbols:** 53

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 2 | fn | validateRuleMetadata | pub | `export function validateRuleMetadata(` |
| 8 | type | SpawnCall | (private) | - |
| 19 | fn | shouldUseCmdExeForCommand | pub | `export function shouldUseCmdExeForCommand(cmd: ...` |
| 20 | fn | resolveSpawnCall | pub | `export function resolveSpawnCall(` |
| 26 | fn | resolvePnpmSpawnCall | pub | `export function resolvePnpmSpawnCall(` |
| 31 | fn | isDirectScriptExecution | pub | `export function isDirectScriptExecution(` |
| 39 | type | ContributionRecord | (private) | - |
| 44 | fn | createGithubSnapshotState | pub | `export function createGithubSnapshotState(param...` |
| 56 | fn | githubApiWithSnapshot | pub | `export function githubApiWithSnapshot(` |
| 61 | fn | persistGithubSnapshot | pub | `export function persistGithubSnapshot(snapshotS...` |
| 62 | fn | defaultGithubSnapshotPath | pub | `export function defaultGithubSnapshotPath(` |
| 67 | fn | renderContributionRecordEntry | pub | `export function renderContributionRecordEntry(e...` |
| 68 | fn | releaseNoteReferences | pub | `export function releaseNoteReferences(` |
| 72 | fn | standardRevertedHash | pub | `export function standardRevertedHash(message: s...` |
| 73 | fn | contributionRecordTarget | pub | `export function contributionRecordTarget(sectio...` |
| 74 | fn | pullRequestTitleFromCommitSubject | pub | `export function pullRequestTitleFromCommitSubject(` |
| 78 | fn | contributionRecordFor | pub | `export function contributionRecordFor(section: ...` |
| 82 | fn | contributionRecordTarget | pub | `export function contributionRecordTarget(sectio...` |
| 83 | fn | pullRequestTitleFromCommitSubject | pub | `export function pullRequestTitleFromCommitSubject(` |
| 87 | fn | recoverUnavailablePullRequests | pub | `export function recoverUnavailablePullRequests(...` |
| 108 | fn | cumulativeShippedPullRequests | pub | `export function cumulativeShippedPullRequests(c...` |
| 109 | fn | subtractShippedPullRequests | pub | `export function subtractShippedPullRequests(` |
| 116 | fn | withoutExcludedContributionRecords | pub | `export function withoutExcludedContributionReco...` |
| 126 | fn | renderedContributionRecordReferences | pub | `export function renderedContributionRecordRefer...` |
| 133 | fn | contaminatingPullRequestReferences | pub | `export function contaminatingPullRequestReferen...` |
| 134 | fn | canonicalMainCommitMatches | pub | `export function canonicalMainCommitMatches(comm...` |
| 135 | fn | canonicalPullRequests | pub | `export function canonicalPullRequests(` |
| 140 | fn | releaseProvenanceMarkers | pub | `export function releaseProvenanceMarkers(` |
| 143 | fn | collectReleaseProvenanceOverrides | pub | `export function collectReleaseProvenanceOverrides(` |
| 146 | fn | resolvedReleasePullRequests | pub | `export function resolvedReleasePullRequests(` |
| 152 | fn | releasePullRequestReferencesToSuppress | pub | `export function releasePullRequestReferencesToS...` |
| 158 | fn | recoverUnavailablePullRequests | pub | `export function recoverUnavailablePullRequests(` |
| 161 | fn | validateReleaseProvenanceOverrides | pub | `export function validateReleaseProvenanceOverri...` |
| 167 | fn | ledgerFor | pub | `export function ledgerFor(...args: unknown[]): {` |
| 174 | fn | countTopLevelSectionBullets | pub | `export function countTopLevelSectionBullets(sec...` |
| 175 | fn | highlightCountError | pub | `export function highlightCountError(sectionSour...` |
| 176 | fn | ledgerChecks | pub | `export function ledgerChecks(...args: unknown[]...` |
| 180 | type | GatewayDeployment | (private) | - |
| 184 | type | UpdateResult | (private) | - |
| 191 | fn | originMatches | pub | `export function originMatches(remoteUrl: string...` |
| 192 | fn | isOwnedGatewayEntrypoint | pub | `export function isOwnedGatewayEntrypoint(` |
| 197 | fn | parseLaunchctlArguments | pub | `export function parseLaunchctlArguments(output:...` |
| 198 | fn | resolveManagedGatewayEntrypoint | pub | `export function resolveManagedGatewayEntrypoint(` |
| 203 | fn | replaceLaunchAgentProgramArgument | pub | `export function replaceLaunchAgentProgramArgument(` |
| 209 | fn | repointManagedGatewayDeployment | pub | `export function repointManagedGatewayDeployment(` |
| 215 | fn | runBuiltGatewayCall | pub | `export function runBuiltGatewayCall(` |
| 221 | fn | classifyActions | pub | `export function classifyActions(` |
| 225 | fn | inspectBuildState | pub | `export function inspectBuildState(checkout: str...` |
| 226 | fn | acquireMaintenanceLock | pub | `export function acquireMaintenanceLock(` |
| 234 | fn | parseGatewayLogAudit | pub | `export function parseGatewayLogAudit(` |
| 240 | fn | resolveManagedPluginSourceRoots | pub | `export function resolveManagedPluginSourceRoots...` |
| 241 | fn | resolveManagedGatewaySourceRoot | pub | `export function resolveManagedGatewaySourceRoot(` |
| 245 | fn | prepareGatewaySuspension | pub | `export function prepareGatewaySuspension(` |
| 263 | fn | runBuiltGatewayCli | pub | `export function runBuiltGatewayCli(` |
| 269 | fn | verifyGatewayReadiness | pub | `export function verifyGatewayReadiness(` |
| 275 | fn | findExactMacTarget | pub | `export function findExactMacTarget(` |
| 279 | fn | maintainMain | pub | `export function maintainMain(` |

## Public API

### `validateRuleMetadata`

```
export function validateRuleMetadata(
```

**Line:** 2 | **Kind:** fn

### `shouldUseCmdExeForCommand`

```
export function shouldUseCmdExeForCommand(cmd: string, platform?: NodeJS.Platform): boolean;
```

**Line:** 19 | **Kind:** fn

### `resolveSpawnCall`

```
export function resolveSpawnCall(
```

**Line:** 20 | **Kind:** fn

### `resolvePnpmSpawnCall`

```
export function resolvePnpmSpawnCall(
```

**Line:** 26 | **Kind:** fn

### `isDirectScriptExecution`

```
export function isDirectScriptExecution(
```

**Line:** 31 | **Kind:** fn

### `createGithubSnapshotState`

```
export function createGithubSnapshotState(params: Record<string, unknown>): {
```

**Line:** 44 | **Kind:** fn

### `githubApiWithSnapshot`

```
export function githubApiWithSnapshot(
```

**Line:** 56 | **Kind:** fn

### `persistGithubSnapshot`

```
export function persistGithubSnapshot(snapshotState: Record<string, unknown>): void;
```

**Line:** 61 | **Kind:** fn

### `defaultGithubSnapshotPath`

```
export function defaultGithubSnapshotPath(
```

**Line:** 62 | **Kind:** fn

### `renderContributionRecordEntry`

```
export function renderContributionRecordEntry(entry: Record<string, unknown>): string;
```

**Line:** 67 | **Kind:** fn

### `releaseNoteReferences`

```
export function releaseNoteReferences(
```

**Line:** 68 | **Kind:** fn

### `standardRevertedHash`

```
export function standardRevertedHash(message: string): string | null;
```

**Line:** 72 | **Kind:** fn

### `contributionRecordTarget`

```
export function contributionRecordTarget(section: { source: string }): string | undefined;
```

**Line:** 73 | **Kind:** fn

### `pullRequestTitleFromCommitSubject`

```
export function pullRequestTitleFromCommitSubject(
```

**Line:** 74 | **Kind:** fn

### `contributionRecordFor`

```
export function contributionRecordFor(section: Record<string, unknown>): {
```

**Line:** 78 | **Kind:** fn

### `contributionRecordTarget`

```
export function contributionRecordTarget(section: { source: string }): string | undefined;
```

**Line:** 82 | **Kind:** fn

### `pullRequestTitleFromCommitSubject`

```
export function pullRequestTitleFromCommitSubject(
```

**Line:** 83 | **Kind:** fn

### `recoverUnavailablePullRequests`

```
export function recoverUnavailablePullRequests(params: {
```

**Line:** 87 | **Kind:** fn

### `cumulativeShippedPullRequests`

```
export function cumulativeShippedPullRequests(changelog: unknown, label: string): Set<number>;
```

**Line:** 108 | **Kind:** fn

### `subtractShippedPullRequests`

```
export function subtractShippedPullRequests(
```

**Line:** 109 | **Kind:** fn

### `withoutExcludedContributionRecords`

```
export function withoutExcludedContributionRecords(
```

**Line:** 116 | **Kind:** fn

### `renderedContributionRecordReferences`

```
export function renderedContributionRecordReferences(
```

**Line:** 126 | **Kind:** fn

### `contaminatingPullRequestReferences`

```
export function contaminatingPullRequestReferences(params: Record<string, unknown>): unknown[];
```

**Line:** 133 | **Kind:** fn

### `canonicalMainCommitMatches`

```
export function canonicalMainCommitMatches(commit: unknown, candidates: unknown[]): unknown[];
```

**Line:** 134 | **Kind:** fn

### `canonicalPullRequests`

```
export function canonicalPullRequests(
```

**Line:** 135 | **Kind:** fn

### `releaseProvenanceMarkers`

```
export function releaseProvenanceMarkers(
```

**Line:** 140 | **Kind:** fn

### `collectReleaseProvenanceOverrides`

```
export function collectReleaseProvenanceOverrides(
```

**Line:** 143 | **Kind:** fn

### `resolvedReleasePullRequests`

```
export function resolvedReleasePullRequests(
```

**Line:** 146 | **Kind:** fn

### `releasePullRequestReferencesToSuppress`

```
export function releasePullRequestReferencesToSuppress(
```

**Line:** 152 | **Kind:** fn

### `recoverUnavailablePullRequests`

```
export function recoverUnavailablePullRequests(
```

**Line:** 158 | **Kind:** fn

### `validateReleaseProvenanceOverrides`

```
export function validateReleaseProvenanceOverrides(
```

**Line:** 161 | **Kind:** fn

### `ledgerFor`

```
export function ledgerFor(...args: unknown[]): {
```

**Line:** 167 | **Kind:** fn

### `countTopLevelSectionBullets`

```
export function countTopLevelSectionBullets(sectionSource: string, heading: string): number;
```

**Line:** 174 | **Kind:** fn

### `highlightCountError`

```
export function highlightCountError(sectionSource: string): string | undefined;
```

**Line:** 175 | **Kind:** fn

### `ledgerChecks`

```
export function ledgerChecks(...args: unknown[]): string[];
```

**Line:** 176 | **Kind:** fn

### `originMatches`

```
export function originMatches(remoteUrl: string): boolean;
```

**Line:** 191 | **Kind:** fn

### `isOwnedGatewayEntrypoint`

```
export function isOwnedGatewayEntrypoint(
```

**Line:** 192 | **Kind:** fn

### `parseLaunchctlArguments`

```
export function parseLaunchctlArguments(output: string): string[];
```

**Line:** 197 | **Kind:** fn

### `resolveManagedGatewayEntrypoint`

```
export function resolveManagedGatewayEntrypoint(
```

**Line:** 198 | **Kind:** fn

### `replaceLaunchAgentProgramArgument`

```
export function replaceLaunchAgentProgramArgument(
```

**Line:** 203 | **Kind:** fn

### `repointManagedGatewayDeployment`

```
export function repointManagedGatewayDeployment(
```

**Line:** 209 | **Kind:** fn

### `runBuiltGatewayCall`

```
export function runBuiltGatewayCall(
```

**Line:** 215 | **Kind:** fn

### `classifyActions`

```
export function classifyActions(
```

**Line:** 221 | **Kind:** fn

### `inspectBuildState`

```
export function inspectBuildState(checkout: string, expectedSha: string): UpdateResult;
```

**Line:** 225 | **Kind:** fn

### `acquireMaintenanceLock`

```
export function acquireMaintenanceLock(
```

**Line:** 226 | **Kind:** fn

### `parseGatewayLogAudit`

```
export function parseGatewayLogAudit(
```

**Line:** 234 | **Kind:** fn

### `resolveManagedPluginSourceRoots`

```
export function resolveManagedPluginSourceRoots(report: unknown): string[] | null;
```

**Line:** 240 | **Kind:** fn

### `resolveManagedGatewaySourceRoot`

```
export function resolveManagedGatewaySourceRoot(
```

**Line:** 241 | **Kind:** fn

### `prepareGatewaySuspension`

```
export function prepareGatewaySuspension(
```

**Line:** 245 | **Kind:** fn

### `runBuiltGatewayCli`

```
export function runBuiltGatewayCli(
```

**Line:** 263 | **Kind:** fn

### `verifyGatewayReadiness`

```
export function verifyGatewayReadiness(
```

**Line:** 269 | **Kind:** fn

### `findExactMacTarget`

```
export function findExactMacTarget(
```

**Line:** 275 | **Kind:** fn

### `maintainMain`

```
export function maintainMain(
```

**Line:** 279 | **Kind:** fn
