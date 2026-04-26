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

---

## 7. Detailed Library Features & Modules
To ensure we do not duplicate efforts, here is the detailed breakdown of the groups and classes we have already built inside our libraries.

### 🎨 SAT CSS Framework (Class Groups)
We have built over 800+ utility classes organized into the following distinct categories:
- **Variables (`variables.css`):** Core design tokens, color palettes (gray, primary, success, danger, warning, info), spacing scales, and shadows.
- **Reset (`reset.css`):** Browser normalization and default tag styling.
- **Colors (`colors.css`):** Backgrounds (`sat-bg-*`), Text (`sat-text-*`), and Borders (`sat-border-*`).
- **Spacing (`spacing.css`):** Padding (`sat-p-*`, `sat-px-*`, etc.) and Margins (`sat-m-*`, `sat-mt-*`, etc.).
- **Typography (`typography.css`):** Font families, sizes (`sat-text-sm`, `sat-text-4xl`), weights (`sat-font-bold`), alignment, and decorations.
- **Layout (`layout.css`):** Display (`sat-block`, `sat-hidden`), Flexbox (`sat-flex`, `sat-justify-center`), Grid (`sat-grid-cols-3`), and Overflow.
- **Sizing (`sizing.css`):** Width (`sat-w-*`), Height (`sat-h-*`), and Max/Min utilities.
- **Borders & Shadows (`borders.css`):** Border radius (`sat-rounded-*`), border width, styles, and Box shadows (`sat-shadow-*`).
- **Effects (`effects.css`):** Opacity (`sat-opacity-*`), Outlines, and Cursor styles.
- **Positioning (`positioning.css`):** Static, absolute, relative, sticky, Inset (`sat-top-*`, `sat-inset-0`), and Z-Index (`sat-z-*`).
- **Components (`components.css`):** Pre-built classes for Buttons (`sat-btn`, `sat-btn-primary`), Form Inputs (`sat-input`), Cards (`sat-card`), and Badges (`sat-badge`).
- **Utilities (`utilities.css`):** Screen reader (`sat-sr-only`), user-select, visibility, and basic transitions (`sat-transition-*`).
- **Animations (`animations.css`):** Spin, ping, pulse, and bounce (`sat-animate-*`).
- **RTL (`rtl.css`):** Logical properties specifically for Urdu, Arabic, and Persian (`sat-ms-*`, `sat-pe-*`).
- **Print (`print.css`):** Optimized styles for physical printing.

### ⚙️ SAT JS Library (Module Categories)
We have built a completely vanilla, modular JavaScript utility framework accessible via the global `SAT` object. It includes:
- **DOM (`SAT.dom`):** Selection (`$`, `$$`), Class manipulation (`addClass`, `removeClass`, `toggleClass`).
- **Selectors (`SAT.selectors`):** Advanced DOM traversal (`siblings`, `closest`).
- **Events (`SAT.events`):** Listening and dispatching (`on`, `off`, `trigger`).
- **AJAX (`SAT.ajax`):** Fetch wrappers for API calls (`get`, `post`).
- **Storage (`SAT.storage`):** Automatic JSON parsing for `local` and `session` storage.
- **Cookies (`SAT.cookies`):** Easy management (`setCookie`, `getCookie`, `removeCookie`).
- **URL (`SAT.url`):** Query parameter parsing (`getQueryParam`, `getAllQueryParams`).
- **String (`SAT.string`):** Formatting (`capitalize`, `toTitleCase`, `slugify`).
- **Number (`SAT.number`):** Currency formatting (`formatCurrency`) and randomization (`random`).
- **Array (`SAT.array`):** Data manipulation (`unique`, `shuffle`, `chunk`).
- **Object (`SAT.object`):** Cloning and checking (`deepClone`, `isEmptyObject`).
- **Date (`SAT.date`):** Formatting and comparisons (`format`, `isPast`).
- **Validation (`SAT.validation`):** Form and data checks (`isEmail`, `isURL`, `isEmpty`).
- **Animation (`SAT.animation`):** Smooth vanilla JS transitions (`fadeIn`, `fadeOut`).
- **Utilities (`SAT.utilities`):** Common helpers (`isObject`, `debounce`, `uuid`).
- **i18n (`SAT.i18n`):** Direction flipping (`setRTL`, `setLTR`).
- **Polyfills (`initPolyfills`):** Fallbacks for older browsers.
