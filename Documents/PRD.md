# Product Requirements Document (PRD)
# INQUIVIX — Landing Page

---

> **Project**: INQUIVIX Landing Page Recreation  
> **Client**: Inquivix (Trial Test)  
> **Author**: Syafrie Bachtiar  
> **Created**: July 4, 2026  
> **Deadline**: July 6, 2026 (48 hours)  
> **Budget**: IDR 500,000  
> **Status**: Draft

---

## 1. Overview

### 1.1 Ringkasan Proyek

Membangun sebuah **landing page profesional** untuk INQUIVIX — sebuah agensi digital marketing yang berfokus pada pasar Korea. Landing page ini akan diinterpretasikan dari wireframe yang disediakan dan di-deploy sebagai website yang **responsif, cepat, aman, dan memiliki desain berkualitas tinggi**.

### 1.2 Tujuan

| Tujuan | Deskripsi |
|--------|-----------|
| **Konversi** | Mendorong pengunjung untuk melakukan aksi (Book a Strategy Call, Explore Services) |
| **Brand Authority** | Menampilkan INQUIVIX sebagai market leader di digital marketing Korea |
| **Informasi** | Menyampaikan layanan, proses kerja, case studies, dan insights secara jelas |
| **Responsif** | Pengalaman optimal di desktop & mobile |
| **Performa** | Lighthouse score 90+ di semua kategori |

### 1.3 Target Audience

- **Bisnis global** yang ingin memasuki atau berkembang di pasar Korea
- **Brand internasional** yang membutuhkan strategi digital marketing lokal di Korea
- **Decision makers** (CMO, Marketing Directors, Business Owners)

---

## 2. Tech Stack

| Layer | Teknologi | Alasan |
|-------|-----------|--------|
| **Framework** | **Next.js 14+ (App Router)** | SSR/SSG untuk performa, SEO optimal, ecosystem matang |
| **Styling** | **Tailwind CSS v3** | Rapid UI development, utility-first, responsive built-in |
| **Language** | TypeScript | Type safety, better DX |
| **Deployment** | **Vercel** | Optimal untuk Next.js, free tier, global CDN |
| **Version Control** | GitHub | Repository publik/privat untuk sharing |
| **Icons** | Lucide React / Heroicons | Lightweight, konsisten |
| **Animations** | Framer Motion | Smooth scroll animations, micro-interactions |
| **Fonts** | Google Fonts (Inter / Plus Jakarta Sans) | Modern, professional typography |

---

## 3. Sitemap & Struktur Halaman

Halaman ini adalah **single-page landing page** dengan navigasi anchor ke setiap section.

```
Landing Page (/)
├── Header / Navigation Bar
├── Section 1: Hero
├── Section 2: Trusted By (Logo Bar)
├── Section 3: Core Expertise (4 Cards)
├── Section 4: What We Do — Services (6 Service Cards)
├── Section 5: Our Process (3-Step Process)
├── Section 6: Case Studies (3 Cards + Stats)
├── Section 7: Insights & Trends (Blog Cards)
├── Section 8: FAQ (Accordion)
├── Section 9: CTA Final (Ready to Grow in Korea?)
└── Footer
```

---

## 4. Detail Setiap Section

### 4.1 Header / Navigation Bar

**Deskripsi**: Sticky navigation bar di bagian atas halaman.

| Elemen | Detail |
|--------|--------|
| **Logo** | INQUIVIX (text logo, bold, kiri) |
| **Menu Items** | Services, Market Entry, Case Studies, Insights, About, Contact |
| **CTA Button** | "Book a Strategy Call" (merah/primary color, kanan) |
| **Mobile** | Hamburger menu → slide-in drawer |
| **Behavior** | Sticky on scroll, background blur saat di-scroll |

**Interaksi**:
- Hover state pada menu items
- Smooth scroll ke section terkait saat menu diklik
- Mobile: hamburger icon → full-screen overlay / slide drawer

---

### 4.2 Section 1: Hero

**Deskripsi**: Full-width hero section dengan background gambar kota Seoul dan overlay gelap.

| Elemen | Detail |
|--------|--------|
| **Badge** | "KOREA MARKET ENTRY & DIGITAL GROWTH PARTNER" (label kecil di atas headline) |
| **Headline** | "Win Korea with Local Strategy, Global Execution." |
| **Sub-headline** | Deskripsi singkat tentang INQUIVIX sebagai agensi Korea-focused digital marketing |
| **CTA Buttons** | 2 buttons: "Book a Strategy Call" (primary/merah) + "Explore Our Services" (outline/secondary) |
| **Location Tag** | "📍 Seoul, Korea · Where Global Brands Grow" |
| **Stats Cards** | 3 kartu statistik di sisi kanan: E-Commerce Market (US$26B), Internet Penetration (97.6%), Korea Market Signal (lainnya) |
| **Background** | Gambar skyline Seoul dengan dark overlay gradient |

**Catatan Desain**:
- Hero harus impactful dan memberikan kesan premium
- Stat cards menggunakan glassmorphism atau elevated card style
- Typography: headline besar, bold, eye-catching

---

### 4.3 Section 2: Trusted By (Logo Bar)

**Deskripsi**: Horizontal logo strip yang menampilkan brand-brand global yang pernah bekerja sama.

| Elemen | Detail |
|--------|--------|
| **Label** | "TRUSTED BY AMBITIOUS GLOBAL BRANDS" |
| **Logos** | NEXORA, LUMOS, VERITAS, KOVUM, QUANTEX, AURORA, ZENITHX |
| **Style** | Grayscale logos, subtle, auto-scroll/marquee animation opsional |

---

### 4.4 Section 3: Core Expertise (4 Cards)

**Deskripsi**: 4 kartu yang menampilkan keunggulan utama INQUIVIX.

| Card | Judul | Deskripsi Singkat |
|------|-------|-------------------|
| 1 | **Korea-First Expertise** | Deep local knowledge and networks to navigate Korea's unique market dynamics and consumer behavior |
| 2 | **Platform-Native Strategy** | Naver, Kakao, Meta, and Korean social platforms drive our strategies — built for how Koreans discover and decide |
| 3 | **Data-Led Execution** | Advanced analytics and testing frameworks that drive efficient acquisition and measurable growth |
| 4 | **Bilingual Team, Native Execution** | Korean-English bilingual experts ensure cultural accuracy, seamless communication, and native-level execution |

**Catatan Desain**:
- Setiap kartu memiliki icon di atas
- Layout: 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Subtle hover elevation/shadow effect

---

### 4.5 Section 4: What We Do — Services (6 Cards)

**Deskripsi**: Grid 6 layanan utama dengan icon dan deskripsi.

| Label | Detail |
|-------|--------|
| **Section Label** | "WHAT WE DO" |
| **Headline** | "End-to-end digital marketing solutions for growth in Korea" |
| **Sub-headline** | "Integrated, data-driven solutions built for the Korean market, designed to reduce risk and accelerate growth." |

| # | Service | Deskripsi |
|---|---------|-----------|
| 1 | **Naver Marketing** | Naver Search, Shopping, Brand Search, and Naver-specific solutions that drive visibility, traffic, and conversions on Korea's leading search engine |
| 2 | **Kakao & Paid Media Advertising** | Kakao channel campaigns, plus cross-platform paid campaigns on Meta, Google, and more — built to generate demand and sales |
| 3 | **Influencer & KOL Marketing** | Deep-driven influencer and KOL partnerships for marketing to build trust, conversation, and accelerate brand adoption in Korea |
| 4 | **Market Entry Strategy** | End-to-end market entry consulting including research, partner sourcing, and business plan advisory to ensure a successful Korea entry |
| 5 | **Web & Content Localization** | Korean-first UX/UI design and copy to SEO — to your brand connected to Korean consumers |
| 6 | **Events & Brand Activations** | Offline and online event marketing, brand activations that create buzz, and brand experiences that drive leads, PR, and lasting brand impact |

**Catatan Desain**:
- Layout: 3×2 grid (desktop), 2-column (tablet), 1-column (mobile)
- Setiap card memiliki colored icon, judul bold, dan deskripsi
- Hover: subtle scale + shadow

---

### 4.6 Section 5: Our Process (3-Step Timeline)

**Deskripsi**: Visualisasi proses kerja dalam 3 langkah.

| Label | Detail |
|-------|--------|
| **Section Label** | "OUR PROCESS" |
| **Headline** | "A proven process. Measurable results." |
| **Sub-headline** | "We minimize risk, accelerate market entry, and deliver sustainable growth at every stage." |

| Step | Judul | Detail |
|------|-------|--------|
| **01** | **PLAN** | Build the right strategy on deep market understanding. → Market & Competitive Analysis, Audience & Keyword Research, Strategy & Channel Roadmap, KPI Framework & Measurement |
| **02** | **LAUNCH** | Execute with precision and local relevance. → Localized Website & Content, Campaign Setup & Optimization, Influencer & Media Activation, Platform & Tracking Setup |
| **03** | **SCALE** | Optimize, expand, and drive long-term growth. → Performance Optimization, Content Expansion & SEO, Conversion Rate Optimization, Quarterly Review & Growth Plan |

**Catatan Desain**:
- Numbered steps (01, 02, 03) dengan visual connector/timeline line
- Setiap step memiliki bullet list dari aktivitas
- Warna progresif atau accent yang berbeda per step
- Animasi scroll-in saat section muncul di viewport

---

### 4.7 Section 6: Case Studies

**Deskripsi**: Showcase hasil kerja nyata dengan 3 case study cards + statistik.

| Label | Detail |
|-------|--------|
| **Section Label** | "CASE STUDIES" |
| **Headline** | "Real results for global brands" |
| **Sub-headline** | "We measure success in outcomes, not just impressions." |
| **CTA Link** | "View All Case Studies →" |

| # | Case Study | Statistik |
|---|-----------|-----------|
| 1 | **Global E-Commerce Brand — Korea Market Entry** | +320% Revenue Growth, +185% ROAS Improvement, Year-long Brand Growth |
| 2 | **Global Beauty Brand — Korea Digital Growth** | #1 Organic Traffic, +210% Revenue, 47 Keywords in Top 10, +65% Conversion Rate |
| 3 | **Global Fashion Brand — Brand Awareness Campaign** | 2.5M Impressions, +210% Brand Search, +45% Engagement |

**Catatan Desain**:
- Setiap card memiliki gambar background dengan overlay
- Statistik ditampilkan di bagian bawah card dalam grid
- Hover: reveal lebih banyak detail atau subtle zoom
- Angka-angka besar dan bold untuk impact

---

### 4.8 Section 7: Korea Market Insights & Trends

**Deskripsi**: Blog/article cards yang menampilkan konten terbaru.

| Label | Detail |
|-------|--------|
| **Section Label** | "INSIGHTS" |
| **Headline** | "Korea market insights and trends" |
| **Sub-headline** | "Stay ahead of platform changes, consumer behavior, and growth opportunities." |
| **CTA Link** | "View All Insights →" |

| # | Article Title | Date | Read Time |
|---|--------------|------|-----------|
| 1 | Korea Digital Landscape Report: Key Trends to Watch | May 16, 2024 | 6 min read |
| 2 | Naver vs. Google in Korea: Where to Invest and Why | Apr 28, 2024 | 5 min read |
| 3 | Influencer and KOL Marketing in Korea: What Global Brands Get Wrong | Apr 16, 2024 | 7 min read |
| 4 | What Korean Consumers Expect from Foreign Brands | Mar 25, 2024 | 4 min read |

**Catatan Desain**:
- Layout: 4-column horizontal scroll atau grid (desktop), horizontal scroll (mobile)
- Setiap card memiliki thumbnail image, judul, tanggal, dan read time
- Hover: subtle scale effect

---

### 4.9 Section 8: FAQ (Accordion)

**Deskripsi**: Pertanyaan yang sering diajukan dalam format accordion.

| Label | Detail |
|-------|--------|
| **Section Label** | "FREQUENTLY ASKED QUESTIONS" |
| **Headline** | "Frequently asked questions about digital marketing in Korea" |

| # | Pertanyaan |
|---|-----------|
| 1 | What makes digital marketing in Korea different than other markets? |
| 2 | Does my company need a local agency to enter the Korean market? |
| 3 | How long does it take to see results from Korean digital marketing? |
| 4 | What is Naver SEO and how does it differ from Google SEO? |

**Catatan Desain**:
- Accordion style: klik untuk expand/collapse
- Smooth height animation saat expand
- Icon toggle (+/−) atau chevron
- Hanya 1 item terbuka pada satu waktu (opsional)

**Konten Jawaban** (contoh untuk FAQ #1):
> Korea has a unique digital ecosystem led by local platforms like Naver and Kakao, with distinct user behaviors and content preferences. Success requires platform-native strategies, culturally relevant messaging, and a deep understanding of local search, media, and social trends.

---

### 4.10 Section 9: Final CTA

**Deskripsi**: Call-to-action besar untuk konversi.

| Elemen | Detail |
|--------|--------|
| **Headline** | "Ready to grow in Korea?" |
| **Sub-text** | "Let's build a winning strategy tailored to your market, audience, and goals. Book a call with our experts today. No pitch deck. No pressure. Just a focused conversation about your Korea opportunity." |
| **CTA Button** | "Book a Strategy Call" (primary/merah, prominent) |
| **Secondary Link** | "Contact Us" (text link) |
| **Background** | Subtle gradient atau warna solid accent |

---

### 4.11 Footer

**Deskripsi**: Footer comprehensive dengan informasi perusahaan.

| Column | Konten |
|--------|--------|
| **Column 1 — Brand** | Logo INQUIVIX + Deskripsi singkat ("INQUIVIX is the Korea market entry and digital growth agency...") + Social icons (LinkedIn, Instagram, etc.) |
| **Column 2 — Services** | Naver Marketing, Kakao Advertising, Influencer Marketing, Market Entry Strategy, Web & Content Localization, Events & Activations |
| **Column 3 — Company** | About INQUIVIX, Case Studies, Blog / Insights, Careers, Contact |
| **Column 4 — Contact** | Alamat: Seoul, Korea (detail alamat) + Email: hello@inquivix.com + Phone |
| **Bottom Bar** | "© 2026 INQUIVIX. All Rights Reserved." + Privacy Policy + Terms of Use |

---

## 5. Desain & Visual Guidelines

### 5.1 Color Palette

| Nama | Hex | Penggunaan |
|------|-----|------------|
| **Primary Red** | `#DC2626` / `#B91C1C` | CTA buttons, accents, highlights |
| **Dark Navy** | `#0F172A` / `#1E293B` | Header, hero overlay, section backgrounds |
| **White** | `#FFFFFF` | Card backgrounds, text on dark |
| **Light Gray** | `#F8FAFC` / `#F1F5F9` | Alternate section backgrounds |
| **Medium Gray** | `#64748B` | Body text, secondary text |
| **Dark Text** | `#0F172A` | Headlines, primary text |

### 5.2 Typography

| Elemen | Font | Weight | Size (Desktop) |
|--------|------|--------|----------------|
| **H1 (Hero)** | Inter / Plus Jakarta Sans | 800 (Extra Bold) | 48–56px |
| **H2 (Section)** | Inter | 700 (Bold) | 36–40px |
| **H3 (Card Title)** | Inter | 600 (Semi Bold) | 20–24px |
| **Body** | Inter | 400 (Regular) | 16px |
| **Small/Caption** | Inter | 400/500 | 14px |
| **Label/Overline** | Inter | 600 (Semi Bold) | 12–13px, uppercase, letter-spacing |

### 5.3 Spacing & Layout

| Property | Value |
|----------|-------|
| **Max Content Width** | 1280px (container) |
| **Section Padding** | 80–100px vertical (desktop), 48–60px (mobile) |
| **Card Border Radius** | 12–16px |
| **Card Shadow** | `0 4px 6px -1px rgba(0,0,0,0.1)` |
| **Grid Gap** | 24–32px |

### 5.4 Breakpoints

| Breakpoint | Width | Kolom Grid |
|------------|-------|------------|
| **Mobile** | < 640px | 1 column |
| **Tablet** | 640px – 1024px | 2 columns |
| **Desktop** | > 1024px | 3–4 columns |

---

## 6. Non-Functional Requirements

### 6.1 Performance

| Metric | Target |
|--------|--------|
| **Lighthouse Performance** | ≥ 90 |
| **Lighthouse Accessibility** | ≥ 90 |
| **Lighthouse Best Practices** | ≥ 90 |
| **Lighthouse SEO** | ≥ 95 |
| **First Contentful Paint (FCP)** | < 1.5s |
| **Largest Contentful Paint (LCP)** | < 2.5s |
| **Cumulative Layout Shift (CLS)** | < 0.1 |
| **Total Bundle Size** | < 500KB (gzipped) |

### 6.2 SEO

- Proper `<title>` dan `<meta description>` tags
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Single `<h1>` per page
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text pada semua gambar
- Open Graph dan Twitter Card meta tags
- `robots.txt` dan `sitemap.xml`
- Canonical URL

### 6.3 Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigable
- Proper ARIA labels
- Color contrast ratio ≥ 4.5:1
- Focus states visible
- Screen reader friendly

### 6.4 Security

- HTTPS enforced (via Vercel)
- No inline scripts (CSP compliant)
- Dependencies up to date
- No exposed API keys atau secrets

---

## 7. Aset yang Dibutuhkan

### 7.1 Gambar

| Aset | Deskripsi | Sumber |
|------|-----------|--------|
| **Hero Background** | Skyline Seoul malam hari | Generate / Stock (Unsplash/Pexels) |
| **Case Study Images** | 3 gambar untuk case study cards | Generate |
| **Blog Thumbnails** | 4 gambar untuk insight articles | Generate |
| **Client Logos** | 7 logo brand (NEXORA, LUMOS, dll.) | SVG placeholder/generated |
| **Service Icons** | 6 icons untuk services | Lucide React icons |
| **Process Icons** | 3 icons untuk process steps | Lucide React icons |
| **Expertise Icons** | 4 icons untuk core expertise | Lucide React icons |

### 7.2 Logo

- INQUIVIX text logo — dibuat sebagai SVG/component

---

## 8. Deliverables

| # | Deliverable | Format |
|---|-------------|--------|
| 1 | **Source Code** | GitHub Repository |
| 2 | **Live Website** | Vercel Deployment URL |
| 3 | **Documentation** | README.md di repository |

---

## 9. Timeline & Milestones

| Fase | Durasi | Target |
|------|--------|--------|
| **Fase 1: Setup & Structure** | ~4 jam | Project init, routing, layout components |
| **Fase 2: Section Implementation** | ~16 jam | Build semua 11 sections |
| **Fase 3: Responsiveness & Polish** | ~8 jam | Mobile responsive, animations, micro-interactions |
| **Fase 4: Optimization & Deploy** | ~4 jam | Performance audit, SEO, Vercel deploy |
| **Fase 5: QA & Submission** | ~2 jam | Cross-browser test, final fixes, submit link |
| **Total** | ~34 jam | Dalam 48 jam deadline |

---

## 10. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Image assets tidak tersedia | Medium | Medium | Gunakan AI-generated images atau high-quality stock photos |
| Performance issues dari animations | Low | Medium | Lazy load, defer non-critical animations |
| Mobile layout breaking | Medium | High | Mobile-first approach dengan Tailwind |
| Vercel deployment issues | Low | High | Test deploy early, gunakan preview deployments |

---

## 11. Acceptance Criteria

- [ ] Semua 11 sections dari wireframe terimplementasi
- [ ] Responsive di desktop (1440px, 1280px, 1024px) dan mobile (375px, 390px, 414px)
- [ ] Lighthouse scores ≥ 90 di semua kategori
- [ ] Smooth scroll navigation berfungsi
- [ ] Semua CTA buttons memiliki hover states
- [ ] FAQ accordion berfungsi dengan animasi smooth
- [ ] Deployed dan accessible di Vercel
- [ ] GitHub repository tersedia
- [ ] Desain terlihat profesional dan polished (bukan sekedar wireframe recreation)
- [ ] Page load time < 3 detik di 3G connection
- [ ] No console errors
- [ ] Valid HTML (no W3C errors)

---

## 12. Referensi

- **Wireframe**: [wireframe.jpeg](file:///Users/syafriebachtiar/Documents/Trial%20Test%20Inquivix/Files/wireframe.jpeg)
- **Inspirasi Desain**: Website marketing agency modern (HubSpot, Webflow Agency, Vercel homepage)
- **Color Palette Inspiration**: Professional, corporate dengan accent merah (sesuai branding INQUIVIX)

---

*Dokumen ini adalah living document dan akan diupdate seiring progress development.*
