# Repository and documentation cleanup — 2026-08-11

- Current source of truth remains the clean VPS Lisa/OpenClaw release at fork
  main `f24404c` plus current Brain and Platform releases.
- Archived the superseded pre-VPS briefing under
  `docs/archive/coordination/`; replaced it and `docs/current-status.md` with
  concise current documents.
- Moved stale active session records to `completed/`.
- Updated the root README onboarding section and coordination notice.
- Reconciled inherited fork formatting debt with the repository formatter.
- Applied audited transitive dependency overrides; the production dependency
  audit now reports no high-or-higher advisories.
- Documented the trust boundary on the five LiNKtrend privileged GitOps
  workflows so the pinned workflow-security audit accepts their intentional
  metadata-only triggers.
- Upstream public docs and code-adjacent READMEs were intentionally not moved.
- No VPS/runtime/profile/personality/database/configuration changes.

## Validation

- `pnpm format:check`
- `pnpm docs:check-mdx`
- `pnpm tsgo:core`
- `pnpm tsgo:extensions`
- `node scripts/run-tsgo.mjs -p test/tsconfig/tsconfig.test.root.json ...`
- `pnpm dup:check:coverage`
- `pnpm deps:shrinkwrap:check`
- `node scripts/pre-commit/pnpm-audit-prod.mjs --audit-level=high`
- `uvx 'zizmor==1.22.0' --config .github/zizmor.yml --persona=regular --min-severity=medium --min-confidence=medium .github/workflows`
- `git diff --check`

`pnpm check` now passes all preflight and typecheck stages. Its lint stage still
reports pre-existing fork debt across older Lisa, machine-token, Linkbrain,
Linkskills, and plan-extractor files; that large refactor is not represented as
complete here. The focused ten-file test run passed 135 of 136 tests; the sole
failure is an older AuthClaims provenance mismatch between the frozen aggregate
`4493f714...` and the newer Brain fixture manifest aggregate `71c5c05e...`.
