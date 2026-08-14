# VPS Lisa Google Workspace rotation and rollback

This is a human-controlled runbook for the later VPS gate. It is not an
authorization to stop a service, revoke OAuth, delete credentials, or change a
live profile from this source-only packet.

## Rotation

Rotate the two identities independently. Never use the Lisa Workspace
directory while rotating Carlos Tasks, and never copy one identity's export to
the other directory.

1. Record a sanitized pre-rotation receipt: wrapper version, CLI release/tree,
   identity label, config directory category, file modes, and a credential
   fingerprint if the approved operator procedure provides one. Do not record
   account names, token values, refresh tokens, client secrets, or file
   contents.
2. Human owner completes the provider's `gws auth login --scopes` flow from the
   controlled Linux cwd/HOME for only the selected identity and the exact
   capability scope URLs in the identity/scope receipt (plus upstream mandatory
   identity scopes). This writes the encrypted file-backed credentials directly;
   do not use a plaintext credential export as steady state.
3. If `client_secret.json` is required for that interactive login, keep it
   private only during login, then quarantine/remove it after encrypted recovery
   proof. Verify `0700` directories and `0600`/`0400` private files.
4. Verify the new identity with read-only wrapper smokes. Do not use `auth`,
   `keep`, arbitrary services, or a bare `gws` command.
5. After the owner approves the cutover, replace only the selected identity's
   VPS credential material using an atomic filesystem operation. Do not write
   secrets to logs, shell output, Git, or an agent transcript.
6. Run the selected identity's safe read smoke and a bounded, dedicated test
   operation. Record only redacted status, returned resource ID hashes or
   placeholders, ownership result, and cleanup result.
7. Human owner revokes the old authorization after the new path is confirmed.
   Re-run the negative probe proving the old path is no longer usable, without
   printing the authentication error payload if it contains sensitive data.

## Rollback

Rollback is fail-closed and identity-specific:

1. Stop at the first failed verification or unexpected account/resource result.
2. Human operator pauses the VPS Lisa service according to the deployment
   owner’s procedure. This packet does not perform that action.
3. Restore the last approved wrapper/binary pin and the encrypted recovery copy
   for only the affected identity. Preserve the other identity unchanged.
4. Re-apply ownership and restrictive modes; verify paths without printing
   credential values.
5. Run offline wrapper checks and then the approved read-only smoke. Do not
   send mail, create resources, or re-enable a failed identity until the owner
   accepts the receipt.
6. If the old authorization was revoked, do not silently restore it. Human
   OAuth re-consent is required; otherwise quarantine the affected identity and
   keep Lisa's other Google capability available.

Rollback never touches Local Lisa, Mac Keychain data, unrelated service
credentials, generic OpenClaw configuration, or reconciliation state.

## Uninstall / retirement boundary

Removing VPS-specific Google material is a separate destructive action. It
requires an encrypted recovery copy, explicit owner approval, proof that Local
Lisa remains intact, and a post-removal negative probe. Do not delete a shared
root or any file with unknown ownership.
