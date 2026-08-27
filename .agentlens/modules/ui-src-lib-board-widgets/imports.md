# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_lib_board_widgets[ui-src-lib-board-widgets] --> i18n[i18n]
    ui_src_lib_board_widgets[ui-src-lib-board-widgets] --> sessions[sessions]
    ui_src_lib_board_widgets[ui-src-lib-board-widgets] --> _[.]
    ui_src_lib_board_widgets[ui-src-lib-board-widgets] --> lit[lit]
    ui_src_lib_board_widgets[ui-src-lib-board-widgets] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../i18n/index.ts`
- `../../sessions/session-key.ts`
- `./swarm.ts`
- `lit`
- `vitest`
