# src/agents/embedded-agent-runner/transcript-file-state.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1015
- **Language:** TypeScript
- **Symbols:** 41
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 24 | type | BranchSummaryEntry | (private) | - |
| 25 | type | CompactionEntry | (private) | - |
| 26 | type | CustomEntry | (private) | - |
| 27 | type | CustomMessageEntry | (private) | - |
| 28 | type | LabelEntry | (private) | - |
| 29 | type | ModelChangeEntry | (private) | - |
| 30 | type | SessionInfoEntry | (private) | - |
| 31 | type | SessionMessageEntry | (private) | - |
| 32 | type | ThinkingLevelChangeEntry | (private) | - |
| 34 | type | TranscriptLeafControlEntry | (private) | - |
| 44 | type | TranscriptPersistedEntry | pub | - |
| 69 | fn | isString | (private) | `function isString(value: unknown): value is str...` |
| 73 | fn | isOptionalString | (private) | `function isOptionalString(value: unknown): bool...` |
| 77 | fn | isTextContent | (private) | `function isTextContent(value: unknown): boolean {` |
| 86 | fn | isThinkingContent | (private) | `function isThinkingContent(value: unknown): boo...` |
| 96 | fn | isImageContent | (private) | `function isImageContent(value: unknown): boolean {` |
| 105 | fn | hasToolCallId | (private) | `function hasToolCallId(value: Record<string, un...` |
| 116 | fn | isToolCallPayload | (private) | `function isToolCallPayload(value: unknown): boo...` |
| 120 | fn | isToolCallContent | (private) | `function isToolCallContent(value: unknown): boo...` |
| 133 | fn | isPersistedContentBlock | (private) | `function isPersistedContentBlock(value: unknown...` |
| 152 | fn | isUserContent | (private) | `function isUserContent(value: unknown): boolean {` |
| 159 | fn | isAssistantContent | (private) | `function isAssistantContent(value: unknown): bo...` |
| 166 | fn | isToolResultContent | (private) | `function isToolResultContent(value: unknown): b...` |
| 170 | fn | isOptionalBoolean | (private) | `function isOptionalBoolean(value: unknown): boo...` |
| 174 | fn | isBashExecutionMessage | (private) | `function isBashExecutionMessage(value: Record<s...` |
| 186 | fn | isAgentMessage | (private) | `function isAgentMessage(value: unknown): boolean {` |
| 211 | fn | hasSessionEntryBase | (private) | `function hasSessionEntryBase(entry: FileEntry):...` |
| 226 | fn | isSessionEntry | (private) | `function isSessionEntry(entry: FileEntry): entr...` |
| 289 | fn | parseLeafControlEntry | (private) | `function parseLeafControlEntry(entry: unknown):` |
| 332 | type | ReadableSessionState | (private) | - |
| 343 | fn | readableSessionState | (private) | `function readableSessionState(fileEntries: File...` |
| 553 | fn | sessionHeaderVersion | (private) | `function sessionHeaderVersion(header: SessionHe...` |
| 557 | fn | generateEntryId | (private) | `function generateEntryId(byId: { has(id: string...` |
| 567 | fn | serializeTranscriptFileEntries | (private) | `function serializeTranscriptFileEntries(entries...` |
| 571 | fn | fileEntryOrMigrationSlot | (private) | `function fileEntryOrMigrationSlot(value: unknow...` |
| 583 | fn | createReadableTranscriptFileState | (private) | `function createReadableTranscriptFileState(para...` |
| 602 | fn | createTranscriptFileStateFromPersistedEntries | pub | `export function createTranscriptFileStateFromPe...` |
| 612 | class | TranscriptFileState | pub | - |
| 965 | fn | readTranscriptFileState | pub | `export async function readTranscriptFileState(s...` |
| 979 | fn | writeTranscriptFileAtomic | pub | `export async function writeTranscriptFileAtomic(` |
| 990 | fn | persistTranscriptStateMutation | pub | `export async function persistTranscriptStateMut...` |

## Public API

### `createTranscriptFileStateFromPersistedEntries`

```
export function createTranscriptFileStateFromPersistedEntries(
```

**Line:** 602 | **Kind:** fn

### `readTranscriptFileState`

```
export async function readTranscriptFileState(sessionFile: string): Promise<TranscriptFileState> {
```

**Line:** 965 | **Kind:** fn

### `writeTranscriptFileAtomic`

```
export async function writeTranscriptFileAtomic(
```

**Line:** 979 | **Kind:** fn

### `persistTranscriptStateMutation`

```
export async function persistTranscriptStateMutation(params: {
```

**Line:** 990 | **Kind:** fn
