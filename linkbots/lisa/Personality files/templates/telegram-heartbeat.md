# Telegram heartbeat template

Placeholders: `{{weekday_date}}`, `{{time}}`, `{{calendar}}`, `{{tasks}}`, `{{email}}`, `{{unanswered}}`, `{{coding_evals}}`, battery fields, `{{pipeline_lines}}`, optional `{{main_approve_ask}}`.

## Freshness

- Include Ship/Pull lines only when `Cycle date` matches the digest cycle being reported.
- Omit undated or stale Staging/Main lines.
- Never send metadata (`Cycle date:`) to Telegram.

## Omission

- Work is Yes/No summary only (no ii–v lists).
- Coding is topline Yes/No only.
- Battery: always full 7 items (Telegram only).
- Pipeline section omitted entirely when no fresh lines.
- Main Approve section omitted unless Monday fallback rules match.

## Determinism

Same inputs → identical body. No unresolved `{{...}}` placeholders. Plain Telegram text — never Markdown fences.

Rendered by `linkbots/lisa/ops/templates.ts` → `renderTelegramHeartbeat`.
