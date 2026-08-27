# src/skills/lifecycle/clawhub.ts

[← Back to Module](../modules/src-skills-lifecycle/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1687
- **Language:** TypeScript
- **Symbols:** 76
- **Public symbols:** 14

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 47 | type | ClawHubSkillDownloadedArtifactLock | (private) | - |
| 53 | type | ClawHubSkillFileLock | (private) | - |
| 58 | type | ClawHubSkillVerificationLock | (private) | - |
| 70 | type | ClawHubSkillLockEntry | (private) | - |
| 81 | type | ClawHubSkillOrigin | (private) | - |
| 93 | type | ClawHubSkillsLockfile | (private) | - |
| 98 | type | ClawHubSkillsLockfileStatusRead | pub | - |
| 103 | type | ClawHubSkillStatusLink | pub | - |
| 130 | type | LocalSkillCardStatus | pub | - |
| 136 | type | LocalSkillCardRead | (private) | - |
| 140 | type | InstallClawHubSkillResult | (private) | - |
| 151 | type | UpdateClawHubSkillResult | (private) | - |
| 163 | type | Logger | (private) | - |
| 169 | type | ClawHubSkillRef | (private) | - |
| 176 | fn | normalizeClawHubOwnerHandle | (private) | `function normalizeClawHubOwnerHandle(raw: strin...` |
| 184 | fn | parseRequestedClawHubSkillRef | (private) | `function parseRequestedClawHubSkillRef(raw: str...` |
| 203 | fn | formatClawHubSkillRef | (private) | `function formatClawHubSkillRef(ref: ClawHubSkil...` |
| 207 | fn | resolveRequestedUpdateSlug | (private) | `async function resolveRequestedUpdateSlug(param...` |
| 233 | type | ClawHubInstallParams | (private) | - |
| 247 | type | ClawHubOfficialFlagContainer | (private) | - |
| 253 | fn | hasOfficialClawHubFlag | (private) | `function hasOfficialClawHubFlag(value: ClawHubO...` |
| 257 | fn | isDefaultOfficialClawHubSkillSource | (private) | `function isDefaultOfficialClawHubSkillSource(pa...` |
| 274 | fn | fetchDefaultClawHubSkillDetailIfOfficial | (private) | `async function fetchDefaultClawHubSkillDetailIf...` |
| 296 | type | TrackedUpdateTarget | (private) | - |
| 310 | type | ClawHubSkillVerificationResolutionSource | (private) | - |
| 311 | type | ClawHubSkillVerificationSelector | (private) | - |
| 313 | type | ClawHubSkillVerificationTargetResult | (private) | - |
| 334 | fn | readClawHubSkillsLockfile | (private) | `async function readClawHubSkillsLockfile(worksp...` |
| 355 | fn | writeClawHubSkillsLockfile | (private) | `async function writeClawHubSkillsLockfile(` |
| 363 | fn | readJsonIfExistsSync | (private) | `function readJsonIfExistsSync(` |
| 376 | fn | normalizeStoredRegistry | (private) | `function normalizeStoredRegistry(registry: stri...` |
| 381 | fn | readRealPathSync | (private) | `function readRealPathSync(candidate: string): s...` |
| 389 | fn | normalizeOptionalStringValue | (private) | `function normalizeOptionalStringValue(raw: unkn...` |
| 393 | fn | asRecord | (private) | `function asRecord(raw: unknown): Record<string,...` |
| 399 | fn | normalizeGitHubRepoName | (private) | `function normalizeGitHubRepoName(raw: unknown):...` |
| 411 | fn | normalizeGitHubCommitSegment | (private) | `function normalizeGitHubCommitSegment(raw: unkn...` |
| 419 | fn | buildGitHubTreeUrl | (private) | `function buildGitHubTreeUrl(params: { repo: str...` |
| 426 | fn | readVerifiedClawHubSkillSourceUrl | pub | `export function readVerifiedClawHubSkillSourceU...` |
| 450 | fn | readInstallResolutionSourceUrl | (private) | `function readInstallResolutionSourceUrl(` |
| 459 | fn | buildDownloadedArtifactLock | (private) | `function buildDownloadedArtifactLock(` |
| 469 | fn | snapshotClawHubSkillVerification | (private) | `function snapshotClawHubSkillVerification(` |
| 485 | fn | fetchInstallVerificationLock | (private) | `async function fetchInstallVerificationLock(par...` |
| 508 | fn | readInstalledSkillFileLock | (private) | `async function readInstalledSkillFileLock(` |
| 526 | fn | readClawHubSkillsLockfileStatusSync | pub | `export function readClawHubSkillsLockfileStatus...` |
| 567 | fn | normalizeOptionalSelector | (private) | `function normalizeOptionalSelector(value: strin...` |
| 572 | fn | isNonEmptyString | (private) | `function isNonEmptyString(value: unknown): valu...` |
| 576 | fn | normalizeDownloadedArtifactLock | (private) | `function normalizeDownloadedArtifactLock(` |
| 597 | fn | normalizeSkillFileLock | (private) | `function normalizeSkillFileLock(raw: unknown): ...` |
| 608 | fn | normalizeClawHubSkillOrigin | (private) | `function normalizeClawHubSkillOrigin(` |
| 650 | fn | readClawHubSkillOrigin | (private) | `async function readClawHubSkillOrigin(skillDir:...` |
| 669 | fn | readClawHubSkillOriginStatusSync | (private) | `function readClawHubSkillOriginStatusSync(skill...` |
| 702 | type | StrictOriginReadResult | (private) | - |
| 707 | fn | readClawHubSkillOriginStrict | (private) | `async function readClawHubSkillOriginStrict(ski...` |
| 739 | fn | resolveClawHubSkillStatusLinkSync | pub | `export function resolveClawHubSkillStatusLinkSy...` |
| 904 | fn | resolveLocalSkillCardStatusSync | pub | `export function resolveLocalSkillCardStatusSync(` |
| 910 | fn | isPathInsideDir | (private) | `function isPathInsideDir(child: string, parent:...` |
| 918 | fn | readLocalSkillCardSync | (private) | `function readLocalSkillCardSync(` |
| 970 | fn | readLocalSkillCardContentSync | pub | `export function readLocalSkillCardContentSync(s...` |
| 974 | fn | writeClawHubSkillOrigin | (private) | `async function writeClawHubSkillOrigin(` |
| 982 | fn | searchSkillsFromClawHub | pub | `export async function searchSkillsFromClawHub(p...` |
| 994 | fn | resolveClawHubSkillVerificationTarget | pub | `export async function resolveClawHubSkillVerifi...` |
| 1115 | fn | resolveInstallVersion | (private) | `async function resolveInstallVersion(params: {` |
| 1139 | fn | normalizeGitHubSourcePath | (private) | `function normalizeGitHubSourcePath(raw: string)...` |
| 1147 | fn | resolveGitHubSkillSourceDir | (private) | `function resolveGitHubSkillSourceDir(repoRoot: ...` |
| 1152 | fn | installArchiveResolution | (private) | `async function installArchiveResolution(params: {` |
| 1199 | fn | installGitHubResolution | (private) | `async function installGitHubResolution(params: {` |
| 1250 | fn | assertInstallResolutionAllowed | (private) | `function assertInstallResolutionAllowed(` |
| 1274 | fn | ensureClawHubSkillTrustAcknowledged | (private) | `async function ensureClawHubSkillTrustAcknowled...` |
| 1309 | fn | performClawHubSkillInstall | (private) | `async function performClawHubSkillInstall(` |
| 1534 | fn | installRequestedSkillFromClawHub | (private) | `async function installRequestedSkillFromClawHub(` |
| 1552 | fn | installTrackedSkillFromClawHub | (private) | `async function installTrackedSkillFromClawHub(` |
| 1568 | fn | resolveTrackedUpdateTarget | (private) | `async function resolveTrackedUpdateTarget(param...` |
| 1594 | fn | installSkillFromClawHub | pub | `export async function installSkillFromClawHub(p...` |
| 1609 | fn | updateSkillsFromClawHub | pub | `export async function updateSkillsFromClawHub(p...` |
| 1673 | fn | readTrackedClawHubSkillSlugs | pub | `export async function readTrackedClawHubSkillSl...` |
| 1678 | fn | untrackClawHubSkill | pub | `export async function untrackClawHubSkill(works...` |

## Public API

### `readVerifiedClawHubSkillSourceUrl`

```
export function readVerifiedClawHubSkillSourceUrl(raw: unknown): string | undefined {
```

**Line:** 426 | **Kind:** fn

### `readClawHubSkillsLockfileStatusSync`

```
export function readClawHubSkillsLockfileStatusSync(
```

**Line:** 526 | **Kind:** fn

### `resolveClawHubSkillStatusLinkSync`

```
export function resolveClawHubSkillStatusLinkSync(params: {
```

**Line:** 739 | **Kind:** fn

### `resolveLocalSkillCardStatusSync`

```
export function resolveLocalSkillCardStatusSync(
```

**Line:** 904 | **Kind:** fn

### `readLocalSkillCardContentSync`

```
export function readLocalSkillCardContentSync(skillDir: string): string | undefined {
```

**Line:** 970 | **Kind:** fn

### `searchSkillsFromClawHub`

```
export async function searchSkillsFromClawHub(params: {
```

**Line:** 982 | **Kind:** fn

### `resolveClawHubSkillVerificationTarget`

```
export async function resolveClawHubSkillVerificationTarget(params: {
```

**Line:** 994 | **Kind:** fn

### `installSkillFromClawHub`

```
export async function installSkillFromClawHub(params: {
```

**Line:** 1594 | **Kind:** fn

### `updateSkillsFromClawHub`

```
export async function updateSkillsFromClawHub(params: {
```

**Line:** 1609 | **Kind:** fn

### `readTrackedClawHubSkillSlugs`

```
export async function readTrackedClawHubSkillSlugs(workspaceDir: string): Promise<string[]> {
```

**Line:** 1673 | **Kind:** fn

### `untrackClawHubSkill`

```
export async function untrackClawHubSkill(workspaceDir: string, slug: string): Promise<void> {
```

**Line:** 1678 | **Kind:** fn
