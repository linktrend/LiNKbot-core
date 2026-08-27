# src/auto-reply/commands-registry.shared.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1062
- **Language:** TypeScript
- **Symbols:** 7
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 15 | type | ListThinkingLevels | (private) | - |
| 29 | type | DefineChatCommandInput | (private) | - |
| 53 | fn | shouldForwardModelCommandToServer | pub | `export function shouldForwardModelCommandToServ...` |
| 60 | fn | defineChatCommand | pub | `export function defineChatCommand(command: Defi...` |
| 90 | fn | registerAlias | (private) | `function registerAlias(commands: ChatCommandDef...` |
| 120 | fn | assertCommandRegistry | pub | `export function assertCommandRegistry(commands:...` |
| 171 | fn | buildBuiltinChatCommands | pub | `export function buildBuiltinChatCommands(` |

## Public API

### `shouldForwardModelCommandToServer`

```
export function shouldForwardModelCommandToServer(rawArgs: string): boolean {
```

**Line:** 53 | **Kind:** fn

### `defineChatCommand`

```
export function defineChatCommand(command: DefineChatCommandInput): ChatCommandDefinition {
```

**Line:** 60 | **Kind:** fn

### `assertCommandRegistry`

```
export function assertCommandRegistry(commands: ChatCommandDefinition[]): void {
```

**Line:** 120 | **Kind:** fn

### `buildBuiltinChatCommands`

```
export function buildBuiltinChatCommands(
```

**Line:** 171 | **Kind:** fn
