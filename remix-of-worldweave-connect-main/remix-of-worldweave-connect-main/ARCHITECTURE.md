# 🎯 CorpTalents Website Architecture Overview

## Project Structure

```
CorpTalents Website
│
├─ HEADER (Sticky Navigation)
│  ├─ Logo: "CT" + CorpTalents
│  ├─ Desktop Navigation (4 links)
│  ├─ Mobile Hamburger Menu
│  └─ CTA: Sign In + Get Started
│
├─ HERO SECTION (Auto-Rotating Slider)
│  ├─ Slide 1: "Hire Global Talent in Days"
│  ├─ Slide 2: "Talent as a Service (TaaS)"
│  ├─ Slide 3: "Employer of Record (EOR)"
│  ├─ Navigation: Previous/Next buttons + indicators
│  ├─ Statistics: 50K+, 150+, 98%
│  └─ CTAs: Get Started + Book Consultation
│
├─ TRUST INDICATORS Section
│  ├─ 4 Trust Badges
│  │  ├─ ISO Certified
│  │  ├─ Data Security
│  │  ├─ 98% Success Rate
│  │  └─ 24/7 Support
│  └─ Company Logo Showcase (5 companies)
│
├─ SERVICES Section (4 Cards)
│  ├─ Card 1: Talent as a Service (TaaS)
│  ├─ Card 2: Employer of Record (EOR)
│  ├─ Card 3: Global Sourcing
│  └─ Card 4: Talent Management
│
├─ ABOUT Section
│  ├─ Mission/Vision Cards
│  ├─ Company Description
│  ├─ Visual Element: Global Talent Network
│  ├─ Floating Stats: 500+ Companies Served
│  └─ CTA: Learn Our Story
│
├─ HOW IT WORKS Section (4-Step Process)
│  ├─ Step 1: Requirement Analysis 📋
│  ├─ Step 2: Talent Matching 🎯
│  ├─ Step 3: Onboarding & Setup ✅
│  └─ Step 4: Scaling & Support 📈
│  │
│  └─ Layouts:
│     ├─ Desktop: Horizontal timeline with connecting line
│     └─ Mobile: Vertical timeline with step numbers
│
├─ WHY CHOOSE US Section (6 Features)
│  ├─ Feature 1: Fast Hiring (3-5 days) ⚡
│  ├─ Feature 2: Cost Savings (60% less) 💰
│  ├─ Feature 3: Global Access (50K+ talents) 🌍
│  ├─ Feature 4: Full Compliance (100%) 🛡️
│  ├─ Feature 5: Instant Scaling 🚀
│  ├─ Feature 6: 24/7 Support 👥
│  └─ Bottom CTA: "Ready to Scale Your Team?"
│
├─ TESTIMONIALS Section (Carousel)
│  ├─ Client 1: Sarah Chen (TechStart, 5★)
│  ├─ Client 2: Marcus Johnson (Global Solutions, 5★)
│  ├─ Client 3: Elena Rodriguez (Finance Plus, 5★)
│  ├─ Client 4: David Park (Creative Agency, 5★)
│  ├─ Navigation: Previous/Next buttons + indicators
│  ├─ Display Counter: 1/4
│  └─ Stats: 98% satisfaction, 70% time saved, 3.5x growth
│
├─ CTA SECTION (High Conversion)
│  ├─ Headline: "Hire Global Talent in Days, Not Months"
│  ├─ Subtext: Join 500+ companies...
│  ├─ Benefits List (with icons)
│  │  ├─ Start hiring in 3 days ⏱️
│  │  ├─ 50,000+ pre-vetted professionals 👥
│  │  └─ Full compliance & payroll managed 💼
│  ├─ CTAs: "Start Free Trial" + "Schedule Call"
│  ├─ Right Side: 3 Benefit Cards
│  │  ├─ 🌍 Global Reach (150+ countries)
│  │  ├─ ⚡ Speed (3-5 days)
│  │  └─ 💼 Compliance (100% managed)
│  └─ Floating Element: "500+ Companies Trust Us"
│
└─ FOOTER
   ├─ Brand Section (Logo + Contact)
   │  ├─ Email: hello@corptalents.ca
   │  ├─ Phone: +1 (234) 567-890
   │  └─ Location: Global HQ
   ├─ 4 Column Links
   │  ├─ Product (4 links)
   │  ├─ Company (4 links)
   │  ├─ Resources (4 links)
   │  └─ Legal (4 links)
   ├─ Newsletter Signup
   │  ├─ Input: Email address
   │  └─ Button: Subscribe
   ├─ Social Links (LinkedIn, Twitter, Facebook)
   └─ Copyright & Bottom Bar
```

---

## Component Hierarchy

```
CorpTalentsHome (Main Page)
│
├─ CorpTalentsHeader
│  └─ Sticky on scroll
│
├─ CorpTalentsHero
│  ├─ Slide 1-3
│  ├─ Navigation arrows
│  └─ Indicators
│
├─ CorpTalentsTrustIndicators
│  ├─ 4 Trust badges
│  └─ Logo showcase
│
├─ CorpTalentsServices
│  ├─ Service Card 1
│  ├─ Service Card 2
│  ├─ Service Card 3
│  └─ Service Card 4
│
├─ CorpTalentsAbout
│  ├─ Mission/Vision
│  ├─ Description
│  └─ Visual + Stats
│
├─ CorpTalentsProcess
│  ├─ Desktop Timeline
│  └─ Mobile Vertical
│
├─ CorpTalentsFeatures
│  ├─ Feature Card 1-6
│  └─ Embedded CTA
│
├─ CorpTalentsTestimonials
│  ├─ Carousel
│  ├─ Navigation
│  └─ Stats
│
├─ CorpTalentsCTA
│  ├─ Left Content
│  └─ Right Visual Cards
│
└─ CorpTalentsFooter
   ├─ Brand Section
   ├─ Link Columns
   ├─ Newsletter
   ├─ Socials
   └─ Copyright
```

---

## Design Color Scheme

```
PRIMARY (Orange)      #F58220  ████████ Primary action buttons, accents
SECONDARY (Dark)      #0F172A  ████████ Headings, text, dark sections  
ACCENT (Orange)       #F58220  ████████ Highlights, icons
WHITE                 #FFFFFF  ████████ Cards, backgrounds
LIGHT GRAY            #F3F4F6  ████████ Section backgrounds
```

### Color Usage By Component:

- **Header**: White/Dark on scroll
- **Hero**: Orange gradient background
- **Services**: Gradient cards (orange variations)
- **About**: White background + gradient border
- **Process**: White with orange accents
- **Features**: White cards + orange icons
- **Testimonials**: White background
- **CTA**: Dark gradient background
- **Footer**: Dark background

---

## Animation Map

### Scroll-based Animations
```
Component               Trigger              Animation
─────────────────────────────────────────────────────────
All Sections           whileInView          Fade in + slide up
Card Groups            whileInView          Staggered arrival
Trust Indicators       whileInView          Individual fade
Service Cards          whileInView          Staggered + lift
Process Steps          whileInView          Staggered pop-in
Feature Cards          whileInView          Staggered arrival
Testimonials           whileInView          Scale transition
CTA Section            whileInView          Fade + slide left
Footer                 whileInView          Fade in
```

### Interaction Animations
```
Component              Interaction         Effect
────────────────────────────────────────────────────
Cards                  hover               lift (y: -5 to -10px)
Icons                  hover               scale + rotate
Buttons                hover               scale (1.05x)
Buttons                tap/click           scale (0.95x)
Hero Arrows            hover               scale (1.1x)
Links                  hover               color change
Carousel               click               smooth transition
Testimonials           click indicator     fade + scale
```

### Auto Animations
```
Component              Animation           Duration
────────────────────────────────────────────────────
Hero Slider            auto-rotate         5 seconds
Floating Elements      float               6 seconds  
Hero Stats             float               continuous
CTA Card               float               4 seconds
Background Blur        subtle pulse        3 seconds
```

---

## Responsive Behavior

### Mobile (< 640px)
- Single column layouts
- Vertical process timeline  
- Hamburger menu
- Stacked cards
- Full-width sections
- Larger touch targets (min 44px)

### Tablet (640px - 1024px)
- 2-column grids where applicable
- Adjusted spacing
- Tablet-optimized navigation
- Mixed 2-column/3-column layouts

### Desktop (1024px+)
- 4-column layouts
- Horizontal process timeline
- Sticky header
- Generous whitespace
- Full animations enabled
- Desktop navigation displayed

---

## Feature Summary

| Feature | Status | Details |
|---------|--------|---------|
| Auto-rotating slider | ✅ | 3 slides, 5s intervals, manual control |
| Responsive design | ✅ | Mobile-first, all breakpoints |
| Animations | ✅ | Scroll, hover, auto animations |
| Dark/Light modes | ✅ | Via Tailwind dark class |
| Newsletter signup | ✅ | Ready for integration |
| Contact forms | ⚙️ | Ready for backend integration |
| Social links | ✅ | Configured, update URLs |
| SEO optimization | ✅ | React Helmet setup |
| Accessibility | ✅ | Semantic HTML, WCAG ready |
| Performance | ✅ | Optimized animations, lazy load ready |

---

## File Dependencies

```
CorpTalentsHome.tsx
├─ CorpTalentsHeader.tsx
│  └─ lucide-react (Menu, X)
│  └─ framer-motion (motion)
│
├─ CorpTalentsHero.tsx
│  └─ lucide-react (ChevronRight, ArrowRight)
│  └─ framer-motion (motion, AnimatePresence)
│
├─ CorpTalentsTrustIndicators.tsx
│  └─ lucide-react (CheckCircle2, Award, Shield, TrendingUp)
│  └─ framer-motion (motion)
│
├─ CorpTalentsServices.tsx
│  └─ lucide-react (Users, Briefcase, Globe, Settings, ArrowRight)
│  └─ framer-motion (motion)
│
├─ CorpTalentsAbout.tsx
│  └─ lucide-react (CheckCircle2, Zap, Target)
│  └─ framer-motion (motion)
│
├─ CorpTalentsProcess.tsx
│  └─ lucide-react (CheckCircle2, ArrowRight)
│  └─ framer-motion (motion)
│
├─ CorpTalentsFeatures.tsx
│  └─ lucide-react (Zap, Clock, Globe, DollarSign, ShieldCheck, Users)
│  └─ framer-motion (motion)
│
├─ CorpTalentsTestimonials.tsx
│  └─ lucide-react (ChevronLeft, ChevronRight, Star)
│  └─ framer-motion (motion, AnimatePresence)
│
├─ CorpTalentsCTA.tsx
│  └─ lucide-react (ArrowRight, Zap, Clock, Users)
│  └─ framer-motion (motion)
│
└─ CorpTalentsFooter.tsx
   └─ lucide-react (Mail, MapPin, Phone, Linkedin, Twitter, Facebook)
   └─ framer-motion (motion)
   └─ react-router-dom (Link)
```

---

## Content Placeholders to Update

| Section | Item | Instructions |
|---------|------|--------------|
| Hero | Slides | Update 3 headline + subtitle pairs |
| Services | Descriptions | Update service descriptions |
| About | Mission/Vision | Add company mission & vision |
| Testimonials | Quotes | Replace with real client quotes |
| Testimonials | Names | Update with real client names |
| Footer | Contact | Update email, phone, location |
| General | Links | Replace all `#` with real URLs |
| General | Icons | Replace emoji icons with images |
| General | Logo | Add CorpTalents logo image |

---

## Quick Reference: Key Files

| File | Purpose | Location |
|------|---------|----------|
| index.css | Brand colors & tokens | src/index.css |
| App.tsx | Route to /corptalents | src/App.tsx |
| CorpTalentsHome.tsx | Main page assembler | src/pages/ |
| CorpTalentsHeader.tsx | Navigation | src/components/layout/ |
| CorpTalentsFooter.tsx | Footer | src/components/layout/ |
| CorpTalentsHero.tsx | Hero slider | src/components/home/ |
| CorpTalentsServices.tsx | Service cards | src/components/home/ |
| CorpTalentsFeatures.tsx | Benefits | src/components/home/ |
| CorpTalentsTestimonials.tsx | Testimonials | src/components/home/ |

---

## Running the Project

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Access at: http://localhost:5173/corptalents
```

---

This architecture provides a solid, scalable foundation for the CorpTalents website with clean component separation, reusable patterns, and performance-optimized animations.
