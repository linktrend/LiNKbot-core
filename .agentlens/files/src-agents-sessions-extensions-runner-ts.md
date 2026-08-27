# src/agents/sessions/extensions/runner.ts

[← Back to Module](../modules/src-agents-sessions-extensions/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1148
- **Language:** TypeScript
- **Symbols:** 29
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 82 | type | BuiltInKeyBindings | (private) | - |
| 112 | interface | BeforeAgentStartCombinedResult | (private) | - |
| 121 | type | RunnerEmitEvent | (private) | - |
| 134 | type | SessionBeforeEvent | (private) | - |
| 145 | type | SessionBeforeEventResult | (private) | - |
| 163 | type | ExtensionErrorListener | pub | - |
| 165 | type | NewSessionHandler | (private) | - |
| 171 | type | ForkHandler | (private) | - |
| 179 | type | NavigateTreeHandler | (private) | - |
| 189 | type | SwitchSessionHandler | (private) | - |
| 194 | type | ReloadHandler | (private) | - |
| 196 | type | ShutdownHandler | pub | - |
| 202 | fn | emitSessionShutdownEvent | pub | `export async function emitSessionShutdownEvent(` |
| 249 | class | ExtensionRunner | pub | - |
| 447 | fn | addDiagnostic | (private) | `const addDiagnostic = (message: string, extensi...` |
| 597 | fn | assertActive | (private) | `const assertActive = () => this.assertActive();` |
| 599 | fn | getUiContext | (private) | `const getUiContext = () => this.uiContext;` |
| 600 | fn | hasUiContext | (private) | `const hasUiContext = () => this.hasUI();` |
| 601 | fn | getCwd | (private) | `const getCwd = () => this.cwd;` |
| 602 | fn | getSessionManager | (private) | `const getSessionManager = () => this.sessionMan...` |
| 603 | fn | getModelRegistry | (private) | `const getModelRegistry = () => this.modelRegistry;` |
| 604 | fn | isIdle | (private) | `const isIdle = () => this.isIdleFn();` |
| 605 | fn | getSignal | (private) | `const getSignal = () => this.getSignalFn();` |
| 606 | fn | abort | (private) | `const abort = () => this.abortFn();` |
| 607 | fn | hasPendingMessages | (private) | `const hasPendingMessages = () => this.hasPendin...` |
| 608 | fn | shutdown | (private) | `const shutdown = () => this.shutdownHandler();` |
| 609 | fn | getContextUsage | (private) | `const getContextUsage = () => this.getContextUs...` |
| 610 | fn | compact | (private) | `const compact = (options?: CompactOptions) => t...` |
| 611 | fn | getSystemPrompt | (private) | `const getSystemPrompt = () => this.getSystemPro...` |

## Public API

### `emitSessionShutdownEvent`

```
export async function emitSessionShutdownEvent(
```

**Line:** 202 | **Kind:** fn
