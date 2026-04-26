# Shoaib Aftab Tech (SAT) - Master Ecosystem Pattern & Report

This document serves as the **Master Reference Guide** for the entire Shoaib Aftab Tech (SAT) ecosystem. It documents the exact sequence, standards, patterns, and architectural choices used to build our internal libraries (CSS, JS) and websites.

**Purpose:** Whenever we create a new framework, UI Kit, admin panel, icon set, or any other digital product, we MUST follow these established patterns to ensure consistency, professionalism, and a unified ecosystem.

---

## 1. Global Standards & Naming Conventions
- **Language Requirements:** All code, comments, class names, variables, API definitions, documentation (Docs), and standard files MUST be written **100% in English**. (Communication with the AI agent may occur in Urdu, but the output artifact must be strictly English).
- **Prefix:** All custom variables, classes, and globally exposed entities must use the `sat-` prefix (e.g., `.sat-bg-black`, `SAT.dom.$()`).
- **Global Object:** JavaScript frameworks should expose a single global object named `SAT`.
- **Framework Names:** Full names should use the brand name (e.g., "Shoaib Aftab Tech CSS", "Shoaib Aftab Tech JS") while the abbreviation (SAT CSS, SAT JS) is used contextually.

---

## 2. Directory Structure Pattern
Every new library or tool should follow this standardized structure:

```text
project-name/
├── package.json              # NPM Configuration
├── .gitignore                # Ignoring dist/, node_modules/
├── README.md                 # Project specific README (See exact text pattern below)
├── LICENSE                   # MIT License
├── CONTRIBUTING.md           # OSS Standard
├── CODE_OF_CONDUCT.md        # OSS Standard
├── SECURITY.md               # OSS Standard
├── PRIVACY_POLICY.md         # OSS Standard
├── TERMS_AND_CONDITIONS.md   # OSS Standard
├── src/                      # Source code
│   ├── index.js / main.js    # Entry point
│   └── modules/              # Categorized, modular files (e.g., dom.js, layout.css)
├── dist/                     # Compiled/Minified outputs (e.g., sat.min.js, sat.min.css)
├── scripts/                  # Build scripts (e.g., build.js)
├── docs/                     # Comprehensive documentation (Markdown + Code Snippets + HTML Previews)
└── examples/                 # Real-world HTML/JS implementations
```

---

## 3. Required "About Us" Section in README
Every `README.md` file across all our projects MUST contain this exact branding section. It strictly avoids marketing jargon and focuses purely on Software/API development:

```markdown
## About Shoaib Aftab Tech
💻 **Specializing in Custom Development:** We build future-proof software, intuitive mobile apps, professional websites, scalable e-commerce platforms, and API development (WhatsApp Business API).
🔧 **Your End-to-End Partner:** From initial concept to successful scaling, we provide complete digital solutions for your business.
🤝 **Ready to Build & Grow?** Let's connect to discuss your project and strategic goals.

Visit us at: [shoaibaftab.com](https://shoaibaftab.com)
Facebook: [Shoaib Aftab Tech](https://facebook.com/ShoaibAftabTech)
```

---

## 4. Build Systems & Minification
- Avoid heavy external dependencies whenever possible (Zero dependency philosophy).
- We write custom Node.js scripts in `scripts/build.js` using lightweight compilers.
- **CSS:** Use `clean-css` to concatenate and minify `src/modules/*.css` into `dist/sat-css.min.css`.
- **JS:** Use `terser` to compile `src/modules/*.js` into an IIFE/UMD bundle at `dist/sat-js.min.js`.
- **Websites:** Use **Vite** coupled with `vite-plugin-pwa` for blazing-fast development and Progressive Web App (PWA) generation.

---

## 5. UI/UX & Web Development Standards
When building websites, UI Kits, or Admin Panels:
1. **PWA Integration:** All web applications must be configured as Progressive Web Apps (installable via browser).
2. **Responsiveness:** All layouts must be mobile-first and responsive across all devices using SAT CSS layout utilities.
3. **Styling:** Rely exclusively on the **SAT CSS** framework. Avoid writing custom CSS unless absolutely necessary (e.g., infinite marquee animations).
4. **Interactions:** Rely exclusively on the **SAT JS** library for DOM manipulation, AJAX, validation, and local storage. No jQuery.
5. **WhatsApp Float:** Include a sticky, floating WhatsApp button at the bottom right corner for immediate client contact.

---

## 6. How to Use This Report for Future Projects
When instructing AI or a developer to create a new component (e.g., **SAT Admin Panel** or **SAT UI Kit**):
1. **Provide this file (`all-report.md`)** as the initial context.
2. Tell the agent: *"Follow the ecosystem standards defined in `all-report.md` to build the new project."*
3. **Update this file:** Once the new project is successfully completed, append a brief summary of its specific architecture and modules to this document so the ecosystem map grows over time.

### Current Ecosystem Map:
- **SAT CSS (`/src`, `/dist`):** Variables, Reset, Colors, Spacing, Typography, Layout, Sizing, Borders, Effects, Positioning, Components, Utilities, Animations, RTL, Print.
- **SAT JS (`/js-library`):** Core, DOM, Events, AJAX, Selectors, Storage, Cookies, URL, String, Number, Array, Object, Date, Validation, Animation, Utilities, i18n, Polyfills.
- **SAT Website (`/website-updated`):** Vite, PWA, Hero, Services, Products, Live JS Demo, Infinite Client Marquee, Contact Footer.
