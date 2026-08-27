# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## test/helpers/paci-fake/paci-fake.test.ts (718 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | mintForm | (private) |
| 34 | fn | introspectForm | (private) |

## test/helpers/paci-fake/server.ts (951 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | type | PaciFakeDomain | pub |
| 59 | type | PaciFakeIntrospectionPolicy | pub |
| 74 | fn | denyAllIntrospectionPolicy | pub |
| 84 | type | PaciFakeMintOverrides | pub |
| 108 | type | PaciFakeHttpFault | pub |
| 125 | type | PaciFakeRegisterClientInput | pub |
| 144 | type | PaciFakeServerOptions | pub |
| 199 | type | PaciFakeServer | pub |
| 256 | type | RegisteredClient | (private) |
| 270 | type | IssuedToken | (private) |
| 288 | type | SigningSlot | (private) |
| 297 | fn | jsonResponse | (private) |
| 304 | fn | oauthError | (private) |
| 314 | fn | normalizeToWholeSecondUtc | (private) |
| 323 | fn | rejectForbiddenAssertionHeader | (private) |
| 336 | fn | inferDomain | (private) |
| 346 | fn | defaultScopesForDomain | (private) |
| 361 | fn | buildIntrospectionPolicy | (private) |
| 396 | fn | callerMayIntrospectToken | (private) |
| 422 | fn | sleep | (private) |
| 429 | fn | createPaciFakeServer | pub |
| 489 | fn | pruneAssertionJtis | (private) |
| 497 | fn | verifyClientAssertion | (private) |
| 572 | fn | mintAccessToken | (private) |
| 681 | fn | handleToken | (private) |
| 719 | fn | handleIntrospect | (private) |
| 781 | fn | faultOverride | (private) |
