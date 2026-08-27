# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_tui_components[src-tui-components] --> src[src]
    src_tui_components[src-tui-components] --> helpers[helpers]
    src_tui_components[src-tui-components] --> agents[agents]
    src_tui_components[src-tui-components] --> __[..]
    src_tui_components[src-tui-components] --> __[..]
    src_tui_components[src-tui-components] --> theme[theme]
    src_tui_components[src-tui-components] --> __[..]
    src_tui_components[src-tui-components] --> _[.]
    src_tui_components[src-tui-components] --> _[.]
    src_tui_components[src-tui-components] --> _[.]
    src_tui_components[src-tui-components] --> _[.]
    src_tui_components[src-tui-components] --> _[.]
    src_tui_components[src-tui-components] --> _[.]
    src_tui_components[src-tui-components] --> _[.]
    src_tui_components[src-tui-components] --> _[.]
    src_tui_components[src-tui-components] --> _[.]
    src_tui_components[src-tui-components] --> _[.]
    src_tui_components[src-tui-components] --> _earendil_works[@earendil-works]
    src_tui_components[src-tui-components] --> normalization_core[normalization-core]
    src_tui_components[src-tui-components] --> normalization_core[normalization-core]
    src_tui_components[src-tui-components] --> chalk[chalk]
    src_tui_components[src-tui-components] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../packages/terminal-core/src/ansi.js`
- `../../../test/helpers/normalize-text.js`
- `../../agents/tool-display.js`
- `../commands.js`
- `../osc8-hyperlinks.js`
- `../theme/theme.js`
- `../tui-formatters.js`
- `./assistant-message.js`
- `./btw-inline-message.js`
- `./chat-log.js`
- `./custom-editor.js`
- `./filterable-select-list.js`
- `./hyperlink-markdown.js`
- `./markdown-message.js`
- `./searchable-select-list.js`
- `./tool-execution.js`
- `./user-message.js`
- `@earendil-works/pi-tui`
- `@openclaw/normalization-core/string-coerce`
- `@openclaw/normalization-core/string-normalization`
- `chalk`
- `vitest`
