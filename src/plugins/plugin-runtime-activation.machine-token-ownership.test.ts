// Multi-plugin ownership blueprint: UTF-8 total-order fingerprint (not localeCompare).
import { describe, expect, it } from "vitest";
import { fingerprintMachineTokenKeyRef } from "../agents/machine-token-fingerprint.js";
import type {
  HostMachineTokenBindingRecord,
  MachineTokenKeyRefIdentity,
} from "../agents/machine-token-host.js";
import { captureMachineTokenOwnershipBlueprint } from "./plugin-runtime-activation.js";

const KEY_REF: MachineTokenKeyRefIdentity = {
  source: "env",
  provider: "default",
  id: "SHARED_UNICODE_PEM",
};

function sharedRecord(): HostMachineTokenBindingRecord {
  const keyRefFingerprint = fingerprintMachineTokenKeyRef(KEY_REF);
  return {
    bindingId: "binding-shared",
    issuerUrl: "https://issuer.example.test",
    clientId: "client-shared",
    keyRef: KEY_REF,
    keyRefFingerprint,
    pluginId: "shared-owner",
    domain: "shared-domain",
    bindingFingerprint: "FP-SHARED",
  };
}

describe("machine-token multi-plugin ownership fingerprint Unicode order", () => {
  it("keeps blueprint fingerprints stable across Unicode pluginId reorder", () => {
    const nfcPluginId = "\u00e9-plugin";
    const nfdPluginId = "e\u0301-plugin";
    expect(nfcPluginId.localeCompare(nfdPluginId, "en")).toBe(0);
    expect(String(nfcPluginId) === String(nfdPluginId)).toBe(false);

    // Identical granted descriptors so multi-plugin tuples differ only by the
    // outer pluginId Unicode form — the localeCompare("en") collapse case.
    const grants = [sharedRecord()];
    const nfcPlugin = { pluginId: nfcPluginId, grantedRecords: grants };
    const nfdPlugin = { pluginId: nfdPluginId, grantedRecords: grants };

    const forward = captureMachineTokenOwnershipBlueprint({
      plugins: [nfcPlugin, nfdPlugin],
      reconcileScope: "full",
    });
    const reverse = captureMachineTokenOwnershipBlueprint({
      plugins: [nfdPlugin, nfcPlugin],
      reconcileScope: "full",
    });
    expect(forward.ownershipFingerprint).toBe(reverse.ownershipFingerprint);

    const nfcOnly = captureMachineTokenOwnershipBlueprint({
      plugins: [nfcPlugin],
      reconcileScope: "full",
    });
    const nfdOnly = captureMachineTokenOwnershipBlueprint({
      plugins: [nfdPlugin],
      reconcileScope: "full",
    });
    expect(nfcOnly.ownershipFingerprint).not.toBe(nfdOnly.ownershipFingerprint);
  });
});
