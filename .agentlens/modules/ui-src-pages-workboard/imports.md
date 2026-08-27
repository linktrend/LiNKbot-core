# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_workboard[ui-src-pages-workboard] --> src[src]
    ui_src_pages_workboard[ui-src-pages-workboard] --> src[src]
    ui_src_pages_workboard[ui-src-pages-workboard] --> __[..]
    ui_src_pages_workboard[ui-src-pages-workboard] --> app[app]
    ui_src_pages_workboard[ui-src-pages-workboard] --> app[app]
    ui_src_pages_workboard[ui-src-pages-workboard] --> components[components]
    ui_src_pages_workboard[ui-src-pages-workboard] --> components[components]
    ui_src_pages_workboard[ui-src-pages-workboard] --> components[components]
    ui_src_pages_workboard[ui-src-pages-workboard] --> components[components]
    ui_src_pages_workboard[ui-src-pages-workboard] --> components[components]
    ui_src_pages_workboard[ui-src-pages-workboard] --> i18n[i18n]
    ui_src_pages_workboard[ui-src-pages-workboard] --> lib[lib]
    ui_src_pages_workboard[ui-src-pages-workboard] --> lib[lib]
    ui_src_pages_workboard[ui-src-pages-workboard] --> sessions[sessions]
    ui_src_pages_workboard[ui-src-pages-workboard] --> workboard[workboard]
    ui_src_pages_workboard[ui-src-pages-workboard] --> workboard[workboard]
    ui_src_pages_workboard[ui-src-pages-workboard] --> workboard[workboard]
    ui_src_pages_workboard[ui-src-pages-workboard] --> lit[lit]
    ui_src_pages_workboard[ui-src-pages-workboard] --> lit[lit]
    ui_src_pages_workboard[ui-src-pages-workboard] --> styles[styles]
    ui_src_pages_workboard[ui-src-pages-workboard] --> test_helpers[test-helpers]
    ui_src_pages_workboard[ui-src-pages-workboard] --> test_helpers[test-helpers]
    ui_src_pages_workboard[ui-src-pages-workboard] --> _[.]
    ui_src_pages_workboard[ui-src-pages-workboard] --> _[.]
    ui_src_pages_workboard[ui-src-pages-workboard] --> _[.]
    ui_src_pages_workboard[ui-src-pages-workboard] --> _[.]
    ui_src_pages_workboard[ui-src-pages-workboard] --> _lit[@lit]
    ui_src_pages_workboard[ui-src-pages-workboard] --> _openclaw[@openclaw]
    ui_src_pages_workboard[ui-src-pages-workboard] --> normalization_core[normalization-core]
    ui_src_pages_workboard[ui-src-pages-workboard] --> _openclaw[@openclaw]
    ui_src_pages_workboard[ui-src-pages-workboard] --> lit[lit]
    ui_src_pages_workboard[ui-src-pages-workboard] --> lit[lit]
    ui_src_pages_workboard[ui-src-pages-workboard] --> node_fs[node:fs]
    ui_src_pages_workboard[ui-src-pages-workboard] --> node_path[node:path]
    ui_src_pages_workboard[ui-src-pages-workboard] --> playwright[playwright]
    ui_src_pages_workboard[ui-src-pages-workboard] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../../packages/gateway-protocol/src/version.js`
- `../../../../packages/workboard-contract/src/index.js`
- `../../app-navigation.ts`
- `../../app/context.ts`
- `../../app/operator-access.ts`
- `../../components/agent-scope-control.ts`
- `../../components/icons.ts`
- `../../components/modal-dialog.ts`
- `../../components/tooltip.ts`
- `../../components/web-awesome-select.ts`
- `../../i18n/index.ts`
- `../../lib/format.ts`
- `../../lib/plugin-activation.ts`
- `../../lib/sessions/index.ts`
- `../../lib/workboard/capability.ts`
- `../../lib/workboard/card-state.ts`
- `../../lib/workboard/index.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/subscriptions-controller.ts`
- `../../styles/workboard.css`
- `../../test-helpers/control-ui-e2e.ts`
- `../../test-helpers/modal-dialog.ts`
- `./agent-filter.ts`
- `./board-filter.ts`
- `./view.ts`
- `./workboard-select.ts`
- `@lit/context`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/utf16-slice`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `node:fs/promises`
- `node:path`
- `playwright`
- `vitest`
