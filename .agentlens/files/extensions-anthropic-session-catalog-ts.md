# extensions/anthropic/session-catalog.ts

[← Back to Module](../modules/extensions-anthropic/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1514
- **Language:** TypeScript
- **Symbols:** 43
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 75 | type | SessionIndexEntry | (private) | - |
| 89 | type | DesktopSessionMetadata | (private) | - |
| 101 | type | CatalogRecord | (private) | - |
| 105 | type | CatalogDiscoveryCacheEntry | (private) | - |
| 127 | fn | cacheCatalogDiscovery | (private) | `function cacheCatalogDiscovery(filePath: string...` |
| 139 | fn | optionalString | (private) | `function optionalString(value: unknown, maxLeng...` |
| 147 | fn | timestampMs | (private) | `function timestampMs(value: unknown): number | ...` |
| 158 | fn | isWithin | (private) | `function isWithin(root: string, candidate: stri...` |
| 163 | fn | safeSessionFile | (private) | `async function safeSessionFile(` |
| 184 | fn | readJsonFile | (private) | `async function readJsonFile(filePath: string): ...` |
| 192 | fn | childDirectories | (private) | `async function childDirectories(root: string): ...` |
| 202 | fn | projectsDir | (private) | `function projectsDir(homeDir: string): string {` |
| 206 | fn | desktopSessionsDir | (private) | `function desktopSessionsDir(homeDir: string): s...` |
| 210 | fn | currentHomeDir | (private) | `function currentHomeDir(env: NodeJS.ProcessEnv ...` |
| 214 | fn | readDesktopMetadata | (private) | `async function readDesktopMetadata(homeDir: str...` |
| 255 | fn | readIndexRecords | (private) | `async function readIndexRecords(homeDir: string...` |
| 319 | fn | locateSessionFile | (private) | `async function locateSessionFile(homeDir: strin...` |
| 335 | fn | discoverCliRecords | (private) | `async function discoverCliRecords(` |
| 563 | fn | listClaudeSessions | (private) | `async function listClaudeSessions(homeDir = cur...` |
| 606 | fn | encodeOffset | (private) | `function encodeOffset(offset: number): string {` |
| 610 | fn | decodeOffset | (private) | `function decodeOffset(cursor: string | undefine...` |
| 632 | fn | readLimit | (private) | `function readLimit(value: unknown, fallback: nu...` |
| 642 | fn | readRequiredCursor | (private) | `function readRequiredCursor(value: unknown, mes...` |
| 649 | fn | readOptionalCursor | (private) | `function readOptionalCursor(value: unknown, lab...` |
| 656 | fn | readListParams | (private) | `function readListParams(value: unknown): {` |
| 681 | fn | listLocalClaudeSessionPage | pub | `export async function listLocalClaudeSessionPage(` |
| 706 | fn | readTranscriptParams | (private) | `function readTranscriptParams(` |
| 735 | fn | readLocalClaudeTranscriptPage | pub | `export async function readLocalClaudeTranscript...` |
| 839 | fn | readNodePageCursor | (private) | `function readNodePageCursor(` |
| 852 | fn | parseCatalogPage | (private) | `function parseCatalogPage(value: unknown): Clau...` |
| 929 | fn | unwrapNodePayload | (private) | `function unwrapNodePayload(value: unknown): unk...` |
| 936 | fn | parseGatewayQuery | (private) | `function parseGatewayQuery(value: unknown): {` |
| 993 | fn | listClaudeSessionCatalog | (private) | `async function listClaudeSessionCatalog(params: {` |
| 1141 | fn | readClaudeSessionTranscript | (private) | `async function readClaudeSessionTranscript(para...` |
| 1205 | fn | readBoundedClaudeHistory | (private) | `async function readBoundedClaudeHistory(params: {` |
| 1237 | fn | resolveNodeClaudeRecord | (private) | `async function resolveNodeClaudeRecord(params: {` |
| 1268 | fn | continueClaudeSession | (private) | `async function continueClaudeSession(` |
| 1274 | fn | linkSession | (private) | `const linkSession = async (sessionKey: string, ...` |
| 1293 | fn | operation | (private) | `const operation = (async () => {` |
| 1394 | fn | toGenericClaudeItem | (private) | `function toGenericClaudeItem(item: ClaudeTransc...` |
| 1419 | fn | toGenericClaudeHost | (private) | `function toGenericClaudeHost(` |
| 1463 | fn | registerClaudeSessionCatalog | pub | `export function registerClaudeSessionCatalog(ap...` |
| 1472 | fn | mapHost | (private) | `const mapHost = (host: ClaudeSessionCatalogHost...` |

## Public API

### `listLocalClaudeSessionPage`

```
export async function listLocalClaudeSessionPage(
```

**Line:** 681 | **Kind:** fn

### `readLocalClaudeTranscriptPage`

```
export async function readLocalClaudeTranscriptPage(
```

**Line:** 735 | **Kind:** fn

### `registerClaudeSessionCatalog`

```
export function registerClaudeSessionCatalog(api: OpenClawPluginApi): void {
```

**Line:** 1463 | **Kind:** fn
