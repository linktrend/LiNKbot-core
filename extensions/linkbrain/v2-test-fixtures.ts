import {
  LINKBRAIN_V2_COMMIT,
  LINKBRAIN_V2_CONTRACT_VERSION,
  LINKBRAIN_V2_MCP_PROTOCOL,
  LINKBRAIN_V2_TREE,
  createBrainV2Client as createBrainV2ClientRaw,
  type BrainV2AuthenticatedProviderEvidence,
  type BrainV2PlatformIdentity,
  type BrainV2PlatformRevocationDecision,
} from "./src/v2.js";

export const NOW = "2026-08-14T12:00:00.000Z";
export const identity = (): BrainV2PlatformIdentity => ({
  providerCandidate: {
    commit: "5452f90a35ed690698a9161117a9d92c69985582",
    tree: "90b51726f7a77e4620151a463a10cfc3d2007c88",
  },
  claimContractVersion: "platform.auth-claims/1.1.0",
  schemaVersion: "2026.07.28-w4",
  actorId: "actor:ocp",
  organizationRef: "org:linktrend",
  runtimeBindingRef: "binding:ocp-brain",
  credentialReference: "credential-ref:platform-brain",
  issuer: "issuer:platform",
  audience: "audience:brain",
  serviceScopes: ["brain.v2"],
  capabilities: ["brain.knowledge"],
  permittedOperations: ["read", "execute"],
  issuedAt: "2026-08-14T11:00:00.000Z",
  expiresAt: "2026-08-14T13:00:00.000Z",
  revocationStatus: "active",
});

export const expected = {
  actorId: "actor:ocp",
  organizationRef: "org:linktrend",
  runtimeBindingRef: "binding:ocp-brain",
  issuer: "issuer:platform",
  audience: "audience:brain",
  requiredScope: "brain.v2",
  requiredCapability: "brain.knowledge",
  now: NOW,
};
export const identityExpectation = {
  actorId: expected.actorId,
  organizationRef: expected.organizationRef,
  runtimeBindingRef: expected.runtimeBindingRef,
  issuer: expected.issuer,
  audience: expected.audience,
  requiredScope: expected.requiredScope,
  requiredCapability: expected.requiredCapability,
};

export const authenticatedProviderEvidence: BrainV2AuthenticatedProviderEvidence = {
  providerCandidate: { commit: LINKBRAIN_V2_COMMIT, tree: LINKBRAIN_V2_TREE },
  contractVersion: LINKBRAIN_V2_CONTRACT_VERSION,
  artifactDigests: {
    contractsSchema: "sha256:ff02970e0327fc578295637f26e99904d736af8c412a1523586744756881682b",
    sessionlessMcp: "sha256:f88ba9474d23f5a8c46fd39fee6cd1bf4b50b87c40c7c68cefba2023d566eaea",
    httpRegistry: "sha256:fb076dd096d7719202c9790f97699750e2b8e842105d9ebe36baed4048aefe25",
    contractTypes: "sha256:ca2f68671f7fb8738bba7a1629d09de6c8f84d94551d91cea7b908f45ec41950",
    discoveryFixture: "sha256:c45caff2baeba4e47fe108f7ad264efae58373dd57608ffc54485ae2908d00ad",
    projectionFixture: "sha256:4995f99925e9ba2911b24818d0b96550249f11ecdc7f428ca1ae49906d3da36e",
  },
};

export const activeRevocationDecision = (): BrainV2PlatformRevocationDecision => ({
  status: "active",
  observedAt: NOW,
  actorId: identity().actorId,
  organizationRef: identity().organizationRef,
  runtimeBindingRef: identity().runtimeBindingRef,
  credentialReference: identity().credentialReference,
});

type BrainV2ClientInput = Parameters<typeof createBrainV2ClientRaw>[0];
export const createBrainV2Client = (
  input: Omit<BrainV2ClientInput, "authenticatedProviderEvidence" | "resolveRevocationDecision"> &
    Partial<
      Pick<BrainV2ClientInput, "authenticatedProviderEvidence" | "resolveRevocationDecision">
    >,
) =>
  createBrainV2ClientRaw({
    authenticatedProviderEvidence,
    resolveRevocationDecision: activeRevocationDecision,
    ...input,
  });

export const negotiation = {
  protocolVersion: LINKBRAIN_V2_MCP_PROTOCOL,
  sessionless: true,
  contractVersion: LINKBRAIN_V2_CONTRACT_VERSION,
  authority: "advisory",
  executionAuthority: "none",
  sdkSupportsModernProtocol: true,
} as const;

export const page = (disclosure: "guide" | "index" | "metadata" | "record") => ({
  snapshotId: "snapshot:brain-1",
  disclosure,
  pagination: { limit: 25, nextCursor: "v2:25" },
  data: { reference: "knowledge:1", title: "bounded metadata" },
});
