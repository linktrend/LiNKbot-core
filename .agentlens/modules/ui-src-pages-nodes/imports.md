# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_nodes[ui-src-pages-nodes] --> src[src]
    ui_src_pages_nodes[ui-src-pages-nodes] --> shared[shared]
    ui_src_pages_nodes[ui-src-pages-nodes] --> __[..]
    ui_src_pages_nodes[ui-src-pages-nodes] --> app[app]
    ui_src_pages_nodes[ui-src-pages-nodes] --> app[app]
    ui_src_pages_nodes[ui-src-pages-nodes] --> components[components]
    ui_src_pages_nodes[ui-src-pages-nodes] --> components[components]
    ui_src_pages_nodes[ui-src-pages-nodes] --> components[components]
    ui_src_pages_nodes[ui-src-pages-nodes] --> components[components]
    ui_src_pages_nodes[ui-src-pages-nodes] --> i18n[i18n]
    ui_src_pages_nodes[ui-src-pages-nodes] --> config[config]
    ui_src_pages_nodes[ui-src-pages-nodes] --> lib[lib]
    ui_src_pages_nodes[ui-src-pages-nodes] --> lib[lib]
    ui_src_pages_nodes[ui-src-pages-nodes] --> nodes[nodes]
    ui_src_pages_nodes[ui-src-pages-nodes] --> nodes[nodes]
    ui_src_pages_nodes[ui-src-pages-nodes] --> lib[lib]
    ui_src_pages_nodes[ui-src-pages-nodes] --> lit[lit]
    ui_src_pages_nodes[ui-src-pages-nodes] --> lit[lit]
    ui_src_pages_nodes[ui-src-pages-nodes] --> lit[lit]
    ui_src_pages_nodes[ui-src-pages-nodes] --> styles[styles]
    ui_src_pages_nodes[ui-src-pages-nodes] --> test_helpers[test-helpers]
    ui_src_pages_nodes[ui-src-pages-nodes] --> _[.]
    ui_src_pages_nodes[ui-src-pages-nodes] --> _[.]
    ui_src_pages_nodes[ui-src-pages-nodes] --> _[.]
    ui_src_pages_nodes[ui-src-pages-nodes] --> _[.]
    ui_src_pages_nodes[ui-src-pages-nodes] --> _[.]
    ui_src_pages_nodes[ui-src-pages-nodes] --> _[.]
    ui_src_pages_nodes[ui-src-pages-nodes] --> _lit[@lit]
    ui_src_pages_nodes[ui-src-pages-nodes] --> _openclaw[@openclaw]
    ui_src_pages_nodes[ui-src-pages-nodes] --> _openclaw[@openclaw]
    ui_src_pages_nodes[ui-src-pages-nodes] --> lit[lit]
    ui_src_pages_nodes[ui-src-pages-nodes] --> lit[lit]
    ui_src_pages_nodes[ui-src-pages-nodes] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../../packages/gateway-protocol/src/client-info.js`
- `../../../../src/shared/device-pairing-access.js`
- `../../app-navigation.ts`
- `../../app/context.ts`
- `../../app/operator-access.ts`
- `../../components/icons.ts`
- `../../components/modal-dialog.ts`
- `../../components/settings-ui.ts`
- `../../components/settings-workspace.ts`
- `../../i18n/index.ts`
- `../../lib/config/index.ts`
- `../../lib/format.ts`
- `../../lib/gateway-errors.ts`
- `../../lib/nodes/index.ts`
- `../../lib/nodes/inventory.ts`
- `../../lib/string-coerce.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/poll-controller.ts`
- `../../lit/subscriptions-controller.ts`
- `../../styles/nodes.css`
- `../../test-helpers/modal-dialog.ts`
- `./nodes-page.ts`
- `./view-exec-approvals.ts`
- `./view-inventory.ts`
- `./view-pending-devices.ts`
- `./view-shared.ts`
- `./view.ts`
- `@lit/context`
- `@openclaw/normalization-core`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `vitest`
