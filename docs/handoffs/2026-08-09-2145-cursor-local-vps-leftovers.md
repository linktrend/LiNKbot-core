# Agent Session Handoff

## Session Metadata

| Field            | Value                                                                |
| ---------------- | -------------------------------------------------------------------- |
| Agent identity   | Cursor Local Agent, mac-mini, desktop-workspace                      |
| Session ID       | `cursor-local-mac-mini-vps-leftovers-20260809-2134`                  |
| Orchestrator key | `cursor-local-mac-mini-desktop-workspace-orchestrator`               |
| Objective        | VPS leftovers: inspect, keyless WIF, DNS/proxy gate, health, handoff |
| Scope            | linkserver01 (62.238.104.17) Lisa/Brain/Skills leftovers only        |
| Started          | 2026-08-09 21:34 Asia/Taipei                                         |
| Ended            | 2026-08-09 21:45 Asia/Taipei                                         |
| Starting branch  | `main`                                                               |
| Ending branch    | `main`                                                               |
| Starting commit  | `383b8b27adf`                                                        |
| Ending commit    | `383b8b27adf`                                                        |
| Starting status  | Pre-existing untracked coordination records                          |
| Ending status    | Leftovers complete; services remain stage-mounted + WIF-ready        |

## Summary

linkserver01 Lisa core is healthy on loopback with Telegram/Google Chat still disabled. X.509 Workload Identity Federation was created for stage project `linktrend-linkplatform-stage`, leaf identities were installed under `/etc/linktrend/gcp/<runtime>/`, and VPS keyless GSM access was proven (`print-access-token` + discarded `secrets versions access` for `LINKTREND_BRAIN_STAGE_DATABASE_URL`). Running systemd units were **not** cut over off their working stage secret mounts. No reverse proxy was installed because no A record points at `62.238.104.17`. Prod Brain/Skills database GSM secrets still have **zero enabled versions**, so stage-backed DB config remains required. Eric was not created. Mac Mini live Lisa was not touched.

## Files Inspected

- Coordination: `docs/agent-briefing.md`, `docs/current-status.md`, active sessions, prior handoffs `2026-08-09-2017-cursor-local-vps-base-1.md` and `2026-08-09-2054-cursor-local-vps-wif-1.md`.
- VPS systemd units, redacted env files, journals, listeners, health endpoints, install SHAs, Lisa channel flags.
- GCP: WIF pool/provider, runtime SA IAM, GSM secret version metadata (no payloads), PACI Cloud Run health.
- DNS A lookups for candidate names; reverse PTR is Hetzner-owned only.
- Existing SecretRef launcher contract: `linkbots/lisa/ops/lisa-skills-keyless-gsm-launcher.sh` (requires gcloud + impersonatable identity).

## Files Created

- `docs/agent-sessions/active/cursor-local-mac-mini-vps-leftovers-20260809-2134.md`
- `docs/handoffs/2026-08-09-2145-cursor-local-vps-leftovers.md`
- Local (not in repo; mode 0700): `/Users/linktrend/.linktrend/gcp/wif-vps-20260809/` (CA, intermediate, leaves, cred configs, evidence fingerprints only)
- VPS: `/etc/linktrend/gcp/{lisa,brain,skills}-runtime/` external-account + leaf/chain materials; `google-cloud-cli` package

## Files Modified

- GCP stage project: created WIF pool `linkserver01-vps`, provider `x509-linkserver01`; added `roles/iam.workloadIdentityUser` bindings on `lisa-runtime`, `brain-runtime`, `skills-runtime` for SPIFFE subjects / `attribute.service` principalSets.
- VPS package set: installed `google-cloud-cli` (no service unit changes to openclaw-lisa/linkbrain/linkskills ExecStart or EnvironmentFiles).

## Files Deleted

- None in the repository.
- Temporary broad WIF `principalSet://.../linkserver01-vps/*` bindings were removed after proof; attribute/subject bindings retained.

## Commands Run

- Dedicated-key SSH inspection of systemd, redacted env, health, journals, SHAs, channel enabled flags.
- `gcloud` read-only then mutating WIF/IAM for stage project as `admin@linktrend.one`.
- OpenSSL CA/intermediate/leaf generation; `create-x509` provider; `create-cred-config`; local and VPS WIF token + discarded GSM access proofs.
- PACI `https://paci-service-ftde7rbkla-de.a.run.app` `/health` and `/ready`.
- DNS A lookups; GSM prod DB secret version counts (metadata only).

## Decisions

1. **Leave systemd on stage file mounts; add WIF beside them.** Reason: services were already healthy on mounted stage secrets; live ExecStart cutover to the keyless launcher would force restarts without unlocking prod DBs. Evidence: loopback health 200s; prod DB secrets enabled_count=0. Carlos approval: leftovers authorization + hard rule to keep stage if prod versions empty.
2. **Do not install Caddy/nginx.** Reason: no delegated A record to `62.238.104.17`. Evidence: empty dig results; PTR is `static.17.104.238.62.clients.your-server.de.`. Carlos approval: explicit DNS prerequisite rule.
3. **Keep Telegram/Google Chat disabled on VPS.** Reason: Mac Lisa still owns live channels. Evidence: VPS `channels.telegram.enabled=false`, `channels.googlechat.enabled=false`. Carlos approval: hard rule 1.
4. **Do not deploy Eric.** Reason: Lisa cutover infra leftovers (DNS, channel cutover, prod secrets, launcher wiring) still incomplete; Eric would delay that path. Carlos approval: hard rule 6.
5. **Use verified stage PACI Cloud Run issuer.** Reason: healthy Ready service and discovery issuer already in Brain/Skills env. Evidence: PACI 200 health/ready; env `LBRAIN_PACI_ISSUER` / `LINKSKILLS_PACI_ISSUER` point at Cloud Run URL.

## Exact installed revisions (VPS)

| Component                                      | Path                            | SHA / note                                 |
| ---------------------------------------------- | ------------------------------- | ------------------------------------------ |
| openclaw_prime (Lisa)                          | `/opt/linktrend/openclaw_prime` | `4353fbacd9b0ba11b29c2ab7490ec7b168ceeff0` |
| LiNKbrain                                      | `/opt/linktrend/LiNKbrain`      | `222e807b8be6d6f45de5913842eb9d2d4b160189` |
| LiNKskills                                     | `/opt/linktrend/LiNKskills`     | `af70f7ff04b2f148d04fe450a4e20c88df06fc36` |
| LiNKplatform (tree present; PACI is Cloud Run) | `/opt/linktrend/LiNKplatform`   | `22707120f5db2a8f84bd237e1227c52ccc5abb2a` |

## Service posture

| Unit                    | State           | Bind              | Health                                           |
| ----------------------- | --------------- | ----------------- | ------------------------------------------------ |
| `openclaw-lisa.service` | active/enabled  | `127.0.0.1:18790` | `/healthz` 200 live; `/readyz` 200               |
| `linkbrain.service`     | active/enabled  | `127.0.0.1:18787` | `/health` 200; `/ready` 200 postgres             |
| `linkskills.service`    | active/enabled  | `127.0.0.1:18788` | `/health` 200; `/ready` 200                      |
| PACI                    | Cloud Run stage | public HTTPS      | `/health` 200; `/ready` 200 issuer Cloud Run URL |
| Channels on VPS         | disabled        | n/a               | telegram=false, googlechat=false                 |
| Reverse proxy           | not installed   | n/a               | no DNS target                                    |
| Eric                    | not deployed    | n/a               | deferred                                         |

Secrets posture: Brain/Skills still use `/etc/*/secrets.env` stage DB URLs and local PACI assertion PEM/JWK files. WIF identity materials exist for keyless GSM but are not yet the systemd launch path.

## WIF facts (no secret material)

- Project: `linktrend-linkplatform-stage` (number `1001850234693`)
- Pool: `linkserver01-vps`
- Provider: `x509-linkserver01` (ACTIVE)
- Subjects / attribute.service values: `spiffe://linktrend.dev/vps/linkserver01/{lisa,brain,skills}-runtime`
- VPS materials: `/etc/linktrend/gcp/<id>/{leaf.crt,leaf.key,chain.pem,certificate_config.json,external_account.json}`
- Local bootstrap (private keys): `/Users/linktrend/.linktrend/gcp/wif-vps-20260809/` (0700; not committed)
- Proof: VPS `gcloud auth print-access-token` OK; discarded access of stage Brain DB secret OK
- Remaining launcher work: wire systemd `ExecStart` through SecretRef/keyless launcher using `GOOGLE_APPLICATION_CREDENTIALS=/etc/linktrend/gcp/<id>/external_account.json` without writing fetched secrets to durable disk

## Tests and Verification

- Pass: Lisa/Brain/Skills active+enabled; loopback health/ready as above.
- Pass: Channels disabled on VPS.
- Pass: Stage PACI health/ready 200.
- Pass: Local and VPS X.509 WIF token + discarded GSM secret access.
- Pass: Prod `LINKTREND_BRAIN_PROD_DATABASE_URL` and `LINKTREND_SKILLS_PROD_DATABASE_URL` enabled version count = 0.
- Pass: No A records for checked candidate hostnames to this VPS.
- Not run: systemd cutover to keyless launcher; public HTTPS; channel cutover; Eric deploy; Mac Lisa stop.

## Problems and Blockers

1. **Prod Brain/Skills DB GSM secrets have no enabled versions** — blocks true prod DB cutover; stage mounts must remain.
2. **No DNS A record to 62.238.104.17** — blocks public HTTPS reverse proxy.
3. **Channel cutover not authorized** — VPS channels must stay off until Mac Lisa Telegram/Google Chat are explicitly stopped.
4. **WIF identity proven but services still file-mounted** — keyless is ready beside the stack, not yet the runtime secret delivery path.
5. Coordination note: `cursor-local-mac-mini-lisa-direct-2-20260809-1911` remained marked active; this leftovers session proceeded under Carlos direct authorization after services were already healthy. Owner should close or amend that record.

## Uncommitted Changes

- This session: session record + this handoff (docs only).
- Pre-existing: other untracked coordination docs and worktrees listed at session start.

## Risks and Unknowns

- Root/intermediate private keys live only under local `~/.linktrend/gcp/wif-vps-20260809/`; protect and plan custody/rotation.
- Broad pool `/*` bindings were removed after proof; if a future identity fails, re-check subject vs `attribute.service` principalSet formatting for SPIFFE URIs.
- Lisa `.env` still contains env key names including `TELEGRAM_BOT_TOKEN` while channel enabled=false; do not enable channels until Mac cutover.

## Remaining Work / Cutover Checklist

1. **Human decision — channel cutover (blocking for live VPS Lisa):**
   - Stop Mac Lisa Telegram and Google Chat (LaunchAgent/profile owned on Mini — not done by this session).
   - Only then set VPS `channels.telegram.enabled=true` and `channels.googlechat.enabled=true` (or equivalent), reload/restart **VPS** Lisa only, and verify inbound on VPS.
2. **DNS:** create an A/AAAA record aimed at `62.238.104.17` (and IPv6 if desired), then install Caddy/nginx + certificates.
3. **Prod secrets:** add enabled GSM versions for prod Brain/Skills (and related) DB URLs; until then keep stage DB mounts.
4. **Keyless launcher cutover:** point systemd at WIF external-account + existing SecretRef launcher contract; remove durable `secrets.env` mounts after proof.
5. **Eric:** deploy only after Lisa VPS cutover infra above is accepted.

## Exact Next Action

Carlos chooses channel cutover timing (Mac stop → VPS enable) and/or provides the DNS hostname for HTTPS. Do not enable VPS channels and do not invent DNS.

## Questions for Carlos

1. Which hostname should point at `62.238.104.17` for public HTTPS?
2. When should Mac Lisa channels be stopped so VPS channels can be enabled?
3. Who will populate prod Brain/Skills DB secret versions in GSM?

## Questions for the Orchestrator or Next Agent

- Close or amend `lisa-direct-2` active session if that work is finished.
- Refresh `docs/current-status.md` from this handoff.
- Preserve stage PACI Cloud Run issuer until a newer deployed receipt exists.
- Do not mutate Mac `~/.openclaw-lisa` or Lisa LaunchAgents from VPS leftovers work.

## Confidence

98% for inspected runtime health, WIF proof, DNS/prod-secret blockers, and channel-disabled posture. 0% for unexecuted channel cutover, public HTTPS, systemd keyless cutover, and Eric.

## Amendments

Append dated factual corrections here. Never silently rewrite an earlier handoff.
