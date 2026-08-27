# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_new_session[ui-src-pages-new-session] --> api[api]
    ui_src_pages_new_session[ui-src-pages-new-session] --> app[app]
    ui_src_pages_new_session[ui-src-pages-new-session] --> app[app]
    ui_src_pages_new_session[ui-src-pages-new-session] --> app[app]
    ui_src_pages_new_session[ui-src-pages-new-session] --> app[app]
    ui_src_pages_new_session[ui-src-pages-new-session] --> components[components]
    ui_src_pages_new_session[ui-src-pages-new-session] --> components[components]
    ui_src_pages_new_session[ui-src-pages-new-session] --> components[components]
    ui_src_pages_new_session[ui-src-pages-new-session] --> i18n[i18n]
    ui_src_pages_new_session[ui-src-pages-new-session] --> chat[chat]
    ui_src_pages_new_session[ui-src-pages-new-session] --> sessions[sessions]
    ui_src_pages_new_session[ui-src-pages-new-session] --> sessions[sessions]
    ui_src_pages_new_session[ui-src-pages-new-session] --> lib[lib]
    ui_src_pages_new_session[ui-src-pages-new-session] --> lib[lib]
    ui_src_pages_new_session[ui-src-pages-new-session] --> lit[lit]
    ui_src_pages_new_session[ui-src-pages-new-session] --> lit[lit]
    ui_src_pages_new_session[ui-src-pages-new-session] --> styles[styles]
    ui_src_pages_new_session[ui-src-pages-new-session] --> styles[styles]
    ui_src_pages_new_session[ui-src-pages-new-session] --> test_helpers[test-helpers]
    ui_src_pages_new_session[ui-src-pages-new-session] --> chat[chat]
    ui_src_pages_new_session[ui-src-pages-new-session] --> chat[chat]
    ui_src_pages_new_session[ui-src-pages-new-session] --> components[components]
    ui_src_pages_new_session[ui-src-pages-new-session] --> components[components]
    ui_src_pages_new_session[ui-src-pages-new-session] --> components[components]
    ui_src_pages_new_session[ui-src-pages-new-session] --> chat[chat]
    ui_src_pages_new_session[ui-src-pages-new-session] --> chat[chat]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _[.]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _lit[@lit]
    ui_src_pages_new_session[ui-src-pages-new-session] --> _openclaw[@openclaw]
    ui_src_pages_new_session[ui-src-pages-new-session] --> lit[lit]
    ui_src_pages_new_session[ui-src-pages-new-session] --> lit[lit]
    ui_src_pages_new_session[ui-src-pages-new-session] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../api/gateway.ts`
- `../../app/context.ts`
- `../../app/native-window-drag.ts`
- `../../app/operator-access.ts`
- `../../app/settings.ts`
- `../../components/icons.ts`
- `../../components/tooltip.ts`
- `../../components/web-awesome-popover.ts`
- `../../i18n/index.ts`
- `../../lib/chat/model-ref.ts`
- `../../lib/sessions/index.ts`
- `../../lib/sessions/session-key.ts`
- `../../lib/string-coerce.ts`
- `../../lib/uuid.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/subscriptions-controller.ts`
- `../../styles/chat.css`
- `../../styles/new-session.css`
- `../../test-helpers/wait-for.ts`
- `../chat/attachment-api.ts`
- `../chat/attachment-payload-store.ts`
- `../chat/components/chat-attachments.ts`
- `../chat/components/chat-model-controls.ts`
- `../chat/components/chat-welcome.ts`
- `../chat/composer-persistence.ts`
- `../chat/initial-turn-handoff.ts`
- `./attachment-draft.ts`
- `./catalog-target.ts`
- `./cloud-profile-discovery.ts`
- `./cloud-recovery-state.ts`
- `./cloud-recovery.ts`
- `./cloud-submit.ts`
- `./cloud-target.ts`
- `./composer.ts`
- `./create-params.ts`
- `./discovery.ts`
- `./folder-browser.ts`
- `./location.ts`
- `./model-control.ts`
- `./path.ts`
- `./rejected-initial-turn.ts`
- `./target-controls.ts`
- `@lit/context`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `vitest`
