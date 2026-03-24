# 🔧 Complete Code for Cloudflare Pages

## File 1: `wrangler.toml`
```toml
name = "pitchcraft-l"
type = "javascript"
compatibility_date = "2024-01-01"

[build]
command = ""
cwd = ""
watch_paths = []

[env.production]
routes = [
  { pattern = "pitchcraft-l.pages.dev", zone_name = "" }
]

[triggers.crons]
```

**Location:** Root of repository  
**Purpose:** Cloudflare Pages configuration

---

## File 2: `_redirects`
```
/* /index.html 200
```

**Location:** Root of repository  
**Purpose:** SPA routing (all routes go to index.html)

---

## File 3: `package.json` (Optional - for reference)
```json
{
  "name": "pitchcraft-demo",
  "version": "1.0.0",
  "description": "AI-powered proposal generator demo",
  "main": "index.html",
  "scripts": {
    "serve": "python3 -m http.server 8000",
    "deploy": "git push origin main"
  },
  "keywords": ["proposal", "generator", "ai", "demo"],
  "author": "BrandQuest",
  "license": "MIT"
}
```

---

## File Structure When Ready
```
pitchcraft-l/
├── index.html              (Main app)
├── styles.css              (Styling)
├── main.js                 (JavaScript)
├── _redirects              (← Required for SPA)
├── wrangler.toml          (← Required for Cloudflare)
├── package.json           (Optional)
├── CLOUDFLARE_PAGES_SETUP.md
├── QUICK_START.md
├── DEPLOYMENT.md
└── .git/
```

---

## Deployment Steps

### Step 1: Ensure Files Exist
```bash
# Check all required files are in repo
ls -la wrangler.toml _redirects index.html styles.css main.js
```

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Ready for Cloudflare Pages deployment"
git push origin main
```

### Step 3: Connect Cloudflare
1. Go: https://dash.cloudflare.com/
2. **Workers & Pages** → **Pages** tab
3. **Create application** → **Connect to Git**
4. Select: `brandquestdeveloper2024/Pitchcraft-l`
5. **Build settings:**
   - Build command: (leave blank)
   - Build output directory: (leave blank)
6. **Environment variables:** (leave blank)
7. **Save and Deploy**

### Step 4: Wait for Deployment
- Cloudflare processes: 1-2 minutes
- DNS propagates: 5-10 minutes
- First deployment slower, subsequent deployments faster

### Step 5: Access Your Live Site
```
https://pitchcraft-l.pages.dev
```

---

## Verify Deployment - Commands

### Check Site is Live
```bash
curl https://pitchcraft-l.pages.dev
```

### Check Cloudflare Headers
```bash
curl -I https://pitchcraft-l.pages.dev
```

**Expected headers:**
```
HTTP/2 200
server: cloudflare
cache-control: max-age=15552000
x-cache: HIT from cloudflare
```

### Test Login (in browser)
- URL: https://pitchcraft-l.pages.dev
- Click "🔒 Demo" button
- Username: `demo1`
- Password: `demo123`
- Should load dashboard

---

## Environment Variables (Optional)

If you need to add env vars in Cloudflare:

1. **Pages** → **Pitchcraft-l** → **Settings** → **Environment Variables**
2. Add variables (example):
   ```
   API_URL = https://api.example.com
   ENV = production
   ```

For this project, you likely won't need any.

---

## Auto-Deployment on Push

Once connected to Cloudflare:
- **Every GitHub push** to `main` automatically deploys
- Takes ~2 minutes
- View deployment status in Cloudflare dashboard

---

## Rollback Previous Versions

In Cloudflare Pages dashboard:
1. Go: **Pages** → **Pitchcraft-l** → **Deployments**
2. Find previous deployment
3. Click **Rollback** to restore previous version

---

## Custom Domain (Optional)

To use your own domain instead of `.pages.dev`:

1. **Pages** → **Pitchcraft-l** → **Custom domains**
2. Enter your domain: `demo.yourdomain.com`
3. Cloudflare auto-provisions SSL certificate
4. Update your domain's nameservers to Cloudflare

---

## Troubleshooting

### "Site can't be reached"
- Wait 5-10 minutes for DNS propagation
- Clear browser cache (Ctrl+Shift+Del)
- Check Cloudflare dashboard for deployment status

### "404 on page refresh"
- Ensure `_redirects` file is deployed
- Content must be: `/* /index.html 200`

### "CSS/JS not loading"
- Clear browser cache
- Check file paths in `index.html` are correct
- Both should be in root: `<link href="styles.css">` and `<script src="main.js">`

### "Demo login not working"
- Ensure `main.js` is loading (check Network tab in DevTools)
- Verify credentials: demo1-demo50 / demo123
- Check browser console for errors

---

## Migration: GitHub Pages → Cloudflare Pages

**If you need to switch back to GitHub Pages:**

```bash
# Go to settings
https://github.com/brandquestdeveloper2024/Pitchcraft-l/settings/pages

# Set:
# - Source: Deploy from a branch
# - Branch: main
# - Folder: / (root)

# URL will be:
# https://brandquestdeveloper2024.github.io/Pitchcraft-l/
```

---

## Performance Metrics

| Metric | Cloudflare | GitHub Pages |
|--------|-----------|--------------|
| **First Load** | ~1s | ~3-4s |
| **Cached Load** | <100ms | ~3-4s |
| **Global CDN** | 275+ locations | 1 location |
| **Cache TTL** | 180 days | None |
| **Cost** | Free | Free |

---

## Success Checklist

- [ ] All files in root: `index.html`, `styles.css`, `main.js`, `_redirects`, `wrangler.toml`
- [ ] Pushed to GitHub main branch
- [ ] Created Cloudflare Pages project (not Workers!)
- [ ] Deployment status is green ✅
- [ ] DNS propagated (wait 5-10 min)
- [ ] Can access `https://pitchcraft-l.pages.dev`
- [ ] Login works with demo1/demo123
- [ ] "🔒 Demo" button loads dashboard

---

**You're all set!** 🚀
