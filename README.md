# elderlylife-website

The holding page for **Elderly Life**, live at https://www.elderlylife.com: **"Elderly Life is evolving"**.

It is a single static page with no framework and no dependencies, hosted for free on Netlify. The previous full marketing website is kept in the private `Gleecus-Techlabs/el-website` repo, on its `backup1` branch.

## What's here

| Path | What it is |
|---|---|
| `public/index.html` | The page: copy, layout and brand colours, all in one file |
| `public/assets/elderlylife-logo.svg` | Elderly Life logo |
| `public/_redirects` | Sends `elderlylife.co.uk` and `www.elderlylife.co.uk` to `https://www.elderlylife.com` (301) |
| `build.js` | Copies `public/` to `build/` and adds `404.html`, so any old URL shows the same page |
| `netlify.toml` | Netlify build settings (`npm run build`, publish `build`) |

## Change the page

Edit `public/index.html`, then preview it:

```bash
npm run build
npx serve build    # http://localhost:3000
```

Push to `main` and Netlify publishes it automatically. Each production deploy uses 15 of the free plan's 300 monthly credits, so push only real changes.

## Hosting and domains

| | |
|---|---|
| Host | Netlify, free plan, deployed from this repo's `main` branch |
| `www.elderlylife.com` (primary) | DNS at GoDaddy: `www` CNAME to the Netlify site |
| `elderlylife.com` | DNS at GoDaddy: `@` A record `75.2.60.5`; Netlify redirects it to www |
| `elderlylife.co.uk`, `www.elderlylife.co.uk` | DNS at Gandi: same records; redirected to www.elderlylife.com by `public/_redirects` |

Brand colours: navy `#003a6f`, aquamarine `#36f1cc`, turquoise `#38b79c`. Font: Poppins (Google Fonts).
