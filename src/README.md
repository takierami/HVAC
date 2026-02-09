# HVAC Pro - Professional Heating & Cooling Website

A modern, conversion-focused HVAC company website built with React, TypeScript, Tailwind CSS, and Vite. Designed for portfolio demonstration with professional lead capture and service showcase.

## 🌟 Features

- **Conversion-Optimized Design**: Clear CTAs, trust indicators, and professional styling
- **Advanced Service Request Form**: Multi-step form with validation, file uploads, and urgency levels
- **Mobile-First Responsive**: Optimized for all devices with sticky mobile call button
- **Professional Imagery**: HVAC-specific photos throughout the site
- **Trust Building**: Reviews, service areas, certifications, and guarantees
- **Fast Performance**: Optimized bundle size and lazy loading
- **SEO Ready**: Meta tags, semantic HTML, and proper heading structure

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository in Vercel
3. Vercel will auto-detect the Vite framework
4. Deploy with one click!

**Manual CLI Deployment:**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Deploy to production
vercel --prod
```

### Environment Variables

Copy `.env.example` to `.env.local` and configure any optional services:

```bash
cp .env.example .env.local
```

## 🏗️ Project Structure

```
/
├── components/           # React components
│   ├── Hero.tsx         # Hero section with emergency CTA
│   ├── Services.tsx     # Service cards with images
│   ├── WhyChooseUs.tsx  # Trust indicators
│   ├── HowItWorks.tsx   # Process flow
│   ├── Reviews.tsx      # Customer reviews & service areas
│   ├── Contact.tsx      # Advanced service request form
│   ├── Header.tsx       # Navigation with sticky CTA
│   ├── Footer.tsx       # Footer with contact info
│   └── ui/              # Reusable UI components
├── styles/
│   └── globals.css      # Global styles & Tailwind config
├── App.tsx              # Main app component
├── main.tsx             # Entry point
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── vercel.json          # Vercel deployment config
└── package.json         # Dependencies & scripts
```

## 🎨 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **UI Components**: Custom component library
- **Deployment**: Vercel

## 🔧 Configuration

### Vite Configuration

The `vite.config.ts` includes:
- Path aliases for cleaner imports
- Optimized build settings
- Code splitting for better performance
- Development server on port 3000

### Vercel Configuration

The `vercel.json` includes:
- SPA routing configuration
- Security headers
- Static asset caching
- Build optimization

## 📱 Contact Information

Update contact details in these components:
- `/components/Hero.tsx`
- `/components/Header.tsx`
- `/components/Contact.tsx`
- `/components/Footer.tsx`
- `/components/HowItWorks.tsx`
- `/components/Reviews.tsx`

Current contact info:
- **Phone**: (555) 555-4822
- **Email**: info@hvacpro.com
- **Address**: 4287 Industrial Blvd, Metro City, ST 85024

## 🎯 Key Sections

1. **Hero**: Emergency service badging, clear value prop, dual CTAs
2. **Services**: 4 main services with images and feature lists
3. **Why Choose Us**: Trust indicators with professional imagery
4. **How It Works**: Simple 4-step process
5. **Reviews**: Customer testimonials with service area map
6. **Contact**: Advanced service request form with validation

## 📝 Customization

### Colors

Primary colors are defined in `/styles/globals.css`:
- Blue: Cooling/trust theme
- Red: Heating/urgency theme
- Neutrals: Professional gray scale

### Images

All images use Unsplash with specific HVAC queries. Update image URLs in:
- Hero background
- Service cards
- Why Choose Us section
- Background elements

### Content

Update company name, services, and copy in respective component files.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is created for portfolio demonstration purposes.

## 🤝 Support

For questions or issues, please contact the developer or create an issue in the repository.

---

Built with ❤️ for professional HVAC businesses
