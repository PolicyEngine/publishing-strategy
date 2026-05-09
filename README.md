# PolicyEngine Publishing Strategy

A Next.js 16 application showcasing PolicyEngine's publishing strategy and content roadmap.

## Tech Stack

- **Next.js 16** - App Router with React Server Components
- **React 19** - Latest React with improved performance
- **Tailwind CSS 4** - Utility-first CSS framework
- **@policyengine/ui-kit ^0.9.0** - PolicyEngine design system
- **TypeScript** - Type-safe development
- **Bun** - Fast JavaScript runtime and package manager

## Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Run production server
bun run start

# Lint code
bun run lint
```

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Home page
│   ├── AppClient.tsx # Client component wrapper
│   └── globals.css   # Global styles
├── components/       # React components
├── hooks/           # Custom React hooks
└── styles/          # Additional styles
```

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` configuration file specifies the Next.js framework for automatic deployment.

## Features

- Publishing strategy slides and content roadmap
- Interactive navigation and progress tracking
- Responsive design with PolicyEngine branding
- Optimized for performance with Next.js 16
