# Community IP 2.0 — Clickable MVP Prototype

A polished, mobile-first Next.js prototype for Community IP — the digital front door for underserved inventors seeking IP education and intake support.

**Frontend prototype only.** No backend, database, auth, or payments connected yet.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Netlify

Connected via Git — push to `main` to trigger a deploy.

Build settings (also in `netlify.toml`):
- **Build command:** `npm run build`
- **Plugin:** `@netlify/plugin-nextjs`

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/for-inventors` | Inventor landing |
| `/readiness-checker` | IP Readiness Checker quiz |
| `/apply` | Multi-step intake form |
| `/education` | Education Hub index |
| `/education/[slug]` | Individual guides |
| `/volunteer` | Volunteer page |
| `/partners` | Partners page |
| `/donate` | Donate page |
| `/about` | About |
| `/contact` | Contact |
| `/legal` | Disclaimers |

## Updating content

Content is stored in simple data files so Regina and the team can edit without touching components:

| What to update | File |
|----------------|------|
| **Disclaimer language** | `src/lib/content/disclaimers.ts` |
| **Homepage copy** | `src/lib/content/home.ts` |
| **Homepage hero image** | `src/lib/content/home.ts` → `HERO_IMAGE.src` (file in `public/images/hero/`) |
| **Team / co-presidents / board** | `src/lib/content/team.ts` + photos in `public/team/` |
| **Mission, about, donate, contact** | `src/lib/content/wordpress.ts` |
| **Blog posts & bylines** | `src/lib/news.ts` (set `author` field) |
| **Education articles** | `src/lib/education.ts` |

### Hero image (boy maker)

1. Save the WordPress image to `public/images/hero/boy-maker.jpg` (or similar)
2. Edit `HERO_IMAGE` in `src/lib/content/home.ts`:
   ```ts
   src: "/images/hero/boy-maker.jpg",
   placeholder: false,
   ```
3. Redeploy

### Team headshots

Drop JPGs in `public/team/` matching filenames in `src/lib/content/team.ts` (e.g. `ashley-gregory.jpg`).

### Forms

Submissions go to **Netlify → Forms**. Configure email notifications to `hello@communityip.org`. See `docs/FORMS.md`.

Future option: [Decap CMS](https://decapcms.org/) / Netlify CMS for browser-based editing.

## Legal note

Submitting a form does not create an attorney-client relationship. See `src/lib/content/disclaimers.ts` for site-wide language.
