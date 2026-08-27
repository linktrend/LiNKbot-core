# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_profile[ui-src-pages-profile] --> __[..]
    ui_src_pages_profile[ui-src-pages-profile] --> app[app]
    ui_src_pages_profile[ui-src-pages-profile] --> app[app]
    ui_src_pages_profile[ui-src-pages-profile] --> components[components]
    ui_src_pages_profile[ui-src-pages-profile] --> components[components]
    ui_src_pages_profile[ui-src-pages-profile] --> components[components]
    ui_src_pages_profile[ui-src-pages-profile] --> components[components]
    ui_src_pages_profile[ui-src-pages-profile] --> i18n[i18n]
    ui_src_pages_profile[ui-src-pages-profile] --> lib[lib]
    ui_src_pages_profile[ui-src-pages-profile] --> lib[lib]
    ui_src_pages_profile[ui-src-pages-profile] --> lib[lib]
    ui_src_pages_profile[ui-src-pages-profile] --> lib[lib]
    ui_src_pages_profile[ui-src-pages-profile] --> sessions[sessions]
    ui_src_pages_profile[ui-src-pages-profile] --> lit[lit]
    ui_src_pages_profile[ui-src-pages-profile] --> styles[styles]
    ui_src_pages_profile[ui-src-pages-profile] --> test_helpers[test-helpers]
    ui_src_pages_profile[ui-src-pages-profile] --> test_helpers[test-helpers]
    ui_src_pages_profile[ui-src-pages-profile] --> config[config]
    ui_src_pages_profile[ui-src-pages-profile] --> usage[usage]
    ui_src_pages_profile[ui-src-pages-profile] --> _[.]
    ui_src_pages_profile[ui-src-pages-profile] --> _[.]
    ui_src_pages_profile[ui-src-pages-profile] --> _[.]
    ui_src_pages_profile[ui-src-pages-profile] --> _[.]
    ui_src_pages_profile[ui-src-pages-profile] --> _[.]
    ui_src_pages_profile[ui-src-pages-profile] --> _lit[@lit]
    ui_src_pages_profile[ui-src-pages-profile] --> _openclaw[@openclaw]
    ui_src_pages_profile[ui-src-pages-profile] --> lit[lit]
    ui_src_pages_profile[ui-src-pages-profile] --> lit[lit]
    ui_src_pages_profile[ui-src-pages-profile] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../app-navigation.ts`
- `../../app/context.ts`
- `../../app/user-profile.ts`
- `../../components/icons.ts`
- `../../components/settings-ui.ts`
- `../../components/settings-workspace.ts`
- `../../components/viewer-facepile.ts`
- `../../i18n/index.ts`
- `../../lib/avatar.ts`
- `../../lib/format.ts`
- `../../lib/gateway-errors.ts`
- `../../lib/identity-avatar.ts`
- `../../lib/sessions/index.ts`
- `../../lit/openclaw-element.ts`
- `../../styles/profile.css`
- `../../test-helpers/application-context.ts`
- `../../test-helpers/wait-for.ts`
- `../config/settings-targets.ts`
- `../usage/refresh-policy.ts`
- `./avatar-processing.ts`
- `./identity-section.ts`
- `./profile-page.ts`
- `./profile-stat-sections.ts`
- `./stats.ts`
- `@lit/context`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `vitest`
