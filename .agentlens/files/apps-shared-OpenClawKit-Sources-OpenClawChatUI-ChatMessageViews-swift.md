# apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMessageViews.swift

[← Back to Module](../modules/apps-shared-OpenClawKit-Sources-OpenClawChatUI/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1088
- **Language:** Swift
- **Symbols:** 38
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 5 | enum | ChatUIConstants | (private) | `enum ChatUIConstants` |
| 10 | struct | ChatAgentAvatar | (internal) | `struct ChatAgentAvatar` |
| 63 | struct | ChatBubbleShape | (private) | `struct ChatBubbleShape` |
| 76 | fn | inset | (internal) | `func inset(by amount: CGFloat) -> ChatBubbleShape` |
| 82 | fn | path | (internal) | `func path(in rect: CGRect) -> Path` |
| 94 | fn | rightTailPath | (private) | `private func rightTailPath(in rect: CGRect, rad...` |
| 139 | fn | leftTailPath | (private) | `private func leftTailPath(in rect: CGRect, radi...` |
| 185 | fn | addBottomEdge | (private) | `private func addBottomEdge(     path: inout Pat...` |
| 203 | struct | ChatMessageBubble | (internal) | `struct ChatMessageBubble` |
| 264 | struct | ChatMessageBody | (private) | `struct ChatMessageBody` |
| 319 | fn | messageContent | (private) | `private func messageContent(text: String, textC...` |
| 360 | fn | usageLine | (private) | `private func usageLine(_ presentation: ChatMess...` |
| 472 | fn | usageTint | (private) | `private func usageTint(_ pressure: ChatMessageU...` |
| 548 | struct | AttachmentRow | (private) | `struct AttachmentRow` |
| 579 | struct | ChatTypingIndicatorBubble | (internal) | `struct ChatTypingIndicatorBubble` |
| 616 | struct | ChatSpeechStatusChip | (internal) | `struct ChatSpeechStatusChip` |
| 643 | struct | ChatOutboxStatusLabel | (internal) | `struct ChatOutboxStatusLabel` |
| 707 | mod | extension ChatTypingIndicatorBubble | (internal) | - |
| 719 | struct | OpenClawAssistantBubblesInCleanChromeKey | (private) | `struct OpenClawAssistantBubblesInCleanChromeKey` |
| 723 | mod | extension EnvironmentValues | (internal) | - |
| 734 | struct | AssistantBubbleContainerStyle | (private) | `struct AssistantBubbleContainerStyle` |
| 739 | fn | body | (internal) | `func body(content: Content) -> some View` |
| 757 | mod | extension View | (internal) | - |
| 758 | fn | assistantBubbleContainerStyle | (private) | `fileprivate func assistantBubbleContainerStyle(...` |
| 765 | struct | ChatStreamingAssistantBubble | (internal) | `struct ChatStreamingAssistantBubble` |
| 800 | struct | ChatPendingToolsBubble | (internal) | `struct ChatPendingToolsBubble` |
| 823 | mod | extension ChatPendingToolsBubble | (internal) | - |
| 829 | struct | TypingDots | (private) | `struct TypingDots` |
| 859 | fn | updateAnimationState | (private) | `private func updateAnimationState()` |
| 869 | struct | ChatAssistantTextBody | (private) | `struct ChatAssistantTextBody` |
| 909 | struct | ChatStreamingAssistantTextBody | (private) | `struct ChatStreamingAssistantTextBody` |
| 920 | method | init | (internal) | `init(text: String, markdownVariant: ChatMarkdow...` |
| 972 | fn | render | (private) | `private func render(now: TimeInterval?) -> some...` |
| 997 | fn | reveal | (private) | `private func reveal(segmentIndex: Int, now: Tim...` |
| 1008 | fn | updateSnapshot | (private) | `private func updateSnapshot()` |
| 1030 | fn | futureDeadline | (private) | `private func futureDeadline(     now: TimeInter...` |
| 1057 | method | init | (internal) | `init(text: String, includesThinking: Bool)` |
| 1078 | fn | prose | (internal) | `func prose(at location: ProseLocation) -> ChatM...` |
