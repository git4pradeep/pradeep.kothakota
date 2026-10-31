# Deployment Guide - pradeep-kothakota.github.io

This guide will help you deploy your professional portfolio website to GitHub Pages with the domain `pradeep-kothakota.github.io`.

## Prerequisites

- GitHub account (https://github.com)
- Git installed on your machine
- Your code already committed locally ✅

## Setup Steps

### Step 1: Create GitHub Repository

1. Go to **https://github.com/new**
2. Create a **new repository** with these settings:
   - **Repository name:** `pradeep-kothakota.github.io`
   - **Description:** (optional) "Professional resume and portfolio website"
   - **Public:** ✅ Yes (required for GitHub Pages)
   - **Initialize with README:** ❌ No (we already have files)
3. Click **Create repository**

### Step 2: Connect Local Repository to GitHub

In your terminal/PowerShell, run these commands:

```bash
cd "C:\Users\admin\Desktop\Pradeep\Drive\vscode\github_page\github_page"

# Add GitHub remote (replace 'username' with your GitHub username if it's different)
git remote add origin https://github.com/pradeep-kothakota/pradeep-kothakota.github.io.git

# Set main as default branch
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Note:** You may be prompted to authenticate with GitHub. Use one of these methods:
- **Personal Access Token** (recommended)
  1. Go to https://github.com/settings/tokens
  2. Click "Generate new token"
  3. Select `repo` scope
  4. Copy token and paste when prompted
  
- **GitHub CLI** (easiest)
  ```bash
  gh auth login
  ```

### Step 3: Enable GitHub Pages

1. Go to your repository: **https://github.com/pradeep-kothakota/pradeep-kothakota.github.io**
2. Click on **Settings** (top right)
3. Scroll to **"Pages"** section (left sidebar)
4. Under "Source":
   - Select: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

### Step 4: Wait for Deployment

1. GitHub will automatically build and deploy your site
2. You'll see a message: "Your site is published at https://pradeep-kothakota.github.io"
3. This typically takes 1-2 minutes
4. Visit **https://pradeep-kothakota.github.io** in your browser ✨

## Verification

Your site is live when:
- ✅ You can visit `https://pradeep-kothakota.github.io`
- ✅ All pages load correctly (About, Skills, Projects, etc.)
- ✅ Navigation works smoothly
- ✅ Styling and animations display properly

## Making Updates

After deployment, making updates is simple:

```bash
# 1. Edit your files (index.html, styles.css, etc.)
# 2. Stage changes
git add .

# 3. Commit
git commit -m "Update: description of changes"

# 4. Push to GitHub
git push origin main
```

GitHub will automatically redeploy your site within 1-2 minutes.

## Optional: Custom Domain

If you want to use your own domain (e.g., `pradeep-kothakota.com`):

1. **Purchase a domain** from a registrar (Namecheap, GoDaddy, etc.)
2. **Configure DNS records** at your registrar:
   - Add A records pointing to GitHub:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Or use CNAME: `pradeep-kothakota.github.io`

3. **Add CNAME file to repository:**
   ```bash
   # Create CNAME file with your domain
   echo "pradeep-kothakota.com" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push origin main
   ```

4. **Verify in GitHub Settings:**
   - Go to repository Settings → Pages
   - Under "Custom domain", enter your domain
   - Click "Save"
   - Check "Enforce HTTPS" after domain is verified (1-24 hours)

## Troubleshooting

### Site Not Displaying
- **Issue:** 404 error or blank page
- **Solution:**
  1. Wait 2-3 minutes for GitHub to deploy
  2. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
  3. Check repository Settings → Pages for deployment status

### CSS/Images Not Loading
- **Issue:** Page displays but styling is broken
- **Solution:**
  1. This usually means CSS file path is incorrect
  2. Verify all files are in repository root
  3. Hard refresh browser cache
  4. Check browser console for 404 errors (F12)

### Repository Not Found
- **Issue:** "Repository not found" error when pushing
- **Solution:**
  1. Verify repository name is exactly: `pradeep-kothakota.github.io`
  2. Check GitHub authentication is working: `git remote -v`
  3. Re-authenticate if needed: `gh auth logout` then `gh auth login`

### HTTPS Not Working
- **Issue:** Site only works on HTTP
- **Solution:**
  1. Wait up to 24 hours for HTTPS certificate
  2. In Settings → Pages, "Enforce HTTPS" should appear once ready
  3. Enable "Enforce HTTPS" for security

## Security & Best Practices

✅ **Do:**
- Keep repository public (required for free GitHub Pages)
- Enable "Enforce HTTPS" once available
- Avoid committing sensitive information
- Keep contact information updated

❌ **Don't:**
- Store passwords, API keys, or credentials in repository
- Use this site for collecting sensitive data without HTTPS
- Forget to update contact info if it changes

## Share Your Site

Once live, share your portfolio:

```
🌐 https://pradeep-kothakota.github.io
```

You can share this link on:
- LinkedIn profile
- Email signature
- Resume/CV
- Twitter/Social media
- Professional networks

## Support & Resources

- **GitHub Pages Docs:** https://docs.github.com/en/pages
- **GitHub Troubleshooting:** https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-custom-domains
- **Community Help:** https://github.community

---

**Questions?** Check your repository's Actions tab (if deployment fails, errors are shown there).
