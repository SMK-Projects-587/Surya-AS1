# Verse

A mobile-first daily-quotes website. Built with HTML, SCSS, and Vanilla JavaScript.

---

## Prerequisites

Make sure you have the right Node version installed. This project uses Node 22.

If you use [nvm](https://github.com/nvm-sh/nvm):

```bash
nvm use
```

That's it — nvm will read the `.nvmrc` file and switch automatically.

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The page reloads automatically every time you save a file — you don't need to refresh manually.

---

## How Vite works

[Vite](https://vite.dev) is the tool that powers the dev server and builds the project.

**In development** (`npm run dev`), Vite serves your files directly and compiles SCSS on the fly. Changes appear in the browser instantly without a full reload — this is called Hot Module Replacement (HMR).

**For production** (`npm run build`), Vite bundles everything into the `dist/` folder — minified HTML, CSS, and JS, ready to deploy.

**To preview the production build locally** before deploying:

```bash
npm run build
npm run preview
```

This spins up a local server serving the `dist/` folder exactly as it would appear on a live host. Always do this before deploying to catch any build-specific issues.

---

## Scripts

| Script                 | What it does                            |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Start the dev server with HMR           |
| `npm run build`        | Build for production → `dist/`          |
| `npm run preview`      | Preview the production build locally    |
| `npm run lint`         | Check JS and SCSS for errors            |
| `npm run lint:js`      | Check JS only                           |
| `npm run lint:scss`    | Check SCSS only                         |
| `npm run format`       | Format all files with Prettier          |
| `npm run format:check` | Check formatting without changing files |

---

## Deploying to Netlify

### Option 1 — Drag and drop (quickest)

1. Run `npm run build`
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag the `dist/` folder onto the Netlify dashboard

You'll get a live URL instantly. Use this for a quick share or demo.

### Option 2 — Netlify CLI (recommended)

Install the CLI once:

```bash
npm install -g netlify-cli
```

Then log in and deploy:

```bash
netlify login
netlify deploy --dir=dist          # deploy a draft (preview URL)
netlify deploy --dir=dist --prod   # deploy to your live URL
```

The draft deploy gives you a temporary URL to review before going live. Always draft first.

### Option 3 — Connect your Git repo (best for ongoing work)

1. Push your code to GitHub
2. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import from Git**
3. Set the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Hit deploy

After this, every push to `main` triggers a new deploy automatically. Pull requests get their own preview URL — paste it in your PR description.
