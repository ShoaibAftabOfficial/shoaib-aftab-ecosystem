# Shoaib Aftab Tech (SAT) - Master Ecosystem Pattern & Report

This document serves as the **Master Reference Guide** for the entire Shoaib Aftab Tech (SAT) ecosystem. It documents the exact sequence, standards, patterns, and architectural choices used to build our internal libraries (CSS, JS) and websites.

**Purpose:** Whenever we create a new framework, UI Kit, admin panel, icon set, or any other digital product, we MUST follow these established patterns to ensure consistency, professionalism, and a unified ecosystem.

---

## 1. Global Standards & Naming Conventions
- **Language Requirements:** All code, comments, class names, variables, API definitions, documentation (Docs), and standard files MUST be written **100% in English**. (Communication with the AI agent may occur in Urdu, but the output artifact must be strictly English).
- **Prefix:** All custom variables, classes, and globally exposed entities must use the `sa-` prefix (e.g., `.sa-bg-black`, `SA.dom.$()`).
- **Global Object:** JavaScript frameworks should expose a single global object named `SAT`.
- **Framework Names:** Full names should use the brand name (e.g., "Shoaib Aftab CSS", "Shoaib Aftab JS") while the abbreviation (Shoaib Aftab CSS, Shoaib Aftab JS) is used contextually.

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
├── dist/                     # Compiled/Minified outputs (e.g., shoaib-aftab.min.js, shoaib-aftab.min.css)
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
- **CSS:** Use `clean-css` to concatenate and minify `src/modules/*.css` into `dist/shoaib-aftab.min.css`.
- **JS:** Use `terser` to compile `src/modules/*.js` into an IIFE/UMD bundle at `dist/shoaib-aftab.min.js`.
- **Websites:** Use **Vite** coupled with `vite-plugin-pwa` for blazing-fast development and Progressive Web App (PWA) generation.

---

## 5. UI/UX & Web Development Standards
When building websites, UI Kits, or Admin Panels:
1. **PWA Integration:** All web applications must be configured as Progressive Web Apps (installable via browser).
2. **Responsiveness:** All layouts must be mobile-first and responsive across all devices using Shoaib Aftab CSS layout utilities.
3. **Styling:** Rely exclusively on the **Shoaib Aftab CSS** framework. Avoid writing custom CSS unless absolutely necessary (e.g., infinite marquee animations).
4. **Interactions:** Rely exclusively on the **Shoaib Aftab JS** library for DOM manipulation, AJAX, validation, and local storage. No jQuery.
5. **WhatsApp Float:** Include a sticky, floating WhatsApp button at the bottom right corner for immediate client contact.

---

## 6. How to Use This Report for Future Projects
When instructing AI or a developer to create a new component (e.g., **SA Admin Panel** or **SA UI Kit**):
1. **Provide this file (`all-report.md`)** as the initial context.
2. Tell the agent: *"Follow the ecosystem standards defined in `all-report.md` to build the new project."*
3. **Update this file:** Once the new project is successfully completed, append a brief summary of its specific architecture and modules to this document so the ecosystem map grows over time.

### Current Ecosystem Map:
- **Shoaib Aftab CSS (`/src`, `/dist`):** Variables, Reset, Colors, Spacing, Typography, Layout, Sizing, Borders, Effects, Positioning, Components, Utilities, Animations, RTL, Print.
- **Shoaib Aftab JS (`/js-library`):** Core, DOM, Events, AJAX, Selectors, Storage, Cookies, URL, String, Number, Array, Object, Date, Validation, Animation, Utilities, i18n, Polyfills.
- **SA Website (`/website-updated`):** Vite, PWA, Hero, Services, Products, Live JS Demo, Infinite Client Marquee, Contact Footer.

---

## 7. Detailed Library Features & Modules
To ensure we do not duplicate efforts, here is the detailed breakdown of the groups and classes we have already built inside our libraries.

### 🎨 Shoaib Aftab CSS Framework (Class Groups)
We have built over 800+ utility classes organized into the following distinct categories:
- **Variables (`variables.css`):** Core design tokens, color palettes (gray, primary, success, danger, warning, info), spacing scales, and shadows.
- **Reset (`reset.css`):** Browser normalization and default tag styling.
- **Colors (`colors.css`):** Backgrounds (`sa-bg-*`), Text (`sa-text-*`), and Borders (`sa-border-*`).
- **Spacing (`spacing.css`):** Padding (`sa-p-*`, `sa-px-*`, etc.) and Margins (`sa-m-*`, `sa-mt-*`, etc.).
- **Typography (`typography.css`):** Font families, sizes (`sa-text-sm`, `sa-text-4xl`), weights (`sa-font-bold`), alignment, and decorations.
- **Layout (`layout.css`):** Display (`sa-block`, `sa-hidden`), Flexbox (`sa-flex`, `sa-justify-center`), Grid (`sa-grid-cols-3`), and Overflow.
- **Sizing (`sizing.css`):** Width (`sa-w-*`), Height (`sa-h-*`), and Max/Min utilities.
- **Borders & Shadows (`borders.css`):** Border radius (`sa-rounded-*`), border width, styles, and Box shadows (`sa-shadow-*`).
- **Effects (`effects.css`):** Opacity (`sa-opacity-*`), Outlines, and Cursor styles.
- **Positioning (`positioning.css`):** Static, absolute, relative, sticky, Inset (`sa-top-*`, `sa-inset-0`), and Z-Index (`sa-z-*`).
- **Components (`components.css`):** Pre-built classes for Buttons (`sa-btn`, `sa-btn-primary`), Form Inputs (`sa-input`), Cards (`sa-card`), and Badges (`sa-badge`).
- **Utilities (`utilities.css`):** Screen reader (`sa-sr-only`), user-select, visibility, and basic transitions (`sa-transition-*`).
- **Animations (`animations.css`):** Spin, ping, pulse, and bounce (`sa-animate-*`).
- **RTL (`rtl.css`):** Logical properties specifically for Urdu, Arabic, and Persian (`sa-ms-*`, `sa-pe-*`).
- **Print (`print.css`):** Optimized styles for physical printing.

### ⚙️ Shoaib Aftab JS Library (Module Categories)
We have built a completely vanilla, modular JavaScript utility framework accessible via the global `SAT` object. It includes:
- **DOM (`SA.dom`):** Selection (`$`, `$$`), Class manipulation (`addClass`, `removeClass`, `toggleClass`).
- **Selectors (`SA.selectors`):** Advanced DOM traversal (`siblings`, `closest`).
- **Events (`SA.events`):** Listening and dispatching (`on`, `off`, `trigger`).
- **AJAX (`SA.ajax`):** Fetch wrappers for API calls (`get`, `post`).
- **Storage (`SA.storage`):** Automatic JSON parsing for `local` and `session` storage.
- **Cookies (`SA.cookies`):** Easy management (`setCookie`, `getCookie`, `removeCookie`).
- **URL (`SA.url`):** Query parameter parsing (`getQueryParam`, `getAllQueryParams`).
- **String (`SA.string`):** Formatting (`capitalize`, `toTitleCase`, `slugify`).
- **Number (`SA.number`):** Currency formatting (`formatCurrency`) and randomization (`random`).
- **Array (`SA.array`):** Data manipulation (`unique`, `shuffle`, `chunk`).
- **Object (`SA.object`):** Cloning and checking (`deepClone`, `isEmptyObject`).
- **Date (`SA.date`):** Formatting and comparisons (`format`, `isPast`).
- **Validation (`SA.validation`):** Form and data checks (`isEmail`, `isURL`, `isEmpty`).
- **Animation (`SA.animation`):** Smooth vanilla JS transitions (`fadeIn`, `fadeOut`).
- **Utilities (`SA.utilities`):** Common helpers (`isObject`, `debounce`, `uuid`).
- **i18n (`SA.i18n`):** Direction flipping (`setRTL`, `setLTR`).
- **Polyfills (`initPolyfills`):** Fallbacks for older browsers.
