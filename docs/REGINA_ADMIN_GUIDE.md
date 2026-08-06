# Regina Admin Guide — Community IP Website

Plain-language instructions for editing **communityip.org** without touching code.

**Content manager URL:** [https://www.communityip.org/admin](https://www.communityip.org/admin)

**Quick help inside admin:** click **Help for editors** (bottom-right on the login screen) or open [/admin/help.html](https://www.communityip.org/admin/help.html).

---

## Before your first login

1. Baheem (or your site admin) will send a **Netlify Identity invite** to your email.
2. Open the invite link and **set your password**.
3. Registration is **invite-only** — you cannot create an account without an invite.

If the invite link expires, ask Baheem to resend the invite from the Netlify dashboard.

---

## How to sign in

1. Go to [https://www.communityip.org/admin](https://www.communityip.org/admin)
2. Click **Login with Netlify Identity**
3. Enter your email and password
4. You should see the Content Manager with collections on the left (Home Page, About Page, Site Settings, etc.)

**Forgot password?** Use **Forgot password?** on the login screen. The recovery link opens at `/admin` — do not close the tab until you finish resetting.

**Sign out:** use the account menu (top-right) → **Log out**.

---

## What you can edit in the CMS

| Collection | What it controls |
|------------|------------------|
| **Site Settings** | Site name, logo, contact email, donate link, social links, mission text, header navigation, footer links, partner logos |
| **Home Page** | Hero, mission block, get-involved copy, research teaser, support section |
| **About Page** | Intro, origin story, leadership copy |
| **Research Page** | Access gap stats, sources, credibility section |
| **Contact Page** | Intro, address, form labels |
| **Co-Presidents** | Names, photos, bios, sort order |
| **Board Members** | Board profiles |
| **News Posts** | Blog articles |
| **Disclaimers** | Legal snippets shown on forms and footer |

**Not in the CMS:** form submissions (contact, apply, volunteer, partner). Those appear in **Netlify → Forms** for the site admin.

---

## Edit a page

1. Sign in at `/admin`
2. Click a collection on the left (e.g. **Home Page**)
3. Change the fields — plain text, links, or images
4. Click **Save** to keep a draft, or **Publish** when ready for the live site

---

## Update the logo or an image

1. **Site logo (header/footer):** **Site Settings** → **Logo** → choose image → **Publish**
2. **Homepage hero:** **Home Page** → **Hero image** → upload → update alt text → **Publish**
3. **Team photos:** **Co-Presidents** or **Board Members** → open a person → **Photo** → upload → **Publish**
4. **News featured image:** open a **News Posts** entry → **Featured image** → upload → **Publish**
5. **Partner logos:** **Site Settings** → **Partner logos** → **Publish**

Uploaded images are stored automatically when you publish. You do not need to upload files anywhere else.

---

## Update header navigation or footer links

1. **Site Settings** → **Header (top navigation)**
   - Edit navigation link labels and paths
   - Edit the **Get IP Help** button label and link
2. **Site Settings** → **Footer**
   - Edit nonprofit label, contact email display, copyright name
   - Edit footer link columns (Get involved, Organization, Legal)
3. **Publish** when finished

Mission text in the footer comes from **Site Settings → Mission (site-wide) → Statement**.

---

## Add or change a partner logo

Partner logos appear in three places at once: the homepage (under the hero), the About page, and the Research page.

1. **Site Settings** → **Partner logos**
2. Edit **Label above logos** if the wording should change (currently "Accelerator partner")
3. Under **Partners**, click **Add** to add an organization — enter its name, upload its logo, and paste its website URL (the URL is optional)
4. Use the drag handle to reorder, or the trash icon to remove one
5. **Publish** when finished

If you remove every partner, the section disappears from all three pages automatically.

---

## Leadership and board profiles

1. **Co-Presidents** — edit or reorder co-president entries (name, role, photo, bio, LinkedIn)
2. **Board Members** — same for board directors
3. Use **Sort order** (number) to control display order — lower numbers appear first
4. **Publish** after changes

---

## Add or edit a news post

1. **News Posts** → **New News Posts** (or open an existing post)
2. Fill in **Title**, **Slug** (lowercase-with-hyphens), **Publish date**, **Excerpt**, and **Body**
3. Optional: **Featured image**, **Author**
4. **Save** (draft) or **Publish**

Published posts appear at `/news` and `/news/your-slug`.

---

## Save a draft vs. publish

- **Save** — stores your work as a draft. The live site does not change yet.
- **Publish** — sends changes to GitHub and triggers a new website deploy (usually a few minutes).

With editorial workflow enabled, drafts can be reviewed before going live.

---

## What happens after you publish

1. Changes are saved to the website’s GitHub repository
2. Netlify automatically rebuilds the site
3. Within a few minutes, **communityip.org** shows your updates
4. If something looks wrong, contact Baheem — previous versions can be restored

---

## If login fails

1. Confirm you are at [https://www.communityip.org/admin](https://www.communityip.org/admin) (not a preview URL)
2. Try **Forgot password?**
3. Confirm your invite was accepted (check email for Netlify invite)
4. Contact **Baheem** to:
   - Resend the Netlify Identity invite
   - Confirm Git Gateway is enabled
   - Confirm your email is on the invite list

You do **not** need a GitHub account for the current setup.

---

## Future note (for administrators)

Netlify **Git Gateway** is deprecated but still used for this site so Regina can log in with email/password. When Git Gateway is retired, the site can migrate to **GitHub login** — see `docs/CMS.md` Option A. That migration does not change how Regina edits content; only how she signs in.

---

## Contact

- **Website contact form:** [communityip.org/contact](https://www.communityip.org/contact)
- **Technical / login issues:** contact Baheem (site administrator)
