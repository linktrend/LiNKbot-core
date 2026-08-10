# Lisa agent bundle

This directory is the version-controlled, non-secret definition bundle for Lisa. It is the reviewed source used to prepare a Lisa deployment; it is not a raw copy of a live OpenClaw profile.

`PROFILE_BUNDLE_MANIFEST.json` is the authoritative deployment boundary. It records what is eligible for source control, what is excluded, and the restore process.

## What belongs here

- reviewed identity, personality, operating instructions, skills, templates, and deployment documentation;
- non-secret agent configuration and deployment manifests;
- tests and source code that support Lisa's approved behavior.

## What never belongs here

- Google Secret Manager values, OAuth material, passwords, gateway tokens, private keys, or `.env` files;
- device pairing records, session transcripts, caches, logs, SQLite databases, and other runtime state;
- raw private memory or user data copied from a live workspace.

The existing `Personality files/` tree is retained as historical workshop material. It must not be deployed wholesale: its config snapshot is excluded by the manifest, and any current live document is first reviewed and redacted before being promoted into this bundle.

## Deployment and recovery

1. Deploy the OpenClaw code at the approved revision.
2. Materialize this selected non-secret bundle.
3. Resolve secrets at startup through Google Secret Manager references.
4. Restore mutable state only from an encrypted off-VPS backup, never from Git.

This keeps Git useful for Lisa's durable definition while keeping credentials and private operating history out of the repository.
