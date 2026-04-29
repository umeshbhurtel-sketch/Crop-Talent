# CorpTalents - Premium SaaS Website

A modern, fully responsive website for CorpTalents - a global talent solution platform. Built with React, Vite, Tailwind CSS, and Framer Motion.

## 🎯 Features

### ✨ Core Components
- **Header/Navbar** - Sticky navigation with mobile hamburger menu
- **Hero Section** - Auto-rotating slider with 3 slides and smooth transitions
- **Trust Indicators** - Compliance badges and credibility markers  
- **Services** - 4 service cards (TaaS, EOR, Global Sourcing, Talent Management)
- **About** - Mission/Vision section with company overview
- **Process** - 4-step hiring process timeline (desktop & mobile responsive)
- **Features** - 6 key benefits section with icons and badges
- **Testimonials** - Client success stories carousel
- **CTA Section** - High-conversion call-to-action with dark background
- **Footer** - Comprehensive footer with newsletter signup and social links

### 🎨 Design System
- **Primary Color**: Orange (#F58220)
- **Secondary**: Dark Blue/Black (#0F172A)
- **Accent**: White (#FFFFFF) & Light Gray (#F3F4F6)
- **Animations**: Framer Motion micro-interactions, scroll animations, hover effects
- **Typography**: Modern, clean, professional SaaS style
- **Spacing**: Consistent, generous spacing for premium feel

### 🚀 Advanced Features
- Auto-rotating hero slider with manual controls
- Smooth scroll animations with **Intersection Observer**
- Hover animations and micro-interactions
- Gradient overlays and modern glassmorphic elements
- Fully responsive (mobile-first design)
- Floating animations and floating elements
- Carousel testimonials with touch support
- Newsletter subscription area

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── CorpTalentsHeader.tsx       # Sticky navbar with mobile menu
│   │   └── CorpTalentsFooter.tsx       # Footer with newsletter
│   └── home/
│       ├── CorpTalentsHero.tsx         # Hero with auto-slider
│       ├── CorpTalentsTrustIndicators.tsx
│       ├── CorpTalentsServices.tsx     # 4 service cards
│       ├── CorpTalentsAbout.tsx        # Company overview
│       ├── CorpTalentsProcess.tsx      # 4-step process timeline
│       ├── CorpTalentsFeatures.tsx     # Benefits section
│       ├── CorpTalentsTestimonials.tsx # Carousel testimonials
│       └── CorpTalentsCTA.tsx          # High-conversion CTA
├── pages/
│   └── CorpTalentsHome.tsx             # Main homepage assembler
└── index.css                            # Updated with CorpTalents colors
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16+)
- Bun or npm

### Install Dependencies
```bash
bun install
# or
npm install
```

### Run Development Server
```bash
bun run dev
# or
npm run dev
```

The website will be available at: `http://localhost:5173/corptalents`

### Build for Production
```bash
bun run build
# or
npm run build
```

## 🌐 Access the Website

1. **CorpTalents Homepage**: `http://localhost:5173/corptalents`
2. **Live Site**: https://corptalents.ca/

To make this the main homepage (instead of the current one), update the App.tsx:
```typescript
// Change this:
<Route path="/" element={<Index />} />
// To this:
<Route path="/" element={<CorpTalentsHome />} />
```

## 🎨 Customization

### Change Brand Colors
Edit `src/index.css` in the `:root` section:
```css
:root {
  --primary: 25 96% 54%;        /* Orange primary */
  --secondary: 225 15% 13%;     /* Dark blue */
  --accent: 25 96% 54%;         /* Orange accent */
  --muted: 0 0% 97%;            /* Light gray */
}
```

### Modify Tailwind Config
The `tailwind.config.ts` includes custom animations:
- `animate-fade-in`
- `animate-slide-in-right`
- `animate-float`
- `animate-glow-pulse`

### Update Content
- Edit component text in each component file
- Update testimonials in `CorpTalentsTestimonials.tsx`
- Modify service descriptions in `CorpTalentsServices.tsx`
- Change hero slides in `CorpTalentsHero.tsx`

## ⚙️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 12+
- **Icons**: Lucide React
- **Routing**: React Router v6
- **State Management**: React Hooks
- **UI Components**: Radix UI (pre-installed)
- **Type Safety**: TypeScript

## 📊 Performance Features

- ✅ Lazy loading with Intersection Observer
- ✅ Smooth scroll behavior
- ✅ Optimized animations (60fps)
- ✅ Mobile-first responsive design
- ✅ SEO optimized with Helmet
- ✅ Accessibility standards (WCAG)

## 🎯 Section Overview

### 1. Hero Section
- **Features**: Auto-slider, 3 slides with emoji icons
- **Animations**: Smooth fade transitions
- **CTA**: "Get Started" & "Book Consultation"
- **Stats**: 50K+ talents, 150+ countries, 98% success

### 2. Trust Indicators  
- **Content**: 4 trust badges (ISO Certified, Data Secure, etc.)
- **Design**: Hover lift effect, colorful icons
- **Logo Section**: Client company showcase

### 3. Services (4 Cards)
- **TaaS**: Talent as a Service
- **EOR**: Employer of Record  
- **Global Sourcing**: Worldwide recruitment
- **Talent Management**: End-to-end support
- **Features**: Hover animations, expandable cards

### 4. About Section
- **Layout**: Two-column (text + visual)
- **Content**: Mission, Vision, Company story
- **Visual**: Floating stats card

### 5. How It Works (4 Steps)
- **Desktop**: Horizontal timeline with connecting line
- **Mobile**: Vertical timeline with step indicators
- **Steps**: Analysis → Matching → Onboarding → Scaling

### 6. Why Choose Us (6 Features)
- **Benefits**: Speed, Cost, Access, Compliance, Scaling, Support
- **Design**: Feature cards with badges
- **CTA**: Embedded action section

### 7. Testimonials 
- **Format**: Carousel with 4 client stories
- **Navigation**: Previous/Next buttons + indicators
- **Rating**: 5-star ratings for each
- **Stats**: Satisfaction metrics

### 8. Strong CTA Section
- **Background**: Dark gradient with floating elements
- **Content**: Key value propositions + benefits
- **Button**: "Start Free Trial" & "Schedule Call"

### 9. Footer
- **Sections**: 4 footer link columns + brand info
- **Newsletter**: Email subscription form
- **Social**: Links to social media
- **Contact**: Email, phone, location

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Netlify
```bash
netlify deploy
```

### Docker
Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json bun.lock ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 640px
- **Tablet**: 641px - 1024px  
- **Desktop**: 1025px+

All components are optimized for each breakpoint.

## 🔗 Links & Navigation

- All CTA buttons link to `#` (update with actual links)
- Header navigation scrolls to sections via anchor links
- Mobile menu toggles and closes on link click
- Smooth scroll behavior enabled

## 🎭 Animation Details

### Scroll Animations
- Components fade in and slide up on scroll
- Uses Framer Motion `whileInView` prop
- Staggered animations for card groups

### Hover Effects
- Card lift (translateY -5px to -10px)
- Icon scale and rotate
- Button scale (1.05x)
- Color transitions (0.3s)

### Auto-Animations
- Hero slider auto-rotates every 5 seconds
- Floating elements animate continuously
- Pulsing gradients on elements

## 🛠️ Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📚 Additional Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [React Docs](https://react.dev/)
- [Lucide Icons](https://lucide.dev/)

## 💡 Tips for Enhancement

1. **Add Real Images**: Replace emoji icons with actual images
2. **Integrate CMS**: Connect to Strapi, Sanity, or Contentful
3. **Add Contact Form**: Integrate EmailJS or similar
4. **Analytics**: Add Google Analytics or Mixpanel
5. **Blog**: Add a blog section using your CMS
6. **SEO**: Fine-tune meta tags and structured data
7. **Password Module**: Complete the authentication flow

## 🎓 Learning Resources

This project demonstrates:
- Component composition
- React hooks (useState, useEffect, useContext)
- Framer Motion animations
- Tailwind CSS utility-first design
- Responsive mobile-first development
- SEO optimization with React Helmet
- Performance optimization

## 📝 License

Built for CorpTalents. All rights reserved.

## 🤝 Support

For customization or deployment help, contact the development team.

---

**Ready to launch?** Visit `/corptalents` to see the live preview!
