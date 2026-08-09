# Agent Session Handoff

## Summary

Repaired a live Lisa Telegram reply failure. The user message at 10:29 was received, but the native model used `message.action` twice; both failed because restart-recovery source ownership was unavailable. Its run then completed with no automatic reply payload.

## Change

Added `agents.list[id=main].tools.deny: ["message"]` to the production Lisa profile. This removes the failing optional manual-send route only from main chat. Automatic Telegram final replies continue normally; Cursor ACP's inherited required tools are unchanged.

## Evidence

- Configuration validation passed.
- After LaunchAgent restart, gateway health was OK and Telegram was connected.
- A direct outbound Telegram message was delivered as message 1091.

## Scope and Risks

No stage, Docker, credential, source-repository, or ACP changes. Main Lisa can no longer make proactive manual `message` calls; this is intentional because direct chat uses automatic reply delivery and the workspace rules already prohibit manual status-message calls.

## Uncommitted Changes

This record and handoff are new, alongside prior untracked Lisa recovery records that were preserved.
