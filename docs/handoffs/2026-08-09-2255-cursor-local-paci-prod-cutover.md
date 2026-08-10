# Agent Session Handoff

## Session Metadata

| Field            | Value                                                                            |
| ---------------- | -------------------------------------------------------------------------------- |
| Agent identity   | Cursor Local Agent, mac-mini, desktop-workspace                                  |
| Session ID       | `cursor-local-mac-mini-paci-prod-cutover-20260809-2238`                          |
| Orchestrator key | `cursor-local-mac-mini-desktop-workspace-orchestrator`                           |
| Objective        | Retarget VPS Brain/Skills/Lisa from stage PACI to production PACI                |
| Scope            | GSM JWKS + KEY_REFs; prod PACI OAuth clients; VPS Brain/Skills/Lisa PACI cutover |
| Started          | 2026-08-09 22:38 Asia/Taipei                                                     |
| Ended            | 2026-08-09 22:55 Asia/Taipei                                                     |
| Starting branch  | `main`                                                                           |
| Ending branch    | `main`                                                                           |
| Starting commit  | `383b8b27adf`                                                                    |
| Ending commit    | `383b8b27adf`                                                                    |
| Starting status  | Pre-existing untracked coordination records                                      |
| Ending status    | PACI prod cutover successful; services healthy                                   |

## Summary

VPS Brain, Skills, and Lisa machineToken config now use production PACI issuer `https://paci-service-lh5i7jv3mq-de.a.run.app`. Prod PACI DB had zero OAuth clients; a prod client graph was registered with public JWKs only. GSM JWKS URL was populated; missing KEY_REF secrets for `linkbrain-gateway-prod`, `openclaw-brain-prod`, and `openclaw-skills-prod` were created from existing prod assertion material. Services restarted healthy; Telegram polling continues; mint+introspect against prod proven from VPS keys. No stage issuer host remains in active Brain/Skills/Lisa PACI config.

## Decisions

1. Use client IDs `linkbrain-gateway-prod`, `skills-runtime-prod`, `openclaw-brain-prod`, `openclaw-skills-prod` (plus registered lisa/brain-runtime mirrors) — matches stage naming with `-prod` and existing GSM shells.
2. Point Lisa `clientAssertionKeyRef` at local file SecretRefs under `/etc/openclaw/lisa/secrets/` rather than unset env GSM names — VPS had no process env for prior STAGE secret ids.
3. Leave Lisa `linkbrain`/`linkskills` plugins disabled as found; only retarget machineToken config. Enabling plugins is separate residual work.
4. Do not deploy Eric. Do not commit secrets.

## Verification

- Prod discovery: `/.well-known/oauth-authorization-server` 200; JWKS `/.well-known/jwks.json` kid `paci-issuer-es256-v1`
- GSM: `LINKTREND_PLATFORM_PROD_PACI_JWKS_URL` version 1 = prod JWKS URL
- Prod DB clients active with keys: `linkbrain-gateway-prod`, `skills-runtime-prod`, `openclaw-brain-prod`, `openclaw-skills-prod`, `brain-runtime-prod`, `openclaw-lisa-brain-prod`, `openclaw-lisa-skills-prod`
- Local + VPS mint HTTP 200; introspect `active=true` issuer prod host
- VPS: `linkbrain`/`linkskills`/`openclaw-lisa` active; Brain/Skills `/health`+`/ready` 200; Lisa `/healthz` 200 `/readyz` 200
- Telegram: `@lisaprime_bot` polling started
- Google Chat: enabled; webhook start logged; Funnel URL still present in config (not re-validated end-to-end)

## Remaining

1. Enable Lisa `linkbrain`/`linkskills` plugins when live MCP machine-token path is desired (config already prod).
2. Optional: wire systemd to keyless GSM fetch instead of local assertion files.
3. Confirm Google Chat Funnel/webhook end-to-end if Chat is required on VPS (prior channel handoff noted Funnel/hostname gaps).
4. Rollbacks available: `/etc/linkbrain/service.env.bak-paci-20260809-224959`, Skills twin, Lisa `openclaw.json.bak-paci-20260809-224959`, and prior assertion PEM backups beside secrets dirs.

## Active client IDs on VPS

- Brain: `linkbrain-gateway-prod`
- Skills: `skills-runtime-prod` (trusted mint `openclaw-skills-prod`)
- Lisa machineToken: `openclaw-brain-prod` / `openclaw-skills-prod`
