> **About this document:** This is the showcase / vision README for The Chronophage Reader, written with Gemini (Nov 18, 2026) as part of The Front-End Blueprint newsletter work. It describes the Reader as an interactive manuscript and lore workspace. Most of what it describes — split-view editing, Supabase sync, the `src/api` layout — is not in this repo yet; the live site (12 chapters, Stripe, newsletter, Render) is described in `README.md`. The Split-Pane Lore & Manuscript Cross-Linker built Nov 27, 2026 is the first piece of this vision, in progress locally.

# ⏳ The Chronophage Reader

> An interactive digital manuscript dashboard and reading platform engineered for high-density narrative management, timeline tracking, and complex world-building.

![React](https://img.shields.io/badge/React-18.x-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-Fast-yellow?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-336791?style=flat-square&logo=tailwindcss)
![Zustand](https://img.shields.io/badge/State-Zustand-orange?style=flat-square)

---

## ✨ Overview

**The Chronophage Reader** bridges front-end web architecture with creative literary workflows. Designed for authors and world-builders managing multi-threaded storylines, it provides a lightning-fast, distraction-free environment for manuscript drafting, character tracking, and interactive lore navigation.

---

## 🛠️ Tech Stack

* **Core Framework:** React (18+) with Vite for instant HMR and optimized production builds.
* **Styling & Theme:** Tailwind CSS featuring a custom high-contrast "Neon Noir" dark mode palette with mechanical horological UI elements.
* **State Management:** Zustand for lightweight, atomic, provider-free client state handling across navigation, active modals, and document views.
* **Data Layer:** Local and sync-ready data schemas designed for seamless integration with Supabase/PostgreSQL backends.

---

## 🚀 Key Features

* **Interactive Manuscript Dashboard:** Split-view document editing with structural outlining and real-time word counting.
* **Lore & Timeline Tracking:** Dynamic state machines mapping character arcs, world locations, and historical events across complex speculative fiction timelines.
* **Zero-Overhead State Architecture:** Leverages granular Zustand selectors to eliminate unnecessary component re-renders during high-frequency text updates.
* **Immersive UI/UX:** Custom mechanical-themed design tokens, sleek typography, and responsive layouts tailored for extended writing sessions.

---

## 📂 Project Structure

```text
src/
├── api/            # Data fetching and Supabase client hooks
├── components/     # Modular UI components (Compound pattern)
│   ├── dashboard/  # Manuscript overview & stats
│   ├── reader/     # Text rendering & annotation tools
│   └── timeline/   # Interactive world-building timeline
├── store/          # Zustand atomic state stores
├── styles/         # Tailwind CSS custom themes & animations
└── App.tsx         # Root application layout
```

## 🏁 Getting Started

### Prerequisites

Make sure you have Node.js (v18+) and npm/pnpm installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Catmomof2/chronophage-lament.git
cd chronophage-lament
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open in your browser: Navigate to http://localhost:5173 to view the application.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
