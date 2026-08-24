/** Public browser URL policy seam for browser-capable plugins. */
export {
  assertGovernedBrowserUrl,
  assertGovernedBrowserRedirectChain,
  GovernedBrowserUrlError,
  parseGovernedBrowserUrl,
  resolveGovernedBrowserUrl,
  type GovernedBrowserUrlBinding,
  type GovernedBrowserUrlOptions,
} from "../agents/sandbox/browser-policy.js";
export type { PinnedHostname } from "../infra/net/ssrf.js";
