# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_logs[ui-src-pages-logs] --> src[src]
    ui_src_pages_logs[ui-src-pages-logs] --> __[..]
    ui_src_pages_logs[ui-src-pages-logs] --> app[app]
    ui_src_pages_logs[ui-src-pages-logs] --> components[components]
    ui_src_pages_logs[ui-src-pages-logs] --> components[components]
    ui_src_pages_logs[ui-src-pages-logs] --> components[components]
    ui_src_pages_logs[ui-src-pages-logs] --> i18n[i18n]
    ui_src_pages_logs[ui-src-pages-logs] --> locales[locales]
    ui_src_pages_logs[ui-src-pages-logs] --> lib[lib]
    ui_src_pages_logs[ui-src-pages-logs] --> lib[lib]
    ui_src_pages_logs[ui-src-pages-logs] --> lit[lit]
    ui_src_pages_logs[ui-src-pages-logs] --> lit[lit]
    ui_src_pages_logs[ui-src-pages-logs] --> lit[lit]
    ui_src_pages_logs[ui-src-pages-logs] --> _[.]
    ui_src_pages_logs[ui-src-pages-logs] --> _[.]
    ui_src_pages_logs[ui-src-pages-logs] --> _[.]
    ui_src_pages_logs[ui-src-pages-logs] --> _lit[@lit]
    ui_src_pages_logs[ui-src-pages-logs] --> _openclaw[@openclaw]
    ui_src_pages_logs[ui-src-pages-logs] --> lit[lit]
    ui_src_pages_logs[ui-src-pages-logs] --> lit[lit]
    ui_src_pages_logs[ui-src-pages-logs] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../../packages/terminal-core/src/ansi.js`
- `../../app-navigation.ts`
- `../../app/context.ts`
- `../../components/panel-refresh-status.ts`
- `../../components/settings-ui.ts`
- `../../components/settings-workspace.ts`
- `../../i18n/index.ts`
- `../../i18n/locales/pt-BR.ts`
- `../../lib/gateway-errors.ts`
- `../../lib/string-coerce.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/poll-controller.ts`
- `../../lit/subscriptions-controller.ts`
- `./log-lines.ts`
- `./logs-page.ts`
- `./view.ts`
- `@lit/context`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `vitest`
