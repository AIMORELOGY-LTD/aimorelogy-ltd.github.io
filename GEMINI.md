# GEMINI.md - Project Context & Instructions

This project, **AIMORELOGY**, is a professional enterprise website focused on AI tracking algorithms, DShot control protocols, and industrial AI solutions (featuring SOPHGO and Espressif hardware). It is built with a modern React stack and follows a specific "Enterprise Industrial" design aesthetic.

## Project Overview

- **Type:** React Web Application (SPA)
- **Framework:** React 19 + Vite + TypeScript
- **Primary Purpose:** Marketing and product showcase for UAV (Unmanned Aerial Vehicle) and Edge AI technologies.
- **Core Features:**
    - **Multilingual Support:** English (default), Chinese, and Russian using a custom `LanguageProvider` and `i18n.tsx`.
    - **Dynamic Routing:** Product details for SOPHGO and Espressif models are generated dynamically from data files.
    - **Industrial Design:** NVIDIA-inspired aesthetic with deep purple and tech green accents.
    - **CI/CD:** Automated deployment to GitHub Pages via GitHub Actions.

## Building and Running

- **Install Dependencies:**
  ```bash
  npm install
  ```
- **Development Server:**
  ```bash
  npm run dev
  ```
- **Production Build:**
  ```bash
  npm run build
  ```
- **Preview Production Build:**
  ```bash
  npm run preview
  ```

## Technical Architecture & Conventions

### 1. Localization (i18n)
- The application uses a custom `LanguageProvider` (see `i18n.tsx`).
- Routes are prefixed with the language code (e.g., `/zh/`, `/ru/`), except for English which resides at the root `/`.
- **Context Hook:** Use `const { t, lang, buildPath } = useI18n();` to access translations and build language-aware paths.

### 2. Routing
- **Library:** `react-router-dom` using `HashRouter`.
- **Dynamic Routes:**
    - `/products/sophgo/:modelId`
    - `/products/espressif/:modelId`
- **Route Definitions:** Managed in `App.tsx` and types defined in `types.ts` (`RoutePath` enum).

### 3. Styling & Design (See `DESIGN_STYLE_GUIDE.md`)
- **Aesthetic:** "Enterprise Industrial" — clean, sharp corners, professional.
- **Primary Colors:**
    - Deep Purple: `#4f4398` (Buttons, accents)
    - Tech Green: `#76b900` (Nav borders, highlights)
- **Typography:** Roboto or Montserrat (Sans-serif), uppercase bold headings.
- **Layout:** Tailwind CSS for grid and spacing. Standard container max-width: `1200px`.

### 4. Data Management
- Product data is stored in `data/espressifData.ts` and `data/sophgoData.ts`.
- Components like `ProductDetail_SOPHGO.tsx` fetch data based on the `:modelId` parameter.

### 5. Development Guidelines
- **Path Aliases:** Use `@/` to refer to the project root (as configured in `tsconfig.json`).
- **Component Structure:** 
    - Shared UI components go in `components/`.
    - Page-level components go in `pages/`.
- **Types:** Always use the interfaces defined in `types.ts` for Products, BlogPosts, and Routes.
- **Images:** Assets should be placed in `public/` and referenced using absolute paths (e.g., `/logo.webp`).

## Key Files to Reference

- `App.tsx`: Routing and language-specific route rendering.
- `i18n.tsx`: Localization logic and translation strings.
- `types.ts`: Centralized TypeScript interfaces and Route enums.
- `DESIGN_STYLE_GUIDE.md`: Visual and UI/UX requirements.
- `package.json`: Dependency list and scripts.
