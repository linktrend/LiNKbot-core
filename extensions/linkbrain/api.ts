// Public linkbrain surfaces for tests and future callers.
export { definePluginEntry } from "./runtime-api.js";
export type { OpenClawPluginApi, OpenClawPluginService } from "./runtime-api.js";
export {
  LINKBRAIN_NAMESPACES,
  LINKBRAIN_PLUGIN_ID,
  type LinkbrainNamespace,
} from "./src/namespaces.js";
export {
  DEFAULT_LINKBRAIN_CONFIG,
  parseLinkbrainConfig,
  type LinkbrainConfig,
  type LinkbrainSecretInput,
} from "./src/config.js";
export {
  LINKBRAIN_REDACTION_POLICY_VERSION,
  redactBrainEnvelope,
  type BrainInternalEnvelope,
} from "./src/envelopes.js";
export {
  createLinkbrainRuntime,
  type LinkbrainDiagnostics,
  type LinkbrainRuntime,
  type LinkbrainTransport,
} from "./src/runtime.js";
