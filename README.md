# INQUIVIX — Landing Page

> Professional landing page for **INQUIVIX**, a Korea-focused digital marketing agency helping global brands enter, localize, and scale in South Korea.

Built as a high-performance single-page application with a design system grounded in **Gestalt psychology principles** — every layout, spacing, and interaction decision is intentional, not decorative.

---

## Table of Contents

- [Overview](#overview)
- [Live Demo](#live-demo)
- [Page Sections](#page-sections)
- [UI/UX Approach — Gestalt Principles](#uiux-approach--gestalt-principles)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Design System](#design-system)
- [Performance & Accessibility](#performance--accessibility)
- [Documentation](#documentation)
- [Author](#author)

---

## Overview

INQUIVIX Landing Page is a **conversion-focused marketing website** designed for global decision makers (CMOs, Marketing Directors, Business Owners) exploring the Korean market.

| Goal | Description |
|------|-------------|
| **Conversion** | Drive visitors to book a strategy call or explore services |
| **Brand Authority** | Position INQUIVIX as a Korea market entry leader |
| **Information** | Communicate services, process, case studies, and insights clearly |
| **Responsiveness** | Optimized experience on desktop and mobile |
| **Performance** | Lighthouse score target ≥ 90 across all categories |

The page follows a single-page architecture with anchor-based navigation — each section scrolls smoothly into view from the sticky navbar.

---

## Live Demo

> Replace with your Vercel deployment URL after publishing.

```
https://your-inquivix-landing-page.vercel.app
```

---

## Page Sections

```
Landing Page (/)
├── Header / Navigation Bar
├── Hero — Win Korea with Local Strategy
├── Trusted By — Client logo marquee
├── Core Expertise — 4 capability cards
├── Services — 6 end-to-end solutions
├── Our Process — 3-step timeline (Plan → Launch → Scale)
├── Case Studies — 3 results cards with stats
├── Insights & Trends — 4 blog/article cards
├── FAQ — Accordion
├── Final CTA — Ready to grow in Korea?
└── Footer
```

---

## UI/UX Approach — Gestalt Principles

The entire visual and interaction design is built on **7 Gestalt principles** — the psychological laws of how humans perceive visual groups, patterns, and hierarchy. Rather than applying these as abstract theory, each principle maps directly to concrete UI decisions across every section.

### 1. Proximity *(Kedekatan)*

> Elements placed close together are perceived as one group.

| Application | Implementation |
|-------------|----------------|
| **Hero content block** | Headline, sub-headline, and CTAs are grouped tightly (16–24px gap), separated from stat cards by a wider gap (48px+) |
| **Section headers** | Overline label → H2 → subtitle form a tight cluster, with 48px spacing before section content |
| **Card internals** | Icon → title → description use consistent internal spacing so each card reads as one cohesive unit |
| **Case study stats** | Stat value and label are grouped closely; vertical dividers separate stat clusters |

**Why it matters:** Users instantly understand what belongs together without reading labels — reducing cognitive load on first scan.

---

### 2. Similarity *(Kesamaan)*

> Elements that look alike are perceived as part of the same functional group.

| Application | Implementation |
|-------------|----------------|
| **Card pattern** | Expertise, Services, Case Studies, and Insights cards share identical border-radius, shadow, padding, and background |
| **Primary CTAs** | All "Book a Strategy Call" buttons use the same red (`#DC2626`), weight, height, and radius — recognized as the primary action anywhere on the page |
| **Section overlines** | Every section label uses uppercase, wide letter-spacing, and primary red color |
| **Icon treatment** | Service and expertise icons share the same container size, color, and hover behavior |

**Why it matters:** Consistent visual language creates pattern recognition — users learn the interface once and navigate confidently.

---

### 3. Continuity *(Kesinambungan)*

> The eye naturally follows lines, curves, and directional flow.

| Application | Implementation |
|-------------|----------------|
| **Page scroll flow** | Vertical narrative: Attract (Hero) → Validate (Trusted By) → Convince (Expertise) → Inform (Services) → Explain (Process) → Prove (Case Studies) → Educate (Insights) → Clarify (FAQ) → Convert (CTA) |
| **Process timeline** | Horizontal connector line and numbered steps (01 → 02 → 03) guide the eye left-to-right on desktop; vertical timeline on mobile |
| **Logo marquee** | Trusted By logos scroll continuously right-to-left, creating infinite directional motion |
| **Card grids** | Aligned baselines in Services and Insights grids let the eye flow naturally across cards |

**Why it matters:** A logical visual path keeps users engaged through the full conversion funnel without confusion about what to read next.

---

### 4. Closure *(Penutupan)*

> The brain completes incomplete shapes — creating curiosity and engagement.

| Application | Implementation |
|-------------|----------------|
| **Insights carousel** | On mobile, the last visible card is partially cropped at the viewport edge — signaling more content and inviting horizontal scroll |
| **Hero glassmorphism** | Semi-transparent stat cards over the Seoul skyline let the brain "complete" the depth behind them |
| **FAQ accordion** | Hidden answers create a curiosity gap that encourages tap/click interaction |
| **"View All" links** | "View All Case Studies →" and "View All Insights →" imply additional content beyond what's shown |
| **Line-clamp titles** | Truncated card titles with ellipsis suggest there is more to discover |

**Why it matters:** Strategic incompleteness drives interaction without overwhelming the user with all information at once.

---

### 5. Figure-Ground *(Figur–Latar)*

> The brain separates foreground elements from background to focus attention.

| Application | Implementation |
|-------------|----------------|
| **Hero overlay** | Dark gradient over the Seoul skyline creates high contrast — white text and glass cards pop as clear foreground figures |
| **Alternating sections** | White (`#FFFFFF`) and light gray (`#F8FAFC`) backgrounds alternate between sections for natural visual separation |
| **Elevated cards** | White cards with subtle shadow on light gray backgrounds appear to "float" above the surface |
| **Final CTA** | Dark navy (`#0F172A`) background makes white headline text and red button dramatically stand out |
| **Sticky navbar** | Backdrop blur on scroll creates a layered depth effect — content appears beneath the navigation bar |

**Why it matters:** Clear foreground/background separation directs attention to the content that matters most at each scroll position.

---

### 6. Common Region *(Wilayah Bersama)*

> Elements within the same visual boundary are perceived as one group.

| Application | Implementation |
|-------------|----------------|
| **Card boundaries** | Border, background, padding, and border-radius on every card define a clear information unit |
| **Section containers** | `max-w-7xl` wrapper with consistent horizontal padding creates distinct section regions |
| **FAQ items** | Each accordion item is wrapped in a bordered, rounded container — separating questions clearly |
| **Navbar region** | Solid/blur background + bottom border defines navigation as its own zone, separate from page content |
| **Mobile drawer** | Full-width top-down panel groups all navigation links and CTA within one bounded menu region |

**Why it matters:** Visual boundaries prevent content from bleeding together, making scanning and decision-making faster.

---

### 7. Prägnanz *(Simplicity / Good Form)*

> Perception organizes experience into the simplest, most orderly form possible.

| Application | Implementation |
|-------------|----------------|
| **12-column grid** | Consistent grid system across all sections — predictable, orderly layouts |
| **Limited palette** | 5 core colors (red, navy, white, light gray, medium gray) — elegant restraint |
| **Spacing scale** | 4px-based scale (4, 8, 12, 16, 24, 32, 48, 64…) creates rhythmic visual harmony |
| **Section pattern** | Every section follows: Overline → H2 → Subtitle → Content → (optional CTA) |
| **Minimal decoration** | Whitespace and content take priority — no unnecessary ornamental elements |

**Why it matters:** Simplicity reduces cognitive load, builds trust with a premium feel, and keeps focus on conversion messaging.

---

### Gestalt → Code Mapping

These principles are implemented directly in the codebase:

| Principle | Code / Component |
|-----------|-----------------|
| Proximity | Tailwind `gap-*`, `space-y-*`, `SectionWrapper` padding |
| Similarity | Reusable `<Card />`, `<Button />`, `<Badge />` components |
| Continuity | Framer Motion stagger animations, Process timeline, marquee CSS |
| Closure | Insights horizontal scroll + `snap-x`, FAQ accordion, `line-clamp` |
| Figure-Ground | `SectionWrapper` `background` prop (`white` / `light` / `dark`) |
| Common Region | Card borders, FAQ bordered items, Navbar drawer portal |
| Prägnanz | Tailwind design tokens in `tailwind.config.js`, consistent section header pattern |

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | React 19 + TypeScript | Component-based UI with type safety |
| **Build Tool** | Vite 8 | Fast HMR, optimized production bundles |
| **Styling** | Tailwind CSS v3 | Utility-first responsive design |
| **Animation** | Framer Motion | Scroll-triggered entrance animations |
| **Icons** | Lucide React | Lightweight, consistent SVG icons |
| **Fonts** | Inter + Plus Jakarta Sans | Body and display typography |
| **Linting** | Oxlint | Fast static analysis |
| **Deployment** | Vercel | Global CDN, preview deployments |

> **Note:** The original PRD proposed Next.js; the implemented architecture uses **React + Vite** for faster iteration on a single-page landing page. See [Technical Architecture](./Documents/Technical%20Architecture.md) for the full rationale.

---

## Project Structure

```
Trial Test Inquivix/
├── Documents/
│   ├── PRD.md                      # Product requirements
│   ├── design.md                   # Design system & Gestalt specification
│   └── Technical Architecture.md   # Implementation architecture
└── website/                        # Application source code
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── ui/                 # Button, Card, Badge
    │   │   ├── layout/             # Navbar, Footer, SectionWrapper
    │   │   └── sections/           # Hero, Services, FAQ, etc.
    │   ├── data/                   # Static content (services, FAQs, case studies)
    │   ├── App.tsx
    │   ├── main.tsx
    │   └── index.css               # Global styles, marquee animation
    ├── tailwind.config.js          # Design tokens
    ├── vite.config.ts
    └── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
cd website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Design System

Core design tokens defined in `website/tailwind.config.js`:

| Token | Value | Usage |
|-------|-------|-------|
| Primary Red | `#DC2626` | CTAs, accents, overline labels |
| Navy Dark | `#0F172A` | Headlines, dark sections, hero overlay |
| Surface Light | `#F8FAFC` | Alternating section backgrounds |
| Body Text | `#64748B` | Paragraphs, secondary text |
| Display Font | Plus Jakarta Sans | Headlines |
| Body Font | Inter | Body copy, UI text |

Full specification: [Documents/design.md](./Documents/design.md)

---

## Performance & Accessibility

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 90 |
| Lighthouse Best Practices | ≥ 90 |
| Lighthouse SEO | ≥ 95 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

**Accessibility highlights:**
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`)
- WCAG 2.1 AA color contrast
- Keyboard-navigable FAQ accordion with `aria-expanded`
- Mobile drawer with `role="dialog"` and `aria-modal`
- `prefers-reduced-motion` respected for marquee and scroll animations
- Touch targets ≥ 44px on mobile navigation

---

## Documentation

| Document | Description |
|----------|-------------|
| [PRD.md](./Documents/PRD.md) | Product requirements, section specs, deliverables |
| [design.md](./Documents/design.md) | Full design system, Gestalt principles, responsive strategy |
| [Technical Architecture.md](./Documents/Technical%20Architecture.md) | Component architecture, state management, deployment |

---

## Author

**Syafrie Bachtiar**  
Trial Test — INQUIVIX Landing Page Recreation  
July 2026

---

*Built with intentional design. Every pixel serves the conversion goal.*
