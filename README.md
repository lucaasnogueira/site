<div align="center">

# &lt;Luc4s/&gt; — Fullstack Developer Portfolio

**A high-performance, multilingual personal portfolio built with React, TypeScript, and Vite.**

[![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![i18next](https://img.shields.io/badge/i18next-multilingual-26a69a?style=for-the-badge&logo=i18next&logoColor=white)](https://www.i18next.com/)

[🌐 Live Demo](#) · [📬 Contact](mailto:lucassampaiodeveloper@gmail.com)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Internationalization](#internationalization)
- [Sections](#sections)
- [License](#license)

---

## Overview

This repository contains the source code of my personal portfolio — a production-grade single-page application that showcases my professional background, technical skills, featured projects, and professional experience as a Fullstack Developer.

The portfolio was designed with a strong emphasis on **developer experience**, **performance**, and **accessibility**, featuring a clean, modern UI built entirely with component-driven architecture.

---

## Features

- ⚡ **Blazing Fast** — Powered by Vite 6 with optimized build pipeline and instant HMR
- 🌐 **Multilingual** — Full i18n support for 🇧🇷 Portuguese, 🇺🇸 English, and 🇪🇸 Spanish via `react-i18next`
- 🎨 **Modern Design** — Built with Tailwind CSS 4, Radix UI primitives, and Framer Motion animations
- 🧩 **Component-Driven** — Modular architecture using shadcn/ui patterns and Radix UI headless components
- 📱 **Fully Responsive** — Mobile-first layout that adapts seamlessly across all screen sizes
- ♿ **Accessible** — Semantic HTML and Radix UI's WAI-ARIA compliant components
- 🔒 **Type-Safe** — Strictly typed with TypeScript throughout the entire codebase

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | React | 18.3 |
| **Language** | TypeScript | 5.x |
| **Bundler** | Vite | 6.3 |
| **Styling** | Tailwind CSS | 4.x |
| **UI Primitives** | Radix UI | Latest |
| **Icons** | Lucide React | 0.487 |
| **Animations** | Motion (Framer) | 12.x |
| **Internationalization** | i18next + react-i18next | 25.x / 16.x |
| **Routing** | React Router | 7.13 |
| **Forms** | React Hook Form | 7.55 |
| **Charts** | Recharts | 2.15 |
| **Date Utilities** | date-fns | 3.6 |
| **Notifications** | Sonner | 2.0 |

---

## Project Structure

```
Fullstack Developer Portfolio/
├── public/                     # Static assets (favicon, etc.)
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Hero.tsx        # Landing / hero section
│   │   │   ├── About.tsx       # About me section
│   │   │   ├── Stack.tsx       # Skills & technologies section
│   │   │   ├── Projects.tsx    # Featured projects section
│   │   │   ├── Experience.tsx  # Professional experience section
│   │   │   ├── Contact.tsx     # Contact form & info section
│   │   │   ├── Footer.tsx      # Site footer
│   │   │   ├── Navigation.tsx  # Top navigation bar with language switcher
│   │   │   └── ui/             # Shared UI primitives (shadcn/ui)
│   │   └── App.tsx             # Root application component
│   ├── styles/                 # Global styles
│   ├── i18n.ts                 # Internationalization configuration
│   └── main.tsx                # Application entry point
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
├── postcss.config.mjs          # PostCSS configuration
└── package.json                # Dependencies and scripts
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) ≥ 18.x
- [npm](https://www.npmjs.com/) ≥ 9.x (or [pnpm](https://pnpm.io/))

### Installation

**1. Clone the repository:**

```bash
git clone https://github.com/your-username/fullstack-developer-portfolio.git
cd fullstack-developer-portfolio
```

**2. Install dependencies:**

```bash
npm install
# or using pnpm
pnpm install
```

**3. Start the development server:**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server with HMR |
| `npm run build` | Compiles and bundles the app for production into `dist/` |

---

## Internationalization

The portfolio fully supports three languages, configurable from the navigation bar:

| Language | Locale Key | Status |
|---|---|---|
| 🇧🇷 Portuguese (Brazil) | `pt-BR` | ✅ Default |
| 🇺🇸 English | `en` | ✅ Available |
| 🇪🇸 Spanish | `es` | ✅ Available |

All translations are centralized in [`src/i18n.ts`](./src/i18n.ts). To add a new language, extend the `resources` object with a new locale key and provide the full translation map.

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Introduction with availability badge and primary call-to-actions |
| **About** | Professional background with highlighted stats (4+ years, 10+ projects) |
| **Stack** | Categorized technical skills: Frontend, Backend, Database, Infrastructure, Architecture, Performance, Security, and Mobile |
| **Projects** | Featured case studies with problem, solution, challenges, and measurable results |
| **Experience** | Professional timeline including current role at Aurora da Amazônia and freelance history |
| **Contact** | Direct contact channels with guaranteed 24h response commitment |
| **Footer** | Site navigation links and social media connections |

---

## License

This project is **not open source**. All design, code, and content are the intellectual property of Lucas Silva. Unauthorized reproduction or redistribution is prohibited.

---

<div align="center">

Made with ❤️ and lots of energy drinks by **Lucas Silva**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](#)

</div>