# Signum Webpage Page (Vite + React + Tailwind)

[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-informational.svg)](LICENSE)
![Vite](https://img.shields.io/badge/Vite-frontend-informational)
![React](https://img.shields.io/badge/React-UI-informational)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-styling-informational)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-informational)

A lightweight, privacy-friendly landing page for the Signum, built with **Vite + React + Tailwind** and deployed on **Cloudflare Pages**.

- No YouTube embeds — only **links** to YouTube
- Fonts & images are **locally hosted**
- Cookie banner: **Essential cookies only**

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Local Development](#local-development)
- [Build](#build)
- [Deployment (Cloudflare Pages)](#deployment-cloudflare-pages)
- [Privacy & Cookies](#privacy--cookies)
- [SignumJS Example](#signumjs-example)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- ✅ Fast static site (Vite)
- ✅ Responsive UI with Tailwind
- ✅ Privacy-first setup (no third-party font/CDN calls)
- ✅ YouTube **links only** (no embedded players)
- ✅ “Essential cookies only” consent banner (configurable delay + re-ask interval)
- ✅ Ready for Cloudflare Pages deployment

---

## Tech Stack

- **Vite**
- **React**
- **Tailwind CSS**
- Optional: `react-router-dom` (if you use routing)

---

## Project Structure

Typical layout:

```
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  ├─ pages/
│  ├─ lib/
│  │  ├─ hooks/
│  │  └─ utils/
│  ├─ main.tsx
│  └─ App.tsx
├─ index.html
├─ package.json
└─ vite.config.ts

```

---

## Local Development

### Requirements

- Node.js (LTS recommended)
- npm

### Install & run

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

---

## Build

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`.

---

## Deployment (Cloudflare Pages)

Cloudflare Pages settings (typical):

- **Framework preset:** Vite (or React)
- **Build command:** `npm run build`
- **Build output directory:** `dist`

If you use SPA routes (React Router), configure Cloudflare Pages to serve `index.html` for unknown paths (single-page-app fallback).

---

## Privacy & Cookies

This project is designed to be privacy-friendly:

- No third-party Google Fonts downloads (fonts are hosted locally)
- No third-party image/CDN calls for assets
- YouTube is linked to directly — **no iframe embed**, no player integration

Cookie banner behavior (recommended defaults):

- Shows after **2 seconds**
- If user chooses “Essential only”, store the choice and **do not ask again for 90 days**

Your Privacy Policy is available at:

- `/privacypolicy`

> Note: If you truly only use essential cookies (e.g., storing consent choice), in many jurisdictions you don’t need an “accept all” flow — but you should still clearly inform users what’s stored and why.

---

## SignumJS Example

A tiny example using **SignumJS** to check node status:

```ts
import { LedgerClientFactory } from "@signumjs/core";

async function main() {
  const ledger = LedgerClientFactory.createClient({
    nodeHost: "https://europe.signum.network",
  });

  const status = await ledger.network.getBlockchainStatus();
  console.log(
    `Height: ${status.numberOfBlocks} | State: ${status.blockchainState}`
  );
}

main().catch(console.error);
```

---

## Contributing

PRs welcome.

Suggested workflow:

1. Fork the repo
2. Create a feature branch: `git checkout -b feat/my-change`
3. Commit with a clear message
4. Open a PR with a short description + screenshots if UI changes

---

## License

This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**.

See: `LICENSE`
