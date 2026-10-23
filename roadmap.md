# AutoKart deployment security fix

- [x] Upgrade the affected TanStack packages and regenerate bun.lock without changing security configuration.
- [x] Confirm GHSA-qx66-fv34-fjm8 / CVE-2026-102989; minimum patched react-start is 1.168.60.
- [x] Verify automated build OK, frozen-lockfile install, and existing search, cart, and test checkout without browser errors.
- [x] Fix router error-page compatibility using the exported ErrorComponentProps type without changing behavior.
- [ ] Verify the GitHub commit reached the connected repository (blocked: Git sync status is available only in Lovable's Git settings).
- [ ] Verify the Vercel deployment (blocked: no Vercel deployment access or fresh deployment log is available).