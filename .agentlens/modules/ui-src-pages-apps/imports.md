# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_apps[ui-src-pages-apps] --> __[..]
    ui_src_pages_apps[ui-src-pages-apps] --> app[app]
    ui_src_pages_apps[ui-src-pages-apps] --> app[app]
    ui_src_pages_apps[ui-src-pages-apps] --> app[app]
    ui_src_pages_apps[ui-src-pages-apps] --> components[components]
    ui_src_pages_apps[ui-src-pages-apps] --> components[components]
    ui_src_pages_apps[ui-src-pages-apps] --> i18n[i18n]
    ui_src_pages_apps[ui-src-pages-apps] --> lib[lib]
    ui_src_pages_apps[ui-src-pages-apps] --> lit[lit]
    ui_src_pages_apps[ui-src-pages-apps] --> lit[lit]
    ui_src_pages_apps[ui-src-pages-apps] --> styles[styles]
    ui_src_pages_apps[ui-src-pages-apps] --> about[about]
    ui_src_pages_apps[ui-src-pages-apps] --> _[.]
    ui_src_pages_apps[ui-src-pages-apps] --> _[.]
    ui_src_pages_apps[ui-src-pages-apps] --> _lit[@lit]
    ui_src_pages_apps[ui-src-pages-apps] --> _openclaw[@openclaw]
    ui_src_pages_apps[ui-src-pages-apps] --> lit[lit]
    ui_src_pages_apps[ui-src-pages-apps] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../app-navigation.ts`
- `../../app/context.ts`
- `../../app/operator-access.ts`
- `../../app/public-assets.ts`
- `../../components/icons.ts`
- `../../components/settings-workspace.ts`
- `../../i18n/index.ts`
- `../../lib/external-link.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/subscriptions-controller.ts`
- `../../styles/apps.css`
- `../about/brand-icons.ts`
- `./brand-icons.ts`
- `./view.ts`
- `@lit/context`
- `@openclaw/uirouter`
- `lit`
- `vitest`
