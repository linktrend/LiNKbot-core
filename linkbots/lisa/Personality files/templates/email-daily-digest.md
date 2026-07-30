# Email daily digest template

Same Work (A) and Coding (B) content as Telegram digest, plus fresh Pipeline (D) and Main Approve when required.

## Hard omission

**Never** include Battery Monitoring / plugged / selfie / restriction / compliance content.

## Freshness

Pipeline lines only when cycle/staging/main dates match.

## Determinism

No unresolved placeholders. Body written to `scratch/digest_email.txt` then sent via `tools/bin/lisa-safe email-send`.

Rendered by `renderEmailDailyDigest`.
