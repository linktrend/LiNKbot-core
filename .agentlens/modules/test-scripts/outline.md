# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 84 large files in this module.

## test/scripts/barnacle-auto-response.test.ts (1145 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | pr | (private) |
| 29 | fn | prContextBody | (private) |
| 46 | fn | file | (private) |
| 53 | fn | barnacleContext | (private) |
| 82 | fn | barnacleIssueContext | (private) |
| 112 | fn | barnacleGithub | (private) |
| 142 | fn | listFiles | (private) |
| 143 | fn | listComments | (private) |
| 213 | fn | expectedIssueUpdate | (private) |
| 222 | fn | expectedRemoveLabel | (private) |
| 231 | fn | expectedAddLabels | (private) |
| 240 | fn | managedLabelDescription | (private) |

## test/scripts/bench-cli-startup.test.ts (512 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | isProcessAlive | (private) |
| 183 | fn | makeReport | (private) |

## test/scripts/bench-gateway-restart.test.ts (837 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | GatewayRestartIntentDatabase | (private) |
| 23 | type | BenchCliResult | (private) |
| 29 | fn | runBenchCli | (private) |
| 55 | fn | readRestartIntentRow | (private) |

## test/scripts/build-all.test.ts (1083 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | getBuildAllStep | (private) |
| 35 | fn | withBuildCacheFixture | (private) |

## test/scripts/bundled-plugin-install-uninstall-probe.test.ts (1749 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | expectedTaskkillPath | (private) |
| 24 | type | PluginListEntry | (private) |
| 30 | fn | createPackageRoot | (private) |
| 37 | fn | makePackageRoot | (private) |
| 43 | fn | writePluginsList | (private) |
| 59 | fn | writePluginManifest | (private) |
| 69 | fn | runProbe | (private) |
| 84 | fn | runProbeCommand | (private) |
| 99 | fn | runRuntimeSmoke | (private) |
| 110 | fn | importRuntimeSmokeWithEnv | (private) |
| 118 | fn | listenOnLoopback | (private) |
| 120 | fn | onError | (private) |
| 137 | fn | closeServer | (private) |
| 149 | fn | waitForFile | (private) |
| 162 | fn | parseCompletedPidFile | (private) |
| 171 | fn | waitForPidFile | (private) |
| 189 | fn | pidIsAlive | (private) |
| 201 | fn | waitForDead | (private) |
| 214 | fn | killPidIfAlive | (private) |

## test/scripts/changed-lanes.test.ts (2407 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | ExecFileSyncFailure | (private) |
| 58 | fn | createNestedGitEnv | (private) |
| 70 | fn | git | (private) |
| 77 | fn | expectLanes | (private) |
| 84 | fn | parseChangedLaneOutput | (private) |
| 94 | fn | writeRepoFile | (private) |
| 103 | fn | runChangedFormatLaneWithRepoOxfmt | (private) |
| 129 | fn | createSyntheticMergeRepo | (private) |

## test/scripts/check-database-first-legacy-stores.test.ts (8817 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 91 | type | DeepRuntimeSchema | (private) |
| 103 | fn | normalize | (private) |
| 122 | fn | save | pub |
| 251 | fn | save | pub |
| 1038 | fn | save | (private) |
| 1076 | fn | save | (private) |
| 1178 | fn | read | (private) |
| 1181 | fn | write | (private) |
| 1226 | fn | save | (private) |
| 1316 | fn | persist | (private) |
| 1334 | fn | persist | (private) |
| 1355 | fn | persist | (private) |
| 1378 | fn | inner | (private) |
| 1401 | fn | inner | (private) |
| 1421 | fn | save | (private) |
| 1437 | fn | save | (private) |
| 1454 | fn | run | (private) |
| 1455 | fn | createRequire | (private) |
| 1932 | fn | persist | (private) |
| 1949 | fn | persist | (private) |
| 1965 | fn | persist | (private) |
| 1982 | fn | persist | (private) |
| 2001 | fn | persist | (private) |
| 2019 | fn | persist | (private) |
| 2037 | fn | persist | (private) |
| 2056 | fn | persist | (private) |
| 2076 | fn | persist | (private) |
| 2077 | fn | createRequire | (private) |
| 2097 | fn | persist | (private) |
| 2116 | fn | persist | (private) |
| 2156 | fn | persist | (private) |
| 2177 | fn | persist | (private) |
| 2199 | fn | persist | (private) |
| 2216 | fn | persist | (private) |
| 2232 | fn | persist | (private) |
| 2247 | fn | persist | (private) |
| 2262 | fn | persist | (private) |
| 2278 | fn | persist | (private) |
| 2294 | fn | persist | (private) |
| 2309 | fn | persist | (private) |
| 2326 | fn | persist | (private) |
| 2342 | fn | persist | (private) |
| 2358 | fn | writePath | (private) |
| 2374 | fn | writePath | (private) |
| 2390 | fn | persist | (private) |
| 2407 | fn | persist | (private) |
| 2422 | fn | persist | (private) |
| 2423 | fn | inner | (private) |
| 2440 | fn | persist | (private) |
| 2441 | fn | inner | (private) |
| 2458 | fn | writePath | (private) |
| 2461 | fn | persist | (private) |
| 2462 | fn | inner | (private) |
| 2479 | fn | persist | (private) |
| 2481 | fn | inner | (private) |
| 2499 | fn | persist | (private) |
| 2500 | fn | inner | (private) |
| 2517 | fn | persist | (private) |
| 2518 | fn | inner | (private) |
| 2535 | fn | persist | (private) |
| 2536 | fn | inner | (private) |
| 2553 | fn | persist | (private) |
| 2554 | fn | inner | (private) |
| 2571 | fn | persist | (private) |
| 2572 | fn | inner | (private) |
| 2589 | fn | persist | (private) |
| 2590 | fn | inner | (private) |
| 2608 | fn | writePath | (private) |
| 2611 | fn | persist | (private) |
| 2627 | fn | writePath | (private) |
| 2630 | fn | persist | (private) |
| 2645 | fn | writePath | (private) |
| 2648 | fn | persist | (private) |
| 2664 | fn | writePath | (private) |
| 2667 | fn | persist | (private) |
| 2683 | fn | writePath | (private) |
| 2686 | fn | persist | (private) |
| 2702 | fn | writePath | (private) |
| 2717 | fn | writePath | (private) |
| 2732 | fn | writePath | (private) |
| 2750 | fn | writePath | (private) |
| 2768 | fn | writePath | (private) |
| 2784 | fn | writePath | (private) |
| 2800 | fn | writePath | (private) |
| 2816 | fn | writePath | (private) |
| 2819 | fn | persist | (private) |
| 2835 | fn | writePath | (private) |
| 2851 | fn | writePath | (private) |
| 2867 | fn | writePath | (private) |
| 2882 | fn | writePath | (private) |
| 2898 | fn | writePath | (private) |
| 2915 | fn | writePath | (private) |
| 2932 | fn | writePath | (private) |
| 2947 | fn | writePath | (private) |
| 2968 | fn | writePath | (private) |
| 2989 | fn | writePath | (private) |
| 3011 | fn | writePath | (private) |
| 3033 | fn | writePath | (private) |
| 3052 | fn | writePath | (private) |
| 3073 | fn | writePath | (private) |
| 3088 | fn | writePath | (private) |
| 3106 | fn | writePath | (private) |
| 3127 | fn | writePath | (private) |
| 3148 | fn | writePath | (private) |
| 3168 | fn | writePath | (private) |
| 3189 | fn | writePath | (private) |
| 3208 | fn | persist | (private) |
| 3224 | fn | writePath | (private) |
| 3239 | fn | persist | (private) |
| 3257 | fn | persist | (private) |
| 3272 | fn | writePath | (private) |
| 3287 | fn | writePath | (private) |
| 3306 | fn | writePath | (private) |
| 3325 | fn | writePath | (private) |
| 3331 | fn | persist | (private) |
| 3347 | fn | writePath | (private) |
| 3350 | fn | persist | (private) |
| 3365 | fn | writePath | (private) |
| 3368 | fn | persist | (private) |
| 3383 | fn | writePath | (private) |
| 3386 | fn | persist | (private) |
| 3402 | fn | writePath | (private) |
| 3405 | fn | persist | (private) |
| 3406 | fn | inner | (private) |
| 3424 | fn | writeCurrent | (private) |
| 3427 | fn | persist | (private) |
| 3428 | fn | inner | (private) |
| 3447 | fn | writePath | (private) |
| 3450 | fn | persist | (private) |
| 3466 | fn | persist | (private) |
| 3467 | fn | inner | (private) |
| 3484 | fn | persist | (private) |
| 3486 | fn | inner | (private) |
| 3503 | fn | persist | (private) |
| 3505 | fn | inner | (private) |
| 3522 | fn | persist | (private) |
| 3523 | fn | inner | (private) |
| 3540 | fn | persist | (private) |
| 3541 | fn | inner | (private) |
| 3558 | fn | persist | (private) |
| 3559 | fn | inner | (private) |
| 3575 | fn | persist | (private) |
| 3576 | fn | inner | (private) |
| 3594 | fn | persist | (private) |
| 3613 | fn | persist | (private) |
| 3615 | fn | inner | (private) |
| 3633 | fn | noopParam | (private) |
| 3634 | fn | persist | (private) |
| 3635 | fn | inner | (private) |
| 3654 | fn | persist | (private) |
| 3655 | fn | inner | (private) |
| 3674 | fn | persist | (private) |
| 3680 | fn | inner | (private) |
| 3699 | fn | persist | (private) |
| 3700 | fn | inner | (private) |
| 3728 | fn | persist | (private) |
| 3729 | fn | inner | (private) |
| 3752 | fn | persist | (private) |
| 3753 | fn | inner | (private) |
| 3776 | fn | persist | (private) |
| 3777 | fn | inner | (private) |
| 3800 | fn | persist | (private) |
| 3801 | fn | inner | (private) |
| 3802 | fn | save | (private) |
| 3820 | fn | persist | (private) |
| 3821 | fn | inner | (private) |
| 3838 | fn | persist | (private) |
| 3839 | fn | inner | (private) |
| 3858 | fn | persist | (private) |
| 3859 | fn | inner | (private) |
| 3881 | fn | persist | (private) |
| 3899 | fn | helper | (private) |
| 3902 | fn | persist | (private) |
| 3903 | fn | inner | (private) |
| 3920 | fn | persist | (private) |
| 3939 | fn | persist | (private) |
| 3940 | fn | inner | (private) |
| 3941 | fn | deeper | (private) |
| 3960 | fn | persist | (private) |
| 3961 | fn | inner | (private) |
| 3963 | fn | deeper | (private) |
| 3981 | fn | persist | (private) |
| 3982 | fn | inner | (private) |
| 3983 | fn | deeper | (private) |
| 4003 | fn | persist | (private) |
| 4005 | fn | configure | (private) |
| 4024 | fn | persist | (private) |
| 4025 | fn | inner | (private) |
| 4047 | fn | persist | (private) |
| 4048 | fn | inner | (private) |
| 4050 | fn | save | (private) |
| 4068 | fn | persist | (private) |
| 4069 | fn | inner | (private) |
| 4093 | fn | persist | (private) |
| 4109 | fn | persist | (private) |
| 4110 | fn | safe | (private) |
| 4129 | fn | persist | (private) |
| 4130 | fn | safe | (private) |
| 4149 | fn | persist | (private) |
| 4150 | fn | safe | (private) |
| 4168 | fn | persist | (private) |
| 4187 | fn | persist | (private) |
| 4188 | fn | save | (private) |
| 4208 | fn | persist | (private) |
| 4227 | fn | persist | (private) |
| 4229 | fn | inner | (private) |
| 4245 | fn | persist | (private) |
| 4247 | fn | inner | (private) |
| 4249 | fn | inner | (private) |
| 4265 | fn | persist | (private) |
| 4266 | fn | inner | (private) |
| 4268 | fn | inner | (private) |
| 4284 | fn | persist | (private) |
| 4302 | fn | persist | (private) |
| 4303 | fn | save | (private) |
| 4306 | fn | inner | (private) |
| 4323 | fn | persist | (private) |
| 4324 | fn | inner | (private) |
| 4327 | fn | deeper | (private) |
| 4344 | fn | persist | (private) |
| 4345 | fn | inner | (private) |
| 4346 | fn | deeper | (private) |
| 4363 | fn | persist | (private) |
| 4364 | fn | inner | (private) |
| 4365 | fn | deeper | (private) |
| 4383 | fn | persist | (private) |
| 4384 | fn | inner | (private) |
| 4406 | fn | persist | (private) |
| 4407 | fn | inner | (private) |
| 4408 | fn | save | (private) |
| 4426 | fn | persist | (private) |
| 4428 | fn | inner | (private) |
| 4429 | fn | write | (private) |
| 4446 | fn | persist | (private) |
| 4448 | fn | inner | (private) |
| 4465 | fn | persist | (private) |
| 4466 | fn | inner | (private) |
| 4481 | fn | persist | (private) |
| 4501 | fn | persist | (private) |
| 4502 | fn | inner | (private) |
| 4520 | fn | persist | (private) |
| 4521 | fn | inner | (private) |
| 4540 | fn | persist | (private) |
| 4542 | fn | configure | (private) |
| 4560 | fn | persist | (private) |
| 4581 | fn | persist | (private) |
| 4582 | fn | inner | (private) |
| 4601 | fn | persist | (private) |
| 4602 | fn | inner | (private) |
| 4604 | fn | save | (private) |
| 4606 | fn | save | (private) |
| 4624 | fn | persist | (private) |
| 4625 | fn | inner | (private) |
| 4645 | fn | persist | (private) |
| 4647 | fn | configure | (private) |
| 4650 | fn | inner | (private) |
| 4668 | fn | persist | (private) |
| 4669 | fn | inner | (private) |
| 4692 | fn | persist | (private) |
| 4693 | fn | inner | (private) |
| 4718 | fn | persist | (private) |
| 4719 | fn | inner | (private) |
| 4746 | fn | persist | (private) |
| 4747 | fn | inner | (private) |
| 4768 | fn | persist | (private) |
| 4769 | fn | inner | (private) |
| 4790 | fn | persist | (private) |
| 4791 | fn | inner | (private) |
| 4792 | fn | save | (private) |
| 4812 | fn | persist | (private) |
| 4813 | fn | inner | (private) |
| 4814 | fn | save | (private) |
| 4817 | fn | save | (private) |
| 4836 | fn | persist | (private) |
| 4839 | fn | inner | (private) |
| 4857 | fn | persist | (private) |
| 4858 | fn | inner | (private) |
| 4879 | fn | writePath | (private) |
| 4882 | fn | persist | (private) |
| 4883 | fn | inner | (private) |
| 4901 | fn | persist | (private) |
| 4902 | fn | inner | (private) |
| 4919 | fn | persist | (private) |
| 4921 | fn | inner | (private) |
| 4923 | fn | write | (private) |
| 4940 | fn | writePath | (private) |
| 4945 | fn | persist | (private) |
| 4946 | fn | inner | (private) |
| 4965 | fn | writePath | (private) |
| 4969 | fn | persist | (private) |
| 4970 | fn | inner | (private) |
| 4988 | fn | persist | (private) |
| 4989 | fn | inner | (private) |
| 5012 | fn | persist | (private) |
| 5033 | fn | persist | (private) |
| 5054 | fn | persist | (private) |
| 5073 | fn | persist | (private) |
| 5074 | fn | inner | (private) |
| 5092 | fn | persist | (private) |
| 5111 | fn | persist | (private) |
| 5134 | fn | persist | (private) |
| 5155 | fn | persist | (private) |
| 5174 | fn | persist | (private) |
| 5197 | fn | persist | (private) |
| 5198 | fn | inner | (private) |
| 5224 | fn | persist | (private) |
| 5244 | fn | persist | (private) |
| 5251 | fn | write | (private) |
| 5267 | fn | persist | (private) |
| 5289 | fn | persist | (private) |
| 5312 | fn | persist | (private) |
| 5341 | fn | persist | (private) |
| 5366 | fn | persist | (private) |
| 5390 | fn | persist | (private) |
| 5391 | fn | inner | (private) |
| 5395 | fn | inner | (private) |
| 5411 | fn | helper | (private) |
| 5414 | fn | persist | (private) |
| 5429 | fn | persist | (private) |
| 5431 | fn | inner | (private) |
| 5449 | fn | persist | (private) |
| 5450 | fn | inner | (private) |
| 5471 | fn | inner | (private) |
| 5474 | fn | persist | (private) |
| 5475 | fn | forward | (private) |
| 5492 | fn | persistPath | (private) |
| 5495 | fn | persistOptions | (private) |
| 5498 | fn | persistDestructured | (private) |
| 5525 | fn | persist | (private) |
| 5540 | fn | persist | (private) |
| 5556 | fn | persist | (private) |
| 5574 | fn | persist | (private) |
| 5593 | fn | persist | (private) |
| 5609 | fn | persist | (private) |
| 5625 | fn | persist | (private) |
| 5641 | fn | persist | (private) |
| 5657 | fn | persist | (private) |
| 5673 | fn | persist | (private) |
| 5689 | fn | persist | (private) |
| 5707 | fn | persist | (private) |
| 5726 | fn | persist | (private) |
| 5743 | fn | persist | (private) |
| 5760 | fn | persist | (private) |
| 5777 | fn | persist | (private) |
| 5793 | fn | persist | (private) |
| 5809 | fn | persist | (private) |
| 5825 | fn | persist | (private) |
| 5841 | fn | persist | (private) |
| 5857 | fn | persist | (private) |
| 5873 | fn | persist | (private) |
| 5889 | fn | persist | (private) |
| 5907 | fn | persist | (private) |
| 5925 | fn | persist | (private) |
| 5944 | fn | persist | (private) |
| 5960 | fn | persist | (private) |
| 5976 | fn | persist | (private) |
| 5997 | fn | persist | (private) |
| 6004 | fn | inner | (private) |
| 6021 | fn | persist | (private) |
| 6037 | fn | persist | (private) |
| 6053 | fn | persist | (private) |
| 6071 | fn | persist | (private) |
| 6091 | fn | persist | (private) |
| 6107 | fn | persist | (private) |
| 6121 | fn | persist | (private) |
| 6135 | fn | persist | (private) |
| 6149 | fn | persist | (private) |
| 6165 | fn | append | (private) |
| 6168 | fn | replace | (private) |
| 6187 | fn | persist | (private) |
| 6190 | fn | save | (private) |
| 6205 | fn | persist | (private) |
| 6208 | fn | save | (private) |
| 6223 | fn | persist | (private) |
| 6226 | fn | save | (private) |
| 6241 | fn | persist | (private) |
| 6244 | fn | save | (private) |
| 6259 | fn | persist | (private) |
| 6262 | fn | save | (private) |
| 6277 | fn | persist | (private) |
| 6293 | fn | persist | (private) |
| 6323 | fn | persist | (private) |
| 6340 | fn | helper | (private) |
| 6343 | fn | persist | (private) |
| 6391 | fn | persist | (private) |
| 6407 | fn | persist | (private) |
| 6423 | fn | persist | (private) |
| 6444 | fn | persist | (private) |
| 6465 | fn | persist | (private) |
| 6488 | fn | persist | (private) |
| 6513 | fn | persist | (private) |
| 6536 | fn | persist | (private) |
| 6557 | fn | persist | (private) |
| 6580 | fn | persist | (private) |
| 6601 | fn | persist | (private) |
| 6698 | fn | save | (private) |
| 6755 | fn | persist | (private) |
| 6794 | fn | persist | (private) |
| 6811 | fn | persist | (private) |
| 6834 | fn | persist | (private) |
| 6835 | fn | save | (private) |
| 7032 | fn | persist | (private) |
| 7049 | fn | noopParam | (private) |
| 7050 | fn | persist | (private) |
| 7067 | fn | persist | (private) |
| 7085 | fn | persist | (private) |
| 7102 | fn | persist | (private) |
| 7119 | fn | persist | (private) |
| 7136 | fn | persist | (private) |
| 7137 | fn | inner | (private) |
| 7156 | fn | persist | (private) |
| 7182 | fn | persist | (private) |
| 7203 | fn | persist | (private) |
| 7204 | fn | save | (private) |
| 7223 | fn | persist | (private) |
| 7237 | fn | persist | (private) |
| 7251 | fn | persist | (private) |
| 7266 | fn | persist | (private) |
| 7283 | fn | persist | (private) |
| 7297 | fn | persist | (private) |
| 7312 | fn | persist | (private) |
| 7316 | fn | persist | (private) |
| 7332 | fn | persist | (private) |
| 7350 | fn | persist | (private) |
| 7353 | fn | caller | (private) |
| 7367 | fn | persist | (private) |
| 7464 | fn | persist | (private) |
| 7495 | fn | persist | (private) |
| 7512 | fn | persist | (private) |
| 7529 | fn | persist | (private) |
| 7546 | fn | persist | (private) |
| 7595 | fn | writePath | (private) |
| 7885 | fn | persist | (private) |
| 7904 | fn | persist | (private) |
| 8007 | fn | persist | (private) |
| 8023 | fn | persist | (private) |
| 8068 | fn | persist | (private) |
| 8085 | fn | persist | (private) |
| 8100 | fn | persist | (private) |
| 8117 | fn | persist | (private) |
| 8134 | fn | persist | (private) |
| 8155 | fn | persist | (private) |
| 8175 | fn | persist | (private) |
| 8192 | fn | persist | (private) |
| 8209 | fn | persist | (private) |
| 8229 | fn | persist | (private) |
| 8249 | fn | persist | (private) |
| 8265 | fn | persist | (private) |
| 8281 | fn | persist | (private) |
| 8297 | fn | persist | (private) |
| 8315 | fn | persist | (private) |
| 8335 | fn | persist | (private) |
| 8352 | fn | persist | (private) |
| 8368 | fn | persist | (private) |
| 8385 | fn | persist | (private) |
| 8437 | fn | persist | (private) |
| 8438 | fn | inner | (private) |
| 8460 | fn | persist | (private) |
| 8498 | fn | later | (private) |
| 8514 | fn | persist | (private) |
| 8532 | fn | persist | (private) |
| 8551 | fn | persist | (private) |
| 8569 | fn | persist | (private) |
| 8590 | fn | save | pub |

## test/scripts/check-deadcode-unused-files.test.ts (533 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | class | FakeKnipProcess | (private) |
| 23 | fn | finishFakeProcess | (private) |
| 32 | fn | isProcessAlive | (private) |
| 41 | fn | sleep | (private) |
| 47 | fn | waitForFile | (private) |
| 60 | fn | waitForPidFile | (private) |
| 74 | fn | waitForDead | (private) |
| 85 | fn | waitForChildClose | (private) |

## test/scripts/check-extension-package-tsc-boundary.test.ts (785 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | fn | createTempExtensionRoot | (private) |
| 36 | fn | writeCanaryArtifacts | (private) |
| 43 | fn | createMockPipe | (private) |
| 51 | fn | isProcessAlive | (private) |
| 60 | fn | sleep | (private) |
| 66 | fn | waitForFile | (private) |
| 80 | fn | waitForPidFile | (private) |
| 94 | fn | waitForDead | (private) |
| 105 | fn | waitForChildClose | (private) |

## test/scripts/check-gateway-watch-regression.test.ts (567 lines)

_No symbols extracted._

## test/scripts/check-openclaw-package-tarball.test.ts (822 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | withTarball | (private) |

## test/scripts/check-openclawdevelopmentplan01-section-13.3-ledger.test.ts (990 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 230 | fn | writeArtifacts | (private) |
| 607 | fn | expectSome | (private) |
| 608 | fn | expectLabel | (private) |
| 659 | fn | bySection | (private) |

## test/scripts/check-script-declarations.test.ts (528 lines)

_No symbols extracted._

## test/scripts/check-session-accessor-boundary.test.ts (694 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 254 | fn | loadSessionStore | pub |
| 255 | fn | updateSessionStore | pub |
| 256 | fn | resolveSessionFilePath | pub |
| 385 | fn | listSessionTranscriptCorpusEntriesForAgentSync | (private) |
| 388 | fn | listSessionFilesForAgent | pub |
| 409 | fn | loadViaHelper | (private) |
| 412 | fn | listSessionTranscriptCorpusEntriesForAgentSync | (private) |
| 428 | fn | listSessionTranscriptCorpusEntriesForAgentSync | (private) |
| 431 | fn | listSessionFilesForAgent | pub |

## test/scripts/ci-node-test-plan.test.ts (1172 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | VitestTestConfig | (private) |
| 24 | type | VitestConfig | (private) |
| 46 | fn | listTestFiles | (private) |
| 58 | fn | visit | (private) |
| 73 | fn | listMatchedTestFiles | (private) |
| 87 | fn | listAllToolingTestFiles | (private) |
| 102 | fn | isGatewayServerTestFile | (private) |
| 119 | fn | expectWriter | (private) |
| 242 | fn | jobOf | (private) |

## test/scripts/ci-workflow-guards.test.ts (5212 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | WorkflowStep | (private) |
| 57 | fn | readCiWorkflow | (private) |
| 61 | fn | interpolateCiGateVerifyScript | (private) |
| 70 | fn | runCiGateFixture | (private) |
| 84 | fn | runCiManifestFixture | (private) |
| 111 | fn | createNodeTestShards | pub |
| 118 | fn | createNodeTestShardBundles | pub |
| 127 | fn | createNodeTestShards | pub |
| 163 | fn | createChangedNodeTestShards | pub |
| 272 | fn | readAndroidReleaseWorkflow | (private) |
| 276 | fn | readAndroidToolchainAction | (private) |
| 280 | fn | readBuildArtifactsTestboxWorkflow | (private) |
| 284 | fn | readTestboxWorkflow | (private) |
| 288 | fn | readWorkflowSanityWorkflow | (private) |
| 292 | fn | readRealBehaviorProofWorkflow | (private) |
| 296 | fn | readMaturityScorecardWorkflow | (private) |
| 300 | fn | runMaturityInvocationScenario | (private) |
| 328 | fn | runMaturityArtifactCopyScenario | (private) |
| 383 | fn | readQaProfileEvidenceWorkflow | (private) |
| 387 | fn | readReleaseChecksWorkflow | (private) |
| 391 | fn | readCriticalQualityWorkflow | (private) |
| 395 | fn | readWorkflow | (private) |
| 401 | fn | readPullRequestEditFields | (private) |
| 408 | fn | readTrackedText | (private) |
| 415 | fn | readAndroidCompileSdk | (private) |
| 423 | fn | findYamlFiles | (private) |
| 433 | fn | findUnpinnedExternalActions | (private) |
| 458 | fn | runGit | (private) |
| 462 | fn | writeExecutable | (private) |
| 467 | fn | runDependencyCheckFixture | (private) |
| 516 | fn | runGeneratedPublisherScenario | (private) |
| 776 | fn | changedFieldsForStep | (private) |
| 2392 | fn | writeManifest | (private) |
| 2395 | fn | fingerprint | (private) |

## test/scripts/clawhub-bootstrap-artifact.test.ts (556 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | fixture | (private) |
| 78 | fn | common | (private) |
| 94 | fn | writeTarField | (private) |
| 102 | fn | writeTarOctal | (private) |
| 106 | fn | tarEntry | (private) |
| 136 | fn | writeClawPack | (private) |

## test/scripts/cli-startup-bench-spawner.test.ts (505 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | makeCase | (private) |
| 161 | fn | makeCase | (private) |
| 216 | fn | makeCase | (private) |

## test/scripts/codex-install-assertions.test.ts (999 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | fn | nodeOptionsWithoutExperimentalWarnings | (private) |
| 48 | fn | writeJson | (private) |
| 53 | fn | writeAuthProfileStoreSqlite | (private) |
| 88 | fn | runCodexOnDemandAssertions | (private) |
| 101 | fn | runCodexNpmPluginLiveAssertions | (private) |
| 133 | fn | runCodexNpmPluginLiveFollowthroughAssertions | (private) |
| 173 | fn | runCodexNpmPluginLiveConfigure | (private) |
| 186 | fn | runCodexNpmPluginLivePluginAssertions | (private) |
| 203 | fn | writeCodexBindingStateSqlite | (private) |
| 255 | fn | writeSessionStoreSqlite | (private) |
| 313 | fn | replaceSessionTranscriptMessages | (private) |
| 341 | fn | transcriptToolCall | (private) |
| 348 | fn | transcriptToolResult | (private) |
| 358 | fn | createCodexNpmPluginLiveFixture | (private) |
| 388 | fn | createCodexNpmPluginLiveFollowthroughFixture | (private) |
| 489 | fn | convertCodexNpmPluginLiveFixtureToLegacy | (private) |
| 529 | fn | createLegacyCodexNpmPluginLiveFixture | (private) |
| 533 | fn | createCodexInstallFixture | (private) |

## test/scripts/control-ui-i18n.test.ts (540 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 124 | fn | processIsAlive | (private) |
| 133 | fn | waitForProcessExit | (private) |
| 146 | fn | waitForChildClose | (private) |

## test/scripts/crabbox-wrapper.test.ts (4995 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | makeFakeCrabbox | (private) |
| 54 | fn | writeFakeCrabbox | (private) |
| 279 | fn | makeSlowVersionCrabbox | (private) |
| 299 | fn | makeSlowHelpCrabbox | (private) |
| 322 | fn | testTimingPreload | (private) |
| 354 | fn | windowsNodeCmdShim | (private) |
| 377 | fn | shellSingleQuote | (private) |
| 381 | fn | makeFakeGit | (private) |
| 503 | fn | shellArgListCondition | (private) |
| 511 | fn | runWrapper | (private) |
| 526 | type | WrapperOptions | (private) |
| 536 | fn | spawnWrapper | (private) |
| 549 | fn | wrapperEnv | (private) |
| 573 | fn | parseFakeCrabboxOutput | (private) |
| 581 | fn | readField | (private) |
| 603 | fn | normalizeShellLineEndings | (private) |
| 607 | fn | waitForCondition | (private) |
| 618 | fn | waitForProcessExit | (private) |
| 633 | fn | isProcessAlive | (private) |
| 642 | fn | runSignalCleanupProof | (private) |
| 681 | fn | testCrabboxConfigDir | (private) |
| 691 | fn | testHomeEnv | (private) |
| 700 | fn | expectGroupedShellCommand | (private) |
| 713 | fn | expectChangedGateGitBootstrap | (private) |

## test/scripts/dependency-guard-script.test.ts (776 lines)

_No symbols extracted._

## test/scripts/dev-tooling-safety.test.ts (1271 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | expectedTaskkillPath | (private) |
| 33 | fn | waitForCondition | (private) |
| 50 | fn | waitForPidFile | (private) |
| 63 | fn | isProcessAlive | (private) |
| 72 | fn | writeFakePromptCli | (private) |
| 97 | fn | waitForChildExit | (private) |
| 116 | type | CliResult | (private) |
| 122 | fn | runCli | (private) |
| 143 | fn | createCliPair | (private) |

## test/scripts/docker-all-scheduler.test.ts (1066 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | fn | writeFrozenScenarioContract | (private) |
| 61 | fn | expectDeclaredDispatchInputs | (private) |
| 75 | fn | activePool | (private) |
| 91 | fn | isProcessAlive | (private) |
| 100 | fn | waitFor | (private) |
| 111 | fn | waitForChildClose | (private) |

## test/scripts/docker-build-helper.test.ts (4876 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 132 | fn | packageBackedDockerRunnerPaths | (private) |
| 140 | fn | shellQuote | (private) |
| 144 | fn | cleanupSmokeLogTailHelpers | (private) |
| 159 | fn | runCleanupDefaultPlatform | (private) |
| 456 | fn | runProbe | (private) |
| 637 | fn | waitForFile | (private) |
| 646 | fn | waitForExit | (private) |
| 650 | fn | waitForDead | (private) |
| 661 | fn | runInterruptedBuild | (private) |

## test/scripts/docker-e2e-helper-cli.test.ts (782 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | runHelper | (private) |
| 40 | fn | downloadedDir | (private) |
| 49 | fn | emittedWorkflowCommands | (private) |
| 56 | fn | expectDeclaredDispatchInputs | (private) |

## test/scripts/docker-e2e-plan.test.ts (1480 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | writeFrozenScenarioContract | (private) |
| 39 | fn | planFor | (private) |
| 57 | fn | requireFirstLane | (private) |
| 65 | fn | summarizeLane | (private) |
| 78 | fn | publishedUpgradeSurvivorLane | (private) |
| 97 | fn | updateMigrationLane | (private) |
| 110 | fn | bundledPluginSweepLane | (private) |
| 242 | fn | countLane | (private) |

## test/scripts/find-reusable-release-validation.test.ts (1003 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | interface | ParentTuple | (private) |
| 55 | interface | ChildTuple | (private) |
| 74 | interface | NormalizedEvidence | (private) |
| 106 | interface | RunFixture | (private) |
| 120 | fn | git | (private) |
| 128 | fn | commitFile | (private) |
| 135 | fn | plistFor | (private) |
| 150 | fn | createRepo | (private) |
| 174 | fn | cloneHead | (private) |
| 182 | fn | getSharedRepo | (private) |
| 191 | fn | normalizedEvidence | (private) |
| 397 | fn | fixtureName | (private) |
| 401 | fn | setUpFixtures | (private) |
| 432 | fn | runResolver | (private) |
| 510 | fn | parseOutput | (private) |

## test/scripts/generate-npm-shrinkwrap.test.ts (535 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | repoRelativePath | (private) |

## test/scripts/install-cli.test.ts (1324 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | runInstallCliShell | (private) |
| 35 | fn | linkRequiredShellTools | (private) |

## test/scripts/install-ps1.test.ts (1073 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | extractFunctionBody | (private) |
| 28 | fn | findPowerShell | (private) |
| 44 | fn | toPowerShellSingleQuotedLiteral | (private) |
| 48 | fn | createFailingNodeFixture | (private) |
| 71 | fn | runPowerShell | (private) |
| 77 | fn | runPowerShellAsync | (private) |
| 545 | fn | expectBatchedPowerShellCase | (private) |

## test/scripts/install-sh.test.ts (2425 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | runInstallShell | (private) |

## test/scripts/ios-periphery-comment-workflow.test.ts (900 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | WorkflowStep | (private) |
| 28 | type | Workflow | (private) |
| 36 | type | ProducerWorkflow | (private) |
| 54 | type | Artifact | (private) |
| 61 | type | ExistingComment | (private) |
| 70 | type | WorkflowRun | (private) |
| 79 | fn | commenterScript | (private) |
| 91 | fn | runCommenter | (private) |
| 253 | fn | expectUnavailableComment | (private) |
| 258 | fn | crc32 | (private) |
| 269 | fn | u16 | (private) |
| 275 | fn | u32 | (private) |
| 281 | fn | makeZip | (private) |
| 352 | fn | markFirstCentralDirectoryEntryEncrypted | (private) |
| 362 | fn | setFirstEntryUncompressedSize | (private) |

## test/scripts/kitchen-sink-plugin-assertions.test.ts (916 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | writeJson | (private) |
| 35 | fn | fullSurfaceInspectPayload | (private) |
| 65 | fn | diagnosticErrors | (private) |
| 69 | fn | runAssertInstalled | (private) |
| 138 | fn | runAssertClawhubInstalled | (private) |
| 210 | fn | runScanLogs | (private) |
| 230 | fn | runSweepShell | (private) |
| 238 | fn | toBashScript | (private) |
| 245 | fn | toBashEnv | (private) |
| 258 | fn | toGitBashPath | (private) |

## test/scripts/kitchen-sink-rpc-walk.test.ts (2619 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 79 | fn | expectedTaskkillPath | (private) |
| 83 | fn | expectedWindowsSystem32Path | (private) |
| 87 | fn | expectedPowerShellPath | (private) |
| 96 | fn | captureSyncError | (private) |
| 2584 | fn | readText | (private) |
| 2588 | fn | waitFor | (private) |
| 2598 | fn | waitForChildClose | (private) |
| 2612 | fn | isProcessAlive | (private) |

## test/scripts/kova-report-gate.test.ts (968 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | JsonObject | (private) |
| 14 | type | PathPart | (private) |
| 15 | type | ReportMutation | (private) |
| 30 | fn | objectAt | (private) |
| 37 | fn | arrayAt | (private) |
| 44 | fn | valueAt | (private) |
| 52 | fn | setAt | (private) |
| 64 | fn | deleteAt | (private) |
| 73 | fn | metric | (private) |
| 85 | fn | commandResult | (private) |
| 95 | fn | cleanupResult | (private) |
| 105 | fn | targetCleanup | (private) |
| 114 | fn | normalProfiling | (private) |
| 129 | fn | deepProfiling | (private) |
| 144 | fn | infoCard | (private) |
| 154 | fn | partialReport | (private) |
| 230 | fn | profiledResourceReport | (private) |
| 347 | fn | attachPassingBaseline | (private) |
| 373 | fn | blockingCard | (private) |
| 379 | fn | addProfiledPassRecord | (private) |
| 401 | fn | writeReport | (private) |
| 409 | fn | expectProfiledRejection | (private) |
| 413 | fn | expectPartialRejection | (private) |

## test/scripts/local-heavy-check-runtime.test.ts (551 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | makeEnv | (private) |

## test/scripts/mantis-publish-pr-evidence.test.ts (506 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | writeFixtureManifest | (private) |
| 118 | fn | fetchImpl | (private) |

## test/scripts/measure-rpc-rtt.test.ts (852 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | expectedTaskkillPath | (private) |
| 25 | fn | restoreEnvValue | (private) |
| 33 | fn | withDefaultWindowsSystemRoot | (private) |
| 46 | class | FakeWebSocket | (private) |
| 80 | fn | jsonResponse | (private) |

## test/scripts/native-app-i18n.test.ts (1198 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | type | NativeTranslationArtifact | (private) |
| 26 | fn | artifactEntry | (private) |

## test/scripts/openclaw-cross-os-release-checks.test.ts (2289 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 111 | fn | isProcessAlive | (private) |
| 120 | fn | waitForFile | (private) |
| 131 | fn | waitForDead | (private) |
| 142 | fn | waitForExit | (private) |

## test/scripts/openclaw-e2e-instance.test.ts (1293 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | shellQuote | (private) |
| 22 | fn | runHelper | (private) |
| 38 | fn | base64 | (private) |
| 42 | fn | shellTestEnv | (private) |
| 57 | fn | runSourcedHelper | (private) |
| 68 | fn | expectShellSuccess | (private) |
| 74 | fn | writePackageFixture | (private) |
| 89 | fn | writeNodeShim | (private) |
| 95 | fn | writeBashExecutable | (private) |
| 100 | fn | writeFakeTimeout | (private) |
| 128 | fn | writeFakeNpm | (private) |
| 132 | fn | expectNpmInstallObserved | (private) |

## test/scripts/openclaw-live-updater.test.ts (2015 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | fn | git | (private) |
| 56 | fn | setTrustedGitConfig | (private) |
| 63 | fn | fetchFixtureMain | (private) |
| 71 | fn | maintainFixture | (private) |
| 100 | fn | initializeFixture | (private) |
| 123 | type | Fixture | (private) |
| 125 | fn | makeFixture | (private) |
| 126 | fn | makeFixture | (private) |
| 127 | fn | makeFixture | (private) |
| 149 | fn | writeBuild | (private) |
| 177 | fn | fakeCommands | (private) |
| 1365 | fn | inspectGatewayDeployment | (private) |

## test/scripts/openclaw-performance-workflow.test.ts (878 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | WorkflowStep | (private) |
| 32 | type | WorkflowJob | (private) |
| 46 | type | Workflow | (private) |
| 50 | fn | readWorkflow | (private) |
| 54 | fn | findStep | (private) |
| 61 | fn | runGit | (private) |
| 69 | fn | kovaMatrixEntries | (private) |
| 539 | fn | execute | (private) |
| 625 | fn | configureWriter | (private) |
| 631 | fn | commitReport | (private) |

## test/scripts/openclaw-release-telegram-qa-workflow.test.ts (1035 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | WorkflowJob | (private) |
| 33 | fn | workflowJob | (private) |
| 44 | fn | workflowStep | (private) |
| 52 | fn | runIdentityVerification | (private) |
| 137 | fn | runAdvisoryStatus | (private) |

## test/scripts/package-acceptance-workflow.test.ts (4859 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 64 | type | WorkflowStep | (private) |
| 76 | type | WorkflowMatrixEntry | (private) |
| 84 | type | WorkflowJob | (private) |
| 113 | type | Workflow | (private) |
| 118 | fn | readWorkflow | (private) |
| 122 | fn | isExecutable | (private) |
| 126 | fn | workflowPaths | (private) |
| 132 | fn | workflowJob | (private) |
| 140 | fn | workflowStep | (private) |
| 148 | fn | shellFunctionSource | (private) |
| 162 | fn | workflowMatrixEntry | (private) |
| 172 | fn | expectTextToIncludeAll | (private) |
| 181 | fn | runPackageAcceptanceSummary | (private) |
| 210 | fn | runNpmTelegramInputValidation | (private) |
| 238 | fn | runNpmTelegramArtifactValidation | (private) |
| 297 | fn | runReleasePublishInputValidation | (private) |
| 325 | fn | runOpenClawNpmTrustedRefGuard | (private) |
| 352 | fn | runReleaseChecksSummary | (private) |
| 628 | fn | compare | (private) |
| 2659 | fn | resolveProfile | (private) |

## test/scripts/package-mac-app.test.ts (818 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | makePlist | (private) |
| 32 | fn | runHelper | (private) |
| 39 | fn | getPackageManagerHelperBlock | (private) |
| 50 | fn | getSwiftToolchainBlock | (private) |
| 61 | fn | getSparkleBuildHelperBlock | (private) |
| 72 | fn | getSwiftPackageResolutionBlock | (private) |
| 83 | fn | getStopPackagedAppBlock | (private) |
| 94 | fn | getSwiftCompatibilityBlock | (private) |
| 105 | fn | runStopPackagedAppHarness | (private) |
| 142 | fn | runSwiftCompatibilityHarness | (private) |
| 166 | fn | runSwiftPackageResolutionHarness | (private) |

## test/scripts/parallels-npm-update-smoke.test.ts (997 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | fn | makeTempDir | (private) |
| 46 | fn | pidIsAlive | (private) |
| 55 | fn | waitForDead | (private) |
| 68 | fn | waitFor | (private) |
| 81 | fn | decodePowerShellFromArgs | (private) |
| 86 | fn | extractWindowsBackgroundControlMarkers | (private) |
| 145 | class | FailingNpmUpdateSmoke | (private) |

## test/scripts/parallels-smoke-model.test.ts (2309 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 108 | fn | countNonEmptyLines | (private) |
| 118 | fn | expectFatalError | (private) |
| 132 | fn | fakePrlctlEnv | (private) |
| 141 | fn | writeFakePrlctl | (private) |
| 149 | class | FakeHostServerChild | (private) |
| 170 | class | ExhaustedCleanupPhaseRunner | (private) |
| 187 | fn | unusedLoopbackPort | (private) |
| 202 | fn | isProcessAlive | (private) |
| 211 | fn | waitFor | (private) |
| 222 | fn | waitForProcessClose | (private) |

## test/scripts/plugin-gateway-gauntlet.test.ts (2017 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | writeManifest | (private) |
| 51 | fn | minimalQaSuiteSummary | (private) |
| 76 | fn | isProcessAlive | (private) |
| 85 | fn | waitFor | (private) |
| 96 | fn | waitForClose | (private) |

## test/scripts/plugin-prerelease-test-plan.test.ts (786 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | WorkflowStep | (private) |
| 25 | type | WorkflowMatrixEntry | (private) |
| 29 | fn | readCiWorkflow | (private) |
| 33 | fn | readFullReleaseValidationWorkflow | (private) |
| 37 | fn | readPluginPrereleaseWorkflow | (private) |
| 41 | fn | getDockerLane | (private) |

## test/scripts/plugin-publication-artifact.test.ts (1783 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | fn | tempDir | (private) |
| 60 | fn | sha256 | (private) |
| 64 | fn | writeTarString | (private) |
| 72 | fn | writeTarOctal | (private) |
| 80 | type | TarEntry | (private) |
| 89 | fn | tarEntry | (private) |
| 124 | fn | mutateTarEntryHeader | (private) |
| 143 | fn | createTarball | (private) |
| 147 | fn | createTarballFromParts | (private) |
| 151 | fn | paxRecord | (private) |
| 164 | fn | crc32 | (private) |
| 175 | type | ZipFile | (private) |
| 194 | fn | createZip | (private) |
| 268 | fn | inspectTestZip | (private) |
| 291 | fn | metaPackageJson | (private) |
| 314 | fn | publicationParams | (private) |
| 337 | fn | createFixture | (private) |
| 406 | fn | writeArtifactMetadata | (private) |
| 423 | fn | writeWorkflowRunMetadata | (private) |
| 441 | fn | replaceArtifactZip | (private) |
| 448 | fn | verifyFixture | (private) |
| 796 | fn | fetchImpl | (private) |
| 867 | fn | downloadForAttempts | (private) |
| 897 | fn | fetchImpl | (private) |

## test/scripts/plugins-assertions.test.ts (1489 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | shellQuote | (private) |
| 28 | fn | writeJson | (private) |
| 33 | fn | runAssertionAsync | (private) |
| 68 | fn | writeFixtureServerShims | (private) |
| 86 | fn | writeStubbornFixtureServerShims | (private) |
| 104 | fn | writeCrashingFixtureServerShim | (private) |
| 122 | fn | isProcessAlive | (private) |
| 131 | fn | waitForDead | (private) |
| 141 | fn | runPluginsSweepShell | (private) |
| 149 | fn | waitForPortFile | (private) |
| 162 | fn | requestFixtureRegistry | (private) |

## test/scripts/pnpm-audit-prod.test.ts (501 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 489 | fn | toLintErrorObject | (private) |

## test/scripts/postinstall-bundled-plugins.test.ts (1187 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | expectPathExists | (private) |
| 28 | fn | expectPathMissing | (private) |
| 32 | fn | writePluginPackage | (private) |
| 56 | fn | writeBaileysMediaFile | (private) |
| 71 | fn | existsSyncWithoutGlobalCompileCache | (private) |

## test/scripts/pr-operation-lock.test.ts (2221 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | createProcessGroupTimingPreload | (private) |
| 60 | fn | spawnDetached | (private) |
| 69 | fn | createTemplateRepo | (private) |
| 88 | fn | createRepo | (private) |
| 99 | fn | bashSource | (private) |
| 112 | fn | writeOperationFixture | (private) |
| 122 | fn | installPrCliFixture | (private) |
| 156 | fn | runSupervisedFixture | (private) |
| 192 | fn | onClose | (private) |
| 225 | fn | runLockShell | (private) |
| 234 | fn | spawnHolder | (private) |
| 259 | fn | spawnCandidate | (private) |
| 275 | fn | spawnHolderWithChild | (private) |
| 293 | fn | waitFor | (private) |
| 304 | fn | validProcessId | (private) |
| 308 | fn | readProcessIdFile | (private) |
| 316 | fn | waitForProcessId | (private) |
| 329 | fn | childStatus | (private) |
| 333 | fn | waitForExit | (private) |
| 339 | fn | onExit | (private) |
| 356 | fn | stopChild | (private) |
| 364 | fn | stopChildLeader | (private) |
| 372 | fn | cleanupChildren | (private) |
| 392 | fn | signalTestChild | (private) |
| 407 | fn | cleanupProcessGroup | (private) |
| 425 | fn | readOperationProcessGroup | (private) |
| 441 | fn | cleanupController | (private) |
| 460 | fn | refOid | (private) |
| 464 | fn | refExists | (private) |
| 472 | fn | processGroupExists | (private) |
| 494 | fn | killProcessGroup | (private) |

## test/scripts/pr-prepare-gates.test.ts (996 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | makeTempDir | (private) |
| 24 | fn | makeLockRepoDir | (private) |
| 30 | fn | heavyCheckLockDir | (private) |
| 34 | fn | sanitizedEnv | (private) |
| 48 | fn | runGatesBash | (private) |
| 82 | fn | spawnGateLockHolder | (private) |
| 92 | fn | makeRetryRepo | (private) |
| 132 | fn | makeSyncRepo | (private) |
| 136 | fn | git | (private) |
| 176 | fn | prepareSyncHeadStubs | (private) |
| 191 | fn | waitFor | (private) |
| 202 | fn | waitForExit | (private) |
| 211 | fn | waitForStderr | (private) |
| 223 | fn | cleanup | (private) |
| 228 | fn | onData | (private) |
| 235 | fn | onExit | (private) |

## test/scripts/preinstall-package-manager-warning.test.ts (526 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | requireFirstWarning | (private) |

## test/scripts/prepare-extension-package-boundary-artifacts.test.ts (660 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | expectedTaskkillPath | (private) |
| 33 | fn | createMockPipe | (private) |
| 48 | fn | waitForFile | (private) |
| 67 | fn | isProcessAlive | (private) |
| 79 | fn | waitForDead | (private) |
| 90 | fn | waitForProcessExit | (private) |
| 488 | fn | appendScript | (private) |

## test/scripts/real-behavior-proof-policy.test.ts (705 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | externalPr | (private) |
| 33 | fn | proofBody | (private) |
| 50 | fn | stalledResponse | (private) |
| 75 | fn | contentLengthResponse | (private) |
| 84 | fn | chunkedResponse | (private) |
| 538 | fn | jsonResponse | (private) |
| 693 | fn | toLintErrorObject | (private) |

## test/scripts/release-beta-verifier.test.ts (773 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | sha256 | (private) |
| 23 | fn | crc32 | (private) |
| 34 | fn | createStoredZip | (private) |
| 294 | fn | validate | (private) |
| 450 | fn | createFixture | (private) |
| 495 | fn | download | (private) |

## test/scripts/release-candidate-checklist.test.ts (1212 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | fn | jsonResponse | (private) |
| 36 | fn | withGithubApiTimeoutEnv | (private) |

## test/scripts/release-ci-summary.test.ts (1827 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 88 | fn | crc32 | (private) |
| 99 | fn | u16 | (private) |
| 105 | fn | u32 | (private) |
| 111 | fn | makeStoredZip | (private) |
| 176 | fn | artifactDigest | (private) |
| 180 | fn | rawManifest | (private) |
| 260 | fn | trustedMainPackageFixture | (private) |

## test/scripts/release-no-push-workflow.test.ts (1064 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | WorkflowInput | (private) |
| 37 | type | WorkflowStep | (private) |
| 47 | type | WorkflowJob | (private) |
| 58 | type | Workflow | (private) |
| 70 | type | PermissionLevel | (private) |
| 71 | type | PermissionMap | (private) |
| 75 | fn | permissionAt | (private) |
| 92 | fn | permissionScopes | (private) |
| 104 | fn | reusablePermissionViolations | (private) |
| 125 | fn | workflowPermissionViolations | (private) |
| 166 | fn | readWorkflow | (private) |
| 170 | fn | job | (private) |
| 178 | fn | step | (private) |
| 186 | fn | expectReadOnlyPackagePermission | (private) |

## test/scripts/release-telegram-candidate-archive.test.ts (1103 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | makeTempDir | (private) |
| 37 | fn | runHelper | (private) |
| 44 | fn | expectSuccess | (private) |
| 50 | fn | expectFailure | (private) |
| 57 | fn | compressTar | (private) |
| 66 | fn | makeCompressedArchive | (private) |
| 82 | fn | makeDepthFirstProducerArchive | (private) |
| 121 | fn | makeDeclaredExtensionArchive | (private) |
| 150 | fn | makeLongMetadataArchive | (private) |
| 190 | fn | makeDeepSortedArchive | (private) |
| 228 | fn | makeCumulativePaxArchive | (private) |
| 257 | fn | makeValidHardlinkArchive | (private) |
| 291 | fn | makeManyMemberTar | (private) |
| 336 | fn | makePaxHeavyTar | (private) |
| 371 | fn | probeTarInfoCache | (private) |

## test/scripts/report-test-temp-creations.test.ts (555 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | createNestedGitEnv | (private) |
| 514 | fn | git | (private) |

## test/scripts/resolve-openclaw-package-candidate.test.ts (1433 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | expectedTaskkillPath | (private) |
| 33 | type | LookupAddress | (private) |
| 35 | fn | lookupAddresses | (private) |
| 39 | fn | unexpectedFetch | (private) |
| 43 | fn | missing | (private) |
| 50 | fn | isProcessAlive | (private) |
| 59 | fn | sleep | (private) |
| 65 | fn | waitForFile | (private) |
| 76 | fn | waitForDead | (private) |
| 87 | fn | waitForExit | (private) |
| 1421 | fn | toLintErrorObject | (private) |

## test/scripts/restart-mac.test.ts (662 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | shellQuote | (private) |
| 25 | fn | runGatewayPortCheck | (private) |
| 48 | fn | runCleanupFunction | (private) |
| 102 | fn | runManagedSupervisorClassifier | (private) |
| 154 | fn | runCanonicalizeAppBundle | (private) |
| 187 | fn | runRestartArgParser | (private) |
| 219 | fn | runRestartLockHarness | (private) |
| 249 | fn | runForeignProcessClassifier | (private) |

## test/scripts/run-oxlint.test.ts (795 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | waitFor | (private) |
| 42 | fn | isProcessAlive | (private) |

## test/scripts/run-vitest.test.ts (1065 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 1037 | fn | waitFor | (private) |
| 1047 | fn | waitForClose | (private) |
| 1058 | fn | isProcessAlive | (private) |

## test/scripts/runtime-postbuild.test.ts (946 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | expectPathMissing | (private) |

## test/scripts/secret-provider-integrations.test.ts (997 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | expectedTaskkillPath | (private) |
| 18 | fn | makeTempDir | (private) |
| 24 | fn | waitFor | (private) |
| 40 | fn | waitForPidFile | (private) |
| 53 | fn | waitForChildClose | (private) |
| 67 | fn | isProcessAlive | (private) |
| 76 | fn | writeStallingOpenClaw | (private) |
| 131 | fn | writeLeakingStartupOpenClaw | (private) |
| 151 | fn | writeSignaledStartupOpenClaw | (private) |
| 174 | fn | writeNoisySecretsConfigureOpenClaw | (private) |
| 193 | fn | runProofHarness | (private) |

## test/scripts/telegram-user-crabbox-proof.test.ts (1020 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | expectedTaskkillPath | (private) |
| 42 | fn | makeTempDir | (private) |
| 48 | fn | isProcessAlive | (private) |
| 57 | fn | writeExecutable | (private) |
| 61 | fn | runProofCli | (private) |
| 77 | fn | waitFor | (private) |

## test/scripts/telegram-user-credential.test.ts (673 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | expectedTaskkillPath | (private) |
| 27 | fn | makeTempDir | (private) |
| 33 | fn | isProcessAlive | (private) |
| 42 | fn | waitForFile | (private) |
| 55 | fn | waitForDead | (private) |
| 68 | fn | waitForExit | (private) |

## test/scripts/test-extension.test.ts (1173 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | RunGroupParams | (private) |
| 42 | fn | createConcurrentExtensionBatchPlan | (private) |
| 64 | fn | runScriptResult | (private) |
| 71 | fn | requireFirstMockArg | (private) |
| 83 | fn | findExtensionWithoutTests | (private) |
| 94 | fn | listExtensionTestFiles | (private) |
| 98 | fn | expectPositiveIntegerMetric | (private) |
| 1095 | fn | writeFakePnpm | (private) |
| 1133 | fn | waitFor | (private) |
| 1143 | fn | waitForClose | (private) |
| 1157 | fn | fileExists | (private) |
| 1166 | fn | isProcessAlive | (private) |

## test/scripts/test-group-report.test.ts (1448 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | makeTempDir | (private) |
| 35 | fn | isProcessAlive | (private) |
| 44 | fn | sleep | (private) |
| 50 | fn | waitForFile | (private) |
| 61 | fn | waitForDead | (private) |
| 72 | fn | expectedTaskkillPath | (private) |
| 76 | fn | waitForChildClose | (private) |
| 91 | fn | writeGroupedReport | (private) |

## test/scripts/test-install-sh-docker.test.ts (1976 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | class | ScriptExit | (private) |
| 53 | fn | extractNonrootNodePreflight | (private) |
| 62 | fn | extractInstallE2eInstallerFunction | (private) |
| 74 | fn | runInstallE2eInstallerFixture | (private) |
| 143 | fn | runNonrootNodePreflight | (private) |
| 187 | fn | runDefaultSmokePlatform | (private) |
| 218 | fn | extractInstallE2eAgentJsonParser | (private) |
| 229 | fn | normalizeInstallE2eAgentOutput | (private) |
| 248 | fn | extractInstallSmokeUpdateJsonParser | (private) |
| 259 | fn | validateInstallSmokeUpdateJson | (private) |
| 287 | fn | extractInstallSmokeInstallerPipeline | (private) |
| 296 | fn | readNulSeparatedArgs | (private) |
| 300 | fn | runInstallSmokeInstallerPipelineFixture | (private) |
| 387 | fn | expectInstallDockerfileContract | (private) |
| 408 | fn | waitForCondition | (private) |
| 423 | fn | isProcessAlive | (private) |
| 432 | fn | extractReadPackTarballFilename | (private) |
| 441 | fn | runReadPackTarballFilename | (private) |
| 465 | fn | extractEnsureLocalUpdateDistImportClosure | (private) |
| 476 | type | RestorePathEscape | (private) |
| 478 | fn | runRestoreLocalDistFixture | (private) |
| 1917 | fn | step | (private) |

## test/scripts/test-live-shard.test.ts (597 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 542 | fn | writeFakePnpm | (private) |
| 566 | fn | waitFor | (private) |
| 576 | fn | waitForClose | (private) |
| 590 | fn | isProcessAlive | (private) |

## test/scripts/test-projects.test.ts (5330 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | VitestTestConfig | (private) |
| 53 | type | VitestConfig | (private) |
| 57 | type | VitestConfigFactory | (private) |
| 59 | fn | isVitestConfigFactory | (private) |
| 63 | fn | findVitestConfigFactory | (private) |
| 76 | fn | loadRawVitestConfig | (private) |
| 94 | fn | listMatchedTestFilesForConfig | (private) |
| 114 | fn | listFullSuiteTestFileMatches | (private) |
| 125 | fn | listNormalFullSuiteTestFiles | (private) |
| 148 | fn | listExpectedFullExtensionRunPlans | (private) |
| 165 | fn | hasGitGatewayFileListing | (private) |
| 174 | fn | withTinyGitRepo | (private) |
| 192 | fn | withTinyFileTree | (private) |
| 4198 | fn | localCheckEnv | (private) |

## test/scripts/tsdown-build.test.ts (1114 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | expectedTaskkillPath | (private) |
| 35 | fn | expectPathMissing | (private) |
| 49 | fn | isProcessAlive | (private) |
| 58 | fn | sleep | (private) |
| 64 | fn | waitForFile | (private) |
| 78 | fn | waitForPidFile | (private) |
| 92 | fn | waitForDead | (private) |
| 103 | fn | waitForChildClose | (private) |
| 767 | fn | createWriteSink | (private) |

## test/scripts/verify-clawhub-published-artifact.test.ts (667 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | immutableBinding | (private) |
| 42 | fn | identity | (private) |
| 51 | fn | writeManifest | (private) |
| 88 | fn | writeExpectedArtifact | (private) |
| 97 | fn | artifactResponse | (private) |
| 109 | fn | metadataResponse | (private) |
| 128 | fn | registryFetch | (private) |

## test/scripts/verify-pr-hosted-gates.test.ts (1283 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | WorkflowRunFixture | (private) |
| 48 | fn | successfulRun | (private) |
| 66 | fn | releaseGateRun | (private) |
| 74 | fn | queuedBuildArtifactFallbackRuns | (private) |
| 89 | fn | collectHostedGateEvidence | (private) |
| 93 | type | GitExec | (private) |
| 94 | type | CollectHostedGateOptions | (private) |
| 98 | type | HostedGateEvidence | (private) |
| 107 | fn | priorSuccessfulCiRun | (private) |
| 115 | type | PatchIdExecOptions | (private) |
| 122 | fn | createPatchIdExec | (private) |
| 165 | fn | patchReuseOptions | (private) |

## test/scripts/verify-release-notes.test.ts (1007 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | git | (private) |
| 432 | fn | fetchApi | (private) |
| 487 | fn | fetchApi | (private) |
| 514 | fn | fetchApi | (private) |

## test/scripts/write-cli-startup-metadata.test.ts (698 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | writeFixtureFile | (private) |
| 27 | fn | writeStartupMetadataSourceSignatureFixture | (private) |
| 67 | fn | processIsAlive | (private) |
| 76 | fn | expectedTaskkillPath | (private) |
| 80 | fn | createSpawnTextChild | (private) |
| 88 | fn | waitForProcessExit | (private) |
| 104 | fn | waitForChildClose | (private) |
