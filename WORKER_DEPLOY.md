# Cloudflare Worker Deployment Guide

Deploy PitchCraft demo to Cloudflare Workers in 2 minutes.

## Quick Start

### 1. Install Wrangler CLI (if needed)
```bash
npm install -g wrangler
```

### 2. Authenticate with Cloudflare
```bash
wrangler login
```
This opens your browser to authorize Cloudflare access.

### 3. Get Your Account ID
```bash
wrangler whoami
```
Copy your Account ID from the output.

### 4. Update wrangler-worker.toml
Replace the empty `account_id` with your actual account ID:
```toml
account_id = "your-account-id-here"
```

### 5. Deploy
```bash
wrangler deploy -c wrangler-worker.toml
```

## Result
Your demo goes live at: `https://pitchcraft-demo.<your-subdomain>.workers.dev`

### 6. Access the Demo
1. Go to the URL from step 5
2. Click **"🔒 Demo"** button
3. Login: `demo1` / `demo123`
4. Share the link with clients!

---

## What the Worker Does

✅ Serves static files from GitHub  
✅ Caches assets globally (24-hour TTL)  
✅ Handles SPA routing (all URLs → index.html)  
✅ Auto-minifies HTML/CSS/JS  
✅ Provides 275+ global edge locations  

---

## Testing Locally (Optional)

```bash
# Start local dev server
wrangler dev -c wrangler-worker.toml

# Visit http://localhost:8787
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `Error: Account ID is required` | Add your account_id to wrangler-worker.toml |
| `401 Unauthorized` | Run `wrangler login` again |
| `404 on resources` | Worker is correctly routing to index.html |
| `Blank page` | Check browser console for errors |

---

## Custom Domain (Optional)

To use your own domain instead of `workers.dev`:

1. Go to Cloudflare dashboard → Workers
2. Click your worker
3. **Settings** → **Routes**
4. Add route: `example.com/*`
5. Select your zone (domain)

---

## Performance Metrics

Expected performance:
- **US East:** ~500ms cold start
- **US West:** ~750ms cold start  
- **Europe:** ~600ms cold start
- **Cached requests:** <100ms globally

---

## Next Steps

1. ✅ Deploy worker
2. ✅ Access demo at workers.dev URL
3. ✅ Share with clients
4. (Optional) Set up custom domain
5. (Optional) Configure analytics/monitoring
