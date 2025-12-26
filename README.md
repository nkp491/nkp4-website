# NKP4 Personal Website

A modern, minimal personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Homepage**: Comprehensive personal website with Hero, About, Portfolio, Blog, and Contact sections
- **Links Page**: Professional social media and contact links
- **Secret Page**: Hidden personal links (accessible only via direct URL)
- **Responsive Design**: Mobile-first approach with clean, minimal aesthetics
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **SEO Optimized**: Metadata and Open Graph tags for better discoverability

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
nkp4-website/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── links/              # Professional links page
│   ├── secret/             # Hidden personal links page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Portfolio.tsx       # Projects showcase
│   ├── Blog.tsx            # Blog/writing section
│   ├── Contact.tsx         # Contact section
│   ├── Navigation.tsx      # Main navigation
│   ├── Footer.tsx          # Footer
│   └── LinkCard.tsx        # Reusable link card
└── public/
    └── images/             # Images and assets
```

## Customization

### Update Personal Information

1. **Homepage Content**: Edit components in `/components/` directory
2. **Links**: Update the links arrays in:
   - `/app/links/page.tsx` for professional links
   - `/app/secret/page.tsx` for personal links
3. **Metadata**: Update SEO information in `/app/layout.tsx`
4. **Branding**: Change "NKP4" references throughout the codebase

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Color scheme: Update CSS variables in `globals.css`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Vercel will auto-detect Next.js and deploy

### Custom Domain

Configure your custom domain in Vercel's project settings.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## License

MIT
