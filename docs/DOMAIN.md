# Connecting communityip.org to Netlify

This guide moves the live domain from DreamHost WordPress to the Netlify Next.js site at **communityip.netlify.app**.

## 1. Netlify — add domains

1. Open [Netlify](https://app.netlify.com) → your **communityIP** site
2. **Domain management** → **Add a domain**
3. Add both:
   - `communityip.org`
   - `www.communityip.org`
4. Set **Primary domain** to `www.communityip.org`
5. Enable **HTTPS** (Netlify will provision Let's Encrypt after DNS propagates)

The repo's `netlify.toml` already redirects apex `communityip.org` → `www.communityip.org`.

## 2. DreamHost — switch web hosting to DNS only

If DreamHost blocks custom DNS records because the domain is **Fully Hosted**:

1. DreamHost panel → **Domains** → **Manage Domains**
2. Edit `communityip.org`
3. Change hosting to **DNS Only** (or remove WordPress/full hosting for the web site)
4. **Do not** remove or change **MX records** — email must keep working

## 3. DreamHost DNS records

In **DNS** for `communityip.org`, set:

| Type | Name | Value |
|------|------|--------|
| **CNAME** | `www` | `communityip.netlify.app` |
| **ALIAS** or **ANAME** | `@` (root/apex) | `apex-loadbalancer.netlify.com` |

If DreamHost does **not** support ALIAS/ANAME for the root domain:

| Type | Name | Value |
|------|------|--------|
| **A** | `@` | `75.2.60.5` |

**Leave unchanged:** all **MX**, **TXT** (SPF/DKIM), and any email-related records.

Remove or update old WordPress A/CNAME records that pointed to DreamHost web servers.

## 4. Verify propagation

After saving DNS (can take up to 24–48 hours, often much faster):

```bash
dig www.communityip.org CNAME +short
dig communityip.org A +short
```

Expected:
- `www` → `communityip.netlify.app`
- apex → Netlify load balancer or `75.2.60.5`

In Netlify → **Domain management**, confirm both domains show **Verified** and **HTTPS** is active.

## 5. Test the live site

- https://www.communityip.org
- https://www.communityip.org/news
- https://www.communityip.org/board
- https://www.communityip.org/contact (Netlify Forms)
- Legacy URLs redirect, e.g. `/board-of-directors` → `/board`

## 6. Contact form (Netlify Forms)

Submissions appear in Netlify → **Forms** after deploy. Enable form notifications under **Site settings → Forms → Form notifications**.

## 7. Spotfund donations

Donate page links to: https://spot.fund/lrsnklsc

---

**Note:** You cannot configure DreamHost or Netlify DNS from this repo — complete steps 1–3 in each dashboard. Push code to GitHub to trigger a Netlify deploy after content changes.
