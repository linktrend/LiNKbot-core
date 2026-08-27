# extensions/tlon/src/monitor/index.ts

[← Back to Module](../modules/extensions-tlon-src-monitor/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1544
- **Language:** TypeScript
- **Symbols:** 12
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 53 | type | MonitorTlonOpts | (private) | - |
| 59 | fn | readNumber | (private) | `function readNumber(record: Record<string, unkn...` |
| 63 | fn | monitorTlonProvider | pub | `export async function monitorTlonProvider(opts:...` |
| 97 | fn | authenticateWithRetry | (private) | `async function authenticateWithRetry(maxAttempt...` |
| 188 | fn | migrateConfigToSettings | (private) | `async function migrateConfigToSettings() {` |
| 272 | fn | isOwner | (private) | `function isOwner(ship: string): boolean {` |
| 284 | fn | extractDmPartnerShip | (private) | `function extractDmPartnerShip(whom: unknown): s...` |
| 296 | fn | processMessage | (private) | `const processMessage = async (params: {` |
| 589 | fn | rememberThreadParticipation | (private) | `const rememberThreadParticipation = (result: { ...` |
| 744 | fn | handleChannelsFirehose | (private) | `const handleChannelsFirehose = async (` |
| 900 | fn | handleChatFirehose | (private) | `const handleChatFirehose = async (` |
| 1346 | fn | processPendingInvites | (private) | `const processPendingInvites = async (foreigns: ...` |

## Public API

### `monitorTlonProvider`

```
export async function monitorTlonProvider(opts: MonitorTlonOpts = {}): Promise<void> {
```

**Line:** 63 | **Kind:** fn

## Memory Markers

### 🟢 `NOTE` (line 1185)

> we don't remove channels from watchedChannels to avoid missing messages
