# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_components_browser[ui-src-components-browser] --> i18n[i18n]
    ui_src_components_browser[ui-src-components-browser] --> lib[lib]
    ui_src_components_browser[ui-src-components-browser] --> lit[lit]
    ui_src_components_browser[ui-src-components-browser] --> test_helpers[test-helpers]
    ui_src_components_browser[ui-src-components-browser] --> __[..]
    ui_src_components_browser[ui-src-components-browser] --> __[..]
    ui_src_components_browser[ui-src-components-browser] --> __[..]
    ui_src_components_browser[ui-src-components-browser] --> _[.]
    ui_src_components_browser[ui-src-components-browser] --> _[.]
    ui_src_components_browser[ui-src-components-browser] --> _[.]
    ui_src_components_browser[ui-src-components-browser] --> _[.]
    ui_src_components_browser[ui-src-components-browser] --> _[.]
    ui_src_components_browser[ui-src-components-browser] --> _[.]
    ui_src_components_browser[ui-src-components-browser] --> _openclaw[@openclaw]
    ui_src_components_browser[ui-src-components-browser] --> normalization_core[normalization-core]
    ui_src_components_browser[ui-src-components-browser] --> normalization_core[normalization-core]
    ui_src_components_browser[ui-src-components-browser] --> lit[lit]
    ui_src_components_browser[ui-src-components-browser] --> lit[lit]
    ui_src_components_browser[ui-src-components-browser] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../i18n/index.ts`
- `../../lib/open-external-url.ts`
- `../../lit/openclaw-element.ts`
- `../../test-helpers/storage.ts`
- `../dock-panel-layout.ts`
- `../panel-tab-strip.ts`
- `../panel-toggle-contract.ts`
- `./browser-annotation.ts`
- `./browser-client.ts`
- `./browser-panel-tabs.ts`
- `./browser-panel.styles.ts`
- `./browser-panel.ts`
- `./browser-url.ts`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/utf16-slice`
- `lit`
- `lit/decorators.js`
- `vitest`
