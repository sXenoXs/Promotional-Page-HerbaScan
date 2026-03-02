# Security

This is a static promotional landing page with no server-side logic or user data. The following measures are in place to reduce risk.

## Headers (Vercel)

When deployed on Vercel, `vercel.json` applies these response headers to all routes:

| Header | Purpose |
|--------|---------|
| **X-Content-Type-Options: nosniff** | Prevents browsers from MIME-sniffing; reduces XSS and drive-by download risk. |
| **X-Frame-Options: DENY** | Prevents the site from being embedded in iframes (clickjacking). |
| **X-XSS-Protection: 1; mode=block** | Legacy XSS filter (modern browsers rely on CSP; kept for older clients). |
| **Referrer-Policy: strict-origin-when-cross-origin** | Limits referrer sent to external sites. |
| **Permissions-Policy** | Disables camera, microphone, and geolocation (not needed for this page). |
| **Strict-Transport-Security** | Enforces HTTPS and preload eligibility. |

## HTML meta tags

- **X-Content-Type-Options** and **Referrer** are also set via `<meta>` in `index.html` as a fallback if headers are not applied (e.g. local preview or another host).

## Recommendations

- Keep dependencies updated (`npm audit`, `npm update`).
- When adding forms or external scripts, consider a **Content-Security-Policy** header; start with report-only to avoid breaking the app.
- Store any secrets (e.g. analytics IDs) in environment variables, not in source.
