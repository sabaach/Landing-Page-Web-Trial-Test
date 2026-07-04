# Technical Architecture Document
# INQUIVIX — Landing Page

---

> **Dokumen**: Technical Architecture & Implementation Strategy  
> **Referensi**: [PRD.md](file:///Users/syafriebachtiar/Documents/Trial%20Test%20Inquivix/Documents/PRD.md) · [design.md](file:///Users/syafriebachtiar/Documents/Trial%20Test%20Inquivix/Documents/design.md)  
> **Tech Stack Utama**: React.js, Tailwind CSS, Vite  
> **Versi**: 1.0  
> **Tanggal**: July 4, 2026

---

## Daftar Isi

1. [System Overview](#1-system-overview)
2. [Tech Stack Terpilih](#2-tech-stack-terpilih)
3. [Component Architecture](#3-component-architecture)
4. [State Management & Data Flow](#4-state-management--data-flow)
5. [Routing & Navigation](#5-routing--navigation)
6. [Styling & Design System Integration](#6-styling--design-system-integration)
7. [Performance Optimization](#7-performance-optimization)
8. [Deployment & Infrastructure](#8-deployment--infrastructure)
9. [Development Workflow & Tooling](#9-development-workflow--tooling)

---

## 1. System Overview

INQUIVIX Landing Page dibangun sebagai **Single Page Application (SPA)** berbasis komponen. Karena ini merupakan landing page yang berfokus pada konversi dan penyampaian informasi yang cepat, arsitektur difokuskan pada **performa tinggi (Fast Initial Load)**, **animasi mulus (Smooth UI/UX)**, dan **kemudahan pemeliharaan (Maintainability)**.

Sistem akan menggunakan pola desain modular di mana setiap bagian dari halaman (sections) dan elemen UI (cards, buttons) dipisahkan menjadi komponen-komponen React yang dapat digunakan kembali (reusable components).

---

## 2. Tech Stack Terpilih

| Lapisan (Layer) | Teknologi | Justifikasi |
|-----------------|-----------|-------------|
| **Core Framework** | **React.js 18+** | Library UI yang deklaratif, efisien, dan berbasis komponen. Ekosistem ekstensif. |
| **Build Tool** | **Vite** | Pengganti Create React App (CRA) modern. HMR sangat cepat, build optimizer berbasis Rollup, output bundle kecil. |
| **Language** | **TypeScript** | Type safety mencegah runtime errors, meningkatkan Developer Experience (DX) dengan autocompletion, serta self-documenting code. |
| **Styling** | **Tailwind CSS v3** | Utility-first CSS mempermudah styling komponen secara langsung tanpa perlu file CSS terpisah (kecuali global tokens). |
| **Animation** | **Framer Motion** | Engine animasi deklaratif untuk React. Sangat cocok untuk mengimplementasikan scroll-triggered animation dan micro-interactions sesuai *design.md*. |
| **Icons** | **Lucide React** | Ringan, berbasis SVG, konsisten, dan mudah di-kustomisasi via props. |
| **Linting & Formatting**| **ESLint + Prettier** | Menjaga konsistensi kode dan best practices. |
| **Deployment** | **Vercel** | Edge network global, integrasi Git yang seamless, optimal untuk aplikasi frontend modern. |

---

## 3. Component Architecture

Aplikasi akan mengadopsi pola **Feature-Sliced Design / Atomic Design (Simplified)** untuk struktur direktori komponen.

### 3.1 Struktur Direktori

```text
src/
├── assets/             # Static assets (images, fonts, raw SVGs)
├── components/
│   ├── ui/             # Reusable atomic UI components (Button, Card, Badge)
│   ├── layout/         # Layout components (Navbar, Footer, SectionWrapper)
│   └── sections/       # Halaman landing page per section (Hero, Services, FAQ)
├── hooks/              # Custom React hooks (useScroll, useIntersectionObserver)
├── data/               # Dummy data / Static content (JSON / TS data files)
├── styles/             # Global CSS dan Tailwind config / variables
├── utils/              # Helper functions (classNames, formatters)
├── App.tsx             # Root component penghubung semua layout & sections
└── main.tsx            # Entry point aplikasi (React DOM render)
```

### 3.2 Hierarki Komponen

```text
<App>
  <Navbar />
  <main>
    <HeroSection />
    <TrustedBySection />
    <CoreExpertiseSection />
      └── <ExpertiseCard /> (x4)
    <ServicesSection />
      └── <ServiceCard /> (x6)
    <ProcessSection />
      └── <TimelineStep /> (x3)
    <CaseStudiesSection />
      └── <CaseStudyCard /> (x3)
    <InsightsSection />
      └── <InsightCard /> (x4)
    <FaqSection />
      └── <AccordionItem /> (x4)
    <CtaSection />
  </main>
  <Footer />
</App>
```

---

## 4. State Management & Data Flow

Mengingat kompleksitas aplikasi ini relatif rendah (sebatas landing page interaktif), penggunaan state management global seperti Redux atau Zustand **tidak diperlukan**.

### 4.1 Local State (React `useState`, `useReducer`)
Digunakan untuk interaksi UI spesifik komponen:
- Status menu mobile (open/close).
- Status FAQ accordion (item mana yang sedang aktif/terbuka).

### 4.2 DOM / Scroll State (React `useRef`, Custom Hooks)
- `useIntersectionObserver`: Mendeteksi saat elemen masuk viewport untuk men-trigger entrance animation.
- `useScrollPosition`: Melacak seberapa jauh pengguna melakukan scroll untuk mengubah status *sticky* navbar (transparent → solid + blur).

### 4.3 Static Data Flow
Konten setiap section (daftar layanan, isi FAQ, daftar client) akan disimpan di direktori `src/data/` sebagai array objek TypeScript konstan dan di-passing ke komponen via **Props**. Ini memastikan komponen UI tetap *dumb/presentational* murni.

---

## 5. Routing & Navigation

Karena ini adalah single landing page (SPA tanpa multi-halaman penuh), `react-router-dom` tidak wajib digunakan (opsional jika nanti direncanakan untuk menambah halaman About/Contact terpisah).

**Navigasi saat ini menggunakan Smooth Scroll (Anchor Links):**
1. Setiap `<section>` akan diberi atribut `id` (contoh: `<section id="services">`).
2. Tautan navbar menggunakan anchor (`href="#services"`).
3. Transisi diatur via CSS native `scroll-behavior: smooth`.
4. Navigasi akan disinkronkan dengan state mobile menu (klik link -> menu tertutup + scroll ke section).

---

## 6. Styling & Design System Integration

Merujuk pada dokumen `design.md`, implementasi gaya akan menggabungkan CSS Variables dengan Tailwind CSS.

### 6.1 Tailwind Configuration (`tailwind.config.js`)
Konfigurasi akan di-extend untuk menampung *Design Tokens* dari Gestalt principles:
- **Colors**: Pemetaan brand colors (Primary Red, Dark Navy, Neutrals).
- **Typography**: Pengaturan font family (Inter, Plus Jakarta Sans) dan fluid typography clamp.
- **Shadows & Elevation**: Menambahkan class custom shadow untuk hover cards & buttons.

### 6.2 CSS Modules & Global Styles (`index.css`)
- Deklarasi CSS Variables (`:root`) untuk mempermudah perubahan tema.
- Utility classes spesifik untuk efek kompleks (glassmorphism, gradient text).

### 6.3 Gestalt Implementation via Tailwind
- **Proximity**: Penggunaan konsisten utility class flexbox `gap-4`, `gap-8`.
- **Figure-Ground**: Kombinasi `bg-neutral-50` dan `bg-white` pada wrapper sections.
- **Common Region**: Pembuatan atomic komponen `<Card />` dengan border, bg, dan padding bawaan.

---

## 7. Performance Optimization

Untuk mencapai target Lighthouse Score ≥ 90, strategi berikut diimplementasikan:

1. **Asset Optimization**:
   - Semua gambar statis (Hero bg, thumbnail) akan dikonversi ke format **WebP**.
   - Menggunakan atribut `loading="lazy"` pada gambar di bawah lipatan (below-the-fold) seperti *Case Studies* dan *Insights*.
2. **Code Splitting**:
   - Jika bundle dirasa terlalu besar karena Framer Motion, implementasikan fitur `LazyMotion` dari Framer Motion untuk mengurangi ukuran bundle inisial.
3. **Font Loading**:
   - Menggunakan `preconnect` ke Google Fonts.
   - Menambahkan parameter `&display=swap` untuk memastikan teks langsung terlihat (mencegah FOIT - Flash of Invisible Text).
4. **Tree Shaking**:
   - Vite secara otomatis melakukan dead-code elimination pada modul ES (seperti mengimpor icon secara spesifik dari `lucide-react`).

---

## 8. Deployment & Infrastructure

### 8.1 Hosting (Vercel)
Aplikasi di-deploy ke **Vercel** yang dirancang optimal untuk framework Vite/React.
- **Edge Network**: Konten statis (HTML/JS/CSS/Image) di-cache secara global di CDN Vercel.
- **HTTPS**: Diberikan secara otomatis dengan sertifikat SSL.

### 8.2 Environment Variables
Variabel yang bergantung pada environment (meskipun untuk landing page biasanya minim) seperti URL backend analitik (jika ada) akan disimpan dengan awalan `VITE_` dalam file `.env`.

---

## 9. Development Workflow & Tooling

### 9.1 Branching Strategy
- `main`: Branch produksi, auto-deploy ke Vercel production URL.
- `feat/*`, `fix/*`: Branch fitur/perbaikan untuk PR sebelum di-merge ke `main`.

### 9.2 CI/CD Automation (Vercel Built-in)
- Vercel akan otomatis melakukan build `npm run build` setiap ada push ke branch `main`.
- Vercel men-generate **Preview Deployments** (URL sementara) untuk setiap Pull Request untuk review hasil visual sebelum merge.

### 9.3 Code Quality Enforcement
- **Husky & Lint-Staged**: Di-setup untuk menjalankan ESLint & Prettier secara otomatis saat git commit (Pre-commit Hook). Ini menjamin kode yang tidak sesuai standar (error TypeScript/Lint) tidak bisa masuk ke repository.

---

*Technical Architecture Document ini menjadi pedoman utama tim developer selama fase eksekusi membangun landing page INQUIVIX menggunakan ekosistem React.js.*
