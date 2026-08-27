# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_lib_chat[ui-src-lib-chat] --> Resources[Resources]
    ui_src_lib_chat[ui-src-lib-chat] --> agents[agents]
    ui_src_lib_chat[ui-src-lib-chat] --> agents[agents]
    ui_src_lib_chat[ui-src-lib-chat] --> auto_reply[auto-reply]
    ui_src_lib_chat[ui-src-lib-chat] --> queue[queue]
    ui_src_lib_chat[ui-src-lib-chat] --> reply[reply]
    ui_src_lib_chat[ui-src-lib-chat] --> chat[chat]
    ui_src_lib_chat[ui-src-lib-chat] --> chat[chat]
    ui_src_lib_chat[ui-src-lib-chat] --> media[media]
    ui_src_lib_chat[ui-src-lib-chat] --> shared[shared]
    ui_src_lib_chat[ui-src-lib-chat] --> shared[shared]
    ui_src_lib_chat[ui-src-lib-chat] --> shared[shared]
    ui_src_lib_chat[ui-src-lib-chat] --> utils[utils]
    ui_src_lib_chat[ui-src-lib-chat] --> utils[utils]
    ui_src_lib_chat[ui-src-lib-chat] --> app[app]
    ui_src_lib_chat[ui-src-lib-chat] --> i18n[i18n]
    ui_src_lib_chat[ui-src-lib-chat] --> test_helpers[test-helpers]
    ui_src_lib_chat[ui-src-lib-chat] --> __[..]
    ui_src_lib_chat[ui-src-lib-chat] --> __[..]
    ui_src_lib_chat[ui-src-lib-chat] --> __[..]
    ui_src_lib_chat[ui-src-lib-chat] --> __[..]
    ui_src_lib_chat[ui-src-lib-chat] --> __[..]
    ui_src_lib_chat[ui-src-lib-chat] --> __[..]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> _[.]
    ui_src_lib_chat[ui-src-lib-chat] --> media_core[media-core]
    ui_src_lib_chat[ui-src-lib-chat] --> _openclaw[@openclaw]
    ui_src_lib_chat[ui-src-lib-chat] --> normalization_core[normalization-core]
    ui_src_lib_chat[ui-src-lib-chat] --> normalization_core[normalization-core]
    ui_src_lib_chat[ui-src-lib-chat] --> node_fs[node:fs]
    ui_src_lib_chat[ui-src-lib-chat] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../../apps/shared/OpenClawKit/Sources/OpenClawKit/Resources/tool-display.json`
- `../../../../src/agents/internal-runtime-context.js`
- `../../../../src/agents/tool-display-common.js`
- `../../../../src/auto-reply/commands-registry.shared.js`
- `../../../../src/auto-reply/reply/queue/normalize.js`
- `../../../../src/auto-reply/reply/strip-inbound-meta.js`
- `../../../../src/chat/canvas-render.js`
- `../../../../src/chat/tool-content.js`
- `../../../../src/media/parse.js`
- `../../../../src/shared/chat-envelope.js`
- `../../../../src/shared/chat-message-content.js`
- `../../../../src/shared/fast-mode.js`
- `../../../../src/utils/directive-tags.js`
- `../../../../src/utils/message-channel-constants.js`
- `../../app/settings.js`
- `../../i18n/index.ts`
- `../../test-helpers/chat-model.ts`
- `../browser-redact.ts`
- `../media-file-extension.ts`
- `../select-options.ts`
- `../session-model-defaults.ts`
- `../string-coerce.ts`
- `../strip-thinking-tags.ts`
- `./commands.ts`
- `./current-user-identity.ts`
- `./follow-up-mode.js`
- `./message-extract.ts`
- `./message-normalizer.ts`
- `./model-ref.ts`
- `./model-select-state.ts`
- `./sender-label.ts`
- `./session-diff.ts`
- `./side-question.ts`
- `./thinking.ts`
- `./tool-call-diff.ts`
- `./tool-call-grouping.ts`
- `./tool-call-patch.ts`
- `./tool-call-view.ts`
- `./tool-display.ts`
- `@openclaw/media-core/constants`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/utf16-slice`
- `node:fs/promises`
- `vitest`
