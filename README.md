# RemoteRecruit – Features Page

A pixel-perfect recreation of the RemoteRecruit Features page built with modern frontend technologies and best practices.

![RemoteRecruit](https://img.shields.io/badge/RemoteRecruit-Features-blue)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)

## 🚀 Live Demo

[View Live Site →](https://remoterecruit-eight.vercel.app)

## � Deliverables

1. **GitHub Repository** - [remoterecruit](https://github.com/your-username/remoterecruit)
2. **Live Deployment** - [https://remoterecruit-eight.vercel.app](https://remoterecruit-eight.vercel.app)
3. **Project Documentation** - This README includes project overview, tech stack, setup instructions, and design decisions

## �📋 Project Overview

This project recreates the RemoteRecruit Features page from the provided Figma design, implementing:

- **Pixel-perfect design fidelity** matching the Figma layout, spacing, and colors
- **Fully responsive** layout across desktop, tablet, and mobile breakpoints
- **Smooth scroll-reveal animations** for each section using Framer Motion
- **Interactive components** including FAQ accordion and scroll-to-top button
- **Optimized performance** with lazy-loaded images and semantic HTML5
- **Accessibility-first** architecture targeting Lighthouse score ≥ 90

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev) | 19 | UI Component Library |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Utility-First CSS Framework |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animation Library |
| [Vite](https://vite.dev) | 8.x | Build Tool & Dev Server |

## 📁 Project Structure

```
src/
├── components/
│   ├── common/
│   │   └── AnimatedSection.jsx    # Reusable scroll-reveal wrapper
│   ├── layout/
│   │   ├── Navbar.jsx             # Fixed navbar with scroll transition
│   │   └── Footer.jsx            # Footer with social links
│   ├── sections/
│   │   ├── Hero.jsx               # Gradient hero banner
│   │   ├── GlobalJobBoard.jsx     # "First Fully Global Job Board" section
│   │   ├── FeeFreeForever.jsx     # "Fee-Free Forever" section
│   │   ├── ShowcaseTalents.jsx    # "Showcase Your Talents" section
│   │   ├── HelpClicksAway.jsx    # CTA section
│   │   ├── CommonQuestions.jsx    # FAQ accordion
│   │   └── Pricing.jsx           # Free vs Premium pricing cards
│   └── ui/
│       ├── Button.jsx             # Multi-variant button component
│       ├── SectionBadge.jsx       # Colored pill badge
│       └── ScrollToTop.jsx        # Floating scroll-to-top button
├── assets/
│   ├── icons/                     # SVG icons and logos
│   └── images/                    # Screenshot assets (1x and 2x)
├── data/
│   └── mockData.js                # FAQ and pricing mock data
├── App.jsx                        # Main page layout
├── index.css                      # Tailwind config & global styles
└── main.jsx                       # Entry point
```

## ⚡ Getting Started

### Prerequisites

- **Node.js** 18+ and **npm** 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/remoterecruit.git
cd remoterecruit

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

## 🎨 Design Decisions

- **Inline SVGs** for icons and background to eliminate HTTP requests and enable CSS theming
- **Framer Motion `useInView`** for performant scroll-triggered animations (fires once per element)
- **CSS-based Tailwind v4 configuration** using `@theme` directive for design tokens
- **Mobile-first responsive** classes throughout all components
- **Semantic HTML5** elements (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`) with proper ARIA attributes

## ♿ Accessibility

- Skip-to-content link for keyboard navigation
- All interactive elements have focus indicators
- FAQ accordion uses proper `aria-expanded` and `aria-controls`
- All images include descriptive `alt` text
- Color contrast ratios meet WCAG 2.1 AA standards

## ⚠️ Known Issues / Limitations

- The Figma design was view-only; some spacing values are approximated from the screenshots
- Social media links in the footer are placeholder `#` hrefs
- "Sign In", "Sign Up", and "Get Started" buttons are non-functional (static page)
- FAQ answers use placeholder/lorem text as specified in the design

## 📄 License

This project was created as part of a technical assessment for RemoteRecruit.
