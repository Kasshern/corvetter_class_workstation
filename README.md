# Corvette Class Workstation

A futuristic portfolio website inspired by The Expanse's Rocinante (Corvette-class) ship computer interface, built for Keith Salzman - Blockchain & ML Engineer.

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Rajdhani (UI), JetBrains Mono (Code/Data)

## Design Theme

The design is inspired by the Rocinante ship computer from The Expanse, featuring:

- Deep space blue-black background (#0a0e14)
- MCRN amber accents (#f0a500)
- Data cyan highlights (#00d4ff)
- Military/technical UI aesthetic
- Monospace fonts for data displays
- Subtle animations and transitions

## Project Structure

```
/app
  /layout.tsx           - Root layout with fonts and metadata
  /page.tsx            - Homepage/Terminal
  /projects/page.tsx   - Projects showcase
  /skills/page.tsx     - Technical skills
  /experience/page.tsx - Work experience
  /education/page.tsx  - Education & certifications
  /videos/page.tsx     - Video content
  /contact/page.tsx    - Contact information

/components
  /ui                  - Reusable UI components
  /layout             - Layout components
  /sections           - Page-specific sections

/lib
  /audio.ts           - Audio manager for UI sounds
  /utils.ts           - Utility functions

/public
  /sounds            - UI sound effects
  /images            - Images and assets
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Color Palette

- **Background**: `#0a0e14` (Deep space blue-black)
- **Background Secondary**: `#141d2b` (Panel blue-gray)
- **Foreground**: `#e6edf3` (Cool white)
- **Foreground Muted**: `#7d8590` (Muted gray)
- **Accent Amber**: `#f0a500` (MCRN amber - primary)
- **Accent Cyan**: `#00d4ff` (Data cyan - secondary)
- **Border**: `#1e2a3a` (Subtle blue-gray)
- **Success**: `#238636` (Muted green)
- **Warning**: `#d29922` (Amber)
- **Error**: `#da3633` (Muted red)

## Features

- ✅ Responsive design
- ✅ Custom scrollbar
- ✅ Smooth animations
- ✅ SEO optimized
- ✅ TypeScript for type safety
- 🚧 Audio feedback (sounds to be added)
- 🚧 Dark mode variants
- 🚧 Interactive terminal effects

## Development

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## License

Private project - All rights reserved.
