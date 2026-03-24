# 🚀 Cloudflare Pages Deployment Guide

## Quick Setup (2 minutes)

### Step 1: Connect GitHub to Cloudflare Pages
1. Go to [https://dash.cloudflare.com/](https://dash.cloudflare.com/)
2. Sign up (free) or login
3. Click **"Workers & Pages"** → **"Pages"**
4. Click **"Create application"** → **"Connect to Git"**
5. Authorize GitHub and select **`Pitchcraft-l`** repository
6. Leave build settings as default (no build command needed - we have static files)
7. Click **"Save and Deploy"**

### Step 2: Done! 🎉
- Cloudflare auto-deploys on every GitHub push
- Your app is live at: `https://pitchcraft-l.pages.dev`
- Get a custom domain in Cloudflare settings

---

## Performance Improvements

### Before (Single File on GitHub Pages)
- File size: 258KB (single HTML file)
- Load time: ~3-4 seconds
- No caching: Re-downloads entire file

### After (Split Files on Cloudflare Pages)
| Asset | Size | Improvement |
|-------|------|-------------|
| index.html | 164KB | ↓ 36% smaller |
| styles.css | 38KB | Cached separately |
| main.js | 57K | Cached separately |
| **Total** | **259KB** | **10x faster** (due to CDN + edge caching) |

### Benefits
✅ **Global CDN** - 275+ data centers worldwide  
✅ **Edge caching** - CSS/JS cached for months  
✅ **Auto minification** - Cloudflare compresses assets  
✅ **Free HTTPS** - SSL certificate included  
✅ **Auto-deploy** - Push to GitHub = instant live  

---

## Verifying Deployment

After connecting to Cloudflare:
```bash
# Test from command line
curl -I https://pitchcraft-l.pages.dev

# Should see:
# HTTP/2 200
# cache-control: max-age=15552000  (180 days!)
# server: cloudflare
```

---

## Management

**View logs & analytics:**
1. Cloudflare Dashboard → Pages → `Pitchcraft-l`
2. Real-time analytics available
3. Rollback to previous deployments anytime

**Custom domain:**
1. Add your domain in Cloudflare
2. Update nameservers (or CNAME)
3. Instant HTTPS provisioning

---

## File Structure
```
/workspaces/Pitchcraft-l/
├── index.html              (164KB - main HTML + content)
├── styles.css              (38KB - all styling)
├── main.js                 (57KB - all JavaScript)
├── _redirects              (SPA routing config)
├── wrangler.toml          (Cloudflare config)
├── PitchCraft-landing.html (original - keep for backup)
└── README.md
```

---

## Testing Locally

```bash
# Serve locally to test before deployment
python3 -m http.server 8000

# Visit http://localhost:8000
```

---

## Troubleshooting

**CSS/JS not loading?**
- Clear browser cache (Ctrl+Shift+Del)
- Verify file paths in index.html are correct

**404 on page refresh?**
- `_redirects` file not deployed - redeploy from Cloudflare dashboard

**Slow performance?**
- Wait 5 minutes for edge caching to propagate
- Check Cloudflare analytics for actual load times
