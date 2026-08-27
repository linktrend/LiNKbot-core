# apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatView.swift

[← Back to Module](../modules/apps-shared-OpenClawKit-Sources-OpenClawChatUI/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1344
- **Language:** Swift
- **Symbols:** 41
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 9 | enum | ChatReaderUserTransition | (internal) | `enum ChatReaderUserTransition` |
| 14 | fn | chatReaderUserTransition | (internal) | `func chatReaderUserTransition(   previousID: UU...` |
| 28 | fn | chatReaderHasNewerContent | (internal) | `func chatReaderHasNewerContent(   after message...` |
| 42 | fn | chatReaderShowsJumpToLatest | (internal) | `func chatReaderShowsJumpToLatest(   hasNewerCon...` |
| 54 | fn | chatReaderScrollReleasesFollow | (internal) | `func chatReaderScrollReleasesFollow(_ phase: Sc...` |
| 65 | enum | ScrollFollowTarget | (private) | `enum ScrollFollowTarget` |
| 70 | struct | OpenClawChatDisplayOptions | pub | `struct OpenClawChatDisplayOptions` |
| 72 | method | init | pub | `public init(rawValue: UInt8)` |
| 80 | fn | assistantTrace | pub | `public static func assistantTrace(_ isVisible: ...` |
| 86 | struct | OpenClawChatView | pub | `struct OpenClawChatView` |
| 102 | method | init | pub | `public init(id: String, title: String, prompt: ...` |
| 170 | method | init | pub | `public init(     viewModel: OpenClawChatViewMod...` |
| 470 | fn | messageRow | (private) | `@ViewBuilder   private func messageRow(     for...` |
| 587 | fn | isListenable | (private) | `private func isListenable(_ msg: OpenClawChatMe...` |
| 592 | fn | speechChipIsPreparing | (private) | `private func speechChipIsPreparing(     _ speec...` |
| 802 | fn | errorPresentation | (private) | `private func errorPresentation(     for error: ...` |
| 816 | fn | restoreInitialScrollPosition | (private) | `private func restoreInitialScrollPosition()` |
| 831 | fn | handleTimelineChange | (private) | `private func handleTimelineChange()` |
| 897 | fn | moveScrollPosition | (private) | `private func moveScrollPosition(     to id: UUI...` |
| 914 | fn | dismissKeyboardIfNeeded | (private) | `private func dismissKeyboardIfNeeded()` |
| 926 | mod | extension OpenClawChatView | (internal) | - |
| 927 | fn | mergeToolResults | (private) | `private func mergeToolResults(in messages: [Ope...` |
| 987 | fn | isToolResultMessage | (private) | `private func isToolResultMessage(_ message: Ope...` |
| 992 | fn | shouldDisplayMessage | (private) | `private func shouldDisplayMessage(_ message: Op...` |
| 1018 | fn | primaryText | (private) | `private func primaryText(in message: OpenClawCh...` |
| 1031 | fn | hasInlineAttachments | (private) | `private func hasInlineAttachments(in message: O...` |
| 1042 | fn | toolCalls | (private) | `private func toolCalls(in message: OpenClawChat...` |
| 1052 | fn | inlineToolResults | (private) | `private func inlineToolResults(in message: Open...` |
| 1059 | fn | toolCallIds | (private) | `private func toolCallIds(in message: OpenClawCh...` |
| 1072 | fn | toolResultText | (private) | `private func toolResultText(from message: OpenC...` |
| 1076 | fn | copyMessageButton | (private) | `@ViewBuilder   private func copyMessageButton(f...` |
| 1093 | fn | openFullMessageButton | (private) | `@ViewBuilder   private func openFullMessageButt...` |
| 1116 | fn | rewindMessageButton | (private) | `@ViewBuilder   private func rewindMessageButton...` |
| 1136 | fn | forkMessageButton | (private) | `@ViewBuilder   private func forkMessageButton(f...` |
| 1162 | fn | replyMessageButton | (private) | `@ViewBuilder   private func replyMessageButton(...` |
| 1183 | fn | replySenderLabel | (private) | `private func replySenderLabel(forRole role: Str...` |
| 1189 | fn | copyToClipboard | (private) | `fileprivate static func copyToClipboard(_ text:...` |
| 1200 | struct | ChatAssistantIntroCard | (private) | `struct ChatAssistantIntroCard` |
| 1248 | struct | ChatLoadingBubble | (private) | `struct ChatLoadingBubble` |
| 1266 | struct | ChatNoticeCard | (private) | `struct ChatNoticeCard` |
| 1294 | struct | ChatNoticeBanner | (private) | `struct ChatNoticeBanner` |

## Public API

### `OpenClawChatDisplayOptions`

```
struct OpenClawChatDisplayOptions
```

**Line:** 70 | **Kind:** struct

### `init`

```
public init(rawValue: UInt8)
```

**Line:** 72 | **Kind:** method

### `assistantTrace`

```
public static func assistantTrace(_ isVisible: Bool) -> Self
```

**Line:** 80 | **Kind:** fn

### `OpenClawChatView`

```
struct OpenClawChatView
```

**Line:** 86 | **Kind:** struct

### `init`

```
public init(id: String, title: String, prompt: String)
```

**Line:** 102 | **Kind:** method

### `init`

```
public init(
        viewModel: OpenClawChatViewModel,
        drawsBackground: Bool = true,
        showsSessionSwitcher: Bool = false,
        style: Style = .standard,
        markdownVariant: ChatMarkdownVariant = .standard,
        userAccent: Color? = nil,
        displayOptions: OpenClawChatDisplayOptions? = nil,
        showsAssistantTrace: Bool = false,
        assistantName: String? = nil,
        assistantAvatarText: String? = nil,
        assistantAvatarTint: Color? = nil,
        showsAssistantAvatars: Bool = true,
        composerChrome: ComposerChrome = .full,
        isComposerEnabled: Bool = true,
        isAttachmentInputEnabled: Bool? = nil,
        messagePlaceholder: String? = nil,
        emptyAssistantIntro: String? = nil,
        emptyAssistantPrompts: [StarterPrompt] = [],
        talkControl: OpenClawChatTalkControl? = nil,
        dictationControl: OpenClawChatDictationControl? = nil,
        voiceNoteControl: OpenClawChatVoiceNoteControl? = nil,
        speech: OpenClawChatSpeechController? = nil)
```

**Line:** 170 | **Kind:** method
