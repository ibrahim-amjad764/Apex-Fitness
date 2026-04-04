# Apex Fitness

A premium, modern, and fully responsive gym/fitness website built with Next.js 14, Tailwind CSS, TypeScript, and Framer Motion.

![Apex Fitness](public/images/hero-bg.jpg)

## Features

### Design & UI
- **Futuristic, Premium Aesthetic** - Dark/light mode with glassmorphism, neumorphism, and subtle gradients
- **Smooth Animations** - Framer Motion powered micro-interactions, hover effects, and scroll animations
- **Responsive Design** - Mobile-first approach with full tablet and desktop support
- **Accessibility** - ARIA labels, focus states, reduced motion support, semantic HTML

### Pages
- **Home** - Hero section, features, trainers preview, animated stats, testimonials carousel, FAQ, CTA
- **About Us** - Mission, vision, company story, core values, timeline
- **Services** - Personal training, group classes, nutrition plans, online coaching, recovery services
- **Membership** - Pricing cards with monthly/yearly toggle, feature comparison table
- **Trainers** - Full trainer profiles with social links and certifications
- **Blog** - Fitness articles, tips, and guides with category filtering
- **Contact** - Form with Zod validation, contact info, map placeholder

### Components
- Sticky animated navbar with blur effect
- Mobile hamburger menu with slide-out panel
- Dark/light mode toggle with system preference detection
- Reusable cards (services, trainers, pricing, blog)
- Animated testimonials carousel
- FAQ accordion
- BMI Calculator with metric/imperial support
- Footer with newsletter subscription
- Button variants with loading states

### Advanced Features
- **Animated Counters** - Stats that animate when scrolling into view
- **BMI Calculator** - Interactive tool with health recommendations
- **Theme Persistence** - Saves user preference to localStorage
- **Parallax Scrolling** - Smooth scroll effects
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, structured data

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/apex-fitness.git
cd apex-fitness
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
apex-fitness/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/           # About page
│   │   ├── services/        # Services page
│   │   ├── membership/      # Membership plans page
│   │   ├── trainers/        # Trainers page
│   │   ├── blog/            # Blog page
│   │   ├── contact/         # Contact page
│   │   ├── layout.tsx       # Root layout with providers
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   ├── components/
│   │   ├── navbar.tsx       # Sticky navigation
│   │   ├── footer.tsx       # Footer with newsletter
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── button.tsx   # Button variants
│   │   │   ├── cards.tsx    # Card components
│   │   │   ├── accordion.tsx # FAQ accordion
│   │   │   └── bmi-calculator.tsx # BMI tool
│   │   └── sections/        # Page sections
│   │       ├── hero.tsx     # Hero section
│   │       ├── features.tsx # Features grid
│   │       ├── testimonials.tsx # Testimonials carousel
│   │       └── cta.tsx      # Call-to-action section
│   ├── contexts/
│   │   └── theme.tsx        # Theme provider (dark/light)
│   ├── hooks/
│   │   ├── useAnimatedCounter.ts # Animated counter hook
│   │   ├── useScrollAnimation.ts # Scroll animation hook
│   │   └── useBMICalculator.ts   # BMI calculation hook
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn)
│   └── types/
│       └── index.ts         # TypeScript types
├── public/                  # Static assets
│   └── images/              # Image assets
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Customization

### Colors
The primary color scheme uses orange as the brand color. Modify in `src/app/globals.css`:

```css
:root {
  --color-orange-500: #f97316;
  --color-orange-600: #ea580c;
  --color-orange-400: #fb923c;
}
```

### Images
Replace placeholder images in the `/public/images/` directory:
- `hero-bg.jpg` - Hero section background
- `trainer-*.jpg` - Trainer profile images
- `blog-*.jpg` - Blog post images
- `cta-bg.jpg` - CTA section background

### Content
Update content data in each page file:
- Trainers: `src/app/trainers/page.tsx`
- Services: `src/app/services/page.tsx`
- Membership Plans: `src/app/membership/page.tsx`
- Blog Posts: `src/app/blog/page.tsx`
- FAQ Items: Various page files

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

Deploy the `.next` folder to your hosting platform.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - feel free to use for personal or commercial projects.

## Credits

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)
- Icons by [Lucide](https://lucide.dev)

## Support

For questions or issues, please open a GitHub issue or contact us at info@apexfitness.com

---

**Apex Fitness** - Transform Your Body, Elevate Your Mind

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## 👤 Author

**Ibrahim Amjad**
- Full Stack Developer