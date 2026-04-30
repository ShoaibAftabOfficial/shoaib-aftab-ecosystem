# Shoaib Aftab Tech (SAT) - Master Ecosystem Pattern & Report

This document serves as the **Master Reference Guide** for the entire Shoaib Aftab Tech (SAT) ecosystem. It documents the exact sequence, standards, patterns, and architectural choices used to build our internal libraries (CSS, JS, Icons) and future digital products.

**Purpose:** Whenever we create a new framework, UI Kit, admin panel, icon set, or any other digital product, we MUST follow these established patterns to ensure consistency, professionalism, and a unified ecosystem.

---

## 1. Global Standards & Naming Conventions
- **Language Requirements:** All code, comments, class names, variables, API definitions, documentation (Docs), and standard files MUST be written **100% in English**. (Communication with the AI agent may occur in Urdu, but the output artifact must be strictly English).
- **Prefix:** All custom variables, classes, and globally exposed entities must use the `sa-` prefix (e.g., `.sa-bg-black`, `SA.dom.$()`). Icon classes specifically use `sa-i-` (e.g., `.sa-i-home`).
- **Global Object:** JavaScript frameworks should expose a single global object named `SA`.
- **Framework Names:** Full names should use the brand name (e.g., "Shoaib Aftab CSS Framework", "Shoaib Aftab JS Framework", "Shoaib Aftab Icon Library") while the abbreviation (Shoaib Aftab CSS, Shoaib Aftab JS) is used contextually.
- **Zero Dependencies:** A strict rule across the ecosystem. No Bootstrap, no Tailwind, no jQuery, no external icon font files. Everything must be purely standard W3C CSS/SVG and ECMAScript.

---

## 2. Directory Structure Pattern
Every new library or tool must follow this standardized repository structure:

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
│   ├── index.js / *.css      # Entry point
│   └── modules/              # Categorized, modular files (e.g., dom.js, layout.css)
├── dist/                     # Compiled/Minified outputs generated ONLY via build script
├── scripts/                  # Build scripts (e.g., build.js)
└── docs/                     # Comprehensive documentation (Markdown + Code Snippets)
```

---

## 3. Required "About Us" Section in README
Every `README.md` file across all our projects MUST contain this exact branding section. It strictly avoids marketing jargon and focuses purely on Software/API development:

```markdown
## About Shoaib Aftab Tech
We specialize in Custom Development, Software Engineering, and API Development (specifically WhatsApp Business API).
```

*(No external logos or images unless explicitly provided or permitted. No marketing fluff.)*

---

## 4. Build Systems & Minification
- Avoid heavy external dependencies whenever possible (Zero dependency philosophy).
- We write custom Node.js scripts in `scripts/build.js` using lightweight compilers.
- **CSS:** Use `clean-css` to concatenate and minify `src/modules/*.css` into `dist/shoaib-aftab.min.css`.
- **JS:** Use `terser` to compile and minify `src/index.js` (or equivalent) into `dist/shoaib-aftab.min.js`. The build script must properly resolve internal modules if they exist, or bundle a pre-combined entry point.
- **Icons:** Scripts fetch/generate SVG code and compile directly into CSS background images inside `dist/sa-icons.min.css`.
- **Note:** The `dist/` directory should *never* exist in the repository naturally; it must only be created when `npm run build` is executed.

---

## 5. How to Use This Report for Future Projects
When instructing AI or a developer to create a new component (e.g., **SA Admin Panel** or **SA UI Kit**):
1. **Provide this file (`all-report.md`)** as the initial context.
2. Tell the agent: *"Follow the ecosystem standards defined in `all-report.md` to build the new project."*
3. **Update this file:** Once the new project is successfully completed, append a brief summary of its specific architecture and modules to this document so the ecosystem map grows over time.

---

## 6. Detailed Library Features & Modules (Current Ecosystem Map)

### 🎨 Shoaib Aftab CSS Framework
A complete, lightweight utility-first CSS framework (400+ classes).
- **Core Principles:** Zero dependencies. Pure W3C CSS. RTL native support. Dark mode built-in via `prefers-color-scheme`.
- **Architecture (`src/modules/`):**
  - `variables.css`: Design tokens, `--sa-` properties, spacing scales, shadows, and the brand color palettes (primary, secondary, success, danger, warning, info, gray).
  - `reset.css`: Cross-browser normalization.
  - `colors.css`: `.sa-bg-*`, `.sa-text-*`
  - `spacing.css`: `.sa-p-*`, `.sa-m-*`, and logical variations (`-s`, `-e`).
  - `typography.css`: Font sizes, weights, and alignment.
  - `layout.css`: Flexbox, Grid, Display properties.
  - `sizing.css`: Width, height, max/min.
  - `borders.css`: Border styles and radius.
  - `effects.css`: Opacity, cursors.
  - `positioning.css`: Absolute, relative, sticky, z-index.
  - `components.css`: Buttons (`.sa-btn`), Form inputs, Cards, Alerts, Badges, Tables, Modals.
  - `utilities.css`: Screen-reader only (`.sa-sr-only`), object-fit.
  - `animations.css`: Spin, pulse, bounce.
  - `rtl.css`: Special handling for RTL directionality.
  - `print.css`: Print media optimizations.

### ⚙️ Shoaib Aftab JS Framework
A vanilla, modular JavaScript utility framework accessible via the global `SA` object (150+ functions).
- **Core Principles:** Zero dependencies. No jQuery. Pure ECMAScript specifications.
- **Architecture (`src/modules/`):**
  - **DOM (`SA.dom`):** `select`, `create`, `addClass`, `html`, etc.
  - **Events (`SA.events`):** `on`, `off`, `delegate`, `ready`.
  - **AJAX (`SA.ajax`):** `get`, `post`, `getJSON`, using modern Promises/Fetch.
  - **Storage (`SA.storage`):** `set`, `get`, `clear` (with automatic JSON parsing).
  - **Cookies (`SA.cookies`):** Management utilities.
  - **URL (`SA.url`):** `parse`, `getParam`.
  - **String (`SA.string`):** `slugify`, `toCamelCase`, `capitalize`.
  - **Number (`SA.number`):** `format`, `random`.
  - **Array (`SA.array`):** `unique`, `shuffle`, `chunk`.
  - **Object (`SA.object`):** `clone`, `merge`, `get`.
  - **Date (`SA.date`):** `format`, `diff`.
  - **Validation (`SA.validate`):** `email`, `phone`, `password`, `required`.
  - **Utilities (`SA.utils`):** `debounce`, `throttle`, `uuid`.
  - **i18n (`SA.i18n`):** `setLang`, `isRTL`.

### 🖼️ Shoaib Aftab Icon Library
A comprehensive standalone Icon Library featuring over 500 SVG icons.
- **Core Principles:** Zero runtime dependencies. SVGs are compiled directly into the CSS file via `data:image/svg+xml` encoding to ensure no external network requests or font file loading.
- **Naming Convention:** All icons use the `.sa-i-*` prefix.
- **Standard Icons Variants (8 total per icon):**
  - Styles: Outline, Solid, Two-Tone, Color (`.sa-i-outline`, `.sa-i-solid`, etc.)
  - Shapes: Round, Square background formats (`.sa-i-round`, `.sa-i-square`)
- **Brand Icons Variants (4 total per icon):**
  - Real, true-color brand logos fetched from original SVG sources (Wikipedia, etc.).
  - Styles: Original Color, Black & White (`.sa-i-original`, `.sa-i-bw`)
  - Shapes: Round, Square backgrounds (`.sa-i-round`, `.sa-i-square`)
- **RTL Support:** Automated CSS transforms to flip directional icons (like arrows) when `[dir="rtl"]` is active.
- **Sizing:** Managed via standard CSS classes (`.sa-i-sm`, `.sa-i-md`, `.sa-i-lg`, `.sa-i-xl`).
