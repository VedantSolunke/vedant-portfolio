# Vedant portfolio

A clean, standalone Next.js 16 portfolio starter inspired by the reference site's restrained editorial layout: centered content, fine borders, striped dividers, responsive grids, and data-driven sections.

## Setup

Requirements: Node.js 22+ and pnpm 9+.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize

Edit `src/data/portfolio.ts` to replace every placeholder with your own name, bio, experience, skills, projects, and social URLs. The page and metadata in `src/app/page.tsx` consume that single data source. Adjust colors and typography in `src/app/globals.css`.

This repository intentionally contains only the portfolio route: no blog, docs, registry, analytics, ads, games, or reference branding.

## Validation

```bash
pnpm check-types
pnpm lint
pnpm build
```
