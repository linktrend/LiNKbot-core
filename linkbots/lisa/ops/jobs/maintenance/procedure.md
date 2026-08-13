# Lisa nightly maintenance and backup

This is a source-only procedure for Jobs 1–3. It does not call LiNKbrain,
memory-core, Google Drive, Google Secret Manager, real channels, or host
timers.

## Sequence

1. Create one local `cycleId` for the Asia/Taipei date. Mark Lisa in
   maintenance and retain inbound information without mutating it.
2. Between 03:30 and 04:30, validate the intake batch. Reject private-health
   classifications, private contents, and secret-shaped fields before calling
   the Librarian adapter. Retry once with the same idempotency key. Store only
   the payload-free, hash-checked receipt.
3. Start Dreaming only with the validated same-cycle receipt capability. It may
   run early after Librarian completes, but never before that receipt exists.
   Retry once. On a missing, stale, failed, wrong-provider, wrong-cycle, or
   tampered receipt, record `skipped_dependency` and do not modify memory.
4. After Dreaming reaches a terminal state, enumerate only the named stable
   artifact classes. Exclude caches, logs, temporary files, rebuildable files,
   plaintext secrets, and private-health material. Capture hashes and sizes.
5. Encrypt before upload. Pass the encryptor only a Google Secret Manager
   reference, never a secret value. Pass the uploader only an opaque destination
   binding ID, never a Drive path.
6. Verify the encrypted archive in a fresh temporary directory with network and
   channel delivery disabled. Keep the previous successful backup until both
   upload verification and disposable restore verification pass.
7. At 06:30, make Lisa available even if upload retry work remains. Plan at
   most six hourly background upload retries, and report the result in the next
   scheduled digest without duplicate success/failure messages.

## Required evidence

- Same-cycle receipt validation and idempotency-key preservation.
- Early-forward, ordered, non-overlapping stage transitions.
- Synthetic snapshot hash, throwaway-key encryption, manifest hash, temporary
  restore, and zero network/channel adapter calls.
- Retention remains `retain_previous` until upload and restore verification are
  both true.
