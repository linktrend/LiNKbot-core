/**
 * Plugin-facing MCP HTTP fetch: SSRF-guarded HTTPS with same-origin header helpers.
 *
 * Thin re-export of the core agents MCP fetch contract so extensions never import
 * `src/agents/**`. Prefer this for SSE / Streamable HTTP MCP client transports.
 */
export {
  buildMcpHttpFetch as buildPluginMcpHttpFetch,
  MCP_HTTP_MAX_RESPONSE_BYTES,
  withoutMcpAuthorizationHeader,
  withSameOriginMcpHttpHeaders,
} from "../agents/mcp-http-fetch.js";
