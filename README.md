# Community IP

Public nonprofit website for Community IP — helping underserved inventors access intellectual property education and support.

**Live:** https://www.communityip.org

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy

Push to `main` on GitHub — Netlify builds automatically (`netlify.toml`).

## Editing Community IP content

Regina and the team can update site copy, images, news posts, and team profiles in a WordPress-like editor powered by **[Decap CMS](https://decapcms.org/)**.

### Access the editor

1. Go to **[https://www.communityip.org/admin](https://www.communityip.org/admin)** (or `/admin` on any deploy preview).
2. Log in with **Netlify Identity** (invite-only — ask an admin to invite you from Netlify → Site configuration → Identity).
3. Edit content and click **Publish** — changes commit to GitHub and trigger a new Netlify deploy.

**First-time Netlify setup (admin only):**

- Netlify → **Identity** → Enable Identity
- Identity → **Registration** → Invite only
- Identity → **Services** → Enable **Git Gateway**
- Invite Regina’s email from the Identity tab

### What you can edit in `/admin`

| Collection | What it controls |
|------------|------------------|
| **Homepage** | Headlines, CTAs, hero image & alt text |
| **Site Settings** | Mission, contact info, donate/Spotfund link, programs, social links, research stats |
| **About Page** | Title, story paragraphs, who we serve |
| **Research Page** | Page intro, report copy, credibility section |
| **Co-Presidents** | Names, photos, bios, LinkedIn, sort order |
| **Board Members** | Same fields for board directors |
| **News / Blog** | Title, date, author, excerpt, body, featured image |
| **Disclaimers** | Legal snippets site-wide |

### Update homepage copy or hero image

1. Open `/admin` → **Homepage**
2. Edit text fields or click **Hero image → Image** to upload a new photo (saved to `public/uploads/`)
3. Publish — site rebuilds in ~2 minutes

### Add or edit a blog / news post

1. `/admin` → **News / Blog** → **New News / Blog** (or open an existing post)
2. Fill in title, slug, date, author, excerpt, and body (Markdown supported)
3. Optional: add a **Featured image**
4. Publish

### Update board members or headshots

1. `/admin` → **Co-Presidents** or **Board Members**
2. Edit a person or add a new list item
3. Upload a photo via the **Photo** field (or keep an existing path like `/team/name.jpg`)
4. Set **Sort order** to control display order
5. Publish

### Edit research page content

1. `/admin` → **Research Page** — page header, report labels, Lost Einsteins quote block, credibility copy
2. `/admin` → **Site Settings → Research statistics** — headline, intro, metrics list

### Content file locations (for developers)

| File | Purpose |
|------|---------|
| `src/content/home.json` | Homepage |
| `src/content/site.json` | Mission, contact, donate, social, stats |
| `src/content/about.json` | About page |
| `src/content/research.json` | Research page |
| `src/content/disclaimers.json` | Legal snippets |
| `src/content/team.json` | Co-presidents |
| `src/content/board.json` | Board members |
| `src/content/news/*.md` | News posts |
| `public/uploads/` | CMS-uploaded images |

### Netlify Forms (separate from CMS)

Form submissions are **not** edited in Decap CMS. They are handled by **Netlify Forms**:

| Form name | Page |
|-----------|------|
| `contact` | `/contact` |
| `intake` | `/apply` |
| `volunteer-interest` | `/volunteer` |
| `partner-interest` | `/partners` |

- View submissions: Netlify → **Forms**
- Email notifications: Netlify → **Forms** → **Form notifications** (configure `hello@communityip.org` and any other recipients)
- Detection forms: `public/forms.html` (do not remove)

See `docs/FORMS.md` for technical details.

### Local CMS testing (optional)

```bash
npx decap-server
npm run dev
```

Visit `/admin` with `local_backend: true` in `public/admin/config.yml`.

## Site map

- **Home** `/`
- **About** `/about`
- **Research** `/research`
- **Contact** `/contact`

Action paths (not main nav): Get IP Help, Volunteer, Partner, Donate — linked from homepage cards and footer.

## Legal note

Submitting a form does not create an attorney-client relationship. Disclaimer text is editable in `/admin` → Disclaimers.
