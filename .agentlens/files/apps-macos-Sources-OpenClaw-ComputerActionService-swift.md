# apps/macos/Sources/OpenClaw/ComputerActionService.swift

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1198
- **Language:** Swift
- **Symbols:** 58
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 12 | class | ComputerActionCancellationState | (private) | `class ComputerActionCancellationState` |
| 26 | fn | requestCancellation | (internal) | `func requestCancellation() -> Bool` |
| 34 | fn | recordOperationReleaseSuccess | (internal) | `func recordOperationReleaseSuccess()` |
| 41 | fn | finish | (internal) | `func finish() -> (wasCancelled: Bool, needsRele...` |
| 55 | class | ComputerActionExecutionQueue | (internal) | `class ComputerActionExecutionQueue` |
| 91 | fn | perform | (internal) | `func perform(     _ params: OpenClawComputerAct...` |
| 131 | fn | releaseHeldInput | (internal) | `func releaseHeldInput(lifecycleGeneration: UInt...` |
| 144 | fn | checkExecutionAllowed | (internal) | `func checkExecutionAllowed(lifecycleGeneration:...` |
| 164 | fn | startDrainIfNeeded | (private) | `private func startDrainIfNeeded()` |
| 171 | fn | drain | (private) | `private func drain() async` |
| 259 | fn | advanceLifecycle | (private) | `private func advanceLifecycle(to generation: UI...` |
| 277 | fn | cancelAction | (private) | `private func cancelAction(id: UUID)` |
| 291 | fn | attemptLifecycleRelease | (private) | `@discardableResult   private func attemptLifecy...` |
| 298 | fn | waitForLifecycleRelease | (private) | `private func waitForLifecycleRelease(     lifec...` |
| 323 | class | ComputerActionService | (internal) | `class ComputerActionService` |
| 436 | method | init | (internal) | `init()` |
| 447 | method | init | (internal) | `init(mouseButtonEventPoster: @escaping MouseBut...` |
| 455 | method | init | (internal) | `init(     mouseEventFactory: @escaping MouseEve...` |
| 467 | method | init | (internal) | `init(textGraphemePoster: @escaping TextGrapheme...` |
| 477 | fn | perform | (internal) | `func perform(     _ params: OpenClawComputerAct...` |
| 492 | fn | performImmediately | (private) | `private func performImmediately(     _ params: ...` |
| 513 | fn | dispatch | (private) | `private func dispatch(     _ params: OpenClawCo...` |
| 601 | fn | peekabooClick | (private) | `private func peekabooClick(at point: CGPoint, a...` |
| 610 | fn | typeText | (private) | `private func typeText(_ text: String, lifecycle...` |
| 625 | fn | performScroll | (private) | `private func performScroll(     _ params: OpenC...` |
| 662 | fn | requiredPoint | (private) | `private func requiredPoint(     _ params: OpenC...` |
| 672 | fn | point | (private) | `private func point(     _ x: Double?,     _ y: ...` |
| 719 | fn | validatedCurrentCursorPoint | (internal) | `static func validatedCurrentCursorPoint(     _ ...` |
| 732 | fn | validateHeldButtonTransition | (internal) | `static func validateHeldButtonTransition(     a...` |
| 752 | fn | setLeftButtonDown | (private) | `private func setLeftButtonDown(_ down: Bool, fl...` |
| 765 | fn | armButtonWatchdog | (private) | `private func armButtonWatchdog()` |
| 773 | fn | autoReleaseLeftButton | (private) | `private func autoReleaseLeftButton()` |
| 785 | fn | releaseHeldInput | (internal) | `func releaseHeldInput(lifecycleGeneration: UInt...` |
| 792 | fn | releaseCurrentHeldButton | (private) | `@discardableResult   private func releaseCurren...` |
| 807 | fn | releaseHeldButton | (private) | `private func releaseHeldButton(     at point: C...` |
| 836 | fn | holdLeftButtonForTesting | (internal) | `func holdLeftButtonForTesting(flags: CGEventFlags)` |
| 840 | fn | fireButtonWatchdogForTesting | (internal) | `func fireButtonWatchdogForTesting()` |
| 845 | fn | releaseHeldButtonForTesting | (internal) | `func releaseHeldButtonForTesting(additionalFlag...` |
| 854 | fn | typeTextForTesting | (internal) | `func typeTextForTesting(     _ text: String,   ...` |
| 870 | fn | resolveDisplay | (private) | `private func resolveDisplay(params: OpenClawCom...` |
| 916 | fn | usesScreenshotCoordinates | (private) | `private static func usesScreenshotCoordinates(_...` |
| 920 | fn | requiredReferenceWidth | (private) | `private static func requiredReferenceWidth(_ pa...` |
| 927 | fn | validateDisplayFrame | (internal) | `static func validateDisplayFrame(     _ params:...` |
| 941 | fn | requireKeys | (private) | `private func requireKeys(_ keys: String?) throw...` |
| 948 | fn | scrollDirection | (private) | `private static func scrollDirection(     _ dire...` |
| 961 | fn | rawClick | (private) | `private func rawClick(at point: CGPoint, button...` |
| 987 | fn | rawDrag | (private) | `private func rawDrag(from: CGPoint, to: CGPoint...` |
| 1015 | fn | rawMouseButton | (private) | `private func rawMouseButton(down: Bool, at poin...` |
| 1019 | fn | postMouseButtonEvent | (private) | `private static func postMouseButtonEvent(     _...` |
| 1029 | fn | makeMouseEvent | (private) | `private static func makeMouseEvent(     _ type:...` |
| 1053 | fn | postMouseEvent | (private) | `private static func postMouseEvent(_ event: CGE...` |
| 1061 | fn | postTextGrapheme | (private) | `private static func postTextGrapheme(_ grapheme...` |
| 1096 | fn | rawClickForTesting | (internal) | `func rawClickForTesting(count: Int = 1) throws` |
| 1099 | fn | rawDragForTesting | (internal) | `func rawDragForTesting() async throws` |
| 1107 | fn | rawScroll | (private) | `private func rawScroll(direction: OpenClawCompu...` |
| 1135 | enum | ComputerMouseButton | (private) | `enum ComputerMouseButton` |
| 1166 | struct | ComputerModifiers | (internal) | `struct ComputerModifiers` |
| 1172 | fn | parse | (internal) | `static func parse(_ raw: String?) throws -> Com...` |
