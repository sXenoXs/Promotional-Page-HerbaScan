# Deploy HerbaScan promotional page to Vercel

Step-by-step guide to deploy this static landing page on Vercel (beginner-friendly).

---

## Prerequisites

- Your code is on **GitHub** (e.g. [sXenoXs/Promotional-Page-HerbaScan](https://github.com/sXenoXs/Promotional-Page-HerbaScan)).
- A **Vercel account**. Sign up at [vercel.com](https://vercel.com) (free; you can use GitHub to log in).

---

## Step 1: Sign in to Vercel and start a new project

1. Go to **[vercel.com](https://vercel.com)** and sign in (or create an account with GitHub).
2. Click **“Add New…”** (or **“New Project”**).
3. Choose **“Project”**.

---

## Step 2: Import your GitHub repository

1. Under **“Import Git Repository”**, you should see **GitHub**. If it says **“Connect Git Account”**, click it and authorize Vercel to access your GitHub.
2. Find **Promotional-Page-HerbaScan** (or your repo name) in the list.
3. Click **“Import”** next to it.

---

## Step 3: Configure the project (important)

On the **Configure Project** screen, use these settings:

| Setting | Value | Notes |
|--------|--------|--------|
| **Framework Preset** | Vite | Vercel usually detects this. If not, choose “Vite”. |
| **Root Directory** | (leave default) | Leave blank so the project root is used. |
| **Build Command** | `npm run build` | Default for Vite; leave as is. |
| **Output Directory** | `dist` | Vite builds the site into `dist`. |
| **Install Command** | `npm install` | Default; leave as is. |

Do **not** enable “Override” for Build Command or Output Directory unless you changed them in the project.

---

## Step 4: (Optional) Add environment variable for Google Play link

If your app is on the Play Store and you want the “Get it on Google Play” button to open your real listing:

1. Under **“Environment Variables”**, click **“Add”** (or the field).
2. **Name:** `VITE_GOOGLE_PLAY_URL`
3. **Value:** Your full Google Play app URL, e.g.  
   `https://play.google.com/store/apps/details?id=your.package.name`
4. Leave **Environment** as **Production** (and add the same for Preview if you want).

If you skip this, the button will use the default (Play Store home). You can add or change this later in **Project → Settings → Environment Variables**.

---

## Step 5: Deploy

1. Click **“Deploy”**.
2. Vercel will:
   - Clone your repo
   - Run `npm install`
   - Run `npm run build`
   - Serve the contents of `dist`
3. Wait 1–2 minutes. When the build finishes, you’ll see **“Congratulations!”** and a live URL like:

   `https://promotional-page-herbascan-xxxx.vercel.app`

4. Click **“Visit”** (or the URL) to open your live site.

---

## Step 6: Automatic deploys from GitHub

- Every **push to the main branch** will trigger a new deployment.
- **Preview deployments:** Pushes to other branches (or pull requests) get a unique preview URL so you can test before merging.

No need to deploy manually each time; just push to GitHub and Vercel builds and updates the site.

---

## Optional: Custom domain

1. In Vercel, open your project.
2. Go to **Settings → Domains**.
3. Click **“Add”** and enter your domain (e.g. `herbascan.com` or `www.herbascan.com`).
4. Follow the instructions to add the DNS records (A/CNAME) at your domain registrar. Vercel will show exactly what to add.
5. After DNS propagates (often within minutes, sometimes up to 48 hours), Vercel will issue SSL and your site will be served on your domain.

---

## Troubleshooting

| Problem | What to do |
|--------|-------------|
| Build fails with “command not found” | In **Project → Settings → General**, set **Node.js Version** to **18.x** or **20.x**, then redeploy. |
| Build fails with module errors | In the build log, check the failing step. Often fixed by ensuring **Build Command** is `npm run build` and **Output Directory** is `dist`. |
| 404 on refresh or direct URL | This is a SPA; the app already uses a single route. If you add more routes later, add a **Rewrites** rule in `vercel.json` so all paths serve `index.html`. For the current single-page setup, this should not be needed. |
| Google Play button goes to wrong URL | In **Project → Settings → Environment Variables**, add or edit `VITE_GOOGLE_PLAY_URL` with the correct Play Store URL, then redeploy. |

---

## Summary checklist

- [ ] Code is on GitHub.
- [ ] Signed in to Vercel and imported the repo.
- [ ] Framework: **Vite**, Build: **npm run build**, Output: **dist**.
- [ ] (Optional) Set **VITE_GOOGLE_PLAY_URL**.
- [ ] Clicked **Deploy** and confirmed the site loads at the Vercel URL.
- [ ] (Optional) Added a custom domain under **Settings → Domains**.

Your HerbaScan promotional page is now live on Vercel.
