# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_activity[ui-src-pages-activity] --> __[..]
    ui_src_pages_activity[ui-src-pages-activity] --> app[app]
    ui_src_pages_activity[ui-src-pages-activity] --> app[app]
    ui_src_pages_activity[ui-src-pages-activity] --> components[components]
    ui_src_pages_activity[ui-src-pages-activity] --> components[components]
    ui_src_pages_activity[ui-src-pages-activity] --> components[components]
    ui_src_pages_activity[ui-src-pages-activity] --> i18n[i18n]
    ui_src_pages_activity[ui-src-pages-activity] --> lib[lib]
    ui_src_pages_activity[ui-src-pages-activity] --> sessions[sessions]
    ui_src_pages_activity[ui-src-pages-activity] --> sessions[sessions]
    ui_src_pages_activity[ui-src-pages-activity] --> lib[lib]
    ui_src_pages_activity[ui-src-pages-activity] --> lit[lit]
    ui_src_pages_activity[ui-src-pages-activity] --> lit[lit]
    ui_src_pages_activity[ui-src-pages-activity] --> styles[styles]
    ui_src_pages_activity[ui-src-pages-activity] --> _[.]
    ui_src_pages_activity[ui-src-pages-activity] --> _[.]
    ui_src_pages_activity[ui-src-pages-activity] --> _[.]
    ui_src_pages_activity[ui-src-pages-activity] --> _lit[@lit]
    ui_src_pages_activity[ui-src-pages-activity] --> _openclaw[@openclaw]
    ui_src_pages_activity[ui-src-pages-activity] --> lit[lit]
    ui_src_pages_activity[ui-src-pages-activity] --> lit[lit]
    ui_src_pages_activity[ui-src-pages-activity] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../app-navigation.ts`
- `../../app/context.ts`
- `../../app/settings.ts`
- `../../components/icons.ts`
- `../../components/settings-ui.ts`
- `../../components/settings-workspace.ts`
- `../../i18n/index.ts`
- `../../lib/format.ts`
- `../../lib/sessions/index.ts`
- `../../lib/sessions/session-key.ts`
- `../../lib/string-coerce.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/subscriptions-controller.ts`
- `../../styles/activity.css`
- `./activity-page.ts`
- `./tool-activity.ts`
- `./view.ts`
- `@lit/context`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `vitest`
