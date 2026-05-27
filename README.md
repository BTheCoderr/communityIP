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

## Legal note

Educational information and intake support only — not legal advice.
