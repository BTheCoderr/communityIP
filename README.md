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

Regina and the team can update site copy, images, news posts, and team profiles in **[Decap CMS](https://decapcms.org/)** — a simple editor at `/admin` (no WordPress required).

### `/admin` login URL

**[https://www.communityip.org/admin](https://www.communityip.org/admin)**

1. Log in with **Netlify Identity** (invite-only).
2. Edit content in the CMS collections below.
3. Click **Publish** — changes commit to GitHub and trigger a new Netlify deploy.

**First-time Netlify setup (admin only):**

- Netlify → **Identity** → Enable Identity
- Identity → **Registration** → Invite only
- Identity → **Services** → Enable **Git Gateway**
- Invite Regina’s email from the Identity tab

With `publish_mode: editorial_workflow`, drafts can be reviewed before publishing to `main`.

### How to edit the homepage

1. Open `/admin` → **Home Page**
2. Edit hero title, subtitle, subheadline, CTAs, and section copy
3. Click **Publish**

### How to update the hero image

1. `/admin` → **Home Page** → **Hero image** → **Image**
2. Upload a new photo (saved to `public/uploads/`)
3. Update alt text if needed → **Publish**

### How to edit About / Board

- **About Page** — intro, origin story paragraphs, co-presidents intro, board intro
- **Co-Presidents** — names, roles, photos, bios, sort order
- **Board Members** — same fields for directors

Upload headshots via the **Photo** field in each person’s entry.

### How to add or edit News posts

1. `/admin` → **News Posts** → **New News Posts** (or open an existing post)
2. Fill in title, slug, date, author, excerpt, and body (Markdown)
3. Optional: add a **Featured image**
4. **Publish**

News files live in `src/content/news/*.md`.

### How to edit the Research page

1. `/admin` → **Research Page**
2. Edit intro, chart sections, research stats, source list, and Lost Einsteins section
3. **Publish**

### CMS collections

| Collection | What it controls |
|------------|------------------|
| **Site Settings** | Site name, logo, contact email, donate link, social links, mission, programs |
| **Home Page** | Hero, CTAs, get-involved copy, support section, research teaser |
| **About Page** | Intro, origin story, leadership copy |
| **Research Page** | Access gap report, stats, sources, Lost Einsteins |
| **Contact Page** | Intro, instructions, form labels, address |
| **Co-Presidents** | Team profiles |
| **Board Members** | Board profiles |
| **News Posts** | Blog/news articles |
| **Disclaimers** | Short, long, and footer legal snippets |

### Content file locations (for developers)

| File | Purpose |
|------|---------|
| `src/content/home.json` | Homepage |
| `src/content/site.json` | Site settings, mission, donate, social |
| `src/content/about.json` | About page |
| `src/content/research.json` | Research page + stats |
| `src/content/contact.json` | Contact page |
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

**How to check submissions:** Netlify dashboard → **Forms** → select a form → view entries.

**Form notifications:** Netlify → **Forms** → **Form notifications** — configure email recipients (e.g. `hello@communityip.org`).

Detection forms live in `public/forms.html` (do not remove). See `docs/FORMS.md` for technical details.

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
