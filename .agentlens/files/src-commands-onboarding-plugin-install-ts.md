# src/commands/onboarding-plugin-install.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1520
- **Language:** TypeScript
- **Symbols:** 49
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 60 | type | InstallChoice | (private) | - |
| 61 | type | InstallPluginFromClawHubResult | (private) | - |
| 68 | type | OnboardingPluginInstallEntry | pub | - |
| 77 | type | OnboardingPluginInstallStatus | pub | - |
| 80 | type | OnboardingPluginInstallResult | (private) | - |
| 89 | fn | markOnboardingPluginInstalled | (private) | `async function markOnboardingPluginInstalled(` |
| 105 | fn | shouldFallbackClawHubToNpm | (private) | `function shouldFallbackClawHubToNpm(params: {` |
| 122 | fn | readInstallFailureWarning | (private) | `function readInstallFailureWarning(result: Inst...` |
| 129 | fn | resolveRealDirectory | (private) | `function resolveRealDirectory(dir: string): str...` |
| 138 | fn | resolveGitDirectoryMarker | (private) | `function resolveGitDirectoryMarker(dir: string)...` |
| 163 | fn | isWithinBaseDirectory | (private) | `function isWithinBaseDirectory(baseDir: string,...` |
| 171 | fn | hasTrustedGitWorkspace | (private) | `function hasTrustedGitWorkspace(root: string): ...` |
| 187 | fn | hasGitWorkspace | (private) | `function hasGitWorkspace(workspaceDir?: string)...` |
| 195 | fn | addPluginLoadPath | (private) | `function addPluginLoadPath(cfg: OpenClawConfig,...` |
| 210 | fn | pathsReferToSameDirectory | (private) | `function pathsReferToSameDirectory(` |
| 222 | fn | formatPortableLocalPath | (private) | `function formatPortableLocalPath(localPath: str...` |
| 241 | fn | recordLocalPluginInstall | (private) | `async function recordLocalPluginInstall(params: {` |
| 258 | fn | resolveLocalPath | (private) | `function resolveLocalPath(params: {` |
| 305 | fn | resolveBundledLocalPath | (private) | `function resolveBundledLocalPath(params: {` |
| 335 | fn | resolveNpmSpecForOnboarding | (private) | `function resolveNpmSpecForOnboarding(install: P...` |
| 344 | fn | resolveClawHubSpecForOnboarding | (private) | `function resolveClawHubSpecForOnboarding(instal...` |
| 353 | fn | resolveInstallDefaultChoice | (private) | `function resolveInstallDefaultChoice(params: {` |
| 401 | fn | promptInstallChoice | (private) | `async function promptInstallChoice(params: {` |
| 502 | fn | formatDurationLabel | (private) | `function formatDurationLabel(timeoutMs: number)...` |
| 511 | fn | formatPluginInstallProgress | (private) | `function formatPluginInstallProgress(label: str...` |
| 515 | fn | formatPluginInstalled | (private) | `function formatPluginInstalled(label: string): ...` |
| 519 | fn | formatPluginInstallFailed | (private) | `function formatPluginInstallFailed(label: strin...` |
| 523 | fn | formatPluginInstallTimedOut | (private) | `function formatPluginInstallTimedOut(label: str...` |
| 527 | fn | formatPluginInstallTimedOutNote | (private) | `function formatPluginInstallTimedOutNote(spec: ...` |
| 537 | fn | summarizeInstallError | (private) | `function summarizeInstallError(message: string)...` |
| 549 | fn | formatInstallErrorDetail | (private) | `function formatInstallErrorDetail(message: stri...` |
| 571 | fn | isTimeoutError | (private) | `function isTimeoutError(error: unknown): boolean {` |
| 575 | fn | applyPluginEnablement | (private) | `async function applyPluginEnablement(params: {` |
| 598 | type | AnimatedProgress | (private) | - |
| 617 | fn | shortenInstallLabel | (private) | `function shortenInstallLabel(message: string): ...` |
| 660 | fn | createAnimatedInstallProgress | (private) | `function createAnimatedInstallProgress(` |
| 712 | fn | logInstallWarningWithSpacing | (private) | `function logInstallWarningWithSpacing(runtime: ...` |
| 720 | fn | logInstallWarningWithLineBreaks | (private) | `function logInstallWarningWithLineBreaks(runtim...` |
| 732 | fn | isReviewRequiredClawHubTrustWarning | (private) | `function isReviewRequiredClawHubTrustWarning(me...` |
| 736 | fn | isClawHubTrustWarning | (private) | `function isClawHubTrustWarning(message: string)...` |
| 744 | fn | installPluginFromNpmSpecWithProgress | (private) | `async function installPluginFromNpmSpecWithProg...` |
| 762 | fn | updateProgress | (private) | `const updateProgress = (message: string) => {` |
| 821 | fn | installPluginFromNpmPackArchiveWithProgress | (private) | `async function installPluginFromNpmPackArchiveW...` |
| 838 | fn | updateProgress | (private) | `const updateProgress = (message: string) => {` |
| 883 | fn | installPluginFromOverride | (private) | `async function installPluginFromOverride(params: {` |
| 1013 | fn | installPluginFromClawHubSpecWithProgress | (private) | `async function installPluginFromClawHubSpecWith...` |
| 1030 | fn | updateProgress | (private) | `const updateProgress = (message: string) => {` |
| 1038 | fn | renderTrustWarning | (private) | `const renderTrustWarning = (message: string) => {` |
| 1121 | fn | ensureOnboardingPluginInstalled | pub | `export async function ensureOnboardingPluginIns...` |

## Public API

### `ensureOnboardingPluginInstalled`

```
export async function ensureOnboardingPluginInstalled(params: {
```

**Line:** 1121 | **Kind:** fn
