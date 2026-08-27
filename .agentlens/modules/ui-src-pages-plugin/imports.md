# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_plugin[ui-src-pages-plugin] --> gateway[gateway]
    ui_src_pages_plugin[ui-src-pages-plugin] --> app[app]
    ui_src_pages_plugin[ui-src-pages-plugin] --> app[app]
    ui_src_pages_plugin[ui-src-pages-plugin] --> components[components]
    ui_src_pages_plugin[ui-src-pages-plugin] --> components[components]
    ui_src_pages_plugin[ui-src-pages-plugin] --> i18n[i18n]
    ui_src_pages_plugin[ui-src-pages-plugin] --> chat[chat]
    ui_src_pages_plugin[ui-src-pages-plugin] --> lib[lib]
    ui_src_pages_plugin[ui-src-pages-plugin] --> lit[lit]
    ui_src_pages_plugin[ui-src-pages-plugin] --> lit[lit]
    ui_src_pages_plugin[ui-src-pages-plugin] --> styles[styles]
    ui_src_pages_plugin[ui-src-pages-plugin] --> test_helpers[test-helpers]
    ui_src_pages_plugin[ui-src-pages-plugin] --> _[.]
    ui_src_pages_plugin[ui-src-pages-plugin] --> _[.]
    ui_src_pages_plugin[ui-src-pages-plugin] --> _[.]
    ui_src_pages_plugin[ui-src-pages-plugin] --> _[.]
    ui_src_pages_plugin[ui-src-pages-plugin] --> _lit[@lit]
    ui_src_pages_plugin[ui-src-pages-plugin] --> _openclaw[@openclaw]
    ui_src_pages_plugin[ui-src-pages-plugin] --> lit[lit]
    ui_src_pages_plugin[ui-src-pages-plugin] --> lit[lit]
    ui_src_pages_plugin[ui-src-pages-plugin] --> directives[directives]
    ui_src_pages_plugin[ui-src-pages-plugin] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../../src/gateway/control-ui-contract.js`
- `../../app/context.ts`
- `../../app/operator-access.ts`
- `../../components/icons.ts`
- `../../components/markdown.ts`
- `../../i18n/index.ts`
- `../../lib/chat/tool-display.ts`
- `../../lib/format.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/subscriptions-controller.ts`
- `../../styles/logbook.css`
- `../../test-helpers/wait-for.ts`
- `./logbook-controller.ts`
- `./logbook-view.ts`
- `./plugin-page.ts`
- `./route.ts`
- `@lit/context`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `lit/directives/unsafe-html.js`
- `vitest`
