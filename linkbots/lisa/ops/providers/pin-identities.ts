/**
 * OCP-01 pin identities copied from origin/development
 * `docs/link-integrations/ocp-01/provider-pins.json`. These are Lisa-owned
 * contract refs, not Item 2 adapter exports. Wave B may bind adapters later.
 */
export const LISA_OCP01_PIN_IDENTITIES = Object.freeze({
  platform: Object.freeze({
    repository: "LiNKplatform",
    commit: "5452f90a35ed690698a9161117a9d92c69985582",
    tree: "90b51726f7a77e4620151a463a10cfc3d2007c88",
    contractRef: "platform.auth-claims/1.1.0",
  }),
  brain: Object.freeze({
    repository: "LiNKbrain",
    commit: "8ce1d737f8870a479f07b1741c58d6681cd07aa1",
    tree: "0cae42d612342f5e52c7e2e0e76cb6fc2f6d81f3",
    contractRef: "brain.v2/2.0.0",
  }),
  skills: Object.freeze({
    repository: "LiNKskills",
    commit: "6269cb173a7c9e0170b29f35c539343c29eab795",
    tree: "6c36e6c98f90e55d957fba781327b1b0ef90860a",
    contractRef: "skills.api.v0.2",
  }),
  libraries: Object.freeze({
    repository: "LiNKlibraries",
    commit: "0efa68b19686e976ecee93c6a962e81d2a0265f5",
    tree: "c42d20b3119ca4bfdd24d4c6b06d6bc7a7f50d4a",
    contractRef: "libraries.v2/revision-2",
  }),
  autowork: Object.freeze({
    repository: "LiNKautowork",
    commit: "4eb29203766b1ccf200a2dc10b39cc58d175c90c",
    tree: "5f306d674780a5a26048017f916da6048d71e7a5",
    contractRef: "2026-08-13.v1",
  }),
});

export const LISA_WAVE_A_HOLD_RELEASE_REF = "wave-a-hold-unbound" as const;

/**
 * Catalogue `contractRef` must satisfy both `SAFE_ID_RE` and `RELEASE_RE`.
 * Their intersection forbids `/`, `:`, `@`, and `+`. Pin contract versions
 * keep their exact OCP-01 strings; this encoding is Lisa-owned.
 */
export function toLisaCatalogueContractRef(contractRef: string): string {
  return contractRef.replaceAll("/", "-");
}
