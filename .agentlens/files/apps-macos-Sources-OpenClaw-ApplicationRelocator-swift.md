# apps/macos/Sources/OpenClaw/ApplicationRelocator.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1172
- **Language:** Swift
- **Symbols:** 35
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 9 | fn | csops | (private) | `private func csops(   _: pid_t,   _: UInt32,   ...` |
| 15 | enum | ApplicationRelocator | (internal) | `enum ApplicationRelocator` |
| 120 | fn | recommendation | (internal) | `static func recommendation(for environment: Env...` |
| 157 | fn | isTransientLocation | (internal) | `static func isTransientLocation(     _ bundleUR...` |
| 178 | fn | handleLaunch | (internal) | `static func handleLaunch(     bundle: Bundle = ...` |
| 229 | fn | currentBundleAllowsPersistentIntegration | (internal) | `static func currentBundleAllowsPersistentIntegr...` |
| 256 | mod | extension ApplicationRelocator | (internal) | - |
| 268 | fn | relaunchStrategy | (internal) | `static func relaunchStrategy(     xpcServiceNam...` |
| 281 | fn | verifiedKeepAliveSupervisor | (private) | `private static func verifiedKeepAliveSupervisor...` |
| 314 | fn | inheritedSupervisor | (private) | `private static func inheritedSupervisor(     en...` |
| 336 | fn | keepAliveSupervisor | (private) | `private static func keepAliveSupervisor(     la...` |
| 359 | fn | acceptReplacementHandoff | (internal) | `static func acceptReplacementHandoff(     envir...` |
| 426 | fn | bootoutLaunchdTarget | (private) | `private static func bootoutLaunchdTarget(_ targ...` |
| 480 | fn | currentEnvironment | (private) | `private static func currentEnvironment(     bun...` |
| 523 | fn | identity | (private) | `private static func identity(for bundle: Bundle...` |
| 530 | fn | replacementSourceBundleURL | (private) | `private static func replacementSourceBundleURL(...` |
| 537 | fn | startBundleReplacementMonitoring | (private) | `private static func startBundleReplacementMonit...` |
| 590 | fn | bundleDirectoryDidChange | (private) | `private static func bundleDirectoryDidChange()` |
| 731 | fn | runningCodeIdentity | (private) | `private static func runningCodeIdentity(     bu...` |
| 764 | fn | kernelCodeDirectoryHash | (private) | `private static func kernelCodeDirectoryHash() -...` |
| 772 | fn | kernelTeamIdentifier | (private) | `private static func kernelTeamIdentifier() -> S...` |
| 827 | fn | designatedRequirement | (private) | `private static func designatedRequirement(for b...` |
| 838 | fn | isTrustedInstalledApp | (private) | `private static func isTrustedInstalledApp(     ...` |
| 851 | fn | isTrustedInstalledApp | (private) | `private static func isTrustedInstalledApp(     ...` |
| 869 | fn | canWrite | (private) | `private static func canWrite(destination: URL, ...` |
| 879 | fn | install | (private) | `private static func install(     source: URL,  ...` |
| 903 | fn | confirmInstall | (private) | `private static func confirmInstall(replacing: B...` |
| 919 | fn | relaunchAndTerminate | (private) | `private static func relaunchAndTerminate(at des...` |
| 943 | fn | startSupervisorRestorationWatcher | (private) | `private static func startSupervisorRestorationW...` |
| 970 | fn | cancelSupervisorRestorationWatcher | (private) | `private static func cancelSupervisorRestoration...` |
| 978 | fn | scheduleReplacementRelaunch | (private) | `private static func scheduleReplacementRelaunch...` |
| 1030 | fn | spawnReplacement | (private) | `private static func spawnReplacement(     launc...` |
| 1155 | fn | showFailure | (private) | `private static func showFailure(_ message: String)` |
| 1164 | fn | compareBuild | (private) | `private static func compareBuild(_ lhs: String,...` |
| 1168 | fn | isInside | (private) | `private static func isInside(_ path: String, ro...` |
