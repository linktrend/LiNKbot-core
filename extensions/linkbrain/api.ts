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
export {
  createLinkbrainCapture,
  type LinkbrainCapture,
} from "./src/capture.js";
export {
  createLinkbrainLifecycle,
  LINKBRAIN_CONVERSATION_HOOKS,
  LINKBRAIN_REGISTERED_HOOKS,
  type LinkbrainLifecycle,
} from "./src/lifecycle.js";
export {
  LINKBRAIN_ALLOWED_WRITE_TOOLS,
  isAllowedBrainWriteTool,
} from "./src/tools.js";
export { opaqueId, contentHash } from "./src/opaque.js";
export {
  sanitizeCaptureText,
  stripUnsafeFields,
  containsUnsafeField,
} from "./src/sanitize.js";
export { LINKBRAIN_CONVERSATION_HOOK_REQUIREMENT } from "./src/namespaces.js";
