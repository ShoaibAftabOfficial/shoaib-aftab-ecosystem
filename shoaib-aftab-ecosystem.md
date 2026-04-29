# 📋 Shoaib Aftab Ecosystem - مکمل ہدایات برائے AI ایجنٹ

---

## 🎯 پروجیکٹ کا تعارف

| شے | تفصیل |
|------|--------|
| **مالک** | Shoaib Aftab Tech |
| **GitHub Organization** | `shoaib-aftab-tech` |
| **npm اسکوپ** | `@shoaib-aftab` |

---

## 📦 تین لائبریریاں

| لائبریری | npm پیکج کا نام | پریفکس |
|---------|-----------------|---------|
| **Shoaib Aftab CSS** | `@shoaib-aftab/css` | `sa-` |
| **Shoaib Aftab JS** | `@shoaib-aftab/js` | `SA.` |
| **Shoaib Aftab Icons** | `@shoaib-aftab/icons` | `sa-icon-` |

---

## 🎯 پریفکس کی تفصیل

### Shoaib Aftab CSS - تمام کلاسز:
- پریفکس: `sa-`
- فارمیٹ: `sa-{category}-{value}`
- مثالیں: `sa-btn`, `sa-flex`, `sa-card`, `sa-bg-primary-500`

### Shoaib Aftab JS - تمام فنکشنز:
- پریفکس: `SA.`
- فارمیٹ: `SA.{module}.{function}()`
- مثالیں: `SA.dom.select()`, `SA.ajax.get()`, `SA.string.toTitleCase()`

### Shoaib Aftab Icons - تمام آئیکن کلاسز:
- پریفکس: `sa-icon-`
- فارمیٹ: `sa-icon-{name}`
- مثالیں: `sa-icon-home`, `sa-icon-user`, `sa-icon-heart`

---

## 🗂️ مرحلہ 1: شعیب افتاب سی ایس ایس (Shoaib Aftab CSS)

---

### 1.1 پروجیکٹ ڈھانچہ

```
shoaib-aftab-css/
├── package.json
├── README.md
├── LICENSE
├── src/
│   ├── sa-css.css
│   └── modules/
│       ├── reset.css
│       ├── variables.css
│       ├── colors.css
│       ├── spacing.css
│       ├── typography.css
│       ├── layout.css
│       ├── sizing.css
│       ├── borders.css
│       ├── shadows.css
│       ├── effects.css
│       ├── positioning.css
│       ├── components.css
│       ├── utilities.css
│       ├── responsive.css
│       ├── animations.css
│       ├── rtl.css
│       └── print.css
├── docs/
└── examples/
```

---

### 1.2 package.json

```json
{
  "name": "@shoaib-aftab/css",
  "version": "1.0.0",
  "description": "Shoaib Aftab CSS - A utility-first CSS framework with zero dependencies, built on W3C CSS Specification",
  "main": "dist/sa-css.min.css",
  "style": "dist/sa-css.min.css",
  "files": ["dist/", "src/", "README.md", "LICENSE"],
  "scripts": {
    "build": "vite build",
    "dev": "vite"
  },
  "keywords": ["css", "framework", "utility-first", "rtl", "urdu", "shoaib-aftab"],
  "author": "Shoaib Aftab Tech",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/shoaib-aftab-tech/shoaib-aftab-css.git"
  }
}
```

---

### 1.3 ڈیزائن ٹوکنز (CSS Variables)

```css
:root {
  /* پرائمری رنگ */
  --sa-primary-50: #eff6ff;
  --sa-primary-100: #dbeafe;
  --sa-primary-200: #bfdbfe;
  --sa-primary-300: #93c5fd;
  --sa-primary-400: #60a5fa;
  --sa-primary-500: #3b82f6;
  --sa-primary-600: #2563eb;
  --sa-primary-700: #1d4ed8;
  --sa-primary-800: #1e40af;
  --sa-primary-900: #1e3a8a;
  
  /* سیکنڈری */
  --sa-secondary-500: #8b5cf6;
  --sa-secondary-600: #7c3aed;
  
  /* کامیابی */
  --sa-success-500: #10b981;
  --sa-success-600: #059669;
  
  /* خطرہ */
  --sa-danger-500: #ef4444;
  --sa-danger-600: #dc2626;
  
  /* انتباہ */
  --sa-warning-500: #f59e0b;
  
  /* معلومات */
  --sa-info-500: #0ea5e9;
  
  /* نیوٹرل */
  --sa-white: #ffffff;
  --sa-black: #000000;
  --sa-gray-50: #f9fafb;
  --sa-gray-100: #f3f4f6;
  --sa-gray-200: #e5e7eb;
  --sa-gray-300: #d1d5db;
  --sa-gray-400: #9ca3af;
  --sa-gray-500: #6b7280;
  --sa-gray-600: #4b5563;
  --sa-gray-700: #374151;
  --sa-gray-800: #1f2937;
  --sa-gray-900: #111827;
  
  /* اسپیسنگ */
  --sa-space-1: 0.25rem;
  --sa-space-2: 0.5rem;
  --sa-space-3: 0.75rem;
  --sa-space-4: 1rem;
  --sa-space-6: 1.5rem;
  --sa-space-8: 2rem;
  --sa-space-12: 3rem;
  --sa-space-16: 4rem;
  
  /* فونٹ */
  --sa-font-xs: 0.75rem;
  --sa-font-sm: 0.875rem;
  --sa-font-base: 1rem;
  --sa-font-lg: 1.125rem;
  --sa-font-xl: 1.25rem;
  --sa-font-2xl: 1.5rem;
  --sa-font-3xl: 1.875rem;
  
  /* گولائی */
  --sa-radius-sm: 0.125rem;
  --sa-radius-md: 0.375rem;
  --sa-radius-lg: 0.5rem;
  --sa-radius-xl: 0.75rem;
  --sa-radius-full: 9999px;
  
  /* شیڈو */
  --sa-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --sa-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --sa-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --sa-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

---

### 1.4 کلاسز کی مکمل فہرست - صرف W3C CSS Specification پر مبنی

#### ری سیٹ اور بنیاد:
```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: system-ui, sans-serif; line-height: 1.6; }
```

#### رنگ (Colors) - 55 کلاسز:
```css
.sa-bg-primary-50 { background-color: var(--sa-primary-50); }
.sa-bg-primary-100 { background-color: var(--sa-primary-100); }
/* ... تمام شیڈز primary, secondary, success, danger, warning, info, gray */
.sa-bg-white { background-color: var(--sa-white); }
.sa-bg-black { background-color: var(--sa-black); }
.sa-bg-transparent { background-color: transparent; }

.sa-text-primary-600 { color: var(--sa-primary-600); }
.sa-text-white { color: var(--sa-white); }
/* ... تمام ٹیکسٹ رنگ */
```

#### اسپیسنگ (Spacing) - 48 کلاسز:
```css
.sa-p-1 { padding: var(--sa-space-1); }
.sa-p-2 { padding: var(--sa-space-2); }
.sa-p-4 { padding: var(--sa-space-4); }
/* ... p, px, py, pt, pb, ps, pe سے 16 تک */
.sa-m-1 { margin: var(--sa-space-1); }
.sa-mx-auto { margin-left: auto; margin-right: auto; }
.sa-gap-2 { gap: var(--sa-space-2); }
.sa-gap-4 { gap: var(--sa-space-4); }
```

#### ٹائپوگرافی (Typography) - 40 کلاسز:
```css
.sa-text-xs { font-size: var(--sa-font-xs); }
.sa-text-sm { font-size: var(--sa-font-sm); }
.sa-text-base { font-size: var(--sa-font-base); }
.sa-text-lg { font-size: var(--sa-font-lg); }
.sa-text-xl { font-size: var(--sa-font-xl); }
.sa-text-2xl { font-size: var(--sa-font-2xl); }
.sa-text-3xl { font-size: var(--sa-font-3xl); }

.sa-font-light { font-weight: 300; }
.sa-font-normal { font-weight: 400; }
.sa-font-medium { font-weight: 500; }
.sa-font-semibold { font-weight: 600; }
.sa-font-bold { font-weight: 700; }

.sa-text-center { text-align: center; }
.sa-text-start { text-align: start; }
.sa-text-end { text-align: end; }

.sa-underline { text-decoration: underline; }
.sa-no-underline { text-decoration: none; }
.sa-uppercase { text-transform: uppercase; }
.sa-capitalize { text-transform: capitalize; }
.sa-truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
```

#### لے آؤٹ (Layout) - 55 کلاسز:
```css
.sa-block { display: block; }
.sa-inline { display: inline; }
.sa-inline-block { display: inline-block; }
.sa-flex { display: flex; }
.sa-inline-flex { display: inline-flex; }
.sa-grid { display: grid; }
.sa-hidden { display: none; }

/* Flexbox */
.sa-flex-row { flex-direction: row; }
.sa-flex-col { flex-direction: column; }
.sa-flex-wrap { flex-wrap: wrap; }
.sa-flex-1 { flex: 1 1 0%; }
.sa-items-start { align-items: flex-start; }
.sa-items-center { align-items: center; }
.sa-items-end { align-items: flex-end; }
.sa-justify-start { justify-content: flex-start; }
.sa-justify-center { justify-content: center; }
.sa-justify-end { justify-content: flex-end; }
.sa-justify-between { justify-content: space-between; }
.sa-justify-around { justify-content: space-around; }

/* Grid */
.sa-grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.sa-grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.sa-grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.sa-grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
/* ... 12 تک */
.sa-col-span-1 { grid-column: span 1 / span 1; }
.sa-col-span-2 { grid-column: span 2 / span 2; }
.sa-col-span-full { grid-column: 1 / -1; }
```

#### سائزنگ (Sizing) - 30 کلاسز:
```css
.sa-w-full { width: 100%; }
.sa-w-auto { width: auto; }
.sa-w-screen { width: 100vw; }
.sa-w-50 { width: 50%; }
.sa-h-full { height: 100%; }
.sa-h-screen { height: 100vh; }
.sa-min-h-screen { min-height: 100vh; }
.sa-max-w-lg { max-width: 32rem; }
.sa-max-w-xl { max-width: 36rem; }
/* ... xs سے 6xl تک */
```

#### بارڈرز اور گولائی (Borders) - 25 کلاسز:
```css
.sa-border { border: 1px solid var(--sa-gray-200); }
.sa-border-0 { border: 0; }
.sa-border-t { border-top: 1px solid var(--sa-gray-200); }
.sa-border-b { border-bottom: 1px solid var(--sa-gray-200); }
.sa-rounded-none { border-radius: 0; }
.sa-rounded-sm { border-radius: var(--sa-radius-sm); }
.sa-rounded-md { border-radius: var(--sa-radius-md); }
.sa-rounded-lg { border-radius: var(--sa-radius-lg); }
.sa-rounded-xl { border-radius: var(--sa-radius-xl); }
.sa-rounded-full { border-radius: var(--sa-radius-full); }
```

#### شیڈوز (Shadows) - 6 کلاسز:
```css
.sa-shadow-none { box-shadow: none; }
.sa-shadow-sm { box-shadow: var(--sa-shadow-sm); }
.sa-shadow-md { box-shadow: var(--sa-shadow-md); }
.sa-shadow-lg { box-shadow: var(--sa-shadow-lg); }
.sa-shadow-xl { box-shadow: var(--sa-shadow-xl); }
```

#### ایفیکٹس (Effects) - 20 کلاسز:
```css
.sa-opacity-0 { opacity: 0; }
.sa-opacity-50 { opacity: 0.5; }
.sa-opacity-100 { opacity: 1; }
.sa-overflow-hidden { overflow: hidden; }
.sa-overflow-auto { overflow: auto; }
.sa-overflow-scroll { overflow: scroll; }
.sa-cursor-pointer { cursor: pointer; }
.sa-cursor-not-allowed { cursor: not-allowed; }
.sa-select-none { user-select: none; }
```

#### پوزیشننگ (Positioning) - 20 کلاسز:
```css
.sa-relative { position: relative; }
.sa-absolute { position: absolute; }
.sa-fixed { position: fixed; }
.sa-sticky { position: sticky; }
.sa-top-0 { top: 0; }
.sa-bottom-0 { bottom: 0; }
.sa-start-0 { inset-inline-start: 0; }
.sa-end-0 { inset-inline-end: 0; }
.sa-inset-0 { inset: 0; }
.sa-z-10 { z-index: 10; }
.sa-z-50 { z-index: 50; }
```

#### ٹرانزیشنز (Transitions) - 8 کلاسز:
```css
.sa-transition { transition: all 0.2s ease; }
.sa-transition-colors { transition: color 0.2s, background-color 0.2s; }
.sa-duration-200 { transition-duration: 200ms; }
.sa-duration-300 { transition-duration: 300ms; }
```

#### اینیمیشنز (Animations) - 5 کلاسز:
```css
.sa-animate-spin { animation: sa-spin 1s linear infinite; }
.sa-animate-pulse { animation: sa-pulse 2s ease infinite; }
.sa-animate-bounce { animation: sa-bounce 1s infinite; }
@keyframes sa-spin { to { transform: rotate(360deg); } }
@keyframes sa-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
@keyframes sa-bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-25%); } }
```

#### کمپوننٹس (Components) - 80 کلاسز:

**بٹنز:**
```css
.sa-btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.5rem 1rem; border: none; border-radius: var(--sa-radius-lg); font-weight: 600; cursor: pointer; transition: all 0.2s; gap: 0.5rem; }
.sa-btn-primary { background: var(--sa-primary-600); color: white; }
.sa-btn-primary:hover { background: var(--sa-primary-700); }
.sa-btn-secondary { background: var(--sa-secondary-600); color: white; }
.sa-btn-success { background: var(--sa-success-600); color: white; }
.sa-btn-danger { background: var(--sa-danger-600); color: white; }
.sa-btn-outline { background: transparent; color: var(--sa-primary-600); border: 2px solid var(--sa-primary-600); }
.sa-btn-ghost { background: transparent; color: var(--sa-gray-700); }
.sa-btn-ghost:hover { background: var(--sa-gray-100); }
.sa-btn-sm { padding: 0.25rem 0.5rem; font-size: var(--sa-font-xs); }
.sa-btn-lg { padding: 0.75rem 1.5rem; font-size: var(--sa-font-lg); }
.sa-btn-block { width: 100%; }
.sa-btn:disabled { opacity: 0.5; cursor: not-allowed; }
```

**انپٹس:**
```css
.sa-input { width: 100%; padding: 0.5rem 0.75rem; border: 1px solid var(--sa-gray-300); border-radius: var(--sa-radius-lg); font-size: var(--sa-font-base); transition: all 0.2s; }
.sa-input:focus { outline: none; border-color: var(--sa-primary-500); box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1); }
.sa-input-error { border-color: var(--sa-danger-500); }
.sa-label { display: block; margin-bottom: var(--sa-space-1); font-weight: 500; color: var(--sa-gray-700); }
.sa-form-group { margin-bottom: var(--sa-space-4); }
.sa-checkbox, .sa-radio { width: 1rem; height: 1rem; accent-color: var(--sa-primary-600); }
.sa-select { width: 100%; padding: 0.5rem 0.75rem; border: 1px solid var(--sa-gray-300); border-radius: var(--sa-radius-lg); background: white; }
.sa-textarea { width: 100%; padding: 0.75rem; border: 1px solid var(--sa-gray-300); border-radius: var(--sa-radius-lg); resize: vertical; min-height: 6rem; }
```

**کارڈز:**
```css
.sa-card { background: white; border-radius: var(--sa-radius-xl); box-shadow: var(--sa-shadow-md); border: 1px solid var(--sa-gray-100); }
.sa-card-body { padding: 1.5rem; }
.sa-card-header { padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--sa-gray-100); font-weight: 600; }
.sa-card-footer { padding: 1rem 1.5rem; border-top: 1px solid var(--sa-gray-100); background: var(--sa-gray-50); }
```

**الرٹس:**
```css
.sa-alert { padding: 1rem; border-radius: var(--sa-radius-lg); border-inline-start: 4px solid; }
.sa-alert-info { background: #f0f9ff; border-color: #0ea5e9; color: #075985; }
.sa-alert-success { background: #f0fdf4; border-color: #10b981; color: #065f46; }
.sa-alert-warning { background: #fffbeb; border-color: #f59e0b; color: #92400e; }
.sa-alert-danger { background: #fef2f2; border-color: #ef4444; color: #991b1b; }
```

**بیجز:**
```css
.sa-badge { display: inline-flex; align-items: center; padding: 0.125rem 0.625rem; border-radius: var(--sa-radius-full); font-size: var(--sa-font-xs); font-weight: 600; }
.sa-badge-primary { background: var(--sa-primary-100); color: var(--sa-primary-800); }
.sa-badge-success { background: #d1fae5; color: #065f46; }
.sa-badge-danger { background: #fee2e2; color: #991b1b; }
```

**ٹیبل:**
```css
.sa-table { width: 100%; border-collapse: collapse; }
.sa-table th { padding: 0.75rem 1rem; text-align: start; font-weight: 600; background: var(--sa-gray-50); border-bottom: 2px solid var(--sa-gray-200); }
.sa-table td { padding: 0.75rem 1rem; border-bottom: 1px solid var(--sa-gray-100); }
.sa-table-striped tbody tr:nth-child(odd) { background: var(--sa-gray-50); }
.sa-table-hover tbody tr:hover { background: var(--sa-gray-100); }
```

**اسپنر اور پروگریس:**
```css
.sa-spinner { width: 1.5rem; height: 1.5rem; border: 3px solid var(--sa-gray-200); border-top-color: var(--sa-primary-600); border-radius: 50%; animation: sa-spin 0.6s linear infinite; }
.sa-progress { width: 100%; height: 0.5rem; background: var(--sa-gray-200); border-radius: var(--sa-radius-full); overflow: hidden; }
.sa-progress-bar { height: 100%; background: var(--sa-primary-600); border-radius: var(--sa-radius-full); }
```

**ماڈل:**
```css
.sa-modal-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 50; }
.sa-modal { background: white; border-radius: var(--sa-radius-xl); box-shadow: var(--sa-shadow-xl); max-width: 32rem; width: 90%; max-height: 90vh; overflow-y: auto; }
.sa-modal-header { padding: 1.25rem 1.5rem; border-bottom: 1px solid var(--sa-gray-100); font-weight: 600; }
.sa-modal-body { padding: 1.5rem; }
.sa-modal-footer { padding: 1rem 1.5rem; border-top: 1px solid var(--sa-gray-100); display: flex; justify-content: flex-end; gap: 0.5rem; }
```

**کنٹینر:**
```css
.sa-container { max-width: 1200px; margin: 0 auto; padding: 0 var(--sa-space-4); }
.sa-container-sm { max-width: 640px; }
.sa-container-lg { max-width: 1400px; }
```

**ڈیوائیڈر:**
```css
.sa-divider { border: 0; border-top: 1px solid var(--sa-gray-200); margin: 1rem 0; }
```

#### یوٹیلیٹیز (Utilities) - 20 کلاسز:
```css
.sa-sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0; }
.sa-visible { visibility: visible; }
.sa-invisible { visibility: hidden; }
.sa-list-none { list-style: none; }
.sa-list-disc { list-style: disc; }
.sa-object-cover { object-fit: cover; }
.sa-object-contain { object-fit: contain; }
.sa-align-middle { vertical-align: middle; }
```

#### ریسپانسیو (Responsive) - 30 کلاسز:
```css
@media (max-width: 640px) {
  .sa-hidden-mobile { display: none; }
  .sa-flex-col-mobile { flex-direction: column; }
  .sa-w-full-mobile { width: 100%; }
  .sa-text-center-mobile { text-align: center; }
}
@media (min-width: 1025px) {
  .sa-hidden-desktop { display: none; }
  .sa-grid-cols-3-desktop { grid-template-columns: repeat(3, 1fr); }
}
```

#### RTL سپورٹ:
```css
[dir="rtl"] .sa-icon-arrow-left { transform: scaleX(-1); }
[dir="rtl"] { direction: rtl; text-align: right; }
```

#### ڈارک موڈ:
```css
@media (prefers-color-scheme: dark) {
  .sa-dark-bg-gray-900 { background-color: var(--sa-gray-900); }
  .sa-dark-text-white { color: var(--sa-white); }
}
```

#### پرنٹ اسٹائلز:
```css
@media print {
  .sa-hidden-print { display: none; }
  .sa-shadow-none-print { box-shadow: none; }
}
```

---

## 🗂️ مرحلہ 2: شعیب افتاب جے ایس (Shoaib Aftab JS)

---

### 2.1 پروجیکٹ ڈھانچہ

```
shoaib-aftab-js/
├── package.json
├── README.md
├── LICENSE
├── src/
│   ├── sa-js.js
│   └── modules/
│       ├── core.js
│       ├── dom.js
│       ├── events.js
│       ├── ajax.js
│       ├── storage.js
│       ├── cookies.js
│       ├── url.js
│       ├── string.js
│       ├── number.js
│       ├── array.js
│       ├── object.js
│       ├── date.js
│       ├── validation.js
│       ├── animation.js
│       ├── utilities.js
│       └── i18n.js
├── docs/
└── tests/
```

---

### 2.2 package.json

```json
{
  "name": "@shoaib-aftab/js",
  "version": "1.0.0",
  "description": "Shoaib Aftab JS - A pure Vanilla JavaScript utility library with zero dependencies",
  "main": "dist/sa-js.min.js",
  "module": "src/sa-js.js",
  "files": ["dist/", "src/", "README.md", "LICENSE"],
  "scripts": {
    "build": "vite build",
    "dev": "vite",
    "test": "vitest"
  },
  "keywords": ["vanilla-js", "utility", "dom", "ajax", "validation", "shoaib-aftab"],
  "author": "Shoaib Aftab Tech",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/shoaib-aftab-tech/shoaib-aftab-js.git"
  }
}
```

---

### 2.3 گلوبل آبجیکٹ اور صفر ڈیپینڈنسز

تمام فنکشنز `SA` گلوبل آبجیکٹ کے تحت ہوں گے۔ لائبریری صرف ECMAScript Specification (W3C معیار) پر مبنی ہے - کوئی بیرونی ڈیپینڈنسی نہیں۔

---

### 2.4 فنکشنز کی مکمل فہرست

#### DOM مینیپولیشن (`SA.dom`):

```javascript
// Element سلیکشن
SA.dom.select(selector, context)       // پہلا ایلیمنٹ
SA.dom.selectAll(selector, context)    // تمام ایلیمنٹس
SA.dom.byId(id)                        // ID سے
SA.dom.byClass(className, context)     // Class سے
SA.dom.byTag(tagName, context)         // Tag سے
SA.dom.byName(name)                    // name attribute سے
SA.dom.byData(key, value)             // data-* سے
SA.dom.byAttr(attr, value)            // کسی بھی attribute سے

// Element تخلیق
SA.dom.create(tag, props, children)    // نیا ایلیمنٹ
SA.dom.createFragment(htmlString)      // Fragment

// DOM ٹریورسل
SA.dom.parent(el)
SA.dom.parents(el, selector)
SA.dom.children(el)
SA.dom.siblings(el)
SA.dom.next(el)
SA.dom.prev(el)
SA.dom.first(el)
SA.dom.last(el)
SA.dom.closest(el, selector)
SA.dom.find(el, selector)
SA.dom.matches(el, selector)

// DOM مینیپولیشن
SA.dom.append(parent, child)
SA.dom.prepend(parent, child)
SA.dom.before(el, newEl)
SA.dom.after(el, newEl)
SA.dom.remove(el)
SA.dom.empty(el)
SA.dom.replace(oldEl, newEl)
SA.dom.clone(el, deep)
SA.dom.wrap(el, wrapper)
SA.dom.unwrap(el)

// Attributes اور Properties
SA.dom.attr(el, name, value)           // set/get
SA.dom.removeAttr(el, name)
SA.dom.prop(el, name, value)           // set/get
SA.dom.data(el, key, value)            // data-*
SA.dom.val(el, value)                  // input value
SA.dom.html(el, html)                  // innerHTML
SA.dom.text(el, text)                  // textContent

// CSS اور کلاسز
SA.dom.css(el, prop, value)            // set/get
SA.dom.addClass(el, className)
SA.dom.removeClass(el, className)
SA.dom.toggleClass(el, className)
SA.dom.hasClass(el, className)
SA.dom.show(el)
SA.dom.hide(el)
SA.dom.toggle(el)

// اسکرولنگ
SA.dom.scrollTo(el, options)
SA.dom.scrollToTop()
SA.dom.offset(el)
SA.dom.width(el)
SA.dom.height(el)
```

#### ایونٹس (`SA.events`):

```javascript
SA.events.on(el, event, handler, options)
SA.events.off(el, event, handler)
SA.events.once(el, event, handler)
SA.events.trigger(el, event, detail)
SA.events.delegate(parent, selector, event, handler)
SA.events.ready(handler)
SA.events.click(el, handler)
SA.events.submit(form, handler)
SA.events.change(el, handler)
SA.events.resize(handler)
SA.events.scroll(handler)
```

#### AJAX (`SA.ajax`):

```javascript
SA.ajax.get(url, options)
SA.ajax.post(url, data, options)
SA.ajax.put(url, data, options)
SA.ajax.patch(url, data, options)
SA.ajax.delete(url, options)
SA.ajax.getJSON(url, options)
SA.ajax.postJSON(url, data, options)
SA.ajax.upload(url, formData, onProgress)
SA.ajax.load(el, url)
SA.ajax.setBaseURL(url)
SA.ajax.setHeader(name, value)
SA.ajax.setAuth(token)
SA.ajax.abort(requestId)
SA.ajax.serialize(form)
```

#### اسٹوریج (`SA.storage`):

```javascript
SA.storage.set(key, value, ttl)
SA.storage.get(key, defaultValue)
SA.storage.remove(key)
SA.storage.clear()
SA.storage.has(key)
SA.storage.keys()
SA.storage.setJSON(key, obj, ttl)
SA.storage.getJSON(key, defaultValue)
SA.storage.session.set(key, value)
SA.storage.session.get(key, defaultValue)
```

#### کوکیز (`SA.cookie`):

```javascript
SA.cookie.set(name, value, options)
SA.cookie.get(name, defaultValue)
SA.cookie.remove(name, options)
SA.cookie.has(name)
SA.cookie.getAll()
```

#### URL (`SA.url`):

```javascript
SA.url.parse(urlString)
SA.url.build({protocol, host, path, query, hash})
SA.url.getParam(name)
SA.url.setParam(name, value)
SA.url.removeParam(name)
SA.url.getAllParams()
SA.url.join(...paths)
SA.url.redirect(url)
```

#### سٹرنگ (`SA.string`):

```javascript
SA.string.capitalize(str)              // "hello" → "Hello"
SA.string.toTitleCase(str)             // "hello world" → "Hello World"
SA.string.toCamelCase(str)             // "hello world" → "helloWorld"
SA.string.toSnakeCase(str)             // "helloWorld" → "hello_world"
SA.string.toKebabCase(str)             // "helloWorld" → "hello-world"
SA.string.slugify(str)                 // "Hello World!" → "hello-world"
SA.string.truncate(str, length, suffix)// "Hello Wo..."
SA.string.stripHTML(str)               // HTML ہٹائیں
SA.string.escapeHTML(str)
SA.string.unescapeHTML(str)
SA.string.random(length, charset)
SA.string.toBase64(str)
SA.string.fromBase64(str)
```

#### نمبر (`SA.number`):

```javascript
SA.number.format(num, decimals, locale)   // 1000 → "1,000"
SA.number.toCurrency(num, currency, locale)
SA.number.toPercentage(num, decimals)     // 0.5 → "50%"
SA.number.random(min, max)
SA.number.randomInt(min, max)
SA.number.clamp(num, min, max)
SA.number.isEven(num)
SA.number.isOdd(num)
```

#### اری (`SA.array`):

```javascript
SA.array.unique(arr)                     // ڈپلیکیٹ ہٹائیں
SA.array.flatten(arr, depth)
SA.array.chunk(arr, size)                // [ا،ب،ج،د] → [[ا،ب],[ج،د]]
SA.array.shuffle(arr)                    // مکس
SA.array.sample(arr, count)              // رینڈم
SA.array.remove(arr, item)
SA.array.removeByIndex(arr, index)
SA.array.sortBy(arr, key, order)
SA.array.groupBy(arr, key)
SA.array.sum(arr, key)
SA.array.average(arr, key)
SA.array.min(arr, key)
SA.array.max(arr, key)
SA.array.range(start, end, step)
SA.array.intersect(arr1, arr2)
SA.array.difference(arr1, arr2)
SA.array.compact(arr)                    // falsy ہٹائیں
```

#### آبجیکٹ (`SA.object`):

```javascriptSA.object.clone(obj)                     // ڈیپ کلون
SA.object.merge(...objects)              // ڈیپ مرج
SA.object.equals(obj1, obj2)             // ڈیپ ایکویلٹی
SA.object.keys(obj)
SA.object.values(obj)
SA.object.pick(obj, keys)                // مخصوص keys
SA.object.omit(obj, keys)                // مخصوص keys چھوڑیں
SA.object.get(obj, path, defaultValue)   // "a.b.c"
SA.object.set(obj, path, value)
SA.object.has(obj, path)
SA.object.isEmpty(obj)
SA.object.flatten(obj)
```

#### ڈیٹ (`SA.date`):

```javascript
SA.date.now()                            // timestamp
SA.date.format(date, format, locale)     // "DD/MM/YYYY"
SA.date.toJalali(date)                   // شمسی → جلالی
SA.date.fromJalali(year, month, day)     // جلالی → شمسی
SA.date.toHijri(date)                    // شمسی → ہجری قمری
SA.date.diff(date1, date2, unit)         // فرق
SA.date.add(date, amount, unit)          // جمع
SA.date.subtract(date, amount, unit)     // تفریق
SA.date.startOf(date, unit)              // دن/مہینے کا آغاز
SA.date.endOf(date, unit)                // دن/مہینے کا اختتام
SA.date.age(birthDate)                   // عمر
SA.date.isBefore(date1, date2)
SA.date.isAfter(date1, date2)
SA.date.isBetween(date, start, end)
SA.date.toRelative(date)                 // "5 منٹ پہلے"
SA.date.formatDuration(seconds)          // 3661 → "1 گھنٹہ 1 منٹ"
```

#### ویلڈیشن (`SA.validate`):

```javascript
SA.validate.email(value)
SA.validate.phone(value, country)        // "PK", "IN", "US"
SA.validate.url(value)
SA.validate.ip(value)
SA.validate.creditCard(value)
SA.validate.password(value, options)
SA.validate.number(value)
SA.validate.alpha(value)
SA.validate.alphanumeric(value)
SA.validate.required(value)
SA.validate.min(value, min)
SA.validate.max(value, max)
SA.validate.range(value, min, max)
SA.validate.length(value, length)
SA.validate.minLength(value, min)
SA.validate.maxLength(value, max)
SA.validate.pattern(value, regex)
SA.validate.equals(value, other)
SA.validate.isDate(value)
SA.validate.isJSON(str)
SA.validate.form(formEl, rules)
```

#### اینیمیشنز (`SA.anim`):

```javascript
SA.anim.fadeIn(el, duration, callback)
SA.anim.fadeOut(el, duration, callback)
SA.anim.fadeToggle(el, duration, callback)
SA.anim.slideDown(el, duration, callback)
SA.anim.slideUp(el, duration, callback)
SA.anim.slideToggle(el, duration, callback)
SA.anim.animate(el, keyframes, options)
SA.anim.stop(el)
```

#### یوٹیلیٹیز (`SA.utils`):

```javascript
SA.utils.debounce(fn, delay)
SA.utils.throttle(fn, limit)
SA.utils.once(fn)
SA.utils.memoize(fn)
SA.utils.sleep(ms)                       // Promise
SA.utils.uid(length)
SA.utils.uuid()
SA.utils.copyToClipboard(text)
SA.utils.isArray(val)
SA.utils.isObject(val)
SA.utils.isFunction(val)
SA.utils.isString(val)
SA.utils.isNumber(val)
SA.utils.isEmpty(val)
SA.utils.isTouchDevice()
SA.utils.isOnline()
```

#### بین الاقوامی (`SA.i18n`):

```javascript
SA.i18n.setLang(lang)                    // "ur", "en"
SA.i18n.getLang()
SA.i18n.translate(key, replacements)
SA.i18n.direction()                      // "rtl" / "ltr"
SA.i18n.isRTL()
SA.i18n.formatNumber(num, locale)
SA.i18n.formatDate(date, format, locale)
```

---

## 🗂️ مرحلہ 3: شعیب افتاب ائیکنز (Shoaib Aftab Icons)

---

### 3.1 پروجیکٹ ڈھانچہ

```
shoaib-aftab-icons/
├── package.json
├── README.md
├── LICENSE
├── src/
│   ├── sa-icons.css
│   ├── sa-icons.svg
│   └── icons/
│       ├── general/
│       ├── actions/
│       ├── arrows/
│       ├── social/
│       ├── files/
│       ├── communication/
│       ├── business/
│       ├── islamic/
│       ├── pakistani/
│       └── brands/
├── docs/
└── examples/
```

---

### 3.2 package.json

```json
{
  "name": "@shoaib-aftab/icons",
  "version": "1.0.0",
  "description": "Shoaib Aftab Icons - 500+ SVG icons with RTL support, zero dependencies",
  "main": "dist/sa-icons.min.css",
  "style": "dist/sa-icons.min.css",
  "files": ["dist/", "src/", "README.md", "LICENSE"],
  "scripts": {
    "build": "vite build",
    "dev": "vite"
  },
  "keywords": ["icons", "svg", "rtl", "urdu", "shoaib-aftab"],
  "author": "Shoaib Aftab Tech",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/shoaib-aftab-tech/shoaib-aftab-icons.git"
  }
}
```

---

### 3.3 SVG ڈیزائن معیارات

تمام آئیکنز W3C SVG Specification پر مبنی ہوں گے - صفر ڈیپینڈنسز:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- Paths -->
</svg>
```

---

### 3.4 CSS کلاسز

```css
/* بنیاد */
.sa-icon {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  stroke: currentColor;
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  vertical-align: middle;
}

/* سائز */
.sa-icon-xs { width: 0.75rem; height: 0.75rem; }
.sa-icon-sm { width: 1rem; height: 1rem; }
.sa-icon-lg { width: 2rem; height: 2rem; }
.sa-icon-xl { width: 2.5rem; height: 2.5rem; }

/* رنگ */
.sa-icon-primary { color: var(--sa-primary-600); }
.sa-icon-success { color: var(--sa-success-600); }
.sa-icon-danger { color: var(--sa-danger-600); }

/* اینیمیشن */
.sa-icon-spin { animation: sa-icon-spin 1s linear infinite; }
@keyframes sa-icon-spin { to { transform: rotate(360deg); } }

/* RTL */
[dir="rtl"] .sa-icon-arrow-left { transform: scaleX(-1); }
[dir="rtl"] .sa-icon-chevron-left { transform: scaleX(-1); }
```

---

### 3.5 آئیکنز کی فہرست (500+ آئیکنز)

**جنرل:**
```
sa-icon-home
sa-icon-building
sa-icon-globe
sa-icon-search
sa-icon-settings
sa-icon-filter
sa-icon-menu
sa-icon-plus
sa-icon-minus
sa-icon-x
sa-icon-check
sa-icon-star
sa-icon-heart
sa-icon-bookmark
sa-icon-share
sa-icon-link
sa-icon-copy
sa-icon-clipboard
sa-icon-tag
sa-icon-hash
sa-icon-at-sign
sa-icon-award
sa-icon-gift
sa-icon-package
sa-icon-archive
```

**ایکشنز:**
```
sa-icon-edit
sa-icon-delete
sa-icon-trash
sa-icon-save
sa-icon-download
sa-icon-upload
sa-icon-refresh
sa-icon-lock
sa-icon-unlock
sa-icon-key
sa-icon-log-in
sa-icon-log-out
sa-icon-power
sa-icon-play
sa-icon-pause
sa-icon-stop
sa-icon-maximize
sa-icon-minimize
sa-icon-eye
sa-icon-eye-off
sa-icon-send
```

**ایروز:**
```
sa-icon-arrow-up
sa-icon-arrow-down
sa-icon-arrow-left
sa-icon-arrow-right
sa-icon-chevron-up
sa-icon-chevron-down
sa-icon-chevron-left
sa-icon-chevron-right
sa-icon-chevrons-up
sa-icon-chevrons-down
sa-icon-redo
sa-icon-undo
sa-icon-reply
sa-icon-forward
```

**سوشل میڈیا:**
```
sa-icon-facebook
sa-icon-instagram
sa-icon-twitter
sa-icon-linkedin
sa-icon-youtube
sa-icon-whatsapp
sa-icon-telegram
sa-icon-tiktok
sa-icon-github
sa-icon-gitlab
sa-icon-discord
sa-icon-slack
```

**فائلز:**
```
sa-icon-file
sa-icon-file-text
sa-icon-folder
sa-icon-folder-open
sa-icon-image
sa-icon-video
sa-icon-music
sa-icon-camera
sa-icon-pdf
sa-icon-zip
sa-icon-database
sa-icon-hard-drive
```

**کمیونیکیشن:**
```
sa-icon-mail
sa-icon-mail-open
sa-icon-inbox
sa-icon-message-circle
sa-icon-phone
sa-icon-phone-call
sa-icon-mic
sa-icon-headphones
sa-icon-bell
sa-icon-bell-off
sa-icon-rss
```

**بزنس:**
```
sa-icon-briefcase
sa-icon-shopping-cart
sa-icon-credit-card
sa-icon-wallet
sa-icon-dollar-sign
sa-icon-bitcoin
sa-icon-bar-chart
sa-icon-pie-chart
sa-icon-trending-up
sa-icon-trending-down
sa-icon-calculator
sa-icon-printer
sa-icon-barcode
sa-icon-qr-code
sa-icon-trophy
```

**یوزرز:**
```
sa-icon-user
sa-icon-users
sa-icon-user-plus
sa-icon-user-check
sa-icon-avatar
sa-icon-id-card
sa-icon-fingerprint
```

**سیکیورٹی:**
```
sa-icon-shield
sa-icon-shield-check
sa-icon-shield-alert
sa-icon-lock-keyhole
sa-icon-scan
sa-icon-fingerprint-scan
sa-icon-certificate
```

**ڈیوائسز:**
```
sa-icon-monitor
sa-icon-laptop
sa-icon-tablet
sa-icon-smartphone
sa-icon-watch
sa-icon-cpu
sa-icon-wifi
sa-icon-wifi-off
sa-icon-bluetooth
```

**ویدر:**
```
sa-icon-sun
sa-icon-moon
sa-icon-cloud
sa-icon-cloud-rain
sa-icon-umbrella
sa-icon-wind
sa-icon-sunrise
sa-icon-sunset
```

**میپس:**
```
sa-icon-map
sa-icon-map-pin
sa-icon-navigation
sa-icon-compass
sa-icon-route
sa-icon-locate
```

**ٹرانسپورٹ:**
```
sa-icon-car
sa-icon-bus
sa-icon-train
sa-icon-plane
sa-icon-ship
sa-icon-bike
sa-icon-truck
sa-icon-fuel
```

**فوڈ:**
```
sa-icon-coffee
sa-icon-utensils
sa-icon-pizza
sa-icon-ice-cream
sa-icon-cake
sa-icon-glass
```

**میڈیکل:**
```
sa-icon-heart-pulse
sa-icon-stethoscope
sa-icon-pill
sa-icon-syringe
sa-icon-hospital
sa-icon-ambulance
```

**ایجوکیشن:**
```
sa-icon-book
sa-icon-book-open
sa-icon-graduation-cap
sa-icon-school
sa-icon-pencil-ruler
sa-icon-palette
```

**انٹرٹینمنٹ:**
```
sa-icon-gamepad
sa-icon-dice
sa-icon-ticket
sa-icon-play-circle
sa-icon-guitar
```

**اسلامی:**
```
sa-icon-quran
sa-icon-mosque
sa-icon-crescent
sa-icon-star-crescent
sa-icon-prayer
sa-icon-kaaba
sa-icon-tasbih
sa-icon-ramadan
sa-icon-eid
sa-icon-islamic-calendar
```

**پاکستانی:**
```
sa-icon-pakistan
sa-icon-pakistan-flag
sa-icon-cnic
sa-icon-rupee
sa-icon-cricket
sa-icon-minar-e-pakistan
sa-icon-faisal-mosque
sa-icon-mazar-e-quaid
sa-icon-k2
sa-icon-truck-art
```

**برانڈز:**
```
sa-icon-google
sa-icon-apple
sa-icon-microsoft
sa-icon-android
sa-icon-amazon
sa-icon-netflix
sa-icon-spotify
sa-icon-paypal
sa-icon-visa
sa-icon-mastercard
```

---

## 🎯 مرحلہ 4: صفر ڈیپینڈنسز - اہم ہدایت

تینوں لائبریریاں درج ذیل معیارات پر مبنی ہوں گی - کسی بیرونی ڈیپینڈنسی کی ضرورت نہیں:

| لائبریری | معیار (Standard) |
|---------|-----------------|
| **Shoaib Aftab CSS** | W3C CSS Specification |
| **Shoaib Aftab JS** | ECMAScript Specification (W3C) |
| **Shoaib Aftab Icons** | W3C SVG Specification |

کوئی بھی بیرونی لائبریری (جیسے Tailwind, Bootstrap, jQuery, Lodash, Feather Icons) استعمال نہیں کرنا۔ صرف W3C معیارات پر مبنی خالص کوڈ لکھنا ہے۔

---

## 📚 مرحلہ 5: ڈاکیومینٹیشن

ہر لائبریری کے لیے `docs/index.md` میں درج ذیل چیزیں ہوں:

1. **تعارف** - لائبریری کیا ہے
2. **انسٹالیشن** - npm اور CDN دونوں طریقے
3. **استعمال** - کوڈ مثالیں
4. **API ریفرنس** - تمام کلاسز/فنکشنز کی فہرست
5. **RTL سپورٹ** - اردو/عربی کے لیے

---

## ✅ چیک لسٹ

- [ ] تمام CSS کلاسز کا پریفکس `sa-`
- [ ] تمام JS فنکشنز کا پریفکس `SA.`
- [ ] تمام آئیکن کلاسز کا پریفکس `sa-icon-`
- [ ] صفر ڈیپینڈنسز - صرف W3C معیارات
- [ ] RTL مکمل سپورٹ
- [ ] ڈارک موڈ سپورٹ
- [ ] CSS: 400+ کلاسز
- [ ] JS: 150+ فنکشنز
- [ ] Icons: 500+ SVG آئیکنز
- [ ] ہر آئیکن 24x24 viewBox کے ساتھ
- [ ] ہر آئیکن stroke="2", round caps/joins
- [ ] npmjs.com پر پبلش
- [ ] docs فولڈر میں مکمل ڈاکیومینٹیشن
- [ ] MIT لائسنس
- [ ] GitHub پر ریپو پبلک
