**Disposable restore verification**

- Restore directory: `<fresh temporary directory>`
- Network: disabled
- Channel delivery: disabled
- Manifest hash: `<sha256>`
- Result: `passed` or `failed`

The verifier may inspect recorded state only. It must not contact Telegram,
email, Google, LiNKbrain, or any other provider, and it must remove the
temporary directory after the check.
