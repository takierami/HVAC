# Deployment Guide for HVAC Pro Website

## 🚀 Deploying to Netlify (Recommended)

Netlify is now the recommended platform for deploying this Vite + React application.

### Method 1: Deploy via Netlify Dashboard (Automatic)

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Switching to Netlify deployment"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your repository

3. **Configure Project (Auto-detected)**
   - Build Command: `npm run build`
   - Publish directory: `dist`
   - The project includes a `netlify.toml` which will automatically configure routing and environment settings.

4. **Deploy**
   - Click "Deploy [repository name]"
   - Your site will be live shortly!

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install netlify-cli -g
   ```

2. **Login and Init**
   ```bash
   netlify login
   netlify init
   ```

3. **Deploy**
   ```bash
   # Production deployment
   netlify deploy --prod
   ```

## 🔧 Build Configuration

The project includes all necessary configuration files:

- ✅ `netlify.toml` - Netlify-specific configuration
- ✅ `vite.config.ts` - Build and development settings
- ✅ `package.json` - Dependencies and scripts
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `index.html` - Entry HTML file
- ✅ `main.tsx` - React entry point

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All dependencies are listed in `package.json`
- [ ] Build command works locally: `npm run build`
- [ ] Preview works locally: `npm run preview`
- [ ] Environment variables are configured (if needed)
- [ ] Contact information is updated (phone, email, address)
- [ ] SEO meta tags are customized in `index.html`
- [ ] Analytics tracking is set up (optional)

## 🌍 Environment Variables

If you need environment variables:

1. **In Netlify Dashboard:**
   - Go to Site Settings → Build & Deploy → Environment variables
   - Add your variables
   - Trigger a new deploy for changes to take effect

2. **Common Variables:**
   ```
   VITE_CONTACT_FORM_ENDPOINT=your_endpoint
   VITE_GA_TRACKING_ID=your_ga_id
   ```

## 🔄 Continuous Deployment

Once connected to Git, Netlify automatically:
- Deploys on every push to main branch (production)
- Creates branch previews for other branches
- Creates Deploy Previews for pull requests

## 🎯 Domain Configuration

### Custom Domain

1. Go to Site Settings → Domain management
2. Add your custom domain
3. Configure DNS records (Netlify UI will provide instructions)
4. SSL/TLS is automatically provisioned via Let's Encrypt

### Default Domain

Your app will be available at:
```
https://your-project-name.netlify.app
```

## 📊 Performance Optimization

The build is already optimized with:

- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification
- ✅ Image optimization
- ✅ Caching headers
- ✅ Gzip compression

## 🐛 Troubleshooting

### Build Fails

**Issue**: Dependencies not found
```bash
# Solution: Ensure all packages are in package.json
npm install
npm run build
```

**Issue**: TypeScript errors
```bash
# Solution: Check tsconfig.json and fix type errors
npm run build
```

### Routing Issues

**Issue**: 404 on page refresh

The `netlify.toml` includes a redirect rule to handle SPA routing:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Images Not Loading

- Ensure images are in `/public` directory or using external URLs
- Check image paths are correct
- Verify CORS settings for external images

## 📈 Post-Deployment

After successful deployment:

1. **Test the Live Site**
   - Check all pages load correctly
   - Test contact form submission
   - Verify phone/email links work
   - Test on mobile devices

2. **Monitor Performance**
   - Use Netlify Analytics (if enabled)
   - Check Netlify Build logs
   - Monitor for any failed deploys

3. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Configure Google Analytics (optional)
   - Test with SEO tools

## 🔐 Security

Security headers can be configured in your `netlify.toml` file or through the Netlify UI. The current configuration handles basic SPA routing and environment settings.

## 📞 Support

### Netlify Documentation
- [Netlify Docs](https://docs.netlify.com)
- [Vite on Netlify](https://www.netlify.com/with/vite/)

### Common Commands
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Netlify
netlify deploy --prod
```

## ✅ Deployment Complete!

Your HVAC Pro website is now live and ready to convert visitors into customers!

🌐 **Live URL**: Check your Netlify dashboard
📊 **Analytics**: Available in Netlify dashboard
🚀 **Updates**: Push to Git to auto-deploy

---

Happy deploying! 🎉
