# Deployment Guide for HVAC Pro Website

## 🚀 Deploying to Vercel

Vercel is the recommended platform for deploying this Vite + React application.

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your Git provider (GitHub, GitLab, or Bitbucket)
   - Select your repository
   - Vercel will auto-detect the Vite framework settings

3. **Configure Project (Auto-detected)**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~60 seconds!

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # Preview deployment
   vercel
   
   # Production deployment
   vercel --prod
   ```

## 🔧 Build Configuration

The project includes all necessary configuration files:

- ✅ `vercel.json` - Vercel-specific configuration
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

1. **In Vercel Dashboard:**
   - Go to Project Settings → Environment Variables
   - Add your variables
   - Redeploy for changes to take effect

2. **Common Variables:**
   ```
   VITE_CONTACT_FORM_ENDPOINT=your_endpoint
   VITE_GA_TRACKING_ID=your_ga_id
   ```

## 🔄 Continuous Deployment

Once connected to Git, Vercel automatically:
- Deploys on every push to main branch (production)
- Creates preview deployments for pull requests
- Runs build checks before deploying

## 🎯 Domain Configuration

### Custom Domain

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. SSL certificate is automatically provisioned

### Default Domain

Your app will be available at:
```
https://your-project-name.vercel.app
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

The `vercel.json` includes rewrites to handle SPA routing:
```json
"rewrites": [
  { "source": "/(.*)", "destination": "/index.html" }
]
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
   - Use Vercel Analytics (built-in)
   - Check Core Web Vitals
   - Monitor error logs

3. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Configure Google Analytics (optional)
   - Test with SEO tools

## 🔐 Security

Security headers are configured in `vercel.json`:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block

## 📞 Support

### Vercel Documentation
- [Vercel Docs](https://vercel.com/docs)
- [Vite on Vercel](https://vercel.com/docs/frameworks/vite)

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

# Deploy to Vercel
vercel --prod
```

## ✅ Deployment Complete!

Your HVAC Pro website is now live and ready to convert visitors into customers!

🌐 **Live URL**: Check your Vercel dashboard
📊 **Analytics**: Available in Vercel dashboard
🚀 **Updates**: Push to Git to auto-deploy

---

Happy deploying! 🎉
