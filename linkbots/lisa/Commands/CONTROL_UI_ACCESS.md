# Lisa Control UI access

Use the approved VPS Control UI address through Tailscale. The browser may use the
configured OpenClaw password or a one-time device-pairing flow, depending on the
client. Do not save gateway tokens, passwords, pairing codes, or copied browser
URLs containing credentials in this repository.

Runtime credentials are resolved from Google Secret Manager. If an operator cannot
connect, use the approved pairing workflow or ask the VPS operator to rotate the
relevant secret; never recover a credential from Git history or a local text file.
