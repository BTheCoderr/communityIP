# WordPress content import

Place a WordPress export file here:

```
data/wordpress-export.xml
```

Export from DreamHost WordPress: **Tools → Export → All content**

Then run:

```bash
npm run import:wordpress   # preview pages/posts in export
npm run download:images    # fetch wp-content/uploads board photos
```

Content is stored in `src/lib/content/wordpress.ts`, `src/lib/news.ts`, and `src/lib/board.ts`.
