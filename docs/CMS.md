# Decap CMS backend options

Community IP uses **[Decap CMS](https://decapcms.org/)** (free, open source) at `/admin`. Content is stored as JSON and Markdown in this GitHub repo — not in a paid CMS.

## Low-cost stack

| Piece | Role | Cost |
|-------|------|------|
| **Decap CMS** | `/admin` editor for Regina and the team | Free (open source) |
| **GitHub** | Content backend — commits to `src/content/` | Free (public or private repo) |
| **Netlify Free** | Hosting, deploys, custom domain, SSL | Free tier is enough to start |
| **Netlify Forms** | Contact, intake, volunteer, partner submissions | Included on Free plan (limits apply) |

No WordPress, Contentful, Sanity, or other paid CMS is required.

## Option A — GitHub backend (future-proof)

Editors log in with **GitHub** and need **write access** to the repo.

**Pros:** Not tied to Netlify Git Gateway (deprecated). Standard Decap CMS setup. Works if you change hosts later.

**Cons:** Every editor needs a GitHub account and a collaborator invite. Less friendly for nontechnical users.

### Switch to GitHub backend

1. In `public/admin/config.yml`, replace the `backend` block with:

```yaml
backend:
  name: github
  repo: BTheCoderr/communityIP
  branch: main
```

2. Create a **GitHub OAuth App**: GitHub → Settings → Developer settings → OAuth Apps → New OAuth App  
   - Homepage URL: `https://www.communityip.org`  
   - Authorization callback URL: `https://www.communityip.org/admin/` (or your Netlify deploy URL)

3. In Decap CMS docs, configure the OAuth proxy (Netlify can host this, or use Decap’s recommended auth handler). See [Decap CMS — GitHub backend](https://decapcms.org/docs/github-backend/).

4. Invite editors: GitHub repo → **Settings** → **Collaborators** → grant **Write** access.

5. Editors open `/admin` and sign in with GitHub.

See also: `public/admin/config.github.example.yml`

## Option B — Netlify Identity + Git Gateway (current default)

Editors log in at **`/admin`** with **Netlify Identity** (email + password). No GitHub account required.

**Pros:** Simplest for Regina and nontechnical staff. Invite-only registration.

**Cons:** **Netlify Git Gateway is deprecated.** It still works on many existing sites, but Netlify may remove it eventually. Plan to migrate to Option A if Git Gateway stops working.

### Enable Git Gateway (one-time)

1. Netlify → **Identity** → Enable Identity  
2. Identity → **Registration** → **Invite only**  
3. Identity → **Services** → Enable **Git Gateway**  
4. Invite editors (e.g. Regina) from the Identity tab  

Active config: `public/admin/config.yml` uses `backend.name: git-gateway`.

## What editors can change

All via `/admin` collections (see README → Editing Community IP content):

- Home, About, Research, Contact page copy  
- News/blog posts (`src/content/news/*.md`)  
- Board members and co-presidents (photos, bios, order)  
- Hero images and uploads (`public/uploads/`)  
- Social links, donate/Spotfund link, disclaimer snippets  

## What stays separate — Netlify Forms

Form submissions are **not** in Decap CMS:

| Form | Page |
|------|------|
| `contact` | `/contact` |
| `intake` | `/apply` |
| `volunteer-interest` | `/volunteer` |
| `partner-interest` | `/partners` |

Submissions: Netlify → **Forms**. Notifications: **Forms** → **Form notifications**.

See `docs/FORMS.md`.

## Local testing

```bash
npx decap-server
npm run dev
```

With `local_backend: true` in `config.yml`, `/admin` writes to the local repo without Netlify.
