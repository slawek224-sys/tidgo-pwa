# TidGo PWA MVP

Static mobile-first PWA that uses the existing API:

`https://donezo-api-53t9.onrender.com`

## Local run

From this folder:

```powershell
python -m http.server 5173
```

Open:

`http://localhost:5173`

For iPhone testing on the same Wi-Fi, open your computer LAN address:

`http://YOUR-PC-IP:5173`

## Deploy

Upload this folder as a static site to Vercel, Netlify, Render Static Site, Cloudflare Pages, or any plain web host.

Build command: none

Publish directory: this folder

For Render Static Site:

- Root directory: `outputs/tidgo-pwa` if deploying from the wider Codex folder/repo
- Build command: leave empty
- Publish directory: `.`
- The site must be opened through the HTTPS Render URL for PWA install testing on phones.

## PWA readiness

- Manifest: `manifest.json`
- Service worker: `sw.js`
- Icons: `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`
- API: existing backend at `https://donezo-api-53t9.onrender.com`
- Install testing: use Android Chrome and iPhone Safari on the public HTTPS URL.

## MVP notes

- Uses the same backend and MongoDB data through the public API.
- Receipt photo upload uses the browser file/camera picker.
- Monthly summary can create a PDF and open the phone share sheet where supported.
- Browser Print / Save as PDF is kept as a fallback.
- Receipt currency can be set when the API creates the receipt via OCR. Current backend PATCH does not accept receipt currency edits yet.
