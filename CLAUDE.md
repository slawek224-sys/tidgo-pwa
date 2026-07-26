## TidGo - public website / PWA (this repo: tidgo-pwa)

TidGo is a receipt-tracking app for UK sole traders - a "bridge" toward Making Tax Digital (MTD), not MTD software itself and not a replacement for an accountant. Never describe it as "MTD ready" or "HMRC-recognised" anywhere in this site's copy or code.

This repo is the public marketing site + installable PWA at tidgo.co.uk. It's a separate repo from the mobile app/backend (see the `app` repo) but talks to the same backend API.

### Stack
- Plain static site: HTML, CSS, vanilla JS. No framework, no bundler, no build step.
- PWA: `manifest.json` / `manifest.webmanifest`, service worker `sw.js`, icons (`icon-192.png`, `icon-512.png`, `apple-touch-icon.png`).
- Talks to the existing backend API at `https://donezo-api-53t9.onrender.com` (same backend as the `app` repo - old "donezo" name in the URL is expected, not a bug).

### Run locally
```
python -m http.server 5173
```
Open `http://localhost:5173`. For phone testing on the same Wi-Fi, use your machine's LAN IP instead of localhost. PWA install only works over HTTPS, so use the deployed Render URL for install testing.

### Tests
None currently - this is a static site with no test suite.

### Deploy
Render Static Site, configured via `render.yaml`. Build command: none. Publish directory: `.` (repo root).

### Coding conventions
No linter/formatter configured. Keep pages consistent with the existing folder-per-page structure (see Directory structure below) and existing HTML/CSS style.

### Directory structure (top level)
Each top-level folder is a standalone page (own `index.html`), e.g.: `accountant/`, `accountant-demo/`, `app/`, `app-demo/`, `delete-account/`, `faq/`, `how-intake-works/`, `how-it-works/`, `launch-pricing/`, `mtd/`, `privacy/`, `show-this-to-your-accountant/`, `terms/`, `who-is-it-for/`. Plus root-level `index.html`, `app.js`, PWA assets, `render.yaml`, `robots.txt`.

### Switching between agents (Claude Code / Codex)
If you're picking this up after the other tool worked on it: run `git log --oneline -15` and read this file before making changes. Check `git branch -a` for in-progress branches from the other agent. Don't assume you know the latest state.

### Git workflow (multi-machine / multi-agent)
This project gets worked on from more than one machine and by more than one agent (Claude Code and Codex). GitHub is the only bridge between them - never copy the project folder or a ZIP between machines, always go through git.

Before starting any work, always run:
```
git pull
git status
```
If `git status` shows uncommitted changes, stop and flag it to the user before proceeding - it likely means another agent or machine has unfinished work that has not been pushed yet.

After finishing a change, always run:
```
git add .
git commit -m "short description of the change"
git push
```

Golden rule: only one agent/machine works on this repo at a time ("one worker at a time"). Do not start new work on top of an unpushed, uncommitted state.

