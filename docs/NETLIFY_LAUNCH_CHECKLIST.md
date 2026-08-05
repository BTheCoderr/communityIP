# Netlify launch checklist — Community IP

Use this after pushing to `main`. Do **not** check off items unless verified in the Netlify dashboard or by live testing.

**Site:** [communityip.org](https://www.communityip.org)  
**Repo:** [BTheCoderr/communityIP](https://github.com/BTheCoderr/communityIP)

---

## Identity & CMS (`/admin`)

- [ ] **Identity → Enable Identity** (if not already on)
- [ ] **Identity → Registration → Invite only**
- [ ] **Identity → Services → Git Gateway → Enable**
- [ ] **Invite Regina** (and any other editors) from Identity → Invite users
- [ ] Regina accepts invite, sets password, signs in at `/admin`
- [ ] Test **password recovery** flow (recovery link lands on `/admin`)
- [ ] Test **logout** and sign-in again
- [ ] Open **Site Settings** in CMS → edit a harmless field → **Publish** → confirm deploy succeeds
- [ ] Confirm `public/admin/config.yml` does **not** contain `local_backend: true` in production (use `config.local.yml` for local dev only)

---

## Forms (Netlify Forms)

Hidden detection forms: `public/forms.html`  
Live forms submit via `POST` to `/forms.html`.

| Form name | Page | Verified |
|-----------|------|----------|
| `contact` | `/contact` | [ ] |
| `intake` | `/apply` | [ ] |
| `volunteer-interest` | `/volunteer` | [ ] |
| `partner-interest` | `/partners` | [ ] |

For each form:

- [ ] Form appears under **Netlify → Forms** after production deploy
- [ ] Submit one test entry on the live site
- [ ] Entry appears in dashboard (not silently dropped)
- [ ] Honeypot field `bot-field` present (hidden)
- [ ] Success state or thank-you redirect works
- [ ] **Intake:** reference number shown to applicant after submit
- [ ] **Form notifications:** email alert to `hello@communityip.org` (or designated inbox)

---

## Deploy & site health

- [ ] Production deploy from `main` succeeds (`npm run build` clean in Netlify log)
- [ ] Homepage, About, Research, Contact load without errors
- [ ] Header logo legible on mobile (320px) and desktop (1440px)
- [ ] Footer green matches logo badge (`#0B5F40`)
- [ ] No broken images or 404 links on main routes
- [ ] `/admin/help.html` opens for editors

---

## Domain & SSL

- [ ] Primary domain set to `www.communityip.org` (or apex — match Netlify primary domain setting)
- [ ] HTTPS certificate active
- [ ] No redirect loops (apex ↔ www handled in Netlify domain settings only)

---

## Handoff to Regina

Send Regina:

1. Netlify Identity invite (if not already sent)
2. Login URL: **https://www.communityip.org/admin**
3. Link to **docs/REGINA_ADMIN_GUIDE.md** (or `/admin/help.html`)
4. Note that form submissions are viewed in Netlify Forms, not in the CMS

---

## Git Gateway migration (future — not blocking launch)

When Netlify retires Git Gateway:

1. Switch `public/admin/config.yml` to GitHub backend (see `docs/CMS.md` Option A)
2. Create GitHub OAuth App
3. Invite editors as GitHub collaborators with **Write** access
4. Update Regina’s login instructions

---

## Local CMS development (developers only)

```bash
npx decap-server
# In another terminal:
npm run dev
```

Temporarily use `public/admin/config.local.yml` (includes `local_backend: true`). **Do not deploy** that file as production `config.yml`.
