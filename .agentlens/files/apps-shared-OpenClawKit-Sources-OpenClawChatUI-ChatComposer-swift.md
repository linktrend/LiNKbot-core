# apps/shared/OpenClawKit/Sources/OpenClawChatUI/ChatComposer.swift

[← Back to Module](../modules/apps-shared-OpenClawKit-Sources-OpenClawChatUI/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1514
- **Language:** Swift
- **Symbols:** 29
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 17 | struct | OpenClawSendableCameraImage | (private) | `struct OpenClawSendableCameraImage` |
| 22 | struct | OpenClawChatAttachmentCaptureOwner | (private) | `struct OpenClawChatAttachmentCaptureOwner` |
| 30 | struct | SlashPanelHeightKey | (private) | `struct SlashPanelHeightKey` |
| 32 | fn | reduce | (internal) | `static func reduce(value: inout CGFloat, nextVa...` |
| 37 | struct | OpenClawChatComposerPresentationOwner | (internal) | `struct OpenClawChatComposerPresentationOwner` |
| 40 | method | init | (internal) | `@MainActor   init(viewModel: OpenClawChatViewMo...` |
| 48 | struct | OpenClawChatComposer | (internal) | `struct OpenClawChatComposer` |
| 267 | fn | attachmentCaptureOwner | (private) | `private func attachmentCaptureOwner() -> OpenCl...` |
| 283 | fn | presentPhotoPicker | (private) | `private func presentPhotoPicker()` |
| 399 | fn | contextUsageIndicator | (private) | `private func contextUsageIndicator(_ fraction: ...` |
| 537 | fn | modelOptions | (private) | `private func modelOptions(_ models: [OpenClawCh...` |
| 816 | fn | talkHelpText | (private) | `private func talkHelpText(_ talkControl: OpenCl...` |
| 907 | mod | extension OpenClawChatComposer | (internal) | - |
| 1010 | fn | slashCommandRow | (private) | `private func slashCommandRow(     _ command: Op...` |
| 1061 | fn | selectSlashCommand | (private) | `private func selectSlashCommand(_ command: Open...` |
| 1072 | fn | setSlashPanelPresented | (private) | `private func setSlashPanelPresented(_ presented...` |
| 1104 | fn | updateSlashPopoverPresentation | (private) | `private func updateSlashPopoverPresentation()` |
| 1124 | fn | handleComposerKeyCommand | (private) | `private func handleComposerKeyCommand(     _ co...` |
| 1169 | mod | extension OpenClawChatComposer | (internal) | - |
| 1330 | fn | stageCompletedVoiceNoteIfNeeded | (private) | `private func stageCompletedVoiceNoteIfNeeded()` |
| 1344 | fn | cancelActiveVoiceNoteIfNeeded | (private) | `private func cancelActiveVoiceNoteIfNeeded()` |
| 1360 | fn | pickFilesMac | (private) | `private func pickFilesMac()` |
| 1372 | fn | handleDrop | (private) | `private func handleDrop(_ providers: [NSItemPro...` |
| 1390 | fn | handleFileImport | (private) | `private func handleFileImport(     _ result: Re...` |
| 1410 | fn | addCameraImage | (private) | `private func addCameraImage(_ image: UIImage, o...` |
| 1445 | fn | cancelActiveCameraEncoding | (private) | `private func cancelActiveCameraEncoding()` |
| 1453 | fn | stagePhotosPickerItems | (private) | `private func stagePhotosPickerItems(     _ item...` |
| 1475 | fn | loadPhotosPickerItems | (private) | `private func loadPhotosPickerItems(     _ items...` |
| 1509 | fn | sendDraftIfEnabled | (private) | `private func sendDraftIfEnabled()` |
