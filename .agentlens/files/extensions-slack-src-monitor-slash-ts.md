# extensions/slack/src/monitor/slash.ts

[← Back to Module](../modules/extensions-slack-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1117
- **Language:** TypeScript
- **Symbols:** 17
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 96 | fn | resolveSlackCommandMenuModelContext | (private) | `function resolveSlackCommandMenuModelContext(pa...` |
| 148 | type | EncodedMenuChoice | (private) | - |
| 151 | fn | buildSlackArgMenuConfirm | (private) | `function buildSlackArgMenuConfirm(params: { com...` |
| 168 | fn | storeSlackExternalArgMenu | (private) | `function storeSlackExternalArgMenu(params: {` |
| 178 | fn | readSlackExternalArgMenuToken | (private) | `function readSlackExternalArgMenuToken(raw: unk...` |
| 182 | fn | encodeSlackCommandArgValue | (private) | `function encodeSlackCommandArgValue(parts: {` |
| 197 | fn | parseSlackCommandArgValue | (private) | `function parseSlackCommandArgValue(raw?: string...` |
| 214 | fn | decode | (private) | `const decode = (text: string) => {` |
| 236 | fn | buildSlackArgMenuOptions | (private) | `function buildSlackArgMenuOptions(choices: Enco...` |
| 246 | fn | buildSlackCommandArgMenuBlocks | (private) | `function buildSlackCommandArgMenuBlocks(params: {` |
| 374 | type | SlackCommandRegistration | (private) | - |
| 379 | fn | registerSlackMonitorSlashCommands | pub | `export async function registerSlackMonitorSlash...` |
| 396 | fn | handleSlashCommand | (private) | `const handleSlashCommand = async (p: {` |
| 590 | fn | resolveSlashRoute | (private) | `const resolveSlashRoute = async () => {` |
| 780 | fn | deliverSlashPayloads | (private) | `const deliverSlashPayloads = async (replies: Re...` |
| 943 | fn | registerArgOptions | (private) | `const registerArgOptions = () => {` |
| 1019 | fn | registerArgAction | (private) | `const registerArgAction = (actionId: string | R...` |

## Public API

### `registerSlackMonitorSlashCommands`

```
export async function registerSlackMonitorSlashCommands(params: {
```

**Line:** 379 | **Kind:** fn
