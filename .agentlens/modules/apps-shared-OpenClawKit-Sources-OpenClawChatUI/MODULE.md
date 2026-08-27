# Module: apps/shared/OpenClawKit/Sources/OpenClawChatUI

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 72

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/AssistantTextParser.swift` | 153 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatCameraFlipButton.swift` | 214 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatCodeHighlighter.swift` | 418 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatComposer.swift` | 1514 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatComposerTextView.swift` | 424 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatContextUsage.swift` | 285 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatEventText.swift` | 76 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatFullMessageReader.swift` | 92 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatGatewayPayloadCodec.swift` | 158 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatGatewayRequest.swift` | 539 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatHaptics.swift` | 46 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatInlineMath.swift` | 413 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatInlineWidgetView.swift` | 867 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatInputHistory.swift` | 336 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatLinkPreview.swift` | 916 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownBlockSegmenter.swift` | 683 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownBlockViews.swift` | 314 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownPreprocessor.swift` | 223 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMarkdownRenderer.swift` | 583 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMessageViews.swift` | 1088 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatMessageVisibleText.swift` | 40 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatModelPickerStore.swift` | 176 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatModels.swift` | 770 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatPayloadDecoding.swift` | 9 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatPlanPill.swift` | 165 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatQuestionCard.swift` | 808 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatReply.swift` | 92 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatReplyPreview.swift` | 32 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatSessionManagementViews.swift` | 642 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatSessionSidebar.swift` | 362 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatSessionSidebarModel.swift` | 357 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatSessionUnreadPatchGuard.swift` | 144 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatSessions.swift` | 529 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatSheets.swift` | 478 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatSpeechController.swift` | 341 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatStreamingReveal.swift` | 148 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatTalkActivityViews.swift` | 192 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatTheme.swift` | 220 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatToolActivityViews.swift` | 413 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatToolDiff.swift` | 740 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatTranscriptCache.swift` | 1585 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatTranscriptCacheContracts.swift` | 264 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatTranscriptExporter.swift` | 144 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatTransport.swift` | 894 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatTypography.swift` | 109 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatView+Previews.swift` | 264 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatView.swift` | 1344 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel+Attachments.swift` | 236 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel+HistoryReconciliation.swift` | 839 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel+ModelControls.swift` | 306 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel+Outbox.swift` | 978 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel+Plan.swift` | 83 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel+RunSnapshot.swift` | 72 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel+Sending.swift` | 786 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel+SessionActions.swift` | 589 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel+SessionKeys.swift` | 403 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel+Thinking.swift` | 558 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel+ToolActivity.swift` | 25 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel+TranscriptCache.swift` | 88 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel+TransportEvents.swift` | 1036 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatViewModel.swift` | 1583 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatWindowShell.swift` | 567 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/CleanChatComposerControls.swift` | 384 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/OpenClawChatDictationControl.swift` | 38 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/OpenClawChatTalkControl.swift` | 66 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/OpenClawMascotAnimator.swift` | 771 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/OpenClawMascotCanvas+Accessories.swift` | 120 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/OpenClawMascotView.swift` | 696 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/TalkWaveformView.swift` | 590 | 📊 |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/ToolResultTextFormatter.swift` | 155 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/VoiceNoteComposerViews.swift` | 114 |  |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI/VoiceNoteRecorder.swift` | 433 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 0 | 0 | 1 |

## 🟢 Low Priority

### `NOTE` (apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatModels.swift:4)

> keep this file lightweight; decode must be resilient to varying transcript formats.
---

_No import relationships detected._