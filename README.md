# Feeble Hero Section

A pixel-perfect implementation of the Feeble hero section from Figma design, featuring animated bird decorations, cloud layers, and responsive navigation.

## 🚀 Live Demo

[View Live Site](https://feeble-iota.vercel.app/)

## 🛠 Tech Stack

- **Framework:** [Next.js 16.1.1](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Image Optimization:** Next.js Image component

## ✨ Features

- **Pixel-perfect UI** matching Figma specifications
- **Smooth animations** including:
  - Bird entrance animations with duplicate layering effects
  - Diagonal flying bird animations
  - Cloud layer fade-in transitions
  - Navbar fade-in animation
- **Fully responsive** design for mobile, tablet, and desktop
- **Mobile navigation** with animated hamburger menu
- **Optimized performance** with Next.js image optimization and code splitting

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🔧 Installation

1. Clone the repository:
```bash
git clone <https://github.com/Theezigner/Feeble.git>
cd feeble-hero
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
feeble-hero/
├── app/
│   ├── components/
│   │   ├── birds/
│   │   │   ├── birdDecorations.tsx    # Bird animation orchestration
│   │   │   └── bird.tsx               # Individual bird component
│   │   ├── bodyMain/
│   │   │   ├── body.tsx               # Main hero content
│   │   │   ├── bodyButton.tsx         # CTA buttons
│   │   │   └── hero.tsx               # Hero wrapper
│   │   ├── iconAndSvg/
│   │   │   ├── cloudLayers.tsx        # Animated cloud backgrounds
│   │   │   ├── arrowDown.tsx          # Scroll indicator
│   │   │   └── messageIcon.tsx        # Badge icon
│   │   └── navbarComponent/
│   │       ├── navbar.tsx             # Main navigation
│   │       ├── hamburgerMenu.tsx      # Mobile menu
│   │       ├── navLinks.tsx           # Navigation links
│   │       └── contactSales.tsx       # CTA button
│   ├── globals.css                    # Tailwind config & global styles
│   ├── layout.tsx                     # Root layout
│   └── page.tsx                       # Home page
├── public/
│   ├── assets/
│   │   ├── birds/                     # Bird SVG assets
│   │   └── *.svg                      # Other icons/logos
└── package.json
```

## 🎨 Design Implementation

### Typography
- **Font Family:** General Sans
- **Heading:** 64px (desktop), 32px (mobile)
- **Line Height:** 120%
- **Letter Spacing:** -2%

### Colors
- **Primary:** #007AFF
- **Text Primary:** #1D2026
- **Text Secondary:** #8C97A8
- **Background White:** #FFFFFF

### Breakpoints
- **Mobile:** < 640px
- **Tablet:** ≥ 768px
- **Desktop:** ≥ 1024px

## 🎭 Animation Details

### Small Birds
- Initial entrance from `y: 100` with fade-in
- Birds 2 & 4 feature duplicate layering (static base + animated overlay)
- Delay: 0.8s, Duration: 0.3s

### Flying Birds
- Start position: Below viewport (`y: -10vh`)
- End position: Above viewport (`y: -70vh`)
- Diagonal crossing animation from opposite sides
- Duration: 3.5s, Delay: 0.8s

### Cloud Layers
- Sequential fade-in (4 layers)
- Delays: 0.8s, 0.9s, 1.0s, 1.1s
- Opacity: 0.1

## 📱 Responsive Design

### Mobile (< 768px)
- Hamburger menu navigation
- Stacked button layout
- Reduced font sizes and spacing
- 2 visible small birds, 2 large birds hidden
- Content fits within 100vh

### Tablet (768px - 1023px)
- Horizontal navigation
- 4 small birds, 4 large birds visible (scaled down)
- Intermediate sizing
- Content fits within 100vh
- Cloud layer positioned higher to optimize viewport usage

### Desktop (≥ 1024px)
- Full navigation with hover states
- All birds visible (4 small, 4 large)
- Maximum spacing and original design scale

## 🚀 Build & Deployment

Build for production:
```bash
npm run build
# or
yarn build
```

Start production server:
```bash
npm start
# or
yarn start
```

## 📝 Implementation Notes

### Tailwind CSS v4 Migration
This project uses Tailwind CSS v4, which requires theme configuration via CSS custom properties in `globals.css` using the `@theme` directive, rather than the traditional `tailwind.config.ts` file.

### Server-Side Rendering
All animations are implemented with SSR compatibility in mind, avoiding `window` object access during server rendering.

### Image Optimization
SVG assets are used for birds and icons to ensure crisp rendering at all scales while maintaining small file sizes.

## 🔍 Key Decisions

1. **Component Architecture:** Separated concerns with dedicated folders for birds, body content, icons, and navigation
2. **Data-Driven Animations:** Bird positions and animations are configured via arrays for maintainability
3. **Mobile-First Approach:** Started with mobile design and progressively enhanced for larger screens
4. **Performance:** Used Framer Motion's optimized animations and Next.js image optimization

## 📄 License

This project is created as part of Feeble's frontend developer assignment.

---

**Developer:** [Temitayo Adebayo]
**Contact:** [adebayotemitayo86@gmail.com]
**Submission Date:** [January 7,2026]
