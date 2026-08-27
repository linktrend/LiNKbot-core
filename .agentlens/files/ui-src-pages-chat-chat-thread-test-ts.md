# ui/src/pages/chat/chat-thread.test.ts

[← Back to Module](../modules/ui-src-pages-chat/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2941
- **Language:** TypeScript
- **Symbols:** 24
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 30 | type | CachedChatItemsProps | (private) | - |
| 31 | type | WorkGroupItem | (private) | - |
| 39 | fn | createProps | (private) | `function createProps(overrides: Partial<CachedC...` |
| 54 | fn | messageGroups | (private) | `function messageGroups(props: Partial<CachedCha...` |
| 58 | fn | firstMessageContent | (private) | `function firstMessageContent(group: MessageGrou...` |
| 63 | fn | requireRecord | (private) | `function requireRecord(value: unknown): Record<...` |
| 70 | fn | requireGroup | (private) | `function requireGroup(value: unknown): MessageG...` |
| 76 | fn | groupAt | (private) | `function groupAt(groups: readonly MessageGroup[...` |
| 80 | fn | messageAt | (private) | `function messageAt(group: MessageGroup, index: ...` |
| 84 | fn | messageRecord | (private) | `function messageRecord(group: MessageGroup, ind...` |
| 89 | fn | collapsedItems | (private) | `const collapsedItems = (props: Partial<CachedCh...` |
| 94 | fn | requireWorkGroup | (private) | `function requireWorkGroup(value: unknown): Work...` |
| 100 | fn | toolResult | (private) | `const toolResult = (id: string, timestamp: numb...` |
| 557 | fn | hasReadingIndicator | (private) | `const hasReadingIndicator = (props: Partial<Cac...` |
| 559 | fn | liveTool | (private) | `const liveTool = (resultReceived: boolean) => ({` |
| 2750 | fn | canvasBlocksIn | (private) | `function canvasBlocksIn(group: MessageGroup): u...` |
| 2754 | fn | isCanvasBlock | (private) | `function isCanvasBlock(block: unknown): boolean {` |
| 2763 | fn | createAssistantCanvasBlock | (private) | `function createAssistantCanvasBlock(params: { s...` |
| 2779 | fn | mcpAppResult | (private) | `function mcpAppResult(viewId: string, toolCallI...` |
| 2803 | fn | mcpAppLiveResult | (private) | `function mcpAppLiveResult(viewId: string, toolC...` |
| 2825 | fn | failedTool | (private) | `function failedTool(timestamp: number) {` |
| 2834 | fn | userMsg | (private) | `function userMsg(text: string, timestamp: numbe...` |
| 2837 | fn | assistantReply | (private) | `function assistantReply(text: string, timestamp...` |
| 2840 | fn | toolGroups | (private) | `function toolGroups(messages: unknown[]): Messa...` |
