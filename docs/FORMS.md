# Forms & email routing

All public forms use **Netlify Forms**. Submissions appear in:

**Netlify → Site → Forms**

Configure email alerts once for all forms:

1. Netlify → **Site configuration** → **Forms** → **Form notifications**
2. Add **Email notification** → `hello@communityip.org`
3. Optional: separate notifications per form (`contact`, `intake`, `volunteer-interest`, `partner-interest`)

Hidden detection forms live in `public/forms.html` (required at build time).

---

## Contact (`/contact`) — form name: `contact`

Fields: firstName, lastName, email, phone, message

## Apply for Help (`/apply`) — form name: `intake`

Full inventor intake wizard including NDA consent. Includes a generated **referenceNumber** for the applicant.

Key fields: contact info, idea details, disclosure history, support needed, consent flags.

## Volunteer (`/volunteer`) — form name: `volunteer-interest`

Fields: firstName, lastName, email, role, message

## Partner (`/partners`) — form name: `partner-interest`

Fields: orgName, contactName, email, role, message

---

## Not connected to Netlify

| Feature | Notes |
|---------|--------|
| **Readiness checker** | Browser-only quiz, no submission |
| **Spotfund donate** | External link to spot.fund/lrsnklsc |

## Direct email

`hello@communityip.org` — DreamHost mail (MX records). Separate from form notifications; configure both.

## After deploy

New forms register on the **next Netlify build**. Test each form once, then confirm submissions appear under **Forms** in the Netlify dashboard.
