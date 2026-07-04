# Design Specification
# INQUIVIX Landing Page

---

> **Dokumen**: Design System & Visual Specification  
> **Referensi**: [PRD.md](file:///Users/syafriebachtiar/Documents/Trial%20Test%20Inquivix/Documents/PRD.md) · [wireframe.jpeg](file:///Users/syafriebachtiar/Documents/Trial%20Test%20Inquivix/Files/wireframe.jpeg)  
> **Prinsip Utama**: Gestalt Psychology  
> **Versi**: 1.0  
> **Tanggal**: July 4, 2026

---

## Daftar Isi

1. [Gestalt Principles — Fondasi Desain](#1-gestalt-principles--fondasi-desain)
2. [Design System — Tokens & Variables](#2-design-system--tokens--variables)
3. [Layout System & Grid](#3-layout-system--grid)
4. [Desain Per Section](#4-desain-per-section)
5. [Interaction & Motion Design](#5-interaction--motion-design)
6. [Responsive Strategy](#6-responsive-strategy)
7. [Accessibility Design](#7-accessibility-design)
8. [Asset Specification](#8-asset-specification)

---

## 1. Gestalt Principles — Fondasi Desain

Seluruh keputusan desain pada landing page ini didasarkan pada **7 prinsip Gestalt** yang diterapkan secara konsisten di setiap section untuk menciptakan pengalaman visual yang koheren, intuitif, dan profesional.

### 1.1 Proximity (Kedekatan)

> *Elemen-elemen yang berdekatan secara spasial dipersepsikan sebagai satu kelompok.*

| Penerapan | Section | Detail Implementasi |
|-----------|---------|---------------------|
| **Content grouping** | Hero | Headline + sub-headline + CTAs didekatkan (gap 16–24px) membentuk satu blok pesan utama, terpisah dari stat cards di sisi kanan (gap 48–64px) |
| **Card internal** | Core Expertise, Services | Dalam setiap card: icon → title (8px gap) → description (12px gap) membentuk hierarki konten kohesif |
| **Section headers** | Semua sections | Label overline → H2 headline → sub-headline dikelompokkan rapat (8–12px gap antar elemen) dengan jarak 48px ke konten di bawahnya |
| **Stat clusters** | Case Studies | Angka statistik + label dikelompokkan rapat (4px), setiap cluster dipisahkan oleh divider vertikal (24px gap) |
| **Footer columns** | Footer | Heading → list items dalam setiap kolom berjarak rapat (8–12px), antar kolom berjarak lebar (48–64px) |

```
┌─────────────────────────────────────────────┐
│  [OVERLINE]          ← 8px gap              │
│  Headline Text       ← 12px gap             │
│  Sub-headline text   ← 48px gap             │
│                                             │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐    │  ← Cards dikelompokkan
│  │ Card │  │ Card │  │ Card │  │ Card │    │    dengan gap 24px
│  └──────┘  └──────┘  └──────┘  └──────┘    │
└─────────────────────────────────────────────┘
```

### 1.2 Similarity (Kesamaan)

> *Elemen-elemen dengan tampilan visual serupa dipersepsikan sebagai satu kelompok fungsional.*

| Aspek Kesamaan | Implementasi |
|----------------|-------------|
| **Card styling** | Semua card (Expertise, Services, Case Studies, Insights) menggunakan border-radius, shadow, padding, dan background yang identik → pembaca langsung mengenali pola card = unit informasi |
| **CTA buttons** | Semua primary CTA ("Book a Strategy Call") menggunakan warna merah identik (`#DC2626`), font-weight 600, border-radius 8px, height 48px → konsistensi mengarahkan mata ke aksi |
| **Section overlines** | Semua section label menggunakan style identik: uppercase, letter-spacing 2px, font-size 13px, warna `#DC2626` → pembaca mengenali pola navigasi section |
| **Icon treatment** | Icons di Services dan Expertise menggunakan ukuran (40×40px), warna (primary/accent), dan container style yang sama |
| **Typography scale** | H2 headlines di semua section menggunakan font-size, weight, dan color identik → konsistensi hierarki visual |

```
Similarity Pattern — CTA Buttons:

  [Book a Strategy Call]  ← Hero (primary red, 600 weight)
  [Book a Strategy Call]  ← Navbar (primary red, 600 weight)
  [Book a Strategy Call]  ← Final CTA (primary red, 600 weight)
  
  Identik → otak mengenali ini sebagai "aksi utama" di manapun posisinya
```

### 1.3 Continuity (Kesinambungan)

> *Mata mengikuti garis, kurva, atau arah yang berkelanjutan secara natural.*

| Penerapan | Section | Detail |
|-----------|---------|--------|
| **Timeline line** | Our Process | Garis horizontal/dot-connector yang menghubungkan Step 01 → 02 → 03, menciptakan alur visual kiri-ke-kanan yang menuntun mata |
| **Scroll flow** | Keseluruhan page | Konten diatur dalam alur vertikal top-to-bottom yang logis: Hero (attract) → Trust (validate) → Expertise (convince) → Services (inform) → Process (explain) → Case Studies (prove) → Insights (educate) → FAQ (clarify) → CTA (convert) |
| **Logo marquee** | Trusted By | Logo bar bergerak horizontal secara kontinu, menciptakan kesan infinite scroll dan menuntun mata mengikuti arah gerakan |
| **Card grid alignment** | Services, Insights | Baseline alignment dan consistent grid membuat mata mengalir secara natural dari satu card ke card berikutnya |
| **Number progression** | Our Process | 01 → 02 → 03 dengan size besar dan progressive accent, menciptakan counting path yang intuitif |

```
Our Process — Continuity Flow:

  ╭────────╮      ╭────────╮      ╭────────╮
  │   01   │──────│   02   │──────│   03   │
  │  PLAN  │      │ LAUNCH │      │ SCALE  │
  ╰────────╯      ╰────────╯      ╰────────╯
       ←────── timeline line ──────→
       
  Mata mengikuti garis horizontal dari kiri ke kanan,
  memahami proses sebagai sekuensial.
```

### 1.4 Closure (Penutupan)

> *Otak melengkapi bentuk atau pola yang tidak lengkap — menciptakan keterlibatan kognitif.*

| Penerapan | Detail |
|-----------|--------|
| **Card cropping** | Insight/blog cards di edge kanan viewport sedikit terpotong (showing ~30% of next card), memberi sinyal bahwa ada lebih banyak konten → mengundang scroll horizontal |
| **Stat card glassmorphism** | Hero stat cards menggunakan blur + semi-transparent background — otak "melengkapi" informasi di belakang card, menciptakan depth perception |
| **FAQ accordion** | Jawaban tersembunyi di balik pertanyaan — otak mengetahui ada informasi yang perlu di-"buka", menciptakan curiosity gap dan mendorong interaksi |
| **Truncated descriptions** | Card descriptions yang menggunakan line-clamp (max 3 baris) + "..." membuat pembaca ingin tahu lebih → CTA click |
| **"View All" links** | "View All Case Studies →" dan "View All Insights →" mengimplikasikan ada konten lebih banyak yang belum ditampilkan |

### 1.5 Figure-Ground (Figur-Latar)

> *Otak memisahkan elemen utama (figure) dari latar belakang (ground) untuk fokus persepsi.*

| Penerapan | Section | Detail |
|-----------|---------|--------|
| **Hero overlay** | Hero | Dark gradient overlay (rgba(15,23,42,0.75)) di atas foto Seoul menciptakan kontras tinggi → teks putih menjadi "figure" yang jelas terhadap "ground" gelap |
| **Alternating backgrounds** | Keseluruhan page | Sections bergantian antara white (`#FFFFFF`) dan light gray (`#F8FAFC`), menciptakan natural separation dan mengurangi visual fatigue |
| **Elevated cards** | Expertise, Services | White cards dengan shadow pada light gray background → cards "terangkat" sebagai figure di atas ground |
| **CTA section** | Final CTA | Dark navy background (`#0F172A`) membuat teks putih dan tombol merah "menonjol" secara dramatis |
| **Navbar transparency** | Header | Sticky navbar dengan backdrop-blur menciptakan layering depth — konten page terlihat "di bawah" navbar |

```
Figure-Ground Layering:

  ┌──────────────────────────────────────┐ ← Navbar (z-50, blur)
  │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
  ├──────────────────────────────────────┤
  │▓▓▓▓▓▓ HERO (dark ground) ▓▓▓▓▓▓▓▓▓▓│ ← Dark background
  │▓▓ ┌─────────────────────┐ ▓▓▓▓▓▓▓▓▓│
  │▓▓ │  White Text (figure) │ ▓▓▓▓▓▓▓▓│ ← Text sebagai figure
  │▓▓ └─────────────────────┘ ▓▓▓▓▓▓▓▓▓│
  ├──────────────────────────────────────┤
  │░░░░░ LIGHT GRAY section ░░░░░░░░░░░░│ ← Alternating ground
  │░░ ┌──────┐ ┌──────┐ ┌──────┐ ░░░░░░│
  │░░ │ Card │ │ Card │ │ Card │ ░░░░░░│ ← Cards sebagai figure
  │░░ └──────┘ └──────┘ └──────┘ ░░░░░░│
  ├──────────────────────────────────────┤
  │      WHITE section                   │ ← Alternating ground
  ├──────────────────────────────────────┤
  │▓▓▓▓▓▓ DARK CTA section ▓▓▓▓▓▓▓▓▓▓▓▓│
  └──────────────────────────────────────┘
```

### 1.6 Common Region (Wilayah Bersama)

> *Elemen yang berada dalam batas visual yang sama dipersepsikan sebagai satu grup.*

| Penerapan | Detail |
|-----------|--------|
| **Cards sebagai region** | Border, background, padding, dan border-radius pada setiap card menciptakan "wilayah" visual yang jelas → semua konten di dalam card dipersepsikan sebagai satu unit informasi |
| **Section containers** | Setiap section dibungkus dalam max-width container dengan padding konsisten → menciptakan batas visual yang jelas antara sections |
| **Stat card regions** | Stat cards di Hero menggunakan background semi-transparan + border → membatasi data point sebagai unit mandiri |
| **FAQ items** | Setiap FAQ item dibungkus dalam bordered region (border-bottom divider) → memisahkan pertanyaan satu dengan lainnya |
| **Footer column regions** | Implicit region melalui konsisten padding dan alignment dalam setiap kolom |
| **Navbar region** | Background solid/blur + bottom border membatasi navigasi sebagai region terpisah dari konten page |

### 1.7 Prägnanz (Simplicity / Law of Good Form)

> *Persepsi cenderung mengorganisir pengalaman menjadi bentuk paling sederhana dan teratur.*

| Penerapan | Detail |
|-----------|--------|
| **Grid system** | Menggunakan 12-column grid yang konsisten → layout selalu teratur dan predictable |
| **Limited color palette** | Hanya 5 warna utama (red, navy, white, light gray, medium gray) → kesederhanaan yang elegan |
| **Consistent spacing scale** | Spacing mengikuti skala 4px: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96 → ritme visual yang teratur |
| **Symmetric layouts** | Sections menggunakan centered layout dengan margins simetris → keseimbangan visual |
| **Clear hierarchy** | Setiap section mengikuti pola: Overline → H2 → Subtitle → Content → CTA → konsistensi pattern recognition |
| **Minimal decorative elements** | Dekorasi diminimalkan — fokus pada konten dan whitespace → cognitive load rendah |

---

## 2. Design System — Tokens & Variables

### 2.1 Color Tokens

```css
:root {
  /* === Primary === */
  --color-primary-50:  #FEF2F2;
  --color-primary-100: #FEE2E2;
  --color-primary-200: #FECACA;
  --color-primary-300: #FCA5A5;
  --color-primary-400: #F87171;
  --color-primary-500: #EF4444;
  --color-primary-600: #DC2626;   /* ← Main CTA, accents */
  --color-primary-700: #B91C1C;   /* ← Hover state */
  --color-primary-800: #991B1B;
  --color-primary-900: #7F1D1D;

  /* === Neutral (Navy-based) === */
  --color-neutral-50:  #F8FAFC;   /* ← Light section backgrounds */
  --color-neutral-100: #F1F5F9;
  --color-neutral-200: #E2E8F0;   /* ← Borders, dividers */
  --color-neutral-300: #CBD5E1;
  --color-neutral-400: #94A3B8;
  --color-neutral-500: #64748B;   /* ← Body text, secondary */
  --color-neutral-600: #475569;
  --color-neutral-700: #334155;
  --color-neutral-800: #1E293B;   /* ← Dark backgrounds */
  --color-neutral-900: #0F172A;   /* ← Deepest dark, headlines */

  /* === Semantic === */
  --color-success:     #22C55E;
  --color-warning:     #F59E0B;
  --color-info:        #3B82F6;

  /* === Surface === */
  --color-surface-white:    #FFFFFF;
  --color-surface-light:    #F8FAFC;
  --color-surface-dark:     #0F172A;
  --color-surface-card:     #FFFFFF;
  --color-surface-overlay:  rgba(15, 23, 42, 0.75);
  --color-surface-glass:    rgba(255, 255, 255, 0.08);
  --color-surface-glass-border: rgba(255, 255, 255, 0.15);
}
```

### 2.2 Typography Scale

```css
:root {
  /* === Font Family === */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-display: 'Plus Jakarta Sans', var(--font-primary);

  /* === Font Sizes (with fluid clamp) === */
  --text-xs:    clamp(0.75rem, 0.7rem + 0.25vw, 0.8125rem);    /* 12–13px */
  --text-sm:    clamp(0.8125rem, 0.78rem + 0.16vw, 0.875rem);   /* 13–14px */
  --text-base:  clamp(0.9375rem, 0.9rem + 0.19vw, 1rem);        /* 15–16px */
  --text-lg:    clamp(1.0625rem, 1rem + 0.31vw, 1.125rem);      /* 17–18px */
  --text-xl:    clamp(1.1875rem, 1.1rem + 0.44vw, 1.25rem);     /* 19–20px */
  --text-2xl:   clamp(1.375rem, 1.2rem + 0.88vw, 1.5rem);       /* 22–24px */
  --text-3xl:   clamp(1.75rem, 1.5rem + 1.25vw, 2rem);          /* 28–32px */
  --text-4xl:   clamp(2rem, 1.6rem + 2vw, 2.5rem);              /* 32–40px */
  --text-5xl:   clamp(2.5rem, 2rem + 2.5vw, 3.5rem);            /* 40–56px */

  /* === Font Weights === */
  --font-normal:    400;
  --font-medium:    500;
  --font-semibold:  600;
  --font-bold:      700;
  --font-extrabold: 800;

  /* === Line Heights === */
  --leading-tight:   1.15;
  --leading-snug:    1.3;
  --leading-normal:  1.5;
  --leading-relaxed: 1.625;

  /* === Letter Spacing === */
  --tracking-tight:   -0.025em;
  --tracking-normal:  0;
  --tracking-wide:    0.05em;
  --tracking-wider:   0.1em;
  --tracking-widest:  0.15em;
}
```

**Typography Hierarchy Map:**

| Level | Font | Size Token | Weight | Line Height | Letter Spacing | Penggunaan |
|-------|------|-----------|--------|-------------|----------------|------------|
| **Display** | Plus Jakarta Sans | `--text-5xl` | 800 | `--leading-tight` | `--tracking-tight` | Hero H1 |
| **H2** | Inter | `--text-4xl` | 700 | `--leading-tight` | `--tracking-tight` | Section headlines |
| **H3** | Inter | `--text-2xl` | 600 | `--leading-snug` | `--tracking-normal` | Card titles |
| **H4** | Inter | `--text-xl` | 600 | `--leading-snug` | `--tracking-normal` | Sub-headings |
| **Body** | Inter | `--text-base` | 400 | `--leading-relaxed` | `--tracking-normal` | Paragraphs |
| **Body Small** | Inter | `--text-sm` | 400 | `--leading-normal` | `--tracking-normal` | Captions, meta |
| **Overline** | Inter | `--text-xs` | 600 | `--leading-normal` | `--tracking-widest` | Section labels, uppercase |
| **Stat Number** | Plus Jakarta Sans | `--text-3xl` | 800 | `--leading-tight` | `--tracking-tight` | Angka-angka besar |

### 2.3 Spacing Scale

```css
:root {
  /* === Base unit: 4px === */
  --space-0:   0;
  --space-1:   0.25rem;   /*  4px */
  --space-2:   0.5rem;    /*  8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */
  --space-32:  8rem;      /* 128px */
}
```

### 2.4 Elevation & Shadows

```css
:root {
  --shadow-xs:    0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm:    0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  --shadow-md:    0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --shadow-lg:    0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --shadow-xl:    0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --shadow-2xl:   0 25px 50px -12px rgba(0, 0, 0, 0.25);

  /* Colored shadow for CTA emphasis */
  --shadow-primary: 0 8px 24px -4px rgba(220, 38, 38, 0.35);

  /* Glass effect shadow */
  --shadow-glass:   0 8px 32px rgba(0, 0, 0, 0.12);
}
```

### 2.5 Border Radius

```css
:root {
  --radius-sm:   0.375rem;  /*  6px */
  --radius-md:   0.5rem;    /*  8px */
  --radius-lg:   0.75rem;   /* 12px */
  --radius-xl:   1rem;      /* 16px */
  --radius-2xl:  1.5rem;    /* 24px */
  --radius-full: 9999px;    /* pill shape */
}
```

### 2.6 Transition & Animation Tokens

```css
:root {
  /* === Durations === */
  --duration-fast:     150ms;
  --duration-normal:   250ms;
  --duration-slow:     400ms;
  --duration-slower:   600ms;

  /* === Easings === */
  --ease-out:        cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out:     cubic-bezier(0.65, 0, 0.35, 1);
  --ease-spring:     cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-bounce:     cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
```

---

## 3. Layout System & Grid

### 3.1 Container System

```
┌──────────────────── viewport width ────────────────────┐
│                                                         │
│  ┌──── container (max-width: 1280px, mx: auto) ─────┐  │
│  │  px: 16px (mobile) / 24px (tablet) / 32px (desk) │  │
│  │                                                    │  │
│  │          ┌──── content area ────┐                  │  │
│  │          │                      │                  │  │
│  │          └──────────────────────┘                  │  │
│  └────────────────────────────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

| Property | Mobile (<640px) | Tablet (640–1024px) | Desktop (>1024px) |
|----------|----------------|--------------------|--------------------|
| Container max-width | 100% | 100% | 1280px |
| Horizontal padding | 16px | 24px | 32px |
| Section vertical padding | 48px | 64px | 96px |

### 3.2 Grid Configuration

```
Desktop 12-Column Grid (gap: 32px):

│ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │10 │11 │12 │
├───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤

4-col cards:  │████████│████████│████████│████████│  (span 3 each)
3-col cards:  │████████████│████████████│████████████│  (span 4 each)
2-col layout: │██████████████████│██████████████████│  (span 6 each)
```

### 3.3 Section Background Alternation Pattern (Figure-Ground)

Gestalt Figure-Ground diterapkan melalui alternasi background warna:

```
Section                    Background              Text Color
─────────────────────────────────────────────────────────────
Navbar                     transparent → blur       white → dark
Hero                       dark overlay (image)     white
Trusted By                 white                    gray
Core Expertise             neutral-50 (light gray)  dark
Services                   white                    dark
Our Process                neutral-50 (light gray)  dark
Case Studies               white                    dark
Insights                   neutral-50 (light gray)  dark
FAQ                        white                    dark
Final CTA                  neutral-900 (dark navy)  white
Footer                     neutral-900 (dark navy)  white/gray
```

> **Prinsip**: Alternasi white ↔ light gray menciptakan *natural visual breaks* tanpa perlu explicit dividers (Gestalt Closure + Figure-Ground). Dark sections (Hero, CTA, Footer) memberikan *bookend effect* — membingkai konten tengah.

---

## 4. Desain Per Section

### 4.1 Navbar

```
┌─────────────────────────────────────────────────────────────────┐
│  INQUIVIX    Services  Market Entry  Case Studies  ...   [CTA] │
└─────────────────────────────────────────────────────────────────┘
```

**Gestalt yang diterapkan:**

| Prinsip | Implementasi |
|---------|-------------|
| **Proximity** | Logo di kiri, menu items dikelompokkan di tengah, CTA di kanan — 3 zona fungsional yang jelas |
| **Similarity** | Semua menu items menggunakan font, size, dan color identik → dikenali sebagai satu grup navigasi |
| **Common Region** | Navbar dibungkus dalam strip horizontal dengan background + bottom border → batas wilayah navigasi |
| **Figure-Ground** | Backdrop-blur menciptakan depth layer — navbar "di atas" konten page |

**Spesifikasi:**

| Property | Value |
|----------|-------|
| Height | 72px (desktop), 64px (mobile) |
| Background (default) | `transparent` |
| Background (scrolled) | `rgba(255,255,255,0.85)` + `backdrop-filter: blur(12px)` |
| Border bottom (scrolled) | `1px solid var(--color-neutral-200)` |
| Logo font | Plus Jakarta Sans, 700, 20px |
| Menu item font | Inter, 500, 14px |
| Menu item color | `--color-neutral-600` (light bg) / `#FFFFFF` (hero) |
| Menu hover | Color → `--color-neutral-900`, underline offset animation |
| CTA button | `--color-primary-600` bg, white text, 14px, 600, radius-md, h: 40px, px: 20px |
| CTA hover | `--color-primary-700` bg, `--shadow-primary` |
| z-index | 50 |
| Transition | background `--duration-normal` `--ease-out` |

**Mobile Behavior:**
- Hamburger icon (3 lines, 24×24px) replaces menu items
- Tap → full-screen overlay dengan backdrop dark (`rgba(0,0,0,0.5)`)
- Menu drawer slides from right, width: 80vw, max-width: 320px
- Menu items stack vertically, 48px touch target height
- Close button (X) di kanan atas drawer

---

### 4.2 Hero Section

```
┌─────────────────────────────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓                                                              ▓│
│▓  ┌─ badge ─────────────────────────┐                         ▓│
│▓  │ KOREA MARKET ENTRY & DIGITAL... │                         ▓│
│▓  └─────────────────────────────────┘                         ▓│
│▓                                           ┌──────────────┐  ▓│
│▓  Win Korea with                           │  STAT CARD   │  ▓│
│▓  Local Strategy,                          │  US$26B      │  ▓│
│▓  Global Execution.                        │  E-Commerce  │  ▓│
│▓                                           ├──────────────┤  ▓│
│▓  Deskripsi singkat tentang                │  STAT CARD   │  ▓│
│▓  INQUIVIX agency...                       │  97.6%       │  ▓│
│▓                                           │  Internet    │  ▓│
│▓  [Book a Strategy Call] [Explore...]      ├──────────────┤  ▓│
│▓                                           │  STAT CARD   │  ▓│
│▓  📍 Seoul, Korea · Where Global...       │  Signal      │  ▓│
│▓                                           └──────────────┘  ▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
└─────────────────────────────────────────────────────────────────┘
```

**Gestalt yang diterapkan:**

| Prinsip | Implementasi |
|---------|-------------|
| **Proximity** | Teks konten (badge + headline + desc + CTAs + location) dikelompokkan di kiri; stat cards dikelompokkan di kanan → 2 zona informasi terpisah |
| **Figure-Ground** | Teks putih (figure) di atas dark photo overlay (ground) — kontras maksimal untuk readability |
| **Common Region** | Stat cards dibungkus dalam glassmorphic container → unit data terpisah dari teks naratif |
| **Similarity** | 3 stat cards menggunakan styling identik → dipersepsikan sebagai satu koleksi data points |
| **Closure** | Glassmorphism pada stat cards — background blur + semi-transparan menciptakan "window" efek |

**Spesifikasi:**

| Property | Value |
|----------|-------|
| Height | `min-height: 90vh` (desktop), `auto` (mobile, min-height: 100vh) |
| Background image | Seoul skyline, `object-fit: cover`, `object-position: center` |
| Overlay | Linear gradient: `rgba(15,23,42,0.80) 0%`, `rgba(15,23,42,0.60) 50%`, `rgba(15,23,42,0.75) 100%` |
| Layout | CSS Grid: `grid-template-columns: 1fr 400px` (desktop), `1fr` (mobile) |
| Content alignment | `align-items: center` |
| Badge | Background: `rgba(220,38,38,0.15)`, border: `1px solid rgba(220,38,38,0.3)`, color: `--color-primary-400`, font: overline style, padding: 6px 16px, radius-full |
| Headline | Display typography, color white, max-width: 640px |
| Subtitle | Body text, color: `rgba(255,255,255,0.8)`, max-width: 520px |
| Primary CTA | `--color-primary-600` bg, white text, height: 52px, px: 28px, radius-lg, shadow-primary |
| Secondary CTA | Transparent bg, white border, white text, height: 52px, px: 28px, radius-lg |
| Location tag | `--text-sm`, color: `rgba(255,255,255,0.6)`, icon: 📍 |

**Stat Cards (Glassmorphism):**

| Property | Value |
|----------|-------|
| Background | `rgba(255,255,255,0.08)` |
| Border | `1px solid rgba(255,255,255,0.15)` |
| Backdrop filter | `blur(16px)` |
| Border radius | `--radius-xl` |
| Padding | 24px |
| Gap between cards | 16px |
| Label | Overline style, `rgba(255,255,255,0.6)` |
| Value | `--text-3xl`, font-weight 800, white |
| Sub-label | `--text-sm`, `rgba(255,255,255,0.7)` |

**Mobile (< 640px):**
- Stack vertical: content block → stat cards below
- Stat cards: horizontal scroll atau 1-column stack
- Headline: `--text-4xl` (scaled down)
- Padding top: 120px (account for navbar)

---

### 4.3 Trusted By (Logo Bar)

```
┌─────────────────────────────────────────────────────────────────┐
│            TRUSTED BY AMBITIOUS GLOBAL BRANDS                   │
│                                                                 │
│  ◈ NEXORA    ◈ LUMOS    ◈ VERITAS    ◈ KOVUM    ◈ QUANTEX     │
│                    ◈ AURORA    ◈ ZENITHX                       │
└─────────────────────────────────────────────────────────────────┘
```

**Gestalt yang diterapkan:**

| Prinsip | Implementasi |
|---------|-------------|
| **Similarity** | Semua logos rendered dalam grayscale, ukuran identik → dipersepsikan sebagai koleksi homogen |
| **Continuity** | Logos disusun horizontal → mata mengikuti garis dari kiri ke kanan |
| **Common Region** | Section dibatasi oleh border-top dan border-bottom subtle → region terpisah |
| **Proximity** | Logos berjarak equal (48px) → ritme visual yang harmonis |

**Spesifikasi:**

| Property | Value |
|----------|-------|
| Background | `--color-surface-white` |
| Section padding | 40px 0 (lebih compact dari section lain — ini transitional section) |
| Border | `1px solid var(--color-neutral-200)` top & bottom |
| Label | Overline style, centered, `--color-neutral-400` |
| Logo display | Flexbox, `justify-content: space-between`, `align-items: center` |
| Logo height | 28–36px, width auto |
| Logo filter | `grayscale(100%) opacity(0.5)` |
| Logo hover | `grayscale(0%) opacity(1)`, transition `--duration-normal` |
| Mobile | 2 rows atau horizontal auto-scroll marquee |

---

### 4.4 Core Expertise (4 Cards)

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │  🏛 Icon │  │  📱 Icon │  │  📊 Icon │  │  🌏 Icon │       │
│  │          │  │          │  │          │  │          │       │
│  │  Korea-  │  │ Platform │  │ Data-Led │  │ Bilingual│       │
│  │  First   │  │  Native  │  │Execution │  │  Team    │       │
│  │Expertise │  │ Strategy │  │          │  │          │       │
│  │          │  │          │  │          │  │          │       │
│  │  Desc... │  │  Desc... │  │  Desc... │  │  Desc... │       │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Gestalt yang diterapkan:**

| Prinsip | Implementasi |
|---------|-------------|
| **Similarity** | 4 cards identik dalam struktur (icon + title + desc), ukuran, dan styling → dikenali sebagai satu set |
| **Proximity** | Icon → Title (8px gap) → Desc (12px gap) di dalam card = internal grouping. Cards dipisahkan 24px gap = antar-unit |
| **Common Region** | Border + background + padding pada setiap card = clear boundary per unit |
| **Prägnanz** | 4-column symmetric grid → simplest, most orderly arrangement |

**Spesifikasi:**

| Property | Value |
|----------|-------|
| Section background | `--color-neutral-50` |
| Grid | `grid-template-columns: repeat(4, 1fr)`, gap: 24px |
| Card background | `--color-surface-white` |
| Card padding | 32px |
| Card border | `1px solid var(--color-neutral-200)` |
| Card border-radius | `--radius-xl` |
| Card shadow | `--shadow-sm` |
| Card hover | `--shadow-lg`, `translateY(-4px)`, border-color: `--color-primary-200` |
| Icon container | 48×48px, `--color-primary-50` background, `--radius-lg`, centered icon |
| Icon | 24×24px, `--color-primary-600` |
| Title | H3 typography, `--color-neutral-900` |
| Description | Body small, `--color-neutral-500`, line-height: relaxed |
| Transition | `transform --duration-normal --ease-out`, `box-shadow --duration-normal` |

**Responsive:**
- Tablet: `grid-template-columns: repeat(2, 1fr)`
- Mobile: `grid-template-columns: 1fr`

---

### 4.5 Services (6 Cards)

```
┌─────────────────────────────────────────────────────────────────┐
│                       WHAT WE DO                                │
│     End-to-end digital marketing solutions for                  │
│                  growth in Korea                                │
│         Integrated, data-driven solutions...                    │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ 🔎 Naver     │  │ 💬 Kakao &   │  │ 🤝 Influencer│          │
│  │  Marketing   │  │  Paid Media  │  │  & KOL       │          │
│  │  Desc...     │  │  Desc...     │  │  Desc...     │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ 🚀 Market    │  │ 🌐 Web &     │  │ 🎯 Events & │          │
│  │  Entry       │  │  Content     │  │  Brand       │          │
│  │  Desc...     │  │  Desc...     │  │  Desc...     │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Gestalt yang diterapkan:**

| Prinsip | Implementasi |
|---------|-------------|
| **Similarity** | 6 cards identik dalam struktur → satu set layanan yang setara/homogen |
| **Proximity** | 3×2 grid dengan gap identik → setiap baris dipersepsikan sebagai sub-grup. Header (overline + H2 + subtitle) dikelompokkan rapat, terpisah dari card grid |
| **Continuity** | Grid alignment membuat mata mengalir kiri→kanan, atas→bawah secara natural |
| **Common Region** | Card borders membatasi setiap layanan sebagai unit mandiri |
| **Prägnanz** | 3×2 = most regular grid arrangement untuk 6 items |

**Spesifikasi:**

| Property | Value |
|----------|-------|
| Section background | `--color-surface-white` |
| Header alignment | Center |
| Overline | `--color-primary-600`, uppercase, letter-spacing: widest |
| Headline | H2 typography, `--color-neutral-900`, max-width: 720px, centered |
| Subtitle | Body text, `--color-neutral-500`, max-width: 640px, centered |
| Header → Grid gap | 48px |
| Grid | `grid-template-columns: repeat(3, 1fr)`, gap: 24px |
| Card | Same styling as Core Expertise cards |
| Icon | Berbeda warna accent per service: Naver green (#03C75A), Kakao yellow (#FEE500), dsb. Atau konsisten primary red |
| Hover | Same as Expertise cards |

**Responsive:**
- Tablet: `repeat(2, 1fr)`
- Mobile: `1fr`

---

### 4.6 Our Process (3-Step Timeline)

```
┌─────────────────────────────────────────────────────────────────┐
│                       OUR PROCESS                               │
│          A proven process. Measurable results.                  │
│      We minimize risk, accelerate market entry...               │
│                                                                 │
│                                                                 │
│     01              02              03                          │
│   ●═══════════════●═══════════════●                             │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                      │
│  │   PLAN   │  │  LAUNCH  │  │  SCALE   │                      │
│  │          │  │          │  │          │                      │
│  │ • Market │  │ • Local  │  │ • Perf   │                      │
│  │ • Audit  │  │ • Setup  │  │ • SEO    │                      │
│  │ • Road   │  │ • Media  │  │ • CRO    │                      │
│  │ • KPIs   │  │ • Track  │  │ • Review │                      │
│  └──────────┘  └──────────┘  └──────────┘                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Gestalt yang diterapkan:**

| Prinsip | Implementasi |
|---------|-------------|
| **Continuity** | Timeline line (horizontal connector) menghubungkan 3 steps → mata mengikuti alur kiri→kanan, memahami proses sebagai sequential |
| **Similarity** | 3 step cards identik dalam struktur → dikenali sebagai bagian dari satu proses |
| **Proximity** | Number → Step title → Bullet list dikelompokkan rapat = satu unit langkah. Antar-step dipisahkan equal gap |
| **Closure** | Timeline dots (●) sebagai anchor points — otak menghubungkan dots menjadi path lengkap |
| **Prägnanz** | 3 langkah = sesimple mungkin untuk menjelaskan workflow kompleks → cognitive load minimal |

**Spesifikasi:**

| Property | Value |
|----------|-------|
| Section background | `--color-neutral-50` |
| Layout | 3-column grid, centered |
| Timeline line | 2px height, `--color-neutral-200`, positioned between step numbers |
| Timeline dots | 16px circles, `--color-primary-600` fill, centered on line |
| Step numbers | `--text-5xl`, `--font-extrabold`, `--color-primary-100` (large, subtle watermark behind content) |
| Step title | H3, uppercase, `--font-bold`, `--color-neutral-900` |
| Step subtitle | Body, `--color-neutral-500`, italic |
| Bullet items | `--text-sm`, `--color-neutral-600`, list-style: none, custom checkmark/arrow icon |
| Card | Padding 32px, no explicit border (clean look), background transparent |

**Mobile:**
- Vertical timeline layout
- Timeline line rotates to vertical (left side)
- Steps stack vertically with dots on the left, content on the right

```
Mobile Layout:

  ● ── PLAN
  │    • Market Analysis
  │    • Audience Research
  │
  ● ── LAUNCH
  │    • Localized Content
  │    • Campaign Setup
  │
  ● ── SCALE
       • Performance Opt
       • Content & SEO
```

---

### 4.7 Case Studies

```
┌─────────────────────────────────────────────────────────────────┐
│  CASE STUDIES                              View All Case Studies│
│  Real results for global brands                                │
│  We measure success in outcomes...                             │
│                                                                 │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐  │
│  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  │
│  │▓ Global E-Comm  ▓│ │▓ Global Beauty  ▓│ │▓ Global Fashion ▓│  │
│  │▓ Korea Market   ▓│ │▓ Korea Digital  ▓│ │▓ Brand Aware.   ▓│  │
│  │▓               ▓│ │▓               ▓│ │▓               ▓│  │
│  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  │
│  │ +320%  │ +185%  │ │ #1     │ +210% │ │ 2.5M   │ +210% │  │
│  │Revenue │ ROAS   │ │Traffic │Revenue│ │Impress │Search │  │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Gestalt yang diterapkan:**

| Prinsip | Implementasi |
|---------|-------------|
| **Common Region** | Setiap case study card = bounded region dengan image, title, dan stats |
| **Proximity** | Stats dikelompokkan di bagian bawah card (tight gap 4px antara angka dan label); dividers vertikal memisahkan stat clusters |
| **Similarity** | 3 cards identik dalam layout → satu koleksi case studies |
| **Figure-Ground** | Teks overlay putih (figure) di atas dark image (ground) untuk judul; stats di area putih (figure) di bawah image (ground) |
| **Closure** | "View All Case Studies →" mengimplikasikan lebih banyak case studies tersedia |

**Spesifikasi:**

| Property | Value |
|----------|-------|
| Section background | `--color-surface-white` |
| Header layout | Flexbox, `justify-content: space-between` — title left, "View All" right |
| "View All" link | `--color-primary-600`, font 14px 600, hover underline |
| Grid | `repeat(3, 1fr)`, gap: 24px |
| Card border-radius | `--radius-xl` |
| Card overflow | `hidden` |
| Card shadow | `--shadow-md` |
| **Image area** | Height: 200px, `object-fit: cover`, dark overlay gradient (bottom 60%) |
| **Image overlay** | `linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)` |
| **Case title** | Positioned absolute bottom of image area, white, H4 typography, padding 24px |
| **Stats area** | White background, padding 20px, grid: `repeat(auto-fit, minmax(80px, 1fr))` |
| **Stat number** | `--text-2xl`, `--font-extrabold`, `--color-primary-600` |
| **Stat label** | `--text-xs`, `--color-neutral-500`, uppercase |
| Card hover | `translateY(-8px)`, `--shadow-xl`, image `scale(1.05)` |
| Transition | `--duration-slow` `--ease-out` |

**Responsive:**
- Tablet: `repeat(2, 1fr)` — third card spans full width below
- Mobile: `1fr` — cards stack vertically

---

### 4.8 Insights & Trends (Blog Cards)

```
┌─────────────────────────────────────────────────────────────────┐
│  INSIGHTS                                    View All Insights  │
│  Korea market insights and trends                              │
│  Stay ahead of platform changes...                             │
│                                                                 │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐      │
│  │  [image]  │ │  [image]  │ │  [image]  │ │  [image]  │      │
│  │           │ │           │ │           │ │           │      │
│  │  Korea    │ │  Naver    │ │ Influencer│ │  Korean   │      │
│  │  Digital  │ │  vs.      │ │  and KOL  │ │ Consumers│      │
│  │  Land...  │ │  Google   │ │  Market...│ │  Expect...│      │
│  │           │ │           │ │           │ │           │      │
│  │  May 16   │ │  Apr 28   │ │  Apr 16   │ │  Mar 25   │      │
│  │  6 min    │ │  5 min    │ │  7 min    │ │  4 min    │      │
│  └───────────┘ └───────────┘ └───────────┘ └───────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Gestalt yang diterapkan:**

| Prinsip | Implementasi |
|---------|-------------|
| **Similarity** | 4 blog cards identik dalam layout → koleksi artikel terbaru |
| **Proximity** | Image → Title (12px) → Meta (8px) di dalam card = internal grouping |
| **Continuity** | 4-column horizontal layout → mata membaca kiri→kanan |
| **Closure** | Jika di mobile, card terakhir sedikit terpotong di edge → sinyal swipe/scroll untuk lebih banyak |
| **Common Region** | Card border membungkus semua elemen artikel menjadi satu unit |

**Spesifikasi:**

| Property | Value |
|----------|-------|
| Section background | `--color-neutral-50` |
| Grid | `repeat(4, 1fr)`, gap: 24px |
| Card background | `--color-surface-white` |
| Card border-radius | `--radius-xl` |
| Card border | `1px solid var(--color-neutral-200)` |
| Card overflow | `hidden` |
| **Image** | Aspect ratio 16:10, `object-fit: cover`, border-radius top only |
| **Content padding** | 24px |
| **Title** | H4 typography, `--color-neutral-900`, line-clamp: 2, min-height: 3em |
| **Date** | `--text-sm`, `--color-neutral-400` |
| **Read time** | `--text-sm`, `--color-neutral-400`, dot separator (·) from date |
| Card hover | `--shadow-lg`, `translateY(-4px)`, image `scale(1.05)` |

**Responsive:**
- Tablet: `repeat(2, 1fr)`
- Mobile: horizontal scroll (overflow-x: auto, snap: x mandatory) — menerapkan **Closure** — card yang terpotong mengundang scroll

---

### 4.9 FAQ (Accordion)

```
┌─────────────────────────────────────────────────────────────────┐
│              FREQUENTLY ASKED QUESTIONS                         │
│    Frequently asked questions about digital marketing           │
│                       in Korea                                  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────┐       │
│  │  1. What makes digital marketing in Korea...    [−] │       │
│  │                                                     │       │
│  │  Korea has a unique digital ecosystem led by        │       │
│  │  local platforms like Naver and Kakao...            │       │
│  └─────────────────────────────────────────────────────┘       │
│  ┌─────────────────────────────────────────────────────┐       │
│  │  2. Does my company need a local agency...      [+] │       │
│  └─────────────────────────────────────────────────────┘       │
│  ┌─────────────────────────────────────────────────────┐       │
│  │  3. How long does it take to see results...     [+] │       │
│  └─────────────────────────────────────────────────────┘       │
│  ┌─────────────────────────────────────────────────────┐       │
│  │  4. What is Naver SEO and how does it...        [+] │       │
│  └─────────────────────────────────────────────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Gestalt yang diterapkan:**

| Prinsip | Implementasi |
|---------|-------------|
| **Common Region** | Setiap FAQ item dibungkus dalam bordered container → unit pertanyaan mandiri |
| **Closure** | Jawaban tersembunyi (collapsed state) menciptakan curiosity gap — otak tahu ada informasi yang harus di-"buka" |
| **Similarity** | Semua FAQ items identik dalam styling → satu koleksi Q&A |
| **Proximity** | Question text + toggle icon rapat di satu baris. Answer text muncul langsung di bawah dengan margin 16px → terkait erat |
| **Figure-Ground** | Item yang terbuka (expanded) memiliki background accent subtle (`--color-neutral-50`) → menonjol dari items yang collapsed |

**Spesifikasi:**

| Property | Value |
|----------|-------|
| Section background | `--color-surface-white` |
| Container max-width | 800px, centered |
| FAQ item border | `1px solid var(--color-neutral-200)` |
| FAQ item border-radius | `--radius-lg` |
| FAQ item margin-bottom | 12px |
| **Question row** | Flexbox, `justify-content: space-between`, padding 24px, cursor pointer |
| **Question text** | `--text-lg`, `--font-semibold`, `--color-neutral-900` |
| **Toggle icon** | Chevron (˅/˄) atau Plus/Minus, 20×20px, `--color-neutral-400` |
| **Toggle rotation** | `rotate(180deg)` saat open, transition `--duration-normal` |
| **Answer area** | Padding: 0 24px 24px 24px, `--text-base`, `--color-neutral-600`, `--leading-relaxed` |
| **Expand animation** | `max-height: 0 → auto` with `--duration-slow` `--ease-out`, opacity: 0 → 1 |
| **Active item** | Background: `--color-neutral-50`, border-color: `--color-primary-200` |
| Behavior | Satu item terbuka pada satu waktu (accordion mode) |

---

### 4.10 Final CTA Section

```
┌─────────────────────────────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓                                                              ▓│
│▓            Ready to grow in Korea?                           ▓│
│▓                                                              ▓│
│▓    Let's build a winning strategy tailored to your           ▓│
│▓    market, audience, and goals...                            ▓│
│▓                                                              ▓│
│▓    [Book a Strategy Call]        Contact Us                  ▓│
│▓                                                              ▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
└─────────────────────────────────────────────────────────────────┘
```

**Gestalt yang diterapkan:**

| Prinsip | Implementasi |
|---------|-------------|
| **Figure-Ground** | Dark navy background → white text + red CTA menonjol secara dramatis. CTA button = ultimate figure |
| **Proximity** | Headline → subtitle → buttons dikelompokkan rapat di center → satu unified call-to-action |
| **Similarity** | CTA button menggunakan styling identik dengan Hero CTA → pengenalan pattern → "ini tempat saya harus klik" |
| **Prägnanz** | Desain paling minimalis di seluruh page — hanya headline + subtitle + button. Zero distraction → maximum conversion focus |

**Spesifikasi:**

| Property | Value |
|----------|-------|
| Background | `--color-neutral-900` |
| Subtle accent | Radial gradient glow dari `--color-primary-900` opacity 20% di belakang CTA area |
| Layout | Flex column, `align-items: center`, `text-align: center` |
| Section padding | 96px 32px |
| Headline | H2 typography, white |
| Subtitle | Body, `rgba(255,255,255,0.7)`, max-width: 560px, centered |
| CTA button | Primary CTA style (same as Hero) |
| Secondary link | `rgba(255,255,255,0.6)`, underline, hover: white |
| CTA button glow | `--shadow-primary` with increased spread |

---

### 4.11 Footer

```
┌─────────────────────────────────────────────────────────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓                                                              ▓│
│▓  INQUIVIX         Services        Company        Contact     ▓│
│▓  Description...   Naver Mktg      About          Address     ▓│
│▓                   Kakao Ads       Case Studies   Email       ▓│
│▓  🔗 🔗 🔗        Influencer      Blog           Phone       ▓│
│▓                   Market Entry    Careers                    ▓│
│▓                   Web & Content   Contact                    ▓│
│▓                   Events                                     ▓│
│▓                                                              ▓│
│▓──────────────────────────────────────────────────────────────▓│
│▓  © 2026 INQUIVIX. All Rights Reserved.    Privacy · Terms   ▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
└─────────────────────────────────────────────────────────────────┘
```

**Gestalt yang diterapkan:**

| Prinsip | Implementasi |
|---------|-------------|
| **Proximity** | 4 kolom dengan internal grouping (heading → links) yang rapat, kolom saling terpisah → 4 domain informasi yang jelas |
| **Similarity** | Column headings, link styling, dan spacing identik → consistent footer navigation |
| **Common Region** | Footer dalam background `--color-neutral-900` → region terpisah dari page content. Bottom bar dipisahkan oleh border-top |
| **Figure-Ground** | Continuity dari Final CTA — kedua sections berbagi dark background, menciptakan "dark ending zone" |

**Spesifikasi:**

| Property | Value |
|----------|-------|
| Background | `--color-neutral-900` (menyatu dengan Final CTA — no visual break) |
| Padding | 64px 32px 32px (top extra untuk separation dari CTA content) |
| Grid | `grid-template-columns: 2fr 1fr 1fr 1fr`, gap: 48px |
| Column heading | `--text-sm`, `--font-semibold`, white, uppercase, letter-spacing: wide, margin-bottom: 20px |
| Links | `--text-sm`, `rgba(255,255,255,0.6)`, hover: white, line-height: 32px (touch-friendly) |
| Social icons | 24×24px, `rgba(255,255,255,0.4)`, hover: white, gap: 16px |
| Divider | `1px solid rgba(255,255,255,0.1)` |
| Bottom bar | Padding: 24px 0, flex between, `--text-xs`, `rgba(255,255,255,0.4)` |

**Responsive:**
- Tablet: 2×2 grid columns
- Mobile: 1 column, stacked vertically, accordion optional

---

## 5. Interaction & Motion Design

### 5.1 Scroll-Triggered Animations (Intersection Observer)

Semua section content menggunakan entrance animation saat masuk viewport. Ini menerapkan **Gestalt Continuity** — animasi menciptakan alur visual yang menuntun mata mengikuti konten saat scroll.

| Section | Animation | Delay Pattern |
|---------|-----------|---------------|
| **Section headers** | `fadeInUp`: opacity 0→1, translateY 24px→0 | 0ms |
| **Cards** | `fadeInUp` + stagger | Stagger: 100ms per card (kiri→kanan) |
| **Process steps** | `fadeInUp` + stagger | Stagger: 200ms per step |
| **Timeline line** | `scaleX(0→1)` from left | 400ms delay after step 1 appears |
| **Stat numbers** | Count-up animation (0 → target number) | Trigger saat visible |
| **FAQ items** | `fadeInUp` + stagger | 80ms per item |

**Implementation:**

```javascript
// Intersection Observer config
const observerOptions = {
  threshold: 0.15,      // Trigger saat 15% elemen visible
  rootMargin: '0px 0px -60px 0px'  // Trigger sedikit sebelum fully in view
};
```

**Motion Tokens:**

| Property | Value |
|----------|-------|
| Entrance duration | `--duration-slow` (400ms) |
| Entrance easing | `--ease-out` |
| Stagger base delay | 100ms |
| Count-up duration | 2000ms |
| Count-up easing | `--ease-in-out` |

### 5.2 Hover Micro-Interactions

| Element | Hover Effect | Duration | Easing |
|---------|-------------|----------|--------|
| **Nav links** | Underline slides in from left (pseudo-element width 0→100%) | `--duration-normal` | `--ease-out` |
| **CTA buttons** | Background darken + shadow glow + subtle scale(1.02) | `--duration-fast` | `--ease-out` |
| **Cards** | `translateY(-4px)` + shadow-lg + border color change | `--duration-normal` | `--ease-out` |
| **Case study cards** | `translateY(-8px)` + shadow-xl + image `scale(1.05)` | `--duration-slow` | `--ease-out` |
| **Logo (trusted by)** | `grayscale(0%)` + `opacity(1)` | `--duration-normal` | — |
| **Footer links** | Color white + translateX(4px) | `--duration-fast` | — |
| **FAQ items** | Background subtle change | `--duration-fast` | — |

### 5.3 Logo Marquee Animation

```css
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.logo-track {
  animation: marquee 30s linear infinite;
}

/* Pause on hover — Gestalt Closure: user ingin melihat logo lebih detail */
.logo-track:hover {
  animation-play-state: paused;
}
```

### 5.4 Smooth Scroll Behavior

```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px; /* Account for sticky navbar height */
}
```

### 5.5 Reduced Motion Preference

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 6. Responsive Strategy

### 6.1 Breakpoint Behavior Matrix

| Element | Mobile (<640px) | Tablet (640–1024px) | Desktop (>1024px) |
|---------|----------------|--------------------|--------------------|
| **Navbar** | Hamburger + drawer | Hamburger + drawer | Full horizontal menu |
| **Hero layout** | 1 col, stacked | 1 col, stacked | 2 col (text + stats) |
| **Hero headline** | `--text-4xl` | `--text-4xl` | `--text-5xl` |
| **Stat cards** | Horizontal scroll | 3-col row | Vertical stack (sidebar) |
| **Trusted By** | Marquee scroll | Flex wrap | Flex row |
| **Expertise cards** | 1 col | 2 col | 4 col |
| **Service cards** | 1 col | 2 col | 3 col |
| **Process** | Vertical timeline | 3 col (compact) | 3 col (full) |
| **Case studies** | 1 col | 2 col (+1 full) | 3 col |
| **Blog cards** | Horizontal scroll | 2 col | 4 col |
| **FAQ** | Full width | 80% width centered | 800px centered |
| **Footer** | 1 col stacked | 2×2 grid | 4 col |
| **Section padding** | 48px 16px | 64px 24px | 96px 32px |

### 6.2 Touch Target Requirements (Mobile)

| Element | Minimum Size |
|---------|-------------|
| Buttons | 48×48px (or 44px with 4px padding) |
| Nav links (mobile) | Full width, 48px height |
| FAQ tap area | Full width of question row |
| Footer links | 44px line-height minimum |
| Carousel indicators | 44×44px touch area |

### 6.3 Mobile-Specific Patterns

- **Cards**: Menjadi swipeable horizontal carousel (Insights section) dengan scroll-snap
- **Stats**: Horizontal scroll dengan snap-to-center
- **Images**: Lazy loaded dengan blur-up placeholder (LQIP)
- **Font sizes**: Fluid scaling via CSS `clamp()` — no abrupt size jumps

---

## 7. Accessibility Design

### 7.1 Color Contrast Compliance

| Combination | Contrast Ratio | WCAG Level |
|-------------|---------------|------------|
| White text on `#0F172A` | 17.6:1 | ✅ AAA |
| White text on `#DC2626` | 4.6:1 | ✅ AA |
| `#0F172A` text on `#F8FAFC` | 16.8:1 | ✅ AAA |
| `#64748B` text on white | 5.0:1 | ✅ AA |
| `#DC2626` text on white | 4.6:1 | ✅ AA |

### 7.2 Focus States

```css
/* Visible focus ring for keyboard navigation */
:focus-visible {
  outline: 2px solid var(--color-primary-600);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}

/* Remove outline for mouse clicks */
:focus:not(:focus-visible) {
  outline: none;
}
```

### 7.3 ARIA Patterns

| Component | ARIA Pattern |
|-----------|-------------|
| **Navbar mobile** | `role="dialog"`, `aria-modal="true"`, `aria-label="Navigation Menu"` |
| **FAQ accordion** | `role="region"`, `aria-labelledby`, `aria-expanded`, `aria-controls` |
| **Logo marquee** | `aria-hidden="true"` (decorative), `role="presentation"` |
| **CTA buttons** | Descriptive `aria-label` if text alone isn't sufficient |
| **Stat numbers** | `aria-label="E-Commerce market value: 26 billion US dollars"` |
| **Images** | Descriptive `alt` text, decorative images get `alt=""` |

### 7.4 Semantic HTML Structure

```html
<body>
  <header>          <!-- Navbar -->
    <nav>...</nav>
  </header>
  
  <main>
    <section id="hero" aria-label="Hero">...</section>
    <section id="trusted-by" aria-label="Trusted partners">...</section>
    <section id="expertise" aria-label="Core expertise">...</section>
    <section id="services" aria-label="Our services">...</section>
    <section id="process" aria-label="Our process">...</section>
    <section id="case-studies" aria-label="Case studies">...</section>
    <section id="insights" aria-label="Insights and trends">...</section>
    <section id="faq" aria-label="Frequently asked questions">...</section>
    <section id="cta" aria-label="Call to action">...</section>
  </main>
  
  <footer>          <!-- Footer -->
    ...
  </footer>
</body>
```

---

## 8. Asset Specification

### 8.1 Image Requirements

| Asset | Dimensi | Format | Fallback | Notes |
|-------|---------|--------|----------|-------|
| **Hero background** | 1920×1080 | WebP (+ JPEG fallback) | Solid color `#0F172A` | Seoul skyline, night/dusk |
| **Case study images** (×3) | 800×500 | WebP | Gradient placeholder | Abstrak atau industry-related |
| **Blog thumbnails** (×4) | 600×375 | WebP | Gradient placeholder | Korea/marketing themed |
| **Client logos** (×7) | 160×48 (max) | SVG | Text fallback | Monochrome, clean |
| **Favicon** | 32×32, 180×180 | ICO, PNG | — | INQUIVIX "I" mark |
| **OG Image** | 1200×630 | PNG | — | Social sharing card |

### 8.2 Icon Specification

Semua icons menggunakan **Lucide React** library untuk konsistensi (Gestalt Similarity).

| Section | Icons Needed | Lucide Name (suggested) |
|---------|-------------|------------------------|
| **Core Expertise** | Korea Flag, Smartphone, BarChart, Globe | `MapPin`, `Smartphone`, `BarChart3`, `Globe2` |
| **Services** | Search, MessageSquare, Users, Rocket, Globe, Calendar | `Search`, `MessageCircle`, `Users`, `Rocket`, `Globe`, `CalendarDays` |
| **Process** | ClipboardList, Play, TrendingUp | `ClipboardList`, `Play`, `TrendingUp` |
| **Social** | LinkedIn, Instagram, Twitter/X | Custom SVGs atau Lucide |
| **UI** | Menu, X, ChevronDown, ArrowRight, MapPin | `Menu`, `X`, `ChevronDown`, `ArrowRight`, `MapPin` |

### 8.3 Font Loading Strategy

```html
<!-- Preconnect untuk performance -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

<!-- Font loading dengan display swap -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet" />
```

**Fallback stack**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

---

## Lampiran: Gestalt Principles Summary Map

Tabel ringkasan penerapan setiap prinsip Gestalt di seluruh landing page:

| Prinsip | Sections | Efek yang Dicapai |
|---------|----------|-------------------|
| **Proximity** | ALL | Grouping konten → hierarki informasi jelas, scannable |
| **Similarity** | Cards, CTAs, Overlines, Icons | Pattern recognition → consistency dan predictability |
| **Continuity** | Process, Scroll flow, Logo bar, Grids | Visual flow → guided attention, storytelling |
| **Closure** | FAQ, Blog scroll, Stats, "View All" | Curiosity → engagement dan interaksi |
| **Figure-Ground** | Hero, CTA, Cards, Alternating BGs | Depth & focus → readability dan hierarchy |
| **Common Region** | Cards, Sections, Navbar, Footer cols | Clear boundaries → information architecture |
| **Prägnanz** | Grid, Colors, Spacing, Section pattern | Simplicity → low cognitive load, elegance |

---

*Dokumen ini digunakan sebagai referensi visual dan teknis untuk implementasi landing page INQUIVIX. Seluruh keputusan desain diturunkan dari prinsip-prinsip Gestalt untuk memastikan pengalaman pengguna yang koheren, intuitif, dan profesional.*
