# Lisa Native OAuth Routing Closeout — 2026-08-05

## Outcome

OpenClaw Prime/Lisa native OAuth routing, deterministic development delegation, OpenRouter fallbacks, MiniMax media routing, and sampled Nemotron shadow evaluation are implemented, promoted through development and staging, and live on the Mac Mini.

## Final evidence

- Production source: `origin/main` `c066dc40bc6d171dc5964e5f8a1c152c88a5f51d`.
- Promotion heads at closeout: development `37a06ee0f3d`, staging `e9da16f8a5a`, main `c066dc40bc6`.
- Nemotron focused validation: 2 files, 11 tests passed; exact-main CLI/runtime build passed.
- Native Luna canaries used `openai/gpt-5.6-luna` through the authenticated profile without fallback.
- MiniMax PDF and image routes produced controlled OpenRouter success receipts earlier in this session.
- Nemotron live proof: eligible ordinal 2, primary `openai/gpt-5.6-luna`, shadow `openrouter/nvidia/nemotron-3-super-120b-a12b`, HTTP 200, 29 input / 77 output / 106 total shadow tokens, sanitized durable receipt, no user-visible shadow response, no shadow tools.
- Final live configuration restored `sampleEvery=10`; config validation passed; Lisa health returned `{"ok":true,"status":"live"}` on loopback port 18790 with PID 33739.
- Rollback backup: `/Users/linktrend/.openclaw-lisa/backups/minimax-image-route-20260805T1456` (owner-only files). Disable the Nemotron plugin or restore the backed-up routing files, validate, and restart Lisa.

## Deferred hosted evidence

Hosted CI and Bugbot remain honestly deferred while their Principal-owned repair is unresolved. Bounded local tests, exact-head checks, builds, controlled live canaries, restart persistence, and durable receipts were used instead.

## Cleanup and next owner

The regenerable Lisa Jiti cache was removed and rebuilt from current runtime artifacts. No credentials, live data, backups, or production configuration were deleted. The next action is Principal manual testing; VPS planning belongs to a separate successor agent.
